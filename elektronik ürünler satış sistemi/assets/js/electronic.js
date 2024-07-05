let urunler = document.querySelector(".urunler");
let form = document.querySelector("form");
let selectedProducts = [];
let totalpricesp = 0;

let products = [
  {
    id: 1,
    name: "iPhone 14",
    stock: 25,
    origin: "USA",
    price: "$999",
    category: "Smartphone",
    icon: "📱",
  },
  {
    id: 2,
    name: "Samsung Galaxy S22",
    stock: 30,
    origin: "South Korea",
    price: "$899",
    category: "Smartphone",
    icon: "📱",
  },
  {
    id: 3,
    name: "MacBook Pro",
    stock: 15,
    origin: "USA",
    price: "$1999",
    category: "Laptop",
    icon: "💻",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    stock: 20,
    origin: "USA",
    price: "$1299",
    category: "Laptop",
    icon: "💻",
  },
  {
    id: 5,
    name: "Sony WH-1000XM4",
    stock: 40,
    origin: "Japan",
    price: "$349",
    category: "Headphones",
    icon: "🎧",
  },
  {
    id: 6,
    name: "Apple Watch Series 7",
    stock: 35,
    origin: "USA",
    price: "$399",
    category: "Smartwatch",
    icon: "⌚",
  },
  {
    id: 7,
    name: "iPad Pro",
    stock: 25,
    origin: "USA",
    price: "$1099",
    category: "Tablet",
    icon: "📱",
  },
  {
    id: 8,
    name: "Amazon Echo Dot",
    stock: 50,
    origin: "USA",
    price: "$49",
    category: "Smart Speaker",
    icon: "🔊",
  },
  {
    id: 9,
    name: "Google Nest Hub",
    stock: 40,
    origin: "USA",
    price: "$89",
    category: "Smart Display",
    icon: "🖥️",
  },
  {
    id: 10,
    name: "PlayStation 5",
    stock: 10,
    origin: "Japan",
    price: "$499",
    category: "Gaming Console",
    icon: "🎮",
  },
  {
    id: 11,
    name: "Xbox Series X",
    stock: 12,
    origin: "USA",
    price: "$499",
    category: "Gaming Console",
    icon: "🎮",
  },
  {
    id: 12,
    name: "Nikon D850",
    stock: 8,
    origin: "Japan",
    price: "$2999",
    category: "Camera",
    icon: "📷",
  },
  {
    id: 13,
    name: "Canon EOS R5",
    stock: 7,
    origin: "Japan",
    price: "$3899",
    category: "Camera",
    icon: "📷",
  },
  {
    id: 14,
    name: "LG OLED TV",
    stock: 18,
    origin: "South Korea",
    price: "$1299",
    category: "Television",
    icon: "📺",
  },
  {
    id: 15,
    name: "Samsung QLED TV",
    stock: 20,
    origin: "South Korea",
    price: "$1499",
    category: "Television",
    icon: "📺",
  },
  {
    id: 16,
    name: "Apple AirPods Pro",
    stock: 50,
    origin: "USA",
    price: "$249",
    category: "Earbuds",
    icon: "🎧",
  },
  {
    id: 17,
    name: "Bose QuietComfort Earbuds",
    stock: 45,
    origin: "USA",
    price: "$279",
    category: "Earbuds",
    icon: "🎧",
  },
  {
    id: 18,
    name: "Fitbit Charge 5",
    stock: 30,
    origin: "USA",
    price: "$149",
    category: "Fitness Tracker",
    icon: "📟",
  },
  {
    id: 19,
    name: "GoPro Hero 9",
    stock: 15,
    origin: "USA",
    price: "$399",
    category: "Action Camera",
    icon: "📹",
  },
  {
    id: 20,
    name: "DJI Mavic Air 2",
    stock: 10,
    origin: "China",
    price: "$799",
    category: "Drone",
    icon: "🚁",
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
    origin: formObj.origin,
    price: formObj.price,
    stock: formObj.stock,
    category: formObj.category,
    icon: formObj.icon,
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
    <p>Ürün Adı: ${products[i].name}</p>
    <p>Ürün Fiyatı: ${products[i].price}</p>
    <p>Stok: ${products[i].stock}</p>
    <p>Menşei: ${products[i].origin}</p>
    <p>Kategori: ${products[i].category}</p>
    <p>İkon: ${products[i].icon}</p>
    <button data-id="${products[i].id}" id="selectBtn">Seç</button>
      </div>
    `;
    document
      .querySelectorAll("#selectBtn")
      .forEach((x) => x.addEventListener("click", handleSelectBtn));
  }
}
render();
handleFormRender();

function handleSelectBtn(e) {
  e.preventDefault();
  const id = this.dataset.id;
  console.log(id);

  let selectedProduct = products.find((x) => Number(x.id) === Number(id));
  selectedProducts.push(selectedProduct);
  console.log(selectedProducts);
}

function handleTotalSelectedProduct(e) {
  const error = document.getElementById("buy-error");
  e.preventDefault();
  let totalpricesp = 0;

  for (let i = 0; i < selectedProducts.length; i++) {
    let intSell = Number(selectedProducts[i].price.replace("$", ""));
    totalpricesp += intSell;
    totalproductprice.innerHTML = `Toplam Tutar: ${totalpricesp}`;
  }
  let boughtedProductsIds = selectedProducts.map((prd) => prd.id);
  console.log(`boughtedProductsIds ${boughtedProductsIds.length}`);

  for (let i = 0; i < boughtedProductsIds.length; i++) {
    const product = products.find((prd) => prd.id === boughtedProductsIds[i]);
    if (product) {
      product.stock--;
    }
  }
  if (selectedProducts.length < 1) {
    error.style = "color:red";
    error.innerText = "Sepete ürün eklemelisiniz";
  } else {
    error.innerText = "";
  }
  selectedProducts = [];
  boughtedProductsIds = [];

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
    origin: childrens.origin.value,
    price: childrens.price.value,
    category: childrens.category.value,
    name: childrens.name.value,
    stock: childrens.stock.value,
    icon: childrens.icon.value,
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
<input data-id="${product.id}" type="text" name="price" value="${product.price}">
<input data-id="${product.id}" type="text"  name="origin" value="${product.origin}">
<input data-id="${product.id}" type="text"  name="category" value="${product.category}">
<input data-id="${product.id}" type="number"  name="stock" value="${product.stock}">
<input data-id="${product.id}" type="text"  name="icon" value="${product.icon}">
<button class="editbtn" data-id="${product.id}">Güncelle</button>
<button class="delbtn" data-id="${product.id}">Ürünü Sil</button>
</div>`;
}
