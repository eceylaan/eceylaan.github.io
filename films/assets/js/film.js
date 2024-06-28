let form = document.querySelector("form");
let moviesList = document.querySelector(".movies-list");
let sciencefictionList = document.querySelector(".science-fiction-list");
let actionList = document.querySelector(".action-list");
let comedyList = document.querySelector(".comedy-list");
let fantasticList = document.querySelector(".fantastic-list");
let romanticcomedyList = document.querySelector(".romantic-comedy-list");
let sortedList = document.querySelector(".sorted-list");

let movies = [
  {
    name: "Top Gun",
    category: "Aksiyon",
    storyline: "bla",
    point: "7",
    image: "topgun.jpg",
  },
];
if (typeof localStorage.movieList !== "undefined") {
  movies = JSON.parse(localStorage.movieList);
}

let comedyMovie = [];
let actionMovie = [];
let romanticcomedyMovie = [];
let fantasticMovie = [];
let sciencefictionMovie = [];
let sortedByPoint = [];

function HandleSubmit(e) {
  e.preventDefault();
  let formData = new FormData(form);
  let formObj = Object.fromEntries(formData);
  if (formObj.category === "Seçiniz") {
    formObj.category = "--";
  }
  let newObj = {
    name: formObj.name,
    category: formObj.category,
    storyline: formObj.storyline,
    point: formObj.point,
    image: formObj["pick-image"].name,
  };
  movies.push(newObj);
  renderMovies();
  saveToLocalStorage();
  form.reset();
}

form.addEventListener("submit", HandleSubmit);

function renderMovies() {
  filterCategories();
  moviesList.innerHTML = "";

  for (let i = 0; i < movies.length; i++) {
    moviesList.innerHTML += `
  <li class="list">
  <p>İsim: ${movies[i].name}</p>
  <p>Kategori: ${movies[i].category}</p>
  <p>Konusu ${movies[i].storyline}</p>
  <p>Puan: ${movies[i].point}</p>
  <img width='200px' src="/assets/img/${movies[i].image}">
    </li>
  `;
  }
}
renderMovies();

function saveToLocalStorage() {
  localStorage.movieList = JSON.stringify(movies);
}
function filterCategories() {
  for (let i = 0; i < movies.length; i++) {
    let innerInsert = `<li class="list">
    <p>${movies[i].name}</p>
    <p>${movies[i].category}</p>
    <p>${movies[i].storyline}</p>
    <p>${movies[i].point}</p>
    <img width='200px' src="/assets/img/${movies[i].image}">
    // </li>`;
    // actionMovie = movies.filter((movie) => movie.category === "Aksiyon")
    // actionMovie.map((x)=>innerHTML);
    if (movies[i].category === "Aksiyon") {
      actionMovie.push(movies[i]);
      actionList.innerHTML = innerInsert;
    } else if (movies[i].category === "Bilim Kurgu") {
      sciencefictionList.innerHTML = innerInsert;
    } else if (movies[i].category === "Fantastik") {
      fantasticMovie.push(movies[i]);
      fantasticList.innerHTML = innerInsert;
    } else if (movies[i].category === "Komedi") {
      comedyMovie.push(movies[i]);
      comedyList.innerHTML = innerInsert;
    } else if (movies[i].category === "Romantik Komedi") {
      romanticcomedyMovie.push(movies[i]);
      romanticcomedyList.innerHTML = innerInsert;
    } else {
      console.error("GG");
    }
  }
}
function pointSort() {
  for (let i = 0; i < movies.length; i++) {
    // hocaya sor
  }
}
