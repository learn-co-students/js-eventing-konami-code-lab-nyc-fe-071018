const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let tracker = 0;

function onKeyDownHandler(event) {
  const key = parseInt(event.detail || event.which)
  if (tracker === code.length) {
        event.preventDefault()
        return
      }
    
    if (key === code[tracker]) {
      console.log('Success!');
      tracker++
      if (tracker === code.length) {
        window.alert('You found it!')
      }
    } else {
      console.log('youve messed up!!!!!');
      tracker = 0;
    }
}

// we have an array of key codes (event.which)
// add an event listener somewhere so that when we press this, something happens
// we need to keep track of where we are in the combo

function init() {
  // tracker keeps track of where we are in the array
  // Write your JavaScript code inside the init() function
  const body = document.querySelector('body');
  body.addEventListener('keydown', onKeyDownHandler)
}

init();