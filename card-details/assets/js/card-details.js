let cardNumber = document.querySelector(".card-number");
let cardName = document.querySelector(".card-name");
let cardDate = document.querySelector(".card-date");
let cardCvv = document.querySelector(".cvv-number");

let cardNumber1 = document.querySelector(".card-number-1");
let cardName1 = document.querySelector(".card-name-1");
let cardDate1 = document.querySelector(".card-date-1");
let cardCvv1 = document.querySelector(".cvv-number-1");

let inputName = document.getElementById("cardName");
let inputNumber = document.getElementById("cardNumber");
let inputMounth = document.getElementById("mounth");
let form = document.querySelector(".form-container");
let correct = document.querySelector(".display");
let inputYear = document.getElementById("year");
let inputCvv = document.getElementById("cvv");
let btn = document.querySelector(".btn");
let required = document.querySelector(".required");
let required1 = document.querySelector(".required-1");
let required2 = document.querySelector(".required-2");

function keyName() {
  cardName.innerHTML = inputName.value;
  cardName1.innerHTML = inputName.value;
}
inputName.addEventListener("keyup", keyName);

function keyNumber() {
  cardNumber.innerHTML = inputNumber.value;
  cardNumber1.innerHTML = inputNumber.value;
}
inputNumber.addEventListener("keyup", keyNumber);

function keyMounth() {
  cardDate.innerHTML = inputMounth.value;
  cardDate1.innerHTML = inputMounth.value;
}
inputMounth.addEventListener("keyup", keyMounth);

function keyYear() {
  cardDate.innerHTML = `${inputMounth.value} / ${inputYear.value}`;
  cardDate1.innerHTML = `${inputMounth.value} / ${inputYear.value}`;
}
inputYear.addEventListener("keyup", keyYear);

function keyCvv() {
  cardCvv.innerHTML = inputCvv.value;
  cardCvv1.innerHTML = inputCvv.value;
}
inputCvv.addEventListener("keyup", keyCvv);

function handleSubmit(event) {
  event.preventDefault();

  if (
    inputNumber.value != "" &&
    inputMounth.value != "" &&
    inputYear.value != "" &&
    inputCvv.value != ""
  ) {
    form.setAttribute("style", "display:none !important;");
    correct.setAttribute("style", "display:block;");
  } else {
    form.setAttribute("style", "display:block !important;");
  }

  if (inputNumber.value == "") {
    required.innerHTML = "Wrong format, numbers only";
    inputNumber.setAttribute("style", "border: 1px solid red;");
  } else {
    required.innerHTML = "";
    inputNumber.setAttribute("style", "border: 1px solid ADB5BE;");
  }

  //mounth and year required

  if (inputMounth.value == "") {
    required1.innerHTML = "Can’t be blank";
    inputMounth.setAttribute("style", "border: 1px solid red;");
  } else {
    required1.innerHTML = "";
    inputMounth.setAttribute("style", "border: 1px solid ADB5BE;");
  }

  if (inputYear.value == "") {
    required1.innerHTML = "Can’t be blank";
    inputYear.setAttribute("style", "border: 1px solid red;");
  } else {
    required1.innerHTML = "";
    inputYear.setAttribute("style", "border: 1px solid ADB5BE;");
  }

  if (inputCvv.value == "") {
    required2.innerHTML = "Can’t be blank";
    required2.setAttribute("style", "align-self:end;");
    inputCvv.setAttribute("style", "border: 1px solid red;");
  } else {
    required2.innerHTML = "";
    inputCvv.setAttribute("style", "border: 1px solid ADB5BE;");
  }
}

btn.addEventListener("click", handleSubmit);
