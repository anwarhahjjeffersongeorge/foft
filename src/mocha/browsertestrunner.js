"use strict";
/**
* Test suite for ../mathoft.js
*/


import * as env from './env.js';
import chai from 'chai';
import chai_arrays from 'chai-arrays';
import chai_as_promised from 'chai-as-promised';
chai.use(chai_as_promised);
chai.use(chai_arrays);
chai.config.includeStack = true; // turn on stack trace
var should = chai.should();
var expect = chai.expect;
var assert = chai.assert;


import {MathOfT} from '../mathoft.js';
import {dotest} from './tests.js';
dotest(MathOfT);
global.MathOfT = MathOfT;


console.log(''+MathOfT.MAX_SAFE_DIVISOR, '\n', env.symbols)

document.getElementById('custominfo')
  .innerHTML(
    `<p>${env.symbols}</p>`
    + `<p>${MathOfT.MAX_SAFE_DIVISOR}</p>`
  );
