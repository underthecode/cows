const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes/routes');
const mongoose = require('mongoose');

require('dotenv').config();
const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', routes);

mongoose
  .connect(mongoUri, {
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

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
