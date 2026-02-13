function handleContactSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value.trim();

  alert(
    `Thank you${
      name ? `, ${name}` : ""
    }! This is a demo form.\n\nOn GitHub Pages, forms cannot send emails directly. You can:\n\n1) Replace this form with a WhatsApp link, or\n2) Use a third-party form service (e.g. Formspree) and update the form action.`
  );

  form.reset();
}

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

