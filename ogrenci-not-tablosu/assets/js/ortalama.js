let form = document.querySelector('.form');
let sil = document.querySelector('#btn');
let frontend = document.querySelector('.frontend');
let backend = document.querySelector('.backend');
let designer = document.querySelector('.designer');

let listelenecekler = [];

if (typeof localStorage.listelenecekler !== 'undefined') {
  listelenecekler = JSON.parse(localStorage.listelenecekler);
  RenderDetay();
}

function handleSubmit(e) {
  e.preventDefault();
  let formData = new FormData(form); //new Form Data ile yeni bir obje oluşturuyoruz. içinde parametre olarak formumuzu veriyoruz. Forma girilen verilerin otomatik verilmesi için
  let formObj = Object.fromEntries(formData);
  listelenecekler.push(formObj);

  form.reset();

  RenderDetay();
  Save();
}
form.addEventListener('submit', handleSubmit);

function RenderResult(puan) {

  let harfNotu;
  if (puan >= 90) {
    harfNotu = 'AA Başarılı'
  }
  else if (puan >= 85) {
    harfNotu = 'BA Başarılı'
  }
  else if (puan >= 80) {
    harfNotu = 'BB Başarılı'
  }
  else if (puan >= 75) {
    harfNotu = 'CB Geçer'
  }
  else if (puan >= 70) {
    harfNotu = 'CC Geçer'
  }
  else if (puan >= 65) {
    harfNotu = 'DC Koşullu Geçer'
  }
  else if (puan >= 60) {
    harfNotu = 'DD Koşullu Geçer'
  }
  else if (puan >= 50) {
    harfNotu = 'FD Başarısız, Kalır'
  }
  else {
    harfNotu = 'FF Başarısız, Kalır'
  }
  return harfNotu
}

function RenderDetay() {
  frontend.innerHTML = '';
  backend.innerHTML = '';
  designer.innerHTML = '';


  for (let i = 0; i < listelenecekler.length; i++) {
    let puan = Number(listelenecekler[i]['vize-1']) * 0.2 + Number(listelenecekler[i]['vize-2']) * 0.2 + Number(listelenecekler[i].final) * 0.6
    let harfnotu = RenderResult(puan)

    let detayHTML = `
    <div class="div">
    <p><strong> Ad: </strong> ${listelenecekler[i].ad}</p>
    <p><strong> Soyad: </strong> ${listelenecekler[i].soyad}</p>
    <p><strong> Bölüm: </strong> ${listelenecekler[i].bolum}</p>
    <p><strong> İlk Vize: </strong> ${listelenecekler[i]['vize-1']}</p>
    <p><strong> İkinci Vize: </strong> ${listelenecekler[i]['vize-2']}</p>
    <p><strong> Final: </strong> ${listelenecekler[i].final}</p>
    <p><strong> harf notu: </strong> ${harfnotu}</p>
    </div>
    `
    let bolumler = listelenecekler[i].bolum;
    if (bolumler === 'frontend') {
      frontend.innerHTML += detayHTML;
    }
    else if (bolumler === 'backend') {
      backend.innerHTML += detayHTML;
    }
    else {
      designer.innerHTML += detayHTML;
    }
  }
}

function Save() {
  localStorage.listelenecekler = JSON.stringify(listelenecekler);
}

function Clear() {
  localStorage.clear();
  listelenecekler = [];
  RenderDetay();
}

sil.addEventListener('click', Clear);
