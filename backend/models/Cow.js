const mongoose = require('mongoose');

const cowSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Cow = mongoose.model('Cow', cowSchema);

module.exports = { Cow };
