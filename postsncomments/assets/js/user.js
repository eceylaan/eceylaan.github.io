const currentURL = window.location.search;
const searchParams = new URLSearchParams(currentURL);
console.log(searchParams.get("userId"));

let user = null;

async function init() {
  let userId = searchParams.get("userId");

  const response = await fetch(`https://dummyjson.com/user/${userId}`).then((res) => res.json());
  const user = response;
  render(user);
}

init();

// function get(param){
//   window.location.search
//   return deger
// } yukardakinin mantigi

function render(user) {
  const userContainerDiv = document.createElement("div");
  document.body.appendChild(userContainerDiv);
  userContainerDiv.className = "user-container";

  const pEl = document.createElement("p");
  pEl.innerText = user.username;
  pEl.className = "user-name";
  // pEl.classList.add("user-name"); bu sekilde de yaziliyo bu fonksiyon hali bu sekilde yazmak o elemente birden fazla class eklemek
  //istersen yapiyosun artisi o

  // Append to another element: doc.(hangi elementin icine eklemek istiyosan onun adi).appendChild(ekliceğin element adi)
  userContainerDiv.appendChild(pEl);

  const userInfoDiv = document.createElement("div"); //yarattim
  userContainerDiv.appendChild(userInfoDiv); //element icine ekledim
  userInfoDiv.className = "user-info"; //class verdim
  userInfoDiv.innerHTML = `
   <div class="user-center-div"> 
      <div class="photo-container"> 
      <img class="use-photo" src="${user.image}">
</div>
    <h2>${user.firstName} ${user.lastName}</h2>
    <p>${user.company.department}</p>
    <p>${user.address.city} / ${user.address.country}</p>
   </div>
   <div class="user-details"> 
    <p>${user.gender}</p>
    <p>${user.birthDate}</p>
    <p>${user.email}</p>
    <p>${user.phone}</p>
   </div>
  `;
}

// const myStyle = document.createElement("style");
// myStyle.innerText = ".user-photo{ width:400px; }";
// document.head.appendChild(myStyle);
// bide boyle igrenc rezil otesi bi jsye csss eklemeli kullanim var tum cssi ekleyebilirsin buraya
// allah dusurmesin de zorda kalirsan diye

// user'a ait postlari users/:id/posts(:degisken oldugu anlamina geliyo)
