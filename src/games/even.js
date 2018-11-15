import game from '..';
import randomInt from '../utils';

const isEven = number => number % 2 === 0;

const rules = {
  objective: 'Answer "yes" if the number is even, otherwise answer "no"',
  playRound() {
    const question = randomInt(1, 1000);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return { question, correctAnswer };
  },
};

export default () => game(rules);
