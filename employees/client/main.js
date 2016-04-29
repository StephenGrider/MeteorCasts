import React from 'react';
import ReactDOM from 'react-dom';

import EmployeeList from './components/employee_list';

const App = () => {
  return (
    <div>
      <EmployeeList />
    </div>
  );
};

// After Meteor loads in the browser, render my app to the DOM.
Meteor.startup(() => {
  // React render call
  ReactDOM.render(<App />, document.querySelector('.container'));
});
