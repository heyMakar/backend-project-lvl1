export const textRule = 'What number is missing in the progression?';

export const randomProgression = () => {
  const min = 1;
  const max = 90;
  const step = Math.floor(Math.random() * (max - min + 1)) + min;
  const hiddenIndex = Math.floor(Math.random() * 10) + 1;
  const question = () => {
    let result = '';
    let stepProgress = 0;
    for (let i = 1; i <= 10; i += 1) {
      stepProgress += step;
      const isIndex = i === hiddenIndex ? '..' : `${stepProgress}`;
      result = `${result} ${isIndex}`;
    }
    return result;
  };
  const result = () => hiddenIndex * step;
  return (variants) => {
    if (variants === 'result') return result();
    return question();
  };
};
