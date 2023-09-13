require('dotenv').config();
const cors = require('cors');
const express = require('express');
const connectDb = require('./config/db');
/* const Sneakers = require('./models/SneakerTestModel'); */
const sneakerRoute = require('./routes/sneakers');

const app = express();
const PORT = process.env.PORT || 8800;

connectDb();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes test

app.use('/api/sneakers', sneakerRoute);
/* app.get('/api/sneakers', async (req, res) => {
  try {
    const sneakers = await Sneakers.find({});
    res.json(sneakers);
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}); */

app.get('/', (req, res) => {
  res.json('hello there buddy');
});

// could use someking of error handling here
/* app.get('*', (req, res) => {
    res.json('404 - not found');
  }); */

// define routes

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
