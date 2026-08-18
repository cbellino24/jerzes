/**
 * Hero media layer.
 * Swap mountHeroSlideshow() for mountHeroVideo() later without touching
 * overlay, navigation, headline, or CTAs.
 */
const HERO_SLIDES = [
  {
    src: "assets/images/hero-interior.webp",
    srcset: "assets/images/hero-interior-sm.webp 900w, assets/images/hero-interior.webp 1800w",
    alt: "The dining room at Jerzes with screens overhead"
  },
  {
    src: "assets/images/hero-table.webp",
    srcset: "assets/images/hero-table-sm.webp 900w, assets/images/hero-table.webp 1800w",
    alt: "Wings, a branded pint, and a burger on the table at Jerzes"
  },
  {
    src: "assets/images/hero-lounge.webp",
    srcset: "assets/images/hero-lounge-sm.webp 900w, assets/images/hero-lounge.webp 1800w",
    alt: "Illuminated lounge booths at Jerzes"
  },
  {
    src: "assets/images/hero-spread.webp",
    srcset: "assets/images/hero-spread-sm.webp 900w, assets/images/hero-spread.webp 1800w",
    alt: "A spread of food and drinks at Jerzes"
  },
  {
    src: "assets/images/hero-keno.webp",
    srcset: "assets/images/hero-keno-sm.webp 900w, assets/images/hero-keno.webp 1800w",
    alt: "The Players Keno counter at Jerzes"
  }
];

const SLIDE_MS = 6500;

function mountHeroSlideshow(root) {
  if (!root) return;

  const slideshow = document.createElement("div");
  slideshow.className = "hero-slideshow";
  slideshow.setAttribute("data-slideshow", "");

  slideshow.innerHTML = HERO_SLIDES.map(
    (slide, i) => `
      <div class="hero-slide${i === 0 ? " is-active" : ""}" data-slide>
        <img
          src="${slide.src}"
          srcset="${slide.srcset}"
          sizes="100vw"
          alt="${slide.alt}"
          ${i === 0 ? `fetchpriority="high"` : `loading="lazy"`}
        >
      </div>
    `
  ).join("");

  root.appendChild(slideshow);

  const progress = document.querySelector("[data-hero-progress]");
  if (progress) {
    progress.innerHTML = HERO_SLIDES.map(
      (_, i) => `<span class="${i === 0 ? "is-active" : ""}"><i></i></span>`
    ).join("");
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const slides = [...slideshow.querySelectorAll("[data-slide]")];
  const ticks = progress ? [...progress.querySelectorAll("span")] : [];
  let index = 0;

  const go = (next) => {
    slides[index].classList.remove("is-active");
    ticks[index]?.classList.remove("is-active");
    index = next;
    const current = slides[index];
    const img = current.querySelector("img");
    if (img) {
      img.style.animation = "none";
      void img.offsetWidth;
      img.style.animation = "";
    }
    current.classList.add("is-active");
    ticks[index]?.classList.add("is-active");
  };

  setInterval(() => go((index + 1) % slides.length), SLIDE_MS);
}

function mountHeroVideo(root, src) {
  if (!root) return;
  root.innerHTML = `
    <div class="hero-video">
      <video autoplay muted loop playsinline poster="assets/images/hero-interior.webp">
        <source src="${src}" type="video/mp4">
      </video>
    </div>
  `;
}

window.JerzesHero = { mountHeroSlideshow, mountHeroVideo };
