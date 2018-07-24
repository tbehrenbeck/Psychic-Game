var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;

document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(userguess);


var computerGuess = options[Math.floor(Math.random()* options.length)];

    console.log(computerGuess);

    if (userguess === computerGuess) {
        wins++
        alert("Wins: " + wins)
    } else {
        losses++
        alert("Losses: " + losses);
    }


}