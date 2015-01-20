# GitHub Buttons

Showcase your GitHub (repo's) success with these static buttons featuring links to your GitHub repo or profile page and up-to-date watch, fork, and follower counts.

To get started, checkout <https://ghbtns.com>!

## Usage

These buttons are hosted via GitHub Pages, meaning all you need to do is include an `<iframe>` and you're set. Once included, you can configure it with various options. Here's an example include:

``` html
<iframe src="https://ghbtns.com/github-btn.html?user=USERNAME&repo=REPONAME&type=BUTTONTYPE"
  allowtransparency="true" frameborder="0" scrolling="0" width="62" height="20"></iframe>
```

Note that the example uses `https://`. This is provided via CloudFlare's free Universal SSL offering. If you prefer, you can still use `http://`.

### Requirements

`user`<br>
GitHub username that owns the repo

`repo`<br>
GitHub repository to pull the forks and watchers counts

`type`<br>
Type of button to show: `watch`, `fork`, or `follow`

### Optional

`count`<br>
Show the optional watchers or forks count: *none* by default or `true`

`size`<br>
Optional flag for using a larger button: *none* by default or `large`

## Examples

**Basic Watch button**

``` html
<iframe src="https://ghbtns.com/github-btn.html?user=mdo&repo=github-buttons&type=watch"
  allowtransparency="true" frameborder="0" scrolling="0" width="62" height="20"></iframe>
```

**Basic Fork button**

``` html
<iframe src="https://ghbtns.com/github-btn.html?user=mdo&repo=github-buttons&type=fork"
  allowtransparency="true" frameborder="0" scrolling="0" width="53" height="20"></iframe>
```

**Basic Follow button**

``` html
<iframe src="https://ghbtns.com/github-btn.html?user=mdo&type=follow"
  allowtransparency="true" frameborder="0" scrolling="0" width="132" height="20"></iframe>
```

**Watch with count**

``` html
<iframe src="https://ghbtns.com/github-btn.html?user=mdo&repo=github-buttons&type=watch&count=true"
  allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>
```

**Fork with count**

``` html
<iframe src="https://ghbtns.com/github-btn.html?user=mdo&repo=github-buttons&type=fork&count=true"
  allowtransparency="true" frameborder="0" scrolling="0" width="95" height="20"></iframe>
```

**Follow with count**

``` html
<iframe src="https://ghbtns.com/github-btn.html?user=mdo&type=follow&count=true"
  allowtransparency="true" frameborder="0" scrolling="0" width="165" height="20"></iframe>
```

**Large Watch button with count**

``` html
<iframe src="https://ghbtns.com/github-btn.html?user=mdo&repo=github-buttons&type=watch&count=true&size=large"
  allowtransparency="true" frameborder="0" scrolling="0" width="170" height="30"></iframe>
```

## Limitations

For the first versions, functionality is limited and some concessions were made:

- Width and height must be specificed for all buttons (which actually adds some control for those with OCD like myself).
- All attributes must be passed through via URL parameters.
- CSS and javascript are all included in the same HTML file to reduce complexity and requests.

More refinement and functionalty is planned with open-sourcing--any help is always appreciated!

## Bug tracker

Have a bug? Please create an issue here on GitHub at <https://github.com/mdo/github-buttons/issues>.

## See also

- [ntkme/github-buttons](https://github.com/ntkme/github-buttons)

## Twitter account

Keep up to date on announcements and more by following Mark on Twitter, <a href="http://twitter.com/mdo">@mdo</a>.

## Author

**Mark Otto**

+ http://twitter.com/mdo
+ http://github.com/mdo

## Copyright and license

Copyright 2014-2015 Mark Otto. Released under Apache 2.0.
