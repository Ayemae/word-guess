function Letter(a) {
    this.placeholder = "_";
    this.secretLetter = a;
    this.guessCorrect = false;
    this.guessMade = function() {
        if (guessCorrect = true) {
            console.log(this.secretLetter)
        }else {
            console.log(this.placeholder)
        }
    },
    this.checkForCorrect = function(userGuess) {
        if (secretLetter === userGuess) {
            guessCorrect = true;
            this.guessMade();
        }
    }
}

module.exports = Letter;