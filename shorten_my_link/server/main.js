import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  Meteor.publish('links', function() {
    return Links.find({});
  });
});

// Executed whenever a user visits with a route like
// 'localhost:3000/abcd'
function onRoute(req, res, next) {
  // Take the token out of hte url and try to a find a
  // matching link in the Links collection
  const link = Links.findOne({ token: req.params.token });

  if (link) {
    // If we find a link object, redirect the user to the
    // long URL
    Links.update(link, { $inc: { clicks: 1 }});
    res.writeHead(307, { 'Location': link.url });
    res.end();
  } else {
    // If we don't find a link object, send the user
    // to our normal React app
    next();
  }
}

const middleware = ConnectRoute(function(router) {
  router.get('/:token', onRoute);
});

WebApp.connectHandlers.use(middleware);
