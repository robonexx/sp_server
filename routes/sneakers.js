const express = require('express');
const router = express.Router();

const Sneaker = require('../models/SneakerTestModel.js');

// get all sneakers

router.get('/', async (req, res) => {
  try {
    const sneakers = await Sneaker.find({});
    res.json(sneakers);
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// get sneaker by id
router.get('/:id', async (req, res) => {
  try {
    let sneaker = await Sneaker.findById(req.params.id);
    res.status(200).json(sneaker);
  } catch {
    res.status(500).json(err);
  }
});

// post sneaker
router.post('/', async (req, res) => {
  const newSneaker = new Sneaker(req.body);
  try {
    const savedSneaker = await newSneaker.save();
    res.status(200).json(savedSneaker);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete sneaker
router.delete('/:id', async (req, res) => {
  try {
    const sneaker = await Sneaker.findById(req.params.id);
    await sneaker.delete();
    res.status(200).json(`Sneaker with the id ${id}, successfully deleted`);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update sneaker

router.put('/:id', async (req, res) => {
  try {
    const updatedSneaker = await Sneaker.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedSneaker);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
