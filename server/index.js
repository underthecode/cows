const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const keys = require('../server/config/keys');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', routes);

mongoose
  .connect(keys.mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(`Connected to MongoDB`);
  })
  .catch(err => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
