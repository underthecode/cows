const models = require('../models/models');

const createCow = (body, callback) => {
  models.createCow(body, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('Controllers: createCow POST success');
      callback(null, data);
    }
  });
};

module.exports = {
  createCow
};
