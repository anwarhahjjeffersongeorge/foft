Storable.rootloka, function rootloka(){

      //should not receive a this
      var result = {};
      // result.a = 1;
      let resultSymbol;
      // this "set" property catches the results we try to set
      // and deletes itself after usage
      let setResult = function(symbol, target){
        if(arguments.length !== 2){
          // console.log(arguments.length)
          throw new TypeError(`Storable.INNA_LANG.get`+
            `${Storable.rootloka.toString()}) result.set needs two arguments,`+
            ` not ${arguments.length}`);
        }
        if(!Storable.INNA_LANG[Storable.symbolfilter](symbol)){
          console.log(symbol);
          // console.log(Storable.INNA_LANG.get(Storable.symbolfilter)(symbol))
          throw new TypeError(`Storable.INNA_LANG.get`+
            `${Storable.rootloka.toString()}) result.set`+
            ` needs valid symbol in Storable.INNA_LANG,`+
            ` not ${symbol.toString()}`);
        }
        if(!target){
          throw (`Storable.INNA_LANG.get`+
            `${Storable.rootloka.toString()}) result.set` +
            ` needs valid target`);
        }
        // console.log(symbol,target);
        result[Storable.loka] = symbol;
        // Object.freeze(result[Storable.loka]);
        result[Storable.root] = target;
        // Object.freeze(result[Storable.root]);
        // console.log(result);

      };
      // console.log(result);
      // console.log(global)
      try {
        // console.log('rootloka')
        // when testing for node, we can't use "this" to get execution context
        // because "this" refers to the context of the module
        // we also can't use IIFE (function(){return this;})() because we want
        // to be in strict mode, and there's no default local scope for IIFE
        // in strict mode =
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

        //since we're worried about people pretending to be in node, we Will
        //check for as many things as possible with each case
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
        // console.log(resultSymbol, Storable.INNA_LANG.get(resultSymbol)())
        setResult(resultSymbol, Storable.INNA_LANG.get(resultSymbol)());
      } catch (err) {
        //console.log(innaLokaAnalysis error)
        result = err;
      } finally {
        // console.log('found Storable at');
        // console.log(result);
        return Object.freeze(result);
      }
    }
