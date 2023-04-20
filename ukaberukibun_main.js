const weeBox = document.querySelector('.toolbox')
const bigBox = document.querySelector('.toolbox-safearea')
bigBox.addEventListener('mouseover', () => {
  weeBox.style.cssText = 'left: -18rem'
})

bigBox.addEventListener('mouseout', () => {
  weeBox.style.cssText = ''
})

bigBox.addEventListener('click', () => {
  weeBox.style.cssText = 'transition: 0.4s; left: 0rem'
})

function newBox () {
  const textToAdd = document.createElement('textarea')
  const mainBit = document.querySelector('.editor')
  mainBit.appendChild(textToAdd)
}


function moveText () {
  window.addEventListener('click', (e) => {
    let y = e.clientY
    let x = e.clientX
    console.log(y)

    const textBox = document.querySelector('textarea')
    textBox.style.cssText = `left: ${x}px; top: ${y}px`
  })
}
