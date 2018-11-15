import game from '..';
import randomInt from '../utils';

const gcd = (a, b) => {
  if (b === 0) return Math.abs(a);
  const r = a % b;
  return gcd(b, r);
};

const minNumber = -100;
const maxNumber = 100;

const rules = {
  objective: 'Find the greatest common divisor of given numbers.',
  playRound() {
    const a = randomInt(minNumber, maxNumber);
    const b = randomInt(minNumber, maxNumber);

    const question = `${a} ${b}`;
    const correctAnswer = String(gcd(a, b));

    return { question, correctAnswer };
  },
};

export default () => game(rules);
