const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let counter = 0

  function konami(e){
    if (parseInt(e.which) === code[counter]) {
      counter++
      if (counter === code.length){
        alert("KONAMI TSUNAMI")
      }
    } else {
      counter = 0
    }
  }

  document.addEventListener("keydown", function(e))
}
