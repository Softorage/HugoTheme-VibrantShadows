$(function() {
/* Transition effect for navbar */
  $(window).scroll(function() {
    /* checks if window is scrolled more than 30px, adds/removes bg-white and shadow class */
    if ($(this).scrollTop() > 30) {
      $(".navbar").addClass("shadow bg-nav").attr("style", "background: rgba(255,255,255,0.9);");
      $(".navbar .brand").addClass("brand-color");
    } else {
      $(".navbar").removeClass("shadow bg-nav").removeAttr("style");
      $(".navbar .brand").removeClass("brand-color");
    }
  });
});

{{ if eq site.Params.cookieConsent.switch "on" }}
/* 
 *OSANO Cookie consent initialisation
 *
 * Since there are no script tags, we need to cover { $js_sw.RelPermalink } statement in quotes; had there been script tags, Hugo would've automatically added quotes
 */
window.cookieconsent.initialise({
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
  "content": {
    "message": "{{ site.Params.cookieConsent.content.message | safeHTMLAttr }}",
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
