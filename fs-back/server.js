const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

//I need to get MongoDB set up and add the info to a dotenv file
//I also need to get the schemas made for users, orders, and inventory

mongoose.connect(uri, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connected...");
});

// const inventoryRouter = require("This is where the routes for the inventory will go");
// const orderRouter = require("This is where the routes for the orders will go");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
