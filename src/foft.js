'use strict'
/**
* @class Foft is a class that evaluates the
* properties of Function or Foft objects that
* generally receive and return objects of type
*  - Number
*  - Array of Number,
*  - Array of Array
* @example
* // returns a Foft instance
* let MoT = new Foft()
* @example
* // returns a Foft instance that
* // describes an equation over the range [0,1] (inclusive)
* // split into 22 segments (23) total points
* let MoT = new Foft({
*   range: [0, 1],
*   segmentDivisor: 22,
*   terms: (t) => t*2;
* });
* Foft also evaluates some of the properties
* of the Function or Foft objects in its terms
* @see Foft.oft
*/
class Foft {
  /**
  * create a Foft instance that evaluates its Function terms
  *    when given some parameter "t".
  *
  * accepts an argument params that may be a(n):
  * - function see params.terms for details
  * - object see params for details
  * - array of numbers see params.range for details
  * - Foft instance will return a copy of the instance
  *
  * @param  {(Object|Function|Array.<Number>|Foft)} params
  * @param {(Number|Array.<Number>)} [params.range] Range of two numerical values over which t is evaluated inclusively. If given a single number t0, range is [-t0,t0]
  * @param {Number} [params.segmentDivisor] The number of segments to divide the range into when picking t values for evaluation.
  * @param {(Function|Array.<Function>|Array.<Foft>)} [params.terms=[]] A function that accepts a parameter t and returns a result of some operation on t
  * @param {boolean} [params.rangeoverride=false] if true, will override any range provided and set range equal to [0, params.segmentDivisor]
  * @param {boolean} [params.harmonize=false] if true, will harmonize the domains of any Foft terms to that of the new parent instance @see range, @see segmentDivisor
  * @throws TypeError
  */
  constructor (params) {
    params = params || {}

    if (typeof params === 'function') {
      let thefunc = params
      params = {
        terms: thefunc
      }
    } else if (Foft.isArrayLike(params)) {
      let thearray = params
      params = {
        range: thearray
      }
    } else if (params instanceof Foft) {
      let thefoft = params
      let { segmentDivisor, range, terms } = thefoft
      params = { segmentDivisor, range: Array.from(range), terms: Array.from(terms) }
    }

    // define the division of the evaluation range
    const segmentDivisor = params.segmentDivisor || Foft.divisor
    this.segmentDivisor = segmentDivisor

    let rangeoverride = (typeof params.rangeoverride === 'boolean')
      ? params.rangeoverride
      : false
    let harmonize = (typeof params.harmonize === 'boolean')
      ? params.harmonize
      : false
    // create an evaluation range
    let range = (rangeoverride)
      ? [0, this.segmentDivisor]
      : params.range || Foft.sweep
    range = Foft.isCalculable(range)
      ? [-range, range]
      : range
    if (!Foft.isArrayLike(range)) throw new TypeError('range should be array')
    // if(range.length!==2) throw new RangeError('range should have two elements')
    this.range = Array.from(range)

    // this Foft can use these terms
    // define terms
    this._terms = []
    let terms = params.terms || [(t) => t]
    terms = (typeof terms === 'function')
      ? [terms]
      : terms
    if (!Foft.isArrayLike(terms) && (typeof terms !== 'function') && !(terms instanceof Foft)) {
      throw new TypeError('params.terms should be array, function or Foft instance')
    }
    for (let term of terms) {
      // const term = terms[termIndex];
      // console.log(term);``
      this.addTerm(term, harmonize)
    }
    // console.log(params.opcode)
    // debugger;
    this.opcode = params.opcode
  }

  /**
  * the Function terms of this Foft object
  *
  * @return {Array}
  */
  get terms () {
    return this._terms
  }

  /**
  * add a term to the terms of this Foft instance
  *
  * @param  {(function|Foft)} term A Function that takes a parameter (t) or
  *   Foft
  * @param {boolean} [harmonize=false] if true, and term is a Foft
  *  instance, this overwrites the range and segmentDivisor of term to make them
  *  reference the same-named parameters of this instance.
  * @returns {boolean} true if length of terms grew
  */
  addTerm (term, harmonize) {
    let numterms = this.terms.length
    const push = (_term) => {
      this.terms.push(_term)
      this[numterms] = this.terms[numterms]
    }
    harmonize = (typeof harmonize === 'boolean') ? harmonize : false
    if (typeof term === 'function' && !(term instanceof Foft)) {
      push(term)
    } else if (term instanceof Foft) {
      push(term)
      if (harmonize) {
        // term.range = this.range;
        // term.segmentDivisor = this.segmentDivisor;
        const keys = ['_range', '_segmentDivisor']
        for (let key of keys) {
          Object.defineProperty(term, key, {
            get: () => this[key], // reference to parent
            set: (value) => Object.defineProperty(term, key, { value })// dareference from parent
          })
        }
      }
    }

    return numterms === this.terms.length - 1
  }

  /**
   * set segmentDivisor - set the segment divisor for the evaluation range where
   * - the range will be divided into (segmentDivisor+1) segments,
   * - if given an arraylike parameter, use the 0th value
   * - if given a calculable parameter, use it as-is
   *
   *
   * @param  {number|arraylike<number>} segmentDivisor
   * @throws {TypeError} segmentDivisor should be calculable number
   */
  set segmentDivisor (segmentDivisor) {
    segmentDivisor = Foft.isArrayLike(segmentDivisor)
      ? segmentDivisor[0]
      : segmentDivisor
    if (!Foft.isCalculable(segmentDivisor)) {
      // console.log('NaN segment Divisor')
      throw new TypeError('segmentDivisor should be calculable number, not: ' + segmentDivisor)
    } else {
      this._segmentDivisor = [segmentDivisor]
    }
  }
  /**
  * get segmentDivisor The number of segment divisors
  * (number of t evaluation points -1)
  *   in this Foft
  *
  * @return {Number}
  */
  get segmentDivisor () {
    return this._segmentDivisor[0]
  }

  /**
   * The number of actual segments the Foft divides the evaluation range into
   *
   * @return {Number}
   */
  get numSegments () {
    return this.segmentDivisor + 1
  }

  /**
   * get the delta for t between the first and final values of the
   * evaluation range. May be innacurate when the range has more than two
   * terms
   *
   * @return {number}
   */
  get dt () {
    return this.drange / this.segmentDivisor
  }

  /**
   * set range - only accepts an arraylike of calculables
   *
   * @param  {Array<number>} range
   */
  set range (range) {
    if (!(Foft.isArrayLike(range) && Foft.areCalculables(range))) throw new TypeError('range values should be Array of calculable numbers')
    this._range = Array(range.length)

    for (let rangeIndex in range) {
      this._range[rangeIndex] = range[rangeIndex]
    }
  }
  /**
  * get the evaluation range is the minimum and maximum values for t
  *
  * @return {Array.<Number>}
  */
  get range () {
    return this._range
  }

  /**
  * get the first value of t in the evaluation range T
  * @see T
  * @return {Number}
  */
  get t0 () {
    return this.range[0]
  }

  /**
  * the last value of t in the evaluation range T
  * @see T
  * @return {Number}
  */
  get tt () {
    return this.range[this.range.length - 1]
  }

  /**
  * a Foft can have an opcode as defined in
  * Foft.ops. These codes represent mathematical operations
  * between Numbers and other types. They are useful for performing
  * said operations when the Function or Foft in the terms
  * Array
  *
  * @see Foft.ops
  * @see terms
  * @return {string} @see Foft.ops
  */
  get opcode () {
    return this._opcode
  }

  /**
  * set opcode - set the opcode to one of the opcodes
  *  defined in Foft.ops
  *
  * @param  {string} [opcode=null] @see Foft.ops
  */
  set opcode (opcode) {
    this._opcode = (Foft.isOp(opcode))
      ? opcode
      : null
  }

  /**
   * given indices n & nn
   * returns the delta between sub values in the Foft instance's
   * evaluation range, or: range[nn%range.length]-range[n%range.length],
   *
   * when given no parameters, it uses 0 and 1
   *
   * @param {Number} [n=0] the starting range index.
   * @param {Number} [nn=n+1%this.range.length] the end range index
   * @return {Number}
   * @throws {TypeError} when given non-number parameter
   */
  dSubrange (n, nn) {
    n = Foft.isNum(n)
      ? n
      : 0
    if (nn && !Foft.isNum(nn)) {
      throw new TypeError(`Foft.dSubRange only accepts Numbers, given ${[...arguments]}`)
    }
    n = n % this.range.length
    if (!Number.isInteger(n)) {
      throw new RangeError(`Foft.dSubRange only accepts Integers, given ${[...arguments]}`)
    }
    // for this conditional, we use the explicit isNum to avoid logical
    // error for zero case: if(0) is falsy
    nn = Foft.isNum(nn)
      ? nn % this.range.length
      : (n + 1) % this.range.length
    if (!Number.isInteger(nn)) {
      throw new RangeError(`Foft.dSubRange only accepts Integers, given ${[...arguments]}`)
    }
    return this.range[nn] - this.range[n]
  }

  /**
  * the delta between the the first and final values of the evaluation range
  *
  * @return {Number}
  */
  get drange () {
    return this.range[this.range.length - 1] - this.range[0]
  }
  /**
  * the absolute value of the delta
  * between the first and final values of the evaluation range
  *
  * @return {Number}
  */
  get dabsrange () {
    return Math.abs(this.drange)
  }

  /**
   * get a generator function that yields segmentDivisor+1 values of t spanning the range [this.range[n], this.range[n+1]], where if n or n+1 fall beyond the bounds of this.range.length, they are constrained to fit
   *
   * @param  {Number} [n=0] integer start index of range
   *
   * @return {type}   description
   */
  subT (n, omitLast) {
    omitLast = (typeof omitLast === 'boolean')
      ? omitLast
      : false
    let defaultN = 0
    n = Foft.isNum(n)
      ? n % this.range.length
      : defaultN
    let a = this.range[n]

    let b = this.range[(n + 1) % this.range.length]
    let tsubmax = (omitLast)
      ? this.segmentDivisor - 1
      : this.segmentDivisor
    let dt = (b - a) / this.segmentDivisor

    /**
    * @yields {Number}
    */
    return function * () {
      for (let tsubindex = 0; tsubindex <= tsubmax; tsubindex++) {
        yield a + tsubindex * dt
      }
    }
  }

  /**
  *  get a Generator yielding all values of t across instance evaluation range
  * @example
  * // get the default t values for which a Foft is
  * // evaluated
  * let MoT = new Foft({
  *   range: [0, Math.PI*2],
  *   segmentDivisor: 22,
  *   terms: (t) => [sin(t), cos(t)];
  * });
  * let T = [...MoT.T()]
  * @return {Generator<Number>}
  */
  get T () {
    let rangelimit = this.range.length - 2
    /**
    * @yields {Number}
    */
    return function * () {
      for (let rangeIndex = 0; rangeIndex <= rangelimit; rangeIndex++) {
        yield * (rangeIndex === rangelimit)
          ? this.subT(rangeIndex)()
          : this.subT(rangeIndex, true)() // chop last to eliminate double values
      }
    }
  }

  /**
  * given a Number t, return a normalized (to Foft.sweep)
  * representation of the ratio between t and the delta of the evaluation
  * range of this Foft
  *
  * If t falls out of bounds of range, the value is returned as -/+ Infinity
  *
  * If the evaluation range has more than two values, e.g. [0,1,2],
  * then normalizeT checks in each subrange, e.g. [0,1], [1,2]
  * and returns an Array of normalized values corresponding to each range
  *
  * @see normToRange
  * @see sweep
  * @param  {Number} [t=0]
  * @param {boolean} [doAnti=false]
  * @return {Number|Array<Number>}
  */
  normalizeT (t, doAnti) {
    doAnti = (typeof doAnti === 'boolean')
      ? doAnti
      : false
    let func = (doAnti)
      ? Foft.antiNormToRange
      : Foft.normToRange
    let arr = Array(this.range.length - 1)
    for (let r = 0; r < arr.length; r++) {
      arr[r] = func(t, [
        this.range[r],
        this.range[r + 1]
      ])
    }
    return (arr.length === 1)
      ? arr[0]
      : arr
  }

  /**
   * given a number t return a normalized representation of the ratio of a quantity n to the delta of the instance evaluation range such that the ratio of t to the delta of the evaluation range N satisfies
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
  antinormalizeT (t) {
    return this.normalizeT(t, true)
  }

  /**
   * given a Number t within a the evaluation range of this instance
   * (inclusive), return the value of the corresponding i such that
   *   1. i is proportional to the location of t within the range
   *   2. i is scaled to segmentDivisor
   *
   * If t falls out of bounds of the range, nothing is returned
   *
   * If the range has more than two elements, return an array of length range-1
   * @see iInRange
   * @see segmentDivisor
   * @see normalizeT
   * @param  {Number} t
   * @return {Number|null|Array<number|null>} [0, segmentDivisor]
   */
  i (t) {
    let arr = Array(this.range.length - 1)
    for (let r = 0; r < arr.length; r++) {
      arr[r] = Foft.iInRange(t, [
        this.range[r],
        this.range[r + 1]
      ], this.segmentDivisor)
    }
    return (arr.length === 1)
      ? arr[0]
      : arr
  }

  /**
   * return true IFF a given t falls within the evaluation range of this instance
   *
   * @param  {number} t
   * @return {boolean}
   */
  isInRange (t) {
    return Foft.inRange(t, this.range)
  }
  /**
  * evaluate all of the terms held by this Mathoft for the
  * given t value.
  *
  * When evaluating a Function or Foft term, the function or Foft is called with a this object containing certain useful data regarding the calling instance's evaluation of t @see tThis
  *
  * When evaluating a Foft term, any t that falls outside that term's evaluation range will produce a null result. If the filterNulls parameter is true, then null values will be stripped from the returned result.
  * @see isInRange
  * @param  {Number} [t=t0]
  * @param {boolean} [filterNulls=false]
  * @param {boolean} [maketthis=true]
  * @return {(Number|Array.<Number>|Array<Array>)}
  */
  oft (t, filterNulls, maketthis) {
    // console.log(this)
    t = Foft.isCalculable(t)
      ? t
      : this.t0
    filterNulls = (typeof filterNulls === 'boolean')
      ? filterNulls
      : false
    maketthis = (typeof maketthis === 'boolean')
      ? maketthis
      : true
    // debugger;
    let tthis = (maketthis)
      ? Foft.tThis(t, this)
      : (typeof this.tthis === 'object')
        ? this.tthis
        : null

    let result = []
    for (let i in this.terms) {
      let _term = this.terms[i]
      if (typeof _term === 'function') {
        result[i] = _term.call(tthis, t)
      } else if (_term instanceof Foft) {
        // console.log(_term);
        let subres = _term.isInRange(t)
          ? _term.oft.call(Object.assign(_term, { tthis }), t, null, false)
          : null
        result[i] = subres // OVERRIDE?
      }
    }
    result = (filterNulls)
      ? result.filter((v) => v)
      : result
    return (result.length === 1)
      ? result[0]
      : result
  }

  /**
  * return the oft for the first t in the evaluation range
  *
  * @see t0
  * @see oft
  * @return {(Number|Array.<Number>|Array.<Array>)}
  */
  get ofFirstt () {
    return this.oft(this.t0)
  }
  /**
  * return the oft for the final t in the evaluation range
  *
  * @see range
  * @see oft
  * @return {(Number|Array.<Number>|Array.<Array>)}
  */
  get ofLastt () {
    return this.oft(this.tt)
  }

  /**
  * Accepts a Number tNormal that falls within Foft.sweep, inclusive, and when provided
  *  1 . A NaN value, return NaN
  *  2.  +Infinity, returns evaluation from end bound of range
  *  3.  -Infinity, returns evaluation from start bound of range
  *  4. Any other number even outside of normal range, returns value of that t.
  *
  * @see isCalculable
  * @see ofFirstt
  * @see ofLastt
  * @see sweep
  * @see oft
  * @param  {Number} [tNormal=[-1,1]]
  * @return {(Number|Array.<Number>)}
  */
  oftNormal (tNormal) {
    let dNormal = Foft.sweep[1] - Foft.sweep[0]
    let midNormal = Foft.sweep[0] + dNormal / 2
    tNormal = Foft.isNum(tNormal)
      ? tNormal
      : midNormal
    let t; let midt = (this.tt - this.t0) / 2 + this.t0
    if (Foft.isCalculable(tNormal)) {
      t = midt + (tNormal - midNormal) * this.drange / 2
    }
    // debugger;
    return (t !== undefined)
      ? this.oft(t)
      : (Number.isNaN(tNormal))
        ? NaN
        : tNormal === -Infinity
          ? this.ofFirstt
          : this.ofLastt
  }

  /**
  * Calculate the value of performing an operation _op on the
  * values returned by calculating this Foft instance's terms for
  * some evaluation value t. When given a parameter _acc, the calculation of _op will use _acc as its starting value.
  *
  * This is intended to facilitate convenient manipulation of terms and results.
  *
  * @see oft
  *
  * @param  {Number} t the t to evaluate
  * @param  {string} [_op=this.opcode]  an opcode to perform @see Foft.ops
  * @param  {(Number|Array.<Number>|Array.<Array>)} [_acc=null] an accumulator value to start with @see Foft.ops -> base
  * @return {(Number|Array.<Number>|Array.<Array>)}
  */
  oftOp (_t, _op, _acc) {
    _op = (_op in Foft.ops)
      ? _op
      : this.opcode
    const op = Foft.ops[_op]
    // debugger;
    _acc = ((_acc || Number.isNaN(_acc)))
      ? (Foft.areNums(_acc))
        ? _acc
        : NaN
      : null // op.base
    // debugger;
    const transform = (acc, val) => {
      let transformRes
      // console.log(acc,val);
      switch (Foft.mathTypeOf(val)) {
        case Foft.mathTypes.numberlike:
          if (Foft.isArrayLike(acc)) {
            throw new TypeError('Can\'t apply an arraylike accumulator to a scalar.')
          } else if (Foft.isNum(acc)) {
            transformRes = op(acc, val)
          }
          break
        case Foft.mathTypes.arraylike:
          let isNested = Foft.isArrayLike(val[0])
          if (Foft.isArrayLike(acc)) {
            if (acc.length !== val.length) {
              let areMismatched = (isNested)
                ? acc.length !== val[0].length
                : true
              if (areMismatched) {
                throw new TypeError('Can\'t apply an op to arraylike values of dissimilar lengths.')
              }
            }
            if (isNested) {
              return val.reduce(transform, acc)
            } else {
              for (let i = 0; i < val.length; i++) {
                val[i] = transform(acc[i], val[i]) // overwrite in place
              }
            }
          } else if (Foft.isNum(acc)) {
            for (let i = 0; i < val.length; i++) {
              val[i] = transform(acc, val[i]) // overwrite in place
            }
          }
          transformRes = val
          break
      }
      return transformRes
    }

    let _oft = this.oft(_t)
    //
    if (!_op) {
      return op(_oft)
    }
    // console.log(_oft)
    // console.log(_acc);

    let res
    switch (this.terms.length) {
      case 1:
        res = (_acc || Number.isNaN(_acc))
          ? transform(_acc, _oft)
          : _oft
        break
      default:
        res = (_acc || Number.isNaN(_acc))
          ? Foft.isArrayLike(_acc)
            ? transform(_acc, _oft)
            : _oft.reduce(transform, _acc)
          : _oft.reduce(transform)
        break
    }
    return res
  }

  /**
  * get a Generator that yields
  * all Array=[t, this.oft(t)] for t in evaluation range
  * in form [t, this.oft(t)]
  *
  * @see oft
  * @return {Generator}
  */
  get ofAlltT () {
    return function * () {
      for (let t of [...this.T()]) {
        yield [
          t,
          this.oft(t)
        ]
      }
    }
  }

  /**
  * Symbol.iterator get a Generator that yields
  *    all this.oft(t) for t in evaluation range
  * @see oft
  * @return {Generator} Generator function yielding this.oft(t)
  */
  get [Symbol.iterator] () {
    return function * () {
      yield * [...this.T()].map((t, i) => this.oft(t))
    }
  }

  /**
  * get a Generator that yields all
  * this.oftOp(_t, _acc, _op) for _t in T,
  * _acc, _op provided by user
  *
  * @see ofAlltTOp
  * @return {Generator}  description
  */
  get ofAlltTOp () {
    return function * (_acc, _op) {
      yield * [...this.T()].map((_t) => this.oftOp(_t, _op, _acc))
    }
  }

  /**
  * apply the Array.map native function to the elements yielded by
  * this[Symbol.iterator] with the given callback function and this argument
  *    *
  * @see get [Symbol.iterator]
  * @param  {Function} [callback] callback to apply
  * @param  {Object} [thisArg]  this argument
  * @return {Array}         map result
  */
  mapT (callback, thisArg) {
    if (!(callback instanceof Function)) throw new TypeError('map needs Function callback')
    return [...this].map(callback, thisArg)
  }

  /**
  * apply the Array.map native function to the elements of
  * this.ofAllTOp() with the given callback function and this argument
  * @see Array.map
  * @see ofAllTOp
  * @param  {Function} [callback] callback to apply
  * @param  {Object} [thisArg]  this argument
  * @return {Array}         map result
  */
  mapTOp (callback, thisArg) {
    if (!(callback instanceof Function)) throw new TypeError('map needs Function callback')
    return [...this.ofAlltTOp()].map(callback, thisArg)
  }

  /**
   * toString
   *
   * @override
   * @return {string}
   */
  toString () {
    let res = 'Foft\n'
    res += `range:\n\t[${this.range}]\n`
    res += `segments:\n\t[${this.numSegments}]\n`
    res += `terms:\n`
    for (var i = 0; i < this.terms.length; i++) {
      res += `\t[${i}]: ${this.terms[i]}\n`
    }
    res += `opcode:\n\t${this.opcode}`
    return res
  }

  /**
   * get Symbol.toStringTag
   *
   * @override
   * @return {string}
   */
  get [Symbol.toStringTag] () {
    return 'Foft Function'
  }

  /**
   * give precision warning in the form of an object that can be converted to a primitive.
   *
   * Floating point math has inherent imprecisions. This function is for examining them.
   * @return {object}  the object with primitive values:
   *         {number}  the maximum value for which no precision is lost
   *         {string}  as brief message
   * @static
   */
  static precision (maxtestnum) {
    let res
    let getmsg = (e) => `Maximum safe unit divisor: ${e}`
    let tests = [
      (a) => ((1 / a) * a === 1), //  multiplicative identity
      (a) => Array(a).fill(1 / a).reduce((acc, val) => acc + val, 0) // sum of inverses

    ]
    // only do so many tests
    let testnum = 0
    const maxtest = Foft.isCalculable(maxtestnum)
      ? maxtestnum
      : 144
    // tests[0]
    let lastgoodmultidendivisor, msg
    // tests[1]
    let roundinaccura = [] // all divisors for which rounding error causes failure
    let rounddeltas = [] // the difference between erroneous rounding and 1
    let roundexcesses = [] // divisors for which rounding error causes excess failure
    let rounddeficits = [] // divisors for which rounding error causes deficiency failure

    while (testnum < maxtest) {
      // tests[0]
      if (!tests[0](++testnum)) {
        lastgoodmultidendivisor = testnum - 1
        msg = getmsg(lastgoodmultidendivisor)
      }
      // tests[1]
      const test1result = tests[1](testnum) // testnum has been incremented already
      if (test1result !== 1) {
        roundinaccura.push(testnum)
        rounddeltas.push(test1result - 1)
        if (test1result < 1) rounddeficits.push(testnum)
        if (test1result > 1) roundexcesses.push(testnum)
      }
    };
    res = {
      [Symbol.toPrimitive]: (hint) => {
        if (hint === 'number') return lastgoodmultidendivisor
        return msg
      },
      inaccurateDivisors: {
        all: roundinaccura,
        errors: rounddeltas,
        excessive: roundexcesses,
        deficient: rounddeficits
      },
      [Symbol.iterator]: function * () {
        yield * roundinaccura
      }
    }

    return res
  }

  /**
   * return true IFF both of the following conditions are met
   *   1. there was ONE argument provided, and
   *   2. the sole provided argument was a Number
   *
   *
   * @return {boolean}
   * @static
   */
  static isNum () {
    return (arguments.length === 1) && (typeof arguments[0] === 'number')
  }

  /**
   * return true IFF all of the following conditions are met
   * 1. argument satisfies isNum (One Number argument)
   * 2. argument is not NaN
   * 3. argument is not +/-Infinity
   *
   * This function does more calls than just using isFinite, however, it is used in the Foft class because the class also deals with arrays and objects.
   *
   * @see isNum
   *
   * @return {boolean}  description
   * @static
   */
  static isCalculable () {
    return (arguments.length === 1) && Number.isFinite(arguments[0])
  }

  /**
   * determine whether a given argument x is "like" an array for the purposees of Foft calculations and parsing, returning true IFF x satisfies one of the following conditions:
   * 1 - It is an Array
   * 2 - It is a TypedArray
   * 3 - It provides a Symbol.iterator property
   *
   * The third condition allows for the parsing of various iterable objects, but it does not guarantee that such actions will produce calculable values.
   *
   * @param  {?} x
   * @return {boolean}
   * @static
   */
  static isArrayLike (x) {
    return x && (Object.getOwnPropertySymbols(x).includes(Symbol.iterator) || Array.isArray(x) || ArrayBuffer.isView(x))
  }

  /**
   * areNums return true IFF one of these conditions are met
   *   1. The provided arguments are ALL of Number type,
   *   2. The sole provided argument is an Array whose members are ALL of Number type,
   *   3. Any provided argument is an Array whose members are
   *      A. ALL of Number type, or
   *      B. nested Arrays whose submembers are all number types or Arrays
   *      and ALL other arguments are Number type or Array with ALL members of Number type,
   *
   * @see areCalculables
   *
   * @params {} [arguments] figure out whether the arguments are numbers or
   *  an Array thereof
   * @return {boolean}
   * @static
   */
  static areNums () {
    if (arguments.length === 0) {
      return false
    } else {
      return [...arguments].every(v => {
        return Foft.isArrayLike(v)
          ? Foft.areNums(...v)
          : Foft.isNum(v)
      })
    }
  };

  /**
   * areCalculables return true IFF one of these conditions are met
   *   1. The provided arguments are ALL of Number type,
   *   2. The sole provided argument is an Array whose members are ALL of Number type,
   *   3. Any provided argument is an Array whose members are
   *      A. ALL of Number type, or
   *      B. nested Arrays whose submembers are all number types or Array,
   *   and ALL other arguments are Number type or Array with ALL members of Number type, and
   *   4. All arguments of number type are neither NaN nor -/+Infinity
   *
   * @see areNums
   *
   * @params {} [arguments] figure out whether the arguments are numbers or
   *  an Array thereof
   * @return {boolean}
   * @static
   */
  static areCalculables () {
    if (arguments.length === 0) {
      return false
    } else {
      return [...arguments].every(v => {
        return Foft.isArrayLike(v)
          ? Foft.areCalculables(...v)
          : Foft.isCalculable(v)
      })
    }
  };

  /**
   * determine whether a given number n falls
   * within any of the follwoing inclusive ranges
   *    0. [ Foft.sweep[0], Foft.sweep[1] ]
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
   * @static
   */
  static inRange (n, m, mm) {
    let test = (a, b, c) => {
      // console.log(a,b,c)
      return (a > b)
        ? a <= c
        : (a < b)
          ? a >= c
          : true // a === b
    }
    if (!(Foft.areNums(...arguments) && Foft.isNum(n))) {
      return false
    } else {
      if (arguments.length === 1) {
        return Foft.inRange(n, Foft.sweep)
      } else if (Foft.isArrayLike(m)) {
        // console.log(n,m)
        return (m.length === 1)
          ? test(n, 0, m[0])
          : test(n, m[0], m[m.length - 1])
      } else if (Foft.isNum(m)) {
        if (!Foft.isNum(mm)) {
          return test(n, 0, m)
        } else if (Foft.isNum(mm)) {
          return test(n, m, mm)
        }
      }
    }
  }

  /**
   * given a Number t, amd a ramge TT, return a normalized (to an optional range NN or Foft.sweep)
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
   * @param  {Array<number>} [TT=sweep] the range in which to test for TT
   * @param  {Array<number>} [NN=sweep] the target normalization range * @return {number}
   * @static
   */
  static normToRange (t, TT, NN) {
    if (!Foft.isNum(t)) {
      t = 0
    }
    if (!Foft.areNums(NN)) {
      NN = Foft.sweep
    }
    if (!Foft.areNums(TT)) {
      TT = Foft.sweep
    }
    let [normA, normB] = NN
    let minNorm = (normA < normB)
      ? normA
      : normB
    // let maxNorm = (normB > normA)
    //   ? normB
    //   : normA
    let res = (t - TT[0]) / (TT[1] - TT[0]) // [0-1]
    res = normA + (normB - normA) * res // [normA, normB]

    if (!Foft.inRange(res, normA, normB)) {
      res = (res < minNorm)
        ? -Infinity
        : Infinity
    }

    return res
  }

  /**
   * given a Number t, amd a ramge TT, return a normalized (to Foft.sweep)
   * representation of the ratio between the two deltas A and B where
   *   1. A is the difference betewen t and TT[last]
   *   2. B is the difference between TT[last] and TT[first]
   *
   * If t falls out of bounds of range, the value is returned as -/+ Infinity,
   * where:
   *   1. +Infinity corresponding to beyond the bound of TT[first], and
   *   2. -Infinity corresponding to beyond the bound of TT[last]
   *
   * @see normToRange
   * @param  {number} [t=0] the t to evaluate
   * @param  {Array<number>} [TT=sweep] the range in which to test for TT
   * @return {number}
   * @static
   */
  static antiNormToRange (t, TT, NN) {
    if (!Foft.isNum(t)) {
      t = 0
    }
    if (!Foft.areNums(TT)) {
      TT = Foft.sweep
    }
    if (!Foft.areNums(NN)) {
      NN = Foft.sweep
    }
    let res = Foft.normToRange(t, TT, NN)
    return (Math.abs(res) === Infinity)
      ? -res
      : NN[NN.length - 1] - res
  }

  /**
   * given a number t, a range TT and a divisor d, return the value of the corresponding i such that
   *   1. i is proportional to the location of t within the range
   *   2. i is proportional to d
   *
   * @param  {number} t  t to find in TT
   * @param  {Array<number>} TT range
   * @param  {type} d  divisor
   * @return {null|number}
   * @static
   */
  static iInRange (t, TT, d) {
    d = (Foft.isNum(d))
      ? Math.floor(d)
      : Math.floor(Foft.divisor)
    let res = Foft.normToRange(t, TT, [0, 1])
    return (res === Infinity)
      ? null
      : (res === -Infinity)
        ? null
        : Math.floor(res * d)
  }

  /**
   * return the size of the given x, where x can be a number or an arraylike or a nested arraylike
   *
   * @param  {(number|Array)} x the structure to get dimensions of
   * @return {Array}
   * @static
   */
  static dimensions (x) {
    let dim = Promise.resolve([])
    if (Foft.isNum(x)) {
      return dim.then(dimarr => dimarr.concat(0))
    } else if (Foft.isArrayLike(x)) {
      if (x.length === 0) {
        return dim.then(dimarr => dimarr.concat(0))
      } else {
        let subarrayIndices = []
        let isNotSubarrayTest = (acc, v, i) => {
          if (!Foft.isArrayLike(v)) {
            return acc && true
          } else {
            subarrayIndices.push(i)
            return acc && false
          }
        }
        if (x.reduce(isNotSubarrayTest, true)) {
          return dim.then(dimarr => dimarr.concat(x.length))
        } else {
          return dim.then(dimarr => {
            return Promise.all(subarrayIndices.map((v) => {
              let xSubArr = x[v]
              // console.log(xSubArr)
              return Foft.dimensions(xSubArr)
            })).then(subdims => {
              // console.log(subdims, x.length)
              let flatsubdims = Foft.ops['...'](subdims)
              // console.log(flatsubdims, x.length)
              let mag
              if (Foft.equiv(flatsubdims.length, subdims.length, x.length)) {
                mag = Foft.ops.magest(...flatsubdims)
              } else {
                mag = Foft.ops.magest(...subdims)
              }
              // mag = (Number.isNaN(mag) || mag === 0)
              //   ? []
              //   : mag
              return dimarr.concat(x.length, mag)
            })
          })
        }
      }
    }
    return dim
  }

  /**
   * determine whether the given number or Array-like arguments are satisfying the conditions:
   * 1) all of a single shared type,
   * 2) if numbers, of equal value,
   * 3) if arrays, composed of equal positional elements
   * 4) if other types, satisfying strict equality test
   *
   * When comparing values that are NaN or containing NaN in the same positions, the function will return false because NaN doesn't equal NaN
   *
   * @params {?} [arguments]
   * @return {boolean}
   * @static
   */
  static equiv () {
    if (arguments.length === 0) {
      return false
    }
    if (arguments.length === 1) {
      return !Number.isNaN(arguments[0])
    }
    const a0 = arguments[0]
    const a0type = Foft.mathTypeOf(a0)
    let res = true
    // const dim = Foft.dimensions(arguments[0]);
    for (let i = 1; i < arguments.length; i++) {
      let a = arguments[i]
      if (Foft.mathTypeOf(a) !== a0type) return false
      switch (a0type) {
        case Foft.mathTypes.arraylike:
          if (a.length !== a0.length) return false
          for (let ai = 0; ai < a0.length; ai++) {
            if (!Foft.equiv(a0[ai], a[ai])) return false
          }
          break
        case Foft.mathTypes.numberlike:
          res = res && (a === a0)
          break
        default:
          // console.log(a)
          res = res && (a === a0)
      }
    }
    return res
  }

  /**
   * tell whether the given argument a is of one of the types that Foft can do math with  and if so, which type
   *
   * @param  {?} [a]
   * @return {(Symbol|null)}
   * @static
   */
  static mathTypeOf (a) {
    return Foft.isArrayLike(a)
      ? Foft.mathTypes.arraylike
      : Foft.isNum(a)
        ? Foft.mathTypes.numberlike
        : null
  }

  /**
   * given a t and a Foft instance, produces an object with some keys for inter-instance communication corresponding to:
   * 1 the result of evaluating certain methods of the calling instance for t @see funcKeys
   * 2 certain members of the calling instance @see membKeys
   *
   * @see oft
   * @param  {Number} t the t of the instance communicatiing
   * @param {Foft} foft the instance doing communication
   * @return {object|Array<string>} communication object, or array of communication keys
   * @static
   */
  static tThis (t, foft) {
    let o = (Foft.isCalculable(t))
      ? { t }
      : { }
    let populateFunc = (foft instanceof Foft) && (Foft.isCalculable(t))
      ? (key) => {
        o[key] = foft[key](t)
      }
      : () => null
    let populateMemb = (foft instanceof Foft)
      ? (key) => {
        o[key] = foft[key]
      }
      : () => null
    Foft.funcKeys.map(fkey => populateFunc(fkey))
    Foft.membKeys.map(mkey => populateMemb(mkey))
    if (Object.keys(o).length === 0) {
      return Foft.funcKeys.concat(Foft.membKeys)
    } else {
      return o
    }
  };

  /**
   * given a string codeToParse, return true when code is found
   *  in Foft.opDict
   * @see Foft.opDict
   * @param  {string} codeToParse
   * @return {boolean}
   * @static
   */
  static isOp (codeToParse) {
    return Foft.opDict.includes(codeToParse)
  }

  /**
   * given a string codeToParse, return
   * the corresponding operation function from Foft.ops
   *
   * @see Foft.ops
   * @param  {string} codeToParse
   * @return {function} Foft.ops function corresponding to op
   * @static
   */
  static opParse (codeToParse) {
    return (Foft.isOp(codeToParse))
      ? Foft.ops[codeToParse]
      : Foft.ops[null]
  }
}

Object.defineProperties(Foft, {
  /**
   * valid types that Foft can do math on
   * @see Foft.mathTypeOf
   * @memberof Foft
   * @static
   */
  'mathTypes': {
    value: (() => {
      let o = {};
      [
        'arraylike', 'numberlike'
      ].map(function (e) {
        this[e] = Symbol(e)
        this[this[e]] = e
      }, o)
      return o
    })(),
    enumerable: true,
    configurable: false,
    writable: false
  },
  /**
   * an array of valid op keys
   * @see Foft.ops
   * @memberof Foft
   * @static
   */
  'opDict': {
    value: [null, '+', '-', '*', '/', '**', '...', 'magest', 'magesti'],
    enumerable: true,
    configurable: false,
    writable: false
  },
  /**
   * ops an object containing operations, or ops, that
   * perform mathematical functions corresponding to their keys
   * @see Foft.isOp
   * @see Foft.opDict
   * @see Foft.opParse
   * @see Foft.areNums
   * @memberof Foft
   * @static
   */
  'ops': {
    value: Object.defineProperties({}, {
      'opfunc': {
        value: (code, f) => {
          if (typeof code !== 'string') {
            throw new TypeError('Foft.ops.opfunc takes one string')
          } else if (!Foft.opDict.includes(code)) {
            throw new RangeError('Foft.ops.opfunc takes one string in Foft.opDict')
          }
          return (args) => [...args].reduce((acc, c, i) => f(acc, c))
        },
        writable: false,
        configurable: false,
        enumerable: false
      },
      'resfunc': {
        value: (code, f, base, args) => {
          if (!Foft.isCalculable(base)) {
            throw new TypeError('Foft.ops.resfunc requires a calculable base parameter')
          }
          if (!Foft.isArrayLike(args)) {
            throw new TypeError('Foft.ops.resfunc requires an iterable, Array or ArrayBuffer view args parameter')
          }
          if (Foft.areNums(...args)) {
            return Foft.ops.opfunc(code, f)(args)
          }
          let nullsReplaced = [...args].map(v => (v === null) ? base : v)
          if (Foft.areNums(nullsReplaced)) {
            return Foft.ops.opfunc(code, f)(nullsReplaced)
          }
          return NaN
        },
        writable: false,
        configurable: false,
        enumerable: false
      },
      [null]: {
        enumerable: true,
        value: (() => {
          let code = null
          let base = null
          let desc = 'null op'
          return Object.assign(
            function (...args) {
              return args
            },
            {
              code,
              base,
              desc
            }
          )
        })(),
        configurable: false,
        writable: false
      },
      '+': {
        enumerable: true,
        value: (() => {
          let base = 0
          let code = '+'
          let desc = 'summation'
          return Object.assign(
            function () {
              return Foft.ops.resfunc(code, (a, b) => a + b, base, arguments)
            }, {
              code,
              base,
              desc
            }
          )
        })(),
        configurable: false,
        writable: false
      },
      '-': {
        enumerable: true,
        value: (() => {
          let base = 0
          let code = '-'
          let desc = 'subtraction'
          return Object.assign(
            function () {
              return Foft.ops.resfunc(code, (a, b) => a - b, base, arguments)
            },
            {
              code,
              base,
              desc
            }
          )
        })(),
        configurable: false,
        writable: false
      },
      '*': {
        enumerable: true,
        value: (() => {
          let base = 1
          let code = '*'
          let desc = 'multiplication'
          return Object.assign(
            function () {
              return Foft.ops.resfunc(code, (a, b) => a * b, base, arguments)
            },
            {
              code,
              base,
              desc
            }
          )
        })(),
        configurable: false,
        writable: false
      },
      '/': {
        enumerable: true,
        value: (() => {
          let base = 1
          let code = '/'
          let desc = 'division'
          return Object.assign(
            function () {
              return Foft.ops.resfunc(code, (a, b) => a / b, base, arguments)
            },
            {
              code,
              base,
              desc
            }
          )
        })(),
        configurable: false,
        writable: false
      },
      '**': {
        enumerable: true,
        value: (() => {
          let base = 1
          let code = '**'
          let desc = 'exponentiation'
          return Object.assign(
            function () {
              return Foft.ops.resfunc(code, (a, b) => a ** b, base, arguments)
            },
            {
              code,
              base,
              desc
            }
          )
        })(),
        configurable: false,
        writable: false
      },
      /**
       * ... recursive arraylike flatten. given parameter arr, return
       * - if arr is arraylike, a 1-d  Array containing the elements of arr with their order preserved, or
       * - if arr isn't arraylike, arr
       * @memberof Foft#ops
       * @param {arraylike} arr
       * @return {arraylike|?}
       */
      '...': {
        enumerable: true,
        value: (() => {
          let code = '...'
          let base = []
          let desc = 'flatten'
          return Object.assign(
            function flatten (arr) {
              if (!Foft.isArrayLike(arr)) {
                return arr
              } else {
                return arr.reduce((acc, v) => {
                  return (Foft.isArrayLike(v))
                    ? acc.concat(flatten(v))
                    : acc.concat(v)
                }, base)
              }
            },
            {
              code,
              base,
              desc
            }
          )
        })(),
        configurable: false,
        writable: false
      },
      /**
       * @name magest - given some
       * - calculable values, return the one with the greatest MAGNITUDE
       * - arraylike values, return the one with the greatest MAGEST
       *
       * @memberof ops
       * @params {(number|Array<number>)} arguments
       * @return {(number|Array<number>)}
       */
      'magest': {
        enumerable: true,
        value: (() => {
          let code = 'magest'
          let base = 0
          let desc = 'greatest magnitude'
          return Object.assign(
            function (...args) {
              let max = base
              if ([...arguments].every(Foft.isArrayLike) && (arguments.length > 1)) {
                let maxmagest = base
                let magesti = base
                for (let i = 0; i < arguments.length; i++) {
                  let cur = Foft.ops['magest'](...arguments[i])
                  // console.log(cur)
                  if (cur > maxmagest) {
                    maxmagest = cur
                    magesti = i
                  }
                }
                return arguments[magesti]
              } else if (Foft.areCalculables(...arguments)) {
                for (var i = 0; i < arguments.length; i++) {
                  let cur = Math.abs(arguments[i])
                  max = (cur > max)
                    ? cur
                    : max
                }
                return max
              } else {
                return NaN
              }
            },
            {
              code,
              base,
              desc
            }
          )
        })(),
        configurable: false,
        writable: false
      },
      /**
       * @name magesti - given some values, return the first INDEX of the one with the greatest MAGEST
       *
       * @memberof ops
       * @params {(number|Array<number>)}
       * @return {number}
       */
      'magesti': {
        enumerable: true,
        value: (() => {
          let code = 'magesti'
          let base = 0
          let desc = 'index of greatest magnitude'
          return Object.assign(
            function () {
              let magests = Array(arguments.length)
              for (let i = 0; i < arguments.length; i++) {
                let a = arguments[i]
                magests[i] = (Foft.isArrayLike(a))
                  ? Foft.ops['magest'](...a)
                  : Foft.ops['magest'](a)
              }
              let index = magests.findIndex((v) => {
                // console.log(v)
                return Foft.equiv(
                  v,
                  Foft.ops['magest'](...magests)
                )
              })
              return index
            },
            {
              code,
              base,
              desc
            }
          )
        })(),
        configurable: false,
        writable: false
      }

    }),
    enumerable: true,
    configurable: false,
    writable: false
  },
  /**
   * dimensional labeling
   * @memberof Foft
   * @static
   */
  'R': {
    value: ['x', 'y', 'z'],
    enumerable: true,
    configurable: false,
    writable: false
  },
  /**
   * methods for inter-instance communication
   * @see tThis
   * @memberof Foft
   * @static
   */
  'funcKeys': {
    value: [
      'normalizeT',
      'antinormalizeT',
      'i'
    ],
    enumerable: true,
    configurable: false,
    writable: false
  },
  /**
   * members for inter-instance communication
   * @see tThis
   * @memberof Foft
   * @static
   */
  'membKeys': {
    value: [
      'range',
      'drange',
      't0',
      'segmentDivisor'
    ],
    enumerable: true,
    configurable: false,
    writable: false
  },
  /**
   * divisor By default, Foft instances divide into
   * this many segments
   * @type {Number}
   * @memberof Foft
   * @default 10
   * @static
   */
  'divisor': {
    value: 10,
    enumerable: true,
    configurable: false,
    writable: false
  },
  /**
   * maxSafeDivisor the maximum safe to use divisor
   * @borrows Foft.precision
   * @memberof Foft
   * @static
   */
  'maxSafeDivisor': {
    value: Foft.precision(),
    enumerable: true,
    configurable: false,
    writable: false
  },
  /**
   * sweep By default, Foft instances evaluate functions over this range
   * @type {Array.<Number>}
   * @default [-1,1]
   * @memberof Foft
   * @static
   */
  'sweep': {
    value: [-1, 1],
    enumerable: true,
    configurable: false,
    writable: false
  }
})

export { Foft }
