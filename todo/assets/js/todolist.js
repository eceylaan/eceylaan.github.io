let toDo = document.querySelector('#todotext');
let addButton = document.querySelector('#btn');
let makeList = document.querySelector('#list');
let temizle = document.querySelector('#btn2');

let toDoArray = ["kursa git", "proje yap", "konu tekrar et", "araştırma yap", "sevgiline zaman ayır", "kedyni sev", "kedyni çok sev", "kedyni çok daha sev ", "vitaminini iç", "eve klima al"];

if (typeof localStorage.todolist !== 'undefined') {
  toDoArray = JSON.parse(localStorage.todolist);

}
function addToList() {
  if (toDo.value == '') {
    alert('you can not enter empty value');
    return;
  }
  makeList.innerHTML += `<li>${toDo.value}</li>`;
  toDoArray.push(toDo.value);
  toDo.value = '';
  save();
}

addButton.addEventListener('click', addToList);

function save() {
  localStorage.todolist = JSON.stringify(toDoArray);
}

function render() {

  if (toDoArray.length > 0) {

    for (let i = 0; i < toDoArray.length; i++) {
      makeList.innerHTML += `<li>${toDoArray[i]}</li>`;
    }
  } else {
    makeList.innerHTML = '';
  }

}

render()

function clear() {
  localStorage.clear();
  toDoArray = [];
  render();
}

temizle.addEventListener('click', clear);
