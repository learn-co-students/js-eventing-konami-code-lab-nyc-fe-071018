const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let tracker=0

function onKeyDownHandler(event) 
{
  console.log(tracker)
    const key=parseInt(event.detail || event.which)
    const paragraph=document.createElement('p')
    if(tracker===code.length){
          event.preventDefault()
          body.append('Great Job', paragraph)
          return
        }
        if (key===code[tracker])
          { console.log ("Success")
                      tracker++;
            if(tracker===code.length)
            { window.alert('You found it')}
          }
        else
          { console.log ("You've messed up")
            tracker=0;}
   
}
function init ()
{  const body= document.querySelector('body')
   body.addEventListener('keydown', onKeyDownHandler)
}

init()