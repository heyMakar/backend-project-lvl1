#!/usr/bin/node
import gameCore from '../core';
import { textRule, randomNumber as question } from '../games/brainprime';

gameCore(textRule, question);
