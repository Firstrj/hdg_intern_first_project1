const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();


app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));

mongoose.connect('mongodb+srv://Admin:zxc123@cluster0.bmij8m0.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('Could not connect to MongoDB', err));


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });