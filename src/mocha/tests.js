/* globals describe, it, before, beforeEach */
'use strict'
// import chai from 'chai'
// import chaiAlmost from 'chai-almost'
// import chaiAsPromised from 'chai-as-promised'
// import dirtyChai from 'dirty-chai'
// chai.use(chaiAlmost()) // chai.use(chaiAlmost(Number.EPSILON));
// chai.use(chaiAsPromised)
// chai.use(dirtyChai)
//
// chai.config.includeStack = true // turn on stack trace
// var should = chai.should()
// var expect = chai.expect
// var assert = chai.assert
import { domaintest } from './spec'
function dotest (Foft, Parser) {
  domaintest(Foft)
  // doParsertest(Foft, Parser)
}
export { dotest }
