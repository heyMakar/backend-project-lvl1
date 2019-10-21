#!/usr/bin/node
import gameCore from '../core';
import { textRule, random as question, isEven as result } from '../games/braineven';

gameCore(textRule, question, result);
