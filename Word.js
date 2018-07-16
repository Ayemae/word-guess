var Letter = require("./Letter");

function Word() { 
    this.mysteryWord = "";
    this.letters = [];
    this.wordString = function() {
        for (var i = 0; i < letters.length; i++) {
            this.guess();
        }
    },
    this.checkForMatch = function() {
        for (var i = 0; i < letters.length; i++) {
            this.checkForCorrect();
        }
    }
}