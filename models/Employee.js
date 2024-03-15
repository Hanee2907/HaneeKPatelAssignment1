const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  Age: Number,
  DateOfJoining: Date,
  Title: String,
  Department: String,
  EmployeeType: String,
  CurrentStatus: Boolean,
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;