const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const recipeRoutes = require('./routes/recipes');
const cookbookRoutes = require('./routes/cookbooks');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {  
}).then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });


// Basic Route 
app.get('/', (req, res) => {
    res.send('welcome to the Recipe API');
});


// Routes 
app.use('/recipes', recipeRoutes);
app.use('/cookbooks', cookbookRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${PORT} is already in use. Try using a different port.`);
    } else {
      console.error('Error starting the server:', err.message);
    }
  });