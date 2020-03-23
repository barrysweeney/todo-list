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
    deleteButton.innerHTML = "Remove";
    deleteButton.className = "btn btn-secondary";
    deleteButton.addEventListener("click", deleteProject);
    return deleteButton;
  }

  (function renderProjects() {
    projectsContainer.innerHTML = "";
    for (let i = 0; i < projects.length; i++) {
      let p = document.createElement("p");
      p.innerHTML = `${projects[i].name}`;
      p.id = `${i}`
      p.appendChild(createDeleteButton())
      projectsContainer.appendChild(p);
    }
  })();
}

export default loadProjects;
