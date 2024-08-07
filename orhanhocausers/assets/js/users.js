const getUserTodosById = (userId, todos) => todos.filter((todo) => todo.userId === userId);

function createUserTodosHtml(userTodos) {
  return userTodos.map((x) => `<li class="${x.completed ? "done" : ""}">${x.todo}</li>`).join("");
}

function renderUserTodos(userTodos) {
  if (userTodos.length < 1) {
    return;
  }

  return `<ul>${createUserTodosHtml(userTodos)}</ul>`;
}

function createUserHtml(user, userTodos) {
  console.log(userTodos);
  return `<li>${user.firstName} ${user.lastName} ${renderUserTodos(userTodos)}</li>`;
}

function render(data) {
  userList.innerHTML =
   data.users.map(
    (user) => createUserHtml(user, getUserTodosById(user.id, data.todos))
).join("");
}

async function loadData() {
  const { users } = await fetch("https://dummyjson.com/users?limit=300").then((res) => res.json());
  const { todos } = await fetch("https://dummyjson.com/todos?limit=300").then((res) => res.json());
  return { users, todos };
}

async function init() {
  const data = await loadData();
  render(data);
}

init();
