import userInterface from './createElement';
import todos from './createTodo';

const jim = todos.Create('Jim Todo', 'Blah blah', 'soon', 1);

function storeTextContent() {
  let text = document.querySelector('textarea');
  text = text.value;
  console.log(text);
  return text;
}

// function appendTestTodoChild(titleofTodo) {
//   const sideBar = document.querySelector('.sidebar');
//   const todoSidebar = document.createElement('div');
//   todoSidebar.classList.add('todo');
//   todoSidebar.setAttribute('id', titleofTodo.trim());
//   todoSidebar.textContent = titleofTodo;
//   sideBar.appendChild(todoSidebar);
//   todoSidebar.addEventListener('click', () => userInterface.newtextArea());

//   return sideBar;
// }

userInterface.initialisePage();
// appendTestTodoChild(jim.title);
