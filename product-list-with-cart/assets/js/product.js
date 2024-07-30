let productsItems = [];
let selectedProducts = [];
const orderedTotalDiv = document.createElement("div");
orderedTotalDiv.className = "ordered-total";
const emptyCart = document.querySelector(".empty-cart-content");
const deliveryType = document.querySelector("#deliveryType");
const confirmButton = document.querySelector("#confirmBtn");
const productList = document.querySelector(".product-list");
deliveryType.style = "display:none";
confirmButton.style = "display:none";

function renderProducts() {
  productContainer.innerHTML = productsItems
    .map((x) => {
      if (x.count) {
        return `
  <div id="product">
    <img src="${x.image.desktop}" alt="">
    <div  id="${x.id}"  class="btns">
     <button class="minus-btn"></button>   
     <p class="count-in-btn">${x.count}</p>
     <button id="${x.id}" class="plus-btn"></button>  
    </div>
    <div class="card-content">
      <p class="dessert-name">${x.category}</p>
      <p class="dessert-info">${x.name}</p>
      <p class="dessert-price">$${x.price}</p>
    </div>
  </div>
      `;
      } else if (!x.count) {
        return `
  <div id="product">
  <img src="${x.image.desktop}" alt="">
  <button id="${x.id}" class="btn">
    <img src="./assets/img/carbon_shopping-cart-plus.svg" alt="cart-icon">
    <p>Add to cart</p>
  </button>
  <div class="card-content">
    <p class="dessert-name">${x.category}</p>
    <p class="dessert-info">${x.name}</p>
    <p class="dessert-price">$${x.price}</p>
  </div>
</div>
    `;
      }
    })
    .join("");

  document.querySelectorAll(".btn").forEach((x) => {
    x.addEventListener("click", handleAddToCart);
  });

  document.querySelectorAll(".plus-btn").forEach((x) => {
    x.addEventListener("click", handleAddToCart);
  });
}

function handleAddToCart() {
  console.log(this.id);
  const id = this.id;
  emptyCart.style = "display:none";
  deliveryType.style = "display:flex";
  confirmButton.style = "display:block";
  const selectedProduct = productsItems.find((x) => Number(x.id) === Number(id));

  let existingProduct = selectedProducts.find((x) => x.id === selectedProduct.id);
  if (existingProduct) {
    existingProduct.count += 1;
    const countElement = document.querySelector(`#product-count-${selectedProduct.id}`);

    const totalElement = document.querySelector(`#total-${selectedProduct.id}`);

    if (countElement && totalElement) {
      countElement.innerHTML = existingProduct.count + "x ";
      totalElement.innerHTML = `$${existingProduct.count * existingProduct.price}`;

      let numberOfProducts = 0;
      selectedProducts.map((product) => (numberOfProducts += product.count));
      totalProducts.innerHTML = `Your Cart (${numberOfProducts})`;
    }
  } else {
    selectedProduct.count = 1;
    selectedProducts.push(selectedProduct);

    const productDiv = document.createElement("div");
    productDiv.id = selectedProduct.id;
    productDiv.className = "selected-products";

    let numberOfProducts = 0;
    selectedProducts.map((product) => (numberOfProducts += product.count));
    totalProducts.innerHTML = `Your Cart (${numberOfProducts})`;

    productDiv.innerHTML = ` 
    <div style="display:flex; justify-content:space-between; align-items:center;padding:12px">
    <div style="display:flex; flex-direction:column;gap:8px;">
     <p class="spname" >${selectedProduct.name}</p>
     <div class="pricencountdiv">
      <h4 class="spcount" id="product-count-${selectedProduct.id}">1x </h4>
      <p class="spprice" >$${selectedProduct.price}</p>
      <p class="sptotal" id="total-${selectedProduct.id}">
      $${selectedProduct.price * selectedProduct.count}
      </p>
     </div>
    </div>
    <button class="remove-all-btn" data-id="${
      selectedProduct.id
    }" style="width:28px; border-radius:50% ; height:28px; align-items:center; display:flex; align-items:center;
     justify-content:center; border: 2px solid #AD8A85; color: #AD8A85; background-color: #fff;"> <strong>x </strong></button>
    </div> `;
    productList.appendChild(productDiv);
  }
  document.querySelectorAll(".remove-all-btn").forEach((button) => button.addEventListener("click", removeAll));

  let totalprice = 0;
  selectedProducts.map((product) => (totalprice += product.price * product.count));
  orderedTotalDiv.innerHTML = `
  <p class="ot-text">Order Total</p>
  <p class="calc-ot">$${totalprice}</p>`;
  productList.appendChild(orderedTotalDiv);
  renderProducts();
}
function renderSelectedProducts() {
  let totalprice = 0;
  selectedProducts.map((product) => (totalprice += product.price * product.count));
  productList.innerHTML = "";
  selectedProducts.map((x) => {
    const productDiv = document.createElement("div");
    productDiv.id = x.id;
    productDiv.className = "selected-products";
    productDiv.innerHTML = ` 
      <div style="display:flex; justify-content:space-between; align-items:center;padding:12px">
      <div style="display:flex; flex-direction:column;gap:8px;">
       <p class="spname" >${x.name}</p>
       <div class="pricencountdiv">
        <h4 class="spcount" id="product-count-${x.id}">${x.count ? x.count : "1"}x </h4>
        <p class="spprice" >$${x.price}</p>
        <p class="sptotal" id="total-${x.id}">
        $${x.price * x.count}
        </p>
       </div>
      </div>
      <button class="remove-all-btn" data-id="${
        x.id
      }" style="width:28px; border-radius:50% ; height:28px; align-items:center; display:flex; align-items:center;
       justify-content:center; border: 2px solid #AD8A85; color: #AD8A85; background-color: #fff;"> <strong>x </strong></button>
      </div> `;

    if (x.count) {
      const countElement = document.querySelector(`#product-count-${x.id}`);

      const totalElement = document.querySelector(`#total-${x.id}`);

      if (countElement && totalElement) {
        countElement.innerHTML = x.count + "x ";
        totalElement.innerHTML = `$${x.count * x.price}`;
      }
    }

    productList.appendChild(productDiv);
  });
  let numberOfProducts = 0;

  if (selectedProducts.length > 0) {
    selectedProducts.map((product) => (numberOfProducts += product.count));
    console.log(selectedProducts);
    totalProducts.innerHTML = `Your Cart (${numberOfProducts})`;
  } else if (selectedProducts.length === 0) {
    console.log("A");
    totalProducts.innerHTML = `Your Cart (0)`;
  }
  document.querySelectorAll(".remove-all-btn").forEach((button) => button.addEventListener("click", removeAll));

  orderedTotalDiv.innerHTML = `
  <p class="ot-text">Order Total</p>
  <p class="calc-ot">$${totalprice}</p>`;
  productList.appendChild(orderedTotalDiv);
  renderProducts();
}
function removeAll() {
  const id = this.dataset.id;
  selectedProducts = selectedProducts.filter((product) => Number(product.id) !== Number(id));
  const selectedProduct = productsItems.find((x) => Number(x.id) === Number(id));
  if (selectedProduct.count) {
    selectedProduct.count = 0;
  }
  renderSelectedProducts();
}

function init() {
  fetch("https://dummyjson.czaylabs.com.tr/api/products")
    .then((res) => res.json())
    .then((res) => {
      productsItems = res.data;
      renderProducts();
    });
}

init();
