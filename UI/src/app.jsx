import EmployeeDirectory from "./employeeDirectory.jsx";
import { ReactDOM, Component } from "react";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <EmployeeDirectory />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
