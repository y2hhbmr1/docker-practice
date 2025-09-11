const express = require("express");
const notebookRouter = express.Router();

// Define GET /
notebookRouter.get("/", (req, res) => {
  res.json({ message: "Hello from notebooks" });
});

// Export router
module.exports = {
  notebookRouter,
};
