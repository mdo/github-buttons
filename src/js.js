(function() {
  'use strict';

  // Read a page's GET URL variables and return them as an associative array.
  // Source: https://jquery-howto.blogspot.com/2009/09/get-url-parameters-values-with-jquery.html
  function getUrlParameters() {
    var vars = [];
    var hash;
    var location = window.location;
    var hashes = location.href.slice(location.href.indexOf('?') + 1).split('&');

    for (var i = 0, len = hashes.length; i < len; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }

    return vars;
  }

  // Add commas to numbers
  function addCommas(n) {
    return String(n).replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }

  function jsonp(path) {
    var head = document.head;
    var script = document.createElement('script');

    script.src = path + '?callback=callback';
    head.insertBefore(script, head.firstChild);
  }

  var parameters = getUrlParameters();

  // Parameters
  var user = parameters.user;
  var repo = parameters.repo;
  var type = parameters.type;
  var count = parameters.count;
  var size = parameters.size;
  var v = parameters.v;
  var theme = parameters.theme;

  // Elements
  var button = document.querySelector('.gh-btn');
  var mainButton = document.querySelector('.github-btn');
  var text = document.querySelector('.gh-text');
  var counter = document.querySelector('.gh-count');

  // Constants
  var LABEL_SUFFIX = ' on GitHub';
  var GITHUB_URL = 'https://github.com/';
  var API_URL = 'https://api.github.com/';
  var REPO_URL = GITHUB_URL + user + '/' + repo;
  var USER_REPO = user + '/' + repo;

  window.callback = function(obj) {
    if (obj.data.message === 'Not Found') {
      return;
    }

    switch (type) {
      case 'watch':
        if (v === '2') {
          counter.textContent = obj.data.subscribers_count && addCommas(obj.data.subscribers_count);
          counter.setAttribute('aria-label', counter.textContent + ' watchers' + LABEL_SUFFIX);
        } else {
          counter.textContent = obj.data.stargazers_count && addCommas(obj.data.stargazers_count);
          counter.setAttribute('aria-label', counter.textContent + ' stargazers' + LABEL_SUFFIX);
        }

        break;
      case 'star':
        counter.textContent = obj.data.stargazers_count && addCommas(obj.data.stargazers_count);
        counter.setAttribute('aria-label', counter.textContent + ' stargazers' + LABEL_SUFFIX);
        break;
      case 'fork':
        counter.textContent = obj.data.network_count && addCommas(obj.data.network_count);
        counter.setAttribute('aria-label', counter.textContent + ' forks' + LABEL_SUFFIX);
        break;
      case 'follow':
        counter.textContent = obj.data.followers && addCommas(obj.data.followers);
        counter.setAttribute('aria-label', counter.textContent + ' followers' + LABEL_SUFFIX);
        break;
    }

    // Show the count if asked and if it's not empty
    if (count === 'true' && counter.textContent !== '') {
      counter.style.display = 'block';
      counter.removeAttribute('aria-hidden');
    }
  };

  // Set href to be URL for repo
  button.href = REPO_URL;

  var title;

  // Add the class, change the text label, set count link href
  switch (type) {
    case 'watch':
      if (v === '2') {
        mainButton.className += ' github-watchers';
        text.textContent = 'Watch';
        counter.href = REPO_URL + '/watchers';
      } else {
        mainButton.className += ' github-stargazers';
        text.textContent = 'Star';
        counter.href = REPO_URL + '/stargazers';
      }

      title = text.textContent + ' ' + USER_REPO;
      break;
    case 'star':
      mainButton.className += ' github-stargazers';
      text.textContent = 'Star';
      counter.href = REPO_URL + '/stargazers';
      title = text.textContent + ' ' + USER_REPO;
      break;
    case 'fork':
      mainButton.className += ' github-forks';
      text.textContent = 'Fork';
      button.href = REPO_URL + '/fork';
      counter.href = REPO_URL + '/network';
      title = text.textContent + ' ' + USER_REPO;
      break;
    case 'follow':
      mainButton.className += ' github-me';
      text.textContent = 'Follow @' + user;
      button.href = GITHUB_URL + user;
      counter.href = GITHUB_URL + user + '/followers';
      title = text.textContent;
      break;
    case 'sponsor':
      mainButton.className += ' github-me';
      text.textContent = 'Sponsor @' + user;
      button.href = GITHUB_URL + 'sponsors/' + user;
      title = text.textContent;
      break;
  }

  button.setAttribute('aria-label', title + LABEL_SUFFIX);
  document.title = title + LABEL_SUFFIX;

  // Change the size if requested
  if (size === 'large') {
    mainButton.className += ' github-btn-large';
  }

  // If count is not requested or type is sponsor,
  // there's no need to make an API call
  if (count !== 'true' || type === 'sponsor') {
    return;
  }

  if (type === 'follow') {
    jsonp(API_URL + 'users/' + user);
  } else {
    jsonp(API_URL + 'repos/' + user + '/' + repo);
  }
})();

if (theme === dark) {
  document.getElementsByTagName("body")[0].setAttribute("class", "dark");
}
