function loadProjects(projects, tasks) {
  let projectsContainer = document.getElementById("projectsContainer");

  (function addBackgroundImage() {
    let projectsPage = document.getElementById("projectsPage");
    let imageSource = "hike.jpg";
    projectsPage.style.cssText = `background-image: url(${imageSource});`;
  })();

  function deleteProject() {
    let projectIndex = parseInt(this.parentNode.id);
    projects.splice(projectIndex, 1);
    updateProjects(projects, tasks);
  }

  function createDeleteButton() {
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "btn btn-danger";
    deleteButton.addEventListener("click", deleteProject);
    return deleteButton;
  }

  function createTaskSelector() {
    let addTaskSelector = document.createElement("select");
    addTaskSelector.className = "custom-select";
    addTaskSelector.innerHTML = "<option selected>Add Task...</option>";
    addTaskSelector.addEventListener("change", function() {
      addTaskToProject(this, addTaskSelector.value);
    });
    createSelectorOptions(tasks, addTaskSelector);
    return addTaskSelector;
  }

  function addTaskToProject(node, taskID) {
    projects[node.parentNode.id].tasks.push(tasks[taskID]);
    updateProjects(projects, tasks);
    renderAddedTask(tasks, taskID, node);
  }

  (function renderProjects() {
    projectsContainer.innerHTML = "Projects:";
    for (let i = 0; i < projects.length; i++) {
      let projectDiv = document.createElement("div");
      projectDiv.className = "card";
      projectDiv.id = projects[i].id;
      let p1 = document.createElement("p");
      p1.innerHTML = `Project Name: ${projects[i].name}`;
      p1.id = `${i}`;
      let p2 = document.createElement("p");
      p2.innerHTML = "Tasks:";
      for (let j = 0; j < projects[i].tasks.length; j++) {
        let p = document.createElement("p");
        p.innerHTML = projects[i].tasks[j].title;
        p2.appendChild(p);
      }
      p1.appendChild(p2);
      projectsContainer.appendChild(projectDiv);
      projectDiv.appendChild(p1);
      projectDiv.appendChild(createTaskSelector());
      projectDiv.appendChild(createDeleteButton());
    }
  })();
}

function createSelectorOptions(tasks, addTaskSelector) {
  for (let i = 0; i < tasks.length; i++) {
    let o = document.createElement("option");
    addTaskSelector.appendChild(o);
    o.value = tasks[i].id;
    o.innerHTML = tasks[i].title;
  }
}

function renderAddedTask(tasks, taskID, node) {
  let p = document.createElement("p");
  p.innerHTML = tasks[taskID].title;
  node.parentNode.firstElementChild.firstElementChild.appendChild(p);
}

function updateProjects(projects, tasks) {
  for (let i = 0; i < projects.length; i++) {
    projects[i].id = i;
  }
  localStorage.setItem("projects", JSON.stringify(projects));
  loadProjects(projects, tasks);
}

export default loadProjects;
