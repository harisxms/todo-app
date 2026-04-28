function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");
  li.textContent = task;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  deleteBtn.onclick = function () {
    li.remove();
  };

  li.onclick = function () {
    li.classList.toggle("done");
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
document.getElementById("taskInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addTask();
  }
});