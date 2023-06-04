// Grab all elements
// add event listeners to squares - done
// identify square by ID of event target - done

//grabbing all squares
const squares = document.querySelectorAll(".box");
//info
const info = document.getElementById("info")


//arrays to hold each square
let emptySquares = [];
let oneSquares = [];
let twoSquares = [];
//set turn
let player = "One";

//update text
info.textContent = "Player " + player + "'s turn";

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
    oneSquares.push(box.id)

    let go = document.getElementById(box.id);

    go.classList.add(player); //only works once
    
    checkWin();

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

//win conditions:
function checkWin() {
    console.log(squares)

    const winConds = [
        [0, 1, 2],
        [0, 4, 8],
        [0, 3, 7],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 7],
        [3, 4, 5],
        [6, 7, 8],
    ]

    //Check player One win
    winConds.forEach(arr => { 
        //takes each winConds array and checks if squares with corresponding IDs have the class 'One' (or 'Two') in them. If all 3 squares do, it's a win.
        let winnerOne = arr.every(square => squares[square].classList.contains("One"));

        if (winnerOne) {
        //update text
        info.textContent = "Player One wins!";
        return;
        }
    })


    // //Check player Two win
    // winConds.forEach(arr => {
    //     let winnerTwo = arr.every(id => squares[id].classList.contains("Two"))

    //     if (winnerTwo) {
    //     //update text
    //     info.textContent = "Player Two wins!";
    //     return;
    //     }
    // })

    //currently doesn't like (squares[square])
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




//win conditions


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
function checkWin() {
    console.log(squares)

    const winConds = [
        [0, 1, 3],
        [0, 4, 8],
        [0, 3, 6],
        [1, 4, 7],
        [3, 5, 8],
        [3, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ]
}

// draw condition
        if (emptySquares === [] && winConds = false) {
            info.textContent("It's a draw!")
        } else {
            ()
        }

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