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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#tasksPage,\\n#projectsPage {\\n  padding-top: 1em;\\n  padding-bottom: 1em;\\n}\\n\\n.jumbotron {\\n  padding-top: 1em;\\n  padding-bottom: 1em;\\n}\\n\\n.card {\\n  margin-top: 1em;\\n}\\n\\n#taskForm,\\n#projectForm {\\n  padding-top: 1em;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadTasks */ \"./src/loadTasks.js\");\n/* harmony import */ var _loadProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadProjects */ \"./src/loadProjects.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass Task {\n  constructor(id, title, description, dueDate, priority) {\n    this.id = id;\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n}\n\nclass Project {\n  constructor(id, name) {\n    this.id = id;\n    this.name = name;\n    this.tasks = [];\n  }\n}\n\nlet tasks = [];\nlet projects = [];\nconst taskForm = document.getElementById(\"taskForm\");\nconst projectForm = document.getElementById(\"projectForm\");\n\n(function startUp() {\n  getTasks();\n  Object(_loadTasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasks, projects);\n})();\n\nfunction getTasks() {\n  if (JSON.parse(localStorage.getItem(\"tasks\")) !== null) {\n    tasks = JSON.parse(localStorage.getItem(\"tasks\"));\n  }\n}\n\nfunction getProjects() {\n  if (JSON.parse(localStorage.getItem(\"projects\")) !== null) {\n    projects = JSON.parse(localStorage.getItem(\"projects\"));\n  }\n}\n\nconst submitTaskButton = document.getElementById(\"submitTask\");\nsubmitTaskButton.addEventListener(\"click\", createNewTask);\nfunction createNewTask() {\n  // check data is input in the relevant fields\n  if (\n    (document.getElementById(\"inputPriorityHigh\").checked ||\n      document.getElementById(\"inputPriorityMedium\").checked ||\n      document.getElementById(\"inputPriorityLow\").checked) &&\n    document.getElementById(\"inputTitle\").value.length > 0 &&\n    document.getElementById(\"inputDueDate\").value.length\n  ) {\n    let id = tasks.length;\n    let title = document.getElementById(\"inputTitle\").value;\n    let description = document.getElementById(\"inputDescription\").value;\n    let dueDate = document.getElementById(\"inputDueDate\").value;\n    let priority;\n    // getting which priority radio button has been checked\n    if (document.getElementById(\"inputPriorityHigh\").checked) {\n      priority = document.getElementById(\"inputPriorityHigh\").value;\n    }\n    if (document.getElementById(\"inputPriorityMedium\").checked) {\n      priority = document.getElementById(\"inputPriorityMedium\").value;\n    }\n    if (document.getElementById(\"inputPriorityLow\").checked) {\n      priority = document.getElementById(\"inputPriorityLow\").value;\n    }\n    let task = new Task(id, title, description, dueDate, priority);\n    tasks.push(task);\n    taskForm.reset();\n    // add tasks to local storage\n    localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n    Object(_loadTasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasks, projects);\n    toggleTaskForm();\n  }\n}\n\nconst newTaskButton = document.getElementById(\"newTask\");\nnewTaskButton.addEventListener(\"click\", toggleTaskForm);\nfunction toggleTaskForm() {\n  if (taskForm.className === \"d-none\") {\n    taskForm.className = \"d-block\";\n  } else {\n    taskForm.className = \"d-none\";\n  }\n}\n\nconst newProjectButton = document.getElementById(\"newProject\");\nnewProjectButton.addEventListener(\"click\", toggleProjectForm);\nfunction toggleProjectForm() {\n  if (projectForm.className === \"d-none\") {\n    projectForm.className = \"d-block\";\n  } else {\n    projectForm.className = \"d-none\";\n  }\n}\n\nconst submitProjectButton = document.getElementById(\"submitProject\");\nsubmitProjectButton.addEventListener(\"click\", createNewProject);\nfunction createNewProject() {\n  let id = projects.length;\n  let name = document.getElementById(\"inputName\").value;\n  let project = new Project(id, name);\n  projects.push(project);\n  projectForm.reset();\n  localStorage.setItem(\"projects\", JSON.stringify(projects));\n  Object(_loadProjects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projects, tasks);\n  toggleProjectForm();\n}\n\nconst projectsTab = document.getElementById(\"projectsTab\");\nprojectsTab.addEventListener(\"click\", function() {\n  if (tasksTab.classList.contains(\"active\")) {\n    tasksTab.classList.remove(\"active\");\n    projectsTab.classList.add(\"active\");\n    toggleTasksPage();\n    toggleProjectsPage();\n    getProjects();\n    Object(_loadProjects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projects, tasks);\n  }\n});\n\nconst tasksTab = document.getElementById(\"tasksTab\");\ntasksTab.addEventListener(\"click\", function() {\n  if (projectsTab.classList.contains(\"active\")) {\n    projectsTab.classList.remove(\"active\");\n    tasksTab.classList.add(\"active\");\n    toggleProjectsPage();\n    toggleTasksPage();\n    getTasks();\n    Object(_loadTasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasks, projects);\n  }\n});\n\nfunction toggleTasksPage() {\n  let tasksPage = document.getElementById(\"tasksPage\");\n  if (tasksPage.classList.contains(\"d-block\")) {\n    tasksPage.classList.remove(\"d-block\");\n    tasksPage.classList.add(\"d-none\");\n  } else {\n    tasksPage.classList.remove(\"d-none\");\n    tasksPage.classList.add(\"d-block\");\n  }\n}\n\nfunction toggleProjectsPage() {\n  let projectsPage = document.getElementById(\"projectsPage\");\n  if (projectsPage.classList.contains(\"d-block\")) {\n    projectsPage.classList.remove(\"d-block\");\n    projectsPage.classList.add(\"d-none\");\n  } else {\n    projectsPage.classList.remove(\"d-none\");\n    projectsPage.classList.add(\"d-block\");\n  }\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/loadProjects.js":
/*!*****************************!*\
  !*** ./src/loadProjects.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction loadProjects(projects, tasks) {\n  let projectsContainer = document.getElementById(\"projectsContainer\");\n\n  (function addBackgroundImage() {\n    let projectsPage = document.getElementById(\"projectsPage\");\n    let imageSource = \"hike.jpg\";\n    projectsPage.style.cssText = `background-image: url(${imageSource});`;\n  })();\n\n  function deleteProject() {\n    let projectIndex = parseInt(this.parentNode.id);\n    projects.splice(projectIndex, 1);\n    updateProjects(projects, tasks);\n  }\n\n  function createDeleteButton() {\n    let deleteButton = document.createElement(\"button\");\n    deleteButton.innerHTML = \"Delete\";\n    deleteButton.className = \"btn btn-danger\";\n    deleteButton.addEventListener(\"click\", deleteProject);\n    return deleteButton;\n  }\n\n  function createTaskSelector() {\n    let addTaskSelector = document.createElement(\"select\");\n    addTaskSelector.className = \"custom-select\";\n    addTaskSelector.innerHTML = \"<option selected>Add Task...</option>\";\n    addTaskSelector.addEventListener(\"change\", function() {\n      addTaskToProject(this, addTaskSelector.value);\n    });\n    createSelectorOptions(tasks, addTaskSelector);\n    return addTaskSelector;\n  }\n\n  function addTaskToProject(node, taskID) {\n    projects[node.parentNode.id].tasks.push(tasks[taskID]);\n    updateProjects(projects, tasks);\n    renderAddedTask(tasks, taskID, node);\n  }\n\n  (function renderProjects() {\n    projectsContainer.innerHTML = \"Projects:\";\n    for (let i = 0; i < projects.length; i++) {\n      let projectDiv = document.createElement(\"div\");\n      projectDiv.className = \"card\";\n      projectDiv.id = projects[i].id;\n      let p1 = document.createElement(\"p\");\n      p1.innerHTML = `Project Name: ${projects[i].name}`;\n      p1.id = `${i}`;\n      let p2 = document.createElement(\"p\");\n      p2.innerHTML = \"Tasks:\";\n      for (let j = 0; j < projects[i].tasks.length; j++) {\n        let p = document.createElement(\"p\");\n        p.innerHTML = projects[i].tasks[j].title;\n        p2.appendChild(p);\n      }\n      p1.appendChild(p2);\n      projectsContainer.appendChild(projectDiv);\n      projectDiv.appendChild(p1);\n      projectDiv.appendChild(createTaskSelector());\n      projectDiv.appendChild(createDeleteButton());\n    }\n  })();\n}\n\nfunction createSelectorOptions(tasks, addTaskSelector) {\n  for (let i = 0; i < tasks.length; i++) {\n    let o = document.createElement(\"option\");\n    addTaskSelector.appendChild(o);\n    o.value = tasks[i].id;\n    o.innerHTML = tasks[i].title;\n  }\n}\n\nfunction renderAddedTask(tasks, taskID, node) {\n  let p = document.createElement(\"p\");\n  p.innerHTML = tasks[taskID].title;\n  node.parentNode.firstElementChild.firstElementChild.appendChild(p);\n}\n\nfunction updateProjects(projects, tasks) {\n  for (let i = 0; i < projects.length; i++) {\n    projects[i].id = i;\n  }\n  localStorage.setItem(\"projects\", JSON.stringify(projects));\n  loadProjects(projects, tasks);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadProjects);\n\n\n//# sourceURL=webpack:///./src/loadProjects.js?");

/***/ }),

/***/ "./src/loadTasks.js":
/*!**************************!*\
  !*** ./src/loadTasks.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction loadTasks(tasks, projects) {\n  const taskContainer = document.getElementById(\"taskContainer\");\n\n  (function addBackgroundImage() {\n    let tasksPage = document.getElementById(\"tasksPage\");\n    let imageSource = \"background.jpg\";\n    tasksPage.style.cssText = `background-image: url(${imageSource});`;\n  })();\n\n  (function renderTasks() {\n    taskContainer.innerHTML = \"To do:\";\n    for (let i = 0; i < tasks.length; i++) {\n      let taskDiv = document.createElement(\"div\");\n      taskDiv.id = `${i}`;\n      taskDiv.className = \"card\";\n      let p = document.createElement(\"p\");\n      p.innerHTML = `${tasks[i].title} is due on ${tasks[i].dueDate}`;\n      taskContainer.appendChild(taskDiv);\n      taskDiv.appendChild(p);\n      taskDiv.appendChild(toggleExpandTaskButton());\n      taskDiv.appendChild(createDeleteButton());\n    }\n  })();\n\n  function deleteTask() {\n    let taskIndex = parseInt(this.parentNode.id);\n    deleteTaskFromProjects(projects, tasks, taskIndex);\n    tasks.splice(taskIndex, 1);\n    updateTasks(tasks);\n    updateProjects(projects);\n  }\n\n  function createDeleteButton() {\n    let deleteButton = document.createElement(\"button\");\n    deleteButton.innerHTML = \"Delete\";\n    deleteButton.className = \"btn btn-danger\";\n    deleteButton.addEventListener(\"click\", deleteTask);\n    return deleteButton;\n  }\n\n  function toggleExpandTask() {\n    if (this.parentNode.firstElementChild.childElementCount === 0) {\n      this.innerHTML = \"See less info\";\n      let taskIndex = parseInt(this.parentNode.id);\n      let p1 = document.createElement(\"p\");\n      p1.innerHTML = `${tasks[taskIndex].description}`;\n      let p2 = document.createElement(\"p\");\n      p2.innerHTML = `${tasks[taskIndex].priority} priority`;\n      this.parentNode.firstElementChild.appendChild(p1);\n      this.parentNode.firstElementChild.appendChild(p2);\n    } else {\n      this.innerHTML = \"See more info\";\n      this.parentNode.firstElementChild.removeChild(\n        this.parentNode.firstElementChild.firstElementChild\n      );\n      this.parentNode.firstElementChild.removeChild(\n        this.parentNode.firstElementChild.firstElementChild\n      );\n    }\n  }\n\n  function toggleExpandTaskButton() {\n    let moreInfoButton = document.createElement(\"button\");\n    moreInfoButton.innerHTML = \"See more info\";\n    moreInfoButton.className = \"btn btn-info\";\n    moreInfoButton.addEventListener(\"click\", toggleExpandTask);\n    return moreInfoButton;\n  }\n}\n\nfunction deleteTaskFromProjects(projects, tasks, taskIndex) {\n  for (let j = 0; j < projects.length; j++) {\n    for (let i = 0; i < projects[j].tasks.length; i++) {\n      if (projects[j].tasks[i].id === tasks[taskIndex].id) {\n        projects[j].tasks.splice(taskIndex, 1);\n      }\n    }\n  }\n}\n\nfunction updateProjects(projects) {\n  localStorage.setItem(\"projects\", JSON.stringify(projects));\n}\n\nfunction updateTasks(tasks) {\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n  loadTasks(tasks);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadTasks);\n\n\n//# sourceURL=webpack:///./src/loadTasks.js?");

/***/ })

/******/ });