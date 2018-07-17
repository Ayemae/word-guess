var inquirer = require("inquirer")
var Word = require("./Word")

var animals = ["anaconda", "angelfish", "anglerfish", "bluejay", "cardinal", "cat", "crow", "dog", "dolphin", "duck",
    "eagle", "fox", "frog", "gecko", "goose", "hawk", "horse", "iguana", "kestrel", "lemur", "lion", "ostrich", "otter",
    "pelican", "orangutan", "piranha", "pony", "rabbit", "salamander", "seal", "sloth", "tiger", "tortoise", "viper",
    "walrus", "whale", "wolf", "zebra"]

var lettersGuessed = [];



function startGame() {

    var mysteryWord = "";
    var chooseWord = animals[Math.floor(Math.random() * animals.length)]
    mysteryWord = chooseWord.split("");
    guessThisWord = new Word(mysteryWord);
    lettersGuessed = [];
    guessThisWord.wordString();
    guessThisWord.checkForMatch();
    promptUserGuess();
}


function promptUserGuess() {
    if (guessThisWord.gameOver === true) {
        promptPlayAgain();
    }
    else {
        console.log("*************")
        inquirer.prompt([

            {
                type: "input",
                name: "guess",
                message: "Choose a letter."
            }
        ]).then(function (user) {
            if ((user.guess).length > 1) {
                console.log("One letter at a time, please.")
                promptUserGuess();
            }
            else if (lettersGuessed.indexOf(user.guess) === -1) {
                guessThisWord.checkForMatch(user.guess);
                lettersGuessed.push(user.guess);
                promptUserGuess();
            } else {
                console.log("You already guessed that letter.")
                promptUserGuess();
            }
        })
    }
}


startGame();

function promptPlayAgain() {
    inquirer.prompt([

        {
            type: "list",
            name: "playAgain",
            message: "Do you want to play again?",
            choices: ["Yes", "No"]
        }
    ]).then(function (user) {
        if (user.playAgain === "Yes") {
            startGame();
        }
        else {
            return;
        }
    })
}