function generateRandomNumber(min,max) {
    return Math.floor((Math.random() * (100))+1);
}

function getPlayerGuess(){
    while(true){
        let guess = prompt("Enter a number between 1 and 100");
        if(guess === null){
            return null;
        }
        let pGuess = parseInt(guess);
        if (!isNaN(guess) && guess >=1 && guess<=100){
        return pGuess;
    }
    console.log("Please enter a valid number");
    }
}

function checkGuess(pGuess,answer){
    if (pGuess < answer) {
        console.log("Too low, try again!");
    }
    else if ( pGuess > answer) {
        console.log("Too high, try again!");
    }
    else {
        console.log("You guessed correctly! You must be cheating.");
    }
}

function game() {
    const randNum = generateRandomNumber();
    const maxAttempts = 10;
    let attempts = 0;
    
    console.log("Please enter a number between 1 and 100");

    while(attempts < maxAttempts) {
        const pGuess = getPlayerGuess();

        if (pGuess === null) return;

        attempts ++;

        const res = checkGuess(pGuess, randNum);
        console.log(`Attempt ${attempts}: ${pGuess}`);
        if (res === "You guessed correctly! You must be cheating." ) {
            console.log(`You answered correctly in ${attempts} attempts!`);
            }
    }
    console.log(`You have no more attempts left. The number was ${randNum}.`);
}









