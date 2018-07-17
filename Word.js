var Letter = require("./Letter");


function Word(mwArr) {
    this.mysteryWord = "";
    this.letters = [];
    this.gameOver = false;
    this.wordString = function () {
        for (var i = 0; i < mwArr.length; i++) {
            (this.letters).push(new Letter(mwArr[i]));
        }
    },
        this.checkForMatch = function (userGuess) {
            for (var i = 0; i < this.letters.length; i++) {
                this.letters[i].checkForCorrect(userGuess);
                this.letters[i].displayGame();
            }
            for (var i = 0; i < this.letters.length; i++) {
                if (this.letters[i].guessCorrect === false) {
                    return;
                }
            }
            console.log("You win!")
            this.gameOver = true;
        }
}


module.exports = Word;