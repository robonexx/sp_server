const mongoose = require('mongoose');

const sneakerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: false },
  thumbnail: { type: String, required: false },
  image: { type: String, required: false },
  brand: { type: String, required: false },
  category: { type: String, required: false },
  price: { type: Number, required: false },
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
  storageAmount: { type: Number, required: false },
  availability: { type: String, required: false },
  product_id: { type: String, required: false },
  date: { type: Date, default: Date.now },
});

const Sneaker = mongoose.model('Sneaker', sneakerSchema);

module.exports = Sneaker;
