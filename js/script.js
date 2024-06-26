/* Переключение темы */

let lightThemeButton = document.querySelector(".theme-button-light");
let darkThemeButton = document.querySelector(".theme-button-dark");

lightThemeButton.addEventListener("click", () => {
  lightThemeButton.classList.add("active");
  darkThemeButton.classList.remove("active");
  document.body.classList.remove("dark");
});

darkThemeButton.addEventListener("click", () => {
  darkThemeButton.classList.add("active");
  lightThemeButton.classList.remove("active");
  document.body.classList.add("dark");
});

/* Переключение шрифта */

let sansSerifButton = document.querySelector(".font-button-sans-serif");
let serifButton = document.querySelector(".font-button-serif");

sansSerifButton.addEventListener("click", () => {
  sansSerifButton.classList.add("active");
  serifButton.classList.remove("active");
  document.body.classList.remove("serif");
});

serifButton.addEventListener("click", () => {
  serifButton.classList.add("active");
  sansSerifButton.classList.remove("active");
  document.body.classList.add("serif");
});

// соберем в коллекцию все статьи
let blogArticles = document.querySelectorAll(".blog-article");
// переберем коллекцию в цикле
for (let blogArticle of blogArticles) {
  // для каждой статьи найдем кнопку
  let moreButton = blogArticle.querySelector(".more");
  // добавляем обрабочик клика на кнопку
  moreButton.onclick = function (evt) {
    // переключаем класс на элементе
    blogArticle.classList.remove("short");
  };
}

/* Переключение раскладки карточек */

let gridButton = document.querySelector(".card-view-button-grid");
let listButton = document.querySelector(".card-view-button-list");
let cardsList = document.querySelector(".cards");

gridButton.addEventListener("click", () => {
  cardsList.classList.remove("list");
  gridButton.classList.add("active");
  listButton.classList.remove("active");
});

listButton.addEventListener("click", () => {
  cardsList.classList.add("list");
  listButton.classList.add("active");
  gridButton.classList.remove("active");
});

// --- галерея ---
let activePhoto = document.querySelector(".active-photo");
let previews = document.querySelectorAll(".preview-list a");

for (let preview of previews) {
  preview.addEventListener("click", (evt) => {
    evt.preventDefault();

    let currentActive = document.querySelector(".preview-list .active-item");
    currentActive.classList.remove("active-item");
    preview.classList.add("active-item");

    activePhoto.src = preview.href;
  });
}
