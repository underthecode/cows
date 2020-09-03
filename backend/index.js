require('dotenv').config();
const port = process.env.PORT;
const mongoUri = process.env.MONGO_URI;

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('./routes/routes');

mongoose
  .connect(mongoUri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(`MongoDB connected`);
  })
  .then(() => {
    const app = express();
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.static(path.join(__dirname, '../frontend/dist')));
    app.use('/api', router);

    app.listen(port, () => {
      console.log(`Listening on http://localhost:${port}!`);
    });
  });
