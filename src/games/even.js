import game from '..';
import randomInt from '../utils';

const isEven = number => number % 2 === 0;

const minNumber = 1;
const maxNumber = 1000;

const rules = {
  objective: 'Answer "yes" if the number is even, otherwise answer "no"',
  playRound() {
    const question = randomInt(minNumber, maxNumber);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return { question, correctAnswer };
  },
};

export default () => game(rules);
