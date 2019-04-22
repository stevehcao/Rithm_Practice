// install
// require
// use

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // logs information about requests

const app = express();
const itemsRoutes = require('./routes/items');

app.use(morgan('tiny'));
app.use(bodyParser.json()); // allows POST and PATCH requests to come in as JSON

app.use('/items', itemsRoutes);

// boiler plate error handling
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  return next(err);
});

// error handlers
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  return res.json({
    message: err.message,
    /*
     if we're in development mode, include stack trace (full error object)
     otherwise, it's an empty object so the user doesn't see all of that
    */
    error: app.get('env') === 'development' ? err : {}
  });
});

app.get('/', (req, res) => {
  return res.json('Start with /items for shopping cart!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000!!! I remember now');
});
