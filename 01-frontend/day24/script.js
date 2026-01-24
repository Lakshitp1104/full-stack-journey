// ==============================
// DOM ELEMENTS
// ==============================
const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");


// ==============================
// EVENT LISTENERS
// ==============================
form.addEventListener("submit", handleFormSubmit);


// ==============================
// EVENT HANDLER
// ==============================
function handleFormSubmit(event) {
  event.preventDefault(); // stop page refresh

  if (!isFormValid()) {
    return;
  }

  alert("Form submitted successfully!");
}


// ==============================
// VALIDATION FUNCTIONS
// ==============================
function isFormValid() {
  if (nameInput.value.trim() === "") {
    alert("Name is required");
    return false;
  }

  if (emailInput.value.trim() === "") {
    alert("Email is required");
    return false;
  }

  if (passwordInput.value.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  return true;
}
