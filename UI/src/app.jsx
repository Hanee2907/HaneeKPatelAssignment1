import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import EmployeeDirectory from "./employeeDirectory.jsx";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <EmployeeDirectory />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
