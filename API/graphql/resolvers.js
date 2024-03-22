const Employee = require("../models/Employee");

const resolvers = {
  Query: {
    getEmployees: async () => {
      try {
        const employees = await Employee.find();

          console.log(employees[0].DateOfJoining);
          console.log(employees);
        return employees;
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    createEmployee: async (_, { employeeInput }) => {
      const employee = new Employee({
        ...employeeInput,
      });

      try {
        const result = await employee.save();
        return result;
      } catch (err) {
        throw err;
      }
    },
  },
};

module.exports = resolvers;
