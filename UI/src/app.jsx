import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmployeeTable from "./employeeTable.jsx";
import EmployeeSearch from "./employeeSearch.jsx";
import EmployeeCreate from "./employeeCreate.jsx";
import { Link } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="justify-content-center">
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/list/all">List</Link>
                    </div>
                    <div>
                        <Link to="/add-new">Add New</Link>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/list/all" component={EmployeeTable} />
                    <Route exact path="/list/:filterType" component={EmployeeSearch} />
                    <Route exact path="/add-new" component={EmployeeCreate} />
                    <Route exact path="/edit/:id" component={EmployeeCreate} />
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
