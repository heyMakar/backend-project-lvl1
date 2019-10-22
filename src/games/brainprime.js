export const textRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const randomNumber = () => {
  const min = 1;
  const max = 100;
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  const question = (arg) => `${arg}`;
  const isPrime = (num) => {
    let i = 2;
    if (num < 2) return 'no';
    while (i <= num / 2) {
      if (num % i === 0) {
        return 'no';
      }
      i += 1;
    }
    return 'yes';
  };

  return (variants) => {
    if (variants === 'result') return isPrime(random);
    return question(random);
  };
};
