const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(bodyParser.json());

// Health check route
app.get("/health", (req, res) => {
  res.status(200).send("up");
});

// Connect to MongoDB
console.log("Connecting to DB");

mongoose.connect("mongodb://MongoDB/key-value-db", {
  auth: {
    username: "key-value-user",
    password: "key-value-password",
  },
  connectTimeoutMS: 500,
})
.then(() => {
  console.log("Connected to DB");
  app.listen(3000, () => console.log("Listening on port 3000"));
})
.catch(err => {
  console.error("Something went wrong", err);
});
