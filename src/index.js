const todoTotalArray = [];
const projectArray = [];

//-------------------------------------
//making a todo and adding it to the todoTotalArray
const todoForm = document.querySelector("#todoForm");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const todo = createNewTodo();
  todoTotalArray.push(todo);
  displayTodos();
  todoForm.style.display = "none";
});

//--------------------------------------
//todo functions

function createNewTodo() {
  const task = todoForm.elements.task.value;
  const description = todoForm.elements.description.value;
  const dueDate = todoForm.elements.dueDate.value;
  let priority = todoForm.elements.priority["value"];
  const notes = todoForm.elements.notes.value;
  let todoComplete = todoForm.querySelector("#todoComplete").checked;

  const todo = new Todo(
    task,
    description,
    dueDate,
    priority,
    notes,
    todoComplete
  );

  return todo;
}

function Todo(task, description, dueDate, priority, notes, todoComplete) {
  this.task = task;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.todoComplete = todoComplete;

  this.info = sumTodo(
    task,
    description,
    dueDate,
    priority,
    notes,
    todoComplete
  );
}

function sumTodo(task, description, dueDate, priority, notes, todoComplete) {
  return `${task} ${description} ${dueDate} ${priority} ${notes} Completed: ${todoComplete}`;
}

//---------------------------------------------------
//making a project and adding it to the projectArray
const projectForm = document.querySelector("#projectForm");

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const project = createNewProject();
  projectArray.push(project);
  console.log(projectArray);
  displayProjects();
  projectForm.style.display = "none";
});

//------------------------------------------------
//project functions
function createNewProject() {
  const projectName = projectForm.elements.projectName.value;
  const projectDescription = projectForm.elements.projectDescription.value;
  const projectDueDate = projectForm.elements.projectDueDate.value;

  const project = new Project(projectName, projectDescription, projectDueDate);
  return project;
}

function Project(projectName, projectDescription, projectDueDate) {
  this.projectName = projectName;
  this.projectDescription = projectDescription;
  this.projectDueDate = projectDueDate;

  this.info = sumProject(projectName, projectDescription, projectDueDate);
}

function sumProject(projectName, projectDescription, projectDueDate) {
  return `${projectName}: ${projectDescription} Due:${projectDueDate}`;
}

//-------------------------------------
//form toggles

todoButton = document.querySelector("#newTodo");
todoButton.addEventListener("click", () => {
  if (todoForm.style.display === "block") {
    todoForm.style.display = "none";
  } else {
    todoForm.style.display = "block";
  }
});

projectButton = document.querySelector("#newProject");
projectButton.addEventListener("click", () => {
  if (projectForm.style.display === "block") {
    projectForm.style.display = "none";
  } else {
    projectForm.style.display = "block";
  }
});

//------ (this displays below the form buttons)
//display default project with all todos inside of it displayed

function displayProjects() {
  const container = document.querySelector("#container");
  const x = projectArray.length - 1;
  const disProject = document.createElement("div");
  disProject.setAttribute("class", "displayedProject");
  disProject.textContent = `Project: ${projectArray[x].projectName} \n Description: ${projectArray[x].projectDescription} \n Expected Completion Date: ${projectArray[x].projectDueDate}`;
  container.appendChild(disProject);
  //disProject.addEventListener("click", () => {
  //display stored todo array below project this
  //}
}

//------
//store todos into projects
function displayTodos() {
  defaultProject = document.querySelector("#defaultProject");
  const x = todoTotalArray.length - 1;
  const disTodo = document.createElement("div");
  disTodo.setAttribute("class", "displayedTodo");
  disTodo.textContent =
    `Task: ${todoTotalArray[x].task} ` +
    `Description: ${todoTotalArray[x].description} ` +
    `Expected Completion Date: ${todoTotalArray[x].dueDate} ` +
    `Notes: ${todoTotalArray[x].notes}`;
  disTodo.style.borderColor = `${todoTotalArray[x].priority} `;
  defaultProject.appendChild(disTodo);
  //disProject.addEventListener("click", () => {
  //display stored todo array below project this
  //}
}
