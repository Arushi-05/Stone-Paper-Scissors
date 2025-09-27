
let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let computerChoice;
    const choice= Math.floor(Math.random() * (3)) + 1;
    switch (choice){
        case 1:
            computerChoice="Stone";
            return computerChoice;
        case 2:
            computerChoice="Paper";
            return computerChoice;
        case 3:
            computerChoice="Scissors";
            return computerChoice;
    }
    
}


function getHumanChoice(){
    const humanChoice=prompt("Enter your choice.");
    return humanChoice

}


function playRound(humanChoice, computerChoice){
    const human= String(humanChoice).trim().toLowerCase();
    const machine= String(computerChoice).trim().toLowerCase();
    let winner="";
    if (human === machine){
        winner='draw'
    }
    else if (human=='stone' && machine=='scissors' || human=='paper' && machine=='stone' || human=='scissors' && machine=='paper'){

        winner='human'
    }
    else {
      
        winner="machine"
    }
    console.log("your pick: "+human)
    console.log("computer pick: "+machine)
    console.log("the winner is: " +winner)
    
}

playRound(getComputerChoice(),getHumanChoice())


