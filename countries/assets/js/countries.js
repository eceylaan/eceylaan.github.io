const countriesContainer = document.querySelector(".container");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
let id = 21;
let editId = undefined;

let countries = [
  {
    id: 1,
    countryName: "Turkey",
    population: 84200000,
    flag: "🇹🇷",
    famousFood: "Kebab",
    capitalCity: "Ankara",
  },
  {
    id: 2,
    countryName: "Italy",
    population: 60480000,
    flag: "🇮🇹",
    famousFood: "Pizza",
    capitalCity: "Rome",
  },
  {
    id: 3,
    countryName: "Japan",
    population: 125800000,
    flag: "🇯🇵",
    famousFood: "Sushi",
    capitalCity: "Tokyo",
  },
  {
    id: 4,
    countryName: "Brazil",
    population: 212600000,
    flag: "🇧🇷",
    famousFood: "Feijoada",
    capitalCity: "Brasilia",
  },
  {
    id: 5,
    countryName: "India",
    population: 1393000000,
    flag: "🇮🇳",
    famousFood: "Curry",
    capitalCity: "New Delhi",
  },
  {
    id: 6,
    countryName: "France",
    population: 65270000,
    flag: "🇫🇷",
    famousFood: "Baguette",
    capitalCity: "Paris",
  },
  {
    id: 7,
    countryName: "Mexico",
    population: 126000000,
    flag: "🇲🇽",
    famousFood: "Tacos",
    capitalCity: "Mexico City",
  },
  {
    id: 8,
    countryName: "China",
    population: 1441000000,
    flag: "🇨🇳",
    famousFood: "Peking Duck",
    capitalCity: "Beijing",
  },
  {
    id: 9,
    countryName: "Greece",
    population: 10420000,
    flag: "🇬🇷",
    famousFood: "Moussaka",
    capitalCity: "Athens",
  },
  {
    id: 10,
    countryName: "Spain",
    population: 47350000,
    flag: "🇪🇸",
    famousFood: "Paella",
    capitalCity: "Madrid",
  },
  {
    id: 11,
    countryName: "Germany",
    population: 83100000,
    flag: "🇩🇪",
    famousFood: "Bratwurst",
    capitalCity: "Berlin",
  },
  {
    id: 12,
    countryName: "United States",
    population: 331900000,
    flag: "🇺🇸",
    famousFood: "Burger",
    capitalCity: "Washington, D.C.",
  },
  {
    id: 13,
    countryName: "South Korea",
    population: 51840000,
    flag: "🇰🇷",
    famousFood: "Kimchi",
    capitalCity: "Seoul",
  },
  {
    id: 14,
    countryName: "Egypt",
    population: 104100000,
    flag: "🇪🇬",
    famousFood: "Koshary",
    capitalCity: "Cairo",
  },
  {
    id: 15,
    countryName: "Russia",
    population: 145900000,
    flag: "🇷🇺",
    famousFood: "Borscht",
    capitalCity: "Moscow",
  },
  {
    id: 16,
    countryName: "Australia",
    population: 25690000,
    flag: "🇦🇺",
    famousFood: "Vegemite",
    capitalCity: "Canberra",
  },
  {
    id: 17,
    countryName: "Thailand",
    population: 69790000,
    flag: "🇹🇭",
    famousFood: "Pad Thai",
    capitalCity: "Bangkok",
  },
  {
    id: 18,
    countryName: "Argentina",
    population: 45380000,
    flag: "🇦🇷",
    famousFood: "Asado",
    capitalCity: "Buenos Aires",
  },
  {
    id: 19,
    countryName: "Canada",
    population: 38000000,
    flag: "🇨🇦",
    famousFood: "Poutine",
    capitalCity: "Ottawa",
  },
  {
    id: 20,
    countryName: "South Africa",
    population: 59310000,
    flag: "🇿🇦",
    famousFood: "Biltong",
    capitalCity: "Pretoria",
  },
];
if (localStorage.id) {
  id = Number(localStorage.id);
}
if (localStorage.countriesList) {
  countries = JSON.parse(localStorage.countriesList);
  render();
}

function render() {
  countriesContainer.innerHTML = "";
  for (let i = 0; i < countries.length; i++) {
    countriesContainer.innerHTML += `
  <div class="country">
    <p>Country: ${countries[i].countryName}</p>
    <p>Population: ${countries[i].population}</p>
    <p>Flag: ${countries[i].flag}</p>
    <p>Famous Food: ${countries[i].famousFood}</p>
    <p>Capital City: ${countries[i].capitalCity}</p>
    <button data-id="${countries[i].id}" id="editBtn">Edit</button>
    <button data-id="${countries[i].id}" id="delBtn">Delete</button>
      </div>
  `;
  }
  document.querySelectorAll("#editBtn").forEach((btn) => {
    btn.addEventListener("click", handleEdit);
  });
  document.querySelectorAll("#delBtn").forEach((btn) => {
    btn.addEventListener("click", handleDelete);
  });
}
render();

function handleEdit(e) {
  e.preventDefault();
  const id = this.dataset.id;
  editId = id;
  const country = countries.find((x) => x.id === Number(editId));
  console.log(country);
  form.elements.countryName.value = country.countryName;
  form.elements.flag.value = country.flag;
  form.elements.famousFood.value = country.famousFood;
  form.elements.capitalCity.value = country.capitalCity;
  form.elements.population.value = country.population;
  form.children[5].innerHTML = "Edit";

  dialog.open = true;
}

function handleDelete() {
  const id = this.dataset.id;
  countries = countries.filter((x) => Number(x.id) !== Number(id));
  render();
}

function handleFormSubmit(e) {
  e.preventDefault();
  let formData = new FormData(form);
  let formObj = Object.fromEntries(formData);
  console.log(formObj);
  if (editId !== undefined) {
    // guncelle

    let country = countries.find((x) => x.id === Number(editId));
    country.countryName = formObj.countryName;
    country.flag = formObj.flag;
    country.famousFood = formObj.famousFood;
    country.capitalCity = formObj.capitalCity;
    country.population = formObj.population;
    editId = undefined;
  } else {
    // yeni ekle
    formObj.id = generateId();
    countries.push(formObj);
  }
  form.reset();

  save();
  dialog.open = false;
  dialog.close();
  render();
}

form.addEventListener("submit", handleFormSubmit);

function save() {
  localStorage.countriesList = JSON.stringify(countries);
}

function generateId() {
  id++;
  localStorage.id = id;
  return id;
}
function addCountry() {
  dialog.open = true;
  form.children[5].innerHTML = "Add";
}
addBtn.addEventListener("click", addCountry);
