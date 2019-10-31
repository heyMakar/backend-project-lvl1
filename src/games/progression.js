import { cons } from '@hexlet/pairs';
import gameCore from '../core';
import getRandomNumber from '../numgenerator';

const gameRule = 'What number is missing in the progression?';

const progressionLength = 10;
const progressionStart = 0;

const getGameQuestionAndResult = () => {
  const progressionInterval = getRandomNumber();
  const hiddenIndexPlace = getRandomNumber(1, 10);
  const getQuestionWithHiddenIndex = () => {
    let result = '';
    for (let i = 1; i <= progressionLength; i += 1) {
      const step = progressionStart + progressionInterval * i;
      const isHiddenIndex = i === hiddenIndexPlace;
      result = isHiddenIndex ? `${result} ...` : `${result} ${step}`;
    }
    return result;
  };
  const answer = hiddenIndexPlace * progressionInterval;
  return cons(getQuestionWithHiddenIndex(), String(answer));
};

const progressionGame = () => gameCore(gameRule, getGameQuestionAndResult);

export default progressionGame;
