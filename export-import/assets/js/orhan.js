export function tumunuTopla (...sayilar){
  return sayilar.reduce ((onceki, mevcut)=> mevcut + onceki, 0);
}

//veya 
// export {tumunuTopla}  diyebilirsin de bu sekilde 
// export {tumunuTopla } 