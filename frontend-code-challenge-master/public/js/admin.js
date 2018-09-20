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
          let firstName = user.firstName;
          let lastName = user.lastName;
          let email = user.email;
          let id = user.id;
          let state = user.state;
          let fullName = `${user.firstName} ${user.lastName}`

          $('.table-data').append(
            `<tr>
              <th scope="row">${id}</th>
              <td>${firstName}</td>
              <td>${lastName}</td>
              <td>${email}</td>
              <td>${state}</td>              
            </tr>`
          )

          // $('.userName-list').append(
          //   `<li>${fullName}</li>`
          // )
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
  function deleteUser() {
    
  }
})