let btns = document.querySelectorAll(".calculator button");
let box = document.querySelector(".box");

function handleCalcClick() {
  box.innerText += this.innerText;
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", handleCalcClick);
}

// let btn1 = document.querySelector('#btn1');
// function handleBtn1Click() {
//   let input1Val = Number(document.querySelector('#input1_1').value);
//   let input2Val = Number(document.querySelector('#input1_2').value);
//   let toplam = tumunuTopla([input1Val, input2Val]);
//   alert(toplam);

// }

// function handleCalcClick() {
//   alert(this.innerText);
// }

// function addtoList() {
//   if (todoText.value == '') {
//     alert('you can not enter empty value');
//     return;
//   }
//   list.innerHTML += '<li>' + todoText.value + '</li>';
//   todoText.value = '';
// }

// btn.addEventListener('click', addtoList);
