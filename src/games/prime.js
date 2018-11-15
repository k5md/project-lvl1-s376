import game from '..';
import randomInt from '../utils';

const generateSieve = (n) => {
  const upperBound = n / 2;

  const allNumbers = Array.from({ length: n }, (cur, idx) => idx + 2);
  const sieve = new Set(allNumbers);
  const sieveIterator = sieve[Symbol.iterator]();

  let primeCandidate = sieveIterator.next().value;
  while (primeCandidate) {
    for (let multiplier = 2; multiplier < upperBound; multiplier += 1) {
      const multiple = primeCandidate * multiplier;
      sieve.delete(multiple);
    }
    primeCandidate = sieveIterator.next().value;
  }

  return sieve;
};

const sieveMaxNumber = 5000;

const rules = {
  objective: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  playRound() {
    const primes = generateSieve(sieveMaxNumber);
    const maxNumber = primes.size * 2;

    const question = randomInt(1, maxNumber);
    const correctAnswer = primes.has(question) ? 'yes' : 'no';

    return { question, correctAnswer };
  },
};

export default () => game(rules);
