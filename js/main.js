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
