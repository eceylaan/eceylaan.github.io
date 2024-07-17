let productsItems = [];
let selectedProducts = [];
const orderedTotalDiv = document.createElement("div");
orderedTotalDiv.className = "ordered-total";

function renderProducts() {
  productContainer.innerHTML = productsItems
    .map((x) => {
      if (x.count) {
        return `
  <div id="product">
    <img src="${x.image.desktop}" alt="">
    <div style="display:flex; justify-content:space-between; background-color:#C73B0F;" id="${x.id}"  class="btns">
     <button class="minus-btn"></button>   
     <p>${x.count}</p>
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
  const selectedProduct = productsItems.find(
    (x) => Number(x.id) === Number(id)
  );

  let existingProduct = selectedProducts.find(
    (x) => x.id === selectedProduct.id
  );
  if (existingProduct) {
    existingProduct.count += 1;
    const countElement = document.querySelector(
      `#product-count-${selectedProduct.id}`
    );
    const totalElement = document.querySelector(`#total-${selectedProduct.id}`);

    if (countElement && totalElement) {
      countElement.innerHTML = existingProduct.count + "x ";
      totalElement.innerHTML = `$${
        existingProduct.count * existingProduct.price
      }`;
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
      <p class="spname" >${selectedProduct.name}</p>
      <div class="pricencountdiv">
      <h4 class="spcount" id="product-count-${selectedProduct.id}">1x </h4>
      <p class="spprice" >$${selectedProduct.price}</p>
      <p class="sptotal" id="total-${selectedProduct.id}">$${
      selectedProduct.price * selectedProduct.count
    }</p>
       </div> `;
    cart.appendChild(productDiv);
  }
  let totalprice = 0;
  selectedProducts.map(
    (product) => (totalprice += product.price * product.count)
  );
  orderedTotalDiv.innerHTML = `
  <p class="ot-text">Order Total</p>
  <p class="calc-ot">$${totalprice}</p>`;
  cart.appendChild(orderedTotalDiv);
  renderProducts();
  console.log(selectedProducts);
}

function init() {
  fetch("https://dummyjson.czaylabs.com.tr/api/products")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      productsItems = res.data;
      console.log(productsItems);
      renderProducts();
    });
}

init();
