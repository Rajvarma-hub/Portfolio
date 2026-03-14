/* ─────────────────────────────────────────────
   THIRTHALA RAJKUMAR — PORTFOLIO JS
   Clean, minimal, production-ready
───────────────────────────────────────────── */

(function () {
  'use strict';

  // ── NAV: scroll state ──────────────────────
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── NAV: mobile burger ─────────────────────
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');

  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    burger.classList.toggle('active', open);
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // ── SCROLL REVEAL ──────────────────────────
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger siblings in the same parent
          const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal:not(.visible)'));
          const idx = siblings.indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, idx * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(el => observer.observe(el));

  // ── CONTACT FORM ───────────────────────────
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name    = form.name.value.trim();
      const email   = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        showNote('Please fill in all fields.', 'error');
        return;
      }

      if (!isValidEmail(email)) {
        showNote('Please enter a valid email address.', 'error');
        return;
      }

      // Compose mailto link
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:rajkumarthirthala@gmail.com?subject=${subject}&body=${body}`;

      showNote('Opening your email client… ✓', 'success');
      form.reset();
    });
  }

  function showNote(msg, type) {
    note.textContent = msg;
    note.style.color = type === 'success' ? 'var(--accent)' : '#ff6b6b';
    setTimeout(() => { note.textContent = ''; }, 5000);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // ── ACTIVE NAV LINK (scroll spy) ───────────
  const sections = document.querySelectorAll('section[id]');

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.querySelectorAll('a').forEach(a => {
            a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--accent)' : '';
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(sec => spyObserver.observe(sec));

  // ── SKILL TAG: subtle hover text swap ──────
  document.querySelectorAll('.skill-group').forEach(group => {
    group.addEventListener('mouseenter', () => {
      group.style.setProperty('--accent', '#c8ff00');
    });
  });

  // ── SMOOTH HERO PARALLAX (subtle) ──────────
  const hero = document.querySelector('.hero__grid-lines');
  if (hero) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      hero.style.transform = `translateY(${y * 0.15}px)`;
    }, { passive: true });
  }

})();
