const express = require('express');
const router = express.Router();
const models = require('../models/Cow');

router.post('/api/cows', (req, res) => {
  const { id, name, description } = req.body;
  const data = new models.Cow({
    id,
    name,
    description
  });

  data
    .save()
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.get('/api/cows', (req, res) => {
  models.Cow.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(data);
    }
  });
});

module.exports = router;
