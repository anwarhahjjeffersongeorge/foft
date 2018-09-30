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
// var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});


//TODO browser tests
//TODO nodejs tests
