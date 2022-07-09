let open = document.querySelector(".main-selection-content-title-btn");
let items = document.querySelectorAll(
  ".main-selection-content-title-items-item"
);
let openBtn = document.querySelector(".main-selection-content-title-btn-add");
let closeBtn = document.querySelector(
  ".main-selection-content-title-btn-remove"
);

items.forEach(function (i) {
  open.addEventListener("click", function () {
    i.classList.toggle("block");
  });
});

open.addEventListener("click", function () {
  if (openBtn.classList.toggle(".hidden")) {
    openBtn.textContent = "Скрыть подборки";
    openBtn.style.backgroundColor = "red";
  } else {
    openBtn.textContent = "Ещё подборки";
    openBtn.style.backgroundColor = "#45dd45";
  }
});

// header-mid-content-info (Контактная информация)
let menuToggle = document.querySelector(".header-mid-content-info");
let menuOpen = document.querySelector(".header-mid-content-info-section");

menuToggle.addEventListener("click", function () {
  menuOpen.classList.toggle("block");
});
