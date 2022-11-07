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
  disProject.innerHTML = `Project: ${projectArray[x].projectName} <br> Description: ${projectArray[x].projectDescription} <br> Expected Completion Date: ${projectArray[x].projectDueDate}`;
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
  disTodo.innerHTML = `Task: ${todoTotalArray[x].task} <br> 
    Description: ${todoTotalArray[x].description} <br> 
    Expected Completion Date: ${todoTotalArray[x].dueDate} `;
  disTodo.style.borderColor = `${todoTotalArray[x].priority} `;

  const todoExpansion = document.createElement("div");
  todoExpansion.setAttribute("class", "expandedTodo");
  todoExpansion.innerHTML = `Notes: ${todoTotalArray[x].notes} <br> Priority: `;

  const priorityRow = document.createElement("div");
  priorityRow.setAttribute("class", "priorityRow");

  const btnNonUrgent = document.createElement("button");
  btnNonUrgent.setAttribute("class", "prioBtn");
  btnNonUrgent.textContent = "Non-Urgent";
  btnNonUrgent.style.backgroundColor = "lightblue";

  const btnNormal = document.createElement("button");
  btnNormal.setAttribute("class", "prioBtn");
  btnNormal.textContent = "Normal";
  btnNormal.style.backgroundColor = "lightgreen";

  const btnUrgent = document.createElement("button");
  btnUrgent.setAttribute("class", "prioBtn");
  btnUrgent.textContent = "Urgent";
  btnUrgent.style.backgroundColor = "lightsalmon";

  const btnVeryUrgent = document.createElement("button");
  btnVeryUrgent.setAttribute("class", "prioBtn");
  btnVeryUrgent.textContent = "Very-Urgent";
  btnVeryUrgent.style.backgroundColor = "lightcoral";

  priorityRow.appendChild(btnNonUrgent);
  priorityRow.appendChild(btnNormal);
  priorityRow.appendChild(btnUrgent);
  priorityRow.appendChild(btnVeryUrgent);

  todoExpansion.appendChild(priorityRow);

  const priorityBtnArray = priorityRow.children;
  //ability to change priority
  function changePriority(event) {
    todoTotalArray[x].priority = event.target.style.backgroundColor;
    event.target.parentElement.parentElement.parentElement.style.borderColor =
      event.target.style.backgroundColor;
  }
  for (let i = 0; i < priorityBtnArray.length; i++) {
    console.log("in the for loop");
    priorityBtnArray[i].addEventListener("click", changePriority);
  }

  disTodo.appendChild(todoExpansion);

  disTodo.addEventListener("click", (e) => {
    if (e.target.querySelector(".expandedTodo").style.display === "block") {
      e.target.querySelector(".expandedTodo").style.display = "none";
    } else {
      e.target.querySelector(".expandedTodo").style.display = "block";
    }
  });

  defaultProject.appendChild(disTodo);

  //disProject.addEventListener("click", () => {
  //display stored todo array below project this
  //}
}

////////////
// add a completion button
// const doneTodoBtn = document.createElement("btn");
// doneTodoBtn.setAttribute("class", "doneBtn");
