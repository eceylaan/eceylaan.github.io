let cities = [
  {
    city: "Adana",
    famousFor: "Kebap",
    type: "food",
    plateNumber: "01"

  },
  {
    city: "Ankara",
    famousFor: "Simidi",
    type: "food",
    plateNumber: "06"
  },
  {
    city: "İstanbul",
    famousFor: "Boğaz",
    type: "place",
    plateNumber: "34"
  },
  {
    city: "İzmir",
    famousFor: "Boyoz",
    type: "food",
    plateNumber: "35"
  },
  {
    city: "Bursa",
    famousFor: "İskender Kebabı",
    type: "food",
    plateNumber: "16"
  },
  {
    city: "Antalya",
    famousFor: "Düden Şelalesi",
    type: "place",
    plateNumber: "07"
  },
  {
    city: "Gaziantep",
    famousFor: "Baklava",
    type: "food",
    plateNumber: "27"
  },
  {
    city: "Konya",
    famousFor: "Etli Ekmek",
    type: "food",
    plateNumber: "42"
  },
  {
    city: "Trabzon",
    famousFor: "Hamsi",
    type: "food",
    plateNumber: "61"
  },
  {
    city: "Kayseri",
    famousFor: "Mantı",
    type: "food",
    plateNumber: "38"
  },
  {
    city: "Eskişehir",
    famousFor: "Lületaşı",
    type: "place",
    plateNumber: "26"
  },
  {
    city: "Rize",
    famousFor: "Çay",
    type: "food",
    plateNumber: "53"
  },
  {
    city: "Erzurum",
    famousFor: "Cağ Kebabı",
    type: "food",
    plateNumber: "25"
  },
  {
    city: "Diyarbakır",
    famousFor: "Karpuz",
    type: "food",
    plateNumber: "21"
  },
  {
    city: "Mardin",
    famousFor: "Taş Evler",
    type: "place",
    plateNumber: "47"
  },
  {
    city: "Van",
    famousFor: "Van Kedisi",
    type: "place",
    plateNumber: "65"
  },
  {
    city: "Sivas",
    famousFor: "Kangal Köpeği",
    type: "place",
    plateNumber: "58"
  },
  {
    city: "Şanlıurfa",
    famousFor: "Balıklıgöl",
    type: "place",
    plateNumber: "63"
  },
  {
    city: "Mersin",
    famousFor: "Tantuni",
    type: "food",
    plateNumber: "33"
  },
  {
    city: "Muğla",
    famousFor: "Turistik Yerleri",
    type: "place",
    plateNumber: "48"
  },
  {
    city: "Çanakkale",
    famousFor: "Tarihi Gelibolu Yarımadası",
    type: "place",
    plateNumber: "17"
  },
  {
    city: "Hatay",
    famousFor: "Antakya Mozaikleri",
    type: "place",
    plateNumber: "31"
  },
  {
    city: "İzmir",
    famousFor: "Efes Antik Kenti",
    type: "place",
    plateNumber: "35"
  },
  {
    city: "Nevşehir",
    famousFor: "Kapadokya",
    type: "place",
    plateNumber: "50"
  },
  {
    city: "Aydın",
    famousFor: "Milet Antik Kenti",
    type: "place",
    plateNumber: "09"
  }
];

let typeFood = [];
let typePlace = [];
let plateNumberOdd = [];
let plateNumberEven = [];


let container = document.getElementById('cities-container');

for (let i = 0; i < cities.length; i++) {
  let cityCard = document.createElement('div');
  cityCard.classList.add('city-card');

  cityCard.innerHTML = `
  <h3>${cities[i].city}</h3>
  <p>Famous for: ${cities[i].famousFor}</p>
  <p>Type: ${cities[i].type}</p>
  <p>Plate Number: ${cities[i].plateNumber}</p>
`;
  container.appendChild(cityCard);

  if (cities[i].type === 'food') {
    typeFood.push(cities[i]);
  }
  else {
    typePlace.push(cities[i]);
  }

  if (Number(cities[i].plateNumber) % 2 === 0) {
    plateNumberEven.push(cities[i]);
  }

  else {
    plateNumberOdd.push(cities[i]);
  }
}
for (let i = 0; i < typeFood.length; i++) {
  let typeFoodDiv = document.createElement("div");
  typeFoodDiv.innerHTML = `
    <h3>${typeFood[i].city}</h3>
    <p>Famous for: ${typeFood[i].famousFor}</p>
    <p>Type: ${typeFood[i].type}</p>
    <p>Plate Number: ${typeFood[i].plateNumber}</p>
  `;
  typeFoodDiv.classList.add("city-card");
  container.appendChild(typeFoodDiv);
}

for (let i = 0; i < typePlace.length; i++) {
  let typePlaceDiv = document.createElement("div");
  typePlaceDiv.innerHTML = `
    <h3>${typePlace[i].city}</h3>
    <p>Famous for: ${typePlace[i].famousFor}</p>
    <p>Type: ${typePlace[i].type}</p>
    <p>Plate Number: ${typePlace[i].plateNumber}</p>
  `;
  typePlaceDiv.classList.add("city-card");
  container.appendChild(typePlaceDiv);
}

for (let i = 0; i < plateNumberOdd.length; i++) { }
let plateOddDiv = document.createElement("div");

plateOddDiv.innerHTML = `
    <h3>${plateNumberOdd[i].city}</h3>
    <p>Famous for: ${plateNumberOdd[i].famousFor}</p>
    <p>Type: ${plateNumberOdd[i].type}</p>
    <p>Plate Number: ${plateNumberOdd[i].plateNumber}</p>
  `;
plateOddDiv.classList.add("city-card");
container.appendChild(plateOddDiv);

for (let i = 0; i < plateNumberEven.length; i++) {
  let plateEvenDiv = document.createElement("div");
  plateEvenDiv.innerHTML = `
    <h3>${plateNumberEven[i].city}</h3>
    <p>Famous for: ${plateNumberEven[i].famousFor}</p>
    <p>Type: ${plateNumberEven[i].type}</p>
    <p>Plate Number: ${plateNumberEven[i].plateNumber}</p>
  `;
  plateOddDiv.classList.add("city-card");
  container.appendChild(plateEvenDiv);
}








