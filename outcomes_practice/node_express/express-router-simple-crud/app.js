const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
// require our routes/index.js file!!!
const userRoutes = require('./routes');

app.use(morgan('tiny'));
app.use(bodyParser.json()); // allows POST and PATCH requests to come in as JSON

// let's tell our apps about the routes in index.js
// '/users' will assume routes will start with /users
app.use('/users', userRoutes);

// on every single request, run the following
// catch 404 and forward to error handler
app.use((req, res, next) => {
  console.log('Middleware just ran!');
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

// on any request to /users, run the following
app.use('/users', (req, res, next) => {
  console.log('Middleware just ran on a users route!');
  return next();
});

// order is important we need to place app.use before app.get
app.get('/', (req, res) => {
  return res.json('Start with /users');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
