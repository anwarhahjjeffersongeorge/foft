(function () { function r (e, n, t) { function o (i, f) { if (!n[i]) { if (!e[i]) { var c = typeof require === 'function' && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = 'MODULE_NOT_FOUND', a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = typeof require === 'function' && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({ 1: [function (require, module, exports) {
  module.exports = require('core-js/library/fn/array/from')
}, { 'core-js/library/fn/array/from': 29 }],
2: [function (require, module, exports) {
  module.exports = require('core-js/library/fn/array/is-array')
}, { 'core-js/library/fn/array/is-array': 30 }],
3: [function (require, module, exports) {
  module.exports = require('core-js/library/fn/get-iterator')
}, { 'core-js/library/fn/get-iterator': 31 }],
4: [function (require, module, exports) {
  module.exports = require('core-js/library/fn/is-iterable')
}, { 'core-js/library/fn/is-iterable': 32 }],
5: [function (require, module, exports) {
  module.exports = require('core-js/library/fn/number/is-integer')
}, { 'core-js/library/fn/number/is-integer': 33 }],
6: [function (require, module, exports) {
  module.exports = require('core-js/library/fn/number/is-nan')
}, { 'core-js/library/fn/number/is-nan': 34 }],
7: [function (require, module, exports) {
  module.exports = require('core-js/library/fn/object/assign')
}, { 'core-js/library/fn/object/assign': 35 }],
8: [function (require, module, exports) {
  module.exports = require('core-js/library/fn/object/define-properties')
}, { 'core-js/library/fn/object/define-properties': 36 }],
9: [function (require, module, exports) {
  module.exports = require('core-js/library/fn/object/define-property')
}, { 'core-js/library/fn/object/define-property': 37 }],
10: [function (require, module, exports) {
  module.exports = require('core-js/library/fn/object/get-own-property-descriptor')
}, { 'core-js/library/fn/object/get-own-property-descriptor': 38 }],
11: [function (require, module, exports) {
  module.exports = require('core-js/library/fn/symbol')
}, { 'core-js/library/fn/symbol': 39 }],
12: [function (require, module, exports) {
  module.exports = require('core-js/library/fn/symbol/iterator')
}, { 'core-js/library/fn/symbol/iterator': 40 }],
13: [function (require, module, exports) {
  module.exports = require('core-js/library/fn/symbol/to-primitive')
}, { 'core-js/library/fn/symbol/to-primitive': 41 }],
14: [function (require, module, exports) {
  var _Array$isArray = require('../core-js/array/is-array')

  function _arrayWithHoles (arr) {
    if (_Array$isArray(arr)) return arr
  }

  module.exports = _arrayWithHoles
}, { '../core-js/array/is-array': 2 }],
15: [function (require, module, exports) {
  var _Array$isArray = require('../core-js/array/is-array')

  function _arrayWithoutHoles (arr) {
    if (_Array$isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i]
      }

      return arr2
    }
  }

  module.exports = _arrayWithoutHoles
}, { '../core-js/array/is-array': 2 }],
16: [function (require, module, exports) {
  function _classCallCheck (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }

  module.exports = _classCallCheck
}, {}],
17: [function (require, module, exports) {
  var _Object$defineProperty = require('../core-js/object/define-property')

  function _defineProperties (target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true

      _Object$defineProperty(target, descriptor.key, descriptor)
    }
  }

  function _createClass (Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps)
    if (staticProps) _defineProperties(Constructor, staticProps)
    return Constructor
  }

  module.exports = _createClass
}, { '../core-js/object/define-property': 9 }],
18: [function (require, module, exports) {
  var _Object$defineProperty = require('../core-js/object/define-property')

  function _defineProperty (obj, key, value) {
    if (key in obj) {
      _Object$defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      })
    } else {
      obj[key] = value
    }

    return obj
  }

  module.exports = _defineProperty
}, { '../core-js/object/define-property': 9 }],
19: [function (require, module, exports) {
  function _interopRequireDefault (obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    }
  }

  module.exports = _interopRequireDefault
}, {}],
20: [function (require, module, exports) {
  var _Object$getOwnPropertyDescriptor = require('../core-js/object/get-own-property-descriptor')

  var _Object$defineProperty = require('../core-js/object/define-property')

  function _interopRequireWildcard (obj) {
    if (obj && obj.__esModule) {
      return obj
    } else {
      var newObj = {}

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {}

            if (desc.get || desc.set) {
              _Object$defineProperty(newObj, key, desc)
            } else {
              newObj[key] = obj[key]
            }
          }
        }
      }

      newObj.default = obj
      return newObj
    }
  }

  module.exports = _interopRequireWildcard
}, { '../core-js/object/define-property': 9, '../core-js/object/get-own-property-descriptor': 10 }],
21: [function (require, module, exports) {
  var _Array$from = require('../core-js/array/from')

  var _isIterable = require('../core-js/is-iterable')

  function _iterableToArray (iter) {
    if (_isIterable(Object(iter)) || Object.prototype.toString.call(iter) === '[object Arguments]') return _Array$from(iter)
  }

  module.exports = _iterableToArray
}, { '../core-js/array/from': 1, '../core-js/is-iterable': 4 }],
22: [function (require, module, exports) {
  var _getIterator = require('../core-js/get-iterator')

  function _iterableToArrayLimit (arr, i) {
    var _arr = []
    var _n = true
    var _d = false
    var _e = undefined

    try {
      for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value)

        if (i && _arr.length === i) break
      }
    } catch (err) {
      _d = true
      _e = err
    } finally {
      try {
        if (!_n && _i['return'] != null) _i['return']()
      } finally {
        if (_d) throw _e
      }
    }

    return _arr
  }

  module.exports = _iterableToArrayLimit
}, { '../core-js/get-iterator': 3 }],
23: [function (require, module, exports) {
  function _nonIterableRest () {
    throw new TypeError('Invalid attempt to destructure non-iterable instance')
  }

  module.exports = _nonIterableRest
}, {}],
24: [function (require, module, exports) {
  function _nonIterableSpread () {
    throw new TypeError('Invalid attempt to spread non-iterable instance')
  }

  module.exports = _nonIterableSpread
}, {}],
25: [function (require, module, exports) {
  var arrayWithHoles = require('./arrayWithHoles')

  var iterableToArrayLimit = require('./iterableToArrayLimit')

  var nonIterableRest = require('./nonIterableRest')

  function _slicedToArray (arr, i) {
    return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest()
  }

  module.exports = _slicedToArray
}, { './arrayWithHoles': 14, './iterableToArrayLimit': 22, './nonIterableRest': 23 }],
26: [function (require, module, exports) {
  var arrayWithoutHoles = require('./arrayWithoutHoles')

  var iterableToArray = require('./iterableToArray')

  var nonIterableSpread = require('./nonIterableSpread')

  function _toConsumableArray (arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread()
  }

  module.exports = _toConsumableArray
}, { './arrayWithoutHoles': 15, './iterableToArray': 21, './nonIterableSpread': 24 }],
27: [function (require, module, exports) {
  var _Symbol$iterator = require('../core-js/symbol/iterator')

  var _Symbol = require('../core-js/symbol')

  function _typeof2 (obj) { if (typeof _Symbol === 'function' && typeof _Symbol$iterator === 'symbol') { _typeof2 = function _typeof2 (obj) { return typeof obj } } else { _typeof2 = function _typeof2 (obj) { return obj && typeof _Symbol === 'function' && obj.constructor === _Symbol && obj !== _Symbol.prototype ? 'symbol' : typeof obj } } return _typeof2(obj) }

  function _typeof (obj) {
    if (typeof _Symbol === 'function' && _typeof2(_Symbol$iterator) === 'symbol') {
      module.exports = _typeof = function _typeof (obj) {
        return _typeof2(obj)
      }
    } else {
      module.exports = _typeof = function _typeof (obj) {
        return obj && typeof _Symbol === 'function' && obj.constructor === _Symbol && obj !== _Symbol.prototype ? 'symbol' : _typeof2(obj)
      }
    }

    return _typeof(obj)
  }

  module.exports = _typeof
}, { '../core-js/symbol': 11, '../core-js/symbol/iterator': 12 }],
28: [function (require, module, exports) {
  module.exports = require('regenerator-runtime')
}, { 'regenerator-runtime': 123 }],
29: [function (require, module, exports) {
  require('../../modules/es6.string.iterator')
  require('../../modules/es6.array.from')
  module.exports = require('../../modules/_core').Array.from
}, { '../../modules/_core': 48, '../../modules/es6.array.from': 108, '../../modules/es6.string.iterator': 118 }],
30: [function (require, module, exports) {
  require('../../modules/es6.array.is-array')
  module.exports = require('../../modules/_core').Array.isArray
}, { '../../modules/_core': 48, '../../modules/es6.array.is-array': 109 }],
31: [function (require, module, exports) {
  require('../modules/web.dom.iterable')
  require('../modules/es6.string.iterator')
  module.exports = require('../modules/core.get-iterator')
}, { '../modules/core.get-iterator': 106, '../modules/es6.string.iterator': 118, '../modules/web.dom.iterable': 122 }],
32: [function (require, module, exports) {
  require('../modules/web.dom.iterable')
  require('../modules/es6.string.iterator')
  module.exports = require('../modules/core.is-iterable')
}, { '../modules/core.is-iterable': 107, '../modules/es6.string.iterator': 118, '../modules/web.dom.iterable': 122 }],
33: [function (require, module, exports) {
  require('../../modules/es6.number.is-integer')
  module.exports = require('../../modules/_core').Number.isInteger
}, { '../../modules/_core': 48, '../../modules/es6.number.is-integer': 111 }],
34: [function (require, module, exports) {
  require('../../modules/es6.number.is-nan')
  module.exports = require('../../modules/_core').Number.isNaN
}, { '../../modules/_core': 48, '../../modules/es6.number.is-nan': 112 }],
35: [function (require, module, exports) {
  require('../../modules/es6.object.assign')
  module.exports = require('../../modules/_core').Object.assign
}, { '../../modules/_core': 48, '../../modules/es6.object.assign': 113 }],
36: [function (require, module, exports) {
  require('../../modules/es6.object.define-properties')
  var $Object = require('../../modules/_core').Object
  module.exports = function defineProperties (T, D) {
    return $Object.defineProperties(T, D)
  }
}, { '../../modules/_core': 48, '../../modules/es6.object.define-properties': 114 }],
37: [function (require, module, exports) {
  require('../../modules/es6.object.define-property')
  var $Object = require('../../modules/_core').Object
  module.exports = function defineProperty (it, key, desc) {
    return $Object.defineProperty(it, key, desc)
  }
}, { '../../modules/_core': 48, '../../modules/es6.object.define-property': 115 }],
38: [function (require, module, exports) {
  require('../../modules/es6.object.get-own-property-descriptor')
  var $Object = require('../../modules/_core').Object
  module.exports = function getOwnPropertyDescriptor (it, key) {
    return $Object.getOwnPropertyDescriptor(it, key)
  }
}, { '../../modules/_core': 48, '../../modules/es6.object.get-own-property-descriptor': 116 }],
39: [function (require, module, exports) {
  require('../../modules/es6.symbol')
  require('../../modules/es6.object.to-string')
  require('../../modules/es7.symbol.async-iterator')
  require('../../modules/es7.symbol.observable')
  module.exports = require('../../modules/_core').Symbol
}, { '../../modules/_core': 48, '../../modules/es6.object.to-string': 117, '../../modules/es6.symbol': 119, '../../modules/es7.symbol.async-iterator': 120, '../../modules/es7.symbol.observable': 121 }],
40: [function (require, module, exports) {
  require('../../modules/es6.string.iterator')
  require('../../modules/web.dom.iterable')
  module.exports = require('../../modules/_wks-ext').f('iterator')
}, { '../../modules/_wks-ext': 103, '../../modules/es6.string.iterator': 118, '../../modules/web.dom.iterable': 122 }],
41: [function (require, module, exports) {
  module.exports = require('../../modules/_wks-ext').f('toPrimitive')
}, { '../../modules/_wks-ext': 103 }],
42: [function (require, module, exports) {
  module.exports = function (it) {
    if (typeof it !== 'function') throw TypeError(it + ' is not a function!')
    return it
  }
}, {}],
43: [function (require, module, exports) {
  module.exports = function () { /* empty */ }
}, {}],
44: [function (require, module, exports) {
  var isObject = require('./_is-object')
  module.exports = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!')
    return it
  }
}, { './_is-object': 67 }],
45: [function (require, module, exports) {
// false -> Array#indexOf
// true  -> Array#includes
  var toIObject = require('./_to-iobject')
  var toLength = require('./_to-length')
  var toAbsoluteIndex = require('./_to-absolute-index')
  module.exports = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIObject($this)
      var length = toLength(O.length)
      var index = toAbsoluteIndex(fromIndex, length)
      var value
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) {
        while (length > index) {
          value = O[index++]
          // eslint-disable-next-line no-self-compare
          if (value != value) return true
        // Array#indexOf ignores holes, Array#includes - not
        }
      } else {
        for (;length > index; index++) {
          if (IS_INCLUDES || index in O) {
            if (O[index] === el) return IS_INCLUDES || index || 0
          }
        }
      } return !IS_INCLUDES && -1
    }
  }
}, { './_to-absolute-index': 95, './_to-iobject': 97, './_to-length': 98 }],
46: [function (require, module, exports) {
// getting tag from 19.1.3.6 Object.prototype.toString()
  var cof = require('./_cof')
  var TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  var ARG = cof(function () { return arguments }()) == 'Arguments'

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key]
    } catch (e) { /* empty */ }
  }

  module.exports = function (it) {
    var O, T, B
    return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG)) === 'string' ? T
      // builtinTag case
        : ARG ? cof(O)
        // ES3 arguments fallback
          : (B = cof(O)) == 'Object' && typeof O.callee === 'function' ? 'Arguments' : B
  }
}, { './_cof': 47, './_wks': 104 }],
47: [function (require, module, exports) {
  var toString = {}.toString

  module.exports = function (it) {
    return toString.call(it).slice(8, -1)
  }
}, {}],
48: [function (require, module, exports) {
  var core = module.exports = { version: '2.5.7' }
  if (typeof __e === 'number') __e = core // eslint-disable-line no-undef
}, {}],
49: [function (require, module, exports) {
  'use strict'
  var $defineProperty = require('./_object-dp')
  var createDesc = require('./_property-desc')

  module.exports = function (object, index, value) {
    if (index in object) $defineProperty.f(object, index, createDesc(0, value))
    else object[index] = value
  }
}, { './_object-dp': 78, './_property-desc': 89 }],
50: [function (require, module, exports) {
// optional / simple context binding
  var aFunction = require('./_a-function')
  module.exports = function (fn, that, length) {
    aFunction(fn)
    if (that === undefined) return fn
    switch (length) {
      case 1: return function (a) {
        return fn.call(that, a)
      }
      case 2: return function (a, b) {
        return fn.call(that, a, b)
      }
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c)
      }
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments)
    }
  }
}, { './_a-function': 42 }],
51: [function (require, module, exports) {
// 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it)
    return it
  }
}, {}],
52: [function (require, module, exports) {
// Thank's IE8 for his funny defineProperty
  module.exports = !require('./_fails')(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7 } }).a != 7
  })
}, { './_fails': 57 }],
53: [function (require, module, exports) {
  var isObject = require('./_is-object')
  var document = require('./_global').document
  // typeof document.createElement is 'object' in old IE
  var is = isObject(document) && isObject(document.createElement)
  module.exports = function (it) {
    return is ? document.createElement(it) : {}
  }
}, { './_global': 58, './_is-object': 67 }],
54: [function (require, module, exports) {
// IE 8- don't enum bug keys
  module.exports = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',')
}, {}],
55: [function (require, module, exports) {
// all enumerable object keys, includes symbols
  var getKeys = require('./_object-keys')
  var gOPS = require('./_object-gops')
  var pIE = require('./_object-pie')
  module.exports = function (it) {
    var result = getKeys(it)
    var getSymbols = gOPS.f
    if (getSymbols) {
      var symbols = getSymbols(it)
      var isEnum = pIE.f
      var i = 0
      var key
      while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key)
    } return result
  }
}, { './_object-gops': 83, './_object-keys': 86, './_object-pie': 87 }],
56: [function (require, module, exports) {
  var global = require('./_global')
  var core = require('./_core')
  var ctx = require('./_ctx')
  var hide = require('./_hide')
  var has = require('./_has')
  var PROTOTYPE = 'prototype'

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F
    var IS_GLOBAL = type & $export.G
    var IS_STATIC = type & $export.S
    var IS_PROTO = type & $export.P
    var IS_BIND = type & $export.B
    var IS_WRAP = type & $export.W
    var exports = IS_GLOBAL ? core : core[name] || (core[name] = {})
    var expProto = exports[PROTOTYPE]
    var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    var key, own, out
    if (IS_GLOBAL) source = name
    for (key in source) {
    // contains in native
      own = !IS_FORCED && target && target[key] !== undefined
      if (own && has(exports, key)) continue
      // export native or passed
      out = own ? target[key] : source[key]
      // prevent global pollution for namespaces
      exports[key] = IS_GLOBAL && typeof target[key] !== 'function' ? source[key]
      // bind timers to global for call from export context
        : IS_BIND && own ? ctx(out, global)
        // wrap global constructors for prevent change them in library
          : IS_WRAP && target[key] == out ? (function (C) {
            var F = function (a, b, c) {
              if (this instanceof C) {
                switch (arguments.length) {
                  case 0: return new C()
                  case 1: return new C(a)
                  case 2: return new C(a, b)
                } return new C(a, b, c)
              } return C.apply(this, arguments)
            }
            F[PROTOTYPE] = C[PROTOTYPE]
            return F
            // make static versions for prototype methods
          })(out) : IS_PROTO && typeof out === 'function' ? ctx(Function.call, out) : out
      // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
      if (IS_PROTO) {
        (exports.virtual || (exports.virtual = {}))[key] = out
        // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
        if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out)
      }
    }
  }
  // type bitmap
  $export.F = 1 // forced
  $export.G = 2 // global
  $export.S = 4 // static
  $export.P = 8 // proto
  $export.B = 16 // bind
  $export.W = 32 // wrap
  $export.U = 64 // safe
  $export.R = 128 // real proto method for `library`
  module.exports = $export
}, { './_core': 48, './_ctx': 50, './_global': 58, './_has': 59, './_hide': 60 }],
57: [function (require, module, exports) {
  module.exports = function (exec) {
    try {
      return !!exec()
    } catch (e) {
      return true
    }
  }
}, {}],
58: [function (require, module, exports) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window !== 'undefined' && window.Math == Math
    ? window : typeof self !== 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
      : Function('return this')()
  if (typeof __g === 'number') __g = global // eslint-disable-line no-undef
}, {}],
59: [function (require, module, exports) {
  var hasOwnProperty = {}.hasOwnProperty
  module.exports = function (it, key) {
    return hasOwnProperty.call(it, key)
  }
}, {}],
60: [function (require, module, exports) {
  var dP = require('./_object-dp')
  var createDesc = require('./_property-desc')
  module.exports = require('./_descriptors') ? function (object, key, value) {
    return dP.f(object, key, createDesc(1, value))
  } : function (object, key, value) {
    object[key] = value
    return object
  }
}, { './_descriptors': 52, './_object-dp': 78, './_property-desc': 89 }],
61: [function (require, module, exports) {
  var document = require('./_global').document
  module.exports = document && document.documentElement
}, { './_global': 58 }],
62: [function (require, module, exports) {
  module.exports = !require('./_descriptors') && !require('./_fails')(function () {
    return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7 } }).a != 7
  })
}, { './_descriptors': 52, './_dom-create': 53, './_fails': 57 }],
63: [function (require, module, exports) {
// fallback for non-array-like ES3 and non-enumerable old V8 strings
  var cof = require('./_cof')
  // eslint-disable-next-line no-prototype-builtins
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it)
  }
}, { './_cof': 47 }],
64: [function (require, module, exports) {
// check on default Array iterator
  var Iterators = require('./_iterators')
  var ITERATOR = require('./_wks')('iterator')
  var ArrayProto = Array.prototype

  module.exports = function (it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it)
  }
}, { './_iterators': 73, './_wks': 104 }],
65: [function (require, module, exports) {
// 7.2.2 IsArray(argument)
  var cof = require('./_cof')
  module.exports = Array.isArray || function isArray (arg) {
    return cof(arg) == 'Array'
  }
}, { './_cof': 47 }],
66: [function (require, module, exports) {
// 20.1.2.3 Number.isInteger(number)
  var isObject = require('./_is-object')
  var floor = Math.floor
  module.exports = function isInteger (it) {
    return !isObject(it) && isFinite(it) && floor(it) === it
  }
}, { './_is-object': 67 }],
67: [function (require, module, exports) {
  module.exports = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function'
  }
}, {}],
68: [function (require, module, exports) {
// call something on iterator step with safe closing on error
  var anObject = require('./_an-object')
  module.exports = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value)
      // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return']
      if (ret !== undefined) anObject(ret.call(iterator))
      throw e
    }
  }
}, { './_an-object': 44 }],
69: [function (require, module, exports) {
  'use strict'
  var create = require('./_object-create')
  var descriptor = require('./_property-desc')
  var setToStringTag = require('./_set-to-string-tag')
  var IteratorPrototype = {}

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this })

  module.exports = function (Constructor, NAME, next) {
    Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) })
    setToStringTag(Constructor, NAME + ' Iterator')
  }
}, { './_hide': 60, './_object-create': 77, './_property-desc': 89, './_set-to-string-tag': 91, './_wks': 104 }],
70: [function (require, module, exports) {
  'use strict'
  var LIBRARY = require('./_library')
  var $export = require('./_export')
  var redefine = require('./_redefine')
  var hide = require('./_hide')
  var Iterators = require('./_iterators')
  var $iterCreate = require('./_iter-create')
  var setToStringTag = require('./_set-to-string-tag')
  var getPrototypeOf = require('./_object-gpo')
  var ITERATOR = require('./_wks')('iterator')
  var BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  var FF_ITERATOR = '@@iterator'
  var KEYS = 'keys'
  var VALUES = 'values'

  var returnThis = function () { return this }

  module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next)
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind]
      switch (kind) {
        case KEYS: return function keys () { return new Constructor(this, kind) }
        case VALUES: return function values () { return new Constructor(this, kind) }
      } return function entries () { return new Constructor(this, kind) }
    }
    var TAG = NAME + ' Iterator'
    var DEF_VALUES = DEFAULT == VALUES
    var VALUES_BUG = false
    var proto = Base.prototype
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    var $default = $native || getMethod(DEFAULT)
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    var methods, key, IteratorPrototype
    // Fix native
    if ($anyNative) {
      IteratorPrototype = getPrototypeOf($anyNative.call(new Base()))
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
        setToStringTag(IteratorPrototype, TAG, true)
        // fix for some old engines
        if (!LIBRARY && typeof IteratorPrototype[ITERATOR] !== 'function') hide(IteratorPrototype, ITERATOR, returnThis)
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true
      $default = function values () { return $native.call(this) }
    }
    // Define iterator
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default)
    }
    // Plug for library
    Iterators[NAME] = $default
    Iterators[TAG] = returnThis
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      }
      if (FORCED) {
        for (key in methods) {
          if (!(key in proto)) redefine(proto, key, methods[key])
        }
      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods)
    }
    return methods
  }
}, { './_export': 56, './_hide': 60, './_iter-create': 69, './_iterators': 73, './_library': 74, './_object-gpo': 84, './_redefine': 90, './_set-to-string-tag': 91, './_wks': 104 }],
71: [function (require, module, exports) {
  var ITERATOR = require('./_wks')('iterator')
  var SAFE_CLOSING = false

  try {
    var riter = [7][ITERATOR]()
    riter['return'] = function () { SAFE_CLOSING = true }
    // eslint-disable-next-line no-throw-literal
    Array.from(riter, function () { throw 2 })
  } catch (e) { /* empty */ }

  module.exports = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false
    var safe = false
    try {
      var arr = [7]
      var iter = arr[ITERATOR]()
      iter.next = function () { return { done: safe = true } }
      arr[ITERATOR] = function () { return iter }
      exec(arr)
    } catch (e) { /* empty */ }
    return safe
  }
}, { './_wks': 104 }],
72: [function (require, module, exports) {
  module.exports = function (done, value) {
    return { value: value, done: !!done }
  }
}, {}],
73: [function (require, module, exports) {
  module.exports = {}
}, {}],
74: [function (require, module, exports) {
  module.exports = true
}, {}],
75: [function (require, module, exports) {
  var META = require('./_uid')('meta')
  var isObject = require('./_is-object')
  var has = require('./_has')
  var setDesc = require('./_object-dp').f
  var id = 0
  var isExtensible = Object.isExtensible || function () {
    return true
  }
  var FREEZE = !require('./_fails')(function () {
    return isExtensible(Object.preventExtensions({}))
  })
  var setMeta = function (it) {
    setDesc(it, META, { value: {
      i: 'O' + ++id, // object ID
      w: {} // weak collections IDs
    } })
  }
  var fastKey = function (it, create) {
  // return primitive with prefix
    if (!isObject(it)) return typeof it === 'symbol' ? it : (typeof it === 'string' ? 'S' : 'P') + it
    if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F'
      // not necessary to add metadata
      if (!create) return 'E'
      // add missing metadata
      setMeta(it)
      // return object ID
    } return it[META].i
  }
  var getWeak = function (it, create) {
    if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true
      // not necessary to add metadata
      if (!create) return false
      // add missing metadata
      setMeta(it)
      // return hash weak collections IDs
    } return it[META].w
  }
  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it)
    return it
  }
  var meta = module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
  }
}, { './_fails': 57, './_has': 59, './_is-object': 67, './_object-dp': 78, './_uid': 101 }],
76: [function (require, module, exports) {
  'use strict'
  // 19.1.2.1 Object.assign(target, source, ...)
  var getKeys = require('./_object-keys')
  var gOPS = require('./_object-gops')
  var pIE = require('./_object-pie')
  var toObject = require('./_to-object')
  var IObject = require('./_iobject')
  var $assign = Object.assign

  // should work with symbols and should have deterministic property order (V8 bug)
  module.exports = !$assign || require('./_fails')(function () {
    var A = {}
    var B = {}
    // eslint-disable-next-line no-undef
    var S = Symbol()
    var K = 'abcdefghijklmnopqrst'
    A[S] = 7
    K.split('').forEach(function (k) { B[k] = k })
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K
  }) ? function assign (target, source) { // eslint-disable-line no-unused-vars
      var T = toObject(target)
      var aLen = arguments.length
      var index = 1
      var getSymbols = gOPS.f
      var isEnum = pIE.f
      while (aLen > index) {
        var S = IObject(arguments[index++])
        var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
        var length = keys.length
        var j = 0
        var key
        while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key]
      } return T
    } : $assign
}, { './_fails': 57, './_iobject': 63, './_object-gops': 83, './_object-keys': 86, './_object-pie': 87, './_to-object': 99 }],
77: [function (require, module, exports) {
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  var anObject = require('./_an-object')
  var dPs = require('./_object-dps')
  var enumBugKeys = require('./_enum-bug-keys')
  var IE_PROTO = require('./_shared-key')('IE_PROTO')
  var Empty = function () { /* empty */ }
  var PROTOTYPE = 'prototype'

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
    var iframe = require('./_dom-create')('iframe')
    var i = enumBugKeys.length
    var lt = '<'
    var gt = '>'
    var iframeDocument
    iframe.style.display = 'none'
    require('./_html').appendChild(iframe)
    iframe.src = 'javascript:' // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document
    iframeDocument.open()
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt)
    iframeDocument.close()
    createDict = iframeDocument.F
    while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]]
    return createDict()
  }

  module.exports = Object.create || function create (O, Properties) {
    var result
    if (O !== null) {
      Empty[PROTOTYPE] = anObject(O)
      result = new Empty()
      Empty[PROTOTYPE] = null
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O
    } else result = createDict()
    return Properties === undefined ? result : dPs(result, Properties)
  }
}, { './_an-object': 44, './_dom-create': 53, './_enum-bug-keys': 54, './_html': 61, './_object-dps': 79, './_shared-key': 92 }],
78: [function (require, module, exports) {
  var anObject = require('./_an-object')
  var IE8_DOM_DEFINE = require('./_ie8-dom-define')
  var toPrimitive = require('./_to-primitive')
  var dP = Object.defineProperty

  exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty (O, P, Attributes) {
    anObject(O)
    P = toPrimitive(P, true)
    anObject(Attributes)
    if (IE8_DOM_DEFINE) {
      try {
        return dP(O, P, Attributes)
      } catch (e) { /* empty */ }
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!')
    if ('value' in Attributes) O[P] = Attributes.value
    return O
  }
}, { './_an-object': 44, './_descriptors': 52, './_ie8-dom-define': 62, './_to-primitive': 100 }],
79: [function (require, module, exports) {
  var dP = require('./_object-dp')
  var anObject = require('./_an-object')
  var getKeys = require('./_object-keys')

  module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties (O, Properties) {
    anObject(O)
    var keys = getKeys(Properties)
    var length = keys.length
    var i = 0
    var P
    while (length > i) dP.f(O, P = keys[i++], Properties[P])
    return O
  }
}, { './_an-object': 44, './_descriptors': 52, './_object-dp': 78, './_object-keys': 86 }],
80: [function (require, module, exports) {
  var pIE = require('./_object-pie')
  var createDesc = require('./_property-desc')
  var toIObject = require('./_to-iobject')
  var toPrimitive = require('./_to-primitive')
  var has = require('./_has')
  var IE8_DOM_DEFINE = require('./_ie8-dom-define')
  var gOPD = Object.getOwnPropertyDescriptor

  exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor (O, P) {
    O = toIObject(O)
    P = toPrimitive(P, true)
    if (IE8_DOM_DEFINE) {
      try {
        return gOPD(O, P)
      } catch (e) { /* empty */ }
    }
    if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P])
  }
}, { './_descriptors': 52, './_has': 59, './_ie8-dom-define': 62, './_object-pie': 87, './_property-desc': 89, './_to-iobject': 97, './_to-primitive': 100 }],
81: [function (require, module, exports) {
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  var toIObject = require('./_to-iobject')
  var gOPN = require('./_object-gopn').f
  var toString = {}.toString

  var windowNames = typeof window === 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : []

  var getWindowNames = function (it) {
    try {
      return gOPN(it)
    } catch (e) {
      return windowNames.slice()
    }
  }

  module.exports.f = function getOwnPropertyNames (it) {
    return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it))
  }
}, { './_object-gopn': 82, './_to-iobject': 97 }],
82: [function (require, module, exports) {
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
  var $keys = require('./_object-keys-internal')
  var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype')

  exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames (O) {
    return $keys(O, hiddenKeys)
  }
}, { './_enum-bug-keys': 54, './_object-keys-internal': 85 }],
83: [function (require, module, exports) {
  exports.f = Object.getOwnPropertySymbols
}, {}],
84: [function (require, module, exports) {
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
  var has = require('./_has')
  var toObject = require('./_to-object')
  var IE_PROTO = require('./_shared-key')('IE_PROTO')
  var ObjectProto = Object.prototype

  module.exports = Object.getPrototypeOf || function (O) {
    O = toObject(O)
    if (has(O, IE_PROTO)) return O[IE_PROTO]
    if (typeof O.constructor === 'function' && O instanceof O.constructor) {
      return O.constructor.prototype
    } return O instanceof Object ? ObjectProto : null
  }
}, { './_has': 59, './_shared-key': 92, './_to-object': 99 }],
85: [function (require, module, exports) {
  var has = require('./_has')
  var toIObject = require('./_to-iobject')
  var arrayIndexOf = require('./_array-includes')(false)
  var IE_PROTO = require('./_shared-key')('IE_PROTO')

  module.exports = function (object, names) {
    var O = toIObject(object)
    var i = 0
    var result = []
    var key
    for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key)
    // Don't enum bug & hidden keys
    while (names.length > i) {
      if (has(O, key = names[i++])) {
        ~arrayIndexOf(result, key) || result.push(key)
      }
    }
    return result
  }
}, { './_array-includes': 45, './_has': 59, './_shared-key': 92, './_to-iobject': 97 }],
86: [function (require, module, exports) {
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
  var $keys = require('./_object-keys-internal')
  var enumBugKeys = require('./_enum-bug-keys')

  module.exports = Object.keys || function keys (O) {
    return $keys(O, enumBugKeys)
  }
}, { './_enum-bug-keys': 54, './_object-keys-internal': 85 }],
87: [function (require, module, exports) {
  exports.f = {}.propertyIsEnumerable
}, {}],
88: [function (require, module, exports) {
// most Object methods by ES6 should accept primitives
  var $export = require('./_export')
  var core = require('./_core')
  var fails = require('./_fails')
  module.exports = function (KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY]
    var exp = {}
    exp[KEY] = exec(fn)
    $export($export.S + $export.F * fails(function () { fn(1) }), 'Object', exp)
  }
}, { './_core': 48, './_export': 56, './_fails': 57 }],
89: [function (require, module, exports) {
  module.exports = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    }
  }
}, {}],
90: [function (require, module, exports) {
  module.exports = require('./_hide')
}, { './_hide': 60 }],
91: [function (require, module, exports) {
  var def = require('./_object-dp').f
  var has = require('./_has')
  var TAG = require('./_wks')('toStringTag')

  module.exports = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag })
  }
}, { './_has': 59, './_object-dp': 78, './_wks': 104 }],
92: [function (require, module, exports) {
  var shared = require('./_shared')('keys')
  var uid = require('./_uid')
  module.exports = function (key) {
    return shared[key] || (shared[key] = uid(key))
  }
}, { './_shared': 93, './_uid': 101 }],
93: [function (require, module, exports) {
  var core = require('./_core')
  var global = require('./_global')
  var SHARED = '__core-js_shared__'
  var store = global[SHARED] || (global[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {})
  })('versions', []).push({
    version: core.version,
    mode: require('./_library') ? 'pure' : 'global',
    copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
  })
}, { './_core': 48, './_global': 58, './_library': 74 }],
94: [function (require, module, exports) {
  var toInteger = require('./_to-integer')
  var defined = require('./_defined')
  // true  -> String#at
  // false -> String#codePointAt
  module.exports = function (TO_STRING) {
    return function (that, pos) {
      var s = String(defined(that))
      var i = toInteger(pos)
      var l = s.length
      var a, b
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined
      a = s.charCodeAt(i)
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000
    }
  }
}, { './_defined': 51, './_to-integer': 96 }],
95: [function (require, module, exports) {
  var toInteger = require('./_to-integer')
  var max = Math.max
  var min = Math.min
  module.exports = function (index, length) {
    index = toInteger(index)
    return index < 0 ? max(index + length, 0) : min(index, length)
  }
}, { './_to-integer': 96 }],
96: [function (require, module, exports) {
// 7.1.4 ToInteger
  var ceil = Math.ceil
  var floor = Math.floor
  module.exports = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it)
  }
}, {}],
97: [function (require, module, exports) {
// to indexed object, toObject with fallback for non-array-like ES3 strings
  var IObject = require('./_iobject')
  var defined = require('./_defined')
  module.exports = function (it) {
    return IObject(defined(it))
  }
}, { './_defined': 51, './_iobject': 63 }],
98: [function (require, module, exports) {
// 7.1.15 ToLength
  var toInteger = require('./_to-integer')
  var min = Math.min
  module.exports = function (it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0 // pow(2, 53) - 1 == 9007199254740991
  }
}, { './_to-integer': 96 }],
99: [function (require, module, exports) {
// 7.1.13 ToObject(argument)
  var defined = require('./_defined')
  module.exports = function (it) {
    return Object(defined(it))
  }
}, { './_defined': 51 }],
100: [function (require, module, exports) {
// 7.1.1 ToPrimitive(input [, PreferredType])
  var isObject = require('./_is-object')
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  module.exports = function (it, S) {
    if (!isObject(it)) return it
    var fn, val
    if (S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val
    if (typeof (fn = it.valueOf) === 'function' && !isObject(val = fn.call(it))) return val
    if (!S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val
    throw TypeError("Can't convert object to primitive value")
  }
}, { './_is-object': 67 }],
101: [function (require, module, exports) {
  var id = 0
  var px = Math.random()
  module.exports = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36))
  }
}, {}],
102: [function (require, module, exports) {
  var global = require('./_global')
  var core = require('./_core')
  var LIBRARY = require('./_library')
  var wksExt = require('./_wks-ext')
  var defineProperty = require('./_object-dp').f
  module.exports = function (name) {
    var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {})
    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) })
  }
}, { './_core': 48, './_global': 58, './_library': 74, './_object-dp': 78, './_wks-ext': 103 }],
103: [function (require, module, exports) {
  exports.f = require('./_wks')
}, { './_wks': 104 }],
104: [function (require, module, exports) {
  var store = require('./_shared')('wks')
  var uid = require('./_uid')
  var Symbol = require('./_global').Symbol
  var USE_SYMBOL = typeof Symbol === 'function'

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name))
  }

  $exports.store = store
}, { './_global': 58, './_shared': 93, './_uid': 101 }],
105: [function (require, module, exports) {
  var classof = require('./_classof')
  var ITERATOR = require('./_wks')('iterator')
  var Iterators = require('./_iterators')
  module.exports = require('./_core').getIteratorMethod = function (it) {
    if (it != undefined) {
      return it[ITERATOR] ||
    it['@@iterator'] ||
    Iterators[classof(it)]
    }
  }
}, { './_classof': 46, './_core': 48, './_iterators': 73, './_wks': 104 }],
106: [function (require, module, exports) {
  var anObject = require('./_an-object')
  var get = require('./core.get-iterator-method')
  module.exports = require('./_core').getIterator = function (it) {
    var iterFn = get(it)
    if (typeof iterFn !== 'function') throw TypeError(it + ' is not iterable!')
    return anObject(iterFn.call(it))
  }
}, { './_an-object': 44, './_core': 48, './core.get-iterator-method': 105 }],
107: [function (require, module, exports) {
  var classof = require('./_classof')
  var ITERATOR = require('./_wks')('iterator')
  var Iterators = require('./_iterators')
  module.exports = require('./_core').isIterable = function (it) {
    var O = Object(it)
    return O[ITERATOR] !== undefined ||
    '@@iterator' in O ||
    // eslint-disable-next-line no-prototype-builtins
    Iterators.hasOwnProperty(classof(O))
  }
}, { './_classof': 46, './_core': 48, './_iterators': 73, './_wks': 104 }],
108: [function (require, module, exports) {
  'use strict'
  var ctx = require('./_ctx')
  var $export = require('./_export')
  var toObject = require('./_to-object')
  var call = require('./_iter-call')
  var isArrayIter = require('./_is-array-iter')
  var toLength = require('./_to-length')
  var createProperty = require('./_create-property')
  var getIterFn = require('./core.get-iterator-method')

  $export($export.S + $export.F * !require('./_iter-detect')(function (iter) { Array.from(iter) }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from (arrayLike /* , mapfn = undefined, thisArg = undefined */) {
      var O = toObject(arrayLike)
      var C = typeof this === 'function' ? this : Array
      var aLen = arguments.length
      var mapfn = aLen > 1 ? arguments[1] : undefined
      var mapping = mapfn !== undefined
      var index = 0
      var iterFn = getIterFn(O)
      var length, result, step, iterator
      if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2)
      // if object isn't iterable or it's array with default iterator - use simple case
      if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value)
        }
      } else {
        length = toLength(O.length)
        for (result = new C(length); length > index; index++) {
          createProperty(result, index, mapping ? mapfn(O[index], index) : O[index])
        }
      }
      result.length = index
      return result
    }
  })
}, { './_create-property': 49, './_ctx': 50, './_export': 56, './_is-array-iter': 64, './_iter-call': 68, './_iter-detect': 71, './_to-length': 98, './_to-object': 99, './core.get-iterator-method': 105 }],
109: [function (require, module, exports) {
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
  var $export = require('./_export')

  $export($export.S, 'Array', { isArray: require('./_is-array') })
}, { './_export': 56, './_is-array': 65 }],
110: [function (require, module, exports) {
  'use strict'
  var addToUnscopables = require('./_add-to-unscopables')
  var step = require('./_iter-step')
  var Iterators = require('./_iterators')
  var toIObject = require('./_to-iobject')

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
    this._t = toIObject(iterated) // target
    this._i = 0 // next index
    this._k = kind // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t
    var kind = this._k
    var index = this._i++
    if (!O || index >= O.length) {
      this._t = undefined
      return step(1)
    }
    if (kind == 'keys') return step(0, index)
    if (kind == 'values') return step(0, O[index])
    return step(0, [index, O[index]])
  }, 'values')

  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  Iterators.Arguments = Iterators.Array

  addToUnscopables('keys')
  addToUnscopables('values')
  addToUnscopables('entries')
}, { './_add-to-unscopables': 43, './_iter-define': 70, './_iter-step': 72, './_iterators': 73, './_to-iobject': 97 }],
111: [function (require, module, exports) {
// 20.1.2.3 Number.isInteger(number)
  var $export = require('./_export')

  $export($export.S, 'Number', { isInteger: require('./_is-integer') })
}, { './_export': 56, './_is-integer': 66 }],
112: [function (require, module, exports) {
// 20.1.2.4 Number.isNaN(number)
  var $export = require('./_export')

  $export($export.S, 'Number', {
    isNaN: function isNaN (number) {
    // eslint-disable-next-line no-self-compare
      return number != number
    }
  })
}, { './_export': 56 }],
113: [function (require, module, exports) {
// 19.1.3.1 Object.assign(target, source)
  var $export = require('./_export')

  $export($export.S + $export.F, 'Object', { assign: require('./_object-assign') })
}, { './_export': 56, './_object-assign': 76 }],
114: [function (require, module, exports) {
  var $export = require('./_export')
  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
  $export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperties: require('./_object-dps') })
}, { './_descriptors': 52, './_export': 56, './_object-dps': 79 }],
115: [function (require, module, exports) {
  var $export = require('./_export')
  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
  $export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f })
}, { './_descriptors': 52, './_export': 56, './_object-dp': 78 }],
116: [function (require, module, exports) {
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  var toIObject = require('./_to-iobject')
  var $getOwnPropertyDescriptor = require('./_object-gopd').f

  require('./_object-sap')('getOwnPropertyDescriptor', function () {
    return function getOwnPropertyDescriptor (it, key) {
      return $getOwnPropertyDescriptor(toIObject(it), key)
    }
  })
}, { './_object-gopd': 80, './_object-sap': 88, './_to-iobject': 97 }],
117: [function (require, module, exports) {

}, {}],
118: [function (require, module, exports) {
  'use strict'
  var $at = require('./_string-at')(true)

  // 21.1.3.27 String.prototype[@@iterator]()
  require('./_iter-define')(String, 'String', function (iterated) {
    this._t = String(iterated) // target
    this._i = 0 // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t
    var index = this._i
    var point
    if (index >= O.length) return { value: undefined, done: true }
    point = $at(O, index)
    this._i += point.length
    return { value: point, done: false }
  })
}, { './_iter-define': 70, './_string-at': 94 }],
119: [function (require, module, exports) {
  'use strict'
  // ECMAScript 6 symbols shim
  var global = require('./_global')
  var has = require('./_has')
  var DESCRIPTORS = require('./_descriptors')
  var $export = require('./_export')
  var redefine = require('./_redefine')
  var META = require('./_meta').KEY
  var $fails = require('./_fails')
  var shared = require('./_shared')
  var setToStringTag = require('./_set-to-string-tag')
  var uid = require('./_uid')
  var wks = require('./_wks')
  var wksExt = require('./_wks-ext')
  var wksDefine = require('./_wks-define')
  var enumKeys = require('./_enum-keys')
  var isArray = require('./_is-array')
  var anObject = require('./_an-object')
  var isObject = require('./_is-object')
  var toIObject = require('./_to-iobject')
  var toPrimitive = require('./_to-primitive')
  var createDesc = require('./_property-desc')
  var _create = require('./_object-create')
  var gOPNExt = require('./_object-gopn-ext')
  var $GOPD = require('./_object-gopd')
  var $DP = require('./_object-dp')
  var $keys = require('./_object-keys')
  var gOPD = $GOPD.f
  var dP = $DP.f
  var gOPN = gOPNExt.f
  var $Symbol = global.Symbol
  var $JSON = global.JSON
  var _stringify = $JSON && $JSON.stringify
  var PROTOTYPE = 'prototype'
  var HIDDEN = wks('_hidden')
  var TO_PRIMITIVE = wks('toPrimitive')
  var isEnum = {}.propertyIsEnumerable
  var SymbolRegistry = shared('symbol-registry')
  var AllSymbols = shared('symbols')
  var OPSymbols = shared('op-symbols')
  var ObjectProto = Object[PROTOTYPE]
  var USE_NATIVE = typeof $Symbol === 'function'
  var QObject = global.QObject
  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDesc = DESCRIPTORS && $fails(function () {
    return _create(dP({}, 'a', {
      get: function () { return dP(this, 'a', { value: 7 }).a }
    })).a != 7
  }) ? function (it, key, D) {
      var protoDesc = gOPD(ObjectProto, key)
      if (protoDesc) delete ObjectProto[key]
      dP(it, key, D)
      if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc)
    } : dP

  var wrap = function (tag) {
    var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE])
    sym._k = tag
    return sym
  }

  var isSymbol = USE_NATIVE && typeof $Symbol.iterator === 'symbol' ? function (it) {
    return typeof it === 'symbol'
  } : function (it) {
    return it instanceof $Symbol
  }

  var $defineProperty = function defineProperty (it, key, D) {
    if (it === ObjectProto) $defineProperty(OPSymbols, key, D)
    anObject(it)
    key = toPrimitive(key, true)
    anObject(D)
    if (has(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}))
        it[HIDDEN][key] = true
      } else {
        if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false
        D = _create(D, { enumerable: createDesc(0, false) })
      } return setSymbolDesc(it, key, D)
    } return dP(it, key, D)
  }
  var $defineProperties = function defineProperties (it, P) {
    anObject(it)
    var keys = enumKeys(P = toIObject(P))
    var i = 0
    var l = keys.length
    var key
    while (l > i) $defineProperty(it, key = keys[i++], P[key])
    return it
  }
  var $create = function create (it, P) {
    return P === undefined ? _create(it) : $defineProperties(_create(it), P)
  }
  var $propertyIsEnumerable = function propertyIsEnumerable (key) {
    var E = isEnum.call(this, key = toPrimitive(key, true))
    if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false
    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true
  }
  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor (it, key) {
    it = toIObject(it)
    key = toPrimitive(key, true)
    if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return
    var D = gOPD(it, key)
    if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true
    return D
  }
  var $getOwnPropertyNames = function getOwnPropertyNames (it) {
    var names = gOPN(toIObject(it))
    var result = []
    var i = 0
    var key
    while (names.length > i) {
      if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key)
    } return result
  }
  var $getOwnPropertySymbols = function getOwnPropertySymbols (it) {
    var IS_OP = it === ObjectProto
    var names = gOPN(IS_OP ? OPSymbols : toIObject(it))
    var result = []
    var i = 0
    var key
    while (names.length > i) {
      if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key])
    } return result
  }

  // 19.4.1.1 Symbol([description])
  if (!USE_NATIVE) {
    $Symbol = function Symbol () {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!')
      var tag = uid(arguments.length > 0 ? arguments[0] : undefined)
      var $set = function (value) {
        if (this === ObjectProto) $set.call(OPSymbols, value)
        if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false
        setSymbolDesc(this, tag, createDesc(1, value))
      }
      if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set })
      return wrap(tag)
    }
    redefine($Symbol[PROTOTYPE], 'toString', function toString () {
      return this._k
    })

    $GOPD.f = $getOwnPropertyDescriptor
    $DP.f = $defineProperty
    require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames
    require('./_object-pie').f = $propertyIsEnumerable
    require('./_object-gops').f = $getOwnPropertySymbols

    if (DESCRIPTORS && !require('./_library')) {
      redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true)
    }

    wksExt.f = function (name) {
      return wrap(wks(name))
    }
  }

  $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol })

  for (var es6Symbols = (
    // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
      'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
    ).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++])

  for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++])

  $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
    'for': function (key) {
      return has(SymbolRegistry, key += '')
        ? SymbolRegistry[key]
        : SymbolRegistry[key] = $Symbol(key)
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor (sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!')
      for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key
    },
    useSetter: function () { setter = true },
    useSimple: function () { setter = false }
  })

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
  })

  // 24.3.2 JSON.stringify(value [, replacer [, space]])
  $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
    var S = $Symbol()
    // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols
    return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}'
  })), 'JSON', {
    stringify: function stringify (it) {
      var args = [it]
      var i = 1
      var replacer, $replacer
      while (arguments.length > i) args.push(arguments[i++])
      $replacer = replacer = args[1]
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return // IE8 returns string on undefined
      if (!isArray(replacer)) {
        replacer = function (key, value) {
          if (typeof $replacer === 'function') value = $replacer.call(this, key, value)
          if (!isSymbol(value)) return value
        }
      }
      args[1] = replacer
      return _stringify.apply($JSON, args)
    }
  })

  // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
  $Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf)
  // 19.4.3.5 Symbol.prototype[@@toStringTag]
  setToStringTag($Symbol, 'Symbol')
  // 20.2.1.9 Math[@@toStringTag]
  setToStringTag(Math, 'Math', true)
  // 24.3.3 JSON[@@toStringTag]
  setToStringTag(global.JSON, 'JSON', true)
}, { './_an-object': 44, './_descriptors': 52, './_enum-keys': 55, './_export': 56, './_fails': 57, './_global': 58, './_has': 59, './_hide': 60, './_is-array': 65, './_is-object': 67, './_library': 74, './_meta': 75, './_object-create': 77, './_object-dp': 78, './_object-gopd': 80, './_object-gopn': 82, './_object-gopn-ext': 81, './_object-gops': 83, './_object-keys': 86, './_object-pie': 87, './_property-desc': 89, './_redefine': 90, './_set-to-string-tag': 91, './_shared': 93, './_to-iobject': 97, './_to-primitive': 100, './_uid': 101, './_wks': 104, './_wks-define': 102, './_wks-ext': 103 }],
120: [function (require, module, exports) {
  require('./_wks-define')('asyncIterator')
}, { './_wks-define': 102 }],
121: [function (require, module, exports) {
  require('./_wks-define')('observable')
}, { './_wks-define': 102 }],
122: [function (require, module, exports) {
  require('./es6.array.iterator')
  var global = require('./_global')
  var hide = require('./_hide')
  var Iterators = require('./_iterators')
  var TO_STRING_TAG = require('./_wks')('toStringTag')

  var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',')

  for (var i = 0; i < DOMIterables.length; i++) {
    var NAME = DOMIterables[i]
    var Collection = global[NAME]
    var proto = Collection && Collection.prototype
    if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME)
    Iterators[NAME] = Iterators.Array
  }
}, { './_global': 58, './_hide': 60, './_iterators': 73, './_wks': 104, './es6.array.iterator': 110 }],
123: [function (require, module, exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

  // This method of obtaining a reference to the global object needs to be
  // kept identical to the way it is obtained in runtime.js
  var g = (function () {
    return this || (typeof self === 'object' && self)
  })() || Function('return this')()

  // Use `getOwnPropertyNames` because not all browsers support calling
  // `hasOwnProperty` on the global `self` object in a worker. See #183.
  var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf('regeneratorRuntime') >= 0

  // Save the old regeneratorRuntime in case it needs to be restored later.
  var oldRuntime = hadRuntime && g.regeneratorRuntime

  // Force reevalutation of runtime.js.
  g.regeneratorRuntime = undefined

  module.exports = require('./runtime')

  if (hadRuntime) {
  // Restore the original runtime.
    g.regeneratorRuntime = oldRuntime
  } else {
  // Remove the global property added by runtime.js.
    try {
      delete g.regeneratorRuntime
    } catch (e) {
      g.regeneratorRuntime = undefined
    }
  }
}, { './runtime': 124 }],
124: [function (require, module, exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

  !(function (global) {
    'use strict'

    var Op = Object.prototype
    var hasOwn = Op.hasOwnProperty
    var undefined // More compressible than void 0.
    var $Symbol = typeof Symbol === 'function' ? Symbol : {}
    var iteratorSymbol = $Symbol.iterator || '@@iterator'
    var asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator'
    var toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag'

    var inModule = typeof module === 'object'
    var runtime = global.regeneratorRuntime
    if (runtime) {
      if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
        module.exports = runtime
      }
      // Don't bother evaluating the rest of this file if the runtime was
      // already defined globally.
      return
    }

    // Define the runtime globally (as expected by generated code) as either
    // module.exports (if we're in a module) or a new, empty object.
    runtime = global.regeneratorRuntime = inModule ? module.exports : {}

    function wrap (innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator
      var generator = Object.create(protoGenerator.prototype)
      var context = new Context(tryLocsList || [])

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context)

      return generator
    }
    runtime.wrap = wrap

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
    function tryCatch (fn, obj, arg) {
      try {
        return { type: 'normal', arg: fn.call(obj, arg) }
      } catch (err) {
        return { type: 'throw', arg: err }
      }
    }

    var GenStateSuspendedStart = 'suspendedStart'
    var GenStateSuspendedYield = 'suspendedYield'
    var GenStateExecuting = 'executing'
    var GenStateCompleted = 'completed'

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {}

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator () {}
    function GeneratorFunction () {}
    function GeneratorFunctionPrototype () {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {}
    IteratorPrototype[iteratorSymbol] = function () {
      return this
    }

    var getProto = Object.getPrototypeOf
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])))
    if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype
    }

    var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype)
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype
    GeneratorFunctionPrototype.constructor = GeneratorFunction
    GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = 'GeneratorFunction'

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods (prototype) {
      ['next', 'throw', 'return'].forEach(function (method) {
        prototype[method] = function (arg) {
          return this._invoke(method, arg)
        }
      })
    }

    runtime.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === 'function' && genFun.constructor
      return ctor
        ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === 'GeneratorFunction'
        : false
    }

    runtime.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype
        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = 'GeneratorFunction'
        }
      }
      genFun.prototype = Object.create(Gp)
      return genFun
    }

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    runtime.awrap = function (arg) {
      return { __await: arg }
    }

    function AsyncIterator (generator) {
      function invoke (method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg)
        if (record.type === 'throw') {
          reject(record.arg)
        } else {
          var result = record.arg
          var value = result.value
          if (value &&
            typeof value === 'object' &&
            hasOwn.call(value, '__await')) {
            return Promise.resolve(value.__await).then(function (value) {
              invoke('next', value, resolve, reject)
            }, function (err) {
              invoke('throw', err, resolve, reject)
            })
          }

          return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
            result.value = unwrapped
            resolve(result)
          }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
            return invoke('throw', error, resolve, reject)
          })
        }
      }

      var previousPromise

      function enqueue (method, arg) {
        function callInvokeWithMethodAndArg () {
          return new Promise(function (resolve, reject) {
            invoke(method, arg, resolve, reject)
          })
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
        ) : callInvokeWithMethodAndArg()
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue
    }

    defineIteratorMethods(AsyncIterator.prototype)
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this
    }
    runtime.AsyncIterator = AsyncIterator

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    runtime.async = function (innerFn, outerFn, self, tryLocsList) {
      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList)
      )

      return runtime.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next()
        })
    }

    function makeInvokeMethod (innerFn, self, context) {
      var state = GenStateSuspendedStart

      return function invoke (method, arg) {
        if (state === GenStateExecuting) {
          throw new Error('Generator is already running')
        }

        if (state === GenStateCompleted) {
          if (method === 'throw') {
            throw arg
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult()
        }

        context.method = method
        context.arg = arg

        while (true) {
          var delegate = context.delegate
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context)
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue
              return delegateResult
            }
          }

          if (context.method === 'next') {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
            context.sent = context._sent = context.arg
          } else if (context.method === 'throw') {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted
              throw context.arg
            }

            context.dispatchException(context.arg)
          } else if (context.method === 'return') {
            context.abrupt('return', context.arg)
          }

          state = GenStateExecuting

          var record = tryCatch(innerFn, self, context)
          if (record.type === 'normal') {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield

            if (record.arg === ContinueSentinel) {
              continue
            }

            return {
              value: record.arg,
              done: context.done
            }
          } else if (record.type === 'throw') {
            state = GenStateCompleted
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = 'throw'
            context.arg = record.arg
          }
        }
      }
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate (delegate, context) {
      var method = delegate.iterator[context.method]
      if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
        context.delegate = null

        if (context.method === 'throw') {
          if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
            context.method = 'return'
            context.arg = undefined
            maybeInvokeDelegate(delegate, context)

            if (context.method === 'throw') {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel
            }
          }

          context.method = 'throw'
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method")
        }

        return ContinueSentinel
      }

      var record = tryCatch(method, delegate.iterator, context.arg)

      if (record.type === 'throw') {
        context.method = 'throw'
        context.arg = record.arg
        context.delegate = null
        return ContinueSentinel
      }

      var info = record.arg

      if (!info) {
        context.method = 'throw'
        context.arg = new TypeError('iterator result is not an object')
        context.delegate = null
        return ContinueSentinel
      }

      if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== 'return') {
          context.method = 'next'
          context.arg = undefined
        }
      } else {
      // Re-yield the result returned by the delegate method.
        return info
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null
      return ContinueSentinel
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp)

    Gp[toStringTagSymbol] = 'Generator'

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function () {
      return this
    }

    Gp.toString = function () {
      return '[object Generator]'
    }

    function pushTryEntry (locs) {
      var entry = { tryLoc: locs[0] }

      if (1 in locs) {
        entry.catchLoc = locs[1]
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2]
        entry.afterLoc = locs[3]
      }

      this.tryEntries.push(entry)
    }

    function resetTryEntry (entry) {
      var record = entry.completion || {}
      record.type = 'normal'
      delete record.arg
      entry.completion = record
    }

    function Context (tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: 'root' }]
      tryLocsList.forEach(pushTryEntry, this)
      this.reset(true)
    }

    runtime.keys = function (object) {
      var keys = []
      for (var key in object) {
        keys.push(key)
      }
      keys.reverse()

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next () {
        while (keys.length) {
          var key = keys.pop()
          if (key in object) {
            next.value = key
            next.done = false
            return next
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true
        return next
      }
    }

    function values (iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol]
        if (iteratorMethod) {
          return iteratorMethod.call(iterable)
        }

        if (typeof iterable.next === 'function') {
          return iterable
        }

        if (!isNaN(iterable.length)) {
          var i = -1; var next = function next () {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i]
                next.done = false
                return next
              }
            }

            next.value = undefined
            next.done = true

            return next
          }

          return next.next = next
        }
      }

      // Return an iterator with no values.
      return { next: doneResult }
    }
    runtime.values = values

    function doneResult () {
      return { value: undefined, done: true }
    }

    Context.prototype = {
      constructor: Context,

      reset: function (skipTempReset) {
        this.prev = 0
        this.next = 0
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined
        this.done = false
        this.delegate = null

        this.method = 'next'
        this.arg = undefined

        this.tryEntries.forEach(resetTryEntry)

        if (!skipTempReset) {
          for (var name in this) {
          // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === 't' &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
              this[name] = undefined
            }
          }
        }
      },

      stop: function () {
        this.done = true

        var rootEntry = this.tryEntries[0]
        var rootRecord = rootEntry.completion
        if (rootRecord.type === 'throw') {
          throw rootRecord.arg
        }

        return this.rval
      },

      dispatchException: function (exception) {
        if (this.done) {
          throw exception
        }

        var context = this
        function handle (loc, caught) {
          record.type = 'throw'
          record.arg = exception
          context.next = loc

          if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
            context.method = 'next'
            context.arg = undefined
          }

          return !!caught
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i]
          var record = entry.completion

          if (entry.tryLoc === 'root') {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
            return handle('end')
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, 'catchLoc')
            var hasFinally = hasOwn.call(entry, 'finallyLoc')

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true)
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc)
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true)
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc)
              }
            } else {
              throw new Error('try statement without catch or finally')
            }
          }
        }
      },

      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i]
          if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, 'finallyLoc') &&
            this.prev < entry.finallyLoc) {
            var finallyEntry = entry
            break
          }
        }

        if (finallyEntry &&
          (type === 'break' ||
           type === 'continue') &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
          finallyEntry = null
        }

        var record = finallyEntry ? finallyEntry.completion : {}
        record.type = type
        record.arg = arg

        if (finallyEntry) {
          this.method = 'next'
          this.next = finallyEntry.finallyLoc
          return ContinueSentinel
        }

        return this.complete(record)
      },

      complete: function (record, afterLoc) {
        if (record.type === 'throw') {
          throw record.arg
        }

        if (record.type === 'break' ||
          record.type === 'continue') {
          this.next = record.arg
        } else if (record.type === 'return') {
          this.rval = this.arg = record.arg
          this.method = 'return'
          this.next = 'end'
        } else if (record.type === 'normal' && afterLoc) {
          this.next = afterLoc
        }

        return ContinueSentinel
      },

      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i]
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc)
            resetTryEntry(entry)
            return ContinueSentinel
          }
        }
      },

      'catch': function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i]
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion
            if (record.type === 'throw') {
              var thrown = record.arg
              resetTryEntry(entry)
            }
            return thrown
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error('illegal catch attempt')
      },

      delegateYield: function (iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }

        if (this.method === 'next') {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
          this.arg = undefined
        }

        return ContinueSentinel
      }
    }
  })(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
    (function () {
      return this || (typeof self === 'object' && self)
    })() || Function('return this')()
  )
}, {}],
125: [function (require, module, exports) {
  (function (global) {
    'use strict'

    var _interopRequireWildcard = require('@babel/runtime-corejs2/helpers/interopRequireWildcard')

    var M = _interopRequireWildcard(require('./main.js'))

    global.MathOfT = M.MathOfT
  }).call(this, typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {})
}, { './main.js': 126, '@babel/runtime-corejs2/helpers/interopRequireWildcard': 20 }],
126: [function (require, module, exports) {
  'use strict' // ESM syntax is supported.

  var _interopRequireWildcard = require('@babel/runtime-corejs2/helpers/interopRequireWildcard')

  var M = _interopRequireWildcard(require('./mathoft.js'))

  module.exports = M
}, { './mathoft.js': 127, '@babel/runtime-corejs2/helpers/interopRequireWildcard': 20 }],
127: [function (require, module, exports) {
  'use strict'
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
* @see MathOfT.ofT
*/

  var _interopRequireDefault = require('@babel/runtime-corejs2/helpers/interopRequireDefault')

  var _defineProperties = _interopRequireDefault(require('@babel/runtime-corejs2/core-js/object/define-properties'))

  var _iterator2 = _interopRequireDefault(require('@babel/runtime-corejs2/core-js/symbol/iterator'))

  var _toPrimitive = _interopRequireDefault(require('@babel/runtime-corejs2/core-js/symbol/to-primitive'))

  var _assign = _interopRequireDefault(require('@babel/runtime-corejs2/core-js/object/assign'))

  var _getIterator2 = _interopRequireDefault(require('@babel/runtime-corejs2/core-js/get-iterator'))

  var _typeof2 = _interopRequireDefault(require('@babel/runtime-corejs2/helpers/typeof'))

  var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime-corejs2/helpers/slicedToArray'))

  var _regenerator = _interopRequireDefault(require('@babel/runtime-corejs2/regenerator'))

  var _isInteger = _interopRequireDefault(require('@babel/runtime-corejs2/core-js/number/is-integer'))

  var _toConsumableArray2 = _interopRequireDefault(require('@babel/runtime-corejs2/helpers/toConsumableArray'))

  var _isNan = _interopRequireDefault(require('@babel/runtime-corejs2/core-js/number/is-nan'))

  var _isArray = _interopRequireDefault(require('@babel/runtime-corejs2/core-js/array/is-array'))

  var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime-corejs2/helpers/classCallCheck'))

  var _createClass2 = _interopRequireDefault(require('@babel/runtime-corejs2/helpers/createClass'))

  var _defineProperty2 = _interopRequireDefault(require('@babel/runtime-corejs2/helpers/defineProperty'))

  var _Object$definePropert

  var _Symbol$iterator = _iterator2.default

  var MathOfT =
/* #__PURE__ */
(function () {
  // static #test=1;//@babel/plugin-proposal-class-properties

  /**
  * constructor - create a MathOfT instance that evaluates its Function terms
  *    when given some parameter "t".
  * @param  {(Object|Function|Array)} params
  * @param {(Number|Array.<Number>)} [params.range] Range of two numerical values over which t is evaluated inclusively. If given a single number t0, range is [-t0,t0]
  * @param {Number} [params.segmentDivisor] The number of segments to divide the range into when picking t values for evaluation.
  * @param {(Function|Array.<Function>|Array.<MathOfT>)} [params.terms=[]] A function that accepts a parameter t and returns a result of some operation on t
  * @param {boolean} [params.rangeoverride=false] if true, will override any range provided and set range equal to [0, params.segmentDivisor]
  * @throws TypeError
  */
  function MathOfT (params) {
    (0, _classCallCheck2.default)(this, MathOfT)
    params = params || {}

    if (typeof params === 'function') {
      var thefunc = params
      params = {
        terms: thefunc
      }
    } else if ((0, _isArray.default)(params)) {
      var thearray = params
      params = {
        range: thearray
      }
    } // define the division of the evaluation range

    var segmentDivisor = params.segmentDivisor || MathOfT.DEFAULT_SEGMENT_DIVISOR

    if (typeof segmentDivisor !== 'number' || (0, _isNan.default)(segmentDivisor)) {
      // console.log('NaN segment Divisor')
      throw new TypeError('segmentDivisor should be non-NaN number')
    }

    this.__segmentDivisor = segmentDivisor
    var rangeoverride = typeof params.rangeoverride === 'boolean' ? params.rangeoverride : false // create an evaluation range

    var range = rangeoverride ? [0, this.__segmentDivisor] : params.range || MathOfT.DEFAULT_RANGE
    range = typeof range === 'number' ? [-range, range] : range
    if (!(0, _isArray.default)(range)) throw new TypeError('range should be array') // if(range.length!==2) throw new RangeError('range should have two elements')

    if (!MathOfT.ARENUMBERS.apply(MathOfT, (0, _toConsumableArray2.default)(range))) throw new TypeError('range values should be numbers')
    this._range = Array(range.length)

    for (var rangeIndex in range) {
      this._range[rangeIndex] = range[rangeIndex]
    } // this MathOfT can use these terms
    // define terms

    var terms = params.terms || [function (t) {
      return t
    }]
    terms = typeof terms === 'function' ? [terms] : terms

    if (!(0, _isArray.default)(terms) && typeof terms !== 'function') {
      throw new TypeError('params.terms should be array or function')
    }

    this._terms = []

    for (var termIndex in terms) {
      var term = terms[termIndex] // console.log(term);``

      this.addTerm(term)
    } // console.log(params.opcode)
    // debugger;

    this._opcode = params.opcode
  }
  /**
  * get terms - the Function terms of this MathOfT object
  *
  * @return {Array}
  */

  (0, _createClass2.default)(MathOfT, [{
    key: 'addTerm',

    /**
    * addTerm - add a term to the terms of this MathOfT instance
    *
    * @param  {(function|MathOfT)} term A Function that takes a parameter (t) or
    *   MathOfT
    * @param @deprecated {boolean} [harmonize=false] if true, and term is a MathOfT
    *  instance, this overwrites the range and segmentDivisor of term to make them
    *  equivalent for the same parameters of this instance.
    * @returns {boolean} true if length of terms grew
    */
    value: function addTerm (term, harmonize) {
      var numterms = this.terms.length
      harmonize = typeof harmonize === 'boolean' ? harmonize : false

      if (typeof term === 'function') {
        this.terms.push(term)
      } else if (term instanceof MathOfT) {
        this.terms.push(term)

        if (harmonize) {
          term._range = this._range // IMPORTANT

          term.__segmentDivisor = this.__segmentDivisor
        }
      }

      return numterms == this.terms.length - 1
    }
    /**
    * get segmentDivisor The number of segment divisors
    * (number of t evaluation points -1)
    *   in this MathOfT
    *
    * @return {Number}
    */

  }, {
    key: 'dSubrange',

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
    value: function dSubrange (n, nn) {
      n = MathOfT.ISNUMBER(n) ? n : 0

      if (nn && !MathOfT.ISNUMBER(nn)) {
        throw new TypeError('MathOfT.dSubRange only accepts Numbers, given '.concat(Array.prototype.slice.call(arguments)))
      }

      n = n % this._range.length

      if (!(0, _isInteger.default)(n)) {
        throw new RangeError('MathOfT.dSubRange only accepts Integers, given '.concat(Array.prototype.slice.call(arguments)))
      } // for this conditional, we use the explicit ISNUMBER to avoid logical
      // error for zero case: if(0) is falsy

      nn = MathOfT.ISNUMBER(nn) ? nn % this._range.length : (n + 1) % this._range.length

      if (!(0, _isInteger.default)(nn)) {
        throw new RangeError('MathOfT.dSubRange only accepts Integers, given '.concat(Array.prototype.slice.call(arguments)))
      }

      return this._range[nn] - this._range[n]
    }
    /**
    * get drange - the delta between the the first and final values of the evaluation range
    *
    * @return {Number}
    */

  }, {
    key: 'subT',

    /**
     * subT - get a generator function that yields segmentDivisor+1 values of t spanning the range [this._range[n], this._range[n+1]], where if n or n+1 fall beyond the bounds of this._range.length, they are constrained to fit
     *
     *
     *
     * @param  {Number} [n=0] integer start index of range
     *
     * @return {type}   description
     */
    value: function subT (n, omitLast) {
      omitLast = typeof omitLast === 'boolean' ? omitLast : false
      var defaultN = 0
      n = MathOfT.ISNUMBER(n) ? n % this.range.length : defaultN
      var a = this.range[n]

      var b = this.range[(n + 1) % this.range.length]
      var tsubmax = omitLast ? this.segmentDivisor - 1 : this.segmentDivisor
      var dt = (b - a) / this.segmentDivisor
      /**
      * @yields {Number}
      */

      return (
        /* #__PURE__ */
        _regenerator.default.mark(function _callee () {
          var tsubindex
          return _regenerator.default.wrap(function _callee$ (_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  tsubindex = 0

                case 1:
                  if (!(tsubindex <= tsubmax)) {
                    _context.next = 7
                    break
                  }

                  _context.next = 4
                  return a + tsubindex * dt

                case 4:
                  tsubindex++
                  _context.next = 1
                  break

                case 7:
                case 'end':
                  return _context.stop()
              }
            }
          }, _callee, this)
        })
      )
    }
    /**
    * get t - get a Generator yielding all values of t across instance evaluation range
    * @example
    * // get the default t values for which a MathOfT is
    * // evaluated
    * let MoT = new MathOfT({
    *   range: [0, Math.PI*2],
    *   segmentDivisor: 22,
    *   terms: (t) => [sin(t), cos(t)];
    * });
    * let t = [...MoT.t()]
    * @return {Generator<Number>}
    */

  }, {
    key: 'normalizeT',

    /**
    * normalizeT - given a Number t, return a normalized (to MathOfT.DEFAULT_RANGE)
    * representation of how far along t is in the evaluation
    * range of this MathOfT
    *
    * If t falls out of bounds of range, the value is returned as -/+ Infinity
    *
    * If the evaluation range has more than two values, e.g. [0,1,2],
    * then normalizeT checks in each subrange, e.g. [0,1], [1,2]
    * and returns an Array of normalized values corresponding to each range
    *
    * @see DEFAULT_RANGE
    * @param  {Number} [t=0]
    * @return {Number|Array<Number>}
    */
    value: function normalizeT (t) {
      if (!MathOfT.ISNUMBER(t)) {
        t = 0
      }

      var test = function test (tt, range) {
        var _MathOfT$DEFAULT_RANG = (0, _slicedToArray2.default)(MathOfT.DEFAULT_RANGE, 2)

        var normA = _MathOfT$DEFAULT_RANG[0]

        var normB = _MathOfT$DEFAULT_RANG[1]

        var minNorm = normA < normB ? normA : normB
        var maxNorm = normB > normA ? normB : normA
        var res = (tt - range[0]) / (range[1] - range[0]) // [0-1]

        res = normA + (normB - normA) * res // [normA, normB]

        if (!MathOfT.INRANGE(res, normA, normB)) {
          res = res < minNorm ? -Infinity : Infinity
        }

        return res
      }

      var arr = Array(this.range.length - 1)

      for (var r = 0; r < arr.length; r++) {
        arr[r] = test(t, [this.range[r], this.range[r + 1]])
      }

      return arr.length == 1 ? arr[0] : arr
    }
    /**
    * ofT - evaluate all of the terms held by this MathofT for the
    * given t value.
    *
    * When evaluating a Function term, the function can is called with
    * a bound this containing information about t:
    * @see normalizeT
    * @see range
    * @see derange
    * @see t0
    * @see segmentDivisor
    * It also receives a value i corresponding to the index that this t
    * might correspond to in an Array of ofT results for the evaluation range.
    *
    * @param  {Number} t
    * @return {(Number|Array.<Number>|Array<Array>)}
    */

  }, {
    key: 'ofT',
    value: function ofT (t) {
      t = typeof t === 'number' ? t : this.range[0] // debugger;

      var tthis = (0, _typeof2.default)(this.tthis) === 'object' ? this.tthis : {
        't': {
          t: t,
          tNormal: this.normalizeT(t),
          tNormalRemaining: 1 - this.normalizeT(t),
          trange: this.range,
          drange: this.drange,
          t0: this.t0,
          segmentDivisor: this.segmentDivisor,
          i: Math.round(t * this.segmentDivisor)
        }
      }
      var result = []
      var _iteratorNormalCompletion = true
      var _didIteratorError = false
      var _iteratorError = undefined

      try {
        for (var _iterator = (0, _getIterator2.default)(this._terms), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _term = _step.value

          if (typeof _term === 'function') {
            result.push(_term.call(tthis, t))
          } else if (_term instanceof MathOfT) {
            result.push(_term.ofT.call((0, _assign.default)(_term, {
              tthis: tthis
            }), t)) // OVERRIDE?
          }
        }
      } catch (err) {
        _didIteratorError = true
        _iteratorError = err
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return()
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError
          }
        }
      }

      return result.length == 1 ? result[0] : result
    }
    /**
    * ofTNormal - given a Number tNormal between -1 and 1, inclusive,
    * return the evaluation of this MathOfT on the t corresponding
    * to the value of t in the complete evaluation range represented by the
    * given tNormal
    * @see ofT
    * @param  {Number} [tNormal=[-1,1]]
    * @return {(Number|Array.<Number>)}
    */

  }, {
    key: 'ofTNormal',
    value: function ofTNormal (tNormal) {
      tNormal = typeof tNormal === 'number' ? tNormal > 1 || tNormal < -1 ? Math.sign(tNormal) * 1 : tNormal : 1
      var t = this.range[0] + tNormal * (this.range[1] - this.range[0]) // debugger;

      return this.ofT(t)
    }
    /**
    * ofTOp - Calculate the value of performing an operation _op on the
    * values returned by calculating this MathOfT instance's terms for
    * some evaluation value t.
    *
    * @see ofT
    *
    * @param  {Number} t the t to evaluate
    * @param  {type} _acc an accumulator value to start with
    * @see MathOfT.OPS -> base
    * @param  {type} [_op=this.opcode]  an opcode to perform
    * @return {(Number|Array.<Number>|Array.<Array>)}
    */

  }, {
    key: 'ofTOp',
    value: function ofTOp (t, _acc, _op) {
      _op = _op in MathOfT.OPS ? MathOfT.OPS[_op] : this.opcode // debugger;

      _acc = !_acc ? _op.base : _acc
      _acc = typeof _acc === 'number' && !(0, _isNan.default)(_acc) ? _acc : NaN // debugger;

      if (this.terms.length == 1) {
        // console.log('non')
        var _ofT = this.ofT(t)

        var result

        if (!(0, _isArray.default)(_ofT) ^ !(0, _isArray.default)(_acc)) {
          if (!(0, _isArray.default)(_acc)) {
            result = _ofT.map(function (v, i) {
              return _op(v, _acc)
            })
          } else if (!(0, _isArray.default)(_ofT)) {
            result = _acc.map(function (v, i) {
              return _op(v, _ofT)
            })
          }
        } else if ((0, _isArray.default)(_ofT) && (0, _isArray.default)(_acc)) {
          result = _ofT.map(function (v, i) {
            return _op(v, _acc[i])
          })
        } else {
          result = _op(v, _acc)
        } // debugger;

        return result
      } else {
        return this.ofT(t).reduce(function (acc, valarray, i, arr) {
          if (i == 0) {
            // console.warn(valarray, acc)
            return valarray
          } // console.info(valarray, acc)

          var result // debugger;

          if (!(0, _isArray.default)(valarray) ^ !(0, _isArray.default)(acc)) {
            valarray = (0, _isArray.default)(valarray) ? valarray : Array(MathOfT.R.length).fill(valarray)
            var accvec = (0, _isArray.default)(acc) ? acc : Array(MathOfT.R.length).fill(acc)
            result = valarray.map(function (vv, ii) {
              return _op(accvec[ii], vv)
            })
          } else if ((0, _isArray.default)(valarray) && (0, _isArray.default)(acc)) {
            result = valarray.map(function (vv, ii) {
              return _op(acc[ii], vv)
            })
          } else {
            var valnum = typeof valarray === 'number' ? valarray : NaN
            result = (0, _isNan.default)(valnum) || (0, _isNan.default)(acc) ? NaN : _op(acc, valnum)
          }

          return result
        }, _acc)
      }
    }
    /**
    * get ofFirstT - return the ofT for the first t in the evaluation range
    *
    * @see t0
    * @see ofT
    * @return {(Number|Array.<Number>|Array.<Array>)}
    */

  }, {
    key: 'mapTOp',

    /**
    * mapTOp - apply the Array.map native function to the elements of
    * this.ofAllTOp() with the given callback function and this argument
    * @see Array.map
    * @see ofAllTOp
    * @param  {Function} [callback] callback to apply
    * @param  {Object} [thisArg]  this argument
    * @return {Array}         map result
    */
    value: function mapTOp (callback, thisArg) {
      if (!(callback instanceof Function)) throw new TypeError('map needs Function callback')
      return (0, _toConsumableArray2.default)(this.ofAllTOp()).map(callback, thisArg)
    }
    /**
    * map - apply the Array.map native function to the elements yielded by
    * this[Symbol.iterator] with the given callback function and this argument
    *    *
    * @see get [Symbol.iterator]
    * @param  {Function} [callback] callback to apply
    * @param  {Object} [thisArg]  this argument
    * @return {Array}         map result
    */

  }, {
    key: 'map',
    value: function map (callback, thisArg) {
      if (!(callback instanceof Function)) throw new TypeError('map needs Function callback')
      return (0, _toConsumableArray2.default)(this).map(callback, thisArg)
    }
    /**
     * @static R - dimensional labeling
     */

  }, {
    key: 'terms',
    get: function get () {
      return this._terms
    }
  }, {
    key: 'segmentDivisor',
    get: function get () {
      return this.__segmentDivisor
    }
    /**
     * get numSegments - The number of actual segments the MathOfT divides the evaluation range into
     *
     * @return {Number}
     */

  }, {
    key: 'numSegments',
    get: function get () {
      return this.segmentDivisor + 1
    }
  }, {
    key: 'dt',
    get: function get () {
      return this.drange / this.__segmentDivisor
    }
    /**
    * get range - the evaluation range is the minimum and maximum values for t
    *
    * @return {Array.<Number>}
    */

  }, {
    key: 'range',
    get: function get () {
      return this._range
    }
    /**
    * get t0 - the first value of t in the evaluation range
    * @return {Number}
    */

  }, {
    key: 't0',
    get: function get () {
      return this.range[0]
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
    key: 'opcode',
    get: function get () {
      return this._opcode
    }, /**
    * set opcode - set the opcode to one of the opcodes
    *  defined in MathOfT.OPS
    *
    * @param  {string} opcode @see MathOfT.OPS
    */

    set: function set (opcode) {
      if (MathOfT.ISOP(opcode)) {
        this._opcode = opcode
      }
    }
  }, {
    key: 'drange',
    get: function get () {
      return this._range[this._range.length - 1] - this._range[0]
    }
    /**
    * get dabsrange - the absolute value of the delta
    * between the first and final values of the evaluation range
    *
    * @return {Number}
    */

  }, {
    key: 'dabsrange',
    get: function get () {
      return Math.abs(this.drange)
    }
  }, {
    key: 't',
    get: function get () {
      var rangelimit = this.range.length - 2
      /**
      * @yields {Number}
      */

      return (
        /* #__PURE__ */
        _regenerator.default.mark(function _callee2 () {
          var rangeIndex
          return _regenerator.default.wrap(function _callee2$ (_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  rangeIndex = 0

                case 1:
                  if (!(rangeIndex <= rangelimit)) {
                    _context2.next = 6
                    break
                  }

                  return _context2.delegateYield(rangeIndex == rangelimit ? this.subT(rangeIndex)() : this.subT(rangeIndex, true)(), 't0', 3)

                case 3:
                  rangeIndex++
                  _context2.next = 1
                  break

                case 6:
                case 'end':
                  return _context2.stop()
              }
            }
          }, _callee2, this)
        })
      )
    }
  }, {
    key: 'ofFirstT',
    get: function get () {
      return this.ofT(this.t0)
    }
    /**
    * get ofLastT - return the ofT for the final t in the evaluation range
    *
    * @see range
    * @see ofT
    * @return {(Number|Array.<Number>|Array.<Array>)}
    */

  }, {
    key: 'ofLastT',
    get: function get () {
      return this.ofT(this._range[this._range.length - 1])
    }
    /**
    * get ofAllT - get a Generator that yields
    * all Array=[t, this.ofT(t)] for t in evaluation range
    * @see ofT
    * @return {Generator} yielding Array in form [t, this.ofT(t)]
    */

  }, {
    key: 'ofAllT',
    get: function get () {
      return (
        /* #__PURE__ */
        _regenerator.default.mark(function _callee3 () {
          var _arr, _i, t

          return _regenerator.default.wrap(function _callee3$ (_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _arr = (0, _toConsumableArray2.default)(this.t())
                  _i = 0

                case 2:
                  if (!(_i < _arr.length)) {
                    _context3.next = 9
                    break
                  }

                  t = _arr[_i]
                  _context3.next = 6
                  return [t, this.ofT(t)]

                case 6:
                  _i++
                  _context3.next = 2
                  break

                case 9:
                case 'end':
                  return _context3.stop()
              }
            }
          }, _callee3, this)
        })
      )
    }
    /**
    * get - Symbol.iterator get a Generator that yields
    *    all this.ofT(t) for t in evaluation range
    * @see ofT
    * @return {Generator} Generator function yielding this.ofT(t)
    */

  }, {
    key: _Symbol$iterator,
    get: function get () {
      return (
        /* #__PURE__ */
        _regenerator.default.mark(function _callee4 () {
          var _this = this

          return _regenerator.default.wrap(function _callee4$ (_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  return _context4.delegateYield((0, _toConsumableArray2.default)(this.t()).map(function (t, i) {
                    return _this.ofT(t)
                  }), 't0', 1)

                case 1:
                case 'end':
                  return _context4.stop()
              }
            }
          }, _callee4, this)
        })
      )
    }
    /**
    * get ofAllTOp - get a Generator that yields all
    * this.ofTOp(_t, _acc, _op) for _t in evaluation range,
    * _acc, _op provided by user
    *
    * @see ofAllTOp
    * @return {Generator}  description
    */

  }, {
    key: 'ofAllTOp',
    get: function get () {
      return (
        /* #__PURE__ */
        _regenerator.default.mark(function _callee5 (_acc, _op) {
          var _this2 = this

          return _regenerator.default.wrap(function _callee5$ (_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  return _context5.delegateYield((0, _toConsumableArray2.default)(this.t()).map(function (_t, i) {
                    return _this2.ofTOp(_t, _acc, _op)
                  }), 't0', 1)

                case 1:
                case 'end':
                  return _context5.stop()
              }
            }
          }, _callee5, this)
        })
      )
    }
  }], [{
    key: 'CALC_PRECISION_WARN',

    /**
     * @static CALC_PRECISION_WARN - give precision warning in the form of an object that can be converted to a primitive. Warning value is produced by a*1/a==1 test
     *
     * @return {object}  the object with primitive values:
     *         {number}  the maximum value for which no precision is lost
     *         {string}  as brief message
     */
    value: function CALC_PRECISION_WARN () {
      var msg

      var getmsg = function getmsg (e) {
        return 'Maximum safe unit divisor: '.concat(e)
      }

      var test = function test (a) {
        return 1 / a * a == 1
      }

      var testnum = 0
      var maxtest = 144

      while (testnum < maxtest) {
        if (!test(++testnum)) {
          msg = getmsg(testnum)
          break
        }
      }

      return (0, _defineProperty2.default)({}, _toPrimitive.default, function (hint) {
        if (hint === 'number') return testnum - 1
        return msg
      })
    }
    /**
     * @static ISNUMBER - return true IFF both of the following conditions are met
     *   1. there was one argument provided, and
     *   2. the sole provided argument was a number
     *
     * @return {boolean}
     */

  }, {
    key: 'ISOP',

    /**
     * @static ISOP - given a string codeToParse, return true when code is found
     *  in MathOfT.OPDICT
     * @see MathOfT.OPDICT
     * @param  {string} codeToParse
     * @return {boolean}
     */
    value: function ISOP (codeToParse) {
      return MathOfT.OPDICT.includes(codeToParse)
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
    key: 'OPPARSE',
    value: function OPPARSE (codeToParse) {
      return MathOfT.ISOP(codeToParse) ? MathOfT.OPS[codeToParse] : MathOfT.OPS[null]
    }
    /**
     * @static OPS - an object containing operations, or ops, that
     * perform mathematical functions corresponding to their keys
     *
     * @see MathOfT.ISOP
     * @see MathOfT.OPDICT
     * @see MathOfT.OPPARSE
     * @see MathOfT.ARENUMBERS
     */

  }])
  return MathOfT
}());

  (0, _defineProperty2.default)(MathOfT, 'R', ['x', 'y', 'z']);
  (0, _defineProperty2.default)(MathOfT, 'ISNUMBER', function () {
    return arguments.length == 1 && typeof arguments[0] === 'number'
  });
  (0, _defineProperty2.default)(MathOfT, 'ARENUMBERS', function () {
    if (arguments.length == 0) {
      return false
    } else {
      return Array.prototype.slice.call(arguments).every(function (v) {
        return (0, _isArray.default)(v) ? MathOfT.ARENUMBERS.apply(MathOfT, (0, _toConsumableArray2.default)(v)) : MathOfT.ISNUMBER(v)
      })
    }
  });
  (0, _defineProperty2.default)(MathOfT, 'INRANGE', function (n, m, mm) {
    var test = function test (a, b, c) {
    // console.log(a,b,c)
      return a > b ? a <= c : a < b ? a >= c : true // a == b
    }

    if (!(MathOfT.ARENUMBERS.apply(MathOfT, arguments) && MathOfT.ISNUMBER(n))) {
      return false
    } else {
      if (arguments.length == 1) {
        return MathOfT.INRANGE(n, MathOfT.DEFAULT_RANGE)
      } else if ((0, _isArray.default)(m)) {
      // console.log(n,m)
        return m.length == 1 ? test(n, 0, m[0]) : test(n, m[0], m[m.length - 1])
      } else if (MathOfT.ISNUMBER(m)) {
        if (!MathOfT.ISNUMBER(mm)) {
          return test(n, 0, m)
        } else if (MathOfT.ISNUMBER(mm)) {
          return test(n, m, mm)
        }
      } else {
        return false
      }
    }
  });
  (0, _defineProperty2.default)(MathOfT, 'OPDICT', [null, '+', '-', '*', '/', '**']);
  (0, _defineProperty2.default)(MathOfT, 'OPS', (0, _defineProperties.default)({}, (_Object$definePropert = {}, (0, _defineProperty2.default)(_Object$definePropert, null, {
    get: function get () {
      function res () {
        return Array.prototype.slice.call(arguments)
      }

      ;
      res.code = null
      res.base = null
      return res
    },
    set: function set () {
      return null
    }
  }), (0, _defineProperty2.default)(_Object$definePropert, '+', {
    get: function get () {
      var base = 0

      function res () {
        return MathOfT.ARENUMBERS.apply(MathOfT, arguments) ? Array.prototype.slice.call(arguments).reduce(function (acc, c, i) {
          return i == 0 ? c : acc + c
        }) : NaN
      }

      res.code = '+'
      res.base = base
      return res
    },
    set: function set () {
      return '+'
    }
  }), (0, _defineProperty2.default)(_Object$definePropert, '-', {
    get: function get () {
      var base = 0

      function res () {
        return MathOfT.ARENUMBERS.apply(MathOfT, arguments) ? Array.prototype.slice.call(arguments).reduce(function (acc, c, i) {
          return i == 0 ? c : acc - c
        }, base) : NaN
      } // let res = (a, b) => (MathOfT.ARENUMBERS(a,b))
      // ? a - b
      // : NaN;

      res.code = '-'
      res.base = base
      return res
    },
    set: function set () {
      return '-'
    }
  }), (0, _defineProperty2.default)(_Object$definePropert, '*', {
    get: function get () {
      var base = 1

      function res () {
        return MathOfT.ARENUMBERS.apply(MathOfT, arguments) ? Array.prototype.slice.call(arguments).reduce(function (acc, c, i) {
          return i == 0 ? c : acc * c
        }, base) : NaN
      }

      res.code = '*'
      res.base = base
      return res
    },
    set: function set () {
      return '*'
    }
  }), (0, _defineProperty2.default)(_Object$definePropert, '/', {
    get: function get () {
      var base = 1

      function res () {
        return MathOfT.ARENUMBERS.apply(MathOfT, arguments) ? Array.prototype.slice.call(arguments).reduce(function (acc, c, i) {
          return i == 0 ? c : acc / c
        }, base) : NaN
      }

      res.code = '/'
      res.base = base
      return res
    },
    set: function set () {
      return '/'
    }
  }), (0, _defineProperty2.default)(_Object$definePropert, '**', {
    get: function get () {
      var base = 1

      function res () {
        return MathOfT.ARENUMBERS.apply(MathOfT, arguments) ? Array.prototype.slice.call(arguments).reduce(function (acc, c, i) {
          return i == 0 ? c : Math.pow(acc, c)
        }, base) : NaN
      }

      res.code = '**'
      res.base = base
      return res
    },
    set: function set () {
      return '**'
    }
  }), (0, _defineProperty2.default)(_Object$definePropert, '...', {
    get: function get () {
      var res = function res (a, b) {
        return (0, _isArray.default)(a) ? a.concat(b) : (0, _isArray.default)(b) ? b.concat(a) : [a, b]
      }

      res.code = '...'
      res.base = []
      return res
    },
    set: function set () {
      return '...'
    }
  }), _Object$definePropert)));
  (0, _defineProperty2.default)(MathOfT, 'DEFAULT_SEGMENT_DIVISOR', 10);
  (0, _defineProperty2.default)(MathOfT, 'DEFAULT_RANGE', [-1, 1])
  module.exports = {
    MathOfT: Object.defineProperty(MathOfT, 'MAX_SAFE_DIVISOR', {
      value: MathOfT.CALC_PRECISION_WARN(),
      enumerable: true,
      configurable: false,
      writable: false
    })
  }
}, { '@babel/runtime-corejs2/core-js/array/is-array': 2, '@babel/runtime-corejs2/core-js/get-iterator': 3, '@babel/runtime-corejs2/core-js/number/is-integer': 5, '@babel/runtime-corejs2/core-js/number/is-nan': 6, '@babel/runtime-corejs2/core-js/object/assign': 7, '@babel/runtime-corejs2/core-js/object/define-properties': 8, '@babel/runtime-corejs2/core-js/symbol/iterator': 12, '@babel/runtime-corejs2/core-js/symbol/to-primitive': 13, '@babel/runtime-corejs2/helpers/classCallCheck': 16, '@babel/runtime-corejs2/helpers/createClass': 17, '@babel/runtime-corejs2/helpers/defineProperty': 18, '@babel/runtime-corejs2/helpers/interopRequireDefault': 19, '@babel/runtime-corejs2/helpers/slicedToArray': 25, '@babel/runtime-corejs2/helpers/toConsumableArray': 26, '@babel/runtime-corejs2/helpers/typeof': 27, '@babel/runtime-corejs2/regenerator': 28 }] }, {}, [125])
