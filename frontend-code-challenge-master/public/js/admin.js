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
        // users is [{firstName: steve, lastName: young}, {}, {}] iterate
        // iterate over array of objects to make a list of users
        for (let user of users) {
          let fullName = `${user.firstName} ${user.lastName}`
          $('.userName-list').append(
            `<li>${fullName}</li>`
          )
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
})