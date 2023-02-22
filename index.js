const express = require('express');
const port = 8000;
const app = express();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });


// Configuring environment variables
require("dotenv").config();


// Connecting to database
const db = require('./config/mongoose');

const cors = require('cors');


// Configuration for uploading files
app.use('/uploads', express.static('uploads'));


// Fetching form data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());

// Routes
app.use('/', require('./routes'));


app.listen(port, (err) => {
   if(err){
      console.log("Error in running the server");
   } else {
      console.log('Server is running on port:', port);
   }
})