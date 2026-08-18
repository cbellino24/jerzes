document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "home";
  mountChrome(page);
  if (page === "home") {
    mountHeroSlideshow(document.querySelector("[data-hero-media]"));
    initLocationPage();
  }
  if (page === "menus") renderMenus();
  initMotion();
});
