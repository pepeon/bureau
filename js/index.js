const form = document.querySelector(".form-container");
const buttons = document.querySelectorAll(".btn-connect");
const overlay = document.querySelector(".overlay");
const fileBtn = document.querySelector(".file-upload");
const fileOpen = document.querySelector(".form_input-file");
const formFile = document.querySelector(".form__file");
const fileInfo = document.querySelector(".file-info");
const formDoc = document.querySelector(".form__doc");
const burgerBtn = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".burger__menu");
const body = document.body;
const maxSize = 5 * 1024 * 1024;
let count = 3;

const formClick = () => {
  form.classList.toggle("form__block");
  overlay.classList.toggle("form__block");
  body.classList.toggle("html-pad");
};

fileBtn.addEventListener("click", () => {
  fileOpen.click();
});

overlay.addEventListener("click", () => {
  if (burgerBtn.classList.contains("burger__clicked")) {
    overlay.classList.remove("form__block");
    burgerMenu.classList.remove("burger__menu--active");
    body.classList.remove("html-pad");
    burgerBtn.classList.remove("burger__clicked");
  } else {
    form.classList.remove("form__block");
    overlay.classList.remove("form__block");
    body.classList.remove("html-pad");
  }
});

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger__clicked");
  burgerMenu.classList.toggle("burger__menu--active");
  overlay.classList.toggle("form__block");
  body.classList.toggle("body-dark");
  body.classList.toggle("html-pad");
});

fileOpen.addEventListener("change", (e) => {
  const sizeFile = [...e.target.files].at(-1).size;
  const countFiles = [...e.target.files].length;

  if (sizeFile > maxSize) {
    fileInfo.textContent = `Превышен максимальный размер файла (5мб)`;
    fileInfo.style.color = "red";
    formDoc.classList.remove("form__block");
  } else if (count < countFiles) {
    fileInfo.textContent = `Загружено больше 3 файлов`;
    fileInfo.style.color = "red";
    formDoc.classList.remove("form__block");
  } else {
    formDoc.classList.add("form__block");
    countFiles === 1
      ? (fileInfo.textContent = `Загружен ${countFiles} файл`)
      : (fileInfo.textContent = `Загружено ${countFiles} файла`);

    fileInfo.style.color = "#614d49";
  }
});

buttons.forEach((element) => {
  element.addEventListener("click", () => formClick());
});
