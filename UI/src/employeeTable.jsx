import React from "react";
export default class EmployeeTable extends React.Component {

    handleDelete = async (id) => {
        try {
            fetch("http://localhost:4000/graphql", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    query: `
                        mutation deleteEmployee($id: ID!){
                            deleteEmployee(id: $id) {
                                id
                            }
                        }
                    `,
                    variables: JSON.stringify({ id }),
                }),
            }).then(() => {
                this.props.onDelete(id);
            })
        } catch (error) {
            console.error("Error deleting employee:", error);
        }
    };

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
                                        <button
                                            onClick={() => {
                                                this.handleDelete(employee.id);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
