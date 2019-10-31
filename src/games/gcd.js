import { cons } from '@hexlet/pairs';
import gameCore from '../core';
import getRandomNumber from '../numgenerator';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGcdResult = (x, y) => (x ? getGcdResult(y % x, x) : y);

const getGameQuestionAndResult = () => {
  const randomDigit1 = getRandomNumber();
  const randomDigit2 = getRandomNumber();
  const question = `${randomDigit1} ${randomDigit2}`;
  const answer = getGcdResult(randomDigit1, randomDigit2);
  return cons(question, String(answer));
};

const gcdGame = () => gameCore(gameRule, getGameQuestionAndResult);

export default gcdGame;
