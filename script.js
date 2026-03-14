'use strict';

// CUSTOM CURSOR
const cursor = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursor-trail');
let mouseX = 0, mouseY = 0, trailX = 0, trailY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});
(function animateTrail() {
  trailX += (mouseX - trailX) * 0.13;
  trailY += (mouseY - trailY) * 0.13;
  cursorTrail.style.left = trailX + 'px';
  cursorTrail.style.top  = trailY + 'px';
  requestAnimationFrame(animateTrail);
})();
document.querySelectorAll('a, button, .skill-tile, .exp-card, .proj-visual, .stag').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});
if ('ontouchstart' in window) {
  cursor.style.display = 'none';
  cursorTrail.style.display = 'none';
  document.body.style.cursor = 'auto';
}

// HEADER SCROLL
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// MOBILE NAV
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});
document.querySelectorAll('.mob-link, .mob-resume').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});

// SCROLL REVEAL
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

// ACTIVE NAV LINK
const sections = document.querySelectorAll('section[id]');
const navAs    = document.querySelectorAll('.nav-a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) current = s.id; });
  navAs.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
}, { passive: true });

// PARTICLE CANVAS
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  const COUNT = window.innerWidth < 640 ? 40 : 80;
  const CYAN  = '0,229,255';
  const WHITE = '255,255,255';

  class Particle {
    constructor() { this.init(); }
    init() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.r = Math.random() * 1.5 + 0.3;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.alpha = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.8 ? CYAN : WHITE;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
      ctx.fill();
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > W) this.vx *= -1;
      if (this.y < 0 || this.y > H) this.vy *= -1;
    }
  }
  for (let i = 0; i < COUNT; i++) particles.push(new Particle());

  let mx = -9999, my = -9999;
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mx = e.clientX - rect.left; my = e.clientY - rect.top;
  });
  canvas.addEventListener('mouseleave', () => { mx = -9999; my = -9999; });

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${CYAN},${0.06*(1-dist/120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
      const mdx = particles[i].x - mx, mdy = particles[i].y - my;
      const md  = Math.sqrt(mdx*mdx + mdy*mdy);
      if (md < 100) { particles[i].x += (mdx/md)*1.2; particles[i].y += (mdy/md)*1.2; }
    }
    requestAnimationFrame(loop);
  }
  loop();
})();

// COUNTER ANIMATION
function animateCounters() {
  document.querySelectorAll('.m-val[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const start  = performance.now();
    function step(now) {
      const p = Math.min((now - start) / 1800, 1);
      el.textContent = Math.round((1 - Math.pow(1-p, 3)) * target);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}
const heroObs = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) { setTimeout(animateCounters, 800); heroObs.disconnect(); }
}, { threshold: 0.3 });
const heroSection = document.getElementById('hero');
if (heroSection) heroObs.observe(heroSection);

// SKILL TILE MOUSE-TRACKING GLOW
document.querySelectorAll('.skill-tile').forEach(tile => {
  const color = tile.dataset.color || '#00e5ff';
  const glow  = tile.querySelector('.tile-glow');
  if (!glow) return;
  const r = parseInt(color.slice(1,3),16);
  const g = parseInt(color.slice(3,5),16);
  const b = parseInt(color.slice(5,7),16);
  glow.style.background = `radial-gradient(circle at 20% 20%, rgba(${r},${g},${b},0.07), transparent 60%)`;
  tile.addEventListener('mousemove', e => {
    const rect = tile.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
    const y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
    glow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(${r},${g},${b},0.12), transparent 60%)`;
  });
  tile.addEventListener('mouseleave', () => {
    glow.style.background = `radial-gradient(circle at 20% 20%, rgba(${r},${g},${b},0.07), transparent 60%)`;
  });
});

// CONTACT FORM
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn  = document.getElementById('form-submit');
    const text = document.getElementById('submit-text');
    const icon = document.getElementById('submit-icon');
    btn.style.background = '#10b981';
    text.textContent = 'Message Sent!';
    icon.innerHTML = '<path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>';
    setTimeout(() => {
      btn.style.background = '';
      text.textContent = 'Send Message';
      icon.innerHTML = '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>';
      form.reset();
    }, 3500);
  });
}

// SMOOTH SCROLL WITH HEADER OFFSET
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = header ? header.offsetHeight + 12 : 80;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  });
});

// PAGE LOAD FADE
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  requestAnimationFrame(() => requestAnimationFrame(() => { document.body.style.opacity = '1'; }));
});
