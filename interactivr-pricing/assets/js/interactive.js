const unitPrice = 0.00035;

function handleSliderChange() {
  const val = Number(pricingSlider.value);
  let calculatedPrice = val * unitPrice;
  //yillik secildiyse true olur

  if (togglePaymentType.checked) {
    calculatedPrice = calculatedPrice * 12 * 0.75;
  }
  calculatedPriceText.innerText = calculatedPrice.toFixed(2);
}

pricingSlider.addEventListener("input", handleSliderChange);

// event olarak change dersek: slide işlemi bitince tetiklenir
// event olarak input dersek: slide esnasında da tetiklenir

togglePaymentType.addEventListener("click", () => handleSliderChange());
// togglePaymentType.addEventListener("click", function () {
//   handleSliderChange();
// });

handleSliderChange();
