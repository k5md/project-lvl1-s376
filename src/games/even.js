const randomInt = (min, max) => Math.floor(min + Math.random() * (max - min + 1));
const isEven = number => number % 2 === 0;

export default {
  maxRounds: 3,
  objective: 'Answer "yes" if the number is even, otherwise answer "no"',
  playRound() {
    const question = randomInt(1, 1000);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return { question, correctAnswer };
  },
};
