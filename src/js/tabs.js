document.addEventListener("DOMContentLoaded", () => {
  // EVENT DELEGATION FOR ALL TABS
  document.addEventListener("click", (ev) => {
    const button = ev.target.closest("[tab-button-id]");
    if (!button) return;

    const id = button.getAttribute("tab-button-id");
    const allowClose = button.getAttribute("tab-allow-close") === "true";
    const prefix = id.split("-")[0] + "-";

    // dynamically look up buttons/contents (fresh DOM!)
    const allButtons = document.querySelectorAll(
      `[tab-button-id^="${prefix}"]`
    );
    const allContents = document.querySelectorAll(
      `[tab-content-id^="${prefix}"]`
    );
    const target = document.querySelector(`[tab-content-id="${id}"]`);

    if (!target) return;

    const isActive = button.classList.contains("active-tab");

    // closable: clicking again closes
    if (isActive && allowClose) {
      button.classList.remove("active-tab");
      target.classList.add("gone");
      return;
    }

    // normal activate
    allButtons.forEach((b) => b.classList.remove("active-tab"));
    allContents.forEach((c) => c.classList.add("gone"));

    button.classList.add("active-tab");
    target.classList.remove("gone");
  });

  // REACT TO DISABLING CORRECTLY USING EVENT DELEGATION
  const observer = new MutationObserver(() => {
    document.querySelectorAll("[tab-button-id][disabled]").forEach((btn) => {
      const id = btn.getAttribute("tab-button-id");
      const content = document.querySelector(`[tab-content-id="${id}"]`);
      btn.classList.remove("active-tab");
      if (content) content.classList.add("gone");
    });
  });

  observer.observe(document.body, {
    subtree: true,
    attributes: true,
    attributeFilter: ["disabled"],
  });
});
