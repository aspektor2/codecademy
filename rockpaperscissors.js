//testing functions

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
    return userInput;
  }
  else {
    console.log('error');
  }
}

const getComputerChoice = () =>{
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'sissors';
      break;
    case 2:
      return 'paper';
      break;    
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'tie game';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'computer wins';
    } else {
      return 'user wins';
  }
}
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'computer wins';
    } else {
      return 'user wins';
  }
}
    if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'computer wins';
    } else {
      return 'user wins';
  }
}
}

/* tsting if it works:
console.log(determineWinner('scissors','rock'));
*/

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`the user picked ${userChoice}`);
  console.log(`the computer picked ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();


