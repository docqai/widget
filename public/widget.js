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

/***/ 6793:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var at = __webpack_require__(4496)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
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

/***/ 8082:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(8269);
var redefine = __webpack_require__(7234);
var hide = __webpack_require__(7728);
var fails = __webpack_require__(4253);
var defined = __webpack_require__(1355);
var wks = __webpack_require__(6314);
var regexpExec = __webpack_require__(1165);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ 3218:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(7007);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
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

/***/ 5364:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(5286);
var cof = __webpack_require__(2032);
var MATCH = __webpack_require__(6314)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
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

/***/ 7787:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var classof = __webpack_require__(1488);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ 1165:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexpFlags = __webpack_require__(3218);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


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

/***/ 8364:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(7007);
var aFunction = __webpack_require__(4963);
var SPECIES = __webpack_require__(6314)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


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

/***/ 8269:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var regexpExec = __webpack_require__(1165);
__webpack_require__(2985)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ 1876:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isRegExp = __webpack_require__(5364);
var anObject = __webpack_require__(7007);
var speciesConstructor = __webpack_require__(8364);
var advanceStringIndex = __webpack_require__(6793);
var toLength = __webpack_require__(875);
var callRegExpExec = __webpack_require__(7787);
var regexpExec = __webpack_require__(1165);
var fails = __webpack_require__(4253);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(8082)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


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
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__(1876);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/native.js
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const esm_browser_native = ({
  randomUUID
});
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const esm_browser_stringify = ((/* unused pure expression or super */ null && (stringify)));
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v4.js




function v4(options, buf, offset) {
  if (esm_browser_native.randomUUID && !buf && !options) {
    return esm_browser_native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

/* harmony default export */ const esm_browser_v4 = (v4);
;// CONCATENATED MODULE: ./src/utils/session.tsx



/**
 * Set cookie for the embeddable chat session
 * @param name cookie name
 * @param value Cookie value
 * @param days Duration in days
 */
var setCookie = function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

/**
 * Retrieve cookie value
 * @param name Cookie name
 * @returns Cookie value or null
 */
var getCookie = function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};
var Session = function Session() {
  var key = "__sessionId__docq_embed";
  var id = getCookie(key);
  if (!id) {
    id = esm_browser_v4();
    setCookie(key, id, 1);
  } else {
    setCookie(key, id, 1);
  }
  return id;
};
;// CONCATENATED MODULE: ./src/utils/useembed.ts









function useembed_slicedToArray(arr, i) { return useembed_arrayWithHoles(arr) || useembed_iterableToArrayLimit(arr, i) || useembed_unsupportedIterableToArray(arr, i) || useembed_nonIterableRest(); }
function useembed_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function useembed_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return useembed_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return useembed_arrayLikeToArray(o, minLen); }
function useembed_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function useembed_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function useembed_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/**
 * A custom hook that embeds the chat widget into the web page.
 * @param opened Chat widget opened state.
 */
var useEmbed = function useEmbed(opened) {
  hooks_module_p(function () {
    if (!opened) return;
    var win = window;
    var __curretScript = document.currentScript;
    if (!__curretScript) {
      var scripts = document.getElementsByTagName('script');
      __curretScript = scripts[scripts.length - 1];
    }
    var dataUrl = __curretScript.getAttribute('docq-host-url');
    var docqConfig = __curretScript.getAttribute('docq-config');
    var __session_id = Session();
    var __URL = dataUrl;
    if (!__URL && !win.__Docq) {
      throw new Error('Docq: host url is not defined');
    }
    if (!__URL) __URL = win.__Docq;
    var __SID = docqConfig ? docqConfig : !!win.__DocqSID ? win.__DocqSID : '1000:1';
    var dataContainer = document.getElementById('docq-data-container');
    dataContainer.innerHTML = '';
    var frame = document.createElement('iframe');
    var _SID$split = __SID.split(':'),
      _SID$split2 = useembed_slicedToArray(_SID$split, 2),
      param1 = _SID$split2[0],
      param2 = _SID$split2[1];
    frame.setAttribute('src', "".concat(__URL, "/widget?embedded=true&session_id=").concat(__session_id, "&param1=").concat(param1, "&param2=").concat(param2));
    frame.setAttribute('style', 'border: none; width: 100%; height: 100%;');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtJQUFLK0UsU0FBUyxFQUFFSCxNQUFJLENBQUNDLGVBQUssQ0FBQyxhQUFhLENBQUMsQ0FBRTtJQUFDSyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU0zRSxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQUE7RUFBQyxHQUN6RVAsQ0FBQTtJQUFLdUYsR0FBRyxFQUFFRixnQkFBSztJQUFDRyxHQUFHLEVBQUMsa0JBQWtCO0lBQUNDLEtBQUssRUFBQyxNQUFNO0lBQUNDLE1BQU0sRUFBQztFQUFNLENBQUUsQ0FDaEUsQ0FFQyxDQUFDO0FBRWYsQ0FBQzs7QUNuQnVCOzs7QUNBRztBQUMyQjtBQUNIO0FBSTVDLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFNQSxDQUFBLEVBQVM7RUFFMUIsT0FDRTNGLENBQUEsQ0FBQ1UsY0FBYyxRQUNiVixDQUFBLENBQUNtRixTQUFTLE1BQUUsQ0FBQyxFQUNibkYsQ0FBQSxDQUFDc0YsV0FBVyxNQUFFLENBQ0EsQ0FBQztBQUVyQixDQUFDOztBQ2RnQztBQUNDO0FBRWxDLElBQU1PLFNBQVMsR0FBRzlELFFBQVEsQ0FBQ2lDLGNBQWMsQ0FBQyxhQUFhLENBQWdCO0FBQ3ZFNkIsU0FBUyxDQUFDNUIsU0FBUyxHQUFHLEVBQUU7QUFDeEIyQixDQUFNLENBQUM1RixDQUFBLENBQUMyRixNQUFNLE1BQUMsQ0FBQyxFQUFFRSxTQUFTLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkdmFuY2Utc3RyaW5nLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19maXgtcmUtd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Z1bmN0aW9uLXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVnZXhwLWV4ZWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5leGVjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbWJlZC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWNvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NpbmdsZXRvblN0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaWNvbi5zdmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW1iZWQuY3NzPzMwODYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9kaXN0L2hvb2tzLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9jb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9zZXNzaW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXNlZW1iZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW1iZWQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ljb24uY3NzPzVmMmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dpZGdldC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuL193a3MnKSgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuaWYgKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbiAvLyBgQWR2YW5jZVN0cmluZ0luZGV4YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFkdmFuY2VzdHJpbmdpbmRleFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUywgaW5kZXgsIHVuaWNvZGUpIHtcbiAgcmV0dXJuIGluZGV4ICsgKHVuaWNvZGUgPyBhdChTLCBpbmRleCkubGVuZ3RoIDogMSk7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi42LjEyJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGluZGV4LCB2YWx1ZSkge1xuICBpZiAoaW5kZXggaW4gb2JqZWN0KSAkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnLi9lczYucmVnZXhwLmV4ZWMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMnKTtcblxudmFyIFNQRUNJRVMgPSB3a3MoJ3NwZWNpZXMnKTtcblxudmFyIFJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gI3JlcGxhY2UgbmVlZHMgYnVpbHQtaW4gc3VwcG9ydCBmb3IgbmFtZWQgZ3JvdXBzLlxuICAvLyAjbWF0Y2ggd29ya3MgZmluZSBiZWNhdXNlIGl0IGp1c3QgcmV0dXJuIHRoZSBleGVjIHJlc3VsdHMsIGV2ZW4gaWYgaXQgaGFzXG4gIC8vIGEgXCJncm9wc1wiIHByb3BlcnR5LlxuICB2YXIgcmUgPSAvLi87XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHJlc3VsdC5ncm91cHMgPSB7IGE6ICc3JyB9O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHJldHVybiAnJy5yZXBsYWNlKHJlLCAnJDxhPicpICE9PSAnNyc7XG59KTtcblxudmFyIFNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQyA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIENocm9tZSA1MSBoYXMgYSBidWdneSBcInNwbGl0XCIgaW1wbGVtZW50YXRpb24gd2hlbiBSZWdFeHAjZXhlYyAhPT0gbmF0aXZlRXhlY1xuICB2YXIgcmUgPSAvKD86KS87XG4gIHZhciBvcmlnaW5hbEV4ZWMgPSByZS5leGVjO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb3JpZ2luYWxFeGVjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIHZhciByZXN1bHQgPSAnYWInLnNwbGl0KHJlKTtcbiAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPT09IDIgJiYgcmVzdWx0WzBdID09PSAnYScgJiYgcmVzdWx0WzFdID09PSAnYic7XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGxlbmd0aCwgZXhlYykge1xuICB2YXIgU1lNQk9MID0gd2tzKEtFWSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19TWU1CT0wgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN0cmluZyBtZXRob2RzIGNhbGwgc3ltYm9sLW5hbWVkIFJlZ0VwIG1ldGhvZHNcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19FWEVDID0gREVMRUdBVEVTX1RPX1NZTUJPTCA/ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3ltYm9sLW5hbWVkIFJlZ0V4cCBtZXRob2RzIGNhbGwgLmV4ZWNcbiAgICB2YXIgZXhlY0NhbGxlZCA9IGZhbHNlO1xuICAgIHZhciByZSA9IC9hLztcbiAgICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyBleGVjQ2FsbGVkID0gdHJ1ZTsgcmV0dXJuIG51bGw7IH07XG4gICAgaWYgKEtFWSA9PT0gJ3NwbGl0Jykge1xuICAgICAgLy8gUmVnRXhwW0BAc3BsaXRdIGRvZXNuJ3QgY2FsbCB0aGUgcmVnZXgncyBleGVjIG1ldGhvZCwgYnV0IGZpcnN0IGNyZWF0ZXNcbiAgICAgIC8vIGEgbmV3IG9uZS4gV2UgbmVlZCB0byByZXR1cm4gdGhlIHBhdGNoZWQgcmVnZXggd2hlbiBjcmVhdGluZyB0aGUgbmV3IG9uZS5cbiAgICAgIHJlLmNvbnN0cnVjdG9yID0ge307XG4gICAgICByZS5jb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlOyB9O1xuICAgIH1cbiAgICByZVtTWU1CT0xdKCcnKTtcbiAgICByZXR1cm4gIWV4ZWNDYWxsZWQ7XG4gIH0pIDogdW5kZWZpbmVkO1xuXG4gIGlmIChcbiAgICAhREVMRUdBVEVTX1RPX1NZTUJPTCB8fFxuICAgICFERUxFR0FURVNfVE9fRVhFQyB8fFxuICAgIChLRVkgPT09ICdyZXBsYWNlJyAmJiAhUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMpIHx8XG4gICAgKEtFWSA9PT0gJ3NwbGl0JyAmJiAhU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDKVxuICApIHtcbiAgICB2YXIgbmF0aXZlUmVnRXhwTWV0aG9kID0gLy4vW1NZTUJPTF07XG4gICAgdmFyIGZucyA9IGV4ZWMoXG4gICAgICBkZWZpbmVkLFxuICAgICAgU1lNQk9MLFxuICAgICAgJydbS0VZXSxcbiAgICAgIGZ1bmN0aW9uIG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVNZXRob2QsIHJlZ2V4cCwgc3RyLCBhcmcyLCBmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICBpZiAocmVnZXhwLmV4ZWMgPT09IHJlZ2V4cEV4ZWMpIHtcbiAgICAgICAgICBpZiAoREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgICAgIC8vIFRoZSBuYXRpdmUgU3RyaW5nIG1ldGhvZCBhbHJlYWR5IGRlbGVnYXRlcyB0byBAQG1ldGhvZCAodGhpc1xuICAgICAgICAgICAgLy8gcG9seWZpbGxlZCBmdW5jdGlvbiksIGxlYXNpbmcgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICAgICAgICAgICAgLy8gV2UgYXZvaWQgaXQgYnkgZGlyZWN0bHkgY2FsbGluZyB0aGUgbmF0aXZlIEBAbWV0aG9kIG1ldGhvZC5cbiAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVSZWdFeHBNZXRob2QuY2FsbChyZWdleHAsIHN0ciwgYXJnMikgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZU1ldGhvZC5jYWxsKHN0ciwgcmVnZXhwLCBhcmcyKSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlIH07XG4gICAgICB9XG4gICAgKTtcbiAgICB2YXIgc3RyZm4gPSBmbnNbMF07XG4gICAgdmFyIHJ4Zm4gPSBmbnNbMV07XG5cbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmZuKTtcbiAgICBoaWRlKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uIChzdHJpbmcsIGFyZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuICAgICAgLy8gMjEuMi41LjYgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXShzdHJpbmcpXG4gICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG4gICAgICA6IGZ1bmN0aW9uIChzdHJpbmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMpOyB9XG4gICAgKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdGhhdCA9IGFuT2JqZWN0KHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICh0aGF0Lmdsb2JhbCkgcmVzdWx0ICs9ICdnJztcbiAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgaWYgKHRoYXQubXVsdGlsaW5lKSByZXN1bHQgKz0gJ20nO1xuICBpZiAodGhhdC51bmljb2RlKSByZXN1bHQgKz0gJ3UnO1xuICBpZiAodGhhdC5zdGlja3kpIHJlc3VsdCArPSAneSc7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnbmF0aXZlLWZ1bmN0aW9uLXRvLXN0cmluZycsIEZ1bmN0aW9uLnRvU3RyaW5nKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyICR0b1N0cmluZyA9IHJlcXVpcmUoJy4vX2Z1bmN0aW9uLXRvLXN0cmluZycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgYnVpbHRpbkV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG5cbiAvLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gIHZhciBleGVjID0gUi5leGVjO1xuICBpZiAodHlwZW9mIGV4ZWMgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgcmVzdWx0ID0gZXhlYy5jYWxsKFIsIFMpO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwIGV4ZWMgbWV0aG9kIHJldHVybmVkIHNvbWV0aGluZyBvdGhlciB0aGFuIGFuIE9iamVjdCBvciBudWxsJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKGNsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlcicpO1xuICB9XG4gIHJldHVybiBidWlsdGluRXhlYy5jYWxsKFIsIFMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi9fZmxhZ3MnKTtcblxudmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4vLyBUaGlzIGFsd2F5cyByZWZlcnMgdG8gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgYmVjYXVzZSB0aGVcbi8vIFN0cmluZyNyZXBsYWNlIHBvbHlmaWxsIHVzZXMgLi9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzLFxuLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxudmFyIG5hdGl2ZVJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbnZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG5cbnZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG5cbnZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUxID0gL2EvLFxuICAgICAgcmUyID0gL2IqL2c7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTEsICdhJyk7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gIHJldHVybiByZTFbTEFTVF9JTkRFWF0gIT09IDAgfHwgcmUyW0xBU1RfSU5ERVhdICE9PSAwO1xufSkoKTtcblxuLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxudmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxudmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQ7XG5cbmlmIChQQVRDSCkge1xuICBwYXRjaGVkRXhlYyA9IGZ1bmN0aW9uIGV4ZWMoc3RyKSB7XG4gICAgdmFyIHJlID0gdGhpcztcbiAgICB2YXIgbGFzdEluZGV4LCByZUNvcHksIG1hdGNoLCBpO1xuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgcmUuc291cmNlICsgJyQoPyFcXFxccyknLCByZWdleHBGbGFncy5jYWxsKHJlKSk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlW0xBU1RfSU5ERVhdO1xuXG4gICAgbWF0Y2ggPSBuYXRpdmVFeGVjLmNhbGwocmUsIHN0cik7XG5cbiAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZVtMQVNUX0lOREVYXSA9IHJlLmdsb2JhbCA/IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIDogbGFzdEluZGV4O1xuICAgIH1cbiAgICBpZiAoTlBDR19JTkNMVURFRCAmJiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYFxuICAgICAgLy8gZm9yIE5QQ0csIGxpa2UgSUU4LiBOT1RFOiBUaGlzIGRvZXNuJyB3b3JrIGZvciAvKC4/KT8vXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgICBuYXRpdmVSZXBsYWNlLmNhbGwobWF0Y2hbMF0sIHJlQ29weSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaGVkRXhlYztcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMjAgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oTyk7XG4gICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZiAobWFwcGluZykgbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgYXJyYXlTbGljZSA9IFtdLnNsaWNlO1xuXG4vLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3MgYW5kIERPTSBvYmplY3RzXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICBpZiAoaHRtbCkgYXJyYXlTbGljZS5jYWxsKGh0bWwpO1xufSksICdBcnJheScsIHtcbiAgc2xpY2U6IGZ1bmN0aW9uIHNsaWNlKGJlZ2luLCBlbmQpIHtcbiAgICB2YXIgbGVuID0gdG9MZW5ndGgodGhpcy5sZW5ndGgpO1xuICAgIHZhciBrbGFzcyA9IGNvZih0aGlzKTtcbiAgICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IGVuZDtcbiAgICBpZiAoa2xhc3MgPT0gJ0FycmF5JykgcmV0dXJuIGFycmF5U2xpY2UuY2FsbCh0aGlzLCBiZWdpbiwgZW5kKTtcbiAgICB2YXIgc3RhcnQgPSB0b0Fic29sdXRlSW5kZXgoYmVnaW4sIGxlbik7XG4gICAgdmFyIHVwVG8gPSB0b0Fic29sdXRlSW5kZXgoZW5kLCBsZW4pO1xuICAgIHZhciBzaXplID0gdG9MZW5ndGgodXBUbyAtIHN0YXJ0KTtcbiAgICB2YXIgY2xvbmVkID0gbmV3IEFycmF5KHNpemUpO1xuICAgIHZhciBpID0gMDtcbiAgICBmb3IgKDsgaSA8IHNpemU7IGkrKykgY2xvbmVkW2ldID0ga2xhc3MgPT0gJ1N0cmluZydcbiAgICAgID8gdGhpcy5jaGFyQXQoc3RhcnQgKyBpKVxuICAgICAgOiB0aGlzW3N0YXJ0ICsgaV07XG4gICAgcmV0dXJuIGNsb25lZDtcbiAgfVxufSk7XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIEZQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gMTkuMi40LjIgbmFtZVxuTkFNRSBpbiBGUHJvdG8gfHwgcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiBkUChGUHJvdG8sIE5BTUUsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuICgnJyArIHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIHRlc3QgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYgKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYycpO1xucmVxdWlyZSgnLi9fZXhwb3J0Jykoe1xuICB0YXJnZXQ6ICdSZWdFeHAnLFxuICBwcm90bzogdHJ1ZSxcbiAgZm9yY2VkOiByZWdleHBFeGVjICE9PSAvLi8uZXhlY1xufSwge1xuICBleGVjOiByZWdleHBFeGVjXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi9fYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNhbGxSZWdFeHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgJG1pbiA9IE1hdGgubWluO1xudmFyICRwdXNoID0gW10ucHVzaDtcbnZhciAkU1BMSVQgPSAnc3BsaXQnO1xudmFyIExFTkdUSCA9ICdsZW5ndGgnO1xudmFyIExBU1RfSU5ERVggPSAnbGFzdEluZGV4JztcbnZhciBNQVhfVUlOVDMyID0gMHhmZmZmZmZmZjtcblxuLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCd4JywgJ3knKSAtPiAveC95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3JcbnZhciBTVVBQT1JUU19ZID0gIWZhaWxzKGZ1bmN0aW9uICgpIHsgUmVnRXhwKE1BWF9VSU5UMzIsICd5Jyk7IH0pO1xuXG4vLyBAQHNwbGl0IGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ3NwbGl0JywgMiwgZnVuY3Rpb24gKGRlZmluZWQsIFNQTElULCAkc3BsaXQsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICB2YXIgaW50ZXJuYWxTcGxpdDtcbiAgaWYgKFxuICAgICdhYmJjJ1skU1BMSVRdKC8oYikqLylbMV0gPT0gJ2MnIHx8XG4gICAgJ3Rlc3QnWyRTUExJVF0oLyg/OikvLCAtMSlbTEVOR1RIXSAhPSA0IHx8XG4gICAgJ2FiJ1skU1BMSVRdKC8oPzphYikqLylbTEVOR1RIXSAhPSAyIHx8XG4gICAgJy4nWyRTUExJVF0oLyguPykoLj8pLylbTEVOR1RIXSAhPSA0IHx8XG4gICAgJy4nWyRTUExJVF0oLygpKCkvKVtMRU5HVEhdID4gMSB8fFxuICAgICcnWyRTUExJVF0oLy4/LylbTEVOR1RIXVxuICApIHtcbiAgICAvLyBiYXNlZCBvbiBlczUtc2hpbSBpbXBsZW1lbnRhdGlvbiwgbmVlZCB0byByZXdvcmsgaXRcbiAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgICBpZiAoc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDApIHJldHVybiBbXTtcbiAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG4gICAgICBpZiAoIWlzUmVnRXhwKHNlcGFyYXRvcikpIHJldHVybiAkc3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcbiAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBzcGxpdExpbWl0ID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgdmFyIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGg7XG4gICAgICB3aGlsZSAobWF0Y2ggPSByZWdleHBFeGVjLmNhbGwoc2VwYXJhdG9yQ29weSwgc3RyaW5nKSkge1xuICAgICAgICBsYXN0SW5kZXggPSBzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdO1xuICAgICAgICBpZiAobGFzdEluZGV4ID4gbGFzdExhc3RJbmRleCkge1xuICAgICAgICAgIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICAgIGlmIChtYXRjaFtMRU5HVEhdID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0cmluZ1tMRU5HVEhdKSAkcHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF1bTEVOR1RIXTtcbiAgICAgICAgICBsYXN0TGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICAgIGlmIChvdXRwdXRbTEVOR1RIXSA+PSBzcGxpdExpbWl0KSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSA9PT0gbWF0Y2guaW5kZXgpIHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0rKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgfVxuICAgICAgaWYgKGxhc3RMYXN0SW5kZXggPT09IHN0cmluZ1tMRU5HVEhdKSB7XG4gICAgICAgIGlmIChsYXN0TGVuZ3RoIHx8ICFzZXBhcmF0b3JDb3B5LnRlc3QoJycpKSBvdXRwdXQucHVzaCgnJyk7XG4gICAgICB9IGVsc2Ugb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgpKTtcbiAgICAgIHJldHVybiBvdXRwdXRbTEVOR1RIXSA+IHNwbGl0TGltaXQgPyBvdXRwdXQuc2xpY2UoMCwgc3BsaXRMaW1pdCkgOiBvdXRwdXQ7XG4gICAgfTtcbiAgLy8gQ2hha3JhLCBWOFxuICB9IGVsc2UgaWYgKCcwJ1skU1BMSVRdKHVuZGVmaW5lZCwgMClbTEVOR1RIXSkge1xuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiAkc3BsaXQuY2FsbCh0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGludGVybmFsU3BsaXQgPSAkc3BsaXQ7XG4gIH1cblxuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNwbGl0YCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNwbGl0XG4gICAgZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgdmFyIHNwbGl0dGVyID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XG4gICAgICByZXR1cm4gc3BsaXR0ZXIgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHNwbGl0dGVyLmNhbGwoc2VwYXJhdG9yLCBPLCBsaW1pdClcbiAgICAgICAgOiBpbnRlcm5hbFNwbGl0LmNhbGwoU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc3BsaXRcbiAgICAvL1xuICAgIC8vIE5PVEU6IFRoaXMgY2Fubm90IGJlIHByb3Blcmx5IHBvbHlmaWxsZWQgaW4gZW5naW5lcyB0aGF0IGRvbid0IHN1cHBvcnRcbiAgICAvLyB0aGUgJ3knIGZsYWcuXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCwgbGltaXQpIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoaW50ZXJuYWxTcGxpdCwgcmVnZXhwLCB0aGlzLCBsaW1pdCwgaW50ZXJuYWxTcGxpdCAhPT0gJHNwbGl0KTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgICAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IocngsIFJlZ0V4cCk7XG5cbiAgICAgIHZhciB1bmljb2RlTWF0Y2hpbmcgPSByeC51bmljb2RlO1xuICAgICAgdmFyIGZsYWdzID0gKHJ4Lmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJ4Lm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocngudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoU1VQUE9SVFNfWSA/ICd5JyA6ICdnJyk7XG5cbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBTIHNsaWNpbmcsIHRvXG4gICAgICAvLyBzaW11bGF0ZSB0aGUgJ3knIGZsYWcuXG4gICAgICB2YXIgc3BsaXR0ZXIgPSBuZXcgQyhTVVBQT1JUU19ZID8gcnggOiAnXig/OicgKyByeC5zb3VyY2UgKyAnKScsIGZsYWdzKTtcbiAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgaWYgKFMubGVuZ3RoID09PSAwKSByZXR1cm4gY2FsbFJlZ0V4cEV4ZWMoc3BsaXR0ZXIsIFMpID09PSBudWxsID8gW1NdIDogW107XG4gICAgICB2YXIgcCA9IDA7XG4gICAgICB2YXIgcSA9IDA7XG4gICAgICB2YXIgQSA9IFtdO1xuICAgICAgd2hpbGUgKHEgPCBTLmxlbmd0aCkge1xuICAgICAgICBzcGxpdHRlci5sYXN0SW5kZXggPSBTVVBQT1JUU19ZID8gcSA6IDA7XG4gICAgICAgIHZhciB6ID0gY2FsbFJlZ0V4cEV4ZWMoc3BsaXR0ZXIsIFNVUFBPUlRTX1kgPyBTIDogUy5zbGljZShxKSk7XG4gICAgICAgIHZhciBlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgeiA9PT0gbnVsbCB8fFxuICAgICAgICAgIChlID0gJG1pbih0b0xlbmd0aChzcGxpdHRlci5sYXN0SW5kZXggKyAoU1VQUE9SVFNfWSA/IDAgOiBxKSksIFMubGVuZ3RoKSkgPT09IHBcbiAgICAgICAgKSB7XG4gICAgICAgICAgcSA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCBxLCB1bmljb2RlTWF0Y2hpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEEucHVzaChTLnNsaWNlKHAsIHEpKTtcbiAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gei5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIEEucHVzaCh6W2ldKTtcbiAgICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcSA9IHAgPSBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBBLnB1c2goUy5zbGljZShwKSk7XG4gICAgICByZXR1cm4gQTtcbiAgICB9XG4gIF07XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkR09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJyAmJiAhISRHT1BTLmY7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gICRHT1BTLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIENocm9tZSAzOCBhbmQgMzkgYE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNgIGZhaWxzIG9uIHByaW1pdGl2ZXNcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTM0NDNcbnZhciBGQUlMU19PTl9QUklNSVRJVkVTID0gJGZhaWxzKGZ1bmN0aW9uICgpIHsgJEdPUFMuZigxKTsgfSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogRkFJTFNfT05fUFJJTUlUSVZFUywgJ09iamVjdCcsIHtcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgICByZXR1cm4gJEdPUFMuZih0b09iamVjdChpdCkpO1xuICB9XG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG4iLCJ2YXIgJGl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgSVRFUkFUT1IgPSB3a3MoJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEl0ZXJhdG9ycy5BcnJheTtcblxudmFyIERPTUl0ZXJhYmxlcyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiBmYWxzZSxcbiAgQ1NTVmFsdWVMaXN0OiBmYWxzZSxcbiAgQ2xpZW50UmVjdExpc3Q6IGZhbHNlLFxuICBET01SZWN0TGlzdDogZmFsc2UsXG4gIERPTVN0cmluZ0xpc3Q6IGZhbHNlLFxuICBET01Ub2tlbkxpc3Q6IHRydWUsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiBmYWxzZSxcbiAgRmlsZUxpc3Q6IGZhbHNlLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTEZvcm1FbGVtZW50OiBmYWxzZSxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IGZhbHNlLFxuICBNZWRpYUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBNaW1lVHlwZUFycmF5OiBmYWxzZSxcbiAgTmFtZWROb2RlTWFwOiBmYWxzZSxcbiAgTm9kZUxpc3Q6IHRydWUsXG4gIFBhaW50UmVxdWVzdExpc3Q6IGZhbHNlLFxuICBQbHVnaW46IGZhbHNlLFxuICBQbHVnaW5BcnJheTogZmFsc2UsXG4gIFNWR0xlbmd0aExpc3Q6IGZhbHNlLFxuICBTVkdOdW1iZXJMaXN0OiBmYWxzZSxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IGZhbHNlLFxuICBTVkdQb2ludExpc3Q6IGZhbHNlLFxuICBTVkdTdHJpbmdMaXN0OiBmYWxzZSxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogZmFsc2UsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IGZhbHNlLFxuICBTdHlsZVNoZWV0TGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIFRleHRUcmFja0N1ZUxpc3Q6IGZhbHNlLFxuICBUZXh0VHJhY2tMaXN0OiBmYWxzZSxcbiAgVG91Y2hMaXN0OiBmYWxzZVxufTtcblxuZm9yICh2YXIgY29sbGVjdGlvbnMgPSBnZXRLZXlzKERPTUl0ZXJhYmxlcyksIGkgPSAwOyBpIDwgY29sbGVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgdmFyIGV4cGxpY2l0ID0gRE9NSXRlcmFibGVzW05BTUVdO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGtleTtcbiAgaWYgKHByb3RvKSB7XG4gICAgaWYgKCFwcm90b1tJVEVSQVRPUl0pIGhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYgKCFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgaWYgKGV4cGxpY2l0KSBmb3IgKGtleSBpbiAkaXRlcmF0b3JzKSBpZiAoIXByb3RvW2tleV0pIHJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbi5lbWJlZC1jbG9zZS1idXR0b24tY29udGFpbmVyLUVIeFczIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5lbWJlZC1jbG9zZS1idXR0b24tRHZnbV8ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiByZ2IoMjE4LCA1NSwgNTUpO1xuICBmb250LXNpemU6IDJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMDtcbn1cblxuLmVtYmVkLWNsb3NlLWJ1dHRvbi1EdmdtXyBidXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5lbWJlZC1jbG9zZS1idXR0b24tRHZnbV86aG92ZXIge1xuICBjb2xvcjogI2NjYztcbn1cblxuLmVtYmVkLWVtYmVkLWNvbnRhaW5lci1DdHZ2OSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3R0b206IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmVtYmVkLWVtYmVkLWhlYWRlci1FZFI4WSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmVtYmVkLWVtYmVkLXRpdGxlLW05MTYyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbi5lbWJlZC1lbWJlZC1ib2R5LWdMODIxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9lbWJlZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5jbG9zZS1idXR0b24tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHJnYigyMTgsIDU1LCA1NSk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjY2NjO1xcbn1cXG5cXG4uZW1iZWQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3R0b206IDMwcHg7XFxuICByaWdodDogMzBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZW1iZWQtaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmVtYmVkLXRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG59XFxuXFxuLmVtYmVkLWJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY2xvc2UtYnV0dG9uLWNvbnRhaW5lclwiOiBgZW1iZWQtY2xvc2UtYnV0dG9uLWNvbnRhaW5lci1FSHhXM2AsXG5cdFwiY2xvc2UtYnV0dG9uXCI6IGBlbWJlZC1jbG9zZS1idXR0b24tRHZnbV9gLFxuXHRcImVtYmVkLWNvbnRhaW5lclwiOiBgZW1iZWQtZW1iZWQtY29udGFpbmVyLUN0dnY5YCxcblx0XCJlbWJlZC1oZWFkZXJcIjogYGVtYmVkLWVtYmVkLWhlYWRlci1FZFI4WWAsXG5cdFwiZW1iZWQtdGl0bGVcIjogYGVtYmVkLWVtYmVkLXRpdGxlLW05MTYyYCxcblx0XCJlbWJlZC1ib2R5XCI6IGBlbWJlZC1lbWJlZC1ib2R5LWdMODIxYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5pY29uLXdpZGdldC1pY29uLWpGREpEIHtcbiAgd2lkdGg6NjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFkY2RjO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDMwcHg7XG59XG5cbi5pY29uLXdpZGdldC1pY29uLWpGREpEOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLmljb24td2lkZ2V0LWljb24takZESkQ6YWN0aXZlIHtcbiAgb3BhY2l0eTogMC41O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvaWNvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53aWRnZXQtaWNvbiB7XFxuICB3aWR0aDo2NHB4O1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWRjZGM7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgcmlnaHQ6IDMwcHg7XFxufVxcblxcbi53aWRnZXQtaWNvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbn1cXG5cXG4ud2lkZ2V0LWljb246YWN0aXZlIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwid2lkZ2V0LWljb25cIjogYGljb24td2lkZ2V0LWljb24takZESkRgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKFwiXFxuXCIpO1xuICB9O1xufSgpO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3M7XG4gIGlmIChyZW1vdmUpIHtcbiAgICBjc3MgPSBcIlwiO1xuICB9IGVsc2Uge1xuICAgIGNzcyA9IFwiXCI7XG4gICAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgICB9XG4gICAgaWYgKG9iai5tZWRpYSkge1xuICAgICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gICAgfVxuICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgICB9XG4gICAgY3NzICs9IG9iai5jc3M7XG4gICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgY3NzICs9IFwifVwiO1xuICAgIH1cbiAgICBpZiAob2JqLm1lZGlhKSB7XG4gICAgICBjc3MgKz0gXCJ9XCI7XG4gICAgfVxuICAgIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICAgIGNzcyArPSBcIn1cIjtcbiAgICB9XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxudmFyIHNpbmdsZXRvbkRhdGEgPSB7XG4gIHNpbmdsZXRvbjogbnVsbCxcbiAgc2luZ2xldG9uQ291bnRlcjogMFxufTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICB9O1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZixuby11c2UtYmVmb3JlLWRlZmluZVxuICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkRhdGEuc2luZ2xldG9uQ291bnRlcisrO1xuICB2YXIgc3R5bGVFbGVtZW50ID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmLG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIHNpbmdsZXRvbkRhdGEuc2luZ2xldG9uIHx8IChcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmLG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIHNpbmdsZXRvbkRhdGEuc2luZ2xldG9uID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSwgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlLCBvYmopO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHdpZHRoPSc2MC45OTk5NjZweCcgaGVpZ2h0PSc2MS43MzAzNzdweCcgdmlld0JveD0nMCAwIDYwLjk5OTk2NiA2MS43MzAzNzcnIHZlcnNpb249JzEuMScgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM2UgJTNjZGVmcyUzZSAlM2NpbWFnZSB3aWR0aD0nNDY0JyBoZWlnaHQ9JzM5NycgeGxpbms6aHJlZj0nZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFkQUFBQUdOQ0FZQUFBQ2hUU0FwQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBSUFCSlJFRlVlSnpzM1hkOFkxZWRQdjdudVpJdHlUT1ptVXd5a3ludVRnZ2tKQUVDb1lRQVlXbGg2U1cwVUFJRVdNTENBdnRsYWIrd0xDd3NaVGNzSlN4WjJnTEwwaFlJSlJEcTBrSUpvU2VRWWt1eVo1ekp0RXl6aXFWN250OGYwcld2WmNtV1pFbjIySi8zNjZVWlM3cm5ubk92cFB1NTU5eHp6d0dNTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGoya1VTdy85WHZtN01TdVF0ZHdHTU1XdWJCVWxqakRHbURwTFliTkMwWUd0V0V2c3lHbU02SWh6OFNDcjgraDI0SStIZ0VzZ2k0WHQrTndCMHFWajA0c3A1MkpEWmdpMVQ0VFRHckFRV1FJMHhiUlVFem9xZ0daM0lUR3hWcEhDR3hQdkx1YnNCM0NaaU00UVlBQklxZ01oQk9FSmd3a1c4R3p4NlB4bm9IcmlOWkhIWk5zaVlNZ3VneHBpMnFReWVrNXJzbWM1T255UDVqeEZ4SVlVelFXeEVxVC9Hb3NjakFSTUVma0xvU3hzUy9NRm1qaHh1N3hZWVU1c0ZVR05NMjBnaVNVbUtwYlBwY3dIM1RNRTlGdUFRNW5aaVZQbkI4djhJL2MzUTgvTENLaEQ0R1lUUGJlemg1eXlRbXVWZ0FkUVkwM0pCNEFTQWd4cmRlQ2pIaStuY3EwSGVvOXJpb2I5ckhaTVVXcTdpN2dGZDQwVzYzamdRRzdpNU1tOWoyc2tDcURHbXBjS2RoU2J5RThQT0ZWL3FwQmVRMk5MQ2JCeEt4NjhncnpTSmZ4cUlEMy9DZ3FmcEZBdWd4cGkyU09WVDk1QmZmQ2ZBeHdHSXRIajFRWTAwWEJ2TnlPT3JoK1BEVjdjNEwyT3FzZ0JxakdtSjBQVk83c3J2R2ltNnd0c0JQYU1UV1NNNGxnbUg2ZUhsZzRtUnozWWdYN1BHMlVoRXhwaVdtc3hPOWhiYzlGc0U5OVFscnNvQjhNdi9MOVlzVzNxZjJDaUhENlp5cVl1V21MY3hpN0lBYW94cENaSTZxTkdOMDhpOWhzQ3pDRWFYdUVvUGM1dCt3eDJKNW1RZGVoOGdUcFR6cjBybFU5VTZMQm5UTXRhRWE0eHBDVWxNNThZdWxmQitBT3NhU2dzVklSd2lPUVpnVkVLR1VDL0kwd0ZzQnhDYmwyVCs4YXV5TisvWG80bnVaL1N4TDJzOWMwMDdMUFVNMFJoakFBRGowK05ueU9tMUlCc0pubE1DZnVQUnU4NGpmdUxIZVdzVTBjTzk2UFgzWTM4c204OXVkYTV3amdQK0N0QVRDUGFHMGxZRzBlQytVWWRTemZXdi9WemgyUUErQnRqdExhYjFyQVpxakdsS09DQko2azVseDk0RzRIWDFyd0EzMGVQN1l2SEVOZHU1ZmQ5aWk0L25iNytuNy9PZkFEd0JwUUJaclJZS2xBSW9VR29DdnFVTHNVZjA5dlR1c2dCcVdzMnVnUnBqbWhJT1JydW14MDRIOFBSNjBna3FDdmpmU0ZUUEhFd01melFjUElPWldxck4yTklmTy9WUHNVVGlFZ0J2Z25BSXM0R3lVbkJjRTREVGk1aCtVbEJlbTgzRnRKSUZVR1BNa3ZsRlhBQmdzSjVsS2Y0d1RyNjJQM2JxbithOVJ5cjhDRjRQQXVvTzdzZ005WXk4QzhRL0FzaWoxRXUzYWpibEJ5UmRKS25WOTZFYVl3SFVHTE0wa3JvYzhVRFVjMGxJdWprQ3ZHbEhZampkU0I1QlFBMXFrSU9KNFE5RCtBSm1tM0lybTJiRFkrbytjR0o2ZEtaSHJ0VkNUYXRZQURYR0xNa2R1ZVFPQ09mVXNXZ1c1RWY3MTQzYzBHeGVRYTJVNUhRazB2VjJRS1BsdHlxRGFQQzNEK0pFdjhnSEIrbnRPcWhwRlF1Z3hqUW9mSDJ1OHBwZHRXdDNxMTBlSENMUXU5aHlBbTRpSTE5dFZiNzk4ZjVSMHZza3F0ZDhTNThQRkFUTCs3VXFYMk1DRmtDTnFWTzE0Rmg1elc2aEdzNXFDYXlWKzBGUXY2Z1RVSHVnZy9KOW52ck9RSHlnb2FiYnhkQ0xmQVhRYnRRNGxoRXN2NjU3VDJoaWN5dnpOc2J1QXpXbURwVVRRMWU4M25Vbjd1d1MxSk5IUGhwRHJFZ3djd3BPeVlTWEQ2N2hyYlltUkVJN1VCcDFLTml1ZWJlWFVKd2k5V3VTdFhyT05xV3J1eXVaeXhSL1IySm5sWHdaK210cm9WRG9BM0N3bGZtYnRjMENxREVMcUJZNEQycDA0MVNXcC92RVdlbE1jZ0IwSnpyd1JFb25pMXlYUTZaQVlIOFNZeFBKcWRIYlFPKzNTT0NXSVE0ZFdpM0JNM1QvcDVmS2ptMHR2eHpNamhLZUhMdjBCbkVFaU56UjZuSnN4L1pja21PcGhZcGFMa0NQNTN0V0F6VXRaUUhVbUNvcUE2Y2tMNWxQbmtaZkZ4N0s0cThJblF2aEZCQUpnQ3d2UEdkUTF0SnJBT1FPSWFzL0p6T2pQNG1RMyt5TEQxMVBzcmdNbTlVeW9acDBGNFJOTTNPaDFCNzBQWWNJRHJVNGI1QjB5Y3pvVlBtdG1rM2tvcUtrMzlPSy9JMEpXQUExcGtJNGVKYkdkMDBQcHJOalR3YndiRkZuRWV6R2JMQUlobzVqNkRFM2lCQ2JBRDRRd0FOOXA4dlNtZEV2alUrTlh0Mi9idVRYSGR5c2xnbmZUbkluN295V1RpSktiNkZHRUNQZ1lrN1pWcFdoWWhTa1luQUtVMjFSQUlRbzU5UHVCVFV0WloySWpBa0pEc3drTmFuSmsxTzUwZWRML21jYzlDNEM1NWFEWnlBSUdCN21Cby9hZzV3VEo0cTh6SWUrUFpZWi9kYzdOWFpLTzdlbjNVN0JLUVVJZFFSR3JjOFI4VmJrT2ErakZ1Y05ORjlOM3ZPOG82M0kzNWlBQlZCanlzSzFtbVErZWZmcFRPYWQ1WmxGSGxSbGFpNVdlZFI2SDZoczNpUlBJdkNhVEZiWGpFMlB6ZHhEZWJ6MTFDVTVEU0lZaXEreStYWm1td1ZzamZpNFc2dnpUeW9aSjlCWEkzOGdhRW1uanNwVHk2L0JtclhOQXFneG1CczgwL24wR2ZMZGUwUyttT0FKamF5bXh1c0xCZFA3czZEL1RrNG43d1hNNytXN1VsV1VjeEsxQjNZbkFCSHNjc1FqV2wwT0ZYUzZ3QWVFOHFxQit6WjJPd3VncHFVc2dKbzFMeHc4eDZiSHp2R0x4WDhuOExobVYxZmxVU2s0MEx2eXN6TlJkRjhlejQ0OXBNazhsNVhFSkVyajBsWmUvdzBHTS9BQlNOQ1Qwcm4wY092eWxlZjVlRHlCZnRRK2VTa1ZSUHJqaVJpMkpselRVaFpBelpvM0V6eHpZNmV6b1BldytacFNaUTF6b1lONlVDTU43b3NjS2txZm5zaVBudFZrM3N2Rzg3dy9sZ2N6V0tqNTJSSG9kNjc0eEtYa0ZSN0VZU0kvTVNUcE9lRzNheVR6NFhtL2FQVTlxTVpZQURVR3dDN3RPb2srM2dEaWtRMGtDd2ZKOEwyUDRVQWEvRi90NEQybjF5NkIvb0tQcTVKS2JnS09uK3VoQS9HQkNZSy9LVCtkVjJhQ0VjeHU1eXZUK2ZTWmplWVJEcHdrTmFHSmhPOEtMd0Z3OTFDKzFmZVhzTTl6K2tONFhZM21iMHcxRmtETm1pY3BXc2prTHdiMWpBYVRFc0MwZ05zRS9BekEvd0c0SHNMTkVBNmpORk5JN2R0Ylp0Y0JsQU1zZ1FjcjQvOC80UGladjVKa0VjTC9sWi9XMnNaZyt3ZDl2L2hmbFUyNXRjWVFyZ3ljNVgwU0tlYW1ueW5oWlF2a0dWN0w3K0k5Si95NW9ZMHlwZzRyL3NkcFRMdE41TWZPTGhiZDUwRGVZL0dsWjJRQi9SN2t0eUR2dW9naUV5UkprRVVXdXdBTUN2NURJRndrNk54UUw5N2dZRi9yVmhkS09CSUZIdEcvYnVTR1drTUlyalM3TXJ0NnA1SC9BWUhUYWl3UzFOQzk4cE1iUEVhZU1aZ1lUQUlMMXdvcjVnV05wWE5qVDVQRGUwRnNxNk5vUG9EWER2V00vSHZkRzJOTW5TeUFtalZOVWlTVkdic0N4QlVOSkxvWjRBZllFN2xta0lNTDl1eE1Lcm1KT2ZkWUNhOENjRjZ3QmxULzdRWE52QjZrVHczMmpGeEswaDB2NCtjbXM2TnZnUEFPMU42K3VhOExOM25nRy9wN2hyNngyUFpKNms0V2t2ZGdVYytIY0dscGNJb3E2NXlmNHg5aUhwL1E2UHlqeHRUREFxaFowNUxaNUNDY3V3YkUyWFVzN2tPNExocmxHL3BpdzMrb2ZIT2hRTGRIdDIvTlpQZ09FcGVpOXFXVDRGcXBCeUFMZW84ZFNnejk2SGlwaFU1a0puWVdNZjA5ekY2WFhEaTRsZVFCZk5NanZ4S2hmdFVkTzJGeUM3WmtBSEFmOWlVeXVjd1dPWjBONnVHQWV4ekFjTlB2WXV2UHllT3JodVBEVnplOVVjWXN3QUtvV1hQQ2dTNlZIWHV4azd1S1lOY2l5WnlBTDhjUWY4M09ucDBUemVTYlZES3VySHN2Z1pkamZvZWpVRDV5QktNQ3ZqU1VHSDQyeWNMeFVndE5aY2RlNU9RK1hONmZ0WnFycXhJd0FlRVdBdU9FZkFmdUlIRWFTZ01sSkJaTFgyVjkzMmZDZTlvUWgxb3lCcTh4bFN5QW1qVW5DRVpKSlRjaDZ6NE80TWxZdkRienk2alhmVWxmdk8vMnBlUjlVS01iRDJmMGVaQ1BRdWlhNEp6eVFVV0NFUWlISThBamo2Y3hjeWMxMlpQUFpMOWE3czI4V0FCdEpNQ0dhK2YxTEo4Q3ZHY045UXo5b281bGpXbUs5Y0kxYTg3TVRCNEZEZ3M0TjNpNVpnTGhrRWQrYUtuQkV3QTJjK1F3R1gycmhQMjE4aXpmOWdFUUc1eFhWOVB5aXJHRE96S2d2bEYrV25rN1Q2VnF0L3dFZjd2eUl4eGs2d3Vld21GUWI3WGdhZHJOQXFoWlU4SzlQZW03TXdEdFdDd0pvRjkyeGVQZmFsVVpCaElEdnlSNExXcU5reHNhcEY2cTJhdDE1Ukx5VGFSYWJDemhhc3RVeVZzSENMNXBNRDd5NlNiS1lFeERMSUNhTmFQeU9xSnpPcTNLSVBGejAwQUZrRC9jd1IzN1cxVU9rbzZldm92U0xSYUwwQm1TNnBsdFpFVW9Ed0x4b05CTHRRYzRxSzNXQVAyTHVRTWUvbjZnWitncWtuWHNXMk9XeGdLb1dUTXE3aWVNaURnNWVGb3pqWmloRjVuWDQzYXBvc1FOS2czQ1BwTlY2RytGL3VyZGpkM3JXNTEvdXpEclh3andpVmg4S01PV0VuQWJnVmNNSlU3OTVQSFEyY3FzRGhaQXpWb1ZCYkN4L0hmdEF5NTFnR1RMN3lGTXhEYnRvWFJUS1AvcVpTQTJLcC9mM09yODIrR0FEbXdRZUFrNHMxODdJUWZnYzlHSW5qTFlNL0xsRHVackRCWnN2akptdGJvVGQwWUpkUVhUUmRaYVR1QkJkZXV1VnVlL0dadHpSM0hYcmxEVXJMeldOM09iaTJPMEc4ZUJvOWxEanhUMEtDNnlUMnVvUElGWU5MMkFHMEYrWkgxOC9mOXM1ZFpqRGVabnpKSlpBRFZyUm5oQUFnY25nTVhGRXlFUnlVYmEwVkpEZWZUTFlTTWNNR2ZlTCtYUExNVmNHL0p2cWNuczJFQmU3clVFbTJsdXJtZkFoZEwxYU9CT2dyOEdkVTFQSE5kdTQ4amVKdkl6cGlVc2dKbzFhVHUyK3ltTlRRZGhDclVPNE1SR1JmSW5BdGpkeXZ3UDRtQk13a21oVEdzRmtJSXZmMFYzaUpFVVNlZVNsMkIyWXVzNkUrSk9RbDhUZUFmSmhLU1R5ODIvWFFCOEFnV0pHUkNIQWJjN0FtL004L1Q3M3Rod2txemo1TWVZTnJNQWF0YU1pczRsUlhqSUxYRDFVd0JJNEdUSjJ3N2dUNjBzU3o1MytFUUFRNVg1elNzRVVlaFcxNG9PRnVQVDQ2Yzc2Zmxzb05sV1VJSGdSK0k5NjkrOWpkdW1nTktzT0Nta29na2tJZzVPMjdIZEIrQmJzRFFybFhVaU1tc1NTYjg4NVJpdzhJRS80YnVac1YxYnBrQ2RCdWowY0pHcUxPWW8zT1VuL0tsVzU5OHFrcnBkc1hnSmdWTWJTOGxmeER4OExBaWVRR2xhdENFTzViWngyOVFPN3NpUXpGdndOQ3VaQlZDemx0MVovci9hWEoyekF5NUlqNVBVc280OHBUa3VlZDVpMXdzRkZVWGMzby8rSTYzS3U5V1MrZVREQUx3UXMvdHc4VnRJcEFPRXJ0cVJHQmx2YittTWFTOExvR2JObVJtTmlONXZBQ3hVdXd1NitEdzBuUjk3Wkt2eVRTTzl6VGxkR0hxcjZ0UmZCQXZ3K1B1Vk9pakFuUm83aGI3K0RzUXA1WmZxRy95QS9QR0d4SW5YdHJWd3huU0FCVkN6WmlYaWlWOER1TEg4MUZXOHJkRC9NZWZ3K3JUU0p6YVRUNm5HV1JvRmFaLzJuYUNzLzBvU0Y0VFdYNjNXUmtDSFBlZTE5TnBySzJWemVEeUk0RVNncnNFTEpPMm5oNCtkeEpOV2JLM2FtSHBaQURWclR0Q1phQnUzVFJIOEdtb0dzTm1tWFFJUDlyUEZ0MG1LMUp0UE9IQ1NsS1R1cWV6UjV3UDRXd0N4R3ZtRzNjWUUvMXh2ZnAyVXlxYUdKUGNpQVBIeVMzVjJJT0kxQTdIaDc3V3JYTVowa2dWUXM2WjVYdlNyZ25ZRHFCVVlHZnJqWmVsYzhoOXFCZEVnWUZZR1RxQTBGMmc2TjNhSjVQNFJ3THFLOWMvdmZRc2RwYnd2RG5DZzVZTTRMTlVlN1ZrSEZWOE84SDZOcGRSdTB2dFBrczBNTm0vTWltTUIxS3hwZmJHK01ZalhsWi9XcW9rR0lrN3VMY25zMkNjbjhxTm56VnV3SERERGdWTlNKSlZQM1lNWnZkRTV2UXZrU2FGOEZxaTE4UTlSZGwvVDFFYTFXUzQvOVZBSmw2TDJTVWMxUHNCUER5WUdqNXU1VFkxWmpFMm9iZGE4aWN6WWVRWHBHeXdOTGwvbmIwSzdSWHlreStOWHU3clhqWjJDVXpMaCswd25OSkVvNUF2OWNIZ0NwZWVET0RPY2VKRjhST2xqQXowakx5ZFphR2FiMmlXdDlJa3VXL2hFZWNENHVnbjRkUmU2bjlUWDA5ZlNBU21NV1U0V1FJMEJrTXlNdmd2QTZ4cE9LT3dCOFdjSWFWTDdWUm9lTUNhZ244Qlpnb1lYbXpLdDJsb0ZmSGk0WitUeWhzdlRadW5zMkhPZGREVm1yMzNXSTBmaThzSEV5TWZiVlM1amxvTUZVR01BN003czdzc3I5MDBTWjZHdUp0YUdPRFIrdVNRWkVaN1J2MjdraGhhVlljbkdwOFozRkZuNFBJRUhvODd4YXdFQXdyVWJlalk5eTNyZW10WEdyb0VhQTJCbno4NEp6OE83SklRUDhvdjFraFdxMzRZaWxJS21LLy9kek85c3lDZmVsMVJ5V3hOcFcwNVN4R2ZoNllEdVgzNnBydUFwWVo4WHdaVVdQTTFxWkFIVW1MSm9QUFp0QWo5Ri9UWFBjQS9heW1EcWxSL04xR0tEZTFJZnhLei9wbGFPZ3RTc1hkTmpad0I0R2NHdVJ0SjUwRFg5c2VFZnQ2bFl4aXdyQzZER2xFVVE4VUFGODBwV0JzZUZzTXBqS1loeUVCVjRXVHFYZk40UzE3Y2trcm9MdnA0UE5Ed204QzJNZHIyUDVIUTd5bVhNY3JNQWFrelpkRGI3VUFrUHIvSldLL3NLVkd2MnJYd2VCR0VISU9ha0s4YW5SaHU4NTdKMTBybjArUVNmM1dBeVgrREhCbUlETjdXbFVNYXNBQlpBalFHUVVtcTdENzJNNU1tWXZYYlpEbk5HT0FxOVZuTTVBbjFGNHNQanVmR1JOcFdwcGoyNmZhdFVmQldBN1kya0UzQjlQQkgvUkp1S1pjeUtZQUhVckhtU2lJeDdDcUNIbEY5YXFCazJYRnRVallkRDljNUZZWlhycnhWRWd6L085VjNoM1h1MWQvMU1tZHRNa3BmTGVoY0RmRXhqQ1hFb0lyNW5CM2ZzYjFQUmpGa1JiRUp0cytZbDg4bTdFZnFiVUFlWnhZSVRLLzZ2OWY0czRhQ0k2eW5jQ0tBZnhETUJKT29zWW5ETHlKTXptV00zUzdxaVluTHd0aGlmSHIrNzVQNEdaS3lSZENLKzBaOFl1bTd4SlkwNXZsa0FOV3VhcEVncU0xWTVVdEJDV0VxSGZTQnVKUlFCc0ZYaUNZUThBU0l4TFRCRGFEL2dwVUhkN0htNC9vUVlidGpNa2NOSkplUE0rRVdSbDlXWlgxQ2JwYWhYSnpQSkd3QjhyYWtOcnBPa2FDbzc5bHlRWjlTYkJBQUY3WXFLNzdlT1EyWXRzSUVVekpxV3pDVHZEN2l2WVBZYTMrSURCQWdIUmY1TG5Qbzg0ejNaM0hUdUpEaWNBaUxoUWI1elBCcjFvdnNaNDEwN3NmTll0Y0hUMDduMHNIUEZiNkwrbnEzaHdSaitRa1llTzVnWVROYVp0bUhqVTZQM0sxSmZKdGpiUURJQmVQZGdZdmhOSzNVT1UyTmF5V3FnWnMwNm9BTWJqbVFQVlhhUVdleWswb0g2WGlRUi9laU8yWmxTOWdINFM3MzVsbWRxR1V2blJ2L1crZmc4aU0xMUpBdHFvZ1J3ZHlmL1BaT2FmTjRPN3NqVW0yKzk5bW5mQ2NjeVIvNm13ZUFKQWFQdytBa0xubWF0c0U1RVpzMDZtanYwZUFCUGFpaVI4R2N3OHVHbFRETVdYTDhjaUk5OEQ4Q2JBZVFBTEJaMDV0eVRTdUNwdVV6bWplM29USlRKSDNtb2dLYzJtTXozeVA4YWlnM2QydXJ5R0xOU1dRQTFhMUlxbXhweXdxdFFmMGNlQ0NvSXVtWXdQbmo5VXZNUEF0OWd6L0JIUVh3Q3BhbkI2aG13QWNGeUpGOHpuazArYmFsbENkdWpQZXVjNHlVa05qU1NUc0RQNDNGM2RTYzZOeG16VWxnQU5XdU9wQ2ljZXlHQmhnWW5vSEI3Sk5yMTJWWjFrQ2szNVJZU2NmMGpnQjlpL3YyaFZZc1JKQWVROE9IK2JXeDY3SnhXbEFjQWN0bXBSd3Z1c1EwbXkzakVoN2Z4MUwydEtvY3h4d01Mb0diTm1jaU0zVXQwTDJ3d1daYjBQdGJmM1g5eks4b1FUTG90aWR0NDZsNUdJcGNEdUFVTmR1d2oyTXVpcnI1VFk2Y0FjKzhQbGNScWovQjc0WFZOWnNjR0JMeU80QWxvWUNBSkFkZDJ4eE5mYmFUY3hxd0dGa0RObW5KQUJ6WTQ2cFVBZHpTWTlCZUpCRDdUNmliS1lIMkRzY0UvZXg3K0hzTGgwTnUxOHFvY28vZThURlpYN2RPK0U0TDFCY0V4Q05UaFIvajFtWXlrYUU2NEdNQjVGWGtzSmsxNDcyMUhaeVpqVmpvTG9HWk5PWm85OUFpQmpYV1FFUTREdXZvVUR0L1pwbUlCQUFiaUk5K2d4M2NqZE4vbkFvdFhCdEduSE1zZWVmbk1tL01ESkNWMUpaV01TK3FXRkFuVlJydlN1ZlFGbEx0MGtUd3JDY0RuQnhPREsyYk9VbU02eWU0RE5XdEcrYmFWendCNGZDUHBCSHhwZmVLRVM3ZHk2N0hGbDE2YVNVMzI1TExaanhDNEJBMU94QzFwZjhUelh0TWRUM3c3bDh1dDgraE9kVDVPQmJBTkhyWksyQUlnVHFBQWNCcENEdFJCUXI3RWl4b1lUS0tjSVg3dlJhSlBHWWdQakRXVXpwaFZ3dTRETld2R2tkeVJKd040WkNOcEpPMUh4UHZQVGdSUEFOakJIWm1Kek1UckM1Zyt2ZHpKYWZHQkhjcEludXlrLzh4bHAzNGgwSE1PWjRQWUNKVFdNbmNsc3k4SWJPWlVPa2ZnYWd1ZVppMnpKbHl6Smt6a0prNkZjNjhCRUc4Z21UemdLME94b2Y5clU3R3E2dXZwMiswaDhuY0NKdEI0YUlzQmZDaUJDMmFDWjRrQStJS0ttSjJ3Ty94ZXRXbldGdkx6YUUvczh3Mld6WmhWeFFLb1dmVWtkUlg4L0tVZ3ptNG9IWEI3Sk9wOWNEbkdkUjNzR2J6ZUEvNnUzS21vMFk1THdZd3dsYlBDZUFTOTBES0JoaVlEbDdEUEU2L3NaZStCQnN0bHpLcGlBZFNzZXFsczZsd1NMMmd3bVUvaTQ3M2RRMzlzUjVucU1kZ3o4bVVBN3lzL2JUU0lob05oT0RoNjVVZXovUjlFOEZyWHcrODJtZDZZVmNNQ3FGblZKalhaQTduTEdyOXRSVCtOeDNzK3R0d2o2Nnp2MmZDdkFLN0IzSUJYejJBTGkwMjVWczk2cXFYWTYzbjY5QkNIY2cybk5XYVZzUUJxVnJWOEp2OUlVVTl2S0pGd0Z4UzVjanUzNzJ0VHNlcTJoVnVPa3BIWFFQaEQrYVZHZ2w2OXRjejZCMDBnL29SNDlEY05sTUdZVmNzQ3FGbTFVa3B0QjkxcnlpUHIxRTNFdGVqQmlwa1F1alJ0bWZjV0NJZktMeTNsOXJQZ21tajQrbWpkNnlPd0UzbWN1SVQ4alZrMUxJQ2FWVWtTbGZXZkNlRDhCcE9tSXRIb2xTdXRpVExhRS8weGlOOWc2ZmR1aDYrRkJtUHZ1dENqbW5CSHBMdkwrUzliWWhtTVdSVXNnSnBWS1RXZE9oM1NaU2pOY2xJdkFmaDhmMWYvYjl0VXJLWkZjdFByQlhRM2sxWlFBY0tka0c0RzhDc0lmNEN3QjBBZWN6c1ZWWTV1RkFoZTl3RkkwTXRUbWRGR3B6c3padFd4Z1JUTXFqT2hpWVNmelY4dThoNE5KcjJseThQSFNkYXFpUzBMU1pGVWR1eFpCTzRidklTNUUyelhTcmtiNU5jby9vUmRrYjlFaXBHOVhZbDhJWWRvUk5QYTZFbDl6dW1lQXA1TTRNRUxyMnRPY0YzbmdDdlR1ZlJ2YlNBRnM1WlpBRFdyVGpGVGZKVEE1N0d4eHM0Y29BLzN4azlkY1JOQzc4cVBEUXQ0TVV1RFFGVGV2em1Qb0dNVXZ4Z0JyK3J2R2ZsMWpkWGVBZUF2QUw0N3FjbVBUT2V5VDVMVG0wQ2VnYm5UcW9YemlLQlVDL1VKOUVuK3N3RzhmU25iWnN6eHpKcHd6YXBTN2pqMHFpWW1oTDR4bHVqNWJMdkt0UlJGWHc4bk1CSjZxZWFwZ1lRakpQODUydE45ZWYrNm1zRnpqaDNja1JsTWpIdzJ5dGlqQUgwdFdGV05mR2J1SVhYUzg4ZW54aHVkMWNhWVZjTUNxRmxWbFBHZkpPakJEU2JMZ3J4NkIzZnNiMHVobGlDdDlJa0FuNGc2N2dNVmRJekVPd2JqdysvdFkxKzJudldINXdUdDYrbmJqVVRrK1pDdVErbllFUFRVcllyQXFjNHJOanI1dGpHcmhnVlFzMnJzenV6dUEvVmNnbDBOSnYxV1Q3em5mOXRTcUNWaXpqOEx3QVBLVHhlOFg1UGlsd1lUdys4aldheDcvUlVEUlF4eDZCQ2owVmNEMm8zcVEvc0ZyemtBa0hTUkpEdU9tRFhKdnZobVZaQVVtMmJ1aFNyTllOSkl5c2tJK2I1dDNEYlZucEl0VFZFNEI1eDMzMldWcGxXTlJxTzhrbVIrcVhrT3hnYi9EREc0dGxsdGdQblovSVh6eC9Qamcwdk4wNWpqa1FWUXMrS1VKMzl1cUF0UUtwdTZGNlRMQ0VaUjU4ZzZncVlwNytOOThhSHJteXBvbTBraWlYdUdYcXExVDN6UyszaGZiUGdQTmQ1djJJYWVUWjhGOEtzRjhtVDUzNjIrOCs5Yll4bGpWalVMb0daRkNBZE5rbXBrREZwSlhZQjdFc0NkamVSSjRNWUl1LzZEcE45b2VUdmhJQTZlSUNub1BMVFEvdGhMTDNKTksvTStpU2NkRWZYTjh0TndyMXlFWGdNQWVzUnByY3pibU9PRjNjWmlsbFc0cGxrWk5DYzEyUU9nSjUvTHIvYzhyOGVuMzBXUUhyeUlENzhZZGRGakhncVJkQzU1QVlCbkJxdEVmVk55SGFFWCtVaGZvbTkzSzdlbkZVbzFUeXFielc2QXNMV09zWWNtMW5ldm4yaDFPVHpnWndLeUFCSUxMU2VuVTRNeXQ3b014cXhrRmtETnNnblhPSVBuRTVtSjdUNzg4d1QvZnZsczl1NEF0a0hhNU9RU0FLS0M1TU9SZ1BOVnVNc0hQTkVORTF4ZlhtMDlUYjhpY1cwc0h2dGllN2FzTllvc2RoR0loVjZxRmFCMmJjYm1ZNjNPbit4S09SVjNFUXZYTUFYMDNvazdld0NzeU92SXhyU0xCVkRUY2RWcW5aUFowZjUwZHV4cGpuZzJnVE1KeGpHN1VPbS95aFVSQTZYL0doc3hRZER1S0wycmRuQkhwcWtONkpBSUk1R2k1clF1MXhnNEFYZTBZL1NrN2xqMzBWeTJzQnZnZ2dHVXhBWkJGa0RObW1NQjFIUlVaYTF6UWhPYi9kejBrL0xTWlFBZlVCRWg2cDB0cEpFSUt0Szd0aTgrOU1zRzBpd0xRYlZxbkhQMkNZR2o3Y2kvaUtJUEliZlkzaFZBRDFuclQySFdIQXVncG1QQ3dWTVNkMldUOXl0a3AvOGZnY2NEak5WSTF1b0Q4M2hVK0JqSjZSYXZ0eVhDdFhQUGVmbWlrSzh4Sk9Gc0VCVzJ0cVV3V1NSQUxqcDFHYVdEVVd5cWErQUdZMVlUTzJzMEhSUDBycFVVRzg4bG4xT0UreXlCcDJIMk9sL3QrdzFidzRHNHRqY3h0T0ptV3dtRWV5RDdDWCtLMU1GcWkyRk96MWpkKzRBT05EUjBZVFh6Yng4cTdBejFBcTdOWTNJek5sc0FOV3VPQlZEVFVaSmk2V3p5TXVmMGZvQ1Z0MmkwT21ET3pSdkt5UEhiSkF2dHpLZFYrdEdmRWJpdi9MVGFnQVlsNU9sSHMwZnZXZlc5SmZDbCs1SThLY2lsMmpLQ2loQlN4OHMrTmFhVkxJQ2FqcEVVU2VhU3ozUFNQMWVNcnRQV3dEbWJDVDNQODlweXZiQWRTT1pKQk9QelZndWV3WDdyQWQyRnJjeDdRaE1KVVk4TzVWRTFlQk1za05qVnlyeU5PVjVZQURVZGs4cWtIZy9uM3RIb1RDa1ZoTkk0ckE3bENaN3JUQU1BUFE3RlJnZWFYMTdDTGVXL0ZqekprTk96VWtwdGJ6cWJpczVkTGx2NGF3RVByeVBwSVVXOG01ck4xNWpqbVFWUTB4SHBmUHBNd1A5bmtpZVhYMnIycG51aTlMMzFVSnFmTWxqWGdqT0hCTy9SOGVYSlRQTCtUZWJkY2RFSWZ3RGhFR3IvVmt0TnU4U1p5QlpmMCtnUWlNRGNqa3NBTUo0YkgzSFNtOHIzMWk3WXZDN2hwbWhYOUpaZ1BjM2tiOHp4eWdLb2FUdEpYU29XWGxXZXJCbW9jN1FnQUU3U2ZnamZvdmcyQUs4aCtQY0FyaFR3TTBGSE1kdWhacUh2Y3BDWEE3Rk5jbS9mcDMwbk5MczluZFRiUGZSbkVEOHBQMTI0RmdwZW5zd25MMXR3bVhLUXF3eDJRZWVsZ3hyZFdIU0ZWNE80VngzRmN5UytFVXlkMXVnUWpNWWM3K3cyRnROMjZYejZFWTU0VnVqb3YxandGS1MvQ1BneUdmbDZOQkg5UStYOGxnZDBZTU9QMTZ1QkFBQWdBRWxFUVZTeDdGMW5pYnpRT1YxTTRpek1IYk8xMmpSY0RnQklQSHdxZCtUcEFENitoTTNxQ0pLRlZIYjBxeEllaityYkZ0N21CSHk5SnprMUdobGFOL0xoeW5WVjFnNkRZQmY4dnl1enEvZFFOdjhHUUM4dVo3SGdpWTZBc1M0UDF6YTdiY1ljNzZ5NXhiVFZoQ1kyRnpQNS93YjVtSHFXRjNRTTR1Y1I0WHVHNDhPM0xKNENTQ3E1RFRuM0Zra3ZLczhGV3V2QUg0elc0d0g0bFplSVBtYUFBM2ZWdFNITEtLMzBpUzVUL0VHZHRVSUlLZ0M4dWd2ZDcrenJXWHlzWDBsZDQ3bXgrenVuTjROOGROMEZFOTQ1MkRQODVuYU1nbVRNOGNBQ3FHbXJWR2IwcVE3Nm4zb211WmF3bDhTL0RDYUdyMnAwWGt0SlRPZVNMNVRUdjRMWXVNQ2lQc3JOdlFTZVB0Z3pzaUluMHE2VXlvdyt4VUdmYTNDeThMK0ErQlM5eUZkN3Vuc210bUJMSHFYdGp4ekV3Y1JVZm1wTDBTK2VTZXBDUUU5dlpEWWJBYmRGdmE2TCt1UDlvdzF2akRHcmhBVlEwemFTb3FuTTJOVWdMbDE4V1J3aGNjVmdZdmo5UzdtT2xzcU12Y0xCWFVrdzZHZzBMNnZ5L3dUeEgwT0prYjlwTnE5T2toUk5aWk9mQWZRTWxHclN3YlhmcW92UGVVL1lBK292QW5lVG5JSlRsNEN0aElaQURtSHViQ3YxWEovT1EzaDF0V1ppWTlZU0M2Q21iY1p5WTZmVDZWc0FoaFpaVkJJK1B0UXpmSG1qTmM4cUs0cWxzMk9mRnZEMFJaY0ZKcm9SZTFCdlQrOXhjUi9qUkg3MHJLS1A2d0JzeCtLQnJ0SEJLUnBaL2l1SnhMcm5idU0yR3p6ZXJHbldDOWUwamVkMHBxQyswRXUxUnROSnM4djc0RktESjFBZWZDQVNmU3VBTzBKNWhzMlVnVUJma2ZtSExEWFBUdW1MamZ5UndDdFFtdlVrNkR4VXE3WWVIZ0RCVlN3YnZwYzJlRytoR3UwTUNYL3lJdEUzVy9BMHhnS29hU01IamhCY3JLZTNDSDU5c0d2d0Q2M0tkeUEyY0JPRVR3YnJ4d0wzaDhxaDVVUGd0ZE5nejhpWEFmeC9tRzNHQldwdkl6RTNNSVlEcEJkNjFGVkxGVENCQ0Y4N0VCdTR1WW1pRzdQcVdBQTFMUk8rdDdEMHZ3YkNiNk5LTFVmUWxNVHZ0N3duSjcxckpCekIvTzk0WlJuT2tkUkl4NXhsTjVnWWZqK0l0NVo2Mjg3Wm5vVnFvNVczdmpUcUZzL0R5NGJqdzk5cElxMHhxNUlGVU5NVys3QnZIWUFnZ0ZhN1hsZHVSdVdCYU5TTnRUci9STUpQRXJvOW5GZTEvQUVOM1luUlJhZnNXa2xJK2tPSmtYOGk4RHhBd2I2YkhTeWkrVkdlNWlrUEZ2K3RpSERKWUh6RTd2azBKc1FDcUdrTDRkZzZRaWN2dmh6MlJidDc5clE2LzFNd2NnamtyWXN1U0d6TVQzZHRhWFgrblREVWMrcm51anhlQk9uYjVaZUNFWm1xWGZkc21JUWpIcndyRXoxNlFmKzZrVjh2dmNUR3JDNFdRRTFiK0RuRklDWVdXNDdBa1FnaTdaaExzaURnd01KWkF4SzY1V3ZKYzJrdWw5NzR5SzJKbnZWUEUva1NDTUYxNU9EYVpyaXpVT1hmTlpXSFNQdzZJOTdGQTRtaGY5akdVL2UyYnd1TU9YN1pVSDZtTFp4aURxalpxWGJtQUM3QjVaSDNXNTAvU2FVeXQwdUxYTzRqNkh2eWordTVMTXM5WXY5elVwTmZ5V1Z6endMMERBaG5rVmlQMlFIM2dRV0g1Vk9SNEJpQWE2UDB2dUxIK2FzaER1WGFYWFpqam1jV1FFMWJLS0dNc2ppNmFHOFZZbE1QZXJvQXRMUVdLcWtybFIxYnRBa1oxSlM4cm9PdHpIdTU3T0NPL1FBK01LbkpqMDFucCs4bEZPOUxlS2M2YVpqQVRoQ2JBTVFnZUtJS0VPOENNRTdpanhGNE4wYlEvWXZqNVo1WVkxWUNDNkNtWlVncTZJWGJpOTVqU1l3RjF6WnIzL1F2RFI2YlB0WUhvS1Z6U283bngvc2duUTJXcHJtc3RaekF1MXpNcllvQUtva2t0WU03TWdDdUx6OHdvWWxFRk5IMXVlbmNTWkdpV3c4QWZpUnlMTjRkUDdBTjI0NjA0djViWTlZaUM2Q21wVUl6ZkV3bk02TVR3Y3VWaXlIb2hVdWU3UHppbzlEaUFPckxmekNJMHhhckFYdlF6UU1ZUEJJOEQ0SlFLOHZTS2VFVG1QQTJsR2V5eVFMWXQxeGxNMlkxc2s1RXBuMkVvQmRzdFRnMkUwUWxYRHFweWNXYlcrdVVWSElUblo1Wng4RHJncnhmaHU5QlBWNkRaeUE4SjZkTmNHMU1lMWtBTlMwM1V3dnFpdnl5UEpnQnNNQzltQ1RPeW1jeVQxMXFmak95L21OQVBIenhoRGpzZVdqWkNFZ3JqVTF3YlV4N1dRQTFiYU11L1puRWplV250V3FocFdYSjE0N2x4azV2T0krSzRKbk9wWWNGdmhaQXJGbytGYm5mN01mNXgwYnpOTVlZd0FLb2FZT2cxalBFb1J6Sjd5MjBhUGwvRVRpTlR2ODFuaHNmcWJaZ1phQU1OMDhHK1kxUGplOXdydkJPQXZldG81Z0NjZDBRaHc3VnNhd3h4c3hqQWRTMGxTUCtGOEpDSXcyRm14anZYL1FMWDBsbWtnK291dUNjY1hibk5sR081MisvcDgvQ2h3QmVYRSs1Sk95SFBCdlgxUmpUTkF1Z3BxMkc0OE8zME9PSHlrOHJCNHlmTndjbGliTUE5K1hrMU9qTDltcnYrdG5YWjRObCtPODl1bjNyV0c3c0pYNFJud2Z3cEhyTFJlRHJnNG5CM3pTelRjWVlBOWlFMnFZRDBrcWY2R2VMM3lrM3JUWXljZlAxRUg1RUQzL3lIRzZMZXR3TFNQbUl0eGtGRE1KelowTjZ1SUFIRXV5dWQ5MEN4aG4xbmpqVVBmUzdKV3lXTVdhTnN3QnFPaUk1bFh5aTZIK3hQRDlvbzk4N1FkZ3JZb0pRUVdBdm9HMmgyMVJxRDlRd2YwVUZrbGNNSlViK3BjRXlHR1BNSEJaQVRVZEk4bExaNUpXQVhvbjZBbDY5TmRXZ1diak95eEc2Wm4xaTQzTzNjTXZSK3BZM3hwanE3QnFvNlFpU2JtTkNWMEQ0RmtwQmNiRUp0R3RORWwwNXEwZ3doZGVpQk53V2pYaFhXUEEweHJTQ0JWRFRNWnM1Y3JpTHNaY0l1QUd6MDIwQjg0TmtnS2crREdBd1hWZTE5MnU1TmVMeDhyN1k4S29kT01FWTAxa1dRRTFIOWZiMDd1cnk4QndBdjhUYzRMZm9QSlZOazI2T2tKY054SWUvMjViMUcyUFdKQXVncHVQNjRpTzNSZEg5VkVCZndHd3piREEyYmwyVFB0ZFBQeWVqTCs1UERQKzROZXN6eHBnUzYwUmtsbzJrN2xSbTlGSVFyd000SEx5TXVjR3prV2JhOE5ySEFId2tubGozaWUzY2JyT1FHR05hemdLb1dYYnBYSHJZcWZoY09UeTFOSkRDak1yZXVvdjJ6QlZ3RzRVdmRVWHd5ZDc0eUsyMWxqUEdtS1d5QUdwV2pBbE5iSGE1d2wvNzBzVVF6aU94UVZDVVlBVFZ2NnUrSUovZ0FRQy9odkF0THhLOWJpQStNTmJob2h0ajFpQUxvR2JGa1JSTkZwSm5SbnljN2FDZEVFNEVzUUVPM1FMa1VWbklPd1RxTGtHVFhxVHJELzNkL2JlUkxDeDMyWTB4eHBnVlI1SW55VHErR1dPTU1kV0VweW96eGhoanpCSlpVRFhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NTWNZWVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhoaGpqREhHR0dPTU1jWVlZNHd4eGhoampESEdHR09NV1pVa2NibkxZRXdqSk5HK3Q4YXNQY3Y2bzVkRWtncityamNkU1FWcGczVGgxeXJ6Q041dlpkbVBCK0Y5V20xZlZYdXZtbHI3ZHExcEpraUc5MW5sUG05VnVWcXQybStxMFcyMzc4enlxL2FaSGErZlIrVzJMTFFkbmZ6ZWRTeUFWZ3RrVlg2YzlaWkhGY3NHNjJUd2Q3VWYvZkg2NVdsR3EzNDhhL0VFcE5VSG51UHRRTGJVMzgzeGNxS3cybFQ3M0JZN01XNS9xUnEzVUFCYzdMY2t5UU9nVlJWQXEyeTBWODdiVlpURnE2TmNXdUQvanUyNGxhamVBMWQ1dVFnQWJ4ZDJSYnJRNVhudzZPQlVRTUgxb3JkSXN0Q0pNcThFalJ6d3cvdnVEdHdSN1VKWEpJSWpIZ0FVY1lJL2hhbmlJQVo5bEw3YmJxVi9IK3NObHVVRGs1ZENLcm9PNjZKUkhJMGNSZFJ6Y0ZxSGRjVXQyRklBVUNEcHFxVTM3UmY2YmdJMWpwTXIvZnNJelBsT1JqQWJKMFRTMWFxSUJhOTErb1Mvb3dHVXBQWnAzd21aN05ISE9Pb01BSGtvK0lBbGdBUkRaUklFU0lJbmIrNFhvVnpUbEZUNjM0ZFlVSVMrSnhVQjVFQWNnaGU1bzZ2WXRkOGwzRlFSeGN3UWgzS2QyTjVPcXhVQUpqU1JpT1NtdDB3cnNoUHdkMGpZQ2c5YktHMXg0Q1lBY1VMZEVrcy9Pa0tFZklBWkVJY0I3Q0c0eXdOdTllTGROL2V5OTBESE42Nk5hdTAzU1YwcHBFNUNBZHZvdUYzeXQwazhtZEtKSWpZQzJFQ2dSMEEzcFM2QXdZbGZBY1EwZ0J5bG82QjNTTlJCZ3Z2cGNLZTZ2RjN4cnVMdUFtSkhlOUU3VGRMdjhDYlBDTGY2VkFhOUF6cXdJWlBQYkMycXVOT0QrbjFoRytCT29iQUY1QWtRNGdDaUlDSUNSR0ZhUkFiQ0lVQjdQSENTRVl4SGdGc1Y2NTdvWTErMjgxdTR0a2ppT01ZMytSbi9BdElORW95V3Y1Y0NRRUVGaWtWUjBkS3hGaEM4R0tGcEx4cjlhWDlYLzI5V1FuQU5hcDhUbXRoY3pFMC9FY0xwRktmbHlZZVFJMUFRVkNROEI4a0pFSWc0aUpnSDd1cUt4Nys5Z3p2Mmg5ZlZ6dkoyUElBbU04a0hRUDdIUVo0dXlCR2tTaDlvOEFEQmFtZFBsV1dkZVM2RURvU2x0RTVDQWRRUmlnZEJIQU8wbjhDdER0NE5YVjdYYjNwanZlTWtwOXUweVIxUjQyd3NOcDRmM3duNTUvdE9EeVYxSm9CK2dDY0M2TWJzR1dvREdlRXdxSnNGL29iQXo3b1ErMGx2VCsrdVZtMUhwOVhZYjlHSnpNUldILzU1b0hzWWdMTUU5RlBZSXFxSFlOZFNzZ1NRZzNCWXhDNUNreWg5TC8vaVFUK05KN3pidDJMb0lNbEN1My8wdGM3ZzkyUC8rcW5DMUdtdTZNNEhkSDhBZDZQUUIrSkVBRkUwL3IzSkFwb0VjQlBFMzBZOGZ0K1A4NDlESERyVXNvMHhNeVIxcDdLcEowUCtGU0NIQkVVeGUwa3IrRjhBUElMaFMyYWVnTnNpeEFzSEVpTS9YWjdTbDRSTzZyeGtKdm5Yb1A0VjBDQkxKd0l6MjFDT0Z5akhEbGYrT3lwb3lvUDMxb0hFMEpVay9VN1VSanZlaVNpVkhYMmhrejVNc0h1QnhZSVBPL3dGcUdheDk2dHhnRktBZHdPQkd4RDFmampRTmZESDQ2bkpzbHJOS2FYVWRtU0xEeEM4aDBGNkdJalRBQ1JxclNKSXZsQTJDN3gvQzRnZmt2Z0dZOUhyQnpod1YyTmJzRHlxN2Jla2twdTh2THV2ZkQ3RVVSZFNPQXVsV21iTjFRU3JhRkdaOXBPOFZjRHZJdEhveHdlNkIyNXN4WHByNURYbmdES2hpVVNoVUxnYmZKeEg2V0VBSGdTZ0Q5V0Q1V0xidmVEdlVOQXhnTDhsOGYybytLM2V4TkJ2ajZmZjNFb1ZuSER0enV6dW0wYjJnd0NmMEVoeWxEOHpnaDhZU0F5OWFqbHJvYUUrTVpGa052a2FRdjhFSUY1UFVzeDg5L1FGSkNJdkhlTFFvVTRFMEdpN1Zsd2J0N0dVYi9nSFYvbmpxK3hVdE5EQnF0cDdxdmc3SEdnOWdNT0FoZ1U4UXdWL1g2bzQ5dDFrWnZRYlhZbllkMVo2TTJYbGwrS0FEbXc0bWozMENKZnhYMGp3Z2FBMmgvWkkwRFJIek4zWHFQSTNRc3VHOTFtMTkwK0hjTHFFUzVVdC9qNlpIZjBxRWZuY1lHSXd1YVNOYTZQSy9aWlVNdTdsM1BsKzFsM3FvQXRCYkNQZ2xmZFMwTFRxVlY5YmFaVlZYbHNvdUZUN1Rub2tUd1p3TW9FSHVtSXhMK21Qclc0WnFkeDJTYkZkMmVRNXhlejBreWxjSkdvRTRQcFEyYXA5YjhLMUdHRCt0b2EvWCtIZnMwUHAyc3g2QUJkQXVLQWd2VHlWUzM0MW5ibjlVLzJKa1Y4c1oxUDI4UzY0N2plZVRUNEE0a1BLZTMyeFNzV2NmaU1BUENkZG1NcWxCZ0NrMmxuZWhZUUNIUWx0Um4zQk0rQUFlQkRYZDZHcjhWYTJKaTEwZ0dpWjRBY3NpWEtLVmNtMzJvZmRhTS9jeXJUVkhrQzVjMGY1QVJKYkFEd2J3S2Vucy9tdnByS2p6OW1ydmV2bnIzSjVoZTgxSktsSlRmWWtjOG5ISE1rZStvaWtxMG44TllqTndlTGxoNGZaRGx1Qld2dW04bUJaYlZtZ0ZGeUNBMndNd0hrUTNpSDUzMHBsUjU4amFhR1doV1ZSMGNrZ2twNU9uOHVzL3g1ZitpU0I1d0RjZ2RudlpMRGZnZzRNalR4cUNUckllYUcvd3dISkx5MmtMbFFQekUycjNQYUovTmpaeWN6b0ZVWG92d0M4RHNRNW5BMmVEbk5PTktzR3lYcTNsUlYvQitzR2lhMlFYdUxFcjZkeVl4OGN5NDJkWGxsZVU3ODdjV2VQa3g0TFlsT2RTZVo5YjBtY1FibW5BQ3ZtTTRnMXNPeWNZOWRNRXkvWjlrNmxIUW1nRlZyYUJGYUh5bUFRL25HSHo3WWpCQjdzcEU5T1pZNStJWjBiZlVTSHlyZW84RUdRcEhibFJ1ODJuYzM5aTN6LzB3Q2VDZktrWU5IeS80c2Q1SnBGbEh1Z1l2YmdIK1I1dW9TUHBiSmpuNWpJajUzZGhyd2JGcHgwQlB2dER0MnhKWmxOdnR3Vml2OGw4QlVFZTZza2E5ZStxMXgvT0o4SUFEaHdHck8xM3lVTGYyOG1OTEU1blV1K29PanJQMEc4RHNEZE1mZjN2MURnWElyS2JaMzl6aEFuUW5nWm5iczJsUjE3c2FUSVN1akljcnpKRlhKM0UzRis2S1Y2UDcvd1orSUplTWFkR2p0bEpYd0dtbHRMcmpQSlRCK2FqcDBBZENTQVZud2dLK0hzSnZ5akRnY0RFSXlDdU1qNStGSXFPL2FtcEpLTk5DTzBYR1VOWWp3N2RrSEJ4d2NGdmFMYy9MZGMrN1phczNBTXdMT0x2cjZXbmhwN2ZBZkxNazlsczJVNm56NGpsNWw2TDZGM2dqZ1RMYTdwTFFGRGY3U3M2U2w4NGpDZUd4OHA1cWJmTHFmM0FEaXYxRU96YWprNmVlSXcwd29FY05qSlhaWEtKdi90RHQyeHBZMWxXRFZDclhxZWl2NURDZXpFM05zQ0cxcGQrZit6Y2xrOHBDVUZiTFFBYzJ1OThzcWRneHBkVGF2S1U2KzJCOURLWWM1Q1p3Y3I1UUFHVkt1UkVoc2x2WTFaLytwVU5qVzBISVVLQjRHMDBpZW1zcU9YKzNLZkJQRklMSzJKdTVXcUJkSUJCMzBxbVIxOS9YSTA2VmFjZE1UU21iR24rWDd4VXlDZkMyQmRlYkhsM20rVnFGTHRjOG0vaTNCUDN2UjArbHpmVGY4YmhKZWcxS04ycFpqVHRGdnE1YXhYNXJKVFh4eWJIanNuV0dpRk5DZXVPRE1kd1RJVDJ5QTlCcVVPZzgxOGQ4Sy8zNFNUTHBMVXNXdUlZZUZicTF5VHYwOEJ6b2Zmc1h1UjJ4NUE1dzJ0NTJrbGR4Z0lCMUlBb01EbnloVy9tYzZPUG5oWkNsUnVldlN6eFRjRGZDZkE0ZkpiSytrRVpENWlFNFIzcEhMSkR4elU2RUs5V2x1ZmRibm1OYW5KbmxSbTlBVys5Q0VDNTViZlhzSDdUUzBObnFsTTZrR3VXUGdBU2owemwrV2d1SWdxdFY0K2xFVjlKWjBiZlJ3dy8vaGg1bEtrY0IrQTUySDI4a296d3AvQlJidW14ODZZV2YveW5NQVFUVGJEa3ZKUFFISDFCTkJLQk1PZFVGYWljQkF0WDZ2aFBaendxZkdwMGZ0MXFoREJnWEN2OXE3UDU3SXZKWEE1Z0o2S2NxNDA4enVkU0M4NW5OWFZCM1JnUXljTElxa3JuOHRjTE9EdEpMYUd5dGVPL2JiWVFiN09JTEMwYXpkemFwNloyOCtYL0E4QmZHRDkrUytMYXAvSmtPL2pZNm5jNkdPWG8wQXJYUkRVOW1qUE9pYzh0b1V0Q3dLeHJlRHpNUzFhWDBOYWNMS2tVdVcxY3pyU2hEdm5PZVNydWZidFRxdHNsaHp5aVM5Mm9pWWFIQWozYU0rNlRQYllTNTNjNjlCWXI3U0dzMnpqdWdIdzRxT1p1OTRycVozYk1FTlNOSjBkZXp5RXQ1ZXZFM2NrMjRwSFdGMkJrY0Iwc3dlUmNQQWNueHE5bnhQZUQrSmVqZVRmYUpab3ovZG1wcWV1YzNoZk9uUDcrWXNsV0d1Q3ozazZNM1VHcEVlVlgyN0ZaMUh1QitLZTNPa1RYbUJPckdqMkdpZ0E0REM4MWRXSkNKalpPWVJtdTdNM3VvcFF1c3FEbGF2eFdPcVBmUDYxUGVIVDZYejZqRm9KV2lIb01KVEpaWjd0cENzSW50Q21yR3J0UXgrdDI0ZWxqTWdYcFhKanIrOUVrMUE2bDc3QUFlOEN1TFBGcTY3MS9hdjJxTngvaSs5RG9hbjdQOFBCYzFkdTlHNUY0QjBnNzlQTXVtcVdiRzc1Ty9IYkU0SFRuSEIxYWpwMTd5V3NaOVVxa2c4RE9JalduY2lVVzk1NG55T1pJeGNHTDNheUdUZUlFd0tMemE2aWxlVlpUS2ViY09lT2RkdG8ydm0zcEFUUHZSb1BZUFpIM3V3UHVyTDcvYUR6QzFjRjEvWEM5N2cyc2U2YXh2TmpGMUo2SzRsMm5Ra0d0eTFVZGdJSzN3TVp2QmJlaDgzeUlMd3VuUnU3ZEFucldGUTZuejVES3I2RHdLa3RYblZsdC9yd2Zna0xlbmFIdjRNT2krOURDWW8wOHoyYXJYbU83eWc0dlkxRXEyL0JDc3JrWS9ia3F2TDNGTjV1WUc2UWJTYXY4ak9lb1lML3JsM2FkVktONWRla1BicDlLNkhIWVBhNlp5dU9QeFRrQTRnSjd2SExlRnVScEtacm9CMjl0Tlh4a1lnSWVtcmlPQ3lvUUdBQzRoRkFNWkZSU29YU3lRcTZBRVVBUmdSRktmYUFXQWVnQy9OUEVvSWZkU085V09kZUV3VWZlamlMdDBqNiszYk1QakdaSFJ2SU9WMUJZSHVMVjUwQmRBZkEzUUR2a0hTTUhnb0FJSWN1RUhFQUd3bHNGYlFEd05hS0lSZkRCOFJHdjZnQzBDT25kNmV6bzdjT0pFWisydXB4WC9kb3o3cHNadXExSUIrQXVaOXhLeENsNEpHSGtBT1ZBemlObWFZbWV1WHZYaGVBTGhBeFFUR0NFY3p2M0ZGWm15TUFrUXhPWEJyZUp4T2FTUGlad3NzRVBHVUpHejF2bndrcVFqaEVZQi9BQ1VCN1NPOHc0UEtsSmJ5WWhBMmlUcUxRQjZDdmZFTi90ZDhkS3RkZkYrSVJ4ZXowUDBoNmZUQWp4MXJ2WEpUSmVnOEQzSG5sK2tnOSs3U3UyOTBZVEl4QVBYcGlldlFlQVA0RXpHM2xhS2R5NnhzOGVLNlpPQUVBWGdlYmNEc1NRTVBUekFnU1oyZXZxS1hLajQyL2crZGQwUVUzTnUxNWlRZ2lVU2MzRlZXMDZPaTZIVjAzUVJJZy9PSW13dHZocEpOQm5BNkhDMEFNb2RUVnU5cE4zZlVHMFNBTkFidzhsVW45R01CWDYwaGJ0ejNhc3k2Ym5YbzFnUXRhc0RvQnlFSzZCZVQvRWZncEkxMS84YnE5UFJGRWN0dXhmZDV0RXlta1BBRHh5TFMzVTY1NEw0ajNsL1J3RVBmQTNOcEZNeHpJazV6REd5VTltV1MrbFQvTWJEYjdPQkRQS0Q5ZDhvOUlVQUhpSVZLajVZSDBieU41RkZRV1lwN2l0SXQ0MDRMa1FWRTZ4QnpaUlNnQ0t1WTVieDA4YkhMU2RnaW5nN2diZ1MyQ0lxSEFPbE9qcFpwdXRvTExGQjRoNlBJYTkzaldhNmFtS1dBU3dJOHAvQVNSU0RwS3R6dmEzYk9uaU9LeFh2UVdNUGMzeWhSU2tSaGk2L1BaL0ttVXpoWGM0d0NlaDluUnNTcC9QL1dVWmFhVnhNRzlMSlZQL1FEQXQ1ZXdmYXRDVXNsTnlPb3BtQjFCcWg3aC9SbW85bG1VNXRNRWU0cytMd1R3cDhYbUZXMmxtVXQ5UzJqdENnSm9JOU1VTnFzakFUUjhjUmlTcjlJSDFOQTZDRXg0TWUrWHZSeHFhT0J5U1p6SVRHeVhWN2lQY3pnZnd1UExOOUtYVjl0MEVJMEI3aDlUU3YxeWtJTjNCSGt0OVlQS1pESi9CZXFGemJkMEJ3WFVNUW8vZzhmUFJ4SDdUbDlQMys0R2t1Y0FIQUp3RTREL3ZrTjNiTW5uTW85eXdrc0pQQmp6cnczWFcxZ0NjS0llT1o1TFhnemcwMEJyOWxzeW14eUU4MThIY3QzaVN5OUNPQXpvNXlSKzZIbTRNUjczL3JRVlEvdVcwdHF3UjN2V1pmS1pYam1jQTNDQVFKL2c3Z3Z4OUNESWxLYWF3c3lQdjk1OXNrZTNiODFtOUxmbDlTeWw1aTBBZXdSOHhVUGt2d2NTQXpjME1PQjdBYVh2elg0QXZ6aW8wYzhjem5uM292eW5TWHdhaUcwVitUUVNSRUh3QkRqL0xidTA2d2FTSzNxODZyYkw0Wnp5aEJGTHRlQWFDRDE1ci9aK1lpdTNIbHR5VHMxcDZwZ1FIb21vM2NHL1kwMjR3WVlRbmhPY1d5VHYrUnNzclp2OXMvNEpWTXV2VDVZZjM5aWQyWDFWWHRtWGtuaEJ1Wk5Kb3p0M051Z1M1N2hzOGJVQS9yNFZaemlsTTB2L1JWaDZwNkUwd1gvdjZvbDlLaGdjdjlZQnVaNFpDN1p6K3o0QS83MVhlNi9KWkk0K1Q5UWJRL3V1M2hPUW1hQkxNT3FjZTMxU3llK1MzQk1lY3ErSmJTMXp6d3gxbkdrcWlKVG1HZVQxSWorMEtZSHJOblBrOEp6M2Evd1E2eW4zTm02YkFuQkwrUUVBMktWZEp4WHorZnZMNFJFQTdnWGkxbEkyOWYvZ0pUR2RTejVCZEE5dG9EbHYvbnBLdGUwZmVSRzhiekEyL0QyUytXRDl0Ylp2b1RQODhyNzdFWUFmcFRLcC8zSHczMERna1dpOE56a3hPMkxSL1l1NTZTY0QrR2duWnRwWWlTUjV5Y3pvSTBtZVVtOFNORjVSQ05JOUtKczVkaUdBcjNkNFB5OHA0RVVRbVduaGJIZk51Zk85Y0J0TU52TVgyZVhnU21lam9VR0NGeG93T0Rnd2gwZEQydG16YzJKNDNhbHY5aUpkandid2RkVFh3YU9hMG1EMDRndlQwK2x6UTl2WU5HYjlDd0V1cVFPSWdGOTd4SXVHZWthdURNOHNzOGdKUnUzMWhiWnBLN2NlRzF3M2NwVVg3WG9pZ091WFZFenlER2IxdENXc1kwWXFteHFTdzdOREx6VWVQSVc5bnJ4L1FjSjd4bkRQOEJjcWd5Y3crMTJyL080dDlybFhmZ2NEdmV3OU1CZ2Z1WFl3TWZ6L0l1cTZaRjM4aEMrU2RJMGNyTzdJamZWSjdrV0xUQSs0SUVGSENYNG83dkhGZy9HUmJ3YkJFMWo0KzFHNVArYXNNN1M5Z3oyRDEyOUs0QklJNzRKd0NJMy8zbWFhSHlYM3dvTWEzYmpXQW1jZ2xVdjFFN2lvZ1NUaDcxeTE0MzMxWTJlNU01R2puaTFwS1hQaE5xdmU2N3FhZlNJQjhvaXBlV25iRlVpWFl6QjVvTGtEWE1QTlorRWZlT1VQYmlBMmNOT0d4S1pMQUx4YjBGVDUzdFI2ZXcwRzVYY2dUbFRSZjM2UVg3TWYxQjd0V1NmZ21aZzdXRUpEQkh3L0VvbStZQ0F4OHYxRzBpMTJrS3g4YmFCNzRNYUl1cDRPNEgvUStLQVlNelZSeVYyNlM3dE9DazJ6MWRTK2MzSlBJM0hQWnRJQ2dJRGJJdVRsQXoxRFZ3eHhhRTg5YWNMN1piR0QrVUtCcHZ5KzM3K3VmekxjVkZadmdNZ0RmNlhaVVpZYUord2g4R1lrdkRmc1NBeW5tMTVQaGNydDNjeVJ3NE05dzI4RDlIb0llOUg0OWZSeUVPVUREK1VaWE9kZWMwUDlDWHFraUxQUVdBOW5IOUF2SWYyMnp1VTUwd3dxWERTZUhUMFBtSHRTdEFMTVhCK3ZmTU9oWjNXTlJMU0VzOFhaSmlLb3VMRmNBMjJWazNqU2tjSEU4QlVrM3dFZ1d6N3JxbGU0bWVEaXBkNGJPcDNMM0FmaW94WmZzZ2JoZDVGSTlKVURzWUdibGxLT2V2V3Y2NStNSnJwZkFlbTdhT3lpLyt5eTVMMzkzUFJGcFQrYis0NmtsTnBPdVdkaGZzZXdldDNoUWY4dzBEUDhwZVdxMVRSN1lKclVaQStFSjVUR2tXMUtCdFNWZzRtUkR3OXhLTmZrT2hZVmFxSXZEdmFNWEEzaVhRQ3lhT3c3UTBGRkFJTFRaUk9hMkx4YWFxSDFmdjVwcFUrRTB4TWIvcnlsUTU2OGR3Q1J0d282V3ZGdXJYdzlsQ29JRzExNWt1NE83dTlHK3FOVXZsdzFlTGFyN0IyZER4U3pCN2NtTnFiMU82RDhveTRNeG9mZlMvRERtRzFhcXF0QUNJSUJjWXJ6aTQ4R21xdUZTdktLemowRzljL25OemM5TUVFdjhwcUIyTUROemFSdlZoLzdEcXJMZXoyZ01jeGVxNnEzQmk4QWROTEZrcHErRnErcy96Q1F6VTJmSmgwQTljYkJubE8vMG16K3JWQnZVM0NsNmV6ME9SS2FHcWxIVUJIa1p6WW0rSkVHT2dvMUpkekNRRktEaWVFUEFmaVBja0JzcExaQUFDSndieitiZjJnN3lycWk1WXIzSVdZKzc3b3ZpWW44SFhvaVA0MHkrbXVJcVRwekM2Ly9pYnN5dTZwTi9iZVNsSTg3b29kTXgxcFdPOTZFMi93d2ZxMXZPZ2hkeXlwc1RPQWRCSzlENmRhQ1JvSm80SEhOemp3eW1aM2NDVFpkKzh4NzRQc0hFNE0vYkRKOVU0S3o1dUh1NGQ4RGtUY0N5SlRmcXZmc3NkVGJGTHB3SWpQVzFFZ3pTU1hqRUIrTnVmZFoxbnRnRWNqUERNWkhQdE5NM3EzV1ZOTVkzVitWSjRTZldVM2RTWUdmUmhoOWQ3VnJ2ZTFRMGVROTNaUGd1d0QrQ2cwTWdGNis5Y2NERUhIbFFOTEpXeXlXUTJpZ2xpNWZ1cWpCazJ3QnlCRDR4Z0FIN3VwTjlONUoxTjJNRzN4ZURzRGRwam5iVXJSQzkzZTVUUFM0R29meWExTG9nRUN2bldNY2J1YklZUzhhZmF1QThmbDUxK1VCcVd5cXFlSFRwalY5SDJMbTFwcEdDTUtQNGduM3FXYnlYWXJ3TmE3QnhPRC9RdndpWnVkV3JaY2p1TDdaSmlMbE5TQXFPQ052cUdWRHdPMk1SRDVDTm4vdlpTc3RkSTIwbWdsTmJIYlN3MEl2TmJEdk5FbndBLzN4L3RINjB5eGRlUHRPNGZDZEJLNUM2ZGFYUms2cXk3ZTE0UHpsbnF1M1ZlcjU3TlBUNlZPcGhqb1BBYVZtdTBrdkVrTWFmYVVBQUNBQVNVUkJWUDFPT1o4aVBYNUhVTkRpc05Cdkpud2lTamhkUEtHSlJJUDVMMFU5MytmS1pVb3RIUzIrMUxlUTVRaWdLL2E2eFVEM3dJMFVQbEYrMm1pUDNCNUJGd0NOQndKQzkwVnBrSWVHU0RqcWVmek1OcDY2dDlHMHJVU3k2SG42S0lSRzd0RU5oZzJEb01kTmFHTHpZZ2txZWM2ZEFXZ2d2TTQ2ay9vZSthbkIyT0NmRzgxenBTam1pbWRUY3pvUDFWdno5Z0grYUYxaXczZmJWTFM2clU5cytBYUVuNkN4RTYveVFSTDNaSUZ0SFpONkpaZzVsamgzdm9pN2xWK3UrL2ppUVQvdjcrNi9OWGplSFU5Y1I1VkdGMEo5MzVueTdVSTQzOC81RHdoZWJIY3R0TlNqdHBsWXNmUXBBUnV4SEFHMGtSM2Y4YVlDTHhyOUFvQUpOTFp2U21mRjBzTWF2WjYzVjN2WGl3b21FRzQwOE40ZVVYZEhtMjVyOGVMZE40TDZDWnJwVUVUYzNjL2w3N1hvMGhWRW5oWHFVTkZJdnVPTytHS2orYTBrbE83YnpEVnpRVm5RdTI0THQxUjJKdW00TGR4eUZCNytwMXdqcXFjV090UHZnT0I2K2NXemdkVi9MMmlwczVnZUZScGxxdDdqNHBUQWJ3V3RMSks0Z3p2Mmc3eXVnZXlEdmcwSndiOTQ1UStqU0daRDk0RUdqdXZiV0NwMmVKTTd2ek5Ub1BWMzk5OHU0S2RCcG5Va29XYlBldTR6TVQxNjkwYnl5MDBmR1FRUTdnUlQvNWs0K2IyZGlaMk5qRERVTm4zc3l3TDhBZVozRkt0NUpsa2UwcEVBNG9BMzFFaCtrbUtRZ21idllQMzFkYW9BZmpZVUcrcG84MlVyVFdxeXg2SEpreTV4MUtQM2t6WVVxeW5kaW4rUDRxMm92eFk2OHhsTFBLdHRCVnRCQ3RuTXZTVThwUHkwL3M5YnVoWDBmbDc1Y29TOEZxVmUwTUg2RnF6dGxWdUtCT2tKNDlQalp3QXI5NlJGZ2hjZWlhamRPdDBMZHdrNjg0R1JuUGFBMzZDeFFCQXAvN0hSK1RndGVMMmU3Uzc2M2huNC85czc4eWpacnJyZWY3LzdWSFZWOWIyWngzdHorMVozM3dSSnpDSU1BU0dBcUJnZzhFZ0lDNE1LQ01MU2h5Z3FQSDArVU1HSDhpSXlxRHdVY0NIUGg4aFRVUVl4QnBsUlpKNGhJWUYwVjkwaGQ4eHdoM1FOM1hYMjkvMVJkYXBQVlZkMW5WTmRWZDAzL2o1cjFiMWRwODdaZTU5OTl0bkRiLzhHSVBJcWtyeWVoT04wK094V2FzZ1o4QXN0R3o4ZzJaNWsvSDRUT2M2UDZ2VHU2dDBYUUh6SW9QUFhYQSt0T09MVFcyWHZNeWtkYmFsV3V3QkFxb2xhRzhjdjdjN3RIcG05NTBiWldkaDVDTUNYc0xyU2lSaTBQd2NDRHg5V2NlOTBRVkxneFdlQVNPcDVxSGtkdEN6eTA3UDUyWDNkdjJYeSthOEIrbkw3MUFHMEFvQ0VBSGY2c05GMjlESkdNVzVhYXcxMWZwbWNHSGVzQTJoWEJROVQyYkdLRUNmbFpkK1JYNUYwTHpwdEM5Y2pPaS9ubld0clJTWVozQnl3RzZ2dXpTTGo0QVRvY0FhNEs5bTVFNktRdlF2VTk3QjJOVEh3bnJ6WGJKSVhNcXJURmF4Y0ltQm43S2RrTDQxNFB4VGNrZWpjTFVaVVA4dUJPNWZvMEw1TmRqM1VnUGRmSjVuRzNubXNrR3lBK0M0U1RGUzdFWERwb1ZwcDFCR0x0aFIzMXhmM0FMZytkaWhSLzBDeDZodytGZmZmSEwwN083bXpBckRiZEd1OWRJTklmQ3pnbVpMU3VtTWNsdlhLMU4yL3RDd3FGRTQvV0FiUVB2VFVuTnBLTUorOWplVHRpTmtyRHJna3VnZkhVSDJET0hmSERwV1VFYlFyUlQ2eFF2SlFtTXNjUzN6K0JOaUZYY2VKdG9JQ2tPSitTRngyQ0ljU0sxSTU2akpRNTZRcVlKT2pXV1QzRDNIZHByRm1ZaEUyem9Gd0ZsYmJUS0pCaCtJcEYzRExpYTdwZ2p2UU5JTksyaDlGTm44N2F4NVhyWC9xNlUwajVMWGdNTklHTFJaeS9HcS9YM1BFQndHVTBhenpwTytwQ0Z5enQ3YlFOaUZLWDY3RXBORnA2S0JleVNRMmpkb29ZeDFBKzFSdzk4TksrdkFtdGdMZGhWMG5RVWFybEpRUGtVVkpQUjlnZDMzY2gvdW0wVnlCeHZOSmtwK0h1SDgzZGkrbEs5dDRJZWtGSG9pK3huNWE3NTZpem5DWHIvckVtcmhldXFTbFFKUnFiNXpBb1h3aFB4SGJ4MUhUYmovQ1dXQ0gxbmF5Q1I1eE5GZzEwOXAwMmhOSnFvUm1GSmRWczRrRS9RTEJES2s5NHl2aDVuSlFCODhYZEQxUzJNcTI4QUEvY2hIbmovUTdZV2Roeno2SW40MGRHamdKYXptK0tNanplWkljTUJveGJvODArcVdab0crYzNQNG5NRmtSYnZ0d3dtTnBmaDhwSkJ1UTd1djEwNkJyQloxZlJybXZxNjE0blN4VmxyWUx1TEJuTW9PeWNWb2t1VHlvUEJPSDdyQ2daYXlkUWE2L3J5R2UzY2cwRW9rbG0xRjllRjQ4MTRTbEU4Q0Q1K0xjK3VCVHR5NGl6a0l6bWxIM2ZRK2FxQnhCTHJkbFFvRkZFNExzVlBhWWhyVy8xbkRldTA0SDZwWDY0MFU5Ym9oTDl6RWJmSGpRU1hUNk9OSnR0UkNBQkR5enRGSnFLM0NOY1M4MHhYdTlTbTY2TWJFdGlxM2lTQ0hSZzV0RVFXSTVuaGdtVDFMYnQyTjd6d0cwT3dTVE1qb241VjVXeXdaT25oNzNwQzNiSkJCMWlHSUZuYXVKWHY5M1h6ZUZNSEZubUlWOEwvSHRvT2ZsQVIyTVJ4czVIVmdqeVJIUFJ1YytjNklKcUlCamwrQ1N6WXJ0MkVIYy8rc0tWcFlBOUZKczZ0Y3ZyQjRuSDVRRGFOTnBnYitCcTZFTlUyamY0alBGYlBFN2cwN0w1YWMvQmltU3RBM1U5Mmhwell2RUJTN0VNeEtYSnoxcCs5MVlPNW1NdFViRVpnK2dhY1NXbktSNk1zRmpMWkhGdWgxL0QzSTExRG9HME80WldsdDBGZXFzMWw1V212UkJNSVRibW9OQXdPRHUxdVFqenNBNkpCaUFZYUpJTlBmaHZyd2ZydU1rSERiZC9uRVlJaGRxa2lqcURLelZXZ1hXYjBNa2NRK0FMU2UxbU1Yc01zRzR4Q2R4QjByNGN6YmlTM21yRXE2RUR4VXhUR2pEQ29tUEpQRnYzSXp6eXcvRkRpVlJsb3owTjI0b3FYVDJtUFpCaCszbkJZQ1ZCNE1aUzMrRFc2VVJHY1JQbmF4VEJmbjdBTlRST1RNYjJGZ0VCbG5VTzE3b3ZtR3NYRGdORFB2eVQ5YmpSbEt5dm5FcXBVZWlDS2ZRSlJKOUwyTTVSeUVLc0o2a0h0cDJvdFI0SGFlUGsxWTdjdkRJSWIzb0RSS1d0cExaVTZ3c0FqUlVOQmdCWng3Q29RZVZLWXVrREVKL0hZRzRBL2VrTnM3ZlF5RllZL3Zaand6NUlRa25VK1FqQUJMMFNGYjlUd0FUdFFsTnNJWEdCNDhkNkJaMU9wd0lPcTVRREpGYXNRSHFkbVljQytmVTFkRElQaE9EQkIzaWhDY1VBMmliV09TREZiRGRHUTZTTUhUY0Erbjd0c2Q0M1RsVUhhQmgyKzZXR1VDR2hDMVJXa1JpNXdNT1c4ZDhwUWVwbkdHc1hzVnNGdG1KYVYxT2duS3R2RXZTRFVpL0VndWRlR3NSeFVReGJRRmdWMkh1V3lEK0xlSHBVUi9vQ1dZOGNHT2tNTG1SdnI2clgyelorQTdWdjAyOFQ1eTBDUGYwNmJ3ODgySnZiZG9CTlBvNU0xNHJ5dldoZ0hpbmxyaCtQRk5yNW8yTitIMWxxcGxBbmZFS2s1cm5oRWxYaHlIeUlZaTRDUHYwYVZkRDBCVXZNdko4cGJRRzQ4TFdjRHJRYXpLcFZVbE11bWRKTlNacE9EOEpDUDk0QU9rOVRRbW40TnluMHF3SVNkWkpmQUROZmlqcFpNeTE4bnRLYWFYVURtUS83Q0RhNHpvTjZRdTNuYzZrRm0rVEhrRFRhQTFPbkhpbGl6Zzc1bWMxcVNNRkFLZzFrTzg1MCsrT3VrQ2hUcUtYUjV4QjZ1Ums2TGZVQ2pUQ081OGoydUxWSkt2MjV1L0NjaGdnMGI1dURybGxnRU9aOFBqTjMvZFBUVmU4VUJGY2lRVi9UNzUzTGlYYVk0NkkyeTMzKzd2WE5Va0NSSGYvN2xhZGlRQXA3a25neVNVc25WWmVwZGFqcEZKZVhrOUJaMzBrZzdoektqODFVSG1vbThCbi94WENIVmhWVEV2UzM0bkVoUWo5T0lOdGoycFZPelkyY3dVYUYrOE4wcmJUT1BmOHVsOTRTWUdrOHdERUhaVW5UV3g1QlN0aGxPNjZwMll5RmF3cWRhUzVQNExjTXFHY09ob3Jsd3NDVW5YVUxlck91M1UxUktQNlBJbVR5NVRpNXlaK1BvNURkRXhiQzhHaGp1WkFHci92Z2Jaem5qeTNuNDF5eHdVOUJzazFLOFllZzJqODcvVTZzQjYvWlNWM1JzK1RCMERnM2xuTW5yYjcydDBFRlgrbHlCOXZmVTNUSjNnQW45bUJIVzB6cGZoa3B0OEhBR2FtWnc2QmlLTHp4TnRSdjhGVXJmeEFqeHNQNjY2MktkNW1iOXR4Q01uTVJ0aUVnTm91dnRlUmFGOFJFOWp6NjNxcEF3Q1JxVUJFc29kQzFyWmhXNlB6VUo5NGZ5R09RemlldXF4Z0lPck10TmVOaS9oTEU0YkJkaWg5YURaUVN3eTRyb09EZHZ4UnpLNkFMdHBuVGRJdVZ0dWNldHJkbmhhMDd0OUxmSUREN1djVzc4Zmk5dlZPaUErWThVKzhERWwrUzNndkFJQjkyTGNOOEhGLzBFazdRQS9pOEZaeVRiZ1JKQVVOcCtzSXpNUU9KMVVlV2dEZHJZT2VWYTluUjFJaXY0RzErOUQ5K3Vmb21BZDVWYlhLSjhmelRIaTdDVzlyM2UrOUxtQXZWMzdqV3BHT1ZmMTdCTkhMays2ZmpaUWpPSktGY09FUU9RdkMvUmZnZ2tTbUF0dnkyKzU1b0hMaU1NQm92eU5wNStFSTluVVp1Qm0wYlZ1aDNhRE9UdjNZeEpPWk1ITnk4SWtBeVhCeDZhNVRURDZuYXAvb3BYbEptZFBObVR5d3VuZTRXRjA4QWNGajdXcWhYMmNuQUtRd3YxVGxEd0g0Y28vejRnVGxhbmtHQ2g4cHVBeWRmd0FlT2NGbENiL1NUSlJPa0tlNG9rQWhBUmVHZEFFZzczZ3FuOC9mMWpTVEdJeXJOODczcXg2NW9qSVBSRkREd1cwcGQ1WWI0VUQxd01WRVI5RHN4Sk5ETm0yakgxdGFLcDB0U0VFZ2o1RDBBVmVjL0FvSWVyakF5VGM4WE9qZ0EwRUs1QjVvWkxqTUZWMG1wdXB2QTdUYkhHK1E5UGNrd3cyRU8wdWlUTG11bVZhclBKaWtHY3RZQjlCZWc2ZERUMHZYUkE5dW5Fdnp6ckkrc0Eza3BWMm5KQ2xmU0hCLzVDRm9VRU02SCtjLzhJQTdXUjVtSjFnZWV5UmxrOWg3VFJKS1Y0QkRLQkZSeDMzQko5N1hKQmxGZlVraXhveGRoOHNPNE1DWkFPN2IrckVOTzFrTnJvempBa0p5c1BGN1p3STRaOFhoNFZobkFDV3B3enFjZy93dmVlaVhDTzk4cUFySmdoRG1nRlpzU1RUM1kwV0ZDTkh3QUVIdlFnRDBYS2xWbCs0c1ZVcS9QamM5OTZWQnhaSzRBMENhQ1dHelRZazFPVzZKY0g2aklFVDlNYkhKZEJMaUs4WlpRYThEd3BNRU0yRUlCM29pcEh4VFFjaUpvZlBpaWhCNkR3WUExYUN2cWNFS2lKM29kTTZSVURJSVFicjJRTFgwS0xUYTFXYStWd1QwWUhjbTM0dEJlNkRqemJ4THBMRmM0VzVKcWFQZEUxeVdTK2FzTzJwa0JDUEg1a252dFNWMndXWDdLL3RUUitRWUIxRzlOWU9ENDFGREpDR0JCM1poMTBBbkIrMkpqdHhlZE5ycEpxMi8zV0UxZkNnd09VV0RVUkVUcng0QlVNTmdVVnMzZEdHSGJXRlBMc0pGRlZCM29LbklNazN5UEFDRlZrU09mT3VUYS8yL0RjUlpKTTRrdUozZ2RoQm5BM3lzNE45YldpNE5ESlRlRUs0Q2tXWkxvbFVQdUovazNoVFhiVG1pWjNwUUI2ZTkrQXlrMHgvb2VPNEVwMGllRCtMczF2TTRnOFNaSU00QmNSYkJNMENjMnpybkhCRG5BdHhKNE5LdWZOUDBSUjdFdVEzbzJVRDZkMnFFZTZZdHpmUUhpU09GZnZoMGcyTHNZVWgrSGZPUVVXNWVoOUNqV3AxR2ozTDBSOElERG01Z3BJOHVUZHc3WTc1ajA3RExCeXVQU0huTldLa3VWNHNVcm01OWpWYWVTZTdMRS9odW10VzB5N2p2QTRvVUp0STRVOGhMNFdrZHdXTzZvREtCUTYydlNkWDlCUUNldW1LUUloRkpGZlB6ZjBQeUw2TkRTQjd3T2pwZkJDNVZ3NytyclBJT29LL1dibzd3VDhCYWNYUUNkUERNcWZCZ3dqSnRTYUsrb0Y2dFB3elVVMXVITnpLeEc4YjhvNk5JUTE3M3JPZzVBNXVpVE5Uc2E0UytHdUxqWUt1c1FQc3g4ZjNQZ3pvNERmSkpzYndUN3dzUU9oQW8rSDZxREYzd2RhSkRETFhlb0xPNmVROEU4dTBvOVZzQzcvM1ZZRnRKSjgyeld5R1VxTjZpRG1mNzFQWURRdXJRWEw1VnNoK05va21jYmtqaWhaaTdoOVMzbzBOWXY2Nmp2ZWtRelJPdktTK1hMMXZuZkFBQXlYb2hyOWNDK21MOGNOcnlFbmlVcW8wL09hekQyM3JwUkpTWHkzTUNya21iYnF1UTN6NEg4NG4yemJjeWtoemtuMFl3TGgwWVpoRHNaZVV3VHVJVHE0ZW9GajR0emNVOVJMMGJIZnliUXlnbUoxMDZuVHFSaVZSSW8xSzlBc0NQRFpXbjQxZDJGWFlOOUFJUzcwUjI1M1lmQU5xZFlSTGlpa1kvdGQ3c2ZwTHMxLzZDNUg4U3EyMHFjZDBKdWdkQkpsV1E2L040M2trbjNkbjZPdWplT3lZbGtuNXlmMzMvWEpyOHRnSXhyY2tRZEZGOURYcUhDYlM5RnduQXhmUis0SUFsaVJmejBxUE1aSDVadzRWQWl6MFQzbFNwUFBEcTZCNDZURis4bmtnd0NveWVadjh0SlBpVjAwME0zNHR5cmJ3YndBMnhRMGtsTjkydzZ6TUoya3BxOEhqT1FSMmNUdkpNK3RnU2o2VGNEK285VU1JUFhVbjlSTGhKVmVjSEljbDU4SG9BdzBTNXIwSDZUQnFWK3RZTWJGbnFDRUlOckhZay9lNHBxcjg1VmNKbkFadS9ueGRXdzBkQWltYWdxY3BDOGZaZ0tpZ25PYmZMMmNVUDRqOGx5UW9BU0o3ZjhJMm5weW5qVnNON2ZGZFFHZ1d5ZHNjcWorZElXdGNldG0weU5EWDdkZWVDbDNiNVMwME55Vjh2VnhkZUhEKzJ2N0wvRWtndlJHYy9sRXdEVjdndkVGSTdEWmdrdlp4UDlEekgrK3RFWGRucjk5TUFxYWtYS2xFL3VsS3ZKcHFjRFRvbFRmN1JId1RKQ1MyMElpWTVnTVp2YkZOWFMzSGlEM04vWmZGUm9sNFEvZFQ2UDJsWjkyWmNyaDBCUHQySzBIMjVGZmtsWXBBNVMvejMvMXBTNmVMa2VZMk9XQWVSRWNLYlNKNGYrem14SW9MSVQ4eHdwcHJrNU00VlRQQnZncnFkTHd3U0F3bUFLUC96Y1FQdzA0M3NkUFp6QU5OS0xxSy9mbUpmZmZIYXBCZk81bWR2ZFk1dmFIMGRObHpVdEx6K2FHL2xyc2RIZzNORDlmOUM0TEd0MzlOTnVxamJwZ3RucFpKYWJFVU80L0Q1QXA3ZFV0QWFCK01lVUVnd1FOTS83bmJ2bTJITzR0R0RFcWJUTVQ2azhJWGJjWjRtUExhTWJRRHROdWh0Lzkxc0tLa1VINkpMeitxekFoMEZCM1RndkFieFd3Qm1vL3hTSlNCOFlWZHVWem5KcWQwcjVtQTYrSGNLdlRyRHdkckp4RldzNnZscGlqcHE5dFVXSHd2aHA0ZTVWc0t4alBUcG9USXU0SnNRb3oyNitLUWlnZGtNSDFHdDhubEQ1YnZKU09JTVorNmpjRXQwS01YbEhrRE9lNzE2ci9hZUU2VTM2S0twZlA1UEFQNGRtbjFHVXIrcG5aRG5lZkF0cGVYU3c4dlY4aHpJbTRBT244NUozN21RZEI4L2orZHQ2ZjNQSkZLaGVyMStOYWdmR1RJTG9YOWZtbllCc0JHSTFlZDQzZDJWdTJkaXg5T2tNUkw2K1NJZkIyTU5aeGIvM21wTUZER0ZJU3RMT0hza0ZST2ZHYlZtU3RtVmF2MzVnRzdvT2pXWk9BbGFnWE9maVl6ems5cEJSZWNVV2J4ZndFZFQ1dDBlTUR6MHEvdVdGcTRlY1A2RzZYWURSbEpsbFhkNGo5OEZjVkhzMU1UUGw5UVhacWJuMjZLNEpKMTVWRzl6bktzNTR0Ym8wZ1I1ZCs2RkFxK1lSTDJOa283SmFEYjRNS1I3TWRUN3hNZjVhdU8xa29Ja2JYVW5kMVpZY0srQThDMEFRY3dYYjFvZW94WC8xMUw0QjFoVkhrcHArb0I3QStFVFErYmZKODNlYnU1R1JhODZscFNSRDUvYUZUUTdiUi9YYjB0c2tpdXhlSmwvYUVXMVowYkh4N2kxMVBPKys0bHd4NlVqTWhFUmJvZVBUREJvS1RTa3ZhRytaaXpEbEtYdE9VZWEybHRidkVuQ3E0Y1hvN0FzZG1ncnBzWXhjd3VBdUJnemlTZ1NhSm9MeklUUWUwcjEwa00zVW9ha1JDdm93enE4VFpYdzVTQ2UwcU5jU1FoSjl4RnlOVGg0NmhjdUNHNkZjQitHVUVDWWRMMzFZcGdPdXozeHloYS9EZUkvVW1ZWm0wRG9aYVY2NlNYeHNxeDM0U3huRHptSFg1RndMQ1pKU2cySkt3SDhOSnAycEtsWFNvUytrUzFNM3paTTN0MTBUNmJUdUNOTVNyKzBTdlhTSGtoUDZUNDlUZExEbDJxa3hLMERJT3FtL2RwLzdnanFjSWo3azRSdHAvOEt0QS9SaG5QNmlpR25hcWoxRGJnOE9PUE9Gd1ZvbXF5VUs0c3Zsc2VieWFGOXBIb0MvenlYbTd0cnRhanBHNDRLK2pxRXo4VU9EUm9RNG1ZMkFIazVHdjZ0QjNUZ3ZQNlhwQ3hUanhsNWRHK0hkWGhicFZwNW1haGY2Vk91SkN3QTdsTWJLV054cXZnRHJWMkZEbUpWM0V0ZXJ0RC9SYmxhbm9oV2JxL0JNamFaU3pjQklCc1F1eVVYQXk5Yi9ZTlpoUDcxZXl1THo0bVhZejJLaFQyZlE4RGZ3V29Zdm1GV1RjSVFpa010cW5UdS9SZno0cUdpOFhRVW9tdmdiQjBManVuWUdTV1Z6aTZwZFBZZ1phdU40RHl1QmZtUXFEaERKcU1KZkxyelc2OHNYdUlqVmlvclR3QTJ0UEliZW5MUXkyUGR1RmJDRXhsQU93cmY5T0daZm9BQnNobGtPZ3pBdXg5T3J5Z1N2V2FZQUZDcWx4NWFyMVpmTCtxUFd1TEhvU3BZd04zTUJPL2RxRVByT2M3VlJMNnJwVm1aVkZHamM1QWxybDJwMVArNlhDOWZ2cEd5ZEhmeTNiUHlnOVhGWXExYXVablE2MkxpcDdSNGt1K1pMY3lXTmxKV2tnM0N2UTNDQ1F6NTBoRjRvbnpqbG5KbDRkbHBYL2hlazR4KzRzQzI5Nmt1L1lDU1N2bjlsZjA3Z0NGaXZFNjdEMEw2WHVyclZ2TS9QNFIvZDZteThJcTRiZXg2SytPNTNOeTdLTjZNSVZiOU1hTE9PVjE5QTE4dDVQSFBRK2E1aHVoWjdGdmF0N05VTGIyd1ZGbDg1d09Way8rSXFyOEZWWDlMdWJMNHdYSmw4YTE3cTRzdk9GQTVNTkNMVTFMMmF1ODVrcTdIcWsvWllVaDZYYS9CTVA3c2VwbS9EQ01hZGdEWTlIN1VkQXJSeS9hM3oyQTIxbFhqdUVTNFkvV0ZHeEhmRXlTWmtSTGI2Y1JteTdxUFlDVktyMWNlSFJmR0lnM0VqKyt2N0w4a3hNcU5hdmlYZ0hnNGg1L29BTTBJOFArM21DMStjeU9KUkdRTDJZODBxc3VmQS9EanJVTkpPaGgyZmJ2T2grR1Y1Y3JpbjI0cm5QRVhGL0NDdnU3eDFtdFV2UnI1dmJyM3pGUFYrNTljbC84MWdFK0tKNVdnbk4xOFA2dmNlMUplMDVQWnd1eVh5cFhGRHdKNFVZcXlkTlViTHhmdzNyM1ZoWC9ZVzducm5ic0xlejQvYU5iYXJ4MTJyeWo3dFVWSnVmSnllUTQxLzl3Ry9SUDMxaGIrRjRCVUsvSTV6aDB1THkyOFRjQ2ZZYmpuZ05ZazZJM2xTdW1xL2ZXRk44L2s5bnduZmcvZGUvb2t2YVRmTDFjV2Q0RjRVZHI4aGlrajBOSTFnSHYvUlp3L01zejFhd3BCNnFBT1RpL1hxamVHV25rNWhLdlpIYWllZ0pwckdvV29MNVNxQysvTjVRdHYzTW1kbFkza3Jib2VLK3B4cmY0bmtvZ2tyUmNQNlg2QklSRjVsV0o4d0hOQ08rRitxMGtIZ0tLYWcxN245WkdrTUIrTGlkd3VldXYvZGN0SzRCbjdhdnZlc2p1L082bXprM2g2RXhQQmJwU0pES0F4S0s4cHBCKzFCS0IrRVM1cVJvTG8wYkgxNit3azhRaU9URmVYcXpNSXc2YzBzUHc4UVk4ZzF6U00xQysxZ0M4R3lMeWQ1TENxL1IzTWNLYTZXRmw4QitDZjBGSU5IMHBDUUdCRzBKc2VxSjY4ZnJHMitQcnR1ZTJmdjVBWHJvbTFtVlNzY1ZSSHQxZnJEenp1UlBYNEx4SzhEcXNCczJOWkprZlFDb0czWHpKOXlVQzNoMGtncWYyVnhiYzNwT3RCbkxPQnBBb0NYeURoK25KbDhSLzNWUmYvaXZuc2JUT2N1YTlmdm9QS0ZmOHVLVk5HK1h6VThGQkJsNVdyaTFkQWVoTElxd2c0eWQwbTZiTnBwUmxuVHVOdmpsZnhzd1FlbithNkxnSlFMMnlFdXJaVVhYamJsUEx2M1ZuWWVhRGZQWkpjdnJ0eTkydVdWWDBZeUVkdUlOL0VFUGhhRmxNZkhGVjZrakxsNnVJdkNQcjkxaVNpclZlQXVKaC9kVEM2Rk1MdjFXdlZpeVc5bkVORzlKR1VLOWNXbjBrd0hsb3U2VHNrQ0o4UTNWOEdRdFVUMjJOQkJWcmxiQStHRXVRbEZ6cklDd29sMSs2cnlKQU9MZ0JBRHgrUURBU1hJWlFWNlp4d29hVG5BWGhvTysvT2V1a20vbHN4REZldUJiQ1FVbndxQVBEd0hHNXhNemsvdU1BWU42Rzd0RnpaK2o4b1Z4Zi9BTUQvaUorNlRqbmF2MGs0UnVKbVpvTFBzdEVvZUFZWnA3QWhaT1RvZ3hBTUhIemc2VElJa2FmejJ5V2RCM0NIZ0VzSlhDbm8wcEhaV3duSFFmM1MzUFNsZnp1UzlLSmtwV3lwdXZqSEJINFpRNjRvdXFnSytKcUR2dWpodnBJTjlMMXdLcmhIVURXSDNQSU83QWl4S2pMbUVSekpDcG9PNjVWelZ1UjJ3UHNyU1B5NEYzNk1STng1L2ZCbEUvNWwrL1NaUDczZTZuZ1lTcFdGVndCNE05YnVzU1VyVlpQNFBTMEorQjZKcjBxODNUa3R3QVdINkhuQ2VWZHZGQnBoQWFHdkluQkJKWENPemprdUJ5R3pXWEJsT2d6ZGRycndYQWtYQXJ6WWU4MlR1Z0pBRWVCWmFDclJ0RmM4aE41V0xPejU5V0cyQS9aV0Y1NGNTaC9jZ0VpOUN5MUMvRGVSdDBPNE14dGtiMi9rR3ZmTVluYUo1RXBMM0pzdDFVclBwZlRPMXIyTURRbEhIZlhTMmVsTFJ6YUFsbXFscHlvTTM5dXlYMjYvQTFqYnJoWDd2U1Z5MWM4TysrN3ZxOTkxWlJqeW53QkUrKzVwM3FVeUdieDR0akQ3NldIeVRvTWtscXZsbXdEL2wyaE9tcE1xZkRYdlIvb29wb01iNXpoWDY1WmlyQ1A5SW9DZ1ZGbDRMY25mUnZLNmFUcHpBRzdORndvL3Y1TTc3MGtvT3Q0UVk0OEgybjBJYXlzamlhSU1TRndnNkExcWhJY29Ua0UrNXdFdmhGNUNBTWlGZ0FORFJ6THdVaVlTUDZ4T3o1cGo4WUE4QnlLb1FmS3ZVQWcrdEpGMGVrRnk1WkFPL2M5cXRmSWpCRVpoWWxFZzhBU0JUeURrR3lHT29OSTRKUEwrR3FySHl5bzlFTVY0RkRBRjhnd0JGeEM0RVBJWGdqaEx6WDBOQU8wWWxCdlkrOUpCTXZNSG94NDhBU0JUbUhwSG8xci9NVFM5U2FWOXp0SHNPWDdkTmdKWFE3aWFFT1JSUnhnZUYzRi9DSnhDRmZVcTZBWHZRdnBzQXdqb2tRR1g4d0FLVWpoTmoyMEFDb0JhZGRoUkpOLzZPQUR3eE5GaDk5S0xoVDJmTEZVVy9neWRrOU1Od0hrUTg0UUFvcmJpbC9lemduSUppL3NXbCs0NnNyZFNDZ1ZsU0Z3cEtMUEJyWkIxYWIxdjd5NFc5b3hzNy9PUURsMVFxMVJlR1hQK0ViazY3TGZ2MTZYMHhGY2MwN0ZiaG1uSERibHJDTTIydnFicDFEMklqeGJ6eGJheVliZXVRdmUyUVRleHhjeTY1MFcvN2RYZWovbXEveHJROXJ1ZCtFR0xlSUtyaGRlZ3g3WkVyNzNSNkRJTXJZOGlBZXpyc1c0Y2pHMEE3YWRaMkFyRUd6K1V1S05yRFlpN08vUUlPMzZQLzd1bW80cCszUENiVHZIVG1IWnZtT05jYmFOcDlXSUhkeHdyVlV1L0FlOC9BT0xjRFNRVmI0eFJKN0FENUk3VktoUzBaaHUxKzQ5MldodXR2eVdLcjUvZE52dUZEYVRSbHhuT1ZQZlc5NzRxREJzUFoyZUE1cVIwNzhQRTI0MERrR3NwbkYzRTJFdk9WUkZmUndwOWhFbng1OUZSbnhUYmdkaVQyaExIT2JOdzlzMG5xL2RmMFpwQXRBZm1JWWhyeWhOQW5zQmxJQzVydlYzeThHSExITTJOYy9BRUFJai9pbW4zcHh4aDdOdmxhdlZKSUo3VWRYalFaRDQrd1hyTVV1M2s5UUQrSmsyK0IzVnd1bGF0WGh0TGIxQytFWUp3MURsK29Mc2Vlam10NmQ2TDcyNUwzYXZCWHF0RGtpcXllSCtwdW5BcmhDY2kzYVEwSkxoZDRIUFZkSEhxVTdUcG9RWkFvcG40T09OR2R6TjJMZHdFTmxWcDNyNzRIa1hVd2ZuWTkzN2FYVkVIdU9FM1hjSjNsT1Z2em5GdW9OUDRqVEJYbVB1c0hGK0JUdHZRdEhSMzB0MzFGZEd0YU5Ecm5JME9ualZSYnloT3o3OXpBMmtNcEpncjNrNjVYK3ZoNGk4dFJGTmNGN1Viajg3Nmk5TmRmNzArMFhueGV1eWNYR3AxVDJ3WWNkTjVQTy9rZE1IOW9vRC9RTHJ3WTkzRSs0VmU3eFpiV3lIajErS1h2aEZrTTY4ZDlmdm1vVWVqR2ROMCtEU0VHeVdsV29TczFLcVBvL0RrSWJJamdHLzdITC9TY2JEL0h2V2FRYlhmK2IwRzEvZ0tNWEQ2WjBDSGtQeDVyN1pyNlpuN2x2ZGR2bDVaQjZhUjRob0tMbklET09pK1I4SFlYNEF1VlhodGNIWVF6ZHFpVHNoaHRZUHIxOEdQWk5YWlltL2c4SXI1cWZsdmpTaTlkWmt2ekwrSHdPK2tkQnJlVGJ4dXV1dXIxNlNEWGVlTUFnL2dIY3dIYjl5b3VVOFM1cmJOZmNqQnZhb1ZaM1VvczZrWTNYWFhyNzF4d0FjWVZKLzBHOTVIdklqelIrRDRFZ0Izb25PVms3WU8rdDNEMENLMjlHaVJRZWEzaTFQRnI0MDBWY2xCaXZ4SHArM1VZeElEWFg0SWg4NU9lbkZKcGJ3SGI4S3FvbHVhM1I5Ymp3QUFEZWRKUkVGVTl5c1UrWWs1emgxUGNjMUltSm5hOHoyQmFmZGNvd25jRG9YaGRXTW9WaC9rNG1QTXVBYk9pRWs3VXZBUU50cUJqbGxlMUFmaDI2UmVYQ3pzK2VRa3N5MFc1ditVNEp2WGxHWTA5T3NrUjBrSThsM2JDMmUrWmx3aTcxNFVDM04vVHZMMWdzS1cyN2x4ZGZ3anF6Y3ZMQTgrYXpEeitmazdYU2J6UEFEZlIrY2dPZ3JHMVU2NjhRSnZMZWFLSHg5RDJrNWtlcHZiTGtTZUVkYkR4QU1vVjNnRnBHZkdEcVVRaWVwd1J2cE1xZ0p1a0pqNVZRanlZMGdYU0tEZFRnVGRlSy91UFJOWXM2RHFtMmRYT21sSTQ0aCt3MHhFaE52MTk4ajJNU2FFQi9SWlpvTVh6Ull1M1pEWG5HRWdHV1lLVTY4VDhCYjBGcnR1V1pybUtucjc5dndadnpFT3BhSDFJT2xuOC9NM083clhFUXpSdVlMYWt0QnhKQU1vQUJTbmlsOXpRZWJaYW9iODZ0N2JQUzF3VUhWWVU1RUJpQnJhbDI4YlFpNWttTnc3V3VpZmhzNVFpY2s3ZXZGYitla3pobmFZTVN6dC9kQThQd2FoTy85RWJVblFveCtvbkhnU3NIWTg2TE5DSE5Zc2tMMDBEOGE1Q3AyNEp5STVqZU9GR0JjMUNIK1ZvM3ZoN05Uc056YXJFRE9jcWM0VjVsOEY0UThCMUxCV3BMWVZxUkY4ODFSaCtyY21QWGhHa0Z3cDV1ZHVwdmhITFhIdWVxTHJUWWQrNDZ1aU9NVmM4YlpzQnMrRGREdldpbk8zM1AyM2lNcm1CTnhZcnBTdkFkWTFlMGdOeVJDT2tTT0VEZTNyQjJHUUtDTE12cVY5TzF1ZWgxSWpxQUhpNDcxc3VjZE4xSGZQY2U2d29BKzNpeFF2WG4rRXBqSlJOcVJ1aW51NldpK3ZEVUFBZkZBcEVhM04wSTE5RDJ3VUNOaEg4SGR6MDRXWDd5ek03OTNzOHBCY25wMmUveDBIL2h4V1E1OXR3cjdVWUFRZG9QRGZaZ3Z6cjltb3g1YU5RaklzVHMvOVBzbVhBbHFNRHJmKzMxcjFSazJOT3MyWjNKN3ZaQUkrQzhEL1E2Y1pVbHhaYkl2Q1BWTDRGK1Y2K2ZKUnJ5S29OY0hZaDBuL3U3c0t1NDRsT1ZGc1BGNVEzT0ZFNHZ3SUhNa0VtT2pXVVM4Q3gzamdCbUN3T0wvOU80V25IMWhlL09Ib2gyN3pteDdYRHYyOEoybkdNdkVCVkd0RkoxdnFCVzRxN09qRGhIdnU3UFQ4bXpaN0FJaEQwaGVuNTkrZjRkVFRJYndiUUIxclYxV2JWcCtDR2dJK0daQS9NN3R0ejUrUDB1eGdJNUJjbVN2cytUOElnbWNBK3Z1V1V0WW1LY2FzUzE3U1NGZWhBRENUMy9PRDJjTDhDd0c5RWtLa3pkcEwwM1lyRUcvUEFQSERDaHMzSDlPeEVUbUlhQkVFdDBvNDJwVm5HbW9BL3BZY0xIYVhGRWorS1RHM2VLbnFXdUFYZDAzTjM1bXlmQ01ubDkvMkRSQnAzWlkybFltSWMwUFA2NEYxUmJleGkxd2FNVzVIV2cvcUFiUzFIOVY1YUd0UUJmQjVSNzUwVytITTU4OU56MjBvUE5rNG1abWV1WHQyZXY0WEpkNkVwcEZ5WlBNWGRRU1J1Y1drRUlSdlVmelZvSkQ1cVdKaHorY0dYeko1NW5KemQ4d1c5anlmd004SitHcnI4RllhU01lV044bVZ1ZWxMMytveW1aOGs5RFpKOTJDdHR2VTQ3MzhZTGVEV05ieGhxWHJpTmFPY1hCU25pbmM0OHUrNkRpY3VvNEN2WkF2NVJBcE8rNWNYTHZma1U3dnlTTmJ2Q2NjZDhMNGtBL1c0dVpnWEwxSHNEcCtYcE00OEFPKzlucnUvc3YrUzdoOTdlUXhxK2VKTkExdi9CaGxrSmphdVRYNEZ1allRYjl6MnNOdW1NOGxudmVzR2wwYzRTdUQ5Z1B2NVRHSHFtYk9GUGUvZWpMMkd0SkFNNTdmTi8xT2hzTzE2RWk4QThCRUlrWXA3M0hZeDdQcWtFZHNOcXNjUXdKY0J2REpBOXVsejIvYTh2Y2ppL1VQY3pzUm9EU1IvTzFYSVBRM0N5d0I4Q1d0Rm05MzFOU3BSNS9wcEVQZEhaajdqaWg1UnpCVnZtNTIrOU9YTUJ0Y1NlcFBRRm1XTysvN2p0c2hwcjRIQWw1ZXJpNys2d1RLc0preEs1RnRpOXgvbE43anZFRTQ0Nkk5M2NkZTlnL0tSNU1JR24wTmdwaU9GOVQveEVuMmpVRmd6YUcwYWN2d1VtcEdQMm9mUTJmLzIrcHVDUEtpSGhsenBNR25wRzVDaDZhU2pYeDY5Nmt1dGZ5ZTZSVGhwWi9KdzVEMitHWTJGYUw2ZzZXemwxcExtZkFscUVEZ0c4WnNrUHhWQW41MHB6SCtIc2FET3B4T3R1SWp2ay9UMysycUxqdzA5WGtUaTZZTE83MlBzcnE3LzQvU3pvNDBUUWpnbTRuT0UvakZmMlBiSkhkeVJhQjlvSzlIcS9ONStueGJlZDZMbW5pWDVYd0IwRmNGcHJBMHIxcS9Pb25iYzczdDMzZldxWHcrZ0ptR1J6bjBwM1YwTXo5elUzRGNCZlBQdXl0MXZYVUh0cHp6d3MydzZEZS93enhzclk3OUJKY243RjNWcVFjTHplNUVUOUQ4WGE0dTN6ZWZuUHpaa0doM01GZWJLNWVwZEw1WDRiZ0RGcnA5N3JoUWxuQ1J4YzdHdzV5Tko4dGhmM3o4SDRNWlltc0phOFRtNy9vNEduUWJKejF5SXVhUFlJbVR5bVM4MXFpc2ZCZlRjYUN1a2E3RHJqdk1xQUlwOGtIdnA0WkpjNUptb1Z4NGtWYW91Tk5wRFltZmI2OWQrb2hYb3FTeXlkUUFkSHBYUzNtZFNKaTQrTFZWTHM1TC9Cd0tYUTZvQ0RBUzRWaGloeUZBOTNwRGlmMGRsanV5TFNERGV1UW5OUVRLazJCQzFCTEJLNlpUSWd3NjZnM1RmOG81Zm5aMmFMWjJ1ZytZZ3l2WHk1ZkRoNHlSY0tlRFJnR1lwbmlGcVcwcG4rczBKaDNnS3dBRUFYNlhqRitpQ0wreWUybjNISkp3aVRJcGpPblpHcFhieU1WNjRHdEExQUI4bTRWeFEwK3ZVV2JTYVNpckpxVU80SDhBUkVDVkJDMDVjOU9DQlRNWXZ6a3p0dVhPejlvM3YwOEpacCtwNHRQZDRGS0JIQW53WWhCMUR0Qm0wTko2UEVqd0k2UTdTZlVmeXAwQStEY0N6aGl4aWMxQVJ2aE1FbVdjVjg4WEZnVmNrWkc5OTd3K0hZZU5WZ0c3b2lwQVNwdzdnODA3ODQ5M1RjN2NramNCMHNMcFlySHYvVGhIWFFLZ1R6SWhxVHlSYWcwOFVFelFhTW1vZ2FnRHVVSVlUYzl5U2xNWGx4YXZZMEorcnVhb1dnYXlrYk9UYVVZQkRNMHdhS0RiUU5BV1V3Q3lCZjhDMCsrWEl3WHc4M2ZoQXQ3K3krSmdHOUwvUmpDd1ZFZ3drQk0zd2JYU2lNaEJGUUlBYUFrTVFOVWUrczVpZis4UDRBUDJnR2tBQm9MeGNmcVFhalNlUXJzTG1aanhDd0JFS1ZtY3owcXBOVDZTVzNBelQ0d0dDSU1PMldqUVZNSFJTQTBBTlVoWEVpY0R4V09CNU1zaWpGaUovYWlzcEJFMktvenE2ZmJsK2F1ZUszQTdJN3lTNFU5Q0ZoSFo0OFZ5MDNKa1JXQVpSWjlNRjNoSEFIZkhFQ1NkL0R6S1p2YmxzYnYvRnVQamVVWVZ1MjhwSXl1eXI3OXZ0NVhjN2FNYkw3eURjTHNFWEFaNHY0UXhDR2JBMStVT3pIUW9NS2EwQXFJRTRCZUE0eEhzSjNpM29FQVBzQTRQRnpGVG02Q1c0NU5SVzJOZnFoU1IzQkF2blY2dkJISUJaSUx4SXdvWE50b01MU1cwVG1DRVVRcXlEV0lKd2d0UTlBQThCS0h2SDI1amprVm5Nbm9vbVdpV1Z6a2JGdncvRXNKNXBXaXN6ZkM1ZktOeTRrenZ2R2RFdFE1TGJWMTE0bkFjZUQzSU93aVVBemdKMHZEbG84NHRuNVBEdjUzTFBpWUdKZGJHdnRtK1A5OHNQODNCWjBrKzM3cVFtT08rb3JBY0RCelVrRndJaENkUkJuQ0N6NWQyNTNhVnhlOU1aaHYyMWhjdENqNGRSWEZiZ0drRFlua1F5cFBQTmNJeGl3R1ZCbnFEem9jOU9CYnJqa3R6OEQzbzVrKysrendPMWhZZXNoTzV5QnI3QjVuT1g0RUtDSk1JQUlhbEFvU0xMRHFHZXorZHZpeVJpdy9pVFRzdFdVZUF4UmtUU1daZWs3QkVjbVpyQ1VnWUFRcHpwYTZnMWRtSFh5cGlNMTdjMGcxNDJTVHlFUXdXQzIxU3JGR3BrSVV0Tk5lZ0NBQWdVTnFoY2paNjFUS0cyUEFYV2x6QzF2QXU3bHJmNlNqMUZtM0dIY0NoZlIzMHFnNHp6OENxZ3NMS0VwY1lzWmh0SjJzMisrbDFYTmtMK1M5ZWVZS0ppSWliK3BQU3U0dlNlbDQxanhTNkpaWlJ6MjdBdGN3RXVXSG13U3FvMm16U1JZYllxRXg5QXU2TUVBS2RueFJtR2taejRlNyszc3ZnY0QvMDFWbU9JZHU4ZDkwMEdxOHB4SlBqZlo2Zm4zelNPTW80eVRXQzFqMXR2MzIrVStVNlNYdmUwMGZ2cE5iajJDdDIyMmZXMmFTdlFYZzFyblJoeGE4THY5RHRuSzFTcThaOFhhMytEa2NSeWJmRTFFRjZEOURhWTdaV29vRlBPOFdkbTgzdHVHVXRCRFdNQUpzSTFER1BpbEZUS28rcmZEZUJua0h3RkNuU3VRcDJnQTBHUWZXb3hWN3g5VEVVMWpMNU0zQTdVTUF4ampuTTFGTndyMFhSTEdkZXlIMFRjM0UwRWQ0Vmg0NjBqOTFSa0dBbXdBZFF3akUxaGpuT0huY01yQlozQ0J1eS9DVHo1Z2RySk42WU5ibTBZRzhVR1VNTXdObzFtZkYzMzIwSkhsS2EwcTFGQitJVnliZkUzUjF3OHcxZ1gyd00xREdOVGtaUXBWUmJmUWVJbDhjUG80dzJvRHdTd1JPRG5acWYzZkdEa2hUU01IdGdLMURDTVRZVmtZMm82OTFzU1BoRS9qRlhQWkJ6d2lRYmJiVjc0dlZLMU5EdkI0aHYvaWJFOUE4TXdOcDFkM0hYdnZxVjlMMnhnNWRVQUhnT2hRQ0lMWUFyUWxNUXNFSGtlb3dpRW9MekFrTkJLMC8wZE13UWM1UjhKb0F5WVdaRXhYa3lFYXhqR2xrRlM5bUQxNE1WeXRjSXl5Q3prUFROWlVibWc0Yk1OMEFYeVlaaDFLMnk1K2d3VU5rSUVqUUJoUnBBS1UyZnR2WUFYbkdxbFp3T29ZUmlHWVJqR1ZzSldvSVpoYkNuU3VJWXoxNkNHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmlHWVJpR1lSaUdZUmpHaVBuL0pJUzNtYlk3bXJNQUFBQUFTVVZPUks1Q1lJST0nIGlkPSdpbWdfMScgLyUzZSAlM2MvZGVmcyUzZSAlM2NnIGlkPSdpY29uJyBmaWxsLW9wYWNpdHk9JzEnJTNlICUzY3BhdGggZD0nTTYxIDBMNjEgMEw2MSA2MS4yMzA0TDAgNjEuMjMwNEwwIDBMNjEgMFonIGlkPSdpY29uJyBmaWxsPSdub25lJyBzdHJva2U9J25vbmUnIC8lM2UgJTNjcGF0aCBkPSdNNTIgMS4yMzAzOEM1Ni40MTg5IDEuMjMwMzggNjAgNC44MTE1IDYwIDkuMjMwMzhMNjAgNDMuMjMwNEM2MCA0Ny42NDkzIDU2LjQxODkgNTEuMjMwNCA1MiA1MS4yMzA0TDggNTEuMjMwNEMzLjU4MTEyIDUxLjIzMDQgMCA0Ny42NDkzIDAgNDMuMjMwNEwwIDkuMjMwMzhDMCA0LjgxMTUgMy41ODExMiAxLjIzMDM4IDggMS4yMzAzOEw1MiAxLjIzMDM4WicgaWQ9J1JlY3RhbmdsZScgZmlsbD0nJTIzMDAxOUE3JyBzdHJva2U9J25vbmUnIC8lM2UgJTNjZyBpZD0nR3JvdXAnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDAuOTk5OTYxODUgMCknJTNlICUzY3VzZSB4bGluazpocmVmPSclMjNpbWdfMScgZmlsbD0nJTIzRkZGRkZGJyBzdHJva2U9J25vbmUnIHRyYW5zZm9ybT0nc2NhbGUoMC4xMjkzMTAzNSAwLjEyOTA0MzgpJyAvJTNlICUzYy9nJTNlICUzY3BhdGggZD0nTTM5IDUxLjIzMDRMNTEuMTQyOSA2MS4yMzA0TDUxLjE0MjkgNTEuMjMwNEwzOSA1MS4yMzA0WicgaWQ9J1ZlY3RvcicgZmlsbD0nJTIzMDAxOUE3JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIHN0cm9rZT0nJTIzMDAxOUE3JyBzdHJva2Utd2lkdGg9JzEnIC8lM2UgJTNjL2clM2UgJTNjL3N2ZyUzZVwiIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwidmFyIG4sbCx1LGksdCxvLHIsZixlLGM9e30scz1bXSxhPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2ksdj1BcnJheS5pc0FycmF5O2Z1bmN0aW9uIGgobixsKXtmb3IodmFyIHUgaW4gbCluW3VdPWxbdV07cmV0dXJuIG59ZnVuY3Rpb24gcChuKXt2YXIgbD1uLnBhcmVudE5vZGU7bCYmbC5yZW1vdmVDaGlsZChuKX1mdW5jdGlvbiB5KGwsdSxpKXt2YXIgdCxvLHIsZj17fTtmb3IociBpbiB1KVwia2V5XCI9PXI/dD11W3JdOlwicmVmXCI9PXI/bz11W3JdOmZbcl09dVtyXTtpZihhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGwmJm51bGwhPWwuZGVmYXVsdFByb3BzKWZvcihyIGluIGwuZGVmYXVsdFByb3BzKXZvaWQgMD09PWZbcl0mJihmW3JdPWwuZGVmYXVsdFByb3BzW3JdKTtyZXR1cm4gZChsLGYsdCxvLG51bGwpfWZ1bmN0aW9uIGQobixpLHQsbyxyKXt2YXIgZj17dHlwZTpuLHByb3BzOmksa2V5OnQscmVmOm8sX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2Q6dm9pZCAwLF9fYzpudWxsLF9faDpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMCxfX3Y6bnVsbD09cj8rK3U6cn07cmV0dXJuIG51bGw9PXImJm51bGwhPWwudm5vZGUmJmwudm5vZGUoZiksZn1mdW5jdGlvbiBfKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19ZnVuY3Rpb24gayhuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiBiKG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIGcobixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP2cobi5fXyxuLl9fLl9fay5pbmRleE9mKG4pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/ZyhuKTpudWxsfWZ1bmN0aW9uIG0obil7dmFyIGwsdTtpZihudWxsIT0obj1uLl9fKSYmbnVsbCE9bi5fX2Mpe2ZvcihuLl9fZT1uLl9fYy5iYXNlPW51bGwsbD0wO2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXtuLl9fZT1uLl9fYy5iYXNlPXUuX19lO2JyZWFrfXJldHVybiBtKG4pfX1mdW5jdGlvbiB3KG4peyghbi5fX2QmJihuLl9fZD0hMCkmJnQucHVzaChuKSYmIXguX19yKyt8fG8hPT1sLmRlYm91bmNlUmVuZGVyaW5nKSYmKChvPWwuZGVib3VuY2VSZW5kZXJpbmcpfHxyKSh4KX1mdW5jdGlvbiB4KCl7dmFyIG4sbCx1LGksbyxyLGUsYztmb3IodC5zb3J0KGYpO249dC5zaGlmdCgpOyluLl9fZCYmKGw9dC5sZW5ndGgsaT12b2lkIDAsbz12b2lkIDAsZT0ocj0odT1uKS5fX3YpLl9fZSwoYz11Ll9fUCkmJihpPVtdLChvPWgoe30scikpLl9fdj1yLl9fdisxLEwoYyxyLG8sdS5fX24sdm9pZCAwIT09Yy5vd25lclNWR0VsZW1lbnQsbnVsbCE9ci5fX2g/W2VdOm51bGwsaSxudWxsPT1lP2cocik6ZSxyLl9faCksTShpLHIpLHIuX19lIT1lJiZtKHIpKSx0Lmxlbmd0aD5sJiZ0LnNvcnQoZikpO3guX19yPTB9ZnVuY3Rpb24gUChuLGwsdSxpLHQsbyxyLGYsZSxhKXt2YXIgaCxwLHksXyxiLG0sdyx4PWkmJmkuX19rfHxzLFA9eC5sZW5ndGg7Zm9yKHUuX19rPVtdLGg9MDtoPGwubGVuZ3RoO2grKylpZihudWxsIT0oXz11Ll9fa1toXT1udWxsPT0oXz1sW2hdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBffHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBfP251bGw6XCJzdHJpbmdcIj09dHlwZW9mIF98fFwibnVtYmVyXCI9PXR5cGVvZiBffHxcImJpZ2ludFwiPT10eXBlb2YgXz9kKG51bGwsXyxudWxsLG51bGwsXyk6dihfKT9kKGsse2NoaWxkcmVuOl99LG51bGwsbnVsbCxudWxsKTpfLl9fYj4wP2QoXy50eXBlLF8ucHJvcHMsXy5rZXksXy5yZWY/Xy5yZWY6bnVsbCxfLl9fdik6Xykpe2lmKF8uX189dSxfLl9fYj11Ll9fYisxLG51bGw9PT0oeT14W2hdKXx8eSYmXy5rZXk9PXkua2V5JiZfLnR5cGU9PT15LnR5cGUpeFtoXT12b2lkIDA7ZWxzZSBmb3IocD0wO3A8UDtwKyspe2lmKCh5PXhbcF0pJiZfLmtleT09eS5rZXkmJl8udHlwZT09PXkudHlwZSl7eFtwXT12b2lkIDA7YnJlYWt9eT1udWxsfUwobixfLHk9eXx8Yyx0LG8scixmLGUsYSksYj1fLl9fZSwocD1fLnJlZikmJnkucmVmIT1wJiYod3x8KHc9W10pLHkucmVmJiZ3LnB1c2goeS5yZWYsbnVsbCxfKSx3LnB1c2gocCxfLl9fY3x8YixfKSksbnVsbCE9Yj8obnVsbD09bSYmKG09YiksXCJmdW5jdGlvblwiPT10eXBlb2YgXy50eXBlJiZfLl9faz09PXkuX19rP18uX19kPWU9QyhfLGUsbik6ZT0kKG4sXyx5LHgsYixlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1lKSk6ZSYmeS5fX2U9PWUmJmUucGFyZW50Tm9kZSE9biYmKGU9Zyh5KSl9Zm9yKHUuX19lPW0saD1QO2gtLTspbnVsbCE9eFtoXSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmbnVsbCE9eFtoXS5fX2UmJnhbaF0uX19lPT11Ll9fZCYmKHUuX19kPUEoaSkubmV4dFNpYmxpbmcpLHEoeFtoXSx4W2hdKSk7aWYodylmb3IoaD0wO2g8dy5sZW5ndGg7aCsrKU8od1toXSx3WysraF0sd1srK2hdKX1mdW5jdGlvbiBDKG4sbCx1KXtmb3IodmFyIGksdD1uLl9fayxvPTA7dCYmbzx0Lmxlbmd0aDtvKyspKGk9dFtvXSkmJihpLl9fPW4sbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpLnR5cGU/QyhpLGwsdSk6JCh1LGksaSx0LGkuX19lLGwpKTtyZXR1cm4gbH1mdW5jdGlvbiBTKG4sbCl7cmV0dXJuIGw9bHx8W10sbnVsbD09bnx8XCJib29sZWFuXCI9PXR5cGVvZiBufHwodihuKT9uLnNvbWUoZnVuY3Rpb24obil7UyhuLGwpfSk6bC5wdXNoKG4pKSxsfWZ1bmN0aW9uICQobixsLHUsaSx0LG8pe3ZhciByLGYsZTtpZih2b2lkIDAhPT1sLl9fZClyPWwuX19kLGwuX19kPXZvaWQgMDtlbHNlIGlmKG51bGw9PXV8fHQhPW98fG51bGw9PXQucGFyZW50Tm9kZSluOmlmKG51bGw9PW98fG8ucGFyZW50Tm9kZSE9PW4pbi5hcHBlbmRDaGlsZCh0KSxyPW51bGw7ZWxzZXtmb3IoZj1vLGU9MDsoZj1mLm5leHRTaWJsaW5nKSYmZTxpLmxlbmd0aDtlKz0xKWlmKGY9PXQpYnJlYWsgbjtuLmluc2VydEJlZm9yZSh0LG8pLHI9b31yZXR1cm4gdm9pZCAwIT09cj9yOnQubmV4dFNpYmxpbmd9ZnVuY3Rpb24gQShuKXt2YXIgbCx1LGk7aWYobnVsbD09bi50eXBlfHxcInN0cmluZ1wiPT10eXBlb2Ygbi50eXBlKXJldHVybiBuLl9fZTtpZihuLl9faylmb3IobD1uLl9fay5sZW5ndGgtMTtsPj0wO2wtLSlpZigodT1uLl9fa1tsXSkmJihpPUEodSkpKXJldHVybiBpO3JldHVybiBudWxsfWZ1bmN0aW9uIEgobixsLHUsaSx0KXt2YXIgbztmb3IobyBpbiB1KVwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxvIGluIGx8fFQobixvLG51bGwsdVtvXSxpKTtmb3IobyBpbiBsKXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbb118fFwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxcInZhbHVlXCI9PT1vfHxcImNoZWNrZWRcIj09PW98fHVbb109PT1sW29dfHxUKG4sbyxsW29dLHVbb10saSl9ZnVuY3Rpb24gSShuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCxudWxsPT11P1wiXCI6dSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fGEudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIFQobixsLHUsaSx0KXt2YXIgbztuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG4uc3R5bGUuY3NzVGV4dD1pPVwiXCIpLGkpZm9yKGwgaW4gaSl1JiZsIGluIHV8fEkobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSlpJiZ1W2xdPT09aVtsXXx8SShuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlvPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBuP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrb109dSx1P2l8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLG8/ejpqLG8pOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLG8/ejpqLG8pO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCl7aWYodClsPWwucmVwbGFjZSgveGxpbmsoSHw6aCkvLFwiaFwiKS5yZXBsYWNlKC9zTmFtZSQvLFwic1wiKTtlbHNlIGlmKFwid2lkdGhcIiE9PWwmJlwiaGVpZ2h0XCIhPT1sJiZcImhyZWZcIiE9PWwmJlwibGlzdFwiIT09bCYmXCJmb3JtXCIhPT1sJiZcInRhYkluZGV4XCIhPT1sJiZcImRvd25sb2FkXCIhPT1sJiZcInJvd1NwYW5cIiE9PWwmJlwiY29sU3BhblwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsPT11fHwhMT09PXUmJlwiLVwiIT09bFs0XT9uLnJlbW92ZUF0dHJpYnV0ZShsKTpuLnNldEF0dHJpYnV0ZShsLHUpKX19ZnVuY3Rpb24gaihuKXtyZXR1cm4gdGhpcy5sW24udHlwZSshMV0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIHoobil7cmV0dXJuIHRoaXMubFtuLnR5cGUrITBdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBMKG4sdSxpLHQsbyxyLGYsZSxjKXt2YXIgcyxhLHAseSxkLF8sZyxtLHcseCxDLFMsJCxBLEgsST11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLHI9W2VdKSwocz1sLl9fYikmJnModSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgSSl7aWYobT11LnByb3BzLHc9KHM9SS5jb250ZXh0VHlwZSkmJnRbcy5fX2NdLHg9cz93P3cucHJvcHMudmFsdWU6cy5fXzp0LGkuX19jP2c9KGE9dS5fX2M9aS5fX2MpLl9fPWEuX19FOihcInByb3RvdHlwZVwiaW4gSSYmSS5wcm90b3R5cGUucmVuZGVyP3UuX19jPWE9bmV3IEkobSx4KToodS5fX2M9YT1uZXcgYihtLHgpLGEuY29uc3RydWN0b3I9SSxhLnJlbmRlcj1CKSx3JiZ3LnN1YihhKSxhLnByb3BzPW0sYS5zdGF0ZXx8KGEuc3RhdGU9e30pLGEuY29udGV4dD14LGEuX19uPXQscD1hLl9fZD0hMCxhLl9faD1bXSxhLl9zYj1bXSksbnVsbD09YS5fX3MmJihhLl9fcz1hLnN0YXRlKSxudWxsIT1JLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGEuX19zPT1hLnN0YXRlJiYoYS5fX3M9aCh7fSxhLl9fcykpLGgoYS5fX3MsSS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobSxhLl9fcykpKSx5PWEucHJvcHMsZD1hLnN0YXRlLGEuX192PXUscCludWxsPT1JLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbnVsbCE9YS5jb21wb25lbnRXaWxsTW91bnQmJmEuY29tcG9uZW50V2lsbE1vdW50KCksbnVsbCE9YS5jb21wb25lbnREaWRNb3VudCYmYS5fX2gucHVzaChhLmNvbXBvbmVudERpZE1vdW50KTtlbHNle2lmKG51bGw9PUkuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZtIT09eSYmbnVsbCE9YS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZhLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobSx4KSwhYS5fX2UmJm51bGwhPWEuc2hvdWxkQ29tcG9uZW50VXBkYXRlJiYhMT09PWEuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG0sYS5fX3MseCl8fHUuX192PT09aS5fX3Ype2Zvcih1Ll9fdiE9PWkuX192JiYoYS5wcm9wcz1tLGEuc3RhdGU9YS5fX3MsYS5fX2Q9ITEpLGEuX19lPSExLHUuX19lPWkuX19lLHUuX19rPWkuX19rLHUuX19rLmZvckVhY2goZnVuY3Rpb24obil7biYmKG4uX189dSl9KSxDPTA7QzxhLl9zYi5sZW5ndGg7QysrKWEuX19oLnB1c2goYS5fc2JbQ10pO2EuX3NiPVtdLGEuX19oLmxlbmd0aCYmZi5wdXNoKGEpO2JyZWFrIG59bnVsbCE9YS5jb21wb25lbnRXaWxsVXBkYXRlJiZhLmNvbXBvbmVudFdpbGxVcGRhdGUobSxhLl9fcyx4KSxudWxsIT1hLmNvbXBvbmVudERpZFVwZGF0ZSYmYS5fX2gucHVzaChmdW5jdGlvbigpe2EuY29tcG9uZW50RGlkVXBkYXRlKHksZCxfKX0pfWlmKGEuY29udGV4dD14LGEucHJvcHM9bSxhLl9fUD1uLFM9bC5fX3IsJD0wLFwicHJvdG90eXBlXCJpbiBJJiZJLnByb3RvdHlwZS5yZW5kZXIpe2ZvcihhLnN0YXRlPWEuX19zLGEuX19kPSExLFMmJlModSkscz1hLnJlbmRlcihhLnByb3BzLGEuc3RhdGUsYS5jb250ZXh0KSxBPTA7QTxhLl9zYi5sZW5ndGg7QSsrKWEuX19oLnB1c2goYS5fc2JbQV0pO2EuX3NiPVtdfWVsc2UgZG97YS5fX2Q9ITEsUyYmUyh1KSxzPWEucmVuZGVyKGEucHJvcHMsYS5zdGF0ZSxhLmNvbnRleHQpLGEuc3RhdGU9YS5fX3N9d2hpbGUoYS5fX2QmJisrJDwyNSk7YS5zdGF0ZT1hLl9fcyxudWxsIT1hLmdldENoaWxkQ29udGV4dCYmKHQ9aChoKHt9LHQpLGEuZ2V0Q2hpbGRDb250ZXh0KCkpKSxwfHxudWxsPT1hLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHwoXz1hLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHksZCkpLFAobix2KEg9bnVsbCE9cyYmcy50eXBlPT09ayYmbnVsbD09cy5rZXk/cy5wcm9wcy5jaGlsZHJlbjpzKT9IOltIXSx1LGksdCxvLHIsZixlLGMpLGEuYmFzZT11Ll9fZSx1Ll9faD1udWxsLGEuX19oLmxlbmd0aCYmZi5wdXNoKGEpLGcmJihhLl9fRT1hLl9fPW51bGwpLGEuX19lPSExfWVsc2UgbnVsbD09ciYmdS5fX3Y9PT1pLl9fdj8odS5fX2s9aS5fX2ssdS5fX2U9aS5fX2UpOnUuX19lPU4oaS5fX2UsdSxpLHQsbyxyLGYsYyk7KHM9bC5kaWZmZWQpJiZzKHUpfWNhdGNoKG4pe3UuX192PW51bGwsKGN8fG51bGwhPXIpJiYodS5fX2U9ZSx1Ll9faD0hIWMscltyLmluZGV4T2YoZSldPW51bGwpLGwuX19lKG4sdSxpKX19ZnVuY3Rpb24gTShuLHUpe2wuX19jJiZsLl9fYyh1LG4pLG4uc29tZShmdW5jdGlvbih1KXt0cnl7bj11Ll9faCx1Ll9faD1bXSxuLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobil7bC5fX2Uobix1Ll9fdil9fSl9ZnVuY3Rpb24gTihsLHUsaSx0LG8scixmLGUpe3ZhciBzLGEsaCx5PWkucHJvcHMsZD11LnByb3BzLF89dS50eXBlLGs9MDtpZihcInN2Z1wiPT09XyYmKG89ITApLG51bGwhPXIpZm9yKDtrPHIubGVuZ3RoO2srKylpZigocz1yW2tdKSYmXCJzZXRBdHRyaWJ1dGVcImluIHM9PSEhXyYmKF8/cy5sb2NhbE5hbWU9PT1fOjM9PT1zLm5vZGVUeXBlKSl7bD1zLHJba109bnVsbDticmVha31pZihudWxsPT1sKXtpZihudWxsPT09XylyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZCk7bD1vP2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXyk6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChfLGQuaXMmJmQpLHI9bnVsbCxlPSExfWlmKG51bGw9PT1fKXk9PT1kfHxlJiZsLmRhdGE9PT1kfHwobC5kYXRhPWQpO2Vsc2V7aWYocj1yJiZuLmNhbGwobC5jaGlsZE5vZGVzKSxhPSh5PWkucHJvcHN8fGMpLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLGg9ZC5kYW5nZXJvdXNseVNldElubmVySFRNTCwhZSl7aWYobnVsbCE9cilmb3IoeT17fSxrPTA7azxsLmF0dHJpYnV0ZXMubGVuZ3RoO2srKyl5W2wuYXR0cmlidXRlc1trXS5uYW1lXT1sLmF0dHJpYnV0ZXNba10udmFsdWU7KGh8fGEpJiYoaCYmKGEmJmguX19odG1sPT1hLl9faHRtbHx8aC5fX2h0bWw9PT1sLmlubmVySFRNTCl8fChsLmlubmVySFRNTD1oJiZoLl9faHRtbHx8XCJcIikpfWlmKEgobCxkLHksbyxlKSxoKXUuX19rPVtdO2Vsc2UgaWYoUChsLHYoaz11LnByb3BzLmNoaWxkcmVuKT9rOltrXSx1LGksdCxvJiZcImZvcmVpZ25PYmplY3RcIiE9PV8scixmLHI/clswXTppLl9fayYmZyhpLDApLGUpLG51bGwhPXIpZm9yKGs9ci5sZW5ndGg7ay0tOyludWxsIT1yW2tdJiZwKHJba10pO2V8fChcInZhbHVlXCJpbiBkJiZ2b2lkIDAhPT0oaz1kLnZhbHVlKSYmKGshPT1sLnZhbHVlfHxcInByb2dyZXNzXCI9PT1fJiYha3x8XCJvcHRpb25cIj09PV8mJmshPT15LnZhbHVlKSYmVChsLFwidmFsdWVcIixrLHkudmFsdWUsITEpLFwiY2hlY2tlZFwiaW4gZCYmdm9pZCAwIT09KGs9ZC5jaGVja2VkKSYmayE9PWwuY2hlY2tlZCYmVChsLFwiY2hlY2tlZFwiLGsseS5jaGVja2VkLCExKSl9cmV0dXJuIGx9ZnVuY3Rpb24gTyhuLHUsaSl7dHJ5e1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih1KTpuLmN1cnJlbnQ9dX1jYXRjaChuKXtsLl9fZShuLGkpfX1mdW5jdGlvbiBxKG4sdSxpKXt2YXIgdCxvO2lmKGwudW5tb3VudCYmbC51bm1vdW50KG4pLCh0PW4ucmVmKSYmKHQuY3VycmVudCYmdC5jdXJyZW50IT09bi5fX2V8fE8odCxudWxsLHUpKSxudWxsIT0odD1uLl9fYykpe2lmKHQuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e3QuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChuKXtsLl9fZShuLHUpfXQuYmFzZT10Ll9fUD1udWxsLG4uX19jPXZvaWQgMH1pZih0PW4uX19rKWZvcihvPTA7bzx0Lmxlbmd0aDtvKyspdFtvXSYmcSh0W29dLHUsaXx8XCJmdW5jdGlvblwiIT10eXBlb2Ygbi50eXBlKTtpfHxudWxsPT1uLl9fZXx8cChuLl9fZSksbi5fXz1uLl9fZT1uLl9fZD12b2lkIDB9ZnVuY3Rpb24gQihuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBEKHUsaSx0KXt2YXIgbyxyLGY7bC5fXyYmbC5fXyh1LGkpLHI9KG89XCJmdW5jdGlvblwiPT10eXBlb2YgdCk/bnVsbDp0JiZ0Ll9fa3x8aS5fX2ssZj1bXSxMKGksdT0oIW8mJnR8fGkpLl9faz15KGssbnVsbCxbdV0pLHJ8fGMsYyx2b2lkIDAhPT1pLm93bmVyU1ZHRWxlbWVudCwhbyYmdD9bdF06cj9udWxsOmkuZmlyc3RDaGlsZD9uLmNhbGwoaS5jaGlsZE5vZGVzKTpudWxsLGYsIW8mJnQ/dDpyP3IuX19lOmkuZmlyc3RDaGlsZCxvKSxNKGYsdSl9ZnVuY3Rpb24gRShuLGwpe0QobixsLEUpfWZ1bmN0aW9uIEYobCx1LGkpe3ZhciB0LG8scixmLGU9aCh7fSxsLnByb3BzKTtmb3IociBpbiBsLnR5cGUmJmwudHlwZS5kZWZhdWx0UHJvcHMmJihmPWwudHlwZS5kZWZhdWx0UHJvcHMpLHUpXCJrZXlcIj09cj90PXVbcl06XCJyZWZcIj09cj9vPXVbcl06ZVtyXT12b2lkIDA9PT11W3JdJiZ2b2lkIDAhPT1mP2Zbcl06dVtyXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYoZS5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSxkKGwudHlwZSxlLHR8fGwua2V5LG98fGwucmVmLG51bGwpfWZ1bmN0aW9uIEcobixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIrZSsrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHUsaTtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PVtdLChpPXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LnNvbWUoZnVuY3Rpb24obil7bi5fX2U9ITAsdyhuKX0pfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXt1LnB1c2gobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dS5zcGxpY2UodS5pbmRleE9mKG4pLDEpLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuUHJvdmlkZXIuX189dS5Db25zdW1lci5jb250ZXh0VHlwZT11fW49cy5zbGljZSxsPXtfX2U6ZnVuY3Rpb24obixsLHUsaSl7Zm9yKHZhciB0LG8scjtsPWwuX187KWlmKCh0PWwuX19jKSYmIXQuX18pdHJ5e2lmKChvPXQuY29uc3RydWN0b3IpJiZudWxsIT1vLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKHQuc2V0U3RhdGUoby5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLHI9dC5fX2QpLG51bGwhPXQuY29tcG9uZW50RGlkQ2F0Y2gmJih0LmNvbXBvbmVudERpZENhdGNoKG4saXx8e30pLHI9dC5fX2QpLHIpcmV0dXJuIHQuX19FPXR9Y2F0Y2gobCl7bj1sfXRocm93IG59fSx1PTAsaT1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0sYi5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9aCh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKGgoe30sdSksdGhpcy5wcm9wcykpLG4mJmgodSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX3NiLnB1c2gobCksdyh0aGlzKSl9LGIucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSx3KHRoaXMpKX0sYi5wcm90b3R5cGUucmVuZGVyPWssdD1bXSxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LGY9ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0seC5fX3I9MCxlPTA7ZXhwb3J0e2IgYXMgQ29tcG9uZW50LGsgYXMgRnJhZ21lbnQsRiBhcyBjbG9uZUVsZW1lbnQsRyBhcyBjcmVhdGVDb250ZXh0LHkgYXMgY3JlYXRlRWxlbWVudCxfIGFzIGNyZWF0ZVJlZix5IGFzIGgsRSBhcyBoeWRyYXRlLGkgYXMgaXNWYWxpZEVsZW1lbnQsbCBhcyBvcHRpb25zLEQgYXMgcmVuZGVyLFMgYXMgdG9DaGlsZEFycmF5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5tb2R1bGUuanMubWFwXG4iLCJmdW5jdGlvbiByKGUpe3ZhciB0LGYsbj1cIlwiO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlfHxcIm51bWJlclwiPT10eXBlb2YgZSluKz1lO2Vsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIGUpaWYoQXJyYXkuaXNBcnJheShlKSlmb3IodD0wO3Q8ZS5sZW5ndGg7dCsrKWVbdF0mJihmPXIoZVt0XSkpJiYobiYmKG4rPVwiIFwiKSxuKz1mKTtlbHNlIGZvcih0IGluIGUpZVt0XSYmKG4mJihuKz1cIiBcIiksbis9dCk7cmV0dXJuIG59ZXhwb3J0IGZ1bmN0aW9uIGNsc3goKXtmb3IodmFyIGUsdCxmPTAsbj1cIlwiO2Y8YXJndW1lbnRzLmxlbmd0aDspKGU9YXJndW1lbnRzW2YrK10pJiYodD1yKGUpKSYmKG4mJihuKz1cIiBcIiksbis9dCk7cmV0dXJuIG59ZXhwb3J0IGRlZmF1bHQgY2xzeDsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zaW5nbGV0b25TdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIFxuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vZW1iZWQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL2VtYmVkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQscix1LGksbz0wLGY9W10sYz1bXSxlPW4uX19iLGE9bi5fX3Isdj1uLmRpZmZlZCxsPW4uX19jLG09bi51bm1vdW50O2Z1bmN0aW9uIGQodCx1KXtuLl9faCYmbi5fX2gocix0LG98fHUpLG89MDt2YXIgaT1yLl9fSHx8KHIuX19IPXtfXzpbXSxfX2g6W119KTtyZXR1cm4gdD49aS5fXy5sZW5ndGgmJmkuX18ucHVzaCh7X19WOmN9KSxpLl9fW3RdfWZ1bmN0aW9uIGgobil7cmV0dXJuIG89MSxzKEIsbil9ZnVuY3Rpb24gcyhuLHUsaSl7dmFyIG89ZCh0KyssMik7aWYoby50PW4sIW8uX19jJiYoby5fXz1baT9pKHUpOkIodm9pZCAwLHUpLGZ1bmN0aW9uKG4pe3ZhciB0PW8uX19OP28uX19OWzBdOm8uX19bMF0scj1vLnQodCxuKTt0IT09ciYmKG8uX19OPVtyLG8uX19bMV1dLG8uX19jLnNldFN0YXRlKHt9KSl9XSxvLl9fYz1yLCFyLnUpKXt2YXIgZj1mdW5jdGlvbihuLHQscil7aWYoIW8uX19jLl9fSClyZXR1cm4hMDt2YXIgdT1vLl9fYy5fX0guX18uZmlsdGVyKGZ1bmN0aW9uKG4pe3JldHVybiBuLl9fY30pO2lmKHUuZXZlcnkoZnVuY3Rpb24obil7cmV0dXJuIW4uX19OfSkpcmV0dXJuIWN8fGMuY2FsbCh0aGlzLG4sdCxyKTt2YXIgaT0hMTtyZXR1cm4gdS5mb3JFYWNoKGZ1bmN0aW9uKG4pe2lmKG4uX19OKXt2YXIgdD1uLl9fWzBdO24uX189bi5fX04sbi5fX049dm9pZCAwLHQhPT1uLl9fWzBdJiYoaT0hMCl9fSksISghaSYmby5fX2MucHJvcHM9PT1uKSYmKCFjfHxjLmNhbGwodGhpcyxuLHQscikpfTtyLnU9ITA7dmFyIGM9ci5zaG91bGRDb21wb25lbnRVcGRhdGUsZT1yLmNvbXBvbmVudFdpbGxVcGRhdGU7ci5jb21wb25lbnRXaWxsVXBkYXRlPWZ1bmN0aW9uKG4sdCxyKXtpZih0aGlzLl9fZSl7dmFyIHU9YztjPXZvaWQgMCxmKG4sdCxyKSxjPXV9ZSYmZS5jYWxsKHRoaXMsbix0LHIpfSxyLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mfXJldHVybiBvLl9fTnx8by5fX31mdW5jdGlvbiBwKHUsaSl7dmFyIG89ZCh0KyssMyk7IW4uX19zJiZ6KG8uX19ILGkpJiYoby5fXz11LG8uaT1pLHIuX19ILl9faC5wdXNoKG8pKX1mdW5jdGlvbiB5KHUsaSl7dmFyIG89ZCh0KyssNCk7IW4uX19zJiZ6KG8uX19ILGkpJiYoby5fXz11LG8uaT1pLHIuX19oLnB1c2gobykpfWZ1bmN0aW9uIF8obil7cmV0dXJuIG89NSxGKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBBKG4sdCxyKXtvPTYseShmdW5jdGlvbigpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4/KG4odCgpKSxmdW5jdGlvbigpe3JldHVybiBuKG51bGwpfSk6bj8obi5jdXJyZW50PXQoKSxmdW5jdGlvbigpe3JldHVybiBuLmN1cnJlbnQ9bnVsbH0pOnZvaWQgMH0sbnVsbD09cj9yOnIuY29uY2F0KG4pKX1mdW5jdGlvbiBGKG4scil7dmFyIHU9ZCh0KyssNyk7cmV0dXJuIHoodS5fX0gscik/KHUuX19WPW4oKSx1Lmk9cix1Ll9faD1uLHUuX19WKTp1Ll9ffWZ1bmN0aW9uIFQobix0KXtyZXR1cm4gbz04LEYoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gcShuKXt2YXIgdT1yLmNvbnRleHRbbi5fX2NdLGk9ZCh0KyssOSk7cmV0dXJuIGkuYz1uLHU/KG51bGw9PWkuX18mJihpLl9fPSEwLHUuc3ViKHIpKSx1LnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIHgodCxyKXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZShyP3IodCk6dCl9ZnVuY3Rpb24gUChuKXt2YXIgdT1kKHQrKywxMCksaT1oKCk7cmV0dXJuIHUuX189bixyLmNvbXBvbmVudERpZENhdGNofHwoci5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuLHQpe3UuX18mJnUuX18obix0KSxpWzFdKG4pfSksW2lbMF0sZnVuY3Rpb24oKXtpWzFdKHZvaWQgMCl9XX1mdW5jdGlvbiBWKCl7dmFyIG49ZCh0KyssMTEpO2lmKCFuLl9fKXtmb3IodmFyIHU9ci5fX3Y7bnVsbCE9PXUmJiF1Ll9fbSYmbnVsbCE9PXUuX187KXU9dS5fXzt2YXIgaT11Ll9fbXx8KHUuX19tPVswLDBdKTtuLl9fPVwiUFwiK2lbMF0rXCItXCIraVsxXSsrfXJldHVybiBuLl9ffWZ1bmN0aW9uIGIoKXtmb3IodmFyIHQ7dD1mLnNoaWZ0KCk7KWlmKHQuX19QJiZ0Ll9fSCl0cnl7dC5fX0guX19oLmZvckVhY2goayksdC5fX0guX19oLmZvckVhY2godyksdC5fX0guX19oPVtdfWNhdGNoKHIpe3QuX19ILl9faD1bXSxuLl9fZShyLHQuX192KX19bi5fX2I9ZnVuY3Rpb24obil7cj1udWxsLGUmJmUobil9LG4uX19yPWZ1bmN0aW9uKG4pe2EmJmEobiksdD0wO3ZhciBpPShyPW4uX19jKS5fX0g7aSYmKHU9PT1yPyhpLl9faD1bXSxyLl9faD1bXSxpLl9fLmZvckVhY2goZnVuY3Rpb24obil7bi5fX04mJihuLl9fPW4uX19OKSxuLl9fVj1jLG4uX19OPW4uaT12b2lkIDB9KSk6KGkuX19oLmZvckVhY2goayksaS5fX2guZm9yRWFjaCh3KSxpLl9faD1bXSx0PTApKSx1PXJ9LG4uZGlmZmVkPWZ1bmN0aW9uKHQpe3YmJnYodCk7dmFyIG89dC5fX2M7byYmby5fX0gmJihvLl9fSC5fX2gubGVuZ3RoJiYoMSE9PWYucHVzaChvKSYmaT09PW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwoKGk9bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpfHxqKShiKSksby5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXtuLmkmJihuLl9fSD1uLmkpLG4uX19WIT09YyYmKG4uX189bi5fX1YpLG4uaT12b2lkIDAsbi5fX1Y9Y30pKSx1PXI9bnVsbH0sbi5fX2M9ZnVuY3Rpb24odCxyKXtyLnNvbWUoZnVuY3Rpb24odCl7dHJ5e3QuX19oLmZvckVhY2goayksdC5fX2g9dC5fX2guZmlsdGVyKGZ1bmN0aW9uKG4pe3JldHVybiFuLl9ffHx3KG4pfSl9Y2F0Y2godSl7ci5zb21lKGZ1bmN0aW9uKG4pe24uX19oJiYobi5fX2g9W10pfSkscj1bXSxuLl9fZSh1LHQuX192KX19KSxsJiZsKHQscil9LG4udW5tb3VudD1mdW5jdGlvbih0KXttJiZtKHQpO3ZhciByLHU9dC5fX2M7dSYmdS5fX0gmJih1Ll9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe3RyeXtrKG4pfWNhdGNoKG4pe3I9bn19KSx1Ll9fSD12b2lkIDAsciYmbi5fX2Uocix1Ll9fdikpfTt2YXIgZz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ZnVuY3Rpb24gaihuKXt2YXIgdCxyPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHUpLGcmJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHQpLHNldFRpbWVvdXQobil9LHU9c2V0VGltZW91dChyLDEwMCk7ZyYmKHQ9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHIpKX1mdW5jdGlvbiBrKG4pe3ZhciB0PXIsdT1uLl9fYztcImZ1bmN0aW9uXCI9PXR5cGVvZiB1JiYobi5fX2M9dm9pZCAwLHUoKSkscj10fWZ1bmN0aW9uIHcobil7dmFyIHQ9cjtuLl9fYz1uLl9fKCkscj10fWZ1bmN0aW9uIHoobix0KXtyZXR1cm4hbnx8bi5sZW5ndGghPT10Lmxlbmd0aHx8dC5zb21lKGZ1bmN0aW9uKHQscil7cmV0dXJuIHQhPT1uW3JdfSl9ZnVuY3Rpb24gQihuLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChuKTp0fWV4cG9ydHtUIGFzIHVzZUNhbGxiYWNrLHEgYXMgdXNlQ29udGV4dCx4IGFzIHVzZURlYnVnVmFsdWUscCBhcyB1c2VFZmZlY3QsUCBhcyB1c2VFcnJvckJvdW5kYXJ5LFYgYXMgdXNlSWQsQSBhcyB1c2VJbXBlcmF0aXZlSGFuZGxlLHkgYXMgdXNlTGF5b3V0RWZmZWN0LEYgYXMgdXNlTWVtbyxzIGFzIHVzZVJlZHVjZXIsXyBhcyB1c2VSZWYsaCBhcyB1c2VTdGF0ZX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob29rcy5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnQgeyBoLCBjcmVhdGVDb250ZXh0LCBDb21wb25lbnRDaGlsZHJlbiB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IFdpZGdldENvbmZpZyB9IGZyb20gXCIuLi9tb2RlbHMvbW9kZWxzXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcblxuXG5jb25zdCBDb25maWdDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxXaWRnZXRDb25maWc+KHtcbiAgZGVidWc6IGZhbHNlLFxuICBvcGVuZWQ6IGZhbHNlLFxuICBzZXRPcGVuZWQ6ICgpID0+IHt9LFxuICBzaXplOiBcInNtYWxsXCJcbn0gYXMgV2lkZ2V0Q29uZmlnKTtcblxuZXhwb3J0IGNvbnN0IHVzZUNvbmZpZyA9ICgpID0+IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XG5leHBvcnQgY29uc3QgQ29uZmlnUHJvdmlkZXIgPSAoeyBjaGlsZHJlbn06IHsgY2hpbGRyZW46IENvbXBvbmVudENoaWxkcmVuLH0pID0+IHtcbiAgY29uc3QgW29wZW5lZCwgX3NldE9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgX3ZhbHVlcyA9IHtcbiAgICBkZWJ1ZzogZmFsc2UsXG4gICAgb3BlbmVkLFxuICAgIHNldE9wZW5lZDogKHZhbHVlOiBib29sZWFuKSA9PiBfc2V0T3BlbmVkKHZhbHVlKSxcbiAgICBzaXplOiBcInNtYWxsXCJcbiAgfVxuXG4gIHJldHVybiA8Q29uZmlnQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17X3ZhbHVlc30+XG4gICAge2NoaWxkcmVufVxuICA8L0NvbmZpZ0NvbnRleHQuUHJvdmlkZXI+XG59XG4iLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCJcblxuLyoqXG4gKiBTZXQgY29va2llIGZvciB0aGUgZW1iZWRkYWJsZSBjaGF0IHNlc3Npb25cbiAqIEBwYXJhbSBuYW1lIGNvb2tpZSBuYW1lXG4gKiBAcGFyYW0gdmFsdWUgQ29va2llIHZhbHVlXG4gKiBAcGFyYW0gZGF5cyBEdXJhdGlvbiBpbiBkYXlzXG4gKi9cbmNvbnN0IHNldENvb2tpZSA9IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGRheXM6IG51bWJlcikgPT4ge1xuICBsZXQgZXhwaXJlcyA9IFwiXCJcbiAgaWYgKGRheXMpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKVxuICAgIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKVxuICB9XG4gIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArICh2YWx1ZSB8fCBcIlwiKSArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCJcbn1cblxuXG4vKipcbiAqIFJldHJpZXZlIGNvb2tpZSB2YWx1ZVxuICogQHBhcmFtIG5hbWUgQ29va2llIG5hbWVcbiAqIEByZXR1cm5zIENvb2tpZSB2YWx1ZSBvciBudWxsXG4gKi9cbmNvbnN0IGdldENvb2tpZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgbmFtZUVRID0gbmFtZSArIFwiPVwiXG4gIGNvbnN0IGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGMgPSBjYVtpXVxuICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PT0gXCIgXCIpIGMgPSBjLnN1YnN0cmluZygxLCBjLmxlbmd0aClcbiAgICBpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT09IDApIHJldHVybiBjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLCBjLmxlbmd0aClcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgU2Vzc2lvbiA9ICgpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBrZXkgPSBcIl9fc2Vzc2lvbklkX19kb2NxX2VtYmVkXCJcblxuICBsZXQgaWQgPSBnZXRDb29raWUoa2V5KVxuICBpZiAoIWlkKSB7XG4gICAgaWQgPSB1dWlkdjQoKTtcbiAgICBzZXRDb29raWUoa2V5LCBpZCwgMSlcbiAgfSBlbHNlIHtcbiAgICBzZXRDb29raWUoa2V5LCBpZCwgMSlcbiAgfVxuICByZXR1cm4gaWRcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3ByZWFjdC9ob29rcydcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tICcuL3Nlc3Npb24nXG5cblxuLyoqXG4gKiBBIGN1c3RvbSBob29rIHRoYXQgZW1iZWRzIHRoZSBjaGF0IHdpZGdldCBpbnRvIHRoZSB3ZWIgcGFnZS5cbiAqIEBwYXJhbSBvcGVuZWQgQ2hhdCB3aWRnZXQgb3BlbmVkIHN0YXRlLlxuICovXG5leHBvcnQgY29uc3QgdXNlRW1iZWQgPSAob3BlbmVkOiBib29sZWFuKSA9PiB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW9wZW5lZCkgcmV0dXJuXG4gICAgY29uc3Qgd2luID0gd2luZG93IGFzIGFueVxuICAgIGxldCBfX2N1cnJldFNjcmlwdCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHRcbiAgICBpZiAoIV9fY3VycmV0U2NyaXB0KSB7XG4gICAgICBjb25zdCBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpXG4gICAgICBfX2N1cnJldFNjcmlwdCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXVxuICAgIH1cbiAgICBjb25zdCBkYXRhVXJsID0gX19jdXJyZXRTY3JpcHQuZ2V0QXR0cmlidXRlKCdkb2NxLWhvc3QtdXJsJylcbiAgICBjb25zdCBkb2NxQ29uZmlnID0gX19jdXJyZXRTY3JpcHQuZ2V0QXR0cmlidXRlKCdkb2NxLWNvbmZpZycpXG4gICAgY29uc3QgX19zZXNzaW9uX2lkID0gU2Vzc2lvbigpO1xuXG4gICAgbGV0IF9fVVJMID0gZGF0YVVybFxuICAgIGlmICghX19VUkwgJiYgIXdpbi5fX0RvY3EpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRG9jcTogaG9zdCB1cmwgaXMgbm90IGRlZmluZWQnKVxuICAgIH1cblxuICAgIGlmICghX19VUkwpIF9fVVJMID0gd2luLl9fRG9jcTtcbiAgICBjb25zdCBfX1NJRCA9IGRvY3FDb25maWcgPyBkb2NxQ29uZmlnIDogISF3aW4uX19Eb2NxU0lEPyB3aW4uX19Eb2NxU0lEIDogJzEwMDA6MSc7XG4gIFxuICAgIGNvbnN0IGRhdGFDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9jcS1kYXRhLWNvbnRhaW5lcicpIGFzIEhUTUxFbGVtZW50XG4gICAgZGF0YUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIGNvbnN0IGZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJylcbiAgICBjb25zdCBbcGFyYW0xLCBwYXJhbTJdID0gX19TSUQuc3BsaXQoJzonKVxuICAgIGZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7X19VUkx9L3dpZGdldD9lbWJlZGRlZD10cnVlJnNlc3Npb25faWQ9JHtfX3Nlc3Npb25faWR9JnBhcmFtMT0ke3BhcmFtMX0mcGFyYW0yPSR7cGFyYW0yfWApXG4gICAgZnJhbWUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdib3JkZXI6IG5vbmU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7JylcbiAgICAgIGRhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhbWUpXG4gIH0sIFtvcGVuZWRdKVxufVxuIiwiaW1wb3J0IHsgaCwgRnJhZ21lbnQgfSBmcm9tIFwicHJlYWN0XCJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9lbWJlZC5jc3NcIlxuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSBcIi4uL2NvbnRleHQvY29udGV4dFwiO1xuaW1wb3J0IHsgdXNlRW1iZWQgfSBmcm9tIFwiLi4vdXRpbHMvdXNlZW1iZWRcIjtcblxuLyoqXG4gKiBFbWJlZCB0aXRsZVxuICogQHJldHVybnMgSlNYLkVsZW1lbnRcbiAqL1xuY29uc3QgVGl0bGUgPSAoKSA9PlxuICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzdHlsZVsnZW1iZWQtdGl0bGUnXSl9PlxuICAgIDxwPkRvY3EgUHVibGljIENoYXQ8L3A+XG4gIDwvZGl2PlxuXG4vKipcbiAqIEVtYmVkIGNsb3NlIGJ1dHRvblxuICogQHJldHVybnMgSlNYLkVsZW1lbnRcbiAqL1xuY29uc3QgQ2xvc2VCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IHsgc2V0T3BlbmVkIH0gPSB1c2VDb25maWcoKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHN0eWxlWydjbG9zZS1idXR0b24tY29udGFpbmVyJ10pfT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Nsc3goc3R5bGVbJ2Nsb3NlLWJ1dHRvbiddKX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuZWQoZmFsc2UpfVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICZ0aW1lcztcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApXG59XG5cbi8qKlxuICogRW1iZWQgY29udGFpbmVyLCBVc2VkIHRvIHJlbmRlciB0aGUgaWZyYW1lXG4gKiBAcmV0dXJucyBKU1guRWxlbWVudFxuICovXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCB7IG9wZW5lZCB9ID0gdXNlQ29uZmlnKCk7XG5cbiAgdXNlRW1iZWQob3BlbmVkKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtvcGVuZWQgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goc3R5bGVbJ2VtYmVkLWNvbnRhaW5lciddKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goc3R5bGVbJ2VtYmVkLWhlYWRlciddKX0+XG4gICAgICAgICAgICA8VGl0bGUgLz5cbiAgICAgICAgICAgIDxDbG9zZUJ1dHRvbiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9XCJkb2NxLWRhdGEtY29udGFpbmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChzdHlsZVsnZW1iZWQtYm9keSddKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDb25uZWN0aW5nIHRvIERvY3EuLi5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zaW5nbGV0b25TdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIFxuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vaWNvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vaWNvbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyBoLCBGcmFnbWVudCB9IGZyb20gXCJwcmVhY3RcIlxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIlxuaW1wb3J0IHN0eWxlIGZyb20gXCIuL2ljb24uY3NzXCJcbmltcG9ydCBpY29uIGZyb20gXCIuLi9zdGF0aWMvaWNvbi5zdmdcIlxuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSBcIi4uL2NvbnRleHQvY29udGV4dFwiO1xuXG5cbmV4cG9ydCBjb25zdCBNZXNzYWdlSWNvbiA9ICgpID0+IHtcbiAgY29uc3QgeyBzZXRPcGVuZWQsIG9wZW5lZCB9ID0gdXNlQ29uZmlnKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQgPlxuICAgICAgeyFvcGVuZWQgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goc3R5bGVbJ3dpZGdldC1pY29uJ10pfSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuZWQodHJ1ZSl9PlxuICAgICAgICAgIDxpbWcgc3JjPXtpY29ufSBhbHQ9XCJkb2NxIHdpZGdldCBpY29uXCIgd2lkdGg9XCI0NXB4XCIgaGVpZ2h0PVwiNDVweFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvRnJhZ21lbnQ+XG4gIClcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL2VtYmVkXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9pY29uXCI7XG4iLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBNZXNzYWdlSWNvbiB9IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IENvbmZpZ1Byb3ZpZGVyIH0gZnJvbSBcIi4vY29udGV4dC9jb250ZXh0XCI7XG5cblxuXG5leHBvcnQgY29uc3QgV2lkZ2V0ID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPENvbmZpZ1Byb3ZpZGVyPlxuICAgICAgPENvbnRhaW5lciAvPlxuICAgICAgPE1lc3NhZ2VJY29uIC8+XG4gICAgPC9Db25maWdQcm92aWRlcj5cbiAgKVxufVxuIiwiaW1wb3J0IHtoLCByZW5kZXJ9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuL3dpZGdldCc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2NxLXdpZGdldCcpIGFzIEhUTUxFbGVtZW50O1xuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xucmVuZGVyKDxXaWRnZXQvPiwgY29udGFpbmVyKTtcbiJdLCJuYW1lcyI6WyJoIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkNvbmZpZ0NvbnRleHQiLCJkZWJ1ZyIsIm9wZW5lZCIsInNldE9wZW5lZCIsInNpemUiLCJ1c2VDb25maWciLCJDb25maWdQcm92aWRlciIsIl9yZWYiLCJjaGlsZHJlbiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIl9zZXRPcGVuZWQiLCJfdmFsdWVzIiwidmFsdWUiLCJQcm92aWRlciIsInY0IiwidXVpZHY0Iiwic2V0Q29va2llIiwibmFtZSIsImRheXMiLCJleHBpcmVzIiwiZGF0ZSIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInRvVVRDU3RyaW5nIiwiZG9jdW1lbnQiLCJjb29raWUiLCJnZXRDb29raWUiLCJuYW1lRVEiLCJjYSIsInNwbGl0IiwiaSIsImxlbmd0aCIsImMiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwiU2Vzc2lvbiIsImtleSIsImlkIiwidXNlRWZmZWN0IiwidXNlRW1iZWQiLCJ3aW4iLCJ3aW5kb3ciLCJfX2N1cnJldFNjcmlwdCIsImN1cnJlbnRTY3JpcHQiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJkYXRhVXJsIiwiZ2V0QXR0cmlidXRlIiwiZG9jcUNvbmZpZyIsIl9fc2Vzc2lvbl9pZCIsIl9fVVJMIiwiX19Eb2NxIiwiRXJyb3IiLCJfX1NJRCIsIl9fRG9jcVNJRCIsImRhdGFDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImZyYW1lIiwiY3JlYXRlRWxlbWVudCIsIl9TSUQkc3BsaXQiLCJfU0lEJHNwbGl0MiIsInBhcmFtMSIsInBhcmFtMiIsInNldEF0dHJpYnV0ZSIsImNvbmNhdCIsImFwcGVuZENoaWxkIiwiRnJhZ21lbnQiLCJjbHN4Iiwic3R5bGUiLCJUaXRsZSIsImNsYXNzTmFtZSIsIkNsb3NlQnV0dG9uIiwiX3VzZUNvbmZpZyIsIm9uQ2xpY2siLCJDb250YWluZXIiLCJfdXNlQ29uZmlnMiIsImljb24iLCJNZXNzYWdlSWNvbiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiV2lkZ2V0IiwicmVuZGVyIiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==