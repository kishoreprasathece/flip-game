console.log(alert("click ok To start"));
function createBoard(){
    let container = document.querySelector('.container');

    // Create the board container
    let board = document.createElement('div');
    board.setAttribute('class', 'board');

    for(let rowNum = 1; rowNum <= 6; rowNum++){
        let row = document.createElement('div');
        row.setAttribute('class', 'row');

        for(let squareNum = 1; squareNum <= 6; squareNum++){
            let square = document.createElement('button');
            square.setAttribute('class', 'square');

            // Append the square to the row
            row.appendChild(square);
        }
        // Append the row to the board
        board.appendChild(row);
    }
    // Append the board to the container
    container.appendChild(board);
}

// Call the function to create the board
createBoard();


let squares = document.getElementsByClassName('square');

// Iterate over each element to add an event listener
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function () {
        squares[i].style.backgroundColor = 'red';  // Correct CSS property
    });
}
;

// Iterate over each element to add an event listener
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mouseout', function () {
        squares[i].style.backgroundColor = 'white';  // Correct CSS property
    });
}