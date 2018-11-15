import game from '..';
import randomInt from '../utils';

const generateArithmeticProgression = (start, step, length) => (
  Array.from({ length }, (cur, idx) => start + step * idx)
);

const minNumber = -100;
const maxNumber = 100;
const progressionLength = 10;

const rules = {
  objective: 'What number is missing in the progression?',
  playRound() {
    const start = randomInt(minNumber, maxNumber);
    const step = randomInt(minNumber, maxNumber);

    const progression = generateArithmeticProgression(start, step, progressionLength);
    const hiddenNumberIdx = randomInt(0, progressionLength);

    const correctAnswer = String(progression[hiddenNumberIdx]);
    const question = progression.map((cur, idx) => (idx !== hiddenNumberIdx ? cur : '..')).join(' ');

    return { question, correctAnswer };
  },
};

export default () => game(rules);
