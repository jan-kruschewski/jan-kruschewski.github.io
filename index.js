// Select all accordions
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const trigger = accordion.querySelector(".accordion-trigger");
  const content = accordion.querySelector(".accordion-content");
  const cross = accordion.querySelector(".cross");

  trigger.addEventListener("click", () => {
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";

    // Toggle aria attributes
    trigger.setAttribute("aria-expanded", !isExpanded);
    content.setAttribute("aria-hidden", isExpanded);

    // Rotate the cross (+ → ×)
    if (isExpanded) {
      cross.classList.remove("open");
    } else {
      cross.classList.add("open");
    }
  });
});
