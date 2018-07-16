function Letter() {
    this.placeholder = "_";
    this.secretLetter = "";
    this.guessCorrect = false;
    this.guess = function() {
        if (guessCorrect = true) {
            console.log(this.secretLetter)
        }else {
            console.log(this.placeholder)
        }
    },
    this.checkForCorrect = function(userGuess) {
        if (secretLetter === userGuess) {
            guessCorrect = true;
        }
    }
}

module.exports = Letter;