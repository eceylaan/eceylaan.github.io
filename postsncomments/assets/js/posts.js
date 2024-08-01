let posts = [];

function renderPosts() {
  postsContainer.innerHTML = posts
    .map((x) => {
      return `
    <div id="postBox">
     <details>
     <summary id="${x.id}"><strong>${x.title}</strong></summary>
     <p class="body-text">${x.body}</p>
     <div class="comments-div">${x.comments ? x.comments.map((comment) => renderComments(comment)).join("") : ""} </div>
    </details>
    </div>`;
    })
    .join("");
}

function renderComments(comment) {
  return `
<div class="row-comment">
<p class=""><a target="blank" href="/postsncomments/user.html?userId=${comment.user.id}"><strong>👤 ${comment.user.username}</strong></a></p>
<p class="">${comment.body}</p>
<p class="likes">${comment.likes} 🖤</p>
</div>
`;
}

async function fetchComments() {
  posts.map(async (post) => {
    const { comments } = await fetch(`https://dummyjson.com/post/${post.id}/comments`).then((res) => res.json());
    post.comments = comments;
    renderPosts();
  });
}

async function init() {
  const response = await fetch("https://dummyjson.com/post").then((res) => res.json());
  posts = response.posts;
  console.log(posts);
  await fetchComments();
}

init();
