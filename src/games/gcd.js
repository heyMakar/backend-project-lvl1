import questionAndResult from '../question';
import gameCore from '../core';
import generator from '../numgenerator';

const gameRule = 'Find the greatest common divisor of given numbers.';

const gcdResult = (x, y) => (x ? gcdResult(y % x, x) : y);

const gameQuestionAndResult = () => {
  const randomDigit1 = generator();
  const randomDigit2 = generator();
  const question = `${randomDigit1} ${randomDigit2}`;
  const result = gcdResult(randomDigit1, randomDigit2);
  return questionAndResult(question, result);
};

const gcdGame = () => gameCore(gameRule, gameQuestionAndResult);

export default gcdGame;
