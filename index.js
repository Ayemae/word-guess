var inquirer = require("inquirer")
var Word = require("./Word")

var animals = ["anaconda", "angelfish", "anglerfish", "bluejay", "cardinal", "cat", "crow", "dog", "dolphin", "duck",
    "eagle", "fox", "frog", "gecko", "goose", "hawk", "horse", "iguana", "kestrel", "lemur", "lion", "ostrich", "otter",
    "pelican", "orangutan", "piranha", "pony", "rabbit", "salamander", "seal", "sloth", "tiger", "tortoise", "viper",
    "walrus", "whale", "wolf", "zebra"]


var chooseWord = animals[Math.floor(Math.random() * animals.length)]
var mysteryWord = chooseWord.split("");
guessThisWord = new Word(mysteryWord);



inquirer.prompt([

    {
        type: "input",
        name: "guess",
        message: "Choose a letter."
    }
]).then(function (user) {
    console.log (guessThisWord.letters)
    guessThisWord.checkForMatch(user.guess);
    console.log("hey");
})

