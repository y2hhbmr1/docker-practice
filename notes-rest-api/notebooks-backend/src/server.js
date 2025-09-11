const express = require("express"); // import express
const app = express(); // create app
const mongoose = require("mongoose");

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Hello from notebooks" });
});

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB! Starting server.");

    app.listen(port, () => {
      console.log(`Notebooks server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Something went wrong!");
    console.error(err);
  });
