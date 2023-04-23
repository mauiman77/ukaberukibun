import userInterface from './createElement';
import todos from './createTodo';
import { trimSpace } from './sanityCheck';

const jim = todos.Create('Jim Todo', 'Blah blah', 'soon', 1);
const bob = todos.Create('Bob', 'Bob Description', 'soon', 2);

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
  todoSidebar.addEventListener('click', (e) => userInterface.newtextArea(e.target.id));

  return sideBar;
}

userInterface.initialisePage();
appendTestTodoChild(jim.title);
appendTestTodoChild(bob.title);
