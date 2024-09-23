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

createBoard();

const colors = [
  'red', 'blue', 'green', 'yellow', 'orange',
  'purple', 'pink', 'brown', 'cyan', 'lime',
  'red', 'blue', 'green', 'yellow', 'orange',
  'purple', 'pink', 'brown', 'cyan', 'lime'
];

const gameover = () => {
  const game = document.getElementsByClassName('square'); 
  
  for (let i = 0; i < game.length; i++) { 
    game[i].addEventListener('click', function() {
      game[i].style.backgroundColor = colors[i];
      game[i].style.transform = 'rotate(180deg)';
      setTimeout(() => {
        game[i].style.backgroundColor = "";
        game[i].style.transform = 'rotate(360deg)';
        
      }, 1000); 

    });
};
}
gameover();