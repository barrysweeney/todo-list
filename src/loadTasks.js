function loadTasks(tasks, projects) {
  const taskContainer = document.getElementById("taskContainer");

  (function addBackgroundImage() {
    let tasksPage = document.getElementById("tasksPage");
    let imageSource = "background.jpg";
    tasksPage.style.cssText = `background-image: url(${imageSource});`;
  })();

  (function renderTasks() {
    taskContainer.innerHTML = "To do:";
    for (let i = 0; i < tasks.length; i++) {
      let taskDiv = document.createElement("div");
      taskDiv.id = `${i}`;
      taskDiv.className = "card";
      let p = document.createElement("p");
      p.innerHTML = `${tasks[i].title} is due on ${tasks[i].dueDate}`;
      taskContainer.appendChild(taskDiv);
      taskDiv.appendChild(p);
      taskDiv.appendChild(toggleExpandTaskButton());
      taskDiv.appendChild(createDeleteButton());
    }
  })();

  function deleteTask() {
    let taskIndex = parseInt(this.parentNode.id);
    deleteTaskFromProjects(projects, tasks, taskIndex);
    tasks.splice(taskIndex, 1);
    updateTasks(tasks);
    updateProjects(projects);
  }

  function createDeleteButton() {
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "btn btn-danger";
    deleteButton.addEventListener("click", deleteTask);
    return deleteButton;
  }

  function toggleExpandTask() {
    if (this.parentNode.firstElementChild.childElementCount === 0) {
      this.innerHTML = "See less info";
      let taskIndex = parseInt(this.parentNode.id);
      let p1 = document.createElement("p");
      p1.innerHTML = `${tasks[taskIndex].description}`;
      let p2 = document.createElement("p");
      p2.innerHTML = `${tasks[taskIndex].priority} priority`;
      this.parentNode.firstElementChild.appendChild(p1);
      this.parentNode.firstElementChild.appendChild(p2);
    } else {
      this.innerHTML = "See more info";
      this.parentNode.firstElementChild.removeChild(
        this.parentNode.firstElementChild.firstElementChild
      );
      this.parentNode.firstElementChild.removeChild(
        this.parentNode.firstElementChild.firstElementChild
      );
    }
  }

  function toggleExpandTaskButton() {
    let moreInfoButton = document.createElement("button");
    moreInfoButton.innerHTML = "See more info";
    moreInfoButton.className = "btn btn-info";
    moreInfoButton.addEventListener("click", toggleExpandTask);
    return moreInfoButton;
  }
}

function deleteTaskFromProjects(projects, tasks, taskIndex) {
  for (let j = 0; j < projects.length; j++) {
    for (let i = 0; i < projects[j].tasks.length; i++) {
      if (projects[j].tasks[i].id === tasks[taskIndex].id) {
        projects[j].tasks.splice(taskIndex, 1);
      }
    }
  }
}

function updateProjects(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

function updateTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks(tasks);
}

export default loadTasks;
