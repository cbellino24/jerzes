function initLocationPage() {
  const nav = document.querySelector("[data-location-nav]");
  const hero = document.querySelector("[data-hero]");
  const about = document.querySelector("#location-about");
  if (nav && hero) {
    const header = document.querySelector("[data-header]");
    const onScroll = () => {
      const pinned = window.scrollY > hero.offsetHeight - 8;
      header?.classList.toggle("is-scrolled", pinned);
      nav.classList.toggle("is-fixed", pinned);
      about?.classList.toggle("is-fixed", pinned);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  const carousel = document.querySelector("[data-about-carousel]");
  const dotsWrap = document.querySelector("[data-carousel-dots]");
  if (carousel) {
    const slides = [...carousel.querySelectorAll("img")];
    slides.forEach((_, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", `Slide ${i + 1}`);
      if (i === 0) b.classList.add("is-active");
      b.addEventListener("click", () => go(i));
      dotsWrap?.appendChild(b);
    });
    const dots = dotsWrap ? [...dotsWrap.querySelectorAll("button")] : [];
    let index = 0;
    const go = (next) => {
      slides[index].classList.remove("is-active");
      dots[index]?.classList.remove("is-active");
      index = next;
      slides[index].classList.add("is-active");
      dots[index]?.classList.add("is-active");
    };
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInterval(() => go((index + 1) % slides.length), 3000);
    }
  }

  renderHomeMenuTabs();
  initModals();
}

function itemHTML(item) {
  return `<div class="ss-item">
    <p class="item-title">${item.name}${item.price ? `<span class="item-price">${item.price}</span>` : ""}</p>
    ${item.desc ? `<p class="item-description">${item.desc}</p>` : ""}
  </div>`;
}

function sectionsColumn(sections) {
  return sections
    .map(
      (s) => `<div class="menu-section"><h3>${s.title}</h3>${s.items.map(itemHTML).join("")}</div>`
    )
    .join("");
}

function paneHTML(left, right) {
  return `<div class="container"><div class="menu-cols">
    <div>${sectionsColumn(left)}</div>
    <div>${sectionsColumn(right)}</div>
  </div></div>`;
}

function renderHomeMenuTabs() {
  const root = document.querySelector("[data-home-tab-content]");
  const tabs = document.querySelector("[data-home-tabs]");
  if (!root || !tabs || typeof MENU === "undefined") return;

  const byId = (id) => MENU.find((s) => s.id === id);
  const clip = (section, n) => (section ? { ...section, items: section.items.slice(0, n) } : null);

  const foodLeft = [clip(byId("appetizers"), 9), clip(byId("handhelds"), 8), clip(byId("burgers"), 8)].filter(Boolean);
  const foodRight = [clip(byId("sandwiches"), 6), clip(byId("dinner"), 8), clip(byId("pizza"), 5), clip(byId("desserts"), 5)].filter(Boolean);
  const drinks = byId("drinks");

  root.innerHTML = `
    <div class="tab-pane is-active" data-pane="food">${paneHTML(foodLeft, foodRight)}</div>
    <div class="tab-pane" data-pane="drinks">${
      drinks
        ? paneHTML(
            [drinks],
            [{ title: "On Tap", items: [{ name: "20+ Local & International Beers", desc: "Plus dozens more by the bottle, and a full liquor and wine selection. Ask your server what's pouring." }] }]
          )
        : ""
    }</div>
  `;

  tabs.querySelectorAll("[data-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      tabs.querySelectorAll("[data-tab]").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      root.querySelectorAll("[data-pane]").forEach((pane) => {
        pane.classList.toggle("is-active", pane.dataset.pane === btn.dataset.tab);
      });
    });
  });
}

function initModals() {
  const open = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };
  const closeAll = () => {
    document.querySelectorAll(".modal.is-open").forEach((el) => {
      el.classList.remove("is-open");
    });
    if (!document.body.classList.contains("nav-open")) document.body.style.overflow = "";
  };

  document.querySelectorAll("[data-modal]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      open(btn.dataset.modal);
    });
  });
  document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", closeAll);
  });
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeAll();
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });
}
