---
layout: default
---

<div class="tweet-button">
  <a href="https://twitter.com/share" class="twitter-share-button" data-count="none" data-via="mdo">Tweet</a><script type="text/javascript" src="//platform.twitter.com/widgets.js"></script>
</div>

Introducing the unofficial

# GitHub buttons

Showcase your GitHub repo's success with hotlinkable GitHub star, fork, or follow buttons. Available in two sizes with up-to-date counts.

Made by [@mdo](http://twitter.com/mdo). Licensed [Apache License v2.0](http://www.apache.org/licenses/LICENSE-2.0").

---

## Star

<div class="example">
  <iframe src="github-btn.html?user=twbs&repo=bootstrap&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
  <iframe src="github-btn.html?user=twbs&repo=bootstrap&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
</div>
{% highlight html %}
<iframe src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>

<iframe src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
{% endhighlight %}

## Watch

Originally, GitHub's Watch button was used for notification settings (today's Watch) and repository bookmarking (today's Star). In August 2012, [they split the functionality into two buttons](https://github.com/blog/1204-notifications-stars), after these unofficial buttons were released.

As such, for today's unofficial Watch button, **you must add `v=2` to the parameters**. If you don't, you'll get [the deprecated button](#deprecated).

<div class="example">
  <iframe src="github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true&size=large&v=2" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
  <iframe src="github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true&v=2" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
</div>
{% highlight html %}
<iframe src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true&size=large&v=2" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>

<iframe src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true&v=2" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
{% endhighlight %}

## Fork

<div class="example">
  <iframe src="github-btn.html?user=twbs&repo=bootstrap&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="158px" height="30px"></iframe>
  <iframe src="github-btn.html?user=twbs&repo=bootstrap&type=fork&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
</div>
{% highlight html %}
<iframe src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="158px" height="30px"></iframe>

<iframe src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=fork&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
{% endhighlight %}

## Follow

<div class="example">
  <iframe src="github-btn.html?user=mdo&type=follow&count=true&size=large" frameborder="0" scrolling="0" width="220px" height="30px"></iframe>
  <iframe src="github-btn.html?user=mdo&type=follow&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
</div>
{% highlight html %}
<iframe src="https://ghbtns.com/github-btn.html?user=mdo&type=follow&count=true&size=large" frameborder="0" scrolling="0" width="220px" height="30px"></iframe>

<iframe src="https://ghbtns.com/github-btn.html?user=mdo&type=follow&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
{% endhighlight %}

---

<span class="deprecated" id="deprecated">Deprecated</span>

## Original Watch, aka Star

With the button split in August 2012, GitHub's API continued to return the Star count for old Watch buttons. Thus, the original unofficial Watch button returns a makeshift Star button.

This deprecated button is still around to avoid breaking every site that currently utilizes these embeds.

<div class="example">
  <iframe src="github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true&size=large" frameborder="0" scrolling="0" width="170px" height="30px"></iframe>
  <iframe src="github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
</div>
{% highlight html %}
<iframe src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true&size=large" frameborder="0" scrolling="0" width="170px" height="30px"></iframe>

<iframe src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
{% endhighlight %}

---

## Open source

The unofficial GitHub buttons are available on GitHub for downloading, forking, or contributing.

<p>
  <iframe src="github-btn.html?user=mdo&repo=github-buttons&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
  <iframe src="github-btn.html?user=mdo&repo=github-buttons&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
</p>

<a href="https://github.com/mdo/github-buttons" class="btn">View on GitHub</a>

---

<3
