const currentURL = window.location.search;
const searchParams = new URLSearchParams(currentURL);
console.log(searchParams.get("userId"));

let user = null;
let userPosts = [];
let userTodos = [];

async function fetchUserTodos() {
  const userId = searchParams.get("userId");
  const todosRes = await fetch(`https://dummyjson.com/users/${userId}/todos`).then((res) => res.json());
  userTodos = todosRes.todos;
  console.log(userTodos);
  renderTodos(userTodos);
}

//todosRes seklinde yazarsan daha iyi anliyosun
// const todosRes dedigin icin globalde erisemezsin

async function fetchUserPosts() {
  const userId = searchParams.get("userId");
  const posts = await fetch(`https://dummyjson.com/users/${userId}/posts`).then((res) => res.json());
  userPosts = posts.posts;
  renderPosts(userPosts);
}

async function init() {
  let userId = searchParams.get("userId");

  const response = await fetch(`https://dummyjson.com/user/${userId}`).then((res) => res.json());
  user = response;
  render(user);
  document.querySelector("title").innerText = `${user.firstName} ${user.lastName}`;
  await fetchUserPosts();
  await fetchUserTodos();
}

//const user deseydim globalde eriswmicektim asagida

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

  const middleTitle = document.createElement("div"); //yarattim
  middleTitle.className = "middle-title"; //class verdim
  document.body.appendChild(middleTitle); // element icine ekledim
  middleTitle.innerHTML = ` 
  <h1>${user.firstName}'s Posts</h1>
  `;
}

// const myStyle = document.createElement("style");
// myStyle.innerText = ".user-photo{ width:400px; }";
// document.head.appendChild(myStyle);
// bide boyle igrenc rezil otesi bi jsye csss eklemeli kullanim var tum cssi ekleyebilirsin buraya
// allah dusurmesin de zorda kalirsan diye

// user'a ait postlari users/:id/posts(:degisken oldugu anlamina geliyo)
// https://dummyjson.com/users/132/posts

function renderPosts(posts) {
  const postsContainer = document.createElement("div"); //yarattim
  postsContainer.className = "posts-container"; //class verdim
  document.body.appendChild(postsContainer); // ekledim

  posts.forEach((post) => {
    console.log(post);
    const postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.innerHTML = `
      <h4 class="user-post-title" >${post.title}</h4>
      <p class="user-post-texts">${post.body}</p>
      <div class="post-reactions"> 
       <p class="user-post-likes">♥ ${post.reactions.likes}</p>
       <p class="user-post-dislikes">✖️ ${post.reactions.likes}</p>
      </div>
      <p class="user-post-tags">${post.tags
        .map((tag) => {
          return `#${tag}`;
        })
        .join(" ")}</p>

    `;
    postsContainer.appendChild(postDiv);
  });

  const finalTitle = document.createElement("div"); //yarattim
  finalTitle.className = "final-title"; //class verdim
  document.body.appendChild(finalTitle); // element icine ekledim
  finalTitle.innerHTML = ` 
  <h1>${user ? user.firstName : ""}'s To Do</h1>
  `;
}

function renderTodos(todos) {
  const todosContainer = document.createElement("div");
  todosContainer.className = "todos-container";
  document.body.appendChild(todosContainer);

  todos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo";
    todoDiv.innerHTML = `
      <h4>${todo.todo}</h4>
      <p>${todo.completed ? "Completed" : "Not Completed"}</p>
    `;
    todosContainer.appendChild(todoDiv);
  });
}
