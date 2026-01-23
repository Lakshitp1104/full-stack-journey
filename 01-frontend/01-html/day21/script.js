let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("taskList");

button.addEventListener("click", function () {
  let task = input.value;

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");
  li.textContent = task;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function () {
    list.removeChild(li);
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
});
