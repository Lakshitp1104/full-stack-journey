// ==============================
// DOM Elements
// ==============================
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


// ==============================
// Add Task Event
// ==============================
addTaskButton.addEventListener("click", function () {
  const taskText = taskInput.value;

  // Validate input
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  addTask(taskText);
  taskInput.value = "";
});


// ==============================
// Add Task Function
// ==============================
function addTask(taskText) {
  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  const deleteButton = createDeleteButton(listItem);

  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);
}


// ==============================
// Delete Button Function
// ==============================
function createDeleteButton(listItem) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function () {
    taskList.removeChild(listItem);
  });

  return deleteButton;
}
