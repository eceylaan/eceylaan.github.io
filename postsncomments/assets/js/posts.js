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
<p class=""><strong>👤 ${comment.user.username}</strong></p>
<p class="">${comment.body}</p>
<p class="likes">${comment.likes} 🖤</p>
</div>
`;
}

function fetchComments() {
  posts.map((post) => {
    fetch(`https://dummyjson.com/post/${post.id}/comments`)
      .then((res) => res.json())
      .then((res) => {
        post.comments = res.comments;
        renderPosts();
      });
  });
}

function init() {
  fetch("https://dummyjson.com/post")
    .then((res) => res.json())
    .then((res) => {
      posts = res.posts;
      console.log(posts);
      fetchComments();
    });
}

init();
