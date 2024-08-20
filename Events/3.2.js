// Dynamisk elementhåndtering
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("dynamic-button")) {
    console.log("Dynamic button clicked!");
  }
});
