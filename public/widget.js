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
    var win = window;
    if (!win.Docq) {
      throw new Error('Docq is not defined');
    }
  }, []);
  hooks_module_p(function () {
    if (!opened) return;
    var win = window;
    if (!win.Docq) {
      throw new Error('Docq is not defined');
    }
    var dataContainer = document.getElementById('docq-data-container');
    dataContainer.innerHTML = '';
    var frame = document.createElement('iframe');
    frame.setAttribute('src', "".concat(win.Docq, "/widget?embedded=true"));
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






// const icon = import("./icon.svg")

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7QUFDeEJ3QixDQUFNLENBQUNyRCxDQUFBLENBQUNvRCxNQUFNLE1BQUMsQ0FBQyxFQUFFRSxTQUFTLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mdW5jdGlvbi10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNsaWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbWJlZC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWNvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NpbmdsZXRvblN0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaWNvbi5zdmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW1iZWQuY3NzPzMwODYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9kaXN0L2hvb2tzLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9jb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXNlZW1iZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW1iZWQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ljb24uY3NzPzVmMmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dpZGdldC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuL193a3MnKSgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuaWYgKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjEyJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGluZGV4LCB2YWx1ZSkge1xuICBpZiAoaW5kZXggaW4gb2JqZWN0KSAkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnbmF0aXZlLWZ1bmN0aW9uLXRvLXN0cmluZycsIEZ1bmN0aW9uLnRvU3RyaW5nKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyICR0b1N0cmluZyA9IHJlcXVpcmUoJy4vX2Z1bmN0aW9uLXRvLXN0cmluZycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMjAgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oTyk7XG4gICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZiAobWFwcGluZykgbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgYXJyYXlTbGljZSA9IFtdLnNsaWNlO1xuXG4vLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3MgYW5kIERPTSBvYmplY3RzXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICBpZiAoaHRtbCkgYXJyYXlTbGljZS5jYWxsKGh0bWwpO1xufSksICdBcnJheScsIHtcbiAgc2xpY2U6IGZ1bmN0aW9uIHNsaWNlKGJlZ2luLCBlbmQpIHtcbiAgICB2YXIgbGVuID0gdG9MZW5ndGgodGhpcy5sZW5ndGgpO1xuICAgIHZhciBrbGFzcyA9IGNvZih0aGlzKTtcbiAgICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IGVuZDtcbiAgICBpZiAoa2xhc3MgPT0gJ0FycmF5JykgcmV0dXJuIGFycmF5U2xpY2UuY2FsbCh0aGlzLCBiZWdpbiwgZW5kKTtcbiAgICB2YXIgc3RhcnQgPSB0b0Fic29sdXRlSW5kZXgoYmVnaW4sIGxlbik7XG4gICAgdmFyIHVwVG8gPSB0b0Fic29sdXRlSW5kZXgoZW5kLCBsZW4pO1xuICAgIHZhciBzaXplID0gdG9MZW5ndGgodXBUbyAtIHN0YXJ0KTtcbiAgICB2YXIgY2xvbmVkID0gbmV3IEFycmF5KHNpemUpO1xuICAgIHZhciBpID0gMDtcbiAgICBmb3IgKDsgaSA8IHNpemU7IGkrKykgY2xvbmVkW2ldID0ga2xhc3MgPT0gJ1N0cmluZydcbiAgICAgID8gdGhpcy5jaGFyQXQoc3RhcnQgKyBpKVxuICAgICAgOiB0aGlzW3N0YXJ0ICsgaV07XG4gICAgcmV0dXJuIGNsb25lZDtcbiAgfVxufSk7XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIEZQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gMTkuMi40LjIgbmFtZVxuTkFNRSBpbiBGUHJvdG8gfHwgcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiBkUChGUHJvdG8sIE5BTUUsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuICgnJyArIHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIHRlc3QgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYgKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICRHT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nICYmICEhJEdPUFMuZjtcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgJEdPUFMuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gQ2hyb21lIDM4IGFuZCAzOSBgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc2AgZmFpbHMgb24gcHJpbWl0aXZlc1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzQ0M1xudmFyIEZBSUxTX09OX1BSSU1JVElWRVMgPSAkZmFpbHMoZnVuY3Rpb24gKCkgeyAkR09QUy5mKDEpOyB9KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBGQUlMU19PTl9QUklNSVRJVkVTLCAnT2JqZWN0Jywge1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICAgIHJldHVybiAkR09QUy5mKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsInZhciAkaXRlcmF0b3JzID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciBJVEVSQVRPUiA9IHdrcygnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5O1xuXG52YXIgRE9NSXRlcmFibGVzID0ge1xuICBDU1NSdWxlTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IGZhbHNlLFxuICBDU1NWYWx1ZUxpc3Q6IGZhbHNlLFxuICBDbGllbnRSZWN0TGlzdDogZmFsc2UsXG4gIERPTVJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NU3RyaW5nTGlzdDogZmFsc2UsXG4gIERPTVRva2VuTGlzdDogdHJ1ZSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IGZhbHNlLFxuICBGaWxlTGlzdDogZmFsc2UsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MRm9ybUVsZW1lbnQ6IGZhbHNlLFxuICBIVE1MU2VsZWN0RWxlbWVudDogZmFsc2UsXG4gIE1lZGlhTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIE1pbWVUeXBlQXJyYXk6IGZhbHNlLFxuICBOYW1lZE5vZGVNYXA6IGZhbHNlLFxuICBOb2RlTGlzdDogdHJ1ZSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogZmFsc2UsXG4gIFBsdWdpbjogZmFsc2UsXG4gIFBsdWdpbkFycmF5OiBmYWxzZSxcbiAgU1ZHTGVuZ3RoTGlzdDogZmFsc2UsXG4gIFNWR051bWJlckxpc3Q6IGZhbHNlLFxuICBTVkdQYXRoU2VnTGlzdDogZmFsc2UsXG4gIFNWR1BvaW50TGlzdDogZmFsc2UsXG4gIFNWR1N0cmluZ0xpc3Q6IGZhbHNlLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiBmYWxzZSxcbiAgU291cmNlQnVmZmVyTGlzdDogZmFsc2UsXG4gIFN0eWxlU2hlZXRMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgVGV4dFRyYWNrQ3VlTGlzdDogZmFsc2UsXG4gIFRleHRUcmFja0xpc3Q6IGZhbHNlLFxuICBUb3VjaExpc3Q6IGZhbHNlXG59O1xuXG5mb3IgKHZhciBjb2xsZWN0aW9ucyA9IGdldEtleXMoRE9NSXRlcmFibGVzKSwgaSA9IDA7IGkgPCBjb2xsZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IGNvbGxlY3Rpb25zW2ldO1xuICB2YXIgZXhwbGljaXQgPSBET01JdGVyYWJsZXNbTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICB2YXIga2V5O1xuICBpZiAocHJvdG8pIHtcbiAgICBpZiAoIXByb3RvW0lURVJBVE9SXSkgaGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZiAoIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBpZiAoZXhwbGljaXQpIGZvciAoa2V5IGluICRpdGVyYXRvcnMpIGlmICghcHJvdG9ba2V5XSkgcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuLmVtYmVkLWNsb3NlLWJ1dHRvbi1jb250YWluZXItRUh4VzMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmVtYmVkLWNsb3NlLWJ1dHRvbi1EdmdtXyB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHJnYigyMTgsIDU1LCA1NSk7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZW1iZWQtY2xvc2UtYnV0dG9uLUR2Z21fIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmVtYmVkLWNsb3NlLWJ1dHRvbi1EdmdtXzpob3ZlciB7XG4gIGNvbG9yOiAjY2NjO1xufVxuXG4uZW1iZWQtZW1iZWQtY29udGFpbmVyLUN0dnY5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvdHRvbTogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uZW1iZWQtZW1iZWQtaGVhZGVyLUVkUjhZIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZW1iZWQtZW1iZWQtdGl0bGUtbTkxNjIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cblxuLmVtYmVkLWVtYmVkLWJvZHktZ0w4MjEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2VtYmVkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmNsb3NlLWJ1dHRvbi1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogcmdiKDIxOCwgNTUsIDU1KTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jbG9zZS1idXR0b24gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5jbG9zZS1idXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNjY2M7XFxufVxcblxcbi5lbWJlZC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvdHRvbTogMzBweDtcXG4gIHJpZ2h0OiAzMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5lbWJlZC1oZWFkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZW1iZWQtdGl0bGUge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbn1cXG5cXG4uZW1iZWQtYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjbG9zZS1idXR0b24tY29udGFpbmVyXCI6IGBlbWJlZC1jbG9zZS1idXR0b24tY29udGFpbmVyLUVIeFczYCxcblx0XCJjbG9zZS1idXR0b25cIjogYGVtYmVkLWNsb3NlLWJ1dHRvbi1EdmdtX2AsXG5cdFwiZW1iZWQtY29udGFpbmVyXCI6IGBlbWJlZC1lbWJlZC1jb250YWluZXItQ3R2djlgLFxuXHRcImVtYmVkLWhlYWRlclwiOiBgZW1iZWQtZW1iZWQtaGVhZGVyLUVkUjhZYCxcblx0XCJlbWJlZC10aXRsZVwiOiBgZW1iZWQtZW1iZWQtdGl0bGUtbTkxNjJgLFxuXHRcImVtYmVkLWJvZHlcIjogYGVtYmVkLWVtYmVkLWJvZHktZ0w4MjFgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmljb24td2lkZ2V0LWljb24takZESkQge1xuICB3aWR0aDo2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWRjZGM7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMzBweDtcbn1cblxuLmljb24td2lkZ2V0LWljb24takZESkQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4uaWNvbi13aWRnZXQtaWNvbi1qRkRKRDphY3RpdmUge1xuICBvcGFjaXR5OiAwLjU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9pY29uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndpZGdldC1pY29uIHtcXG4gIHdpZHRoOjY0cHg7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZGNkYztcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogMzBweDtcXG59XFxuXFxuLndpZGdldC1pY29uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcblxcbi53aWRnZXQtaWNvbjphY3RpdmUge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ3aWRnZXQtaWNvblwiOiBgaWNvbi13aWRnZXQtaWNvbi1qRkRKRGBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCJcXG5cIik7XG4gIH07XG59KCk7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcztcbiAgaWYgKHJlbW92ZSkge1xuICAgIGNzcyA9IFwiXCI7XG4gIH0gZWxzZSB7XG4gICAgY3NzID0gXCJcIjtcbiAgICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICAgIH1cbiAgICBpZiAob2JqLm1lZGlhKSB7XG4gICAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgICB9XG4gICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICAgIH1cbiAgICBjc3MgKz0gb2JqLmNzcztcbiAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICBjc3MgKz0gXCJ9XCI7XG4gICAgfVxuICAgIGlmIChvYmoubWVkaWEpIHtcbiAgICAgIGNzcyArPSBcIn1cIjtcbiAgICB9XG4gICAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgICAgY3NzICs9IFwifVwiO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG52YXIgc2luZ2xldG9uRGF0YSA9IHtcbiAgc2luZ2xldG9uOiBudWxsLFxuICBzaW5nbGV0b25Db3VudGVyOiAwXG59O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gIH07XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmLG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uRGF0YS5zaW5nbGV0b25Db3VudGVyKys7XG4gIHZhciBzdHlsZUVsZW1lbnQgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWYsbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgc2luZ2xldG9uRGF0YS5zaW5nbGV0b24gfHwgKFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWYsbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgc2luZ2xldG9uRGF0YS5zaW5nbGV0b24gPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUsIG9iaik7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2Nzdmcgd2lkdGg9JzYwLjk5OTk2NnB4JyBoZWlnaHQ9JzYxLjczMDM3N3B4JyB2aWV3Qm94PScwIDAgNjAuOTk5OTY2IDYxLjczMDM3NycgdmVyc2lvbj0nMS4xJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzZSAlM2NkZWZzJTNlICUzY2ltYWdlIHdpZHRoPSc0NjQnIGhlaWdodD0nMzk3JyB4bGluazpocmVmPSdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQWRBQUFBR05DQVlBQUFDaFRTQXBBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFJQUJKUkVGVWVKenMzWGQ4WTFlZFB2N251Wkl0eVRPWm1Vd3lreW51VGdna0pBRUNvWVFBWVdsaDZTVzBVQUlFV01MQ0F2dGxhYit3TEN3c1pUY3NKU3haMmdMTDBoWUlKUkRxMGtJSm9TZVFZa3V5WjV6SnRFeXppcVY3bnQ4ZjByV3ZaY21XWkVuMjJKLzM2NlVaUzdybm5uT3ZwUHU1NTl4enp3R01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoajJrVVN3LzlYdm03TVN1UXRkd0dNTVd1YkJVbGpqREdtRHBMWWJOQzBZR3RXRXZzeUdtTTZJaHo4U0NyOCtoMjRJK0hnRXNnaTRYdCtOd0IwcVZqMDRzcDUySkRaZ2kxVDRUVEdyQVFXUUkweGJSVUV6b3FnR1ozSVRHeFZwSENHeFB2THVic0IzQ1ppTTRRWUFCSXFnTWhCT0VKZ3drVzhHeng2UHhub0hyaU5aSEhaTnNpWU1ndWd4cGkycVF5ZWs1cnNtYzVPbnlQNWp4RnhJWVV6UVd4RXFUL0dvc2NqQVJNRWZrTG9TeHNTL01GbWpoeHU3eFlZVTVzRlVHTk0yMGdpU1VtS3BiUHBjd0gzVE1FOUZ1QVE1blppVlBuQjh2OEkvYzNROC9MQ0toRDRHWVRQYmV6aDV5eVFtdVZnQWRRWTAzSkI0QVNBZ3hyZGVDakhpK25jcTBIZW85cmlvYjlySFpNVVdxN2k3Z0ZkNDBXNjNqZ1FHN2k1TW05ajJza0NxREdtcGNLZGhTYnlFOFBPRlYvcXBCZVEyTkxDYkJ4S3g2OGdyelNKZnhxSUQzL0NncWZwRkF1Z3hwaTJTT1ZUOTVCZmZDZkF4d0dJdEhqMVFZMDBYQnZOeU9PcmgrUERWN2M0TDJPcXNnQnFqR21KMFBWTzdzcnZHaW02d3RzQlBhTVRXU000bGdtSDZlSGxnNG1SejNZZ1g3UEcyVWhFeHBpV21zeE85aGJjOUZzRTk5UWxyc29COE12L0w5WXNXM3FmMkNpSEQ2WnlxWXVXbUxjeGk3SUFhb3hwQ1pJNnFOR04wOGk5aHNDekNFYVh1RW9QYzV0K3d4Mko1bVFkZWg4Z1RwVHpyMHJsVTlVNkxCblRNdGFFYTR4cENVbE01OFl1bGZCK0FPc2FTZ3NWSVJ3aU9RWmdWRUtHVUMvSTB3RnNCeENibDJUKzhhdXlOKy9YbzRudVovU3hMMnM5YzAwN0xQVU0wUmhqQUFEajArTm55T20xSUJzSm5sTUNmdVBSdTg0amZ1TEhlV3NVMGNPOTZQWDNZMzhzbTg5dWRhNXdqZ1ArQ3RBVENQYUcwbFlHMGVDK1VZZFN6Zld2L1Z6aDJRQStCdGp0TGFiMXJBWnFqR2xLT0NCSjZrNWx4OTRHNEhYMXJ3QTMwZVA3WXZIRU5kdTVmZDlpaTQvbmI3K243L09mQUR3QnBRQlpyUllLbEFJb1VHb0N2cVVMc1VmMDl2VHVzZ0JxV3MydWdScGptaElPUnJ1bXgwNEg4UFI2MGdrcUN2amZTRlRQSEV3TWZ6UWNQSU9aV3FyTjJOSWZPL1ZQc1VUaUVnQnZnbkFJczRHeVVuQmNFNERUaTVoK1VsQmVtODNGdEpJRlVHUE1rdmxGWEFCZ3NKNWxLZjR3VHI2MlAzYnFuK2E5UnlyOENGNFBBdW9PN3NnTTlZeThDOFEvQXNpajFFdTNhamJsQnlSZEpLblY5NkVhWXdIVUdMTTBrcm9jOFVEVWMwbEl1amtDdkdsSFlqamRTQjVCUUExcWtJT0o0UTlEK0FKbW0zSXJtMmJEWStvK2NHSjZkS1pIcnRWQ1RhdFlBRFhHTE1rZHVlUU9DT2ZVc1dnVzVFZjcxNDNjMEd4ZVFhMlU1SFFrMHZWMlFLUGx0eXFEYVBDM0QrSkV2OGdIQitudE9xaHBGUXVneGpRb2ZIMnU4cHBkdFd0M3ExMGVIQ0xRdTloeUFtNGlJMTl0VmI3OThmNVIwdnNrcXRkOFM1OFBGQVRMKzdVcVgyTUNGa0NOcVZPMTRGaDV6VzZoR3M1cUNheVYrMEZRdjZnVFVIdWdnL0o5bnZyT1FIeWdvYWJieGRDTGZBWFFidFE0bGhFc3Y2NTdUMmhpY3l2ek5zYnVBeldtRHBVVFExZTgzblVuN3V3UzFKTkhQaHBEckVnd2N3cE95WVNYRDY3aHJiWW1SRUk3VUJwMUtOaXVlYmVYVUp3aTlXdVN0WHJPTnFXcnV5dVp5eFIvUjJKbmxYd1orbXRyb1ZEb0EzQ3dsZm1idGMwQ3FERUxxQlk0RDJwMDQxU1dwL3ZFV2VsTWNnQjBKenJ3UkVvbmkxeVhRNlpBWUg4U1l4UEpxZEhiUU8rM1NPQ1dJUTRkV2kzQk0zVC9wNWZLam0wdHZ4ek1qaEtlSEx2MEJuRUVpTnpSNm5Kc3gvWmNrbU9waFlwYUxrQ1A1M3RXQXpVdFpRSFVtQ29xQTZja0w1bFBua1pmRng3SzRxOEluUXZoRkJBSmdDd3ZQR2RRMXRKckFPUU9JYXMvSnpPalA0bVEzK3lMRDExUHNyZ01tOVV5b1pwMEY0Uk5NM09oMUI3MFBZY0lEclU0YjVCMHljem9WUG10bWsza29xS2szOU9LL0kwSldBQTFwa0k0ZUpiR2QwMFBwck5qVHdid2JGRm5FZXpHYkxBSWhvNWo2REUzaUJDYkFENFF3QU45cDh2U21kRXZqVStOWHQyL2J1VFhIZHlzbGduZlRuSW43b3lXVGlKS2I2RkdFQ1BnWWs3WlZwV2hZaFNrWW5BS1UyMVJBSVFvNTlQdUJUVXRaWjJJakFrSkRzd2tOYW5KazFPNTBlZEwvbWNjOUM0QzU1YURaeUFJR0I3bUJvL2FnNXdUSjRxOHpJZStQWllaL2RjN05YWktPN2VuM1U3QktRVUlkUVJHcmM4UjhWYmtPYStqRnVjTk5GOU4zdk84bzYzSTM1aUFCVkJqeXNLMW1tUStlZmZwVE9hZDVabEZIbFJsYWk1V2VkUjZINmhzM2lSUEl2Q2FURmJYakUyUHpkeERlYnoxMUNVNURTSVlpcSt5K1habW13VnNqZmk0VzZ2elR5b1pKOUJYSTM4Z2FFbW5qc3BUeTYvQm1yWE5BcWd4bUJzODAvbjBHZkxkZTBTK21PQUpqYXlteHVzTEJkUDdzNkQvVGs0bjd3WE03K1c3VWxXVWN4SzFCM1luQUJIc2NzUWpXbDBPRlhTNndBZUU4cXFCK3paMk93dWdwcVVzZ0pvMUx4dzh4NmJIenZHTHhYOG44TGhtVjFmbFVTazQwTHZ5c3pOUmRGOGV6NDQ5cE1rOGw1WEVKRXJqMGxaZS93MEdNL0FCU05DVDBybjBjT3Z5bGVmNWVEeUJmdFErZVNrVlJQcmppUmkySmx6VFVoWkF6Wm8zRXp4elk2ZXpvUGV3K1pwU1pRMXpvWU42VUNNTjdvc2NLa3FmbnNpUG50Vmszc3ZHODd3L2xnY3pXS2o1MlJIb2Q2NzR4S1hrRlI3RVlTSS9NU1RwT2VHM2F5VHo0WG0vYVBVOXFNWllBRFVHd0M3dE9vayszZ0Rpa1Ewa0N3Zko4TDJQNFVBYS9GL3Q0RDJuMXk2Qi9vS1BxNUpLYmdLT24rdWhBL0dCQ1lLL0tUK2RWMmFDRWN4dTV5dlQrZlNaamVZUkRwd2tOYUdKaE84S0x3Rnc5MUMrMWZlWHNNOXora040WFkzbWIwdzFGa0RObWljcFdzamtMd2IxakFhVEVzQzBnTnNFL0F6QS93RzRIc0xORUE2ak5GTkk3ZHRiWnRjQmxBTXNnUWNyNC84LzRQaVp2NUprRWNML2xaL1cyc1pnK3dkOXYvaGZsVTI1dGNZUXJneWM1WDBTS2VhbW55bmhaUXZrR1Y3TDcrSTlKL3k1b1kweXBnNHIvc2RwVEx0TjVNZk9MaGJkNTBEZVkvR2xaMlFCL1I3a3R5RHZ1b2dpRXlSSmtFVVd1d0FNQ3Y1RElGd2s2TnhRTDk3Z1lGL3JWaGRLT0JJRkh0Ry9idVNHV2tNSXJqUzdNcnQ2cDVIL0FZSFRhaXdTMU5DOThwTWJQRWFlTVpnWVRBSUwxd29yNWdXTnBYTmpUNVBEZTBGc3E2Tm9Qb0RYRHZXTS9IdmRHMk5NblN5QW1qVk5VaVNWR2JzQ3hCVU5KTG9aNEFmWUU3bG1rSU1MOXV4TUtybUpPZmRZQ2E4Q2NGNndCbFQvN1FYTnZCNmtUdzMyakZ4SzBoMHY0K2NtczZOdmdQQU8xTjYrdWE4TE4zbmdHL3A3aHI2eDJQWko2azRXa3ZkZ1VjK0hjR2xwY0lvcTY1eWY0eDlpSHAvUTZQeWp4dFREQXFoWjA1TFo1Q0NjdXdiRTJYVXM3a080TGhybEcvcGl3MytvZkhPaFFMZEh0Mi9OWlBnT0VwZWk5cVdUNEZxcEJ5QUxlbzhkU2d6OTZIaXBoVTVrSm5ZV01mMDl6RjZYWERpNGxlUUJmTk1qdnhLaGZ0VWRPMkZ5Qzdaa0FIQWY5aVV5dWN3V09aME42dUdBZXh6QWNOUHZZdXZQeWVPcmh1UERWemU5VWNZc3dBS29XWFBDZ1M2VkhYdXhrN3VLWU5jaXlaeUFMOGNRZjgzT25wMFR6ZVNiVkRLdXJIc3ZnWmRqZm9lalVENXlCS01DdmpTVUdINDJ5Y0x4VWd0TlpjZGU1T1ErWE42ZnRacXJxeEl3QWVFV0F1T0VmQWZ1SUhFYVNnTWxKQlpMWDJWOTMyZkNlOW9RaDFveUJxOHhsU3lBbWpVbkNFWkpKVGNoNno0TzRNbFl2RGJ6eTZqWGZVbGZ2Ty8ycGVSOVVLTWJEMmYwZVpDUFF1aWE0Snp5UVVXQ0VRaUhJOEFqajZjeGN5YzEyWlBQWkw5YTdzMjhXQUJ0Sk1DR2ErZjFMSjhDdkdjTjlRejlvbzVsaldtSzljSTFhODdNVEI0RkRnczROM2k1WmdMaGtFZCthS25CRXdBMmMrUXdHWDJyaFAyMThpemY5Z0VRRzV4WFY5UHlpckdET3pLZ3ZsRitXbms3VDZWcXQvd0VmN3Z5SXh4azZ3dWV3bUZRYjdYZ2Fkck5BcWhaVThLOVBlbTdNd0R0V0N3Sm9GOTJ4ZVBmYWxVWkJoSUR2eVI0TFdxTmt4c2FwRjZxMmF0MTVSTHlUYVJhYkN6aGFzdFV5VnNIQ0w1cE1EN3k2U2JLWUV4RExJQ2FOYVB5T3FKek9xM0tJUEZ6MDBBRmtEL2N3UjM3VzFVT2tvNmV2b3ZTTFJhTDBCbVM2cGx0WkVVb0R3THhvTkJMdFFjNHFLM1dBUDJMdVFNZS9uNmdaK2dxa25Yc1cyT1d4Z0tvV1RNcTdpZU1pRGc1ZUZvempaaWhGNW5YNDNhcG9zUU5LZzNDUHBOVjZHK0YvdXJkamQzclc1MS91ekRyWHdqd2lWaDhLTU9XRW5BYmdWY01KVTc5NVBIUTJjcXNEaFpBelZvVkJiQ3gvSGZ0QXk1MWdHVEw3eUZNeERidG9YUlRLUC9xWlNBMktwL2YzT3I4MitHQURtd1FlQWs0czE4N0lRZmdjOUdJbmpMWU0vTGxEdVpyREJac3ZqSm10Ym9UZDBZSmRRWFRSZFphVHVCQmRldXVWdWUvR1p0elIzSFhybERVckx6V04zT2JpMk8wRzhlQm85bERqeFQwS0M2eVQydW9QSUZZTkwyQUcwRitaSDE4L2Y5czVkWmpEZVpuekpKWkFEVnJSbmhBQWdjbmdNWEZFeUVSeVViYTBWSkRlZlRMWVNNY01HZmVMK1hQTE1WY0cvSnZxY25zMkVCZTdyVUVtMmx1cm1mQWhkTDFhT0JPZ3I4R2RVMVBITmR1NDhqZUp2SXpwaVVzZ0pvMWFUdTIreW1OVFFkaENyVU80TVJHUmZJbkF0amR5dndQNG1CTXdrbWhUR3NGa0lJdmYwVjNpSkVVU2VlU2wyQjJZdXM2RStKT1FsOFRlQWZKaEtTVHk4Mi9YUUI4QWdXSkdSQ0hBYmM3QW0vTTgvVDczdGh3a3F6ajVNZVlOck1BYXRhTWlzNGxSWGpJTFhEMVV3Qkk0R1RKMnc3Z1Q2MHNTejUzK0VRQVE1WDV6U3NFVWVoVzE0b09GdVBUNDZjNzZmbHNvTmxXVUlIZ1IrSTk2OSs5amR1bWdOS3NPQ21rb2dra0lnNU8yN0hkQitCYnNEUXJsWFVpTW1zU1NiODg1Uml3OElFLzRidVpzVjFicGtDZEJ1ajBjSkdxTE9ZbzNPVW4vS2xXNTk4cWtycGRzWGdKZ1ZNYlM4bGZ4RHg4TEFpZVFHbGF0Q0VPNWJaeDI5UU83c2lRekZ2d05DdVpCVkN6bHQxWi9yL2FYSjJ6QXk1SWo1UFVzbzQ4cFRrdWVkNWkxd3NGRlVYYzNvLytJNjNLdTlXUytlVERBTHdRcy90dzhWdElwQU9FcnRxUkdCbHZiK21NYVM4TG9HYk5tUm1OaU41dkFDeFV1d3U2K0R3MG5SOTdaS3Z5VFNPOXpUbGRHSHFyNnRSZkJBdncrUHVWT2lqQW5SbzdoYjcrRHNRcDVaZnFHL3lBL1BHR3hJblh0clZ3eG5TQUJWQ3paaVhpaVY4RHVMSDgxRlc4cmREL01lZncrclRTSnphVFQ2bkdXUm9GYVovMm5hQ3MvMG9TRjRUV1g2M1dSa0NIUGVlMTlOcHJLMlZ6ZUR5STRFU2dyc0VMSk8ybmg0K2R4Sk5XYkszYW1IcFpBRFZyVHRDWmFCdTNUUkg4R21vR3NObW1YUUlQOXJQRnQwbUsxSnRQT0hDU2xLVHVxZXpSNXdQNFd3Q3hHdm1HM2NZRS8xeHZmcDJVeXFhR0pQY2lBUEh5UzNWMklPSTFBN0hoNzdXclhNWjBrZ1ZRczZaNVh2U3JnbllEcUJVWUdmcmpaZWxjOGg5cUJkRWdZRllHVHFBMEYyZzZOM2FKNVA0UndMcUs5Yy92ZlFzZHBid3ZEbkNnNVlNNExOVWU3VmtIRlY4TzhINk5wZFJ1MHZ0UGtzME1ObS9NaW1NQjFLeHBmYkcrTVlqWGxaL1dxb2tHSWs3dUxjbnMyQ2NuOHFObnpWdXdIREREZ1ZOU0pKVlAzWU1admRFNXZRdmtTYUY4RnFpMThROVJkbC9UMUVhMVdTNC85VkFKbDZMMlNVYzFQc0JQRHlZR2o1dTVUWTFaakUyb2JkYThpY3pZZVFYcEd5d05MbC9uYjBLN1JYeWt5K05YdTdyWGpaMkNVekxoKzB3bk5KRW81QXY5Y0hnQ3BlZURPRE9jZUpGOFJPbGpBejBqTHlkWmFHYWIyaVd0OUlrdVcvaEVlY0Q0dWduNGRSZTZuOVRYMDlmU0FTbU1XVTRXUUkwQmtNeU12Z3ZBNnhwT0tPd0I4V2NJYVZMN1ZSb2VNQ2FnbjhCWmdvWVhtekt0MmxvRmZIaTRaK1R5aHN2VFp1bnMySE9kZERWbXIzM1dJMGZpOHNIRXlNZmJWUzVqbG9NRlVHTUE3TTdzN3NzcjkwMFNaNkd1SnRhR09EUit1U1FaRVo3UnYyN2toaGFWWWNuR3A4WjNGRm40UElFSG84N3hhd0VBd3JVYmVqWTl5M3JlbXRYR3JvRWFBMkJuejg0Sno4TzdKSVFQOG92MWtoV3EzNFlpbElLbUsvL2R6TzlzeUNmZWwxUnlXeE5wVzA1U3hHZmg2WUR1WDM2cHJ1QXBZWjhYd1pVV1BNMXFaQUhVbUxKb1BQWnRBajlGL1RYUGNBL2F5bURxbFIvTjFHS0RlMUlmeEt6L3BsYU9ndFNzWGROalp3QjRHY0d1UnRKNTBEWDlzZUVmdDZsWXhpd3JDNkRHbEVVUThVQUY4MHBXQnNlRnNNcGpLWWh5RUJWNFdUcVhmTjRTMTdja2tyb0x2cDRQTkR3bThDMk1kcjJQNUhRN3ltWE1jck1BYWt6WmREYjdVQWtQci9KV0svc0tWR3Yyclh3ZUJHRUhJT2FrSzhhblJodTg1N0oxMHJuMCtRU2YzV0F5WCtESEJtSURON1dsVU1hc0FCWkFqUUdRVW1xN0Q3Mk01TW1ZdlhiWkRuTkdPQXE5Vm5NNUFuMUY0c1BqdWZHUk5wV3BwajI2ZmF0VWZCV0E3WTJrRTNCOVBCSC9SSnVLWmN5S1lBSFVySG1TaUl4N0NxQ0hsRjlhcUJrMlhGdFVqWWREOWM1RllaWHJyeFZFZ3ovTzlWM2gzWHUxZC8xTW1kdE1rcGZMZWhjRGZFeGpDWEVvSXI1bkIzZnNiMVBSakZrUmJFSnRzK1lsODhtN0VmcWJVQWVaeFlJVEsvNnY5ZjRzNGFDSTZ5bmNDS0FmeERNQkpPb3NZbkRMeUpNem1XTTNTN3FpWW5Md3RoaWZIcis3NVA0R1pLeVJkQ0srMFo4WXVtN3hKWTA1dmxrQU5XdWFwRWdxTTFZNVV0QkNXRXFIZlNCdUpSUUJzRlhpQ1lROEFTSXhMVEJEYUQvZ3BVSGQ3SG00L29RWWJ0ak1rY05KSmVQTStFV1JsOVdaWDFDYnBhaFhKelBKR3dCOHJha05ycE9rYUNvNzlseVFaOVNiQkFBRjdZcUs3N2VPUTJZdHNJRVV6SnFXekNUdkQ3aXZZUFlhMytJREJBZ0hSZjVMblBvODR6M1ozSFR1SkRpY0FpTGhRYjV6UEJyMW92c1o0MTA3c2ZOWXRjSFQwN24wc0hQRmI2TCtucTNod1JqK1FrWWVPNWdZVE5hWnRtSGpVNlAzSzFKZkp0amJRRElCZVBkZ1l2aE5LM1VPVTJOYXlXcWdaczA2b0FNYmptUVBWWGFRV2V5azBvSDZYaVFSL2VpTzJabFM5Z0g0UzczNWxtZHFHVXZuUnYvVytmZzhpTTExSkF0cW9nUndkeWYvUFpPYWZONE83c2pVbTIrOTltbmZDY2N5Ui82bXdlQUpBYVB3K0FrTG5tYXRzRTVFWnMwNm1qdjBlQUJQYWlpUjhHY3c4dUdsVERNV1hMOGNpSTk4RDhDYkFlUUFMQlowNXR5VFN1Q3B1VXptamUzb1RKVEpIM21vZ0tjMm1NejN5UDhhaWczZDJ1cnlHTE5TV1FBMWExSXFteHB5d3F0UWYwY2VDQ29JdW1Zd1BuajlVdk1QQXQ5Z3ovQkhRWHdDcGFuQjZobXdBY0Z5SkY4em5rMCtiYWxsQ2R1alBldWM0eVVrTmpTU1RzRFA0M0YzZFNjNk54bXpVbGdBTld1T3BDaWNleUdCaGdZbm9IQjdKTnIxMlZaMWtDazM1UllTY2YwamdCOWkvdjJoVllzUkpBZVE4T0grYld4NjdKeFdsQWNBY3RtcFJ3dnVzUTBteTNqRWg3ZngxTDJ0S29jeHh3TUxvR2JObWNpTTNVdDBMMnd3V1piMFB0YmYzWDl6SzhvUVRMb3RpZHQ0Nmw1R0lwY0R1QVVOZHV3ajJNdWlycjVUWTZjQWMrOFBsY1Jxai9CNzRYVk5ac2NHQkx5TzRBbG9ZQ0FKQWRkMnh4TmZiYVRjeHF3R0ZrRE5tbkpBQnpZNDZwVUFkelNZOUJlSkJEN1Q2aWJLWUgyRHNjRS9leDcrSHNMaDBOdTE4cW9jby9lOFRGWlg3ZE8rRTRMMUJjRXhDTlRoUi9qMW1ZeWthRTY0R01CNUZYa3NKazE0NzIxSFp5WmpWam9Mb0daTk9abzk5QWlCalhXUUVRNER1dm9VRHQvWnBtSUJBQWJpSTkrZ3gzY2pkTi9uQW90WEJ0R25ITXNlZWZuTW0vTURKQ1YxSlpXTVMrcVdGQW5WUnJ2U3VmUUZsTHQwa1R3ckNjRG5CeE9ESzJiT1VtTTZ5ZTRETld0RytiYVZ6d0I0ZkNQcEJIeHBmZUtFUzdkeTY3SEZsMTZhU1UzMjVMTFpqeEM0QkExT3hDMXBmOFR6WHRNZFQzdzdsOHV0OCtoT2RUNU9CYkFOSHJaSzJBSWdUcUFBY0JwQ0R0UkJRcjdFaXhvWVRLS2NJWDd2UmFKUEdZZ1BqRFdVenBoVnd1NEROV3ZHa2R5Ukp3TjRaQ05wSk8xSHhQdlBUZ1JQQU5qQkhabUp6TVRyQzVnK3ZkekphZkdCSGNwSW51eWsvOHhscDM0aDBITU9aNFBZQ0pUV01uY2xzeThJYk9aVU9rZmdhZ3VlWmkyekpseXpKa3prSms2RmM2OEJFRzhnbVR6Z0swT3hvZjlyVTdHcTZ1dnAyKzBoOG5jQ0p0QjRhSXNCZkNpQkMyYUNaNGtBK0lLS21KMndPL3hldFduV0Z2THphRS9zOHcyV3paaFZ4UUtvV2ZVa2RSWDgvS1Vnem00b0hYQjdKT3A5Y0RuR2RSM3NHYnplQS82dTNLbW8wWTVMd1l3d2xiUENlQVM5MERLQmhpWURsN0RQRTYvc1plK0JCc3RsektwaUFkU3NlcWxzNmx3U0wyZ3dtVS9pNDczZFEzOXNSNW5xTWRnejhtVUE3eXMvYlRTSWhvTmhPRGg2NVVlei9SOUU4RnJYdys4Mm1kNllWY01DcUZuVkpqWFpBN25MR3I5dFJUK054M3MrdHR3ajY2enYyZkN2QUs3QjNJQlh6MkFMaTAyNVZzOTZxcVhZNjNuNjlCQ0hjZzJuTldhVnNRQnFWclY4SnY5SVVVOXZLSkZ3RnhTNWNqdTM3MnRUc2VxMmhWdU9rcEhYUVBoRCthVkdnbDY5dGN6NkIwMGcvb1I0OURjTmxNR1lWY3NDcUZtMVVrcHRCOTFyeWlQcjFFM0V0ZWpCaXBrUXVqUnRtZmNXQ0lmS0x5M2w5clBnbW1qNCttamQ2eU93RTNtY3VJVDhqVmsxTElDYVZVa1NsZldmQ2VEOEJwT21JdEhvbFN1dGlUTGFFLzB4aU45ZzZmZHVoNitGQm1QdnV0Q2ptbkJIcEx2TCtTOWJZaG1NV1JVc2dKcFZLVFdkT2gzU1pTak5jbEl2QWZoOGYxZi9iOXRVcktaRmN0UHJCWFEzazFaUUFjS2RrRzRHOENzSWY0Q3dCMEFlY3pzVlZZNXVGQWhlOXdGSTBNdFRtZEZHcHpzelp0V3hnUlRNcWpPaGlZU2Z6Vjh1OGg0TkpyMmx5OFBIU2RhcWlTMExTWkZVZHV4WkJPNGJ2SVM1RTJ6WFNya2I1TmNvL29SZGtiOUVpcEc5WFlsOElZZG9STlBhNkVsOXp1bWVBcDVNNE1FTHIydE9jRjNuZ0N2VHVmUnZiU0FGczVaWkFEV3JUakZUZkpUQTU3R3h4czRjb0EvM3hrOWRjUk5DNzhxUERRdDRNVXVEUUZUZXZ6bVBvR01VdnhnQnIrcnZHZmwxamRYZUFlQXZBTDQ3cWNtUFRPZXlUNUxUbTBDZWdiblRxb1h6aUtCVUMvVUo5RW4rc3dHOGZTbmJac3p4ekpwd3phcFM3amowcWlZbWhMNHhsdWo1Ykx2S3RSUkZYdzhuTUJKNnFlYXBnWVFqSlA4NTJ0TjllZis2bXNGempoM2NrUmxNakh3Mnl0aWpBSDB0V0ZXTmZHYnVJWFhTODhlbnhodWQxY2FZVmNNQ3FGbFZsUEdmSk9qQkRTYkxncng2QjNmc2IwdWhsaUN0OUlrQW40ZzY3Z01WZEl6RU93Ymp3Ky90WTErMm52V0g1d1R0NituYmpVVGsrWkN1UStuWUVQVFVyWXJBcWM0ck5qcjV0akdyaGdWUXMycnN6dXp1QS9WY2dsME5KdjFXVDd6bmY5dFNxQ1Zpemo4THdBUEtUeGU4WDVQaWx3WVR3KzhqV2F4Ny9SVURSUXh4NkJDajBWY0QybzNxUS9zRnJ6a0FrSFNSSkR1T21EWEp2dmhtVlpBVW0yYnVoU3JOWU5KSXlza0krYjV0M0RiVm5wSXRUVkU0QjV4MzMyV1ZwbFdOUnFPOGttUitxWGtPeGdiL0RERzR0bGx0Z1BuWi9JWHp4L1BqZzB2TjA1amprUVZRcytLVUozOXVxQXRRS3B1NkY2VExDRVpSNThnNmdxWXA3K045OGFIcm15cG9tMGtpaVh1R1hxcTFUM3pTKzNoZmJQZ1BOZDV2MklhZVRaOEY4S3NGOG1UNTM2Mis4KzliWXhsalZqVUxvR1pGQ0FkTmttcGtERnBKWFlCN0VzQ2RqZVJKNE1ZSXUvNkRwTjlvZVR2aElBNmVJQ25vUExUUS90aExMM0pOSy9NK2lTY2RFZlhOOHROd3IxeUVYZ01BZXNScHJjemJtT09GM2NaaWxsVzRwbGtaTkNjMTJRT2dKNS9Mci9jOHI4ZW4zMFdRSHJ5SUQ3OFlkZEZqSGdxUmRDNTVBWUJuQnF0RWZWTnlIYUVYK1VoZm9tOTNLN2VuRlVvMVR5cWJ6VzZBc0xXT3NZY20xbmV2bjJoMU9Uemdad0t5QUJJTExTZW5VNE15dDdvTXhxeGtGa0ROc2duWE9JUG5FNW1KN1Q3ODh3VC9mdmxzOXU0QXRrSGE1T1FTQUtLQzVNT1JnUE5WdU1zSFBORU5FMXhmWG0wOVRiOGljVzBzSHZ0aWU3YXNOWW9zZGhHSWhWNnFGYUIyYmNibVk2M09uK3hLT1JWM0VRdlhNQVgwM29rN2V3Q3N5T3ZJeHJTTEJWRFRjZFZxblpQWjBmNTBkdXhwam5nMmdUTUp4akc3VU9tL3loVVJBNlgvR2hzeFFkRHVLTDJyZG5CSHBxa042SkFJSTVHaTVyUXUxeGc0QVhlMFkvU2s3bGozMFZ5MnNCdmdnZ0dVeEFaQkZrRE5tbU1CMUhSVVphMXpRaE9iL2R6MGsvTFNaUUFmVUJFaDZwMHRwSkVJS3RLN3RpOCs5TXNHMGl3TFFiVnFuSFAyQ1lHajdjaS9pS0lQSWJmWTNoVkFEMW5yVDJIV0hBdWdwbVBDd1ZNU2QyV1Q5eXRrcC84ZmdjY0RqTlZJMXVvRDgzaFUrQmpKNlJhdnR5WEN0WFBQZWZtaWtLOHhKT0ZzRUJXMnRxVXdXU1JBTGpwMUdhV0RVV3lxYStBR1kxWVRPMnMwSFJQMHJwVVVHODhsbjFPRSt5eUJwMkgyT2wvdCt3MWJ3NEc0dGpjeHRPSm1Xd21FZXlEN0NYK0sxTUZxaTJGT3oxamQrNEFPTkRSMFlUWHpieDhxN0F6MUFxN05ZM0l6TmxzQU5XdU9CVkRUVVpKaTZXenlNdWYwZm9DVnQyaTBPbURPelJ2S3lQSGJKQXZ0ektkVit0R2ZFYml2L0xUYWdBWWw1T2xIczBmdldmVzlKZkNsKzVJOEtjaWwyaktDaWhCU3g4cytOYWFWTElDYWpwRVVTZWFTejNQU1AxZU1ydFBXd0RtYkNUM1A4OXB5dmJBZFNPWkpCT1B6Vmd1ZXdYN3JBZDJGcmN4N1FoTUpVWThPNVZFMWVCTXNrTmpWeXJ5Tk9WNVlBRFVkazhxa0hnL24zdEhvVENrVmhOSTRyQTdsQ1o3clRBTUFQUTdGUmdlYVgxN0NMZVcvRmp6SmtOT3pVa3B0YnpxYmlzNWRMbHY0YXdFUHJ5UHBJVVc4bTVyTjE1amptUVZRMHhIcGZQcE13UDlua2llWFgycjJwbnVpOUwzMVVKcWZNbGpYZ2pPSEJPL1I4ZVhKVFBMK1RlYmRjZEVJZndEaEVHci9Wa3ROdThTWnlCWmYwK2dRaU1EY2prc0FNSjRiSDNIU204cjMxaTdZdkM3aHBtaFg5SlpnUGMza2I4enh5Z0tvYVR0SlhTb1dYbFdlckJtb2M3UWdBRTdTZmdqZm92ZzJBSzhoK1BjQXJoVHdNMEZITWR1aFpxSHZjcENYQTdGTmNtL2ZwMzBuTkxzOW5kVGJQZlJuRUQ4cFAxMjRGZ3BlbnN3bkwxdHdtWEtRcXd4MlFlZWxneHJkV0hTRlY0TzRWeDNGY3lTK0VVeWQxdWdRak1ZYzcrdzJGdE4yNlh6NkVZNTRWdWpvdjFqd0ZLUy9DUGd5R2ZsNk5CSDlRK1g4bGdkMFlNT1AxNnVCQUFBZ0FFbEVRVlN4N0YxbmlielFPVjFNNGl6TUhiTzEyalJjRGdCSVBId3FkK1RwQUQ2K2hNM3FDSktGVkhiMHF4SWVqK3JiRnQ3bUJIeTlKemsxR2hsYU4vTGh5blZWMWc2RFlCZjh2eXV6cS9kUU52OEdRQzh1WjdIZ2lZNkFzUzRQMXphN2JjWWM3Nnk1eGJUVmhDWTJGelA1L3diNW1IcVdGM1FNNHVjUjRYdUc0OE8zTEo0Q1NDcTVEVG4zRmtrdktzOEZXdXZBSDR6VzR3SDRsWmVJUG1hQUEzZlZ0U0hMS0szMGlTNVQvRUdkdFVJSUtnQzh1Z3ZkNyt6cldYeXNYMGxkNDdteCt6dW5ONE44ZE4wRkU5NDUyRFA4NW5hTWdtVE04Y0FDcUdtclZHYjBxUTc2bjNvbXVaYXdsOFMvRENhR3IycDBYa3RKVE9lU0w1VFR2NExZdU1DaVBzck52UVNlUHRnenNpSW4wcTZVeW93K3hVR2ZhM0N5OEwrQStCUzl5RmQ3dW5zbXRtQkxIcVh0anh6RXdjUlVmbXBMMFMrZVNlcENRRTl2WkRZYkFiZEZ2YTZMK3VQOW93MXZqREdyaEFWUTB6YVNvcW5NMk5VZ0xsMThXUndoY2NWZ1l2ajlTN21PbHNxTXZjTEJYVWt3NkdnMEw2dnkvd1R4SDBPSmtiOXBOcTlPa2hSTlpaT2ZBZlFNbEdyU3diWGZxb3ZQZVUvWUErb3ZBbmVUbklKVGw0Q3RoSVpBRG1IdWJDdjFYSi9PUTNoMXRXWmlZOVlTQzZDbWJjWnlZNmZUNlZzQWhoWlpWQkkrUHRRemZIbWpOYzhxSzRxbHMyT2ZGdkQwUlpjRkpyb1JlMUJ2VCs5eGNSL2pSSDcwcktLUDZ3QnN4K0tCcnRIQktScFovaXVKeExybmJ1TTJHenplckduV0M5ZTBqZWQwcHFDKzBFdTFSdE5Kczh2NzRGS0RKMUFlZkNBU2ZTdUFPMEo1aHMyVWdVQmZrZm1ITERYUFR1bUxqZnlSd0N0UW12VWs2RHhVcTdZZUhnREJWU3didnBjMmVHK2hHdTBNQ1gveUl0RTNXL0EweGdLb2FTTUhqaEJjcktlM0NINTlzR3Z3RDYzS2R5QTJjQk9FVHdicnh3TDNoOHFoNVVQZ3RkTmd6OGlYQWZ4L21HM0dCV3B2SXpFM01JWURwQmQ2MUZWTEZUQ0JDRjg3RUJ1NHVZbWlHN1BxV0FBMUxSTyt0N0QwdndiQ2I2TktMVWZRbE1UdnQ3d25KNzFySkJ6Qi9POTRaUm5Pa2RSSXg1eGxONWdZZmorSXQ1WjYyODdabm9WcW81VzN2alRxRnMvRHk0Ymp3OTlwSXEweHE1SUZVTk1XKzdCdkhZQWdnRmE3WGxkdVJ1V0JhTlNOdFRyL1JNSlBFcm85bkZlMS9BRU4zWW5SUmFmc1drbEkra09Ka1g4aThEeEF3YjZiSFN5aStWR2U1aWtQRnYrdGlIREpZSHpFN3ZrMEpzUUNxR2tMNGRnNlFpY3Z2aHoyUmJ0NzlyUTYvMU13Y2dqa3JZc3VTR3pNVDNkdGFYWCtuVERVYytybnVqeGVCT25iNVplQ0VabXFYZmRzbUlRakhyd3JFejE2UWYrNmtWOHZ2Y1RHckM0V1FFMWIrRG5GSUNZV1c0N0FrUWdpN1poTHNpRGd3TUpaQXhLNjVXdkpjMmt1bDk3NHlLMkpudlZQRS9rU0NNRjE1T0RhWnJpelVPWGZOWldIU1B3Nkk5N0ZBNG1oZjlqR1UvZTJid3VNT1g3WlVINm1MWnhpRHFqWnFYYm1BQzdCNVpIM1c1MC9TYVV5dDB1TFhPNGo2SHZ5ait1NUxNczlZdjl6VXBOZnlXVnp6d0wwREFobmtWaVAyUUgzZ1FXSDVWT1I0QmlBYTZQMHZ1TEgrYXNoRHVYYVhYWmpqbWNXUUUxYktLR01zamk2YUc4VllsTVBlcm9BdExRV0txa3JsUjFidEFrWjFKUzhyb090ekh1NTdPQ08vUUErTUtuSmowMW5wKzhsRk85TGVLYzZhWmpBVGhDYkFNUWdlS0lLRU84Q01FN2lqeEY0TjBiUS9Zdmo1WjVZWTFZQ0M2Q21aVWdxNklYYmk5NWpTWXdGMXpacjMvUXZEUjZiUHRZSG9LVnpTbzdueC9zZ25RMldwcm1zdFp6QXUxek1yWW9BS29ra3RZTTdNZ0N1THo4d29ZbEVGTkgxdWVuY1NaR2lXdzhBZmlSeUxONGRQN0FOMjQ2MDR2NWJZOVlpQzZDbXBVSXpmRXduTTZNVHdjdVZpeUhvaFV1ZTdQemlvOURpQU9yTGZ6Q0kweGFyQVh2UXpRTVlQQkk4RDRKUUs4dlNLZUVUbVBBMmxHZXl5UUxZdDF4bE0yWTFzazVFcG4yRW9CZHN0VGcyRTBRbFhEcXB5Y1diVyt1VVZISVRuWjVaeDhEcmdyeGZodTlCUFY2RFp5QThKNmROY0cxTWUxa0FOUzAzVXd2cWl2eXlQSmdCc01DOW1DVE95bWN5VDExcWZqT3kvbU5BUEh6eGhEanNlV2paQ0VncmpVMXdiVXg3V1FBMWJhTXUvWm5FamVXbnRXcWhwV1hKMTQ3bHhrNXZPSStLNEpuT3BZY0Z2aFpBckZvK0ZibmY3TWY1eDBiek5NWVl3QUtvYVlPZzFqUEVvUnpKN3kyMGFQbC9FVGlOVHY4MW5oc2ZxYlpnWmFBTU4wOEcrWTFQamU5d3J2Qk9BdmV0bzVnQ2NkMFFodzdWc2F3eHhzeGpBZFMwbFNQK0Y4SkNJdzJGbXhqdlgvUUxYMGxta2crb3V1Q2NjWGJuTmxHTzUyKy9wOC9DaHdCZVhFKzVKT3lIUEJ2WDFSalROQXVncHEyRzQ4TzMwT09IeWs4ckI0eWZOd2NsaWJNQTkrWGsxT2pMOW1ydit0blhaNE5sK084OXVuM3JXRzdzSlg0Um53ZndwSHJMUmVEcmc0bkIzelN6VGNZWUE5aUUycVlEMGtxZjZHZUwzeWszclRZeWNmUDFFSDVFRDMveUhHNkxldHdMU1BtSXR4a0ZETUp6WjBONnVJQUhFdXl1ZDkwQ3hobjFuampVUGZTN0pXeVdNV2FOc3dCcU9pSTVsWHlpNkgreFBEOW9vOTg3UWRncllvSlFRV0F2b0cyaDIxUnFEOVF3ZjBVRmtsY01KVWIrcGNFeUdHUE1IQlpBVFVkSThsTFo1SldBWG9uNkFsNjlOZFdnV2JqT3l4RzZabjFpNDNPM2NNdlIrcFkzeHBqcTdCcW82UWlTYm1OQ1YwRDRGa3BCY2JFSnRHdE5FbDA1cTBnd2hkZWlCTndXalhoWFdQQTB4clNDQlZEVE1aczVjcmlMc1pjSXVBR3owMjBCODROa2dLZytER0F3WFZlMTkydTVOZUx4OHI3WThLb2RPTUVZMDFrV1FFMUg5ZmIwN3VyeThCd0F2OFRjNExmb1BKVk5rMjZPa0pjTnhJZS8yNWIxRzJQV0pBdWdwdVA2NGlPM1JkSDlWRUJmd0d3emJEQTJibDJUUHRkUFB5ZWpMKzVQRFArNE5lc3p4cGdTNjBSa2xvMms3bFJtOUZJUXJ3TTRITHlNdWNHemtXYmE4TnJIQUh3a25sajNpZTNjYnJPUUdHTmF6Z0tvV1hicFhIcllxZmhjT1R5MU5KRENqTXJldW92MnpCVndHNFV2ZFVYd3lkNzR5SzIxbGpQR21LV3lBR3BXakFsTmJIYTV3bC83MHNVUXppT3hRVkNVWUFUVnY2dStJSi9nQVFDL2h2QXRMeEs5YmlBK01OYmhvaHRqMWlBTG9HYkZrUlJORnBKblJueWM3YUNkRUU0RXNRRU8zUUxrVVZuSU93VHFMa0dUWHFUckQvM2QvYmVSTEN4MzJZMHh4cGdWUjVJbnlUcStHV09NTWRXRXB5b3p4aGhqekJKWlVEWEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01XWlVrY2JuTFlFd2pKTkcrdDhhc1BjdjZvNWRFa2dyK3JqY2RTUVZwZzNUaDF5cnpDTjV2WmRtUEIrRjlXbTFmVlh1dm1scjdkcTFwSmtpRzkxbmxQbTlWdVZxdDJtK3EwVzIzNzh6eXEvYVpIYStmUitXMkxMUWRuZnplZFN5QVZndGtWWDZjOVpaSEZjc0c2MlR3ZDdVZi9mSDY1V2xHcTM0OGEvRUVwTlVIbnVQdFFMYlUzODN4Y3FLdzJsVDczQlk3TVc1L3FScTNVQUJjN0xja3lRT2dWUlZBcTJ5MFY4N2JWWlRGcTZOY1d1RC9qdTI0bGFqZUExZDV1UWdBYnhkMlJiclE1WG53Nk9CVVFNSDFvcmRJc3RDSk1xOEVqUnp3dy92dUR0d1I3VUpYSklJakhnQVVjWUkvaGFuaUlBWjlsTDdiYnFWL0grc05sdVVEazVkQ0tyb082NkpSSEkwY1JkUnpjRnFIZGNVdDJGSUFVQ0RwcXFVMzdSZjZiZ0kxanBNci9mc0l6UGxPUmpBYkowVFMxYXFJQmE5MStvUy9vd0dVcFBacDN3bVo3TkhIT09vTUFIa28rSUFsZ0FSRFpSSUVTSUluYis0WG9WelRsRlQ2MzRkWVVJUytKeFVCNUVBY2doZTVvNnZZdGQ4bDNGUVJ4Y3dRaDNLZDJONU9xeFVBSmpTUmlPU210MHdyc2hQd2QwallDZzliS0cxeDRDWUFjVUxkRWtzL09rS0VmSUFaRUljQjdDRzR5d051OWVMZE4vZXk5MERITjY2TmF1MDNTVjBwcEU1Q0Fkdm91RjN5dDBrOG1kS0pJallDMkVDZ1IwQTNwUzZBd1lsZkFjUTBnQnlsbzZCM1NOUkJndnZwY0tlNnZGM3hydUx1QW1KSGU5RTdUZEx2OENiUENMZjZWQWE5QXpxd0laUFBiQzJxdU5PRCtuMWhHK0JPb2JBRjVBa1E0Z0NpSUNJQ1JHRmFSQWJDSVVCN1BIQ1NFWXhIZ0ZzVjY1N29ZMSsyODF1NHRramlPTVkzK1JuL0F0SU5Fb3lXdjVjQ1FFRUZpa1ZSMGRLeEZoQzhHS0ZwTHhyOWFYOVgvMjlXUW5BTmFwOFRtdGhjekUwL0VjTHBGS2ZseVllUUkxQVFWQ1E4QjhrSkVJZzRpSmdIN3VxS3g3KzlnenYyaDlmVnp2SjJQSUFtTThrSFFQN0hRWjR1eUJHa1NoOW84QURCYW1kUGxXV2RlUzZFRG9TbHRFNUNBZFFSaWdkQkhBTzBuOEN0RHQ0TlhWN1hiM3BqdmVNa3A5dTB5UjFSNDJ3c05wNGYzd241NS90T0R5VjFKb0IrZ0NjQzZNYnNHV29ER2VFd3FKc0Yvb2JBejdvUSswbHZUKyt1Vm0xSHA5WFliOUdKek1SV0gvNTVvSHNZZ0xNRTlGUFlJcXFIWU5kU3NnU1FnM0JZeEM1Q2t5aDlMLy9pUVQrTko3emJ0MkxvSU1sQ3UzLzB0YzdnOTJQLytxbkMxR211Nk00SGRIOEFkNlBRQitKRUFGRTAvcjNKQXBvRWNCUEUzMFk4ZnQrUDg0OURIRHJVc28weE15UjFwN0twSjBQK0ZTQ0hCRVV4ZTBrcitGOEFQSUxoUzJhZWdOc2l4QXNIRWlNL1haN1NsNFJPNnJ4a0p2blhvUDRWMENCTEp3SXoyMUNPRnlqSERsZitPeXBveW9QMzFvSEUwSlVrL1U3VVJqdmVpU2lWSFgyaGt6NU1zSHVCeFlJUE8vd0ZxR2F4OTZ0eGdGS0Fkd09CR3hEMWZqalFOZkRINDZuSnNsck5LYVhVZG1TTER4QzhoMEY2R0lqVEFDUnFyU0pJdmxBMkM3eC9DNGdma3ZnR1k5SHJCemh3VjJOYnNEeXE3YmVra3B1OHZMdXZmRDdFVVJkU09BdWxXbWJOMVFTcmFGR1o5cE84VmNEdkl0SG94d2U2QjI1c3hYcHI1RFhuZ0RLaGlVU2hVTGdiZkp4SDZXRUFIZ1NnRDlXRDVXTGJ2ZUR2VU5BeGdMOGw4ZjJvK0szZXhOQnZqNmZmM0VvVm5IRHR6dXp1bTBiMmd3Q2YwRWh5bEQ4emdoOFlTQXk5YWpscm9hRStNWkZrTnZrYVF2OEVJRjVQVXN4ODkvUUZKQ0l2SGVMUW9VNEUwR2k3Vmx3YnQ3R1ViL2dIVi9uanEreFV0TkRCcXRwN3F2ZzdIR2c5Z01PQWhnVThRd1YvWDZvNDl0MWtadlFiWFluWWQxWjZNMlhsbCtLQURtdzRtajMwQ0pmeFgwandnYUEyaC9aSTBEUkh6TjNYcVBJM1FzdUc5MW0xOTArSGNMcUVTNVV0L2o2WkhmMHFFZm5jWUdJd3VhU05hNlBLL1paVU11N2wzUGwrMWwzcW9BdEJiQ1BnbGZkUzBMVHFWVjliYVpWVlhsc291RlQ3VG5va1R3WndNb0VIdW1JeEwrbVByVzRacWR4MlNiRmQyZVE1eGV6MGt5bGNKR29FNFBwUTJhcDliOEsxR0dEK3RvYS9YK0hmczBQcDJzeDZBQmRBdUtBZ3ZUeVZTMzQxbmJuOVUvMkprVjhzWjFQMjhTNjQ3amVlVFQ0QTRrUEtlMzJ4U3NXY2ZpTUFQQ2RkbU1xbEJnQ2sybG5laFlRQ0hRbHRSbjNCTStBQWVCRFhkNkdyOFZhMkppMTBnR2laNEFjc2lYS0tWY20zMm9mZGFNL2N5clRWSGtDNWMwZjVBUkpiQUR3YndLZW5zL212cHJLano5bXJ2ZXZucjNKNWhlODFKS2xKVGZZa2M4bkhITWtlK29pa3EwbjhOWWpOd2VMbGg0ZlpEbHVCV3Z1bThtQlpiVm1nRkZ5Q0Eyd013SGtRM2lINTMwcGxSNThqYWFHV2hXVlIwY2tna3A1T244dXMveDVmK2lTQjV3RGNnZG52WkxEZmdnNE1qVHhxQ1RySWVhRy93d0hKTHkya0xsUVB6RTJyM1BhSi9Oalp5Y3pvRlVYb3Z3QzhEc1E1bkEyZURuTk9OS3NHeVhxM2xSVi9CK3NHaWEyUVh1TEVyNmR5WXg4Y3k0MmRYbGxlVTc4N2NXZVBreDRMWWxPZFNlWjliMG1jUWJtbkFDdm1NNGcxc095Y1k5ZE1FeS9aOWs2bEhRbWdGVnJhQkZhSHltQVEvbkdIejdZakJCN3NwRTlPWlk1K0laMGJmVVNIeXJlbzhFR1FwSGJsUnU4Mm5jMzlpM3ovMHdDZUNmS2tZTkh5LzRzZDVKcEZsSHVnWXZiZ0grUjV1b1NQcGJKam41aklqNTNkaHJ3YkZweDBCUHZ0RHQyeEpabE52dHdWaXY4bDhCVUVlNnNrYTllK3ExeC9PSjhJQURod0dyTzEzeVVMZjI4bU5MRTVuVXUrb09qclAwRzhEc0RkTWZmM3YxRGdYSXJLYlozOXpoQW5RbmdabmJzMmxSMTdzYVRJU3VqSWNyekpGWEozRTNGKzZLVjZQNy93WitJSmVNYWRHanRsSlh3R21sdExyalBKVEIrYWpwMEFkQ1NBVm53Z0srSHNKdnlqRGdjREVJeUN1TWo1K0ZJcU8vYW1wSktOTkNPMFhHVU5Zanc3ZGtIQnh3Y0Z2YUxjL0xkYys3WmFzM0FNd0xPTHZyNlduaHA3ZkFmTE1rOWxzMlU2bno0amw1bDZMNkYzZ2pnVExhN3BMUUZEZjdTczZTbDg0akNlR3g4cDVxYmZMcWYzQURpdjFFT3phams2ZWVJdzB3b0VjTmpKWFpYS0p2L3REdDJ4cFkxbFdEVkNyWHFlaXY1RENlekUzTnNDRzFwZCtmK3pjbGs4cENVRmJMUUFjMnU5OHNxZGd4cGRUYXZLVTYrMkI5REtZYzVDWndjcjVRQUdWS3VSRWhzbHZZMVovK3BVTmpXMEhJVUtCNEcwMGllbXNxT1grM0tmQlBGSUxLMkp1NVdxQmRJQkIzMHFtUjE5L1hJMDZWYWNkTVRTbWJHbitYN3hVeUNmQzJCZGViSGwzbStWcUZMdGM4bS9pM0JQM3ZSMCtsemZUZjhiaEplZzFLTjJwWmpUdEZ2cTVheFg1ckpUWHh5Ykhqc25XR2lGTkNldU9ETWR3VElUMnlBOUJxVU9nODE4ZDhLLzM0U1RMcExVc1d1SVllRmJxMXlUdjA4QnpvZmZzWHVSMng1QTV3MnQ1MmtsZHhnSUIxSUFvTURueWhXL21jNk9QbmhaQ2xSdWV2U3p4VGNEZkNmQTRmSmJLK2tFWkQ1aUU0UjNwSExKRHh6VTZFSzlXbHVmZGJubU5hbkpubFJtOUFXKzlDRUM1NWJmWHNIN1RTME5ucWxNNmtHdVdQZ0FTajB6bCtXZ3VJZ3F0VjQrbEVWOUpaMGJmUnd3Ly9oaDVsS2tjQitBNTJIMjhrb3p3cC9CUmJ1bXg4NllXZi95bk1BUVRUYkRrdkpQUUhIMUJOQktCTU9kVUZhaWNCQXRYNnZoUFp6d3FmR3AwZnQxcWhEQmdYQ3Y5cTdQNTdJdkpYQTVnSjZLY3E0MDh6dWRTQzg1bk5YVkIzUmdReWNMSXFrcm44dGNMT0R0SkxhR3l0ZU8vYmJZUWI3T0lMQzBhemR6YXA2WjI4K1gvQThCZkdEOStTK0xhcC9Ka08valk2bmM2R09YbzBBclhSRFU5bWpQT2ljOHRvVXRDd0t4cmVEek1TMWFYME5hY0xLa1V1VzFjenJTaER2bk9lU3J1ZmJ0VHF0c2xoenlpUzkyb2lZYUhBajNhTSs2VFBiWVM1M2M2OUJZcjdTR3Myemp1Z0h3NHFPWnU5NHJxWjNiTUVOU05KMGRlenlFdDVldkUzY2syNHBIV0YyQmtjQjBzd2VSY1BBY254cTlueFBlRCtKZWplVGZhSlpvei9kbXBxZXVjM2hmT25QNytZc2xXR3VDejNrNk0zVUdwRWVWWDI3RloxSHVCK0tlM09rVFhtQk9yR2oyR2lnQTREQzgxZFdKQ0pqWk9ZUm11N00zdW9wUXVzcURsYXZ4V09xUGZQNjFQZUhUNlh6NmpGb0pXaUhvTUpUSlpaN3RwQ3NJbnRDbXJHcnRReCt0MjRlbGpNZ1hwWEpqcis5RWsxQTZsNzdBQWU4Q3VMUEZxNjcxL2F2MnFOeC9pKzlEb2FuN1A4UEJjMWR1OUc1RjRCMGc3OVBNdW1xV2JHNzVPL0hiRTRIVG5IQjFhanAxN3lXc1o5VXFrZzhET0lqV25jaVVXOTU0bnlPWkl4Y0dMM2F5R1RlSUV3S0x6YTZpbGVWWlRLZWJjT2VPZGR0bzJ2bTNwQVRQdlJvUFlQWkgzdXdQdXJMNy9hRHpDMWNGMS9YQzk3ZzJzZTZheHZOakYxSjZLNGwyblFrR3R5MVVkZ0lLM3dNWnZCYmVoODN5SUx3dW5SdTdkQW5yV0ZRNm56NURLcjZEd0trdFhuVmx0L3J3ZmdrTGVuYUh2NE1PaSs5RENZbzA4ejJhclhtTzd5ZzR2WTFFcTIvQkNzcmtZL2JrcXZMM0ZONXVZRzZRYlNhdjhqT2VvWUwvcmwzYWRWS041ZGVrUGJwOUs2SEhZUGE2Wnl1T1B4VGtBNGdKN3ZITGVGdVJwS1pyb0IyOXROWHhrWWdJZW1yaU9DeW9RR0FDNGhGQU1aRlJTb1hTeVFxNkFFVUFSZ1JGS2ZhQVdBZWdDL05QRW9JZmRTTzlXT2RlRXdVZmVqaUx0MGo2KzNiTVBqR1pIUnZJT1YxQllIdUxWNTBCZEFmQTNRRHZrSFNNSGdvQUlJY3VFSEVBR3dsc0ZiUUR3TmFLSVJmREI4Ukd2NmdDMENPbmQ2ZXpvN2NPSkVaKzJ1cHhYL2Rvejdwc1p1cTFJQitBdVo5eEt4Q2w0SkdIa0FPVkF6aU5tYVltZXVYdlhoZUFMaEF4UVRHQ0VjenYzRkZabXlNQWtReE9YQnJlSnhPYVNQaVp3c3NFUEdVSkd6MXZud2txUWpoRVlCL0FDVUI3U084dzRQS2xKYnlZaEEyaVRxTFFCNkN2ZkVOL3RkOGRLdGRmRitJUnhlejBQMGg2ZlRBangxcnZYSlRKZWc4RDNIbmwra2c5KzdTdTI5MFlUSXhBUFhwaWV2UWVBUDRFekczbGFLZHk2eHM4ZUs2Wk9BRUFYZ2ViY0RzU1FNUFR6QWdTWjJldnFLWEtqNDIvZytkZDBRVTNOdTE1aVFnaVVTYzNGVlcwNk9pNkhWMDNRUklnL09JbXd0dmhwSk5CbkE2SEMwQU1vZFRWdTlwTjNmVUcwU0FOQWJ3OGxVbjlHTUJYNjBoYnR6M2FzeTZiblhvMWdRdGFzRG9CeUVLNkJlVC9FZmdwSTExLzhicTlQUkZFY3R1eGZkNXRFeW1rUEFEeHlMUzNVNjU0TDRqM2wvUndFUGZBM05wRk14eklrNXpER3lVOW1XUytsVC9NYkRiN09CRFBLRDlkOG85SVVBSGlJVktqNVlIMGJ5TjVGRlFXWXA3aXRJdDQwNExrUVZFNnhCelpSU2dDS3VZNWJ4MDhiSExTZGdpbmc3Z2JnUzJDSXFIQU9sT2pwWnB1dG9MTEZCNGg2UElhOTNqV2E2YW1LV0FTd0k4cC9BU1JTRHBLdHp2YTNiT25pT0t4WHZRV01QYzN5aFJTa1JoaTYvUFovS21VemhYYzR3Q2VoOW5Sc1NwL1AvV1VaYWFWeE1HOUxKVlAvUURBdDVld2ZhdENVc2xOeU9vcG1CMUJxaDdoL1JtbzlsbVU1dE1FZTRzK0x3VHdwOFhtRlcybG1VdDlTMmp0Q2dKb0k5TVVOcXNqQVRSOGNSaVNyOUlIMU5BNkNFeDRNZStYdlJ4cWFPQnlTWnpJVEd5WFY3aVBjemdmd3VQTE45S1hWOXQwRUkwQjdoOVRTdjF5a0lOM0JIa3Q5WVBLWkRKL0JlcUZ6YmQwQndYVU1Rby9nOGZQUnhIN1RsOVAzKzRHa3VjQUhBSndFNEQvdmtOM2JNbm5Nbzl5d2tzSlBCanpydzNYVzFnQ2NLSWVPWjVMWGd6ZzAwQnI5bHN5bXh5RTgxOEhjdDNpU3k5Q09Bem81eVIrNkhtNE1SNzMvclFWUS91VzB0cXdSM3ZXWmZLWlhqbWNBM0NBUUovZzdndng5Q0RJbEthYXdzeVB2OTU5c2tlM2I4MW05TGZsOVN5bDVpMEFld1I4eFVQa3Z3Y1NBemMwTU9CN0FhWHZ6WDRBdnppbzBjOGN6bm4zb3Z5blNYd2FpRzBWK1RRU1JFSHdCRGovTGJ1MDZ3YVNLM3E4NnJiTDRaenloQkZMdGVBYUNEMTVyL1orWWl1M0hsdHlUczFwNnBnUUhvbW8zY0cvWTAyNHdZWVFuaE9jV3lUditSc3NyWnY5cy80SlZNdXZUNVlmMzlpZDJYMVZYdG1Ya25oQnVaTkpvenQzTnVnUzU3aHM4YlVBL3I0Vlp6aWxNMHYvUlZoNnA2RTB3WC92Nm9sOUtoZ2N2OVlCdVo0WkM3WnorejRBLzcxWGU2L0paSTQrVDlRYlEvdXUzaE9RbWFCTE1PcWNlMzFTeWUrUzNCTWVjcStKYlMxenp3eDFuR2txaUpUbUdlVDFJaiswS1lIck5uUGs4SnozYS93UTZ5bjNObTZiQW5CTCtRRUEyS1ZkSnhYeitmdkw0UkVBN2dYaTFsSTI5Zi9nSlRHZFN6NUJkQTl0b0Rsdi9ucEt0ZTBmZVJHOGJ6QTIvRDJTK1dEOXRiWnZvVFA4OHI3N0VZQWZwVEtwLzNIdzMwRGdrV2k4TnpreE8yTFIvWXU1NlNjRCtHZ25adHBZaVNSNXljem9JMG1lVW04U05GNVJDTkk5S0pzNWRpR0FyM2Q0UHk4cDRFVVFtV25oYkhmTnVmTzljQnRNTnZNWDJlWGdTbWVqb1VHQ0Z4b3dPRGd3aDBkRDJ0bXpjMko0M2FsdjlpSmRqd2J3ZGRUWHdhT2EwbUQwNGd2VDArbHpROXZZTkdiOUN3RXVxUU9JZ0Y5N3hJdUdla2F1RE04c3M4Z0pSdTMxaGJacEs3Y2VHMXczY3BVWDdYb2lnT3VYVkV6eURHYjF0Q1dzWTBZcW14cVN3N05ETHpVZVBJVzlucngvUWNKN3huRFA4QmNxZ3ljdysxMnIvTzR0OXJsWGZnY0R2ZXc5TUJnZnVYWXdNZnovSXVxNlpGMzhoQytTZEkwY3JPN0lqZlZKN2tXTFRBKzRJRUZIQ1g0bzd2SEZnL0dSYndiQkUxajQrMUc1UCthc003UzlnejJEMTI5SzRCSUk3NEp3Q0kzLzNtYWFIeVgzd29NYTNialdBbWNnbFV2MUU3aW9nU1RoNzF5MTQzMzFZMmU1TTVHam5pMXBLWFBoTnF2ZTY3cWFmU0lCOG9pcGVXbmJGVWlYWXpCNW9Ma0RYTVBOWitFZmVPVVBiaUEyY05PR3hLWkxBTHhiMEZUNTN0UjZldzBHNVhjZ1RsVFJmMzZRWDdNZjFCN3RXU2ZnbVpnN1dFSkRCSHcvRW9tK1lDQXg4djFHMGkxMmtLeDhiYUI3NE1hSXVwNE80SC9RK0tBWU16VlJ5VjI2Uzd0T0NrMnoxZFMrYzNKUEkzSFBadElDZ0lEYkl1VGxBejFEVnd4eGFFODlhY0w3WmJHRCtVS0JwdnkrMzcrdWZ6TGNWRlp2Z01nRGY2WFpVWllhSit3aDhHWWt2RGZzU0F5bm0xNVBoY3J0M2N5Unc0TTl3MjhEOUhvSWU5SDQ5ZlJ5RU9VREQrVVpYT2RlYzBQOUNYcWtpTFBRV0E5bkg5QXZJZjIyenVVNTB3d3FYRFNlSFQwUG1IdFN0QUxNWEIrdmZNT2haM1dOUkxTRXM4WFpKaUtvdUxGY0EyMlZrM2pTa2NIRThCVWszd0VnV3o3cnFsZTRtZURpcGQ0Yk9wM0wzQWZpb3haZnNnYmhkNUZJOUpVRHNZR2JsbEtPZXZXdjY1K01KcnBmQWVtN2FPeWkvK3l5NUwzOTNQUkZwVCtiKzQ2a2xOcE91V2RoZnNld2V0M2hRZjh3MERQOHBlV3ExVFI3WUpyVVpBK0VKNVRHa1cxS0J0U1ZnNG1SRHc5eEtOZmtPaFlWYXFJdkR2YU1YQTNpWFFDeWFPdzdRMEZGQUlMVFpST2EyTHhhYXFIMWZ2NXBwVStFMHhNYi9yeWxRNTY4ZHdDUnR3bzZXdkZ1clh3OWxDb0lHMTE1a3U0Tzd1OUcrcU5Vdmx3MWVMYXI3QjJkRHhTekI3Y21OcWIxTzZEOG95NE14b2ZmUy9ERG1HMWFxcXRBQ0lJQmNZcnppNDhHbXF1RlN2S0t6ajBHOWMvbk56YzlNRUV2OHBxQjJNRE56YVJ2VmgvN0RxckxlejJnTWN4ZXE2cTNCaThBZE5MRmtwcStGcStzL3pDUXpVMmZKaDBBOWNiQm5sTy8wbXorclZCdlUzQ2w2ZXowT1JLYUdxbEhVQkhrWnpZbStKRUdPZ28xSmR6Q1FGS0RpZUVQQWZpUGNrQnNwTFpBQUNKd2J6K2JmMmc3eXJxaTVZcjNJV1krNzdvdmlZbjhIWG9pUDQweSttdUlxVHB6QzYvL2lic3l1NnBOL2JlU2xJODdvb2RNeDFwV085NkUyL3d3ZnExdk9naGR5eXBzVE9BZEJLOUQ2ZGFDUm9KbzRISE56and5bVozY0NUWmQrOHg3NFBzSEU0TS9iREo5VTRLejV1SHU0ZDhEa1RjQ3lKVGZxdmZzc2RUYkZMcHdJalBXMUVnelNTWGpFQitOdWZkWjFudGdFY2pQRE1aSFB0Tk0zcTNXVk5NWTNWK1ZKNFNmV1UzZFNZR2ZSaGg5ZDdWcnZlMVEwZVE5M1pQZ3V3RCtDZzBNZ0Y2KzljY0RFSEhsUU5MSld5eVdRMmlnbGk1ZnVxakJrMndCeUJENHhnQUg3dXBOOU41SjFOMk1HM3hlRHNEZHBqbmJVclJDOTNlNVRQUzRHb2Z5YTFMb2dFQ3ZuV01jYnViSVlTOGFmYXVBOGZsNTErVUJxV3lxcWVIVHBqVjlIMkxtMXBwR0NNS1A0Z24zcVdieVhZcndOYTdCeE9EL1F2d2ladWRXclpjanVMN1pKaUxsTlNBcU9DTnZxR1ZEd08yTVJENUNObi92WlNzdGRJMjBtZ2xOYkhiU3cwSXZOYkR2TkVud0EvM3gvdEg2MHl4ZGVQdE80ZkNkQks1QzZkYVhSazZxeTdlMTRQemxucXUzVmVyNTdOUFQ2Vk9waGpvUEFhVm11MGt2RWtNYWZhVUFBQ0FBU1VSQlZQMU9PWjhpUFg1SFVORGlzTkJ2Sm53aVNqaGRQS0dKUklQNUwwVTkzK2ZLWlVvdEhTMisxTGVRNVFpZ0svYTZ4VUQzd0kwVVBsRisybWlQM0I1QkZ3Q05Cd0pDOTBWcGtJZUdTRGpxZWZ6TU5wNjZ0OUcwclVTeTZIbjZLSVJHN3RFTmhnMkRvTWROYUdMellna3FlYzZkQVdnZ3ZNNDZrL29lK2FuQjJPQ2ZHODF6cFNqbWltZFRjem9QMVZ2ejlnSCthRjFpdzNmYlZMUzZyVTlzK0FhRW42Q3hFNi95UVJMM1pJRnRIWk42SlpnNWxqaDN2b2k3bFYrdSsvamlRVC92Nys2L05YamVIVTljUjVWR0YwSjkzNW55N1VJNDM4LzVEd2hlYkhjdHROU2p0cGxZc2ZRcEFSdXhIQUcwa1IzZjhhWUNMeHI5QW9BSk5MWnZTbWZGMHNNYXZaNjNWM3ZYaXdvbUVHNDA4TjRlVVhkSG0yNXI4ZUxkTjRMNkNacnBVRVRjM2MvbDc3WG8waFZFbmhYcVVORkl2dU9PK0dLaithMGtsTzdiekRWelFWblF1MjRMdDFSMkp1bTRMZHh5RkI3K3Axd2pxcWNXT3RQdmdPQjYrY1d6Z2RWL0wyaXBzNWdlRlJwbHF0N2o0cFRBYndXdExKSzRnenYyZzd5dWdleUR2ZzBKd2I5NDVRK2pTR1pEOTRFR2p1dmJXQ3AyZUpNN3Z6TlRvUFYzOTk4dTRLZEJwblVrb1diUGV1NHpNVDE2OTBieXkwMGZHUVFRN2dSVC81azQrYjJkaVoyTmpERFVObjNzeXdMOEFlWjNGS3Q1SmxrZTBwRUE0b0EzMUVoK2ttS1FnbWJ2WVAzMWRhb0FmallVRytwbzgyVXJUV3F5eDZISmt5NXgxS1Aza3pZVXF5bmRpbitQNHEyb3Z4WTY4eGxMUEt0dEJWdEJDdG5NdlNVOHBQeTAvczlidWhYMGZsNzVjb1M4RnFWZTBNSDZGcXp0bFZ1S0JPa0o0OVBqWndBcjk2UkZnaGNlaWFqZE90MExkd2s2ODRHUm5QYUEzNkN4UUJBcC83SFIrVGd0ZUwyZTdTNzYzaG40LzlzNzh5alpycnJlZjcvN1ZIVlY5YjJaeDN0eisxWjMzd1JKekNJTUFTR0FxQmdnOEVnSUM0TUtDTUxTaHlncVBIMCtVTUdIOGlJeXFEd1VjQ0hQaDhoVFVRWXhCcGxSWko0aElZRjBWOTBoZDh4d2gzUU4zWFgyOS8xUmRhcFBWVmQxblZOZFZkMDMvajVyMWIxZHA4N1plNTk5OXRuRGIvOEdJUElxa3J5ZWhPTjArT3hXYXNnWjhBc3RHejhnMlo1ay9INFRPYzZQNnZUdTZ0MFhRSHpJb1BQWFhBK3RPT0xUVzJYdk15a2RiYWxXdXdCQXFvbGFHOGN2N2M3dEhwbTk1MGJaV2RoNUNNQ1hzTHJTaVJpMFB3Y0NEeDlXY2U5MFFWTGd4V2VBU09wNXFIa2R0Q3p5MDdQNTJYM2R2Mlh5K2E4QituTDcxQUcwQW9DRUFIZjZzTkYyOURKR01XNWFhdzExZnBtY0dIZXNBMmhYQlE5VDJiR0tFQ2ZsWmQrUlg1RjBMenB0Qzljak9pL25uV3RyUlNZWjNCeXdHNnZ1elNMajRBVG9jQWE0SzltNUU2S1F2UXZVOTdCMk5USHducnpYYkpJWE1xclRGYXhjSW1CbjdLZGtMNDE0UHhUY2tlamNMVVpVUDh1Qk81Zm8wTDVOZGozVWdQZGZKNW5HM25tc2tHeUErQzRTVEZTN0VYRHBvVnBwMUJHTHRoUjMxeGYzQUxnK2RpaFIvMEN4Nmh3K0ZmZmZITDA3TzdtekFyRGJkR3U5ZElOSWZDemdtWkxTdW1NY2x2WEsxTjIvdEN3cUZFNC9XQWJRUHZUVW5OcEtNSis5amVUdGlOa3JEcmdrdWdmSFVIMkRPSGZIRHBXVUViUXJSVDZ4UXZKUW1Nc2NTM3orQk5pRlhjZUp0b0lDa09KK1NGeDJDSWNTSzFJNTZqSlE1NlFxWUpPaldXVDNEM0hkcHJGbVloRTJ6b0Z3RmxiYlRLSkJoK0lwRjNETGlhN3BnanZRTklOSzJoOUZObjg3YXg1WHJYL3E2VTBqNUxYZ01OSUdMUlp5L0dxL1gzUEVCd0dVMGF6enBPK3BDRnl6dDdiUU5pRktYNjdFcE5GcDZLQmV5U1EyamRvb1l4MUErMVJ3OThOSyt2QW10Z0xkaFYwblFVYXJsSlFQa1VWSlBSOWdkMzNjaC91bTBWeUJ4dk5Ka3ArSHVIODNkaStsSzl0NElla0ZIb2kreG41YTc1Nml6bkNYci9yRW1yaGV1cVNsUUpScWI1ekFvWHdoUHhIYngxSFRiai9DV1dDSDFuYXlDUjV4TkZnMTA5cDAyaE5KcW9SbUZKZFZzNGtFL1FMQkRLazk0eXZoNW5KUUI4OFhkRDFTMk1xMjhBQS9jaEhuai9RN1lXZGh6ejZJbjQwZEdqZ0phem0rS01qemVaSWNNQm94Ym84MCtxV1pvRytjM1A0bk1Ga1JidnR3d21OcGZoOHBKQnVRN3V2MTA2QnJCWjFmUnJtdnE2MTRuU3hWbHJZTHVMQm5Nb095Y1Zva3VUeW9QQk9IN3JDZ1pheWRRYTYvcnlHZTNjZzBFb2tsbTFGOWVGNDgxNFNsRThDRDUrTGMrdUJUdHk0aXprSXptbEgzZlErYXFCeEJMcmRsUW9GRkU0THNWUGFZaHJXLzFuRGV1MDRINnBYNjQwVTlib2hMOXpFYmZIalFTWFQ2T05KdHRSQ0FCRHl6dEZKcUszQ05jUzgweFh1OVNtNjZNYkV0aXEzaVNDSFJnNXRFUVdJNW5oZ21UMUxidDJON3p3RzBPd1NUTWpvbjVWNVd5d1pPbmg3M3BDM2JKQkIxaUdJRm5hdUpYdjkzWHplRk1IRm5tSVY4TC9IdG9PZmxBUjJNUnhzNUhWZ2p5UkhQUnVjK2M2SUpxSUJqbCtDU3pZcnQyRUhjLytzS1ZwWUE5RkpzNnRjdnJCNG5INVFEYU5OcGdiK0JxNkVOVTJqZjRqUEZiUEU3ZzA3TDVhYy9CaW1TdEEzVTkyaHB6WXZFQlM3RU14S1hKejFwKzkxWU81bU10VWJFWmcrZ2FjU1duS1I2TXNGakxaSEZ1aDEvRDNJMTFEb0cwTzRaV2x0MEZlcXMxbDVXbXZSQk1JVGJtb05Bd09EdTF1UWp6c0E2SkJpQVlhSklOUGZodnJ3ZnJ1TWtIRGJkL25FWUloZHFraWpxREt6VldnWFdiME1rY1ErQUxTZTFtTVhzTXNHNHhDZHhCMHI0Y3piaVMzbXJFcTZFRHhVeFRHakRDb21QSlBGdjNJenp5dy9GRGlWUmxvejBOMjRvcVhUMm1QWkJoKzNuQllDVkI0TVpTMytEVzZVUkdjUlBuYXhUQmZuN0FOVFJPVE1iMkZnRUJsblVPMTdvdm1Hc1hEZ05EUHZ5VDlialJsS3l2bkVxcFVlaUNLZlFKUko5TDJNNVJ5RUtzSjZrSHRwMm90UjRIYWVQazFZN2N2RElJYjNvRFJLV3RwTFpVNndzQWpSVU5CZ0JaeDdDb1FlVktZdWtERUovSFlHNEEvZWtOczdmUXlGWVkvdlpqd3o1SVFrblUrUWpBQkwwU0ZiOVR3QVR0UWxOc0lYR0I0OGQ2QloxT3B3SU9xNVFESkZhc1FIcWRtWWNDK2ZVMWRESVBoT0RCQjNpaENjVUEyaWJXT1NERmJEZEdRNlNNSFRjQStuN3RzZDQzVGxVSGFCaDIrNldHVUNHaEMxUldrUmk1d01PVzhkOHBRZXBuR0dzWHNWc0Z0bUphVjFPZ25LdHZFdlNEVWkvRWd1ZGVHc1J4VVF4YlFGZ1YySHVXeUQrTGVIcFVSL29DV1k4Y0dPa01MbVJ2cjZyWDJ6WitBN1Z2MDI4VDV5MENQZjA2Ync4ODJKdmJkb0JOUG81TTE0cnl2V2hnSGlubHJoK1BGTnI1bzJOK0gxbHFwbEFuZkVLazVybmhFbFhoeUh5SVlpNENQdjBhVmREMEJVdk12SjhwYlFHNDhMV2NEclFhektwVlVsTXVtZEpOU1pwT0Q4SkNQOTRBT2s5VFFtbjROeW4wcXdJU2RaSmZBRE5maWpwWk15MThudEthYVhVRG1RLzdDRGE0em9ONlF1M25jNmtGbStUSGtEVGFBMU9uSGlsaXpnNzVtYzFxU01GQUtnMWtPODUwKytPdWtDaFRxS1hSNXhCNnVSazZMZlVDalRDTzU4ajJ1TFZKS3YyNXUvQ2NoZ2cwYjV1RHJsbGdFT1o4UGpOMy9kUFRWZThVQkZjaVFWL1Q3NTNMaVhhWTQ2STJ5MzMrN3ZYTlVrQ1JIZi83bGFkaVFBcDdrbmd5U1VzblZaZXBkYWpwRkplWGs5QlozMGtnN2h6S2o4MVVIbW9tOEJuL3hYQ0hWaFZURXZTMzRuRWhRajlPSU50ajJwVk96WTJjd1VhRis4TjByYlRPUGY4dWw5NFNZR2s4d0RFSFpVblRXeDVCU3RobE82NnAyWXlGYXdxZGFTNVA0TGNNcUdjT2hvcmx3c0NVblhVTGVyT3UzVTFSS1A2UEltVHk1VGk1eVorUG81RGRFeGJDOEdoanVaQUdyL3ZnYlp6bmp5M240MXl4d1U5QnNrMUs4WWVnMmo4Ny9VNnNCNi9aU1YzUnMrVEIwRGczbG5NbnJiNzJ0MEVGWCtseUI5dmZVM1RKM2dBbjltQkhXMHpwZmhrcHQ4SEFHYW1adzZCaUtMenhOdFJ2OEZVcmZ4QWp4c1A2NjYyS2Q1bWI5dHhDTW5NUnRpRWdOb3V2dGVSYUY4UkU5ano2M3FwQXdDUnFVQkVzb2RDMXJaaFc2UHpVSjk0ZnlHT1F6aWV1cXhnSU9yTXROZU5pL2hMRTRiQmRpaDlhRFpRU3d5NHJvT0RkdnhSeks2QUx0cG5UZEl1VnR1Y2V0cmRuaGEwN3Q5TGZJREQ3V2NXNzhmaTl2Vk9pQStZOFUrOERFbCtTM2d2QUlCOTJMY044SEYvMEVrN1FBL2k4Rlp5VGJnUkpBVU5wK3NJek1RT0oxVWVXZ0RkcllPZVZhOW5SMUlpdjRHMSs5RDkrdWZvbUFkNVZiWEtKOGZ6VEhpN0NXOXIzZSs5TG1BdlYzN2pXcEdPVmYxN0JOSExrKzZmalpRak9KS0ZjT0VRT1F2Qy9SZmdna1NtQXR2eTIrNTVvSExpTU1Cb3Z5TnA1K0VJOW5VWnVCbTBiVnVoM2FET1R2M1l4Sk9aTUhOeThJa0F5WEJ4NmE1VFRENm5hcC9vcFhsSm1kUE5tVHl3dW5lNFdGMDhBY0ZqN1dxaFgyY25BS1F3djFUbER3SDRjby96NGdUbGFua0dDaDhwdUF5ZGZ3QWVPY0ZsQ2IvU1RKUk9rS2U0b2tBaEFSZUdkQUVnNzNncW44L2YxalNUR0l5ck44NzNxeDY1b2pJUFJGRER3VzBwZDVZYjRVRDF3TVZFUjlEc3hKTkRObTJqSDF0YUtwMHRTRUVnajVEMEFWZWMvQW9JZXJqQXlUYzhYT2pnQTBFSzVCNW9aTGpNRlYwbXB1cHZBN1RiSEcrUTlQY2t3dzJFTzB1aVRMbXVtVmFyUEppa0djdFlCOUJlZzZkRFQwdlhSQTl1bkV2enpySStzQTNrcFYybkpDbGZTSEIvNUNGb1VFTTZIK2MvOElBN1dSNW1KMWdlZXlSbGs5aDdUUkpLVjRCREtCRlJ4MzNCSjk3WEpCbEZmVWtpeG94ZGg4c080TUNaQU83YityRU5PMWtOcm96akFrSnlzUEY3WndJNFo4WGg0VmhuQUNXcHd6cWNnL3d2ZWVpWENPOThxQXJKZ2hEbWdGWnNTVFQzWTBXRkNOSHdBRUh2UWdEMFhLbFZsKzRzVlVxL1BqYzk5NlZCeFpLNEEwQ2FDV0d6VFlrMU9XNkpjSDZqSUVUOU1iSEpkQkxpSzhaWlFhOER3cE1FTTJFSUIzb2lwSHhUUWNpSm9mUGlpaEI2RHdZQTFhQ3ZxY0VLaUozb2RNNlJVRElJUWJyMlFMWDBLTFRhMVdhK1Z3VDBZSGNtMzR0QmU2RGp6YnhMcExGYzRXNUpxYVBkRTF5V1MrYXNPMnBrQkNQSDVrbnZ0U1Yyd1dYN0svdFRSK1FZQjFHOU5ZT0Q0MUZESkNHQkIzWmgxMEFuQisySmp0eGVkTnJwSnEyLzNXRTFmQ2d3T1VXRFVSRVRyeDRCVU1OZ1VWczNkR0dIYldGUExzSkZGVkIzb0tuSU1rM3lQQUNGVmtTT2ZPdVRhLzIvRGNSWkpNNGt1SjNnZGhCbkEzeXM0TjliV2k0TkRKVGVFSzRDa1daTG9sVVB1Si9rM2hUWGJUbWlaM3BRQjZlOStBeWsweC9vZU80RXAwaWVEK0xzMXZNNGc4U1pJTTRCY1JiQk0wQ2MyenJuSEJEbkF0eEo0Tkt1Zk5QMFJSN0V1UTNvMlVENmQycUVlNll0emZRSGlTT0ZmdmgwZzJMc1lVaCtIZk9RVVc1ZWg5Q2pXcDFHajNMMFI4SUREbTVncEk4dVRkdzdZNzVqMDdETEJ5dVBTSG5OV0trdVY0c1VybTU5alZhZVNlN0xFL2h1bXRXMHk3anZBNG9VSnRJNFU4aEw0V2tkd1dPNm9ES0JRNjJ2U2RYOUJRQ2V1bUtRSWhGSkZmUHpmMFB5TDZORFNCN3dPanBmQkM1Vnc3K3JyUElPb0svV2JvN3dUOEJhY1hRQ2RQRE1xZkJnd2pKdFNhSytvRjZ0UHd6VVUxdUhOekt4RzhiOG82TklRMTczck9nNUE1dWlUTlRzYTRTK0d1TGpZS3VzUVBzeDhmM1Bnem80RGZKSnNid1Q3d3NRT2hBbytINnFERjN3ZGFKRERMWGVvTE82ZVE4RTh1MG85VnNDNy8zVllGdEpKODJ6V3lHVXFONmlEbWY3MVBZRFF1clFYTDVWc2grTm9rbWNia2ppaFppN2g5UzNvME5ZdjY2anZla1F6Uk92S1MrWEwxdm5mQUFBeVhvaHI5Y0MrbUw4Y05yeUVuaVVxbzAvT2F6RDIzcnBSSlNYeTNNQ3JrbWJicXVRM3o0SDg0bjJ6YmN5a2h6a24wWXdMaDBZWmhEc1plVXdUdUlUcTRlb0ZqNHR6Y1U5UkwwYkhmeWJReWdtSjEwNm5UcVJpVlJJbzFLOUFzQ1BEWlduNDFkMkZYWU45QUlTNzBSMjUzWWZBTnFkWVJMaWlrWS90ZDdzZnBMczEvNkM1SDhTcTIwcWNkMEp1Z2RCSmxXUTYvTjQza2tuM2RuNk91amVPeVlsa241eWYzMy9YSnI4dGdJeHJja1FkRkY5RFhxSENiUzlGd25BeGZSKzRJQWxpUmZ6MHFQTVpINVp3NFZBaXowVDNsU3BQUERxNkI0NlRGKzhua2d3Q295ZVp2OHRKUGlWMDAwTTM0dHlyYndid0EyeFEwa2xOOTJ3NnpNSjJrcHE4SGpPUVIyY1R2Sk0rdGdTajZUY0QrbzlVTUlQWFVuOVJMaEpWZWNISWNsNThIb0F3MFM1cjBINlRCcVYrdFlNYkZucUNFSU5ySFlrL2U0cHFyODVWY0puQVp1L254ZFd3MGRBaW1hZ3FjcEM4ZlpnS2lnbk9iZkwyY1VQNGo4bHlRb0FTSjdmOEkybnB5bmpWc043ZkZkUUdnV3lkc2NxaitkSVd0Y2V0bTB5TkRYN2RlZUNsM2I1UzAwTnlWOHZWeGRlSEQrMnY3TC9Fa2d2UkdjL2xFd0RWN2d2RUZJN0RaZ2t2WnhQOUR6SCsrdEVYZG5yOTlNQXFha1hLbEUvdWxLdkpwcWNEVG9sVGY3Ukh3VEpDUzIwSWlZNWdNWnZiRk5YUzNIaUQzTi9aZkZSb2w0US9kVDZQMmxaOTJaY3JoMEJQdDJLMEgyNUZma2xZcEE1Uy96My8xcFM2ZUxrZVkyT1dBZVJFY0tiU0o0Zit6bXhJb0xJVDh4d3Bwcms1TTRWVFBCdmdycWRMd3dTQXdtQUtQL3pjUVB3MDQzc2RQWnpBTk5LTHFLL2ZtSmZmZkhhcEJmTzVtZHZkWTV2YUgwZE5selV0THorYUcvbHJzZEhnM05EOWY5QzRMR3QzOU5OdXFqYnBndG5wWkphYkVVTzQvRDVBcDdkVXRBYUIrTWVVRWd3UU5NLzduYnZtMkhPNHRHREVxYlRNVDZrOElYYmNaNG1QTGFNYlFEdE51aHQvOTFzS0trVUg2Skx6K3F6QWgwRkIzVGd2QWJ4V3dCbW8veFNKU0I4WVZkdVZ6bkpxZDByNW1BNitIY0t2VHJEd2RySnhGV3M2dmxwaWpwcTl0VVdId3ZocDRlNVZzS3hqUFRwb1RJdTRKc1FvejI2K0tRaWdka01IMUd0OG5sRDVidkpTT0lNWis2amNFdDBLTVhsSGtET2U3MTZyL2FlRTZVMzZLS3BmUDVQQVA0ZG1uMUdVcitwblpEbmVmQXRwZVhTdzh2VjhoekltNEFPbjg1SjM3bVFkQjgvaitkdDZmM1BKRktoZXIxK05hZ2ZHVElMb1g5Zm1uWUJzQkdJMWVkNDNkMlZ1MmRpeDlPa01STDYrU0lmQjJNTlp4Yi8zbXBNRkRHRklTdExPSHNrRlJPZkdiVm1TdG1WYXYzNWdHN29PaldaT0FsYWdYT2ZpWXp6azlwQlJlY1VXYnhmd0VkVDV0MGVNRHowcS91V0ZxNGVjUDZHNlhZRFJsSmxsWGQ0ajk4RmNWSHMxTVRQbDlRWFpxYm4yNks0SkoxNVZHOXpuS3M1NHRibzBnUjVkKzZGQXErWVJMMk5rbzdKYURiNE1LUjdNZFQ3eE1mNWF1TzFrb0lrYlhVbmQxWlljSytBOEMwQVFjd1hiMW9lb3hYLzExTDRCMWhWSGtwcCtvQjdBK0VUUStiZko4M2VidTVHUmE4NmxwU1JENS9hRlRRN2JSL1hiMHRza2l1eGVKbC9hRVcxWjBiSHg3aTExUE8rKzRsd3g2VWpNaEVSYm9lUFREQm9LVFNrdmFHK1ppekRsS1h0T1VlYTJsdGJ2RW5DcTRjWG83QXNkbWdycHNZeGN3dUF1Qmd6aVNnU2FKb0x6SVRRZTByMTBrTTNVb2FrUkN2b3d6cThUWlh3NVNDZTBxTmNTUWhKOXhGeU5UaDQ2aGN1Q0c2RmNCK0dVRUNZZEwzMVlwZ091ejN4eWhhL0RlSS9VbVlabTBEb1phVjY2U1h4c3F4MzRTeG5Eem1IWDVGd0xDWkpTZzJKS3dIOE5KcDJwS2xYU29TK2tTMU0zelpNM3QxMFQ2YlR1Q05NU3IrMFN2WFNIa2hQNlQ0OVRkTERsMnFreEswRElPcW0vZHAvN2dqcWNJajdrNFJ0cC84S3RBL1JoblA2aWlHbmFxajFEYmc4T09QT0Z3Vm9tcXlVSzRzdmxzZWJ5YUY5cEhvQy96eVhtN3RydGFqcEc0NEsranFFejhVT0RSb1E0bVkyQUhrNUd2NnRCM1RndlA2WHBDeFRqeGw1ZEcrSGRYaGJwVnA1bWFoZjZWT3VKQ3dBN2xNYktXTnhxdmdEclYyRkRtSlYzRXRlcnREL1JibGFub2hXYnEvQk1qYVpTemNCSUJzUXV5VVhBeTliL1lOWmhQNzFleXVMejRtWFl6MktoVDJmUThEZndXb1l2bUZXVGNJUWlrTXRxblR1L1JmejRxR2k4WFFVb212Z2JCMExqdW5ZR1NXVnppNnBkUFlnWmF1TjREeXVCZm1RcURoREpxTUpmTHJ6VzY4c1h1SWpWaW9yVHdBMnRQSWJlbkxReTJQZHVGYkNFeGxBT3dyZjlPR1pmb0FCc2hsa09nekF1eDlPcnlnU3ZXYVlBRkNxbHg1YXIxWmZMK3FQV3VMSG9TcFl3TjNNQk8vZHFFUHJPYzdWUkw2cnBWbVpWRkdqYzVBbHJsMnAxUCs2WEM5ZnZwR3lkSGZ5M2JQeWc5WEZZcTFhdVpuUTYyTGlwN1I0a3UrWkxjeVdObEpXa2czQ3ZRM0NDUXo1MGhGNG9uempsbkpsNGRscFgvaGVrNHgrNHNDMjk2a3UvWUNTU3ZuOWxmMDdnQ0ZpdkU2N0QwTDZYdXJyVnZNL1A0Ui9kNm15OElxNGJleDZLK081M055N0tONk1JVmI5TWFMT09WMTlBMTh0NVBIUFErYTVodWhaN0Z2YXQ3TlVMYjJ3VkZsODV3T1ZrLytJcXI4RlZYOUx1Ykw0d1hKbDhhMTdxNHN2T0ZBNU1OQ0xVMUwyYXU4NWtxN0hxay9aWVVoNlhhL0JNUDdzZXBtL0RDTWFkZ0RZOUg3VWRBclJ5L2EzejJBMjFsWGp1RVM0WS9XRkd4SGZFeVNaa1JMYjZjUm15N3FQWUNWS3IxY2VIUmZHSWczRWorK3Y3TDhreE1xTmF2aVhnSGc0aDUvb0FNMEk4UCszbUMxK2N5T0pSR1FMMlk4MHFzdWZBL0RqclVOSk9oaDJmYnZPaCtHVjVjcmluMjRyblBFWEYvQ0N2dTd4MW10VXZScjV2YnIzekZQVis1OWNsLzgxZ0UrS0o1V2duTjE4UDZ2Y2UxSmUwNVBad3V5WHlwWEZEd0o0VVlxeWROVWJMeGZ3M3IzVmhYL1lXN25ybmJzTGV6NC9hTmJhcngxMnJ5ajd0VVZKdWZKeWVRNDEvOXdHL1JQMzFoYitGNEJVSy9JNXpoMHVMeTI4VGNDZlliam5nTllrNkkzbFN1bXEvZldGTjgvazlud25mZy9kZS9va3ZhVGZMMWNXZDRGNFVkcjhoaWtqME5JMWdIdi9SWncvTXN6MWF3cEI2cUFPVGkvWHFqZUdXbms1aEt2WkhhaWVnSnByR29Xb0w1U3FDKy9ONVF0djNNbWRsWTNrcmJvZUsrcHhyZjRua29na3JSY1A2WDZCSVJGNWxXSjh3SE5DTytGK3Ewa0hnS0thZzE3bjlaR2tNQitMaWR3dWV1di9kY3RLNEJuN2F2dmVzanUvTzZtemszaDZFeFBCYnBTSkRLQXhLSzhwcEIrMUJLQitFUzVxUm9MbzBiSDE2K3drOFFpT1RGZVhxek1JdzZjMHNQdzhRWThnMXpTTTFDKzFnQzhHeUx5ZDVMQ3EvUjNNY0thNldGbDhCK0NmMEZJTkgwcENRR0JHMEpzZXFKNjhmckcyK1BydHVlMmZ2NUFYcm9tMW1WU3NjVlJIdDFmckR6enVSUFg0THhLOERxc0JzMk5aSmtmUUNvRzNYeko5eVVDM2gwa2dxZjJWeGJjM3BPdEJuTE9CcEFvQ1h5RGgrbkpsOFIvM1ZSZi9pdm5zYlRPY3VhOWZ2b1BLRmY4dUtWTkcrWHpVOEZCQmw1V3JpMWRBZWhMSXF3ZzR5ZDBtNmJOcHBSbG5UdU52amxmeHN3UWVuK2E2TGdKUUwyeUV1clpVWFhqYmxQTHYzVm5ZZWFEZlBaSmN2cnR5OTJ1V1ZYMFl5RWR1SU4vRUVQaGFGbE1mSEZWNmtqTGw2dUl2Q1ByOTFpU2lyVmVBdUpoL2RUQzZGTUx2MVd2Vml5VzluRU5HOUpHVUs5Y1duMGt3SGxvdTZUc2tDSjhRM1Y4R1F0VVQyMk5CQlZybGJBK0dFdVFsRnpySUN3b2wxKzZyeUpBT0xnQkFEeCtRREFTWElaUVY2Wnh3b2FUbkFYaG9PKy9PZXVrbS9sc3hERmV1QmJDUVVud3FBUER3SEc1eE16ay91TUFZTjZHN3RGelorajhvVnhmL0FNRC9pSis2VGpuYXYwazRSdUptWm9MUHN0RW9lQVlacDdBaFpPVG9neEFNSEh6ZzZUSUlrYWZ6MnlXZEIzQ0hnRXNKWENubzBwSFpXd25IUWYzUzNQU2xmenVTOUtKa3BXeXB1dmpIQkg0WlE2NG91cWdLK0pxRHZ1amh2cElOOUwxd0tyaEhVRFdIM1BJTzdBaXhLakxtRVJ6SkNwb082NVZ6VnVSMndQc3JTUHk0RjM2TVJOeDUvZkJsRS81bCsvU1pQNzNlNm5nWVNwV0ZWd0I0TTlidXNTVXJWWlA0UFMwSitCNkpyMHE4M1RrdHdBV0g2SG5DZVZkdkZCcGhBYUd2SW5CQkpYQ096amt1QnlHeldYQmxPZ3pkZHJyd1hBa1hBcnpZZTgyVHVnSkFFZUJaYUNyUnRGYzhoTjVXTE96NTlXRzJBL1pXRjU0Y1NoL2NnRWk5Q3kxQy9EZVJ0ME80TXh0a2IyL2tHdmZNWW5hSjVFcEwzSnN0MVVyUHBmVE8xcjJNRFFsSEhmWFMyZWxMUnphQWxtcWxweW9NMzl1eVgyNi9BMWpicmhYN3ZTVnkxYzhPKys3dnE5OTFaUmp5bndCRSsrNXAzcVV5R2J4NHRqRDc2V0h5VG9Na2xxdmxtd0QvbDJoT21wTXFmRFh2Ui9vb3BvTWI1emhYNjVaaXJDUDlJb0NnVkZsNExjbmZSdks2YVRwekFHN05Gd28vdjVNNzcwa29PdDRRWTQ4SDJuMElheXNqaWFJTVNGd2c2QTFxaEljb1RrRSs1d0V2aEY1Q0FNaUZnQU5EUnpMd1VpWVNQNnhPejVwajhZQThCeUtvUWZLdlVBZyt0SkYwZWtGeTVaQU8vYzlxdGZJakJFWmhZbEVnOEFTQlR5RGtHeUdPb05JNEpQTCtHcXJIeXlvOUVNVjRGREFGOGd3QkZ4QzRFUElYZ2poTHpYME5BTzBZbEJ2WSs5SkJNdk1Ib3g0OEFTQlRtSHBIbzFyL01UUzlTYVY5enRIc09YN2ROZ0pYUTdpYUVPUlJSeGdlRjNGL0NKeENGZlVxNkFYdlF2cHNBd2pva1FHWDh3QUtVamhOajIwQUNvQmFkZGhSSk4vNk9BRHd4TkZoOTlLTGhUMmZMRlVXL2d5ZGs5TU53SGtRODRRQW9yYmlsL2V6Z25JSmkvc1dsKzQ2c3JkU0NnVmxTRndwS0xQQnJaQjFhYjF2N3k0VzlveHM3L09RRGwxUXExUmVHWFArRWJrNjdMZnYxNlgweEZjYzA3RmJobW5IRGJsckNNMjJ2cWJwMUQySWp4Ynp4YmF5WWJldVF2ZTJRVGV4eGN5NjUwVy83ZFhlai9tcS94clE5cnVkK0VHTGVJS3JoZGVneDdaRXI3M1I2RElNclk4aUFlenJzVzRjakcwQTdhZFoyQXJFR3orVXVLTnJEWWk3Ty9RSU8zNlAvN3VtbzRwKzNQQ2JUdkhUbUhadm1PTmNiYU5wOVdJSGR4d3JWVXUvQWU4L0FPTGNEU1FWYjR4Uko3QUQ1STdWS2hTMFpodTErNDkyV2h1dHZ5V0tyNS9kTnZ1RkRhVFJseG5PVlBmVzk3NHFEQnNQWjJlQTVxUjA3OFBFMjQwRGtHc3BuRjNFMkV2T1ZSRmZSd3A5aEVueDU5RlJueFRiZ2RpVDJoTEhPYk53OXMwbnEvZGYwWnBBdEFmbUlZaHJ5aE5BbnNCbElDNXJ2VjN5OEdITEhNMk5jL0FFQUlqL2ltbjNweHhoN052bGF2VkpJSjdVZFhqUVpENCt3WHJNVXUzazlRRCtKazIrQjNWd3VsYXRYaHRMYjFDK0VZSncxRGwrb0xzZWVqbXQ2ZDZMNzI1TDNhdkJYcXREa2lxeWVIK3B1bkFyaENjaTNhUTBKTGhkNEhQVmRISHFVN1Rwb1FaQW9wbjRPT05HZHpOMkxkd0VObFZwM3I3NEhrWFV3Zm5ZOTM3YVhWRUh1T0UzWGNKM2xPVnZ6bkZ1b05QNGpUQlhtUHVzSEYrQlR0dlF0SFIzMHQzMUZkR3RhTkRybkkwT25qVlJieWhPejc5ekEya01wSmdyM2s2NVgrdmg0aTh0UkZOY0Y3VWJqODc2aTlOZGY3MCswWG54ZXV5Y1hHcDFUMndZY2RONVBPL2tkTUg5b29EL1FMcndZOTNFKzRWZTd4WmJXeUhqMStLWHZoRmtNNjhkOWZ2bW9VZWpHZE4wK0RTRUd5V2xXb1NzMUtxUG8vRGtJYklqZ0cvN0hML1NjYkQvSHZXYVFiWGYrYjBHMS9nS01YRDZaMENIa1B4NXI3WnI2Wm43bHZkZHZsNVpCNmFSNGhvS0xuSURPT2krUjhIWVg0QXVWWGh0Y0hZUXpkcWlUc2hodFlQcjE4R1BaTlhaWW0vZzhJcjVxZmx2alNpOWRaa3Z6TCtId08ra2RCcmVUYnh1dXV1cjE2U0RYZWVNQWcvZ0hjd0hiOXlvdVU4UzVyYk5mY2pCdmFvVlozVW9zNmtZM1hYWHI3MXh3QWNZVkovMEc5NUh2SWp6UitENEVnQjNvbk9WazdZTyt0M0QwQ0syOUdpUlFlYTNpMVBGcjQwMFZjbEJpdnhIcCszVVl4SURYWDRJaDg1T2VuRkpwYndIYjhLcW9sdWEzUjliandBQURlZEpSRUZVOXlzVStZazV6aDFQY2MxSW1KbmE4ejJCYWZkY293bmNEb1hoZFdNb1ZoL2s0bVBNdUFiT2lFazdVdkFRTnRxQmpsbGUxQWZoMjZSZVhDenMrZVFrc3kwVzV2K1U0SnZYbEdZMDlPc2tSMGtJOGwzYkMyZStabHdpNzE0VUMzTi9UdkwxZ3NLVzI3bHhkZndqcXpjdkxBOCthekR6K2ZrN1hTYnpQQURmUitjZ09nckcxVTY2OFFKdkxlYUtIeDlEMms1a2VwdmJMa1NlRWRiRHhBTW9WM2dGcEdmR0RxVVFpZXB3UnZwTXFnSnVrSmo1VlFqeVkwZ1hTS0RkVGdUZGVLL3VQUk5ZczZEcW0yZFhPbWxJNDRoK3cweEVoTnYxOThqMk1TYUVCL1JaWm9NWHpSWXUzWkRYbkdFZ0dXWUtVNjhUOEJiMEZydHVXWnJtS25yNzl2d1p2ekVPcGFIMUlPbG44L00zTzdyWEVRelJ1WUxha3RCeEpBTW9BQlNuaWw5elFlYlphb2I4NnQ3YlBTMXdVSFZZVTVFQmlCcmFsMjhiUWk1a21OdzdXdWlmaHM1UWljazdldkZiK2VremhuYVlNU3p0L2RBOFB3YWhPLzlFYlVuUW94K29uSGdTc0hZODZMTkNITllza0wwMEQ4YTVDcDI0SnlJNWplT0ZHQmMxQ0grVm8zdmg3TlRzTnphckVET2NxYzRWNWw4RjRROEIxTEJXcExZVnFSRjg4MVJoK3JjbVBYaEdrRndwNXVkdXB2aEhMWEh1ZXFMclRZZCs0NnVpT01WYzhiWnNCcytEZER2V2luTzMzUDIzaU1ybUJOeFlycFN2QWRZMWUwZ055UkNPa1NPRURlM3JCMkdRS0NMTXZxVjlPMXVlaDFJanFBSGk0NzFzdWNkTjFIZlBjZTZ3b0ErM2l4UXZYbitFcGpKUk5xUnVpbnU2V2krdkRVQUFmRkFwRWEzTjBJMTlEMndVQ05oSDhIZHowNFdYN3l6TTc5M3M4cEJjbnAyZS94MEgvaHhXUTU5dHdyN1VZQVFkb1BEZlpndnpyOW1veDVhTlFqSXNUcy85UHNtWEFscU1EcmYrMzFyMVJrMk5PczJaM0o3dlpBSStDOEQvUTZjWlVseFpiSXZDUFZMNEYrVjYrZkpScnlLb05jSFloMG4vdTdzS3U0NGxPVkZzUEY1UTNPRkU0dndJSE1rRW1PaldVUzhDeDNqZ0JtQ3dPTC85TzRXbkgxaGUvT0hvaDI3em14N1hEdjI4SjJuR012RUJWR3RGSjF2cUJXNHE3T2pEaEh2dTdQVDhtelo3QUloRDBoZW41OStmNGRUVElid2JRQjFyVjFXYlZwK0NHZ0krR1pBL003dHR6NStQMHV4Z0k1QmNtU3ZzK1Q4SWdtY0ErdnVXVXRZbUtjYXNTMTdTU0ZlaEFEQ1QzL09EMmNMOEN3RzlFa0tremRwTDAzWXJFRy9QQVBIRENoczNIOU94RVRtSWFCRUV0MG80MnBWbkdtb0EvcFljTEhhWEZFaitLVEczZUtucVd1QVhkMDNOMzVteWZDTW5sOS8yRFJCcDNaWTJsWW1JYzBQUDY0RjFSYmV4aTF3YU1XNUhXZy9xQWJTMUg5VjVhR3RRQmZCNVI3NTBXK0hNNTg5TnoyMG9QTms0bVptZXVYdDJldjRYSmQ2RXBwRnlaUE1YZFFTUnVjV2tFSVJ2VWZ6Vm9KRDVxV0poeitjR1h6SjU1bkp6ZDh3VzlqeWZ3TThKK0dycjhGWWFTTWVXTjhtVnVlbEwzK295bVo4azlEWko5MkN0dHZVNDczOFlMZURXTmJ4aHFYcmlOYU9jWEJTbmluYzQ4dSs2RGljdW80Q3ZaQXY1UkFwTys1Y1hMdmZrVTd2eVNOYnZDY2NkOEw0a0EvVzR1WmdYTDFIc0RwK1hwTTQ4QU8rOW5ydS9zditTN2g5N2VReHErZUpOQTF2L0JobGtKamF1VFg0RnVqWVFiOXoyc051bU04bG52ZXNHbDBjNFN1RDlnUHY1VEdIcW1iT0ZQZS9lakwyR3RKQU01N2ZOLzFPaHNPMTZFaThBOEJFSWtZcDczSFl4N1Bxa0Vkc05xc2NRd0pjQnZESkE5dWx6Mi9hOHZjamkvVVBjenNSb0RTUi9PMVhJUFEzQ3l3QjhDV3RGbTkzMU5TcFI1L3BwRVBkSFpqN2ppaDVSekJWdm01Mis5T1hNQnRjU2VwUFFGbVdPKy83anRzaHByNEhBbDVlcmk3KzZ3VEtzSmt4SzVGdGk5eC9sTjdqdkVFNDQ2STkzY2RlOWcvS1I1TUlHbjBOZ3BpT0Y5VC94RW4yalVGZ3phRzBhY3Z3VW1wR1Ayb2ZRMmYvMitwdUNQS2lIaGx6cE1HbnBHNUNoNmFTalh4Njk2a3V0ZnllNlJUaHBaL0p3NUQyK0dZMkZhTDZnNld6bDFwTG1mQWxxRURnRzhac2tQeFZBbjUwcHpIK0hzYURPcHhPdHVJanZrL1QzKzJxTGp3MDlYa1RpNllMTzcyUHNycTcvNC9Tem80MFRRamdtNG5PRS9qRmYyUGJKSGR5UmFCOW9LOUhxL041K254YmVkNkxtbmlYNVh3QjBGY0ZwckEwcjFxL09vbmJjNzN0MzNmV3FYdytnSm1HUnpuMHAzVjBNejl6VTNEY0JmUFB1eXQxdlhVSHRwenp3czJ3NkRlL3d6eHNyWTc5QkpjbjdGM1ZxUWNMemU1RVQ5RDhYYTR1M3plZm5QelprR2gzTUZlYks1ZXBkTDVYNGJnREZycDk3cmhRbG5DUnhjN0d3NXlOSjh0aGYzejhINE1aWW1zSmE4VG03L280R25RYkp6MXlJdWFQWUltVHltUzgxcWlzZkJmVGNhQ3VrYTdEcmp2TXFBSXA4a0h2cDRaSmM1Sm1vVng0a1Zhb3VOTnBEWW1mYjY5ZCtvaFhvcVN5eWRRQWRIcFhTM21kU0ppNCtMVlZMczVML0J3S1hRNm9DREFTNFZoaWh5RkE5M3BEaWYwZGxqdXlMU0REZXVRbk5RVEtrMkJDMUJMQks2WlRJZ3c2NmczVGY4bzVmbloyYUxaMnVnK1lneXZYeTVmRGg0eVJjS2VEUmdHWXBuaUZxVzBwbitzMEpoM2dLd0FFQVg2WGpGK2lDTCt5ZTJuM0hKSndpVElwak9uWkdwWGJ5TVY2NEd0QTFBQjhtNFZ4UTArdlVXYlNhU2lySnFVTzRIOEFSRUNWQkMwNWM5T0NCVE1ZdnprenR1WE96OW8zdjA4SlpwK3A0dFBkNEZLQkhBbndZaEIxRHRCbTBOSjZQRWp3STZRN1NmVWZ5cDBBK0RjQ3poaXhpYzFBUnZoTUVtV2NWODhYRmdWY2taRzk5N3crSFllTlZnRzdvaXBBU3B3N2c4MDc4NDkzVGM3Y2tqY0Iwc0xwWXJIdi9UaEhYUUtnVHpJaHFUeVJhZzA4VUV6UWFNbW9nYWdEdVVJWVRjOXlTbE1YbHhhdlkwSitydWFvV2dheWtiT1RhVVlCRE0wd2FLRGJRTkFXVXdDeUJmOEMwKytYSXdYdzgzZmhBdDcreStKZ0c5TC9SakN3VkVnd2tCTTN3YlhTaU1oQkZRSUFhQWtNUU5VZStzNWlmKzhQNEFQMmdHa0FCb0x4Y2ZxUWFqU2VRcnNMbVpqeEN3QkVLVm1jejBxcE5UNlNXM0F6VDR3R0NJTU8yV2pRVk1IUlNBMEFOVWhYRWljRHhXT0I1TXNpakZpSi9haXNwQkUyS296cTZmYmwrYXVlSzNBN0k3eVM0VTlDRmhIWjQ4VnkwM0prUldBWlJaOU1GM2hIQUhmSEVDU2QvRHpLWnZibHNidi9GdVBqZVVZVnUyOHBJeXV5cjc5dnQ1WGM3YU1iTDd5RGNMc0VYQVo0djRReENHYkExK1VPekhRb01LYTBBcUlFNEJlQTR4SHNKM2kzb0VBUHNBNFBGekZUbTZDVzQ1TlJXMk5mcWhTUjNCQXZuVjZ2QkhJQlpJTHhJd29YTnRvTUxTVzBUbUNFVVFxeURXSUp3Z3RROUFBOEJLSHZIMjVqamtWbk1ub29tV2lXVnprYkZ2dy9Fc0o1cFdpc3pmQzVmS055NGt6dnZHZEV0UTVMYlYxMTRuQWNlRDNJT3dpVUF6Z0owdkRsbzg0dG41UER2NTNMUGlZR0pkYkd2dG0rUDk4c1A4M0JaMGsrMzdxUW1PTytvckFjREJ6VWtGd0loQ2RSQm5DQ3o1ZDI1M2FWeGU5TVpodjIxaGN0Q2o0ZFJYRmJnR2tEWW5rUXlwUFBOY0l4aXdHVkJucUR6b2M5T0JicmprdHo4RDNvNWsrKyt6d08xaFllc2hPNXlCcjdCNW5PWDRFS0NKTUlBSWFsQW9TTExEcUdleitkdml5Uml3L2lUVHN0V1VlQXhSa1RTV1plazdCRWNtWnJDVWdZQVFwenBhNmcxZG1IWHlwaU0xN2MwZzE0MlNUeUVRd1dDMjFTckZHcGtJVXROTmVnQ0FBZ1VOcWhjalo2MVRLRzJQQVhXbHpDMXZBdTdscmY2U2oxRm0zR0hjQ2hmUjMwcWc0eno4Q3Fnc0xLRXBjWXNaaHRKMnMyKytsMVhOa0wrUzllZVlLSmlJaWIrcFBTdTR2U2VsNDFqeFM2SlpaUnoyN0F0Y3dFdVdIbXdTcW8ybXpTUlliWXFFeDlBdTZNRUFLZG54Um1Ha1p6NGU3KzNzdmdjRC8wMVZtT0lkdThkOTAwR3E4cHhKUGpmWjZmbjN6U09NbzR5VFdDMWoxdHYzMitVK1U2U1h2ZTAwZnZwTmJqMkN0MjIyZlcyYVN2UVhnMXJuUmh4YThMdjlEdG5LMVNxOFo4WGEzK0RrY1J5YmZFMUVGNkQ5RGFZN1pXb29GUE84V2RtODN0dUdVdEJEV01BSnNJMURHUGlsRlRLbytyZkRlQm5rSHdGQ25TdVFwMmdBMEdRZldveFY3eDlURVUxakw1TTNBN1VNQXhqam5NMUZOd3IwWFJMR2RleUgwVGMzRTBFZDRWaDQ2MGo5MVJrR0Ftd0FkUXdqRTFoam5PSG5jTXJCWjNDQnV5L0NUejVnZHJKTjZZTmJtMFlHOFVHVU1Nd05vMW1mRjMzMjBKSGxLYTBxMUZCK0lWeWJmRTNSMXc4dzFnWDJ3TTFER05Ua1pRcFZSYmZRZUlsOGNQbzR3Mm9Ed1N3Uk9EblpxZjNmR0RraFRTTUh0Z0sxRENNVFlWa1kybzY5MXNTUGhFL2pGWFBaQnp3aVFiYmJWNzR2VksxTkR2QjRodi9pYkU5QThNd05wMWQzSFh2dnFWOUwyeGc1ZFVBSGdPaFFDSUxZQXJRbE1Rc0VIa2Vvd2lFb0x6QWtOQkswLzBkTXdRYzVSOEpvQXlZV1pFeFhreUVheGpHbGtGUzltRDE0TVZ5dGNJeXlDemtQVE5aVWJtZzRiTU4wQVh5WVpoMUsyeTUrZ3dVTmtJRWpRQmhScEFLVTJmdHZZQVhuR3FsWndPb1lSaUdZUmpHVnNKV29JWmhiQ25TdUlZejE2Q0dZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSakdpUG4vSklTM21iWTdtck1BQUFBQVNVVk9SSzVDWUlJPScgaWQ9J2ltZ18xJyAvJTNlICUzYy9kZWZzJTNlICUzY2cgaWQ9J2ljb24nIGZpbGwtb3BhY2l0eT0nMSclM2UgJTNjcGF0aCBkPSdNNjEgMEw2MSAwTDYxIDYxLjIzMDRMMCA2MS4yMzA0TDAgMEw2MSAwWicgaWQ9J2ljb24nIGZpbGw9J25vbmUnIHN0cm9rZT0nbm9uZScgLyUzZSAlM2NwYXRoIGQ9J001MiAxLjIzMDM4QzU2LjQxODkgMS4yMzAzOCA2MCA0LjgxMTUgNjAgOS4yMzAzOEw2MCA0My4yMzA0QzYwIDQ3LjY0OTMgNTYuNDE4OSA1MS4yMzA0IDUyIDUxLjIzMDRMOCA1MS4yMzA0QzMuNTgxMTIgNTEuMjMwNCAwIDQ3LjY0OTMgMCA0My4yMzA0TDAgOS4yMzAzOEMwIDQuODExNSAzLjU4MTEyIDEuMjMwMzggOCAxLjIzMDM4TDUyIDEuMjMwMzhaJyBpZD0nUmVjdGFuZ2xlJyBmaWxsPSclMjMwMDE5QTcnIHN0cm9rZT0nbm9uZScgLyUzZSAlM2NnIGlkPSdHcm91cCcgdHJhbnNmb3JtPSd0cmFuc2xhdGUoMC45OTk5NjE4NSAwKSclM2UgJTNjdXNlIHhsaW5rOmhyZWY9JyUyM2ltZ18xJyBmaWxsPSclMjNGRkZGRkYnIHN0cm9rZT0nbm9uZScgdHJhbnNmb3JtPSdzY2FsZSgwLjEyOTMxMDM1IDAuMTI5MDQzOCknIC8lM2UgJTNjL2clM2UgJTNjcGF0aCBkPSdNMzkgNTEuMjMwNEw1MS4xNDI5IDYxLjIzMDRMNTEuMTQyOSA1MS4yMzA0TDM5IDUxLjIzMDRaJyBpZD0nVmVjdG9yJyBmaWxsPSclMjMwMDE5QTcnIGZpbGwtcnVsZT0nZXZlbm9kZCcgc3Ryb2tlPSclMjMwMDE5QTcnIHN0cm9rZS13aWR0aD0nMScgLyUzZSAlM2MvZyUzZSAlM2Mvc3ZnJTNlXCIiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJ2YXIgbixsLHUsaSx0LG8scixmLGUsYz17fSxzPVtdLGE9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaSx2PUFycmF5LmlzQXJyYXk7ZnVuY3Rpb24gaChuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiBwKG4pe3ZhciBsPW4ucGFyZW50Tm9kZTtsJiZsLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIHkobCx1LGkpe3ZhciB0LG8scixmPXt9O2ZvcihyIGluIHUpXCJrZXlcIj09cj90PXVbcl06XCJyZWZcIj09cj9vPXVbcl06ZltyXT11W3JdO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksXCJmdW5jdGlvblwiPT10eXBlb2YgbCYmbnVsbCE9bC5kZWZhdWx0UHJvcHMpZm9yKHIgaW4gbC5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltyXSYmKGZbcl09bC5kZWZhdWx0UHJvcHNbcl0pO3JldHVybiBkKGwsZix0LG8sbnVsbCl9ZnVuY3Rpb24gZChuLGksdCxvLHIpe3ZhciBmPXt0eXBlOm4scHJvcHM6aSxrZXk6dCxyZWY6byxfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1yPysrdTpyfTtyZXR1cm4gbnVsbD09ciYmbnVsbCE9bC52bm9kZSYmbC52bm9kZShmKSxmfWZ1bmN0aW9uIF8oKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBrKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIGIobixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gZyhuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/ZyhuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9nKG4pOm51bGx9ZnVuY3Rpb24gbShuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIG0obil9fWZ1bmN0aW9uIHcobil7KCFuLl9fZCYmKG4uX19kPSEwKSYmdC5wdXNoKG4pJiYheC5fX3IrK3x8byE9PWwuZGVib3VuY2VSZW5kZXJpbmcpJiYoKG89bC5kZWJvdW5jZVJlbmRlcmluZyl8fHIpKHgpfWZ1bmN0aW9uIHgoKXt2YXIgbixsLHUsaSxvLHIsZSxjO2Zvcih0LnNvcnQoZik7bj10LnNoaWZ0KCk7KW4uX19kJiYobD10Lmxlbmd0aCxpPXZvaWQgMCxvPXZvaWQgMCxlPShyPSh1PW4pLl9fdikuX19lLChjPXUuX19QKSYmKGk9W10sKG89aCh7fSxyKSkuX192PXIuX192KzEsTChjLHIsbyx1Ll9fbix2b2lkIDAhPT1jLm93bmVyU1ZHRWxlbWVudCxudWxsIT1yLl9faD9bZV06bnVsbCxpLG51bGw9PWU/ZyhyKTplLHIuX19oKSxNKGksciksci5fX2UhPWUmJm0ocikpLHQubGVuZ3RoPmwmJnQuc29ydChmKSk7eC5fX3I9MH1mdW5jdGlvbiBQKG4sbCx1LGksdCxvLHIsZixlLGEpe3ZhciBoLHAseSxfLGIsbSx3LHg9aSYmaS5fX2t8fHMsUD14Lmxlbmd0aDtmb3IodS5fX2s9W10saD0wO2g8bC5sZW5ndGg7aCsrKWlmKG51bGwhPShfPXUuX19rW2hdPW51bGw9PShfPWxbaF0pfHxcImJvb2xlYW5cIj09dHlwZW9mIF98fFwiZnVuY3Rpb25cIj09dHlwZW9mIF8/bnVsbDpcInN0cmluZ1wiPT10eXBlb2YgX3x8XCJudW1iZXJcIj09dHlwZW9mIF98fFwiYmlnaW50XCI9PXR5cGVvZiBfP2QobnVsbCxfLG51bGwsbnVsbCxfKTp2KF8pP2Qoayx7Y2hpbGRyZW46X30sbnVsbCxudWxsLG51bGwpOl8uX19iPjA/ZChfLnR5cGUsXy5wcm9wcyxfLmtleSxfLnJlZj9fLnJlZjpudWxsLF8uX192KTpfKSl7aWYoXy5fXz11LF8uX19iPXUuX19iKzEsbnVsbD09PSh5PXhbaF0pfHx5JiZfLmtleT09eS5rZXkmJl8udHlwZT09PXkudHlwZSl4W2hdPXZvaWQgMDtlbHNlIGZvcihwPTA7cDxQO3ArKyl7aWYoKHk9eFtwXSkmJl8ua2V5PT15LmtleSYmXy50eXBlPT09eS50eXBlKXt4W3BdPXZvaWQgMDticmVha315PW51bGx9TChuLF8seT15fHxjLHQsbyxyLGYsZSxhKSxiPV8uX19lLChwPV8ucmVmKSYmeS5yZWYhPXAmJih3fHwodz1bXSkseS5yZWYmJncucHVzaCh5LnJlZixudWxsLF8pLHcucHVzaChwLF8uX19jfHxiLF8pKSxudWxsIT1iPyhudWxsPT1tJiYobT1iKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBfLnR5cGUmJl8uX19rPT09eS5fX2s/Xy5fX2Q9ZT1DKF8sZSxuKTplPSQobixfLHkseCxiLGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmKHUuX19kPWUpKTplJiZ5Ll9fZT09ZSYmZS5wYXJlbnROb2RlIT1uJiYoZT1nKHkpKX1mb3IodS5fX2U9bSxoPVA7aC0tOyludWxsIT14W2hdJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiZudWxsIT14W2hdLl9fZSYmeFtoXS5fX2U9PXUuX19kJiYodS5fX2Q9QShpKS5uZXh0U2libGluZykscSh4W2hdLHhbaF0pKTtpZih3KWZvcihoPTA7aDx3Lmxlbmd0aDtoKyspTyh3W2hdLHdbKytoXSx3WysraF0pfWZ1bmN0aW9uIEMobixsLHUpe2Zvcih2YXIgaSx0PW4uX19rLG89MDt0JiZvPHQubGVuZ3RoO28rKykoaT10W29dKSYmKGkuX189bixsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGkudHlwZT9DKGksbCx1KTokKHUsaSxpLHQsaS5fX2UsbCkpO3JldHVybiBsfWZ1bmN0aW9uIFMobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fCh2KG4pP24uc29tZShmdW5jdGlvbihuKXtTKG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24gJChuLGwsdSxpLHQsbyl7dmFyIHIsZixlO2lmKHZvaWQgMCE9PWwuX19kKXI9bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYobnVsbD09dXx8dCE9b3x8bnVsbD09dC5wYXJlbnROb2RlKW46aWYobnVsbD09b3x8by5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHQpLHI9bnVsbDtlbHNle2ZvcihmPW8sZT0wOyhmPWYubmV4dFNpYmxpbmcpJiZlPGkubGVuZ3RoO2UrPTEpaWYoZj09dClicmVhayBuO24uaW5zZXJ0QmVmb3JlKHQsbykscj1vfXJldHVybiB2b2lkIDAhPT1yP3I6dC5uZXh0U2libGluZ31mdW5jdGlvbiBBKG4pe3ZhciBsLHUsaTtpZihudWxsPT1uLnR5cGV8fFwic3RyaW5nXCI9PXR5cGVvZiBuLnR5cGUpcmV0dXJuIG4uX19lO2lmKG4uX19rKWZvcihsPW4uX19rLmxlbmd0aC0xO2w+PTA7bC0tKWlmKCh1PW4uX19rW2xdKSYmKGk9QSh1KSkpcmV0dXJuIGk7cmV0dXJuIG51bGx9ZnVuY3Rpb24gSChuLGwsdSxpLHQpe3ZhciBvO2ZvcihvIGluIHUpXCJjaGlsZHJlblwiPT09b3x8XCJrZXlcIj09PW98fG8gaW4gbHx8VChuLG8sbnVsbCx1W29dLGkpO2ZvcihvIGluIGwpdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgbFtvXXx8XCJjaGlsZHJlblwiPT09b3x8XCJrZXlcIj09PW98fFwidmFsdWVcIj09PW98fFwiY2hlY2tlZFwiPT09b3x8dVtvXT09PWxbb118fFQobixvLGxbb10sdVtvXSxpKX1mdW5jdGlvbiBJKG4sbCx1KXtcIi1cIj09PWxbMF0/bi5zZXRQcm9wZXJ0eShsLG51bGw9PXU/XCJcIjp1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8YS50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gVChuLGwsdSxpLHQpe3ZhciBvO246aWYoXCJzdHlsZVwiPT09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYobi5zdHlsZS5jc3NUZXh0PWk9XCJcIiksaSlmb3IobCBpbiBpKXUmJmwgaW4gdXx8SShuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KWkmJnVbbF09PT1pW2xdfHxJKG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdKW89bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxsPWwudG9Mb3dlckNhc2UoKWluIG4/bC50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtvXT11LHU/aXx8bi5hZGRFdmVudExpc3RlbmVyKGwsbz96Omosbyk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwsbz96Omosbyk7ZWxzZSBpZihcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sKXtpZih0KWw9bC5yZXBsYWNlKC94bGluayhIfDpoKS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJ3aWR0aFwiIT09bCYmXCJoZWlnaHRcIiE9PWwmJlwiaHJlZlwiIT09bCYmXCJsaXN0XCIhPT1sJiZcImZvcm1cIiE9PWwmJlwidGFiSW5kZXhcIiE9PWwmJlwiZG93bmxvYWRcIiE9PWwmJlwicm93U3BhblwiIT09bCYmXCJjb2xTcGFuXCIhPT1sJiZsIGluIG4pdHJ5e25bbF09bnVsbD09dT9cIlwiOnU7YnJlYWsgbn1jYXRjaChuKXt9XCJmdW5jdGlvblwiPT10eXBlb2YgdXx8KG51bGw9PXV8fCExPT09dSYmXCItXCIhPT1sWzRdP24ucmVtb3ZlQXR0cmlidXRlKGwpOm4uc2V0QXR0cmlidXRlKGwsdSkpfX1mdW5jdGlvbiBqKG4pe3JldHVybiB0aGlzLmxbbi50eXBlKyExXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZnVuY3Rpb24geihuKXtyZXR1cm4gdGhpcy5sW24udHlwZSshMF0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIEwobix1LGksdCxvLHIsZixlLGMpe3ZhciBzLGEscCx5LGQsXyxnLG0sdyx4LEMsUywkLEEsSCxJPXUudHlwZTtpZih2b2lkIDAhPT11LmNvbnN0cnVjdG9yKXJldHVybiBudWxsO251bGwhPWkuX19oJiYoYz1pLl9faCxlPXUuX19lPWkuX19lLHUuX19oPW51bGwscj1bZV0pLChzPWwuX19iKSYmcyh1KTt0cnl7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBJKXtpZihtPXUucHJvcHMsdz0ocz1JLmNvbnRleHRUeXBlKSYmdFtzLl9fY10seD1zP3c/dy5wcm9wcy52YWx1ZTpzLl9fOnQsaS5fX2M/Zz0oYT11Ll9fYz1pLl9fYykuX189YS5fX0U6KFwicHJvdG90eXBlXCJpbiBJJiZJLnByb3RvdHlwZS5yZW5kZXI/dS5fX2M9YT1uZXcgSShtLHgpOih1Ll9fYz1hPW5ldyBiKG0seCksYS5jb25zdHJ1Y3Rvcj1JLGEucmVuZGVyPUIpLHcmJncuc3ViKGEpLGEucHJvcHM9bSxhLnN0YXRlfHwoYS5zdGF0ZT17fSksYS5jb250ZXh0PXgsYS5fX249dCxwPWEuX19kPSEwLGEuX19oPVtdLGEuX3NiPVtdKSxudWxsPT1hLl9fcyYmKGEuX19zPWEuc3RhdGUpLG51bGwhPUkuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiYoYS5fX3M9PWEuc3RhdGUmJihhLl9fcz1oKHt9LGEuX19zKSksaChhLl9fcyxJLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhtLGEuX19zKSkpLHk9YS5wcm9wcyxkPWEuc3RhdGUsYS5fX3Y9dSxwKW51bGw9PUkuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT1hLmNvbXBvbmVudFdpbGxNb3VudCYmYS5jb21wb25lbnRXaWxsTW91bnQoKSxudWxsIT1hLmNvbXBvbmVudERpZE1vdW50JiZhLl9faC5wdXNoKGEuY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYobnVsbD09SS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm0hPT15JiZudWxsIT1hLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmEuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhtLHgpLCFhLl9fZSYmbnVsbCE9YS5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09YS5zaG91bGRDb21wb25lbnRVcGRhdGUobSxhLl9fcyx4KXx8dS5fX3Y9PT1pLl9fdil7Zm9yKHUuX192IT09aS5fX3YmJihhLnByb3BzPW0sYS5zdGF0ZT1hLl9fcyxhLl9fZD0hMSksYS5fX2U9ITEsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdS5fX2suZm9yRWFjaChmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLEM9MDtDPGEuX3NiLmxlbmd0aDtDKyspYS5fX2gucHVzaChhLl9zYltDXSk7YS5fc2I9W10sYS5fX2gubGVuZ3RoJiZmLnB1c2goYSk7YnJlYWsgbn1udWxsIT1hLmNvbXBvbmVudFdpbGxVcGRhdGUmJmEuY29tcG9uZW50V2lsbFVwZGF0ZShtLGEuX19zLHgpLG51bGwhPWEuY29tcG9uZW50RGlkVXBkYXRlJiZhLl9faC5wdXNoKGZ1bmN0aW9uKCl7YS5jb21wb25lbnREaWRVcGRhdGUoeSxkLF8pfSl9aWYoYS5jb250ZXh0PXgsYS5wcm9wcz1tLGEuX19QPW4sUz1sLl9fciwkPTAsXCJwcm90b3R5cGVcImluIEkmJkkucHJvdG90eXBlLnJlbmRlcil7Zm9yKGEuc3RhdGU9YS5fX3MsYS5fX2Q9ITEsUyYmUyh1KSxzPWEucmVuZGVyKGEucHJvcHMsYS5zdGF0ZSxhLmNvbnRleHQpLEE9MDtBPGEuX3NiLmxlbmd0aDtBKyspYS5fX2gucHVzaChhLl9zYltBXSk7YS5fc2I9W119ZWxzZSBkb3thLl9fZD0hMSxTJiZTKHUpLHM9YS5yZW5kZXIoYS5wcm9wcyxhLnN0YXRlLGEuY29udGV4dCksYS5zdGF0ZT1hLl9fc313aGlsZShhLl9fZCYmKyskPDI1KTthLnN0YXRlPWEuX19zLG51bGwhPWEuZ2V0Q2hpbGRDb250ZXh0JiYodD1oKGgoe30sdCksYS5nZXRDaGlsZENvbnRleHQoKSkpLHB8fG51bGw9PWEuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChfPWEuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxkKSksUChuLHYoSD1udWxsIT1zJiZzLnR5cGU9PT1rJiZudWxsPT1zLmtleT9zLnByb3BzLmNoaWxkcmVuOnMpP0g6W0hdLHUsaSx0LG8scixmLGUsYyksYS5iYXNlPXUuX19lLHUuX19oPW51bGwsYS5fX2gubGVuZ3RoJiZmLnB1c2goYSksZyYmKGEuX19FPWEuX189bnVsbCksYS5fX2U9ITF9ZWxzZSBudWxsPT1yJiZ1Ll9fdj09PWkuX192Pyh1Ll9faz1pLl9fayx1Ll9fZT1pLl9fZSk6dS5fX2U9TihpLl9fZSx1LGksdCxvLHIsZixjKTsocz1sLmRpZmZlZCkmJnModSl9Y2F0Y2gobil7dS5fX3Y9bnVsbCwoY3x8bnVsbCE9cikmJih1Ll9fZT1lLHUuX19oPSEhYyxyW3IuaW5kZXhPZihlKV09bnVsbCksbC5fX2Uobix1LGkpfX1mdW5jdGlvbiBNKG4sdSl7bC5fX2MmJmwuX19jKHUsbiksbi5zb21lKGZ1bmN0aW9uKHUpe3RyeXtuPXUuX19oLHUuX19oPVtdLG4uc29tZShmdW5jdGlvbihuKXtuLmNhbGwodSl9KX1jYXRjaChuKXtsLl9fZShuLHUuX192KX19KX1mdW5jdGlvbiBOKGwsdSxpLHQsbyxyLGYsZSl7dmFyIHMsYSxoLHk9aS5wcm9wcyxkPXUucHJvcHMsXz11LnR5cGUsaz0wO2lmKFwic3ZnXCI9PT1fJiYobz0hMCksbnVsbCE9cilmb3IoO2s8ci5sZW5ndGg7aysrKWlmKChzPXJba10pJiZcInNldEF0dHJpYnV0ZVwiaW4gcz09ISFfJiYoXz9zLmxvY2FsTmFtZT09PV86Mz09PXMubm9kZVR5cGUpKXtsPXMscltrXT1udWxsO2JyZWFrfWlmKG51bGw9PWwpe2lmKG51bGw9PT1fKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkKTtsPW8/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixfKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KF8sZC5pcyYmZCkscj1udWxsLGU9ITF9aWYobnVsbD09PV8peT09PWR8fGUmJmwuZGF0YT09PWR8fChsLmRhdGE9ZCk7ZWxzZXtpZihyPXImJm4uY2FsbChsLmNoaWxkTm9kZXMpLGE9KHk9aS5wcm9wc3x8YykuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsaD1kLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFlKXtpZihudWxsIT1yKWZvcih5PXt9LGs9MDtrPGwuYXR0cmlidXRlcy5sZW5ndGg7aysrKXlbbC5hdHRyaWJ1dGVzW2tdLm5hbWVdPWwuYXR0cmlidXRlc1trXS52YWx1ZTsoaHx8YSkmJihoJiYoYSYmaC5fX2h0bWw9PWEuX19odG1sfHxoLl9faHRtbD09PWwuaW5uZXJIVE1MKXx8KGwuaW5uZXJIVE1MPWgmJmguX19odG1sfHxcIlwiKSl9aWYoSChsLGQseSxvLGUpLGgpdS5fX2s9W107ZWxzZSBpZihQKGwsdihrPXUucHJvcHMuY2hpbGRyZW4pP2s6W2tdLHUsaSx0LG8mJlwiZm9yZWlnbk9iamVjdFwiIT09XyxyLGYscj9yWzBdOmkuX19rJiZnKGksMCksZSksbnVsbCE9cilmb3Ioaz1yLmxlbmd0aDtrLS07KW51bGwhPXJba10mJnAocltrXSk7ZXx8KFwidmFsdWVcImluIGQmJnZvaWQgMCE9PShrPWQudmFsdWUpJiYoayE9PWwudmFsdWV8fFwicHJvZ3Jlc3NcIj09PV8mJiFrfHxcIm9wdGlvblwiPT09XyYmayE9PXkudmFsdWUpJiZUKGwsXCJ2YWx1ZVwiLGsseS52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBkJiZ2b2lkIDAhPT0oaz1kLmNoZWNrZWQpJiZrIT09bC5jaGVja2VkJiZUKGwsXCJjaGVja2VkXCIsayx5LmNoZWNrZWQsITEpKX1yZXR1cm4gbH1mdW5jdGlvbiBPKG4sdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHUpOm4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4saSl9fWZ1bmN0aW9uIHEobix1LGkpe3ZhciB0LG87aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKHQ9bi5yZWYpJiYodC5jdXJyZW50JiZ0LmN1cnJlbnQhPT1uLl9fZXx8Tyh0LG51bGwsdSkpLG51bGwhPSh0PW4uX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKG4pe2wuX19lKG4sdSl9dC5iYXNlPXQuX19QPW51bGwsbi5fX2M9dm9pZCAwfWlmKHQ9bi5fX2spZm9yKG89MDtvPHQubGVuZ3RoO28rKyl0W29dJiZxKHRbb10sdSxpfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBuLnR5cGUpO2l8fG51bGw9PW4uX19lfHxwKG4uX19lKSxuLl9fPW4uX19lPW4uX19kPXZvaWQgMH1mdW5jdGlvbiBCKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIEQodSxpLHQpe3ZhciBvLHIsZjtsLl9fJiZsLl9fKHUsaSkscj0obz1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0KT9udWxsOnQmJnQuX19rfHxpLl9fayxmPVtdLEwoaSx1PSghbyYmdHx8aSkuX19rPXkoayxudWxsLFt1XSkscnx8YyxjLHZvaWQgMCE9PWkub3duZXJTVkdFbGVtZW50LCFvJiZ0P1t0XTpyP251bGw6aS5maXJzdENoaWxkP24uY2FsbChpLmNoaWxkTm9kZXMpOm51bGwsZiwhbyYmdD90OnI/ci5fX2U6aS5maXJzdENoaWxkLG8pLE0oZix1KX1mdW5jdGlvbiBFKG4sbCl7RChuLGwsRSl9ZnVuY3Rpb24gRihsLHUsaSl7dmFyIHQsbyxyLGYsZT1oKHt9LGwucHJvcHMpO2ZvcihyIGluIGwudHlwZSYmbC50eXBlLmRlZmF1bHRQcm9wcyYmKGY9bC50eXBlLmRlZmF1bHRQcm9wcyksdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTplW3JdPXZvaWQgMD09PXVbcl0mJnZvaWQgMCE9PWY/ZltyXTp1W3JdO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjImJihlLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLGQobC50eXBlLGUsdHx8bC5rZXksb3x8bC5yZWYsbnVsbCl9ZnVuY3Rpb24gRyhuLGwpe3ZhciB1PXtfX2M6bD1cIl9fY0NcIitlKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgdSxpO3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9W10sKGk9e30pW2xdPXRoaXMsdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gaX0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5wcm9wcy52YWx1ZSE9PW4udmFsdWUmJnUuc29tZShmdW5jdGlvbihuKXtuLl9fZT0hMCx3KG4pfSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj1zLnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwsdSxpKXtmb3IodmFyIHQsbyxyO2w9bC5fXzspaWYoKHQ9bC5fX2MpJiYhdC5fXyl0cnl7aWYoKG89dC5jb25zdHJ1Y3RvcikmJm51bGwhPW8uZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yJiYodC5zZXRTdGF0ZShvLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSkscj10Ll9fZCksbnVsbCE9dC5jb21wb25lbnREaWRDYXRjaCYmKHQuY29tcG9uZW50RGlkQ2F0Y2gobixpfHx7fSkscj10Ll9fZCkscilyZXR1cm4gdC5fX0U9dH1jYXRjaChsKXtuPWx9dGhyb3cgbn19LHU9MCxpPWZ1bmN0aW9uKG4pe3JldHVybiBudWxsIT1uJiZ2b2lkIDA9PT1uLmNvbnN0cnVjdG9yfSxiLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihuLGwpe3ZhciB1O3U9bnVsbCE9dGhpcy5fX3MmJnRoaXMuX19zIT09dGhpcy5zdGF0ZT90aGlzLl9fczp0aGlzLl9fcz1oKHt9LHRoaXMuc3RhdGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW4oaCh7fSx1KSx0aGlzLnByb3BzKSksbiYmaCh1LG4pLG51bGwhPW4mJnRoaXMuX192JiYobCYmdGhpcy5fc2IucHVzaChsKSx3KHRoaXMpKX0sYi5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5fX3YmJih0aGlzLl9fZT0hMCxuJiZ0aGlzLl9faC5wdXNoKG4pLHcodGhpcykpfSxiLnByb3RvdHlwZS5yZW5kZXI9ayx0PVtdLHI9XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpOnNldFRpbWVvdXQsZj1mdW5jdGlvbihuLGwpe3JldHVybiBuLl9fdi5fX2ItbC5fX3YuX19ifSx4Ll9fcj0wLGU9MDtleHBvcnR7YiBhcyBDb21wb25lbnQsayBhcyBGcmFnbWVudCxGIGFzIGNsb25lRWxlbWVudCxHIGFzIGNyZWF0ZUNvbnRleHQseSBhcyBjcmVhdGVFbGVtZW50LF8gYXMgY3JlYXRlUmVmLHkgYXMgaCxFIGFzIGh5ZHJhdGUsaSBhcyBpc1ZhbGlkRWxlbWVudCxsIGFzIG9wdGlvbnMsRCBhcyByZW5kZXIsUyBhcyB0b0NoaWxkQXJyYXl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImZ1bmN0aW9uIHIoZSl7dmFyIHQsZixuPVwiXCI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlKW4rPWU7ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgZSlpZihBcnJheS5pc0FycmF5KGUpKWZvcih0PTA7dDxlLmxlbmd0aDt0KyspZVt0XSYmKGY9cihlW3RdKSkmJihuJiYobis9XCIgXCIpLG4rPWYpO2Vsc2UgZm9yKHQgaW4gZSllW3RdJiYobiYmKG4rPVwiIFwiKSxuKz10KTtyZXR1cm4gbn1leHBvcnQgZnVuY3Rpb24gY2xzeCgpe2Zvcih2YXIgZSx0LGY9MCxuPVwiXCI7Zjxhcmd1bWVudHMubGVuZ3RoOykoZT1hcmd1bWVudHNbZisrXSkmJih0PXIoZSkpJiYobiYmKG4rPVwiIFwiKSxuKz10KTtyZXR1cm4gbn1leHBvcnQgZGVmYXVsdCBjbHN4OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NpbmdsZXRvblN0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgXG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9lbWJlZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vZW1iZWQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0e29wdGlvbnMgYXMgbn1mcm9tXCJwcmVhY3RcIjt2YXIgdCxyLHUsaSxvPTAsZj1bXSxjPVtdLGU9bi5fX2IsYT1uLl9fcix2PW4uZGlmZmVkLGw9bi5fX2MsbT1uLnVubW91bnQ7ZnVuY3Rpb24gZCh0LHUpe24uX19oJiZuLl9faChyLHQsb3x8dSksbz0wO3ZhciBpPXIuX19IfHwoci5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiB0Pj1pLl9fLmxlbmd0aCYmaS5fXy5wdXNoKHtfX1Y6Y30pLGkuX19bdF19ZnVuY3Rpb24gaChuKXtyZXR1cm4gbz0xLHMoQixuKX1mdW5jdGlvbiBzKG4sdSxpKXt2YXIgbz1kKHQrKywyKTtpZihvLnQ9biwhby5fX2MmJihvLl9fPVtpP2kodSk6Qih2b2lkIDAsdSksZnVuY3Rpb24obil7dmFyIHQ9by5fX04/by5fX05bMF06by5fX1swXSxyPW8udCh0LG4pO3QhPT1yJiYoby5fX049W3Isby5fX1sxXV0sby5fX2Muc2V0U3RhdGUoe30pKX1dLG8uX19jPXIsIXIudSkpe3ZhciBmPWZ1bmN0aW9uKG4sdCxyKXtpZighby5fX2MuX19IKXJldHVybiEwO3ZhciB1PW8uX19jLl9fSC5fXy5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIG4uX19jfSk7aWYodS5ldmVyeShmdW5jdGlvbihuKXtyZXR1cm4hbi5fX059KSlyZXR1cm4hY3x8Yy5jYWxsKHRoaXMsbix0LHIpO3ZhciBpPSExO3JldHVybiB1LmZvckVhY2goZnVuY3Rpb24obil7aWYobi5fX04pe3ZhciB0PW4uX19bMF07bi5fXz1uLl9fTixuLl9fTj12b2lkIDAsdCE9PW4uX19bMF0mJihpPSEwKX19KSwhKCFpJiZvLl9fYy5wcm9wcz09PW4pJiYoIWN8fGMuY2FsbCh0aGlzLG4sdCxyKSl9O3IudT0hMDt2YXIgYz1yLnNob3VsZENvbXBvbmVudFVwZGF0ZSxlPXIuY29tcG9uZW50V2lsbFVwZGF0ZTtyLmNvbXBvbmVudFdpbGxVcGRhdGU9ZnVuY3Rpb24obix0LHIpe2lmKHRoaXMuX19lKXt2YXIgdT1jO2M9dm9pZCAwLGYobix0LHIpLGM9dX1lJiZlLmNhbGwodGhpcyxuLHQscil9LHIuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ9cmV0dXJuIG8uX19OfHxvLl9ffWZ1bmN0aW9uIHAodSxpKXt2YXIgbz1kKHQrKywzKTshbi5fX3MmJnooby5fX0gsaSkmJihvLl9fPXUsby5pPWksci5fX0guX19oLnB1c2gobykpfWZ1bmN0aW9uIHkodSxpKXt2YXIgbz1kKHQrKyw0KTshbi5fX3MmJnooby5fX0gsaSkmJihvLl9fPXUsby5pPWksci5fX2gucHVzaChvKSl9ZnVuY3Rpb24gXyhuKXtyZXR1cm4gbz01LEYoZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpufX0sW10pfWZ1bmN0aW9uIEEobix0LHIpe289Nix5KGZ1bmN0aW9uKCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbj8obih0KCkpLGZ1bmN0aW9uKCl7cmV0dXJuIG4obnVsbCl9KTpuPyhuLmN1cnJlbnQ9dCgpLGZ1bmN0aW9uKCl7cmV0dXJuIG4uY3VycmVudD1udWxsfSk6dm9pZCAwfSxudWxsPT1yP3I6ci5jb25jYXQobikpfWZ1bmN0aW9uIEYobixyKXt2YXIgdT1kKHQrKyw3KTtyZXR1cm4geih1Ll9fSCxyKT8odS5fX1Y9bigpLHUuaT1yLHUuX19oPW4sdS5fX1YpOnUuX199ZnVuY3Rpb24gVChuLHQpe3JldHVybiBvPTgsRihmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiBxKG4pe3ZhciB1PXIuY29udGV4dFtuLl9fY10saT1kKHQrKyw5KTtyZXR1cm4gaS5jPW4sdT8obnVsbD09aS5fXyYmKGkuX189ITAsdS5zdWIocikpLHUucHJvcHMudmFsdWUpOm4uX199ZnVuY3Rpb24geCh0LHIpe24udXNlRGVidWdWYWx1ZSYmbi51c2VEZWJ1Z1ZhbHVlKHI/cih0KTp0KX1mdW5jdGlvbiBQKG4pe3ZhciB1PWQodCsrLDEwKSxpPWgoKTtyZXR1cm4gdS5fXz1uLHIuY29tcG9uZW50RGlkQ2F0Y2h8fChyLmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4sdCl7dS5fXyYmdS5fXyhuLHQpLGlbMV0obil9KSxbaVswXSxmdW5jdGlvbigpe2lbMV0odm9pZCAwKX1dfWZ1bmN0aW9uIFYoKXt2YXIgbj1kKHQrKywxMSk7aWYoIW4uX18pe2Zvcih2YXIgdT1yLl9fdjtudWxsIT09dSYmIXUuX19tJiZudWxsIT09dS5fXzspdT11Ll9fO3ZhciBpPXUuX19tfHwodS5fX209WzAsMF0pO24uX189XCJQXCIraVswXStcIi1cIitpWzFdKyt9cmV0dXJuIG4uX199ZnVuY3Rpb24gYigpe2Zvcih2YXIgdDt0PWYuc2hpZnQoKTspaWYodC5fX1AmJnQuX19IKXRyeXt0Ll9fSC5fX2guZm9yRWFjaChrKSx0Ll9fSC5fX2guZm9yRWFjaCh3KSx0Ll9fSC5fX2g9W119Y2F0Y2gocil7dC5fX0guX19oPVtdLG4uX19lKHIsdC5fX3YpfX1uLl9fYj1mdW5jdGlvbihuKXtyPW51bGwsZSYmZShuKX0sbi5fX3I9ZnVuY3Rpb24obil7YSYmYShuKSx0PTA7dmFyIGk9KHI9bi5fX2MpLl9fSDtpJiYodT09PXI/KGkuX19oPVtdLHIuX19oPVtdLGkuX18uZm9yRWFjaChmdW5jdGlvbihuKXtuLl9fTiYmKG4uX189bi5fX04pLG4uX19WPWMsbi5fX049bi5pPXZvaWQgMH0pKTooaS5fX2guZm9yRWFjaChrKSxpLl9faC5mb3JFYWNoKHcpLGkuX19oPVtdLHQ9MCkpLHU9cn0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7diYmdih0KTt2YXIgbz10Ll9fYztvJiZvLl9fSCYmKG8uX19ILl9faC5sZW5ndGgmJigxIT09Zi5wdXNoKG8pJiZpPT09bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCgoaT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZSl8fGopKGIpKSxvLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe24uaSYmKG4uX19IPW4uaSksbi5fX1YhPT1jJiYobi5fXz1uLl9fViksbi5pPXZvaWQgMCxuLl9fVj1jfSkpLHU9cj1udWxsfSxuLl9fYz1mdW5jdGlvbih0LHIpe3Iuc29tZShmdW5jdGlvbih0KXt0cnl7dC5fX2guZm9yRWFjaChrKSx0Ll9faD10Ll9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fHcobil9KX1jYXRjaCh1KXtyLnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSxyPVtdLG4uX19lKHUsdC5fX3YpfX0pLGwmJmwodCxyKX0sbi51bm1vdW50PWZ1bmN0aW9uKHQpe20mJm0odCk7dmFyIHIsdT10Ll9fYzt1JiZ1Ll9fSCYmKHUuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7dHJ5e2sobil9Y2F0Y2gobil7cj1ufX0pLHUuX19IPXZvaWQgMCxyJiZuLl9fZShyLHUuX192KSl9O3ZhciBnPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiBqKG4pe3ZhciB0LHI9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodSksZyYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodCksc2V0VGltZW91dChuKX0sdT1zZXRUaW1lb3V0KHIsMTAwKTtnJiYodD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocikpfWZ1bmN0aW9uIGsobil7dmFyIHQ9cix1PW4uX19jO1wiZnVuY3Rpb25cIj09dHlwZW9mIHUmJihuLl9fYz12b2lkIDAsdSgpKSxyPXR9ZnVuY3Rpb24gdyhuKXt2YXIgdD1yO24uX19jPW4uX18oKSxyPXR9ZnVuY3Rpb24geihuLHQpe3JldHVybiFufHxuLmxlbmd0aCE9PXQubGVuZ3RofHx0LnNvbWUoZnVuY3Rpb24odCxyKXtyZXR1cm4gdCE9PW5bcl19KX1mdW5jdGlvbiBCKG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9ZXhwb3J0e1QgYXMgdXNlQ2FsbGJhY2sscSBhcyB1c2VDb250ZXh0LHggYXMgdXNlRGVidWdWYWx1ZSxwIGFzIHVzZUVmZmVjdCxQIGFzIHVzZUVycm9yQm91bmRhcnksViBhcyB1c2VJZCxBIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUseSBhcyB1c2VMYXlvdXRFZmZlY3QsRiBhcyB1c2VNZW1vLHMgYXMgdXNlUmVkdWNlcixfIGFzIHVzZVJlZixoIGFzIHVzZVN0YXRlfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCB7IGgsIGNyZWF0ZUNvbnRleHQsIENvbXBvbmVudENoaWxkcmVuIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgV2lkZ2V0Q29uZmlnIH0gZnJvbSBcIi4uL21vZGVscy9tb2RlbHNcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuXG5cbmNvbnN0IENvbmZpZ0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PFdpZGdldENvbmZpZz4oe1xuICBkZWJ1ZzogZmFsc2UsXG4gIG9wZW5lZDogZmFsc2UsXG4gIHNldE9wZW5lZDogKCkgPT4ge30sXG4gIHNpemU6IFwic21hbGxcIlxufSBhcyBXaWRnZXRDb25maWcpO1xuXG5leHBvcnQgY29uc3QgdXNlQ29uZmlnID0gKCkgPT4gdXNlQ29udGV4dChDb25maWdDb250ZXh0KTtcbmV4cG9ydCBjb25zdCBDb25maWdQcm92aWRlciA9ICh7IGNoaWxkcmVufTogeyBjaGlsZHJlbjogQ29tcG9uZW50Q2hpbGRyZW4sfSkgPT4ge1xuICBjb25zdCBbb3BlbmVkLCBfc2V0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBfdmFsdWVzID0ge1xuICAgIGRlYnVnOiBmYWxzZSxcbiAgICBvcGVuZWQsXG4gICAgc2V0T3BlbmVkOiAodmFsdWU6IGJvb2xlYW4pID0+IF9zZXRPcGVuZWQodmFsdWUpLFxuICAgIHNpemU6IFwic21hbGxcIlxuICB9XG5cbiAgcmV0dXJuIDxDb25maWdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtfdmFsdWVzfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvQ29uZmlnQ29udGV4dC5Qcm92aWRlcj5cbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3ByZWFjdC9ob29rcydcblxuZXhwb3J0IGNvbnN0IHVzZUVtYmVkID0gKG9wZW5lZDogYm9vbGVhbikgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHdpbiA9IHdpbmRvdyBhcyBhbnlcbiAgICBpZighd2luLkRvY3Epe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEb2NxIGlzIG5vdCBkZWZpbmVkJylcbiAgICB9XG4gIH0sIFtdKVxuXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghb3BlbmVkKSByZXR1cm5cbiAgICBjb25zdCB3aW4gPSB3aW5kb3cgYXMgYW55XG4gICAgaWYoIXdpbi5Eb2NxKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRG9jcSBpcyBub3QgZGVmaW5lZCcpXG4gICAgfVxuICAgIGNvbnN0IGRhdGFDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9jcS1kYXRhLWNvbnRhaW5lcicpIGFzIEhUTUxFbGVtZW50XG4gICAgZGF0YUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIGNvbnN0IGZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJylcbiAgICBmcmFtZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAke3dpbi5Eb2NxfS93aWRnZXQ/ZW1iZWRkZWQ9dHJ1ZWApXG4gICAgZnJhbWUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdib3JkZXI6IG5vbmU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7JylcbiAgICBkYXRhQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgZGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFtZSlcbiAgfSwgW29wZW5lZF0pXG59XG4iLCJpbXBvcnQgeyBoLCBGcmFnbWVudCB9IGZyb20gXCJwcmVhY3RcIlxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIlxuaW1wb3J0IHN0eWxlIGZyb20gXCIuL2VtYmVkLmNzc1wiXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tIFwiLi4vY29udGV4dC9jb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VFbWJlZCB9IGZyb20gXCIuLi91dGlscy91c2VlbWJlZFwiO1xuXG4vKipcbiAqIEVtYmVkIHRpdGxlXG4gKiBAcmV0dXJucyBKU1guRWxlbWVudFxuICovXG5jb25zdCBUaXRsZSA9ICgpID0+XG4gIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHN0eWxlWydlbWJlZC10aXRsZSddKX0+XG4gICAgPHA+RG9jcSBQdWJsaWMgQ2hhdDwvcD5cbiAgPC9kaXY+XG5cbi8qKlxuICogRW1iZWQgY2xvc2UgYnV0dG9uXG4gKiBAcmV0dXJucyBKU1guRWxlbWVudFxuICovXG5jb25zdCBDbG9zZUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgeyBzZXRPcGVuZWQgfSA9IHVzZUNvbmZpZygpO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goc3R5bGVbJ2Nsb3NlLWJ1dHRvbi1jb250YWluZXInXSl9PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xzeChzdHlsZVsnY2xvc2UtYnV0dG9uJ10pfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5lZChmYWxzZSl9XG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgJnRpbWVzO1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cblxuLyoqXG4gKiBFbWJlZCBjb250YWluZXIsIFVzZWQgdG8gcmVuZGVyIHRoZSBpZnJhbWVcbiAqIEByZXR1cm5zIEpTWC5FbGVtZW50XG4gKi9cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgb3BlbmVkIH0gPSB1c2VDb25maWcoKTtcblxuICB1c2VFbWJlZChvcGVuZWQpO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge29wZW5lZCAmJlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzdHlsZVsnZW1iZWQtY29udGFpbmVyJ10pfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzdHlsZVsnZW1iZWQtaGVhZGVyJ10pfT5cbiAgICAgICAgICAgIDxUaXRsZSAvPlxuICAgICAgICAgICAgPENsb3NlQnV0dG9uIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD1cImRvY3EtZGF0YS1jb250YWluZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KHN0eWxlWydlbWJlZC1ib2R5J10pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENvbm5lY3RpbmcgdG8gRG9jcS4uLlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NpbmdsZXRvblN0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgXG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9pY29uLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi9pY29uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IGgsIEZyYWdtZW50IH0gZnJvbSBcInByZWFjdFwiXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vaWNvbi5jc3NcIlxuaW1wb3J0IGljb24gZnJvbSBcIi4uL3N0YXRpYy9pY29uLnN2Z1wiXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tIFwiLi4vY29udGV4dC9jb250ZXh0XCI7XG5cbi8vIGNvbnN0IGljb24gPSBpbXBvcnQoXCIuL2ljb24uc3ZnXCIpXG5cblxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VJY29uID0gKCkgPT4ge1xuICBjb25zdCB7IHNldE9wZW5lZCwgb3BlbmVkIH0gPSB1c2VDb25maWcoKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudCA+XG4gICAgICB7IW9wZW5lZCAmJlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzdHlsZVsnd2lkZ2V0LWljb24nXSl9IG9uQ2xpY2s9eygpID0+IHNldE9wZW5lZCh0cnVlKX0+XG4gICAgICAgICAgPGltZyBzcmM9e2ljb259IGFsdD1cImRvY3Egd2lkZ2V0IGljb25cIiB3aWR0aD1cIjQ1cHhcIiBoZWlnaHQ9XCI0NXB4XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuIiwiZXhwb3J0ICogZnJvbSBcIi4vZW1iZWRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2ljb25cIjtcbiIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIE1lc3NhZ2VJY29uIH0gZnJvbSBcIi4vY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgQ29uZmlnUHJvdmlkZXIgfSBmcm9tIFwiLi9jb250ZXh0L2NvbnRleHRcIjtcblxuXG5cbmV4cG9ydCBjb25zdCBXaWRnZXQgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29uZmlnUHJvdmlkZXI+XG4gICAgICA8Q29udGFpbmVyIC8+XG4gICAgICA8TWVzc2FnZUljb24gLz5cbiAgICA8L0NvbmZpZ1Byb3ZpZGVyPlxuICApXG59XG4iLCJpbXBvcnQge2gsIHJlbmRlcn0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvY3Etd2lkZ2V0JykgYXMgSFRNTEVsZW1lbnQ7XG5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5yZW5kZXIoPFdpZGdldC8+LCBjb250YWluZXIpO1xuIl0sIm5hbWVzIjpbImgiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQ29uZmlnQ29udGV4dCIsImRlYnVnIiwib3BlbmVkIiwic2V0T3BlbmVkIiwic2l6ZSIsInVzZUNvbmZpZyIsIkNvbmZpZ1Byb3ZpZGVyIiwiX3JlZiIsImNoaWxkcmVuIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiX3NldE9wZW5lZCIsIl92YWx1ZXMiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwidXNlRWZmZWN0IiwidXNlRW1iZWQiLCJ3aW4iLCJ3aW5kb3ciLCJEb2NxIiwiRXJyb3IiLCJkYXRhQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImZyYW1lIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNvbmNhdCIsImFwcGVuZENoaWxkIiwiRnJhZ21lbnQiLCJjbHN4Iiwic3R5bGUiLCJUaXRsZSIsImNsYXNzTmFtZSIsIkNsb3NlQnV0dG9uIiwiX3VzZUNvbmZpZyIsIm9uQ2xpY2siLCJDb250YWluZXIiLCJfdXNlQ29uZmlnMiIsImlkIiwiaWNvbiIsIk1lc3NhZ2VJY29uIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJXaWRnZXQiLCJyZW5kZXIiLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9