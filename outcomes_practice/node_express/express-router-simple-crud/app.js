const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// require our routes/index.js file!!!
const userRoutes = require('./routes');

app.use(bodyParser.json());

// let's tell our apps about the routes in index.js
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  return res.json('Start with /users');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
