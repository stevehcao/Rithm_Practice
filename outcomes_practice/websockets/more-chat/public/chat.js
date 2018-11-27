// make connection
// have io from the library cdn on the front end
const socket = io.connect('http://localhost:4000');

// when you hit send in the browser need function to listen
// Query DOM

const message = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');

// emit events! evt listners!

btn.addEventListener('click', function() {
  // using the socket, takes two parameters
  // 2nd is object we are sending the server
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});
