// Grab all elements
// add event listeners to squares - done
// identify square by ID of event target - done
//set turn
let player = "One";
//grabbing all squares
const squares = document.querySelectorAll(".box");
//info
const info = document.getElementById("info")
//update text
info.textContent = "Player " + player + "'s turn";

//arrays to hold each square
let emptySquares = [];
let userSquares = [];
let oppSquares = [];




//adding event listener to each square
squares.forEach((square) => square.addEventListener('click', printHi));

// array to hold all squares
squares.forEach((square) => emptySquares.push(square.id))
// console.log(emptySquares);

//literally just prints hi to each square right now
//also bumps each clicked square from emptySq array into userSq array
function printHi(e){
    let box = e.target;
    console.log(box.id);
    emptySquares = emptySquares.filter(x => x !== box.id)
    userSquares.push(box.id)
    // console.log(emptySquares);
    // console.log(userSquares);
    let go = document.getElementById(box.id);

    go.classList.add(player); //only works once
    
    

    //Alternate goes between two people -
    
    if (player === "One") {
        player = "Two";
    } else {
        player = "One";
    };
    //update text
    info.textContent = "Player " + player + "'s turn";
    go.removeEventListener('click', printHi);
}



/* computer's go for vs computer mode
function compGo(){
    let choice = emptySquares.length;
    let number = Math.floor(Math.random()*choice);
    console.log(number);
    let number = Math.floor(Math.random()*choice);
    let computerGo = emptySquares[number];
}
*/



//draw different shape
//or initially add different bg colours - Done
//win conditions
//update score/info

/*Overall game:
-----------------------
Initialise variables:
//arrays to hold squares
let emptySquares = [];
let userSquares = [];
let oppSquares = [];

//set turn
let player = "playerOne";

//win conditions:





---------------
Grab elements:
//game area/all squares
const squares = document.querySelectorAll(".box");
//info
const info = document.getElementById("#info")


Start game:
//update text
info.textContent = `$(player) take your turn`;

Turn one: 
click square, 
change square, 
check for win
switch to other player

Turn two: same again

reset board
*/