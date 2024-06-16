const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Example route
app.get("/example", (req, res) => {
  res.json({ message: "This is an example route" });
});

// Route with a parameter
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: `You requested user with ID: ${userId}` });
});

// POST route
app.post("/data", (req, res) => {
  const receivedData = req.body;
  res.json({ message: "Data received", data: receivedData });
});

// Start the server
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
