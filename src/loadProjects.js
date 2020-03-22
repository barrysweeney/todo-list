function loadProjects(projects) {
  let projectsContainer = document.getElementById("projectsContainer");

  (function renderProjects() {
    projectsContainer.innerHTML = "";
    for (let i = 0; i < projects.length; i++) {
      let p = document.createElement("p");
      p.innerHTML = `${projects[i].name}`;
      projectsContainer.appendChild(p);
    }
  })();
}

export default loadProjects;
