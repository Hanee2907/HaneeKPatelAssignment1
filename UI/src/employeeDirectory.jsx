import EmployeeCreate from "./employeeCreate.jsx";
import EmployeeSearch from "./employeeSearch.jsx";
import EmployeeTable from "./employeeTable.jsx";

export default class EmployeeDirectory extends React.Component {
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
  handleEditEmployee = (employeeId) => {
    // Navigate to the edit employee route with the employee ID
    this.props.history.push(`/edit-employee/${employeeId}`);
  };
  handleDeleteEmployee = async (employeeId) => {
    try {
      const response = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            mutation deleteEmployee($id: ID!) {
              deleteEmployee(id: $id) {
                id
              }
            }
          `,
          variables: { id: employeeId },
        }),
      });
  
      if (!response.ok) {
        throw new Error("Error deleting employee");
      }
  
      // Filter out the deleted employee from the state
      const updatedEmployees = this.state.employees.filter(
        (employee) => employee.id !== employeeId
      );
      this.setState({ employees: updatedEmployees });
    } catch (error) {
      console.error("Error deleting employee:", error);
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
          variables: { employeeInput: newEmployee },
        }),
      });
      if (!response.ok) {
        throw new Error("Error adding employee");
        return;
      }
      const result = await response.json();
      this.setState({ employees: [...this.state.employees, newEmployee] });
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
