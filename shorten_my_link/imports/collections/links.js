import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'links.insert': function(url) {
    console.log('attempting to save', url);
  }
});

export const Links = new Mongo.Collection('links');
