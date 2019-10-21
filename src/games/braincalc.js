export const textRule = 'What is the result of the expression?';


const getOperator = () => {
  const random = Math.random();
  if (random < 0.33) {
    return '+';
  }
  if (random < 0.67) {
    return '-';
  }
  return '*';
};


export const random = () => {
  const min = 1;
  const max = 100;
  const digit1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const digit2 = Math.floor(Math.random() * (max - min + 1)) + min;
  const operator = getOperator();
  const expression = `${digit1} ${operator} ${digit2}`;
  return expression;
};

export const resultOfStringExpression = (string) => eval(string);
