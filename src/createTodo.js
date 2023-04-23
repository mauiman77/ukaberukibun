import duplicateError from './alerts';

const todos = (() => {
  const currentTodos = [];

  const todo = (title, description, dueDate, priority) => {
    const getTitle = () => title;
    return {
      title, description, dueDate, priority, getTitle,
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

  const Create = (title, description, dueDate, priority) => {
    const newTodo = todo(title, description, dueDate, priority);
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
