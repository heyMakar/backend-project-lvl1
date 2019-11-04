import { cons } from '@hexlet/pairs';
import gameCore from '../core';
import getRandomNumber from '../numgenerator';

const gameRule = 'What number is missing in the progression?';

const progressionLength = 10;
const progressionStart = 0;
const start = 1;
const end = 10;

const getGameQuestionAndResult = () => {
  const progressionInterval = getRandomNumber();
  const hiddenPlaceIndex = getRandomNumber(start, end);
  const getQuestionWithHiddenIndex = () => {
    let result = '';
    for (let i = 1; i <= progressionLength; i += 1) {
      const step = progressionStart + progressionInterval * i;
      const hiddenIndex = i === hiddenPlaceIndex;
      result = hiddenIndex ? `${result}... ` : `${result}${step} `;
    }
    return result;
  };
  const answer = hiddenPlaceIndex * progressionInterval + progressionStart;
  const question = getQuestionWithHiddenIndex();
  return cons(question, String(answer));
};

export default () => gameCore(gameRule, getGameQuestionAndResult);
