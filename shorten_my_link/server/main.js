import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';

Meteor.startup(() => {
  Meteor.publish('links', function() {
    return Links.find({});
  });
});
