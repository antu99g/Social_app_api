const express = require("express");
const port = 8000;
const app = express();

// Configuring environment variables
require("dotenv").config();

// Allow cross-origin-requests
const cors = require("cors");
app.use(cors());

// Serve static files from the "assets" folder
app.use("/assets", express.static("assets"));

// Fetching form-data/request-body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/", require("./routes"));

app.listen(port, (err) => {
  if (err) {
    console.log("Error in running the server");
  } else {
    console.log("Server is running on port:", port);
  }
});
