const Student = require('../models/studentModel');

// Service for retrieving a student's record by their ID
exports.getStudentById = async (studentId) => {
    try {
        // Find the student record by ID
        const student = await Student.findByPk(studentId);

        return student;
    } catch (error) {
        console.error('Error retrieving student:', error);
        throw new Error('Error retrieving student');
    }
};
