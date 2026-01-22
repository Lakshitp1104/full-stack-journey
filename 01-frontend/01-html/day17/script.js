// 1️⃣ Greet user
function greetUser(name) {
  console.log("Hello, " + name);
}

// Call the function
greetUser("Lakshit");


// 2️⃣ Add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Call the function
console.log(addNumbers(5, 3));


// 3️⃣ Check if adult
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// Call the function
console.log(isAdult(20));
console.log(isAdult(15));


// 4️⃣ Calculate grade
function calculateGrade(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 75) {
    return "B";
  } else if (marks >= 50) {
    return "C";
  } else {
    return "Fail";
  }
}

// Call the function
console.log(calculateGrade(92));
console.log(calculateGrade(78));
console.log(calculateGrade(45));
