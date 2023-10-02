document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const createButton = document.getElementById("createButton");

    createButton.addEventListener("click", function () {
        const taskName = taskInput.value.trim();
        if (taskName !== "") {
            const taskElement = document.createElement("div");
            taskElement.className = "task";
            taskElement.textContent = taskName;

            taskElement.draggable = true;

            taskElement.addEventListener("dragstart", function (event) {
                event.dataTransfer.setData("text/plain", taskName);
            });

            const openColumn = document.getElementById("openColumn");
            openColumn.appendChild(taskElement);

            taskInput.value = "";
        }
    });
});

function allowDrop(event) {
    event.preventDefault();
}

function drop(event, column) {
    event.preventDefault();
    const taskName = event.dataTransfer.getData("text/plain");
    const taskElement = document.createElement("div");
    taskElement.className = "task";
    taskElement.textContent = taskName;
    taskElement.draggable = true;

    taskElement.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text/plain", taskName);
    });

    const targetColumn = document.getElementById(column);
    targetColumn.appendChild(taskElement);
}
