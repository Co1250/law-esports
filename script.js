document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll-triggered entrance animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Triggers when 15% of the element enters the viewport
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active'); // Removes active state when scrolled away
      }
    });
  }, observerOptions);

  // Observe all elements with the 'reveal' class or the badge pill
  const revealElements = document.querySelectorAll('.reveal, .subtitle-pill');
  revealElements.forEach(el => revealObserver.observe(el));

  // Active Navbar Highlight on Scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
});
