document.addEventListener('DOMContentLoaded', () => {

  let myElement = document.getElementById('myEle')

  // doStuff is a "callback"
  var doStuff = function() {
    alert("PARTY TIME");
  }
  myElement.addEventListener("click", doStuff);

  // Or just anonymous function
  myElement.addEventListener("click", function(event){
    console.log('event:', event.target)
    alert("COWABUNGA")
  });

  // myElement.removeEventListener("click", );
  // Clicky no more worky

})
