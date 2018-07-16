var Letter = require("./Letter");

function Word(mwArr) { 
    this.mysteryWord = "";
    this.letters = [];
    this.wordString = function() {
        for (var i = 0; i < mwArr.length; i++) {
            mwArr[i] = new Letter(mwArr[i]);
            letters.push(mwArr[i])
        }
    },
    this.checkForMatch = function(userGuess) {
        for (var i = 0; i < letters.length; i++) {
            letters[i].checkForCorrect(userGuess);
        }
    }
}

module.exports = Word;