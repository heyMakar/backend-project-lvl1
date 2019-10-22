#!/usr/bin/node
import gameCore from '../core';
import { textRule, randomRangeWithGcd as question } from '../games/braingcd';

gameCore(textRule, question);
