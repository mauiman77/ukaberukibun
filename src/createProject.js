const projects = (() => {
  const project = (title, description, dueDate, priority) => {
    const getTitle = () => title;
    return {
      title, description, dueDate, priority, getTitle,
    };
  };

  const Create = (title, description, dueDate, priority) => {
    const newProject = project(title, description, dueDate, priority);
    return newProject;
  };

  return { Create };
})();

export default projects;
