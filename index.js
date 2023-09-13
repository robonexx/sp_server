require('dotenv').config();
const cors = require('cors');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8800;

app.get('/', (req, res) => {
  res.json('hello there buddy');
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
