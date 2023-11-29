const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route for handling user signup
app.post("/signup", (req, res) => {
  const {
    full_name,
    email,
    date_of_birth,
    address,
    pincode,
    country,
    password,
  } = req.body;

  // For now, just log the received data
  console.log("Received signup data:");
  console.log("Full Name:", full_name);
  console.log("Email:", email);
  console.log("Date of Birth:", date_of_birth);
  console.log("Address:", address);
  console.log("Pincode:", pincode);
  console.log("Country:", country);
  console.log("Password:", password);

  res.status(200).json({ message: "Signup data received" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
