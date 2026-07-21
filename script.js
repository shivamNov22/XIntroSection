// ===============================
// ELEMENTS
// ===============================

const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

// Desktop
const featuresItem = document.querySelector(".features-item");
const companyItem = document.querySelector(".company-item");

// Mobile
const mobileFeaturesBtn = document.querySelector(".mobile-features");
const mobileCompanyBtn = document.querySelector(".mobile-company");

const mobileFeaturesDropdown = document.querySelector(
  ".mobile-features-dropdown",
);

const mobileCompanyDropdown = document.querySelector(
  ".mobile-company-dropdown",
);

// ===============================
// DESKTOP DROPDOWNS
// ===============================

function closeDesktopDropdowns() {
  featuresItem.classList.remove("link-open");
  companyItem.classList.remove("link-open");
}

featuresItem.addEventListener("click", (e) => {
  e.stopPropagation();

  const opened = featuresItem.classList.contains("link-open");

  closeDesktopDropdowns();

  if (!opened) {
    featuresItem.classList.add("link-open");
  }
});

companyItem.addEventListener("click", (e) => {
  e.stopPropagation();

  const opened = companyItem.classList.contains("link-open");

  closeDesktopDropdowns();

  if (!opened) {
    companyItem.classList.add("link-open");
  }
});

// ===============================
// MOBILE MENU
// ===============================

function openMobileMenu() {
  overlay.classList.add("active");
  mobileMenu.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");

  mobileFeaturesDropdown.classList.remove("show");
  mobileCompanyDropdown.classList.remove("show");

  mobileFeaturesBtn.classList.remove("active");
  mobileCompanyBtn.classList.remove("active");

  document.body.style.overflow = "";
}

openMenu.addEventListener("click", openMobileMenu);

closeMenu.addEventListener("click", closeMobileMenu);

overlay.addEventListener("click", closeMobileMenu);

// ===============================
// MOBILE DROPDOWNS
// ===============================

mobileFeaturesBtn.addEventListener("click", () => {
  const isOpen = mobileFeaturesDropdown.classList.contains("show");

  mobileFeaturesDropdown.classList.remove("show");
  mobileCompanyDropdown.classList.remove("show");

  mobileFeaturesBtn.classList.remove("active");
  mobileCompanyBtn.classList.remove("active");

  if (!isOpen) {
    mobileFeaturesDropdown.classList.add("show");
    mobileFeaturesBtn.classList.add("active");
  }
});

mobileCompanyBtn.addEventListener("click", () => {
  const isOpen = mobileCompanyDropdown.classList.contains("show");

  mobileFeaturesDropdown.classList.remove("show");
  mobileCompanyDropdown.classList.remove("show");

  mobileFeaturesBtn.classList.remove("active");
  mobileCompanyBtn.classList.remove("active");

  if (!isOpen) {
    mobileCompanyDropdown.classList.add("show");
    mobileCompanyBtn.classList.add("active");
  }
});

// ===============================
// CLOSE WHEN CLICK OUTSIDE
// ===============================

document.addEventListener("click", () => {
  closeDesktopDropdowns();
});

mobileMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

// ===============================
// ESC KEY
// ===============================

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDesktopDropdowns();
    closeMobileMenu();
  }
});

// ===============================
// WINDOW RESIZE
// ===============================

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
});

// ===============================
// PREVENT DESKTOP DROPDOWN CLOSE
// ===============================

featuresItem.addEventListener("click", (e) => e.stopPropagation());
companyItem.addEventListener("click", (e) => e.stopPropagation());

// ===============================
// INITIAL STATE
// ===============================

closeDesktopDropdowns();
closeMobileMenu();

console.log("Intro Section Loaded Successfully");
