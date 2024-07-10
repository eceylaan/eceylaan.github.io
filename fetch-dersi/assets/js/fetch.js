let todos = [];

function renderTodos() {
  todoList.innerHTML = todos
    .map(
      (x) =>
        `<li> <input type="checkbox" ${x.completed ? "checked" : ""}> ${
          x.title
        }</li>`
    )
    .join("");
}

function init() {
  durum.innerText = "Yükleniyor lütfen bekleyiniz";
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((res) => {
      durum.innerText = "yüklendi";
      todos = res;
      renderTodos();
    });
}

init();

// function checkbox() {
//   if (x.completed === true) {
//    return `<li> <input type="checkbox" checked > ${x.title}</li>`; hocanin yaptigi
//     document.querySelectorAll("i").checked = true; benim dusundugum
//   }else {
//     return `<li> <input type="checkbox" > ${x.title}</li>`; hocanin yaptigi
//     document.querySelectorAll("").checked = false; benim dusundugum
//   }
// }).join('');
//}
