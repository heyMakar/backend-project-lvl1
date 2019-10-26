import questionAndResult from '../question';
import gameCore from '../core';
import generator from '../numgenerator';

const gameRule = 'What number is missing in the progression?';

const gameQuestionAndResult = () => {
  const questionInterval = generator();
  const hiddenIndexPlaceGenerator = Math.floor(Math.random() * 10) + 1;
  const question = () => {
    let result = '';
    let intervalProgress = 0;
    for (let i = 1; i <= 10; i += 1) {
      intervalProgress += questionInterval;
      const isHiddenIndex = i === hiddenIndexPlaceGenerator ? '..' : `${intervalProgress}`;
      result = `${result} ${isHiddenIndex}`;
    }
    return result;
  };
  const result = hiddenIndexPlaceGenerator * questionInterval;
  return questionAndResult(question(), result);
};

const progressionGame = () => gameCore(gameRule, gameQuestionAndResult);

export default progressionGame;
