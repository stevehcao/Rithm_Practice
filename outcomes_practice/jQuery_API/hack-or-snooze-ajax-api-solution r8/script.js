let token = localStorage.getItem("HOSJWT");
let stories;
let user;

$(() => {
  // cache some selectors we'll be using quite a bit
  const $body = $("body");
  const $allStoriesList = $("#all-articles-list");
  const $submitForm = $("#submit-form");
  const $favoritedStories = $("#favorited-articles");
  const $filteredArticles = $("#filtered-articles");
  const $loginForm = $("#login-form");
  const $createAccountForm = $("#create-account-form");
  const $ownStories = $("#my-articles");
  const $navLogin = $("#nav-login");
  const $navWelcome = $("#nav-welcome");
  const $navUserProfile = $("#nav-user-profile");
  const $navLogOut = $("#nav-logout");
  const $navSubmit = $("#nav-submit");
  const $userProfile = $("#user-profile");

  // if there is a JWT, decode it and rehydrate the user
  // get the list of all stories no matter what
  if (token) {
    const payload = token.split(".")[1] || undefined;
    const parsedPayload = JSON.parse(atob(payload));
    user = new User(parsedPayload.username);
    user.loginToken = token;
    user.retrieveDetails(user => {
      generateStories(() => {
        generateProfile(user);
        showNavForLoggedInUser();
      });
    });
  } else {
    generateStories(() => null);
  }

  $loginForm.on("submit", e => {
    e.preventDefault();
    const username = $("#login-username").val();
    const password = $("#login-password").val();
    user = new User(username, password);
    user.login(loginAndSubmitForm);
  });

  $createAccountForm.on("submit", e => {
    e.preventDefault();
    let name = $("#create-account-name").val();
    let username = $("#create-account-username").val();
    let password = $("#create-account-password").val();

    User.create(username, password, name, newUser => {
      user = newUser;
      loginAndSubmitForm();
    });
  });

  $navLogOut.on("click", e => {
    localStorage.clear();
    location.reload();
  });

  // SUBMIT ARTICLE EVENT
  $submitForm.on("submit", e => {
    e.preventDefault();
    let title = $("#title").val();
    let url = $("#url").val();
    let hostName = getHostName(url);
    let author = $("#author").val();
    stories.addStory(user, { title, author, url }, storyObject => {
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
      </li>`);
      $allStoriesList.prepend($li);
    });
    $submitForm.slideUp("slow");
    $submitForm.trigger("reset");
  });

  // STARRING FAVORITES EVENT
  $(".articles-container").on("click", ".star", e => {
    if (token) {
      const eventTarget = $(e.target);
      let $closestLi = eventTarget.closest("li");
      let storyId = $closestLi.attr("id");
      if (eventTarget.hasClass("fas")) {
        user.removeFavorite(storyId, user => {
          eventTarget.closest("i").toggleClass("fas far");
        });
      } else {
        user.addFavorite(storyId, user => {
          eventTarget.closest("i").toggleClass("fas far");
        });
      }
    }
  });

  $navLogin.on("click", e => {
    $loginForm.slideToggle();
    $createAccountForm.slideToggle();
    $allStoriesList.toggle();
  });

  $navUserProfile.on("click", e => {
    hideElements();
    $userProfile.show();
  });

  $navSubmit.on("click", e => {
    if (token) {
      hideElements();
      $allStoriesList.show();
      $submitForm.slideToggle();
    }
  });

  // NAVIGATING TO FAVORITES
  $body.on("click", "#nav-favorites", e => {
    hideElements();
    if (token) {
      generateFaves($favoritedStories);
      $favoritedStories.show();
    }
  });

  // NAVIGATING TO ALL
  $body.on("click", "#nav-all", e => {
    hideElements();
    generateStories(() => {
      $allStoriesList.show();
    });
  });

  // NAVIGATING TO MY STORIES
  $body.on("click", "#nav-my-stories", e => {
    hideElements();
    if (token) {
      $userProfile.hide();
      generateMyStories($ownStories);
      $ownStories.show();
    }
  });

  // deleting a story
  $ownStories.on("click", ".trash-can", e => {
    let $closestLi = $(e.target).closest("li");
    let storyId = $closestLi.attr("id");
    stories.removeStory(user, storyId, () => {
      generateStories(() => {
        hideElements();
        $allStoriesList.show();
      });
    });
  });

  function loginAndSubmitForm() {
    // login the user + hydrate to get their name attribute
    user.retrieveDetails(() => {
      token = user.loginToken;
      localStorage.setItem("HOSJWT", user.loginToken);
      $loginForm.hide();
      $createAccountForm.hide();
      $loginForm.trigger("reset");
      $createAccountForm.trigger("reset");
      $allStoriesList.show();
      showNavForLoggedInUser();
      generateProfile(user);
    });
  }

  // populate the userProfile text upon login
  function generateProfile(user) {
    $("#profile-name").text(`Name: ${user.name}`);
    $("#profile-username").text(`Username: ${user.username}`);
    $("#profile-account-date").text(
      `Account Created: ${user.createdAt.slice(0, 10)}`
    );
    $navUserProfile.text(`${user.username}`);
  }

  function generateStories(cb) {
    StoryList.getStories(storyList => {
      stories = storyList;
      $allStoriesList.empty();
      storyList.stories.forEach(story => {
        const result = generateStoryHTML(story);
        $allStoriesList.append(result);
      });
      return cb();
    });
  }

  function generateStoryHTML(story, isOwnStory, isFavoriteStory) {
    let hostName = getHostName(story.url);
    let starType = isFavorite(story) ? "fas" : "far";
    let favoriteClass;
    if (isFavoriteStory) {
      favoriteClass = "fas";
    } else {
      favoriteClass = isFavorite(story) ? "favorite" : "";
    }
    const trashCanIcon = isOwnStory
      ? `<span class="trash-can">
      <i class="fas fa-trash-alt"></i>
    </span>`
      : "";
    const result = $(`<li id="${story.storyId}">
          ${trashCanIcon}
          <span class="star">
            <i class="${starType} fa-star"></i>
          </span>
          <a class="article-link" href="${story.url}" target="a_blank">
            <strong>${story.title}</strong>
           </a>
          <small class="article-hostname ${hostName}">(${hostName})</small>
          <small class="article-author">by ${story.author}</small>
          </li>`);
    return result;
  }

  function generateFaves($favoritedStories) {
    $favoritedStories.empty();
    let favoritesMessage = "<h5>No favorites added!</h5>";
    user.favorites.forEach(story => {
      let favoriteHTML = generateStoryHTML(story, false, true);
      $favoritedStories.append(favoriteHTML);
    });
    if ($favoritedStories.is(":empty")) {
      $favoritedStories.append(favoritesMessage);
    }
  }

  function generateMyStories($ownStories) {
    $ownStories.empty();
    user.ownStories.forEach(story => {
      let ownStoryHTML = generateStoryHTML(story, true);
      $ownStories.append(ownStoryHTML);
    });
    if ($ownStories.is(":empty")) {
      $ownStories.append("<h5>No stories added by user yet!</h5>");
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
    elementsArr
      .forEach(val => val.hide());
  }

  function showNavForLoggedInUser() {
    $navLogin.hide();
    $userProfile.hide();
    $(".main-nav-links, #user-profile").toggleClass("hidden");
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
    if (url.indexOf("://") > -1) {
      hostName = url.split("/")[2];
    } else {
      hostName = url.split("/")[0];
    }
    if (hostName.slice(0, 4) === "www.") {
      hostName = hostName.slice(4);
    }
    return hostName;
  }
});
