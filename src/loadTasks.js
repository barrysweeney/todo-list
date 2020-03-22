function loadTasks(tasks) {
  let taskContainer = document.getElementById("taskContainer");

  (function renderTasks() {
    taskContainer.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
      let p = document.createElement("p");
      p.innerHTML = `${tasks[i].title} is due on ${tasks[i].dueDate}`;
      taskContainer.appendChild(p);
    }
  })();
}

export default loadTasks;
