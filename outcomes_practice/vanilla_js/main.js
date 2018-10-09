document.addEventListener('DOMContentLoaded', () => {
  console.log('hi');

  // document.getElementById etc

  // document.querySelector // select first
  // document.querySelectorAll // returns array like structure
  var form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
  document
    .querySelector('#todolist')
    .addEventListener('dblclick', handleDelete);
});

// serperate for logic
function handleSubmit(e) {
  e.preventDefault();
  // target is whatever element you and what it really is, it is an object
  // console.log(e.target);
  // // use console.dir()
  // console.dir(e.target);

  // get value of the form input
  const task = e.target.task.value;
  // create a new element with that value
  const newTodo = document.createElement('li');
  newTodo.innerText = task;
  // append the new element to the todoList
  var todoList = document.querySelector('#todolist');
  todoList.appendChild(newTodo);

  // reset form!!!
  // or can use this.reset() but be careful arrow function does not have this
  e.target.reset();
  // e.target is the form
}

function handleDelete(e) {
  // need event delegation
  // have to be careful what you are clicking on
  // only remove li
  if (e.target.tagName !== 'LI') {
    return;
  }
  e.target.remove();
}
