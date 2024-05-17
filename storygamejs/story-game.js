
let hikaye = "Orta Dünya'nın derinliklerinde, bir yol ayrımında duruyorsun. Hangi yolu tercih edeceksin?";
let secenek1 = "Doğuya giden yol.";
let secenek2 = "Batıya giden yol.";
let secim = prompt(hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
while (secim !== "1" && secim !== "2") {
  secim = prompt("Geçersiz seçim! Lütfen 1 veya 2 yazınız.\n" + hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
}

if (secim === "1") {
  hikaye = "Doğuya giden yolu seçtin. Yolda bir nehir görüyorsun, ne yapacaksın?";
  secenek1 = "Nehri geçmek için bir köprü arayacaksın.";
  secenek2 = "Nehri yüzerek geçmeye cesaret edeceksin.";
  secim = prompt(hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
  while (secim !== "1" && secim !== "2") {
    secim = prompt("Geçersiz seçim! Lütfen 1 veya 2 yazınız.\n" + hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
  }
  if (secim == 1) {
    hikaye = 'Nehri köprü ile geçtin. Köprüden geçerken köprünün ortasında bir troll ile karşılaştın. Ne yapacaksın?';
    secenek1 = 'Troll ile savaş.'
    secenek2 = 'Troll\'den kaç ve başka bir yol bul'
    secim = prompt(hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
    while (secim !== "1" && secim !== "2") {
      secim = prompt("Geçersiz seçim! Lütfen 1 veya 2 yazınız.\n" + hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
    }
    if (secim === "1") {
      hikaye = "Troll ile savaşıp kazandın. Yoluna devam ederken karşına bir grup ork çıkıyor. Ne yapacaksın?";
      secenek1 = "Orklarla savaş.";
      secenek2 = "Ormanlık alana kaçarak saklan.";
      secim = prompt(hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
      while (secim !== "1" && secim !== "2") {
        secim = prompt("Geçersiz seçim! Lütfen 1 veya 2 yazınız.\n" + hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
      }
      if (secim === "1") {
        hikaye = "Orkları yendin ama yaralandın. İyileşmek için bir yer arıyorsun. Ne yapacaksın?";
        secenek1 = "Yakındaki bir köye git.";
        secenek2 = "Ormanda dinlen.";
        secim = prompt(hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
        while (secim !== "1" && secim !== "2") {
          secim = prompt("Geçersiz seçim! Lütfen 1 veya 2 yazınız.\n" + hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
        }
        if (secim === "1") {
          hikaye = "Köyde iyileştin ve köy halkı seni ödüllendirdi. Maceran devam ediyor.";
          secenek1 = "Köyde kal.";
          secenek2 = "Yoluna devam et.";
          secim = prompt(hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
          while (secim !== "1" && secim !== "2") {
            secim = prompt("Geçersiz seçim! Lütfen 1 veya 2 yazınız.\n" + hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
          }
          if (secim === "1") {
            hikaye = "Köyde kalarak huzurlu bir yaşam sürdün. Maceran burada sona erdi.";
            secim = prompt(hikaye + "\nBir sonraki serüvende görüşürüz!");
          }
          else {
            hikaye = "Yoluna devam ederken Gimli ve Legolas seni buldu.";
            secim = prompt(hikaye + "\nYeni bir serüvene hazır mısın!");
          }
        }
        else {
          hikaye = "Dinlenmeye karar verdin ama yaran kötü durumda.Yaranın iyileşmesine yardım etmesi için Elf Krallığı Lothlórien'e git";
          secim = prompt(hikaye + "\nSavaşamayacağın için serüven sona erdi");
        }
      }
      else {
        hikaye = "Ormanlık alana girdin ve saklandın";
        secenek1 = "Orkların planlarını dinleyerek öğren.";
        secenek2 = "Ormandan uzaklaş.";
        secim = prompt(hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
        while (secim !== "1" && secim !== "2") {
          secim = prompt("Geçersiz seçim! Lütfen 1 veya 2 yazınız.\n" + hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
        }

        if (secim == 1) {
          hikaye = "Orkların planlarını öğrendin artk gidip Gandalf'a anlatmak için yola çık";
          secim = prompt(hikaye + "\nGörevini tamamladın ");
        }
        else {
          hikaye = "Orklara yakalanmadan ormandan uzaklaştın";
          secim = prompt(hikaye + "\nCasusluk yapmadın ve şimdi Orklar kötü planlarını gerçekleştirmek için yolda!");
        }
      }
    }
    else {
      hikaye = 'Troll\'den kaçtın.';
      secenek1 = 'Aragorn\'u bul.'
      secenek2 = 'Arwen\'i bul.'
      secim = prompt(hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
      while (secim !== "1" && secim !== "2") {
        secim = prompt("Geçersiz seçim! Lütfen 1 veya 2 yazınız.\n" + hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
      }
      if (secim == 1) {
        hikaye = 'Aragorn\'u buldun. Tebrikler.';
        secim = prompt(hikaye + "\nBir sonraki serüvende görüşürüz.");
      }
      else {
        hikaye = 'Arwen\'i buldun. Tebrikler.';
        secim = prompt(hikaye + "\nBir sonraki serüvende görüşürüz.");
      }
    }
  }
  else {
    hikaye = "Nehri yüzerek geçmek için başka kıyıya gitmek zorunda kaldın";
    secenek1 = "Legolas ile karşılaştın.";
    secenek2 = "Gandalf ile karşılaştın.";
    secim = prompt(hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
    while (secim !== "1" && secim !== "2") {
      secim = prompt("Geçersiz seçim! Lütfen 1 veya 2 yazınız.\n" + hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
    }
    if (secim == 1) {
      hikaye = "Legolas seni dostça karşıladı ve Frodo/'yu aradığını söyledi";
      secenek1 = "Legolas ile Frodo'yu ara";
      secenek2 = "Legolas'a veda et ve Hobbitleri uyarmaya git!";
      secim = prompt(hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
      while (secim !== "1" && secim !== "2") {
        secim = prompt("Geçersiz seçim! Lütfen 1 veya 2 yazınız.\n" + hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
      }
      if (secim == 1) {
        hikaye = "Legolas ile Frodo'yu aramaya karar verdin";
        secenek1 = "Mordor'a doğru yola çıktınız";
        secenek2 = "Rohan'a doğru yola çıktınız";
        secim = prompt(hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
        while (secim !== "1" && secim !== "2") {
          secim = prompt("Geçersiz seçim! Lütfen 1 veya 2 yazınız.\n" + hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
        }
        if (secim == 1) {
          hikaye = "Mordor yolunda Frodo ve Sam'i buldunuz gerekli teçhizatı sağladınız ve görev sona erdi";
          secim = prompt(hikaye + "\nBir sonraki serüvende görüşürüz ");
        }
        else {
          hikaye = "Rohan yolunda Frodo'nun Mordor'a yola çıktığı haberini aldınız ve geri dönmeye karar verdiniz";
          secim = prompt(hikaye + "\nBir sonraki serüvende görüşürüz ");
        }
      }
      else {
        hikaye = "Hobbitleri uyarmaya gitmek için Shire'a yola çıktın. 'Kıymetlimiss' Gollum ile karşılaştın. Psikolojik sorunlarıyla uğraş dur";
        secim = prompt(hikaye);
      }
    }
    else {
      hikaye = "Gandalf ile karşılaştın.";
      secenek1 = "Gandalf ile Saruman'la mücadele etmeye yardıma git.";
      secenek2 = "Gandalf'ın Balrog ile mücadelesine yardım et.";
      secim = prompt(hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
      while (secim !== "1" && secim !== "2") {
        secim = prompt("Geçersiz seçim! Lütfen 1 veya 2 yazınız.\n" + hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
      }
      if (secim == 1) {
        hikaye = "Saruman'la mücadele çok iyi gitti";
        secim = prompt(hikaye + "\nBir sonraki serüvende görüşürüz!");
      }
      else {
        hikaye = "Gandlf Balrog'u yendi. Gandalf'ın Ak Büyücü olmasına yardım ettin ";
        secim = prompt(hikaye + "\nBir sonraki serüvende görüşürüz!");
      }
    }
  }
}

else {
  hikaye = "Batıya giden yolu seçtin. Yolda bir nehir görüyorsun, ne yapacaksın?";
  secenek1 = "Nehri geçmek için bir köprü arayacaksın.";
  secenek2 = "Nehri yüzerek geçmeye cesaret edeceksin.";
  secim = prompt(hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
  while (secim !== "1" && secim !== "2") {
    secim = prompt("Geçersiz seçim! Lütfen 1 veya 2 yazınız.\n" + hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
  }
  if (secim == 1) {
    hikaye = "Ormanı dolaşırken bir grup elf ile karşılaştın. Ne yapacaksın?";
    secenek1 = "Elflerle konuş.";
    secenek2 = "Elflere görünmeden yoluna devam et.";
    secim = prompt(hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
    while (secim !== "1" && secim !== "2") {
      secim = prompt("Geçersiz seçim! Lütfen 1 veya 2 yazınız.\n" + hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
    }
    if (secim == 1) {
      hikaye = "Elfler seni dostça karşıladı ve yardım etmeyi teklif etti. Ne yapacaksın?";
      secenek1 = "Yardımı kabul et.";
      secenek2 = "Teşekkür edip yoluna devam et.";
      secim = prompt(hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
      while (secim !== "1" && secim !== "2") {
        secim = prompt("Geçersiz seçim! Lütfen 1 veya 2 yazınız.\n" + hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
      }
      if (secim == 1) {
        hikaye = "Elflerin yardımıyla güvenli bir yol buldun ve maceran devam ediyor.";
        secenek1 = "Elflerle kal.";
        secenek2 = "Kendi yoluna devam et.";
        secim = prompt(hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
        while (secim !== "1" && secim !== "2") {
          secim = prompt("Geçersiz seçim! Lütfen 1 veya 2 yazınız.\n" + hikaye + "\n1. " + secenek1 + "\n2. " + secenek2);
        }
        if (secim == 1) {
          hikaye = "Elflerle kalarak macera dolu bir yaşam sürdün!";
          secim = prompt(hikaye + "\nBir sonraki serüvende görüşürüz!");
        }
        else {
          hikaye = "Yoluna devam ettin, Merry ve Pippin ile karşılaştın. Fangorn Ormanı'na doğru yola çıktınız";
          secim = prompt(hikaye + "\nEntler sizin sayenizde Saruman'ın yanlış yönlendirmelerinden kurtuldu!");
        }
      }
      else {
        hikaye = "Yoluna devam ettin ve tüm maceraları kaçırdın";
        secim = prompt(hikaye + "\nBir sonraki serüvende görüşürüz!");
      }
    }
    else {
      hikaye = "Görünmeden yola devam edecektin ama Legolas'ın elf gözleri seni gördü, Gimli'de yanında";
      secim = prompt(hikaye + "\nLegolas ve Gimli'nin ork öldürme yarışına girdin, kolay gelsin ");
    }
  }
  else {
    hikaye = "Nehri yüzerek geçtin!";
    secim = prompt(hikaye + "\nBir sonraki serüvende görüşürüz!");
  }
}
