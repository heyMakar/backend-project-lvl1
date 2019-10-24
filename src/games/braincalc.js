import gameCore from '../core';

const textRule = 'What is the result of the expression?';

const getRandomOperator = () => {
  const random = Math.random();
  if (random < 0.33) {
    return '+';
  }
  if (random < 0.67) {
    return '-';
  }
  return '*';
};

const randomExpression = () => {
  const min = 1;
  const max = 100;
  const digit1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const digit2 = Math.floor(Math.random() * (max - min + 1)) + min;
  const operator = getRandomOperator();
  const question = (arg1, arg2, action) => `${arg1} ${action} ${arg2}`;
  const result = (arg1, arg2, action) => {
    if (action === '+') return arg1 + arg2;
    if (action === '-') return arg1 - arg2;
    return arg1 * arg2;
  };
  return (variants) => {
    if (variants === 'result') return result(digit1, digit2, operator);
    return question(digit1, digit2, operator);
  };
};

const calcGame = () => gameCore(textRule, randomExpression);

export default calcGame;
