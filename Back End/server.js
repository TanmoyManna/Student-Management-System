// This will be the starting point of the application

// Importing Config Files
const dbConfig = require("./configs/db.config");
const serverConfig = require("./configs/server.config");
const fileConfig = require("./configs/file.config");

// Importing express framework and mongoose ODM
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Importing CORS and using it in our app
var cors = require('cors');
app.use(cors());

// Importing bodyParser and using it in app To convert JSON to Js Objects and vice versa
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setting up the render url for static content
app.use('/uploads', express.static(fileConfig.renderUrl));

/**
 * Plugging in the routes
 */


// To start  our server
app.listen(serverConfig.PORT, async () => {
  console.log(`Server started on port ${serverConfig.PORT}`);
});

// To connect to the database
mongoose.connect(dbConfig.DB_URL || process.env.MONGODB_URI);
const DB = mongoose.connection;
DB.on("error", () => {
  console.log("Error while connecting to the database");
});
DB.once("open", () => {
  console.log("Successfully connected to the database");
});