import readlineSync from 'readline-sync';

const gameCore = (textRules, questionFunction) => {
  console.log(`Welcome to the Brain Games!\n${textRules}`);
  const userName = readlineSync.question('May i have your name?');
  console.log(`Hello, ${userName}!`);
  for (let askCount = 0; askCount < 3; askCount += 1) {
    const question = questionFunction();
    const userAnswer = readlineSync.question(`Question: ${question()}\nYour answer: `);
    const checkAnswer = userAnswer === String(question('result'));
    const log = `'${userAnswer}' is wrong answer. Correct answer was '${question('result')}'.\nLet's try again, ${userName}!`;
    if (userAnswer === '') return '';
    if (checkAnswer) console.log('Correct!');
    if (!checkAnswer) return console.log(log);
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default gameCore;
