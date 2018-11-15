import readlineSync from 'readline-sync';

export default (gameset) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);

  console.log(gameset.objective);

  const maxRounds = 3;
  for (let i = 0; i < maxRounds; i += 1) {
    const { question, correctAnswer } = gameset.playRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
