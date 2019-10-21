#!/usr/bin/node
import gameCore from '../core';
import { textRule, random as question, resultOfStringExpression as result } from '../games/braincalc';

gameCore(textRule, question, result);
