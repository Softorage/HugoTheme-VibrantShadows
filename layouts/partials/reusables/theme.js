{{/*
used in /assets/js/custom.js

<!-- Set Dark as default theme
If
1. both the themes have `default` to `true` or `false` or not set,  or
2. only Dark theme has `default` set to `true`
then Dark theme is taken as default

Note:
`not` is an undocumented function that basically reverses the value
Example: # prints hello
{{ if not false }}
  hello
{{ end }}
 -->*/}}

{{ $cssTheme := "dark" }}

{{ if site.Params.theme.light.default }}
  {{- $cssTheme = "light" }}
{{ end }}

// Based on https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/

// Select the button
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleCheckbox = document.querySelector("#theme_toggle");
// Check for dark mode preference at the OS level
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
// Get the user's theme preference from local storage, if it's available
let currentTheme = localStorage.getItem("theme");
// 
let bodyClass = document.body.classList;

// User's theme preference from local storage has highest priority,
// then system preference set by user at OS level,
// then theme set by website administrator (you) in $cssTheme

// This is the simple version of the code that may be slightly inefficient but clear and easy to understand 
if (currentTheme === "dark") {
  darkTheme();
} else if (currentTheme === "light") {
  lightTheme();
} else if (prefersDarkScheme.matches) {
  darkTheme();
} else if ("{{ $cssTheme }}" === "dark") {
  darkTheme();
} else if ("{{ $cssTheme }}" === "light") {
  lightTheme();
}
// function definitions
const darkTheme = function () {
  bodyClass.remove("light"); // remove class 'light'
  bodyClass.add("dark"); // add class 'dark'
  themeToggleCheckbox.checked = true;
}
const lightTheme = function () {
  bodyClass.remove("dark"); // remove class 'dark'
  bodyClass.add("light"); // add class 'light'
  themeToggleCheckbox.checked = false;
}

/*
// below code doesn't work as expected. toggle shows dark mode when light mode is set and vice versa.

// We don't want to toggle the class of body tag (dark or light), if the theme as per localStorage and theme as per default CSS link tag matches
// since we are checking for system preference for dark theme in the same if conditional that checks for theme info stored in localStorage, it is likely to be effecient. As such no separate media query (prefers-color-scheme) has been specified in CSS.
// If the user's preference in localStorage is dark and default theme isn't dark, or
// If user has set system preference to dark and default theme is set to light and user has no preference in localStorage (if user has a preference stored in localStorage, then such preference shall override the system preference)
if ((currentTheme == "dark" && "{{ $cssTheme }}" != "dark") || (!currentTheme && prefersDarkScheme.matches && "{{ $cssTheme }}" == "light")) {
  // This if conditional executes only if the body tag has class 'light'. so we need to toggle class 'light' to remove it and class 'dark' to add it
  bodyClass.remove("light"); // remove class 'light'
  bodyClass.add("dark"); // add class 'dark'
  themeToggleCheckbox.checked = true;
// Otherwise, if the user's preference in localStorage is light and default theme isn't light
} else if (currentTheme == "light" && "{{ $cssTheme }}" != "light") {
  // This if conditional executes only if the body tag has class 'dark'. So we need to toggle class 'dark' to remove it and class 'light' to add it
  bodyClass.remove("dark"); // remove class 'dark'
  bodyClass.add("light"); // add class 'light'
  themeToggleCheckbox.checked = false;
}
*/

// Listen for a click on the button 
themeToggle.addEventListener("click", function() {
  bodyClass.toggle("light");
  bodyClass.toggle("dark"); 
  // Update the currentTheme variable to save the new theme in localStorage
  if (currentTheme === "dark") {
    currentTheme = "light";
    //themeToggleCheckbox.checked = false;
  } else {
    currentTheme = "dark";
    //themeToggleCheckbox.checked = true;
  }
  // Finally, let's save the current preference to localStorage to keep using it even on a different page
  localStorage.setItem("theme", currentTheme);
});
