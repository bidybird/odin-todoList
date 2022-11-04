const todoTotalArray = [];
const projectArray = [];

//-------------------------------------
//making a todo and adding it to the todoTotalArray
const todoForm = document.querySelector("#todoForm");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const todo = createNewTodo();
  todoTotalArray.push(todo);
  todoForm.style.display = "none";
  //projectForm.style.display = "block";
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
  projectForm.style.display = "none";
  //projectForm.style.display = "block"; to make it re-appear
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
//button toggles

projectButton = document.querySelector("#newProject");
projectButton.addEventListener("click", (e) => {
  console.log(e);
});
