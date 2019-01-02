"use strict";
// https://stackoverflow.com/questions/36871299/how-to-extend-function-with-es6-classes
// https://stackoverflow.com/questions/23807805/why-is-mutating-the-prototype-of-an-object-bad-for-performance7
// https://stackoverflow.com/questions/32444575/whats-the-performance-impact-of-setprototypeof-on-a-new-object
// https://esdiscuss.org/topic/setprototypeof-vs-obj-proto-assignment#content-5
class ExtensibleFunction2 extends Function{
  constructor(){
    super('...args','return this.__call__(...args)');
    Object.defineProperties(this,
      {
        'range': {
          // value: [],
          get: ()=>null,
          set: ()=>null,
          enumerable: false,
          configurable: true,
          // writable: true,
        },
        'terms': {
          // value: [],
          get: ()=>null,
          set: ()=>null,
          enumerable: false,
          configurable: false,
          // writable: true,
        },
        'segmentDivisor': {
          // value: [],
          get: ()=>null,
          set: ()=>null,
          enumerable: false,
          configurable: true,
          // writable: true,
        },
        // '__call__':{
        //   value: (...args)=>{
        //     console.log(this)
        //     return this.oft.call(this,...args);
        //   },
        //   enumerable: false,
        //   configurable: true,
        //   writable: true,
        // }

      }
    );

    return this.bind(this);
  }

  __call__(...args){
    throw new Error(`please override before calling with ${args}`)
  }
}

class ExtensibleFunction extends Function {
  constructor(f) {
    return Object.setPrototypeOf(f, new.target.prototype);
  }
}
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
class MathOfT extends ExtensibleFunction{
// class MathOfT extends ExtensibleFunction2{

  // static #test=1;//@babel/plugin-proposal-class-properties
  /**
  * constructor - create a MathOfT instance that evaluates its Function terms
  *    when given some parameter "t".
  * @param  {(Object|Function|Array)} params
  * @param {(Number|Array.<Number>)} [params.range] Range of two numerical values over which t is evaluated inclusively. If given a single number t0, range is [-t0,t0]
  * @param {Number} [params.segmentDivisor] The number of segments to divide the range into when picking t values for evaluation.
  * @param {(Function|Array.<Function>|Array.<MathOfT>)} [params.terms=[]] A function that accepts a parameter t and returns a result of some operation on t
  * @param {boolean} [params.rangeoverride=false] if true, will override any range provided and set range equal to [0, params.segmentDivisor]
  * @param {boolean} [params.harmonize=false] if true, will harmonize the domains of any MathOfT terms to that of the new parent instance @see range, @see segmentDivisor
  * @throws TypeError
  */
  constructor(params){
    // super();
    super((...args)=>this.oft(...args))


    params = params || {};


    if ((typeof params === 'function') || (params instanceof MathOfT)){
      let thefunc = params;
      params = {
        terms: thefunc
      };
    } else if(MathOfT.ISARRAYLIKE(params)){
      let thearray = params;
      params = {
        range: thearray
      }
    }

    // define the division of the evaluation range
    const segmentDivisor = params.segmentDivisor || MathOfT.DEFAULT_SEGMENT_DIVISOR;
    this.segmentDivisor = segmentDivisor;

    let rangeoverride = (typeof params.rangeoverride === 'boolean')
    ? params.rangeoverride
    : false;
    let harmonize = (typeof params.harmonize === 'boolean')
    ? params.harmonize
    : false;
    // create an evaluation range
    let range = (rangeoverride)
    ? [0, this.segmentDivisor]
    : params.range || MathOfT.DEFAULT_RANGE;
    range = MathOfT.ISCALCULABLE(range)
    ? [-range, range]
    : range;
    if(!MathOfT.ISARRAYLIKE(range)) throw new TypeError('range should be array');
    // if(range.length!==2) throw new RangeError('range should have two elements')
    this.range = Array.from(range);

    // this MathOfT can use these terms
    // define terms
    this._terms=[]
    let terms = params.terms || [(t)=>t];
    terms = ( typeof terms === 'function')
      ? [terms]
      : terms;
    if(!MathOfT.ISARRAYLIKE(terms) && (typeof terms !== 'function') ){
      throw new TypeError('params.terms should be array or function');
    }
    for(let term of terms){
      // const term = terms[termIndex];
      // console.log(term);``
      this.addTerm(term, harmonize);
    }
    // console.log(params.opcode)
    // debugger;
    this.opcode = params.opcode;
    // return this.bind(this);
    // this['__call__']=(...args)=>{
    //   console.log('__call__', this._range)
    //   return this.oft.call(...args);
    // }
  }

  //
  // '__call__'(t, filterNulls){
  //   console.log('__call__', this.range)
  //   return this.oft(t, filterNulls,false);
  // }


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
  * @param {boolean} [harmonize=false] if true, and term is a MathOfT
  *  instance, this overwrites the range and segmentDivisor of term to make them
  *  reference the same-named parameters of this instance.
  * @returns {boolean} true if length of terms grew
  */
  addTerm(term, harmonize){
    let numterms = this.terms.length;
    const push=(_term)=>{
      this.terms.push(_term);
      this[numterms]=this.terms[numterms];
    };
    harmonize = (typeof harmonize === 'boolean') ? harmonize : false;
    if(typeof term === 'function' && !(term instanceof MathOfT)){
      push(term);
    } else if (term instanceof MathOfT){
      push(term);
      if(harmonize){
        // term.range = this.range;
        // term.segmentDivisor = this.segmentDivisor;
        const keys = ['_range', '_segmentDivisor'];
        for (let key of keys) {
          Object.defineProperty(term, key, {
            get: ()=>this[key], //reference to parent
            set: (value)=>Object.defineProperty(term, key, {value})//dareference from parent
          });
        }
      }
    }


    return numterms==this.terms.length-1;
  }

  set segmentDivisor(segmentDivisor){
    segmentDivisor = MathOfT.ISARRAYLIKE(segmentDivisor)
      ? segmentDivisor[0]
      : segmentDivisor;
    if(!MathOfT.ISCALCULABLE(segmentDivisor)){
      // console.log('NaN segment Divisor')
      throw new TypeError('segmentDivisor should be non-NaN number, not: '+ segmentDivisor);
    } else {
      this._segmentDivisor = [segmentDivisor];
    }
  }
  /**
  * get segmentDivisor The number of segment divisors
  * (number of t evaluation points -1)
  *   in this MathOfT
  *
  * @return {Number}
  */
  get segmentDivisor(){
    return this._segmentDivisor[0];
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
    return this.drange/this.segmentDivisor;
  }

  set range(range){
    if(!MathOfT.ARENUMBERS(...range)) throw new TypeError('range values should be Array of numbers')
    this._range = Array(range.length);

    for(let rangeIndex in range){
      this._range[rangeIndex] = range[rangeIndex];
    }
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
  * get t0 - the first value of t in the evaluation range T
  * @see T
  * @return {Number}
  */
  get t0(){
    return this.range[0];
  }

  /**
  * get tt - the last value of t in the evaluation range T
  * @see T
  * @return {Number}
  */
  get tt(){
    return this.range[this.range.length - 1 ];
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
  * @param  {string} [opcode=null] @see MathOfT.OPS
  */
  set opcode(opcode){
    this._opcode = (MathOfT.ISOP(opcode))
      ? opcode
      : null;
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
    n = n%this.range.length;
    if(!Number.isInteger(n)){
      throw new RangeError(`MathOfT.dSubRange only accepts Integers, given ${[...arguments]}`)
    }
    // for this conditional, we use the explicit ISNUMBER to avoid logical
    // error for zero case: if(0) is falsy
    nn = MathOfT.ISNUMBER(nn)
      ? nn%this.range.length
      : (n+1)%this.range.length;
    if(!Number.isInteger(nn)){
      throw new RangeError(`MathOfT.dSubRange only accepts Integers, given ${[...arguments]}`)
    }
    return this.range[nn]-this.range[n];
  }

  /**
  * get drange - the delta between the the first and final values of the evaluation range
  *
  * @return {Number}
  */
  get drange(){
    return this.range[this.range.length-1] - this.range[0];
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
   * subT - get a generator function that yields segmentDivisor+1 values of t spanning the range [this.range[n], this.range[n+1]], where if n or n+1 fall beyond the bounds of this.range.length, they are constrained to fit
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
  get T(){
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
  normalizeT(t, doAnti){
    doAnti =  (typeof doAnti === 'boolean')
      ? doAnti
      : false;
    let func = (doAnti)
        ? MathOfT.ANTINORMALIZETORANGE
        : MathOfT.NORMALIZETORANGE;
    let arr = Array(this.range.length-1);
    for(let r = 0; r<arr.length; r++){
      arr[r] = func(t, [
        this.range[r],
        this.range[r+1]
      ]);
    }
    return (arr.length==1)
      ? arr[0]
      : arr;
  }


  /**
   * antinormalizeT - given a number t return a normalized representation of the ratio of a quantity n to the delta of the instance evaluation range such that the ratio of t to the delta of the evaluation range N satisfies
   * 1.n = maximum normal - N
   *
   * This is the remaining range for the normalized value provided by normalizeT
   *
   * if t falls beyond the lower bound of the evaluation range, return +Infinity
   * if t falls beyond the upper bound of the evaluation range, return -Infinity
   *
   * @see normalizeT
   * @param  {number} t
   * @return {number} n
   */
  antinormalizeT(t){
    return this.normalizeT(t,true)
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
  i(t){
    let arr = Array(this.range.length-1);
    for(let r = 0; r<arr.length; r++){
      arr[r] = MathOfT.IINRANGE(t, [
        this.range[r],
        this.range[r+1]
      ], this.segmentDivisor);
    }
    return (arr.length==1)
      ? arr[0]
      : arr;
  }


  /**
   * isInRange - return true IFF a given t falls within the evaluation range of this instance
   *
   * @param  {number} t
   * @return {boolean}
   */
  isInRange(t){
    return MathOfT.INRANGE(t, this.range);
  }
  /**
  * oft - evaluate all of the terms held by this Mathoft for the
  * given t value.
  *
  * When evaluating a Function or MathOfT term, the function or MathOfT is called with a this object containing certain useful data regarding the calling instance's evaluation of t @see TTHIS_TEMPLATE
  *
  * When evaluating a MathOfT term, any t that falls outside that term's evaluation range will produce a null result. If the filterNulls parameter is true, then null values will be stripped from the returned result.
  * @see isInRange
  * @param  {Number} [t=t0]
  * @param {boolean} [filterNulls=false]
  * @return {(Number|Array.<Number>|Array<Array>)}
  */
  oft(t, filterNulls,dotthis){
    // console.log(this)
    t = MathOfT.ISCALCULABLE(t)
    ? t
    : this.t0;
    filterNulls = (typeof filterNulls === 'boolean')
    ? filterNulls
    : false;
    dotthis = (typeof dotthis === 'boolean')
    ? dotthis
    : true;
    // debugger;
    let tthis = null;
    if (dotthis) {
      tthis=(typeof this.tthis === 'object')
        ? this.tthis
        : MathOfT.TTHIS_TEMPLATE(t, this);
    }
    let result = [];
    for(let i in this.terms){
      let _term = this.terms[i];
      if((typeof _term === 'function') && !(_term instanceof MathOfT)){
        result[i]=_term.call(tthis, t);
      } else if(_term instanceof MathOfT){
        let subres = _term.isInRange(t)
          ? _term.oft.call(Object.assign(_term,{tthis}), t)
          : null;
        result[i]=subres; //OVERRIDE?
      }
    }
    result = (filterNulls)
      ? result.filter((v) => v)
      : result;
    return (result.length == 1)
    ? result[0]
    : result;
  }




  /**
  * get ofFirstt - return the oft for the first t in the evaluation range
  *
  * @see t0
  * @see oft
  * @return {(Number|Array.<Number>|Array.<Array>)}
  */
  get ofFirstt(){
    return this.oft(this.t0);
  }
  /**
  * get ofLastt - return the oft for the final t in the evaluation range
  *
  * @see range
  * @see oft
  * @return {(Number|Array.<Number>|Array.<Array>)}
  */
  get ofLastt(){
    return this.oft(this.tt);
  }

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
  oftNormal(tNormal){
    let dNormal = MathOfT.DEFAULT_RANGE[1]-MathOfT.DEFAULT_RANGE[0];
    let midNormal  = MathOfT.DEFAULT_RANGE[0] + dNormal/2;
    tNormal = MathOfT.ISNUMBER(tNormal)
      ? tNormal
      : midNormal;
    let t=undefined, midt = (this.tt-this.t0)/2 + this.t0;
    if(MathOfT.ISCALCULABLE(tNormal)){
      t = midt + (tNormal-midNormal) * this.drange/2;
    }
    // debugger;
    return ( t !== undefined)
      ? this.oft(t)
      : (Number.isNaN(tNormal))
        ? NaN
        : tNormal === -Infinity
          ? this.ofFirstt
          : this.ofLastt;
  }

  /**
  * oftOp - Calculate the value of performing an operation _op on the
  * values returned by calculating this MathOfT instance's terms for
  * some evaluation value t. When given a parameter _acc, the calculation of _op will use _acc as its starting value.
  *
  * This is intended to facilitate convenient manipulation of terms and results.
  *
  * @see oft
  *
  * @param  {Number} t the t to evaluate
  * @param  {string} [_op=this.opcode]  an opcode to perform @see MathOfT.OPS
  * @param  {(Number|Array.<Number>|Array.<Array>)} [_acc=null] an accumulator value to start with @see MathOfT.OPS -> base
  * @return {(Number|Array.<Number>|Array.<Array>)}
  */
  oftOp(_t, _op, _acc){
    _op = (_op in MathOfT.OPS)
      ? _op
      : this.opcode;
    const op=MathOfT.OPS[_op];
    // debugger;
    _acc = (!_acc)
      ? null //op.base
      : (MathOfT.ARENUMBERS(_acc))
        ? _acc
        : NaN;
    // debugger;

    const transform = (acc,val)=>{
      // let res;
      console.log(acc,val);
      switch (MathOfT.MATHTYPEOF(val)) {
        case MathOfT.MATHTYPES.numberlike:
          if (MathOfT.ISARRAYLIKE(acc)) {
            throw new TypeError('Can\'t apply an arraylike accumulator to a scalar.' )
          }else if(MathOfT.ISNUMBER(acc)){
            return op(acc, val);
          }
          return val;
          break;
        case MathOfT.MATHTYPES.arraylike:
          let isNested = MathOfT.ISARRAYLIKE(val[0]);
          if(MathOfT.ISARRAYLIKE(acc)){
            if(acc.length!=val.length){
              let areMismatched=(isNested)
                ? acc.length!=val[0].length
                : true;
              if(areMismatched) {
                throw new TypeError('Can\'t apply an op to arraylike values of dissimilar lengths.');
              }
            }
            if(isNested){
              return val.reduce(transform,acc);
            } else {
              for(let i = 0; i < val.length; i++){
                val[i] = transform(acc[i], val[i]); //overwrite in place
              }
            }
          }else if(MathOfT.ISNUMBER(acc)){
            for(let i = 0; i < val.length; i++){
              val[i] = transform(acc, val[i]); //overwrite in place
            }
          }
          return val;
          break;
      }
    };

    let _oft = this.oft(_t);
    // console.log(_oft)
    switch (this.terms.length) {
      case 1:
        return (_acc)
          ? transform(_acc, _oft)
          : _oft;
        break;
      default:
        return (_acc)
          ? MathOfT.ISARRAYLIKE(_acc)
            ? transform(_acc, _oft)
            : _oft.reduce(transform, _acc)
          : _oft.reduce(transform);
        break;
    }
  }



  /**
  * get ofAlltT - get a Generator that yields
  * all Array=[t, this.oft(t)] for t in evaluation range
  * in form [t, this.oft(t)]
  *
  * @see oft
  * @return {Generator}
  */
  get ofAlltT(){
    return function*(){
      for(let t of [...this.T()]){
        yield [
          t,
          this.oft(t)
        ];
      }
    }
  }

  /**
  * get - Symbol.iterator get a Generator that yields
  *    all this.oft(t) for t in evaluation range
  * @see oft
  * @return {Generator} Generator function yielding this.oft(t)
  */
  get [Symbol.iterator](){
    return function*(){
      yield* [...this.T()].map((t,i)=>this.oft(t));
    }
  }

  /**
  * get ofAlltTOp - get a Generator that yields all
  * this.oftOp(_t, _acc, _op) for _t in T,
  * _acc, _op provided by user
  *
  * @see ofAlltTOp
  * @return {Generator}  description
  */
  get ofAlltTOp(){
    return function*(_acc, _op){
      yield* [...this.T()].map((_t)=>this.oftOp(_t,_op,_acc))
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
   * @static CALC_PRECISION_WARN - give precision warning in the form of an object that can be converted to a primitive.
   *
   * Floating point math has inherent imprecisions. This function is useful for quantifying them and identifying potentially problematic operations. It uses a few different tests to highlight sources of error, including:
   *  1. a*\frac{1}{a} // Multiplicative Identity
   *  2. \sum_{i=1}^{a} 1/a // Sum of Inverses
   * @return {object}  the object with primitive values:
   *         {number}  the maximum value for which no precision is lost
   *         {string}  as brief message
   */
  static CALC_PRECISION_WARN(maxtestnum){
    let res;
    let getmsg = (e) => `Maximum safe unit divisor: ${e}`;
    let tests = [
      (a)=>((1/a)*a==1), //  multiplicative identity
      (a)=>Array(a).fill(1/a).reduce((acc,val)=>acc+val, 0), //sum of inverses

    ];
    //only do so many tests
    let testnum=0;
    const maxtest=MathOfT.ISCALCULABLE(maxtestnum)
      ? maxtestnum
      : 144;
    //tests[0]
    let lastgoodmultidendivisor,msg;
    //tests[1]
    let roundinaccura = []; // all divisors for which rounding error causes failure
    let rounddeltas = []; // the difference between erroneous rounding and 1
    let roundexcesses = []; // divisors for which rounding error causes excess failure
    let rounddeficits = []; // divisors for which rounding error causes deficiency failure

    while (testnum < maxtest) {
      //tests[0]
      if(!tests[0](++testnum)){
        lastgoodmultidendivisor = testnum - 1;
        msg = getmsg(lastgoodmultidendivisor);
      }
      //tests[1]
      const test1result = tests[1](testnum) // testnum has been incremented already
      if(test1result != 1){
        roundinaccura.push(testnum);
        rounddeltas.push(test1result-1);
        if(test1result < 1) rounddeficits.push(testnum);
        if(test1result > 1) roundexcesses.push(testnum);
      }
    };
    res = {
      [Symbol.toPrimitive]:(hint)=>{
        if (hint === 'number') return lastgoodmultidendivisor;
        return msg;
      },
      inaccurateDivisors: {
        all: roundinaccura,
        errors: rounddeltas,
        excessive: roundexcesses,
        deficient: rounddeficits,
      },
      [Symbol.iterator]: function*(){
          yield* roundinaccura;
      },
    };

    return res;
  }


  //TODO: static SIN_OF_PI_WARN
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
  static ISNUMBER(){
    return (arguments.length == 1) && (typeof arguments[0] === 'number');
  }

  /**
   * @static ISCALCULABLE - return true IFF all of the following conditions are met
   * 1. argument satisfies ISNUMBER (One Number argument)
   * 2. argument is not NaN
   * 3. argument is not +/-Infinity
   *
   * This function does more calls than just using isFinite, however, it is used in the MathOfT class because the class also deals with arrays and objects.
   *
   * @see ISNUMBER
   *
   * @return {boolean}  description
   */
  static ISCALCULABLE(){
    return (arguments.length == 1) && Number.isFinite(arguments[0]);
  }



  /**
   * @static ISARRAYLIKE - determine whether a given argument x is "like" an array for the purposees of MathOfT calculations and parsing, returning true IFF x satisfies one of the following conditions:
   * 1 - It is an Array
   * 2 - It is a TypedArray
   * 3 - It provides a Symbol.iterator property
   *
   * The third condition allows for the parsing of various iterable objects, but it does not guarantee that such actions will produce calculable values.
   *
   * @param  {?} x
   * @return {boolean}
   */
  static ISARRAYLIKE(x){
    return x && (Object.getOwnPropertySymbols(x).includes(Symbol.iterator)||Array.isArray(x)||ArrayBuffer.isView(x));
  }

  /**
   * @static ARENUMBERS return true IFF one of these conditions are met
   *   1. The provided arguments are ALL of Number type,
   *   2. The sole provided argument is an Array whose members are ALL of Number type,
   *   3. Any provided argument is an Array whose members are
   *      A. ALL of Number type, or
   *      B. nested Arrays whose submembers are all number types or Arrays
   *      and ALL other arguments are Number type or Array with ALL members of Number type,
   *
   * @see ARECALCULABLES
   *
   * @params {} [arguments] figure out whether the arguments are numbers or
   *  an Array thereof
   * @return {boolean}
   */
  static ARENUMBERS(){
    if(arguments.length == 0){
      return false;
    } else {
      return [...arguments].every(v => {
        return MathOfT.ISARRAYLIKE(v)
          ? MathOfT.ARENUMBERS(...v)
          : MathOfT.ISNUMBER(v);
      });
    }
  };

  /**
   * @static ARECALCULABLES return true IFF one of these conditions are met
   *   1. The provided arguments are ALL of Number type,
   *   2. The sole provided argument is an Array whose members are ALL of Number type,
   *   3. Any provided argument is an Array whose members are
   *      A. ALL of Number type, or
   *      B. nested Arrays whose submembers are all number types or Array,
   *   and ALL other arguments are Number type or Array with ALL members of Number type, and
   *   4. All arguments of number type are neither NaN nor -/+Infinity
   *
   * @see ARENUMBERS
   *
   * @params {} [arguments] figure out whether the arguments are numbers or
   *  an Array thereof
   * @return {boolean}
   */
  static ARECALCULABLES(){
    if(arguments.length == 0){
      return false;
    } else {
      return [...arguments].every(v => {
        return MathOfT.ISARRAYLIKE(v)
          ? MathOfT.ARECALCULABLES(...v)
          : MathOfT.ISCALCULABLE(v);
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
   * @param  {(Number|Array<Number>)} [m] the end of the range starting with 0, or
   *                                       the Array representing the range [m[0], m[last]]
   *                                       the begining of range ending in mm, or
   * @param  {Number} [mm] the optional end of the range
   * @return {boolean}
   */
  static INRANGE(n, m, mm){
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
      }else if(MathOfT.ISARRAYLIKE(m)){
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
  static NORMALIZETORANGE(t, TT, NN){
    if(!MathOfT.ISNUMBER(t)){
      t = 0;
    }
    if(!MathOfT.ARENUMBERS(NN)){
      NN = MathOfT.DEFAULT_RANGE;
    }
    if(!MathOfT.ARENUMBERS(TT)){
      TT = MathOfT.DEFAULT_RANGE;
    }
    let [normA, normB] = NN;
    let minNorm = (normA < normB)
      ? normA
      : normB;
    let maxNorm = (normB > normA)
      ? normB
      : normA;
    let res = (t - TT[0]) / (TT[1] - TT[0]); //[0-1]
    res = normA + (normB - normA)*res; //[normA, normB]

    if(!MathOfT.INRANGE(res, normA, normB)){
      res = (res < minNorm)
        ? -Infinity
        : Infinity;
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
  static ANTINORMALIZETORANGE(t, TT, NN){
    if(!MathOfT.ISNUMBER(t)){
      t = 0;
    }
    if(!MathOfT.ARENUMBERS(TT)){
      TT = MathOfT.DEFAULT_RANGE;
    }
    if(!MathOfT.ARENUMBERS(NN)){
      NN = MathOfT.DEFAULT_RANGE;
    }
    let res = MathOfT.NORMALIZETORANGE(t, TT, NN);
    return (Math.abs(res) === Infinity)
      ? -res
      : NN[NN.length-1]-res
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
  static IINRANGE(t, TT, d){
    d = (MathOfT.ISNUMBER(d))
      ? Math.floor(d)
      : MathOfT.DEFAULT_SEGMENT_DIVISOR;
    let res = MathOfT.NORMALIZETORANGE(t, TT, [0, 1]);
    return (res == Infinity)
      ? null
      : (res == -Infinity)
        ? null
        : Math.floor(res * d);
  }


  /**
   * @static DIMENSIONS - return the size of the given x, where x can be a number or an Array
   *
   * @param  {(number|Array)} x the structure to get dimensions of
   * @return {Array}
   */
  static DIMENSIONS(x){
    if(MathOfT.ISNUMBER(x)){
      return Promise.resolve([0]);
    }

    let irregularflag=false;
    return Promise.resolve().then(()=>{
      // debugger;
      let dim=Promise.resolve([]);
      if(MathOfT.ISARRAYLIKE(x)){
        if(x.length == 0){
          return dim.then(dimarr=>dimarr.concat(0))
        } else {
          return dim
            .then(dimarr=>{
              // console.log(x.length)
              return dimarr.concat(x.length)
            })
            .then(dimarr=>{
              // console.log(dimarr)
              for(let elementindex in x){
                let longestelementlength=0;
                let element = x[elementindex];
                if(MathOfT.ISARRAYLIKE(element)){
                  if(element.length>=longestelementlength){
                    longestelementlength=element.length;
                  } else {
                    irregularflag=true; // sparse element
                  }
                  return Promise
                    .all(element.map(subelement => MathOfT.DIMENSIONS(subelement)))
                    .then(nestedelementlengths => {
                      let mag = MathOfT.OPS.magest(...nestedelementlengths);
                      return (Number.isNaN(mag) || mag==0)
                        ? []
                        : mag;
                    })
                    .then(longestnestedelementlength => dimarr.concat(longestelementlength, longestnestedelementlength));
                } else {
                  return Promise.resolve(dimarr);
                }
              }
          });
        }
      } else {
        return dim;
      }
    });
  }


  /**
   * @static EQUAL - determine whether the given number or Array-like arguments are satisfying the conditions:
   * 1) all of a single shared type,
   * 2) if numbers, of equal value,
   * 3) if arrays, composed of equal positional elements
   *
   * When comparing values that are NaN or containing NaN in the same positions, the function will return false because NaN doesn't equal NaN
   * @params {?} [arguments]
   * @return {boolean}
   */
  static EQUAL(){
    if (arguments.length==0) {
      return false;
    }
    if (arguments.length==1){
      return true;
    }
    const a0 = arguments[0]
    const type = MathOfT.MATHTYPEOF(a0);
    let res = true;
    // const dim = MathOfT.DIMENSIONS(arguments[0]);
    for (let i = 1; i < arguments.length; i++) {
      let a = arguments[i];
      if(MathOfT.MATHTYPEOF(a)!=type) return false;
      switch (type) {
        case MathOfT.MATHTYPES.arraylike:
          if(a.length!=a0.length) return false;
          for (let ai = 0; ai < a0.length; ai++) {
            if(!MathOfT.EQUAL(a0[ai], a[ai])) return false;
          }
          break;
        case MathOfT.MATHTYPES.numberlike:
          // console.log(a)
          res = res && (a==a0);
          break;
        default:
          return false;
      }
    }
    return res;
  }


  /**
   * @static MATHTYPEOF - tell whether the given argument a is of one of the types that MathOfT can do math with  and if so, which type
   *
   * @param  {?} [a]
   * @return {(Symbol|null)}
   */
  static MATHTYPEOF(a){
    return MathOfT.ISARRAYLIKE(a)
      ? MathOfT.MATHTYPES.arraylike
      : MathOfT.ISNUMBER(a)
        ? MathOfT.MATHTYPES.numberlike
        : null;
  }

  /**
   * @static TTHIS_TEMPLATE - given a t and a MathOfT instance, produces an object with some keys for inter-instance communication corresponding to:
   * 1 the result of evaluating certain methods of the calling instance for t @see FUNCKEYS
   * 2 certain members of the calling instance @see MEMBERKEYS
   *
   * @see oft
   * @param  {Number} t the t of the instance communicatiing
   * @param {MathOfT} mathoft the instance doing communication
   * @return {object|Array<string>} communication object, or array of communication keys
   */
  static TTHIS_TEMPLATE(t,mathoft){
    let o = (MathOfT.ISCALCULABLE(t) )
      ? { t }
      : { };
    let populateFunc = (mathoft instanceof MathOfT)&&(MathOfT.ISCALCULABLE(t))
      ? (key)=>o[key]=mathoft[key](t)
      : ()=>null;
    let populateMemb = (mathoft instanceof MathOfT)
      ? (key)=>o[key]=mathoft[key]
      : () => null;
    MathOfT.FUNCKEYS.map(fkey=>populateFunc(fkey));
    MathOfT.MEMBERKEYS.map(mkey=>populateMemb(mkey));
    if(Object.keys(o).length==0){
      return MathOfT.FUNCKEYS.concat(MathOfT.MEMBERKEYS);
    } else {
      return o;
    }
  };

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

}

Object.defineProperties(MathOfT, {
  /**
   * @static MATHTYPES - valid types that MathOfT can do math on
   * @see MathOfT.MATHTYPEOF
   * @memberof MathOfT
   */
  'MATHTYPES': {
    value: (()=>{
      let o = {};
      [
        'arraylike','numberlike'
      ].map(function(e){
        this[e]=Symbol(e), this[this[e]]=e;
      }, o);
      return o;
    })(),
    enumerable: true,
    configurable: false,
    writable: false,
  },
  /**
   * @static OPDICT - an array of valid op keys
   * @see MathOfT.OPS
   * @memberof MathOfT
   */
  'OPDICT': {
    value: [null, '+', '-', '*', '/', '**', 'magest'],
    enumerable: true,
    configurable: false,
    writable: false,
  },
  /**
   * @static OPS - an object containing operations, or ops, that
   * perform mathematical functions corresponding to their keys
   * @hamespace OPS
   * @see MathOfT.ISOP
   * @see MathOfT.OPDICT
   * @see MathOfT.OPPARSE
   * @see MathOfT.ARENUMBERS
   * @memberof MathOfT
   */
  'OPS':{
    value: Object.defineProperties({},{
      'opfunc':{
        value: (code) =>{
          if (typeof code !== 'string') {
            throw new TypeError('MathOfT.OPS.opfunc takes one string')
          }else if (!MathOfT.OPDICT.includes(code)) {
            throw new RangeError('MathOfT.OPS.opfunc takes one string in MathOfT.OPDICT')
          }
          return new Function('args',
             `"use strict";return [...args].reduce((acc, c,i )=>{return(i==0) ? c: acc ${code} c; })`);
        },
        writable: false,
        configurable: false,
        enumerable: false,
      },
      'resfunc':{
        value: (code, base, args) =>{
          if (!MathOfT.ISCALCULABLE(base)) {
            throw new TypeError('MathOfT.OPS.resfunc requires a calculable base parameter');
          }
          if (!MathOfT.ISARRAYLIKE(args)) {
            throw new TypeError('MathOfT.OPS.resfunc requires an iterable, Array or ArrayBuffer view args parameter');
          }
          let opfunc = MathOfT.OPS.opfunc;
          if (MathOfT.ARENUMBERS(...args)){
            return opfunc(code)(args);
          }
          let filtered = [...args].map(v=>(v==null)?base:v)
          if(MathOfT.ARENUMBERS(filtered)){
            return opfunc(code)(filtered);
          }
          return NaN;
        },
        writable: false,
        configurable: false,
        enumerable: false,
      },
      [null]:{
        enumerable: true,
        get: () => {
          let code = null, base = null;
          return Object.assign(
            function(){
              return [...arguments];
            },
            {
              code,
              base
            }
          );
        },
        set: () => null,
      },
      '+':{
        enumerable: true,
        get: () => {
          let base = 0, code = '+';
          return Object.assign(
            function(){
              return MathOfT.OPS.resfunc(code, base, arguments);
            }, {
              code,
              base
            }
          );
        },
        set: () => '+'
      },
      '-':{
        enumerable: true,
        get: () => {
          let base = 0, code = '-';
          return Object.assign(
            function(){
              return MathOfT.OPS.resfunc(code, base, arguments);
            },
            {
              code,
              base
            }
          );
        },
        set: () => '-'
      },
      '*':{
        enumerable: true,
        get: () => {
          let base = 1, code = '*';
          return Object.assign(
            function(){
              return MathOfT.OPS.resfunc(code, base, arguments);
            },
            {
              code,
              base
            }
          );
        },
        set: () => '*'
      },
      '/':{
        enumerable: true,
        get: () => {
          let base = 1, code = '/';
          return Object.assign(
            function(){
              return MathOfT.OPS.resfunc(code, base, arguments);
            },
            {
              code,
              base
            }
          );
        },
        set: () => '/'
      },
      '**':{
        enumerable: true,
        get: () => {
          let base = 1, code = '**';
          return Object.assign(
            function(){
              return MathOfT.OPS.resfunc(code, base, arguments);
            },
            {
              code,
              base
            }
          );
        },
        set: () => '**'
      },
      '...':{
        enumerable: true,
        get: () => {
          let code = '...', base = [];
          return Object.assign(
            (a, b) => (MathOfT.ISARRAYLIKE(a))
              ? a.concat(b)
              : MathOfT.ISARRAYLIKE(b)
              ? b.concat(a)
              : [a,b],
            {
              code,
              base
            }
          );
        },
        set: () => '...'
      },
      /**
       * @name magest - given some values, return the one with the greatest magnitude
       *
       * @memberof OPS
       * @params {(number|Array<number>)} arguments the numbers to test
       * @return {number}
       */
      'magest':{
        enumerable: true,
        get: () => {
          let code = 'magest', base = 0;
          return Object.assign(
            function(){
              let max=base;
              if(MathOfT.ARECALCULABLES(...arguments)){
                for(var i=0; i<arguments.length; i++){
                  let cur = Math.abs(arguments[i]);
                  max = (cur > max)
                    ? cur
                    : max;
                }
                return max;
              } else {
                return NaN;
              }
            },
            {
              code,
              base
            }
          );
        },
        set: () => 'magest'
      }

    }),
    enumerable: true,
    configurable: false,
    writable: false,
  },
  /**
   * @static R - dimensional labeling
   * @memberof MathOfT
   */
  'R': {
    value: ['x', 'y', 'z'],
    enumerable: true,
    configurable: false,
    writable: false,
  },
  /**
   * @static FUNCKEYS - methods for inter-instance communication
   * @see TTHIS_TEMPLATE
   * @memberof MathOfT
   */
  'FUNCKEYS': {
    value: [
      'normalizeT',
      'antinormalizeT',
      'i'
    ],
    enumerable: true,
    configurable: false,
    writable: false,
  },
  /**
   * @static MEMBERKEYS - members for inter-instance communication
   * @see TTHIS_TEMPLATE
   * @memberof MathOfT
   */
  'MEMBERKEYS': {
    value: [
      'range',
      'drange',
      't0',
      'segmentDivisor',
    ],
    enumerable: true,
    configurable: false,
    writable: false,
  },
  /**
   * @static DEFAULT_SEGMENT_DIVISOR By default, MathOfT instances divide into
   * this many segments
   * @type {Number}
   * @memberof MathOfT
   * @default 10
   */
  'DEFAULT_SEGMENT_DIVISOR': {
    value: 10,
    enumerable: true,
    configurable: false,
    writable: false,
  },
  /**
   * @static MAX_SAFE_DIVISOR the maximum safe to use divisor
   * @borrows MathOfT.CALC_PRECISION_WARN
   * @memberof MathOfT
   */
  'MAX_SAFE_DIVISOR': {
    value: MathOfT.CALC_PRECISION_WARN(),
    enumerable: true,
    configurable: false,
    writable: false,
  },
  /**
   * @static DEFAULT_RANGE By default, MathOfT instances evaluate functions over this range
   * @type {Array.<Number>}
   * @default [-1,1]
   * @memberof MathOfT
   */
  'DEFAULT_RANGE': {
    value: [-1,1],
    enumerable: true,
    configurable: false,
    writable: false,
  }
});

export { MathOfT };
