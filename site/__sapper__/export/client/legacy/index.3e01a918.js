import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, j as space, h as element, t as text, x as query_selector_all, o as detach_dev, m as claim_space, k as claim_element, l as children, n as claim_text, q as add_location, r as insert_dev, u as append_dev, B as noop, C as validate_slots } from './client.829d994e.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\resource\\index.svelte";

function create_fragment(ctx) {
  var t0;
  var h3;
  var t1;
  var t2;
  var p;
  var t3;
  var block = {
    c: function create() {
      t0 = space();
      h3 = element("h3");
      t1 = text("资源");
      t2 = space();
      p = element("p");
      t3 = text("暂无资源");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-yt01of\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      h3 = claim_element(nodes, "H3", {});
      var h3_nodes = children(h3);
      t1 = claim_text(h3_nodes, "资源");
      h3_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, "暂无资源");
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "资源 | ElementSvelte";
      add_location(h3, file, 4, 0, 65);
      add_location(p, file, 5, 0, 77);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h3, anchor);
      append_dev(h3, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, p, anchor);
      append_dev(p, t3);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h3);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(p);
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

function instance($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Resource", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Resource> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Resource = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Resource, _SvelteComponentDev);

  var _super = _createSuper(Resource);

  function Resource(options) {
    var _this;

    _classCallCheck(this, Resource);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Resource",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Resource;
}(SvelteComponentDev);

export default Resource;
