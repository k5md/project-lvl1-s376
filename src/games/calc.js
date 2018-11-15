import game from '..';
import randomInt from '../utils';

const operations = {
  '+': (left, right) => left + right,
  '-': (left, right) => left - right,
  '*': (left, right) => left * right,
};

const rules = {
  objective: 'What is the result of the expression?',
  playRound() {
    const left = randomInt(1, 100);
    const right = randomInt(1, 100);

    const operators = Object.keys(operations);
    const operator = operators[randomInt(0, operators.length - 1)];

    const question = `${left} ${operator} ${right}`;
    const correctAnswer = String(operations[operator](left, right));

    return { question, correctAnswer };
  },
};

export default () => game(rules);
