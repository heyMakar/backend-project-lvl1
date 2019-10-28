import questionAndResult from '../question';
import gameCore from '../core';
import generator from '../numgenerator';

const gameRule = 'What is the result of the expression?';
const operators = '+-*';

const getRandomOperator = (ops) => {
  const index = Math.floor(Math.random() * ops.length);
  return ops[index];
};

const resultOfExpression = (arg1, arg2, operator) => {
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


const gameQuestionAndResult = () => {
  const randomDigit1 = generator();
  const randomDigit2 = generator();
  const operator = getRandomOperator(operators);
  const question = `${randomDigit1} ${operator} ${randomDigit2}`;
  const result = resultOfExpression(randomDigit1, randomDigit2, operator);
  return questionAndResult(question, result);
};

const calcGame = () => gameCore(gameRule, gameQuestionAndResult);

export default calcGame;
