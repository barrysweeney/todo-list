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
    addTaskButton.addEventListener("change", function(){
      addTaskToProject(this, addTaskButton.value)
    })
    for (let i = 0; i < tasks.length; i++) {
      let o = document.createElement("option");
      addTaskButton.appendChild(o);
      o.value = tasks[i].id;
      o.innerHTML = tasks[i].title;
    }
    addTaskButton.addEventListener("change", addTask);
    return addTaskButton;
  }

  function addTaskToProject(node , taskID){
    let p = document.createElement("p")
    p.innerHTML = tasks[taskID].title
    node.parentNode.firstElementChild.firstElementChild.appendChild(p)
    projects[node.parentNode.id].tasks.push(tasks[taskID])
    localStorage.setItem("projects", JSON.stringify(projects));
    loadProjects(projects, tasks);

  }

  (function renderProjects() {
    projectsContainer.innerHTML = "";
    for (let i = 0; i < projects.length; i++) {
      let projectDiv = document.createElement("div");
      projectDiv.className = "card";
      projectDiv.id = projects[i].id;
      let p1 = document.createElement("p");
      p1.innerHTML = `Project Name: ${projects[i].name}`;
      p1.id = `${i}`;
      let p2 = document.createElement("p");
      p2.innerHTML = "Tasks:";
      for(let j = 0; j< projects[i].tasks.length; j++){
        let p = document.createElement("p")
        p.innerHTML = projects[i].tasks[j].title
        p2.appendChild(p)
      }
      p1.appendChild(p2);
      projectsContainer.appendChild(projectDiv);
      projectDiv.appendChild(p1);
      projectDiv.appendChild(createAddTaskButton());
      projectDiv.appendChild(createDeleteButton());
    }
  })();
}

export default loadProjects;
