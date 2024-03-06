let menuIcon = document.querySelector(".list_icon");

let menuList = document.querySelector(".links_none");

menuIcon.addEventListener("click", function () {
  menuList.classList.toggle("d-none")
  menuList.classList.toggle("links_none--active");
});