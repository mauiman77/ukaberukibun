import './style.css';
import { exist } from './sanityCheck';

const userInterface = (() => {
  function createSideBar() {
    const sideBar = document.createElement('div');
    sideBar.classList.add('sidebar');
    return sideBar;
  }

  function createEditor() {
    const editor = document.createElement('div');
    editor.classList.add('editor');
    return editor;
  }

  function createBoundBox() {
    const box = document.createElement('div');
    box.classList.add('boundbox');
    return box;
  }

  function createTextArea() {
    const textArea = document.createElement('textarea');
    const box = createBoundBox();
    box.appendChild(textArea);
    const closeBtn = document.createElement('div');
    closeBtn.classList.add('close-btn');
    closeBtn.textContent = 'Hihihi';
    textArea.appendChild(closeBtn);
    return box;
  }

  function removeTextArea() {
    const textAreaToRemove = document.querySelector('textarea');
    console.log(textAreaToRemove);
    return textAreaToRemove.remove();
  }

  const newtextArea = (id) => {
    const getEditor = document.querySelector('.editor');
    if (document.querySelector(`textarea > #${id}`)) {
      return;
    }
    const makeText = createTextArea();
    makeText.setAttribute('id', id);
    getEditor.appendChild(makeText);
    return getEditor;
  };

  const createMain = () => {
    const mainElement = document.createElement('main');
    mainElement.setAttribute('id', 'ui');
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
