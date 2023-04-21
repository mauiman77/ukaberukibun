const project = (title, description, dueDate, priority) => {
  const sayTitle = () => title;
  return {
    title, sayTitle,
  };
};

export default project;
