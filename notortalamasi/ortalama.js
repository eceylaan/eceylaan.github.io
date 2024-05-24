let vize = document.querySelector('#vize');
let final = document.querySelector('#final');
let sonuc = document.querySelector('#sonuc');
let btn = document.querySelector('#hesapla');

function renderResult() {
  let harfNotu;
  let puan = Number(vize.value * 0.4) + Number(final.value * 0.6);
  console.log(puan)
  if (puan >= 90) {
    harfNotu = 'AA'
  }
  else if (puan >= 85) {
    harfNotu = 'AB'
  }
  else if (puan >= 80) {
    harfNotu = 'BA'
  }
  else if (puan >= 70) {
    harfNotu = 'BB'
  }
  else if (puan >= 65) {
    harfNotu = 'CB'
  }
  else if (puan >= 60) {
    harfNotu = 'CC'
  }
  else {
    harfNotu = 'F'
  }
  sonuc.innerHTML = puan.toFixed(2) + " " + "<span> Harf notu: " + harfNotu + "</span>";
  vize.value = ''
  final.value = ''
}
btn.addEventListener('click', renderResult);

