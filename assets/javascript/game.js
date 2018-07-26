
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var computersLetter = options[Math.floor(Math.random() * options.length)];
console.log(computersLetter);


document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	

	
	if (guessesSoFar.indexOf(userGuess) < 0 && options.indexOf(userGuess) >= 0) {
		guessesSoFar.push(userGuess);
		guessesLeft--;
	} 
	
	if (computersLetter == userGuess) {
		wins++;
		console.log("You won!");
		guessesLeft = 10;
		guessesSoFar = [];
		computersLetter = options[Math.floor(Math.random() * options.length)];
		console.log(computersLetter);
	} else if (guessesLeft == 0) {
		losses++;
		console.log("You lost!");
		guessesLeft = 10;
		guessesSoFar = [];
		computersLetter = options[Math.floor(Math.random() * options.length)];
		console.log(computersLetter);		
	}

	var html = "<p><h1>Guessing Game</h1></p>" + "<p><h4>Guess what letter I am thinking of...</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
	document.querySelector("#game").innerHTML = html;

}