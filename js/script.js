const themeToggle = document.querySelector(".btn");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  themeToggle.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggle.querySelector("span:nth-child(2)").classList.toggle("active");
});
