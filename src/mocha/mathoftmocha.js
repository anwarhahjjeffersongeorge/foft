"use strict";
/**
* Test suite for ../mathoft.js
*/

import chai from 'chai';
import chai_arrays from 'chai-arrays';
import chai_as_promised from 'chai-as-promised';
chai.use(chai_as_promised);
chai.use(chai_arrays);
chai.config.includeStack = true; // turn on stack trace
var should = chai.should();
var expect = chai.expect;
var assert = chai.assert;
//
import {MathOfT} from '../index.js';

//TODO MathOFT tests
describe('MathOfT', function() {
  it('should be a function (class)', function() {
    MathOfT.should.be.an('function')
    // console.log(MathOfT);
  });
  describe('Has static members of specified types', function(){
    //these are the static properties in MathOfT
    const staticpropsandtypes={
      R: 'Array',
      ARENUMBERS: 'function',
      OPDICT: 'Array',
      ISOP: 'function',
      OPPARSE: 'function',
      OPS: 'Object'
    };
    Object.keys(staticpropsandtypes).forEach((propname)=>{
      let typename = staticpropsandtypes[propname];
      it(`Property ${propname} should exist as an ${typename}`, function() {
        MathOfT.should.have.own.property(propname);
        MathOfT[propname].should.be.an(typename);
        // MathOfT[propname].should.be.frozen;
      });
    });

    describe('with the functionalities such that', function() {
      describe(`MathOfT.ARENUMBERS`,function(){
        it('returns true when ALL arguments are numbers(including NaN)', function() {
          MathOfT.ARENUMBERS(Math.random(), Math.random()).should.be.true;
          MathOfT.ARENUMBERS(0,1,2,3,4,6,7,8,99).should.be.true;
          MathOfT.ARENUMBERS(0, NaN, 44).should.be.true;
        });
        it('returns false when ANY arguments are not numbers', function(){
          MathOfT.ARENUMBERS('l').should.be.false;
          MathOfT.ARENUMBERS('55',5).should.be.false;
          MathOfT.ARENUMBERS(55, 55, 5.4, NaN, '535', 5).should.be.false;
        });
        it('returns false when arguments are null', function(){
          MathOfT.ARENUMBERS().should.be.false;
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
          it(`returns null function for ${badcode} not in MathOfT.OPS`, function(){
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
            Math.floor(255*Math.random));
          resetbadcode();
          while (MathOfT.OPDICT.includes(badcode.charCodeAt(0))) {
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

  describe('constructor new MathOfT()', () => {
    let testConstructor = (params) => new MathOfT(params);
    describe('parameters', () => {
      //constructor.length.should.equal(1)
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
