let tarifler = [];

function renderTarifler() {
  console.log(tarifListesi);
  tarifListesi.innerHTML = tarifler
    .map(
      (tarif) => `  
    <div class="card-content">
    <p>${tarif.name}</p>
    <p>Malzemeler</p>
    <ul>
      ${tarif.ingredients.map((x) => `<li>${x}</li>`).join("")}
    </ul>
    <p>Yapılacaklar</p>
    <ol>
      ${tarif.instructions.map((x) => `<li>${x}</li>`).join("")}
    </ol>
    </div>`
    )
    .join("");
}

// function renderTarifler() {
//   console.log(tarifListesi);
//   tarifListesi.innerHTML = tarifler
//     .map(
//       (tarif) => {
// return `
//     <div class="card-content">
//     <p>${tarif.name}</p>
//     <p>Malzemeler</p>
//     <ul>
//       ${tarif.ingredients.map((x) => `<li>${x}</li>`).join("")};
//     </ul>
//     <p>Yapılacaklar</p>
//     <ol>
//       ${tarif.instructions.map((x) => `<li>${x}</li>`).join("")};
//     </ol>
//     </div>`
//     })
//     .join("");
// } curly bracket açarsan return ettirmelisin

function init() {
  fetch("https://dummyjson.com/recipes")
    .then((res) => res.json())
    .then((res) => {
      tarifler = res.recipes;
      console.log(tarifler);
      renderTarifler();
    });
}

init();
