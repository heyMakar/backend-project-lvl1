import createQuestionAndResult from '../questionbuilder';
import gameCore from '../core';
import getRandomNumber from '../numgenerator';

const gameRule = 'What number is missing in the progression?';

const getGameQuestionAndResult = () => {
  const progressionIntervalInQuestion = getRandomNumber();
  const progressionLengthInQuestion = 10;
  const hiddenIndexPlaceGenerator = Math.floor(Math.random() * 10) + 1;
  const getQuestionWithHiddenIndex = () => {
    let result = '';
    let progressionStepsInQuestion = 0;
    for (let i = 1; i <= progressionLengthInQuestion; i += 1) {
      progressionStepsInQuestion += progressionIntervalInQuestion;
      const hiddenIndexPlaceInQuestion = i === hiddenIndexPlaceGenerator ? '..' : `${progressionStepsInQuestion}`;
      result = `${result} ${hiddenIndexPlaceInQuestion}`;
    }
    return result;
  };
  const result = hiddenIndexPlaceGenerator * progressionIntervalInQuestion;
  return createQuestionAndResult(getQuestionWithHiddenIndex(), result);
};

const progressionGame = () => gameCore(gameRule, getGameQuestionAndResult);

export default progressionGame;
