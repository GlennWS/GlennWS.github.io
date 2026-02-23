// ============================================================
//  Glenn Wilkie-Sullivan — Portfolio Scripts
// ============================================================

// ── Smooth scroll with fixed-nav offset ─────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── Scroll-triggered fade-in animations ─────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document
  .querySelectorAll('.project-card, .sideproject-card, .skill-group, .timeline-item, .about-stat, .cert-item')
  .forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

// ── Contact form handler (demo) ──────────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  const status = document.getElementById('form-status');
  status.textContent = "✓ Message received — I'll be in touch soon!";
  status.style.display = 'block';
  e.target.reset();
  setTimeout(() => { status.style.display = 'none'; }, 5000);
}
