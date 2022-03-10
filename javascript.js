let selection = ['rock', 'paper','scissors'];
function computerPlay(){
    return selection[Math.floor(Math.random()*selection.length)];
}
// console.log(computerPlay());

let computerSelection;
let playerSelection;
let bool = false;
let scoreP = 0;
let scoreC = 0;
// console.log(playerSelection);

for(let  i = 0; i<5; i++){
    bool = false;
    computerSelection = computerPlay();
    // playerSelection = prompt("What do you choose: Rock, Paper or Scissors");
    // playerSelection = playerSelection.toLowerCase();
    do{
        playerSelection = prompt("What do you choose: Rock, Paper or Scissors");
        playerSelection = playerSelection.toLocaleLowerCase();
        if(playerSelection === "rock" || playerSelection=== "paper" || playerSelection === "scissors"){
            bool = true;
        }
    }while(bool === false);
    console.log(play(computerSelection, playerSelection),"Computer is:", scoreC, "Player is:", scoreP);
}
function play(computerRandom, playerSelection){
    if(playerSelection === computerRandom){
        return "its a tie";
    }
    switch(playerSelection){
        case "rock": if(computerRandom == "paper"){
            scoreC++;
            return "You loose computer selected paper and you rock";
        }
        scoreP++;
        return "You win, because computer selected scsissors and you rock";
        break;
        case "paper":if(computerRandom == "scissors"){
            scoreC++;
            return "You loose, because computer selected scsissors and you paper";
        }
        scoreP++;
        return "You win, because computer selected  rock and you paper";
        break;
        case "scissors": if(computerRandom == "rock"){
            scoreC++;
            return "You loose, because computer selected rock and you scissors";
        }
        scoreP++;
        return "You win, because computer selected paper and you scissors";
    }
}
