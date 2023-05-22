import './style.css'

//const firstListItem = document.querySelector('li')

// Define a state for "currentPlayer" and state the limitations available
// This means that currentPlayer is a string, but can *only* be the string X or the string O
let currentPlayer: 'X' | 'O' = 'X'

// add another STATE to account for moveCount
let moveCounter = 0

// Defines a method for us to handle the click
function handleClickSquare(event: MouseEvent) {
  // Adds event HANDLER, to halt bubbling here. Prevents potential bubbling to a further up hypothetical parent
  event.stopPropagation()

  // Get the target of the click
  const thingClickedOn = event.target

  // If the thing clicked on is an LI Element
  // - This does several things:
  // - 1. Checks that the target isn't null
  // - 2. Let's TypeScript know that *inside* this if statement
  // the thingClickedOn is an LI element, and thus we can
  // change its textContent
  if (thingClickedOn instanceof HTMLLIElement) {
    // If the element ALREADY has 'taken' class marked, we shouldn't
    // let them click again! We do this by ENDING (return)
    // from the function RIGHT AWAY
    if (thingClickedOn.classList.contains('taken')) {
      console.log('Nope, not available to click')
      return
    }

    thingClickedOn.textContent = currentPlayer

    // Adds the taken class so that we SHOW the user
    // they can't select this item!
    thingClickedOn.classList.add('taken')

    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }

    // Increment the moveCounter!
    moveCounter++
    // This could be placed at the top. Its more efficient here instead.
    const header = document.querySelector('h1')

    if (header instanceof HTMLHeadingElement) {
      header.textContent = `Move ${moveCounter} of Tic Tac Toe`
    }
  }
}
// const allSquares = document.querySelectorAll('li')

// allSquares.forEach((square) =>
//   square.addEventListener('click', handleClickSquare)
// )

// This will tell it to wait on click. BUBBLES up to the parent. The 'li' doesn't handle the click, so it
// bubbles up to the parent 'ul'
const gameBoard = document.querySelector('ul')

if (gameBoard instanceof HTMLUListElement) {
  gameBoard?.addEventListener('click', handleClickSquare)
}

//Next week we will user more effective and better tools with REACT
//firstListItem?.addEventListener('click', handleClickSquare)

// Select all squares to apply querySelector to all 'li' items

//check to make sure the above worked
//console.log(allSquares)

// now we use a forEach loop to addEventListener. Note we cannot add this via querySelectorAll() method. Because what is returned is a NodeList. So we must do this instead

// The above code is safeKeeping
