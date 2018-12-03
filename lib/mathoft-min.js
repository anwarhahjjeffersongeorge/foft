"use strict";require=require("esm")(module),module.exports=require("./main.js");
"use strict";require("@babel/polyfill");var M=_interopRequireWildcard(require("./mathoft.js"));function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};i.get||i.set?Object.defineProperty(r,t,i):r[t]=e[t]}return r.default=e,r}module.exports=M;
"use strict";var _Object$definePropert;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _slicedToArray(e,r){return _arrayWithHoles(e)||_iterableToArrayLimit(e,r)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,r){var t=[],n=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return t}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var _Symbol$iterator=Symbol.iterator,MathOfT=function(){function e(r){if(_classCallCheck(this,e),"function"==typeof(r=r||{}))r={terms:r};else if(Array.isArray(r)){r={range:r}}var t=r.segmentDivisor||e.DEFAULT_SEGMENT_DIVISOR;if("number"!=typeof t||Number.isNaN(t))throw new TypeError("segmentDivisor should be non-NaN number");this.__segmentDivisor=t;var n="boolean"==typeof r.rangeoverride&&r.rangeoverride?[0,this.__segmentDivisor]:r.range||e.DEFAULT_RANGE;if(n="number"==typeof n?[-n,n]:n,!Array.isArray(n))throw new TypeError("range should be array");if(!e.ARENUMBERS.apply(e,_toConsumableArray(n)))throw new TypeError("range values should be numbers");for(var a in this._range=Array(n.length),n)this._range[a]=n[a];var o=r.terms||[function(e){return e}];if(o="function"==typeof o?[o]:o,!Array.isArray(o)&&"function"!=typeof o)throw new TypeError("params.terms should be array or function");for(var i in this._terms=[],o){var u=o[i];this.addTerm(u)}this._opcode=r.opcode}return _createClass(e,[{key:"addTerm",value:function(r,t){var n=this.terms.length;return t="boolean"==typeof t&&t,"function"==typeof r?this.terms.push(r):r instanceof e&&(this.terms.push(r),t&&(r._range=this._range,r.__segmentDivisor=this.__segmentDivisor)),n==this.terms.length-1}},{key:"dSubrange",value:function(r,t){if(r=e.ISNUMBER(r)?r:0,t&&!e.ISNUMBER(t))throw new TypeError("MathOfT.dSubRange only accepts Numbers, given ".concat(Array.prototype.slice.call(arguments)));if(r%=this._range.length,!Number.isInteger(r))throw new RangeError("MathOfT.dSubRange only accepts Integers, given ".concat(Array.prototype.slice.call(arguments)));if(t=e.ISNUMBER(t)?t%this._range.length:(r+1)%this._range.length,!Number.isInteger(t))throw new RangeError("MathOfT.dSubRange only accepts Integers, given ".concat(Array.prototype.slice.call(arguments)));return this._range[t]-this._range[r]}},{key:"subT",value:function(r,t){t="boolean"==typeof t&&t;r=e.ISNUMBER(r)?r%this.range.length:0;var n=this.range[r],a=this.range[(r+1)%this.range.length],o=t?this.segmentDivisor-1:this.segmentDivisor,i=(a-n)/this.segmentDivisor;return regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=0;case 1:if(!(r<=o)){e.next=7;break}return e.next=4,n+r*i;case 4:r++,e.next=1;break;case 7:case"end":return e.stop()}},e,this)})}},{key:"normalizeT",value:function(r){e.ISNUMBER(r)||(r=0);for(var t,n,a,o,i,u,s,f=Array(this.range.length-1),c=0;c<f.length;c++)f[c]=(t=r,n=[this.range[c],this.range[c+1]],a=void 0,o=void 0,i=void 0,u=void 0,s=void 0,a=_slicedToArray(e.DEFAULT_RANGE,2),o=a[0],i=a[1],u=o<i?o:i,s=(t-n[0])/(n[1]-n[0]),s=o+(i-o)*s,e.INRANGE(s,o,i)||(s=s<u?-1/0:1/0),s);return 1==f.length?f[0]:f}},{key:"ofTNormal",value:function(e){e="number"==typeof e?e>1||e<-1?1*Math.sign(e):e:1;var r=this.range[0]+e*(this.range[1]-this.range[0]);return this.ofT(r)}},{key:"ofT",value:function(r){r="number"==typeof r?r:this.range[0];var t="object"===_typeof(this.tthis)?this.tthis:{t:{t:r,tNormal:this.normalizeT(r),tNormalRemaining:1-this.normalizeT(r),trange:this.range,drange:this.drange,t0:this.t0,segmentDivisor:this.segmentDivisor,i:Math.round(r*this.segmentDivisor)}},n=[],a=!0,o=!1,i=void 0;try{for(var u,s=this._terms[Symbol.iterator]();!(a=(u=s.next()).done);a=!0){var f=u.value;if("function"==typeof f)n.push(f.call(t,r));else if(f instanceof e){var c=[];c=f.opcode?_toConsumableArray(f.ofAllTOp(null,f.opcode)):_toConsumableArray(f.ofAllT()),n.push(c)}}}catch(e){o=!0,i=e}finally{try{a||null==s.return||s.return()}finally{if(o)throw i}}return 1==n.length?n[0]:n}},{key:"ofTOp",value:function(r,t,n){if(n=n in e.OPS?e.OPS[n]:this.opcode,t="number"!=typeof(t=t||n.base)||Number.isNaN(t)?NaN:t,1==this.terms.length){var a,o=this.ofT(r);return!Array.isArray(o)^!Array.isArray(t)?Array.isArray(t)?Array.isArray(o)||(a=t.map(function(e,r){return n(e,o)})):a=o.map(function(e,r){return n(e,t)}):a=Array.isArray(o)&&Array.isArray(t)?o.map(function(e,r){return n(e,t[r])}):n(v,t),a}return this.ofT(r).reduce(function(r,t,a,o){if(0==a)return t;var i;if(!Array.isArray(t)^!Array.isArray(r)){t=Array.isArray(t)?t:Array(e.R.length).fill(t);var u=Array.isArray(r)?r:Array(e.R.length).fill(r);i=t.map(function(e,r){return n(u[r],e)})}else if(Array.isArray(t)&&Array.isArray(r))i=t.map(function(e,t){return n(r[t],e)});else{var s="number"==typeof t?t:NaN;i=Number.isNaN(s)||Number.isNaN(r)?NaN:n(r,s)}return i},t)}},{key:"mapTOp",value:function(e,r){if(!(e instanceof Function))throw new TypeError("map needs Function callback");return _toConsumableArray(this.ofAllTOp()).map(e,r)}},{key:"map",value:function(e,r){if(!(e instanceof Function))throw new TypeError("map needs Function callback");return _toConsumableArray(this).map(e,r)}},{key:"terms",get:function(){return this._terms}},{key:"segmentDivisor",get:function(){return this.__segmentDivisor}},{key:"numSegments",get:function(){return this.segmentDivisor+1}},{key:"dt",get:function(){return this.drange/this.__segmentDivisor}},{key:"range",get:function(){return this._range}},{key:"t0",get:function(){return this.range[0]}},{key:"opcode",get:function(){return this._opcode},set:function(r){e.ISOP(r)&&(this._opcode=r)}},{key:"drange",get:function(){return this._range[this._range.length-1]-this._range[0]}},{key:"dabsrange",get:function(){return Math.abs(this.drange)}},{key:"t",get:function(){var e=this.range.length-2;return regeneratorRuntime.mark(function r(){var t;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:t=0;case 1:if(!(t<=e)){r.next=6;break}return r.delegateYield(t==e?this.subT(t)():this.subT(t,!0)(),"t0",3);case 3:t++,r.next=1;break;case 6:case"end":return r.stop()}},r,this)})}},{key:"ofFirstT",get:function(){return this.ofT(this.t0)}},{key:"ofLastT",get:function(){return this.ofT(this._range[this._range.length-1])}},{key:"ofAllT",get:function(){return regeneratorRuntime.mark(function e(){var r,t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=_toConsumableArray(this.t()),t=0;case 2:if(!(t<r.length)){e.next=9;break}return n=r[t],e.next=6,[n,this.ofT(n)];case 6:t++,e.next=2;break;case 9:case"end":return e.stop()}},e,this)})}},{key:_Symbol$iterator,get:function(){return regeneratorRuntime.mark(function e(){var r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield(_toConsumableArray(this.t()).map(function(e,t){return r.ofT(e)}),"t0",1);case 1:case"end":return e.stop()}},e,this)})}},{key:"ofAllTOp",get:function(){return regeneratorRuntime.mark(function e(r,t){var n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield(_toConsumableArray(this.t()).map(function(e,a){return n.ofTOp(e,r,t)}),"t0",1);case 1:case"end":return e.stop()}},e,this)})}}],[{key:"ISOP",value:function(r){return e.OPDICT.includes(r)}},{key:"OPPARSE",value:function(r){return e.ISOP(r)?e.OPS[r]:e.OPS.null}}]),e}();_defineProperty(MathOfT,"R",["x","y","z"]),_defineProperty(MathOfT,"ISNUMBER",function(){return 1==arguments.length&&"number"==typeof arguments[0]}),_defineProperty(MathOfT,"ARENUMBERS",function(){return 0!=arguments.length&&Array.prototype.slice.call(arguments).every(function(e){return Array.isArray(e)?MathOfT.ARENUMBERS.apply(MathOfT,_toConsumableArray(e)):MathOfT.ISNUMBER(e)})}),_defineProperty(MathOfT,"INRANGE",function(e,r,t){var n=function(e,r,t){return e>r?e<=t:!(e<r)||e>=t};return!(!MathOfT.ARENUMBERS.apply(MathOfT,arguments)||!MathOfT.ISNUMBER(e))&&(1==arguments.length?MathOfT.INRANGE(e,MathOfT.DEFAULT_RANGE):Array.isArray(r)?1==r.length?n(e,0,r[0]):n(e,r[0],r[r.length-1]):!!MathOfT.ISNUMBER(r)&&(MathOfT.ISNUMBER(t)?MathOfT.ISNUMBER(t)?n(e,r,t):void 0:n(e,0,r)))}),_defineProperty(MathOfT,"OPDICT",[null,"+","-","*","/","**"]),_defineProperty(MathOfT,"OPS",Object.defineProperties({},(_defineProperty(_Object$definePropert={},null,{get:function(){function e(){return Array.prototype.slice.call(arguments)}return e.code=null,e.base=null,e},set:function(){return null}}),_defineProperty(_Object$definePropert,"+",{get:function(){function e(){return MathOfT.ARENUMBERS.apply(MathOfT,arguments)?Array.prototype.slice.call(arguments).reduce(function(e,r,t){return 0==t?r:e+r}):NaN}return e.code="+",e.base=0,e},set:function(){return"+"}}),_defineProperty(_Object$definePropert,"-",{get:function(){var e=0;function r(){return MathOfT.ARENUMBERS.apply(MathOfT,arguments)?Array.prototype.slice.call(arguments).reduce(function(e,r,t){return 0==t?r:e-r},e):NaN}return r.code="-",r.base=e,r},set:function(){return"-"}}),_defineProperty(_Object$definePropert,"*",{get:function(){var e=1;function r(){return MathOfT.ARENUMBERS.apply(MathOfT,arguments)?Array.prototype.slice.call(arguments).reduce(function(e,r,t){return 0==t?r:e*r},e):NaN}return r.code="*",r.base=e,r},set:function(){return"*"}}),_defineProperty(_Object$definePropert,"/",{get:function(){var e=1;function r(){return MathOfT.ARENUMBERS.apply(MathOfT,arguments)?Array.prototype.slice.call(arguments).reduce(function(e,r,t){return 0==t?r:e/r},e):NaN}return r.code="/",r.base=e,r},set:function(){return"/"}}),_defineProperty(_Object$definePropert,"**",{get:function(){var e=1;function r(){return MathOfT.ARENUMBERS.apply(MathOfT,arguments)?Array.prototype.slice.call(arguments).reduce(function(e,r,t){return 0==t?r:Math.pow(e,r)},e):NaN}return r.code="**",r.base=e,r},set:function(){return"**"}}),_defineProperty(_Object$definePropert,"...",{get:function(){var e=function(e,r){return Array.isArray(e)?e.concat(r):Array.isArray(r)?r.concat(e):[e,r]};return e.code="...",e.base=[],e},set:function(){return"..."}}),_Object$definePropert))),_defineProperty(MathOfT,"DEFAULT_SEGMENT_DIVISOR",10),_defineProperty(MathOfT,"DEFAULT_RANGE",[-1,1]),module.exports={MathOfT:MathOfT};