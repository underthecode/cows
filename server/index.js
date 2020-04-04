// requirements and env vars
const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes/routes');

require('dotenv').config();
const port = process.env.PORT;

const mongoose = require('mongoose');
const mongoUri = process.env.MONGO_URI;

// server connection
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

// database connection
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
