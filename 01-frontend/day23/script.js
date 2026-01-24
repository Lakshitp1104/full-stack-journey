let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let button = document.getElementById("submitBtn");
let message = document.getElementById("message");

button.addEventListener("click", function () {
  if (username.value === "" || email.value === "" || password.value.length < 6) {
    message.textContent = " password much be 6 letters required";
    message.style.color = "red";
  } else {
    message.textContent = "Registration successful!";
    message.style.color = "green";
    

  }
});
