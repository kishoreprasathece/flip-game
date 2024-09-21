 // Function to create the board
function createBoard() {
  let container = document.querySelector('.container');
  let board = document.createElement('div');
  board.setAttribute('class', 'board');

  for (let row = 1; row <= 4; row++) {
    let rowElement = document.createElement('div');
    rowElement.setAttribute('class', 'row');

    for (let square = 1; square <= 5; square++) {
      let squareElement = document.createElement('button');
      squareElement.setAttribute('class', 'square');
      rowElement.appendChild(squareElement);
    }

    board.appendChild(rowElement);
  }

  container.appendChild(board);
}

createBoard(); // Create the game board

// Colors array
const colors = [
  'red', 'blue', 'green', 'yellow', 'orange',
  'purple', 'pink', 'brown', 'cyan', 'lime',
  'red', 'blue', 'green', 'yellow', 'orange',
  'purple', 'pink', 'brown', 'cyan', 'lime'
];

// Shuffle the colors
shuffle(colors);

// Initialize variables for first and second picks
let firstPick = null;
let secondPick = null;

// Get all the squares
let squares = document.getElementsByClassName('square');

// Add click event listeners to squares
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function () {
    // Show the color
    squares[i].style.backgroundColor = colors[i];

    // If it's the first pick
    if (!firstPick) {
      firstPick = i;
    } 
    // If it's the second pick
    else if (!secondPick && firstPick !== i) {
      secondPick = i;

      // Check for match after a short delay
      setTimeout(() => {
        if (colors[firstPick] === colors[secondPick]) {
          // If it's a match, keep the squares open
          squares[firstPick].style.visibility = 'hidden';
          squares[secondPick].style.visibility = 'hidden';
        } else {
          // If it's not a match, hide the colors again
          squares[firstPick].style.backgroundColor = '';
          squares[secondPick].style.backgroundColor = '';
        }
        // Reset picks
        firstPick = null;
        secondPick = null;
      }, 50);
    }
  });
}

// Shuffle function
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

 