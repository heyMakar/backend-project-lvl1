export const textRule = 'Answer "yes" if the number is even, otherwise answer "no".';

export const random = () => {
  const min = 1;
  const max = 1000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const isEven = (arg) => {
  if (arg % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
