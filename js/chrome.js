const Icons = {
  arrow: `<svg class="icon icon-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  close: `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
  external: `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7H6v11h11v-3M11 13l8-8M14 5h5v5"/></svg>`
};

const NAV = [
  { href: "about.html", label: "About", id: "about" },
  { href: "menus.html", label: "Menus", id: "menus" },
  { href: "https://kenocloud.com/players/", label: "Keno", id: "keno", external: true },
  { href: "https://maps.google.com/?q=501+Olson+Dr+%23100+Papillion+NE+68046", label: "Directions", id: "directions", external: true }
];

const SITE = {
  name: "Jerzes",
  tag: "Sports Bar & Keno",
  address: "501 Olson Dr #100",
  city: "Papillion, NE 68046",
  phone: "(402) 934-4394",
  tel: "tel:+14029344394",
  maps: "https://maps.google.com/?q=501+Olson+Dr+%23100+Papillion+NE+68046",
  email: "mailto:jerzes.sportsbar@gmail.com",
  keno: "https://kenocloud.com/players/"
};

function headerHTML(page) {
  const links = NAV.map((item) => {
    const extra = item.external ? ` target="_blank" rel="noopener"` : "";
    const active = item.id === page ? " is-active" : "";
    return `<a href="${item.href}" class="${active.trim()}"${extra}>${item.label}</a>`;
  }).join("");

  return `
    <header class="site-header${page === "home" ? " is-over-hero" : ""}" data-header>
      <div class="header__bar">
        <a class="logo" href="index.html" aria-label="Jerzes home">
          <img src="assets/brand/logo-mark.png" alt="Jerzes">
        </a>
        <span class="header__location">Papillion, NE</span>
        <button class="menu-toggle" type="button" aria-label="Open menu" data-nav-toggle>
          <span></span>
        </button>
      </div>
      <nav class="nav-mobile" data-mobile-nav aria-label="Menu">
        ${links}
      </nav>
    </header>
  `;
}

function footerHTML() {
  return `
    <footer class="site-footer">
      <div class="footer-columns">
        <div>
          <img src="assets/brand/logo-on-dark.png" alt="Jerzes Sports Bar & Keno">
        </div>
        <div>
          <h4>Short Cuts</h4>
          <a href="about.html">About</a>
          <a href="menus.html">Menus</a>
          <a href="${SITE.keno}" target="_blank" rel="noopener">Players Club</a>
          <a href="${SITE.maps}" target="_blank" rel="noopener">Directions</a>
        </div>
        <div>
          <h4>Visit</h4>
          <a href="${SITE.maps}" target="_blank" rel="noopener">${SITE.address}<br>${SITE.city}</a>
          <a href="${SITE.tel}">${SITE.phone}</a>
          <a href="${SITE.email}">jerzes.sportsbar@gmail.com</a>
        </div>
      </div>
      <div class="footer-copyright">
        &copy; ${new Date().getFullYear()} Jerzes Sports Bar, Grill &amp; Keno &middot; Now hiring &middot; call ${SITE.phone}
      </div>
    </footer>
  `;
}

function mountChrome(page) {
  const headerMount = document.querySelector("[data-mount-header]");
  const footerMount = document.querySelector("[data-mount-footer]");
  if (headerMount) headerMount.outerHTML = headerHTML(page);
  if (footerMount) footerMount.outerHTML = footerHTML();

  const header = document.querySelector("[data-header]");
  if (header && !header.classList.contains("is-over-hero")) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  const toggle = document.querySelector("[data-nav-toggle]");
  toggle?.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
  });
}
