import userInterface from './createElement';
import projects from './createProject';
import todo from './todo';

const jim = projects.Create('JimProject', 'Blah blah', 'soon', 1);
const brian = projects.Create('BrianProject', 'Blah blah', 'soon', 1);
const desmond = projects.Create('DesmondProject', 'Blah blah', 'soon', 1);
const doosmind = projects.Create('DesmondProject', 'Blah blah', 'soon', 1);

const guys = [jim, brian, desmond, doosmind];

console.log(projects.checkForDuplicate(doosmind.title));

function appendTestProjectChild(titleofProject) {
  const sideBar = document.querySelector('.sidebar');
  const projectBar = document.createElement('div');
  projectBar.classList.add('project');
  projectBar.textContent = titleofProject;
  sideBar.appendChild(projectBar);

  return sideBar;
}

userInterface.initialisePage();
appendTestProjectChild(guys[Math.floor(Math.random() * guys.length)].getTitle());
const epicTodo = todo.Create('Me', 'soon', 1, 'Awesome', jim.title);
const moreEpicTodo = todo.CreateTodoList(jim.title);
moreEpicTodo.pushTodoToList(epicTodo.projectName);
