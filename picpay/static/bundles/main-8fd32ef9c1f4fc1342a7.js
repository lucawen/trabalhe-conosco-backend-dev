/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(9);
var isBuffer = __webpack_require__(33);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(26);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(5);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(5);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(34);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(18);
var buildURL = __webpack_require__(21);
var parseHeaders = __webpack_require__(27);
var isURLSameOrigin = __webpack_require__(25);
var createError = __webpack_require__(8);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(20);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(23);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(17);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_vue_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__libs_vue_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__libs_vue_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_buefy_min_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_buefy_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__libs_buefy_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_lodash_min_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_lodash_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__libs_lodash_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_paginator_js__ = __webpack_require__(29);





__WEBPACK_IMPORTED_MODULE_0__libs_vue_js___default.a.use(__WEBPACK_IMPORTED_MODULE_1__libs_buefy_min_js___default.a.default, {
  defaultIconPack: 'fa'
});
new __WEBPACK_IMPORTED_MODULE_0__libs_vue_js___default.a({
  el: '#app',
  template: `<div>
    <b-field label="Pesquisa">
        <b-input v-model="search" :disabled="isLoading"></b-input>
    </b-field>
    <table class="table is-striped table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Username</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Username</th>
        </tr>
      </tfoot>
      <tbody>
        <tr v-for="user in users">
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.username}}</td>
        </tr>
        <tr v-if="users.length == 0">
          <td colspan="3">
          <section class="section">
                  <div class="content has-text-grey has-text-centered">
                      <p>
                        <i class="fa fa-frown-o" aria-hidden="true" style="font-size: 100px;"></i>
                      </p>
                      <p>Nada encontrado.</p>
                  </div>
              </section>
          </td>
        </tr>

      </tbody>

    </table>
    <b-loading :active.sync="isLoading" :canCancel="true"></b-loading>
    <v-paginator :resource_url="resource_url" ref="vpaginator" @update="updateResource" @request_start="startLoading" @request_finish="finishLoading" @request_error="errorLoading"></v-paginator>
    </div>`,
  data() {
    return {
      users: [],
      resource_url: '/api/users/list/?search=',
      search: '',
      isLoading: false
    };
  },
  components: {
    VPaginator: __WEBPACK_IMPORTED_MODULE_3__components_paginator_js__["VuePaginator"]
  },
  watch: {
    search: __WEBPACK_IMPORTED_MODULE_2__libs_lodash_min_js___default.a.debounce(function (newVal, oldVal) {
      var self = this;
      self.resource_url = self._replaceUrl(self.resource_url, 'search', newVal);
    }, 300)
  },
  methods: {
    updateResource(data) {
      this.users = data;
    },
    startLoading: function () {
      this.isLoading = true;
    },
    finishLoading: function () {
      this.isLoading = false;
    },
    errorLoading: function () {
      this.isLoading = false;
      this.$toast.open({
        duration: 5000,
        message: `Aconteceu algum erro inesperado.`,
        type: 'is-danger'
      });
    },
    _replaceUrl: function (url, paramName, paramValue) {
      if (paramValue == null) paramValue = '';
      var pattern = new RegExp('\\b(' + paramName + '=).*?(&|$)');
      if (url.search(pattern) >= 0) {
        return url.replace(pattern, '$1' + paramValue + '$2');
      }
      url = url.replace(/\?$/, '');
      return url + (url.indexOf('?') > 0 ? '&' : '?') + paramName + '=' + paramValue;
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(9);
var Axios = __webpack_require__(14);
var defaults = __webpack_require__(1);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(6);
axios.CancelToken = __webpack_require__(13);
axios.isCancel = __webpack_require__(7);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(28);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(6);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(1);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(15);
var dispatchRequest = __webpack_require__(16);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(19);
var isCancel = __webpack_require__(7);
var defaults = __webpack_require__(1);
var isAbsoluteURL = __webpack_require__(24);
var combineURLs = __webpack_require__(22);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(8);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


const vuePaginator = {
  props: {
    resource_url: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      required: false,
      default() {
        return {};
      }
    }
  },
  template: `
  <section>
    <b-pagination
        :total="count"
        :current.sync="current_page"
        :per-page="page_size"
        @change='changeOptions'>
    </b-pagination> <p class="is-size-7	">Total de {{last_page}} páginas</p>
  </section>`,
  data() {
    return {
      current_page: '',
      last_page: '',
      count: '',
      next_page_url: '',
      prev_page_url: '',
      page_size: '',
      config: {
        remote_data: 'data',
        remote_current_page: 'current_page',
        remote_last_page: 'last_page',
        remote_next_page_url: 'next_page_url',
        remote_prev_page_url: 'prev_page_url',
        remote_page_size: 'page_size',
        remote_count: 'count'
      }
    };
  },
  methods: {
    changeOptions: function (val) {
      if (val == 'Infinity') return;
      var self = this;

      if (val - self.current_page == 1) {
        self.fetchData(self.next_page_url);
      } else if (val - this.current_page == -1) {
        self.fetchData(self.prev_page_url);
      } else if (val == 1) {
        self.fetchData(self.resource_url);
      } else {
        self.fetchData(self._replaceUrl(self.resource_url, 'page', val));
      }
      self.current_page = val;
    },
    fetchData: function (pageUrl) {
      this.$emit("request_start");
      pageUrl = pageUrl || this.resource_url;
      var self = this;
      var config = {};
      if (this.config.headers) {
        config.headers = this.config.headers;
      }
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(pageUrl, config).then(function (response) {
        self.$emit("request_finish", response);
        self.handleResponseData(response.data);
      }).catch(function (response) {
        self.$emit("request_error", response);
        console.log('Fetching data failed.', response);
      });
    },
    handleResponseData: function (response) {
      var self = this;
      this.makePagination(response);
      var data = self._getNestedValue(response, this.config.remote_data);
      this.$emit('update', data);
    },
    makePagination: function (data) {
      var self = this;
      this.current_page = self._getNestedValue(data, this.config.remote_current_page);
      this.last_page = self._getNestedValue(data, this.config.remote_last_page);
      this.count = self._getNestedValue(data, this.config.remote_count);
      this.page_size = self._getNestedValue(data, this.config.remote_page_size);
      this.next_page_url = this.current_page === this.last_page ? null : self._getNestedValue(data, this.config.remote_next_page_url);
      this.prev_page_url = this.current_page === 1 ? null : self._getNestedValue(data, this.config.remote_prev_page_url);
    },
    initConfig: function () {
      this.config = this._merge_objects(this.config, this.options);
    },
    _merge_objects: function (obj1, obj2) {
      var obj3 = {};
      for (var attrname in obj1) {
        obj3[attrname] = obj1[attrname];
      }
      for (var attrname in obj2) {
        obj3[attrname] = obj2[attrname];
      }
      return obj3;
    },
    _getNestedValue: function (obj, path) {
      var originalPath = path;
      path = path.split('.');
      var res = obj;
      for (var i = 0; i < path.length; i++) {
        res = res[path[i]];
      }
      if (typeof res == 'undefined') console.log(`[VuePaginator] Response doesn't contain key ${originalPath}!`);
      return res;
    },
    _replaceUrl: function (url, paramName, paramValue) {
      if (paramValue == null) paramValue = '';
      var pattern = new RegExp('\\b(' + paramName + '=).*?(&|$)');
      if (url.search(pattern) >= 0) {
        return url.replace(pattern, '$1' + paramValue + '$2');
      }
      url = url.replace(/\?$/, '');
      return url + (url.indexOf('?') > 0 ? '&' : '?') + paramName + '=' + paramValue;
    }
  },
  watch: {
    resource_url() {
      this.fetchData();
    }
  },
  created() {
    this.initConfig();
    this.fetchData();
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = (vuePaginator);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {(function (e, t) {
   true ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Buefy = t() : e.Buefy = t();
})(this, function () {
  return function (e) {
    function t(i) {
      if (n[i]) return n[i].exports;var r = n[i] = { i: i, l: !1, exports: {} };return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
    }var n = {};return t.m = e, t.c = n, t.i = function (e) {
      return e;
    }, t.d = function (e, n, i) {
      t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: i });
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return t.d(n, "a", n), n;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "/", t(t.s = 238);
  }([function (e, t) {
    e.exports = function (e, t, n, i, r) {
      var a,
          o = e = e || {},
          s = typeof e.default;"object" !== s && "function" !== s || (a = e, o = e.default);var l = "function" == typeof o ? o.options : o;t && (l.render = t.render, l.staticRenderFns = t.staticRenderFns), i && (l._scopeId = i);var c;if (r ? (c = function (e) {
        e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(r);
      }, l._ssrRegister = c) : n && (c = n), c) {
        var u = l.functional,
            d = u ? l.render : l.beforeCreate;u ? l.render = function (e, t) {
          return c.call(t), d(e, t);
        } : l.beforeCreate = d ? [].concat(d, c) : [c];
      }return { esModule: a, exports: o, options: l };
    };
  }, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });var i = { defaultContainerElement: null, defaultIconPack: "mdi", defaultDialogConfirmText: null, defaultDialogCancelText: null, defaultSnackbarDuration: 3500, defaultToastDuration: 2e3, defaultTooltipType: "is-primary", defaultTooltipAnimated: !1, defaultInputAutocomplete: "on", defaultDateFormatter: null, defaultDateParser: null, defaultDayNames: null, defaultMonthNames: null, defaultFirstDayOfWeek: null, defaultTimeFormatter: null, defaultTimeParser: null, defaultModalScroll: null, defaultDatepickerMobileNative: !0, defaultTimepickerMobileNative: !0, defaultNoticeQueue: !0 };t.b = i;var r = function (e) {
      i = e;
    };
  }, function (e, t, n) {
    "use strict";
    var i = n(177),
        r = n.n(i);t.a = r.a;
  }, function (e, t, n) {
    var i = n(37)("wks"),
        r = n(27),
        a = n(7).Symbol,
        o = "function" == typeof a;(e.exports = function (e) {
      return i[e] || (i[e] = o && a[e] || (o ? a : r)("Symbol." + e));
    }).store = i;
  }, function (e, t, n) {
    "use strict";
    function i(e, t) {
      return t.split(".").reduce(function (e, t) {
        return e[t];
      }, e);
    }function r(e, t, n) {
      if (e) {
        if (!n || "function" != typeof n) return e.indexOf(t);for (var i = 0; i < e.length; i++) if (n(e[i], t)) return i;
      }return -1;
    }function a(e) {
      void 0 !== e.remove ? e.remove() : e.parentNode.removeChild(e);
    }function o(e) {
      return e ? e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") : e;
    }t.c = i, t.d = r, n.d(t, "b", function () {
      return s;
    }), t.a = a, t.e = o;var s = { Android: function () {
        return "undefined" != typeof window && window.navigator.userAgent.match(/Android/i);
      }, BlackBerry: function () {
        return "undefined" != typeof window && window.navigator.userAgent.match(/BlackBerry/i);
      }, iOS: function () {
        return "undefined" != typeof window && window.navigator.userAgent.match(/iPhone|iPad|iPod/i);
      }, Opera: function () {
        return "undefined" != typeof window && window.navigator.userAgent.match(/Opera Mini/i);
      }, Windows: function () {
        return "undefined" != typeof window && window.navigator.userAgent.match(/IEMobile/i);
      }, any: function () {
        return s.Android() || s.BlackBerry() || s.iOS() || s.Opera() || s.Windows();
      } };
  }, function (e, t, n) {
    "use strict";
    t.__esModule = !0;var i = n(125),
        r = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(i);t.default = function (e, t, n) {
      return t in e ? (0, r.default)(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
    };
  }, function (e, t) {
    var n = e.exports = { version: "2.4.0" };"number" == typeof __e && (__e = n);
  }, function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = n);
  }, function (e, t, n) {
    var i = n(15),
        r = n(55),
        a = n(40),
        o = Object.defineProperty;t.f = n(10) ? Object.defineProperty : function (e, t, n) {
      if (i(e), t = a(t, !0), i(n), r) try {
        return o(e, t, n);
      } catch (e) {}if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");return "value" in n && (e[t] = n.value), e;
    };
  }, function (e, t, n) {
    "use strict";
    var i = n(1);t.a = { props: { size: String, expanded: Boolean, loading: Boolean, icon: String, iconPack: String, autocomplete: String, maxlength: [Number, String] }, data: function () {
        return { isValid: !0, isFocused: !1, newIconPack: this.iconPack || i.b.defaultIconPack };
      }, computed: { parentField: function () {
          for (var e = this.$parent, t = 0; t < 3; t++) e && !e.$data._isField && (e = e.$parent);return e;
        }, statusType: function () {
          if (this.parentField) return this.parentField.newType;
        }, statusMessage: function () {
          if (this.parentField) return this.parentField.newMessage;
        }, iconSize: function () {
          switch (this.size) {case "is-small":
              return this.size;case "is-medium":
              return;case "is-large":
              return "fa" === this.newIconPack ? "" : "is-medium";}
        } }, methods: { focus: function () {
          var e = this;void 0 !== this.$data._elementRef && this.$nextTick(function () {
            return e.$el.querySelector(e.$data._elementRef).focus();
          });
        }, onBlur: function (e) {
          this.isFocused = !1, this.$emit("blur", e), this.checkHtml5Validity();
        }, onFocus: function (e) {
          this.isFocused = !0, this.$emit("focus", e);
        }, checkHtml5Validity: function () {
          if (void 0 !== this.$refs[this.$data._elementRef]) {
            var e = this.$el.querySelector(this.$data._elementRef),
                t = null,
                n = null,
                i = !0;return e.checkValidity() || (t = "is-danger", n = e.validationMessage, i = !1), this.isValid = i, this.parentField && (this.parentField.type || (this.parentField.newType = t), this.parentField.message || (this.parentField.newMessage = n)), this.isValid;
          }
        } } };
  }, function (e, t, n) {
    e.exports = !n(18)(function () {
      return 7 != Object.defineProperty({}, "a", { get: function () {
          return 7;
        } }).a;
    });
  }, function (e, t) {
    var n = {}.hasOwnProperty;e.exports = function (e, t) {
      return n.call(e, t);
    };
  }, function (e, t, n) {
    var i = n(56),
        r = n(31);e.exports = function (e) {
      return i(r(e));
    };
  }, function (e, t, n) {
    e.exports = { default: n(130), __esModule: !0 };
  }, function (e, t, n) {
    e.exports = { default: n(132), __esModule: !0 };
  }, function (e, t, n) {
    var i = n(25);e.exports = function (e) {
      if (!i(e)) throw TypeError(e + " is not an object!");return e;
    };
  }, function (e, t, n) {
    var i = n(8),
        r = n(21);e.exports = n(10) ? function (e, t, n) {
      return i.f(e, t, r(1, n));
    } : function (e, t, n) {
      return e[t] = n, e;
    };
  }, function (e, t, n) {
    var i = n(7),
        r = n(6),
        a = n(53),
        o = n(16),
        s = function (e, t, n) {
      var l,
          c,
          u,
          d = e & s.F,
          f = e & s.G,
          p = e & s.S,
          h = e & s.P,
          v = e & s.B,
          m = e & s.W,
          y = f ? r : r[t] || (r[t] = {}),
          g = y.prototype,
          b = f ? i : p ? i[t] : (i[t] || {}).prototype;f && (n = t);for (l in n) (c = !d && b && void 0 !== b[l]) && l in y || (u = c ? b[l] : n[l], y[l] = f && "function" != typeof b[l] ? n[l] : v && c ? a(u, i) : m && b[l] == u ? function (e) {
        var t = function (t, n, i) {
          if (this instanceof e) {
            switch (arguments.length) {case 0:
                return new e();case 1:
                return new e(t);case 2:
                return new e(t, n);}return new e(t, n, i);
          }return e.apply(this, arguments);
        };return t.prototype = e.prototype, t;
      }(u) : h && "function" == typeof u ? a(Function.call, u) : u, h && ((y.virtual || (y.virtual = {}))[l] = u, e & s.R && g && !g[l] && o(g, l, u)));
    };s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, e.exports = s;
  }, function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  }, function (e, t) {
    e.exports = {};
  }, function (e, t, n) {
    var i = n(60),
        r = n(32);e.exports = Object.keys || function (e) {
      return i(e, r);
    };
  }, function (e, t) {
    e.exports = function (e, t) {
      return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
    };
  }, function (e, t, n) {
    "use strict";
    (function (e, n) {
      function i(e) {
        return void 0 === e || null === e;
      }function r(e) {
        return void 0 !== e && null !== e;
      }function a(e) {
        return !0 === e;
      }function o(e) {
        return !1 === e;
      }function s(e) {
        return "string" == typeof e || "number" == typeof e || "boolean" == typeof e;
      }function l(e) {
        return null !== e && "object" == typeof e;
      }function c(e) {
        return "[object Object]" === fi.call(e);
      }function u(e) {
        return "[object RegExp]" === fi.call(e);
      }function d(e) {
        var t = parseFloat(String(e));return t >= 0 && Math.floor(t) === t && isFinite(e);
      }function f(e) {
        return null == e ? "" : "object" == typeof e ? JSON.stringify(e, null, 2) : String(e);
      }function p(e) {
        var t = parseFloat(e);return isNaN(t) ? e : t;
      }function h(e, t) {
        for (var n = Object.create(null), i = e.split(","), r = 0; r < i.length; r++) n[i[r]] = !0;return t ? function (e) {
          return n[e.toLowerCase()];
        } : function (e) {
          return n[e];
        };
      }function v(e, t) {
        if (e.length) {
          var n = e.indexOf(t);if (n > -1) return e.splice(n, 1);
        }
      }function m(e, t) {
        return hi.call(e, t);
      }function y(e) {
        var t = Object.create(null);return function (n) {
          return t[n] || (t[n] = e(n));
        };
      }function g(e, t) {
        function n(n) {
          var i = arguments.length;return i ? i > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
        }return n._length = e.length, n;
      }function b(e, t) {
        t = t || 0;for (var n = e.length - t, i = new Array(n); n--;) i[n] = e[n + t];return i;
      }function _(e, t) {
        for (var n in t) e[n] = t[n];return e;
      }function w(e) {
        for (var t = {}, n = 0; n < e.length; n++) e[n] && _(t, e[n]);return t;
      }function k(e, t, n) {}function x(e, t) {
        if (e === t) return !0;var n = l(e),
            i = l(t);if (!n || !i) return !n && !i && String(e) === String(t);try {
          var r = Array.isArray(e),
              a = Array.isArray(t);if (r && a) return e.length === t.length && e.every(function (e, n) {
            return x(e, t[n]);
          });if (r || a) return !1;var o = Object.keys(e),
              s = Object.keys(t);return o.length === s.length && o.every(function (n) {
            return x(e[n], t[n]);
          });
        } catch (e) {
          return !1;
        }
      }function C(e, t) {
        for (var n = 0; n < e.length; n++) if (x(e[n], t)) return n;return -1;
      }function S(e) {
        var t = !1;return function () {
          t || (t = !0, e.apply(this, arguments));
        };
      }function D(e) {
        var t = (e + "").charCodeAt(0);return 36 === t || 95 === t;
      }function $(e, t, n, i) {
        Object.defineProperty(e, t, { value: n, enumerable: !!i, writable: !0, configurable: !0 });
      }function A(e) {
        if (!$i.test(e)) {
          var t = e.split(".");return function (e) {
            for (var n = 0; n < t.length; n++) {
              if (!e) return;e = e[t[n]];
            }return e;
          };
        }
      }function O(e) {
        return "function" == typeof e && /native code/.test(e.toString());
      }function T(e) {
        Wi.target && Ui.push(Wi.target), Wi.target = e;
      }function M() {
        Wi.target = Ui.pop();
      }function P(e) {
        return new Ki(void 0, void 0, void 0, String(e));
      }function V(e, t) {
        var n = new Ki(e.tag, e.data, e.children, e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);return n.ns = e.ns, n.isStatic = e.isStatic, n.key = e.key, n.isComment = e.isComment, n.isCloned = !0, t && e.children && (n.children = I(e.children)), n;
      }function I(e, t) {
        for (var n = e.length, i = new Array(n), r = 0; r < n; r++) i[r] = V(e[r], t);return i;
      }function E(e, t, n) {
        e.__proto__ = t;
      }function F(e, t, n) {
        for (var i = 0, r = n.length; i < r; i++) {
          var a = n[i];$(e, a, t[a]);
        }
      }function j(e, t) {
        if (l(e) && !(e instanceof Ki)) {
          var n;return m(e, "__ob__") && e.__ob__ instanceof tr ? n = e.__ob__ : er.shouldConvert && !Li() && (Array.isArray(e) || c(e)) && Object.isExtensible(e) && !e._isVue && (n = new tr(e)), t && n && n.vmCount++, n;
        }
      }function N(e, t, n, i, r) {
        var a = new Wi(),
            o = Object.getOwnPropertyDescriptor(e, t);if (!o || !1 !== o.configurable) {
          var s = o && o.get,
              l = o && o.set,
              c = !r && j(n);Object.defineProperty(e, t, { enumerable: !0, configurable: !0, get: function () {
              var t = s ? s.call(e) : n;return Wi.target && (a.depend(), c && (c.dep.depend(), Array.isArray(t) && L(t))), t;
            }, set: function (t) {
              var i = s ? s.call(e) : n;t === i || t !== t && i !== i || (l ? l.call(e, t) : n = t, c = !r && j(t), a.notify());
            } });
        }
      }function B(e, t, n) {
        if (Array.isArray(e) && d(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;if (m(e, t)) return e[t] = n, n;var i = e.__ob__;return e._isVue || i && i.vmCount ? n : i ? (N(i.value, t, n), i.dep.notify(), n) : (e[t] = n, n);
      }function R(e, t) {
        if (Array.isArray(e) && d(t)) return void e.splice(t, 1);var n = e.__ob__;e._isVue || n && n.vmCount || m(e, t) && (delete e[t], n && n.dep.notify());
      }function L(e) {
        for (var t = void 0, n = 0, i = e.length; n < i; n++) t = e[n], t && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && L(t);
      }function z(e, t) {
        if (!t) return e;for (var n, i, r, a = Object.keys(t), o = 0; o < a.length; o++) n = a[o], i = e[n], r = t[n], m(e, n) ? c(i) && c(r) && z(i, r) : B(e, n, r);return e;
      }function H(e, t, n) {
        return n ? e || t ? function () {
          var i = "function" == typeof t ? t.call(n) : t,
              r = "function" == typeof e ? e.call(n) : e;return i ? z(i, r) : r;
        } : void 0 : t ? e ? function () {
          return z("function" == typeof t ? t.call(this) : t, "function" == typeof e ? e.call(this) : e);
        } : t : e;
      }function Y(e, t) {
        return t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
      }function q(e, t, n, i) {
        var r = Object.create(e || null);return t ? _(r, t) : r;
      }function W(e, t) {
        var n = e.props;if (n) {
          var i,
              r,
              a,
              o = {};if (Array.isArray(n)) for (i = n.length; i--;) "string" == typeof (r = n[i]) && (a = mi(r), o[a] = { type: null });else if (c(n)) for (var s in n) r = n[s], a = mi(s), o[a] = c(r) ? r : { type: r };e.props = o;
        }
      }function U(e, t) {
        var n = e.inject,
            i = e.inject = {};if (Array.isArray(n)) for (var r = 0; r < n.length; r++) i[n[r]] = { from: n[r] };else if (c(n)) for (var a in n) {
          var o = n[a];i[a] = c(o) ? _({ from: a }, o) : { from: o };
        }
      }function K(e) {
        var t = e.directives;if (t) for (var n in t) {
          var i = t[n];"function" == typeof i && (t[n] = { bind: i, update: i });
        }
      }function J(e, t, n) {
        function i(i) {
          var r = nr[i] || ar;l[i] = r(e[i], t[i], n, i);
        }"function" == typeof t && (t = t.options), W(t, n), U(t, n), K(t);var r = t.extends;if (r && (e = J(e, r, n)), t.mixins) for (var a = 0, o = t.mixins.length; a < o; a++) e = J(e, t.mixins[a], n);var s,
            l = {};for (s in e) i(s);for (s in t) m(e, s) || i(s);return l;
      }function G(e, t, n, i) {
        if ("string" == typeof n) {
          var r = e[t];if (m(r, n)) return r[n];var a = mi(n);if (m(r, a)) return r[a];var o = yi(a);if (m(r, o)) return r[o];return r[n] || r[a] || r[o];
        }
      }function Q(e, t, n, i) {
        var r = t[e],
            a = !m(n, e),
            o = n[e];if (ee(Boolean, r.type) && (a && !m(r, "default") ? o = !1 : ee(String, r.type) || "" !== o && o !== bi(e) || (o = !0)), void 0 === o) {
          o = X(i, r, e);var s = er.shouldConvert;er.shouldConvert = !0, j(o), er.shouldConvert = s;
        }return o;
      }function X(e, t, n) {
        if (m(t, "default")) {
          var i = t.default;return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof i && "Function" !== Z(t.type) ? i.call(e) : i;
        }
      }function Z(e) {
        var t = e && e.toString().match(/^\s*function (\w+)/);return t ? t[1] : "";
      }function ee(e, t) {
        if (!Array.isArray(t)) return Z(t) === Z(e);for (var n = 0, i = t.length; n < i; n++) if (Z(t[n]) === Z(e)) return !0;return !1;
      }function te(e, t, n) {
        if (t) for (var i = t; i = i.$parent;) {
          var r = i.$options.errorCaptured;if (r) for (var a = 0; a < r.length; a++) try {
            var o = !1 === r[a].call(i, e, t, n);if (o) return;
          } catch (e) {
            ne(e, i, "errorCaptured hook");
          }
        }ne(e, t, n);
      }function ne(e, t, n) {
        if (Si.errorHandler) try {
          return Si.errorHandler.call(null, e, t, n);
        } catch (e) {
          ie(e, null, "config.errorHandler");
        }ie(e, t, n);
      }function ie(e, t, n) {
        if (!Oi || "undefined" == typeof console) throw e;console.error(e);
      }function re() {
        sr = !1;var e = or.slice(0);or.length = 0;for (var t = 0; t < e.length; t++) e[t]();
      }function ae(e) {
        return e._withTask || (e._withTask = function () {
          lr = !0;var t = e.apply(null, arguments);return lr = !1, t;
        });
      }function oe(e, t) {
        var n;if (or.push(function () {
          if (e) try {
            e.call(t);
          } catch (e) {
            te(e, t, "nextTick");
          } else n && n(t);
        }), sr || (sr = !0, lr ? rr() : ir()), !e && "undefined" != typeof Promise) return new Promise(function (e) {
          n = e;
        });
      }function se(e) {
        function t() {
          var e = arguments,
              n = t.fns;if (!Array.isArray(n)) return n.apply(null, arguments);for (var i = n.slice(), r = 0; r < i.length; r++) i[r].apply(null, e);
        }return t.fns = e, t;
      }function le(e, t, n, r, a) {
        var o, s, l, c;for (o in e) s = e[o], l = t[o], c = pr(o), i(s) || (i(l) ? (i(s.fns) && (s = e[o] = se(s)), n(c.name, s, c.once, c.capture, c.passive)) : s !== l && (l.fns = s, e[o] = l));for (o in t) i(e[o]) && (c = pr(o), r(c.name, t[o], c.capture));
      }function ce(e, t, n) {
        function o() {
          n.apply(this, arguments), v(s.fns, o);
        }var s,
            l = e[t];i(l) ? s = se([o]) : r(l.fns) && a(l.merged) ? (s = l, s.fns.push(o)) : s = se([l, o]), s.merged = !0, e[t] = s;
      }function ue(e, t, n) {
        var a = t.options.props;if (!i(a)) {
          var o = {},
              s = e.attrs,
              l = e.props;if (r(s) || r(l)) for (var c in a) {
            var u = bi(c);de(o, l, c, u, !0) || de(o, s, c, u, !1);
          }return o;
        }
      }function de(e, t, n, i, a) {
        if (r(t)) {
          if (m(t, n)) return e[n] = t[n], a || delete t[n], !0;if (m(t, i)) return e[n] = t[i], a || delete t[i], !0;
        }return !1;
      }function fe(e) {
        for (var t = 0; t < e.length; t++) if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);return e;
      }function pe(e) {
        return s(e) ? [P(e)] : Array.isArray(e) ? ve(e) : void 0;
      }function he(e) {
        return r(e) && r(e.text) && o(e.isComment);
      }function ve(e, t) {
        var n,
            o,
            l,
            c,
            u = [];for (n = 0; n < e.length; n++) o = e[n], i(o) || "boolean" == typeof o || (l = u.length - 1, c = u[l], Array.isArray(o) ? o.length > 0 && (o = ve(o, (t || "") + "_" + n), he(o[0]) && he(c) && (u[l] = P(c.text + o[0].text), o.shift()), u.push.apply(u, o)) : s(o) ? he(c) ? u[l] = P(c.text + o) : "" !== o && u.push(P(o)) : he(o) && he(c) ? u[l] = P(c.text + o.text) : (a(e._isVList) && r(o.tag) && i(o.key) && r(t) && (o.key = "__vlist" + t + "_" + n + "__"), u.push(o)));return u;
      }function me(e, t) {
        return (e.__esModule || Hi && "Module" === e[Symbol.toStringTag]) && (e = e.default), l(e) ? t.extend(e) : e;
      }function ye(e, t, n, i, r) {
        var a = Gi();return a.asyncFactory = e, a.asyncMeta = { data: t, context: n, children: i, tag: r }, a;
      }function ge(e, t, n) {
        if (a(e.error) && r(e.errorComp)) return e.errorComp;if (r(e.resolved)) return e.resolved;if (a(e.loading) && r(e.loadingComp)) return e.loadingComp;if (!r(e.contexts)) {
          var o = e.contexts = [n],
              s = !0,
              c = function () {
            for (var e = 0, t = o.length; e < t; e++) o[e].$forceUpdate();
          },
              u = S(function (n) {
            e.resolved = me(n, t), s || c();
          }),
              d = S(function (t) {
            r(e.errorComp) && (e.error = !0, c());
          }),
              f = e(u, d);return l(f) && ("function" == typeof f.then ? i(e.resolved) && f.then(u, d) : r(f.component) && "function" == typeof f.component.then && (f.component.then(u, d), r(f.error) && (e.errorComp = me(f.error, t)), r(f.loading) && (e.loadingComp = me(f.loading, t), 0 === f.delay ? e.loading = !0 : setTimeout(function () {
            i(e.resolved) && i(e.error) && (e.loading = !0, c());
          }, f.delay || 200)), r(f.timeout) && setTimeout(function () {
            i(e.resolved) && d(null);
          }, f.timeout))), s = !1, e.loading ? e.loadingComp : e.resolved;
        }e.contexts.push(n);
      }function be(e) {
        return e.isComment && e.asyncFactory;
      }function _e(e) {
        if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
          var n = e[t];if (r(n) && (r(n.componentOptions) || be(n))) return n;
        }
      }function we(e) {
        e._events = Object.create(null), e._hasHookEvent = !1;var t = e.$options._parentListeners;t && Ce(e, t);
      }function ke(e, t, n) {
        n ? fr.$once(e, t) : fr.$on(e, t);
      }function xe(e, t) {
        fr.$off(e, t);
      }function Ce(e, t, n) {
        fr = e, le(t, n || {}, ke, xe, e);
      }function Se(e, t) {
        var n = {};if (!e) return n;for (var i = [], r = 0, a = e.length; r < a; r++) {
          var o = e[r],
              s = o.data;if (s && s.attrs && s.attrs.slot && delete s.attrs.slot, o.context !== t && o.functionalContext !== t || !s || null == s.slot) i.push(o);else {
            var l = o.data.slot,
                c = n[l] || (n[l] = []);"template" === o.tag ? c.push.apply(c, o.children) : c.push(o);
          }
        }return i.every(De) || (n.default = i), n;
      }function De(e) {
        return e.isComment || " " === e.text;
      }function $e(e, t) {
        t = t || {};for (var n = 0; n < e.length; n++) Array.isArray(e[n]) ? $e(e[n], t) : t[e[n].key] = e[n].fn;return t;
      }function Ae(e) {
        var t = e.$options,
            n = t.parent;if (n && !t.abstract) {
          for (; n.$options.abstract && n.$parent;) n = n.$parent;n.$children.push(e);
        }e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1;
      }function Oe(e, t, n) {
        e.$el = t, e.$options.render || (e.$options.render = Gi), Ie(e, "beforeMount");var i;return i = function () {
          e._update(e._render(), n);
        }, e._watcher = new kr(e, i, k), n = !1, null == e.$vnode && (e._isMounted = !0, Ie(e, "mounted")), e;
      }function Te(e, t, n, i, r) {
        var a = !!(r || e.$options._renderChildren || i.data.scopedSlots || e.$scopedSlots !== Di);if (e.$options._parentVnode = i, e.$vnode = i, e._vnode && (e._vnode.parent = i), e.$options._renderChildren = r, e.$attrs = i.data && i.data.attrs || Di, e.$listeners = n || Di, t && e.$options.props) {
          er.shouldConvert = !1;for (var o = e._props, s = e.$options._propKeys || [], l = 0; l < s.length; l++) {
            var c = s[l];o[c] = Q(c, e.$options.props, t, e);
          }er.shouldConvert = !0, e.$options.propsData = t;
        }if (n) {
          var u = e.$options._parentListeners;e.$options._parentListeners = n, Ce(e, n, u);
        }a && (e.$slots = Se(r, i.context), e.$forceUpdate());
      }function Me(e) {
        for (; e && (e = e.$parent);) if (e._inactive) return !0;return !1;
      }function Pe(e, t) {
        if (t) {
          if (e._directInactive = !1, Me(e)) return;
        } else if (e._directInactive) return;if (e._inactive || null === e._inactive) {
          e._inactive = !1;for (var n = 0; n < e.$children.length; n++) Pe(e.$children[n]);Ie(e, "activated");
        }
      }function Ve(e, t) {
        if (!(t && (e._directInactive = !0, Me(e)) || e._inactive)) {
          e._inactive = !0;for (var n = 0; n < e.$children.length; n++) Ve(e.$children[n]);Ie(e, "deactivated");
        }
      }function Ie(e, t) {
        var n = e.$options[t];if (n) for (var i = 0, r = n.length; i < r; i++) try {
          n[i].call(e);
        } catch (n) {
          te(n, e, t + " hook");
        }e._hasHookEvent && e.$emit("hook:" + t);
      }function Ee() {
        _r = vr.length = mr.length = 0, yr = {}, gr = br = !1;
      }function Fe() {
        br = !0;var e, t;for (vr.sort(function (e, t) {
          return e.id - t.id;
        }), _r = 0; _r < vr.length; _r++) e = vr[_r], t = e.id, yr[t] = null, e.run();var n = mr.slice(),
            i = vr.slice();Ee(), Be(n), je(i), zi && Si.devtools && zi.emit("flush");
      }function je(e) {
        for (var t = e.length; t--;) {
          var n = e[t],
              i = n.vm;i._watcher === n && i._isMounted && Ie(i, "updated");
        }
      }function Ne(e) {
        e._inactive = !1, mr.push(e);
      }function Be(e) {
        for (var t = 0; t < e.length; t++) e[t]._inactive = !0, Pe(e[t], !0);
      }function Re(e) {
        var t = e.id;if (null == yr[t]) {
          if (yr[t] = !0, br) {
            for (var n = vr.length - 1; n > _r && vr[n].id > e.id;) n--;vr.splice(n + 1, 0, e);
          } else vr.push(e);gr || (gr = !0, oe(Fe));
        }
      }function Le(e) {
        xr.clear(), ze(e, xr);
      }function ze(e, t) {
        var n,
            i,
            r = Array.isArray(e);if ((r || l(e)) && Object.isExtensible(e)) {
          if (e.__ob__) {
            var a = e.__ob__.dep.id;if (t.has(a)) return;t.add(a);
          }if (r) for (n = e.length; n--;) ze(e[n], t);else for (i = Object.keys(e), n = i.length; n--;) ze(e[i[n]], t);
        }
      }function He(e, t, n) {
        Cr.get = function () {
          return this[t][n];
        }, Cr.set = function (e) {
          this[t][n] = e;
        }, Object.defineProperty(e, n, Cr);
      }function Ye(e) {
        e._watchers = [];var t = e.$options;t.props && qe(e, t.props), t.methods && Qe(e, t.methods), t.data ? We(e) : j(e._data = {}, !0), t.computed && Ke(e, t.computed), t.watch && t.watch !== Fi && Xe(e, t.watch);
      }function qe(e, t) {
        var n = e.$options.propsData || {},
            i = e._props = {},
            r = e.$options._propKeys = [],
            a = !e.$parent;er.shouldConvert = a;for (var o in t) (function (a) {
          r.push(a);var o = Q(a, t, n, e);N(i, a, o), a in e || He(e, "_props", a);
        })(o);er.shouldConvert = !0;
      }function We(e) {
        var t = e.$options.data;t = e._data = "function" == typeof t ? Ue(t, e) : t || {}, c(t) || (t = {});for (var n = Object.keys(t), i = e.$options.props, r = (e.$options.methods, n.length); r--;) {
          var a = n[r];i && m(i, a) || D(a) || He(e, "_data", a);
        }j(t, !0);
      }function Ue(e, t) {
        try {
          return e.call(t, t);
        } catch (e) {
          return te(e, t, "data()"), {};
        }
      }function Ke(e, t) {
        var n = e._computedWatchers = Object.create(null),
            i = Li();for (var r in t) {
          var a = t[r],
              o = "function" == typeof a ? a : a.get;i || (n[r] = new kr(e, o || k, k, Sr)), r in e || Je(e, r, a);
        }
      }function Je(e, t, n) {
        var i = !Li();"function" == typeof n ? (Cr.get = i ? Ge(t) : n, Cr.set = k) : (Cr.get = n.get ? i && !1 !== n.cache ? Ge(t) : n.get : k, Cr.set = n.set ? n.set : k), Object.defineProperty(e, t, Cr);
      }function Ge(e) {
        return function () {
          var t = this._computedWatchers && this._computedWatchers[e];if (t) return t.dirty && t.evaluate(), Wi.target && t.depend(), t.value;
        };
      }function Qe(e, t) {
        e.$options.props;for (var n in t) e[n] = null == t[n] ? k : g(t[n], e);
      }function Xe(e, t) {
        for (var n in t) {
          var i = t[n];if (Array.isArray(i)) for (var r = 0; r < i.length; r++) Ze(e, n, i[r]);else Ze(e, n, i);
        }
      }function Ze(e, t, n, i) {
        return c(n) && (i = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, i);
      }function et(e) {
        var t = e.$options.provide;t && (e._provided = "function" == typeof t ? t.call(e) : t);
      }function tt(e) {
        var t = nt(e.$options.inject, e);t && (er.shouldConvert = !1, Object.keys(t).forEach(function (n) {
          N(e, n, t[n]);
        }), er.shouldConvert = !0);
      }function nt(e, t) {
        if (e) {
          for (var n = Object.create(null), i = Hi ? Reflect.ownKeys(e).filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          }) : Object.keys(e), r = 0; r < i.length; r++) {
            for (var a = i[r], o = e[a].from, s = t; s;) {
              if (s._provided && o in s._provided) {
                n[a] = s._provided[o];break;
              }s = s.$parent;
            }if (!s && "default" in e[a]) {
              var l = e[a].default;n[a] = "function" == typeof l ? l.call(t) : l;
            }
          }return n;
        }
      }function it(e, t) {
        var n, i, a, o, s;if (Array.isArray(e) || "string" == typeof e) for (n = new Array(e.length), i = 0, a = e.length; i < a; i++) n[i] = t(e[i], i);else if ("number" == typeof e) for (n = new Array(e), i = 0; i < e; i++) n[i] = t(i + 1, i);else if (l(e)) for (o = Object.keys(e), n = new Array(o.length), i = 0, a = o.length; i < a; i++) s = o[i], n[i] = t(e[s], s, i);return r(n) && (n._isVList = !0), n;
      }function rt(e, t, n, i) {
        var r = this.$scopedSlots[e];if (r) return n = n || {}, i && (n = _(_({}, i), n)), r(n) || t;var a = this.$slots[e];return a || t;
      }function at(e) {
        return G(this.$options, "filters", e, !0) || wi;
      }function ot(e, t, n, i) {
        var r = Si.keyCodes[t] || n;return r ? Array.isArray(r) ? -1 === r.indexOf(e) : r !== e : i ? bi(i) !== t : void 0;
      }function st(e, t, n, i, r) {
        if (n) if (l(n)) {
          Array.isArray(n) && (n = w(n));var a;for (var o in n) (function (o) {
            if ("class" === o || "style" === o || pi(o)) a = e;else {
              var s = e.attrs && e.attrs.type;a = i || Si.mustUseProp(t, s, o) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
            }if (!(o in a) && (a[o] = n[o], r)) {
              (e.on || (e.on = {}))["update:" + o] = function (e) {
                n[o] = e;
              };
            }
          })(o);
        } else ;return e;
      }function lt(e, t) {
        var n = this.$options.staticRenderFns,
            i = n.cached || (n.cached = []),
            r = i[e];return r && !t ? Array.isArray(r) ? I(r) : V(r) : (r = i[e] = n[e].call(this._renderProxy, null, this), ut(r, "__static__" + e, !1), r);
      }function ct(e, t, n) {
        return ut(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
      }function ut(e, t, n) {
        if (Array.isArray(e)) for (var i = 0; i < e.length; i++) e[i] && "string" != typeof e[i] && dt(e[i], t + "_" + i, n);else dt(e, t, n);
      }function dt(e, t, n) {
        e.isStatic = !0, e.key = t, e.isOnce = n;
      }function ft(e, t) {
        if (t) if (c(t)) {
          var n = e.on = e.on ? _({}, e.on) : {};for (var i in t) {
            var r = n[i],
                a = t[i];n[i] = r ? [].concat(r, a) : a;
          }
        } else ;return e;
      }function pt(e) {
        e._o = ct, e._n = p, e._s = f, e._l = it, e._t = rt, e._q = x, e._i = C, e._m = lt, e._f = at, e._k = ot, e._b = st, e._v = P, e._e = Gi, e._u = $e, e._g = ft;
      }function ht(e, t, n, i, r) {
        var o = r.options;this.data = e, this.props = t, this.children = n, this.parent = i, this.listeners = e.on || Di, this.injections = nt(o.inject, i), this.slots = function () {
          return Se(n, i);
        };var s = Object.create(i),
            l = a(o._compiled),
            c = !l;l && (this.$options = o, this.$slots = this.slots(), this.$scopedSlots = e.scopedSlots || Di), o._scopeId ? this._c = function (e, t, n, r) {
          var a = kt(s, e, t, n, r, c);return a && (a.functionalScopeId = o._scopeId, a.functionalContext = i), a;
        } : this._c = function (e, t, n, i) {
          return kt(s, e, t, n, i, c);
        };
      }function vt(e, t, n, i, a) {
        var o = e.options,
            s = {},
            l = o.props;if (r(l)) for (var c in l) s[c] = Q(c, l, t || Di);else r(n.attrs) && mt(s, n.attrs), r(n.props) && mt(s, n.props);var u = new ht(n, s, a, i, e),
            d = o.render.call(null, u._c, u);return d instanceof Ki && (d.functionalContext = i, d.functionalOptions = o, n.slot && ((d.data || (d.data = {})).slot = n.slot)), d;
      }function mt(e, t) {
        for (var n in t) e[mi(n)] = t[n];
      }function yt(e, t, n, o, s) {
        if (!i(e)) {
          var c = n.$options._base;if (l(e) && (e = c.extend(e)), "function" == typeof e) {
            var u;if (i(e.cid) && (u = e, void 0 === (e = ge(u, c, n)))) return ye(u, t, n, o, s);t = t || {}, $t(e), r(t.model) && wt(e.options, t);var d = ue(t, e, s);if (a(e.options.functional)) return vt(e, d, t, n, o);var f = t.on;if (t.on = t.nativeOn, a(e.options.abstract)) {
              var p = t.slot;t = {}, p && (t.slot = p);
            }bt(t);var h = e.options.name || s;return new Ki("vue-component-" + e.cid + (h ? "-" + h : ""), t, void 0, void 0, void 0, n, { Ctor: e, propsData: d, listeners: f, tag: s, children: o }, u);
          }
        }
      }function gt(e, t, n, i) {
        var a = e.componentOptions,
            o = { _isComponent: !0, parent: t, propsData: a.propsData, _componentTag: a.tag, _parentVnode: e, _parentListeners: a.listeners, _renderChildren: a.children, _parentElm: n || null, _refElm: i || null },
            s = e.data.inlineTemplate;return r(s) && (o.render = s.render, o.staticRenderFns = s.staticRenderFns), new a.Ctor(o);
      }function bt(e) {
        e.hook || (e.hook = {});for (var t = 0; t < $r.length; t++) {
          var n = $r[t],
              i = e.hook[n],
              r = Dr[n];e.hook[n] = i ? _t(r, i) : r;
        }
      }function _t(e, t) {
        return function (n, i, r, a) {
          e(n, i, r, a), t(n, i, r, a);
        };
      }function wt(e, t) {
        var n = e.model && e.model.prop || "value",
            i = e.model && e.model.event || "input";(t.props || (t.props = {}))[n] = t.model.value;var a = t.on || (t.on = {});r(a[i]) ? a[i] = [t.model.callback].concat(a[i]) : a[i] = t.model.callback;
      }function kt(e, t, n, i, r, o) {
        return (Array.isArray(n) || s(n)) && (r = i, i = n, n = void 0), a(o) && (r = Or), xt(e, t, n, i, r);
      }function xt(e, t, n, i, a) {
        if (r(n) && r(n.__ob__)) return Gi();if (r(n) && r(n.is) && (t = n.is), !t) return Gi();Array.isArray(i) && "function" == typeof i[0] && (n = n || {}, n.scopedSlots = { default: i[0] }, i.length = 0), a === Or ? i = pe(i) : a === Ar && (i = fe(i));var o, s;if ("string" == typeof t) {
          var l;s = e.$vnode && e.$vnode.ns || Si.getTagNamespace(t), o = Si.isReservedTag(t) ? new Ki(Si.parsePlatformTagName(t), n, i, void 0, void 0, e) : r(l = G(e.$options, "components", t)) ? yt(l, n, e, i, t) : new Ki(t, n, i, void 0, void 0, e);
        } else o = yt(t, n, e, i);return r(o) ? (s && Ct(o, s), o) : Gi();
      }function Ct(e, t, n) {
        if (e.ns = t, "foreignObject" === e.tag && (t = void 0, n = !0), r(e.children)) for (var o = 0, s = e.children.length; o < s; o++) {
          var l = e.children[o];r(l.tag) && (i(l.ns) || a(n)) && Ct(l, t, n);
        }
      }function St(e) {
        e._vnode = null;var t = e.$options,
            n = e.$vnode = t._parentVnode,
            i = n && n.context;e.$slots = Se(t._renderChildren, i), e.$scopedSlots = Di, e._c = function (t, n, i, r) {
          return kt(e, t, n, i, r, !1);
        }, e.$createElement = function (t, n, i, r) {
          return kt(e, t, n, i, r, !0);
        };var r = n && n.data;N(e, "$attrs", r && r.attrs || Di, null, !0), N(e, "$listeners", t._parentListeners || Di, null, !0);
      }function Dt(e, t) {
        var n = e.$options = Object.create(e.constructor.options);n.parent = t.parent, n.propsData = t.propsData, n._parentVnode = t._parentVnode, n._parentListeners = t._parentListeners, n._renderChildren = t._renderChildren, n._componentTag = t._componentTag, n._parentElm = t._parentElm, n._refElm = t._refElm, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
      }function $t(e) {
        var t = e.options;if (e.super) {
          var n = $t(e.super);if (n !== e.superOptions) {
            e.superOptions = n;var i = At(e);i && _(e.extendOptions, i), t = e.options = J(n, e.extendOptions), t.name && (t.components[t.name] = e);
          }
        }return t;
      }function At(e) {
        var t,
            n = e.options,
            i = e.extendOptions,
            r = e.sealedOptions;for (var a in n) n[a] !== r[a] && (t || (t = {}), t[a] = Ot(n[a], i[a], r[a]));return t;
      }function Ot(e, t, n) {
        if (Array.isArray(e)) {
          var i = [];n = Array.isArray(n) ? n : [n], t = Array.isArray(t) ? t : [t];for (var r = 0; r < e.length; r++) (t.indexOf(e[r]) >= 0 || n.indexOf(e[r]) < 0) && i.push(e[r]);return i;
        }return e;
      }function Tt(e) {
        this._init(e);
      }function Mt(e) {
        e.use = function (e) {
          var t = this._installedPlugins || (this._installedPlugins = []);if (t.indexOf(e) > -1) return this;var n = b(arguments, 1);return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this;
        };
      }function Pt(e) {
        e.mixin = function (e) {
          return this.options = J(this.options, e), this;
        };
      }function Vt(e) {
        e.cid = 0;var t = 1;e.extend = function (e) {
          e = e || {};var n = this,
              i = n.cid,
              r = e._Ctor || (e._Ctor = {});if (r[i]) return r[i];var a = e.name || n.options.name,
              o = function (e) {
            this._init(e);
          };return o.prototype = Object.create(n.prototype), o.prototype.constructor = o, o.cid = t++, o.options = J(n.options, e), o.super = n, o.options.props && It(o), o.options.computed && Et(o), o.extend = n.extend, o.mixin = n.mixin, o.use = n.use, xi.forEach(function (e) {
            o[e] = n[e];
          }), a && (o.options.components[a] = o), o.superOptions = n.options, o.extendOptions = e, o.sealedOptions = _({}, o.options), r[i] = o, o;
        };
      }function It(e) {
        var t = e.options.props;for (var n in t) He(e.prototype, "_props", n);
      }function Et(e) {
        var t = e.options.computed;for (var n in t) Je(e.prototype, n, t[n]);
      }function Ft(e) {
        xi.forEach(function (t) {
          e[t] = function (e, n) {
            return n ? ("component" === t && c(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = { bind: n, update: n }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
          };
        });
      }function jt(e) {
        return e && (e.Ctor.options.name || e.tag);
      }function Nt(e, t) {
        return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!u(e) && e.test(t);
      }function Bt(e, t) {
        var n = e.cache,
            i = e.keys,
            r = e._vnode;for (var a in n) {
          var o = n[a];if (o) {
            var s = jt(o.componentOptions);s && !t(s) && Rt(n, a, i, r);
          }
        }
      }function Rt(e, t, n, i) {
        var r = e[t];r && r !== i && r.componentInstance.$destroy(), e[t] = null, v(n, t);
      }function Lt(e) {
        for (var t = e.data, n = e, i = e; r(i.componentInstance);) i = i.componentInstance._vnode, i.data && (t = zt(i.data, t));for (; r(n = n.parent);) n.data && (t = zt(t, n.data));return Ht(t.staticClass, t.class);
      }function zt(e, t) {
        return { staticClass: Yt(e.staticClass, t.staticClass), class: r(e.class) ? [e.class, t.class] : t.class };
      }function Ht(e, t) {
        return r(e) || r(t) ? Yt(e, qt(t)) : "";
      }function Yt(e, t) {
        return e ? t ? e + " " + t : e : t || "";
      }function qt(e) {
        return Array.isArray(e) ? Wt(e) : l(e) ? Ut(e) : "string" == typeof e ? e : "";
      }function Wt(e) {
        for (var t, n = "", i = 0, a = e.length; i < a; i++) r(t = qt(e[i])) && "" !== t && (n && (n += " "), n += t);return n;
      }function Ut(e) {
        var t = "";for (var n in e) e[n] && (t && (t += " "), t += n);return t;
      }function Kt(e) {
        return Ur(e) ? "svg" : "math" === e ? "math" : void 0;
      }function Jt(e) {
        if (!Oi) return !0;if (Kr(e)) return !1;if (e = e.toLowerCase(), null != Jr[e]) return Jr[e];var t = document.createElement(e);return e.indexOf("-") > -1 ? Jr[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Jr[e] = /HTMLUnknownElement/.test(t.toString());
      }function Gt(e) {
        if ("string" == typeof e) {
          var t = document.querySelector(e);return t || document.createElement("div");
        }return e;
      }function Qt(e, t) {
        var n = document.createElement(e);return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n);
      }function Xt(e, t) {
        return document.createElementNS(qr[e], t);
      }function Zt(e) {
        return document.createTextNode(e);
      }function en(e) {
        return document.createComment(e);
      }function tn(e, t, n) {
        e.insertBefore(t, n);
      }function nn(e, t) {
        e.removeChild(t);
      }function rn(e, t) {
        e.appendChild(t);
      }function an(e) {
        return e.parentNode;
      }function on(e) {
        return e.nextSibling;
      }function sn(e) {
        return e.tagName;
      }function ln(e, t) {
        e.textContent = t;
      }function cn(e, t, n) {
        e.setAttribute(t, n);
      }function un(e, t) {
        var n = e.data.ref;if (n) {
          var i = e.context,
              r = e.componentInstance || e.elm,
              a = i.$refs;t ? Array.isArray(a[n]) ? v(a[n], r) : a[n] === r && (a[n] = void 0) : e.data.refInFor ? Array.isArray(a[n]) ? a[n].indexOf(r) < 0 && a[n].push(r) : a[n] = [r] : a[n] = r;
        }
      }function dn(e, t) {
        return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && r(e.data) === r(t.data) && fn(e, t) || a(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && i(t.asyncFactory.error));
      }function fn(e, t) {
        if ("input" !== e.tag) return !0;var n,
            i = r(n = e.data) && r(n = n.attrs) && n.type,
            a = r(n = t.data) && r(n = n.attrs) && n.type;return i === a || Gr(i) && Gr(a);
      }function pn(e, t, n) {
        var i,
            a,
            o = {};for (i = t; i <= n; ++i) a = e[i].key, r(a) && (o[a] = i);return o;
      }function hn(e, t) {
        (e.data.directives || t.data.directives) && vn(e, t);
      }function vn(e, t) {
        var n,
            i,
            r,
            a = e === Zr,
            o = t === Zr,
            s = mn(e.data.directives, e.context),
            l = mn(t.data.directives, t.context),
            c = [],
            u = [];for (n in l) i = s[n], r = l[n], i ? (r.oldValue = i.value, gn(r, "update", t, e), r.def && r.def.componentUpdated && u.push(r)) : (gn(r, "bind", t, e), r.def && r.def.inserted && c.push(r));if (c.length) {
          var d = function () {
            for (var n = 0; n < c.length; n++) gn(c[n], "inserted", t, e);
          };a ? ce(t.data.hook || (t.data.hook = {}), "insert", d) : d();
        }if (u.length && ce(t.data.hook || (t.data.hook = {}), "postpatch", function () {
          for (var n = 0; n < u.length; n++) gn(u[n], "componentUpdated", t, e);
        }), !a) for (n in s) l[n] || gn(s[n], "unbind", e, e, o);
      }function mn(e, t) {
        var n = Object.create(null);if (!e) return n;var i, r;for (i = 0; i < e.length; i++) r = e[i], r.modifiers || (r.modifiers = na), n[yn(r)] = r, r.def = G(t.$options, "directives", r.name, !0);return n;
      }function yn(e) {
        return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".");
      }function gn(e, t, n, i, r) {
        var a = e.def && e.def[t];if (a) try {
          a(n.elm, e, n, i, r);
        } catch (i) {
          te(i, n.context, "directive " + e.name + " " + t + " hook");
        }
      }function bn(e, t) {
        var n = t.componentOptions;if (!(r(n) && !1 === n.Ctor.options.inheritAttrs || i(e.data.attrs) && i(t.data.attrs))) {
          var a,
              o,
              s = t.elm,
              l = e.data.attrs || {},
              c = t.data.attrs || {};r(c.__ob__) && (c = t.data.attrs = _({}, c));for (a in c) o = c[a], l[a] !== o && _n(s, a, o);(Pi || Vi) && c.value !== l.value && _n(s, "value", c.value);for (a in l) i(c[a]) && (zr(a) ? s.removeAttributeNS(Lr, Hr(a)) : Br(a) || s.removeAttribute(a));
        }
      }function _n(e, t, n) {
        Rr(t) ? Yr(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : Br(t) ? e.setAttribute(t, Yr(n) || "false" === n ? "false" : "true") : zr(t) ? Yr(n) ? e.removeAttributeNS(Lr, Hr(t)) : e.setAttributeNS(Lr, t, n) : Yr(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
      }function wn(e, t) {
        var n = t.elm,
            a = t.data,
            o = e.data;if (!(i(a.staticClass) && i(a.class) && (i(o) || i(o.staticClass) && i(o.class)))) {
          var s = Lt(t),
              l = n._transitionClasses;r(l) && (s = Yt(s, qt(l))), s !== n._prevClass && (n.setAttribute("class", s), n._prevClass = s);
        }
      }function kn(e) {
        if (r(e[oa])) {
          var t = Mi ? "change" : "input";e[t] = [].concat(e[oa], e[t] || []), delete e[oa];
        }r(e[sa]) && (e.change = [].concat(e[sa], e.change || []), delete e[sa]);
      }function xn(e, t, n) {
        var i = Ir;return function r() {
          null !== e.apply(null, arguments) && Sn(t, r, n, i);
        };
      }function Cn(e, t, n, i, r) {
        t = ae(t), n && (t = xn(t, e, i)), Ir.addEventListener(e, t, ji ? { capture: i, passive: r } : i);
      }function Sn(e, t, n, i) {
        (i || Ir).removeEventListener(e, t._withTask || t, n);
      }function Dn(e, t) {
        if (!i(e.data.on) || !i(t.data.on)) {
          var n = t.data.on || {},
              r = e.data.on || {};Ir = t.elm, kn(n), le(n, r, Cn, Sn, t.context);
        }
      }function $n(e, t) {
        if (!i(e.data.domProps) || !i(t.data.domProps)) {
          var n,
              a,
              o = t.elm,
              s = e.data.domProps || {},
              l = t.data.domProps || {};r(l.__ob__) && (l = t.data.domProps = _({}, l));for (n in s) i(l[n]) && (o[n] = "");for (n in l) {
            if (a = l[n], "textContent" === n || "innerHTML" === n) {
              if (t.children && (t.children.length = 0), a === s[n]) continue;1 === o.childNodes.length && o.removeChild(o.childNodes[0]);
            }if ("value" === n) {
              o._value = a;var c = i(a) ? "" : String(a);An(o, c) && (o.value = c);
            } else o[n] = a;
          }
        }
      }function An(e, t) {
        return !e.composing && ("OPTION" === e.tagName || On(e, t) || Tn(e, t));
      }function On(e, t) {
        var n = !0;try {
          n = document.activeElement !== e;
        } catch (e) {}return n && e.value !== t;
      }function Tn(e, t) {
        var n = e.value,
            i = e._vModifiers;return r(i) && i.number ? p(n) !== p(t) : r(i) && i.trim ? n.trim() !== t.trim() : n !== t;
      }function Mn(e) {
        var t = Pn(e.style);return e.staticStyle ? _(e.staticStyle, t) : t;
      }function Pn(e) {
        return Array.isArray(e) ? w(e) : "string" == typeof e ? ua(e) : e;
      }function Vn(e, t) {
        var n,
            i = {};if (t) for (var r = e; r.componentInstance;) r = r.componentInstance._vnode, r.data && (n = Mn(r.data)) && _(i, n);(n = Mn(e.data)) && _(i, n);for (var a = e; a = a.parent;) a.data && (n = Mn(a.data)) && _(i, n);return i;
      }function In(e, t) {
        var n = t.data,
            a = e.data;if (!(i(n.staticStyle) && i(n.style) && i(a.staticStyle) && i(a.style))) {
          var o,
              s,
              l = t.elm,
              c = a.staticStyle,
              u = a.normalizedStyle || a.style || {},
              d = c || u,
              f = Pn(t.data.style) || {};t.data.normalizedStyle = r(f.__ob__) ? _({}, f) : f;var p = Vn(t, !0);for (s in d) i(p[s]) && pa(l, s, "");for (s in p) (o = p[s]) !== d[s] && pa(l, s, null == o ? "" : o);
        }
      }function En(e, t) {
        if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function (t) {
          return e.classList.add(t);
        }) : e.classList.add(t);else {
          var n = " " + (e.getAttribute("class") || "") + " ";n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim());
        }
      }function Fn(e, t) {
        if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function (t) {
          return e.classList.remove(t);
        }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");else {
          for (var n = " " + (e.getAttribute("class") || "") + " ", i = " " + t + " "; n.indexOf(i) >= 0;) n = n.replace(i, " ");n = n.trim(), n ? e.setAttribute("class", n) : e.removeAttribute("class");
        }
      }function jn(e) {
        if (e) {
          if ("object" == typeof e) {
            var t = {};return !1 !== e.css && _(t, ya(e.name || "v")), _(t, e), t;
          }return "string" == typeof e ? ya(e) : void 0;
        }
      }function Nn(e) {
        Sa(function () {
          Sa(e);
        });
      }function Bn(e, t) {
        var n = e._transitionClasses || (e._transitionClasses = []);n.indexOf(t) < 0 && (n.push(t), En(e, t));
      }function Rn(e, t) {
        e._transitionClasses && v(e._transitionClasses, t), Fn(e, t);
      }function Ln(e, t, n) {
        var i = zn(e, t),
            r = i.type,
            a = i.timeout,
            o = i.propCount;if (!r) return n();var s = r === ba ? ka : Ca,
            l = 0,
            c = function () {
          e.removeEventListener(s, u), n();
        },
            u = function (t) {
          t.target === e && ++l >= o && c();
        };setTimeout(function () {
          l < o && c();
        }, a + 1), e.addEventListener(s, u);
      }function zn(e, t) {
        var n,
            i = window.getComputedStyle(e),
            r = i[wa + "Delay"].split(", "),
            a = i[wa + "Duration"].split(", "),
            o = Hn(r, a),
            s = i[xa + "Delay"].split(", "),
            l = i[xa + "Duration"].split(", "),
            c = Hn(s, l),
            u = 0,
            d = 0;return t === ba ? o > 0 && (n = ba, u = o, d = a.length) : t === _a ? c > 0 && (n = _a, u = c, d = l.length) : (u = Math.max(o, c), n = u > 0 ? o > c ? ba : _a : null, d = n ? n === ba ? a.length : l.length : 0), { type: n, timeout: u, propCount: d, hasTransform: n === ba && Da.test(i[wa + "Property"]) };
      }function Hn(e, t) {
        for (; e.length < t.length;) e = e.concat(e);return Math.max.apply(null, t.map(function (t, n) {
          return Yn(t) + Yn(e[n]);
        }));
      }function Yn(e) {
        return 1e3 * Number(e.slice(0, -1));
      }function qn(e, t) {
        var n = e.elm;r(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());var a = jn(e.data.transition);if (!i(a) && !r(n._enterCb) && 1 === n.nodeType) {
          for (var o = a.css, s = a.type, c = a.enterClass, u = a.enterToClass, d = a.enterActiveClass, f = a.appearClass, h = a.appearToClass, v = a.appearActiveClass, m = a.beforeEnter, y = a.enter, g = a.afterEnter, b = a.enterCancelled, _ = a.beforeAppear, w = a.appear, k = a.afterAppear, x = a.appearCancelled, C = a.duration, D = hr, $ = hr.$vnode; $ && $.parent;) $ = $.parent, D = $.context;var A = !D._isMounted || !e.isRootInsert;if (!A || w || "" === w) {
            var O = A && f ? f : c,
                T = A && v ? v : d,
                M = A && h ? h : u,
                P = A ? _ || m : m,
                V = A && "function" == typeof w ? w : y,
                I = A ? k || g : g,
                E = A ? x || b : b,
                F = p(l(C) ? C.enter : C),
                j = !1 !== o && !Pi,
                N = Kn(V),
                B = n._enterCb = S(function () {
              j && (Rn(n, M), Rn(n, T)), B.cancelled ? (j && Rn(n, O), E && E(n)) : I && I(n), n._enterCb = null;
            });e.data.show || ce(e.data.hook || (e.data.hook = {}), "insert", function () {
              var t = n.parentNode,
                  i = t && t._pending && t._pending[e.key];i && i.tag === e.tag && i.elm._leaveCb && i.elm._leaveCb(), V && V(n, B);
            }), P && P(n), j && (Bn(n, O), Bn(n, T), Nn(function () {
              Bn(n, M), Rn(n, O), B.cancelled || N || (Un(F) ? setTimeout(B, F) : Ln(n, s, B));
            })), e.data.show && (t && t(), V && V(n, B)), j || N || B();
          }
        }
      }function Wn(e, t) {
        function n() {
          x.cancelled || (e.data.show || ((a.parentNode._pending || (a.parentNode._pending = {}))[e.key] = e), h && h(a), _ && (Bn(a, u), Bn(a, f), Nn(function () {
            Bn(a, d), Rn(a, u), x.cancelled || w || (Un(k) ? setTimeout(x, k) : Ln(a, c, x));
          })), v && v(a, x), _ || w || x());
        }var a = e.elm;r(a._enterCb) && (a._enterCb.cancelled = !0, a._enterCb());var o = jn(e.data.transition);if (i(o)) return t();if (!r(a._leaveCb) && 1 === a.nodeType) {
          var s = o.css,
              c = o.type,
              u = o.leaveClass,
              d = o.leaveToClass,
              f = o.leaveActiveClass,
              h = o.beforeLeave,
              v = o.leave,
              m = o.afterLeave,
              y = o.leaveCancelled,
              g = o.delayLeave,
              b = o.duration,
              _ = !1 !== s && !Pi,
              w = Kn(v),
              k = p(l(b) ? b.leave : b),
              x = a._leaveCb = S(function () {
            a.parentNode && a.parentNode._pending && (a.parentNode._pending[e.key] = null), _ && (Rn(a, d), Rn(a, f)), x.cancelled ? (_ && Rn(a, u), y && y(a)) : (t(), m && m(a)), a._leaveCb = null;
          });g ? g(n) : n();
        }
      }function Un(e) {
        return "number" == typeof e && !isNaN(e);
      }function Kn(e) {
        if (i(e)) return !1;var t = e.fns;return r(t) ? Kn(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1;
      }function Jn(e, t) {
        !0 !== t.data.show && qn(t);
      }function Gn(e, t, n) {
        Qn(e, t, n), (Mi || Vi) && setTimeout(function () {
          Qn(e, t, n);
        }, 0);
      }function Qn(e, t, n) {
        var i = t.value,
            r = e.multiple;if (!r || Array.isArray(i)) {
          for (var a, o, s = 0, l = e.options.length; s < l; s++) if (o = e.options[s], r) a = C(i, Zn(o)) > -1, o.selected !== a && (o.selected = a);else if (x(Zn(o), i)) return void (e.selectedIndex !== s && (e.selectedIndex = s));r || (e.selectedIndex = -1);
        }
      }function Xn(e, t) {
        return t.every(function (t) {
          return !x(t, e);
        });
      }function Zn(e) {
        return "_value" in e ? e._value : e.value;
      }function ei(e) {
        e.target.composing = !0;
      }function ti(e) {
        e.target.composing && (e.target.composing = !1, ni(e.target, "input"));
      }function ni(e, t) {
        var n = document.createEvent("HTMLEvents");n.initEvent(t, !0, !0), e.dispatchEvent(n);
      }function ii(e) {
        return !e.componentInstance || e.data && e.data.transition ? e : ii(e.componentInstance._vnode);
      }function ri(e) {
        var t = e && e.componentOptions;return t && t.Ctor.options.abstract ? ri(_e(t.children)) : e;
      }function ai(e) {
        var t = {},
            n = e.$options;for (var i in n.propsData) t[i] = e[i];var r = n._parentListeners;for (var a in r) t[mi(a)] = r[a];return t;
      }function oi(e, t) {
        if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", { props: t.componentOptions.propsData });
      }function si(e) {
        for (; e = e.parent;) if (e.data.transition) return !0;
      }function li(e, t) {
        return t.key === e.key && t.tag === e.tag;
      }function ci(e) {
        e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
      }function ui(e) {
        e.data.newPos = e.elm.getBoundingClientRect();
      }function di(e) {
        var t = e.data.pos,
            n = e.data.newPos,
            i = t.left - n.left,
            r = t.top - n.top;if (i || r) {
          e.data.moved = !0;var a = e.elm.style;a.transform = a.WebkitTransform = "translate(" + i + "px," + r + "px)", a.transitionDuration = "0s";
        }
      }var fi = Object.prototype.toString,
          pi = (h("slot,component", !0), h("key,ref,slot,slot-scope,is")),
          hi = Object.prototype.hasOwnProperty,
          vi = /-(\w)/g,
          mi = y(function (e) {
        return e.replace(vi, function (e, t) {
          return t ? t.toUpperCase() : "";
        });
      }),
          yi = y(function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }),
          gi = /\B([A-Z])/g,
          bi = y(function (e) {
        return e.replace(gi, "-$1").toLowerCase();
      }),
          _i = function (e, t, n) {
        return !1;
      },
          wi = function (e) {
        return e;
      },
          ki = "data-server-rendered",
          xi = ["component", "directive", "filter"],
          Ci = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured"],
          Si = { optionMergeStrategies: Object.create(null), silent: !1, productionTip: !1, devtools: !1, performance: !1, errorHandler: null, warnHandler: null, ignoredElements: [], keyCodes: Object.create(null), isReservedTag: _i, isReservedAttr: _i, isUnknownElement: _i, getTagNamespace: k, parsePlatformTagName: wi, mustUseProp: _i, _lifecycleHooks: Ci },
          Di = Object.freeze({}),
          $i = /[^\w.$]/,
          Ai = "__proto__" in {},
          Oi = "undefined" != typeof window,
          Ti = Oi && window.navigator.userAgent.toLowerCase(),
          Mi = Ti && /msie|trident/.test(Ti),
          Pi = Ti && Ti.indexOf("msie 9.0") > 0,
          Vi = Ti && Ti.indexOf("edge/") > 0,
          Ii = Ti && Ti.indexOf("android") > 0,
          Ei = Ti && /iphone|ipad|ipod|ios/.test(Ti),
          Fi = (Ti && /chrome\/\d+/.test(Ti), {}.watch),
          ji = !1;if (Oi) try {
        var Ni = {};Object.defineProperty(Ni, "passive", { get: function () {
            ji = !0;
          } }), window.addEventListener("test-passive", null, Ni);
      } catch (e) {}var Bi,
          Ri,
          Li = function () {
        return void 0 === Bi && (Bi = !Oi && void 0 !== e && "server" === e.process.env.VUE_ENV), Bi;
      },
          zi = Oi && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
          Hi = "undefined" != typeof Symbol && O(Symbol) && "undefined" != typeof Reflect && O(Reflect.ownKeys);Ri = "undefined" != typeof Set && O(Set) ? Set : function () {
        function e() {
          this.set = Object.create(null);
        }return e.prototype.has = function (e) {
          return !0 === this.set[e];
        }, e.prototype.add = function (e) {
          this.set[e] = !0;
        }, e.prototype.clear = function () {
          this.set = Object.create(null);
        }, e;
      }();var Yi = k,
          qi = 0,
          Wi = function () {
        this.id = qi++, this.subs = [];
      };Wi.prototype.addSub = function (e) {
        this.subs.push(e);
      }, Wi.prototype.removeSub = function (e) {
        v(this.subs, e);
      }, Wi.prototype.depend = function () {
        Wi.target && Wi.target.addDep(this);
      }, Wi.prototype.notify = function () {
        for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update();
      }, Wi.target = null;var Ui = [],
          Ki = function (e, t, n, i, r, a, o, s) {
        this.tag = e, this.data = t, this.children = n, this.text = i, this.elm = r, this.ns = void 0, this.context = a, this.functionalContext = void 0, this.functionalOptions = void 0, this.functionalScopeId = void 0, this.key = t && t.key, this.componentOptions = o, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
      },
          Ji = { child: { configurable: !0 } };Ji.child.get = function () {
        return this.componentInstance;
      }, Object.defineProperties(Ki.prototype, Ji);var Gi = function (e) {
        void 0 === e && (e = "");var t = new Ki();return t.text = e, t.isComment = !0, t;
      },
          Qi = Array.prototype,
          Xi = Object.create(Qi);["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
        var t = Qi[e];$(Xi, e, function () {
          for (var n = [], i = arguments.length; i--;) n[i] = arguments[i];var r,
              a = t.apply(this, n),
              o = this.__ob__;switch (e) {case "push":case "unshift":
              r = n;break;case "splice":
              r = n.slice(2);}return r && o.observeArray(r), o.dep.notify(), a;
        });
      });var Zi = Object.getOwnPropertyNames(Xi),
          er = { shouldConvert: !0 },
          tr = function (e) {
        if (this.value = e, this.dep = new Wi(), this.vmCount = 0, $(e, "__ob__", this), Array.isArray(e)) {
          (Ai ? E : F)(e, Xi, Zi), this.observeArray(e);
        } else this.walk(e);
      };tr.prototype.walk = function (e) {
        for (var t = Object.keys(e), n = 0; n < t.length; n++) N(e, t[n], e[t[n]]);
      }, tr.prototype.observeArray = function (e) {
        for (var t = 0, n = e.length; t < n; t++) j(e[t]);
      };var nr = Si.optionMergeStrategies;nr.data = function (e, t, n) {
        return n ? H(e, t, n) : t && "function" != typeof t ? e : H.call(this, e, t);
      }, Ci.forEach(function (e) {
        nr[e] = Y;
      }), xi.forEach(function (e) {
        nr[e + "s"] = q;
      }), nr.watch = function (e, t, n, i) {
        if (e === Fi && (e = void 0), t === Fi && (t = void 0), !t) return Object.create(e || null);if (!e) return t;var r = {};_(r, e);for (var a in t) {
          var o = r[a],
              s = t[a];o && !Array.isArray(o) && (o = [o]), r[a] = o ? o.concat(s) : Array.isArray(s) ? s : [s];
        }return r;
      }, nr.props = nr.methods = nr.inject = nr.computed = function (e, t, n, i) {
        if (!e) return t;var r = Object.create(null);return _(r, e), t && _(r, t), r;
      }, nr.provide = H;var ir,
          rr,
          ar = function (e, t) {
        return void 0 === t ? e : t;
      },
          or = [],
          sr = !1,
          lr = !1;if (void 0 !== n && O(n)) rr = function () {
        n(re);
      };else if ("undefined" == typeof MessageChannel || !O(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString()) rr = function () {
        setTimeout(re, 0);
      };else {
        var cr = new MessageChannel(),
            ur = cr.port2;cr.port1.onmessage = re, rr = function () {
          ur.postMessage(1);
        };
      }if ("undefined" != typeof Promise && O(Promise)) {
        var dr = Promise.resolve();ir = function () {
          dr.then(re), Ei && setTimeout(k);
        };
      } else ir = rr;var fr,
          pr = y(function (e) {
        var t = "&" === e.charAt(0);e = t ? e.slice(1) : e;var n = "~" === e.charAt(0);e = n ? e.slice(1) : e;var i = "!" === e.charAt(0);return e = i ? e.slice(1) : e, { name: e, once: n, capture: i, passive: t };
      }),
          hr = null,
          vr = [],
          mr = [],
          yr = {},
          gr = !1,
          br = !1,
          _r = 0,
          wr = 0,
          kr = function (e, t, n, i) {
        this.vm = e, e._watchers.push(this), i ? (this.deep = !!i.deep, this.user = !!i.user, this.lazy = !!i.lazy, this.sync = !!i.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++wr, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new Ri(), this.newDepIds = new Ri(), this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = A(t), this.getter || (this.getter = function () {})), this.value = this.lazy ? void 0 : this.get();
      };kr.prototype.get = function () {
        T(this);var e,
            t = this.vm;try {
          e = this.getter.call(t, t);
        } catch (e) {
          if (!this.user) throw e;te(e, t, 'getter for watcher "' + this.expression + '"');
        } finally {
          this.deep && Le(e), M(), this.cleanupDeps();
        }return e;
      }, kr.prototype.addDep = function (e) {
        var t = e.id;this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
      }, kr.prototype.cleanupDeps = function () {
        for (var e = this, t = this.deps.length; t--;) {
          var n = e.deps[t];e.newDepIds.has(n.id) || n.removeSub(e);
        }var i = this.depIds;this.depIds = this.newDepIds, this.newDepIds = i, this.newDepIds.clear(), i = this.deps, this.deps = this.newDeps, this.newDeps = i, this.newDeps.length = 0;
      }, kr.prototype.update = function () {
        this.lazy ? this.dirty = !0 : this.sync ? this.run() : Re(this);
      }, kr.prototype.run = function () {
        if (this.active) {
          var e = this.get();if (e !== this.value || l(e) || this.deep) {
            var t = this.value;if (this.value = e, this.user) try {
              this.cb.call(this.vm, e, t);
            } catch (e) {
              te(e, this.vm, 'callback for watcher "' + this.expression + '"');
            } else this.cb.call(this.vm, e, t);
          }
        }
      }, kr.prototype.evaluate = function () {
        this.value = this.get(), this.dirty = !1;
      }, kr.prototype.depend = function () {
        for (var e = this, t = this.deps.length; t--;) e.deps[t].depend();
      }, kr.prototype.teardown = function () {
        var e = this;if (this.active) {
          this.vm._isBeingDestroyed || v(this.vm._watchers, this);for (var t = this.deps.length; t--;) e.deps[t].removeSub(e);this.active = !1;
        }
      };var xr = new Ri(),
          Cr = { enumerable: !0, configurable: !0, get: k, set: k },
          Sr = { lazy: !0 };pt(ht.prototype);var Dr = { init: function (e, t, n, i) {
          if (!e.componentInstance || e.componentInstance._isDestroyed) {
            (e.componentInstance = gt(e, hr, n, i)).$mount(t ? e.elm : void 0, t);
          } else if (e.data.keepAlive) {
            var r = e;Dr.prepatch(r, r);
          }
        }, prepatch: function (e, t) {
          var n = t.componentOptions;Te(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children);
        }, insert: function (e) {
          var t = e.context,
              n = e.componentInstance;n._isMounted || (n._isMounted = !0, Ie(n, "mounted")), e.data.keepAlive && (t._isMounted ? Ne(n) : Pe(n, !0));
        }, destroy: function (e) {
          var t = e.componentInstance;t._isDestroyed || (e.data.keepAlive ? Ve(t, !0) : t.$destroy());
        } },
          $r = Object.keys(Dr),
          Ar = 1,
          Or = 2,
          Tr = 0;(function (e) {
        e.prototype._init = function (e) {
          var t = this;t._uid = Tr++;t._isVue = !0, e && e._isComponent ? Dt(t, e) : t.$options = J($t(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, Ae(t), we(t), St(t), Ie(t, "beforeCreate"), tt(t), Ye(t), et(t), Ie(t, "created"), t.$options.el && t.$mount(t.$options.el);
        };
      })(Tt), function (e) {
        var t = {};t.get = function () {
          return this._data;
        };var n = {};n.get = function () {
          return this._props;
        }, Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = B, e.prototype.$delete = R, e.prototype.$watch = function (e, t, n) {
          var i = this;if (c(t)) return Ze(i, e, t, n);n = n || {}, n.user = !0;var r = new kr(i, e, t, n);return n.immediate && t.call(i, r.value), function () {
            r.teardown();
          };
        };
      }(Tt), function (e) {
        var t = /^hook:/;e.prototype.$on = function (e, n) {
          var i = this,
              r = this;if (Array.isArray(e)) for (var a = 0, o = e.length; a < o; a++) i.$on(e[a], n);else (r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);return r;
        }, e.prototype.$once = function (e, t) {
          function n() {
            i.$off(e, n), t.apply(i, arguments);
          }var i = this;return n.fn = t, i.$on(e, n), i;
        }, e.prototype.$off = function (e, t) {
          var n = this,
              i = this;if (!arguments.length) return i._events = Object.create(null), i;if (Array.isArray(e)) {
            for (var r = 0, a = e.length; r < a; r++) n.$off(e[r], t);return i;
          }var o = i._events[e];if (!o) return i;if (1 === arguments.length) return i._events[e] = null, i;if (t) for (var s, l = o.length; l--;) if ((s = o[l]) === t || s.fn === t) {
            o.splice(l, 1);break;
          }return i;
        }, e.prototype.$emit = function (e) {
          var t = this,
              n = t._events[e];if (n) {
            n = n.length > 1 ? b(n) : n;for (var i = b(arguments, 1), r = 0, a = n.length; r < a; r++) try {
              n[r].apply(t, i);
            } catch (n) {
              te(n, t, 'event handler for "' + e + '"');
            }
          }return t;
        };
      }(Tt), function (e) {
        e.prototype._update = function (e, t) {
          var n = this;n._isMounted && Ie(n, "beforeUpdate");var i = n.$el,
              r = n._vnode,
              a = hr;hr = n, n._vnode = e, r ? n.$el = n.__patch__(r, e) : (n.$el = n.__patch__(n.$el, e, t, !1, n.$options._parentElm, n.$options._refElm), n.$options._parentElm = n.$options._refElm = null), hr = a, i && (i.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
        }, e.prototype.$forceUpdate = function () {
          var e = this;e._watcher && e._watcher.update();
        }, e.prototype.$destroy = function () {
          var e = this;if (!e._isBeingDestroyed) {
            Ie(e, "beforeDestroy"), e._isBeingDestroyed = !0;var t = e.$parent;!t || t._isBeingDestroyed || e.$options.abstract || v(t.$children, e), e._watcher && e._watcher.teardown();for (var n = e._watchers.length; n--;) e._watchers[n].teardown();e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), Ie(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
          }
        };
      }(Tt), function (e) {
        pt(e.prototype), e.prototype.$nextTick = function (e) {
          return oe(e, this);
        }, e.prototype._render = function () {
          var e = this,
              t = e.$options,
              n = t.render,
              i = t._parentVnode;if (e._isMounted) for (var r in e.$slots) {
            var a = e.$slots[r];a._rendered && (e.$slots[r] = I(a, !0));
          }e.$scopedSlots = i && i.data.scopedSlots || Di, e.$vnode = i;var o;try {
            o = n.call(e._renderProxy, e.$createElement);
          } catch (t) {
            te(t, e, "render"), o = e._vnode;
          }return o instanceof Ki || (o = Gi()), o.parent = i, o;
        };
      }(Tt);var Mr = [String, RegExp, Array],
          Pr = { name: "keep-alive", abstract: !0, props: { include: Mr, exclude: Mr, max: [String, Number] }, created: function () {
          this.cache = Object.create(null), this.keys = [];
        }, destroyed: function () {
          var e = this;for (var t in e.cache) Rt(e.cache, t, e.keys);
        }, watch: { include: function (e) {
            Bt(this, function (t) {
              return Nt(e, t);
            });
          }, exclude: function (e) {
            Bt(this, function (t) {
              return !Nt(e, t);
            });
          } }, render: function () {
          var e = _e(this.$slots.default),
              t = e && e.componentOptions;if (t) {
            var n = jt(t);if (n && (this.include && !Nt(this.include, n) || this.exclude && Nt(this.exclude, n))) return e;var i = this,
                r = i.cache,
                a = i.keys,
                o = null == e.key ? t.Ctor.cid + (t.tag ? "::" + t.tag : "") : e.key;r[o] ? (e.componentInstance = r[o].componentInstance, v(a, o), a.push(o)) : (r[o] = e, a.push(o), this.max && a.length > parseInt(this.max) && Rt(r, a[0], a, this._vnode)), e.data.keepAlive = !0;
          }return e;
        } },
          Vr = { KeepAlive: Pr };(function (e) {
        var t = {};t.get = function () {
          return Si;
        }, Object.defineProperty(e, "config", t), e.util = { warn: Yi, extend: _, mergeOptions: J, defineReactive: N }, e.set = B, e.delete = R, e.nextTick = oe, e.options = Object.create(null), xi.forEach(function (t) {
          e.options[t + "s"] = Object.create(null);
        }), e.options._base = e, _(e.options.components, Vr), Mt(e), Pt(e), Vt(e), Ft(e);
      })(Tt), Object.defineProperty(Tt.prototype, "$isServer", { get: Li }), Object.defineProperty(Tt.prototype, "$ssrContext", { get: function () {
          return this.$vnode && this.$vnode.ssrContext;
        } }), Tt.version = "2.5.2";var Ir,
          Er,
          Fr = h("style,class"),
          jr = h("input,textarea,option,select,progress"),
          Nr = function (e, t, n) {
        return "value" === n && jr(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e;
      },
          Br = h("contenteditable,draggable,spellcheck"),
          Rr = h("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
          Lr = "http://www.w3.org/1999/xlink",
          zr = function (e) {
        return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
      },
          Hr = function (e) {
        return zr(e) ? e.slice(6, e.length) : "";
      },
          Yr = function (e) {
        return null == e || !1 === e;
      },
          qr = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" },
          Wr = h("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
          Ur = h("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
          Kr = function (e) {
        return Wr(e) || Ur(e);
      },
          Jr = Object.create(null),
          Gr = h("text,number,password,search,email,tel,url"),
          Qr = Object.freeze({ createElement: Qt, createElementNS: Xt, createTextNode: Zt, createComment: en, insertBefore: tn, removeChild: nn, appendChild: rn, parentNode: an, nextSibling: on, tagName: sn, setTextContent: ln, setAttribute: cn }),
          Xr = { create: function (e, t) {
          un(t);
        }, update: function (e, t) {
          e.data.ref !== t.data.ref && (un(e, !0), un(t));
        }, destroy: function (e) {
          un(e, !0);
        } },
          Zr = new Ki("", {}, []),
          ea = ["create", "activate", "update", "remove", "destroy"],
          ta = { create: hn, update: hn, destroy: function (e) {
          hn(e, Zr);
        } },
          na = Object.create(null),
          ia = [Xr, ta],
          ra = { create: bn, update: bn },
          aa = { create: wn, update: wn },
          oa = "__r",
          sa = "__c",
          la = { create: Dn, update: Dn },
          ca = { create: $n, update: $n },
          ua = y(function (e) {
        var t = {},
            n = /;(?![^(]*\))/g,
            i = /:(.+)/;return e.split(n).forEach(function (e) {
          if (e) {
            var n = e.split(i);n.length > 1 && (t[n[0].trim()] = n[1].trim());
          }
        }), t;
      }),
          da = /^--/,
          fa = /\s*!important$/,
          pa = function (e, t, n) {
        if (da.test(t)) e.style.setProperty(t, n);else if (fa.test(n)) e.style.setProperty(t, n.replace(fa, ""), "important");else {
          var i = va(t);if (Array.isArray(n)) for (var r = 0, a = n.length; r < a; r++) e.style[i] = n[r];else e.style[i] = n;
        }
      },
          ha = ["Webkit", "Moz", "ms"],
          va = y(function (e) {
        if (Er = Er || document.createElement("div").style, "filter" !== (e = mi(e)) && e in Er) return e;for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < ha.length; n++) {
          var i = ha[n] + t;if (i in Er) return i;
        }
      }),
          ma = { create: In, update: In },
          ya = y(function (e) {
        return { enterClass: e + "-enter", enterToClass: e + "-enter-to", enterActiveClass: e + "-enter-active", leaveClass: e + "-leave", leaveToClass: e + "-leave-to", leaveActiveClass: e + "-leave-active" };
      }),
          ga = Oi && !Pi,
          ba = "transition",
          _a = "animation",
          wa = "transition",
          ka = "transitionend",
          xa = "animation",
          Ca = "animationend";ga && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (wa = "WebkitTransition", ka = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (xa = "WebkitAnimation", Ca = "webkitAnimationEnd"));var Sa = Oi ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (e) {
        return e();
      },
          Da = /\b(transform|all)(,|$)/,
          $a = Oi ? { create: Jn, activate: Jn, remove: function (e, t) {
          !0 !== e.data.show ? Wn(e, t) : t();
        } } : {},
          Aa = [ra, aa, la, ca, ma, $a],
          Oa = Aa.concat(ia),
          Ta = function (e) {
        function t(e) {
          return new Ki(M.tagName(e).toLowerCase(), {}, [], void 0, e);
        }function n(e, t) {
          function n() {
            0 == --n.listeners && o(e);
          }return n.listeners = t, n;
        }function o(e) {
          var t = M.parentNode(e);r(t) && M.removeChild(t, e);
        }function l(e, t, n, i, o) {
          if (e.isRootInsert = !o, !c(e, t, n, i)) {
            var s = e.data,
                l = e.children,
                u = e.tag;r(u) ? (e.elm = e.ns ? M.createElementNS(e.ns, u) : M.createElement(u, e), y(e), p(e, l, t), r(s) && m(e, t), f(n, e.elm, i)) : a(e.isComment) ? (e.elm = M.createComment(e.text), f(n, e.elm, i)) : (e.elm = M.createTextNode(e.text), f(n, e.elm, i));
          }
        }function c(e, t, n, i) {
          var o = e.data;if (r(o)) {
            var s = r(e.componentInstance) && o.keepAlive;if (r(o = o.hook) && r(o = o.init) && o(e, !1, n, i), r(e.componentInstance)) return u(e, t), a(s) && d(e, t, n, i), !0;
          }
        }function u(e, t) {
          r(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, v(e) ? (m(e, t), y(e)) : (un(e), t.push(e));
        }function d(e, t, n, i) {
          for (var a, o = e; o.componentInstance;) if (o = o.componentInstance._vnode, r(a = o.data) && r(a = a.transition)) {
            for (a = 0; a < O.activate.length; ++a) O.activate[a](Zr, o);t.push(o);break;
          }f(n, e.elm, i);
        }function f(e, t, n) {
          r(e) && (r(n) ? n.parentNode === e && M.insertBefore(e, t, n) : M.appendChild(e, t));
        }function p(e, t, n) {
          if (Array.isArray(t)) for (var i = 0; i < t.length; ++i) l(t[i], n, e.elm, null, !0);else s(e.text) && M.appendChild(e.elm, M.createTextNode(e.text));
        }function v(e) {
          for (; e.componentInstance;) e = e.componentInstance._vnode;return r(e.tag);
        }function m(e, t) {
          for (var n = 0; n < O.create.length; ++n) O.create[n](Zr, e);$ = e.data.hook, r($) && (r($.create) && $.create(Zr, e), r($.insert) && t.push(e));
        }function y(e) {
          var t;if (r(t = e.functionalScopeId)) M.setAttribute(e.elm, t, "");else for (var n = e; n;) r(t = n.context) && r(t = t.$options._scopeId) && M.setAttribute(e.elm, t, ""), n = n.parent;r(t = hr) && t !== e.context && t !== e.functionalContext && r(t = t.$options._scopeId) && M.setAttribute(e.elm, t, "");
        }function g(e, t, n, i, r, a) {
          for (; i <= r; ++i) l(n[i], a, e, t);
        }function b(e) {
          var t,
              n,
              i = e.data;if (r(i)) for (r(t = i.hook) && r(t = t.destroy) && t(e), t = 0; t < O.destroy.length; ++t) O.destroy[t](e);if (r(t = e.children)) for (n = 0; n < e.children.length; ++n) b(e.children[n]);
        }function _(e, t, n, i) {
          for (; n <= i; ++n) {
            var a = t[n];r(a) && (r(a.tag) ? (w(a), b(a)) : o(a.elm));
          }
        }function w(e, t) {
          if (r(t) || r(e.data)) {
            var i,
                a = O.remove.length + 1;for (r(t) ? t.listeners += a : t = n(e.elm, a), r(i = e.componentInstance) && r(i = i._vnode) && r(i.data) && w(i, t), i = 0; i < O.remove.length; ++i) O.remove[i](e, t);r(i = e.data.hook) && r(i = i.remove) ? i(e, t) : t();
          } else o(e.elm);
        }function k(e, t, n, a, o) {
          for (var s, c, u, d, f = 0, p = 0, h = t.length - 1, v = t[0], m = t[h], y = n.length - 1, b = n[0], w = n[y], k = !o; f <= h && p <= y;) i(v) ? v = t[++f] : i(m) ? m = t[--h] : dn(v, b) ? (C(v, b, a), v = t[++f], b = n[++p]) : dn(m, w) ? (C(m, w, a), m = t[--h], w = n[--y]) : dn(v, w) ? (C(v, w, a), k && M.insertBefore(e, v.elm, M.nextSibling(m.elm)), v = t[++f], w = n[--y]) : dn(m, b) ? (C(m, b, a), k && M.insertBefore(e, m.elm, v.elm), m = t[--h], b = n[++p]) : (i(s) && (s = pn(t, f, h)), c = r(b.key) ? s[b.key] : x(b, t, f, h), i(c) ? l(b, a, e, v.elm) : (u = t[c], dn(u, b) ? (C(u, b, a), t[c] = void 0, k && M.insertBefore(e, u.elm, v.elm)) : l(b, a, e, v.elm)), b = n[++p]);f > h ? (d = i(n[y + 1]) ? null : n[y + 1].elm, g(e, d, n, p, y, a)) : p > y && _(e, t, f, h);
        }function x(e, t, n, i) {
          for (var a = n; a < i; a++) {
            var o = t[a];if (r(o) && dn(e, o)) return a;
          }
        }function C(e, t, n, o) {
          if (e !== t) {
            var s = t.elm = e.elm;if (a(e.isAsyncPlaceholder)) return void (r(t.asyncFactory.resolved) ? D(e.elm, t, n) : t.isAsyncPlaceholder = !0);if (a(t.isStatic) && a(e.isStatic) && t.key === e.key && (a(t.isCloned) || a(t.isOnce))) return void (t.componentInstance = e.componentInstance);var l,
                c = t.data;r(c) && r(l = c.hook) && r(l = l.prepatch) && l(e, t);var u = e.children,
                d = t.children;if (r(c) && v(t)) {
              for (l = 0; l < O.update.length; ++l) O.update[l](e, t);r(l = c.hook) && r(l = l.update) && l(e, t);
            }i(t.text) ? r(u) && r(d) ? u !== d && k(s, u, d, n, o) : r(d) ? (r(e.text) && M.setTextContent(s, ""), g(s, null, d, 0, d.length - 1, n)) : r(u) ? _(s, u, 0, u.length - 1) : r(e.text) && M.setTextContent(s, "") : e.text !== t.text && M.setTextContent(s, t.text), r(c) && r(l = c.hook) && r(l = l.postpatch) && l(e, t);
          }
        }function S(e, t, n) {
          if (a(n) && r(e.parent)) e.parent.data.pendingInsert = t;else for (var i = 0; i < t.length; ++i) t[i].data.hook.insert(t[i]);
        }function D(e, t, n) {
          if (a(t.isComment) && r(t.asyncFactory)) return t.elm = e, t.isAsyncPlaceholder = !0, !0;t.elm = e;var i = t.tag,
              o = t.data,
              s = t.children;if (r(o) && (r($ = o.hook) && r($ = $.init) && $(t, !0), r($ = t.componentInstance))) return u(t, n), !0;if (r(i)) {
            if (r(s)) if (e.hasChildNodes()) {
              if (r($ = o) && r($ = $.domProps) && r($ = $.innerHTML)) {
                if ($ !== e.innerHTML) return !1;
              } else {
                for (var l = !0, c = e.firstChild, d = 0; d < s.length; d++) {
                  if (!c || !D(c, s[d], n)) {
                    l = !1;break;
                  }c = c.nextSibling;
                }if (!l || c) return !1;
              }
            } else p(t, s, n);if (r(o)) for (var f in o) if (!P(f)) {
              m(t, n);break;
            }
          } else e.data !== t.text && (e.data = t.text);return !0;
        }var $,
            A,
            O = {},
            T = e.modules,
            M = e.nodeOps;for ($ = 0; $ < ea.length; ++$) for (O[ea[$]] = [], A = 0; A < T.length; ++A) r(T[A][ea[$]]) && O[ea[$]].push(T[A][ea[$]]);var P = h("attrs,style,class,staticClass,staticStyle,key");return function (e, n, o, s, c, u) {
          if (i(n)) return void (r(e) && b(e));var d = !1,
              f = [];if (i(e)) d = !0, l(n, f, c, u);else {
            var p = r(e.nodeType);if (!p && dn(e, n)) C(e, n, f, s);else {
              if (p) {
                if (1 === e.nodeType && e.hasAttribute(ki) && (e.removeAttribute(ki), o = !0), a(o) && D(e, n, f)) return S(n, f, !0), e;e = t(e);
              }var h = e.elm,
                  m = M.parentNode(h);if (l(n, f, h._leaveCb ? null : m, M.nextSibling(h)), r(n.parent)) for (var y = n.parent, g = v(n); y;) {
                for (var w = 0; w < O.destroy.length; ++w) O.destroy[w](y);if (y.elm = n.elm, g) {
                  for (var k = 0; k < O.create.length; ++k) O.create[k](Zr, y);var x = y.data.hook.insert;if (x.merged) for (var $ = 1; $ < x.fns.length; $++) x.fns[$]();
                } else un(y);y = y.parent;
              }r(m) ? _(m, [e], 0, 0) : r(e.tag) && b(e);
            }
          }return S(n, f, d), n.elm;
        };
      }({ nodeOps: Qr, modules: Oa });Pi && document.addEventListener("selectionchange", function () {
        var e = document.activeElement;e && e.vmodel && ni(e, "input");
      });var Ma = { inserted: function (e, t, n) {
          "select" === n.tag ? (Gn(e, t, n.context), e._vOptions = [].map.call(e.options, Zn)) : ("textarea" === n.tag || Gr(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("change", ti), Ii || (e.addEventListener("compositionstart", ei), e.addEventListener("compositionend", ti)), Pi && (e.vmodel = !0)));
        }, componentUpdated: function (e, t, n) {
          if ("select" === n.tag) {
            Gn(e, t, n.context);var i = e._vOptions,
                r = e._vOptions = [].map.call(e.options, Zn);if (r.some(function (e, t) {
              return !x(e, i[t]);
            })) {
              (e.multiple ? t.value.some(function (e) {
                return Xn(e, r);
              }) : t.value !== t.oldValue && Xn(t.value, r)) && ni(e, "change");
            }
          }
        } },
          Pa = { bind: function (e, t, n) {
          var i = t.value;n = ii(n);var r = n.data && n.data.transition,
              a = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;i && r ? (n.data.show = !0, qn(n, function () {
            e.style.display = a;
          })) : e.style.display = i ? a : "none";
        }, update: function (e, t, n) {
          var i = t.value;i !== t.oldValue && (n = ii(n), n.data && n.data.transition ? (n.data.show = !0, i ? qn(n, function () {
            e.style.display = e.__vOriginalDisplay;
          }) : Wn(n, function () {
            e.style.display = "none";
          })) : e.style.display = i ? e.__vOriginalDisplay : "none");
        }, unbind: function (e, t, n, i, r) {
          r || (e.style.display = e.__vOriginalDisplay);
        } },
          Va = { model: Ma, show: Pa },
          Ia = { name: String, appear: Boolean, css: Boolean, mode: String, type: String, enterClass: String, leaveClass: String, enterToClass: String, leaveToClass: String, enterActiveClass: String, leaveActiveClass: String, appearClass: String, appearActiveClass: String, appearToClass: String, duration: [Number, String, Object] },
          Ea = { name: "transition", props: Ia, abstract: !0, render: function (e) {
          var t = this,
              n = this.$options._renderChildren;if (n && (n = n.filter(function (e) {
            return e.tag || be(e);
          }), n.length)) {
            var i = this.mode,
                r = n[0];if (si(this.$vnode)) return r;var a = ri(r);if (!a) return r;if (this._leaving) return oi(e, r);var o = "__transition-" + this._uid + "-";a.key = null == a.key ? a.isComment ? o + "comment" : o + a.tag : s(a.key) ? 0 === String(a.key).indexOf(o) ? a.key : o + a.key : a.key;var l = (a.data || (a.data = {})).transition = ai(this),
                c = this._vnode,
                u = ri(c);if (a.data.directives && a.data.directives.some(function (e) {
              return "show" === e.name;
            }) && (a.data.show = !0), u && u.data && !li(a, u) && !be(u)) {
              var d = u.data.transition = _({}, l);if ("out-in" === i) return this._leaving = !0, ce(d, "afterLeave", function () {
                t._leaving = !1, t.$forceUpdate();
              }), oi(e, r);if ("in-out" === i) {
                if (be(a)) return c;var f,
                    p = function () {
                  f();
                };ce(l, "afterEnter", p), ce(l, "enterCancelled", p), ce(d, "delayLeave", function (e) {
                  f = e;
                });
              }
            }return r;
          }
        } },
          Fa = _({ tag: String, moveClass: String }, Ia);delete Fa.mode;var ja = { props: Fa, render: function (e) {
          for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), i = this.prevChildren = this.children, r = this.$slots.default || [], a = this.children = [], o = ai(this), s = 0; s < r.length; s++) {
            var l = r[s];if (l.tag) if (null != l.key && 0 !== String(l.key).indexOf("__vlist")) a.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = o;else ;
          }if (i) {
            for (var c = [], u = [], d = 0; d < i.length; d++) {
              var f = i[d];f.data.transition = o, f.data.pos = f.elm.getBoundingClientRect(), n[f.key] ? c.push(f) : u.push(f);
            }this.kept = e(t, null, c), this.removed = u;
          }return e(t, null, a);
        }, beforeUpdate: function () {
          this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept;
        }, updated: function () {
          var e = this.prevChildren,
              t = this.moveClass || (this.name || "v") + "-move";e.length && this.hasMove(e[0].elm, t) && (e.forEach(ci), e.forEach(ui), e.forEach(di), this._reflow = document.body.offsetHeight, e.forEach(function (e) {
            if (e.data.moved) {
              var n = e.elm,
                  i = n.style;Bn(n, t), i.transform = i.WebkitTransform = i.transitionDuration = "", n.addEventListener(ka, n._moveCb = function e(i) {
                i && !/transform$/.test(i.propertyName) || (n.removeEventListener(ka, e), n._moveCb = null, Rn(n, t));
              });
            }
          }));
        }, methods: { hasMove: function (e, t) {
            if (!ga) return !1;if (this._hasMove) return this._hasMove;var n = e.cloneNode();e._transitionClasses && e._transitionClasses.forEach(function (e) {
              Fn(n, e);
            }), En(n, t), n.style.display = "none", this.$el.appendChild(n);var i = zn(n);return this.$el.removeChild(n), this._hasMove = i.hasTransform;
          } } },
          Na = { Transition: Ea, TransitionGroup: ja };Tt.config.mustUseProp = Nr, Tt.config.isReservedTag = Kr, Tt.config.isReservedAttr = Fr, Tt.config.getTagNamespace = Kt, Tt.config.isUnknownElement = Jt, _(Tt.options.directives, Va), _(Tt.options.components, Na), Tt.prototype.__patch__ = Oi ? Ta : k, Tt.prototype.$mount = function (e, t) {
        return e = e && Oi ? Gt(e) : void 0, Oe(this, e, t);
      }, Tt.nextTick(function () {
        Si.devtools && zi && zi.emit("init", Tt);
      }, 0), t.a = Tt;
    }).call(t, n(44), n(68).setImmediate);
  }, function (e, t, n) {
    "use strict";
    var i = n(178),
        r = n.n(i);t.a = r.a;
  }, function (e, t, n) {
    "use strict";
    var i = n(187),
        r = n.n(i);t.a = r.a;
  }, function (e, t) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  }, function (e, t) {
    t.f = {}.propertyIsEnumerable;
  }, function (e, t) {
    var n = 0,
        i = Math.random();e.exports = function (e) {
      return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36));
    };
  }, function (e, t, n) {
    "use strict";
    var i = n(174),
        r = n.n(i),
        a = n(175),
        o = n.n(a);n.d(t, "a", function () {
      return r.a;
    }), n.d(t, "b", function () {
      return o.a;
    });
  }, function (e, t, n) {
    "use strict";
    var i = n(176),
        r = n.n(i),
        a = n(65);n.n(a);t.a = r.a;
  }, function (e, t) {
    var n = {}.toString;e.exports = function (e) {
      return n.call(e).slice(8, -1);
    };
  }, function (e, t) {
    e.exports = function (e) {
      if (void 0 == e) throw TypeError("Can't call method on  " + e);return e;
    };
  }, function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }, function (e, t) {
    e.exports = !0;
  }, function (e, t) {
    t.f = Object.getOwnPropertySymbols;
  }, function (e, t, n) {
    var i = n(8).f,
        r = n(11),
        a = n(3)("toStringTag");e.exports = function (e, t, n) {
      e && !r(e = n ? e : e.prototype, a) && i(e, a, { configurable: !0, value: t });
    };
  }, function (e, t, n) {
    var i = n(37)("keys"),
        r = n(27);e.exports = function (e) {
      return i[e] || (i[e] = r(e));
    };
  }, function (e, t, n) {
    var i = n(7),
        r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});e.exports = function (e) {
      return r[e] || (r[e] = {});
    };
  }, function (e, t) {
    var n = Math.ceil,
        i = Math.floor;e.exports = function (e) {
      return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e);
    };
  }, function (e, t, n) {
    var i = n(31);e.exports = function (e) {
      return Object(i(e));
    };
  }, function (e, t, n) {
    var i = n(25);e.exports = function (e, t) {
      if (!i(e)) return e;var n, r;if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e))) return r;if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;throw TypeError("Can't convert object to primitive value");
    };
  }, function (e, t, n) {
    var i = n(7),
        r = n(6),
        a = n(33),
        o = n(42),
        s = n(8).f;e.exports = function (e) {
      var t = r.Symbol || (r.Symbol = a ? {} : i.Symbol || {});"_" == e.charAt(0) || e in t || s(t, e, { value: o.f(e) });
    };
  }, function (e, t, n) {
    t.f = n(3);
  }, function (e, t, n) {
    "use strict";
    var i = n(154)(!0);n(57)(String, "String", function (e) {
      this._t = String(e), this._i = 0;
    }, function () {
      var e,
          t = this._t,
          n = this._i;return n >= t.length ? { value: void 0, done: !0 } : (e = i(t, n), this._i += e.length, { value: e, done: !1 });
    });
  }, function (e, t) {
    var n;n = function () {
      return this;
    }();try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (n = window);
    }e.exports = n;
  }, function (e, t, n) {
    "use strict";
    var i = n(166),
        r = n.n(i);t.a = r.a;
  }, function (e, t, n) {
    "use strict";
    var i = n(167),
        r = n.n(i),
        a = n(168),
        o = n.n(a);n.d(t, "a", function () {
      return r.a;
    }), n.d(t, "b", function () {
      return o.a;
    });
  }, function (e, t, n) {
    "use strict";
    var i = n(13),
        r = n.n(i),
        a = n(22),
        o = n(181),
        s = n.n(o);n.d(t, "a", function () {
      return s.a;
    }), t.b = { open: function (e) {
        var t = void 0,
            n = void 0;"string" == typeof e && (t = e);var i = { programmatic: !0, content: t };e.parent && (n = e.parent, delete e.parent);var o = r()(i, e);return new (a.a.extend(s.a))({ parent: n, el: document.createElement("div"), propsData: o });
      } };
  }, function (e, t, n) {
    "use strict";
    var i = n(183),
        r = n.n(i);t.a = r.a;
  }, function (e, t, n) {
    "use strict";
    var i = n(5),
        r = n.n(i),
        a = n(2);t.a = { components: r()({}, a.a.name, a.a), props: { active: { type: Boolean, default: !0 }, title: String, closable: { type: Boolean, default: !0 }, type: String, hasIcon: Boolean, size: String }, data: function () {
        return { isActive: this.active };
      }, watch: { active: function (e) {
          this.isActive = e;
        } }, computed: { icon: function () {
          switch (this.type) {case "is-info":
              return "information";case "is-success":
              return "check-circle";case "is-warning":
              return "alert";case "is-danger":
              return "alert-circle";default:
              return null;}
        } }, methods: { close: function () {
          this.isActive = !1, this.$emit("close"), this.$emit("update:active", !1);
        } } };
  }, function (e, t, n) {
    "use strict";
    var i = n(1),
        r = n(4);t.a = { props: { type: { type: String, default: "is-dark" }, message: String, duration: Number, queue: { type: Boolean, default: void 0 }, position: { type: String, default: "is-top", validator: function (e) {
            return ["is-top-right", "is-top", "is-top-left", "is-bottom-right", "is-bottom", "is-bottom-left"].indexOf(e) > -1;
          } }, container: String }, data: function () {
        return { isActive: !1, parentTop: null, parentBottom: null, newContainer: this.container || i.b.defaultContainerElement };
      }, computed: { correctParent: function () {
          switch (this.position) {case "is-top-right":case "is-top":case "is-top-left":
              return this.parentTop;case "is-bottom-right":case "is-bottom":case "is-bottom-left":
              return this.parentBottom;}
        }, transition: function () {
          switch (this.position) {case "is-top-right":case "is-top":case "is-top-left":
              return { enter: "fadeInDown", leave: "fadeOut" };case "is-bottom-right":case "is-bottom":case "is-bottom-left":
              return { enter: "fadeInUp", leave: "fadeOut" };}
        } }, methods: { shouldQueue: function () {
          return !!(void 0 !== this.queue ? this.queue : i.b.defaultNoticeQueue) && (this.parentTop.childElementCount > 0 || this.parentBottom.childElementCount > 0);
        }, close: function () {
          var e = this;clearTimeout(this.timer), this.isActive = !1, setTimeout(function () {
            e.$destroy(), n.i(r.a)(e.$el);
          }, 150);
        }, showNotice: function () {
          var e = this;if (this.shouldQueue()) return void setTimeout(function () {
            return e.showNotice();
          }, 250);this.correctParent.insertAdjacentElement("afterbegin", this.$el), this.isActive = !0, this.timer = setTimeout(function () {
            return e.close();
          }, this.newDuration);
        }, setupContainer: function () {
          if (this.parentTop = document.querySelector(".notices.is-top"), this.parentBottom = document.querySelector(".notices.is-bottom"), !this.parentTop || !this.parentBottom) {
            this.parentTop || (this.parentTop = document.createElement("div"), this.parentTop.className = "notices is-top"), this.parentBottom || (this.parentBottom = document.createElement("div"), this.parentBottom.className = "notices is-bottom");var e = document.querySelector(this.newContainer) || document.body;e.appendChild(this.parentTop), e.appendChild(this.parentBottom), this.newContainer && (this.parentTop.classList.add("has-custom-container"), this.parentBottom.classList.add("has-custom-container"));
          }
        } }, beforeMount: function () {
        this.setupContainer();
      }, mounted: function () {
        this.showNotice();
      } };
  }, function (e, t, n) {
    e.exports = { default: n(129), __esModule: !0 };
  }, function (e, t, n) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }t.__esModule = !0;var r = n(126),
        a = i(r),
        o = n(14),
        s = i(o),
        l = "function" == typeof s.default && "symbol" == typeof a.default ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : typeof e;
    };t.default = "function" == typeof s.default && "symbol" === l(a.default) ? function (e) {
      return void 0 === e ? "undefined" : l(e);
    } : function (e) {
      return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : void 0 === e ? "undefined" : l(e);
    };
  }, function (e, t, n) {
    var i = n(134);e.exports = function (e, t, n) {
      if (i(e), void 0 === t) return e;switch (n) {case 1:
          return function (n) {
            return e.call(t, n);
          };case 2:
          return function (n, i) {
            return e.call(t, n, i);
          };case 3:
          return function (n, i, r) {
            return e.call(t, n, i, r);
          };}return function () {
        return e.apply(t, arguments);
      };
    };
  }, function (e, t, n) {
    var i = n(25),
        r = n(7).document,
        a = i(r) && i(r.createElement);e.exports = function (e) {
      return a ? r.createElement(e) : {};
    };
  }, function (e, t, n) {
    e.exports = !n(10) && !n(18)(function () {
      return 7 != Object.defineProperty(n(54)("div"), "a", { get: function () {
          return 7;
        } }).a;
    });
  }, function (e, t, n) {
    var i = n(30);e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
      return "String" == i(e) ? e.split("") : Object(e);
    };
  }, function (e, t, n) {
    "use strict";
    var i = n(33),
        r = n(17),
        a = n(61),
        o = n(16),
        s = n(11),
        l = n(19),
        c = n(144),
        u = n(35),
        d = n(153),
        f = n(3)("iterator"),
        p = !([].keys && "next" in [].keys()),
        h = function () {
      return this;
    };e.exports = function (e, t, n, v, m, y, g) {
      c(n, t, v);var b,
          _,
          w,
          k = function (e) {
        if (!p && e in D) return D[e];switch (e) {case "keys":case "values":
            return function () {
              return new n(this, e);
            };}return function () {
          return new n(this, e);
        };
      },
          x = t + " Iterator",
          C = "values" == m,
          S = !1,
          D = e.prototype,
          $ = D[f] || D["@@iterator"] || m && D[m],
          A = $ || k(m),
          O = m ? C ? k("entries") : A : void 0,
          T = "Array" == t ? D.entries || $ : $;if (T && (w = d(T.call(new e()))) !== Object.prototype && (u(w, x, !0), i || s(w, f) || o(w, f, h)), C && $ && "values" !== $.name && (S = !0, A = function () {
        return $.call(this);
      }), i && !g || !p && !S && D[f] || o(D, f, A), l[t] = A, l[x] = h, m) if (b = { values: C ? A : k("values"), keys: y ? A : k("keys"), entries: O }, g) for (_ in b) _ in D || a(D, _, b[_]);else r(r.P + r.F * (p || S), t, b);return b;
    };
  }, function (e, t, n) {
    var i = n(15),
        r = n(150),
        a = n(32),
        o = n(36)("IE_PROTO"),
        s = function () {},
        l = function () {
      var e,
          t = n(54)("iframe"),
          i = a.length;for (t.style.display = "none", n(140).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; i--;) delete l.prototype[a[i]];return l();
    };e.exports = Object.create || function (e, t) {
      var n;return null !== e ? (s.prototype = i(e), n = new s(), s.prototype = null, n[o] = e) : n = l(), void 0 === t ? n : r(n, t);
    };
  }, function (e, t, n) {
    var i = n(60),
        r = n(32).concat("length", "prototype");t.f = Object.getOwnPropertyNames || function (e) {
      return i(e, r);
    };
  }, function (e, t, n) {
    var i = n(11),
        r = n(12),
        a = n(136)(!1),
        o = n(36)("IE_PROTO");e.exports = function (e, t) {
      var n,
          s = r(e),
          l = 0,
          c = [];for (n in s) n != o && i(s, n) && c.push(n);for (; t.length > l;) i(s, n = t[l++]) && (~a(c, n) || c.push(n));return c;
    };
  }, function (e, t, n) {
    e.exports = n(16);
  }, function (e, t, n) {
    var i = n(38),
        r = Math.min;e.exports = function (e) {
      return e > 0 ? r(i(e), 9007199254740991) : 0;
    };
  }, function (e, t, n) {
    var i = n(137),
        r = n(3)("iterator"),
        a = n(19);e.exports = n(6).getIteratorMethod = function (e) {
      if (void 0 != e) return e[r] || e["@@iterator"] || a[i(e)];
    };
  }, function (e, t, n) {
    n(158);for (var i = n(7), r = n(16), a = n(19), o = n(3)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], l = 0; l < 5; l++) {
      var c = s[l],
          u = i[c],
          d = u && u.prototype;d && !d[o] && r(d, o, c), a[c] = a.Array;
    }
  }, function (e, t, n) {
    var i = n(0)(n(80), null, null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(13),
        r = n.n(i),
        a = n(46),
        o = n(28),
        s = n(113),
        l = n(116),
        c = n(117),
        u = n(118),
        d = n(45),
        f = n(106),
        p = n(107),
        h = n(108),
        v = n(29),
        m = n(2),
        y = n(23),
        g = n(109),
        b = n(110),
        _ = n(47),
        w = n(111),
        k = n(48),
        x = n(112),
        C = n(24),
        S = n(114),
        D = n(115),
        $ = n(119),
        A = n(120),
        O = n(121),
        T = n(122),
        M = n(123),
        P = n(1);n.d(t, "Dialog", function () {
      return h.a;
    }), n.d(t, "LoadingProgrammatic", function () {
      return g.b;
    }), n.d(t, "ModalProgrammatic", function () {
      return _.b;
    }), n.d(t, "Snackbar", function () {
      return S.a;
    }), n.d(t, "Toast", function () {
      return O.a;
    });var V = { Autocomplete: d.a, Checkbox: a.a, CheckboxButton: a.b, Collapse: f.a, Datepicker: p.a, Dropdown: o.a, DropdownItem: o.b, Field: v.a, Icon: m.a, Input: y.a, Loading: g.a, Message: b.a, Modal: _.a, Notification: w.a, Pagination: k.a, Panel: x.a, Radio: s.a, RadioButton: s.b, Select: C.a, Switch: D.a, TabItem: c.a, Table: l.a, TableColumn: l.b, Tabs: c.b, Tag: u.a, Taglist: u.b, Taginput: $.a, Timepicker: A.a, Tooltip: T.a, Upload: M.a };V.install = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};n.i(P.a)(r()(P.b, t));for (var i in V) {
        var a = V[i];a && "install" !== i && e.component(a.name, a);
      }e.prototype.$dialog = h.a, e.prototype.$loading = g.b, e.prototype.$modal = _.b, e.prototype.$snackbar = S.a, e.prototype.$toast = O.a;
    }, t.default = V;
  }, function (e, t) {
    function n() {
      throw new Error("setTimeout has not been defined");
    }function i() {
      throw new Error("clearTimeout has not been defined");
    }function r(e) {
      if (u === setTimeout) return setTimeout(e, 0);if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);try {
        return u(e, 0);
      } catch (t) {
        try {
          return u.call(null, e, 0);
        } catch (t) {
          return u.call(this, e, 0);
        }
      }
    }function a(e) {
      if (d === clearTimeout) return clearTimeout(e);if ((d === i || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);try {
        return d(e);
      } catch (t) {
        try {
          return d.call(null, e);
        } catch (t) {
          return d.call(this, e);
        }
      }
    }function o() {
      v && p && (v = !1, p.length ? h = p.concat(h) : m = -1, h.length && s());
    }function s() {
      if (!v) {
        var e = r(o);v = !0;for (var t = h.length; t;) {
          for (p = h, h = []; ++m < t;) p && p[m].run();m = -1, t = h.length;
        }p = null, v = !1, a(e);
      }
    }function l(e, t) {
      this.fun = e, this.array = t;
    }function c() {}var u,
        d,
        f = e.exports = {};(function () {
      try {
        u = "function" == typeof setTimeout ? setTimeout : n;
      } catch (e) {
        u = n;
      }try {
        d = "function" == typeof clearTimeout ? clearTimeout : i;
      } catch (e) {
        d = i;
      }
    })();var p,
        h = [],
        v = !1,
        m = -1;f.nextTick = function (e) {
      var t = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];h.push(new l(e, t)), 1 !== h.length || v || r(s);
    }, l.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = c, f.addListener = c, f.once = c, f.off = c, f.removeListener = c, f.removeAllListeners = c, f.emit = c, f.prependListener = c, f.prependOnceListener = c, f.listeners = function (e) {
      return [];
    }, f.binding = function (e) {
      throw new Error("process.binding is not supported");
    }, f.cwd = function () {
      return "/";
    }, f.chdir = function (e) {
      throw new Error("process.chdir is not supported");
    }, f.umask = function () {
      return 0;
    };
  }, function (e, t, n) {
    function i(e, t) {
      this._id = e, this._clearFn = t;
    }var r = Function.prototype.apply;t.setTimeout = function () {
      return new i(r.call(setTimeout, window, arguments), clearTimeout);
    }, t.setInterval = function () {
      return new i(r.call(setInterval, window, arguments), clearInterval);
    }, t.clearTimeout = t.clearInterval = function (e) {
      e && e.close();
    }, i.prototype.unref = i.prototype.ref = function () {}, i.prototype.close = function () {
      this._clearFn.call(window, this._id);
    }, t.enroll = function (e, t) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
    }, t.unenroll = function (e) {
      clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
    }, t._unrefActive = t.active = function (e) {
      clearTimeout(e._idleTimeoutId);var t = e._idleTimeout;t >= 0 && (e._idleTimeoutId = setTimeout(function () {
        e._onTimeout && e._onTimeout();
      }, t));
    }, n(165), t.setImmediate = setImmediate, t.clearImmediate = clearImmediate;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(52),
        r = n.n(i),
        a = n(51),
        o = n.n(a),
        s = n(5),
        l = n.n(s),
        c = n(4),
        u = n(9),
        d = n(23);t.default = { name: "bAutocomplete", inheritAttrs: !1, mixins: [u.a], components: l()({}, d.a.name, d.a), props: { value: [Number, String], data: { type: Array, default: function () {
            return [];
          } }, field: { type: String, default: "value" }, maxResults: { type: [Number, String], default: 6 }, keepFirst: Boolean }, data: function () {
        return { selected: null, hovered: null, isActive: !1, newValue: this.value, isListInViewportVertically: !0, _isAutocomplete: !0, _elementRef: "input" };
      }, computed: { whiteList: function () {
          var e = [];if (e.push(this.$refs.input), e.push(this.$refs.dropdown), void 0 !== this.$refs.dropdown) {
            var t = this.$refs.dropdown.querySelectorAll("*"),
                n = !0,
                i = !1,
                r = void 0;try {
              for (var a, s = o()(t); !(n = (a = s.next()).done); n = !0) {
                var l = a.value;e.push(l);
              }
            } catch (e) {
              i = !0, r = e;
            } finally {
              try {
                !n && s.return && s.return();
              } finally {
                if (i) throw r;
              }
            }
          }return e;
        }, visibleData: function () {
          return this.data.length <= this.maxResults ? this.data : this.data.slice(0, this.maxResults);
        }, hasDefaultSlot: function () {
          return !!this.$scopedSlots.default;
        }, hasEmptySlot: function () {
          return !!this.$slots.empty;
        } }, watch: { isActive: function (e) {
          var t = this;e ? this.calcDropdownInViewportVertical() : (this.$nextTick(function () {
            return t.setHovered(null);
          }), setTimeout(function () {
            t.calcDropdownInViewportVertical();
          }, 100));
        }, newValue: function (e) {
          var t = this;this.$emit("input", e), this.getValue(this.selected) !== e && this.setSelected(null, !1), this.keepFirst && this.$nextTick(function () {
            t.visibleData.length ? "" !== t.newValue && t.hovered !== t.visibleData[0] && t.setHovered(t.visibleData[0]) : t.setHovered(null);
          }), this.isActive = !!e;
        }, value: function (e) {
          this.newValue = e, !this.isValid && this.$refs.input.checkHtml5Validity();
        } }, methods: { setHovered: function (e) {
          void 0 !== e && (this.hovered = e);
        }, setSelected: function (e) {
          var t = this,
              n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];void 0 !== e && (this.selected = e, this.$emit("select", this.selected), null !== this.selected && (this.newValue = this.getValue(this.selected)), n && this.$nextTick(function () {
            t.isActive = !1;
          }));
        }, enterPressed: function () {
          null !== this.hovered && this.setSelected(this.hovered);
        }, tabPressed: function () {
          if (null === this.hovered) return void (this.isActive = !1);this.setSelected(this.hovered);
        }, clickedOutside: function (e) {
          this.whiteList.indexOf(e.target) < 0 && (this.isActive = !1);
        }, getValue: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];if (e) {
            var i = "object" === (void 0 === e ? "undefined" : r()(e)) ? n.i(c.c)(e, this.field) : e,
                a = n.i(c.e)(this.newValue),
                o = new RegExp("(" + a + ")", "gi");return t ? i.replace(o, "<b>$1</b>") : i;
          }
        }, calcDropdownInViewportVertical: function () {
          var e = this;this.$nextTick(function () {
            if (void 0 !== e.$refs.dropdown) {
              var t = e.$refs.dropdown.getBoundingClientRect();e.isListInViewportVertically = t.top >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight);
            }
          });
        }, keyArrows: function (e) {
          var t = "down" === e ? 1 : -1;if (this.isActive) {
            var n = this.visibleData.indexOf(this.hovered) + t;n = n > this.visibleData.length - 1 ? 0 : n, n = n < 0 ? this.visibleData.length - 1 : n, this.setHovered(this.visibleData[n]);
          } else this.isActive = !0;
        }, focused: function (e) {
          this.getValue(this.selected) === this.newValue && this.focus(), this.$emit("focus", e);
        } }, created: function () {
        "undefined" != typeof window && (document.addEventListener("click", this.clickedOutside), window.addEventListener("resize", this.calcDropdownInViewportVertical));
      }, beforeDestroy: function () {
        "undefined" != typeof window && (document.removeEventListener("click", this.clickedOutside), window.removeEventListener("resize", this.calcDropdownInViewportVertical));
      } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(14),
        r = n.n(i);t.default = { name: "bCheckbox", props: { value: {}, nativeValue: {}, disabled: Boolean, name: String, size: String, trueValue: { type: [String, Number, Boolean, Function, Object, Array, r.a], default: !0 }, falseValue: { type: [String, Number, Boolean, Function, Object, Array, r.a], default: !1 } }, data: function () {
        return { newValue: this.value };
      }, watch: { value: function (e) {
          this.newValue = e;
        }, newValue: function (e) {
          this.$emit("input", e);
        } } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { name: "bCheckboxButton", props: { value: {}, nativeValue: {}, disabled: Boolean, name: String, size: String, type: { type: String, default: "is-primary" } }, data: function () {
        return { newValue: this.value };
      }, computed: { checked: function () {
          return Array.isArray(this.newValue) ? this.newValue.indexOf(this.nativeValue) >= 0 : this.newValue === this.nativeValue;
        } }, watch: { value: function (e) {
          this.newValue = e;
        }, newValue: function (e) {
          this.$emit("input", e);
        } } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { name: "bCollapse", props: { open: { type: Boolean, default: !0 }, animation: { type: String, default: "fade" } }, data: function () {
        return { isOpen: this.open };
      }, watch: { open: function (e) {
          this.isOpen = e;
        } }, methods: { toggle: function () {
          this.isOpen = !this.isOpen, this.$emit("update:open", this.isOpen), this.$emit(this.isOpen ? "open" : "close");
        } } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i,
        r = n(5),
        a = n.n(r),
        o = n(9),
        s = n(4),
        l = n(1),
        c = n(28),
        u = n(23),
        d = n(29),
        f = n(24),
        p = n(2),
        h = n(171),
        v = n.n(h);t.default = { name: "bDatepicker", inheritAttrs: !1, mixins: [o.a], components: (i = {}, a()(i, v.a.name, v.a), a()(i, u.a.name, u.a), a()(i, d.a.name, d.a), a()(i, f.a.name, f.a), a()(i, p.a.name, p.a), a()(i, c.a.name, c.a), a()(i, c.b.name, c.b), i), props: { value: Date, dayNames: { type: Array, default: function () {
            return Array.isArray(l.b.defaultDayNames) ? l.b.defaultDayNames : ["Su", "M", "Tu", "W", "Th", "F", "S"];
          } }, monthNames: { type: Array, default: function () {
            return Array.isArray(l.b.defaultMonthNames) ? l.b.defaultMonthNames : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          } }, firstDayOfWeek: { type: Number, default: function () {
            return "number" == typeof l.b.defaultFirstDayOfWeek ? l.b.defaultFirstDayOfWeek : 0;
          } }, inline: Boolean, minDate: Date, maxDate: Date, focusedDate: Date, placeholder: String, readonly: { type: Boolean, default: !0 }, disabled: { type: Boolean, default: !1 }, unselectableDates: Array, dateFormatter: { type: Function, default: function (e) {
            return "function" == typeof l.b.defaultDateFormatter ? l.b.defaultDateFormatter(e) : e.toLocaleDateString();
          } }, dateParser: { type: Function, default: function (e) {
            return "function" == typeof l.b.defaultDateParser ? l.b.defaultDateParser(e) : new Date(Date.parse(e));
          } }, mobileNative: { type: Boolean, default: function () {
            return l.b.defaultDatepickerMobileNative;
          } }, position: String, events: Array, indicators: { type: String, default: "dots" } }, data: function () {
        var e = this.value || this.focusedDate || new Date();return { dateSelected: this.value, focusedDateData: { month: e.getMonth(), year: e.getFullYear() }, _elementRef: "input", _isDatepicker: !0 };
      }, computed: { listOfYears: function () {
          for (var e = this.maxDate ? this.maxDate.getFullYear() : new Date().getFullYear() + 3, t = this.minDate ? this.minDate.getFullYear() : 1900, n = [], i = t; i <= e; i++) n.push(i);return n.reverse();
        }, isFirstMonth: function () {
          return !!this.minDate && new Date(this.focusedDateData.year, this.focusedDateData.month) <= new Date(this.minDate.getFullYear(), this.minDate.getMonth());
        }, isLastMonth: function () {
          return !!this.maxDate && new Date(this.focusedDateData.year, this.focusedDateData.month) >= new Date(this.maxDate.getFullYear(), this.maxDate.getMonth());
        }, isMobile: function () {
          return this.mobileNative && s.b.any();
        } }, watch: { dateSelected: function (e) {
          var t = e || new Date();this.focusedDateData = { month: t.getMonth(), year: t.getFullYear() }, this.$emit("input", e), this.$refs.dropdown && (this.$refs.dropdown.isActive = !1);
        }, value: function (e) {
          this.dateSelected = e, !this.isValid && this.$refs.input.checkHtml5Validity();
        } }, methods: { updateSelectedDate: function (e) {
          this.dateSelected = e;
        }, onChange: function (e) {
          var t = this.dateParser(e);t && !isNaN(t) ? this.dateSelected = t : (this.dateSelected = null, this.$refs.input.newValue = this.dateSelected);
        }, formatValue: function (e) {
          return e && !isNaN(e) ? this.dateFormatter(e) : null;
        }, decrementMonth: function () {
          this.disabled || (this.focusedDateData.month > 0 ? this.focusedDateData.month -= 1 : (this.focusedDateData.month = 11, this.focusedDateData.year -= 1));
        }, incrementMonth: function () {
          this.disabled || (this.focusedDateData.month < 11 ? this.focusedDateData.month += 1 : (this.focusedDateData.month = 0, this.focusedDateData.year += 1));
        }, formatYYYYMMDD: function (e) {
          var t = new Date(e);if (e && !isNaN(t)) {
            var n = t.getFullYear(),
                i = t.getMonth() + 1,
                r = t.getDate();return n + "-" + (i < 10 ? "0" : "") + i + "-" + (r < 10 ? "0" : "") + r;
          }return "";
        }, onChangeNativePicker: function (e) {
          var t = e.target.value;this.dateSelected = t ? new Date(t) : null;
        } } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(172),
        r = n.n(i);t.default = { name: "bDatepickerTable", components: { bDatepickerTableRow: r.a }, props: { value: Date, dayNames: Array, monthNames: Array, firstDayOfWeek: Number, events: Array, indicators: String, minDate: Date, maxDate: Date, focused: Object, disabled: Boolean, unselectableDates: Array }, computed: { visibleDayNames: function () {
          for (var e = [], t = this.firstDayOfWeek; e.length < this.dayNames.length;) {
            var n = this.dayNames[t % this.dayNames.length];e.push(n), t++;
          }return e;
        }, hasEvents: function () {
          return this.events && this.events.length;
        }, eventsInThisMonth: function () {
          if (!this.events) return [];for (var e = [], t = 0; t < this.events.length; t++) {
            var n = this.events[t];n.hasOwnProperty("date") || (n = { date: n }), n.hasOwnProperty("type") || (n.type = "is-primary"), n.date.getMonth() === this.focused.month && n.date.getFullYear() === this.focused.year && e.push(n);
          }return e;
        } }, methods: { updateSelectedDate: function (e) {
          this.$emit("input", e);
        }, weekBuilder: function (e, t, n) {
          for (var i = new Date(n, t), r = [], a = new Date(n, t, e).getDay(), o = a >= this.firstDayOfWeek ? a - this.firstDayOfWeek : 7 - this.firstDayOfWeek + a, s = 1, l = 0; l < o; l++) r.unshift(new Date(i.getFullYear(), i.getMonth(), e - s)), s++;r.push(new Date(n, t, e));for (var c = 1; r.length < 7;) r.push(new Date(n, t, e + c)), c++;return r;
        }, weeksInThisMonth: function (e, t) {
          for (var n = [], i = new Date(t, e + 1, 0).getDate(), r = 1; r <= i + 6;) {
            var a = this.weekBuilder(r, e, t),
                o = !1;a.forEach(function (t) {
              t.getMonth() === e && (o = !0);
            }), o && n.push(a), r += 7;
          }return n;
        }, eventsInThisWeek: function (e, t) {
          if (!this.eventsInThisMonth.length) return [];var n = [],
              i = [];i = this.weeksInThisMonth(this.focused.month, this.focused.year);for (var r = 0; r < i[t].length; r++) for (var a = 0; a < this.eventsInThisMonth.length; a++) this.eventsInThisMonth[a].date.getTime() === i[t][r].getTime() && n.push(this.eventsInThisMonth[a]);return n;
        } } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { name: "bDatepickerTableRow", props: { selectedDate: Date, week: { type: Array, required: !0 }, month: { type: Number, required: !0 }, minDate: Date, maxDate: Date, disabled: Boolean, unselectableDates: Array, events: Array, indicators: String }, methods: { selectableDate: function (e) {
          var t = [];if (this.minDate && t.push(e >= this.minDate), this.maxDate && t.push(e <= this.maxDate), t.push(e.getMonth() === this.month), this.unselectableDates) for (var n = 0; n < this.unselectableDates.length; n++) {
            var i = this.unselectableDates[n];t.push(e.getDate() !== i.getDate() || e.getFullYear() !== i.getFullYear() || e.getMonth() !== i.getMonth());
          }return t.indexOf(!1) < 0;
        }, emitChosenDate: function (e) {
          this.disabled || this.selectableDate(e) && this.$emit("select", e);
        }, eventsDateMatch: function (e) {
          if (!this.events.length) return !1;for (var t = [], n = 0; n < this.events.length; n++) this.events[n].date.getDay() === e.getDay() && t.push(this.events[n]);return !!t.length && t;
        }, classObject: function (e) {
          function t(e, t) {
            return !(!e || !t) && e.getDate() === t.getDate() && e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth();
          }return { "is-selected": t(e, this.selectedDate), "is-today": t(e, new Date()), "is-selectable": this.selectableDate(e) && !this.disabled, "is-unselectable": !this.selectableDate(e) || this.disabled };
        } } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(5),
        r = n.n(i),
        a = n(2),
        o = n(47),
        s = n(1),
        l = n(4);t.default = { name: "bDialog", extends: o.a, components: r()({}, a.a.name, a.a), props: { title: String, message: String, icon: String, iconPack: String, hasIcon: Boolean, type: { type: String, default: "is-primary" }, size: String, confirmText: { type: String, default: function () {
            return s.b.defaultDialogConfirmText ? s.b.defaultDialogConfirmText : "OK";
          } }, cancelText: { type: String, default: function () {
            return s.b.defaultDialogCancelText ? s.b.defaultDialogCancelText : "Cancel";
          } }, hasInput: Boolean, inputAttrs: { type: Object, default: function () {} }, onConfirm: { type: Function, default: function () {} } }, data: function () {
        return { prompt: this.hasInput ? this.inputAttrs.value || "" : "", isActive: !1, validationMessage: "" };
      }, computed: { iconByType: function () {
          switch (this.type) {case "is-info":
              return "information";case "is-success":
              return "check-circle";case "is-warning":
              return "alert";case "is-danger":
              return "alert-circle";default:
              return null;}
        }, showCancel: function () {
          return this.cancelOptions.indexOf("button") >= 0;
        } }, methods: { confirm: function () {
          var e = this;if (void 0 !== this.$refs.input && !this.$refs.input.checkValidity()) return this.validationMessage = this.$refs.input.validationMessage, void this.$nextTick(function () {
            return e.$refs.input.select();
          });this.onConfirm(this.prompt), this.close();
        }, close: function () {
          var e = this;this.isActive = !1, this.onCancel.apply(null, arguments), setTimeout(function () {
            e.$destroy(), n.i(l.a)(e.$el);
          }, 150);
        } }, beforeMount: function () {
        document.body.appendChild(this.$el);
      }, mounted: function () {
        var e = this;this.isActive = !0, this.$nextTick(function () {
          e.hasInput ? e.$refs.input.focus() : e.$refs.confirmButton.focus();
        });
      } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(51),
        r = n.n(i),
        a = n(14),
        o = n.n(a);t.default = { name: "bDropdown", props: { value: { type: [String, Number, Boolean, Object, Array, o.a, Function], default: null }, disabled: Boolean, hoverable: Boolean, inline: Boolean, position: { type: String, validator: function (e) {
            return ["is-top-right", "is-top-left", "is-bottom-left"].indexOf(e) > -1;
          } }, mobileModal: { type: Boolean, default: !0 } }, data: function () {
        return { selected: this.value, isActive: !1, _isDropdown: !0 };
      }, computed: { isMobileModal: function () {
          return this.mobileModal && !this.inline && !this.hoverable;
        } }, watch: { value: function (e) {
          this.selectItem(e);
        }, isActive: function (e) {
          this.$emit("active-change", e);
        } }, methods: { selectItem: function (e) {
          this.selected = e, this.$emit("input", e), this.$emit("change", e), this.isActive = !1;
        }, isInWhiteList: function (e) {
          if (e === this.$refs.dropdownMenu) return !0;if (e === this.$refs.trigger) return !0;if (void 0 !== this.$refs.dropdownMenu) {
            var t = this.$refs.dropdownMenu.querySelectorAll("*"),
                n = !0,
                i = !1,
                a = void 0;try {
              for (var o, s = r()(t); !(n = (o = s.next()).done); n = !0) {
                if (e === o.value) return !0;
              }
            } catch (e) {
              i = !0, a = e;
            } finally {
              try {
                !n && s.return && s.return();
              } finally {
                if (i) throw a;
              }
            }
          }if (void 0 !== this.$refs.trigger) {
            var l = this.$refs.trigger.querySelectorAll("*"),
                c = !0,
                u = !1,
                d = void 0;try {
              for (var f, p = r()(l); !(c = (f = p.next()).done); c = !0) {
                if (e === f.value) return !0;
              }
            } catch (e) {
              u = !0, d = e;
            } finally {
              try {
                !c && p.return && p.return();
              } finally {
                if (u) throw d;
              }
            }
          }return !1;
        }, clickedOutside: function (e) {
          this.inline || this.isInWhiteList(e.target) || (this.isActive = !1);
        }, toggle: function () {
          this.disabled || this.hoverable || (this.isActive = !this.isActive);
        } }, created: function () {
        "undefined" != typeof window && document.addEventListener("click", this.clickedOutside);
      }, beforeDestroy: function () {
        "undefined" != typeof window && document.removeEventListener("click", this.clickedOutside);
      } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(14),
        r = n.n(i);t.default = { name: "bDropdownItem", props: { value: { type: [String, Number, Boolean, Object, Array, r.a, Function], default: null }, separator: Boolean, disabled: Boolean, custom: Boolean, paddingless: Boolean, hasLink: Boolean }, computed: { isClickable: function () {
          return !this.separator && !this.disabled && !this.custom;
        } }, methods: { selectItem: function () {
          this.isClickable && (this.$parent.selectItem(this.value), this.$emit("click"));
        } }, created: function () {
        if (!this.$parent.$data._isDropdown) throw this.$destroy(), new Error("You should wrap bDropdownItem on a bDropdown");
      } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(65),
        r = n.n(i);t.default = { name: "bField", components: { "b-field-body": r.a }, props: { type: String, label: String, labelFor: String, message: [String, Array], grouped: Boolean, groupMultiline: Boolean, position: String, expanded: Boolean, horizontal: Boolean, addons: { type: Boolean, default: !0 } }, data: function () {
        return { newType: this.type, newMessage: this.message, _isField: !0 };
      }, watch: { type: function (e) {
          this.newType = e;
        }, message: function (e) {
          this.newMessage = e;
        } }, computed: { newPosition: function () {
          if (void 0 !== this.position) {
            var e = this.position.split("-");if (!(e.length < 1)) {
              var t = this.grouped ? "is-grouped-" : "has-addons-";return this.position ? t + e[1] : void 0;
            }
          }
        }, fieldType: function () {
          return this.grouped ? "is-grouped" : void 0 !== this.$slots.default && this.$slots.default.length > 1 && this.addons ? "has-addons" : void 0;
        }, formattedMessage: function () {
          return this.newMessage && Array.isArray(this.newMessage) ? this.newMessage.filter(function (e) {
            if (e) return e;
          }).join(" <br> ") : this.newMessage;
        } } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { name: "bFieldBody", render: function (e) {
        return e("div", { attrs: { class: "field-body" } }, this.$slots.default.map(function (t) {
          return t.tag ? e("div", { attrs: { class: "field" } }, [t]) : t;
        }));
      } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(1);t.default = { name: "bIcon", props: { type: String, pack: String, icon: String, size: String, customSize: String, customClass: String, both: Boolean }, data: function () {
        return { newPack: this.pack || i.b.defaultIconPack };
      }, computed: { newIcon: function () {
          return this.both ? "mdi" === this.newPack ? this.newPack + "-" + this.icon : this.newPack + "-" + this.getEquivalentIconOf(this.icon) : this.newPack + "-" + this.icon;
        }, newType: function () {
          if (this.type) {
            var e = this.type.split("-");if (e.length) return "has-text-" + e[1];
          }
        }, newCustomSize: function () {
          return this.customSize || this.customSizeByPack;
        }, customSizeByPack: function () {
          var e = "mdi" === this.newPack ? "mdi-24px" : "fa-lg",
              t = "mdi" === this.newPack ? "mdi-36px" : "fa-2x",
              n = "mdi" === this.newPack ? "mdi-48px" : "fa-3x";switch (this.size) {case "is-small":
              return;case "is-medium":
              return t;case "is-large":
              return n;default:
              return e;}
        } }, methods: { getEquivalentIconOf: function (e) {
          switch (e) {case "check":
              return "check";case "information":
              return "info-circle";case "check-circle":
              return "check-circle";case "alert":
              return "exclamation-triangle";case "alert-circle":
              return "exclamation-circle";case "arrow-up":
              return "arrow-up";case "chevron-right":
              return "angle-right";case "chevron-left":
              return "angle-left";case "chevron-down":
              return "angle-down";case "eye":
              return "eye";case "eye-off":
              return "eye-slash";case "menu-down":
              return "caret-down";case "menu-up":
              return "caret-up";default:
              return null;}
        } } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(5),
        r = n.n(i),
        a = n(2),
        o = n(1),
        s = n(9);t.default = { name: "bInput", inheritAttrs: !1, mixins: [s.a], components: r()({}, a.a.name, a.a), props: { value: [Number, String], type: { type: String, default: "text" }, passwordReveal: Boolean, hasCounter: { type: Boolean, default: !0 } }, data: function () {
        return { newValue: this.value, newType: this.type, newAutocomplete: this.autocomplete || o.b.defaultInputAutocomplete, isPasswordVisible: !1, _elementRef: "textarea" === this.type ? "textarea" : "input" };
      }, computed: { rootClasses: function () {
          return [this.iconPosition, { "is-expanded": this.expanded, "is-loading": this.loading, "is-clearfix": !this.hasMessage }];
        }, hasIconRight: function () {
          return this.passwordReveal || this.loading || this.statusType;
        }, iconPosition: function () {
          return this.icon && this.hasIconRight ? "has-icons-left has-icons-right" : !this.icon && this.hasIconRight ? "has-icons-right" : this.icon ? "has-icons-left" : void 0;
        }, statusTypeIcon: function () {
          switch (this.statusType) {case "is-success":
              return "check";case "is-danger":
              return "alert-circle";case "is-info":
              return "information";case "is-warning":
              return "alert";}
        }, hasMessage: function () {
          return !!this.statusMessage;
        }, passwordVisibleIcon: function () {
          return this.isPasswordVisible ? "eye-off" : "eye";
        }, valueLength: function () {
          return this.newValue ? this.newValue.length : 0;
        } }, watch: { value: function (e) {
          this.newValue = e;
        }, newValue: function (e) {
          this.$emit("input", e), !this.isValid && this.checkHtml5Validity();
        } }, methods: { togglePasswordVisibility: function () {
          var e = this;this.isPasswordVisible = !this.isPasswordVisible, this.newType = this.isPasswordVisible ? "text" : "password", this.$nextTick(function () {
            e.$refs.input.focus();
          });
        }, onInput: function (e) {
          var t = this;this.$nextTick(function () {
            t.newValue = e.target.value;
          });
        } } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(4);t.default = { name: "bLoading", props: { active: Boolean, programmatic: Boolean, animation: { type: String, default: "fade" }, canCancel: { type: Boolean, default: !1 }, onCancel: { type: Function, default: function () {} } }, data: function () {
        return { isActive: this.active || !1 };
      }, watch: { active: function (e) {
          this.isActive = e;
        } }, methods: { cancel: function () {
          this.canCancel && this.close();
        }, close: function () {
          var e = this;this.onCancel.apply(null, arguments), this.$emit("close"), this.$emit("update:active", !1), this.programmatic && (this.isActive = !1, setTimeout(function () {
            e.$destroy(), n.i(i.a)(e.$el);
          }, 150));
        }, keyPress: function (e) {
          27 === e.keyCode && this.cancel();
        } }, created: function () {
        "undefined" != typeof window && document.addEventListener("keyup", this.keyPress);
      }, beforeMount: function () {
        this.programmatic && document.body.appendChild(this.$el);
      }, mounted: function () {
        this.programmatic && (this.isActive = !0);
      }, beforeDestroy: function () {
        "undefined" != typeof window && document.removeEventListener("keyup", this.keyPress);
      } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(49);t.default = { name: "bMessage", mixins: [i.a] };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(4),
        r = n(1);t.default = { name: "bModal", props: { active: Boolean, component: [Object, Function], content: String, programmatic: Boolean, props: Object, events: Object, width: { type: [String, Number], default: 960 }, hasModalCard: Boolean, animation: { type: String, default: "zoom-out" }, canCancel: { type: [Array, Boolean], default: function () {
            return ["escape", "x", "outside", "button"];
          } }, onCancel: { type: Function, default: function () {} }, scroll: { type: String, default: function () {
            return r.b.defaultModalScroll ? r.b.defaultModalScroll : "clip";
          }, validator: function (e) {
            return ["clip", "keep"].indexOf(e) >= 0;
          } } }, data: function () {
        return { isActive: this.active || !1, savedScrollTop: null, newWidth: "number" == typeof this.width ? this.width + "px" : this.width };
      }, computed: { cancelOptions: function () {
          return "boolean" == typeof this.canCancel ? this.canCancel ? ["escape", "x", "outside", "button"] : [] : this.canCancel;
        }, showX: function () {
          return this.cancelOptions.indexOf("x") >= 0;
        } }, watch: { active: function (e) {
          this.isActive = e;
        }, isActive: function () {
          this.handleScroll();
        } }, methods: { handleScroll: function () {
          if ("undefined" != typeof window) {
            if ("clip" === this.scroll) return void document.documentElement.classList.toggle("is-clipped", this.isActive);if (this.savedScrollTop = this.savedScrollTop ? this.savedScrollTop : document.documentElement.scrollTop, document.body.classList.toggle("is-noscroll", this.isActive), this.isActive) return void (document.body.style.top = "-" + this.savedScrollTop + "px");document.documentElement.scrollTop = this.savedScrollTop, document.body.style.top = null, this.savedScrollTop = null;
          }
        }, cancel: function (e) {
          this.cancelOptions.indexOf(e) < 0 || this.close();
        }, close: function () {
          var e = this;this.onCancel.apply(null, arguments), this.$emit("close"), this.$emit("update:active", !1), this.programmatic && (this.isActive = !1, setTimeout(function () {
            e.$destroy(), n.i(i.a)(e.$el);
          }, 150));
        }, keyPress: function (e) {
          27 === e.keyCode && this.cancel("escape");
        } }, created: function () {
        "undefined" != typeof window && document.addEventListener("keyup", this.keyPress);
      }, beforeMount: function () {
        this.programmatic && document.body.appendChild(this.$el);
      }, mounted: function () {
        this.programmatic ? this.isActive = !0 : this.isActive && this.handleScroll();
      }, beforeDestroy: function () {
        "undefined" != typeof window && document.removeEventListener("keyup", this.keyPress);
      } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(49);t.default = { name: "bNotification", mixins: [i.a] };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(5),
        r = n.n(i),
        a = n(2);t.default = { name: "bPagination", components: r()({}, a.a.name, a.a), props: { total: [Number, String], perPage: { type: [Number, String], default: 20 }, current: { type: [Number, String], default: 1 }, size: String, simple: Boolean, order: String }, computed: { pageCount: function () {
          return Math.ceil(this.total / this.perPage);
        }, firstItem: function () {
          var e = this.current * this.perPage - this.perPage + 1;return e >= 0 ? e : 0;
        }, hasPrev: function () {
          return this.current > 1;
        }, hasFirst: function () {
          return this.current >= 3;
        }, hasFirstEllipsis: function () {
          return this.current >= 4;
        }, hasLast: function () {
          return this.current <= this.pageCount - 2;
        }, hasLastEllipsis: function () {
          return this.current < this.pageCount - 2 && this.current <= this.pageCount - 3;
        }, hasNext: function () {
          return this.current < this.pageCount;
        }, pagesInRange: function () {
          var e = this;if (!this.simple) {
            for (var t = Math.max(1, this.current - 1), n = Math.min(this.current + 1, this.pageCount), i = [], r = t; r <= n; r++) (function (t) {
              i.push({ number: t, isCurrent: e.current === t, click: function (n) {
                  e.$emit("change", t), e.$emit("update:current", t), e.$nextTick(function () {
                    return n.target.focus();
                  });
                } });
            })(r);return i;
          }
        } }, watch: { pageCount: function (e) {
          this.current > e && this.last();
        } }, methods: { prev: function () {
          this.hasPrev && (this.$emit("change", this.current - 1), this.$emit("update:current", this.current - 1));
        }, first: function () {
          this.$emit("change", 1), this.$emit("update:current", 1);
        }, last: function () {
          this.$emit("change", this.pageCount), this.$emit("update:current", this.pageCount);
        }, next: function () {
          this.hasNext && (this.$emit("change", this.current + 1), this.$emit("update:current", this.current + 1));
        } } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { name: "bPanel", props: { collapsible: { type: Boolean, default: !1 }, open: { type: Boolean, default: !0 }, hasCustomTemplate: { type: Boolean, default: !1 }, header: String, content: String, animation: { type: String, default: "fade" } }, data: function () {
        return { isOpen: this.open };
      }, watch: { open: function (e) {
          this.isOpen = e;
        } }, methods: { toggle: function () {
          this.collapsible && (this.isOpen = !this.isOpen, this.$emit("update:open", this.isOpen), this.isOpen ? this.$emit("open") : this.$emit("close"));
        } } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { name: "bRadio", props: { value: {}, nativeValue: {}, disabled: Boolean, name: String, size: String }, data: function () {
        return { newValue: this.value };
      }, watch: { value: function (e) {
          this.newValue = e;
        }, newValue: function (e) {
          e === this.nativeValue && this.$emit("input", e);
        } } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { name: "bRadioButton", props: { value: {}, nativeValue: {}, type: { type: String, default: "is-primary" }, disabled: Boolean, name: String, size: String }, data: function () {
        return { newValue: this.value };
      }, watch: { value: function (e) {
          this.newValue = e;
        }, newValue: function (e) {
          e === this.nativeValue && this.$emit("input", e);
        } } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(14),
        r = n.n(i),
        a = n(9);t.default = { name: "bSelect", inheritAttrs: !1, mixins: [a.a], props: { value: { type: [String, Number, Boolean, Object, Array, r.a, Function], default: null }, placeholder: String, multiple: Boolean, nativeSize: [String, Number] }, data: function () {
        return { selected: this.value, _isSelect: !0, _elementRef: "select" };
      }, watch: { value: function (e) {
          this.selected = e, !this.isValid && this.checkHtml5Validity();
        }, selected: function (e) {
          this.$emit("input", e), !this.isValid && this.checkHtml5Validity();
        } } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(1),
        r = n(50);t.default = { mixins: [r.a], props: { actionText: { type: String, default: "OK" }, onAction: { type: Function, default: function () {} } }, data: function () {
        return { newDuration: this.duration || i.b.defaultSnackbarDuration };
      }, methods: { action: function () {
          this.onAction(), this.close();
        } } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(14),
        r = n.n(i);t.default = { name: "bSwitch", props: { value: {}, nativeValue: {}, disabled: Boolean, type: String, name: String, size: String, trueValue: { type: [String, Number, Boolean, Function, Object, Array, r.a], default: !0 }, falseValue: { type: [String, Number, Boolean, Function, Object, Array, r.a], default: !1 } }, data: function () {
        return { newValue: this.value, isMouseDown: !1 };
      }, watch: { value: function (e) {
          this.newValue = e;
        }, newValue: function (e) {
          this.$emit("input", e);
        } } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(127),
        r = n.n(i),
        a = n(4),
        o = n(46),
        s = n(48),
        l = n(2),
        c = n(192),
        u = n.n(c);t.default = { name: "bTable", components: { BPagination: s.a, BIcon: l.a, BCheckbox: o.a, BTableMobileSort: u.a }, props: { data: { type: Array, default: function () {
            return [];
          } }, bordered: Boolean, striped: Boolean, narrowed: Boolean, hoverable: Boolean, loading: Boolean, detailed: Boolean, checkable: Boolean, selected: Object, focusable: Boolean, customIsChecked: Function, checkedRows: { type: Array, default: function () {
            return [];
          } }, mobileCards: { type: Boolean, default: !0 }, defaultSort: [String, Array], defaultSortDirection: { type: String, default: "asc" }, paginated: Boolean, currentPage: { type: Number, default: 1 }, perPage: { type: [Number, String], default: 20 }, paginationSimple: Boolean, backendSorting: Boolean, rowClass: { type: Function, default: function () {
            return "";
          } }, openedDetailed: { type: Array, default: function () {
            return [];
          } }, detailKey: { type: String, default: "" }, backendPagination: Boolean, total: { type: [Number, String], default: 0 } }, data: function () {
        return { columns: [], visibleDetailRows: this.openedDetailed, newData: this.data, newDataTotal: this.backendPagination ? this.total : this.data.length, newCheckedRows: [].concat(r()(this.checkedRows)), newCurrentPage: this.currentPage, currentSortColumn: {}, isAsc: !0, firstTimeSort: !0, _isTable: !0 };
      }, watch: { data: function (e) {
          var t = this,
              n = this.columns;this.columns = [], this.newData = e, this.$nextTick(function () {
            t.columns.length || (t.columns = n);
          }), this.backendSorting || this.sort(this.currentSortColumn, !0), this.backendPagination || (this.newDataTotal = e.length);
        }, total: function (e) {
          this.backendPagination && (this.newDataTotal = e);
        }, checkedRows: function (e) {
          this.newCheckedRows = [].concat(r()(e));
        }, columns: function (e) {
          if (e.length && this.firstTimeSort) this.initSort(), this.firstTimeSort = !1;else if (e.length) for (var t = 0; t < e.length; t++) if (e[t].newKey === this.currentSortColumn.newKey) {
            this.currentSortColumn = e[t];break;
          }
        }, openedDetailed: function (e) {
          this.visibleDetailRows = e;
        }, currentPage: function (e) {
          this.newCurrentPage = e;
        } }, computed: { tableClasses: function () {
          return { "is-bordered": this.bordered, "is-striped": this.striped, "is-narrow": this.narrowed, "has-mobile-cards": this.mobileCards, "is-hoverable": (this.hoverable || this.focusable) && this.visibleData.length };
        }, visibleData: function () {
          if (!this.paginated) return this.newData;var e = this.newCurrentPage,
              t = this.perPage;if (this.newData.length <= t) return this.newData;var n = (e - 1) * t,
              i = parseInt(n, 10) + parseInt(t, 10);return this.newData.slice(n, i);
        }, isAllChecked: function () {
          var e = this;return !this.visibleData.some(function (t) {
            return n.i(a.d)(e.checkedRows, t, e.customIsChecked) < 0;
          });
        }, hasSortableColumns: function () {
          return this.columns.some(function (e) {
            return e.sortable;
          });
        }, columnCount: function () {
          var e = this.columns.length;return e += this.checkable ? 1 : 0, e += this.detailed ? 1 : 0;
        } }, methods: { sortBy: function (e, t, i, o) {
          return i && "function" == typeof i ? [].concat(r()(e)).sort(i) : [].concat(r()(e)).sort(function (e, i) {
            var r = n.i(a.c)(e, t),
                s = n.i(a.c)(i, t);return r || 0 === r ? s || 0 === s ? r === s ? 0 : (r = "string" == typeof r ? r.toUpperCase() : r, s = "string" == typeof s ? s.toUpperCase() : s, o ? r > s ? 1 : -1 : r > s ? -1 : 1) : -1 : 1;
          });
        }, sort: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];e && e.sortable && (t || (this.isAsc = e === this.currentSortColumn ? !this.isAsc : "desc" !== this.defaultSortDirection.toLowerCase()), this.firstTimeSort || this.$emit("sort", e.field, this.isAsc ? "asc" : "desc"), this.backendSorting || (this.newData = this.sortBy(this.newData, e.field, e.customSort, this.isAsc)), this.currentSortColumn = e);
        }, isRowChecked: function (e) {
          return n.i(a.d)(this.checkedRows, e, this.customIsChecked) >= 0;
        }, removeCheckedRow: function (e) {
          var t = n.i(a.d)(this.newCheckedRows, e, this.customIsChecked);t >= 0 && this.newCheckedRows.splice(t, 1);
        }, checkAll: function () {
          var e = this,
              t = this.isAllChecked;this.visibleData.forEach(function (n) {
            e.removeCheckedRow(n), t || e.newCheckedRows.push(n);
          }), this.$emit("check", this.newCheckedRows), this.$emit("check-all", this.newCheckedRows), this.$emit("update:checkedRows", this.newCheckedRows);
        }, checkRow: function (e) {
          this.isRowChecked(e) ? this.removeCheckedRow(e) : this.newCheckedRows.push(e), this.$emit("check", this.newCheckedRows, e), this.$emit("update:checkedRows", this.newCheckedRows);
        }, selectRow: function (e, t) {
          this.$emit("click", e), this.selected !== e && (this.$emit("select", e, this.selected), this.$emit("update:selected", e));
        }, pageChanged: function (e) {
          this.newCurrentPage = e > 0 ? e : 1, this.$emit("page-change", this.newCurrentPage), this.$emit("update:currentPage", this.newCurrentPage);
        }, toggleDetails: function (e) {
          this.isVisibleDetailRow(e) ? (this.closeDetailRow(e), this.$emit("details-close", e)) : (this.openDetailRow(e), this.$emit("details-open", e)), this.$emit("update:openedDetailed", this.visibleDetailRows);
        }, openDetailRow: function (e) {
          var t = this.handleDetailKey(e);this.visibleDetailRows.push(t);
        }, closeDetailRow: function (e) {
          var t = this.handleDetailKey(e),
              n = this.visibleDetailRows.indexOf(t);this.visibleDetailRows.splice(n, 1);
        }, isVisibleDetailRow: function (e) {
          var t = this.handleDetailKey(e);return this.visibleDetailRows.indexOf(t) >= 0;
        }, handleDetailKey: function (e) {
          var t = this.detailKey;return t.length ? e[t] : e;
        }, checkPredefinedDetailedRows: function () {
          if (this.openedDetailed.length > 0 && !this.detailKey.length) throw new Error('If you set a predefined opened-detailed, you must provide an unique key using the prop "detail-key"');
        }, hasCustomFooterSlot: function () {
          if (this.$slots.footer.length > 1) return !0;var e = this.$slots.footer[0].tag;return "th" === e || "td" === e;
        }, pressedArrow: function (e) {
          if (this.visibleData.length) {
            var t = this.visibleData.indexOf(this.selected) + e;t = t < 0 ? 0 : t > this.visibleData.length - 1 ? this.visibleData.length - 1 : t, this.selectRow(this.visibleData[t]);
          }
        }, focus: function () {
          this.focusable && this.$el.querySelector("table").focus();
        }, initSort: function () {
          var e = this;if (this.defaultSort) {
            var t = "",
                n = this.defaultSortDirection;Array.isArray(this.defaultSort) ? (t = this.defaultSort[0], this.defaultSort[1] && (n = this.defaultSort[1])) : t = this.defaultSort, this.columns.forEach(function (i) {
              i.field === t && (e.isAsc = "desc" !== n.toLowerCase(), e.sort(i, !0));
            });
          }
        } }, mounted: function () {
        this.checkPredefinedDetailedRows();
      } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { name: "bTableColumn", props: { label: String, customKey: [String, Number], field: String, meta: {}, width: [Number, String], numeric: Boolean, centered: Boolean, sortable: Boolean, visible: { type: Boolean, default: !0 }, customSort: Function }, data: function () {
        return { newKey: this.customKey || this.label };
      }, created: function () {
        var e = this;if (!this.$parent.$data._isTable) throw this.$destroy(), new Error("You should wrap bTableColumn on a bTable");!this.$parent.columns.some(function (t) {
          return t.newKey === e.newKey;
        }) && this.$parent.columns.push(this);
      } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(24),
        r = n(2);t.default = { name: "bTableMobileSort", components: { BSelect: i.a, BIcon: r.a }, props: { currentSortColumn: Object, isAsc: Boolean, columns: Array }, data: function () {
        return { mobileSort: this.currentSortColumn };
      }, watch: { mobileSort: function (e) {
          this.currentSortColumn !== e && this.$emit("sort", e);
        }, currentSortColumn: function (e) {
          this.mobileSort = e;
        } }, methods: { sort: function () {
          this.$emit("sort", this.mobileSort);
        } } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { name: "bTabItem", props: { label: String, icon: String, iconPack: String, disabled: Boolean }, data: function () {
        return { isActive: !1, transitionName: null };
      }, methods: { activate: function (e, t) {
          this.$parent.animated ? this.transitionName = t < e ? "slide-next" : "slide-prev" : this.transitionName = null, this.isActive = !0;
        }, deactivate: function (e, t) {
          this.$parent.animated ? this.transitionName = t < e ? "slide-next" : "slide-prev" : this.transitionName = null, this.isActive = !1;
        } }, created: function () {
        if (!this.$parent.$data._isTabs) throw this.$destroy(), new Error("You should wrap bTabItem on a bTabs");this.$parent.tabItems.push(this);
      }, beforeDestroy: function () {
        var e = this.$parent.tabItems.indexOf(this);e >= 0 && this.$parent.tabItems.splice(e, 1);
      } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(5),
        r = n.n(i),
        a = n(2);t.default = { name: "bTabs", components: r()({}, a.a.name, a.a), props: { value: [String, Number], expanded: Boolean, type: String, size: String, position: String, animated: { type: Boolean, default: !0 } }, data: function () {
        return { newValue: this.value || 0, tabItems: [], contentHeight: 0, _isTabs: !0 };
      }, watch: { value: function (e) {
          this.changeTab(this.newValue, e), this.newValue = e;
        }, tabItems: function () {
          this.tabItems.length && (this.tabItems[this.newValue].isActive = !0);
        } }, methods: { changeTab: function (e, t) {
          e !== t && (this.tabItems[e].deactivate(e, t), this.tabItems[t].activate(e, t));
        }, tabClick: function (e) {
          this.$emit("input", e), this.$emit("change", e), this.changeTab(this.newValue, e), this.newValue = e;
        } }, mounted: function () {
        this.tabItems.length && (this.tabItems[this.newValue].isActive = !0);
      } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { name: "bTag", props: { attached: Boolean, closable: Boolean, type: String, size: String, rounded: Boolean, disabled: Boolean, tabstop: { type: Boolean, default: !0 } }, methods: { close: function () {
          this.disabled || this.$emit("close");
        } } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { name: "bTaglist", props: { attached: Boolean } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(52),
        r = n.n(i),
        a = n(5),
        o = n.n(a),
        s = n(4),
        l = n(45),
        c = n(9);t.default = { name: "bTaginput", mixins: [c.a], inheritAttrs: !1, components: o()({}, l.a.name, l.a), props: { value: { type: Array, default: function () {
            return [];
          } }, data: { type: Array, default: function () {
            return [];
          } }, type: String, rounded: { type: Boolean, default: !1 }, attached: { type: Boolean, default: !1 }, maxtags: { type: [Number, String], required: !1 }, field: { type: String, default: "value" }, autocomplete: Boolean, disabled: Boolean }, data: function () {
        return { tags: this.value || [], newTag: "", _elementRef: "input", _isTaginput: !0 };
      }, computed: { rootClasses: function () {
          return { "is-expanded": this.expanded };
        }, containerClasses: function () {
          return { "is-focused": this.isFocused, "is-focusable": this.hasInput };
        }, valueLength: function () {
          return this.newTag.trim().length;
        }, hasInput: function () {
          return null == this.maxtags || this.tagsLength < this.maxtags;
        }, tagsLength: function () {
          return this.tags.length;
        } }, watch: { value: function (e) {
          this.tags = e;
        }, newTag: function (e) {
          this.$emit("typing", e.trim());
        }, hasInput: function () {
          this.hasInput || this.onBlur();
        } }, methods: { addTag: function (e) {
          var t = e || this.newTag.trim();t && -1 === this.tags.indexOf(t) && (this.tags.push(t), this.$emit("input", this.tags), this.$emit("add", t)), this.newTag = "";
        }, getNormalizedTagText: function (e) {
          return "object" === (void 0 === e ? "undefined" : r()(e)) ? n.i(s.c)(e, this.field) : e;
        }, customOnBlur: function (e) {
          this.onBlur(e), this.autocomplete || this.addTag();
        }, onSelect: function (e) {
          var t = this;e && (this.addTag(e), this.$nextTick(function () {
            t.newTag = "";
          }));
        }, removeTag: function (e) {
          var t = this.tags.splice(e, 1)[0];return this.$emit("input", this.tags), this.$emit("remove", t), t;
        }, removeLastTag: function () {
          this.tagsLength > 0 && (this.newTag = this.removeTag(this.tagsLength - 1));
        }, keydown: function (e) {
          this.autocomplete || 13 !== e.keyCode && 188 !== e.keyCode || (e.preventDefault(), this.addTag());
        } } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i,
        r = n(5),
        a = n.n(r),
        o = n(9),
        s = n(4),
        l = n(1),
        c = n(28),
        u = n(23),
        d = n(29),
        f = n(24),
        p = n(2),
        h = "AM",
        v = "PM",
        m = function (e) {
      return (e < 10 ? "0" : "") + e;
    },
        y = function (e, t) {
      var n = e.getHours(),
          i = e.getMinutes(),
          r = !1;return "12" === t.hourFormat && (r = n < 12, n > 12 ? n -= 12 : 0 === n && (n = 12)), m(n) + ":" + m(i) + ("12" === t.hourFormat ? " " + (r ? h : v) : "");
    },
        g = function (e, t) {
      if (e) {
        var n = e,
            i = !1;if ("12" === t.hourFormat) {
          var r = e.split(" ");n = r[0], i = r[1] === h;
        }var a = n.split(":"),
            o = parseInt(a[0], 10),
            s = parseInt(a[1], 10);if (isNaN(o) || o < 0 || o > 23 || "12" === t.hourFormat && (o < 1 || o > 12) || isNaN(s) || s < 0 || s > 59) return null;var l = new Date();return l.setMilliseconds(0), l.setSeconds(0), l.setMinutes(s), "12" === t.hourFormat && (i && 12 === o ? o = 0 : i || 12 === o || (o += 12)), l.setHours(o), l;
      }return null;
    };t.default = { name: "bTimepicker", inheritAttrs: !1, mixins: [o.a], components: (i = {}, a()(i, u.a.name, u.a), a()(i, d.a.name, d.a), a()(i, f.a.name, f.a), a()(i, p.a.name, p.a), a()(i, c.a.name, c.a), a()(i, c.b.name, c.b), i), props: { value: Date, inline: Boolean, minTime: Date, maxTime: Date, placeholder: String, readonly: { type: Boolean, default: !0 }, disabled: { type: Boolean, default: !1 }, hourFormat: { type: String, default: "24", validator: function (e) {
            return "24" === e || "12" === e;
          } }, incrementMinutes: { type: Number, default: 1 }, timeFormatter: { type: Function, default: function (e, t) {
            return "function" == typeof l.b.defaultTimeFormatter ? l.b.defaultTimeFormatter(e) : y(e, t);
          } }, timeParser: { type: Function, default: function (e, t) {
            return "function" == typeof l.b.defaultTimeParser ? l.b.defaultTimeParser(e) : g(e, t);
          } }, mobileNative: { type: Boolean, default: function () {
            return l.b.defaultTimepickerMobileNative;
          } }, position: String }, data: function () {
        return { dateSelected: this.value, hoursSelected: null, minutesSelected: null, meridienSelected: null, _elementRef: "input", _isTimepicker: !0 };
      }, computed: { hours: function () {
          for (var e = [], t = this.isHourFormat24 ? 24 : 12, n = 0; n < t; n++) {
            var i = n,
                r = i;this.isHourFormat24 || (i = n + 1, r = i, this.meridienSelected === h ? 12 === i && (i = 0) : this.meridienSelected === v && 12 !== i && (i += 12)), e.push({ label: m(r), value: i });
          }return e;
        }, minutes: function () {
          for (var e = [], t = 0; t < 60; t += this.incrementMinutes) e.push({ label: m(t), value: t });return e;
        }, meridiens: function () {
          return [h, v];
        }, isMobile: function () {
          return this.mobileNative && s.b.any();
        }, isHourFormat24: function () {
          return "24" === this.hourFormat;
        } }, watch: { hourFormat: function (e) {
          null !== this.hoursSelected && (this.meridienSelected = this.hoursSelected >= 12 ? v : h);
        }, dateSelected: function (e) {
          this.$emit("input", e);
        }, value: function (e) {
          this.updateInternalState(e), this.dateSelected = e, !this.isValid && this.$refs.input.checkHtml5Validity();
        } }, methods: { onMeridienChange: function (e) {
          null !== this.hoursSelected && (e === v ? 0 === this.hoursSelected ? this.hoursSelected = 12 : this.hoursSelected += 12 : e === h && (12 === this.hoursSelected ? this.hoursSelected = 0 : this.hoursSelected -= 12)), this.updateDateSelected(this.hoursSelected, this.minutesSelected, e);
        }, onHoursChange: function (e) {
          this.updateDateSelected(parseInt(e, 10), this.minutesSelected, this.meridienSelected);
        }, onMinutesChange: function (e) {
          this.updateDateSelected(this.hoursSelected, parseInt(e, 10), this.meridienSelected);
        }, updateDateSelected: function (e, t, n) {
          null != e && null != t && (!this.isHourFormat24 && null !== n || this.isHourFormat24) && (this.dateSelected = new Date(), this.dateSelected.setMilliseconds(0), this.dateSelected.setSeconds(0), this.dateSelected.setHours(e), this.dateSelected.setMinutes(t));
        }, updateInternalState: function (e) {
          e ? (this.hoursSelected = e.getHours(), this.minutesSelected = e.getMinutes(), this.meridienSelected = e.getHours() >= 12 ? v : h) : (this.hoursSelected = null, this.minutesSelected = null, this.meridienSelected = h);
        }, isHourDisabled: function (e) {
          var t = !1;if (this.minTime) {
            t = e < this.minTime.getHours();
          }if (this.maxTime && !t) {
            t = e > this.maxTime.getHours();
          }return t;
        }, isMinuteDisabled: function (e) {
          var t = !1;if (null !== this.hoursSelected) if (this.isHourDisabled(this.hoursSelected)) t = !0;else {
            if (this.minTime) {
              var n = this.minTime.getHours(),
                  i = this.minTime.getMinutes();t = this.hoursSelected === n && e < i;
            }if (this.maxTime && !t) {
              var r = this.maxTime.getHours(),
                  a = this.maxTime.getMinutes();t = this.hoursSelected === r && e > a;
            }
          }return t;
        }, onChange: function (e) {
          var t = this.timeParser(e, this);this.updateInternalState(t), t && !isNaN(t) ? this.dateSelected = t : (this.dateSelected = null, this.$refs.input.newValue = this.dateSelected);
        }, formatValue: function (e) {
          return e && !isNaN(e) ? this.timeFormatter(e, this) : null;
        }, close: function () {
          this.$refs.dropdown && (this.$refs.dropdown.isActive = !1);
        }, formatHHMMSS: function (e) {
          var t = new Date(e);if (e && !isNaN(t)) {
            var n = t.getHours(),
                i = t.getMinutes();return m(n) + ":" + m(i) + ":00";
          }return "";
        }, onChangeNativePicker: function (e) {
          var t = e.target.value;if (t) {
            var n = new Date().toLocaleDateString() + " " + t;this.dateSelected = new Date(Date.parse(n));
          } else this.dateSelected = null;
        } }, mounted: function () {
        this.updateInternalState(this.value);
      } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(1),
        r = n(50);t.default = { mixins: [r.a], data: function () {
        return { newDuration: this.duration || i.b.defaultToastDuration };
      } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(1);t.default = { name: "bTooltip", props: { active: { type: Boolean, default: !0 }, type: String, label: String, position: { type: String, default: "is-top", validator: function (e) {
            return ["is-top", "is-bottom", "is-left", "is-right"].indexOf(e) > -1;
          } }, always: Boolean, animated: Boolean, square: Boolean, dashed: Boolean, multilined: Boolean, size: { type: String, default: "is-medium" } }, computed: { newType: function () {
          return this.type || i.b.defaultTooltipType;
        }, newAnimated: function () {
          return this.animated || i.b.defaultTooltipAnimated;
        } } };
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(9);t.default = { name: "bUpload", inheritAttrs: !1, mixins: [i.a], props: { value: { type: Array, default: function () {
            return [];
          } }, multiple: Boolean, disabled: Boolean, dragDrop: Boolean, type: { type: String, default: "is-primary" } }, data: function () {
        return { newValue: this.value || [], dragDropFocus: !1, _elementRef: "input" };
      }, watch: { value: function (e) {
          this.newValue = e, !this.isValid && !this.dragDrop && this.checkHtml5Validity();
        } }, methods: { upload: function () {
          this.disabled || this.loading || (this.$refs.input.value = null);
        }, onFileChange: function (e) {
          if (!this.disabled && !this.loading) {
            this.dragDrop && this.updateDragDropFocus(!1);var t = e.target.files || e.dataTransfer.files;if (t && t.length) {
              if (!this.multiple) if (this.dragDrop) {
                if (1 !== t.length) return !1;this.newValue = [];
              } else this.newValue = [];for (var n = 0; n < t.length; n++) this.newValue.push(t[n]);
            }this.$emit("input", this.newValue), !this.dragDrop && this.checkHtml5Validity();
          }
        }, updateDragDropFocus: function (e) {
          this.disabled || this.loading || (this.dragDropFocus = e);
        } } };
  }, function (e, t, n) {
    "use strict";
    var i = n(169),
        r = n.n(i);t.a = r.a;
  }, function (e, t, n) {
    "use strict";
    var i = n(170),
        r = n.n(i);t.a = r.a;
  }, function (e, t, n) {
    "use strict";
    function i(e) {
      return new (o.a.extend(l.a))({ el: document.createElement("div"), propsData: e });
    }var r = n(13),
        a = n.n(r),
        o = n(22),
        s = n(173),
        l = n.n(s);t.a = { alert: function (e) {
        var t = void 0;"string" == typeof e && (t = e);var n = { canCancel: !1, message: t };return i(a()(n, e));
      }, confirm: function (e) {
        var t = {};return i(a()(t, e));
      }, prompt: function (e) {
        var t = { hasInput: !0, confirmText: "Done" };return i(a()(t, e));
      } };
  }, function (e, t, n) {
    "use strict";
    var i = n(13),
        r = n.n(i),
        a = n(22),
        o = n(179),
        s = n.n(o);n.d(t, "a", function () {
      return s.a;
    }), t.b = { open: function (e) {
        var t = { programmatic: !0 },
            n = r()(t, e);return new (a.a.extend(s.a))({ el: document.createElement("div"), propsData: n });
      } };
  }, function (e, t, n) {
    "use strict";
    var i = n(180),
        r = n.n(i);t.a = r.a;
  }, function (e, t, n) {
    "use strict";
    var i = n(182),
        r = n.n(i);t.a = r.a;
  }, function (e, t, n) {
    "use strict";
    var i = n(184),
        r = n.n(i);t.a = r.a;
  }, function (e, t, n) {
    "use strict";
    var i = n(185),
        r = n.n(i),
        a = n(186),
        o = n.n(a);n.d(t, "a", function () {
      return r.a;
    }), n.d(t, "b", function () {
      return o.a;
    });
  }, function (e, t, n) {
    "use strict";
    var i = n(13),
        r = n.n(i),
        a = n(22),
        o = n(188),
        s = n.n(o);t.a = { open: function (e) {
        var t = void 0;"string" == typeof e && (t = e);var n = { type: "is-success", position: "is-bottom-right", message: t },
            i = r()(n, e);return new (a.a.extend(s.a))({ el: document.createElement("div"), propsData: i });
      } };
  }, function (e, t, n) {
    "use strict";
    var i = n(189),
        r = n.n(i);t.a = r.a;
  }, function (e, t, n) {
    "use strict";
    var i = n(190),
        r = n.n(i),
        a = n(191),
        o = n.n(a);n.d(t, "a", function () {
      return r.a;
    }), n.d(t, "b", function () {
      return o.a;
    });
  }, function (e, t, n) {
    "use strict";
    var i = n(194),
        r = n.n(i),
        a = n(193),
        o = n.n(a);n.d(t, "b", function () {
      return r.a;
    }), n.d(t, "a", function () {
      return o.a;
    });
  }, function (e, t, n) {
    "use strict";
    var i = n(195),
        r = n.n(i),
        a = n(196),
        o = n.n(a);n.d(t, "a", function () {
      return r.a;
    }), n.d(t, "b", function () {
      return o.a;
    });
  }, function (e, t, n) {
    "use strict";
    var i = n(197),
        r = n.n(i);t.a = r.a;
  }, function (e, t, n) {
    "use strict";
    var i = n(198),
        r = n.n(i);t.a = r.a;
  }, function (e, t, n) {
    "use strict";
    var i = n(13),
        r = n.n(i),
        a = n(22),
        o = n(199),
        s = n.n(o);t.a = { open: function (e) {
        var t = void 0;"string" == typeof e && (t = e);var n = { message: t },
            i = r()(n, e);return new (a.a.extend(s.a))({ el: document.createElement("div"), propsData: i });
      } };
  }, function (e, t, n) {
    "use strict";
    var i = n(200),
        r = n.n(i);t.a = r.a;
  }, function (e, t, n) {
    "use strict";
    var i = n(201),
        r = n.n(i);t.a = r.a;
  }, function (e, t, n) {
    e.exports = { default: n(128), __esModule: !0 };
  }, function (e, t, n) {
    e.exports = { default: n(131), __esModule: !0 };
  }, function (e, t, n) {
    e.exports = { default: n(133), __esModule: !0 };
  }, function (e, t, n) {
    "use strict";
    t.__esModule = !0;var i = n(124),
        r = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(i);t.default = function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];return n;
      }return (0, r.default)(e);
    };
  }, function (e, t, n) {
    n(43), n(157), e.exports = n(6).Array.from;
  }, function (e, t, n) {
    n(64), n(43), e.exports = n(156);
  }, function (e, t, n) {
    n(159), e.exports = n(6).Object.assign;
  }, function (e, t, n) {
    n(160);var i = n(6).Object;e.exports = function (e, t, n) {
      return i.defineProperty(e, t, n);
    };
  }, function (e, t, n) {
    n(162), n(161), n(163), n(164), e.exports = n(6).Symbol;
  }, function (e, t, n) {
    n(43), n(64), e.exports = n(42).f("iterator");
  }, function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");return e;
    };
  }, function (e, t) {
    e.exports = function () {};
  }, function (e, t, n) {
    var i = n(12),
        r = n(62),
        a = n(155);e.exports = function (e) {
      return function (t, n, o) {
        var s,
            l = i(t),
            c = r(l.length),
            u = a(o, c);if (e && n != n) {
          for (; c > u;) if ((s = l[u++]) != s) return !0;
        } else for (; c > u; u++) if ((e || u in l) && l[u] === n) return e || u || 0;return !e && -1;
      };
    };
  }, function (e, t, n) {
    var i = n(30),
        r = n(3)("toStringTag"),
        a = "Arguments" == i(function () {
      return arguments;
    }()),
        o = function (e, t) {
      try {
        return e[t];
      } catch (e) {}
    };e.exports = function (e) {
      var t, n, s;return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = o(t = Object(e), r)) ? n : a ? i(t) : "Object" == (s = i(t)) && "function" == typeof t.callee ? "Arguments" : s;
    };
  }, function (e, t, n) {
    "use strict";
    var i = n(8),
        r = n(21);e.exports = function (e, t, n) {
      t in e ? i.f(e, t, r(0, n)) : e[t] = n;
    };
  }, function (e, t, n) {
    var i = n(20),
        r = n(34),
        a = n(26);e.exports = function (e) {
      var t = i(e),
          n = r.f;if (n) for (var o, s = n(e), l = a.f, c = 0; s.length > c;) l.call(e, o = s[c++]) && t.push(o);return t;
    };
  }, function (e, t, n) {
    e.exports = n(7).document && document.documentElement;
  }, function (e, t, n) {
    var i = n(19),
        r = n(3)("iterator"),
        a = Array.prototype;e.exports = function (e) {
      return void 0 !== e && (i.Array === e || a[r] === e);
    };
  }, function (e, t, n) {
    var i = n(30);e.exports = Array.isArray || function (e) {
      return "Array" == i(e);
    };
  }, function (e, t, n) {
    var i = n(15);e.exports = function (e, t, n, r) {
      try {
        return r ? t(i(n)[0], n[1]) : t(n);
      } catch (t) {
        var a = e.return;throw void 0 !== a && i(a.call(e)), t;
      }
    };
  }, function (e, t, n) {
    "use strict";
    var i = n(58),
        r = n(21),
        a = n(35),
        o = {};n(16)(o, n(3)("iterator"), function () {
      return this;
    }), e.exports = function (e, t, n) {
      e.prototype = i(o, { next: r(1, n) }), a(e, t + " Iterator");
    };
  }, function (e, t, n) {
    var i = n(3)("iterator"),
        r = !1;try {
      var a = [7][i]();a.return = function () {
        r = !0;
      }, Array.from(a, function () {
        throw 2;
      });
    } catch (e) {}e.exports = function (e, t) {
      if (!t && !r) return !1;var n = !1;try {
        var a = [7],
            o = a[i]();o.next = function () {
          return { done: n = !0 };
        }, a[i] = function () {
          return o;
        }, e(a);
      } catch (e) {}return n;
    };
  }, function (e, t) {
    e.exports = function (e, t) {
      return { value: t, done: !!e };
    };
  }, function (e, t, n) {
    var i = n(20),
        r = n(12);e.exports = function (e, t) {
      for (var n, a = r(e), o = i(a), s = o.length, l = 0; s > l;) if (a[n = o[l++]] === t) return n;
    };
  }, function (e, t, n) {
    var i = n(27)("meta"),
        r = n(25),
        a = n(11),
        o = n(8).f,
        s = 0,
        l = Object.isExtensible || function () {
      return !0;
    },
        c = !n(18)(function () {
      return l(Object.preventExtensions({}));
    }),
        u = function (e) {
      o(e, i, { value: { i: "O" + ++s, w: {} } });
    },
        d = function (e, t) {
      if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;if (!a(e, i)) {
        if (!l(e)) return "F";if (!t) return "E";u(e);
      }return e[i].i;
    },
        f = function (e, t) {
      if (!a(e, i)) {
        if (!l(e)) return !0;if (!t) return !1;u(e);
      }return e[i].w;
    },
        p = function (e) {
      return c && h.NEED && l(e) && !a(e, i) && u(e), e;
    },
        h = e.exports = { KEY: i, NEED: !1, fastKey: d, getWeak: f, onFreeze: p };
  }, function (e, t, n) {
    "use strict";
    var i = n(20),
        r = n(34),
        a = n(26),
        o = n(39),
        s = n(56),
        l = Object.assign;e.exports = !l || n(18)(function () {
      var e = {},
          t = {},
          n = Symbol(),
          i = "abcdefghijklmnopqrst";return e[n] = 7, i.split("").forEach(function (e) {
        t[e] = e;
      }), 7 != l({}, e)[n] || Object.keys(l({}, t)).join("") != i;
    }) ? function (e, t) {
      for (var n = o(e), l = arguments.length, c = 1, u = r.f, d = a.f; l > c;) for (var f, p = s(arguments[c++]), h = u ? i(p).concat(u(p)) : i(p), v = h.length, m = 0; v > m;) d.call(p, f = h[m++]) && (n[f] = p[f]);return n;
    } : l;
  }, function (e, t, n) {
    var i = n(8),
        r = n(15),
        a = n(20);e.exports = n(10) ? Object.defineProperties : function (e, t) {
      r(e);for (var n, o = a(t), s = o.length, l = 0; s > l;) i.f(e, n = o[l++], t[n]);return e;
    };
  }, function (e, t, n) {
    var i = n(26),
        r = n(21),
        a = n(12),
        o = n(40),
        s = n(11),
        l = n(55),
        c = Object.getOwnPropertyDescriptor;t.f = n(10) ? c : function (e, t) {
      if (e = a(e), t = o(t, !0), l) try {
        return c(e, t);
      } catch (e) {}if (s(e, t)) return r(!i.f.call(e, t), e[t]);
    };
  }, function (e, t, n) {
    var i = n(12),
        r = n(59).f,
        a = {}.toString,
        o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        s = function (e) {
      try {
        return r(e);
      } catch (e) {
        return o.slice();
      }
    };e.exports.f = function (e) {
      return o && "[object Window]" == a.call(e) ? s(e) : r(i(e));
    };
  }, function (e, t, n) {
    var i = n(11),
        r = n(39),
        a = n(36)("IE_PROTO"),
        o = Object.prototype;e.exports = Object.getPrototypeOf || function (e) {
      return e = r(e), i(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? o : null;
    };
  }, function (e, t, n) {
    var i = n(38),
        r = n(31);e.exports = function (e) {
      return function (t, n) {
        var a,
            o,
            s = String(r(t)),
            l = i(n),
            c = s.length;return l < 0 || l >= c ? e ? "" : void 0 : (a = s.charCodeAt(l), a < 55296 || a > 56319 || l + 1 === c || (o = s.charCodeAt(l + 1)) < 56320 || o > 57343 ? e ? s.charAt(l) : a : e ? s.slice(l, l + 2) : o - 56320 + (a - 55296 << 10) + 65536);
      };
    };
  }, function (e, t, n) {
    var i = n(38),
        r = Math.max,
        a = Math.min;e.exports = function (e, t) {
      return e = i(e), e < 0 ? r(e + t, 0) : a(e, t);
    };
  }, function (e, t, n) {
    var i = n(15),
        r = n(63);e.exports = n(6).getIterator = function (e) {
      var t = r(e);if ("function" != typeof t) throw TypeError(e + " is not iterable!");return i(t.call(e));
    };
  }, function (e, t, n) {
    "use strict";
    var i = n(53),
        r = n(17),
        a = n(39),
        o = n(143),
        s = n(141),
        l = n(62),
        c = n(138),
        u = n(63);r(r.S + r.F * !n(145)(function (e) {
      Array.from(e);
    }), "Array", { from: function (e) {
        var t,
            n,
            r,
            d,
            f = a(e),
            p = "function" == typeof this ? this : Array,
            h = arguments.length,
            v = h > 1 ? arguments[1] : void 0,
            m = void 0 !== v,
            y = 0,
            g = u(f);if (m && (v = i(v, h > 2 ? arguments[2] : void 0, 2)), void 0 == g || p == Array && s(g)) for (t = l(f.length), n = new p(t); t > y; y++) c(n, y, m ? v(f[y], y) : f[y]);else for (d = g.call(f), n = new p(); !(r = d.next()).done; y++) c(n, y, m ? o(d, v, [r.value, y], !0) : r.value);return n.length = y, n;
      } });
  }, function (e, t, n) {
    "use strict";
    var i = n(135),
        r = n(146),
        a = n(19),
        o = n(12);e.exports = n(57)(Array, "Array", function (e, t) {
      this._t = o(e), this._i = 0, this._k = t;
    }, function () {
      var e = this._t,
          t = this._k,
          n = this._i++;return !e || n >= e.length ? (this._t = void 0, r(1)) : "keys" == t ? r(0, n) : "values" == t ? r(0, e[n]) : r(0, [n, e[n]]);
    }, "values"), a.Arguments = a.Array, i("keys"), i("values"), i("entries");
  }, function (e, t, n) {
    var i = n(17);i(i.S + i.F, "Object", { assign: n(149) });
  }, function (e, t, n) {
    var i = n(17);i(i.S + i.F * !n(10), "Object", { defineProperty: n(8).f });
  }, function (e, t) {}, function (e, t, n) {
    "use strict";
    var i = n(7),
        r = n(11),
        a = n(10),
        o = n(17),
        s = n(61),
        l = n(148).KEY,
        c = n(18),
        u = n(37),
        d = n(35),
        f = n(27),
        p = n(3),
        h = n(42),
        v = n(41),
        m = n(147),
        y = n(139),
        g = n(142),
        b = n(15),
        _ = n(12),
        w = n(40),
        k = n(21),
        x = n(58),
        C = n(152),
        S = n(151),
        D = n(8),
        $ = n(20),
        A = S.f,
        O = D.f,
        T = C.f,
        M = i.Symbol,
        P = i.JSON,
        V = P && P.stringify,
        I = p("_hidden"),
        E = p("toPrimitive"),
        F = {}.propertyIsEnumerable,
        j = u("symbol-registry"),
        N = u("symbols"),
        B = u("op-symbols"),
        R = Object.prototype,
        L = "function" == typeof M,
        z = i.QObject,
        H = !z || !z.prototype || !z.prototype.findChild,
        Y = a && c(function () {
      return 7 != x(O({}, "a", { get: function () {
          return O(this, "a", { value: 7 }).a;
        } })).a;
    }) ? function (e, t, n) {
      var i = A(R, t);i && delete R[t], O(e, t, n), i && e !== R && O(R, t, i);
    } : O,
        q = function (e) {
      var t = N[e] = x(M.prototype);return t._k = e, t;
    },
        W = L && "symbol" == typeof M.iterator ? function (e) {
      return "symbol" == typeof e;
    } : function (e) {
      return e instanceof M;
    },
        U = function (e, t, n) {
      return e === R && U(B, t, n), b(e), t = w(t, !0), b(n), r(N, t) ? (n.enumerable ? (r(e, I) && e[I][t] && (e[I][t] = !1), n = x(n, { enumerable: k(0, !1) })) : (r(e, I) || O(e, I, k(1, {})), e[I][t] = !0), Y(e, t, n)) : O(e, t, n);
    },
        K = function (e, t) {
      b(e);for (var n, i = y(t = _(t)), r = 0, a = i.length; a > r;) U(e, n = i[r++], t[n]);return e;
    },
        J = function (e, t) {
      return void 0 === t ? x(e) : K(x(e), t);
    },
        G = function (e) {
      var t = F.call(this, e = w(e, !0));return !(this === R && r(N, e) && !r(B, e)) && (!(t || !r(this, e) || !r(N, e) || r(this, I) && this[I][e]) || t);
    },
        Q = function (e, t) {
      if (e = _(e), t = w(t, !0), e !== R || !r(N, t) || r(B, t)) {
        var n = A(e, t);return !n || !r(N, t) || r(e, I) && e[I][t] || (n.enumerable = !0), n;
      }
    },
        X = function (e) {
      for (var t, n = T(_(e)), i = [], a = 0; n.length > a;) r(N, t = n[a++]) || t == I || t == l || i.push(t);return i;
    },
        Z = function (e) {
      for (var t, n = e === R, i = T(n ? B : _(e)), a = [], o = 0; i.length > o;) !r(N, t = i[o++]) || n && !r(R, t) || a.push(N[t]);return a;
    };L || (M = function () {
      if (this instanceof M) throw TypeError("Symbol is not a constructor!");var e = f(arguments.length > 0 ? arguments[0] : void 0),
          t = function (n) {
        this === R && t.call(B, n), r(this, I) && r(this[I], e) && (this[I][e] = !1), Y(this, e, k(1, n));
      };return a && H && Y(R, e, { configurable: !0, set: t }), q(e);
    }, s(M.prototype, "toString", function () {
      return this._k;
    }), S.f = Q, D.f = U, n(59).f = C.f = X, n(26).f = G, n(34).f = Z, a && !n(33) && s(R, "propertyIsEnumerable", G, !0), h.f = function (e) {
      return q(p(e));
    }), o(o.G + o.W + o.F * !L, { Symbol: M });for (var ee = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), te = 0; ee.length > te;) p(ee[te++]);for (var ee = $(p.store), te = 0; ee.length > te;) v(ee[te++]);o(o.S + o.F * !L, "Symbol", { for: function (e) {
        return r(j, e += "") ? j[e] : j[e] = M(e);
      }, keyFor: function (e) {
        if (W(e)) return m(j, e);throw TypeError(e + " is not a symbol!");
      }, useSetter: function () {
        H = !0;
      }, useSimple: function () {
        H = !1;
      } }), o(o.S + o.F * !L, "Object", { create: J, defineProperty: U, defineProperties: K, getOwnPropertyDescriptor: Q, getOwnPropertyNames: X, getOwnPropertySymbols: Z }), P && o(o.S + o.F * (!L || c(function () {
      var e = M();return "[null]" != V([e]) || "{}" != V({ a: e }) || "{}" != V(Object(e));
    })), "JSON", { stringify: function (e) {
        if (void 0 !== e && !W(e)) {
          for (var t, n, i = [e], r = 1; arguments.length > r;) i.push(arguments[r++]);return t = i[1], "function" == typeof t && (n = t), !n && g(t) || (t = function (e, t) {
            if (n && (t = n.call(this, e, t)), !W(t)) return t;
          }), i[1] = t, V.apply(P, i);
        }
      } }), M.prototype[E] || n(16)(M.prototype, E, M.prototype.valueOf), d(M, "Symbol"), d(Math, "Math", !0), d(i.JSON, "JSON", !0);
  }, function (e, t, n) {
    n(41)("asyncIterator");
  }, function (e, t, n) {
    n(41)("observable");
  }, function (e, t, n) {
    (function (e, t) {
      (function (e, n) {
        "use strict";
        function i(e) {
          "function" != typeof e && (e = new Function("" + e));for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];var i = { callback: e, args: t };return c[l] = i, s(l), l++;
        }function r(e) {
          delete c[e];
        }function a(e) {
          var t = e.callback,
              i = e.args;switch (i.length) {case 0:
              t();break;case 1:
              t(i[0]);break;case 2:
              t(i[0], i[1]);break;case 3:
              t(i[0], i[1], i[2]);break;default:
              t.apply(n, i);}
        }function o(e) {
          if (u) setTimeout(o, 0, e);else {
            var t = c[e];if (t) {
              u = !0;try {
                a(t);
              } finally {
                r(e), u = !1;
              }
            }
          }
        }if (!e.setImmediate) {
          var s,
              l = 1,
              c = {},
              u = !1,
              d = e.document,
              f = Object.getPrototypeOf && Object.getPrototypeOf(e);f = f && f.setTimeout ? f : e, "[object process]" === {}.toString.call(e.process) ? function () {
            s = function (e) {
              t.nextTick(function () {
                o(e);
              });
            };
          }() : !function () {
            if (e.postMessage && !e.importScripts) {
              var t = !0,
                  n = e.onmessage;return e.onmessage = function () {
                t = !1;
              }, e.postMessage("", "*"), e.onmessage = n, t;
            }
          }() ? e.MessageChannel ? function () {
            var e = new MessageChannel();e.port1.onmessage = function (e) {
              o(e.data);
            }, s = function (t) {
              e.port2.postMessage(t);
            };
          }() : d && "onreadystatechange" in d.createElement("script") ? function () {
            var e = d.documentElement;s = function (t) {
              var n = d.createElement("script");n.onreadystatechange = function () {
                o(t), n.onreadystatechange = null, e.removeChild(n), n = null;
              }, e.appendChild(n);
            };
          }() : function () {
            s = function (e) {
              setTimeout(o, 0, e);
            };
          }() : function () {
            var t = "setImmediate$" + Math.random() + "$",
                n = function (n) {
              n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && o(+n.data.slice(t.length));
            };e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), s = function (n) {
              e.postMessage(t + n, "*");
            };
          }(), f.setImmediate = i, f.clearImmediate = r;
        }
      })("undefined" == typeof self ? void 0 === e ? this : e : self);
    }).call(t, n(44), n(67));
  }, function (e, t, n) {
    var i = n(0)(n(69), n(231), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(70), n(219), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(71), n(225), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(72), n(226), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(73), n(236), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(74), n(228), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(75), n(233), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(76), n(217), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(77), n(207), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(78), n(211), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(79), n(221), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(81), n(220), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(82), n(232), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(83), n(212), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(84), n(214), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(85), n(235), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(86), n(224), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(87), n(204), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(88), n(216), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(89), n(222), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(90), n(206), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(91), n(210), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(92), n(229), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(93), n(213), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(94), n(218), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(95), n(215), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(96), n(223), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(97), n(205), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(98), n(234), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(99), n(237), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(100), n(227), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(101), n(230), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(102), n(202), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(103), n(203), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(104), n(208), null, null, null);e.exports = i.exports;
  }, function (e, t, n) {
    var i = n(0)(n(105), n(209), null, null, null);e.exports = i.exports;
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("div", { staticClass: "timepicker control", class: [e.size, { "is-expanded": e.expanded }] }, [!e.isMobile || e.inline ? n("b-dropdown", { ref: "dropdown", attrs: { position: e.position, disabled: e.disabled, inline: e.inline } }, [e.inline ? e._e() : n("b-input", e._b({ ref: "input", attrs: { slot: "trigger", autocomplete: "off", value: e.formatValue(e.dateSelected), placeholder: e.placeholder, size: e.size, icon: e.icon, "icon-pack": e.iconPack, loading: e.loading, disabled: e.disabled, readonly: e.readonly }, on: { focus: function (t) {
              e.$emit("focus", t);
            }, blur: function (t) {
              e.$emit("blur", t) && e.checkHtml5Validity();
            } }, nativeOn: { change: function (t) {
              e.onChange(t.target.value);
            } }, slot: "trigger" }, "b-input", e.$attrs, !1)), e._v(" "), n("b-dropdown-item", { attrs: { disabled: e.disabled, custom: "" } }, [n("div", { staticClass: "pagination-list" }, [n("b-field", [n("b-select", { attrs: { disabled: e.disabled, placeholder: "00" }, nativeOn: { change: function (t) {
              e.onHoursChange(t.target.value);
            } }, model: { value: e.hoursSelected, callback: function (t) {
              e.hoursSelected = t;
            }, expression: "hoursSelected" } }, e._l(e.hours, function (t) {
          return n("option", { key: t.value, attrs: { disabled: e.isHourDisabled(t.value) }, domProps: { value: t.value } }, [e._v("\n                            " + e._s(t.label) + "\n                        ")]);
        })), e._v(" "), n("b-select", { attrs: { disabled: e.disabled, placeholder: "00" }, nativeOn: { change: function (t) {
              e.onMinutesChange(t.target.value);
            } }, model: { value: e.minutesSelected, callback: function (t) {
              e.minutesSelected = t;
            }, expression: "minutesSelected" } }, e._l(e.minutes, function (t) {
          return n("option", { key: t.value, attrs: { disabled: e.isMinuteDisabled(t.value) }, domProps: { value: t.value } }, [e._v("\n                            " + e._s(t.label) + "\n                        ")]);
        })), e._v(" "), e.isHourFormat24 ? e._e() : n("b-select", { attrs: { disabled: e.disabled }, nativeOn: { change: function (t) {
              e.onMeridienChange(t.target.value);
            } }, model: { value: e.meridienSelected, callback: function (t) {
              e.meridienSelected = t;
            }, expression: "meridienSelected" } }, e._l(e.meridiens, function (t) {
          return n("option", { key: t, domProps: { value: t } }, [e._v("\n                            " + e._s(t) + "\n                        ")]);
        }))], 1)], 1), e._v(" "), void 0 !== e.$slots.default && e.$slots.default.length ? n("footer", { staticClass: "timepicker-footer" }, [e._t("default")], 2) : e._e()])], 1) : n("b-input", e._b({ ref: "input", attrs: { type: "time", autocomplete: "off", value: e.formatHHMMSS(e.value), placeholder: e.placeholder, size: e.size, icon: e.icon, "icon-pack": e.iconPack, loading: e.loading, max: e.formatHHMMSS(e.maxTime), min: e.formatHHMMSS(e.minTime), disabled: e.disabled, readonly: !1 }, on: { focus: function (t) {
              e.$emit("focus", t);
            }, blur: function (t) {
              e.$emit("blur", t) && e.checkHtml5Validity();
            } }, nativeOn: { change: function (t) {
              e.onChangeNativePicker(t);
            } } }, "b-input", e.$attrs, !1))], 1);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("transition", { attrs: { "enter-active-class": e.transition.enter, "leave-active-class": e.transition.leave } }, [n("div", { directives: [{ name: "show", rawName: "v-show", value: e.isActive, expression: "isActive" }], staticClass: "toast", class: [e.type, e.position] }, [n("div", { domProps: { innerHTML: e._s(e.message) } })])]);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("div", { staticClass: "pagination", class: [e.order, e.size, { "is-simple": e.simple }] }, [n("a", { staticClass: "pagination-previous", attrs: { role: "button", href: "#", disabled: !e.hasPrev }, on: { click: function (t) {
              t.preventDefault(), e.prev(t);
            } } }, [n("b-icon", { attrs: { icon: "chevron-left", both: "" } })], 1), e._v(" "), n("a", { staticClass: "pagination-next", attrs: { role: "button", href: "#", disabled: !e.hasNext }, on: { click: function (t) {
              t.preventDefault(), e.next(t);
            } } }, [n("b-icon", { attrs: { icon: "chevron-right", both: "" } })], 1), e._v(" "), e.simple ? e._e() : n("ul", { staticClass: "pagination-list" }, [e.hasFirst ? n("li", [n("a", { staticClass: "pagination-link", attrs: { role: "button", href: "#" }, on: { click: function (t) {
              t.preventDefault(), e.first(t);
            } } }, [e._v("1")])]) : e._e(), e._v(" "), e.hasFirstEllipsis ? n("li", [n("span", { staticClass: "pagination-ellipsis" }, [e._v("…")])]) : e._e(), e._v(" "), e._l(e.pagesInRange, function (t) {
          return n("li", { key: t.number }, [n("a", { staticClass: "pagination-link", class: { "is-current": t.isCurrent }, attrs: { role: "button", href: "#" }, on: { click: function (e) {
                e.preventDefault(), t.click(e);
              } } }, [e._v("\n                " + e._s(t.number) + "\n            ")])]);
        }), e._v(" "), e.hasLastEllipsis ? n("li", [n("span", { staticClass: "pagination-ellipsis" }, [e._v("…")])]) : e._e(), e._v(" "), e.hasLast ? n("li", [n("a", { staticClass: "pagination-link", attrs: { role: "button", href: "#" }, on: { click: function (t) {
              t.preventDefault(), e.last(t);
            } } }, [e._v(e._s(e.pageCount))])]) : e._e()], 2), e._v(" "), e.simple ? n("small", { staticClass: "info" }, [e._v("\n        " + e._s(e.firstItem) + "-" + e._s(e.current * e.perPage) + " / " + e._s(e.total) + "\n    ")]) : e._e()]);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("transition", { attrs: { name: e.transitionName } }, [n("div", { directives: [{ name: "show", rawName: "v-show", value: e.isActive, expression: "isActive" }], staticClass: "tab-item" }, [e._t("default")], 2)]);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("div", { staticClass: "control" }, [n("label", { ref: "label", staticClass: "b-radio radio button", class: [e.newValue === e.nativeValue ? e.type : null, e.size], attrs: { disabled: e.disabled, tabindex: !e.disabled && 0 }, on: { keydown: function (t) {
              if (!("button" in t) && e._k(t.keyCode, "enter", 13, t.key) && e._k(t.keyCode, "space", 32, t.key)) return null;t.preventDefault(), e.$refs.label.click();
            } } }, [e._t("default"), e._v(" "), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.newValue, expression: "newValue" }], attrs: { type: "radio", disabled: e.disabled, name: e.name }, domProps: { value: e.nativeValue, checked: e._q(e.newValue, e.nativeValue) }, on: { change: function (t) {
              e.newValue = e.nativeValue;
            } } })], 2)]);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("div", { staticClass: "dropdown", class: [e.position, { "is-disabled": e.disabled, "is-hoverable": e.hoverable, "is-inline": e.inline, "is-active": e.isActive || e.inline, "is-mobile-modal": e.isMobileModal }] }, [e.inline ? e._e() : n("div", { ref: "trigger", staticClass: "dropdown-trigger", attrs: { role: "button" }, on: { click: e.toggle } }, [e._t("trigger")], 2), e._v(" "), n("transition", { attrs: { name: "fade" } }, [e.isMobileModal ? n("div", { directives: [{ name: "show", rawName: "v-show", value: e.isActive, expression: "isActive" }], staticClass: "background" }) : e._e()]), e._v(" "), n("transition", { attrs: { name: "fade" } }, [n("div", { directives: [{ name: "show", rawName: "v-show", value: e.isActive || e.hoverable || e.inline, expression: "isActive || hoverable || inline" }], ref: "dropdownMenu", staticClass: "dropdown-menu" }, [n("div", { staticClass: "dropdown-content" }, [e._t("default")], 2)])])], 1);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement;return (e._self._c || t)("span", { class: [e.newType, e.position, e.size, { tooltip: e.active, "is-square": e.square, "is-animated": e.newAnimated, "is-always": e.always, "is-multiline": e.multilined, "is-dashed": e.dashed }], attrs: { "data-label": e.label } }, [e._t("default")], 2);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("label", { staticClass: "upload control" }, [e.dragDrop ? n("div", { staticClass: "upload-draggable", class: [e.type, { "is-loading": e.loading, "is-disabled": e.disabled, "is-hovered": e.dragDropFocus }], on: { dragover: function (t) {
              t.preventDefault(), e.updateDragDropFocus(!0);
            }, dragleave: function (t) {
              t.preventDefault(), e.updateDragDropFocus(!1);
            }, dragenter: function (t) {
              t.preventDefault(), e.updateDragDropFocus(!0);
            }, drop: function (t) {
              t.preventDefault(), e.onFileChange(t);
            } } }, [e._t("default")], 2) : [e._t("default")], e._v(" "), n("input", e._b({ ref: "input", attrs: { type: "file", multiple: e.multiple, disabled: e.disabled }, on: { click: e.upload, change: e.onFileChange } }, "input", e.$attrs, !1))], 2);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("div", { staticClass: "control", class: { "is-expanded": e.expanded, "has-icons-left": e.icon } }, [n("span", { staticClass: "select", class: [e.size, e.statusType, { "is-fullwidth": e.expanded, "is-loading": e.loading, "is-multiple": e.multiple, "is-empty": null === e.selected }] }, [n("select", e._b({ directives: [{ name: "model", rawName: "v-model", value: e.selected, expression: "selected" }], ref: "select", attrs: { multiple: e.multiple, size: e.nativeSize }, on: { blur: function (t) {
              e.$emit("blur", t) && e.checkHtml5Validity();
            }, focus: function (t) {
              e.$emit("focus", t);
            }, change: function (t) {
              var n = Array.prototype.filter.call(t.target.options, function (e) {
                return e.selected;
              }).map(function (e) {
                return "_value" in e ? e._value : e.value;
              });e.selected = t.target.multiple ? n : n[0];
            } } }, "select", e.$attrs, !1), [e.placeholder ? n("option", { attrs: { selected: "", disabled: "", hidden: "" }, domProps: { value: null } }, [e._v("\n                " + e._s(e.placeholder) + "\n            ")]) : e._e(), e._v(" "), e._t("default")], 2)]), e._v(" "), e.icon ? n("b-icon", { staticClass: "is-left", attrs: { icon: e.icon, pack: e.iconPack, size: e.iconSize } }) : e._e()], 1);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return e.separator ? n("hr", { staticClass: "dropdown-divider" }) : e.custom || e.hasLink ? n("div", { class: { "dropdown-item": !e.hasLink, "is-disabled": e.disabled, "is-paddingless": e.paddingless, "is-active": null !== e.value && e.value === e.$parent.selected, "has-link": e.hasLink }, on: { click: e.selectItem } }, [e._t("default")], 2) : n("a", { staticClass: "dropdown-item", class: { "is-disabled": e.disabled, "is-paddingless": e.paddingless, "is-active": null !== e.value && e.value === e.$parent.selected }, on: { click: e.selectItem } }, [e._t("default")], 2);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("transition", { attrs: { name: e.animation } }, [e.isActive ? n("div", { staticClass: "loading-overlay is-active" }, [n("div", { staticClass: "loading-background", on: { click: e.cancel } }), e._v(" "), n("div", { staticClass: "loading-icon" })]) : e._e()]);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("label", { ref: "label", staticClass: "switch", class: [e.size, { "is-disabled": e.disabled }], attrs: { disabled: e.disabled, tabindex: !e.disabled && 0 }, on: { keydown: function (t) {
              if (!("button" in t) && e._k(t.keyCode, "enter", 13, t.key) && e._k(t.keyCode, "space", 32, t.key)) return null;t.preventDefault(), e.$refs.label.click();
            }, mousedown: function (t) {
              e.isMouseDown = !0;
            }, mouseup: function (t) {
              e.isMouseDown = !1;
            }, mouseout: function (t) {
              e.isMouseDown = !1;
            }, blur: function (t) {
              e.isMouseDown = !1;
            } } }, [n("input", { directives: [{ name: "model", rawName: "v-model", value: e.newValue, expression: "newValue" }], attrs: { type: "checkbox", name: e.name, disabled: e.disabled, "true-value": e.trueValue, "false-value": e.falseValue }, domProps: { checked: Array.isArray(e.newValue) ? e._i(e.newValue, null) > -1 : e._q(e.newValue, e.trueValue) }, on: { change: function (t) {
              var n = e.newValue,
                  i = t.target,
                  r = i.checked ? e.trueValue : e.falseValue;if (Array.isArray(n)) {
                var a = e._i(n, null);i.checked ? a < 0 && (e.newValue = n.concat([null])) : a > -1 && (e.newValue = n.slice(0, a).concat(n.slice(a + 1)));
              } else e.newValue = r;
            } } }), e._v(" "), n("span", { staticClass: "check", class: [{ "is-elastic": e.isMouseDown }, e.type] }), e._v(" "), n("span", { staticClass: "control-label" }, [e._t("default")], 2)]);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("transition", { attrs: { name: "fade" } }, [e.isActive ? n("article", { staticClass: "message", class: [e.type, e.size] }, [e.title ? n("header", { staticClass: "message-header" }, [n("p", [e._v(e._s(e.title))]), e._v(" "), e.closable ? n("button", { staticClass: "delete", attrs: { type: "button" }, on: { click: e.close } }) : e._e()]) : e._e(), e._v(" "), n("section", { staticClass: "message-body" }, [n("div", { staticClass: "media" }, [e.icon && e.hasIcon ? n("div", { staticClass: "media-left" }, [n("b-icon", { class: e.type, attrs: { icon: e.icon, both: "", size: "is-large" } })], 1) : e._e(), e._v(" "), n("div", { staticClass: "media-content" }, [e._t("default")], 2)])])]) : e._e()]);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return e.visible ? n("td", { class: { "has-text-right": e.numeric && !e.centered, "has-text-centered": e.centered }, attrs: { "data-label": e.label } }, [n("span", [e._t("default")], 2)]) : e._e();
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("nav", { staticClass: "panel" }, [n("div", { staticClass: "panel-heading", class: { "is-collapsible": e.collapsible }, on: { click: e.toggle } }, [e.header ? n("span", { domProps: { innerHTML: e._s(e.header) } }) : e._t("header"), e._v(" "), e.collapsible ? n("b-icon", { staticClass: "is-pulled-right", attrs: { both: "", icon: e.isOpen ? "menu-up" : "menu-down" } }) : e._e()], 2), e._v(" "), n("transition", { attrs: { name: e.animation } }, [n("div", { directives: [{ name: "show", rawName: "v-show", value: e.isOpen, expression: "isOpen" }], staticClass: "panel-content", class: { "panel-block": !e.hasCustomTemplate } }, [e.content ? n("div", { domProps: { innerHTML: e._s(e.content) } }) : e._t("default")], 2)])], 1);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("transition", { attrs: { name: e.animation } }, [e.isActive ? n("div", { staticClass: "dialog modal is-active", class: e.size }, [n("div", { staticClass: "modal-background", on: { click: function (t) {
              e.cancel("outside");
            } } }), e._v(" "), n("div", { staticClass: "modal-card animation-content" }, [e.title ? n("header", { staticClass: "modal-card-head" }, [n("p", { staticClass: "modal-card-title" }, [e._v(e._s(e.title))])]) : e._e(), e._v(" "), n("section", { staticClass: "modal-card-body", class: { "is-titleless": !e.title, "is-flex": e.hasIcon } }, [n("div", { staticClass: "media" }, [e.hasIcon ? n("div", { staticClass: "media-left" }, [n("b-icon", { attrs: { icon: e.icon ? e.icon : e.iconByType, pack: e.iconPack, type: e.type, both: !e.icon, size: "is-large" } })], 1) : e._e(), e._v(" "), n("div", { staticClass: "media-content" }, [n("p", { domProps: { innerHTML: e._s(e.message) } }), e._v(" "), e.hasInput ? n("div", { staticClass: "field" }, [n("div", { staticClass: "control" }, [n("input", e._b({ directives: [{ name: "model", rawName: "v-model", value: e.prompt, expression: "prompt" }], ref: "input", staticClass: "input", class: { "is-danger": e.validationMessage }, attrs: { required: "" }, domProps: { value: e.prompt }, on: { keyup: function (t) {
              if (!("button" in t) && e._k(t.keyCode, "enter", 13, t.key)) return null;e.confirm(t);
            }, input: function (t) {
              t.target.composing || (e.prompt = t.target.value);
            } } }, "input", e.inputAttrs, !1))]), e._v(" "), n("p", { staticClass: "help is-danger" }, [e._v(e._s(e.validationMessage))])]) : e._e()])])]), e._v(" "), n("footer", { staticClass: "modal-card-foot" }, [e.showCancel ? n("button", { ref: "cancelButton", staticClass: "button is-light", on: { click: function (t) {
              e.cancel("button");
            } } }, [e._v("\n                    " + e._s(e.cancelText) + "\n                ")]) : e._e(), e._v(" "), n("button", { ref: "confirmButton", staticClass: "button", class: e.type, on: { click: e.confirm } }, [e._v("\n                    " + e._s(e.confirmText) + "\n                ")])])])]) : e._e()]);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("div", { staticClass: "b-table", class: { "is-loading": e.loading } }, [e.mobileCards && e.hasSortableColumns ? n("b-table-mobile-sort", { attrs: { "current-sort-column": e.currentSortColumn, "is-asc": e.isAsc, columns: e.columns }, on: { sort: function (t) {
              return e.sort(t);
            } } }) : e._e(), e._v(" "), n("div", { staticClass: "table-wrapper" }, [n("table", { staticClass: "table", class: e.tableClasses, attrs: { tabindex: !!e.focusable && 0 }, on: { keydown: [function (t) {
              if (!("button" in t) && e._k(t.keyCode, "up", 38, t.key)) return null;t.preventDefault(), e.pressedArrow(-1);
            }, function (t) {
              if (!("button" in t) && e._k(t.keyCode, "down", 40, t.key)) return null;t.preventDefault(), e.pressedArrow(1);
            }] } }, [e.columns.length ? n("thead", [n("tr", [e.detailed ? n("th", { attrs: { width: "40px" } }) : e._e(), e._v(" "), e.checkable ? n("th", { staticClass: "checkbox-cell" }, [n("b-checkbox", { attrs: { value: e.isAllChecked }, nativeOn: { change: function (t) {
              e.checkAll(t);
            } } })], 1) : e._e(), e._v(" "), e._l(e.columns, function (t, i) {
          return t.visible ? n("th", { key: i, class: { "is-current-sort": e.currentSortColumn === t, "is-sortable": t.sortable }, style: { width: t.width + "px" }, on: { click: function (n) {
                n.stopPropagation(), e.sort(t);
              } } }, [n("div", { staticClass: "th-wrap", class: { "is-numeric": t.numeric, "is-centered": t.centered } }, [e.$scopedSlots.header ? e._t("header", null, { column: t, index: i }) : [e._v(e._s(t.label))], e._v(" "), n("b-icon", { directives: [{ name: "show", rawName: "v-show", value: e.currentSortColumn === t, expression: "currentSortColumn === column" }], class: { "is-desc": !e.isAsc }, attrs: { icon: "arrow-up", both: "", size: "is-small" } })], 2)]) : e._e();
        })], 2)]) : e._e(), e._v(" "), e.visibleData.length ? n("tbody", [e._l(e.visibleData, function (t, i) {
          return [n("tr", { key: i, class: [e.rowClass(t, i), { "is-selected": t === e.selected, "is-checked": e.isRowChecked(t) }], on: { click: function (n) {
                e.selectRow(t);
              }, dblclick: function (n) {
                e.$emit("dblclick", t);
              } } }, [e.detailed ? n("td", [n("a", { attrs: { role: "button" }, on: { click: function (n) {
                n.stopPropagation(), e.toggleDetails(t);
              } } }, [n("b-icon", { class: { "is-expanded": e.isVisibleDetailRow(t) }, attrs: { icon: "chevron-right", both: "" } })], 1)]) : e._e(), e._v(" "), e.checkable ? n("td", { staticClass: "checkbox-cell" }, [n("b-checkbox", { attrs: { value: e.isRowChecked(t) }, nativeOn: { change: function (n) {
                e.checkRow(t);
              } } })], 1) : e._e(), e._v(" "), e._t("default", null, { row: t, index: i })], 2), e._v(" "), e.detailed && e.isVisibleDetailRow(t) ? n("tr", { key: i, staticClass: "detail" }, [n("td", { attrs: { colspan: e.columnCount } }, [n("div", { staticClass: "detail-container" }, [e._t("detail", null, { row: t, index: i })], 2)])]) : e._e()];
        })], 2) : n("tbody", [n("tr", { staticClass: "is-empty" }, [n("td", { attrs: { colspan: e.columnCount } }, [e._t("empty")], 2)])]), e._v(" "), void 0 !== e.$slots.footer ? n("tfoot", [n("tr", { staticClass: "table-footer" }, [e.hasCustomFooterSlot() ? e._t("footer") : n("th", { attrs: { colspan: e.columnCount } }, [e._t("footer")], 2)], 2)]) : e._e()])]), e._v(" "), e.checkable || e.paginated ? n("div", { staticClass: "level" }, [n("div", { staticClass: "level-left" }, [e._t("bottom-left")], 2), e._v(" "), n("div", { staticClass: "level-right" }, [e.paginated ? n("div", { staticClass: "level-item" }, [n("b-pagination", { attrs: { total: e.newDataTotal, "per-page": e.perPage, simple: e.paginationSimple, current: e.newCurrentPage }, on: { change: e.pageChanged } })], 1) : e._e()])]) : e._e()], 1);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("label", { ref: "label", staticClass: "b-checkbox checkbox", class: [e.size, { "is-disabled": e.disabled }], attrs: { disabled: e.disabled, tabindex: !e.disabled && 0 }, on: { keydown: function (t) {
              if (!("button" in t) && e._k(t.keyCode, "enter", 13, t.key) && e._k(t.keyCode, "space", 32, t.key)) return null;t.preventDefault(), e.$refs.label.click();
            } } }, [n("input", { directives: [{ name: "model", rawName: "v-model", value: e.newValue, expression: "newValue" }], attrs: { type: "checkbox", disabled: e.disabled, name: e.name, "true-value": e.trueValue, "false-value": e.falseValue }, domProps: { value: e.nativeValue, checked: Array.isArray(e.newValue) ? e._i(e.newValue, e.nativeValue) > -1 : e._q(e.newValue, e.trueValue) }, on: { change: function (t) {
              var n = e.newValue,
                  i = t.target,
                  r = i.checked ? e.trueValue : e.falseValue;if (Array.isArray(n)) {
                var a = e.nativeValue,
                    o = e._i(n, a);i.checked ? o < 0 && (e.newValue = n.concat([a])) : o > -1 && (e.newValue = n.slice(0, o).concat(n.slice(o + 1)));
              } else e.newValue = r;
            } } }), e._v(" "), n("span", { staticClass: "check" }), e._v(" "), n("span", { staticClass: "control-label" }, [e._t("default")], 2)]);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("span", { staticClass: "icon", class: [e.newType, e.size] }, [n("i", { class: [e.newPack, e.newIcon, e.newCustomSize, e.customClass] })]);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("div", { staticClass: "field", class: [e.fieldType, e.newPosition, { "is-expanded": e.expanded, "is-grouped-multiline": e.groupMultiline, "is-horizontal": e.horizontal }] }, [e.horizontal ? n("div", { staticClass: "field-label is-normal" }, [e.label ? n("label", { staticClass: "label", attrs: { for: e.labelFor } }, [e._v(e._s(e.label))]) : e._e()]) : [e.label ? n("label", { staticClass: "label", attrs: { for: e.labelFor } }, [e._v(e._s(e.label))]) : e._e()], e._v(" "), e.horizontal ? n("b-field-body", [e._t("default")], 2) : [e._t("default")], e._v(" "), e.newMessage ? n("p", { staticClass: "help", class: e.newType, domProps: { innerHTML: e._s(e.formattedMessage) } }) : e._e()], 2);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("label", { ref: "label", staticClass: "b-radio radio", class: [e.size, { "is-disabled": e.disabled }], attrs: { disabled: e.disabled, tabindex: !e.disabled && 0 }, on: { keydown: function (t) {
              if (!("button" in t) && e._k(t.keyCode, "enter", 13, t.key) && e._k(t.keyCode, "space", 32, t.key)) return null;t.preventDefault(), e.$refs.label.click();
            } } }, [n("input", { directives: [{ name: "model", rawName: "v-model", value: e.newValue, expression: "newValue" }], attrs: { type: "radio", disabled: e.disabled, name: e.name }, domProps: { value: e.nativeValue, checked: e._q(e.newValue, e.nativeValue) }, on: { change: function (t) {
              e.newValue = e.nativeValue;
            } } }), e._v(" "), n("span", { staticClass: "check" }), e._v(" "), n("span", { staticClass: "control-label" }, [e._t("default")], 2)]);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("div", { staticClass: "field table-mobile-sort" }, [n("div", { staticClass: "field has-addons" }, [n("b-select", { attrs: { expanded: "" }, model: { value: e.mobileSort, callback: function (t) {
              e.mobileSort = t;
            }, expression: "mobileSort" } }, e._l(e.columns, function (t, i) {
          return t.sortable ? n("option", { key: i, domProps: { value: t } }, [e._v("\n                " + e._s(t.label) + "\n            ")]) : e._e();
        })), e._v(" "), n("div", { staticClass: "control" }, [n("button", { staticClass: "button is-primary", on: { click: e.sort } }, [n("b-icon", { directives: [{ name: "show", rawName: "v-show", value: e.currentSortColumn === e.mobileSort, expression: "currentSortColumn === mobileSort" }], class: { "is-desc": !e.isAsc }, attrs: { icon: "arrow-up", size: "is-small", both: "" } })], 1)])], 1)]);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("transition", { attrs: { name: "fade" } }, [e.isActive ? n("article", { staticClass: "notification", class: e.type }, [e.closable ? n("button", { staticClass: "delete", attrs: { type: "button" }, on: { click: e.close } }) : e._e(), e._v(" "), n("div", { staticClass: "media" }, [e.icon && e.hasIcon ? n("div", { staticClass: "media-left" }, [n("b-icon", { attrs: { icon: e.icon, both: "", size: "is-large" } })], 1) : e._e(), e._v(" "), n("div", { staticClass: "media-content" }, [e._t("default")], 2)])]) : e._e()]);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("div", { staticClass: "control" }, [n("label", { ref: "label", staticClass: "b-checkbox checkbox button", class: [e.checked ? e.type : null, e.size, { "is-disabled": e.disabled }], attrs: { disabled: e.disabled, tabindex: !e.disabled && 0 }, on: { keydown: function (t) {
              if (!("button" in t) && e._k(t.keyCode, "enter", 13, t.key) && e._k(t.keyCode, "space", 32, t.key)) return null;t.preventDefault(), e.$refs.label.click();
            } } }, [e._t("default"), e._v(" "), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.newValue, expression: "newValue" }], attrs: { type: "checkbox", disabled: e.disabled, name: e.name }, domProps: { value: e.nativeValue, checked: Array.isArray(e.newValue) ? e._i(e.newValue, e.nativeValue) > -1 : e.newValue }, on: { change: function (t) {
              var n = e.newValue,
                  i = t.target,
                  r = !!i.checked;if (Array.isArray(n)) {
                var a = e.nativeValue,
                    o = e._i(n, a);i.checked ? o < 0 && (e.newValue = n.concat([a])) : o > -1 && (e.newValue = n.slice(0, o).concat(n.slice(o + 1)));
              } else e.newValue = r;
            } } })], 2)]);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("div", { staticClass: "collapse" }, [n("div", { staticClass: "collapse-trigger", on: { click: e.toggle } }, [e._t("trigger")], 2), e._v(" "), n("transition", { attrs: { name: e.animation } }, [n("div", { directives: [{ name: "show", rawName: "v-show", value: e.isOpen, expression: "isOpen" }], staticClass: "collapse-content" }, [e._t("default")], 2)])], 1);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement;return (e._self._c || t)("div", { staticClass: "tags", class: { "has-addons": e.attached } }, [e._t("default")], 2);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("section", { staticClass: "datepicker-table" }, [n("header", { staticClass: "datepicker-header" }, e._l(e.visibleDayNames, function (t) {
          return n("div", { key: t, staticClass: "datepicker-cell" }, [e._v("\n            " + e._s(t) + "\n        ")]);
        })), e._v(" "), n("div", { staticClass: "datepicker-body", class: { "has-events": e.hasEvents } }, e._l(e.weeksInThisMonth(e.focused.month, e.focused.year), function (t, i) {
          return n("b-datepicker-table-row", { key: i, attrs: { selectedDate: e.value, week: t, month: e.focused.month, "min-date": e.minDate, "max-date": e.maxDate, disabled: e.disabled, "unselectable-dates": e.unselectableDates, events: e.eventsInThisWeek(t, i), indicators: e.indicators }, on: { select: e.updateSelectedDate } });
        }))]);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("transition", { attrs: { "enter-active-class": e.transition.enter, "leave-active-class": e.transition.leave } }, [n("div", { directives: [{ name: "show", rawName: "v-show", value: e.isActive, expression: "isActive" }], staticClass: "snackbar", class: e.position }, [n("p", { staticClass: "text" }, [e._v(e._s(e.message))]), e._v(" "), e.actionText ? n("div", { staticClass: "action", class: e.type, on: { click: e.action } }, [n("button", { staticClass: "button is-dark" }, [e._v(e._s(e.actionText))])]) : e._e()])]);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("div", { staticClass: "taginput control", class: [e.size, e.rootClasses] }, [n("div", { staticClass: "taginput-container", class: [e.statusType, e.size, e.containerClasses], attrs: { disabled: e.disabled }, on: { click: function (t) {
              e.hasInput && e.focus(t);
            } } }, [e._l(e.tags, function (t, i) {
          return n("b-tag", { key: i, attrs: { type: e.type, size: e.size, rounded: e.rounded, attached: e.attached, tabstop: !1, disabled: e.disabled, closable: "" }, on: { close: function (t) {
                e.removeTag(i);
              } } }, [e._v("\n            " + e._s(e.getNormalizedTagText(t)) + "\n        ")]);
        }), e._v(" "), e.hasInput ? n("b-autocomplete", e._b({ ref: "autocomplete", attrs: { data: e.data, field: e.field, icon: e.icon, "icon-pack": e.iconPack, maxlength: e.maxlength, "has-counter": !1, size: e.size, disabled: e.disabled, loading: e.loading, "keep-first": "" }, on: { focus: e.onFocus, blur: e.customOnBlur, select: e.onSelect }, nativeOn: { keydown: function (t) {
              e.keydown(t);
            } }, model: { value: e.newTag, callback: function (t) {
              e.newTag = t;
            }, expression: "newTag" } }, "b-autocomplete", e.$attrs, !1)) : e._e()], 2), e._v(" "), e.maxtags || e.maxlength ? n("p", { staticClass: "help counter" }, [e.maxlength && e.valueLength > 0 ? [e._v("\n            " + e._s(e.valueLength) + " / " + e._s(e.maxlength) + "\n        ")] : e.maxtags ? [e._v("\n            " + e._s(e.tagsLength) + " / " + e._s(e.maxtags) + "\n        ")] : e._e()], 2) : e._e()]);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("div", { staticClass: "autocomplete control", class: { size: e.size, "is-expanded": e.expanded } }, [n("b-input", e._b({ ref: "input", attrs: { size: e.size, loading: e.loading, icon: e.icon, "icon-pack": e.iconPack, maxlength: e.maxlength, autocomplete: "off" }, on: { focus: e.focused, blur: function (t) {
              e.$emit("blur", t);
            } }, nativeOn: { keyup: function (t) {
              if (!("button" in t) && e._k(t.keyCode, "esc", 27, t.key)) return null;t.preventDefault(), e.isActive = !1;
            }, keydown: [function (t) {
              if (!("button" in t) && e._k(t.keyCode, "tab", 9, t.key)) return null;e.tabPressed(t);
            }, function (t) {
              if (!("button" in t) && e._k(t.keyCode, "enter", 13, t.key)) return null;t.preventDefault(), e.enterPressed(t);
            }, function (t) {
              if (!("button" in t) && e._k(t.keyCode, "up", 38, t.key)) return null;t.preventDefault(), e.keyArrows("up");
            }, function (t) {
              if (!("button" in t) && e._k(t.keyCode, "down", 40, t.key)) return null;t.preventDefault(), e.keyArrows("down");
            }] }, model: { value: e.newValue, callback: function (t) {
              e.newValue = t;
            }, expression: "newValue" } }, "b-input", e.$attrs, !1)), e._v(" "), n("transition", { attrs: { name: "fade" } }, [n("div", { directives: [{ name: "show", rawName: "v-show", value: e.isActive && (e.visibleData.length > 0 || e.hasEmptySlot), expression: "isActive && (visibleData.length > 0 || hasEmptySlot)" }], ref: "dropdown", staticClass: "dropdown-menu", class: { "is-opened-top": !e.isListInViewportVertically } }, [n("div", { staticClass: "dropdown-content" }, [e._l(e.visibleData, function (t, i) {
          return n("a", { key: i, staticClass: "dropdown-item", class: { "is-hovered": t === e.hovered }, on: { click: function (n) {
                e.setSelected(t);
              } } }, [e.hasDefaultSlot ? e._t("default", null, { option: t, index: i }) : n("span", { domProps: { innerHTML: e._s(e.getValue(t, !0)) } })], 2);
        }), e._v(" "), e.data.length > e.maxResults ? n("div", { staticClass: "dropdown-item is-disabled" }, [e._v("\n                    …\n                ")]) : 0 === e.visibleData.length ? n("div", { staticClass: "dropdown-item is-disabled" }, [e._t("empty")], 2) : e._e()], 2)])])], 1);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("div", { staticClass: "control", class: e.rootClasses }, ["textarea" !== e.type ? n("input", e._b({ ref: "input", staticClass: "input", class: [e.statusType, e.size], attrs: { type: e.newType, autocomplete: e.newAutocomplete, maxlength: e.maxlength }, domProps: { value: e.newValue }, on: { input: e.onInput, blur: e.onBlur, focus: e.onFocus } }, "input", e.$attrs, !1)) : n("textarea", e._b({ ref: "textarea", staticClass: "textarea", class: [e.statusType, e.size], attrs: { maxlength: e.maxlength }, domProps: { value: e.newValue }, on: { input: e.onInput, blur: e.onBlur, focus: e.onFocus } }, "textarea", e.$attrs, !1)), e._v(" "), e.icon ? n("b-icon", { staticClass: "is-left", attrs: { icon: e.icon, pack: e.iconPack, size: e.iconSize } }) : e._e(), e._v(" "), e.loading || !e.passwordReveal && !e.statusType ? e._e() : n("b-icon", { staticClass: "is-right", class: { "is-clickable": e.passwordReveal }, attrs: { icon: e.passwordReveal ? e.passwordVisibleIcon : e.statusTypeIcon, size: e.iconSize, type: e.passwordReveal ? "is-primary" : e.statusType, both: "" }, nativeOn: { click: function (t) {
              e.togglePasswordVisibility(t);
            } } }), e._v(" "), e.maxlength && e.hasCounter ? n("small", { staticClass: "help counter", class: { "is-invisible": !e.isFocused } }, [e._v("\n        " + e._s(e.valueLength) + " / " + e._s(e.maxlength) + "\n    ")]) : e._e()], 1);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("div", { staticClass: "datepicker-row" }, [e._l(e.week, function (t, i) {
          return [e.selectableDate(t) && !e.disabled ? n("a", { key: i, staticClass: "datepicker-cell", class: [e.classObject(t), { "has-event": e.eventsDateMatch(t) }, e.indicators], attrs: { role: "button", href: "#", disabled: e.disabled }, on: { click: function (n) {
                n.preventDefault(), e.emitChosenDate(t);
              }, keydown: [function (n) {
                if (!("button" in n) && e._k(n.keyCode, "enter", 13, n.key)) return null;n.preventDefault(), e.emitChosenDate(t);
              }, function (n) {
                if (!("button" in n) && e._k(n.keyCode, "space", 32, n.key)) return null;n.preventDefault(), e.emitChosenDate(t);
              }] } }, [e._v("\n            " + e._s(t.getDate()) + "\n\n            "), e.eventsDateMatch(t) ? n("div", { staticClass: "events" }, e._l(e.eventsDateMatch(t), function (e, t) {
            return n("div", { key: t, staticClass: "event", class: e.type });
          })) : e._e()]) : n("div", { key: i, staticClass: "datepicker-cell", class: e.classObject(t) }, [e._v("\n            " + e._s(t.getDate()) + "\n        ")])];
        })], 2);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("div", { staticClass: "b-tabs", class: { "is-fullwidth": e.expanded } }, [n("nav", { staticClass: "tabs", class: [e.type, e.size, e.position, { "is-fullwidth": e.expanded }] }, [n("ul", e._l(e.tabItems, function (t, i) {
          return n("li", { key: i, class: { "is-active": e.newValue === i, "is-disabled": t.disabled } }, [n("a", { on: { click: function (t) {
                e.tabClick(i);
              } } }, [t.icon ? n("b-icon", { attrs: { icon: t.icon, pack: t.iconPack, size: e.size } }) : e._e(), e._v(" "), n("span", [e._v(e._s(t.label))])], 1)]);
        }))]), e._v(" "), n("section", { staticClass: "tab-content" }, [e._t("default")], 2)]);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("transition", { attrs: { name: e.animation } }, [e.isActive ? n("div", { staticClass: "modal is-active" }, [n("div", { staticClass: "modal-background", on: { click: function (t) {
              e.cancel("outside");
            } } }), e._v(" "), n("div", { staticClass: "animation-content", class: { "modal-content": !e.hasModalCard }, style: { maxWidth: e.newWidth } }, [e.component ? n(e.component, e._g(e._b({ tag: "component", on: { close: e.close } }, "component", e.props, !1), e.events)) : e.content ? n("div", { domProps: { innerHTML: e._s(e.content) } }) : e._t("default")], 2), e._v(" "), e.showX ? n("button", { staticClass: "modal-close is-large", on: { click: function (t) {
              e.cancel("x");
            } } }) : e._e()]) : e._e()]);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("div", { staticClass: "datepicker control", class: [e.size, { "is-expanded": e.expanded }] }, [!e.isMobile || e.inline ? n("b-dropdown", { ref: "dropdown", attrs: { position: e.position, disabled: e.disabled, inline: e.inline } }, [e.inline ? e._e() : n("b-input", e._b({ ref: "input", attrs: { slot: "trigger", autocomplete: "off", value: e.formatValue(e.dateSelected), placeholder: e.placeholder, size: e.size, icon: e.icon, "icon-pack": e.iconPack, loading: e.loading, disabled: e.disabled, readonly: e.readonly }, on: { focus: function (t) {
              e.$emit("focus", t);
            }, blur: function (t) {
              e.$emit("blur", t) && e.checkHtml5Validity();
            } }, nativeOn: { change: function (t) {
              e.onChange(t.target.value);
            } }, slot: "trigger" }, "b-input", e.$attrs, !1)), e._v(" "), n("b-dropdown-item", { attrs: { disabled: e.disabled, custom: "" } }, [n("header", { staticClass: "datepicker-header" }, [n("div", { staticClass: "pagination field is-centered" }, [e.isFirstMonth || e.disabled ? e._e() : n("a", { staticClass: "pagination-previous", attrs: { role: "button", href: "#", disabled: e.disabled }, on: { click: function (t) {
              t.preventDefault(), e.decrementMonth(t);
            }, keydown: [function (t) {
              if (!("button" in t) && e._k(t.keyCode, "enter", 13, t.key)) return null;t.preventDefault(), e.decrementMonth(t);
            }, function (t) {
              if (!("button" in t) && e._k(t.keyCode, "space", 32, t.key)) return null;t.preventDefault(), e.decrementMonth(t);
            }] } }, [n("b-icon", { attrs: { icon: "chevron-left", pack: e.iconPack, both: "", type: "is-primary is-clickable" } })], 1), e._v(" "), n("a", { directives: [{ name: "show", rawName: "v-show", value: !e.isLastMonth && !e.disabled, expression: "!isLastMonth && !disabled" }], staticClass: "pagination-next", attrs: { role: "button", href: "#", disabled: e.disabled }, on: { click: function (t) {
              t.preventDefault(), e.incrementMonth(t);
            }, keydown: [function (t) {
              if (!("button" in t) && e._k(t.keyCode, "enter", 13, t.key)) return null;t.preventDefault(), e.incrementMonth(t);
            }, function (t) {
              if (!("button" in t) && e._k(t.keyCode, "space", 32, t.key)) return null;t.preventDefault(), e.incrementMonth(t);
            }] } }, [n("b-icon", { attrs: { icon: "chevron-right", pack: e.iconPack, both: "", type: "is-primary is-clickable" } })], 1), e._v(" "), n("div", { staticClass: "pagination-list" }, [n("b-field", [n("b-select", { attrs: { disabled: e.disabled }, model: { value: e.focusedDateData.month, callback: function (t) {
              e.$set(e.focusedDateData, "month", t);
            }, expression: "focusedDateData.month" } }, e._l(e.monthNames, function (t, i) {
          return n("option", { key: t, domProps: { value: i } }, [e._v("\n                                    " + e._s(t) + "\n                                ")]);
        })), e._v(" "), n("b-select", { attrs: { disabled: e.disabled }, model: { value: e.focusedDateData.year, callback: function (t) {
              e.$set(e.focusedDateData, "year", t);
            }, expression: "focusedDateData.year" } }, e._l(e.listOfYears, function (t) {
          return n("option", { key: t, domProps: { value: t } }, [e._v("\n                                    " + e._s(t) + "\n                                ")]);
        }))], 1)], 1)])]), e._v(" "), n("b-datepicker-table", { attrs: { "day-names": e.dayNames, "month-names": e.monthNames, "first-day-of-week": e.firstDayOfWeek, "min-date": e.minDate, "max-date": e.maxDate, focused: e.focusedDateData, disabled: e.disabled, "unselectable-dates": e.unselectableDates, events: e.events, indicators: e.indicators }, on: { close: function (t) {
              e.$refs.dropdown.isActive = !1;
            } }, model: { value: e.dateSelected, callback: function (t) {
              e.dateSelected = t;
            }, expression: "dateSelected" } }), e._v(" "), void 0 !== e.$slots.default && e.$slots.default.length ? n("footer", { staticClass: "datepicker-footer" }, [e._t("default")], 2) : e._e()], 1)], 1) : n("b-input", e._b({ ref: "input", attrs: { type: "date", autocomplete: "off", value: e.formatYYYYMMDD(e.value), placeholder: e.placeholder, size: e.size, icon: e.icon, "icon-pack": e.iconPack, loading: e.loading, max: e.formatYYYYMMDD(e.maxDate), min: e.formatYYYYMMDD(e.minDate), disabled: e.disabled, readonly: !1 }, on: { focus: function (t) {
              e.$emit("focus", t);
            }, blur: function (t) {
              e.$emit("blur", t) && e.checkHtml5Validity();
            } }, nativeOn: { change: function (t) {
              e.onChangeNativePicker(t);
            } } }, "b-input", e.$attrs, !1))], 1);
      }, staticRenderFns: [] };
  }, function (e, t) {
    e.exports = { render: function () {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return e.attached && e.closable ? n("div", { staticClass: "tags has-addons" }, [n("span", { staticClass: "tag", class: [e.type, e.size, { "is-rounded": e.rounded }] }, [e._t("default")], 2), e._v(" "), n("a", { staticClass: "tag is-delete", class: [e.size, { "is-rounded": e.rounded }], attrs: { role: "button", tabindex: !!e.tabstop && 0, disabled: e.disabled }, on: { click: function (t) {
              e.close();
            }, keyup: function (t) {
              if (!("button" in t) && e._k(t.keyCode, "delete", [8, 46], t.key)) return null;t.preventDefault(), e.close();
            } } })]) : n("span", { staticClass: "tag", class: [e.type, e.size, { "is-rounded": e.rounded }] }, [e._t("default"), e._v(" "), e.closable ? n("a", { staticClass: "delete is-small", attrs: { role: "button", disabled: e.disabled, tabindex: !!e.tabstop && 0 }, on: { click: function (t) {
              e.close();
            }, keyup: function (t) {
              if (!("button" in t) && e._k(t.keyCode, "delete", [8, 46], t.key)) return null;t.preventDefault(), e.close();
            } } }) : e._e()], 2);
      }, staticRenderFns: [] };
  }, function (e, t, n) {
    e.exports = n(66);
  }]);
});
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).setImmediate, __webpack_require__(3).clearImmediate))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 */
;(function () {
  function n(n, t) {
    return n.set(t[0], t[1]), n;
  }function t(n, t) {
    return n.add(t), n;
  }function r(n, t, r) {
    switch (r.length) {case 0:
        return n.call(t);case 1:
        return n.call(t, r[0]);case 2:
        return n.call(t, r[0], r[1]);case 3:
        return n.call(t, r[0], r[1], r[2]);}return n.apply(t, r);
  }function e(n, t, r, e) {
    for (var u = -1, i = null == n ? 0 : n.length; ++u < i;) {
      var o = n[u];t(e, o, r(o), n);
    }return e;
  }function u(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length; ++r < e && false !== t(n[r], r, n););return n;
  }function i(n, t) {
    for (var r = null == n ? 0 : n.length; r-- && false !== t(n[r], r, n););
    return n;
  }function o(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length; ++r < e;) if (!t(n[r], r, n)) return false;return true;
  }function f(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length, u = 0, i = []; ++r < e;) {
      var o = n[r];t(o, r, n) && (i[u++] = o);
    }return i;
  }function c(n, t) {
    return !(null == n || !n.length) && -1 < d(n, t, 0);
  }function a(n, t, r) {
    for (var e = -1, u = null == n ? 0 : n.length; ++e < u;) if (r(t, n[e])) return true;return false;
  }function l(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length, u = Array(e); ++r < e;) u[r] = t(n[r], r, n);return u;
  }function s(n, t) {
    for (var r = -1, e = t.length, u = n.length; ++r < e;) n[u + r] = t[r];
    return n;
  }function h(n, t, r, e) {
    var u = -1,
        i = null == n ? 0 : n.length;for (e && i && (r = n[++u]); ++u < i;) r = t(r, n[u], u, n);return r;
  }function p(n, t, r, e) {
    var u = null == n ? 0 : n.length;for (e && u && (r = n[--u]); u--;) r = t(r, n[u], u, n);return r;
  }function _(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length; ++r < e;) if (t(n[r], r, n)) return true;return false;
  }function v(n, t, r) {
    var e;return r(n, function (n, r, u) {
      if (t(n, r, u)) return e = r, false;
    }), e;
  }function g(n, t, r, e) {
    var u = n.length;for (r += e ? 1 : -1; e ? r-- : ++r < u;) if (t(n[r], r, n)) return r;return -1;
  }function d(n, t, r) {
    if (t === t) n: {
      --r;for (var e = n.length; ++r < e;) if (n[r] === t) {
        n = r;break n;
      }n = -1;
    } else n = g(n, b, r);return n;
  }function y(n, t, r, e) {
    --r;for (var u = n.length; ++r < u;) if (e(n[r], t)) return r;return -1;
  }function b(n) {
    return n !== n;
  }function x(n, t) {
    var r = null == n ? 0 : n.length;return r ? k(n, t) / r : P;
  }function j(n) {
    return function (t) {
      return null == t ? F : t[n];
    };
  }function w(n) {
    return function (t) {
      return null == n ? F : n[t];
    };
  }function m(n, t, r, e, u) {
    return u(n, function (n, u, i) {
      r = e ? (e = false, n) : t(r, n, u, i);
    }), r;
  }function A(n, t) {
    var r = n.length;for (n.sort(t); r--;) n[r] = n[r].c;
    return n;
  }function k(n, t) {
    for (var r, e = -1, u = n.length; ++e < u;) {
      var i = t(n[e]);i !== F && (r = r === F ? i : r + i);
    }return r;
  }function E(n, t) {
    for (var r = -1, e = Array(n); ++r < n;) e[r] = t(r);return e;
  }function O(n, t) {
    return l(t, function (t) {
      return [t, n[t]];
    });
  }function S(n) {
    return function (t) {
      return n(t);
    };
  }function I(n, t) {
    return l(t, function (t) {
      return n[t];
    });
  }function R(n, t) {
    return n.has(t);
  }function z(n, t) {
    for (var r = -1, e = n.length; ++r < e && -1 < d(t, n[r], 0););return r;
  }function W(n, t) {
    for (var r = n.length; r-- && -1 < d(t, n[r], 0););return r;
  }function B(n) {
    return "\\" + Tn[n];
  }function L(n) {
    var t = -1,
        r = Array(n.size);return n.forEach(function (n, e) {
      r[++t] = [e, n];
    }), r;
  }function U(n, t) {
    return function (r) {
      return n(t(r));
    };
  }function C(n, t) {
    for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
      var o = n[r];o !== t && "__lodash_placeholder__" !== o || (n[r] = "__lodash_placeholder__", i[u++] = r);
    }return i;
  }function D(n) {
    var t = -1,
        r = Array(n.size);return n.forEach(function (n) {
      r[++t] = n;
    }), r;
  }function M(n) {
    var t = -1,
        r = Array(n.size);return n.forEach(function (n) {
      r[++t] = [n, n];
    }), r;
  }function T(n) {
    if (Bn.test(n)) {
      for (var t = zn.lastIndex = 0; zn.test(n);) ++t;n = t;
    } else n = tt(n);return n;
  }function $(n) {
    return Bn.test(n) ? n.match(zn) || [] : n.split("");
  }var F,
      N = 1 / 0,
      P = NaN,
      Z = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]],
      q = /\b__p\+='';/g,
      V = /\b(__p\+=)''\+/g,
      K = /(__e\(.*?\)|\b__t\))\+'';/g,
      G = /&(?:amp|lt|gt|quot|#39);/g,
      H = /[&<>"']/g,
      J = RegExp(G.source),
      Y = RegExp(H.source),
      Q = /<%-([\s\S]+?)%>/g,
      X = /<%([\s\S]+?)%>/g,
      nn = /<%=([\s\S]+?)%>/g,
      tn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      rn = /^\w*$/,
      en = /^\./,
      un = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      on = /[\\^$.*+?()[\]{}|]/g,
      fn = RegExp(on.source),
      cn = /^\s+|\s+$/g,
      an = /^\s+/,
      ln = /\s+$/,
      sn = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      hn = /\{\n\/\* \[wrapped with (.+)\] \*/,
      pn = /,? & /,
      _n = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      vn = /\\(\\)?/g,
      gn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      dn = /\w*$/,
      yn = /^[-+]0x[0-9a-f]+$/i,
      bn = /^0b[01]+$/i,
      xn = /^\[object .+?Constructor\]$/,
      jn = /^0o[0-7]+$/i,
      wn = /^(?:0|[1-9]\d*)$/,
      mn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      An = /($^)/,
      kn = /['\n\r\u2028\u2029\\]/g,
      En = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",
      On = "(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])" + En,
      Sn = "(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",
      In = RegExp("['\u2019]", "g"),
      Rn = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g"),
      zn = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + Sn + En, "g"),
      Wn = RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)|\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)|\\d+", On].join("|"), "g"),
      Bn = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),
      Ln = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      Un = "Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),
      Cn = {};
  Cn["[object Float32Array]"] = Cn["[object Float64Array]"] = Cn["[object Int8Array]"] = Cn["[object Int16Array]"] = Cn["[object Int32Array]"] = Cn["[object Uint8Array]"] = Cn["[object Uint8ClampedArray]"] = Cn["[object Uint16Array]"] = Cn["[object Uint32Array]"] = true, Cn["[object Arguments]"] = Cn["[object Array]"] = Cn["[object ArrayBuffer]"] = Cn["[object Boolean]"] = Cn["[object DataView]"] = Cn["[object Date]"] = Cn["[object Error]"] = Cn["[object Function]"] = Cn["[object Map]"] = Cn["[object Number]"] = Cn["[object Object]"] = Cn["[object RegExp]"] = Cn["[object Set]"] = Cn["[object String]"] = Cn["[object WeakMap]"] = false;
  var Dn = {};Dn["[object Arguments]"] = Dn["[object Array]"] = Dn["[object ArrayBuffer]"] = Dn["[object DataView]"] = Dn["[object Boolean]"] = Dn["[object Date]"] = Dn["[object Float32Array]"] = Dn["[object Float64Array]"] = Dn["[object Int8Array]"] = Dn["[object Int16Array]"] = Dn["[object Int32Array]"] = Dn["[object Map]"] = Dn["[object Number]"] = Dn["[object Object]"] = Dn["[object RegExp]"] = Dn["[object Set]"] = Dn["[object String]"] = Dn["[object Symbol]"] = Dn["[object Uint8Array]"] = Dn["[object Uint8ClampedArray]"] = Dn["[object Uint16Array]"] = Dn["[object Uint32Array]"] = true, Dn["[object Error]"] = Dn["[object Function]"] = Dn["[object WeakMap]"] = false;var Mn,
      Tn = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" },
      $n = parseFloat,
      Fn = parseInt,
      Nn = typeof global == "object" && global && global.Object === Object && global,
      Pn = typeof self == "object" && self && self.Object === Object && self,
      Zn = Nn || Pn || Function("return this")(),
      qn = typeof exports == "object" && exports && !exports.nodeType && exports,
      Vn = qn && typeof module == "object" && module && !module.nodeType && module,
      Kn = Vn && Vn.exports === qn,
      Gn = Kn && Nn.process;
  n: {
    try {
      Mn = Gn && Gn.binding && Gn.binding("util");break n;
    } catch (n) {}Mn = void 0;
  }var Hn = Mn && Mn.isArrayBuffer,
      Jn = Mn && Mn.isDate,
      Yn = Mn && Mn.isMap,
      Qn = Mn && Mn.isRegExp,
      Xn = Mn && Mn.isSet,
      nt = Mn && Mn.isTypedArray,
      tt = j("length"),
      rt = w({ "\xc0": "A", "\xc1": "A", "\xc2": "A", "\xc3": "A", "\xc4": "A", "\xc5": "A", "\xe0": "a", "\xe1": "a", "\xe2": "a", "\xe3": "a", "\xe4": "a", "\xe5": "a", "\xc7": "C", "\xe7": "c", "\xd0": "D", "\xf0": "d", "\xc8": "E", "\xc9": "E", "\xca": "E", "\xcb": "E", "\xe8": "e", "\xe9": "e", "\xea": "e", "\xeb": "e", "\xcc": "I", "\xcd": "I", "\xce": "I",
    "\xcf": "I", "\xec": "i", "\xed": "i", "\xee": "i", "\xef": "i", "\xd1": "N", "\xf1": "n", "\xd2": "O", "\xd3": "O", "\xd4": "O", "\xd5": "O", "\xd6": "O", "\xd8": "O", "\xf2": "o", "\xf3": "o", "\xf4": "o", "\xf5": "o", "\xf6": "o", "\xf8": "o", "\xd9": "U", "\xda": "U", "\xdb": "U", "\xdc": "U", "\xf9": "u", "\xfa": "u", "\xfb": "u", "\xfc": "u", "\xdd": "Y", "\xfd": "y", "\xff": "y", "\xc6": "Ae", "\xe6": "ae", "\xde": "Th", "\xfe": "th", "\xdf": "ss", "\u0100": "A", "\u0102": "A", "\u0104": "A", "\u0101": "a", "\u0103": "a", "\u0105": "a", "\u0106": "C", "\u0108": "C", "\u010a": "C",
    "\u010c": "C", "\u0107": "c", "\u0109": "c", "\u010b": "c", "\u010d": "c", "\u010e": "D", "\u0110": "D", "\u010f": "d", "\u0111": "d", "\u0112": "E", "\u0114": "E", "\u0116": "E", "\u0118": "E", "\u011a": "E", "\u0113": "e", "\u0115": "e", "\u0117": "e", "\u0119": "e", "\u011b": "e", "\u011c": "G", "\u011e": "G", "\u0120": "G", "\u0122": "G", "\u011d": "g", "\u011f": "g", "\u0121": "g", "\u0123": "g", "\u0124": "H", "\u0126": "H", "\u0125": "h", "\u0127": "h", "\u0128": "I", "\u012a": "I", "\u012c": "I", "\u012e": "I", "\u0130": "I", "\u0129": "i", "\u012b": "i", "\u012d": "i",
    "\u012f": "i", "\u0131": "i", "\u0134": "J", "\u0135": "j", "\u0136": "K", "\u0137": "k", "\u0138": "k", "\u0139": "L", "\u013b": "L", "\u013d": "L", "\u013f": "L", "\u0141": "L", "\u013a": "l", "\u013c": "l", "\u013e": "l", "\u0140": "l", "\u0142": "l", "\u0143": "N", "\u0145": "N", "\u0147": "N", "\u014a": "N", "\u0144": "n", "\u0146": "n", "\u0148": "n", "\u014b": "n", "\u014c": "O", "\u014e": "O", "\u0150": "O", "\u014d": "o", "\u014f": "o", "\u0151": "o", "\u0154": "R", "\u0156": "R", "\u0158": "R", "\u0155": "r", "\u0157": "r", "\u0159": "r", "\u015a": "S", "\u015c": "S",
    "\u015e": "S", "\u0160": "S", "\u015b": "s", "\u015d": "s", "\u015f": "s", "\u0161": "s", "\u0162": "T", "\u0164": "T", "\u0166": "T", "\u0163": "t", "\u0165": "t", "\u0167": "t", "\u0168": "U", "\u016a": "U", "\u016c": "U", "\u016e": "U", "\u0170": "U", "\u0172": "U", "\u0169": "u", "\u016b": "u", "\u016d": "u", "\u016f": "u", "\u0171": "u", "\u0173": "u", "\u0174": "W", "\u0175": "w", "\u0176": "Y", "\u0177": "y", "\u0178": "Y", "\u0179": "Z", "\u017b": "Z", "\u017d": "Z", "\u017a": "z", "\u017c": "z", "\u017e": "z", "\u0132": "IJ", "\u0133": "ij", "\u0152": "Oe", "\u0153": "oe",
    "\u0149": "'n", "\u017f": "s" }),
      et = w({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }),
      ut = w({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }),
      it = function w(En) {
    function On(n) {
      if (xu(n) && !af(n) && !(n instanceof Mn)) {
        if (n instanceof zn) return n;if (ci.call(n, "__wrapped__")) return Pe(n);
      }return new zn(n);
    }function Sn() {}function zn(n, t) {
      this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = F;
    }function Mn(n) {
      this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = [];
    }function Tn(n) {
      var t = -1,
          r = null == n ? 0 : n.length;for (this.clear(); ++t < r;) {
        var e = n[t];this.set(e[0], e[1]);
      }
    }function Nn(n) {
      var t = -1,
          r = null == n ? 0 : n.length;for (this.clear(); ++t < r;) {
        var e = n[t];this.set(e[0], e[1]);
      }
    }function Pn(n) {
      var t = -1,
          r = null == n ? 0 : n.length;for (this.clear(); ++t < r;) {
        var e = n[t];this.set(e[0], e[1]);
      }
    }function qn(n) {
      var t = -1,
          r = null == n ? 0 : n.length;for (this.__data__ = new Pn(); ++t < r;) this.add(n[t]);
    }function Vn(n) {
      this.size = (this.__data__ = new Nn(n)).size;
    }function Gn(n, t) {
      var r,
          e = af(n),
          u = !e && cf(n),
          i = !e && !u && sf(n),
          o = !e && !u && !i && gf(n),
          u = (e = e || u || i || o) ? E(n.length, ri) : [],
          f = u.length;for (r in n) !t && !ci.call(n, r) || e && ("length" == r || i && ("offset" == r || "parent" == r) || o && ("buffer" == r || "byteLength" == r || "byteOffset" == r) || Re(r, f)) || u.push(r);return u;
    }function tt(n) {
      var t = n.length;return t ? n[cr(0, t - 1)] : F;
    }function ot(n, t) {
      return Te(Mr(n), gt(t, 0, n.length));
    }function ft(n) {
      return Te(Mr(n));
    }function ct(n, t, r) {
      (r === F || hu(n[t], r)) && (r !== F || t in n) || _t(n, t, r);
    }function at(n, t, r) {
      var e = n[t];ci.call(n, t) && hu(e, r) && (r !== F || t in n) || _t(n, t, r);
    }function lt(n, t) {
      for (var r = n.length; r--;) if (hu(n[r][0], t)) return r;return -1;
    }function st(n, t, r, e) {
      return oo(n, function (n, u, i) {
        t(e, n, r(n), i);
      }), e;
    }function ht(n, t) {
      return n && Tr(t, Lu(t), n);
    }function pt(n, t) {
      return n && Tr(t, Uu(t), n);
    }function _t(n, t, r) {
      "__proto__" == t && Ei ? Ei(n, t, { configurable: true, enumerable: true, value: r, writable: true }) : n[t] = r;
    }function vt(n, t) {
      for (var r = -1, e = t.length, u = Hu(e), i = null == n; ++r < e;) u[r] = i ? F : Wu(n, t[r]);return u;
    }function gt(n, t, r) {
      return n === n && (r !== F && (n = n <= r ? n : r), t !== F && (n = n >= t ? n : t)), n;
    }function dt(n, t, r, e, i, o) {
      var f,
          c = 1 & t,
          a = 2 & t,
          l = 4 & t;if (r && (f = i ? r(n, e, i, o) : r(n)), f !== F) return f;if (!bu(n)) return n;if (e = af(n)) {
        if (f = Ee(n), !c) return Mr(n, f);
      } else {
        var s = yo(n),
            h = "[object Function]" == s || "[object GeneratorFunction]" == s;if (sf(n)) return Wr(n, c);if ("[object Object]" == s || "[object Arguments]" == s || h && !i) {
          if (f = a || h ? {} : Oe(n), !c) return a ? Fr(n, pt(f, n)) : $r(n, ht(f, n));
        } else {
          if (!Dn[s]) return i ? n : {};f = Se(n, s, dt, c);
        }
      }if (o || (o = new Vn()), i = o.get(n)) return i;o.set(n, f);var a = l ? a ? ye : de : a ? Uu : Lu,
          p = e ? F : a(n);return u(p || n, function (e, u) {
        p && (u = e, e = n[u]), at(f, u, dt(e, t, r, u, n, o));
      }), f;
    }function yt(n) {
      var t = Lu(n);return function (r) {
        return bt(r, n, t);
      };
    }function bt(n, t, r) {
      var e = r.length;if (null == n) return !e;for (n = ni(n); e--;) {
        var u = r[e],
            i = t[u],
            o = n[u];if (o === F && !(u in n) || !i(o)) return false;
      }return true;
    }function xt(n, t, r) {
      if (typeof n != "function") throw new ei("Expected a function");return jo(function () {
        n.apply(F, r);
      }, t);
    }function jt(n, t, r, e) {
      var u = -1,
          i = c,
          o = true,
          f = n.length,
          s = [],
          h = t.length;
      if (!f) return s;r && (t = l(t, S(r))), e ? (i = a, o = false) : 200 <= t.length && (i = R, o = false, t = new qn(t));n: for (; ++u < f;) {
        var p = n[u],
            _ = null == r ? p : r(p),
            p = e || 0 !== p ? p : 0;if (o && _ === _) {
          for (var v = h; v--;) if (t[v] === _) continue n;s.push(p);
        } else i(t, _, e) || s.push(p);
      }return s;
    }function wt(n, t) {
      var r = true;return oo(n, function (n, e, u) {
        return r = !!t(n, e, u);
      }), r;
    }function mt(n, t, r) {
      for (var e = -1, u = n.length; ++e < u;) {
        var i = n[e],
            o = t(i);if (null != o && (f === F ? o === o && !Au(o) : r(o, f))) var f = o,
            c = i;
      }return c;
    }function At(n, t) {
      var r = [];return oo(n, function (n, e, u) {
        t(n, e, u) && r.push(n);
      }), r;
    }function kt(n, t, r, e, u) {
      var i = -1,
          o = n.length;for (r || (r = Ie), u || (u = []); ++i < o;) {
        var f = n[i];0 < t && r(f) ? 1 < t ? kt(f, t - 1, r, e, u) : s(u, f) : e || (u[u.length] = f);
      }return u;
    }function Et(n, t) {
      return n && co(n, t, Lu);
    }function Ot(n, t) {
      return n && ao(n, t, Lu);
    }function St(n, t) {
      return f(t, function (t) {
        return gu(n[t]);
      });
    }function It(n, t) {
      t = Rr(t, n);for (var r = 0, e = t.length; null != n && r < e;) n = n[$e(t[r++])];return r && r == e ? n : F;
    }function Rt(n, t, r) {
      return t = t(n), af(n) ? t : s(t, r(n));
    }function zt(n) {
      if (null == n) n = n === F ? "[object Undefined]" : "[object Null]";else if (ki && ki in ni(n)) {
        var t = ci.call(n, ki),
            r = n[ki];try {
          n[ki] = F;var e = true;
        } catch (n) {}var u = si.call(n);e && (t ? n[ki] = r : delete n[ki]), n = u;
      } else n = si.call(n);return n;
    }function Wt(n, t) {
      return n > t;
    }function Bt(n, t) {
      return null != n && ci.call(n, t);
    }function Lt(n, t) {
      return null != n && t in ni(n);
    }function Ut(n, t, r) {
      for (var e = r ? a : c, u = n[0].length, i = n.length, o = i, f = Hu(i), s = 1 / 0, h = []; o--;) {
        var p = n[o];o && t && (p = l(p, S(t))), s = Mi(p.length, s), f[o] = !r && (t || 120 <= u && 120 <= p.length) ? new qn(o && p) : F;
      }var p = n[0],
          _ = -1,
          v = f[0];n: for (; ++_ < u && h.length < s;) {
        var g = p[_],
            d = t ? t(g) : g,
            g = r || 0 !== g ? g : 0;
        if (v ? !R(v, d) : !e(h, d, r)) {
          for (o = i; --o;) {
            var y = f[o];if (y ? !R(y, d) : !e(n[o], d, r)) continue n;
          }v && v.push(d), h.push(g);
        }
      }return h;
    }function Ct(n, t, r) {
      var e = {};return Et(n, function (n, u, i) {
        t(e, r(n), u, i);
      }), e;
    }function Dt(n, t, e) {
      return t = Rr(t, n), n = 2 > t.length ? n : It(n, vr(t, 0, -1)), t = null == n ? n : n[$e(Ge(t))], null == t ? F : r(t, n, e);
    }function Mt(n) {
      return xu(n) && "[object Arguments]" == zt(n);
    }function Tt(n) {
      return xu(n) && "[object ArrayBuffer]" == zt(n);
    }function $t(n) {
      return xu(n) && "[object Date]" == zt(n);
    }function Ft(n, t, r, e, u) {
      if (n === t) t = true;else if (null == n || null == t || !xu(n) && !xu(t)) t = n !== n && t !== t;else n: {
        var i = af(n),
            o = af(t),
            f = i ? "[object Array]" : yo(n),
            c = o ? "[object Array]" : yo(t),
            f = "[object Arguments]" == f ? "[object Object]" : f,
            c = "[object Arguments]" == c ? "[object Object]" : c,
            a = "[object Object]" == f,
            o = "[object Object]" == c;if ((c = f == c) && sf(n)) {
          if (!sf(t)) {
            t = false;break n;
          }i = true, a = false;
        }if (c && !a) u || (u = new Vn()), t = i || gf(n) ? _e(n, t, r, e, Ft, u) : ve(n, t, f, r, e, Ft, u);else {
          if (!(1 & r) && (i = a && ci.call(n, "__wrapped__"), f = o && ci.call(t, "__wrapped__"), i || f)) {
            n = i ? n.value() : n, t = f ? t.value() : t, u || (u = new Vn()), t = Ft(n, t, r, e, u);break n;
          }if (c) {
            t: if (u || (u = new Vn()), i = 1 & r, f = de(n), o = f.length, c = de(t).length, o == c || i) {
              for (a = o; a--;) {
                var l = f[a];if (!(i ? l in t : ci.call(t, l))) {
                  t = false;break t;
                }
              }if ((c = u.get(n)) && u.get(t)) t = c == t;else {
                c = true, u.set(n, t), u.set(t, n);for (var s = i; ++a < o;) {
                  var l = f[a],
                      h = n[l],
                      p = t[l];if (e) var _ = i ? e(p, h, l, t, n, u) : e(h, p, l, n, t, u);if (_ === F ? h !== p && !Ft(h, p, r, e, u) : !_) {
                    c = false;break;
                  }s || (s = "constructor" == l);
                }c && !s && (r = n.constructor, e = t.constructor, r != e && "constructor" in n && "constructor" in t && !(typeof r == "function" && r instanceof r && typeof e == "function" && e instanceof e) && (c = false)), u.delete(n), u.delete(t), t = c;
              }
            } else t = false;
          } else t = false;
        }
      }return t;
    }function Nt(n) {
      return xu(n) && "[object Map]" == yo(n);
    }function Pt(n, t, r, e) {
      var u = r.length,
          i = u,
          o = !e;if (null == n) return !i;for (n = ni(n); u--;) {
        var f = r[u];if (o && f[2] ? f[1] !== n[f[0]] : !(f[0] in n)) return false;
      }for (; ++u < i;) {
        var f = r[u],
            c = f[0],
            a = n[c],
            l = f[1];if (o && f[2]) {
          if (a === F && !(c in n)) return false;
        } else {
          if (f = new Vn(), e) var s = e(a, l, c, n, t, f);if (s === F ? !Ft(l, a, 3, e, f) : !s) return false;
        }
      }return true;
    }function Zt(n) {
      return !(!bu(n) || li && li in n) && (gu(n) ? _i : xn).test(Fe(n));
    }function qt(n) {
      return xu(n) && "[object RegExp]" == zt(n);
    }function Vt(n) {
      return xu(n) && "[object Set]" == yo(n);
    }function Kt(n) {
      return xu(n) && yu(n.length) && !!Cn[zt(n)];
    }function Gt(n) {
      return typeof n == "function" ? n : null == n ? Nu : typeof n == "object" ? af(n) ? Xt(n[0], n[1]) : Qt(n) : Vu(n);
    }function Ht(n) {
      if (!Le(n)) return Ci(n);var t,
          r = [];for (t in ni(n)) ci.call(n, t) && "constructor" != t && r.push(t);return r;
    }function Jt(n, t) {
      return n < t;
    }function Yt(n, t) {
      var r = -1,
          e = pu(n) ? Hu(n.length) : [];return oo(n, function (n, u, i) {
        e[++r] = t(n, u, i);
      }), e;
    }function Qt(n) {
      var t = me(n);return 1 == t.length && t[0][2] ? Ue(t[0][0], t[0][1]) : function (r) {
        return r === n || Pt(r, n, t);
      };
    }function Xt(n, t) {
      return We(n) && t === t && !bu(t) ? Ue($e(n), t) : function (r) {
        var e = Wu(r, n);return e === F && e === t ? Bu(r, n) : Ft(t, e, 3);
      };
    }function nr(n, t, r, e, u) {
      n !== t && co(t, function (i, o) {
        if (bu(i)) {
          u || (u = new Vn());var f = u,
              c = n[o],
              a = t[o],
              l = f.get(a);if (l) ct(n, o, l);else {
            var l = e ? e(c, a, o + "", n, t, f) : F,
                s = l === F;if (s) {
              var h = af(a),
                  p = !h && sf(a),
                  _ = !h && !p && gf(a),
                  l = a;h || p || _ ? af(c) ? l = c : _u(c) ? l = Mr(c) : p ? (s = false, l = Wr(a, true)) : _ ? (s = false, l = Lr(a, true)) : l = [] : wu(a) || cf(a) ? (l = c, cf(c) ? l = Ru(c) : (!bu(c) || r && gu(c)) && (l = Oe(a))) : s = false;
            }s && (f.set(a, l), nr(l, a, r, e, f), f.delete(a)), ct(n, o, l);
          }
        } else f = e ? e(n[o], i, o + "", n, t, u) : F, f === F && (f = i), ct(n, o, f);
      }, Uu);
    }function tr(n, t) {
      var r = n.length;if (r) return t += 0 > t ? r : 0, Re(t, r) ? n[t] : F;
    }function rr(n, t, r) {
      var e = -1;return t = l(t.length ? t : [Nu], S(je())), n = Yt(n, function (n) {
        return { a: l(t, function (t) {
            return t(n);
          }), b: ++e, c: n };
      }), A(n, function (n, t) {
        var e;n: {
          e = -1;for (var u = n.a, i = t.a, o = u.length, f = r.length; ++e < o;) {
            var c = Ur(u[e], i[e]);if (c) {
              e = e >= f ? c : c * ("desc" == r[e] ? -1 : 1);
              break n;
            }
          }e = n.b - t.b;
        }return e;
      });
    }function er(n, t) {
      return ur(n, t, function (t, r) {
        return Bu(n, r);
      });
    }function ur(n, t, r) {
      for (var e = -1, u = t.length, i = {}; ++e < u;) {
        var o = t[e],
            f = It(n, o);r(f, o) && pr(i, Rr(o, n), f);
      }return i;
    }function ir(n) {
      return function (t) {
        return It(t, n);
      };
    }function or(n, t, r, e) {
      var u = e ? y : d,
          i = -1,
          o = t.length,
          f = n;for (n === t && (t = Mr(t)), r && (f = l(n, S(r))); ++i < o;) for (var c = 0, a = t[i], a = r ? r(a) : a; -1 < (c = u(f, a, c, e));) f !== n && wi.call(f, c, 1), wi.call(n, c, 1);return n;
    }function fr(n, t) {
      for (var r = n ? t.length : 0, e = r - 1; r--;) {
        var u = t[r];
        if (r == e || u !== i) {
          var i = u;Re(u) ? wi.call(n, u, 1) : mr(n, u);
        }
      }
    }function cr(n, t) {
      return n + zi(Fi() * (t - n + 1));
    }function ar(n, t) {
      var r = "";if (!n || 1 > t || 9007199254740991 < t) return r;do t % 2 && (r += n), (t = zi(t / 2)) && (n += n); while (t);return r;
    }function lr(n, t) {
      return wo(Ce(n, t, Nu), n + "");
    }function sr(n) {
      return tt(Du(n));
    }function hr(n, t) {
      var r = Du(n);return Te(r, gt(t, 0, r.length));
    }function pr(n, t, r, e) {
      if (!bu(n)) return n;t = Rr(t, n);for (var u = -1, i = t.length, o = i - 1, f = n; null != f && ++u < i;) {
        var c = $e(t[u]),
            a = r;if (u != o) {
          var l = f[c],
              a = e ? e(l, c, f) : F;
          a === F && (a = bu(l) ? l : Re(t[u + 1]) ? [] : {});
        }at(f, c, a), f = f[c];
      }return n;
    }function _r(n) {
      return Te(Du(n));
    }function vr(n, t, r) {
      var e = -1,
          u = n.length;for (0 > t && (t = -t > u ? 0 : u + t), r = r > u ? u : r, 0 > r && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0, r = Hu(u); ++e < u;) r[e] = n[e + t];return r;
    }function gr(n, t) {
      var r;return oo(n, function (n, e, u) {
        return r = t(n, e, u), !r;
      }), !!r;
    }function dr(n, t, r) {
      var e = 0,
          u = null == n ? e : n.length;if (typeof t == "number" && t === t && 2147483647 >= u) {
        for (; e < u;) {
          var i = e + u >>> 1,
              o = n[i];null !== o && !Au(o) && (r ? o <= t : o < t) ? e = i + 1 : u = i;
        }return u;
      }return yr(n, t, Nu, r);
    }function yr(n, t, r, e) {
      t = r(t);for (var u = 0, i = null == n ? 0 : n.length, o = t !== t, f = null === t, c = Au(t), a = t === F; u < i;) {
        var l = zi((u + i) / 2),
            s = r(n[l]),
            h = s !== F,
            p = null === s,
            _ = s === s,
            v = Au(s);(o ? e || _ : a ? _ && (e || h) : f ? _ && h && (e || !p) : c ? _ && h && !p && (e || !v) : p || v ? 0 : e ? s <= t : s < t) ? u = l + 1 : i = l;
      }return Mi(i, 4294967294);
    }function br(n, t) {
      for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
        var o = n[r],
            f = t ? t(o) : o;if (!r || !hu(f, c)) {
          var c = f;i[u++] = 0 === o ? 0 : o;
        }
      }return i;
    }function xr(n) {
      return typeof n == "number" ? n : Au(n) ? P : +n;
    }function jr(n) {
      if (typeof n == "string") return n;
      if (af(n)) return l(n, jr) + "";if (Au(n)) return uo ? uo.call(n) : "";var t = n + "";return "0" == t && 1 / n == -N ? "-0" : t;
    }function wr(n, t, r) {
      var e = -1,
          u = c,
          i = n.length,
          o = true,
          f = [],
          l = f;if (r) o = false, u = a;else if (200 <= i) {
        if (u = t ? null : po(n)) return D(u);o = false, u = R, l = new qn();
      } else l = t ? [] : f;n: for (; ++e < i;) {
        var s = n[e],
            h = t ? t(s) : s,
            s = r || 0 !== s ? s : 0;if (o && h === h) {
          for (var p = l.length; p--;) if (l[p] === h) continue n;t && l.push(h), f.push(s);
        } else u(l, h, r) || (l !== f && l.push(h), f.push(s));
      }return f;
    }function mr(n, t) {
      return t = Rr(t, n), n = 2 > t.length ? n : It(n, vr(t, 0, -1)), null == n || delete n[$e(Ge(t))];
    }function Ar(n, t, r, e) {
      for (var u = n.length, i = e ? u : -1; (e ? i-- : ++i < u) && t(n[i], i, n););return r ? vr(n, e ? 0 : i, e ? i + 1 : u) : vr(n, e ? i + 1 : 0, e ? u : i);
    }function kr(n, t) {
      var r = n;return r instanceof Mn && (r = r.value()), h(t, function (n, t) {
        return t.func.apply(t.thisArg, s([n], t.args));
      }, r);
    }function Er(n, t, r) {
      var e = n.length;if (2 > e) return e ? wr(n[0]) : [];for (var u = -1, i = Hu(e); ++u < e;) for (var o = n[u], f = -1; ++f < e;) f != u && (i[u] = jt(i[u] || o, n[f], t, r));return wr(kt(i, 1), t, r);
    }function Or(n, t, r) {
      for (var e = -1, u = n.length, i = t.length, o = {}; ++e < u;) r(o, n[e], e < i ? t[e] : F);
      return o;
    }function Sr(n) {
      return _u(n) ? n : [];
    }function Ir(n) {
      return typeof n == "function" ? n : Nu;
    }function Rr(n, t) {
      return af(n) ? n : We(n, t) ? [n] : mo(zu(n));
    }function zr(n, t, r) {
      var e = n.length;return r = r === F ? e : r, !t && r >= e ? n : vr(n, t, r);
    }function Wr(n, t) {
      if (t) return n.slice();var r = n.length,
          r = yi ? yi(r) : new n.constructor(r);return n.copy(r), r;
    }function Br(n) {
      var t = new n.constructor(n.byteLength);return new di(t).set(new di(n)), t;
    }function Lr(n, t) {
      return new n.constructor(t ? Br(n.buffer) : n.buffer, n.byteOffset, n.length);
    }function Ur(n, t) {
      if (n !== t) {
        var r = n !== F,
            e = null === n,
            u = n === n,
            i = Au(n),
            o = t !== F,
            f = null === t,
            c = t === t,
            a = Au(t);if (!f && !a && !i && n > t || i && o && c && !f && !a || e && o && c || !r && c || !u) return 1;if (!e && !i && !a && n < t || a && r && u && !e && !i || f && r && u || !o && u || !c) return -1;
      }return 0;
    }function Cr(n, t, r, e) {
      var u = -1,
          i = n.length,
          o = r.length,
          f = -1,
          c = t.length,
          a = Di(i - o, 0),
          l = Hu(c + a);for (e = !e; ++f < c;) l[f] = t[f];for (; ++u < o;) (e || u < i) && (l[r[u]] = n[u]);for (; a--;) l[f++] = n[u++];return l;
    }function Dr(n, t, r, e) {
      var u = -1,
          i = n.length,
          o = -1,
          f = r.length,
          c = -1,
          a = t.length,
          l = Di(i - f, 0),
          s = Hu(l + a);
      for (e = !e; ++u < l;) s[u] = n[u];for (l = u; ++c < a;) s[l + c] = t[c];for (; ++o < f;) (e || u < i) && (s[l + r[o]] = n[u++]);return s;
    }function Mr(n, t) {
      var r = -1,
          e = n.length;for (t || (t = Hu(e)); ++r < e;) t[r] = n[r];return t;
    }function Tr(n, t, r, e) {
      var u = !r;r || (r = {});for (var i = -1, o = t.length; ++i < o;) {
        var f = t[i],
            c = e ? e(r[f], n[f], f, r, n) : F;c === F && (c = n[f]), u ? _t(r, f, c) : at(r, f, c);
      }return r;
    }function $r(n, t) {
      return Tr(n, vo(n), t);
    }function Fr(n, t) {
      return Tr(n, go(n), t);
    }function Nr(n, t) {
      return function (r, u) {
        var i = af(r) ? e : st,
            o = t ? t() : {};return i(r, n, je(u, 2), o);
      };
    }function Pr(n) {
      return lr(function (t, r) {
        var e = -1,
            u = r.length,
            i = 1 < u ? r[u - 1] : F,
            o = 2 < u ? r[2] : F,
            i = 3 < n.length && typeof i == "function" ? (u--, i) : F;for (o && ze(r[0], r[1], o) && (i = 3 > u ? F : i, u = 1), t = ni(t); ++e < u;) (o = r[e]) && n(t, o, e, i);return t;
      });
    }function Zr(n, t) {
      return function (r, e) {
        if (null == r) return r;if (!pu(r)) return n(r, e);for (var u = r.length, i = t ? u : -1, o = ni(r); (t ? i-- : ++i < u) && false !== e(o[i], i, o););return r;
      };
    }function qr(n) {
      return function (t, r, e) {
        var u = -1,
            i = ni(t);e = e(t);for (var o = e.length; o--;) {
          var f = e[n ? o : ++u];if (false === r(i[f], f, i)) break;
        }return t;
      };
    }function Vr(n, t, r) {
      function e() {
        return (this && this !== Zn && this instanceof e ? i : n).apply(u ? r : this, arguments);
      }var u = 1 & t,
          i = Hr(n);return e;
    }function Kr(n) {
      return function (t) {
        t = zu(t);var r = Bn.test(t) ? $(t) : F,
            e = r ? r[0] : t.charAt(0);return t = r ? zr(r, 1).join("") : t.slice(1), e[n]() + t;
      };
    }function Gr(n) {
      return function (t) {
        return h($u(Tu(t).replace(In, "")), n, "");
      };
    }function Hr(n) {
      return function () {
        var t = arguments;switch (t.length) {case 0:
            return new n();case 1:
            return new n(t[0]);case 2:
            return new n(t[0], t[1]);case 3:
            return new n(t[0], t[1], t[2]);case 4:
            return new n(t[0], t[1], t[2], t[3]);case 5:
            return new n(t[0], t[1], t[2], t[3], t[4]);case 6:
            return new n(t[0], t[1], t[2], t[3], t[4], t[5]);case 7:
            return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);}var r = io(n.prototype),
            t = n.apply(r, t);return bu(t) ? t : r;
      };
    }function Jr(n, t, e) {
      function u() {
        for (var o = arguments.length, f = Hu(o), c = o, a = xe(u); c--;) f[c] = arguments[c];return c = 3 > o && f[0] !== a && f[o - 1] !== a ? [] : C(f, a), o -= c.length, o < e ? fe(n, t, Xr, u.placeholder, F, f, c, F, F, e - o) : r(this && this !== Zn && this instanceof u ? i : n, this, f);
      }var i = Hr(n);return u;
    }function Yr(n) {
      return function (t, r, e) {
        var u = ni(t);if (!pu(t)) {
          var i = je(r, 3);t = Lu(t), r = function (n) {
            return i(u[n], n, u);
          };
        }return r = n(t, r, e), -1 < r ? u[i ? t[r] : r] : F;
      };
    }function Qr(n) {
      return ge(function (t) {
        var r = t.length,
            e = r,
            u = zn.prototype.thru;for (n && t.reverse(); e--;) {
          var i = t[e];if (typeof i != "function") throw new ei("Expected a function");if (u && !o && "wrapper" == be(i)) var o = new zn([], true);
        }for (e = o ? e : r; ++e < r;) var i = t[e], u = be(i), f = "wrapper" == u ? _o(i) : F, o = f && Be(f[0]) && 424 == f[1] && !f[4].length && 1 == f[9] ? o[be(f[0])].apply(o, f[3]) : 1 == i.length && Be(i) ? o[u]() : o.thru(i);
        return function () {
          var n = arguments,
              e = n[0];if (o && 1 == n.length && af(e)) return o.plant(e).value();for (var u = 0, n = r ? t[u].apply(this, n) : e; ++u < r;) n = t[u].call(this, n);return n;
        };
      });
    }function Xr(n, t, r, e, u, i, o, f, c, a) {
      function l() {
        for (var d = arguments.length, y = Hu(d), b = d; b--;) y[b] = arguments[b];if (_) {
          var x,
              j = xe(l),
              b = y.length;for (x = 0; b--;) y[b] === j && ++x;
        }if (e && (y = Cr(y, e, u, _)), i && (y = Dr(y, i, o, _)), d -= x, _ && d < a) return j = C(y, j), fe(n, t, Xr, l.placeholder, r, y, j, f, c, a - d);if (j = h ? r : this, b = p ? j[n] : n, d = y.length, f) {
          x = y.length;for (var w = Mi(f.length, x), m = Mr(y); w--;) {
            var A = f[w];y[w] = Re(A, x) ? m[A] : F;
          }
        } else v && 1 < d && y.reverse();return s && c < d && (y.length = c), this && this !== Zn && this instanceof l && (b = g || Hr(b)), b.apply(j, y);
      }var s = 128 & t,
          h = 1 & t,
          p = 2 & t,
          _ = 24 & t,
          v = 512 & t,
          g = p ? F : Hr(n);return l;
    }function ne(n, t) {
      return function (r, e) {
        return Ct(r, n, t(e));
      };
    }function te(n, t) {
      return function (r, e) {
        var u;if (r === F && e === F) return t;if (r !== F && (u = r), e !== F) {
          if (u === F) return e;typeof r == "string" || typeof e == "string" ? (r = jr(r), e = jr(e)) : (r = xr(r), e = xr(e)), u = n(r, e);
        }return u;
      };
    }function re(n) {
      return ge(function (t) {
        return t = l(t, S(je())), lr(function (e) {
          var u = this;return n(t, function (n) {
            return r(n, u, e);
          });
        });
      });
    }function ee(n, t) {
      t = t === F ? " " : jr(t);var r = t.length;return 2 > r ? r ? ar(t, n) : t : (r = ar(t, Ri(n / T(t))), Bn.test(t) ? zr($(r), 0, n).join("") : r.slice(0, n));
    }function ue(n, t, e, u) {
      function i() {
        for (var t = -1, c = arguments.length, a = -1, l = u.length, s = Hu(l + c), h = this && this !== Zn && this instanceof i ? f : n; ++a < l;) s[a] = u[a];for (; c--;) s[a++] = arguments[++t];return r(h, o ? e : this, s);
      }var o = 1 & t,
          f = Hr(n);return i;
    }function ie(n) {
      return function (t, r, e) {
        e && typeof e != "number" && ze(t, r, e) && (r = e = F), t = Eu(t), r === F ? (r = t, t = 0) : r = Eu(r), e = e === F ? t < r ? 1 : -1 : Eu(e);var u = -1;r = Di(Ri((r - t) / (e || 1)), 0);for (var i = Hu(r); r--;) i[n ? r : ++u] = t, t += e;return i;
      };
    }function oe(n) {
      return function (t, r) {
        return typeof t == "string" && typeof r == "string" || (t = Iu(t), r = Iu(r)), n(t, r);
      };
    }function fe(n, t, r, e, u, i, o, f, c, a) {
      var l = 8 & t,
          s = l ? o : F;o = l ? F : o;var h = l ? i : F;return i = l ? F : i, t = (t | (l ? 32 : 64)) & ~(l ? 64 : 32), 4 & t || (t &= -4), u = [n, t, u, h, s, i, o, f, c, a], r = r.apply(F, u), Be(n) && xo(r, u), r.placeholder = e, De(r, n, t);
    }function ce(n) {
      var t = Xu[n];return function (n, r) {
        if (n = Iu(n), r = null == r ? 0 : Mi(Ou(r), 292)) {
          var e = (zu(n) + "e").split("e"),
              e = t(e[0] + "e" + (+e[1] + r)),
              e = (zu(e) + "e").split("e");return +(e[0] + "e" + (+e[1] - r));
        }return t(n);
      };
    }function ae(n) {
      return function (t) {
        var r = yo(t);return "[object Map]" == r ? L(t) : "[object Set]" == r ? M(t) : O(t, n(t));
      };
    }function le(n, t, r, e, u, i, o, f) {
      var c = 2 & t;if (!c && typeof n != "function") throw new ei("Expected a function");var a = e ? e.length : 0;if (a || (t &= -97, e = u = F), o = o === F ? o : Di(Ou(o), 0), f = f === F ? f : Ou(f), a -= u ? u.length : 0, 64 & t) {
        var l = e,
            s = u;e = u = F;
      }var h = c ? F : _o(n);return i = [n, t, r, e, u, l, s, i, o, f], h && (r = i[1], n = h[1], t = r | n, e = 128 == n && 8 == r || 128 == n && 256 == r && i[7].length <= h[8] || 384 == n && h[7].length <= h[8] && 8 == r, 131 > t || e) && (1 & n && (i[2] = h[2], t |= 1 & r ? 0 : 4), (r = h[3]) && (e = i[3], i[3] = e ? Cr(e, r, h[4]) : r, i[4] = e ? C(i[3], "__lodash_placeholder__") : h[4]), (r = h[5]) && (e = i[5], i[5] = e ? Dr(e, r, h[6]) : r, i[6] = e ? C(i[5], "__lodash_placeholder__") : h[6]), (r = h[7]) && (i[7] = r), 128 & n && (i[8] = null == i[8] ? h[8] : Mi(i[8], h[8])), null == i[9] && (i[9] = h[9]), i[0] = h[0], i[1] = t), n = i[0], t = i[1], r = i[2], e = i[3], u = i[4], f = i[9] = i[9] === F ? c ? 0 : n.length : Di(i[9] - a, 0), !f && 24 & t && (t &= -25), De((h ? lo : xo)(t && 1 != t ? 8 == t || 16 == t ? Jr(n, t, f) : 32 != t && 33 != t || u.length ? Xr.apply(F, i) : ue(n, t, r, e) : Vr(n, t, r), i), n, t);
    }function se(n, t, r, e) {
      return n === F || hu(n, ii[r]) && !ci.call(e, r) ? t : n;
    }function he(n, t, r, e, u, i) {
      return bu(n) && bu(t) && (i.set(t, n), nr(n, t, F, he, i), i.delete(t)), n;
    }function pe(n) {
      return wu(n) ? F : n;
    }function _e(n, t, r, e, u, i) {
      var o = 1 & r,
          f = n.length,
          c = t.length;if (f != c && !(o && c > f)) return false;if ((c = i.get(n)) && i.get(t)) return c == t;var c = -1,
          a = true,
          l = 2 & r ? new qn() : F;
      for (i.set(n, t), i.set(t, n); ++c < f;) {
        var s = n[c],
            h = t[c];if (e) var p = o ? e(h, s, c, t, n, i) : e(s, h, c, n, t, i);if (p !== F) {
          if (p) continue;a = false;break;
        }if (l) {
          if (!_(t, function (n, t) {
            if (!R(l, t) && (s === n || u(s, n, r, e, i))) return l.push(t);
          })) {
            a = false;break;
          }
        } else if (s !== h && !u(s, h, r, e, i)) {
          a = false;break;
        }
      }return i.delete(n), i.delete(t), a;
    }function ve(n, t, r, e, u, i, o) {
      switch (r) {case "[object DataView]":
          if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset) break;n = n.buffer, t = t.buffer;case "[object ArrayBuffer]":
          if (n.byteLength != t.byteLength || !i(new di(n), new di(t))) break;
          return true;case "[object Boolean]":case "[object Date]":case "[object Number]":
          return hu(+n, +t);case "[object Error]":
          return n.name == t.name && n.message == t.message;case "[object RegExp]":case "[object String]":
          return n == t + "";case "[object Map]":
          var f = L;case "[object Set]":
          if (f || (f = D), n.size != t.size && !(1 & e)) break;return (r = o.get(n)) ? r == t : (e |= 2, o.set(n, t), t = _e(f(n), f(t), e, u, i, o), o.delete(n), t);case "[object Symbol]":
          if (eo) return eo.call(n) == eo.call(t);}return false;
    }function ge(n) {
      return wo(Ce(n, F, Ve), n + "");
    }function de(n) {
      return Rt(n, Lu, vo);
    }function ye(n) {
      return Rt(n, Uu, go);
    }function be(n) {
      for (var t = n.name + "", r = Ji[t], e = ci.call(Ji, t) ? r.length : 0; e--;) {
        var u = r[e],
            i = u.func;if (null == i || i == n) return u.name;
      }return t;
    }function xe(n) {
      return (ci.call(On, "placeholder") ? On : n).placeholder;
    }function je() {
      var n = On.iteratee || Pu,
          n = n === Pu ? Gt : n;return arguments.length ? n(arguments[0], arguments[1]) : n;
    }function we(n, t) {
      var r = n.__data__,
          e = typeof t;return ("string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }function me(n) {
      for (var t = Lu(n), r = t.length; r--;) {
        var e = t[r],
            u = n[e];t[r] = [e, u, u === u && !bu(u)];
      }return t;
    }function Ae(n, t) {
      var r = null == n ? F : n[t];return Zt(r) ? r : F;
    }function ke(n, t, r) {
      t = Rr(t, n);for (var e = -1, u = t.length, i = false; ++e < u;) {
        var o = $e(t[e]);if (!(i = null != n && r(n, o))) break;n = n[o];
      }return i || ++e != u ? i : (u = null == n ? 0 : n.length, !!u && yu(u) && Re(o, u) && (af(n) || cf(n)));
    }function Ee(n) {
      var t = n.length,
          r = n.constructor(t);return t && "string" == typeof n[0] && ci.call(n, "index") && (r.index = n.index, r.input = n.input), r;
    }function Oe(n) {
      return typeof n.constructor != "function" || Le(n) ? {} : io(bi(n));
    }function Se(r, e, u, i) {
      var o = r.constructor;switch (e) {case "[object ArrayBuffer]":
          return Br(r);case "[object Boolean]":case "[object Date]":
          return new o(+r);case "[object DataView]":
          return e = i ? Br(r.buffer) : r.buffer, new r.constructor(e, r.byteOffset, r.byteLength);case "[object Float32Array]":case "[object Float64Array]":case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":
        case "[object Uint16Array]":case "[object Uint32Array]":
          return Lr(r, i);case "[object Map]":
          return e = i ? u(L(r), 1) : L(r), h(e, n, new r.constructor());case "[object Number]":case "[object String]":
          return new o(r);case "[object RegExp]":
          return e = new r.constructor(r.source, dn.exec(r)), e.lastIndex = r.lastIndex, e;case "[object Set]":
          return e = i ? u(D(r), 1) : D(r), h(e, t, new r.constructor());case "[object Symbol]":
          return eo ? ni(eo.call(r)) : {};}
    }function Ie(n) {
      return af(n) || cf(n) || !!(mi && n && n[mi]);
    }function Re(n, t) {
      return t = null == t ? 9007199254740991 : t, !!t && (typeof n == "number" || wn.test(n)) && -1 < n && 0 == n % 1 && n < t;
    }function ze(n, t, r) {
      if (!bu(r)) return false;var e = typeof t;return !!("number" == e ? pu(r) && Re(t, r.length) : "string" == e && t in r) && hu(r[t], n);
    }function We(n, t) {
      if (af(n)) return false;var r = typeof n;return !("number" != r && "symbol" != r && "boolean" != r && null != n && !Au(n)) || rn.test(n) || !tn.test(n) || null != t && n in ni(t);
    }function Be(n) {
      var t = be(n),
          r = On[t];return typeof r == "function" && t in Mn.prototype && (n === r || (t = _o(r), !!t && n === t[0]));
    }function Le(n) {
      var t = n && n.constructor;
      return n === (typeof t == "function" && t.prototype || ii);
    }function Ue(n, t) {
      return function (r) {
        return null != r && r[n] === t && (t !== F || n in ni(r));
      };
    }function Ce(n, t, e) {
      return t = Di(t === F ? n.length - 1 : t, 0), function () {
        for (var u = arguments, i = -1, o = Di(u.length - t, 0), f = Hu(o); ++i < o;) f[i] = u[t + i];for (i = -1, o = Hu(t + 1); ++i < t;) o[i] = u[i];return o[t] = e(f), r(n, this, o);
      };
    }function De(n, t, r) {
      var e = t + "";t = wo;var u,
          i = Ne;return u = (u = e.match(hn)) ? u[1].split(pn) : [], r = i(u, r), (i = r.length) && (u = i - 1, r[u] = (1 < i ? "& " : "") + r[u], r = r.join(2 < i ? ", " : " "), e = e.replace(sn, "{\n/* [wrapped with " + r + "] */\n")), t(n, e);
    }function Me(n) {
      var t = 0,
          r = 0;return function () {
        var e = Ti(),
            u = 16 - (e - r);if (r = e, 0 < u) {
          if (800 <= ++t) return arguments[0];
        } else t = 0;return n.apply(F, arguments);
      };
    }function Te(n, t) {
      var r = -1,
          e = n.length,
          u = e - 1;for (t = t === F ? e : t; ++r < t;) {
        var e = cr(r, u),
            i = n[e];n[e] = n[r], n[r] = i;
      }return n.length = t, n;
    }function $e(n) {
      if (typeof n == "string" || Au(n)) return n;var t = n + "";return "0" == t && 1 / n == -N ? "-0" : t;
    }function Fe(n) {
      if (null != n) {
        try {
          return fi.call(n);
        } catch (n) {}return n + "";
      }return "";
    }function Ne(n, t) {
      return u(Z, function (r) {
        var e = "_." + r[0];t & r[1] && !c(n, e) && n.push(e);
      }), n.sort();
    }function Pe(n) {
      if (n instanceof Mn) return n.clone();var t = new zn(n.__wrapped__, n.__chain__);return t.__actions__ = Mr(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t;
    }function Ze(n, t, r) {
      var e = null == n ? 0 : n.length;return e ? (r = null == r ? 0 : Ou(r), 0 > r && (r = Di(e + r, 0)), g(n, je(t, 3), r)) : -1;
    }function qe(n, t, r) {
      var e = null == n ? 0 : n.length;if (!e) return -1;var u = e - 1;return r !== F && (u = Ou(r), u = 0 > r ? Di(e + u, 0) : Mi(u, e - 1)), g(n, je(t, 3), u, true);
    }function Ve(n) {
      return (null == n ? 0 : n.length) ? kt(n, 1) : [];
    }function Ke(n) {
      return n && n.length ? n[0] : F;
    }function Ge(n) {
      var t = null == n ? 0 : n.length;return t ? n[t - 1] : F;
    }function He(n, t) {
      return n && n.length && t && t.length ? or(n, t) : n;
    }function Je(n) {
      return null == n ? n : Ni.call(n);
    }function Ye(n) {
      if (!n || !n.length) return [];var t = 0;return n = f(n, function (n) {
        if (_u(n)) return t = Di(n.length, t), true;
      }), E(t, function (t) {
        return l(n, j(t));
      });
    }function Qe(n, t) {
      if (!n || !n.length) return [];var e = Ye(n);return null == t ? e : l(e, function (n) {
        return r(t, F, n);
      });
    }function Xe(n) {
      return n = On(n), n.__chain__ = true, n;
    }function nu(n, t) {
      return t(n);
    }function tu() {
      return this;
    }function ru(n, t) {
      return (af(n) ? u : oo)(n, je(t, 3));
    }function eu(n, t) {
      return (af(n) ? i : fo)(n, je(t, 3));
    }function uu(n, t) {
      return (af(n) ? l : Yt)(n, je(t, 3));
    }function iu(n, t, r) {
      return t = r ? F : t, t = n && null == t ? n.length : t, le(n, 128, F, F, F, F, t);
    }function ou(n, t) {
      var r;if (typeof t != "function") throw new ei("Expected a function");return n = Ou(n), function () {
        return 0 < --n && (r = t.apply(this, arguments)), 1 >= n && (t = F), r;
      };
    }function fu(n, t, r) {
      return t = r ? F : t, n = le(n, 8, F, F, F, F, F, t), n.placeholder = fu.placeholder, n;
    }function cu(n, t, r) {
      return t = r ? F : t, n = le(n, 16, F, F, F, F, F, t), n.placeholder = cu.placeholder, n;
    }function au(n, t, r) {
      function e(t) {
        var r = c,
            e = a;return c = a = F, _ = t, s = n.apply(e, r);
      }function u(n) {
        var r = n - p;return n -= _, p === F || r >= t || 0 > r || g && n >= l;
      }function i() {
        var n = Jo();if (u(n)) return o(n);var r,
            e = jo;r = n - _, n = t - (n - p), r = g ? Mi(n, l - r) : n, h = e(i, r);
      }function o(n) {
        return h = F, d && c ? e(n) : (c = a = F, s);
      }function f() {
        var n = Jo(),
            r = u(n);if (c = arguments, a = this, p = n, r) {
          if (h === F) return _ = n = p, h = jo(i, t), v ? e(n) : s;if (g) return h = jo(i, t), e(p);
        }return h === F && (h = jo(i, t)), s;
      }var c,
          a,
          l,
          s,
          h,
          p,
          _ = 0,
          v = false,
          g = false,
          d = true;if (typeof n != "function") throw new ei("Expected a function");return t = Iu(t) || 0, bu(r) && (v = !!r.leading, l = (g = "maxWait" in r) ? Di(Iu(r.maxWait) || 0, t) : l, d = "trailing" in r ? !!r.trailing : d), f.cancel = function () {
        h !== F && ho(h), _ = 0, c = p = a = h = F;
      }, f.flush = function () {
        return h === F ? s : o(Jo());
      }, f;
    }function lu(n, t) {
      function r() {
        var e = arguments,
            u = t ? t.apply(this, e) : e[0],
            i = r.cache;return i.has(u) ? i.get(u) : (e = n.apply(this, e), r.cache = i.set(u, e) || i, e);
      }if (typeof n != "function" || null != t && typeof t != "function") throw new ei("Expected a function");return r.cache = new (lu.Cache || Pn)(), r;
    }function su(n) {
      if (typeof n != "function") throw new ei("Expected a function");return function () {
        var t = arguments;switch (t.length) {case 0:
            return !n.call(this);case 1:
            return !n.call(this, t[0]);case 2:
            return !n.call(this, t[0], t[1]);case 3:
            return !n.call(this, t[0], t[1], t[2]);}return !n.apply(this, t);
      };
    }function hu(n, t) {
      return n === t || n !== n && t !== t;
    }function pu(n) {
      return null != n && yu(n.length) && !gu(n);
    }function _u(n) {
      return xu(n) && pu(n);
    }function vu(n) {
      if (!xu(n)) return false;var t = zt(n);return "[object Error]" == t || "[object DOMException]" == t || typeof n.message == "string" && typeof n.name == "string" && !wu(n);
    }function gu(n) {
      return !!bu(n) && (n = zt(n), "[object Function]" == n || "[object GeneratorFunction]" == n || "[object AsyncFunction]" == n || "[object Proxy]" == n);
    }function du(n) {
      return typeof n == "number" && n == Ou(n);
    }function yu(n) {
      return typeof n == "number" && -1 < n && 0 == n % 1 && 9007199254740991 >= n;
    }function bu(n) {
      var t = typeof n;return null != n && ("object" == t || "function" == t);
    }function xu(n) {
      return null != n && typeof n == "object";
    }function ju(n) {
      return typeof n == "number" || xu(n) && "[object Number]" == zt(n);
    }function wu(n) {
      return !(!xu(n) || "[object Object]" != zt(n)) && (n = bi(n), null === n || (n = ci.call(n, "constructor") && n.constructor, typeof n == "function" && n instanceof n && fi.call(n) == hi));
    }function mu(n) {
      return typeof n == "string" || !af(n) && xu(n) && "[object String]" == zt(n);
    }function Au(n) {
      return typeof n == "symbol" || xu(n) && "[object Symbol]" == zt(n);
    }function ku(n) {
      if (!n) return [];if (pu(n)) return mu(n) ? $(n) : Mr(n);
      if (Ai && n[Ai]) {
        n = n[Ai]();for (var t, r = []; !(t = n.next()).done;) r.push(t.value);return r;
      }return t = yo(n), ("[object Map]" == t ? L : "[object Set]" == t ? D : Du)(n);
    }function Eu(n) {
      return n ? (n = Iu(n), n === N || n === -N ? 1.7976931348623157e308 * (0 > n ? -1 : 1) : n === n ? n : 0) : 0 === n ? n : 0;
    }function Ou(n) {
      n = Eu(n);var t = n % 1;return n === n ? t ? n - t : n : 0;
    }function Su(n) {
      return n ? gt(Ou(n), 0, 4294967295) : 0;
    }function Iu(n) {
      if (typeof n == "number") return n;if (Au(n)) return P;if (bu(n) && (n = typeof n.valueOf == "function" ? n.valueOf() : n, n = bu(n) ? n + "" : n), typeof n != "string") return 0 === n ? n : +n;
      n = n.replace(cn, "");var t = bn.test(n);return t || jn.test(n) ? Fn(n.slice(2), t ? 2 : 8) : yn.test(n) ? P : +n;
    }function Ru(n) {
      return Tr(n, Uu(n));
    }function zu(n) {
      return null == n ? "" : jr(n);
    }function Wu(n, t, r) {
      return n = null == n ? F : It(n, t), n === F ? r : n;
    }function Bu(n, t) {
      return null != n && ke(n, t, Lt);
    }function Lu(n) {
      return pu(n) ? Gn(n) : Ht(n);
    }function Uu(n) {
      if (pu(n)) n = Gn(n, true);else if (bu(n)) {
        var t,
            r = Le(n),
            e = [];for (t in n) ("constructor" != t || !r && ci.call(n, t)) && e.push(t);n = e;
      } else {
        if (t = [], null != n) for (r in ni(n)) t.push(r);n = t;
      }return n;
    }function Cu(n, t) {
      if (null == n) return {};var r = l(ye(n), function (n) {
        return [n];
      });return t = je(t), ur(n, r, function (n, r) {
        return t(n, r[0]);
      });
    }function Du(n) {
      return null == n ? [] : I(n, Lu(n));
    }function Mu(n) {
      return Nf(zu(n).toLowerCase());
    }function Tu(n) {
      return (n = zu(n)) && n.replace(mn, rt).replace(Rn, "");
    }function $u(n, t, r) {
      return n = zu(n), t = r ? F : t, t === F ? Ln.test(n) ? n.match(Wn) || [] : n.match(_n) || [] : n.match(t) || [];
    }function Fu(n) {
      return function () {
        return n;
      };
    }function Nu(n) {
      return n;
    }function Pu(n) {
      return Gt(typeof n == "function" ? n : dt(n, 1));
    }function Zu(n, t, r) {
      var e = Lu(t),
          i = St(t, e);null != r || bu(t) && (i.length || !e.length) || (r = t, t = n, n = this, i = St(t, Lu(t)));var o = !(bu(r) && "chain" in r && !r.chain),
          f = gu(n);return u(i, function (r) {
        var e = t[r];n[r] = e, f && (n.prototype[r] = function () {
          var t = this.__chain__;if (o || t) {
            var r = n(this.__wrapped__);return (r.__actions__ = Mr(this.__actions__)).push({ func: e, args: arguments, thisArg: n }), r.__chain__ = t, r;
          }return e.apply(n, s([this.value()], arguments));
        });
      }), n;
    }function qu() {}function Vu(n) {
      return We(n) ? j($e(n)) : ir(n);
    }function Ku() {
      return [];
    }function Gu() {
      return false;
    }En = null == En ? Zn : it.defaults(Zn.Object(), En, it.pick(Zn, Un));var Hu = En.Array,
        Ju = En.Date,
        Yu = En.Error,
        Qu = En.Function,
        Xu = En.Math,
        ni = En.Object,
        ti = En.RegExp,
        ri = En.String,
        ei = En.TypeError,
        ui = Hu.prototype,
        ii = ni.prototype,
        oi = En["__core-js_shared__"],
        fi = Qu.prototype.toString,
        ci = ii.hasOwnProperty,
        ai = 0,
        li = function () {
      var n = /[^.]+$/.exec(oi && oi.keys && oi.keys.IE_PROTO || "");return n ? "Symbol(src)_1." + n : "";
    }(),
        si = ii.toString,
        hi = fi.call(ni),
        pi = Zn._,
        _i = ti("^" + fi.call(ci).replace(on, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        vi = Kn ? En.Buffer : F,
        gi = En.Symbol,
        di = En.Uint8Array,
        yi = vi ? vi.f : F,
        bi = U(ni.getPrototypeOf, ni),
        xi = ni.create,
        ji = ii.propertyIsEnumerable,
        wi = ui.splice,
        mi = gi ? gi.isConcatSpreadable : F,
        Ai = gi ? gi.iterator : F,
        ki = gi ? gi.toStringTag : F,
        Ei = function () {
      try {
        var n = Ae(ni, "defineProperty");return n({}, "", {}), n;
      } catch (n) {}
    }(),
        Oi = En.clearTimeout !== Zn.clearTimeout && En.clearTimeout,
        Si = Ju && Ju.now !== Zn.Date.now && Ju.now,
        Ii = En.setTimeout !== Zn.setTimeout && En.setTimeout,
        Ri = Xu.ceil,
        zi = Xu.floor,
        Wi = ni.getOwnPropertySymbols,
        Bi = vi ? vi.isBuffer : F,
        Li = En.isFinite,
        Ui = ui.join,
        Ci = U(ni.keys, ni),
        Di = Xu.max,
        Mi = Xu.min,
        Ti = Ju.now,
        $i = En.parseInt,
        Fi = Xu.random,
        Ni = ui.reverse,
        Pi = Ae(En, "DataView"),
        Zi = Ae(En, "Map"),
        qi = Ae(En, "Promise"),
        Vi = Ae(En, "Set"),
        Ki = Ae(En, "WeakMap"),
        Gi = Ae(ni, "create"),
        Hi = Ki && new Ki(),
        Ji = {},
        Yi = Fe(Pi),
        Qi = Fe(Zi),
        Xi = Fe(qi),
        no = Fe(Vi),
        to = Fe(Ki),
        ro = gi ? gi.prototype : F,
        eo = ro ? ro.valueOf : F,
        uo = ro ? ro.toString : F,
        io = function () {
      function n() {}return function (t) {
        return bu(t) ? xi ? xi(t) : (n.prototype = t, t = new n(), n.prototype = F, t) : {};
      };
    }();On.templateSettings = { escape: Q, evaluate: X, interpolate: nn, variable: "", imports: { _: On } }, On.prototype = Sn.prototype, On.prototype.constructor = On, zn.prototype = io(Sn.prototype), zn.prototype.constructor = zn, Mn.prototype = io(Sn.prototype), Mn.prototype.constructor = Mn, Tn.prototype.clear = function () {
      this.__data__ = Gi ? Gi(null) : {}, this.size = 0;
    }, Tn.prototype.delete = function (n) {
      return n = this.has(n) && delete this.__data__[n], this.size -= n ? 1 : 0, n;
    }, Tn.prototype.get = function (n) {
      var t = this.__data__;return Gi ? (n = t[n], "__lodash_hash_undefined__" === n ? F : n) : ci.call(t, n) ? t[n] : F;
    }, Tn.prototype.has = function (n) {
      var t = this.__data__;return Gi ? t[n] !== F : ci.call(t, n);
    }, Tn.prototype.set = function (n, t) {
      var r = this.__data__;return this.size += this.has(n) ? 0 : 1, r[n] = Gi && t === F ? "__lodash_hash_undefined__" : t, this;
    }, Nn.prototype.clear = function () {
      this.__data__ = [], this.size = 0;
    }, Nn.prototype.delete = function (n) {
      var t = this.__data__;return n = lt(t, n), !(0 > n) && (n == t.length - 1 ? t.pop() : wi.call(t, n, 1), --this.size, true);
    }, Nn.prototype.get = function (n) {
      var t = this.__data__;return n = lt(t, n), 0 > n ? F : t[n][1];
    }, Nn.prototype.has = function (n) {
      return -1 < lt(this.__data__, n);
    }, Nn.prototype.set = function (n, t) {
      var r = this.__data__,
          e = lt(r, n);return 0 > e ? (++this.size, r.push([n, t])) : r[e][1] = t, this;
    }, Pn.prototype.clear = function () {
      this.size = 0, this.__data__ = { hash: new Tn(), map: new (Zi || Nn)(), string: new Tn() };
    }, Pn.prototype.delete = function (n) {
      return n = we(this, n).delete(n), this.size -= n ? 1 : 0, n;
    }, Pn.prototype.get = function (n) {
      return we(this, n).get(n);
    }, Pn.prototype.has = function (n) {
      return we(this, n).has(n);
    }, Pn.prototype.set = function (n, t) {
      var r = we(this, n),
          e = r.size;return r.set(n, t), this.size += r.size == e ? 0 : 1, this;
    }, qn.prototype.add = qn.prototype.push = function (n) {
      return this.__data__.set(n, "__lodash_hash_undefined__"), this;
    }, qn.prototype.has = function (n) {
      return this.__data__.has(n);
    }, Vn.prototype.clear = function () {
      this.__data__ = new Nn(), this.size = 0;
    }, Vn.prototype.delete = function (n) {
      var t = this.__data__;return n = t.delete(n), this.size = t.size, n;
    }, Vn.prototype.get = function (n) {
      return this.__data__.get(n);
    }, Vn.prototype.has = function (n) {
      return this.__data__.has(n);
    }, Vn.prototype.set = function (n, t) {
      var r = this.__data__;if (r instanceof Nn) {
        var e = r.__data__;if (!Zi || 199 > e.length) return e.push([n, t]), this.size = ++r.size, this;r = this.__data__ = new Pn(e);
      }return r.set(n, t), this.size = r.size, this;
    };var oo = Zr(Et),
        fo = Zr(Ot, true),
        co = qr(),
        ao = qr(true),
        lo = Hi ? function (n, t) {
      return Hi.set(n, t), n;
    } : Nu,
        so = Ei ? function (n, t) {
      return Ei(n, "toString", { configurable: true, enumerable: false, value: Fu(t), writable: true });
    } : Nu,
        ho = Oi || function (n) {
      return Zn.clearTimeout(n);
    },
        po = Vi && 1 / D(new Vi([, -0]))[1] == N ? function (n) {
      return new Vi(n);
    } : qu,
        _o = Hi ? function (n) {
      return Hi.get(n);
    } : qu,
        vo = Wi ? function (n) {
      return null == n ? [] : (n = ni(n), f(Wi(n), function (t) {
        return ji.call(n, t);
      }));
    } : Ku,
        go = Wi ? function (n) {
      for (var t = []; n;) s(t, vo(n)), n = bi(n);return t;
    } : Ku,
        yo = zt;(Pi && "[object DataView]" != yo(new Pi(new ArrayBuffer(1))) || Zi && "[object Map]" != yo(new Zi()) || qi && "[object Promise]" != yo(qi.resolve()) || Vi && "[object Set]" != yo(new Vi()) || Ki && "[object WeakMap]" != yo(new Ki())) && (yo = function (n) {
      var t = zt(n);if (n = (n = "[object Object]" == t ? n.constructor : F) ? Fe(n) : "") switch (n) {case Yi:
          return "[object DataView]";case Qi:
          return "[object Map]";case Xi:
          return "[object Promise]";case no:
          return "[object Set]";case to:
          return "[object WeakMap]";}return t;
    });var bo = oi ? gu : Gu,
        xo = Me(lo),
        jo = Ii || function (n, t) {
      return Zn.setTimeout(n, t);
    },
        wo = Me(so),
        mo = function (n) {
      n = lu(n, function (n) {
        return 500 === t.size && t.clear(), n;
      });var t = n.cache;return n;
    }(function (n) {
      var t = [];return en.test(n) && t.push(""), n.replace(un, function (n, r, e, u) {
        t.push(e ? u.replace(vn, "$1") : r || n);
      }), t;
    }),
        Ao = lr(function (n, t) {
      return _u(n) ? jt(n, kt(t, 1, _u, true)) : [];
    }),
        ko = lr(function (n, t) {
      var r = Ge(t);return _u(r) && (r = F), _u(n) ? jt(n, kt(t, 1, _u, true), je(r, 2)) : [];
    }),
        Eo = lr(function (n, t) {
      var r = Ge(t);return _u(r) && (r = F), _u(n) ? jt(n, kt(t, 1, _u, true), F, r) : [];
    }),
        Oo = lr(function (n) {
      var t = l(n, Sr);return t.length && t[0] === n[0] ? Ut(t) : [];
    }),
        So = lr(function (n) {
      var t = Ge(n),
          r = l(n, Sr);return t === Ge(r) ? t = F : r.pop(), r.length && r[0] === n[0] ? Ut(r, je(t, 2)) : [];
    }),
        Io = lr(function (n) {
      var t = Ge(n),
          r = l(n, Sr);return (t = typeof t == "function" ? t : F) && r.pop(), r.length && r[0] === n[0] ? Ut(r, F, t) : [];
    }),
        Ro = lr(He),
        zo = ge(function (n, t) {
      var r = null == n ? 0 : n.length,
          e = vt(n, t);return fr(n, l(t, function (n) {
        return Re(n, r) ? +n : n;
      }).sort(Ur)), e;
    }),
        Wo = lr(function (n) {
      return wr(kt(n, 1, _u, true));
    }),
        Bo = lr(function (n) {
      var t = Ge(n);return _u(t) && (t = F), wr(kt(n, 1, _u, true), je(t, 2));
    }),
        Lo = lr(function (n) {
      var t = Ge(n),
          t = typeof t == "function" ? t : F;return wr(kt(n, 1, _u, true), F, t);
    }),
        Uo = lr(function (n, t) {
      return _u(n) ? jt(n, t) : [];
    }),
        Co = lr(function (n) {
      return Er(f(n, _u));
    }),
        Do = lr(function (n) {
      var t = Ge(n);return _u(t) && (t = F), Er(f(n, _u), je(t, 2));
    }),
        Mo = lr(function (n) {
      var t = Ge(n),
          t = typeof t == "function" ? t : F;return Er(f(n, _u), F, t);
    }),
        To = lr(Ye),
        $o = lr(function (n) {
      var t = n.length,
          t = 1 < t ? n[t - 1] : F,
          t = typeof t == "function" ? (n.pop(), t) : F;return Qe(n, t);
    }),
        Fo = ge(function (n) {
      function t(t) {
        return vt(t, n);
      }var r = n.length,
          e = r ? n[0] : 0,
          u = this.__wrapped__;return !(1 < r || this.__actions__.length) && u instanceof Mn && Re(e) ? (u = u.slice(e, +e + (r ? 1 : 0)), u.__actions__.push({ func: nu, args: [t], thisArg: F }), new zn(u, this.__chain__).thru(function (n) {
        return r && !n.length && n.push(F), n;
      })) : this.thru(t);
    }),
        No = Nr(function (n, t, r) {
      ci.call(n, r) ? ++n[r] : _t(n, r, 1);
    }),
        Po = Yr(Ze),
        Zo = Yr(qe),
        qo = Nr(function (n, t, r) {
      ci.call(n, r) ? n[r].push(t) : _t(n, r, [t]);
    }),
        Vo = lr(function (n, t, e) {
      var u = -1,
          i = typeof t == "function",
          o = pu(n) ? Hu(n.length) : [];return oo(n, function (n) {
        o[++u] = i ? r(t, n, e) : Dt(n, t, e);
      }), o;
    }),
        Ko = Nr(function (n, t, r) {
      _t(n, r, t);
    }),
        Go = Nr(function (n, t, r) {
      n[r ? 0 : 1].push(t);
    }, function () {
      return [[], []];
    }),
        Ho = lr(function (n, t) {
      if (null == n) return [];var r = t.length;return 1 < r && ze(n, t[0], t[1]) ? t = [] : 2 < r && ze(t[0], t[1], t[2]) && (t = [t[0]]), rr(n, kt(t, 1), []);
    }),
        Jo = Si || function () {
      return Zn.Date.now();
    },
        Yo = lr(function (n, t, r) {
      var e = 1;if (r.length) var u = C(r, xe(Yo)),
          e = 32 | e;return le(n, e, t, r, u);
    }),
        Qo = lr(function (n, t, r) {
      var e = 3;if (r.length) var u = C(r, xe(Qo)),
          e = 32 | e;return le(t, e, n, r, u);
    }),
        Xo = lr(function (n, t) {
      return xt(n, 1, t);
    }),
        nf = lr(function (n, t, r) {
      return xt(n, Iu(t) || 0, r);
    });lu.Cache = Pn;var tf = lr(function (n, t) {
      t = 1 == t.length && af(t[0]) ? l(t[0], S(je())) : l(kt(t, 1), S(je()));var e = t.length;return lr(function (u) {
        for (var i = -1, o = Mi(u.length, e); ++i < o;) u[i] = t[i].call(this, u[i]);
        return r(n, this, u);
      });
    }),
        rf = lr(function (n, t) {
      return le(n, 32, F, t, C(t, xe(rf)));
    }),
        ef = lr(function (n, t) {
      return le(n, 64, F, t, C(t, xe(ef)));
    }),
        uf = ge(function (n, t) {
      return le(n, 256, F, F, F, t);
    }),
        of = oe(Wt),
        ff = oe(function (n, t) {
      return n >= t;
    }),
        cf = Mt(function () {
      return arguments;
    }()) ? Mt : function (n) {
      return xu(n) && ci.call(n, "callee") && !ji.call(n, "callee");
    },
        af = Hu.isArray,
        lf = Hn ? S(Hn) : Tt,
        sf = Bi || Gu,
        hf = Jn ? S(Jn) : $t,
        pf = Yn ? S(Yn) : Nt,
        _f = Qn ? S(Qn) : qt,
        vf = Xn ? S(Xn) : Vt,
        gf = nt ? S(nt) : Kt,
        df = oe(Jt),
        yf = oe(function (n, t) {
      return n <= t;
    }),
        bf = Pr(function (n, t) {
      if (Le(t) || pu(t)) Tr(t, Lu(t), n);else for (var r in t) ci.call(t, r) && at(n, r, t[r]);
    }),
        xf = Pr(function (n, t) {
      Tr(t, Uu(t), n);
    }),
        jf = Pr(function (n, t, r, e) {
      Tr(t, Uu(t), n, e);
    }),
        wf = Pr(function (n, t, r, e) {
      Tr(t, Lu(t), n, e);
    }),
        mf = ge(vt),
        Af = lr(function (n) {
      return n.push(F, se), r(jf, F, n);
    }),
        kf = lr(function (n) {
      return n.push(F, he), r(Rf, F, n);
    }),
        Ef = ne(function (n, t, r) {
      n[t] = r;
    }, Fu(Nu)),
        Of = ne(function (n, t, r) {
      ci.call(n, t) ? n[t].push(r) : n[t] = [r];
    }, je),
        Sf = lr(Dt),
        If = Pr(function (n, t, r) {
      nr(n, t, r);
    }),
        Rf = Pr(function (n, t, r, e) {
      nr(n, t, r, e);
    }),
        zf = ge(function (n, t) {
      var r = {};if (null == n) return r;var e = false;t = l(t, function (t) {
        return t = Rr(t, n), e || (e = 1 < t.length), t;
      }), Tr(n, ye(n), r), e && (r = dt(r, 7, pe));for (var u = t.length; u--;) mr(r, t[u]);return r;
    }),
        Wf = ge(function (n, t) {
      return null == n ? {} : er(n, t);
    }),
        Bf = ae(Lu),
        Lf = ae(Uu),
        Uf = Gr(function (n, t, r) {
      return t = t.toLowerCase(), n + (r ? Mu(t) : t);
    }),
        Cf = Gr(function (n, t, r) {
      return n + (r ? "-" : "") + t.toLowerCase();
    }),
        Df = Gr(function (n, t, r) {
      return n + (r ? " " : "") + t.toLowerCase();
    }),
        Mf = Kr("toLowerCase"),
        Tf = Gr(function (n, t, r) {
      return n + (r ? "_" : "") + t.toLowerCase();
    }),
        $f = Gr(function (n, t, r) {
      return n + (r ? " " : "") + Nf(t);
    }),
        Ff = Gr(function (n, t, r) {
      return n + (r ? " " : "") + t.toUpperCase();
    }),
        Nf = Kr("toUpperCase"),
        Pf = lr(function (n, t) {
      try {
        return r(n, F, t);
      } catch (n) {
        return vu(n) ? n : new Yu(n);
      }
    }),
        Zf = ge(function (n, t) {
      return u(t, function (t) {
        t = $e(t), _t(n, t, Yo(n[t], n));
      }), n;
    }),
        qf = Qr(),
        Vf = Qr(true),
        Kf = lr(function (n, t) {
      return function (r) {
        return Dt(r, n, t);
      };
    }),
        Gf = lr(function (n, t) {
      return function (r) {
        return Dt(n, r, t);
      };
    }),
        Hf = re(l),
        Jf = re(o),
        Yf = re(_),
        Qf = ie(),
        Xf = ie(true),
        nc = te(function (n, t) {
      return n + t;
    }, 0),
        tc = ce("ceil"),
        rc = te(function (n, t) {
      return n / t;
    }, 1),
        ec = ce("floor"),
        uc = te(function (n, t) {
      return n * t;
    }, 1),
        ic = ce("round"),
        oc = te(function (n, t) {
      return n - t;
    }, 0);return On.after = function (n, t) {
      if (typeof t != "function") throw new ei("Expected a function");return n = Ou(n), function () {
        if (1 > --n) return t.apply(this, arguments);
      };
    }, On.ary = iu, On.assign = bf, On.assignIn = xf, On.assignInWith = jf, On.assignWith = wf, On.at = mf, On.before = ou, On.bind = Yo, On.bindAll = Zf, On.bindKey = Qo, On.castArray = function () {
      if (!arguments.length) return [];var n = arguments[0];return af(n) ? n : [n];
    }, On.chain = Xe, On.chunk = function (n, t, r) {
      if (t = (r ? ze(n, t, r) : t === F) ? 1 : Di(Ou(t), 0), r = null == n ? 0 : n.length, !r || 1 > t) return [];for (var e = 0, u = 0, i = Hu(Ri(r / t)); e < r;) i[u++] = vr(n, e, e += t);return i;
    }, On.compact = function (n) {
      for (var t = -1, r = null == n ? 0 : n.length, e = 0, u = []; ++t < r;) {
        var i = n[t];i && (u[e++] = i);
      }return u;
    }, On.concat = function () {
      var n = arguments.length;if (!n) return [];for (var t = Hu(n - 1), r = arguments[0]; n--;) t[n - 1] = arguments[n];return s(af(r) ? Mr(r) : [r], kt(t, 1));
    }, On.cond = function (n) {
      var t = null == n ? 0 : n.length,
          e = je();return n = t ? l(n, function (n) {
        if ("function" != typeof n[1]) throw new ei("Expected a function");return [e(n[0]), n[1]];
      }) : [], lr(function (e) {
        for (var u = -1; ++u < t;) {
          var i = n[u];if (r(i[0], this, e)) return r(i[1], this, e);
        }
      });
    }, On.conforms = function (n) {
      return yt(dt(n, 1));
    }, On.constant = Fu, On.countBy = No, On.create = function (n, t) {
      var r = io(n);return null == t ? r : ht(r, t);
    }, On.curry = fu, On.curryRight = cu, On.debounce = au, On.defaults = Af, On.defaultsDeep = kf, On.defer = Xo, On.delay = nf, On.difference = Ao, On.differenceBy = ko, On.differenceWith = Eo, On.drop = function (n, t, r) {
      var e = null == n ? 0 : n.length;
      return e ? (t = r || t === F ? 1 : Ou(t), vr(n, 0 > t ? 0 : t, e)) : [];
    }, On.dropRight = function (n, t, r) {
      var e = null == n ? 0 : n.length;return e ? (t = r || t === F ? 1 : Ou(t), t = e - t, vr(n, 0, 0 > t ? 0 : t)) : [];
    }, On.dropRightWhile = function (n, t) {
      return n && n.length ? Ar(n, je(t, 3), true, true) : [];
    }, On.dropWhile = function (n, t) {
      return n && n.length ? Ar(n, je(t, 3), true) : [];
    }, On.fill = function (n, t, r, e) {
      var u = null == n ? 0 : n.length;if (!u) return [];for (r && typeof r != "number" && ze(n, t, r) && (r = 0, e = u), u = n.length, r = Ou(r), 0 > r && (r = -r > u ? 0 : u + r), e = e === F || e > u ? u : Ou(e), 0 > e && (e += u), e = r > e ? 0 : Su(e); r < e;) n[r++] = t;
      return n;
    }, On.filter = function (n, t) {
      return (af(n) ? f : At)(n, je(t, 3));
    }, On.flatMap = function (n, t) {
      return kt(uu(n, t), 1);
    }, On.flatMapDeep = function (n, t) {
      return kt(uu(n, t), N);
    }, On.flatMapDepth = function (n, t, r) {
      return r = r === F ? 1 : Ou(r), kt(uu(n, t), r);
    }, On.flatten = Ve, On.flattenDeep = function (n) {
      return (null == n ? 0 : n.length) ? kt(n, N) : [];
    }, On.flattenDepth = function (n, t) {
      return null != n && n.length ? (t = t === F ? 1 : Ou(t), kt(n, t)) : [];
    }, On.flip = function (n) {
      return le(n, 512);
    }, On.flow = qf, On.flowRight = Vf, On.fromPairs = function (n) {
      for (var t = -1, r = null == n ? 0 : n.length, e = {}; ++t < r;) {
        var u = n[t];e[u[0]] = u[1];
      }return e;
    }, On.functions = function (n) {
      return null == n ? [] : St(n, Lu(n));
    }, On.functionsIn = function (n) {
      return null == n ? [] : St(n, Uu(n));
    }, On.groupBy = qo, On.initial = function (n) {
      return (null == n ? 0 : n.length) ? vr(n, 0, -1) : [];
    }, On.intersection = Oo, On.intersectionBy = So, On.intersectionWith = Io, On.invert = Ef, On.invertBy = Of, On.invokeMap = Vo, On.iteratee = Pu, On.keyBy = Ko, On.keys = Lu, On.keysIn = Uu, On.map = uu, On.mapKeys = function (n, t) {
      var r = {};return t = je(t, 3), Et(n, function (n, e, u) {
        _t(r, t(n, e, u), n);
      }), r;
    }, On.mapValues = function (n, t) {
      var r = {};return t = je(t, 3), Et(n, function (n, e, u) {
        _t(r, e, t(n, e, u));
      }), r;
    }, On.matches = function (n) {
      return Qt(dt(n, 1));
    }, On.matchesProperty = function (n, t) {
      return Xt(n, dt(t, 1));
    }, On.memoize = lu, On.merge = If, On.mergeWith = Rf, On.method = Kf, On.methodOf = Gf, On.mixin = Zu, On.negate = su, On.nthArg = function (n) {
      return n = Ou(n), lr(function (t) {
        return tr(t, n);
      });
    }, On.omit = zf, On.omitBy = function (n, t) {
      return Cu(n, su(je(t)));
    }, On.once = function (n) {
      return ou(2, n);
    }, On.orderBy = function (n, t, r, e) {
      return null == n ? [] : (af(t) || (t = null == t ? [] : [t]), r = e ? F : r, af(r) || (r = null == r ? [] : [r]), rr(n, t, r));
    }, On.over = Hf, On.overArgs = tf, On.overEvery = Jf, On.overSome = Yf, On.partial = rf, On.partialRight = ef, On.partition = Go, On.pick = Wf, On.pickBy = Cu, On.property = Vu, On.propertyOf = function (n) {
      return function (t) {
        return null == n ? F : It(n, t);
      };
    }, On.pull = Ro, On.pullAll = He, On.pullAllBy = function (n, t, r) {
      return n && n.length && t && t.length ? or(n, t, je(r, 2)) : n;
    }, On.pullAllWith = function (n, t, r) {
      return n && n.length && t && t.length ? or(n, t, F, r) : n;
    }, On.pullAt = zo, On.range = Qf, On.rangeRight = Xf, On.rearg = uf, On.reject = function (n, t) {
      return (af(n) ? f : At)(n, su(je(t, 3)));
    }, On.remove = function (n, t) {
      var r = [];if (!n || !n.length) return r;var e = -1,
          u = [],
          i = n.length;for (t = je(t, 3); ++e < i;) {
        var o = n[e];t(o, e, n) && (r.push(o), u.push(e));
      }return fr(n, u), r;
    }, On.rest = function (n, t) {
      if (typeof n != "function") throw new ei("Expected a function");return t = t === F ? t : Ou(t), lr(n, t);
    }, On.reverse = Je, On.sampleSize = function (n, t, r) {
      return t = (r ? ze(n, t, r) : t === F) ? 1 : Ou(t), (af(n) ? ot : hr)(n, t);
    }, On.set = function (n, t, r) {
      return null == n ? n : pr(n, t, r);
    }, On.setWith = function (n, t, r, e) {
      return e = typeof e == "function" ? e : F, null == n ? n : pr(n, t, r, e);
    }, On.shuffle = function (n) {
      return (af(n) ? ft : _r)(n);
    }, On.slice = function (n, t, r) {
      var e = null == n ? 0 : n.length;return e ? (r && typeof r != "number" && ze(n, t, r) ? (t = 0, r = e) : (t = null == t ? 0 : Ou(t), r = r === F ? e : Ou(r)), vr(n, t, r)) : [];
    }, On.sortBy = Ho, On.sortedUniq = function (n) {
      return n && n.length ? br(n) : [];
    }, On.sortedUniqBy = function (n, t) {
      return n && n.length ? br(n, je(t, 2)) : [];
    }, On.split = function (n, t, r) {
      return r && typeof r != "number" && ze(n, t, r) && (t = r = F), r = r === F ? 4294967295 : r >>> 0, r ? (n = zu(n)) && (typeof t == "string" || null != t && !_f(t)) && (t = jr(t), !t && Bn.test(n)) ? zr($(n), 0, r) : n.split(t, r) : [];
    }, On.spread = function (n, t) {
      if (typeof n != "function") throw new ei("Expected a function");return t = null == t ? 0 : Di(Ou(t), 0), lr(function (e) {
        var u = e[t];return e = zr(e, 0, t), u && s(e, u), r(n, this, e);
      });
    }, On.tail = function (n) {
      var t = null == n ? 0 : n.length;return t ? vr(n, 1, t) : [];
    }, On.take = function (n, t, r) {
      return n && n.length ? (t = r || t === F ? 1 : Ou(t), vr(n, 0, 0 > t ? 0 : t)) : [];
    }, On.takeRight = function (n, t, r) {
      var e = null == n ? 0 : n.length;return e ? (t = r || t === F ? 1 : Ou(t), t = e - t, vr(n, 0 > t ? 0 : t, e)) : [];
    }, On.takeRightWhile = function (n, t) {
      return n && n.length ? Ar(n, je(t, 3), false, true) : [];
    }, On.takeWhile = function (n, t) {
      return n && n.length ? Ar(n, je(t, 3)) : [];
    }, On.tap = function (n, t) {
      return t(n), n;
    }, On.throttle = function (n, t, r) {
      var e = true,
          u = true;if (typeof n != "function") throw new ei("Expected a function");return bu(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), au(n, t, { leading: e, maxWait: t, trailing: u });
    }, On.thru = nu, On.toArray = ku, On.toPairs = Bf, On.toPairsIn = Lf, On.toPath = function (n) {
      return af(n) ? l(n, $e) : Au(n) ? [n] : Mr(mo(zu(n)));
    }, On.toPlainObject = Ru, On.transform = function (n, t, r) {
      var e = af(n),
          i = e || sf(n) || gf(n);if (t = je(t, 4), null == r) {
        var o = n && n.constructor;r = i ? e ? new o() : [] : bu(n) && gu(o) ? io(bi(n)) : {};
      }return (i ? u : Et)(n, function (n, e, u) {
        return t(r, n, e, u);
      }), r;
    }, On.unary = function (n) {
      return iu(n, 1);
    }, On.union = Wo, On.unionBy = Bo, On.unionWith = Lo, On.uniq = function (n) {
      return n && n.length ? wr(n) : [];
    }, On.uniqBy = function (n, t) {
      return n && n.length ? wr(n, je(t, 2)) : [];
    }, On.uniqWith = function (n, t) {
      return t = typeof t == "function" ? t : F, n && n.length ? wr(n, F, t) : [];
    }, On.unset = function (n, t) {
      return null == n || mr(n, t);
    }, On.unzip = Ye, On.unzipWith = Qe, On.update = function (n, t, r) {
      return null == n ? n : pr(n, t, Ir(r)(It(n, t)), void 0);
    }, On.updateWith = function (n, t, r, e) {
      return e = typeof e == "function" ? e : F, null != n && (n = pr(n, t, Ir(r)(It(n, t)), e)), n;
    }, On.values = Du, On.valuesIn = function (n) {
      return null == n ? [] : I(n, Uu(n));
    }, On.without = Uo, On.words = $u, On.wrap = function (n, t) {
      return rf(Ir(t), n);
    }, On.xor = Co, On.xorBy = Do, On.xorWith = Mo, On.zip = To, On.zipObject = function (n, t) {
      return Or(n || [], t || [], at);
    }, On.zipObjectDeep = function (n, t) {
      return Or(n || [], t || [], pr);
    }, On.zipWith = $o, On.entries = Bf, On.entriesIn = Lf, On.extend = xf, On.extendWith = jf, Zu(On, On), On.add = nc, On.attempt = Pf, On.camelCase = Uf, On.capitalize = Mu, On.ceil = tc, On.clamp = function (n, t, r) {
      return r === F && (r = t, t = F), r !== F && (r = Iu(r), r = r === r ? r : 0), t !== F && (t = Iu(t), t = t === t ? t : 0), gt(Iu(n), t, r);
    }, On.clone = function (n) {
      return dt(n, 4);
    }, On.cloneDeep = function (n) {
      return dt(n, 5);
    }, On.cloneDeepWith = function (n, t) {
      return t = typeof t == "function" ? t : F, dt(n, 5, t);
    }, On.cloneWith = function (n, t) {
      return t = typeof t == "function" ? t : F, dt(n, 4, t);
    }, On.conformsTo = function (n, t) {
      return null == t || bt(n, t, Lu(t));
    }, On.deburr = Tu, On.defaultTo = function (n, t) {
      return null == n || n !== n ? t : n;
    }, On.divide = rc, On.endsWith = function (n, t, r) {
      n = zu(n), t = jr(t);var e = n.length,
          e = r = r === F ? e : gt(Ou(r), 0, e);return r -= t.length, 0 <= r && n.slice(r, e) == t;
    }, On.eq = hu, On.escape = function (n) {
      return (n = zu(n)) && Y.test(n) ? n.replace(H, et) : n;
    }, On.escapeRegExp = function (n) {
      return (n = zu(n)) && fn.test(n) ? n.replace(on, "\\$&") : n;
    }, On.every = function (n, t, r) {
      var e = af(n) ? o : wt;return r && ze(n, t, r) && (t = F), e(n, je(t, 3));
    }, On.find = Po, On.findIndex = Ze, On.findKey = function (n, t) {
      return v(n, je(t, 3), Et);
    }, On.findLast = Zo, On.findLastIndex = qe, On.findLastKey = function (n, t) {
      return v(n, je(t, 3), Ot);
    }, On.floor = ec, On.forEach = ru, On.forEachRight = eu, On.forIn = function (n, t) {
      return null == n ? n : co(n, je(t, 3), Uu);
    }, On.forInRight = function (n, t) {
      return null == n ? n : ao(n, je(t, 3), Uu);
    }, On.forOwn = function (n, t) {
      return n && Et(n, je(t, 3));
    }, On.forOwnRight = function (n, t) {
      return n && Ot(n, je(t, 3));
    }, On.get = Wu, On.gt = of, On.gte = ff, On.has = function (n, t) {
      return null != n && ke(n, t, Bt);
    }, On.hasIn = Bu, On.head = Ke, On.identity = Nu, On.includes = function (n, t, r, e) {
      return n = pu(n) ? n : Du(n), r = r && !e ? Ou(r) : 0, e = n.length, 0 > r && (r = Di(e + r, 0)), mu(n) ? r <= e && -1 < n.indexOf(t, r) : !!e && -1 < d(n, t, r);
    }, On.indexOf = function (n, t, r) {
      var e = null == n ? 0 : n.length;return e ? (r = null == r ? 0 : Ou(r), 0 > r && (r = Di(e + r, 0)), d(n, t, r)) : -1;
    }, On.inRange = function (n, t, r) {
      return t = Eu(t), r === F ? (r = t, t = 0) : r = Eu(r), n = Iu(n), n >= Mi(t, r) && n < Di(t, r);
    }, On.invoke = Sf, On.isArguments = cf, On.isArray = af, On.isArrayBuffer = lf, On.isArrayLike = pu, On.isArrayLikeObject = _u, On.isBoolean = function (n) {
      return true === n || false === n || xu(n) && "[object Boolean]" == zt(n);
    }, On.isBuffer = sf, On.isDate = hf, On.isElement = function (n) {
      return xu(n) && 1 === n.nodeType && !wu(n);
    }, On.isEmpty = function (n) {
      if (null == n) return true;if (pu(n) && (af(n) || typeof n == "string" || typeof n.splice == "function" || sf(n) || gf(n) || cf(n))) return !n.length;var t = yo(n);if ("[object Map]" == t || "[object Set]" == t) return !n.size;if (Le(n)) return !Ht(n).length;for (var r in n) if (ci.call(n, r)) return false;return true;
    }, On.isEqual = function (n, t) {
      return Ft(n, t);
    }, On.isEqualWith = function (n, t, r) {
      var e = (r = typeof r == "function" ? r : F) ? r(n, t) : F;return e === F ? Ft(n, t, F, r) : !!e;
    }, On.isError = vu, On.isFinite = function (n) {
      return typeof n == "number" && Li(n);
    }, On.isFunction = gu, On.isInteger = du, On.isLength = yu, On.isMap = pf, On.isMatch = function (n, t) {
      return n === t || Pt(n, t, me(t));
    }, On.isMatchWith = function (n, t, r) {
      return r = typeof r == "function" ? r : F, Pt(n, t, me(t), r);
    }, On.isNaN = function (n) {
      return ju(n) && n != +n;
    }, On.isNative = function (n) {
      if (bo(n)) throw new Yu("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
      return Zt(n);
    }, On.isNil = function (n) {
      return null == n;
    }, On.isNull = function (n) {
      return null === n;
    }, On.isNumber = ju, On.isObject = bu, On.isObjectLike = xu, On.isPlainObject = wu, On.isRegExp = _f, On.isSafeInteger = function (n) {
      return du(n) && -9007199254740991 <= n && 9007199254740991 >= n;
    }, On.isSet = vf, On.isString = mu, On.isSymbol = Au, On.isTypedArray = gf, On.isUndefined = function (n) {
      return n === F;
    }, On.isWeakMap = function (n) {
      return xu(n) && "[object WeakMap]" == yo(n);
    }, On.isWeakSet = function (n) {
      return xu(n) && "[object WeakSet]" == zt(n);
    }, On.join = function (n, t) {
      return null == n ? "" : Ui.call(n, t);
    }, On.kebabCase = Cf, On.last = Ge, On.lastIndexOf = function (n, t, r) {
      var e = null == n ? 0 : n.length;if (!e) return -1;var u = e;if (r !== F && (u = Ou(r), u = 0 > u ? Di(e + u, 0) : Mi(u, e - 1)), t === t) {
        for (r = u + 1; r-- && n[r] !== t;);n = r;
      } else n = g(n, b, u, true);return n;
    }, On.lowerCase = Df, On.lowerFirst = Mf, On.lt = df, On.lte = yf, On.max = function (n) {
      return n && n.length ? mt(n, Nu, Wt) : F;
    }, On.maxBy = function (n, t) {
      return n && n.length ? mt(n, je(t, 2), Wt) : F;
    }, On.mean = function (n) {
      return x(n, Nu);
    }, On.meanBy = function (n, t) {
      return x(n, je(t, 2));
    }, On.min = function (n) {
      return n && n.length ? mt(n, Nu, Jt) : F;
    }, On.minBy = function (n, t) {
      return n && n.length ? mt(n, je(t, 2), Jt) : F;
    }, On.stubArray = Ku, On.stubFalse = Gu, On.stubObject = function () {
      return {};
    }, On.stubString = function () {
      return "";
    }, On.stubTrue = function () {
      return true;
    }, On.multiply = uc, On.nth = function (n, t) {
      return n && n.length ? tr(n, Ou(t)) : F;
    }, On.noConflict = function () {
      return Zn._ === this && (Zn._ = pi), this;
    }, On.noop = qu, On.now = Jo, On.pad = function (n, t, r) {
      n = zu(n);var e = (t = Ou(t)) ? T(n) : 0;return !t || e >= t ? n : (t = (t - e) / 2, ee(zi(t), r) + n + ee(Ri(t), r));
    }, On.padEnd = function (n, t, r) {
      n = zu(n);var e = (t = Ou(t)) ? T(n) : 0;return t && e < t ? n + ee(t - e, r) : n;
    }, On.padStart = function (n, t, r) {
      n = zu(n);var e = (t = Ou(t)) ? T(n) : 0;return t && e < t ? ee(t - e, r) + n : n;
    }, On.parseInt = function (n, t, r) {
      return r || null == t ? t = 0 : t && (t = +t), $i(zu(n).replace(an, ""), t || 0);
    }, On.random = function (n, t, r) {
      if (r && typeof r != "boolean" && ze(n, t, r) && (t = r = F), r === F && (typeof t == "boolean" ? (r = t, t = F) : typeof n == "boolean" && (r = n, n = F)), n === F && t === F ? (n = 0, t = 1) : (n = Eu(n), t === F ? (t = n, n = 0) : t = Eu(t)), n > t) {
        var e = n;n = t, t = e;
      }return r || n % 1 || t % 1 ? (r = Fi(), Mi(n + r * (t - n + $n("1e-" + ((r + "").length - 1))), t)) : cr(n, t);
    }, On.reduce = function (n, t, r) {
      var e = af(n) ? h : m,
          u = 3 > arguments.length;return e(n, je(t, 4), r, u, oo);
    }, On.reduceRight = function (n, t, r) {
      var e = af(n) ? p : m,
          u = 3 > arguments.length;return e(n, je(t, 4), r, u, fo);
    }, On.repeat = function (n, t, r) {
      return t = (r ? ze(n, t, r) : t === F) ? 1 : Ou(t), ar(zu(n), t);
    }, On.replace = function () {
      var n = arguments,
          t = zu(n[0]);return 3 > n.length ? t : t.replace(n[1], n[2]);
    }, On.result = function (n, t, r) {
      t = Rr(t, n);var e = -1,
          u = t.length;for (u || (u = 1, n = F); ++e < u;) {
        var i = null == n ? F : n[$e(t[e])];i === F && (e = u, i = r), n = gu(i) ? i.call(n) : i;
      }return n;
    }, On.round = ic, On.runInContext = w, On.sample = function (n) {
      return (af(n) ? tt : sr)(n);
    }, On.size = function (n) {
      if (null == n) return 0;if (pu(n)) return mu(n) ? T(n) : n.length;var t = yo(n);return "[object Map]" == t || "[object Set]" == t ? n.size : Ht(n).length;
    }, On.snakeCase = Tf, On.some = function (n, t, r) {
      var e = af(n) ? _ : gr;return r && ze(n, t, r) && (t = F), e(n, je(t, 3));
    }, On.sortedIndex = function (n, t) {
      return dr(n, t);
    }, On.sortedIndexBy = function (n, t, r) {
      return yr(n, t, je(r, 2));
    }, On.sortedIndexOf = function (n, t) {
      var r = null == n ? 0 : n.length;if (r) {
        var e = dr(n, t);if (e < r && hu(n[e], t)) return e;
      }return -1;
    }, On.sortedLastIndex = function (n, t) {
      return dr(n, t, true);
    }, On.sortedLastIndexBy = function (n, t, r) {
      return yr(n, t, je(r, 2), true);
    }, On.sortedLastIndexOf = function (n, t) {
      if (null == n ? 0 : n.length) {
        var r = dr(n, t, true) - 1;if (hu(n[r], t)) return r;
      }return -1;
    }, On.startCase = $f, On.startsWith = function (n, t, r) {
      return n = zu(n), r = null == r ? 0 : gt(Ou(r), 0, n.length), t = jr(t), n.slice(r, r + t.length) == t;
    }, On.subtract = oc, On.sum = function (n) {
      return n && n.length ? k(n, Nu) : 0;
    }, On.sumBy = function (n, t) {
      return n && n.length ? k(n, je(t, 2)) : 0;
    }, On.template = function (n, t, r) {
      var e = On.templateSettings;r && ze(n, t, r) && (t = F), n = zu(n), t = jf({}, t, e, se), r = jf({}, t.imports, e.imports, se);var u,
          i,
          o = Lu(r),
          f = I(r, o),
          c = 0;r = t.interpolate || An;var a = "__p+='";r = ti((t.escape || An).source + "|" + r.source + "|" + (r === nn ? gn : An).source + "|" + (t.evaluate || An).source + "|$", "g");var l = "sourceURL" in t ? "//# sourceURL=" + t.sourceURL + "\n" : "";if (n.replace(r, function (t, r, e, o, f, l) {
        return e || (e = o), a += n.slice(c, l).replace(kn, B), r && (u = true, a += "'+__e(" + r + ")+'"), f && (i = true, a += "';" + f + ";\n__p+='"), e && (a += "'+((__t=(" + e + "))==null?'':__t)+'"), c = l + t.length, t;
      }), a += "';", (t = t.variable) || (a = "with(obj){" + a + "}"), a = (i ? a.replace(q, "") : a).replace(V, "$1").replace(K, "$1;"), a = "function(" + (t || "obj") + "){" + (t ? "" : "obj||(obj={});") + "var __t,__p=''" + (u ? ",__e=_.escape" : "") + (i ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + a + "return __p}", t = Pf(function () {
        return Qu(o, l + "return " + a).apply(F, f);
      }), t.source = a, vu(t)) throw t;return t;
    }, On.times = function (n, t) {
      if (n = Ou(n), 1 > n || 9007199254740991 < n) return [];
      var r = 4294967295,
          e = Mi(n, 4294967295);for (t = je(t), n -= 4294967295, e = E(e, t); ++r < n;) t(r);return e;
    }, On.toFinite = Eu, On.toInteger = Ou, On.toLength = Su, On.toLower = function (n) {
      return zu(n).toLowerCase();
    }, On.toNumber = Iu, On.toSafeInteger = function (n) {
      return n ? gt(Ou(n), -9007199254740991, 9007199254740991) : 0 === n ? n : 0;
    }, On.toString = zu, On.toUpper = function (n) {
      return zu(n).toUpperCase();
    }, On.trim = function (n, t, r) {
      return (n = zu(n)) && (r || t === F) ? n.replace(cn, "") : n && (t = jr(t)) ? (n = $(n), r = $(t), t = z(n, r), r = W(n, r) + 1, zr(n, t, r).join("")) : n;
    }, On.trimEnd = function (n, t, r) {
      return (n = zu(n)) && (r || t === F) ? n.replace(ln, "") : n && (t = jr(t)) ? (n = $(n), t = W(n, $(t)) + 1, zr(n, 0, t).join("")) : n;
    }, On.trimStart = function (n, t, r) {
      return (n = zu(n)) && (r || t === F) ? n.replace(an, "") : n && (t = jr(t)) ? (n = $(n), t = z(n, $(t)), zr(n, t).join("")) : n;
    }, On.truncate = function (n, t) {
      var r = 30,
          e = "...";if (bu(t)) var u = "separator" in t ? t.separator : u,
          r = "length" in t ? Ou(t.length) : r,
          e = "omission" in t ? jr(t.omission) : e;n = zu(n);var i = n.length;if (Bn.test(n)) var o = $(n),
          i = o.length;if (r >= i) return n;if (i = r - T(e), 1 > i) return e;
      if (r = o ? zr(o, 0, i).join("") : n.slice(0, i), u === F) return r + e;if (o && (i += r.length - i), _f(u)) {
        if (n.slice(i).search(u)) {
          var f = r;for (u.global || (u = ti(u.source, zu(dn.exec(u)) + "g")), u.lastIndex = 0; o = u.exec(f);) var c = o.index;r = r.slice(0, c === F ? i : c);
        }
      } else n.indexOf(jr(u), i) != i && (u = r.lastIndexOf(u), -1 < u && (r = r.slice(0, u)));return r + e;
    }, On.unescape = function (n) {
      return (n = zu(n)) && J.test(n) ? n.replace(G, ut) : n;
    }, On.uniqueId = function (n) {
      var t = ++ai;return zu(n) + t;
    }, On.upperCase = Ff, On.upperFirst = Nf, On.each = ru, On.eachRight = eu, On.first = Ke, Zu(On, function () {
      var n = {};return Et(On, function (t, r) {
        ci.call(On.prototype, r) || (n[r] = t);
      }), n;
    }(), { chain: false }), On.VERSION = "4.17.4", u("bind bindKey curry curryRight partial partialRight".split(" "), function (n) {
      On[n].placeholder = On;
    }), u(["drop", "take"], function (n, t) {
      Mn.prototype[n] = function (r) {
        r = r === F ? 1 : Di(Ou(r), 0);var e = this.__filtered__ && !t ? new Mn(this) : this.clone();return e.__filtered__ ? e.__takeCount__ = Mi(r, e.__takeCount__) : e.__views__.push({ size: Mi(r, 4294967295), type: n + (0 > e.__dir__ ? "Right" : "") }), e;
      }, Mn.prototype[n + "Right"] = function (t) {
        return this.reverse()[n](t).reverse();
      };
    }), u(["filter", "map", "takeWhile"], function (n, t) {
      var r = t + 1,
          e = 1 == r || 3 == r;Mn.prototype[n] = function (n) {
        var t = this.clone();return t.__iteratees__.push({ iteratee: je(n, 3), type: r }), t.__filtered__ = t.__filtered__ || e, t;
      };
    }), u(["head", "last"], function (n, t) {
      var r = "take" + (t ? "Right" : "");Mn.prototype[n] = function () {
        return this[r](1).value()[0];
      };
    }), u(["initial", "tail"], function (n, t) {
      var r = "drop" + (t ? "" : "Right");Mn.prototype[n] = function () {
        return this.__filtered__ ? new Mn(this) : this[r](1);
      };
    }), Mn.prototype.compact = function () {
      return this.filter(Nu);
    }, Mn.prototype.find = function (n) {
      return this.filter(n).head();
    }, Mn.prototype.findLast = function (n) {
      return this.reverse().find(n);
    }, Mn.prototype.invokeMap = lr(function (n, t) {
      return typeof n == "function" ? new Mn(this) : this.map(function (r) {
        return Dt(r, n, t);
      });
    }), Mn.prototype.reject = function (n) {
      return this.filter(su(je(n)));
    }, Mn.prototype.slice = function (n, t) {
      n = Ou(n);var r = this;return r.__filtered__ && (0 < n || 0 > t) ? new Mn(r) : (0 > n ? r = r.takeRight(-n) : n && (r = r.drop(n)), t !== F && (t = Ou(t), r = 0 > t ? r.dropRight(-t) : r.take(t - n)), r);
    }, Mn.prototype.takeRightWhile = function (n) {
      return this.reverse().takeWhile(n).reverse();
    }, Mn.prototype.toArray = function () {
      return this.take(4294967295);
    }, Et(Mn.prototype, function (n, t) {
      var r = /^(?:filter|find|map|reject)|While$/.test(t),
          e = /^(?:head|last)$/.test(t),
          u = On[e ? "take" + ("last" == t ? "Right" : "") : t],
          i = e || /^find/.test(t);u && (On.prototype[t] = function () {
        function t(n) {
          return n = u.apply(On, s([n], f)), e && h ? n[0] : n;
        }var o = this.__wrapped__,
            f = e ? [1] : arguments,
            c = o instanceof Mn,
            a = f[0],
            l = c || af(o);
        l && r && typeof a == "function" && 1 != a.length && (c = l = false);var h = this.__chain__,
            p = !!this.__actions__.length,
            a = i && !h,
            c = c && !p;return !i && l ? (o = c ? o : new Mn(this), o = n.apply(o, f), o.__actions__.push({ func: nu, args: [t], thisArg: F }), new zn(o, h)) : a && c ? n.apply(this, f) : (o = this.thru(t), a ? e ? o.value()[0] : o.value() : o);
      });
    }), u("pop push shift sort splice unshift".split(" "), function (n) {
      var t = ui[n],
          r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
          e = /^(?:pop|shift)$/.test(n);On.prototype[n] = function () {
        var n = arguments;if (e && !this.__chain__) {
          var u = this.value();return t.apply(af(u) ? u : [], n);
        }return this[r](function (r) {
          return t.apply(af(r) ? r : [], n);
        });
      };
    }), Et(Mn.prototype, function (n, t) {
      var r = On[t];if (r) {
        var e = r.name + "";(Ji[e] || (Ji[e] = [])).push({ name: t, func: r });
      }
    }), Ji[Xr(F, 2).name] = [{ name: "wrapper", func: F }], Mn.prototype.clone = function () {
      var n = new Mn(this.__wrapped__);return n.__actions__ = Mr(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Mr(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Mr(this.__views__), n;
    }, Mn.prototype.reverse = function () {
      if (this.__filtered__) {
        var n = new Mn(this);n.__dir__ = -1, n.__filtered__ = true;
      } else n = this.clone(), n.__dir__ *= -1;return n;
    }, Mn.prototype.value = function () {
      var n,
          t = this.__wrapped__.value(),
          r = this.__dir__,
          e = af(t),
          u = 0 > r,
          i = e ? t.length : 0;n = i;for (var o = this.__views__, f = 0, c = -1, a = o.length; ++c < a;) {
        var l = o[c],
            s = l.size;switch (l.type) {case "drop":
            f += s;break;case "dropRight":
            n -= s;break;case "take":
            n = Mi(n, f + s);break;case "takeRight":
            f = Di(f, n - s);}
      }if (n = { start: f, end: n }, o = n.start, f = n.end, n = f - o, o = u ? f : o - 1, f = this.__iteratees__, c = f.length, a = 0, l = Mi(n, this.__takeCount__), !e || !u && i == n && l == n) return kr(t, this.__actions__);e = [];n: for (; n-- && a < l;) {
        for (o += r, u = -1, i = t[o]; ++u < c;) {
          var h = f[u],
              s = h.type,
              h = (0, h.iteratee)(i);if (2 == s) i = h;else if (!h) {
            if (1 == s) continue n;break n;
          }
        }e[a++] = i;
      }return e;
    }, On.prototype.at = Fo, On.prototype.chain = function () {
      return Xe(this);
    }, On.prototype.commit = function () {
      return new zn(this.value(), this.__chain__);
    }, On.prototype.next = function () {
      this.__values__ === F && (this.__values__ = ku(this.value()));
      var n = this.__index__ >= this.__values__.length;return { done: n, value: n ? F : this.__values__[this.__index__++] };
    }, On.prototype.plant = function (n) {
      for (var t, r = this; r instanceof Sn;) {
        var e = Pe(r);e.__index__ = 0, e.__values__ = F, t ? u.__wrapped__ = e : t = e;var u = e,
            r = r.__wrapped__;
      }return u.__wrapped__ = n, t;
    }, On.prototype.reverse = function () {
      var n = this.__wrapped__;return n instanceof Mn ? (this.__actions__.length && (n = new Mn(this)), n = n.reverse(), n.__actions__.push({ func: nu, args: [Je], thisArg: F }), new zn(n, this.__chain__)) : this.thru(Je);
    }, On.prototype.toJSON = On.prototype.valueOf = On.prototype.value = function () {
      return kr(this.__wrapped__, this.__actions__);
    }, On.prototype.first = On.prototype.head, Ai && (On.prototype[Ai] = tu), On;
  }(); true ? (Zn._ = it, !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return it;
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))) : Vn ? ((Vn.exports = it)._ = it, qn._ = it) : Zn._ = it;
}).call(this);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(35)(module)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.9
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
   true ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.Vue = factory();
})(this, function () {
  'use strict';

  /*  */

  var emptyObject = Object.freeze({});

  // these helpers produces better vm code in JS engines due to their
  // explicitness and function inlining
  function isUndef(v) {
    return v === undefined || v === null;
  }

  function isDef(v) {
    return v !== undefined && v !== null;
  }

  function isTrue(v) {
    return v === true;
  }

  function isFalse(v) {
    return v === false;
  }

  /**
   * Check if value is primitive
   */
  function isPrimitive(value) {
    return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean';
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject(obj) {
    return obj !== null && typeof obj === 'object';
  }

  /**
   * Get the raw type string of a value e.g. [object Object]
   */
  var _toString = Object.prototype.toString;

  function toRawType(value) {
    return _toString.call(value).slice(8, -1);
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
  }

  function isRegExp(v) {
    return _toString.call(v) === '[object RegExp]';
  }

  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString(val) {
    return val == null ? '' : typeof val === 'object' ? JSON.stringify(val, null, 2) : String(val);
  }

  /**
   * Convert a input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber(val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n;
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap(str, expectsLowerCase) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? function (val) {
      return map[val.toLowerCase()];
    } : function (val) {
      return map[val];
    };
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Check if a attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

  /**
   * Remove an item from an array
   */
  function remove(arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1);
      }
    }
  }

  /**
   * Check whether the object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached(fn) {
    var cache = Object.create(null);
    return function cachedFn(str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) {
      return c ? c.toUpperCase() : '';
    });
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase();
  });

  /**
   * Simple bind, faster than native
   */
  function bind(fn, ctx) {
    function boundFn(a) {
      var l = arguments.length;
      return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
    }
    // record original fn length
    boundFn._length = fn.length;
    return boundFn;
  }

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret;
  }

  /**
   * Mix properties into target object.
   */
  function extend(to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to;
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject(arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res;
  }

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
   */
  function noop(a, b, c) {}

  /**
   * Always return false.
   */
  var no = function (a, b, c) {
    return false;
  };

  /**
   * Return same value
   */
  var identity = function (_) {
    return _;
  };

  /**
   * Generate a static keys string from compiler modules.
   */
  function genStaticKeys(modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || []);
    }, []).join(',');
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual(a, b) {
    if (a === b) {
      return true;
    }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i]);
          });
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key]);
          });
        } else {
          /* istanbul ignore next */
          return false;
        }
      } catch (e) {
        /* istanbul ignore next */
        return false;
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b);
    } else {
      return false;
    }
  }

  function looseIndexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) {
        return i;
      }
    }
    return -1;
  }

  /**
   * Ensure a function is called only once.
   */
  function once(fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    };
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = ['component', 'directive', 'filter'];

  var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured'];

  /*  */

  var config = {
    /**
     * Option merge strategies (used in core/util/options)
     */
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  };

  /*  */

  /**
   * Check if a string starts with $ or _
   */
  function isReserved(str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F;
  }

  /**
   * Define a property.
   */
  function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = /[^\w.$]/;
  function parsePath(path) {
    if (bailRE.test(path)) {
      return;
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) {
          return;
        }
        obj = obj[segments[i]];
      }
      return obj;
    };
  }

  /*  */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
  var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

  // Firefox has a "watch" function on Object.prototype...
  var nativeWatch = {}.watch;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', {
        get: function get() {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      }); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function () {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer;
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
  }

  var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */ // $flow-disable-line
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = function () {
      function Set() {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has(key) {
        return this.set[key] === true;
      };
      Set.prototype.add = function add(key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear() {
        this.set = Object.create(null);
      };

      return Set;
    }();
  }

  /*  */

  var warn = noop;
  var tip = noop;
  var generateComponentTrace = noop; // work around flow check
  var formatComponentName = noop;

  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;
    var classify = function (str) {
      return str.replace(classifyRE, function (c) {
        return c.toUpperCase();
      }).replace(/[-_]/g, '');
    };

    warn = function (msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && !config.silent) {
        console.error("[Vue warn]: " + msg + trace);
      }
    };

    tip = function (msg, vm) {
      if (hasConsole && !config.silent) {
        console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
      }
    };

    formatComponentName = function (vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>';
      }
      var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
      var name = options.name || options._componentTag;
      var file = options.__file;
      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
    };

    var repeat = function (str, n) {
      var res = '';
      while (n) {
        if (n % 2 === 1) {
          res += str;
        }
        if (n > 1) {
          str += str;
        }
        n >>= 1;
      }
      return res;
    };

    generateComponentTrace = function (vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue;
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree.map(function (vm, i) {
          return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
        }).join('\n');
      } else {
        return "\n\n(found in " + formatComponentName(vm) + ")";
      }
    };
  }

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep() {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub(sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub(sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify() {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // the current target watcher being evaluated.
  // this is globally unique because there could be only one
  // watcher being evaluated at any time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget(_target) {
    if (Dep.target) {
      targetStack.push(Dep.target);
    }
    Dep.target = _target;
  }

  function popTarget() {
    Dep.target = targetStack.pop();
  }

  /*  */

  var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = { child: { configurable: true } };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance;
  };

  Object.defineProperties(VNode.prototype, prototypeAccessors);

  var createEmptyVNode = function (text) {
    if (text === void 0) text = '';

    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node;
  };

  function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val));
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode(vnode, deep) {
    var componentOptions = vnode.componentOptions;
    var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, componentOptions, vnode.asyncFactory);
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.isCloned = true;
    if (deep) {
      if (vnode.children) {
        cloned.children = cloneVNodes(vnode.children, true);
      }
      if (componentOptions && componentOptions.children) {
        componentOptions.children = cloneVNodes(componentOptions.children, true);
      }
    }
    return cloned;
  }

  function cloneVNodes(vnodes, deep) {
    var len = vnodes.length;
    var res = new Array(len);
    for (var i = 0; i < len; i++) {
      res[i] = cloneVNode(vnodes[i], deep);
    }
    return res;
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator() {
      var args = [],
          len = arguments.length;
      while (len--) args[len] = arguments[len];

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break;
        case 'splice':
          inserted = args.slice(2);
          break;
      }
      if (inserted) {
        ob.observeArray(inserted);
      }
      // notify change
      ob.dep.notify();
      return result;
    });
  });

  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * By default, when a reactive property is set, the new value is
   * also converted to become reactive. However when passing down props,
   * we don't want to force conversion because the value may be a nested value
   * under a frozen data structure. Converting it would defeat the optimization.
   */
  var observerState = {
    shouldConvert: true
  };

  /**
   * Observer class that are attached to each observed
   * object. Once attached, the observer converts target
   * object's property keys into getter/setters that
   * collect dependencies and dispatches updates.
   */
  var Observer = function Observer(value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      var augment = hasProto ? protoAugment : copyAugment;
      augment(value, arrayMethods, arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through each property and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk(obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i], obj[keys[i]]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray(items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment an target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment(target, src, keys) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment an target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment(target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe(value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return;
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (observerState.shouldConvert && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob;
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive(obj, key, val, customSetter, shallow) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return;
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value;
      },
      set: function reactiveSetter(newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        /* eslint-enable no-self-compare */
        if ("development" !== 'production' && customSetter) {
          customSetter();
        }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set(target, key, val) {
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val;
    }
    var ob = target.__ob__;
    if (target._isVue || ob && ob.vmCount) {
      "development" !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
      return val;
    }
    if (!ob) {
      target[key] = val;
      return val;
    }
    defineReactive(ob.value, key, val);
    ob.dep.notify();
    return val;
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del(target, key) {
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return;
    }
    var ob = target.__ob__;
    if (target._isVue || ob && ob.vmCount) {
      "development" !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
      return;
    }
    if (!hasOwn(target, key)) {
      return;
    }
    delete target[key];
    if (!ob) {
      return;
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray(value) {
    for (var e = void 0, i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
      }
      return defaultStrat(parent, child);
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData(to, from) {
    if (!from) {
      return to;
    }
    var key, toVal, fromVal;
    var keys = Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
        mergeData(toVal, fromVal);
      }
    }
    return to;
  }

  /**
   * Data
   */
  function mergeDataOrFn(parentVal, childVal, vm) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal;
      }
      if (!parentVal) {
        return childVal;
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn() {
        return mergeData(typeof childVal === 'function' ? childVal.call(this) : childVal, typeof parentVal === 'function' ? parentVal.call(this) : parentVal);
      };
    } else {
      return function mergedInstanceDataFn() {
        // instance merge
        var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
        var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : parentVal;
        if (instanceData) {
          return mergeData(instanceData, defaultData);
        } else {
          return defaultData;
        }
      };
    }
  }

  strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        "development" !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);

        return parentVal;
      }
      return mergeDataOrFn(parentVal, childVal);
    }

    return mergeDataOrFn(parentVal, childVal, vm);
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook(parentVal, childVal) {
    return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets(parentVal, childVal, vm, key) {
    var res = Object.create(parentVal || null);
    if (childVal) {
      "development" !== 'production' && assertObjectType(key, childVal, vm);
      return extend(res, childVal);
    } else {
      return res;
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (parentVal, childVal, vm, key) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) {
      parentVal = undefined;
    }
    if (childVal === nativeWatch) {
      childVal = undefined;
    }
    /* istanbul ignore if */
    if (!childVal) {
      return Object.create(parentVal || null);
    }
    {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) {
      return childVal;
    }
    var ret = {};
    extend(ret, parentVal);
    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
    }
    return ret;
  };

  /**
   * Other object hashes.
   */
  strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) {
      return childVal;
    }
    var ret = Object.create(null);
    extend(ret, parentVal);
    if (childVal) {
      extend(ret, childVal);
    }
    return ret;
  };
  strats.provide = mergeDataOrFn;

  /**
   * Default strategy.
   */
  var defaultStrat = function (parentVal, childVal) {
    return childVal === undefined ? parentVal : childVal;
  };

  /**
   * Validate component names
   */
  function checkComponents(options) {
    for (var key in options.components) {
      var lower = key.toLowerCase();
      if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
        warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
      }
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps(options, vm) {
    var props = options.props;
    if (!props) {
      return;
    }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val) ? val : { type: val };
      }
    } else {
      warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
    }
    options.props = res;
  }

  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject(options, vm) {
    var inject = options.inject;
    var normalized = options.inject = {};
    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = { from: inject[i] };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val) ? extend({ from: key }, val) : { from: val };
      }
    } else if ("development" !== 'production' && inject) {
      warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
    }
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives(options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def = dirs[key];
        if (typeof def === 'function') {
          dirs[key] = { bind: def, update: def };
        }
      }
    }
  }

  function assertObjectType(name, value, vm) {
    if (!isPlainObject(value)) {
      warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions(parent, child, vm) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child);
    var extendsFrom = child.extends;
    if (extendsFrom) {
      parent = mergeOptions(parent, extendsFrom, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField(key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options;
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset(options, type, id, warnMissing) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return;
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) {
      return assets[id];
    }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) {
      return assets[camelizedId];
    }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) {
      return assets[PascalCaseId];
    }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if ("development" !== 'production' && warnMissing && !res) {
      warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
    }
    return res;
  }

  /*  */

  function validateProp(key, propOptions, propsData, vm) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // handle boolean props
    if (isType(Boolean, prop.type)) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
        value = true;
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldConvert = observerState.shouldConvert;
      observerState.shouldConvert = true;
      observe(value);
      observerState.shouldConvert = prevShouldConvert;
    }
    {
      assertProp(prop, key, value, vm, absent);
    }
    return value;
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue(vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined;
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if ("development" !== 'production' && isObject(def)) {
      warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
      return vm._props[key];
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp(prop, name, value, vm, absent) {
    if (prop.required && absent) {
      warn('Missing required prop: "' + name + '"', vm);
      return;
    }
    if (value == null && !prop.required) {
      return;
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }
    if (!valid) {
      warn("Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ') + ", got " + toRawType(value) + ".", vm);
      return;
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType(value, type) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value;
      valid = t === expectedType.toLowerCase();
      // for primitive wrapper objects
      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid: valid,
      expectedType: expectedType
    };
  }

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType(fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : '';
  }

  function isType(type, fn) {
    if (!Array.isArray(fn)) {
      return getType(fn) === getType(type);
    }
    for (var i = 0, len = fn.length; i < len; i++) {
      if (getType(fn[i]) === getType(type)) {
        return true;
      }
    }
    /* istanbul ignore next */
    return false;
  }

  /*  */

  function handleError(err, vm, info) {
    if (vm) {
      var cur = vm;
      while (cur = cur.$parent) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) {
                return;
              }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  }

  function globalHandleError(err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info);
      } catch (e) {
        logError(e, null, 'config.errorHandler');
      }
    }
    logError(err, vm, info);
  }

  function logError(err, vm, info) {
    {
      warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
    }
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err;
    }
  }

  /*  */
  /* globals MessageChannel */

  var callbacks = [];
  var pending = false;

  function flushCallbacks() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // Here we have async deferring wrappers using both micro and macro tasks.
  // In < 2.4 we used micro tasks everywhere, but there are some scenarios where
  // micro tasks have too high a priority and fires in between supposedly
  // sequential events (e.g. #4521, #6690) or even between bubbling of the same
  // event (#6566). However, using macro tasks everywhere also has subtle problems
  // when state is changed right before repaint (e.g. #6813, out-in transitions).
  // Here we use micro task by default, but expose a way to force macro task when
  // needed (e.g. in event handlers attached by v-on).
  var microTimerFunc;
  var macroTimerFunc;
  var useMacroTask = false;

  // Determine (macro) Task defer implementation.
  // Technically setImmediate should be the ideal choice, but it's only available
  // in IE. The only polyfill that consistently queues the callback after all DOM
  // events triggered in the same loop is by using MessageChannel.
  /* istanbul ignore if */
  if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    macroTimerFunc = function () {
      setImmediate(flushCallbacks);
    };
  } else if (typeof MessageChannel !== 'undefined' && (isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]')) {
    var channel = new MessageChannel();
    var port = channel.port2;
    channel.port1.onmessage = flushCallbacks;
    macroTimerFunc = function () {
      port.postMessage(1);
    };
  } else {
    /* istanbul ignore next */
    macroTimerFunc = function () {
      setTimeout(flushCallbacks, 0);
    };
  }

  // Determine MicroTask defer implementation.
  /* istanbul ignore next, $flow-disable-line */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    microTimerFunc = function () {
      p.then(flushCallbacks);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) {
        setTimeout(noop);
      }
    };
  } else {
    // fallback to macro
    microTimerFunc = macroTimerFunc;
  }

  /**
   * Wrap a function so that if any code inside triggers state change,
   * the changes are queued using a Task instead of a MicroTask.
   */
  function withMacroTask(fn) {
    return fn._withTask || (fn._withTask = function () {
      useMacroTask = true;
      var res = fn.apply(null, arguments);
      useMacroTask = false;
      return res;
    });
  }

  function nextTick(cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      if (useMacroTask) {
        macroTimerFunc();
      } else {
        microTimerFunc();
      }
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      });
    }
  }

  /*  */

  var mark;
  var measure;

  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */
    if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
      mark = function (tag) {
        return perf.mark(tag);
      };
      measure = function (name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        perf.clearMeasures(name);
      };
    }
  }

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  {
    var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
    );

    var warnNonPresent = function (target, key) {
      warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
    };

    var hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set(target, key, value) {
          if (isBuiltInModifier(key)) {
            warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
            return false;
          } else {
            target[key] = value;
            return true;
          }
        }
      });
    }

    var hasHandler = {
      has: function has(target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
        if (!has && !isAllowed) {
          warnNonPresent(target, key);
        }
        return has || !isAllowed;
      }
    };

    var getHandler = {
      get: function get(target, key) {
        if (typeof key === 'string' && !(key in target)) {
          warnNonPresent(target, key);
        }
        return target[key];
      }
    };

    initProxy = function initProxy(vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var seenObjects = new _Set();

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  function traverse(val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
  }

  function _traverse(val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if (!isA && !isObject(val) || Object.isFrozen(val)) {
      return;
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return;
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) {
        _traverse(val[i], seen);
      }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) {
        _traverse(val[keys[i]], seen);
      }
    }
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    };
  });

  function createFnInvoker(fns) {
    function invoker() {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        var cloned = fns.slice();
        for (var i = 0; i < cloned.length; i++) {
          cloned[i].apply(null, arguments$1);
        }
      } else {
        // return handler return value for single handlers
        return fns.apply(null, arguments);
      }
    }
    invoker.fns = fns;
    return invoker;
  }

  function updateListeners(on, oldOn, add, remove$$1, vm) {
    var name, cur, old, event;
    for (name in on) {
      cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) {
        "development" !== 'production' && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur);
        }
        add(event.name, cur, event.once, event.capture, event.passive);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook(def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook() {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData(data, Ctor, tag) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return;
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();
          if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
            tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
          }
        }
        checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
      }
    }
    return res;
  }

  function checkProp(res, hash, key, altKey, preserve) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true;
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true;
      }
    }
    return false;
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren(children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children);
      }
    }
    return children;
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren(children) {
    return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
  }

  function isTextNode(node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment);
  }

  function normalizeArrayChildren(children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') {
        continue;
      }
      lastIndex = res.length - 1;
      last = res[lastIndex];
      //  nested
      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i);
          // merge adjacent text nodes
          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + c[0].text);
            c.shift();
          }
          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res;
  }

  /*  */

  function ensureCtor(comp, base) {
    if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
      comp = comp.default;
    }
    return isObject(comp) ? base.extend(comp) : comp;
  }

  function createAsyncPlaceholder(factory, data, context, children, tag) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node;
  }

  function resolveAsyncComponent(factory, baseCtor, context) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp;
    }

    if (isDef(factory.resolved)) {
      return factory.resolved;
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp;
    }

    if (isDef(factory.contexts)) {
      // already pending
      factory.contexts.push(context);
    } else {
      var contexts = factory.contexts = [context];
      var sync = true;

      var forceRender = function () {
        for (var i = 0, l = contexts.length; i < l; i++) {
          contexts[i].$forceUpdate();
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender();
        }
      });

      var reject = once(function (reason) {
        "development" !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender();
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (typeof res.then === 'function') {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isDef(res.component) && typeof res.component.then === 'function') {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              setTimeout(function () {
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender();
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            setTimeout(function () {
              if (isUndef(factory.resolved)) {
                reject("timeout (" + res.timeout + "ms)");
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading ? factory.loadingComp : factory.resolved;
    }
  }

  /*  */

  function isAsyncPlaceholder(node) {
    return node.isComment && node.asyncFactory;
  }

  /*  */

  function getFirstComponentChild(children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c;
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents(vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add(event, fn, once) {
    if (once) {
      target.$once(event, fn);
    } else {
      target.$on(event, fn);
    }
  }

  function remove$1(event, fn) {
    target.$off(event, fn);
  }

  function updateComponentListeners(vm, listeners, oldListeners) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
    target = undefined;
  }

  function eventsMixin(Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var this$1 = this;

      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          this$1.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm;
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on() {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm;
    };

    Vue.prototype.$off = function (event, fn) {
      var this$1 = this;

      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm;
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          this$1.$off(event[i], fn);
        }
        return vm;
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm;
      }
      if (!fn) {
        vm._events[event] = null;
        return vm;
      }
      if (fn) {
        // specific handler
        var cb;
        var i$1 = cbs.length;
        while (i$1--) {
          cb = cbs[i$1];
          if (cb === fn || cb.fn === fn) {
            cbs.splice(i$1, 1);
            break;
          }
        }
      }
      return vm;
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        for (var i = 0, l = cbs.length; i < l; i++) {
          try {
            cbs[i].apply(vm, args);
          } catch (e) {
            handleError(e, vm, "event handler for \"" + event + "\"");
          }
        }
      }
      return vm;
    };
  }

  /*  */

  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots(children, context) {
    var slots = {};
    if (!children) {
      return slots;
    }
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
        var name = child.data.slot;
        var slot = slots[name] || (slots[name] = []);
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // ignore slots that contains only whitespace
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots;
  }

  function isWhitespace(node) {
    return node.isComment && !node.asyncFactory || node.text === ' ';
  }

  function resolveScopedSlots(fns, // see flow/vnode
  res) {
    res = res || {};
    for (var i = 0; i < fns.length; i++) {
      if (Array.isArray(fns[i])) {
        resolveScopedSlots(fns[i], res);
      } else {
        res[fns[i].key] = fns[i].fn;
      }
    }
    return res;
  }

  /*  */

  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function initLifecycle(vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin(Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      if (vm._isMounted) {
        callHook(vm, 'beforeUpdate');
      }
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var prevActiveInstance = activeInstance;
      activeInstance = vm;
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */
        , vm.$options._parentElm, vm.$options._refElm);
        // no need for the ref nodes after initial patch
        // this prevents keeping a detached DOM tree in memory (#5851)
        vm.$options._parentElm = vm.$options._refElm = null;
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      activeInstance = prevActiveInstance;
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return;
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // release circular reference (#6759)
      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent(vm, el, hydrating) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
          warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
        } else {
          warn('Failed to mount component: template or render function not defined.', vm);
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      updateComponent = function () {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;

        mark(startTag);
        var vnode = vm._render();
        mark(endTag);
        measure("vue " + name + " render", startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure("vue " + name + " patch", startTag, endTag);
      };
    } else {
      updateComponent = function () {
        vm._update(vm._render(), hydrating);
      };
    }

    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm;
  }

  function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
    {
      isUpdatingChildComponent = true;
    }

    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren
    var hasChildren = !!(renderChildren || // has new static slots
    vm.$options._renderChildren || // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
    );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) {
      // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    vm.$attrs = parentVnode.data && parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject;

    // update props
    if (propsData && vm.$options.props) {
      observerState.shouldConvert = false;
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        props[key] = validateProp(key, vm.$options.props, propsData, vm);
      }
      observerState.shouldConvert = true;
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

    // update listeners
    if (listeners) {
      var oldListeners = vm.$options._parentListeners;
      vm.$options._parentListeners = listeners;
      updateComponentListeners(vm, listeners, oldListeners);
    }
    // resolve slots + force update if has children
    if (hasChildren) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree(vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) {
        return true;
      }
    }
    return false;
  }

  function activateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return;
      }
    } else if (vm._directInactive) {
      return;
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent(vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return;
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook(vm, hook) {
    var handlers = vm.$options[hook];
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        try {
          handlers[i].call(vm);
        } catch (e) {
          handleError(e, vm, hook + " hook");
        }
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
  }

  /*  */

  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState() {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue() {
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) {
      return a.id - b.id;
    });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if ("development" !== 'production' && has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
          break;
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks(queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent(vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks(queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher(watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */

  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = function () {};
        "development" !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
      }
    }
    this.value = this.lazy ? undefined : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get() {
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
      } else {
        throw e;
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value;
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep(dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps() {
    var this$1 = this;

    var i = this.deps.length;
    while (i--) {
      var dep = this$1.deps[i];
      if (!this$1.newDepIds.has(dep.id)) {
        dep.removeSub(this$1);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update() {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run() {
    if (this.active) {
      var value = this.get();
      if (value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) || this.deep) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate() {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend() {
    var this$1 = this;

    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown() {
    var this$1 = this;

    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this$1.deps[i].removeSub(this$1);
      }
      this.active = false;
    }
  };

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
      return this[sourceKey][key];
    };
    sharedPropertyDefinition.set = function proxySetter(val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState(vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) {
      initProps(vm, opts.props);
    }
    if (opts.methods) {
      initMethods(vm, opts.methods);
    }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) {
      initComputed(vm, opts.computed);
    }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps(vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    observerState.shouldConvert = isRoot;
    var loop = function (key) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        var hyphenatedKey = hyphenate(key);
        if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
          warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
        }
        defineReactive(props, key, value, function () {
          if (vm.$parent && !isUpdatingChildComponent) {
            warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
          }
        });
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) loop(key);
    observerState.shouldConvert = true;
  }

  function initData(vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};
    if (!isPlainObject(data)) {
      data = {};
      "development" !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn("Method \"" + key + "\" has already been defined as a data property.", vm);
        }
      }
      if (props && hasOwn(props, key)) {
        "development" !== 'production' && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData(data, vm) {
    try {
      return data.call(vm, vm);
    } catch (e) {
      handleError(e, vm, "data()");
      return {};
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed(vm, computed) {
    var watchers = vm._computedWatchers = Object.create(null);
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;
      if ("development" !== 'production' && getter == null) {
        warn("Getter is missing for computed property \"" + key + "\".", vm);
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
      }

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn("The computed property \"" + key + "\" is already defined in data.", vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
        }
      }
    }
  }

  function defineComputed(target, key, userDef) {
    var shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : userDef;
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : userDef.get : noop;
      sharedPropertyDefinition.set = userDef.set ? userDef.set : noop;
    }
    if ("development" !== 'production' && sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
      };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter(key) {
    return function computedGetter() {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value;
      }
    };
  }

  function initMethods(vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
      {
        if (methods[key] == null) {
          warn("Method \"" + key + "\" has an undefined value in the component definition. " + "Did you reference the function correctly?", vm);
        }
        if (props && hasOwn(props, key)) {
          warn("Method \"" + key + "\" has already been defined as a prop.", vm);
        }
        if (key in vm && isReserved(key)) {
          warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
        }
      }
      vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    }
  }

  function initWatch(vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher(vm, keyOrFn, handler, options) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(keyOrFn, handler, options);
  }

  function stateMixin(Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () {
      return this._data;
    };
    var propsDef = {};
    propsDef.get = function () {
      return this._props;
    };
    {
      dataDef.set = function (newData) {
        warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
      };
      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (expOrFn, cb, options) {
      var vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options);
      }
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        cb.call(vm, watcher.value);
      }
      return function unwatchFn() {
        watcher.teardown();
      };
    };
  }

  /*  */

  function initProvide(vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
    }
  }

  function initInjections(vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      observerState.shouldConvert = false;
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive(vm, key, result[key], function () {
            warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
          });
        }
      });
      observerState.shouldConvert = true;
    }
  }

  function resolveInject(inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable;
      }) : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var provideKey = inject[key].from;
        var source = vm;
        while (source) {
          if (source._provided && provideKey in source._provided) {
            result[key] = source._provided[provideKey];
            break;
          }
          source = source.$parent;
        }
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
          } else {
            warn("Injection \"" + key + "\" not found", vm);
          }
        }
      }
      return result;
    }
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList(val, render) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
    if (isDef(ret)) {
      ret._isVList = true;
    }
    return ret;
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot(name, fallback, props, bindObject) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) {
      // scoped slot
      props = props || {};
      if (bindObject) {
        if ("development" !== 'production' && !isObject(bindObject)) {
          warn('slot v-bind without argument expects an Object', this);
        }
        props = extend(extend({}, bindObject), props);
      }
      nodes = scopedSlotFn(props) || fallback;
    } else {
      var slotNodes = this.$slots[name];
      // warn duplicate slot usage
      if (slotNodes) {
        if ("development" !== 'production' && slotNodes._rendered) {
          warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " + "- this will likely cause render errors.", this);
        }
        slotNodes._rendered = true;
      }
      nodes = slotNodes || fallback;
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes);
    } else {
      return nodes;
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter(id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity;
  }

  /*  */

  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes(eventKeyCode, key, builtInAlias, eventKeyName) {
    var keyCodes = config.keyCodes[key] || builtInAlias;
    if (keyCodes) {
      if (Array.isArray(keyCodes)) {
        return keyCodes.indexOf(eventKeyCode) === -1;
      } else {
        return keyCodes !== eventKeyCode;
      }
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key;
    }
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps(data, tag, value, asProp, isSync) {
    if (value) {
      if (!isObject(value)) {
        "development" !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        var loop = function (key) {
          if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
          }
          if (!(key in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});
              on["update:" + key] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) loop(key);
      }
    }
    return data;
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic(index, isInFor, isOnce) {
    // render fns generated by compiler < 2.5.4 does not provide v-once
    // information to runtime so be conservative
    var isOldVersion = arguments.length < 3;
    // if a static tree is generated by v-once, it is cached on the instance;
    // otherwise it is purely static and can be cached on the shared options
    // across all instances.
    var renderFns = this.$options.staticRenderFns;
    var cached = isOldVersion || isOnce ? this._staticTrees || (this._staticTrees = []) : renderFns.cached || (renderFns.cached = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree by doing a shallow clone.
    if (tree && !isInFor) {
      return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree);
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = renderFns[index].call(this._renderProxy, null, this);
    markStatic(tree, "__static__" + index, false);
    return tree;
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce(tree, index, key) {
    markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
    return tree;
  }

  function markStatic(tree, key, isOnce) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], key + "_" + i, isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode(node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function bindObjectListeners(data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        "development" !== 'production' && warn('v-on without argument expects an Object value', this);
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};
        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }
    return data;
  }

  /*  */

  function installRenderHelpers(target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
  }

  /*  */

  function FunctionalRenderContext(data, props, children, parent, Ctor) {
    var options = Ctor.options;
    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
      return resolveSlots(children, parent);
    };

    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm = Object.create(parent);
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;

    // support for compiled functional template
    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options;
      // pre-resolve slots for renderSlot()
      this.$slots = this.slots();
      this.$scopedSlots = data.scopedSlots || emptyObject;
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
        if (vnode) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }
        return vnode;
      };
    } else {
      this._c = function (a, b, c, d) {
        return createElement(contextVm, a, b, c, d, needNormalization);
      };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) {
        mergeProps(props, data.attrs);
      }
      if (isDef(data.props)) {
        mergeProps(props, data.props);
      }
    }

    var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);

    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      vnode.fnContext = contextVm;
      vnode.fnOptions = options;
      if (data.slot) {
        (vnode.data || (vnode.data = {})).slot = data.slot;
      }
    }

    return vnode;
  }

  function mergeProps(to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  // hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init(vnode, hydrating, parentElm, refElm) {
      if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
        var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      } else if (vnode.data.keepAlive) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      }
    },

    prepatch: function prepatch(oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(child, options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
      );
    },

    insert: function insert(vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy(vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent(Ctor, data, context, children, tag) {
    if (isUndef(Ctor)) {
      return;
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      {
        warn("Invalid Component definition: " + String(Ctor), context);
      }
      return;
    }

    // async component
    var asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
      }
    }

    data = data || {};

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children);
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot

      // work around flow
      var slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

    // merge component management hooks onto the placeholder node
    mergeHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }, asyncFactory);
    return vnode;
  }

  function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm, refElm) {
    var vnodeComponentOptions = vnode.componentOptions;
    var options = {
      _isComponent: true,
      parent: parent,
      propsData: vnodeComponentOptions.propsData,
      _componentTag: vnodeComponentOptions.tag,
      _parentVnode: vnode,
      _parentListeners: vnodeComponentOptions.listeners,
      _renderChildren: vnodeComponentOptions.children,
      _parentElm: parentElm || null,
      _refElm: refElm || null
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnodeComponentOptions.Ctor(options);
  }

  function mergeHooks(data) {
    if (!data.hook) {
      data.hook = {};
    }
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var fromParent = data.hook[key];
      var ours = componentVNodeHooks[key];
      data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
    }
  }

  function mergeHook$1(one, two) {
    return function (a, b, c, d) {
      one(a, b, c, d);
      two(a, b, c, d);
    };
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel(options, data) {
    var prop = options.model && options.model.prop || 'value';
    var event = options.model && options.model.event || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    if (isDef(on[event])) {
      on[event] = [data.model.callback].concat(on[event]);
    } else {
      on[event] = data.model.callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType);
  }

  function _createElement(context, tag, data, children, normalizationType) {
    if (isDef(data) && isDef(data.__ob__)) {
      "development" !== 'production' && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
      return createEmptyVNode();
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode();
    }
    // warn against non-primitive key
    if ("development" !== 'production' && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
      warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) && typeof children[0] === 'function') {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
      } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(tag, data, children, undefined, undefined, context);
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (isDef(vnode)) {
      if (ns) {
        applyNS(vnode, ns);
      }
      return vnode;
    } else {
      return createEmptyVNode();
    }
  }

  function applyNS(vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
          applyNS(child, ns, force);
        }
      }
    }
  }

  /*  */

  function initRender(vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, false);
    };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) {
      return createElement(vm, a, b, c, d, true);
    };

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    {
      defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  function renderMixin(Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this);
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (vm._isMounted) {
        // if the parent didn't update, the slot nodes will be the ones from
        // last render. They need to be cloned to ensure "freshness" for this render.
        for (var key in vm.$slots) {
          var slot = vm.$slots[key];
          // _rendered is a flag added by renderSlot, but may not be present
          // if the slot is passed from manually written render functions
          if (slot._rendered || slot[0] && slot[0].elm) {
            vm.$slots[key] = cloneVNodes(slot, true /* deep */);
          }
        }
      }

      vm.$scopedSlots = _parentVnode && _parentVnode.data.scopedSlots || emptyObject;

      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        {
          if (vm.$options.renderError) {
            try {
              vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
            } catch (e) {
              handleError(e, vm, "renderError");
              vnode = vm._vnode;
            }
          } else {
            vnode = vm._vnode;
          }
        }
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if ("development" !== 'production' && Array.isArray(vnode)) {
          warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode;
    };
  }

  /*  */

  var uid$1 = 0;

  function initMixin(Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$1++;

      var startTag, endTag;
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        startTag = "vue-perf-start:" + vm._uid;
        endTag = "vue-perf-end:" + vm._uid;
        mark(startTag);
      }

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure("vue " + vm._name + " init", startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent(vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    opts.parent = options.parent;
    opts.propsData = options.propsData;
    opts._parentVnode = options._parentVnode;
    opts._parentListeners = options._parentListeners;
    opts._renderChildren = options._renderChildren;
    opts._componentTag = options._componentTag;
    opts._parentElm = options._parentElm;
    opts._refElm = options._refElm;
    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions(Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options;
  }

  function resolveModifiedOptions(Ctor) {
    var modified;
    var latest = Ctor.options;
    var extended = Ctor.extendOptions;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) {
          modified = {};
        }
        modified[key] = dedupe(latest[key], extended[key], sealed[key]);
      }
    }
    return modified;
  }

  function dedupe(latest, extended, sealed) {
    // compare latest and sealed to ensure lifecycle hooks won't be duplicated
    // between merges
    if (Array.isArray(latest)) {
      var res = [];
      sealed = Array.isArray(sealed) ? sealed : [sealed];
      extended = Array.isArray(extended) ? extended : [extended];
      for (var i = 0; i < latest.length; i++) {
        // push original options and not sealed options to exclude duplicated options
        if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
          res.push(latest[i]);
        }
      }
      return res;
    } else {
      return latest;
    }
  }

  function Vue$3(options) {
    if ("development" !== 'production' && !(this instanceof Vue$3)) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue$3);
  stateMixin(Vue$3);
  eventsMixin(Vue$3);
  lifecycleMixin(Vue$3);
  renderMixin(Vue$3);

  /*  */

  function initUse(Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
      if (installedPlugins.indexOf(plugin) > -1) {
        return this;
      }

      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this;
    };
  }

  /*  */

  function initMixin$1(Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this;
    };
  }

  /*  */

  function initExtend(Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId];
      }

      var name = extendOptions.name || Super.options.name;
      {
        if (!/^[a-zA-Z][\w-]*$/.test(name)) {
          warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
        }
      }

      var Sub = function VueComponent(options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(Super.options, extendOptions);
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub;
    };
  }

  function initProps$1(Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1(Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters(Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (id, definition) {
        if (!definition) {
          return this.options[type + 's'][id];
        } else {
          /* istanbul ignore if */
          {
            if (type === 'component' && config.isReservedTag(id)) {
              warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
            }
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition;
        }
      };
    });
  }

  /*  */

  function getComponentName(opts) {
    return opts && (opts.Ctor.options.name || opts.tag);
  }

  function matches(pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1;
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1;
    } else if (isRegExp(pattern)) {
      return pattern.test(name);
    }
    /* istanbul ignore next */
    return false;
  }

  function pruneCache(keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
      var cachedNode = cache[key];
      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry(cache, key, keys, current) {
    var cached$$1 = cache[key];
    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }
    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },

    created: function created() {
      this.cache = Object.create(null);
      this.keys = [];
    },

    destroyed: function destroyed() {
      var this$1 = this;

      for (var key in this$1.cache) {
        pruneCacheEntry(this$1.cache, key, this$1.keys);
      }
    },

    watch: {
      include: function include(val) {
        pruneCache(this, function (name) {
          return matches(val, name);
        });
      },
      exclude: function exclude(val) {
        pruneCache(this, function (name) {
          return !matches(val, name);
        });
      }
    },

    render: function render() {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;
        if (
        // not included
        include && (!name || !matches(include, name)) ||
        // excluded
        exclude && name && matches(exclude, name)) {
          return vnode;
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
          // make current key freshest
          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key);
          // prune oldest entry
          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }
      return vnode || slot && slot[0];
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  /*  */

  function initGlobalAPI(Vue) {
    // config
    var configDef = {};
    configDef.get = function () {
      return config;
    };
    {
      configDef.set = function () {
        warn('Do not replace the Vue.config object, set individual fields instead.');
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue$3);

  Object.defineProperty(Vue$3.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue$3.prototype, '$ssrContext', {
    get: function get() {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext;
    }
  });

  Vue$3.version = '2.5.9';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function (tag, type, attr) {
    return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function (name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
  };

  var getXlinkProp = function (name) {
    return isXlink(name) ? name.slice(6, name.length) : '';
  };

  var isFalsyAttrValue = function (val) {
    return val == null || val === false;
  };

  /*  */

  function genClassForVnode(vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class);
  }

  function mergeClassData(child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class) ? [child.class, parent.class] : parent.class
    };
  }

  function renderClass(staticClass, dynamicClass) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass));
    }
    /* istanbul ignore next */
    return '';
  }

  function concat(a, b) {
    return a ? b ? a + ' ' + b : a : b || '';
  }

  function stringifyClass(value) {
    if (Array.isArray(value)) {
      return stringifyArray(value);
    }
    if (isObject(value)) {
      return stringifyObject(value);
    }
    if (typeof value === 'string') {
      return value;
    }
    /* istanbul ignore next */
    return '';
  }

  function stringifyArray(value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) {
          res += ' ';
        }
        res += stringified;
      }
    }
    return res;
  }

  function stringifyObject(value) {
    var res = '';
    for (var key in value) {
      if (value[key]) {
        if (res) {
          res += ' ';
        }
        res += key;
      }
    }
    return res;
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot');

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

  var isPreTag = function (tag) {
    return tag === 'pre';
  };

  var isReservedTag = function (tag) {
    return isHTMLTag(tag) || isSVG(tag);
  };

  function getTagNamespace(tag) {
    if (isSVG(tag)) {
      return 'svg';
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math';
    }
  }

  var unknownElementCache = Object.create(null);
  function isUnknownElement(tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true;
    }
    if (isReservedTag(tag)) {
      return false;
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag];
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query(el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        "development" !== 'production' && warn('Cannot find element: ' + el);
        return document.createElement('div');
      }
      return selected;
    } else {
      return el;
    }
  }

  /*  */

  function createElement$1(tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm;
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm;
  }

  function createElementNS(namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName);
  }

  function createTextNode(text) {
    return document.createTextNode(text);
  }

  function createComment(text) {
    return document.createComment(text);
  }

  function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild(node, child) {
    node.removeChild(child);
  }

  function appendChild(node, child) {
    node.appendChild(child);
  }

  function parentNode(node) {
    return node.parentNode;
  }

  function nextSibling(node) {
    return node.nextSibling;
  }

  function tagName(node) {
    return node.tagName;
  }

  function setTextContent(node, text) {
    node.textContent = text;
  }

  function setAttribute(node, key, val) {
    node.setAttribute(key, val);
  }

  var nodeOps = Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setAttribute: setAttribute
  });

  /*  */

  var ref = {
    create: function create(_, vnode) {
      registerRef(vnode);
    },
    update: function update(oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy(vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef(vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!key) {
      return;
    }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode(a, b) {
    return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
  }

  function sameInputType(a, b) {
    if (a.tag !== 'input') {
      return true;
    }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
  }

  function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) {
        map[key] = i;
      }
    }
    return map;
  }

  function createPatchFunction(backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt(elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
    }

    function createRmCb(childElm, listeners) {
      function remove() {
        if (--remove.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove.listeners = listeners;
      return remove;
    }

    function removeNode(el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1(vnode, inVPre) {
      return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
        return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
      })) && config.isUnknownElement(vnode.tag);
    }

    var creatingElmInVPre = 0;
    function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return;
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }
          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
          }
        }
        vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if ("development" !== 'production' && data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */, parentElm, refElm);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true;
        }
      }
    }

    function initComponent(vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break;
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert(parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (ref$$1.parentNode === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren(vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
      }
    }

    function isPatchable(vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag);
    }

    function invokeCreateHooks(vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) {
          i.create(emptyNode, vnode);
        }
        if (isDef(i.insert)) {
          insertedVnodeQueue.push(vnode);
        }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope(vnode) {
      var i;
      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      } else {
        var ancestor = vnode;
        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setAttribute(vnode.elm, i, '');
          }
          ancestor = ancestor.parent;
        }
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
    }

    function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
      }
    }

    function invokeDestroyHook(vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) {
          i(vnode);
        }
        for (i = 0; i < cbs.destroy.length; ++i) {
          cbs.destroy[i](vnode);
        }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else {
            // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook(vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
          // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
          // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) {
            oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
          }
          idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
          if (isUndef(idxInOld)) {
            // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          } else {
            vnodeToMove = oldCh[idxInOld];
            /* istanbul ignore if */
            if ("development" !== 'production' && !vnodeToMove) {
              warn('It seems there are duplicate keys that is causing an update error. ' + 'Make sure each v-for item has a unique key.');
            }
            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            }
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function findIdxInOld(node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) {
          return i;
        }
      }
    }

    function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
      if (oldVnode === vnode) {
        return;
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return;
      }

      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
        vnode.componentInstance = oldVnode.componentInstance;
        return;
      }

      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) {
          cbs.update[i](oldVnode, vnode);
        }
        if (isDef(i = data.hook) && isDef(i = i.update)) {
          i(oldVnode, vnode);
        }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) {
            updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
          }
        } else if (isDef(ch)) {
          if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, '');
          }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
          i(oldVnode, vnode);
        }
      }
    }

    function invokeInsertHook(vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || data && data.pre;
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true;
      }
      // assert node match
      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false;
        }
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) {
          i(vnode, true /* hydrating */);
        }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true;
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if ("development" !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }
                return false;
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;
              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break;
                }
                childNode = childNode.nextSibling;
              }
              // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.
              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if ("development" !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }
                return false;
              }
            }
          }
        }
        if (isDef(data)) {
          var fullInvoke = false;
          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break;
            }
          }
          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true;
    }

    function assertNodeMatch(node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3);
      }
    }

    return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) {
          invokeDestroyHook(oldVnode);
        }
        return;
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue, parentElm, refElm);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode;
              } else {
                warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }

          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm$1 = nodeOps.parentNode(oldElm);

          // create new node
          createElm(vnode, insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1, nodeOps.nextSibling(oldElm));

          // update parent placeholder node element, recursively
          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);
            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }
              ancestor.elm = vnode.elm;
              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                }
                // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.
                var insert = ancestor.data.hook.insert;
                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }
              ancestor = ancestor.parent;
            }
          }

          // destroy old node
          if (isDef(parentElm$1)) {
            removeVnodes(parentElm$1, [oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm;
    };
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives(vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives(oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update(oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function () {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1(dirs, vm) {
    var res = Object.create(null);
    if (!dirs) {
      return res;
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    return res;
  }

  function getRawDirName(dir) {
    return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
  }

  function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
      }
    }
  }

  var baseModules = [ref, directives];

  /*  */

  function updateAttrs(oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return;
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return;
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr(el, key, value) {
    if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // #7138: IE10 & 11 fires input event when setting placeholder on
        // <textarea>... block the first input event and remove the blocker
        // immediately.
        /* istanbul ignore if */
        if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && !el.__ieph) {
          var blocker = function (e) {
            e.stopImmediatePropagation();
            el.removeEventListener('input', blocker);
          };
          el.addEventListener('input', blocker);
          // $flow-disable-line
          el.__ieph = true; /* IE placeholder patched */
        }
        el.setAttribute(key, value);
      }
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  /*  */

  function updateClass(oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
      return;
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };

  /*  */

  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters(exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) {
          inSingle = false;
        }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) {
          inDouble = false;
        }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) {
          inTemplateString = false;
        }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) {
          inRegex = false;
        }
      } else if (c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22:
            inDouble = true;break; // "
          case 0x27:
            inSingle = true;break; // '
          case 0x60:
            inTemplateString = true;break; // `
          case 0x28:
            paren++;break; // (
          case 0x29:
            paren--;break; // )
          case 0x5B:
            square++;break; // [
          case 0x5D:
            square--;break; // ]
          case 0x7B:
            curly++;break; // {
          case 0x7D:
            curly--;break; // }
        }
        if (c === 0x2f) {
          // /
          var j = i - 1;
          var p = void 0;
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') {
              break;
            }
          }
          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter() {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression;
  }

  function wrapFilter(exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return "_f(\"" + filter + "\")(" + exp + ")";
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return "_f(\"" + name + "\")(" + exp + "," + args;
    }
  }

  /*  */

  function baseWarn(msg) {
    console.error("[Vue compiler]: " + msg);
  }

  function pluckModuleFunction(modules, key) {
    return modules ? modules.map(function (m) {
      return m[key];
    }).filter(function (_) {
      return _;
    }) : [];
  }

  function addProp(el, name, value) {
    (el.props || (el.props = [])).push({ name: name, value: value });
  }

  function addAttr(el, name, value) {
    (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  }

  function addDirective(el, name, rawName, value, arg, modifiers) {
    (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  }

  function addHandler(el, name, value, modifiers, important, warn) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if ("development" !== 'production' && warn && modifiers.prevent && modifiers.passive) {
      warn('passive and prevent can\'t be used together. ' + 'Passive handler can\'t prevent default event.');
    }

    // check capture modifier
    if (modifiers.capture) {
      delete modifiers.capture;
      name = '!' + name; // mark the event as captured
    }
    if (modifiers.once) {
      delete modifiers.once;
      name = '~' + name; // mark the event as once
    }
    /* istanbul ignore if */
    if (modifiers.passive) {
      delete modifiers.passive;
      name = '&' + name; // mark the event as passive
    }

    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (name === 'click') {
      if (modifiers.right) {
        name = 'contextmenu';
        delete modifiers.right;
      } else if (modifiers.middle) {
        name = 'mouseup';
      }
    }

    var events;
    if (modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }

    var newHandler = { value: value };
    if (modifiers !== emptyObject) {
      newHandler.modifiers = modifiers;
    }

    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }
  }

  function getBindingAttr(el, name, getStatic) {
    var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue);
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return JSON.stringify(staticValue);
      }
    }
  }

  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.
  function getAndRemoveAttr(el, name, removeFromMap) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break;
        }
      }
    }
    if (removeFromMap) {
      delete el.attrsMap[name];
    }
    return val;
  }

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel(el, value, modifiers) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;

    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
      valueExpression = "(typeof " + baseValueExpression + " === 'string'" + "? " + baseValueExpression + ".trim()" + ": " + baseValueExpression + ")";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }
    var assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: "(" + value + ")",
      expression: "\"" + value + "\"",
      callback: "function (" + baseValueExpression + ") {" + assignment + "}"
    };
  }

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode(value, assignment) {
    var res = parseModel(value);
    if (res.key === null) {
      return value + "=" + assignment;
    } else {
      return "$set(" + res.exp + ", " + res.key + ", " + assignment + ")";
    }
  }

  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */

  var len;
  var str;
  var chr;
  var index$1;
  var expressionPos;
  var expressionEndPos;

  function parseModel(val) {
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');
      if (index$1 > -1) {
        return {
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        };
      } else {
        return {
          exp: val,
          key: null
        };
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    };
  }

  function next() {
    return str.charCodeAt(++index$1);
  }

  function eof() {
    return index$1 >= len;
  }

  function isStringStart(chr) {
    return chr === 0x22 || chr === 0x27;
  }

  function parseBracket(chr) {
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue;
      }
      if (chr === 0x5B) {
        inBracket++;
      }
      if (chr === 0x5D) {
        inBracket--;
      }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break;
      }
    }
  }

  function parseString(chr) {
    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break;
      }
    }
  }

  /*  */

  var warn$1;

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model(el, dir, _warn) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;

    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.");
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false;
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false;
    } else {
      warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "v-model is not supported on this element type. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.');
    }

    // ensure runtime directive metadata
    return true;
  }

  function genCheckboxModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked', "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === 'true' ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
    addHandler(el, 'change', "var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" + "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" + "}else{" + genAssignmentCode(value, '$$c') + "}", null, true);
  }

  function genRadioModel(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
    addProp(el, 'checked', "_q(" + value + "," + valueBinding + ")");
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect(el, value, modifiers) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? '_n(val)' : 'val') + "})";

    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + genAssignmentCode(value, assignment);
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel(el, value, modifiers) {
    var type = el.attrsMap.type;

    // warn if v-bind:value conflicts with v-model
    {
      var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
      if (value$1) {
        var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
        warn$1(binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " + 'because the latter already expands to a value binding internally');
      }
    }

    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy ? 'change' : type === 'range' ? RANGE_TOKEN : 'input';

    var valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', "(" + value + ")");
    addHandler(el, event, code, null, true);
    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents(on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler(handler, event, capture) {
    var _target = target$1; // save current target element in closure
    return function onceHandler() {
      var res = handler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    };
  }

  function add$1(event, handler, once$$1, capture, passive) {
    handler = withMacroTask(handler);
    if (once$$1) {
      handler = createOnceHandler(handler, event, capture);
    }
    target$1.addEventListener(event, handler, supportsPassive ? { capture: capture, passive: passive } : capture);
  }

  function remove$2(event, handler, capture, _target) {
    (_target || target$1).removeEventListener(event, handler._withTask || handler, capture);
  }

  function updateDOMListeners(oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return;
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };

  /*  */

  function updateDOMProps(oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return;
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (isUndef(props[key])) {
        elm[key] = '';
      }
    }
    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) {
          vnode.children.length = 0;
        }
        if (cur === oldProps[key]) {
          continue;
        }
        // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property
        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else {
        elm[key] = cur;
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue(elm, checkVal) {
    return !elm.composing && (elm.tagName === 'OPTION' || isDirty(elm, checkVal) || isInputChanged(elm, checkVal));
  }

  function isDirty(elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try {
      notInFocus = document.activeElement !== elm;
    } catch (e) {}
    return notInFocus && elm.value !== checkVal;
  }

  function isInputChanged(elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers) && modifiers.number) {
      return toNumber(value) !== toNumber(newVal);
    }
    if (isDef(modifiers) && modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
    return value !== newVal;
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };

  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res;
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData(data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle ? extend(data.staticStyle, style) : style;
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding(bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle);
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle);
    }
    return bindingStyle;
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle(vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
          extend(res, styleData);
        }
      }
    }

    if (styleData = normalizeStyleData(vnode.data)) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while (parentNode = parentNode.parent) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res;
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function (el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(name, val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];

  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && prop in emptyStyle) {
      return prop;
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  });

  function updateStyle(oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
      return;
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };

  /*  */

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(/\s+/).forEach(function (c) {
          return el.classList.add(c);
        });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass(el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return;
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(/\s+/).forEach(function (c) {
          return el.classList.remove(c);
        });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

  /*  */

  function resolveTransition(def) {
    if (!def) {
      return;
    }
    /* istanbul ignore else */
    if (typeof def === 'object') {
      var res = {};
      if (def.css !== false) {
        extend(res, autoCssTransition(def.name || 'v'));
      }
      extend(res, def);
      return res;
    } else if (typeof def === 'string') {
      return autoCssTransition(def);
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: name + "-enter",
      enterToClass: name + "-enter-to",
      enterActiveClass: name + "-enter-active",
      leaveClass: name + "-leave",
      leaveToClass: name + "-leave-to",
      leaveActiveClass: name + "-leave-active"
    };
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : /* istanbul ignore next */function (fn) {
    return fn();
  };

  function nextFrame(fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass(el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass(el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds(el, expectedType, cb) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) {
      return cb();
    }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function () {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function (e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo(el, expectedType) {
    var styles = window.getComputedStyle(el);
    var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
    var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = styles[animationProp + 'Delay'].split(', ');
    var animationDurations = styles[animationProp + 'Duration'].split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
      propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    };
  }

  function getTimeout(delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i]);
    }));
  }

  function toMs(s) {
    return Number(s.slice(0, -1)) * 1000;
  }

  /*  */

  function enter(vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return;
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      transitionNode = transitionNode.parent;
      context = transitionNode.context;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return;
    }

    var startClass = isAppear && appearClass ? appearClass : enterClass;
    var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
    var toClass = isAppear && appearToClass ? appearToClass : enterToClass;

    var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
    var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
    var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
    var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;

    var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

    if ("development" !== 'production' && explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        addTransitionClass(el, toClass);
        removeTransitionClass(el, startClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave(vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
      return rm();
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
      return;
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

    if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave() {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return;
      }
      // record leaving element
      if (!vnode.data.show) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          addTransitionClass(el, leaveToClass);
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled && !userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  // only used in dev mode
  function checkDuration(val, name, vnode) {
    if (typeof val !== 'number') {
      warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
    } else if (isNaN(val)) {
      warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
    }
  }

  function isValidDuration(val) {
    return typeof val === 'number' && !isNaN(val);
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength(fn) {
    if (isUndef(fn)) {
      return false;
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
    } else {
      return (fn._length || fn.length) > 1;
    }
  }

  function _enter(_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1(vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [attrs, klass, events, domProps, style, transition];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted(el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }
        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          if (!isAndroid) {
            el.addEventListener('compositionstart', onCompositionStart);
            el.addEventListener('compositionend', onCompositionEnd);
          }
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },

    componentUpdated: function componentUpdated(el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);
        if (curOptions.some(function (o, i) {
          return !looseEqual(o, prevOptions[i]);
        })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple ? binding.value.some(function (v) {
            return hasNoMatchingOption(v, curOptions);
          }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected(el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected(el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      "development" !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
      return;
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return;
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption(value, options) {
    return options.every(function (o) {
      return !looseEqual(o, value);
    });
  }

  function getValue(option) {
    return '_value' in option ? option._value : option.value;
  }

  function onCompositionStart(e) {
    e.target.composing = true;
  }

  function onCompositionEnd(e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) {
      return;
    }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger(el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode(vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
  }

  var show = {
    bind: function bind(el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update(el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (value === oldValue) {
        return;
      }
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: directive,
    show: show
  };

  /*  */

  // Provides transition support for a single element/component.
  // supports transition mode (out-in / in-out)

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild(vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children));
    } else {
      return vnode;
    }
  }

  function extractTransitionData(comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data;
  }

  function placeholder(h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      });
    }
  }

  function hasParentTransition(vnode) {
    while (vnode = vnode.parent) {
      if (vnode.data.transition) {
        return true;
      }
    }
  }

  function isSameChild(child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag;
  }

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render(h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return;
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(function (c) {
        return c.tag || isAsyncPlaceholder(c);
      });
      /* istanbul ignore if */
      if (!children.length) {
        return;
      }

      // warn multiple elements
      if ("development" !== 'production' && children.length > 1) {
        warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
      }

      var mode = this.mode;

      // warn invalid mode
      if ("development" !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
        warn('invalid <transition> mode: ' + mode, this.$parent);
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild;
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild;
      }

      if (this._leaving) {
        return placeholder(h, rawChild);
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + this._uid + "-";
      child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(function (d) {
        return d.name === 'show';
      })) {
        child.data.show = true;
      }

      if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data);
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild);
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild;
          }
          var delayedLeave;
          var performLeave = function () {
            delayedLeave();
          };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) {
            delayedLeave = leave;
          });
        }
      }

      return rawChild;
    }
  };

  /*  */

  // Provides transition support for list items.
  // supports move transitions using the FLIP technique.

  // Because the vdom's children update algorithm is "unstable" - i.e.
  // it doesn't guarantee the relative positioning of removed elements,
  // we force transition-group to update its children into two passes:
  // in the first pass, we remove all nodes that need to be removed,
  // triggering their leaving transition; in the second pass, we insert/move
  // into the final desired state. This way in the second pass removed
  // nodes will remain where they should be.

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    render: function render(h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c;(c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
            warn("<transition-group> children must be keyed: <" + name + ">");
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children);
    },

    beforeUpdate: function beforeUpdate() {
      // force removing pass
      this.__patch__(this._vnode, this.kept, false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
      );
      this._vnode = this.kept;
    },

    updated: function updated() {
      var children = this.prevChildren;
      var moveClass = this.moveClass || (this.name || 'v') + '-move';
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return;
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line
      this._reflow = document.body.offsetHeight;

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove(el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false;
        }
        /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove;
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) {
            removeClass(clone, cls);
          });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return this._hasMove = info.hasTransform;
      }
    }
  };

  function callPendingCbs(c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition(c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation(c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };

  /*  */

  // install platform specific utils
  Vue$3.config.mustUseProp = mustUseProp;
  Vue$3.config.isReservedTag = isReservedTag;
  Vue$3.config.isReservedAttr = isReservedAttr;
  Vue$3.config.getTagNamespace = getTagNamespace;
  Vue$3.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue$3.options.directives, platformDirectives);
  extend(Vue$3.options.components, platformComponents);

  // install platform patch function
  Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue$3.prototype.$mount = function (el, hydrating) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating);
  };

  // devtools global hook
  /* istanbul ignore next */
  Vue$3.nextTick(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue$3);
      } else if ("development" !== 'production' && isChrome) {
        console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
      }
    }
    if ("development" !== 'production' && config.productionTip !== false && inBrowser && typeof console !== 'undefined') {
      console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
    }
  }, 0);

  /*  */

  var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
  });

  function parseText(text, delimiters) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return;
    }
    var tokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index;
    while (match = tagRE.exec(text)) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        tokens.push(JSON.stringify(text.slice(lastIndex, index)));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push("_s(" + exp + ")");
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      tokens.push(JSON.stringify(text.slice(lastIndex)));
    }
    return tokens.join('+');
  }

  /*  */

  function transformNode(el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if ("development" !== 'production' && staticClass) {
      var expression = parseText(staticClass, options.delimiters);
      if (expression) {
        warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.');
      }
    }
    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData(el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + el.staticClass + ",";
    }
    if (el.classBinding) {
      data += "class:" + el.classBinding + ",";
    }
    return data;
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData
  };

  /*  */

  function transformNode$1(el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var expression = parseText(staticStyle, options.delimiters);
        if (expression) {
          warn("style=\"" + staticStyle + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.');
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1(el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + el.staticStyle + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + el.styleBinding + "),";
    }
    return data;
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1
  };

  /*  */

  var decoder;

  var he = {
    decode: function decode(html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent;
    }
  };

  /*  */

  var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr');

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source');

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track');

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  /*!
   * HTML Parser By John Resig (ejohn.org)
   * Modified by Juriy "kangax" Zaytsev
   * Original code by Erik Arvidsson, Mozilla Public License
   * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
   */

  // Regular Expressions for parsing tags and attributes
  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  // could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
  // but for Vue templates we can enforce a simple charset
  var ncname = '[a-zA-Z_][\\w\\-\\.]*';
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp("^<" + qnameCapture);
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp("^<\\/" + qnameCapture + "[^>]*>");
  var doctype = /^<!DOCTYPE [^>]+>/i;
  var comment = /^<!--/;
  var conditionalComment = /^<!\[/;

  var IS_REGEX_CAPTURING_BROKEN = false;
  'x'.replace(/x(.)?/g, function (m, g) {
    IS_REGEX_CAPTURING_BROKEN = g === '';
  });

  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};

  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t'
  };
  var encodedAttr = /&(?:lt|gt|quot|amp);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

  // #5992
  var isIgnoreNewlineTag = makeMap('pre,textarea', true);
  var shouldIgnoreFirstNewline = function (tag, html) {
    return tag && isIgnoreNewlineTag(tag) && html[0] === '\n';
  };

  function decodeAttr(value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) {
      return decodingMap[match];
    });
  }

  function parseHTML(html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd));
              }
              advance(commentEnd + 3);
              continue;
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue;
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue;
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue;
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            if (shouldIgnoreFirstNewline(lastTag, html)) {
              advance(1);
            }
            continue;
          }
        }

        var text = void 0,
            rest = void 0,
            next = void 0;
        if (textEnd >= 0) {
          rest = html.slice(textEnd);
          while (!endTag.test(rest) && !startTagOpen.test(rest) && !comment.test(rest) && !conditionalComment.test(rest)) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);
            if (next < 0) {
              break;
            }
            textEnd += next;
            rest = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
          advance(textEnd);
        }

        if (textEnd < 0) {
          text = html;
          html = '';
        }

        if (options.chars && text) {
          options.chars(text);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text.replace(/<!--([\s\S]*?)-->/g, '$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }
          if (options.chars) {
            options.chars(text);
          }
          return '';
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if ("development" !== 'production' && !stack.length && options.warn) {
          options.warn("Mal-formatted tag at end of template: \"" + html + "\"");
        }
        break;
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance(n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag() {
      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
          advance(attr[0].length);
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match;
        }
      }
    }

    function handleStartTag(match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
        if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
          if (args[3] === '') {
            delete args[3];
          }
          if (args[4] === '') {
            delete args[4];
          }
          if (args[5] === '') {
            delete args[5];
          }
        }
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href' ? options.shouldDecodeNewlinesForHref : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };
      }

      if (!unary) {
        stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag(tagName, start, end) {
      var pos, lowerCasedTagName;
      if (start == null) {
        start = index;
      }
      if (end == null) {
        end = index;
      }

      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
      }

      // Find the closest opened tag of the same type
      if (tagName) {
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break;
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if ("development" !== 'production' && (i > pos || !tagName) && options.warn) {
            options.warn("tag <" + stack[i].tag + "> has no matching end tag.");
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

  /*  */

  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:/;
  var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
  var forIteratorRE = /\((\{[^}]*\}|[^,{]*),([^,]*)(?:,([^,]*))?\)/;
  var stripParensRE = /^\(|\)$/g;

  var argRE = /:(.*)$/;
  var bindRE = /^:|^v-bind:/;
  var modifierRE = /\.[^.]+/g;

  var decodeHTMLCached = cached(he.decode);

  // configurable state
  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;

  function createASTElement(tag, attrs, parent) {
    return {
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      parent: parent,
      children: []
    };
  }

  /**
   * Convert HTML string to AST.
   */
  function parse(template, options) {
    warn$2 = options.warn || baseWarn;

    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;

    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

    delimiters = options.delimiters;

    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce(msg) {
      if (!warned) {
        warned = true;
        warn$2(msg);
      }
    }

    function endPre(element) {
      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      start: function start(tag, attrs, unary) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);
        if (ns) {
          element.ns = ns;
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          "development" !== 'production' && warn$2('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">" + ', as they will not be parsed.');
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
          // element-scope stuff
          processElement(element, options);
        }

        function checkRootConstraints(el) {
          {
            if (el.tag === 'slot' || el.tag === 'template') {
              warnOnce("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes.');
            }
            if (el.attrsMap.hasOwnProperty('v-for')) {
              warnOnce('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements.');
            }
          }
        }

        // tree management
        if (!root) {
          root = element;
          checkRootConstraints(root);
        } else if (!stack.length) {
          // allow root elements with v-if, v-else-if and v-else
          if (root.if && (element.elseif || element.else)) {
            checkRootConstraints(element);
            addIfCondition(root, {
              exp: element.elseif,
              block: element
            });
          } else {
            warnOnce("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.");
          }
        }
        if (currentParent && !element.forbidden) {
          if (element.elseif || element.else) {
            processIfConditions(element, currentParent);
          } else if (element.slotScope) {
            // scoped slot
            currentParent.plain = false;
            var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          } else {
            currentParent.children.push(element);
            element.parent = currentParent;
          }
        }
        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          endPre(element);
        }
        // apply post-transforms
        for (var i$1 = 0; i$1 < postTransforms.length; i$1++) {
          postTransforms[i$1](element, options);
        }
      },

      end: function end() {
        // remove trailing whitespace
        var element = stack[stack.length - 1];
        var lastNode = element.children[element.children.length - 1];
        if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
          element.children.pop();
        }
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        endPre(element);
      },

      chars: function chars(text) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce('Component template requires a root element, rather than just text.');
            } else if (text = text.trim()) {
              warnOnce("text \"" + text + "\" outside root element will be ignored.");
            }
          }
          return;
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {
          return;
        }
        var children = currentParent.children;
        text = inPre || text.trim() ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
        if (text) {
          var expression;
          if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
            children.push({
              type: 2,
              expression: expression,
              text: text
            });
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            children.push({
              type: 3,
              text: text
            });
          }
        }
      },
      comment: function comment(text) {
        currentParent.children.push({
          type: 3,
          text: text,
          isComment: true
        });
      }
    });
    return root;
  }

  function processPre(el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs(el) {
    var l = el.attrsList.length;
    if (l) {
      var attrs = el.attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        attrs[i] = {
          name: el.attrsList[i].name,
          value: JSON.stringify(el.attrsList[i].value)
        };
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement(element, options) {
    processKey(element);

    // determine whether this is a plain element after
    // removing structural attributes
    element.plain = !element.key && !element.attrsList.length;

    processRef(element);
    processSlot(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }
    processAttrs(element);
  }

  function processKey(el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
      if ("development" !== 'production' && el.tag === 'template') {
        warn$2("<template> cannot be keyed. Place the key on real elements instead.");
      }
      el.key = exp;
    }
  }

  function processRef(el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor(el) {
    var exp;
    if (exp = getAndRemoveAttr(el, 'v-for')) {
      var inMatch = exp.match(forAliasRE);
      if (!inMatch) {
        "development" !== 'production' && warn$2("Invalid v-for expression: " + exp);
        return;
      }
      el.for = inMatch[2].trim();
      var alias = inMatch[1].trim();
      var iteratorMatch = alias.match(forIteratorRE);
      if (iteratorMatch) {
        el.alias = iteratorMatch[1].trim();
        el.iterator1 = iteratorMatch[2].trim();
        if (iteratorMatch[3]) {
          el.iterator2 = iteratorMatch[3].trim();
        }
      } else {
        el.alias = alias.replace(stripParensRE, '');
      }
    }
  }

  function processIf(el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions(el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + " " + "used on element <" + el.tag + "> without corresponding v-if.");
    }
  }

  function findPrevElement(children) {
    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i];
      } else {
        if ("development" !== 'production' && children[i].text !== ' ') {
          warn$2("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.");
        }
        children.pop();
      }
    }
  }

  function addIfCondition(el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce(el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }
  }

  function processSlot(el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if ("development" !== 'production' && el.key) {
        warn$2("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.");
      }
    } else {
      var slotScope;
      if (el.tag === 'template') {
        slotScope = getAndRemoveAttr(el, 'scope');
        /* istanbul ignore if */
        if ("development" !== 'production' && slotScope) {
          warn$2("the \"scope\" attribute for scoped slots have been deprecated and " + "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " + "can also be used on plain elements in addition to <template> to " + "denote scoped slots.", true);
        }
        el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
      } else if (slotScope = getAndRemoveAttr(el, 'slot-scope')) {
        /* istanbul ignore if */
        if ("development" !== 'production' && el.attrsMap['v-for']) {
          warn$2("Ambiguous combined usage of slot-scope and v-for on <" + el.tag + "> " + "(v-for takes higher priority). Use a wrapper <template> for the " + "scoped slot to make it clearer.", true);
        }
        el.slotScope = slotScope;
      }
      var slotTarget = getBindingAttr(el, 'slot');
      if (slotTarget) {
        el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
        // preserve slot as an attribute for native shadow DOM compat
        // only for non-scoped slots.
        if (el.tag !== 'template' && !el.slotScope) {
          addAttr(el, 'slot', slotTarget);
        }
      }
    }
  }

  function processComponent(el) {
    var binding;
    if (binding = getBindingAttr(el, 'is')) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs(el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, isProp;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name);
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) {
          // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isProp = false;
          if (modifiers) {
            if (modifiers.prop) {
              isProp = true;
              name = camelize(name);
              if (name === 'innerHtml') {
                name = 'innerHTML';
              }
            }
            if (modifiers.camel) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              addHandler(el, "update:" + camelize(name), genAssignmentCode(value, "$event"));
            }
          }
          if (isProp || !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
            addProp(el, name, value);
          } else {
            addAttr(el, name, value);
          }
        } else if (onRE.test(name)) {
          // v-on
          name = name.replace(onRE, '');
          addHandler(el, name, value, modifiers, false, warn$2);
        } else {
          // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
          }
          addDirective(el, name, rawName, value, arg, modifiers);
          if ("development" !== 'production' && name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var expression = parseText(value, delimiters);
          if (expression) {
            warn$2(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.');
          }
        }
        addAttr(el, name, JSON.stringify(value));
        // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation
        if (!el.component && name === 'muted' && platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true');
        }
      }
    }
  }

  function checkInFor(el) {
    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true;
      }
      parent = parent.parent;
    }
    return false;
  }

  function parseModifiers(name) {
    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function (m) {
        ret[m.slice(1)] = true;
      });
      return ret;
    }
  }

  function makeAttrsMap(attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if ("development" !== 'production' && map[attrs[i].name] && !isIE && !isEdge) {
        warn$2('duplicate attribute: ' + attrs[i].name);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map;
  }

  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag(el) {
    return el.tag === 'script' || el.tag === 'style';
  }

  function isForbiddenTag(el) {
    return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug(attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res;
  }

  function checkForAliasModel(el, value) {
    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.");
      }
      _el = _el.parent;
    }
  }

  /*  */

  /**
   * Expand input[v-model] with dyanmic type bindings into v-if-else chains
   * Turn this:
   *   <input v-model="data[type]" :type="type">
   * into this:
   *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
   *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
   *   <input v-else :type="type" v-model="data[type]">
   */

  function preTransformNode(el, options) {
    if (el.tag === 'input') {
      var map = el.attrsMap;
      if (map['v-model'] && (map['v-bind:type'] || map[':type'])) {
        var typeBinding = getBindingAttr(el, 'type');
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? "&&(" + ifCondition + ")" : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
        // 1. checkbox
        var branch0 = cloneASTElement(el);
        // process for on the main node
        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed
        branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0.if,
          block: branch0
        });
        // 2. add radio else-if condition
        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        });
        // 3. other
        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0.else = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return branch0;
      }
    }
  }

  function cloneASTElement(el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent);
  }

  function addRawAttr(el, name, value) {
    el.attrsMap[name] = value;
    el.attrsList.push({ name: name, value: value });
  }

  var model$2 = {
    preTransformNode: preTransformNode
  };

  var modules$1 = [klass$1, style$1, model$2];

  /*  */

  function text(el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', "_s(" + dir.value + ")");
    }
  }

  /*  */

  function html(el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', "_s(" + dir.value + ")");
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };

  /*  */

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };

  /*  */

  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1);

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize(root, options) {
    if (!root) {
      return;
    }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic$1(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1(keys) {
    return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs' + (keys ? ',' + keys : ''));
  }

  function markStatic$1(node) {
    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null) {
        return;
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);
          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots(node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
        node.staticRoot = true;
        return;
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic(node) {
    if (node.type === 2) {
      // expression
      return false;
    }
    if (node.type === 3) {
      // text
      return true;
    }
    return !!(node.pre || !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
  }

  function isDirectChildOfTemplateFor(node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false;
      }
      if (node.for) {
        return true;
      }
    }
    return false;
  }

  /*  */

  var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
  var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

  // keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function (condition) {
    return "if(" + condition + ")return null;";
  };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers(events, isNative, warn) {
    var res = isNative ? 'nativeOn:{' : 'on:{';
    for (var name in events) {
      res += "\"" + name + "\":" + genHandler(name, events[name]) + ",";
    }
    return res.slice(0, -1) + '}';
  }

  function genHandler(name, handler) {
    if (!handler) {
      return 'function(){}';
    }

    if (Array.isArray(handler)) {
      return "[" + handler.map(function (handler) {
        return genHandler(name, handler);
      }).join(',') + "]";
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);

    if (!handler.modifiers) {
      return isMethodPath || isFunctionExpression ? handler.value : "function($event){" + handler.value + "}"; // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key];
          // left/right
          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = handler.modifiers;
          genModifierCode += genGuard(['ctrl', 'shift', 'alt', 'meta'].filter(function (keyModifier) {
            return !modifiers[keyModifier];
          }).map(function (keyModifier) {
            return "$event." + keyModifier + "Key";
          }).join('||'));
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code += genKeyFilter(keys);
      }
      // Make sure modifiers like prevent and stop get executed after key filtering
      if (genModifierCode) {
        code += genModifierCode;
      }
      var handlerCode = isMethodPath ? handler.value + '($event)' : isFunctionExpression ? "(" + handler.value + ")($event)" : handler.value;
      return "function($event){" + code + handlerCode + "}";
    }
  }

  function genKeyFilter(keys) {
    return "if(!('button' in $event)&&" + keys.map(genFilterCode).join('&&') + ")return null;";
  }

  function genFilterCode(key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
      return "$event.keyCode!==" + keyVal;
    }
    var code = keyCodes[key];
    return "_k($event.keyCode," + JSON.stringify(key) + "," + JSON.stringify(code) + "," + "$event.key)";
  }

  /*  */

  function on(el, dir) {
    if ("development" !== 'production' && dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) {
      return "_g(" + code + "," + dir.value + ")";
    };
  }

  /*  */

  function bind$1(el, dir) {
    el.wrapData = function (code) {
      return "_b(" + code + ",'" + el.tag + "'," + dir.value + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")";
    };
  }

  /*  */

  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop
  };

  /*  */

  var CodegenState = function CodegenState(options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;
    this.maybeComponent = function (el) {
      return !isReservedTag(el.tag);
    };
    this.onceId = 0;
    this.staticRenderFns = [];
  };

  function generate(ast, options) {
    var state = new CodegenState(options);
    var code = ast ? genElement(ast, state) : '_c("div")';
    return {
      render: "with(this){return " + code + "}",
      staticRenderFns: state.staticRenderFns
    };
  }

  function genElement(el, state) {
    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state);
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state);
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state);
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state);
    } else if (el.tag === 'template' && !el.slotTarget) {
      return genChildren(el, state) || 'void 0';
    } else if (el.tag === 'slot') {
      return genSlot(el, state);
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data = el.plain ? undefined : genData$2(el, state);

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + el.tag + "'" + (data ? "," + data : '') + (children ? "," + children : '') + ")";
      }
      // module transforms
      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }
      return code;
    }
  }

  // hoist static sub-trees out
  function genStatic(el, state, once$$1) {
    el.staticProcessed = true;
    state.staticRenderFns.push("with(this){return " + genElement(el, state) + "}");
    return "_m(" + (state.staticRenderFns.length - 1) + "," + (el.staticInFor ? 'true' : 'false') + "," + (once$$1 ? 'true' : 'false') + ")";
  }

  // v-once
  function genOnce(el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el, state);
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break;
        }
        parent = parent.parent;
      }
      if (!key) {
        "development" !== 'production' && state.warn("v-once can only be used inside v-for that is keyed. ");
        return genElement(el, state);
      }
      return "_o(" + genElement(el, state) + "," + state.onceId++ + "," + key + ")";
    } else {
      return genStatic(el, state, true);
    }
  }

  function genIf(el, state, altGen, altEmpty) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty);
  }

  function genIfConditions(conditions, state, altGen, altEmpty) {
    if (!conditions.length) {
      return altEmpty || '_e()';
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions, state, altGen, altEmpty);
    } else {
      return "" + genTernaryExp(condition.block);
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp(el) {
      return altGen ? altGen(el, state) : el.once ? genOnce(el, state) : genElement(el, state);
    }
  }

  function genFor(el, state, altGen, altHelper) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
    var iterator2 = el.iterator2 ? "," + el.iterator2 : '';

    if ("development" !== 'production' && state.maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key) {
      state.warn("<" + el.tag + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", true /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion
    return (altHelper || '_l') + "((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + (altGen || genElement)(el, state) + '})';
  }

  function genData$2(el, state) {
    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs) {
      data += dirs + ',';
    }

    // key
    if (el.key) {
      data += "key:" + el.key + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + el.ref + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + el.tag + "\",";
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:{" + genProps(el.attrs) + "},";
    }
    // DOM props
    if (el.props) {
      data += "domProps:{" + genProps(el.props) + "},";
    }
    // event handlers
    if (el.events) {
      data += genHandlers(el.events, false, state.warn) + ",";
    }
    if (el.nativeEvents) {
      data += genHandlers(el.nativeEvents, true, state.warn) + ",";
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + el.slotTarget + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += genScopedSlots(el.scopedSlots, state) + ",";
    }
    // component v-model
    if (el.model) {
      data += "model:{value:" + el.model.value + ",callback:" + el.model.callback + ",expression:" + el.model.expression + "},";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }
    return data;
  }

  function genDirectives(el, state) {
    var dirs = el.directives;
    if (!dirs) {
      return;
    }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : '') + (dir.arg ? ",arg:\"" + dir.arg + "\"" : '') + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : '') + "},";
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']';
    }
  }

  function genInlineTemplate(el, state) {
    var ast = el.children[0];
    if ("development" !== 'production' && (el.children.length !== 1 || ast.type !== 1)) {
      state.warn('Inline-template components must have exactly one child element.');
    }
    if (ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function (code) {
        return "function(){" + code + "}";
      }).join(',') + "]}";
    }
  }

  function genScopedSlots(slots, state) {
    return "scopedSlots:_u([" + Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state);
    }).join(',') + "])";
  }

  function genScopedSlot(key, el, state) {
    if (el.for && !el.forProcessed) {
      return genForScopedSlot(key, el, state);
    }
    var fn = "function(" + String(el.slotScope) + "){" + "return " + (el.tag === 'template' ? el.if ? el.if + "?" + (genChildren(el, state) || 'undefined') + ":undefined" : genChildren(el, state) || 'undefined' : genElement(el, state)) + "}";
    return "{key:" + key + ",fn:" + fn + "}";
  }

  function genForScopedSlot(key, el, state) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
    var iterator2 = el.iterator2 ? "," + el.iterator2 : '';
    el.forProcessed = true; // avoid recursion
    return "_l((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + genScopedSlot(key, el, state) + '})';
  }

  function genChildren(el, state, checkSkip, altGenElement, altGenNode) {
    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 && el$1.for && el$1.tag !== 'template' && el$1.tag !== 'slot') {
        return (altGenElement || genElement)(el$1, state);
      }
      var normalizationType = checkSkip ? getNormalizationType(children, state.maybeComponent) : 0;
      var gen = altGenNode || genNode;
      return "[" + children.map(function (c) {
        return gen(c, state);
      }).join(',') + "]" + (normalizationType ? "," + normalizationType : '');
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType(children, maybeComponent) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue;
      }
      if (needsNormalization(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return needsNormalization(c.block);
      })) {
        res = 2;
        break;
      }
      if (maybeComponent(el) || el.ifConditions && el.ifConditions.some(function (c) {
        return maybeComponent(c.block);
      })) {
        res = 1;
      }
    }
    return res;
  }

  function needsNormalization(el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot';
  }

  function genNode(node, state) {
    if (node.type === 1) {
      return genElement(node, state);
    }if (node.type === 3 && node.isComment) {
      return genComment(node);
    } else {
      return genText(node);
    }
  }

  function genText(text) {
    return "_v(" + (text.type === 2 ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")";
  }

  function genComment(comment) {
    return "_e(" + JSON.stringify(comment.text) + ")";
  }

  function genSlot(el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? "," + children : '');
    var attrs = el.attrs && "{" + el.attrs.map(function (a) {
      return camelize(a.name) + ":" + a.value;
    }).join(',') + "}";
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }
    return res + ')';
  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent(componentName, el, state) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return "_c(" + componentName + "," + genData$2(el, state) + (children ? "," + children : '') + ")";
  }

  function genProps(props) {
    var res = '';
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      res += "\"" + prop.name + "\":" + transformSpecialNewlines(prop.value) + ",";
    }
    return res.slice(0, -1);
  }

  // #3895, #4268
  function transformSpecialNewlines(text) {
    return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  }

  /*  */

  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b');

  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors(ast) {
    var errors = [];
    if (ast) {
      checkNode(ast, errors);
    }
    return errors;
  }

  function checkNode(node, errors) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            if (name === 'v-for') {
              checkFor(node, "v-for=\"" + value + "\"", errors);
            } else if (onRE.test(name)) {
              checkEvent(value, name + "=\"" + value + "\"", errors);
            } else {
              checkExpression(value, name + "=\"" + value + "\"", errors);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], errors);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, errors);
    }
  }

  function checkEvent(exp, text, errors) {
    var stipped = exp.replace(stripStringRE, '');
    var keywordMatch = stipped.match(unaryOperatorsRE);
    if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
      errors.push("avoid using JavaScript unary operator as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text.trim());
    }
    checkExpression(exp, text, errors);
  }

  function checkFor(node, text, errors) {
    checkExpression(node.for || '', text, errors);
    checkIdentifier(node.alias, 'v-for alias', text, errors);
    checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
    checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
  }

  function checkIdentifier(ident, type, text, errors) {
    if (typeof ident === 'string') {
      try {
        new Function("var " + ident + "=_");
      } catch (e) {
        errors.push("invalid " + type + " \"" + ident + "\" in expression: " + text.trim());
      }
    }
  }

  function checkExpression(exp, text, errors) {
    try {
      new Function("return " + exp);
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        errors.push("avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\"\n  Raw expression: " + text.trim());
      } else {
        errors.push("invalid expression: " + e.message + " in\n\n" + "    " + exp + "\n\n" + "  Raw expression: " + text.trim() + "\n");
      }
    }
  }

  /*  */

  function createFunction(code, errors) {
    try {
      return new Function(code);
    } catch (err) {
      errors.push({ err: err, code: code });
      return noop;
    }
  }

  function createCompileToFunctionFn(compile) {
    var cache = Object.create(null);

    return function compileToFunctions(template, options, vm) {
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;

      /* istanbul ignore if */
      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
          }
        }
      }

      // check cache
      var key = options.delimiters ? String(options.delimiters) + template : template;
      if (cache[key]) {
        return cache[key];
      }

      // compile
      var compiled = compile(template, options);

      // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          warn$$1("Error compiling template:\n\n" + template + "\n\n" + compiled.errors.map(function (e) {
            return "- " + e;
          }).join('\n') + '\n', vm);
        }
        if (compiled.tips && compiled.tips.length) {
          compiled.tips.forEach(function (msg) {
            return tip(msg, vm);
          });
        }
      }

      // turn code into functions
      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
        return createFunction(code, fnGenErrors);
      });

      // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use
      /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1("Failed to generate render function:\n\n" + fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return err.toString() + " in\n\n" + code + "\n";
          }).join('\n'), vm);
        }
      }

      return cache[key] = res;
    };
  }

  /*  */

  function createCompilerCreator(baseCompile) {
    return function createCompiler(baseOptions) {
      function compile(template, options) {
        var finalOptions = Object.create(baseOptions);
        var errors = [];
        var tips = [];
        finalOptions.warn = function (msg, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          // merge custom modules
          if (options.modules) {
            finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
          }
          // merge custom directives
          if (options.directives) {
            finalOptions.directives = extend(Object.create(baseOptions.directives), options.directives);
          }
          // copy other options
          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        var compiled = baseCompile(template, finalOptions);
        {
          errors.push.apply(errors, detectErrors(compiled.ast));
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled;
      }

      return {
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      };
    };
  }

  /*  */

  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.
  var createCompiler = createCompilerCreator(function baseCompile(template, options) {
    var ast = parse(template.trim(), options);
    optimize(ast, options);
    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    };
  });

  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compileToFunctions = ref$1.compileToFunctions;

  /*  */

  // check whether current browser encodes a char inside attribute values
  var div;
  function getShouldDecode(href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0;
  }

  // #3663: IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
  // #6828: chrome encodes content in a[href]
  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML;
  });

  var mount = Vue$3.prototype.$mount;
  Vue$3.prototype.$mount = function (el, hydrating) {
    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      "development" !== 'production' && warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
      return this;
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if ("development" !== 'production' && !template) {
              warn("Template element not found or is empty: " + options.template, this);
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this;
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
        /* istanbul ignore if */
        if ("development" !== 'production' && config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;

        /* istanbul ignore if */
        if ("development" !== 'production' && config.performance && mark) {
          mark('compile end');
          measure("vue " + this._name + " compile", 'compile', 'compile end');
        }
      }
    }
    return mount.call(this, el, hydrating);
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML(el) {
    if (el.outerHTML) {
      return el.outerHTML;
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML;
    }
  }

  Vue$3.compile = compileToFunctions;

  return Vue$3;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(3).setImmediate))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(2)))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ })
/******/ ]);