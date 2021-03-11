import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, F as _createClass, S as SvelteComponentDev, G as isUndef, v as validate_each_argument, g as validate_each_keys, H as create_slot, s as safe_not_equal, h as empty, m as space, o as claim_space, j as insert_dev, k as detach_dev, n as element, t as text, p as claim_element, r as children, u as claim_text, w as attr_dev, x as add_location, y as append_dev, z as listen_dev, I as prevent_default, J as set_data_dev, K as componentNavModel, q as query_selector_all, L as toggle_class, A as _slicedToArray, B as update_keyed_each, M as update_slot, N as transition_in, O as transition_out, D as validate_slots, P as getBrotherPage, Q as goto, E as destroy_block, C as noop } from './client.c0fb24e8.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\component\\_layout.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[11] = list[i];
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[14] = list[i];
  return child_ctx;
}

function get_each_context_2(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[17] = list[i];
  return child_ctx;
} // (30:4) {:else}


function create_else_block_1(ctx) {
  var h3;
  var t_value =
  /*item*/
  ctx[11].name + "";
  var t;
  var block = {
    c: function create() {
      h3 = element("h3");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      h3 = claim_element(nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      t = claim_text(h3_nodes, t_value);
      h3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h3, "class", "nav__title svelte-1tdqe8y");
      add_location(h3, file, 30, 5, 691);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h3, anchor);
      append_dev(h3, t);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(h3);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block_1.name,
    type: "else",
    source: "(30:4) {:else}",
    ctx: ctx
  });
  return block;
} // (24:4) {#if item.url}


function create_if_block_5(ctx) {
  var h3;
  var a;
  var t_value =
  /*item*/
  ctx[11].name + "";
  var t;
  var block = {
    c: function create() {
      h3 = element("h3");
      a = element("a");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      h3 = claim_element(nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      a = claim_element(h3_nodes, "A", {
        class: true,
        href: true,
        target: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach_dev);
      h3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "class", "nav__link svelte-1tdqe8y");
      attr_dev(a, "href", /*item*/
      ctx[11].url);
      attr_dev(a, "target", /*item*/
      ctx[11].target);
      add_location(a, file, 25, 6, 570);
      attr_dev(h3, "class", "nav__title svelte-1tdqe8y");
      add_location(h3, file, 24, 5, 540);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h3, anchor);
      append_dev(h3, a);
      append_dev(a, t);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(h3);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_5.name,
    type: "if",
    source: "(24:4) {#if item.url}",
    ctx: ctx
  });
  return block;
} // (34:4) {#if item.children && item.children.length > 0}


function create_if_block_2(ctx) {
  var ul;
  var each_blocks = [];
  var each_1_lookup = new Map();
  var t;
  var each_value_1 =
  /*item*/
  ctx[11].children;
  validate_each_argument(each_value_1);

  var get_key = function get_key(ctx) {
    return (
      /*child*/
      ctx[14].key
    );
  };

  validate_each_keys(ctx, each_value_1, get_each_context_1, get_key);

  for (var i = 0; i < each_value_1.length; i += 1) {
    var child_ctx = get_each_context_1(ctx, each_value_1, i);
    var key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block_1(key, child_ctx));
  }

  var block = {
    c: function create() {
      ul = element("ul");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t = space();
      this.h();
    },
    l: function claim(nodes) {
      ul = claim_element(nodes, "UL", {
        class: true
      });
      var ul_nodes = children(ul);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(ul_nodes);
      }

      t = claim_space(ul_nodes);
      ul_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(ul, "class", "nav-sub svelte-1tdqe8y");
      add_location(ul, file, 34, 5, 799);
    },
    m: function mount(target, anchor) {
      insert_dev(target, ul, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(ul, null);
      }

      append_dev(ul, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*componentNavModel, segment, undefined, onNavClick*/
      9) {
        each_value_1 =
        /*item*/
        ctx[11].children;
        validate_each_argument(each_value_1);
        validate_each_keys(ctx, each_value_1, get_each_context_1, get_key);
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value_1, each_1_lookup, ul, destroy_block, create_each_block_1, t, get_each_context_1);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(ul);

      for (var _i4 = 0; _i4 < each_blocks.length; _i4 += 1) {
        each_blocks[_i4].d();
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_2.name,
    type: "if",
    source: "(34:4) {#if item.children && item.children.length > 0}",
    ctx: ctx
  });
  return block;
} // (39:7) {:else}


function create_else_block(ctx) {
  var li;
  var a;
  var t_value =
  /*child*/
  ctx[14].name + "";
  var t;
  var a_aria_current_value;
  var mounted;
  var dispose;

  function click_handler() {
    return (
      /*click_handler*/
      ctx[7](
      /*child*/
      ctx[14])
    );
  }

  var block = {
    c: function create() {
      li = element("li");
      a = element("a");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {
        class: true
      });
      var li_nodes = children(li);
      a = claim_element(li_nodes, "A", {
        class: true,
        href: true,
        "aria-current": true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach_dev);
      li_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "class", "nav-sub__link svelte-1tdqe8y");
      attr_dev(a, "href", /*child*/
      ctx[14].url);
      attr_dev(a, "aria-current", a_aria_current_value =
      /*segment*/
      ctx[0] ===
      /*child*/
      ctx[14].key ?
      /*child*/
      ctx[14].key : undefined);
      add_location(a, file, 40, 9, 1009);
      attr_dev(li, "class", "nav-sub__item svelte-1tdqe8y");
      add_location(li, file, 39, 8, 973);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, a);
      append_dev(a, t);

      if (!mounted) {
        dispose = listen_dev(a, "click", prevent_default(click_handler), false, true, false);
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;

      if (dirty &
      /*segment*/
      1 && a_aria_current_value !== (a_aria_current_value =
      /*segment*/
      ctx[0] ===
      /*child*/
      ctx[14].key ?
      /*child*/
      ctx[14].key : undefined)) {
        attr_dev(a, "aria-current", a_aria_current_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(39:7) {:else}",
    ctx: ctx
  });
  return block;
} // (37:7) {#if child.children}


function create_if_block_4(ctx) {
  var h6;
  var t_value =
  /*child*/
  ctx[14].name + "";
  var t;
  var block = {
    c: function create() {
      h6 = element("h6");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      h6 = claim_element(nodes, "H6", {
        class: true
      });
      var h6_nodes = children(h6);
      t = claim_text(h6_nodes, t_value);
      h6_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h6, "class", "nav-sub__title svelte-1tdqe8y");
      add_location(h6, file, 37, 8, 905);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h6, anchor);
      append_dev(h6, t);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(h6);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_4.name,
    type: "if",
    source: "(37:7) {#if child.children}",
    ctx: ctx
  });
  return block;
} // (53:7) {#if child.children}


function create_if_block_3(ctx) {
  var each_blocks = [];
  var each_1_lookup = new Map();
  var each_1_anchor;
  var each_value_2 =
  /*child*/
  ctx[14].children;
  validate_each_argument(each_value_2);

  var get_key = function get_key(ctx) {
    return (
      /*subChild*/
      ctx[17].key
    );
  };

  validate_each_keys(ctx, each_value_2, get_each_context_2, get_key);

  for (var i = 0; i < each_value_2.length; i += 1) {
    var child_ctx = get_each_context_2(ctx, each_value_2, i);
    var key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block_2(key, child_ctx));
  }

  var block = {
    c: function create() {
      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        each_blocks[_i5].c();
      }

      each_1_anchor = empty();
    },
    l: function claim(nodes) {
      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        each_blocks[_i6].l(nodes);
      }

      each_1_anchor = empty();
    },
    m: function mount(target, anchor) {
      for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
        each_blocks[_i7].m(target, anchor);
      }

      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*componentNavModel, segment, undefined, onNavClick*/
      9) {
        each_value_2 =
        /*child*/
        ctx[14].children;
        validate_each_argument(each_value_2);
        validate_each_keys(ctx, each_value_2, get_each_context_2, get_key);
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value_2, each_1_lookup, each_1_anchor.parentNode, destroy_block, create_each_block_2, each_1_anchor, get_each_context_2);
      }
    },
    d: function destroy(detaching) {
      for (var _i8 = 0; _i8 < each_blocks.length; _i8 += 1) {
        each_blocks[_i8].d(detaching);
      }

      if (detaching) detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_3.name,
    type: "if",
    source: "(53:7) {#if child.children}",
    ctx: ctx
  });
  return block;
} // (54:8) {#each child.children as subChild (subChild.key)}


function create_each_block_2(key_1, ctx) {
  var li;
  var a;
  var t_value =
  /*subChild*/
  ctx[17].name + "";
  var t;
  var a_aria_current_value;
  var mounted;
  var dispose;

  function click_handler_1() {
    return (
      /*click_handler_1*/
      ctx[8](
      /*subChild*/
      ctx[17])
    );
  }

  var block = {
    key: key_1,
    first: null,
    c: function create() {
      li = element("li");
      a = element("a");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {
        class: true
      });
      var li_nodes = children(li);
      a = claim_element(li_nodes, "A", {
        class: true,
        href: true,
        "aria-current": true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach_dev);
      li_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "class", "nav-sub__link svelte-1tdqe8y");
      attr_dev(a, "href", /*subChild*/
      ctx[17].url);
      attr_dev(a, "aria-current", a_aria_current_value =
      /*segment*/
      ctx[0] ===
      /*subChild*/
      ctx[17].key ?
      /*subChild*/
      ctx[17].key : undefined);
      add_location(a, file, 55, 10, 1437);
      attr_dev(li, "class", "nav-sub__item svelte-1tdqe8y");
      add_location(li, file, 54, 9, 1400);
      this.first = li;
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, a);
      append_dev(a, t);

      if (!mounted) {
        dispose = listen_dev(a, "click", prevent_default(click_handler_1), false, true, false);
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;

      if (dirty &
      /*segment*/
      1 && a_aria_current_value !== (a_aria_current_value =
      /*segment*/
      ctx[0] ===
      /*subChild*/
      ctx[17].key ?
      /*subChild*/
      ctx[17].key : undefined)) {
        attr_dev(a, "aria-current", a_aria_current_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_2.name,
    type: "each",
    source: "(54:8) {#each child.children as subChild (subChild.key)}",
    ctx: ctx
  });
  return block;
} // (36:6) {#each item.children as child (child.key)}


function create_each_block_1(key_1, ctx) {
  var first;
  var t;
  var if_block1_anchor;

  function select_block_type_1(ctx, dirty) {
    if (
    /*child*/
    ctx[14].children) return create_if_block_4;
    return create_else_block;
  }

  var current_block_type = select_block_type_1(ctx);
  var if_block0 = current_block_type(ctx);
  var if_block1 =
  /*child*/
  ctx[14].children && create_if_block_3(ctx);
  var block = {
    key: key_1,
    first: null,
    c: function create() {
      first = empty();
      if_block0.c();
      t = space();
      if (if_block1) if_block1.c();
      if_block1_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      first = empty();
      if_block0.l(nodes);
      t = claim_space(nodes);
      if (if_block1) if_block1.l(nodes);
      if_block1_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      this.first = first;
    },
    m: function mount(target, anchor) {
      insert_dev(target, first, anchor);
      if_block0.m(target, anchor);
      insert_dev(target, t, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert_dev(target, if_block1_anchor, anchor);
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if_block0.p(ctx, dirty);
      if (
      /*child*/
      ctx[14].children) if_block1.p(ctx, dirty);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(first);
      if_block0.d(detaching);
      if (detaching) detach_dev(t);
      if (if_block1) if_block1.d(detaching);
      if (detaching) detach_dev(if_block1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_1.name,
    type: "each",
    source: "(36:6) {#each item.children as child (child.key)}",
    ctx: ctx
  });
  return block;
} // (23:3) {#each componentNavModel as item (item.key)}


function create_each_block(key_1, ctx) {
  var first;
  var t;
  var if_block1_anchor;

  function select_block_type(ctx, dirty) {
    if (
    /*item*/
    ctx[11].url) return create_if_block_5;
    return create_else_block_1;
  }

  var current_block_type = select_block_type(ctx);
  var if_block0 = current_block_type(ctx);
  var if_block1 =
  /*item*/
  ctx[11].children &&
  /*item*/
  ctx[11].children.length > 0 && create_if_block_2(ctx);
  var block = {
    key: key_1,
    first: null,
    c: function create() {
      first = empty();
      if_block0.c();
      t = space();
      if (if_block1) if_block1.c();
      if_block1_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      first = empty();
      if_block0.l(nodes);
      t = claim_space(nodes);
      if (if_block1) if_block1.l(nodes);
      if_block1_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      this.first = first;
    },
    m: function mount(target, anchor) {
      insert_dev(target, first, anchor);
      if_block0.m(target, anchor);
      insert_dev(target, t, anchor);
      if (if_block1) if_block1.m(target, anchor);
      insert_dev(target, if_block1_anchor, anchor);
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if_block0.p(ctx, dirty);
      if (
      /*item*/
      ctx[11].children &&
      /*item*/
      ctx[11].children.length > 0) if_block1.p(ctx, dirty);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(first);
      if_block0.d(detaching);
      if (detaching) detach_dev(t);
      if (if_block1) if_block1.d(detaching);
      if (detaching) detach_dev(if_block1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(23:3) {#each componentNavModel as item (item.key)}",
    ctx: ctx
  });
  return block;
} // (84:3) {#if !isUndef(prevPage)}


function create_if_block_1(ctx) {
  var div;
  var a;
  var t_value =
  /*prevPage*/
  ctx[1].name + "";
  var t;
  var a_href_value;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div = element("div");
      a = element("a");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      a = claim_element(div_nodes, "A", {
        class: true,
        href: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "class", "prev__link svelte-1tdqe8y");
      attr_dev(a, "href", a_href_value =
      /*prevPage*/
      ctx[1].url);
      add_location(a, file, 85, 5, 2052);
      attr_dev(div, "class", "prev svelte-1tdqe8y");
      add_location(div, file, 84, 4, 2028);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, a);
      append_dev(a, t);

      if (!mounted) {
        dispose = listen_dev(a, "click", prevent_default(
        /*click_handler_2*/
        ctx[9]), false, true, false);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*prevPage*/
      2 && t_value !== (t_value =
      /*prevPage*/
      ctx[1].name + "")) set_data_dev(t, t_value);

      if (dirty &
      /*prevPage*/
      2 && a_href_value !== (a_href_value =
      /*prevPage*/
      ctx[1].url)) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(84:3) {#if !isUndef(prevPage)}",
    ctx: ctx
  });
  return block;
} // (95:3) {#if !isUndef(nextPage)}


function create_if_block(ctx) {
  var div;
  var a;
  var t_value =
  /*nextPage*/
  ctx[2].name + "";
  var t;
  var a_href_value;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div = element("div");
      a = element("a");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      a = claim_element(div_nodes, "A", {
        class: true,
        href: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "class", "next__link svelte-1tdqe8y");
      attr_dev(a, "href", a_href_value =
      /*nextPage*/
      ctx[2].url);
      add_location(a, file, 96, 5, 2284);
      attr_dev(div, "class", "next svelte-1tdqe8y");
      add_location(div, file, 95, 4, 2260);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, a);
      append_dev(a, t);

      if (!mounted) {
        dispose = listen_dev(a, "click", prevent_default(
        /*click_handler_3*/
        ctx[10]), false, true, false);
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*nextPage*/
      4 && t_value !== (t_value =
      /*nextPage*/
      ctx[2].name + "")) set_data_dev(t, t_value);

      if (dirty &
      /*nextPage*/
      4 && a_href_value !== (a_href_value =
      /*nextPage*/
      ctx[2].url)) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(95:3) {#if !isUndef(nextPage)}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0;
  var section;
  var aside;
  var nav;
  var each_blocks = [];
  var each_1_lookup = new Map();
  var t1;
  var main;
  var div;
  var t2;
  var footer;
  var show_if_1 = !isUndef(
  /*prevPage*/
  ctx[1]);
  var t3;
  var show_if = !isUndef(
  /*nextPage*/
  ctx[2]);
  var current;
  var each_value = componentNavModel;
  validate_each_argument(each_value);

  var get_key = function get_key(ctx) {
    return (
      /*item*/
      ctx[11].key
    );
  };

  validate_each_keys(ctx, each_value, get_each_context, get_key);

  for (var i = 0; i < each_value.length; i += 1) {
    var child_ctx = get_each_context(ctx, each_value, i);
    var key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }

  var default_slot_template =
  /*#slots*/
  ctx[6].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[5], null);
  var if_block0 = show_if_1 && create_if_block_1(ctx);
  var if_block1 = show_if && create_if_block(ctx);
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      aside = element("aside");
      nav = element("nav");

      for (var _i9 = 0; _i9 < each_blocks.length; _i9 += 1) {
        each_blocks[_i9].c();
      }

      t1 = space();
      main = element("main");
      div = element("div");
      if (default_slot) default_slot.c();
      t2 = space();
      footer = element("footer");
      if (if_block0) if_block0.c();
      t3 = space();
      if (if_block1) if_block1.c();
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-fbqrdl\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      aside = claim_element(section_nodes, "ASIDE", {
        class: true
      });
      var aside_nodes = children(aside);
      nav = claim_element(aside_nodes, "NAV", {});
      var nav_nodes = children(nav);

      for (var _i10 = 0; _i10 < each_blocks.length; _i10 += 1) {
        each_blocks[_i10].l(nav_nodes);
      }

      nav_nodes.forEach(detach_dev);
      aside_nodes.forEach(detach_dev);
      t1 = claim_space(section_nodes);
      main = claim_element(section_nodes, "MAIN", {
        class: true
      });
      var main_nodes = children(main);
      div = claim_element(main_nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      t2 = claim_space(main_nodes);
      footer = claim_element(main_nodes, "FOOTER", {
        class: true
      });
      var footer_nodes = children(footer);
      if (if_block0) if_block0.l(footer_nodes);
      t3 = claim_space(footer_nodes);
      if (if_block1) if_block1.l(footer_nodes);
      footer_nodes.forEach(detach_dev);
      main_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "组件 | ElementSvelte";
      add_location(nav, file, 21, 2, 462);
      attr_dev(aside, "class", "svelte-1tdqe8y");
      add_location(aside, file, 20, 1, 452);
      attr_dev(div, "class", "md");
      add_location(div, file, 75, 2, 1849);
      attr_dev(footer, "class", "pages svelte-1tdqe8y");
      toggle_class(footer, "no-next", isUndef(
      /*nextPage*/
      ctx[2]));
      toggle_class(footer, "no-prev", isUndef(
      /*prevPage*/
      ctx[1]));
      add_location(footer, file, 78, 2, 1889);
      attr_dev(main, "class", "svelte-1tdqe8y");
      add_location(main, file, 74, 1, 1840);
      attr_dev(section, "class", "svelte-1tdqe8y");
      add_location(section, file, 19, 0, 441);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, aside);
      append_dev(aside, nav);

      for (var _i11 = 0; _i11 < each_blocks.length; _i11 += 1) {
        each_blocks[_i11].m(nav, null);
      }

      append_dev(section, t1);
      append_dev(section, main);
      append_dev(main, div);

      if (default_slot) {
        default_slot.m(div, null);
      }

      append_dev(main, t2);
      append_dev(main, footer);
      if (if_block0) if_block0.m(footer, null);
      append_dev(footer, t3);
      if (if_block1) if_block1.m(footer, null);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*componentNavModel, segment, undefined, onNavClick*/
      9) {
        each_value = componentNavModel;
        validate_each_argument(each_value);
        validate_each_keys(ctx, each_value, get_each_context, get_key);
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, nav, destroy_block, create_each_block, null, get_each_context);
      }

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        32) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[5], dirty, null, null);
        }
      }

      if (dirty &
      /*prevPage*/
      2) show_if_1 = !isUndef(
      /*prevPage*/
      ctx[1]);

      if (show_if_1) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_1(ctx);
          if_block0.c();
          if_block0.m(footer, t3);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }

      if (dirty &
      /*nextPage*/
      4) show_if = !isUndef(
      /*nextPage*/
      ctx[2]);

      if (show_if) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block(ctx);
          if_block1.c();
          if_block1.m(footer, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }

      if (dirty &
      /*isUndef, nextPage*/
      4) {
        toggle_class(footer, "no-next", isUndef(
        /*nextPage*/
        ctx[2]));
      }

      if (dirty &
      /*isUndef, prevPage*/
      2) {
        toggle_class(footer, "no-prev", isUndef(
        /*prevPage*/
        ctx[1]));
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
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);

      for (var _i12 = 0; _i12 < each_blocks.length; _i12 += 1) {
        each_blocks[_i12].d();
      }

      if (default_slot) default_slot.d(detaching);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
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
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Layout", slots, ['default']);
  var segment = $$props.segment;
  var page = segment;
  var prevPage;
  var nextPage;

  function onNavClick(_ref3) {
    var key = _ref3.key,
        url = _ref3.url;
    $$invalidate(4, page = key);
    goto(url);
  }

  var writable_props = ["segment"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Layout> was created with unknown prop '".concat(key, "'"));
  });

  var click_handler = function click_handler(child) {
    return onNavClick(child);
  };

  var click_handler_1 = function click_handler_1(subChild) {
    return onNavClick(subChild);
  };

  var click_handler_2 = function click_handler_2() {
    return onNavClick(prevPage);
  };

  var click_handler_3 = function click_handler_3() {
    return onNavClick(nextPage);
  };

  $$self.$$set = function ($$props) {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
    if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      componentNavModel: componentNavModel,
      getBrotherPage: getBrotherPage,
      isUndef: isUndef,
      goto: goto,
      segment: segment,
      page: page,
      prevPage: prevPage,
      nextPage: nextPage,
      onNavClick: onNavClick
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
    if ("page" in $$props) $$invalidate(4, page = $$props.page);
    if ("prevPage" in $$props) $$invalidate(1, prevPage = $$props.prevPage);
    if ("nextPage" in $$props) $$invalidate(2, nextPage = $$props.nextPage);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*page*/
    16) {
      var _getBrotherPage, _getBrotherPage2;

      $$invalidate(1, (_getBrotherPage = getBrotherPage(page), _getBrotherPage2 = _slicedToArray(_getBrotherPage, 2), prevPage = _getBrotherPage2[0], nextPage = _getBrotherPage2[1], _getBrotherPage), prevPage, ($$invalidate(2, nextPage), $$invalidate(4, page)));
    }
  };

  return [segment, prevPage, nextPage, onNavClick, page, $$scope, slots, click_handler, click_handler_1, click_handler_2, click_handler_3];
}

var Layout = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Layout, _SvelteComponentDev);

  var _super = _createSuper(Layout);

  function Layout(options) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      segment: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Layout",
      options: options,
      id: create_fragment.name
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

  _createClass(Layout, [{
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

export default Layout;
