//randomly select word
var words =["html","css","javascript"];
var wordSelected = words[Math.floor(Math.random() * words.length)];
console.log(wordSelected);

//display word in _'s be able to change number of _'s use events-examples for help to diplay stuff in html through javascript

//Use key events to listen for the letters that your players will type.
//test if user guess is correct
//replace the correct _ with that letter
//if wrong list wrong guesses
//add scoring if player got all the letter right then put +1 on wins, if  reached guess limit then put a +1 for losses and restart game.