import './style.css';
import { exist, trimSpace } from './sanityCheck';
import todos from './createTodo';

const userInterface = (() => {
  function intialisePopUp() {
    const popUp = document.createElement('form');
    const text = popUpAppend(popUp);
    // text.classList.add('popupText');
    // popUp.appendChild(text);
    popUp.classList.add('popup');
    return popUp;
  }

  function appendToSidebar(titleofTodo) {
    const sideBar = document.querySelector('.sidebar');
    const todoSidebar = document.createElement('div');
    todoSidebar.classList.add('todo');
    todoSidebar.setAttribute('id', titleofTodo);
    todoSidebar.textContent = titleofTodo;
    sideBar.appendChild(todoSidebar);
    todoSidebar.addEventListener('click', (e) => {
      if (!document.querySelector(`.boundbox#${e.target.id} > textarea`)) {
        userInterface.newtextArea(e.target.id);
      }
    });

    return sideBar;
  }

  function popUpAppend(toAppend) {
    for (let i = 0; i < 4; i += 1) {
      const text = document.createElement('textarea');
      text.classList.add('popupText');
      for (let c = 0; c < todos.idList.length; c += 1) {
        text.setAttribute('id', todos.idList[i]);
      }
      toAppend.appendChild(text);
    }
    const button = document.createElement('button');
    toAppend.appendChild(button);
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const tryTitle = document.querySelector('.popup #title');
      const tryDescription = document.querySelector('.popup #description');
      const tryDueDate = document.querySelector('.popup #dueDate');
      const john = todos.Create(tryTitle.value, tryDescription.value, tryDueDate.value, 1);
      const popUp = document.querySelector('.popup');
      popUp.classList.toggle('visible');
      console.log(john);
      appendToSidebar(john.title);
    });
    return toAppend;
  }

  // function createNewBtn() {
  //   const newBtn = document.createElement('div');
  //   newBtn.classList.add('new-btn');
  //   newBtn.addEventListener('click', () => {
  //     const popUp = document.querySelector('.popup');
  //     popUp.classList.toggle('visible');
  //   });
  //   return newBtn;
  // }

  function createSideBar() {
    const sideBar = document.createElement('div');
    sideBar.classList.add('sidebar');
    // sideBar.appendChild(createNewBtn());
    sideBar.addEventListener('click', () => {
      const popUp = document.querySelector('.popup');
      popUp.classList.toggle('visible');
    });
    return sideBar;
  }

  function createEditor() {
    const editor = document.createElement('div');
    editor.classList.add('editor');
    return editor;
  }

  function createBoundBox(id) {
    const box = document.createElement('div');
    box.classList.add('boundbox');
    box.setAttribute('id', id);
    return box;
  }

  const workingNote = (id, text) => ({ id, text });
  const workingNoteList = [];

  function lookInWorkingNoteList(id) {
    for (let i = 0; i < workingNoteList.length; i += 1) {
      if (workingNoteList[i].id === id) {
        return workingNoteList[i].text;
      }
    }
    return '';
  }

  function getTextValue(id) {
    const textArea = document.querySelector(`div.boundbox#${id} textarea`);
    if (textArea.value === undefined) {
      return '';
    }
    return textArea.value;
  }

  function removeTextArea(id) {
    const textAreaToRemove = document.querySelector(`div.boundbox#${id}`);
    return textAreaToRemove.remove();
  }

  function createBtn(id) {
    const closeBtn = document.createElement('div');
    closeBtn.classList.add('close-btn');
    closeBtn.setAttribute('id', id);
    closeBtn.addEventListener('click', (e) => {
      const findDupe = workingNoteList.find((item) => item.id === e.target.id);
      const newNote = workingNote(e.target.id, getTextValue(id));
      if (!findDupe) {
        workingNoteList.splice(0, 0, newNote);
      }
      removeTextArea(e.target.id);
      console.log(workingNoteList);
    });
    return closeBtn;
  }

  function createTextArea(id) {
    const textArea = document.createElement('textarea');
    textArea.value = lookInWorkingNoteList(id);
    const box = createBoundBox(id);
    box.appendChild(textArea);
    const closeBtn = createBtn(id);
    box.appendChild(closeBtn);
    return box;
  }

  const newtextArea = (id) => {
    const getEditor = document.querySelector('.editor');
    const makeText = createTextArea(id);
    getEditor.appendChild(makeText);
    return getEditor;
  };

  const createMain = () => {
    const mainElement = document.createElement('main');
    mainElement.setAttribute('id', 'ui');
    mainElement.appendChild(intialisePopUp());
    if (!exist('.sidebar')) {
      mainElement.appendChild(createSideBar());
    }
    if (!exist('.editor')) {
      const editorAppend = createEditor();
      // editorAppend.appendChild(createTextArea());
      mainElement.appendChild(editorAppend);
    }
    return mainElement;
  };

  const initialisePage = () => {
    const body = document.querySelector('body');
    body.appendChild(createMain());
    return body;
  };

  return { initialisePage, newtextArea, removeTextArea };
})();

export default userInterface;
