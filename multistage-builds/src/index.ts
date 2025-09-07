// const express = require("express");
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
