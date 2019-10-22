#!/usr/bin/node
import gameCore from '../core';
import { textRule, randomRangeNumbers as question } from '../games/braineven';

gameCore(textRule, question);
