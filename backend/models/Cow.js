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

const everyThirdChar = (string_to_cut) => {
  let newStr = '';
  for (let i = 2; i < string_to_cut.length; i += 3) {
    newStr += string_to_cut[i];
  }
  return newStr;
};

module.exports = { Cow, everyThirdChar };
