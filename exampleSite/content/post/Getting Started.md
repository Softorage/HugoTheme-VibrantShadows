---
title: "Getting started with Vibrant Shadows"
author: "Sanmay Joshi"
description: "Read the full post to easily get started with Vibrant Shadows Hugo theme."
date: "2020-09-30"
---
It's very easy to get started with Vibrant Shadows. How? Read on.

<!--more-->

## Prerequisites

Firstly, *ensure you have installed the [extended version of Hugo](https://github.com/gohugoio/hugo/releases)*. You may need to scroll down a bit to see extended versions. Alternatively, you may see installation steps from [Hugo's official docs](https://gohugo.io/getting-started/installing/).

If you don't have or can't have extended version of Hugo installed, copy the resources folder from theme to root of your Hugo website directory. Hugo autodetects required files, and uses them.

## Getting up and running

Read the [prerequisites](#prerequisites) above and verify you're using the extended version of Hugo. There are at least two ways of quickly getting started with Hugo and the VMware Clarity theme:

### Setting up new Hugo website

```bash
hugo new site yourSiteName # generate a new Hugo site if you don't already have one
cd yourSiteName # move in to the Hugo website's directory
```

#### 1. As a Hugo Module (recommended)

Simply add the repo to your theme option in `config.yaml`:

```yaml
theme:
  - github.com/Softorage/gohugo-theme-ananke
```

#### 2. As Git Submodule

Inside the folder of your Hugo site run:

```bash
git init # to initiate git if it isn't already
git submodule add https://github.com/Softorage/gohugo-theme-ananke.git themes/ananke # add theme as a git submodule
cp -a themes/hugo-shadows/exampleSite/* . # we currently have Hugo Basic Example as our `exampleSite` 
```

Then run

```bash
hugo server
```

And, we're done!

### Using boilerplate provided

1. Copy exampleSite folder provided.
2. Then run `hugo server` in terminal.

And, we're done!

Once set, jump over to the `config.yaml` file and start [configuring](/post/configuration/) your site.
