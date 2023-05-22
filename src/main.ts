import './style.css'

//const firstListItem = document.querySelector('li')

function handleClickSquare(event) {
  const thingClickedOn = event.target

  thingClickedOn.textContent = 'X'
}

//firstListItem?.addEventListener('click', handleClickSquare)

// Select all squares to apply querySelector to all 'li' items
const allSquares = document.querySelectorAll('li')
//check to make sure the above worked
console.log(allSquares)

// now we use a forEach loop to addEventListener. Note we cannot add this via querySelectorAll() method. So we must do this instead
allSquares.forEach((square) =>
  square.addEventListener('click', handleClickSquare)
)
