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

  function createTextArea() {
    const textArea = document.createElement('textarea');
    return textArea;
  }

  const newtextArea = () => {
    const getEditor = document.querySelector('.editor');
    getEditor.appendChild(createTextArea());
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

  return { initialisePage, newtextArea };
})();

export default userInterface;
