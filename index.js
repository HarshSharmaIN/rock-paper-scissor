const playerName = prompt("Enter your name:");

document.getElementById("user-label").innerHTML = playerName;

const choices = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const moves = ['rock', 'paper', 'scissors'];

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');

choices.forEach(choice => {
  choice.addEventListener('click', function() {
    const playerMove = this.id;
    playGame(playerMove);
  });
});

function playGame(playerMove) {
  const computerMove = moves[Math.floor(Math.random() * 3)];
  console.log(`Player: ${playerMove} Computer: ${computerMove}`);
  if (playerMove === computerMove) {
    result.innerHTML = "It's a tie!";
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    result.innerHTML = `${playerMove} beats ${computerMove}! You win!`;
    userScore++;
    userScore_span.textContent = userScore;
  } else {
    result.innerHTML = `${computerMove} beats ${playerMove}! You lose!`;
    computerScore++;
    computerScore_span.textContent = computerScore;
  }
  choices.forEach(choice => {
    choice.style.cursor = "not-allowed";
  });
  setTimeout(() => {
    result.innerHTML = "Computer has choosen its move!";
    choices.forEach(choice => {
      choice.style.cursor = "pointer";
    });
  }, 2000);
}
