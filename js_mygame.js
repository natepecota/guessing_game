  var message;
  var userAge = document.getElementById("age");
  var userGuess = document.getElementById("guess");
  var userAnswer = document.getElementById("answer");
  var userSubmit = document.getElementById("submit-button");

  var Game = function(age, guess) {
      this.age = age;
      this.guess = guess;
      this.answer = age * 365 * 24;

    this.compare = function() {
      if(this.guess > this.answer) {
        message = "Your guess is too high, try again!";
      } else if(this.guess < this.answer) {
        message = "Your guess is too low, try again!";
      } else {
        message = "That's correct, you've been alive for " + this.answer + " hours!";
      }
      userAnswer.textContent = message;
    }
  }

  userSubmit.addEventListener("click", function(e) {
    e.preventDefault();
    var uAge = userAge.value;
    var uGuess = userGuess.value;
    var newGame = new Game(uAge, uGuess);
    newGame.compare();
  });
