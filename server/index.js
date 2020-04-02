const express = require('express');
const path = require('path');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Cows is listening on ${PORT}`);
});
