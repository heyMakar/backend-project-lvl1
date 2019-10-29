import { cons } from '@hexlet/pairs';
import gameCore from '../core';
import getRandomNumber from '../numgenerator';

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

const getGameQuestionAndResult = () => {
  const randomNumber = getRandomNumber();
  const result = isPrime(randomNumber) ? 'yes' : 'no';
  return cons(randomNumber, result);
};

const primeGame = () => gameCore(gameRule, getGameQuestionAndResult);

export default primeGame;
