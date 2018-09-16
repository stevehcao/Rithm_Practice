$(document).ready(() => {
  // function to display all users on admin page
  showAllUsers();
  function showAllUsers() {
    // make either ajax call to retrieve and build data
    // ask how to us async await?
    // use promise then/catch for now to prevent callback hell
    //
    $.getJSON('http://localhost:3000/users')
      .then((users) => {
        console.log(users);

      })
      .catch((err) => {
        console.log(err);
      })
  }
})