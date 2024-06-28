let toDo = document.querySelector("#todotext");
let addButton = document.querySelector("#btn");
let makeList = document.querySelector("#list");
let temizle = document.querySelector("#btn2");

let toDoArray = [
  "kursa git",
  "proje yap",
  "konu tekrar et",
  "araştırma yap",
  "sevgiline zaman ayır",
  "kedyni sev",
  "kedyni çok sev",
  "kedyni çok daha sev ",
  "vitaminini iç",
  "eve klima al",
];

if (typeof localStorage.todolist !== "undefined") {
  toDoArray = JSON.parse(localStorage.todolist);
}

if (localStorage.id) {
  id = Number(localStorage.id);
}

function generateId() {
  i++;
  localStorage.id = id;
  return id;
}

function addToList() {
  if (toDo.value == "") {
    alert("you can not enter empty value");
    return;
  }
  let newItem = document.createElement("li");
  newItem.innerHTML = `${toDo.value} 
    <button class="delete-btn">Sil</button>
    <button class="edit-btn">Düzenle</button>`;
  makeList.appendChild(newItem);

  // Butonlara event listener ekle
  newItem.querySelector(".delete-btn").addEventListener("click", deleteItem);
  newItem.querySelector(".edit-btn").addEventListener("click", editItem);

  toDoArray.push(toDo.value);
  toDo.value = "";
  save();
}

addButton.addEventListener("click", addToList);

function save() {
  localStorage.todolist = JSON.stringify(toDoArray);
}

function render() {
  makeList.innerHTML = ""; // Listeyi temizle
  if (toDoArray.length > 0) {
    for (let i = 0; i < toDoArray.length; i++) {
      let listItem = document.createElement("li");
      listItem.innerHTML = `${toDoArray[i]} 
        <button class="delete-btn">Sil</button>
        <button class="edit-btn">Düzenle</button>`;
      makeList.appendChild(listItem);

      // Butonlara event listener ekle
      listItem
        .querySelector(".delete-btn")
        .addEventListener("click", deleteItem);
      listItem.querySelector(".edit-btn").addEventListener("click", editItem);
    }
  }
}

render();

function clear() {
  localStorage.clear();
  toDoArray = [];
  render();
}

temizle.addEventListener("click", clear);

function deleteItem(event) {
  let index = Array.from(makeList.children).indexOf(event.target.parentElement);
  toDoArray.splice(index, 1);
  save();
  render();
}

function editItem(event) {
  let index = Array.from(makeList.children).indexOf(event.target.parentElement);
  let newValue = prompt("Öğeyi düzenleyin:", toDoArray[index]);
  if (newValue) {
    toDoArray[index] = newValue;
    save();
    render();
  }
}
