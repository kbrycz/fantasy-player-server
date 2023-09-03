// app.js

const express = require('express');
const mongoose = require('mongoose');
const playerRoutes = require('./routes/players');
const cors = require('cors');

// Initialize express
const app = express();

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://admin:showmethemoney@fantasy.3y4sejg.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Failed to connect to MongoDB', err));

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Use routes
app.use('/players', playerRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
