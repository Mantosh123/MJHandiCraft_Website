// Pendant groups: each section (Pendants_1, Pendants_2, Pendants_3) has its own carousel
const pendantGroups = [
  {
    id: "pendants-1",
    label: "Pendants 1",
    folder: "assets/pandent",
    items: [
      { name: "Pendant 1", price: "₹499", file: "Pendants_1/pendants_1.png" },
      { name: "Pendant 2", price: "₹549", file: "Pendants_1/pendants_2.png" },
    ],
  },
  {
    id: "pendants-2",
    label: "Pendants 2",
    folder: "assets/pandent",
    items: [
      { name: "Pendant 1", price: "₹499", file: "Pendants_2/pendants_1.png" },
      { name: "Pendant 2", price: "₹549", file: "Pendants_2/pendants_2.png" },
    ],
  },
  {
    id: "pendants-3",
    label: "Pendants 3",
    folder: "assets/pandent",
    items: [
      { name: "Pendant 1", price: "₹499", file: "Pendants_3/pendants_1.png" },
      { name: "Pendant 2", price: "₹549", file: "Pendants_3/pendants_2.png" },
      { name: "Pendant 3", price: "₹599", file: "Pendants_3/pendants_3.png" },
    ],
  },
];

const productCategories = [
  {
    id: "earring",
    label: "Ear Rings",
    folder: "assets/earRing",
    items: [
      { name: "Ear Ring 1", price: "₹399", file: "1/0CC42135-D8E1-4390-877B-7554FAC0D3B6.jpg" },
      { name: "Ear Ring 2", price: "₹449", file: "1/6FAD0A12-8A22-4F80-A6E3-5005E8B21F4C.jpg" },
      { name: "Ear Ring 3", price: "₹399", file: "3/59439C8F-BE54-4B66-97A9-AE8E581B356E.jpg" },
      { name: "Ear Ring 4", price: "₹449", file: "2/A173FE7D-2488-4AE0-9AE9-1A0E03883774.jpg" },
    ],
  },
];

function createCarouselSection(group) {
  const sectionEl = document.createElement("section");
  sectionEl.className = "product-category product-carousel-section";
  sectionEl.id = "products-" + group.id;

  const headerEl = document.createElement("header");
  headerEl.className = "product-category-header";
  const titleEl = document.createElement("h3");
  titleEl.className = "product-category-title";
  titleEl.textContent = group.label;
  headerEl.appendChild(titleEl);

  const carouselWrap = document.createElement("div");
  carouselWrap.className = "carousel-wrap";

  const track = document.createElement("div");
  track.className = "carousel-track";

  group.items.forEach(function (item) {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";
    const img = document.createElement("img");
    img.src = group.folder + "/" + item.file;
    img.alt = item.name;
    img.loading = "lazy";
    img.onerror = function () {
      this.onerror = null;
      this.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23e2e8f0' width='200' height='200'/%3E%3Ctext fill='%2394a3b8' font-family='system-ui' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImage%3C/text%3E%3C/svg%3E";
    };
    const meta = document.createElement("div");
    meta.className = "product-meta";
    meta.innerHTML = "<h4 class=\"product-name\">" + item.name + "</h4><p class=\"product-price\">" + item.price + "</p>";
    slide.appendChild(img);
    slide.appendChild(meta);
    track.appendChild(slide);
  });

  const dotsWrap = document.createElement("div");
  dotsWrap.className = "carousel-dots";
  group.items.forEach(function (_, i) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel-dot" + (i === 0 ? " is-active" : "");
    dot.setAttribute("aria-label", "Go to slide " + (i + 1));
    dot.dataset.index = String(i);
    dotsWrap.appendChild(dot);
  });

  carouselWrap.appendChild(track);
  carouselWrap.appendChild(dotsWrap);
  sectionEl.appendChild(headerEl);
  sectionEl.appendChild(carouselWrap);

  var currentIndex = 0;
  var slideCount = group.items.length;

  function goTo(index) {
    currentIndex = Math.max(0, Math.min(index, slideCount - 1));
    track.style.transform = "translateX(-" + currentIndex * 100 + "%)";
    dotsWrap.querySelectorAll(".carousel-dot").forEach(function (d, i) {
      d.classList.toggle("is-active", i === currentIndex);
    });
  }

  dotsWrap.querySelectorAll(".carousel-dot").forEach(function (dot) {
    dot.addEventListener("click", function () {
      goTo(parseInt(dot.dataset.index, 10));
    });
  });

  return sectionEl;
}

function renderProductGallery() {
  const container = document.getElementById("product-gallery");
  if (!container) return;

  pendantGroups.forEach(function (group) {
    container.appendChild(createCarouselSection(group));
  });

  productCategories.forEach(function (category) {
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

    category.items.forEach(function (item) {
      const cardEl = document.createElement("article");
      cardEl.className = "product-card";
      const imgEl = document.createElement("img");
      imgEl.src = category.folder + "/" + item.file;
      imgEl.alt = item.name;
      imgEl.loading = "lazy";
      imgEl.onerror = function () {
        this.onerror = null;
        this.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23e2e8f0' width='200' height='200'/%3E%3Ctext fill='%2394a3b8' font-family='system-ui' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImage%3C/text%3E%3C/svg%3E";
      };
      const metaEl = document.createElement("div");
      metaEl.className = "product-meta";
      metaEl.innerHTML = "<h4 class=\"product-name\">" + item.name + "</h4><p class=\"product-price\">" + item.price + "</p>";
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

// Helper: Log expected image paths (for debugging)
function logExpectedImages() {
  console.log("Pendant groups:", pendantGroups);
  console.log("Other categories:", productCategories);
}

document.addEventListener("DOMContentLoaded", function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
  
  // Uncomment the line below to see expected image paths in browser console
  // logExpectedImages();
  
  renderProductGallery();
  initSidebar();
});

