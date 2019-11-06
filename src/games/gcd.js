import { cons } from '@hexlet/pairs';
import gameCore from '../core';
import getRandomNumber from '../numgenerator';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => (x ? getGcd(y % x, x) : y);

const getGameQuestionAndResult = () => {
  const randomDigit1 = getRandomNumber();
  const randomDigit2 = getRandomNumber();
  const question = `${randomDigit1} ${randomDigit2}`;
  const result = getGcd(randomDigit1, randomDigit2);
  return cons(question, String(result));
};

export default () => gameCore(gameRule, getGameQuestionAndResult);
