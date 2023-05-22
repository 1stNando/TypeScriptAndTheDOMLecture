import './style.css'

//const firstListItem = document.querySelector('li')

// Defines a method for us to handle the click
function handleClickSquare(event: MouseEvent) {
  // Get the target of the click
  const thingClickedOn = event.target

  // If the thing clicked on is an LI Element
  // - This does several things:
  // - 1. Checks that the target isn't null
  // - 2. Let's TypeScript know that *inside* this if statement
  // the thingClickedOn is an LI element, and thus we can
  // change its textContent

  if (thingClickedOn instanceof HTMLLIElement) {
    thingClickedOn.textContent = 'X'
  }
}
const allSquares = document.querySelectorAll('li')

allSquares.forEach((square) =>
  square.addEventListener('click', handleClickSquare)
)

//firstListItem?.addEventListener('click', handleClickSquare)

// Select all squares to apply querySelector to all 'li' items

//check to make sure the above worked
//console.log(allSquares)

// now we use a forEach loop to addEventListener. Note we cannot add this via querySelectorAll() method. Because what is returned is a NodeList. So we must do this instead
