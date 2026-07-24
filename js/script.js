let darkmode = localStorage.getItem("darkmode");
const themeToggle = document.querySelector(".btn");

const enableDarkMode = () => {
  document.body.classList.add("dark-theme");
  localStorage.setItem("darkmode", "active");

  themeToggle.querySelector("span:nth-child(1)").classList.remove("active");
  themeToggle.querySelector("span:nth-child(2)").classList.add("active");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-theme");
  localStorage.setItem("darkmode", null);

  themeToggle.querySelector("span:nth-child(1)").classList.add("active");
  themeToggle.querySelector("span:nth-child(2)").classList.remove("active");
};

if (darkmode === "active") enableDarkMode();

themeToggle.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});
