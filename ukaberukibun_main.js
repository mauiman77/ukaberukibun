const weeBox = document.querySelector('.toolbox')
const bigBox = document.querySelector('.toolbox-safearea')
bigBox.addEventListener('mouseover', () => {
  weeBox.style.cssText = 'left: 0rem'
})

bigBox.addEventListener('mouseout', () => {
  weeBox.style.cssText = ''
})

function newBox () {
  const textToAdd = document.createElement('textarea')
  const mainBit = document.querySelector('.editor')
  mainBit.appendChild(textToAdd)
}

window.addEventListener('click', (e) => {
  let y = e.clientY
  let x = e.clientX
  console.log(y)

  const textBox = document.querySelector('textarea')
  textBox.style.cssText = `left: ${x}px; top: ${y}px`
})