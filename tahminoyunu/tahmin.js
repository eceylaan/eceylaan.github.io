let sayi = Math.round(Math.random() * 10);
let secimDogru

for (let i = 1; i <= 3; i++) {
  let tahmin = Number(prompt(i + ' . tahmininizi girin: '))
  if (tahmin == sayi) {
    secimDogru = true
    console.log('Kazandınız. Tebrikler')
    break;
  }
  else {
    secimDogru = false
    console.log('Yanlış Tahmin.')
    continue;
  }
}

if (!secimDogru) {
  console.log('3 hakkınız da bitti. Kaybettiniz. Doğru tahmin ' + sayi + ' olacaktı.')
}




//for (let i = 1; i <= 3; i++) {
//  let tahmin = Number(prompt(i + ' . tahmininizi girin: '))
//}


// let sayiAdedi = prompt("Kaç adet sayı toplamak istiyorsunuz?");
// let toplam = 0

// for (let i = 1; i <= sayiAdedi; i++) {
//   toplam += Number(prompt(i + ' . sayıyı giriniz : '))
// }
// alert('sonuç : ' + toplam);