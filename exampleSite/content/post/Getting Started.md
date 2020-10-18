---
title: "Getting started with Vibrant Shadows"
author: "Sanmay Joshi"
description: "Read the full post to easily get started with Vibrant Shadows Hugo theme."
tags: ["get started", "guide"]
date: "2020-10-06"
---
It's very easy to get started with Vibrant Shadows. How? Read on.

<!--more-->

## Prerequisites

Firstly, *ensure you have installed the latest (min v0.75.1) [extended version of Hugo](https://github.com/gohugoio/hugo/releases)*. You may need to scroll down a bit to see extended versions. Alternatively, you may see installation steps from [Hugo's official docs](https://gohugo.io/getting-started/installing/).

If you don't have or can't have extended version of Hugo installed, copy the resources folder from theme to root of your Hugo website directory. Hugo autodetects required files, and uses them. Note that it might make your website slightly slow to load.

## Getting up and running

Read the [prerequisites](#prerequisites) above and verify you're using the extended version of Hugo. There are at least two ways of quickly getting started with Hugo and the Vibrant Shadows theme:

### Setting up new Hugo website

```bash
hugo new site yourSiteName # generate a new Hugo site if you don't already have one
cd yourSiteName # move in to the Hugo website's directory
```

#### 1. As a Hugo theme (recommended)

1. Download the repo on your machine
2. Extract the zip file and rename the folder from `HugoTheme-VibrantShadows-master` to `HugoTheme-VibrantShadows`.
3. Copy this folder and paste it into you Hugo Website directory.
4. Simply add the repo to your theme option in `config.yaml`:
    
    ```yaml
    theme: "HugoTheme-VibrantShadows"
    ```

#### 2. As Git Submodule

Inside the folder of your Hugo site run:

```bash
git init # to initiate git if it isn't already
git submodule add https://github.com/Softorage/HugoTheme-VibrantShadows.git themes/HugoTheme-VibrantShadows # add theme as a git submodule
cp -a themes/HugoTheme-VibrantShadows/exampleSite/* . # start with the boilerplate by copying it into current directory
```

Then run

```bash
hugo server
```

And, we're done!

If you have extended version of Hugo installed, copy the `postcss.config.js` file to the root of your Hugo Website directory after setting up the theme. We also recommend creating a `package.json` file in your Hugo Website directory.

### Using boilerplate provided

1. Copy exampleSite folder provided, and move into this folder (open this folder).
2. Then run `hugo server` in terminal.

And, we're done!

Once set, jump over to the `config.yaml` file and start [configuring](/post/configuration) your site.
