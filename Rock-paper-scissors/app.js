const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const DRAW = 'DRAW';
const PLAYER_WIN = 'PLAYER WINS';
const COMPUTER_WIN = 'COMPUTER WINS';

let gameIsRunning = false;

const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function(){
  const randomValue = Math.floor((Math.random()*10)+1);
  if(randomValue === 1){
    return ROCK;
  }
  else if(randomValue === 2){
    return PAPER;
  }
  else{
    return SCISSORS;
  }
}

const getWinner = function(pChoice, cChoice){
  if(pChoice === cChoice){
    return DRAW;
  }
  else if((pChoice === PAPER && cChoice === ROCK) || (pChoice === ROCK && cChoice === SCISSORS) || (pChoice === SCISSORS && cChoice === PAPER)){
    return PLAYER_WIN;
  }
  else{
    return COMPUTER_WIN;
  }
}

startGameBtn.addEventListener('click', function() {
  if(gameIsRunning){
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = getWinner(playerSelection, computerSelection);
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(winner);
});
