let personInfo = null;

function renderPerson() {
  personInfoContainer.style.display = "block";
  console.log(personInfo.name);
  console.log(personInfo.location);
  console.log(personInfo.avatar_url);

  personName.innerText = `${personInfo.name}`;
  konum.innerText = `${personInfo.location}`;
  personPhoto.src = `${personInfo.avatar_url}`;
  company.innerText = `@${personInfo.company}`;
  repoNumber.innerText = `${personInfo.public_repos}`;
  followersNumber.innerText = `${personInfo.followers}`;
  followingNumber.innerText = `${personInfo.following}`;
  dateNumber.innerText = `${personInfo.created_at}`;
  blog.innerText = `${personInfo.blog}`;
  twitterUsername.innerText = `${personInfo.twitter_username}`;
  if (personInfo.bio) {
    bio.innerText = personInfo.bio;
  } else {
    bio.innerText = "This profile has no bio";
  }

  // if (personInfo.message) {
  //   personInfoContainer.innerHTML = "<h2>" + personInfo.message + "404" + "</h2>";
  // }
  // bio.innerText = `${personInfo.bio ? personInfo.bio : "This user has no bio"}`;
}

let themeBtn = document.querySelector("#darkModeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (themeBtn.innerText === "DARK") {
    themeBtn.innerHTML = "<p>LIGHT</p><i style='color:white; font-size:20px' class='fa-regular fa-sun'></i>";
  } else {
    themeBtn.innerHTML = "<p>DARK</p><img src='./assets/img/Path (1).svg' alt='night-mood-icon'>";
  }
});

function handleSearchSubmit(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const formObj = Object.fromEntries(formData);
  console.log(formObj);
  init(formObj.user);
}
searchForm.addEventListener("submit", handleSearchSubmit);

function init(user) {
  fetch(`https://api.github.com/users/${user}`)
    .then((res) => res.json())
    .then((res) => {
      personInfo = res;
      console.log(personInfo);
      renderPerson();
    });
}
