var wordList = ["grinch", "ornament", "frosty", "reindeer", "rudolf"]; //words to be randomly chosen
var chosenWord = ""; //random word from wordlist
var lettersInChosenWord = [];
var numBlanks = 0;
var blanksAndCorrects = [];
var wrongGuesses = [];


//Game Counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 8;



//Functions
//=================================================================
//startGame()

function startGame() {
    // Reset the guesses back to 0

    //Reset the guesses back to 0
    numGuesses = 8;

    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;

    console.log(chosenWord); //random word choice is working

    blanksAndCorrects = []; //needed to reset the guesses
    wrongGuesses = []; //needed to reset the guesses

    for (var i = 0; i < numBlanks; i++) {
        blanksAndCorrects.push("_");
    };
    console.log(blanksAndCorrects);

    document.getElementById("guessesLeft").innerHTML = numGuesses;
    document.getElementById("wordBlanks").innerHTML = blanksAndCorrects.join(" ");
    document.getElementById('wrongGuesses').innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letterGuessed) {

    var letterInWord = false;

    for (var i=0; i<numBlanks; i++) {
        if (chosenWord[i] == letterGuessed) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for (var i=0; i<numBlanks; i++) {
            if(chosenWord[i] == letterGuessed) {
                blanksAndCorrects[i] = letterGuessed;
            }
        }
        console.log(blanksAndCorrects);
    } else {
        wrongGuesses.push(letterGuessed);
        numGuesses--;
    }
}

//Functions to run the game
//===================================================

function roundComplete() {
    // First, log an initial status update in the console telling us how many wins, losses, and guesses are left
    console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

    // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
    document.getElementById("guessesLeft").innerHTML = numGuesses;
    document.getElementById("wordBlanks").innerHTML = blanksAndCorrects.join(" "); // This will print the array of guesses and blanks onto the page
    document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" "); // this will print the wrong guesses onto the page.

    // If we have gotten all the letters to match the solution... 
    if (lettersInChosenWord.toString() == blanksAndCorrects.toString()) {
        winCounter++; // add to the win counter 
        alert("You win!"); // give the user an alert

        // Update the win counter in the HTML
        document.getElementById("winCounter").innerHTML = winCounter;
        startGame(); // restart the game 
    }

    // If we've run out of guesses
    else if (numGuesses == 0) {
        lossCounter++; // add to the loss counter 
        alert("You lose"); // give the user an alert

        // Update the loss counter in the HTML
        document.getElementById("lossCounter").innerHTML = lossCounter;
        startGame(); // restart the game
    }

}

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================

// Starts the Game by running the startGame() function
startGame();

// Then initiates the function for capturing key clicks.
document.onkeyup = function(event) {
    letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); // converts all key clicks to lowercase lettesr

    checkLetters(letterGuessed); // runs the code to check for correctness 
    roundComplete(); // runs the code after each round is done
}

