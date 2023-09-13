const mongoose = require('mongoose');

const sneakerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  benefits: [String],
  productDetails: {
    foamMidsole: { type: Boolean, required: false },
    perforationsOnToe: { type: Boolean, required: false },
    rubberSole: { type: Boolean, required: false },
    colorShown: { type: String, required: false },
    style: { type: String, required: false },
  },
  origins: { type: String },
  storageAmount: { type: Number, required: true },
  availability: { type: String, required: true },
  product_id: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Sneaker = mongoose.model('Sneaker', sneakerSchema);

module.exports = Sneaker;
