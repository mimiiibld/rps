const replayBtn = document.getElementById("replay");

const computerChoice = getComputerChoice();

function getComputerChoice(){

let computerChoice = Math.floor(Math.random() * 3);

if (computerChoice === 0){
    return "pierre";
}

else if (computerChoice === 1){
    return "feuille";
}
else if (computerChoice === 2){
    return "ciseaux";
}
};

function getHumanChoice(){

   let humanChoice = prompt("Choisis : pierre, feuille ou ciseaux");
    
  if (!humanChoice) {
    alert("Tu n'as rien entré, réessaie !");
    return getHumanChoice(); // relance la question tant que c'est vide
  }

  humanChoice = humanChoice.toLowerCase();

  if (humanChoice !== "pierre" && humanChoice !== "feuille" && humanChoice !== "ciseaux") {
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
    (humanChoice === "pierre" && computerChoice === "ciseaux") ||
    (humanChoice === "feuille" && computerChoice === "pierre") ||
    (humanChoice === "ciseaux" && computerChoice === "feuille")
   ) {
    humanScore++;
    return "Tu gagnes ! " + "l'ordinateur a retourné : " + computerChoice;
   } else {
    computerScore++;
    return "Tu perds ! " + "l'ordinateur a retourné : " + computerChoice;
   }
};

const buttons = document.querySelectorAll("button"); // 1
const resultdiv = document.getElementById("result");
const scoresdiv = document.getElementById("scores");
let gameOver = false;


buttons.forEach(button => { // 2
  button.addEventListener("click", () => { // 3
   if (gameOver) return; 
    const choice = button.textContent.toLowerCase(); // 4
    const result = playRound(choice, getComputerChoice());
    resultdiv.textContent = result;
    scoresdiv.textContent = `Toi: ${humanScore} - Ordi: ${computerScore}`;
    if (humanScore === 5) {
  resultdiv.textContent = "Fin de partie, tu as gagné !";
  gameOver = true; replayBtn.style.display = "inline-block"; // 👈
} else if (computerScore === 5) {
  resultdiv.textContent = "Fin de partie, l'ordinateur a gagné !";
  gameOver = true;
  replayBtn.style.display = "inline-block"; // 👈
}

  });

});

replayBtn.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  gameOver = false;
  resultdiv.textContent = "";
  scoresdiv.textContent = "";
  replayBtn.style.display = "none";
});


/*
function playGame(playRound){

   let humanChoice = getHumanChoice();
   let computerChoice = getComputerChoice();
   let result = playRound(humanChoice, computerChoice);

console.log("Ordinateur a choisi :", computerChoice);
console.log("Humain a choisi :", humanChoice);
console.log(result);
console.log("Scores — Toi :", humanScore, "| Ordi :", computerScore);

if (humanScore === 5){
   return "Fin de partie, tu as gagné!"
}
else if ( computerScore === 5){
   return "Fin de partie, l'ordinateur a gagné!"
}
};

console.log(playGame(playRound));*/
