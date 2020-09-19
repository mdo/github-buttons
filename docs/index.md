---
layout: default
---

## Contents
{:.no_toc}

* Comment to trigger ToC generation
{:toc}

---

## Star

{% capture example %}
<iframe src="{{ site.url }}/github-btn.html?user=twbs&repo=bootstrap&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>

<iframe src="{{ site.url }}/github-btn.html?user=twbs&repo=bootstrap&type=star&count=true" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>
{% endcapture %}
{% include example.html content=example %}

## Watch

Originally, GitHub's Watch button was used for notification settings (today's Watch) and repository bookmarking (today's Star). In August 2012, [they split the functionality into two buttons](https://github.com/blog/1204-notifications-stars), after these unofficial buttons were released.

As such, for today's unofficial Watch button, **you must add `v=2` to the parameters**. If you don't, you'll get [the deprecated button](#deprecated).

{% capture example %}
<iframe src="{{ site.url }}/github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true&size=large&v=2" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>

<iframe src="{{ site.url }}/github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true&v=2" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>
{% endcapture %}
{% include example.html content=example %}

## Fork

{% capture example %}
<iframe src="{{ site.url }}/github-btn.html?user=twbs&repo=bootstrap&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>

<iframe src="{{ site.url }}/github-btn.html?user=twbs&repo=bootstrap&type=fork&count=true" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>
{% endcapture %}
{% include example.html content=example %}

## Follow

{% capture example %}
<iframe src="{{ site.url }}/github-btn.html?user=mdo&type=follow&count=true&size=large" frameborder="0" scrolling="0" width="230" height="30" title="GitHub"></iframe>

<iframe src="{{ site.url }}/github-btn.html?user=mdo&type=follow&count=true" frameborder="0" scrolling="0" width="170" height="20" title="GitHub"></iframe>
{% endcapture %}
{% include example.html content=example %}

## Sponsor

{% capture example %}
<iframe src="{{ site.url }}/github-btn.html?user=mdo&type=sponsor&size=large" frameborder="0" scrolling="0" width="180" height="30" title="GitHub"></iframe>

<iframe src="{{ site.url }}/github-btn.html?user=mdo&type=sponsor" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>
{% endcapture %}
{% include example.html content=example %}

---

## Available options

### SSL support

Example buttons are shown with `https://` URLs. While they're hosted on GitHub Pages, the SSL option is provided via [CloudFlare's free Universal SSL](https://blog.cloudflare.com/introducing-universal-ssl/) offering.

### Required parameters

You **must** declare a value for each of the following URL parameters:

| Option | Description |
| ------ | :---------- |
| `user` | GitHub username that owns the repo/Username to sponsor |
| `repo` | GitHub repository to pull the forks and watchers counts |
| `type` | Type of button to show: `watch`, `fork`, `sponsor`, or `follow` |

### Optional parameters

The following URL parameters are **not** required. Add them as you wish.

| Option | Description |
| ------ | :---------- |
| `count` | Show the optional watchers or forks count: *none* by default or `true` |
| `size` | Optional flag for using a larger button: *none* by default or `large` |

---

<span class="deprecated" id="deprecated">Deprecated</span>

## Original Watch, aka Star

With the button split in August 2012, GitHub's API continued to return the Star count for old Watch buttons. Thus, the original unofficial Watch button returns a makeshift Star button.

This deprecated button is still around to avoid breaking every site that currently utilizes these embeds.

{% capture example %}
<iframe src="{{ site.url }}/github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>

<iframe src="{{ site.url }}/github-btn.html?user=twbs&repo=bootstrap&type=watch&count=true" frameborder="0" scrolling="0" width="170" height="20" title="GitHub"></iframe>
{% endcapture %}
{% include example.html content=example %}

---

## Limitations

For these first versions, functionality is limited and some concessions made:

* Mind the GitHub API rate limit which is 60 requests per hour for unauthenticated users.
* Width and height must be specified for all buttons (which actually adds some fun control for people like me).
* Make sure you adapt the snippets to your needs by modifying the parameters and the title.
* All attributes must be passed through via URL parameters.
* CSS and JavaScript are all included in the same HTML file to reduce complexity.
* We include the `frameborder` and `scrolling` attributes by default since we cannot know your setup, but you can optionally remove them and set them yourself via CSS:

  {% highlight css %}
  iframe {
    overflow: hidden;
    border: 0;
  }
  {% endhighlight %}

More refinement and functionality is planned with open-sourcing—any help is always appreciated!

---

## Open source

The unofficial GitHub buttons are available on GitHub for downloading, forking, or contributing.

<p>
  <iframe src="github-btn.html?user=mdo&repo=github-buttons&type=star&count=true&size=large" width="160" height="30" title="GitHub"></iframe>
  <iframe src="github-btn.html?user=mdo&repo=github-buttons&type=fork&count=true&size=large" width="160" height="30" title="GitHub"></iframe>
</p>

<a href="https://github.com/mdo/github-buttons" class="btn">View on GitHub</a>

---

<3
