import { T as _inherits, U as _getPrototypeOf, V as _possibleConstructorReturn, W as _classCallCheck, i as init, s as safe_not_equal, X as _assertThisInitialized, e as dispatch_dev, Y as _createClass, S as SvelteComponentDev, H as create_slot, D as validate_slots, Z as trimConcat, $ as Icon, a0 as preffixConcat, n as element, p as claim_element, r as children, k as detach_dev, w as attr_dev, x as add_location, j as insert_dev, a1 as create_component, a2 as claim_component, a3 as mount_component, N as transition_in, O as transition_out, a4 as destroy_component, m as space, o as claim_space, L as toggle_class, y as append_dev, z as listen_dev, a5 as _slicedToArray, a6 as group_outros, a7 as check_outros, M as update_slot, a8 as prop_dev, a9 as bubble, aa as setContext, ab as getContext, _ as _inherits$1, a as _getPrototypeOf$1, b as _possibleConstructorReturn$1, c as _classCallCheck$1, d as _assertThisInitialized$1, t as text, u as claim_text, A as _slicedToArray$1 } from './client.c0fb24e8.js';

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$4 = "..\\packages\\Button\\Button.svelte"; // (29:1) {#if loading}

function create_if_block_1(ctx) {
  var span;
  var block_1 = {
    c: function create() {
      span = element("span");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        class: true
      });
      children(span).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "loading-icon");
      add_location(span, file$4, 29, 2, 674);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block_1,
    id: create_if_block_1.name,
    type: "if",
    source: "(29:1) {#if loading}",
    ctx: ctx
  });
  return block_1;
} // (32:1) {#if icon}


function create_if_block(ctx) {
  var icon_1;
  var current;
  icon_1 = new Icon({
    props: {
      name:
      /*icon*/
      ctx[3]
    },
    $$inline: true
  });
  var block_1 = {
    c: function create() {
      create_component(icon_1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(icon_1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(icon_1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var icon_1_changes = {};
      if (dirty &
      /*icon*/
      8) icon_1_changes.name =
      /*icon*/
      ctx[3];
      icon_1.$set(icon_1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon_1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon_1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(icon_1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block_1,
    id: create_if_block.name,
    type: "if",
    source: "(32:1) {#if icon}",
    ctx: ctx
  });
  return block_1;
}

function create_fragment$4(ctx) {
  var button;
  var t0;
  var t1;
  var current;
  var mounted;
  var dispose;
  var if_block0 =
  /*loading*/
  ctx[4] && create_if_block_1(ctx);
  var if_block1 =
  /*icon*/
  ctx[3] && create_if_block(ctx);
  var default_slot_template =
  /*#slots*/
  ctx[13].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[12], null);
  var block_1 = {
    c: function create() {
      button = element("button");
      if (if_block0) if_block0.c();
      t0 = space();
      if (if_block1) if_block1.c();
      t1 = space();
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      button = claim_element(nodes, "BUTTON", {
        class: true,
        disabled: true,
        type: true
      });
      var button_nodes = children(button);
      if (if_block0) if_block0.l(button_nodes);
      t0 = claim_space(button_nodes);
      if (if_block1) if_block1.l(button_nodes);
      t1 = claim_space(button_nodes);
      if (default_slot) default_slot.l(button_nodes);
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button, "class",
      /*classAttr*/
      ctx[8]);
      button.disabled =
      /*disabled*/
      ctx[2];
      attr_dev(button, "type",
      /*nativeType*/
      ctx[5]);
      toggle_class(button, "block",
      /*block*/
      ctx[0]);
      toggle_class(button, "circle",
      /*circle*/
      ctx[1]);
      toggle_class(button, "loading",
      /*loading*/
      ctx[4]);
      toggle_class(button, "plain",
      /*plain*/
      ctx[6]);
      toggle_class(button, "round",
      /*round*/
      ctx[7]);
      add_location(button, file$4, 17, 0, 504);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      if (if_block0) if_block0.m(button, null);
      append_dev(button, t0);
      if (if_block1) if_block1.m(button, null);
      append_dev(button, t1);

      if (default_slot) {
        default_slot.m(button, null);
      }

      current = true;

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*click_handler*/
        ctx[14], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*loading*/
      ctx[4]) {
        if (if_block0) ; else {
          if_block0 = create_if_block_1(ctx);
          if_block0.c();
          if_block0.m(button, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (
      /*icon*/
      ctx[3]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty &
          /*icon*/
          8) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(button, t1);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, function () {
          if_block1 = null;
        });
        check_outros();
      }

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        4096) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[12], dirty, null, null);
        }
      }

      if (!current || dirty &
      /*disabled*/
      4) {
        prop_dev(button, "disabled",
        /*disabled*/
        ctx[2]);
      }

      if (!current || dirty &
      /*nativeType*/
      32) {
        attr_dev(button, "type",
        /*nativeType*/
        ctx[5]);
      }

      if (dirty &
      /*block*/
      1) {
        toggle_class(button, "block",
        /*block*/
        ctx[0]);
      }

      if (dirty &
      /*circle*/
      2) {
        toggle_class(button, "circle",
        /*circle*/
        ctx[1]);
      }

      if (dirty &
      /*loading*/
      16) {
        toggle_class(button, "loading",
        /*loading*/
        ctx[4]);
      }

      if (dirty &
      /*plain*/
      64) {
        toggle_class(button, "plain",
        /*plain*/
        ctx[6]);
      }

      if (dirty &
      /*round*/
      128) {
        toggle_class(button, "round",
        /*round*/
        ctx[7]);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block1);
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block1);
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(button);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      if (default_slot) default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block_1,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block_1;
}

function instance$4($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Button", slots, ['default']);
  var _$$props$class = $$props.class,
      className = _$$props$class === void 0 ? "" : _$$props$class;
  var block = $$props.block;
  var circle = $$props.circle;
  var disabled = $$props.disabled;
  var icon = $$props.icon;
  var loading = $$props.loading;
  var _$$props$nativeType = $$props.nativeType,
      nativeType = _$$props$nativeType === void 0 ? "button" : _$$props$nativeType;
  var plain = $$props.plain;
  var round = $$props.round;
  var size = $$props.size;
  var type = $$props.type;
  var classAttr = trimConcat("es-button", className, preffixConcat(size, ""), preffixConcat(type, "type-"));
  var writable_props = ["class", "block", "circle", "disabled", "icon", "loading", "nativeType", "plain", "round", "size", "type"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Button> was created with unknown prop '".concat(key, "'"));
  });

  function click_handler(event) {
    bubble($$self, event);
  }

  $$self.$$set = function ($$props) {
    if ("class" in $$props) $$invalidate(9, className = $$props.class);
    if ("block" in $$props) $$invalidate(0, block = $$props.block);
    if ("circle" in $$props) $$invalidate(1, circle = $$props.circle);
    if ("disabled" in $$props) $$invalidate(2, disabled = $$props.disabled);
    if ("icon" in $$props) $$invalidate(3, icon = $$props.icon);
    if ("loading" in $$props) $$invalidate(4, loading = $$props.loading);
    if ("nativeType" in $$props) $$invalidate(5, nativeType = $$props.nativeType);
    if ("plain" in $$props) $$invalidate(6, plain = $$props.plain);
    if ("round" in $$props) $$invalidate(7, round = $$props.round);
    if ("size" in $$props) $$invalidate(10, size = $$props.size);
    if ("type" in $$props) $$invalidate(11, type = $$props.type);
    if ("$$scope" in $$props) $$invalidate(12, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      Icon: Icon,
      preffixConcat: preffixConcat,
      trimConcat: trimConcat,
      className: className,
      block: block,
      circle: circle,
      disabled: disabled,
      icon: icon,
      loading: loading,
      nativeType: nativeType,
      plain: plain,
      round: round,
      size: size,
      type: type,
      classAttr: classAttr
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("className" in $$props) $$invalidate(9, className = $$props.className);
    if ("block" in $$props) $$invalidate(0, block = $$props.block);
    if ("circle" in $$props) $$invalidate(1, circle = $$props.circle);
    if ("disabled" in $$props) $$invalidate(2, disabled = $$props.disabled);
    if ("icon" in $$props) $$invalidate(3, icon = $$props.icon);
    if ("loading" in $$props) $$invalidate(4, loading = $$props.loading);
    if ("nativeType" in $$props) $$invalidate(5, nativeType = $$props.nativeType);
    if ("plain" in $$props) $$invalidate(6, plain = $$props.plain);
    if ("round" in $$props) $$invalidate(7, round = $$props.round);
    if ("size" in $$props) $$invalidate(10, size = $$props.size);
    if ("type" in $$props) $$invalidate(11, type = $$props.type);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [block, circle, disabled, icon, loading, nativeType, plain, round, classAttr, className, size, type, $$scope, slots, click_handler];
}

var Button = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Button, _SvelteComponentDev);

  var _super = _createSuper$4(Button);

  function Button(options) {
    var _this;

    _classCallCheck(this, Button);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {
      class: 9,
      block: 0,
      circle: 1,
      disabled: 2,
      icon: 3,
      loading: 4,
      nativeType: 5,
      plain: 6,
      round: 7,
      size: 10,
      type: 11
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Button",
      options: options,
      id: create_fragment$4.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*block*/
    ctx[0] === undefined && !("block" in props)) {
      console.warn("<Button> was created without expected prop 'block'");
    }

    if (
    /*circle*/
    ctx[1] === undefined && !("circle" in props)) {
      console.warn("<Button> was created without expected prop 'circle'");
    }

    if (
    /*disabled*/
    ctx[2] === undefined && !("disabled" in props)) {
      console.warn("<Button> was created without expected prop 'disabled'");
    }

    if (
    /*icon*/
    ctx[3] === undefined && !("icon" in props)) {
      console.warn("<Button> was created without expected prop 'icon'");
    }

    if (
    /*loading*/
    ctx[4] === undefined && !("loading" in props)) {
      console.warn("<Button> was created without expected prop 'loading'");
    }

    if (
    /*plain*/
    ctx[6] === undefined && !("plain" in props)) {
      console.warn("<Button> was created without expected prop 'plain'");
    }

    if (
    /*round*/
    ctx[7] === undefined && !("round" in props)) {
      console.warn("<Button> was created without expected prop 'round'");
    }

    if (
    /*size*/
    ctx[10] === undefined && !("size" in props)) {
      console.warn("<Button> was created without expected prop 'size'");
    }

    if (
    /*type*/
    ctx[11] === undefined && !("type" in props)) {
      console.warn("<Button> was created without expected prop 'type'");
    }

    return _this;
  }

  _createClass(Button, [{
    key: "class",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "block",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "circle",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "disabled",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "icon",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "loading",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "nativeType",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "plain",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "round",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "size",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "type",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Button;
}(SvelteComponentDev);

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$3 = "..\\packages\\Button\\ButtonGroup.svelte";

function create_fragment$3(ctx) {
  var div;
  var current;
  var default_slot_template =
  /*#slots*/
  ctx[3].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[2], null);
  var block = {
    c: function create() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class",
      /*classAttr*/
      ctx[0]);
      add_location(div, file$3, 6, 0, 191);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        4) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[2], dirty, null, null);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (default_slot) default_slot.d(detaching);
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
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("ButtonGroup", slots, ['default']);
  var _$$props$class = $$props.class,
      className = _$$props$class === void 0 ? "" : _$$props$class;
  var classAttr = trimConcat("es-button-group", className);
  var writable_props = ["class"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<ButtonGroup> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("class" in $$props) $$invalidate(1, className = $$props.class);
    if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      trimConcat: trimConcat,
      className: className,
      classAttr: classAttr
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("className" in $$props) $$invalidate(1, className = $$props.className);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [classAttr, className, $$scope, slots];
}

var ButtonGroup = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(ButtonGroup, _SvelteComponentDev);

  var _super = _createSuper$3(ButtonGroup);

  function ButtonGroup(options) {
    var _this;

    _classCallCheck(this, ButtonGroup);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
      class: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "ButtonGroup",
      options: options,
      id: create_fragment$3.name
    });
    return _this;
  }

  _createClass(ButtonGroup, [{
    key: "class",
    get: function get() {
      throw new Error("<ButtonGroup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ButtonGroup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return ButtonGroup;
}(SvelteComponentDev);

const GUTTER = {};

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$2 = "..\\packages\\Layout\\Row.svelte";

function create_fragment$2(ctx) {
  var div;
  var current;
  var default_slot_template =
  /*#slots*/
  ctx[7].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[6], null);
  var block = {
    c: function create() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class",
      /*classAttr*/
      ctx[0]);
      add_location(div, file$2, 14, 0, 547);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        64) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[6], dirty, null, null);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (default_slot) default_slot.d(detaching);
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
  validate_slots("Row", slots, ['default']);
  var _$$props$class = $$props.class,
      className = _$$props$class === void 0 ? "" : _$$props$class;
  var _$$props$gutter = $$props.gutter,
      gutter = _$$props$gutter === void 0 ? 0 : _$$props$gutter;
  var type = $$props.type;
  var _$$props$justify = $$props.justify,
      justify = _$$props$justify === void 0 ? "start" : _$$props$justify;
  var _$$props$align = $$props.align,
      align = _$$props$align === void 0 ? "top" : _$$props$align;
  var isFlex = type === "flex";
  var classAttr = trimConcat("es-row", className, preffixConcat(isFlex, "", type), preffixConcat(isFlex, "justify-", justify), preffixConcat(isFlex, "align-", align));
  setContext(GUTTER, gutter);
  var writable_props = ["class", "gutter", "type", "justify", "align"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Row> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("class" in $$props) $$invalidate(1, className = $$props.class);
    if ("gutter" in $$props) $$invalidate(2, gutter = $$props.gutter);
    if ("type" in $$props) $$invalidate(3, type = $$props.type);
    if ("justify" in $$props) $$invalidate(4, justify = $$props.justify);
    if ("align" in $$props) $$invalidate(5, align = $$props.align);
    if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      setContext: setContext,
      GUTTER: GUTTER,
      preffixConcat: preffixConcat,
      trimConcat: trimConcat,
      className: className,
      gutter: gutter,
      type: type,
      justify: justify,
      align: align,
      isFlex: isFlex,
      classAttr: classAttr
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("className" in $$props) $$invalidate(1, className = $$props.className);
    if ("gutter" in $$props) $$invalidate(2, gutter = $$props.gutter);
    if ("type" in $$props) $$invalidate(3, type = $$props.type);
    if ("justify" in $$props) $$invalidate(4, justify = $$props.justify);
    if ("align" in $$props) $$invalidate(5, align = $$props.align);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [classAttr, className, gutter, type, justify, align, $$scope, slots];
}

var Row = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Row, _SvelteComponentDev);

  var _super = _createSuper$2(Row);

  function Row(options) {
    var _this;

    _classCallCheck(this, Row);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      class: 1,
      gutter: 2,
      type: 3,
      justify: 4,
      align: 5
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Row",
      options: options,
      id: create_fragment$2.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*type*/
    ctx[3] === undefined && !("type" in props)) {
      console.warn("<Row> was created without expected prop 'type'");
    }

    return _this;
  }

  _createClass(Row, [{
    key: "class",
    get: function get() {
      throw new Error("<Row>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Row>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "gutter",
    get: function get() {
      throw new Error("<Row>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Row>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "type",
    get: function get() {
      throw new Error("<Row>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Row>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "justify",
    get: function get() {
      throw new Error("<Row>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Row>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "align",
    get: function get() {
      throw new Error("<Row>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Row>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Row;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "..\\packages\\Layout\\Col.svelte";

function create_fragment$1(ctx) {
  var div;
  var current;
  var default_slot_template =
  /*#slots*/
  ctx[11].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[10], null);
  var block = {
    c: function create() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true,
        style: true
      });
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class",
      /*classAttr*/
      ctx[1]);
      attr_dev(div, "style",
      /*style*/
      ctx[0]);
      add_location(div, file$1, 18, 0, 705);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        1024) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[10], dirty, null, null);
        }
      }

      if (!current || dirty &
      /*classAttr*/
      2) {
        attr_dev(div, "class",
        /*classAttr*/
        ctx[1]);
      }

      if (!current || dirty &
      /*style*/
      1) {
        attr_dev(div, "style",
        /*style*/
        ctx[0]);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (default_slot) default_slot.d(detaching);
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
  var style;
  var spanClass;
  var offsetClass;
  var pushClass;
  var pullClass;
  var classAttr;
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Col", slots, ['default']);
  var _$$props$span = $$props.span,
      span = _$$props$span === void 0 ? 24 : _$$props$span;
  var _$$props$offset = $$props.offset,
      offset = _$$props$offset === void 0 ? 0 : _$$props$offset;
  var _$$props$push = $$props.push,
      push = _$$props$push === void 0 ? 0 : _$$props$push;
  var _$$props$pull = $$props.pull,
      pull = _$$props$pull === void 0 ? 0 : _$$props$pull;
  var gutter = getContext(GUTTER);
  var writable_props = ["span", "offset", "push", "pull"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Col> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("span" in $$props) $$invalidate(2, span = $$props.span);
    if ("offset" in $$props) $$invalidate(3, offset = $$props.offset);
    if ("push" in $$props) $$invalidate(4, push = $$props.push);
    if ("pull" in $$props) $$invalidate(5, pull = $$props.pull);
    if ("$$scope" in $$props) $$invalidate(10, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      getContext: getContext,
      GUTTER: GUTTER,
      preffixConcat: preffixConcat,
      span: span,
      offset: offset,
      push: push,
      pull: pull,
      gutter: gutter,
      style: style,
      spanClass: spanClass,
      offsetClass: offsetClass,
      pushClass: pushClass,
      pullClass: pullClass,
      classAttr: classAttr
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("span" in $$props) $$invalidate(2, span = $$props.span);
    if ("offset" in $$props) $$invalidate(3, offset = $$props.offset);
    if ("push" in $$props) $$invalidate(4, push = $$props.push);
    if ("pull" in $$props) $$invalidate(5, pull = $$props.pull);
    if ("style" in $$props) $$invalidate(0, style = $$props.style);
    if ("spanClass" in $$props) $$invalidate(6, spanClass = $$props.spanClass);
    if ("offsetClass" in $$props) $$invalidate(7, offsetClass = $$props.offsetClass);
    if ("pushClass" in $$props) $$invalidate(8, pushClass = $$props.pushClass);
    if ("pullClass" in $$props) $$invalidate(9, pullClass = $$props.pullClass);
    if ("classAttr" in $$props) $$invalidate(1, classAttr = $$props.classAttr);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*span*/
    4) {
      $$invalidate(6, spanClass = preffixConcat(span !== 24, "es-col-span-", span));
    }

    if ($$self.$$.dirty &
    /*offset*/
    8) {
      $$invalidate(7, offsetClass = preffixConcat(offset, "es-col-offset-"));
    }

    if ($$self.$$.dirty &
    /*push*/
    16) {
      $$invalidate(8, pushClass = preffixConcat(push, "es-col-push-"));
    }

    if ($$self.$$.dirty &
    /*pull*/
    32) {
      $$invalidate(9, pullClass = preffixConcat(pull, "es-col-pull-"));
    }

    if ($$self.$$.dirty &
    /*spanClass, offsetClass, pushClass, pullClass*/
    960) {
      $$invalidate(1, classAttr = "es-col ".concat(spanClass, " ").concat(offsetClass, " ").concat(pushClass, " ").concat(pullClass).trim());
    }
  };

  $$invalidate(0, style = gutter ? "padding-left: ".concat(gutter / 2, "px;padding-right: ").concat(gutter / 2, "px") : undefined);

  return [style, classAttr, span, offset, push, pull, spanClass, offsetClass, pushClass, pullClass, $$scope, slots];
}

var Col = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Col, _SvelteComponentDev);

  var _super = _createSuper$1(Col);

  function Col(options) {
    var _this;

    _classCallCheck(this, Col);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      span: 2,
      offset: 3,
      push: 4,
      pull: 5
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Col",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(Col, [{
    key: "span",
    get: function get() {
      throw new Error("<Col>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Col>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "offset",
    get: function get() {
      throw new Error("<Col>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Col>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "push",
    get: function get() {
      throw new Error("<Col>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Col>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "pull",
    get: function get() {
      throw new Error("<Col>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Col>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Col;
}(SvelteComponentDev);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\demo.svelte"; // (8:2) <Col>

function create_default_slot_87(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("aasd");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "aasd");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_87.name,
    type: "slot",
    source: "(8:2) <Col>",
    ctx: ctx
  });
  return block;
} // (9:2) <Col>


function create_default_slot_86(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("aasd");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "aasd");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_86.name,
    type: "slot",
    source: "(9:2) <Col>",
    ctx: ctx
  });
  return block;
} // (10:2) <Col>


function create_default_slot_85(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("aasd");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "aasd");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_85.name,
    type: "slot",
    source: "(10:2) <Col>",
    ctx: ctx
  });
  return block;
} // (11:2) <Col>


function create_default_slot_84(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("aasd");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "aasd");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_84.name,
    type: "slot",
    source: "(11:2) <Col>",
    ctx: ctx
  });
  return block;
} // (7:1) <Row type="flex" justify="space-between">


function create_default_slot_83(ctx) {
  var col0;
  var t0;
  var col1;
  var t1;
  var col2;
  var t2;
  var col3;
  var current;
  col0 = new Col({
    props: {
      $$slots: {
        default: [create_default_slot_87]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col1 = new Col({
    props: {
      $$slots: {
        default: [create_default_slot_86]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col2 = new Col({
    props: {
      $$slots: {
        default: [create_default_slot_85]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col3 = new Col({
    props: {
      $$slots: {
        default: [create_default_slot_84]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(col0.$$.fragment);
      t0 = space();
      create_component(col1.$$.fragment);
      t1 = space();
      create_component(col2.$$.fragment);
      t2 = space();
      create_component(col3.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(col0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(col1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(col2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(col3.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(col0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(col1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(col2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(col3, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var col0_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col0.$set(col0_changes);
      var col1_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col1.$set(col1_changes);
      var col2_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col2.$set(col2_changes);
      var col3_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col3.$set(col3_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(col0.$$.fragment, local);
      transition_in(col1.$$.fragment, local);
      transition_in(col2.$$.fragment, local);
      transition_in(col3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(col0.$$.fragment, local);
      transition_out(col1.$$.fragment, local);
      transition_out(col2.$$.fragment, local);
      transition_out(col3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(col0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(col1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(col2, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(col3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_83.name,
    type: "slot",
    source: "(7:1) <Row type=\\\"flex\\\" justify=\\\"space-between\\\">",
    ctx: ctx
  });
  return block;
} // (18:2) <Col span="{24}">


function create_default_slot_82(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple-dark svelte-h6j4ae");
      add_location(div, file, 17, 19, 315);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_82.name,
    type: "slot",
    source: "(18:2) <Col span=\\\"{24}\\\">",
    ctx: ctx
  });
  return block;
} // (17:1) <Row>


function create_default_slot_81(ctx) {
  var col;
  var current;
  col = new Col({
    props: {
      span: 24,
      $$slots: {
        default: [create_default_slot_82]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(col.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(col.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(col, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var col_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col.$set(col_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(col.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(col.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(col, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_81.name,
    type: "slot",
    source: "(17:1) <Row>",
    ctx: ctx
  });
  return block;
} // (22:2) <Col span="12">


function create_default_slot_80(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple svelte-h6j4ae");
      add_location(div, file, 21, 17, 409);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_80.name,
    type: "slot",
    source: "(22:2) <Col span=\\\"12\\\">",
    ctx: ctx
  });
  return block;
} // (23:2) <Col span="12">


function create_default_slot_79(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple-light svelte-h6j4ae");
      add_location(div, file, 22, 17, 475);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_79.name,
    type: "slot",
    source: "(23:2) <Col span=\\\"12\\\">",
    ctx: ctx
  });
  return block;
} // (21:1) <Row>


function create_default_slot_78(ctx) {
  var col0;
  var t;
  var col1;
  var current;
  col0 = new Col({
    props: {
      span: "12",
      $$slots: {
        default: [create_default_slot_80]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col1 = new Col({
    props: {
      span: "12",
      $$slots: {
        default: [create_default_slot_79]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(col0.$$.fragment);
      t = space();
      create_component(col1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(col0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(col1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(col0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(col1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var col0_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col0.$set(col0_changes);
      var col1_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col1.$set(col1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(col0.$$.fragment, local);
      transition_in(col1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(col0.$$.fragment, local);
      transition_out(col1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(col0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(col1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_78.name,
    type: "slot",
    source: "(21:1) <Row>",
    ctx: ctx
  });
  return block;
} // (27:2) <Col span="8">


function create_default_slot_77(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple svelte-h6j4ae");
      add_location(div, file, 26, 16, 569);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_77.name,
    type: "slot",
    source: "(27:2) <Col span=\\\"8\\\">",
    ctx: ctx
  });
  return block;
} // (28:2) <Col span="8">


function create_default_slot_76(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple-light svelte-h6j4ae");
      add_location(div, file, 27, 16, 634);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_76.name,
    type: "slot",
    source: "(28:2) <Col span=\\\"8\\\">",
    ctx: ctx
  });
  return block;
} // (29:2) <Col span="8">


function create_default_slot_75(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple svelte-h6j4ae");
      add_location(div, file, 28, 16, 705);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_75.name,
    type: "slot",
    source: "(29:2) <Col span=\\\"8\\\">",
    ctx: ctx
  });
  return block;
} // (26:1) <Row>


function create_default_slot_74(ctx) {
  var col0;
  var t0;
  var col1;
  var t1;
  var col2;
  var current;
  col0 = new Col({
    props: {
      span: "8",
      $$slots: {
        default: [create_default_slot_77]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col1 = new Col({
    props: {
      span: "8",
      $$slots: {
        default: [create_default_slot_76]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col2 = new Col({
    props: {
      span: "8",
      $$slots: {
        default: [create_default_slot_75]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(col0.$$.fragment);
      t0 = space();
      create_component(col1.$$.fragment);
      t1 = space();
      create_component(col2.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(col0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(col1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(col2.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(col0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(col1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(col2, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var col0_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col0.$set(col0_changes);
      var col1_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col1.$set(col1_changes);
      var col2_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col2.$set(col2_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(col0.$$.fragment, local);
      transition_in(col1.$$.fragment, local);
      transition_in(col2.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(col0.$$.fragment, local);
      transition_out(col1.$$.fragment, local);
      transition_out(col2.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(col0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(col1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(col2, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_74.name,
    type: "slot",
    source: "(26:1) <Row>",
    ctx: ctx
  });
  return block;
} // (33:2) <Col span="6">


function create_default_slot_73(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple svelte-h6j4ae");
      add_location(div, file, 32, 16, 793);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_73.name,
    type: "slot",
    source: "(33:2) <Col span=\\\"6\\\">",
    ctx: ctx
  });
  return block;
} // (34:2) <Col span="6">


function create_default_slot_72(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple-light svelte-h6j4ae");
      add_location(div, file, 33, 16, 858);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_72.name,
    type: "slot",
    source: "(34:2) <Col span=\\\"6\\\">",
    ctx: ctx
  });
  return block;
} // (35:2) <Col span="6">


function create_default_slot_71(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple svelte-h6j4ae");
      add_location(div, file, 34, 16, 929);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_71.name,
    type: "slot",
    source: "(35:2) <Col span=\\\"6\\\">",
    ctx: ctx
  });
  return block;
} // (36:2) <Col span="6">


function create_default_slot_70(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple-light svelte-h6j4ae");
      add_location(div, file, 35, 16, 994);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_70.name,
    type: "slot",
    source: "(36:2) <Col span=\\\"6\\\">",
    ctx: ctx
  });
  return block;
} // (32:1) <Row>


function create_default_slot_69(ctx) {
  var col0;
  var t0;
  var col1;
  var t1;
  var col2;
  var t2;
  var col3;
  var current;
  col0 = new Col({
    props: {
      span: "6",
      $$slots: {
        default: [create_default_slot_73]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col1 = new Col({
    props: {
      span: "6",
      $$slots: {
        default: [create_default_slot_72]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col2 = new Col({
    props: {
      span: "6",
      $$slots: {
        default: [create_default_slot_71]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col3 = new Col({
    props: {
      span: "6",
      $$slots: {
        default: [create_default_slot_70]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(col0.$$.fragment);
      t0 = space();
      create_component(col1.$$.fragment);
      t1 = space();
      create_component(col2.$$.fragment);
      t2 = space();
      create_component(col3.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(col0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(col1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(col2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(col3.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(col0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(col1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(col2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(col3, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var col0_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col0.$set(col0_changes);
      var col1_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col1.$set(col1_changes);
      var col2_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col2.$set(col2_changes);
      var col3_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col3.$set(col3_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(col0.$$.fragment, local);
      transition_in(col1.$$.fragment, local);
      transition_in(col2.$$.fragment, local);
      transition_in(col3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(col0.$$.fragment, local);
      transition_out(col1.$$.fragment, local);
      transition_out(col2.$$.fragment, local);
      transition_out(col3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(col0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(col1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(col2, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(col3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_69.name,
    type: "slot",
    source: "(32:1) <Row>",
    ctx: ctx
  });
  return block;
} // (40:2) <Col span="4">


function create_default_slot_68(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple svelte-h6j4ae");
      add_location(div, file, 39, 16, 1088);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_68.name,
    type: "slot",
    source: "(40:2) <Col span=\\\"4\\\">",
    ctx: ctx
  });
  return block;
} // (41:2) <Col span="4">


function create_default_slot_67(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple-light svelte-h6j4ae");
      add_location(div, file, 40, 16, 1153);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_67.name,
    type: "slot",
    source: "(41:2) <Col span=\\\"4\\\">",
    ctx: ctx
  });
  return block;
} // (42:2) <Col span="4">


function create_default_slot_66(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple svelte-h6j4ae");
      add_location(div, file, 41, 16, 1224);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_66.name,
    type: "slot",
    source: "(42:2) <Col span=\\\"4\\\">",
    ctx: ctx
  });
  return block;
} // (43:2) <Col span="4">


function create_default_slot_65(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple-light svelte-h6j4ae");
      add_location(div, file, 42, 16, 1289);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_65.name,
    type: "slot",
    source: "(43:2) <Col span=\\\"4\\\">",
    ctx: ctx
  });
  return block;
} // (44:2) <Col span="4">


function create_default_slot_64(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple svelte-h6j4ae");
      add_location(div, file, 43, 16, 1360);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_64.name,
    type: "slot",
    source: "(44:2) <Col span=\\\"4\\\">",
    ctx: ctx
  });
  return block;
} // (45:2) <Col span="4">


function create_default_slot_63(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple-light svelte-h6j4ae");
      add_location(div, file, 44, 16, 1425);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_63.name,
    type: "slot",
    source: "(45:2) <Col span=\\\"4\\\">",
    ctx: ctx
  });
  return block;
} // (39:1) <Row>


function create_default_slot_62(ctx) {
  var col0;
  var t0;
  var col1;
  var t1;
  var col2;
  var t2;
  var col3;
  var t3;
  var col4;
  var t4;
  var col5;
  var current;
  col0 = new Col({
    props: {
      span: "4",
      $$slots: {
        default: [create_default_slot_68]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col1 = new Col({
    props: {
      span: "4",
      $$slots: {
        default: [create_default_slot_67]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col2 = new Col({
    props: {
      span: "4",
      $$slots: {
        default: [create_default_slot_66]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col3 = new Col({
    props: {
      span: "4",
      $$slots: {
        default: [create_default_slot_65]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col4 = new Col({
    props: {
      span: "4",
      $$slots: {
        default: [create_default_slot_64]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col5 = new Col({
    props: {
      span: "4",
      $$slots: {
        default: [create_default_slot_63]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(col0.$$.fragment);
      t0 = space();
      create_component(col1.$$.fragment);
      t1 = space();
      create_component(col2.$$.fragment);
      t2 = space();
      create_component(col3.$$.fragment);
      t3 = space();
      create_component(col4.$$.fragment);
      t4 = space();
      create_component(col5.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(col0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(col1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(col2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(col3.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(col4.$$.fragment, nodes);
      t4 = claim_space(nodes);
      claim_component(col5.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(col0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(col1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(col2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(col3, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(col4, target, anchor);
      insert_dev(target, t4, anchor);
      mount_component(col5, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var col0_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col0.$set(col0_changes);
      var col1_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col1.$set(col1_changes);
      var col2_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col2.$set(col2_changes);
      var col3_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col3.$set(col3_changes);
      var col4_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col4.$set(col4_changes);
      var col5_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col5_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col5.$set(col5_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(col0.$$.fragment, local);
      transition_in(col1.$$.fragment, local);
      transition_in(col2.$$.fragment, local);
      transition_in(col3.$$.fragment, local);
      transition_in(col4.$$.fragment, local);
      transition_in(col5.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(col0.$$.fragment, local);
      transition_out(col1.$$.fragment, local);
      transition_out(col2.$$.fragment, local);
      transition_out(col3.$$.fragment, local);
      transition_out(col4.$$.fragment, local);
      transition_out(col5.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(col0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(col1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(col2, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(col3, detaching);
      if (detaching) detach_dev(t3);
      destroy_component(col4, detaching);
      if (detaching) detach_dev(t4);
      destroy_component(col5, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_62.name,
    type: "slot",
    source: "(39:1) <Row>",
    ctx: ctx
  });
  return block;
} // (49:2) <Col span="6">


function create_default_slot_61(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple svelte-h6j4ae");
      add_location(div, file, 48, 16, 1531);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_61.name,
    type: "slot",
    source: "(49:2) <Col span=\\\"6\\\">",
    ctx: ctx
  });
  return block;
} // (50:2) <Col span="6">


function create_default_slot_60(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple-light svelte-h6j4ae");
      add_location(div, file, 49, 16, 1596);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_60.name,
    type: "slot",
    source: "(50:2) <Col span=\\\"6\\\">",
    ctx: ctx
  });
  return block;
} // (51:2) <Col span="6">


function create_default_slot_59(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple svelte-h6j4ae");
      add_location(div, file, 50, 16, 1667);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_59.name,
    type: "slot",
    source: "(51:2) <Col span=\\\"6\\\">",
    ctx: ctx
  });
  return block;
} // (52:2) <Col span="6">


function create_default_slot_58(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple-light svelte-h6j4ae");
      add_location(div, file, 51, 16, 1732);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_58.name,
    type: "slot",
    source: "(52:2) <Col span=\\\"6\\\">",
    ctx: ctx
  });
  return block;
} // (48:1) <Row gutter="20">


function create_default_slot_57(ctx) {
  var col0;
  var t0;
  var col1;
  var t1;
  var col2;
  var t2;
  var col3;
  var current;
  col0 = new Col({
    props: {
      span: "6",
      $$slots: {
        default: [create_default_slot_61]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col1 = new Col({
    props: {
      span: "6",
      $$slots: {
        default: [create_default_slot_60]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col2 = new Col({
    props: {
      span: "6",
      $$slots: {
        default: [create_default_slot_59]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col3 = new Col({
    props: {
      span: "6",
      $$slots: {
        default: [create_default_slot_58]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(col0.$$.fragment);
      t0 = space();
      create_component(col1.$$.fragment);
      t1 = space();
      create_component(col2.$$.fragment);
      t2 = space();
      create_component(col3.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(col0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(col1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(col2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(col3.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(col0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(col1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(col2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(col3, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var col0_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col0.$set(col0_changes);
      var col1_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col1.$set(col1_changes);
      var col2_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col2.$set(col2_changes);
      var col3_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col3.$set(col3_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(col0.$$.fragment, local);
      transition_in(col1.$$.fragment, local);
      transition_in(col2.$$.fragment, local);
      transition_in(col3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(col0.$$.fragment, local);
      transition_out(col1.$$.fragment, local);
      transition_out(col2.$$.fragment, local);
      transition_out(col3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(col0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(col1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(col2, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(col3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_57.name,
    type: "slot",
    source: "(48:1) <Row gutter=\\\"20\\\">",
    ctx: ctx
  });
  return block;
} // (56:2) <Col span="8">


function create_default_slot_56(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple svelte-h6j4ae");
      add_location(div, file, 55, 16, 1838);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_56.name,
    type: "slot",
    source: "(56:2) <Col span=\\\"8\\\">",
    ctx: ctx
  });
  return block;
} // (57:2) <Col span="16">


function create_default_slot_55(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple-light svelte-h6j4ae");
      add_location(div, file, 56, 17, 1904);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_55.name,
    type: "slot",
    source: "(57:2) <Col span=\\\"16\\\">",
    ctx: ctx
  });
  return block;
} // (55:1) <Row gutter="20">


function create_default_slot_54(ctx) {
  var col0;
  var t;
  var col1;
  var current;
  col0 = new Col({
    props: {
      span: "8",
      $$slots: {
        default: [create_default_slot_56]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col1 = new Col({
    props: {
      span: "16",
      $$slots: {
        default: [create_default_slot_55]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(col0.$$.fragment);
      t = space();
      create_component(col1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(col0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(col1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(col0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(col1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var col0_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col0.$set(col0_changes);
      var col1_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col1.$set(col1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(col0.$$.fragment, local);
      transition_in(col1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(col0.$$.fragment, local);
      transition_out(col1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(col0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(col1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_54.name,
    type: "slot",
    source: "(55:1) <Row gutter=\\\"20\\\">",
    ctx: ctx
  });
  return block;
} // (61:2) <Col span="8">


function create_default_slot_53(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple svelte-h6j4ae");
      add_location(div, file, 60, 16, 2010);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_53.name,
    type: "slot",
    source: "(61:2) <Col span=\\\"8\\\">",
    ctx: ctx
  });
  return block;
} // (62:2) <Col span="8">


function create_default_slot_52(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple-light svelte-h6j4ae");
      add_location(div, file, 61, 16, 2075);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_52.name,
    type: "slot",
    source: "(62:2) <Col span=\\\"8\\\">",
    ctx: ctx
  });
  return block;
} // (63:2) <Col span="4">


function create_default_slot_51(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple svelte-h6j4ae");
      add_location(div, file, 62, 16, 2146);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_51.name,
    type: "slot",
    source: "(63:2) <Col span=\\\"4\\\">",
    ctx: ctx
  });
  return block;
} // (64:2) <Col span="4">


function create_default_slot_50(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple-light svelte-h6j4ae");
      add_location(div, file, 63, 16, 2211);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_50.name,
    type: "slot",
    source: "(64:2) <Col span=\\\"4\\\">",
    ctx: ctx
  });
  return block;
} // (60:1) <Row gutter="20">


function create_default_slot_49(ctx) {
  var col0;
  var t0;
  var col1;
  var t1;
  var col2;
  var t2;
  var col3;
  var current;
  col0 = new Col({
    props: {
      span: "8",
      $$slots: {
        default: [create_default_slot_53]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col1 = new Col({
    props: {
      span: "8",
      $$slots: {
        default: [create_default_slot_52]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col2 = new Col({
    props: {
      span: "4",
      $$slots: {
        default: [create_default_slot_51]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col3 = new Col({
    props: {
      span: "4",
      $$slots: {
        default: [create_default_slot_50]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(col0.$$.fragment);
      t0 = space();
      create_component(col1.$$.fragment);
      t1 = space();
      create_component(col2.$$.fragment);
      t2 = space();
      create_component(col3.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(col0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(col1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(col2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(col3.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(col0, target, anchor);
      insert_dev(target, t0, anchor);
      mount_component(col1, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(col2, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(col3, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var col0_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col0.$set(col0_changes);
      var col1_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col1.$set(col1_changes);
      var col2_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col2.$set(col2_changes);
      var col3_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col3.$set(col3_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(col0.$$.fragment, local);
      transition_in(col1.$$.fragment, local);
      transition_in(col2.$$.fragment, local);
      transition_in(col3.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(col0.$$.fragment, local);
      transition_out(col1.$$.fragment, local);
      transition_out(col2.$$.fragment, local);
      transition_out(col3.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(col0, detaching);
      if (detaching) detach_dev(t0);
      destroy_component(col1, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(col2, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(col3, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_49.name,
    type: "slot",
    source: "(60:1) <Row gutter=\\\"20\\\">",
    ctx: ctx
  });
  return block;
} // (68:2) <Col span="6">


function create_default_slot_48(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple svelte-h6j4ae");
      add_location(div, file, 67, 16, 2317);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_48.name,
    type: "slot",
    source: "(68:2) <Col span=\\\"6\\\">",
    ctx: ctx
  });
  return block;
} // (69:2) <Col span="6" offset="6">


function create_default_slot_47(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple-light svelte-h6j4ae");
      add_location(div, file, 69, 3, 2397);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_47.name,
    type: "slot",
    source: "(69:2) <Col span=\\\"6\\\" offset=\\\"6\\\">",
    ctx: ctx
  });
  return block;
} // (67:1) <Row gutter="20">


function create_default_slot_46(ctx) {
  var col0;
  var t;
  var col1;
  var current;
  col0 = new Col({
    props: {
      span: "6",
      $$slots: {
        default: [create_default_slot_48]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col1 = new Col({
    props: {
      span: "6",
      offset: "6",
      $$slots: {
        default: [create_default_slot_47]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(col0.$$.fragment);
      t = space();
      create_component(col1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(col0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(col1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(col0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(col1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var col0_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col0.$set(col0_changes);
      var col1_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col1.$set(col1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(col0.$$.fragment, local);
      transition_in(col1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(col0.$$.fragment, local);
      transition_out(col1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(col0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(col1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_46.name,
    type: "slot",
    source: "(67:1) <Row gutter=\\\"20\\\">",
    ctx: ctx
  });
  return block;
} // (75:2) <Col span="6" offset="6">


function create_default_slot_45(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple svelte-h6j4ae");
      add_location(div, file, 74, 27, 2517);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_45.name,
    type: "slot",
    source: "(75:2) <Col span=\\\"6\\\" offset=\\\"6\\\">",
    ctx: ctx
  });
  return block;
} // (76:2) <Col span="6" offset="6">


function create_default_slot_44(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple-light svelte-h6j4ae");
      add_location(div, file, 76, 3, 2597);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_44.name,
    type: "slot",
    source: "(76:2) <Col span=\\\"6\\\" offset=\\\"6\\\">",
    ctx: ctx
  });
  return block;
} // (74:1) <Row gutter="20">


function create_default_slot_43(ctx) {
  var col0;
  var t;
  var col1;
  var current;
  col0 = new Col({
    props: {
      span: "6",
      offset: "6",
      $$slots: {
        default: [create_default_slot_45]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col1 = new Col({
    props: {
      span: "6",
      offset: "6",
      $$slots: {
        default: [create_default_slot_44]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(col0.$$.fragment);
      t = space();
      create_component(col1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(col0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(col1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(col0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(col1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var col0_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col0.$set(col0_changes);
      var col1_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col1.$set(col1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(col0.$$.fragment, local);
      transition_in(col1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(col0.$$.fragment, local);
      transition_out(col1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(col0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(col1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_43.name,
    type: "slot",
    source: "(74:1) <Row gutter=\\\"20\\\">",
    ctx: ctx
  });
  return block;
} // (82:2) <Col span="12" offset="6">


function create_default_slot_42(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple svelte-h6j4ae");
      add_location(div, file, 81, 28, 2718);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_42.name,
    type: "slot",
    source: "(82:2) <Col span=\\\"12\\\" offset=\\\"6\\\">",
    ctx: ctx
  });
  return block;
} // (81:1) <Row gutter="20">


function create_default_slot_41(ctx) {
  var col;
  var current;
  col = new Col({
    props: {
      span: "12",
      offset: "6",
      $$slots: {
        default: [create_default_slot_42]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(col.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(col.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(col, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var col_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col.$set(col_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(col.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(col.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(col, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_41.name,
    type: "slot",
    source: "(81:1) <Row gutter=\\\"20\\\">",
    ctx: ctx
  });
  return block;
} // (86:2) <Col span="6">


function create_default_slot_40(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple svelte-h6j4ae");
      add_location(div, file, 85, 16, 2818);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_40.name,
    type: "slot",
    source: "(86:2) <Col span=\\\"6\\\">",
    ctx: ctx
  });
  return block;
} // (87:2) <Col span="6" push="6">


function create_default_slot_39(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple-light svelte-h6j4ae");
      add_location(div, file, 87, 3, 2896);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_39.name,
    type: "slot",
    source: "(87:2) <Col span=\\\"6\\\" push=\\\"6\\\">",
    ctx: ctx
  });
  return block;
} // (85:1) <Row gutter="20">


function create_default_slot_38(ctx) {
  var col0;
  var t;
  var col1;
  var current;
  col0 = new Col({
    props: {
      span: "6",
      $$slots: {
        default: [create_default_slot_40]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col1 = new Col({
    props: {
      span: "6",
      push: "6",
      $$slots: {
        default: [create_default_slot_39]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(col0.$$.fragment);
      t = space();
      create_component(col1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(col0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(col1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(col0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(col1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var col0_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col0.$set(col0_changes);
      var col1_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col1.$set(col1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(col0.$$.fragment, local);
      transition_in(col1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(col0.$$.fragment, local);
      transition_out(col1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(col0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(col1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_38.name,
    type: "slot",
    source: "(85:1) <Row gutter=\\\"20\\\">",
    ctx: ctx
  });
  return block;
} // (93:2) <Col span="6">


function create_default_slot_37(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple svelte-h6j4ae");
      add_location(div, file, 92, 16, 3005);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_37.name,
    type: "slot",
    source: "(93:2) <Col span=\\\"6\\\">",
    ctx: ctx
  });
  return block;
} // (94:2) <Col span="12" pull="4">


function create_default_slot_36(ctx) {
  var div;
  var block = {
    c: function create() {
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid-content bg-purple-light svelte-h6j4ae");
      add_location(div, file, 94, 3, 3084);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_36.name,
    type: "slot",
    source: "(94:2) <Col span=\\\"12\\\" pull=\\\"4\\\">",
    ctx: ctx
  });
  return block;
} // (92:1) <Row gutter="20">


function create_default_slot_35(ctx) {
  var col0;
  var t;
  var col1;
  var current;
  col0 = new Col({
    props: {
      span: "6",
      $$slots: {
        default: [create_default_slot_37]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  col1 = new Col({
    props: {
      span: "12",
      pull: "4",
      $$slots: {
        default: [create_default_slot_36]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(col0.$$.fragment);
      t = space();
      create_component(col1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(col0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(col1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(col0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(col1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var col0_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col0.$set(col0_changes);
      var col1_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        col1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      col1.$set(col1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(col0.$$.fragment, local);
      transition_in(col1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(col0.$$.fragment, local);
      transition_out(col1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(col0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(col1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_35.name,
    type: "slot",
    source: "(92:1) <Row gutter=\\\"20\\\">",
    ctx: ctx
  });
  return block;
} // (104:1) <Button block>


function create_default_slot_34(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("默认按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "默认按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_34.name,
    type: "slot",
    source: "(104:1) <Button block>",
    ctx: ctx
  });
  return block;
} // (119:1) <Button disabled>


function create_default_slot_33(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("禁用按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "禁用按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_33.name,
    type: "slot",
    source: "(119:1) <Button disabled>",
    ctx: ctx
  });
  return block;
} // (120:1) <Button disabled type="primary">


function create_default_slot_32(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("主要按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "主要按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_32.name,
    type: "slot",
    source: "(120:1) <Button disabled type=\\\"primary\\\">",
    ctx: ctx
  });
  return block;
} // (121:1) <Button disabled type="success">


function create_default_slot_31(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("成功按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "成功按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_31.name,
    type: "slot",
    source: "(121:1) <Button disabled type=\\\"success\\\">",
    ctx: ctx
  });
  return block;
} // (122:1) <Button disabled type="error">


function create_default_slot_30(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("错误按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "错误按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_30.name,
    type: "slot",
    source: "(122:1) <Button disabled type=\\\"error\\\">",
    ctx: ctx
  });
  return block;
} // (123:1) <Button disabled type="warning">


function create_default_slot_29(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("警告按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "警告按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_29.name,
    type: "slot",
    source: "(123:1) <Button disabled type=\\\"warning\\\">",
    ctx: ctx
  });
  return block;
} // (124:1) <Button disabled type="info">


function create_default_slot_28(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("信息按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "信息按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_28.name,
    type: "slot",
    source: "(124:1) <Button disabled type=\\\"info\\\">",
    ctx: ctx
  });
  return block;
} // (129:1) <Button loading>


function create_default_slot_27(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("加载按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "加载按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_27.name,
    type: "slot",
    source: "(129:1) <Button loading>",
    ctx: ctx
  });
  return block;
} // (135:1) <Button plain>


function create_default_slot_26(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("朴素按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "朴素按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_26.name,
    type: "slot",
    source: "(135:1) <Button plain>",
    ctx: ctx
  });
  return block;
} // (136:1) <Button plain type="primary">


function create_default_slot_25(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("主要按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "主要按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_25.name,
    type: "slot",
    source: "(136:1) <Button plain type=\\\"primary\\\">",
    ctx: ctx
  });
  return block;
} // (137:1) <Button plain type="success">


function create_default_slot_24(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("成功按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "成功按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_24.name,
    type: "slot",
    source: "(137:1) <Button plain type=\\\"success\\\">",
    ctx: ctx
  });
  return block;
} // (138:1) <Button plain type="error">


function create_default_slot_23(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("错误按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "错误按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_23.name,
    type: "slot",
    source: "(138:1) <Button plain type=\\\"error\\\">",
    ctx: ctx
  });
  return block;
} // (139:1) <Button plain type="warning">


function create_default_slot_22(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("警告按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "警告按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_22.name,
    type: "slot",
    source: "(139:1) <Button plain type=\\\"warning\\\">",
    ctx: ctx
  });
  return block;
} // (140:1) <Button plain type="info">


function create_default_slot_21(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("信息按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "信息按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_21.name,
    type: "slot",
    source: "(140:1) <Button plain type=\\\"info\\\">",
    ctx: ctx
  });
  return block;
} // (146:1) <Button size="mini" type="primary">


function create_default_slot_20(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("迷你按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "迷你按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_20.name,
    type: "slot",
    source: "(146:1) <Button size=\\\"mini\\\" type=\\\"primary\\\">",
    ctx: ctx
  });
  return block;
} // (147:1) <Button type="primary">


function create_default_slot_19(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("默认按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "默认按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_19.name,
    type: "slot",
    source: "(147:1) <Button type=\\\"primary\\\">",
    ctx: ctx
  });
  return block;
} // (148:1) <Button size="medium" type="primary">


function create_default_slot_18(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("中等按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "中等按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_18.name,
    type: "slot",
    source: "(148:1) <Button size=\\\"medium\\\" type=\\\"primary\\\">",
    ctx: ctx
  });
  return block;
} // (149:1) <Button size="large" type="primary">


function create_default_slot_17(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("大型按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "大型按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_17.name,
    type: "slot",
    source: "(149:1) <Button size=\\\"large\\\" type=\\\"primary\\\">",
    ctx: ctx
  });
  return block;
} // (155:1) <Button>


function create_default_slot_16(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("默认按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "默认按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_16.name,
    type: "slot",
    source: "(155:1) <Button>",
    ctx: ctx
  });
  return block;
} // (156:1) <Button type="primary">


function create_default_slot_15(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("主要按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "主要按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_15.name,
    type: "slot",
    source: "(156:1) <Button type=\\\"primary\\\">",
    ctx: ctx
  });
  return block;
} // (157:1) <Button type="success">


function create_default_slot_14(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("成功按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "成功按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_14.name,
    type: "slot",
    source: "(157:1) <Button type=\\\"success\\\">",
    ctx: ctx
  });
  return block;
} // (158:1) <Button type="error">


function create_default_slot_13(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("错误按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "错误按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_13.name,
    type: "slot",
    source: "(158:1) <Button type=\\\"error\\\">",
    ctx: ctx
  });
  return block;
} // (159:1) <Button type="warning">


function create_default_slot_12(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("警告按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "警告按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_12.name,
    type: "slot",
    source: "(159:1) <Button type=\\\"warning\\\">",
    ctx: ctx
  });
  return block;
} // (160:1) <Button type="info">


function create_default_slot_11(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("信息按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "信息按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_11.name,
    type: "slot",
    source: "(160:1) <Button type=\\\"info\\\">",
    ctx: ctx
  });
  return block;
} // (166:1) <Button type="text">


function create_default_slot_10(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("文字按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "文字按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_10.name,
    type: "slot",
    source: "(166:1) <Button type=\\\"text\\\">",
    ctx: ctx
  });
  return block;
} // (167:1) <Button type="text" disabled>


function create_default_slot_9(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("文字按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "文字按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_9.name,
    type: "slot",
    source: "(167:1) <Button type=\\\"text\\\" disabled>",
    ctx: ctx
  });
  return block;
} // (173:1) <Button round>


function create_default_slot_8(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("默认按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "默认按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_8.name,
    type: "slot",
    source: "(173:1) <Button round>",
    ctx: ctx
  });
  return block;
} // (174:1) <Button round type="primary">


function create_default_slot_7(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("主要按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "主要按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_7.name,
    type: "slot",
    source: "(174:1) <Button round type=\\\"primary\\\">",
    ctx: ctx
  });
  return block;
} // (175:1) <Button round type="success">


function create_default_slot_6(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("成功按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "成功按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_6.name,
    type: "slot",
    source: "(175:1) <Button round type=\\\"success\\\">",
    ctx: ctx
  });
  return block;
} // (176:1) <Button round type="error">


function create_default_slot_5(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("错误按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "错误按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_5.name,
    type: "slot",
    source: "(176:1) <Button round type=\\\"error\\\">",
    ctx: ctx
  });
  return block;
} // (177:1) <Button round type="warning">


function create_default_slot_4(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("警告按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "警告按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_4.name,
    type: "slot",
    source: "(177:1) <Button round type=\\\"warning\\\">",
    ctx: ctx
  });
  return block;
} // (178:1) <Button round type="info">


function create_default_slot_3(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("信息按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "信息按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(178:1) <Button round type=\\\"info\\\">",
    ctx: ctx
  });
  return block;
} // (185:2) <Button type="primary">


function create_default_slot_2(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("主要按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "主要按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(185:2) <Button type=\\\"primary\\\">",
    ctx: ctx
  });
  return block;
} // (186:2) <Button type="primary">


function create_default_slot_1(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("主要按钮");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "主要按钮");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(186:2) <Button type=\\\"primary\\\">",
    ctx: ctx
  });
  return block;
} // (184:1) <ButtonGroup>


function create_default_slot(ctx) {
  var button0;
  var t;
  var button1;
  var current;
  button0 = new Button({
    props: {
      type: "primary",
      $$slots: {
        default: [create_default_slot_2]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1 = new Button({
    props: {
      type: "primary",
      $$slots: {
        default: [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(button0.$$.fragment);
      t = space();
      create_component(button1.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(button0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(button1.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(button0, target, anchor);
      insert_dev(target, t, anchor);
      mount_component(button1, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var button0_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(button0, detaching);
      if (detaching) detach_dev(t);
      destroy_component(button1, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(184:1) <ButtonGroup>",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div0;
  var h30;
  var t0;
  var t1;
  var br0;
  var t2;
  var row0;
  var t3;
  var br1;
  var t4;
  var div1;
  var h31;
  var t5;
  var t6;
  var row1;
  var t7;
  var br2;
  var t8;
  var row2;
  var t9;
  var br3;
  var t10;
  var row3;
  var t11;
  var br4;
  var t12;
  var row4;
  var t13;
  var br5;
  var t14;
  var row5;
  var t15;
  var br6;
  var t16;
  var row6;
  var t17;
  var br7;
  var t18;
  var row7;
  var t19;
  var br8;
  var t20;
  var row8;
  var t21;
  var br9;
  var t22;
  var row9;
  var t23;
  var br10;
  var t24;
  var row10;
  var t25;
  var br11;
  var t26;
  var row11;
  var t27;
  var br12;
  var t28;
  var row12;
  var t29;
  var br13;
  var t30;
  var row13;
  var t31;
  var br14;
  var t32;
  var br15;
  var t33;
  var div2;
  var h32;
  var t34;
  var t35;
  var br16;
  var t36;
  var button0;
  var t37;
  var br17;
  var t38;
  var div3;
  var h33;
  var t39;
  var t40;
  var br18;
  var t41;
  var button1;
  var t42;
  var button2;
  var t43;
  var button3;
  var t44;
  var button4;
  var t45;
  var br19;
  var t46;
  var div4;
  var h34;
  var t47;
  var t48;
  var br20;
  var t49;
  var button5;
  var t50;
  var button6;
  var t51;
  var button7;
  var t52;
  var button8;
  var t53;
  var button9;
  var t54;
  var button10;
  var t55;
  var div5;
  var h35;
  var t56;
  var t57;
  var br21;
  var t58;
  var button11;
  var t59;
  var br22;
  var t60;
  var div6;
  var h36;
  var t61;
  var t62;
  var br23;
  var t63;
  var button12;
  var t64;
  var button13;
  var t65;
  var button14;
  var t66;
  var button15;
  var t67;
  var button16;
  var t68;
  var button17;
  var t69;
  var br24;
  var t70;
  var div7;
  var h37;
  var t71;
  var t72;
  var br25;
  var t73;
  var button18;
  var t74;
  var button19;
  var t75;
  var button20;
  var t76;
  var button21;
  var t77;
  var br26;
  var t78;
  var div8;
  var h38;
  var t79;
  var t80;
  var br27;
  var t81;
  var button22;
  var t82;
  var button23;
  var t83;
  var button24;
  var t84;
  var button25;
  var t85;
  var button26;
  var t86;
  var button27;
  var t87;
  var br28;
  var t88;
  var div9;
  var h39;
  var t89;
  var t90;
  var br29;
  var t91;
  var button28;
  var t92;
  var button29;
  var t93;
  var br30;
  var t94;
  var div10;
  var h310;
  var t95;
  var t96;
  var br31;
  var t97;
  var button30;
  var t98;
  var button31;
  var t99;
  var button32;
  var t100;
  var button33;
  var t101;
  var button34;
  var t102;
  var button35;
  var t103;
  var br32;
  var t104;
  var div11;
  var h311;
  var t105;
  var t106;
  var br33;
  var t107;
  var buttongroup;
  var t108;
  var br34;
  var current;
  row0 = new Row({
    props: {
      type: "flex",
      justify: "space-between",
      $$slots: {
        default: [create_default_slot_83]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  row1 = new Row({
    props: {
      $$slots: {
        default: [create_default_slot_81]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  row2 = new Row({
    props: {
      $$slots: {
        default: [create_default_slot_78]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  row3 = new Row({
    props: {
      $$slots: {
        default: [create_default_slot_74]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  row4 = new Row({
    props: {
      $$slots: {
        default: [create_default_slot_69]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  row5 = new Row({
    props: {
      $$slots: {
        default: [create_default_slot_62]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  row6 = new Row({
    props: {
      gutter: "20",
      $$slots: {
        default: [create_default_slot_57]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  row7 = new Row({
    props: {
      gutter: "20",
      $$slots: {
        default: [create_default_slot_54]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  row8 = new Row({
    props: {
      gutter: "20",
      $$slots: {
        default: [create_default_slot_49]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  row9 = new Row({
    props: {
      gutter: "20",
      $$slots: {
        default: [create_default_slot_46]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  row10 = new Row({
    props: {
      gutter: "20",
      $$slots: {
        default: [create_default_slot_43]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  row11 = new Row({
    props: {
      gutter: "20",
      $$slots: {
        default: [create_default_slot_41]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  row12 = new Row({
    props: {
      gutter: "20",
      $$slots: {
        default: [create_default_slot_38]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  row13 = new Row({
    props: {
      gutter: "20",
      $$slots: {
        default: [create_default_slot_35]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0 = new Button({
    props: {
      block: true,
      $$slots: {
        default: [create_default_slot_34]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1 = new Button({
    props: {
      icon: "search",
      size: "mini",
      circle: true
    },
    $$inline: true
  });
  button2 = new Button({
    props: {
      icon: "search",
      circle: true
    },
    $$inline: true
  });
  button3 = new Button({
    props: {
      icon: "search",
      size: "medium",
      circle: true
    },
    $$inline: true
  });
  button4 = new Button({
    props: {
      icon: "search",
      size: "large",
      circle: true
    },
    $$inline: true
  });
  button5 = new Button({
    props: {
      disabled: true,
      $$slots: {
        default: [create_default_slot_33]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button6 = new Button({
    props: {
      disabled: true,
      type: "primary",
      $$slots: {
        default: [create_default_slot_32]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button7 = new Button({
    props: {
      disabled: true,
      type: "success",
      $$slots: {
        default: [create_default_slot_31]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button8 = new Button({
    props: {
      disabled: true,
      type: "error",
      $$slots: {
        default: [create_default_slot_30]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button9 = new Button({
    props: {
      disabled: true,
      type: "warning",
      $$slots: {
        default: [create_default_slot_29]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button10 = new Button({
    props: {
      disabled: true,
      type: "info",
      $$slots: {
        default: [create_default_slot_28]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button11 = new Button({
    props: {
      loading: true,
      $$slots: {
        default: [create_default_slot_27]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button12 = new Button({
    props: {
      plain: true,
      $$slots: {
        default: [create_default_slot_26]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button13 = new Button({
    props: {
      plain: true,
      type: "primary",
      $$slots: {
        default: [create_default_slot_25]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button14 = new Button({
    props: {
      plain: true,
      type: "success",
      $$slots: {
        default: [create_default_slot_24]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button15 = new Button({
    props: {
      plain: true,
      type: "error",
      $$slots: {
        default: [create_default_slot_23]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button16 = new Button({
    props: {
      plain: true,
      type: "warning",
      $$slots: {
        default: [create_default_slot_22]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button17 = new Button({
    props: {
      plain: true,
      type: "info",
      $$slots: {
        default: [create_default_slot_21]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button18 = new Button({
    props: {
      size: "mini",
      type: "primary",
      $$slots: {
        default: [create_default_slot_20]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button19 = new Button({
    props: {
      type: "primary",
      $$slots: {
        default: [create_default_slot_19]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button20 = new Button({
    props: {
      size: "medium",
      type: "primary",
      $$slots: {
        default: [create_default_slot_18]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button21 = new Button({
    props: {
      size: "large",
      type: "primary",
      $$slots: {
        default: [create_default_slot_17]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button22 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_16]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button23 = new Button({
    props: {
      type: "primary",
      $$slots: {
        default: [create_default_slot_15]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button24 = new Button({
    props: {
      type: "success",
      $$slots: {
        default: [create_default_slot_14]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button25 = new Button({
    props: {
      type: "error",
      $$slots: {
        default: [create_default_slot_13]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button26 = new Button({
    props: {
      type: "warning",
      $$slots: {
        default: [create_default_slot_12]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button27 = new Button({
    props: {
      type: "info",
      $$slots: {
        default: [create_default_slot_11]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button28 = new Button({
    props: {
      type: "text",
      $$slots: {
        default: [create_default_slot_10]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button29 = new Button({
    props: {
      type: "text",
      disabled: true,
      $$slots: {
        default: [create_default_slot_9]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button30 = new Button({
    props: {
      round: true,
      $$slots: {
        default: [create_default_slot_8]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button31 = new Button({
    props: {
      round: true,
      type: "primary",
      $$slots: {
        default: [create_default_slot_7]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button32 = new Button({
    props: {
      round: true,
      type: "success",
      $$slots: {
        default: [create_default_slot_6]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button33 = new Button({
    props: {
      round: true,
      type: "error",
      $$slots: {
        default: [create_default_slot_5]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button34 = new Button({
    props: {
      round: true,
      type: "warning",
      $$slots: {
        default: [create_default_slot_4]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button35 = new Button({
    props: {
      round: true,
      type: "info",
      $$slots: {
        default: [create_default_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  buttongroup = new ButtonGroup({
    props: {
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      div0 = element("div");
      h30 = element("h3");
      t0 = text("Flex布局");
      t1 = space();
      br0 = element("br");
      t2 = space();
      create_component(row0.$$.fragment);
      t3 = space();
      br1 = element("br");
      t4 = space();
      div1 = element("div");
      h31 = element("h3");
      t5 = text("布局");
      t6 = space();
      create_component(row1.$$.fragment);
      t7 = space();
      br2 = element("br");
      t8 = space();
      create_component(row2.$$.fragment);
      t9 = space();
      br3 = element("br");
      t10 = space();
      create_component(row3.$$.fragment);
      t11 = space();
      br4 = element("br");
      t12 = space();
      create_component(row4.$$.fragment);
      t13 = space();
      br5 = element("br");
      t14 = space();
      create_component(row5.$$.fragment);
      t15 = space();
      br6 = element("br");
      t16 = space();
      create_component(row6.$$.fragment);
      t17 = space();
      br7 = element("br");
      t18 = space();
      create_component(row7.$$.fragment);
      t19 = space();
      br8 = element("br");
      t20 = space();
      create_component(row8.$$.fragment);
      t21 = space();
      br9 = element("br");
      t22 = space();
      create_component(row9.$$.fragment);
      t23 = space();
      br10 = element("br");
      t24 = space();
      create_component(row10.$$.fragment);
      t25 = space();
      br11 = element("br");
      t26 = space();
      create_component(row11.$$.fragment);
      t27 = space();
      br12 = element("br");
      t28 = space();
      create_component(row12.$$.fragment);
      t29 = space();
      br13 = element("br");
      t30 = space();
      create_component(row13.$$.fragment);
      t31 = space();
      br14 = element("br");
      t32 = space();
      br15 = element("br");
      t33 = space();
      div2 = element("div");
      h32 = element("h3");
      t34 = text("块级按钮");
      t35 = space();
      br16 = element("br");
      t36 = space();
      create_component(button0.$$.fragment);
      t37 = space();
      br17 = element("br");
      t38 = space();
      div3 = element("div");
      h33 = element("h3");
      t39 = text("圆形按钮");
      t40 = space();
      br18 = element("br");
      t41 = space();
      create_component(button1.$$.fragment);
      t42 = space();
      create_component(button2.$$.fragment);
      t43 = space();
      create_component(button3.$$.fragment);
      t44 = space();
      create_component(button4.$$.fragment);
      t45 = space();
      br19 = element("br");
      t46 = space();
      div4 = element("div");
      h34 = element("h3");
      t47 = text("禁用按钮");
      t48 = space();
      br20 = element("br");
      t49 = space();
      create_component(button5.$$.fragment);
      t50 = space();
      create_component(button6.$$.fragment);
      t51 = space();
      create_component(button7.$$.fragment);
      t52 = space();
      create_component(button8.$$.fragment);
      t53 = space();
      create_component(button9.$$.fragment);
      t54 = space();
      create_component(button10.$$.fragment);
      t55 = space();
      div5 = element("div");
      h35 = element("h3");
      t56 = text("loading按钮");
      t57 = space();
      br21 = element("br");
      t58 = space();
      create_component(button11.$$.fragment);
      t59 = space();
      br22 = element("br");
      t60 = space();
      div6 = element("div");
      h36 = element("h3");
      t61 = text("朴素按钮");
      t62 = space();
      br23 = element("br");
      t63 = space();
      create_component(button12.$$.fragment);
      t64 = space();
      create_component(button13.$$.fragment);
      t65 = space();
      create_component(button14.$$.fragment);
      t66 = space();
      create_component(button15.$$.fragment);
      t67 = space();
      create_component(button16.$$.fragment);
      t68 = space();
      create_component(button17.$$.fragment);
      t69 = space();
      br24 = element("br");
      t70 = space();
      div7 = element("div");
      h37 = element("h3");
      t71 = text("按钮大小");
      t72 = space();
      br25 = element("br");
      t73 = space();
      create_component(button18.$$.fragment);
      t74 = space();
      create_component(button19.$$.fragment);
      t75 = space();
      create_component(button20.$$.fragment);
      t76 = space();
      create_component(button21.$$.fragment);
      t77 = space();
      br26 = element("br");
      t78 = space();
      div8 = element("div");
      h38 = element("h3");
      t79 = text("按钮类型");
      t80 = space();
      br27 = element("br");
      t81 = space();
      create_component(button22.$$.fragment);
      t82 = space();
      create_component(button23.$$.fragment);
      t83 = space();
      create_component(button24.$$.fragment);
      t84 = space();
      create_component(button25.$$.fragment);
      t85 = space();
      create_component(button26.$$.fragment);
      t86 = space();
      create_component(button27.$$.fragment);
      t87 = space();
      br28 = element("br");
      t88 = space();
      div9 = element("div");
      h39 = element("h3");
      t89 = text("文字按钮");
      t90 = space();
      br29 = element("br");
      t91 = space();
      create_component(button28.$$.fragment);
      t92 = space();
      create_component(button29.$$.fragment);
      t93 = space();
      br30 = element("br");
      t94 = space();
      div10 = element("div");
      h310 = element("h3");
      t95 = text("圆角类型");
      t96 = space();
      br31 = element("br");
      t97 = space();
      create_component(button30.$$.fragment);
      t98 = space();
      create_component(button31.$$.fragment);
      t99 = space();
      create_component(button32.$$.fragment);
      t100 = space();
      create_component(button33.$$.fragment);
      t101 = space();
      create_component(button34.$$.fragment);
      t102 = space();
      create_component(button35.$$.fragment);
      t103 = space();
      br32 = element("br");
      t104 = space();
      div11 = element("div");
      h311 = element("h3");
      t105 = text("按钮组");
      t106 = space();
      br33 = element("br");
      t107 = space();
      create_component(buttongroup.$$.fragment);
      t108 = space();
      br34 = element("br");
      this.h();
    },
    l: function claim(nodes) {
      div0 = claim_element(nodes, "DIV", {});
      var div0_nodes = children(div0);
      h30 = claim_element(div0_nodes, "H3", {});
      var h30_nodes = children(h30);
      t0 = claim_text(h30_nodes, "Flex布局");
      h30_nodes.forEach(detach_dev);
      t1 = claim_space(div0_nodes);
      br0 = claim_element(div0_nodes, "BR", {});
      t2 = claim_space(div0_nodes);
      claim_component(row0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(nodes);
      br1 = claim_element(nodes, "BR", {});
      t4 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {});
      var div1_nodes = children(div1);
      h31 = claim_element(div1_nodes, "H3", {});
      var h31_nodes = children(h31);
      t5 = claim_text(h31_nodes, "布局");
      h31_nodes.forEach(detach_dev);
      t6 = claim_space(div1_nodes);
      claim_component(row1.$$.fragment, div1_nodes);
      t7 = claim_space(div1_nodes);
      br2 = claim_element(div1_nodes, "BR", {});
      t8 = claim_space(div1_nodes);
      claim_component(row2.$$.fragment, div1_nodes);
      t9 = claim_space(div1_nodes);
      br3 = claim_element(div1_nodes, "BR", {});
      t10 = claim_space(div1_nodes);
      claim_component(row3.$$.fragment, div1_nodes);
      t11 = claim_space(div1_nodes);
      br4 = claim_element(div1_nodes, "BR", {});
      t12 = claim_space(div1_nodes);
      claim_component(row4.$$.fragment, div1_nodes);
      t13 = claim_space(div1_nodes);
      br5 = claim_element(div1_nodes, "BR", {});
      t14 = claim_space(div1_nodes);
      claim_component(row5.$$.fragment, div1_nodes);
      t15 = claim_space(div1_nodes);
      br6 = claim_element(div1_nodes, "BR", {});
      t16 = claim_space(div1_nodes);
      claim_component(row6.$$.fragment, div1_nodes);
      t17 = claim_space(div1_nodes);
      br7 = claim_element(div1_nodes, "BR", {});
      t18 = claim_space(div1_nodes);
      claim_component(row7.$$.fragment, div1_nodes);
      t19 = claim_space(div1_nodes);
      br8 = claim_element(div1_nodes, "BR", {});
      t20 = claim_space(div1_nodes);
      claim_component(row8.$$.fragment, div1_nodes);
      t21 = claim_space(div1_nodes);
      br9 = claim_element(div1_nodes, "BR", {});
      t22 = claim_space(div1_nodes);
      claim_component(row9.$$.fragment, div1_nodes);
      t23 = claim_space(div1_nodes);
      br10 = claim_element(div1_nodes, "BR", {});
      t24 = claim_space(div1_nodes);
      claim_component(row10.$$.fragment, div1_nodes);
      t25 = claim_space(div1_nodes);
      br11 = claim_element(div1_nodes, "BR", {});
      t26 = claim_space(div1_nodes);
      claim_component(row11.$$.fragment, div1_nodes);
      t27 = claim_space(div1_nodes);
      br12 = claim_element(div1_nodes, "BR", {});
      t28 = claim_space(div1_nodes);
      claim_component(row12.$$.fragment, div1_nodes);
      t29 = claim_space(div1_nodes);
      br13 = claim_element(div1_nodes, "BR", {});
      t30 = claim_space(div1_nodes);
      claim_component(row13.$$.fragment, div1_nodes);
      t31 = claim_space(div1_nodes);
      br14 = claim_element(div1_nodes, "BR", {});
      div1_nodes.forEach(detach_dev);
      t32 = claim_space(nodes);
      br15 = claim_element(nodes, "BR", {});
      t33 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", {});
      var div2_nodes = children(div2);
      h32 = claim_element(div2_nodes, "H3", {});
      var h32_nodes = children(h32);
      t34 = claim_text(h32_nodes, "块级按钮");
      h32_nodes.forEach(detach_dev);
      t35 = claim_space(div2_nodes);
      br16 = claim_element(div2_nodes, "BR", {});
      t36 = claim_space(div2_nodes);
      claim_component(button0.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      t37 = claim_space(nodes);
      br17 = claim_element(nodes, "BR", {});
      t38 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", {});
      var div3_nodes = children(div3);
      h33 = claim_element(div3_nodes, "H3", {});
      var h33_nodes = children(h33);
      t39 = claim_text(h33_nodes, "圆形按钮");
      h33_nodes.forEach(detach_dev);
      t40 = claim_space(div3_nodes);
      br18 = claim_element(div3_nodes, "BR", {});
      t41 = claim_space(div3_nodes);
      claim_component(button1.$$.fragment, div3_nodes);
      t42 = claim_space(div3_nodes);
      claim_component(button2.$$.fragment, div3_nodes);
      t43 = claim_space(div3_nodes);
      claim_component(button3.$$.fragment, div3_nodes);
      t44 = claim_space(div3_nodes);
      claim_component(button4.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach_dev);
      t45 = claim_space(nodes);
      br19 = claim_element(nodes, "BR", {});
      t46 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", {});
      var div4_nodes = children(div4);
      h34 = claim_element(div4_nodes, "H3", {});
      var h34_nodes = children(h34);
      t47 = claim_text(h34_nodes, "禁用按钮");
      h34_nodes.forEach(detach_dev);
      t48 = claim_space(div4_nodes);
      br20 = claim_element(div4_nodes, "BR", {});
      t49 = claim_space(div4_nodes);
      claim_component(button5.$$.fragment, div4_nodes);
      t50 = claim_space(div4_nodes);
      claim_component(button6.$$.fragment, div4_nodes);
      t51 = claim_space(div4_nodes);
      claim_component(button7.$$.fragment, div4_nodes);
      t52 = claim_space(div4_nodes);
      claim_component(button8.$$.fragment, div4_nodes);
      t53 = claim_space(div4_nodes);
      claim_component(button9.$$.fragment, div4_nodes);
      t54 = claim_space(div4_nodes);
      claim_component(button10.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach_dev);
      t55 = claim_space(nodes);
      div5 = claim_element(nodes, "DIV", {});
      var div5_nodes = children(div5);
      h35 = claim_element(div5_nodes, "H3", {});
      var h35_nodes = children(h35);
      t56 = claim_text(h35_nodes, "loading按钮");
      h35_nodes.forEach(detach_dev);
      t57 = claim_space(div5_nodes);
      br21 = claim_element(div5_nodes, "BR", {});
      t58 = claim_space(div5_nodes);
      claim_component(button11.$$.fragment, div5_nodes);
      div5_nodes.forEach(detach_dev);
      t59 = claim_space(nodes);
      br22 = claim_element(nodes, "BR", {});
      t60 = claim_space(nodes);
      div6 = claim_element(nodes, "DIV", {});
      var div6_nodes = children(div6);
      h36 = claim_element(div6_nodes, "H3", {});
      var h36_nodes = children(h36);
      t61 = claim_text(h36_nodes, "朴素按钮");
      h36_nodes.forEach(detach_dev);
      t62 = claim_space(div6_nodes);
      br23 = claim_element(div6_nodes, "BR", {});
      t63 = claim_space(div6_nodes);
      claim_component(button12.$$.fragment, div6_nodes);
      t64 = claim_space(div6_nodes);
      claim_component(button13.$$.fragment, div6_nodes);
      t65 = claim_space(div6_nodes);
      claim_component(button14.$$.fragment, div6_nodes);
      t66 = claim_space(div6_nodes);
      claim_component(button15.$$.fragment, div6_nodes);
      t67 = claim_space(div6_nodes);
      claim_component(button16.$$.fragment, div6_nodes);
      t68 = claim_space(div6_nodes);
      claim_component(button17.$$.fragment, div6_nodes);
      div6_nodes.forEach(detach_dev);
      t69 = claim_space(nodes);
      br24 = claim_element(nodes, "BR", {});
      t70 = claim_space(nodes);
      div7 = claim_element(nodes, "DIV", {});
      var div7_nodes = children(div7);
      h37 = claim_element(div7_nodes, "H3", {});
      var h37_nodes = children(h37);
      t71 = claim_text(h37_nodes, "按钮大小");
      h37_nodes.forEach(detach_dev);
      t72 = claim_space(div7_nodes);
      br25 = claim_element(div7_nodes, "BR", {});
      t73 = claim_space(div7_nodes);
      claim_component(button18.$$.fragment, div7_nodes);
      t74 = claim_space(div7_nodes);
      claim_component(button19.$$.fragment, div7_nodes);
      t75 = claim_space(div7_nodes);
      claim_component(button20.$$.fragment, div7_nodes);
      t76 = claim_space(div7_nodes);
      claim_component(button21.$$.fragment, div7_nodes);
      div7_nodes.forEach(detach_dev);
      t77 = claim_space(nodes);
      br26 = claim_element(nodes, "BR", {});
      t78 = claim_space(nodes);
      div8 = claim_element(nodes, "DIV", {});
      var div8_nodes = children(div8);
      h38 = claim_element(div8_nodes, "H3", {});
      var h38_nodes = children(h38);
      t79 = claim_text(h38_nodes, "按钮类型");
      h38_nodes.forEach(detach_dev);
      t80 = claim_space(div8_nodes);
      br27 = claim_element(div8_nodes, "BR", {});
      t81 = claim_space(div8_nodes);
      claim_component(button22.$$.fragment, div8_nodes);
      t82 = claim_space(div8_nodes);
      claim_component(button23.$$.fragment, div8_nodes);
      t83 = claim_space(div8_nodes);
      claim_component(button24.$$.fragment, div8_nodes);
      t84 = claim_space(div8_nodes);
      claim_component(button25.$$.fragment, div8_nodes);
      t85 = claim_space(div8_nodes);
      claim_component(button26.$$.fragment, div8_nodes);
      t86 = claim_space(div8_nodes);
      claim_component(button27.$$.fragment, div8_nodes);
      div8_nodes.forEach(detach_dev);
      t87 = claim_space(nodes);
      br28 = claim_element(nodes, "BR", {});
      t88 = claim_space(nodes);
      div9 = claim_element(nodes, "DIV", {});
      var div9_nodes = children(div9);
      h39 = claim_element(div9_nodes, "H3", {});
      var h39_nodes = children(h39);
      t89 = claim_text(h39_nodes, "文字按钮");
      h39_nodes.forEach(detach_dev);
      t90 = claim_space(div9_nodes);
      br29 = claim_element(div9_nodes, "BR", {});
      t91 = claim_space(div9_nodes);
      claim_component(button28.$$.fragment, div9_nodes);
      t92 = claim_space(div9_nodes);
      claim_component(button29.$$.fragment, div9_nodes);
      div9_nodes.forEach(detach_dev);
      t93 = claim_space(nodes);
      br30 = claim_element(nodes, "BR", {});
      t94 = claim_space(nodes);
      div10 = claim_element(nodes, "DIV", {});
      var div10_nodes = children(div10);
      h310 = claim_element(div10_nodes, "H3", {});
      var h310_nodes = children(h310);
      t95 = claim_text(h310_nodes, "圆角类型");
      h310_nodes.forEach(detach_dev);
      t96 = claim_space(div10_nodes);
      br31 = claim_element(div10_nodes, "BR", {});
      t97 = claim_space(div10_nodes);
      claim_component(button30.$$.fragment, div10_nodes);
      t98 = claim_space(div10_nodes);
      claim_component(button31.$$.fragment, div10_nodes);
      t99 = claim_space(div10_nodes);
      claim_component(button32.$$.fragment, div10_nodes);
      t100 = claim_space(div10_nodes);
      claim_component(button33.$$.fragment, div10_nodes);
      t101 = claim_space(div10_nodes);
      claim_component(button34.$$.fragment, div10_nodes);
      t102 = claim_space(div10_nodes);
      claim_component(button35.$$.fragment, div10_nodes);
      div10_nodes.forEach(detach_dev);
      t103 = claim_space(nodes);
      br32 = claim_element(nodes, "BR", {});
      t104 = claim_space(nodes);
      div11 = claim_element(nodes, "DIV", {});
      var div11_nodes = children(div11);
      h311 = claim_element(div11_nodes, "H3", {});
      var h311_nodes = children(h311);
      t105 = claim_text(h311_nodes, "按钮组");
      h311_nodes.forEach(detach_dev);
      t106 = claim_space(div11_nodes);
      br33 = claim_element(div11_nodes, "BR", {});
      t107 = claim_space(div11_nodes);
      claim_component(buttongroup.$$.fragment, div11_nodes);
      div11_nodes.forEach(detach_dev);
      t108 = claim_space(nodes);
      br34 = claim_element(nodes, "BR", {});
      this.h();
    },
    h: function hydrate() {
      add_location(h30, file, 4, 1, 109);
      add_location(br0, file, 5, 1, 126);
      add_location(div0, file, 3, 0, 102);
      add_location(br1, file, 13, 0, 263);
      add_location(h31, file, 15, 1, 277);
      add_location(br2, file, 19, 1, 378);
      add_location(br3, file, 24, 1, 539);
      add_location(br4, file, 30, 1, 763);
      add_location(br5, file, 37, 1, 1058);
      add_location(br6, file, 46, 1, 1489);
      add_location(br7, file, 53, 1, 1796);
      add_location(br8, file, 58, 1, 1968);
      add_location(br9, file, 65, 1, 2275);
      add_location(br10, file, 72, 1, 2464);
      add_location(br11, file, 79, 1, 2664);
      add_location(br12, file, 83, 1, 2776);
      add_location(br13, file, 90, 1, 2963);
      add_location(br14, file, 97, 1, 3151);
      add_location(div1, file, 14, 0, 270);
      add_location(br15, file, 99, 0, 3165);
      add_location(h32, file, 101, 1, 3179);
      add_location(br16, file, 102, 1, 3194);
      add_location(div2, file, 100, 0, 3172);
      add_location(br17, file, 105, 0, 3237);
      add_location(h33, file, 107, 1, 3251);
      add_location(br18, file, 108, 1, 3266);
      add_location(div3, file, 106, 0, 3244);
      add_location(br19, file, 114, 0, 3451);
      add_location(h34, file, 116, 1, 3465);
      add_location(br20, file, 117, 1, 3480);
      add_location(div4, file, 115, 0, 3458);
      add_location(h35, file, 126, 1, 3763);
      add_location(br21, file, 127, 1, 3783);
      add_location(div5, file, 125, 0, 3756);
      add_location(br22, file, 130, 0, 3828);
      add_location(h36, file, 132, 1, 3842);
      add_location(br23, file, 133, 1, 3857);
      add_location(div6, file, 131, 0, 3835);
      add_location(br24, file, 141, 0, 4115);
      add_location(h37, file, 143, 1, 4129);
      add_location(br25, file, 144, 1, 4144);
      add_location(div7, file, 142, 0, 4122);
      add_location(br26, file, 150, 0, 4349);
      add_location(h38, file, 152, 1, 4363);
      add_location(br27, file, 153, 1, 4378);
      add_location(div8, file, 151, 0, 4356);
      add_location(br28, file, 161, 0, 4600);
      add_location(h39, file, 163, 1, 4614);
      add_location(br29, file, 164, 1, 4629);
      add_location(div9, file, 162, 0, 4607);
      add_location(br30, file, 168, 0, 4722);
      add_location(h310, file, 170, 1, 4736);
      add_location(br31, file, 171, 1, 4751);
      add_location(div10, file, 169, 0, 4729);
      add_location(br32, file, 179, 0, 5009);
      add_location(h311, file, 181, 1, 5023);
      add_location(br33, file, 182, 1, 5037);
      add_location(div11, file, 180, 0, 5016);
      add_location(br34, file, 188, 0, 5160);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div0, anchor);
      append_dev(div0, h30);
      append_dev(h30, t0);
      append_dev(div0, t1);
      append_dev(div0, br0);
      append_dev(div0, t2);
      mount_component(row0, div0, null);
      insert_dev(target, t3, anchor);
      insert_dev(target, br1, anchor);
      insert_dev(target, t4, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, h31);
      append_dev(h31, t5);
      append_dev(div1, t6);
      mount_component(row1, div1, null);
      append_dev(div1, t7);
      append_dev(div1, br2);
      append_dev(div1, t8);
      mount_component(row2, div1, null);
      append_dev(div1, t9);
      append_dev(div1, br3);
      append_dev(div1, t10);
      mount_component(row3, div1, null);
      append_dev(div1, t11);
      append_dev(div1, br4);
      append_dev(div1, t12);
      mount_component(row4, div1, null);
      append_dev(div1, t13);
      append_dev(div1, br5);
      append_dev(div1, t14);
      mount_component(row5, div1, null);
      append_dev(div1, t15);
      append_dev(div1, br6);
      append_dev(div1, t16);
      mount_component(row6, div1, null);
      append_dev(div1, t17);
      append_dev(div1, br7);
      append_dev(div1, t18);
      mount_component(row7, div1, null);
      append_dev(div1, t19);
      append_dev(div1, br8);
      append_dev(div1, t20);
      mount_component(row8, div1, null);
      append_dev(div1, t21);
      append_dev(div1, br9);
      append_dev(div1, t22);
      mount_component(row9, div1, null);
      append_dev(div1, t23);
      append_dev(div1, br10);
      append_dev(div1, t24);
      mount_component(row10, div1, null);
      append_dev(div1, t25);
      append_dev(div1, br11);
      append_dev(div1, t26);
      mount_component(row11, div1, null);
      append_dev(div1, t27);
      append_dev(div1, br12);
      append_dev(div1, t28);
      mount_component(row12, div1, null);
      append_dev(div1, t29);
      append_dev(div1, br13);
      append_dev(div1, t30);
      mount_component(row13, div1, null);
      append_dev(div1, t31);
      append_dev(div1, br14);
      insert_dev(target, t32, anchor);
      insert_dev(target, br15, anchor);
      insert_dev(target, t33, anchor);
      insert_dev(target, div2, anchor);
      append_dev(div2, h32);
      append_dev(h32, t34);
      append_dev(div2, t35);
      append_dev(div2, br16);
      append_dev(div2, t36);
      mount_component(button0, div2, null);
      insert_dev(target, t37, anchor);
      insert_dev(target, br17, anchor);
      insert_dev(target, t38, anchor);
      insert_dev(target, div3, anchor);
      append_dev(div3, h33);
      append_dev(h33, t39);
      append_dev(div3, t40);
      append_dev(div3, br18);
      append_dev(div3, t41);
      mount_component(button1, div3, null);
      append_dev(div3, t42);
      mount_component(button2, div3, null);
      append_dev(div3, t43);
      mount_component(button3, div3, null);
      append_dev(div3, t44);
      mount_component(button4, div3, null);
      insert_dev(target, t45, anchor);
      insert_dev(target, br19, anchor);
      insert_dev(target, t46, anchor);
      insert_dev(target, div4, anchor);
      append_dev(div4, h34);
      append_dev(h34, t47);
      append_dev(div4, t48);
      append_dev(div4, br20);
      append_dev(div4, t49);
      mount_component(button5, div4, null);
      append_dev(div4, t50);
      mount_component(button6, div4, null);
      append_dev(div4, t51);
      mount_component(button7, div4, null);
      append_dev(div4, t52);
      mount_component(button8, div4, null);
      append_dev(div4, t53);
      mount_component(button9, div4, null);
      append_dev(div4, t54);
      mount_component(button10, div4, null);
      insert_dev(target, t55, anchor);
      insert_dev(target, div5, anchor);
      append_dev(div5, h35);
      append_dev(h35, t56);
      append_dev(div5, t57);
      append_dev(div5, br21);
      append_dev(div5, t58);
      mount_component(button11, div5, null);
      insert_dev(target, t59, anchor);
      insert_dev(target, br22, anchor);
      insert_dev(target, t60, anchor);
      insert_dev(target, div6, anchor);
      append_dev(div6, h36);
      append_dev(h36, t61);
      append_dev(div6, t62);
      append_dev(div6, br23);
      append_dev(div6, t63);
      mount_component(button12, div6, null);
      append_dev(div6, t64);
      mount_component(button13, div6, null);
      append_dev(div6, t65);
      mount_component(button14, div6, null);
      append_dev(div6, t66);
      mount_component(button15, div6, null);
      append_dev(div6, t67);
      mount_component(button16, div6, null);
      append_dev(div6, t68);
      mount_component(button17, div6, null);
      insert_dev(target, t69, anchor);
      insert_dev(target, br24, anchor);
      insert_dev(target, t70, anchor);
      insert_dev(target, div7, anchor);
      append_dev(div7, h37);
      append_dev(h37, t71);
      append_dev(div7, t72);
      append_dev(div7, br25);
      append_dev(div7, t73);
      mount_component(button18, div7, null);
      append_dev(div7, t74);
      mount_component(button19, div7, null);
      append_dev(div7, t75);
      mount_component(button20, div7, null);
      append_dev(div7, t76);
      mount_component(button21, div7, null);
      insert_dev(target, t77, anchor);
      insert_dev(target, br26, anchor);
      insert_dev(target, t78, anchor);
      insert_dev(target, div8, anchor);
      append_dev(div8, h38);
      append_dev(h38, t79);
      append_dev(div8, t80);
      append_dev(div8, br27);
      append_dev(div8, t81);
      mount_component(button22, div8, null);
      append_dev(div8, t82);
      mount_component(button23, div8, null);
      append_dev(div8, t83);
      mount_component(button24, div8, null);
      append_dev(div8, t84);
      mount_component(button25, div8, null);
      append_dev(div8, t85);
      mount_component(button26, div8, null);
      append_dev(div8, t86);
      mount_component(button27, div8, null);
      insert_dev(target, t87, anchor);
      insert_dev(target, br28, anchor);
      insert_dev(target, t88, anchor);
      insert_dev(target, div9, anchor);
      append_dev(div9, h39);
      append_dev(h39, t89);
      append_dev(div9, t90);
      append_dev(div9, br29);
      append_dev(div9, t91);
      mount_component(button28, div9, null);
      append_dev(div9, t92);
      mount_component(button29, div9, null);
      insert_dev(target, t93, anchor);
      insert_dev(target, br30, anchor);
      insert_dev(target, t94, anchor);
      insert_dev(target, div10, anchor);
      append_dev(div10, h310);
      append_dev(h310, t95);
      append_dev(div10, t96);
      append_dev(div10, br31);
      append_dev(div10, t97);
      mount_component(button30, div10, null);
      append_dev(div10, t98);
      mount_component(button31, div10, null);
      append_dev(div10, t99);
      mount_component(button32, div10, null);
      append_dev(div10, t100);
      mount_component(button33, div10, null);
      append_dev(div10, t101);
      mount_component(button34, div10, null);
      append_dev(div10, t102);
      mount_component(button35, div10, null);
      insert_dev(target, t103, anchor);
      insert_dev(target, br32, anchor);
      insert_dev(target, t104, anchor);
      insert_dev(target, div11, anchor);
      append_dev(div11, h311);
      append_dev(h311, t105);
      append_dev(div11, t106);
      append_dev(div11, br33);
      append_dev(div11, t107);
      mount_component(buttongroup, div11, null);
      insert_dev(target, t108, anchor);
      insert_dev(target, br34, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray$1(_ref, 1),
          dirty = _ref2[0];

      var row0_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        row0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row0.$set(row0_changes);
      var row1_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        row1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row1.$set(row1_changes);
      var row2_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        row2_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row2.$set(row2_changes);
      var row3_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        row3_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row3.$set(row3_changes);
      var row4_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        row4_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row4.$set(row4_changes);
      var row5_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        row5_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row5.$set(row5_changes);
      var row6_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        row6_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row6.$set(row6_changes);
      var row7_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        row7_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row7.$set(row7_changes);
      var row8_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        row8_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row8.$set(row8_changes);
      var row9_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        row9_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row9.$set(row9_changes);
      var row10_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        row10_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row10.$set(row10_changes);
      var row11_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        row11_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row11.$set(row11_changes);
      var row12_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        row12_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row12.$set(row12_changes);
      var row13_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        row13_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      row13.$set(row13_changes);
      var button0_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button5_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button5_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button5.$set(button5_changes);
      var button6_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button6_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button6.$set(button6_changes);
      var button7_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button7_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button7.$set(button7_changes);
      var button8_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button8_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button8.$set(button8_changes);
      var button9_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button9_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button9.$set(button9_changes);
      var button10_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button10_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button10.$set(button10_changes);
      var button11_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button11_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button11.$set(button11_changes);
      var button12_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button12_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button12.$set(button12_changes);
      var button13_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button13_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button13.$set(button13_changes);
      var button14_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button14_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button14.$set(button14_changes);
      var button15_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button15_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button15.$set(button15_changes);
      var button16_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button16_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button16.$set(button16_changes);
      var button17_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button17_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button17.$set(button17_changes);
      var button18_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button18_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button18.$set(button18_changes);
      var button19_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button19_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button19.$set(button19_changes);
      var button20_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button20_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button20.$set(button20_changes);
      var button21_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button21_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button21.$set(button21_changes);
      var button22_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button22_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button22.$set(button22_changes);
      var button23_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button23_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button23.$set(button23_changes);
      var button24_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button24_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button24.$set(button24_changes);
      var button25_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button25_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button25.$set(button25_changes);
      var button26_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button26_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button26.$set(button26_changes);
      var button27_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button27_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button27.$set(button27_changes);
      var button28_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button28_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button28.$set(button28_changes);
      var button29_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button29_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button29.$set(button29_changes);
      var button30_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button30_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button30.$set(button30_changes);
      var button31_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button31_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button31.$set(button31_changes);
      var button32_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button32_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button32.$set(button32_changes);
      var button33_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button33_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button33.$set(button33_changes);
      var button34_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button34_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button34.$set(button34_changes);
      var button35_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        button35_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button35.$set(button35_changes);
      var buttongroup_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        buttongroup_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      buttongroup.$set(buttongroup_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(row0.$$.fragment, local);
      transition_in(row1.$$.fragment, local);
      transition_in(row2.$$.fragment, local);
      transition_in(row3.$$.fragment, local);
      transition_in(row4.$$.fragment, local);
      transition_in(row5.$$.fragment, local);
      transition_in(row6.$$.fragment, local);
      transition_in(row7.$$.fragment, local);
      transition_in(row8.$$.fragment, local);
      transition_in(row9.$$.fragment, local);
      transition_in(row10.$$.fragment, local);
      transition_in(row11.$$.fragment, local);
      transition_in(row12.$$.fragment, local);
      transition_in(row13.$$.fragment, local);
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      transition_in(button2.$$.fragment, local);
      transition_in(button3.$$.fragment, local);
      transition_in(button4.$$.fragment, local);
      transition_in(button5.$$.fragment, local);
      transition_in(button6.$$.fragment, local);
      transition_in(button7.$$.fragment, local);
      transition_in(button8.$$.fragment, local);
      transition_in(button9.$$.fragment, local);
      transition_in(button10.$$.fragment, local);
      transition_in(button11.$$.fragment, local);
      transition_in(button12.$$.fragment, local);
      transition_in(button13.$$.fragment, local);
      transition_in(button14.$$.fragment, local);
      transition_in(button15.$$.fragment, local);
      transition_in(button16.$$.fragment, local);
      transition_in(button17.$$.fragment, local);
      transition_in(button18.$$.fragment, local);
      transition_in(button19.$$.fragment, local);
      transition_in(button20.$$.fragment, local);
      transition_in(button21.$$.fragment, local);
      transition_in(button22.$$.fragment, local);
      transition_in(button23.$$.fragment, local);
      transition_in(button24.$$.fragment, local);
      transition_in(button25.$$.fragment, local);
      transition_in(button26.$$.fragment, local);
      transition_in(button27.$$.fragment, local);
      transition_in(button28.$$.fragment, local);
      transition_in(button29.$$.fragment, local);
      transition_in(button30.$$.fragment, local);
      transition_in(button31.$$.fragment, local);
      transition_in(button32.$$.fragment, local);
      transition_in(button33.$$.fragment, local);
      transition_in(button34.$$.fragment, local);
      transition_in(button35.$$.fragment, local);
      transition_in(buttongroup.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(row0.$$.fragment, local);
      transition_out(row1.$$.fragment, local);
      transition_out(row2.$$.fragment, local);
      transition_out(row3.$$.fragment, local);
      transition_out(row4.$$.fragment, local);
      transition_out(row5.$$.fragment, local);
      transition_out(row6.$$.fragment, local);
      transition_out(row7.$$.fragment, local);
      transition_out(row8.$$.fragment, local);
      transition_out(row9.$$.fragment, local);
      transition_out(row10.$$.fragment, local);
      transition_out(row11.$$.fragment, local);
      transition_out(row12.$$.fragment, local);
      transition_out(row13.$$.fragment, local);
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      transition_out(button2.$$.fragment, local);
      transition_out(button3.$$.fragment, local);
      transition_out(button4.$$.fragment, local);
      transition_out(button5.$$.fragment, local);
      transition_out(button6.$$.fragment, local);
      transition_out(button7.$$.fragment, local);
      transition_out(button8.$$.fragment, local);
      transition_out(button9.$$.fragment, local);
      transition_out(button10.$$.fragment, local);
      transition_out(button11.$$.fragment, local);
      transition_out(button12.$$.fragment, local);
      transition_out(button13.$$.fragment, local);
      transition_out(button14.$$.fragment, local);
      transition_out(button15.$$.fragment, local);
      transition_out(button16.$$.fragment, local);
      transition_out(button17.$$.fragment, local);
      transition_out(button18.$$.fragment, local);
      transition_out(button19.$$.fragment, local);
      transition_out(button20.$$.fragment, local);
      transition_out(button21.$$.fragment, local);
      transition_out(button22.$$.fragment, local);
      transition_out(button23.$$.fragment, local);
      transition_out(button24.$$.fragment, local);
      transition_out(button25.$$.fragment, local);
      transition_out(button26.$$.fragment, local);
      transition_out(button27.$$.fragment, local);
      transition_out(button28.$$.fragment, local);
      transition_out(button29.$$.fragment, local);
      transition_out(button30.$$.fragment, local);
      transition_out(button31.$$.fragment, local);
      transition_out(button32.$$.fragment, local);
      transition_out(button33.$$.fragment, local);
      transition_out(button34.$$.fragment, local);
      transition_out(button35.$$.fragment, local);
      transition_out(buttongroup.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div0);
      destroy_component(row0);
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(br1);
      if (detaching) detach_dev(t4);
      if (detaching) detach_dev(div1);
      destroy_component(row1);
      destroy_component(row2);
      destroy_component(row3);
      destroy_component(row4);
      destroy_component(row5);
      destroy_component(row6);
      destroy_component(row7);
      destroy_component(row8);
      destroy_component(row9);
      destroy_component(row10);
      destroy_component(row11);
      destroy_component(row12);
      destroy_component(row13);
      if (detaching) detach_dev(t32);
      if (detaching) detach_dev(br15);
      if (detaching) detach_dev(t33);
      if (detaching) detach_dev(div2);
      destroy_component(button0);
      if (detaching) detach_dev(t37);
      if (detaching) detach_dev(br17);
      if (detaching) detach_dev(t38);
      if (detaching) detach_dev(div3);
      destroy_component(button1);
      destroy_component(button2);
      destroy_component(button3);
      destroy_component(button4);
      if (detaching) detach_dev(t45);
      if (detaching) detach_dev(br19);
      if (detaching) detach_dev(t46);
      if (detaching) detach_dev(div4);
      destroy_component(button5);
      destroy_component(button6);
      destroy_component(button7);
      destroy_component(button8);
      destroy_component(button9);
      destroy_component(button10);
      if (detaching) detach_dev(t55);
      if (detaching) detach_dev(div5);
      destroy_component(button11);
      if (detaching) detach_dev(t59);
      if (detaching) detach_dev(br22);
      if (detaching) detach_dev(t60);
      if (detaching) detach_dev(div6);
      destroy_component(button12);
      destroy_component(button13);
      destroy_component(button14);
      destroy_component(button15);
      destroy_component(button16);
      destroy_component(button17);
      if (detaching) detach_dev(t69);
      if (detaching) detach_dev(br24);
      if (detaching) detach_dev(t70);
      if (detaching) detach_dev(div7);
      destroy_component(button18);
      destroy_component(button19);
      destroy_component(button20);
      destroy_component(button21);
      if (detaching) detach_dev(t77);
      if (detaching) detach_dev(br26);
      if (detaching) detach_dev(t78);
      if (detaching) detach_dev(div8);
      destroy_component(button22);
      destroy_component(button23);
      destroy_component(button24);
      destroy_component(button25);
      destroy_component(button26);
      destroy_component(button27);
      if (detaching) detach_dev(t87);
      if (detaching) detach_dev(br28);
      if (detaching) detach_dev(t88);
      if (detaching) detach_dev(div9);
      destroy_component(button28);
      destroy_component(button29);
      if (detaching) detach_dev(t93);
      if (detaching) detach_dev(br30);
      if (detaching) detach_dev(t94);
      if (detaching) detach_dev(div10);
      destroy_component(button30);
      destroy_component(button31);
      destroy_component(button32);
      destroy_component(button33);
      destroy_component(button34);
      destroy_component(button35);
      if (detaching) detach_dev(t103);
      if (detaching) detach_dev(br32);
      if (detaching) detach_dev(t104);
      if (detaching) detach_dev(div11);
      destroy_component(buttongroup);
      if (detaching) detach_dev(t108);
      if (detaching) detach_dev(br34);
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
  validate_slots("Demo", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Demo> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      Button: Button,
      ButtonGroup: ButtonGroup,
      Row: Row,
      Col: Col
    };
  };

  return [];
}

var Demo = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits$1(Demo, _SvelteComponentDev);

  var _super = _createSuper(Demo);

  function Demo(options) {
    var _this;

    _classCallCheck$1(this, Demo);

    _this = _super.call(this, options);
    init(_assertThisInitialized$1(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized$1(_this),
      tagName: "Demo",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Demo;
}(SvelteComponentDev);

export default Demo;
