const computerChoice = getComputerChoice();

function getComputerChoice(){

let computerChoice = Math.floor(Math.random() * 3);

if (computerChoice === 0){
    return "rock";
}

else if (computerChoice === 1){
    return "paper";
}
else if (computerChoice === 2){
    return "scissors";
}
};

function getHumanChoice(){

   let humanChoice = prompt("Choisis : rock, paper ou scissors");
    
  if (!humanChoice) {
    alert("Tu n'as rien entré, réessaie !");
    return getHumanChoice(); // relance la question tant que c'est vide
  }

  humanChoice = humanChoice.toLowerCase();

  if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
    alert("Choix invalide, réessaie !");
    return getHumanChoice(); // relance la question si mauvais choix
  }

  return humanChoice;
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

   humanChoice = humanChoice.toLowerCase();
   computerChoice = computerChoice.toLowerCase();

if (humanChoice === computerChoice) {
    return "Égalité";  // <=== Retour immédiat si égalité
  }
    else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
   ) {
    humanScore++;
    return "Tu gagnes !";
   } else {
    computerScore++;
    return "Tu perds !";
   }
};

function playGame(playRound){


while (humanScore < 5 && computerScore < 5){

   let humanChoice = getHumanChoice();
   let computerChoice = getComputerChoice();
   let result = playRound(humanChoice, computerChoice)

console.log("Ordinateur a choisi :", computerChoice);
console.log("Humain a choisi :", humanChoice);
console.log(result);
console.log("Scores — Toi :", humanScore, "| Ordi :", computerScore);
}
if (humanScore === 5){
   return "Fin de partie, tu as gagné!"
}
else if ( computerScore === 5){
   return "Fin de partie, l'ordinateur a gagné!"
}
};

console.log(playGame(playRound));
