Storable = (function Stores() {
  let o = {};
  [
    "nodejs_v8",
    "unknown_js",
    "chro_windo",
    "chro_exten",
    "ffox_windo",
    "ffox_exten",
  ].map((e) => o[e]=Symbol(e));
  return o;
})();

function env(){
  if (arguments.length != 0) {
    throw new Error("env takes no arguments");
  }
  var result = {};
  let resultSymbol;

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
      //which browser context are we in?
      // test for firefox extension, default to browser window
      if(typeof browser !== 'undefined'){
        if(browser !== this && browser === this.browser){
          resultSymbol = Storable.ffox_exten;
          //TODO this case can fail to detect an extension that doesnt
          //ask for browser API permissions, in which case
        } else {
          resultSymbol = Storable.ffox_windo;
        }
      } //test for chrome exstention, default to browser window
      else if (typeof chrome !== 'undefined'){
        if(chrome !== this && chrome === this.chrome){
          /**
          * all extensions have access to this chrome API
          * @see [@link](https://developer.chrome.com/extensions/extension)*/
          if(chrome.hasOwnProperty('extension')){
            resultSymbol = Storable.chro_exten;
          } else {
            resultSymbol = Storable.chro_windo;
          }
        }
      }
    }

    if(globalExists && !windowExists){
      // console.log('globalExists')
      //in nodejs, we should have root 'global' object equal to context
      if(typeof global === 'object'){
        // console.log('global is object')
        //do some more checks that are PROBABLY NOT SECURE against spoofing
        if(  (global.global === global)/*should be circular reference*/
        && (global.process.title === process.title)){
          // console.log('global checks out');
          resultSymbol = Storable.nodejs_v8;
          // console.log(result);
        }
      }
    } else {
      //we don't know the engine.
      resultSymbol = Storable.unknown_js;
    }
    result = resultSymbol;
  } catch (err) {
    result = err;
  } finally {
    // console.log('found at');
    // console.log(result);
    return Object.freeze(result);
  }
};
