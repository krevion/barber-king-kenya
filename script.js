const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const bookingForm = document.querySelector("#booking-form");
const feedback = document.querySelector("#form-feedback");
const dateInput = document.querySelector("#booking-date");

document.querySelector("#current-year").textContent = new Date().getFullYear();
dateInput.min = new Date().toISOString().slice(0, 10);

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    siteNav.classList.remove("is-open");
  }
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!bookingForm.reportValidity()) return;

  const formData = new FormData(bookingForm);
  const message = [
    "Hi BARBER KINGS KENYA! I'd like to book a cut.",
    `Name: ${formData.get("name")}`,
    `Service: ${formData.get("service")}`,
    `Preferred date: ${formData.get("date")}`,
    `Preferred time: ${formData.get("time")}`,
  ].join("\n");

  feedback.textContent = "Opening WhatsApp with your booking request…";
  window.open(`https://wa.me/254724115325?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});