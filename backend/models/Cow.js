const mongoose = require('mongoose');

const cowSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is required'] },
    description: { type: String, required: [true, 'Description is required'] }
  },
  {
    timestamps: true
  }
);

const Cow = mongoose.model('Cow', cowSchema);

module.exports = { Cow };
