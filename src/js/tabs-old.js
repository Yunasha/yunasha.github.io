document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[tab-button-id]");
  const contents = document.querySelectorAll("[tab-content-id]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("tab-button-id");

      // remove active-tab and hide all
      buttons.forEach((b) => b.classList.remove("active-tab"));
      contents.forEach((c) => (c.classList.add("gone")));

      // activate the selected one
      button.classList.add("active-tab");
      const target = document.querySelector(`[tab-content-id="${id}"]`);
      if (target) target.classList.remove("gone");
    });
  });
});
