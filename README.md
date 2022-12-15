# GitHub Buttons [![Build Status](https://img.shields.io/github/actions/workflow/status/mdo/github-buttons/ci.yml?branch=master&label=CI&logo=github)](https://github.com/mdo/github-buttons/actions?query=workflow%3ACI+branch%3Amaster)

Showcase your GitHub (repo's) success with these static buttons featuring links to your GitHub repo or profile page and up-to-date watch, fork, sponsor, and follower counts.

To get started, checkout <https://ghbtns.com/>!

## Bug tracker

Have a bug? Please create an issue here on GitHub at <https://github.com/mdo/github-buttons/issues>.

## Development

Clone the project and install dependencies before getting started. GitHub Buttons require Node.js, Ruby, and Bundler for local development.

```shell
npm i
bundle i
```

The GitHub buttons source code is split across three files in `src/`—the HTML, CSS, and JS. We use inline-source-cli and html-minifer to include it all in the compiled [`docs/github-btn.html`](docs/github-btn.html) file. To build this file:

```shell
npm run build
```

The `https://ghbtns.com/` site is built with Jekyll. After installing the dependencies, you can run a local server:

```shell
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000` to browse locally.

## See also

* [ntkme/github-buttons](https://buttons.github.io/)

## Twitter account

Keep up to date on announcements and more by following Mark on Twitter, [@mdo](https://twitter.com/mdo).

## Author

**Mark Otto**

* <https://twitter.com/mdo>
* <https://github.com/mdo>

## Copyright and license

Copyright 2014-2022 Mark Otto. Released under the [Apache 2.0 License](LICENSE).
