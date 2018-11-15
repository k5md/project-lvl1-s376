import game from '..';
import randomInt from '../utils';

const operations = {
  '+': (left, right) => left + right,
  '-': (left, right) => left - right,
  '*': (left, right) => left * right,
};

const minNumber = 1;
const maxNumber = 100;

const rules = {
  objective: 'What is the result of the expression?',
  playRound() {
    const left = randomInt(minNumber, maxNumber);
    const right = randomInt(minNumber, maxNumber);

    const operators = Object.keys(operations);
    const operator = operators[randomInt(0, operators.length - 1)];

    const question = `${left} ${operator} ${right}`;
    const correctAnswer = String(operations[operator](left, right));

    return { question, correctAnswer };
  },
};

export default () => game(rules);
