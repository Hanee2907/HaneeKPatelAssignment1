import React from 'react';

export default class EmployeeTable extends React.Component {
  handleDeleteClick = (employeeId) => {
    // Call onDelete method passed as a prop
    this.props.onDelete(employeeId);
  };

  handleEditClick = (employeeId) => {
    // Call onEdit method passed as a prop
    this.props.onEdit(employeeId);
  };

  render() {
    const { employees } = this.props;

    return (
      <div>
        <h2>Employee List</h2>
        <table>
          {/* Your table structure */}
          <tbody>
            {employees &&
              employees.map((employee) => (
                <tr key={employee.id}>
                  {/* Your table row structure */}
                  <td>
                    {/* Edit button */}
                    <button onClick={() => this.handleEditClick(employee.id)}>Edit</button>
                    {/* Delete button */}
                    <button onClick={() => this.handleDeleteClick(employee.id)}>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

