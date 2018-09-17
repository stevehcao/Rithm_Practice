// make sure document is ready wrap everything in document.ready
$(document).ready(() => {
  signUpUser();

  function signUpUser() {
    // grab info from form such as name email etc
    // email
    // first name
    // last name
    // listen to submit and prevent default
    $('.form-container').submit((evt) => {
      evt.preventDefault();

      let email = $('#email').val();
      let firstName = $('#firstName').val();
      let lastName = $('#lastName').val();
      // post request to backend
      $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/users',
        data: {
          email: email,
          firstName: firstName,
          lastName: lastName
        }
      }).then((response) => {
        console.log("created new user");
        console.log(response);
      })
      // evt.target.reset();
    })
  }
})