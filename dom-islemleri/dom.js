let btn = document.querySelector('.btn');

// function topla(sayi1, sayi2) {
//   //return sayi1 + sayi2;
//   let toplam = sayi1 + sayi2;
//   return toplam;
// }

function tumunuTopla(sayilar) {
  //sayilar Number olan bir dizi
  let toplam = 0;
  for (let i = 0; i < sayilar.length; i++) {
    toplam += sayilar[i];
  }
  return toplam;

}


// function handleClick() {
//   //bu fonksiyonun gorevi buton tiklandiginda calismasi gereken kodlari barindirmak
//   alert('Ömeer');
//   let toplam = topla(10, 20);
//   //fonksiyonlardan return edilen değerler isteğe bağlı olarak 
//   //değişken içinde saklanabilir
//   alert(toplam);
//   //alert (topla(10, 20));
// }

/*
fonksiyonlar belirli islemleri tekrar tekrar yapmak icin kullanilir
kodlarimizi sadelestirir
kod yapimiza ve ihtiyaclarimiza bagli olarak parametreler alabilir 
bu parametreler fonksiyon icindeki kodlarin calisma yapisini ozellestirebilir
orn: fonksiyonAdi (parametreAdi), fonksiyonAdi(parametreAdi1, parametreAdi2, parametreAdi3)
fonksiyonAdi([diziIcindekiParametre1, diziIcindekiParametre2, ...])

parametreler fonksiyona gonderilirken tanim sirasi izlenir
orn: function karsila(ad, yas) {
  alert ('merhaba ' + ad);
  alert ('şu an ' + yas + 'yaşındasın');
}

karsila ('Orhan', 35);

fonksiyonlar istegimize bagli olarak urettikleri bir sonucu geri donebilirler
orn: function topla(sayi1, sayi2) {
  let toplam = sayi1 + sayi2;
  return toplam;
}

anahtar kelimemiz return
bir fonksiyon return kelimesini gordukten sonra, return kelimesinin altindaki kodlari calistiramz 
fonksiyonun calisma akisini keser
return don anlamina gelir 
*/

// btn.addEventListener('click', handleClick);

let btn1 = document.querySelector('#btn1');
function handleBtn1Click() {
  let input1Val = Number(document.querySelector('#input1_1').value);
  let input2Val = Number(document.querySelector('#input1_2').value);
  let toplam = tumunuTopla([input1Val, input2Val]);
  alert(toplam);

}

let btn2 = document.querySelector('#btn2');
function handleBtn2Click() {
  let input1Val = Number(document.querySelector('#input2_1').value);
  let input2Val = Number(document.querySelector('#input2_2').value);
  let input3Val = Number(document.querySelector('#input2_3').value);
  let toplam = tumunuTopla([input1Val, input2Val, input3Val]);
  alert(toplam);

}

let btn3 = document.querySelector('#btn3');
function handleBtn3Click() {
  let input1Val = Number(document.querySelector('#input3_1').value);
  let input2Val = Number(document.querySelector('#input3_2').value);
  let input3Val = Number(document.querySelector('#input3_3').value);
  let input4Val = Number(document.querySelector('#input3_4').value);
  let toplam = tumunuTopla([input1Val, input2Val, input3Val, input4Val]);
  alert(toplam);

}

btn1.addEventListener('click', handleBtn1Click);
btn2.addEventListener('click', handleBtn2Click);
btn3.addEventListener('click', handleBtn3Click);

let btns = document.querySelectorAll('.hesapMakinesi button');

function handleCalcClick() {
  alert(this.innerText);
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', handleCalcClick);
}