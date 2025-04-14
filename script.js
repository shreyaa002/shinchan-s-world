// script.js

// Theme toggle functionality
const toggleBtn = document.getElementById('theme-toggle');
let isDarkMode = false;

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  isDarkMode = !isDarkMode;

  // Optional: change button icon/text
  toggleBtn.innerHTML = isDarkMode ? '☀' : '🌙';
});

// Smooth scroll for anchor links (if used in nav)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Bounce animation on scroll for .character sections (just for fun!)
const characters = document.querySelectorAll('.character');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('bounce');
    } else {
      entry.target.classList.remove('bounce');
    }
  });
}, {
  threshold: 0.5
});

characters.forEach(char => observer.observe(char));