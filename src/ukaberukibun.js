import userInterface from './createElement';
import project from './createProject';

const jim = project('JimProject', 'Fake Project', 'soon', 1);

function appendTestProjectChild(titleofProject) {
  const sideBar = document.querySelector('.sidebar');
  const projectBar = document.createElement('div');
  projectBar.classList.add('project');
  projectBar.textContent = titleofProject;
  sideBar.appendChild(projectBar);

  return sideBar;
}

userInterface.initialisePage();
for (let i = 0; i < 20; i++) {
  appendTestProjectChild(jim.sayTitle());
}
console.log(jim.sayTitle());
