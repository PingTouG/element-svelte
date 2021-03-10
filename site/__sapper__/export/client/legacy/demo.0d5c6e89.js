import { T as _inherits, U as _getPrototypeOf, V as _possibleConstructorReturn, W as _classCallCheck, i as init, s as safe_not_equal, X as _assertThisInitialized, e as dispatch_dev, Y as _createClass, S as SvelteComponentDev, G as create_slot, C as validate_slots, Z as Icon, h as element, k as claim_element, l as children, o as detach_dev, p as attr_dev, q as add_location, r as insert_dev, $ as create_component, a0 as claim_component, a1 as mount_component, N as transition_in, O as transition_out, a2 as destroy_component, j as space, m as claim_space, u as append_dev, y as listen_dev, a3 as _slicedToArray, a4 as group_outros, a5 as check_outros, M as update_slot, a6 as prop_dev, a7 as bubble, _ as _inherits$1, a as _getPrototypeOf$1, b as _possibleConstructorReturn$1, c as _classCallCheck$1, d as _assertThisInitialized$1, t as text, n as claim_text, z as _slicedToArray$1 } from './client.829d994e.js';

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "..\\packages\\Button\\index.svelte"; // (27:1) {#if loading}

function create_if_block_1(ctx) {
  var span;
  var block_1 = {
    c: function create() {
      span = element("span");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        "loading-icon": true,
        class: true
      });
      children(span).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "loading-icon", "");
      attr_dev(span, "class", "svelte-aegfd0");
      add_location(span, file$1, 27, 2, 522);
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
    source: "(27:1) {#if loading}",
    ctx: ctx
  });
  return block_1;
} // (30:1) {#if icon}


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
    source: "(30:1) {#if icon}",
    ctx: ctx
  });
  return block_1;
}

function create_fragment$1(ctx) {
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
  ctx[11].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[10], null);
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
        "es-block": true,
        "es-circle": true,
        "es-loading": true,
        "es-plain": true,
        "es-round": true,
        "es-size": true,
        "es-type": true,
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
      attr_dev(button, "class", "es-button svelte-aegfd0");
      attr_dev(button, "es-block",
      /*block*/
      ctx[0]);
      attr_dev(button, "es-circle",
      /*circle*/
      ctx[1]);
      attr_dev(button, "es-loading",
      /*loading*/
      ctx[4]);
      attr_dev(button, "es-plain",
      /*plain*/
      ctx[6]);
      attr_dev(button, "es-round",
      /*round*/
      ctx[7]);
      attr_dev(button, "es-size",
      /*size*/
      ctx[8]);
      attr_dev(button, "es-type",
      /*type*/
      ctx[9]);
      button.disabled =
      /*disabled*/
      ctx[2];
      attr_dev(button, "type",
      /*nativeType*/
      ctx[5]);
      add_location(button, file$1, 13, 0, 280);
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
        ctx[12], false, false, false);
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
        1024) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[10], dirty, null, null);
        }
      }

      if (!current || dirty &
      /*block*/
      1) {
        attr_dev(button, "es-block",
        /*block*/
        ctx[0]);
      }

      if (!current || dirty &
      /*circle*/
      2) {
        attr_dev(button, "es-circle",
        /*circle*/
        ctx[1]);
      }

      if (!current || dirty &
      /*loading*/
      16) {
        attr_dev(button, "es-loading",
        /*loading*/
        ctx[4]);
      }

      if (!current || dirty &
      /*plain*/
      64) {
        attr_dev(button, "es-plain",
        /*plain*/
        ctx[6]);
      }

      if (!current || dirty &
      /*round*/
      128) {
        attr_dev(button, "es-round",
        /*round*/
        ctx[7]);
      }

      if (!current || dirty &
      /*size*/
      256) {
        attr_dev(button, "es-size",
        /*size*/
        ctx[8]);
      }

      if (!current || dirty &
      /*type*/
      512) {
        attr_dev(button, "es-type",
        /*type*/
        ctx[9]);
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
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block_1;
}

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Button", slots, ['default']);
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
  var writable_props = ["block", "circle", "disabled", "icon", "loading", "nativeType", "plain", "round", "size", "type"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Button> was created with unknown prop '".concat(key, "'"));
  });

  function click_handler(event) {
    bubble($$self, event);
  }

  $$self.$$set = function ($$props) {
    if ("block" in $$props) $$invalidate(0, block = $$props.block);
    if ("circle" in $$props) $$invalidate(1, circle = $$props.circle);
    if ("disabled" in $$props) $$invalidate(2, disabled = $$props.disabled);
    if ("icon" in $$props) $$invalidate(3, icon = $$props.icon);
    if ("loading" in $$props) $$invalidate(4, loading = $$props.loading);
    if ("nativeType" in $$props) $$invalidate(5, nativeType = $$props.nativeType);
    if ("plain" in $$props) $$invalidate(6, plain = $$props.plain);
    if ("round" in $$props) $$invalidate(7, round = $$props.round);
    if ("size" in $$props) $$invalidate(8, size = $$props.size);
    if ("type" in $$props) $$invalidate(9, type = $$props.type);
    if ("$$scope" in $$props) $$invalidate(10, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      Icon: Icon,
      block: block,
      circle: circle,
      disabled: disabled,
      icon: icon,
      loading: loading,
      nativeType: nativeType,
      plain: plain,
      round: round,
      size: size,
      type: type
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("block" in $$props) $$invalidate(0, block = $$props.block);
    if ("circle" in $$props) $$invalidate(1, circle = $$props.circle);
    if ("disabled" in $$props) $$invalidate(2, disabled = $$props.disabled);
    if ("icon" in $$props) $$invalidate(3, icon = $$props.icon);
    if ("loading" in $$props) $$invalidate(4, loading = $$props.loading);
    if ("nativeType" in $$props) $$invalidate(5, nativeType = $$props.nativeType);
    if ("plain" in $$props) $$invalidate(6, plain = $$props.plain);
    if ("round" in $$props) $$invalidate(7, round = $$props.round);
    if ("size" in $$props) $$invalidate(8, size = $$props.size);
    if ("type" in $$props) $$invalidate(9, type = $$props.type);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [block, circle, disabled, icon, loading, nativeType, plain, round, size, type, $$scope, slots, click_handler];
}

var Button = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Button, _SvelteComponentDev);

  var _super = _createSuper$1(Button);

  function Button(options) {
    var _this;

    _classCallCheck(this, Button);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      block: 0,
      circle: 1,
      disabled: 2,
      icon: 3,
      loading: 4,
      nativeType: 5,
      plain: 6,
      round: 7,
      size: 8,
      type: 9
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Button",
      options: options,
      id: create_fragment$1.name
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
    ctx[8] === undefined && !("size" in props)) {
      console.warn("<Button> was created without expected prop 'size'");
    }

    if (
    /*type*/
    ctx[9] === undefined && !("type" in props)) {
      console.warn("<Button> was created without expected prop 'type'");
    }

    return _this;
  }

  _createClass(Button, [{
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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\demo.svelte"; // (7:1) <Button block>

function create_default_slot_25(ctx) {
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
    id: create_default_slot_25.name,
    type: "slot",
    source: "(7:1) <Button block>",
    ctx: ctx
  });
  return block;
} // (22:1) <Button disabled>


function create_default_slot_24(ctx) {
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
    id: create_default_slot_24.name,
    type: "slot",
    source: "(22:1) <Button disabled>",
    ctx: ctx
  });
  return block;
} // (23:1) <Button disabled type="primary">


function create_default_slot_23(ctx) {
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
    id: create_default_slot_23.name,
    type: "slot",
    source: "(23:1) <Button disabled type=\\\"primary\\\">",
    ctx: ctx
  });
  return block;
} // (24:1) <Button disabled type="success">


function create_default_slot_22(ctx) {
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
    id: create_default_slot_22.name,
    type: "slot",
    source: "(24:1) <Button disabled type=\\\"success\\\">",
    ctx: ctx
  });
  return block;
} // (25:1) <Button disabled type="error">


function create_default_slot_21(ctx) {
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
    id: create_default_slot_21.name,
    type: "slot",
    source: "(25:1) <Button disabled type=\\\"error\\\">",
    ctx: ctx
  });
  return block;
} // (26:1) <Button disabled type="warning">


function create_default_slot_20(ctx) {
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
    id: create_default_slot_20.name,
    type: "slot",
    source: "(26:1) <Button disabled type=\\\"warning\\\">",
    ctx: ctx
  });
  return block;
} // (27:1) <Button disabled type="info">


function create_default_slot_19(ctx) {
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
    id: create_default_slot_19.name,
    type: "slot",
    source: "(27:1) <Button disabled type=\\\"info\\\">",
    ctx: ctx
  });
  return block;
} // (32:1) <Button loading>


function create_default_slot_18(ctx) {
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
    id: create_default_slot_18.name,
    type: "slot",
    source: "(32:1) <Button loading>",
    ctx: ctx
  });
  return block;
} // (38:1) <Button plain>


function create_default_slot_17(ctx) {
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
    id: create_default_slot_17.name,
    type: "slot",
    source: "(38:1) <Button plain>",
    ctx: ctx
  });
  return block;
} // (39:1) <Button plain type="primary">


function create_default_slot_16(ctx) {
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
    id: create_default_slot_16.name,
    type: "slot",
    source: "(39:1) <Button plain type=\\\"primary\\\">",
    ctx: ctx
  });
  return block;
} // (40:1) <Button plain type="success">


function create_default_slot_15(ctx) {
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
    id: create_default_slot_15.name,
    type: "slot",
    source: "(40:1) <Button plain type=\\\"success\\\">",
    ctx: ctx
  });
  return block;
} // (41:1) <Button plain type="error">


function create_default_slot_14(ctx) {
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
    id: create_default_slot_14.name,
    type: "slot",
    source: "(41:1) <Button plain type=\\\"error\\\">",
    ctx: ctx
  });
  return block;
} // (42:1) <Button plain type="warning">


function create_default_slot_13(ctx) {
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
    id: create_default_slot_13.name,
    type: "slot",
    source: "(42:1) <Button plain type=\\\"warning\\\">",
    ctx: ctx
  });
  return block;
} // (43:1) <Button plain type="info">


function create_default_slot_12(ctx) {
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
    id: create_default_slot_12.name,
    type: "slot",
    source: "(43:1) <Button plain type=\\\"info\\\">",
    ctx: ctx
  });
  return block;
} // (49:1) <Button size="mini">


function create_default_slot_11(ctx) {
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
    id: create_default_slot_11.name,
    type: "slot",
    source: "(49:1) <Button size=\\\"mini\\\">",
    ctx: ctx
  });
  return block;
} // (50:1) <Button>


function create_default_slot_10(ctx) {
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
    id: create_default_slot_10.name,
    type: "slot",
    source: "(50:1) <Button>",
    ctx: ctx
  });
  return block;
} // (51:1) <Button size="medium">


function create_default_slot_9(ctx) {
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
    id: create_default_slot_9.name,
    type: "slot",
    source: "(51:1) <Button size=\\\"medium\\\">",
    ctx: ctx
  });
  return block;
} // (52:1) <Button size="large">


function create_default_slot_8(ctx) {
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
    id: create_default_slot_8.name,
    type: "slot",
    source: "(52:1) <Button size=\\\"large\\\">",
    ctx: ctx
  });
  return block;
} // (58:1) <Button>


function create_default_slot_7(ctx) {
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
    id: create_default_slot_7.name,
    type: "slot",
    source: "(58:1) <Button>",
    ctx: ctx
  });
  return block;
} // (59:1) <Button type="primary">


function create_default_slot_6(ctx) {
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
    id: create_default_slot_6.name,
    type: "slot",
    source: "(59:1) <Button type=\\\"primary\\\">",
    ctx: ctx
  });
  return block;
} // (60:1) <Button type="success">


function create_default_slot_5(ctx) {
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
    id: create_default_slot_5.name,
    type: "slot",
    source: "(60:1) <Button type=\\\"success\\\">",
    ctx: ctx
  });
  return block;
} // (61:1) <Button type="error">


function create_default_slot_4(ctx) {
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
    id: create_default_slot_4.name,
    type: "slot",
    source: "(61:1) <Button type=\\\"error\\\">",
    ctx: ctx
  });
  return block;
} // (62:1) <Button type="warning">


function create_default_slot_3(ctx) {
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
    id: create_default_slot_3.name,
    type: "slot",
    source: "(62:1) <Button type=\\\"warning\\\">",
    ctx: ctx
  });
  return block;
} // (63:1) <Button type="info">


function create_default_slot_2(ctx) {
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
    id: create_default_slot_2.name,
    type: "slot",
    source: "(63:1) <Button type=\\\"info\\\">",
    ctx: ctx
  });
  return block;
} // (69:1) <Button type="text">


function create_default_slot_1(ctx) {
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
    id: create_default_slot_1.name,
    type: "slot",
    source: "(69:1) <Button type=\\\"text\\\">",
    ctx: ctx
  });
  return block;
} // (70:1) <Button type="text" disabled>


function create_default_slot(ctx) {
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
    id: create_default_slot.name,
    type: "slot",
    source: "(70:1) <Button type=\\\"text\\\" disabled>",
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
  var button0;
  var t3;
  var br1;
  var t4;
  var div1;
  var h31;
  var t5;
  var t6;
  var br2;
  var t7;
  var button1;
  var t8;
  var button2;
  var t9;
  var button3;
  var t10;
  var button4;
  var t11;
  var br3;
  var t12;
  var div2;
  var h32;
  var t13;
  var t14;
  var br4;
  var t15;
  var button5;
  var t16;
  var button6;
  var t17;
  var button7;
  var t18;
  var button8;
  var t19;
  var button9;
  var t20;
  var button10;
  var t21;
  var div3;
  var h33;
  var t22;
  var t23;
  var br5;
  var t24;
  var button11;
  var t25;
  var br6;
  var t26;
  var div4;
  var h34;
  var t27;
  var t28;
  var br7;
  var t29;
  var button12;
  var t30;
  var button13;
  var t31;
  var button14;
  var t32;
  var button15;
  var t33;
  var button16;
  var t34;
  var button17;
  var t35;
  var br8;
  var t36;
  var div5;
  var h35;
  var t37;
  var t38;
  var br9;
  var t39;
  var button18;
  var t40;
  var button19;
  var t41;
  var button20;
  var t42;
  var button21;
  var t43;
  var br10;
  var t44;
  var div6;
  var h36;
  var t45;
  var t46;
  var br11;
  var t47;
  var button22;
  var t48;
  var button23;
  var t49;
  var button24;
  var t50;
  var button25;
  var t51;
  var button26;
  var t52;
  var button27;
  var t53;
  var br12;
  var t54;
  var div7;
  var h37;
  var t55;
  var t56;
  var br13;
  var t57;
  var button28;
  var t58;
  var button29;
  var current;
  button0 = new Button({
    props: {
      block: true,
      $$slots: {
        default: [create_default_slot_25]
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
        default: [create_default_slot_24]
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
        default: [create_default_slot_23]
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
        default: [create_default_slot_22]
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
        default: [create_default_slot_21]
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
        default: [create_default_slot_20]
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
        default: [create_default_slot_19]
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
        default: [create_default_slot_18]
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
        default: [create_default_slot_17]
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
        default: [create_default_slot_16]
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
        default: [create_default_slot_15]
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
        default: [create_default_slot_14]
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
        default: [create_default_slot_13]
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
        default: [create_default_slot_12]
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
      $$slots: {
        default: [create_default_slot_11]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button19 = new Button({
    props: {
      $$slots: {
        default: [create_default_slot_10]
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
      $$slots: {
        default: [create_default_slot_9]
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
      $$slots: {
        default: [create_default_slot_8]
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
        default: [create_default_slot_7]
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
        default: [create_default_slot_6]
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
        default: [create_default_slot_5]
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
        default: [create_default_slot_4]
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
        default: [create_default_slot_3]
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
        default: [create_default_slot_2]
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
        default: [create_default_slot_1]
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
      t0 = text("块级按钮");
      t1 = space();
      br0 = element("br");
      t2 = space();
      create_component(button0.$$.fragment);
      t3 = space();
      br1 = element("br");
      t4 = space();
      div1 = element("div");
      h31 = element("h3");
      t5 = text("圆形按钮");
      t6 = space();
      br2 = element("br");
      t7 = space();
      create_component(button1.$$.fragment);
      t8 = space();
      create_component(button2.$$.fragment);
      t9 = space();
      create_component(button3.$$.fragment);
      t10 = space();
      create_component(button4.$$.fragment);
      t11 = space();
      br3 = element("br");
      t12 = space();
      div2 = element("div");
      h32 = element("h3");
      t13 = text("禁用按钮");
      t14 = space();
      br4 = element("br");
      t15 = space();
      create_component(button5.$$.fragment);
      t16 = space();
      create_component(button6.$$.fragment);
      t17 = space();
      create_component(button7.$$.fragment);
      t18 = space();
      create_component(button8.$$.fragment);
      t19 = space();
      create_component(button9.$$.fragment);
      t20 = space();
      create_component(button10.$$.fragment);
      t21 = space();
      div3 = element("div");
      h33 = element("h3");
      t22 = text("loading按钮");
      t23 = space();
      br5 = element("br");
      t24 = space();
      create_component(button11.$$.fragment);
      t25 = space();
      br6 = element("br");
      t26 = space();
      div4 = element("div");
      h34 = element("h3");
      t27 = text("朴素按钮");
      t28 = space();
      br7 = element("br");
      t29 = space();
      create_component(button12.$$.fragment);
      t30 = space();
      create_component(button13.$$.fragment);
      t31 = space();
      create_component(button14.$$.fragment);
      t32 = space();
      create_component(button15.$$.fragment);
      t33 = space();
      create_component(button16.$$.fragment);
      t34 = space();
      create_component(button17.$$.fragment);
      t35 = space();
      br8 = element("br");
      t36 = space();
      div5 = element("div");
      h35 = element("h3");
      t37 = text("按钮大小");
      t38 = space();
      br9 = element("br");
      t39 = space();
      create_component(button18.$$.fragment);
      t40 = space();
      create_component(button19.$$.fragment);
      t41 = space();
      create_component(button20.$$.fragment);
      t42 = space();
      create_component(button21.$$.fragment);
      t43 = space();
      br10 = element("br");
      t44 = space();
      div6 = element("div");
      h36 = element("h3");
      t45 = text("按钮类型");
      t46 = space();
      br11 = element("br");
      t47 = space();
      create_component(button22.$$.fragment);
      t48 = space();
      create_component(button23.$$.fragment);
      t49 = space();
      create_component(button24.$$.fragment);
      t50 = space();
      create_component(button25.$$.fragment);
      t51 = space();
      create_component(button26.$$.fragment);
      t52 = space();
      create_component(button27.$$.fragment);
      t53 = space();
      br12 = element("br");
      t54 = space();
      div7 = element("div");
      h37 = element("h3");
      t55 = text("文字按钮");
      t56 = space();
      br13 = element("br");
      t57 = space();
      create_component(button28.$$.fragment);
      t58 = space();
      create_component(button29.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div0 = claim_element(nodes, "DIV", {});
      var div0_nodes = children(div0);
      h30 = claim_element(div0_nodes, "H3", {});
      var h30_nodes = children(h30);
      t0 = claim_text(h30_nodes, "块级按钮");
      h30_nodes.forEach(detach_dev);
      t1 = claim_space(div0_nodes);
      br0 = claim_element(div0_nodes, "BR", {});
      t2 = claim_space(div0_nodes);
      claim_component(button0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(nodes);
      br1 = claim_element(nodes, "BR", {});
      t4 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {});
      var div1_nodes = children(div1);
      h31 = claim_element(div1_nodes, "H3", {});
      var h31_nodes = children(h31);
      t5 = claim_text(h31_nodes, "圆形按钮");
      h31_nodes.forEach(detach_dev);
      t6 = claim_space(div1_nodes);
      br2 = claim_element(div1_nodes, "BR", {});
      t7 = claim_space(div1_nodes);
      claim_component(button1.$$.fragment, div1_nodes);
      t8 = claim_space(div1_nodes);
      claim_component(button2.$$.fragment, div1_nodes);
      t9 = claim_space(div1_nodes);
      claim_component(button3.$$.fragment, div1_nodes);
      t10 = claim_space(div1_nodes);
      claim_component(button4.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      t11 = claim_space(nodes);
      br3 = claim_element(nodes, "BR", {});
      t12 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", {});
      var div2_nodes = children(div2);
      h32 = claim_element(div2_nodes, "H3", {});
      var h32_nodes = children(h32);
      t13 = claim_text(h32_nodes, "禁用按钮");
      h32_nodes.forEach(detach_dev);
      t14 = claim_space(div2_nodes);
      br4 = claim_element(div2_nodes, "BR", {});
      t15 = claim_space(div2_nodes);
      claim_component(button5.$$.fragment, div2_nodes);
      t16 = claim_space(div2_nodes);
      claim_component(button6.$$.fragment, div2_nodes);
      t17 = claim_space(div2_nodes);
      claim_component(button7.$$.fragment, div2_nodes);
      t18 = claim_space(div2_nodes);
      claim_component(button8.$$.fragment, div2_nodes);
      t19 = claim_space(div2_nodes);
      claim_component(button9.$$.fragment, div2_nodes);
      t20 = claim_space(div2_nodes);
      claim_component(button10.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      t21 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", {});
      var div3_nodes = children(div3);
      h33 = claim_element(div3_nodes, "H3", {});
      var h33_nodes = children(h33);
      t22 = claim_text(h33_nodes, "loading按钮");
      h33_nodes.forEach(detach_dev);
      t23 = claim_space(div3_nodes);
      br5 = claim_element(div3_nodes, "BR", {});
      t24 = claim_space(div3_nodes);
      claim_component(button11.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach_dev);
      t25 = claim_space(nodes);
      br6 = claim_element(nodes, "BR", {});
      t26 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", {});
      var div4_nodes = children(div4);
      h34 = claim_element(div4_nodes, "H3", {});
      var h34_nodes = children(h34);
      t27 = claim_text(h34_nodes, "朴素按钮");
      h34_nodes.forEach(detach_dev);
      t28 = claim_space(div4_nodes);
      br7 = claim_element(div4_nodes, "BR", {});
      t29 = claim_space(div4_nodes);
      claim_component(button12.$$.fragment, div4_nodes);
      t30 = claim_space(div4_nodes);
      claim_component(button13.$$.fragment, div4_nodes);
      t31 = claim_space(div4_nodes);
      claim_component(button14.$$.fragment, div4_nodes);
      t32 = claim_space(div4_nodes);
      claim_component(button15.$$.fragment, div4_nodes);
      t33 = claim_space(div4_nodes);
      claim_component(button16.$$.fragment, div4_nodes);
      t34 = claim_space(div4_nodes);
      claim_component(button17.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach_dev);
      t35 = claim_space(nodes);
      br8 = claim_element(nodes, "BR", {});
      t36 = claim_space(nodes);
      div5 = claim_element(nodes, "DIV", {});
      var div5_nodes = children(div5);
      h35 = claim_element(div5_nodes, "H3", {});
      var h35_nodes = children(h35);
      t37 = claim_text(h35_nodes, "按钮大小");
      h35_nodes.forEach(detach_dev);
      t38 = claim_space(div5_nodes);
      br9 = claim_element(div5_nodes, "BR", {});
      t39 = claim_space(div5_nodes);
      claim_component(button18.$$.fragment, div5_nodes);
      t40 = claim_space(div5_nodes);
      claim_component(button19.$$.fragment, div5_nodes);
      t41 = claim_space(div5_nodes);
      claim_component(button20.$$.fragment, div5_nodes);
      t42 = claim_space(div5_nodes);
      claim_component(button21.$$.fragment, div5_nodes);
      div5_nodes.forEach(detach_dev);
      t43 = claim_space(nodes);
      br10 = claim_element(nodes, "BR", {});
      t44 = claim_space(nodes);
      div6 = claim_element(nodes, "DIV", {});
      var div6_nodes = children(div6);
      h36 = claim_element(div6_nodes, "H3", {});
      var h36_nodes = children(h36);
      t45 = claim_text(h36_nodes, "按钮类型");
      h36_nodes.forEach(detach_dev);
      t46 = claim_space(div6_nodes);
      br11 = claim_element(div6_nodes, "BR", {});
      t47 = claim_space(div6_nodes);
      claim_component(button22.$$.fragment, div6_nodes);
      t48 = claim_space(div6_nodes);
      claim_component(button23.$$.fragment, div6_nodes);
      t49 = claim_space(div6_nodes);
      claim_component(button24.$$.fragment, div6_nodes);
      t50 = claim_space(div6_nodes);
      claim_component(button25.$$.fragment, div6_nodes);
      t51 = claim_space(div6_nodes);
      claim_component(button26.$$.fragment, div6_nodes);
      t52 = claim_space(div6_nodes);
      claim_component(button27.$$.fragment, div6_nodes);
      div6_nodes.forEach(detach_dev);
      t53 = claim_space(nodes);
      br12 = claim_element(nodes, "BR", {});
      t54 = claim_space(nodes);
      div7 = claim_element(nodes, "DIV", {});
      var div7_nodes = children(div7);
      h37 = claim_element(div7_nodes, "H3", {});
      var h37_nodes = children(h37);
      t55 = claim_text(h37_nodes, "文字按钮");
      h37_nodes.forEach(detach_dev);
      t56 = claim_space(div7_nodes);
      br13 = claim_element(div7_nodes, "BR", {});
      t57 = claim_space(div7_nodes);
      claim_component(button28.$$.fragment, div7_nodes);
      t58 = claim_space(div7_nodes);
      claim_component(button29.$$.fragment, div7_nodes);
      div7_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(h30, file, 4, 1, 86);
      add_location(br0, file, 5, 1, 101);
      add_location(div0, file, 3, 0, 79);
      add_location(br1, file, 8, 0, 144);
      add_location(h31, file, 10, 1, 158);
      add_location(br2, file, 11, 1, 173);
      add_location(div1, file, 9, 0, 151);
      add_location(br3, file, 17, 0, 358);
      add_location(h32, file, 19, 1, 372);
      add_location(br4, file, 20, 1, 387);
      add_location(div2, file, 18, 0, 365);
      add_location(h33, file, 29, 1, 670);
      add_location(br5, file, 30, 1, 690);
      add_location(div3, file, 28, 0, 663);
      add_location(br6, file, 33, 0, 735);
      add_location(h34, file, 35, 1, 749);
      add_location(br7, file, 36, 1, 764);
      add_location(div4, file, 34, 0, 742);
      add_location(br8, file, 44, 0, 1022);
      add_location(h35, file, 46, 1, 1036);
      add_location(br9, file, 47, 1, 1051);
      add_location(div5, file, 45, 0, 1029);
      add_location(br10, file, 53, 0, 1196);
      add_location(h36, file, 55, 1, 1210);
      add_location(br11, file, 56, 1, 1225);
      add_location(div6, file, 54, 0, 1203);
      add_location(br12, file, 64, 0, 1447);
      add_location(h37, file, 66, 1, 1461);
      add_location(br13, file, 67, 1, 1476);
      add_location(div7, file, 65, 0, 1454);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div0, anchor);
      append_dev(div0, h30);
      append_dev(h30, t0);
      append_dev(div0, t1);
      append_dev(div0, br0);
      append_dev(div0, t2);
      mount_component(button0, div0, null);
      insert_dev(target, t3, anchor);
      insert_dev(target, br1, anchor);
      insert_dev(target, t4, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, h31);
      append_dev(h31, t5);
      append_dev(div1, t6);
      append_dev(div1, br2);
      append_dev(div1, t7);
      mount_component(button1, div1, null);
      append_dev(div1, t8);
      mount_component(button2, div1, null);
      append_dev(div1, t9);
      mount_component(button3, div1, null);
      append_dev(div1, t10);
      mount_component(button4, div1, null);
      insert_dev(target, t11, anchor);
      insert_dev(target, br3, anchor);
      insert_dev(target, t12, anchor);
      insert_dev(target, div2, anchor);
      append_dev(div2, h32);
      append_dev(h32, t13);
      append_dev(div2, t14);
      append_dev(div2, br4);
      append_dev(div2, t15);
      mount_component(button5, div2, null);
      append_dev(div2, t16);
      mount_component(button6, div2, null);
      append_dev(div2, t17);
      mount_component(button7, div2, null);
      append_dev(div2, t18);
      mount_component(button8, div2, null);
      append_dev(div2, t19);
      mount_component(button9, div2, null);
      append_dev(div2, t20);
      mount_component(button10, div2, null);
      insert_dev(target, t21, anchor);
      insert_dev(target, div3, anchor);
      append_dev(div3, h33);
      append_dev(h33, t22);
      append_dev(div3, t23);
      append_dev(div3, br5);
      append_dev(div3, t24);
      mount_component(button11, div3, null);
      insert_dev(target, t25, anchor);
      insert_dev(target, br6, anchor);
      insert_dev(target, t26, anchor);
      insert_dev(target, div4, anchor);
      append_dev(div4, h34);
      append_dev(h34, t27);
      append_dev(div4, t28);
      append_dev(div4, br7);
      append_dev(div4, t29);
      mount_component(button12, div4, null);
      append_dev(div4, t30);
      mount_component(button13, div4, null);
      append_dev(div4, t31);
      mount_component(button14, div4, null);
      append_dev(div4, t32);
      mount_component(button15, div4, null);
      append_dev(div4, t33);
      mount_component(button16, div4, null);
      append_dev(div4, t34);
      mount_component(button17, div4, null);
      insert_dev(target, t35, anchor);
      insert_dev(target, br8, anchor);
      insert_dev(target, t36, anchor);
      insert_dev(target, div5, anchor);
      append_dev(div5, h35);
      append_dev(h35, t37);
      append_dev(div5, t38);
      append_dev(div5, br9);
      append_dev(div5, t39);
      mount_component(button18, div5, null);
      append_dev(div5, t40);
      mount_component(button19, div5, null);
      append_dev(div5, t41);
      mount_component(button20, div5, null);
      append_dev(div5, t42);
      mount_component(button21, div5, null);
      insert_dev(target, t43, anchor);
      insert_dev(target, br10, anchor);
      insert_dev(target, t44, anchor);
      insert_dev(target, div6, anchor);
      append_dev(div6, h36);
      append_dev(h36, t45);
      append_dev(div6, t46);
      append_dev(div6, br11);
      append_dev(div6, t47);
      mount_component(button22, div6, null);
      append_dev(div6, t48);
      mount_component(button23, div6, null);
      append_dev(div6, t49);
      mount_component(button24, div6, null);
      append_dev(div6, t50);
      mount_component(button25, div6, null);
      append_dev(div6, t51);
      mount_component(button26, div6, null);
      append_dev(div6, t52);
      mount_component(button27, div6, null);
      insert_dev(target, t53, anchor);
      insert_dev(target, br12, anchor);
      insert_dev(target, t54, anchor);
      insert_dev(target, div7, anchor);
      append_dev(div7, h37);
      append_dev(h37, t55);
      append_dev(div7, t56);
      append_dev(div7, br13);
      append_dev(div7, t57);
      mount_component(button28, div7, null);
      append_dev(div7, t58);
      mount_component(button29, div7, null);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray$1(_ref, 1),
          dirty = _ref2[0];

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
    },
    i: function intro(local) {
      if (current) return;
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
      current = true;
    },
    o: function outro(local) {
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
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div0);
      destroy_component(button0);
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(br1);
      if (detaching) detach_dev(t4);
      if (detaching) detach_dev(div1);
      destroy_component(button1);
      destroy_component(button2);
      destroy_component(button3);
      destroy_component(button4);
      if (detaching) detach_dev(t11);
      if (detaching) detach_dev(br3);
      if (detaching) detach_dev(t12);
      if (detaching) detach_dev(div2);
      destroy_component(button5);
      destroy_component(button6);
      destroy_component(button7);
      destroy_component(button8);
      destroy_component(button9);
      destroy_component(button10);
      if (detaching) detach_dev(t21);
      if (detaching) detach_dev(div3);
      destroy_component(button11);
      if (detaching) detach_dev(t25);
      if (detaching) detach_dev(br6);
      if (detaching) detach_dev(t26);
      if (detaching) detach_dev(div4);
      destroy_component(button12);
      destroy_component(button13);
      destroy_component(button14);
      destroy_component(button15);
      destroy_component(button16);
      destroy_component(button17);
      if (detaching) detach_dev(t35);
      if (detaching) detach_dev(br8);
      if (detaching) detach_dev(t36);
      if (detaching) detach_dev(div5);
      destroy_component(button18);
      destroy_component(button19);
      destroy_component(button20);
      destroy_component(button21);
      if (detaching) detach_dev(t43);
      if (detaching) detach_dev(br10);
      if (detaching) detach_dev(t44);
      if (detaching) detach_dev(div6);
      destroy_component(button22);
      destroy_component(button23);
      destroy_component(button24);
      destroy_component(button25);
      destroy_component(button26);
      destroy_component(button27);
      if (detaching) detach_dev(t53);
      if (detaching) detach_dev(br12);
      if (detaching) detach_dev(t54);
      if (detaching) detach_dev(div7);
      destroy_component(button28);
      destroy_component(button29);
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
      Button: Button
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
