function loadProjects(projects) {
  let projectsContainer = document.getElementById("projectsContainer");

  function deleteProject() {
    let projectIndex = parseInt(this.parentNode.id);
    projects.splice(projectIndex, 1);
    localStorage.setItem("projects", JSON.stringify(projects));
    loadProjects(projects);
  }

  function createDeleteButton() {
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "btn btn-danger";
    deleteButton.addEventListener("click", deleteProject);
    return deleteButton;
  }

  function addTask() {}

  function createAddTaskButton() {
    let addTaskButton = document.createElement("button");
    addTaskButton.innerHTML = "Add Task";
    addTaskButton.className = "btn btn-secondary";
    addTaskButton.addEventListener("click", addTask);
    return addTaskButton;
  }

  (function renderProjects() {
    projectsContainer.innerHTML = "";
    for (let i = 0; i < projects.length; i++) {
      let projectDiv = document.createElement("div");
      projectDiv.className = "card";
      let p = document.createElement("p");
      p.innerHTML = `${projects[i].name}`;
      p.id = `${i}`;
      projectsContainer.appendChild(projectDiv);
      projectDiv.appendChild(p);
      projectDiv.appendChild(createAddTaskButton());
      projectDiv.appendChild(createDeleteButton());
    }
  })();
}

export default loadProjects;
