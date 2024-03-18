const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
require('dotenv').config();
const { MONGOLINKURL } = process.env

app.use(express.json());

app.use('/api/product', require('./routes/productRoutes'));

mongoose.connect( MONGOLINKURL , { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('Could not connect to MongoDB', err));


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });