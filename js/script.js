// Grab all elements
// add event listeners to squares - done
// identify square by ID of event target - done

//grabbing all squares
const squares = document.querySelectorAll(".box");

//arrays to hold each square
let emptySquares = [];
let userSquares = [];
let oppSquares = [];

//set turn
let player = "playerOne";


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
    console.log(emptySquares);
    console.log(userSquares);
    let go = document.getElementById(box.id);

    go.classList.add(player);

    //Alternate goes between two people
    
    if (player !== "playerTwo") {
        player = "playerTwo";
    }
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
//or initially add different bg colours to each square using addAttribute - style
//win conditions
//update score/info

