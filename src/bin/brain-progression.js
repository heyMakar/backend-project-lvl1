#!/usr/bin/node
import gameCore from '../core';
import { textRule, randomProgression as question } from '../games/brainprogression';

gameCore(textRule, question);
