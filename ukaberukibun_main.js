const weeBox = document.querySelector('.toolbox')
const bigBox = document.querySelector('.toolbox-safearea')
bigBox.addEventListener('mouseover', () => {
  weeBox.style.cssText = 'top: 0rem'
})

bigBox.addEventListener('mouseout', () => {
  weeBox.style.cssText = ''
})

function newBox () {
  const textToAdd = document.createElement('textarea')
  const mainBit = document.querySelector('.editor')
  mainBit.appendChild(textToAdd)
}
