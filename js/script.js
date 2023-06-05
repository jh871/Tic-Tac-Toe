// Grab elements
//squares
const squares = document.querySelectorAll(".box");

//info
const info = document.getElementById("info")

// Initialise variables:
//arrays to hold squares
let emptySquares = [];
squares.forEach((square) => emptySquares.push(square.id));

//set turn
let player = "One";

//set text
info.textContent = "Player " + player + "'s turn";


//adding event listener to each square
squares.forEach((square) => square.addEventListener('click', takeTurn));


function takeTurn(event){
    let box = event.target;
    //remove square from playable squares
    emptySquares = emptySquares.filter(x => x !== box.id);
    
    let go = document.getElementById(box.id);
    //modify square for player's turn
    go.classList.add(player); 
    
    checkWin();

    //Alternate goes between two people -
    if (player === "One") {
        player = "Two";
    } else {
        player = "One";
    };
    //update text
    info.textContent = "Player " + player + "'s turn";
    go.removeEventListener('click', takeTurn);
}


//win conditions:
function checkWin() {
    // console.log(squares)
    const winConditions = [
        [0, 1, 2],
        [0, 4, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ]    
    //Attempt method 1:
    //loop through arrays
    for (let i=0; i < winConditions.length; i++) {
        // winConditions[i]
        let square0 = winConditions[i][0];
        let square1 = winConditions[i][1];
        let square2 = winConditions[i][2];
        console.log(square0, square1, square2);
    }
    //compare class
    // Check player One win

//     if (winnerOne) {
//     //update text
//     info.textContent = "Player One wins!";
//     return;
//     }
    
//     //Check player Two win
//     if (winnerTwo) {
//     //update text
//     info.textContent = "Player Two wins!";
//     return;
//     }
}


// draw condition
        // if (emptySquares === [] && winConds = false) {
        //     info.textContent("It's a draw!")
        // } else {
        //     ()
        // }

// ---------------


// Turn one: 
// click square, 
// change square, 
// check for win
// switch to other player

// Turn two: same again

// reset board
//#########################################
//Notes: 

//win conditions - different versions:
/* Method 1: cycle through arrays of win conditions checking for matching class attribute on box
*/

/* Method two: 
push each clicked square to an array for each player and then check if their array includes a winCond array
//user played squares - method 2
let userSquares = [];
let oppSquares = [];
*/


/* Method 3: 
Use data-value attributes on squares where each winning line adds up to 15
// let value = box.getAttribute('data-value');
// console.log(value);
*/

/* computer's go for vs computer mode*/
// function compGo(){
//     let choice = emptySquares.length;
//     let number = Math.floor(Math.random()*choice);
//     console.log(number);
//     let number = Math.floor(Math.random()*choice);
//     let computerGo = emptySquares[number];
// }