// ============================================================
// Maisy Holehouse — Portfolio
// Shared header/footer so nav only needs editing in one place.
// Each page sets <body data-page="home|projects|research|apparel|
// video|audio|education|contact"> so the right nav link lights up.
// ============================================================

// Set your real LinkedIn URL once here — it fills in the footer link
// on every page plus the button on education.html automatically.
const LINKEDIN_URL = "https://www.linkedin.com/in/amelia-holehouse/";

const NAV_LINKS = [
  { href: "index.html", label: "Home", key: "home" },
  {
    href: "projects.html", label: "Projects", key: "projects",
    children: [
      { href: "research.html", label: "Research", key: "research" },
      { href: "apparel.html", label: "Apparel", key: "apparel" },
      { href: "video.html", label: "Video", key: "video" },
      { href: "audio.html", label: "Audio / DJ", key: "audio" },
    ],
  },
  { href: "education.html", label: "Education", key: "education" },
  { href: "contact.html", label: "Contact", key: "contact" },
];

function currentKey() {
  return document.body.getAttribute("data-page") || "home";
}

function brandMark() {
  return `
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="20" cy="20" r="3.2" stroke="#d98a4e" stroke-width="1.2"/>
    <circle cx="6" cy="8" r="2" stroke="#6fa9c9" stroke-width="1.2"/>
    <circle cx="34" cy="8" r="2" stroke="#93a87e" stroke-width="1.2"/>
    <circle cx="6" cy="32" r="2" stroke="#93a87e" stroke-width="1.2"/>
    <circle cx="34" cy="32" r="2" stroke="#6fa9c9" stroke-width="1.2"/>
    <path d="M17.5 18L8 9M22.5 18L32 9M17.5 22L8 31M22.5 22L32 31" stroke="#c4dbe0" stroke-width="1" stroke-opacity="0.6"/>
  </svg>`;
}

function renderHeader() {
  const active = currentKey();
  const links = NAV_LINKS.map((link) => {
    const isParentActive = link.key === active || (link.children && link.children.some(c => c.key === active));
    if (link.children) {
      const childItems = link.children.map(c => `
        <li><a href="${c.href}" ${c.key === active ? 'aria-current="page"' : ""}>${c.label}</a></li>
      `).join("");
      return `
      <li class="nav-item has-dropdown">
        <a href="${link.href}" ${isParentActive ? 'aria-current="page"' : ""}>${link.label}</a>
        <ul class="dropdown">
          <li class="tick">Projects /</li>
          ${childItems}
        </ul>
      </li>`;
    }
    return `<li class="nav-item"><a href="${link.href}" ${link.key === active ? 'aria-current="page"' : ""}>${link.label}</a></li>`;
  }).join("");

  return `
  <header class="site-header">
    <nav class="nav">
      <a class="brand" href="index.html">
        ${brandMark()}
        <span>Maisy Holehouse<small>Engineer &amp; Maker</small></span>
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="M0 1H18M0 6H18M0 11H18" stroke="currentColor" stroke-width="1.4"/></svg>
      </button>
      <ul class="nav-links" id="navLinks">
        ${links}
      </ul>
    </nav>
  </header>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-top">
        <p class="footer-tagline">Designing solutions with a chemist's rigor and a maker's instinct.</p>
        <ul class="footer-links">
          <li><a href="mailto:hello@maisy.studio">hello@maisy.studio</a></li>
          <li><a href="https://www.instagram.com/maisystravel/" target="_blank" rel="noopener">Instagram</a></li>
          <li><a href="https://on.soundcloud.com/Tl2iBa7TFvgOg7NouH" target="_blank" rel="noopener">SoundCloud</a></li>
          <li><a href="#" id="linkedinLink" target="_blank" rel="noopener">LinkedIn</a></li>
        </ul>
      </div>
      <div class="footer-bottom">
        <span>Sustainable materials · apparel · movement</span>
        <span>&copy; 2026 Maisy Holehouse — built for material futures &amp; thoughtful product innovation.</span>
      </div>
    </div>
  </footer>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");
  if (headerMount) headerMount.innerHTML = renderHeader();
  if (footerMount) footerMount.innerHTML = renderFooter();

  const footerLinkedin = document.getElementById("linkedinLink");
  if (footerLinkedin) footerLinkedin.href = LINKEDIN_URL;
  const eduLinkedin = document.getElementById("linkedinCta");
  if (eduLinkedin) eduLinkedin.href = LINKEDIN_URL;

  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
});
