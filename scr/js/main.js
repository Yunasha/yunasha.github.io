document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tab-container").forEach((container) => {
    container.addEventListener("click", () => {
      // Remove the 'selected' class from all tab info text titles
      document.querySelectorAll(".tab-info-text-title").forEach((text) => {
        text.classList.remove("selected");
        text.style.display = "none";
      });

      // Remove the 'selected' class from all tab info text containers
      document
        .querySelectorAll(".tab-info-text-container")
        .forEach((container) => {
          container.classList.remove("selected");
          container.style.display = "none";
        });

      // Show the corresponding tab info text and add the 'selected' class
      const targetId = container.dataset.target;
      const targetText = document.getElementById(targetId);
      const targetContainer = document.getElementById(`${targetId}-container`);
      if (targetText || targetContainer) {
        targetText.style.display = "block";
        targetText.classList.add("selected");
        targetContainer.style.display = "block";
        targetContainer.classList.add("selected");
      }
    });
  });
});
