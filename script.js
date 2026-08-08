document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll logic
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  const trackedSections = document.querySelectorAll("section[id], div[id]");
  const navbarLinks = document.querySelectorAll(".nav-links a");

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (targetId === "#" || targetId === "") return;

      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        event.preventDefault();
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Active link highlight on scroll
  window.addEventListener("scroll", () => {
    let currentActiveId = "";
    const scrollPosition = window.scrollY + 120;

    trackedSections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentActiveId = section.getAttribute("id");
      }
    });

    navbarLinks.forEach((navLink) => {
      navLink.classList.remove("active");
      if (navLink.getAttribute("href") === `#${currentActiveId}`) {
        navLink.classList.add("active");
      }
    });
  });

  // IntersectionObserver for Reveal Animations on Scroll
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // Reveal once
        }
      });
    },
    {
      root: null,
      threshold: 0.15, // Trigger when 15% of element enters viewport
      rootMargin: "0px 0px -50px 0px",
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
});