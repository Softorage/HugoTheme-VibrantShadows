// Transition effect for navbar
const navbar = document.querySelector(".navbar");
const navbarBrand = document.querySelector(".navbar .brand").classList;
function scrollFunction() {
  // Checks if window is scrolled more than 30px, adds/removes bg-white and shadow class
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    navbar.classList.add("shadow","bg-nav");
    navbar.style.background = "rgba(255,255,255,0.9)";
    navbarBrand.add("brand-color");
  } else {
    navbar.classList.remove("shadow","bg-nav");
    navbar.style = "";
    navbarBrand.remove("brand-color");
  }
}
// Call the function once the page loads to ensure that navbar gets solid if it's in scrolled position
scrollFunction();
// Call the function if user scrolls
window.onscroll = function() {
  scrollFunction()
};

// Cookie consent
{{ if eq site.Params.cookieConsent.switch "on" }}
/* 
 * OSANO Cookie consent initialisation
 *
 * Since there are no script tags, we need to cover { $js_sw.RelPermalink } statement in quotes; had there been script tags, Hugo would've automatically added quotes
 */
window.cookieconsent.initialise({
  {{/*
  OSANO Cookie Consent allows to color the Cookie Consent box via JS. But it works by overriding the values set via CSS, which makes theming difficult.
  Theming in this regard can be found in the /assets/sass/theme.scss file.
  
  "palette": {
    "popup": {
      "background": "{{ default site.Params.theme.nav site.Params.cookieConsent.colors.banner.background }}",
      "text": "{{ default site.Params.theme.antinav site.Params.cookieConsent.colors.banner.text }}"
    },
    "button": {
      "background": "{{ default site.Params.theme.clr2 site.Params.cookieConsent.colors.button.background }}",
      "text": "{{ default site.Params.theme.nav site.Params.cookieConsent.colors.button.text }}"
    }
  },
  
  Config in config.yaml used to be as below:
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
  */}}
  "content": {
    "message": "{{ safeHTMLAttr (replace site.Params.cookieConsent.content.message "\n" "\\n") }}",
    "dismiss": "{{ default `Close` site.Params.cookieConsent.content.dismiss }}",
    "link": "{{ default `Learn More` site.Params.cookieConsent.content.linkText }}",
    "href": "{{ site.Params.cookieConsent.content.linkURL }}",
    "allow": "{{ default `Allow` site.Params.cookieConsent.content.allow }}",
    "deny": "{{ default `Decline` site.Params.cookieConsent.content.deny }}",
    "policy": "{{ default `Cookie Policy` site.Params.cookieConsent.content.policy }}"
  },
  {{/* for "revokable", boolean true/false is required */}}
  "revokable": {{ default true site.Params.cookieConsent.revokable }},
  "type": "{{ site.Params.cookieConsent.type }}",
  
  onInitialise: function (status) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
      // enable cookies
      // https://developers.google.com/analytics/devguides/collection/gtagjs/user-opt-out
      window['{{ printf "%s%s" "ga-disable-" site.GoogleAnalytics }}'] = false;
    }
    if (type == 'opt-out' && !didConsent) {
      // disable cookies
      window['{{ printf "%s%s" "ga-disable-" site.GoogleAnalytics }}'] = true;
    }
  },
  onStatusChange: function(status, chosenBefore) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == 'opt-in' && didConsent) {
      // enable cookies
      window['{{ printf "%s%s" "ga-disable-" site.GoogleAnalytics }}'] = false;
    }
    if (type == 'opt-out' && !didConsent) {
      // disable cookies
      window['{{ printf "%s%s" "ga-disable-" site.GoogleAnalytics }}'] = true;
    }
  },
  onRevokeChoice: function() {
    var type = this.options.type;
    if (type == 'opt-in') {
      // disable cookies
      window['{{ printf "%s%s" "ga-disable-" site.GoogleAnalytics }}'] = true;
    }
    if (type == 'opt-out') {
      // enable cookies
      window['{{ printf "%s%s" "ga-disable-" site.GoogleAnalytics }}'] = false;
    }
  }
});
{{ end }}

// theme JS
{{ if and site.Params.theme.toggle.allowFOIT site.Params.theme.toggle.switch }}
  {{ partialCached "reusables/theme.js" . | safeJS }}
{{ end }}
