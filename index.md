---
layout: default
---

## Contents

* Comment to trigger ToC generation
{:toc}

---

## Star

<div class="example">
  <iframe src="github-btn.html?user=twbs&repo=bootstrap&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160" height="30"></iframe>
  <iframe src="github-btn.html?user=twbs&repo=bootstrap&type=star&count=true" frameborder="0" scrolling="0" width="170" height="20"></iframe>
</div>
{% highlight html %}
<iframe src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160" height="30"></iframe>

<iframe src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=star&count=true" frameborder="0" scrolling="0" width="170" height="20"></iframe>
{% endhighlight %}

## Watch

Originally, GitHub's Watch button was used for notification settings (today's Watch) and repository bookmarking (today's Star). In August 2012, [they split the functionality into two buttons](https://github.com/blog/1204-notifications-stars), after these unofficial buttons were released.

As such, for today's unofficial Watch button, **you must add `v=2` to the parameters**. If you don't, you'll get [the deprecated button](#deprecated).

<div class="example">
  <iframe src="github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true&size=large&v=2" frameborder="0" scrolling="0" width="160" height="30"></iframe>
  <iframe src="github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true&v=2" frameborder="0" scrolling="0" width="170" height="20"></iframe>
</div>
{% highlight html %}
<iframe src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true&size=large&v=2" frameborder="0" scrolling="0" width="160" height="30"></iframe>

<iframe src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true&v=2" frameborder="0" scrolling="0" width="170" height="20"></iframe>
{% endhighlight %}

## Fork

<div class="example">
  <iframe src="github-btn.html?user=twbs&repo=bootstrap&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="158" height="30"></iframe>
  <iframe src="github-btn.html?user=twbs&repo=bootstrap&type=fork&count=true" frameborder="0" scrolling="0" width="170" height="20"></iframe>
</div>
{% highlight html %}
<iframe src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="158" height="30"></iframe>

<iframe src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=fork&count=true" frameborder="0" scrolling="0" width="170" height="20"></iframe>
{% endhighlight %}

## Follow

<div class="example">
  <iframe src="github-btn.html?user=mdo&type=follow&count=true&size=large" frameborder="0" scrolling="0" width="220" height="30"></iframe>
  <iframe src="github-btn.html?user=mdo&type=follow&count=true" frameborder="0" scrolling="0" width="170" height="20"></iframe>
</div>
{% highlight html %}
<iframe src="https://ghbtns.com/github-btn.html?user=mdo&type=follow&count=true&size=large" frameborder="0" scrolling="0" width="220" height="30"></iframe>

<iframe src="https://ghbtns.com/github-btn.html?user=mdo&type=follow&count=true" frameborder="0" scrolling="0" width="170" height="20"></iframe>
{% endhighlight %}

---

## Available options

### SSL support

Example buttons are shown with `https://` URLs. While they're hosted on GitHub Pages, the SSL option is provided via [CloudFlare's free Universal SSL](https://blog.cloudflare.com/introducing-universal-ssl/) offering. If you prefer, you can still use `http://`.

### Required parameters

You **must** declare a value for each of the following URL parameters:

|---
| Option | Description |
|-|:-|:-:|-:
| `user` | GitHub username that owns the repo |
| `repo` | GitHub repository to pull the forks and watchers counts |
| `type` | Type of button to show: `watch`, `fork`, or `follow` |

### Optional parameters

The following URL parameters are **not** required. Add them as you wish.

|---
| Option | Description |
|-|:-|:-:|-:
| `count` | Show the optional watchers or forks count: *none* by default or `true` |
| `size` | Optional flag for using a larger button: *none* by default or `large` |

---

<span class="deprecated" id="deprecated">Deprecated</span>

## Original Watch, aka Star

With the button split in August 2012, GitHub's API continued to return the Star count for old Watch buttons. Thus, the original unofficial Watch button returns a makeshift Star button.

This deprecated button is still around to avoid breaking every site that currently utilizes these embeds.

<div class="example">
  <iframe src="github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30"></iframe>
  <iframe src="github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true" frameborder="0" scrolling="0" width="170" height="20"></iframe>
</div>
{% highlight html %}
<iframe src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30"></iframe>

<iframe src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true" frameborder="0" scrolling="0" width="170" height="20"></iframe>
{% endhighlight %}

---

## Limitations

For these first versions, functionality is limited and some concessions made:

- Width and height must be specified for all buttons (which actually adds some control for those with OCD like myself).
- All attributes must be passed through via URL parameters.
- CSS and JavaScript are all included in the same HTML file to reduce complexity.

More refinement and functionality is planned with open-sourcing--any help is always appreciated!

---

## Open source

The unofficial GitHub buttons are available on GitHub for downloading, forking, or contributing.

<p>
  <iframe src="github-btn.html?user=mdo&repo=github-buttons&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160" height="30"></iframe>
  <iframe src="github-btn.html?user=mdo&repo=github-buttons&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="160" height="30"></iframe>
</p>

<a href="https://github.com/mdo/github-buttons" class="btn">View on GitHub</a>

---

<img class="hrt-icon" src="http://www.iconarchive.com/download/i66645/designbolts/free-valentine-heart/Heart.ico"> 

<p>
  With Love
</p>
