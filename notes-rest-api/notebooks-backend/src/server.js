const express = require("express"); // import express
const app = express(); // create app

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Hello from notebooks" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
