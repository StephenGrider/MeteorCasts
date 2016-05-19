import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});
