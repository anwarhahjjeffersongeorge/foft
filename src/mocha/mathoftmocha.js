"use strict";
/**
* Test suite for ../mathoft.js
*/

import chai from 'chai';
import chai_arrays from 'chai-arrays';
import chai_as_promised from 'chai-as-promised';
chai.use(chai_as_promised);
chai.use(chai_arrays);
chai.config.includeStack = true; // turn on stack trace
var should = chai.should();
var expect = chai.expect;
var assert = chai.assert;
//
import * as MathOfT from '../index.js';

//


//TODO MathOFT tests
describe('MathOfT', function() {
  it('should be an Object', function() {
    MathOfT.should.be.an('Object')
  });
  it('should have certain immutable class properties')
});
//TODO browser tests
describe('browser Functionality', function() {
  // body...
});
//TODO nodejs tests
describe('nodejs Functionality', function() {
  // body...
});
