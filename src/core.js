import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const questionsQuantity = 3;

const gameCore = (gameRules, question) => {
  console.log(`Welcome to the Brain Games!\n${gameRules}\n`);
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let questions = 0; questions < questionsQuantity; questions += 1) {
    const pairQuestionResult = question();
    const questionForUser = car(pairQuestionResult);
    const correctAnswer = cdr(pairQuestionResult);
    console.log(`Question: ${questionForUser}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) console.log('Correct!');
    else {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`\nCongratulations, ${userName}!`);
};

export default gameCore;
