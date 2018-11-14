import readlineSync from 'readline-sync';

const randomInt = (min, max) => Math.floor(min + Math.random() * (max - min + 1));
const isEven = number => number % 2 === 0;

const maxRounds = 3;

const playGame = (currentRound = 0) => {
  if (currentRound === maxRounds) {
    return 'won';
  }

  const question = randomInt(1, 1000);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    return 'lost';
  }

  console.log('Correct!');

  return playGame(currentRound + 1);
};

export default playGame;
