const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Route for retrieving a student's record by their ID
router.get('/:studentId', studentController.getStudentById);

module.exports = router;
