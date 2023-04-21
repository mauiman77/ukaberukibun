import userInterface from './createElement';
import projects from './createProject';

const jim = projects.Create('JimProject', 'Blah blah', 'soon', 1);

function appendTestProjectChild(titleofProject) {
  const sideBar = document.querySelector('.sidebar');
  const projectBar = document.createElement('div');
  projectBar.classList.add('project');
  projectBar.textContent = titleofProject;
  sideBar.appendChild(projectBar);

  return sideBar;
}

userInterface.initialisePage();
appendTestProjectChild(jim.getTitle());
