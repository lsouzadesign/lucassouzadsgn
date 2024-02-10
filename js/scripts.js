document.addEventListener("DOMContentLoaded", function () {
  const progressBarElements = document.querySelectorAll(".progress-bar");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  progressBarElements.forEach((bar) => {
    observer.observe(bar);
  });

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      const bar = entry.target.querySelector(".bar");
      const percentage = entry.target.getAttribute("data-percentage");
      const delay = parseFloat(entry.target.getAttribute("data-delay")) || 0;

      if (entry.isIntersecting) {
        setTimeout(() => {
          bar.style.width = percentage + "%";
        }, delay * 1000);

        observer.unobserve(entry.target);
      } else {
        // Se a barra não está visível, redefine para 0%
        bar.style.width = "0";
      }
    });
  }
});
