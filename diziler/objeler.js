// nesne - object

/*let kendim = {
  //ozellik - property
  ad: 'Orhan',
  soyad: 'Ekici',
  yas: 29,
  dogumYili: 2000,
  hobiler: ['ödev vermek'],
  ebeveyn: {
    ad: 'Nevzat',
    soyad: 'Ekici',
  },
  kediler: [
    {
      ad: 'Fıstık',
      cinsi: 'Tekir (Uzun Tüylü)',
      cinsiyet: 'dişi',
      lakaplari: ['Fisto', 'Kızım'],
      hobileri: ['babayı pelinden koşturmak'],
    }
  ]

};

kendim.ad

kendim.hobiler
*/



let ben = {
  ad: 'Ece',
  soyad: 'Ceylan',
  yas: '23',
  dogumYili: 2000,
  hobiler: ['sokakta kedilerin peşinden koşmak', 'daha çok uyumak', 'izlediğim her şeyi 85 kez yeniden izlemek'],
  ebeveyn: {
    ad: 'Günsel',
    soyad: 'Ceylan'
  },
  evcilhayvanlar: [
    {
      ad: 'Sis',
      soyad: 'Ceylan',
      lakaplari: ['Eşek Sıpası', 'Kızım',],
      cinsiyeti: 'Dişi',
      hobileri: ['mama yemek', 'daha çok mama yemek', 'daha çok yatmak', 'benle oyna diye bağırarak miyavlamak',
        'sahibi tuvaletini temizlerken başında beklemek'
      ]
    }
  ]

}

console.table(ben);
console.table(ben.hobiler)






