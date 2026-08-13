let darkmode = localStorage.getItem("darkmode");
const themeToggle = document.querySelector(".btn");

const enableDarkMode = () => {
  document.body.classList.add("dark-theme");
  localStorage.setItem("darkmode", "active");

  themeToggle
    .querySelector("span:nth-child(1)")
    .classList.toggle("active", false);
  themeToggle
    .querySelector("span:nth-child(2)")
    .classList.toggle("active", true);
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-theme");
  localStorage.removeItem("darkmode");

  themeToggle
    .querySelector("span:nth-child(1)")
    .classList.toggle("active", true);
  themeToggle
    .querySelector("span:nth-child(2)")
    .classList.toggle("active", false);
};

if (darkmode === "active") enableDarkMode();
else disableDarkMode();

themeToggle.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});
