import React from "react";
export default class EmployeeCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newEmployee: {
        FirstName: "",
        LastName: "",
        Age: "",
        DateOfJoining: "",
        Title: "",
        Department: "",
        EmployeeType: "Full Time",
      },
      errors: {}, // For storing validation errors
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    let parsedValue = value;

    if (name === "Age") {
      parsedValue = parseInt(value, 10) || ""; // Ensure it's a valid integer or an empty string
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
          FirstName: "",
          LastName: "",
          Age: "",
          DateOfJoining: "",
          Title: "",
          Department: "",
          EmployeeType: "Full Time",
        },
        errors: {},
      });
    } else {
      this.setState({ errors });
    }
  };

  validate = (employee) => {
    const errors = {};

    if (!employee.FirstName.trim()) {
      errors.FirstName = "First Name is required";
    }

    if (!employee.LastName.trim()) {
      errors.LastName = "Last Name is required";
    }

    if (!employee.Age) {
      errors.Age = "Age is required";
    } else if (isNaN(employee.Age) || employee.Age < 18) {
      errors.Age = "Age must be a valid number and greater than 18";
    }

    return errors;
  };

  render() {
    const { newEmployee, errors } = this.state;

    return (
      <div style={{ margin: "20px" }}>
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
            {errors.FirstName && (
              <span style={{ color: "red" }}>{errors.FirstName}</span>
            )}
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="LastName"
              value={newEmployee.LastName}
              onChange={this.handleInputChange}
            />
            {errors.LastName && (
              <span style={{ color: "red" }}>{errors.LastName}</span>
            )}
          </label>
          <label>
            Age:
            <input
              type="text"
              name="Age"
              value={newEmployee.Age}
              onChange={this.handleInputChange}
            />
            {errors.Age && <span style={{ color: "red" }}>{errors.Age}</span>}
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
