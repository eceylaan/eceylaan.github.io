let selectTipButtons = document.querySelectorAll(".select-tip button");
let bill = document.querySelector('.bill-content input');
let nop = document.querySelector(".nop input");
let amount = document.querySelector(".amount-value h6");
let total = document.querySelector(".total-value h6");
let custom = document.querySelector("#custom");
let reset = document.querySelector(".right-content button");


function handleCalcClick() {
  let btnValue = Number(this.value);
  let billValue = Number(bill.value);
  let nopValue = Number(nop.value);
  let amountResult = billValue / nopValue * btnValue / 100
  console.log(amountResult);
  amount.innerText = `$ ${amountResult.toFixed(2)}`;
  let totalResult = (billValue + (billValue * btnValue / 100)) / nopValue
  total.innerText = `$ ${totalResult.toFixed(2)}`
  custom.value = "";

  // checkInnerText();

}

function handleCustomInput() {
  console.log(this.value)
  let customValue = Number(custom.value);
  let billValue = Number(bill.value);
  let nopValue = Number(nop.value);

  let customAmountResult = billValue / nopValue * customValue / 100
  let customTotalResult = (billValue + (billValue * customValue / 100)) / nopValue
  amount.innerText = `$ ${customAmountResult.toFixed(2)}`;
  total.innerText = `$ ${customTotalResult.toFixed(2)}`;

  // checkInnerText();
}

function handleClickReset() {
  bill.value = "";
  nop.value = "";
  custom.value = "";
  amount.innerText = "$ 0.00";
  total.innerText = "$ 0.00";
  // reset.style.backgroundColor = "#0D686D";
}

reset.addEventListener("click", handleClickReset);

// function checkInnerText() {
//   if (amount.innerText != "$ 0.00") {
//     reset.style.backgroundColor = "#26C2AE";
//   }
//   else {
//     reset.style.backgroundColor = "#0D686D";
//   }
// }


custom.addEventListener("change", handleCustomInput);
bill.addEventListener("change", handleCustomInput);
nop.addEventListener("change", handleCustomInput);

for (let i = 0; i < selectTipButtons.length; i++) {
  let btn = selectTipButtons[i];
  btn.addEventListener("click", handleCalcClick);
}

