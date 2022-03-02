/* first have to find how to make many div inside the div in the html
const div = document.querySelector('div')
Put all the variables of X and O towards the outer scope 


Try to make a variable to connect to the body in html

const bigBody=document.querySelector('tic')
bigBody.addEventListener('click', function(event)) {
}

create an event listener, refer to pixelate and whack-a-mole.

instead of changing the color, want to put an X or an O inside of each of
 the cells*/

const gameState = {
  players: ["X", "O"],
  currentPlayerIndex: 0,
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};

// gameState.board[0][0] = 'x'
// gameState.board[0][1] = 'o'
// gameState.board[0][2] = 'x'
// gameState.board[1][0] = 'x'
// gameState.board[1][1] = 'o'
// gameState.board[1][2] = 'x'
// gameState.board[2][0] = 'x'
// gameState.board[2][1] = 'o'
// gameState.board[2][2] = 'x'

const gameZone = document.querySelector("table");

gameZone.addEventListener("click", function (event) {
  if (event.target.nodeName === "TD") {
    let row = event.target.id[0];
    let column = event.target.id[2];

    console.log({ row, column });

    gameState.board[row][column] =
      gameState.players[gameState.currentPlayerIndex];

    if (gameState.currentPlayerIndex === 0) {
      gameState.currentPlayerIndex = 1;
    } else if (gameState.currentPlayerIndex === 1) {
      gameState.currentPlayerIndex = 0;
    }
  }

  console.log(gameState.board);
});

var button = document.createElement("button");
button.innerHTML = "click";
document.body.appendChild(button);

// gameState.board.addEventListener("click", function (event) {
// console.log(event.target)

// if(event.target) {

// }
// }

// gameState.board[0][0] = 'x'

// gameState.board[2][2] = 'o'

// gameState.board[1][1] = gameState.players[0]

//   console.log(gameState)

//  Element.addEventListener('click', function(event)) {

//  }

// find a way to get into the object - to try to get the board to another value

//    make functions that allow when each player takes their turn, either A or X

// To help:

// getElementById find nodes with certain ID attributes

// getElementsByClassName find nodes with a certain CLASS attribute

// getElementsByTagName find nodes with a certain HTML tag

//querySelector search using CSS selectors
