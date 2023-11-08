document.addEventListener("DOMContentLoaded", function(){
    var task = document.getElementById("task");
    var add = document.getElementById("add");
    var tasklist = document.getElementById("taskList");

    add.addEventListener("click", addTask);

    task.addEventListener("keypress", function(event){
        if (event.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        var taskVal = task.value.trim();

        if (taskVal === "") {
            alert("Cannot add an empty task!!!");
            return;
        }

        var taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskVal}</span>
            <button class="delete">Delete</button>
        `;
        tasklist.appendChild(taskItem);

        var deleteBtn = taskItem.querySelector(".delete");

        deleteBtn.addEventListener("click", function(){
            tasklist.removeChild(taskItem);
        });

        task.value = ""; // Clear the input field
    }
});
