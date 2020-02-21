const mongoose = require('mongoose');
const keys = require('../server/config/keys');

mongoose
  .connect(keys.mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(`Cows is connected to MongoDB`),
      err => {
        if (err) {
          throw err;
        }
      };
  });

let cowSchema = new mongoose.Schema({
  cow_id: { type: Number, unique: true, required: true },
  cow_name: String,
  cow_description: String
});

let Cow = mongoose.model('Cow', cowSchema);

let read = callback => {
  const query = Cow.find({}).limit(25);
  query.exec((err, data) => {
    if (err) {
      console.log(`Not able to read the database`);
    } else {
      callback(null, data);
    }
  });
};

let create = body => {
  const newCow = new Cow({
    cow_id: body.id,
    cow_name: body.name,
    cow_description: body.description
  });

  newCow.save((err, body) => {
    if (err) {
      console.log(`This is a duplicate document entry`);
    } else {
      console.log(`${body} was created`);
    }
  });
};

module.exports = { read, create };
