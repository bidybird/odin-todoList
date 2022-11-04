const projectArray = [];
const todoTotalArray = [];
//-------------------------------------
//making a todo
function Todo(task, description, dueDate, priority, notes) {
  this.task = task;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;

  const sumOfTodo = sumTodo(task, description, dueDate, priority, notes);

  return {
    todoInfo: sumOfTodo,
  };
}

//--------------------------------------------------
//functions that will be used many times, in objects made often
//in Todo
function sumTodo(task, description, dueDate, priority, notes) {
  return `${task} ${description} ${dueDate} ${priority} ${notes}`;
}

//in Project
function sumProject(projectName, projectDescription, projectDueDate) {
  return `${projectName}: ${projectDescription} Due:${projectDueDate}`;
}

//-------------------------------------------------
//making a project
function Project(projectName, projectDescription, projectDueDate) {
  this.projectName = projectName;
  this.projectDescription = projectDescription;
  this.projectDueDate = projectDueDate;

  this.info = sumProject(projectName, projectDescription, projectDueDate);
  //this stands for the object being made, the .names after the this are automatically become keys for the values they store
  //this.info means return { info: the variable that stands for sumProject(projectName etc, it is shorter yay)}
}

//---------------------------------------------------
//eventlistener for projectForm
//eventlistener for todoForm

//-------------------------------------------

//submit prevent default function
const projectForm = document.querySelector("#projectForm");
projectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  createNewProject();
  projectForm.style.display = "none";
  //projectForm.style.display = "block"; to make it re-appear
});

function createNewProject() {
  const projectName = projectForm.elements.projectName.value;
  const projectDescription = projectForm.elements.projectDescription.value;
  const projectDueDate = projectForm.elements.projectDueDate.value;

  const project = new Project(projectName, projectDescription, projectDueDate);
  console.log(project.info + ":project as a new object");
  projectArray.push(project);
  console.log(
    projectArray[0].projectName + ":[0].projectName project array after"
  );
  console.log(projectArray[0].info + ":[0].info array after");
}

const todoForm = document.querySelector("#todoForm");
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  createNewTodo();
  this.style["display"] = "none";
});

function createNewTodo() {
  const task = todoForm.elements.task.value;
  const description = todoForm.elements.description.value;
  const dueDate = todoForm.elements.dueDate.value;
  const priority = projectForm.elements.priority.value;
  const notes = projectForm.elements.notes.value;

  const todo = new Todo(task, description, dueDate, priority, notes);
  todoTotalArray.push(todo.todoInfo);
}
