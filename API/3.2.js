// Indsendelse af en formular med POST-anmodning

const form = document.getElementById("userForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    name: form.elements["name"].value,
    email: form.elements["email"].value,
  };

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error));
});
