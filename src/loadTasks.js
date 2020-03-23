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
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "btn btn-danger";
    deleteButton.addEventListener("click", deleteTask);
    return deleteButton;
  }

  function expandTask(){
    if(this.parentNode.firstElementChild.childElementCount === 0){
      this.innerHTML = "See less info"
    let taskIndex = parseInt(this.parentNode.id)
    let p1 = document.createElement("p")
    p1.innerHTML = `${tasks[taskIndex].description}`
    let p2 = document.createElement("p")
    p2.innerHTML = `${tasks[taskIndex].priority} priority`
    this.parentNode.firstElementChild.appendChild(p1)
    this.parentNode.firstElementChild.appendChild(p2)
    }else{
      this.innerHTML = "See more info"
      this.parentNode.firstElementChild.removeChild(this.parentNode.firstElementChild.firstElementChild);
      this.parentNode.firstElementChild.removeChild(this.parentNode.firstElementChild.firstElementChild);
    }
  }

  function createMoreInfoButton() {
    let moreInfoButton = document.createElement("button");
    moreInfoButton.innerHTML = "See more info";
    moreInfoButton.className = "btn btn-secondary";
    moreInfoButton.addEventListener("click", expandTask);
    return moreInfoButton;
  }

  (function renderTasks() {
    taskContainer.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
      let taskDiv = document.createElement("div");
      taskDiv.id = `${i}`;
      taskDiv.className="card"
      let p = document.createElement("p")
      p.innerHTML = `${tasks[i].title} is due on ${tasks[i].dueDate}`;
      taskContainer.appendChild(taskDiv);
      taskDiv.appendChild(p);
      taskDiv.appendChild(createMoreInfoButton());
      taskDiv.appendChild(createDeleteButton());
      
    }
  })();
}

export default loadTasks;
