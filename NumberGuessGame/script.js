alert("WELCOME");
function guessNumber() {
    var randomNum = Math.floor(Math.random() * 3);
    console.log(randomNum)

    var guess;
    guess = prompt("Please enter a number between 0 and 2");

    if (guess < randomNum) {
        window.alert("Your guess is too low!!");
    }
    else if (guess > randomNum) {
        window.alert("Your guesss is too high!!");
    }
    else if (guess == randomNum) {
        window.alert("You Guessed it right, you win!!!");
    }
    else {
        window.alert("Erorr!!!")
    }



}