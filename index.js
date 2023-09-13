require('dotenv').config();
const cors = require('cors');
const express = require('express');
const connectDb = require('./config/db');

const app = express();
const PORT = process.env.PORT || 8800;

connectDb();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json('hello there buddy');
});

app.get('*', (req, res) => {
  res.json('404 - not found');
});

// define routes

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
