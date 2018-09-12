//Add JS validation
document.addEventListener('DOMContentLoaded', () => {
//1. add a submit event on the form

let myForm = document.getElementById('contactForm')
.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('submit yo!')
})

//2. add a verification on email

if ( !document.getElementById('email').value.includes('@') ){
  window.alert("WRONG")
  document.getElementById('email').setCustomValidity("Ya DINGUS")
}

//3. Require the first and last name


//4. append error messages to the DOM if input is not valid


//STRETCH: Use a blur event on field of your choice and add error handling
})
