#!/usr/bin/env node

import readlineSync from 'readline-sync';
import playGame from '../rules/even';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no"');

const name = readlineSync.question('May I have your name?');
console.log(`Hello, ${name}`);

const gameResult = playGame();
const endGameMessage = gameResult === 'won' ? `Congratulations, ${name}!` : `Let's try again, ${name}`;
console.log(endGameMessage);
