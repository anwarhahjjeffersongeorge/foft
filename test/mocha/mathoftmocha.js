"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiArrays = _interopRequireDefault(require("chai-arrays"));

var _chaiAsPromised = _interopRequireDefault(require("chai-as-promised"));

var MathOfT = _interopRequireWildcard(require("../index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Test suite for ../mathoft.js
*/
_chai.default.use(_chaiAsPromised.default);

_chai.default.use(_chaiArrays.default);

_chai.default.config.includeStack = true; // turn on stack trace

var should = _chai.default.should();

var expect = _chai.default.expect;
var assert = _chai.default.assert; //

// var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
}); //TODO browser tests
//TODO nodejs tests