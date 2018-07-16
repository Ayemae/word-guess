function Letter(a) {
    this.placeholder = "_";
    this.secretLetter = a;
    this.guessCorrect = false;
    this.displayGame = function() {
        if (this.guessCorrect === false) {
            console.log(this.placeholder)
        }else {
            console.log(this.secretLetter)
        }
    },
    this.checkForCorrect = function(userGuess) {
        if (this.secretLetter === userGuess) {
            this.guessCorrect = true;
            this.displayGame();
        }
    }
}

module.exports = Letter;