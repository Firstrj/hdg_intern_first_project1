const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  unitId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String, // Assuming you're storing image URLs or paths
    default: ""
  },
  price: {
    type: Number,
    required: true,
  },
  statuscoin: {
    type: String,
    required: true,
    enum: ['ไม่มีเหรียญ', 'มีเหรียญ'], 
  },
  status: {
    type: String,
    required: true,
    enum: ['available', 'unavailable'], 
  }
});

module.exports = mongoose.model("Product", productSchema);

