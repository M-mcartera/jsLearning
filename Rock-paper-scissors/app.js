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
    return;
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

const getWinner = function(pChoice = DEFAULT_USER_CHOICE, cChoice){
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
  let winner;
  if(playerSelection){
    winner = getWinner(playerSelection, computerSelection);
  }
  else{
    winner = getWinner(undefined,computerSelection);
  }
  let message = `player: ${playerSelection ? playerSelection : DEFAULT_USER_CHOICE}, computer ${computerSelection}, result `;
  if(winner === DRAW){
    message = message + `${DRAW}`;
  }
  else if(winner === PLAYER_WIN){
    message = message + `${PLAYER_WIN}`;
  }
  else{
    message = message + `${COMPUTER_WIN}`;
  }
  alert(message);
  gameIsRunning = false;
});
