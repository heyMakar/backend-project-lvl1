import createQuestionAndResult from '../questionbuilder';
import gameCore from '../core';
import getRandomNumber from '../numgenerator';

const gameRule = 'Find the greatest common divisor of given numbers.';

const gcdResult = (x, y) => (x ? gcdResult(y % x, x) : y);

const getGameQuestionAndResult = () => {
  const randomDigit1 = getRandomNumber();
  const randomDigit2 = getRandomNumber();
  const questionWithTwoNumbersForGcd = `${randomDigit1} ${randomDigit2}`;
  const result = gcdResult(randomDigit1, randomDigit2);
  return createQuestionAndResult(questionWithTwoNumbersForGcd, result);
};

const gcdGame = () => gameCore(gameRule, getGameQuestionAndResult);

export default gcdGame;
