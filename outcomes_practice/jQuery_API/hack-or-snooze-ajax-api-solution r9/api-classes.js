const BASE_URL = 'https://hack-or-snooze-v2.herokuapp.com';

/**
 * This class maintains the list of individual Story instances
 *  It also has some methods for fetching, adding, and removing stories
 */
class StoryList {
  constructor(stories) {
    this.stories = stories;
  }

  /**
   * This method is designed to be called to generate a new StoryList.
   *  It calls the API, builds an array of Story instances, makes a single StoryList
   * instance out of that, and then passes the StoryList instance to the callback
   * @param {Function} cb - a callback to run on success
   */
  static getStories(cb) {
    // query the /stories endpoint (no auth required)
    $.getJSON(`${BASE_URL}/stories`, function(response) {
      // turn the plain old story objects from the API into instances of the Story class
      const stories = response.stories.map(story => new Story(story));
      // build an instance of our own class using the new array of stories
      const storyList = new StoryList(stories);
      // pass the instance of the new class to the callback
      return cb(storyList);
    });
  }

  /**
   * Method to make a POST request to /stories and add the new story to the list
   * @param {Object} user - the current instance of User who will post the story
   * @param {Object} newStory - a new story object for the API with title, author, and url
   * @param {Function} cb - a callback to run after the API call is successful
   */
  addStory(user, newStory, cb) {
    $.ajax({
      method: 'POST',
      url: `${BASE_URL}/stories`,
      data: {
        // request body
        // this is the format specified by the API
        token: user.loginToken,
        story: newStory
      },
      success: response => {
        // make a Story instance out of the story object we get back
        const newStory = new Story(response.story);
        // add the story to the beginning of the list
        this.stories.unshift(newStory);
        // add the story to the beginning of the user's list
        user.ownStories.unshift(newStory);
        // pass the newStory to the supplied callback
        return cb(newStory);
      }
    });
  }

  /**
   * Method to make a DELETE request to remove a particular story
   *  and also update the StoryList and
   * @param {Object} user - the current User instance
   * @param {String} storyId - the ID of the story you want to remove
   * @param {Function} cb a callback to invoke upon success
   */
  removeStory(user, storyId, cb) {
    $.ajax({
      url: `${BASE_URL}/stories/${storyId}`,
      method: 'DELETE',
      data: {
        token: user.loginToken
      },
      success: () => {
        // filter out the story whose ID we are removing
        this.stories = this.stories.filter(story => story.storyId !== storyId);

        // do the same thing for the user's list of stories
        user.ownStories = user.ownStories.filter(
          story => story.storyId !== storyId
        );

        // we're finished
        return cb();
      }
    });
  }
}

/**
 * The User class to primarily represent the current user.
 *  There are helper methods to signup (create), login, and stayLoggedIn
 */
class User {
  constructor(userObj) {
    this.username = userObj.username;
    this.name = userObj.name;
    this.createdAt = userObj.createdAt;
    this.updatedAt = userObj.updatedAt;

    // these are all set to defaults, not passed in by the constructor
    this.loginToken = '';
    this.favorites = [];
    this.ownStories = [];
  }

  /**
   * A static method that signs up a new user via the API and passes the newly-created User instance to the callback
   * @param {String} username - a new username
   * @param {String} password - a new password
   * @param {String} name - the user's full name
   * @param {Function} cb - a callback function to run on success from the API
   */
  static create(username, password, name, cb) {
    $.post(
      `${BASE_URL}/signup`,
      {
        user: {
          username,
          password,
          name
        }
      },
      function(response) {
        // build a new User instance from the API response
        const newUser = new User(response.user);

        // attach the token to the newUser instance for convenience
        newUser.loginToken = response.token;

        // save the token to localStorage
        localStorage.setItem('token', response.token);

        // also save the username so that we don't have to decode the token to get it every time
        localStorage.setItem('username', newUser.username);

        // pass the newly-created instance of User to the callback function
        return cb(newUser);
      }
    );
  }

  /**
   * A static method that logs in an existing user via the API and passes a newly-created User instance to the callback
   * @param {String} username - an existing user's username
   * @param {String} password - an existing user's password
   * @param {Function} cb - a callback function to run on success from the API
   */
  static login(username, password, cb) {
    $.post(
      `${BASE_URL}/login`,
      {
        user: {
          username,
          password
        }
      },
      function(response) {
        // build a new User instance from the API response
        const existingUser = new User(response.user);

        // instantiate Story instances for the user's favorites and ownStories
        existingUser.favorites = response.user.favorites.map(
          story => new Story(story)
        );
        existingUser.ownStories = response.user.stories.map(
          story => new Story(story)
        );

        // attach the token to the newUser instance for convenience
        existingUser.loginToken = response.token;

        // save the token to localStorage
        localStorage.setItem('token', response.token);

        // also save the username so that we don't have to decode the token to get it every time
        localStorage.setItem('username', existingUser.username);

        return cb(existingUser);
      }
    );
  }

  /**
   * This function grabs a token and username from localStorage.
   *  It uses the token & username to make an API request to get details
   *   about the user. Then it creates an instance of user with that info
   *   and passes it to the callback function.
   * @param {Function} cb - a callback to run after a successful API call
   */
  static stayLoggedIn(cb) {
    // get username and token from localStorage
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    // call the API
    $.getJSON(`${BASE_URL}/users/${username}`, { token }, function(response) {
      // instantiate the user from the API information
      const existingUser = new User(response.user);

      // attach the token to the newUser instance for convenience
      existingUser.loginToken = token;

      // instantiate Story instances for the user's favorites and ownStories
      existingUser.favorites = response.user.favorites.map(
        story => new Story(story)
      );
      existingUser.ownStories = response.user.stories.map(
        story => new Story(story)
      );

      // everything is all set; let's pass the user instance to the callback
      return cb(existingUser);
    });
  }

  /**
   * This function fetches user information from the API
   *  at /users/{username} using a token. Then it sets all the
   *  appropriate instance properties from the response.
   *  Finally it invokes a callback with the current user instance.
   * @param {Function} cb a callback to invoke when completed
   */
  retrieveDetails(cb) {
    $.getJSON(
      `${BASE_URL}/users/${this.username}`,
      { token: this.loginToken },
      response => {
        // update all of the user's properties from the API response
        this.name = response.user.name;
        this.createdAt = response.user.createdAt;
        this.updatedAt = response.user.updatedAt;
        // remember to convert the user's favorites and ownStories into instances of Story
        this.favorites = response.user.favorites.map(story => new Story(story));
        this.ownStories = response.user.stories.map(story => new Story(story));

        // pass the current user instance to the supplied callback
        return cb(this);
      }
    );
  }

  /**
   * Add a story to the list of user favorites and update the API
   * @param {String} storyId - an ID of a story to add to favorites
   * @param {Function} cb - a callback to invoke on success
   */
  addFavorite(storyId, cb) {
    return this._toggleFavorite(storyId, 'POST', cb);
  }

  /**
   * Remove a story to the list of user favorites and update the API
   * @param {String} storyId - an ID of a story to remove from favorites
   * @param {Function} cb - a callback to invoke on success
   */
  removeFavorite(storyId, cb) {
    return this._toggleFavorite(storyId, 'DELETE', cb);
  }

  /**
   * A helper method to either POST or DELETE to the API
   * @param {String} storyId - an ID of a story to remove from favorites
   * @param {String} HTTPVerb - POST or DELETE based on adding or removing
   * @param {Function} cb - a callback to invoke on success
   */
  _toggleFavorite(storyId, HTTPVerb, cb) {
    $.ajax({
      url: `${BASE_URL}/users/${this.username}/favorites/${storyId}`,
      method: HTTPVerb,
      data: {
        token: this.loginToken
      },
      success: () => {
        // we don't have to manually adjust the user's favorites
        //  we can just call the retrieveDetails method to refresh everything
        //   (because we're lazy)
        this.retrieveDetails(() => cb(this)); // "this" refers to current user b/c arrow function
      }
    });
  }

  /**
   * Send a PATCH request to the API in order to update the user
   * @param {Object} userData - the user properties you want to update
   * @param {Function} cb - a callback function to invoke upon success
   */
  update(userData, cb) {
    $.ajax({
      url: `${BASE_URL}/users/${this.username}`,
      method: 'PATCH',
      data: {
        user: userData,
        token: this.loginToken
      },
      success: response => {
        // "name" is really the only property you can update
        this.name = response.user.name;

        // Note: you can also update "password" but we're not storing it

        // pass the current user instance to the supplied callback
        return cb(this);
      }
    });
  }

  /**
   * Send a DELETE request to the API in order to remove the user
   * @param {Function} cb - a callback function to invoke upon success
   */
  remove(cb) {
    // this function is really just a wrapper around $.ajax
    $.ajax({
      url: `${BASE_URL}/users/${this.username}`,
      method: 'DELETE',
      data: {
        token: this.loginToken
      },
      // this will run the callback on success
      success: cb
    });
  }
}

/**
 * Class to represent a single story. Has one method to update.
 */
class Story {
  /**
   * The constructor is designed to take an object for better readability / flexibility
   * @param {Object} storyObj an object that has story properties in it
   */
  constructor(storyObj) {
    this.author = storyObj.author;
    this.title = storyObj.title;
    this.url = storyObj.url;
    this.username = storyObj.username;
    this.storyId = storyObj.storyId;
    this.createdAt = storyObj.createdAt;
    this.updatedAt = storyObj.updatedAt;
  }

  /**
   * Make a PATCH request against /stories/{storyID} to update a single story
   * @param {Object} user - an instance of User
   * @param {Object} storyData - an object containing the properties you want to update
   * @param {Function} cb - a callback function to run upon success
   */
  update(user, storyData, cb) {
    $.ajax({
      url: `${BASE_URL}/stories/${this.storyId}`,
      method: 'PATCH',
      data: {
        token: user.loginToken,
        story: storyData
      },
      success: response => {
        const { author, title, url, updatedAt } = response.story;
        // these are the only fields that you can change with a PATCH update
        //  so we don't need to worry about updating the others
        this.author = author;
        this.title = title;
        this.url = url;
        this.updatedAt = this.updatedAt;

        // pass the current Story to the supplied callback
        return cb(this);
      }
    });
  }
}
