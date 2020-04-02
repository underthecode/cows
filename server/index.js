const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes/routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Cows is listening on ${PORT}`);
});
