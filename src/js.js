// Read a page's GET URL variables and return them as an associative array.
// Source: http://jquery-howto.blogspot.com/2009/09/get-url-parameters-values-with-jquery.html
var params = (function () {
  var vars = [];
  var hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

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

// Add commas to numbers
function addCommas(n) {
  return String(n).replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

function jsonp(path, cbName) {
  var el = document.createElement('script');
  el.src = path + '?callback=' + (cbName ? cbName : 'callback');
  head.insertBefore(el, head.firstChild);
}

function callback(obj) {
  switch (type) {
    case 'watch':
      if (v === '2') {
        counter.innerHTML = addCommas(obj.data.subscribers_count);
        counter.setAttribute('aria-label', counter.innerHTML + ' watchers' + labelSuffix);
      } else {
        counter.innerHTML = addCommas(obj.data.stargazers_count);
        counter.setAttribute('aria-label', counter.innerHTML + ' stargazers' + labelSuffix);
      }
      break;
    case 'star':
      counter.innerHTML = addCommas(obj.data.stargazers_count);
      counter.setAttribute('aria-label', counter.innerHTML + ' stargazers' + labelSuffix);
      break;
    case 'fork':
      counter.innerHTML = addCommas(obj.data.network_count);
      counter.setAttribute('aria-label', counter.innerHTML + ' forks' + labelSuffix);
      break;
    case 'follow':
      counter.innerHTML = addCommas(obj.data.followers);
      counter.setAttribute('aria-label', counter.innerHTML + ' followers' + labelSuffix);
      break;
  }

  // Show the count if asked
  if (count === 'true' && typeof counter.innerHTML !== 'undefined') {
    counter.style.display = 'block';
  }
}

// Set href to be URL for repo
button.href = 'https://github.com/' + user + '/' + repo + '/';

// Add the class, change the text label, set count link href
switch (type) {
  case 'watch':
    if (v === '2') {
      mainButton.className += ' github-watchers';
      text.innerHTML = 'Watch';
      counter.href = 'https://github.com/' + user + '/' + repo + '/watchers';
    } else {
      mainButton.className += ' github-stargazers';
      text.innerHTML = 'Star';
      counter.href = 'https://github.com/' + user + '/' + repo + '/stargazers';
    }
    break;
  case 'star':
    mainButton.className += ' github-stargazers';
    text.innerHTML = 'Star';
    counter.href = 'https://github.com/' + user + '/' + repo + '/stargazers';
    break;
  case 'fork':
    mainButton.className += ' github-forks';
    text.innerHTML = 'Fork';
    button.href = 'https://github.com/' + user + '/' + repo + '/fork';
    counter.href = 'https://github.com/' + user + '/' + repo + '/network';
    break;
  case 'follow':
    mainButton.className += ' github-me';
    text.innerHTML = 'Follow @' + user;
    button.href = 'https://github.com/' + user;
    counter.href = 'https://github.com/' + user + '/followers';
    break;
}
button.setAttribute('aria-label', text.innerHTML + labelSuffix);

// Change the size
if (size === 'large') {
  mainButton.className += ' github-btn-large';
}

if (type === 'follow') {
  jsonp('https://api.github.com/users/' + user);
} else {
  jsonp('https://api.github.com/repos/' + user + '/' + repo);
}
