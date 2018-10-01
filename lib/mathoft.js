"use strict";
/**
* MathOfT is a class that evaluates the
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
* @see MathOfT.ofT
*/

var _Object$definePropert;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _Symbol$iterator = Symbol.iterator;

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
  * @throws ValueError
  */
  function MathOfT(params) {
    _classCallCheck(this, MathOfT);

    params = params || {};

    if (typeof params === 'function') {
      var thefunc = params;
      params = {
        terms: thefunc
      };
    } else if (Array.isArray(params)) {
      var thearray = params;
      params = {
        range: thearray
      };
    } // define the division of the evaluation range


    var segmentDivisor = params.segmentDivisor || 10;
    if (typeof segmentDivisor !== 'number') throw new TypeError('segmentDivisor should be number');
    this.__segmentDivisor = segmentDivisor;
    var rangeoverride = typeof params.rangeoverride === 'boolean' ? params.rangeoverride : false; // create an evaluation range

    var range = rangeoverride ? [0, this.__segmentDivisor] : params.range || [0, 1];
    range = typeof range === 'number' ? [-range, range] : range;
    if (!Array.isArray(range)) throw new TypeError('range should be array');
    if (range.length !== 2) throw new ValueError('range should have two elements');
    if (!(typeof range[0] === 'number' && typeof range[1] === 'number')) throw new TypeError('range values should be numbers');
    this._range = Array(range.length);

    for (var rangeIndex in range) {
      this._range[rangeIndex] = typeof range[rangeIndex] === 'number' ? range[rangeIndex] : null;
    } // this MathOfT can use these terms
    // define terms


    var terms = params.terms || [function (t) {
      return t;
    }];
    terms = typeof terms === 'function' ? [terms] : terms;

    if (!Array.isArray(terms) && typeof terms !== 'function') {
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


  _createClass(MathOfT, [{
    key: "addTerm",

    /**
    * addTerm - add a term to the terms of this MathOfT instance
    *
    * @param  {(function|MathOfT)} term A Function that takes a parameter (t) or
    *   MathOfT
    * @param @deprecated {boolean} [harmonize=false] if true, and term is a MathOfT
    *  instance, this overwrites the range and segmentDivisor of term to make them
    *  equivalent for the same parameters of this instance.
    */
    value: function addTerm(term, harmonize) {
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
    }
    /**
    * get segmentDivisor The number of segments (number of t evaluation points -1)
    *   in this MathOfT
    *
    * @return {Number}
    */

  }, {
    key: "tNormalised",

    /**
    * tNormalised - given a Number t, return a normalized
    * representation of how far along t is in the evaluation
    * range of this MathOfT
    * @param  {Number} t
    * @return {Number} between 0 and 1 , inclusive
    */
    value: function tNormalised(t) {
      return Math.abs((t - this.range[0]) / (this.range[1] - this.range[0]));
    }
    /**
    * ofTNormal - given a Number tNormal between -1 and 1, inclusive,
    * return the evaluation of this MathOfT on the t corresponding
    * to the value of t in the evaluation range represented by the
    * given tNormal
    * @see ofT
    * @param  {Number} [tNormal=[-1,1]]
    * @return {(Number|Array.<Number>)}
    */

  }, {
    key: "ofTNormal",
    value: function ofTNormal(tNormal) {
      tNormal = typeof tNormal === 'number' ? tNormal > 1 || tNormal < -1 ? Math.sign(tNormal) * 1 : tNormal : 1;
      var t = this.range[0] + tNormal * (this.range[1] - this.range[0]); // debugger;

      return this.ofT(t);
    } // ofTRange(trange, numsegment){
    //   trange = (Array.isArray(trange)
    //     && (range.length==2)
    //     && hOfT.ARENUMBERS(...trange))
    //     ? trange
    //     : this.range;
    //   trange = trange.map(v => Math.round(v*(this.__segmentDivisor-1)));
    //   let result = function*(){
    //     for(let i = trange[0]; i<trange[1]; i++){
    //       yield this.ofTNormal(i/(trange[1]-trange[0]))
    //     }
    //   }
    // }
    // /**
    //  * ofNormalisedRange - Evaluate terms over a given normalised numeric range
    //  * if either range point falls between normally evaluated points based on __segmentDivisor
    //  * the evaluation will include a value corresponding to that in-between point
    //  * @param  {Array<number>} nrange two numbers each between [0,1] inclusive
    //  * @yield {} tValues
    //  */
    // ofNormalisedRange(nrange){
    //   nrange = (Array.isArray(nrange)
    //     && (range.length==2)
    //     && MathOfT.ARENUMBERS(...nrange)
    //     && (Math.abs(nrange[0])<=1) && (Math.abs(nrange[1])<=1)
    //     && (nrange[0]!=nrange[1]) )
    //     ? nrange
    //     : [0,1];
    //   let addPoints = false,
    //     addPointArr = Array(nrange.length).fill(false);
    //   let sdrange = nrange.map((v, i)=>{
    //     let res = v*this.__segmentDivisor;
    //     addPointArr[i] = !Math.IsInteger(res); // if in between, add point
    //   });
    //
    //
    //   addPoints = addPointArr.includes(true);
    //   let result = function*(){
    //     for(let t = tIndices[0]; t < tIndices[1]; t+=){
    //       yield [
    //         t,
    //         this.ofT(t)
    //       ];
    //     }
    //   }
    // }

    /**
    * ofT - evaluate all of the terms held by this MathofT for the
    * given t value.
    *
    * When evaluating a Function term, the function can is called with
    * a bound this containing information about t:
    * @see tNormalised
    * @see range
    * @see derange
    * @see t0
    * @see segmentDivisor
    * It also receives a value i corresponding to the index that this t
    * might correspond to in an Array of ofT results for the evaluation range.
    *
    * @param  {Number} t
    * @return {(Number|Array.<Number>|Array<Array>)}
    */

  }, {
    key: "ofT",
    value: function ofT(t) {
      t = typeof t === 'number' ? t : this.range[0]; // debugger;

      var tthis = _typeof(this.tthis) === 'object' ? this.tthis : {
        "t": {
          t: t,
          tNormal: this.tNormalised(t),
          tNormalRemaining: 1 - this.tNormalised(t),
          trange: this.range,
          drange: this.drange,
          t0: this.t0,
          segmentDivisor: this.segmentDivisor,
          i: Math.round(t * this.segmentDivisor)
        }
      };
      var result = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._terms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _term = _step.value;

          if (typeof _term === 'function') {
            result.push(_term.call(tthis, t));
          } else if (_term instanceof MathOfT) {
            // debugger;
            // result.push(_term.ofT.call(tthis, t)); //OVERRIDE?
            var resultsubarr = [];

            if (_term.opcode) {
              resultsubarr = _toConsumableArray(_term.ofAllTOp(null, _term.opcode));
            } else {
              resultsubarr = _toConsumableArray(_term.ofAllT());
            }

            result.push(resultsubarr);
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
    * ofTOp - Calculate the value of performing an operation _op on the
    * values returned by calculating this MathOfT instance's terms for
    * some evaluation value t.
    *
    * @see ofT
    *
    * @param  {Number} t the t to evaluate
    * @param  {type} _acc an accumulator value to start with
    * @see MathOfT.OPS -> base
    * @param  {type} [_op=this.opcode]  an opcode to perform
    * @return {(Number|Array.<Number>|Array.<Array>)}
    */

  }, {
    key: "ofTOp",
    value: function ofTOp(t, _acc, _op) {
      _op = _op in MathOfT.OPS ? MathOfT.OPS[_op] : this.opcode; // debugger;

      _acc = !_acc ? _op.base : _acc;
      _acc = typeof _acc === 'number' && !Number.isNaN(_acc) ? _acc : NaN; // debugger;

      if (this.terms.length == 1) {
        // console.log('non')
        var _ofT = this.ofT(t);

        var result;

        if (!Array.isArray(_ofT) ^ !Array.isArray(_acc)) {
          if (!Array.isArray(_acc)) {
            result = _ofT.map(function (v, i) {
              return _op(v, _acc);
            });
          } else if (!Array.isArray(_ofT)) {
            result = _acc.map(function (v, i) {
              return _op(v, _ofT);
            });
          }
        } else if (Array.isArray(_ofT) && Array.isArray(_acc)) {
          result = _ofT.map(function (v, i) {
            return _op(v, _acc[i]);
          });
        } else {
          result = _op(v, _acc);
        } // debugger;


        return result;
      } else {
        return this.ofT(t).reduce(function (acc, valarray, i, arr) {
          if (i == 0) {
            // console.warn(valarray, acc)
            return valarray;
          } // console.info(valarray, acc)


          var result; // debugger;

          if (!Array.isArray(valarray) ^ !Array.isArray(acc)) {
            valarray = Array.isArray(valarray) ? valarray : Array(MathOfT.R.length).fill(valarray);
            var accvec = Array.isArray(acc) ? acc : Array(MathOfT.R.length).fill(acc);
            result = valarray.map(function (vv, ii) {
              return _op(accvec[ii], vv);
            });
          } else if (Array.isArray(valarray) && Array.isArray(acc)) {
            result = valarray.map(function (vv, ii) {
              return _op(acc[ii], vv);
            });
          } else {
            var valnum = typeof valarray === 'number' ? valarray : NaN;
            result = Number.isNaN(valnum) || Number.isNaN(acc) ? NaN : _op(acc, valnum);
          }

          return result;
        }, _acc);
      }
    }
    /**
    * get ofFirstT - return the ofT for the first t in the evaluation range
    *
    * @see t0
    * @see ofT
    * @return {(Number|Array.<Number>|Array.<Array>)}
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
      return _toConsumableArray(this.ofAllTOp()).map(callback, thisArg);
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
      return _toConsumableArray(this).map(callback, thisArg);
    }
    /**
    * dimensional labeling
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
    * get t0 - the first value of t in the evaluation range
    * @return {Number}
    */

  }, {
    key: "t0",
    get: function get() {
      return this.range[0];
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
    /**
    * get drange - the delta between the values of the evaluation range
    *
    * @return {type}  description
    */

  }, {
    key: "drange",
    get: function get() {
      var rangesum = 0;

      for (var rangeIndex in this._range) {
        var rangeAdd = rangeIndex == 0 ? 0 : this._range[rangeIndex] - this._range[rangeIndex - 1];
        rangesum += rangeAdd;
      }

      return rangesum;
    }
    /**
    * get dabsrange - the absolute value of the delta
    * between the values of the evaluation range
    *
    * @return {type}  description
    */

  }, {
    key: "dabsrange",
    get: function get() {
      var rangesum = 0;

      for (var rangeIndex in this._range) {
        var rangeAdd = rangeIndex == 0 ? 0 : this._range[rangeIndex] - this._range[rangeIndex - 1];
        rangesum += Math.abs(rangeAdd);
      }

      return rangesum;
    }
    /**
    * get t - get a Generator yielding segmentDivisor+1 values
    *  of t in range (inclusive)
    * @example
    * // get the default t values for which a MathOfT is
    * // evaluated
    * let MoT = new MathOfT({
    *   range: [0, Math.PI*2],
    *   segmentDivisor: 22,
    *   terms: (t) => [sin(t), cos(t)];
    * });
    * let t = [...MoT.t()]
    * @return {Generator}
    */

  }, {
    key: "t",
    get: function get() {
      /**
      * @yields {Number}
      */
      return (
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var tindex;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  tindex = 0;

                case 1:
                  if (!(tindex <= this.__segmentDivisor)) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 4;
                  return tindex * this.dt + this._range[0];

                case 4:
                  tindex++;
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
  }, {
    key: "ofFirstT",
    get: function get() {
      return this.ofT(this.t0);
    }
    /**
    * get ofLastT - return the ofT for the final t in the evaluation range
    *
    * @see range
    * @see ofT
    * @return {(Number|Array.<Number>|Array.<Array>)}
    */

  }, {
    key: "ofLastT",
    get: function get() {
      return this.ofT(this._range[this._range.length - 1]);
    }
    /**
    * get ofAllT - get a Generator that yields
    * all Array=[t, this.ofT(t)] for t in evaluation range
    * @see ofT
    * @return {Generator} yielding Array in form [t, this.ofT(t)]
    */

  }, {
    key: "ofAllT",
    get: function get() {
      return (
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var _arr, _i, t;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _arr = _toConsumableArray(this.t());
                  _i = 0;

                case 2:
                  if (!(_i < _arr.length)) {
                    _context2.next = 9;
                    break;
                  }

                  t = _arr[_i];
                  _context2.next = 6;
                  return [t, this.ofT(t)];

                case 6:
                  _i++;
                  _context2.next = 2;
                  break;

                case 9:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        })
      );
    }
    /**
    * get - Symbol.iterator get a Generator that yields
    *    all this.ofT(t) for t in evaluation range
    * @see ofT
    * @return {Generator} Generator function yielding this.ofT(t)
    */

  }, {
    key: _Symbol$iterator,
    get: function get() {
      return (
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          var _this = this;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.delegateYield(_toConsumableArray(this.t()).map(function (t, i) {
                    return _this.ofT(t);
                  }), "t0", 1);

                case 1:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        })
      );
    }
    /**
    * get ofAllTOp - get a Generator that yields all
    * this.ofTOp(_t, _acc, _op) for _t in evaluation range,
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
        regeneratorRuntime.mark(function _callee4(_acc, _op) {
          var _this2 = this;

          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  return _context4.delegateYield(_toConsumableArray(this.t()).map(function (_t, i) {
                    return _this2.ofTOp(_t, _acc, _op);
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
  }], [{
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

_defineProperty(MathOfT, "R", ['x', 'y', 'z']);

_defineProperty(MathOfT, "ARENUMBERS", function () {
  if (arguments.length == 0) {
    return false;
  } else {
    return Array.prototype.slice.call(arguments).every(function (v) {
      return typeof v === 'number';
    });
  }
});

_defineProperty(MathOfT, "OPDICT", [null, '+', '-', '*', '/', '**']);

_defineProperty(MathOfT, "OPS", Object.defineProperties({}, (_Object$definePropert = {}, _defineProperty(_Object$definePropert, null, {
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
}), _defineProperty(_Object$definePropert, '+', {
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
}), _defineProperty(_Object$definePropert, '-', {
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
}), _defineProperty(_Object$definePropert, '*', {
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
}), _defineProperty(_Object$definePropert, '/', {
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
}), _defineProperty(_Object$definePropert, '**', {
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
}), _defineProperty(_Object$definePropert, '...', {
  get: function get() {
    var res = function res(a, b) {
      return Array.isArray(a) ? a.concat(b) : Array.isArray(b) ? b.concat(a) : [a, b];
    };

    res.code = '...';
    res.base = [];
    return res;
  },
  set: function set() {
    return '...';
  }
}), _Object$definePropert)));

var PieceWiseMathOfTT =
/*#__PURE__*/
function () {
  /**
  * constructor
  *
  * @param  {(Object|Array|MathOfT)} params
  * @param  {Array} params.mathFunctionArray the MathOfT instances if params is object
  */
  function PieceWiseMathOfTT(params) {
    _classCallCheck(this, PieceWiseMathOfTT);

    params = params || {};
    var mathFunctionArray = Array.isArray(params) ? params : params instanceof MathOfT ? [params] : params.mathFunctionArray;
    if (!Array.isArray(mathFunctionArray)) throw new TypeError('new PieceWiseMathOfT needs array');
    if (mathFunctionArray.length < 1) throw new ValueError('new PieceWiseMathOfT needs at least one function in single array parameter');
    this._mathFuncs = Array(mathFunctionArray.length);
    this.__segmentDivisors = Array(mathFunctionArray.length);

    for (var mathFuncIndex in mathFunctionArray) {
      var mathfunc = mathFunctionArray[mathFuncIndex];

      if (!(mathfunc instanceof MathOfT)) {
        throw new TypeError('new PieceWiseMathOfT can only have MathOfT');
      } else {
        this._mathFuncs[mathFuncIndex] = mathfunc;
        this.__segmentDivisors[mathFuncIndex] = mathfunc.__segmentDivisor;
      }
    } // Object.freeze(this._mathFuncs);

  }

  _createClass(PieceWiseMathOfTT, [{
    key: "mathFuncN",

    /**
    * mathFuncN - get MathOfT instances corresponding
    * to provided index/indices n
    *
    * @param  {(Array<Number>|Number)} [n=0] number or Array of number indices
    * @return {Array} Array<MathOfT>
    */
    value: function mathFuncN(n) {
      var _this3 = this;

      n = n || 0;

      if (typeof n === 'number') {
        return this.mathFuncs[n % this.numMathFuncs];
      } else if (Array.isArray(n)) {
        if (!MathOfT.ARENUMBERS.apply(MathOfT, _toConsumableArray(n))) {
          return this.MathFuncsN(0);
        } else {
          var mathfuncs = n.map(function (v) {
            return _this3.mathFuncN(v);
          });
          return mathfuncs; //new PieceWiseMathOfTT(mathfuncs);
        }
      }
    }
  }, {
    key: "ofTT",
    value: function ofTT(tt) {
      var _this4 = this;

      var __segmentDivisors = this.segmentDivisors;
      var _runningSegmentsArr = this.runningSegmentsArr;
      var max = _runningSegmentsArr[_runningSegmentsArr.length - 1]; // console.info(tt, this.__segmentDivisors, _runningSegmentDivisors, max);

      tt = tt % max; // console.info(tt);

      var RESULT,
          done = false;

      _runningSegmentsArr.reduce(function (accumulator, runningSegment, segmentIndex) {
        var mathFunc, t;

        if (tt < runningSegment && !done) {
          // when the tt is less than val in running segment divisors,
          // it means that we should seek the function from the mathfunc
          // at index t correspomding to tt - previous val  or tt - 0
          mathFunc = _this4.mathFuncs[segmentIndex];
          t = tt - accumulator;
          RESULT = mathFunc.ofT(t * mathFunc.dt); // console.info(accumulator, runningSegment, segmentIndex, mathFunc._terms.toString(), `tt: ${tt}, t: ${t}, max: ${max}`, RESULT);

          done = true;
        }

        return runningSegment;
      }, 0); // console.info(RESULT);


      return RESULT;
    }
  }, {
    key: "ofAllTTinN",
    value: function ofAllTTinN(n) {
      n = n || 0;
      return this.mathFuncN(n).reduce(function (acc, mathfunc) {
        return acc.concat.apply(acc, _toConsumableArray(mathfunc));
      }, []);
    }
  }, {
    key: "map",
    value: function map(callback, thisArg) {
      if (!(callback instanceof Function)) throw new TypeError('map needs Function callback');
      return this.mathFuncs.map(callback, thisArg);
    }
  }, {
    key: "mapTOp",
    value: function mapTOp(callback, thisArg) {
      if (!(callback instanceof Function)) throw new TypeError('map needs Function callback');
      return this.mathFuncs.map(function (mathFunc) {
        return mathFunc.mapTOp(callback, thisArg);
      });
    }
  }, {
    key: "numMathFuncs",
    get: function get() {
      return this._mathFuncs.length;
    }
  }, {
    key: "mathFuncs",
    get: function get() {
      return this._mathFuncs;
    }
  }, {
    key: "copy",
    get: function get() {
      return new PieceWiseMathOfTT(this.mathFuncs);
    }
  }, {
    key: "ranges",
    get: function get() {
      var result = [];

      for (var i = 0; i < this.mathFuncs.length; i++) {
        result[i] = this.mathFuncs[i].range;
      }

      return result;
    }
  }, {
    key: "segmentDivisors",
    get: function get() {
      return this.__segmentDivisors;
    }
  }, {
    key: "runningSegmentsArr",
    get: function get() {
      // console.log('runningSegmentDivisors')
      var arrcopy = Array.from(this.__segmentDivisors); // console.log(arrcopy)

      return arrcopy.map(function (v, i, a) {
        return a[i] = i == 0 ? v + 1 : v + 1 + a[i - 1];
      });
    }
  }, {
    key: "totalNumSegments",
    get: function get() {
      return this.runningSegmentsArr.reduce(function (a, v) {
        return a + v;
      }, 0);
    }
  }, {
    key: "segmentDivisorsString",
    get: function get() {
      return this.__segmentDivisors.join("");
    }
  }, {
    key: "numFuncs",
    get: function get() {
      return this.mathFuncs.length;
    }
  }, {
    key: "dtt",
    get: function get() {
      return (
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5() {
          var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, mathFunc;

          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _iteratorNormalCompletion2 = true;
                  _didIteratorError2 = false;
                  _iteratorError2 = undefined;
                  _context5.prev = 3;
                  _iterator2 = this.mathFuncs[Symbol.iterator]();

                case 5:
                  if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                    _context5.next = 12;
                    break;
                  }

                  mathFunc = _step2.value;
                  _context5.next = 9;
                  return mathFunc.dt;

                case 9:
                  _iteratorNormalCompletion2 = true;
                  _context5.next = 5;
                  break;

                case 12:
                  _context5.next = 18;
                  break;

                case 14:
                  _context5.prev = 14;
                  _context5.t0 = _context5["catch"](3);
                  _didIteratorError2 = true;
                  _iteratorError2 = _context5.t0;

                case 18:
                  _context5.prev = 18;
                  _context5.prev = 19;

                  if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                  }

                case 21:
                  _context5.prev = 21;

                  if (!_didIteratorError2) {
                    _context5.next = 24;
                    break;
                  }

                  throw _iteratorError2;

                case 24:
                  return _context5.finish(21);

                case 25:
                  return _context5.finish(18);

                case 26:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this, [[3, 14, 18, 26], [19,, 21, 25]]);
        })
      );
    }
  }, {
    key: "tt",
    get: function get() {
      return (
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee6() {
          var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, mathFunc;

          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _iteratorNormalCompletion3 = true;
                  _didIteratorError3 = false;
                  _iteratorError3 = undefined;
                  _context6.prev = 3;
                  _iterator3 = this.mathFuncs[Symbol.iterator]();

                case 5:
                  if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                    _context6.next = 12;
                    break;
                  }

                  mathFunc = _step3.value;
                  _context6.next = 9;
                  return _toConsumableArray(mathFunc.t());

                case 9:
                  _iteratorNormalCompletion3 = true;
                  _context6.next = 5;
                  break;

                case 12:
                  _context6.next = 18;
                  break;

                case 14:
                  _context6.prev = 14;
                  _context6.t0 = _context6["catch"](3);
                  _didIteratorError3 = true;
                  _iteratorError3 = _context6.t0;

                case 18:
                  _context6.prev = 18;
                  _context6.prev = 19;

                  if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                    _iterator3.return();
                  }

                case 21:
                  _context6.prev = 21;

                  if (!_didIteratorError3) {
                    _context6.next = 24;
                    break;
                  }

                  throw _iteratorError3;

                case 24:
                  return _context6.finish(21);

                case 25:
                  return _context6.finish(18);

                case 26:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this, [[3, 14, 18, 26], [19,, 21, 25]]);
        })
      );
    }
  }, {
    key: "ofFirstTT",
    get: function get() {
      return this.mathFuncs[0].ofFirstT;
    }
  }, {
    key: "ofLastTT",
    get: function get() {
      return this.mathFuncs[this.mathFuncs.length - 1].ofLastT;
    }
  }, {
    key: "ofAllTT",
    get: function get() {
      return (
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee7() {
          var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, mathFunc;

          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _iteratorNormalCompletion4 = true;
                  _didIteratorError4 = false;
                  _iteratorError4 = undefined;
                  _context7.prev = 3;
                  _iterator4 = this.mathFuncs[Symbol.iterator]();

                case 5:
                  if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                    _context7.next = 12;
                    break;
                  }

                  mathFunc = _step4.value;
                  _context7.next = 9;
                  return _toConsumableArray(mathFunc.ofAllT());

                case 9:
                  _iteratorNormalCompletion4 = true;
                  _context7.next = 5;
                  break;

                case 12:
                  _context7.next = 18;
                  break;

                case 14:
                  _context7.prev = 14;
                  _context7.t0 = _context7["catch"](3);
                  _didIteratorError4 = true;
                  _iteratorError4 = _context7.t0;

                case 18:
                  _context7.prev = 18;
                  _context7.prev = 19;

                  if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                    _iterator4.return();
                  }

                case 21:
                  _context7.prev = 21;

                  if (!_didIteratorError4) {
                    _context7.next = 24;
                    break;
                  }

                  throw _iteratorError4;

                case 24:
                  return _context7.finish(21);

                case 25:
                  return _context7.finish(18);

                case 26:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this, [[3, 14, 18, 26], [19,, 21, 25]]);
        })
      );
    }
  }, {
    key: Symbol.iterator,
    get: function get() {
      return (
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee8() {
          var TT, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, mathFunc, _arr2, _i2, t;

          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  TT = 0;
                  _iteratorNormalCompletion5 = true;
                  _didIteratorError5 = false;
                  _iteratorError5 = undefined;
                  _context8.prev = 4;
                  _iterator5 = this.mathFuncs[Symbol.iterator]();

                case 6:
                  if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                    _context8.next = 20;
                    break;
                  }

                  mathFunc = _step5.value;
                  _arr2 = _toConsumableArray(mathFunc.t());
                  _i2 = 0;

                case 10:
                  if (!(_i2 < _arr2.length)) {
                    _context8.next = 17;
                    break;
                  }

                  t = _arr2[_i2];
                  _context8.next = 14;
                  return [TT++, mathFunc.ofT(t)];

                case 14:
                  _i2++;
                  _context8.next = 10;
                  break;

                case 17:
                  _iteratorNormalCompletion5 = true;
                  _context8.next = 6;
                  break;

                case 20:
                  _context8.next = 26;
                  break;

                case 22:
                  _context8.prev = 22;
                  _context8.t0 = _context8["catch"](4);
                  _didIteratorError5 = true;
                  _iteratorError5 = _context8.t0;

                case 26:
                  _context8.prev = 26;
                  _context8.prev = 27;

                  if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                    _iterator5.return();
                  }

                case 29:
                  _context8.prev = 29;

                  if (!_didIteratorError5) {
                    _context8.next = 32;
                    break;
                  }

                  throw _iteratorError5;

                case 32:
                  return _context8.finish(29);

                case 33:
                  return _context8.finish(26);

                case 34:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this, [[4, 22, 26, 34], [27,, 29, 33]]);
        })
      );
    }
  }]);

  return PieceWiseMathOfTT;
}();

Object.defineProperties(PieceWiseMathOfTT, {
  COPY: {
    get: function get() {
      return function (pwmftt) {
        if (pwmftt instanceof PieceWiseMathOfTT) {
          return pwmftt.copy;
        }
      };
    },
    set: function set() {
      return null;
    }
  }
});

var PieceWiseXYZofTTT =
/*#__PURE__*/
function () {
  function PieceWiseXYZofTTT(params) {
    _classCallCheck(this, PieceWiseXYZofTTT);

    params = params || {};
    var result = {};
    var ttLength = 0;
    var segmentDivisorsString = ""; // debugger;

    for (var rIndex in PieceWiseXYZofTTT.R) {
      var R = PieceWiseXYZofTTT.R[rIndex]; // debugger;

      if (!(params[R] instanceof PieceWiseMathOfTT)) {
        throw new TypeError("params.".concat(R, " should be PieceWiseMathOfTT"));
      } else {
        ttLength = rIndex == 0 ? params[R].numFuncs : ttLength;
        segmentDivisorsString = rIndex == 0 ? params[R].segmentDivisorsString : segmentDivisorsString;

        if (params[R].numFuncs !== ttLength) {
          throw new ValueError("Shared Domain: each params".concat(R, ".numFuncs") + " should equal ".concat(ttLength));
        } else if (params[R].segmentDivisorsString !== segmentDivisorsString) {
          throw new ValueError("Shared Domain: each params".concat(R, ".segmentDivisorsString") + " should equal ".concat(segmentDivisorsString));
        }

        result[R] = params[R];
      }
    }

    this._xyz = result; // console.info(this._xyz)
  }

  _createClass(PieceWiseXYZofTTT, [{
    key: "mathFuncsN",

    /**
    * mathFuncsN -
    *
    * @param  {Number} n
    * @return {Array<MathOfT>}
    */
    value: function mathFuncsN(n) {
      var _this5 = this;

      n = Number.isInteger(n) ? n : 0;
      return PieceWiseXYZofTTT.R.map(function (r, i) {
        return _this5[r].mathFuncN(n);
      });
    }
  }, {
    key: "ofAllTTTinN",
    value: function ofAllTTTinN(n) {
      n = Number.isInteger(n) ? [n] : Array.isArray(n) ? n.filter(function (v) {
        return MathOfT.ARENUMBERS(v);
      }) : [0];
      var result = [];

      for (var i in n) {
        var mathfuncs = this.mathFuncsN(n[i]);
        var rows = [];
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = mathfuncs[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var mathfunc = _step6.value;
            rows.push(_toConsumableArray(mathfunc));
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
              _iterator6.return();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        for (var col = 0; col < rows[0].length; col++) {
          var subarr = [];

          for (var _i3 = 0; _i3 < rows.length; _i3++) {
            var row = rows[_i3];
            subarr.push(row[col]);
          }

          result.push(subarr);
        }
      }

      return result;
    }
  }, {
    key: "ofTTT",
    value: function ofTTT(ttt) {
      // console.log(ttt)
      return [ttt, this.x.ofTT(ttt), this.y.ofTT(ttt), this.z.ofTT(ttt)];
    }
  }, {
    key: "x",
    get: function get() {
      return this._xyz.x;
    }
  }, {
    key: "i",
    get: function get() {
      return this.x;
    }
  }, {
    key: "y",
    get: function get() {
      return this._xyz.y;
    }
  }, {
    key: "j",
    get: function get() {
      return this.x;
    }
  }, {
    key: "z",
    get: function get() {
      return this._xyz.z;
    }
  }, {
    key: "k",
    get: function get() {
      return this.x;
    }
  }, {
    key: "numMathFuncs",
    get: function get() {
      return this.x.numMathFuncs;
    }
  }, {
    key: "segmentDivisors",
    get: function get() {
      return this.x.segmentDivisors;
    }
  }, {
    key: "runningSegmentsArr",
    get: function get() {
      return this.x.runningSegmentsArr;
    }
  }, {
    key: "totalNumSegments",
    get: function get() {
      return this.x.totalNumSegments;
    }
  }, {
    key: "ranges",
    get: function get() {
      return this.x.ranges;
    }
  }, {
    key: "ofAllTTT",
    get: function get() {
      var result = {
        matrix: new Array(PieceWiseXYZofTTT.R.length)
      };

      for (var i in PieceWiseXYZofTTT.R) {
        var r = PieceWiseXYZofTTT.R[i];
        result[r] = _toConsumableArray(this[r].ofAllTT());
        result.matrix[i] = this[r].map(function (mathFunc) {
          return _toConsumableArray(mathFunc);
        });
      }

      return result;
    }
  }, {
    key: Symbol.iterator,
    get: function get() {
      return (
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee9() {
          var TTT, mathFuncIndex, xmathFunc, ymathFunc, zmathFunc, _arr3, _i4, t;

          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  TTT = 0; // let result = this.ofAllT();

                  _context9.t0 = regeneratorRuntime.keys(this.x.mathFuncs);

                case 2:
                  if ((_context9.t1 = _context9.t0()).done) {
                    _context9.next = 18;
                    break;
                  }

                  mathFuncIndex = _context9.t1.value;
                  // console.info(mathFuncIndex);
                  xmathFunc = this._xyz.x.mathFuncs[mathFuncIndex];
                  ymathFunc = this._xyz.y.mathFuncs[mathFuncIndex];
                  zmathFunc = this._xyz.z.mathFuncs[mathFuncIndex];
                  _arr3 = _toConsumableArray(xmathFunc.t());
                  _i4 = 0;

                case 9:
                  if (!(_i4 < _arr3.length)) {
                    _context9.next = 16;
                    break;
                  }

                  t = _arr3[_i4];
                  _context9.next = 13;
                  return [TTT++, xmathFunc.ofT(t), ymathFunc.ofT(t), zmathFunc.ofT(t)];

                case 13:
                  _i4++;
                  _context9.next = 9;
                  break;

                case 16:
                  _context9.next = 2;
                  break;

                case 18:
                  ;

                case 19:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, this);
        })
      );
    }
  }, {
    key: "ofLastTTT",
    get: function get() {
      return [this.totalNumSegments, this.x.ofLastTT, this.y.ofLastTT, this.z.ofLastTT];
    }
  }, {
    key: "ofFirstTTT",
    get: function get() {
      return [0, this.x.ofFirstTT, this.y.ofFirstTT, this.z.ofFirstTT];
    }
  }]);

  return PieceWiseXYZofTTT;
}();

Object.defineProperty(PieceWiseXYZofTTT, 'R', {
  get: function get() {
    return MathOfT.R;
  },
  set: function set() {
    return null;
  }
});
module.exports = {
  MathOfT: MathOfT,
  PieceWiseMathOfTT: PieceWiseMathOfTT,
  PieceWiseXYZofTTT: PieceWiseXYZofTTT,
  R: PieceWiseXYZofTTT.R //dimensionality
  // TODO rewrite tests to comply with common usage patterns.
  // let arr = [new MathOfT({terms: [t =>2*t]}), new MathOfT({terms: [t =>3*t]})];
  // let pw = new PieceWiseMathOfTT({mathFunctionArray: arr});
  // let pwxyz = new PieceWiseXYZofTTT({x: pw, y: pw, z:pw});
  // // pwxyz.ofAllTTT //should have equal x,y,z to above
  // // [...pwxyz] //should corresopnd to pwxyz.ofAllTTT, but in form of array of 3d arrays
  // console.error(pw);
  // console.error(pwxyz);
  // // console.error([...pwxyz]);
  // console.log(pwxyz.ofTTT(.4));
  // console.error([...pwxyz][4]);
  // console.assert([...pwxyz][5][1] == pw.ofTT(5))
  // debugger;
  //
  // tests:
  // a = new PieceWiseMathOfTT([new MathOfT(), new MathOfT()])
  // PieceWiseMathOfTT {_mathFuncs: Array(2), __segmentDivisors: Array(2)}
  // a
  // PieceWiseMathOfTT {_mathFuncs: Array(2), __segmentDivisors: Array(2)}
  // a.segmentDivisorsString
  // "1010"
  // a.segmentDivisors
  // (2) [10, 10]
  // a.numSegmentDivisors
  // 20

};