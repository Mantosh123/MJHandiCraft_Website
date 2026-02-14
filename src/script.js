const productCategories = [
  {
    id: "pendant",
    label: "Pendants",
    folder: "assets/pendant",
    items: [
      // Update these file names to match your real images
      { name: "Elegant Pendant", price: "₹499", file: "pendant-1.jpg" },
      { name: "Floral Pendant", price: "₹549", file: "pendant-2.jpg" },
    ],
  },
  {
    id: "earring",
    label: "Ear Rings",
    folder: "assets/earring",
    items: [
      { name: "Classic Ear Ring", price: "₹399", file: "earring-1.jpg" },
      { name: "Designer Ear Ring", price: "₹449", file: "earring-2.jpg" },
    ],
  },
];

function renderProductGallery() {
  const container = document.getElementById("product-gallery");
  if (!container || !productCategories.length) return;

  productCategories.forEach((category) => {
    if (!category.items || !category.items.length) return;

    const categoryEl = document.createElement("section");
    categoryEl.className = "product-category";
    categoryEl.id = "products-" + category.id;

    const headerEl = document.createElement("header");
    headerEl.className = "product-category-header";

    const titleEl = document.createElement("h3");
    titleEl.className = "product-category-title";
    titleEl.textContent = category.label;

    headerEl.appendChild(titleEl);

    const gridEl = document.createElement("div");
    gridEl.className = "product-grid";

    category.items.forEach((item) => {
      const cardEl = document.createElement("article");
      cardEl.className = "product-card";

      const imgEl = document.createElement("img");
      imgEl.src = `${category.folder}/${item.file}`;
      imgEl.alt = item.name;

      const metaEl = document.createElement("div");
      metaEl.className = "product-meta";

      const nameEl = document.createElement("h4");
      nameEl.className = "product-name";
      nameEl.textContent = item.name;

      const priceEl = document.createElement("p");
      priceEl.className = "product-price";
      priceEl.textContent = item.price;

      metaEl.appendChild(nameEl);
      metaEl.appendChild(priceEl);

      cardEl.appendChild(imgEl);
      cardEl.appendChild(metaEl);

      gridEl.appendChild(cardEl);
    });

    categoryEl.appendChild(headerEl);
    categoryEl.appendChild(gridEl);

    container.appendChild(categoryEl);
  });
}

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

function initSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const toggle = document.getElementById("menu-toggle");

  function openSidebar() {
    sidebar.classList.add("is-open");
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
  }

  function closeSidebar() {
    sidebar.classList.remove("is-open");
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      if (sidebar.classList.contains("is-open")) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener("click", closeSidebar);
  }

  document.querySelectorAll(".sidebar-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      closeSidebar();
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
  renderProductGallery();
  initSidebar();
});

