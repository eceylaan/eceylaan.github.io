// dizi - liste - veri grupları - array - veri kumesi

// meyveler -> kavun, şeftali, karpuz, çilek
let meyveler = ["kavun", "şeftali", "karpuz"];

meyveler[0] = "Kavun";
meyveler[1] = "Şeftali";

console.log(meyveler[0]);
console.log(meyveler[1]);

let ogrenciler = ["Ardasu", "Sudesu", "Sılasu"];
console.log(orgenciler[2]);

let secilenMeyve = 1;
console.log(meyveler[secilenMeyve]);

let hareketler = ["Taş", "Kağıt", "Makas"];
let rastgeleSayi = 2;
let bilgisayarHamlesi = hareketler[rastgeleSayi];

//Math.round(Math.random() *2) 0 ile 2 arasinda rastgele sayi secme
let oyunaDevam = true
let userChoice;
let pcChoice;
let secimDogrumu = false;
while (oyunaDevam) {
  userChoice = prompt("taş,kağıt,makas arasından birini seçin ve yazın");

  while (!secimDogrumu) {
    for (let i = 0; 0 < hareketler.length; i++) {
      if (userChoice == hareketler[i]) {
        secimDogrumu = true;
      } else {
        secimDogrumu = false;
        userChoice = prompt(
          "taş,kağıt,makas arasından birini seçmelisiniz, başka değer girmeyiniz."
        );
      }
    }
  }
  pcChoice = hareketler[Math.round(Math.random() * 2)]
  if ((pcChoice == 'Taş' && userChoice == 'Makas') || (pcChoice == 'Makas' && userChoice == 'Kağıt') || (pcChoice == 'Kağıt' && userChoice == 'Taş')) {
    console.log('Kaybettiniz')
  }
  else if (pcChoice == userChoice) {
    console.log('Berabere')
  } else {
    console.log('Kazandınız')
  }

}

// const taş = document.getElementById('taş')
// taş.onclick = (e) => { userChoice = 'taş' }
