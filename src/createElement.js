import './style.css';

const userInterface = (() => {
  const createSideBar = () => {
    const sideBar = document.createElement('div')
    sideBar.classList.add('sidebar')
    return sideBar
  }

  const createTemplateText = () => {
    const templateTextSection = document.createElement('div')
    templateTextSection.classList.add('editor')

    const templateTextBox = document.createElement('textarea')
    templateTextSection.appendChild(templateTextBox)

    return templateTextSection
  }

  return {createSideBar, createTemplateText}
})()

const mainSection = (() => {
  const createMain = () => {
    const mainElement = document.createElement('main')
    mainElement.setAttribute('id', 'ui')
    appendMain(mainElement)
    return mainElement
  }

  const appendMain = (toAppend) => {
    toAppend.appendChild(userInterface.createSideBar())
    toAppend.appendChild(userInterface.createTemplateText())
    return toAppend
  }

  const initalisePage = () => {
    const body = document.querySelector('body')
    body.appendChild(createMain())
    return body
  }
  return {initalisePage}
})()

export {mainSection}