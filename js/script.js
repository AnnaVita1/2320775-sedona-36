let modal = document.querySelector(".modal-container");
let modalWindow = document.querySelector(".modal-window");
let modalOpenButton = document.querySelector(".modal-open-button");
let modalCloseButton = document.querySelector(".modal-close-button");

modalOpenButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-container-close");
});

modalCloseButton.addEventListener("click", function() {
  modal.classList.add("modal-container-close");
});

document.addEventListener('keydown', function(evt) {
  if (evt.key === "Escape") {
    modal.classList.add("modal-container-close")
  };
});

modal.addEventListener("click", function (evt) {
  if (!modalWindow.contains(evt.target)) {
    modal.classList.add("modal-container-close");
  }
});
