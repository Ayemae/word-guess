function Letter() {
    this.secretLetter = "";
    this.guessCorrect = false;
    this.guess = function() {
        if (secretLetter === userGuess) {

        }else {

        }
    },
    this.checkForCorrect = function(userGuess) {
        if (secretLetter === userGuess) {
            guessCorrect = true;
        }
    }
}

module.exports = Letter;