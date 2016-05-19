import React, { Component } from 'react';

class Accounts extends Component {
  componentDidMount() {
    // Render the Blaze accounts form then find the div
    // we just rendered in the 'render' method and place
    // the Blaze accounts form in that div
  }

  componentWillUnmount() {
    // Go find the forms we created and destroy them
    // We need to clean up those forms ourselves
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Accounts;
