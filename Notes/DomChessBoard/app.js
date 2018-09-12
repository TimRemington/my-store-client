console.log("HERE")

// set title
document.querySelector('title').innerText = 'Chess Board'

// find body
let body = document.getElementsByTagName('body')[0]

// make a container for the grid
let container = document.createElement('div')
container.classList.add('board')
container.classList.add('container')

body.appendChild(container)

const rowNum = 8
for (let j = 0; j < rowNum; j++) {
  container.appendChild(createRow(j))
}

function createRow(j) {
  // create a row
  let row = document.createElement('div')

  row.classList.add('row')
  row.classList.add('no-gutters')
  createColumns(row, j)

  return row
}

function createColumns(row, j) {
  // loop to create columns
  const colNum = 8

  for (let i = 0; i < colNum; i++) {
    // make the bootstrap column
    let col = document.createElement('div')
    col.classList.add('col')
    col.appendChild(createSquare((i + j) % 2))
    row.appendChild(col)
  }
}

function createSquare(black = false) {
  let div = document.createElement('div')

  div.classList.add('square')
  if (black) {
    div.classList.add('black')
  }

  return div
}
