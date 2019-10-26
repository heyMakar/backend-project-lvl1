import questionAndResult from '../question';
import gameCore from '../core';
import generator from '../numgenerator';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let i = 2;
  if (number < 2) return false;
  while (i <= number / 2) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const gameQuestionAndResult = () => {
  const question = generator();
  const result = isPrime(question) ? 'yes' : 'no';
  return questionAndResult(question, result);
};

const primeGame = () => gameCore(gameRule, gameQuestionAndResult);

export default primeGame;
