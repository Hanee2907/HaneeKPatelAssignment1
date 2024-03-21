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
