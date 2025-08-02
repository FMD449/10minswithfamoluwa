// main.js

// Smooth scrolling for internal nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Fade-in effect when sections appear in viewport
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Mobile nav toggle (if you add it later)
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-bar');

if (toggleBtn && navLinks) {
  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Log interactions (for future tracking or debugging)
document.querySelectorAll('audio').forEach(audio => {
  audio.addEventListener('play', () => {
    console.log('Episode started playing.');
  });
});
