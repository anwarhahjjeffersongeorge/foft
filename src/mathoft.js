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
* @see MathOfT.ofT
*/
class MathOfT{

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
  constructor(params){
    params = params || {};
    if (typeof params === 'function'){
      let thefunc = params;
      params = {
        terms: thefunc
      };
    } else if(Array.isArray(params)){
      let thearray = params;
      params = {
        range: thearray
      }
    }

    // define the division of the evaluation range
    const segmentDivisor = params.segmentDivisor || MathOfT.DEFAULT_SEGMENT_DIVISOR;
    if(typeof segmentDivisor !== 'number' || Number.isNaN(segmentDivisor)){
      // console.log('NaN segment Divisor')
      throw new TypeError('segmentDivisor should be non-NaN number');
    }
    this.__segmentDivisor = segmentDivisor;

    let rangeoverride = (typeof params.rangeoverride === 'boolean')
    ? params.rangeoverride
    : false;

    // create an evaluation range
    let range = (rangeoverride)
    ? [0, this.__segmentDivisor]
    : params.range || MathOfT.DEFAULT_RANGE;
    range = (typeof range === 'number')
    ? [-range, range]
    : range;
    if(!Array.isArray(range)) throw new TypeError('range should be array');
    // if(range.length!==2) throw new RangeError('range should have two elements')
    if(!MathOfT.ARENUMBERS(...range)) throw new TypeError('range values should be numbers')
    this._range = Array(range.length);

    for(let rangeIndex in range){
      this._range[rangeIndex] = range[rangeIndex];
    }

    // this MathOfT can use these terms
    // define terms
    let terms = params.terms || [(t)=>t];
    terms = (typeof terms === 'function')
    ? [terms]
    : terms;
    if(!Array.isArray(terms) && (typeof terms !== 'function') ){
      throw new TypeError('params.terms should be array or function');
    }
    this._terms = [];


    for(let termIndex in terms){
      const term = terms[termIndex];
      // console.log(term);``
      this.addTerm(term);
    }
    // console.log(params.opcode)
    // debugger;
    this._opcode = params.opcode;
  }


  /**
  * get terms - the Function terms of this MathOfT object
  *
  * @return {Array}
  */
  get terms(){
    return this._terms;
  }


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
  addTerm(term, harmonize){
    let numterms = this.terms.length;
    harmonize = (typeof harmonize === 'boolean') ? harmonize : false;
    if(typeof term === 'function'){
      this.terms.push(term);
    } else if (term instanceof MathOfT){
      this.terms.push(term);
      if(harmonize){
        term._range = this._range; // IMPORTANT
        term.__segmentDivisor = this.__segmentDivisor;
      }
    }
    return numterms==this.terms.length-1;
  }

  /**
  * get segmentDivisor The number of segment divisors
  * (number of t evaluation points -1)
  *   in this MathOfT
  *
  * @return {Number}
  */
  get segmentDivisor(){
    return this.__segmentDivisor;
  }

  /**
   * get numSegments - The number of actual segments the MathOfT divides the evaluation range into
   *
   * @return {Number}
   */
  get numSegments(){
    return this.segmentDivisor+1;
  }
  get dt(){
    return this.drange/this.__segmentDivisor;
  }

  /**
  * get range - the evaluation range is the minimum and maximum values for t
  *
  * @return {Array.<Number>}
  */
  get range(){
    return this._range;
  }

  /**
  * get t0 - the first value of t in the evaluation range
  * @return {Number}
  */
  get t0(){
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
  get opcode(){
    return this._opcode;
  }

  /**
  * set opcode - set the opcode to one of the opcodes
  *  defined in MathOfT.OPS
  *
  * @param  {string} opcode @see MathOfT.OPS
  */
  set opcode(opcode){
    if(MathOfT.ISOP(opcode)){
      this._opcode = opcode;
    }
  }

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
  dSubrange(n, nn){
    n = MathOfT.ISNUMBER(n)
      ? n
      : 0;
    if(nn && !MathOfT.ISNUMBER(nn)){
       throw new TypeError(`MathOfT.dSubRange only accepts Numbers, given ${[...arguments]}`);
    }
    n = n%this._range.length;
    if(!Number.isInteger(n)){
      throw new RangeError(`MathOfT.dSubRange only accepts Integers, given ${[...arguments]}`)
    }
    // for this conditional, we use the explicit ISNUMBER to avoid logical
    // error for zero case: if(0) is falsy
    nn = MathOfT.ISNUMBER(nn)
      ? nn%this._range.length
      : (n+1)%this._range.length;
    if(!Number.isInteger(nn)){
      throw new RangeError(`MathOfT.dSubRange only accepts Integers, given ${[...arguments]}`)
    }
    return this._range[nn]-this._range[n];
  }

  /**
  * get drange - the delta between the the first and final values of the evaluation range
  *
  * @return {Number}
  */
  get drange(){
    return this._range[this._range.length-1] - this._range[0];
  }
  /**
  * get dabsrange - the absolute value of the delta
  * between the first and final values of the evaluation range
  *
  * @return {Number}
  */
  get dabsrange(){
    return Math.abs(this.drange);
  }


  /**
   * subT - get a generator function that yields segmentDivisor+1 values of t spanning the range [this._range[n], this._range[n+1]], where if n or n+1 fall beyond the bounds of this._range.length, they are constrained to fit
   *
   *
   *
   * @param  {Number} [n=0] integer start index of range
   *
   * @return {type}   description
   */
  subT(n, omitLast){
    omitLast = (typeof omitLast === 'boolean')
      ? omitLast
      : false;
    let defaultN = 0;
    n = MathOfT.ISNUMBER(n)
      ? n % this.range.length
      : defaultN;
    let a = this.range[n],
      b = this.range[(n+1) % this.range.length];
    let tsubmax = (omitLast)
      ? this.segmentDivisor-1
      : this.segmentDivisor;
    let dt = (b-a)/this.segmentDivisor;

    /**
    * @yields {Number}
    */
    return function*(){
      for(let tsubindex = 0; tsubindex <= tsubmax; tsubindex ++){
        yield a + tsubindex*dt;
      }
    }
  }

  /**
  * get t - get a Generator yielding all values of t across instance evaluation range
  * @example
  * // get the default t values for which a MathOfT is
  * // evaluated
  * let MoT = new MathOfT({
  *   range: [0, Math.PI*2],
  *   segmentDivisor: 22,
  *   terms: (t) => [sin(t), cos(t)];
  * });
  * let t = [...MoT.t()]
  * @return {Generator<Number>}
  */
  get t(){
    let rangelimit = this.range.length-2;
    /**
    * @yields {Number}
    */
    return function*(){
      for(let rangeIndex = 0; rangeIndex <= rangelimit; rangeIndex++){
        yield* (rangeIndex == rangelimit)
          ? this.subT(rangeIndex)()
          : this.subT(rangeIndex,true)(); //chop last to eliminate double values
      }
    }
  }


  /**
  * normalizeT - given a Number t, return a normalized (to MathOfT.DEFAULT_RANGE)
  * representation of how far along t is in the evaluation
  * range of this MathOfT
  *
  * If t falls out of bounds of range, the value is returned as -/+ Infinity
  *
  * If the evaluation range has more than two values, e.g. [0,1,2],
  * then normalizeT checks in each subrange, e.g. [0,1], [1,2]
  * and returns an Array of normalized values corresponding to each range
  *
  * @see DEFAULT_RANGE
  * @param  {Number} [t=0]
  * @return {Number|Array<Number>}
  */
  normalizeT(t){
    if(!MathOfT.ISNUMBER(t)){
      t = 0;
    }
    let test = (tt, range)=>{
      let [normA, normB] = MathOfT.DEFAULT_RANGE;
      let minNorm = (normA < normB)
        ? normA
        : normB;
      let maxNorm = (normB > normA)
        ? normB
        : normA;
      let res = (tt - range[0]) / (range[1] - range[0]); //[0-1]
      res = normA + (normB - normA)*res; //[normA, normB]

      if(!MathOfT.INRANGE(res, normA, normB)){
        res = (res < minNorm)
          ? -Infinity
          : Infinity;
      }
      return res;
    }

    let arr = Array(this.range.length-1);
    for(let r = 0; r<arr.length; r++){
      arr[r] = test(t, [this.range[r], this.range[r+1]])
    }
    return (arr.length==1)
      ? arr[0]
      : arr;
  }

  /**
  * ofT - evaluate all of the terms held by this MathofT for the
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
  * might correspond to in an Array of ofT results for the evaluation range.
  *
  * @param  {Number} t
  * @return {(Number|Array.<Number>|Array<Array>)}
  */
  ofT(t){
    t = (typeof t === 'number')
    ? t
    : this.range[0];
    // debugger;
    let tthis = (typeof this.tthis === 'object')
    ? this.tthis
    : {
      "t":{
        t,
        tNormal: this.normalizeT(t),
        tNormalRemaining: 1- this.normalizeT(t),
        trange: this.range,
        drange: this.drange,
        t0: this.t0,
        segmentDivisor: this.segmentDivisor,
        i: Math.round(t * this.segmentDivisor)
      }
    };
    let result = [];
    for(let _term of this._terms){
      if(typeof _term === 'function'){
        result.push(_term.call(tthis, t));
      } else if(_term instanceof MathOfT){
        result.push(_term.ofT.call(Object.assign(_term,{tthis}), t)); //OVERRIDE?
      }
    }
    return (result.length == 1)
    ? result[0]
    : result;
  }

  /**
  * ofTNormal - given a Number tNormal between -1 and 1, inclusive,
  * return the evaluation of this MathOfT on the t corresponding
  * to the value of t in the complete evaluation range represented by the
  * given tNormal
  * @see ofT
  * @param  {Number} [tNormal=[-1,1]]
  * @return {(Number|Array.<Number>)}
  */
  ofTNormal(tNormal){
    tNormal = (typeof tNormal === 'number')
    ? ((tNormal > 1) || (tNormal < -1))
    ? Math.sign(tNormal) * 1
    : tNormal
    : 1;
    let t = this.range[0] + tNormal*(this.range[1]-this.range[0])
    // debugger;
    return this.ofT(t);
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
  ofTOp(t, _acc, _op){
    _op = (_op in MathOfT.OPS)
    ? MathOfT.OPS[_op]
    : this.opcode;
    // debugger;
    _acc = (!_acc)
    ? _op.base
    : _acc;
    _acc = (typeof _acc === 'number' && !Number.isNaN(_acc))
    ? _acc
    : NaN;
    // debugger;

    if(this.terms.length == 1){
      // console.log('non')
      let _ofT = this.ofT(t);
      let result;
      if(!Array.isArray(_ofT)^!Array.isArray(_acc)){
        if(!Array.isArray(_acc)){
          result = _ofT.map((v,i)=>_op(v, _acc));
        } else if (!Array.isArray(_ofT)){
          result = _acc.map((v,i)=>_op(v, _ofT));
        }
      } else if(Array.isArray(_ofT) && Array.isArray(_acc)){
        result = _ofT.map((v,i)=>_op(v, _acc[i]));
      } else {
        result = _op(v,_acc);
      }
      // debugger;
      return result;
    }else {
      return this.ofT(t).reduce((acc,valarray,i,arr)=>{
        if((i==0)){
          // console.warn(valarray, acc)
          return valarray;
        }
        // console.info(valarray, acc)
        let result;
        // debugger;
        if(!Array.isArray(valarray)^!Array.isArray(acc)){
          valarray = Array.isArray(valarray)
          ? valarray
          : Array(MathOfT.R.length).fill(valarray);
          let accvec = Array.isArray(acc)
          ? acc
          : Array(MathOfT.R.length).fill(acc);
          result = valarray.map((vv,ii) => _op(accvec[ii], vv));
        } else if (Array.isArray(valarray)&&Array.isArray(acc)){
          result = valarray.map((vv,ii) => _op(acc[ii], vv));
        } else {
          let valnum = (typeof valarray === 'number')
          ? valarray
          : NaN;
          result = (Number.isNaN(valnum) || Number.isNaN(acc))
          ? NaN
          : _op(acc, valnum);
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
  get ofFirstT(){
    return this.ofT(this.t0);
  }
  /**
  * get ofLastT - return the ofT for the final t in the evaluation range
  *
  * @see range
  * @see ofT
  * @return {(Number|Array.<Number>|Array.<Array>)}
  */
  get ofLastT(){
    return this.ofT(this._range[this._range.length-1]);
  }

  /**
  * get ofAllT - get a Generator that yields
  * all Array=[t, this.ofT(t)] for t in evaluation range
  * @see ofT
  * @return {Generator} yielding Array in form [t, this.ofT(t)]
  */
  get ofAllT(){
    return function*(){
      for(let t of [...this.t()]){
        yield [
          t,
          this.ofT(t)
        ];
      }
    }
  }

  /**
  * get - Symbol.iterator get a Generator that yields
  *    all this.ofT(t) for t in evaluation range
  * @see ofT
  * @return {Generator} Generator function yielding this.ofT(t)
  */
  get [Symbol.iterator](){
    return function*(){
      yield* [...this.t()].map((t,i)=>this.ofT(t));
    }
  }

  /**
  * get ofAllTOp - get a Generator that yields all
  * this.ofTOp(_t, _acc, _op) for _t in evaluation range,
  * _acc, _op provided by user
  *
  * @see ofAllTOp
  * @return {Generator}  description
  */
  get ofAllTOp(){
    return function*(_acc, _op){
      yield* [...this.t()].map((_t,i)=>this.ofTOp(_t,_acc,_op))
    }
  }

  /**
  * mapTOp - apply the Array.map native function to the elements of
  * this.ofAllTOp() with the given callback function and this argument
  * @see Array.map
  * @see ofAllTOp
  * @param  {Function} [callback] callback to apply
  * @param  {Object} [thisArg]  this argument
  * @return {Array}         map result
  */
  mapTOp(callback, thisArg){
    if(!(callback instanceof Function)) throw new TypeError('map needs Function callback');
    return [...this.ofAllTOp()].map(callback, thisArg);
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
  map(callback, thisArg){
    if(!(callback instanceof Function)) throw new TypeError('map needs Function callback');
    return [...this].map(callback, thisArg);
  }



  /**
   * @static R - dimensional labeling
   */
  static R =  ['x', 'y', 'z'];


  /**
   * @static CALC_PRECISION_WARN - give precision warning in the form of an object that can be converted to a primitive. Warning value is produced by a*1/a==1 test
   *
   * @return {object}  the object with primitive values:
   *         {number}  the maximum value for which no precision is lost
   *         {string}  as brief message
   */
  static CALC_PRECISION_WARN(){
    let msg;
    let getmsg = (e) => `Maximum safe unit divisor: ${e}`;
    let test = (a)=>((1/a)*a==1);
    let testnum=0;
    const maxtest=144;
    while (testnum < maxtest) {
      if(!test(++testnum)){
        msg = getmsg(testnum);
        break;
      }
    }
    return {
      [Symbol.toPrimitive]:(hint)=>{
        if (hint === 'number') return testnum-1;
        return msg;
      },
    }
  }

  /**
   * @static ISNUMBER - return true IFF both of the following conditions are met
   *   1. there was one argument provided, and
   *   2. the sole provided argument was a number
   *
   * @return {boolean}
   */
  static ISNUMBER = function(){
    return (arguments.length == 1) && (typeof arguments[0] === 'number');
  }

  /**
   * @static ARENUMBERS return true IFF one of these conditions are met
   *   1. The provided arguments are ALL of Number type,
   *   2. The sole provided argument is an Array whose members are ALL of Number type,
   *   3. Any provided argument is an Array whose members are
   *      A. ALL of Number type, or
   *      B. nested Arrays whose submembers are all number types or Arra
   *      and ALL other arguments are Number type or Array with ALL members of Number type,
   *
   *
   * @params {} [arguments] figure out whether the arguments are numbers
   *  an Array thereof
   * @return {boolean}
   */
  static ARENUMBERS = function(){
    if(arguments.length == 0){
      return false;
    } else {
      return [...arguments].every(v => {
        return Array.isArray(v)
          ? MathOfT.ARENUMBERS(...v)
          : MathOfT.ISNUMBER(v);
      });
    }
  };


  /**
   * @static INRANGE - determine whether a given number n falls
   * within any of the follwoing inclusive ranges
   *    0. [ MathOfT.DEFAULT_RANGE[0], MathOfT.DEFAULT_RANGE[1] ]
   *    1. [0, m],
   *    2. [0, m[0]], (when provided unit-length array)
   *    3. [m[0], m[m.length-1]]
   *    4, [m, mm]
   *
   * @param  {Number} n the number to test
   * @param  {(Number, Array<Number>)} [m] the end of the range starting with 0, or
   *                                       the Array representing the range [m[0], m[last]]
   *                                       the begining of range ending in mm, or
   * @param  {Number} [mm] the optional end of the range
   * @return {boolean}
   */
  static INRANGE = function(n, m, mm){
    let test = (a, b, c)=>{
      // console.log(a,b,c)
      return (a > b)
        ? a <= c
        : (a < b)
          ? a >= c
          : true; // a == b
    }
    if(!(MathOfT.ARENUMBERS(...arguments) && MathOfT.ISNUMBER(n))) {
      return false;
    } else {
      if(arguments.length==1){
        return MathOfT.INRANGE(n, MathOfT.DEFAULT_RANGE);
      }else if(Array.isArray(m)){
        // console.log(n,m)
        return ( m.length == 1 )
          ? test(n, 0, m[0])
          : test(n, m[0], m[m.length-1]);
      } else if(MathOfT.ISNUMBER(m)){
        if(!MathOfT.ISNUMBER(mm)){
          return test(n, 0, m);
        } else if(MathOfT.ISNUMBER(mm)){
          return test(n, m, mm);
        }
      } else {
        return false;
      }
    }
  }

  /**
   * @static OPDICT - an array of the ops that MathOfT class  can recognize
   */
  static OPDICT = [null, '+', '-', '*', '/', '**'];

  /**
   * @static ISOP - given a string codeToParse, return true when code is found
   *  in MathOfT.OPDICT
   * @see MathOfT.OPDICT
   * @param  {string} codeToParse
   * @return {boolean}
   */
  static ISOP(codeToParse){
     return MathOfT.OPDICT.includes(codeToParse)
  }

  /**
   * @static OPPARSE - given a string codeToParse, return
   * the corresponding operation function from MathOfT.OPS
   *
   * @see MathOfT.OPS
   * @param  {string} codeToParse
   * @return {function} MathOfT.OPS function corresponding to op
   */
  static OPPARSE(codeToParse){
    return (MathOfT.ISOP(codeToParse))
          ? MathOfT.OPS[codeToParse]
          : MathOfT.OPS[null];
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
  static OPS =  Object.defineProperties({}, {
    [null]:{
      get: () => {
        function res(){
          return [...arguments];
        };
        res.code = null;
        res.base = null;
        return res;
      },
      set: () => null,
    },
    '+':{
      get: () => {
        let base = 0;
        function res(){
          return (MathOfT.ARENUMBERS(...arguments))
            ? [...arguments].reduce((acc, c,i )=>{
              return (i==0)
                ? c
                : acc+c
            })
            : NaN;
        }
        res.code = '+';
        res.base = base;
        return res;
      },
      set: () => '+'
    },
    '-':{
      get: () => {
        let base=0;
        function res(){
          return (MathOfT.ARENUMBERS(...arguments))
            ? [...arguments].reduce((acc, c, i)=>{
              return (i==0)
                ? c
                : acc-c;
            }, base)
            : NaN;
        }
        // let res = (a, b) => (MathOfT.ARENUMBERS(a,b))
        // ? a - b
        // : NaN;
        res.code = '-';
        res.base = base;
        return res;
      },
      set: () => '-'
    },
    '*':{
      get: () => {
        let base=1;
        function res(){
          return (MathOfT.ARENUMBERS(...arguments))
            ? [...arguments].reduce((acc, c, i)=>{
              return (i==0)
                ? c
                : acc*c;
            }, base)
            : NaN;
        }
        res.code = '*';
        res.base = base;
        return res;
      },
      set: () => '*'
    },
    '/':{
      get: () => {
        let base=1;
        function res(){
          return (MathOfT.ARENUMBERS(...arguments))
            ? [...arguments].reduce((acc, c, i)=>{
              return (i==0)
                ? c
                : acc/c;
            }, base)
            : NaN;
        }
        res.code = '/';
        res.base = base;
        return res;
      },
      set: () => '/'
    },
    '**':{
      get: () => {
        let base=1;
        function res(){
          return (MathOfT.ARENUMBERS(...arguments))
            ? [...arguments].reduce((acc, c, i)=>{
              return (i==0)
                ? c
                : acc**c;
            }, base)
            : NaN;
        }
        res.code = '**';
        res.base = base;
        return res;
      },
      set: () => '**'
    },
    '...':{
      get: () => {
        let res = (a, b) => (Array.isArray(a))
        ? a.concat(b)
        : Array.isArray(b)
        ? b.concat(a)
        : [a,b];
        res.code = '...';
        res.base = [];
        return res;
      },
      set: () => '...'
    }
  });

  /**
   * @static DEFAULT_SEGMENT_DIVISOR By default, MathOfT instances divide into
   * this many segments
   * @type {Number}
   * @default 10
   */
  static DEFAULT_SEGMENT_DIVISOR = 10;
  /**
   * @static DEFAULT_RANGE By default, MathOfT instances evaluate functions over
   * this range
   * @type {Array.<Number>}
   * @default [-1,1]
   */
  static DEFAULT_RANGE = [-1,1];

}

module.exports = {
  MathOfT: Object.defineProperty(MathOfT, 'MAX_SAFE_DIVISOR', {
    value: MathOfT.CALC_PRECISION_WARN(),
    enumerable: true,
    configurable: false,
    writable: false,
  }),
}
