const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Hello from notes" });
});

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB! Starting server.");

    app.listen(port, () => {
      console.log(`Notes server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Something went wrong!");
    console.error(err);
  });
