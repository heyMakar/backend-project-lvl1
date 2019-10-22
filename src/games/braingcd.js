export const textRule = 'Find the greatest common divisor of given numbers.';


export const randomRangeWithGcd = () => {
  const min = 2;
  const max = 100;
  const digit1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const digit2 = Math.floor(Math.random() * (max - min + 1)) + min;
  const question = (x, y) => `${x} ${y}`;
  const gcdResult = (x, y) => (x ? gcdResult(y % x, x) : y);
  return (variants) => {
    if (variants === 'result') return gcdResult(digit1, digit2);
    return question(digit1, digit2);
  };
};
