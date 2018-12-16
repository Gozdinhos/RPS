let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function win(userChoice, computerChoice) {
    userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  console.log("user choice " + userChoice + " computer choice " + computerChoice);
  console.log("user score " + userScore + " computer score " + computerScore);
  result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} You win!`;


}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  console.log("user choice " + userChoice + " computer choice " + computerChoice);
  console.log("user score " + userScore + " computer score " + computerScore);
  result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} You lost!`;
}

function draw(userChoice, computerChoice) {
  console.log("user choice " + userChoice + " computer choice " + computerChoice);
  console.log("user score " + userScore + " computer score " + computerScore);
  result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)} It's a draw!`;
}

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {

  if(letter==="r"){
  console.log("returning rock for " + letter)
    return "Rock";}
  else if(letter==="p") {
console.log("returning paper for " + letter)
    return "Paper";}
  else {
console.log("returning scissors for " + letter)
    return "Scissors";}

}
function game(userChoice){
  const computerChoice = getComputerChoice();
  console.log("computer choose " + computerChoice);
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;

}

}
function main() {
  rock_div.addEventListener('click',function() {
console.log("user choose r")
  game("r");
  })

  paper_div.addEventListener('click',function() {
console.log("user choose p")
  game("p");
  })

  scissors_div.addEventListener('click',function() {
console.log("user choose s")
  game("s");
  })
}


main();
