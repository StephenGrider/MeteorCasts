// Any JS in here is automatically ran for us

// Import the React library
import React from 'react';
import ReactDOM from 'react-dom';

// Create a component
const App = () => {
  return (
    <div>
      React App #2
    </div>
  );
};

// Render this component to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
