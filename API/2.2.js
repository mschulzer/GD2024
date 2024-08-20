// Arbejde med JSON-data
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => {
    document.getElementById("user-name").textContent = user.name;
    document.getElementById("user-email").textContent = user.email;
  });

// Fejlhåndtering
fetch("https://jsonplaceholder.typicode.com/invalid-url")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
