function getComputerChoice () {
    const  options = ['rock', 'paper', 'scissors'];
    let  computersChoice = options[Math.floor(Math.random() * options.length)];
    return computersChoice.toLowerCase();
};

getComputerChoice();

function playRound(playerSelection, computerSelection) {
    const options = ['rock', 'paper', 'scissors'];
    if (playerSelection === computerSelection) {
        return "Draw!"
    }else if (playerSelection === 'paper' && computerSelection === 'scissors') { 
        return "You Lose! Scissors beats paper!";
    }else if (playerSelection === 'paper' && computerSelection === 'rock') { 
        return "You Win! Paper beats Rock!";
    }else if (playerSelection === 'rock' && computerSelection === 'scissors') { 
        return "You Win! Rock beats Scissors!";
    }else if (playerSelection === 'rock' && computerSelection === 'paper') { 
        return "You Lose! Paper beats Rock!";
    }else if (playerSelection === 'scissors' && computerSelection === 'paper') { 
        return "You Win! Scissors beats Paper!";
    }else if (playerSelection === 'scissors' && computerSelection === 'rock')  {  
        return "You Lose! Rock beats Scissors!";
    };

     if(playerSelection !== options) {
          return "It's not an option. Try again!"
      };
    
};

let playerSelection = "".toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, getComputerChoice()));

   function game() {
        let playerScore = 0;
        let computerScore = 0;
        const  options = ['rock', 'paper', 'scissors'];
            for (let i = 0; i < 5; i++) {
            let playerSelection = prompt("Paper, Rock or Scissors?").toLowerCase();
            const computersChoice = getComputerChoice();
            const score = playRound(playerSelection,computerSelection);
                if(score.includes("You Win")) {
                    playerScore++;
                }else(score.includes("You Lose"))
                    computerScore++;
             
                 if(playerScore === computerScore)  
                     "Tie game!";

             }

        console.log("User: " + playerScore);
        console.log("Computer: " + computerScore);
    }   

  console.log(game());

  