const database = require('../../database/index');

const createCow = (body, callback) => {
  console.log(`Models: createCow POST success`);
  database.create(body);
  callback(null, body);
};

const readCow = callback => {
  console.log(`Models: readCow GET success`);
  database.read(body);
  callback(null, body);
};

module.exports = {
  createCow,
  readCow
};
