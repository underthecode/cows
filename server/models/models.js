const database = require('../../database/index');

const createCow = (body, callback) => {
  console.log(`Models: createCow POST success`);
  database.create(body);
  callback(null, body);
};

module.exports = {
  createCow
};
