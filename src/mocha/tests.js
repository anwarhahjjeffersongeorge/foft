'use strict';
import chai from 'chai';
import chai_almost from 'chai-almost';
import chai_as_promised from 'chai-as-promised';
chai.use(chai_almost()); //chai.use(chai_almost(Number.EPSILON));
chai.use(chai_as_promised);

chai.config.includeStack = true; // turn on stack trace
var should = chai.should();
var expect = chai.expect;
var assert = chai.assert;

function dotest(MathOfT){
  const PI = Math.PI;
  const TAU = 2*PI;

  //TODO MathOFT tests
  describe('MathOfT', function() {
    it('should be a function (class)', function() {
      MathOfT.should.be.an('function')
      // console.log(MathOfT);
      // (Math.sin(PI)).should.be.almost.equalTo(0)
    });
    describe('Has static members of specified types', function(){
      //these are the static properties and types that should be in MathOfT
      const staticpropsandtypes={
        R: 'Array',
        CALC_PRECISION_WARN: 'function',
        ISNUMBER: 'function',
        ISCALCULABLE: 'function',
        ARENUMBERS: 'function',
        ARECALCULABLES: 'function',
        DIMENSIONS: 'function',
        ISARRAYLIKE: 'function',
        EQUAL: 'function',
        MATHTYPEOF: 'function',
        MATHTYPES: 'Object',
        OPDICT: 'Array',
        MEMBERKEYS: 'Array',
        FUNCKEYS: 'Array',
        ISOP: 'function',
        OPPARSE: 'function',
        INRANGE: 'function',
        NORMALIZETORANGE: 'function',
        ANTINORMALIZETORANGE: 'function',
        IINRANGE: 'function',
        TTHIS_TEMPLATE: 'function',
        OPS: 'Object',
        DEFAULT_SEGMENT_DIVISOR: 'Number',
        DEFAULT_RANGE: 'Array',
        MAX_SAFE_DIVISOR: 'Object',
      };
      Object.keys(staticpropsandtypes).forEach((propname)=>{
        let typename = staticpropsandtypes[propname];
        it(`Property ${propname} should exist as an ${typename}`, function() {
          MathOfT.should.have.own.property(propname);
          MathOfT[propname].should.be.an(typename);

        });
      });

      describe('with the functionalities such that', function() {
        describe(`MathOfT.CALC_PRECISION_WARN`, function(){
          it('should return an object that can collapse to a number or string that includes said number', ()=>{
            let res = MathOfT.CALC_PRECISION_WARN();
            res.should.be.an('object');
            (+res).should.be.a('number');
            (''+res).should.be.a('string');
            (''+res).includes(+res).should.be.true;
          });
        });

        describe(`MathOfT.MAX_SAFE_DIVISOR`, function(){
          let res;
          before(function(){
            res = MathOfT.MAX_SAFE_DIVISOR;
          });
          it('should be an object that can collapse to a number or string', ()=>{
            res.should.be.an('object');
            (+res).should.be.a('number');
            (''+res).should.be.a('string');
          });
          it('should be equal to MathOfT.CALC_PRECISION_WARN()', function(){
            (+res).should.equal(+MathOfT.CALC_PRECISION_WARN());
            (''+res).should.equal(''+MathOfT.CALC_PRECISION_WARN());
          });

        });
        describe(`MathOfT.ISCALCULABLE`, function(){
          it('returns true when provided a SINGLE argument of Number type that is not NaN, +Infinity or -Infinity', function(){
            MathOfT.ISCALCULABLE(3.3).should.be.true;
            MathOfT.ISCALCULABLE(0).should.be.true;
            MathOfT.ISCALCULABLE(NaN).should.be.false;
            MathOfT.ISCALCULABLE(Infinity).should.be.false;
            MathOfT.ISCALCULABLE(-Infinity).should.be.false;
            MathOfT.ISCALCULABLE(Math.random()).should.be.true;
          });
        });
        describe(`MathOfT.ARECALCULABLES`,function(){
          it('returns true when ALL arguments are numbers(excluding NaN, Infinity)', function() {
            MathOfT.ARECALCULABLES(Math.random(), Math.random()).should.be.true;
            MathOfT.ARECALCULABLES(0,1,2,3,4,6,7,8,99).should.be.true;
            MathOfT.ARECALCULABLES(0, NaN, 44).should.be.false;
            MathOfT.ARECALCULABLES(0, Infinity, 44).should.be.false;
          });
          it('returns false when ANY arguments are not numbers', function(){
            MathOfT.ARECALCULABLES('l').should.be.false;
            MathOfT.ARECALCULABLES('55',5).should.be.false;
            MathOfT.ARECALCULABLES(55, 55, 5.4, NaN, Infinity, 5).should.be.false;
            MathOfT.ARECALCULABLES(55, 55, 5.4, NaN, Infinity, '535', 5).should.be.false;
          });
          it('returns false when arguments are null', function(){
            MathOfT.ARECALCULABLES().should.be.false;
          });
          it('returns true when ALL array members are numbers(excluding NaN, Infinity)',
            function() {
            MathOfT.ARECALCULABLES([Math.random(), Math.random()]).should.be.true;
            MathOfT.ARECALCULABLES([0,1,2,3,4,6,7,8,99]).should.be.true;
            MathOfT.ARECALCULABLES([0, NaN, 44]).should.be.false;
            MathOfT.ARECALCULABLES([0, Infinity, 44]).should.be.false;
          });
          it('returns false when ANY array members are not finite numbers', function(){
            MathOfT.ARECALCULABLES(['l']).should.be.false;
            MathOfT.ARECALCULABLES(['55',5]).should.be.false;
            MathOfT.ARECALCULABLES([55, 55, 5.4, NaN, Infinity, 5]).should.be.false;
            MathOfT.ARECALCULABLES([55, 55, 5.4,'535', 5]).should.be.false;
          });
          it('returns false for null array', function(){
            MathOfT.ARECALCULABLES([]).should.be.false;
          });
          it('returns true for arrays whose nested array members contain submembers that are ALL finite numbers', function(){
            MathOfT.ARECALCULABLES([1,2,3,[1,34]]).should.be.true;
            MathOfT.ARECALCULABLES([[NaN,Infinity]]).should.be.false;
          });
          it('returns false for arrays whose nested array members contain submembers that are NOT ALL finite numbers', function(){
            MathOfT.ARECALCULABLES([1,2,3,[1,'b', 34]]).should.be.false;
            MathOfT.ARECALCULABLES([[NaN,{},Infinity]]).should.be.false;
          });
          it('returns true for mixed args of numbers and arrays whose nested array members contain submembers that are ALL numbers or finite Number-filled Arrays', function(){
            MathOfT.ARECALCULABLES(1,2,3,[1,34]).should.be.true;
            MathOfT.ARECALCULABLES([NaN,Infinity],2,4).should.be.false;
          });
          it('returns false for mixed args of numbers and arrays whose nested array members contain submembers that are NOT ALL numbers or Number-filled Arrays', function(){
            MathOfT.ARECALCULABLES(1,2,3,{},[1,34]).should.be.false;
            MathOfT.ARECALCULABLES(['popo',NaN,Infinity],2,4).should.be.false;
          });
        });
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
        });


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
            MathOfT.ARENUMBERS(55, 55, 5.4, '535', 5).should.be.false;
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
            MathOfT.ARENUMBERS([55, 55, 5.4, '535', 5]).should.be.false;

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

        describe(`MathOfT.DIMENSIONS`, function(){
          it('identifies the dimensions of a Number as 0', function(){
            return MathOfT.DIMENSIONS(3).should.eventually.deep.equal([0]);
          });
          it('doesnt try to identify the dimensions of non-Array-like object', function(){
            return MathOfT.DIMENSIONS({}).should.eventually.deep.equal([]);
          });
          it('identifies the dimension of an empty Array-like object as 0', ()=>{
            return MathOfT.DIMENSIONS([]).should.eventually.deep.equal([0]);
          })
          it('identifies the dimension of a non-nested Array-like object as its length', function(){
              return Promise.all([
              MathOfT.DIMENSIONS([1,3]).should.eventually.deep.equal([2]),
              MathOfT.DIMENSIONS([1,2,null,3]).should.eventually.deep.equal([4])
            ]);
          });
          it('identifies the dimensions of a 2-D nested array correctly', ()=>{
            return MathOfT.DIMENSIONS([
              [1,2,4],
              [1,3,4]
            ]).should.eventually.deep.equal([2,3]);
          })
          it('identifies the dimensions of a regular 3-D nested array correctly', ()=>{
            return MathOfT.DIMENSIONS([
              [
                [1,2,4],
                [1,3,4]
              ],
              [
                [3,2,4],
                [55,3,4]
              ],
            ]).should.eventually.deep.equal([2,2,3]);
          })
        });
        describe('MathOfT.EQUAL', () => {
          it('should return true for any number of congruent number arguments', () => {
            MathOfT.EQUAL(1,1,1,1).should.be.true;
            MathOfT.EQUAL(Infinity,Infinity).should.be.true;
            MathOfT.EQUAL(0,0,0,0,0,7-7).should.be.true;
          });
          it('should return false for any number of incongruent number arguments', () => {
            MathOfT.EQUAL(1,3,1,1).should.be.false;
            MathOfT.EQUAL(NaN,NaN).should.be.false;
            MathOfT.EQUAL(NaN,2).should.be.false;
            MathOfT.EQUAL(-Infinity,Infinity).should.be.false;
            MathOfT.EQUAL(0,0,0,0,0,7).should.be.false;
          });
          it('should return true for any number of congruent, non-nested array arguments of any lengths', () => {
            MathOfT.EQUAL([1,1],[1,1]).should.be.true;
            MathOfT.EQUAL([Infinity,Infinity],[Infinity,Infinity]).should.be.true;
            MathOfT.EQUAL([0,0,0],[0,0,0],[0,0,7-7]).should.be.true;
          });
          it('should return false for any number of incongruent, non-nested array arguments of any lengths', () => {
            MathOfT.EQUAL([1,1],[1,1,1]).should.be.false;
            MathOfT.EQUAL([NaN],[111]).should.be.false;
            MathOfT.EQUAL([NaN],[NaN]).should.be.false;
            MathOfT.EQUAL([Infinity,-Infinity],[Infinity,Infinity]).should.be.false;
            MathOfT.EQUAL([0,0,0],[0,0,0],[0,0,-7]).should.be.false;
          });
          it('should return true for any number of congruent, nested array arguments of any lengths', () => {
            MathOfT.EQUAL([[1,1],[1,1]],
              [[1,1],[1,1]]).should.be.true;
            MathOfT.EQUAL([Infinity,[Infinity]],[Infinity,[Infinity]]).should.be.true;
            MathOfT.EQUAL([[0,0,0],[3,5,1]],
              [[0,0,0],[3,5,1]],
              [[0,0,7-7],[6-3,0+5,1/1]]).should.be.true;
          });
          it('should return false for any number of incongruent, nested array arguments of any lengths', () => {
            MathOfT.EQUAL([1,1],[1,1,1]).should.be.false;
            MathOfT.EQUAL([NaN],[111]).should.be.false;
            MathOfT.EQUAL([[NaN]],[[NaN]]).should.be.false;
            MathOfT.EQUAL([Infinity,-Infinity],[Infinity,Infinity]).should.be.false;
            MathOfT.EQUAL([0,0,0],[0,0,0],[0,0,-7]).should.be.false;
          });
        });

        describe('MathOfT.NORMALIZETORANGE', function(){
          let outofboundsA, outofboundsB, testRangeArr, dTestRangeArr;
          describe('for any t and range TT that has two elements',
          function(){
            beforeEach(function(){
              testRangeArr = [Math.random(),Math.random()];
              dTestRangeArr = () => testRangeArr[testRangeArr.length-1]-testRangeArr[0];
              [outofboundsA, outofboundsB] = [
                testRangeArr[0]-dTestRangeArr(),
                testRangeArr[1]+dTestRangeArr(),
              ];
            });
            it('should when given parameter t correctly calculate the corresponding normalized value', function(){
              MathOfT.NORMALIZETORANGE(testRangeArr[0], testRangeArr).should.equal(MathOfT.DEFAULT_RANGE[0])
              MathOfT.NORMALIZETORANGE(testRangeArr[1], testRangeArr).should.equal(MathOfT.DEFAULT_RANGE[1])
              let midVal = testRangeArr[0] + (testRangeArr[1]-testRangeArr[0])/2;
              let fullRangeVal = MathOfT.DEFAULT_RANGE[1] - MathOfT.DEFAULT_RANGE[0]
              let midRangeVal = MathOfT.DEFAULT_RANGE[0] + fullRangeVal/2;
              MathOfT.NORMALIZETORANGE(midVal, testRangeArr).should.almost.equal(midRangeVal);
              //ex.
              testRangeArr=[0,1];
              let normt = .35;
              let testval = normt * dTestRangeArr() + testRangeArr[0]
              MathOfT.NORMALIZETORANGE(testval,testRangeArr).should.equal(MathOfT.DEFAULT_RANGE[0]+fullRangeVal*normt)
            });
            it('should when given parameter t correctly calculate the corresponding normalized value, returning -/+ Infinity for out-of-bounds t', function(){
              MathOfT.NORMALIZETORANGE(outofboundsA, testRangeArr).should.equal(-Infinity)
              MathOfT.NORMALIZETORANGE(outofboundsB, testRangeArr).should.equal(Infinity)
            });
            it('should accept a parameter NN and use it as the target normalization output range', function(){
              testRangeArr=[0,1];
              let normarr = [0, 100];
              let normt = .35;
              let testval = normt * dTestRangeArr() + testRangeArr[0]
              MathOfT.NORMALIZETORANGE(normt,testRangeArr,normarr).should.equal(35)
            });
          });
        });
        describe('MathOfT.MATHTYPEOF', () => {
          it('should recognize number-like types', function(){
            MathOfT.MATHTYPEOF(3).should.equal(MathOfT.MATHTYPES.numberlike);
            MathOfT.MATHTYPEOF(Infinity).should.equal(MathOfT.MATHTYPES.numberlike);
            MathOfT.MATHTYPEOF(NaN).should.equal(MathOfT.MATHTYPES.numberlike);
          });
          it('should recognize array-like types', function(){
            MathOfT.MATHTYPEOF([9]).should.equal(MathOfT.MATHTYPES.arraylike);
            MathOfT.MATHTYPEOF([]).should.equal(MathOfT.MATHTYPES.arraylike);
            // MathOfT.MATHTYPEOF().should.equal(MathOfT.MATHTYPES.arraylike);
          });
          it('should return null for unrecognized types', function(){
            expect(MathOfT.MATHTYPEOF('3')).to.be.null;
            expect(MathOfT.MATHTYPEOF({Infinity})).to.be.null;
            expect(MathOfT.MATHTYPEOF((a)=>a)).to.be.null;
          });
        });
        describe('MathOfT.ISARRAYLIKE', () => {
          it('should return true for Array types', function(){
            MathOfT.ISARRAYLIKE([9]).should.be.true;
            MathOfT.ISARRAYLIKE([]).should.be.true;
            MathOfT.ISARRAYLIKE([[1,1],[3,3]]).should.be.true;
          });
          it('should return true for Array types', function(){
            MathOfT.ISARRAYLIKE(new Float32Array([1,1,1,33,53])).should.be.true;
            MathOfT.ISARRAYLIKE(new Int8Array()).should.be.true;
            // MathOfT.ISARRAYLIKE([[1,1],[3,3]]).should.be.true;
          });
          it('should return false for non-Array-like types', function(){
            MathOfT.ISARRAYLIKE('3').should.be.false;
            MathOfT.ISARRAYLIKE({Infinity}).should.be.false;
            MathOfT.ISARRAYLIKE((a)=>a).should.be.false;
          });
        });
        describe('MathOfT.IINRANGE', () => {
          let outofboundsA, outofboundsB, testRangeArr, dTestRangeArr, d;
          describe('for any number t, number d and array TT ',
          function(){
            beforeEach(function(){
              testRangeArr = [Math.random(),Math.random()];
              d =22;
              dTestRangeArr = () => testRangeArr[testRangeArr.length-1]-testRangeArr[0];
              [outofboundsA, outofboundsB] = [
                testRangeArr[0]-dTestRangeArr(),
                testRangeArr[1]+dTestRangeArr(),
              ];
            });
            it('should when given parameter t correctly calculate the integer corresponding to the position of t in TT times the given d ', function(){
              MathOfT.IINRANGE(testRangeArr[0], testRangeArr, d).should.equal(0);
              MathOfT.IINRANGE(testRangeArr[1], testRangeArr, d).should.equal(d);
              MathOfT.IINRANGE(.5,[0,1],10).should.equal(5);
              MathOfT.IINRANGE(.11,[0,1],200).should.equal(22);
              MathOfT.IINRANGE(30,[0,200],10).should.equal(1);
              MathOfT.IINRANGE(.5,[0,1],50).should.equal(25);
            });
            it('should when given parameter t correctly calculate the corresponding normalized value, returning null for out-of-bounds t', function(){
              should.not.exist(MathOfT.IINRANGE(outofboundsA, testRangeArr, d));
              should.not.exist(MathOfT.IINRANGE(outofboundsB, testRangeArr, d));
            });

          });
        });
        describe('MathOfT.ANTINORMALIZETORANGE', function(){
          let outofboundsA, outofboundsB, testRangeArr, dTestRangeArr;
          describe('for any t and range TT that has two elements',
          function(){
            beforeEach(function(){
              testRangeArr = [Math.random(),Math.random()];
              dTestRangeArr = () => testRangeArr[testRangeArr.length-1]-testRangeArr[0];
              [outofboundsA, outofboundsB] = [
                testRangeArr[0]-dTestRangeArr(),
                testRangeArr[1]+dTestRangeArr(),
              ];
            });
            it('should when given parameter t correctly calculate the corresponding normalized value', function(){
              MathOfT.ANTINORMALIZETORANGE(testRangeArr[0], testRangeArr).should.equal(MathOfT.DEFAULT_RANGE[1]-MathOfT.DEFAULT_RANGE[0])
              MathOfT.ANTINORMALIZETORANGE(testRangeArr[1], testRangeArr).should.equal(0)
              let midVal = testRangeArr[0] + (testRangeArr[1]-testRangeArr[0])/2;
              let fullRangeVal = MathOfT.DEFAULT_RANGE[1] - MathOfT.DEFAULT_RANGE[0]
              let midRangeVal = MathOfT.DEFAULT_RANGE[0] + fullRangeVal/2;
              MathOfT.ANTINORMALIZETORANGE(midVal, testRangeArr).should.almost.equal(MathOfT.DEFAULT_RANGE[1]-midRangeVal);
              //ex.
              testRangeArr=[0,1];
              let normt = .35;
              let antinormt = testRangeArr[1] - normt;
              let testval = normt * dTestRangeArr() + testRangeArr[0]
              MathOfT.ANTINORMALIZETORANGE(testval,testRangeArr).should.equal(1.3)
            });
            it('should when given parameter t correctly calculate the corresponding normalized value, returning -/+ Infinity for out-of-bounds t', function(){
              MathOfT.ANTINORMALIZETORANGE(outofboundsA, testRangeArr).should.equal(Infinity)
              MathOfT.ANTINORMALIZETORANGE(outofboundsB, testRangeArr).should.equal(-Infinity)
            });
            it('should accept a parameter NN and use it as the target normalization output range', function(){
              testRangeArr=[0,1];
              let normarr = [0, 100];
              let normt = .35;
              let testval = normt * dTestRangeArr() + testRangeArr[0]
              MathOfT.ANTINORMALIZETORANGE(normt,testRangeArr,normarr).should.equal(65)
            });
          });
        });

        describe('MathOfT.TTHIS_TEMPLATE', function(){
          it('when called without a valid t or mathoft method, return an array of keys', function(){
            let res = MathOfT.TTHIS_TEMPLATE();
            res.should.be.an('array');
          });
          it('when called with a first parameter that satisfies MathOfT.ISNUMBER and a second parameter that is a MathOfT instance, return an object whose members correspond to the MathOfT\'s computed values for t or own members', function () {
            let testObj = new MathOfT({
              terms: [t=>3+t*2],
              range: [0, 100]
            });
            let testt = 2;
            let res = MathOfT.TTHIS_TEMPLATE(testt, testObj);
            res.should.be.an('object');
            for (var fkey of MathOfT.FUNCKEYS) {
              res[fkey].should.equal(testObj[fkey](testt));
            }
            for (var mkey of MathOfT.MEMBERKEYS) {
              res[mkey].should.equal(testObj[mkey]);
            }
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
          let badcodes = Array(10).fill(null).map(() => dummychar());
          badcodes.forEach((badcode)=>{
            let resetbadcode = () => badcode = String.fromCharCode(
              Math.floor(255*Math.random()));
            while (MathOfT.OPDICT.includes(badcode)){
              resetbadcode();
            }
            it(`returns no-op passthrough function for random code ${badcode} not in MathOfT.OPDICT`, function(){
              let testargs = [Math.random(), Math.random()]
              let testTarget = MathOfT.OPPARSE(badcode);
              testTarget.should.be.a('function');
              let testResult = testTarget(...testargs)
              testResult.should.be.an('Array');
              testResult.should.deep.equal(testargs);
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
            it(`returns false when given random code ${code} not in MathOfT.OPDICT`, function() {
              MathOfT.ISOP(code).should.be.false;
            });
          });
        });
        describe('MathOfT.OPS', function() {
          let opskeys=MathOfT.OPDICT;
          // console.log(testTarget)
          let opfunckey='opfunc';
          describe(`contains property ${opfunckey}`, function() {
            let testTarget = MathOfT.OPS[opfunckey];
            it(`which is a non-enumerable function that takes one string argument in MathOfT.OPDICT and returns a function`, function() {
              Object.keys(MathOfT.OPS).includes(opfunckey).should.be.false;
              should.exist(MathOfT.OPS[opfunckey]);
              testTarget.should.be.a('function');
              testTarget.length.should.equal(1);
              let badfunc=()=>testTarget(3);
              badfunc.should.throw(TypeError);
              badfunc=()=>testTarget({});
              badfunc.should.throw(TypeError);
              let badcode;
              let resetbadcode = () => badcode = String.fromCharCode(
                Math.floor(255*Math.random()));
              resetbadcode();
              while (MathOfT.OPDICT.includes(badcode)){
                resetbadcode();
              }
              badfunc=()=>testTarget(badcode);
              badfunc.should.throw(RangeError);
              let goodfunc = ()=>testTarget('-');
              goodfunc.should.not.throw();
              goodfunc().should.be.a('function');
            });
          });
          let resfunckey='resfunc';
          describe(`contains property ${resfunckey}`, function() {
            let testTarget = MathOfT.OPS[resfunckey];
            it(`which is a non-enumerable function that takes three arguments`, function() {
              Object.keys(MathOfT.OPS).includes(resfunckey).should.be.false;
              should.exist(MathOfT.OPS[resfunckey]);
              testTarget.should.be.a('function');
              testTarget.length.should.equal(3);
            });
            it('which throws error when given an unrecognized code parameter', () =>{
              let badfunc=()=>testTarget({},1,[0,2,4]);
              badfunc.should.throw(TypeError);
              let badcode;
              let resetbadcode = () => badcode = String.fromCharCode(
                Math.floor(255*Math.random()));
              resetbadcode();
              while (MathOfT.OPDICT.includes(badcode)){
                resetbadcode();
              }
              badfunc=()=>testTarget(badcode,1,[0,2,4]);
              badfunc.should.throw(RangeError);
            });
            it('which throws error when given an incalculable base parameter', () => {
              let badfunc=()=>testTarget('-',NaN,[0,2,4]);
              badfunc.should.throw(TypeError);
            });
            it('which throws error when given a non iterable args parameter', () => {
              let badfunc=()=>testTarget('-',1,33);
              badfunc.should.throw(TypeError);
            });
          });
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
                  testTarget['code'].should.be.a('string');
                });
              }
              let base = MathOfT.OPS[key].base;
              switch (key) {
                case null:
                  it(`should perform null operation on its operands, returning them unchanged in array format`, function(){
                    let testResult = MathOfT.OPS[key](1,2,3,4)
                    testResult.should.be.an('array');
                    testResult.should.deep.equal([1,2,3,4]);
                    testResult = MathOfT.OPS[key](1,2,3,NaN);
                    testResult.should.be.an('array');
                    testResult[0].should.equal(1);
                    testResult[1].should.equal(2);
                    testResult[2].should.equal(3);
                    //can't use should.deep.equal because of NaN value (NaN !== NaN)
                    testResult[3].should.be.NaN;
                  });
                  break;
                case '+':
                  it(`should perform summation on its number operands, substituting ${base} for null operands`, function(){
                    MathOfT.OPS[key](1,2,3,4).should.equal(1+2+3+4);
                    MathOfT.OPS[key](1,null,3,4).should.equal(1+base+3+4);
                    MathOfT.OPS[key](1,2,3,NaN).should.be.NaN;
                  });
                  break;
                case '-':
                  it(`should perform subtraction on its number operands, substituting ${base} for null operands`, function(){
                    MathOfT.OPS[key](1,2,3,4).should.equal(1-2-3-4);
                    MathOfT.OPS[key](1,null,3,4).should.equal(1-base-3-4);
                    MathOfT.OPS[key](1,2,3,NaN).should.be.NaN;
                  });
                  break;
                case '*':
                  it(`should perform multiplication on its number operands, substituting ${base} for null operands`, function(){
                    MathOfT.OPS[key](1,2,3,4).should.equal(1*2*3*4);
                    MathOfT.OPS[key](1,null,3,4).should.equal(1*base*3*4);
                    MathOfT.OPS[key](1,2,3,NaN).should.be.NaN;
                  });
                  break;
                case '/':
                  it(`should perform division on its number operands, substituting ${base} for null operands`, function(){
                    MathOfT.OPS[key](1,2,3,4).should.equal(1/2/3/4);      MathOfT.OPS[key](1,null,3,4).should.equal(1/base/3/4);
                    MathOfT.OPS[key](1,2,3,NaN).should.be.NaN;
                  });
                  break;
                case '**':
                  it(`should perform exponentiation on its number operands, substituting ${base} for null operands`, function(){
                    MathOfT.OPS[key](1,2,3,4).should.equal(1**2**3**4);
                    MathOfT.OPS[key](1,null,3,4).should.equal(1**base**3**4);
                    MathOfT.OPS[key](1,2,3,NaN).should.be.NaN;
                  });
                  break;
                case 'magest':
                  it('should identify the greatest magnitude in the given number operands', function(){
                    MathOfT.OPS[key](1,2,3,4).should.equal(4);
                    MathOfT.OPS[key](-100,2,3, 10).should.equal(100);
                    MathOfT.OPS[key](-10,2,3, 10).should.equal(10);
                  });
                  it(`should return NaN when given operands aren't calculables`, ()=>{
                    MathOfT.OPS[key](NaN, Infinity, NaN).should.be.NaN;
                  })
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
          let testFunction = (t)=>t*32;
          let testObj = new MathOfT(testFunction);
          testObj.terms[0].should.be.a('function');
          let testVal = Math.random();
          testObj.terms[0](testVal).should.equal(testFunction(testVal));
        });
        it('should accept Array.<Number> as paramter and set it to range array ', function() {
          let testArray = [0,44];
          let testObj = new MathOfT(testArray);
          testObj.range.should.be.an('array');
          testObj.range.should.deep.equal(testArray);
        });


      });
      describe('accepts an object as single parameter', function() {
        it('should use object keys to set appropriate named properties', function() {
          let testParamsObj = {
            terms: [(t)=>Math.sin(t)/5, (t)=>Math.cos(3*t)/7, (t)=>Math.sin(5*t)/9],
            segmentDivisor: 15,
            range: [0, -PI]
          }
          let testObj = new MathOfT(testParamsObj);
          testObj.range.should.be.an('array');
          testObj.range.should.deep.equal(testParamsObj.range);
          testObj.segmentDivisor.should.equal(testParamsObj.segmentDivisor);
          testObj.terms.should.be.an('array');
          testObj.terms.should.have.lengthOf(testParamsObj.terms.length);
          let testVal = Math.random();
          testParamsObj.terms[0](testVal).should.equal(testObj.terms[0](testVal))
          testParamsObj.terms[1](testVal).should.equal(testObj.terms[1](testVal))
          testParamsObj.terms[2](testVal).should.equal(testObj.terms[2](testVal))
        });
        describe('key: rangeoverride', () => {
          it('should when true, produce an instance whose range has a 0 lower bound and an upper bound equal to its segmentDivisor', () => {
            let testSegmentDivisor = 111;
            let overriddenrange = [0, testSegmentDivisor];
            let testRange = [0, -PI];
            let testParamsObj = {
              terms: [(t)=>Math.sin(t)/5, (t)=>Math.cos(3*t)/7, (t)=>Math.sin(5*t)/9],
              segmentDivisor: testSegmentDivisor,
              range: testRange
            };
            let testParamsObj2 = {
              terms: [(t)=>Math.sin(t)/5, (t)=>Math.cos(3*t)/7, (t)=>Math.sin(5*t)/9],
              segmentDivisor: testSegmentDivisor,
              range: testRange,
              rangeoverride: true
            };
            let testObj = new MathOfT(testParamsObj);
            testObj.range.should.be.an('array');
            testObj.range.should.deep.equal(testRange);
            testObj = new MathOfT(testParamsObj2);
            testObj.range.should.be.an('array');
            testObj.range.should.deep.equal(overriddenrange);
          });
        });
        describe('key: harmonize', () => {
          it('should when true, produce an instance whose MathOfT terms have range and segmentDivisor members that reference those of the parent instance until explicit reassignment', () => {
            let overriddensegmentdivisor = 20;
            let testSegmentDivisor = 111;
            let newSegmentDivisor = 555,
              newSegmentDivisor2 = 222;
            let overriddenrange = [0, 66];
            let testRange = [0, -PI];
            let newRange = [33,31,33],
              newRange2 = [22,21,22];
            let testTerms = [
              new MathOfT({
                segmentDivisor: overriddensegmentdivisor,
                range: overriddenrange,
                terms:[
                a => 9*a,
                a => 9/a,
                ]
              }),
              new MathOfT({
                segmentDivisor: overriddensegmentdivisor,
                range: overriddenrange,
                terms:[
                a => 3*a,
                a => 3/a,
                ]
              })
            ]
            let testParamsObj = {
              terms: testTerms,
              segmentDivisor: testSegmentDivisor,
              range: testRange
            };
            let testParamsObj2 = {
              terms: testTerms,
              segmentDivisor: testSegmentDivisor,
              range: testRange,
              harmonize: true
            };
            // sans harmonize
            let testObj = new MathOfT(testParamsObj);
            testObj.range.should.deep.equal(testRange);
            testObj.segmentDivisor.should.equal(testSegmentDivisor);
            for (let term of testObj.terms) {
              term.range.should.deep.equal(overriddenrange);
              term.segmentDivisor.should.equal(overriddensegmentdivisor);
            }
            // with harmonize
            testObj = new MathOfT(testParamsObj2);
            testObj.range.should.deep.equal(testRange);
            testObj.segmentDivisor.should.equal(testSegmentDivisor);
            for (let term of testObj.terms) {
              term.range.should.deep.equal(testObj.range);
              term.segmentDivisor.should.equal(testObj.segmentDivisor);
            }
            // mutate parent
            testObj.range=newRange;
            testObj.segmentDivisor=newSegmentDivisor;
            for (let term of testObj.terms) {
              term.range.should.deep.equal(testObj.range);
              term.segmentDivisor.should.equal(testObj.segmentDivisor);
            }
            // bad mutate attempt still throws

            let badmut=()=>{
              testObj.terms[0].range={};
            };
            badmut.should.throw();
            let badmut2=()=>{
              testObj.terms[0].segmentDivisor={};
            };
            badmut2.should.throw();
            // mutate child...no longer bound
            testObj.terms[0].range=newRange2;
            testObj.terms[0].segmentDivisor=newSegmentDivisor2;
            testObj.range=newRange;
            testObj.segmentDivisor=newSegmentDivisor;
            testObj.terms[0].range.should.not.deep.equal(testObj.range);
            testObj.terms[0].segmentDivisor.should.not.equal(testObj.segmentDivisor);

          });
        });
        describe('key: segmentDivisor', function() {
          it('should use default (fail gracefully) when provided NaN segment divisor', function() {
            let testParamsObj = {
              terms: [(t)=>Math.sin(t)/5, (t)=>Math.cos(3*t)/7, (t)=>Math.sin(5*t)/9],
              segmentDivisor: NaN,
              range: [0, PI]
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
          testObj.range.should.be.an('array');
          testObj.range.should.have.lengthOf(2);
          testObj.range.should.deep.equal(MathOfT.DEFAULT_RANGE);
        });
        it(`segmentDivisor (number): MathOfT.DEFAULT_SEGMENT_DIVISOR ${MathOfT.DEFAULT_SEGMENT_DIVISOR}` , function(){
          testObj.segmentDivisor.should.be.a('number');
          testObj.segmentDivisor.should.equal(MathOfT.DEFAULT_SEGMENT_DIVISOR);
        });
        it('terms (Array): [ x => x ]', function(){
          testObj.terms.should.be.an('array');
          testObj.terms.should.have.lengthOf(1);
          let testFunc = testObj.terms[0], testVal = Math.random();
          testFunc.should.be.a('function');
          testFunc(testVal).should.equal(testVal);
        });
        it('opcode: null', function(){
          expect(testObj.opcode).to.be.null;
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
          testObj.range.should.be.an('array');
          testObj.range.should.have.lengthOf(2);
          testObj.range.should.deep.equal(MathOfT.DEFAULT_RANGE);
        });
        it(`segmentDivisor (number): MathOfT.DEFAULT_SEGMENT_DIVISOR ${MathOfT.DEFAULT_SEGMENT_DIVISOR}` , function(){
          testObj.segmentDivisor.should.be.a('number');
          testObj.segmentDivisor.should.equal(MathOfT.DEFAULT_SEGMENT_DIVISOR);
        });
        it('terms (Array): [function]', function(){
          testObj.terms.should.be.an('array');
          testObj.terms.should.have.lengthOf(1);
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
          testObj.range.should.be.an('array');
          testObj.range.should.have.lengthOf(2);
          testObj.range.should.deep.equal(testRangeArr);
        });
        it(`segmentDivisor (number): MathOfT.DEFAULT_SEGMENT_DIVISOR ${MathOfT.DEFAULT_SEGMENT_DIVISOR}` , function(){
          testObj.segmentDivisor.should.be.a('number');
          testObj.segmentDivisor.should.equal(MathOfT.DEFAULT_SEGMENT_DIVISOR);
        });
        it('terms (Array): [ x => x ]', function(){
          testObj.terms.should.be.an('array');
          testObj.terms.should.have.lengthOf(1);
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
        it('should only add terms of type function or MathOfT, returning boolean to indicate success or failure', function(){
          let badobj = {},
            goodobjA = dd=>dd,
            goodobjB = new MathOfT();
          testObj.addTerm(badobj).should.be.false;
          testObj.addTerm(goodobjA).should.be.true;
          testObj.addTerm(goodobjB).should.be.true;
        });
        describe('when provided a true boolean parameter harmonize and a MathOfT instance as term parameter', () => {
          it('should add a modified version of the term whose range and segmentDivisor are set to those of the receiving term and the ', () => {
            testObj = new MathOfT({
              range: [11,33,55,33,11],
              terms: (a)=>a+33
            });
            let testTerm = new MathOfT({
              range: [11,3],
              terms: (a)=>a+33
            });
            testTerm.range.should.not.deep.equal(testObj.range)
            testObj.addTerm(testTerm)
          });
        });
      });
      describe('trange', function(){
        describe('when called upon an instance with a two-element evaluation range, return the range', function(){

        });
      });
      describe('.t0', function(){
        before(function(){
          testObj = new MathOfT(
            [Math.random(), Math.random()]
          );
        });
        it('should return the first t value in the evaluation range', function(){
          testObj.t0.should.equal(testObj.range[0])
        });
      });

      describe('.tt', function(){
        before(function(){
          testObj = new MathOfT(
            [Math.random(), Math.random()]
          );
        });
        it('should return the first t value in the evaluation range', function(){
          testObj.tt.should.equal(testObj.range[testObj.range.length-1])
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
            yielded[randind].should.almost.equal(
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
      describe('.T', function(){
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
          testObj.T.should.be.a('function');
        });
        it('should return a function that yields appropriate number of properly-range-spanning values across the entire evaluation range of the MathOfT instance', function(){
          let yielded = [...testObj.T()];
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
      describe('.i', function(){
        let common;
        describe('for a MathOfT instance whose range has two elements',
        function(){
          before(function(){
            common = 20;
            testObj = new MathOfT({
              segmentDivisor: common,
              range: [0, common],
            })
          });
          it('should accept a lone parameter t, returning the roughly corresponding index no greater than instance segment count', function(){
            testObj.i(10).should.equal(10);
            testObj.i(0).should.equal(0);
            testObj.i(common).should.equal(common);
          });
          it('should when given a t beyond the first bound of the range, return null', function(){
            should.not.exist(testObj.i(-10));
          });
          it('should when given a t beyond the last bound of the range, return null', function(){
            should.not.exist(testObj.i(21));
          });
          it('should when given a t within the inclusive bounds of the range, return an appropriately scaled index', function(){
            for(let t = 0; t < common; t++){
              testObj.i(t).should.equal(t);
            }
          });
        });
        describe('for a MathOfT instance whose range has more than two elements', function(){
          before(function(){
            common = 20;
            testObj = new MathOfT({
              segmentDivisor: common,
              range: [0, 40, common],
            })
          });
          it('should when given a t beyond the all bounds of the range, return null-filled array', function(){
            let correctres = [ null, null ]
            testObj.i(-10).should.deep.equal(correctres);
            testObj.i(200).should.deep.equal(correctres);
          });
          it('should when given a t within the bounds of some of the subranges, return an appropriately populated array of length one less than range length', function(){
            testObj.i(10).length.should.equal(2);
            testObj.i(11).should.deep.equal([5,null]);
          });
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
            testObj.normalizeT(midVal).should.almost.equal(midRangeVal);
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
            res.should.have.lengthOf(testRangeArr.length-1)
            res.every(v => v==-Infinity || v==Infinity ).should.be.true;
            //explicit tValues
            testObj = new MathOfT([0,1,2,0]);
            res =  testObj.normalizeT(.5);
            res.should.deep.equal([0,-Infinity,.5]);
            res =  testObj.normalizeT(-.5);
            res.should.deep.equal([-Infinity,-Infinity, Infinity]);

            testObj = new MathOfT([0,-1,-2,0]);
            res =  testObj.normalizeT(.5);
            res.should.deep.equal([-Infinity,-Infinity,Infinity]);
            res =  testObj.normalizeT(-.5);
            res.should.deep.equal([0,-Infinity,.5]);

            testObj = new MathOfT([0,2,1,0]);
            res =  testObj.normalizeT(.5);
            res.should.deep.equal([-.5,Infinity,0]);
            res =  testObj.normalizeT(-.5);
            res.should.deep.equal([-Infinity,Infinity, Infinity]);

            testObj = new MathOfT([0,2,1,0]);
            res =  testObj.normalizeT(.25);
            res.should.deep.equal([-.75,Infinity,.5]);
            res =  testObj.normalizeT(-.25);
            res.should.deep.equal([-Infinity,Infinity, Infinity]);

          });
        });
        describe('for any MathOfT, when provided with a boolean doAnti parameter that equals true', function(){
          it('should return the appropriate anti-normalized T', function(){
            testObj = new MathOfT([0, 100, -100, 100])
            let res = testObj.normalizeT(25)
            res.should.deep.equal([-.5,-.25, .25])
            res = testObj.normalizeT(25, true);
            res.should.deep.equal([1.5,1.25,.75])
          });

        });

      });

      describe('antinormalizeT', function(){
        let outofboundsA, outofboundsB;
        describe('for a MathOfT instance whose range has two elements', function(){
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
            testObj.antinormalizeT(testRangeArr[0]).should.equal(MathOfT.DEFAULT_RANGE[1]-MathOfT.DEFAULT_RANGE[0])
            testObj.antinormalizeT(testRangeArr[1]).should.equal(0)
            let midVal = testRangeArr[0] + (testRangeArr[1]-testRangeArr[0])/2;
            let midRangeVal = MathOfT.DEFAULT_RANGE[0] + (MathOfT.DEFAULT_RANGE[1]-MathOfT.DEFAULT_RANGE[0])/2;
            testObj.antinormalizeT(midVal).should.almost.equal(MathOfT.DEFAULT_RANGE[1]-midRangeVal);
          });
          it('should when given parameter t correctly calculate the corresponding normalized value, returning -/+ Infinity for out-of-bounds t', function(){
            testObj.antinormalizeT(outofboundsA).should.equal(Infinity)
            testObj.antinormalizeT(outofboundsB).should.equal(-Infinity)
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
            let res = testObj.antinormalizeT(-1) //less than Math.random in testRangeArr
            res.should.be.an('array');
            res.should.have.lengthOf(testRangeArr.length-1)
            res.every(v => v==-Infinity || v==Infinity ).should.be.true;
            //explicit tValues
            testObj = new MathOfT([0,1,2,0]);
            res =  testObj.antinormalizeT(.5);
            res.should.deep.equal([1,Infinity,.5]);
            res =  testObj.antinormalizeT(-.5);
            res.should.deep.equal([Infinity,Infinity, -Infinity]);

            testObj = new MathOfT([0,-1,-2,0]);
            res =  testObj.antinormalizeT(.5);
            res.should.deep.equal([Infinity,Infinity,-Infinity]);
            res =  testObj.antinormalizeT(-.5);
            res.should.deep.equal([1,Infinity,.5]);

            testObj = new MathOfT([0,2,1,0]);
            res =  testObj.antinormalizeT(.5);
            res.should.deep.equal([1.5,-Infinity,1]);
            res =  testObj.antinormalizeT(-.5);
            res.should.deep.equal([Infinity, -Infinity, -Infinity]);

            testObj = new MathOfT([0,2,1,0]);
            res =  testObj.antinormalizeT(.25);
            res.should.deep.equal([1.75,-Infinity,.5]);
            res =  testObj.antinormalizeT(-.25);
            res.should.deep.equal([Infinity, -Infinity, -Infinity]);

          });
        });
      });
      describe('isInRange', () => {
        describe('when giyen a single parameter t', () => {
          it('should return true IFF t falls within the evaluation range of this instance', () => {
            testObj = new MathOfT([11, 51]);
            testObj.isInRange(55).should.be.false;
            testObj.isInRange(5).should.be.false;
            testObj.isInRange(11).should.be.true;
            testObj.isInRange(51).should.be.true;
            testObj.isInRange(15).should.be.true;
          });
        });
      });
      describe('oft', function(){
        describe('for a MathOfT instance with one function or MathOfT term', () => {
          it('should provide the value of the term for any given t', () => {
            testObj = new MathOfT(a => 9*a);
            testObj.oft(3).should.equal(27);
            testObj = new MathOfT(new MathOfT(a => 9*a));
            testObj.oft(.5).should.equal(4.5);
          });
        });
        describe('for a MathOfT instance with multiple function or MathOfT terms', () => {
          it('should provide the Array whose elements are the values of the terms for any given t ', ()=>{
            testObj = new MathOfT({
              terms:[
              a => 9*a,
              a => 9/a,
              ]
            });
            testObj.oft(3).should.be.an('array');
            testObj.oft(3).should.deep.equal([27,3]);
            testObj = new MathOfT({
              terms:[
                new MathOfT({
                  range: [3,33],
                  terms:[
                  a => 9*a,
                  a => 9/a,
                  ]
                }),
                new MathOfT({
                  range: [3,33],
                  terms:[
                  a => 27*a,
                  a => 27/a,
                  ]
                })
              ]
            });
            testObj.oft(3).should.be.an('array');
            testObj.oft(3)[0].should.deep.equal([27,3]);
            testObj.oft(3)[1].should.deep.equal([81,9]);
          });
          it('should for a MathOfT instance with nested function or MathOfT terms provide the nested Array whose elements and subelements are the values of the terms in the correct order', ()=> {
            testObj = new MathOfT({
              // range: [0, 66],
              terms:[
                (a)=>[
                  9*a,
                  9/a,
                ],
                (a)=>[
                  3*a,
                  3/a,
                ]
              ]
            });
            let res = testObj.oft(3);
            let correctres = [
              [27,3],
              [9,1]
            ];
            res.should.be.an("array");
            for (let i in res) {
              res[i].should.deep.equal(correctres[i])
            }

            testObj = new MathOfT({
              terms:[
                new MathOfT({
                  range: [0, 66],
                  terms:[
                  a => 9*a,
                  a => 9/a,
                  ]
                }),
                new MathOfT({
                  range: [0, 66],
                  terms:[
                  a => 3*a,
                  a => 3/a,
                  ]
                })
              ]
            });
            res = testObj.oft(3);
            correctres = [
              [27,3],
              [9,1]
            ];
            res.should.be.an("array");
            for (let i in res) {
              res[i].should.deep.equal(correctres[i])
            }

            testObj = new MathOfT((a)=>[
              [
                9*a,
                9/a,
              ],
              [
                3*a,
                3/a,
              ]
            ]);
            res = testObj.oft(3);
            correctres = [
              [27,3],
              [9,1]
            ];
            res.should.be.an("array");
            for (let i in res) {
              res[i].should.deep.equal(correctres[i])
            }
          });
        });
        describe('when called on a MathOfT whose term is a non-anonymous Function object', () => {
          it('should pass a this object to the Function that includes TTHIS_TEMPLATE object values', function () {
            testObj= new MathOfT(function (t){
              this.should.be.an('object');
              let template = MathOfT.TTHIS_TEMPLATE();
              Object.keys(this).every(key=>key in template).should.be.true;
            });
            return false;
          });
        });
        describe('when called on a MathOfT whose term is another MathOfT', () => {
          it('should pass a this object to the Function with an object member named tthis that includes TTHIS_TEMPLATE object values', function () {
            testObj= new MathOfT(function (t){
              this.should.be.an('object');
              should.exist(this.tthis);
              this.tthis.should.be.an('object');
              let template = MathOfT.TTHIS_TEMPLATE();
              Object.keys(this.tthis).every(key=>key in template).should.be.true;
            });
          });
        });


        describe('should when called with no parameters', ()=>{
          it('default to returning the value of the term for the instance t0 range bound', function () {
            testObj = new MathOfT((t)=> [t*2, t*5])
            testObj.oft().should.deep.equal([
              MathOfT.DEFAULT_RANGE[0]*2,
              MathOfT.DEFAULT_RANGE[0]*5
            ]);
          });
        });

        describe('when called with any t on a MathOfT that has any MathOfT terms', () => {
          it('should produce null values corresponding to those MathOfT terms whose evaluation ranges exclude t', () => {
            testObj = new MathOfT({
              terms: [
                new MathOfT({
                  range: [0, 6],
                  terms:[
                  a => 9*a
                  ]
                }),
                new MathOfT({
                  range: [6.1,12],
                  terms:[
                  a => 3*a
                  ]
                }),
                new MathOfT({
                  range: [0, 12],
                  terms:[
                  a => 27*a
                  ]
                }),
              ]
            });
            testObj.oft(3).should.be.an('array');
            testObj.oft(3).should.deep.equal([27, null, 81]);
            testObj.oft(10).should.be.an('array');
            testObj.oft(10).should.deep.equal([null, 30, 270]);
          });
          it('should when given a true second parameter filter from its result all null values corresponding to those MathOfT terms whose evaluation ranges exclude t', () => {
            testObj = new MathOfT({
              terms: [
                new MathOfT({
                  range: [0, 6],
                  terms:[
                  a => 9*a
                  ]
                }),
                new MathOfT({
                  range: [6.1,12],
                  terms:[
                  a => 3*a
                  ]
                }),
                new MathOfT({
                  range: [0, 12],
                  terms:[
                  a => 27*a
                  ]
                }),
              ]
            });
            testObj.oft(3, true).should.be.an('array');
            testObj.oft(3, true).should.deep.equal([27, 81]);
            testObj.oft(10, true).should.be.an('array');
            testObj.oft(10, true).should.deep.equal([30, 270]);
          });
        });
      });

      describe('ofLastt', function(){
        before(function(){
          testObj = new MathOfT({
            range: [Math.random(), Math.random()],
            terms: (t) => 55/+t
          });
        });
        it('should return the value of the MathOfT instance for the first t in its evaluation range', function(){
          testObj.ofLastt.should.equal(testObj.oft(testObj.range[testObj.range.length-1]))
        });

      });


      describe('ofFirstt', function(){
        before(function(){
          testObj = new MathOfT({
            range: Math.random(),
            terms: (t) => 55+t
          });
        });
        it('should return the value of the MathOfT instance for the first t in its evaluation range', function(){
          testObj.ofFirstt.should.equal(testObj.oft(testObj.range[0]));
        });

      });


      describe('oftNormal', function(){
        let bound, outofboundsA, outofboundsB;
        before(function(){
          bound=PI;
          outofboundsA=2*bound, outofboundsB=-2*bound;
          testObj = new MathOfT({
            range: bound,
            terms: (t) => [Math.cos(t), Math.sin(t)]
          });
        });
        it('should return the value for middle of range  when given non-number tNormal', function(){
          let correctres =[ Math.cos(0), Math.sin(0)];
          let res = testObj.oftNormal('sfdafhurkysjerky');
          res.should.deep.equal(correctres);
        });
        it('should correctly calculate values for any given tNormal', function() {
          let ttargets = [-1, -.75, -.5, -.25, 0];
          let correctres = [
            [ -1, 0],
            [ -Math.sqrt(2)/2, -Math.sqrt(2)/2 ],
            [ 0, -1],
            [ Math.sqrt(2)/2, -Math.sqrt(2)/2],
            [ 1, 0],
          ];
          for (var i in ttargets) {
            let t = ttargets[i];
            let res = testObj.oftNormal(t);
            let thet = PI*t;
            res.should.deep.equal([ Math.cos(thet), Math.sin(thet)]);
            // res.should.be.almost.equalTo(correctres[i]);
          }
        });
        it('should know when to provide start-of-range computation after receiving -Infinity', function () {
          let res = testObj.oftNormal(-Infinity);
          res.should.deep.equal(testObj.ofFirstt);
        });
        it('should know when to provide end-of-range computation after receiving +Infinity', function () {
          let res = testObj.oftNormal(Infinity);
          res.should.deep.equal(testObj.ofLastt);
        });
        it('should know when to provide NaN after receiving NaN', function () {
          testObj.oftNormal(NaN).should.be.NaN;
        });
        it('should when called with a calculable t value that falls outside of the normalization range correctly calculate the corresponding value', function () {
          let drange = MathOfT.DEFAULT_RANGE[1] - MathOfT.DEFAULT_RANGE[0];
          let toutofboundsA = MathOfT.DEFAULT_RANGE[0]-drange, toutofboundsB = MathOfT.DEFAULT_RANGE[1]+drange;
          testObj = new MathOfT({
            terms: [(t) => t+1],
            range: 50,
          });
          testObj.oftNormal(toutofboundsA).should.equal(-149);
          testObj.oftNormal(toutofboundsB).should.equal(151);
        });
      });

      describe('oftOp', () => {
        describe('for any given calculable t parameter', () => {
          describe('for any multi-term instance and any invalid _op parameter should perform the instance op where', () => {
            let testObj, testObj2, testObj3, testObj4;
            before(function(){
              testObj = new MathOfT({
                terms: [
                  (t) => 1000*t,
                  (t) => 100*t,
                  (t) => 10*t,
                  (t) => 1*t,
                ],
                opcode: '+'
              });
              testObj2 = new MathOfT({
                terms: [
                  (t) => [1000*t, 100*t, 10*t, 1*t],
                  (t) => [1000*t, 100*t, 10*t, 1*t]
                ],
                opcode: '+'
              });
              testObj3 = new MathOfT({
                terms: [
                  (t) => [1000*t, [100*t, 10*t], 1*t],
                  (t) => [2000*t, [200*t, 20*t], 2*t]
                ],
                opcode: '+'
              });
              testObj4 = new MathOfT({
                terms: [
                  (a) => [1*a, 2*a],
                  (a) => [3*a, 4*a]
                ],
                opcode: '**'
              });
            });
            it('the result is equivalent to performing said op on the individual results of the evaluations of the instance\'s terms for the given t', ()=>{
              let testResult = testObj.oftOp(3, 'bad code')
              testResult.should.equal(3333)
              let testT = Math.random()*199;
              testResult = testObj.oftOp(testT, 'bad code')
              testResult.should.almost.equal(1111*testT)
            });

            it('the result is equivalent to performing said op on the 1-D array member results of the evaluations of the instance\'s terms for the given t', ()=>{
              let testResult = testObj2.oftOp(3, 'bad code')
              testResult.should.be.an('array');
              testResult.should.deep.equal([6000,600,60,6]);
            });

            it('the result is equivalent to performing said op on the #-D array member results of the evaluations of the instance\'s terms for the given t', ()=>{
              let testResult = testObj3.oftOp(3, 'bad code')
              testResult.should.be.an('array');
              testResult.should.deep.equal([9000,[900,90],9]);
            });
          });
          describe('for any valid _op parameter should perform _op in MathOfT.OPS where', () => {
            it('the result is equivalent to performing _op on the results of the evaluations of the instance\'s terms for the given t');
          });
          describe('for any given numeric _acc parameter and an invalid _op parameter', () => {
            it('');
          });
        });
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
export { dotest };
