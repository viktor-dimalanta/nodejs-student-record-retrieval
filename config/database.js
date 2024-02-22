const { Sequelize } = require('sequelize');

// Database configuration
const sequelize = new Sequelize('student_record', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // Specify MySQL dialect
  port: 3306, // Default MySQL port
});

module.exports = sequelize;
