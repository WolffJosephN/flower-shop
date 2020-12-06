const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flowerSchema = new Schema({
  breed: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
  inventory: {
    type: Number,
    required: false,
  },
});

const Flower = mongoose.model("Flower", flowerSchema);

module.exports = Flower;
