// script.js

// Add any custom JavaScript here

document.addEventListener("DOMContentLoaded", () => {
  console.log("Smoking Cat Meme Coin website loaded!");
});

document.addEventListener("DOMContentLoaded", function () {
  const contents = document.querySelectorAll(".contens");

  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing after it's visible
      }
    });
  }, observerOptions);

  contents.forEach((content) => {
    observer.observe(content);
  });
});
