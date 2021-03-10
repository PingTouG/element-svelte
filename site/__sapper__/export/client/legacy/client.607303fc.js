function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$1(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }

    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
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
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
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
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
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
          } // Be forgiving, per 25.3.3.3.3 of the spec:
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
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
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

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

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
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
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
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
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
            context.arg = undefined$1;
          }

          return !!caught;
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
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
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
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
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
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
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
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  module.exports );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
});

var regenerator = runtime_1;

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf$1(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

var _typeof_1$1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof_1$1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$1(self);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function noop() {}

function assign(tar, src) {
  // @ts-ignore
  for (var k in src) {
    tar[k] = src[k];
  }

  return tar;
}

function add_location(element, file, line, column, char) {
  element.__svelte_meta = {
    loc: {
      file: file,
      line: line,
      column: column,
      char: char
    }
  };
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && _typeof(a) === 'object' || typeof a === 'function';
}

function is_empty(obj) {
  return Object.keys(obj).length === 0;
}

function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    var slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}

function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}

function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    var lets = definition[2](fn(dirty));

    if ($$scope.dirty === undefined) {
      return lets;
    }

    if (_typeof(lets) === 'object') {
      var merged = [];
      var len = Math.max($$scope.dirty.length, lets.length);

      for (var i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }

      return merged;
    }

    return $$scope.dirty | lets;
  }

  return $$scope.dirty;
}

function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
  var slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);

  if (slot_changes) {
    var slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}

function append(target, node) {
  target.appendChild(node);
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function element(name) {
  return document.createElement(name);
}

function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return function () {
    return node.removeEventListener(event, handler, options);
  };
}

function prevent_default(fn) {
  return function (event) {
    event.preventDefault(); // @ts-ignore

    return fn.call(this, event);
  };
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

function children(element) {
  return Array.from(element.childNodes);
}

function claim_element(nodes, name, attributes, svg) {
  for (var i = 0; i < nodes.length; i += 1) {
    var node = nodes[i];

    if (node.nodeName === name) {
      var j = 0;
      var remove = [];

      while (j < node.attributes.length) {
        var attribute = node.attributes[j++];

        if (!attributes[attribute.name]) {
          remove.push(attribute.name);
        }
      }

      for (var k = 0; k < remove.length; k++) {
        node.removeAttribute(remove[k]);
      }

      return nodes.splice(i, 1)[0];
    }
  }

  return svg ? svg_element(name) : element(name);
}

function claim_text(nodes, data) {
  for (var i = 0; i < nodes.length; i += 1) {
    var node = nodes[i];

    if (node.nodeType === 3) {
      node.data = '' + data;
      return nodes.splice(i, 1)[0];
    }
  }

  return text(data);
}

function claim_space(nodes) {
  return claim_text(nodes, ' ');
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

function custom_event(type, detail) {
  var e = document.createEvent('CustomEvent');
  e.initCustomEvent(type, false, false, detail);
  return e;
}

function query_selector_all(selector) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
  return Array.from(parent.querySelectorAll(selector));
}

var current_component;

function set_current_component(component) {
  current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error('Function called outside component initialization');
  return current_component;
}

function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}

function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}

var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = Promise.resolve();
var update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

var flushing = false;
var seen_callbacks = new Set();

function flush() {
  if (flushing) return;
  flushing = true;

  do {
    // first, call beforeUpdate functions
    // and update components
    for (var i = 0; i < dirty_components.length; i += 1) {
      var component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }

    set_current_component(null);
    dirty_components.length = 0;

    while (binding_callbacks.length) {
      binding_callbacks.pop()();
    } // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (var _i = 0; _i < render_callbacks.length; _i += 1) {
      var callback = render_callbacks[_i];

      if (!seen_callbacks.has(callback)) {
        // ...so guard against infinite loops
        seen_callbacks.add(callback);
        callback();
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    var dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}

var outroing = new Set();
var outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group

  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }

  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(function () {
      outroing.delete(block);

      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}

var globals = typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : global;

function destroy_block(block, lookup) {
  block.d(1);
  lookup.delete(block.key);
}

function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
  var o = old_blocks.length;
  var n = list.length;
  var i = o;
  var old_indexes = {};

  while (i--) {
    old_indexes[old_blocks[i].key] = i;
  }

  var new_blocks = [];
  var new_lookup = new Map();
  var deltas = new Map();
  i = n;

  while (i--) {
    var child_ctx = get_context(ctx, list, i);
    var key = get_key(child_ctx);
    var block = lookup.get(key);

    if (!block) {
      block = create_each_block(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(child_ctx, dirty);
    }

    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
  }

  var will_move = new Set();
  var did_move = new Set();

  function insert(block) {
    transition_in(block, 1);
    block.m(node, next);
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }

  while (o && n) {
    var new_block = new_blocks[n - 1];
    var old_block = old_blocks[o - 1];
    var new_key = new_block.key;
    var old_key = old_block.key;

    if (new_block === old_block) {
      // do nothing
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      // remove old block
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }

  while (o--) {
    var _old_block = old_blocks[o];
    if (!new_lookup.has(_old_block.key)) destroy(_old_block, lookup);
  }

  while (n) {
    insert(new_blocks[n - 1]);
  }

  return new_blocks;
}

function validate_each_keys(ctx, list, get_context, get_key) {
  var keys = new Set();

  for (var i = 0; i < list.length; i++) {
    var key = get_key(get_context(ctx, list, i));

    if (keys.has(key)) {
      throw new Error('Cannot have duplicate keys in a keyed each');
    }

    keys.add(key);
  }
}

function get_spread_update(levels, updates) {
  var update = {};
  var to_null_out = {};
  var accounted_for = {
    $$scope: 1
  };
  var i = levels.length;

  while (i--) {
    var o = levels[i];
    var n = updates[i];

    if (n) {
      for (var key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (var _key3 in n) {
        if (!accounted_for[_key3]) {
          update[_key3] = n[_key3];
          accounted_for[_key3] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (var _key4 in o) {
        accounted_for[_key4] = 1;
      }
    }
  }

  for (var _key5 in to_null_out) {
    if (!(_key5 in update)) update[_key5] = undefined;
  }

  return update;
}

function get_spread_object(spread_props) {
  return _typeof(spread_props) === 'object' && spread_props !== null ? spread_props : {};
} // source: https://html.spec.whatwg.org/multipage/indices.html

function create_component(block) {
  block && block.c();
}

function claim_component(block, parent_nodes) {
  block && block.l(parent_nodes);
}

function mount_component(component, target, anchor, customElement) {
  var _component$$$ = component.$$,
      fragment = _component$$$.fragment,
      on_mount = _component$$$.on_mount,
      on_destroy = _component$$$.on_destroy,
      after_update = _component$$$.after_update;
  fragment && fragment.m(target, anchor);

  if (!customElement) {
    // onMount happens before the initial afterUpdate
    add_render_callback(function () {
      var new_on_destroy = on_mount.map(run).filter(is_function);

      if (on_destroy) {
        on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
      } else {
        // Edge case - component was destroyed immediately,
        // most likely as a result of a binding initialising
        run_all(new_on_destroy);
      }

      component.$$.on_mount = [];
    });
  }

  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  var $$ = component.$$;

  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}

function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }

  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init$1(component, options, instance, create_fragment, not_equal, props) {
  var dirty = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [-1];
  var parent_component = current_component;
  set_current_component(component);
  var $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props: props,
    update: noop,
    not_equal: not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : []),
    // everything else
    callbacks: blank_object(),
    dirty: dirty,
    skip_bound: false
  };
  var ready = false;
  $$.ctx = instance ? instance(component, options.props || {}, function (i, ret) {
    var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }

    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update); // `false` as a special case of no DOM component

  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

  if (options.target) {
    if (options.hydrate) {
      var nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    flush();
  }

  set_current_component(parent_component);
}
/**
 * Base class for Svelte components. Used when dev=false.
 */


var SvelteComponent = /*#__PURE__*/function () {
  function SvelteComponent() {
    _classCallCheck$1(this, SvelteComponent);
  }

  _createClass$1(SvelteComponent, [{
    key: "$destroy",
    value: function $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
  }, {
    key: "$on",
    value: function $on(type, callback) {
      var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return function () {
        var index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }
  }, {
    key: "$set",
    value: function $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  }]);

  return SvelteComponent;
}();

function dispatch_dev(type, detail) {
  document.dispatchEvent(custom_event(type, Object.assign({
    version: '3.35.0'
  }, detail)));
}

function append_dev(target, node) {
  dispatch_dev('SvelteDOMInsert', {
    target: target,
    node: node
  });
  append(target, node);
}

function insert_dev(target, node, anchor) {
  dispatch_dev('SvelteDOMInsert', {
    target: target,
    node: node,
    anchor: anchor
  });
  insert(target, node, anchor);
}

function detach_dev(node) {
  dispatch_dev('SvelteDOMRemove', {
    node: node
  });
  detach(node);
}

function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
  var modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
  if (has_prevent_default) modifiers.push('preventDefault');
  if (has_stop_propagation) modifiers.push('stopPropagation');
  dispatch_dev('SvelteDOMAddEventListener', {
    node: node,
    event: event,
    handler: handler,
    modifiers: modifiers
  });
  var dispose = listen(node, event, handler, options);
  return function () {
    dispatch_dev('SvelteDOMRemoveEventListener', {
      node: node,
      event: event,
      handler: handler,
      modifiers: modifiers
    });
    dispose();
  };
}

function attr_dev(node, attribute, value) {
  attr(node, attribute, value);
  if (value == null) dispatch_dev('SvelteDOMRemoveAttribute', {
    node: node,
    attribute: attribute
  });else dispatch_dev('SvelteDOMSetAttribute', {
    node: node,
    attribute: attribute,
    value: value
  });
}

function set_data_dev(text, data) {
  data = '' + data;
  if (text.wholeText === data) return;
  dispatch_dev('SvelteDOMSetData', {
    node: text,
    data: data
  });
  text.data = data;
}

function validate_each_argument(arg) {
  if (typeof arg !== 'string' && !(arg && _typeof(arg) === 'object' && 'length' in arg)) {
    var msg = '{#each} only iterates over array-like objects.';

    if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
      msg += ' You can use a spread to convert this iterable into an array.';
    }

    throw new Error(msg);
  }
}

function validate_slots(name, slot, keys) {
  for (var _i2 = 0, _Object$keys = Object.keys(slot); _i2 < _Object$keys.length; _i2++) {
    var slot_key = _Object$keys[_i2];

    if (!~keys.indexOf(slot_key)) {
      console.warn("<".concat(name, "> received an unexpected slot \"").concat(slot_key, "\"."));
    }
  }
}
/**
 * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
 */


var SvelteComponentDev = /*#__PURE__*/function (_SvelteComponent) {
  _inherits$1(SvelteComponentDev, _SvelteComponent);

  var _super2 = _createSuper$4(SvelteComponentDev);

  function SvelteComponentDev(options) {
    _classCallCheck$1(this, SvelteComponentDev);

    if (!options || !options.target && !options.$$inline) {
      throw new Error("'target' is a required option");
    }

    return _super2.call(this);
  }

  _createClass$1(SvelteComponentDev, [{
    key: "$destroy",
    value: function $destroy() {
      _get(_getPrototypeOf$1(SvelteComponentDev.prototype), "$destroy", this).call(this);

      this.$destroy = function () {
        console.warn('Component was already destroyed'); // eslint-disable-line no-console
      };
    }
  }, {
    key: "$capture_state",
    value: function $capture_state() {}
  }, {
    key: "$inject_state",
    value: function $inject_state() {}
  }]);

  return SvelteComponentDev;
}(SvelteComponent);

var subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */


function writable(value) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
  var stop;
  var subscribers = [];

  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;

      if (stop) {
        // store is ready
        var run_queue = !subscriber_queue.length;

        for (var i = 0; i < subscribers.length; i += 1) {
          var s = subscribers[i];
          s[1]();
          subscriber_queue.push(s, value);
        }

        if (run_queue) {
          for (var _i = 0; _i < subscriber_queue.length; _i += 2) {
            subscriber_queue[_i][0](subscriber_queue[_i + 1]);
          }

          subscriber_queue.length = 0;
        }
      }
    }
  }

  function update(fn) {
    set(fn(value));
  }

  function subscribe(run) {
    var invalidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    var subscriber = [run, invalidate];
    subscribers.push(subscriber);

    if (subscribers.length === 1) {
      stop = start(set) || noop;
    }

    run(value);
    return function () {
      var index = subscribers.indexOf(subscriber);

      if (index !== -1) {
        subscribers.splice(index, 1);
      }

      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }

  return {
    set: set,
    update: update,
    subscribe: subscribe
  };
}

var CONTEXT_KEY = {};

var guideIcon = "data:image/png;base64,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";

var componentIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAADwCAYAAABxLb1rAAAABGdBTUEAALGPC/xhBQAALaNJREFUeAHtfWmUHNWV5n2ZtWRmqRaVFgwCJIGQASHEIgQWi/F4Dh5bMlgC4+52A/bxMEsfe/Axdnuw2/7hsel2G3tg3LMdpo8bGLdtdobN5sy4aRYZycZmFVgIJCGEENqqSqrM2jLefDeyspSZyj0jI96LuO+oFJERL96773v3fnHfGookCAItIKC1VqNExzgZWqyJFjk4J+3MUTGaS1rNQdJztaY5SlEP7ncpTd241qUVdSscOWtcn8D1cZxO4Po4rk/gmVE8sx/X9pHS+7XDx9j+GNEe3N8eS9K2Hj5XeFKCINAkAtAlCYJAbQRAdLNGMnQGCGq51s6ZSqslpGgRnlyEe4naKXgfA+Q3hlS3g0G3a6W3KhV7CXT4cl+SXsG9w97nKCmGDQEhwLDVqAflAaH1DI/R+VCO1Tg/F0kux99JOLdCX6a9wrcg88s4fx4u4ob+BG3EOZxVCYLAEQSsUOgj4spZOxA4pPW8bIYu1eRcqEhdiDzOAtl1tCOvoNIE+U0h7xc06WcVxZ6NJ+nJXqX2BiWP5GsGAkKAZtSDr1KA3OKHMrQqq52Pgxj+FTJfaYt35xVQKDf3Hf4O5f5lXMUe703SJlzLepW+pGMHAkKAdtRTy1LC0JPDGfoEkXMVBicugyc02HKiIUoAnu8BDLY8QRS7tz9Jj4EMMyEqnhSlAgJCgBWACcNlkF73UJrg5TlXa1KfJAxkhKFcbS8DBlAU6Ye1jt09kKLHQYY8Qi0hhAgIAYawUkfSGoMXzvUOqfWYZNIXwiL6WCQ1EiN9P0aYb+9LqQ0+ZixZ+YCAEKAPIPuRxYjWczCQcQ28vOtBeqf7kWf08lCbSanbMYByV59SPEdRguUICAFaXoHDab0Ko7dfJnh73OS1vDhWiJ9rEsMrpNit/Sm1yQqhRciyCAgBloXF7IsgOnUoTZ/MKv1VeHwXmy1tyKVT6um4Vrf0puhhEGNgq1L0Qw8toURit/rYx2SuYwMqJwTYAFhBRwXxJYbTdB1GK7+C86VByyP5H0EA5LcFo+s/6k/RHTjnFSq+BP1P/9RBBw48gtUwH0PzfD/p2OfVVZ962JfMQ5AJllZKMB0BkF3n0Kj+90MZvRXN3f8h5GdejXGdcN1wHXFdcZ35IuXBg9e65Ec0hdYA1l5nH9T33/9VX/IOQSbiARpciTCijqExgoLrb+NvocGiimilCCi1Ax7ZdwYSdCc8Ql6F4nmAfsTovgc2Y9Drg0gc+1AgH0Wd0BVMa1Q/oYUn/lu1cuWk5xmHKEEhQEMrcyitr4Ji/zWUfImhIopYdSAA8tsKYrppIKXurSN6Q1Hg6a0nR9+Hh7jfD5vjIOT6ISdBgl0gw6fwe71av15GrF1wjv5PmsBHYxLoleExfcrQqPMrzOO7R8gv0KrwJHOuQ65LrlOuW08SzSei6T9Onybzl1zvj8mPVBpN40vwtxFEedrMfTkpQkAIsAiO4H7AUJIHR7Pf0Y5+GcvULgtOEsm5HQhwnXLdunWMum41D/3AAx8F2Z0HD4+X7JWxY53C9cOIczK8xN8gvuhUGdDLAFcmllxqKwLwDNYMZ/SryORbIEKZy9dWtINLfLpuv8V1zXXekiSOk/f+qg22zAJBppFPP2Wdx/S9D3yxpTxD+LD0AQZYqZmMXjim9W14S18RoBiSdVAIKPVQQqkbkkkMmDQQMOdvJU1O/RbkNg7dqeOFqSbQn4xmMYKK/TcaHLhBfeQjbRmYaaAYRkQVDzCAaoAn0IXpEjeB/DYL+QVQAaZkiRcf6wDrAutE3WJNTeW9vzofcfsEMUpMGBxx/oIOHPxunQ+GPpoQoM9VjKVrF6AJ9KJ2nJtBftxPIyHKCEAHWBdYJ1g3akGBAY2lGNhYB++P5/3V4f3lU8SUGezoMP2rteZ3PskQHPOAhKAoZhcBb3h1MK1vRGf4Uzg/1WxpRTq/EWCdYN1wdaTapwe0/kvIhg1q4M01EhRNkOPkurwUPd7Io2GOK32APtTusNaDTlrfgX6YtT5kJ1lYj4B6JJZS1/UrbNJaEPTDDy+g8Ym34Pl1FHhzBTEqnvIHongvSOyQpv6G1q/7NuYnyu7XAEQ8wIo6480N3pvPyegXhPy8wTMaqei1rDOsO0XlnZz8Cn7zBOd6d6vO9fsx+Sm1nWLqw+rK9d8U8juCqhDgESw8PeMmL1Zz/KVD+p/xxj7B08QlsfAjAJ1h3WEdYl3Sv/zlIObz/ZtcwVVu1Ud1FHh1CNt3JwjzLkomVmBFyDPVH4ne3VB9+cuU6uPNSdGhfSf6dD5hikwih30IgPhgn/r7w2n14f6JyZdQAvbkDuGF2lujNOwh9iDuQXh9/06tW3d3jfiRvS19gB5X/UhGX5TV+mdQ0uM9TlqSiyoC2Sz1P/mrrJqYiNeAYAz3cx+pV+rXIM/r1JVXvlPjmUjfFg/Qw+qH13eDo/Utbie1h+lKUtFGoOud7cTkpzs7tZqcrOC0aDR53abxBLy+b9K6dT9EX19gG7TaUmNCgB7V1FA6+zeOdr7uUXKSjCCQQ0BrSryFDWUQKpAfT4dBX59Lfq+C/D6Lvr4X3Qfkv5oICAHWhKh6BO6nGUk7tzuaPlc9ptwVBBpHoPPdnRQby5COY+ZLtmT1muLNDtx+QXQ303+hObO/jiVu3AyWUCcCQoB1AlUuGsgviVE67mCW+X3lAJJrLSOQeOsNN41C8nPbtTEs7HAcHhTZDa/vcxjowEfdJTSKgBBgo4hNxx/SejbWcD6CjubiuVpNpiePCQKlCHTu2U3xwxj0jcfh/eXmLesYzh2cOw5NHHMcjZ2xYqceSP629Fn5XR8CMg+wPpyKYqXTeoFO66cx2CHkV4SM/PASge43t+SSy5MfEyHIjwkxvfxsSp+zipyu7lWsi6yTXuYdlbSEABus6ZFxfSr2INoAz29Zg49KdEGgbgRih0aoY/igS3a6uxtdfBjmABFODQzSoYv+BU0cX/iJGL2MdZJ1s+4MJKKLgBBgA4qAaS7nO1P6GXh+JzbwmEQVBJpGgEkvNj4O9sP6tyWn0uEPXUJOqsxCEOgk6ybraNOZRfDBCnOKIohEjSK75Ef6/4H8ymhfjYfltiDQBAKJP75K3dvfpOysXsosW0FZeH81g1KjGB75aH9KbawZVyJglaCEmghw04LfrphrgO+u5sLWYaIHtyn6zR6i97DpeHpKoMxjE8ZjqkPTB7B74wXHEK1frOnkfnNLiW9i7o91qIv6utXr5kpphmRitTXqgTuX3T6/6WbvJPbXuOUFRfe8iV5AeX/UQC+ctxVq/jNLiG48S1OHqRak1NvdpFanUmpXOGvBm1KZWn3elK7FVHiqizvaOz3gweT3F08r+t37AluL0Ibi8VXzNf3XSwwmQVKvqpS6eIA3RZBQFgEZBCkLC7w7THLWuXl+M6O9P4DnJ+RXAbAIXt6EF+EPoRPmBr2MdZh12VwZg5VMCLAM/ry8zV3hUTDPj/v87kWzV4IgUIjAL7BM903ohrEBOsy6zDptrIwBCiYEWAZ8XtsLH7BoeRsPeEifXxmwIn6JdeJ+6IbZQa/N6bTZUgYhnRBgCerY1eX76Or7XMlld7S39Jr8FgQYgecwE8D0wDrNum26nH7LJwRYgDjm+t2A3Yf4q1tHBZ7qIkEQKIeALbrBus06Xq4MUb0m/QLTNc87ObubmVbQhHrn+Y2lR2n4wB6ayOQYsyuZov7BYyhRbvZ+mbyCfr6MSHKpBgI53Qh+79HO9Ah1Zg7RZHcPTc4aKCs15rLeAl1/vi+pnikbIWIXTe+88KU6+BseWf5yW5Vt7M++p7azPLRvDw3t3Q2ZS4wBy5gG5h6LP8yirRKCfr6KaHKrBgJ/+DQamQGG7uG9lBx6f0aC0bkLaLKnPAliWd078aQ6q0+p/TMPRPSktlWHHBiMjil8s/fOauRXDwTsuQ3tK0N+/DDaHnyP41QKQT9fSS65bj4CefLj127+1Zs8iI5JbJlVNuBFzzrPul/2foQuRp4AhzP0NS++3sbNXia6igH33DgVIgT9fAWx5LLhCHTD62PPL695zGgam6XGsHt0Al5hpcA6z7pf6X5UrkeaAHMfntbf86Ky831+1dKqFqfavXya1eJUu1fP8/k4crQHAZf8QHKF5MfSY6do91r3yH6KTU1UKZD+3lEfX68SO4y3IkuAw1oPYmvJn8sE0TCqdfjLVIn8ZkqusCcMaDB54L2ZS6UnrPtsA2wLpfei8juSBDjd73cHmqwneFXRPNpbK1SLU+1ePt1qcardq+f5fBw5mo8AN22TZTy/QsmVhheIwTceFe7IHC68VXwOG0B/4B1R7Q+MJAGi7+NG9JQUrfQo1orGf/FUF960smLAPTdOhQhBP19BLLlsGAIJ9PfxX2mzt6yY05GSByt7gbnn9NqcTZRNJdQXI0eAmAh6AcjvZq9rlef58VSXsiQ4PQ2m2lzAoJ/3Gg9Jz3sEXPKr4fkV5spNYI2mcHxynDpHay1Y1jfnbKMwhfCfR2oiNNz8ruGM/gmOne2oWp7nl0jNanoidNDPtwMTSdMbBBolP87VdQAV/se/6oMhiMI2oYhtY4VSqtrIiTcFMiSVSBHg8BjdiApu64dj2JNLpE5qunqDfr5pweXBtiHQCPk504MfCtOu3A4ZR5ODj6pPzJpdUz62jeExhe4h+uuakUMSITJN4ExGL0QF/1VI6k2KEREEEpjQzIMe0915OVIrKDsPdPC8v3yIYfCDyS/b0UnjvbNpdN4JNLJgKb4uV5+vwzbCtpJPL+zH+lAJAQpjWt8GP7/2UG0IyipFCAcCHRjBTYzsKyI/lwiZ8DDXjz08JjuegM8kOJmYRVPJHprC0enoag4E2MgY0W14+FPNJWDXU5EgwOExvcbJOlfYVTUibdQR6JgAFSHoGD6IDs+OiS7XrM1NdJ7qToH0QHjJWZTFuWdB6yvYZvoT6lHP0jQ0odATIFz6JAY+fmwo/iKWIFARgYlUH3XDA4w5WTdOFl4dk90k/qaw4wsVNH0rJtLkDe3oH8N2fo0BkUyTSVjxWOgJcCjtfAM1sdiK2hAhBYECBJzObho57hSKj2fg4SXQj9eWyQsFOR45Bfktxlb6N+HKt49cDd+Z61GHr1i5EsGNPwVvspdRmd2tlnH2d15sNQl5PsQIHPz2itCVDt7fuIqp5WgKvxG6wk0X6MjwUQhLqLP677wgvxBCI0USBGoiwLbDNlQzosURQkuAcN8/jbGxyyyuGxFdEAgcAbYhtqXABWmTAKEkQLy50Lfp/XK3NtWBJCsIGI6AvjlnU4aL2YR4oewDHMroL2jH+V9N4FHxkYFUKN8VFcsrNxpDAINtjT1gWWwVi/3rgaT6e8vErilu6AgQb6ouEOAWzJnydDa7EGBNXYp0hLATIDb52AECXBq2dcKhc2uG0/QFr8kv0pYthRcEGAE4FK5thQyNUHmA8P4S8P62orIWeF1P4gF6jWi40gu9B8jVpdQueIFL4AXmlqiEoApD5QHiDXVdO8gvBPUsRRAEWkcAjoVrY62nZEwKoSFAeH8KCya/YgyyIoggEEYEYGOurYWkbKEhwENpuhwVszQk9SLFEASMRIBtjG3NSOGaECo0BJhVmjdylCAICAJtRiBMthYKAsS3DFah7+/iNte7JC8ICAKMAGzNtbkQoBEKAsSm318OQV1IEQQBaxAIi81ZPw1mROs5TkbvQt9Eyzu+VNM+mQZTDR25F4lpMAXVzDvFxJJqQZ9S+wsuW3dqvQeYzdA17SY/62pVBBYE2owA2xzbXpuzaXvy1nuAB0edV9EpcXq7kWrVA9xywP2aQ7vFPCr9pYPWV/FRZTLxQtQ8wFwdqM2ze2LLTKyPemWy2gMcSevVfpBfvWBKPEEgWgjo03M2aG+prSZArZ3r7YVeJBcE7EfAdhu0lgC5DwIfBlxvvwpJCQQBexFgG7S5D95aAhxK08fR/O2zV3VEckEgDAjovpwt2lkWawlQKeczdkIuUgsC4ULAZlu0kgDhcifxiei14VIjKY0gYCcCbItskzZKbyUBDmdoDZbjzLIRcJFZEAgdArBF1yYtLJilH0Z3rrQNa5mP522NvXtwkp55bYQ270zT/sNTlM06lOqOU6IzRh14rSuZ/ugJ4F0dinqTHXTivASdcWIPDfZWogzXJu/1JFMfE7FOTeBqx7EQ+318rm/QR5yo1YnQfsoa5rzAc3T3hn305Csj5Gg0vlDY/lScehIx9zzMZQ+6bPxSWbFoFl28bIBiJcyBzTgP9KfUfCyRywYtZyP5W9cEPpShVX6TXyOAStz2IcDkd9uju+nXLw/PkN+c3jjNEvJrH+gFKeN9Qy9sO0wPbtwL/Atu4JRtkm2z+Kr5v6wjwKx2MP1FQhQRYM/vtXfSM0Vnz4+bvBL8RWDn3nF66pWhozK10Tat0x642EKAR6le+C9wnx83e/OhM05uszf/W47+IvDSjsO0/9BkUaY22qZVBHhI63lA/Nwi1OVHJBDgAQ/u88sHHvAo6YbK35KjDwhwVbzy9hFvfDrLc6dt1AcJvMmi0pCON6l7nAq237kUgyBW6n00dwvxTgFe2jFalFii00o1KCqD7T/e3ptBEfpnisG2mc2oS3HhnpmLhp9Y5QFiF9oLDcdTxGsTAkOY6lIY4nEhwEI8gjg/nDl6wNc2G7WKAJVWFwVR0ZJn8AiMTx1p/rI0Vilu8PC1RYKJkjrhTDAdxionxRo9gnvdA3RXtKUmJVFBQBDwCoGzXFv1KrU2p2MNAQ6P0fkA1qo+yzbXnSQvCBiHANso26pxglUQyBoCRI+PVa51BbzlsiAQegRgq9ip3Y5gDQHizXKOHZCKlIJAtBGArVozVc0aAoRKnRlttZLSCwLWILDcFkmt6FPDGwXb7ejFtoBaTk7ZTKEcKnItpAicxDaLlSGHTS+fFR7gSIbOAKAy8ct0bRL5BAEgwLbKNmsDGJZ4gNL8tUGZRMbmEZjX30mrP9hL7w9PzvwdKjPRuPkc/H0SS+W4y+o5f3NtPDc7CFA5y7HfjgRBwAgEkl0x+sQ5s+nxPxyk9Dj26PIgXLC0l85afGST88kph/7zw+9SZqJ8+ueenIv7/JtmtjI126wFwQoCxAqQJdhvzAI4RcSwI8Dkd+2l8+kDs7toPry2O558v2US5DTPXNhTBN3LO9JVyW/NubPd+Lwpwe/fMo8E2WaLCmToDyv6ALECZJGh+IlYEUIgUUB+XOz5A10uGTKBtRLYm+soWdu88Y1DZZM856RZxOSHAQb3b+3K2XTOScXkWfZBvy9aYrOt1ZwPoE4PfizyISvJQhCoiEAp+eUjHgMSvO4j86m7yd1peJv585Ycafpyutv2jLn9gPk88scVi3qICY/JLx/4fO3KQTrbPBJcZMPApfEEiE2QjgGQiXyFy1EQ8BsB3nX62g/Pp2PR7C0Xdh+coPHJ5rpoTj8+RX2p4p6ojVvKe397hiZorEw+TIKfZBJcbI4nyDbLtlsOL5OuGU+AToYWmwSYyBItBJj8rkGf37GD5cnvRXwj46FNB5oG5XwMfhSGg9j264/v8j57R4f3hibpzif3lO0bdEnwvEEMpJhDgjbYrvEEiPfqoqNVQa4IAu1HgJu1TH7HVSK/7aP0YAvkxx7lCXO7iwqyqULfXz7Se/g0wF0YeBkrMzrMJHi5QSRog+0aT4CYBGC8G51XTjmGBwEmPx7trUR+LzH5bdzfUoF56kthmJh06A/wKGsFbnLfWYMEub8w6GCD7RpPgKSdOUFXpOQfLQRczw99fscNFntneRSY/B5okfz4O8bLTkjlk3SPLyDdevsSa5HgFasG8Q3fgEnQAtst7n0tqg4zfqgYzdXl54KaIWCdUmw50FwneZ3JV4y2dPDIiGHFSHJjBoE8+S2YU578Xsa3SR7c1Jrnx5mtPLmXCrf1x6AB1Wr+zgg5fcIkeNc/v0/XgKx5lLowcHOYSZC1jgk7iMC2G0S+jeRZjFojT/oVVyvxAP3COuL51EN+7Pnx5ONWQgxWt7Jk6sub743hM5PF3z2pJ493D+RIsFKf4KdAgmcuLPY060nXkzgW2K75BEjmv0U8URZJJFAEujoU/Tk8qUqe3yvw/LwgPy7kGWj6zkrgw8YF4bkKU18KolQ8ZRL83/AEx9GHWBrYE/zU+XNoeTAkKB5gaYU0+htvW/EAGwVN4jeMwNUXzqXjKzR73947Tvd74PnlhTp/aV/+1D3uG5kk9gBbCbtAgnc/u69sEi4JrppDJ84r36wv+5AHF22wXeM9QLzAAu7J9UATJAnjEXjyleGyHhQLfvycrqMGLJot0Alzu44aWa607K2RPNiDvfSMI9/oLX32tV0Z2rlvvPRyW3/bYLvGEyC6W/x9bbVVJSRxUxF4Z3/lZmQspmgdmpHLTmy9L+38U4qnvnDf3YstDlLkm++lcwrzWG/emab7frOv5b7LfHr1Hm2wXeMJUGkqPwW/3lqQeIJAnQjUIsH1TIIlU1fqTNqN1puM02lY+lYYeN7fZJnv6xbGqXbeCc/vs5fMP2pCdf4ZJr97AyA/zt8G2zWeAIGjEGBem+XYdgSYBH/61PvEk5JLA3uC6y+YQ6c3SYKrTplFnEY+NDP1Jf8sH5n8/vySeRX79l57Jzjym5bTeNs1fh4gNsLvDsNWgDIfr9B0zT7fuQ/N4af2uuTShbXAhYEJ7EqQIAf2ruoNvN0Vb2VVGHjN79BotvBS3eedSO+zLvmV3yeEye+eDf43ewsL4Npu4QUDz4tr10AB8b40/i1iIGwiUosI8IDBT0GCE9iZuTTkSfC045Oltyr+5mkoqe7iqS+Vdn2pmMj0jTz5LZxXnvxeZ88vYPJjUW2wXeMJsJYyyH1BoF0IvF2DBK/60Fz06dVHgqWDH7y11fb3Gx+VnSG/+RXIb1fO83NanKzdLkxNS9d4AkQ9TpgGmsgTHQR4DuA/VvEEmQRPXVCdBBfN7ybeOLUwNDP1hZvRf4Zm78Jq5Ie5gKaQnw22azwBYiSp8ddkoabJuSDQIgI7pkmQP1RUGrg5zCstStfiFsYr3fMvPZ4l/uZHo+Gi0/poUQXy+6OBnp8Ntms8AUJJxANs1FIkvucIMAlyn2ApCU5ltbsCo9xaXBZioCdOHzyu2EPkL7nxc42GpzYP05Yym6Uy+d2NPj/naH5uNAuv4xtvuzaMAo+HYRR4KG2ednqt7WFPz/UEn95Lf3bxPExBibkk9jP8fgvf8KgUVmHiMy9FywcH7dPfbq29518+fuGRCe4Xz+6lz1w4j5ZOkyoToqHkRxgFNr71ZrwHCNUx/i1SqKRyHm4EeODiH0F6/L3eWuTH8/TOLvjWLyPD01Na+eB5ngTfAPEx+TEhGuj5uUpgg+2a7wFqCmYzs3DbsZSuBQSYBG99eBemyFRvxp6FDUlL+wZb2fUlL3KeBPm3qeTHsmEzBONt13gCROthf6v7r3FlSBAEvESgFvlxXuctKV73++6BceKVJl6ErAU9Kmy7XpS1nWkYT4AofPk9ftqJiqQtCHiAwP98YjfN6+uk+f3814V5f5X7Cj3IzsQkjLdd8wlQaWzBa2LdikyCQHUE2EvjT1nyH1Hj016qp27BXbZdw4PxgyD4HojxbxHD61jEEwQCQcAG2zWeAEnFjH+LBKJdkqkgYDoCFtiu8U1gMPQeC/p7a6riQMr8d03NQkgEQaABBNh2G4geSFTjrRJzibYHgoxkKggIAi0hYIPtGk+AsSRta6kW5OFQIFA6n06mRgVfrTzRu1qwwXaNJ0B8EWkPlhJFbv5ANcWK4r3BWcW9NVOmbHkSxcqYLjNv8V8psM2y7Va6b8p14wkQQPIkmO2mACZyBINA6bc4xiZlblQwNXEk1xPnFW/ycOSOe7Z92nZLLpv103gCdOHSQoBmqY3/0vBWUIXf0+AtpSQEi8AZ1b6SZ4nNWkGAWumtwVa15B40AsfN7qRLlx35oPgk+O/wWBjmBwSNbHP5r1g0i+b0dlZ82BabtYIAlYq9VBFpuREZBK5ePZdOL/is5HAmS2NlNimNDCABFfT4ud10ybKBqrnbYrN2EKCml6uiLTcjgUAc2vof1hxLH13e7zaHeSR4/6EsHR4XT9AvBWDPb93584B/9RzRc2+FzVYfx65eRt/u4vups4YzegTHwOSVicy+VXddGe0+OElPvzbifppy/+EpymKH5Z7uGHXjM5bYqxSbkNaVjESqgUAXprr0JjvoBHyBjvv8qjV780nx4Ed/UvXh2NzOr/mEfDhaoybYUXkrCPBkHzApm4UQYFlYQnPx+v/+ZlFZjh+s3L+Vj3j5eXPo7JMw2QNBdvzOo8IvH/Um7GXJkSvmntVwZI0S3AqX2ijERJi2IXDBB/tmyK9tmdibsDW2ag0B4q3ye3v1QSQPEwKnHJuky1ZUHwQIU3kbLQts9flGnwkqvjUEiP7uZ4MCSfIVBPII8AanV2E0WvoY84gcfYStbjj6qplXrCHA/gRtxJtlykwYRaooIJDqjrsfJueBAQnlEWAbZVstf9e8q9YQIIDlD6y8YB6EIlEUEIjjA+hXXzgX3/ktXpMchbI3WMYXpm21wceCiW4NATI8mrQ0g4PRk8jnuubcQVo4rzvyONQCwDYbtYoAFcWEAGtpoNz3HAEZ8a0fUtts1Cp/Pp6kJ7MZhemAwU2Irl8VzI35sy1Ed2N19RtDRKP8vR4fQw+m1y3FAOqnMUvsT5f6mHGDWfEKO55QvfQ4GfGtFzo0fTXbaL3xTYhnFQH2KrUXE055iH2lCeDZJsPeDNGXn8YQ3e7gJGfC/cPe3N8j24luvZio+q5K/si65AOJoox4ZcnyhSlas3JQRnyLkKn643dso1VjGHbTKgJk7OD9PY6DEGATihQ0+ZWKzETMMv30stI7/v/++roF/mcashxhm7+0rUhW9QEyuHEVYwKU0CACP38jWM+vkrhMgiybBPsRsNE2rSPA3iRtUqQO2K8u/pbgboNJxmTZ/K0le3Njm2TbtK0E1hEgOlqzpPQTtgEdtLxbMOBhajBZNlMxM04u2KRrm8YJVl0g6wgwV5zYfdWLJXcFAUHAXwRi9/qbnze5WUmA/Ul6FENzxu815k0VeZMKTz0xNZgsm6mYGSUXbBE2+ZhRMtUpjJUECFc7o0g/XGcZJRoQuPoUc2EwWTZzUTNHMrZFtklzJKpfEisJkIundezu+ospMf8EBLj6WPNwYJlYNgn2ImCzLVpLgAMpwnQYNWKv2vgvOU86NokEWRaWSYLNCKiRnC3aWQZrCRAu93iM9P12wh6M1Lzigicd3/whorPmEfGyNL8D58l5swwsiwmrQPzGIEz5sQ2yLdpaJqs3NhtJ69VZ7TzrB/jyTRA/ULY3j6h+EwSTny/sS6kNttactR4gA54DXm22FXyRWxCwGwG12WbyY+ytJkBXeZS63W4lEukFAUsRCIHtWd0EZrXBx4LnOBm9Cwux27pbpTSBLTVSn8SOWhPY7YNPqgX4+O9+nyBuSzbWe4C5CpDBkLZohyQqCFREQN9vO/lx0awnQC4EdqG9lY8SBAFBwB8EwmJzoSDA/pTahKVx2FlOgiAgCLQdAdiaa3Ntz6j9GYSCABmmuFa3tB8uyUEQEATCZGvWD4Lk1ZG/EzKc0a/juDR/zcujDIJ4iWb40orKIAgGP7b0J9WpOOL75/aH0HiAboVo9SP7q0RKIAgYjABsLCzkxyiHxgPkwsD7Swxl9FacLODfXgbxAL1EM3xpRcIDVGrXQFItAQGOhaUGQ+MBcoVwxSitvheWypFyCAImIcC2FSbyY2xD5QFygeAFdsILfAMnC/m3V0E8QK+QDGc6ofcAldoB7+8UEOBkmGowVB4gV4xbQUp9J0yVJGURBAJHADYVNvJjTEPnAXKh4AV2YET4NRyX8G8vgniAXqAY3jTC7AGC+LZi5Pc0HKfCVoOh8wC5gnIVpW4KW2VJeQSBYBBQN4WR/BjLUBIgF2wgpe7Ft0rl85kMhgRBoEkE2IbYlpp83PjHQkuAjLyKqy/izWXtbrXGa48IGGoE2HbYhsJcyFATYH9CvYF+wL8NcwVK2QSBdiHAtsM21K70TUg3lIMghcCiEpMYEHkVx8WF1xs9l0GQRhGLVvywDYLA+9uGgY9lOFr5uct6ta+j3oi2xuMKHB7TX9JZ/YiJZZh0iLYNhWJZpYnw+ihTc75EDI/N7Tav/lVMfSns5MfKEeomcF774cY/iqHhh/K/TToyAUoQBIxCALbi2oxRQrVHmEgQIEOXUOoGkGC6PTA2n+pktvln5UlBwHMEYCOurXiesJkJRoYAk0m1Ay79d02rhgkhQNOqJNLysI2wrUQFhOY6LixFBwMhXRgQeRHHUxstQrsGQXYdIhqdNK8PqFF8JH5zCJjUBwjyex0DHytwnGiuNPY9FRkPkKuGKxYTOz+PozELusfFA7TPakIoMdvEtG1Ehvy4GiNFgFxgfMvgOU1mLJPLwvGbcsT743qRECwCbBNsG8FK4X/ukSNAhnggSdg5WgU+LWYsdEvL/VdgydELBNQjOZvwIi270ogkAcLd17GUug5t4p31Vhf6DeuNWne8jBBg3VhJxDYhABtgW2CbaFMORicbSQLkGulX6kCc1J+g4uuioXa0VIUAjbaN0AvHus82wLYQ+sJWKGBkCZDx6EupDWgKf7MCNkWXvSZATk+awEUQR/JHsAaovpmzgUhC7xY6WPwNwL0/ST/A6NdjtUSZ5BELD0Ma49DtaFZ7KKIk5QMCKqCJaKzzrPs+FNHoLCJPgNP9gdeiP/CdajXFKza8JKzDxkzEqVZqudduBLqCsEDoOvr9ro1qv19hnQYBf2H+Rpz3KbU/rtSfVusP5DEQr1Zt8PLfw5GabWVENRspRHfc25ZFrUK6/X7Qddb5WnGjcF8IcLqW+5LqGTQLvlqt0sewYsMLL/AQtmh12jCqXE12uWceAp2wvg6fm8Cs46zr5qERjERCgAW4YyLobeiT+X7BpaJT5qzRidZJcEj2qC7CNao/ejv89v7o+6zjUcW7XLl9fv+UE8G8a8Oj2Z+gmfq5SpJ1YRfFZCfepU30YB9C03f3YX8Vv1I55HpwCPR1akrE/csfns4/9PfEP+9fjnbkJARYpp7QzO0YSusHMOyxtsxt91IHlLenqzESnAKr7sTmB16PKFeSUa6biQB7fkm8RP0LWOmRUuuq9XH7J4tZOQkBVqgPkGByKKP/Lzr9VleIAg8Q+wzCE+wCGdbyBtnz2zMqfX+VsIzCde7zmwXPDyrjX1Bqw0BS/UvoZ6i3tm8WUD+rolkZA3tuSOvZOq2fhie4rJoQTISdIMHOuCLe3oj/CgmRR4/fgefHk5+58evFQEo1eeSeGQiwXkAlXMJLYLSXCdDfoF5VKXXxgFIH/c3XntxQPRKqIZBO6wXjpDeAtU6sFk/uCQJGIaDU292kVqdSapdRchkmjO/vJMPKX1McVqB4XH0MvX0yb6omWhLBBARYV1lnhfxq14YQYG2MqK9bvY4m7Rq0a9GLJ0EQMBgB6CjrKuuswVIaI5oQYJ1VgflTG2OkPiqeYJ2ASTTfEWDdZB1lXfU9c0szlD7ABituZFyfms3qX0mfYIPASfT2IoA+P272iufXGMxCgI3h5cZ2B0Y0SLDG6HATScsjgkATCKhXu5X0+TUBXPS+CdIMSKXPcOcyTy9AnyD2E5QgCASIAHSQdVEGPJqrA/EAm8PNfcqdLJ3Wd8MTrLhipIXk5VFBoAYC7gqPq2WScw2YqtyWQZAq4NS6xYrHS4wA4j/Uiiv3BQEvEWCdm17eJis8WgBWCLAF8PhRkOAULzLHrP+/bTEpeVwQqAsB1rWcztX3PZu6Eo1oJGkCe1jxw2l9AzbLuoU3U/AwWUlKEHAR4Jctprp8Vba08k4hhAC9w9JNaSSjL8pq/TNMkzne46QluSgjgG3seddy2czUWyUQAvQWTze1Ea3nOGl9J7zBT7QheUkyYgjA63uMv+Eh29h7X/HSB+g9psSKimbKWqViX+dmSxuykCQjgIDb5IUOsS4J+bWnwsUDbA+uM6mOpPXqLOmfo0l8wsxFOREEaiGg1E7+aHnUv9tbC6ZW7wsBtopgHc8Paz2IJvEdMl+wDrAkChBQj6DJe12/UgcEjvYiIE3g9uLrps6KjDlbl6NJ/DU0a+SLwD5gbmMWrBusI6wrQn7+1KB4gP7gPJMLpspcgMGRn2CqzKkzF+Uk8giA/F7HYMfn0d/3XOTB8BEAIUAfwc5nBfLrGh6jG3H8K/QNpvLX5RhBBJRKg/y+25+gH+KIL8dI8BMBIUA/0S7JK5PRC8e0vg0keEXJLfkZBQSUeiih1A3JpNoRheKaWEYhQANqZXhMr9GO/jE8wsUGiCMitBkBeHrbVEx9qT+hHm1zVpJ8DQSEAGsA5NdtkF9yKO18A8bxNZx3+5Wv5OMfAqjbcdTtDwZSsZtxLpsY+Ad9xZyEACtCE8wNeIOn6Kz+OwyUXBaMBJJrOxDAAMcTKq6+CK/vjXakL2k2h4AQYHO4tf2pobT+NOYN3gyPYUnbM5MM2oYAPL2tmNf3DUxtuadtmUjCTSMgBNg0dO1/EOTXgdHi63D8FgZKFrY/R8nBMwSU2gHy+08Y3b0DR1kO6Rmw3iYkBOgtnm1JDQTYNZymL2ilvwkiXNCWTCRRbxBQ+FyCVt/rT9Hfg/hkWos3qLYtFSHAtkHrfcIgwgSI8DpS+is4X+p9DpJiswiA7LaQVj8C8bHHN9ZsOvKcvwgIAfqLtye5gfzUoTRdnlX6RniEF3uSqCTSHAJKPR3X6oe9Kfo/ID7dXCLyVFAICAEGhbxH+WJp3SpNzpfR0b4exCjTZzzCtVoyILpxDFDdryh2K5aubaoWV+6ZjYAQoNn1U7d0vAlrNkPXwCO8HsZ5et0PSsQGEFCb8RGY2+NJukv252sANoOjCgEaXDnNisZ7EGrtXO/AKwQZ9jWbjjzHCKiRGHt7Kna77M0XPo0QAgxfnc6UiJvEQ2n6uFLOZzSptfAOZ83clJPKCCh1WJF+ROvYLwZS9HiuyVs5utyxFwEhQHvrriHJQYbJ4QytIXKuxGjlZVhpMthQAiGPjJUaBzC6/gRR7L7+JD0K0pOlaiGvcy6eEGAEKrm0iCDD+KEMrcpqB96h+jjun4trkdIFlJtHbJ9HuR+Pq9jjvUnahGvZUqzkd7gRiJTSh7sqmy/dIa3nYQDlUowmX4hJvBfhtbgCxBCqbxuD3KZI04uYTP4MRm+fxUDGk71K7W0eNXkyDAgIAYahFj0uA8ivB0vwzodyXIjzc5D8mfhbjHMr9GXau9sGmV/C+e/h6j2LJWkbcT7qMVSSnOUIWKHQlmMcCvFBfrNGMnSG1nSmVs5yeIpL4CkuQuEW4V4iiEKC0HjFxXZ4dtvh2W1VOvayUvRSX5Jewb3DQcgkedqFgBCgXfVlnLTsFcKtOsbJwEMEGTo4J+3MUTGai8GWORB4LkhzDoipB/e70fPWhWtd8CW7oXx8Dv6iCVzH5GKawPUJXMe+eTSKZ/bj2j4MTuzXDh9j+/EVrz24vz2WpG09fC6rLxhCCU0i8P8BxSy8rMbYdl4AAAAASUVORK5CYII=";

var themeIcon = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20240%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3Anone%3B%7D.cls-2%7Bfill%3A%23eff5fd%3B%7D.cls-3%7Bfill%3A%23fff%3B%7D.cls-4%7Bfill%3A%2326a1ff%3B%7D.cls-5%7Bfill%3Asnow%3B%7D.cls-6%7Bfill%3A%23fdaca9%3B%7D.cls-7%7Bfill%3A%23fd9da0%3B%7D.cls-8%7Bfill%3A%23fed5d0%3B%7D.cls-9%7Bfill%3A%23ffe8e6%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3E%E8%B5%84%E6%BA%90%20104%3C%2Ftitle%3E%3Cg%20id%3D%22%E5%9B%BE%E5%B1%82_2%22%20data-name%3D%22%E5%9B%BE%E5%B1%82%202%22%3E%3Cg%20id%3D%22%E5%9B%BE%E5%B1%82_1-2%22%20data-name%3D%22%E5%9B%BE%E5%B1%82%201%22%3E%3Crect%20class%3D%22cls-1%22%20width%3D%22320%22%20height%3D%22240%22%2F%3E%3Ccircle%20class%3D%22cls-2%22%20cx%3D%22160%22%20cy%3D%22120%22%20r%3D%22120%22%2F%3E%3Cpath%20class%3D%22cls-3%22%20d%3D%22M160%2C55H105.64A20.64%2C20.64%2C0%2C0%2C0%2C85%2C75.64V200a5%2C5%2C0%2C0%2C0%2C5%2C5h70Z%22%2F%3E%3Crect%20class%3D%22cls-4%22%20x%3D%2295%22%20y%3D%22145%22%20width%3D%22130%22%20height%3D%2240%22%20rx%3D%225%22%2F%3E%3Cpath%20class%3D%22cls-5%22%20d%3D%22M230%2C55H160V205h70a5%2C5%2C0%2C0%2C0%2C5-5V60A5%2C5%2C0%2C0%2C0%2C230%2C55Z%22%2F%3E%3Cpath%20class%3D%22cls-6%22%20d%3D%22M220%2C145H160v40h60a5%2C5%2C0%2C0%2C0%2C5-5V150A5%2C5%2C0%2C0%2C0%2C220%2C145Z%22%2F%3E%3Cpath%20class%3D%22cls-6%22%20d%3D%22M160%2C99.78a2.5%2C2.5%2C0%2C0%2C1%2C0-5c48.71%2C0%2C62.17-28.57%2C62.72-29.79a2.5%2C2.5%2C0%2C1%2C1%2C4.56%2C2C226.69%2C68.36%2C212.13%2C99.78%2C160%2C99.78Z%22%2F%3E%3Cpath%20class%3D%22cls-2%22%20d%3D%22M124.26%2C171.58V154.4h6.44a7.91%2C7.91%2C0%2C0%2C1%2C3.16.52%2C4%2C4%2C0%2C0%2C1%2C1.86%2C1.6%2C4.26%2C4.26%2C0%2C0%2C1%2C.68%2C2.27%2C3.89%2C3.89%2C0%2C0%2C1-.6%2C2.08%2C4.36%2C4.36%2C0%2C0%2C1-1.8%2C1.57%2C4.45%2C4.45%2C0%2C0%2C1%2C2.39%2C1.56%2C4.15%2C4.15%2C0%2C0%2C1%2C.84%2C2.6%2C5%2C5%2C0%2C0%2C1-.51%2C2.24%2C4.32%2C4.32%2C0%2C0%2C1-1.26%2C1.6%2C5.18%2C5.18%2C0%2C0%2C1-1.88.85%2C11.48%2C11.48%2C0%2C0%2C1-2.77.29Zm2.27-10h3.72a8.34%2C8.34%2C0%2C0%2C0%2C2.16-.2%2C2.39%2C2.39%2C0%2C0%2C0%2C1.31-.86%2C2.49%2C2.49%2C0%2C0%2C0%2C.44-1.5%2C2.76%2C2.76%2C0%2C0%2C0-.41-1.5%2C2%2C2%2C0%2C0%2C0-1.17-.89%2C9.84%2C9.84%2C0%2C0%2C0-2.62-.24h-3.43Zm0%2C7.93h4.28a10.68%2C10.68%2C0%2C0%2C0%2C1.55-.08%2C3.81%2C3.81%2C0%2C0%2C0%2C1.31-.47%2C2.44%2C2.44%2C0%2C0%2C0%2C.86-1%2C2.92%2C2.92%2C0%2C0%2C0%2C.34-1.44%2C2.84%2C2.84%2C0%2C0%2C0-.49-1.67%2C2.56%2C2.56%2C0%2C0%2C0-1.36-1%2C8.51%2C8.51%2C0%2C0%2C0-2.52-.29h-4Z%22%2F%3E%3Cpath%20class%3D%22cls-2%22%20d%3D%22M148.25%2C171.58v-1.83a4.55%2C4.55%2C0%2C0%2C1-3.95%2C2.11%2C5.06%2C5.06%2C0%2C0%2C1-2.06-.42%2C3.42%2C3.42%2C0%2C0%2C1-1.42-1.06%2C4.06%2C4.06%2C0%2C0%2C1-.65-1.57%2C11.22%2C11.22%2C0%2C0%2C1-.13-2v-7.71h2.11V166a11.86%2C11.86%2C0%2C0%2C0%2C.13%2C2.23%2C2.18%2C2.18%2C0%2C0%2C0%2C.84%2C1.31%2C2.68%2C2.68%2C0%2C0%2C0%2C1.6.47%2C3.52%2C3.52%2C0%2C0%2C0%2C1.78-.48%2C2.76%2C2.76%2C0%2C0%2C0%2C1.18-1.33%2C6.68%2C6.68%2C0%2C0%2C0%2C.34-2.43v-6.67h2.11v12.45Z%22%2F%3E%3Cpath%20class%3D%22cls-2%22%20d%3D%22M158%2C169.69l.31%2C1.86a7.59%2C7.59%2C0%2C0%2C1-1.6.19%2C3.64%2C3.64%2C0%2C0%2C1-1.78-.36%2C2%2C2%2C0%2C0%2C1-.89-1%2C7.55%2C7.55%2C0%2C0%2C1-.26-2.49v-7.16h-1.54v-1.64h1.54v-3.08l2.1-1.27v4.35H158v1.64h-2.12v7.28a3.83%2C3.83%2C0%2C0%2C0%2C.11%2C1.16.92.92%2C0%2C0%2C0%2C.37.41%2C1.38%2C1.38%2C0%2C0%2C0%2C.72.15A6%2C6%2C0%2C0%2C0%2C158%2C169.69Z%22%2F%3E%3Cpath%20class%3D%22cls-5%22%20d%3D%22M167.69%2C169.69l.3%2C1.86a7.43%2C7.43%2C0%2C0%2C1-1.59.19%2C3.61%2C3.61%2C0%2C0%2C1-1.78-.36%2C2%2C2%2C0%2C0%2C1-.89-1%2C7.28%2C7.28%2C0%2C0%2C1-.26-2.49v-7.16h-1.55v-1.64h1.55v-3.08l2.1-1.27v4.35h2.12v1.64h-2.12v7.28a3.51%2C3.51%2C0%2C0%2C0%2C.11%2C1.16.84.84%2C0%2C0%2C0%2C.36.41%2C1.43%2C1.43%2C0%2C0%2C0%2C.72.15A6.1%2C6.1%2C0%2C0%2C0%2C167.69%2C169.69Z%22%2F%3E%3Cpath%20class%3D%22cls-5%22%20d%3D%22M169%2C165.35a6.43%2C6.43%2C0%2C0%2C1%2C1.93-5.12%2C5.79%2C5.79%2C0%2C0%2C1%2C3.91-1.38%2C5.6%2C5.6%2C0%2C0%2C1%2C4.2%2C1.68%2C6.42%2C6.42%2C0%2C0%2C1%2C1.62%2C4.65%2C8.25%2C8.25%2C0%2C0%2C1-.72%2C3.78%2C5.13%2C5.13%2C0%2C0%2C1-2.09%2C2.14%2C6.2%2C6.2%2C0%2C0%2C1-3%2C.76%2C5.57%2C5.57%2C0%2C0%2C1-4.22-1.68A6.65%2C6.65%2C0%2C0%2C1%2C169%2C165.35Zm2.17%2C0a5.26%2C5.26%2C0%2C0%2C0%2C1.05%2C3.58%2C3.47%2C3.47%2C0%2C0%2C0%2C5.23%2C0%2C5.41%2C5.41%2C0%2C0%2C0%2C1.05-3.65%2C5.13%2C5.13%2C0%2C0%2C0-1.05-3.49%2C3.48%2C3.48%2C0%2C0%2C0-5.23%2C0A5.25%2C5.25%2C0%2C0%2C0%2C171.13%2C165.35Z%22%2F%3E%3Cpath%20class%3D%22cls-5%22%20d%3D%22M183.1%2C171.58V159.13H185v1.77a4.46%2C4.46%2C0%2C0%2C1%2C4-2.05%2C5.2%2C5.2%2C0%2C0%2C1%2C2.07.41%2C3.25%2C3.25%2C0%2C0%2C1%2C1.41%2C1.06%2C4%2C4%2C0%2C0%2C1%2C.65%2C1.55%2C11.89%2C11.89%2C0%2C0%2C1%2C.12%2C2.06v7.65H191.1V164a5.85%2C5.85%2C0%2C0%2C0-.24-1.93%2C2%2C2%2C0%2C0%2C0-.88-1%2C2.82%2C2.82%2C0%2C0%2C0-1.47-.38%2C3.39%2C3.39%2C0%2C0%2C0-2.32.85c-.66.57-1%2C1.66-1%2C3.25v6.8Z%22%2F%3E%3Ccircle%20class%3D%22cls-4%22%20cx%3D%2271.9%22%20cy%3D%2276.81%22%20r%3D%2230%22%2F%3E%3Cpath%20class%3D%22cls-3%22%20d%3D%22M62.69%2C68.35h4.89v2.5H59.25V62.53h2.5v3.23a15%2C15%2C0%2C0%2C1%2C25.15%2C11H84.4A12.5%2C12.5%2C0%2C0%2C0%2C63.06%2C68C62.93%2C68.09%2C62.81%2C68.22%2C62.69%2C68.35Zm19.36%2C19.5a15%2C15%2C0%2C0%2C1-25.15-11h2.5a12.51%2C12.51%2C0%2C0%2C0%2C21.34%2C8.85l.37-.39H76.22v-2.5h8.33v8.32h-2.5Z%22%2F%3E%3Cpath%20class%3D%22cls-7%22%20d%3D%22M46.94%2C47.79a2.92%2C2.92%2C0%2C0%2C1-2.25-1l-7-8.38a2.93%2C2.93%2C0%2C1%2C1%2C4.48-3.77L49.17%2C43a2.92%2C2.92%2C0%2C0%2C1-.35%2C4.12A2.88%2C2.88%2C0%2C0%2C1%2C46.94%2C47.79Z%22%2F%3E%3Cpath%20class%3D%22cls-8%22%20d%3D%22M37.06%2C59.93h-.25L25.89%2C59a2.93%2C2.93%2C0%2C0%2C1%2C.51-5.83l10.91%2C1a2.93%2C2.93%2C0%2C0%2C1-.25%2C5.84Z%22%2F%3E%3Cpath%20class%3D%22cls-8%22%20d%3D%22M60.58%2C40.14l-.25%2C0A2.93%2C2.93%2C0%2C0%2C1%2C57.66%2C37l.94-10.91a2.93%2C2.93%2C0%2C1%2C1%2C5.83.5l-.94%2C10.91A2.93%2C2.93%2C0%2C0%2C1%2C60.58%2C40.14Z%22%2F%3E%3Crect%20class%3D%22cls-2%22%20x%3D%2299%22%20y%3D%22128.31%22%20width%3D%2215%22%20height%3D%226.27%22%2F%3E%3Crect%20class%3D%22cls-2%22%20x%3D%22123.56%22%20y%3D%22112.59%22%20width%3D%2215%22%20height%3D%2222%22%2F%3E%3Crect%20class%3D%22cls-9%22%20x%3D%22160%22%20y%3D%22106.81%22%20width%3D%227.5%22%20height%3D%2227.78%22%2F%3E%3Crect%20class%3D%22cls-2%22%20x%3D%22152.5%22%20y%3D%22106.81%22%20width%3D%227.5%22%20height%3D%2227.78%22%2F%3E%3Crect%20class%3D%22cls-9%22%20x%3D%22206%22%20y%3D%2291.81%22%20width%3D%2215%22%20height%3D%2242.78%22%2F%3E%3Crect%20class%3D%22cls-9%22%20x%3D%22179.25%22%20y%3D%22103.64%22%20width%3D%2215%22%20height%3D%2230.94%22%2F%3E%3Cpath%20class%3D%22cls-4%22%20d%3D%22M95%2C130.81a2.62%2C2.62%2C0%2C0%2C1-1-.21%2C2.5%2C2.5%2C0%2C0%2C1-1.26-3.31C93.31%2C126%2C107.88%2C94.78%2C160%2C94.78a2.5%2C2.5%2C0%2C0%2C1%2C0%2C5c-48.91%2C0-62.59%2C29.26-62.72%2C29.56A2.5%2C2.5%2C0%2C0%2C1%2C95%2C130.81Z%22%2F%3E%3Cpath%20class%3D%22cls-6%22%20d%3D%22M226%2C63.73a2.5%2C2.5%2C0%2C0%2C0-3.3%2C1.26c-.55%2C1.22-14%2C29.79-62.72%2C29.79h0v5h0c52.13%2C0%2C66.69-31.42%2C67.28-32.75A2.5%2C2.5%2C0%2C0%2C0%2C226%2C63.73Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var resourceIcon = "data:image/png;base64,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";

// 判断是否变量定义
const isUndef = (val) => val === undefined || val === null;

const headerNavModel = [
    {
        key: 'guide',
        name: '指南',
        icon: guideIcon,
        url: 'guide/design',
        description: '了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。'
    },
    {
        key: 'component',
        name: '组件',
        icon: componentIcon,
        url: 'component/installation',
        description: '使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。'
    },
    {
        key: 'theme',
        name: '主题',
        icon: themeIcon,
        url: 'theme',
        description: '在线主题编辑器，可视化定制和管理站点主题、组件样式。'
    },
    {
        key: 'resource',
        name: '资源',
        icon: resourceIcon,
        url: 'resource',
        description: '下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。'
    },
];
const componentNavModel = [
    {
        key: 'vue3',
        name: "Element Plus",
        url: 'https://element-plus.gitee.io/#/zh-CN',
        target: '_blank'
    },
    {
        key: 'react',
        name: "Element React",
        url: 'https://elemefe.github.io/element-react',
        target: '_blank'
    },
    {
        key: 'angular',
        name: "Element Angular",
        url: 'https://element-angular.faas.ele.me/guide/install',
        target: '_blank'
    },
    {
        key: 'guide',
        name: '开发指南',
        children: [
            {
                key: 'installation',
                name: '安装',
                url: 'component/installation'
            },
            {
                key: 'quickstart',
                name: '快速上手',
                url: 'component/quickstart'
            },
            {
                key: 'i18n',
                name: '国际化',
                url: 'component/i18n'
            },
            {
                key: 'custom-theme',
                name: '自定义主题',
                url: 'component/custom-theme'
            },
            {
                key: 'transition',
                name: '内置过渡动画',
                url: 'component/transition'
            },
        ]
    },
    {
        key: 'component',
        name: '组件',
        children: [
            {
                key: 'basic',
                name: '基础',
                children: [
                    {
                        key: 'layout',
                        name: 'Layout 布局',
                        url: 'component/layout'
                    },
                    {
                        key: 'container',
                        name: 'Container 布局容器',
                        url: 'component/container'
                    },
                    {
                        key: 'color',
                        name: 'Color 色彩',
                        url: 'component/color'
                    },
                    {
                        key: 'typography',
                        name: 'Typography 字体',
                        url: 'component/typography'
                    },
                    {
                        key: 'border',
                        name: 'Border 边框',
                        url: 'component/border'
                    },
                    {
                        key: 'icon',
                        name: 'Icon 图标',
                        url: 'component/icon'
                    },
                    {
                        key: 'button',
                        name: 'Button 按钮',
                        url: 'component/button'
                    },
                    {
                        key: 'link',
                        name: 'Link 文字链接',
                        url: 'component/link'
                    },
                ]
            }
        ]
    },
];
// 数组降维
const flattenDeep = (data) => {
    let list = [];
    for (let item of data) {
        if (isUndef(item === null || item === void 0 ? void 0 : item.children)) {
            list.push(item);
        }
        else {
            list = list.concat(flattenDeep(item.children));
        }
    }
    return list;
};
// 获取相邻页面
const getBrotherPage = (key) => {
    const list = flattenDeep(componentNavModel);
    const i = list.findIndex(item => item.key === key);
    let prev = list[i - 1];
    let next = list[i + 1];
    // 若为外链，则不需要展示
    prev = isUndef(prev === null || prev === void 0 ? void 0 : prev.target) ? prev : undefined;
    return [prev, next];
};

const githubBaseUrl = 'https://github.com/PingTouG/element-svelte';
const linksModel = [
    {
        name: '代码仓库',
        url: githubBaseUrl
    },
    {
        name: '更新日志',
        url: `${githubBaseUrl}/releases`
    },
    {
        name: 'Element-Vue',
        url: 'https://github.com/ElemeFE/elementt'
    },
    {
        name: 'Element-Plus(Vue3.x)',
        url: 'https://github.com/element-plus/element-plus'
    },
    {
        name: 'Element-React',
        url: 'https://github.com/elemefe/element-react'
    },
    {
        name: 'Element-Angular',
        url: 'https://github.com/ElemeFE/element-angular'
    }
];
const communityModel = [
    {
        name: '反馈建议',
        url: `${githubBaseUrl}/issues`
    },
    {
        name: 'SegmentFault',
        url: 'https://segmentfault.com/t/element-ui'
    }
];

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };

      module.exports["default"] = module.exports, module.exports.__esModule = true;
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };

      module.exports["default"] = module.exports, module.exports.__esModule = true;
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$2 = "..\\packages\\Icon\\index.svelte";

function create_fragment$3(ctx) {
  var i;
  var i_class_value;
  var i_style_value;
  var block = {
    c: function create() {
      i = element("i");
      this.h();
    },
    l: function claim(nodes) {
      i = claim_element(nodes, "I", {
        class: true,
        style: true
      });
      children(i).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(i, "class", i_class_value = "iconfont " + (
      /*name*/
      ctx[1] ? "icon-".concat(
      /*name*/
      ctx[1]) : ""));
      attr_dev(i, "style", i_style_value = "font-size: ".concat(
      /*size*/
      ctx[2], ";").concat(
      /*color*/
      ctx[0] ? "color: ".concat(
      /*color*/
      ctx[0], ";") : ""));
      add_location(i, file$2, 5, 0, 107);
    },
    m: function mount(target, anchor) {
      insert_dev(target, i, anchor);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*name*/
      2 && i_class_value !== (i_class_value = "iconfont " + (
      /*name*/
      ctx[1] ? "icon-".concat(
      /*name*/
      ctx[1]) : ""))) {
        attr_dev(i, "class", i_class_value);
      }

      if (dirty &
      /*size, color*/
      5 && i_style_value !== (i_style_value = "font-size: ".concat(
      /*size*/
      ctx[2], ";").concat(
      /*color*/
      ctx[0] ? "color: ".concat(
      /*color*/
      ctx[0], ";") : ""))) {
        attr_dev(i, "style", i_style_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(i);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$3($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Icon", slots, []);
  var _$$props$color = $$props.color,
      color = _$$props$color === void 0 ? undefined : _$$props$color;
  var name = $$props.name;
  var _$$props$size = $$props.size,
      size = _$$props$size === void 0 ? "16px" : _$$props$size;
  var writable_props = ["color", "name", "size"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Icon> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("color" in $$props) $$invalidate(0, color = $$props.color);
    if ("name" in $$props) $$invalidate(1, name = $$props.name);
    if ("size" in $$props) $$invalidate(2, size = $$props.size);
  };

  $$self.$capture_state = function () {
    return {
      color: color,
      name: name,
      size: size
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("color" in $$props) $$invalidate(0, color = $$props.color);
    if ("name" in $$props) $$invalidate(1, name = $$props.name);
    if ("size" in $$props) $$invalidate(2, size = $$props.size);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [color, name, size];
}

var Icon = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Icon, _SvelteComponentDev);

  var _super = _createSuper$3(Icon);

  function Icon(options) {
    var _this;

    _classCallCheck(this, Icon);

    _this = _super.call(this, options);
    init$1(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
      color: 0,
      name: 1,
      size: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Icon",
      options: options,
      id: create_fragment$3.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*name*/
    ctx[1] === undefined && !("name" in props)) {
      console.warn("<Icon> was created without expected prop 'name'");
    }

    return _this;
  }

  _createClass(Icon, [{
    key: "color",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "name",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "size",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Icon;
}(SvelteComponentDev);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src\\routes\\_layout.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
}

function get_each_context_2(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[8] = list[i];
  return child_ctx;
} // (10:6) {#each headerNavModel as nav (nav.key)}


function create_each_block_2(key_1, ctx) {
  var a;
  var t_value =
  /*nav*/
  ctx[8].name + "";
  var t;
  var a_aria_current_value;
  var block = {
    key: key_1,
    first: null,
    c: function create() {
      a = element("a");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        class: true,
        "aria-current": true,
        href: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "class", "nav__item svelte-nc2yiv");
      attr_dev(a, "aria-current", a_aria_current_value =
      /*segment*/
      ctx[0] ===
      /*nav*/
      ctx[8].key ?
      /*nav*/
      ctx[8].key : undefined);
      attr_dev(a, "href", /*nav*/
      ctx[8].url);
      add_location(a, file$1, 10, 8, 339);
      this.first = a;
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, t);
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;

      if (dirty &
      /*segment*/
      1 && a_aria_current_value !== (a_aria_current_value =
      /*segment*/
      ctx[0] ===
      /*nav*/
      ctx[8].key ?
      /*nav*/
      ctx[8].key : undefined)) {
        attr_dev(a, "aria-current", a_aria_current_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(a);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_2.name,
    type: "each",
    source: "(10:6) {#each headerNavModel as nav (nav.key)}",
    ctx: ctx
  });
  return block;
} // (24:0) {#if segment !== 'component'}


function create_if_block$2(ctx) {
  var footer;
  var div2;
  var div0;
  var h30;
  var t0;
  var t1;
  var ul0;
  var each_blocks_1 = [];
  var each0_lookup = new Map();
  var t2;
  var div1;
  var h31;
  var t3;
  var t4;
  var ul1;
  var each_blocks = [];
  var each1_lookup = new Map();
  var t5;
  var div4;
  var h32;
  var t6;
  var t7;
  var div3;
  var span;
  var icon0;
  var t8;
  var a;
  var icon1;
  var current;
  var each_value_1 = linksModel;
  validate_each_argument(each_value_1);

  var get_key = function get_key(ctx) {
    return (
      /*item*/
      ctx[3].url
    );
  };

  validate_each_keys(ctx, each_value_1, get_each_context_1, get_key);

  for (var i = 0; i < each_value_1.length; i += 1) {
    var child_ctx = get_each_context_1(ctx, each_value_1, i);
    var key = get_key(child_ctx);
    each0_lookup.set(key, each_blocks_1[i] = create_each_block_1(key, child_ctx));
  }

  var each_value = communityModel;
  validate_each_argument(each_value);

  var get_key_1 = function get_key_1(ctx) {
    return (
      /*item*/
      ctx[3].url
    );
  };

  validate_each_keys(ctx, each_value, get_each_context, get_key_1);

  for (var _i = 0; _i < each_value.length; _i += 1) {
    var _child_ctx = get_each_context(ctx, each_value, _i);

    var _key = get_key_1(_child_ctx);

    each1_lookup.set(_key, each_blocks[_i] = create_each_block(_key, _child_ctx));
  }

  icon0 = new Icon({
    props: {
      name: "wechat",
      size: "2.25rem"
    },
    $$inline: true
  });
  icon1 = new Icon({
    props: {
      name: "github",
      size: "2.25rem"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      footer = element("footer");
      div2 = element("div");
      div0 = element("div");
      h30 = element("h3");
      t0 = text("链接");
      t1 = space();
      ul0 = element("ul");

      for (var _i2 = 0; _i2 < each_blocks_1.length; _i2 += 1) {
        each_blocks_1[_i2].c();
      }

      t2 = space();
      div1 = element("div");
      h31 = element("h3");
      t3 = text("社区");
      t4 = space();
      ul1 = element("ul");

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].c();
      }

      t5 = space();
      div4 = element("div");
      h32 = element("h3");
      t6 = text("ElementSvelte Author");
      t7 = space();
      div3 = element("div");
      span = element("span");
      create_component(icon0.$$.fragment);
      t8 = space();
      a = element("a");
      create_component(icon1.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      footer = claim_element(nodes, "FOOTER", {
        class: true
      });
      var footer_nodes = children(footer);
      div2 = claim_element(footer_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h30 = claim_element(div0_nodes, "H3", {
        class: true
      });
      var h30_nodes = children(h30);
      t0 = claim_text(h30_nodes, "链接");
      h30_nodes.forEach(detach_dev);
      t1 = claim_space(div0_nodes);
      ul0 = claim_element(div0_nodes, "UL", {
        class: true
      });
      var ul0_nodes = children(ul0);

      for (var _i4 = 0; _i4 < each_blocks_1.length; _i4 += 1) {
        each_blocks_1[_i4].l(ul0_nodes);
      }

      ul0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      h31 = claim_element(div1_nodes, "H3", {
        class: true
      });
      var h31_nodes = children(h31);
      t3 = claim_text(h31_nodes, "社区");
      h31_nodes.forEach(detach_dev);
      t4 = claim_space(div1_nodes);
      ul1 = claim_element(div1_nodes, "UL", {
        class: true
      });
      var ul1_nodes = children(ul1);

      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        each_blocks[_i5].l(ul1_nodes);
      }

      ul1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(footer_nodes);
      div4 = claim_element(footer_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      h32 = claim_element(div4_nodes, "H3", {
        class: true
      });
      var h32_nodes = children(h32);
      t6 = claim_text(h32_nodes, "ElementSvelte Author");
      h32_nodes.forEach(detach_dev);
      t7 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      span = claim_element(div3_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      claim_component(icon0.$$.fragment, span_nodes);
      span_nodes.forEach(detach_dev);
      t8 = claim_space(div3_nodes);
      a = claim_element(div3_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a_nodes = children(a);
      claim_component(icon1.$$.fragment, a_nodes);
      a_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      footer_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h30, "class", "link__title svelte-nc2yiv");
      add_location(h30, file$1, 27, 8, 689);
      attr_dev(ul0, "class", "link__list");
      add_location(ul0, file$1, 28, 8, 730);
      attr_dev(div0, "class", "links__item svelte-nc2yiv");
      add_location(div0, file$1, 26, 6, 654);
      attr_dev(h31, "class", "link__title svelte-nc2yiv");
      add_location(h31, file$1, 37, 8, 1015);
      attr_dev(ul1, "class", "link__list");
      add_location(ul1, file$1, 38, 8, 1056);
      attr_dev(div1, "class", "links__item svelte-nc2yiv");
      add_location(div1, file$1, 36, 6, 980);
      attr_dev(div2, "class", "links svelte-nc2yiv");
      add_location(div2, file$1, 25, 4, 627);
      attr_dev(h32, "class", "icon__title svelte-nc2yiv");
      add_location(h32, file$1, 48, 6, 1346);
      attr_dev(span, "class", "icon__item svelte-nc2yiv");
      add_location(span, file$1, 50, 8, 1437);
      attr_dev(a, "href", githubBaseUrl);
      attr_dev(a, "target", "_blank");
      attr_dev(a, "class", "icon__item svelte-nc2yiv");
      add_location(a, file$1, 53, 8, 1538);
      attr_dev(div3, "class", "icon__list svelte-nc2yiv");
      add_location(div3, file$1, 49, 6, 1403);
      attr_dev(div4, "class", "icon");
      add_location(div4, file$1, 47, 4, 1320);
      attr_dev(footer, "class", "svelte-nc2yiv");
      add_location(footer, file$1, 24, 2, 613);
    },
    m: function mount(target, anchor) {
      insert_dev(target, footer, anchor);
      append_dev(footer, div2);
      append_dev(div2, div0);
      append_dev(div0, h30);
      append_dev(h30, t0);
      append_dev(div0, t1);
      append_dev(div0, ul0);

      for (var _i6 = 0; _i6 < each_blocks_1.length; _i6 += 1) {
        each_blocks_1[_i6].m(ul0, null);
      }

      append_dev(div2, t2);
      append_dev(div2, div1);
      append_dev(div1, h31);
      append_dev(h31, t3);
      append_dev(div1, t4);
      append_dev(div1, ul1);

      for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
        each_blocks[_i7].m(ul1, null);
      }

      append_dev(footer, t5);
      append_dev(footer, div4);
      append_dev(div4, h32);
      append_dev(h32, t6);
      append_dev(div4, t7);
      append_dev(div4, div3);
      append_dev(div3, span);
      mount_component(icon0, span, null);
      append_dev(div3, t8);
      append_dev(div3, a);
      mount_component(icon1, a, null);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*linksModel*/
      0) {
        each_value_1 = linksModel;
        validate_each_argument(each_value_1);
        validate_each_keys(ctx, each_value_1, get_each_context_1, get_key);
        each_blocks_1 = update_keyed_each(each_blocks_1, dirty, get_key, 1, ctx, each_value_1, each0_lookup, ul0, destroy_block, create_each_block_1, null, get_each_context_1);
      }

      if (dirty &
      /*communityModel*/
      0) {
        each_value = communityModel;
        validate_each_argument(each_value);
        validate_each_keys(ctx, each_value, get_each_context, get_key_1);
        each_blocks = update_keyed_each(each_blocks, dirty, get_key_1, 1, ctx, each_value, each1_lookup, ul1, destroy_block, create_each_block, null, get_each_context);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon0.$$.fragment, local);
      transition_in(icon1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon0.$$.fragment, local);
      transition_out(icon1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(footer);

      for (var _i8 = 0; _i8 < each_blocks_1.length; _i8 += 1) {
        each_blocks_1[_i8].d();
      }

      for (var _i9 = 0; _i9 < each_blocks.length; _i9 += 1) {
        each_blocks[_i9].d();
      }

      destroy_component(icon0);
      destroy_component(icon1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$2.name,
    type: "if",
    source: "(24:0) {#if segment !== 'component'}",
    ctx: ctx
  });
  return block;
} // (30:10) {#each linksModel as item (item.url)}


function create_each_block_1(key_1, ctx) {
  var li;
  var a;
  var t0_value =
  /*item*/
  ctx[3].name + "";
  var t0;
  var t1;
  var block = {
    key: key_1,
    first: null,
    c: function create() {
      li = element("li");
      a = element("a");
      t0 = text(t0_value);
      t1 = space();
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {
        class: true
      });
      var li_nodes = children(li);
      a = claim_element(li_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, t0_value);
      a_nodes.forEach(detach_dev);
      t1 = claim_space(li_nodes);
      li_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", /*item*/
      ctx[3].url);
      attr_dev(a, "target", "_blank");
      attr_dev(a, "class", "svelte-nc2yiv");
      add_location(a, file$1, 31, 14, 855);
      attr_dev(li, "class", "link__item svelte-nc2yiv");
      add_location(li, file$1, 30, 12, 816);
      this.first = li;
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, a);
      append_dev(a, t0);
      append_dev(li, t1);
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_1.name,
    type: "each",
    source: "(30:10) {#each linksModel as item (item.url)}",
    ctx: ctx
  });
  return block;
} // (40:10) {#each communityModel as item (item.url)}


function create_each_block(key_1, ctx) {
  var li;
  var a;
  var t0_value =
  /*item*/
  ctx[3].name + "";
  var t0;
  var t1;
  var block = {
    key: key_1,
    first: null,
    c: function create() {
      li = element("li");
      a = element("a");
      t0 = text(t0_value);
      t1 = space();
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {
        class: true
      });
      var li_nodes = children(li);
      a = claim_element(li_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, t0_value);
      a_nodes.forEach(detach_dev);
      t1 = claim_space(li_nodes);
      li_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", /*item*/
      ctx[3].url);
      attr_dev(a, "target", "_blank");
      attr_dev(a, "class", "svelte-nc2yiv");
      add_location(a, file$1, 41, 14, 1185);
      attr_dev(li, "class", "link__item svelte-nc2yiv");
      add_location(li, file$1, 40, 12, 1146);
      this.first = li;
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, a);
      append_dev(a, t0);
      append_dev(li, t1);
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(40:10) {#each communityModel as item (item.url)}",
    ctx: ctx
  });
  return block;
}

function create_fragment$2(ctx) {
  var section;
  var header;
  var a;
  var t0;
  var t1;
  var nav;
  var each_blocks = [];
  var each_1_lookup = new Map();
  var t2;
  var main;
  var t3;
  var if_block_anchor;
  var current;
  var each_value_2 = headerNavModel;
  validate_each_argument(each_value_2);

  var get_key = function get_key(ctx) {
    return (
      /*nav*/
      ctx[8].key
    );
  };

  validate_each_keys(ctx, each_value_2, get_each_context_2, get_key);

  for (var i = 0; i < each_value_2.length; i += 1) {
    var child_ctx = get_each_context_2(ctx, each_value_2, i);
    var key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block_2(key, child_ctx));
  }

  var default_slot_template =
  /*#slots*/
  ctx[2].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[1], null);
  var if_block =
  /*segment*/
  ctx[0] !== "component" && create_if_block$2(ctx);
  var block = {
    c: function create() {
      section = element("section");
      header = element("header");
      a = element("a");
      t0 = text("ElementSvelte");
      t1 = space();
      nav = element("nav");

      for (var _i10 = 0; _i10 < each_blocks.length; _i10 += 1) {
        each_blocks[_i10].c();
      }

      t2 = space();
      main = element("main");
      if (default_slot) default_slot.c();
      t3 = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      header = claim_element(section_nodes, "HEADER", {
        class: true
      });
      var header_nodes = children(header);
      a = claim_element(header_nodes, "A", {
        class: true,
        href: true
      });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, "ElementSvelte");
      a_nodes.forEach(detach_dev);
      t1 = claim_space(header_nodes);
      nav = claim_element(header_nodes, "NAV", {
        class: true
      });
      var nav_nodes = children(nav);

      for (var _i11 = 0; _i11 < each_blocks.length; _i11 += 1) {
        each_blocks[_i11].l(nav_nodes);
      }

      nav_nodes.forEach(detach_dev);
      header_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      main = claim_element(section_nodes, "MAIN", {
        class: true
      });
      var main_nodes = children(main);
      if (default_slot) default_slot.l(main_nodes);
      main_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      t3 = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "class", "logo svelte-nc2yiv");
      attr_dev(a, "href", "./");
      add_location(a, file$1, 7, 4, 216);
      attr_dev(nav, "class", "nav svelte-nc2yiv");
      add_location(nav, file$1, 8, 4, 265);
      attr_dev(header, "class", "svelte-nc2yiv");
      add_location(header, file$1, 6, 2, 202);
      attr_dev(main, "class", "svelte-nc2yiv");
      add_location(main, file$1, 18, 2, 533);
      attr_dev(section, "class", "svelte-nc2yiv");
      add_location(section, file$1, 5, 0, 189);
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, header);
      append_dev(header, a);
      append_dev(a, t0);
      append_dev(header, t1);
      append_dev(header, nav);

      for (var _i12 = 0; _i12 < each_blocks.length; _i12 += 1) {
        each_blocks[_i12].m(nav, null);
      }

      append_dev(section, t2);
      append_dev(section, main);

      if (default_slot) {
        default_slot.m(main, null);
      }

      insert_dev(target, t3, anchor);
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray$1(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*segment, headerNavModel, undefined*/
      1) {
        each_value_2 = headerNavModel;
        validate_each_argument(each_value_2);
        validate_each_keys(ctx, each_value_2, get_each_context_2, get_key);
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value_2, each_1_lookup, nav, destroy_block, create_each_block_2, null, get_each_context_2);
      }

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        2) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[1], dirty, null, null);
        }
      }

      if (
      /*segment*/
      ctx[0] !== "component") {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*segment*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$2(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(section);

      for (var _i13 = 0; _i13 < each_blocks.length; _i13 += 1) {
        each_blocks[_i13].d();
      }

      if (default_slot) default_slot.d(detaching);
      if (detaching) detach_dev(t3);
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$2($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Layout", slots, ['default']);
  var segment = $$props.segment;
  var writable_props = ["segment"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Layout> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
    if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      headerNavModel: headerNavModel,
      githubBaseUrl: githubBaseUrl,
      linksModel: linksModel,
      communityModel: communityModel,
      Icon: Icon,
      segment: segment
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [segment, $$scope, slots];
}

var Layout = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits$1(Layout, _SvelteComponentDev);

  var _super = _createSuper$2(Layout);

  function Layout(options) {
    var _this;

    _classCallCheck$1(this, Layout);

    _this = _super.call(this, options);
    init$1(_assertThisInitialized$1(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      segment: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "Layout",
      options: options,
      id: create_fragment$2.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*segment*/
    ctx[0] === undefined && !("segment" in props)) {
      console.warn("<Layout> was created without expected prop 'segment'");
    }

    return _this;
  }

  _createClass$1(Layout, [{
    key: "segment",
    get: function get() {
      throw new Error("<Layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Layout;
}(SvelteComponentDev);

var root_comp = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Layout
});

var notFoundIcon = "data:image/png;base64,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";

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Error_1$1 = globals.Error;
var file = "src\\routes\\_error.svelte"; // (12:2) {#if status === 404}

function create_if_block_1$1(ctx) {
  var img;
  var img_src_value;
  var img_alt_value;
  var block = {
    c: function create() {
      img = element("img");
      this.h();
    },
    l: function claim(nodes) {
      img = claim_element(nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "class", "not-found__icon");
      if (img.src !== (img_src_value = notFoundIcon)) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", img_alt_value =
      /*error*/
      ctx[1].message);
      add_location(img, file, 12, 4, 289);
    },
    m: function mount(target, anchor) {
      insert_dev(target, img, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*error*/
      2 && img_alt_value !== (img_alt_value =
      /*error*/
      ctx[1].message)) {
        attr_dev(img, "alt", img_alt_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(img);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1$1.name,
    type: "if",
    source: "(12:2) {#if status === 404}",
    ctx: ctx
  });
  return block;
} // (17:2) {#if dev && error.stack}


function create_if_block$1(ctx) {
  var pre;
  var t_value =
  /*error*/
  ctx[1].stack + "";
  var t;
  var block = {
    c: function create() {
      pre = element("pre");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      pre = claim_element(nodes, "PRE", {});
      var pre_nodes = children(pre);
      t = claim_text(pre_nodes, t_value);
      pre_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(pre, file, 17, 4, 430);
    },
    m: function mount(target, anchor) {
      insert_dev(target, pre, anchor);
      append_dev(pre, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*error*/
      2 && t_value !== (t_value =
      /*error*/
      ctx[1].stack + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(pre);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$1.name,
    type: "if",
    source: "(17:2) {#if dev && error.stack}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var title_value;
  var t0;
  var div;
  var t1;
  var p;
  var t2_value =
  /*error*/
  ctx[1].message + "";
  var t2;
  var t3;
  document.title = title_value = "" + (
  /*status*/
  ctx[0] + " | ElementSvelte");
  var if_block0 =
  /*status*/
  ctx[0] === 404 && create_if_block_1$1(ctx);
  var if_block1 =
  /*dev*/
  ctx[2] &&
  /*error*/
  ctx[1].stack && create_if_block$1(ctx);
  var block = {
    c: function create() {
      t0 = space();
      div = element("div");
      if (if_block0) if_block0.c();
      t1 = space();
      p = element("p");
      t2 = text(t2_value);
      t3 = space();
      if (if_block1) if_block1.c();
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1hr9sna\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if (if_block0) if_block0.l(div_nodes);
      t1 = claim_space(div_nodes);
      p = claim_element(div_nodes, "P", {});
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, t2_value);
      p_nodes.forEach(detach_dev);
      t3 = claim_space(div_nodes);
      if (if_block1) if_block1.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p, file, 14, 2, 372);
      attr_dev(div, "class", "container svelte-1js8nwj");
      add_location(div, file, 10, 0, 236);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      if (if_block0) if_block0.m(div, null);
      append_dev(div, t1);
      append_dev(div, p);
      append_dev(p, t2);
      append_dev(div, t3);
      if (if_block1) if_block1.m(div, null);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray$1(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*status*/
      1 && title_value !== (title_value = "" + (
      /*status*/
      ctx[0] + " | ElementSvelte"))) {
        document.title = title_value;
      }

      if (
      /*status*/
      ctx[0] === 404) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_1$1(ctx);
          if_block0.c();
          if_block0.m(div, t1);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (dirty &
      /*error*/
      2 && t2_value !== (t2_value =
      /*error*/
      ctx[1].message + "")) set_data_dev(t2, t2_value);

      if (
      /*dev*/
      ctx[2] &&
      /*error*/
      ctx[1].stack) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block$1(ctx);
          if_block1.c();
          if_block1.m(div, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Error", slots, []);
  var status = $$props.status;
  var error = $$props.error;
  var dev = "development" === "development";
  var writable_props = ["status", "error"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Error> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("status" in $$props) $$invalidate(0, status = $$props.status);
    if ("error" in $$props) $$invalidate(1, error = $$props.error);
  };

  $$self.$capture_state = function () {
    return {
      notFoundIcon: notFoundIcon,
      status: status,
      error: error,
      dev: dev
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("status" in $$props) $$invalidate(0, status = $$props.status);
    if ("error" in $$props) $$invalidate(1, error = $$props.error);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [status, error, dev];
}

var Error$1 = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits$1(Error, _SvelteComponentDev);

  var _super = _createSuper$1(Error);

  function Error(options) {
    var _this;

    _classCallCheck$1(this, Error);

    _this = _super.call(this, options);
    init$1(_assertThisInitialized$1(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      status: 0,
      error: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "Error",
      options: options,
      id: create_fragment$1.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*status*/
    ctx[0] === undefined && !("status" in props)) {
      console.warn("<Error> was created without expected prop 'status'");
    }

    if (
    /*error*/
    ctx[1] === undefined && !("error" in props)) {
      console.warn("<Error> was created without expected prop 'error'");
    }

    return _this;
  }

  _createClass$1(Error, [{
    key: "status",
    get: function get() {
      throw new Error_1$1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1$1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "error",
    get: function get() {
      throw new Error_1$1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1$1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Error;
}(SvelteComponentDev);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Error_1 = globals.Error;

function create_else_block(ctx) {
  var switch_instance;
  var switch_instance_anchor;
  var current;
  var switch_instance_spread_levels = [{
    segment:
    /*segments*/
    ctx[2][1]
  },
  /*level1*/
  ctx[4].props];
  var switch_value =
  /*level1*/
  ctx[4].component;

  function switch_props(ctx) {
    var switch_instance_props = {
      $$slots: {
        default: [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    };

    for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }

    return {
      props: switch_instance_props,
      $$inline: true
    };
  }

  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }

  var block = {
    c: function create() {
      if (switch_instance) create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l: function claim(nodes) {
      if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }

      insert_dev(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var switch_instance_changes = dirty &
      /*segments, level1*/
      20 ? get_spread_update(switch_instance_spread_levels, [dirty &
      /*segments*/
      4 && {
        segment:
        /*segments*/
        ctx[2][1]
      }, dirty &
      /*level1*/
      16 && get_spread_object(
      /*level1*/
      ctx[4].props)]) : {};

      if (dirty &
      /*$$scope, level2*/
      288) {
        switch_instance_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (switch_value !== (switch_value =
      /*level1*/
      ctx[4].component)) {
        if (switch_instance) {
          group_outros();
          var old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, function () {
            destroy_component(old_component, 1);
          });
          check_outros();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function intro(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(switch_instance_anchor);
      if (switch_instance) destroy_component(switch_instance, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(24:1) {:else}",
    ctx: ctx
  });
  return block;
} // (22:1) {#if error}


function create_if_block(ctx) {
  var error_1;
  var current;
  error_1 = new Error$1({
    props: {
      error:
      /*error*/
      ctx[0],
      status:
      /*status*/
      ctx[1]
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(error_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(error_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(error_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var error_1_changes = {};
      if (dirty &
      /*error*/
      1) error_1_changes.error =
      /*error*/
      ctx[0];
      if (dirty &
      /*status*/
      2) error_1_changes.status =
      /*status*/
      ctx[1];
      error_1.$set(error_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(error_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(error_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(error_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(22:1) {#if error}",
    ctx: ctx
  });
  return block;
} // (26:3) {#if level2}


function create_if_block_1(ctx) {
  var switch_instance;
  var switch_instance_anchor;
  var current;
  var switch_instance_spread_levels = [
  /*level2*/
  ctx[5].props];
  var switch_value =
  /*level2*/
  ctx[5].component;

  function switch_props(ctx) {
    var switch_instance_props = {};

    for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }

    return {
      props: switch_instance_props,
      $$inline: true
    };
  }

  if (switch_value) {
    switch_instance = new switch_value(switch_props());
  }

  var block = {
    c: function create() {
      if (switch_instance) create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l: function claim(nodes) {
      if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }

      insert_dev(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var switch_instance_changes = dirty &
      /*level2*/
      32 ? get_spread_update(switch_instance_spread_levels, [get_spread_object(
      /*level2*/
      ctx[5].props)]) : {};

      if (switch_value !== (switch_value =
      /*level2*/
      ctx[5].component)) {
        if (switch_instance) {
          group_outros();
          var old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, function () {
            destroy_component(old_component, 1);
          });
          check_outros();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function intro(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(switch_instance_anchor);
      if (switch_instance) destroy_component(switch_instance, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(26:3) {#if level2}",
    ctx: ctx
  });
  return block;
} // (25:2) <svelte:component this="{level1.component}" segment="{segments[1]}" {...level1.props}>


function create_default_slot_1(ctx) {
  var if_block_anchor;
  var current;
  var if_block =
  /*level2*/
  ctx[5] && create_if_block_1(ctx);
  var block = {
    c: function create() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (
      /*level2*/
      ctx[5]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*level2*/
          32) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(25:2) <svelte:component this=\\\"{level1.component}\\\" segment=\\\"{segments[1]}\\\" {...level1.props}>",
    ctx: ctx
  });
  return block;
} // (21:0) <Layout segment="{segments[0]}" {...level0.props}>


function create_default_slot(ctx) {
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var if_block_creators = [create_if_block, create_else_block];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*error*/
    ctx[0]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var block = {
    c: function create() {
      if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
        }

        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(21:0) <Layout segment=\\\"{segments[0]}\\\" {...level0.props}>",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var layout;
  var current;
  var layout_spread_levels = [{
    segment:
    /*segments*/
    ctx[2][0]
  },
  /*level0*/
  ctx[3].props];
  var layout_props = {
    $$slots: {
      default: [create_default_slot]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < layout_spread_levels.length; i += 1) {
    layout_props = assign(layout_props, layout_spread_levels[i]);
  }

  layout = new Layout({
    props: layout_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(layout.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(layout.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(layout, target, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray$1(_ref, 1),
          dirty = _ref2[0];

      var layout_changes = dirty &
      /*segments, level0*/
      12 ? get_spread_update(layout_spread_levels, [dirty &
      /*segments*/
      4 && {
        segment:
        /*segments*/
        ctx[2][0]
      }, dirty &
      /*level0*/
      8 && get_spread_object(
      /*level0*/
      ctx[3].props)]) : {};

      if (dirty &
      /*$$scope, error, status, level1, segments, level2*/
      311) {
        layout_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      layout.$set(layout_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(layout.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(layout.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(layout, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("App", slots, []);
  var stores = $$props.stores;
  var error = $$props.error;
  var status = $$props.status;
  var segments = $$props.segments;
  var level0 = $$props.level0;
  var _$$props$level = $$props.level1,
      level1 = _$$props$level === void 0 ? null : _$$props$level;
  var _$$props$level2 = $$props.level2,
      level2 = _$$props$level2 === void 0 ? null : _$$props$level2;
  var notify = $$props.notify;
  afterUpdate(notify);
  setContext(CONTEXT_KEY, stores);
  var writable_props = ["stores", "error", "status", "segments", "level0", "level1", "level2", "notify"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<App> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("stores" in $$props) $$invalidate(6, stores = $$props.stores);
    if ("error" in $$props) $$invalidate(0, error = $$props.error);
    if ("status" in $$props) $$invalidate(1, status = $$props.status);
    if ("segments" in $$props) $$invalidate(2, segments = $$props.segments);
    if ("level0" in $$props) $$invalidate(3, level0 = $$props.level0);
    if ("level1" in $$props) $$invalidate(4, level1 = $$props.level1);
    if ("level2" in $$props) $$invalidate(5, level2 = $$props.level2);
    if ("notify" in $$props) $$invalidate(7, notify = $$props.notify);
  };

  $$self.$capture_state = function () {
    return {
      setContext: setContext,
      afterUpdate: afterUpdate,
      CONTEXT_KEY: CONTEXT_KEY,
      Layout: Layout,
      Error: Error$1,
      stores: stores,
      error: error,
      status: status,
      segments: segments,
      level0: level0,
      level1: level1,
      level2: level2,
      notify: notify
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("stores" in $$props) $$invalidate(6, stores = $$props.stores);
    if ("error" in $$props) $$invalidate(0, error = $$props.error);
    if ("status" in $$props) $$invalidate(1, status = $$props.status);
    if ("segments" in $$props) $$invalidate(2, segments = $$props.segments);
    if ("level0" in $$props) $$invalidate(3, level0 = $$props.level0);
    if ("level1" in $$props) $$invalidate(4, level1 = $$props.level1);
    if ("level2" in $$props) $$invalidate(5, level2 = $$props.level2);
    if ("notify" in $$props) $$invalidate(7, notify = $$props.notify);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [error, status, segments, level0, level1, level2, stores, notify];
}

var App = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits$1(App, _SvelteComponentDev);

  var _super = _createSuper(App);

  function App(options) {
    var _this;

    _classCallCheck$1(this, App);

    _this = _super.call(this, options);
    init$1(_assertThisInitialized$1(_this), options, instance, create_fragment, safe_not_equal, {
      stores: 6,
      error: 0,
      status: 1,
      segments: 2,
      level0: 3,
      level1: 4,
      level2: 5,
      notify: 7
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "App",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*stores*/
    ctx[6] === undefined && !("stores" in props)) {
      console.warn("<App> was created without expected prop 'stores'");
    }

    if (
    /*error*/
    ctx[0] === undefined && !("error" in props)) {
      console.warn("<App> was created without expected prop 'error'");
    }

    if (
    /*status*/
    ctx[1] === undefined && !("status" in props)) {
      console.warn("<App> was created without expected prop 'status'");
    }

    if (
    /*segments*/
    ctx[2] === undefined && !("segments" in props)) {
      console.warn("<App> was created without expected prop 'segments'");
    }

    if (
    /*level0*/
    ctx[3] === undefined && !("level0" in props)) {
      console.warn("<App> was created without expected prop 'level0'");
    }

    if (
    /*notify*/
    ctx[7] === undefined && !("notify" in props)) {
      console.warn("<App> was created without expected prop 'notify'");
    }

    return _this;
  }

  _createClass$1(App, [{
    key: "stores",
    get: function get() {
      throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "error",
    get: function get() {
      throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "status",
    get: function get() {
      throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "segments",
    get: function get() {
      throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "level0",
    get: function get() {
      throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "level1",
    get: function get() {
      throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "level2",
    get: function get() {
      throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "notify",
    get: function get() {
      throw new Error_1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return App;
}(SvelteComponentDev);

// This file is generated by Sapper — do not edit it!
var ignore = [/^\/component\/([^/]+?)\.json$/];
var components = [{
  js: function js() {
    return Promise.all([import('./index.a2380c1b.js'), __inject_styles(["client-2bf3ca07.css","index-c7b8bd9c.css"])]).then(function(x) { return x[0]; });
  }
}, {
  js: function js() {
    return Promise.all([import('./_layout.5def5f36.js'), __inject_styles(["client-2bf3ca07.css","_layout-ea1ea01e.css"])]).then(function(x) { return x[0]; });
  }
}, {
  js: function js() {
    return Promise.all([import('./[page].126f3e78.js'), __inject_styles(["client-2bf3ca07.css"])]).then(function(x) { return x[0]; });
  }
}, {
  js: function js() {
    return Promise.all([import('./index.6bc008ee.js'), __inject_styles(["client-2bf3ca07.css"])]).then(function(x) { return x[0]; });
  }
}, {
  js: function js() {
    return Promise.all([import('./_layout.d503ceab.js'), __inject_styles(["client-2bf3ca07.css"])]).then(function(x) { return x[0]; });
  }
}, {
  js: function js() {
    return Promise.all([import('./design.f5904c95.js'), __inject_styles(["client-2bf3ca07.css","design-10a68980.css"])]).then(function(x) { return x[0]; });
  }
}, {
  js: function js() {
    return Promise.all([import('./index.ee93554b.js'), __inject_styles(["client-2bf3ca07.css"])]).then(function(x) { return x[0]; });
  }
}];
var routes = function (d) {
  return [{
    // index.svelte
    pattern: /^\/$/,
    parts: [{
      i: 0
    }]
  }, {
    // component/[page].svelte
    pattern: /^\/component\/([^/]+?)\/?$/,
    parts: [{
      i: 1
    }, {
      i: 2,
      params: function params(match) {
        return {
          page: d(match[1])
        };
      }
    }]
  }, {
    // resource/index.svelte
    pattern: /^\/resource\/?$/,
    parts: [{
      i: 3
    }]
  }, {
    // guide/design.svelte
    pattern: /^\/guide\/design\/?$/,
    parts: [{
      i: 4
    }, {
      i: 5
    }]
  }, {
    // theme/index.svelte
    pattern: /^\/theme\/?$/,
    parts: [{
      i: 6
    }]
  }];
}(decodeURIComponent);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function find_anchor(node) {
  while (node && node.nodeName.toUpperCase() !== 'A') {
    node = node.parentNode;
  } // SVG <a> elements have a lowercase name


  return node;
}

var uid = 1;

function set_uid(n) {
  uid = n;
}

var cid;

function set_cid(n) {
  cid = n;
}

var _history = typeof history !== 'undefined' ? history : {
  pushState: function pushState() {},
  replaceState: function replaceState() {},
  scrollRestoration: 'auto'
};

var scroll_history = {};

function load_current_page() {
  return Promise.resolve().then(function () {
    var _location = location,
        hash = _location.hash,
        href = _location.href;

    _history.replaceState({
      id: uid
    }, '', href);

    var target = select_target(new URL(location.href));
    if (target) return navigate(target, uid, true, hash);
  });
}

var base_url;
var handle_target;

function init(base, handler) {
  base_url = base;
  handle_target = handler;

  if ('scrollRestoration' in _history) {
    _history.scrollRestoration = 'manual';
  } // Adopted from Nuxt.js
  // Reset scrollRestoration to auto when leaving page, allowing page reload
  // and back-navigation from other pages to use the browser to restore the
  // scrolling position.


  addEventListener('beforeunload', function () {
    _history.scrollRestoration = 'auto';
  }); // Setting scrollRestoration to manual again when returning to this page.

  addEventListener('load', function () {
    _history.scrollRestoration = 'manual';
  });
  addEventListener('click', handle_click);
  addEventListener('popstate', handle_popstate);
}

function extract_query(search) {
  var query = Object.create(null);

  if (search.length > 0) {
    search.slice(1).split('&').forEach(function (searchParam) {
      var _$exec = /([^=]*)(?:=(.*))?/.exec(decodeURIComponent(searchParam.replace(/\+/g, ' '))),
          _$exec2 = _slicedToArray$1(_$exec, 3),
          key = _$exec2[1],
          _$exec2$ = _$exec2[2],
          value = _$exec2$ === void 0 ? '' : _$exec2$;

      if (typeof query[key] === 'string') query[key] = [query[key]];
      if (_typeof(query[key]) === 'object') query[key].push(value);else query[key] = value;
    });
  }

  return query;
}

function select_target(url) {
  if (url.origin !== location.origin) return null;
  if (!url.pathname.startsWith(base_url)) return null;
  var path = url.pathname.slice(base_url.length);

  if (path === '') {
    path = '/';
  } // avoid accidental clashes between server routes and page routes


  if (ignore.some(function (pattern) {
    return pattern.test(path);
  })) return;

  for (var i = 0; i < routes.length; i += 1) {
    var route = routes[i];
    var match = route.pattern.exec(path);

    if (match) {
      var query = extract_query(url.search);
      var part = route.parts[route.parts.length - 1];
      var params = part.params ? part.params(match) : {};
      var page = {
        host: location.host,
        path: path,
        query: query,
        params: params
      };
      return {
        href: url.href,
        route: route,
        match: match,
        page: page
      };
    }
  }
}

function handle_click(event) {
  // Adapted from https://github.com/visionmedia/page.js
  // MIT license https://github.com/visionmedia/page.js#license
  if (which(event) !== 1) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (event.defaultPrevented) return;
  var a = find_anchor(event.target);
  if (!a) return;
  if (!a.href) return; // check if link is inside an svg
  // in this case, both href and target are always inside an object

  var svg = _typeof(a.href) === 'object' && a.href.constructor.name === 'SVGAnimatedString';
  var href = String(svg ? a.href.baseVal : a.href);

  if (href === location.href) {
    if (!location.hash) event.preventDefault();
    return;
  } // Ignore if tag has
  // 1. 'download' attribute
  // 2. rel='external' attribute


  if (a.hasAttribute('download') || a.getAttribute('rel') === 'external') return; // Ignore if <a> has a target

  if (svg ? a.target.baseVal : a.target) return;
  var url = new URL(href); // Don't handle hash changes

  if (url.pathname === location.pathname && url.search === location.search) return;
  var target = select_target(url);

  if (target) {
    var noscroll = a.hasAttribute('sapper:noscroll');
    navigate(target, null, noscroll, url.hash);
    event.preventDefault();

    _history.pushState({
      id: cid
    }, '', url.href);
  }
}

function which(event) {
  return event.which === null ? event.button : event.which;
}

function scroll_state() {
  return {
    x: pageXOffset,
    y: pageYOffset
  };
}

function handle_popstate(event) {
  scroll_history[cid] = scroll_state();

  if (event.state) {
    var url = new URL(location.href);

    var _target = select_target(url);

    if (_target) {
      navigate(_target, event.state.id);
    } else {
      // eslint-disable-next-line
      location.href = location.href; // nosonar
    }
  } else {
    // hashchange
    set_uid(uid + 1);
    set_cid(uid);

    _history.replaceState({
      id: cid
    }, '', location.href);
  }
}

function navigate(dest, id, noscroll, hash) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/regenerator.mark(function _callee() {
    var popstate, current_scroll, scroll, deep_linked;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            popstate = !!id;

            if (popstate) {
              cid = id;
            } else {
              current_scroll = scroll_state(); // clicked on a link. preserve scroll state

              scroll_history[cid] = current_scroll;
              cid = id = ++uid;
              scroll_history[cid] = noscroll ? current_scroll : {
                x: 0,
                y: 0
              };
            }

            _context.next = 4;
            return handle_target(dest);

          case 4:
            if (document.activeElement && document.activeElement instanceof HTMLElement) document.activeElement.blur();

            if (!noscroll) {
              scroll = scroll_history[id];

              if (hash) {
                // scroll is an element id (from a hash), we need to compute y.
                deep_linked = document.getElementById(hash.slice(1));

                if (deep_linked) {
                  scroll = {
                    x: 0,
                    y: deep_linked.getBoundingClientRect().top + scrollY
                  };
                }
              }

              scroll_history[cid] = scroll;

              if (popstate || deep_linked) {
                scrollTo(scroll.x, scroll.y);
              } else {
                scrollTo(0, 0);
              }
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
}

function get_base_uri(window_document) {
  var baseURI = window_document.baseURI;

  if (!baseURI) {
    var baseTags = window_document.getElementsByTagName('base');
    baseURI = baseTags.length ? baseTags[0].href : window_document.URL;
  }

  return baseURI;
}

var prefetching = null;
var mousemove_timeout;

function start() {
  addEventListener('touchstart', trigger_prefetch);
  addEventListener('mousemove', handle_mousemove);
}

function prefetch(href) {
  var target = select_target(new URL(href, get_base_uri(document)));

  if (target) {
    if (!prefetching || href !== prefetching.href) {
      prefetching = {
        href: href,
        promise: hydrate_target(target)
      };
    }

    return prefetching.promise;
  }
}

function get_prefetched(target) {
  if (prefetching && prefetching.href === target.href) {
    return prefetching.promise;
  } else {
    return hydrate_target(target);
  }
}

function trigger_prefetch(event) {
  var a = find_anchor(event.target);

  if (a && a.rel === 'prefetch') {
    prefetch(a.href);
  }
}

function handle_mousemove(event) {
  clearTimeout(mousemove_timeout);
  mousemove_timeout = setTimeout(function () {
    trigger_prefetch(event);
  }, 20);
}

function goto(href) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    noscroll: false,
    replaceState: false
  };
  var target = select_target(new URL(href, get_base_uri(document)));

  if (target) {
    _history[opts.replaceState ? 'replaceState' : 'pushState']({
      id: cid
    }, '', href);

    return navigate(target, null, opts.noscroll);
  }

  location.href = href;
  return new Promise(function () {
    /* never resolves */
  });
}

function page_store(value) {
  var store = writable(value);
  var ready = true;

  function notify() {
    ready = true;
    store.update(function (val) {
      return val;
    });
  }

  function set(new_value) {
    ready = false;
    store.set(new_value);
  }

  function subscribe(run) {
    var old_value;
    return store.subscribe(function (new_value) {
      if (old_value === undefined || ready && new_value !== old_value) {
        run(old_value = new_value);
      }
    });
  }

  return {
    notify: notify,
    set: set,
    subscribe: subscribe
  };
}

var initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;
var ready = false;
var root_component;
var current_token;
var root_preloaded;
var current_branch = [];
var current_query = '{}';
var stores = {
  page: page_store({}),
  preloading: writable(null),
  session: writable(initial_data && initial_data.session)
};
var $session;
var session_dirty;
stores.session.subscribe(function (value) {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regenerator.mark(function _callee2() {
    var dest, token, _yield$hydrate_target, redirect, props, branch;

    return regenerator.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            $session = value;

            if (ready) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return");

          case 3:
            session_dirty = true;
            dest = select_target(new URL(location.href));
            token = current_token = {};
            _context2.next = 8;
            return hydrate_target(dest);

          case 8:
            _yield$hydrate_target = _context2.sent;
            redirect = _yield$hydrate_target.redirect;
            props = _yield$hydrate_target.props;
            branch = _yield$hydrate_target.branch;

            if (!(token !== current_token)) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt("return");

          case 14:
            if (!redirect) {
              _context2.next = 19;
              break;
            }

            _context2.next = 17;
            return goto(redirect.location, {
              replaceState: true
            });

          case 17:
            _context2.next = 21;
            break;

          case 19:
            _context2.next = 21;
            return render(branch, props, buildPageContext(props, dest.page));

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
});
var target;

function set_target(node) {
  target = node;
}

function start$1(opts) {
  set_target(opts.target);
  init(initial_data.baseUrl, handle_target$1);
  start();

  if (initial_data.error) {
    return Promise.resolve().then(function () {
      return handle_error();
    });
  }

  return load_current_page();
}

function handle_error() {
  var _location2 = location,
      host = _location2.host,
      pathname = _location2.pathname,
      search = _location2.search;
  var session = initial_data.session,
      preloaded = initial_data.preloaded,
      status = initial_data.status,
      error = initial_data.error;

  if (!root_preloaded) {
    root_preloaded = preloaded && preloaded[0];
  }

  var props = {
    error: error,
    status: status,
    session: session,
    level0: {
      props: root_preloaded
    },
    level1: {
      props: {
        status: status,
        error: error
      },
      component: Error$1
    },
    segments: preloaded
  };
  var query = extract_query(search);
  render([], props, {
    host: host,
    path: pathname,
    query: query,
    params: {},
    error: error
  });
}

function buildPageContext(props, page) {
  var error = props.error;
  return Object.assign({
    error: error
  }, page);
}

function handle_target$1(dest) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/regenerator.mark(function _callee3() {
    var hydrating, token, hydrated_target, redirect, props, branch;
    return regenerator.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (root_component) stores.preloading.set(true);
            hydrating = get_prefetched(dest);
            token = current_token = {};
            _context3.next = 5;
            return hydrating;

          case 5:
            hydrated_target = _context3.sent;
            redirect = hydrated_target.redirect;

            if (!(token !== current_token)) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return");

          case 9:
            if (!redirect) {
              _context3.next = 14;
              break;
            }

            _context3.next = 12;
            return goto(redirect.location, {
              replaceState: true
            });

          case 12:
            _context3.next = 17;
            break;

          case 14:
            props = hydrated_target.props, branch = hydrated_target.branch;
            _context3.next = 17;
            return render(branch, props, buildPageContext(props, dest.page));

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
}

function render(branch, props, page) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/regenerator.mark(function _callee4() {
    return regenerator.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            stores.page.set(page);
            stores.preloading.set(false);

            if (!root_component) {
              _context4.next = 6;
              break;
            }

            root_component.$set(props);
            _context4.next = 13;
            break;

          case 6:
            props.stores = {
              page: {
                subscribe: stores.page.subscribe
              },
              preloading: {
                subscribe: stores.preloading.subscribe
              },
              session: stores.session
            };
            _context4.next = 9;
            return root_preloaded;

          case 9:
            _context4.t0 = _context4.sent;
            props.level0 = {
              props: _context4.t0
            };
            props.notify = stores.page.notify;
            root_component = new App({
              target: target,
              props: props,
              hydrate: true
            });

          case 13:
            current_branch = branch;
            current_query = JSON.stringify(page.query);
            ready = true;
            session_dirty = false;

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
}

function part_changed(i, segment, match, stringified_query) {
  // TODO only check query string changes for preload functions
  // that do in fact depend on it (using static analysis or
  // runtime instrumentation)
  if (stringified_query !== current_query) return true;
  var previous = current_branch[i];
  if (!previous) return false;
  if (segment !== previous.segment) return true;

  if (previous.match) {
    if (JSON.stringify(previous.match.slice(1, i + 2)) !== JSON.stringify(match.slice(1, i + 2))) {
      return true;
    }
  }
}

function hydrate_target(dest) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/regenerator.mark(function _callee6() {
    var _this = this;

    var route, page, segments, _redirect, props, preload_context, root_preload, branch, l, stringified_query, match, segment_dirty;

    return regenerator.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            route = dest.route, page = dest.page;
            segments = page.path.split('/').filter(Boolean);
            _redirect = null;
            props = {
              error: null,
              status: 200,
              segments: [segments[0]]
            };
            preload_context = {
              fetch: function (_fetch) {
                function fetch(_x, _x2) {
                  return _fetch.apply(this, arguments);
                }

                fetch.toString = function () {
                  return _fetch.toString();
                };

                return fetch;
              }(function (url, opts) {
                return fetch(url, opts);
              }),
              redirect: function redirect(statusCode, location) {
                if (_redirect && (_redirect.statusCode !== statusCode || _redirect.location !== location)) {
                  throw new Error('Conflicting redirects');
                }

                _redirect = {
                  statusCode: statusCode,
                  location: location
                };
              },
              error: function error(status, _error) {
                props.error = typeof _error === 'string' ? new Error(_error) : _error;
                props.status = status;
              }
            };

            if (!root_preloaded) {
              root_preload = undefined || function () {
                return {};
              };

              root_preloaded = initial_data.preloaded[0] || root_preload.call(preload_context, {
                host: page.host,
                path: page.path,
                query: page.query,
                params: {}
              }, $session);
            }

            l = 1;
            _context6.prev = 7;
            stringified_query = JSON.stringify(page.query);
            match = route.pattern.exec(page.path);
            segment_dirty = false;
            _context6.next = 13;
            return Promise.all(route.parts.map(function (part, i) {
              return __awaiter(_this, void 0, void 0, /*#__PURE__*/regenerator.mark(function _callee5() {
                var segment, j, _yield$components$par, component, preload, preloaded;

                return regenerator.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        segment = segments[i];
                        if (part_changed(i, segment, match, stringified_query)) segment_dirty = true;
                        props.segments[l] = segments[i + 1]; // TODO make this less confusing

                        if (part) {
                          _context5.next = 5;
                          break;
                        }

                        return _context5.abrupt("return", {
                          segment: segment
                        });

                      case 5:
                        j = l++;

                        if (!(!session_dirty && !segment_dirty && current_branch[i] && current_branch[i].part === part.i)) {
                          _context5.next = 8;
                          break;
                        }

                        return _context5.abrupt("return", current_branch[i]);

                      case 8:
                        segment_dirty = false;
                        _context5.next = 11;
                        return components[part.i].js();

                      case 11:
                        _yield$components$par = _context5.sent;
                        component = _yield$components$par.default;
                        preload = _yield$components$par.preload;

                        if (!(ready || !initial_data.preloaded[i + 1])) {
                          _context5.next = 25;
                          break;
                        }

                        if (!preload) {
                          _context5.next = 21;
                          break;
                        }

                        _context5.next = 18;
                        return preload.call(preload_context, {
                          host: page.host,
                          path: page.path,
                          query: page.query,
                          params: part.params ? part.params(dest.match) : {}
                        }, $session);

                      case 18:
                        _context5.t0 = _context5.sent;
                        _context5.next = 22;
                        break;

                      case 21:
                        _context5.t0 = {};

                      case 22:
                        preloaded = _context5.t0;
                        _context5.next = 26;
                        break;

                      case 25:
                        preloaded = initial_data.preloaded[i + 1];

                      case 26:
                        return _context5.abrupt("return", props["level".concat(j)] = {
                          component: component,
                          props: preloaded,
                          segment: segment,
                          match: match,
                          part: part.i
                        });

                      case 27:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));
            }));

          case 13:
            branch = _context6.sent;
            _context6.next = 21;
            break;

          case 16:
            _context6.prev = 16;
            _context6.t0 = _context6["catch"](7);
            props.error = _context6.t0;
            props.status = 500;
            branch = [];

          case 21:
            return _context6.abrupt("return", {
              redirect: _redirect,
              props: props,
              branch: branch
            });

          case 22:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[7, 16]]);
  }));
}

start$1({
    target: document.querySelector('#sapper')
});

export { update_keyed_each as A, noop as B, validate_slots as C, destroy_block as D, _createClass$1 as E, isUndef as F, create_slot as G, empty as H, prevent_default as I, set_data_dev as J, componentNavModel as K, toggle_class as L, update_slot as M, transition_in as N, transition_out as O, getBrotherPage as P, goto as Q, regenerator as R, SvelteComponentDev as S, _inherits$1 as _, _getPrototypeOf$1 as a, _possibleConstructorReturn$1 as b, _classCallCheck$1 as c, _assertThisInitialized$1 as d, dispatch_dev as e, add_render_callback as f, validate_each_keys as g, element as h, init$1 as i, space as j, claim_element as k, children as l, claim_space as m, claim_text as n, detach_dev as o, attr_dev as p, add_location as q, insert_dev as r, safe_not_equal as s, text as t, append_dev as u, validate_each_argument as v, headerNavModel as w, query_selector_all as x, listen_dev as y, _slicedToArray$1 as z };

import __inject_styles from './inject_styles.fe622066.js';