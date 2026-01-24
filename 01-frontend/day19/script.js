let heading = document.getElementById("title");
let button = document.getElementById("btn");

heading.textContent = "DOM Manipulation Started";

button.addEventListener("click", function () {
  heading.style.color = "blue";
});
