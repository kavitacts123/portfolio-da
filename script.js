console.log("Portfolio Loaded 🚀");

// Smooth scroll fix for navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

console.log("Pro Portfolio Loaded 🚀");

AOS.init({
  duration: 1000,
  once: true
});