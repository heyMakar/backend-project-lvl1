import readlineSync from 'readline-sync';

const gameCore = (textRules, func, correctAnswer) => {
  console.log(`Welcome to the Brain Games!\n${textRules}`);
  const userName = readlineSync.question('May i have your name?');
  console.log(`Hello, ${userName}!`);
  for (let askCount = 0; askCount < 3; askCount += 1) {
    const question = func();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    const checkAnswer = userAnswer === String(correctAnswer(question));
    const log = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer(question)}'.\nLet's try again, ${userName}!`;
    if (checkAnswer) {
      console.log('Correct!');
    } else if (userAnswer === '') return;
    else return console.log(log);
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default gameCore;
