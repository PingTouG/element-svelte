import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, f as add_render_callback, v as validate_each_argument, g as validate_each_keys, s as safe_not_equal, h as empty, j as insert_dev, k as detach_dev, l as headerNavModel, m as space, n as element, t as text, q as query_selector_all, o as claim_space, p as claim_element, r as children, u as claim_text, w as attr_dev, x as add_location, y as append_dev, z as listen_dev, A as _slicedToArray, B as update_keyed_each, C as noop, D as validate_slots, E as destroy_block } from './client.c0fb24e8.js';

var blueTheme = "/client/02fa866fe73e3630.png";

var redTheme = "/client/00569eff9d34ac19.png";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\index.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
} // (31:3) {#if nav.icon}


function create_if_block(ctx) {
  var div;
  var img;
  var img_src_value;
  var t0;
  var h3;
  var t1_value =
  /*nav*/
  ctx[3].name + "";
  var t1;
  var t2;
  var p;
  var t3_value =
  /*nav*/
  ctx[3].description + "";
  var t3;
  var t4;
  var a;
  var t5;
  var t6;
  var block = {
    c: function create() {
      div = element("div");
      img = element("img");
      t0 = space();
      h3 = element("h3");
      t1 = text(t1_value);
      t2 = space();
      p = element("p");
      t3 = text(t3_value);
      t4 = space();
      a = element("a");
      t5 = text("查看详情");
      t6 = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      img = claim_element(div_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t0 = claim_space(div_nodes);
      h3 = claim_element(div_nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      t1 = claim_text(h3_nodes, t1_value);
      h3_nodes.forEach(detach_dev);
      t2 = claim_space(div_nodes);
      p = claim_element(div_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, t3_value);
      p_nodes.forEach(detach_dev);
      t4 = claim_space(div_nodes);
      a = claim_element(div_nodes, "A", {
        class: true,
        href: true
      });
      var a_nodes = children(a);
      t5 = claim_text(a_nodes, "查看详情");
      a_nodes.forEach(detach_dev);
      t6 = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "class", "quick__icon svelte-1gtk3xy");
      if (img.src !== (img_src_value =
      /*nav*/
      ctx[3].icon)) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", /*nav*/
      ctx[3].key);
      add_location(img, file, 32, 5, 851);
      attr_dev(h3, "class", "quick__name svelte-1gtk3xy");
      add_location(h3, file, 33, 5, 917);
      attr_dev(p, "class", "quick__description svelte-1gtk3xy");
      add_location(p, file, 34, 5, 962);
      attr_dev(a, "class", "quick__url svelte-1gtk3xy");
      attr_dev(a, "href", /*nav*/
      ctx[3].url);
      add_location(a, file, 35, 5, 1019);
      attr_dev(div, "class", "quick__item svelte-1gtk3xy");
      add_location(div, file, 31, 4, 820);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, img);
      append_dev(div, t0);
      append_dev(div, h3);
      append_dev(h3, t1);
      append_dev(div, t2);
      append_dev(div, p);
      append_dev(p, t3);
      append_dev(div, t4);
      append_dev(div, a);
      append_dev(a, t5);
      append_dev(div, t6);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(31:3) {#if nav.icon}",
    ctx: ctx
  });
  return block;
} // (30:2) {#each headerNavModel as nav (nav.key)}


function create_each_block(key_1, ctx) {
  var first;
  var if_block_anchor;
  var if_block =
  /*nav*/
  ctx[3].icon && create_if_block(ctx);
  var block = {
    key: key_1,
    first: null,
    c: function create() {
      first = empty();
      if (if_block) if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      first = empty();
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      this.first = first;
    },
    m: function mount(target, anchor) {
      insert_dev(target, first, anchor);
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if (
      /*nav*/
      ctx[3].icon) if_block.p(ctx, dirty);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(first);
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(30:2) {#each headerNavModel as nav (nav.key)}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var scrolling = false;

  var clear_scrolling = function clear_scrolling() {
    scrolling = false;
  };

  var scrolling_timeout;
  var t0;
  var div3;
  var h1;
  var t1;
  var t2;
  var p0;
  var t3;
  var t4;
  var p1;
  var t5;
  var t6;
  var div1;
  var img0;
  var img0_src_value;
  var t7;
  var div0;
  var img1;
  var img1_src_value;
  var t8;
  var div2;
  var each_blocks = [];
  var each_1_lookup = new Map();
  var mounted;
  var dispose;
  add_render_callback(
  /*onwindowscroll*/
  ctx[2]);
  var each_value = headerNavModel;
  validate_each_argument(each_value);

  var get_key = function get_key(ctx) {
    return (
      /*nav*/
      ctx[3].key
    );
  };

  validate_each_keys(ctx, each_value, get_each_context, get_key);

  for (var i = 0; i < each_value.length; i += 1) {
    var child_ctx = get_each_context(ctx, each_value, i);
    var key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }

  var block = {
    c: function create() {
      t0 = space();
      div3 = element("div");
      h1 = element("h1");
      t1 = text("基于Svelte的ElementUI");
      t2 = space();
      p0 = element("p");
      t3 = text("ElementUI是一套为开发者、设计师和产品经理准备的基于 Vue 的桌面端组件库");
      t4 = space();
      p1 = element("p");
      t5 = text("ElementSvelte是基于Svelte实现的ElementUI");
      t6 = space();
      div1 = element("div");
      img0 = element("img");
      t7 = space();
      div0 = element("div");
      img1 = element("img");
      t8 = space();
      div2 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-d6y2pp\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      h1 = claim_element(div3_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "基于Svelte的ElementUI");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(div3_nodes);
      p0 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, "ElementUI是一套为开发者、设计师和产品经理准备的基于 Vue 的桌面端组件库");
      p0_nodes.forEach(detach_dev);
      t4 = claim_space(div3_nodes);
      p1 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t5 = claim_text(p1_nodes, "ElementSvelte是基于Svelte实现的ElementUI");
      p1_nodes.forEach(detach_dev);
      t6 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      img0 = claim_element(div1_nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      });
      t7 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true,
        style: true
      });
      var div0_nodes = children(div0);
      img1 = claim_element(div0_nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      });
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t8 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div2_nodes);
      }

      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "ElementSvelte - 基于Svelte的ElementUI";
      attr_dev(h1, "class", "title svelte-1gtk3xy");
      add_location(h1, file, 17, 1, 406);
      attr_dev(p0, "class", "desc svelte-1gtk3xy");
      add_location(p0, file, 18, 1, 449);
      attr_dev(p1, "class", "desc svelte-1gtk3xy");
      add_location(p1, file, 21, 1, 518);
      if (img0.src !== (img0_src_value = blueTheme)) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "蓝色主题图片");
      attr_dev(img0, "class", "svelte-1gtk3xy");
      add_location(img0, file, 23, 2, 596);
      if (img1.src !== (img1_src_value = redTheme)) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "红色主题图片");
      attr_dev(img1, "class", "svelte-1gtk3xy");
      add_location(img1, file, 25, 3, 680);
      attr_dev(div0, "class", "theme-red svelte-1gtk3xy");
      attr_dev(div0, "style",
      /*style*/
      ctx[1]);
      add_location(div0, file, 24, 2, 637);
      attr_dev(div1, "class", "theme svelte-1gtk3xy");
      add_location(div1, file, 22, 1, 574);
      attr_dev(div2, "class", "quick svelte-1gtk3xy");
      add_location(div2, file, 28, 1, 736);
      attr_dev(div3, "class", "home svelte-1gtk3xy");
      add_location(div3, file, 16, 0, 386);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div3, anchor);
      append_dev(div3, h1);
      append_dev(h1, t1);
      append_dev(div3, t2);
      append_dev(div3, p0);
      append_dev(p0, t3);
      append_dev(div3, t4);
      append_dev(div3, p1);
      append_dev(p1, t5);
      append_dev(div3, t6);
      append_dev(div3, div1);
      append_dev(div1, img0);
      append_dev(div1, t7);
      append_dev(div1, div0);
      append_dev(div0, img1);
      append_dev(div3, t8);
      append_dev(div3, div2);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div2, null);
      }

      if (!mounted) {
        dispose = listen_dev(window, "scroll", function () {
          scrolling = true;
          clearTimeout(scrolling_timeout);
          scrolling_timeout = setTimeout(clear_scrolling, 100);
          /*onwindowscroll*/

          ctx[2]();
        });
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*scrollY*/
      1 && !scrolling) {
        scrolling = true;
        clearTimeout(scrolling_timeout);
        scrollTo(window.pageXOffset,
        /*scrollY*/
        ctx[0]);
        scrolling_timeout = setTimeout(clear_scrolling, 100);
      }

      if (dirty &
      /*style*/
      2) {
        attr_dev(div0, "style",
        /*style*/
        ctx[1]);
      }

      if (dirty &
      /*headerNavModel*/
      0) {
        each_value = headerNavModel;
        validate_each_argument(each_value);
        validate_each_keys(ctx, each_value, get_each_context, get_key);
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div2, destroy_block, create_each_block, null, get_each_context);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div3);

      for (var _i4 = 0; _i4 < each_blocks.length; _i4 += 1) {
        each_blocks[_i4].d();
      }

      mounted = false;
      dispose();
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
  validate_slots("Routes", slots, []);
  var scrollY = 0;
  var style;
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });

  function onwindowscroll() {
    $$invalidate(0, scrollY = window.pageYOffset);
  }

  $$self.$capture_state = function () {
    return {
      blueTheme: blueTheme,
      redTheme: redTheme,
      headerNavModel: headerNavModel,
      scrollY: scrollY,
      style: style
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("scrollY" in $$props) $$invalidate(0, scrollY = $$props.scrollY);
    if ("style" in $$props) $$invalidate(1, style = $$props.style);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*scrollY*/
    1) {
      if (scrollY < 570) {
        $$invalidate(1, style = "height: ".concat(scrollY, "px"));
      }
    }
  };

  return [scrollY, style, onwindowscroll];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
