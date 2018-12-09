"use strict";
/**
* @class MathOfT is a class that evaluates the
* properties of Function or MathOfT objects that
* generally receive and return objects of type
*  - Number
*  - Array of Number,
*  - Array of Array
* @example
* // returns a MathOfT instance
* let MoT = new MathOfT()
* @example
* // returns a MathOfT instance that
* // describes an equation over the range [0,1] (inclusive)
* // split into 22 segments (23) total points
* let MoT = new MathOfT({
*   range: [0, 1],
*   segmentDivisor: 22,
*   terms: (t) => t*2;
* });
* MathOfT also evaluates some of the properties
* of the Function or MathOfT objects in its terms
* @see MathOfT.oft
*/

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-properties"));

var _iterator2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/symbol/iterator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _toPrimitive = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/symbol/to-primitive"));

var _assign = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/assign"));

var _getIterator2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/get-iterator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _isInteger = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/number/is-integer"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/toConsumableArray"));

var _isNan = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/number/is-nan"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/array/is-array"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _Object$definePropert;

var _Symbol$iterator = _iterator2.default;

var MathOfT =
/*#__PURE__*/
function () {
  // static #test=1;//@babel/plugin-proposal-class-properties

  /**
  * constructor - create a MathOfT instance that evaluates its Function terms
  *    when given some parameter "t".
  * @param  {(Object|Function|Array)} params
  * @param {(Number|Array.<Number>)} [params.range] Range of two numerical values over which t is evaluated inclusively. If given a single number t0, range is [-t0,t0]
  * @param {Number} [params.segmentDivisor] The number of segments to divide the range into when picking t values for evaluation.
  * @param {(Function|Array.<Function>|Array.<MathOfT>)} [params.terms=[]] A function that accepts a parameter t and returns a result of some operation on t
  * @param {boolean} [params.rangeoverride=false] if true, will override any range provided and set range equal to [0, params.segmentDivisor]
  * @throws TypeError
  */
  function MathOfT(params) {
    (0, _classCallCheck2.default)(this, MathOfT);
    params = params || {};

    if (typeof params === 'function') {
      var thefunc = params;
      params = {
        terms: thefunc
      };
    } else if ((0, _isArray.default)(params)) {
      var thearray = params;
      params = {
        range: thearray
      };
    } // define the division of the evaluation range


    var segmentDivisor = params.segmentDivisor || MathOfT.DEFAULT_SEGMENT_DIVISOR;

    if (typeof segmentDivisor !== 'number' || (0, _isNan.default)(segmentDivisor)) {
      // console.log('NaN segment Divisor')
      throw new TypeError('segmentDivisor should be non-NaN number');
    }

    this.__segmentDivisor = segmentDivisor;
    var rangeoverride = typeof params.rangeoverride === 'boolean' ? params.rangeoverride : false; // create an evaluation range

    var range = rangeoverride ? [0, this.__segmentDivisor] : params.range || MathOfT.DEFAULT_RANGE;
    range = typeof range === 'number' ? [-range, range] : range;
    if (!(0, _isArray.default)(range)) throw new TypeError('range should be array'); // if(range.length!==2) throw new RangeError('range should have two elements')

    if (!MathOfT.ARENUMBERS.apply(MathOfT, (0, _toConsumableArray2.default)(range))) throw new TypeError('range values should be numbers');
    this._range = Array(range.length);

    for (var rangeIndex in range) {
      this._range[rangeIndex] = range[rangeIndex];
    } // this MathOfT can use these terms
    // define terms


    var terms = params.terms || [function (t) {
      return t;
    }];
    terms = typeof terms === 'function' ? [terms] : terms;

    if (!(0, _isArray.default)(terms) && typeof terms !== 'function') {
      throw new TypeError('params.terms should be array or function');
    }

    this._terms = [];

    for (var termIndex in terms) {
      var term = terms[termIndex]; // console.log(term);``

      this.addTerm(term);
    } // console.log(params.opcode)
    // debugger;


    this._opcode = params.opcode;
  }
  /**
  * get terms - the Function terms of this MathOfT object
  *
  * @return {Array}
  */


  (0, _createClass2.default)(MathOfT, [{
    key: "addTerm",

    /**
    * addTerm - add a term to the terms of this MathOfT instance
    *
    * @param  {(function|MathOfT)} term A Function that takes a parameter (t) or
    *   MathOfT
    * @param @deprecated {boolean} [harmonize=false] if true, and term is a MathOfT
    *  instance, this overwrites the range and segmentDivisor of term to make them
    *  equivalent for the same parameters of this instance.
    * @returns {boolean} true if length of terms grew
    */
    value: function addTerm(term, harmonize) {
      var numterms = this.terms.length;
      harmonize = typeof harmonize === 'boolean' ? harmonize : false;

      if (typeof term === 'function') {
        this.terms.push(term);
      } else if (term instanceof MathOfT) {
        this.terms.push(term);

        if (harmonize) {
          term._range = this._range; // IMPORTANT

          term.__segmentDivisor = this.__segmentDivisor;
        }
      }

      return numterms == this.terms.length - 1;
    }
    /**
    * get segmentDivisor The number of segment divisors
    * (number of t evaluation points -1)
    *   in this MathOfT
    *
    * @return {Number}
    */

  }, {
    key: "dSubrange",

    /**
     * get dSubrange - given indices n & nn
     * returns the delta between sub values in the MathOfT instance's
     * evaluation range, or: range[nn%range.length]-range[n%range.length],
     *
     * when given no parameters, it uses 0 and 1
     *
     * @param {Number} [n=0] the starting range index.
     * @param {Number} [nn=n+1%this.range.length] the end range index
     * @return {Number}
     * @throws {TypeError} when given non-number parameter
     */
    value: function dSubrange(n, nn) {
      n = MathOfT.ISNUMBER(n) ? n : 0;

      if (nn && !MathOfT.ISNUMBER(nn)) {
        throw new TypeError("MathOfT.dSubRange only accepts Numbers, given ".concat(Array.prototype.slice.call(arguments)));
      }

      n = n % this._range.length;

      if (!(0, _isInteger.default)(n)) {
        throw new RangeError("MathOfT.dSubRange only accepts Integers, given ".concat(Array.prototype.slice.call(arguments)));
      } // for this conditional, we use the explicit ISNUMBER to avoid logical
      // error for zero case: if(0) is falsy


      nn = MathOfT.ISNUMBER(nn) ? nn % this._range.length : (n + 1) % this._range.length;

      if (!(0, _isInteger.default)(nn)) {
        throw new RangeError("MathOfT.dSubRange only accepts Integers, given ".concat(Array.prototype.slice.call(arguments)));
      }

      return this._range[nn] - this._range[n];
    }
    /**
    * get drange - the delta between the the first and final values of the evaluation range
    *
    * @return {Number}
    */

  }, {
    key: "subT",

    /**
     * subT - get a generator function that yields segmentDivisor+1 values of t spanning the range [this._range[n], this._range[n+1]], where if n or n+1 fall beyond the bounds of this._range.length, they are constrained to fit
     *
     *
     *
     * @param  {Number} [n=0] integer start index of range
     *
     * @return {type}   description
     */
    value: function subT(n, omitLast) {
      omitLast = typeof omitLast === 'boolean' ? omitLast : false;
      var defaultN = 0;
      n = MathOfT.ISNUMBER(n) ? n % this.range.length : defaultN;
      var a = this.range[n],
          b = this.range[(n + 1) % this.range.length];
      var tsubmax = omitLast ? this.segmentDivisor - 1 : this.segmentDivisor;
      var dt = (b - a) / this.segmentDivisor;
      /**
      * @yields {Number}
      */

      return (
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          var tsubindex;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  tsubindex = 0;

                case 1:
                  if (!(tsubindex <= tsubmax)) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 4;
                  return a + tsubindex * dt;

                case 4:
                  tsubindex++;
                  _context.next = 1;
                  break;

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        })
      );
    }
    /**
    * get T -  get a Generator yielding all values of t across instance evaluation range
    * @example
    * // get the default t values for which a MathOfT is
    * // evaluated
    * let MoT = new MathOfT({
    *   range: [0, Math.PI*2],
    *   segmentDivisor: 22,
    *   terms: (t) => [sin(t), cos(t)];
    * });
    * let T = [...MoT.T()]
    * @return {Generator<Number>}
    */

  }, {
    key: "normalizeT",

    /**
    * normalizeT - given a Number t, return a normalized (to MathOfT.DEFAULT_RANGE)
    * representation of the ratio between t and the delta of the evaluation
    * range of this MathOfT
    *
    * If t falls out of bounds of range, the value is returned as -/+ Infinity
    *
    * If the evaluation range has more than two values, e.g. [0,1,2],
    * then normalizeT checks in each subrange, e.g. [0,1], [1,2]
    * and returns an Array of normalized values corresponding to each range
    *
    * @see NORMALIZETORANGE
    * @see DEFAULT_RANGE
    * @param  {Number} [t=0]
    * @param {boolean} [doAnti=false]
    * @return {Number|Array<Number>}
    */
    value: function normalizeT(t, doAnti) {
      doAnti = typeof doAnti === 'boolean' ? doAnti : false;
      var func = doAnti ? MathOfT.ANTINORMALIZETORANGE : MathOfT.NORMALIZETORANGE;
      var arr = Array(this.range.length - 1);

      for (var r = 0; r < arr.length; r++) {
        arr[r] = func(t, [this.range[r], this.range[r + 1]]);
      }

      return arr.length == 1 ? arr[0] : arr;
    }
    /**
     * antinormalizeT - given a number t return a normalized representation of the ratio of a quantity n to the delta of the instance evaluation range such that the ratio of t to the delta of the evaluation range N satisfies
     * 1.n = maximum normal - N
     *
     * if t falls beyond the lower bound of the evaluation range, return +Infinity
     * if t falls beyond the upper bound of the evaluation range, return -Infinity
     *
     * @see normalizeT
     * @param  {number} t
     * @return {number} n
     */

  }, {
    key: "antinormalizeT",
    value: function antinormalizeT(t) {
      return this.normalizeT(t, true);
    }
    /**
     * i - given a Number t within a the evaluation range of this instance
     * (inclusive), return the value of the corresponding i such that
     *   1. i is proportional to the location of t within the range
     *   2. i is scaled to segmentDivisor
     *
     * If t falls out of bounds of the range, nothing is returned
     *
     * If the range has more than two elements, return an array of length range-1
     * @see IINRANGE
     * @see segmentDivisor
     * @see normalizeT
     * @param  {Number} t
     * @return {Number|null|Array<number|null>} [0, segmentDivisor]
     */

  }, {
    key: "i",
    value: function i(t) {
      var arr = Array(this.range.length - 1);

      for (var r = 0; r < arr.length; r++) {
        arr[r] = MathOfT.IINRANGE(t, [this.range[r], this.range[r + 1]], this.segmentDivisor);
      }

      return arr.length == 1 ? arr[0] : arr;
    }
    /**
    * oft - evaluate all of the terms held by this Mathoft for the
    * given t value.
    *
    * When evaluating a Function term, the function can is called with
    * a bound this containing information about t:
    * @see normalizeT
    * @see range
    * @see derange
    * @see t0
    * @see segmentDivisor
    * It also receives a value i corresponding to the index that this t
    * might correspond to in an Array of oft results for the evaluation range.
    *
    * @param  {Number} [t=t0]
    * @return {(Number|Array.<Number>|Array<Array>)}
    */

  }, {
    key: "oft",
    value: function oft(t) {
      t = typeof t === 'number' ? t : this.t0; // debugger;

      var tthis = (0, _typeof2.default)(this.tthis) === 'object' ? this.tthis : {
        "t": {
          t: t,
          tNormal: this.normalizeT(t),
          tNormalRemaining: 1 - this.normalizeT(t),
          trange: this.range,
          drange: this.drange,
          t0: this.t0,
          segmentDivisor: this.segmentDivisor,
          i: this.i
        }
      };
      var result = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator2.default)(this._terms), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _term = _step.value;

          if (typeof _term === 'function') {
            result.push(_term.call(tthis, t));
          } else if (_term instanceof MathOfT) {
            result.push(_term.oft.call((0, _assign.default)(_term, {
              tthis: tthis
            }), t)); //OVERRIDE?
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return result.length == 1 ? result[0] : result;
    }
    /**
     * @static TTHIS_TEMPLATE - get an object with some keys for inter instance
     * communication
     *
     * @see oft
     * @param  {Number} t the t of the instance communicatiing
     * @return {object}
     */

  }, {
    key: "oftNormal",

    /**
    * oftNormal - Accepts a Number tNormal that falls within MathOfT.DEFAULT_RANGE, inclusive, and when provided
    *  1 . A NaN value, return NaN
    *  2.  +Infinity, returns evaluation from end bound of range
    *  3.  -Infinity, returns evaluation from start bound of range
    *  4. Any other number even outside of normal range, returns value of that t.
    *
    * @see ISCALCULABLE
    * @see ofFirstt
    * @see ofLastt
    * @see DEFAULT_RANGE
    * @see oft
    * @param  {Number} [tNormal=[-1,1]]
    * @return {(Number|Array.<Number>)}
    */
    value: function oftNormal(tNormal) {
      var dNormal = MathOfT.DEFAULT_RANGE[1] - MathOfT.DEFAULT_RANGE[0];
      var midNormal = MathOfT.DEFAULT_RANGE[0] + dNormal / 2;
      tNormal = MathOfT.ISNUMBER(tNormal) ? tNormal : midNormal;
      var t = undefined,
          midt = (this.tt - this.t0) / 2 + this.t0;

      if (MathOfT.ISCALCULABLE(tNormal)) {
        t = midt + (tNormal - midNormal) * this.dabsrange / 2;
      } // debugger;


      return t !== undefined ? this.oft(t) : (0, _isNan.default)(tNormal) ? NaN : tNormal === -Infinity ? this.ofFirstt : this.oflastt;
    }
    /**
    * oftOp - Calculate the value of performing an operation _op on the
    * values returned by calculating this MathOfT instance's terms for
    * some evaluation value t.
    *
    * @see oft
    *
    * @param  {Number} t the t to evaluate
    * @param  {type} _acc an accumulator value to start with
    * @see MathOfT.OPS -> base
    * @param  {type} [_op=this.opcode]  an opcode to perform
    * @return {(Number|Array.<Number>|Array.<Array>)}
    */

  }, {
    key: "oftOp",
    value: function oftOp(t, _acc, _op) {
      _op = _op in MathOfT.OPS ? MathOfT.OPS[_op] : this.opcode; // debugger;

      _acc = !_acc ? _op.base : _acc;
      _acc = typeof _acc === 'number' && !(0, _isNan.default)(_acc) ? _acc : NaN; // debugger;

      if (this.terms.length == 1) {
        // console.log('non')
        var _oft = this.oft(t);

        var result;

        if (!(0, _isArray.default)(_oft) ^ !(0, _isArray.default)(_acc)) {
          if (!(0, _isArray.default)(_acc)) {
            result = _oft.map(function (v, i) {
              return _op(v, _acc);
            });
          } else if (!(0, _isArray.default)(_oft)) {
            result = _acc.map(function (v, i) {
              return _op(v, _oft);
            });
          }
        } else if ((0, _isArray.default)(_oft) && (0, _isArray.default)(_acc)) {
          result = _oft.map(function (v, i) {
            return _op(v, _acc[i]);
          });
        } else {
          result = _op(v, _acc);
        } // debugger;


        return result;
      } else {
        return this.oft(t).reduce(function (acc, valarray, i, arr) {
          if (i == 0) {
            // console.warn(valarray, acc)
            return valarray;
          } // console.info(valarray, acc)


          var result; // debugger;

          if (!(0, _isArray.default)(valarray) ^ !(0, _isArray.default)(acc)) {
            valarray = (0, _isArray.default)(valarray) ? valarray : Array(MathOfT.R.length).fill(valarray);
            var accvec = (0, _isArray.default)(acc) ? acc : Array(MathOfT.R.length).fill(acc);
            result = valarray.map(function (vv, ii) {
              return _op(accvec[ii], vv);
            });
          } else if ((0, _isArray.default)(valarray) && (0, _isArray.default)(acc)) {
            result = valarray.map(function (vv, ii) {
              return _op(acc[ii], vv);
            });
          } else {
            var valnum = typeof valarray === 'number' ? valarray : NaN;
            result = (0, _isNan.default)(valnum) || (0, _isNan.default)(acc) ? NaN : _op(acc, valnum);
          }

          return result;
        }, _acc);
      }
    }
    /**
    * get ofAllT - get a Generator that yields
    * all Array=[t, this.oft(t)] for t in evaluation range
    * @see oft
    * @return {Generator} yielding Array in form [t, this.oft(t)]
    */

  }, {
    key: "mapTOp",

    /**
    * mapTOp - apply the Array.map native function to the elements of
    * this.ofAllTOp() with the given callback function and this argument
    * @see Array.map
    * @see ofAllTOp
    * @param  {Function} [callback] callback to apply
    * @param  {Object} [thisArg]  this argument
    * @return {Array}         map result
    */
    value: function mapTOp(callback, thisArg) {
      if (!(callback instanceof Function)) throw new TypeError('map needs Function callback');
      return (0, _toConsumableArray2.default)(this.ofAllTOp()).map(callback, thisArg);
    }
    /**
    * map - apply the Array.map native function to the elements yielded by
    * this[Symbol.iterator] with the given callback function and this argument
    *    *
    * @see get [Symbol.iterator]
    * @param  {Function} [callback] callback to apply
    * @param  {Object} [thisArg]  this argument
    * @return {Array}         map result
    */

  }, {
    key: "map",
    value: function map(callback, thisArg) {
      if (!(callback instanceof Function)) throw new TypeError('map needs Function callback');
      return (0, _toConsumableArray2.default)(this).map(callback, thisArg);
    }
    /**
     * @static R - dimensional labeling
     */

  }, {
    key: "terms",
    get: function get() {
      return this._terms;
    }
  }, {
    key: "segmentDivisor",
    get: function get() {
      return this.__segmentDivisor;
    }
    /**
     * get numSegments - The number of actual segments the MathOfT divides the evaluation range into
     *
     * @return {Number}
     */

  }, {
    key: "numSegments",
    get: function get() {
      return this.segmentDivisor + 1;
    }
  }, {
    key: "dt",
    get: function get() {
      return this.drange / this.__segmentDivisor;
    }
    /**
    * get range - the evaluation range is the minimum and maximum values for t
    *
    * @return {Array.<Number>}
    */

  }, {
    key: "range",
    get: function get() {
      return this._range;
    }
    /**
    * get t0 - the first value of t in the evaluation range T
    * @see T
    * @return {Number}
    */

  }, {
    key: "t0",
    get: function get() {
      return this.range[0];
    }
    /**
    * get tt - the last value of t in the evaluation range T
    * @see T
    * @return {Number}
    */

  }, {
    key: "tt",
    get: function get() {
      return this.range[this.range.length - 1];
    }
    /**
    * get opcode - a MathOfT can have an opcode as defined in
    * MathOfT.OPS. These codes represent mathematical operations
    * between Numbers and other types. They are useful for performing
    * said operations when the Function or MathOfT in the terms
    * Array
    *
    * @see MathOfT.OPS
    * @see terms
    * @return {string} @see MathOfT.OPS
    */

  }, {
    key: "opcode",
    get: function get() {
      return this._opcode;
    }
    /**
    * set opcode - set the opcode to one of the opcodes
    *  defined in MathOfT.OPS
    *
    * @param  {string} opcode @see MathOfT.OPS
    */
    ,
    set: function set(opcode) {
      if (MathOfT.ISOP(opcode)) {
        this._opcode = opcode;
      }
    }
  }, {
    key: "drange",
    get: function get() {
      return this._range[this._range.length - 1] - this._range[0];
    }
    /**
    * get dabsrange - the absolute value of the delta
    * between the first and final values of the evaluation range
    *
    * @return {Number}
    */

  }, {
    key: "dabsrange",
    get: function get() {
      return Math.abs(this.drange);
    }
  }, {
    key: "T",
    get: function get() {
      var rangelimit = this.range.length - 2;
      /**
      * @yields {Number}
      */

      return (
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2() {
          var rangeIndex;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  rangeIndex = 0;

                case 1:
                  if (!(rangeIndex <= rangelimit)) {
                    _context2.next = 6;
                    break;
                  }

                  return _context2.delegateYield(rangeIndex == rangelimit ? this.subT(rangeIndex)() : this.subT(rangeIndex, true)(), "t0", 3);

                case 3:
                  rangeIndex++;
                  _context2.next = 1;
                  break;

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        })
      );
    }
  }, {
    key: "ofFirstt",

    /**
    * get ofFirstt - return the oft for the first t in the evaluation range
    *
    * @see t0
    * @see oft
    * @return {(Number|Array.<Number>|Array.<Array>)}
    */
    get: function get() {
      return this.oft(this.t0);
    }
    /**
    * get ofLastt - return the oft for the final t in the evaluation range
    *
    * @see range
    * @see oft
    * @return {(Number|Array.<Number>|Array.<Array>)}
    */

  }, {
    key: "ofLastt",
    get: function get() {
      return this.oft(this.tt);
    }
  }, {
    key: "ofAllT",
    get: function get() {
      return (
        /*#__PURE__*/
        _regenerator.default.mark(function _callee3() {
          var _arr, _i, t;

          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _arr = (0, _toConsumableArray2.default)(this.T());
                  _i = 0;

                case 2:
                  if (!(_i < _arr.length)) {
                    _context3.next = 9;
                    break;
                  }

                  t = _arr[_i];
                  _context3.next = 6;
                  return [t, this.oft(t)];

                case 6:
                  _i++;
                  _context3.next = 2;
                  break;

                case 9:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        })
      );
    }
    /**
    * get - Symbol.iterator get a Generator that yields
    *    all this.oft(t) for t in evaluation range
    * @see oft
    * @return {Generator} Generator function yielding this.oft(t)
    */

  }, {
    key: _Symbol$iterator,
    get: function get() {
      return (
        /*#__PURE__*/
        _regenerator.default.mark(function _callee4() {
          var _this = this;

          return _regenerator.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  return _context4.delegateYield((0, _toConsumableArray2.default)(this.T()).map(function (t, i) {
                    return _this.oft(t);
                  }), "t0", 1);

                case 1:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        })
      );
    }
    /**
    * get ofAllTOp - get a Generator that yields all
    * this.oftOp(_t, _acc, _op) for _t in evaluation range,
    * _acc, _op provided by user
    *
    * @see ofAllTOp
    * @return {Generator}  description
    */

  }, {
    key: "ofAllTOp",
    get: function get() {
      return (
        /*#__PURE__*/
        _regenerator.default.mark(function _callee5(_acc, _op) {
          var _this2 = this;

          return _regenerator.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  return _context5.delegateYield((0, _toConsumableArray2.default)(this.T()).map(function (_t, i) {
                    return _this2.oftOp(_t, _acc, _op);
                  }), "t0", 1);

                case 1:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        })
      );
    }
  }], [{
    key: "TTHIS_TEMPLATE",
    value: function TTHIS_TEMPLATE(t, mathoft) {
      var o = MathOfT.ISNUMBER(t) ? {
        t: t,
        normalizeT: normalizeT
      } : null;
    }
  }, {
    key: "CALC_PRECISION_WARN",

    /**
     * @static CALC_PRECISION_WARN - give precision warning in the form of an object that can be converted to a primitive. Warning value is produced by a*1/a==1 test
     *
     * @return {object}  the object with primitive values:
     *         {number}  the maximum value for which no precision is lost
     *         {string}  as brief message
     */
    value: function CALC_PRECISION_WARN() {
      var msg;

      var getmsg = function getmsg(e) {
        return "Maximum safe unit divisor: ".concat(e);
      };

      var test = function test(a) {
        return 1 / a * a == 1;
      };

      var testnum = 0;
      var maxtest = 144;

      while (testnum < maxtest) {
        if (!test(++testnum)) {
          msg = getmsg(testnum);
          break;
        }
      }

      return (0, _defineProperty2.default)({}, _toPrimitive.default, function (hint) {
        if (hint === 'number') return testnum - 1;
        return msg;
      });
    } //TODO: static SIN_OF_PI_WARN

    /*js: (0=== Math.sin(-Math.PI))=false
    
    in electron:
    
    0=== Math.sin(0)
    true
    (0=== Math.sin(-Math.PI))
    false
    
     Math.sin(-Math.PI)
    -1.2246467991473532e-16
     Math.sin(Math.PI)
    1.2246467991473532e-16
    
    in node:
    
    >  Math.sin(-Math.PI)
    -1.2246467991473532e-16
    >  Math.sin(-Math.PI)
    -1.2246467991473532e-16
    
    in node with decimal.js(https://github.com/MikeMcl/decimal.js):
    
    console.log(Decimal.sin(-Math.PI).toPrecision(20))
    -2.3846264338327950288e-16
    undefined
    >  console.log(Decimal.sin(-Math.PI).toPrecision(80))
    -2.3846264338327950288000000000000000000000000000000000000000000000000000000000000e-16
    undefined
    >  console.log(Decimal.sin(3.1415926535897932384626433832795028841971693993751).toPrecision(80))
    2.3846264338327950288000000000000000000000000000000000000000000000000000000000000e-16
    undefined
    >  console.log(Decimal.sin(3.1415926535897932384626433832795028841971693993751*2).toPrecision(80))
    -4.7692528676655900577000000000000000000000000000000000000000000000000000000000000e-16
    undefined
    >  console.log(Decimal.sin(3.1415926535897932384626433832795028841971693993751*2).toPrecision(80))
    -4.7692528676655900577000000000000000000000000000000000000000000000000000000000000e-16
    undefined
    >  console.log(Decimal.sin(Decimal('3.1415926535897932384626433832795028841971693993751')).toPrecision(80))
    5.8209749445923078164000000000000000000000000000000000000000000000000000000000000e-51
    undefined*/

    /**
     * @static ISNUMBER - return true IFF both of the following conditions are met
     *   1. there was ONE argument provided, and
     *   2. the sole provided argument was a Number
     *
     *
     * @return {boolean}
     */

  }, {
    key: "NORMALIZETORANGE",

    /**
     * @static NORMALIZETORANGE - given a Number t, amd a ramge TT, return a normalized (to an optional range NN or MathOfT.DEFAULT_RANGE)
     * representation of the ratio between the two deltas A and B where
     *   1. A is the difference betewen t and TT[first]
     *   2. B is the difference between TT[last] and TT[first]
     *
     *
     * If t falls out of bounds of range, the value is returned as -/+ Infinity,
     * where:
     *   1. -Infinity corresponding to beyond the bound of TT[first], and
     *   2. +Infinity corresponding to beyond the bound of TT[last]
     *
     *
     * @param  {number} [t=0] the t to evaluate
     * @param  {Array<number>} [TT=DEFAULT_RANGE] the range in which to test for TT
     * @param  {Array<number>} [NN=DEFAULT_RANGE] the target normalization range * @return {number}
     */
    value: function NORMALIZETORANGE(t, TT, NN) {
      if (!MathOfT.ISNUMBER(t)) {
        t = 0;
      }

      if (!MathOfT.ARENUMBERS(NN)) {
        NN = MathOfT.DEFAULT_RANGE;
      }

      if (!MathOfT.ARENUMBERS(TT)) {
        TT = MathOfT.DEFAULT_RANGE;
      }

      var _NN = NN,
          _NN2 = (0, _slicedToArray2.default)(_NN, 2),
          normA = _NN2[0],
          normB = _NN2[1];

      var minNorm = normA < normB ? normA : normB;
      var maxNorm = normB > normA ? normB : normA;
      var res = (t - TT[0]) / (TT[1] - TT[0]); //[0-1]

      res = normA + (normB - normA) * res; //[normA, normB]

      if (!MathOfT.INRANGE(res, normA, normB)) {
        res = res < minNorm ? -Infinity : Infinity;
      }

      return res;
    }
    /**
     * @static ANTINORMALIZETORANGE - given a Number t, amd a ramge TT, return a normalized (to MathOfT.DEFAULT_RANGE)
     * representation of the ratio between the two deltas A and B where
     *   1. A is the difference betewen t and TT[last]
     *   2. B is the difference between TT[last] and TT[first]
     *
     * If t falls out of bounds of range, the value is returned as -/+ Infinity,
     * where:
     *   1. +Infinity corresponding to beyond the bound of TT[first], and
     *   2. -Infinity corresponding to beyond the bound of TT[last]
     *
     * @see NORMALIZETORANGE
     * @param  {number} [t=0] the t to evaluate
     * @param  {Array<number>} [TT=DEFAULT_RANGE] the range in which to test for TT
     * @return {number}
     */

  }, {
    key: "ANTINORMALIZETORANGE",
    value: function ANTINORMALIZETORANGE(t, TT, NN) {
      if (!MathOfT.ISNUMBER(t)) {
        t = 0;
      }

      if (!MathOfT.ARENUMBERS(TT)) {
        TT = MathOfT.DEFAULT_RANGE;
      }

      if (!MathOfT.ARENUMBERS(NN)) {
        NN = MathOfT.DEFAULT_RANGE;
      }

      var res = MathOfT.NORMALIZETORANGE(t, TT, NN);
      return Math.abs(res) === Infinity ? -res : NN[NN.length - 1] - res;
    }
    /**
     * @static IINRANGE - given a number t, a range TT and a divisor d, return the value of the corresponding i such that
     *   1. i is proportional to the location of t within the range
     *   2. i is proportional to d
     *
     * @param  {number} t  t to find in TT
     * @param  {Array<number>} TT range
     * @param  {type} d  divisor
     * @return {null|number}
     */

  }, {
    key: "IINRANGE",
    value: function IINRANGE(t, TT, d) {
      d = MathOfT.ISNUMBER(d) ? Math.floor(d) : MathOfT.DEFAULT_SEGMENT_DIVISOR;
      var res = MathOfT.NORMALIZETORANGE(t, TT, [0, 1]);
      return res == Infinity ? null : res == -Infinity ? null : Math.floor(res * d);
    }
    /**
     * @static OPDICT - an array of the ops that MathOfT class  can recognize
     */

  }, {
    key: "ISOP",

    /**
     * @static ISOP - given a string codeToParse, return true when code is found
     *  in MathOfT.OPDICT
     * @see MathOfT.OPDICT
     * @param  {string} codeToParse
     * @return {boolean}
     */
    value: function ISOP(codeToParse) {
      return MathOfT.OPDICT.includes(codeToParse);
    }
    /**
     * @static OPPARSE - given a string codeToParse, return
     * the corresponding operation function from MathOfT.OPS
     *
     * @see MathOfT.OPS
     * @param  {string} codeToParse
     * @return {function} MathOfT.OPS function corresponding to op
     */

  }, {
    key: "OPPARSE",
    value: function OPPARSE(codeToParse) {
      return MathOfT.ISOP(codeToParse) ? MathOfT.OPS[codeToParse] : MathOfT.OPS[null];
    }
    /**
     * @static OPS - an object containing operations, or ops, that
     * perform mathematical functions corresponding to their keys
     *
     * @see MathOfT.ISOP
     * @see MathOfT.OPDICT
     * @see MathOfT.OPPARSE
     * @see MathOfT.ARENUMBERS
     */

  }]);
  return MathOfT;
}();

(0, _defineProperty2.default)(MathOfT, "R", ['x', 'y', 'z']);
(0, _defineProperty2.default)(MathOfT, "ISNUMBER", function () {
  return arguments.length == 1 && typeof arguments[0] === 'number';
});
(0, _defineProperty2.default)(MathOfT, "ISCALCULABLE", function () {
  return MathOfT.ISNUMBER(arguments[0]) && isFinite(arguments[0]);
});
(0, _defineProperty2.default)(MathOfT, "ARENUMBERS", function () {
  if (arguments.length == 0) {
    return false;
  } else {
    return Array.prototype.slice.call(arguments).every(function (v) {
      return (0, _isArray.default)(v) ? MathOfT.ARENUMBERS.apply(MathOfT, (0, _toConsumableArray2.default)(v)) : MathOfT.ISNUMBER(v);
    });
  }
});
(0, _defineProperty2.default)(MathOfT, "INRANGE", function (n, m, mm) {
  var test = function test(a, b, c) {
    // console.log(a,b,c)
    return a > b ? a <= c : a < b ? a >= c : true; // a == b
  };

  if (!(MathOfT.ARENUMBERS.apply(MathOfT, arguments) && MathOfT.ISNUMBER(n))) {
    return false;
  } else {
    if (arguments.length == 1) {
      return MathOfT.INRANGE(n, MathOfT.DEFAULT_RANGE);
    } else if ((0, _isArray.default)(m)) {
      // console.log(n,m)
      return m.length == 1 ? test(n, 0, m[0]) : test(n, m[0], m[m.length - 1]);
    } else if (MathOfT.ISNUMBER(m)) {
      if (!MathOfT.ISNUMBER(mm)) {
        return test(n, 0, m);
      } else if (MathOfT.ISNUMBER(mm)) {
        return test(n, m, mm);
      }
    } else {
      return false;
    }
  }
});
(0, _defineProperty2.default)(MathOfT, "OPDICT", [null, '+', '-', '*', '/', '**']);
(0, _defineProperty2.default)(MathOfT, "OPS", (0, _defineProperties.default)({}, (_Object$definePropert = {}, (0, _defineProperty2.default)(_Object$definePropert, null, {
  get: function get() {
    function res() {
      return Array.prototype.slice.call(arguments);
    }

    ;
    res.code = null;
    res.base = null;
    return res;
  },
  set: function set() {
    return null;
  }
}), (0, _defineProperty2.default)(_Object$definePropert, '+', {
  get: function get() {
    var base = 0;

    function res() {
      return MathOfT.ARENUMBERS.apply(MathOfT, arguments) ? Array.prototype.slice.call(arguments).reduce(function (acc, c, i) {
        return i == 0 ? c : acc + c;
      }) : NaN;
    }

    res.code = '+';
    res.base = base;
    return res;
  },
  set: function set() {
    return '+';
  }
}), (0, _defineProperty2.default)(_Object$definePropert, '-', {
  get: function get() {
    var base = 0;

    function res() {
      return MathOfT.ARENUMBERS.apply(MathOfT, arguments) ? Array.prototype.slice.call(arguments).reduce(function (acc, c, i) {
        return i == 0 ? c : acc - c;
      }, base) : NaN;
    } // let res = (a, b) => (MathOfT.ARENUMBERS(a,b))
    // ? a - b
    // : NaN;


    res.code = '-';
    res.base = base;
    return res;
  },
  set: function set() {
    return '-';
  }
}), (0, _defineProperty2.default)(_Object$definePropert, '*', {
  get: function get() {
    var base = 1;

    function res() {
      return MathOfT.ARENUMBERS.apply(MathOfT, arguments) ? Array.prototype.slice.call(arguments).reduce(function (acc, c, i) {
        return i == 0 ? c : acc * c;
      }, base) : NaN;
    }

    res.code = '*';
    res.base = base;
    return res;
  },
  set: function set() {
    return '*';
  }
}), (0, _defineProperty2.default)(_Object$definePropert, '/', {
  get: function get() {
    var base = 1;

    function res() {
      return MathOfT.ARENUMBERS.apply(MathOfT, arguments) ? Array.prototype.slice.call(arguments).reduce(function (acc, c, i) {
        return i == 0 ? c : acc / c;
      }, base) : NaN;
    }

    res.code = '/';
    res.base = base;
    return res;
  },
  set: function set() {
    return '/';
  }
}), (0, _defineProperty2.default)(_Object$definePropert, '**', {
  get: function get() {
    var base = 1;

    function res() {
      return MathOfT.ARENUMBERS.apply(MathOfT, arguments) ? Array.prototype.slice.call(arguments).reduce(function (acc, c, i) {
        return i == 0 ? c : Math.pow(acc, c);
      }, base) : NaN;
    }

    res.code = '**';
    res.base = base;
    return res;
  },
  set: function set() {
    return '**';
  }
}), (0, _defineProperty2.default)(_Object$definePropert, '...', {
  get: function get() {
    var res = function res(a, b) {
      return (0, _isArray.default)(a) ? a.concat(b) : (0, _isArray.default)(b) ? b.concat(a) : [a, b];
    };

    res.code = '...';
    res.base = [];
    return res;
  },
  set: function set() {
    return '...';
  }
}), _Object$definePropert)));
(0, _defineProperty2.default)(MathOfT, "DEFAULT_SEGMENT_DIVISOR", 10);
(0, _defineProperty2.default)(MathOfT, "DEFAULT_RANGE", [-1, 1]);
module.exports = {
  MathOfT: Object.defineProperty(MathOfT, 'MAX_SAFE_DIVISOR', {
    value: MathOfT.CALC_PRECISION_WARN(),
    enumerable: true,
    configurable: false,
    writable: false
  })
};