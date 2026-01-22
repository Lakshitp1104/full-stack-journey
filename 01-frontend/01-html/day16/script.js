// ===============================
// 1️⃣ Print numbers from 1 to 10
// ===============================
console.log("Numbers from 1 to 10:");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}


// =======================================
// 2️⃣ Print even numbers from 1 to 20
// =======================================
console.log("Even numbers from 1 to 20:");

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// =================================================
// 3️⃣ Check if a number is positive, negative, or zero
// =================================================
let number = -5;

if (number > 0) {
  console.log("Number is positive");
} else if (number < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}


// =====================================
// 4️⃣ Check if a student passed or failed
// =====================================
let marks = 45;

if (marks >= 40) {
  console.log("Student passed");
} else {
  console.log("Student failed");
}
