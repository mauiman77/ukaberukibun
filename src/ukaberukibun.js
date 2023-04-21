import userInterface from './createElement';
import projects from './createProject';

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
