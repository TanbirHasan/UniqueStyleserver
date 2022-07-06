const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      unique: false,
    },
    lastname: {
      type: String,
      required: true,
      unique: false,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    postcode: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
    products: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("orders", OrderSchema);
