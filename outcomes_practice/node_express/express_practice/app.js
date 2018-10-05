// require express module
// create an instance of express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// using body-parser will allow us to collect data inside of req.body
app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlenocded({ extended: true}));  // parsing application/x-ww-form-urlencoded

// create route for a get request
app.get('/', function(req, res) {
  // req and res are large objects
  // req can contain data about the request ( query string, URL params, form data)
  // res = contains useful methods for determining how to respond (HTML JSON etc)
  // to respond with json just .json! that's it
  // return res.send('Hello World!');
  return res.json({ message: 'JSON!!!!' });
});

// when request comes in to /instructors/ANYTHING
app.get('/instructor/:firstName', function(request, response) {
  /* let's capture dynamic part of URL which is the firstName
   The name that we give to this dynamic part of the URL will become a key in the params object, 
   which exists on the request object. 

   let's send back some text with whatever data came in the URL!
   */
  // request.params IS ALWAYS STRING ALL URL PARAMETERS ARE STRINGS!!!
  // return response.send(
  //   `The name of this instructor is ${request.params.firstName}`
  // );

  response.status(200).json({ name: `${request.params.firstName}` });
});

app.get('/secret', (req, res) => {
  res.status(401).json({ message: 'Unauthorized' });
});

// let's tell our server to listen on port 3000 and when the server starts, run a callback function that console.log's a message
app.listen(3000, function() {
  console.log(
    "The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!"
  );
});
