// ===============================
// ELEMENTS
// ===============================

const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

// Desktop Dropdown Buttons
const featuresBtn = document.querySelector(".features-btn");
const companyBtn = document.querySelector(".company-btn");

const featuresDropdown = document.querySelector(".features-dropdown");
const companyDropdown = document.querySelector(".company-dropdown");

// Mobile Dropdown Buttons
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
  featuresDropdown.classList.remove("show");
  companyDropdown.classList.remove("show");

  featuresBtn.classList.remove("active");
  companyBtn.classList.remove("active");
}

featuresBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  const isOpen = featuresDropdown.classList.contains("show");

  closeDesktopDropdowns();

  if (!isOpen) {
    featuresDropdown.classList.add("show");
    featuresBtn.classList.add("active");
  }
});

companyBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  const isOpen = companyDropdown.classList.contains("show");

  closeDesktopDropdowns();

  if (!isOpen) {
    companyDropdown.classList.add("show");
    companyBtn.classList.add("active");
  }
});

// ===============================
// MOBILE MENU
// ===============================

function openMobileMenu() {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
}

function closeMobileMenu() {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");

  mobileFeaturesDropdown.classList.remove("show");
  mobileCompanyDropdown.classList.remove("show");

  mobileFeaturesBtn.classList.remove("active");
  mobileCompanyBtn.classList.remove("active");
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
// CLOSE DESKTOP DROPDOWNS
// ===============================

document.addEventListener("click", () => {
  closeDesktopDropdowns();
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
// ESC KEY SUPPORT
// ===============================

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDesktopDropdowns();
    closeMobileMenu();
  }
});

// ===============================
// PREVENT DROPDOWN CLOSE
// ===============================

featuresDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
});

companyDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
});

// ===============================
// INITIAL STATE
// ===============================

closeDesktopDropdowns();
closeMobileMenu();

console.log("Intro Section Loaded Successfully");
