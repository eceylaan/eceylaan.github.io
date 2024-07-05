let urunler = document.querySelector(".urunler");
let form = document.querySelector("form");
let selectedProducts = [];
let products = [
  {
    id: 1,
    image:
      "https://images.migrosone.com/sanalmarket/product/28089034/domates-pembe-kg-f23b66-1650x1650.jpg",
    name: "Domates",
    sell: 20,
    buy: 10,
    stock: 50,
  },
  {
    id: 2,
    image:
      "https://www.anadolununozu.com/img/products/cilek_01.01.2023_6f46423.jpg",
    name: "Çilek",
    sell: 10,
    buy: 10,
    stock: 50,
  },
  {
    id: 3,
    image:
      "https://ideacdn.net/idea/fe/18/myassets/products/243/adsiz-tasarim-2.jpeg?revision=1697143329",
    name: "Kavun",
    sell: 20,
    buy: 10,
    stock: 10,
  },
  {
    id: 4,
    image:
      "https://nebilcdn.blob.core.windows.net/gimatlinux/0010945_karpuz-kg-meyve_510.jpg",
    name: "Karpuz",
    sell: 25,
    buy: 10,
    stock: 10,
  },
];

if (typeof localStorage.productsList !== "undefined") {
  products = JSON.parse(localStorage.productsList);
}

function handleForm(e) {
  e.preventDefault();
  let formData = new FormData(form);
  let formObj = Object.fromEntries(formData);
  console.log(formObj);
  let newObj = {
    id: generateId(),
    name: formObj.name,
    buy: formObj.buy,
    sell: formObj.sell,
    stock: formObj.stock,
    image: formObj.img,
  };
  products.push(newObj);
  render();
  handleFormRender();
  console.log(localStorage);
  saveToLocalStorage();
  form.reset();
}
form.addEventListener("submit", handleForm);
function generateId() {
  const id = Math.floor(Math.random() * 10000);
  return id;
}
function render() {
  urunler.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    urunler.innerHTML += `
    <div class="urun">
    <p> <image style="width:80px;" src="${products[i].image}"></p>
    <p>Ürün Adı: ${products[i].name}</p>
    <p>Ürün Fiyatı: ${products[i].sell}</p>
    <p>Stok: ${products[i].stock}</p>
    <button data-id="${products[i].id}" id="selectBtn">Seç</button>
      </div>
    `;
    document
      .querySelectorAll("#selectBtn")
      .forEach((x) => x.addEventListener("click", handlSelectBtn));
  }
}
render();
handleFormRender();

function handlSelectBtn(e) {
  e.preventDefault();
  const id = this.dataset.id;
  console.log(id);

  let selectedProduct = products.find((x) => Number(x.id) === Number(id));
  selectedProducts.push(selectedProduct);
  console.log(selectedProducts);
}

function handleTotalSelectedProduct(e) {
  e.preventDefault();
  let totalpricesp = 0;
  let sumKar = 0;

  for (let i = 0; i < selectedProducts.length; i++) {
    let intSell = Number(selectedProducts[i].sell);
    totalpricesp += intSell;
    let intKar = intSell - Number(selectedProducts[i].buy);
    sumKar = intKar + sumKar;
    totalproductprice.innerHTML = `Toplam Ciro: ${totalpricesp}`;
    kar.innerHTML = `Kar:${sumKar}`;
  }
  let boughtedProductsIds = selectedProducts.map((prd) => prd.id);
  console.log(boughtedProductsIds);

  for (let i = 0; i < boughtedProductsIds.length; i++) {
    const product = products.find((prd) => prd.id === boughtedProductsIds[i]);
    if (product) {
      product.stock--;
    }
  }
  render();
  handleFormRender();
}

odemeAl.addEventListener("click", handleTotalSelectedProduct);

function saveToLocalStorage() {
  localStorage.setItem("productsList", JSON.stringify(products));
}

function handleFormRender() {
  document.querySelector(".eklenen-urunler-tablosu").innerHTML = products
    .map((x) => createHtml(x))
    .join("");

  document
    .querySelectorAll(".editbtn")
    .forEach((x) => x.addEventListener("click", handleEditBtn));
  //forEach kullandık çünkü elementler farklı bi tipte array oluşturuyor(NodeList) (element arrayi döndüğü için)

  document
    .querySelectorAll(".delbtn")
    .forEach((x) => x.addEventListener("click", handleDelBtn));
}

function handleDelBtn(e) {
  e.preventDefault();

  if (!confirm("Emin misin?")) {
    return;
  }
  /* çakal yöntem */
  products = products.filter((x) => x.id !== Number(this.dataset.id));
  /* çakal yöntem */
  saveToLocalStorage();
  render();
  handleFormRender();
}

function handleEditBtn(e) {
  e.preventDefault();
  const id = this.dataset.id;
  let myDiv = document.getElementById(id);
  let childrens = myDiv.children;
  let newObject = {
    id: id,
    buy: childrens.buy.value,
    sell: childrens.sell.value,
    name: childrens.name.value,
    stock: childrens.stock.value,
    image: childrens.img.value,
  };
  let index = products.findIndex((x) => Number(x.id) === Number(id));
  products[index] = newObject;

  render();
  handleFormRender();
  saveToLocalStorage();
}

function createHtml(product) {
  return `
  <div id="${product.id}">
<input data-id="${product.id}"  type="text" name="name" value="${product.name}">
<input data-id="${product.id}" type="number" name="buy" value="${product.buy}">
<input data-id="${product.id}" type="number"  name="sell" value="${product.sell}">
<input data-id="${product.id}" type="number"  name="stock" value="${product.stock}">
<input data-id="${product.id}" type="text"  name="img" value="${product.image}">
<button class="editbtn" data-id="${product.id}">Güncelle</button>
<button class="delbtn" data-id="${product.id}">Ürünü Sil</button>
</div>`;
}
