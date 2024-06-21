let form = document.querySelector("form");
let listElement = document.querySelector(".list-container ul");

const newListElement = document.createElement("ul");

newListElement.classList.add("selected-list");
document.body.appendChild(newListElement);

let products = [
  {
    name: "Yırtmaçlı Etek",
    category: "Etek",
    color: "Kırmızı",
    price: "100",
  },
  {
    name: "Puantiyeli Elbise",
    category: "Elbise",
    color: "Mavi",
    price: "200",
  },
  { name: "Keten Blazer", category: "Blazer", color: "Yeşil", price: "150" },
];

let selectedItems = [];

function handleSubmit(e) {
  e.preventDefault();
  let formData = new FormData(form);
  let formObj = Object.fromEntries(formData);
  products.push(formObj);
  renderProducts();
  save();
}

form.addEventListener("submit", handleSubmit);

if (localStorage.getItem("products")) {
  products = JSON.parse(localStorage.getItem("products"));
}

function renderProducts() {
  listElement.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <p>${products[i].name}</p>
      <p>${products[i].category}</p>
      <p>${products[i].color}</p>
      <p>${products[i].price} TL</p>
      <button data-index="${i}" class="select-btn">Seç</button>
    `;
    listElement.appendChild(listItem);
  }

  let selectBtns = document.querySelectorAll(".select-btn");
  for (let i = 0; i < selectBtns.length; i++) {
    selectBtns[i].addEventListener("click", handleSelect);
  }
}

function handleSelect() {
  const index = this.dataset.index;
  const selectedItem = products[index];
  selectedItems.push(selectedItem);
  renderSelectedItems();
}

function save() {
  localStorage.setItem("products", JSON.stringify(products));
}

function renderSelectedItems() {
  newListElement.innerHTML = "";

  const header = document.createElement("h1");
  header.textContent = "Seçilen Ürünler";
  newListElement.appendChild(header);
  // Sadece li elementlerini temizle

  for (let i = 0; i < selectedItems.length; i++) {
    const liEl = document.createElement("li");
    liEl.style =
      "display:flex;flex-direction:column;width:150px; border:1px solid black;padding:4px";
    liEl.innerHTML = `<p>${selectedItems[i].name}</p>
      <p>${selectedItems[i].category}</p>
      <p>${selectedItems[i].color}</p>
      <p>${selectedItems[i].price} TL</p>`;
    newListElement.appendChild(liEl);
  }
}

renderProducts();
