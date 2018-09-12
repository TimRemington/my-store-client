document.addEventListener("DOMContentLoaded", function(event) {
  console.log('DOM fully loaded and parsed.');

  // test stuff
  document.body.children[4].children[0].innerHTML = "Mittens the Kitten"
  document.body.children[2].setAttribute('src', "http://placekitten.com/g/200/300")

  // how to detecte hover
  let textElement = document.body.children[1]
  textElement.addEventListener("mouseover", function(event){
    textElement.style.color = 'orange'
  })
});
