var Word = require("./Word")

var animals = ["anaconda", "angelfish", "anglerfish", "bluejay", "cardinal", "cat", "crow", "dog", "dolphin", "duck",
 "eagle", "fox", "frog", "gecko", "goose", "hawk", "horse", "iguana", "kestrel", "lemur", "lion", "ostrich", "otter", 
 "pelican", "orangutan", "piranha", "pony", "rabbit", "salamander", "seal", "sloth", "tiger", "tortoise", "viper", 
 "walrus", "whale", "wolf", "zebra"]

 var userGuess = "";

 inquirer.prompt(["Choose a letter."]).then(answers => {
    answers = userGuess;
});

 document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    if (userGuess > 96 && userGuess < 123) {
        stuff
    }else{ console.log("Please press a letter key.")}
 }