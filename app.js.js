const express = require('express');
const app = express();
const studentRoutes = require('./routes/studentRoutes');

// Middleware to parse JSON requests
app.use(express.json());

// Routes for handling student records
app.use('/students', studentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
