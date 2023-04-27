import './style.css';
import userInterface from './createElement';
import todos from './createTodo';
import { trimSpace } from './sanityCheck';

function storeTextContent() {
  let text = document.querySelector('textarea');
  text = text.value;
  console.log(text);
  return text;
}

function appendTestTodoChild(titleofTodo) {
  const sideBar = document.querySelector('.sidebar');
  const todoSidebar = document.createElement('div');
  todoSidebar.classList.add('todo');
  todoSidebar.setAttribute('id', trimSpace(titleofTodo));
  todoSidebar.textContent = titleofTodo;
  sideBar.appendChild(todoSidebar);
  todoSidebar.addEventListener('click', (e) => {
    if (!document.querySelector(`div.boundbox#${e.target.id}`)) {
      userInterface.newtextArea(e.target.id);
    }
  });

  return sideBar;
}

userInterface.initialisePage();
