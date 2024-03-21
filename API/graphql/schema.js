const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    id: ID!
    FirstName: String!
    LastName: String!
    Age: Int!
    DateOfJoining: String
    Title: String!
    Department: String!
    EmployeeType: String!
    CurrentStatus: Boolean
  }

  type Query {
    getEmployees: [Employee]
  }

  type Mutation {
    createEmployee(employeeInput: EmployeeInput): Employee
  }

  input EmployeeInput {
    FirstName: String!
    LastName: String!
    Age: Int!
    DateOfJoining: String!
    Title: String!
    Department: String!
    EmployeeType: String!
    CurrentStatus: Boolean
  }
`;

module.exports = typeDefs;