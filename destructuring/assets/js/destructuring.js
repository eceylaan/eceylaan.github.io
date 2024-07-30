// Dizi Destructuring
// let numbers = [1, 2, 3];
// let [a, b, c] = numbers;

// console.log (a);
// console.log (b);
// console.log (c);

// let numbers = [1, 2, 3, 4, 5];
// let [first, ,third, ,fifth] = numbers;

// console.log (first);
// console.log (third);
// console.log (fifth);

// Nesne Desturcturing
// let person = {
//   name: "Arda",
//   age: "35",
//   city: "Erzincan",
// };

// let name = person.name;
// let age = person.age;
// let city = person.city;

// console.log (name);
// console.log (age);
// console.log (city);

// let {name :n, age: a, city: c} = person;

// console.log (n);
// console.log (a);
// console.log (c);

// let person = {
//   name: "Arda",
//   age: "35",
//   country: "Türkiye",
// };

// let { name, age, city = "Belirtilmemiş" } = person;
// let { name, age, city = ? sehir: "Belirtilmemiş" } = person;
//varsa goster yoksa belirtilmemis yazdir

// console.log (name);
// console.log (age);
// console.log (city);

let person = {
  name: "Ece",
  surname: "Ceylan",
  age: "24",
  city: "İstanbul",
  hobby: "kod yazmak",
  fobby: "böcek",
  address: {
    city: "İstanbul",
    district: "Zeytinburnu",
    neighbourhood: "Telsiz",
    street: "Dursun Kılıç",
  },
};

function sayMyName ({name}){
  
}
