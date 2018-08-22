const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// up up down down left right left right a b

// We have an array of key codes (event.which)
// Add an event listener somewhere so when we press this, something happens
// We need to keep track of where we are in the combo

function onKeyDownHandler(event) {
  const key = parseInt(event.detail || event.which)
  if (tracker ===code.length) {
      event.preventDefault()
      return
    }
    if (key === code[tracker]) {
      console.log(':)')
      tracker++
      if (tracker === code.length) {
        window.alert('Hurray!')
      }
    } else {
      console.log(':(')
      tracker = 0
    }
  }


function init() {
  // tracker keeps track of where we are in the array
  // Write your JavaScript code inside the init() function
  const body = document.querySelector('body')
  body.addEventListener('keydown', onKeyDownHandler)
}

let tracker = 0

init()