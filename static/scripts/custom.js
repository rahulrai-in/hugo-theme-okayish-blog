"use strict";

const toggle = document.querySelector("dark-mode-toggle");
const body = document.body;

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

let switchMode = (isDark) => {
  //   Light up share icons that requires additional class except search box that is always white.
  let icons = document.querySelectorAll(
    "i[class^='p-icon--']:not([data-toggle-behavior='invariant'])"
  );
  for (let icon of Array.from(icons)) {
    if (isDark) {
      icon.classList.add("is-light");
    } else {
      icon.classList.remove("is-light");
    }
  }
};

let darkMode = (shouldTransition) => {
  if (shouldTransition) {
    trans();
  }
  switchMode(true);
  document.documentElement.setAttribute("data-theme", "dark");
};

let lightMode = (shouldTransition) => {
  if (shouldTransition) {
    trans();
  }
  switchMode(false);
  document.documentElement.setAttribute("data-theme", "light");
};

let isStorageAvailable = () => {
  // Default to light mode in in-cognito instances because localstorage is not available
  try {
    let x = "__storage_test__";
    localStorage.setItem(x, x);
    localStorage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
};

if (isStorageAvailable()) {
  toggle.mode === "dark" ? darkMode(false) : lightMode(false);
  toggle.addEventListener("colorschemechange", () => {
    toggle.mode === "dark" ? darkMode(true) : lightMode(true);
  });
} else {
  toggle.remove();
}
