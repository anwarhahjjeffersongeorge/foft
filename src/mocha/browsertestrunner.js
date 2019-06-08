'use strict'
/**
* Test suite for ../foft.js
*/
// import * as env from './env.js';
import { Foft } from '../foft.js'
import { dotest } from './tests.js'
dotest(Foft)

// pollute the global scope cos it's for testing
// let envcontext = env.env().resultContext;
let envcontext = window
envcontext.Foft = Foft
// envcontext.env = env;

console.warn('' + Foft.maxSafeDivisor, '\n')

document.getElementById('custominfo')
  .innerHTML =
    // `<p>${env.descriptions()}</p>`
    `<p>Foft specs:</p>` +
    `<p>${Foft.maxSafeDivisor}</p>`
