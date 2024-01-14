// Theme Toggle
const themeToggle = () => {
  const toggle = document.querySelector("#theme-toggle");

  toggle.addEventListener("click", () => {
    if (document.querySelector("body").getAttribute("data-theme") === "dark") {
      document.querySelector("body").setAttribute("data-theme", "light");
      toggle.innerHTML = `<i class="fad fa-lightbulb-on"></i>`;
      localStorage.setItem("theme", "light");
    } else if (
      document.querySelector("body").getAttribute("data-theme") === "light"
    ) {
      document.querySelector("body").setAttribute("data-theme", "dark");
      toggle.innerHTML = `<i class="fad fa-lightbulb"></i>`;
      localStorage.setItem("theme", "dark");
    }
  });

  if (localStorage.getItem("theme") === "dark") {
    document.querySelector("body").setAttribute("data-theme", "dark");
    toggle.innerHTML = `<i class="fad fa-lightbulb"></i>`;
    localStorage.setItem("theme", "dark");
  } else if (localStorage.getItem("theme") === "light") {
    document.querySelector("body").setAttribute("data-theme", "light");
    toggle.innerHTML = `<i class="fad fa-lightbulb-on"></i>`;
    localStorage.setItem("theme", "light");
  }
};
themeToggle();

// Hover Navbar
const toggleSidebar = () => {
  const wrapper = document.querySelector("#wrapper");
  const toggle = wrapper.querySelector("#sidebar-toggle");

  toggle.addEventListener("click", () => {
    if (wrapper.classList.contains("open")) {
      wrapper.classList.remove("open");
      const items = document.querySelectorAll(
        "#sidebar .nav-list .nav-item.dropdown"
      );
      items.forEach((item) => {
        item.classList.remove("show");
      });
    } else {
      wrapper.classList.add("open");
    }
  });
};
toggleSidebar();

// Sidebar Dropdown Toggle
const sidebarDropdownToggle = () => {
  const items = document.querySelectorAll(".nav-list .nav-item.dropdown");

  items.forEach((item) => {
    const link = item.querySelector(".nav-link");
    link.href = "javascript:void(0)";
    link.addEventListener("click", () => {
      if (item.classList.contains("show")) {
        item.classList.remove("show");
      } else {
        items.forEach((link) => link.classList.remove("show"));
        item.classList.add("show");
      }
    });
  });
};
sidebarDropdownToggle();

// Dropdown Toggle
const dropdownToggle = () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  // Function to check if the target is inside the dropdown
  const isInsideDropdown = (target, dropdown) => {
    return dropdown.contains(target);
  };

  // Close dropdowns when clicked outside
  document.addEventListener("click", (event) => {
    dropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector(".dropdown-toggle");
      if (toggle) {
        if (!isInsideDropdown(event.target, dropdown)) {
          dropdown.classList.remove("show");
        }
      }
    });
  });

  // Toggle dropdown on click
  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        dropdown.classList.toggle("show");
      });
    }
  });
};
dropdownToggle();
