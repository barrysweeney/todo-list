import loadTasks from "./loadTasks";

function loadProjects(projects, tasks) {
  let projectsContainer = document.getElementById("projectsContainer");

  function deleteProject() {
    let projectIndex = parseInt(this.parentNode.id);
    projects.splice(projectIndex, 1);
    localStorage.setItem("projects", JSON.stringify(projects));
    loadProjects(projects, tasks);
  }

  function createDeleteButton() {
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "btn btn-danger";
    deleteButton.addEventListener("click", deleteProject);
    return deleteButton;
  }

  function addTask() {

  }

  function createAddTaskButton() {
    let addTaskButton = document.createElement("select");
    addTaskButton.className = "custom-select";
    addTaskButton.innerHTML = "<option selected>Add Task...</option>"
    for (let i = 0; i < tasks.length; i++) {
      let o = document.createElement("option");
      addTaskButton.appendChild(o);
      o.value = tasks[i];
      o.innerHTML = tasks[i].title;
    }
    addTaskButton.addEventListener("click", addTask);
    return addTaskButton;
  }

  (function renderProjects() {
    projectsContainer.innerHTML = "";
    for (let i = 0; i < projects.length; i++) {
      let projectDiv = document.createElement("div");
      projectDiv.className = "card";
      let p1 = document.createElement("p");
      p1.innerHTML = `Project Name: ${projects[i].name}`;
      p1.id = `${i}`;
      let p2 = document.createElement("p");
      p2.innerHTML = "Tasks:";
      p1.appendChild(p2);
      projectsContainer.appendChild(projectDiv);
      projectDiv.appendChild(p1);
      projectDiv.appendChild(createAddTaskButton());
      projectDiv.appendChild(createDeleteButton());
    }
  })();
}

export default loadProjects;
