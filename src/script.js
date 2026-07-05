const FALLBACK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23e2e8f0' width='200' height='200'/%3E%3Ctext fill='%2394a3b8' font-family='system-ui' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImage%3C/text%3E%3C/svg%3E";

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toDisplayName(value) {
  return value
    .replace(/\.[^.]+$/, "")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map(function (part) {
      if (!part) return part;
      if (/^\d+$/.test(part)) return part;
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    })
    .join(" ");
}

function getCategoryTitle(folderParts) {
  const categoryKey = folderParts[1];

  if (categoryKey === "pandent") return "Pendants";
  if (categoryKey === "earRing") return "Ear Rings";
  if (categoryKey === "ArtAndCraft") return "Art And Craft";

  return toDisplayName(categoryKey);
}

function getCollectionSubtitle(folderParts) {
  const relevantParts = folderParts.slice(2);
  return relevantParts.map(toDisplayName).join(" / ");
}

function getCodePrefix(folderParts) {
  const title = getCategoryTitle(folderParts);
  const prefixMap = {
    Pendants: "PD",
    "Ear Rings": "ER",
    "Art And Craft": "AC",
  };
  const subtitleSeed = folderParts
    .slice(2)
    .join("-")
    .replace(/[^a-zA-Z0-9]+/g, "")
    .toUpperCase();

  return prefixMap[title] + "-" + subtitleSeed;
}

function buildCollection(folder, files, options) {
  const folderParts = folder.split("/");
  const subtitle =
    options && options.subtitle
      ? options.subtitle
      : getCollectionSubtitle(folderParts);

  return {
    id: slugify(subtitle || folderParts[folderParts.length - 1]),
    aliases: options && options.aliases ? options.aliases : [],
    title: getCategoryTitle(folderParts),
    subtitle: subtitle,
    menuLabel:
      options && options.menuLabel ? options.menuLabel : subtitle,
    folder: folder,
    price: "Price on request",
    codePrefix: getCodePrefix(folderParts),
    files: files,
  };
}

const productCollections = [
  buildCollection("assets/pandent/Pendants_1", ["pendants_1.png", "pendants_2.png"], {
    aliases: ["products-pendant"],
    subtitle: "Pendant Set 01",
    menuLabel: "Set 01",
  }),
  buildCollection("assets/pandent/Pendants_2", ["pendants_1.png", "pendants_2.png"], {
    subtitle: "Pendant Set 02",
    menuLabel: "Set 02",
  }),
  buildCollection("assets/pandent/Pendants_3", [
    "pendants_1.png",
    "pendants_2.png",
    "pendants_3.png",
  ], {
    subtitle: "Pendant Set 03",
    menuLabel: "Set 03",
  }),
  buildCollection("assets/earRing/EarRing_55", [
    "EarRing_55_01.png",
    "EarRing_55_02.png",
    "EarRing_55_03.png",
    "EarRing_55_04.png",
    "EarRing_55_05.png",
    "EarRing_55_06.png",
    "EarRing_55_07.png",
    "EarRing_55_08.png",
    "EarRing_55_09.png",
    "EarRing_55_10.png",
    "EarRing_55_11.png",
    "EarRing_55_12.png",
    "EarRing_55_13.png",
    "EarRing_55_14.png",
  ], {
    aliases: ["products-earring"],
    subtitle: "Ear Ring Collection 55",
    menuLabel: "Collection 55",
  }),
  buildCollection("assets/earRing/Earring_48", [
    "Earring_48_01.png",
    "Earring_48_02.png",
    "Earring_48_03.png",
    "Earring_48_04.png",
    "Earring_48_05.png",
    "Earring_48_06.png",
    "Earring_48_07.png",
    "Earring_48_08.png",
    "Earring_48_09.png",
  ], {
    subtitle: "Ear Ring Collection 48",
    menuLabel: "Collection 48",
  }),
  buildCollection("assets/earRing/Earring_54", [
    "Earring_54_01.png",
    "Earring_54_02.png",
    "Earring_54_03.png",
  ], {
    subtitle: "Ear Ring Collection 54",
    menuLabel: "Collection 54",
  }),
  buildCollection("assets/earRing/Earring_57", [
    "Earring_57_01.jpg",
    "Earring_57_02.jpg",
    "Earring_57_03.jpg",
  ], {
    subtitle: "Ear Ring Collection 57",
    menuLabel: "Collection 57",
  }),
  buildCollection("assets/earRing/Earring_65", ["Earring_01_01.png", "Earring_01_02.png"], {
    subtitle: "Ear Ring Collection 65",
    menuLabel: "Collection 65",
  }),
  buildCollection("assets/earRing/Earring_66", [
    "Earring_66_01.png",
    "Earring_66_02.png",
    "Earring_66_03.png",
    "Earring_66_04.png",
  ], {
    subtitle: "Ear Ring Collection 66",
    menuLabel: "Collection 66",
  }),
  buildCollection("assets/earRing/Earring_70", [
    "Earring_70_01.jpg",
    "Earring_70_02.jpg",
    "Earring_70_03.jpg",
    "Earring_70_04.jpg",
  ], {
    subtitle: "Ear Ring Collection 70",
    menuLabel: "Collection 70",
  }),
  buildCollection("assets/earRing/Earring_75", ["Earring_75_01.jpg", "Earring_75_02.jpg"], {
    subtitle: "Ear Ring Collection 75",
    menuLabel: "Collection 75",
  }),
  buildCollection("assets/earRing/Earring_132", [
    "Earring_132_01.jpg",
    "Earring_132_02.jpg",
    "Earring_132_03.jpg",
  ], {
    subtitle: "Ear Ring Collection 132",
    menuLabel: "Collection 132",
  }),
  buildCollection("assets/earRing/Earring1_66", [
    "Earring1_66_01.jpg",
    "Earring1_66_02.jpg",
    "Earring1_66_03.jpg",
    "Earring1_66_04.jpg",
  ], {
    subtitle: "Ear Ring Collection 66A",
    menuLabel: "Collection 66A",
  }),
  buildCollection("assets/earRing/Earring1_84", [
    "Earring1_84_01.jpg",
    "Earring1_84_02.jpg",
    "Earring1_84_03.jpg",
    "Earring1_84_04.jpg",
  ], {
    subtitle: "Ear Ring Collection 84A",
    menuLabel: "Collection 84A",
  }),
  buildCollection("assets/earRing/EarRing_78", [
    "EarRing_78_01.jpg",
    "EarRing_78_02.jpg",
    "EarRing_78_03.jpg",
  ], {
    subtitle: "Ear Ring Collection 78",
    menuLabel: "Collection 78",
  }),
  buildCollection("assets/earRing/EarRing_84", ["EarRing_84_01.jpg", "EarRing_84_02.jpg"], {
    subtitle: "Ear Ring Collection 84",
    menuLabel: "Collection 84",
  }),
  buildCollection("assets/earRing/EarRing_95", [
    "EarRing_95_01.jpg",
    "EarRing_95_02.jpg",
    "EarRing_95_03.jpg",
    "EarRing_95_04.jpg",
    "EarRing_95_05.jpg",
    "EarRing_95_06.jpg",
  ], {
    subtitle: "Ear Ring Collection 95",
    menuLabel: "Collection 95",
  }),
  buildCollection("assets/earRing/EarRing_108", [
    "EarRing_108_01.jpg",
    "EarRing_108_02.jpg",
    "EarRing_108_03.jpg",
    "EarRing_108_04.jpg",
  ], {
    subtitle: "Ear Ring Collection 108",
    menuLabel: "Collection 108",
  }),
  buildCollection(
    "assets/ArtAndCraft/Pipclenears_70/Pipclenears_70_01",
    [
      "Pipclenears_70_01.jpg",
      "Pipclenears_70_02.jpg",
      "Pipclenears_70_03.jpg",
      "Pipclenears_70_04.jpg",
    ],
    {
      aliases: ["products-decor"],
      subtitle: "Art And Craft Set 01",
      menuLabel: "Set 01",
    }
  ),
  buildCollection("assets/ArtAndCraft/Pipclenears_70/Pipclenears_70_02", [
    "Pipclenears_70_02_01.jpg",
    "Pipclenears_70_02_02.jpg",
    "Pipclenears_70_02_03.jpg",
    "Pipclenears_70_02_04.jpg",
    "Pipclenears_70_02_05.jpg",
  ], {
    subtitle: "Art And Craft Set 02",
    menuLabel: "Set 02",
  }),
];

function createAliasAnchor(aliasId) {
  const anchor = document.createElement("span");
  anchor.id = aliasId;
  anchor.className = "section-anchor";
  anchor.setAttribute("aria-hidden", "true");
  return anchor;
}

function attachImageFallback(imageEl) {
  imageEl.onerror = function () {
    this.onerror = null;
    this.src = FALLBACK_IMAGE;
  };
}

function createProductCard(collection, file, index) {
  const cardEl = document.createElement("article");
  cardEl.className = "product-card";

  const imageWrapEl = document.createElement("div");
  imageWrapEl.className = "product-image-wrap";

  const imgEl = document.createElement("img");
  imgEl.src = collection.folder + "/" + file;
  imgEl.alt = collection.subtitle + " - " + toDisplayName(file);
  imgEl.loading = "lazy";
  attachImageFallback(imgEl);
  imageWrapEl.appendChild(imgEl);

  const metaEl = document.createElement("div");
  metaEl.className = "product-meta";

  const nameEl = document.createElement("h4");
  nameEl.className = "product-name";
  nameEl.textContent = toDisplayName(file);

  const subtitleEl = document.createElement("p");
  subtitleEl.className = "product-subtitle";
  subtitleEl.textContent = collection.subtitle;

  const detailRowEl = document.createElement("div");
  detailRowEl.className = "product-details";

  const priceEl = document.createElement("p");
  priceEl.className = "product-price";
  priceEl.textContent = collection.price;

  const codeEl = document.createElement("p");
  codeEl.className = "product-code";
  codeEl.textContent =
    "Code: " + collection.codePrefix + "-" + String(index + 1).padStart(2, "0");

  detailRowEl.appendChild(priceEl);
  detailRowEl.appendChild(codeEl);
  metaEl.appendChild(nameEl);
  metaEl.appendChild(subtitleEl);
  metaEl.appendChild(detailRowEl);

  cardEl.appendChild(imageWrapEl);
  cardEl.appendChild(metaEl);

  return cardEl;
}

function createProductSection(collection) {
  const sectionEl = document.createElement("section");
  sectionEl.className = "product-category";
  sectionEl.id = "products-" + collection.id;

  if (collection.aliases && collection.aliases.length) {
    collection.aliases.forEach(function (aliasId) {
      sectionEl.appendChild(createAliasAnchor(aliasId));
    });
  }

  const headerEl = document.createElement("header");
  headerEl.className = "product-category-header";

  const headerCopyEl = document.createElement("div");
  headerCopyEl.className = "product-category-copy";

  const titleEl = document.createElement("h3");
  titleEl.className = "product-category-title";
  titleEl.textContent = collection.title;

  const subtitleEl = document.createElement("p");
  subtitleEl.className = "product-category-subtitle";
  subtitleEl.textContent = collection.subtitle;

  const labelEl = document.createElement("p");
  labelEl.className = "product-category-label";
  labelEl.textContent = collection.files.length + " designs";

  headerCopyEl.appendChild(titleEl);
  headerCopyEl.appendChild(subtitleEl);
  headerEl.appendChild(headerCopyEl);
  headerEl.appendChild(labelEl);

  const gridEl = document.createElement("div");
  gridEl.className = "product-grid";

  collection.files.forEach(function (file, index) {
    gridEl.appendChild(createProductCard(collection, file, index));
  });

  sectionEl.appendChild(headerEl);
  sectionEl.appendChild(gridEl);
  return sectionEl;
}

function renderProductGallery() {
  const container = document.getElementById("product-gallery");
  if (!container) return;

  container.innerHTML = "";

  productCollections.forEach(function (collection) {
    if (!collection.files || !collection.files.length) return;
    container.appendChild(createProductSection(collection));
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

function logExpectedImages() {
  console.log("Product collections:", productCollections);
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
