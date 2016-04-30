import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';

const EmployeeList = (props) => {
  // props.employees => an array of employee objects

  return (
    <div>
      <div className="employee-list">
        Employee List
      </div>
    </div>
  );
};

export default createContainer(() => {
  // set up subscription
  Meteor.subscribe('employees');

  // return an object.  Whatever we return will be sent to EmployeeList
  // as props
  return { employees: Employees.find({}).fetch() };
}, EmployeeList);
