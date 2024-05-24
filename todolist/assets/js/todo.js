let btn = document.querySelector('#addBtn');

let list = document.querySelector('#list');
let todoText = document.querySelector('#todoText');
function addtoList() {
  if (todoText.value == '') {
    alert('you can not enter empty value');
    return;
  }
  list.innerHTML += '<li>' + todoText.value + '</li>';
  todoText.value = '';
}

btn.addEventListener('click', addtoList);