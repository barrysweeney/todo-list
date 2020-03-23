function loadTasks(tasks) {
  let taskContainer = document.getElementById("taskContainer");

  
  function deleteTask() {
    let taskIndex = parseInt(this.parentNode.id);
    tasks.splice(taskIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks(tasks);
  }
  
  function createDeleteButton() {
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Remove";
    deleteButton.className = "btn btn-secondary";
    deleteButton.addEventListener("click", deleteTask);
    return deleteButton;
  }

  (function renderTasks() {
    taskContainer.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
      let p = document.createElement("p");
      p.id = `${i}`;
      p.innerHTML = `${tasks[i].title} is due on ${tasks[i].dueDate}`;
      p.appendChild(createDeleteButton());
      taskContainer.appendChild(p);
    }
  })();
}

export default loadTasks;
