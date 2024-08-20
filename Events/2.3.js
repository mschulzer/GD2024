// Praktisk øvelse - Forebyggelse af standardadfærd
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submission prevented");
});
