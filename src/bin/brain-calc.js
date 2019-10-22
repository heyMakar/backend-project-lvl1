#!/usr/bin/node
import gameCore from '../core';
import { textRule, randomExpression as question } from '../games/braincalc';

gameCore(textRule, question);
