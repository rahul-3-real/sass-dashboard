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
  const sidebar = wrapper.querySelector("#sidebar");
  const items = document.querySelectorAll(
    "#sidebar .nav-list .nav-item.dropdown"
  );

  toggle.addEventListener("click", () => {
    if (wrapper.classList.contains("open")) {
      wrapper.classList.remove("open");
      items.forEach((item) => {
        item.classList.remove("show");
      });
    } else {
      wrapper.classList.add("open");
    }
  });

  sidebar.addEventListener("mouseenter", () => {
    wrapper.classList.add("open");
  });

  sidebar.addEventListener("mouseleave", () => {
    wrapper.classList.remove("open");
    items.forEach((item) => {
      item.classList.remove("show");
    });
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

// Production Chart
const productionChart = () => {
  var options = {
    series: [
      {
        name: "Previous Year",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Current Year",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      borderColor: "#a9a9a93d",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  var chart = new ApexCharts(
    document.querySelector("#production-chart"),
    options
  );
  chart.render();
};

// Expenses Chart
const expensesChart = () => {
  let options = {
    series: [14, 23, 21, 17, 15],
    chart: {
      type: "polarArea",
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 1,
          strokeColor: "#a9a9a93d",
        },
        spokes: {
          strokeWidth: 1,
          connectorColors: "#a9a9a93d",
        },
      },
    },
    legend: {
      position: "bottom",
    },
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.9,
    },
  };

  let chart = new ApexCharts(
    document.querySelector("#expenses-chart"),
    options
  );
  chart.render();
};

// Stats Counter
const statsCounter = () => {
  const elements = document.querySelectorAll("[data-count]");

  elements.forEach(function (element) {
    const targetValue = parseInt(element.getAttribute("data-count"));
    let count = 0;
    const duration = 2000; // 2 seconds
    const stepTime = duration / targetValue;

    const updateCount = () => {
      count += 5;
      element.textContent = count;
      if (count < targetValue) {
        setTimeout(updateCount, stepTime);
      }
    };

    updateCount();
  });
};

// Data Table
const dataTable = () => {
  const itemsPerPage = 10;
  let currentPage = 1;

  const fetchData = async () => {
    try {
      const response = await import("./mock-data.js");
      const data = response.default;
      renderPagination(data);
      showPage(data, currentPage);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const populateData = (data) => {
    const tableBody = document
      .getElementById("data-table")
      .getElementsByTagName("tbody")[0];

    // Clear existing rows
    tableBody.innerHTML = "";

    data.forEach((item) => {
      const row = tableBody.insertRow();
      row.insertCell(0).textContent = item.id;
      row.insertCell(1).textContent = item.first_name;
      row.insertCell(2).textContent = item.last_name;
      row.insertCell(3).textContent = item.email;
      row.insertCell(4).textContent = item.gender;
      row.insertCell(5).textContent = item.ip_address;
      row.insertCell(6).textContent = item.bio;
    });
  };

  const renderPagination = (data) => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const paginationContainer = document.getElementById("pagination");

    // Clear existing pagination
    paginationContainer.innerHTML = "";

    // Previous Button
    const prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        showPage(data, currentPage);
      }
    });
    paginationContainer.appendChild(prevButton);

    // Page Buttons
    for (
      let i = Math.max(1, currentPage - 2);
      i <= Math.min(totalPages, currentPage + 2);
      i++
    ) {
      const button = document.createElement("button");
      button.textContent = i;
      button.addEventListener("click", () => {
        currentPage = i;
        showPage(data, currentPage);
      });

      if (i === currentPage) {
        button.classList.add("active");
      }

      paginationContainer.appendChild(button);
    }

    // Next Button
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        showPage(data, currentPage);
      }
    });
    paginationContainer.appendChild(nextButton);
  };

  const showPage = (data, page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedData = data.slice(startIndex, endIndex);
    populateData(slicedData);
    renderPagination(data);
  };

  fetchData();
};

// Calendar
const calendar = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const calendarEl = document.querySelector("#calendar");
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth",
    });
    calendar.render();
  });
};
