/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadTasks */ \"./src/loadTasks.js\");\n/* harmony import */ var _loadProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadProjects */ \"./src/loadProjects.js\");\n// TODO: allow user to add tasks to different projects\n// TODO: allow user to see taks for each project\n\n\n\n\nclass Task {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n}\n\nclass Project {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nlet tasks = [];\nlet projects = [];\n\n(function startUp() {\n  getTasks();\n  Object(_loadTasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasks);\n})();\n\nfunction getTasks() {\n  if (JSON.parse(localStorage.getItem(\"tasks\")) !== null) {\n    tasks = JSON.parse(localStorage.getItem(\"tasks\"));\n  }\n}\n\nfunction getProjects() {\n  if (JSON.parse(localStorage.getItem(\"projects\")) !== null) {\n    projects = JSON.parse(localStorage.getItem(\"projects\"));\n  }\n}\n\nconst submitTaskButton = document.getElementById(\"submitTask\");\nconst submitProjectButton = document.getElementById(\"submitProject\");\nconst newTaskButton = document.getElementById(\"newTask\");\nconst newProjectButton = document.getElementById(\"newProject\");\nconst projectsTab = document.getElementById(\"projectsTab\");\n\nprojectsTab.addEventListener(\"click\", function() {\n  if (tasksTab.classList.contains(\"active\")) {\n    tasksTab.classList.remove(\"active\");\n    projectsTab.classList.add(\"active\");\n    toggleTasksPage();\n    toggleProjectsPage();\n    getProjects();\n    Object(_loadProjects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projects);\n  }\n});\n\nconst tasksTab = document.getElementById(\"tasksTab\");\n\ntasksTab.addEventListener(\"click\", function() {\n  if (projectsTab.classList.contains(\"active\")) {\n    projectsTab.classList.remove(\"active\");\n    tasksTab.classList.add(\"active\");\n    toggleProjectsPage();\n    toggleTasksPage();\n    getTasks();\n    Object(_loadTasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasks);\n  }\n});\n\nnewTaskButton.addEventListener(\"click\", toggleTaskForm);\nnewProjectButton.addEventListener(\"click\", toggleProjectForm);\nsubmitTaskButton.addEventListener(\"click\", createNewTask);\nsubmitProjectButton.addEventListener(\"click\", createNewProject);\nconst taskForm = document.getElementById(\"taskForm\");\nconst projectForm = document.getElementById(\"projectForm\");\n\nfunction toggleProjectForm() {\n  if (projectForm.className === \"d-none\") {\n    projectForm.className = \"d-block\";\n  } else {\n    projectForm.className = \"d-none\";\n  }\n}\n\nfunction toggleTaskForm() {\n  if (taskForm.className === \"d-none\") {\n    taskForm.className = \"d-block\";\n  } else {\n    taskForm.className = \"d-none\";\n  }\n}\n\nfunction createNewProject() {\n  let name = document.getElementById(\"inputName\").value;\n  let project = new Project(name);\n  projects.push(project);\n  projectForm.reset();\n  localStorage.setItem(\"projects\", JSON.stringify(projects));\n  Object(_loadProjects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projects);\n  toggleProjectForm();\n}\n\nfunction createNewTask() {\n  let title = document.getElementById(\"inputTitle\").value;\n  let description = document.getElementById(\"inputDescription\").value;\n  let dueDate = document.getElementById(\"inputDueDate\").value;\n  let priority;\n  // getting which priority radio button has been checked\n  if (document.getElementById(\"inputPriorityHigh\").checked) {\n    priority = document.getElementById(\"inputPriorityHigh\").value;\n  }\n  if (document.getElementById(\"inputPriorityMedium\").checked) {\n    priority = document.getElementById(\"inputPriorityMedium\").value;\n  }\n  if (document.getElementById(\"inputPriorityLow\").checked) {\n    priority = document.getElementById(\"inputPriorityLow\").value;\n  }\n  let task = new Task(title, description, dueDate, priority);\n  tasks.push(task);\n  taskForm.reset();\n  // add tasks to local storage\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n  Object(_loadTasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasks);\n  toggleTaskForm();\n}\n\nfunction toggleTasksPage() {\n  let tasksPage = document.getElementById(\"tasksPage\");\n  if (tasksPage.classList.contains(\"d-block\")) {\n    tasksPage.classList.remove(\"d-block\");\n    tasksPage.classList.add(\"d-none\");\n  } else {\n    tasksPage.classList.remove(\"d-none\");\n    tasksPage.classList.add(\"d-block\");\n  }\n}\n\nfunction toggleProjectsPage() {\n  let projectsPage = document.getElementById(\"projectsPage\");\n  if (projectsPage.classList.contains(\"d-block\")) {\n    projectsPage.classList.remove(\"d-block\");\n    projectsPage.classList.add(\"d-none\");\n  } else {\n    projectsPage.classList.remove(\"d-none\");\n    projectsPage.classList.add(\"d-block\");\n  }\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/loadProjects.js":
/*!*****************************!*\
  !*** ./src/loadProjects.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction loadProjects(projects) {\n  let projectsContainer = document.getElementById(\"projectsContainer\");\n\n  function deleteProject() {\n    let projectIndex = parseInt(this.parentNode.id);\n    projects.splice(projectIndex, 1);\n    localStorage.setItem(\"projects\", JSON.stringify(projects));\n    loadProjects(projects);\n  }\n\n  function createDeleteButton() {\n    let deleteButton = document.createElement(\"button\");\n    deleteButton.innerHTML = \"Delete\";\n    deleteButton.className = \"btn btn-danger\";\n    deleteButton.addEventListener(\"click\", deleteProject);\n    return deleteButton;\n  }\n\n  function addTask() {}\n\n  function createAddTaskButton() {\n    let addTaskButton = document.createElement(\"button\");\n    addTaskButton.innerHTML = \"Add Task\";\n    addTaskButton.className = \"btn btn-secondary\";\n    addTaskButton.addEventListener(\"click\", addTask);\n    return addTaskButton;\n  }\n\n  (function renderProjects() {\n    projectsContainer.innerHTML = \"\";\n    for (let i = 0; i < projects.length; i++) {\n      let projectDiv = document.createElement(\"div\");\n      projectDiv.className = \"card\";\n      let p = document.createElement(\"p\");\n      p.innerHTML = `${projects[i].name}`;\n      p.id = `${i}`;\n      projectsContainer.appendChild(projectDiv);\n      projectDiv.appendChild(p);\n      projectDiv.appendChild(createAddTaskButton());\n      projectDiv.appendChild(createDeleteButton());\n    }\n  })();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadProjects);\n\n\n//# sourceURL=webpack:///./src/loadProjects.js?");

/***/ }),

/***/ "./src/loadTasks.js":
/*!**************************!*\
  !*** ./src/loadTasks.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction loadTasks(tasks) {\n  let taskContainer = document.getElementById(\"taskContainer\");\n\n  function deleteTask() {\n    let taskIndex = parseInt(this.parentNode.id);\n    tasks.splice(taskIndex, 1);\n    localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n    loadTasks(tasks);\n  }\n\n  function createDeleteButton() {\n    let deleteButton = document.createElement(\"button\");\n    deleteButton.innerHTML = \"Delete\";\n    deleteButton.className = \"btn btn-danger\";\n    deleteButton.addEventListener(\"click\", deleteTask);\n    return deleteButton;\n  }\n\n  function expandTask(){\n    if(this.parentNode.firstElementChild.childElementCount === 0){\n    let taskIndex = parseInt(this.parentNode.id)\n    let p1 = document.createElement(\"p\")\n    p1.innerHTML = `${tasks[taskIndex].description}`\n    let p2 = document.createElement(\"p\")\n    p2.innerHTML = `${tasks[taskIndex].priority} priority`\n    this.parentNode.firstElementChild.appendChild(p1)\n    this.parentNode.firstElementChild.appendChild(p2)\n    }\n  }\n\n  function createMoreInfoButton() {\n    let moreInfoButton = document.createElement(\"button\");\n    moreInfoButton.innerHTML = \"See more info\";\n    moreInfoButton.className = \"btn btn-secondary\";\n    moreInfoButton.addEventListener(\"click\", expandTask);\n    return moreInfoButton;\n  }\n\n  (function renderTasks() {\n    taskContainer.innerHTML = \"\";\n    for (let i = 0; i < tasks.length; i++) {\n      let taskDiv = document.createElement(\"div\");\n      taskDiv.id = `${i}`;\n      taskDiv.className=\"card\"\n      let p = document.createElement(\"p\")\n      p.innerHTML = `${tasks[i].title} is due on ${tasks[i].dueDate}`;\n      taskContainer.appendChild(taskDiv);\n      taskDiv.appendChild(p);\n      taskDiv.appendChild(createMoreInfoButton());\n      taskDiv.appendChild(createDeleteButton());\n      \n    }\n  })();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadTasks);\n\n\n//# sourceURL=webpack:///./src/loadTasks.js?");

/***/ })

/******/ });