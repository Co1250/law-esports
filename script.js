document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -20px 0px",
    threshold: 0.05
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => {
    // Immediate fallback if element is already inside the screen viewport on load
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add("active");
    }
    revealOnScroll.observe(el);
  });
});
