// Import the necessary packages
const express = require('express'); // Express framework for building web applications
const app = express(); // Initialize the Express application
const port = 4000; // Define the port where the server will run

// Import CORS to enable cross-origin requests
const cors = require('cors'); 
app.use(cors()); // Allow requests from other origins

// Middleware to handle CORS and preflight requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow these HTTP methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Allowed headers
  next(); // Pass control to the next middleware
});

// Import body-parser to parse incoming request bodies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(bodyParser.json()); // Parse JSON payloads

// Import mongoose to interact with MongoDB
const mongoose = require('mongoose');
// Connect to MongoDB Atlas using mongoose
mongoose.connect('mongodb+srv://admin:admin@kieranscluster.zfxym.mongodb.net/');

// Define a schema for movies
const movieSchema = new mongoose.Schema({
  title: String,  // Movie title
  year: String,   // Year of release
  poster: String  // URL to the poster image
});

// Create a model from the schema
const movieModel = mongoose.model('myMovies', movieSchema);

// Handle POST requests to add a new movie
app.post('/api/movies', async (req, res) => {
    console.log("Movie added: " + req.body.title); // Log the movie title being added

    const { title, year, poster } = req.body; // Destructure the movie data from the request body
    const newMovie = new movieModel({ title, year, poster }); // Create a new movie document
    newMovie.save(); // Save the new movie to the database
    res.send("Movie Added!"); // Send a response to the client
});

// Handle GET requests to fetch all movies from the database
app.get('/api/movies', async (req, res) => {
  const movies = await movieModel.find({}); // Retrieve all movie documents from the database
  res.json(movies); // Send the movies as a JSON response
});

// Handle GET requests to fetch a single movie by its ID
app.get('/api/movie/:id', async (req, res) => {
  const movie = await movieModel.findById(req.params.id); // Find the movie by its ID
  res.send(movie); // Send the movie as a response
});

// Handle PUT requests to update a movie by its ID
app.put('/api/movie/:id', async (req, res) => {
  let movie = await movieModel.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Update the movie and return the updated document
  res.send(movie); // Send the updated movie as a response
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Log the server URL
});
