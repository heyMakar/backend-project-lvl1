import { cons } from '@hexlet/pairs';
import gameCore from '../core';
import getRandomNumber from '../numgenerator';

const gameRule = 'What is the result of the expression?';
const operators = '+-*';

const getRandomOperator = (operatorsString) => {
  const index = getRandomNumber(0, 2);
  return operatorsString[index];
};

const getResultOfExpression = (arg1, arg2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = arg1 + arg2;
      break;
    case '-':
      result = arg1 - arg2;
      break;
    case '*':
      result = arg1 * arg2;
      break;
    default: return false;
  }
  return result;
};


const getGameQuestionAndResult = () => {
  const randomDigit1 = getRandomNumber();
  const randomDigit2 = getRandomNumber();
  const randomOperator = getRandomOperator(operators);
  const question = `${randomDigit1} ${randomOperator} ${randomDigit2}`;
  const answer = getResultOfExpression(randomDigit1, randomDigit2, randomOperator);
  return cons(question, String(answer));
};

export default () => gameCore(gameRule, getGameQuestionAndResult);
