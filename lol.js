gsap.registerPlugin(ScrollTrigger);

// Navigation scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  if (window.scrollY > 50) {
    nav.style.background = "rgba(0, 0, 0, 0.9)";
  } else {
    nav.style.background = "rgba(0, 0, 0, 0.8)";
  }
});

// Hero animations
gsap.from(".hero-content", {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power3.out",
});

// Portfolio animations
gsap.from(".portfolio-item", {
  scrollTrigger: {
    trigger: ".portfolio",
    start: "top center",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2,
});

// Pricing card animations
gsap.from(".pricing-card", {
  scrollTrigger: {
    trigger: ".pricing",
    start: "top center",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
  stagger: 0.2,
});

// Process animations
gsap.from(".process-item", {
  scrollTrigger: {
    trigger: ".process",
    start: "top center",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
  stagger: 0.2,
});

// Testimonial animations
gsap.from(".testimonial-card", {
  scrollTrigger: {
    trigger: ".testimonials",
    start: "top center",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
  stagger: 0.2,
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Portfolio filters
const filterButtons = document.querySelectorAll(".filter-button");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    // Add filter functionality here
  });
});

// Form submission
document
  .querySelector(".contact-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    // Add form submission logic here
  });
