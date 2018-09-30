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
  * @throws ValueError
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
    const segmentDivisor = params.segmentDivisor || 10;
    if(typeof segmentDivisor !== 'number') throw new TypeError('segmentDivisor should be number');
    this.__segmentDivisor = segmentDivisor;

    let rangeoverride = (typeof params.rangeoverride === 'boolean')
    ? params.rangeoverride
    : false;

    // create an evaluation range
    let range = (rangeoverride)
    ? [0, this.__segmentDivisor]
    : params.range || [0,1];
    range = (typeof range === 'number')
    ? [-range, range]
    : range;
    if(!Array.isArray(range)) throw new TypeError('range should be array');
    if(range.length!==2) throw new ValueError('range should have two elements')
    if(!(typeof range[0]==='number' && typeof range[1]==='number')) throw new TypeError('range values should be numbers')
    this._range = Array(range.length);

    for(let rangeIndex in range){
      this._range[rangeIndex]  = (typeof range[rangeIndex] === 'number')
      ? range[rangeIndex]
      : null;
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
  */
  addTerm(term, harmonize){
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
  }

  /**
  * get segmentDivisor The number of segments (number of t evaluation points -1)
  *   in this MathOfT
  *
  * @return {Number}
  */
  get segmentDivisor(){
    return this.__segmentDivisor;
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
  * get drange - the delta between the values of the evaluation range
  *
  * @return {type}  description
  */
  get drange(){
    let rangesum = 0;
    for(let rangeIndex in this._range){
      const rangeAdd = (rangeIndex == 0)
      ? 0
      : this._range[rangeIndex] - this._range[rangeIndex-1];
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
  get dabsrange(){
    let rangesum = 0;
    for(let rangeIndex in this._range){
      const rangeAdd = (rangeIndex == 0)
      ? 0
      : this._range[rangeIndex] - this._range[rangeIndex-1];
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
  get t(){
    /**
    * @yields {Number}
    */
    return function*(){
      for(let tindex = 0;
        tindex <= this.__segmentDivisor;
        tindex ++){
          yield tindex*this.dt + this._range[0];
        }
      }
    }


    /**
    * tNormalised - given a Number t, return a normalized
    * representation of how far along t is in the evaluation
    * range of this MathOfT
    * @param  {Number} t
    * @return {Number} between 0 and 1 , inclusive
    */
    tNormalised(t){
      return Math.abs((t-this.range[0])/(this.range[1]-this.range[0]));
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

    // ofTRange(trange, numsegment){
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
          tNormal: this.tNormalised(t),
          tNormalRemaining: 1- this.tNormalised(t),
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
          // debugger;
          // result.push(_term.ofT.call(tthis, t)); //OVERRIDE?
          let resultsubarr=[];
          if(_term.opcode){
            resultsubarr=[..._term.ofAllTOp(null,_term.opcode)];
          } else {
            resultsubarr=[..._term.ofAllT()];
          }
          result.push(resultsubarr);
        }
      }
      return (result.length == 1)
      ? result[0]
      : result;
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
     * dimensional labeling
     */
    static R =  ['x', 'y', 'z'];
    static ARENUMBERS = function(){
      if(arguments.length == 0){
        return false;
      } else {
        return [...arguments].every(v => typeof v === 'number' );
        let result = true;
        for(let i = 0; i < arguments.length; i++){
          result = (result && typeof arguments[i] === 'number');
        }
        return result;
      }
    };
    static ISOP = (codeToParse) => codeToParse in MathOfT.OPDICT;
    static OPPARSE = (codeToParse)=> (MathOfT.ISOP(codeToParse))
      ? codeToParse
      : MathOfT.OPDICT[null];
    static OPS =  Object.defineProperties({}, {
      [null]:{
        get: () => {
          function res(){
            return arguments;
          };
          res.code = null;
          res.base = null;
          return res;
        },
        set: () => null
      },
      '+':{
        get: () => {
          let res = (a, b) => (MathOfT.ARENUMBERS(a,b))
          ? a + b
          : NaN;
          res.code = '+';
          res.base = 0;
          return res;
        },
        set: () => '+'
      },
      '-':{
        get: () => {
          let res = (a, b) => (MathOfT.ARENUMBERS(a,b))
          ? a - b
          : NaN;
          res.code = '-';
          res.base = 0;
          return res;
        },
        set: () => '-'
      },
      '*':{
        get: () => {
          let res =  (a, b) => (MathOfT.ARENUMBERS(a,b))
          ? a * b
          : NaN;
          res.code = '*';
          res.base = 1;
          return res;
        },
        set: () => '*'
      },
      '/':{
        get: () => {
          let res = (a, b) => (MathOfT.ARENUMBERS(a,b))
          ? a / b
          : NaN;
          res.code = '/';
          res.base = 1;
          return res;
        },
        set: () => '/'
      },
      '**':{
        get: () => {
          let res = (a, b) => (MathOfT.ARENUMBERS(a,b))
          ? a ** b
          : NaN;
          res.code = '**';
          res.base = 1;
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
    static OPDICT = Object.keys(MathOfT.OPS);
  }



  class PieceWiseMathOfTT{
    /**
    * constructor
    *
    * @param  {(Object|Array|MathOfT)} params
    * @param  {Array} params.mathFunctionArray the MathOfT instances if params is object
    */
    constructor(params){
      params = params || {};

      let mathFunctionArray = (Array.isArray(params))
      ? params
      : (params instanceof MathOfT)
      ? [params]
      : params.mathFunctionArray;
      if(!Array.isArray(mathFunctionArray)) throw new TypeError('new PieceWiseMathOfT needs array');
      if(mathFunctionArray.length < 1) throw new ValueError('new PieceWiseMathOfT needs at least one function in single array parameter');

      this._mathFuncs = Array(mathFunctionArray.length);
      this.__segmentDivisors = Array(mathFunctionArray.length);
      for(let mathFuncIndex in mathFunctionArray){
        const mathfunc = mathFunctionArray[mathFuncIndex];
        if( !(mathfunc instanceof MathOfT)){
          throw new TypeError('new PieceWiseMathOfT can only have MathOfT');
        } else {
          this._mathFuncs[mathFuncIndex] = mathfunc;
          this.__segmentDivisors[mathFuncIndex] = mathfunc.__segmentDivisor;
        }
      }
      // Object.freeze(this._mathFuncs);

    }
    get numMathFuncs(){
      return this._mathFuncs.length;
    }

    get mathFuncs(){
      return this._mathFuncs;
    }
    get copy(){
      return new PieceWiseMathOfTT(this.mathFuncs);
    }


    /**
    * mathFuncN - get MathOfT instances corresponding
    * to provided index/indices n
    *
    * @param  {(Array<Number>|Number)} [n=0] number or Array of number indices
    * @return {Array} Array<MathOfT>
    */
    mathFuncN(n){
      n = n || 0;
      if(typeof n === 'number') {
        return this.mathFuncs[n % this.numMathFuncs];
      } else if(Array.isArray(n)){
        if(!MathOfT.ARENUMBERS(...n)){
          return this.MathFuncsN(0);
        } else {
          let mathfuncs = n.map((v) => this.mathFuncN(v));
          return mathfuncs; //new PieceWiseMathOfTT(mathfuncs);
        }
      }
    }

    get ranges(){
      let result = [];
      for (var i = 0; i < this.mathFuncs.length; i++) {
        result[i] = this.mathFuncs[i].range;
      }
      return result;
    }
    get segmentDivisors(){
      return this.__segmentDivisors;
    }

    get runningSegmentsArr(){
      // console.log('runningSegmentDivisors')
      let arrcopy = Array.from(this.__segmentDivisors);
      // console.log(arrcopy)
      return arrcopy.map((v,i,a)=> a[i] = (i == 0)
      ? v + 1
      : v + 1 + a[i-1] );
    }
    get totalNumSegments(){
      return this.runningSegmentsArr.reduce((a, v)=>a+v, 0);
    }

    get segmentDivisorsString(){
      return this.__segmentDivisors.join("");
    }

    get numFuncs(){
      return this.mathFuncs.length;
    }
    get dtt(){
      return function*(){
        for(let mathFunc of this.mathFuncs){
          yield mathFunc.dt;
        }
      }
    }

    get tt(){
      return function*(){
        for(let mathFunc of this.mathFuncs){
          yield [...mathFunc.t()];
        }
      }
    }

    ofTT(tt){
      const __segmentDivisors = this.segmentDivisors;
      const _runningSegmentsArr = this.runningSegmentsArr;
      const max = _runningSegmentsArr[_runningSegmentsArr.length-1];
      // console.info(tt, this.__segmentDivisors, _runningSegmentDivisors, max);
      tt = tt % max;
      // console.info(tt);
      let RESULT, done=false;
      _runningSegmentsArr.reduce((accumulator,runningSegment,segmentIndex)=>{
        let mathFunc, t;
        if((tt < runningSegment) && (!done)){
          // when the tt is less than val in running segment divisors,
          // it means that we should seek the function from the mathfunc
          // at index t correspomding to tt - previous val  or tt - 0
          mathFunc = this.mathFuncs[segmentIndex];
          t = tt - accumulator;
          RESULT = mathFunc.ofT(t*mathFunc.dt);
          // console.info(accumulator, runningSegment, segmentIndex, mathFunc._terms.toString(), `tt: ${tt}, t: ${t}, max: ${max}`, RESULT);
          done = true;
        }
        return runningSegment;
      }, 0);

      // console.info(RESULT);
      return RESULT;
    }

    get ofFirstTT(){
      return this.mathFuncs[0].ofFirstT;
    }

    get ofLastTT(){
      return this.mathFuncs[this.mathFuncs.length-1].ofLastT;
    }

    get ofAllTT(){
      return function*(){
        for(let mathFunc of this.mathFuncs){
          yield [...mathFunc.ofAllT()];
        }
      }
    }

    ofAllTTinN(n){
      n = n || 0;
      return this.mathFuncN(n)
      .reduce((acc, mathfunc) => acc.concat(...mathfunc), []);
    }

    get [Symbol.iterator](){
      return function *(){
        var TT = 0;
        for(let mathFunc of this.mathFuncs){
          for(let t of [...mathFunc.t()]){
            yield [
              TT++,
              mathFunc.ofT(t)
            ];
          }
        }
      }
    }

    map(callback, thisArg){
      if(!(callback instanceof Function)) throw new TypeError('map needs Function callback');
      return this.mathFuncs.map(callback, thisArg);
    }
    mapTOp(callback, thisArg){
      if(!(callback instanceof Function)) throw new TypeError('map needs Function callback');
      return this.mathFuncs.map((mathFunc) => {
        return mathFunc.mapTOp(callback, thisArg);
      });
    }
  }
  Object.defineProperties(PieceWiseMathOfTT, {
    COPY:{
      get: ()=>(pwmftt)=>{
        if(pwmftt instanceof PieceWiseMathOfTT){
          return pwmftt.copy;
        }
      },
      set: ()=>null,
    },
  });

  class PieceWiseXYZofTTT{
    constructor(params){
      params = params || {};
      let result = {};
      let ttLength = 0;
      let segmentDivisorsString = "";
      // debugger;
      for(let rIndex in PieceWiseXYZofTTT.R){
        const R = PieceWiseXYZofTTT.R[rIndex];
        // debugger;
        if(!(params[R] instanceof PieceWiseMathOfTT)){
          throw new TypeError(`params.${R} should be PieceWiseMathOfTT`);
        } else {
          ttLength = (rIndex == 0)
          ? params[R].numFuncs
          : ttLength;
          segmentDivisorsString = (rIndex == 0)
          ? params[R].segmentDivisorsString
          : segmentDivisorsString;
          if(params[R].numFuncs !== ttLength){
            throw new ValueError(`Shared Domain: each params${R}.numFuncs`
              +` should equal ${ttLength}`);
            } else if(params[R].segmentDivisorsString !== segmentDivisorsString){
              throw new ValueError(`Shared Domain: each params${R}.segmentDivisorsString`
                +` should equal ${segmentDivisorsString}`);
              }


              result[R] = params[R];

            }
          }
          this._xyz = result;
          // console.info(this._xyz)
        }

        get x(){
          return this._xyz.x;
        }
        get i(){
          return this.x;
        }
        get y(){
          return this._xyz.y;
        }
        get j(){
          return this.x;
        }
        get z(){
          return this._xyz.z;
        }
        get k(){
          return this.x;
        }
        get numMathFuncs(){
          return this.x.numMathFuncs;
        }
        get segmentDivisors(){
          return this.x.segmentDivisors;
        }
        get runningSegmentsArr(){
          return this.x.runningSegmentsArr;
        }
        get totalNumSegments(){
          return this.x.totalNumSegments;
        }
        get ranges(){
          return this.x.ranges;
        }

        get ofAllTTT(){
          let result = {
            matrix: new Array(PieceWiseXYZofTTT.R.length),
          };
          for(let i in PieceWiseXYZofTTT.R){
            let r = PieceWiseXYZofTTT.R[i];
            result[r] = [...this[r].ofAllTT()];
            result.matrix[i] = this[r].map((mathFunc) => [...mathFunc])
          }
          return result;
        }


        /**
        * mathFuncsN -
        *
        * @param  {Number} n
        * @return {Array<MathOfT>}
        */
        mathFuncsN(n){
          n = (Number.isInteger(n))
          ? n
          : 0;
          return PieceWiseXYZofTTT.R.map((r, i) => this[r].mathFuncN(n));
        }
        ofAllTTTinN(n){
          n = (Number.isInteger(n))
          ? [n]
          : (Array.isArray(n))
          ? n.filter(v => MathOfT.ARENUMBERS(v))
          : [0];
          let result = [];
          for (let i in n){
            let mathfuncs = this.mathFuncsN(n[i]);
            let rows = [];
            for(let mathfunc of mathfuncs){
              rows.push([...mathfunc]);
            }
            for(let col = 0; col < rows[0].length; col++){
              let subarr = []
              for (let row of rows){
                subarr.push(row[col]);
              }
              result.push(subarr);
            }
          }

          return result;
        }

        get [Symbol.iterator](){
          return function * (){
            let TTT = 0;
            // let result = this.ofAllT();
            for(let mathFuncIndex in this.x.mathFuncs){
              // console.info(mathFuncIndex);
              let xmathFunc = this._xyz.x.mathFuncs[mathFuncIndex];
              let ymathFunc = this._xyz.y.mathFuncs[mathFuncIndex];
              let zmathFunc = this._xyz.z.mathFuncs[mathFuncIndex];

              for(let t of [...xmathFunc.t()]){
                // console.log(t);
                yield [
                  TTT++,
                  xmathFunc.ofT(t),
                  ymathFunc.ofT(t),
                  zmathFunc.ofT(t),
                ];
              }
            };
          }
        }

        ofTTT(ttt){
          // console.log(ttt)
          return [
            ttt,
            this.x.ofTT(ttt),
            this.y.ofTT(ttt),
            this.z.ofTT(ttt)
          ];
        }
        get ofLastTTT(){
          return [
            this.totalNumSegments,
            this.x.ofLastTT,
            this.y.ofLastTT,
            this.z.ofLastTT
          ];
        }
        get ofFirstTTT(){
          return [
            0,
            this.x.ofFirstTT,
            this.y.ofFirstTT,
            this.z.ofFirstTT,
          ];
        }

      }


      Object.defineProperty(PieceWiseXYZofTTT, 'R', {
        get: () => MathOfT.R,
        set: () => null,
      });
      module.exports = {
        MathOfT,
        PieceWiseMathOfTT,
        PieceWiseXYZofTTT,
        R: PieceWiseXYZofTTT.R, //dimensionality
      }

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
