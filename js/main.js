/* ============================================
   SCROLL-TRIGGERED FADE-IN ANIMATIONS
   ============================================ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // stop watching once animated
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ============================================
   MOBILE NAV TOGGLE
   ============================================ */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ============================================
   GALLERY FILTER
   ============================================ */
const filterBtns = document.querySelectorAll('.filter-btn');
const albumCards = document.querySelectorAll('.album-card');
const galleryEmpty = document.getElementById('gallery-empty');

if (filterBtns.length && albumCards.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      let visibleCount = 0;

      albumCards.forEach(card => {
        const match = filter === 'all' || card.dataset.type === filter;
        card.hidden = !match;
        if (match) visibleCount++;
      });

      if (galleryEmpty) galleryEmpty.hidden = visibleCount > 0;
    });
  });
}

/* ============================================
   GALLERY LIGHTBOX
   ============================================ */
(function () {
  // Build overlay DOM
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Project photo viewer');
  overlay.innerHTML = `
    <button class="lightbox-btn lightbox-close" aria-label="Close">
      <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <div class="lightbox-inner">
      <div class="lightbox-img-wrap">
        <button class="lightbox-btn lightbox-prev" aria-label="Previous photo">
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <img src="" alt="">
        <button class="lightbox-btn lightbox-next" aria-label="Next photo">
          <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
      <div class="lightbox-footer">
        <span class="lightbox-title"></span>
        <span class="lightbox-counter"></span>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const img        = overlay.querySelector('.lightbox-img-wrap img');
  const titleEl    = overlay.querySelector('.lightbox-title');
  const counterEl  = overlay.querySelector('.lightbox-counter');
  const btnClose   = overlay.querySelector('.lightbox-close');
  const btnPrev    = overlay.querySelector('.lightbox-prev');
  const btnNext    = overlay.querySelector('.lightbox-next');

  let images = [];
  let current = 0;

  function render() {
    img.src = images[current];
    img.alt = titleEl.textContent + ' — photo ' + (current + 1);
    counterEl.textContent = images.length > 1 ? (current + 1) + ' / ' + images.length : '';
    btnPrev.style.visibility = images.length > 1 ? 'visible' : 'hidden';
    btnNext.style.visibility = images.length > 1 ? 'visible' : 'hidden';
  }

  function show(imgList, title, startIndex) {
    images  = imgList;
    current = startIndex || 0;
    titleEl.textContent = title;
    render();
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    btnClose.focus();
  }

  function hide() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  function prev() { current = (current - 1 + images.length) % images.length; render(); }
  function next() { current = (current + 1) % images.length; render(); }

  let lastFocused = null;

  // Open on card click / keyboard
  document.querySelectorAll('.album-card').forEach(card => {
    function openCard() {
      const raw = card.dataset.images;
      if (!raw) return;
      lastFocused = card;
      show(raw.split(',').map(s => s.trim()), card.dataset.title || '', 0);
    }
    card.addEventListener('click', openCard);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCard(); }
    });
  });

  btnClose.addEventListener('click', hide);
  btnPrev.addEventListener('click', (e) => { e.stopPropagation(); prev(); });
  btnNext.addEventListener('click', (e) => { e.stopPropagation(); next(); });

  // Close on backdrop click (not on inner content)
  overlay.addEventListener('click', (e) => { if (e.target === overlay) hide(); });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape')     hide();
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
  });
}());
