let products = [
  {
    id: "1",
    name: "Domates",
    price: 3,
    stock: 1,
    emoji: "🍅",
  },
  {
    id: "2",
    name: "Elma",
    price: 4,
    stock: 3,
    emoji: "🍎",
  },
  {
    id: "3",
    name: "Şeftali",
    price: 7,
    stock: 5,
    emoji: "🍑",
  },
  {
    id: "4",
    name: "Karpuz",
    price: 25,
    stock: 2,
    emoji: "🍉",
  },
];

let sales = [];

function createProductHtml(product) {
  return `<li>
    <label>
      <input ${
        product.stock < 1 ? "disabled" : ""
      } required type="radio" name="selectedProduct" value="${product.id}"> (${
    product.stock
  }) ${product.emoji} ${product.name} - ${product.price} TL
    </label>
  </li>`;
}

function renderProducts() {
  productList.innerHTML = products.map((x) => createProductHtml(x)).join("");
}

function calculateSalesTotal() {
  salesTotal.innerText = sales.reduce(
    (total, current) => total + current.price,
    0
  );
}

function handleSalesForm(e) {
  e.preventDefault();
  let formData = new FormData(salesForm);
  let formObj = Object.fromEntries(formData);

  if (!formObj.selectedProduct) {
    alert("Ürün kalmadı ne satıcan??");
    return;
  }

  let product = products.find((x) => x.id === formObj.selectedProduct);
  if (product.stock - 1 < 0) {
    alert("Bu üründe yeterli stok yok!");
    return;
  }
  product.stock--;

  sales.push({
    name: product.name,
    price: product.price,
  });

  calculateSalesTotal();

  salesForm.reset();
  renderProducts();
}

function handlePaymentTypeClick() {
  switch (this.value) {
    case "1":
      paidTotalInput.disabled = true;
      paidTotalInput.required = false;
      paidTotalInput.value = "";
      break;
    case "2":
      paidTotalInput.disabled = false;
      paidTotalInput.required = true;
      paidTotalInput.focus();
      break;
  }
}

function bindSalesFormEvents() {
  salesForm.addEventListener("submit", handleSalesForm);
  let paymentTypeSelectors = document.querySelectorAll(
    'input[name="paymentType"]'
  );
  paymentTypeSelectors.forEach((x) =>
    x.addEventListener("click", handlePaymentTypeClick)
  );
}

function init() {
  renderProducts();
  bindSalesFormEvents();
}

init();
