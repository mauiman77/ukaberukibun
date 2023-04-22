import duplicateError from './alerts';

const projects = (() => {
  const currentProjects = [];

  const project = (title, description, dueDate, priority, todo = []) => {
    const getTitle = () => title;
    return {
      title, description, dueDate, priority, getTitle, todo,
    };
  };

  function pushToCurrentProjects(obj) {
    currentProjects.push(obj);
    console.table(currentProjects);
  }

  const checkForDuplicate = (title) => {
    const findTitleCount = currentProjects.filter((item) => item.title === title).length;
    return findTitleCount > 1;
  };

  function Delete(title) {

  }

  const Create = (title, description, dueDate, priority, todo) => {
    const newProject = project(title, description, dueDate, priority, todo);
    if (checkForDuplicate(newProject.title)) {
      console.alert(duplicateError);
      return;
    }
    pushToCurrentProjects(newProject);
    return newProject;
  };

  return {
    Create, checkForDuplicate,
  };
})();

export default projects;
