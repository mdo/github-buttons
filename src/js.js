(function () {
  'use strict';

  // Read a page's GET URL variables and return them as an associative array.
  // Source: http://jquery-howto.blogspot.com/2009/09/get-url-parameters-values-with-jquery.html
  var params = (function () {
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
  })();

  var user = params.user;
  var repo = params.repo;
  var type = params.type;
  var count = params.count;
  var size = params.size;
  var v = params.v;
  var head = document.getElementsByTagName('head')[0];
  var button = document.getElementById('gh-btn');
  var mainButton = document.getElementById('github-btn');
  var text = document.getElementById('gh-text');
  var counter = document.getElementById('gh-count');
  var labelSuffix = ' on GitHub';

  var GH_URL = 'https://github.com/';
  var API_URL = 'https://api.github.com/';
  var REPO_URL = GH_URL + user + '/' + repo;

  // Add commas to numbers
  function addCommas(n) {
    return String(n).replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }

  function jsonp(path) {
    var el = document.createElement('script');

    el.src = path + '?callback=callback';
    head.insertBefore(el, head.firstChild);
  }

  window.callback = function(obj) {
    switch (type) {
      case 'watch':
        if (v === '2') {
          counter.textContent = addCommas(obj.data.subscribers_count);
          counter.setAttribute('aria-label', counter.textContent + ' watchers' + labelSuffix);
        } else {
          counter.textContent = addCommas(obj.data.stargazers_count);
          counter.setAttribute('aria-label', counter.textContent + ' stargazers' + labelSuffix);
        }
        break;
      case 'star':
        counter.textContent = addCommas(obj.data.stargazers_count);
        counter.setAttribute('aria-label', counter.textContent + ' stargazers' + labelSuffix);
        break;
      case 'fork':
        counter.textContent = addCommas(obj.data.network_count);
        counter.setAttribute('aria-label', counter.textContent + ' forks' + labelSuffix);
        break;
      case 'follow':
        counter.textContent = addCommas(obj.data.followers);
        counter.setAttribute('aria-label', counter.textContent + ' followers' + labelSuffix);
        break;
    }

    // Show the count if asked
    if (count === 'true' && counter.textContent !== 'undefined') {
      counter.style.display = 'block';
    }
  };

  // Set href to be URL for repo
  button.href = REPO_URL;

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
      break;
    case 'star':
      mainButton.className += ' github-stargazers';
      text.textContent = 'Star';
      counter.href = REPO_URL + '/stargazers';
      break;
    case 'fork':
      mainButton.className += ' github-forks';
      text.textContent = 'Fork';
      button.href = REPO_URL + '/fork';
      counter.href = REPO_URL + '/network';
      break;
    case 'follow':
      mainButton.className += ' github-me';
      text.textContent = 'Follow @' + user;
      button.href = GH_URL + user;
      counter.href = GH_URL + user + '/followers';
      break;
    case 'sponsor':
      mainButton.className += ' github-me';
      text.textContent = 'Sponsor @' + user;
      button.href = GH_URL + user + '/sponsorship';
      counter.href = GH_URL + user + '/followers';
      break;
  }

  button.setAttribute('aria-label', text.textContent + labelSuffix);

  // Change the size
  if (size === 'large') {
    mainButton.className += ' github-btn-large';
  }

  if (type === 'follow') {
    jsonp(API_URL + 'users/' + user);
  } else if (type !== 'sponsor') {
    jsonp(API_URL + 'repos/' + user + '/' + repo);
  }
})();
