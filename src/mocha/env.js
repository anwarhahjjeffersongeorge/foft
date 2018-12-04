"use strict";
/**
 * Envs - A record of some possible types of
 * js execution contexts
 *
 * @return {type}  description
 */
const Envs = (function makeenvs() {
  return [
    "nodejs_v8",
    "unknown_js",
    "chro_windo",
    "chro_exten",
    "ffx_windo",
    "ffox_exten",
    "electr_app"
  ].map(function setenv(e){
    this[e]=Symbol(e), this[this[e]]=e;
  }, {});
})();

/**
 * env - determine the env and return a reference to the global/window/browser/chrome object
 *
 * @return {object} contains a named symbol property (@see Envs) representing current contex best-guess and whose value is the reference to the corresponding global context object
 */
function env(){
  if (arguments.length != 0) {
    throw new Error("env takes no arguments");
  }
  var result = {};
  let resultSymbol;
  let resultContext;
  try { //// test
    // when testing for node,
    // 1. "this" doesnt get execution context
    // because "this" refers to the context of the module
    // 2. also can't use IIFE (function(){return this;})() because we want
    // to be in strict mode, and there's no default local scope for IIFE
    // in strict mode =
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

    //could people be pretending to be in node?
    //check for a few things with each case
    let windowExists = (typeof window !== 'undefined');
    let globalExists = (typeof global !== 'undefined');


    if(windowExists && !globalExists){
      resultContext = window;
      //which browser context are we in?
      // test for firefox extension, default to browser window
      if(typeof browser !== 'undefined'){
        if(browser !== this && browser === this.browser){
          resultSymbol = Envs.ffox_exten;
          //TODO this case can fail to detect an extension that doesnt
          //ask for browser API permissions, in which case
        } else {
          resultSymbol = Envs.ffox_windo;
        }
      } //test for chrome exstention, default to browser window
      else if (typeof chrome !== 'undefined'){
        if(chrome !== this && chrome === this.chrome){
          /**
          * all extensions have access to this chrome API
          * @see [@link](https://developer.chrome.com/extensions/extension)*/
          if(chrome.hasOwnProperty('extension')){
            resultSymbol = Envs.chro_exten;
          } else {
            resultSymbol = Envs.chro_windo;
          }
        }
      } else {
        let ua = window.navigator.userAgent;
        if (ua.search(/(F|i)refox/)!=-1){
          resultSymbol = Envs.ffox_windo;
        }
      }

    } else if(globalExists && !windowExists){
      resultContext = global;
      // console.log('globalExists')
      //in nodejs, we should have root 'global' object equal to context
      if(typeof global === 'object'){
        // console.log('global is object')
        //do some more checks that are PROBABLY NOT SECURE against spoofing
        if(  (global.global === global)/*should be circular reference*/
        && (global.process.title === process.title)){
          // console.log('global checks out');
          resultSymbol = Envs.nodejs_v8;
          // console.log(result);
        }
      }
    } else if(globalExists && windowExists) {
      resultContext = global;
      if(typeof global === 'object' && window === global ){
        let ua = window.navigator.userAgent;
        if(ua.search(/(E|e)lectron/)!=-1){
          resultSymbol = Envs.electr_app;
          //global === window so it don't matter
        }
      }
    } else {
      //we don't know the engine.
      resultSymbol = Envs.unknown_js;
    }

    result = resultContext;
    result[resultSymbol] = resultSymbol;

  } catch (err) {
    result = err;
  } finally {
    // console.log('found at');
    // console.log(result);
    return result;
  }
};
function symbols() {
  let arr =  Object.getOwnPropertySymbols(env())
    .filter(sym => sym in Envs);
  return arr.length == 1
    ? arr[0]
    : arr;
}

module.exports = {
  envs: Envs,
  env, symbols
};
