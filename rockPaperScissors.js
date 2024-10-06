console.log(hi);

console.log("hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors"  || userInput === "bomb") {
    return userInput;
  } else {
    console.log('You entered an incorrect value!');
    return 'error';
  } 
};


const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  if(randomNum === 0) {
    return "rock";
  } else if(randomNum === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'You\'re tied';
  }
  if(userChoice === 'bomb')
  {
    return 'You used an atomic bomb and destroy the computer, congratulations! But you\'re a f**king cheater';
  }
  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'Computer won';
    } else {
      return 'You won';
    }
  }
  if(userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'Computer won';
    } else {
      return 'You won';
    }
  }
  if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'Computer won';
    } else {
      return 'You won';
    }
  }
};

const playGame = usersEntry =>{
const userChoice = getUserChoice(usersEntry);
const computerChoice = getComputerChoice();

if(userChoice !== 'error')
{
  console.log(`You made ${userChoice} and computer made ${computerChoice}. ${determineWinner(userChoice, computerChoice)}!`);
}

}

playGame('bomb');



