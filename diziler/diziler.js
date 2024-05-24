//todos
let yapilacakIsler = ["asdas"];

//degisken ozelinde
//tanimlama, atama, degistirme, ekleme, silme
/*CRUD
Create - olustur
Read - oku
Update - guncelle
Delete - sil
*/
/*
yapilacakIsler[2] = "dizileri anlat";
let yapilcakIsler = ["asdas"];
yapilcakIsler.push('yapılcak iş 1');
yapilcakIsler.unshift('ilk yapılcak iş');
yapilcakIsler.unshift('ikinci yapılcak iş');

yapilcakIsler.push('yapılcak iş 2');
yapilcakIsler.push('yapılcak iş 3');
yapilcakIsler.push('yapılcak iş 4');

//dizi icinden eleman silmek icin splice kullanilir

yapilcakIsler.splice(2, 3);
//2'den basla 3 tane sil demek

//yapilcakIsler.splice(2, 0, 'arda', 'naber?');
//bu 2den basla ve silme onun yerine arda ve naber ekle demek

//bi baska versiyonu da
//yapilcakIsler.splice(2, 2, 'arda', 'naber?')

console.table(yapilcakIsler);

//array icinde pop ve shift arastir

let ardaNerde = yapilcakIsler.indexOf('arda');
console.log(ardaNerde);
yapilacakIsler[ardaNerde] = 'Arda'

*/

/*
let todolist = ["ödev yap", "kursa gel", "dersi anla"];

let newtodolist = prompt("yeni eklemek istediğiniz maddeyi girin");

todolist.push(newtodolist);

//todolist.push = prompt("Yeni eklemek istediğiniz maddeyi girin");

console.table(todolist);

*/

let todolist = [
  {
    is: 'hiçbiri',
    tamamlandiMi: false
  },
  {
    is: 'hepsi',
    tamamlandiMi: true
  },
  {
    is: 'yarısı',
    tamamlandiMi: false
  },
  {
    is: 'birkaçı',
    tamamlandiMi: true
  }
];

let newtodolist = prompt("yeni eklemek istediğiniz maddeyi girin");

todolist.push(
  {
    is: newtodolist,
    tamamlandiMi: false
  }
);

console.table(todolist);

