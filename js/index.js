  // Dropdown Logic
  const dropdownToggle = document.getElementById("dropdown-toggle");
  const dropdownMenu = document.getElementById("dropdown-menu");
  const dropdownParent = document.getElementById("dropdown-parent");

  dropdownToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", (event) => {
    if (!dropdownParent.contains(event.target)) {
      dropdownMenu.classList.add("hidden");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      dropdownMenu.classList.add("hidden");
    }
  });

  // Search Popup Logic
  const searchIcon = document.getElementById("search-icon");
  const searchPopup = document.getElementById("search-popup");
  const closeSearch = document.getElementById("close-search");

  searchIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    searchPopup.classList.remove("hidden");
  });

  closeSearch.addEventListener("click", () => {
    searchPopup.classList.add("hidden");
  });

  document.addEventListener("click", (event) => {
    if (!searchPopup.contains(event.target) && !event.target.closest("#search-icon")) {
      searchPopup.classList.add("hidden");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      searchPopup.classList.add("hidden");
      dropdownMenu.classList.add("hidden");
    }
  });

  // Hamburger Menu Logic
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburgerIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });