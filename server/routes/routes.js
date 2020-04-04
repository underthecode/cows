const express = require('express');
const router = express.Router();
const models = require('../models/Cow');

router.post('/api/cow', (req, res) => {
  const { name, description } = req.body;
  const data = new models.Cow({
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
  models.Cow.find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.get('/api/cow/:id', (req, res) => {
  const { id } = req.params;

  models.Cow.findById(id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

router.patch('/api/cow/:id', (req, res) => {
  const { id } = req.params;

  models.Cow.findById(id)
    .then(data => {
      const { name, description } = req.body;

      if (name) {
        data.name = name;
      }

      if (description) {
        data.description = description;
      }

      data.save().then(data => {
        res.status(200).json(data);
      });
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

module.exports = router;
