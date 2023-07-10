/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4963:
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 7722:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(6314)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(7728)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 7007:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(5286);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 9315:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(2110);
var toLength = __webpack_require__(875);
var toAbsoluteIndex = __webpack_require__(2337);
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


/***/ }),

/***/ 1488:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(2032);
var TAG = __webpack_require__(6314)('toStringTag');
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


/***/ }),

/***/ 2032:
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 5645:
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 2811:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $defineProperty = __webpack_require__(9275);
var createDesc = __webpack_require__(681);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 741:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(4963);
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


/***/ }),

/***/ 1355:
/***/ ((module) => {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 7057:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(4253)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 2457:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(5286);
var document = (__webpack_require__(3816).document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 4430:
/***/ ((module) => {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 5541:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(7184);
var gOPS = __webpack_require__(4548);
var pIE = __webpack_require__(4682);
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


/***/ }),

/***/ 2985:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3816);
var core = __webpack_require__(5645);
var hide = __webpack_require__(7728);
var redefine = __webpack_require__(7234);
var ctx = __webpack_require__(741);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
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


/***/ }),

/***/ 4253:
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 18:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(3825)('native-function-to-string', Function.toString);


/***/ }),

/***/ 3816:
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 9181:
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 7728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(9275);
var createDesc = __webpack_require__(681);
module.exports = __webpack_require__(7057) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 639:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var document = (__webpack_require__(3816).document);
module.exports = document && document.documentElement;


/***/ }),

/***/ 1734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(7057) && !__webpack_require__(4253)(function () {
  return Object.defineProperty(__webpack_require__(2457)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 9797:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(2032);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 6555:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// check on default Array iterator
var Iterators = __webpack_require__(2803);
var ITERATOR = __webpack_require__(6314)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ 4302:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(2032);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ 5286:
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 8851:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(7007);
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


/***/ }),

/***/ 9988:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var create = __webpack_require__(2503);
var descriptor = __webpack_require__(681);
var setToStringTag = __webpack_require__(2943);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7728)(IteratorPrototype, __webpack_require__(6314)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ 2923:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(4461);
var $export = __webpack_require__(2985);
var redefine = __webpack_require__(7234);
var hide = __webpack_require__(7728);
var Iterators = __webpack_require__(2803);
var $iterCreate = __webpack_require__(9988);
var setToStringTag = __webpack_require__(2943);
var getPrototypeOf = __webpack_require__(468);
var ITERATOR = __webpack_require__(6314)('iterator');
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


/***/ }),

/***/ 7462:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ITERATOR = __webpack_require__(6314)('iterator');
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


/***/ }),

/***/ 5436:
/***/ ((module) => {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ 2803:
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ 4461:
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ 4728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var META = __webpack_require__(3953)('meta');
var isObject = __webpack_require__(5286);
var has = __webpack_require__(9181);
var setDesc = (__webpack_require__(9275).f);
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(4253)(function () {
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


/***/ }),

/***/ 2503:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(7007);
var dPs = __webpack_require__(5588);
var enumBugKeys = __webpack_require__(4430);
var IE_PROTO = __webpack_require__(9335)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(2457)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  (__webpack_require__(639).appendChild)(iframe);
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


/***/ }),

/***/ 9275:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(7007);
var IE8_DOM_DEFINE = __webpack_require__(1734);
var toPrimitive = __webpack_require__(1689);
var dP = Object.defineProperty;

exports.f = __webpack_require__(7057) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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


/***/ }),

/***/ 5588:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(9275);
var anObject = __webpack_require__(7007);
var getKeys = __webpack_require__(7184);

module.exports = __webpack_require__(7057) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ 8693:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var pIE = __webpack_require__(4682);
var createDesc = __webpack_require__(681);
var toIObject = __webpack_require__(2110);
var toPrimitive = __webpack_require__(1689);
var has = __webpack_require__(9181);
var IE8_DOM_DEFINE = __webpack_require__(1734);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(7057) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ 9327:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(2110);
var gOPN = (__webpack_require__(616).f);
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


/***/ }),

/***/ 616:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(189);
var hiddenKeys = (__webpack_require__(4430).concat)('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ 4548:
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 468:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(9181);
var toObject = __webpack_require__(508);
var IE_PROTO = __webpack_require__(9335)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ 189:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(9181);
var toIObject = __webpack_require__(2110);
var arrayIndexOf = __webpack_require__(9315)(false);
var IE_PROTO = __webpack_require__(9335)('IE_PROTO');

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


/***/ }),

/***/ 7184:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(189);
var enumBugKeys = __webpack_require__(4430);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 4682:
/***/ ((__unused_webpack_module, exports) => {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 681:
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 7234:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3816);
var hide = __webpack_require__(7728);
var has = __webpack_require__(9181);
var SRC = __webpack_require__(3953)('src');
var $toString = __webpack_require__(18);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

(__webpack_require__(5645).inspectSource) = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ 2943:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var def = (__webpack_require__(9275).f);
var has = __webpack_require__(9181);
var TAG = __webpack_require__(6314)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ 9335:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(3825)('keys');
var uid = __webpack_require__(3953);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 3825:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var core = __webpack_require__(5645);
var global = __webpack_require__(3816);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(4461) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 4496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(1467);
var defined = __webpack_require__(1355);
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


/***/ }),

/***/ 2337:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(1467);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 1467:
/***/ ((module) => {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 2110:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(9797);
var defined = __webpack_require__(1355);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 875:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.15 ToLength
var toInteger = __webpack_require__(1467);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 508:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(1355);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 1689:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(5286);
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


/***/ }),

/***/ 3953:
/***/ ((module) => {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 6074:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(3816);
var core = __webpack_require__(5645);
var LIBRARY = __webpack_require__(4461);
var wksExt = __webpack_require__(8787);
var defineProperty = (__webpack_require__(9275).f);
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ 8787:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.f = __webpack_require__(6314);


/***/ }),

/***/ 6314:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(3825)('wks');
var uid = __webpack_require__(3953);
var Symbol = (__webpack_require__(3816).Symbol);
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ 9002:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(1488);
var ITERATOR = __webpack_require__(6314)('iterator');
var Iterators = __webpack_require__(2803);
module.exports = (__webpack_require__(5645).getIteratorMethod) = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 522:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ctx = __webpack_require__(741);
var $export = __webpack_require__(2985);
var toObject = __webpack_require__(508);
var call = __webpack_require__(8851);
var isArrayIter = __webpack_require__(6555);
var toLength = __webpack_require__(875);
var createProperty = __webpack_require__(2811);
var getIterFn = __webpack_require__(9002);

$export($export.S + $export.F * !__webpack_require__(7462)(function (iter) { Array.from(iter); }), 'Array', {
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


/***/ }),

/***/ 6997:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var addToUnscopables = __webpack_require__(7722);
var step = __webpack_require__(5436);
var Iterators = __webpack_require__(2803);
var toIObject = __webpack_require__(2110);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(2923)(Array, 'Array', function (iterated, kind) {
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


/***/ }),

/***/ 110:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(2985);
var html = __webpack_require__(639);
var cof = __webpack_require__(2032);
var toAbsoluteIndex = __webpack_require__(2337);
var toLength = __webpack_require__(875);
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(4253)(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),

/***/ 6059:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var dP = (__webpack_require__(9275).f);
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(7057) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ 6253:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(1488);
var test = {};
test[__webpack_require__(6314)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(7234)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ 9115:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $at = __webpack_require__(4496)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(2923)(String, 'String', function (iterated) {
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


/***/ }),

/***/ 5767:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(3816);
var has = __webpack_require__(9181);
var DESCRIPTORS = __webpack_require__(7057);
var $export = __webpack_require__(2985);
var redefine = __webpack_require__(7234);
var META = (__webpack_require__(4728).KEY);
var $fails = __webpack_require__(4253);
var shared = __webpack_require__(3825);
var setToStringTag = __webpack_require__(2943);
var uid = __webpack_require__(3953);
var wks = __webpack_require__(6314);
var wksExt = __webpack_require__(8787);
var wksDefine = __webpack_require__(6074);
var enumKeys = __webpack_require__(5541);
var isArray = __webpack_require__(4302);
var anObject = __webpack_require__(7007);
var isObject = __webpack_require__(5286);
var toObject = __webpack_require__(508);
var toIObject = __webpack_require__(2110);
var toPrimitive = __webpack_require__(1689);
var createDesc = __webpack_require__(681);
var _create = __webpack_require__(2503);
var gOPNExt = __webpack_require__(9327);
var $GOPD = __webpack_require__(8693);
var $GOPS = __webpack_require__(4548);
var $DP = __webpack_require__(9275);
var $keys = __webpack_require__(7184);
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
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
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
  (__webpack_require__(616).f) = gOPNExt.f = $getOwnPropertyNames;
  (__webpack_require__(4682).f) = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(4461)) {
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

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7728)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ 1181:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $iterators = __webpack_require__(6997);
var getKeys = __webpack_require__(7184);
var redefine = __webpack_require__(7234);
var global = __webpack_require__(3816);
var hide = __webpack_require__(7728);
var Iterators = __webpack_require__(2803);
var wks = __webpack_require__(6314);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ 9970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
.embed-close-button-container-EHxW3 {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 0.5rem;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.embed-close-button-Dvgm_ {
  background: none;
  border: none;
  color: rgb(218, 55, 55);
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
}

.embed-close-button-Dvgm_ button {
  padding: 0;
  margin: 0;
}

.embed-close-button-Dvgm_:hover {
  color: #ccc;
}

.embed-embed-container-Ctvv9 {
  position: absolute;
  width: 400px;
  height: 500px;
  border-radius: 10px;
  border: 1px solid #ccc;
  overflow: hidden;
  bottom: 30px;
  right: 30px;
  transition: all 0.3s ease-in-out;
}

.embed-embed-header-EdR8Y {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.embed-embed-title-m9162 {
  margin: 0;
  font-size: x-large;
}

.embed-embed-body-gL821 {
  width: 100%;
  height: 100%;
  padding-top: 30px;
}`, "",{"version":3,"sources":["webpack://./src/components/embed.css"],"names":[],"mappings":";AACA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,iBAAiB;EACjB,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,uBAAuB;EACvB,eAAe;EACf,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB","sourcesContent":["\n.close-button-container {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0 0.5rem;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.close-button {\n  background: none;\n  border: none;\n  color: rgb(218, 55, 55);\n  font-size: 2rem;\n  cursor: pointer;\n  padding: 0;\n}\n\n.close-button button {\n  padding: 0;\n  margin: 0;\n}\n\n.close-button:hover {\n  color: #ccc;\n}\n\n.embed-container {\n  position: absolute;\n  width: 400px;\n  height: 500px;\n  border-radius: 10px;\n  border: 1px solid #ccc;\n  overflow: hidden;\n  bottom: 30px;\n  right: 30px;\n  transition: all 0.3s ease-in-out;\n}\n\n.embed-header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 30px;\n  background: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  font-size: 1.5rem;\n  text-align: center;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.embed-title {\n  margin: 0;\n  font-size: x-large;\n}\n\n.embed-body {\n  width: 100%;\n  height: 100%;\n  padding-top: 30px;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"close-button-container": `embed-close-button-container-EHxW3`,
	"close-button": `embed-close-button-Dvgm_`,
	"embed-container": `embed-embed-container-Ctvv9`,
	"embed-header": `embed-embed-header-EdR8Y`,
	"embed-title": `embed-embed-title-m9162`,
	"embed-body": `embed-embed-body-gL821`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4915:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon-widget-icon-jFDJD {
  width:64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #e1dcdc;
  border-radius: 30px;
  position: fixed;
  bottom: 20px;
  right: 30px;
}

.icon-widget-icon-jFDJD:hover {
  background-color: #ccc;
}

.icon-widget-icon-jFDJD:active {
  opacity: 0.5;
}`, "",{"version":3,"sources":["webpack://./src/components/icon.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,yBAAyB;EACzB,mBAAmB;EACnB,eAAe;EACf,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd","sourcesContent":[".widget-icon {\n  width:64px;\n  height: 64px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background-color: #e1dcdc;\n  border-radius: 30px;\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n}\n\n.widget-icon:hover {\n  background-color: #ccc;\n}\n\n.widget-icon:active {\n  opacity: 0.5;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"widget-icon": `icon-widget-icon-jFDJD`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 7537:
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 3379:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 9216:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 3565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 9037:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join("\n");
  };
}();

/* istanbul ignore next  */
function apply(styleElement, index, remove, obj) {
  var css;
  if (remove) {
    css = "";
  } else {
    css = "";
    if (obj.supports) {
      css += "@supports (".concat(obj.supports, ") {");
    }
    if (obj.media) {
      css += "@media ".concat(obj.media, " {");
    }
    var needLayer = typeof obj.layer !== "undefined";
    if (needLayer) {
      css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
    }
    css += obj.css;
    if (needLayer) {
      css += "}";
    }
    if (obj.media) {
      css += "}";
    }
    if (obj.supports) {
      css += "}";
    }
  }

  // For old IE
  /* istanbul ignore if  */
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = styleElement.childNodes;
    if (childNodes[index]) {
      styleElement.removeChild(childNodes[index]);
    }
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index]);
    } else {
      styleElement.appendChild(cssNode);
    }
  }
}
var singletonData = {
  singleton: null,
  singletonCounter: 0
};

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") return {
    update: function update() {},
    remove: function remove() {}
  };

  // eslint-disable-next-line no-undef,no-use-before-define
  var styleIndex = singletonData.singletonCounter++;
  var styleElement =
  // eslint-disable-next-line no-undef,no-use-before-define
  singletonData.singleton || (
  // eslint-disable-next-line no-undef,no-use-before-define
  singletonData.singleton = options.insertStyleElement(options));
  return {
    update: function update(obj) {
      apply(styleElement, styleIndex, false, obj);
    },
    remove: function remove(obj) {
      apply(styleElement, styleIndex, true, obj);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 6576:
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg width='60.999966px' height='61.730377px' viewBox='0 0 60.999966 61.730377' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'%3e %3cdefs%3e %3cimage width='464' height='397' xlink:href='data:image/png;base64,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KNy4kzvvGdEtQ5LbV114nAceD3IOwiUAzgJ0vDlo84tn5PDv53LPiYGJdbGvtm+P98sP83BZ0k+37qQmOO+orAcDBzUkFwIhCdRBnCCz5d253aVxe9MZhv21hctCj4dRXFbgGkDYnkQypPPNcIxiwGVBnqDzoc9OBbrjktz8D3o5k+++zwO1hYeshO5yBr7B5nOX4EKCJMIAIalAoSLLDqGez+dviyRiw/iTTstWUeAxRkTSWZek7BEcmZrCUgYAQpzpa6g1dmHXypiM17c0g142STyEQwWC21SrFGpkIUtNNegCAAgUNqhcjZ61TKG2PAXWlzC1vAu7lrf6Sj1Fm3GHcChfR30qg4zz8CqgsLKEpcYsZhtJ2s2++l1XNkL+S9eeYKJiIib+pPSu4vSel41jxS6JZZRz27AtcwEuWHmwSqo2mzSRYbYqEx9Au6MEAKdnxRmGkZz4e7+3svgcD/01VmOIdu8d900Gq8pxJPjfZ6fn3zSOMo4yTWC1j1tv32+U+U6SXve00fvpNbj2Ct222fW2aSvQXg1rnRhxa8Lv9DtnK1Sq8Z8Xa3+DkcRybfE1EF6D9DaY7ZWooFPO8Wdm83tuGUtBDWMAJsI1DGPilFTKo+rfDeBnkHwFCnSuQp2gA0GQfWoxV7x9TEU1jL5M3A7UMAxjjnM1FNwr0XRLGdeyH0Tc3E0Ed4Vh460j91RkGAmwAdQwjE1hjnOHncMrBZ3CBuy/CTz5gdrJN6YNbm0YG8UGUMMwNo1mfF3320JHlKa0q1FB+IVybfE3R1w8w1gX2wM1DGNTkZQpVRbfQeIl8cPo4w2oDwSwRODnZqf3fGDkhTSMHtgK1DCMTYVkY2o691sSPhE/jFXPZBzwiQbbbV74vVK1NDvB4hv/ibE9A8MwNp1d3HXvvqV9L2xg5dUAHgOhQCILYArQlMQsEHkeowiEoLzAkNBK0/0dMwQc5R8JoAyYWZExXkyEaxjGlkFS9mD14MVytcIyyCzkPTNZUbmg4bMN0AXyYZh1K2y5+gwUNkIEjQBhRpAKU2ftvYAXnGqlZwOoYRiGYRjGVsJWoIZhbCnSuIYz16CGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRjGiPn/JIS3mbY7mrMAAAAASUVORK5CYII=' id='img_1' /%3e %3c/defs%3e %3cg id='icon' fill-opacity='1'%3e %3cpath d='M61 0L61 0L61 61.2304L0 61.2304L0 0L61 0Z' id='icon' fill='none' stroke='none' /%3e %3cpath d='M52 1.23038C56.4189 1.23038 60 4.8115 60 9.23038L60 43.2304C60 47.6493 56.4189 51.2304 52 51.2304L8 51.2304C3.58112 51.2304 0 47.6493 0 43.2304L0 9.23038C0 4.8115 3.58112 1.23038 8 1.23038L52 1.23038Z' id='Rectangle' fill='%230019A7' stroke='none' /%3e %3cg id='Group' transform='translate(0.99996185 0)'%3e %3cuse xlink:href='%23img_1' fill='%23FFFFFF' stroke='none' transform='scale(0.12931035 0.1290438)' /%3e %3c/g%3e %3cpath d='M39 51.2304L51.1429 61.2304L51.1429 51.2304L39 51.2304Z' id='Vector' fill='%230019A7' fill-rule='evenodd' stroke='%230019A7' stroke-width='1' /%3e %3c/g%3e %3c/svg%3e"

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./node_modules/preact/dist/preact.module.js
var preact_module_n,l,u,i,t,o,r,f,e,c={},s=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,v=Array.isArray;function h(n,l){for(var u in l)n[u]=l[u];return n}function p(n){var l=n.parentNode;l&&l.removeChild(n)}function y(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?preact_module_n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return d(l,f,t,o,null)}function d(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u:r};return null==r&&null!=l.vnode&&l.vnode(f),f}function _(){return{current:null}}function k(n){return n.children}function b(n,l){this.props=n,this.context=l}function g(n,l){if(null==l)return n.__?g(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?g(n):null}function m(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return m(n)}}function w(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!x.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||r)(x)}function x(){var n,l,u,i,o,r,e,c;for(t.sort(f);n=t.shift();)n.__d&&(l=t.length,i=void 0,o=void 0,e=(r=(u=n).__v).__e,(c=u.__P)&&(i=[],(o=h({},r)).__v=r.__v+1,L(c,r,o,u.__n,void 0!==c.ownerSVGElement,null!=r.__h?[e]:null,i,null==e?g(r):e,r.__h),M(i,r),r.__e!=e&&m(r)),t.length>l&&t.sort(f));x.__r=0}function P(n,l,u,i,t,o,r,f,e,a){var h,p,y,_,b,m,w,x=i&&i.__k||s,P=x.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _||"function"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?d(null,_,null,null,_):v(_)?d(k,{children:_},null,null,null):_.__b>0?d(_.type,_.props,_.key,_.ref?_.ref:null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(y=x[h])||y&&_.key==y.key&&_.type===y.type)x[h]=void 0;else for(p=0;p<P;p++){if((y=x[p])&&_.key==y.key&&_.type===y.type){x[p]=void 0;break}y=null}L(n,_,y=y||c,t,o,r,f,e,a),b=_.__e,(p=_.ref)&&y.ref!=p&&(w||(w=[]),y.ref&&w.push(y.ref,null,_),w.push(p,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===y.__k?_.__d=e=C(_,e,n):e=$(n,_,y,x,b,e),"function"==typeof u.type&&(u.__d=e)):e&&y.__e==e&&e.parentNode!=n&&(e=g(y))}for(u.__e=m,h=P;h--;)null!=x[h]&&("function"==typeof u.type&&null!=x[h].__e&&x[h].__e==u.__d&&(u.__d=A(i).nextSibling),q(x[h],x[h]));if(w)for(h=0;h<w.length;h++)O(w[h],w[++h],w[++h])}function C(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?C(i,l,u):$(u,i,i,t,i.__e,l));return l}function S(n,l){return l=l||[],null==n||"boolean"==typeof n||(v(n)?n.some(function(n){S(n,l)}):l.push(n)),l}function $(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=1)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function A(n){var l,u,i;if(null==n.type||"string"==typeof n.type)return n.__e;if(n.__k)for(l=n.__k.length-1;l>=0;l--)if((u=n.__k[l])&&(i=A(u)))return i;return null}function H(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||T(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||T(n,o,l[o],u[o],i)}function I(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a.test(l)?u:u+"px"}function T(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||I(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||I(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?z:j,o):n.removeEventListener(l,o?z:j,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&"rowSpan"!==l&&"colSpan"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u))}}function j(n){return this.l[n.type+!1](l.event?l.event(n):n)}function z(n){return this.l[n.type+!0](l.event?l.event(n):n)}function L(n,u,i,t,o,r,f,e,c){var s,a,p,y,d,_,g,m,w,x,C,S,$,A,H,I=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof I){if(m=u.props,w=(s=I.contextType)&&t[s.__c],x=s?w?w.props.value:s.__:t,i.__c?g=(a=u.__c=i.__c).__=a.__E:("prototype"in I&&I.prototype.render?u.__c=a=new I(m,x):(u.__c=a=new b(m,x),a.constructor=I,a.render=B),w&&w.sub(a),a.props=m,a.state||(a.state={}),a.context=x,a.__n=t,p=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=I.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=h({},a.__s)),h(a.__s,I.getDerivedStateFromProps(m,a.__s))),y=a.props,d=a.state,a.__v=u,p)null==I.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==I.getDerivedStateFromProps&&m!==y&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(m,x),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(m,a.__s,x)||u.__v===i.__v){for(u.__v!==i.__v&&(a.props=m,a.state=a.__s,a.__d=!1),a.__e=!1,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),C=0;C<a._sb.length;C++)a.__h.push(a._sb[C]);a._sb=[],a.__h.length&&f.push(a);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(m,a.__s,x),null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(y,d,_)})}if(a.context=x,a.props=m,a.__P=n,S=l.__r,$=0,"prototype"in I&&I.prototype.render){for(a.state=a.__s,a.__d=!1,S&&S(u),s=a.render(a.props,a.state,a.context),A=0;A<a._sb.length;A++)a.__h.push(a._sb[A]);a._sb=[]}else do{a.__d=!1,S&&S(u),s=a.render(a.props,a.state,a.context),a.state=a.__s}while(a.__d&&++$<25);a.state=a.__s,null!=a.getChildContext&&(t=h(h({},t),a.getChildContext())),p||null==a.getSnapshotBeforeUpdate||(_=a.getSnapshotBeforeUpdate(y,d)),P(n,v(H=null!=s&&s.type===k&&null==s.key?s.props.children:s)?H:[H],u,i,t,o,r,f,e,c),a.base=u.__e,u.__h=null,a.__h.length&&f.push(a),g&&(a.__E=a.__=null),a.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=N(i.__e,u,i,t,o,r,f,c);(s=l.diffed)&&s(u)}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l.__e(n,u,i)}}function M(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function N(l,u,i,t,o,r,f,e){var s,a,h,y=i.props,d=u.props,_=u.type,k=0;if("svg"===_&&(o=!0),null!=r)for(;k<r.length;k++)if((s=r[k])&&"setAttribute"in s==!!_&&(_?s.localName===_:3===s.nodeType)){l=s,r[k]=null;break}if(null==l){if(null===_)return document.createTextNode(d);l=o?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),r=null,e=!1}if(null===_)y===d||e&&l.data===d||(l.data=d);else{if(r=r&&preact_module_n.call(l.childNodes),a=(y=i.props||c).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!e){if(null!=r)for(y={},k=0;k<l.attributes.length;k++)y[l.attributes[k].name]=l.attributes[k].value;(h||a)&&(h&&(a&&h.__html==a.__html||h.__html===l.innerHTML)||(l.innerHTML=h&&h.__html||""))}if(H(l,d,y,o,e),h)u.__k=[];else if(P(l,v(k=u.props.children)?k:[k],u,i,t,o&&"foreignObject"!==_,r,f,r?r[0]:i.__k&&g(i,0),e),null!=r)for(k=r.length;k--;)null!=r[k]&&p(r[k]);e||("value"in d&&void 0!==(k=d.value)&&(k!==l.value||"progress"===_&&!k||"option"===_&&k!==y.value)&&T(l,"value",k,y.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==l.checked&&T(l,"checked",k,y.checked,!1))}return l}function O(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function q(n,u,i){var t,o;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||O(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null,n.__c=void 0}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&q(t[o],u,i||"function"!=typeof n.type);i||null==n.__e||p(n.__e),n.__=n.__e=n.__d=void 0}function B(n,l,u){return this.constructor(n,u)}function D(u,i,t){var o,r,f;l.__&&l.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],L(i,u=(!o&&t||i).__k=y(k,null,[u]),r||c,c,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?preact_module_n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),M(f,u)}function E(n,l){D(n,l,E)}function F(l,u,i){var t,o,r,f,e=h({},l.props);for(r in l.type&&l.type.defaultProps&&(f=l.type.defaultProps),u)"key"==r?t=u[r]:"ref"==r?o=u[r]:e[r]=void 0===u[r]&&void 0!==f?f[r]:u[r];return arguments.length>2&&(e.children=arguments.length>3?preact_module_n.call(arguments,2):i),d(l.type,e,t||l.key,o||l.ref,null)}function G(n,l){var u={__c:l="__cC"+e++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,w(n)})},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}preact_module_n=s.slice,l={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},b.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof n&&(n=n(h({},u),this.props)),n&&h(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),w(this))},b.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),w(this))},b.prototype.render=k,t=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f=function(n,l){return n.__v.__b-l.__v.__b},x.__r=0,e=0;
//# sourceMappingURL=preact.module.js.map

;// CONCATENATED MODULE: ./node_modules/clsx/dist/clsx.m.js
function clsx_m_r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=clsx_m_r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=clsx_m_r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const clsx_m = (clsx);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js
var singletonStyleDomAPI = __webpack_require__(9037);
var singletonStyleDomAPI_default = /*#__PURE__*/__webpack_require__.n(singletonStyleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/embed.css
var components_embed = __webpack_require__(9970);
;// CONCATENATED MODULE: ./src/components/embed.css

      
      
      
      
      
      
      
      
      

var options = {};

;
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (singletonStyleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(components_embed/* default */.Z, options);




       /* harmony default export */ const src_components_embed = (components_embed/* default */.Z && components_embed/* default */.Z.locals ? components_embed/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(5767);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(9115);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(6253);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(6997);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(1181);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.slice.js
var es6_array_slice = __webpack_require__(110);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(6059);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__(522);
;// CONCATENATED MODULE: ./node_modules/preact/hooks/dist/hooks.module.js
var hooks_module_t,hooks_module_r,hooks_module_u,hooks_module_i,hooks_module_o=0,hooks_module_f=[],hooks_module_c=[],hooks_module_e=l.__b,hooks_module_a=l.__r,hooks_module_v=l.diffed,hooks_module_l=l.__c,hooks_module_m=l.unmount;function hooks_module_d(t,u){l.__h&&l.__h(hooks_module_r,t,hooks_module_o||u),hooks_module_o=0;var i=hooks_module_r.__H||(hooks_module_r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:hooks_module_c}),i.__[t]}function hooks_module_h(n){return hooks_module_o=1,hooks_module_s(hooks_module_B,n)}function hooks_module_s(n,u,i){var o=hooks_module_d(hooks_module_t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):hooks_module_B(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}))}],o.__c=hooks_module_r,!hooks_module_r.u)){var f=function(n,t,r){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return!n.__N}))return!c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};hooks_module_r.u=!0;var c=hooks_module_r.shouldComponentUpdate,e=hooks_module_r.componentWillUpdate;hooks_module_r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u}e&&e.call(this,n,t,r)},hooks_module_r.shouldComponentUpdate=f}return o.__N||o.__}function hooks_module_p(u,i){var o=hooks_module_d(hooks_module_t++,3);!l.__s&&hooks_module_z(o.__H,i)&&(o.__=u,o.i=i,hooks_module_r.__H.__h.push(o))}function hooks_module_y(u,i){var o=hooks_module_d(hooks_module_t++,4);!n.__s&&hooks_module_z(o.__H,i)&&(o.__=u,o.i=i,hooks_module_r.__h.push(o))}function hooks_module_(n){return hooks_module_o=5,hooks_module_F(function(){return{current:n}},[])}function hooks_module_A(n,t,r){hooks_module_o=6,hooks_module_y(function(){return"function"==typeof n?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},null==r?r:r.concat(n))}function hooks_module_F(n,r){var u=hooks_module_d(hooks_module_t++,7);return hooks_module_z(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function hooks_module_T(n,t){return hooks_module_o=8,hooks_module_F(function(){return n},t)}function hooks_module_q(n){var u=hooks_module_r.context[n.__c],i=hooks_module_d(hooks_module_t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(hooks_module_r)),u.props.value):n.__}function hooks_module_x(t,r){n.useDebugValue&&n.useDebugValue(r?r(t):t)}function hooks_module_P(n){var u=hooks_module_d(hooks_module_t++,10),i=hooks_module_h();return u.__=n,hooks_module_r.componentDidCatch||(hooks_module_r.componentDidCatch=function(n,t){u.__&&u.__(n,t),i[1](n)}),[i[0],function(){i[1](void 0)}]}function V(){var n=hooks_module_d(hooks_module_t++,11);if(!n.__){for(var u=hooks_module_r.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__}function hooks_module_b(){for(var t;t=hooks_module_f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(hooks_module_k),t.__H.__h.forEach(hooks_module_w),t.__H.__h=[]}catch(r){t.__H.__h=[],l.__e(r,t.__v)}}l.__b=function(n){hooks_module_r=null,hooks_module_e&&hooks_module_e(n)},l.__r=function(n){hooks_module_a&&hooks_module_a(n),hooks_module_t=0;var i=(hooks_module_r=n.__c).__H;i&&(hooks_module_u===hooks_module_r?(i.__h=[],hooks_module_r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=hooks_module_c,n.__N=n.i=void 0})):(i.__h.forEach(hooks_module_k),i.__h.forEach(hooks_module_w),i.__h=[],hooks_module_t=0)),hooks_module_u=hooks_module_r},l.diffed=function(t){hooks_module_v&&hooks_module_v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==hooks_module_f.push(o)&&hooks_module_i===l.requestAnimationFrame||((hooks_module_i=l.requestAnimationFrame)||hooks_module_j)(hooks_module_b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==hooks_module_c&&(n.__=n.__V),n.i=void 0,n.__V=hooks_module_c})),hooks_module_u=hooks_module_r=null},l.__c=function(t,r){r.some(function(t){try{t.__h.forEach(hooks_module_k),t.__h=t.__h.filter(function(n){return!n.__||hooks_module_w(n)})}catch(u){r.some(function(n){n.__h&&(n.__h=[])}),r=[],l.__e(u,t.__v)}}),hooks_module_l&&hooks_module_l(t,r)},l.unmount=function(t){hooks_module_m&&hooks_module_m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{hooks_module_k(n)}catch(n){r=n}}),u.__H=void 0,r&&l.__e(r,u.__v))};var hooks_module_g="function"==typeof requestAnimationFrame;function hooks_module_j(n){var t,r=function(){clearTimeout(u),hooks_module_g&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,100);hooks_module_g&&(t=requestAnimationFrame(r))}function hooks_module_k(n){var t=hooks_module_r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),hooks_module_r=t}function hooks_module_w(n){var t=hooks_module_r;n.__c=n.__(),hooks_module_r=t}function hooks_module_z(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function hooks_module_B(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map

;// CONCATENATED MODULE: ./src/context/context.tsx








function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var ConfigContext = G({
  debug: false,
  opened: false,
  setOpened: function setOpened() {},
  size: "small"
});
var useConfig = function useConfig() {
  return hooks_module_q(ConfigContext);
};
var ConfigProvider = function ConfigProvider(_ref) {
  var children = _ref.children;
  var _useState = hooks_module_h(false),
    _useState2 = _slicedToArray(_useState, 2),
    opened = _useState2[0],
    _setOpened = _useState2[1];
  var _values = {
    debug: false,
    opened: opened,
    setOpened: function setOpened(value) {
      return _setOpened(value);
    },
    size: "small"
  };
  return y(ConfigContext.Provider, {
    value: _values
  }, children);
};
;// CONCATENATED MODULE: ./src/utils/useembed.ts

var useEmbed = function useEmbed(opened) {
  hooks_module_p(function () {
    if (!opened) return;
    var win = window;
    var __curretScript = document.currentScript;
    if (!__curretScript) {
      var scripts = document.getElementsByTagName('script');
      __curretScript = scripts[scripts.length - 1];
      console.log('scripts', scripts);
    }
    var dataUrl = __curretScript.getAttribute('docq-host-url');
    var __URL = dataUrl;
    if (!__URL && !win.__Docq) {
      throw new Error('Docq: host url is not defined');
    }
    __URL = win.__Docq;
    var dataContainer = document.getElementById('docq-data-container');
    dataContainer.innerHTML = '';
    var frame = document.createElement('iframe');
    frame.setAttribute('src', "".concat(__URL, "/widget?embedded=true"));
    frame.setAttribute('style', 'border: none; width: 100%; height: 100%;');
    dataContainer.innerHTML = '';
    dataContainer.appendChild(frame);
  }, [opened]);
};
;// CONCATENATED MODULE: ./src/components/embed.tsx






/**
 * Embed title
 * @returns JSX.Element
 */
var Title = function Title() {
  return y("div", {
    className: clsx_m(src_components_embed['embed-title'])
  }, y("p", null, "Docq Public Chat"));
};

/**
 * Embed close button
 * @returns JSX.Element
 */
var CloseButton = function CloseButton() {
  var _useConfig = useConfig(),
    setOpened = _useConfig.setOpened;
  return y(k, null, y("div", {
    className: clsx_m(src_components_embed['close-button-container'])
  }, y("button", {
    className: clsx_m(src_components_embed['close-button']),
    onClick: function onClick() {
      return setOpened(false);
    },
    "aria-label": "Close"
  }, "\xD7")));
};

/**
 * Embed container, Used to render the iframe
 * @returns JSX.Element
 */
var Container = function Container() {
  var _useConfig2 = useConfig(),
    opened = _useConfig2.opened;
  useEmbed(opened);
  return y(k, null, opened && y("div", {
    className: clsx_m(src_components_embed['embed-container'])
  }, y("div", {
    className: clsx_m(src_components_embed['embed-header'])
  }, y(Title, null), y(CloseButton, null)), y("div", {
    id: "docq-data-container",
    className: clsx_m(src_components_embed['embed-body'])
  }, "Connecting to Docq...")));
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/components/icon.css
var icon = __webpack_require__(4915);
;// CONCATENATED MODULE: ./src/components/icon.css

      
      
      
      
      
      
      
      
      

var icon_options = {};

;
icon_options.setAttributes = (setAttributesWithoutAttributes_default());

      icon_options.insert = insertBySelector_default().bind(null, "head");
    
icon_options.domAPI = (singletonStyleDomAPI_default());
icon_options.insertStyleElement = (insertStyleElement_default());

var icon_update = injectStylesIntoStyleTag_default()(icon/* default */.Z, icon_options);




       /* harmony default export */ const components_icon = (icon/* default */.Z && icon/* default */.Z.locals ? icon/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/static/icon.svg
var static_icon = __webpack_require__(6576);
var icon_default = /*#__PURE__*/__webpack_require__.n(static_icon);
;// CONCATENATED MODULE: ./src/components/icon.tsx





var MessageIcon = function MessageIcon() {
  var _useConfig = useConfig(),
    setOpened = _useConfig.setOpened,
    opened = _useConfig.opened;
  return y(k, null, !opened && y("div", {
    className: clsx_m(components_icon['widget-icon']),
    onClick: function onClick() {
      return setOpened(true);
    }
  }, y("img", {
    src: (icon_default()),
    alt: "docq widget icon",
    width: "45px",
    height: "45px"
  })));
};
;// CONCATENATED MODULE: ./src/components/index.ts


;// CONCATENATED MODULE: ./src/widget.tsx



var Widget = function Widget() {
  return y(ConfigProvider, null, y(Container, null), y(MessageIcon, null));
};
;// CONCATENATED MODULE: ./src/index.tsx


var container = document.getElementById('docq-widget');
container.innerHTML = '';
D(y(Widget, null), container);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsQ0FBQ1UsY0FBYyxRQUNiVixDQUFBLENBQUNxRCxTQUFTLE1BQUUsQ0FBQyxFQUNickQsQ0FBQSxDQUFDeUQsV0FBVyxNQUFFLENBQ0EsQ0FBQztBQUVyQixDQUFDOztBQ2RnQztBQUNDO0FBRWxDLElBQU1PLFNBQVMsR0FBR3ZDLFFBQVEsQ0FBQ2EsY0FBYyxDQUFDLGFBQWEsQ0FBZ0I7QUFDdkUwQixTQUFTLENBQUN6QixTQUFTLEdBQUcsRUFBRTtBQUN4QndCLENBQU0sQ0FBQy9ELENBQUEsQ0FBQzhELE1BQU0sTUFBQyxDQUFDLEVBQUVFLFNBQVMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Z1bmN0aW9uLXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VtYmVkLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29uLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2luZ2xldG9uU3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pY29uLnN2ZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbWJlZC5jc3M/MzA4NiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL2Rpc3QvaG9va3MubW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0L2NvbnRleHQudHN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy91c2VlbWJlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbWJlZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWNvbi5jc3M/NWYyYiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjYuMTInIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgaW5kZXgsIHZhbHVlKSB7XG4gIGlmIChpbmRleCBpbiBvYmplY3QpICRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCduYXRpdmUtZnVuY3Rpb24tdG8tc3RyaW5nJywgRnVuY3Rpb24udG9TdHJpbmcpO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgJHRvU3RyaW5nID0gcmVxdWlyZSgnLi9fZnVuY3Rpb24tdG8tc3RyaW5nJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAyMCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIG1hcGZuID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihPKTtcbiAgICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmIChtYXBwaW5nKSBtYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSkge1xuICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQygpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IgKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBhcnJheVNsaWNlID0gW10uc2xpY2U7XG5cbi8vIGZhbGxiYWNrIGZvciBub3QgYXJyYXktbGlrZSBFUzMgc3RyaW5ncyBhbmQgRE9NIG9iamVjdHNcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIGlmIChodG1sKSBhcnJheVNsaWNlLmNhbGwoaHRtbCk7XG59KSwgJ0FycmF5Jywge1xuICBzbGljZTogZnVuY3Rpb24gc2xpY2UoYmVnaW4sIGVuZCkge1xuICAgIHZhciBsZW4gPSB0b0xlbmd0aCh0aGlzLmxlbmd0aCk7XG4gICAgdmFyIGtsYXNzID0gY29mKHRoaXMpO1xuICAgIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogZW5kO1xuICAgIGlmIChrbGFzcyA9PSAnQXJyYXknKSByZXR1cm4gYXJyYXlTbGljZS5jYWxsKHRoaXMsIGJlZ2luLCBlbmQpO1xuICAgIHZhciBzdGFydCA9IHRvQWJzb2x1dGVJbmRleChiZWdpbiwgbGVuKTtcbiAgICB2YXIgdXBUbyA9IHRvQWJzb2x1dGVJbmRleChlbmQsIGxlbik7XG4gICAgdmFyIHNpemUgPSB0b0xlbmd0aCh1cFRvIC0gc3RhcnQpO1xuICAgIHZhciBjbG9uZWQgPSBuZXcgQXJyYXkoc2l6ZSk7XG4gICAgdmFyIGkgPSAwO1xuICAgIGZvciAoOyBpIDwgc2l6ZTsgaSsrKSBjbG9uZWRbaV0gPSBrbGFzcyA9PSAnU3RyaW5nJ1xuICAgICAgPyB0aGlzLmNoYXJBdChzdGFydCArIGkpXG4gICAgICA6IHRoaXNbc3RhcnQgKyBpXTtcbiAgICByZXR1cm4gY2xvbmVkO1xuICB9XG59KTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgRlByb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyAxOS4yLjQuMiBuYW1lXG5OQU1FIGluIEZQcm90byB8fCByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIGRQKEZQcm90bywgTkFNRSwge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKCcnICsgdGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgdGVzdCA9IHt9O1xudGVzdFtyZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZiAodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJykge1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJEdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbicgJiYgISEkR09QUy5mO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICAkR09QUy5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyBDaHJvbWUgMzggYW5kIDM5IGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBmYWlscyBvbiBwcmltaXRpdmVzXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zNDQzXG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9ICRmYWlscyhmdW5jdGlvbiAoKSB7ICRHT1BTLmYoMSk7IH0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIEZBSUxTX09OX1BSSU1JVElWRVMsICdPYmplY3QnLCB7XG4gIGdldE93blByb3BlcnR5U3ltYm9sczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gICAgcmV0dXJuICRHT1BTLmYodG9PYmplY3QoaXQpKTtcbiAgfVxufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwidmFyICRpdGVyYXRvcnMgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIElURVJBVE9SID0gd2tzKCdpdGVyYXRvcicpO1xudmFyIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJyk7XG52YXIgQXJyYXlWYWx1ZXMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbnZhciBET01JdGVyYWJsZXMgPSB7XG4gIENTU1J1bGVMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogZmFsc2UsXG4gIENTU1ZhbHVlTGlzdDogZmFsc2UsXG4gIENsaWVudFJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NUmVjdExpc3Q6IGZhbHNlLFxuICBET01TdHJpbmdMaXN0OiBmYWxzZSxcbiAgRE9NVG9rZW5MaXN0OiB0cnVlLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogZmFsc2UsXG4gIEZpbGVMaXN0OiBmYWxzZSxcbiAgSFRNTEFsbENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxGb3JtRWxlbWVudDogZmFsc2UsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiBmYWxzZSxcbiAgTWVkaWFMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgTWltZVR5cGVBcnJheTogZmFsc2UsXG4gIE5hbWVkTm9kZU1hcDogZmFsc2UsXG4gIE5vZGVMaXN0OiB0cnVlLFxuICBQYWludFJlcXVlc3RMaXN0OiBmYWxzZSxcbiAgUGx1Z2luOiBmYWxzZSxcbiAgUGx1Z2luQXJyYXk6IGZhbHNlLFxuICBTVkdMZW5ndGhMaXN0OiBmYWxzZSxcbiAgU1ZHTnVtYmVyTGlzdDogZmFsc2UsXG4gIFNWR1BhdGhTZWdMaXN0OiBmYWxzZSxcbiAgU1ZHUG9pbnRMaXN0OiBmYWxzZSxcbiAgU1ZHU3RyaW5nTGlzdDogZmFsc2UsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IGZhbHNlLFxuICBTb3VyY2VCdWZmZXJMaXN0OiBmYWxzZSxcbiAgU3R5bGVTaGVldExpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBUZXh0VHJhY2tDdWVMaXN0OiBmYWxzZSxcbiAgVGV4dFRyYWNrTGlzdDogZmFsc2UsXG4gIFRvdWNoTGlzdDogZmFsc2Vcbn07XG5cbmZvciAodmFyIGNvbGxlY3Rpb25zID0gZ2V0S2V5cyhET01JdGVyYWJsZXMpLCBpID0gMDsgaSA8IGNvbGxlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gY29sbGVjdGlvbnNbaV07XG4gIHZhciBleHBsaWNpdCA9IERPTUl0ZXJhYmxlc1tOQU1FXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIHZhciBrZXk7XG4gIGlmIChwcm90bykge1xuICAgIGlmICghcHJvdG9bSVRFUkFUT1JdKSBoaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmICghcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuICAgIGlmIChleHBsaWNpdCkgZm9yIChrZXkgaW4gJGl0ZXJhdG9ycykgaWYgKCFwcm90b1trZXldKSByZWRlZmluZShwcm90bywga2V5LCAkaXRlcmF0b3JzW2tleV0sIHRydWUpO1xuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG4uZW1iZWQtY2xvc2UtYnV0dG9uLWNvbnRhaW5lci1FSHhXMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZW1iZWQtY2xvc2UtYnV0dG9uLUR2Z21fIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogcmdiKDIxOCwgNTUsIDU1KTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5lbWJlZC1jbG9zZS1idXR0b24tRHZnbV8gYnV0dG9uIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZW1iZWQtY2xvc2UtYnV0dG9uLUR2Z21fOmhvdmVyIHtcbiAgY29sb3I6ICNjY2M7XG59XG5cbi5lbWJlZC1lbWJlZC1jb250YWluZXItQ3R2djkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm90dG9tOiAzMHB4O1xuICByaWdodDogMzBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5lbWJlZC1lbWJlZC1oZWFkZXItRWRSOFkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5lbWJlZC1lbWJlZC10aXRsZS1tOTE2MiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG4uZW1iZWQtZW1iZWQtYm9keS1nTDgyMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvZW1iZWQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uY2xvc2UtYnV0dG9uLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZS1idXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMjE4LCA1NSwgNTUpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiBidXR0b24ge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogI2NjYztcXG59XFxuXFxuLmVtYmVkLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm90dG9tOiAzMHB4O1xcbiAgcmlnaHQ6IDMwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmVtYmVkLWhlYWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5lbWJlZC10aXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxufVxcblxcbi5lbWJlZC1ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNsb3NlLWJ1dHRvbi1jb250YWluZXJcIjogYGVtYmVkLWNsb3NlLWJ1dHRvbi1jb250YWluZXItRUh4VzNgLFxuXHRcImNsb3NlLWJ1dHRvblwiOiBgZW1iZWQtY2xvc2UtYnV0dG9uLUR2Z21fYCxcblx0XCJlbWJlZC1jb250YWluZXJcIjogYGVtYmVkLWVtYmVkLWNvbnRhaW5lci1DdHZ2OWAsXG5cdFwiZW1iZWQtaGVhZGVyXCI6IGBlbWJlZC1lbWJlZC1oZWFkZXItRWRSOFlgLFxuXHRcImVtYmVkLXRpdGxlXCI6IGBlbWJlZC1lbWJlZC10aXRsZS1tOTE2MmAsXG5cdFwiZW1iZWQtYm9keVwiOiBgZW1iZWQtZW1iZWQtYm9keS1nTDgyMWBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaWNvbi13aWRnZXQtaWNvbi1qRkRKRCB7XG4gIHdpZHRoOjY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZGNkYztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAzMHB4O1xufVxuXG4uaWNvbi13aWRnZXQtaWNvbi1qRkRKRDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi5pY29uLXdpZGdldC1pY29uLWpGREpEOmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDAuNTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2ljb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud2lkZ2V0LWljb24ge1xcbiAgd2lkdGg6NjRweDtcXG4gIGhlaWdodDogNjRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFkY2RjO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMjBweDtcXG4gIHJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ud2lkZ2V0LWljb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuXFxuLndpZGdldC1pY29uOmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIndpZGdldC1pY29uXCI6IGBpY29uLXdpZGdldC1pY29uLWpGREpEYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbihcIlxcblwiKTtcbiAgfTtcbn0oKTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzO1xuICBpZiAocmVtb3ZlKSB7XG4gICAgY3NzID0gXCJcIjtcbiAgfSBlbHNlIHtcbiAgICBjc3MgPSBcIlwiO1xuICAgIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gICAgfVxuICAgIGlmIChvYmoubWVkaWEpIHtcbiAgICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICAgIH1cbiAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgfVxuICAgIGNzcyArPSBvYmouY3NzO1xuICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgIGNzcyArPSBcIn1cIjtcbiAgICB9XG4gICAgaWYgKG9iai5tZWRpYSkge1xuICAgICAgY3NzICs9IFwifVwiO1xuICAgIH1cbiAgICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgICBjc3MgKz0gXCJ9XCI7XG4gICAgfVxuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cbnZhciBzaW5nbGV0b25EYXRhID0ge1xuICBzaW5nbGV0b246IG51bGwsXG4gIHNpbmdsZXRvbkNvdW50ZXI6IDBcbn07XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgfTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWYsbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25EYXRhLnNpbmdsZXRvbkNvdW50ZXIrKztcbiAgdmFyIHN0eWxlRWxlbWVudCA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZixuby11c2UtYmVmb3JlLWRlZmluZVxuICBzaW5nbGV0b25EYXRhLnNpbmdsZXRvbiB8fCAoXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZixuby11c2UtYmVmb3JlLWRlZmluZVxuICBzaW5nbGV0b25EYXRhLnNpbmdsZXRvbiA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSwgb2JqKTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB3aWR0aD0nNjAuOTk5OTY2cHgnIGhlaWdodD0nNjEuNzMwMzc3cHgnIHZpZXdCb3g9JzAgMCA2MC45OTk5NjYgNjEuNzMwMzc3JyB2ZXJzaW9uPScxLjEnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNlICUzY2RlZnMlM2UgJTNjaW1hZ2Ugd2lkdGg9JzQ2NCcgaGVpZ2h0PSczOTcnIHhsaW5rOmhyZWY9J2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBZEFBQUFHTkNBWUFBQUNoVFNBcEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUlBQkpSRUZVZUp6czNYZDhZMWVkUHY3bnVaSXR5VE9abVV3eWt5bnVUZ2drSkFFQ29ZUUFZV2xoNlNXMFVBSUVXTUxDQXZ0bGFiK3dMQ3dzWlRjc0pTeFoyZ0xMMGhZSUpSRHEwa0lKb1NlUVlrdXlaNXpKdEV5emlxVjdudDhmMHJXdlpjbVdaRW4yMkovMzY2VVpTN3Jubm5PdnBQdTU1OXh6endHTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqMmtVU3cvOVh2bTdNU3VRdGR3R01NV3ViQlVsampER21EcExZYk5DMFlHdFdFdnN5R21NNkloejhTQ3I4K2gyNEkrSGdFc2dpNFh0K053QjBxVmowNHNwNTJKRFpnaTFUNFRUR3JBUVdRSTB4YlJVRXpvcWdHWjNJVEd4VnBIQ0d4UHZMdWJzQjNDWmlNNFFZQUJJcWdNaEJPRUpnd2tXOEd6eDZQeG5vSHJpTlpISFpOc2lZTWd1Z3hwaTJxUXllazVyc21jNU9ueVA1anhGeElZVXpRV3hFcVQvR29zY2pBUk1FZmtMb1N4c1MvTUZtamh4dTd4WVlVNXNGVUdOTTIwZ2lTVW1LcGJQcGN3SDNUTUU5RnVBUTVuWmlWUG5COHY4SS9jM1E4L0xDS2hENEdZVFBiZXpoNXl5UW11VmdBZFFZMDNKQjRBU0FneHJkZUNqSGkrbmNxMEhlbzlyaW9iOXJIWk1VV3E3aTdnRmQ0MFc2M2pnUUc3aTVNbTlqMnNrQ3FER21wY0tkaFNieUU4UE9GVi9xcEJlUTJOTENiQnhLeDY4Z3J6U0pmeHFJRDMvQ2dxZnBGQXVneHBpMlNPVlQ5NUJmZkNmQXh3R0l0SGoxUVkwMFhCdk55T09yaCtQRFY3YzRMMk9xc2dCcWpHbUowUFZPN3NydkdpbTZ3dHNCUGFNVFdTTTRsZ21INmVIbGc0bVJ6M1lnWDdQRzJVaEV4cGlXbXN4TzloYmM5RnNFOTlRbHJzb0I4TXYvTDlZc1czcWYyQ2lIRDZaeXFZdVdtTGN4aTdJQWFveHBDWkk2cU5HTjA4aTloc0N6Q0VhWHVFb1BjNXQrd3gySjVtUWRlaDhnVHBUenIwcmxVOVU2TEJuVE10YUVhNHhwQ1VsTTU4WXVsZkIrQU9zYVNnc1ZJUndpT1FaZ1ZFS0dVQy9JMHdGc0J4Q2JsMlQrOGF1eU4rL1hvNG51Wi9TeEwyczljMDA3TFBVTTBSaGpBQURqMCtObnlPbTFJQnNKbmxNQ2Z1UFJ1ODRqZnVMSGVXc1UwY085NlBYM1kzOHNtODl1ZGE1d2pnUCtDdEFUQ1BhRzBsWUcwZUMrVVlkU3pmV3YvVnpoMlFBK0J0anRMYWIxckFacWpHbEtPQ0JKNms1bHg5NEc0SFgxcndBMzBlUDdZdkhFTmR1NWZkOWlpNC9uYjcrbjcvT2ZBRHdCcFFCWnJSWUtsQUlvVUdvQ3ZxVUxzVWYwOXZUdXNnQnFXczJ1Z1Jwam1oSU9ScnVteDA0SDhQUjYwZ2txQ3ZqZlNGVFBIRXdNZnpRY1BJT1pXcXJOMk5JZk8vVlBzVVRpRWdCdmduQUlzNEd5VW5CY0U0RFRpNWgrVWxCZW04M0Z0SklGVUdQTWt2bEZYQUJnc0o1bEtmNHdUcjYyUDNicW4rYTlSeXI4Q0Y0UEF1b083c2dNOVl5OEM4US9Bc2lqMUV1M2FqYmxCeVJkSktuVjk2RWFZd0hVR0xNMGtyb2M4VURVYzBsSXVqa0N2R2xIWWpqZFNCNUJRQTFxa0lPSjRROUQrQUptbTNJcm0yYkRZK28rY0dKNmRLWkhydFZDVGF0WUFEWEdMTWtkdWVRT0NPZlVzV2dXNUVmNzE0M2MwR3hlUWEyVTVIUWswdlYyUUtQbHR5cURhUEMzRCtKRXY4Z0hCK250T3FocEZRdWd4alFvZkgydThwcGR0V3QzcTEwZUhDTFF1OWh5QW00aUkxOXRWYjc5OGY1UjB2c2txdGQ4UzU4UEZBVEwrN1VxWDJNQ0ZrQ05xVk8xNEZoNXpXNmhHczVxQ2F5ViswRlF2NmdUVUh1Z2cvSjludnJPUUh5Z29hYmJ4ZENMZkFYUWJ0UTRsaEVzdjY1N1QyaGljeXZ6TnNidUF6V21EcFVUUTFlODNuVW43dXdTMUpOSFBocERyRWd3Y3dwT3lZU1hENjdocmJZbVJFSTdVQnAxS05pdWViZVhVSndpOVd1U3RYck9OcVdydXl1Wnl4Ui9SMkpubFh3WittdHJvVkRvQTNDd2xmbWJ0YzBDcURFTHFCWTREMnAwNDFTV3AvdkVXZWxNY2dCMEp6cndSRW9uaTF5WFE2WkFZSDhTWXhQSnFkSGJRTyszU09DV0lRNGRXaTNCTTNUL3A1ZktqbTB0dnh6TWpoS2VITHYwQm5FRWlOelI2bkpzeC9aY2ttT3BoWXBhTGtDUDUzdFdBelV0WlFIVW1Db3FBNmNrTDVsUG5rWmZGeDdLNHE4SW5RdmhGQkFKZ0N3dlBHZFExdEpyQU9RT0lhcy9Kek9qUDRtUTMreUxEMTFQc3JnTW05VXlvWnAwRjRSTk0zT2gxQjcwUFljSURyVTRiNUIweWN6b1ZQbXRtazNrb3FLazM5T0svSTBKV0FBMXBrSTRlSmJHZDAwUHByTmpUd2J3YkZGbkVlekdiTEFJaG81ajZERTNpQkNiQUQ0UXdBTjlwOHZTbWRFdmpVK05YdDIvYnVUWEhkeXNsZ25mVG5JbjdveVdUaUpLYjZGR0VDUGdZazdaVnBXaFloU2tZbkFLVTIxUkFJUW81OVB1QlRVdFpaMklqQWtKRHN3a05hbkprMU81MGVkTC9tY2M5QzRDNTVhRFp5QUlHQjdtQm8vYWc1d1RKNHE4ekllK1BaWVovZGM3TlhaS083ZW4zVTdCS1FVSWRRUkdyYzhSOFZia09hK2pGdWNOTkY5TjN2TzhvNjNJMzVpQUJWQmp5c0sxbW1RK2VmZnBUT2FkNVpsRkhsUmxhaTVXZWRSNkg2aHMzaVJQSXZDYVRGYlhqRTJQemR4RGViejExQ1U1RFNJWWlxK3krWFptbXdWc2pmaTRXNnZ6VHlvWko5QlhJMzhnYUVtbmpzcFR5Ni9CbXJYTkFxZ3htQnM4MC9uMEdmTGRlMFMrbU9BSmpheW14dXNMQmRQN3M2RC9UazRuN3dYTTcrVzdVbFdVY3hLMUIzWW5BQkhzY3NRaldsME9GWFM2d0FlRThxcUIreloyT3d1Z3BxVXNnSm8xTHh3OHg2Ykh6dkdMeFg4bjhMaG1WMWZsVVNrNDBMdnlzek5SZEY4ZXo0NDlwTWs4bDVYRUpFcmowbFplL3cwR00vQUJTTkNUMHJuMGNPdnlsZWY1ZUR5QmZ0UStlU2tWUlByamlSaTJKbHpUVWhaQXpabzNFenh6WTZlem9QZXcrWnBTWlExem9ZTjZVQ01ON29zY0trcWZuc2lQbnRWazNzdkc4N3cvbGdjeldLajUyUkhvZDY3NHhLWGtGUjdFWVNJL01TVHBPZUczYXlUejRYbS9hUFU5cU1aWUFEVUd3Qzd0T29rKzNnRGlrUTBrQ3dmSjhMMlA0VUFhL0YvdDREMm4xeTZCL29LUHE1SktiZ0tPbit1aEEvR0JDWUsvS1QrZFYyYUNFY3h1NXl2VCtmU1pqZVlSRHB3a05hR0poTzhLTHdGdzkxQysxZmVYc005eitrTjRYWTNtYjB3MUZrRE5taWNwV3Nqa0x3YjFqQWFURXNDMGdOc0UvQXpBL3dHNEhzTE5FQTZqTkZOSTdkdGJadGNCbEFNc2dRY3I0LzgvNFBpWnY1SmtFY0wvbFovVzJzWmcrd2Q5di9oZmxVMjV0Y1lRcmd5YzVYMFNLZWFtbnluaFpRdmtHVjdMNytJOUoveTVvWTB5cGc0ci9zZHBUTHRONU1mT0xoYmQ1MERlWS9HbFoyUUIvUjdrdHlEdnVvZ2lFeVJKa0VVV3V3QU1DdjVESUZ3azZOeFFMOTdnWUYvclZoZEtPQklGSHRHL2J1U0dXa01JcmpTN01ydDZwNUgvQVlIVGFpd1MxTkM5OHBNYlBFYWVNWmdZVEFJTDF3b3I1Z1dOcFhOalQ1UERlMEZzcTZOb1BvRFhEdldNL0h2ZEcyTk1uU3lBbWpWTlVpU1ZHYnNDeEJVTkpMb1o0QWZZRTdsbWtJTUw5dXhNS3JtSk9mZFlDYThDY0Y2d0JsVC83UVhOdkI2a1R3MzJqRnhLMGgwdjQrY21zNk52Z1BBTzFONit1YThMTjNuZ0cvcDdocjZ4MlBaSjZrNFdrdmRnVWMrSGNHbHBjSW9xNjV5ZjR4OWlIcC9RNlB5anh0VERBcWhaMDVMWjVDQ2N1d2JFMlhVczdrTzRMaHJsRy9waXczK29mSE9oUUxkSHQyL05aUGdPRXBlaTlxV1Q0RnFwQnlBTGVvOGRTZ3o5NkhpcGhVNWtKbllXTWYwOXpGNlhYRGk0bGVRQmZOTWp2eEtoZnRVZE8yRnlDN1prQUhBZjlpVXl1Y3dXT1owTjZ1R0FleHpBY05Qdll1dlB5ZU9yaHVQRFZ6ZTlVY1lzd0FLb1dYUENnUzZWSFh1eGs3dUtZTmNpeVp5QUw4Y1FmODNPbnAwVHplU2JWREt1ckhzdmdaZGpmb2VqVUQ1eUJLTUN2alNVR0g0MnljTHhVZ3ROWmNkZTVPUStYTjZmdFpxcnF4SXdBZUVXQXVPRWZBZnVJSEVhU2dNbEpCWkxYMlY5MzJmQ2U5b1FoMW95QnE4eGxTeUFtalVuQ0VaSkpUY2g2ejRPNE1sWXZEYnp5NmpYZlVsZnZPLzJwZVI5VUtNYkQyZjBlWkNQUXVpYTRKenlRVVdDRVFpSEk4QWpqNmN4Y3ljMTJaUFBaTDlhN3MyOFdBQnRKTUNHYStmMUxKOEN2R2NOOVF6OW9vNWxqV21LOWNJMWE4N01UQjRGRGdzNE4zaTVaZ0xoa0VkK2FLbkJFd0EyYytRd0dYMnJoUDIxOGl6ZjlnRVFHNXhYVjlQeWlyR0RPektndmxGK1duazdUNlZxdC93RWY3dnlJeHhrNnd1ZXdtRlFiN1hnYWRyTkFxaFpVOEs5UGVtN013RHRXQ3dKb0Y5MnhlUGZhbFVaQmhJRHZ5UjRMV3FOa3hzYXBGNnEyYXQxNVJMeVRhUmFiQ3poYXN0VXlWc0hDTDVwTUQ3eTZTYktZRXhETElDYU5hUHlPcUp6T3EzS0lQRnowMEFGa0QvY3dSMzdXMVVPa282ZXZvdlNMUmFMMEJtUzZwbHRaRVVvRHdMeG9OQkx0UWM0cUszV0FQMkx1UU1lL242Z1orZ3FrblhzVzJPV3hnS29XVE1xN2llTWlEZzVlRm96alppaEY1blg0M2Fwb3NRTktnM0NQcE5WNkcrRi91cmRqZDNyVzUxL3V6RHJYd2p3aVZoOEtNT1dFbkFiZ1ZjTUpVNzk1UEhRMmNxc0RoWkF6Vm9WQmJDeC9IZnRBeTUxZ0dUTDd5Rk14RGJ0b1hSVEtQL3FaU0EyS3AvZjNPcjgyK0dBRG13UWVBazRzMTg3SVFmZ2M5R0luakxZTS9MbER1WnJEQlpzdmpKbXRib1RkMFlKZFFYVFJkWmFUdUJCZGV1dVZ1ZS9HWnR6UjNIWHJsRFVyTHpXTjNPYmkyTzBHOGVCbzlsRGp4VDBLQzZ5VDJ1b1BJRllOTDJBRzBGK1pIMTgvZjlzNWRaakRlWm56SkpaQURWclJuaEFBZ2NuZ01YRkV5RVJ5VWJhMFZKRGVmVExZU01jTUdmZUwrWFBMTVZjRy9KdnFjbnMyRUJlN3JVRW0ybHVybWZBaGRMMWFPQk9ncjhHZFUxUEhOZHU0OGplSnZJenBpVXNnSm8xYVR1Mit5bU5UUWRoQ3JVTzRNUkdSZkluQXRqZHl2d1A0bUJNd2ttaFRHc0ZrSUl2ZjBWM2lKRVVTZWVTbDJCMll1czZFK0pPUWw4VGVBZkpoS1NUeTgyL1hRQjhBZ1dKR1JDSEFiYzdBbS9NOC9UNzN0aHdrcXpqNU1lWU5yTUFhdGFNaXM0bFJYaklMWEQxVXdCSTRHVEoydzdnVDYwc1N6NTMrRVFBUTVYNXpTc0VVZWhXMTRvT0Z1UFQ0NmM3NmZsc29ObFdVSUhnUitJOTY5KzlqZHVtZ05Lc09DbWtvZ2trSWc1TzI3SGRCK0Jic0RRcmxYVWlNbXNTU2I4ODVSaXc4SUUvNGJ1WnNWMWJwa0NkQnVqMGNKR3FMT1lvM09Vbi9LbFc1OThxa3JwZHNYZ0pnVk1iUzhsZnhEeDhMQWllUUdsYXRDRU81Ylp4MjlRTzdzaVF6RnZ3TkN1WkJWQ3psdDFaL3IvYVhKMnpBeTVJajVQVXNvNDhwVGt1ZWQ1aTF3c0ZGVVhjM28vK0k2M0t1OVdTK2VUREFMd1FzL3R3OFZ0SXBBT0VydHFSR0JsdmIrbU1hUzhMb0diTm1SbU5pTjV2QUN4VXV3dTYrRHcwblI5N1pLdnlUU085elRsZEdIcXI2dFJmQkF2dytQdVZPaWpBblJvN2hiNytEc1FwNVpmcUcveUEvUEdHeEluWHRyVnd4blNBQlZDelppWGlpVjhEdUxIODFGVzhyZEQvTWVmdytyVFNKemFUVDZuR1dSb0ZhWi8ybmFDcy8wb1NGNFRXWDYzV1JrQ0hQZWUxOU5wcksyVnplRHlJNEVTZ3JzRUxKTzJuaDQrZHhKTldiSzNhbUhwWkFEVnJUdENaYUJ1M1RSSDhHbW9Hc05tbVhRSVA5clBGdDBtSzFKdFBPSENTbEtUdXFlelI1d1A0V3dDeEd2bUczY1lFLzF4dmZwMlV5cWFHSlBjaUFQSHlTM1YySU9JMUE3SGg3N1dyWE1aMGtnVlFzNlo1WHZTcmduWURxQlVZR2ZyalplbGM4aDlxQmRFZ1lGWUdUcUEwRjJnNk4zYUo1UDRSd0xxSzljL3ZmUXNkcGJ3dkRuQ2c1WU00TE5VZTdWa0hGVjhPOEg2TnBkUnUwdnRQa3MwTU5tL01pbU1CMUt4cGZiRytNWWpYbFovV3Fva0dJazd1TGNuczJDY244cU5uelZ1d0hERERnVk5TSkpWUDNZTVp2ZEU1dlF2a1NhRjhGcWkxOFE5UmRsL1QxRWExV1M0LzlWQUpsNkwyU1VjMVBzQlBEeVlHajV1NVRZMVpqRTJvYmRhOGljelllUVhwR3l3TkxsL25iMEs3Ulh5a3krTlh1N3JYaloyQ1V6TGgrMHduTkpFbzVBdjljSGdDcGVlRE9ET2NlSkY4Uk9sakF6MGpMeWRaYUdhYjJpV3Q5SWt1Vy9oRWVjRDR1Z240ZFJlNm45VFgwOWZTQVNtTVdVNFdRSTBCa015TXZndkE2eHBPS093QjhXY0lhVkw3VlJvZU1DYWduOEJaZ29ZWG16S3QybG9GZkhpNForVHloc3ZUWnVuczJIT2RkRFZtcjMzV0kwZmk4c0hFeU1mYlZTNWpsb01GVUdNQTdNN3M3c3NyOTAwU1o2R3VKdGFHT0RSK3VTUVpFWjdSdjI3a2hoYVZZY25HcDhaM0ZGbjRQSUVIbzg3eGF3RUF3clViZWpZOXkzcmVtdFhHcm9FYUEyQm56ODRKejhPN0pJUVA4b3Yxa2hXcTM0WWlsSUttSy8vZHpPOXN5Q2ZlbDFSeVd4TnBXMDVTeEdmaDZZRHVYMzZwcnVBcFlaOFh3WlVXUE0xcVpBSFVtTEpvUFBadEFqOUYvVFhQY0EvYXltRHFsUi9OMUdLRGUxSWZ4S3ovcGxhT2d0U3NYZE5qWndCNEdjR3VSdEo1MERYOXNlRWZ0NmxZeGl3ckM2REdsRVVROFVBRjgwcFdCc2VGc01waktZaHlFQlY0V1RxWGZONFMxN2Nra3JvTHZwNFBORHdtOEMyTWRyMlA1SFE3eW1YTWNyTUFha3paZERiN1VBa1ByL0pXSy9zS1ZHdjJyWHdlQkdFSElPYWtLOGFuUmh1ODU3SjEwcm4wK1FTZjNXQXlYK0RIQm1JRE43V2xVTWFzQUJaQWpRR1FVbXE3RDcyTTVNbVl2WGJaRG5OR09BcTlWbk01QW4xRjRzUGp1ZkdSTnBXcHBqMjZmYXRVZkJXQTdZMmtFM0I5UEJIL1JKdUtaY3lLWUFIVXJIbVNpSXg3Q3FDSGxGOWFxQmsyWEZ0VWpZZEQ5YzVGWVpYcnJ4VkVnei9POVYzaDNYdTFkLzFNbWR0TWtwZkxlaGNEZkV4akNYRW9JcjVuQjNmc2IxUFJqRmtSYkVKdHMrWWw4OG03RWZxYlVBZVp4WUlUSy82djlmNHM0YUNJNnluY0NLQWZ4RE1CSk9vc1luREx5Sk16bVdNM1M3cWlZbkx3dGhpZkhyKzc1UDRHWkt5UmRDSyswWjhZdW03eEpZMDV2bGtBTld1YXBFZ3FNMVk1VXRCQ1dFcUhmU0J1SlJRQnNGWGlDWVE4QVNJeExUQkRhRC9ncFVIZDdIbTQvb1FZYnRqTWtjTkpKZVBNK0VXUmw5V1pYMUNicGFoWEp6UEpHd0I4cmFrTnJwT2thQ283OWx5UVo5U2JCQUFGN1lxSzc3ZU9RMll0c0lFVXpKcVd6Q1R2RDdpdllQWWEzK0lEQkFnSFJmNUxuUG84NHozWjNIVHVKRGljQWlMaFFiNXpQQnIxb3ZzWjQxMDdzZk5ZdGNIVDA3bjBzSFBGYjZMK25xM2h3UmorUWtZZU81Z1lUTmFadG1IalU2UDNLMUpmSnRqYlFESUJlUGRnWXZoTkszVU9VMk5heVdxZ1pzMDZvQU1iam1RUFZYYVFXZXlrMG9INlhpUVIvZWlPMlpsUzlnSDRTNzM1bG1kcUdVdm5Sdi9XK2ZnOGlNMTFKQXRxb2dSd2R5Zi9QWk9hZk40TzdzalVtMis5OW1uZkNjY3lSLzZtd2VBSkFhUHcrQWtMbm1hdHNFNUVaczA2bWp2MGVBQlBhaWlSOEdjdzh1R2xURE1XWEw4Y2lJOThEOENiQWVRQUxCWjA1dHlUU3VDcHVVem1qZTNvVEpUSkgzbW9nS2MybU16M3lQOGFpZzNkMnVyeUdMTlNXUUExYTFJcW14cHl3cXRRZjBjZUNDb0l1bVl3UG5qOVV2TVBBdDlnei9CSFFYd0NwYW5CNmhtd0FjRnlKRjh6bmswK2JhbGxDZHVqUGV1YzR5VWtOalNTVHNEUDQzRjNkU2M2TnhtelVsZ0FOV3VPcENpY2V5R0JoZ1lub0hCN0pOcjEyVloxa0NrMzVSWVNjZjBqZ0I5aS92MmhWWXNSSkFlUThPSCtiV3g2N0p4V2xBY0FjdG1wUnd2dXNRMG15M2pFaDdmeDFMMnRLb2N4eHdNTG9HYk5tY2lNM1V0MEwyd3dXWmIwUHRiZjNYOXpLOG9RVExvdGlkdDQ2bDVHSXBjRHVBVU5kdXdqMk11aXJyNVRZNmNBYys4UGxjUnFqL0I3NFhWTlpzY0dCTHlPNEFsb1lDQUpBZGQyeHhOZmJhVGN4cXdHRmtETm1uSkFCelk0NnBVQWR6U1k5QmVKQkQ3VDZpYktZSDJEc2NFL2V4NytIc0xoME51MThxb2NvL2U4VEZaWDdkTytFNEwxQmNFeENOVGhSL2oxbVl5a2FFNjRHTUI1Rlhrc0prMTQ3MjFIWnlaalZqb0xvR1pOT1pvOTlBaUJqWFdRRVE0RHV2b1VEdC9acG1JQkFBYmlJOStneDNjamROL25Bb3RYQnRHbkhNc2VlZm5NbS9NREpDVjFKWldNUytxV0ZBblZScnZTdWZRRmxMdDBrVHdyQ2NEbkJ4T0RLMmJPVW1NNnllNEROV3RHK2JhVnp3QjRmQ1BwQkh4cGZlS0VTN2R5NjdIRmwxNmFTVTMyNUxMWmp4QzRCQTFPeEMxcGY4VHpYdE1kVDN3N2w4dXQ4K2hPZFQ1T0JiQU5IclpLMkFJZ1RxQUFjQnBDRHRSQlFyN0VpeG9ZVEtLY0lYN3ZSYUpQR1lnUGpEV1V6cGhWd3U0RE5XdkdrZHlSSndONFpDTnBKTzFIeFB2UFRnUlBBTmpCSFptSnpNVHJDNWcrdmR6SmFmR0JIY3BJbnV5ay84eGxwMzRoMEhNT1o0UFlDSlRXTW5jbHN5OEliT1pVT2tmZ2FndWVaaTJ6Smx5ekpremtKazZGYzY4QkVHOGdtVHpnSzBPeG9mOXJVN0dxNnV2cDIrMGg4bmNDSnRCNGFJc0JmQ2lCQzJhQ1o0a0ErSUtLbUoyd08veGV0V25XRnZMemFFL3M4dzJXelpoVnhRS29XZlVrZFJYOC9LVWd6bTRvSFhCN0pPcDljRG5HZFIzc0diemVBLzZ1M0ttbzBZNUx3WXd3bGJQQ2VBUzkwREtCaGlZRGw3RFBFNi9zWmUrQkJzdGx6S3BpQWRTc2VxbHM2bHdTTDJnd21VL2k0NzNkUTM5c1I1bnFNZGd6OG1VQTd5cy9iVFNJaG9OaE9EaDY1VWV6L1I5RThGclh3KzgybWQ2WVZjTUNxRm5WSmpYWkE3bkxHcjl0UlQrTngzcyt0dHdqNjZ6djJmQ3ZBSzdCM0lCWHoyQUxpMDI1VnM5NnFxWFk2M242OUJDSGNnMm5OV2FWc1FCcVZyVjhKdjlJVVU5dktKRndGeFM1Y2p1MzcydFRzZXEyaFZ1T2twSFhRUGhEK2FWR2dsNjl0Y3o2QjAwZy9vUjQ5RGNObE1HWVZjc0NxRm0xVWtwdEI5MXJ5aVByMUUzRXRlakJpcGtRdWpSdG1mY1dDSWZLTHkzbDlyUGdtbWo0K21qZDZ5T3dFM21jdUlUOGpWazFMSUNhVlVrU2xmV2ZDZUQ4QnBPbUl0SG9sU3V0aVRMYUUvMHhpTjlnNmZkdWg2K0ZCbVB2dXRDam1uQkhwTHZMK1M5YllobU1XUlVzZ0pwVktUV2RPaDNTWlNqTmNsSXZBZmg4ZjFmL2I5dFVyS1pGY3RQckJYUTNrMVpRQWNLZGtHNEc4Q3NJZjRDd0IwQWVjenNWVlk1dUZBaGU5d0ZJME10VG1kRkdwenN6WnRXeGdSVE1xak9oaVlTZnpWOHU4aDROSnIybHk4UEhTZGFxaVMwTFNaRlVkdXhaQk80YnZJUzVFMnpYU3JrYjVOY28vb1Jka2I5RWlwRzlYWWw4SVlkb1JOUGE2RWw5enVtZUFwNU00TUVMcjJ0T2NGM25nQ3ZUdWZSdmJTQUZzNVpaQURXclRqRlRmSlRBNTdHeHhzNGNvQS8zeGs5ZGNSTkM3OHFQRFF0NE1VdURRRlRldnptUG9HTVV2eGdCcitydkdmbDFqZFhlQWVBdkFMNDdxY21QVE9leVQ1TFRtMENlZ2JuVHFvWHppS0JVQy9VSjlFbitzd0c4ZlNuYlpzenh6SnB3emFwUzdqajBxaVltaEw0eGx1ajViTHZLdFJSRlh3OG5NQko2cWVhcGdZUWpKUDg1MnROOWVmKzZtc0Z6amgzY2tSbE1qSHcyeXRpakFIMHRXRldOZkdidUlYWFM4OGVueGh1ZDFjYVlWY01DcUZsVmxQR2ZKT2pCRFNiTGdyeDZCM2ZzYjB1aGxpQ3Q5SWtBbjRnNjdnTVZkSXpFT3diancrL3RZMSsybnZXSDV3VHQ2K25ialVUaytaQ3VRK25ZRVBUVXJZckFxYzRyTmpyNXRqR3JoZ1ZRczJyc3p1enVBL1ZjZ2wwTkp2MVdUN3puZjl0U3FDVml6ajhMd0FQS1R4ZThYNVBpbHdZVHcrOGpXYXg3L1JVRFJReHg2QkNqMFZjRDJvM3FRL3NGcnprQWtIU1JKRHVPbURYSnZ2aG1WWkFVbTJidWhTck5ZTkpJeXNrSStiNXQzRGJWbnBJdFRWRTRCNXgzMzJXVnBsV05ScU84a21SK3FYa094Z2IvRERHNHRsbHRnUG5aL0lYengvUGpnMHZOMDVqamtRVlFzK0tVSjM5dXFBdFFLcHU2RjZUTENFWlI1OGc2Z3FZcDcrTjk4YUhybXlwb20wa2lpWHVHWHFxMVQzelMrM2hmYlBnUE5kNXYySWFlVFo4RjhLc0Y4bVQ1MzYyKzgrOWJZeGxqVmpVTG9HWkZDQWROa21wa0RGcEpYWUI3RXNDZGplUko0TVlJdS82RHBOOW9lVHZoSUE2ZUlDbm9QTFRRL3RoTEwzSk5LL00raVNjZEVmWE44dE53cjF5RVhnTUFlc1JwcmN6Ym1PT0YzY1ppbGxXNHBsa1pOQ2MxMlFPZ0o1L0xyL2M4cjhlbjMwV1FIcnlJRDc4WWRkRmpIZ3FSZEM1NUFZQm5CcXRFZlZOeUhhRVgrVWhmb205M0s3ZW5GVW8xVHlxYnpXNkFzTFdPc1ljbTFuZXZuMmgxT1R6Z1p3S3lBQklMTFNlblU0TXl0N29NeHF4a0ZrRE5zZ25YT0lQbkU1bUo3VDc4OHdUL2Z2bHM5dTRBdGtIYTVPUVNBS0tDNU1PUmdQTlZ1TXNIUE5FTkUxeGZYbTA5VGI4aWNXMHNIdnRpZTdhc05Zb3NkaEdJaFY2cUZhQjJiY2JtWTYzT24reEtPUlYzRVF2WE1BWDAzb2s3ZXdDc3lPdkl4clNMQlZEVGNkVnFuWlBaMGY1MGR1eHBqbmcyZ1RNSnhqRzdVT20veWhVUkE2WC9HaHN4UWREdUtMMnJkbkJIcHFrTjZKQUlJNUdpNXJRdTF4ZzRBWGUwWS9TazdsajMwVnkyc0J2Z2dnR1V4QVpCRmtETm1tTUIxSFJVWmExelFoT2IvZHoway9MU1pRQWZVQkVoNnAwdHBKRUlLdEs3dGk4KzlNc0cwaXdMUWJWcW5IUDJDWUdqN2NpL2lLSVBJYmZZM2hWQUQxbnJUMkhXSEF1Z3BtUEN3Vk1TZDJXVDl5dGtwLzhmZ2NjRGpOVkkxdW9EODNoVStCako2UmF2dHlYQ3RYUFBlZm1pa0s4eEpPRnNFQlcydHFVd1dTUkFManAxR2FXRFVXeXFhK0FHWTFZVE8yczBIUlAwcnBVVUc4OGxuMU9FK3l5QnAySDJPbC90K3cxYnc0RzR0amN4dE9KbVd3bUVleUQ3Q1grSzFNRnFpMkZPejFqZCs0QU9ORFIwWVRYemJ4OHE3QXoxQXE3TlkzSXpObHNBTld1T0JWRFRVWkppNld6eU11ZjBmb0NWdDJpME9tRE96UnZLeVBIYkpBdnR6S2RWK3RHZkViaXYvTFRhZ0FZbDVPbEhzMGZ2V2ZXOUpmQ2wrNUk4S2NpbDJqS0NpaEJTeDhzK05hYVZMSUNhanBFVVNlYVN6M1BTUDFlTXJ0UFd3RG1iQ1QzUDg5cHl2YkFkU09aSkJPUHpWZ3Vld1g3ckFkMkZyY3g3UWhNSlVZOE81VkUxZUJNc2tOalZ5cnlOT1Y1WUFEVWRrOHFrSGcvbjN0SG9UQ2tWaE5JNHJBN2xDWjdyVEFNQVBRN0ZSZ2VhWDE3Q0xlVy9GanpKa05PelVrcHRienFiaXM1ZExsdjRhd0VQcnlQcElVVzhtNXJOMTVqam1RVlEweEhwZlBwTXdQOW5raWVYWDJyMnBudWk5TDMxVUpxZk1salhnak9IQk8vUjhlWEpUUEwrVGViZGNkRUlmd0RoRUdyL1ZrdE51OFNaeUJaZjArZ1FpTURjamtzQU1KNGJIM0hTbThyMzFpN1l2QzdocG1oWDlKWmdQYzNrYjh6eHlnS29hVHRKWFNvV1hsV2VyQm1vYzdRZ0FFN1NmZ2pmb3ZnMkFLOGgrUGNBcmhUd00wRkhNZHVoWnFIdmNwQ1hBN0ZOY20vZnAzMG5OTHM5bmRUYlBmUm5FRDhwUDEyNEZncGVuc3duTDF0d21YS1Fxd3gyUWVlbGd4cmRXSFNGVjRPNFZ4M0ZjeVMrRVV5ZDF1Z1FqTVljNyt3MkZ0TjI2WHo2RVk1NFZ1am92MWp3RktTL0NQZ3lHZmw2TkJIOVErWDhsZ2QwWU1PUDE2dUJBQUFnQUVsRVFWU3g3RjFuaWJ6UU9WMU00aXpNSGJPMTJqUmNEZ0JJUEh3cWQrVHBBRDYraE0zcUNKS0ZWSGIwcXhJZWorcmJGdDdtQkh5OUp6azFHaGxhTi9MaHluVlYxZzZEWUJmOHZ5dXpxL2RRTnY4R1FDOHVaN0hnaVk2QXNTNFAxemE3YmNZYzc2eTV4YlRWaENZMkZ6UDUvd2I1bUhxV0YzUU00dWNSNFh1RzQ4TzNMSjRDU0NxNURUbjNGa2t2S3M4Rld1dkFINHpXNHdINGxaZUlQbWFBQTNmVnRTSExLSzMwaVM1VC9FR2R0VUlJS2dDOHVndmQ3K3pyV1h5c1gwbGQ0N214K3p1bk40TjhkTjBGRTk0NTJEUDg1bmFNZ21UTThjQUNxR21yVkdiMHFRNzZuM29tdVphd2w4Uy9EQ2FHcjJwMFhrdEpUT2VTTDVUVHY0TFl1TUNpUHNyTnZRU2VQdGd6c2lJbjBxNlV5b3creFVHZmEzQ3k4TCtBK0JTOXlGZDd1bnNtdG1CTEhxWHRqeHpFd2NSVWZtcEwwUytlU2VwQ1FFOXZaRFliQWJkRnZhNkwrdVA5b3cxdmpER3JoQVZRMHphU29xbk0yTlVnTGwxOFdSd2hjY1ZnWXZqOVM3bU9sc3FNdmNMQlhVa3c2R2cwTDZ2eS93VHhIME9Ka2I5cE5xOU9raFJOWlpPZkFmUU1sR3JTd2JYZnFvdlBlVS9ZQStvdkFuZVRuSUpUbDRDdGhJWkFEbUh1YkN2MVhKL09RM2gxdFdaaVk5WVNDNkNtYmNaeVk2ZlQ2VnNBaGhaWlZCSStQdFF6Zkhtak5jOHFLNHFsczJPZkZ2RDBSWmNGSnJvUmUxQnZUKzl4Y1IvalJINzByS0tQNndCc3grS0JydEhCS1JwWi9pdUp4THJuYnVNMkd6emVyR25XQzllMGplZDBwcUMrMEV1MVJ0TkpzOHY3NEZLREoxQWVmQ0FTZlN1QU8wSjVoczJVZ1VCZmtmbUhMRFhQVHVtTGpmeVJ3Q3RRbXZVazZEeFVxN1llSGdEQlZTd2J2cGMyZUcraEd1ME1DWC95SXRFM1cvQTB4Z0tvYVNNSGpoQmNyS2UzQ0g1OXNHdndENjNLZHlBMmNCT0VUd2JyeHdMM2g4cWg1VVBndGROZ3o4aVhBZngvbUczR0JXcHZJekUzTUlZRHBCZDYxRlZMRlRDQkNGODdFQnU0dVltaUc3UHFXQUExTFJPK3Q3RDB2d2JDYjZOS0xVZlFsTVR2dDd3bko3MXJKQnpCL085NFpSbk9rZFJJeDV4bE41Z1lmaitJdDVaNjI4N1pub1ZxbzVXM3ZqVHFGcy9EeTRianc5OXBJcTB4cTVJRlVOTVcrN0J2SFlBZ2dGYTdYbGR1UnVXQmFOU050VHIvUk1KUEVybzluRmUxL0FFTjNZblJSYWZzV2tsSStrT0prWDhpOER4QXdiNmJIU3lpK1ZHZTVpa1BGdit0aUhESllIekU3dmswSnNRQ3FHa0w0ZGc2UWljdnZoejJSYnQ3OXJRNi8xTXdjZ2prcllzdVNHek1UM2R0YVhYK25URFVjK3JudWp4ZUJPbmI1WmVDRVptcVhmZHNtSVFqSHJ3ckV6MTZRZis2a1Y4dnZjVEdyQzRXUUUxYitEbkZJQ1lXVzQ3QWtRZ2k3WmhMc2lEZ3dNSlpBeEs2NVd2SmMya3VsOTc0eUsySm52VlBFL2tTQ01GMTVPRGFacml6VU9YZk5aV0hTUHc2STk3RkE0bWhmOWpHVS9lMmJ3dU1PWDdaVUg2bUxaeGlEcWpacVhibUFDN0I1WkgzVzUwL1NhVXl0MHVMWE80ajZIdnlqK3U1TE1zOVl2OXpVcE5meVdWenp3TDBEQWhua1ZpUDJRSDNnUVdINVZPUjRCaUFhNlAwdnVMSCthc2hEdVhhWFhaamptY1dRRTFiS0tHTXNqaTZhRzhWWWxNUGVyb0F0TFFXS3FrcmxSMWJ0QWtaMUpTOHJvT3R6SHU1N09DTy9RQStNS25KajAxbnArOGxGTzlMZUtjNmFaakFUaENiQU1RZ2VLSUtFTzhDTUU3aWp4RjROMGJRL1l2ajVaNVlZMVlDQzZDbVpVZ3E2SVhiaTk1alNZd0YxelpyMy9RdkRSNmJQdFlIb0tWelNvN254L3NnblEyV3BybXN0WnpBdTF6TXJZb0FLb2trdFlNN01nQ3VMejh3b1lsRUZOSDF1ZW5jU1pHaVd3OEFmaVJ5TE40ZFA3QU4yNDYwNHY1Ylk5WWlDNkNtcFVJemZFd25NNk1Ud2N1Vml5SG9oVXVlN1B6aW85RGlBT3JMZnpDSTB4YXJBWHZRelFNWVBCSThENEpRSzh2U0tlRVRtUEEybEdleXlRTFl0MXhsTTJZMXNrNUVwbjJFb0Jkc3RUZzJFMFFsWERxcHljV2JXK3VVVkhJVG5aNVp4OERyZ3J4Zmh1OUJQVjZEWnlBOEo2ZE5jRzFNZTFrQU5TMDNVd3ZxaXZ5eVBKZ0JzTUM5bUNUT3ltY3lUMTFxZmpPeS9tTkFQSHp4aERqc2VXalpDRWdyalUxd2JVeDdXUUExYmFNdS9abkVqZVdudFdxaHBXWEoxNDdseGs1dk9JK0s0Sm5PcFljRnZoWkFyRm8rRmJuZjdNZjV4MGJ6Tk1ZWXdBS29hWU9nMWpQRW9Seko3eTIwYVBsL0VUaU5UdjgxbmhzZnFiWmdaYUFNTjA4RytZMVBqZTl3cnZCT0F2ZXRvNWdDY2QwUWh3N1ZzYXd4eHN4akFkUzBsU1ArRjhKQ0l3MkZteGp2WC9RTFgwbG1rZytvdXVDY2NYYm5ObEdPNTIrL3A4L0Nod0JlWEUrNUpPeUhQQnZYMVJqVE5BdWdwcTJHNDhPMzBPT0h5azhyQjR5Zk53Y2xpYk1BOStYazFPakw5bXJ2K3RuWFo0TmwrTzg5dW4zcldHN3NKWDRSbndmd3BIckxSZURyZzRuQjN6U3pUY1lZQTlpRTJxWUQwa3FmNkdlTDN5azNyVFl5Y2ZQMUVINUVEMy95SEc2TGV0d0xTUG1JdHhrRkRNSnpaME42dUlBSEV1eXVkOTBDeGhuMW5qalVQZlM3Sld5V01XYU5zd0JxT2lJNWxYeWk2SCt4UEQ5b285ODdRZGdyWW9KUVFXQXZvRzJoMjFScUQ5UXdmMFVGa2xjTUpVYitwY0V5R0dQTUhCWkFUVWRJOGxMWjVKV0FYb242QWw2OU5kV2dXYmpPeXhHNlpuMWk0M08zY012UitwWTN4cGpxN0JxbzZRaVNibU5DVjBENEZrcEJjYkVKdEd0TkVsMDVxMGd3aGRlaUJOd1dqWGhYV1BBMHhyU0NCVkRUTVpzNWNyaUxzWmNJdUFHejAyMEI4NE5rZ0tnK0RHQXdYVmUxOTJ1NU5lTHg4cjdZOEtvZE9NRVkwMWtXUUUxSDlmYjA3dXJ5OEJ3QXY4VGM0TGZvUEpWTmsyNk9rSmNOeEllLzI1YjFHMlBXSkF1Z3B1UDY0aU8zUmRIOVZFQmZ3R3d6YkRBMmJsMlRQdGRQUHllakwrNVBEUCs0TmVzenhwZ1M2MFJrbG8yazdsUm05RklRcndNNEhMeU11Y0d6a1diYThOckhBSHdrbmxqM2llM2Nick9RR0dOYXpnS29XWGJwWEhyWXFmaGNPVHkxTkpEQ2pNcmV1b3YyekJWd0c0VXZkVVh3eWQ3NHlLMjFsalBHbUtXeUFHcFdqQWxOYkhhNXdsLzcwc1VRemlPeFFWQ1VZQVRWdjZ1K0lKL2dBUUMvaHZBdEx4SzliaUErTU5iaG9odGoxaUFMb0diRmtSUk5GcEpuUm55YzdhQ2RFRTRFc1FFTzNRTGtVVm5JT3dUcUxrR1RYcVRyRC8zZC9iZVJMQ3gzMlkweHhwZ1ZSNUlueVRxK0dXT01NZFdFcHlvenhoaGp6QkpaVURYR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTVdaVWtjYm5MWUV3akpORyt0OGFzUGN2Nm81ZEVrZ3IrcmpjZFNRVnBnM1RoMXlyekNONXZaZG1QQitGOVdtMWZWWHV2bWxyN2RxMXBKa2lHOTFubFBtOVZ1VnF0Mm0rcTBXMjM3OHp5cS9hWkhhK2ZSK1cyTExRZG5memVkU3lBVmd0a1ZYNmM5WlpIRmNzRzYyVHdkN1VmL2ZINjVXbEdxMzQ4YS9FRXBOVUhudVB0UUxiVTM4M3hjcUt3MmxUNzNCWTdNVzUvcVJxM1VBQmM3TGNreVFPZ1ZSVkFxMnkwVjg3YlZaVEZxNk5jV3VEL2p1MjRsYWplQTFkNXVRZ0FieGQyUmJyUTVYbnc2T0JVUU1IMW9yZElzdENKTXE4RWpSend3L3Z1RHR3UjdVSlhKSUlqSGdBVWNZSS9oYW5pSUFaOWxMN2JicVYvSCtzTmx1VURrNWRDS3JvTzY2SlJISTBjUmRSemNGcUhkY1V0MkZJQVVDRHBxcVUzN1JmNmJnSTFqcE1yL2ZzSXpQbE9SakFiSjBUUzFhcUlCYTkxK29TL293R1VwUFpwM3dtWjdOSEhPT29NQUhrbytJQWxnQVJEWlJJRVNJSW5iKzRYb1Z6VGxGVDYzNGRZVUlTK0p4VUI1RUFjZ2hlNW82dll0ZDhsM0ZRUnhjd1FoM0tkMk41T3F4VUFKalNSaU9TbXQwd3JzaFB3ZDBqWUNnOWJLRzF4NENZQWNVTGRFa3MvT2tLRWZJQVpFSWNCN0NHNHl3TnU5ZUxkTi9leTkwREhONjZOYXUwM1NWMHBwRTVDQWR2b3VGM3l0MGs4bWRLSklqWUMyRUNnUjBBM3BTNkF3WWxmQWNRMGdCeWxvNkIzU05SQmd2dnBjS2U2dkYzeHJ1THVBbUpIZTlFN1RkTHY4Q2JQQ0xmNlZBYTlBenF3SVpQUGJDMnF1Tk9EK24xaEcrQk9vYkFGNUFrUTRnQ2lJQ0lDUkdGYVJBYkNJVUI3UEhDU0VZeEhnRnNWNjU3b1kxKzI4MXU0dGtqaU9NWTMrUm4vQXRJTkVveVd2NWNDUUVFRmlrVlIwZEt4RmhDOEdLRnBMeHI5YVg5WC8yOVdRbkFOYXA4VG10aGN6RTAvRWNMcEZLZmx5WWVRSTFBUVZDUThCOGtKRUlnNGlKZ0g3dXFLeDcrOWd6djJoOWZWenZKMlBJQW1NOGtIUVA3SFFaNHV5QkdrU2g5bzhBREJhbWRQbFdXZGVTNkVEb1NsdEU1Q0FkUVJpZ2RCSEFPMG44Q3REdDROWFY3WGIzcGp2ZU1rcDl1MHlSMVI0MndzTnA0ZjN3bjU1L3RPRHlWMUpvQitnQ2NDNk1ic0dXb0RHZUV3cUpzRi9vYkF6N29RKzBsdlQrK3VWbTFIcDlYWWI5R0p6TVJXSC81NW9Ic1lnTE1FOUZQWUlxcUhZTmRTc2dTUWczQll4QzVDa3loOUwvL2lRVCtOSjd6YnQyTG9JTWxDdTMvMHRjN2c5MlAvK3FuQzFHbXU2TTRIZEg4QWQ2UFFCK0pFQUZFMC9yM0pBcG9FY0JQRTMwWThmdCtQODQ5REhEclVzbzB4TXlSMXA3S3BKMFArRlNDSEJFVXhlMGtyK0Y4QVBJTGhTMmFlZ05zaXhBc0hFaU0vWFo3U2w0Uk82cnhrSnZuWG9QNFYwQ0JMSndJejIxQ09GeWpIRGxmK095cG95b1AzMW9IRTBKVWsvVTdVUmp2ZWlTaVZIWDJoa3o1TXNIdUJ4WUlQTy93RnFHYXg5NnR4Z0ZLQWR3T0JHeEQxZmpqUU5mREg0Nm5Kc2xyTkthWFVkbVNMRHhDOGgwRjZHSWpUQUNScXJTSkl2bEEyQzd4L0M0Z2ZrdmdHWTlIckJ6aHdWMk5ic0R5cTdiZWtrcHU4dkx1dmZEN0VVUmRTT0F1bFdtYk4xUVNyYUZHWjlwTzhWY0R2SXRIb3h3ZTZCMjVzeFhwcjVEWG5nREtoaVVTaFVMZ2JmSnhINldFQUhnU2dEOVdENVdMYnZlRHZVTkF4Z0w4bDhmMm8rSzNleE5Cdmo2ZmYzRW9WbkhEdHp1enVtMGIyZ3dDZjBFaHlsRDh6Z2g4WVNBeTlhamxyb2FFK01aRmtOdmthUXY4RUlGNVBVc3g4OS9RRkpDSXZIZUxRb1U0RTBHaTdWbHdidDdHVWIvZ0hWL25qcSt4VXROREJxdHA3cXZnN0hHZzlnTU9BaGdVOFF3Vi9YNm80OXQxa1p2UWJYWW5ZZDFaNk0yWGxsK0tBRG13NG1qMzBDSmZ4WDBqd2dhQTJoL1pJMERSSHpOM1hxUEkzUXN1RzkxbTE5MCtIY0xxRVM1VXQvajZaSGYwcUVmbmNZR0l3dWFTTmE2UEsvWlpVTXU3bDNQbCsxbDNxb0F0QmJDUGdsZmRTMExUcVZWOWJhWlZWWGxzb3VGVDdUbm9rVHdad01vRUh1bUl4TCttUHJXNFpxZHgyU2JGZDJlUTV4ZXowa3lsY0pHb0U0UHBRMmFwOWI4SzFHR0QrdG9hL1grSGZzMFBwMnN4NkFCZEF1S0FndlR5VlMzNDFuYm45VS8ySmtWOHNaMVAyOFM2NDdqZWVUVDRBNGtQS2UzMnhTc1djZmlNQVBDZGRtTXFsQmdDazJsbmVoWVFDSFFsdFJuM0JNK0FBZUJEWGQ2R3I4VmEySmkxMGdHaVo0QWNzaVhLS1ZjbTMyb2ZkYU0vY3lyVFZIa0M1YzBmNUFSSmJBRHdid0tlbnMvbXZwcktqejltcnZldm5yM0o1aGU4MUpLbEpUZllrYzhuSEhNa2Urb2lrcTBuOE5Zak53ZUxsaDRmWkRsdUJXdnVtOG1CWmJWbWdGRnlDQTJ3TXdIa1EzaUg1MzBwbFI1OGphYUdXaFdWUjBja2drcDVPbjh1cy94NWYraVNCNXdEY2dkbnZaTERmZ2c0TWpUeHFDVHJJZWFHL3d3SEpMeTJrTGxRUHpFMnIzUGFKL05qWnljem9GVVhvdndDOERzUTVuQTJlRG5OT05Lc0d5WHEzbFJWL0Irc0dpYTJRWHVMRXI2ZHlZeDhjeTQyZFhsbGVVNzg3Y1dlUGt4NExZbE9kU2VaOWIwbWNRYm1uQUN2bU00ZzFzT3ljWTlkTUV5L1o5azZsSFFtZ0ZWcmFCRmFIeW1BUS9uR0h6N1lqQkI3c3BFOU9aWTUrSVowYmZVU0h5cmVvOEVHUXBIYmxSdTgybmMzOWkzei8wd0NlQ2ZLa1lOSHkvNHNkNUpwRmxIdWdZdmJnSCtSNXVvU1BwYkpqbjVqSWo1M2RocndiRnB4MEJQdnREdDJ4SlpsTnZ0d1ZpdjhsOEJVRWU2c2thOWUrcTF4L09KOElBRGh3R3JPMTN5VUxmMjhtTkxFNW5VdStvT2pyUDBHOERzRGRNZmYzdjFEZ1hJcktiWjM5emhBblFuZ1puYnMybFIxN3NhVElTdWpJY3J6SkZYSjNFM0YrNktWNlA3L3daK0lKZU1hZEdqdGxKWHdHbWx0THJqUEpUQithanAwQWRDU0FWbndnSytIc0p2eWpEZ2NERUl5Q3VNajUrRklxTy9hbXBKS05OQ08wWEdVTllqdzdka0hCeHdjRnZhTGMvTGRjKzdaYXMzQU13TE9MdnI2V25ocDdmQWZMTWs5bHMyVTZuejRqbDVsNkw2RjNnamdUTGE3cExRRkRmN1NzNlNsODRqQ2VHeDhwNXFiZkxxZjNBRGl2MUVPemFqazZlZUl3MHdvRWNOakpYWlhLSnYvdER0MnhwWTFsV0RWQ3JYcWVpdjVEQ2V6RTNOc0NHMXBkK2YremNsazhwQ1VGYkxRQWMydTk4c3FkZ3hwZFRhdktVNisyQjlES1ljNUNad2NyNVFBR1ZLdVJFaHNsdlkxWi8rcFVOalcwSElVS0I0RzAwaWVtc3FPWCszS2ZCUEZJTEsySnU1V3FCZElCQjMwcW1SMTkvWEkwNlZhY2RNVFNtYkduK1g3eFV5Q2ZDMkJkZWJIbDNtK1ZxRkx0YzhtL2kzQlAzdlIwK2x6ZlRmOGJoSmVnMUtOMnBaalR0RnZxNWF4WDVySlRYeHliSGpzbldHaUZOQ2V1T0RNZHdUSVQyeUE5QnFVT2c4MThkOEsvMzRTVExwTFVzV3VJWWVGYnExeVR2MDhCem9mZnNYdVIyeDVBNXcydDUya2xkeGdJQjFJQW9NRG55aFcvbWM2T1BuaFpDbFJ1ZXZTenhUY0RmQ2ZBNGZKYksra0VaRDVpRTRSM3BITEpEeHpVNkVLOVdsdWZkYm5tTmFuSm5sUm05QVcrOUNFQzU1YmZYc0g3VFMwTm5xbE02a0d1V1BnQVNqMHpsK1dndUlncXRWNCtsRVY5SlowYmZSd3cvL2hoNWxLa2NCK0E1MkgyOGtvendwL0JSYnVteDg2WVdmL3luTUFRVFRiRGt2SlBRSEgxQk5CS0JNT2RVRmFpY0JBdFg2dmhQWnp3cWZHcDBmdDFxaERCZ1hDdjlxN1A1N0l2SlhBNWdKNktjcTQwOHp1ZFNDODVuTlhWQjNSZ1F5Y0xJcWtybjh0Y0xPRHRKTGFHeXRlTy9iYllRYjdPSUxDMGF6ZHphcDZaMjgrWC9BOEJmR0Q5K1MrTGFwL0prTy9qWTZuYzZHT1hvMEFyWFJEVTltalBPaWM4dG9VdEN3S3hyZUR6TVMxYVgwTmFjTEtrVXVXMWN6clNoRHZuT2VTcnVmYnRUcXRzbGh6eWlTOTJvaVlhSEFqM2FNKzZUUGJZUzUzYzY5QllyN1NHczJ6anVnSHc0cU9adTk0cnFaM2JNRU5TTkowZGV6eUV0NWV2RTNjazI0cEhXRjJCa2NCMHN3ZVJjUEFjbnhxOW54UGVEK0plamVUZmFKWm96L2RtcHFldWMzaGZPblA3K1lzbFdHdUN6M2s2TTNVR3BFZVZYMjdGWjFIdUIrS2UzT2tUWG1CT3JHajJHaWdBNERDODFkV0pDSmpaT1lSbXU3TTN1b3BRdXNxRGxhdnhXT3FQZlA2MVBlSFQ2WHo2akZvSldpSG9NSlRKWlo3dHBDc0ludENtckdydFF4K3QyNGVsak1nWHBYSmpyKzlFazFBNmw3N0FBZThDdUxQRnE2NzEvYXYycU54L2krOURvYW43UDhQQmMxZHU5RzVGNEIwZzc5UE11bXFXYkc3NU8vSGJFNEhUbkhCMWFqcDE3eVdzWjlVcWtnOERPSWpXbmNpVVc5NTRueU9aSXhjR0wzYXlHVGVJRXdLTHphNmlsZVZaVEtlYmNPZU9kZHRvMnZtM3BBVFB2Um9QWVBaSDN1d1B1ckw3L2FEekMxY0YxL1hDOTdnMnNlNmF4dk5qRjFKNks0bDJuUWtHdHkxVWRnSUszd01adkJiZWg4M3lJTHd1blJ1N2RBbnJXRlE2bno1REtyNkR3S2t0WG5WbHQvcndmZ2tMZW5hSHY0TU9pKzlEQ1lvMDh6MmFyWG1PN3lnNHZZMUVxMi9CQ3Nya1kvYmtxdkwzRk41dVlHNlFiU2F2OGpPZW9ZTC9ybDNhZFZLTjVkZWtQYnA5SzZISFlQYTZaeXVPUHhUa0E0Z0o3dkhMZUZ1UnBLWnJvQjI5dE5YeGtZZ0llbXJpT0N5b1FHQUM0aEZBTVpGUlNvWFN5UXE2QUVVQVJnUkZLZmFBV0FlZ0MvTlBFb0lmZFNPOVdPZGVFd1VmZWppTHQwajYrM2JNUGpHWkhSdklPVjFCWUh1TFY1MEJkQWZBM1FEdmtIU01IZ29BSUljdUVIRUFHd2xzRmJRRHdOYUtJUmZEQjhSR3Y2Z0MwQ09uZDZlem83Y09KRVorMnVweFgvZG96N3BzWnVxMUlCK0F1Wjl4S3hDbDRKR0hrQU9WQXppTm1hWW1ldVh2WGhlQUxoQXhRVEdDRWN6djNGRlpteU1Ba1F4T1hCcmVKeE9hU1BpWndzc0VQR1VKR3oxdm53a3FRamhFWUIvQUNVQjdTTzh3NFBLbEpieVloQTJpVHFMUUI2Q3ZmRU4vdGQ4ZEt0ZGZGK0lSeGV6MFAwaDZmVEFqeDFydlhKVEplZzhEM0hubCtrZzkrN1N1MjkwWVRJeEFQWHBpZXZRZUFQNEV6RzNsYUtkeTZ4czhlSzZaT0FFQVhnZWJjRHNTUU1QVHpBZ1NaMmV2cUtYS2o0Mi9nK2RkMFFVM051MTVpUWdpVVNjM0ZWVzA2T2k2SFYwM1FSSWcvT0ltd3R2aHBKTkJuQTZIQzBBTW9kVFZ1OXBOM2ZVRzBTQU5BYnc4bFVuOUdNQlg2MGhidHozYXN5NmJuWG8xZ1F0YXNEb0J5RUs2QmVUL0VmZ3BJMTEvOGJxOVBSRkVjdHV4ZmQ1dEV5bWtQQUR4eUxTM1U2NTRMNGozbC9Sd0VQZkEzTnBGTXh6SWs1ekRHeVU5bVdTK2xUL01iRGI3T0JEUEtEOWQ4bzlJVUFIaUlWS2o1WUgwYnlONUZGUVdZcDdpdEl0NDA0TGtRVkU2eEJ6WlJTZ0NLdVk1YngwOGJITFNkZ2luZzdnYmdTMkNJcUhBT2xPanBacHV0b0xMRkI0aDZQSWE5M2pXYTZhbUtXQVN3SThwL0FTUlNEcEt0enZhM2JPbmlPS3hYdlFXTVBjM3loUlNrUmhpNi9QWi9LbVV6aFhjNHdDZWg5blJzU3AvUC9XVVphYVZ4TUc5TEpWUC9RREF0NWV3ZmF0Q1VzbE55T29wbUIxQnFoN2gvUm1vOWxtVTV0TUVlNHMrTHdUd3A4WG1GVzJsbVV0OVMyanRDZ0pvSTlNVU5xc2pBVFI4Y1JpU3I5SUgxTkE2Q0V4NE1lK1h2UnhxYU9CeVNaeklUR3lYVjdpUGN6Z2Z3dVBMTjlLWFY5dDBFSTBCN2g5VFN2MXlrSU4zQkhrdDlZUEtaREovQmVxRnpiZDBCd1hVTVFvL2c4ZlBSeEg3VGw5UDMrNEdrdWNBSEFKd0U0RC92a04zYk1ubk1vOXl3a3NKUEJqenJ3M1hXMWdDY0tJZU9aNUxYZ3pnMDBCcjlsc3lteHlFODE4SGN0M2lTeTlDT0F6bzV5Uis2SG00TVI3My9yUVZRL3VXMHRxd1IzdldaZktaWGptY0EzQ0FRSi9nN2d2eDlDRElsS2Fhd3N5UHY5NTlza2UzYjgxbTlMZmw5U3lsNWkwQWV3Ujh4VVBrdndjU0F6YzBNT0I3QWFYdnpYNEF2emlvMGM4Y3pubjNvdnluU1h3YWlHMFYrVFFTUkVId0JEai9MYnUwNndhU0szcTg2cmJMNFp6eWhCRkx0ZUFhQ0QxNXIvWitZaXUzSGx0eVRzMXA2cGdRSG9tbzNjRy9ZMDI0d1lZUW5oT2NXeVR2K1Jzc3JadjlzLzRKVk11dlQ1WWYzOWlkMlgxVlh0bVhrbmhCdVpOSm96dDNOdWdTNTdoczhiVUEvcjRWWnppbE0wdi9SVmg2cDZFMHdYL3Y2b2w5S2hnY3Y5WUJ1WjRaQzdaeit6NEEvNzFYZTYvSlpJNCtUOVFiUS91dTNoT1FtYUJMTU9xY2UzMVN5ZStTM0JNZWNxK0piUzF6end4MW5Ha3FpSlRtR2VUMUlqKzBLWUhyTm5QazhKejNhL3dRNnluM05tNmJBbkJMK1FFQTJLVmRKeFh6K2Z2TDRSRUE3Z1hpMWxJMjlmL2dKVEdkU3o1QmRBOXRvRGx2L25wS3RlMGZlUkc4YnpBMi9EMlMrV0Q5dGJadm9UUDg4cjc3RVlBZnBUS3AvM0h3MzBEZ2tXaThOemt4TzJMUi9ZdTU2U2NEK0dnblp0cFlpU1I1eWN6b0kwbWVVbThTTkY1UkNOSTlLSnM1ZGlHQXIzZDRQeThwNEVVUW1XbmhiSGZOdWZPOWNCdE1Odk1YMmVYZ1NtZWpvVUdDRnhvd09EZ3doMGREMnRtemMySjQzYWx2OWlKZGp3YndkZFRYd2FPYTBtRDA0Z3ZUMCtselE5dllOR2I5Q3dFdXFRT0lnRjk3eEl1R2VrYXVETThzczhnSlJ1MzFoYlpwSzdjZUcxdzNjcFVYN1hvaWdPdVhWRXp5REdiMXRDV3NZMFlxbXhxU3c3TkRMelVlUElXOW5yeC9RY0o3eG5EUDhCY3FneWN3KzEyci9PNHQ5cmxYZmdjRHZldzlNQmdmdVhZd01mei9JdXE2WkYzOGhDK1NkSTBjck83SWpmVko3a1dMVEErNElFRkhDWDRvN3ZIRmcvR1Jid2JCRTFqNCsxRzVQK2FzTTdTOWd6MkQxMjlLNEJJSTc0SndDSTMvM21hYUh5WDN3b01hM2JqV0FtY2dsVXYxRTdpb2dTVGg3MXkxNDMzMVkyZTVNNUdqbmkxcEtYUGhOcXZlNjdxYWZTSUI4b2lwZVduYkZVaVhZekI1b0xrRFhNUE5aK0VmZU9VUGJpQTJjTk9HeEtaTEFMeGIwRlQ1M3RSNmV3MEc1WGNnVGxUUmYzNlFYN01mMUI3dFdTZmdtWmc3V0VKREJIdy9Fb20rWUNBeDh2MUcwaTEya0t4OGJhQjc0TWFJdXA0TzRIL1ErS0FZTXpWUnlWMjZTN3RPQ2syejFkUytjM0pQSTNIUFp0SUNnSURiSXVUbEF6MURWd3h4YUU4OWFjTDdaYkdEK1VLQnB2eSszNyt1ZnpMY1ZGWnZnTWdEZjZYWlVaWWFKK3doOEdZa3ZEZnNTQXlubTE1UGhjcnQzY3lSdzRNOXcyOEQ5SG9JZTlINDlmUnlFT1VERCtVWlhPZGVjMFA5Q1hxa2lMUFFXQTluSDlBdklmMjJ6dVU1MHd3cVhEU2VIVDBQbUh0U3RBTE1YQit2Zk1PaFozV05STFNFczhYWkppS291TEZjQTIyVmszalNrY0hFOEJVazN3RWdXejdycWxlNG1lRGlwZDRiT3AzTDNBZmlveFpmc2diaGQ1Rkk5SlVEc1lHYmxsS09ldld2NjUrTUpycGZBZW03YU95aS8reXk1TDM5M1BSRnBUK2IrNDZrbE5wT3VXZGhmc2V3ZXQzaFFmOHcwRFA4cGVXcTFUUjdZSnJVWkErRUo1VEdrVzFLQnRTVmc0bVJEdzl4S05ma09oWVZhcUl2RHZhTVhBM2lYUUN5YU93N1EwRkZBSUxUWlJPYTJMeGFhcUgxZnY1cHBVK0UweE1iL3J5bFE1Njhkd0NSdHdvNld2RnVyWHc5bENvSUcxMTVrdTRPN3U5RytxTlV2bHcxZUxhcjdCMmREeFN6QjdjbU5xYjFPNkQ4b3k0TXhvZmZTL0REbUcxYXFxdEFDSUlCY1lyemk0OEdtcXVGU3ZLS3pqMEc5Yy9uTnpjOU1FRXY4cHFCMk1ETnphUnZWaC83RHFyTGV6MmdNY3hlcTZxM0JpOEFkTkxGa3BxK0ZxK3MvekNRelUyZkpoMEE5Y2JCbmxPLzBteityVkJ2VTNDbDZlejBPUkthR3FsSFVCSGtaelltK0pFR09nbzFKZHpDUUZLRGllRVBBZmlQY2tCc3BMWkFBQ0p3YnorYmYyZzd5cnFpNVlyM0lXWSs3N292aVluOEhYb2lQNDB5K211SXFUcHpDNi8vaWJzeXU2cE4vYmVTbEk4N29vZE14MXBXTzk2RTIvd3dmcTF2T2doZHl5cHNUT0FkQks5RDZkYUNSb0pvNEhITnpqd3ltWjNjQ1RaZCs4eDc0UHNIRTRNL2JESjlVNEt6NXVIdTRkOERrVGNDeUpUZnF2ZnNzZFRiRkxwd0lqUFcxRWd6U1NYakVCK051ZmRaMW50Z0VjalBETVpIUHROTTNxM1dWTk1ZM1YrVko0U2ZXVTNkU1lHZlJoaDlkN1ZydmUxUTBlUTkzWlBndXdEK0NnME1nRjYrOWNjREVISGxRTkxKV3l5V1EyaWdsaTVmdXFqQmsyd0J5QkQ0eGdBSDd1cE45TjVKMU4yTUczeGVEc0RkcGpuYlVyUkM5M2U1VFBTNEdvZnlhMUxvZ0VDdm5XTWNidWJJWVM4YWZhdUE4Zmw1MStVQnFXeXFxZUhUcGpWOUgyTG0xcHBHQ01LUDRnbjNxV2J5WFlyd05hN0J4T0QvUXZ3aVp1ZFdyWmNqdUw3WkppTGxOU0FxT0NOdnFHVkR3TzJNUkQ1Q05uL3ZaU3N0ZEkyMG1nbE5iSGJTdzBJdk5iRHZORW53QS8zeC90SDYweXhkZVB0TzRmQ2RCSzVDNmRhWFJrNnF5N2UxNFB6bG5xdTNWZXI1N05QVDZWT3Boam9QQWFWbXUwa3ZFa01hZmFVQUFDQUFTVVJCVlAxT09aOGlQWDVIVU5EaXNOQnZKbndpU2poZFBLR0pSSVA1TDBVOTMrZktaVW90SFMyKzFMZVE1UWlnSy9hNnhVRDN3STBVUGxGKzJtaVAzQjVCRndDTkJ3SkM5MFZwa0llR1NEanFlZnpNTnA2NnQ5RzByVVN5NkhuNktJUkc3dEVOaGcyRG9NZE5hR0x6WWdrcWVjNmRBV2dndk00Nmsvb2UrYW5CMk9DZkc4MXpwU2ptaW1kVGN6b1AxVnZ6OWdIK2FGMWl3M2ZiVkxTNnJVOXMrQWFFbjZDeEU2L3lRUkwzWklGdEhaTjZKWmc1bGpoM3ZvaTdsVit1Ky9qaVFUL3Y3KzYvTlhqZUhVOWNSNVZHRjBKOTM1bnk3VUk0MzgvNUR3aGViSGN0dE5TanRwbFlzZlFwQVJ1eEhBRzBrUjNmOGFZQ0x4cjlBb0FKTkxadlNtZkYwc01hdlo2M1Yzdlhpd29tRUc0MDhONGVVWGRIbTI1cjhlTGRONEw2Q1pycFVFVGMzYy9sNzdYbzBoVkVuaFhxVU5GSXZ1T08rR0tqK2Ewa2xPN2J6RFZ6UVZuUXUyNEx0MVIySnVtNExkeHlGQjcrcDF3anFxY1dPdFB2Z09CNitjV3pnZFYvTDJpcHM1Z2VGUnBscXQ3ajRwVEFid1d0TEpLNGd6djJnN3l1Z2V5RHZnMEp3Yjk0NVEralNHWkQ5NEVHanV2YldDcDJlSk03dnpOVG9QVjM5OTh1NEtkQnBuVWtvV2JQZXU0ek1UMTY5MGJ5eTAwZkdRUVE3Z1JULzVrNCtiMmRpWjJOakREVU5uM3N5d0w4QWVaM0ZLdDVKbGtlMHBFQTRvQTMxRWgra21LUWdtYnZZUDMxZGFvQWZqWVVHK3BvODJVclRXcXl4NkhKa3k1eDFLUDNrellVcXluZGluK1A0cTJvdnhZNjh4bExQS3R0QlZ0QkN0bk12U1U4cFB5MC9zOWJ1aFgwZmw3NWNvUzhGcVZlME1INkZxenRsVnVLQk9rSjQ5UGpad0FyOTZSRmdoY2VpYWpkT3QwTGR3azY4NEdSblBhQTM2Q3hRQkFwLzdIUitUZ3RlTDJlN1M3NjNobjQvOXM3OHlqWnJycmVmNy83VkhWVjliMlp4M3R6KzFaMzN3Ukp6Q0lNQVNHQXFCZ2c4RWdJQzRNS0NNTFNoeWdxUEgwK1VNR0g4aUl5cUR3VWNDSFBoOGhUVVFZeEJwbFJaSjRoSVlGMFY5MGhkOHh3aDNRTjNYWDI5LzFSZGFwUFZWZDFuVk5kVmQwMy9qNXIxYjFkcDg3WmU1OTk5dG5EYi84R0lQSXFrcnllaE9OMCtPeFdhc2daOEFzdEd6OGcyWjVrL0g0VE9jNlA2dlR1NnQwWFFIeklvUFBYWEErdE9PTFRXMlh2TXlrZGJhbFd1d0JBcW9sYUc4Y3Y3Yzd0SHBtOTUwYlpXZGg1Q01DWHNMclNpUmkwUHdjQ0R4OVdjZTkwUVZMZ3hXZUFTT3A1cUhrZHRDenkwN1A1MlgzZHYyWHkrYThCK25MNzFBRzBBb0NFQUhmNnNORjI5REpHTVc1YWF3MTFmcG1jR0hlc0EyaFhCUTlUMmJHS0VDZmxaZCtSWDVGMEx6cHRDOWNqT2kvbm5XdHJSU1laM0J5d0c2dnV6U0xqNEFUb2NBYTRLOW01RTZLUXZRdlU5N0IyTlRId25yelhiSklYTXFyVEZheGNJbUJuN0tka0w0MTRQeFRja2VqY0xVWlVQOHVCTzVmbzBMNU5kajNVZ1BkZko1bkczbm1za0d5QStDNFNURlM3RVhEcG9WcHAxQkdMdGhSMzF4ZjNBTGcrZGloUi8wQ3g2aHcrRmZmZkhMMDdPN216QXJEYmRHdTlkSU5JZkN6Z21aTFN1bU1jbHZYSzFOMi90Q3dxRkU0L1dBYlFQdlRVbk5wS01KKzlqZVR0aU5rckRyZ2t1Z2ZIVUgyRE9IZkhEcFdVRWJRclJUNnhRdkpRbU1zY1MzeitCTmlGWGNlSnRvSUNrT0orU0Z4MkNJY1NLMUk1NmpKUTU2UXFZSk9qV1dUM0QzSGRwckZtWWhFMnpvRndGbGJiVEtKQmgrSXBGM0RMaWE3cGdqdlFOSU5LMmg5Rk5uODdheDVYclgvcTZVMGo1TFhnTU5JR0xSWnkvR3EvWDNQRUJ3R1UwYXp6cE8rcENGeXp0N2JRTmlGS1g2N0VwTkZwNktCZXlTUTJqZG9vWXgxQSsxUnc5OE5LK3ZBbXRnTGRoVjBuUVVhcmxKUVBrVVZKUFI5Z2QzM2NoL3VtMFZ5Qnh2TkprcCtIdUg4M2RpK2xLOXQ0SWVrRkhvaSt4bjVhNzU2aXpuQ1hyL3JFbXJoZXVxU2xRSlJxYjV6QW9Yd2hQeEhieDFIVGJqL0NXV0NIMW5heUNSNXhORmcxMDlwMDJoTkpxb1JtRkpkVnM0a0UvUUxCREtrOTR5dmg1bkpRQjg4WGREMVMyTXEyOEFBL2NoSG5qL1E3WVdkaHp6NkluNDBkR2pnSmF6bStLTWp6ZVpJY01Cb3hibzgwK3FXWm9HK2MzUDRuTUZrUmJ2dHd3bU5wZmg4cEpCdVE3dXYxMDZCckJaMWZScm12cTYxNG5TeFZscllMdUxCbk1vT3ljVm9rdVR5b1BCT0g3ckNnWmF5ZFFhNi9yeUdlM2NnMEVva2xtMUY5ZUY0ODE0U2xFOENENStMYyt1QlR0eTRpemtJem1sSDNmUSthcUJ4QkxyZGxRb0ZGRTRMc1ZQYVloclcvMW5EZXUwNEg2cFg2NDBVOWJvaEw5ekViZkhqUVNYVDZPTkp0dFJDQUJEeXp0RkpxSzNDTmNTODB4WHU5U202Nk1iRXRpcTNpU0NIUmc1dEVRV0k1bmhnbVQxTGJ0Mk43endHME93U1RNam9uNVY1V3l3Wk9uaDczcEMzYkpCQjFpR0lGbmF1Slh2OTNYemVGTUhGbm1JVjhML0h0b09mbEFSMk1SeHM1SFZnanlSSFBSdWMrYzZJSnFJQmpsK0NTellydDJFSGMvK3NLVnBZQTlGSnM2dGN2ckI0bkg1UURhTk5wZ2IrQnE2RU5VMmpmNGpQRmJQRTdnMDdMNWFjL0JpbVN0QTNVOTJocHpZdkVCUzdFTXhLWEp6MXArOTFZTzVtTXRVYkVaZytnYWNTV25LUjZNc0ZqTFpIRnVoMS9EM0kxMURvRzBPNFpXbHQwRmVxczFsNVdtdlJCTUlUYm1vTkF3T0R1MXVRanpzQTZKQmlBWWFKSU5QZmh2cndmcnVNa0hEYmQvbkVZSWhkcWtpanFES3pWV2dYV2IwTWtjUStBTFNlMW1NWHNNc0c0eENkeEIwcjRjemJpUzNtckVxNkVEeFV4VEdqRENvbVBKUEZ2M0l6enl3L0ZEaVZSbG96ME4yNG9xWFQybVBaQmgrM25CWUNWQjRNWlMzK0RXNlVSR2NSUG5heFRCZm43QU5UUk9UTWIyRmdFQmxuVU8xN292bUdzWERnTkRQdnlUOWJqUmxLeXZuRXFwVWVpQ0tmUUpSSjlMMk01UnlFS3NKNmtIdHAyb3RSNEhhZVBrMVk3Y3ZESUliM29EUktXdHBMWlU2d3NBalJVTkJnQlp4N0NvUWVWS1l1a0RFSi9IWUc0QS9la05zN2ZReUZZWS92Wmp3ejVJUWtuVStRakFCTDBTRmI5VHdBVHRRbE5zSVhHQjQ4ZDZCWjFPcHdJT3E1UURKRmFzUUhxZG1ZY0MrZlUxZERJUGhPREJCM2loQ2NVQTJpYldPU0RGYkRkR1E2U01IVGNBK243dHNkNDNUbFVIYUJoMis2V0dVQ0doQzFSV2tSaTV3TU9XOGQ4cFFlcG5HR3NYc1ZzRnRtSmFWMU9nbkt0dkV2U0RVaS9FZ3VkZUdzUnhVUXhiUUZnVjJIdVd5RCtMZUhwVVIvb0NXWThjR09rTUxtUnZyNnJYMnpaK0E3VnYwMjhUNXkwQ1BmMDZidzg4Mkp2YmRvQk5QbzVNMTRyeXZXaGdIaW5scmgrUEZOcjVvMk4rSDFscXBsQW5mRUtrNXJuaEVsWGh5SHlJWWk0Q1B2MGFWZEQwQlV2TXZKOHBiUUc0OExXY0RyUWF6S3BWVWxNdW1kSk5TWnBPRDhKQ1A5NEFPazlUUW1uNE55bjBxd0lTZFpKZkFETmZpanBaTXkxOG50S2FhWFVEbVEvN0NEYTR6b042UXUzbmM2a0ZtK1RIa0RUYUExT25IaWxpemc3NW1jMXFTTUZBS2cxa084NTArK091a0NoVHFLWFI1eEI2dVJrNkxmVUNqVENPNThqMnVMVkpLdjI1dS9DY2hnZzBiNXVEcmxsZ0VPWjhQak4zL2RQVFZlOFVCRmNpUVYvVDc1M0xpWGFZNDZJMnkzMys3dlhOVWtDUkhmLzdsYWRpUUFwN2tuZ3lTVXNuVlplcGRhanBGSmVYazlCWjMwa2c3aHpLajgxVUhtb204Qm4veFhDSFZoVlRFdlMzNG5FaFFqOU9JTnRqMnBWT3pZMmN3VWFGKzhOMHJiVE9QZjh1bDk0U1lHazh3REVIWlVuVFd4NUJTdGhsTzY2cDJZeUZhd3FkYVM1UDRMY01xR2NPaG9ybHdzQ1VuWFVMZXJPdTNVMVJLUDZQSW1UeTVUaTV5WitQbzVEZEV4YkM4R2hqdVpBR3IvdmdiWnpuankzbjQxeXh3VTlCc2sxSzhZZWcyajg3L1U2c0I2L1pTVjNScytUQjBEZzNsbk1ucmI3MnQwRUZYK2x5Qjl2ZlUzVEozZ0FuOW1CSFcwenBmaGtwdDhIQUdhbVp3NkJpS0x6eE50UnY4RlVyZnhBanhzUDY2NjJLZDVtYjl0eENNbk1SdGlFZ05vdXZ0ZVJhRjhSRTlqejYzcXBBd0NScVVCRXNvZEMxclpoVzZQelVKOTRmeUdPUXppZXVxeGdJT3JNdE5lTmkvaExFNGJCZGloOWFEWlFTd3k0cm9PRGR2eFJ6SzZBTHRwblRkSXVWdHVjZXRyZG5oYTA3dDlMZklERDdXY1c3OGZpOXZWT2lBK1k4VSs4REVsK1MzZ3ZBSUI5MkxjTjhIRi8wRWs3UUEvaThGWnlUYmdSSkFVTnArc0l6TVFPSjFVZVdnRGRyWU9lVmE5blIxSWl2NEcxKzlEOSt1Zm9tQWQ1VmJYS0o4ZnpUSGk3Q1c5cjNlKzlMbUF2VjM3aldwR09WZjE3Qk5ITGsrNmZqWlFqT0pLRmNPRVFPUXZDL1JmZ2drU21BdHZ5Mis1NW9ITGlNTUJvdnlOcDUrRUk5blVadUJtMGJWdWgzYURPVHYzWXhKT1pNSE55OElrQXlYQng2YTVUVEQ2bmFwL29wWGxKbWRQTm1UeXd1bmU0V0YwOEFjRmo3V3FoWDJjbkFLUXd2MVRsRHdINGNvL3o0Z1RsYW5rR0NoOHB1QXlkZndBZU9jRmxDYi9TVEpST2tLZTRva0FoQVJlR2RBRWc3M2dxbjgvZjFqU1RHSXlyTjg3M3F4NjVvaklQUkZERHdXMHBkNVliNFVEMXdNVkVSOURzeEpORE5tMmpIMXRhS3AwdFNFRWdqNUQwQVZlYy9Bb0llcmpBeVRjOFhPamdBMEVLNUI1b1pMak1GVjBtcHVwdkE3VGJIRytROVBja3d3MkVPMHVpVExtdW1WYXJQSmlrR2N0WUI5QmVnNmREVDB2WFJBOXVuRXZ6enJJK3NBM2twVjJuSkNsZlNIQi81Q0ZvVUVNNkgrYy84SUE3V1I1bUoxZ2VleVJsazloN1RSSktWNEJES0JGUngzM0JKOTdYSkJsRmZVa2l4b3hkaDhzTzRNQ1pBTzdiK3JFTk8xa05yb3pqQWtKeXNQRjdad0k0WjhYaDRWaG5BQ1dwd3pxY2cvd3ZlZWlYQ085OHFBckpnaERtZ0Zac1NUVDNZMFdGQ05Id0FFSHZRZ0QwWEtsVmwrNHNWVXEvUGpjOTk2VkJ4Wks0QTBDYUNXR3pUWWsxT1c2SmNINmpJRVQ5TWJISmRCTGlLOFpaUWE4RHdwTUVNMkVJQjNvaXBIeFRRY2lKb2ZQaWloQjZEd1lBMWFDdnFjRUtpSjNvZE02UlVESUlRYnIyUUxYMEtMVGExV2ErVndUMFlIY20zNHRCZTZEanpieExwTEZjNFc1SnFhUGRFMXlXUythc08ycGtCQ1BINWtudnRTVjJ3V1g3Sy90VFIrUVlCMUc5TllPRDQxRkRKQ0dCQjNaaDEwQW5CKzJKanR4ZWROcnBKcTIvM1dFMWZDZ3dPVVdEVVJFVHJ4NEJVTU5nVVZzM2RHR0hiV0ZQTHNKRkZWQjNvS25JTWszeVBBQ0ZWa1NPZk91VGEvMi9EY1JaSk00a3VKM2dkaEJuQTN5czROOWJXaTROREpUZUVLNENrV1pMb2xVUHVKL2szaFRYYlRtaVozcFFCNmU5K0F5azB4L29lTzRFcDBpZUQrTHMxdk00ZzhTWklNNEJjUmJCTTBDYzJ6cm5IQkRuQXR4SjROS3VmTlAwUlI3RXVRM28yVUQ2ZDJxRWU2WXR6ZlFIaVNPRmZ2aDBnMkxzWVVoK0hmT1FVVzVlaDlDaldwMUdqM0wwUjhJRERtNWdwSTh1VGR3N1k3NWowN0RMQnl1UFNIbk5XS2t1VjRzVXJtNTlqVmFlU2U3TEUvaHVtdFcweTdqdkE0b1VKdEk0VThoTDRXa2R3V082b0RLQlE2MnZTZFg5QlFDZXVtS1FJaEZKRmZQemYwUHlMNk5EU0I3d09qcGZCQzVWdzcrcnJQSU9vSy9XYm83d1Q4QmFjWFFDZFBETXFmQmd3akp0U2FLK29GNnRQd3pVVTF1SE56S3hHOGI4bzZOSVExNzNyT2c1QTV1aVROVHNhNFMrR3VMallLdXNRUHN4OGYzUGd6bzREZkpKc2J3VDd3c1FPaEFvK0g2cURGM3dkYUpERExYZW9MTzZlUThFOHUwbzlWc0M3LzNWWUZ0Sko4MnpXeUdVcU42aURtZjcxUFlEUXVyUVhMNVZzaCtOb2ttY2JramloWmk3aDlTM28wTll2NjZqdmVrUXpST3ZLUytYTDF2bmZBQUF5WG9ocjljQyttTDhjTnJ5RW5pVXFvMC9PYXpEMjNycFJKU1h5M01DcmttYmJxdVEzejRIODRuMnpiY3lraHprbjBZd0xoMFlaaERzWmVVd1R1SVRxNGVvRmo0dHpjVTlSTDBiSGZ5YlF5Z21KMTA2blRxUmlWUklvMUs5QXNDUERaV240MWQyRlhZTjlBSVM3MFIyNTNZZkFOcWRZUkxpaWtZL3RkN3NmcExzMS82QzVIOFNxMjBxY2QwSnVnZEJKbFdRNi9ONDNra24zZG42T3VqZU95WWxrbjV5ZjMzL1hKcjh0Z0l4cmNrUWRGRjlEWHFIQ2JTOUZ3bkF4ZlIrNElBbGlSZnowcVBNWkg1Wnc0VkFpejBUM2xTcFBQRHE2QjQ2VEYrOG5rZ3dDb3llWnY4dEpQaVYwMDBNMzR0eXJid2J3QTJ4UTBrbE45Mnc2ek1KMmtwcThIak9RUjJjVHZKTSt0Z1NqNlRjRCtvOVVNSVBYVW45UkxoSlZlY0hJY2w1OEhvQXcwUzVyMEg2VEJxVit0WU1iRm5xQ0VJTnJIWWsvZTRwcXI4NVZjSm5BWnUvbnhkV3cwZEFpbWFncWNwQzhmWmdLaWduT2JmTDJjVVA0ajhseVFvQVNKN2Y4STJucHlualZzTjdmRmRRR2dXeWRzY3FqK2RJV3RjZXRtMHlORFg3ZGVlQ2wzYjVTMDBOeVY4dlZ4ZGVIRCsydjdML0VrZ3ZSR2MvbEV3RFY3Z3ZFRkk3RFpna3ZaeFA5RHpIKyt0RVhkbnI5OU1BcWFrWEtsRS91bEt2SnBxY0RUb2xUZjdSSHdUSkNTMjBJaVk1Z01admJGTlhTM0hpRDNOL1pmRlJvbDRRL2RUNlAybFo5MlpjcmgwQlB0MkswSDI1RmZrbFlwQTVTL3ozLzFwUzZlTGtlWTJPV0FlUkVjS2JTSjRmK3pteElvTElUOHh3cHByazVNNFZUUEJ2Z3JxZEx3d1NBd21BS1AvemNRUHcwNDNzZFBaekFOTktMcUsvZm1KZmZmSGFwQmZPNW1kdmRZNXZhSDBkTmx6VXRMeithRy9scnNkSGczTkQ5ZjlDNExHdDM5Tk51cWpicGd0bnBaSmFiRVVPNC9ENUFwN2RVdEFhQitNZVVFZ3dRTk0vN25idm0ySE80dEdERXFiVE1UNms4SVhiY1o0bVBMYU1iUUR0TnVodC85MXNLS2tVSDZKTHorcXpBaDBGQjNUZ3ZBYnhXd0Jtby94U0pTQjhZVmR1VnpuSnFkMHI1bUE2K0hjS3ZUckR3ZHJKeEZXczZ2bHBpanBxOXRVV0h3dmhwNGU1VnNLeGpQVHBvVEl1NEpzUW96MjYrS1FpZ2RrTUgxR3Q4bmxENWJ2SlNPSU1aKzZqY0V0MEtNWGxIa0RPZTcxNnIvYWVFNlUzNktLcGZQNVBBUDRkbW4xR1VyK3BuWkRuZWZBdHBlWFN3OHZWOGh6SW00QU9uODVKMzdtUWRCOC9qK2R0NmYzUEpGS2hlcjErTmFnZkdUSUxvWDlmbW5ZQnNCR0kxZWQ0M2QyVnUyZGl4OU9rTVJMNitTSWZCMk1OWnhiLzNtcE1GREdGSVN0TE9Ic2tGUk9mR2JWbVN0bVZhdjM1Z0c3b09qV1pPQWxhZ1hPZmlZenprOXBCUmVjVVdieGZ3RWRUNXQwZU1EejBxL3VXRnE0ZWNQNkc2WFlEUmxKbGxYZDRqOThGY1ZIczFNVFBsOVFYWnFibjI2SzRKSjE1Vkc5em5LczU0dGJvMGdSNWQrNkZBcStZUkwyTmtvN0phRGI0TUtSN01kVDd4TWY1YXVPMWtvSWtiWFVuZDFaWWNLK0E4QzBBUWN3WGIxb2VveFgvMTFMNEIxaFZIa3BwK29CN0ErRVRRK2JmSjgzZWJ1NUdSYTg2bHBTUkQ1L2FGVFE3YlIvWGIwdHNraXV4ZUpsL2FFVzFaMGJIeDdpMTFQTysrNGx3eDZVak1oRVJib2VQVERCb0tUU2t2YUcrWml6RGxLWHRPVWVhMmx0YnZFbkNxNGNYbzdBc2RtZ3Jwc1l4Y3d1QXVCZ3ppU2dTYUpvTHpJVFFlMHIxMGtNM1VvYWtSQ3Zvd3pxOFRaWHc1U0NlMHFOY1NRaEo5eEZ5TlRoNDZoY3VDRzZGY0IrR1VFQ1lkTDMxWXBnT3V6M3h5aGEvRGVJL1VtWVptMERvWmFWNjZTWHhzcXgzNFN4bkR6bUhYNUZ3TENaSlNnMkpLd0g4TkpwMnBLbFhTb1Mra1MxTTN6Wk0zdDEwVDZiVHVDTk1TciswU3ZYU0hraFA2VDQ5VGRMRGwycWt4SzBESU9xbS9kcC83Z2pxY0lqN2s0UnRwLzhLdEEvUmhuUDZpaUduYXFqMURiZzhPT1BPRndWb21xeVVLNHN2bHNlYnlhRjlwSG9DL3p5WG03dHJ0YWpwRzQ0SytqcUV6OFVPRFJvUTRtWTJBSGs1R3Y2dEIzVGd2UDZYcEN4VGp4bDVkRytIZFhoYnBWcDVtYWhmNlZPdUpDd0E3bE1iS1dOeHF2Z0RyVjJGRG1KVjNFdGVydEQvUmJsYW5vaFdicS9CTWphWlN6Y0JJQnNRdXlVWEF5OWIvWU5aaFA3MWV5dUx6NG1YWXoyS2hUMmZROERmd1dvWXZtRldUY0lRaWtNdHFuVHUvUmZ6NHFHaThYUVVvbXZnYkIwTGp1bllHU1dWemk2cGRQWWdaYXVONER5dUJmbVFxRGhESnFNSmZMcnpXNjhzWHVJalZpb3JUd0EydFBJYmVuTFF5MlBkdUZiQ0V4bEFPd3JmOU9HWmZvQUJzaGxrT2d6QXV4OU9yeWdTdldhWUFGQ3FseDVhcjFaZkwrcVBXdUxIb1NwWXdOM01CTy9kcUVQck9jN1ZSTDZycFZtWlZGR2pjNUFscmwycDFQKzZYQzlmdnBHeWRIZnkzYlB5ZzlYRllxMWF1Wm5RNjJMaXA3UjRrdStaTGN5V05sSldrZzNDdlEzQ0NRejUwaEY0b256amxuSmw0ZGxwWC9oZWs0eCs0c0MyOTZrdS9ZQ1NTdm45bGYwN2dDRml2RTY3RDBMNlh1cnJWdk0vUDRSL2Q2bXk4SXE0YmV4NksrTzUzTnk3S042TUlWYjlNYUxPT1YxOUExOHQ1UEhQUSthNWh1aFo3RnZhdDdOVUxiMndWRmw4NXdPVmsvK0lxcjhGVlg5THViTDR3WEpsOGExN3E0c3ZPRkE1TU5DTFUxTDJhdTg1a3E3SHFrL1pZVWg2WGEvQk1QN3NlcG0vRENNYWRnRFk5SDdVZEFyUnkvYTN6MkEyMWxYanVFUzRZL1dGR3hIZkV5U1prUkxiNmNSbXk3cVBZQ1ZLcjFjZUhSZkdJZzNFaisrdjdMOGt4TXFOYXZpWGdIZzRoNS9vQU0wSThQKzNtQzErY3lPSlJHUUwyWTgwcXN1ZkEvRGpyVU5KT2hoMmZidk9oK0dWNWNyaW4yNHJuUEVYRi9DQ3Z1N3gxbXRVdlJyNXZicjN6RlBWKzU5Y2wvODFnRStLSjVXZ25OMThQNnZjZTFKZTA1UFp3dXlYeXBYRkR3SjRVWXF5ZE5VYkx4ZnczcjNWaFgvWVc3bnJuYnNMZXo0L2FOYmFyeDEycnlqN3RVVkp1Zkp5ZVE0MS85d0cvUlAzMWhiK0Y0QlVLL0k1emgwdUx5MjhUY0NmWWJqbmdOWWs2STNsU3VtcS9mV0ZOOC9rOW53bmZnL2RlL29rdmFUZkwxY1dkNEY0VWRyOGhpa2owTkkxZ0h2L1Jady9Nc3oxYXdwQjZxQU9UaS9YcWplR1duazVoS3ZaSGFpZWdKcHJHb1dvTDVTcUMrL041UXR2M01tZGxZM2tyYm9lSytweHJmNG5rb2drclJjUDZYNkJJUkY1bFdKOHdITkNPK0YrcTBrSGdLS2FnMTduOVpHa01CK0xpZHd1ZXV2L2RjdEs0Qm43YXZ2ZXNqdS9PNm16azNoNkV4UEJicFNKREtBeEtLOHBwQisxQktCK0VTNXFSb0xvMGJIMTYrd2s4UWlPVEZlWHF6TUl3NmMwc1B3OFFZOGcxelNNMUMrMWdDOEd5THlkNUxDcS9SM01jS2E2V0ZsOEIrQ2YwRklOSDBwQ1FHQkcwSnNlcUo2OGZyRzIrUHJ0dWUyZnY1QVhyb20xbVZTc2NWUkh0MWZyRHp6dVJQWDRMeEs4RHFzQnMyTlpKa2ZRQ29HM1h6Sjl5VUMzaDBrZ3FmMlZ4YmMzcE90Qm5MT0JwQW9DWHlEaCtuSmw4Ui8zVlJmL2l2bnNiVE9jdWE5ZnZvUEtGZjh1S1ZORytYelU4RkJCbDVXcmkxZEFlaExJcXdnNHlkMG02Yk5wcFJsblR1TnZqbGZ4c3dRZW4rYTZMZ0pRTDJ5RXVyWlVYWGpibFBMdjNWblllYURmUFpKY3ZydHk5MnVXVlgwWXlFZHVJTi9FRVBoYUZsTWZIRlY2a2pMbDZ1SXZDUHI5MWlTaXJWZUF1SmgvZFRDNkZNTHYxV3ZWaXlXOW5FTkc5SkdVSzljV24wa3dIbG91NlRza0NKOFEzVjhHUXRVVDIyTkJCVnJsYkErR0V1UWxGenJJQ3dvbDErNnJ5SkFPTGdCQUR4K1FEQVNYSVpRVjZaeHdvYVRuQVhob08rL09ldWttL2xzeERGZXVCYkNRVW53cUFQRHdIRzV4TXprL3VNQVlONkc3dEZ6WitqOG9WeGYvQU1EL2lKKzZUam5hdjBrNFJ1Sm1ab0xQc3RFb2VBWVpwN0FoWk9Ub2d4QU1ISHpnNlRJSWthZnoyeVdkQjNDSGdFc0pYQ25vMHBIWld3bkhRZjNTM1BTbGZ6dVM5S0prcFd5cHV2akhCSDRaUTY0b3VxZ0srSnFEdnVqaHZwSU45TDF3S3JoSFVEV0gzUElPN0FpeEtqTG1FUnpKQ3BvTzY1VnpWdVIyd1BzclNQeTRGMzZNUk54NS9mQmxFLzVsKy9TWlA3M2U2bmdZU3BXRlZ3QjRNOWJ1c1NVclZaUDRQUzBKK0I2SnIwcTgzVGt0d0FXSDZIbkNlVmR2RkJwaEFhR3ZJbkJCSlhDT3pqa3VCeUd6V1hCbE9nemRkcnJ3WEFrWEFyelllODJUdWdKQUVlQlphQ3JSdEZjOGhONVdMT3o1OVdHMkEvWldGNTRjU2gvY2dFaTlDeTFDL0RlUnQwTzRNeHRrYjIva0d2Zk1ZbmFKNUVwTDNKc3QxVXJQcGZUTzFyMk1EUWxISGZYUzJlbExSemFBbG1xbHB5b00zOXV5WDI2L0ExamJyaFg3dlNWeTFjOE8rKzd2cTk5MVpSanlud0JFKys1cDNxVXlHYng0dGpENzZXSHlUb01rbHF2bG13RC9sMmhPbXBNcWZEWHZSL29vcG9NYjV6aFg2NVppckNQOUlvQ2dWRmw0TGNuZlJ2SzZhVHB6QUc3TkZ3by92NU03NzBrb090NFFZNDhIMm4wSWF5c2ppYUlNU0Z3ZzZBMXFoSWNvVGtFKzV3RXZoRjVDQU1pRmdBTkRSekx3VWlZU1A2eE96NXBqOFlBOEJ5S29RZkt2VUFnK3RKRjBla0Z5NVpBTy9jOXF0ZklqQkVaaFlsRWc4QVNCVHlEa0d5R09vTkk0SlBMK0dxckh5eW85RU1WNEZEQUY4Z3dCRnhDNEVQSVhnamhMelgwTkFPMFlsQnZZKzlKQk12TUhveDQ4QVNCVG1IcEhvMXIvTVRTOVNhVjl6dEhzT1g3ZE5nSlhRN2lhRU9SUlJ4Z2VGM0YvQ0p4Q0ZmVXE2QVh2UXZwc0F3am9rUUdYOHdBS1VqaE5qMjBBQ29CYWRkaFJKTi82T0FEd3hORmg5OUtMaFQyZkxGVVcvZ3lkazlNTndIa1E4NFFBb3JiaWwvZXpnbklKaS9zV2wrNDZzcmRTQ2dWbFNGd3BLTFBCclpCMWFiMXY3eTRXOW94czcvT1FEbDFRcTFSZUdYUCtFYms2N0xmdjE2WDB4RmNjMDdGYmhtbkhEYmxyQ00yMnZxYnAxRDJJanhienhiYXlZYmV1UXZlMlFUZXh4Y3k2NTBXLzdkWGVqL21xL3hyUTlydWQrRUdMZUlLcmhkZWd4N1pFcjczUjZESU1yWThpQWV6cnNXNGNqRzBBN2FkWjJBckVHeitVdUtOckRZaTdPL1FJTzM2UC83dW1vNHArM1BDYlR2SFRtSFp2bU9OY2JhTnA5V0lIZHh3clZVdS9BZTgvQU9MY0RTUVZiNHhSSjdBRDVJN1ZLaFMwWmh1MSs0OTJXaHV0dnlXS3I1L2ROdnVGRGFUUmx4bk9WUGZXOTc0cURCc1BaMmVBNXFSMDc4UEUyNDBEa0dzcG5GM0UyRXZPVlJGZlJ3cDloRW54NTlGUm54VGJnZGlUMmhMSE9iTnc5czBucS9kZjBacEF0QWZtSVlocnloTkFuc0JsSUM1cnZWM3k4R0hMSE0yTmMvQUVBSWovaW1uM3B4eGg3TnZsYXZWSklKN1VkWGpRWkQ0K3dYck1VdTNrOVFEK0prMitCM1Z3dWxhdFhodExiMUMrRVlKdzFEbCtvTHNlZWptdDZkNkw3MjVMM2F2QlhxdERraXF5ZUgrcHVuQXJoQ2NpM2FRMEpMaGQ0SFBWZEhIcVU3VHBvUVpBb3BuNE9PTkdkek4yTGR3RU5sVnAzcjc0SGtYVXdmblk5MzdhWFZFSHVPRTNYY0ozbE9WdnpuRnVvTlA0alRCWG1QdXNIRitCVHR2UXRIUjMwdDMxRmRHdGFORHJuSTBPbmpWUmJ5aE96Nzl6QTJrTXBKZ3IzazY1WCt2aDRpOHRSRk5jRjdVYmo4NzZpOU5kZjcwKzBYbnhldXljWEdwMVQyd1ljZE41UE8va2RNSDlvb0QvUUxyd1k5M0UrNFZlN3haYld5SGoxK0tYdmhGa002OGQ5ZnZtb1VlakdkTjArRFNFR3lXbFdvU3MxS3FQby9Ea0liSWpnRy83SEwvU2NiRC9IdldhUWJYZitiMEcxL2dLTVhENlowQ0hrUHg1cjdacjZabjdsdmRkdmw1WkI2YVI0aG9LTG5JRE9PaStSOEhZWDRBdVZYaHRjSFlRemRxaVRzaGh0WVByMThHUFpOWFpZbS9nOElyNXFmbHZqU2k5ZFprdnpMK0h3TytrZEJyZVRieHV1dXVyMTZTRFhlZU1BZy9nSGN3SGI5eW91VThTNXJiTmZjakJ2YW9WWjNVb3M2a1kzWFhYcjcxeHdBY1lWSi8wRzk1SHZJanpSK0Q0RWdCM29uT1ZrN1lPK3QzRDBDSzI5R2lSUWVhM2kxUEZyNDAwVmNsQml2eEhwKzNVWXhJRFhYNEloODVPZW5GSnBid0hiOEtxb2x1YTNSOWJqd0FBRGVkSlJFRlU5eXNVK1lrNXpoMVBjYzFJbUpuYTh6MkJhZmRjb3duY0RvWGhkV01vVmgvazRtUE11QWJPaUVrN1V2QVFOdHFCamxsZTFBZmgyNlJlWEN6cytlUWtzeTBXNXYrVTRKdlhsR1kwOU9za1Iwa0k4bDNiQzJlK1psd2k3MTRVQzNOL1R2TDFnc0tXMjdseGRmd2pxemN2TEE4K2F6RHorZms3WFNielBBRGZSK2NnT2dyRzFVNjY4UUp2TGVhS0h4OUQyazVrZXB2YkxrU2VFZGJEeEFNb1YzZ0ZwR2ZHRHFVUWllcHdSdnBNcWdKdWtKajVWUWp5WTBnWFNLRGRUZ1RkZUsvdVBSTllzNkRxbTJkWE9tbEk0NGgrdzB4RWhOdjE5OGoyTVNhRUIvUlpab01YelJZdTNaRFhuR0VnR1dZS1U2OFQ4QmIwRnJ0dVdacm1LbnI3OXZ3WnZ6RU9wYUgxSU9sbjgvTTNPN3JYRVF6UnVZTGFrdEJ4SkFNb0FCU25pbDl6UWViWmFvYjg2dDdiUFMxd1VIVllVNUVCaUJyYWwyOGJRaTVrbU53N1d1aWZoczVRaWNrN2V2RmIrZWt6aG5hWU1TenQvZEE4UHdhaE8vOUViVW5Rb3grb25IZ1NzSFk4NkxOQ0hOWXNrTDAwRDhhNUNwMjRKeUk1amVPRkdCYzFDSCtWbzN2aDdOVHNOemFyRURPY3FjNFY1bDhGNFE4QjFMQldwTFlWcVJGODgxUmgrcmNtUFhoR2tGd3A1dWR1cHZoSExYSHVlcUxyVFlkKzQ2dWlPTVZjOGJac0JzK0RkRHZXaW5PMzNQMjNpTXJtQk54WXJwU3ZBZFkxZTBnTnlSQ09rU09FRGUzckIyR1FLQ0xNdnFWOU8xdWVoMUlqcUFIaTQ3MXN1Y2ROMUhmUGNlNndvQSszaXhRdlhuK0VwakpSTnFSdWludTZXaSt2RFVBQWZGQXBFYTNOMEkxOUQyd1VDTmhIOEhkejA0V1g3eXpNNzkzczhwQmNucDJlL3gwSC9oeFdRNTl0d3I3VVlBUWRvUERmWmd2enI5bW94NWFOUWpJc1RzLzlQc21YQWxxTURyZiszMXIxUmsyTk9zMlozSjd2WkFJK0M4RC9RNmNaVWx4WmJJdkNQVkw0RitWNitmSlJyeUtvTmNIWWgwbi91N3NLdTQ0bE9WRnNQRjVRM09GRTR2d0lITWtFbU9qV1VTOEN4M2pnQm1Dd09MLzlPNFduSDFoZS9PSG9oMjd6bXg3WER2MjhKMm5HTXZFQlZHdEZKMXZxQlc0cTdPakRoSHZ1N1BUOG16WjdBSWhEMGhlbjU5K2Y0ZFRUSWJ3YlFCMXJWMVdiVnArQ0dnSStHWkEvTTd0dHo1K1AwdXhnSTVCY21TdnMrVDhJZ21jQSt2dVdVdFltS2Nhc1MxN1NTRmVoQURDVDMvT0QyY0w4Q3dHOUVrS2t6ZHBMMDNZckVHL1BBUEhEQ2hzM0g5T3hFVG1JYUJFRXQwbzQycFZuR21vQS9wWWNMSGFYRkVqK0tURzNlS25xV3VBWGQwM04zNW15ZkNNbmw5LzJEUkJwM1pZMmxZbUljMFBQNjRGMVJiZXhpMXdhTVc1SFdnL3FBYlMxSDlWNWFHdFFCZkI1Ujc1MFcrSE01ODlOejIwb1BOazRtWm1ldVh0MmV2NFhKZDZFcHBGeVpQTVhkUVNSdWNXa0VJUnZVZnpWb0pENXFXSmh6K2NHWHpKNTVuSnpkOHdXOWp5ZndNOEorR3JyOEZZYVNNZVdOOG1WdWVsTDMrb3ltWjhrOURaSjkyQ3R0dlU0NzM4WUxlRFdOYnhocVhyaU5hT2NYQlNuaW5jNDh1KzZEaWN1bzRDdlpBdjVSQXBPKzVjWEx2ZmtVN3Z5U05idkNjY2Q4TDRrQS9XNHVaZ1hMMUhzRHArWHBNNDhBTys5bnJ1L3N2K1M3aDk3ZVF4cStlSk5BMXYvQmhsa0pqYXVUWDRGdWpZUWI5ejJzTnVtTThsbnZlc0dsMGM0U3VEOWdQdjVUR0hxbWJPRlBlL2VqTDJHdEpBTTU3Zk4vMU9oc08xNkVpOEE4QkVJa1lwNzNIWXg3UHFrRWRzTnFzY1F3SmNCdkRKQTl1bHoyL2E4dmNqaS9VUGN6c1JvRFNSL08xWElQUTNDeXdCOENXdEZtOTMxTlNwUjUvcHBFUGRIWmo3amloNVJ6QlZ2bTUyKzlPWE1CdGNTZXBQUUZtV08rLzdqdHNocHI0SEFsNWVyaTcrNndUS3NKa3hLNUZ0aTl4L2xON2p2RUU0NDZJOTNjZGU5Zy9LUjVNSUduME5ncGlPRjlUL3hFbjJqVUZnemFHMGFjdndVbXBHUDJvZlEyZi8yK3B1Q1BLaUhobHpwTUducEc1Q2g2YVNqWHg2OTZrdXRmeWU2UlRocFovSnc1RDIrR1kyRmFMNmc2V3psMXBMbWZBbHFFRGdHOFpza1B4VkFuNTBwekgrSHNhRE9weE90dUlqdmsvVDMrMnFMancwOVhrVGk2WUxPNzJQc3JxNy80L1N6bzQwVFFqZ200bk9FL2pGZjJQYkpIZHlSYUI5b0s5SHEvTjUrbnhiZWQ2TG1uaVg1WHdCMEZjRnByQTByMXEvT29uYmM3M3QzM2ZXcVh3K2dKbUdSem4wcDNWME16OXpVM0RjQmZQUHV5dDF2WFVIdHB6endzMnc2RGUvd3p4c3JZNzlCSmNuN0YzVnFRY0x6ZTVFVDlEOFhhNHUzemVmblB6WmtHaDNNRmViSzVlcGRMNVg0YmdERnJwOTdyaFFsbkNSeGM3R3c1eU5KOHRoZjN6OEg0TVpZbXNKYThUbTcvbzRHblFiSnoxeUl1YVBZSW1UeW1TODFxaXNmQmZUY2FDdWthN0RyanZNcUFJcDhrSHZwNFpKYzVKbW9WeDRrVmFvdU5OcERZbWZiNjlkK29oWG9xU3l5ZFFBZEhwWFMzbWRTSmk0K0xWVkxzNUwvQndLWFE2b0NEQVM0VmhpaHlGQTkzcERpZjBkbGp1eUxTRERldVFuTlFUS2syQkMxQkxCSzZaVElndzY2ZzNUZjhvNWZuWjJhTFoydWcrWWd5dlh5NWZEaDR5UmNLZURSZ0dZcG5pRnFXMHBuK3MwSmgzZ0t3QUVBWDZYakYraUNMK3llMm4zSEpKd2lUSXBqT25aR3BYYnlNVjY0R3RBMUFCOG00VnhRMCt2VVdiU2FTaXJKcVVPNEg4QVJFQ1ZCQzA1YzlPQ0JUTVl2emt6dHVYT3o5bzN2MDhKWnArcDR0UGQ0RktCSEFud1loQjFEdEJtME5KNlBFandJNlE3U2ZVZnlwMEErRGNDemhpeGljMUFSdmhNRW1XY1Y4OFhGZ1Zja1pHOTk3dytIWWVOVmdHN29pcEFTcHc3ZzgwNzg0OTNUYzdja2pjQjBzTHBZckh2L1RoSFhRS2dUeklocVR5UmFnMDhVRXpRYU1tb2dhZ0R1VUlZVGM5eVNsTVhseGF2WTBKK3J1YW9XZ2F5a2JPVGFVWUJETTB3YUtEYlFOQVdVd0N5QmY4QzArK1hJd1h3ODNmaEF0Nyt5K0pnRzlML1JqQ3dWRWd3a0JNM3diWFNpTWhCRlFJQWFBa01RTlVlK3M1aWYrOFA0QVAyZ0drQUJvTHhjZnFRYWpTZVFyc0xtWmp4Q3dCRUtWbWN6MHFwTlQ2U1czQXpUNHdHQ0lNTzJXalFWTUhSU0EwQU5VaFhFaWNEeFdPQjVNc2lqRmlKL2Fpc3BCRTJLb3pxNmZibCthdWVLM0E3STd5UzRVOUNGaEhaNDhWeTAzSmtSV0FaUlo5TUYzaEhBSGZIRUNTZC9EektadmJsc2J2L0Z1UGplVVlWdTI4cEl5dXlyNzl2dDVYYzdhTWJMN3lEY0xzRVhBWjR2NFF4Q0diQTErVU96SFFvTUthMEFxSUU0QmVBNHhIc0ozaTNvRUFQc0E0UEZ6RlRtNkNXNDVOUlcyTmZxaFNSM0JBdm5WNnZCSElCWklMeEl3b1hOdG9NTFNXMFRtQ0VVUXF5RFdJSndndFE5QUE4QktIdkgyNWpqa1ZuTW5vb21XaVdWemtiRnZ3L0VzSjVwV2lzemZDNWZLTnk0a3p2dkdkRXRRNUxiVjExNG5BY2VEM0lPd2lVQXpnSjB2RGxvODR0bjVQRHY1M0xQaVlHSmRiR3Z0bStQOThzUDgzQlowayszN3FRbU9PK29yQWNEQnpVa0Z3SWhDZFJCbkNDejVkMjUzYVZ4ZTlNWmh2MjFoY3RDajRkUlhGYmdHa0RZbmtReXBQUE5jSXhpd0dWQm5xRHpvYzlPQmJyamt0ejhEM281aysrK3p3TzFoWWVzaE81eUJyN0I1bk9YNEVLQ0pNSUFJYWxBb1NMTERxR2V6K2R2aXlSaXcvaVRUc3RXVWVBeFJrVFNXWmVrN0JFY21ackNVZ1lBUXB6cGE2ZzFkbUhYeXBpTTE3YzBnMTQyU1R5RVF3V0MyMVNyRkdwa0lVdE5OZWdDQUFnVU5xaGNqWjYxVEtHMlBBWFdsekMxdkF1N2xyZjZTajFGbTNHSGNDaGZSMzBxZzR6ejhDcWdzTEtFcGNZc1podEoyczIrK2wxWE5rTCtTOWVlWUtKaUlpYitwUFN1NHZTZWw0MWp4UzZKWlpSejI3QXRjd0V1V0htd1NxbzJtelNSWWJZcUV4OUF1Nk1FQUtkbnhSbUdrWno0ZTcrM3N2Z2NELzAxVm1PSWR1OGQ5MDBHcThweEpQamZaNmZuM3pTT01vNHlUV0MxajF0djMyK1UrVTZTWHZlMDBmdnBOYmoyQ3QyMjJmVzJhU3ZRWGcxcm5SaHhhOEx2OUR0bksxU3E4WjhYYTMrRGtjUnliZkUxRUY2RDlEYVk3Wldvb0ZQTzhXZG04M3R1R1V0QkRXTUFKc0kxREdQaWxGVEtvK3JmRGVCbmtId0ZDblN1UXAyZ0EwR1FmV294Vjd4OVRFVTFqTDVNM0E3VU1BeGpqbk0xRk53cjBYUkxHZGV5SDBUYzNFMEVkNFZoNDYwajkxUmtHQW13QWRRd2pFMWhqbk9IbmNNckJaM0NCdXkvQ1R6NWdkckpONllOYm0wWUc4VUdVTU13Tm8xbWZGMzMyMEpIbEthMHExRkIrSVZ5YmZFM1Ixdzh3MWdYMndNMURHTlRrWlFwVlJiZlFlSWw4Y1BvNHcyb0R3U3dST0RuWnFmM2ZHRGtoVFNNSHRnSzFEQ01UWVZrWTJvNjkxc1NQaEUvakZYUFpCendpUWJiYlY3NHZWSzFORHZCNGh2L2liRTlBOE13TnAxZDNIWHZ2cVY5TDJ4ZzVkVUFIZ09oUUNJTFlBclFsTVFzRUhrZW93aUVvTHpBa05CSzAvMGRNd1FjNVI4Sm9BeVlXWkV4WGt5RWF4akdsa0ZTOW1EMTRNVnl0Y0l5eUN6a1BUTlpVYm1nNGJNTjBBWHlZWmgxSzJ5NStnd1VOa0lFalFCaFJwQUtVMmZ0dllBWG5HcWxad09vWVJpR1lSakdWc0pXb0laaGJDblN1SVl6MTZDR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJqR2lQbi9KSVMzbWJZN21yTUFBQUFBU1VWT1JLNUNZSUk9JyBpZD0naW1nXzEnIC8lM2UgJTNjL2RlZnMlM2UgJTNjZyBpZD0naWNvbicgZmlsbC1vcGFjaXR5PScxJyUzZSAlM2NwYXRoIGQ9J002MSAwTDYxIDBMNjEgNjEuMjMwNEwwIDYxLjIzMDRMMCAwTDYxIDBaJyBpZD0naWNvbicgZmlsbD0nbm9uZScgc3Ryb2tlPSdub25lJyAvJTNlICUzY3BhdGggZD0nTTUyIDEuMjMwMzhDNTYuNDE4OSAxLjIzMDM4IDYwIDQuODExNSA2MCA5LjIzMDM4TDYwIDQzLjIzMDRDNjAgNDcuNjQ5MyA1Ni40MTg5IDUxLjIzMDQgNTIgNTEuMjMwNEw4IDUxLjIzMDRDMy41ODExMiA1MS4yMzA0IDAgNDcuNjQ5MyAwIDQzLjIzMDRMMCA5LjIzMDM4QzAgNC44MTE1IDMuNTgxMTIgMS4yMzAzOCA4IDEuMjMwMzhMNTIgMS4yMzAzOFonIGlkPSdSZWN0YW5nbGUnIGZpbGw9JyUyMzAwMTlBNycgc3Ryb2tlPSdub25lJyAvJTNlICUzY2cgaWQ9J0dyb3VwJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgwLjk5OTk2MTg1IDApJyUzZSAlM2N1c2UgeGxpbms6aHJlZj0nJTIzaW1nXzEnIGZpbGw9JyUyM0ZGRkZGRicgc3Ryb2tlPSdub25lJyB0cmFuc2Zvcm09J3NjYWxlKDAuMTI5MzEwMzUgMC4xMjkwNDM4KScgLyUzZSAlM2MvZyUzZSAlM2NwYXRoIGQ9J00zOSA1MS4yMzA0TDUxLjE0MjkgNjEuMjMwNEw1MS4xNDI5IDUxLjIzMDRMMzkgNTEuMjMwNFonIGlkPSdWZWN0b3InIGZpbGw9JyUyMzAwMTlBNycgZmlsbC1ydWxlPSdldmVub2RkJyBzdHJva2U9JyUyMzAwMTlBNycgc3Ryb2tlLXdpZHRoPScxJyAvJTNlICUzYy9nJTNlICUzYy9zdmclM2VcIiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsInZhciBuLGwsdSxpLHQsbyxyLGYsZSxjPXt9LHM9W10sYT0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pLHY9QXJyYXkuaXNBcnJheTtmdW5jdGlvbiBoKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIHAobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24geShsLHUsaSl7dmFyIHQsbyxyLGY9e307Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IociBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW3JdJiYoZltyXT1sLmRlZmF1bHRQcm9wc1tyXSk7cmV0dXJuIGQobCxmLHQsbyxudWxsKX1mdW5jdGlvbiBkKG4saSx0LG8scil7dmFyIGY9e3R5cGU6bixwcm9wczppLGtleTp0LHJlZjpvLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PXI/Kyt1OnJ9O3JldHVybiBudWxsPT1yJiZudWxsIT1sLnZub2RlJiZsLnZub2RlKGYpLGZ9ZnVuY3Rpb24gXygpe3JldHVybntjdXJyZW50Om51bGx9fWZ1bmN0aW9uIGsobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gYihuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBnKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9nKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP2cobik6bnVsbH1mdW5jdGlvbiBtKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gbShuKX19ZnVuY3Rpb24gdyhuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZ0LnB1c2gobikmJiF4Ll9fcisrfHxvIT09bC5kZWJvdW5jZVJlbmRlcmluZykmJigobz1sLmRlYm91bmNlUmVuZGVyaW5nKXx8cikoeCl9ZnVuY3Rpb24geCgpe3ZhciBuLGwsdSxpLG8scixlLGM7Zm9yKHQuc29ydChmKTtuPXQuc2hpZnQoKTspbi5fX2QmJihsPXQubGVuZ3RoLGk9dm9pZCAwLG89dm9pZCAwLGU9KHI9KHU9bikuX192KS5fX2UsKGM9dS5fX1ApJiYoaT1bXSwobz1oKHt9LHIpKS5fX3Y9ci5fX3YrMSxMKGMscixvLHUuX19uLHZvaWQgMCE9PWMub3duZXJTVkdFbGVtZW50LG51bGwhPXIuX19oP1tlXTpudWxsLGksbnVsbD09ZT9nKHIpOmUsci5fX2gpLE0oaSxyKSxyLl9fZSE9ZSYmbShyKSksdC5sZW5ndGg+bCYmdC5zb3J0KGYpKTt4Ll9fcj0wfWZ1bmN0aW9uIFAobixsLHUsaSx0LG8scixmLGUsYSl7dmFyIGgscCx5LF8sYixtLHcseD1pJiZpLl9fa3x8cyxQPXgubGVuZ3RoO2Zvcih1Ll9faz1bXSxoPTA7aDxsLmxlbmd0aDtoKyspaWYobnVsbCE9KF89dS5fX2tbaF09bnVsbD09KF89bFtoXSl8fFwiYm9vbGVhblwiPT10eXBlb2YgX3x8XCJmdW5jdGlvblwiPT10eXBlb2YgXz9udWxsOlwic3RyaW5nXCI9PXR5cGVvZiBffHxcIm51bWJlclwiPT10eXBlb2YgX3x8XCJiaWdpbnRcIj09dHlwZW9mIF8/ZChudWxsLF8sbnVsbCxudWxsLF8pOnYoXyk/ZChrLHtjaGlsZHJlbjpffSxudWxsLG51bGwsbnVsbCk6Xy5fX2I+MD9kKF8udHlwZSxfLnByb3BzLF8ua2V5LF8ucmVmP18ucmVmOm51bGwsXy5fX3YpOl8pKXtpZihfLl9fPXUsXy5fX2I9dS5fX2IrMSxudWxsPT09KHk9eFtoXSl8fHkmJl8ua2V5PT15LmtleSYmXy50eXBlPT09eS50eXBlKXhbaF09dm9pZCAwO2Vsc2UgZm9yKHA9MDtwPFA7cCsrKXtpZigoeT14W3BdKSYmXy5rZXk9PXkua2V5JiZfLnR5cGU9PT15LnR5cGUpe3hbcF09dm9pZCAwO2JyZWFrfXk9bnVsbH1MKG4sXyx5PXl8fGMsdCxvLHIsZixlLGEpLGI9Xy5fX2UsKHA9Xy5yZWYpJiZ5LnJlZiE9cCYmKHd8fCh3PVtdKSx5LnJlZiYmdy5wdXNoKHkucmVmLG51bGwsXyksdy5wdXNoKHAsXy5fX2N8fGIsXykpLG51bGwhPWI/KG51bGw9PW0mJihtPWIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIF8udHlwZSYmXy5fX2s9PT15Ll9faz9fLl9fZD1lPUMoXyxlLG4pOmU9JChuLF8seSx4LGIsZSksXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiYodS5fX2Q9ZSkpOmUmJnkuX19lPT1lJiZlLnBhcmVudE5vZGUhPW4mJihlPWcoeSkpfWZvcih1Ll9fZT1tLGg9UDtoLS07KW51bGwhPXhbaF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPXhbaF0uX19lJiZ4W2hdLl9fZT09dS5fX2QmJih1Ll9fZD1BKGkpLm5leHRTaWJsaW5nKSxxKHhbaF0seFtoXSkpO2lmKHcpZm9yKGg9MDtoPHcubGVuZ3RoO2grKylPKHdbaF0sd1srK2hdLHdbKytoXSl9ZnVuY3Rpb24gQyhuLGwsdSl7Zm9yKHZhciBpLHQ9bi5fX2ssbz0wO3QmJm88dC5sZW5ndGg7bysrKShpPXRbb10pJiYoaS5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgaS50eXBlP0MoaSxsLHUpOiQodSxpLGksdCxpLl9fZSxsKSk7cmV0dXJuIGx9ZnVuY3Rpb24gUyhuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KHYobik/bi5zb21lKGZ1bmN0aW9uKG4pe1MobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiAkKG4sbCx1LGksdCxvKXt2YXIgcixmLGU7aWYodm9pZCAwIT09bC5fX2Qpcj1sLl9fZCxsLl9fZD12b2lkIDA7ZWxzZSBpZihudWxsPT11fHx0IT1vfHxudWxsPT10LnBhcmVudE5vZGUpbjppZihudWxsPT1vfHxvLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQodCkscj1udWxsO2Vsc2V7Zm9yKGY9byxlPTA7KGY9Zi5uZXh0U2libGluZykmJmU8aS5sZW5ndGg7ZSs9MSlpZihmPT10KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUodCxvKSxyPW99cmV0dXJuIHZvaWQgMCE9PXI/cjp0Lm5leHRTaWJsaW5nfWZ1bmN0aW9uIEEobil7dmFyIGwsdSxpO2lmKG51bGw9PW4udHlwZXx8XCJzdHJpbmdcIj09dHlwZW9mIG4udHlwZSlyZXR1cm4gbi5fX2U7aWYobi5fX2spZm9yKGw9bi5fX2subGVuZ3RoLTE7bD49MDtsLS0paWYoKHU9bi5fX2tbbF0pJiYoaT1BKHUpKSlyZXR1cm4gaTtyZXR1cm4gbnVsbH1mdW5jdGlvbiBIKG4sbCx1LGksdCl7dmFyIG87Zm9yKG8gaW4gdSlcImNoaWxkcmVuXCI9PT1vfHxcImtleVwiPT09b3x8byBpbiBsfHxUKG4sbyxudWxsLHVbb10saSk7Zm9yKG8gaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW29dfHxcImNoaWxkcmVuXCI9PT1vfHxcImtleVwiPT09b3x8XCJ2YWx1ZVwiPT09b3x8XCJjaGVja2VkXCI9PT1vfHx1W29dPT09bFtvXXx8VChuLG8sbFtvXSx1W29dLGkpfWZ1bmN0aW9uIEkobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsbnVsbD09dT9cIlwiOnUpOm5bbF09bnVsbD09dT9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiB1fHxhLnRlc3QobCk/dTp1K1wicHhcIn1mdW5jdGlvbiBUKG4sbCx1LGksdCl7dmFyIG87bjppZihcInN0eWxlXCI9PT1sKWlmKFwic3RyaW5nXCI9PXR5cGVvZiB1KW4uc3R5bGUuY3NzVGV4dD11O2Vsc2V7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkmJihuLnN0eWxlLmNzc1RleHQ9aT1cIlwiKSxpKWZvcihsIGluIGkpdSYmbCBpbiB1fHxJKG4uc3R5bGUsbCxcIlwiKTtpZih1KWZvcihsIGluIHUpaSYmdVtsXT09PWlbbF18fEkobi5zdHlsZSxsLHVbbF0pfWVsc2UgaWYoXCJvXCI9PT1sWzBdJiZcIm5cIj09PWxbMV0pbz1sIT09KGw9bC5yZXBsYWNlKC9DYXB0dXJlJC8sXCJcIikpLGw9bC50b0xvd2VyQ2FzZSgpaW4gbj9sLnRvTG93ZXJDYXNlKCkuc2xpY2UoMik6bC5zbGljZSgyKSxuLmx8fChuLmw9e30pLG4ubFtsK29dPXUsdT9pfHxuLmFkZEV2ZW50TGlzdGVuZXIobCxvP3o6aixvKTpuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCxvP3o6aixvKTtlbHNlIGlmKFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwpe2lmKHQpbD1sLnJlcGxhY2UoL3hsaW5rKEh8OmgpLyxcImhcIikucmVwbGFjZSgvc05hbWUkLyxcInNcIik7ZWxzZSBpZihcIndpZHRoXCIhPT1sJiZcImhlaWdodFwiIT09bCYmXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmXCJyb3dTcGFuXCIhPT1sJiZcImNvbFNwYW5cIiE9PWwmJmwgaW4gbil0cnl7bltsXT1udWxsPT11P1wiXCI6dTticmVhayBufWNhdGNoKG4pe31cImZ1bmN0aW9uXCI9PXR5cGVvZiB1fHwobnVsbD09dXx8ITE9PT11JiZcIi1cIiE9PWxbNF0/bi5yZW1vdmVBdHRyaWJ1dGUobCk6bi5zZXRBdHRyaWJ1dGUobCx1KSl9fWZ1bmN0aW9uIGoobil7cmV0dXJuIHRoaXMubFtuLnR5cGUrITFdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiB6KG4pe3JldHVybiB0aGlzLmxbbi50eXBlKyEwXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZnVuY3Rpb24gTChuLHUsaSx0LG8scixmLGUsYyl7dmFyIHMsYSxwLHksZCxfLGcsbSx3LHgsQyxTLCQsQSxILEk9dS50eXBlO2lmKHZvaWQgMCE9PXUuY29uc3RydWN0b3IpcmV0dXJuIG51bGw7bnVsbCE9aS5fX2gmJihjPWkuX19oLGU9dS5fX2U9aS5fX2UsdS5fX2g9bnVsbCxyPVtlXSksKHM9bC5fX2IpJiZzKHUpO3RyeXtuOmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIEkpe2lmKG09dS5wcm9wcyx3PShzPUkuY29udGV4dFR5cGUpJiZ0W3MuX19jXSx4PXM/dz93LnByb3BzLnZhbHVlOnMuX186dCxpLl9fYz9nPShhPXUuX19jPWkuX19jKS5fXz1hLl9fRTooXCJwcm90b3R5cGVcImluIEkmJkkucHJvdG90eXBlLnJlbmRlcj91Ll9fYz1hPW5ldyBJKG0seCk6KHUuX19jPWE9bmV3IGIobSx4KSxhLmNvbnN0cnVjdG9yPUksYS5yZW5kZXI9QiksdyYmdy5zdWIoYSksYS5wcm9wcz1tLGEuc3RhdGV8fChhLnN0YXRlPXt9KSxhLmNvbnRleHQ9eCxhLl9fbj10LHA9YS5fX2Q9ITAsYS5fX2g9W10sYS5fc2I9W10pLG51bGw9PWEuX19zJiYoYS5fX3M9YS5zdGF0ZSksbnVsbCE9SS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJihhLl9fcz09YS5zdGF0ZSYmKGEuX19zPWgoe30sYS5fX3MpKSxoKGEuX19zLEkuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG0sYS5fX3MpKSkseT1hLnByb3BzLGQ9YS5zdGF0ZSxhLl9fdj11LHApbnVsbD09SS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWEuY29tcG9uZW50V2lsbE1vdW50JiZhLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWEuY29tcG9uZW50RGlkTW91bnQmJmEuX19oLnB1c2goYS5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1JLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PXkmJm51bGwhPWEuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmYS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0seCksIWEuX19lJiZudWxsIT1hLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1hLnNob3VsZENvbXBvbmVudFVwZGF0ZShtLGEuX19zLHgpfHx1Ll9fdj09PWkuX192KXtmb3IodS5fX3YhPT1pLl9fdiYmKGEucHJvcHM9bSxhLnN0YXRlPWEuX19zLGEuX19kPSExKSxhLl9fZT0hMSx1Ll9fZT1pLl9fZSx1Ll9faz1pLl9fayx1Ll9fay5mb3JFYWNoKGZ1bmN0aW9uKG4pe24mJihuLl9fPXUpfSksQz0wO0M8YS5fc2IubGVuZ3RoO0MrKylhLl9faC5wdXNoKGEuX3NiW0NdKTthLl9zYj1bXSxhLl9faC5sZW5ndGgmJmYucHVzaChhKTticmVhayBufW51bGwhPWEuY29tcG9uZW50V2lsbFVwZGF0ZSYmYS5jb21wb25lbnRXaWxsVXBkYXRlKG0sYS5fX3MseCksbnVsbCE9YS5jb21wb25lbnREaWRVcGRhdGUmJmEuX19oLnB1c2goZnVuY3Rpb24oKXthLmNvbXBvbmVudERpZFVwZGF0ZSh5LGQsXyl9KX1pZihhLmNvbnRleHQ9eCxhLnByb3BzPW0sYS5fX1A9bixTPWwuX19yLCQ9MCxcInByb3RvdHlwZVwiaW4gSSYmSS5wcm90b3R5cGUucmVuZGVyKXtmb3IoYS5zdGF0ZT1hLl9fcyxhLl9fZD0hMSxTJiZTKHUpLHM9YS5yZW5kZXIoYS5wcm9wcyxhLnN0YXRlLGEuY29udGV4dCksQT0wO0E8YS5fc2IubGVuZ3RoO0ErKylhLl9faC5wdXNoKGEuX3NiW0FdKTthLl9zYj1bXX1lbHNlIGRve2EuX19kPSExLFMmJlModSkscz1hLnJlbmRlcihhLnByb3BzLGEuc3RhdGUsYS5jb250ZXh0KSxhLnN0YXRlPWEuX19zfXdoaWxlKGEuX19kJiYrKyQ8MjUpO2Euc3RhdGU9YS5fX3MsbnVsbCE9YS5nZXRDaGlsZENvbnRleHQmJih0PWgoaCh7fSx0KSxhLmdldENoaWxkQ29udGV4dCgpKSkscHx8bnVsbD09YS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8KF89YS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSh5LGQpKSxQKG4sdihIPW51bGwhPXMmJnMudHlwZT09PWsmJm51bGw9PXMua2V5P3MucHJvcHMuY2hpbGRyZW46cyk/SDpbSF0sdSxpLHQsbyxyLGYsZSxjKSxhLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxhLl9faC5sZW5ndGgmJmYucHVzaChhKSxnJiYoYS5fX0U9YS5fXz1udWxsKSxhLl9fZT0hMX1lbHNlIG51bGw9PXImJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1OKGkuX19lLHUsaSx0LG8scixmLGMpOyhzPWwuZGlmZmVkKSYmcyh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1yKSYmKHUuX19lPWUsdS5fX2g9ISFjLHJbci5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIE0obix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIE4obCx1LGksdCxvLHIsZixlKXt2YXIgcyxhLGgseT1pLnByb3BzLGQ9dS5wcm9wcyxfPXUudHlwZSxrPTA7aWYoXCJzdmdcIj09PV8mJihvPSEwKSxudWxsIT1yKWZvcig7azxyLmxlbmd0aDtrKyspaWYoKHM9cltrXSkmJlwic2V0QXR0cmlidXRlXCJpbiBzPT0hIV8mJihfP3MubG9jYWxOYW1lPT09XzozPT09cy5ub2RlVHlwZSkpe2w9cyxyW2tdPW51bGw7YnJlYWt9aWYobnVsbD09bCl7aWYobnVsbD09PV8pcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGQpO2w9bz9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLF8pOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXyxkLmlzJiZkKSxyPW51bGwsZT0hMX1pZihudWxsPT09Xyl5PT09ZHx8ZSYmbC5kYXRhPT09ZHx8KGwuZGF0YT1kKTtlbHNle2lmKHI9ciYmbi5jYWxsKGwuY2hpbGROb2RlcyksYT0oeT1pLnByb3BzfHxjKS5kYW5nZXJvdXNseVNldElubmVySFRNTCxoPWQuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWUpe2lmKG51bGwhPXIpZm9yKHk9e30saz0wO2s8bC5hdHRyaWJ1dGVzLmxlbmd0aDtrKyspeVtsLmF0dHJpYnV0ZXNba10ubmFtZV09bC5hdHRyaWJ1dGVzW2tdLnZhbHVlOyhofHxhKSYmKGgmJihhJiZoLl9faHRtbD09YS5fX2h0bWx8fGguX19odG1sPT09bC5pbm5lckhUTUwpfHwobC5pbm5lckhUTUw9aCYmaC5fX2h0bWx8fFwiXCIpKX1pZihIKGwsZCx5LG8sZSksaCl1Ll9faz1bXTtlbHNlIGlmKFAobCx2KGs9dS5wcm9wcy5jaGlsZHJlbik/azpba10sdSxpLHQsbyYmXCJmb3JlaWduT2JqZWN0XCIhPT1fLHIsZixyP3JbMF06aS5fX2smJmcoaSwwKSxlKSxudWxsIT1yKWZvcihrPXIubGVuZ3RoO2stLTspbnVsbCE9cltrXSYmcChyW2tdKTtlfHwoXCJ2YWx1ZVwiaW4gZCYmdm9pZCAwIT09KGs9ZC52YWx1ZSkmJihrIT09bC52YWx1ZXx8XCJwcm9ncmVzc1wiPT09XyYmIWt8fFwib3B0aW9uXCI9PT1fJiZrIT09eS52YWx1ZSkmJlQobCxcInZhbHVlXCIsayx5LnZhbHVlLCExKSxcImNoZWNrZWRcImluIGQmJnZvaWQgMCE9PShrPWQuY2hlY2tlZCkmJmshPT1sLmNoZWNrZWQmJlQobCxcImNoZWNrZWRcIixrLHkuY2hlY2tlZCwhMSkpfXJldHVybiBsfWZ1bmN0aW9uIE8obix1LGkpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odSk6bi5jdXJyZW50PXV9Y2F0Y2gobil7bC5fX2UobixpKX19ZnVuY3Rpb24gcShuLHUsaSl7dmFyIHQsbztpZihsLnVubW91bnQmJmwudW5tb3VudChuKSwodD1uLnJlZikmJih0LmN1cnJlbnQmJnQuY3VycmVudCE9PW4uX19lfHxPKHQsbnVsbCx1KSksbnVsbCE9KHQ9bi5fX2MpKXtpZih0LmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXt0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobil7bC5fX2Uobix1KX10LmJhc2U9dC5fX1A9bnVsbCxuLl9fYz12b2lkIDB9aWYodD1uLl9faylmb3Iobz0wO288dC5sZW5ndGg7bysrKXRbb10mJnEodFtvXSx1LGl8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZSk7aXx8bnVsbD09bi5fX2V8fHAobi5fX2UpLG4uX189bi5fX2U9bi5fX2Q9dm9pZCAwfWZ1bmN0aW9uIEIobixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gRCh1LGksdCl7dmFyIG8scixmO2wuX18mJmwuX18odSxpKSxyPShvPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQpP251bGw6dCYmdC5fX2t8fGkuX19rLGY9W10sTChpLHU9KCFvJiZ0fHxpKS5fX2s9eShrLG51bGwsW3VdKSxyfHxjLGMsdm9pZCAwIT09aS5vd25lclNWR0VsZW1lbnQsIW8mJnQ/W3RdOnI/bnVsbDppLmZpcnN0Q2hpbGQ/bi5jYWxsKGkuY2hpbGROb2Rlcyk6bnVsbCxmLCFvJiZ0P3Q6cj9yLl9fZTppLmZpcnN0Q2hpbGQsbyksTShmLHUpfWZ1bmN0aW9uIEUobixsKXtEKG4sbCxFKX1mdW5jdGlvbiBGKGwsdSxpKXt2YXIgdCxvLHIsZixlPWgoe30sbC5wcm9wcyk7Zm9yKHIgaW4gbC50eXBlJiZsLnR5cGUuZGVmYXVsdFByb3BzJiYoZj1sLnR5cGUuZGVmYXVsdFByb3BzKSx1KVwia2V5XCI9PXI/dD11W3JdOlwicmVmXCI9PXI/bz11W3JdOmVbcl09dm9pZCAwPT09dVtyXSYmdm9pZCAwIT09Zj9mW3JdOnVbcl07cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MiYmKGUuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksZChsLnR5cGUsZSx0fHxsLmtleSxvfHxsLnJlZixudWxsKX1mdW5jdGlvbiBHKG4sbCl7dmFyIHU9e19fYzpsPVwiX19jQ1wiK2UrKyxfXzpuLENvbnN1bWVyOmZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKG4pe3ZhciB1LGk7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwodT1bXSwoaT17fSlbbF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBpfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLnByb3BzLnZhbHVlIT09bi52YWx1ZSYmdS5zb21lKGZ1bmN0aW9uKG4pe24uX19lPSEwLHcobil9KX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dS5wdXNoKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3Uuc3BsaWNlKHUuaW5kZXhPZihuKSwxKSxsJiZsLmNhbGwobil9fSksbi5jaGlsZHJlbn19O3JldHVybiB1LlByb3ZpZGVyLl9fPXUuQ29uc3VtZXIuY29udGV4dFR5cGU9dX1uPXMuc2xpY2UsbD17X19lOmZ1bmN0aW9uKG4sbCx1LGkpe2Zvcih2YXIgdCxvLHI7bD1sLl9fOylpZigodD1sLl9fYykmJiF0Ll9fKXRyeXtpZigobz10LmNvbnN0cnVjdG9yKSYmbnVsbCE9by5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih0LnNldFN0YXRlKG8uZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSxyPXQuX19kKSxudWxsIT10LmNvbXBvbmVudERpZENhdGNoJiYodC5jb21wb25lbnREaWRDYXRjaChuLGl8fHt9KSxyPXQuX19kKSxyKXJldHVybiB0Ll9fRT10fWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLGk9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LGIucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWgoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihoKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZoKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9zYi5wdXNoKGwpLHcodGhpcykpfSxiLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksdyh0aGlzKSl9LGIucHJvdG90eXBlLnJlbmRlcj1rLHQ9W10scj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxmPWZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uX192Ll9fYi1sLl9fdi5fX2J9LHguX19yPTAsZT0wO2V4cG9ydHtiIGFzIENvbXBvbmVudCxrIGFzIEZyYWdtZW50LEYgYXMgY2xvbmVFbGVtZW50LEcgYXMgY3JlYXRlQ29udGV4dCx5IGFzIGNyZWF0ZUVsZW1lbnQsXyBhcyBjcmVhdGVSZWYseSBhcyBoLEUgYXMgaHlkcmF0ZSxpIGFzIGlzVmFsaWRFbGVtZW50LGwgYXMgb3B0aW9ucyxEIGFzIHJlbmRlcixTIGFzIHRvQ2hpbGRBcnJheX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwiZnVuY3Rpb24gcihlKXt2YXIgdCxmLG49XCJcIjtpZihcInN0cmluZ1wiPT10eXBlb2YgZXx8XCJudW1iZXJcIj09dHlwZW9mIGUpbis9ZTtlbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBlKWlmKEFycmF5LmlzQXJyYXkoZSkpZm9yKHQ9MDt0PGUubGVuZ3RoO3QrKyllW3RdJiYoZj1yKGVbdF0pKSYmKG4mJihuKz1cIiBcIiksbis9Zik7ZWxzZSBmb3IodCBpbiBlKWVbdF0mJihuJiYobis9XCIgXCIpLG4rPXQpO3JldHVybiBufWV4cG9ydCBmdW5jdGlvbiBjbHN4KCl7Zm9yKHZhciBlLHQsZj0wLG49XCJcIjtmPGFyZ3VtZW50cy5sZW5ndGg7KShlPWFyZ3VtZW50c1tmKytdKSYmKHQ9cihlKSkmJihuJiYobis9XCIgXCIpLG4rPXQpO3JldHVybiBufWV4cG9ydCBkZWZhdWx0IGNsc3g7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2luZ2xldG9uU3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL2VtYmVkLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9lbWJlZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnR7b3B0aW9ucyBhcyBufWZyb21cInByZWFjdFwiO3ZhciB0LHIsdSxpLG89MCxmPVtdLGM9W10sZT1uLl9fYixhPW4uX19yLHY9bi5kaWZmZWQsbD1uLl9fYyxtPW4udW5tb3VudDtmdW5jdGlvbiBkKHQsdSl7bi5fX2gmJm4uX19oKHIsdCxvfHx1KSxvPTA7dmFyIGk9ci5fX0h8fChyLl9fSD17X186W10sX19oOltdfSk7cmV0dXJuIHQ+PWkuX18ubGVuZ3RoJiZpLl9fLnB1c2goe19fVjpjfSksaS5fX1t0XX1mdW5jdGlvbiBoKG4pe3JldHVybiBvPTEscyhCLG4pfWZ1bmN0aW9uIHMobix1LGkpe3ZhciBvPWQodCsrLDIpO2lmKG8udD1uLCFvLl9fYyYmKG8uX189W2k/aSh1KTpCKHZvaWQgMCx1KSxmdW5jdGlvbihuKXt2YXIgdD1vLl9fTj9vLl9fTlswXTpvLl9fWzBdLHI9by50KHQsbik7dCE9PXImJihvLl9fTj1bcixvLl9fWzFdXSxvLl9fYy5zZXRTdGF0ZSh7fSkpfV0sby5fX2M9ciwhci51KSl7dmFyIGY9ZnVuY3Rpb24obix0LHIpe2lmKCFvLl9fYy5fX0gpcmV0dXJuITA7dmFyIHU9by5fX2MuX19ILl9fLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4gbi5fX2N9KTtpZih1LmV2ZXJ5KGZ1bmN0aW9uKG4pe3JldHVybiFuLl9fTn0pKXJldHVybiFjfHxjLmNhbGwodGhpcyxuLHQscik7dmFyIGk9ITE7cmV0dXJuIHUuZm9yRWFjaChmdW5jdGlvbihuKXtpZihuLl9fTil7dmFyIHQ9bi5fX1swXTtuLl9fPW4uX19OLG4uX19OPXZvaWQgMCx0IT09bi5fX1swXSYmKGk9ITApfX0pLCEoIWkmJm8uX19jLnByb3BzPT09bikmJighY3x8Yy5jYWxsKHRoaXMsbix0LHIpKX07ci51PSEwO3ZhciBjPXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlLGU9ci5jb21wb25lbnRXaWxsVXBkYXRlO3IuY29tcG9uZW50V2lsbFVwZGF0ZT1mdW5jdGlvbihuLHQscil7aWYodGhpcy5fX2Upe3ZhciB1PWM7Yz12b2lkIDAsZihuLHQsciksYz11fWUmJmUuY2FsbCh0aGlzLG4sdCxyKX0sci5zaG91bGRDb21wb25lbnRVcGRhdGU9Zn1yZXR1cm4gby5fX058fG8uX199ZnVuY3Rpb24gcCh1LGkpe3ZhciBvPWQodCsrLDMpOyFuLl9fcyYmeihvLl9fSCxpKSYmKG8uX189dSxvLmk9aSxyLl9fSC5fX2gucHVzaChvKSl9ZnVuY3Rpb24geSh1LGkpe3ZhciBvPWQodCsrLDQpOyFuLl9fcyYmeihvLl9fSCxpKSYmKG8uX189dSxvLmk9aSxyLl9faC5wdXNoKG8pKX1mdW5jdGlvbiBfKG4pe3JldHVybiBvPTUsRihmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gQShuLHQscil7bz02LHkoZnVuY3Rpb24oKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuPyhuKHQoKSksZnVuY3Rpb24oKXtyZXR1cm4gbihudWxsKX0pOm4/KG4uY3VycmVudD10KCksZnVuY3Rpb24oKXtyZXR1cm4gbi5jdXJyZW50PW51bGx9KTp2b2lkIDB9LG51bGw9PXI/cjpyLmNvbmNhdChuKSl9ZnVuY3Rpb24gRihuLHIpe3ZhciB1PWQodCsrLDcpO3JldHVybiB6KHUuX19ILHIpPyh1Ll9fVj1uKCksdS5pPXIsdS5fX2g9bix1Ll9fVik6dS5fX31mdW5jdGlvbiBUKG4sdCl7cmV0dXJuIG89OCxGKGZ1bmN0aW9uKCl7cmV0dXJuIG59LHQpfWZ1bmN0aW9uIHEobil7dmFyIHU9ci5jb250ZXh0W24uX19jXSxpPWQodCsrLDkpO3JldHVybiBpLmM9bix1PyhudWxsPT1pLl9fJiYoaS5fXz0hMCx1LnN1YihyKSksdS5wcm9wcy52YWx1ZSk6bi5fX31mdW5jdGlvbiB4KHQscil7bi51c2VEZWJ1Z1ZhbHVlJiZuLnVzZURlYnVnVmFsdWUocj9yKHQpOnQpfWZ1bmN0aW9uIFAobil7dmFyIHU9ZCh0KyssMTApLGk9aCgpO3JldHVybiB1Ll9fPW4sci5jb21wb25lbnREaWRDYXRjaHx8KHIuY29tcG9uZW50RGlkQ2F0Y2g9ZnVuY3Rpb24obix0KXt1Ll9fJiZ1Ll9fKG4sdCksaVsxXShuKX0pLFtpWzBdLGZ1bmN0aW9uKCl7aVsxXSh2b2lkIDApfV19ZnVuY3Rpb24gVigpe3ZhciBuPWQodCsrLDExKTtpZighbi5fXyl7Zm9yKHZhciB1PXIuX192O251bGwhPT11JiYhdS5fX20mJm51bGwhPT11Ll9fOyl1PXUuX187dmFyIGk9dS5fX218fCh1Ll9fbT1bMCwwXSk7bi5fXz1cIlBcIitpWzBdK1wiLVwiK2lbMV0rK31yZXR1cm4gbi5fX31mdW5jdGlvbiBiKCl7Zm9yKHZhciB0O3Q9Zi5zaGlmdCgpOylpZih0Ll9fUCYmdC5fX0gpdHJ5e3QuX19ILl9faC5mb3JFYWNoKGspLHQuX19ILl9faC5mb3JFYWNoKHcpLHQuX19ILl9faD1bXX1jYXRjaChyKXt0Ll9fSC5fX2g9W10sbi5fX2Uocix0Ll9fdil9fW4uX19iPWZ1bmN0aW9uKG4pe3I9bnVsbCxlJiZlKG4pfSxuLl9fcj1mdW5jdGlvbihuKXthJiZhKG4pLHQ9MDt2YXIgaT0ocj1uLl9fYykuX19IO2kmJih1PT09cj8oaS5fX2g9W10sci5fX2g9W10saS5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe24uX19OJiYobi5fXz1uLl9fTiksbi5fX1Y9YyxuLl9fTj1uLmk9dm9pZCAwfSkpOihpLl9faC5mb3JFYWNoKGspLGkuX19oLmZvckVhY2godyksaS5fX2g9W10sdD0wKSksdT1yfSxuLmRpZmZlZD1mdW5jdGlvbih0KXt2JiZ2KHQpO3ZhciBvPXQuX19jO28mJm8uX19IJiYoby5fX0guX19oLmxlbmd0aCYmKDEhPT1mLnB1c2gobykmJmk9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChpPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8aikoYikpLG8uX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7bi5pJiYobi5fX0g9bi5pKSxuLl9fViE9PWMmJihuLl9fPW4uX19WKSxuLmk9dm9pZCAwLG4uX19WPWN9KSksdT1yPW51bGx9LG4uX19jPWZ1bmN0aW9uKHQscil7ci5zb21lKGZ1bmN0aW9uKHQpe3RyeXt0Ll9faC5mb3JFYWNoKGspLHQuX19oPXQuX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8dyhuKX0pfWNhdGNoKHUpe3Iuc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHI9W10sbi5fX2UodSx0Ll9fdil9fSksbCYmbCh0LHIpfSxuLnVubW91bnQ9ZnVuY3Rpb24odCl7bSYmbSh0KTt2YXIgcix1PXQuX19jO3UmJnUuX19IJiYodS5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXt0cnl7ayhuKX1jYXRjaChuKXtyPW59fSksdS5fX0g9dm9pZCAwLHImJm4uX19lKHIsdS5fX3YpKX07dmFyIGc9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO2Z1bmN0aW9uIGoobil7dmFyIHQscj1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh1KSxnJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSx1PXNldFRpbWVvdXQociwxMDApO2cmJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZShyKSl9ZnVuY3Rpb24gayhuKXt2YXIgdD1yLHU9bi5fX2M7XCJmdW5jdGlvblwiPT10eXBlb2YgdSYmKG4uX19jPXZvaWQgMCx1KCkpLHI9dH1mdW5jdGlvbiB3KG4pe3ZhciB0PXI7bi5fX2M9bi5fXygpLHI9dH1mdW5jdGlvbiB6KG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHIpe3JldHVybiB0IT09bltyXX0pfWZ1bmN0aW9uIEIobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7VCBhcyB1c2VDYWxsYmFjayxxIGFzIHVzZUNvbnRleHQseCBhcyB1c2VEZWJ1Z1ZhbHVlLHAgYXMgdXNlRWZmZWN0LFAgYXMgdXNlRXJyb3JCb3VuZGFyeSxWIGFzIHVzZUlkLEEgYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSx5IGFzIHVzZUxheW91dEVmZmVjdCxGIGFzIHVzZU1lbW8scyBhcyB1c2VSZWR1Y2VyLF8gYXMgdXNlUmVmLGggYXMgdXNlU3RhdGV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0IHsgaCwgY3JlYXRlQ29udGV4dCwgQ29tcG9uZW50Q2hpbGRyZW4gfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBXaWRnZXRDb25maWcgfSBmcm9tIFwiLi4vbW9kZWxzL21vZGVsc1wiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5cblxuY29uc3QgQ29uZmlnQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8V2lkZ2V0Q29uZmlnPih7XG4gIGRlYnVnOiBmYWxzZSxcbiAgb3BlbmVkOiBmYWxzZSxcbiAgc2V0T3BlbmVkOiAoKSA9PiB7fSxcbiAgc2l6ZTogXCJzbWFsbFwiXG59IGFzIFdpZGdldENvbmZpZyk7XG5cbmV4cG9ydCBjb25zdCB1c2VDb25maWcgPSAoKSA9PiB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xuZXhwb3J0IGNvbnN0IENvbmZpZ1Byb3ZpZGVyID0gKHsgY2hpbGRyZW59OiB7IGNoaWxkcmVuOiBDb21wb25lbnRDaGlsZHJlbix9KSA9PiB7XG4gIGNvbnN0IFtvcGVuZWQsIF9zZXRPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IF92YWx1ZXMgPSB7XG4gICAgZGVidWc6IGZhbHNlLFxuICAgIG9wZW5lZCxcbiAgICBzZXRPcGVuZWQ6ICh2YWx1ZTogYm9vbGVhbikgPT4gX3NldE9wZW5lZCh2YWx1ZSksXG4gICAgc2l6ZTogXCJzbWFsbFwiXG4gIH1cblxuICByZXR1cm4gPENvbmZpZ0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e192YWx1ZXN9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Db25maWdDb250ZXh0LlByb3ZpZGVyPlxufVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncHJlYWN0L2hvb2tzJ1xuXG5leHBvcnQgY29uc3QgdXNlRW1iZWQgPSAob3BlbmVkOiBib29sZWFuKSA9PiB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW9wZW5lZCkgcmV0dXJuXG4gICAgY29uc3Qgd2luID0gd2luZG93IGFzIGFueVxuICAgIGxldCBfX2N1cnJldFNjcmlwdCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHRcbiAgICBpZiAoIV9fY3VycmV0U2NyaXB0KSB7XG4gICAgICBjb25zdCBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpXG4gICAgICBfX2N1cnJldFNjcmlwdCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXVxuICAgICAgY29uc29sZS5sb2coJ3NjcmlwdHMnLCBzY3JpcHRzKVxuICAgIH1cbiAgICBjb25zdCBkYXRhVXJsID0gX19jdXJyZXRTY3JpcHQuZ2V0QXR0cmlidXRlKCdkb2NxLWhvc3QtdXJsJylcblxuICAgIGxldCBfX1VSTCA9ICBkYXRhVXJsXG4gICAgaWYgKCFfX1VSTCAmJiAhd2luLl9fRG9jcSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEb2NxOiBob3N0IHVybCBpcyBub3QgZGVmaW5lZCcpXG4gICAgfVxuICAgIF9fVVJMID0gd2luLl9fRG9jcTtcbiAgICBjb25zdCBkYXRhQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvY3EtZGF0YS1jb250YWluZXInKSBhcyBIVE1MRWxlbWVudFxuICAgIGRhdGFDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICBjb25zdCBmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpXG4gICAgZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtfX1VSTH0vd2lkZ2V0P2VtYmVkZGVkPXRydWVgKVxuICAgIGZyYW1lLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYm9yZGVyOiBub25lOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOycpXG4gICAgZGF0YUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIGRhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhbWUpXG4gIH0sIFtvcGVuZWRdKVxufVxuIiwiaW1wb3J0IHsgaCwgRnJhZ21lbnQgfSBmcm9tIFwicHJlYWN0XCJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9lbWJlZC5jc3NcIlxuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSBcIi4uL2NvbnRleHQvY29udGV4dFwiO1xuaW1wb3J0IHsgdXNlRW1iZWQgfSBmcm9tIFwiLi4vdXRpbHMvdXNlZW1iZWRcIjtcblxuLyoqXG4gKiBFbWJlZCB0aXRsZVxuICogQHJldHVybnMgSlNYLkVsZW1lbnRcbiAqL1xuY29uc3QgVGl0bGUgPSAoKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzdHlsZVsnZW1iZWQtdGl0bGUnXSl9PlxuICAgIDxwPkRvY3EgUHVibGljIENoYXQ8L3A+XG4gIDwvZGl2PlxuXG4vKipcbiAqIEVtYmVkIGNsb3NlIGJ1dHRvblxuICogQHJldHVybnMgSlNYLkVsZW1lbnRcbiAqL1xuY29uc3QgQ2xvc2VCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IHsgc2V0T3BlbmVkIH0gPSB1c2VDb25maWcoKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHN0eWxlWydjbG9zZS1idXR0b24tY29udGFpbmVyJ10pfT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Nsc3goc3R5bGVbJ2Nsb3NlLWJ1dHRvbiddKX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuZWQoZmFsc2UpfVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICZ0aW1lcztcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbi8qKlxuICogRW1iZWQgY29udGFpbmVyLCBVc2VkIHRvIHJlbmRlciB0aGUgaWZyYW1lXG4gKiBAcmV0dXJucyBKU1guRWxlbWVudFxuICovXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCB7IG9wZW5lZCB9ID0gdXNlQ29uZmlnKCk7XG5cbiAgdXNlRW1iZWQob3BlbmVkKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtvcGVuZWQgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goc3R5bGVbJ2VtYmVkLWNvbnRhaW5lciddKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goc3R5bGVbJ2VtYmVkLWhlYWRlciddKX0+XG4gICAgICAgICAgICA8VGl0bGUgLz5cbiAgICAgICAgICAgIDxDbG9zZUJ1dHRvbiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9XCJkb2NxLWRhdGEtY29udGFpbmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChzdHlsZVsnZW1iZWQtYm9keSddKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDb25uZWN0aW5nIHRvIERvY3EuLi5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zaW5nbGV0b25TdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIFxuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vaWNvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vaWNvbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyBoLCBGcmFnbWVudCB9IGZyb20gXCJwcmVhY3RcIlxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIlxuaW1wb3J0IHN0eWxlIGZyb20gXCIuL2ljb24uY3NzXCJcbmltcG9ydCBpY29uIGZyb20gXCIuLi9zdGF0aWMvaWNvbi5zdmdcIlxuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSBcIi4uL2NvbnRleHQvY29udGV4dFwiO1xuXG5cbmV4cG9ydCBjb25zdCBNZXNzYWdlSWNvbiA9ICgpID0+IHtcbiAgY29uc3QgeyBzZXRPcGVuZWQsIG9wZW5lZCB9ID0gdXNlQ29uZmlnKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQgPlxuICAgICAgeyFvcGVuZWQgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goc3R5bGVbJ3dpZGdldC1pY29uJ10pfSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuZWQodHJ1ZSl9PlxuICAgICAgICAgIDxpbWcgc3JjPXtpY29ufSBhbHQ9XCJkb2NxIHdpZGdldCBpY29uXCIgd2lkdGg9XCI0NXB4XCIgaGVpZ2h0PVwiNDVweFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL2VtYmVkXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9pY29uXCI7XG4iLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBNZXNzYWdlSWNvbiB9IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IENvbmZpZ1Byb3ZpZGVyIH0gZnJvbSBcIi4vY29udGV4dC9jb250ZXh0XCI7XG5cblxuXG5leHBvcnQgY29uc3QgV2lkZ2V0ID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPENvbmZpZ1Byb3ZpZGVyPlxuICAgICAgPENvbnRhaW5lciAvPlxuICAgICAgPE1lc3NhZ2VJY29uIC8+XG4gICAgPC9Db25maWdQcm92aWRlcj5cbiAgKVxufVxuIiwiaW1wb3J0IHtoLCByZW5kZXJ9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuL3dpZGdldCc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2NxLXdpZGdldCcpIGFzIEhUTUxFbGVtZW50O1xuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xucmVuZGVyKDxXaWRnZXQvPiwgY29udGFpbmVyKTtcbiJdLCJuYW1lcyI6WyJoIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkNvbmZpZ0NvbnRleHQiLCJkZWJ1ZyIsIm9wZW5lZCIsInNldE9wZW5lZCIsInNpemUiLCJ1c2VDb25maWciLCJDb25maWdQcm92aWRlciIsIl9yZWYiLCJjaGlsZHJlbiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIl9zZXRPcGVuZWQiLCJfdmFsdWVzIiwidmFsdWUiLCJQcm92aWRlciIsInVzZUVmZmVjdCIsInVzZUVtYmVkIiwid2luIiwid2luZG93IiwiX19jdXJyZXRTY3JpcHQiLCJkb2N1bWVudCIsImN1cnJlbnRTY3JpcHQiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZGF0YVVybCIsImdldEF0dHJpYnV0ZSIsIl9fVVJMIiwiX19Eb2NxIiwiRXJyb3IiLCJkYXRhQ29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJmcmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb25jYXQiLCJhcHBlbmRDaGlsZCIsIkZyYWdtZW50IiwiY2xzeCIsInN0eWxlIiwiVGl0bGUiLCJjbGFzc05hbWUiLCJDbG9zZUJ1dHRvbiIsIl91c2VDb25maWciLCJvbkNsaWNrIiwiQ29udGFpbmVyIiwiX3VzZUNvbmZpZzIiLCJpZCIsImljb24iLCJNZXNzYWdlSWNvbiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiV2lkZ2V0IiwicmVuZGVyIiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==