import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeDirectory from "./employeeDirectory.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <EmployeeDirectory />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
