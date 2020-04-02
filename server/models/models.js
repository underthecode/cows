const mongoose = require('mongoose');

let cowSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  name: String,
  description: String
});

let Cow = mongoose.model('Cow', cowSchema);

module.exports = { Cow };
