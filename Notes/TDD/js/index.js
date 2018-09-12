console.log("included js/index.js")

const screen = document.getElementById('screen')

function setScreen(value) {
  screen.innerText = value
}

function getScreen() {
  return screen.innerText
}

function clearScreen() {
  setScreen('')
}

function appendChildScreen(value) {
  setScreen
}

function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2
      break;
    default:
      return 'ERROR!'
  }
}

function parseScreen(input) {
  let [num1, operator, num2] = input.match(/(\d+)([+-x÷])(\d+)/).slice(1)
  return [+num1, operator, +num2]
}



document.addEventListener("DOMContentLoaded", () => {

  document.getElementById('clear').addEventListener('click', clearScreen)

  document.getElementById("buttons-container").addEventListener("click", (event) => {
    console.log("clicked", event.target, event.target.innerText)
    let buttonText = event.target.innerText

    if (buttonText.match(/\d/)){
      appendScreen(buttonText)
    }
    else if (buttonText.match(/[+])) {

    }
    else if (button.text === "=") {

    }
  })

})





// document.addEventListener("DOMContentLoaded", function(event) {
//   let keys = document.getElementsByClassName("buttons")[0].childElementCount
//   let temp
//   let tempTwo = document.getElementById('zero')
//
//   document.getElementById('screen-container').innerHTML = "<input disabled id='screen'>"
//   tempTwo.setAttribute("onclick", `pushButton('${tempTwo.innerHTML}')`)
//
//   for (let i = 0; i < keys - 1; i++) {
//     console.log(document.getElementsByClassName('buttons')[0].children[i])
//     temp = document.getElementsByClassName('buttons')[0].children[i].innerHTML
//     document.getElementsByClassName('buttons')[0].children[i].setAttribute('onclick', `pushButton('${temp}')`)
//   }
// })
//
// let value = 0
//
// function pushButton(input) {
//   let screenOfCalc = document.getElementById('screen')
//   switch (input) {
//     case 'C':
//       screenOfCalc.value = ""
//       break;
//     case '=':
//       screenOfCalc.value = doMath(screenOfCalc.value)
//       break;
//     default:
//       screenOfCalc.value += input
//   }
// }
//
//
// function doMath(str) {
//   for (let i = 0; i < str.length; i++) {
//     str = str.replace('÷', '/')
//     str = str.replace('x', '*')
//   }
//   return eval(str)
// }
