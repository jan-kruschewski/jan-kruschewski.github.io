// Mobile parallax: shift portrait image up as user scrolls
function updateMobileParallax() {
  const img = document.querySelector('.video_container img');
  if (!img) return;
  if (window.innerWidth <= 768) {
    const move = Math.min(window.scrollY * 0.22, 28);
    img.style.transform = `translateY(-${move}px)`;
  } else {
    img.style.transform = '';
  }
}
window.addEventListener('scroll', updateMobileParallax, { passive: true });
window.addEventListener('resize', updateMobileParallax);

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
