// global flag to easily tell if we're logged in
let LOGGED_IN = false;

// global storyList variable
let storyList;

// global user variable
let user;

// let's see if we're logged in
let token = localStorage.getItem('token');
let username = localStorage.getItem('username');

if (token && username) {
  LOGGED_IN = true;
}

$(() => {
  // cache some selectors we'll be using quite a bit
  const $body = $('body');
  const $allStoriesList = $('#all-articles-list');
  const $submitForm = $('#submit-form');
  const $favoritedStories = $('#favorited-articles');
  const $filteredArticles = $('#filtered-articles');
  const $loginForm = $('#login-form');
  const $createAccountForm = $('#create-account-form');
  const $ownStories = $('#my-articles');
  const $navLogin = $('#nav-login');
  const $navWelcome = $('#nav-welcome');
  const $navUserProfile = $('#nav-user-profile');
  const $navLogOut = $('#nav-logout');
  const $navSubmit = $('#nav-submit');
  const $userProfile = $('#user-profile');

  // if there is a token in localStorage, call User.stayLoggedIn
  //  to get an instance of User with the right details
  //  this is designed to run once, on page load
  if (LOGGED_IN) {
    User.stayLoggedIn(userInstance => {
      // we've got a user instance now
      user = userInstance;

      // let's build out some stories
      generateStories(() => {
        // and the user profile
        generateProfile();
        // and then display the navigation
        showNavForLoggedInUser();
      });
    });
  } else {
    // we're not logged in, let's just generate stories and stop there
    generateStories(() => null);
  }

  /**
   * Event listener for logging in.
   *  If successfuly we will setup the user instance
   */
  $loginForm.on('submit', e => {
    e.preventDefault(); // no page-refresh on submit

    // grab the username and password
    const username = $('#login-username').val();
    const password = $('#login-password').val();

    // call the login static method to build a user instance
    User.login(username, password, userInstance => {
      // set the global user to the user instance
      user = userInstance;
      LOGGED_IN = true;
      loginAndSubmitForm();
    });
  });

  /**
   * Event listener for signing up.
   *  If successfuly we will setup a new user instance
   */
  $createAccountForm.on('submit', e => {
    e.preventDefault(); // no page refresh

    // grab the required fields
    let name = $('#create-account-name').val();
    let username = $('#create-account-username').val();
    let password = $('#create-account-password').val();

    // call the create method, which calls the API and then builds a new user instance
    User.create(username, password, name, newUser => {
      user = newUser;
      loginAndSubmitForm();
    });
  });

  /**
   * Log Out Functionality
   */
  $navLogOut.on('click', e => {
    // empty out local storage
    localStorage.clear();
    // refresh the page, clearing memory
    location.reload();
  });

  /**
   * SUBMIT ARTICLE EVENT HANDLER
   *
   * */
  $submitForm.on('submit', e => {
    e.preventDefault(); // no page refresh

    // grab all the info from the form
    let title = $('#title').val();
    let url = $('#url').val();
    let hostName = getHostName(url);
    let author = $('#author').val();

    storyList.addStory(user, { title, author, url, username }, storyObject => {
      // generate markup for the new story
      let $li = $(`<li id="${storyObject.storyId}" class="id-${
        storyObject.storyId
      }">
      <span class="star">
      <i class="far fa-star"></i>
      </span>
      <a class="article-link" href="${url}" target="a_blank">
        <strong>${title}</strong>
      </a>
      <small class="article-hostname ${hostName}">(${hostName})</small>
      <small class="article-author">by ${author}</small>
      <small class="article-username">posted by ${username}</small>
      </li>`);
      $allStoriesList.prepend($li);
    });

    // hide the form and reset it
    $submitForm.slideUp('slow');
    $submitForm.trigger('reset');
  });

  /**
   * STARRING FAVORITES EVENT HANDLER
   *
   */
  $('.articles-container').on('click', '.star', function(e) {
    if (token) {
      const eventTarget = $(e.target);
      let $closestLi = eventTarget.closest('li');
      let storyId = $closestLi.attr('id');

      // if the item is already favorited
      if (eventTarget.hasClass('fas')) {
        // remove the favorite from the user's list
        user.removeFavorite(storyId, function() {
          // then change the class to be an empty star
          eventTarget.closest('i').toggleClass('fas far');
        });
      } else {
        // the item is un-favorited
        user.addFavorite(storyId, function() {
          eventTarget.closest('i').toggleClass('fas far');
        });
      }
    }
  });

  /**
   * Event Handler for Clicking Login
   */
  $navLogin.on('click', function() {
    // Show the Login and Create Account Forms
    $loginForm.slideToggle();
    $createAccountForm.slideToggle();
    $allStoriesList.toggle();
  });

  /**
   * Event Handler for On Your Profile
   */
  $navUserProfile.on('click', function() {
    // hide everything
    hideElements();
    // except the user profile
    $userProfile.show();
  });

  /**
   * Event Handler for Navigation Submit
   */
  $navSubmit.on('click', function() {
    if (LOGGED_IN) {
      hideElements();
      $allStoriesList.show();
      $submitForm.slideToggle();
    }
  });

  /**
   * Event handler for Navigation to Favorites
   */
  $body.on('click', '#nav-favorites', function() {
    hideElements();
    if (LOGGED_IN) {
      generateFaves();
      $favoritedStories.show();
    }
  });

  /**
   * Event handler for Navigation to Homepage
   */
  $body.on('click', '#nav-all', function() {
    hideElements();
    generateStories(() => {
      $allStoriesList.show();
    });
  });

  /**
   * Event handler for Navigation to My Stories
   */
  $body.on('click', '#nav-my-stories', function() {
    hideElements();
    if (LOGGED_IN) {
      $userProfile.hide();
      generateMyStories();
      $ownStories.show();
    }
  });

  /**
   * Event Handler for Deleting a Single Story
   */
  $ownStories.on('click', '.trash-can', e => {
    // get the Story's ID
    let $closestLi = $(e.target).closest('li');
    let storyId = $closestLi.attr('id');

    // remove the story from the API
    storyList.removeStory(user, storyId, () => {
      // re-generate the story list
      generateStories(() => {
        // hide everyhing
        hideElements();
        // ...except the story list
        $allStoriesList.show();
      });
    });
  });

  /**
   * A rendering function to run to reset the forms and hide the login info
   */
  function loginAndSubmitForm() {
    // hide the forms for logging in and signing up
    $loginForm.hide();
    $createAccountForm.hide();

    // reset those forms
    $loginForm.trigger('reset');
    $createAccountForm.trigger('reset');

    // show the stories
    $allStoriesList.show();

    // update the navigation bar
    showNavForLoggedInUser();

    // get a user profile
    generateProfile();
  }

  /**
   * Build a user profile based on the global "user" instance
   */
  function generateProfile() {
    // show your name
    $('#profile-name').text(`Name: ${user.name}`);
    // show your username
    $('#profile-username').text(`Username: ${user.username}`);
    // format and display the account creation date
    $('#profile-account-date').text(
      `Account Created: ${user.createdAt.slice(0, 10)}`
    );
    // set the navigation to list the username
    $navUserProfile.text(`${user.username}`);
  }

  /**
   * A rendering function to call the StoryList.getStories static method,
   *  which will generate a storyListInstance.
   *  Then render it
   * @param {Function} cb - a callback to run on success
   */
  function generateStories(cb) {
    // get an instance of StoryList
    StoryList.getStories(storyListInstance => {
      // update our global variable
      storyList = storyListInstance;
      // empty out that part of the page
      $allStoriesList.empty();

      // loop through all of our stories and generate HTML for them
      storyList.stories.forEach(story => {
        const result = generateStoryHTML(story);
        $allStoriesList.append(result);
      });

      // we're done, run the callback
      return cb();
    });
  }

  /**
   * A render method to render HTML for an individual Story instance
   * @param {Object} story - an instance of Story
   * @param {Boolean} isOwnStory - was the story posted by the current user
   * @param {Boolean} isFavoriteStory - was the story favorited by the current user
   */
  function generateStoryHTML(story, isOwnStory, isFavoriteStory) {
    let hostName = getHostName(story.url);
    let starType = isFavorite(story) ? 'fas' : 'far';
    // let favoriteClass;

    // if (isFavoriteStory) {
    //   favoriteClass = 'fas';
    // } else {
    //   favoriteClass = isFavorite(story) ? 'favorite' : '';
    // }

    // render a trash can for deleting your own story
    const trashCanIcon = isOwnStory
      ? `<span class="trash-can">
      <i class="fas fa-trash-alt"></i>
    </span>`
      : '';

    // render all the rest of the story markup
    const storyMarkup = $(`<li id="${story.storyId}">
          ${trashCanIcon}
          <span class="star">
            <i class="${starType} fa-star"></i>
          </span>
          <a class="article-link" href="${story.url}" target="a_blank">
            <strong>${story.title}</strong>
           </a>
          <small class="article-author">by ${story.author}</small>
          <small class="article-hostname ${hostName}">(${hostName})</small>
          <small class="article-username">posted by ${story.username}</small>
          </li>`);

    return storyMarkup;
  }

  /**
   * A rendering function to build the favorites list
   */
  function generateFaves() {
    // empty out the list by default
    $favoritedStories.empty();

    // if the user has no favorites
    if (user.favorites.length === 0) {
      $favoritedStories.append('<h5>No favorites added!</h5>');
    } else {
      // for all of the user's favorites
      user.favorites.forEach(story => {
        // render each story in the list
        let favoriteHTML = generateStoryHTML(story, false, true);
        $favoritedStories.append(favoriteHTML);
      });
    }
  }

  function generateMyStories() {
    $ownStories.empty();

    // if the user has no stories that they have posted
    if (user.ownStories.length === 0) {
      $ownStories.append('<h5>No stories added by user yet!</h5>');
    } else {
      // for all of the user's posted stories
      user.ownStories.forEach(story => {
        // render each story in the list
        let ownStoryHTML = generateStoryHTML(story, true);
        $ownStories.append(ownStoryHTML);
      });
    }

    $ownStories.show();
  }

  // hide all elements in elementsArr
  function hideElements() {
    const elementsArr = [
      $submitForm,
      $allStoriesList,
      $filteredArticles,
      $ownStories,
      $userProfile,
      $favoritedStories,
      $loginForm,
      $createAccountForm,
      $userProfile
    ];
    elementsArr.forEach(val => val.hide());
  }

  function showNavForLoggedInUser() {
    $navLogin.hide();
    $userProfile.hide();
    $('.main-nav-links, #user-profile').toggleClass('hidden');
    $navWelcome.show();
    $navLogOut.show();
  }

  // see if a specific story is in the user's list of favorites
  function isFavorite(story) {
    let favStoryIds = new Set();
    if (user) {
      favStoryIds = new Set(user.favorites.map(obj => obj.storyId));
    }
    return favStoryIds.has(story.storyId);
  }

  // simple function to pull the hostname from a URL
  function getHostName(url) {
    let hostName;
    if (url.indexOf('://') > -1) {
      hostName = url.split('/')[2];
    } else {
      hostName = url.split('/')[0];
    }
    if (hostName.slice(0, 4) === 'www.') {
      hostName = hostName.slice(4);
    }
    return hostName;
  }
});
