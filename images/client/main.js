// Any JS in here is automatically ran for us

// Import the React library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

// Create a component
class App extends Component {
  componentWillMount() {
    // Fantastic place to load data!
    console.log('App is about to render');
  }

  render() {
    return (
      <div>
        <ImageList />
      </div>
    );
  }
};

// Render this component to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
  axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
    .then(response => console.log(response));
});
