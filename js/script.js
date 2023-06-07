// Grab elements
//squares
const squares = document.querySelectorAll(".box");
//info
const info = document.getElementById("info")

// Initialise variables:
    //arrays to hold squares
let emptySquares = [];
squares.forEach((square) => emptySquares.push(square.id));

    //player's squares arrays
let oneSquares = [];
let twoSquares = [];
    //set winner
var winner = false;
    //set turn
let player = "One";
    //set text
info.textContent = "Player One starts";

//adding event listener to each square
squares.forEach((square) => square.addEventListener('click', takeTurn));

function takeTurn(event){
    let box = event.target;
    //remove square from playable squares
    emptySquares = emptySquares.filter(x => x !== box.id);
    let turnID = parseInt(box.id);
    let go = document.getElementById(box.id);
    //modify square for player's turn
    go.classList.add(player); 
    
    //Alternate goes between two people -
    if (player === "One") {
        oneSquares.push(turnID);
        winner = checkWin();
        // console.log(winner);
        if (!winner) {
            if (emptySquares.length == 0){
            draw();
            } else {
                player = "Two";
                info.textContent = "Player " + player + "'s turn";
            }
        }
    } else {
        twoSquares.push(turnID);
        winner = checkWin();
        // console.log(winner);
        if (!winner) {
            if (emptySquares.length == 0){
            draw();
            } else {
                player = "One";
                info.textContent = "Player " + player + "'s turn";
            }
        }
    }   
    go.removeEventListener('click', takeTurn);
};

//win conditions:
function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [0, 4, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ];

    //loop through arrays
    for (let i=0; i < winConditions.length; i++) {
        let square0 = winConditions[i][0];
        let square1 = winConditions[i][1];
        let square2 = winConditions[i][2];
        //compare contents of players' arrays to winCondition arrays
        if (oneSquares.includes(square0) && oneSquares.includes(square1) && oneSquares.includes(square2)) {
            winner = true;
            info.classList.add("win");
            info.textContent = "Player One wins!";
            stopGame();
            return winner;
        } else if (twoSquares.includes(square0) && twoSquares.includes(square1) && twoSquares.includes(square2)) {
            winner = true;
            info.classList.replace("text", "win");
            info.textContent = "Player Two wins!";
            stopGame();
            return winner;
        }
    }
}

function draw() {
    console.log("it's a draw");
    info.classList.replace("text", "draw");
    info.textContent = "It's a draw!";
}

function stopGame() {
    squares.forEach((square) => {
        square.replaceWith(square.cloneNode(true))
    });
}


//#########################################
//Notes: 

/* computer's go for vs computer mode*/
// function compGo(){
//     let choice = emptySquares.length;
//     let number = Math.floor(Math.random()*choice);
//     console.log(number);
//     let number = Math.floor(Math.random()*choice);
//     let computerGo = emptySquares[number];
// }