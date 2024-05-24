

let kg = document.querySelector('#kg');
let m = document.querySelector('#m');
let result = document.querySelector('#result');
let btn = document.querySelector('#calculate');
let bmi;
let warn = document.querySelector('#warn');
function calculate() {
  if (kg.value && m.value) {
    bmi = Number(kg.value) / Number(Math.pow(m.value, 2));
    renderResult();
    warn.innerHTML = ''

  } else {
    warn.innerHTML = 'fill both values'
  }
}

function renderResult() {
  let obesity;
  let color;

  if (bmi <= 18.5) {
    obesity = 'Underweight'
    color = 'red'
  }
  else if (bmi < 25) {
    obesity = 'Normal'
    color = 'green'
  }
  else if (bmi < 30) {
    obesity = 'Overweight'
    color = 'orange'
  }
  else if (bmi < 35) {
    obesity = 'obese'
    color = 'red'
  }
  else {
    obesity = 'extremely obese'
    color = '#A91D3A'
  }
  result.innerHTML = bmi.toFixed(2) + "<span style=color:" + color + "> Weight Rate =" + obesity + "</span>";

}

btn.addEventListener('click', calculate);