const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  unitId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Assuming you're storing image URLs or paths
    default: "",
  },
  price: {
    type: Number,
    required: true,
    validate: {
      validator: function (v) {
        // Ensures the price is one of 7, 8, 9, or 10
        return v === 7 || v === 8 || v === 9 || v === 10;
      },
      message: (props) => `${props.value} is not a valid price!`,
    },
  },
  status: {
    type: String,
    required: true,
    enum: ["available", "unavailable"], // Assuming "มีของ" is "available", "ไม่มีของ" is "unavailable"
  },
});

module.exports = mongoose.model("Product", productSchema);
