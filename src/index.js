import readlineSync from 'readline-sync';

export const name = () => {
  const userName = readlineSync.question('May i have your name?');
  return console.log(`Hello, ${userName}!`);
};

export const welcome = (gameRule) => console.log(`Welcome to the Brain Games!\n${gameRule}`);

const randomNumbers = () => {
  const min = 1;
  const max = 20;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


export const brainEven = () => {
  const userName = readlineSync.question('May i have your name?');
  console.log(`Hello, ${userName}!`);

  for (let askCount = 0; askCount < 3; askCount += 1) {
    const random = randomNumbers();
    const isEven = random % 2 === 0;
    const answer = readlineSync.question(`Question: ${random}\n`);
    const correctAnswer = isEven ? 'yes' : 'no';
    const log = `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}\nLet's try again, ${userName}!`;
    if (answer === correctAnswer) {
      randomNumbers();
      console.log('Correct!');
    } else if (answer === '') return;
    else return console.log(log);
  }
  return console.log(`Congratulations, ${userName}!`);
};
