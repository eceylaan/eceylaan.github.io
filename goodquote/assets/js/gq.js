let advice = null;
document.querySelector("#btn").addEventListener("click", init);
function renderAdvices() {
  console.log(advice);
  adviceText.innerHTML = `
    <h4>“${advice.slip.advice}”</h4>
  `;
  idText.innerHTML = `
  <h4>ADVICE #${advice.slip.id}</h4>`;
}

function init() {
  adviceText.innerHTML = "Loading...";
  idText.innerHTML = "";
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((res) => {
      advice = res;
      renderAdvices();
    });
}

init();
