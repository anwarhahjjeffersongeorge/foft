(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = require("core-js/library/fn/array/from");
},{"core-js/library/fn/array/from":47}],2:[function(require,module,exports){
module.exports = require("core-js/library/fn/array/is-array");
},{"core-js/library/fn/array/is-array":48}],3:[function(require,module,exports){
module.exports = require("core-js/library/fn/get-iterator");
},{"core-js/library/fn/get-iterator":49}],4:[function(require,module,exports){
module.exports = require("core-js/library/fn/is-iterable");
},{"core-js/library/fn/is-iterable":50}],5:[function(require,module,exports){
module.exports = require("core-js/library/fn/map");
},{"core-js/library/fn/map":51}],6:[function(require,module,exports){
module.exports = require("core-js/library/fn/number/is-finite");
},{"core-js/library/fn/number/is-finite":52}],7:[function(require,module,exports){
module.exports = require("core-js/library/fn/number/is-integer");
},{"core-js/library/fn/number/is-integer":53}],8:[function(require,module,exports){
module.exports = require("core-js/library/fn/number/is-nan");
},{"core-js/library/fn/number/is-nan":54}],9:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/assign");
},{"core-js/library/fn/object/assign":55}],10:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/create");
},{"core-js/library/fn/object/create":56}],11:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/define-properties");
},{"core-js/library/fn/object/define-properties":57}],12:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/define-property");
},{"core-js/library/fn/object/define-property":58}],13:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/get-own-property-descriptor");
},{"core-js/library/fn/object/get-own-property-descriptor":59}],14:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/get-own-property-symbols");
},{"core-js/library/fn/object/get-own-property-symbols":60}],15:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/get-prototype-of");
},{"core-js/library/fn/object/get-prototype-of":61}],16:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/keys");
},{"core-js/library/fn/object/keys":62}],17:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/set-prototype-of");
},{"core-js/library/fn/object/set-prototype-of":63}],18:[function(require,module,exports){
module.exports = require("core-js/library/fn/promise");
},{"core-js/library/fn/promise":64}],19:[function(require,module,exports){
module.exports = require("core-js/library/fn/reflect/construct");
},{"core-js/library/fn/reflect/construct":65}],20:[function(require,module,exports){
module.exports = require("core-js/library/fn/symbol");
},{"core-js/library/fn/symbol":66}],21:[function(require,module,exports){
module.exports = require("core-js/library/fn/symbol/iterator");
},{"core-js/library/fn/symbol/iterator":67}],22:[function(require,module,exports){
module.exports = require("core-js/library/fn/symbol/to-primitive");
},{"core-js/library/fn/symbol/to-primitive":68}],23:[function(require,module,exports){
module.exports = require("core-js/library/fn/symbol/to-string-tag");
},{"core-js/library/fn/symbol/to-string-tag":69}],24:[function(require,module,exports){
var _Array$isArray = require("../core-js/array/is-array");

function _arrayWithHoles(arr) {
  if (_Array$isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
},{"../core-js/array/is-array":2}],25:[function(require,module,exports){
var _Array$isArray = require("../core-js/array/is-array");

function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;
},{"../core-js/array/is-array":2}],26:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],27:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],28:[function(require,module,exports){
var _Reflect$construct = require("../core-js/reflect/construct");

var setPrototypeOf = require("./setPrototypeOf");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
},{"../core-js/reflect/construct":19,"./setPrototypeOf":41}],29:[function(require,module,exports){
var _Object$defineProperty = require("../core-js/object/define-property");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{"../core-js/object/define-property":12}],30:[function(require,module,exports){
var _Object$defineProperty = require("../core-js/object/define-property");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
},{"../core-js/object/define-property":12}],31:[function(require,module,exports){
var _Object$getPrototypeOf = require("../core-js/object/get-prototype-of");

var _Object$setPrototypeOf = require("../core-js/object/set-prototype-of");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{"../core-js/object/get-prototype-of":15,"../core-js/object/set-prototype-of":17}],32:[function(require,module,exports){
var _Object$create = require("../core-js/object/create");

var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"../core-js/object/create":10,"./setPrototypeOf":41}],33:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;
},{}],34:[function(require,module,exports){
var _Object$getOwnPropertyDescriptor = require("../core-js/object/get-own-property-descriptor");

var _Object$defineProperty = require("../core-js/object/define-property");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;
},{"../core-js/object/define-property":12,"../core-js/object/get-own-property-descriptor":13}],35:[function(require,module,exports){
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;
},{}],36:[function(require,module,exports){
var _Array$from = require("../core-js/array/from");

var _isIterable = require("../core-js/is-iterable");

function _iterableToArray(iter) {
  if (_isIterable(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _Array$from(iter);
}

module.exports = _iterableToArray;
},{"../core-js/array/from":1,"../core-js/is-iterable":4}],37:[function(require,module,exports){
var _getIterator = require("../core-js/get-iterator");

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
},{"../core-js/get-iterator":3}],38:[function(require,module,exports){
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;
},{}],39:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;
},{}],40:[function(require,module,exports){
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":44,"./assertThisInitialized":26}],41:[function(require,module,exports){
var _Object$setPrototypeOf = require("../core-js/object/set-prototype-of");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{"../core-js/object/set-prototype-of":17}],42:[function(require,module,exports){
var arrayWithHoles = require("./arrayWithHoles");

var iterableToArrayLimit = require("./iterableToArrayLimit");

var nonIterableRest = require("./nonIterableRest");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
},{"./arrayWithHoles":24,"./iterableToArrayLimit":37,"./nonIterableRest":38}],43:[function(require,module,exports){
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":25,"./iterableToArray":36,"./nonIterableSpread":39}],44:[function(require,module,exports){
var _Symbol$iterator = require("../core-js/symbol/iterator");

var _Symbol = require("../core-js/symbol");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{"../core-js/symbol":20,"../core-js/symbol/iterator":21}],45:[function(require,module,exports){
var _Object$create = require("../core-js/object/create");

var _Map = require("../core-js/map");

var getPrototypeOf = require("./getPrototypeOf");

var setPrototypeOf = require("./setPrototypeOf");

var isNativeFunction = require("./isNativeFunction");

var construct = require("./construct");

function _wrapNativeSuper(Class) {
  var _cache = typeof _Map === "function" ? new _Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = _Object$create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
},{"../core-js/map":5,"../core-js/object/create":10,"./construct":28,"./getPrototypeOf":31,"./isNativeFunction":35,"./setPrototypeOf":41}],46:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":188}],47:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/_core').Array.from;

},{"../../modules/_core":85,"../../modules/es6.array.from":160,"../../modules/es6.string.iterator":178}],48:[function(require,module,exports){
require('../../modules/es6.array.is-array');
module.exports = require('../../modules/_core').Array.isArray;

},{"../../modules/_core":85,"../../modules/es6.array.is-array":161}],49:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');

},{"../modules/core.get-iterator":158,"../modules/es6.string.iterator":178,"../modules/web.dom.iterable":187}],50:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');

},{"../modules/core.is-iterable":159,"../modules/es6.string.iterator":178,"../modules/web.dom.iterable":187}],51:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
require('../modules/es7.map.of');
require('../modules/es7.map.from');
module.exports = require('../modules/_core').Map;

},{"../modules/_core":85,"../modules/es6.map":163,"../modules/es6.object.to-string":175,"../modules/es6.string.iterator":178,"../modules/es7.map.from":180,"../modules/es7.map.of":181,"../modules/es7.map.to-json":182,"../modules/web.dom.iterable":187}],52:[function(require,module,exports){
require('../../modules/es6.number.is-finite');
module.exports = require('../../modules/_core').Number.isFinite;

},{"../../modules/_core":85,"../../modules/es6.number.is-finite":164}],53:[function(require,module,exports){
require('../../modules/es6.number.is-integer');
module.exports = require('../../modules/_core').Number.isInteger;

},{"../../modules/_core":85,"../../modules/es6.number.is-integer":165}],54:[function(require,module,exports){
require('../../modules/es6.number.is-nan');
module.exports = require('../../modules/_core').Number.isNaN;

},{"../../modules/_core":85,"../../modules/es6.number.is-nan":166}],55:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;

},{"../../modules/_core":85,"../../modules/es6.object.assign":167}],56:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};

},{"../../modules/_core":85,"../../modules/es6.object.create":168}],57:[function(require,module,exports){
require('../../modules/es6.object.define-properties');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};

},{"../../modules/_core":85,"../../modules/es6.object.define-properties":169}],58:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/_core":85,"../../modules/es6.object.define-property":170}],59:[function(require,module,exports){
require('../../modules/es6.object.get-own-property-descriptor');
var $Object = require('../../modules/_core').Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};

},{"../../modules/_core":85,"../../modules/es6.object.get-own-property-descriptor":171}],60:[function(require,module,exports){
require('../../modules/es6.symbol');
module.exports = require('../../modules/_core').Object.getOwnPropertySymbols;

},{"../../modules/_core":85,"../../modules/es6.symbol":179}],61:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;

},{"../../modules/_core":85,"../../modules/es6.object.get-prototype-of":172}],62:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;

},{"../../modules/_core":85,"../../modules/es6.object.keys":173}],63:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;

},{"../../modules/_core":85,"../../modules/es6.object.set-prototype-of":174}],64:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
require('../modules/es7.promise.finally');
require('../modules/es7.promise.try');
module.exports = require('../modules/_core').Promise;

},{"../modules/_core":85,"../modules/es6.object.to-string":175,"../modules/es6.promise":176,"../modules/es6.string.iterator":178,"../modules/es7.promise.finally":183,"../modules/es7.promise.try":184,"../modules/web.dom.iterable":187}],65:[function(require,module,exports){
require('../../modules/es6.reflect.construct');
module.exports = require('../../modules/_core').Reflect.construct;

},{"../../modules/_core":85,"../../modules/es6.reflect.construct":177}],66:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;

},{"../../modules/_core":85,"../../modules/es6.object.to-string":175,"../../modules/es6.symbol":179,"../../modules/es7.symbol.async-iterator":185,"../../modules/es7.symbol.observable":186}],67:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');

},{"../../modules/_wks-ext":155,"../../modules/es6.string.iterator":178,"../../modules/web.dom.iterable":187}],68:[function(require,module,exports){
module.exports = require('../../modules/_wks-ext').f('toPrimitive');

},{"../../modules/_wks-ext":155}],69:[function(require,module,exports){
require('../../modules/es6.object.to-string');
module.exports = require('../../modules/_wks-ext').f('toStringTag');

},{"../../modules/_wks-ext":155,"../../modules/es6.object.to-string":175}],70:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],71:[function(require,module,exports){
module.exports = function () { /* empty */ };

},{}],72:[function(require,module,exports){
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],73:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":106}],74:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":95}],75:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":145,"./_to-iobject":147,"./_to-length":148}],76:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = require('./_ctx');
var IObject = require('./_iobject');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var asc = require('./_array-species-create');
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

},{"./_array-species-create":78,"./_ctx":87,"./_iobject":102,"./_to-length":148,"./_to-object":149}],77:[function(require,module,exports){
var isObject = require('./_is-object');
var isArray = require('./_is-array');
var SPECIES = require('./_wks')('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

},{"./_is-array":104,"./_is-object":106,"./_wks":156}],78:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

},{"./_array-species-constructor":77}],79:[function(require,module,exports){
'use strict';
var aFunction = require('./_a-function');
var isObject = require('./_is-object');
var invoke = require('./_invoke');
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

},{"./_a-function":70,"./_invoke":101,"./_is-object":106}],80:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":81,"./_wks":156}],81:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],82:[function(require,module,exports){
'use strict';
var dP = require('./_object-dp').f;
var create = require('./_object-create');
var redefineAll = require('./_redefine-all');
var ctx = require('./_ctx');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var $iterDefine = require('./_iter-define');
var step = require('./_iter-step');
var setSpecies = require('./_set-species');
var DESCRIPTORS = require('./_descriptors');
var fastKey = require('./_meta').fastKey;
var validate = require('./_validate-collection');
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

},{"./_an-instance":72,"./_ctx":87,"./_descriptors":89,"./_for-of":95,"./_iter-define":109,"./_iter-step":111,"./_meta":114,"./_object-create":118,"./_object-dp":119,"./_redefine-all":133,"./_set-species":138,"./_validate-collection":153}],83:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof');
var from = require('./_array-from-iterable');
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

},{"./_array-from-iterable":74,"./_classof":80}],84:[function(require,module,exports){
'use strict';
var global = require('./_global');
var $export = require('./_export');
var meta = require('./_meta');
var fails = require('./_fails');
var hide = require('./_hide');
var redefineAll = require('./_redefine-all');
var forOf = require('./_for-of');
var anInstance = require('./_an-instance');
var isObject = require('./_is-object');
var setToStringTag = require('./_set-to-string-tag');
var dP = require('./_object-dp').f;
var each = require('./_array-methods')(0);
var DESCRIPTORS = require('./_descriptors');

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

},{"./_an-instance":72,"./_array-methods":76,"./_descriptors":89,"./_export":93,"./_fails":94,"./_for-of":95,"./_global":96,"./_hide":98,"./_is-object":106,"./_meta":114,"./_object-dp":119,"./_redefine-all":133,"./_set-to-string-tag":139}],85:[function(require,module,exports){
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],86:[function(require,module,exports){
'use strict';
var $defineProperty = require('./_object-dp');
var createDesc = require('./_property-desc');

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

},{"./_object-dp":119,"./_property-desc":132}],87:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":70}],88:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],89:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":94}],90:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":96,"./_is-object":106}],91:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],92:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-gops":124,"./_object-keys":127,"./_object-pie":128}],93:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var has = require('./_has');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":85,"./_ctx":87,"./_global":96,"./_has":97,"./_hide":98}],94:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],95:[function(require,module,exports){
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_an-object":73,"./_ctx":87,"./_is-array-iter":103,"./_iter-call":107,"./_to-length":148,"./core.get-iterator-method":157}],96:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],97:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],98:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":89,"./_object-dp":119,"./_property-desc":132}],99:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":96}],100:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":89,"./_dom-create":90,"./_fails":94}],101:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

},{}],102:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":81}],103:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":112,"./_wks":156}],104:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":81}],105:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var isObject = require('./_is-object');
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

},{"./_is-object":106}],106:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],107:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":73}],108:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":98,"./_object-create":118,"./_property-desc":132,"./_set-to-string-tag":139,"./_wks":156}],109:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":93,"./_hide":98,"./_iter-create":108,"./_iterators":112,"./_library":113,"./_object-gpo":125,"./_redefine":134,"./_set-to-string-tag":139,"./_wks":156}],110:[function(require,module,exports){
var ITERATOR = require('./_wks')('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

},{"./_wks":156}],111:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],112:[function(require,module,exports){
module.exports = {};

},{}],113:[function(require,module,exports){
module.exports = true;

},{}],114:[function(require,module,exports){
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_fails":94,"./_has":97,"./_is-object":106,"./_object-dp":119,"./_uid":151}],115:[function(require,module,exports){
var global = require('./_global');
var macrotask = require('./_task').set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = require('./_cof')(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

},{"./_cof":81,"./_global":96,"./_task":144}],116:[function(require,module,exports){
'use strict';
// 25.4.1.5 NewPromiseCapability(C)
var aFunction = require('./_a-function');

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"./_a-function":70}],117:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

},{"./_fails":94,"./_iobject":102,"./_object-gops":124,"./_object-keys":127,"./_object-pie":128,"./_to-object":149}],118:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":73,"./_dom-create":90,"./_enum-bug-keys":91,"./_html":99,"./_object-dps":120,"./_shared-key":140}],119:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":73,"./_descriptors":89,"./_ie8-dom-define":100,"./_to-primitive":150}],120:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":73,"./_descriptors":89,"./_object-dp":119,"./_object-keys":127}],121:[function(require,module,exports){
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_descriptors":89,"./_has":97,"./_ie8-dom-define":100,"./_object-pie":128,"./_property-desc":132,"./_to-iobject":147,"./_to-primitive":150}],122:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":123,"./_to-iobject":147}],123:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_enum-bug-keys":91,"./_object-keys-internal":126}],124:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],125:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":97,"./_shared-key":140,"./_to-object":149}],126:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":75,"./_has":97,"./_shared-key":140,"./_to-iobject":147}],127:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":91,"./_object-keys-internal":126}],128:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],129:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_core":85,"./_export":93,"./_fails":94}],130:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],131:[function(require,module,exports){
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var newPromiseCapability = require('./_new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"./_an-object":73,"./_is-object":106,"./_new-promise-capability":116}],132:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],133:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

},{"./_hide":98}],134:[function(require,module,exports){
module.exports = require('./_hide');

},{"./_hide":98}],135:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');
var aFunction = require('./_a-function');
var ctx = require('./_ctx');
var forOf = require('./_for-of');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};

},{"./_a-function":70,"./_ctx":87,"./_export":93,"./_for-of":95}],136:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};

},{"./_export":93}],137:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object');
var anObject = require('./_an-object');
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

},{"./_an-object":73,"./_ctx":87,"./_is-object":106,"./_object-gopd":121}],138:[function(require,module,exports){
'use strict';
var global = require('./_global');
var core = require('./_core');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"./_core":85,"./_descriptors":89,"./_global":96,"./_object-dp":119,"./_wks":156}],139:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":97,"./_object-dp":119,"./_wks":156}],140:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":141,"./_uid":151}],141:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":85,"./_global":96,"./_library":113}],142:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var SPECIES = require('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_a-function":70,"./_an-object":73,"./_wks":156}],143:[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":88,"./_to-integer":146}],144:[function(require,module,exports){
var ctx = require('./_ctx');
var invoke = require('./_invoke');
var html = require('./_html');
var cel = require('./_dom-create');
var global = require('./_global');
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (require('./_cof')(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

},{"./_cof":81,"./_ctx":87,"./_dom-create":90,"./_global":96,"./_html":99,"./_invoke":101}],145:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":146}],146:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],147:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":88,"./_iobject":102}],148:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":146}],149:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":88}],150:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":106}],151:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],152:[function(require,module,exports){
var global = require('./_global');
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';

},{"./_global":96}],153:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

},{"./_is-object":106}],154:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_core":85,"./_global":96,"./_library":113,"./_object-dp":119,"./_wks-ext":155}],155:[function(require,module,exports){
exports.f = require('./_wks');

},{"./_wks":156}],156:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":96,"./_shared":141,"./_uid":151}],157:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":80,"./_core":85,"./_iterators":112,"./_wks":156}],158:[function(require,module,exports){
var anObject = require('./_an-object');
var get = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

},{"./_an-object":73,"./_core":85,"./core.get-iterator-method":157}],159:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};

},{"./_classof":80,"./_core":85,"./_iterators":112,"./_wks":156}],160:[function(require,module,exports){
'use strict';
var ctx = require('./_ctx');
var $export = require('./_export');
var toObject = require('./_to-object');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var toLength = require('./_to-length');
var createProperty = require('./_create-property');
var getIterFn = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_create-property":86,"./_ctx":87,"./_export":93,"./_is-array-iter":103,"./_iter-call":107,"./_iter-detect":110,"./_to-length":148,"./_to-object":149,"./core.get-iterator-method":157}],161:[function(require,module,exports){
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = require('./_export');

$export($export.S, 'Array', { isArray: require('./_is-array') });

},{"./_export":93,"./_is-array":104}],162:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":71,"./_iter-define":109,"./_iter-step":111,"./_iterators":112,"./_to-iobject":147}],163:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var MAP = 'Map';

// 23.1 Map Objects
module.exports = require('./_collection')(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

},{"./_collection":84,"./_collection-strong":82,"./_validate-collection":153}],164:[function(require,module,exports){
// 20.1.2.2 Number.isFinite(number)
var $export = require('./_export');
var _isFinite = require('./_global').isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

},{"./_export":93,"./_global":96}],165:[function(require,module,exports){
// 20.1.2.3 Number.isInteger(number)
var $export = require('./_export');

$export($export.S, 'Number', { isInteger: require('./_is-integer') });

},{"./_export":93,"./_is-integer":105}],166:[function(require,module,exports){
// 20.1.2.4 Number.isNaN(number)
var $export = require('./_export');

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

},{"./_export":93}],167:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

},{"./_export":93,"./_object-assign":117}],168:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

},{"./_export":93,"./_object-create":118}],169:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperties: require('./_object-dps') });

},{"./_descriptors":89,"./_export":93,"./_object-dps":120}],170:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":89,"./_export":93,"./_object-dp":119}],171:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./_to-iobject');
var $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

},{"./_object-gopd":121,"./_object-sap":129,"./_to-iobject":147}],172:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_object-gpo":125,"./_object-sap":129,"./_to-object":149}],173:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_object-keys":127,"./_object-sap":129,"./_to-object":149}],174:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":93,"./_set-proto":137}],175:[function(require,module,exports){

},{}],176:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var global = require('./_global');
var ctx = require('./_ctx');
var classof = require('./_classof');
var $export = require('./_export');
var isObject = require('./_is-object');
var aFunction = require('./_a-function');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var speciesConstructor = require('./_species-constructor');
var task = require('./_task').set;
var microtask = require('./_microtask')();
var newPromiseCapabilityModule = require('./_new-promise-capability');
var perform = require('./_perform');
var userAgent = require('./_user-agent');
var promiseResolve = require('./_promise-resolve');
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

},{"./_a-function":70,"./_an-instance":72,"./_classof":80,"./_core":85,"./_ctx":87,"./_export":93,"./_for-of":95,"./_global":96,"./_is-object":106,"./_iter-detect":110,"./_library":113,"./_microtask":115,"./_new-promise-capability":116,"./_perform":130,"./_promise-resolve":131,"./_redefine-all":133,"./_set-species":138,"./_set-to-string-tag":139,"./_species-constructor":142,"./_task":144,"./_user-agent":152,"./_wks":156}],177:[function(require,module,exports){
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = require('./_export');
var create = require('./_object-create');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var fails = require('./_fails');
var bind = require('./_bind');
var rConstruct = (require('./_global').Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

},{"./_a-function":70,"./_an-object":73,"./_bind":79,"./_export":93,"./_fails":94,"./_global":96,"./_is-object":106,"./_object-create":118}],178:[function(require,module,exports){
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_iter-define":109,"./_string-at":143}],179:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_an-object":73,"./_descriptors":89,"./_enum-keys":92,"./_export":93,"./_fails":94,"./_global":96,"./_has":97,"./_hide":98,"./_is-array":104,"./_is-object":106,"./_library":113,"./_meta":114,"./_object-create":118,"./_object-dp":119,"./_object-gopd":121,"./_object-gopn":123,"./_object-gopn-ext":122,"./_object-gops":124,"./_object-keys":127,"./_object-pie":128,"./_property-desc":132,"./_redefine":134,"./_set-to-string-tag":139,"./_shared":141,"./_to-iobject":147,"./_to-primitive":150,"./_uid":151,"./_wks":156,"./_wks-define":154,"./_wks-ext":155}],180:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
require('./_set-collection-from')('Map');

},{"./_set-collection-from":135}],181:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
require('./_set-collection-of')('Map');

},{"./_set-collection-of":136}],182:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = require('./_export');

$export($export.P + $export.R, 'Map', { toJSON: require('./_collection-to-json')('Map') });

},{"./_collection-to-json":83,"./_export":93}],183:[function(require,module,exports){
// https://github.com/tc39/proposal-promise-finally
'use strict';
var $export = require('./_export');
var core = require('./_core');
var global = require('./_global');
var speciesConstructor = require('./_species-constructor');
var promiseResolve = require('./_promise-resolve');

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

},{"./_core":85,"./_export":93,"./_global":96,"./_promise-resolve":131,"./_species-constructor":142}],184:[function(require,module,exports){
'use strict';
// https://github.com/tc39/proposal-promise-try
var $export = require('./_export');
var newPromiseCapability = require('./_new-promise-capability');
var perform = require('./_perform');

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });

},{"./_export":93,"./_new-promise-capability":116,"./_perform":130}],185:[function(require,module,exports){
require('./_wks-define')('asyncIterator');

},{"./_wks-define":154}],186:[function(require,module,exports){
require('./_wks-define')('observable');

},{"./_wks-define":154}],187:[function(require,module,exports){
require('./es6.array.iterator');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var TO_STRING_TAG = require('./_wks')('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

},{"./_global":96,"./_hide":98,"./_iterators":112,"./_wks":156,"./es6.array.iterator":162}],188:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

},{"./runtime":189}],189:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);

},{}],190:[function(require,module,exports){
(function (global){
"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var M = _interopRequireWildcard(require("./main.js"));

global.MathOfT = M.MathOfT;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./main.js":191,"@babel/runtime-corejs2/helpers/interopRequireWildcard":34}],191:[function(require,module,exports){
'use strict'; // ESM syntax is supported.

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var M = _interopRequireWildcard(require("./mathoft.js"));

module.exports = M;

},{"./mathoft.js":192,"@babel/runtime-corejs2/helpers/interopRequireWildcard":34}],192:[function(require,module,exports){
'use strict'; // https://stackoverflow.com/questions/36871299/how-to-extend-function-with-es6-classes
// https://stackoverflow.com/questions/23807805/why-is-mutating-the-prototype-of-an-object-bad-for-performance7
// https://stackoverflow.com/questions/32444575/whats-the-performance-impact-of-setprototypeof-on-a-new-object
// https://esdiscuss.org/topic/setprototypeof-vs-obj-proto-assignment#content-5
// only works with members defined in parent class
// class ExtensibleFunction2 extends Function{
//   constructor(){
//     super('...args','return this.__call__(...args)');
//     return this.bind(this);
//   }
//
//   __call__(...args){
//     throw new Error(`please override before calling with ${args}`)
//   }
// }

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MathOfT = void 0;

var _symbol = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/symbol"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-properties"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/keys"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/slicedToArray"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/array/is-array"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/get-own-property-symbols"));

var _isFinite = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/number/is-finite"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _toPrimitive = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/symbol/to-primitive"));

var _toStringTag = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/symbol/to-string-tag"));

var _iterator2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/symbol/iterator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/toConsumableArray"));

var _isNan = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/number/is-nan"));

var _assign = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/assign"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _isInteger = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/number/is-integer"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _getIterator2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/get-iterator"));

var _from = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/array/from"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _setPrototypeOf = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/set-prototype-of"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/wrapNativeSuper"));

var _Object$definePropert;

var ExtensibleFunction =
/*#__PURE__*/
function (_Function) {
  (0, _inherits2.default)(ExtensibleFunction, _Function);

  function ExtensibleFunction(f) {
    var _this;

    (0, _classCallCheck2.default)(this, ExtensibleFunction);
    return (0, _possibleConstructorReturn2.default)(_this, (0, _setPrototypeOf.default)(f, (this instanceof ExtensibleFunction ? this.constructor : void 0).prototype));
  }

  return ExtensibleFunction;
}((0, _wrapNativeSuper2.default)(Function));
/**
* @class MathOfT is a class that evaluates the
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
* @see MathOfT.oft
*/


var MathOfT =
/*#__PURE__*/
function (_ExtensibleFunction) {
  (0, _inherits2.default)(MathOfT, _ExtensibleFunction);

  // class MathOfT extends ExtensibleFunction2{
  // static #test=1;//@babel/plugin-proposal-class-properties

  /**
  * constructor - create a MathOfT instance that evaluates its Function terms
  *    when given some parameter "t".
  * @param  {(Object|Function|Array)} params
  * @param {(Number|Array.<Number>)} [params.range] Range of two numerical values over which t is evaluated inclusively. If given a single number t0, range is [-t0,t0]
  * @param {Number} [params.segmentDivisor] The number of segments to divide the range into when picking t values for evaluation.
  * @param {(Function|Array.<Function>|Array.<MathOfT>)} [params.terms=[]] A function that accepts a parameter t and returns a result of some operation on t
  * @param {boolean} [params.rangeoverride=false] if true, will override any range provided and set range equal to [0, params.segmentDivisor]
  * @param {boolean} [params.harmonize=false] if true, will harmonize the domains of any MathOfT terms to that of the new parent instance @see range, @see segmentDivisor
  * @throws TypeError
  */
  function MathOfT(params) {
    var _this2;

    (0, _classCallCheck2.default)(this, MathOfT);
    // super();
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MathOfT).call(this, function () {
      var _this3;

      return (_this3 = _this2).oft.apply(_this3, arguments);
    }));
    params = params || {};

    if (typeof params === 'function' || params instanceof MathOfT) {
      var thefunc = params;
      params = {
        terms: thefunc
      };
    } else if (MathOfT.ISARRAYLIKE(params)) {
      var thearray = params;
      params = {
        range: thearray
      };
    } // define the division of the evaluation range


    var segmentDivisor = params.segmentDivisor || MathOfT.DEFAULT_SEGMENT_DIVISOR;
    _this2.segmentDivisor = segmentDivisor;
    var rangeoverride = typeof params.rangeoverride === 'boolean' ? params.rangeoverride : false;
    var harmonize = typeof params.harmonize === 'boolean' ? params.harmonize : false; // create an evaluation range

    var range = rangeoverride ? [0, _this2.segmentDivisor] : params.range || MathOfT.DEFAULT_RANGE;
    range = MathOfT.ISCALCULABLE(range) ? [-range, range] : range;
    if (!MathOfT.ISARRAYLIKE(range)) throw new TypeError('range should be array'); // if(range.length!==2) throw new RangeError('range should have two elements')

    _this2.range = (0, _from.default)(range); // this MathOfT can use these terms
    // define terms

    _this2._terms = [];
    var terms = params.terms || [function (t) {
      return t;
    }];
    terms = typeof terms === 'function' ? [terms] : terms;

    if (!MathOfT.ISARRAYLIKE(terms) && typeof terms !== 'function' && !(terms instanceof MathOfT)) {
      throw new TypeError('params.terms should be array, function or MathOfT instance');
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator2.default)(terms), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var term = _step.value;

        // const term = terms[termIndex];
        // console.log(term);``
        _this2.addTerm(term, harmonize);
      } // console.log(params.opcode)
      // debugger;

    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    _this2.opcode = params.opcode; // return this.bind(this);
    // this['__call__']=(...args)=>{
    //   console.log('__call__', this._range)
    //   return this.oft.call(...args);
    // }

    return _this2;
  } //
  // '__call__'(t, filterNulls){
  //   console.log('__call__', this.range)
  //   return this.oft(t, filterNulls,false);
  // }

  /**
  * get terms - the Function terms of this MathOfT object
  *
  * @return {Array}
  */


  (0, _createClass2.default)(MathOfT, [{
    key: "addTerm",

    /**
    * addTerm - add a term to the terms of this MathOfT instance
    *
    * @param  {(function|MathOfT)} term A Function that takes a parameter (t) or
    *   MathOfT
    * @param {boolean} [harmonize=false] if true, and term is a MathOfT
    *  instance, this overwrites the range and segmentDivisor of term to make them
    *  reference the same-named parameters of this instance.
    * @returns {boolean} true if length of terms grew
    */
    value: function addTerm(term, harmonize) {
      var _this4 = this;

      var numterms = this.terms.length;

      var push = function push(_term) {
        _this4.terms.push(_term);

        _this4[numterms] = _this4.terms[numterms];
      };

      harmonize = typeof harmonize === 'boolean' ? harmonize : false;

      if (typeof term === 'function' && !(term instanceof MathOfT)) {
        push(term);
      } else if (term instanceof MathOfT) {
        push(term);

        if (harmonize) {
          // term.range = this.range;
          // term.segmentDivisor = this.segmentDivisor;
          var keys = ['_range', '_segmentDivisor'];

          var _loop = function _loop() {
            var key = keys[_i];
            (0, _defineProperty3.default)(term, key, {
              get: function get() {
                return _this4[key];
              },
              // reference to parent
              set: function set(value) {
                return (0, _defineProperty3.default)(term, key, {
                  value: value
                });
              } // dareference from parent

            });
          };

          for (var _i = 0; _i < keys.length; _i++) {
            _loop();
          }
        }
      }

      return numterms === this.terms.length - 1;
    }
    /**
     * set segmentDivisor - set the segment divisor for the evaluation range where
     * - the range will be divided into (segmentDivisor+1) segments,
     * - if given an arraylike parameter, use the 0th value
     * - if given a calculable parameter, use it as-is
     *
     *
     * @param  {number|arraylike<number>} segmentDivisor
     * @throws {TypeError} segmentDivisor should be calculable number
     */

  }, {
    key: "dSubrange",

    /**
     * get dSubrange - given indices n & nn
     * returns the delta between sub values in the MathOfT instance's
     * evaluation range, or: range[nn%range.length]-range[n%range.length],
     *
     * when given no parameters, it uses 0 and 1
     *
     * @param {Number} [n=0] the starting range index.
     * @param {Number} [nn=n+1%this.range.length] the end range index
     * @return {Number}
     * @throws {TypeError} when given non-number parameter
     */
    value: function dSubrange(n, nn) {
      n = MathOfT.ISNUMBER(n) ? n : 0;

      if (nn && !MathOfT.ISNUMBER(nn)) {
        throw new TypeError("MathOfT.dSubRange only accepts Numbers, given ".concat(Array.prototype.slice.call(arguments)));
      }

      n = n % this.range.length;

      if (!(0, _isInteger.default)(n)) {
        throw new RangeError("MathOfT.dSubRange only accepts Integers, given ".concat(Array.prototype.slice.call(arguments)));
      } // for this conditional, we use the explicit ISNUMBER to avoid logical
      // error for zero case: if(0) is falsy


      nn = MathOfT.ISNUMBER(nn) ? nn % this.range.length : (n + 1) % this.range.length;

      if (!(0, _isInteger.default)(nn)) {
        throw new RangeError("MathOfT.dSubRange only accepts Integers, given ".concat(Array.prototype.slice.call(arguments)));
      }

      return this.range[nn] - this.range[n];
    }
    /**
    * get drange - the delta between the the first and final values of the evaluation range
    *
    * @return {Number}
    */

  }, {
    key: "subT",

    /**
     * subT - get a generator function that yields segmentDivisor+1 values of t spanning the range [this.range[n], this.range[n+1]], where if n or n+1 fall beyond the bounds of this.range.length, they are constrained to fit
     *
     *
     *
     * @param  {Number} [n=0] integer start index of range
     *
     * @return {type}   description
     */
    value: function subT(n, omitLast) {
      omitLast = typeof omitLast === 'boolean' ? omitLast : false;
      var defaultN = 0;
      n = MathOfT.ISNUMBER(n) ? n % this.range.length : defaultN;
      var a = this.range[n];
      var b = this.range[(n + 1) % this.range.length];
      var tsubmax = omitLast ? this.segmentDivisor - 1 : this.segmentDivisor;
      var dt = (b - a) / this.segmentDivisor;
      /**
      * @yields {Number}
      */

      return (
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          var tsubindex;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  tsubindex = 0;

                case 1:
                  if (!(tsubindex <= tsubmax)) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 4;
                  return a + tsubindex * dt;

                case 4:
                  tsubindex++;
                  _context.next = 1;
                  break;

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        })
      );
    }
    /**
    * get T -  get a Generator yielding all values of t across instance evaluation range
    * @example
    * // get the default t values for which a MathOfT is
    * // evaluated
    * let MoT = new MathOfT({
    *   range: [0, Math.PI*2],
    *   segmentDivisor: 22,
    *   terms: (t) => [sin(t), cos(t)];
    * });
    * let T = [...MoT.T()]
    * @return {Generator<Number>}
    */

  }, {
    key: "normalizeT",

    /**
    * normalizeT - given a Number t, return a normalized (to MathOfT.DEFAULT_RANGE)
    * representation of the ratio between t and the delta of the evaluation
    * range of this MathOfT
    *
    * If t falls out of bounds of range, the value is returned as -/+ Infinity
    *
    * If the evaluation range has more than two values, e.g. [0,1,2],
    * then normalizeT checks in each subrange, e.g. [0,1], [1,2]
    * and returns an Array of normalized values corresponding to each range
    *
    * @see NORMALIZETORANGE
    * @see DEFAULT_RANGE
    * @param  {Number} [t=0]
    * @param {boolean} [doAnti=false]
    * @return {Number|Array<Number>}
    */
    value: function normalizeT(t, doAnti) {
      doAnti = typeof doAnti === 'boolean' ? doAnti : false;
      var func = doAnti ? MathOfT.ANTINORMALIZETORANGE : MathOfT.NORMALIZETORANGE;
      var arr = Array(this.range.length - 1);

      for (var r = 0; r < arr.length; r++) {
        arr[r] = func(t, [this.range[r], this.range[r + 1]]);
      }

      return arr.length === 1 ? arr[0] : arr;
    }
    /**
     * antinormalizeT - given a number t return a normalized representation of the ratio of a quantity n to the delta of the instance evaluation range such that the ratio of t to the delta of the evaluation range N satisfies
     * 1.n = maximum normal - N
     *
     * This is the remaining range for the normalized value provided by normalizeT
     *
     * if t falls beyond the lower bound of the evaluation range, return +Infinity
     * if t falls beyond the upper bound of the evaluation range, return -Infinity
     *
     * @see normalizeT
     * @param  {number} t
     * @return {number} n
     */

  }, {
    key: "antinormalizeT",
    value: function antinormalizeT(t) {
      return this.normalizeT(t, true);
    }
    /**
     * i - given a Number t within a the evaluation range of this instance
     * (inclusive), return the value of the corresponding i such that
     *   1. i is proportional to the location of t within the range
     *   2. i is scaled to segmentDivisor
     *
     * If t falls out of bounds of the range, nothing is returned
     *
     * If the range has more than two elements, return an array of length range-1
     * @see IINRANGE
     * @see segmentDivisor
     * @see normalizeT
     * @param  {Number} t
     * @return {Number|null|Array<number|null>} [0, segmentDivisor]
     */

  }, {
    key: "i",
    value: function i(t) {
      var arr = Array(this.range.length - 1);

      for (var r = 0; r < arr.length; r++) {
        arr[r] = MathOfT.IINRANGE(t, [this.range[r], this.range[r + 1]], this.segmentDivisor);
      }

      return arr.length === 1 ? arr[0] : arr;
    }
    /**
     * isInRange - return true IFF a given t falls within the evaluation range of this instance
     *
     * @param  {number} t
     * @return {boolean}
     */

  }, {
    key: "isInRange",
    value: function isInRange(t) {
      return MathOfT.INRANGE(t, this.range);
    }
    /**
    * oft - evaluate all of the terms held by this Mathoft for the
    * given t value.
    *
    * When evaluating a Function or MathOfT term, the function or MathOfT is called with a this object containing certain useful data regarding the calling instance's evaluation of t @see TTHIS_TEMPLATE
    *
    * When evaluating a MathOfT term, any t that falls outside that term's evaluation range will produce a null result. If the filterNulls parameter is true, then null values will be stripped from the returned result.
    * @see isInRange
    * @param  {Number} [t=t0]
    * @param {boolean} [filterNulls=false]
    * @param {boolean} [maketthis=true]
    * @return {(Number|Array.<Number>|Array<Array>)}
    */

  }, {
    key: "oft",
    value: function oft(t, filterNulls, maketthis) {
      // console.log(this)
      t = MathOfT.ISCALCULABLE(t) ? t : this.t0;
      filterNulls = typeof filterNulls === 'boolean' ? filterNulls : false;
      maketthis = typeof maketthis === 'boolean' ? maketthis : true; // debugger;

      var tthis = maketthis ? MathOfT.TTHIS_TEMPLATE(t, this) : (0, _typeof2.default)(this.tthis) === 'object' ? this.tthis : null;
      var result = [];

      for (var i in this.terms) {
        var _term = this.terms[i];

        if (typeof _term === 'function' && !(_term instanceof MathOfT)) {
          result[i] = _term.call(tthis, t);
        } else if (typeof _term === 'function' && _term instanceof MathOfT) {
          // console.log(_term);
          var subres = _term.isInRange(t) ? _term.oft.call((0, _assign.default)(_term, {
            tthis: tthis
          }), t, null, false) : null;
          result[i] = subres; // OVERRIDE?
        }
      }

      result = filterNulls ? result.filter(function (v) {
        return v;
      }) : result;
      return result.length === 1 ? result[0] : result;
    }
    /**
    * get ofFirstt - return the oft for the first t in the evaluation range
    *
    * @see t0
    * @see oft
    * @return {(Number|Array.<Number>|Array.<Array>)}
    */

  }, {
    key: "oftNormal",

    /**
    * oftNormal - Accepts a Number tNormal that falls within MathOfT.DEFAULT_RANGE, inclusive, and when provided
    *  1 . A NaN value, return NaN
    *  2.  +Infinity, returns evaluation from end bound of range
    *  3.  -Infinity, returns evaluation from start bound of range
    *  4. Any other number even outside of normal range, returns value of that t.
    *
    * @see ISCALCULABLE
    * @see ofFirstt
    * @see ofLastt
    * @see DEFAULT_RANGE
    * @see oft
    * @param  {Number} [tNormal=[-1,1]]
    * @return {(Number|Array.<Number>)}
    */
    value: function oftNormal(tNormal) {
      var dNormal = MathOfT.DEFAULT_RANGE[1] - MathOfT.DEFAULT_RANGE[0];
      var midNormal = MathOfT.DEFAULT_RANGE[0] + dNormal / 2;
      tNormal = MathOfT.ISNUMBER(tNormal) ? tNormal : midNormal;
      var t;
      var midt = (this.tt - this.t0) / 2 + this.t0;

      if (MathOfT.ISCALCULABLE(tNormal)) {
        t = midt + (tNormal - midNormal) * this.drange / 2;
      } // debugger;


      return t !== undefined ? this.oft(t) : (0, _isNan.default)(tNormal) ? NaN : tNormal === -Infinity ? this.ofFirstt : this.ofLastt;
    }
    /**
    * oftOp - Calculate the value of performing an operation _op on the
    * values returned by calculating this MathOfT instance's terms for
    * some evaluation value t. When given a parameter _acc, the calculation of _op will use _acc as its starting value.
    *
    * This is intended to facilitate convenient manipulation of terms and results.
    *
    * @see oft
    *
    * @param  {Number} t the t to evaluate
    * @param  {string} [_op=this.opcode]  an opcode to perform @see MathOfT.OPS
    * @param  {(Number|Array.<Number>|Array.<Array>)} [_acc=null] an accumulator value to start with @see MathOfT.OPS -> base
    * @return {(Number|Array.<Number>|Array.<Array>)}
    */

  }, {
    key: "oftOp",
    value: function oftOp(_t, _op, _acc) {
      _op = _op in MathOfT.OPS ? _op : this.opcode;
      var op = MathOfT.OPS[_op]; // debugger;

      _acc = _acc || (0, _isNan.default)(_acc) ? MathOfT.ARENUMBERS(_acc) ? _acc : NaN : null; // op.base
      // debugger;

      var transform = function transform(acc, val) {
        var transformRes; // console.log(acc,val);

        switch (MathOfT.MATHTYPEOF(val)) {
          case MathOfT.MATHTYPES.numberlike:
            if (MathOfT.ISARRAYLIKE(acc)) {
              throw new TypeError('Can\'t apply an arraylike accumulator to a scalar.');
            } else if (MathOfT.ISNUMBER(acc)) {
              transformRes = op(acc, val);
            }

            break;

          case MathOfT.MATHTYPES.arraylike:
            var isNested = MathOfT.ISARRAYLIKE(val[0]);

            if (MathOfT.ISARRAYLIKE(acc)) {
              if (acc.length !== val.length) {
                var areMismatched = isNested ? acc.length !== val[0].length : true;

                if (areMismatched) {
                  throw new TypeError('Can\'t apply an op to arraylike values of dissimilar lengths.');
                }
              }

              if (isNested) {
                return val.reduce(transform, acc);
              } else {
                for (var i = 0; i < val.length; i++) {
                  val[i] = transform(acc[i], val[i]); // overwrite in place
                }
              }
            } else if (MathOfT.ISNUMBER(acc)) {
              for (var _i2 = 0; _i2 < val.length; _i2++) {
                val[_i2] = transform(acc, val[_i2]); // overwrite in place
              }
            }

            transformRes = val;
            break;
        }

        return transformRes;
      };

      var _oft = this.oft(_t); //


      if (!_op) {
        return op(_oft);
      } // console.log(_oft)
      // console.log(_acc);


      var res;

      switch (this.terms.length) {
        case 1:
          res = _acc || (0, _isNan.default)(_acc) ? transform(_acc, _oft) : _oft;
          break;

        default:
          res = _acc || (0, _isNan.default)(_acc) ? MathOfT.ISARRAYLIKE(_acc) ? transform(_acc, _oft) : _oft.reduce(transform, _acc) : _oft.reduce(transform);
          break;
      }

      return res;
    }
    /**
    * get ofAlltT - get a Generator that yields
    * all Array=[t, this.oft(t)] for t in evaluation range
    * in form [t, this.oft(t)]
    *
    * @see oft
    * @return {Generator}
    */

  }, {
    key: "mapT",

    /**
    * map - apply the Array.map native function to the elements yielded by
    * this[Symbol.iterator] with the given callback function and this argument
    *    *
    * @see get [Symbol.iterator]
    * @param  {Function} [callback] callback to apply
    * @param  {Object} [thisArg]  this argument
    * @return {Array}         map result
    */
    value: function mapT(callback, thisArg) {
      if (!(callback instanceof Function)) throw new TypeError('map needs Function callback');
      return (0, _toConsumableArray2.default)(this).map(callback, thisArg);
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

  }, {
    key: "mapTOp",
    value: function mapTOp(callback, thisArg) {
      if (!(callback instanceof Function)) throw new TypeError('map needs Function callback');
      return (0, _toConsumableArray2.default)(this.ofAlltTOp()).map(callback, thisArg);
    }
    /**
     * toString
     *
     * @override
     * @return {string}
     */

  }, {
    key: "toString",
    value: function toString() {
      var res = 'MathOfT\n';
      res += "range:\n\t[".concat(this.range, "]\n");
      res += "segments:\n\t[".concat(this.numSegments, "]\n");
      res += "terms:\n";

      for (var i = 0; i < this.terms.length; i++) {
        res += "\t[".concat(i, "]: ").concat(this.terms[i], "\n");
      }

      return res;
    }
    /**
     * get Symbol.toStringTag
     *
     * @override
     * @return {string}
     */

  }, {
    key: "terms",
    get: function get() {
      return this._terms;
    }
  }, {
    key: "segmentDivisor",
    set: function set(segmentDivisor) {
      segmentDivisor = MathOfT.ISARRAYLIKE(segmentDivisor) ? segmentDivisor[0] : segmentDivisor;

      if (!MathOfT.ISCALCULABLE(segmentDivisor)) {
        // console.log('NaN segment Divisor')
        throw new TypeError('segmentDivisor should be calculable number, not: ' + segmentDivisor);
      } else {
        this._segmentDivisor = [segmentDivisor];
      }
    }
    /**
    * get segmentDivisor The number of segment divisors
    * (number of t evaluation points -1)
    *   in this MathOfT
    *
    * @return {Number}
    */
    ,
    get: function get() {
      return this._segmentDivisor[0];
    }
    /**
     * get numSegments - The number of actual segments the MathOfT divides the evaluation range into
     *
     * @return {Number}
     */

  }, {
    key: "numSegments",
    get: function get() {
      return this.segmentDivisor + 1;
    }
    /**
     * get dt - get the delta for t between the first and final values of the
     * evaluation range. May be innacurate when the range has more than two
     * terms
     *
     * @return {number}
     */

  }, {
    key: "dt",
    get: function get() {
      return this.drange / this.segmentDivisor;
    }
    /**
     * set range - only accepts an arraylike of calculables
     *
     * @param  {Array<number>} range
     */

  }, {
    key: "range",
    set: function set(range) {
      if (!(MathOfT.ISARRAYLIKE(range) && MathOfT.ARECALCULABLES(range))) throw new TypeError('range values should be Array of calculable numbers');
      this._range = Array(range.length);

      for (var rangeIndex in range) {
        this._range[rangeIndex] = range[rangeIndex];
      }
    }
    /**
    * get range - the evaluation range is the minimum and maximum values for t
    *
    * @return {Array.<Number>}
    */
    ,
    get: function get() {
      return this._range;
    }
    /**
    * get t0 - the first value of t in the evaluation range T
    * @see T
    * @return {Number}
    */

  }, {
    key: "t0",
    get: function get() {
      return this.range[0];
    }
    /**
    * get tt - the last value of t in the evaluation range T
    * @see T
    * @return {Number}
    */

  }, {
    key: "tt",
    get: function get() {
      return this.range[this.range.length - 1];
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

  }, {
    key: "opcode",
    get: function get() {
      return this._opcode;
    }
    /**
    * set opcode - set the opcode to one of the opcodes
    *  defined in MathOfT.OPS
    *
    * @param  {string} [opcode=null] @see MathOfT.OPS
    */
    ,
    set: function set(opcode) {
      this._opcode = MathOfT.ISOP(opcode) ? opcode : null;
    }
  }, {
    key: "drange",
    get: function get() {
      return this.range[this.range.length - 1] - this.range[0];
    }
    /**
    * get dabsrange - the absolute value of the delta
    * between the first and final values of the evaluation range
    *
    * @return {Number}
    */

  }, {
    key: "dabsrange",
    get: function get() {
      return Math.abs(this.drange);
    }
  }, {
    key: "T",
    get: function get() {
      var rangelimit = this.range.length - 2;
      /**
      * @yields {Number}
      */

      return (
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2() {
          var rangeIndex;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  rangeIndex = 0;

                case 1:
                  if (!(rangeIndex <= rangelimit)) {
                    _context2.next = 6;
                    break;
                  }

                  return _context2.delegateYield(rangeIndex === rangelimit ? this.subT(rangeIndex)() : this.subT(rangeIndex, true)(), "t0", 3);

                case 3:
                  rangeIndex++;
                  _context2.next = 1;
                  break;

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        })
      );
    }
  }, {
    key: "ofFirstt",
    get: function get() {
      return this.oft(this.t0);
    }
    /**
    * get ofLastt - return the oft for the final t in the evaluation range
    *
    * @see range
    * @see oft
    * @return {(Number|Array.<Number>|Array.<Array>)}
    */

  }, {
    key: "ofLastt",
    get: function get() {
      return this.oft(this.tt);
    }
  }, {
    key: "ofAlltT",
    get: function get() {
      return (
        /*#__PURE__*/
        _regenerator.default.mark(function _callee3() {
          var _arr, _i3, t;

          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _arr = (0, _toConsumableArray2.default)(this.T());
                  _i3 = 0;

                case 2:
                  if (!(_i3 < _arr.length)) {
                    _context3.next = 9;
                    break;
                  }

                  t = _arr[_i3];
                  _context3.next = 6;
                  return [t, this.oft(t)];

                case 6:
                  _i3++;
                  _context3.next = 2;
                  break;

                case 9:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        })
      );
    }
    /**
    * get - Symbol.iterator get a Generator that yields
    *    all this.oft(t) for t in evaluation range
    * @see oft
    * @return {Generator} Generator function yielding this.oft(t)
    */

  }, {
    key: _iterator2.default,
    get: function get() {
      return (
        /*#__PURE__*/
        _regenerator.default.mark(function _callee4() {
          var _this5 = this;

          return _regenerator.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  return _context4.delegateYield((0, _toConsumableArray2.default)(this.T()).map(function (t, i) {
                    return _this5.oft(t);
                  }), "t0", 1);

                case 1:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        })
      );
    }
    /**
    * get ofAlltTOp - get a Generator that yields all
    * this.oftOp(_t, _acc, _op) for _t in T,
    * _acc, _op provided by user
    *
    * @see ofAlltTOp
    * @return {Generator}  description
    */

  }, {
    key: "ofAlltTOp",
    get: function get() {
      return (
        /*#__PURE__*/
        _regenerator.default.mark(function _callee5(_acc, _op) {
          var _this6 = this;

          return _regenerator.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  return _context5.delegateYield((0, _toConsumableArray2.default)(this.T()).map(function (_t) {
                    return _this6.oftOp(_t, _op, _acc);
                  }), "t0", 1);

                case 1:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        })
      );
    }
  }, {
    key: _toStringTag.default,
    get: function get() {
      return 'MathOfT Function';
    }
    /**
     * @static CALC_PRECISION_WARN - give precision warning in the form of an object that can be converted to a primitive.
     *
     * Floating point math has inherent imprecisions. This function is useful for quantifying them and identifying potentially problematic operations. It uses a few different tests to highlight sources of error, including:
     *  1. a*\frac{1}{a} // Multiplicative Identity
     *  2. \sum_{i=1}^{a} 1/a // Sum of Inverses
     * @return {object}  the object with primitive values:
     *         {number}  the maximum value for which no precision is lost
     *         {string}  as brief message
     */

  }], [{
    key: "CALC_PRECISION_WARN",
    value: function CALC_PRECISION_WARN(maxtestnum) {
      var _res;

      var res;

      var getmsg = function getmsg(e) {
        return "Maximum safe unit divisor: ".concat(e);
      };

      var tests = [function (a) {
        return 1 / a * a === 1;
      }, //  multiplicative identity
      function (a) {
        return Array(a).fill(1 / a).reduce(function (acc, val) {
          return acc + val;
        }, 0);
      } // sum of inverses
      ]; // only do so many tests

      var testnum = 0;
      var maxtest = MathOfT.ISCALCULABLE(maxtestnum) ? maxtestnum : 144; // tests[0]

      var lastgoodmultidendivisor, msg; // tests[1]

      var roundinaccura = []; // all divisors for which rounding error causes failure

      var rounddeltas = []; // the difference between erroneous rounding and 1

      var roundexcesses = []; // divisors for which rounding error causes excess failure

      var rounddeficits = []; // divisors for which rounding error causes deficiency failure

      while (testnum < maxtest) {
        // tests[0]
        if (!tests[0](++testnum)) {
          lastgoodmultidendivisor = testnum - 1;
          msg = getmsg(lastgoodmultidendivisor);
        } // tests[1]


        var test1result = tests[1](testnum); // testnum has been incremented already

        if (test1result !== 1) {
          roundinaccura.push(testnum);
          rounddeltas.push(test1result - 1);
          if (test1result < 1) rounddeficits.push(testnum);
          if (test1result > 1) roundexcesses.push(testnum);
        }
      }

      ;
      res = (_res = {}, (0, _defineProperty2.default)(_res, _toPrimitive.default, function (hint) {
        if (hint === 'number') return lastgoodmultidendivisor;
        return msg;
      }), (0, _defineProperty2.default)(_res, "inaccurateDivisors", {
        all: roundinaccura,
        errors: rounddeltas,
        excessive: roundexcesses,
        deficient: rounddeficits
      }), (0, _defineProperty2.default)(_res, _iterator2.default,
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6() {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.delegateYield(roundinaccura, "t0", 1);

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      })), _res);
      return res;
    } // TODO: static SIN_OF_PI_WARN

    /* js: (0=== Math.sin(-Math.PI))=false
    in electron:
    0=== Math.sin(0)
    true
    (0=== Math.sin(-Math.PI))
    false
    Math.sin(-Math.PI)
    -1.2246467991473532e-16
    Math.sin(Math.PI)
    1.2246467991473532e-16
    in node:
    >  Math.sin(-Math.PI)
    -1.2246467991473532e-16
    >  Math.sin(-Math.PI)
    -1.2246467991473532e-16
    in node with decimal.js(https://github.com/MikeMcl/decimal.js):
    console.log(Decimal.sin(-Math.PI).toPrecision(20))
    -2.3846264338327950288e-16
    undefined
    >  console.log(Decimal.sin(-Math.PI).toPrecision(80))
    -2.3846264338327950288000000000000000000000000000000000000000000000000000000000000e-16
    undefined
    >  console.log(Decimal.sin(3.1415926535897932384626433832795028841971693993751).toPrecision(80))
    2.3846264338327950288000000000000000000000000000000000000000000000000000000000000e-16
    undefined
    >  console.log(Decimal.sin(3.1415926535897932384626433832795028841971693993751*2).toPrecision(80))
    -4.7692528676655900577000000000000000000000000000000000000000000000000000000000000e-16
    undefined
    >  console.log(Decimal.sin(3.1415926535897932384626433832795028841971693993751*2).toPrecision(80))
    -4.7692528676655900577000000000000000000000000000000000000000000000000000000000000e-16
    undefined
    >  console.log(Decimal.sin(Decimal('3.1415926535897932384626433832795028841971693993751')).toPrecision(80))
    5.8209749445923078164000000000000000000000000000000000000000000000000000000000000e-51
    undefined */

    /**
     * @static ISNUMBER - return true IFF both of the following conditions are met
     *   1. there was ONE argument provided, and
     *   2. the sole provided argument was a Number
     *
     *
     * @return {boolean}
     */

  }, {
    key: "ISNUMBER",
    value: function ISNUMBER() {
      return arguments.length === 1 && typeof arguments[0] === 'number';
    }
    /**
     * @static ISCALCULABLE - return true IFF all of the following conditions are met
     * 1. argument satisfies ISNUMBER (One Number argument)
     * 2. argument is not NaN
     * 3. argument is not +/-Infinity
     *
     * This function does more calls than just using isFinite, however, it is used in the MathOfT class because the class also deals with arrays and objects.
     *
     * @see ISNUMBER
     *
     * @return {boolean}  description
     */

  }, {
    key: "ISCALCULABLE",
    value: function ISCALCULABLE() {
      return arguments.length === 1 && (0, _isFinite.default)(arguments[0]);
    }
    /**
     * @static ISARRAYLIKE - determine whether a given argument x is "like" an array for the purposees of MathOfT calculations and parsing, returning true IFF x satisfies one of the following conditions:
     * 1 - It is an Array
     * 2 - It is a TypedArray
     * 3 - It provides a Symbol.iterator property
     *
     * The third condition allows for the parsing of various iterable objects, but it does not guarantee that such actions will produce calculable values.
     *
     * @param  {?} x
     * @return {boolean}
     */

  }, {
    key: "ISARRAYLIKE",
    value: function ISARRAYLIKE(x) {
      return x && ((0, _getOwnPropertySymbols.default)(x).includes(_iterator2.default) || (0, _isArray.default)(x) || ArrayBuffer.isView(x));
    }
    /**
     * @static ARENUMBERS return true IFF one of these conditions are met
     *   1. The provided arguments are ALL of Number type,
     *   2. The sole provided argument is an Array whose members are ALL of Number type,
     *   3. Any provided argument is an Array whose members are
     *      A. ALL of Number type, or
     *      B. nested Arrays whose submembers are all number types or Arrays
     *      and ALL other arguments are Number type or Array with ALL members of Number type,
     *
     * @see ARECALCULABLES
     *
     * @params {} [arguments] figure out whether the arguments are numbers or
     *  an Array thereof
     * @return {boolean}
     */

  }, {
    key: "ARENUMBERS",
    value: function ARENUMBERS() {
      if (arguments.length === 0) {
        return false;
      } else {
        return Array.prototype.slice.call(arguments).every(function (v) {
          return MathOfT.ISARRAYLIKE(v) ? MathOfT.ARENUMBERS.apply(MathOfT, (0, _toConsumableArray2.default)(v)) : MathOfT.ISNUMBER(v);
        });
      }
    }
  }, {
    key: "ARECALCULABLES",

    /**
     * @static ARECALCULABLES return true IFF one of these conditions are met
     *   1. The provided arguments are ALL of Number type,
     *   2. The sole provided argument is an Array whose members are ALL of Number type,
     *   3. Any provided argument is an Array whose members are
     *      A. ALL of Number type, or
     *      B. nested Arrays whose submembers are all number types or Array,
     *   and ALL other arguments are Number type or Array with ALL members of Number type, and
     *   4. All arguments of number type are neither NaN nor -/+Infinity
     *
     * @see ARENUMBERS
     *
     * @params {} [arguments] figure out whether the arguments are numbers or
     *  an Array thereof
     * @return {boolean}
     */
    value: function ARECALCULABLES() {
      if (arguments.length === 0) {
        return false;
      } else {
        return Array.prototype.slice.call(arguments).every(function (v) {
          return MathOfT.ISARRAYLIKE(v) ? MathOfT.ARECALCULABLES.apply(MathOfT, (0, _toConsumableArray2.default)(v)) : MathOfT.ISCALCULABLE(v);
        });
      }
    }
  }, {
    key: "INRANGE",

    /**
     * @static INRANGE - determine whether a given number n falls
     * within any of the follwoing inclusive ranges
     *    0. [ MathOfT.DEFAULT_RANGE[0], MathOfT.DEFAULT_RANGE[1] ]
     *    1. [0, m],
     *    2. [0, m[0]], (when provided unit-length array)
     *    3. [m[0], m[m.length-1]]
     *    4, [m, mm]
     *
     * @param  {Number} n the number to test
     * @param  {(Number|Array<Number>)} [m] the end of the range starting with 0, or
     *                                       the Array representing the range [m[0], m[last]]
     *                                       the begining of range ending in mm, or
     * @param  {Number} [mm] the optional end of the range
     * @return {boolean}
     */
    value: function INRANGE(n, m, mm) {
      var test = function test(a, b, c) {
        // console.log(a,b,c)
        return a > b ? a <= c : a < b ? a >= c : true; // a === b
      };

      if (!(MathOfT.ARENUMBERS.apply(MathOfT, arguments) && MathOfT.ISNUMBER(n))) {
        return false;
      } else {
        if (arguments.length === 1) {
          return MathOfT.INRANGE(n, MathOfT.DEFAULT_RANGE);
        } else if (MathOfT.ISARRAYLIKE(m)) {
          // console.log(n,m)
          return m.length === 1 ? test(n, 0, m[0]) : test(n, m[0], m[m.length - 1]);
        } else if (MathOfT.ISNUMBER(m)) {
          if (!MathOfT.ISNUMBER(mm)) {
            return test(n, 0, m);
          } else if (MathOfT.ISNUMBER(mm)) {
            return test(n, m, mm);
          }
        }
      }
    }
    /**
     * @static NORMALIZETORANGE - given a Number t, amd a ramge TT, return a normalized (to an optional range NN or MathOfT.DEFAULT_RANGE)
     * representation of the ratio between the two deltas A and B where
     *   1. A is the difference betewen t and TT[first]
     *   2. B is the difference between TT[last] and TT[first]
     *
     *
     * If t falls out of bounds of range, the value is returned as -/+ Infinity,
     * where:
     *   1. -Infinity corresponding to beyond the bound of TT[first], and
     *   2. +Infinity corresponding to beyond the bound of TT[last]
     *
     *
     * @param  {number} [t=0] the t to evaluate
     * @param  {Array<number>} [TT=DEFAULT_RANGE] the range in which to test for TT
     * @param  {Array<number>} [NN=DEFAULT_RANGE] the target normalization range * @return {number}
     */

  }, {
    key: "NORMALIZETORANGE",
    value: function NORMALIZETORANGE(t, TT, NN) {
      if (!MathOfT.ISNUMBER(t)) {
        t = 0;
      }

      if (!MathOfT.ARENUMBERS(NN)) {
        NN = MathOfT.DEFAULT_RANGE;
      }

      if (!MathOfT.ARENUMBERS(TT)) {
        TT = MathOfT.DEFAULT_RANGE;
      }

      var _NN = NN,
          _NN2 = (0, _slicedToArray2.default)(_NN, 2),
          normA = _NN2[0],
          normB = _NN2[1];

      var minNorm = normA < normB ? normA : normB; // let maxNorm = (normB > normA)
      //   ? normB
      //   : normA

      var res = (t - TT[0]) / (TT[1] - TT[0]); // [0-1]

      res = normA + (normB - normA) * res; // [normA, normB]

      if (!MathOfT.INRANGE(res, normA, normB)) {
        res = res < minNorm ? -Infinity : Infinity;
      }

      return res;
    }
    /**
     * @static ANTINORMALIZETORANGE - given a Number t, amd a ramge TT, return a normalized (to MathOfT.DEFAULT_RANGE)
     * representation of the ratio between the two deltas A and B where
     *   1. A is the difference betewen t and TT[last]
     *   2. B is the difference between TT[last] and TT[first]
     *
     * If t falls out of bounds of range, the value is returned as -/+ Infinity,
     * where:
     *   1. +Infinity corresponding to beyond the bound of TT[first], and
     *   2. -Infinity corresponding to beyond the bound of TT[last]
     *
     * @see NORMALIZETORANGE
     * @param  {number} [t=0] the t to evaluate
     * @param  {Array<number>} [TT=DEFAULT_RANGE] the range in which to test for TT
     * @return {number}
     */

  }, {
    key: "ANTINORMALIZETORANGE",
    value: function ANTINORMALIZETORANGE(t, TT, NN) {
      if (!MathOfT.ISNUMBER(t)) {
        t = 0;
      }

      if (!MathOfT.ARENUMBERS(TT)) {
        TT = MathOfT.DEFAULT_RANGE;
      }

      if (!MathOfT.ARENUMBERS(NN)) {
        NN = MathOfT.DEFAULT_RANGE;
      }

      var res = MathOfT.NORMALIZETORANGE(t, TT, NN);
      return Math.abs(res) === Infinity ? -res : NN[NN.length - 1] - res;
    }
    /**
     * @static IINRANGE - given a number t, a range TT and a divisor d, return the value of the corresponding i such that
     *   1. i is proportional to the location of t within the range
     *   2. i is proportional to d
     *
     * @param  {number} t  t to find in TT
     * @param  {Array<number>} TT range
     * @param  {type} d  divisor
     * @return {null|number}
     */

  }, {
    key: "IINRANGE",
    value: function IINRANGE(t, TT, d) {
      d = MathOfT.ISNUMBER(d) ? Math.floor(d) : Math.floor(MathOfT.DEFAULT_SEGMENT_DIVISOR);
      var res = MathOfT.NORMALIZETORANGE(t, TT, [0, 1]);
      return res === Infinity ? null : res === -Infinity ? null : Math.floor(res * d);
    }
    /**
     * @static DIMENSIONS - return the size of the given x, where x can be a number or an arraylike or a nested arraylike
     *
     * @param  {(number|Array)} x the structure to get dimensions of
     * @return {Array}
     */

  }, {
    key: "DIMENSIONS",
    value: function DIMENSIONS(x) {
      var dim = _promise.default.resolve([]);

      if (MathOfT.ISNUMBER(x)) {
        return dim.then(function (dimarr) {
          return dimarr.concat(0);
        });
      } else if (MathOfT.ISARRAYLIKE(x)) {
        if (x.length === 0) {
          return dim.then(function (dimarr) {
            return dimarr.concat(0);
          });
        } else {
          var subarrayIndices = [];

          var isNotSubarrayTest = function isNotSubarrayTest(acc, v, i) {
            if (!MathOfT.ISARRAYLIKE(v)) {
              return acc && true;
            } else {
              subarrayIndices.push(i);
              return acc && false;
            }
          };

          if (x.reduce(isNotSubarrayTest, true)) {
            return dim.then(function (dimarr) {
              return dimarr.concat(x.length);
            });
          } else {
            return dim.then(function (dimarr) {
              return _promise.default.all(subarrayIndices.map(function (v) {
                var xSubArr = x[v]; // console.log(xSubArr)

                return MathOfT.DIMENSIONS(xSubArr);
              })).then(function (subdims) {
                // console.log(subdims, x.length)
                var flatsubdims = MathOfT.OPS['...'](subdims); // console.log(flatsubdims, x.length)

                var mag;

                if (MathOfT.EQUAL(flatsubdims.length, subdims.length, x.length)) {
                  var _MathOfT$OPS;

                  mag = (_MathOfT$OPS = MathOfT.OPS).magest.apply(_MathOfT$OPS, (0, _toConsumableArray2.default)(flatsubdims));
                } else {
                  var _MathOfT$OPS2;

                  mag = (_MathOfT$OPS2 = MathOfT.OPS).magest.apply(_MathOfT$OPS2, (0, _toConsumableArray2.default)(subdims));
                } // mag = (Number.isNaN(mag) || mag === 0)
                //   ? []
                //   : mag


                return dimarr.concat(x.length, mag);
              });
            });
          }
        }
      }

      return dim;
    }
    /**
     * @static EQUAL - determine whether the given number or Array-like arguments are satisfying the conditions:
     * 1) all of a single shared type,
     * 2) if numbers, of equal value,
     * 3) if arrays, composed of equal positional elements
     * 4) if other types, satisfying strict equality test
     *
     * When comparing values that are NaN or containing NaN in the same positions, the function will return false because NaN doesn't equal NaN
     *
     * @params {?} [arguments]
     * @return {boolean}
     */

  }, {
    key: "EQUAL",
    value: function EQUAL() {
      if (arguments.length === 0) {
        return false;
      }

      if (arguments.length === 1) {
        return !(0, _isNan.default)(arguments[0]);
      }

      var a0 = arguments[0];
      var a0type = MathOfT.MATHTYPEOF(a0);
      var res = true; // const dim = MathOfT.DIMENSIONS(arguments[0]);

      for (var i = 1; i < arguments.length; i++) {
        var a = arguments[i];
        if (MathOfT.MATHTYPEOF(a) !== a0type) return false;

        switch (a0type) {
          case MathOfT.MATHTYPES.arraylike:
            if (a.length !== a0.length) return false;

            for (var ai = 0; ai < a0.length; ai++) {
              if (!MathOfT.EQUAL(a0[ai], a[ai])) return false;
            }

            break;

          case MathOfT.MATHTYPES.numberlike:
            res = res && a === a0;
            break;

          default:
            // console.log(a)
            res = res && a === a0;
        }
      }

      return res;
    }
    /**
     * @static MATHTYPEOF - tell whether the given argument a is of one of the types that MathOfT can do math with  and if so, which type
     *
     * @param  {?} [a]
     * @return {(Symbol|null)}
     */

  }, {
    key: "MATHTYPEOF",
    value: function MATHTYPEOF(a) {
      return MathOfT.ISARRAYLIKE(a) ? MathOfT.MATHTYPES.arraylike : MathOfT.ISNUMBER(a) ? MathOfT.MATHTYPES.numberlike : null;
    }
    /**
     * @static TTHIS_TEMPLATE - given a t and a MathOfT instance, produces an object with some keys for inter-instance communication corresponding to:
     * 1 the result of evaluating certain methods of the calling instance for t @see FUNCKEYS
     * 2 certain members of the calling instance @see MEMBERKEYS
     *
     * @see oft
     * @param  {Number} t the t of the instance communicatiing
     * @param {MathOfT} mathoft the instance doing communication
     * @return {object|Array<string>} communication object, or array of communication keys
     */

  }, {
    key: "TTHIS_TEMPLATE",
    value: function TTHIS_TEMPLATE(t, mathoft) {
      var o = MathOfT.ISCALCULABLE(t) ? {
        t: t
      } : {};
      var populateFunc = mathoft instanceof MathOfT && MathOfT.ISCALCULABLE(t) ? function (key) {
        o[key] = mathoft[key](t);
      } : function () {
        return null;
      };
      var populateMemb = mathoft instanceof MathOfT ? function (key) {
        o[key] = mathoft[key];
      } : function () {
        return null;
      };
      MathOfT.FUNCKEYS.map(function (fkey) {
        return populateFunc(fkey);
      });
      MathOfT.MEMBERKEYS.map(function (mkey) {
        return populateMemb(mkey);
      });

      if ((0, _keys.default)(o).length === 0) {
        return MathOfT.FUNCKEYS.concat(MathOfT.MEMBERKEYS);
      } else {
        return o;
      }
    }
  }, {
    key: "ISOP",

    /**
     * @static ISOP - given a string codeToParse, return true when code is found
     *  in MathOfT.OPDICT
     * @see MathOfT.OPDICT
     * @param  {string} codeToParse
     * @return {boolean}
     */
    value: function ISOP(codeToParse) {
      return MathOfT.OPDICT.includes(codeToParse);
    }
    /**
     * @static OPPARSE - given a string codeToParse, return
     * the corresponding operation function from MathOfT.OPS
     *
     * @see MathOfT.OPS
     * @param  {string} codeToParse
     * @return {function} MathOfT.OPS function corresponding to op
     */

  }, {
    key: "OPPARSE",
    value: function OPPARSE(codeToParse) {
      return MathOfT.ISOP(codeToParse) ? MathOfT.OPS[codeToParse] : MathOfT.OPS[null];
    }
  }]);
  return MathOfT;
}(ExtensibleFunction);

exports.MathOfT = MathOfT;
(0, _defineProperties.default)(MathOfT, {
  /**
   * @static MATHTYPES - valid types that MathOfT can do math on
   * @see MathOfT.MATHTYPEOF
   * @memberof MathOfT
   */
  'MATHTYPES': {
    value: function () {
      var o = {};
      ['arraylike', 'numberlike'].map(function (e) {
        this[e] = (0, _symbol.default)(e);
        this[this[e]] = e;
      }, o);
      return o;
    }(),
    enumerable: true,
    configurable: false,
    writable: false
  },

  /**
   * @static OPDICT - an array of valid op keys
   * @see MathOfT.OPS
   * @memberof MathOfT
   */
  'OPDICT': {
    value: [null, '+', '-', '*', '/', '**', '...', 'magest', 'magesti'],
    enumerable: true,
    configurable: false,
    writable: false
  },

  /**
   * @static OPS - an object containing operations, or ops, that
   * perform mathematical functions corresponding to their keys
   * @hamespace OPS
   * @see MathOfT.ISOP
   * @see MathOfT.OPDICT
   * @see MathOfT.OPPARSE
   * @see MathOfT.ARENUMBERS
   * @memberof MathOfT
   */
  'OPS': {
    value: (0, _defineProperties.default)({}, (_Object$definePropert = {
      'opfunc': {
        value: function value(code, f) {
          if (typeof code !== 'string') {
            throw new TypeError('MathOfT.OPS.opfunc takes one string');
          } else if (!MathOfT.OPDICT.includes(code)) {
            throw new RangeError('MathOfT.OPS.opfunc takes one string in MathOfT.OPDICT');
          }

          return function (args) {
            return (0, _toConsumableArray2.default)(args).reduce(function (acc, c, i) {
              return f(acc, c);
            });
          };
        },
        writable: false,
        configurable: false,
        enumerable: false
      },
      'resfunc': {
        value: function value(code, f, base, args) {
          if (!MathOfT.ISCALCULABLE(base)) {
            throw new TypeError('MathOfT.OPS.resfunc requires a calculable base parameter');
          }

          if (!MathOfT.ISARRAYLIKE(args)) {
            throw new TypeError('MathOfT.OPS.resfunc requires an iterable, Array or ArrayBuffer view args parameter');
          }

          if (MathOfT.ARENUMBERS.apply(MathOfT, (0, _toConsumableArray2.default)(args))) {
            return MathOfT.OPS.opfunc(code, f)(args);
          }

          var nullsReplaced = (0, _toConsumableArray2.default)(args).map(function (v) {
            return v === null ? base : v;
          });

          if (MathOfT.ARENUMBERS(nullsReplaced)) {
            return MathOfT.OPS.opfunc(code, f)(nullsReplaced);
          }

          return NaN;
        },
        writable: false,
        configurable: false,
        enumerable: false
      }
    }, (0, _defineProperty2.default)(_Object$definePropert, null, {
      enumerable: true,
      value: function () {
        var code = null;
        var base = null;
        return (0, _assign.default)(function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return args;
        }, {
          code: code,
          base: base
        });
      }(),
      configurable: false,
      writable: false
    }), (0, _defineProperty2.default)(_Object$definePropert, '+', {
      enumerable: true,
      value: function () {
        var base = 0;
        var code = '+';
        return (0, _assign.default)(function () {
          return MathOfT.OPS.resfunc(code, function (a, b) {
            return a + b;
          }, base, arguments);
        }, {
          code: code,
          base: base
        });
      }(),
      configurable: false,
      writable: false
    }), (0, _defineProperty2.default)(_Object$definePropert, '-', {
      enumerable: true,
      value: function () {
        var base = 0;
        var code = '-';
        return (0, _assign.default)(function () {
          return MathOfT.OPS.resfunc(code, function (a, b) {
            return a - b;
          }, base, arguments);
        }, {
          code: code,
          base: base
        });
      }(),
      configurable: false,
      writable: false
    }), (0, _defineProperty2.default)(_Object$definePropert, '*', {
      enumerable: true,
      value: function () {
        var base = 1;
        var code = '*';
        return (0, _assign.default)(function () {
          return MathOfT.OPS.resfunc(code, function (a, b) {
            return a * b;
          }, base, arguments);
        }, {
          code: code,
          base: base
        });
      }(),
      configurable: false,
      writable: false
    }), (0, _defineProperty2.default)(_Object$definePropert, '/', {
      enumerable: true,
      value: function () {
        var base = 1;
        var code = '/';
        return (0, _assign.default)(function () {
          return MathOfT.OPS.resfunc(code, function (a, b) {
            return a / b;
          }, base, arguments);
        }, {
          code: code,
          base: base
        });
      }(),
      configurable: false,
      writable: false
    }), (0, _defineProperty2.default)(_Object$definePropert, '**', {
      enumerable: true,
      value: function () {
        var base = 1;
        var code = '**';
        return (0, _assign.default)(function () {
          return MathOfT.OPS.resfunc(code, function (a, b) {
            return Math.pow(a, b);
          }, base, arguments);
        }, {
          code: code,
          base: base
        });
      }(),
      configurable: false,
      writable: false
    }), (0, _defineProperty2.default)(_Object$definePropert, '...', {
      enumerable: true,
      value: function () {
        var code = '...';
        var base = [];
        return (0, _assign.default)(function flatten(arr) {
          if (!MathOfT.ISARRAYLIKE(arr)) {
            return arr;
          } else {
            return arr.reduce(function (acc, v) {
              return MathOfT.ISARRAYLIKE(v) ? acc.concat(flatten(v)) : acc.concat(v);
            }, base);
          }
        }, {
          code: code,
          base: base
        });
      }(),
      configurable: false,
      writable: false
    }), (0, _defineProperty2.default)(_Object$definePropert, 'magest', {
      enumerable: true,
      value: function () {
        var code = 'magest';
        var base = 0;
        return (0, _assign.default)(function () {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          var max = base;

          if (Array.prototype.slice.call(arguments).every(MathOfT.ISARRAYLIKE) && arguments.length > 1) {
            var maxmagest = base;
            var magesti = base;

            for (var _i4 = 0; _i4 < arguments.length; _i4++) {
              var _MathOfT$OPS3;

              var cur = (_MathOfT$OPS3 = MathOfT.OPS)['magest'].apply(_MathOfT$OPS3, (0, _toConsumableArray2.default)(arguments[_i4])); // console.log(cur)


              if (cur > maxmagest) {
                maxmagest = cur;
                magesti = _i4;
              }
            }

            return arguments[magesti];
          } else if (MathOfT.ARECALCULABLES.apply(MathOfT, arguments)) {
            for (var i = 0; i < arguments.length; i++) {
              var _cur = Math.abs(arguments[i]);

              max = _cur > max ? _cur : max;
            }

            return max;
          } else {
            return NaN;
          }
        }, {
          code: code,
          base: base
        });
      }(),
      configurable: false,
      writable: false
    }), (0, _defineProperty2.default)(_Object$definePropert, 'magesti', {
      enumerable: true,
      value: function () {
        var code = 'magesti';
        var base = 0;
        return (0, _assign.default)(function () {
          var magests = Array(arguments.length);

          for (var i = 0; i < arguments.length; i++) {
            var _MathOfT$OPS4;

            var a = arguments[i];
            magests[i] = MathOfT.ISARRAYLIKE(a) ? (_MathOfT$OPS4 = MathOfT.OPS)['magest'].apply(_MathOfT$OPS4, (0, _toConsumableArray2.default)(a)) : MathOfT.OPS['magest'](a);
          }

          var index = magests.findIndex(function (v) {
            var _MathOfT$OPS5;

            // console.log(v)
            return MathOfT.EQUAL(v, (_MathOfT$OPS5 = MathOfT.OPS)['magest'].apply(_MathOfT$OPS5, magests));
          });
          return index;
        }, {
          code: code,
          base: base
        });
      }(),
      configurable: false,
      writable: false
    }), _Object$definePropert)),
    enumerable: true,
    configurable: false,
    writable: false
  },

  /**
   * @static R - dimensional labeling
   * @memberof MathOfT
   */
  'R': {
    value: ['x', 'y', 'z'],
    enumerable: true,
    configurable: false,
    writable: false
  },

  /**
   * @static FUNCKEYS - methods for inter-instance communication
   * @see TTHIS_TEMPLATE
   * @memberof MathOfT
   */
  'FUNCKEYS': {
    value: ['normalizeT', 'antinormalizeT', 'i'],
    enumerable: true,
    configurable: false,
    writable: false
  },

  /**
   * @static MEMBERKEYS - members for inter-instance communication
   * @see TTHIS_TEMPLATE
   * @memberof MathOfT
   */
  'MEMBERKEYS': {
    value: ['range', 'drange', 't0', 'segmentDivisor'],
    enumerable: true,
    configurable: false,
    writable: false
  },

  /**
   * @static DEFAULT_SEGMENT_DIVISOR By default, MathOfT instances divide into
   * this many segments
   * @type {Number}
   * @memberof MathOfT
   * @default 10
   */
  'DEFAULT_SEGMENT_DIVISOR': {
    value: 10,
    enumerable: true,
    configurable: false,
    writable: false
  },

  /**
   * @static MAX_SAFE_DIVISOR the maximum safe to use divisor
   * @borrows MathOfT.CALC_PRECISION_WARN
   * @memberof MathOfT
   */
  'MAX_SAFE_DIVISOR': {
    value: MathOfT.CALC_PRECISION_WARN(),
    enumerable: true,
    configurable: false,
    writable: false
  },

  /**
   * @static DEFAULT_RANGE By default, MathOfT instances evaluate functions over this range
   * @type {Array.<Number>}
   * @default [-1,1]
   * @memberof MathOfT
   */
  'DEFAULT_RANGE': {
    value: [-1, 1],
    enumerable: true,
    configurable: false,
    writable: false
  }
});

},{"@babel/runtime-corejs2/core-js/array/from":1,"@babel/runtime-corejs2/core-js/array/is-array":2,"@babel/runtime-corejs2/core-js/get-iterator":3,"@babel/runtime-corejs2/core-js/number/is-finite":6,"@babel/runtime-corejs2/core-js/number/is-integer":7,"@babel/runtime-corejs2/core-js/number/is-nan":8,"@babel/runtime-corejs2/core-js/object/assign":9,"@babel/runtime-corejs2/core-js/object/define-properties":11,"@babel/runtime-corejs2/core-js/object/define-property":12,"@babel/runtime-corejs2/core-js/object/get-own-property-symbols":14,"@babel/runtime-corejs2/core-js/object/keys":16,"@babel/runtime-corejs2/core-js/object/set-prototype-of":17,"@babel/runtime-corejs2/core-js/promise":18,"@babel/runtime-corejs2/core-js/symbol":20,"@babel/runtime-corejs2/core-js/symbol/iterator":21,"@babel/runtime-corejs2/core-js/symbol/to-primitive":22,"@babel/runtime-corejs2/core-js/symbol/to-string-tag":23,"@babel/runtime-corejs2/helpers/classCallCheck":27,"@babel/runtime-corejs2/helpers/createClass":29,"@babel/runtime-corejs2/helpers/defineProperty":30,"@babel/runtime-corejs2/helpers/getPrototypeOf":31,"@babel/runtime-corejs2/helpers/inherits":32,"@babel/runtime-corejs2/helpers/interopRequireDefault":33,"@babel/runtime-corejs2/helpers/possibleConstructorReturn":40,"@babel/runtime-corejs2/helpers/slicedToArray":42,"@babel/runtime-corejs2/helpers/toConsumableArray":43,"@babel/runtime-corejs2/helpers/typeof":44,"@babel/runtime-corejs2/helpers/wrapNativeSuper":45,"@babel/runtime-corejs2/regenerator":46}]},{},[190]);
