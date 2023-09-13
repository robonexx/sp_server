const express = require('express');
const router = express.Router();

const Sneakers = require('../models/SneakerTestModel.js');

// get all sneakers
// get all articles

router.get('/', async (req, res) => {
  try {
    const sneakers = await Sneakers.find({});
    res.json(sneakers);
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// get sneaker by id
router.get('/:id', async (req, res) => {
  try {
    let sneakers = await Sneakers.findById(req.params.id);
    res.status(200).json(sneakers);
  } catch {
    res.status(500).json(err);
  }
});

// post sneaker

// delete sneaker

// update sneaker


module.exports = router;
