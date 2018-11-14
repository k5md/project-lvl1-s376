const randomInt = (min, max) => Math.floor(min + Math.random() * (max - min + 1));
const operations = {
  '+': (lho, rho) => lho + rho,
  '-': (lho, rho) => lho - rho,
  '*': (lho, rho) => lho * rho,
};
const operators = Object.keys(operations);

export default {
  maxRounds: 3,
  objective: 'What is the result of the expression?',
  playRound() {
    const lho = randomInt(1, 100);
    const rho = randomInt(1, 100);
    const operator = operators[randomInt(0, operators.length - 1)];

    const question = `${lho} ${operator} ${rho}`;
    const correctAnswer = String(operations[operator](lho, rho));

    return { question, correctAnswer };
  },
};
