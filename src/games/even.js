import { cons } from '@hexlet/pairs';
import gameCore from '../core';
import getRandomNumber from '../numgenerator';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameQuestionAndResult = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => gameCore(gameRule, getGameQuestionAndResult);
