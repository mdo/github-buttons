# GitHub Buttons

Showcase your GitHub (repo's) success with these static buttons featuring links to your GitHub repo or profile page and up-to-date watch, fork, and follower counts.

To get started, checkout <https://ghbtns.com>!

## Bug tracker

Have a bug? Please create an issue here on GitHub at <https://github.com/mdo/github-buttons/issues>.

## Development

The GitHub buttons source code is split across three files in `src/` — the HTML, CSS, and JS — and compiled with [Gulp](http://gulpjs.com).
The `github-btn.hml` file contains the button markup and includes the CSS and JS. Those includes are inlined and the overall page minified with Gulp.
To build the files, just run Gulp:

```shell
$ gulp
```

Lastly, the `https://ghbtns.com` site is built with Jekyll (requires Ruby and more).
Install [Jekyll](http://jekyllrb.com) and run a local server to view your changes:

```shell
$ jekyll serve --watch
```

## See also

- [ntkme/github-buttons](https://buttons.github.io)

## Twitter account

Keep up to date on announcements and more by following Mark on Twitter, [@mdo](https://twitter.com/mdo).

## Author

**Mark Otto**

* https://twitter.com/mdo
* https://github.com/mdo

## Copyright and license

Copyright 2014-2015 Mark Otto. Released under Apache 2.0.
