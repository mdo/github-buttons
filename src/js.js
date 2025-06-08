(function() {
  'use strict';

  const allowedQueryParams = new Set(['user', 'repo', 'type', 'count', 'size', 'text', 'v']);

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

  function getUrlParameters() {
    const searchParams = new URLSearchParams(globalThis.location.search);
    const parameters = new Map();

    for (const [parameter, value] of searchParams.entries()) {
      if (allowedQueryParams.has(parameter)) {
        parameters.set(parameter, value);
      }
    }

    return parameters;
  }

  function formatNumber(n) {
    return new Intl.NumberFormat('en-US').format(n);
  }

  async function fetchData(path) {
    try {
      const response = await fetch(path);
      if (!response.ok) {
        console.error(response);
        throw new Error('Network response was not ok');
      }

      return await response.json();
    } catch (error) {
      console.error(`Error fetching data: ${error}`);
      return {
        data: {
          message: 'Not Found'
        }
      };
    }
  }

  async function processApiData(data) {
    if (data.message === 'Not Found') {
      return;
    }

    switch (type) {
      case 'watch': {
        if (v === '2') {
          counter.textContent = data.subscribers_count && formatNumber(data.subscribers_count);
          counter.setAttribute('aria-label', `${counter.textContent} watchers ${LABEL_SUFFIX}`);
        } else {
          counter.textContent = data.stargazers_count && formatNumber(data.stargazers_count);
          counter.setAttribute('aria-label', `${counter.textContent} stargazers ${LABEL_SUFFIX}`);
        }

        break;
      }

      case 'star': {
        counter.textContent = data.stargazers_count && formatNumber(data.stargazers_count);
        counter.setAttribute('aria-label', `${counter.textContent} stargazers ${LABEL_SUFFIX}`);
        break;
      }

      case 'fork': {
        counter.textContent = data.network_count && formatNumber(data.network_count);
        counter.setAttribute('aria-label', `${counter.textContent} forks ${LABEL_SUFFIX}`);
        break;
      }

      case 'follow': {
        counter.textContent = data.followers && formatNumber(data.followers);
        counter.setAttribute('aria-label', `${counter.textContent} followers ${LABEL_SUFFIX}`);
        break;
      }
    }

    // Show the count if asked and if it's not empty
    if (count === 'true' && counter.textContent !== '') {
      counter.style.display = 'block';
      counter.removeAttribute('aria-hidden');
    }
  }

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

  (async() => {
    try {
      const apiPath = type === 'follow' ? `${API_URL}users/${user}` : `${API_URL}repos/${user}/${repo}`;
      const data = await fetchData(apiPath);

      await processApiData(data);
    } catch (error) {
      console.error(`Error fetching GitHub data: ${error}`);
    }
  })();
})();
