function computerPlay() {
    const pick =["rock","paper","scissors"];
    return pick[Math.floor(Math.random()* pick.length)];
};
function playerChoice() { 
    let input = prompt("Please select either rock, paper or scissors");
    input = input.toLowerCase();
    if (input === "rock" || input === "paper" || input === "scissors") {
return input;
}
else {
    console.log("Invalid selection, Please pick either rock, paper or scissors.");
    }
}
function round(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return`It's a tie`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      return "You win! rock beats scissors";
   } else if (playerSelection === "paper" && computerSelection === "rock") {
      return "You win! paper beats rock";
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
      return "You win! scissors beats paper";
   } else {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
   }
}
function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++){
        console.log(`Player ${scorePlayer} VS Computer ${scoreComputer}`);
        const playerSelection = playerChoice();
        const computerSelection = computerPlay();
        console.log(computerSelection);
        console.log(round(playerSelection,computerSelection));
        if((round(playerSelection,computerSelection) === ("You win! scissors beats paper")) || (round(playerSelection,computerSelection) === ("You win! paper beats rock")) || (round(playerSelection,computerSelection) === ("You win! rock beats scissors" )))
        { scorePlayer++;
    }
    if((round(playerSelection,computerSelection) === ("You lose! scissors beats paper")) || (round(playerSelection,computerSelection) === ("You lose! paper beats rock")) || (round(playerSelection,computerSelection) === ("You lose! rock beats scissors" )))
        { scoreComputer++;
    }
    console.log("Game Over") 
if(scorePlayer > scoreComputer){
    console.log("You win! Dont't be too happy though, its just a computer you beat.");
} 
else if (scorePlayer < scoreComputer) {
    console.log("lol imagine losing to a computer that you made");
} else if(scoreComputer === scoreComputer) {
    console.log("Tie. Boring.");
}
}
}
game()