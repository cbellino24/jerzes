function renderMenus() {
  const nav = document.querySelector("[data-menu-nav]");
  const root = document.querySelector("[data-menu-root]");
  if (!nav || !root || typeof MENU === "undefined") return;

  nav.innerHTML = MENU.map(
    (section, i) =>
      `<button type="button" data-jump="${section.id}" class="${i === 0 ? "is-active" : ""}">${section.title}</button>`
  ).join("");

  root.innerHTML = MENU.map((section) => {
    const mid = Math.ceil(section.items.length / 2);
    const left = section.items.slice(0, mid);
    const right = section.items.slice(mid);
    const item = (entry) => `
      <article class="menu-item-row">
        <h3>${entry.name}</h3>
        <div class="price-block">
          ${entry.price || ""}
          ${entry.tag ? `<small>${entry.tag}</small>` : ""}
        </div>
        ${entry.desc ? `<p>${entry.desc}</p>` : ""}
        ${entry.extra ? `<p>${entry.extra}</p>` : ""}
      </article>`;
    return `
      <section class="page-menu-section" id="${section.id}">
        <div class="container">
          <div class="menu-section">
            <h3>${section.title}</h3>
            ${section.note ? `<p class="note">${section.note}</p>` : ""}
            <div class="menu-list">
              <div>${left.map(item).join("")}</div>
              <div>${right.map(item).join("")}</div>
            </div>
          </div>
        </div>
      </section>
    `;
  }).join("");

  const buttons = [...nav.querySelectorAll("[data-jump]")];
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.jump);
      const top = target.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  const sections = MENU.map((s) => document.getElementById(s.id));
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        buttons.forEach((btn) =>
          btn.classList.toggle("is-active", btn.dataset.jump === entry.target.id)
        );
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((section) => spy.observe(section));
}
