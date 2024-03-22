import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeSearch from './employeeSearch.jsx';
import EmployeeDirectory from "./employeeDirectory.jsx";

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={EmployeeDirectory} />
          <Route path="/employee-list" component={EmployeeList} />
          <Route path="/employee-search" component={EmployeeSearch} />
          <Route path="/add-employee" component={AddEmployee} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
