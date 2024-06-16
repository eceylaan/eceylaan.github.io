let gelir = document.querySelector("#gelir");
let gider = document.querySelector("#gider");
let gelirlist = document.querySelector("#gelirlistesi");
let giderlist = document.querySelector("#giderlistesi");
let totalDivs = document.querySelectorAll(".total");
let situation = document.querySelector(".situation");
let gelirbtn = document.querySelector("#ekle-gelir");
let giderbtn = document.querySelector("#ekle-gider");
let gelirTemizle = document.querySelector("#temizle-gelir");
let giderTemizle = document.querySelector("#temizle-gider");

let gelirList = [];
let giderList = [];

if (typeof localStorage.gelirim !== "undefined") {
  gelirList = JSON.parse(localStorage.gelirim);
}
if (typeof localStorage.giderim !== "undefined") {
  giderList = JSON.parse(localStorage.giderim);
}

function addToList() {
  if (gelir.value == "" && gider.value == "") {
    alert("you can not enter empty value");
    return;
  }
  if (gelir.value) {
    gelirlist.innerHTML += gelir.value ? `<li>${gelir.value}</li>` : "";
    gelirList.push(gelir.value);
  }
  if (gider.value) {
    giderlist.innerHTML += gider.value ? `<li>${gider.value}</li>` : "";
    giderList.push(gider.value);
  }
  save();
  gelir.value = "";
  gider.value = "";
  sumTotals();
}

gelirbtn.addEventListener("click", addToList);
giderbtn.addEventListener("click", addToList);

function save() {
  localStorage.gelirim = JSON.stringify(gelirList);
  localStorage.giderim = JSON.stringify(giderList);
}

function render() {
  if (gelirList.length > 0) {
    for (let i = 0; i < gelirList.length; i++) {
      gelirlist.innerHTML += `<li>${gelirList[i]}</li>`;
    }
  } else {
    gelirlist.innerHTML = "";
  }

  if (giderList.length > 0) {
    for (let i = 0; i < giderList.length; i++) {
      giderlist.innerHTML += `<li>${giderList[i]}</li>`;
    }
  } else {
    giderlist.innerHTML = "";
  }
}

function sumTotals() {
  let sumGelir = 0;
  let sumGider = 0;

  for (let i = 0; i < gelirList.length; i++) {
    sumGelir = Number(gelirList[i]) + sumGelir;
  }
  for (let i = 0; i < giderList.length; i++) {
    sumGider = Number(giderList[i]) + sumGider;
  }
  if (sumGider > 0) {
    totalDivs[1].innerHTML = `<h2 style="text-decoration:underline">${sumGider}</h2>`;
  }
  if (sumGelir > 0) {
    totalDivs[0].innerHTML = `<h2 style="text-decoration:underline">${sumGelir}</h2>`;
  }

  let durum;
  if (sumGider > sumGelir) {
    durum = sumGider - sumGelir;
    situation.innerHTML = `<h4 style='color:red'> ${durum} tl Zarardasın</h4>`;
  } else if (sumGelir === sumGider) {
    situation.innerHTML = `<h4 style='color:#cba416'>Gelir ve giderin eşit</h4>`;
  } else {
    durum = sumGelir - sumGider;
    situation.innerHTML = `<h4 style='color:green'>${durum} tl Kardasın </h4>`;
  }
}

render();
sumTotals();
function clearGider() {
  localStorage.removeItem("giderim");
  giderList = [];
  giderlist.innerHTML = "";
  totalDivs[1].innerHTML = "";
  situation.innerHTML = "";
}
giderTemizle.addEventListener("click", clearGider);

function clearGelir() {
  localStorage.removeItem("gelirim");
  gelirList = [];
  gelirlist.innerHTML = "";
  totalDivs[0].innerHTML = "";
  situation.innerHTML = "";
}

gelirTemizle.addEventListener("click", clearGelir);
