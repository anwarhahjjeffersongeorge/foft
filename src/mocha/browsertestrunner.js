"use strict";
/**
* Test suite for ../mathoft.js
*/
// import * as env from './env.js';
import {MathOfT} from '../mathoft.js';
import {dotest} from './tests.js';
dotest(MathOfT);

//pollute the global scope cos it's for testing
// let envcontext = env.env().resultContext;
let envcontext = window;
envcontext.MathOfT = MathOfT;
// envcontext.env = env;

console.warn(''+MathOfT.MAX_SAFE_DIVISOR, '\n')

document.getElementById('custominfo')
  .innerHTML =
    // `<p>${env.descriptions()}</p>`
    `<p>MathOfT specs:</p>`
    + `<p>${MathOfT.MAX_SAFE_DIVISOR}</p>`;
