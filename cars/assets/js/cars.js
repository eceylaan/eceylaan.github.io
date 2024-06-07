let cars = [
  {
    brand: "Ford",
    model: "Mustang",
    color: "Blue"
  },
  {
    brand: "BMW",
    model: "3 Serisi",
    color: "Black"
  },
  {
    brand: "Mercedes-Benz",
    model: "E Serisi",
    color: "Red"
  },
  {
    brand: "Toyota",
    model: "Corolla",
    color: "White"
  },
  {
    brand: "Honda",
    model: "Civic",
    color: "Grey"
  },
  {
    brand: "Volkswagen",
    model: "Golf",
    color: "Green"
  },
  {
    brand: "Audi",
    model: "A4",
    color: "Orange"
  },
  {
    brand: "Porsche",
    model: "911",
    color: "Yellow"
  },
  {
    brand: "Ferrari",
    model: "488 GTB",
    color: "Dark Blue"
  },
  {
    brand: "Lamborghini",
    model: "Aventador",
    color: "Gold"
  },
  {
    brand: "Tesla",
    model: "Model S",
    color: "Silver"
  },
  {
    brand: "Subaru",
    model: "Impreza",
    color: "Purple"
  },
  {
    brand: "Chevrolet",
    model: "Camaro",
    color: "Turquoise"
  },
  {
    brand: "Hyundai",
    model: "Tucson",
    color: "Brown"
  },
  {
    brand: "Kia",
    model: "Sportage",
    color: "Pink"
  },
  {
    brand: "Nissan",
    model: "Altima",
    color: "White"
  },
  {
    brand: "Jaguar",
    model: "F-Type",
    color: "Black"
  },
  {
    brand: "Land Rover",
    model: "Range Rover",
    color: "Grey"
  },
  {
    brand: "Volvo",
    model: "XC90",
    color: "Green"
  },
  {
    brand: "Mazda",
    model: "MX-5",
    color: "Red"
  }
];


let boxes = document.querySelectorAll('.box');

for (let i = 0; i < boxes.length; i++) {

  if (cars[i]) {

    let brandElement = boxes[i].querySelector('.brand');
    let modelElement = boxes[i].querySelector('.model');
    let colorElement = boxes[i].querySelector('.color');

    brandElement.innerText = `Brand: ${cars[i].brand}`;
    modelElement.innerText = `Model: ${cars[i].model}`;
    colorElement.innerText = `Color: ${cars[i].color}`;
  }
}


