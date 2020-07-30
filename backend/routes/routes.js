const express = require('express');
const router = express.Router();
const models = require('../models/Cow');

router.post('/test', async (req, res) => {
  try {
    const { string_to_cut } = req.body;
    const data = models.everyThirdChar(string_to_cut);
    res.status(201).json({ return_string: data });
  } catch {
    res.status(400).send({ error: 'You broke the model' });
  }
});

router.post('/api/cows', async (req, res) => {
  try {
    const { name, description } = req.body;
    const data = new models.Cow({
      name,
      description
    });
    data.save();
    res.status(201).json(data);
  } catch {
    res.status(403).send({ error: 'Duplicate entry attempted' });
  }
});

router.get('/api/cows', async (req, res) => {
  try {
    const data = await models.Cow.find();
    res.status(200).json(data);
  } catch {
    res.status(404).send({ error: 'Documents do not exist' });
  }
});

router.get('/api/cows/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await models.Cow.findOne({ _id });
    res.status(200).json(data);
  } catch {
    res.status(404).send({ error: 'Document does not exist' });
  }
});

router.patch('/api/cows/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await models.Cow.findOne({ _id });

    const { name, description } = req.body;
    if (name) {
      data.name = name;
    }
    if (description) {
      data.description = description;
    }
    data.save();

    res.status(200).json(data);
  } catch {
    res.status(404).send({ error: 'Document does not exist' });
  }
});

router.delete('/api/cows/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    await models.Cow.deleteOne({ _id });
    res.status(204).send();
  } catch {
    res.status(404).send({ error: 'Document does not exist' });
  }
});

module.exports = router;
