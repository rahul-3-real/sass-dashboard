// Show Greeting
const showGreeting = () => {
  const elem = document.querySelector("#greeting");
  const currentHour = new Date().getHours();

  let greeting;
  if (currentHour < 12) {
    greeting = "Good morning!";
  } else if (currentHour < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  elem.textContent = greeting;
};

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

// Full Screen Toggle
const fullScreenToggle = () => {
  const toggle = document.querySelector("#zoom-toggle");
  const body = document.querySelector("body");

  const openFullScreen = () => {
    if (body.requestFullscreen) {
      body.requestFullscreen();
    } else if (body.webkitRequestFullscreen) {
      /* Safari */
      body.webkitRequestFullscreen();
    } else if (body.msRequestFullscreen) {
      /* IE11 */
      body.msRequestFullscreen();
    }
  };

  const closeFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
  };

  toggle.addEventListener("click", () => {
    if (toggle.classList.contains("full-screen")) {
      closeFullScreen();
      toggle.classList.remove("full-screen");
      toggle.innerHTML = `<i class="fad fa-expand-wide"></i>`;
    } else {
      openFullScreen();
      toggle.classList.add("full-screen");
      toggle.innerHTML = `<i class="fad fa-compress-wide"></i>`;
    }
  });
};

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

// Calling Functions
showGreeting();
themeToggle();
fullScreenToggle();
toggleSidebar();
sidebarDropdownToggle();
dropdownToggle();
