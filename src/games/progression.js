import { cons } from '@hexlet/pairs';
import gameCore from '../core';
import getRandomNumber from '../numgenerator';

const gameRule = 'What number is missing in the progression?';

const progressionLength = 10;

const progressionGenerator = (start, length) => {
  const progression = [start];
  const step = getRandomNumber();
  for (let i = 1; i < length; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  return progression;
};

const getGameQuestionAndAnswer = () => {
  const start = getRandomNumber();
  const hiddenPlaceIndex = getRandomNumber(0, progressionLength - 1);
  const progression = progressionGenerator(start, progressionLength);
  const answer = progression[hiddenPlaceIndex];
  progression[hiddenPlaceIndex] = '...';
  const question = progression.join(' ');
  return cons(question, String(answer));
};

export default () => gameCore(gameRule, getGameQuestionAndAnswer);
