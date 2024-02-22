const Student = require('../models/studentModel');

// Controller for retrieving a student's record by their ID
exports.getStudentById = async (req, res) => {
    const studentId = req.params.studentId;

    try {
        // Find the student record by ID
        const student = await Student.findByPk(studentId);

        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }

        // Return the student record
        res.json(student);
    } catch (error) {
        console.error('Error retrieving student:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
