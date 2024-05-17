let hareketler = ["taş", "kağıt", "makas"];
//let rastgeleSayi = 2;
//let bilgisayarHamlesi = hareketler[rastgeleSayi];
//Math.round(Math.random() *2) 0 ile 2 arasinda rastgele sayi secme

let oyunaDevam = true
let userChoice;
let pcChoice;
let pcScore = 0
let userScore = 0
let secimDogru = false;
while (oyunaDevam) {
  userChoice = prompt(`taş,kağıt,makas arasından birini seçin ve yazın ${userScore}`);

  for (let i = 0; i < hareketler.length; i++) {
    if (userChoice === hareketler[i].toLowerCase()) {
      secimDogru = true;
      break;
    }
  }

  if (!secimDogru) {
    console.log("Hatalı bir seçim yaptınız. Lütfen taş, kağıt veya makas seçin.");
    continue;
  }

  pcChoice = hareketler[Math.round(Math.random() * 2)]
  if ((pcChoice == 'taş' && userChoice == 'makas') || (pcChoice == 'makas' && userChoice == 'kağıt') || (pcChoice == 'kağıt' && userChoice == 'taş')) {
    pcScore++
    console.log('pc kazandı')
  }
  else if (pcChoice == userChoice) {
    console.log('Berabere')
  }
  else {
    console.log('biz kazandık')
    userScore++
  }
  if (userScore === 3) {
    console.log('biz kazandık oyun bitti')
    oyunaDevam = false
  }

  if (pcScore === 3) {
    console.log('PC kazandı oyun bitti')
    oyunaDevam = false
  }

}