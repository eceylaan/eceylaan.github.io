let galleryItems = [];

function renderGalleryItems() {
  gallery.innerHTML = galleryItems
    .map(
      (x) => `<li>
  <a href="${x.url}">
    <img src="${x.thumbnailUrl}" alt="${x.title}">
    <h5>${x.title}</h5>
  </a>
</li>`
    )
    .join("");
  //sayfaya elementleri ekledikten sonra click eventleri için atama yapiyoruz
  document
    .querySelectorAll("#gallery a")
    .forEach((x) => x.addEventListener("click", handleGalleryClick));
}

function handleGalleryClick(e) {
  e.preventDefault();
  console.log(this.href);
  modal.innerHTML = `<img src="${this.href}">`;
  modal.showModal();
}

function init() {
  fetch("https://jsonplaceholder.typicode.com/photos?_limit=100")
    .then((res) => res.json())
    .then((res) => {
      galleryItems = res;
      renderGalleryItems();
    });
}

init();
