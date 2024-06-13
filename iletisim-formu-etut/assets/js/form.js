let form = document.querySelector('.form');
let kisiBilgileri = document.querySelector('.kisi-bilgileri');
let buton = document.querySelector('#btn');

let detayListesi = [];

if (typeof localStorage.detayListesi !== 'undefined') {
  detayListesi = JSON.parse(localStorage.detayListesi);
  RenderDetay();
}

function HandleSubmit(e) {
  e.preventDefault();
  let formData = new FormData(form);
  let formObj = Object.fromEntries(formData);
  detayListesi.push(formObj);

  form.reset();

  RenderDetay();
  Save();
}

form.addEventListener('submit', HandleSubmit);

function RenderDetay() {
  kisiBilgileri.innerHTML = '';

  for (let i = 0; i < detayListesi.length; i++) {
    kisiBilgileri.innerHTML += `
    <div class="div">
    <p>${detayListesi[i].ad} </p>
    <p>${detayListesi[i].soyad} </p>
    <p>${detayListesi[i].mail} </p>
    <p>${detayListesi[i].mesaj} </p>
    </div>
    `
  }
}

function Save() {
  localStorage.detayListesi = JSON.stringify(detayListesi);
}

function Clear() {
  localStorage.clear();
  detayListesi = [];
  RenderDetay();
}

buton.addEventListener('click', Clear);