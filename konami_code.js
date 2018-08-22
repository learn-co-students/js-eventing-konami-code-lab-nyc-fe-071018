const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let tracker = 0

function onKeyDownHandler(event) {
  console.log(tracker)
  const key = parseInt(event.detail || event.which)
  if (tracker === code.length) {
    event.preventDefault()
    return
  }
if (key === code[tracker]) {
  tracker++
  if (tracker === code.length) {
    window.alert("YAS!")
  }
} else {
  console.log('BUMMAH!')
  tracker = 0

}
}

function init() {
  const body = document.querySelector('body')
  body.addEventListener('keydown', onKeyDownHandler)
}

init()

//function init() {
  //let tracker = 0
  // Write your JavaScript code inside the init() function
//const body = document.querySelector('body')
//body.addEventListener('keydown', (event) => {
  //if (tracker === code.length) {
    //event.preventDefault()
    //return
  //}
  //if (event.which === code[tracker]) {
    //console.log('YAS!')
   // tracker ++
  //  if (tracker === code.length) {
    //  alert ('BOOM!')
    //}
//  } else {
  //  console.log('BUMMAH!')
  //  tracker = 0
 // }
//})
//}

