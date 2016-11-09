var wrongGuesses = [];
var rightGuesses = [];
var guess = [] //current user's letter guess gets put in the box if correct
var wrongLetter = "";
var rightLetter = "";
var underline = [];
var blankDashes = "";
var letterChoice = "";
var targetWord = ""; //random word from wordlist
var blanks = ""; //--- for unguessed letters
var blanks = []; //empty array
var wordList = ["Grinch", "ornament", "Frosty", "reindeer", "Rudolf"]; //words to be randomly chosen
var i_wins = 0; //game start, initialize wins to 0
var turnsLeft = 8; //game start, initialize user guesses to 8




document.onkeyup = function() {
    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(randomWord); //random word choice is working
    for (var i = 0; i < randomWord.length; i++) {
        targetWord.push("_");
        console.log("targetWord is " + targetWord);
    };

    if (targetWord[i] === " ") {
        blanks.innerHTML = " ";
    } else {
        blanks.innerHTML = " ";
        console.log(blanks); //getting html to log

    };

    //html dashes 
    blankDashes = underline.join("");
    console.log(blankDashes);

    //user choice
    document.onkeyup = function() {
        letterChoice = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(letterChoice);
    };


    wrongGuesses.push(letterChoice);
    console.log(wrongGuesses);

    //html wrong letters 
    // //html letters inplace of dashes 
    blankDashes = underline.join("");

    console.log(targetWord);
    console.log(word)
};
