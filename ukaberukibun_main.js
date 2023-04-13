const weeBox = document.querySelector('.toolbox')
const bigBox = document.querySelector('.toolbox-safearea')
bigBox.addEventListener('mouseover', () => {
  weeBox.style.cssText = 'top: 0rem'
})

bigBox.addEventListener('mouseout', () => {
  weeBox.style.cssText = ''
})
