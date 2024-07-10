let posts = [];

function renderPosts() {
  postsList.innerHTML = posts
    .map(
      (x) => `<details><summary>${x.title}</summary><p>${x.body}</p></details>`
    )
    .join("");
}

function init() {
  durum.innerText = "Yükleniyor lütfen bekleyiniz";
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((res) => {
      durum.innerText = "yüklendi";
      posts = res;
      renderPosts();
    });
}

init();
