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
    type: "place",
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

// function fillCitiesInfo(cities) {
//   let citiesInfo = `
//   <p><strong>ID:</strong> ${cities.city}</p>
//   <p><strong>Name:</strong> ${cities.famousFor}</p>
//   <p><strong>Lastname:</strong> ${cities.type}</p>
//   <p><strong>Gender:</strong> ${cities.plateNumber}</p>
// `;

//   return citiesInfo;
// }

// console.log(cities);

let container = document.getElementById('cities-container');

// let allCitiesContainer = document.getElementById('cities-container');
// let foodCitiesContainer = document.getElementById('food-cities');
// let placeCitiesContainer = document.getElementById('place-cities');
// let oddPlateCitiesContainer = document.getElementById('odd-plate-cities');
// let evenPlateCitiesContainer = document.getElementById('even-plate-cities');

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
}






// let students = [
//   {
//     id: 1,
//     name: "Arda",
//     lastname: "Toraman",
//     gender: "Erkek",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 2,
//     name: "Aysu",
//     lastname: "Aşçı",
//     gender: "Kadın",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 3,
//     name: "Berat",
//     lastname: "Dimen",
//     gender: "Erkek",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 4,
//     name: "Berk",
//     lastname: "Uçar",
//     gender: "Erkek",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 5,
//     name: "Doğa",
//     lastname: "Savaş",
//     gender: "Kadın",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 6,
//     name: "Doğukan",
//     lastname: "Sarı",
//     gender: "Erkek",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 7,
//     name: "Ece",
//     lastname: "Ceylan",
//     gender: "Kadın",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 8,
//     name: "Emre",
//     lastname: "Özçalkap",
//     gender: "Erkek",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 9,
//     name: "Fatih Can",
//     lastname: "Kaya",
//     gender: "Erkek",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 10,
//     name: "Furkan",
//     lastname: "Coşar",
//     gender: "Erkek",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 11,
//     name: "Gökhan",
//     lastname: "Ünlü",
//     gender: "Erkek",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 12,
//     name: "Halil İbrahim",
//     lastname: "Korkmaz",
//     gender: "Erkek",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 13,
//     name: "Kemal",
//     lastname: "Özalp",
//     gender: "Erkek",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 14,
//     name: "Kerem",
//     lastname: "Kaçmaz",
//     gender: "Erkek",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 15,
//     name: "Melek",
//     lastname: "Dal",
//     gender: "Kadın",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 16,
//     name: "Muhammed Baki",
//     lastname: "Çağlayan",
//     gender: "Erkek",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 17,
//     name: "Muhammed",
//     lastname: "Yazıcı",
//     gender: "Erkek",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 18,
//     name: "Muhammet Hasan",
//     lastname: "Türkmen",
//     gender: "Erkek",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 19,
//     name: "Ömer",
//     lastname: "Fırat",
//     gender: "Erkek",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 20,
//     name: "Sema",
//     lastname: "Bekdemir",
//     gender: "Kadın",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 21,
//     name: "Sıla",
//     lastname: "Kara",
//     gender: "Kadın",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 22,
//     name: "Sudenur",
//     lastname: "Taştekin",
//     gender: "Kadın",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
//   {
//     id: 23,
//     name: "Tunahan",
//     lastname: "Orak",
//     gender: "Erkek",
//     section: "Frontend",
//     role: "Öğrenci",
//   },
// ];
// function fillStudentInfo(student) {
//   let studentInfo = `
//   <p><strong>ID:</strong> ${student.id}</p>
//   <p><strong>Name:</strong> ${student.name}</p>
//   <p><strong>Lastname:</strong> ${student.lastname}</p>
//   <p><strong>Gender:</strong> ${student.gender}</p>
//   <p><strong>Section:</strong> ${student.section}</p>
//   <p><strong>Role:</strong> ${student.role}</p>
// `;
//   return studentInfo;
// }
// let container = document.getElementById("students-container");
// let boys = [];
// let girls = [];
// for (let i = 0; i < students.length; i++) {

//   if (students[i].gender === "Kadın") {
//     girls.push(students[i]);
//   } else {
//     boys.push(students[i]);
//   }
// }

// let genderNumbers = document.createElement("div");
// genderNumbers.innerHTML = `<h3>girls:</h3> ${girls.length} <h3>boys:</h3> ${boys.length}`;
// genderNumbers.style.marginBottom = "70px"
// genderNumbers.style.textAlign = 'center'
// document.body.append(genderNumbers);

// for (let i = 0; i < girls.length; i++) {
//   let girlDiv = document.createElement("div");
//   girlDiv.innerHTML = fillStudentInfo(girls[i]);
//   girlDiv.classList.add("student-card");
//   girlDiv.classList.add("pink-bg");
//   container.appendChild(girlDiv);
// }

// for (let i = 0; i < boys.length; i++) {
//   let boyDiv = document.createElement("div");
//   boyDiv.innerHTML = fillStudentInfo(boys[i]);
//   boyDiv.classList.add("student-card");
//   boyDiv.classList.add("blue-bg");
//   container.appendChild(boyDiv);
// }




// function createCityCard(city) {
//   let card = document.createElement('div');
//   card.className = 'city-card';
//   card.innerHTML = `
//     <h3>${city.city}</h3>
//     <p><strong>Ünlü:</strong> ${city.famousFor}</p>
//     <p><strong>Plaka:</strong> ${city.plateNumber}</p>
//   `;
//   return card;
// }

// let allCitiesContainer = document.getElementById('all-cities');
// let foodCitiesContainer = document.getElementById('food-cities');
// let placeCitiesContainer = document.getElementById('place-cities');
// let oddPlateCitiesContainer = document.getElementById('odd-plate-cities');
// let evenPlateCitiesContainer = document.getElementById('even-plate-cities');

// for (let i = 0; i < cities.length; i++) {
//   let cityCard = createCityCard(cities[i]);
//   allCitiesContainer.appendChild(cityCard);

// }