import './style.css'

//const firstListItem = document.querySelector('li')

// Define a state for "currentPlayer" and state the limitations available
// This means that currentPlayer is a string, but can *only* be the string X or the string O
let currentPlayer: 'X' | 'O' = 'X'

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
    if (thingClickedOn.classList.contains('taken')) {
      console.log('Not available to click!')
      return
    }

    thingClickedOn.textContent = currentPlayer

    // Adds the taken class so that we SHOW the user
    // they can't select this item!
    thingClickedOn.classList.add('taken')

    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 
    }
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

// The above code is safeKeeping
