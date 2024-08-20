// Brug hændelsesobjektet

document.addEventListener("click", function (event) {
  console.log(event.type);
  console.log(event.target);
});
