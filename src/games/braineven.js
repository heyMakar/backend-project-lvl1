export const textRule = 'Answer "yes" if the number is even, otherwise answer "no".';

export const randomRangeNumbers = () => {
  const min = 1;
  const max = 100;
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  const question = (arg) => `${arg}`;
  const isEven = (arg) => {
    if (arg % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  return (variants) => {
    if (variants === 'result') return isEven(number);
    return question(number);
  };
};
