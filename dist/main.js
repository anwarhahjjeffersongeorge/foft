/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/mathoft.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/mathoft.js":
/*!************************!*\
  !*** ./src/mathoft.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n* @class MathOfT is a class that evaluates the\n* properties of Function or MathOfT objects that\n* generally receive and return objects of type\n*  - Number\n*  - Array of Number,\n*  - Array of Array\n* @example\n* // returns a MathOfT instance\n* let MoT = new MathOfT()\n* @example\n* // returns a MathOfT instance that\n* // describes an equation over the range [0,1] (inclusive)\n* // split into 22 segments (23) total points\n* let MoT = new MathOfT({\n*   range: [0, 1],\n*   segmentDivisor: 22,\n*   terms: (t) => t*2;\n* });\n* MathOfT also evaluates some of the properties\n* of the Function or MathOfT objects in its terms\n* @see MathOfT.ofT\n*/\n\nvar _Object$definePropert;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar _Symbol$iterator = Symbol.iterator;\n\nvar MathOfT =\n/*#__PURE__*/\nfunction () {\n  // static #test=1;//@babel/plugin-proposal-class-properties\n\n  /**\n  * constructor - create a MathOfT instance that evaluates its Function terms\n  *    when given some parameter \"t\".\n  * @param  {(Object|Function|Array)} params\n  * @param {(Number|Array.<Number>)} [params.range] Range of two numerical values over which t is evaluated inclusively. If given a single number t0, range is [-t0,t0]\n  * @param {Number} [params.segmentDivisor] The number of segments to divide the range into when picking t values for evaluation.\n  * @param {(Function|Array.<Function>|Array.<MathOfT>)} [params.terms=[]] A function that accepts a parameter t and returns a result of some operation on t\n  * @param {boolean} [params.rangeoverride=false] if true, will override any range provided and set range equal to [0, params.segmentDivisor]\n  * @throws TypeError\n  */\n  function MathOfT(params) {\n    _classCallCheck(this, MathOfT);\n\n    params = params || {};\n\n    if (typeof params === 'function') {\n      var thefunc = params;\n      params = {\n        terms: thefunc\n      };\n    } else if (Array.isArray(params)) {\n      var thearray = params;\n      params = {\n        range: thearray\n      };\n    } // define the division of the evaluation range\n\n\n    var segmentDivisor = params.segmentDivisor || MathOfT.DEFAULT_SEGMENT_DIVISOR;\n\n    if (typeof segmentDivisor !== 'number' || Number.isNaN(segmentDivisor)) {\n      throw new TypeError('segmentDivisor should be non-NaN number');\n    }\n\n    this.__segmentDivisor = segmentDivisor;\n    var rangeoverride = typeof params.rangeoverride === 'boolean' ? params.rangeoverride : false; // create an evaluation range\n\n    var range = rangeoverride ? [0, this.__segmentDivisor] : params.range || MathOfT.DEFAULT_RANGE;\n    range = typeof range === 'number' ? [-range, range] : range;\n    if (!Array.isArray(range)) throw new TypeError('range should be array'); // if(range.length!==2) throw new RangeError('range should have two elements')\n\n    if (!MathOfT.ARENUMBERS.apply(MathOfT, _toConsumableArray(range))) throw new TypeError('range values should be numbers');\n    this._range = Array(range.length);\n\n    for (var rangeIndex in range) {\n      this._range[rangeIndex] = range[rangeIndex];\n    } // this MathOfT can use these terms\n    // define terms\n\n\n    var terms = params.terms || [function (t) {\n      return t;\n    }];\n    terms = typeof terms === 'function' ? [terms] : terms;\n\n    if (!Array.isArray(terms) && typeof terms !== 'function') {\n      throw new TypeError('params.terms should be array or function');\n    }\n\n    this._terms = [];\n\n    for (var termIndex in terms) {\n      var term = terms[termIndex]; // console.log(term);``\n\n      this.addTerm(term);\n    } // console.log(params.opcode)\n    // debugger;\n\n\n    this._opcode = params.opcode;\n  }\n  /**\n  * get terms - the Function terms of this MathOfT object\n  *\n  * @return {Array}\n  */\n\n\n  _createClass(MathOfT, [{\n    key: \"addTerm\",\n\n    /**\n    * addTerm - add a term to the terms of this MathOfT instance\n    *\n    * @param  {(function|MathOfT)} term A Function that takes a parameter (t) or\n    *   MathOfT\n    * @param @deprecated {boolean} [harmonize=false] if true, and term is a MathOfT\n    *  instance, this overwrites the range and segmentDivisor of term to make them\n    *  equivalent for the same parameters of this instance.\n    * @returns {boolean} true if length of terms grew\n    */\n    value: function addTerm(term, harmonize) {\n      var numterms = this.terms.length;\n      harmonize = typeof harmonize === 'boolean' ? harmonize : false;\n\n      if (typeof term === 'function') {\n        this.terms.push(term);\n      } else if (term instanceof MathOfT) {\n        this.terms.push(term);\n\n        if (harmonize) {\n          term._range = this._range; // IMPORTANT\n\n          term.__segmentDivisor = this.__segmentDivisor;\n        }\n      }\n\n      return numterms == this.terms.length - 1;\n    }\n    /**\n    * get segmentDivisor The number of segment divisors\n    * (number of t evaluation points -1)\n    *   in this MathOfT\n    *\n    * @return {Number}\n    */\n\n  }, {\n    key: \"dSubrange\",\n\n    /**\n     * get dSubrange - given indices n & nn\n     * returns the delta between sub values in the MathOfT instance's\n     * evaluation range, or: range[nn%range.length]-range[n%range.length],\n     *\n     * when given no parameters, it uses 0 and 1\n     *\n     * @param {Number} [n=0] the starting range index.\n     * @param {Number} [nn=n+1%this.range.length] the end range index\n     * @return {Number}\n     * @throws {TypeError} when given non-number parameter\n     */\n    value: function dSubrange(n, nn) {\n      n = MathOfT.ISNUMBER(n) ? n : 0;\n\n      if (nn && !MathOfT.ISNUMBER(nn)) {\n        throw new TypeError(\"MathOfT.dSubRange only accepts Numbers, given \".concat(Array.prototype.slice.call(arguments)));\n      }\n\n      n = n % this._range.length;\n\n      if (!Number.isInteger(n)) {\n        throw new RangeError(\"MathOfT.dSubRange only accepts Integers, given \".concat(Array.prototype.slice.call(arguments)));\n      } // for this conditional, we use the explicit ISNUMBER to avoid logical\n      // error for zero case: if(0) is falsy\n\n\n      nn = MathOfT.ISNUMBER(nn) ? nn % this._range.length : (n + 1) % this._range.length;\n\n      if (!Number.isInteger(nn)) {\n        throw new RangeError(\"MathOfT.dSubRange only accepts Integers, given \".concat(Array.prototype.slice.call(arguments)));\n      }\n\n      return this._range[nn] - this._range[n];\n    }\n    /**\n    * get drange - the delta between the the first and final values of the evaluation range\n    *\n    * @return {Number}\n    */\n\n  }, {\n    key: \"subT\",\n\n    /**\n     * subT - get a generator function that yields segmentDivisor+1 values of t spanning the range [this._range[n], this._range[n+1]], where if n or n+1 fall beyond the bounds of this._range.length, they are constrained to fit\n     *\n     * @param  {Number} [n=0] integer start index of range\n     *\n     * @return {type}   description\n     */\n    value: function subT(n, omitLast) {\n      omitLast = typeof omitLast === 'boolean' ? omitLast : false;\n      var defaultN = 0;\n      n = MathOfT.ISNUMBER(n) ? n % this.range.length : defaultN;\n      var a = this.range[n],\n          b = this.range[(n + 1) % this.range.length];\n      var tsubmax = omitLast ? this.segmentDivisor - 1 : this.segmentDivisor;\n      var dt = (b - a) / this.segmentDivisor;\n      /**\n      * @yields {Number}\n      */\n\n      return (\n        /*#__PURE__*/\n        regeneratorRuntime.mark(function _callee() {\n          var tsubindex;\n          return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  tsubindex = 0;\n\n                case 1:\n                  if (!(tsubindex <= tsubmax)) {\n                    _context.next = 7;\n                    break;\n                  }\n\n                  _context.next = 4;\n                  return a + tsubindex * dt;\n\n                case 4:\n                  tsubindex++;\n                  _context.next = 1;\n                  break;\n\n                case 7:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee, this);\n        })\n      );\n    }\n    /**\n    * get t - get a Generator yielding all values of t across instance evaluation range\n    * @example\n    * // get the default t values for which a MathOfT is\n    * // evaluated\n    * let MoT = new MathOfT({\n    *   range: [0, Math.PI*2],\n    *   segmentDivisor: 22,\n    *   terms: (t) => [sin(t), cos(t)];\n    * });\n    * let t = [...MoT.t()]\n    * @return {Generator<Number>}\n    */\n\n  }, {\n    key: \"normalizeT\",\n\n    /**\n    * normalizeT - given a Number t, return a normalized (to MathOfT.DEFAULT_RANGE)\n    * representation of how far along t is in the evaluation\n    * range of this MathOfT\n    *\n    * If t falls out of bounds of range, the value is returned as -/+ Infinity\n    *\n    * If the evaluation range has more than two values, e.g. [0,1,2],\n    * then normalizeT checks in each subrange, e.g. [0,1], [1,2]\n    * and returns an Array of normalized values corresponding to each range\n    *\n    * @see DEFAULT_RANGE\n    * @param  {Number} [t=0]\n    * @return {Number|Array<Number>}\n    */\n    value: function normalizeT(t) {\n      if (!MathOfT.ISNUMBER(t)) {\n        t = 0;\n      }\n\n      var test = function test(tt, range) {\n        var _MathOfT$DEFAULT_RANG = _slicedToArray(MathOfT.DEFAULT_RANGE, 2),\n            normA = _MathOfT$DEFAULT_RANG[0],\n            normB = _MathOfT$DEFAULT_RANG[1];\n\n        var minNorm = normA < normB ? normA : normB;\n        var maxNorm = normB > normA ? normB : normA;\n        var res = (tt - range[0]) / (range[1] - range[0]); //[0-1]\n\n        res = normA + (normB - normA) * res; //[normA, normB]\n\n        if (!MathOfT.INRANGE(res, normA, normB)) {\n          res = res < minNorm ? -Infinity : Infinity;\n        }\n\n        return res;\n      };\n\n      var arr = Array(this.range.length - 1);\n\n      for (var r = 0; r < arr.length; r++) {\n        arr[r] = test(t, [this.range[r], this.range[r + 1]]);\n      }\n\n      return arr.length == 1 ? arr[0] : arr;\n    }\n    /**\n    * ofTNormal - given a Number tNormal between -1 and 1, inclusive,\n    * return the evaluation of this MathOfT on the t corresponding\n    * to the value of t in the complete evaluation range represented by the\n    * given tNormal\n    * @see ofT\n    * @param  {Number} [tNormal=[-1,1]]\n    * @return {(Number|Array.<Number>)}\n    */\n\n  }, {\n    key: \"ofTNormal\",\n    value: function ofTNormal(tNormal) {\n      tNormal = typeof tNormal === 'number' ? tNormal > 1 || tNormal < -1 ? Math.sign(tNormal) * 1 : tNormal : 1;\n      var t = this.range[0] + tNormal * (this.range[1] - this.range[0]); // debugger;\n\n      return this.ofT(t);\n    }\n    /**\n    * ofT - evaluate all of the terms held by this MathofT for the\n    * given t value.\n    *\n    * When evaluating a Function term, the function can is called with\n    * a bound this containing information about t:\n    * @see normalizeT\n    * @see range\n    * @see derange\n    * @see t0\n    * @see segmentDivisor\n    * It also receives a value i corresponding to the index that this t\n    * might correspond to in an Array of ofT results for the evaluation range.\n    *\n    * @param  {Number} t\n    * @return {(Number|Array.<Number>|Array<Array>)}\n    */\n\n  }, {\n    key: \"ofT\",\n    value: function ofT(t) {\n      t = typeof t === 'number' ? t : this.range[0]; // debugger;\n\n      var tthis = _typeof(this.tthis) === 'object' ? this.tthis : {\n        \"t\": {\n          t: t,\n          tNormal: this.normalizeT(t),\n          tNormalRemaining: 1 - this.normalizeT(t),\n          trange: this.range,\n          drange: this.drange,\n          t0: this.t0,\n          segmentDivisor: this.segmentDivisor,\n          i: Math.round(t * this.segmentDivisor)\n        }\n      };\n      var result = [];\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = this._terms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var _term = _step.value;\n\n          if (typeof _term === 'function') {\n            result.push(_term.call(tthis, t));\n          } else if (_term instanceof MathOfT) {\n            // debugger;\n            // result.push(_term.ofT.call(tthis, t)); //OVERRIDE?\n            var resultsubarr = [];\n\n            if (_term.opcode) {\n              resultsubarr = _toConsumableArray(_term.ofAllTOp(null, _term.opcode));\n            } else {\n              resultsubarr = _toConsumableArray(_term.ofAllT());\n            }\n\n            result.push(resultsubarr);\n          }\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return != null) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      return result.length == 1 ? result[0] : result;\n    }\n    /**\n    * ofTOp - Calculate the value of performing an operation _op on the\n    * values returned by calculating this MathOfT instance's terms for\n    * some evaluation value t.\n    *\n    * @see ofT\n    *\n    * @param  {Number} t the t to evaluate\n    * @param  {type} _acc an accumulator value to start with\n    * @see MathOfT.OPS -> base\n    * @param  {type} [_op=this.opcode]  an opcode to perform\n    * @return {(Number|Array.<Number>|Array.<Array>)}\n    */\n\n  }, {\n    key: \"ofTOp\",\n    value: function ofTOp(t, _acc, _op) {\n      _op = _op in MathOfT.OPS ? MathOfT.OPS[_op] : this.opcode; // debugger;\n\n      _acc = !_acc ? _op.base : _acc;\n      _acc = typeof _acc === 'number' && !Number.isNaN(_acc) ? _acc : NaN; // debugger;\n\n      if (this.terms.length == 1) {\n        // console.log('non')\n        var _ofT = this.ofT(t);\n\n        var result;\n\n        if (!Array.isArray(_ofT) ^ !Array.isArray(_acc)) {\n          if (!Array.isArray(_acc)) {\n            result = _ofT.map(function (v, i) {\n              return _op(v, _acc);\n            });\n          } else if (!Array.isArray(_ofT)) {\n            result = _acc.map(function (v, i) {\n              return _op(v, _ofT);\n            });\n          }\n        } else if (Array.isArray(_ofT) && Array.isArray(_acc)) {\n          result = _ofT.map(function (v, i) {\n            return _op(v, _acc[i]);\n          });\n        } else {\n          result = _op(v, _acc);\n        } // debugger;\n\n\n        return result;\n      } else {\n        return this.ofT(t).reduce(function (acc, valarray, i, arr) {\n          if (i == 0) {\n            // console.warn(valarray, acc)\n            return valarray;\n          } // console.info(valarray, acc)\n\n\n          var result; // debugger;\n\n          if (!Array.isArray(valarray) ^ !Array.isArray(acc)) {\n            valarray = Array.isArray(valarray) ? valarray : Array(MathOfT.R.length).fill(valarray);\n            var accvec = Array.isArray(acc) ? acc : Array(MathOfT.R.length).fill(acc);\n            result = valarray.map(function (vv, ii) {\n              return _op(accvec[ii], vv);\n            });\n          } else if (Array.isArray(valarray) && Array.isArray(acc)) {\n            result = valarray.map(function (vv, ii) {\n              return _op(acc[ii], vv);\n            });\n          } else {\n            var valnum = typeof valarray === 'number' ? valarray : NaN;\n            result = Number.isNaN(valnum) || Number.isNaN(acc) ? NaN : _op(acc, valnum);\n          }\n\n          return result;\n        }, _acc);\n      }\n    }\n    /**\n    * get ofFirstT - return the ofT for the first t in the evaluation range\n    *\n    * @see t0\n    * @see ofT\n    * @return {(Number|Array.<Number>|Array.<Array>)}\n    */\n\n  }, {\n    key: \"mapTOp\",\n\n    /**\n    * mapTOp - apply the Array.map native function to the elements of\n    * this.ofAllTOp() with the given callback function and this argument\n    * @see Array.map\n    * @see ofAllTOp\n    * @param  {Function} [callback] callback to apply\n    * @param  {Object} [thisArg]  this argument\n    * @return {Array}         map result\n    */\n    value: function mapTOp(callback, thisArg) {\n      if (!(callback instanceof Function)) throw new TypeError('map needs Function callback');\n      return _toConsumableArray(this.ofAllTOp()).map(callback, thisArg);\n    }\n    /**\n    * map - apply the Array.map native function to the elements yielded by\n    * this[Symbol.iterator] with the given callback function and this argument\n    *    *\n    * @see get [Symbol.iterator]\n    * @param  {Function} [callback] callback to apply\n    * @param  {Object} [thisArg]  this argument\n    * @return {Array}         map result\n    */\n\n  }, {\n    key: \"map\",\n    value: function map(callback, thisArg) {\n      if (!(callback instanceof Function)) throw new TypeError('map needs Function callback');\n      return _toConsumableArray(this).map(callback, thisArg);\n    }\n    /**\n     * @static R - dimensional labeling\n     */\n\n  }, {\n    key: \"terms\",\n    get: function get() {\n      return this._terms;\n    }\n  }, {\n    key: \"segmentDivisor\",\n    get: function get() {\n      return this.__segmentDivisor;\n    }\n    /**\n     * get numSegments - The number of actual segments the MathOfT divides the evaluation range into\n     *\n     * @return {Number}\n     */\n\n  }, {\n    key: \"numSegments\",\n    get: function get() {\n      return this.segmentDivisor + 1;\n    }\n  }, {\n    key: \"dt\",\n    get: function get() {\n      return this.drange / this.__segmentDivisor;\n    }\n    /**\n    * get range - the evaluation range is the minimum and maximum values for t\n    *\n    * @return {Array.<Number>}\n    */\n\n  }, {\n    key: \"range\",\n    get: function get() {\n      return this._range;\n    }\n    /**\n    * get t0 - the first value of t in the evaluation range\n    * @return {Number}\n    */\n\n  }, {\n    key: \"t0\",\n    get: function get() {\n      return this.range[0];\n    }\n    /**\n    * get opcode - a MathOfT can have an opcode as defined in\n    * MathOfT.OPS. These codes represent mathematical operations\n    * between Numbers and other types. They are useful for performing\n    * said operations when the Function or MathOfT in the terms\n    * Array\n    *\n    * @see MathOfT.OPS\n    * @see terms\n    * @return {string} @see MathOfT.OPS\n    */\n\n  }, {\n    key: \"opcode\",\n    get: function get() {\n      return this._opcode;\n    }\n    /**\n    * set opcode - set the opcode to one of the opcodes\n    *  defined in MathOfT.OPS\n    *\n    * @param  {string} opcode @see MathOfT.OPS\n    */\n    ,\n    set: function set(opcode) {\n      if (MathOfT.ISOP(opcode)) {\n        this._opcode = opcode;\n      }\n    }\n  }, {\n    key: \"drange\",\n    get: function get() {\n      return this._range[this._range.length - 1] - this._range[0];\n    }\n    /**\n    * get dabsrange - the absolute value of the delta\n    * between the first and final values of the evaluation range\n    *\n    * @return {Number}\n    */\n\n  }, {\n    key: \"dabsrange\",\n    get: function get() {\n      return Math.abs(this.drange);\n    }\n  }, {\n    key: \"t\",\n    get: function get() {\n      var rangelimit = this.range.length - 2;\n      /**\n      * @yields {Number}\n      */\n\n      return (\n        /*#__PURE__*/\n        regeneratorRuntime.mark(function _callee2() {\n          var rangeIndex;\n          return regeneratorRuntime.wrap(function _callee2$(_context2) {\n            while (1) {\n              switch (_context2.prev = _context2.next) {\n                case 0:\n                  rangeIndex = 0;\n\n                case 1:\n                  if (!(rangeIndex <= rangelimit)) {\n                    _context2.next = 6;\n                    break;\n                  }\n\n                  return _context2.delegateYield(rangeIndex == rangelimit ? this.subT(rangeIndex)() : this.subT(rangeIndex, true)(), \"t0\", 3);\n\n                case 3:\n                  rangeIndex++;\n                  _context2.next = 1;\n                  break;\n\n                case 6:\n                case \"end\":\n                  return _context2.stop();\n              }\n            }\n          }, _callee2, this);\n        })\n      );\n    }\n  }, {\n    key: \"ofFirstT\",\n    get: function get() {\n      return this.ofT(this.t0);\n    }\n    /**\n    * get ofLastT - return the ofT for the final t in the evaluation range\n    *\n    * @see range\n    * @see ofT\n    * @return {(Number|Array.<Number>|Array.<Array>)}\n    */\n\n  }, {\n    key: \"ofLastT\",\n    get: function get() {\n      return this.ofT(this._range[this._range.length - 1]);\n    }\n    /**\n    * get ofAllT - get a Generator that yields\n    * all Array=[t, this.ofT(t)] for t in evaluation range\n    * @see ofT\n    * @return {Generator} yielding Array in form [t, this.ofT(t)]\n    */\n\n  }, {\n    key: \"ofAllT\",\n    get: function get() {\n      return (\n        /*#__PURE__*/\n        regeneratorRuntime.mark(function _callee3() {\n          var _arr2, _i2, t;\n\n          return regeneratorRuntime.wrap(function _callee3$(_context3) {\n            while (1) {\n              switch (_context3.prev = _context3.next) {\n                case 0:\n                  _arr2 = _toConsumableArray(this.t());\n                  _i2 = 0;\n\n                case 2:\n                  if (!(_i2 < _arr2.length)) {\n                    _context3.next = 9;\n                    break;\n                  }\n\n                  t = _arr2[_i2];\n                  _context3.next = 6;\n                  return [t, this.ofT(t)];\n\n                case 6:\n                  _i2++;\n                  _context3.next = 2;\n                  break;\n\n                case 9:\n                case \"end\":\n                  return _context3.stop();\n              }\n            }\n          }, _callee3, this);\n        })\n      );\n    }\n    /**\n    * get - Symbol.iterator get a Generator that yields\n    *    all this.ofT(t) for t in evaluation range\n    * @see ofT\n    * @return {Generator} Generator function yielding this.ofT(t)\n    */\n\n  }, {\n    key: _Symbol$iterator,\n    get: function get() {\n      return (\n        /*#__PURE__*/\n        regeneratorRuntime.mark(function _callee4() {\n          var _this = this;\n\n          return regeneratorRuntime.wrap(function _callee4$(_context4) {\n            while (1) {\n              switch (_context4.prev = _context4.next) {\n                case 0:\n                  return _context4.delegateYield(_toConsumableArray(this.t()).map(function (t, i) {\n                    return _this.ofT(t);\n                  }), \"t0\", 1);\n\n                case 1:\n                case \"end\":\n                  return _context4.stop();\n              }\n            }\n          }, _callee4, this);\n        })\n      );\n    }\n    /**\n    * get ofAllTOp - get a Generator that yields all\n    * this.ofTOp(_t, _acc, _op) for _t in evaluation range,\n    * _acc, _op provided by user\n    *\n    * @see ofAllTOp\n    * @return {Generator}  description\n    */\n\n  }, {\n    key: \"ofAllTOp\",\n    get: function get() {\n      return (\n        /*#__PURE__*/\n        regeneratorRuntime.mark(function _callee5(_acc, _op) {\n          var _this2 = this;\n\n          return regeneratorRuntime.wrap(function _callee5$(_context5) {\n            while (1) {\n              switch (_context5.prev = _context5.next) {\n                case 0:\n                  return _context5.delegateYield(_toConsumableArray(this.t()).map(function (_t, i) {\n                    return _this2.ofTOp(_t, _acc, _op);\n                  }), \"t0\", 1);\n\n                case 1:\n                case \"end\":\n                  return _context5.stop();\n              }\n            }\n          }, _callee5, this);\n        })\n      );\n    }\n  }], [{\n    key: \"ISOP\",\n\n    /**\n     * @static ISOP - given a string codeToParse, return true when code is found\n     *  in MathOfT.OPDICT\n     * @see MathOfT.OPDICT\n     * @param  {string} codeToParse\n     * @return {boolean}\n     */\n    value: function ISOP(codeToParse) {\n      return MathOfT.OPDICT.includes(codeToParse);\n    }\n    /**\n     * @static OPPARSE - given a string codeToParse, return\n     * the corresponding operation function from MathOfT.OPS\n     *\n     * @see MathOfT.OPS\n     * @param  {string} codeToParse\n     * @return {function} MathOfT.OPS function corresponding to op\n     */\n\n  }, {\n    key: \"OPPARSE\",\n    value: function OPPARSE(codeToParse) {\n      return MathOfT.ISOP(codeToParse) ? MathOfT.OPS[codeToParse] : MathOfT.OPS[null];\n    }\n    /**\n     * @static OPS - an object containing operations, or ops, that\n     * perform mathematical functions corresponding to their keys\n     *\n     * @see MathOfT.ISOP\n     * @see MathOfT.OPDICT\n     * @see MathOfT.OPPARSE\n     * @see MathOfT.ARENUMBERS\n     */\n\n  }]);\n\n  return MathOfT;\n}();\n\n_defineProperty(MathOfT, \"R\", ['x', 'y', 'z']);\n\n_defineProperty(MathOfT, \"ISNUMBER\", function () {\n  return arguments.length == 1 && typeof arguments[0] === 'number';\n});\n\n_defineProperty(MathOfT, \"ARENUMBERS\", function () {\n  if (arguments.length == 0) {\n    return false;\n  } else {\n    return Array.prototype.slice.call(arguments).every(function (v) {\n      return Array.isArray(v) ? MathOfT.ARENUMBERS.apply(MathOfT, _toConsumableArray(v)) : MathOfT.ISNUMBER(v);\n    });\n  }\n});\n\n_defineProperty(MathOfT, \"INRANGE\", function (n, m, mm) {\n  var test = function test(a, b, c) {\n    // console.log(a,b,c)\n    return a > b ? a <= c : a < b ? a >= c : true; // a == b\n  };\n\n  if (!(MathOfT.ARENUMBERS.apply(MathOfT, arguments) && MathOfT.ISNUMBER(n))) {\n    return false;\n  } else {\n    if (arguments.length == 1) {\n      return MathOfT.INRANGE(n, MathOfT.DEFAULT_RANGE);\n    } else if (Array.isArray(m)) {\n      // console.log(n,m)\n      return m.length == 1 ? test(n, 0, m[0]) : test(n, m[0], m[m.length - 1]);\n    } else if (MathOfT.ISNUMBER(m)) {\n      if (!MathOfT.ISNUMBER(mm)) {\n        return test(n, 0, m);\n      } else if (MathOfT.ISNUMBER(mm)) {\n        return test(n, m, mm);\n      }\n    } else {\n      return false;\n    }\n  }\n});\n\n_defineProperty(MathOfT, \"OPDICT\", [null, '+', '-', '*', '/', '**']);\n\n_defineProperty(MathOfT, \"OPS\", Object.defineProperties({}, (_Object$definePropert = {}, _defineProperty(_Object$definePropert, null, {\n  get: function get() {\n    function res() {\n      return Array.prototype.slice.call(arguments);\n    }\n\n    ;\n    res.code = null;\n    res.base = null;\n    return res;\n  },\n  set: function set() {\n    return null;\n  }\n}), _defineProperty(_Object$definePropert, '+', {\n  get: function get() {\n    var base = 0;\n\n    function res() {\n      return MathOfT.ARENUMBERS.apply(MathOfT, arguments) ? Array.prototype.slice.call(arguments).reduce(function (acc, c, i) {\n        return i == 0 ? c : acc + c;\n      }) : NaN;\n    }\n\n    res.code = '+';\n    res.base = base;\n    return res;\n  },\n  set: function set() {\n    return '+';\n  }\n}), _defineProperty(_Object$definePropert, '-', {\n  get: function get() {\n    var base = 0;\n\n    function res() {\n      return MathOfT.ARENUMBERS.apply(MathOfT, arguments) ? Array.prototype.slice.call(arguments).reduce(function (acc, c, i) {\n        return i == 0 ? c : acc - c;\n      }, base) : NaN;\n    } // let res = (a, b) => (MathOfT.ARENUMBERS(a,b))\n    // ? a - b\n    // : NaN;\n\n\n    res.code = '-';\n    res.base = base;\n    return res;\n  },\n  set: function set() {\n    return '-';\n  }\n}), _defineProperty(_Object$definePropert, '*', {\n  get: function get() {\n    var base = 1;\n\n    function res() {\n      return MathOfT.ARENUMBERS.apply(MathOfT, arguments) ? Array.prototype.slice.call(arguments).reduce(function (acc, c, i) {\n        return i == 0 ? c : acc * c;\n      }, base) : NaN;\n    }\n\n    res.code = '*';\n    res.base = base;\n    return res;\n  },\n  set: function set() {\n    return '*';\n  }\n}), _defineProperty(_Object$definePropert, '/', {\n  get: function get() {\n    var base = 1;\n\n    function res() {\n      return MathOfT.ARENUMBERS.apply(MathOfT, arguments) ? Array.prototype.slice.call(arguments).reduce(function (acc, c, i) {\n        return i == 0 ? c : acc / c;\n      }, base) : NaN;\n    }\n\n    res.code = '/';\n    res.base = base;\n    return res;\n  },\n  set: function set() {\n    return '/';\n  }\n}), _defineProperty(_Object$definePropert, '**', {\n  get: function get() {\n    var base = 1;\n\n    function res() {\n      return MathOfT.ARENUMBERS.apply(MathOfT, arguments) ? Array.prototype.slice.call(arguments).reduce(function (acc, c, i) {\n        return i == 0 ? c : Math.pow(acc, c);\n      }, base) : NaN;\n    }\n\n    res.code = '**';\n    res.base = base;\n    return res;\n  },\n  set: function set() {\n    return '**';\n  }\n}), _defineProperty(_Object$definePropert, '...', {\n  get: function get() {\n    var res = function res(a, b) {\n      return Array.isArray(a) ? a.concat(b) : Array.isArray(b) ? b.concat(a) : [a, b];\n    };\n\n    res.code = '...';\n    res.base = [];\n    return res;\n  },\n  set: function set() {\n    return '...';\n  }\n}), _Object$definePropert)));\n\n_defineProperty(MathOfT, \"DEFAULT_SEGMENT_DIVISOR\", 10);\n\n_defineProperty(MathOfT, \"DEFAULT_RANGE\", [-1, 1]);\n\nmodule.exports = {\n  MathOfT: MathOfT\n};\n\n//# sourceURL=webpack:///./src/mathoft.js?");

/***/ })

/******/ });