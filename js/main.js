document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  setActiveNav();
  initHamburger();
  initContactLinks();
  initAbstractToggles();
  initFooterYear();
});

function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  setTimeout(() => { loader.style.display = 'none'; }, 1200);
}

function setActiveNav() {
  const filename = location.pathname.split('/').pop() || 'index.html';
  const normalised = filename === '' ? 'index.html' : filename;
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(el => {
    if (el.dataset.page === normalised) el.classList.add('active');
  });
}

function initHamburger() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-nav');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });
}

function initContactLinks() {
  document.querySelectorAll('.contact-link').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById('contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        location.href = 'index.html#contact';
      }
    });
  });
}

function initAbstractToggles() {
  document.querySelectorAll('.abstract-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.research-pub-card');
      const abstract = card.querySelector('.research-pub-abstract');
      const chevron = btn.querySelector('.chevron-icon');
      const open = abstract.classList.toggle('open');
      if (chevron) chevron.classList.toggle('open', open);
    });
  });
}

function initFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}
