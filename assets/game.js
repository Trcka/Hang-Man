var game = {
  words: ["html","css","javascript","python","Ruby","sql","Java","scratch"],
  wrong: [],
  wins: 0,

  randomWord: function() {
    return [Math.floor(Math.random()*this.words.length)];
  },

  wrongGuesses: function() {
    document.querySelector("#used").innerHTML = this.wrong.toString();
  },
  printWins: function() {
    var win= "<p>Wins: "+this.wins+"</p>";
    document.querySelector("#wins").innerHTML = win;
  },
};
var toWin = 0;
var randomIndex = game.randomWord();
var randomWord = game.words[randomIndex];
var guesses = randomWord.length*2;
var guessLeft = "<p>You have "+guesses+" guesses left,dont waste them. Here are the ones you have guessed:  </p>";
document.querySelector("#guess").innerHTML = guessLeft;
function createSpaces() {
  var spaces = "";
  for (var i=0;i<randomWord.length; i++) {
    spaces += "<p class='spaces'>_</p>";
    document.querySelector("#word").innerHTML = spaces;
  }
}
document.onkeyup = function(event){
 	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
};
function updateSpaces() {
  for (var i=0; i<randomWord.length; i++){
   if(userGuess === randomWord[i]) {
     var fill = document.getElementsByClassName('spaces');
     fill[i+1].innerHTML=userGuess;
     toWin++;
   }
  }
}


function resetGame() {
  game.randomWord();
  randomIndex = game.randomWord();
  randomWord = game.words[randomIndex];
  toWin= 0;
  game.wrong = [];
  game.wrongGuesses();
  guesses = randomWord.length*2;
  guessLeft = "<p>You have "+guesses+" guesses left,dont waste them. Here are the ones you have guessed:  </p>";
  document.querySelector("#guess").innerHTML = guessLeft;
  createSpaces();
}


createSpaces();


game.printWins();


document.onkeyup = function(event) {
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    
    if(randomWord.indexOf(userGuess) !== -1 && game.wrong.indexOf(userGuess) ===-1){
			updateSpaces();
		}

    else {

			guesses--;
      guessLeft = "<p>You have "+guesses+" guesses left,dont waste them. Here are the ones you have guessed: </p>";
      document.querySelector("#guess").innerHTML = guessLeft;
			game.wrong.push(userGuess);
      game.wrongGuesses();
			}
      if( guesses === 0) {
        alert("More work for you.");
        resetGame();
      }
      if( toWin === randomWord.length) {
        game.wins++;
        game.printWins();
        alert("You got "+randomWord+",you might have a weekend");
        resetGame();
      }
};
