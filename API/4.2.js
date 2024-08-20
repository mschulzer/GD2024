// Eksempel: Opret en "Load More"-knap, der henter den næste side med data og tilføjer den til DOM

let page = 1;
const loadMoreButton = document.getElementById("load-more");

loadMoreButton.addEventListener("click", () => {
  fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
    .then((response) => response.json())
    .then((posts) => {
      const postList = document.getElementById("post-list");
      posts.forEach((post) => {
        const listItem = document.createElement("li");
        listItem.textContent = post.title;
        postList.appendChild(listItem);
      });
    });

  page += 1;
});
