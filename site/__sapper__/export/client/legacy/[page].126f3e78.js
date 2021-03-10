import { R as regenerator, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, E as _createClass, S as SvelteComponentDev, s as safe_not_equal, j as space, h as element, t as text, x as query_selector_all, o as detach_dev, m as claim_space, k as claim_element, l as children, n as claim_text, p as attr_dev, q as add_location, r as insert_dev, u as append_dev, z as _slicedToArray, J as set_data_dev, B as noop, C as validate_slots } from './client.607303fc.js';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\component\\[page].svelte";

function create_fragment(ctx) {
  var title_value;
  var t0;
  var section;
  var h1;
  var t1_value =
  /*page*/
  ctx[0].title + "";
  var t1;
  var t2;
  var div;
  var raw_value =
  /*page*/
  ctx[0].html + "";
  document.title = title_value =
  /*page*/
  ctx[0].headTitle;
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h1 = element("h1");
      t1 = text(t1_value);
      t2 = space();
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-l5siso\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      h1 = claim_element(section_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, t1_value);
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      div_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h1, "class", "title");
      add_location(h1, file, 22, 2, 452);
      attr_dev(div, "class", "md-content");
      add_location(div, file, 26, 2, 503);
      attr_dev(section, "class", "md");
      add_location(section, file, 21, 0, 428);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h1);
      append_dev(h1, t1);
      append_dev(section, t2);
      append_dev(section, div);
      div.innerHTML = raw_value;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*page*/
      1 && title_value !== (title_value =
      /*page*/
      ctx[0].headTitle)) {
        document.title = title_value;
      }

      if (dirty &
      /*page*/
      1 && t1_value !== (t1_value =
      /*page*/
      ctx[0].title + "")) set_data_dev(t1, t1_value);
      if (dirty &
      /*page*/
      1 && raw_value !== (raw_value =
      /*page*/
      ctx[0].html + "")) div.innerHTML = raw_value;
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
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

function preload(_x) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(_ref3) {
    var page, res, data;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            page = _ref3.params.page;
            _context.next = 3;
            return this.fetch("component/".concat(page, ".json"));

          case 3:
            res = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 11;
              break;
            }

            _context.next = 7;
            return res.json();

          case 7:
            data = _context.sent;
            return _context.abrupt("return", {
              page: data
            });

          case 11:
            this.error(404, "Not Found");

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _preload.apply(this, arguments);
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("U5Bpageu5D", slots, []);
  var page = $$props.page;
  var writable_props = ["page"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<U5Bpageu5D> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("page" in $$props) $$invalidate(0, page = $$props.page);
  };

  $$self.$capture_state = function () {
    return {
      preload: preload,
      page: page
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("page" in $$props) $$invalidate(0, page = $$props.page);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [page];
}

var U5Bpageu5D = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(U5Bpageu5D, _SvelteComponentDev);

  var _super = _createSuper(U5Bpageu5D);

  function U5Bpageu5D(options) {
    var _this;

    _classCallCheck(this, U5Bpageu5D);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      page: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bpageu5D",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*page*/
    ctx[0] === undefined && !("page" in props)) {
      console.warn("<U5Bpageu5D> was created without expected prop 'page'");
    }

    return _this;
  }

  _createClass(U5Bpageu5D, [{
    key: "page",
    get: function get() {
      throw new Error("<U5Bpageu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bpageu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return U5Bpageu5D;
}(SvelteComponentDev);

export default U5Bpageu5D;
export { preload };
