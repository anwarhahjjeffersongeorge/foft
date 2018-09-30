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
      });


    });

  })
});
//TODO browser tests
describe('browser Functionality', function() {
  // body...
});
//TODO nodejs tests
describe('nodejs Functionality', function() {
  // body...
});
