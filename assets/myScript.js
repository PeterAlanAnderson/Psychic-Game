// Peter Anderson's Psychic Game assignment, 2018
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.3.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// ***********************Constant Global Variables*****************
let numWins = 0;
let numLosses= 0;
let guessesLeft = 9;
let guessesSoFar = "";
let secretLetter = "g";




// ************************Methods***********************


// Method prints out the 4 variables used in game tracking

function printVars() {
    $("#wins").text("Wins: "+numWins);    
    $("#losses").text("Losses: "+numLosses);
    $("#guessesLeft").text("Guesses left: "+guessesLeft);    
    $("#guessesSoFar").text("Guesses so far: "+guessesSoFar);
}


// Win and loss functions track progress,
// then reset the game state.

function winner() {
    numWins++;
    guessesLeft = 9;
    guessesSoFar = "";
    printVars();    
}

function loser() {
    numLosses++;
    // shame++
    guessesLeft = 9;
    guessesSoFar = "";
    printVars();
}



// Accepts the input from the key listener, adds the key to guessesSoFar,
// decrements guessesLeft, then prints.  

function addLetter(keyInput) {
    if (guessesSoFar.length === 0) {
        guessesSoFar = keyInput;
    } else {
        guessesSoFar = guessesSoFar + ", " + keyInput;
        console.log(guessesSoFar);
    }
    guessesLeft--;
    printVars();
}


// Uses a random number to pick a goal letter.
// Assigns new goal letter to secretLetter variable.

function randomLetter() {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    let rnum = Math.floor(Math.random() * chars.length);
    secretLetter = chars.substring(rnum+1);
    console.log(secretLetter);
}




// Listens for key input and assigns each press to a variable,
// then calls the function to add a letter to the game.

document.addEventListener('keypress', (event) => {
    const keyName = event.key;
    console.log("key press detected: "+keyName);
    if (keyName == secretLetter) {
        winner();
    } else if (guessesLeft === 1) {
        loser();
    } else {
        addLetter(keyName);
    }
    
  });