document.addEventListener('DOMContentLoaded', () => {
  var form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
  document
    .querySelector('#todolist')
    .addEventListener('dblclick', handleDelete);
});

function handleSubmit(e) {
  e.preventDefault();
  // get the value of the form input
  const task = e.target.task.value;
  // create a new element with that value
  const newTodo = document.createElement('li');
  newTodo.innerText = task; // <li>New Task Value</li>

  // append the new element to the todoList
  const todoList = document.querySelector('#todolist');
  todoList.appendChild(newTodo);

  // reset the form
  e.target.reset();
}

function handleDelete(e) {
  if (e.target.tagName !== 'LI') {
    // only remove LIs
    return;
  }
  e.target.remove();
}
