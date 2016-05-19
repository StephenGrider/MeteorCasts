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
function onRoute() {
  // Take the token out of hte url and try to a find a
  // matching link in the Links collection

  // If we find a link object, redirect the user to the
  // long URL

  // If we don't find a link object, send the user
  // to our normal React app
}

const middleware = ConnectRoute(function(router) {
  router.get('/:token', onRoute);
});

WebApp.connectHandlers.use(middleware);
