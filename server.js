//Import packages
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

//Set up port
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist")
.then((success) => {
    if(success) {
        console.log("succesful connection to MongoDB")
    }
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
