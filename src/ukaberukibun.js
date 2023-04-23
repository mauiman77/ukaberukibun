import userInterface from './createElement';
import todos from './createTodo';

const jim = todos.Create('Jim Todo', 'Blah blah', 'soon', 1);

function appendTestTodoChild(titleofTodo) {
  const sideBar = document.querySelector('.sidebar');
  const todoSidebar = document.createElement('div');
  todoSidebar.classList.add('todo');
  todoSidebar.textContent = titleofTodo;
  sideBar.appendChild(todoSidebar);

  return sideBar;
}

userInterface.initialisePage();
