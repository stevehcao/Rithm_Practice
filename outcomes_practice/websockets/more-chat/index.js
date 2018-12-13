// EXPRESS SERVER!
const express = require('express');
const socket = require('socket.io');

// App setup
const app = express();

// listening to port
const server = app.listen(4000, function() {
  console.log('listening to requests on port 4000');
});

// Static files
// servering html files to browser
app.use(express.static('public'));

// socket setup
// socket is a function takes whatever server you have
// waits for a connection
const io = socket(server);

// when connection from browser, have callback function
// will need to connect to the frontend as well on the html page
io.on('connection', function(socket) {
  // socket.id will get unique for each computer.
  console.log('made socket connection', socket.id);
  // this is listening for chat data from client
  // what do you want to do with that data?
  // send it to the rest of the client
  socket.on('chat', function(data) {
    // all different sockets connected
    io.sockets.emit('chat', data);
  });

  // when server gets a "typing" emit server will listen and do a function!!!
  // broadcasting example, it will send to every other client but the current socket
  socket.on('typing', function(data) {
    socket.broadcast.emit('typing', data);
  });
});
