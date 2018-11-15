import game from '..';
import randomInt from '../utils';

const isPrime = (n) => {
  if (n < 2) return false;

  const upperBound = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= upperBound; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const minNumber = 1;
const maxNumber = 4000;

const rules = {
  objective: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  playRound() {
    const question = randomInt(minNumber, maxNumber);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return { question, correctAnswer };
  },
};

export default () => game(rules);
