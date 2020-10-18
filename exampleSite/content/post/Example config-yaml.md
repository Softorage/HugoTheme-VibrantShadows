---
title: "Example config.yaml"
author: "Sanmay Joshi"
description: "An example config.yaml file relevant to Vibrant Shadows Hugo theme."
tags: ["configuration", "customize", "settings"]
date: "2020-10-02"
---
An example configuration file (config.yaml), which shows all the configuration options supported by 'Vibrant Shadows' theme by Softorage, with explaining comments.

<!--more-->

```yaml
# this configuration file shows all the configuration options supported by 'Vibrant Shadows' theme by Softorage, with explaining comments.

baseURL: "https://example.com/" # url address of the website | required
title: "ExampleBlog" # title of the site; usually same as brand name | required
# author: "The Great Authors" # we won't be using site.Authors till this parameter is finalised. see: https://github.com/gohugoio/hugo/issues/3088
copyright: "Copyright &#169; 2020 ExampleBlog. All rights reserved." # should match 'brand -> name', and 'contentLicense' under params below; used in default rss template: https://gohugo.io/templates/rss/#configure-rss | optional
languageCode: "en-us" # recommended | no default
theme: "HugoTheme-VibrantShadows"
# googleAnalytics: "UA-123456789-0" # Respecting your preference from 'privacy', and 'params' -> 'user_experience' below, if you set this value, Google Analytics code will be included. Google Analytics included only when serving the website on 'production' environment (i.e. website built with `hugo` command and not `hugo serve`)
# disqusShortname: "yourdiscussshortname" # Respecting your preference from 'privacy', if you set this value, Disqus comments code will be included at the end of the blog posts. Disqus comments are shown only when serving the website on 'production' environment (i.e. website built with `hugo` command and not `hugo serve`)

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
    disable: "false"
  googleAnalytics:
    anonymizeIP: "true" # 'true' makes it so the users' IP addresses are anonymized within Google Analytics
    disable: "false"
    respectDoNotTrack: "false" # 'true' makes the GA templates respect the “Do Not Track” HTTP header
    useSessionStorage: "false" # 'true' disables the use of Cookies and use Session Storage to Store the GA Client ID

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
    logo: "" # path (preferably relative path) to brand's good resolution logo | required | no default
    color: "#7d1fa5" # color to be shown for brand name on navbar on scroll | required | no default
    navbar: ["logo", "name"] # accepts array of values: "logo", "name" | this configuration shows brand 'log' & brand 'name' on navbar | optional | default: ["logo", "name"]
  theme: # optional
    nav: "#ffffff" # navbar's background color | optional | default: "#ffffff"
    antinav: "#000000" # a color in good contrast to nav | optional | default: "#000000"
    mat: "#f9f9f9" # background color forcards (not of cards) | optional | default: "#f9f9f9"
    clr1: "#7d1fa5" # color-1 of gradient | optional | default: "#7d1fa5"
    clr2: "#6d19fc" # color-2 of gradient | optional | default: "#6d19fc"
    borders: "rounded" # accepts value: rounded/square | what kind of borders do you like for elements, like buttons | default: "rounded"
  position: # optional
    social:
      profiles: "footer" # accepts value: navbar/footer | may use 'navbar' if number of items in main menu and social profiles are minimal, otherwise 'footer' is recommended | default: "footer"
      share: "bottom" # top/bottom | no default
    navbarMenu: "right" # accepts value: right/left | decides the position of main menu on navbar | default: "right"
    postMeta: # 
      readingTime:
        summary: "top" # values: top/bottom, no default
        content: "top" # accepts array of values: "summary", "content" | determines 1. where should 'reading time for a post' appear: wherever summary of post is shown eg, homepage; on the post itself. 2. how should it appaer: at top or at bottom. this configuration shows "reading time" when 'summary' is shown & in 'blog post' | optional | no default
      wordCount:
        summary: "top" # values: top/bottom, no default
        content: "top" # accepts array of values: "summary", "content" | this configuration shows "word count" when 'summary' is shown & in 'blog post' | optional | no default
      author:
        summary: "top" # values: top/bottom, no default
        content: "top" # accepts array of values: "summary", "content" | this configuration shows "author" when 'summary' is shown & in 'blog post' | optional | no default
      lastUpdated:
        summary: "top" # values: top/bottom, no default
        content: "top" # accepts array of values: "summary", "content" | this configuration shows "last updated date" when 'summary' is shown & in 'blog post' | optional | no default
      tags:
        summary: "top" # values: top/bottom, no default
        content: "bottom" # accepts array of values: "summary", "content" | this configuration shows "tags" when 'summary' is shown & in 'blog post' | optional | no default
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
    googleAnalyticsLoading: "sync" # accepts value: sync/async | determines whether Google Analytics JavaScript file loads 'Synchronously' or 'Asynchronously' | optional | default: "sync"
  mainSections: ["post"] # required, https://gohugo.io/functions/where/#mainsections
  #customVerification:
    #myWOT: "ba8579f668r8w3g62503" # content for meta tag to verify your website on 'Web Of Trust'
```
