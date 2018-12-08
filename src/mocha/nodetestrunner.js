"use strict";
/**
* Test suite for ../mathoft.js
*/
import * as env from './env.js';
console.log(env.descriptions())

import {MathOfT} from '../index.js';
import {dotest} from './tests.js';
dotest(MathOfT)
// run();
