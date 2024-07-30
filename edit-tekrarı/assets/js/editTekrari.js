let persons = [
  {
    name: "Ece",
    surname: "Ceylan",
    id: 1,
  },
  {
    name: "Buğra",
    surname: "Yavuz",
    id: 2,
  },
];

addPersonBtn.addEventListener("click", () => {
  modal.classList.remove("editModal");
  document.querySelector("#id").value = "";
  modal.showModal();
});

function generateId() {
  const id = Math.floor(Math.random() * 10000);
  return id;
}

function handlePersonForm(e) {
  e.preventDefault();
  let formData = new FormData(addPersonForm);
  let formObj = Object.fromEntries(formData);
  addPersonForm.reset();

  if (formObj.id !== "") {
    // guncelle
    let person = persons.find((x) => x.id === Number(formObj.id));
    person.name = formObj.name;
    person.surname = formObj.surname;
  } else {
    // yeni ekle
    formObj.id = generateId();
    persons.push(formObj);
  }

  renderPersons();
  modal.close();
}

addPersonForm.addEventListener("submit", handlePersonForm);

function createPersonHtml(person) {
  return `
  <li>
    Kişi Bilgisi:<br>
    ${person.name}    
    ${person.surname}
    <div class="personEditControls">
     <button class="personEditBtn" data-personid="${person.id}">
      Edit
     </button>
     <button class="personDeleteBtn" data-personid="${person.id}">
      Delete
     </button>
     </div>
  </li>`;
}

function handleDeleteBtn() {
  if (!confirm("Emin misin?")) {
    return;
  }
  /* çakal yöntem */
  persons = persons.filter((x) => x.id !== Number(this.dataset.personid));
  /* çakal yöntem */

  renderPersons();
}

function handleEditBtn() {
  modal.classList.add("editModal");

  let personId = Number(this.dataset.personid);
  let person = persons.find((x) => x.id === personId);
  document.querySelector("#id").value = person.id;
  document.querySelector("#name").value = person.name;
  document.querySelector("#surname").value = person.surname;
  modal.showModal();
}

function renderPersons() {
  personsContainer.innerHTML = `<ul>${persons.map((x) => createPersonHtml(x)).join("")}</ul>`;
  document.querySelectorAll(".personDeleteBtn").forEach((x) => x.addEventListener("click", handleDeleteBtn));

  document.querySelectorAll(".personEditBtn").forEach((x) => x.addEventListener("click", handleEditBtn));
}
renderPersons();
