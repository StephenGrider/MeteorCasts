import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <h1>Hello there!</h1>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});
