#!/usr/bin/node
import { brainEven, welcome } from '../index';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

welcome(rule);

brainEven();
