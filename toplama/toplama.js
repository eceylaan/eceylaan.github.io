let sayi1 = document.querySelector('#sayi1');
let sayi2 = document.querySelector('#sayi2');
let sonuc = document.querySelector('#sonuc');
let btn = document.querySelector('#hesapla');

function renderResult() {
  let toplam = Number(sayi1.value) + Number(sayi2.value);
  console.log(toplam)

  sonuc.innerHTML = "<span> Toplam: " + toplam + "</span>";
  sayi1.value = ''
  sayi2.value = ''

}
btn.addEventListener('click', renderResult);

function tumunuTopla(sayilar) {
  let toplam = 0;
  for (let i = 0; i < sayilar.length; i++) {
    toplam += sayilar[i];
  }
  return toplam;
}
