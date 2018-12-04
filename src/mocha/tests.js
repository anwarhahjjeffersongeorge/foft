module.exports = {
  dotest: function(MathOfT, chaigrammar) {
    // const {should, expect, assert} = chaigrammar;
    // console.log(chaigrammar)
    //TODO MathOFT tests
    describe('MathOfT', function() {
      it('should be a function (class)', function() {
        MathOfT.should.be.an('function')
        // console.log(MathOfT);
      });
      describe('Has static members of specified types', function(){
        //these are the static properties and types that should be in MathOfT
        const staticpropsandtypes={
          R: 'Array',
          ISNUMBER: 'function',
          ARENUMBERS: 'function',
          OPDICT: 'Array',
          ISOP: 'function',
          OPPARSE: 'function',
          INRANGE: 'function',
          OPS: 'Object',
          DEFAULT_SEGMENT_DIVISOR: 'Number',
          DEFAULT_RANGE: 'Array',
        };
        Object.keys(staticpropsandtypes).forEach((propname)=>{
          let typename = staticpropsandtypes[propname];
          it(`Property ${propname} should exist as an ${typename}`, function() {
            MathOfT.should.have.own.property(propname);
            MathOfT[propname].should.be.an(typename);

          });
        });

        describe('with the functionalities such that', function() {
          describe(`MathOfT.ISNUMBER`, function(){
            it('returns true when provided a SINGLE argument of Number type', function(){
              MathOfT.ISNUMBER(3).should.be.true;
              MathOfT.ISNUMBER(NaN).should.be.true;
              MathOfT.ISNUMBER(Infinity).should.be.true;
              MathOfT.ISNUMBER(Math.random()).should.be.true;
            })
            it('returns false when provided argument NOT of Number type', function(){
              MathOfT.ISNUMBER('3').should.be.false;
              MathOfT.ISNUMBER(undefined).should.be.false;
              MathOfT.ISNUMBER(null).should.be.false;
              MathOfT.ISNUMBER({}).should.be.false;
              MathOfT.ISNUMBER([]).should.be.false;
              MathOfT.ISNUMBER(Math.random).should.be.false;
            });
            it('returns false when NOT provided a SINGLE argument', function(){
              MathOfT.ISNUMBER(3,3).should.be.false;
              MathOfT.ISNUMBER().should.be.false;
            });
          })

          describe(`MathOfT.ARENUMBERS`,function(){
            it('returns true when ALL arguments are numbers(including NaN, Infinity)', function() {
              MathOfT.ARENUMBERS(Math.random(), Math.random()).should.be.true;
              MathOfT.ARENUMBERS(0,1,2,3,4,6,7,8,99).should.be.true;
              MathOfT.ARENUMBERS(0, NaN, 44).should.be.true;
              MathOfT.ARENUMBERS(0, Infinity, 44).should.be.true;
            });
            it('returns false when ANY arguments are not numbers', function(){
              MathOfT.ARENUMBERS('l').should.be.false;
              MathOfT.ARENUMBERS('55',5).should.be.false;
              MathOfT.ARENUMBERS(55, 55, 5.4, NaN, Infinity, '535', 5).should.be.false;
            });
            it('returns false when arguments are null', function(){
              MathOfT.ARENUMBERS().should.be.false;
            });
            it('returns true when ALL array members are numbers(including NaN, Infinity)',
              function() {
              MathOfT.ARENUMBERS([Math.random(), Math.random()]).should.be.true;
              MathOfT.ARENUMBERS([0,1,2,3,4,6,7,8,99]).should.be.true;
              MathOfT.ARENUMBERS([0, NaN, 44]).should.be.true;
              MathOfT.ARENUMBERS([0, Infinity, 44]).should.be.true;
            });
            it('returns false when ANY array members are not numbers', function(){
              MathOfT.ARENUMBERS(['l']).should.be.false;
              MathOfT.ARENUMBERS(['55',5]).should.be.false;
              MathOfT.ARENUMBERS([55, 55, 5.4, NaN, Infinity, '535', 5]).should.be.false;
            });
            it('returns false for null array', function(){
              MathOfT.ARENUMBERS([]).should.be.false;
            });
            it('returns true for arrays whose nested array members contain submembers that are ALL numbers', function(){
              MathOfT.ARENUMBERS([1,2,3,[1,34]]).should.be.true;
              MathOfT.ARENUMBERS([[NaN,Infinity]]).should.be.true;
            });
            it('returns false for arrays whose nested array members contain submembers that are NOT ALL numbers', function(){
              MathOfT.ARENUMBERS([1,2,3,[1,'b', 34]]).should.be.false;
              MathOfT.ARENUMBERS([[NaN,{},Infinity]]).should.be.false;
            });
            it('returns true for mixed args of numbers and arrays whose nested array members contain submembers that are ALL numbers or Number-filled Arrays', function(){
              MathOfT.ARENUMBERS(1,2,3,[1,34]).should.be.true;
              MathOfT.ARENUMBERS([NaN,Infinity],2,4).should.be.true;
            });
            it('returns false for mixed args of numbers and arrays whose nested array members contain submembers that are NOT ALL numbers or Number-filled Arrays', function(){
              MathOfT.ARENUMBERS(1,2,3,{},[1,34]).should.be.false;
              MathOfT.ARENUMBERS(['popo',NaN,Infinity],2,4).should.be.false;
            });
          });
          describe('MathOfT.INRANGE', function(){
            it('returns false when arguments provided don\'t satisfy MathOfT.ARENUMBERS', function(){
              MathOfT.INRANGE(3,'a').should.be.false;
            });
            it('returns false when FIRST argument provided doesn\'t satisfy MathOfT.ISNUMBER', function(){
              MathOfT.INRANGE([3]).should.be.false;
            });
            it(`returns true when sole argument n falls within MathOfT.DEFAULT_RANGE`, function(){
              let testval = MathOfT.DEFAULT_RANGE[0] +
                (MathOfT.DEFAULT_RANGE[1] - MathOfT.DEFAULT_RANGE[0])/2;
              MathOfT.INRANGE(testval).should.be.true;
            });
            it(`returns false when sole argument n falls outside of MathOfT.DEFAULT_RANGE`, function(){
              let testval = MathOfT.DEFAULT_RANGE[0] +
                (MathOfT.DEFAULT_RANGE[1] - MathOfT.DEFAULT_RANGE[0])*2;
              MathOfT.INRANGE(testval).should.be.false;
            });
            it(`returns true when n of arguments (n,m) with m being a Number falls within [0, m]`, function(){
              let testN = Math.random();
              let testM = testN*2;
              MathOfT.INRANGE(testN, testM).should.be.true;
            });
            it(`returns false when n of arguments (n,m) with m being a Number falls outside of [0, m]`, function(){
              let testN = Math.random();
              let testM = testN/2;
              MathOfT.INRANGE(testN, testM).should.be.false;
            });
            it(`returns true when n of arguments (n,m) with m being a unit-length Array falls within [0, m[0]]`, function(){
              let testN = Math.random();
              let testM = [testN*2];
              MathOfT.INRANGE(testN, testM).should.be.true;
            });
            it(`returns false when n of arguments (n,m) with m being a unit-length Array falls outside of [0, m[0]]`, function(){
              let testN = Math.random();
              let testM = [testN/2];
              MathOfT.INRANGE(testN, testM).should.be.false;
            });
            it(`returns true when n of arguments (n,m) with m being an Array falls within [m[0], m[m.length-1]]`, function(){
              let testN = Math.random();
              let testM = [testN/2, testN*2];
              MathOfT.INRANGE(testN, testM).should.be.true;
              let testM2 = [testN/2, testN/2, testN*2];
              MathOfT.INRANGE(testN, testM2).should.be.true;
            });
            it(`returns false when n of arguments (n,m) with m being an Array falls outside of [m[0], m[m.length-1]]`, function(){
              let testN = Math.random();
              let testM = [testN/2, testN/4];
              MathOfT.INRANGE(testN, testM).should.be.false;
              let testM2 = [testN/2, testN*2, testN/4];
              MathOfT.INRANGE(testN, testM2).should.be.false;
            });
            it(`returns true when n of arguments (n,m,mm) falls within [m, mm]`, function(){
              let testN = Math.random();
              let testM = testN/2;
              let testMM = testN*2;
              MathOfT.INRANGE(testN, testM, testMM).should.be.true;
            });
            it(`returns false when n of arguments (n,m,mm) falls outside of [m, mm]`, function(){
              let testN = Math.random();
              let testM = testN/2;
              let testMM =  testN/4;
              MathOfT.INRANGE(testN, testM, testMM).should.be.false;
            });
            it('returns true when n is one of the edge values of the given test range', function(){
              MathOfT.INRANGE(MathOfT.DEFAULT_RANGE[0]).should.be.true;
              let testN = Math.random();
              let testM = Math.random();
              let testMM = Math.random();
              MathOfT.INRANGE(testN, testN).should.be.true; //[0, m]
              MathOfT.INRANGE(testN, [testN]).should.be.true; //[0, m[0]]
              MathOfT.INRANGE(testN, [testN, testM]).should.be.true; //[m[0], m[1]]
              MathOfT.INRANGE(testN, [testM, testN]).should.be.true; //[m[0], m[1]]
              MathOfT.INRANGE(testN, testN, testM).should.be.true; //[m, mm]
              MathOfT.INRANGE(testN, testM, testN).should.be.true; //[m, mm]
            });
          });

          describe('MathOfT.OPDICT', function() {
            // console.log(MathOfT.OPDICT)
            MathOfT.OPDICT.forEach((key)=>{
              it(`contains ${key} in MathOfT.OPS`, function(){
                if(key){ //key can be null
                  MathOfT.OPS.should.have.own.property(key);
                }
              });
            })
          });
          describe('Math.OPPARSE', function(){
            MathOfT.OPDICT.forEach((key)=>{
              it(`returns function for ${key} in MathOfT.OPS`, function(){
                if(key){ //key can be null
                  MathOfT.OPPARSE(key).should.be.a('function');
                }
              });
            });
            let dummychar = ()=>String.fromCharCode(Math.floor(255*Math.random()));
            let badcodes = Array(10).fill(dummychar());
            badcodes.forEach((badcode)=>{
              let resetbadcode = () => badcode = String.fromCharCode(
                Math.floor(255*Math.random()));
              while (MathOfT.OPDICT.includes(badcode)){
                resetbadcode();
              }
              it(`returns no-op passthrough function for ${badcode} not in MathOfT.OPS`, function(){
                let testargs = [Math.random(), Math.random()]
                let testTarget = MathOfT.OPPARSE(badcode);
                testTarget.should.be.a('function');
                let testResult = testTarget(...testargs)
                testResult.should.be.an('Array');
                testResult.should.be.equalTo(testargs);
              });
            });
          })
          describe('MathOfT.ISOP', function() {
            let goodtestcodes = Array.from(MathOfT.OPDICT);
            goodtestcodes.map((code)=>{
              it(`returns true when given MathOfT.OPDICT code ${code}`, function() {
                MathOfT.ISOP(code).should.be.true;
              });
            });
            let numbadcodes = 10, badtestcodes=[];
            for(let n = 0; n < numbadcodes; n++){
              let badcode;
              let resetbadcode = () => badcode = String.fromCharCode(
                Math.floor(255*Math.random()));
              resetbadcode();
              while (MathOfT.OPDICT.includes(badcode)){
                resetbadcode();
              }
              badtestcodes[n] = badcode;
            }
            // console.info(badtestcodes.length)
            badtestcodes.forEach((code)=>{
              it(`returns false when given random code ${code}`, function() {
                MathOfT.ISOP(code).should.be.false;
              });
            });
          });
          describe('MathOfT.OPS', function() {
            let opskeys=[null, '+', '-', '*', '/', '**']
            opskeys.forEach((key)=>{
              let testTarget = MathOfT.OPS[key];
              // console.log(testTarget)
              describe(`contains property ${key}`, function() {
                it(`which is a function that`, function() {
                  testTarget.should.be.a('function');
                });
                if(key){ //null key
                  it(`has own property base (number)`, function() {
                    testTarget.should.be.a('function');
                    testTarget.should.have.own.property('base');
                    testTarget['base'].should.be.a('number');
                  });
                  it(`has own property code(string) `, function() {
                    testTarget.should.be.a('function');
                    testTarget.should.have.own.property('code');
                    testTarget['code'].should.be.a('string');
                  });
                }
                switch (key) {
                  case null:
                    it(`should perform null operation on its operands, returning them unchanged in array format`, function(){
                      let testResult = MathOfT.OPS[key](1,2,3,4)
                      testResult.should.be.an('array');
                      testResult.should.be.equalTo([1,2,3,4]);
                      testResult = MathOfT.OPS[key](1,2,3,NaN);
                      testResult.should.be.an('array');
                      testResult[0].should.equal(1);
                      testResult[1].should.equal(2);
                      testResult[2].should.equal(3);
                      //can't use should.be.equalTo because of NaN value (NaN !== NaN)
                      testResult[3].should.be.NaN;
                    });
                    break;
                  case '+':
                    it(`should perform summation on its number operands`, function(){
                      MathOfT.OPS[key](1,2,3,4).should.equal(1+2+3+4);
                      MathOfT.OPS[key](1,2,3,NaN).should.be.NaN;
                    });
                    break;
                  case '-':
                    it(`should perform subtraction on its number operands`, function(){
                      MathOfT.OPS[key](1,2,3,4).should.equal(1-2-3-4);
                      MathOfT.OPS[key](1,2,3,NaN).should.be.NaN;
                    });
                    break;
                  case '*':
                    it(`should perform multiplication on its number operands`, function(){
                      MathOfT.OPS[key](1,2,3,4).should.equal(1*2*3*4);
                      MathOfT.OPS[key](1,2,3,NaN).should.be.NaN;
                    });
                    break;
                  case '/':
                    it(`should perform division on its number operands`, function(){
                      MathOfT.OPS[key](1,2,3,4).should.equal(1/2/3/4);
                      MathOfT.OPS[key](1,2,3,NaN).should.be.NaN;
                    });
                    break;
                  case '**':
                    it(`should perform exponentiation on its number operands`, function(){
                      MathOfT.OPS[key](1,2,3,4).should.equal(1**2**3**4);
                      MathOfT.OPS[key](1,2,3,NaN).should.be.NaN;
                    });
                    break;
                  default:
                    break;
                }
              });

            });
          });
        });

      });
      describe('MathOfT constructor', function(){
        describe('accepts a single parameter', function(){
          it('should have constructor function length 1 ', () => {
            MathOfT.constructor.length.should.equal(1);
          });
          it('should accept Function as parameter and set it to terms array', function(){
            let testFunction = (t)=>t*32
            let testObj = new MathOfT(testFunction);
            testObj.terms[0].should.be.a('function');
            let testVal = Math.random();
            testObj.terms[0](testVal).should.equal(testFunction(testVal));
          });
          it('should accept Array.<Number> as paramter and set it to range array ', function() {
            let testArray = [0,44]
            let testObj = new MathOfT(testArray);
            testObj.range.should.be.array();
            testObj.range.should.be.equalTo(testArray);
          });


        });
        describe('accepts an object as single parameter', function() {
          it('should use object keys to set appropriate named properties', function() {
            let testParamsObj = {
              terms: [(t)=>Math.sin(t)/5, (t)=>Math.cos(3*t)/7, (t)=>Math.sin(5*t)/9],
              segmentDivisor: 15,
              range: [0, -Math.PI]
            }
            let testObj = new MathOfT(testParamsObj);
            testObj.range.should.be.array();
            testObj.range.should.be.equalTo(testParamsObj.range);
            testObj.segmentDivisor.should.equal(testParamsObj.segmentDivisor);
            testObj.terms.should.be.array();
            testObj.terms.should.be.ofSize(testParamsObj.terms.length);
            let testVal = Math.random();
            testParamsObj.terms[0](testVal).should.equal(testObj.terms[0](testVal))
            testParamsObj.terms[1](testVal).should.equal(testObj.terms[1](testVal))
            testParamsObj.terms[2](testVal).should.equal(testObj.terms[2](testVal))
          });
          describe('key: segmentDivisor', function() {
            it('should use default (fail gracefully) when provided NaN segment divisor', function() {
              let testParamsObj = {
                terms: [(t)=>Math.sin(t)/5, (t)=>Math.cos(3*t)/7, (t)=>Math.sin(5*t)/9],
                segmentDivisor: NaN,
                range: [0, -Math.PI]
              };
              let testObj;
              let testObjFunc = ()=>testObj= new MathOfT(testParamsObj);
              testObjFunc.should.not.throw(TypeError);
              testObj.segmentDivisor.should.equal(10);
            });
            it('should error when provided non-number segment divisor', function() {
              let testParamsObj = {
                terms: [(t)=>Math.sin(t)/5, (t)=>Math.cos(3*t)/7, (t)=>Math.sin(5*t)/9],
                segmentDivisor: 'y',
                range: [0, -Math.PI]
              };
              let testObjFunc = ()=>new MathOfT(testParamsObj);
              testObjFunc.should.throw(TypeError);
            });
          });

        });
      });

      describe('object produced by constructor new MathOfT()', function(){
        let testObj = new MathOfT();
        it('should be an instance of MathOfT', function() {
          testObj.should.be.instanceof(MathOfT);
        });
        describe('should start with default instance members', function(){
          it(`range (Array) MathOfT.DEFAULT_RANGE ${MathOfT.DEFAULT_RANGE}: `, function(){
            testObj.range.should.be.array();
            testObj.range.should.be.ofSize(2);
            testObj.range.should.be.equalTo(MathOfT.DEFAULT_RANGE);
          });
          it(`segmentDivisor (number): MathOfT.DEFAULT_SEGMENT_DIVISOR ${MathOfT.DEFAULT_SEGMENT_DIVISOR}` , function(){
            testObj.segmentDivisor.should.be.a('number');
            testObj.segmentDivisor.should.equal(MathOfT.DEFAULT_SEGMENT_DIVISOR);
          });
          it('terms (Array): [ x => x ]', function(){
            testObj.terms.should.be.array();
            testObj.terms.should.be.ofSize(1);
            let testFunc = testObj.terms[0], testVal = Math.random();
            testFunc.should.be.a('function');
            testFunc(testVal).should.equal(testVal);
          });
        });
      });
      describe('object produced by constructor new MathOfT(function)', function(){
        let testFactor = Math.random();
        let testRangeFunc = d => d*testFactor;
        let testObj = new MathOfT(testRangeFunc);
        it('should be an instance of MathOfT', function() {
          testObj.should.be.instanceof(MathOfT);
        });
        describe('should start with range set to given Array', function(){
          it(`range (Array) MathOfT.DEFAULT_RANGE ${MathOfT.DEFAULT_RANGE}`, function(){
            testObj.range.should.be.array();
            testObj.range.should.be.ofSize(2);
            testObj.range.should.be.equalTo(MathOfT.DEFAULT_RANGE);
          });
          it(`segmentDivisor (number): MathOfT.DEFAULT_SEGMENT_DIVISOR ${MathOfT.DEFAULT_SEGMENT_DIVISOR}` , function(){
            testObj.segmentDivisor.should.be.a('number');
            testObj.segmentDivisor.should.equal(MathOfT.DEFAULT_SEGMENT_DIVISOR);
          });
          it('terms (Array): [function]', function(){
            testObj.terms.should.be.array();
            testObj.terms.should.be.ofSize(1);
            let testFunc = testObj.terms[0], testVal = Math.random();
            testFunc.should.be.a('function');
            testFunc(testVal).should.equal(testRangeFunc(testVal));
          });
        });
      });
      describe('object produced by constructor new MathOfT(Array)', function(){
        let testRangeArr = [4,2];
        let testObj = new MathOfT(testRangeArr);
        it('should be an instance of MathOfT', function() {
          testObj.should.be.instanceof(MathOfT);
        });
        describe('should start with range set to given Array', function(){
          it(`range (Array): [0,1]`, function(){
            testObj.range.should.be.array();
            testObj.range.should.be.ofSize(2);
            testObj.range.should.be.equalTo(testRangeArr);
          });
          it(`segmentDivisor (number): MathOfT.DEFAULT_SEGMENT_DIVISOR ${MathOfT.DEFAULT_SEGMENT_DIVISOR}` , function(){
            testObj.segmentDivisor.should.be.a('number');
            testObj.segmentDivisor.should.equal(MathOfT.DEFAULT_SEGMENT_DIVISOR);
          });
          it('terms (Array): [ x => x ]', function(){
            testObj.terms.should.be.array();
            testObj.terms.should.be.ofSize(1);
            let testFunc = testObj.terms[0], testVal = Math.random();
            testFunc.should.be.a('function');
            testFunc(testVal).should.equal(testVal);
          });
        });
      });
      describe('MathOfT instance', function(){
        let testObj;
        let testRangeArr = [];
        before(function(){
          testObj = new MathOfT();
        });
        describe('.addTerm(term)', function(){
          it('should only add terms of type function or MathOfT', function(){
            let badobj = {},
              goodobjA = dd=>dd,
              goodobjB = new MathOfT();
            testObj.addTerm(badobj).should.be.false;
            testObj.addTerm(goodobjA).should.be.true;
            testObj.addTerm(goodobjB).should.be.true;
          });
        });
        describe('.drange', function(){
          before(function(){
            testRangeArr = [-1, 20, -100];
            testObj = new MathOfT(testRangeArr);
          });
          it('should return the difference between the MathOfT .range\'s first and last elements', function(){
            testObj.drange.should.equal(testRangeArr[testRangeArr.length-1] - testRangeArr[0]);
          });
        });
        describe('.dabsrange', function(){
          before(function(){
            testRangeArr = [-1, 20, -100];
            testObj = new MathOfT(testRangeArr);
          });
          it('should return the absoulte value of the difference between the MathOfT .range\'s first and last elements', function(){
            testObj.dabsrange.should.equal(Math.abs(testRangeArr[testRangeArr.length-1] - testRangeArr[0]));
          });
        });
        describe('.dSubrange', function(){
          before(function(){
            testRangeArr = [-1, 20, -100];
            testObj = new MathOfT(testRangeArr);
          });
          it('should throw TypeError when given non-number arguments', function(){
            ()=>testObj.dSubrange('b').should.throw(TypeError);
          });
          it('should throw RangeError when given non-integer arguments', function(){
            ()=>testObj.dSubrange(4.5, 0).should.throw(RangeError);
            ()=>testObj.dSubrange(0, 4.5,).should.throw(RangeError);
          });
          it('should when given no parameters return the difference between the 0th-indexed range element and the 1st', function(){
            testObj.dSubrange().should.equal(testRangeArr[1]-testRangeArr[0])
          });
          it('should when given one Integer value n, return the difference between the (n+1)th-indexed range element and the nth', function(){
            let n = 1;
            testObj.dSubrange(n).should.equal(testRangeArr[n+1]-testRangeArr[n]);
          });
          it('should when given Integer values n and nn, return the difference between the nnth-indexed range element and the nth', function(){
            let n = 2;
            let nn = 0;
            testObj.dSubrange(n,nn).should.equal(testRangeArr[nn]-testRangeArr[n]);
          });
          it('should when given out-of-bounds Integer values n and nn, return the difference between the (bound-constrained) nnth-indexed and nth range elements', function(){
            let n = 12;
            let nn = 10;
            testObj.dSubrange(n,nn).should.equal(
              testRangeArr[nn%testRangeArr.length]
                - testRangeArr[n%testRangeArr.length]);
          });
        });
        describe(`.subT()`, function(){
          before(function(){
            testRangeArr = [
              Math.random(),
              Math.random(),
              Math.random(),
              Math.random()
            ];
            testObj = new MathOfT(testRangeArr);
          });
          it('should return a function', function(){
            testObj.subT().should.be.a('function');
            testObj.subT(4).should.be.a('function');
          });
          it('should return a function that yields appropriate number of properly-range-spanning values starting at the given n index and ending at the n+1th, with n defaulting to 0 and constrained to length of MathOfT instance range', function() {
            for(let n = 0; n < testRangeArr.length*2; n++){
              let generator = testObj.subT(n);
              let yielded = [...generator()];
              let nn = (n+1);
              let n1 = n%testRangeArr.length;
              let nn1 = nn%testRangeArr.length;
              //first and last values
              yielded[0].should.equal(testRangeArr[n1])
              yielded[yielded.length-1]
                .should.equal(testRangeArr[nn1]);
              //length
              yielded.length.should.equal(testObj.numSegments)
              //check a random value in the sequence
              let randind = Math.floor(Math.random()*yielded.length);
              let deltaRange = testRangeArr[nn1]-testRangeArr[n1];
              let deltaSegment = deltaRange/testObj.segmentDivisor;
              yielded[randind].should.equal(
                testRangeArr[n1] + randind*deltaSegment
              );
            }
          });
          it('should accept second-position boolean (default false) that when true, prevents the generator from yielding the final value as normal', function(){
            let n = 0;
            let generator = testObj.subT(n);
            let yielded = [...generator()];
            let generator2 = testObj.subT(n,true);
            let yielded2 = [...generator2()];
            yielded.length.should.equal(yielded2.length+1, 'length of yielded without last value should be one less than length of yielded with all values');
            for(let i in yielded2){
              yielded2[i].should.equal(yielded[i], `each element in yielded without last value should equal corresponding element in yielded with all values `);
            }
          });

        });
        describe('.t', function(){
          before(function(){
            testRangeArr = [
              Math.random(),
              Math.random(),
              Math.random(),
              Math.random()
            ];
            testRangeArr = [0,1,3,-4]
            testObj = new MathOfT(testRangeArr);
          });
          it('should be a function', function(){ //can't seem to test whether it's a generator though
            testObj.t.should.be.a('function');
          });
          it('should return a function that yields appropriate number of properly-range-spanning values across the entire evaluation range of the MathOfT instance', function(){
            let yielded = [...testObj.t()];
            //first and last values
            yielded[0].should.equal(testRangeArr[0])
            yielded[yielded.length-1]
              .should.equal(testRangeArr[testRangeArr.length-1]);
            //length
            yielded.length.should.equal(
              (testRangeArr.length-2)*(testObj.numSegments-1)
              + testObj.numSegments
            );
          });

        });
        describe('.normalizeT', function(){
          let outofboundsA, outofboundsB;
          describe('for a MathOfT instance whose range has two elements',
          function(){
            before(function(){
              testRangeArr = [Math.random(),Math.random()];
              [outofboundsA, outofboundsB] = [
                testRangeArr[0]-(testRangeArr[1]-testRangeArr[0]),
                testRangeArr[1]-(testRangeArr[0]-testRangeArr[1])
              ];
              // console.log(testRangeArr);
              // console.log(outofboundsA, outofboundsB)
              testObj = new MathOfT(testRangeArr);
            });
            it('should when given parameter t correctly calculate the corresponding normalized value', function(){
              testObj.normalizeT(testRangeArr[0]).should.equal(MathOfT.DEFAULT_RANGE[0])
              testObj.normalizeT(testRangeArr[1]).should.equal(MathOfT.DEFAULT_RANGE[1])
              let midVal = testRangeArr[0] + (testRangeArr[1]-testRangeArr[0])/2;
              let midRangeVal = MathOfT.DEFAULT_RANGE[0] + (MathOfT.DEFAULT_RANGE[1]-MathOfT.DEFAULT_RANGE[0])/2;
              testObj.normalizeT(midVal).should.equal(midRangeVal);
            });
            it('should when given parameter t correctly calculate the corresponding normalized value, returning -/+ Infinity for out-of-bounds t', function(){
              testObj.normalizeT(outofboundsA).should.equal(-Infinity)
              testObj.normalizeT(outofboundsB).should.equal(Infinity)
            });

          });
          describe('for a MathOfT instance whose range has more than two elements', function(){
            before(function(){
              testRangeArr =[
                Math.random(),
                Math.random(),
                Math.random(),
                Math.random()
              ];
              testObj = new MathOfT(testRangeArr);
            });
            it('should when given parameter t return array of normalized values for each element-pair-subrange in MathOfT instance range array', function(){
              let res = testObj.normalizeT(-1) //less than Math.random in testRangeArr
              res.should.be.an('array');
              res.should.be.ofSize(testRangeArr.length-1)
              res.every(v => v==-Infinity || v==Infinity ).should.be.true;
              //explicit tValues
              testObj = new MathOfT([0,1,2,0])
              res =  testObj.normalizeT(.5)
              res.should.be.equalTo([0,-Infinity,.5])
            });
          });
        });
        describe('ofTNormal', function(){

        });

      });



    });
    //TODO browser tests
    describe('browser Functionality', function() {
      // body...
    });
    //TODO nodejs tests
    describe('nodejs Functionality', function() {
      // body...
    });

  }

};