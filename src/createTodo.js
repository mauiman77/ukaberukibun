import duplicateError from './alerts';

const todos = (() => {
  const currentTodos = [];

  const todo = (title, description, dueDate, priority, text = '') => {
    const getTitle = () => title;
    function addText(newText) {
      text = newText;
      return text;
    }
    return {
      title, description, dueDate, priority, getTitle, text, addText,
    };
  };

  function pushToCurrentTodos(obj) {
    currentTodos.push(obj);
    console.table(currentTodos);
  }

  const checkForDuplicate = (title) => {
    const findTitleCount = currentTodos.filter((item) => item.title === title).length;
    return findTitleCount > 1;
  };

  function Delete(title) {

  }

  const Create = (title, description, dueDate, priority, text = '') => {
    const newTodo = todo(title, description, dueDate, priority, text);
    if (checkForDuplicate(newTodo.title)) {
      console.alert(duplicateError);
      return;
    }
    pushToCurrentTodos(newTodo);
    return newTodo;
  };

  return {
    Create, checkForDuplicate,
  };
})();

export default todos;
