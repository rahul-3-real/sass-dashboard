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
