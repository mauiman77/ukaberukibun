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

  function createBoundBox(id) {
    const box = document.createElement('div');
    box.classList.add('boundbox');
    box.setAttribute('id', id);
    return box;
  }

  function removeTextArea(id) {
    const textAreaToRemove = document.querySelector(`div.boundbox#${id}`);
    console.log(textAreaToRemove);
    return textAreaToRemove.remove();
  }

  function createBtn(id) {
    const closeBtn = document.createElement('div');
    closeBtn.classList.add('close-btn');
    closeBtn.setAttribute('id', id);
    closeBtn.addEventListener('click', (e) => {
      removeTextArea(e.target.id);
    });
    return closeBtn;
  }

  function createTextArea(id) {
    const textArea = document.createElement('textarea');
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
