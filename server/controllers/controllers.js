const models = require('../models/models');

const createCow = (body, callback) => {
  models.createCow(body, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(`Controllers: createCow POST success`);
      callback(null, data);
    }
  });
};

const readCow = callback => {
  models.readCow((err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(`Controllers: readCow GET success`);
      callback(null, data);
    }
  });
};

module.exports = {
  createCow,
  readCow
};
