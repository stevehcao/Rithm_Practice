// this is the js code
// make connection
// have io from the library cdn on the front end
const socket = io.connect('http://localhost:4000');

// when you hit send in the browser need function to listen
// Query DOM

const message = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');

// emit events! evt listners!
// when you click send
btn.addEventListener('click', function() {
  // using the socket, takes two parameters
  // 2nd is object we are sending the server.
  // chat event, sends object payload
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});

// event listener for keypress event
message.addEventListener('keypress', function() {
  // send message to server
  socket.emit('typing', handle.value);
});

// socket listen for events
// in this case we have to events "chat" and "typing" that we will get from server
socket.on('chat', function(data) {
  feedback.innerHTML = '';
  output.innerHTML +=
    '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function(data) {
  // do something
  feedback.innerHTML = `<p><em>${data} is typing a message...</em></p>`;
});
