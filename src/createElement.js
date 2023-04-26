import './style.css';
import { exist } from './sanityCheck';
import todos from './createTodo';

const userInterface = (() => {
  function intialisePopUp() {
    const popUp = document.createElement('div');
    popUp.classList.add('popup');
    return popUp;
  }

  function createNewBtn() {
    const newBtn = document.createElement('div');
    newBtn.classList.add('new-btn');
    newBtn.addEventListener('click', () => {
      const popUp = document.querySelector('.popup');
      popUp.classList.toggle('visible');
    });
    return newBtn;
  }

  function createSideBar() {
    const sideBar = document.createElement('div');
    sideBar.classList.add('sidebar');
    sideBar.appendChild(createNewBtn());
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
      const newNote = workingNote(e.target.id, getTextValue(id));
      workingNoteList.splice(0, 0, newNote);
      console.log(workingNoteList);
      removeTextArea(e.target.id);
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
