var require = meteorInstall({"imports":{"collections":{"links.js":["meteor/mongo","valid-url","meteor/check",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/collections/links.js                                                                   //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
exports.__esModule = true;                                                                        //
exports.Links = undefined;                                                                        //
                                                                                                  //
var _mongo = require('meteor/mongo');                                                             // 1
                                                                                                  //
var _validUrl = require('valid-url');                                                             // 2
                                                                                                  //
var _validUrl2 = _interopRequireDefault(_validUrl);                                               //
                                                                                                  //
var _check = require('meteor/check');                                                             // 3
                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
                                                                                                  //
Meteor.methods({                                                                                  // 5
  'links.insert': function () {                                                                   // 6
    function linksInsert(url) {                                                                   // 6
      (0, _check.check)(url, _check.Match.Where(function (url) {                                  // 7
        return _validUrl2['default'].isUri(url);                                                  //
      }));                                                                                        //
                                                                                                  //
      // We're ready to save the url                                                              //
      var token = Math.random().toString(36).slice(-5);                                           // 6
      Links.insert({ url: url, token: token, clicks: 0 });                                        // 11
    }                                                                                             //
                                                                                                  //
    return linksInsert;                                                                           //
  }()                                                                                             //
});                                                                                               //
                                                                                                  //
var Links = exports.Links = new _mongo.Mongo.Collection('links');                                 // 15
////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"server":{"main.js":["meteor/meteor","../imports/collections/links","meteor/webapp","connect-route",function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// server/main.js                                                                                 //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var _meteor = require('meteor/meteor');                                                           // 1
                                                                                                  //
var _links = require('../imports/collections/links');                                             // 2
                                                                                                  //
var _webapp = require('meteor/webapp');                                                           // 3
                                                                                                  //
var _connectRoute = require('connect-route');                                                     // 4
                                                                                                  //
var _connectRoute2 = _interopRequireDefault(_connectRoute);                                       //
                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
                                                                                                  //
_meteor.Meteor.startup(function () {                                                              // 6
  _meteor.Meteor.publish('links', function () {                                                   // 7
    return _links.Links.find({});                                                                 // 8
  });                                                                                             //
});                                                                                               //
                                                                                                  //
// Executed whenever a user visits with a route like                                              //
// 'localhost:3000/abcd'                                                                          //
function onRoute(req, res, next) {                                                                // 14
  // Take the token out of hte url and try to a find a                                            //
  // matching link in the Links collection                                                        //
  var link = _links.Links.findOne({ token: req.params.token });                                   // 17
                                                                                                  //
  if (link) {                                                                                     // 19
    // If we find a link object, redirect the user to the                                         //
    // long URL                                                                                   //
    _links.Links.update(link, { $inc: { clicks: 1 } });                                           // 22
    res.writeHead(307, { 'Location': link.url });                                                 // 23
    res.end();                                                                                    // 24
  } else {                                                                                        //
    // If we don't find a link object, send the user                                              //
    // to our normal React app                                                                    //
    next();                                                                                       // 28
  }                                                                                               //
}                                                                                                 //
                                                                                                  //
var middleware = (0, _connectRoute2['default'])(function (router) {                               // 32
  router.get('/:token', onRoute);                                                                 // 33
});                                                                                               //
                                                                                                  //
_webapp.WebApp.connectHandlers.use(middleware);                                                   // 36
////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
