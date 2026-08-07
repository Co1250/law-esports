document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer configuration for scroll triggers
  const observerOptions = {
    threshold: 0.15, // Triggers when 15% of the element is in the viewport
    rootMargin: '0px 0px -50px 0px' // Offset trigger slightly before scrolling hits the bottom
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve after animating once to prevent repeated animations on scroll up/down
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Automatically targets all elements with class="reveal"
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => revealObserver.observe(el));
});