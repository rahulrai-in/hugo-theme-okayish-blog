"use strict";

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

let switchMode = (isDark) => {
  //   Special case for share icon that requires additional class.
  let icons = document.querySelectorAll("i[class^='p-icon--']");
  for (let icon of Array.from(icons)) {
    if (isDark) {
      icon.classList.add("is-light");
    } else {
      icon.classList.remove("is-light");
    }
  }
};

window.onload = function () {
  let savedMode = localStorage.getItem("color-scheme") || "light";
  document.documentElement.setAttribute("data-theme", savedMode);
  var checkbox = document.querySelector("input[name=theme]");
  checkbox.checked = savedMode !== "light";
  switchMode(savedMode !== "light");
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      trans();
      switchMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("color-scheme", "dark");
    } else {
      trans();
      switchMode(false);
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("color-scheme", "light");
    }
  });
};
