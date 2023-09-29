
const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.id = "remove-button";

    removeButton.addEventListener("click", function () {
        taskItem.remove();
    });

    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    taskInput.value = "";
}
