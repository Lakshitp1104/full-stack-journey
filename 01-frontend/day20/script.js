let input = document.getElementById("nameInput");
let button = document.getElementById("greetBtn");
let output = document.getElementById("output");

button.addEventListener("click", function () {
  let name = input.value;

  if (name === "") {
    output.textContent = "Please enter your name";
  } else {
    output.textContent = "Hello " + name + "!";
  }
});
