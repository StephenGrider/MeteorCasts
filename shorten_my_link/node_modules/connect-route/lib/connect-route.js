(function () {
	'use strict';
	var
		methods = [ 'get', 'post', 'put', 'head', 'patch', 'delete', 'connect', 'options', 'trace', 'copy', 'lock', 'mkcol', 'move', 'propfind', 'proppatch', 'unlock', 'report', 'mkactivity', 'checkout', 'merge' ],
		separator = /^[\s\/]+|[\s\/]+$/g,
		i, length,

		createMethodHandler = function (method) {
			method = method.toUpperCase();
			return function () {
				var i;
				for (i = 0; i < arguments.length - 1; i++) {
					this.add(method, arguments[i], arguments[arguments.length - 1]);
				}
			};
		},

		Router = function () {
			this.routes = {};
		};

	Router.prototype.add = function (method, route, handler) {
		var	parts, current, i, length, name;

		if (typeof handler !== 'function') { return; }
		if (!this.routes[method]) { this.routes[method] = { childs: {}, handler: undefined, route: undefined }; }

		parts = route.split('?', 1)[0].replace(separator, '').split('/');

		if (!parts[0].length) {
			this.routes[method].handler = handler;
			this.routes[method].route = route;
		} else {
			current = this.routes[method];
			for (i = 0, length = parts.length; i < length; i++) {
				name = undefined;
				if (parts[i].charAt(0) === ':') {
					name = parts[i].substr(1);
					parts[i] = '*';
				}
				if ((!current.childs[parts[i]] && (current.childs[parts[i]] = {})) || (parts[i] === '*' && !current.childs[parts[i]][length])) {
					if (parts[i] === '*') {
						current.childs[parts[i]][length] = { handler: undefined, route: undefined, childs: {}, name: name };
					} else {
						current.childs[parts[i]] = { handler: undefined, route: undefined, childs: {}, name: name };
					}
				}
				if (parts[i] === '*') {
					current = current.childs[parts[i]][length];
				} else {
					current = current.childs[parts[i]];
				}
			}
			current.handler = handler;
			current.route = route;
		}
	};

	Router.prototype.match = function (method, url) {
		var
			parts = decodeURI(url).split('?', 1)[0].replace(separator, '').split('/'),
			result = { handler: undefined, route: undefined, params: {} },
			current, i, length;

		if (this.routes[method]) {
			if (!parts[0].length) {
				result.handler = this.routes[method].handler;
				result.route = this.routes[method].route;
			} else {
				current = this.routes[method];
				for (i = 0, length = parts.length; i < length; i++) {
					if (current.childs[parts[i]]) {
						current = current.childs[parts[i]];
						result.handler = current.handler;
						result.route = current.route;
					} else if (current.childs['*'] && current.childs['*'][length]) {
						current = current.childs['*'][length];
						result.handler = current.handler;
						result.route = current.route;
						result.params[current.name] = parts[i];
					} else {
						result.handler = undefined;
						result.route = undefined;
						result.params = {};
						break;
					}
				}
			}
		}
		return result;
	};

	for (i = 0, length = methods.length; i < length; i++) {
		Router.prototype[methods[i]] = createMethodHandler(methods[i]);
	}

	module.exports = function (cb) {
		var router = new Router();
		if (typeof cb === 'function') { cb(router); }

		return function (req, res, next) {
			var action = router.match(req.method, req.url);
			if (action.handler) {
				req.route = action.route;
				req.params = action.params;
				action.handler(req, res, next);
			} else {
				req.route = undefined;
				req.params = {};
				next();
			}
		};
	};
}());
