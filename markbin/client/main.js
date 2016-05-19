import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});
