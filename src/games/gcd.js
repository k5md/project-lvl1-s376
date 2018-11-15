import game from '..';
import randomInt from '../utils';

const gcd = (a, b) => {
  if (b === 0) return Math.abs(a);
  const r = a % b;
  return gcd(b, r);
};

const rules = {
  objective: 'Find the greatest common divisor of given numbers.',
  playRound() {
    const a = randomInt(-100, 100);
    const b = randomInt(-100, 100);

    const question = `${a} ${b}`;
    const correctAnswer = String(gcd(a, b));

    return { question, correctAnswer };
  },
};

export default () => game(rules);
