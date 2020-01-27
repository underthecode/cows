const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

router.get('/', (req, res) => {
  res.status(200).send('Cows homepage renders');
});

router.get('/api/cows', (req, res) => {});

router.post('/api/cows', (req, res) => {
  controllers.createCow(req.body, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('Routes: createCow POST success');
      res.status(201).send(data);
    }
  });
});

module.exports = router;
