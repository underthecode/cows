const mongoose = require('mongoose');

let cowSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

let Cow = mongoose.model('Cow', cowSchema);

module.exports = { Cow };
