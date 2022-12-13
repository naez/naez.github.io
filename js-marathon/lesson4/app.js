const board = document.querySelector('#board')
let colors = []
const SQUARES_NUMBER = 400

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', setColor)
  square.addEventListener('mouseleave', removeColor)

  board.append(square)
}

function setColor(event) {
  const element = event.target
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
  const element = event.target
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

function randomColorGenerator() {
  const colorSymbols = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += colorSymbols[Math.floor(Math.random() * 16)]
  }
  return color
}

const ul = document.createElement('ul')
ul.classList.add('colors-list')

board.prepend(ul)

function colorsPush(key) {
  if (key === 'clear') {
    colors = []
    ul.innerText = ''
  }

  for (let i = 0; i < 8; i++) {
    colors.push(randomColorGenerator())
  }
  for (let i = 0; i < colors.length; i++) {
    const li = document.createElement('li')
    li.innerText = colors[i]
    li.style.backgroundColor = colors[i]
  
    ul.append(li)
  }
}

colorsPush()


const button = document.createElement('button')
button.className = 'btn'
button.innerText = 'Click to change colors'

board.append(button)

button.addEventListener('click', () => {
  colorsPush('clear')
})