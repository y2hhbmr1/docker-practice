const express = require("express"); // import express
const app = express(); // create app

app.get("/", (req, res) => {
  res.json({ message: "Hello from notebooks" });
});

app.listen(3000, () => console.log("Notebooks server listening on port 3000"));
