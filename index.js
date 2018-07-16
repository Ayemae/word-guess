var inquirer = require("inquirer")
var Word = require("./Word")

var animals = ["anaconda", "angelfish", "anglerfish", "bluejay", "cardinal", "cat", "crow", "dog", "dolphin", "duck",
    "eagle", "fox", "frog", "gecko", "goose", "hawk", "horse", "iguana", "kestrel", "lemur", "lion", "ostrich", "otter",
    "pelican", "orangutan", "piranha", "pony", "rabbit", "salamander", "seal", "sloth", "tiger", "tortoise", "viper",
    "walrus", "whale", "wolf", "zebra"]






function startGame() {

    var mysteryWord = "";
    var chooseWord = animals[Math.floor(Math.random() * animals.length)]
    mysteryWord = chooseWord.split("");
    guessThisWord = new Word(mysteryWord);
    guessThisWord.wordString();
}


function promptUserGuess () {
    console.log("*************")
    inquirer.prompt([

        {
            type: "input",
            name: "guess",
            message: "Choose a letter."
        }
    ]).then(function (user) {
        guessThisWord.checkForMatch(user.guess);
            promptUserGuess();
            if (user.guess === "exit") {return}
    })
}


startGame();
promptUserGuess();