//for
//for of
//for in - - hic kullanmayin cünkü cok yavas
//while
//while do


//sayac tanimi; calisma kosulu; artis kurali

//let dizi = ['elma', 'armut', 'çilek'];{

//for (let i = 1; i <= 10; i++) {
//i++ buraya yazarsan tek sayı
//console.log(i);
//i++ buraya yazarsan cift sayi
//  for (let i =0; i<dizi.length; i++){
//  console.log(dizi[i]);
// }

//dongulerin her bir donme islemine iteration - iterasyon denir

let meyveler = [
  "kiraz", "elma", "armut", "muz", "çilek",
  "portakal", "karpuz", "üzüm", "portakal", "kiraz",
  "üzüm", "kiraz", "çilek", "üzüm", "portakal",
  "elma", "armut", "kiraz", "üzüm", "karpuz",
  "armut", "kiraz", "portakal", "muz", "çilek",
  "muz", "armut", "elma", "karpuz", "elma"
];
/*let indeks = -1;
for (let i = 0; i < meyveler.length; i++) {
  if (meyveler[i] === 'çilek') {
    indeks = i;
  }
  console.log(meyveler[i]);
}

console.log("çilek'in indeksi :" + indeks);
*/


// benimyaptigim

// let cilek = 0;
// for (let i = 0; i < meyveler.length; i++) {
//   if (meyveler[i] === 'çilek') {
//     cilek++;
//   }
// }
// console.log(cilek);

// let arananMeyve = 'kiraz';
// let arananMeyveSayisi = 0;

// for (let i = 0; i < meyveler.length; i++) {
//   if (meyveler[i] === arananMeyve) {
//     arananMeyveSayisi++;

//   }
// }

// if (arananMeyveSayisi > 0) {
//   console.log(arananMeyve + ' ' + arananMeyveSayisi + ' adet var.');
// }
// else {
//   console.log(arananMeyve + 'yok.');
// }

// let meyveSayilari = {};
// for (let i = 0; i < meyveler.length; i++) {
//   let meyve = meyveler[i];
//   if (typeof meyveSayilari[meyve] === 'undefined') {
//     meyveSayilari[meyve] = {
//       adet: 1
//     };
//   }
//   else {
//     meyveSayilari[meyve].adet++;
//   }
// }
// console.table(meyveSayilari);


// let kediler = ["leo", "ceku", "misha", "kontes", "fıstık", "lucky", "marcel"];

// let arananKedy = "misha";
// let kedininSirasi = -1;

// for (let i = 0; i < kediler.length; i++) {
//   let kedy = kediler[i];
//   if (kedy === arananKedy) {
//     kedininSirasi = i;
//     break;
//   }
// }

// let sayiAdedi = prompt("Kaç adet sayı toplamak istiyorsunuz?");
// let toplam = 0

// for (let i = 1; i <= sayiAdedi; i++) {
//   toplam += Number(prompt(i + ' . sayıyı giriniz : '))
// }
// alert('sonuç : ' + toplam);