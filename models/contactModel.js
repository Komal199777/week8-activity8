const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    sender: { type: String, required: true },
    message: { type: String, required: true },
    rating: { type: Number, required: true },
  });

  module.exports = mongoose.model('Contact', contactSchema);