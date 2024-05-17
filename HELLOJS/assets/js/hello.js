//alert('Merhaba') // alert uyari verme fonksiyonu 

//prompt('Adın Nedir?') //prompt veri alma(?)

/* yorum blogu, uzun yorumlar için*/
//yorum yazarken turkce karakter kullanma bazi bilgisayarlarda calismiyo
alert ('Merhaba');
//alert ('dunya');

//veri tipleri
//primitive - ilkel tipler -> deger tipi - value type
//metin - string, cift tirnak veya tek tirnak arasi yazilan ifadeler
// "Orhan" veya 'Orhan' 
// "Orhan'ın Kalemi"
// 'Orhan\'ın Kalemi'  mesela 'Orhan'ın Kalemi' diye yazarsan calismaz 
//tam sayi - integer - int -> js buna number diyo tipi number düz
//kusuratli sayilar - float (double, decimal) -> buna da number diyo 
// "10" diye yazmak metin
// 10 olarak yazmak rakam
//tarih- date, js'de tarih isleri yapmak cok cetrefilli 
//mumkun oldugu kadar kacin -- orhan hoca hic sevmiyomus
//binary -> 1,0
//bool-boolean
//true, false
//stringleri birlestirmek icin + operatoru kullanabiliriz
//'Orhan' + 'Ekici'
// '  ' bosluk da bir karakter olarak sayilir
//islem onceligi sirasini degistirmek icin parantez kullaniyoruz
// en icerideki parantezden baslayarak disari dogru ilerler

(250+50)

//alert ("Orhan'ın Kalemi");
//alert ('Orhan\'ın Kalemmi'); // escape edilmis hali

//prompt ('Orhan');

//alert ("Merhaba " + prompt ("Adın Ne?"));
//alert ('ee '+ prompt('Adın Ne?') + ' yaşın kaç?');

//degisken - variable
//isimlendirme kurali camelCase

//let ad = 'Orhan';

// = bir operatordur -- atama operatoru

//alert ('Merhaba '+ ad); 

//null ->hicbir deger yoksa null olur - bos deger
//undefined->tanimsiz, tanimlanamamis
//null toilet papaer


//11 May Studies

/*

alert('Merhaba');
let ad = prompt ('Adın Ne?');
let soyad = prompt ('Merhaba ' + ad  + ' Soyadın Ne?');
alert('Hoşgeldin ' + ad + ' '+soyad);
let mevcutYil = 2024;
let dogumyili = Number (prompt ('Peki doğum yılın ne?'));
let yas = 2024-dogumyili; 

document.write (ad + ' ' + soyad + '<br>' + yas + ' yaşındasın.');

*/

//12 May Studies

//karsilastima operatorleri true veya false cevap verir
//dogru yanlis veya evet hayir gibi dusunebiliriz
//true veya false olabilen veri tipi bool - boolean

//let isStudent = true; //veya false 

/*
Karsilastirma  (Comparison) Operatorleri 
esit mi? ==
esit mi? (tip kontrolu yapar) ==
esit degil mi? != - - tip icin !==
> buyukse  >= buyuk esit ise
< kuxukse <= kucuk esit ise 
*/

//let yas = 18;
//let resitMi

/* 
&& and 
|| or 
*/

/*
let yas = Number (prompt('yaşınızı giriniz'));
if (yas>=18) {
console.log('reşitsiniz');
let gender = prompt('cisniyetiniz ne? (E/K)');
  if (gender === 'E' && yas >=20){
    console.log ('haydi askere');
  }
}
else {
  console.log ('reşit değilsiniz');
  }

  
  */

let age = Number (prompt('Yaşınız kaç?'));

// 60 ve uzeri ise yasli
// 35 ile 59 arasi yetiskin
// 25 ile 34 genc yetiskin 
// 18 ile 24 arasi ergen
// 18'e kadar bebe

 if(age>=60){
  alert ('yaslisinn');
 }

 else if (age>=35){
  alert('yetisko');
 }

 else if (age>=25){
 alert ('genç yetişko');
 }

 else if( age>=18){
  alert ('ergo');
 }

 else {
alert ('yaşlısın');
 }

