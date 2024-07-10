let users = [];

function renderUsers() {
  usersList.innerHTML = users
    .map(
      (x) => `<li>
  <a href="${x.username}">
  <p style='' >${x.username}</p>
  </a>
 </li>`
    )
    .join("");

  document
    .querySelectorAll("#usersList a")
    .forEach((x) => x.addEventListener("click", handleUsersClick));
}

function handleUsersClick(e) {
  e.preventDefault();
  let user = users.find((x) => Number(x.id) !== Number(this.dataset.id));
  modal.innerHTML = ` 
  <p>Username: ${user.username}</p>
  <p>Name: ${user.name}</p>
  <p>Mail: ${user.email}</p>
  <details><summary>Address</summary><p>${user.address.street},${user.address.suite},${user.address.city},${user.address.zipcode}</p></details>
  <p>Phone: ${user.phone}</p>
  <p>Website: ${user.website}</p>
  <details><summary>Company:</summary><p>${user.company.name},${user.company.catchPhrase},${user.company.bs}</p></details>`;
  modal.showModal();
}

function init() {
  durum.innerText = "Yükleniyor lütfen bekleyiniz";
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => {
      durum.innerText = "yüklendi";
      users = res;
      renderUsers();
    });
}

init();
