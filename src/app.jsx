class App extends React.Component {
  render() {
    return (
      <div>
        <EmployeeDirectory />
      </div>
    );
  }
}

class EmployeeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParams: {
        Age: "",
        Department: "",
        jobTitle: "",
      },
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    let parsedValue = value;
  
    if (name === 'Age') {
      parsedValue = isNaN(value) ? '' : parseInt(value, 10);
    }
  
    this.setState((prevState) => ({
      newEmployee: {
        ...prevState.newEmployee,
        [name]: parsedValue,
      },
    }));
  };

  handleSearch = () => {
    const { onSearch } = this.props;
    const { searchParams } = this.state;
    onSearch(searchParams);
  };

  render() {
    const { searchParams } = this.state;

    return (
      <div>
        <h2>Search Employees</h2>
        <label>
          Age:
          <input
            type="number"
            name="Age"
            value={searchParams.Age}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Department:
          <input
            type="text"
            name="Department"
            value={searchParams.Department}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Job Title:
          <input
            type="text"
            name="jobTitle"
            value={searchParams.jobTitle}
            onChange={this.handleInputChange}
          />
        </label>
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

class EmployeeCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newEmployee: {
        FirstName: '',
        LastName: '',
        Age: '',
        DateOfJoining: '',
        Title: '',
        Department: '',
        EmployeeType: 'Full Time',
      },
      errors: {} // For storing validation errors
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    let parsedValue = value;

    if (name === 'Age') {
      parsedValue = parseInt(value, 10) || ''; // Ensure it's a valid integer or an empty string
    }

    this.setState((prevState) => ({
      newEmployee: {
        ...prevState.newEmployee,
        [name]: parsedValue,
      },
    }));
  };

  handleCreate = () => {
    const { onAdd } = this.props;
    const { newEmployee } = this.state;

    // Validate input before adding
    const errors = this.validate(newEmployee);
    if (Object.keys(errors).length === 0) {
      onAdd(newEmployee);

      this.setState({
        newEmployee: {
          FirstName: '',
          LastName: '',
          Age: '',
          DateOfJoining: '',
          Title: '',
          Department: '',
          EmployeeType: 'Full Time',
        },
        errors: {}
      });
    } else {
      this.setState({ errors });
    }
  };

  validate = (employee) => {
    const errors = {};

    if (!employee.FirstName.trim()) {
      errors.FirstName = 'First Name is required';
    }

    if (!employee.LastName.trim()) {
      errors.LastName = 'Last Name is required';
    }

    if (!employee.Age) {
      errors.Age = 'Age is required';
    } else if (isNaN(employee.Age) || employee.Age < 18) {
      errors.Age = 'Age must be a valid number and greater than 18';
    }


    return errors;
  };

  render() {
    const { newEmployee, errors } = this.state;

    return (
      <div style={{ margin: '20px' }}>
        <h2>Create New Employee</h2>
        <form>
          <label>
            First Name:
            <input
              type="text"
              name="FirstName"
              value={newEmployee.FirstName}
              onChange={this.handleInputChange}
            />
            {errors.FirstName && <span style={{color: 'red'}}>{errors.FirstName}</span>}
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="LastName"
              value={newEmployee.LastName}
              onChange={this.handleInputChange}
            />
            {errors.LastName && <span style={{color: 'red'}}>{errors.LastName}</span>}
          </label>
          <label>
            Age:
            <input
              type="text"
              name="Age"
              value={newEmployee.Age}
              onChange={this.handleInputChange}
            />
            {errors.Age && <span style={{color: 'red'}}>{errors.Age}</span>}
          </label>
          <label>
            Date of Joining:
            <input
              type="date"
              name="DateOfJoining"
              value={newEmployee.DateOfJoining}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Title:
            <input
              type="text"
              name="Title"
              value={newEmployee.Title}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Department:
            <select
              name="Department"
              value={newEmployee.Department}
              onChange={this.handleInputChange}
            >
              <option value="">Select Department</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="IT">IT</option>
            </select>
          </label>
          <label>
            Employee Type:
            <select
              name="EmployeeType"
              value={newEmployee.EmployeeType}
              onChange={this.handleInputChange}
            >
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
            </select>
          </label>
          <button type="button" onClick={this.handleCreate}>
            Create
          </button>
        </form>
      </div>
    );
  }
}




class EmployeeDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    this.fetchEmployees();
  }

  fetchEmployees = async () => {
    try {
      const response = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query {
              getEmployees {
                id
                FirstName
                LastName
                Age
                DateOfJoining
                Title
                Department  
                EmployeeType
                CurrentStatus
              }
            }
          `,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log(result.data);
      this.setState({ employees: result.data.getEmployees });
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  handleAddEmployee = async (newEmployee) => {
    try {
      const response = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            mutation createEmployee($employeeInput: EmployeeInput!) {
              createEmployee(employeeInput: $employeeInput) {
                id
                FirstName
                LastName
                Age
                DateOfJoining
                Title
                Department  
                EmployeeType
                CurrentStatus
              }
            }
          `,
          variables: {employeeInput: newEmployee},
        }),
      });
      if (!response.ok) {
        throw new Error("Error adding employee");
        return;
      }
      const result = await response.json();
      this.setState({ employees: [...this.state.employees, newEmployee]});

    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  render() {
    const { employees } = this.state;

    return (
      <div>
        <h1>Employee Directory</h1>
        <EmployeeSearch />
        <EmployeeTable employees={employees} />
        <EmployeeCreate onAdd={this.handleAddEmployee} />
      </div>
    );
  }
}

class EmployeeTable extends React.Component {
  render() {
    const { employees } = this.props;

    return (
      <div>
        <h2>Employee List</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Date of Joining</th>
              <th>Title</th>
              <th>Department</th>
              <th>Employee Type</th>
              <th>Current Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees &&
              employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.FirstName}</td>
                  <td>{employee.LastName}</td>
                  <td>{employee.Age}</td>
                  <td>{employee.DateOfJoining}</td>
                  <td>{employee.Title}</td>
                  <td>{employee.Department}</td>
                  <td>{employee.EmployeeType}</td>
                  <td>{employee.CurrentStatus}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

