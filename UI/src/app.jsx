import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import EmployeeTable from "./employeeTable.jsx";
import EmployeeDirectory from "./employeeDirectory.jsx";
import EmployeeCreate from "./employeeCreate.jsx";
import { Link } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Link className="me-2" to="/">Home</Link>
                    <Link className="me-2" to="/list/all">List</Link>
                    <Link to="/add-new">Add New</Link>
                </div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/list/:filterType" component={EmployeeDirectory} />
                    <Route exact path="/add-new" component={EmployeeCreate} />
                    <Route exact path="/edit/:id" component={EmployeeCreate} />
                    <Route exact path="/view/:id" component={EmployeeCreate} />
                </Switch>
            </Router>
        );
    }
}

class Home extends React.Component {
    render() {
        return (<div>Welcome to My Application</div>);
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
