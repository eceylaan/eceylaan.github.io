countriesContainer = document.querySelector(".container");
let countries = [
  {
    countryName: "Turkey",
    population: 84200000,
    flag: "🇹🇷",
    famousFood: "Kebab",
    capitalCity: "Ankara",
  },
  {
    countryName: "Italy",
    population: 60480000,
    flag: "🇮🇹",
    famousFood: "Pizza",
    capitalCity: "Rome",
  },
  {
    countryName: "Japan",
    population: 125800000,
    flag: "🇯🇵",
    famousFood: "Sushi",
    capitalCity: "Tokyo",
  },
  {
    countryName: "Brazil",
    population: 212600000,
    flag: "🇧🇷",
    famousFood: "Feijoada",
    capitalCity: "Brasilia",
  },
  {
    countryName: "India",
    population: 1393000000,
    flag: "🇮🇳",
    famousFood: "Curry",
    capitalCity: "New Delhi",
  },
  {
    countryName: "France",
    population: 65270000,
    flag: "🇫🇷",
    famousFood: "Baguette",
    capitalCity: "Paris",
  },
  {
    countryName: "Mexico",
    population: 126000000,
    flag: "🇲🇽",
    famousFood: "Tacos",
    capitalCity: "Mexico City",
  },
  {
    countryName: "China",
    population: 1441000000,
    flag: "🇨🇳",
    famousFood: "Peking Duck",
    capitalCity: "Beijing",
  },
  {
    countryName: "Greece",
    population: 10420000,
    flag: "🇬🇷",
    famousFood: "Moussaka",
    capitalCity: "Athens",
  },
  {
    countryName: "Spain",
    population: 47350000,
    flag: "🇪🇸",
    famousFood: "Paella",
    capitalCity: "Madrid",
  },
  {
    countryName: "Germany",
    population: 83100000,
    flag: "🇩🇪",
    famousFood: "Bratwurst",
    capitalCity: "Berlin",
  },
  {
    countryName: "United States",
    population: 331900000,
    flag: "🇺🇸",
    famousFood: "Burger",
    capitalCity: "Washington, D.C.",
  },
  {
    countryName: "South Korea",
    population: 51840000,
    flag: "🇰🇷",
    famousFood: "Kimchi",
    capitalCity: "Seoul",
  },
  {
    countryName: "Egypt",
    population: 104100000,
    flag: "🇪🇬",
    famousFood: "Koshary",
    capitalCity: "Cairo",
  },
  {
    countryName: "Russia",
    population: 145900000,
    flag: "🇷🇺",
    famousFood: "Borscht",
    capitalCity: "Moscow",
  },
  {
    countryName: "Australia",
    population: 25690000,
    flag: "🇦🇺",
    famousFood: "Vegemite",
    capitalCity: "Canberra",
  },
  {
    countryName: "Thailand",
    population: 69790000,
    flag: "🇹🇭",
    famousFood: "Pad Thai",
    capitalCity: "Bangkok",
  },
  {
    countryName: "Argentina",
    population: 45380000,
    flag: "🇦🇷",
    famousFood: "Asado",
    capitalCity: "Buenos Aires",
  },
  {
    countryName: "Canada",
    population: 38000000,
    flag: "🇨🇦",
    famousFood: "Poutine",
    capitalCity: "Ottawa",
  },
  {
    countryName: "South Africa",
    population: 59310000,
    flag: "🇿🇦",
    famousFood: "Biltong",
    capitalCity: "Pretoria",
  },
];

function render() {
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
}

render();
