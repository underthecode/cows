const database = require('../../database/index');

const createCow = (body, callback) => {
  callback();

  console.log('Models: createCow POST success');
};

module.exports = {
  createCow
};
