---
title: "Custom configuration options in the theme"
author: "Sanmay Joshi"
description: "Get to know all the awesome configurations Vibrant Shadows Hugo theme has to offer."
tags: ["configuration", "customize", "settings"]
date: "2020-10-04"
---
Here, we will mainly see settings that are unique to this theme. If something is not covered here (or elsewhere in this file), there's a good chance it is covered in [this Hugo docs page](https://gohugo.io/getting-started/configuration/#configuration-file).

<!--more-->

**Global Parameters (site-level):**

These options set global values that some pages or all pages in the site use by default.

## Vibrant Shadow's custom parameters

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
    2.  **Logo** *(Type: String | Accepts value: URL | Required | No default)*
        
        It's path (preferably relative path) to brand's logo.
    3.  **Color** *(Type: String | Accepts value: HEX/RGBA | Required | No default)*
        
        It's the color to be shown on scroll for brand name on navbar.
    4.  **Navbar Config** *(Type: Array | Accepts value: "logo", "name" | Optional | Default: ["logo", "name"])*
        
        It determines whether brand's logo and/or name should be visible on navbar.
    
    Example:
    ```yaml
    brand:
      name: "ExampleBlog"
      logo: "/assets/logo.png"
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
5.  **Position** *(Type: Map/Dict/Object | Accepts value: - | Optional with caevets)*
    
    It lets you customize *what* elements should be displayed and *where*. It contains:
    1.  **Social** *(Type: Map/Dict/Object | Accepts value: - | Optional)*
        1.  **Profiles** *(Type: String | Accepts value: footer/navbar | Optional | Default: "footer")*
            
            It lets you customize where you want your social profiles to appear. You may use 'navbar' if number of items in main menu and social profiles are minimal, otherwise 'footer' is recommended.
        2.  **Share** *(Type: String | Accepts value: top/bottom | Optional | No default)*
            
            It lets you customize where you want your social sharing buttons to appear on a blog post.
    2.  **Menu on Navbar** *(Type: String | Accepts value: right/left | Optional | Default: "right")*
        
        It lets you customize the position of main menu on navbar.
    3.  **Post's Meta** *(Type: Map/Dict/Object | Accepts value: - | Optional | No default)*
        
        It lets you customize *which* elements from post's meta should be displayed, *where* and *how*. It contains:
        **readingTime** - **wordCount** - **author** - **lastUpdated** - **tags**
        *(Type: Map/Dict/Object | Accepts value: - | Optional | No default)*
        It lets you customize where - summary/content - you want to show a post's 'reading time', 'words count', 'author', 'last updated on', 'tags'  and how - top/bottom.
    
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
          content: "bottom"
    ```
6.  **Fonts** *(Type: Map/Dict/Object | Accepts value: - | Optional )*
    
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
7. **Favicon Tags** *(Type: String | Accepts value: Text | Optional | No default)*
    
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
8. **Custom Verification** *(Type: Map/Dict/Object | Accepts value: - | Optional)*
    
    It lets you verify your website on multiple reputed services.
    
    Example:
    ```yaml
    myWOT: "ba8579f668r8w3g62503" # verification key here is dummy
    ```
9. **SEO** *(Type: Map/Dict/Object | Accepts value: - | Optional)*
    
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
10. **Cookie Consent** *(Type: Map/Dict/Object | Accepts value: - | Optional)*
    
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
11. **User Experience** *(Type: Map/Dict/Object | Accepts value: - | Optional)*
    
    It contains settings that let's you customize your user's website/blog experience.
    1.  **Google Analytics Loading** *(Type: String | Accepts value: sync/async | Optional | Default: "sync")*
        
        It helps you customize whether Google Analytics JavaScript file loads 'Synchronously' or 'Asynchronously'.
    
    Example:
    ```yaml
    userExperience:
      googleAnalyticsLoading: "sync"
    ```
12. **Main Sections** *(Type: Array | Accepts value: Section names | Highly Recommended)*
    
    This is Hugo's native feature that let's you specify which sections are to be treated as *Main Sections*. A very general and common example of *Main Section* is `post` or `posts` section (hence they are often called Blog Directories). If nothing is specified, the section with the highest number of content files is treated as a *Main Section*. For more info, see the [Hugo docs](https://gohugo.io/functions/where/#mainsections).
    
    Example:
    
    ```yaml
    mainSections: ["post"]
    ```
