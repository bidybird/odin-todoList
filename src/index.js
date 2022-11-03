const Project = (title, description, dueDate, priority, notes) => {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;

  const sumOfProject = sumProject(title, description, dueDate, priority, notes);

  const displayProject = displayContent(sumOfProject);

  return {
    projectInfo: displayProject,
  };
};

//--------------------------------------------------

const projectOne = Project(
  "Buy Food",
  "Go to HEB and buy chips and beer.",
  "11/3/2022",
  "Immediately",
  "Also say thank you to the person working the cash register."
);

projectOne.projectInfo;

//--------------------------------------------------

function sumProject(title, description, dueDate, priority, notes) {
  return `${title} ${description} ${dueDate} ${priority} ${notes}`;
}

function displayContent(content) {
  return console.log(content);
}
