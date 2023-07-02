let modal = document.querySelector(".modal-container");
let modalWindow = document.querySelector(".modal-window");
let modalOpenButton = document.querySelector(".modal-open-button");
let modalCloseButton = document.querySelector(".modal-close-button");
let body = document.body;

modalOpenButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-container-close");
  body.classList.add('overflow-hidden');
});

modalCloseButton.addEventListener("click", function() {
  modal.classList.add("modal-container-close");
  body.classList.remove('overflow-hidden');
});

document.addEventListener('keydown', function(evt) {
  if (evt.key === "Escape") {
    modal.classList.add("modal-container-close")
    body.classList.remove('overflow-hidden');
  };
});

modal.addEventListener("click", function (evt) {
  if (!modalWindow.contains(evt.target)) {
    modal.classList.add("modal-container-close");
  };
});

//Убирает количество ко клику
document.querySelectorAll('.toggle-flex .modal-toggle-min').forEach(function(button) {
  button.addEventListener('click', function() {
    let input = this.parentElement.querySelector('.field-small');
    let count = parseInt(input.value) - 1;
    count = count < 1 ? 1 : count;
    input.value = count;
  });
});

//Прибавляет количество по клику
document.querySelectorAll('.toggle-flex .modal-toggle-max').forEach(function(button) {
  button.addEventListener('click', function() {
    let input = this.parentElement.querySelector('.field-small');
    let count = parseInt(input.value) + 1;
    count = count > parseInt(input.dataset.maxCount) ? parseInt(input.dataset.maxCount) : count;
    input.value = count;
  });
});

//Убирает всё лишнее и невозможное при изменении поля
document.querySelectorAll('.toggle-flex .field-small').forEach(function(input) {
  input.addEventListener('change', function() {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
    if (this.value == '') {
      this.value = 1;
    }
    if (this.value > parseInt(this.dataset.maxCount)) {
      this.value = parseInt(this.dataset.maxCount);
    }
  });

  input.addEventListener('keyup', function() {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
  });

  input.addEventListener('input', function() {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
  });

  input.addEventListener('click', function() {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
  });
});
