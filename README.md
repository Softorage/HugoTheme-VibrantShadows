# Vibrant Shadows

An insanely customizable, extremely lightweight and ridiculously fast 'Blog Theme' for Hugo, with mobile support and a lot more.<!--built-in PWA support, contact page and a lot more.-->

<small>If you like our work & find it useful, please consider to star on GitHub. We are on [Facebook](https://www.facebook.com/Softorage/), [Twitter](https://twitter.com/Softorage) and [Instagram](https://www.instagram.com/softorage/), you can follow us there too! It really motivates us!</small>

## Preview

| Desktop | Mobile |
|---| --- |
| ![Vibrant Shadows Theme desktop preview](https://raw.githubusercontent.com/Softorage/HugoTheme-VibrantShadows/master/images/screenshot.png) | ![Vibrant Shadows Theme mobile preview](https://raw.githubusercontent.com/Softorage/HugoTheme-VibrantShadows/master/images/screenshot-mobile.png) |

## Table of Contents

* [Features](#features)
* [Prerequisites](#prerequisites)
* [Getting up and running](#getting-up-and-running)
  * [Setting up new Hugo website](#setting-up-new-hugo-website)
    * [1. As a Hugo theme (recommended)](#1-as-a-hugo-theme-recommended)
    * [2. As Git Submodule](#2-as-git-submodule)
  * [Using boilerplate provided](#using-boilerplate-provided)
  * [Installing the node dependencies](#installing-the-node-dependencies)
  * [Get started](#get-started)
* [Configuration](#configuration)
  * [Global Parameters](#global-parameters)
    * [Hugo's built-in parameters](#hugos-built-in-parameters)
    * [Vibrant Shadow's custom parameters](#vibrant-shadows-custom-parameters)
  * [Page Parameters](#page-parameters)
  * [Example `config.yaml`](#example-configyaml)
* [Built with](#built-with)
* [Contributing](#contributing)
* [License](#license)

## Features

* Blog with custom Taxonomy options, including tagging and category options
* Deeplinks
* Insanely customizable (see [config](#configuration))
* Dedicated 'Table of Contents'
* Logo alignment
* Sane defaults
* Mobile support with configurable menu alignment
* Syntax Highlighting
* Social-Media Share buttons on post
* Cookie Consent: "Opt-in", "Opt-out" and "None"
* Custom fonts for different elements
* SEO optimization and customization
* Ability to customize positions of various elements
<!--* Dark Mode (with UI controls for user preference setting) -->
<!--* Native Image Lazy Loading -->

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
3. Copy this folder and paste it into `themes` folder in your Hugo Website directory. If there isn't a `themes` folder, create one.
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

If this is the first time you are setting up Hugo:

1. Copy the contents of `exampleSite` folder provided, and paste into your Hugo Website directory.
2. Then run `hugo server` in terminal.

### Installing the node dependencies

```bash
# Install nodejs and npm. Change the following command as per you distribution/OS.
sudo apt install nodejs npm 

# Go to your Hugo Website directory, then open terminal and type:
npm install -g postcss postcss-cli autoprefixer cssnano @fullhuman/postcss-purgecss
```

### Get started

And, we're done! Now you can write your posts in Markdown format (.md file extension). You just need to keep these posts in `/content` directory. The directory structure that you make in the `content` directory also gets reflected as your blog's (or you website's) structure. For example, say you have post named `my-awesome-post.md` in `content/post/category-one`. Then the post will be available on the internet at `your-web-address.com/post/category-one/my-awesome-post`.

To create a new post, simply do [`hugo new`](https://gohugo.io/commands/hugo_new/) and Hugo will generate a new post for you using archetype. A post needs to have *front-matter* and *content*. *Front-matter* contains all the [Page Level parameters](#page-parameters), while *content* is your actual post.

To test how your blog looks, run `hugo serve`, and log on to the url given at the terminal (or command prompt) after you run `hugo serve`. The url is usually something like `localhost:1227`. To generate production ready website, simply run `hugo build`. Your website will be created in a directory named `public`. You can then copy and paste the contents of the `public` directory on the webserver, and the server should do the rest. You can also setup Hugo to build website automatically from the code and publish to the internet using GitLab, Netlify, etc. though it may require some technical knowledge.

Once set, jump over to the `config.yaml` file and start [configuring](#configuration) your site.

## Configuration

Here, we will mainly see settings that are unique to this theme. If something is not covered here (or elsewhere in this file), there's a good chance it is covered in [this Hugo docs page](https://gohugo.io/getting-started/configuration/#configuration-file). At the end of this section you will find an example `config.yaml` file, with all the options. It may serve in understanding all the options a bit better.

### Global Parameters

These options set global values that some pages or all pages in the site use by default.

#### Hugo's built-in parameters

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
    
    It is your Google Analytics ID, if any. Respecting your preference from 'privacy', and 'params -> user_experience' configuration, if you set this value, Google Analytics code will be included. Google Analytics included only when serving the website on 'production' environment (i.e. website built with `hugo` command and not `hugo serve`). If you wish to not use Google Analytics, do not set this variable; also set `disabled` to `true` in privacy configuration for Google Analytics.
    
    Example-1:
    ```yaml
    googleAnalytics: "UA-123456789-0" # the now deprecated Google Universal Analytics tag ID. Supported by Google till July 1, 2023.
    ```
    Example-2:
    ```yaml
    googleAnalytics: "G-123456789-0" # the Google Analytics tag 4 ID. Works only from Hugo v0.82.0 onwards.
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
        disable: false # | default: false
      googleAnalytics:
        anonymizeIP: true # 'true' makes it so the users' IP addresses are anonymized within Google Analytics | default: false
        disable: false # | default: false
        respectDoNotTrack: false # 'true' makes the GA templates respect the “Do Not Track” HTTP header | default: false
        useSessionStorage: false # 'true' disables the use of Cookies and use Session Storage to Store the GA Client ID | default: false
    ```

#### Vibrant Shadow's custom parameters

All these properties come under Hugo's built-in property, `params`.

Example:

```yaml
params:
  footerMessage: "Awesome footer message"
```

Let's see them one by one.

1.  **Social** *(Type: Map/Dict/Object | Accepts value: - | Highly Recommended | No default)*
    
    It stores information related to your social media profiles. It contains:
    1. **Profiles** *(Type: Map/Dict/Object | Accepts value: - | Highly Recommended | No default)*
        
        It stores your social media profiles. These are showcased as per your preference.
        <details><summary>Supported platforms</summary>
        <p>
        
        ```
        facebook: "#"
        twitter: "#"
        github: "#"
        gitlab: "#"
        steam: "#"
        instagram: "#"
        youtube: "#"
        pinterest: "#"
        linkedin: "#"
        reddit: "#"
        flickr: "#"
        deviantart: "#"
        vk: "#"
        mastodon: "#"
        bandcamp: "#"
        tumblr: "#"
        medium: "#"
        wikipedia: "#"
        ```
        
        To be supported in future:
        
        ```
        paypal: "#"
        slack: "#"
        twitch: "#"
        stackoverflow: "#"
        shutterstock: "#"
        soundcloud: "#"
        codepen: "#"
        ```
        
        </p>
        </details>
    2. **Share** *(Type: Array | Accepts value: "facebook", "twitter", "linkedin", "whatsapp", "reddit", "email" | Optional | No default)*
        
        Specify the name of social media platforms that you want your articles to be able to be shared on. You also need to set value in `position` parameter, for share icons to be displayed.
        
    Example:
    ```yaml
    social:
      profiles:
        facebook: "https://facebook.com/#myprofile"
        twitter: "https://twitter.com/#myprofile"
        github: "https://github.com/#myprofile"
        gitlab: "https://gitlab.com/#myprofile"
      share: ["facebook", "twitter", "linkedin", "telegram", "whatsapp", "reddit", "email"]
    ```
2.  **Meta** *(Type: Map/Dict/Object | Accepts value: - | Required/Optional)*
    1.  **Author** *(Type: String | Accepts value: Text | Required | No default)*
        
        It stores website-wide author(s). We won't be using `site.Authors` till it is finalised. See [here](https://github.com/gohugoio/hugo/issues/3088).
    
        Example:
        ```yaml
        author: "The Great Authors"
        ```
    2.  **Footer Message** *(Type: String | Accepts value: Text | Optional | No default)*
        
        It is shown in footer above footer links.
        
        Example:
        ```yaml
        footerMessage: "Awesome footer message"
        ```
    3.  **Tagline** *(Type: String | Accepts value: Text | Required | No default)*
        
        It is the tagline of the website/blog. It's displayed in website title, and on homepage.
        
        Example:
        ```yaml
        tagline: "A blog to satisfy you needs"
        ```
    4.  **Description** *(Type: String | Accepts value: Text | Required | No default)*
        
        It is the description of website/blog and should include website/blog title (brand name) at least once, for great SEO benefits. Recommended character length: 50 to 160.
        
        Example:
        ```yaml
        description: "A really great description!"
        ```
    5.  **Content License** *(Type: String | Accepts value: Text | Required | No default)*
        
        It is the license under which website/blog's content is distributed. It should be same as that specified in field 'copyright' above.
        
        Example:
        ```yaml
        contentLicense: "All rights reserved." # Another example: 'CC-BY-SA-3.0'
        ```
    6.  **Title Separator** *(Type: String | Accepts value: Text | Optional | Default: " | ")*
        
        It is used in website/blog title, to separate (say) page title from website/blog title.
        
        Example:
        ```yaml
        titleSeparator: " | "
        ```
    7.  **Attribution** *(Type: String | Accepts value: enable/disable | Optional | Default: "enable")*
        
        Allows to attribute Hugo team for awesome software and Softorage for great theme.
        
        Example:
        ```yaml
        attribution: "enable"
        ```
3.  **Brand** *(Type: Map/Dict/Object | Accepts value: - | Highly Recommended)*
    
    It stores brand related information. It contains:
    1.  **Name** *(Type: String | Accepts value: Text | Required | No default)*
        
        It's the Brand's Name, usually just one/two word that is name of the brand.
    2.  **Logo - 500px** *(Type: String | Accepts value: URL | Required | No default)*
        
        It's path (preferably relative path) to brand's logo with resolution 500px.
    3.  **Logo - 32px**  *(Type: String | Accepts value: URL | Required | No default)*
        
        It's path (preferably relative path) to brand's logo with resolution 32px. It will be shown on navbar as is.
    4.  **Color** *(Type: String | Accepts value: HEX/RGBA | Required | No default)*
        
        It's the color to be shown on scroll for brand name on navbar.
    5.  **Navbar Config** *(Type: Array | Accepts value: "logo", "name" | Optional | Default: ["logo", "name"])*
        
        It determines whether brand's logo and/or name should be visible on navbar.
    
    Example:
    ```yaml
    brand:
      name: "ExampleBlog"
      logo_500px: "/assets/favicon/android-chrome-512x512.png"
      logo_32px: "/assets/favicon/favicon-32x32.png"
      color: "#7d1fa5"
      navbar: ["logo", "name"]
    ```
4.  **Theme** *(Type: Map/Dict/Object | Accepts value: - | Optional)*
    
    You can specify custom color pallet to form look for the website/blog of your own liking. It contains:
    1.  **Nav** *(Type: String | Accepts value: HEX/RGBA | Optional | Default: "#ffffff")*
        
        It's navbar's background color.
    2.  **Antinav** *(Type: String | Accepts value: HEX/RGBA | Optional | Default: "#000000")*
        
        It's a color in good contrast to `nav`.
    3.  **Mat** *(Type: String | Accepts value: HEX/RGBA | Optional | Default: "#f9f9f9")*
        
        It's background color for cards (not of cards). It applies to the background on which cards are placed.
    4.  **Color-1** *(Type: String | Accepts value: HEX/RGBA | Optional | Default: "#7d1fa5")*
        
        It's color-1 in the hero gradient. It is used throughout the theme.
    5.  **Color-2** *(Type: String | Accepts value: HEX/RGBA | Optional | Default: "#6d19fc")*
        
        It's color-2 in the hero gradient. It is used throughout the theme.
    6.  **Borders** *(Type: String | Accepts value: rounded/square | Optional | Default: "rounded")*
        
        Here, specify what kind of borders do you like for elements, like buttons.
    
    Example:
    ```yaml
    theme:
      nav: "#ffffff"
      antinav: "#000000"
      mat: "#f9f9f9"
      clr1: "#7d1fa5"
      clr2: "#6d19fc"
      borders: "rounded"
    ```
5.  **Background Image** *(Type: Map/Dict/Object | Accepts value: - | Optional)*
    
    1. **Landing Page** *(Type: String | Accepts value: URL | Optional | No default)*
        
        It is path to background image for hero section on landing page. If specified, background image will be applied.
    2. **Post** *(Type: String | Accepts value: enable/disable | Optional | Default: "enable")*
        
        If enabled, image set in front-matter will be shown as background image for hero section of the post.
        
    Example:
    ```yaml
    backgImage:
      landingPage: "/neven-krcmarek-V4EOZj7g1gw-unsplash.jpg"
      post: "enable"
    ```
6.  **Position** *(Type: Map/Dict/Object | Accepts value: - | Optional with caevets)*
    
    It lets you customize *what* elements should be displayed and *where*. It contains:
    1.  **Social** *(Type: Map/Dict/Object | Accepts value: - | Optional)*
        1.  **Profiles** *(Type: String | Accepts value: footer/navbar | Optional | Default: "footer")*
            
            It lets you customize where you want your social profiles to appear. You may use 'navbar' if number of items in main menu and social profiles are minimal, otherwise 'footer' is recommended.
        2.  **Share** *(Type: String | Accepts value: top/bottom | Optional | Default: "top")*
            
            It lets you customize where you want your social sharing buttons to appear on a blog post.
    2.  **Menu on Navbar** *(Type: String | Accepts value: right/left | Optional | Default: "right")*
        
        It lets you customize the position of main menu on navbar.
    3.  **Post's Meta** *(Type: Map/Dict/Object | Accepts value: - | Optional | No default)*
        
        It lets you customize *which* elements from post's meta should be displayed, *where* and *how*.
        
        It contains:  
        **readingTime** - **wordCount** - **author** - **lastUpdated** - **tags**  
        *(Type: Map/Dict/Object | Accepts value: - | Optional | No default)*
        
        It lets you customize where (summary/content) you want to show a post's 'reading time', 'words count', 'author', 'last updated on', 'tags'  and how (top/bottom).
        
        ```yaml
        # For example,
        position:
          postMeta:
            tags:
              summary: "top"
              content: "bottom"
        
        # above code lets you show tags of your posts:
          1.  at the time when its 'summary' is being shown (for example, in the posts' list on landing page), at the top of the 'summary'.
          2.  at the time when its 'content' is being shown (for example, when a user visits the post itself), at the bottom of the 'content'.
        
        # not including (say) 'readingTime' (or 'wordCount' or 'author' or 'lastUpdated' or'tags'), would simply omit 'readingTime' from appearing in 'summary' and 'content'.
        # not includng  only (say) 'summary' (or 'content') for (say) 'readingTime', would simply omit 'readingTime' from appearing in 'summary' (or 'content').
        
        ```
    4.  **Thumbnail** *(Type: String | Accepts value: right/left | Optional | Default: "left")*
    
        Position of a post's image, when it appears as a thumbnail in a list (say) on landing page. Regardless of "right" or "left", it looks the same on mobile-view.
    
    Example:
    ```yaml
    position:
      social:
        profiles: "footer"
        share: "bottom"
      navbarMenu: "right"
      postMeta:
        readingTime:
          summary: "top"
          content: "top"
        wordCount:
          summary: "top"
          content: "top"
        author:
          summary: "top"
          content: "top"
        lastUpdated:
          summary: "top"
          content: "top"
        tags:
          summary: "top"
          content: "bottom" # default: "bottom"
      thumbnail: "left"
    ```
7.  **Fonts** *(Type: Map/Dict/Object | Accepts value: - | Optional )*
    
    It lets you customize the fonts for various types of text elements, and in general too.
    
    Let's see this customization property with an example:
    ```yaml
    font:
      general:
        family: "Lato" # must match to a css font-family | default: "Lato"
        #cdnLink: "" # a link tag for font other than Lato and Roboto | recommended
      heading: 
        list: ["h1"] # accepts array of values: "h1", "h2", "h3", "h4", "h5", "h6" | default: ["h1"]
        family: "Lato" # must match to a css font-family | default: "Lato"
        #cdnLink: "" # a link tag for font other than Lato and Roboto | recommended
      description:
        family: "Lato" # must match to a css font-family | default: "Lato"
        #cdnLink: "" # a link tag for font other than Lato and Roboto | recommended
      brand:
        family: "Lato" # must match to a css font-family | default: "Lato"
        #cdnLink: "" # a link tag for font other than Lato and Roboto | recommended
      footer:
        family: "Lato" # must match to a css font-family | default: "Lato"
        #cdnLink: "" # a link tag for font other than Lato and Roboto | recommended
      copyright:
        family: "Lato" # must match to a css font-family | default: "Lato"
        #cdnLink: "" # a link tag for font other than Lato and Roboto | recommended
      postMeta:
        family: "Lato" # must match to a css font-family | default: "Lato"
        #cdnLink: "" # a link tag for font other than Lato and Roboto | recommended
    ```
8. **Favicon Tags** *(Type: String | Accepts value: Text | Optional | No default)*
    
    It stores HTML tags for your favicon (see example below). We recommend you to ensure that you have `"purpose": "maskable"` set for one icon in your `site.webmanifest` file (helps for PWA). We recommend `https://realfavicongenerator.net` since it's easy to use and free. By the way, we are not affiliated with them. We just like their product!
    
    Example:
    ```yaml
    faviconTags: |
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png">
      <link rel="manifest" href="/assets/favicon/site.webmanifest">
      <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#525252">
      <link rel="icon" href="/assets/favicon/favicon.ico" type="image/x-icon">
      <link rel="shortcut icon" href="/assets/favicon/favicon.ico" type="image/x-icon">
      <meta name="apple-mobile-web-app-title" content="ExampleBlog">
      <meta name="application-name" content="ExampleBlog">
      <meta name="msapplication-TileColor" content="#fff6f8">
      <meta name="msapplication-config" content="/assets/favicon/browserconfig.xml">
    ```
9. **Custom Verification** *(Type: Map/Dict/Object | Accepts value: - | Optional)*
    
    It lets you verify your website on multiple reputed services.
    
    Example:
    ```yaml
    myWOT: "ba8579f668r8w3g62503" # verification key here is dummy
    ```
10. **SEO** *(Type: Map/Dict/Object | Accepts value: - | Optional)*
    
    It lets you customize SEO properties of the website/blog, to help you shine :grinning: It contains:
    1.  **Switch** *(Type: String | Accepts value: on/off | Optional | Default: "on")*
        
        A switch which lets you turn on all the good SEO meta tags.
    2.  **Twitter** *(Type: Map/Dict/Object | Accepts value: - | Optional)*
        
        Info about your Twitter account, and presentation of blog posts on Twitter when they are shared. It contains:
        1.  **Card** *(Type: String | Accepts value: enable/disable | Optional | Default: "enable")*
            
            Optimizes the website/blog, when it is shared on Twitter.
        2.  **Handle** *(Type: String | Accepts value: Text | Optional | No default)*
            
            It is Twitter handle of the website-wide author, without '@'.
    3.  **Facebook** *(Type: Map/Dict/Object | Accepts value: - | Optional)*
        
        Info about your Facebook account, and presentation of blog posts on Facebook when they are shared. It contains:
        1.  **OpenGraph** *(Type: String | Accepts value: enable/disable | Optional | Default: "enable")*
            
            Optimizes the website/blog, when it is shared on Facebook.
        2.  **App ID** *(Type: String | Accepts value: Text | Optional | No default)*
            
            Website/blog's Facebook App ID (if any)
    4.  **JSON-LD** *(Type: String | Accepts value: enable/disable | Optional | Default: "enable")*
        
        Improves ability of search engines to better index and understand the website/blog. Helps in SEO optimization.
    5.  **Speed Mode** *(Type: String | Accepts value: enable/disable | Highly Recommended | Default: "disable")*
        
        Enabling "Speed Mode" would make the website/blog extremely fast and lightweight, providing a snappy experience to website/blog visitors. "Speed Mode" utilises *PostCSS* via *Hugo's Asset Pipeline*. Note that, "Speed Mode" works in *production environment* only. Since many Hugo users do not have Hugo's extended version, this option is disabled by default.
    
    Example:
    ```yaml
    seo:
      switch: "on"
      twitter:
        card: "enable"
        handle: "Great"
      facebook:
        openGraph: "enable"
        appID: "170405085280305" # it is just for illustration purpose
      jsonLD: "enable"
      speedMode: "enable"
    ```
11. **Cookie Consent** *(Type: Map/Dict/Object | Accepts value: - | Optional)*
    
    It allows you to present a 'Cookie Consent' dialog to your users, to help them decide their privacy settings, when they browse your website. It contains:
    1.  **Switch** *(Type: String | Accepts value: on/off | Optional | Default: "off")*
      
        It lets you choose whether you want to show a Cookie Consent dialog to your users.
    2.  **Type** *(Type: String | Accepts value: opt-in/opt-out/none | Required | No default)*
        
        In 'opt-in', website doesn't employ cookies to user's computer unless user gives cosent to opt in. In 'opt-out', cookies are employed on user's computer and the user is given the choice to opt out of cookies. In 'none', cookies are employed on the user's computer and user is not given a choice in that regard. We recommend to refrain from using none, unless you have **zero** customers from EU or similar countries with privacy protecting laws.
    3.  **Revokable** *(Type: Boolean | Accepts value: true/false | Optional | Default: true)*
        
        When set to `true`, a button to revoke cookie consent appears when the user hover in bottom area of the screen, regardless whether user's country requires revertable cookie consent.
    4.  **Colors** *(Type: Map/Dict/Object | Accepts value: - | Optional)*
        
        It lets you customize the colors for Cookie Consent dialog. It contains:
        1.  **Banner** *(Type: Map/Dict/Object | Accepts value: - | Optional)*
            
            It lets you customize colors of banner for Cookie Consent. It contains: **background** and **text**.
        2.  **Button** *(Type: Map/Dict/Object | Accepts value: - | Optional)*
            
            It lets you customize colors of button for Cookie Consent. It contains: **background** and **text**.
    5.  **Content** *(Type: Map/Dict/Object | Accepts value: - | Required)*
        
        It lets you customize the content you wish to show on Cookie Consent dialog. It contains:
        1.  **Message** *(Type: String | Accepts value: Text | Required | No default)*
            
            It lets you customize the message to be shown in Cookie Consent. You can even use `<a>`-anchor tags to hyperlink words.
        2.  **Dismiss** *(Type: String | Accepts value: Text | Optional | Default: "Close")*

            It's the text on the button that dismisses the popup/banner.
        3.  **Link Text** *(Type: String | Accepts value: Text | Optional | Default: "Learn more")*
            
            This text appears after the `message` and is hyperlinked to `linkURL`.
        4.  **Link URL** *(Type: String | Accepts value: Text | Required | No default)*
            
            It's the url of location where user should be directed when they click "Learn more".
        5.  **Allow** *(Type: String | Accepts value: Text | Optional |Default: "Allow")*
            
            It is the text on the button that allows cookies.
        6.  **Deny** *(Type: String | Accepts value: Text | Optional | Default: "Decline")*
            
            It is the text on the button that denies cookies.
        7.  **Policy** *(Type: String | Accepts value: Text | Optional | Default: "Cookie Consent")*
            
            It is the text that appears on the button, when user's country requires revokable cookie consent.
            
    Example:
    ```yaml
    cookieConsent: # we use OSANO Cookie Consent solution
      switch: "on"
      type: "opt-in"
      revokable: true
      colors:
        banner:
          background: "#ffffff"
          text: "#000000"
        button:
          background: "#6d19fc"
          text: "#ffffff"
      content: # change the links below to appropriate url addresses
        message: |
          By continuing to use this website, you agree to our <a href='/legal/privacy-policy/'>Privacy Policy</a>, <a href='/legal/cookie-policy/'>Cookie Policy</a> and our <a href='/legal/terms-and-conditions/'>Terms and Conditions</a> for your use of this website.
        dismiss: "Close"
        linkText: "Learn more"
        linkURL: "/legal/privacy-policy/"
        allow: "Allow"
        deny: "Decline"
        policy: "Cookie Consent"
    ```
12. **User Experience** *(Type: Map/Dict/Object | Accepts value: - | Optional)*
    
    It contains settings that let's you customize your user's website/blog experience.
    1.  **Google Analytics** *(Type: Map/Dict/Object | Accepts value: - | Optional)*
      
       Customize your Google Analytics
       1.  **Script** *(Type: Integer | Accepts value: Number | Optional | Default: 0)*
        
           Accepts the following values:  
           **0**: Default script by Google via Hugo's internal template. Works well with Cookie Consent solution, since it respects `window['ga-disable-GA_MEASUREMENT_ID'] = true;` to disable Google Analytics measurement. [See this](https://developers.google.com/analytics/devguides/collection/gtagjs/user-opt-out). Has a higher chance of being blocked by AdBlockers. Only sync version of internal template works with gtag4;  
           **1**: [minimal-analytics by James Hill](https://github.com/jahilldev/minimal-analytics/tree/main/packages/ga4). May or may not work well with Cookie Consent solution.  
           **2**: [minimal-analytics-4 by Dariusz Więckiewicz](https://gist.github.com/idarek/9ade69ac2a2ef00d98ab950426af5791). May or may not work well with Cookie Consent solution. Make sure you set Data Stream data retention to 14 months from default 2 and link your GA4 web data stream with Google Search Console.  
           [Refer this for a good implementation discussion](https://discourse.gohugo.io/t/add-minimal-analytics-google-analytics-v4-to-hugo/39016)
       2.  **Loading Method** *(Type: String | Accepts value: Text | Optional | Default: "sync")*
        
           It helps you customize whether Google Analytics JavaScript file loads 'Synchronously' or 'Asynchronously'. Avialable only if `script` is set to "0". Latest Google Analytics Tag 4 only works with `sync`.
    2.  **Post Images** *(Type: Map/Dict/Object | Accepts value: - | Optional)*
      
        Customize behaviour for your posts' images
        1.  **Thumbnail** *(Type: Map/Dict/Object | Accepts value: String | Optional | Default: "200px")*
        
            Customizations in relation to how thumbnails of *Post Images* appear.
            1.  **Size** *(Type: String | Accepts value: String | Optional | Default: "200px")*
                
                Integer: Size of post images when they appear as thumbnails in lists, for example, on landing page.  
                String: Unit of size. For example, "em", "rem", "px".  
                Gets overridden by `thumbnail' -> 'size` specified in a page's front-matter.
            
            2.  **Borders** *(Type: String | Accepts value: square, rounded, circle, pill | Optional | Default: "rounded")*
            
                Choose the border radius of posts' images when they appear as thumbnails.  
                Gets overridden by `thumbnail' -> 'borders` specified in a page's front-matter.
        
    Example:
    ```yaml
    userExperience:
      googleAnalytics:
        script: 0
        loading: "sync"
      postImages:
        thumbnail:
          size: "200px"
          borders: "rounded"
    ```
13. **Main Sections** *(Type: Array | Accepts value: Section names | Highly Recommended)*
    
    This is Hugo's native feature that let's you specify which sections are to be treated as *Main Sections*. A very general and common example of *Main Section* is `post` or `posts` section (hence they are often called Blog Directories). If nothing is specified, the section with the highest number of content files is treated as a *Main Section*. For more info, see the [Hugo docs](https://gohugo.io/functions/where/#mainsections).
    
    Example:
    
    ```yaml
    mainSections: ["post"]
    ```

### Page Parameters

'Page paremeters' relate to the particular content file in whose front-matter they are defined. These options can be set from a page [front-matter](https://gohugo.io/content-management/front-matter#readout) or via [archetypes](https://gohugo.io/content-management/archetypes/#readout) (i.e. when you create a new content file via `hugo new` command).

1.  **Title** *(Type: String | Accepts value: Text | Required)*
    
    It is the title of the current page/post you are writing.
    
    Example:
    ```yaml
    title: "A post that takes you into space"
    ```
2.  **Description** *(Type: String | Accepts value: Text | Required)*
    
    It is the description of the current page/post. Recommended character length: 50 to 160
    
    Example:
    ```yaml
    description: "A short yet descriptive text that relates to this post."
    ```
3.  **Date** *(Type: String | Accepts value: Date | Required)*
    
    It is the date on which current page/post is published.
    
    Example:
    ```yaml
    date: "2021-04-26" # YYYY-MM-DD
    ```
4.  **Last Modified** *(Type: String | Accepts value: Date | Required)*
    
    It is the date on which current post was last modified.
    
    Example:
    ```yaml
    lastmod: "2021-04-29"
    ```
5.  **Tags/Categories/Custom-Taxonomy** *(Type: Array/String | Accepts value: Text | Recommended)*
    
    You can manage and organise you posts based on tags, categories or any other custom taxonomy.
    
    Example:
    ```yaml
    tags: ["great post", "awesome"] # multiple elements
    categories: "category" # single element
    ```
6.  **Image** *(Type: Map/Dict/Object | Accepts value: - | Recommended)*
    
    Specify an image for a post/page
    1.  **Source** *(Type: String | Accepts value: Path to Image | Required)*
      
        You can specify path (relative to root) to an image dedicated to current post. This image is also used to optimize the display of content when shared on social media.
        
        Example:
        ```
        The right way:
        1. "/my-awesome-image.jpg"
        2. "/images/my-awesome-image.jpg"
        
        The wrong way:
        1. "my-awesome-image.jpg"
        2. "images/my-awesome-image.jpg"
        ```
    2.  **Alternative Text** *(Type: String | Accepts value: Text | Recommended)*
      
        This text is shown when for some reason an image is unable to load. It also helps in SEO and is especially helpful for screen readers.
    3.  **Thumbnail** *(Type: Map/Dict/Object | Accepts value: - | Optional )*
    
        Customizations in relation to how thumbnails of *Post Images* appear.
        1.  **Size** *(Type: String | Accepts value: String | Optional | Default: "200px")*
      
            Integer: Size of post image when it appears as thumbnail in lists, for example, on landing page.  
            String: Unit of size. For example, "em", "rem", "px".  
            Overrides the setting set (if any) in `userExperience` -> `postImages` -> `thumbnail' -> 'size` in `config.yaml` file present at root of your webiste.
        2.  **Borders** *(Type: String | Accepts value: square, rounded, circle, pill | Optional | Default: "rounded")*
            
            Choose the border radius of post's image when they appear as thumbnails.  
            Overrides the setting set (if any) in `userExperience` -> `postImages` -> `thumbnail' -> 'borders` in `config.yaml` file present at root of your webiste.
    
    Example:
    ```yaml
    image:
      src: "/images/post-1.png"
      alt: "Alternative text"
      thumbnail:
        size: "200px"
        borders: "rounded"
    ```
7.  **Author** *(Type: String | Accepts value: Text | Recommended)*
    
    It is the name of the author of the current post.
    
    Example:
    ```yaml
    author: "Great Author"
    ```
8.  **Author Twitter Handle** *(Type: String | Accepts value: Text | Recommended)*
    
    It is the Twitter handle of the author of the current post, without '@'. This option is theme specific.
    
    Example:
    ```yaml
    author_twitter: "Gr8Authr" # this is just an example
    ```
9.  **Draft** *(Type: Boolean | Accepts value: true/false | Optional)*
    
    If it is set to `true`, the content will not be rendered unless the `--buildDrafts` flag is passed to the `hugo` command.
    
    Example:
    ```yaml
    draft: true
    ```
10. **Table of Contents** *(Type: boolean/String | Accepts value: true/false | Optional)*
    
    If set to `false`, *Table of Content* for current post will not be rendered.
    
    Example:
    ```yaml
    toc: false
    ```
11. **Aliases** *(Type: Array | Accepts value: Relative URL | Optional)*
    
    It stores other URLs (in relative form) - usually older URLs for current post - which you would like to redirect to current post.
    
    Example:
    ```yaml
    aliases: ["/posts/my-original-url/", "/2010/01/01/even-earlier-url.html"]
    ```
12. **URL** *(Type: String | Accepts value: Relative URL | Optional)*
    
    If you want to specify a custom URL for this post other than the one automatically generated by hugo based on content directory structure, you can specify it in this parameter.
    
    Example:
    ```yaml
    url: "/custom/url/"
    ```
    
### Example `config.yaml`

```yaml
# this configuration file shows all the configuration options supported by 'Vibrant Shadows' theme by Softorage, with explaining comments.

baseURL: "https://example.com/" # url address of the website | required
title: "ExampleBlog" # title of the site; usually same as brand name | required
# author: "The Great Authors" # we won't be using site.Authors till this parameter is finalised. see: https://github.com/gohugoio/hugo/issues/3088
copyright: "Copyright &#169; 2020 ExampleBlog. All rights reserved." # should match 'brand -> name', and 'contentLicense' under params below; used in default rss template: https://gohugo.io/templates/rss/#configure-rss | optional
languageCode: "en-us" # recommended | no default
theme: "HugoTheme-VibrantShadows"
# googleAnalytics: "G-123456789-0" # Respecting your preference from 'privacy', and 'params' -> 'user_experience' below, if you set this value, Google Analytics code will be included. Google Analytics included only when serving the website on 'production' environment (i.e. website built with `hugo` command and not `hugo serve`)
# disqusShortname: "yourdiscussshortname" # Respecting your preference from 'privacy', if you set this value, Disqus comments code will be included at the end of the blog posts. Disqus comments are shown only when serving the website on 'production' environment (i.e. website built with `hugo` command and not `hugo serve`)

# prevent build failures when using Hugo's Instagram shortcode due to deprecated Instagram API.
# See https://github.com/gohugoio/hugo/issues/7228#issuecomment-714490456
ignoreErrors: ["error-remote-getjson", "error-missing-instagram-accesstoken"]

# taxonomies as per Hugo's taxonomy feature
taxonomies:
  tag: "tags"
  category: "categories"
  series: "series"

# menu as per Hugo's menu feature
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

# with this, Hugo notes some stats about website, which are then used by CSS processors, like PostCSS
build:
  writeStats: true
  
# All privacy settings: https://gohugo.io/about/hugo-and-gdpr/#all-privacy-settings
# Explanations to all privacy settings: https://gohugo.io/about/hugo-and-gdpr/#the-privacy-settings-explained
privacy:
  disqus:
    disable: false
  googleAnalytics:
    anonymizeIP: true # 'true' makes it so the users' IP addresses are anonymized within Google Analytics
    disable: false
    respectDoNotTrack: false # 'true' makes the GA templates respect the “Do Not Track” HTTP header
    useSessionStorage: false # 'true' disables the use of Cookies and use Session Storage to Store the GA Client ID

# 
enableRobotsTXT: true # optional, allows to create a robots.txt file, which helps in SEO
# sitemap, and RSS are generated automatically
enableGitInfo: true # optional, allows us to use '.GitInfo' object. '.GitInfo' object allows us to leverage info from git for use in Hugo

# Only if 'enableGitInfo' is set to 'true'
frontmatter:
  date: ["date", "publishDate", "lastmod", ":git"] # adding ':git' at the end (of default format) makes the atom/rss feed to fetch dates from git, once enableGitInfo is set to true in 'config' file

# Allow HTML in markdown to be rendered
markup:
  goldmark:
    renderer:
      unsafe: true

# Here starts our customization
params:
  social: 
    profiles: # social platforms you are present on. see supported ones here | highly recommended
      facebook: "#"
      twitter: "#"
      github: "#"
      gitlab: "#"
      steam: "#"
      instagram: "#"
      youtube: "#"
      pinterest: "#"
      linkedin: "#"
      reddit: "#"
      flickr: "#"
      deviantart: "#"
      vk: "#"
      mastodon: "#"
      bandcamp: "#"
      tumblr: "#"
      medium: "#"
      wikipedia: "#"
      telegram: "#"
      # coming soon:
      paypal: "#"
      slack: "#"
      twitch: "#"
      stackoverflow: "#"
      shutterstock: "#"
      soundcloud: "#"
      codepen: "#"
    share: ["facebook", "twitter", "linkedin", "telegram", "whatsapp", "reddit", "email"] # accepts array of values: "facebook", "twitter", "linkedin", "whatsapp", "reddit", "email". just type the name of those you want you articles to be able to be shared on
  meta:
    author: "The Great Authors" # website-wide author | required
    footerMessage: "Awesome footer message" # text (HTML supported) shown in footer above footer links | optional
    tagline: "A Really Catchy Tagline" # shown in website title on homepage and also used in seo | required
    description: "A really great description!" # should include brand name | character length: 50 to 160 characters
    contentLicense: "CC-BY-SA-3.0" # cc-by-3.0, etc or 'All right reserved.' should also be same as the one in copyright above
    titleSeparator: " | " # used in website/blog title, to separate (say) page title from website/blog title | default: " | "
    attribution: "enable" # attribute Hugo team for awesome software and Softorage for great theme | default: "enable"
  brand:
    name: "ExampleBlog" # brand name (Samy's blog), usually just one word that is name of the brand | required | no default
    logo_500px: "/assets/favicon/android-chrome-512x512.png" # path (preferably relative path) to brand's good resolution logo | required | no default
    logo_32px: "/assets/favicon/favicon-32x32.png" # will be shown on navbar as is | required | no default
    color: "#7d1fa5" # color to be shown for brand name on navbar on scroll | required | default: "#7d1fa5"
    navbar: ["logo", "name"] # accepts array of values: "logo", "name" | this configuration shows brand 'logo' & brand 'name' on navbar | optional | default: ["logo", "name"]
  theme: # optional
    nav: "#ffffff" # navbar's background color | optional | default: "#ffffff"
    antinav: "#000000" # a color in good contrast to nav | optional | default: "#000000"
    mat: "#f9f9f9" # background color forcards (not of cards) | optional | default: "#f9f9f9"
    clr1: "#7d1fa5" # color-1 of gradient | optional | default: "#7d1fa5"
    clr2: "#6d19fc" # color-2 of gradient | optional | default: "#6d19fc"
    borders: "rounded" # accepts value: rounded/square | what kind of borders do you like for elements, like buttons | default: "rounded"
  backgImage:
    landingPage: "/neven-krcmarek-V4EOZj7g1gw-unsplash.jpg" # path to background image for hero section on landing page. if specified, background image will be applied.
    post: "enable" # accepts value: enable/disable | if enabled, image set in front-matter will be shown as background image for hero section of the post | default: "enable"
  position: # optional
    social:
      profiles: "footer" # accepts value: navbar/footer | may use 'navbar' if number of items in main menu and social profiles are minimal, otherwise 'footer' is recommended | default: "footer"
      share: "bottom" # top/bottom | no default
    navbarMenu: "right" # accepts value: right/left | decides the position of main menu on navbar | default: "right"
    postMeta: # it lets you customize *which('reading time', 'words count', 'author', 'last updated on', 'tags')* elements from post's meta should be displayed, *where(summary/content)* and *how(top/bottom)*
      readingTime:
        summary: "top" # values: top/bottom | simply omit if don't want to show | optional | no default
        content: "top" # values: top/bottom | simply omit if don't want to show | optional | no default
      wordCount:
        summary: "top" # values: top/bottom | simply omit if don't want to show | optional | no default
        content: "top" # values: top/bottom | simply omit if don't want to show | optional | no default
      author:
        summary: "top" # values: top/bottom | simply omit if don't want to show | optional | no default
        content: "top" # values: top/bottom | simply omit if don't want to show | optional | no default
      lastUpdated:
        summary: "top" # values: top/bottom | simply omit if don't want to show | optional | no default
        content: "top" # values: top/bottom | simply omit if don't want to show | optional | no default
      tags:
        summary: "top" # values: top/bottom | simply omit if don't want to show | optional | no default
        content: "bottom" # values: top/bottom | simply omit if don't want to show | optional | default: "bottom"
    thumbnail: "left" # accepts value: right/left | position of a post's image, when it appears as a thumbnail in a list (say) on landing page. regardless of "right" or "left", it looks the same on mobile-view. | optional | default: "left"
  font:
    general:
      family: "Lato" # must match to a css font-family | default: "Lato"
      #cdnLink: "" # a link tag for font other than Lato and Roboto | recommended
    heading: 
      list: ["h1"] # accepts array of values: "h1", "h2", "h3", "h4", "h5", "h6" | default: ["h1"]
      family: "Lato" # must match to a css font-family | default: "Lato"
      #cdnLink: "" # a link tag for font other than Lato and Roboto | recommended
    description:
      family: "Lato" # must match to a css font-family | default: "Lato"
      #cdnLink: "" # a link tag for font other than Lato and Roboto | recommended
    brand:
      family: "Lato" # must match to a css font-family | default: "Lato"
      #cdnLink: "" # a link tag for font other than Lato and Roboto | recommended
    footer:
      family: "Lato" # must match to a css font-family | default: "Lato"
      #cdnLink: "" # a link tag for font other than Lato and Roboto | recommended
    copyright:
      family: "Lato" # must match to a css font-family | default: "Lato"
      #cdnLink: "" # a link tag for font other than Lato and Roboto | recommended
    postMeta:
      family: "Lato" # must match to a css font-family | default: "Lato"
      #cdnLink: "" # a link tag for font other than Lato and Roboto | recommended
  faviconTags: | # just copy paste all the tags here (Hugo templating supported). Also, ensure that you have "purpose": "maskable" set for one icon in your site.webmanifest file (helps for pwa). Use https://realfavicongenerator.net, it's great
    <link rel="apple-touch-icon" sizes="180x180" href="{{ site.BaseURL }}/assets/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ site.BaseURL }}/assets/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ site.BaseURL }}/assets/favicon/favicon-16x16.png">
    <link rel="manifest" href="{{ site.BaseURL }}/assets/favicon/site.webmanifest">
    <link rel="mask-icon" href="{{ site.BaseURL }}/assets/favicon/safari-pinned-tab.svg" color="#7817c4">
    <link rel="icon" href="{{ site.BaseURL }}/assets/favicon/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="{{ site.BaseURL }}/assets/favicon/favicon.ico" type="image/x-icon">
    <meta name="apple-mobile-web-app-title" content="Vibrant Shadows Theme">
    <meta name="application-name" content="Vibrant Shadows Theme">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">
  seo:
    switch: "on" # accepts value: on/off | decide whether you want all the good seo meta tags | default: on
    twitter:
      card: "enable" # accepts value: enable/disable | good for seo | default: enable
      handle: "Great" #twitter handle website-wide author, without @
    facebook:
      openGraph: "enable" # accepts value: enable/disable | good for seo | default: enable
      #appID: "" # facebook App ID
    jsonLD: "enable" # accepts value: enable/disable | good for seo | default: enable
    speedMode: "disable" # accepts value: enable/disable | enabling "Speed Mode" would make the website/blog extremely fast and lightweight, providing a snappy experience to website/blog visitors. "Speed Mode" utilises *PostCSS* via *Hugo's Asset Pipeline*. note that, "Speed Mode" works in *production environment* only. since many Hugo users do not have Hugo's extended version, this option is disabled by default. | default: disable
  cookieConsent: # we use OSANO Cookie Consent solution
    switch: "off" # accepts: on/off | decide whether you want to show a cookie consent dialog to your users | default: "off"
    type: "opt-in" # accepts: opt-in/opt-out/none | In opt-in, website doesn't employ cookies to user's computer unless user gives cosent to opt in. In opt-out, cookies are employed on user's computer and the user is given the choice to opt out of cookies. In none, cookies are employed on the user's computer and user is not given a choice in that regard. Refrain from using none, unless you have zero customers from EU or similar countries with privacy protecting laws. | no default
    revokable: true # a button to revoke cookie consent appears when user hover in bottom area of the screen, regardless whether user's country requires revertable cookie consent | default: true
    colors:
      banner:
        background: "#ffffff" # HEX | default: theme.nav
        text: "#000000" # HEX | default: theme.antinav
      button:
        background: "#6d19fc" # HEX | default: theme.clr2
        text: "#ffffff" # HEX | default: theme.nav
    content: # change the links below to appropriate url addresses
      message: | # no default
        By continuing to use this website, you agree to our <a href='/legal/privacy-policy/'>Privacy Policy</a>, <a href='/legal/cookie-policy/'>Cookie Policy</a> and our <a href='/legal/terms-and-conditions/'>Terms and Conditions</a> for your use of this website.
      dismiss: "Close" # text on the button that dismisses the popup/banner | default: "Close"
      linkText: "Learn more" # this text appears after the message and is hyperlinked | default: "Learn more"
      linkURL: "/legal/privacy-policy/" # url of location where user should be directed when they click "Learn more".
      allow: "Allow" # text on the button that allows cookies | default: "Allow"
      deny: "Decline" # text on the button that denies cookies | default: "Decline"
      policy: "Cookie Consent" # text that appears on the button, when user's country requires revokable cookie consent | default: "Cookie Consent"
  userExperience:
    googleAnalytics: # customize your Google Analytics
      script: 0 # accepts value: 0/1/2 | 0: Default script by Google via Hugo's internal template; 1: minimal-analytics by James Hill; 2: minimal-analytics-4 by Dariusz Więckiewicz | optional | default: 0
      loading: "sync" # accepts value: sync/async | determines whether Google Analytics JavaScript file loads 'Synchronously' or 'Asynchronously' | optional | default: "sync"
    postImages: # customize behaviour for your posts' images
        thumbnail:
          size: "200px" # accepts value: string | integer: size of post images when they appear as thumbnails; string: unit of size | default: "200px"
          borders: "rounded" # accepts value: square, rounded, circle, pill | choose the border radius of posts' images when they appear as thumbnails | optional | default: "rounded"
  mainSections: ["post"] # required, https://gohugo.io/functions/where/#mainsections
  #customVerification:
    #myWOT: "ba8579f668r8w3g62503" # content for meta tag to verify your website on 'Web Of Trust'
```

## Built with

* Hugo
* Twitter Bootstrap
* Font Awesome

## Contributing

Anyone contributing, benefits equally from others' contributions.

If you have a tip, feedback or issues, please [open an issue here](https://github.com/Softorage/HugoTheme-VibrantShadows/issues).If you think 'Vibrant Shadows' theme could benefit from some features, or there is something that needs to be fixed, please open an issue at least 2-3 days prior to [opening a PR](https://github.com/Softorage/HugoTheme-VibrantShadows/pulls). If you think there is something that needs to be fixed and which isn't of much significance (say a typo), you may open a PR directly.

If you like our work & find it useful, please consider to star on GitHub. We are on [Facebook](https://www.facebook.com/Softorage/), [Twitter](https://twitter.com/Softorage) and [Instagram](https://www.instagram.com/softorage/), you can follow us there too! It really motivates us!

## License

```
The MIT License (MIT)

Copyright (c) 2020 Softorage

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

License can be viewed [here](https://github.com/Softorage/HugoTheme-VibrantShadows/blob/master/LICENSE).

