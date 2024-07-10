let users = [];

function renderUsers() {
  userList.innerHTML = users
    .map(
      (user) => `<li><a href="#" data-userid="${user.id}">${user.name}</a></li>`
    )
    .join("");

  document
    .querySelectorAll("#userList a")
    .forEach((x) => x.addEventListener("click", handleUserClick));
}

function handleUserClick(e) {
  e.preventDefault();
  let userId = Number(this.dataset.userid);
  let user = users.find((x) => x.id === userId);
  console.log(user);
  let content = `
    <h4>${user.name}</h4>
    <p>E-Posta Adresi: ${user.email}</p>
    <p>Telefon: ${user.phone}</p>
    <p>Yaşadığı Şehir: ${user.address.city}</p>
  `;

  modal.innerHTML = content;
  modal.showModal();
}

function init() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => {
      users = res;
      renderUsers();
    });
}

init();
