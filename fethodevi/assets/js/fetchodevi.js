let photos = [];

function renderPhotos() {
  photosList.innerHTML = todos
    .map(
      (x) => `<details><summary>${x.title}</summary><p>${x.url}</p></details>`
    )
    .join("");
}

function init() {
  durum.innerText = "Yükleniyor lütfen bekleyiniz";
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((res) => {
      durum.innerText = "yüklendi";
      photos = res;
      renderPhotos();
    });
}

init();
