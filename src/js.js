(function() {
  'use strict';

  const allowedQueryParams = new Set(['user', 'repo', 'type', 'count', 'size', 'text', 'v']);

  function getUrlParameters() {
    // TODO: Replace with URLSearchParams later
    const hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    const parameters = new Map();

    for (const hash of hashes) {
      const [parameter, value] = hash.split('=');

      if (allowedQueryParams.has(parameter)) {
        parameters.set(parameter, value);
      }
    }

    return parameters;
  }

  // Add commas to numbers
  function addCommas(n) {
    // eslint-disable-next-line unicorn/prefer-string-replace-all
    return String(n).replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }

  function jsonp(path) {
    const script = document.createElement('script');

    script.src = `${path}?callback=callback`;
    document.head.insertBefore(script, document.head.firstChild);
  }

  // Parameters
  const parameters = getUrlParameters();
  const user = parameters.get('user');
  const repo = parameters.get('repo');
  const type = parameters.get('type');
  const count = parameters.get('count');
  const size = parameters.get('size');
  const noText = parameters.get('text');
  const v = parameters.get('v');

  // Elements
  const button = document.querySelector('.gh-btn');
  const mainButton = document.querySelector('.github-btn');
  const text = document.querySelector('.gh-text');
  const counter = document.querySelector('.gh-count');

  // Constants
  const LABEL_SUFFIX = 'on GitHub';
  const GITHUB_URL = 'https://github.com/';
  const API_URL = 'https://api.github.com/';
  const REPO_URL = `${GITHUB_URL + user}/${repo}`;
  const USER_REPO = `${user}/${repo}`;

  window.callback = function(obj) {
    if (obj.data.message === 'Not Found') {
      return;
    }

    switch (type) {
      case 'watch': {
        if (v === '2') {
          counter.textContent = obj.data.subscribers_count && addCommas(obj.data.subscribers_count);
          counter.setAttribute('aria-label', `${counter.textContent} watchers ${LABEL_SUFFIX}`);
        } else {
          counter.textContent = obj.data.stargazers_count && addCommas(obj.data.stargazers_count);
          counter.setAttribute('aria-label', `${counter.textContent} stargazers ${LABEL_SUFFIX}`);
        }

        break;
      }

      case 'star': {
        counter.textContent = obj.data.stargazers_count && addCommas(obj.data.stargazers_count);
        counter.setAttribute('aria-label', `${counter.textContent} stargazers ${LABEL_SUFFIX}`);
        break;
      }

      case 'fork': {
        counter.textContent = obj.data.network_count && addCommas(obj.data.network_count);
        counter.setAttribute('aria-label', `${counter.textContent} forks ${LABEL_SUFFIX}`);
        break;
      }

      case 'follow': {
        counter.textContent = obj.data.followers && addCommas(obj.data.followers);
        counter.setAttribute('aria-label', `${counter.textContent} followers ${LABEL_SUFFIX}`);
        break;
      }
    }

    // Show the count if asked and if it's not empty
    if (count === 'true' && counter.textContent !== '') {
      counter.style.display = 'block';
      counter.removeAttribute('aria-hidden');
    }
  };

  // Set href to be URL for repo
  button.href = REPO_URL;

  let title;

  // Add the class, change the text label, set count link href
  switch (type) {
    case 'watch': {
      if (v === '2') {
        mainButton.classList.add('github-watchers');
        text.textContent = 'Watch';
        counter.href = `${REPO_URL}/watchers`;
      } else {
        mainButton.classList.add('github-stargazers');
        text.textContent = 'Star';
        counter.href = `${REPO_URL}/stargazers`;
      }

      title = `${text.textContent} ${USER_REPO}`;
      break;
    }

    case 'star': {
      mainButton.classList.add('github-stargazers');
      text.textContent = 'Star';
      counter.href = `${REPO_URL}/stargazers`;
      title = `${text.textContent} ${USER_REPO}`;
      break;
    }

    case 'fork': {
      mainButton.classList.add('github-forks');
      text.textContent = 'Fork';
      button.href = `${REPO_URL}/fork`;
      counter.href = `${REPO_URL}/network`;
      title = `${text.textContent} ${USER_REPO}`;
      break;
    }

    case 'follow': {
      mainButton.classList.add('github-me');
      text.textContent = `Follow @${user}`;
      button.href = GITHUB_URL + user;
      counter.href = `${GITHUB_URL + user}?tab=followers`;
      title = text.textContent;
      break;
    }

    case 'sponsor': {
      mainButton.classList.add('github-me');
      text.textContent = `Sponsor @${user}`;
      button.href = `${GITHUB_URL}sponsors/${user}`;
      title = text.textContent;
      break;
    }
  }

  if (noText === 'false') {
    button.classList.add('no-text');
    text.setAttribute('aria-hidden', true);
    text.style.display = 'none';
    text.textContent = '';
  }

  button.setAttribute('aria-label', `${title} ${LABEL_SUFFIX}`);
  document.title = `${title} ${LABEL_SUFFIX}`;

  // Change the size if requested
  if (size === 'large') {
    mainButton.classList.add('github-btn-large');
  }

  // If count is not requested or type is sponsor,
  // there's no need to make an API call
  if (count !== 'true' || type === 'sponsor' || noText === 'false') {
    return;
  }

  if (type === 'follow') {
    jsonp(`${API_URL}users/${user}`);
  } else {
    jsonp(`${API_URL}repos/${user}/${repo}`);
  }
})();
