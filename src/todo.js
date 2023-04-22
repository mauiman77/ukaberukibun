const todo = (() => {
  const projectTodoList = (project) => {
    const list = {
      id: project,
      todoList: [],
    };
    function pushTodoToList(toPush) {
      list.todoList.push(toPush);
      console.log(list.todoList);
    }
    return { pushTodoToList };
  };
  const projectTodo = (title, dueDate, priority, note, projectName) => ({
    title, dueDate, priority, note, projectName,
  });

  const CreateTodoList = (project) => {
    const newProjectTodoList = projectTodoList(project.title);
    return newProjectTodoList;
  };

  const Create = (title, dueDate, priority, note, projectName) => {
    const newTodo = projectTodo(title, dueDate, priority, note, projectName);
    return newTodo;
  };

  return { Create, CreateTodoList };
})();

export default todo;
