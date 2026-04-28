function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = task + ' <button onclick="removeTask(this)">Delete</button>';

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}
