const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes); // Implicit '/' as the first arg

app.listen(3001, () => {
  console.log('Server started listening on PORT http://localhost:3001');
});
