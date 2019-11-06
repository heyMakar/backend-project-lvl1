import { cons } from '@hexlet/pairs';
import gameCore from '../core';
import getRandomNumber from '../numgenerator';

const gameRule = 'What number is missing in the progression?';

const progressionLength = 10;


const getGameQuestionAndResult = () => {
  const start = getRandomNumber();
  const step = getRandomNumber();
  const hiddenPlaceIndex = getRandomNumber(0, progressionLength - 1);
  const getQuestion = () => {
    let result = '';
    for (let i = 0; i < progressionLength; i += 1) {
      result = i === hiddenPlaceIndex ? `${result} ...` : `${result} ${start + step * i}`;
    }
    return result.trim();
  };
  const result = hiddenPlaceIndex * step + start;
  const question = getQuestion();
  return cons(question, String(result));
};

export default () => gameCore(gameRule, getGameQuestionAndResult);
