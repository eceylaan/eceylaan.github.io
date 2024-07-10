let form = document.querySelector("form");
let listElement = document.querySelector(".list-container");
let deleteBtn = document.querySelector(".delete-btn");

let infoList = [];
let isEditing = false;
let editIndex = null;

let dialog = document.querySelector("dialog");

let modelEdit = document.querySelector(".modelEdit");
let modelAddNew = document.querySelector(".modelAddNew");

modelAddNew.classList.remove("hidden");

function dialogOpen() {
  dialog.open = true;
  console.log("çalıştım");
}
addAdress.addEventListener("click", dialogOpen);

if (typeof localStorage.infoList !== "undefined") {
  infoList = JSON.parse(localStorage.infoList);
  insertData();
}

function HandleSubmit(e) {
  e.preventDefault();
  let formData = new FormData(form);
  let formObj = Object.fromEntries(formData);

  if (isEditing) {
    infoList[editIndex] = formObj;
    isEditing = false;
    editIndex = null;
    modelAddNew.classList.remove("hidden");
    modelEdit.classList.add("hidden");
  } else {
    infoList.push(formObj);
  }
  dialog.close();

  form.reset();
  insertData();
  save();
}

form.addEventListener("submit", HandleSubmit);

function insertData() {
  listElement.innerHTML = "";
  for (let i = 0; i < infoList.length; i++) {
    listElement.innerHTML += `
    <li data-index="${i}">
      <p>${infoList[i].name}</p>
      <p>${infoList[i].surname}</p>
      <p>${infoList[i].tel}</p>
      <p>${infoList[i].adres}</p>
      <button class="edit">Düzenle</button>
      <button class="del">Sil</button>
    </li>
    `;
  }

  document.querySelectorAll(".edit").forEach((btn) => {
    btn.addEventListener("click", handleEdit);
  });

  document.querySelectorAll(".del").forEach((btn) => {
    btn.addEventListener("click", handleDelete);
  });
}

function handleEdit(e) {
  modelAddNew.classList.add("hidden");
  modelEdit.classList.remove("hidden");
  dialogOpen();

  const index = e.target.parentElement.dataset.index;
  const item = infoList[index];
  form.elements["name"].value = item.name;
  form.elements["surname"].value = item.surname;
  form.elements["tel"].value = item.tel;
  form.elements["adres"].value = item.adres;

  isEditing = true;
  editIndex = index;
}

function handleDelete(e) {
  const index = e.target.parentElement.dataset.index;
  infoList.splice(index, 1);
  insertData();
  save();
}

function save() {
  localStorage.infoList = JSON.stringify(infoList);
}

function clear() {
  localStorage.clear();
  infoList = [];
  insertData();
}

deleteBtn.addEventListener("click", clear);
