import loadTasks from "./loadTasks";
import loadProjects from "./loadProjects";

class Task {
  constructor(id, title, description, dueDate, priority) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class Project {
  constructor(id, name) {
    this.id = id
    this.name = name;
    this.tasks = [];
  }
}

let tasks = [];
let projects = [];

(function startUp() {
  getTasks();
  loadTasks(tasks);
})();

function getTasks() {
  if (JSON.parse(localStorage.getItem("tasks")) !== null) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
}

function getProjects() {
  if (JSON.parse(localStorage.getItem("projects")) !== null) {
    projects = JSON.parse(localStorage.getItem("projects"));
  }
}

const submitTaskButton = document.getElementById("submitTask");
const submitProjectButton = document.getElementById("submitProject");
const newTaskButton = document.getElementById("newTask");
const newProjectButton = document.getElementById("newProject");
const projectsTab = document.getElementById("projectsTab");

projectsTab.addEventListener("click", function() {
  if (tasksTab.classList.contains("active")) {
    tasksTab.classList.remove("active");
    projectsTab.classList.add("active");
    toggleTasksPage();
    toggleProjectsPage();
    getProjects();
    loadProjects(projects, tasks);
  }
});

const tasksTab = document.getElementById("tasksTab");

tasksTab.addEventListener("click", function() {
  if (projectsTab.classList.contains("active")) {
    projectsTab.classList.remove("active");
    tasksTab.classList.add("active");
    toggleProjectsPage();
    toggleTasksPage();
    getTasks();
    loadTasks(tasks);
  }
});

newTaskButton.addEventListener("click", toggleTaskForm);
newProjectButton.addEventListener("click", toggleProjectForm);
submitTaskButton.addEventListener("click", createNewTask);
submitProjectButton.addEventListener("click", createNewProject);
const taskForm = document.getElementById("taskForm");
const projectForm = document.getElementById("projectForm");

function toggleProjectForm() {
  if (projectForm.className === "d-none") {
    projectForm.className = "d-block";
  } else {
    projectForm.className = "d-none";
  }
}

function toggleTaskForm() {
  if (taskForm.className === "d-none") {
    taskForm.className = "d-block";
  } else {
    taskForm.className = "d-none";
  }
}

function createNewProject() {
  let id = projects.length
  let name = document.getElementById("inputName").value;
  let project = new Project(id, name);
  projects.push(project);
  projectForm.reset();
  localStorage.setItem("projects", JSON.stringify(projects));
  loadProjects(projects, tasks);
  toggleProjectForm();
}

function createNewTask() {
  let id = tasks.length;
  let title = document.getElementById("inputTitle").value;
  let description = document.getElementById("inputDescription").value;
  let dueDate = document.getElementById("inputDueDate").value;
  let priority;
  // getting which priority radio button has been checked
  if (document.getElementById("inputPriorityHigh").checked) {
    priority = document.getElementById("inputPriorityHigh").value;
  }
  if (document.getElementById("inputPriorityMedium").checked) {
    priority = document.getElementById("inputPriorityMedium").value;
  }
  if (document.getElementById("inputPriorityLow").checked) {
    priority = document.getElementById("inputPriorityLow").value;
  }
  let task = new Task(id,title, description, dueDate, priority);
  tasks.push(task);
  taskForm.reset();
  // add tasks to local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks(tasks);
  toggleTaskForm();
}

function toggleTasksPage() {
  let tasksPage = document.getElementById("tasksPage");
  if (tasksPage.classList.contains("d-block")) {
    tasksPage.classList.remove("d-block");
    tasksPage.classList.add("d-none");
  } else {
    tasksPage.classList.remove("d-none");
    tasksPage.classList.add("d-block");
  }
}

function toggleProjectsPage() {
  let projectsPage = document.getElementById("projectsPage");
  if (projectsPage.classList.contains("d-block")) {
    projectsPage.classList.remove("d-block");
    projectsPage.classList.add("d-none");
  } else {
    projectsPage.classList.remove("d-none");
    projectsPage.classList.add("d-block");
  }
}
