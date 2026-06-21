const FALLBACK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23e2e8f0' width='200' height='200'/%3E%3Ctext fill='%2394a3b8' font-family='system-ui' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImage%3C/text%3E%3C/svg%3E";

const productCollections = [
  {
    id: "pendants-1",
    aliases: ["products-pendant"],
    title: "Pendants",
    subtitle: "Pendants 1",
    folder: "assets/pandent/Pendants_1",
    price: "From INR 499",
    codePrefix: "PD-001",
    files: ["pendants_1.png", "pendants_2.png"],
  },
  {
    id: "pendants-2",
    title: "Pendants",
    subtitle: "Pendants 2",
    folder: "assets/pandent/Pendants_2",
    price: "From INR 549",
    codePrefix: "PD-002",
    files: ["pendants_1.png", "pendants_2.png"],
  },
  {
    id: "pendants-3",
    title: "Pendants",
    subtitle: "Pendants 3",
    folder: "assets/pandent/Pendants_3",
    price: "From INR 599",
    codePrefix: "PD-003",
    files: ["pendants_1.png", "pendants_2.png", "pendants_3.png"],
  },
  {
    id: "earring-cherry-pendant-1",
    aliases: ["products-earring"],
    title: "Ear Rings",
    subtitle: "Cherry Pandent 1",
    folder: "assets/earRing/CherryPandent_1",
    price: "Price on request",
    codePrefix: "ER-CP1",
    files: [
      "0CC42135-D8E1-4390-877B-7554FAC0D3B6.jpg",
      "3CB2030E-2257-4DC1-B6DD-3436B529992C.jpg",
      "6FAD0A12-8A22-4F80-A6E3-5005E8B21F4C.jpg",
      "8D2B16BE-89AF-4C53-AD78-4399B3B5B8F8.jpg",
    ],
  },
  {
    id: "earring-cherry-pendant-2",
    title: "Ear Rings",
    subtitle: "Cherry Pandent 2",
    folder: "assets/earRing/CherryPandent_2",
    price: "Price on request",
    codePrefix: "ER-CP2",
    files: [
      "A173FE7D-2488-4AE0-9AE9-1A0E03883774.jpg",
      "B1E267E7-5BA1-44EB-B732-451941B99060.PNG",
      "C7B2B881-C556-4C7E-8CD7-8B9F4E5FF183.jpg",
      "E44286AB-A13E-45F9-8005-691E4EA19929.PNG",
    ],
  },
  {
    id: "earring-55",
    title: "Ear Rings",
    subtitle: "EarRing 55",
    folder: "assets/earRing/EarRing_55",
    price: "Price on request",
    codePrefix: "ER-055",
    files: [
      "EarRING_10.PNG",
      "EarRing_01.PNG",
      "EarRing_02.PNG",
      "EarRing_03.PNG",
      "EarRing_04.PNG",
      "EarRing_05.PNG",
      "EarRing_06.PNG",
      "EarRing_07.PNG",
      "EarRing_08.PNG",
      "EarRing_11.PNG",
      "EarRing_12.PNG",
      "EarRing_13.PNG",
      "EarRing_14.PNG",
      "EariRng_09.PNG",
    ],
  },
  {
    id: "earring-84",
    title: "Ear Rings",
    subtitle: "EarRing 84",
    folder: "assets/earRing/EarRing_84",
    price: "Price on request",
    codePrefix: "ER-084",
    files: ["EarRing_01.PNG", "EarRing_02.PNG"],
  },
  {
    id: "earring1-66",
    title: "Ear Rings",
    subtitle: "Earring 1 66",
    folder: "assets/earRing/Earring1_66",
    price: "Price on request",
    codePrefix: "ER-166",
    files: [
      "0CC42135-D8E1-4390-877B-7554FAC0D3B6.jpg",
      "3CB2030E-2257-4DC1-B6DD-3436B529992C.jpg",
      "6FAD0A12-8A22-4F80-A6E3-5005E8B21F4C.jpg",
      "8D2B16BE-89AF-4C53-AD78-4399B3B5B8F8.jpg",
    ],
  },
  {
    id: "earring1-84",
    title: "Ear Rings",
    subtitle: "Earring 1 84",
    folder: "assets/earRing/Earring1_84",
    price: "Price on request",
    codePrefix: "ER-184",
    files: [
      "5F9C667A-59E3-43B0-AF80-D21C77B7B7FC.PNG",
      "DDF80872-7679-4F3F-8DC3-8C4847AD4268.PNG",
      "E1211D54-183D-45DC-B34F-46C9CAE535E8.PNG",
      "EAD9B04A-F01A-4C0B-8BD1-153284894DF4.PNG",
    ],
  },
  {
    id: "earring-45",
    title: "Ear Rings",
    subtitle: "Earring 45",
    folder: "assets/earRing/Earring_45",
    price: "Price on request",
    codePrefix: "ER-045",
    files: [
      "2CB47031-F301-433D-92CD-8BB5080F0B10.PNG",
      "59451117-2F4F-4479-B0ED-B867E2252160.PNG",
    ],
  },
  {
    id: "earring-48",
    title: "Ear Rings",
    subtitle: "Earring 48",
    folder: "assets/earRing/Earring_48",
    price: "Price on request",
    codePrefix: "ER-048",
    files: [
      "34C0ACFE-A790-4E99-8244-8D4F1EFF9A13.PNG",
      "52B0589D-A878-41CA-9DF0-179DA4C36DDF.PNG",
      "6BC7ABA2-468A-418E-BA6C-D44BAD257C39.PNG",
      "80109F08-19EA-43F9-9D36-5AF7B933A77D.PNG",
      "91F2F875-3CF9-463A-B8AA-514579580238.PNG",
      "9EB5B84B-99F9-4465-8BC8-C48ECD8B4E15.PNG",
      "C9A6B20F-F24E-4A25-BFF2-415337AC2C79.PNG",
      "D627B19A-D79B-42A5-A3FB-4B9E810C082D.PNG",
      "FAA89BA5-D3A5-4416-9257-06557684B072.PNG",
    ],
  },
  {
    id: "earring-108",
    title: "Ear Rings",
    subtitle: "EarRing 108",
    folder: "assets/earRing/earRing_108",
    price: "Price on request",
    codePrefix: "ER-108",
    files: [
      "079AD770-9102-48CE-A711-B98526C59028.PNG",
      "84DAEF39-CFA3-41D2-9B22-D1AC9EFA8CDE.PNG",
      "A1F04017-329C-46C1-ACA8-DE479BE09964.PNG",
      "D964966E-D9DB-4D25-817B-6311B107403F.PNG",
    ],
  },
  {
    id: "earring-78",
    title: "Ear Rings",
    subtitle: "EarRing 78",
    folder: "assets/earRing/earRing_78",
    price: "Price on request",
    codePrefix: "ER-078",
    files: [
      "12F47CDB-7E28-48FA-AA91-01491E6EBE27.PNG",
      "46EEC2EA-0A97-43A0-849E-986C46AD762F.PNG",
      "FFA4ADB0-74D6-4021-B1F8-AE251239A04C.PNG",
    ],
  },
  {
    id: "earring-95",
    title: "Ear Rings",
    subtitle: "EarRing 95",
    folder: "assets/earRing/earRing_95",
    price: "Price on request",
    codePrefix: "ER-095",
    files: [
      "1BEDBAC6-04D7-4588-8B9C-1652BE373DFD.PNG",
      "21389EF4-B29C-4C69-B9FE-67D67F1C0D05.PNG",
      "D9CE6DAC-7075-48B1-9969-B1F40FA2AAEA.PNG",
      "E27F03E0-A70A-43C4-9F59-79743F66B471.PNG",
      "F13D8AD5-B1C5-40A6-B7C4-F4D35DC40611.PNG",
      "F811AA99-3D8D-4B2D-84B6-F23D6B7953CA.PNG",
    ],
  },
  {
    id: "earring-132",
    title: "Ear Rings",
    subtitle: "Earring 132",
    folder: "assets/earRing/earring_132",
    price: "Price on request",
    codePrefix: "ER-132",
    files: [
      "2038802C-7DF1-4FBD-92F2-DEA6F692F214.jpg",
      "90A28F41-B8E0-4BC1-8AD1-3EEA0A25CAFA.jpg",
      "9C94DCF9-3B95-46EC-9A94-DAE95A29FD8A.jpg",
    ],
  },
  {
    id: "earring-54",
    title: "Ear Rings",
    subtitle: "Earring 54",
    folder: "assets/earRing/earring_54",
    price: "Price on request",
    codePrefix: "ER-054",
    files: [
      "59439C8F-BE54-4B66-97A9-AE8E581B356E.jpg",
      "B589CEC2-2C01-4D37-A139-7081D7152E8A.PNG",
      "B84A02EB-AE73-4745-BADC-A942A337292E.jpg",
    ],
  },
  {
    id: "earring-66-lower",
    title: "Ear Rings",
    subtitle: "Earring 66",
    folder: "assets/earRing/earring_66",
    price: "Price on request",
    codePrefix: "ER-066",
    files: [
      "A173FE7D-2488-4AE0-9AE9-1A0E03883774.jpg",
      "B1E267E7-5BA1-44EB-B732-451941B99060.PNG",
      "C7B2B881-C556-4C7E-8CD7-8B9F4E5FF183.jpg",
      "E44286AB-A13E-45F9-8005-691E4EA19929.PNG",
    ],
  },
  {
    id: "earring-75",
    title: "Ear Rings",
    subtitle: "Earring 75",
    folder: "assets/earRing/earring_75",
    price: "Price on request",
    codePrefix: "ER-075",
    files: [
      "4C7F0BF4-B29D-4009-8CC0-033D85C0E33C.jpg",
      "746D914C-3B6C-4E3B-B2A0-C23FCA824397.jpg",
    ],
  },
  {
    id: "earring-new",
    title: "Ear Rings",
    subtitle: "Earring New",
    folder: "assets/earRing/earring_new",
    price: "Price on request",
    codePrefix: "ER-NEW",
    files: [
      "59439C8F-BE54-4B66-97A9-AE8E581B356E.jpg",
      "B589CEC2-2C01-4D37-A139-7081D7152E8A.PNG",
      "B84A02EB-AE73-4745-BADC-A942A337292E.jpg",
    ],
  },
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
  imgEl.alt = collection.subtitle + " Design " + (index + 1);
  imgEl.loading = "lazy";
  attachImageFallback(imgEl);
  imageWrapEl.appendChild(imgEl);

  const metaEl = document.createElement("div");
  metaEl.className = "product-meta";

  const nameEl = document.createElement("h4");
  nameEl.className = "product-name";
  nameEl.textContent = "Design " + String(index + 1).padStart(2, "0");

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

