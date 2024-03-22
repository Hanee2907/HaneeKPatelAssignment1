import React from "react";
export default class EmployeeSearch extends React.Component {
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

    if (name === "Age") {
      parsedValue = isNaN(value) ? "" : parseInt(value, 10);
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
