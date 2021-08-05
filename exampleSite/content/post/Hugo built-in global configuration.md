---
title: "Hugo's built-in global configurations"
author: "Sanmay Joshi"
description: "Get to know the Hugo's built-in configurations relevant to Vibrant Shadows Hugo theme."
tags: ["configuration", "customize", "settings"]
date: "2020-10-05"
---
Options that Hugo has built-in and are relevant to this theme. If something is not covered here (or elsewhere in this file), there's a good chance it is covered in [this Hugo docs page](https://gohugo.io/getting-started/configuration/#configuration-file).

<!--more-->

**Global Parameters (site-level):**

These options set global values that some pages or all pages in the site use by default.

## Hugo's built-in global parameters

1.  **BaseURL** *(Type: String | Accepts value: URL | Required | No default)*
    
    baseURL is the URL of the website or blog.
    
    Example:
    ```yaml
    baseurl: "https://example.com/"
    ```
2.  **Title** *(Type: String | Accepts value: Text | Required | No default)*
    
    It is the title of the website or blog. Title is usually same as brand name.
    
    Example:
    ```yaml
    title: "ExampleBlog"
    ```
3.  **Author** *(Type: String | Accepts value: Text | Required | No default)*
    
    We won't be using `site.Authors` till this parameter is finalised. See [here](https://github.com/gohugoio/hugo/issues/3088).
    <!--It stores website-wide author(s).
    
    Example:
    ```yaml
    author: "The Great Authors"
    ```
    #name: https://gohugo.io/templates/rss/#configure-rss
    #email: "" # author's email; used in default rss template: https://gohugo.io/templates/rss/#configure-rss | optional-->
4.  **Copyright** *(Type: String | Accepts value: Text | Optional | No default)*
    
    It is the copyright text. Due consideration should be given to 'brandName or title' and 'contentLicense' specified in configuration file. Note that it isn't used in footer, but only [in defualt RSS template](https://gohugo.io/templates/rss/#configure-rss).
    
    Example:
    ```yaml
    copyright: "Copyright &#169; 2020 ExampleBlog. All rights reserved."
    ```
5.  **Language Code** *(Type: String | Accepts value: Text | Recommended | No default)*
    
    It stores the language code for the website or blog.
    
    Example:
    ```yaml
    languageCode: "en-us"
    ```
6.  **Theme** *(Type: String | Accepts value: Text | Required | No default)*
    
    This is the name of the theme you are using.
    
    Example:
    ```yaml
    theme: "HugoTheme-VibrantShadows"
    ```
7.  **Google Analytics** *(Type: String | Accepts value: Alphanumeric | Optional | No default)*
    
    It is your Google Analytics ID, if any. Respecting your preference from 'privacy', and 'params -> user_experience' configuration, if you set this value, Google Analytics code will be included. Google Analytics included only when serving the website on 'production' environment (i.e. website built with `hugo` command and not `hugo serve`)
    
    Example:
    ```yaml
    googleAnalytics: "UA-123456789-0"
    ```
8.  **Disqus Shortname** *(Type: String | Accepts value: Alphanumeric | Optional | No default)*
    
    It is your Disqus Shortname, if any. Respecting your preference from 'privacy', if you set this value, Disqus comments code will be included at the end of the blog posts. Disqus comments are shown only when serving the website on 'production' environment (i.e. website built with `hugo` command and not `hugo serve`)
    
    Example:
    ```yaml
    disqusShortname: "yourdiscussshortname"
    ```
9.  **Taxonomies** *(Type: Map/Dict/Object | Accepts value: - | Optional | Default: Tags & Categories)*
    
    This feature allows to define custom taxonomies for post/page management.
    
    Example:
    ```yaml
    taxonomies:
      tag: "tags" # when defining custom taxonomies, we need to redefine even the default taxonomies if we wish to keep them, hence we have redefined 'tags'. see here: https://gohugo.io/content-management/taxonomies#example-adding-a-custom-taxonomy-named-series
      category: "categories" # redefined 'categories'
      series: "series" # defined a custom taxonomy, 'series'
    ```
10. **Menus** *(Type: Map/Dict/Object | Accepts value: - | Optional | No default)*
    
    These are the menus that are used by users to navigate the website/blog. An example would be 'main' menu, which usually resides on navbar.
    
    Example:
    ```yaml
    menu:
      main:
        - identifier: "about" # different for all menu entries, useful especially when menu name coincides
          name: "About" # shown on website/blog
          url: "/about/" # user is taken to this url when user clicks on menu item
          weight: 10 # used to sort menu items by weight
        - identifier: "sub-about"
          name: "Sub About"
          url: "/sub-about/"
          parent: "about"
          weight: 1
    ```
11. **Build Stats** *(Type: Map/Dict/Object | Accepts value: - | Required)*
    
    With this, Hugo notes some stats about website, which are then used by CSS processors.
    
    Example:
    ```yaml
    build:
      writeStats: true
    ```
12. **Privacy** *(Type: Map/Dict/Object | Accepts value: - | Optional)*
    
    This feature allows to maintain optimal privacy settings for the website/blog. You can see full list of privacy settings [here](https://gohugo.io/about/hugo-and-gdpr/#all-privacy-settings), and their explanation [here](https://gohugo.io/about/hugo-and-gdpr/#the-privacy-settings-explained).
    
    Example:
    ```yaml
    privacy:
      disqus:
        disable: "false" # | default: false
      googleAnalytics:
        anonymizeIP: "true" # 'true' makes it so the users' IP addresses are anonymized within Google Analytics | default: false
        disable: "false" # | default: false
        respectDoNotTrack: "false" # 'true' makes the GA templates respect the “Do Not Track” HTTP header | default: false
        useSessionStorage: "false" # 'true' disables the use of Cookies and use Session Storage to Store the GA Client ID | default: false
    ```

