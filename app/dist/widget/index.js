var da = Object.defineProperty;
var ha = (n, e, t) => e in n ? da(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var ir = (n, e, t) => (ha(n, typeof e != "symbol" ? e + "" : e, t), t);
import { apis as pa } from "$src/constants/apis";
import { apiFetch as ma } from "$src/utils/api-helpers/api-fetch";
import { placeholders as ga } from "$src/constants/contents";
function H() {
}
function Kt(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function ho(n) {
  return n();
}
function Ri() {
  return /* @__PURE__ */ Object.create(null);
}
function Vn(n) {
  n.forEach(ho);
}
function po(n) {
  return typeof n == "function";
}
function ge(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
let fn;
function ya(n, e) {
  return n === e ? !0 : (fn || (fn = document.createElement("a")), fn.href = e, n === fn.href);
}
function ba(n) {
  return Object.keys(n).length === 0;
}
function Ct(n, e, t, r) {
  if (n) {
    const i = mo(n, e, t, r);
    return n[0](i);
  }
}
function mo(n, e, t, r) {
  return n[1] && r ? Kt(t.ctx.slice(), n[1](r(e))) : t.ctx;
}
function Tt(n, e, t, r) {
  if (n[2] && r) {
    const i = n[2](r(t));
    if (e.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const s = [], o = Math.max(e.dirty.length, i.length);
      for (let l = 0; l < o; l += 1)
        s[l] = e.dirty[l] | i[l];
      return s;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function Ot(n, e, t, r, i, s) {
  if (i) {
    const o = mo(e, t, r, s);
    n.p(o, i);
  }
}
function vt(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let r = 0; r < t; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function $i(n) {
  const e = {};
  for (const t in n)
    t[0] !== "$" && (e[t] = n[t]);
  return e;
}
function z(n, e) {
  n.appendChild(e);
}
function B(n, e, t) {
  n.insertBefore(e, t || null);
}
function $(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function R(n) {
  return document.createElement(n);
}
function ka(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function on(n) {
  return document.createTextNode(n);
}
function we() {
  return on(" ");
}
function go() {
  return on("");
}
function xa(n, e, t, r) {
  return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r);
}
function P(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const Sa = ["width", "height"];
function Bi(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const r in e)
    e[r] == null ? n.removeAttribute(r) : r === "style" ? n.style.cssText = e[r] : r === "__value" ? n.value = n[r] = e[r] : t[r] && t[r].set && Sa.indexOf(r) === -1 ? n[r] = e[r] : P(n, r, e[r]);
}
function Li(n, e) {
  for (const t in e)
    P(n, t, e[t]);
}
function wa(n) {
  return Array.from(n.childNodes);
}
function li(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function Ma(n, e, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: r });
}
let Ut;
function _t(n) {
  Ut = n;
}
function ai() {
  if (!Ut)
    throw new Error("Function called outside component initialization");
  return Ut;
}
function ci(n) {
  ai().$$.on_mount.push(n);
}
function yo(n) {
  ai().$$.on_destroy.push(n);
}
function Ca() {
  const n = ai();
  return (e, t, { cancelable: r = !1 } = {}) => {
    const i = n.$$.callbacks[e];
    if (i) {
      const s = Ma(
        /** @type {string} */
        e,
        t,
        { cancelable: r }
      );
      return i.slice().forEach((o) => {
        o.call(n, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
const pt = [], Ir = [];
let kt = [];
const zi = [], Ta = /* @__PURE__ */ Promise.resolve();
let Dr = !1;
function Oa() {
  Dr || (Dr = !0, Ta.then(bo));
}
function Pr(n) {
  kt.push(n);
}
const sr = /* @__PURE__ */ new Set();
let ft = 0;
function bo() {
  if (ft !== 0)
    return;
  const n = Ut;
  do {
    try {
      for (; ft < pt.length; ) {
        const e = pt[ft];
        ft++, _t(e), va(e.$$);
      }
    } catch (e) {
      throw pt.length = 0, ft = 0, e;
    }
    for (_t(null), pt.length = 0, ft = 0; Ir.length; )
      Ir.pop()();
    for (let e = 0; e < kt.length; e += 1) {
      const t = kt[e];
      sr.has(t) || (sr.add(t), t());
    }
    kt.length = 0;
  } while (pt.length);
  for (; zi.length; )
    zi.pop()();
  Dr = !1, sr.clear(), _t(n);
}
function va(n) {
  if (n.fragment !== null) {
    n.update(), Vn(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Pr);
  }
}
function Na(n) {
  const e = [], t = [];
  kt.forEach((r) => n.indexOf(r) === -1 ? e.push(r) : t.push(r)), t.forEach((r) => r()), kt = e;
}
const bn = /* @__PURE__ */ new Set();
let Ea;
function F(n, e) {
  n && n.i && (bn.delete(n), n.i(e));
}
function V(n, e, t, r) {
  if (n && n.o) {
    if (bn.has(n))
      return;
    bn.add(n), Ea.c.push(() => {
      bn.delete(n), r && (t && n.d(1), r());
    }), n.o(e);
  } else
    r && r();
}
function ko(n, e) {
  const t = {}, r = {}, i = { $$scope: 1 };
  let s = n.length;
  for (; s--; ) {
    const o = n[s], l = e[s];
    if (l) {
      for (const a in o)
        a in l || (r[a] = 1);
      for (const a in l)
        i[a] || (t[a] = l[a], i[a] = 1);
      n[s] = l;
    } else
      for (const a in o)
        i[a] = 1;
  }
  for (const o in r)
    o in t || (t[o] = void 0);
  return t;
}
function ce(n) {
  n && n.c();
}
function re(n, e, t) {
  const { fragment: r, after_update: i } = n.$$;
  r && r.m(e, t), Pr(() => {
    const s = n.$$.on_mount.map(ho).filter(po);
    n.$$.on_destroy ? n.$$.on_destroy.push(...s) : Vn(s), n.$$.on_mount = [];
  }), i.forEach(Pr);
}
function ie(n, e) {
  const t = n.$$;
  t.fragment !== null && (Na(t.after_update), Vn(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Aa(n, e) {
  n.$$.dirty[0] === -1 && (pt.push(n), Oa(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ye(n, e, t, r, i, s, o = null, l = [-1]) {
  const a = Ut;
  _t(n);
  const c = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: H,
    not_equal: i,
    bound: Ri(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: Ri(),
    dirty: l,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  o && o(c.root);
  let u = !1;
  if (c.ctx = t ? t(n, e.props || {}, (f, d, ...h) => {
    const p = h.length ? h[0] : d;
    return c.ctx && i(c.ctx[f], c.ctx[f] = p) && (!c.skip_bound && c.bound[f] && c.bound[f](p), u && Aa(n, f)), d;
  }) : [], c.update(), u = !0, Vn(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = wa(e.target);
      c.fragment && c.fragment.l(f), f.forEach($);
    } else
      c.fragment && c.fragment.c();
    e.intro && F(n.$$.fragment), re(n, e.target, e.anchor), bo();
  }
  _t(a);
}
class be {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ir(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ir(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ie(this, 1), this.$destroy = H;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!po(t))
      return H;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(t), () => {
      const i = r.indexOf(t);
      i !== -1 && r.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !ba(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ia = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ia);
function Da(n) {
  let e, t;
  return {
    c() {
      e = R("button"), t = on(
        /*text*/
        n[0]
      ), P(e, "class", "px-4 py-2 bg-slate-100 hover:bg-slate-300 rounded text-sm");
    },
    m(r, i) {
      B(r, e, i), z(e, t);
    },
    p(r, [i]) {
      i & /*text*/
      1 && li(
        t,
        /*text*/
        r[0]
      );
    },
    i: H,
    o: H,
    d(r) {
      r && $(e);
    }
  };
}
function Pa(n, e, t) {
  let { text: r } = e;
  return n.$$set = (i) => {
    "text" in i && t(0, r = i.text);
  }, [r];
}
class or extends be {
  constructor(e) {
    super(), ye(this, e, Pa, Da, ge, { text: 0 });
  }
}
function Ra(n) {
  let e, t;
  const r = (
    /*#slots*/
    n[1].default
  ), i = Ct(
    r,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = R("div"), i && i.c();
    },
    m(s, o) {
      B(s, e, o), i && i.m(e, null), t = !0;
    },
    p(s, [o]) {
      i && i.p && (!t || o & /*$$scope*/
      1) && Ot(
        i,
        r,
        s,
        /*$$scope*/
        s[0],
        t ? Tt(
          r,
          /*$$scope*/
          s[0],
          o,
          null
        ) : vt(
          /*$$scope*/
          s[0]
        ),
        null
      );
    },
    i(s) {
      t || (F(i, s), t = !0);
    },
    o(s) {
      V(i, s), t = !1;
    },
    d(s) {
      s && $(e), i && i.d(s);
    }
  };
}
function $a(n, e, t) {
  let { $$slots: r = {}, $$scope: i } = e;
  return n.$$set = (s) => {
    "$$scope" in s && t(0, i = s.$$scope);
  }, [i, r];
}
class Ba extends be {
  constructor(e) {
    super(), ye(this, e, $a, Ra, ge, {});
  }
}
const Ht = /^[a-z0-9]+(-[a-z0-9]+)*$/, _n = (n, e, t, r = "") => {
  const i = n.split(":");
  if (n.slice(0, 1) === "@") {
    if (i.length < 2 || i.length > 3)
      return null;
    r = i.shift().slice(1);
  }
  if (i.length > 3 || !i.length)
    return null;
  if (i.length > 1) {
    const l = i.pop(), a = i.pop(), c = {
      // Allow provider without '@': "provider:prefix:name"
      provider: i.length > 0 ? i[0] : r,
      prefix: a,
      name: l
    };
    return e && !kn(c) ? null : c;
  }
  const s = i[0], o = s.split("-");
  if (o.length > 1) {
    const l = {
      provider: r,
      prefix: o.shift(),
      name: o.join("-")
    };
    return e && !kn(l) ? null : l;
  }
  if (t && r === "") {
    const l = {
      provider: r,
      prefix: "",
      name: s
    };
    return e && !kn(l, t) ? null : l;
  }
  return null;
}, kn = (n, e) => n ? !!((n.provider === "" || n.provider.match(Ht)) && (e && n.prefix === "" || n.prefix.match(Ht)) && n.name.match(Ht)) : !1, xo = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Cn = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Hn = Object.freeze({
  ...xo,
  ...Cn
}), Rr = Object.freeze({
  ...Hn,
  body: "",
  hidden: !1
});
function La(n, e) {
  const t = {};
  !n.hFlip != !e.hFlip && (t.hFlip = !0), !n.vFlip != !e.vFlip && (t.vFlip = !0);
  const r = ((n.rotate || 0) + (e.rotate || 0)) % 4;
  return r && (t.rotate = r), t;
}
function Fi(n, e) {
  const t = La(n, e);
  for (const r in Rr)
    r in Cn ? r in n && !(r in t) && (t[r] = Cn[r]) : r in e ? t[r] = e[r] : r in n && (t[r] = n[r]);
  return t;
}
function za(n, e) {
  const t = n.icons, r = n.aliases || /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  function s(o) {
    if (t[o])
      return i[o] = [];
    if (!(o in i)) {
      i[o] = null;
      const l = r[o] && r[o].parent, a = l && s(l);
      a && (i[o] = [l].concat(a));
    }
    return i[o];
  }
  return (e || Object.keys(t).concat(Object.keys(r))).forEach(s), i;
}
function Fa(n, e, t) {
  const r = n.icons, i = n.aliases || /* @__PURE__ */ Object.create(null);
  let s = {};
  function o(l) {
    s = Fi(
      r[l] || i[l],
      s
    );
  }
  return o(e), t.forEach(o), Fi(n, s);
}
function So(n, e) {
  const t = [];
  if (typeof n != "object" || typeof n.icons != "object")
    return t;
  n.not_found instanceof Array && n.not_found.forEach((i) => {
    e(i, null), t.push(i);
  });
  const r = za(n);
  for (const i in r) {
    const s = r[i];
    s && (e(i, Fa(n, i, s)), t.push(i));
  }
  return t;
}
const Va = {
  provider: "",
  aliases: {},
  not_found: {},
  ...xo
};
function lr(n, e) {
  for (const t in e)
    if (t in n && typeof n[t] != typeof e[t])
      return !1;
  return !0;
}
function wo(n) {
  if (typeof n != "object" || n === null)
    return null;
  const e = n;
  if (typeof e.prefix != "string" || !n.icons || typeof n.icons != "object" || !lr(n, Va))
    return null;
  const t = e.icons;
  for (const i in t) {
    const s = t[i];
    if (!i.match(Ht) || typeof s.body != "string" || !lr(
      s,
      Rr
    ))
      return null;
  }
  const r = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const i in r) {
    const s = r[i], o = s.parent;
    if (!i.match(Ht) || typeof o != "string" || !t[o] && !r[o] || !lr(
      s,
      Rr
    ))
      return null;
  }
  return e;
}
const Vi = /* @__PURE__ */ Object.create(null);
function _a(n, e) {
  return {
    provider: n,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function lt(n, e) {
  const t = Vi[n] || (Vi[n] = /* @__PURE__ */ Object.create(null));
  return t[e] || (t[e] = _a(n, e));
}
function ui(n, e) {
  return wo(e) ? So(e, (t, r) => {
    r ? n.icons[t] = r : n.missing.add(t);
  }) : [];
}
function Ha(n, e, t) {
  try {
    if (typeof t.body == "string")
      return n.icons[e] = { ...t }, !0;
  } catch {
  }
  return !1;
}
let Gt = !1;
function Mo(n) {
  return typeof n == "boolean" && (Gt = n), Gt;
}
function ja(n) {
  const e = typeof n == "string" ? _n(n, !0, Gt) : n;
  if (e) {
    const t = lt(e.provider, e.prefix), r = e.name;
    return t.icons[r] || (t.missing.has(r) ? null : void 0);
  }
}
function Wa(n, e) {
  const t = _n(n, !0, Gt);
  if (!t)
    return !1;
  const r = lt(t.provider, t.prefix);
  return Ha(r, t.name, e);
}
function Ja(n, e) {
  if (typeof n != "object")
    return !1;
  if (typeof e != "string" && (e = n.provider || ""), Gt && !e && !n.prefix) {
    let i = !1;
    return wo(n) && (n.prefix = "", So(n, (s, o) => {
      o && Wa(s, o) && (i = !0);
    })), i;
  }
  const t = n.prefix;
  if (!kn({
    provider: e,
    prefix: t,
    name: "a"
  }))
    return !1;
  const r = lt(e, t);
  return !!ui(r, n);
}
const Co = Object.freeze({
  width: null,
  height: null
}), To = Object.freeze({
  // Dimensions
  ...Co,
  // Transformations
  ...Cn
}), qa = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Ka = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function _i(n, e, t) {
  if (e === 1)
    return n;
  if (t = t || 100, typeof n == "number")
    return Math.ceil(n * e * t) / t;
  if (typeof n != "string")
    return n;
  const r = n.split(qa);
  if (r === null || !r.length)
    return n;
  const i = [];
  let s = r.shift(), o = Ka.test(s);
  for (; ; ) {
    if (o) {
      const l = parseFloat(s);
      isNaN(l) ? i.push(s) : i.push(Math.ceil(l * e * t) / t);
    } else
      i.push(s);
    if (s = r.shift(), s === void 0)
      return i.join("");
    o = !o;
  }
}
function Ua(n, e = "defs") {
  let t = "";
  const r = n.indexOf("<" + e);
  for (; r >= 0; ) {
    const i = n.indexOf(">", r), s = n.indexOf("</" + e);
    if (i === -1 || s === -1)
      break;
    const o = n.indexOf(">", s);
    if (o === -1)
      break;
    t += n.slice(i + 1, s).trim(), n = n.slice(0, r).trim() + n.slice(o + 1);
  }
  return {
    defs: t,
    content: n
  };
}
function Ga(n, e) {
  return n ? "<defs>" + n + "</defs>" + e : e;
}
function Ya(n, e, t) {
  const r = Ua(n);
  return Ga(r.defs, e + r.content + t);
}
const Xa = (n) => n === "unset" || n === "undefined" || n === "none";
function Qa(n, e) {
  const t = {
    ...Hn,
    ...n
  }, r = {
    ...To,
    ...e
  }, i = {
    left: t.left,
    top: t.top,
    width: t.width,
    height: t.height
  };
  let s = t.body;
  [t, r].forEach((m) => {
    const g = [], y = m.hFlip, k = m.vFlip;
    let C = m.rotate;
    y ? k ? C += 2 : (g.push(
      "translate(" + (i.width + i.left).toString() + " " + (0 - i.top).toString() + ")"
    ), g.push("scale(-1 1)"), i.top = i.left = 0) : k && (g.push(
      "translate(" + (0 - i.left).toString() + " " + (i.height + i.top).toString() + ")"
    ), g.push("scale(1 -1)"), i.top = i.left = 0);
    let N;
    switch (C < 0 && (C -= Math.floor(C / 4) * 4), C = C % 4, C) {
      case 1:
        N = i.height / 2 + i.top, g.unshift(
          "rotate(90 " + N.toString() + " " + N.toString() + ")"
        );
        break;
      case 2:
        g.unshift(
          "rotate(180 " + (i.width / 2 + i.left).toString() + " " + (i.height / 2 + i.top).toString() + ")"
        );
        break;
      case 3:
        N = i.width / 2 + i.left, g.unshift(
          "rotate(-90 " + N.toString() + " " + N.toString() + ")"
        );
        break;
    }
    C % 2 === 1 && (i.left !== i.top && (N = i.left, i.left = i.top, i.top = N), i.width !== i.height && (N = i.width, i.width = i.height, i.height = N)), g.length && (s = Ya(
      s,
      '<g transform="' + g.join(" ") + '">',
      "</g>"
    ));
  });
  const o = r.width, l = r.height, a = i.width, c = i.height;
  let u, f;
  o === null ? (f = l === null ? "1em" : l === "auto" ? c : l, u = _i(f, a / c)) : (u = o === "auto" ? a : o, f = l === null ? _i(u, c / a) : l === "auto" ? c : l);
  const d = {}, h = (m, g) => {
    Xa(g) || (d[m] = g.toString());
  };
  h("width", u), h("height", f);
  const p = [i.left, i.top, a, c];
  return d.viewBox = p.join(" "), {
    attributes: d,
    viewBox: p,
    body: s
  };
}
const Za = /\sid="(\S+)"/g, ec = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let tc = 0;
function nc(n, e = ec) {
  const t = [];
  let r;
  for (; r = Za.exec(n); )
    t.push(r[1]);
  if (!t.length)
    return n;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return t.forEach((s) => {
    const o = typeof e == "function" ? e(s) : e + (tc++).toString(), l = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    n = n.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + l + ')([")]|\\.[a-z])', "g"),
      "$1" + o + i + "$3"
    );
  }), n = n.replace(new RegExp(i, "g"), ""), n;
}
const $r = /* @__PURE__ */ Object.create(null);
function rc(n, e) {
  $r[n] = e;
}
function Br(n) {
  return $r[n] || $r[""];
}
function fi(n) {
  let e;
  if (typeof n.resources == "string")
    e = [n.resources];
  else if (e = n.resources, !(e instanceof Array) || !e.length)
    return null;
  return {
    // API hosts
    resources: e,
    // Root path
    path: n.path || "/",
    // URL length limit
    maxURL: n.maxURL || 500,
    // Timeout before next host is used.
    rotate: n.rotate || 750,
    // Timeout before failing query.
    timeout: n.timeout || 5e3,
    // Randomise default API end point.
    random: n.random === !0,
    // Start index
    index: n.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: n.dataAfterTimeout !== !1
  };
}
const di = /* @__PURE__ */ Object.create(null), Bt = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], xn = [];
for (; Bt.length > 0; )
  Bt.length === 1 || Math.random() > 0.5 ? xn.push(Bt.shift()) : xn.push(Bt.pop());
di[""] = fi({
  resources: ["https://api.iconify.design"].concat(xn)
});
function ic(n, e) {
  const t = fi(e);
  return t === null ? !1 : (di[n] = t, !0);
}
function hi(n) {
  return di[n];
}
const sc = () => {
  let n;
  try {
    if (n = fetch, typeof n == "function")
      return n;
  } catch {
  }
};
let Hi = sc();
function oc(n, e) {
  const t = hi(n);
  if (!t)
    return 0;
  let r;
  if (!t.maxURL)
    r = 0;
  else {
    let i = 0;
    t.resources.forEach((o) => {
      i = Math.max(i, o.length);
    });
    const s = e + ".json?icons=";
    r = t.maxURL - i - t.path.length - s.length;
  }
  return r;
}
function lc(n) {
  return n === 404;
}
const ac = (n, e, t) => {
  const r = [], i = oc(n, e), s = "icons";
  let o = {
    type: s,
    provider: n,
    prefix: e,
    icons: []
  }, l = 0;
  return t.forEach((a, c) => {
    l += a.length + 1, l >= i && c > 0 && (r.push(o), o = {
      type: s,
      provider: n,
      prefix: e,
      icons: []
    }, l = a.length), o.icons.push(a);
  }), r.push(o), r;
};
function cc(n) {
  if (typeof n == "string") {
    const e = hi(n);
    if (e)
      return e.path;
  }
  return "/";
}
const uc = (n, e, t) => {
  if (!Hi) {
    t("abort", 424);
    return;
  }
  let r = cc(e.provider);
  switch (e.type) {
    case "icons": {
      const s = e.prefix, l = e.icons.join(","), a = new URLSearchParams({
        icons: l
      });
      r += s + ".json?" + a.toString();
      break;
    }
    case "custom": {
      const s = e.uri;
      r += s.slice(0, 1) === "/" ? s.slice(1) : s;
      break;
    }
    default:
      t("abort", 400);
      return;
  }
  let i = 503;
  Hi(n + r).then((s) => {
    const o = s.status;
    if (o !== 200) {
      setTimeout(() => {
        t(lc(o) ? "abort" : "next", o);
      });
      return;
    }
    return i = 501, s.json();
  }).then((s) => {
    if (typeof s != "object" || s === null) {
      setTimeout(() => {
        s === 404 ? t("abort", s) : t("next", i);
      });
      return;
    }
    setTimeout(() => {
      t("success", s);
    });
  }).catch(() => {
    t("next", i);
  });
}, fc = {
  prepare: ac,
  send: uc
};
function dc(n) {
  const e = {
    loaded: [],
    missing: [],
    pending: []
  }, t = /* @__PURE__ */ Object.create(null);
  n.sort((i, s) => i.provider !== s.provider ? i.provider.localeCompare(s.provider) : i.prefix !== s.prefix ? i.prefix.localeCompare(s.prefix) : i.name.localeCompare(s.name));
  let r = {
    provider: "",
    prefix: "",
    name: ""
  };
  return n.forEach((i) => {
    if (r.name === i.name && r.prefix === i.prefix && r.provider === i.provider)
      return;
    r = i;
    const s = i.provider, o = i.prefix, l = i.name, a = t[s] || (t[s] = /* @__PURE__ */ Object.create(null)), c = a[o] || (a[o] = lt(s, o));
    let u;
    l in c.icons ? u = e.loaded : o === "" || c.missing.has(l) ? u = e.missing : u = e.pending;
    const f = {
      provider: s,
      prefix: o,
      name: l
    };
    u.push(f);
  }), e;
}
function Oo(n, e) {
  n.forEach((t) => {
    const r = t.loaderCallbacks;
    r && (t.loaderCallbacks = r.filter((i) => i.id !== e));
  });
}
function hc(n) {
  n.pendingCallbacksFlag || (n.pendingCallbacksFlag = !0, setTimeout(() => {
    n.pendingCallbacksFlag = !1;
    const e = n.loaderCallbacks ? n.loaderCallbacks.slice(0) : [];
    if (!e.length)
      return;
    let t = !1;
    const r = n.provider, i = n.prefix;
    e.forEach((s) => {
      const o = s.icons, l = o.pending.length;
      o.pending = o.pending.filter((a) => {
        if (a.prefix !== i)
          return !0;
        const c = a.name;
        if (n.icons[c])
          o.loaded.push({
            provider: r,
            prefix: i,
            name: c
          });
        else if (n.missing.has(c))
          o.missing.push({
            provider: r,
            prefix: i,
            name: c
          });
        else
          return t = !0, !0;
        return !1;
      }), o.pending.length !== l && (t || Oo([n], s.id), s.callback(
        o.loaded.slice(0),
        o.missing.slice(0),
        o.pending.slice(0),
        s.abort
      ));
    });
  }));
}
let pc = 0;
function mc(n, e, t) {
  const r = pc++, i = Oo.bind(null, t, r);
  if (!e.pending.length)
    return i;
  const s = {
    id: r,
    icons: e,
    callback: n,
    abort: i
  };
  return t.forEach((o) => {
    (o.loaderCallbacks || (o.loaderCallbacks = [])).push(s);
  }), i;
}
function gc(n, e = !0, t = !1) {
  const r = [];
  return n.forEach((i) => {
    const s = typeof i == "string" ? _n(i, e, t) : i;
    s && r.push(s);
  }), r;
}
var yc = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function bc(n, e, t, r) {
  const i = n.resources.length, s = n.random ? Math.floor(Math.random() * i) : n.index;
  let o;
  if (n.random) {
    let w = n.resources.slice(0);
    for (o = []; w.length > 1; ) {
      const A = Math.floor(Math.random() * w.length);
      o.push(w[A]), w = w.slice(0, A).concat(w.slice(A + 1));
    }
    o = o.concat(w);
  } else
    o = n.resources.slice(s).concat(n.resources.slice(0, s));
  const l = Date.now();
  let a = "pending", c = 0, u, f = null, d = [], h = [];
  typeof r == "function" && h.push(r);
  function p() {
    f && (clearTimeout(f), f = null);
  }
  function m() {
    a === "pending" && (a = "aborted"), p(), d.forEach((w) => {
      w.status === "pending" && (w.status = "aborted");
    }), d = [];
  }
  function g(w, A) {
    A && (h = []), typeof w == "function" && h.push(w);
  }
  function y() {
    return {
      startTime: l,
      payload: e,
      status: a,
      queriesSent: c,
      queriesPending: d.length,
      subscribe: g,
      abort: m
    };
  }
  function k() {
    a = "failed", h.forEach((w) => {
      w(void 0, u);
    });
  }
  function C() {
    d.forEach((w) => {
      w.status === "pending" && (w.status = "aborted");
    }), d = [];
  }
  function N(w, A, Q) {
    const E = A !== "success";
    switch (d = d.filter((Z) => Z !== w), a) {
      case "pending":
        break;
      case "failed":
        if (E || !n.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (A === "abort") {
      u = Q, k();
      return;
    }
    if (E) {
      u = Q, d.length || (o.length ? I() : k());
      return;
    }
    if (p(), C(), !n.random) {
      const Z = n.resources.indexOf(w.resource);
      Z !== -1 && Z !== n.index && (n.index = Z);
    }
    a = "completed", h.forEach((Z) => {
      Z(Q);
    });
  }
  function I() {
    if (a !== "pending")
      return;
    p();
    const w = o.shift();
    if (w === void 0) {
      if (d.length) {
        f = setTimeout(() => {
          p(), a === "pending" && (C(), k());
        }, n.timeout);
        return;
      }
      k();
      return;
    }
    const A = {
      status: "pending",
      resource: w,
      callback: (Q, E) => {
        N(A, Q, E);
      }
    };
    d.push(A), c++, f = setTimeout(I, n.rotate), t(w, e, A.callback);
  }
  return setTimeout(I), y;
}
function vo(n) {
  const e = {
    ...yc,
    ...n
  };
  let t = [];
  function r() {
    t = t.filter((l) => l().status === "pending");
  }
  function i(l, a, c) {
    const u = bc(
      e,
      l,
      a,
      (f, d) => {
        r(), c && c(f, d);
      }
    );
    return t.push(u), u;
  }
  function s(l) {
    return t.find((a) => l(a)) || null;
  }
  return {
    query: i,
    find: s,
    setIndex: (l) => {
      e.index = l;
    },
    getIndex: () => e.index,
    cleanup: r
  };
}
function ji() {
}
const ar = /* @__PURE__ */ Object.create(null);
function kc(n) {
  if (!ar[n]) {
    const e = hi(n);
    if (!e)
      return;
    const t = vo(e), r = {
      config: e,
      redundancy: t
    };
    ar[n] = r;
  }
  return ar[n];
}
function xc(n, e, t) {
  let r, i;
  if (typeof n == "string") {
    const s = Br(n);
    if (!s)
      return t(void 0, 424), ji;
    i = s.send;
    const o = kc(n);
    o && (r = o.redundancy);
  } else {
    const s = fi(n);
    if (s) {
      r = vo(s);
      const o = n.resources ? n.resources[0] : "", l = Br(o);
      l && (i = l.send);
    }
  }
  return !r || !i ? (t(void 0, 424), ji) : r.query(e, i, t)().abort;
}
const Wi = "iconify2", Yt = "iconify", No = Yt + "-count", Ji = Yt + "-version", Eo = 36e5, Sc = 168, wc = 50;
function Lr(n, e) {
  try {
    return n.getItem(e);
  } catch {
  }
}
function pi(n, e, t) {
  try {
    return n.setItem(e, t), !0;
  } catch {
  }
}
function qi(n, e) {
  try {
    n.removeItem(e);
  } catch {
  }
}
function zr(n, e) {
  return pi(n, No, e.toString());
}
function Fr(n) {
  return parseInt(Lr(n, No)) || 0;
}
const jn = {
  local: !0,
  session: !0
}, Ao = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let mi = !1;
function Mc(n) {
  mi = n;
}
let dn = typeof window > "u" ? {} : window;
function Io(n) {
  const e = n + "Storage";
  try {
    if (dn && dn[e] && typeof dn[e].length == "number")
      return dn[e];
  } catch {
  }
  jn[n] = !1;
}
function Do(n, e) {
  const t = Io(n);
  if (!t)
    return;
  const r = Lr(t, Ji);
  if (r !== Wi) {
    if (r) {
      const l = Fr(t);
      for (let a = 0; a < l; a++)
        qi(t, Yt + a.toString());
    }
    pi(t, Ji, Wi), zr(t, 0);
    return;
  }
  const i = Math.floor(Date.now() / Eo) - Sc, s = (l) => {
    const a = Yt + l.toString(), c = Lr(t, a);
    if (typeof c == "string") {
      try {
        const u = JSON.parse(c);
        if (typeof u == "object" && typeof u.cached == "number" && u.cached > i && typeof u.provider == "string" && typeof u.data == "object" && typeof u.data.prefix == "string" && // Valid item: run callback
        e(u, l))
          return !0;
      } catch {
      }
      qi(t, a);
    }
  };
  let o = Fr(t);
  for (let l = o - 1; l >= 0; l--)
    s(l) || (l === o - 1 ? (o--, zr(t, o)) : Ao[n].add(l));
}
function Po() {
  if (!mi) {
    Mc(!0);
    for (const n in jn)
      Do(n, (e) => {
        const t = e.data, r = e.provider, i = t.prefix, s = lt(
          r,
          i
        );
        if (!ui(s, t).length)
          return !1;
        const o = t.lastModified || -1;
        return s.lastModifiedCached = s.lastModifiedCached ? Math.min(s.lastModifiedCached, o) : o, !0;
      });
  }
}
function Cc(n, e) {
  const t = n.lastModifiedCached;
  if (
    // Matches or newer
    t && t >= e
  )
    return t === e;
  if (n.lastModifiedCached = e, t)
    for (const r in jn)
      Do(r, (i) => {
        const s = i.data;
        return i.provider !== n.provider || s.prefix !== n.prefix || s.lastModified === e;
      });
  return !0;
}
function Tc(n, e) {
  mi || Po();
  function t(r) {
    let i;
    if (!jn[r] || !(i = Io(r)))
      return;
    const s = Ao[r];
    let o;
    if (s.size)
      s.delete(o = Array.from(s).shift());
    else if (o = Fr(i), o >= wc || !zr(i, o + 1))
      return;
    const l = {
      cached: Math.floor(Date.now() / Eo),
      provider: n.provider,
      data: e
    };
    return pi(
      i,
      Yt + o.toString(),
      JSON.stringify(l)
    );
  }
  e.lastModified && !Cc(n, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), t("local") || t("session"));
}
function Ki() {
}
function Oc(n) {
  n.iconsLoaderFlag || (n.iconsLoaderFlag = !0, setTimeout(() => {
    n.iconsLoaderFlag = !1, hc(n);
  }));
}
function vc(n, e) {
  n.iconsToLoad ? n.iconsToLoad = n.iconsToLoad.concat(e).sort() : n.iconsToLoad = e, n.iconsQueueFlag || (n.iconsQueueFlag = !0, setTimeout(() => {
    n.iconsQueueFlag = !1;
    const { provider: t, prefix: r } = n, i = n.iconsToLoad;
    delete n.iconsToLoad;
    let s;
    if (!i || !(s = Br(t)))
      return;
    s.prepare(t, r, i).forEach((l) => {
      xc(t, l, (a) => {
        if (typeof a != "object")
          l.icons.forEach((c) => {
            n.missing.add(c);
          });
        else
          try {
            const c = ui(
              n,
              a
            );
            if (!c.length)
              return;
            const u = n.pendingIcons;
            u && c.forEach((f) => {
              u.delete(f);
            }), Tc(n, a);
          } catch (c) {
            console.error(c);
          }
        Oc(n);
      });
    });
  }));
}
const Nc = (n, e) => {
  const t = gc(n, !0, Mo()), r = dc(t);
  if (!r.pending.length) {
    let a = !0;
    return e && setTimeout(() => {
      a && e(
        r.loaded,
        r.missing,
        r.pending,
        Ki
      );
    }), () => {
      a = !1;
    };
  }
  const i = /* @__PURE__ */ Object.create(null), s = [];
  let o, l;
  return r.pending.forEach((a) => {
    const { provider: c, prefix: u } = a;
    if (u === l && c === o)
      return;
    o = c, l = u, s.push(lt(c, u));
    const f = i[c] || (i[c] = /* @__PURE__ */ Object.create(null));
    f[u] || (f[u] = []);
  }), r.pending.forEach((a) => {
    const { provider: c, prefix: u, name: f } = a, d = lt(c, u), h = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    h.has(f) || (h.add(f), i[c][u].push(f));
  }), s.forEach((a) => {
    const { provider: c, prefix: u } = a;
    i[c][u].length && vc(a, i[c][u]);
  }), e ? mc(e, r, s) : Ki;
};
function Ec(n, e) {
  const t = {
    ...n
  };
  for (const r in e) {
    const i = e[r], s = typeof i;
    r in Co ? (i === null || i && (s === "string" || s === "number")) && (t[r] = i) : s === typeof t[r] && (t[r] = r === "rotate" ? i % 4 : i);
  }
  return t;
}
const Ac = /[\s,]+/;
function Ic(n, e) {
  e.split(Ac).forEach((t) => {
    switch (t.trim()) {
      case "horizontal":
        n.hFlip = !0;
        break;
      case "vertical":
        n.vFlip = !0;
        break;
    }
  });
}
function Dc(n, e = 0) {
  const t = n.replace(/^-?[0-9.]*/, "");
  function r(i) {
    for (; i < 0; )
      i += 4;
    return i % 4;
  }
  if (t === "") {
    const i = parseInt(n);
    return isNaN(i) ? 0 : r(i);
  } else if (t !== n) {
    let i = 0;
    switch (t) {
      case "%":
        i = 25;
        break;
      case "deg":
        i = 90;
    }
    if (i) {
      let s = parseFloat(n.slice(0, n.length - t.length));
      return isNaN(s) ? 0 : (s = s / i, s % 1 === 0 ? r(s) : 0);
    }
  }
  return e;
}
function Pc(n, e) {
  let t = n.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in e)
    t += " " + r + '="' + e[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + t + ">" + n + "</svg>";
}
function Rc(n) {
  return n.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function $c(n) {
  return "data:image/svg+xml," + Rc(n);
}
function Bc(n) {
  return 'url("' + $c(n) + '")';
}
const Ui = {
  ...To,
  inline: !1
}, Lc = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, zc = {
  display: "inline-block"
}, Vr = {
  "background-color": "currentColor"
}, Ro = {
  "background-color": "transparent"
}, Gi = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, Yi = {
  "-webkit-mask": Vr,
  mask: Vr,
  background: Ro
};
for (const n in Yi) {
  const e = Yi[n];
  for (const t in Gi)
    e[n + "-" + t] = Gi[t];
}
function Fc(n) {
  return n + (n.match(/^[-0-9.]+$/) ? "px" : "");
}
function Vc(n, e) {
  const t = Ec(Ui, e), r = e.mode || "svg", i = r === "svg" ? { ...Lc } : {};
  n.body.indexOf("xlink:") === -1 && delete i["xmlns:xlink"];
  let s = typeof e.style == "string" ? e.style : "";
  for (let y in e) {
    const k = e[y];
    if (k !== void 0)
      switch (y) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          t[y] = k === !0 || k === "true" || k === 1;
          break;
        case "flip":
          typeof k == "string" && Ic(t, k);
          break;
        case "color":
          s = s + (s.length > 0 && s.trim().slice(-1) !== ";" ? ";" : "") + "color: " + k + "; ";
          break;
        case "rotate":
          typeof k == "string" ? t[y] = Dc(k) : typeof k == "number" && (t[y] = k);
          break;
        case "ariaHidden":
        case "aria-hidden":
          k !== !0 && k !== "true" && delete i["aria-hidden"];
          break;
        default:
          if (y.slice(0, 3) === "on:")
            break;
          Ui[y] === void 0 && (i[y] = k);
      }
  }
  const o = Qa(n, t), l = o.attributes;
  if (t.inline && (s = "vertical-align: -0.125em; " + s), r === "svg") {
    Object.assign(i, l), s !== "" && (i.style = s);
    let y = 0, k = e.id;
    return typeof k == "string" && (k = k.replace(/-/g, "_")), {
      svg: !0,
      attributes: i,
      body: nc(o.body, k ? () => k + "ID" + y++ : "iconifySvelte")
    };
  }
  const { body: a, width: c, height: u } = n, f = r === "mask" || (r === "bg" ? !1 : a.indexOf("currentColor") !== -1), d = Pc(a, {
    ...l,
    width: c + "",
    height: u + ""
  }), p = {
    "--svg": Bc(d)
  }, m = (y) => {
    const k = l[y];
    k && (p[y] = Fc(k));
  };
  m("width"), m("height"), Object.assign(p, zc, f ? Vr : Ro);
  let g = "";
  for (const y in p)
    g += y + ": " + p[y] + ";";
  return i.style = g + s, {
    svg: !1,
    attributes: i
  };
}
Mo(!0);
rc("", fc);
if (typeof document < "u" && typeof window < "u") {
  Po();
  const n = window;
  if (n.IconifyPreload !== void 0) {
    const e = n.IconifyPreload, t = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((r) => {
      try {
        // Check if item is an object and not null/array
        (typeof r != "object" || r === null || r instanceof Array || // Check for 'icons' and 'prefix'
        typeof r.icons != "object" || typeof r.prefix != "string" || // Add icon set
        !Ja(r)) && console.error(t);
      } catch {
        console.error(t);
      }
    });
  }
  if (n.IconifyProviders !== void 0) {
    const e = n.IconifyProviders;
    if (typeof e == "object" && e !== null)
      for (let t in e) {
        const r = "IconifyProviders[" + t + "] is invalid.";
        try {
          const i = e[t];
          if (typeof i != "object" || !i || i.resources === void 0)
            continue;
          ic(t, i) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
function _c(n, e, t, r, i) {
  function s() {
    e.loading && (e.loading.abort(), e.loading = null);
  }
  if (typeof n == "object" && n !== null && typeof n.body == "string")
    return e.name = "", s(), { data: { ...Hn, ...n } };
  let o;
  if (typeof n != "string" || (o = _n(n, !1, !0)) === null)
    return s(), null;
  const l = ja(o);
  if (!l)
    return t && (!e.loading || e.loading.name !== n) && (s(), e.name = "", e.loading = {
      name: n,
      abort: Nc([o], r)
    }), null;
  s(), e.name !== n && (e.name = n, i && !e.destroyed && i(n));
  const a = ["iconify"];
  return o.prefix !== "" && a.push("iconify--" + o.prefix), o.provider !== "" && a.push("iconify--" + o.provider), { data: l, classes: a };
}
function Hc(n, e) {
  return n ? Vc({
    ...Hn,
    ...n
  }, e) : null;
}
function Xi(n) {
  let e;
  function t(s, o) {
    return (
      /*data*/
      s[0].svg ? Wc : jc
    );
  }
  let r = t(n), i = r(n);
  return {
    c() {
      i.c(), e = go();
    },
    m(s, o) {
      i.m(s, o), B(s, e, o);
    },
    p(s, o) {
      r === (r = t(s)) && i ? i.p(s, o) : (i.d(1), i = r(s), i && (i.c(), i.m(e.parentNode, e)));
    },
    d(s) {
      s && $(e), i.d(s);
    }
  };
}
function jc(n) {
  let e, t = [
    /*data*/
    n[0].attributes
  ], r = {};
  for (let i = 0; i < t.length; i += 1)
    r = Kt(r, t[i]);
  return {
    c() {
      e = R("span"), Bi(e, r);
    },
    m(i, s) {
      B(i, e, s);
    },
    p(i, s) {
      Bi(e, r = ko(t, [s & /*data*/
      1 && /*data*/
      i[0].attributes]));
    },
    d(i) {
      i && $(e);
    }
  };
}
function Wc(n) {
  let e, t = (
    /*data*/
    n[0].body + ""
  ), r = [
    /*data*/
    n[0].attributes
  ], i = {};
  for (let s = 0; s < r.length; s += 1)
    i = Kt(i, r[s]);
  return {
    c() {
      e = ka("svg"), Li(e, i);
    },
    m(s, o) {
      B(s, e, o), e.innerHTML = t;
    },
    p(s, o) {
      o & /*data*/
      1 && t !== (t = /*data*/
      s[0].body + "") && (e.innerHTML = t), Li(e, i = ko(r, [o & /*data*/
      1 && /*data*/
      s[0].attributes]));
    },
    d(s) {
      s && $(e);
    }
  };
}
function Jc(n) {
  let e, t = (
    /*data*/
    n[0] && Xi(n)
  );
  return {
    c() {
      t && t.c(), e = go();
    },
    m(r, i) {
      t && t.m(r, i), B(r, e, i);
    },
    p(r, [i]) {
      /*data*/
      r[0] ? t ? t.p(r, i) : (t = Xi(r), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    i: H,
    o: H,
    d(r) {
      r && $(e), t && t.d(r);
    }
  };
}
function qc(n, e, t) {
  const r = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: !1
  };
  let i = !1, s = 0, o;
  const l = (c) => {
    typeof e.onLoad == "function" && e.onLoad(c), Ca()("load", { icon: c });
  };
  function a() {
    t(3, s++, s);
  }
  return ci(() => {
    t(2, i = !0);
  }), yo(() => {
    t(1, r.destroyed = !0, r), r.loading && (r.loading.abort(), t(1, r.loading = null, r));
  }), n.$$set = (c) => {
    t(6, e = Kt(Kt({}, e), $i(c)));
  }, n.$$.update = () => {
    {
      const c = _c(e.icon, r, i, a, l);
      t(0, o = c ? Hc(c.data, e) : null), o && c.classes && t(
        0,
        o.attributes.class = (typeof e.class == "string" ? e.class + " " : "") + c.classes.join(" "),
        o
      );
    }
  }, e = $i(e), [o, r, i, s];
}
class Kc extends be {
  constructor(e) {
    super(), ye(this, e, qc, Jc, ge, {});
  }
}
function G(n) {
  this.content = n;
}
G.prototype = {
  constructor: G,
  find: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === n)
        return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(n) {
    var e = this.find(n);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(n, e, t) {
    var r = t && t != n ? this.remove(t) : this, i = r.find(n), s = r.content.slice();
    return i == -1 ? s.push(t || n, e) : (s[i + 1] = e, t && (s[i] = t)), new G(s);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(n) {
    var e = this.find(n);
    if (e == -1)
      return this;
    var t = this.content.slice();
    return t.splice(e, 2), new G(t);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(n, e) {
    return new G([n, e].concat(this.remove(n).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(n, e) {
    var t = this.remove(n).content.slice();
    return t.push(n, e), new G(t);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(n, e, t) {
    var r = this.remove(e), i = r.content.slice(), s = r.find(n);
    return i.splice(s == -1 ? i.length : s, 0, e, t), new G(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      n(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(n) {
    return n = G.from(n), n.size ? new G(n.content.concat(this.subtract(n).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(n) {
    return n = G.from(n), n.size ? new G(this.subtract(n).content.concat(n.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(n) {
    var e = this;
    n = G.from(n);
    for (var t = 0; t < n.content.length; t += 2)
      e = e.remove(n.content[t]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var n = {};
    return this.forEach(function(e, t) {
      n[e] = t;
    }), n;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
G.from = function(n) {
  if (n instanceof G)
    return n;
  var e = [];
  if (n)
    for (var t in n)
      e.push(t, n[t]);
  return new G(e);
};
function $o(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), s = e.child(r);
    if (i == s) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(s))
      return t;
    if (i.isText && i.text != s.text) {
      for (let o = 0; i.text[o] == s.text[o]; o++)
        t++;
      return t;
    }
    if (i.content.size || s.content.size) {
      let o = $o(i.content, s.content, t + 1);
      if (o != null)
        return o;
    }
    t += i.nodeSize;
  }
}
function Bo(n, e, t, r) {
  for (let i = n.childCount, s = e.childCount; ; ) {
    if (i == 0 || s == 0)
      return i == s ? null : { a: t, b: r };
    let o = n.child(--i), l = e.child(--s), a = o.nodeSize;
    if (o == l) {
      t -= a, r -= a;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: t, b: r };
    if (o.isText && o.text != l.text) {
      let c = 0, u = Math.min(o.text.length, l.text.length);
      for (; c < u && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, r--;
      return { a: t, b: r };
    }
    if (o.content.size || l.content.size) {
      let c = Bo(o.content, l.content, t - 1, r - 1);
      if (c)
        return c;
    }
    t -= a, r -= a;
  }
}
class b {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, r, i = 0, s) {
    for (let o = 0, l = 0; l < t; o++) {
      let a = this.content[o], c = l + a.nodeSize;
      if (c > e && r(a, i + l, s || null, o) !== !1 && a.content.size) {
        let u = l + 1;
        a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, t - u), r, i + u);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, r, i) {
    let s = "", o = !0;
    return this.nodesBetween(e, t, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (o ? o = !1 : s += r), s += c;
    }, 0), s;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), s = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), s = 1); s < e.content.length; s++)
      i.push(e.content[s]);
    return new b(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let s = 0, o = 0; o < t; s++) {
        let l = this.content[s], a = o + l.nodeSize;
        a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), r.push(l), i += l.nodeSize), o = a;
      }
    return new b(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? b.empty : e == 0 && t == this.content.length ? this : new b(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), s = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new b(i, s);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new b([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new b(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return $o(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return Bo(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. (Not public.)
  */
  findIndex(e, t = -1) {
    if (e == 0)
      return hn(0, e);
    if (e == this.size)
      return hn(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, i = 0; ; r++) {
      let s = this.child(r), o = i + s.nodeSize;
      if (o >= e)
        return o == e || t > 0 ? hn(r + 1, o) : hn(r, i);
      i = o;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return b.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new b(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return b.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      r += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (t || (t = e.slice(0, i)), t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s);
    }
    return new b(t || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return b.empty;
    if (e instanceof b)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new b([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
b.empty = new b([], 0);
const cr = { index: 0, offset: 0 };
function hn(n, e) {
  return cr.index = n, cr.offset = e, cr;
}
function Tn(n, e) {
  if (n === e)
    return !0;
  if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(n);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (n.length != e.length)
      return !1;
    for (let r = 0; r < n.length; r++)
      if (!Tn(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !Tn(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
let D = class _r {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, r = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.eq(s))
        return e;
      if (this.type.excludes(s.type))
        t || (t = e.slice(0, i));
      else {
        if (s.type.excludes(this.type))
          return e;
        !r && s.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(s);
      }
    }
    return t || (t = e.slice()), r || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && Tn(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[t.type];
    if (!r)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    return r.create(t.attrs);
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(t[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return _r.none;
    if (e instanceof _r)
      return [e];
    let t = e.slice();
    return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
};
D.none = [];
class On extends Error {
}
class x {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let r = zo(this.content, e + this.openStart, t);
    return r && new x(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new x(Lo(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return x.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new x(b.fromJSON(e, t.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild)
      r++;
    for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild)
      i++;
    return new x(e, r, i);
  }
}
x.empty = new x(b.empty, 0, 0);
function Lo(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), s = n.maybeChild(r), { index: o, offset: l } = n.findIndex(t);
  if (i == e || s.isText) {
    if (l != t && !n.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != o)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, s.copy(Lo(s.content, e - i - 1, t - i - 1)));
}
function zo(n, e, t, r) {
  let { index: i, offset: s } = n.findIndex(e), o = n.maybeChild(i);
  if (s == e || o.isText)
    return r && !r.canReplace(i, i, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
  let l = zo(o.content, e - s - 1, t);
  return l && n.replaceChild(i, o.copy(l));
}
function Uc(n, e, t) {
  if (t.openStart > n.depth)
    throw new On("Inserted content deeper than insertion position");
  if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new On("Inconsistent open depths");
  return Fo(n, e, t, 0);
}
function Fo(n, e, t, r) {
  let i = n.index(r), s = n.node(r);
  if (i == e.index(r) && r < n.depth - t.openStart) {
    let o = Fo(n, e, t, r + 1);
    return s.copy(s.content.replaceChild(i, o));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
      let o = n.parent, l = o.content;
      return nt(o, l.cut(0, n.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: o, end: l } = Gc(t, n);
      return nt(s, _o(n, o, l, e, r));
    }
  else
    return nt(s, vn(n, e, r));
}
function Vo(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new On("Cannot join " + e.type.name + " onto " + n.type.name);
}
function Hr(n, e, t) {
  let r = n.node(t);
  return Vo(r, e.node(t)), r;
}
function tt(n, e) {
  let t = e.length - 1;
  t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function jt(n, e, t, r) {
  let i = (e || n).node(t), s = 0, o = e ? e.index(t) : i.childCount;
  n && (s = n.index(t), n.depth > t ? s++ : n.textOffset && (tt(n.nodeAfter, r), s++));
  for (let l = s; l < o; l++)
    tt(i.child(l), r);
  e && e.depth == t && e.textOffset && tt(e.nodeBefore, r);
}
function nt(n, e) {
  return n.type.checkContent(e), n.copy(e);
}
function _o(n, e, t, r, i) {
  let s = n.depth > i && Hr(n, e, i + 1), o = r.depth > i && Hr(t, r, i + 1), l = [];
  return jt(null, n, i, l), s && o && e.index(i) == t.index(i) ? (Vo(s, o), tt(nt(s, _o(n, e, t, r, i + 1)), l)) : (s && tt(nt(s, vn(n, e, i + 1)), l), jt(e, t, i, l), o && tt(nt(o, vn(t, r, i + 1)), l)), jt(r, null, i, l), new b(l);
}
function vn(n, e, t) {
  let r = [];
  if (jt(null, n, t, r), n.depth > t) {
    let i = Hr(n, e, t + 1);
    tt(nt(i, vn(n, e, t + 1)), r);
  }
  return jt(e, null, t, r), new b(r);
}
function Gc(n, e) {
  let t = e.depth - n.openStart, i = e.node(t).copy(n.content);
  for (let s = t - 1; s >= 0; s--)
    i = e.node(s).copy(b.from(i));
  return {
    start: i.resolveNoCache(n.openStart + t),
    end: i.resolveNoCache(i.content.size - n.openEnd - t)
  };
}
class Xt {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.path = t, this.parentOffset = r, this.depth = t.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(t);
    return r ? e.child(t).cut(r) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let r = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let s = 0; s < e; s++)
      i += r.child(s).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return D.none;
    if (this.textOffset)
      return e.child(t).marks;
    let r = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!r) {
      let l = r;
      r = i, i = l;
    }
    let s = r.marks;
    for (var o = 0; o < s.length; o++)
      s[o].type.spec.inclusive === !1 && (!i || !s[o].isInSet(i.marks)) && (s = s[o--].removeFromSet(s));
    return s;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let r = t.marks, i = e.parent.maybeChild(e.index());
    for (var s = 0; s < r.length; s++)
      r[s].type.spec.inclusive === !1 && (!i || !r[s].isInSet(i.marks)) && (r = r[s--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!t || t(this.node(r))))
        return new Nn(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let r = [], i = 0, s = t;
    for (let o = e; ; ) {
      let { index: l, offset: a } = o.content.findIndex(s), c = s - a;
      if (r.push(o, l, i + a), !c || (o = o.child(l), o.isText))
        break;
      s = c - 1, i += a + 1;
    }
    return new Xt(t, r, s);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    for (let i = 0; i < ur.length; i++) {
      let s = ur[i];
      if (s.pos == t && s.doc == e)
        return s;
    }
    let r = ur[fr] = Xt.resolve(e, t);
    return fr = (fr + 1) % Yc, r;
  }
}
let ur = [], fr = 0, Yc = 12;
class Nn {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const Xc = /* @__PURE__ */ Object.create(null);
let rt = class jr {
  /**
  @internal
  */
  constructor(e, t, r, i = D.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = r || b.empty;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, t, r, i = 0) {
    this.content.nodesBetween(e, t, r, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.
  */
  textBetween(e, t, r, i) {
    return this.content.textBetween(e, t, r, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, t, r) {
    return this.type == e && Tn(this.attrs, t || e.defaultAttrs || Xc) && D.sameSet(this.marks, r || D.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new jr(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new jr(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, t = this.content.size, r = !1) {
    if (e == t)
      return x.empty;
    let i = this.resolve(e), s = this.resolve(t), o = r ? 0 : i.sharedDepth(t), l = i.start(o), c = i.node(o).content.cut(i.pos - l, s.pos - l);
    return new x(c, i.depth - o, s.depth - o);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, t, r) {
    return Uc(this.resolve(e), this.resolve(t), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: r, offset: i } = t.content.findIndex(e);
      if (t = t.maybeChild(r), !t)
        return null;
      if (i == e || t.isText)
        return t;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: t, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(t), index: t, offset: r };
    let i = this.content.child(t - 1);
    return { node: i, index: t - 1, offset: r - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return Xt.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return Xt.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, r) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (s) => (r.isInSet(s.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Ho(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, t, r = b.empty, i = 0, s = r.childCount) {
    let o = this.contentMatchAt(e).matchFragment(r, i, s), l = o && o.matchFragment(this.content, t);
    if (!l || !l.validEnd)
      return !1;
    for (let a = i; a < s; a++)
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let s = this.contentMatchAt(e).matchType(r), o = s && s.matchFragment(this.content, t);
    return o ? o.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise error when they do not.
  */
  check() {
    this.type.checkContent(this.content);
    let e = D.none;
    for (let t = 0; t < this.marks.length; t++)
      e = this.marks[t].addToSet(e);
    if (!D.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r = null;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, r);
    }
    let i = b.fromJSON(e, t.content);
    return e.nodeType(t.type).create(t.attrs, i, r);
  }
};
rt.prototype.text = void 0;
class En extends rt {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    if (super(e, t, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Ho(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new En(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new En(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function Ho(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    e = n[t].type.name + "(" + e + ")";
  return e;
}
class at {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, t) {
    let r = new Qc(e, t);
    if (r.next == null)
      return at.empty;
    let i = jo(r);
    r.next && r.err("Unexpected trailing text");
    let s = su(iu(i));
    return ou(s, r), s;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, t = 0, r = e.childCount) {
    let i = this;
    for (let s = t; i && s < r; s++)
      i = i.matchType(e.child(s).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[t].type == e.next[r].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, t = !1, r = 0) {
    let i = [this];
    function s(o, l) {
      let a = o.matchFragment(e, r);
      if (a && (!t || a.validEnd))
        return b.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < o.next.length; c++) {
        let { type: u, next: f } = o.next[c];
        if (!(u.isText || u.hasRequiredAttrs()) && i.indexOf(f) == -1) {
          i.push(f);
          let d = s(f, l.concat(u));
          if (d)
            return d;
        }
      }
      return null;
    }
    return s(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), s = i.match;
      if (s.matchType(e)) {
        let o = [];
        for (let l = i; l.type; l = l.via)
          o.push(l.type);
        return o.reverse();
      }
      for (let o = 0; o < s.next.length; o++) {
        let { type: l, next: a } = s.next[o];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!i.type || a.validEnd) && (r.push({ match: l.contentMatch, type: l, via: i }), t[l.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function t(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && t(r.next[i].next);
    }
    return t(this), e.map((r, i) => {
      let s = i + (r.validEnd ? "*" : " ") + " ";
      for (let o = 0; o < r.next.length; o++)
        s += (o ? ", " : "") + r.next[o].type.name + "->" + e.indexOf(r.next[o].next);
      return s;
    }).join(`
`);
  }
}
at.empty = new at(!0);
class Qc {
  constructor(e, t) {
    this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function jo(n) {
  let e = [];
  do
    e.push(Zc(n));
  while (n.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function Zc(n) {
  let e = [];
  do
    e.push(eu(n));
  while (n.next && n.next != ")" && n.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function eu(n) {
  let e = ru(n);
  for (; ; )
    if (n.eat("+"))
      e = { type: "plus", expr: e };
    else if (n.eat("*"))
      e = { type: "star", expr: e };
    else if (n.eat("?"))
      e = { type: "opt", expr: e };
    else if (n.eat("{"))
      e = tu(n, e);
    else
      break;
  return e;
}
function Qi(n) {
  /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
  let e = Number(n.next);
  return n.pos++, e;
}
function tu(n, e) {
  let t = Qi(n), r = t;
  return n.eat(",") && (n.next != "}" ? r = Qi(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: r, expr: e };
}
function nu(n, e) {
  let t = n.nodeTypes, r = t[e];
  if (r)
    return [r];
  let i = [];
  for (let s in t) {
    let o = t[s];
    o.groups.indexOf(e) > -1 && i.push(o);
  }
  return i.length == 0 && n.err("No node type or group '" + e + "' found"), i;
}
function ru(n) {
  if (n.eat("(")) {
    let e = jo(n);
    return n.eat(")") || n.err("Missing closing paren"), e;
  } else if (/\W/.test(n.next))
    n.err("Unexpected token '" + n.next + "'");
  else {
    let e = nu(n, n.next).map((t) => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t }));
    return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function iu(n) {
  let e = [[]];
  return i(s(n, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function r(o, l, a) {
    let c = { term: a, to: l };
    return e[o].push(c), c;
  }
  function i(o, l) {
    o.forEach((a) => a.to = l);
  }
  function s(o, l) {
    if (o.type == "choice")
      return o.exprs.reduce((a, c) => a.concat(s(c, l)), []);
    if (o.type == "seq")
      for (let a = 0; ; a++) {
        let c = s(o.exprs[a], l);
        if (a == o.exprs.length - 1)
          return c;
        i(c, l = t());
      }
    else if (o.type == "star") {
      let a = t();
      return r(l, a), i(s(o.expr, a), a), [r(a)];
    } else if (o.type == "plus") {
      let a = t();
      return i(s(o.expr, l), a), i(s(o.expr, a), a), [r(a)];
    } else {
      if (o.type == "opt")
        return [r(l)].concat(s(o.expr, l));
      if (o.type == "range") {
        let a = l;
        for (let c = 0; c < o.min; c++) {
          let u = t();
          i(s(o.expr, a), u), a = u;
        }
        if (o.max == -1)
          i(s(o.expr, a), a);
        else
          for (let c = o.min; c < o.max; c++) {
            let u = t();
            r(a, u), i(s(o.expr, a), u), a = u;
          }
        return [r(a)];
      } else {
        if (o.type == "name")
          return [r(l, void 0, o.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function Wo(n, e) {
  return e - n;
}
function Zi(n, e) {
  let t = [];
  return r(e), t.sort(Wo);
  function r(i) {
    let s = n[i];
    if (s.length == 1 && !s[0].term)
      return r(s[0].to);
    t.push(i);
    for (let o = 0; o < s.length; o++) {
      let { term: l, to: a } = s[o];
      !l && t.indexOf(a) == -1 && r(a);
    }
  }
}
function su(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(Zi(n, 0));
  function t(r) {
    let i = [];
    r.forEach((o) => {
      n[o].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let u = 0; u < i.length; u++)
          i[u][0] == l && (c = i[u][1]);
        Zi(n, a).forEach((u) => {
          c || i.push([l, c = []]), c.indexOf(u) == -1 && c.push(u);
        });
      });
    });
    let s = e[r.join(",")] = new at(r.indexOf(n.length - 1) > -1);
    for (let o = 0; o < i.length; o++) {
      let l = i[o][1].sort(Wo);
      s.next.push({ type: i[o][0], next: e[l.join(",")] || t(l) });
    }
    return s;
  }
}
function ou(n, e) {
  for (let t = 0, r = [n]; t < r.length; t++) {
    let i = r[t], s = !i.validEnd, o = [];
    for (let l = 0; l < i.next.length; l++) {
      let { type: a, next: c } = i.next[l];
      o.push(a.name), s && !(a.isText || a.hasRequiredAttrs()) && (s = !1), r.indexOf(c) == -1 && r.push(c);
    }
    s && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function Jo(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let r = n[t];
    if (!r.hasDefault)
      return null;
    e[t] = r.default;
  }
  return e;
}
function qo(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r in n) {
    let i = e && e[r];
    if (i === void 0) {
      let s = n[r];
      if (s.hasDefault)
        i = s.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    t[r] = i;
  }
  return t;
}
function Ko(n) {
  let e = /* @__PURE__ */ Object.create(null);
  if (n)
    for (let t in n)
      e[t] = new lu(n[t]);
  return e;
}
let es = class Uo {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.name = e, this.schema = t, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = Ko(r.attrs), this.defaultAttrs = Jo(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == at.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : qo(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, t, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new rt(this, this.computeAttrs(e), b.from(t), D.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, t, r) {
    return t = b.from(t), this.checkContent(t), new rt(this, this.computeAttrs(e), t, D.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, t, r) {
    if (e = this.computeAttrs(e), t = b.from(t), t.size) {
      let o = this.contentMatch.fillBefore(t);
      if (!o)
        return null;
      t = o.append(t);
    }
    let i = this.contentMatch.matchFragment(t), s = i && i.fillBefore(b.empty, !0);
    return s ? new rt(this, e, t.append(s), D.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let t;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? t && t.push(e[r]) : t || (t = e.slice(0, r));
    return t ? t.length ? t : D.none : e;
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((s, o) => r[s] = new Uo(s, t, o));
    let i = t.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let s in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
class lu {
  constructor(e) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(e, "default"), this.default = e.default;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Wn {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    this.name = e, this.rank = t, this.schema = r, this.spec = i, this.attrs = Ko(i.attrs), this.excluded = null;
    let s = Jo(this.attrs);
    this.instance = s ? new D(this, s) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new D(this, qo(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((s, o) => r[s] = new Wn(s, i++, t, o)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class au {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let i in e)
      t[i] = e[i];
    t.nodes = G.from(e.nodes), t.marks = G.from(e.marks || {}), this.nodes = es.compile(this.spec.nodes, this), this.marks = Wn.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let s = this.nodes[i], o = s.spec.content || "", l = s.spec.marks;
      if (s.contentMatch = r[o] || (r[o] = at.parse(o, this.nodes)), s.inlineContent = s.contentMatch.inlineContent, s.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!s.isInline || !s.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = s;
      }
      s.markSet = l == "_" ? null : l ? ts(this, l.split(" ")) : l == "" || !s.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let s = this.marks[i], o = s.spec.excludes;
      s.excluded = o == null ? [s] : o == "" ? [] : ts(this, o.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, t = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof es) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else
      throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, r, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, t) {
    let r = this.nodes.text;
    return new En(r, r.defaultAttrs, e, D.setFrom(t));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  /**
  Deserialize a node from its JSON representation. This method is
  bound.
  */
  nodeFromJSON(e) {
    return rt.fromJSON(this, e);
  }
  /**
  Deserialize a mark from its JSON representation. This method is
  bound.
  */
  markFromJSON(e) {
    return D.fromJSON(this, e);
  }
  /**
  @internal
  */
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function ts(n, e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], s = n.marks[i], o = s;
    if (s)
      t.push(s);
    else
      for (let l in n.marks) {
        let a = n.marks[l];
        (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && t.push(o = a);
      }
    if (!o)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return t;
}
function cu(n) {
  return n.tag != null;
}
function uu(n) {
  return n.style != null;
}
class Nt {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [], t.forEach((r) => {
      cu(r) ? this.tags.push(r) : uu(r) && this.styles.push(r);
    }), this.normalizeLists = !this.tags.some((r) => {
      if (!/^(ul|ol)\b/.test(r.tag) || !r.node)
        return !1;
      let i = e.nodes[r.node];
      return i.contentMatch.matchType(i);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, t = {}) {
    let r = new rs(this, t, !1);
    return r.addAll(e, t.from, t.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, t = {}) {
    let r = new rs(this, t, !0);
    return r.addAll(e, t.from, t.to), x.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let s = this.tags[i];
      if (hu(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || t.matchesContext(s.context))) {
        if (s.getAttrs) {
          let o = s.getAttrs(e);
          if (o === !1)
            continue;
          s.attrs = o || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, t, r, i) {
    for (let s = i ? this.styles.indexOf(i) + 1 : 0; s < this.styles.length; s++) {
      let o = this.styles[s], l = o.style;
      if (!(l.indexOf(e) != 0 || o.context && !r.matchesContext(o.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
        if (o.getAttrs) {
          let a = o.getAttrs(t);
          if (a === !1)
            continue;
          o.attrs = a || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let t = [];
    function r(i) {
      let s = i.priority == null ? 50 : i.priority, o = 0;
      for (; o < t.length; o++) {
        let l = t[o];
        if ((l.priority == null ? 50 : l.priority) < s)
          break;
      }
      t.splice(o, 0, i);
    }
    for (let i in e.marks) {
      let s = e.marks[i].spec.parseDOM;
      s && s.forEach((o) => {
        r(o = is(o)), o.mark || o.ignore || o.clearMark || (o.mark = i);
      });
    }
    for (let i in e.nodes) {
      let s = e.nodes[i].spec.parseDOM;
      s && s.forEach((o) => {
        r(o = is(o)), o.node || o.ignore || o.mark || (o.node = i);
      });
    }
    return t;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.ParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new Nt(e, Nt.schemaRules(e)));
  }
}
const Go = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, fu = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, Yo = { ol: !0, ul: !0 }, An = 1, In = 2, Wt = 4;
function ns(n, e, t) {
  return e != null ? (e ? An : 0) | (e === "full" ? In : 0) : n && n.whitespace == "pre" ? An | In : t & ~Wt;
}
class pn {
  constructor(e, t, r, i, s, o, l) {
    this.type = e, this.attrs = t, this.marks = r, this.pendingMarks = i, this.solid = s, this.options = l, this.content = [], this.activeMarks = D.none, this.stashMarks = [], this.match = o || (l & Wt ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(b.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & An)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let s = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = s.withText(s.text.slice(0, s.text.length - i[0].length));
      }
    }
    let t = b.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(b.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  popFromStashMark(e) {
    for (let t = this.stashMarks.length - 1; t >= 0; t--)
      if (e.eq(this.stashMarks[t]))
        return this.stashMarks.splice(t, 1)[0];
  }
  applyPending(e) {
    for (let t = 0, r = this.pendingMarks; t < r.length; t++) {
      let i = r[t];
      (this.type ? this.type.allowsMarkType(i.type) : pu(i.type, e)) && !i.isInSet(this.activeMarks) && (this.activeMarks = i.addToSet(this.activeMarks), this.pendingMarks = i.removeFromSet(this.pendingMarks));
    }
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Go.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class rs {
  constructor(e, t, r) {
    this.parser = e, this.options = t, this.isOpen = r, this.open = 0;
    let i = t.topNode, s, o = ns(null, t.preserveWhitespace, 0) | (r ? Wt : 0);
    i ? s = new pn(i.type, i.attrs, D.none, D.none, !0, t.topMatch || i.type.contentMatch, o) : r ? s = new pn(null, null, D.none, D.none, !0, null, o) : s = new pn(e.schema.topNodeType, null, D.none, D.none, !0, null, o), this.nodes = [s], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e) {
    e.nodeType == 3 ? this.addTextNode(e) : e.nodeType == 1 && this.addElement(e);
  }
  withStyleRules(e, t) {
    let r = e.style;
    if (!r || !r.length)
      return t();
    let i = this.readStyles(e.style);
    if (!i)
      return;
    let [s, o] = i, l = this.top;
    for (let a = 0; a < o.length; a++)
      this.removePendingMark(o[a], l);
    for (let a = 0; a < s.length; a++)
      this.addPendingMark(s[a]);
    t();
    for (let a = 0; a < s.length; a++)
      this.removePendingMark(s[a], l);
    for (let a = 0; a < o.length; a++)
      this.addPendingMark(o[a]);
  }
  addTextNode(e) {
    let t = e.nodeValue, r = this.top;
    if (r.options & In || r.inlineContext(e) || /[^ \t\r\n\u000c]/.test(t)) {
      if (r.options & An)
        r.options & In ? t = t.replace(/\r\n?/g, `
`) : t = t.replace(/\r?\n|\r/g, " ");
      else if (t = t.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(t) && this.open == this.nodes.length - 1) {
        let i = r.content[r.content.length - 1], s = e.previousSibling;
        (!i || s && s.nodeName == "BR" || i.isText && /[ \t\r\n\u000c]$/.test(i.text)) && (t = t.slice(1));
      }
      t && this.insertNode(this.parser.schema.text(t)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t) {
    let r = e.nodeName.toLowerCase(), i;
    Yo.hasOwnProperty(r) && this.parser.normalizeLists && du(e);
    let s = this.options.ruleFromNode && this.options.ruleFromNode(e) || (i = this.parser.matchTag(e, this, t));
    if (s ? s.ignore : fu.hasOwnProperty(r))
      this.findInside(e), this.ignoreFallback(e);
    else if (!s || s.skip || s.closeParent) {
      s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (e = s.skip);
      let o, l = this.top, a = this.needsBlock;
      if (Go.hasOwnProperty(r))
        l.content.length && l.content[0].isInline && this.open && (this.open--, l = this.top), o = !0, l.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e);
        return;
      }
      s && s.skip ? this.addAll(e) : this.withStyleRules(e, () => this.addAll(e)), o && this.sync(l), this.needsBlock = a;
    } else
      this.withStyleRules(e, () => {
        this.addElementByRule(e, s, s.consuming === !1 ? i : void 0);
      });
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`));
  }
  // Called for ignored nodes
  ignoreFallback(e) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"));
  }
  // Run any style parser associated with the node's styles. Either
  // return an array of marks, or null to indicate some of the styles
  // had a rule with `ignore` set.
  readStyles(e) {
    let t = D.none, r = D.none;
    for (let i = 0, s = e.length; i < s; i++) {
      let o = e.item(i);
      for (let l = void 0; ; ) {
        let a = this.parser.matchStyle(o, e.getPropertyValue(o), this, l);
        if (!a)
          break;
        if (a.ignore)
          return null;
        if (a.clearMark ? this.top.pendingMarks.concat(this.top.activeMarks).forEach((c) => {
          a.clearMark(c) && (r = c.addToSet(r));
        }) : t = this.parser.schema.marks[a.mark].create(a.attrs).addToSet(t), a.consuming === !1)
          l = a;
        else
          break;
      }
    }
    return [t, r];
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, t, r) {
    let i, s, o;
    t.node ? (s = this.parser.schema.nodes[t.node], s.isLeaf ? this.insertNode(s.create(t.attrs)) || this.leafFallback(e) : i = this.enter(s, t.attrs || null, t.preserveWhitespace)) : (o = this.parser.schema.marks[t.mark].create(t.attrs), this.addPendingMark(o));
    let l = this.top;
    if (s && s.isLeaf)
      this.findInside(e);
    else if (r)
      this.addElement(e, r);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a));
    else {
      let a = e;
      typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a);
    }
    i && this.sync(l) && this.open--, o && this.removePendingMark(o, l);
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, r) {
    let i = t || 0;
    for (let s = t ? e.childNodes[t] : e.firstChild, o = r == null ? null : e.childNodes[r]; s != o; s = s.nextSibling, ++i)
      this.findAtPoint(e, i), this.addDOM(s);
    this.findAtPoint(e, i);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e) {
    let t, r;
    for (let i = this.open; i >= 0; i--) {
      let s = this.nodes[i], o = s.findWrapping(e);
      if (o && (!t || t.length > o.length) && (t = o, r = s, !o.length) || s.solid)
        break;
    }
    if (!t)
      return !1;
    this.sync(r);
    for (let i = 0; i < t.length; i++)
      this.enterInner(t[i], null, !1);
    return !0;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let t = this.textblockFromContext();
      t && this.enterInner(t);
    }
    if (this.findPlace(e)) {
      this.closeExtra();
      let t = this.top;
      t.applyPending(e.type), t.match && (t.match = t.match.matchType(e.type));
      let r = t.activeMarks;
      for (let i = 0; i < e.marks.length; i++)
        (!t.type || t.type.allowsMarkType(e.marks[i].type)) && (r = e.marks[i].addToSet(r));
      return t.content.push(e.mark(r)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, r) {
    let i = this.findPlace(e.create(t));
    return i && this.enterInner(e, t, !0, r), i;
  }
  // Open a node of the given type
  enterInner(e, t = null, r = !1, i) {
    this.closeExtra();
    let s = this.top;
    s.applyPending(e), s.match = s.match && s.match.matchType(e);
    let o = ns(e, i, s.options);
    s.options & Wt && s.content.length == 0 && (o |= Wt), this.nodes.push(new pn(e, t, s.activeMarks, s.pendingMarks, r, null, o)), this.open++;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen);
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--)
      if (this.nodes[t] == e)
        return this.open = t, !0;
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let r = this.nodes[t].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == t && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, r) {
    if (e != t && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), s = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), o = (l, a) => {
      for (; l >= 0; l--) {
        let c = t[l];
        if (c == "") {
          if (l == t.length - 1 || l == 0)
            continue;
          for (; a >= s; a--)
            if (o(l - 1, a))
              return !0;
          return !1;
        } else {
          let u = a > 0 || a == 0 && i ? this.nodes[a].type : r && a >= s ? r.node(a - s).type : null;
          if (!u || u.name != c && u.groups.indexOf(c) == -1)
            return !1;
          a--;
        }
      }
      return !0;
    };
    return o(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let r = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let t in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[t];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
  addPendingMark(e) {
    let t = mu(e, this.top.pendingMarks);
    t && this.top.stashMarks.push(t), this.top.pendingMarks = e.addToSet(this.top.pendingMarks);
  }
  removePendingMark(e, t) {
    for (let r = this.open; r >= 0; r--) {
      let i = this.nodes[r];
      if (i.pendingMarks.lastIndexOf(e) > -1)
        i.pendingMarks = e.removeFromSet(i.pendingMarks);
      else {
        i.activeMarks = e.removeFromSet(i.activeMarks);
        let o = i.popFromStashMark(e);
        o && i.type && i.type.allowsMarkType(o.type) && (i.activeMarks = o.addToSet(i.activeMarks));
      }
      if (i == t)
        break;
    }
  }
}
function du(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && Yo.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
  }
}
function hu(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function is(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function pu(n, e) {
  let t = e.schema.nodes;
  for (let r in t) {
    let i = t[r];
    if (!i.allowsMarkType(n))
      continue;
    let s = [], o = (l) => {
      s.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: u } = l.edge(a);
        if (c == e || s.indexOf(u) < 0 && o(u))
          return !0;
      }
    };
    if (o(i.contentMatch))
      return !0;
  }
}
function mu(n, e) {
  for (let t = 0; t < e.length; t++)
    if (n.eq(e[t]))
      return e[t];
}
class ve {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, t) {
    this.nodes = e, this.marks = t;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, t = {}, r) {
    r || (r = dr(t).createDocumentFragment());
    let i = r, s = [];
    return e.forEach((o) => {
      if (s.length || o.marks.length) {
        let l = 0, a = 0;
        for (; l < s.length && a < o.marks.length; ) {
          let c = o.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(s[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < s.length; )
          i = s.pop()[1];
        for (; a < o.marks.length; ) {
          let c = o.marks[a++], u = this.serializeMark(c, o.isInline, t);
          u && (s.push([c, i]), i.appendChild(u.dom), i = u.contentDOM || u.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(o, t));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, t) {
    let { dom: r, contentDOM: i } = ve.renderSpec(dr(t), this.nodes[e.type.name](e));
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, i);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, t = {}) {
    let r = this.serializeNodeInner(e, t);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let s = this.serializeMark(e.marks[i], e.isInline, t);
      s && ((s.contentDOM || s.dom).appendChild(r), r = s.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, t, r = {}) {
    let i = this.marks[e.type.name];
    return i && ve.renderSpec(dr(r), i(e, t));
  }
  /**
  Render an [output spec](https://prosemirror.net/docs/ref/#model.DOMOutputSpec) to a DOM node. If
  the spec has a hole (zero) in it, `contentDOM` will point at the
  node with the hole.
  */
  static renderSpec(e, t, r = null) {
    if (typeof t == "string")
      return { dom: e.createTextNode(t) };
    if (t.nodeType != null)
      return { dom: t };
    if (t.dom && t.dom.nodeType != null)
      return t;
    let i = t[0], s = i.indexOf(" ");
    s > 0 && (r = i.slice(0, s), i = i.slice(s + 1));
    let o, l = r ? e.createElementNS(r, i) : e.createElement(i), a = t[1], c = 1;
    if (a && typeof a == "object" && a.nodeType == null && !Array.isArray(a)) {
      c = 2;
      for (let u in a)
        if (a[u] != null) {
          let f = u.indexOf(" ");
          f > 0 ? l.setAttributeNS(u.slice(0, f), u.slice(f + 1), a[u]) : l.setAttribute(u, a[u]);
        }
    }
    for (let u = c; u < t.length; u++) {
      let f = t[u];
      if (f === 0) {
        if (u < t.length - 1 || u > c)
          throw new RangeError("Content hole must be the only child of its parent node");
        return { dom: l, contentDOM: l };
      } else {
        let { dom: d, contentDOM: h } = ve.renderSpec(e, f, r);
        if (l.appendChild(d), h) {
          if (o)
            throw new RangeError("Multiple content holes");
          o = h;
        }
      }
    }
    return { dom: l, contentDOM: o };
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new ve(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let t = ss(e.nodes);
    return t.text || (t.text = (r) => r.text), t;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return ss(e.marks);
  }
}
function ss(n) {
  let e = {};
  for (let t in n) {
    let r = n[t].spec.toDOM;
    r && (e[t] = r);
  }
  return e;
}
function dr(n) {
  return n.document || window.document;
}
const Xo = 65535, Qo = Math.pow(2, 16);
function gu(n, e) {
  return n + e * Qo;
}
function ls(n) {
  return n & Xo;
}
function yu(n) {
  return (n - (n & Xo)) / Qo;
}
const Zo = 1, el = 2, Sn = 4, tl = 8;
class Wr {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.delInfo = t, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & tl) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (Zo | Sn)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (el | Sn)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Sn) > 0;
  }
}
class fe {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && fe.empty)
      return fe.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, r = ls(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + t + yu(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0, s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], u = this.ranges[l + o], f = a + c;
      if (e <= f) {
        let d = c ? e == a ? -1 : e == f ? 1 : t : t, h = a + i + (d < 0 ? 0 : u);
        if (r)
          return h;
        let p = e == (t < 0 ? a : f) ? null : gu(l / 3, e - a), m = e == a ? el : e == f ? Zo : Sn;
        return (t < 0 ? e != a : e != f) && (m |= tl), new Wr(h, m, p);
      }
      i += u - c;
    }
    return r ? e + i : new Wr(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let r = 0, i = ls(t), s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], u = a + c;
      if (e <= u && l == i * 3)
        return !0;
      r += this.ranges[l + o] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, s = 0; i < this.ranges.length; i += 3) {
      let o = this.ranges[i], l = o - (this.inverted ? s : 0), a = o + (this.inverted ? 0 : s), c = this.ranges[i + t], u = this.ranges[i + r];
      e(l, l + c, a, a + u), s += u - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new fe(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? fe.empty : new fe(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
fe.empty = new fe([]);
class xt {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e = [], t, r = 0, i = e.length) {
    this.maps = e, this.mirror = t, this.from = r, this.to = i;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, t = this.maps.length) {
    return new xt(this.maps, this.mirror, e, t);
  }
  /**
  @internal
  */
  copy() {
    return new xt(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, t) {
    this.to = this.maps.push(e), t != null && this.setMirror(this.maps.length - 1, t);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let t = 0, r = this.maps.length; t < e.maps.length; t++) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t], i != null && i < t ? r + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++)
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, t) {
    this.mirror || (this.mirror = []), this.mirror.push(e, t);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, r = this.maps.length + e.maps.length; t >= 0; t--) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t].invert(), i != null && i > t ? r - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new xt();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let r = this.from; r < this.to; r++)
      e = this.maps[r].map(e, t);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0;
    for (let s = this.from; s < this.to; s++) {
      let o = this.maps[s], l = o.mapResult(e, t);
      if (l.recover != null) {
        let a = this.getMirror(s);
        if (a != null && a > s && a < this.to) {
          s = a, e = this.maps[a].recover(l.recover);
          continue;
        }
      }
      i |= l.delInfo, e = l.pos;
    }
    return r ? e : new Wr(e, i, null);
  }
}
const hr = /* @__PURE__ */ Object.create(null);
class ne {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return fe.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = hr[t.stepType];
    if (!r)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in hr)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return hr[e] = t, t.prototype.jsonID = e, t;
  }
}
class _ {
  /**
  @internal
  */
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new _(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new _(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, r, i) {
    try {
      return _.ok(e.replace(t, r, i));
    } catch (s) {
      if (s instanceof On)
        return _.fail(s.message);
      throw s;
    }
  }
}
function gi(n, e, t) {
  let r = [];
  for (let i = 0; i < n.childCount; i++) {
    let s = n.child(i);
    s.content.size && (s = s.copy(gi(s.content, e, s))), s.isInline && (s = e(s, t, i)), r.push(s);
  }
  return b.fromArray(r);
}
class Fe extends ne {
  /**
  Create a mark step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), s = new x(gi(t.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), i), t.openStart, t.openEnd);
    return _.fromReplace(e, this.from, this.to, s);
  }
  invert() {
    return new Ne(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new Fe(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Fe && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Fe(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new Fe(t.from, t.to, e.markFromJSON(t.mark));
  }
}
ne.jsonID("addMark", Fe);
class Ne extends ne {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new x(gi(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return _.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new Fe(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new Ne(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Ne && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Ne(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new Ne(t.from, t.to, e.markFromJSON(t.mark));
  }
}
ne.jsonID("removeMark", Ne);
class Ve extends ne {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return _.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return _.fromReplace(e, this.pos, this.pos + 1, new x(b.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(r))
            return new Ve(this.pos, t.marks[i]);
        return new Ve(this.pos, this.mark);
      }
    }
    return new Et(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Ve(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new Ve(t.pos, e.markFromJSON(t.mark));
  }
}
ne.jsonID("addNodeMark", Ve);
class Et extends ne {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return _.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return _.fromReplace(e, this.pos, this.pos + 1, new x(b.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new Ve(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Et(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new Et(t.pos, e.markFromJSON(t.mark));
  }
}
ne.jsonID("removeNodeMark", Et);
class J extends ne {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, r, i = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && Jr(e, this.from, this.to) ? _.fail("Structure replace would overwrite content") : _.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new fe([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new J(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new J(t.pos, Math.max(t.pos, r.pos), this.slice);
  }
  merge(e) {
    if (!(e instanceof J) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? x.empty : new x(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new J(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? x.empty : new x(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new J(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new J(t.from, t.to, x.fromJSON(e, t.slice), !!t.structure);
  }
}
ne.jsonID("replace", J);
class q extends ne {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, r, i, s, o, l = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = s, this.insert = o, this.structure = l;
  }
  apply(e) {
    if (this.structure && (Jr(e, this.from, this.gapFrom) || Jr(e, this.gapTo, this.to)))
      return _.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return _.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? _.fromReplace(e, this.from, this.to, r) : _.fail("Content does not fit in gap");
  }
  getMap() {
    return new fe([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new q(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1), s = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || i < t.pos || s > r.pos ? null : new q(t.pos, r.pos, i, s, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new q(t.from, t.to, t.gapFrom, t.gapTo, x.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
ne.jsonID("replaceAround", q);
function Jr(n, e, t) {
  let r = n.resolve(e), i = t - e, s = r.depth;
  for (; i > 0 && s > 0 && r.indexAfter(s) == r.node(s).childCount; )
    s--, i--;
  if (i > 0) {
    let o = r.node(s).maybeChild(r.indexAfter(s));
    for (; i > 0; ) {
      if (!o || o.isLeaf)
        return !0;
      o = o.firstChild, i--;
    }
  }
  return !1;
}
function bu(n, e, t, r) {
  let i = [], s = [], o, l;
  n.doc.nodesBetween(e, t, (a, c, u) => {
    if (!a.isInline)
      return;
    let f = a.marks;
    if (!r.isInSet(f) && u.type.allowsMarkType(r.type)) {
      let d = Math.max(c, e), h = Math.min(c + a.nodeSize, t), p = r.addToSet(f);
      for (let m = 0; m < f.length; m++)
        f[m].isInSet(p) || (o && o.to == d && o.mark.eq(f[m]) ? o.to = h : i.push(o = new Ne(d, h, f[m])));
      l && l.to == d ? l.to = h : s.push(l = new Fe(d, h, r));
    }
  }), i.forEach((a) => n.step(a)), s.forEach((a) => n.step(a));
}
function ku(n, e, t, r) {
  let i = [], s = 0;
  n.doc.nodesBetween(e, t, (o, l) => {
    if (!o.isInline)
      return;
    s++;
    let a = null;
    if (r instanceof Wn) {
      let c = o.marks, u;
      for (; u = r.isInSet(c); )
        (a || (a = [])).push(u), c = u.removeFromSet(c);
    } else
      r ? r.isInSet(o.marks) && (a = [r]) : a = o.marks;
    if (a && a.length) {
      let c = Math.min(l + o.nodeSize, t);
      for (let u = 0; u < a.length; u++) {
        let f = a[u], d;
        for (let h = 0; h < i.length; h++) {
          let p = i[h];
          p.step == s - 1 && f.eq(i[h].style) && (d = p);
        }
        d ? (d.to = c, d.step = s) : i.push({ style: f, from: Math.max(l, e), to: c, step: s });
      }
    }
  }), i.forEach((o) => n.step(new Ne(o.from, o.to, o.style)));
}
function nl(n, e, t, r = t.contentMatch, i = !0) {
  let s = n.doc.nodeAt(e), o = [], l = e + 1;
  for (let a = 0; a < s.childCount; a++) {
    let c = s.child(a), u = l + c.nodeSize, f = r.matchType(c.type);
    if (!f)
      o.push(new J(l, u, x.empty));
    else {
      r = f;
      for (let d = 0; d < c.marks.length; d++)
        t.allowsMarkType(c.marks[d].type) || n.step(new Ne(l, u, c.marks[d]));
      if (i && c.isText && t.whitespace != "pre") {
        let d, h = /\r?\n|\r/g, p;
        for (; d = h.exec(c.text); )
          p || (p = new x(b.from(t.schema.text(" ", t.allowedMarks(c.marks))), 0, 0)), o.push(new J(l + d.index, l + d.index + d[0].length, p));
      }
    }
    l = u;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(b.empty, !0);
    n.replace(l, l, new x(a, 0, 0));
  }
  for (let a = o.length - 1; a >= 0; a--)
    n.step(o[a]);
}
function xu(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function $t(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth; ; --r) {
    let i = n.$from.node(r), s = n.$from.index(r), o = n.$to.indexAfter(r);
    if (r < n.depth && i.canReplace(s, o, t))
      return r;
    if (r == 0 || i.type.spec.isolating || !xu(i, s, o))
      break;
  }
  return null;
}
function Su(n, e, t) {
  let { $from: r, $to: i, depth: s } = e, o = r.before(s + 1), l = i.after(s + 1), a = o, c = l, u = b.empty, f = 0;
  for (let p = s, m = !1; p > t; p--)
    m || r.index(p) > 0 ? (m = !0, u = b.from(r.node(p).copy(u)), f++) : a--;
  let d = b.empty, h = 0;
  for (let p = s, m = !1; p > t; p--)
    m || i.after(p + 1) < i.end(p) ? (m = !0, d = b.from(i.node(p).copy(d)), h++) : c++;
  n.step(new q(a, c, o, l, new x(u.append(d), f, h), u.size - f, !0));
}
function yi(n, e, t = null, r = n) {
  let i = wu(n, e), s = i && Mu(r, e);
  return s ? i.map(as).concat({ type: e, attrs: t }).concat(s.map(as)) : null;
}
function as(n) {
  return { type: n, attrs: null };
}
function wu(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.contentMatchAt(r).findWrapping(e);
  if (!s)
    return null;
  let o = s.length ? s[0] : e;
  return t.canReplaceWith(r, i, o) ? s : null;
}
function Mu(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.child(r), o = e.contentMatch.findWrapping(s.type);
  if (!o)
    return null;
  let a = (o.length ? o[o.length - 1] : e).contentMatch;
  for (let c = r; a && c < i; c++)
    a = a.matchType(t.child(c).type);
  return !a || !a.validEnd ? null : o;
}
function Cu(n, e, t) {
  let r = b.empty;
  for (let o = t.length - 1; o >= 0; o--) {
    if (r.size) {
      let l = t[o].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = b.from(t[o].type.create(t[o].attrs, r));
  }
  let i = e.start, s = e.end;
  n.step(new q(i, s, i, s, new x(r, 0, 0), t.length, !0));
}
function Tu(n, e, t, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let s = n.steps.length;
  n.doc.nodesBetween(e, t, (o, l) => {
    if (o.isTextblock && !o.hasMarkup(r, i) && Nu(n.doc, n.mapping.slice(s).map(l), r)) {
      let a = null;
      if (r.schema.linebreakReplacement) {
        let d = r.whitespace == "pre", h = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        d && !h ? a = !1 : !d && h && (a = !0);
      }
      a === !1 && vu(n, o, l, s), nl(n, n.mapping.slice(s).map(l, 1), r, void 0, a === null);
      let c = n.mapping.slice(s), u = c.map(l, 1), f = c.map(l + o.nodeSize, 1);
      return n.step(new q(u, f, u + 1, f - 1, new x(b.from(r.create(i, null, o.marks)), 0, 0), 1, !0)), a === !0 && Ou(n, o, l, s), !1;
    }
  });
}
function Ou(n, e, t, r) {
  e.forEach((i, s) => {
    if (i.isText) {
      let o, l = /\r?\n|\r/g;
      for (; o = l.exec(i.text); ) {
        let a = n.mapping.slice(r).map(t + 1 + s + o.index);
        n.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function vu(n, e, t, r) {
  e.forEach((i, s) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let o = n.mapping.slice(r).map(t + 1 + s);
      n.replaceWith(o, o + 1, e.type.schema.text(`
`));
    }
  });
}
function Nu(n, e, t) {
  let r = n.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, t);
}
function Eu(n, e, t, r, i) {
  let s = n.doc.nodeAt(e);
  if (!s)
    throw new RangeError("No node at given position");
  t || (t = s.type);
  let o = t.create(r, null, i || s.marks);
  if (s.isLeaf)
    return n.replaceWith(e, e + s.nodeSize, o);
  if (!t.validContent(s.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new q(e, e + s.nodeSize, e + 1, e + s.nodeSize - 1, new x(b.from(o), 0, 0), 1, !0));
}
function St(n, e, t = 1, r) {
  let i = n.resolve(e), s = i.depth - t, o = r && r[r.length - 1] || i.parent;
  if (s < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, u = t - 2; c > s; c--, u--) {
    let f = i.node(c), d = i.index(c);
    if (f.type.spec.isolating)
      return !1;
    let h = f.content.cutByIndex(d, f.childCount), p = r && r[u + 1];
    p && (h = h.replaceChild(0, p.type.create(p.attrs)));
    let m = r && r[u] || f;
    if (!f.canReplace(d + 1, f.childCount) || !m.type.validContent(h))
      return !1;
  }
  let l = i.indexAfter(s), a = r && r[0];
  return i.node(s).canReplaceWith(l, l, a ? a.type : i.node(s + 1).type);
}
function Au(n, e, t = 1, r) {
  let i = n.doc.resolve(e), s = b.empty, o = b.empty;
  for (let l = i.depth, a = i.depth - t, c = t - 1; l > a; l--, c--) {
    s = b.from(i.node(l).copy(s));
    let u = r && r[c];
    o = b.from(u ? u.type.create(u.attrs, o) : i.node(l).copy(o));
  }
  n.step(new J(e, e, new x(s.append(o), t, t), !0));
}
function qe(n, e) {
  let t = n.resolve(e), r = t.index();
  return rl(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function rl(n, e) {
  return !!(n && e && !n.isLeaf && n.canAppend(e));
}
function Jn(n, e, t = -1) {
  let r = n.resolve(e);
  for (let i = r.depth; ; i--) {
    let s, o, l = r.index(i);
    if (i == r.depth ? (s = r.nodeBefore, o = r.nodeAfter) : t > 0 ? (s = r.node(i + 1), l++, o = r.node(i).maybeChild(l)) : (s = r.node(i).maybeChild(l - 1), o = r.node(i + 1)), s && !s.isTextblock && rl(s, o) && r.node(i).canReplace(l, l + 1))
      return e;
    if (i == 0)
      break;
    e = t < 0 ? r.before(i) : r.after(i);
  }
}
function Iu(n, e, t) {
  let r = new J(e - t, e + t, x.empty, !0);
  n.step(r);
}
function Du(n, e, t) {
  let r = n.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), t))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.index(i);
      if (r.node(i).canReplaceWith(s, s, t))
        return r.before(i + 1);
      if (s > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.indexAfter(i);
      if (r.node(i).canReplaceWith(s, s, t))
        return r.after(i + 1);
      if (s < r.node(i).childCount)
        return null;
    }
  return null;
}
function il(n, e, t) {
  let r = n.resolve(e);
  if (!t.content.size)
    return e;
  let i = t.content;
  for (let s = 0; s < t.openStart; s++)
    i = i.firstChild.content;
  for (let s = 1; s <= (t.openStart == 0 && t.size ? 2 : 1); s++)
    for (let o = r.depth; o >= 0; o--) {
      let l = o == r.depth ? 0 : r.pos <= (r.start(o + 1) + r.end(o + 1)) / 2 ? -1 : 1, a = r.index(o) + (l > 0 ? 1 : 0), c = r.node(o), u = !1;
      if (s == 1)
        u = c.canReplace(a, a, i);
      else {
        let f = c.contentMatchAt(a).findWrapping(i.firstChild.type);
        u = f && c.canReplaceWith(a, a, f[0]);
      }
      if (u)
        return l == 0 ? r.pos : l < 0 ? r.before(o + 1) : r.after(o + 1);
    }
  return null;
}
function qn(n, e, t = e, r = x.empty) {
  if (e == t && !r.size)
    return null;
  let i = n.resolve(e), s = n.resolve(t);
  return sl(i, s, r) ? new J(e, t, r) : new Pu(i, s, r).fit();
}
function sl(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class Pu {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = b.empty;
    for (let i = 0; i <= e.depth; i++) {
      let s = e.node(i);
      this.frontier.push({
        type: s.type,
        match: s.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = b.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let s = this.placed, o = r.depth, l = i.depth;
    for (; o && l && s.childCount == 1; )
      s = s.firstChild.content, o--, l--;
    let a = new x(s, o, l);
    return e > -1 ? new q(r.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || r.pos != this.$to.pos ? new J(r.pos, i.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let s = t.firstChild;
      if (t.childCount > 1 && (i = 0), s.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      t = s.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, s = null;
        r ? (s = pr(this.unplaced.content, r - 1).firstChild, i = s.content) : i = this.unplaced.content;
        let o = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], u, f = null;
          if (t == 1 && (o ? c.matchType(o.type) || (f = c.fillBefore(b.from(o), !1)) : s && a.compatibleContent(s.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, inject: f };
          if (t == 2 && o && (u = c.findWrapping(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, wrap: u };
          if (s && c.matchType(s.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = pr(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new x(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = pr(e, t);
    if (i.childCount <= 1 && t > 0) {
      let s = e.size - t <= t + i.size;
      this.unplaced = new x(zt(e, t - 1, 1), t - 1, s ? t - 1 : r);
    } else
      this.unplaced = new x(zt(e, t, 1), t, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: s }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (s)
      for (let m = 0; m < s.length; m++)
        this.openFrontierNode(s[m]);
    let o = this.unplaced, l = r ? r.content : o.content, a = o.openStart - e, c = 0, u = [], { match: f, type: d } = this.frontier[t];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        u.push(i.child(m));
      f = f.matchFragment(i);
    }
    let h = l.size + e - (o.content.size - o.openEnd);
    for (; c < l.childCount; ) {
      let m = l.child(c), g = f.matchType(m.type);
      if (!g)
        break;
      c++, (c > 1 || a == 0 || m.content.size) && (f = g, u.push(ol(m.mark(d.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let p = c == l.childCount;
    p || (h = -1), this.placed = Ft(this.placed, t, b.from(u)), this.frontier[t].match = f, p && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, g = l; m < h; m++) {
      let y = g.lastChild;
      this.frontier.push({ type: y.type, match: y.contentMatchAt(y.childCount) }), g = y.content;
    }
    this.unplaced = p ? e == 0 ? x.empty : new x(zt(o.content, e - 1, 1), e - 1, h < 0 ? o.openEnd : e - 1) : new x(zt(o.content, e, c), o.openStart, o.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !mr(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e:
      for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
        let { match: r, type: i } = this.frontier[t], s = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), o = mr(e, t, i, r, s);
        if (o) {
          for (let l = t - 1; l >= 0; l--) {
            let { match: a, type: c } = this.frontier[l], u = mr(e, l, c, a, !0);
            if (!u || u.childCount)
              continue e;
          }
          return { depth: t, fit: o, move: s ? e.doc.resolve(e.after(t + 1)) : e };
        }
      }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = Ft(this.placed, t.depth, t.fit)), e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), s = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, s);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = Ft(this.placed, this.depth, b.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(b.empty, !0);
    t.childCount && (this.placed = Ft(this.placed, this.frontier.length, t));
  }
}
function zt(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(zt(n.firstChild.content, e - 1, t)));
}
function Ft(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(Ft(n.lastChild.content, e - 1, t)));
}
function pr(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function ol(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, ol(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(b.empty, !0)))), n.copy(r);
}
function mr(n, e, t, r, i) {
  let s = n.node(e), o = i ? n.indexAfter(e) : n.index(e);
  if (o == s.childCount && !t.compatibleContent(s.type))
    return null;
  let l = r.fillBefore(s.content, !0, o);
  return l && !Ru(t, s.content, o) ? l : null;
}
function Ru(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function $u(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function Bu(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t);
  let i = n.doc.resolve(e), s = n.doc.resolve(t);
  if (sl(i, s, r))
    return n.step(new J(e, t, r));
  let o = al(i, n.doc.resolve(t));
  o[o.length - 1] == 0 && o.pop();
  let l = -(i.depth + 1);
  o.unshift(l);
  for (let d = i.depth, h = i.pos - 1; d > 0; d--, h--) {
    let p = i.node(d).type.spec;
    if (p.defining || p.definingAsContext || p.isolating)
      break;
    o.indexOf(d) > -1 ? l = d : i.before(d) == h && o.splice(1, 0, -d);
  }
  let a = o.indexOf(l), c = [], u = r.openStart;
  for (let d = r.content, h = 0; ; h++) {
    let p = d.firstChild;
    if (c.push(p), h == r.openStart)
      break;
    d = p.content;
  }
  for (let d = u - 1; d >= 0; d--) {
    let h = c[d], p = $u(h.type);
    if (p && !h.sameMarkup(i.node(Math.abs(l) - 1)))
      u = d;
    else if (p || !h.type.isTextblock)
      break;
  }
  for (let d = r.openStart; d >= 0; d--) {
    let h = (d + u + 1) % (r.openStart + 1), p = c[h];
    if (p)
      for (let m = 0; m < o.length; m++) {
        let g = o[(m + a) % o.length], y = !0;
        g < 0 && (y = !1, g = -g);
        let k = i.node(g - 1), C = i.index(g - 1);
        if (k.canReplaceWith(C, C, p.type, p.marks))
          return n.replace(i.before(g), y ? s.after(g) : t, new x(ll(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let f = n.steps.length;
  for (let d = o.length - 1; d >= 0 && (n.replace(e, t, r), !(n.steps.length > f)); d--) {
    let h = o[d];
    h < 0 || (e = i.before(h), t = s.after(h));
  }
}
function ll(n, e, t, r, i) {
  if (e < t) {
    let s = n.firstChild;
    n = n.replaceChild(0, s.copy(ll(s.content, e + 1, t, r, s)));
  }
  if (e > r) {
    let s = i.contentMatchAt(0), o = s.fillBefore(n).append(n);
    n = o.append(s.matchFragment(o).fillBefore(b.empty, !0));
  }
  return n;
}
function Lu(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let i = Du(n.doc, e, r.type);
    i != null && (e = t = i);
  }
  n.replaceRange(e, t, new x(b.from(r), 0, 0));
}
function zu(n, e, t) {
  let r = n.doc.resolve(e), i = n.doc.resolve(t), s = al(r, i);
  for (let o = 0; o < s.length; o++) {
    let l = s[o], a = o == s.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return n.delete(r.start(l), i.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1))))
      return n.delete(r.before(l), i.after(l));
  }
  for (let o = 1; o <= r.depth && o <= i.depth; o++)
    if (e - r.start(o) == r.depth - o && t > r.end(o) && i.end(o) - t != i.depth - o)
      return n.delete(r.before(o), t);
  n.delete(e, t);
}
function al(n, e) {
  let t = [], r = Math.min(n.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let s = n.start(i);
    if (s < n.pos - (n.depth - i) || e.end(i) > e.pos + (e.depth - i) || n.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (s == e.start(i) || i == n.depth && i == e.depth && n.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == s - 1) && t.push(i);
  }
  return t;
}
class wt extends ne {
  /**
  Construct an attribute step.
  */
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return _.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in t.attrs)
      r[s] = t.attrs[s];
    r[this.attr] = this.value;
    let i = t.type.create(r, null, t.marks);
    return _.fromReplace(e, this.pos, this.pos + 1, new x(b.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return fe.empty;
  }
  invert(e) {
    return new wt(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new wt(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new wt(t.pos, t.attr, t.value);
  }
}
ne.jsonID("attr", wt);
class Qt extends ne {
  /**
  Construct an attribute step.
  */
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      t[i] = e.attrs[i];
    t[this.attr] = this.value;
    let r = e.type.create(t, e.content, e.marks);
    return _.ok(r);
  }
  getMap() {
    return fe.empty;
  }
  invert(e) {
    return new Qt(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new Qt(t.attr, t.value);
  }
}
ne.jsonID("docAttr", Qt);
let At = class extends Error {
};
At = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
At.prototype = Object.create(Error.prototype);
At.prototype.constructor = At;
At.prototype.name = "TransformError";
class Fu {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new xt();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed)
      throw new At(t.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let t = e.apply(this.doc);
    return t.failed || this.addStep(e, t.doc), t;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, t = e, r = x.empty) {
    let i = qn(this.doc, e, t, r);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, t, r) {
    return this.replace(e, t, new x(b.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, t) {
    return this.replace(e, t, x.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, t, r) {
    return Bu(this, e, t, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, t, r) {
    return Lu(this, e, t, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, t) {
    return zu(this, e, t), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, t) {
    return Su(this, e, t), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, t = 1) {
    return Iu(this, e, t), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, t) {
    return Cu(this, e, t), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, t = e, r, i = null) {
    return Tu(this, e, t, r, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, t, r = null, i) {
    return Eu(this, e, t, r, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, t, r) {
    return this.step(new wt(e, t, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, t) {
    return this.step(new Qt(e, t)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, t) {
    return this.step(new Ve(e, t)), this;
  }
  /**
  Remove a mark (or a mark of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, t) {
    if (!(t instanceof D)) {
      let r = this.doc.nodeAt(e);
      if (!r)
        throw new RangeError("No node at position " + e);
      if (t = t.isInSet(r.marks), !t)
        return this;
    }
    return this.step(new Et(e, t)), this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split.
  */
  split(e, t = 1, r) {
    return Au(this, e, t, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, t, r) {
    return bu(this, e, t, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, t, r) {
    return ku(this, e, t, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, t, r) {
    return nl(this, e, t, r), this;
  }
}
const gr = /* @__PURE__ */ Object.create(null);
class v {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, t, r) {
    this.$anchor = e, this.$head = t, this.ranges = r || [new Vu(e.min(t), e.max(t))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let t = 0; t < e.length; t++)
      if (e[t].$from.pos != e[t].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, t = x.empty) {
    let r = t.content.lastChild, i = null;
    for (let l = 0; l < t.openEnd; l++)
      i = r, r = r.lastChild;
    let s = e.steps.length, o = this.ranges;
    for (let l = 0; l < o.length; l++) {
      let { $from: a, $to: c } = o[l], u = e.mapping.slice(s);
      e.replaceRange(u.map(a.pos), u.map(c.pos), l ? x.empty : t), l == 0 && fs(e, s, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, t) {
    let r = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      let { $from: o, $to: l } = i[s], a = e.mapping.slice(r), c = a.map(o.pos), u = a.map(l.pos);
      s ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, t), fs(e, r, t.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, t, r = !1) {
    let i = e.parent.inlineContent ? new T(e) : mt(e.node(0), e.parent, e.pos, e.index(), t, r);
    if (i)
      return i;
    for (let s = e.depth - 1; s >= 0; s--) {
      let o = t < 0 ? mt(e.node(0), e.node(s), e.before(s + 1), e.index(s), t, r) : mt(e.node(0), e.node(s), e.after(s + 1), e.index(s) + 1, t, r);
      if (o)
        return o;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new Me(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return mt(e, e, 0, 0, 1) || new Me(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return mt(e, e, e.content.size, e.childCount, -1) || new Me(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = gr[t.type];
    if (!r)
      throw new RangeError(`No selection type ${t.type} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, t) {
    if (e in gr)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return gr[e] = t, t.prototype.jsonID = e, t;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return T.between(this.$anchor, this.$head).getBookmark();
  }
}
v.prototype.visible = !0;
class Vu {
  /**
  Create a range.
  */
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let cs = !1;
function us(n) {
  !cs && !n.parent.inlineContent && (cs = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class T extends v {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, t = e) {
    us(e), us(t), super(e, t);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    if (!r.parent.inlineContent)
      return v.near(r);
    let i = e.resolve(t.map(this.anchor));
    return new T(i.parent.inlineContent ? i : r, r);
  }
  replace(e, t = x.empty) {
    if (super.replace(e, t), t == x.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof T && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Kn(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new T(e.resolve(t.anchor), e.resolve(t.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, t, r = t) {
    let i = e.resolve(t);
    return new this(i, r == t ? i : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, t, r) {
    let i = e.pos - t.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let s = v.findFrom(t, r, !0) || v.findFrom(t, -r, !0);
      if (s)
        t = s.$head;
      else
        return v.near(t, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (v.findFrom(e, -r, !0) || v.findFrom(e, r, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new T(e, t);
  }
}
v.jsonID("text", T);
class Kn {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new Kn(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return T.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class M extends v {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let t = e.nodeAfter, r = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, r), this.node = t;
  }
  map(e, t) {
    let { deleted: r, pos: i } = t.mapResult(this.anchor), s = e.resolve(i);
    return r ? v.near(s) : new M(s);
  }
  content() {
    return new x(b.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof M && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new bi(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new M(e.resolve(t.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, t) {
    return new M(e.resolve(t));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
M.prototype.visible = !1;
v.jsonID("node", M);
class bi {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: r } = e.mapResult(this.anchor);
    return t ? new Kn(r, r) : new bi(r);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), r = t.nodeAfter;
    return r && M.isSelectable(r) ? new M(t) : v.near(t);
  }
}
class Me extends v {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = x.empty) {
    if (t == x.empty) {
      e.delete(0, e.doc.content.size);
      let r = v.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new Me(e);
  }
  map(e) {
    return new Me(e);
  }
  eq(e) {
    return e instanceof Me;
  }
  getBookmark() {
    return _u;
  }
}
v.jsonID("all", Me);
const _u = {
  map() {
    return this;
  },
  resolve(n) {
    return new Me(n);
  }
};
function mt(n, e, t, r, i, s = !1) {
  if (e.inlineContent)
    return T.create(n, t);
  for (let o = r - (i > 0 ? 0 : 1); i > 0 ? o < e.childCount : o >= 0; o += i) {
    let l = e.child(o);
    if (l.isAtom) {
      if (!s && M.isSelectable(l))
        return M.create(n, t - (i < 0 ? l.nodeSize : 0));
    } else {
      let a = mt(n, l, t + i, i < 0 ? l.childCount : 0, i, s);
      if (a)
        return a;
    }
    t += l.nodeSize * i;
  }
  return null;
}
function fs(n, e, t) {
  let r = n.steps.length - 1;
  if (r < e)
    return;
  let i = n.steps[r];
  if (!(i instanceof J || i instanceof q))
    return;
  let s = n.mapping.maps[r], o;
  s.forEach((l, a, c, u) => {
    o == null && (o = u);
  }), n.setSelection(v.near(n.doc.resolve(o), t));
}
const ds = 1, mn = 2, hs = 4;
class Hu extends Fu {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | ds) & ~mn, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & ds) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= mn, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return D.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & mn) > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    super.addStep(e, t), this.updated = this.updated & ~mn, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, t = !0) {
    let r = this.selection;
    return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || D.none))), r.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, t, r) {
    let i = this.doc.type.schema;
    if (t == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = t), r = r ?? t, !e)
        return this.deleteRange(t, r);
      let s = this.storedMarks;
      if (!s) {
        let o = this.doc.resolve(t);
        s = r == t ? o.marks() : o.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(t, r, i.text(e, s)), this.selection.empty || this.setSelection(v.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, t) {
    return this.meta[typeof e == "string" ? e : e.key] = t, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= hs, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & hs) > 0;
  }
}
function ps(n, e) {
  return !e || !n ? n : n.bind(e);
}
class Vt {
  constructor(e, t, r) {
    this.name = e, this.init = ps(t.init, r), this.apply = ps(t.apply, r);
  }
}
const ju = [
  new Vt("doc", {
    init(n) {
      return n.doc || n.schema.topNodeType.createAndFill();
    },
    apply(n) {
      return n.doc;
    }
  }),
  new Vt("selection", {
    init(n, e) {
      return n.selection || v.atStart(e.doc);
    },
    apply(n) {
      return n.selection;
    }
  }),
  new Vt("storedMarks", {
    init(n) {
      return n.storedMarks || null;
    },
    apply(n, e, t, r) {
      return r.selection.$cursor ? n.storedMarks : null;
    }
  }),
  new Vt("scrollToSelection", {
    init() {
      return 0;
    },
    apply(n, e) {
      return n.scrolledIntoView ? e + 1 : e;
    }
  })
];
class yr {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = ju.slice(), t && t.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new Vt(r.key, r.spec.state, r));
    });
  }
}
class yt {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, t = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != t) {
        let i = this.config.plugins[r];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let t = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let s = !1;
      for (let o = 0; o < this.config.plugins.length; o++) {
        let l = this.config.plugins[o];
        if (l.spec.appendTransaction) {
          let a = i ? i[o].n : 0, c = i ? i[o].state : this, u = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, c, r);
          if (u && r.filterTransaction(u, o)) {
            if (u.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let f = 0; f < this.config.plugins.length; f++)
                i.push(f < o ? { state: r, n: t.length } : { state: this, n: 0 });
            }
            t.push(u), r = r.applyInner(u), s = !0;
          }
          i && (i[o] = { state: r, n: t.length });
        }
      }
      if (!s)
        return { state: r, transactions: t };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let t = new yt(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let s = r[i];
      t[s.name] = s.apply(e, this[s.name], this, t);
    }
    return t;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new Hu(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let t = new yr(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new yt(t);
    for (let i = 0; i < t.fields.length; i++)
      r[t.fields[i].name] = t.fields[i].init(e, r);
    return r;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let t = new yr(this.schema, e.plugins), r = t.fields, i = new yt(t);
    for (let s = 0; s < r.length; s++) {
      let o = r[s].name;
      i[o] = this.hasOwnProperty(o) ? this[o] : r[s].init(e, i);
    }
    return i;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (t.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], s = i.spec.state;
        s && s.toJSON && (t[r] = s.toJSON.call(i, this[i.key]));
      }
    return t;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, t, r) {
    if (!t)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new yr(e.schema, e.plugins), s = new yt(i);
    return i.fields.forEach((o) => {
      if (o.name == "doc")
        s.doc = rt.fromJSON(e.schema, t.doc);
      else if (o.name == "selection")
        s.selection = v.fromJSON(s.doc, t.selection);
      else if (o.name == "storedMarks")
        t.storedMarks && (s.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let l in r) {
            let a = r[l], c = a.spec.state;
            if (a.key == o.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
              s[o.name] = c.fromJSON.call(a, e, t[l], s);
              return;
            }
          }
        s[o.name] = o.init(e, s);
      }
    }), s;
  }
}
function cl(n, e, t) {
  for (let r in n) {
    let i = n[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = cl(i, e, {})), t[r] = i;
  }
  return t;
}
class ke {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && cl(e.props, this, this.props), this.key = e.key ? e.key.key : ul("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const br = /* @__PURE__ */ Object.create(null);
function ul(n) {
  return n in br ? n + "$" + ++br[n] : (br[n] = 0, n + "$");
}
class Ke {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = ul(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Y = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, Zt = function(n) {
  let e = n.assignedSlot || n.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let qr = null;
const Pe = function(n, e, t) {
  let r = qr || (qr = document.createRange());
  return r.setEnd(n, t ?? n.nodeValue.length), r.setStart(n, e || 0), r;
}, Wu = function() {
  qr = null;
}, ct = function(n, e, t, r) {
  return t && (ms(n, e, t, r, -1) || ms(n, e, t, r, 1));
}, Ju = /^(img|br|input|textarea|hr)$/i;
function ms(n, e, t, r, i) {
  for (; ; ) {
    if (n == t && e == r)
      return !0;
    if (e == (i < 0 ? 0 : Oe(n))) {
      let s = n.parentNode;
      if (!s || s.nodeType != 1 || ln(n) || Ju.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = Y(n) + (i < 0 ? 0 : 1), n = s;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (i < 0 ? -1 : 0)], n.contentEditable == "false")
        return !1;
      e = i < 0 ? Oe(n) : 0;
    } else
      return !1;
  }
}
function Oe(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function qu(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e)
      return n;
    if (n.nodeType == 1 && e > 0) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e - 1], e = Oe(n);
    } else if (n.parentNode && !ln(n))
      e = Y(n), n = n.parentNode;
    else
      return null;
  }
}
function Ku(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e < n.nodeValue.length)
      return n;
    if (n.nodeType == 1 && e < n.childNodes.length) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e], e = 0;
    } else if (n.parentNode && !ln(n))
      e = Y(n) + 1, n = n.parentNode;
    else
      return null;
  }
}
function Uu(n, e, t) {
  for (let r = e == 0, i = e == Oe(n); r || i; ) {
    if (n == t)
      return !0;
    let s = Y(n);
    if (n = n.parentNode, !n)
      return !1;
    r = r && s == 0, i = i && s == Oe(n);
  }
}
function ln(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const Un = function(n) {
  return n.focusNode && ct(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function Ye(n, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
function Gu(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function Yu(n, e, t) {
  if (n.caretPositionFromPoint)
    try {
      let r = n.caretPositionFromPoint(e, t);
      if (r)
        return { node: r.offsetNode, offset: r.offset };
    } catch {
    }
  if (n.caretRangeFromPoint) {
    let r = n.caretRangeFromPoint(e, t);
    if (r)
      return { node: r.startContainer, offset: r.startOffset };
  }
}
const Ee = typeof navigator < "u" ? navigator : null, gs = typeof document < "u" ? document : null, Ue = Ee && Ee.userAgent || "", Kr = /Edge\/(\d+)/.exec(Ue), fl = /MSIE \d/.exec(Ue), Ur = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Ue), ue = !!(fl || Ur || Kr), He = fl ? document.documentMode : Ur ? +Ur[1] : Kr ? +Kr[1] : 0, Ce = !ue && /gecko\/(\d+)/i.test(Ue);
Ce && +(/Firefox\/(\d+)/.exec(Ue) || [0, 0])[1];
const Gr = !ue && /Chrome\/(\d+)/.exec(Ue), se = !!Gr, Xu = Gr ? +Gr[1] : 0, oe = !ue && !!Ee && /Apple Computer/.test(Ee.vendor), It = oe && (/Mobile\/\w+/.test(Ue) || !!Ee && Ee.maxTouchPoints > 2), he = It || (Ee ? /Mac/.test(Ee.platform) : !1), Qu = Ee ? /Win/.test(Ee.platform) : !1, xe = /Android \d/.test(Ue), an = !!gs && "webkitFontSmoothing" in gs.documentElement.style, Zu = an ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function ef(n) {
  let e = n.defaultView && n.defaultView.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: n.documentElement.clientWidth,
    top: 0,
    bottom: n.documentElement.clientHeight
  };
}
function De(n, e) {
  return typeof n == "number" ? n : n[e];
}
function tf(n) {
  let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, r = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * r
  };
}
function ys(n, e, t) {
  let r = n.someProp("scrollThreshold") || 0, i = n.someProp("scrollMargin") || 5, s = n.dom.ownerDocument;
  for (let o = t || n.dom; o; o = Zt(o)) {
    if (o.nodeType != 1)
      continue;
    let l = o, a = l == s.body, c = a ? ef(s) : tf(l), u = 0, f = 0;
    if (e.top < c.top + De(r, "top") ? f = -(c.top - e.top + De(i, "top")) : e.bottom > c.bottom - De(r, "bottom") && (f = e.bottom - e.top > c.bottom - c.top ? e.top + De(i, "top") - c.top : e.bottom - c.bottom + De(i, "bottom")), e.left < c.left + De(r, "left") ? u = -(c.left - e.left + De(i, "left")) : e.right > c.right - De(r, "right") && (u = e.right - c.right + De(i, "right")), u || f)
      if (a)
        s.defaultView.scrollBy(u, f);
      else {
        let d = l.scrollLeft, h = l.scrollTop;
        f && (l.scrollTop += f), u && (l.scrollLeft += u);
        let p = l.scrollLeft - d, m = l.scrollTop - h;
        e = { left: e.left - p, top: e.top - m, right: e.right - p, bottom: e.bottom - m };
      }
    if (a || /^(fixed|sticky)$/.test(getComputedStyle(o).position))
      break;
  }
}
function nf(n) {
  let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), r, i;
  for (let s = (e.left + e.right) / 2, o = t + 1; o < Math.min(innerHeight, e.bottom); o += 5) {
    let l = n.root.elementFromPoint(s, o);
    if (!l || l == n.dom || !n.dom.contains(l))
      continue;
    let a = l.getBoundingClientRect();
    if (a.top >= t - 20) {
      r = l, i = a.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: dl(n.dom) };
}
function dl(n) {
  let e = [], t = n.ownerDocument;
  for (let r = n; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), n != t); r = Zt(r))
    ;
  return e;
}
function rf({ refDOM: n, refTop: e, stack: t }) {
  let r = n ? n.getBoundingClientRect().top : 0;
  hl(t, r == 0 ? 0 : r - e);
}
function hl(n, e) {
  for (let t = 0; t < n.length; t++) {
    let { dom: r, top: i, left: s } = n[t];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != s && (r.scrollLeft = s);
  }
}
let dt = null;
function sf(n) {
  if (n.setActive)
    return n.setActive();
  if (dt)
    return n.focus(dt);
  let e = dl(n);
  n.focus(dt == null ? {
    get preventScroll() {
      return dt = { preventScroll: !0 }, !0;
    }
  } : void 0), dt || (dt = !1, hl(e, 0));
}
function pl(n, e) {
  let t, r = 2e8, i, s = 0, o = e.top, l = e.top, a, c;
  for (let u = n.firstChild, f = 0; u; u = u.nextSibling, f++) {
    let d;
    if (u.nodeType == 1)
      d = u.getClientRects();
    else if (u.nodeType == 3)
      d = Pe(u).getClientRects();
    else
      continue;
    for (let h = 0; h < d.length; h++) {
      let p = d[h];
      if (p.top <= o && p.bottom >= l) {
        o = Math.max(p.bottom, o), l = Math.min(p.top, l);
        let m = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
        if (m < r) {
          t = u, r = m, i = m && t.nodeType == 3 ? {
            left: p.right < e.left ? p.right : p.left,
            top: e.top
          } : e, u.nodeType == 1 && m && (s = f + (e.left >= (p.left + p.right) / 2 ? 1 : 0));
          continue;
        }
      } else
        p.top > e.top && !a && p.left <= e.left && p.right >= e.left && (a = u, c = { left: Math.max(p.left, Math.min(p.right, e.left)), top: p.top });
      !t && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom) && (s = f + 1);
    }
  }
  return !t && a && (t = a, i = c, r = 0), t && t.nodeType == 3 ? of(t, i) : !t || r && t.nodeType == 1 ? { node: n, offset: s } : pl(t, i);
}
function of(n, e) {
  let t = n.nodeValue.length, r = document.createRange();
  for (let i = 0; i < t; i++) {
    r.setEnd(n, i + 1), r.setStart(n, i);
    let s = $e(r, 1);
    if (s.top != s.bottom && ki(e, s))
      return { node: n, offset: i + (e.left >= (s.left + s.right) / 2 ? 1 : 0) };
  }
  return { node: n, offset: 0 };
}
function ki(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function lf(n, e) {
  let t = n.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function af(n, e, t) {
  let { node: r, offset: i } = pl(e, t), s = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let o = r.getBoundingClientRect();
    s = o.left != o.right && t.left > (o.left + o.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(r, i, s);
}
function cf(n, e, t, r) {
  let i = -1;
  for (let s = e, o = !1; s != n.dom; ) {
    let l = n.docView.nearestDesc(s, !0);
    if (!l)
      return null;
    if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM)) {
      let a = l.dom.getBoundingClientRect();
      if (l.node.isBlock && l.parent && (!o && a.left > r.left || a.top > r.top ? i = l.posBefore : (!o && a.right < r.left || a.bottom < r.top) && (i = l.posAfter), o = !0), !l.contentDOM && i < 0 && !l.node.isText)
        return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
    }
    s = l.dom.parentNode;
  }
  return i > -1 ? i : n.docView.posFromDOM(e, t, -1);
}
function ml(n, e, t) {
  let r = n.childNodes.length;
  if (r && t.top < t.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), s = i; ; ) {
      let o = n.childNodes[s];
      if (o.nodeType == 1) {
        let l = o.getClientRects();
        for (let a = 0; a < l.length; a++) {
          let c = l[a];
          if (ki(e, c))
            return ml(o, e, c);
        }
      }
      if ((s = (s + 1) % r) == i)
        break;
    }
  return n;
}
function uf(n, e) {
  let t = n.dom.ownerDocument, r, i = 0, s = Yu(t, e.left, e.top);
  s && ({ node: r, offset: i } = s);
  let o = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), l;
  if (!o || !n.dom.contains(o.nodeType != 1 ? o.parentNode : o)) {
    let c = n.dom.getBoundingClientRect();
    if (!ki(e, c) || (o = ml(n.dom, e, c), !o))
      return null;
  }
  if (oe)
    for (let c = o; r && c; c = Zt(c))
      c.draggable && (r = void 0);
  if (o = lf(o, e), r) {
    if (Ce && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let u = r.childNodes[i], f;
      u.nodeName == "IMG" && (f = u.getBoundingClientRect()).right <= e.left && f.bottom > e.top && i++;
    }
    let c;
    an && i && r.nodeType == 1 && (c = r.childNodes[i - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && i--, r == n.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = n.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (l = cf(n, r, i, e));
  }
  l == null && (l = af(n, o, e));
  let a = n.docView.nearestDesc(o, !0);
  return { pos: l, inside: a ? a.posAtStart - a.border : -1 };
}
function bs(n) {
  return n.top < n.bottom || n.left < n.right;
}
function $e(n, e) {
  let t = n.getClientRects();
  if (t.length) {
    let r = t[e < 0 ? 0 : t.length - 1];
    if (bs(r))
      return r;
  }
  return Array.prototype.find.call(t, bs) || n.getBoundingClientRect();
}
const ff = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function gl(n, e, t) {
  let { node: r, offset: i, atom: s } = n.docView.domFromPos(e, t < 0 ? -1 : 1), o = an || Ce;
  if (r.nodeType == 3)
    if (o && (ff.test(r.nodeValue) || (t < 0 ? !i : i == r.nodeValue.length))) {
      let a = $e(Pe(r, i, i), t);
      if (Ce && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let c = $e(Pe(r, i - 1, i - 1), -1);
        if (c.top == a.top) {
          let u = $e(Pe(r, i, i + 1), -1);
          if (u.top != a.top)
            return Lt(u, u.left < c.left);
        }
      }
      return a;
    } else {
      let a = i, c = i, u = t < 0 ? 1 : -1;
      return t < 0 && !i ? (c++, u = -1) : t >= 0 && i == r.nodeValue.length ? (a--, u = 1) : t < 0 ? a-- : c++, Lt($e(Pe(r, a, c), u), u < 0);
    }
  if (!n.state.doc.resolve(e - (s || 0)).parent.inlineContent) {
    if (s == null && i && (t < 0 || i == Oe(r))) {
      let a = r.childNodes[i - 1];
      if (a.nodeType == 1)
        return kr(a.getBoundingClientRect(), !1);
    }
    if (s == null && i < Oe(r)) {
      let a = r.childNodes[i];
      if (a.nodeType == 1)
        return kr(a.getBoundingClientRect(), !0);
    }
    return kr(r.getBoundingClientRect(), t >= 0);
  }
  if (s == null && i && (t < 0 || i == Oe(r))) {
    let a = r.childNodes[i - 1], c = a.nodeType == 3 ? Pe(a, Oe(a) - (o ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (c)
      return Lt($e(c, 1), !1);
  }
  if (s == null && i < Oe(r)) {
    let a = r.childNodes[i];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let c = a ? a.nodeType == 3 ? Pe(a, 0, o ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (c)
      return Lt($e(c, -1), !0);
  }
  return Lt($e(r.nodeType == 3 ? Pe(r) : r, -t), t >= 0);
}
function Lt(n, e) {
  if (n.width == 0)
    return n;
  let t = e ? n.left : n.right;
  return { top: n.top, bottom: n.bottom, left: t, right: t };
}
function kr(n, e) {
  if (n.height == 0)
    return n;
  let t = e ? n.top : n.bottom;
  return { top: t, bottom: t, left: n.left, right: n.right };
}
function yl(n, e, t) {
  let r = n.state, i = n.root.activeElement;
  r != e && n.updateState(e), i != n.dom && n.focus();
  try {
    return t();
  } finally {
    r != e && n.updateState(r), i != n.dom && i && i.focus();
  }
}
function df(n, e, t) {
  let r = e.selection, i = t == "up" ? r.$from : r.$to;
  return yl(n, e, () => {
    let { node: s } = n.docView.domFromPos(i.pos, t == "up" ? -1 : 1);
    for (; ; ) {
      let l = n.docView.nearestDesc(s, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        s = l.contentDOM || l.dom;
        break;
      }
      s = l.dom.parentNode;
    }
    let o = gl(n, i.pos, 1);
    for (let l = s.firstChild; l; l = l.nextSibling) {
      let a;
      if (l.nodeType == 1)
        a = l.getClientRects();
      else if (l.nodeType == 3)
        a = Pe(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < a.length; c++) {
        let u = a[c];
        if (u.bottom > u.top + 1 && (t == "up" ? o.top - u.top > (u.bottom - o.top) * 2 : u.bottom - o.bottom > (o.bottom - u.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const hf = /[\u0590-\u08ac]/;
function pf(n, e, t) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, s = !i, o = i == r.parent.content.size, l = n.domSelection();
  return !hf.test(r.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? s : o : yl(n, e, () => {
    let { focusNode: a, focusOffset: c, anchorNode: u, anchorOffset: f } = n.domSelectionRange(), d = l.caretBidiLevel;
    l.modify("move", t, "character");
    let h = r.depth ? n.docView.domAfterPos(r.before()) : n.dom, { focusNode: p, focusOffset: m } = n.domSelectionRange(), g = p && !h.contains(p.nodeType == 1 ? p : p.parentNode) || a == p && c == m;
    try {
      l.collapse(u, f), a && (a != u || c != f) && l.extend && l.extend(a, c);
    } catch {
    }
    return d != null && (l.caretBidiLevel = d), g;
  });
}
let ks = null, xs = null, Ss = !1;
function mf(n, e, t) {
  return ks == e && xs == t ? Ss : (ks = e, xs = t, Ss = t == "up" || t == "down" ? df(n, e, t) : pf(n, e, t));
}
const me = 0, ws = 1, Qe = 2, Ae = 3;
class cn {
  constructor(e, t, r, i) {
    this.parent = e, this.children = t, this.dom = r, this.contentDOM = i, this.dirty = me, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, t, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let t = 0; t < this.children.length; t++)
      e += this.children[t].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let t = 0, r = this.posAtStart; ; t++) {
      let i = this.children[t];
      if (i == e)
        return r;
      r += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, t, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let s, o;
        if (e == this.contentDOM)
          s = e.childNodes[t - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.previousSibling;
        }
        for (; s && !((o = s.pmViewDesc) && o.parent == this); )
          s = s.previousSibling;
        return s ? this.posBeforeChild(o) + o.size : this.posAtStart;
      } else {
        let s, o;
        if (e == this.contentDOM)
          s = e.childNodes[t];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.nextSibling;
        }
        for (; s && !((o = s.pmViewDesc) && o.parent == this); )
          s = s.nextSibling;
        return s ? this.posBeforeChild(o) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = t > Y(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (t == 0)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !1;
            break;
          }
          if (s.previousSibling)
            break;
        }
      if (i == null && t == e.childNodes.length)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !0;
            break;
          }
          if (s.nextSibling)
            break;
        }
    }
    return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, t = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let s = this.getDesc(i), o;
      if (s && (!t || s.node))
        if (r && (o = s.nodeDOM) && !(o.nodeType == 1 ? o.contains(e.nodeType == 1 ? e : e.parentNode) : o == e))
          r = !1;
        else
          return s;
    }
  }
  getDesc(e) {
    let t = e.pmViewDesc;
    for (let r = t; r; r = r.parent)
      if (r == this)
        return t;
  }
  posFromDOM(e, t, r) {
    for (let i = e; i; i = i.parentNode) {
      let s = this.getDesc(i);
      if (s)
        return s.localPosFromDOM(e, t, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let t = 0, r = 0; t < this.children.length; t++) {
      let i = this.children[t], s = r + i.size;
      if (r == e && s != r) {
        for (; !i.border && i.children.length; )
          i = i.children[0];
        return i;
      }
      if (e < s)
        return i.descAt(e - r - i.border);
      r = s;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let s = 0; r < this.children.length; r++) {
      let o = this.children[r], l = s + o.size;
      if (l > e || o instanceof kl) {
        i = e - s;
        break;
      }
      s = l;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, t);
    for (let s; r && !(s = this.children[r - 1]).size && s instanceof bl && s.side >= 0; r--)
      ;
    if (t <= 0) {
      let s, o = !0;
      for (; s = r ? this.children[r - 1] : null, !(!s || s.dom.parentNode == this.contentDOM); r--, o = !1)
        ;
      return s && t && o && !s.border && !s.domAtom ? s.domFromPos(s.size, t) : { node: this.contentDOM, offset: s ? Y(s.dom) + 1 : 0 };
    } else {
      let s, o = !0;
      for (; s = r < this.children.length ? this.children[r] : null, !(!s || s.dom.parentNode == this.contentDOM); r++, o = !1)
        ;
      return s && o && !s.border && !s.domAtom ? s.domFromPos(0, t) : { node: this.contentDOM, offset: s ? Y(s.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, t, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, s = -1;
    for (let o = r, l = 0; ; l++) {
      let a = this.children[l], c = o + a.size;
      if (i == -1 && e <= c) {
        let u = o + a.border;
        if (e >= u && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, t, u);
        e = o;
        for (let f = l; f > 0; f--) {
          let d = this.children[f - 1];
          if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(1)) {
            i = Y(d.dom) + 1;
            break;
          }
          e -= d.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (c > t || l == this.children.length - 1)) {
        t = c;
        for (let u = l + 1; u < this.children.length; u++) {
          let f = this.children[u];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(-1)) {
            s = Y(f.dom);
            break;
          }
          t += f.size;
        }
        s == -1 && (s = this.contentDOM.childNodes.length);
        break;
      }
      o = c;
    }
    return { node: this.contentDOM, from: e, to: t, fromOffset: i, toOffset: s };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let t = this.children[e < 0 ? 0 : this.children.length - 1];
    return t.size == 0 || t.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: t, offset: r } = this.domFromPos(e, 0);
    if (t.nodeType != 1 || r == t.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return t.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, t, r, i = !1) {
    let s = Math.min(e, t), o = Math.max(e, t);
    for (let d = 0, h = 0; d < this.children.length; d++) {
      let p = this.children[d], m = h + p.size;
      if (s > h && o < m)
        return p.setSelection(e - h - p.border, t - h - p.border, r, i);
      h = m;
    }
    let l = this.domFromPos(e, e ? -1 : 1), a = t == e ? l : this.domFromPos(t, t ? -1 : 1), c = r.getSelection(), u = !1;
    if ((Ce || oe) && e == t) {
      let { node: d, offset: h } = l;
      if (d.nodeType == 3) {
        if (u = !!(h && d.nodeValue[h - 1] == `
`), u && h == d.nodeValue.length)
          for (let p = d, m; p; p = p.parentNode) {
            if (m = p.nextSibling) {
              m.nodeName == "BR" && (l = a = { node: m.parentNode, offset: Y(m) + 1 });
              break;
            }
            let g = p.pmViewDesc;
            if (g && g.node && g.node.isBlock)
              break;
          }
      } else {
        let p = d.childNodes[h - 1];
        u = p && (p.nodeName == "BR" || p.contentEditable == "false");
      }
    }
    if (Ce && c.focusNode && c.focusNode != a.node && c.focusNode.nodeType == 1) {
      let d = c.focusNode.childNodes[c.focusOffset];
      d && d.contentEditable == "false" && (i = !0);
    }
    if (!(i || u && oe) && ct(l.node, l.offset, c.anchorNode, c.anchorOffset) && ct(a.node, a.offset, c.focusNode, c.focusOffset))
      return;
    let f = !1;
    if ((c.extend || e == t) && !u) {
      c.collapse(l.node, l.offset);
      try {
        e != t && c.extend(a.node, a.offset), f = !0;
      } catch {
      }
    }
    if (!f) {
      if (e > t) {
        let h = l;
        l = a, a = h;
      }
      let d = document.createRange();
      d.setEnd(a.node, a.offset), d.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(d);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, t) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let s = this.children[i], o = r + s.size;
      if (r == o ? e <= o && t >= r : e < o && t > r) {
        let l = r + s.border, a = o - s.border;
        if (e >= l && t <= a) {
          this.dirty = e == r || t == o ? Qe : ws, e == l && t == a && (s.contentLost || s.dom.parentNode != this.contentDOM) ? s.dirty = Ae : s.markDirty(e - l, t - l);
          return;
        } else
          s.dirty = s.dom == s.contentDOM && s.dom.parentNode == this.contentDOM && !s.children.length ? Qe : Ae;
      }
      r = o;
    }
    this.dirty = Qe;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let r = e == 1 ? Qe : ws;
      t.dirty < r && (t.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
  isText(e) {
    return !1;
  }
}
class bl extends cn {
  constructor(e, t, r, i) {
    let s, o = t.type.toDOM;
    if (typeof o == "function" && (o = o(r, () => {
      if (!s)
        return i;
      if (s.parent)
        return s.parent.posBeforeChild(s);
    })), !t.type.spec.raw) {
      if (o.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(o), o = l;
      }
      o.contentEditable = "false", o.classList.add("ProseMirror-widget");
    }
    super(e, [], o, null), this.widget = t, this.widget = t, s = this;
  }
  matchesWidget(e) {
    return this.dirty == me && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let t = this.widget.spec.stopEvent;
    return t ? t(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get side() {
    return this.widget.type.side;
  }
}
class gf extends cn {
  constructor(e, t, r, i) {
    super(e, [], t, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, t) {
    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class ut extends cn {
  constructor(e, t, r, i) {
    super(e, [], r, i), this.mark = t;
  }
  static create(e, t, r, i) {
    let s = i.nodeViews[t.type.name], o = s && s(t, i, r);
    return (!o || !o.dom) && (o = ve.renderSpec(document, t.type.spec.toDOM(t, r))), new ut(e, t, o.dom, o.contentDOM || o.dom);
  }
  parseRule() {
    return this.dirty & Ae || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != Ae && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != me) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = me;
    }
  }
  slice(e, t, r) {
    let i = ut.create(this.parent, this.mark, !0, r), s = this.children, o = this.size;
    t < o && (s = Qr(s, t, o, r)), e > 0 && (s = Qr(s, 0, e, r));
    for (let l = 0; l < s.length; l++)
      s[l].parent = i;
    return i.children = s, i;
  }
}
class je extends cn {
  constructor(e, t, r, i, s, o, l, a, c) {
    super(e, [], s, o), this.node = t, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = l;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, t, r, i, s, o) {
    let l = s.nodeViews[t.type.name], a, c = l && l(t, s, () => {
      if (!a)
        return o;
      if (a.parent)
        return a.parent.posBeforeChild(a);
    }, r, i), u = c && c.dom, f = c && c.contentDOM;
    if (t.isText) {
      if (!u)
        u = document.createTextNode(t.text);
      else if (u.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else
      u || ({ dom: u, contentDOM: f } = ve.renderSpec(document, t.type.spec.toDOM(t)));
    !f && !t.isText && u.nodeName != "BR" && (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), t.type.spec.draggable && (u.draggable = !0));
    let d = u;
    return u = wl(u, r, t), c ? a = new yf(e, t, r, i, u, f || null, d, c, s, o + 1) : t.isText ? new Gn(e, t, r, i, u, d, s) : new je(e, t, r, i, u, f || null, d, s, o + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let t = this.children.length - 1; t >= 0; t--) {
        let r = this.children[t];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => b.empty);
    }
    return e;
  }
  matchesNode(e, t, r) {
    return this.dirty == me && e.eq(this.node) && Xr(t, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, t) {
    let r = this.node.inlineContent, i = t, s = e.composing ? this.localCompositionInfo(e, t) : null, o = s && s.pos > -1 ? s : null, l = s && s.pos < 0, a = new kf(this, o && o.node, e);
    wf(this.node, this.innerDeco, (c, u, f) => {
      c.spec.marks ? a.syncToMarks(c.spec.marks, r, e) : c.type.side >= 0 && !f && a.syncToMarks(u == this.node.childCount ? D.none : this.node.child(u).marks, r, e), a.placeWidget(c, e, i);
    }, (c, u, f, d) => {
      a.syncToMarks(c.marks, r, e);
      let h;
      a.findNodeMatch(c, u, f, d) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (h = a.findIndexWithChild(s.node)) > -1 && a.updateNodeAt(c, u, f, h, e) || a.updateNextNode(c, u, f, e, d, i) || a.addNode(c, u, f, e, i), i += c.nodeSize;
    }), a.syncToMarks([], r, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == Qe) && (o && this.protectLocalComposition(e, o), xl(this.contentDOM, this.children, e), It && Mf(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof T) || r < t || i > t + this.node.content.size)
      return null;
    let s = e.input.compositionNode;
    if (!s || !this.dom.contains(s.parentNode))
      return null;
    if (this.node.inlineContent) {
      let o = s.nodeValue, l = Cf(this.node.content, o, r - t, i - t);
      return l < 0 ? null : { node: s, pos: l, text: o };
    } else
      return { node: s, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: t, pos: r, text: i }) {
    if (this.getDesc(t))
      return;
    let s = t;
    for (; s.parentNode != this.contentDOM; s = s.parentNode) {
      for (; s.previousSibling; )
        s.parentNode.removeChild(s.previousSibling);
      for (; s.nextSibling; )
        s.parentNode.removeChild(s.nextSibling);
      s.pmViewDesc && (s.pmViewDesc = void 0);
    }
    let o = new gf(this, s, t, i);
    e.input.compositionNodes.push(o), this.children = Qr(this.children, r, r + i.length, e, o);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, t, r, i) {
    return this.dirty == Ae || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, i), !0);
  }
  updateInner(e, t, r, i) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = me;
  }
  updateOuterDeco(e) {
    if (Xr(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = Sl(this.dom, this.nodeDOM, Yr(this.outerDeco, this.node, t), Yr(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable"));
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function Ms(n, e, t, r, i) {
  wl(r, e, n);
  let s = new je(void 0, n, e, t, r, r, r, i, 0);
  return s.contentDOM && s.updateChildren(i, 0), s;
}
class Gn extends je {
  constructor(e, t, r, i, s, o, l) {
    super(e, t, r, i, s, null, o, l, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, t, r, i) {
    return this.dirty == Ae || this.dirty != me && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != me || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = me, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let t = this.nodeDOM; t; t = t.parentNode)
      if (t == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, t, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, t, r) {
    let i = this.node.cut(e, t), s = document.createTextNode(i.text);
    return new Gn(this.parent, i, this.outerDeco, this.innerDeco, s, s, r);
  }
  markDirty(e, t) {
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = Ae);
  }
  get domAtom() {
    return !1;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class kl extends cn {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == me && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class yf extends je {
  constructor(e, t, r, i, s, o, l, a, c, u) {
    super(e, t, r, i, s, o, l, c, u), this.spec = a;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, t, r, i) {
    if (this.dirty == Ae)
      return !1;
    if (this.spec.update) {
      let s = this.spec.update(e, t, r);
      return s && this.updateInner(e, t, r, i), s;
    } else
      return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, t, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, t, r) : super.setSelection(e, t, r, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function xl(n, e, t) {
  let r = n.firstChild, i = !1;
  for (let s = 0; s < e.length; s++) {
    let o = e[s], l = o.dom;
    if (l.parentNode == n) {
      for (; l != r; )
        r = Cs(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, n.insertBefore(l, r);
    if (o instanceof ut) {
      let a = r ? r.previousSibling : n.lastChild;
      xl(o.contentDOM, o.children, t), r = a ? a.nextSibling : n.firstChild;
    }
  }
  for (; r; )
    r = Cs(r), i = !0;
  i && t.trackWrites == n && (t.trackWrites = null);
}
const Jt = function(n) {
  n && (this.nodeName = n);
};
Jt.prototype = /* @__PURE__ */ Object.create(null);
const Ze = [new Jt()];
function Yr(n, e, t) {
  if (n.length == 0)
    return Ze;
  let r = t ? Ze[0] : new Jt(), i = [r];
  for (let s = 0; s < n.length; s++) {
    let o = n[s].type.attrs;
    if (o) {
      o.nodeName && i.push(r = new Jt(o.nodeName));
      for (let l in o) {
        let a = o[l];
        a != null && (t && i.length == 1 && i.push(r = new Jt(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a));
      }
    }
  }
  return i;
}
function Sl(n, e, t, r) {
  if (t == Ze && r == Ze)
    return e;
  let i = e;
  for (let s = 0; s < r.length; s++) {
    let o = r[s], l = t[s];
    if (s) {
      let a;
      l && l.nodeName == o.nodeName && i != n && (a = i.parentNode) && a.nodeName.toLowerCase() == o.nodeName || (a = document.createElement(o.nodeName), a.pmIsDeco = !0, a.appendChild(i), l = Ze[0]), i = a;
    }
    bf(i, l || Ze[0], o);
  }
  return i;
}
function bf(n, e, t) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r);
  for (let r in t)
    r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]);
  if (e.class != t.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let s = 0; s < r.length; s++)
      i.indexOf(r[s]) == -1 && n.classList.remove(r[s]);
    for (let s = 0; s < i.length; s++)
      r.indexOf(i[s]) == -1 && n.classList.add(i[s]);
    n.classList.length == 0 && n.removeAttribute("class");
  }
  if (e.style != t.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        n.style.removeProperty(i[1]);
    }
    t.style && (n.style.cssText += t.style);
  }
}
function wl(n, e, t) {
  return Sl(n, n, Ze, Yr(e, t, n.nodeType != 1));
}
function Xr(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].type.eq(e[t].type))
      return !1;
  return !0;
}
function Cs(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class kf {
  constructor(e, t, r) {
    this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = xf(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, t) {
    if (e != t) {
      for (let r = e; r < t; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, t - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, t, r) {
    let i = 0, s = this.stack.length >> 1, o = Math.min(s, e.length);
    for (; i < o && (i == s - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
      i++;
    for (; i < s; )
      this.destroyRest(), this.top.dirty = me, this.index = this.stack.pop(), this.top = this.stack.pop(), s--;
    for (; s < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let l = -1;
      for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
        let c = this.top.children[a];
        if (c.matchesMark(e[s]) && !this.isLocked(c.dom)) {
          l = a;
          break;
        }
      }
      if (l > -1)
        l > this.index && (this.changed = !0, this.destroyBetween(this.index, l)), this.top = this.top.children[this.index];
      else {
        let a = ut.create(this.top, e[s], t, r);
        this.top.children.splice(this.index, 0, a), this.top = a, this.changed = !0;
      }
      this.index = 0, s++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, t, r, i) {
    let s = -1, o;
    if (i >= this.preMatch.index && (o = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && o.matchesNode(e, t, r))
      s = this.top.children.indexOf(o, this.index);
    else
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let c = this.top.children[l];
        if (c.matchesNode(e, t, r) && !this.preMatch.matched.has(c)) {
          s = l;
          break;
        }
      }
    return s < 0 ? !1 : (this.destroyBetween(this.index, s), this.index++, !0);
  }
  updateNodeAt(e, t, r, i, s) {
    let o = this.top.children[i];
    return o.dirty == Ae && o.dom == o.contentDOM && (o.dirty = Qe), o.update(e, t, r, s) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let t = e.parentNode;
      if (!t)
        return -1;
      if (t == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = t;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, t, r, i, s, o) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let a = this.top.children[l];
      if (a instanceof je) {
        let c = this.preMatch.matched.get(a);
        if (c != null && c != s)
          return !1;
        let u = a.dom, f, d = this.isLocked(u) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != Ae && Xr(t, a.outerDeco));
        if (!d && a.update(e, t, r, i))
          return this.destroyBetween(this.index, l), a.dom != u && (this.changed = !0), this.index++, !0;
        if (!d && (f = this.recreateWrapper(a, e, t, r, i, o)))
          return this.top.children[this.index] = f, f.contentDOM && (f.dirty = Qe, f.updateChildren(i, o + 1), f.dirty = me), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, t, r, i, s, o) {
    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content))
      return null;
    let l = je.create(this.top, t, r, i, s, o);
    if (l.contentDOM) {
      l.children = e.children, e.children = [];
      for (let a of l.children)
        a.parent = l;
    }
    return e.destroy(), l;
  }
  // Insert the node as a newly created node desc.
  addNode(e, t, r, i, s) {
    let o = je.create(this.top, e, t, r, i, s);
    o.contentDOM && o.updateChildren(i, s + 1), this.top.children.splice(this.index++, 0, o), this.changed = !0;
  }
  placeWidget(e, t, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let s = new bl(this.top, e, t, r);
      this.top.children.splice(this.index++, 0, s), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], t = this.top;
    for (; e instanceof ut; )
      t = e, e = t.children[t.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof Gn) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((oe || se) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new kl(this.top, [], r, null);
      t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function xf(n, e) {
  let t = e, r = t.children.length, i = n.childCount, s = /* @__PURE__ */ new Map(), o = [];
  e:
    for (; i > 0; ) {
      let l;
      for (; ; )
        if (r) {
          let c = t.children[r - 1];
          if (c instanceof ut)
            t = c, r = c.children.length;
          else {
            l = c, r--;
            break;
          }
        } else {
          if (t == e)
            break e;
          r = t.parent.children.indexOf(t), t = t.parent;
        }
      let a = l.node;
      if (a) {
        if (a != n.child(i - 1))
          break;
        --i, s.set(l, i), o.push(l);
      }
    }
  return { index: i, matched: s, matches: o.reverse() };
}
function Sf(n, e) {
  return n.type.side - e.type.side;
}
function wf(n, e, t, r) {
  let i = e.locals(n), s = 0;
  if (i.length == 0) {
    for (let c = 0; c < n.childCount; c++) {
      let u = n.child(c);
      r(u, i, e.forChild(s, u), c), s += u.nodeSize;
    }
    return;
  }
  let o = 0, l = [], a = null;
  for (let c = 0; ; ) {
    let u, f;
    for (; o < i.length && i[o].to == s; ) {
      let g = i[o++];
      g.widget && (u ? (f || (f = [u])).push(g) : u = g);
    }
    if (u)
      if (f) {
        f.sort(Sf);
        for (let g = 0; g < f.length; g++)
          t(f[g], c, !!a);
      } else
        t(u, c, !!a);
    let d, h;
    if (a)
      h = -1, d = a, a = null;
    else if (c < n.childCount)
      h = c, d = n.child(c++);
    else
      break;
    for (let g = 0; g < l.length; g++)
      l[g].to <= s && l.splice(g--, 1);
    for (; o < i.length && i[o].from <= s && i[o].to > s; )
      l.push(i[o++]);
    let p = s + d.nodeSize;
    if (d.isText) {
      let g = p;
      o < i.length && i[o].from < g && (g = i[o].from);
      for (let y = 0; y < l.length; y++)
        l[y].to < g && (g = l[y].to);
      g < p && (a = d.cut(g - s), d = d.cut(0, g - s), p = g, h = -1);
    } else
      for (; o < i.length && i[o].to < p; )
        o++;
    let m = d.isInline && !d.isLeaf ? l.filter((g) => !g.inline) : l.slice();
    r(d, m, e.forChild(s, d), h), s = p;
  }
}
function Mf(n) {
  if (n.nodeName == "UL" || n.nodeName == "OL") {
    let e = n.style.cssText;
    n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
  }
}
function Cf(n, e, t, r) {
  for (let i = 0, s = 0; i < n.childCount && s <= r; ) {
    let o = n.child(i++), l = s;
    if (s += o.nodeSize, !o.isText)
      continue;
    let a = o.text;
    for (; i < n.childCount; ) {
      let c = n.child(i++);
      if (s += c.nodeSize, !c.isText)
        break;
      a += c.text;
    }
    if (s >= t) {
      if (s >= r && a.slice(r - e.length - l, r - l) == e)
        return r - e.length;
      let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
      if (c >= 0 && c + e.length + l >= t)
        return l + c;
      if (t == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e)
        return r;
    }
  }
  return -1;
}
function Qr(n, e, t, r, i) {
  let s = [];
  for (let o = 0, l = 0; o < n.length; o++) {
    let a = n[o], c = l, u = l += a.size;
    c >= t || u <= e ? s.push(a) : (c < e && s.push(a.slice(0, e - c, r)), i && (s.push(i), i = void 0), u > t && s.push(a.slice(t - c, a.size, r)));
  }
  return s;
}
function xi(n, e = null) {
  let t = n.domSelectionRange(), r = n.state.doc;
  if (!t.focusNode)
    return null;
  let i = n.docView.nearestDesc(t.focusNode), s = i && i.size == 0, o = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (o < 0)
    return null;
  let l = r.resolve(o), a, c;
  if (Un(t)) {
    for (a = l; i && !i.node; )
      i = i.parent;
    let u = i.node;
    if (i && u.isAtom && M.isSelectable(u) && i.parent && !(u.isInline && Uu(t.focusNode, t.focusOffset, i.dom))) {
      let f = i.posBefore;
      c = new M(o == f ? l : r.resolve(f));
    }
  } else {
    let u = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (u < 0)
      return null;
    a = r.resolve(u);
  }
  if (!c) {
    let u = e == "pointer" || n.state.selection.head < l.pos && !s ? 1 : -1;
    c = Si(n, a, l, u);
  }
  return c;
}
function Ml(n) {
  return n.editable ? n.hasFocus() : Tl(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function Re(n, e = !1) {
  let t = n.state.selection;
  if (Cl(n, t), !!Ml(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && se) {
      let r = n.domSelectionRange(), i = n.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && ct(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      Of(n);
    else {
      let { anchor: r, head: i } = t, s, o;
      Ts && !(t instanceof T) && (t.$from.parent.inlineContent || (s = Os(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (o = Os(n, t.to))), n.docView.setSelection(r, i, n.root, e), Ts && (s && vs(s), o && vs(o)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Tf(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const Ts = oe || se && Xu < 63;
function Os(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0), i = r < t.childNodes.length ? t.childNodes[r] : null, s = r ? t.childNodes[r - 1] : null;
  if (oe && i && i.contentEditable == "false")
    return xr(i);
  if ((!i || i.contentEditable == "false") && (!s || s.contentEditable == "false")) {
    if (i)
      return xr(i);
    if (s)
      return xr(s);
  }
}
function xr(n) {
  return n.contentEditable = "true", oe && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function vs(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function Tf(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), r = t.anchorNode, i = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!Ml(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function Of(n) {
  let e = n.domSelection(), t = document.createRange(), r = n.cursorWrapper.dom, i = r.nodeName == "IMG";
  i ? t.setEnd(r.parentNode, Y(r) + 1) : t.setEnd(r, 0), t.collapse(!1), e.removeAllRanges(), e.addRange(t), !i && !n.state.selection.visible && ue && He <= 11 && (r.disabled = !0, r.disabled = !1);
}
function Cl(n, e) {
  if (e instanceof M) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && (Ns(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    Ns(n);
}
function Ns(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function Si(n, e, t, r) {
  return n.someProp("createSelectionBetween", (i) => i(n, e, t)) || T.between(e, t, r);
}
function Es(n) {
  return n.editable && !n.hasFocus() ? !1 : Tl(n);
}
function Tl(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function vf(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
  return ct(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function Zr(n, e) {
  let { $anchor: t, $head: r } = n.selection, i = e > 0 ? t.max(r) : t.min(r), s = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return s && v.findFrom(s, e);
}
function Be(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function As(n, e, t) {
  let r = n.state.selection;
  if (r instanceof T)
    if (t.indexOf("s") > -1) {
      let { $head: i } = r, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
      if (!s || s.isText || !s.isLeaf)
        return !1;
      let o = n.state.doc.resolve(i.pos + s.nodeSize * (e < 0 ? -1 : 1));
      return Be(n, new T(r.$anchor, o));
    } else if (r.empty) {
      if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let i = Zr(n.state, e);
        return i && i instanceof M ? Be(n, i) : !1;
      } else if (!(he && t.indexOf("m") > -1)) {
        let i = r.$head, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, o;
        if (!s || s.isText)
          return !1;
        let l = e < 0 ? i.pos - s.nodeSize : i.pos;
        return s.isAtom || (o = n.docView.descAt(l)) && !o.contentDOM ? M.isSelectable(s) ? Be(n, new M(e < 0 ? n.state.doc.resolve(i.pos - s.nodeSize) : i)) : an ? Be(n, new T(n.state.doc.resolve(e < 0 ? l : l + s.nodeSize))) : !1 : !1;
      }
    } else
      return !1;
  else {
    if (r instanceof M && r.node.isInline)
      return Be(n, new T(e > 0 ? r.$to : r.$from));
    {
      let i = Zr(n.state, e);
      return i ? Be(n, i) : !1;
    }
  }
}
function Dn(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function qt(n, e) {
  let t = n.pmViewDesc;
  return t && t.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR");
}
function ht(n, e) {
  return e < 0 ? Nf(n) : Ef(n);
}
function Nf(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i, s, o = !1;
  for (Ce && t.nodeType == 1 && r < Dn(t) && qt(t.childNodes[r], -1) && (o = !0); ; )
    if (r > 0) {
      if (t.nodeType != 1)
        break;
      {
        let l = t.childNodes[r - 1];
        if (qt(l, -1))
          i = t, s = --r;
        else if (l.nodeType == 3)
          t = l, r = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (Ol(t))
        break;
      {
        let l = t.previousSibling;
        for (; l && qt(l, -1); )
          i = t.parentNode, s = Y(l), l = l.previousSibling;
        if (l)
          t = l, r = Dn(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = 0;
        }
      }
    }
  o ? ei(n, t, r) : i && ei(n, i, s);
}
function Ef(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i = Dn(t), s, o;
  for (; ; )
    if (r < i) {
      if (t.nodeType != 1)
        break;
      let l = t.childNodes[r];
      if (qt(l, 1))
        s = t, o = ++r;
      else
        break;
    } else {
      if (Ol(t))
        break;
      {
        let l = t.nextSibling;
        for (; l && qt(l, 1); )
          s = l.parentNode, o = Y(l) + 1, l = l.nextSibling;
        if (l)
          t = l, r = 0, i = Dn(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = i = 0;
        }
      }
    }
  s && ei(n, s, o);
}
function Ol(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function Af(n, e) {
  for (; n && e == n.childNodes.length && !ln(n); )
    e = Y(n) + 1, n = n.parentNode;
  for (; n && e < n.childNodes.length; ) {
    let t = n.childNodes[e];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = 0;
  }
}
function If(n, e) {
  for (; n && !e && !ln(n); )
    e = Y(n), n = n.parentNode;
  for (; n && e; ) {
    let t = n.childNodes[e - 1];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = n.childNodes.length;
  }
}
function ei(n, e, t) {
  if (e.nodeType != 3) {
    let s, o;
    (o = Af(e, t)) ? (e = o, t = 0) : (s = If(e, t)) && (e = s, t = s.nodeValue.length);
  }
  let r = n.domSelection();
  if (Un(r)) {
    let s = document.createRange();
    s.setEnd(e, t), s.setStart(e, t), r.removeAllRanges(), r.addRange(s);
  } else
    r.extend && r.extend(e, t);
  n.domObserver.setCurSelection();
  let { state: i } = n;
  setTimeout(() => {
    n.state == i && Re(n);
  }, 50);
}
function Is(n, e) {
  let t = n.state.doc.resolve(e);
  if (!(se || Qu) && t.parent.inlineContent) {
    let i = n.coordsAtPos(e);
    if (e > t.start()) {
      let s = n.coordsAtPos(e - 1), o = (s.top + s.bottom) / 2;
      if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
        return s.left < i.left ? "ltr" : "rtl";
    }
    if (e < t.end()) {
      let s = n.coordsAtPos(e + 1), o = (s.top + s.bottom) / 2;
      if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
        return s.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
}
function Ds(n, e, t) {
  let r = n.state.selection;
  if (r instanceof T && !r.empty || t.indexOf("s") > -1 || he && t.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: s } = r;
  if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let o = Zr(n.state, e);
    if (o && o instanceof M)
      return Be(n, o);
  }
  if (!i.parent.inlineContent) {
    let o = e < 0 ? i : s, l = r instanceof Me ? v.near(o, e) : v.findFrom(o, e);
    return l ? Be(n, l) : !1;
  }
  return !1;
}
function Ps(n, e) {
  if (!(n.state.selection instanceof T))
    return !0;
  let { $head: t, $anchor: r, empty: i } = n.state.selection;
  if (!t.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let s = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (s && !s.isText) {
    let o = n.state.tr;
    return e < 0 ? o.delete(t.pos - s.nodeSize, t.pos) : o.delete(t.pos, t.pos + s.nodeSize), n.dispatch(o), !0;
  }
  return !1;
}
function Rs(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function Df(n) {
  if (!oe || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    Rs(n, r, "true"), setTimeout(() => Rs(n, r, "false"), 20);
  }
  return !1;
}
function Pf(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function Rf(n, e) {
  let t = e.keyCode, r = Pf(e);
  if (t == 8 || he && t == 72 && r == "c")
    return Ps(n, -1) || ht(n, -1);
  if (t == 46 && !e.shiftKey || he && t == 68 && r == "c")
    return Ps(n, 1) || ht(n, 1);
  if (t == 13 || t == 27)
    return !0;
  if (t == 37 || he && t == 66 && r == "c") {
    let i = t == 37 ? Is(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return As(n, i, r) || ht(n, i);
  } else if (t == 39 || he && t == 70 && r == "c") {
    let i = t == 39 ? Is(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return As(n, i, r) || ht(n, i);
  } else {
    if (t == 38 || he && t == 80 && r == "c")
      return Ds(n, -1, r) || ht(n, -1);
    if (t == 40 || he && t == 78 && r == "c")
      return Df(n) || Ds(n, 1, r) || ht(n, 1);
    if (r == (he ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
      return !0;
  }
  return !1;
}
function vl(n, e) {
  n.someProp("transformCopied", (h) => {
    e = h(e, n);
  });
  let t = [], { content: r, openStart: i, openEnd: s } = e;
  for (; i > 1 && s > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, s--;
    let h = r.firstChild;
    t.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let o = n.someProp("clipboardSerializer") || ve.fromSchema(n.state.schema), l = Pl(), a = l.createElement("div");
  a.appendChild(o.serializeFragment(r, { document: l }));
  let c = a.firstChild, u, f = 0;
  for (; c && c.nodeType == 1 && (u = Dl[c.nodeName.toLowerCase()]); ) {
    for (let h = u.length - 1; h >= 0; h--) {
      let p = l.createElement(u[h]);
      for (; a.firstChild; )
        p.appendChild(a.firstChild);
      a.appendChild(p), f++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${s}${f ? ` -${f}` : ""} ${JSON.stringify(t)}`);
  let d = n.someProp("clipboardTextSerializer", (h) => h(e, n)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: d, slice: e };
}
function Nl(n, e, t, r, i) {
  let s = i.parent.type.spec.code, o, l;
  if (!t && !e)
    return null;
  let a = e && (r || s || !t);
  if (a) {
    if (n.someProp("transformPastedText", (d) => {
      e = d(e, s || r, n);
    }), s)
      return e ? new x(b.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : x.empty;
    let f = n.someProp("clipboardTextParser", (d) => d(e, i, r, n));
    if (f)
      l = f;
    else {
      let d = i.marks(), { schema: h } = n.state, p = ve.fromSchema(h);
      o = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let g = o.appendChild(document.createElement("p"));
        m && g.appendChild(p.serializeNode(h.text(m, d)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (f) => {
      t = f(t, n);
    }), o = Lf(t), an && zf(o);
  let c = o && o.querySelector("[data-pm-slice]"), u = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (u && u[3])
    for (let f = +u[3]; f > 0; f--) {
      let d = o.firstChild;
      for (; d && d.nodeType != 1; )
        d = d.nextSibling;
      if (!d)
        break;
      o = d;
    }
  if (l || (l = (n.someProp("clipboardParser") || n.someProp("domParser") || Nt.fromSchema(n.state.schema)).parseSlice(o, {
    preserveWhitespace: !!(a || u),
    context: i,
    ruleFromNode(d) {
      return d.nodeName == "BR" && !d.nextSibling && d.parentNode && !$f.test(d.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), u)
    l = Ff($s(l, +u[1], +u[2]), u[4]);
  else if (l = x.maxOpen(Bf(l.content, i), !0), l.openStart || l.openEnd) {
    let f = 0, d = 0;
    for (let h = l.content.firstChild; f < l.openStart && !h.type.spec.isolating; f++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; d < l.openEnd && !h.type.spec.isolating; d++, h = h.lastChild)
      ;
    l = $s(l, f, d);
  }
  return n.someProp("transformPasted", (f) => {
    l = f(l, n);
  }), l;
}
const $f = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Bf(n, e) {
  if (n.childCount < 2)
    return n;
  for (let t = e.depth; t >= 0; t--) {
    let i = e.node(t).contentMatchAt(e.index(t)), s, o = [];
    if (n.forEach((l) => {
      if (!o)
        return;
      let a = i.findWrapping(l.type), c;
      if (!a)
        return o = null;
      if (c = o.length && s.length && Al(a, s, l, o[o.length - 1], 0))
        o[o.length - 1] = c;
      else {
        o.length && (o[o.length - 1] = Il(o[o.length - 1], s.length));
        let u = El(l, a);
        o.push(u), i = i.matchType(u.type), s = a;
      }
    }), o)
      return b.from(o);
  }
  return n;
}
function El(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--)
    n = e[r].create(null, b.from(n));
  return n;
}
function Al(n, e, t, r, i) {
  if (i < n.length && i < e.length && n[i] == e[i]) {
    let s = Al(n, e, t, r.lastChild, i + 1);
    if (s)
      return r.copy(r.content.replaceChild(r.childCount - 1, s));
    if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1]))
      return r.copy(r.content.append(b.from(El(t, n, i + 1))));
  }
}
function Il(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, Il(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(b.empty, !0);
  return n.copy(t.append(r));
}
function ti(n, e, t, r, i, s) {
  let o = e < 0 ? n.firstChild : n.lastChild, l = o.content;
  return n.childCount > 1 && (s = 0), i < r - 1 && (l = ti(l, e, t, r, i + 1, s)), i >= t && (l = e < 0 ? o.contentMatchAt(0).fillBefore(l, s <= i).append(l) : l.append(o.contentMatchAt(o.childCount).fillBefore(b.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, o.copy(l));
}
function $s(n, e, t) {
  return e < n.openStart && (n = new x(ti(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new x(ti(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const Dl = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let Bs = null;
function Pl() {
  return Bs || (Bs = document.implementation.createHTMLDocument("title"));
}
function Lf(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = Pl().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), i;
  if ((i = r && Dl[r[1].toLowerCase()]) && (n = i.map((s) => "<" + s + ">").join("") + n + i.map((s) => "</" + s + ">").reverse().join("")), t.innerHTML = n, i)
    for (let s = 0; s < i.length; s++)
      t = t.querySelector(i[s]) || t;
  return t;
}
function zf(n) {
  let e = n.querySelectorAll(se ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
  }
}
function Ff(n, e) {
  if (!n.size)
    return n;
  let t = n.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return n;
  }
  let { content: i, openStart: s, openEnd: o } = n;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = t.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    i = b.from(a.create(r[l + 1], i)), s++, o++;
  }
  return new x(i, s, o);
}
const le = {}, ae = {}, Vf = { touchstart: !0, touchmove: !0 };
class _f {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "" }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastAndroidDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function Hf(n) {
  for (let e in le) {
    let t = le[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = (r) => {
      Wf(n, r) && !wi(n, r) && (n.editable || !(r.type in ae)) && t(n, r);
    }, Vf[e] ? { passive: !0 } : void 0);
  }
  oe && n.dom.addEventListener("input", () => null), ni(n);
}
function _e(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function jf(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers)
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function ni(n) {
  n.someProp("handleDOMEvents", (e) => {
    for (let t in e)
      n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = (r) => wi(n, r));
  });
}
function wi(n, e) {
  return n.someProp("handleDOMEvents", (t) => {
    let r = t[e.type];
    return r ? r(n, e) || e.defaultPrevented : !1;
  });
}
function Wf(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != n.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function Jf(n, e) {
  !wi(n, e) && le[e.type] && (n.editable || !(e.type in ae)) && le[e.type](n, e);
}
ae.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !$l(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(xe && se && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), It && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (i) => i(n, Ye(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else
      n.someProp("handleKeyDown", (r) => r(n, t)) || Rf(n, t) ? t.preventDefault() : _e(n, "key");
};
ae.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
ae.keypress = (n, e) => {
  let t = e;
  if ($l(n, t) || !t.charCode || t.ctrlKey && !t.altKey || he && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (i) => i(n, t))) {
    t.preventDefault();
    return;
  }
  let r = n.state.selection;
  if (!(r instanceof T) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(t.charCode);
    !/[\r\n]/.test(i) && !n.someProp("handleTextInput", (s) => s(n, r.$from.pos, r.$to.pos, i)) && n.dispatch(n.state.tr.insertText(i).scrollIntoView()), t.preventDefault();
  }
};
function Yn(n) {
  return { left: n.clientX, top: n.clientY };
}
function qf(n, e) {
  let t = e.x - n.clientX, r = e.y - n.clientY;
  return t * t + r * r < 100;
}
function Mi(n, e, t, r, i) {
  if (r == -1)
    return !1;
  let s = n.state.doc.resolve(r);
  for (let o = s.depth + 1; o > 0; o--)
    if (n.someProp(e, (l) => o > s.depth ? l(n, t, s.nodeAfter, s.before(o), i, !0) : l(n, t, s.node(o), s.before(o), i, !1)))
      return !0;
  return !1;
}
function Mt(n, e, t) {
  n.focused || n.focus();
  let r = n.state.tr.setSelection(e);
  t == "pointer" && r.setMeta("pointer", !0), n.dispatch(r);
}
function Kf(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), r = t.nodeAfter;
  return r && r.isAtom && M.isSelectable(r) ? (Mt(n, new M(t), "pointer"), !0) : !1;
}
function Uf(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.selection, r, i;
  t instanceof M && (r = t.node);
  let s = n.state.doc.resolve(e);
  for (let o = s.depth + 1; o > 0; o--) {
    let l = o > s.depth ? s.nodeAfter : s.node(o);
    if (M.isSelectable(l)) {
      r && t.$from.depth > 0 && o >= t.$from.depth && s.before(t.$from.depth + 1) == t.$from.pos ? i = s.before(t.$from.depth) : i = s.before(o);
      break;
    }
  }
  return i != null ? (Mt(n, M.create(n.state.doc, i), "pointer"), !0) : !1;
}
function Gf(n, e, t, r, i) {
  return Mi(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (s) => s(n, e, r)) || (i ? Uf(n, t) : Kf(n, t));
}
function Yf(n, e, t, r) {
  return Mi(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (i) => i(n, e, r));
}
function Xf(n, e, t, r) {
  return Mi(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (i) => i(n, e, r)) || Qf(n, t, r);
}
function Qf(n, e, t) {
  if (t.button != 0)
    return !1;
  let r = n.state.doc;
  if (e == -1)
    return r.inlineContent ? (Mt(n, T.create(r, 0, r.content.size), "pointer"), !0) : !1;
  let i = r.resolve(e);
  for (let s = i.depth + 1; s > 0; s--) {
    let o = s > i.depth ? i.nodeAfter : i.node(s), l = i.before(s);
    if (o.inlineContent)
      Mt(n, T.create(r, l + 1, l + 1 + o.content.size), "pointer");
    else if (M.isSelectable(o))
      Mt(n, M.create(r, l), "pointer");
    else
      continue;
    return !0;
  }
}
function Ci(n) {
  return Pn(n);
}
const Rl = he ? "metaKey" : "ctrlKey";
le.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = Ci(n), i = Date.now(), s = "singleClick";
  i - n.input.lastClick.time < 500 && qf(t, n.input.lastClick) && !t[Rl] && (n.input.lastClick.type == "singleClick" ? s = "doubleClick" : n.input.lastClick.type == "doubleClick" && (s = "tripleClick")), n.input.lastClick = { time: i, x: t.clientX, y: t.clientY, type: s };
  let o = n.posAtCoords(Yn(t));
  o && (s == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new Zf(n, o, t, !!r)) : (s == "doubleClick" ? Yf : Xf)(n, o.pos, o.inside, t) ? t.preventDefault() : _e(n, "pointer"));
};
class Zf {
  constructor(e, t, r, i) {
    this.view = e, this.pos = t, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[Rl], this.allowDefault = r.shiftKey;
    let s, o;
    if (t.inside > -1)
      s = e.state.doc.nodeAt(t.inside), o = t.inside;
    else {
      let u = e.state.doc.resolve(t.pos);
      s = u.parent, o = u.depth ? u.before() : 0;
    }
    const l = i ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a && a.dom.nodeType == 1 ? a.dom : null;
    let { selection: c } = e.state;
    (r.button == 0 && s.type.spec.draggable && s.type.spec.selectable !== !1 || c instanceof M && c.from <= o && c.to > o) && (this.mightDrag = {
      node: s,
      pos: o,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && Ce && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), _e(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Re(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(Yn(e))), this.updateAllowDefault(e), this.allowDefault || !t ? _e(this.view, "pointer") : Gf(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    oe && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    se && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (Mt(this.view, v.near(this.view.state.doc.resolve(t.pos)), "pointer"), e.preventDefault()) : _e(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), _e(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
le.touchstart = (n) => {
  n.input.lastTouch = Date.now(), Ci(n), _e(n, "pointer");
};
le.touchmove = (n) => {
  n.input.lastTouch = Date.now(), _e(n, "pointer");
};
le.contextmenu = (n) => Ci(n);
function $l(n, e) {
  return n.composing ? !0 : oe && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const ed = xe ? 5e3 : -1;
ae.compositionstart = ae.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$from;
    if (e.selection.empty && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      n.markCursor = n.state.storedMarks || t.marks(), Pn(n, !0), n.markCursor = null;
    else if (Pn(n), Ce && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let r = n.domSelectionRange();
      for (let i = r.focusNode, s = r.focusOffset; i && i.nodeType == 1 && s != 0; ) {
        let o = s < 0 ? i.lastChild : i.childNodes[s - 1];
        if (!o)
          break;
        if (o.nodeType == 3) {
          n.domSelection().collapse(o, o.nodeValue.length);
          break;
        } else
          i = o, s = -1;
      }
    }
    n.input.composing = !0;
  }
  Bl(n, ed);
};
ae.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0, n.input.compositionNode = null, n.input.compositionPendingChanges && Promise.resolve().then(() => n.domObserver.flush()), n.input.compositionID++, Bl(n, 20));
};
function Bl(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => Pn(n), e));
}
function Ll(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = nd()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function td(n) {
  let e = n.domSelectionRange();
  if (!e.focusNode)
    return null;
  let t = qu(e.focusNode, e.focusOffset), r = Ku(e.focusNode, e.focusOffset);
  if (t && r && t != r) {
    let i = r.pmViewDesc, s = n.domObserver.lastChangedTextNode;
    if (t == s || r == s)
      return s;
    if (!i || !i.isText(r.nodeValue))
      return r;
    if (n.input.compositionNode == r) {
      let o = t.pmViewDesc;
      if (!(!o || !o.isText(t.nodeValue)))
        return r;
    }
  }
  return t || r;
}
function nd() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function Pn(n, e = !1) {
  if (!(xe && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), Ll(n), e || n.docView && n.docView.dirty) {
      let t = xi(n);
      return t && !t.eq(n.state.selection) ? n.dispatch(n.state.tr.setSelection(t)) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function rd(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const en = ue && He < 15 || It && Zu < 604;
le.copy = ae.cut = (n, e) => {
  let t = e, r = n.state.selection, i = t.type == "cut";
  if (r.empty)
    return;
  let s = en ? null : t.clipboardData, o = r.content(), { dom: l, text: a } = vl(n, o);
  s ? (t.preventDefault(), s.clearData(), s.setData("text/html", l.innerHTML), s.setData("text/plain", a)) : rd(n, l), i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function id(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function sd(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = n.input.shiftKey && n.input.lastKeyCode != 45;
  setTimeout(() => {
    n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? tn(n, r.value, null, i, e) : tn(n, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function tn(n, e, t, r, i) {
  let s = Nl(n, e, t, r, n.state.selection.$from);
  if (n.someProp("handlePaste", (a) => a(n, i, s || x.empty)))
    return !0;
  if (!s)
    return !1;
  let o = id(s), l = o ? n.state.tr.replaceSelectionWith(o, r) : n.state.tr.replaceSelection(s);
  return n.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function zl(n) {
  let e = n.getData("text/plain") || n.getData("Text");
  if (e)
    return e;
  let t = n.getData("text/uri-list");
  return t ? t.replace(/\r?\n/g, " ") : "";
}
ae.paste = (n, e) => {
  let t = e;
  if (n.composing && !xe)
    return;
  let r = en ? null : t.clipboardData, i = n.input.shiftKey && n.input.lastKeyCode != 45;
  r && tn(n, zl(r), r.getData("text/html"), i, t) ? t.preventDefault() : sd(n, t);
};
class Fl {
  constructor(e, t, r) {
    this.slice = e, this.move = t, this.node = r;
  }
}
const Vl = he ? "altKey" : "ctrlKey";
le.dragstart = (n, e) => {
  let t = e, r = n.input.mouseDown;
  if (r && r.done(), !t.dataTransfer)
    return;
  let i = n.state.selection, s = i.empty ? null : n.posAtCoords(Yn(t)), o;
  if (!(s && s.pos >= i.from && s.pos <= (i instanceof M ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      o = M.create(n.state.doc, r.mightDrag.pos);
    else if (t.target && t.target.nodeType == 1) {
      let f = n.docView.nearestDesc(t.target, !0);
      f && f.node.type.spec.draggable && f != n.docView && (o = M.create(n.state.doc, f.posBefore));
    }
  }
  let l = (o || n.state.selection).content(), { dom: a, text: c, slice: u } = vl(n, l);
  t.dataTransfer.clearData(), t.dataTransfer.setData(en ? "Text" : "text/html", a.innerHTML), t.dataTransfer.effectAllowed = "copyMove", en || t.dataTransfer.setData("text/plain", c), n.dragging = new Fl(u, !t[Vl], o);
};
le.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
ae.dragover = ae.dragenter = (n, e) => e.preventDefault();
ae.drop = (n, e) => {
  let t = e, r = n.dragging;
  if (n.dragging = null, !t.dataTransfer)
    return;
  let i = n.posAtCoords(Yn(t));
  if (!i)
    return;
  let s = n.state.doc.resolve(i.pos), o = r && r.slice;
  o ? n.someProp("transformPasted", (p) => {
    o = p(o, n);
  }) : o = Nl(n, zl(t.dataTransfer), en ? null : t.dataTransfer.getData("text/html"), !1, s);
  let l = !!(r && !t[Vl]);
  if (n.someProp("handleDrop", (p) => p(n, t, o || x.empty, l))) {
    t.preventDefault();
    return;
  }
  if (!o)
    return;
  t.preventDefault();
  let a = o ? il(n.state.doc, s.pos, o) : s.pos;
  a == null && (a = s.pos);
  let c = n.state.tr;
  if (l) {
    let { node: p } = r;
    p ? p.replace(c) : c.deleteSelection();
  }
  let u = c.mapping.map(a), f = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1, d = c.doc;
  if (f ? c.replaceRangeWith(u, u, o.content.firstChild) : c.replaceRange(u, u, o), c.doc.eq(d))
    return;
  let h = c.doc.resolve(u);
  if (f && M.isSelectable(o.content.firstChild) && h.nodeAfter && h.nodeAfter.sameMarkup(o.content.firstChild))
    c.setSelection(new M(h));
  else {
    let p = c.mapping.map(a);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((m, g, y, k) => p = k), c.setSelection(Si(n, h, c.doc.resolve(p)));
  }
  n.focus(), n.dispatch(c.setMeta("uiEvent", "drop"));
};
le.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && Re(n);
  }, 20));
};
le.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
le.beforeinput = (n, e) => {
  if (se && xe && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let { domChangeCount: r } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (s) => s(n, Ye(8, "Backspace")))))
        return;
      let { $cursor: i } = n.state.selection;
      i && i.pos > 0 && n.dispatch(n.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let n in ae)
  le[n] = ae[n];
function nn(n, e) {
  if (n == e)
    return !0;
  for (let t in n)
    if (n[t] !== e[t])
      return !1;
  for (let t in e)
    if (!(t in n))
      return !1;
  return !0;
}
class Rn {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || it, this.side = this.spec.side || 0;
  }
  map(e, t, r, i) {
    let { pos: s, deleted: o } = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
    return o ? null : new pe(s - r, s - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof Rn && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && nn(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class We {
  constructor(e, t) {
    this.attrs = e, this.spec = t || it;
  }
  map(e, t, r, i) {
    let s = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r, o = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return s >= o ? null : new pe(s, o, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof We && nn(this.attrs, e.attrs) && nn(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof We;
  }
  destroy() {
  }
}
class Ti {
  constructor(e, t) {
    this.attrs = e, this.spec = t || it;
  }
  map(e, t, r, i) {
    let s = e.mapResult(t.from + i, 1);
    if (s.deleted)
      return null;
    let o = e.mapResult(t.to + i, -1);
    return o.deleted || o.pos <= s.pos ? null : new pe(s.pos - r, o.pos - r, this);
  }
  valid(e, t) {
    let { index: r, offset: i } = e.content.findIndex(t.from), s;
    return i == t.from && !(s = e.child(r)).isText && i + s.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof Ti && nn(this.attrs, e.attrs) && nn(this.spec, e.spec);
  }
  destroy() {
  }
}
class pe {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.from = e, this.to = t, this.type = r;
  }
  /**
  @internal
  */
  copy(e, t) {
    return new pe(e, t, this.type);
  }
  /**
  @internal
  */
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  /**
  @internal
  */
  map(e, t, r) {
    return this.type.map(e, this, t, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, t, r) {
    return new pe(e, e, new Rn(t, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, t, r, i) {
    return new pe(e, t, new We(r, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, t, r, i) {
    return new pe(e, t, new Ti(r, i));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof We;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof Rn;
  }
}
const gt = [], it = {};
class j {
  /**
  @internal
  */
  constructor(e, t) {
    this.local = e.length ? e : gt, this.children = t.length ? t : gt;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, t) {
    return t.length ? $n(t, e, 0, it) : ee;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, t, r) {
    let i = [];
    return this.findInner(e ?? 0, t ?? 1e9, i, 0, r), i;
  }
  findInner(e, t, r, i, s) {
    for (let o = 0; o < this.local.length; o++) {
      let l = this.local[o];
      l.from <= t && l.to >= e && (!s || s(l.spec)) && r.push(l.copy(l.from + i, l.to + i));
    }
    for (let o = 0; o < this.children.length; o += 3)
      if (this.children[o] < t && this.children[o + 1] > e) {
        let l = this.children[o] + 1;
        this.children[o + 2].findInner(e - l, t - l, r, i + l, s);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, t, r) {
    return this == ee || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || it);
  }
  /**
  @internal
  */
  mapInner(e, t, r, i, s) {
    let o;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, i);
      a && a.type.valid(t, a) ? (o || (o = [])).push(a) : s.onRemove && s.onRemove(this.local[l].spec);
    }
    return this.children.length ? od(this.children, o || [], e, t, r, i, s) : o ? new j(o.sort(st), gt) : ee;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, t) {
    return t.length ? this == ee ? j.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, r) {
    let i, s = 0;
    e.forEach((l, a) => {
      let c = a + r, u;
      if (u = Hl(t, l, c)) {
        for (i || (i = this.children.slice()); s < i.length && i[s] < a; )
          s += 3;
        i[s] == a ? i[s + 2] = i[s + 2].addInner(l, u, c + 1) : i.splice(s, 0, a, a + l.nodeSize, $n(u, l, c + 1, it)), s += 3;
      }
    });
    let o = _l(s ? jl(t) : t, -r);
    for (let l = 0; l < o.length; l++)
      o[l].type.valid(e, o[l]) || o.splice(l--, 1);
    return new j(o.length ? this.local.concat(o).sort(st) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == ee ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let r = this.children, i = this.local;
    for (let s = 0; s < r.length; s += 3) {
      let o, l = r[s] + t, a = r[s + 1] + t;
      for (let u = 0, f; u < e.length; u++)
        (f = e[u]) && f.from > l && f.to < a && (e[u] = null, (o || (o = [])).push(f));
      if (!o)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[s + 2].removeInner(o, l + 1);
      c != ee ? r[s + 2] = c : (r.splice(s, 3), s -= 3);
    }
    if (i.length) {
      for (let s = 0, o; s < e.length; s++)
        if (o = e[s])
          for (let l = 0; l < i.length; l++)
            i[l].eq(o, t) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new j(i, r) : ee;
  }
  forChild(e, t) {
    if (this == ee)
      return this;
    if (t.isLeaf)
      return j.empty;
    let r, i;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let s = e + 1, o = s + t.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < o && a.to > s && a.type instanceof We) {
        let c = Math.max(s, a.from) - s, u = Math.min(o, a.to) - s;
        c < u && (i || (i = [])).push(a.copy(c, u));
      }
    }
    if (i) {
      let l = new j(i.sort(st), gt);
      return r ? new ze([l, r]) : l;
    }
    return r || ee;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof j) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let t = 0; t < this.local.length; t++)
      if (!this.local[t].eq(e.local[t]))
        return !1;
    for (let t = 0; t < this.children.length; t += 3)
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return Oi(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == ee)
      return gt;
    if (e.inlineContent || !this.local.some(We.is))
      return this.local;
    let t = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof We || t.push(this.local[r]);
    return t;
  }
}
j.empty = new j([], []);
j.removeOverlap = Oi;
const ee = j.empty;
class ze {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map((i) => i.map(e, t, it));
    return ze.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return j.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].forChild(e, t);
      s != ee && (s instanceof ze ? r = r.concat(s.members) : r.push(s));
    }
    return ze.from(r);
  }
  eq(e) {
    if (!(e instanceof ze) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].localsInner(e);
      if (s.length)
        if (!t)
          t = s;
        else {
          r && (t = t.slice(), r = !1);
          for (let o = 0; o < s.length; o++)
            t.push(s[o]);
        }
    }
    return t ? Oi(r ? t : t.sort(st)) : gt;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return ee;
      case 1:
        return e[0];
      default:
        return new ze(e.every((t) => t instanceof j) ? e : e.reduce((t, r) => t.concat(r instanceof j ? r : r.members), []));
    }
  }
}
function od(n, e, t, r, i, s, o) {
  let l = n.slice();
  for (let c = 0, u = s; c < t.maps.length; c++) {
    let f = 0;
    t.maps[c].forEach((d, h, p, m) => {
      let g = m - p - (h - d);
      for (let y = 0; y < l.length; y += 3) {
        let k = l[y + 1];
        if (k < 0 || d > k + u - f)
          continue;
        let C = l[y] + u - f;
        h >= C ? l[y + 1] = d <= C ? -2 : -1 : d >= u && g && (l[y] += g, l[y + 1] += g);
      }
      f += g;
    }), u = t.maps[c].map(u, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let u = t.map(n[c] + s), f = u - i;
      if (f < 0 || f >= r.content.size) {
        a = !0;
        continue;
      }
      let d = t.map(n[c + 1] + s, -1), h = d - i, { index: p, offset: m } = r.content.findIndex(f), g = r.maybeChild(p);
      if (g && m == f && m + g.nodeSize == h) {
        let y = l[c + 2].mapInner(t, g, u + 1, n[c] + s + 1, o);
        y != ee ? (l[c] = f, l[c + 1] = h, l[c + 2] = y) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = ld(l, n, e, t, i, s, o), u = $n(c, r, 0, o);
    e = u.local;
    for (let f = 0; f < l.length; f += 3)
      l[f + 1] < 0 && (l.splice(f, 3), f -= 3);
    for (let f = 0, d = 0; f < u.children.length; f += 3) {
      let h = u.children[f];
      for (; d < l.length && l[d] < h; )
        d += 3;
      l.splice(d, 0, u.children[f], u.children[f + 1], u.children[f + 2]);
    }
  }
  return new j(e.sort(st), l);
}
function _l(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    t.push(new pe(i.from + e, i.to + e, i.type));
  }
  return t;
}
function ld(n, e, t, r, i, s, o) {
  function l(a, c) {
    for (let u = 0; u < a.local.length; u++) {
      let f = a.local[u].map(r, i, c);
      f ? t.push(f) : o.onRemove && o.onRemove(a.local[u].spec);
    }
    for (let u = 0; u < a.children.length; u += 3)
      l(a.children[u + 2], a.children[u] + c + 1);
  }
  for (let a = 0; a < n.length; a += 3)
    n[a + 1] == -1 && l(n[a + 2], e[a] + s + 1);
  return t;
}
function Hl(n, e, t) {
  if (e.isLeaf)
    return null;
  let r = t + e.nodeSize, i = null;
  for (let s = 0, o; s < n.length; s++)
    (o = n[s]) && o.from > t && o.to < r && ((i || (i = [])).push(o), n[s] = null);
  return i;
}
function jl(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    n[t] != null && e.push(n[t]);
  return e;
}
function $n(n, e, t, r) {
  let i = [], s = !1;
  e.forEach((l, a) => {
    let c = Hl(n, l, a + t);
    if (c) {
      s = !0;
      let u = $n(c, l, t + a + 1, r);
      u != ee && i.push(a, a + l.nodeSize, u);
    }
  });
  let o = _l(s ? jl(n) : n, -t).sort(st);
  for (let l = 0; l < o.length; l++)
    o[l].type.valid(e, o[l]) || (r.onRemove && r.onRemove(o[l].spec), o.splice(l--, 1));
  return o.length || i.length ? new j(o, i) : ee;
}
function st(n, e) {
  return n.from - e.from || n.to - e.to;
}
function Oi(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t];
    if (r.from != r.to)
      for (let i = t + 1; i < e.length; i++) {
        let s = e[i];
        if (s.from == r.from) {
          s.to != r.to && (e == n && (e = n.slice()), e[i] = s.copy(s.from, r.to), Ls(e, i + 1, s.copy(r.to, s.to)));
          continue;
        } else {
          s.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, s.from), Ls(e, i, r.copy(s.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function Ls(n, e, t) {
  for (; e < n.length && st(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
function Sr(n) {
  let e = [];
  return n.someProp("decorations", (t) => {
    let r = t(n.state);
    r && r != ee && e.push(r);
  }), n.cursorWrapper && e.push(j.create(n.state.doc, [n.cursorWrapper.deco])), ze.from(e);
}
const ad = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, cd = ue && He <= 11;
class ud {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class fd {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new ud(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      ue && He <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), cd && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, ad)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let t = 0; t < e.length; t++)
          this.queue.push(e[t]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (Es(this.view)) {
      if (this.suppressingSelectionUpdates)
        return Re(this.view);
      if (ue && He <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && ct(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let t = /* @__PURE__ */ new Set(), r;
    for (let s = e.focusNode; s; s = Zt(s))
      t.add(s);
    for (let s = e.anchorNode; s; s = Zt(s))
      if (t.has(s)) {
        r = s;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && Es(e) && !this.ignoreSelectionChange(r), s = -1, o = -1, l = !1, a = [];
    if (e.editable)
      for (let u = 0; u < t.length; u++) {
        let f = this.registerMutation(t[u], a);
        f && (s = s < 0 ? f.from : Math.min(f.from, s), o = o < 0 ? f.to : Math.max(f.to, o), f.typeOver && (l = !0));
      }
    if (Ce && a.length) {
      let u = a.filter((f) => f.nodeName == "BR");
      if (u.length == 2) {
        let [f, d] = u;
        f.parentNode && f.parentNode.parentNode == d.parentNode ? d.remove() : f.remove();
      } else {
        let { focusNode: f } = this.currentSelection;
        for (let d of u) {
          let h = d.parentNode;
          h && h.nodeName == "LI" && (!f || pd(e, f) != h) && d.remove();
        }
      }
    }
    let c = null;
    s < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && Un(r) && (c = xi(e)) && c.eq(v.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, Re(e), this.currentSelection.set(r), e.scrollToSelection()) : (s > -1 || i) && (s > -1 && (e.docView.markDirty(s, o), dd(e)), this.handleDOMChange(s, o, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || Re(e), this.currentSelection.set(r));
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let u = 0; u < e.addedNodes.length; u++) {
        let f = e.addedNodes[u];
        t.push(f), f.nodeType == 3 && (this.lastChangedTextNode = f);
      }
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, s = e.nextSibling;
      if (ue && He <= 11 && e.addedNodes.length)
        for (let u = 0; u < e.addedNodes.length; u++) {
          let { previousSibling: f, nextSibling: d } = e.addedNodes[u];
          (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (i = f), (!d || Array.prototype.indexOf.call(e.addedNodes, d) < 0) && (s = d);
        }
      let o = i && i.parentNode == e.target ? Y(i) + 1 : 0, l = r.localPosFromDOM(e.target, o, -1), a = s && s.parentNode == e.target ? Y(s) : e.target.childNodes.length, c = r.localPosFromDOM(e.target, a, 1);
      return { from: l, to: c };
    } else
      return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : (this.lastChangedTextNode = e.target, {
        from: r.posAtStart,
        to: r.posAtEnd,
        // An event was generated for a text change that didn't change
        // any text. Mark the dom change to fall back to assuming the
        // selection was typed over with an identical value if it can't
        // find another change.
        typeOver: e.target.nodeValue == e.oldValue
      });
  }
}
let zs = /* @__PURE__ */ new WeakMap(), Fs = !1;
function dd(n) {
  if (!zs.has(n) && (zs.set(n, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
    if (n.requiresGeckoHackNode = Ce, Fs)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), Fs = !0;
  }
}
function Vs(n, e) {
  let t = e.startContainer, r = e.startOffset, i = e.endContainer, s = e.endOffset, o = n.domAtPos(n.state.selection.anchor);
  return ct(o.node, o.offset, i, s) && ([t, r, i, s] = [i, s, t, r]), { anchorNode: t, anchorOffset: r, focusNode: i, focusOffset: s };
}
function hd(n, e) {
  if (e.getComposedRanges) {
    let i = e.getComposedRanges(n.root)[0];
    if (i)
      return Vs(n, i);
  }
  let t;
  function r(i) {
    i.preventDefault(), i.stopImmediatePropagation(), t = i.getTargetRanges()[0];
  }
  return n.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", r, !0), t ? Vs(n, t) : null;
}
function pd(n, e) {
  for (let t = e.parentNode; t && t != n.dom; t = t.parentNode) {
    let r = n.docView.nearestDesc(t, !0);
    if (r && r.node.isBlock)
      return t;
  }
  return null;
}
function md(n, e, t) {
  let { node: r, fromOffset: i, toOffset: s, from: o, to: l } = n.docView.parseRange(e, t), a = n.domSelectionRange(), c, u = a.anchorNode;
  if (u && n.dom.contains(u.nodeType == 1 ? u : u.parentNode) && (c = [{ node: u, offset: a.anchorOffset }], Un(a) || c.push({ node: a.focusNode, offset: a.focusOffset })), se && n.input.lastKeyCode === 8)
    for (let g = s; g > i; g--) {
      let y = r.childNodes[g - 1], k = y.pmViewDesc;
      if (y.nodeName == "BR" && !k) {
        s = g;
        break;
      }
      if (!k || k.size)
        break;
    }
  let f = n.state.doc, d = n.someProp("domParser") || Nt.fromSchema(n.state.schema), h = f.resolve(o), p = null, m = d.parse(r, {
    topNode: h.parent,
    topMatch: h.parent.contentMatchAt(h.index()),
    topOpen: !0,
    from: i,
    to: s,
    preserveWhitespace: h.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: c,
    ruleFromNode: gd,
    context: h
  });
  if (c && c[0].pos != null) {
    let g = c[0].pos, y = c[1] && c[1].pos;
    y == null && (y = g), p = { anchor: g + o, head: y + o };
  }
  return { doc: m, sel: p, from: o, to: l };
}
function gd(n) {
  let e = n.pmViewDesc;
  if (e)
    return e.parseRule();
  if (n.nodeName == "BR" && n.parentNode) {
    if (oe && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (n.parentNode.lastChild == n || oe && /^(tr|table)$/i.test(n.parentNode.nodeName))
      return { ignore: !0 };
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const yd = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function bd(n, e, t, r, i) {
  let s = n.input.compositionPendingChanges || (n.composing ? n.input.compositionID : 0);
  if (n.input.compositionPendingChanges = 0, e < 0) {
    let E = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, Z = xi(n, E);
    if (Z && !n.state.selection.eq(Z)) {
      if (se && xe && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", (fa) => fa(n, Ye(13, "Enter"))))
        return;
      let un = n.state.tr.setSelection(Z);
      E == "pointer" ? un.setMeta("pointer", !0) : E == "key" && un.scrollIntoView(), s && un.setMeta("composition", s), n.dispatch(un);
    }
    return;
  }
  let o = n.state.doc.resolve(e), l = o.sharedDepth(t);
  e = o.before(l + 1), t = n.state.doc.resolve(t).after(l + 1);
  let a = n.state.selection, c = md(n, e, t), u = n.state.doc, f = u.slice(c.from, c.to), d, h;
  n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (d = n.state.selection.to, h = "end") : (d = n.state.selection.from, h = "start"), n.input.lastKeyCode = null;
  let p = Sd(f.content, c.doc.content, c.from, d, h);
  if ((It && n.input.lastIOSEnter > Date.now() - 225 || xe) && i.some((E) => E.nodeType == 1 && !yd.test(E.nodeName)) && (!p || p.endA >= p.endB) && n.someProp("handleKeyDown", (E) => E(n, Ye(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!p)
    if (r && a instanceof T && !a.empty && a.$head.sameParent(a.$anchor) && !n.composing && !(c.sel && c.sel.anchor != c.sel.head))
      p = { start: a.from, endA: a.to, endB: a.to };
    else {
      if (c.sel) {
        let E = _s(n, n.state.doc, c.sel);
        if (E && !E.eq(n.state.selection)) {
          let Z = n.state.tr.setSelection(E);
          s && Z.setMeta("composition", s), n.dispatch(Z);
        }
      }
      return;
    }
  n.input.domChangeCount++, n.state.selection.from < n.state.selection.to && p.start == p.endB && n.state.selection instanceof T && (p.start > n.state.selection.from && p.start <= n.state.selection.from + 2 && n.state.selection.from >= c.from ? p.start = n.state.selection.from : p.endA < n.state.selection.to && p.endA >= n.state.selection.to - 2 && n.state.selection.to <= c.to && (p.endB += n.state.selection.to - p.endA, p.endA = n.state.selection.to)), ue && He <= 11 && p.endB == p.start + 1 && p.endA == p.start && p.start > c.from && c.doc.textBetween(p.start - c.from - 1, p.start - c.from + 1) == "  " && (p.start--, p.endA--, p.endB--);
  let m = c.doc.resolveNoCache(p.start - c.from), g = c.doc.resolveNoCache(p.endB - c.from), y = u.resolve(p.start), k = m.sameParent(g) && m.parent.inlineContent && y.end() >= p.endA, C;
  if ((It && n.input.lastIOSEnter > Date.now() - 225 && (!k || i.some((E) => E.nodeName == "DIV" || E.nodeName == "P")) || !k && m.pos < c.doc.content.size && !m.sameParent(g) && (C = v.findFrom(c.doc.resolve(m.pos + 1), 1, !0)) && C.head == g.pos) && n.someProp("handleKeyDown", (E) => E(n, Ye(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > p.start && xd(u, p.start, p.endA, m, g) && n.someProp("handleKeyDown", (E) => E(n, Ye(8, "Backspace")))) {
    xe && se && n.domObserver.suppressSelectionUpdates();
    return;
  }
  se && xe && p.endB == p.start && (n.input.lastAndroidDelete = Date.now()), xe && !k && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == p.endA && (p.endB -= 2, g = c.doc.resolveNoCache(p.endB - c.from), setTimeout(() => {
    n.someProp("handleKeyDown", function(E) {
      return E(n, Ye(13, "Enter"));
    });
  }, 20));
  let N = p.start, I = p.endA, w, A, Q;
  if (k) {
    if (m.pos == g.pos)
      ue && He <= 11 && m.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => Re(n), 20)), w = n.state.tr.delete(N, I), A = u.resolve(p.start).marksAcross(u.resolve(p.endA));
    else if (
      // Adding or removing a mark
      p.endA == p.endB && (Q = kd(m.parent.content.cut(m.parentOffset, g.parentOffset), y.parent.content.cut(y.parentOffset, p.endA - y.start())))
    )
      w = n.state.tr, Q.type == "add" ? w.addMark(N, I, Q.mark) : w.removeMark(N, I, Q.mark);
    else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
      let E = m.parent.textBetween(m.parentOffset, g.parentOffset);
      if (n.someProp("handleTextInput", (Z) => Z(n, N, I, E)))
        return;
      w = n.state.tr.insertText(E, N, I);
    }
  }
  if (w || (w = n.state.tr.replace(N, I, c.doc.slice(p.start - c.from, p.endB - c.from))), c.sel) {
    let E = _s(n, w.doc, c.sel);
    E && !(se && xe && n.composing && E.empty && (p.start != p.endB || n.input.lastAndroidDelete < Date.now() - 100) && (E.head == N || E.head == w.mapping.map(I) - 1) || ue && E.empty && E.head == N) && w.setSelection(E);
  }
  A && w.ensureMarks(A), s && w.setMeta("composition", s), n.dispatch(w.scrollIntoView());
}
function _s(n, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : Si(n, e.resolve(t.anchor), e.resolve(t.head));
}
function kd(n, e) {
  let t = n.firstChild.marks, r = e.firstChild.marks, i = t, s = r, o, l, a;
  for (let u = 0; u < r.length; u++)
    i = r[u].removeFromSet(i);
  for (let u = 0; u < t.length; u++)
    s = t[u].removeFromSet(s);
  if (i.length == 1 && s.length == 0)
    l = i[0], o = "add", a = (u) => u.mark(l.addToSet(u.marks));
  else if (i.length == 0 && s.length == 1)
    l = s[0], o = "remove", a = (u) => u.mark(l.removeFromSet(u.marks));
  else
    return null;
  let c = [];
  for (let u = 0; u < e.childCount; u++)
    c.push(a(e.child(u)));
  if (b.from(c).eq(n))
    return { mark: l, type: o };
}
function xd(n, e, t, r, i) {
  if (
    // The content must have shrunk
    t - e <= i.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
    wr(r, !0, !1) < i.pos
  )
    return !1;
  let s = n.resolve(e);
  if (!r.parent.isTextblock) {
    let l = s.nodeAfter;
    return l != null && t == e + l.nodeSize;
  }
  if (s.parentOffset < s.parent.content.size || !s.parent.isTextblock)
    return !1;
  let o = n.resolve(wr(s, !0, !0));
  return !o.parent.isTextblock || o.pos > t || wr(o, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(o.parent.content);
}
function wr(n, e, t) {
  let r = n.depth, i = e ? n.end() : n.pos;
  for (; r > 0 && (e || n.indexAfter(r) == n.node(r).childCount); )
    r--, i++, e = !1;
  if (t) {
    let s = n.node(r).maybeChild(n.indexAfter(r));
    for (; s && !s.isLeaf; )
      s = s.firstChild, i++;
  }
  return i;
}
function Sd(n, e, t, r, i) {
  let s = n.findDiffStart(e, t);
  if (s == null)
    return null;
  let { a: o, b: l } = n.findDiffEnd(e, t + n.size, t + e.size);
  if (i == "end") {
    let a = Math.max(0, s - Math.min(o, l));
    r -= o + a - s;
  }
  if (o < s && n.size < e.size) {
    let a = r <= s && r >= o ? s - r : 0;
    s -= a, s && s < e.size && Hs(e.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1), l = s + (l - o), o = s;
  } else if (l < s) {
    let a = r <= s && r >= l ? s - r : 0;
    s -= a, s && s < n.size && Hs(n.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1), o = s + (o - l), l = s;
  }
  return { start: s, endA: o, endB: l };
}
function Hs(n) {
  if (n.length != 2)
    return !1;
  let e = n.charCodeAt(0), t = n.charCodeAt(1);
  return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319;
}
class wd {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new _f(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(Ks), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Js(this), Ws(this), this.nodeViews = qs(this), this.docView = Ms(this.state.doc, js(this), Sr(this), this.dom, this), this.domObserver = new fd(this, (r, i, s, o) => bd(this, r, i, s, o)), this.domObserver.start(), Hf(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let t in e)
        this._props[t] = e[t];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && ni(this);
    let t = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(Ks), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let t = {};
    for (let r in this._props)
      t[r] = this._props[r];
    t.state = this.state;
    for (let r in e)
      t[r] = e[r];
    this.update(t);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    var r;
    let i = this.state, s = !1, o = !1;
    e.storedMarks && this.composing && (Ll(this), o = !0), this.state = e;
    let l = i.plugins != e.plugins || this._props.plugins != t.plugins;
    if (l || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let h = qs(this);
      Cd(h, this.nodeViews) && (this.nodeViews = h, s = !0);
    }
    (l || t.handleDOMEvents != this._props.handleDOMEvents) && ni(this), this.editable = Js(this), Ws(this);
    let a = Sr(this), c = js(this), u = i.plugins != e.plugins && !i.doc.eq(e.doc) ? "reset" : e.scrollToSelection > i.scrollToSelection ? "to selection" : "preserve", f = s || !this.docView.matchesNode(e.doc, c, a);
    (f || !e.selection.eq(i.selection)) && (o = !0);
    let d = u == "preserve" && o && this.dom.style.overflowAnchor == null && nf(this);
    if (o) {
      this.domObserver.stop();
      let h = f && (ue || se) && !this.composing && !i.selection.empty && !e.selection.empty && Md(i.selection, e.selection);
      if (f) {
        let p = se ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = td(this)), (s || !this.docView.update(e.doc, c, a, this)) && (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = Ms(e.doc, c, a, this.dom, this)), p && !this.trackWrites && (h = !0);
      }
      h || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && vf(this)) ? Re(this, h) : (Cl(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(i), !((r = this.dragging) === null || r === void 0) && r.node && !i.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, i), u == "reset" ? this.dom.scrollTop = 0 : u == "to selection" ? this.scrollToSelection() : d && rf(d);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!this.someProp("handleScrollToSelection", (t) => t(this)))
      if (this.state.selection instanceof M) {
        let t = this.docView.domAfterPos(this.state.selection.from);
        t.nodeType == 1 && ys(this, t.getBoundingClientRect(), e);
      } else
        ys(this, this.coordsAtPos(this.state.selection.head, 1), e);
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let t = 0; t < this.directPlugins.length; t++) {
        let r = this.directPlugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let t = 0; t < this.state.plugins.length; t++) {
        let r = this.state.plugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let t = 0; t < this.pluginViews.length; t++) {
        let r = this.pluginViews[t];
        r.update && r.update(this, e);
      }
  }
  updateDraggedNode(e, t) {
    let r = e.node, i = -1;
    if (this.state.doc.nodeAt(r.from) == r.node)
      i = r.from;
    else {
      let s = r.from + (this.state.doc.content.size - t.doc.content.size);
      (s > 0 && this.state.doc.nodeAt(s)) == r.node && (i = s);
    }
    this.dragging = new Fl(e.slice, e.move, i < 0 ? void 0 : M.create(this.state.doc, i));
  }
  someProp(e, t) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = t ? t(r) : r))
      return i;
    for (let o = 0; o < this.directPlugins.length; o++) {
      let l = this.directPlugins[o].props[e];
      if (l != null && (i = t ? t(l) : l))
        return i;
    }
    let s = this.state.plugins;
    if (s)
      for (let o = 0; o < s.length; o++) {
        let l = s[o].props[e];
        if (l != null && (i = t ? t(l) : l))
          return i;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (ue) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && sf(this.dom), Re(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let t = this.dom.parentNode; t; t = t.parentNode)
        if (t.nodeType == 9 || t.nodeType == 11 && t.host)
          return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t;
    }
    return e || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return uf(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, t = 1) {
    return gl(this, e, t);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    return t ? t.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, t, r = -1) {
    let i = this.docView.posFromDOM(e, t, r);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, t) {
    return mf(this, t || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, t) {
    return tn(this, "", e, !1, t || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, t) {
    return tn(this, e, null, !0, t || new ClipboardEvent("paste"));
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (jf(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], Sr(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, Wu());
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return Jf(this, e);
  }
  /**
  Dispatch a transaction. Will call
  [`dispatchTransaction`](https://prosemirror.net/docs/ref/#view.DirectEditorProps.dispatchTransaction)
  when given, and otherwise defaults to applying the transaction to
  the current state and calling
  [`updateState`](https://prosemirror.net/docs/ref/#view.EditorView.updateState) with the result.
  This method is bound to the view instance, so that it can be
  easily passed around.
  */
  dispatch(e) {
    let t = this._props.dispatchTransaction;
    t ? t.call(this, e) : this.updateState(this.state.apply(e));
  }
  /**
  @internal
  */
  domSelectionRange() {
    let e = this.domSelection();
    return oe && this.root.nodeType === 11 && Gu(this.dom.ownerDocument) == this.dom && hd(this, e) || e;
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
function js(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(n.editable), n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t)
      for (let r in t)
        r == "class" ? e.class += " " + t[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
  }), e.translate || (e.translate = "no"), [pe.node(0, n.state.doc.content.size, e)];
}
function Ws(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: pe.widget(n.state.selection.head, e, { raw: !0, marks: n.markCursor }) };
  } else
    n.cursorWrapper = null;
}
function Js(n) {
  return !n.someProp("editable", (e) => e(n.state) === !1);
}
function Md(n, e) {
  let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
  return n.$anchor.start(t) != e.$anchor.start(t);
}
function qs(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return n.someProp("nodeViews", t), n.someProp("markViews", t), e;
}
function Cd(n, e) {
  let t = 0, r = 0;
  for (let i in n) {
    if (n[i] != e[i])
      return !0;
    t++;
  }
  for (let i in e)
    r++;
  return t != r;
}
function Ks(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var Je = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, Bn = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Td = typeof navigator < "u" && /Mac/.test(navigator.platform), Od = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var X = 0; X < 10; X++)
  Je[48 + X] = Je[96 + X] = String(X);
for (var X = 1; X <= 24; X++)
  Je[X + 111] = "F" + X;
for (var X = 65; X <= 90; X++)
  Je[X] = String.fromCharCode(X + 32), Bn[X] = String.fromCharCode(X);
for (var Mr in Je)
  Bn.hasOwnProperty(Mr) || (Bn[Mr] = Je[Mr]);
function vd(n) {
  var e = Td && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || Od && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? Bn : Je)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const Nd = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function Ed(n) {
  let e = n.split(/-(?!$)/), t = e[e.length - 1];
  t == "Space" && (t = " ");
  let r, i, s, o;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      Nd ? o = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (t = "Alt-" + t), i && (t = "Ctrl-" + t), o && (t = "Meta-" + t), s && (t = "Shift-" + t), t;
}
function Ad(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n)
    e[Ed(t)] = n[t];
  return e;
}
function Cr(n, e, t = !0) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t && e.shiftKey && (n = "Shift-" + n), n;
}
function Id(n) {
  return new ke({ props: { handleKeyDown: Wl(n) } });
}
function Wl(n) {
  let e = Ad(n);
  return function(t, r) {
    let i = vd(r), s, o = e[Cr(i, r)];
    if (o && o(t.state, t.dispatch, t))
      return !0;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let l = e[Cr(i, r, !1)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
      if ((r.shiftKey || r.altKey || r.metaKey || i.charCodeAt(0) > 127) && (s = Je[r.keyCode]) && s != i) {
        let l = e[Cr(s, r)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
    }
    return !1;
  };
}
const Dd = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0);
function Jl(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t;
}
const Pd = (n, e, t) => {
  let r = Jl(n, t);
  if (!r)
    return !1;
  let i = vi(r);
  if (!i) {
    let o = r.blockRange(), l = o && $t(o);
    return l == null ? !1 : (e && e(n.tr.lift(o, l).scrollIntoView()), !0);
  }
  let s = i.nodeBefore;
  if (!s.type.spec.isolating && Gl(n, i, e))
    return !0;
  if (r.parent.content.size == 0 && (Dt(s, "end") || M.isSelectable(s))) {
    let o = qn(n.doc, r.before(), r.after(), x.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = n.tr.step(o);
        l.setSelection(Dt(s, "end") ? v.findFrom(l.doc.resolve(l.mapping.map(i.pos, -1)), -1) : M.create(l.doc, i.pos - s.nodeSize)), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos - s.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, Rd = (n, e, t) => {
  let r = Jl(n, t);
  if (!r)
    return !1;
  let i = vi(r);
  return i ? ql(n, i, e) : !1;
}, $d = (n, e, t) => {
  let r = Kl(n, t);
  if (!r)
    return !1;
  let i = Ni(r);
  return i ? ql(n, i, e) : !1;
};
function ql(n, e, t) {
  let r = e.nodeBefore, i = r, s = e.pos - 1;
  for (; !i.isTextblock; s--) {
    if (i.type.spec.isolating)
      return !1;
    let u = i.lastChild;
    if (!u)
      return !1;
    i = u;
  }
  let o = e.nodeAfter, l = o, a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating)
      return !1;
    let u = l.firstChild;
    if (!u)
      return !1;
    l = u;
  }
  let c = qn(n.doc, s, a, x.empty);
  if (!c || c.from != s || c instanceof J && c.slice.size >= a - s)
    return !1;
  if (t) {
    let u = n.tr.step(c);
    u.setSelection(T.create(u.doc, s)), t(u.scrollIntoView());
  }
  return !0;
}
function Dt(n, e, t = !1) {
  for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (t && r.childCount != 1)
      return !1;
  }
  return !1;
}
const Bd = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, s = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0)
      return !1;
    s = vi(r);
  }
  let o = s && s.nodeBefore;
  return !o || !M.isSelectable(o) ? !1 : (e && e(n.tr.setSelection(M.create(n.doc, s.pos - o.nodeSize)).scrollIntoView()), !0);
};
function vi(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0)
        return n.doc.resolve(n.before(e + 1));
      if (n.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Kl(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t;
}
const Ld = (n, e, t) => {
  let r = Kl(n, t);
  if (!r)
    return !1;
  let i = Ni(r);
  if (!i)
    return !1;
  let s = i.nodeAfter;
  if (Gl(n, i, e))
    return !0;
  if (r.parent.content.size == 0 && (Dt(s, "start") || M.isSelectable(s))) {
    let o = qn(n.doc, r.before(), r.after(), x.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = n.tr.step(o);
        l.setSelection(Dt(s, "start") ? v.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : M.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos, i.pos + s.nodeSize).scrollIntoView()), !0) : !1;
}, zd = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, s = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size)
      return !1;
    s = Ni(r);
  }
  let o = s && s.nodeAfter;
  return !o || !M.isSelectable(o) ? !1 : (e && e(n.tr.setSelection(M.create(n.doc, s.pos)).scrollIntoView()), !0);
};
function Ni(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      let t = n.node(e);
      if (n.index(e) + 1 < t.childCount)
        return n.doc.resolve(n.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const Fd = (n, e) => {
  let t = n.selection, r = t instanceof M, i;
  if (r) {
    if (t.node.isTextblock || !qe(n.doc, t.from))
      return !1;
    i = t.from;
  } else if (i = Jn(n.doc, t.from, -1), i == null)
    return !1;
  if (e) {
    let s = n.tr.join(i);
    r && s.setSelection(M.create(s.doc, i - n.doc.resolve(i).nodeBefore.nodeSize)), e(s.scrollIntoView());
  }
  return !0;
}, Vd = (n, e) => {
  let t = n.selection, r;
  if (t instanceof M) {
    if (t.node.isTextblock || !qe(n.doc, t.to))
      return !1;
    r = t.to;
  } else if (r = Jn(n.doc, t.to, 1), r == null)
    return !1;
  return e && e(n.tr.join(r).scrollIntoView()), !0;
}, _d = (n, e) => {
  let { $from: t, $to: r } = n.selection, i = t.blockRange(r), s = i && $t(i);
  return s == null ? !1 : (e && e(n.tr.lift(i, s).scrollIntoView()), !0);
}, Hd = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  return !t.parent.type.spec.code || !t.sameParent(r) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
};
function Ul(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const jd = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  if (!t.parent.type.spec.code || !t.sameParent(r))
    return !1;
  let i = t.node(-1), s = t.indexAfter(-1), o = Ul(i.contentMatchAt(s));
  if (!o || !i.canReplaceWith(s, s, o))
    return !1;
  if (e) {
    let l = t.after(), a = n.tr.replaceWith(l, l, o.createAndFill());
    a.setSelection(v.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, Wd = (n, e) => {
  let t = n.selection, { $from: r, $to: i } = t;
  if (t instanceof Me || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let s = Ul(i.parent.contentMatchAt(i.indexAfter()));
  if (!s || !s.isTextblock)
    return !1;
  if (e) {
    let o = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, l = n.tr.insert(o, s.createAndFill());
    l.setSelection(T.create(l.doc, o + 1)), e(l.scrollIntoView());
  }
  return !0;
}, Jd = (n, e) => {
  let { $cursor: t } = n.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let s = t.before();
    if (St(n.doc, s))
      return e && e(n.tr.split(s).scrollIntoView()), !0;
  }
  let r = t.blockRange(), i = r && $t(r);
  return i == null ? !1 : (e && e(n.tr.lift(r, i).scrollIntoView()), !0);
}, qd = (n, e) => {
  let { $from: t, to: r } = n.selection, i, s = t.sharedDepth(r);
  return s == 0 ? !1 : (i = t.before(s), e && e(n.tr.setSelection(M.create(n.doc, i))), !0);
};
function Kd(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, s = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(s - 1, s) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(s, s + 1) || !(i.isTextblock || qe(n.doc, e.pos)) ? !1 : (t && t(n.tr.clearIncompatible(e.pos, r.type, r.contentMatchAt(r.childCount)).join(e.pos).scrollIntoView()), !0);
}
function Gl(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, s, o;
  if (r.type.spec.isolating || i.type.spec.isolating)
    return !1;
  if (Kd(n, e, t))
    return !0;
  let l = e.parent.canReplace(e.index(), e.index() + 1);
  if (l && (s = (o = r.contentMatchAt(r.childCount)).findWrapping(i.type)) && o.matchType(s[0] || i.type).validEnd) {
    if (t) {
      let f = e.pos + i.nodeSize, d = b.empty;
      for (let m = s.length - 1; m >= 0; m--)
        d = b.from(s[m].create(null, d));
      d = b.from(r.copy(d));
      let h = n.tr.step(new q(e.pos - 1, f, e.pos, f, new x(d, 1, 0), s.length, !0)), p = f + 2 * s.length;
      qe(h.doc, p) && h.join(p), t(h.scrollIntoView());
    }
    return !0;
  }
  let a = v.findFrom(e, 1), c = a && a.$from.blockRange(a.$to), u = c && $t(c);
  if (u != null && u >= e.depth)
    return t && t(n.tr.lift(c, u).scrollIntoView()), !0;
  if (l && Dt(i, "start", !0) && Dt(r, "end")) {
    let f = r, d = [];
    for (; d.push(f), !f.isTextblock; )
      f = f.lastChild;
    let h = i, p = 1;
    for (; !h.isTextblock; h = h.firstChild)
      p++;
    if (f.canReplace(f.childCount, f.childCount, h.content)) {
      if (t) {
        let m = b.empty;
        for (let y = d.length - 1; y >= 0; y--)
          m = b.from(d[y].copy(m));
        let g = n.tr.step(new q(e.pos - d.length, e.pos + i.nodeSize, e.pos + p, e.pos + i.nodeSize - p, new x(m, d.length, 0), 0, !0));
        t(g.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Yl(n) {
  return function(e, t) {
    let r = e.selection, i = n < 0 ? r.$from : r.$to, s = i.depth;
    for (; i.node(s).isInline; ) {
      if (!s)
        return !1;
      s--;
    }
    return i.node(s).isTextblock ? (t && t(e.tr.setSelection(T.create(e.doc, n < 0 ? i.start(s) : i.end(s)))), !0) : !1;
  };
}
const Ud = Yl(-1), Gd = Yl(1);
function Yd(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s), l = o && yi(o, n, e);
    return l ? (r && r(t.tr.wrap(o, l).scrollIntoView()), !0) : !1;
  };
}
function Us(n, e = null) {
  return function(t, r) {
    let i = !1;
    for (let s = 0; s < t.selection.ranges.length && !i; s++) {
      let { $from: { pos: o }, $to: { pos: l } } = t.selection.ranges[s];
      t.doc.nodesBetween(o, l, (a, c) => {
        if (i)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(n, e)))
          if (a.type == n)
            i = !0;
          else {
            let u = t.doc.resolve(c), f = u.index();
            i = u.parent.canReplaceWith(f, f + 1, n);
          }
      });
    }
    if (!i)
      return !1;
    if (r) {
      let s = t.tr;
      for (let o = 0; o < t.selection.ranges.length; o++) {
        let { $from: { pos: l }, $to: { pos: a } } = t.selection.ranges[o];
        s.setBlockType(l, a, n, e);
      }
      r(s.scrollIntoView());
    }
    return !0;
  };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function Xd(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s), l = !1, a = o;
    if (!o)
      return !1;
    if (o.depth >= 2 && i.node(o.depth - 1).type.compatibleContent(n) && o.startIndex == 0) {
      if (i.index(o.depth - 1) == 0)
        return !1;
      let u = t.doc.resolve(o.start - 2);
      a = new Nn(u, u, o.depth), o.endIndex < o.parent.childCount && (o = new Nn(i, t.doc.resolve(s.end(o.depth)), o.depth)), l = !0;
    }
    let c = yi(a, n, e, o);
    return c ? (r && r(Qd(t.tr, o, c, l, n).scrollIntoView()), !0) : !1;
  };
}
function Qd(n, e, t, r, i) {
  let s = b.empty;
  for (let u = t.length - 1; u >= 0; u--)
    s = b.from(t[u].type.create(t[u].attrs, s));
  n.step(new q(e.start - (r ? 2 : 0), e.end, e.start, e.end, new x(s, 0, 0), t.length, !0));
  let o = 0;
  for (let u = 0; u < t.length; u++)
    t[u].type == i && (o = u + 1);
  let l = t.length - o, a = e.start + t.length - (r ? 2 : 0), c = e.parent;
  for (let u = e.startIndex, f = e.endIndex, d = !0; u < f; u++, d = !1)
    !d && St(n.doc, a, l) && (n.split(a, l), a += 2 * l), a += c.child(u).nodeSize;
  return n;
}
function Zd(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, s = r.blockRange(i, (o) => o.childCount > 0 && o.firstChild.type == n);
    return s ? t ? r.node(s.depth - 1).type == n ? eh(e, t, n, s) : th(e, t, s) : !0 : !1;
  };
}
function eh(n, e, t, r) {
  let i = n.tr, s = r.end, o = r.$to.end(r.depth);
  s < o && (i.step(new q(s - 1, o, s, o, new x(b.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new Nn(i.doc.resolve(r.$from.pos), i.doc.resolve(o), r.depth));
  const l = $t(r);
  if (l == null)
    return !1;
  i.lift(r, l);
  let a = i.mapping.map(s, -1) - 1;
  return qe(i.doc, a) && i.join(a), e(i.scrollIntoView()), !0;
}
function th(n, e, t) {
  let r = n.tr, i = t.parent;
  for (let h = t.end, p = t.endIndex - 1, m = t.startIndex; p > m; p--)
    h -= i.child(p).nodeSize, r.delete(h - 1, h + 1);
  let s = r.doc.resolve(t.start), o = s.nodeAfter;
  if (r.mapping.map(t.end) != t.start + s.nodeAfter.nodeSize)
    return !1;
  let l = t.startIndex == 0, a = t.endIndex == i.childCount, c = s.node(-1), u = s.index(-1);
  if (!c.canReplace(u + (l ? 0 : 1), u + 1, o.content.append(a ? b.empty : b.from(i))))
    return !1;
  let f = s.pos, d = f + o.nodeSize;
  return r.step(new q(f - (l ? 1 : 0), d + (a ? 1 : 0), f + 1, d - 1, new x((l ? b.empty : b.from(i.copy(b.empty))).append(a ? b.empty : b.from(i.copy(b.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function nh(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, s = r.blockRange(i, (c) => c.childCount > 0 && c.firstChild.type == n);
    if (!s)
      return !1;
    let o = s.startIndex;
    if (o == 0)
      return !1;
    let l = s.parent, a = l.child(o - 1);
    if (a.type != n)
      return !1;
    if (t) {
      let c = a.lastChild && a.lastChild.type == l.type, u = b.from(c ? n.create() : null), f = new x(b.from(n.create(null, b.from(l.type.create(null, u)))), c ? 3 : 1, 0), d = s.start, h = s.end;
      t(e.tr.step(new q(d - (c ? 3 : 1), h, d, h, f, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function Xn(n) {
  const { state: e, transaction: t } = n;
  let { selection: r } = t, { doc: i } = t, { storedMarks: s } = t;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return s;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = t.selection, i = t.doc, s = t.storedMarks, t;
    }
  };
}
class Qn {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: t, state: r } = this, { view: i } = t, { tr: s } = r, o = this.buildProps(s);
    return Object.fromEntries(Object.entries(e).map(([l, a]) => [l, (...u) => {
      const f = a(...u)(o);
      return !s.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(s), f;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, t = !0) {
    const { rawCommands: r, editor: i, state: s } = this, { view: o } = i, l = [], a = !!e, c = e || s.tr, u = () => (!a && t && !c.getMeta("preventDispatch") && !this.hasCustomState && o.dispatch(c), l.every((d) => d === !0)), f = {
      ...Object.fromEntries(Object.entries(r).map(([d, h]) => [d, (...m) => {
        const g = this.buildProps(c, t), y = h(...m)(g);
        return l.push(y), f;
      }])),
      run: u
    };
    return f;
  }
  createCan(e) {
    const { rawCommands: t, state: r } = this, i = !1, s = e || r.tr, o = this.buildProps(s, i);
    return {
      ...Object.fromEntries(Object.entries(t).map(([a, c]) => [a, (...u) => c(...u)({ ...o, dispatch: void 0 })])),
      chain: () => this.createChain(s, i)
    };
  }
  buildProps(e, t = !0) {
    const { rawCommands: r, editor: i, state: s } = this, { view: o } = i, l = {
      tr: e,
      editor: i,
      view: o,
      state: Xn({
        state: s,
        transaction: e
      }),
      dispatch: t ? () => {
      } : void 0,
      chain: () => this.createChain(e, t),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([a, c]) => [a, (...u) => c(...u)(l)]));
      }
    };
    return l;
  }
}
class rh {
  constructor() {
    this.callbacks = {};
  }
  on(e, t) {
    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
  }
  emit(e, ...t) {
    const r = this.callbacks[e];
    return r && r.forEach((i) => i.apply(this, t)), this;
  }
  off(e, t) {
    const r = this.callbacks[e];
    return r && (t ? this.callbacks[e] = r.filter((i) => i !== t) : delete this.callbacks[e]), this;
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function S(n, e, t) {
  return n.config[e] === void 0 && n.parent ? S(n.parent, e, t) : typeof n.config[e] == "function" ? n.config[e].bind({
    ...t,
    parent: n.parent ? S(n.parent, e, t) : null
  }) : n.config[e];
}
function Zn(n) {
  const e = n.filter((i) => i.type === "extension"), t = n.filter((i) => i.type === "node"), r = n.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: r
  };
}
function Xl(n) {
  const e = [], { nodeExtensions: t, markExtensions: r } = Zn(n), i = [...t, ...r], s = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return n.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage
    }, a = S(o, "addGlobalAttributes", l);
    if (!a)
      return;
    a().forEach((u) => {
      u.types.forEach((f) => {
        Object.entries(u.attributes).forEach(([d, h]) => {
          e.push({
            type: f,
            name: d,
            attribute: {
              ...s,
              ...h
            }
          });
        });
      });
    });
  }), i.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage
    }, a = S(o, "addAttributes", l);
    if (!a)
      return;
    const c = a();
    Object.entries(c).forEach(([u, f]) => {
      const d = {
        ...s,
        ...f
      };
      typeof (d == null ? void 0 : d.default) == "function" && (d.default = d.default()), d != null && d.isRequired && (d == null ? void 0 : d.default) === void 0 && delete d.default, e.push({
        type: o.name,
        name: u,
        attribute: d
      });
    });
  }), e;
}
function U(n, e) {
  if (typeof n == "string") {
    if (!e.nodes[n])
      throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return e.nodes[n];
  }
  return n;
}
function W(...n) {
  return n.filter((e) => !!e).reduce((e, t) => {
    const r = { ...e };
    return Object.entries(t).forEach(([i, s]) => {
      if (!r[i]) {
        r[i] = s;
        return;
      }
      if (i === "class") {
        const l = s ? s.split(" ") : [], a = r[i] ? r[i].split(" ") : [], c = l.filter((u) => !a.includes(u));
        r[i] = [...a, ...c].join(" ");
      } else
        i === "style" ? r[i] = [r[i], s].join("; ") : r[i] = s;
    }), r;
  }, {});
}
function ri(n, e) {
  return e.filter((t) => t.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : {
    [t.name]: n.attrs[t.name]
  }).reduce((t, r) => W(t, r), {});
}
function Ql(n) {
  return typeof n == "function";
}
function O(n, e = void 0, ...t) {
  return Ql(n) ? e ? n.bind(e)(...t) : n(...t) : n;
}
function ih(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function sh(n) {
  return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n;
}
function Gs(n, e) {
  return n.style ? n : {
    ...n,
    getAttrs: (t) => {
      const r = n.getAttrs ? n.getAttrs(t) : n.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((s, o) => {
        const l = o.attribute.parseHTML ? o.attribute.parseHTML(t) : sh(t.getAttribute(o.name));
        return l == null ? s : {
          ...s,
          [o.name]: l
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function Ys(n) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(n).filter(([e, t]) => e === "attrs" && ih(t) ? !1 : t != null)
  );
}
function oh(n, e) {
  var t;
  const r = Xl(n), { nodeExtensions: i, markExtensions: s } = Zn(n), o = (t = i.find((c) => S(c, "topNode"))) === null || t === void 0 ? void 0 : t.name, l = Object.fromEntries(i.map((c) => {
    const u = r.filter((y) => y.type === c.name), f = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, d = n.reduce((y, k) => {
      const C = S(k, "extendNodeSchema", f);
      return {
        ...y,
        ...C ? C(c) : {}
      };
    }, {}), h = Ys({
      ...d,
      content: O(S(c, "content", f)),
      marks: O(S(c, "marks", f)),
      group: O(S(c, "group", f)),
      inline: O(S(c, "inline", f)),
      atom: O(S(c, "atom", f)),
      selectable: O(S(c, "selectable", f)),
      draggable: O(S(c, "draggable", f)),
      code: O(S(c, "code", f)),
      defining: O(S(c, "defining", f)),
      isolating: O(S(c, "isolating", f)),
      attrs: Object.fromEntries(u.map((y) => {
        var k;
        return [y.name, { default: (k = y == null ? void 0 : y.attribute) === null || k === void 0 ? void 0 : k.default }];
      }))
    }), p = O(S(c, "parseHTML", f));
    p && (h.parseDOM = p.map((y) => Gs(y, u)));
    const m = S(c, "renderHTML", f);
    m && (h.toDOM = (y) => m({
      node: y,
      HTMLAttributes: ri(y, u)
    }));
    const g = S(c, "renderText", f);
    return g && (h.toText = g), [c.name, h];
  })), a = Object.fromEntries(s.map((c) => {
    const u = r.filter((g) => g.type === c.name), f = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, d = n.reduce((g, y) => {
      const k = S(y, "extendMarkSchema", f);
      return {
        ...g,
        ...k ? k(c) : {}
      };
    }, {}), h = Ys({
      ...d,
      inclusive: O(S(c, "inclusive", f)),
      excludes: O(S(c, "excludes", f)),
      group: O(S(c, "group", f)),
      spanning: O(S(c, "spanning", f)),
      code: O(S(c, "code", f)),
      attrs: Object.fromEntries(u.map((g) => {
        var y;
        return [g.name, { default: (y = g == null ? void 0 : g.attribute) === null || y === void 0 ? void 0 : y.default }];
      }))
    }), p = O(S(c, "parseHTML", f));
    p && (h.parseDOM = p.map((g) => Gs(g, u)));
    const m = S(c, "renderHTML", f);
    return m && (h.toDOM = (g) => m({
      mark: g,
      HTMLAttributes: ri(g, u)
    })), [c.name, h];
  }));
  return new au({
    topNode: o,
    nodes: l,
    marks: a
  });
}
function Tr(n, e) {
  return e.nodes[n] || e.marks[n] || null;
}
function Xs(n, e) {
  return Array.isArray(e) ? e.some((t) => (typeof t == "string" ? t : t.name) === n.name) : e;
}
const lh = (n, e = 500) => {
  let t = "";
  const r = n.parentOffset;
  return n.parent.nodesBetween(Math.max(0, r - e), r, (i, s, o, l) => {
    var a, c;
    const u = ((c = (a = i.type.spec).toText) === null || c === void 0 ? void 0 : c.call(a, {
      node: i,
      pos: s,
      parent: o,
      index: l
    })) || i.textContent || "%leaf%";
    t += u.slice(0, Math.max(0, r - s));
  }), t;
};
function Ei(n) {
  return Object.prototype.toString.call(n) === "[object RegExp]";
}
class er {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const ah = (n, e) => {
  if (Ei(e))
    return e.exec(n);
  const t = e(n);
  if (!t)
    return null;
  const r = [t.text];
  return r.index = t.index, r.input = n, r.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(t.replaceWith)), r;
};
function gn(n) {
  var e;
  const { editor: t, from: r, to: i, text: s, rules: o, plugin: l } = n, { view: a } = t;
  if (a.composing)
    return !1;
  const c = a.state.doc.resolve(r);
  if (
    // check for code node
    c.parent.type.spec.code || !((e = c.nodeBefore || c.nodeAfter) === null || e === void 0) && e.marks.find((d) => d.type.spec.code)
  )
    return !1;
  let u = !1;
  const f = lh(c) + s;
  return o.forEach((d) => {
    if (u)
      return;
    const h = ah(f, d.find);
    if (!h)
      return;
    const p = a.state.tr, m = Xn({
      state: a.state,
      transaction: p
    }), g = {
      from: r - (h[0].length - s.length),
      to: i
    }, { commands: y, chain: k, can: C } = new Qn({
      editor: t,
      state: m
    });
    d.handler({
      state: m,
      range: g,
      match: h,
      commands: y,
      chain: k,
      can: C
    }) === null || !p.steps.length || (p.setMeta(l, {
      transform: p,
      from: r,
      to: i,
      text: s
    }), a.dispatch(p), u = !0);
  }), u;
}
function ch(n) {
  const { editor: e, rules: t } = n, r = new ke({
    state: {
      init() {
        return null;
      },
      apply(i, s) {
        const o = i.getMeta(r);
        if (o)
          return o;
        const l = i.getMeta("applyInputRules");
        return !!l && setTimeout(() => {
          const { from: c, text: u } = l, f = c + u.length;
          gn({
            editor: e,
            from: c,
            to: f,
            text: u,
            rules: t,
            plugin: r
          });
        }), i.selectionSet || i.docChanged ? null : s;
      }
    },
    props: {
      handleTextInput(i, s, o, l) {
        return gn({
          editor: e,
          from: s,
          to: o,
          text: l,
          rules: t,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: s } = i.state.selection;
          s && gn({
            editor: e,
            from: s.pos,
            to: s.pos,
            text: "",
            rules: t,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(i, s) {
        if (s.key !== "Enter")
          return !1;
        const { $cursor: o } = i.state.selection;
        return o ? gn({
          editor: e,
          from: o.pos,
          to: o.pos,
          text: `
`,
          rules: t,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
function uh(n) {
  return typeof n == "number";
}
class fh {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const dh = (n, e, t) => {
  if (Ei(e))
    return [...n.matchAll(e)];
  const r = e(n, t);
  return r ? r.map((i) => {
    const s = [i.text];
    return s.index = i.index, s.input = n, s.data = i.data, i.replaceWith && (i.text.includes(i.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), s.push(i.replaceWith)), s;
  }) : [];
};
function hh(n) {
  const { editor: e, state: t, from: r, to: i, rule: s, pasteEvent: o, dropEvent: l } = n, { commands: a, chain: c, can: u } = new Qn({
    editor: e,
    state: t
  }), f = [];
  return t.doc.nodesBetween(r, i, (h, p) => {
    if (!h.isTextblock || h.type.spec.code)
      return;
    const m = Math.max(r, p), g = Math.min(i, p + h.content.size), y = h.textBetween(m - p, g - p, void 0, "￼");
    dh(y, s.find, o).forEach((C) => {
      if (C.index === void 0)
        return;
      const N = m + C.index + 1, I = N + C[0].length, w = {
        from: t.tr.mapping.map(N),
        to: t.tr.mapping.map(I)
      }, A = s.handler({
        state: t,
        range: w,
        match: C,
        commands: a,
        chain: c,
        can: u,
        pasteEvent: o,
        dropEvent: l
      });
      f.push(A);
    });
  }), f.every((h) => h !== null);
}
const ph = (n) => {
  var e;
  const t = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (e = t.clipboardData) === null || e === void 0 || e.setData("text/html", n), t;
};
function mh(n) {
  const { editor: e, rules: t } = n;
  let r = null, i = !1, s = !1, o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  const a = ({ state: u, from: f, to: d, rule: h, pasteEvt: p }) => {
    const m = u.tr, g = Xn({
      state: u,
      transaction: m
    });
    if (!(!hh({
      editor: e,
      state: g,
      from: Math.max(f - 1, 0),
      to: d.b - 1,
      rule: h,
      pasteEvent: p,
      dropEvent: l
    }) || !m.steps.length))
      return l = typeof DragEvent < "u" ? new DragEvent("drop") : null, o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, m;
  };
  return t.map((u) => new ke({
    // we register a global drag handler to track the current drag source element
    view(f) {
      const d = (h) => {
        var p;
        r = !((p = f.dom.parentElement) === null || p === void 0) && p.contains(h.target) ? f.dom.parentElement : null;
      };
      return window.addEventListener("dragstart", d), {
        destroy() {
          window.removeEventListener("dragstart", d);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (f, d) => (s = r === f.dom.parentElement, l = d, !1),
        paste: (f, d) => {
          var h;
          const p = (h = d.clipboardData) === null || h === void 0 ? void 0 : h.getData("text/html");
          return o = d, i = !!(p != null && p.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (f, d, h) => {
      const p = f[0], m = p.getMeta("uiEvent") === "paste" && !i, g = p.getMeta("uiEvent") === "drop" && !s, y = p.getMeta("applyPasteRules"), k = !!y;
      if (!m && !g && !k)
        return;
      if (k) {
        const { from: I, text: w } = y, A = I + w.length, Q = ph(w);
        return a({
          rule: u,
          state: h,
          from: I,
          to: { b: A },
          pasteEvt: Q
        });
      }
      const C = d.doc.content.findDiffStart(h.doc.content), N = d.doc.content.findDiffEnd(h.doc.content);
      if (!(!uh(C) || !N || C === N.b))
        return a({
          rule: u,
          state: h,
          from: C,
          to: N,
          pasteEvt: o
        });
    }
  }));
}
function gh(n) {
  const e = n.filter((t, r) => n.indexOf(t) !== r);
  return [...new Set(e)];
}
class bt {
  constructor(e, t) {
    this.splittableMarks = [], this.editor = t, this.extensions = bt.resolve(e), this.schema = oh(this.extensions, t), this.setupExtensions();
  }
  /**
   * Returns a flattened and sorted extension list while
   * also checking for duplicated extensions and warns the user.
   * @param extensions An array of Tiptap extensions
   * @returns An flattened and sorted array of Tiptap extensions
   */
  static resolve(e) {
    const t = bt.sort(bt.flatten(e)), r = gh(t.map((i) => i.name));
    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((i) => `'${i}'`).join(", ")}]. This can lead to issues.`), t;
  }
  /**
   * Create a flattened array of extensions by traversing the `addExtensions` field.
   * @param extensions An array of Tiptap extensions
   * @returns A flattened array of Tiptap extensions
   */
  static flatten(e) {
    return e.map((t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage
      }, i = S(t, "addExtensions", r);
      return i ? [t, ...this.flatten(i())] : t;
    }).flat(10);
  }
  /**
   * Sort extensions by priority.
   * @param extensions An array of Tiptap extensions
   * @returns A sorted array of Tiptap extensions by priority
   */
  static sort(e) {
    return e.sort((r, i) => {
      const s = S(r, "priority") || 100, o = S(i, "priority") || 100;
      return s > o ? -1 : s < o ? 1 : 0;
    });
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((e, t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage,
        editor: this.editor,
        type: Tr(t.name, this.schema)
      }, i = S(t, "addCommands", r);
      return i ? {
        ...e,
        ...i()
      } : e;
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor: e } = this, t = bt.sort([...this.extensions].reverse()), r = [], i = [], s = t.map((o) => {
      const l = {
        name: o.name,
        options: o.options,
        storage: o.storage,
        editor: e,
        type: Tr(o.name, this.schema)
      }, a = [], c = S(o, "addKeyboardShortcuts", l);
      let u = {};
      if (o.type === "mark" && o.config.exitable && (u.ArrowRight = () => Ie.handleExit({ editor: e, mark: o })), c) {
        const m = Object.fromEntries(Object.entries(c()).map(([g, y]) => [g, () => y({ editor: e })]));
        u = { ...u, ...m };
      }
      const f = Id(u);
      a.push(f);
      const d = S(o, "addInputRules", l);
      Xs(o, e.options.enableInputRules) && d && r.push(...d());
      const h = S(o, "addPasteRules", l);
      Xs(o, e.options.enablePasteRules) && h && i.push(...h());
      const p = S(o, "addProseMirrorPlugins", l);
      if (p) {
        const m = p();
        a.push(...m);
      }
      return a;
    }).flat();
    return [
      ch({
        editor: e,
        rules: r
      }),
      ...mh({
        editor: e,
        rules: i
      }),
      ...s
    ];
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return Xl(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor: e } = this, { nodeExtensions: t } = Zn(this.extensions);
    return Object.fromEntries(t.filter((r) => !!S(r, "addNodeView")).map((r) => {
      const i = this.attributes.filter((a) => a.type === r.name), s = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: e,
        type: U(r.name, this.schema)
      }, o = S(r, "addNodeView", s);
      if (!o)
        return [];
      const l = (a, c, u, f) => {
        const d = ri(a, i);
        return o()({
          editor: e,
          node: a,
          getPos: u,
          decorations: f,
          HTMLAttributes: d,
          extension: r
        });
      };
      return [r.name, l];
    }));
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    this.extensions.forEach((e) => {
      var t;
      this.editor.extensionStorage[e.name] = e.storage;
      const r = {
        name: e.name,
        options: e.options,
        storage: e.storage,
        editor: this.editor,
        type: Tr(e.name, this.schema)
      };
      e.type === "mark" && (!((t = O(S(e, "keepOnSplit", r))) !== null && t !== void 0) || t) && this.splittableMarks.push(e.name);
      const i = S(e, "onBeforeCreate", r), s = S(e, "onCreate", r), o = S(e, "onUpdate", r), l = S(e, "onSelectionUpdate", r), a = S(e, "onTransaction", r), c = S(e, "onFocus", r), u = S(e, "onBlur", r), f = S(e, "onDestroy", r);
      i && this.editor.on("beforeCreate", i), s && this.editor.on("create", s), o && this.editor.on("update", o), l && this.editor.on("selectionUpdate", l), a && this.editor.on("transaction", a), c && this.editor.on("focus", c), u && this.editor.on("blur", u), f && this.editor.on("destroy", f);
    });
  }
}
function yh(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function Or(n) {
  return yh(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function tr(n, e) {
  const t = { ...n };
  return Or(n) && Or(e) && Object.keys(e).forEach((r) => {
    Or(e[r]) ? r in n ? t[r] = tr(n[r], e[r]) : Object.assign(t, { [r]: e[r] }) : Object.assign(t, { [r]: e[r] });
  }), t;
}
class de {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = O(S(this, "addOptions", {
      name: this.name
    }))), this.storage = O(S(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new de(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.parent = this.parent, t.options = tr(this.options, e), t.storage = O(S(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new de({ ...this.config, ...e });
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = O(S(t, "addOptions", {
      name: t.name
    })), t.storage = O(S(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function Zl(n, e, t) {
  const { from: r, to: i } = e, { blockSeparator: s = `

`, textSerializers: o = {} } = t || {};
  let l = "";
  return n.nodesBetween(r, i, (a, c, u, f) => {
    var d;
    a.isBlock && c > r && (l += s);
    const h = o == null ? void 0 : o[a.type.name];
    if (h)
      return u && (l += h({
        node: a,
        pos: c,
        parent: u,
        index: f,
        range: e
      })), !1;
    a.isText && (l += (d = a == null ? void 0 : a.text) === null || d === void 0 ? void 0 : d.slice(Math.max(r, c) - c, i - c));
  }), l;
}
function ea(n) {
  return Object.fromEntries(Object.entries(n.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
const bh = de.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new ke({
        key: new Ke("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: n } = this, { state: e, schema: t } = n, { doc: r, selection: i } = e, { ranges: s } = i, o = Math.min(...s.map((u) => u.$from.pos)), l = Math.max(...s.map((u) => u.$to.pos)), a = ea(t);
            return Zl(r, { from: o, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), kh = () => ({ editor: n, view: e }) => (requestAnimationFrame(() => {
  var t;
  n.isDestroyed || (e.dom.blur(), (t = window == null ? void 0 : window.getSelection()) === null || t === void 0 || t.removeAllRanges());
}), !0), xh = (n = !1) => ({ commands: e }) => e.setContent("", n), Sh = () => ({ state: n, tr: e, dispatch: t }) => {
  const { selection: r } = e, { ranges: i } = r;
  return t && i.forEach(({ $from: s, $to: o }) => {
    n.doc.nodesBetween(s.pos, o.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: u } = e, f = c.resolve(u.map(a)), d = c.resolve(u.map(a + l.nodeSize)), h = f.blockRange(d);
      if (!h)
        return;
      const p = $t(h);
      if (l.type.isTextblock) {
        const { defaultType: m } = f.parent.contentMatchAt(f.index());
        e.setNodeMarkup(h.start, m);
      }
      (p || p === 0) && e.lift(h, p);
    });
  }), !0;
}, wh = (n) => (e) => n(e), Mh = () => ({ state: n, dispatch: e }) => Wd(n, e), Ch = (n, e) => ({ editor: t, tr: r }) => {
  const { state: i } = t, s = i.doc.slice(n.from, n.to);
  r.deleteRange(n.from, n.to);
  const o = r.mapping.map(e);
  return r.insert(o, s.content), r.setSelection(new T(r.doc.resolve(o - 1))), !0;
}, Th = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, r = t.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const i = n.selection.$anchor;
  for (let s = i.depth; s > 0; s -= 1)
    if (i.node(s).type === r.type) {
      if (e) {
        const l = i.before(s), a = i.after(s);
        n.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Oh = (n) => ({ tr: e, state: t, dispatch: r }) => {
  const i = U(n, t.schema), s = e.selection.$anchor;
  for (let o = s.depth; o > 0; o -= 1)
    if (s.node(o).type === i) {
      if (r) {
        const a = s.before(o), c = s.after(o);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, vh = (n) => ({ tr: e, dispatch: t }) => {
  const { from: r, to: i } = n;
  return t && e.delete(r, i), !0;
}, Nh = () => ({ state: n, dispatch: e }) => Dd(n, e), Eh = () => ({ commands: n }) => n.keyboardShortcut("Enter"), Ah = () => ({ state: n, dispatch: e }) => jd(n, e);
function Ln(n, e, t = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => t.strict ? e[i] === n[i] : Ei(e[i]) ? e[i].test(n[i]) : e[i] === n[i]) : !0;
}
function ii(n, e, t = {}) {
  return n.find((r) => r.type === e && Ln(r.attrs, t));
}
function Ih(n, e, t = {}) {
  return !!ii(n, e, t);
}
function Ai(n, e, t = {}) {
  if (!n || !e)
    return;
  let r = n.parent.childAfter(n.parentOffset);
  if (n.parentOffset === r.offset && r.offset !== 0 && (r = n.parent.childBefore(n.parentOffset)), !r.node)
    return;
  const i = ii([...r.node.marks], e, t);
  if (!i)
    return;
  let s = r.index, o = n.start() + r.offset, l = s + 1, a = o + r.node.nodeSize;
  for (ii([...r.node.marks], e, t); s > 0 && i.isInSet(n.parent.child(s - 1).marks); )
    s -= 1, o -= n.parent.child(s).nodeSize;
  for (; l < n.parent.childCount && Ih([...n.parent.child(l).marks], e, t); )
    a += n.parent.child(l).nodeSize, l += 1;
  return {
    from: o,
    to: a
  };
}
function Ge(n, e) {
  if (typeof n == "string") {
    if (!e.marks[n])
      throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return e.marks[n];
  }
  return n;
}
const Dh = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const s = Ge(n, r.schema), { doc: o, selection: l } = t, { $from: a, from: c, to: u } = l;
  if (i) {
    const f = Ai(a, s, e);
    if (f && f.from <= c && f.to >= u) {
      const d = T.create(o, f.from, f.to);
      t.setSelection(d);
    }
  }
  return !0;
}, Ph = (n) => (e) => {
  const t = typeof n == "function" ? n(e) : n;
  for (let r = 0; r < t.length; r += 1)
    if (t[r](e))
      return !0;
  return !1;
};
function ta(n) {
  return n instanceof T;
}
function et(n = 0, e = 0, t = 0) {
  return Math.min(Math.max(n, e), t);
}
function na(n, e = null) {
  if (!e)
    return null;
  const t = v.atStart(n), r = v.atEnd(n);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return r;
  const i = t.from, s = r.to;
  return e === "all" ? T.create(n, et(0, i, s), et(n.content.size, i, s)) : T.create(n, et(e, i, s), et(e, i, s));
}
function Ii() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const Rh = (n = null, e = {}) => ({ editor: t, view: r, tr: i, dispatch: s }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const o = () => {
    Ii() && r.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (r.focus(), e != null && e.scrollIntoView && t.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && n === null || n === !1)
    return !0;
  if (s && n === null && !ta(t.state.selection))
    return o(), !0;
  const l = na(i.doc, n) || t.state.selection, a = t.state.selection.eq(l);
  return s && (a || i.setSelection(l), a && i.storedMarks && i.setStoredMarks(i.storedMarks), o()), !0;
}, $h = (n, e) => (t) => n.every((r, i) => e(r, { ...t, index: i })), Bh = (n, e) => ({ tr: t, commands: r }) => r.insertContentAt({ from: t.selection.from, to: t.selection.to }, n, e), ra = (n) => {
  const e = n.childNodes;
  for (let t = e.length - 1; t >= 0; t -= 1) {
    const r = e[t];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? n.removeChild(r) : r.nodeType === 1 && ra(r);
  }
  return n;
};
function Qs(n) {
  const e = `<body>${n}</body>`, t = new window.DOMParser().parseFromString(e, "text/html").body;
  return ra(t);
}
function zn(n, e, t) {
  t = {
    slice: !0,
    parseOptions: {},
    ...t
  };
  const r = typeof n == "object" && n !== null, i = typeof n == "string";
  if (r)
    try {
      return Array.isArray(n) && n.length > 0 ? b.fromArray(n.map((o) => e.nodeFromJSON(o))) : e.nodeFromJSON(n);
    } catch (s) {
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", s), zn("", e, t);
    }
  if (i) {
    const s = Nt.fromSchema(e);
    return t.slice ? s.parseSlice(Qs(n), t.parseOptions).content : s.parse(Qs(n), t.parseOptions);
  }
  return zn("", e, t);
}
function Lh(n, e, t) {
  const r = n.steps.length - 1;
  if (r < e)
    return;
  const i = n.steps[r];
  if (!(i instanceof J || i instanceof q))
    return;
  const s = n.mapping.maps[r];
  let o = 0;
  s.forEach((l, a, c, u) => {
    o === 0 && (o = u);
  }), n.setSelection(v.near(n.doc.resolve(o), t));
}
const zh = (n) => n.toString().startsWith("<"), Fh = (n, e, t) => ({ tr: r, dispatch: i, editor: s }) => {
  if (i) {
    t = {
      parseOptions: {},
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...t
    };
    const o = zn(e, s.schema, {
      parseOptions: {
        preserveWhitespace: "full",
        ...t.parseOptions
      }
    });
    if (o.toString() === "<>")
      return !0;
    let { from: l, to: a } = typeof n == "number" ? { from: n, to: n } : { from: n.from, to: n.to }, c = !0, u = !0;
    if ((zh(o) ? o : [o]).forEach((h) => {
      h.check(), c = c ? h.isText && h.marks.length === 0 : !1, u = u ? h.isBlock : !1;
    }), l === a && u) {
      const { parent: h } = r.doc.resolve(l);
      h.isTextblock && !h.type.spec.code && !h.childCount && (l -= 1, a += 1);
    }
    let d;
    c ? (Array.isArray(e) ? d = e.map((h) => h.text || "").join("") : typeof e == "object" && e && e.text ? d = e.text : d = e, r.insertText(d, l, a)) : (d = o, r.replaceWith(l, a, d)), t.updateSelection && Lh(r, r.steps.length - 1, -1), t.applyInputRules && r.setMeta("applyInputRules", { from: l, text: d }), t.applyPasteRules && r.setMeta("applyPasteRules", { from: l, text: d });
  }
  return !0;
}, Vh = () => ({ state: n, dispatch: e }) => Fd(n, e), _h = () => ({ state: n, dispatch: e }) => Vd(n, e), Hh = () => ({ state: n, dispatch: e }) => Pd(n, e), jh = () => ({ state: n, dispatch: e }) => Ld(n, e), Wh = () => ({ tr: n, state: e, dispatch: t }) => {
  try {
    const r = Jn(e.doc, e.selection.$from.pos, -1);
    return r == null ? !1 : (n.join(r, 2), t && t(n), !0);
  } catch {
    return !1;
  }
}, Jh = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Jn(n.doc, n.selection.$from.pos, 1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, qh = () => ({ state: n, dispatch: e }) => Rd(n, e), Kh = () => ({ state: n, dispatch: e }) => $d(n, e);
function ia() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function Uh(n) {
  const e = n.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let r, i, s, o;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      Ii() || ia() ? o = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), o && (t = `Meta-${t}`), s && (t = `Shift-${t}`), t;
}
const Gh = (n) => ({ editor: e, view: t, tr: r, dispatch: i }) => {
  const s = Uh(n).split(/-(?!$)/), o = s.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: o === "Space" ? " " : o,
    altKey: s.includes("Alt"),
    ctrlKey: s.includes("Ctrl"),
    metaKey: s.includes("Meta"),
    shiftKey: s.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (c) => c(t, l));
  });
  return a == null || a.steps.forEach((c) => {
    const u = c.map(r.mapping);
    u && i && r.maybeStep(u);
  }), !0;
};
function rn(n, e, t = {}) {
  const { from: r, to: i, empty: s } = n.selection, o = e ? U(e, n.schema) : null, l = [];
  n.doc.nodesBetween(r, i, (f, d) => {
    if (f.isText)
      return;
    const h = Math.max(r, d), p = Math.min(i, d + f.nodeSize);
    l.push({
      node: f,
      from: h,
      to: p
    });
  });
  const a = i - r, c = l.filter((f) => o ? o.name === f.node.type.name : !0).filter((f) => Ln(f.node.attrs, t, { strict: !1 }));
  return s ? !!c.length : c.reduce((f, d) => f + d.to - d.from, 0) >= a;
}
const Yh = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = U(n, t.schema);
  return rn(t, i, e) ? _d(t, r) : !1;
}, Xh = () => ({ state: n, dispatch: e }) => Jd(n, e), Qh = (n) => ({ state: e, dispatch: t }) => {
  const r = U(n, e.schema);
  return Zd(r)(e, t);
}, Zh = () => ({ state: n, dispatch: e }) => Hd(n, e);
function nr(n, e) {
  return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null;
}
function Zs(n, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(n).reduce((r, i) => (t.includes(i) || (r[i] = n[i]), r), {});
}
const ep = (n, e) => ({ tr: t, state: r, dispatch: i }) => {
  let s = null, o = null;
  const l = nr(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (s = U(n, r.schema)), l === "mark" && (o = Ge(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    r.doc.nodesBetween(a.$from.pos, a.$to.pos, (c, u) => {
      s && s === c.type && t.setNodeMarkup(u, void 0, Zs(c.attrs, e)), o && c.marks.length && c.marks.forEach((f) => {
        o === f.type && t.addMark(u, u + c.nodeSize, o.create(Zs(f.attrs, e)));
      });
    });
  }), !0) : !1;
}, tp = () => ({ tr: n, dispatch: e }) => (e && n.scrollIntoView(), !0), np = () => ({ tr: n, commands: e }) => e.setTextSelection({
  from: 0,
  to: n.doc.content.size
}), rp = () => ({ state: n, dispatch: e }) => Bd(n, e), ip = () => ({ state: n, dispatch: e }) => zd(n, e), sp = () => ({ state: n, dispatch: e }) => qd(n, e), op = () => ({ state: n, dispatch: e }) => Gd(n, e), lp = () => ({ state: n, dispatch: e }) => Ud(n, e);
function sa(n, e, t = {}) {
  return zn(n, e, { slice: !1, parseOptions: t });
}
const ap = (n, e = !1, t = {}) => ({ tr: r, editor: i, dispatch: s }) => {
  const { doc: o } = r, l = sa(n, i.schema, t);
  return s && r.replaceWith(0, o.content.size, l).setMeta("preventUpdate", !e), !0;
};
function rr(n, e) {
  const t = Ge(e, n.schema), { from: r, to: i, empty: s } = n.selection, o = [];
  s ? (n.storedMarks && o.push(...n.storedMarks), o.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, i, (a) => {
    o.push(...a.marks);
  });
  const l = o.find((a) => a.type.name === t.name);
  return l ? { ...l.attrs } : {};
}
function cp(n) {
  for (let e = 0; e < n.edgeCount; e += 1) {
    const { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function up(n, e) {
  for (let t = n.depth; t > 0; t -= 1) {
    const r = n.node(t);
    if (e(r))
      return {
        pos: t > 0 ? n.before(t) : 0,
        start: n.start(t),
        depth: t,
        node: r
      };
  }
}
function Di(n) {
  return (e) => up(e.$from, n);
}
function fp(n, e) {
  const t = ve.fromSchema(e).serializeFragment(n), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(t), i.innerHTML;
}
function dp(n, e) {
  const t = {
    from: 0,
    to: n.content.size
  };
  return Zl(n, t, e);
}
function hp(n, e) {
  const t = U(e, n.schema), { from: r, to: i } = n.selection, s = [];
  n.doc.nodesBetween(r, i, (l) => {
    s.push(l);
  });
  const o = s.reverse().find((l) => l.type.name === t.name);
  return o ? { ...o.attrs } : {};
}
function pp(n, e) {
  const t = nr(typeof e == "string" ? e : e.name, n.schema);
  return t === "node" ? hp(n, e) : t === "mark" ? rr(n, e) : {};
}
function oa(n, e, t) {
  const r = [];
  return n === e ? t.resolve(n).marks().forEach((i) => {
    const s = t.resolve(n - 1), o = Ai(s, i.type);
    o && r.push({
      mark: i,
      ...o
    });
  }) : t.nodesBetween(n, e, (i, s) => {
    !i || (i == null ? void 0 : i.nodeSize) === void 0 || r.push(...i.marks.map((o) => ({
      from: s,
      to: s + i.nodeSize,
      mark: o
    })));
  }), r;
}
function wn(n, e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => {
    const i = n.find((s) => s.type === e && s.name === r);
    return i ? i.attribute.keepOnSplit : !1;
  }));
}
function si(n, e, t = {}) {
  const { empty: r, ranges: i } = n.selection, s = e ? Ge(e, n.schema) : null;
  if (r)
    return !!(n.storedMarks || n.selection.$from.marks()).filter((f) => s ? s.name === f.type.name : !0).find((f) => Ln(f.attrs, t, { strict: !1 }));
  let o = 0;
  const l = [];
  if (i.forEach(({ $from: f, $to: d }) => {
    const h = f.pos, p = d.pos;
    n.doc.nodesBetween(h, p, (m, g) => {
      if (!m.isText && !m.marks.length)
        return;
      const y = Math.max(h, g), k = Math.min(p, g + m.nodeSize), C = k - y;
      o += C, l.push(...m.marks.map((N) => ({
        mark: N,
        from: y,
        to: k
      })));
    });
  }), o === 0)
    return !1;
  const a = l.filter((f) => s ? s.name === f.mark.type.name : !0).filter((f) => Ln(f.mark.attrs, t, { strict: !1 })).reduce((f, d) => f + d.to - d.from, 0), c = l.filter((f) => s ? f.mark.type !== s && f.mark.type.excludes(s) : !0).reduce((f, d) => f + d.to - d.from, 0);
  return (a > 0 ? a + c : a) >= o;
}
function mp(n, e, t = {}) {
  if (!e)
    return rn(n, null, t) || si(n, null, t);
  const r = nr(e, n.schema);
  return r === "node" ? rn(n, e, t) : r === "mark" ? si(n, e, t) : !1;
}
function eo(n, e) {
  const { nodeExtensions: t } = Zn(e), r = t.find((o) => o.name === n);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, s = O(S(r, "group", i));
  return typeof s != "string" ? !1 : s.split(" ").includes("list");
}
function gp(n) {
  var e;
  const t = (e = n.type.createAndFill()) === null || e === void 0 ? void 0 : e.toJSON(), r = n.toJSON();
  return JSON.stringify(t) === JSON.stringify(r);
}
function yp(n, e, t) {
  var r;
  const { selection: i } = e;
  let s = null;
  if (ta(i) && (s = i.$cursor), s) {
    const l = (r = n.storedMarks) !== null && r !== void 0 ? r : s.marks();
    return !!t.isInSet(l) || !l.some((a) => a.type.excludes(t));
  }
  const { ranges: o } = i;
  return o.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(t) : !1;
    return n.doc.nodesBetween(l.pos, a.pos, (u, f, d) => {
      if (c)
        return !1;
      if (u.isInline) {
        const h = !d || d.type.allowsMarkType(t), p = !!t.isInSet(u.marks) || !u.marks.some((m) => m.type.excludes(t));
        c = h && p;
      }
      return !c;
    }), c;
  });
}
const bp = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const { selection: s } = t, { empty: o, ranges: l } = s, a = Ge(n, r.schema);
  if (i)
    if (o) {
      const c = rr(r, a);
      t.addStoredMark(a.create({
        ...c,
        ...e
      }));
    } else
      l.forEach((c) => {
        const u = c.$from.pos, f = c.$to.pos;
        r.doc.nodesBetween(u, f, (d, h) => {
          const p = Math.max(h, u), m = Math.min(h + d.nodeSize, f);
          d.marks.find((y) => y.type === a) ? d.marks.forEach((y) => {
            a === y.type && t.addMark(p, m, a.create({
              ...y.attrs,
              ...e
            }));
          }) : t.addMark(p, m, a.create(e));
        });
      });
  return yp(r, t, a);
}, kp = (n, e) => ({ tr: t }) => (t.setMeta(n, e), !0), xp = (n, e = {}) => ({ state: t, dispatch: r, chain: i }) => {
  const s = U(n, t.schema);
  return s.isTextblock ? i().command(({ commands: o }) => Us(s, e)(t) ? !0 : o.clearNodes()).command(({ state: o }) => Us(s, e)(o, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, Sp = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, i = et(n, 0, r.content.size), s = M.create(r, i);
    e.setSelection(s);
  }
  return !0;
}, wp = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, { from: i, to: s } = typeof n == "number" ? { from: n, to: n } : n, o = T.atStart(r).from, l = T.atEnd(r).to, a = et(i, o, l), c = et(s, o, l), u = T.create(r, a, c);
    e.setSelection(u);
  }
  return !0;
}, Mp = (n) => ({ state: e, dispatch: t }) => {
  const r = U(n, e.schema);
  return nh(r)(e, t);
};
function to(n, e) {
  const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
  if (t) {
    const r = t.filter((i) => e == null ? void 0 : e.includes(i.type.name));
    n.tr.ensureMarks(r);
  }
}
const Cp = ({ keepMarks: n = !0 } = {}) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  const { selection: s, doc: o } = e, { $from: l, $to: a } = s, c = i.extensionManager.attributes, u = wn(c, l.node().type.name, l.node().attrs);
  if (s instanceof M && s.node.isBlock)
    return !l.parentOffset || !St(o, l.pos) ? !1 : (r && (n && to(t, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  if (r) {
    const f = a.parentOffset === a.parent.content.size;
    s instanceof T && e.deleteSelection();
    const d = l.depth === 0 ? void 0 : cp(l.node(-1).contentMatchAt(l.indexAfter(-1)));
    let h = f && d ? [
      {
        type: d,
        attrs: u
      }
    ] : void 0, p = St(e.doc, e.mapping.map(l.pos), 1, h);
    if (!h && !p && St(e.doc, e.mapping.map(l.pos), 1, d ? [{ type: d }] : void 0) && (p = !0, h = d ? [
      {
        type: d,
        attrs: u
      }
    ] : void 0), p && (e.split(e.mapping.map(l.pos), 1, h), d && !f && !l.parentOffset && l.parent.type !== d)) {
      const m = e.mapping.map(l.before()), g = e.doc.resolve(m);
      l.node(-1).canReplaceWith(g.index(), g.index() + 1, d) && e.setNodeMarkup(e.mapping.map(l.before()), d);
    }
    n && to(t, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return !0;
}, Tp = (n) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  var s;
  const o = U(n, t.schema), { $from: l, $to: a } = t.selection, c = t.selection.node;
  if (c && c.isBlock || l.depth < 2 || !l.sameParent(a))
    return !1;
  const u = l.node(-1);
  if (u.type !== o)
    return !1;
  const f = i.extensionManager.attributes;
  if (l.parent.content.size === 0 && l.node(-1).childCount === l.indexAfter(-1)) {
    if (l.depth === 2 || l.node(-3).type !== o || l.index(-2) !== l.node(-2).childCount - 1)
      return !1;
    if (r) {
      let g = b.empty;
      const y = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
      for (let A = l.depth - y; A >= l.depth - 3; A -= 1)
        g = b.from(l.node(A).copy(g));
      const k = l.indexAfter(-1) < l.node(-2).childCount ? 1 : l.indexAfter(-2) < l.node(-3).childCount ? 2 : 3, C = wn(f, l.node().type.name, l.node().attrs), N = ((s = o.contentMatch.defaultType) === null || s === void 0 ? void 0 : s.createAndFill(C)) || void 0;
      g = g.append(b.from(o.createAndFill(null, N) || void 0));
      const I = l.before(l.depth - (y - 1));
      e.replace(I, l.after(-k), new x(g, 4 - y, 0));
      let w = -1;
      e.doc.nodesBetween(I, e.doc.content.size, (A, Q) => {
        if (w > -1)
          return !1;
        A.isTextblock && A.content.size === 0 && (w = Q + 1);
      }), w > -1 && e.setSelection(T.near(e.doc.resolve(w))), e.scrollIntoView();
    }
    return !0;
  }
  const d = a.pos === l.end() ? u.contentMatchAt(0).defaultType : null, h = wn(f, u.type.name, u.attrs), p = wn(f, l.node().type.name, l.node().attrs);
  e.delete(l.pos, a.pos);
  const m = d ? [
    { type: o, attrs: h },
    { type: d, attrs: p }
  ] : [{ type: o, attrs: h }];
  if (!St(e.doc, l.pos, 2))
    return !1;
  if (r) {
    const { selection: g, storedMarks: y } = t, { splittableMarks: k } = i.extensionManager, C = y || g.$to.parentOffset && g.$from.marks();
    if (e.split(l.pos, 2, m).scrollIntoView(), !C || !r)
      return !0;
    const N = C.filter((I) => k.includes(I.type.name));
    e.ensureMarks(N);
  }
  return !0;
}, vr = (n, e) => {
  const t = Di((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && qe(n.doc, t.pos) && n.join(t.pos), !0;
}, Nr = (n, e) => {
  const t = Di((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(t.start).after(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && qe(n.doc, r) && n.join(r), !0;
}, Op = (n, e, t, r = {}) => ({ editor: i, tr: s, state: o, dispatch: l, chain: a, commands: c, can: u }) => {
  const { extensions: f, splittableMarks: d } = i.extensionManager, h = U(n, o.schema), p = U(e, o.schema), { selection: m, storedMarks: g } = o, { $from: y, $to: k } = m, C = y.blockRange(k), N = g || m.$to.parentOffset && m.$from.marks();
  if (!C)
    return !1;
  const I = Di((w) => eo(w.type.name, f))(m);
  if (C.depth >= 1 && I && C.depth - I.depth <= 1) {
    if (I.node.type === h)
      return c.liftListItem(p);
    if (eo(I.node.type.name, f) && h.validContent(I.node.content) && l)
      return a().command(() => (s.setNodeMarkup(I.pos, h), !0)).command(() => vr(s, h)).command(() => Nr(s, h)).run();
  }
  return !t || !N || !l ? a().command(() => u().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => vr(s, h)).command(() => Nr(s, h)).run() : a().command(() => {
    const w = u().wrapInList(h, r), A = N.filter((Q) => d.includes(Q.type.name));
    return s.ensureMarks(A), w ? !0 : c.clearNodes();
  }).wrapInList(h, r).command(() => vr(s, h)).command(() => Nr(s, h)).run();
}, vp = (n, e = {}, t = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: s = !1 } = t, o = Ge(n, r.schema);
  return si(r, o, e) ? i.unsetMark(o, { extendEmptyMarkRange: s }) : i.setMark(o, e);
}, Np = (n, e, t = {}) => ({ state: r, commands: i }) => {
  const s = U(n, r.schema), o = U(e, r.schema);
  return rn(r, s, t) ? i.setNode(o) : i.setNode(s, t);
}, Ep = (n, e = {}) => ({ state: t, commands: r }) => {
  const i = U(n, t.schema);
  return rn(t, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, Ap = () => ({ state: n, dispatch: e }) => {
  const t = n.plugins;
  for (let r = 0; r < t.length; r += 1) {
    const i = t[r];
    let s;
    if (i.spec.isInputRules && (s = i.getState(n))) {
      if (e) {
        const o = n.tr, l = s.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          o.step(l.steps[a].invert(l.docs[a]));
        if (s.text) {
          const a = o.doc.resolve(s.from).marks();
          o.replaceWith(s.from, s.to, n.schema.text(s.text, a));
        } else
          o.delete(s.from, s.to);
      }
      return !0;
    }
  }
  return !1;
}, Ip = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, { empty: r, ranges: i } = t;
  return r || e && i.forEach((s) => {
    n.removeMark(s.$from.pos, s.$to.pos);
  }), !0;
}, Dp = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  var s;
  const { extendEmptyMarkRange: o = !1 } = e, { selection: l } = t, a = Ge(n, r.schema), { $from: c, empty: u, ranges: f } = l;
  if (!i)
    return !0;
  if (u && o) {
    let { from: d, to: h } = l;
    const p = (s = c.marks().find((g) => g.type === a)) === null || s === void 0 ? void 0 : s.attrs, m = Ai(c, a, p);
    m && (d = m.from, h = m.to), t.removeMark(d, h, a);
  } else
    f.forEach((d) => {
      t.removeMark(d.$from.pos, d.$to.pos, a);
    });
  return t.removeStoredMark(a), !0;
}, Pp = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  let s = null, o = null;
  const l = nr(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (s = U(n, r.schema)), l === "mark" && (o = Ge(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    const c = a.$from.pos, u = a.$to.pos;
    r.doc.nodesBetween(c, u, (f, d) => {
      s && s === f.type && t.setNodeMarkup(d, void 0, {
        ...f.attrs,
        ...e
      }), o && f.marks.length && f.marks.forEach((h) => {
        if (o === h.type) {
          const p = Math.max(d, c), m = Math.min(d + f.nodeSize, u);
          t.addMark(p, m, o.create({
            ...h.attrs,
            ...e
          }));
        }
      });
    });
  }), !0) : !1;
}, Rp = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = U(n, t.schema);
  return Yd(i, e)(t, r);
}, $p = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = U(n, t.schema);
  return Xd(i, e)(t, r);
};
var Bp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: kh,
  clearContent: xh,
  clearNodes: Sh,
  command: wh,
  createParagraphNear: Mh,
  cut: Ch,
  deleteCurrentNode: Th,
  deleteNode: Oh,
  deleteRange: vh,
  deleteSelection: Nh,
  enter: Eh,
  exitCode: Ah,
  extendMarkRange: Dh,
  first: Ph,
  focus: Rh,
  forEach: $h,
  insertContent: Bh,
  insertContentAt: Fh,
  joinUp: Vh,
  joinDown: _h,
  joinBackward: Hh,
  joinForward: jh,
  joinItemBackward: Wh,
  joinItemForward: Jh,
  joinTextblockBackward: qh,
  joinTextblockForward: Kh,
  keyboardShortcut: Gh,
  lift: Yh,
  liftEmptyBlock: Xh,
  liftListItem: Qh,
  newlineInCode: Zh,
  resetAttributes: ep,
  scrollIntoView: tp,
  selectAll: np,
  selectNodeBackward: rp,
  selectNodeForward: ip,
  selectParentNode: sp,
  selectTextblockEnd: op,
  selectTextblockStart: lp,
  setContent: ap,
  setMark: bp,
  setMeta: kp,
  setNode: xp,
  setNodeSelection: Sp,
  setTextSelection: wp,
  sinkListItem: Mp,
  splitBlock: Cp,
  splitListItem: Tp,
  toggleList: Op,
  toggleMark: vp,
  toggleNode: Np,
  toggleWrap: Ep,
  undoInputRule: Ap,
  unsetAllMarks: Ip,
  unsetMark: Dp,
  updateAttributes: Pp,
  wrapIn: Rp,
  wrapInList: $p
});
const Lp = de.create({
  name: "commands",
  addCommands() {
    return {
      ...Bp
    };
  }
}), zp = de.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new ke({
        key: new Ke("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), Fp = de.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      new ke({
        key: new Ke("focusEvents"),
        props: {
          handleDOMEvents: {
            focus: (e, t) => {
              n.isFocused = !0;
              const r = n.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, t) => {
              n.isFocused = !1;
              const r = n.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), Vp = de.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const n = () => this.editor.commands.first(({ commands: o }) => [
      () => o.undoInputRule(),
      // maybe convert first text block node to default node
      () => o.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: u, $anchor: f } = a, { pos: d, parent: h } = f, p = f.parent.isTextblock && d > 0 ? l.doc.resolve(d - 1) : f, m = p.parent.type.spec.isolating, g = f.pos - f.parentOffset, y = m && p.parent.childCount === 1 ? g === f.pos : v.atStart(c).from === d;
        return !u || !h.type.isTextblock || h.textContent.length || !y || y && f.parent.type.name === "paragraph" ? !1 : o.clearNodes();
      }),
      () => o.deleteSelection(),
      () => o.joinBackward(),
      () => o.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: o }) => [
      () => o.deleteSelection(),
      () => o.deleteCurrentNode(),
      () => o.joinForward(),
      () => o.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: o }) => [
        () => o.newlineInCode(),
        () => o.createParagraphNear(),
        () => o.liftEmptyBlock(),
        () => o.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: n,
      "Mod-Backspace": n,
      "Shift-Backspace": n,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...r
    }, s = {
      ...r,
      "Ctrl-h": n,
      "Alt-Backspace": n,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return Ii() || ia() ? s : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new ke({
        key: new Ke("clearDocument"),
        appendTransaction: (n, e, t) => {
          if (!(n.some((p) => p.docChanged) && !e.doc.eq(t.doc)))
            return;
          const { empty: i, from: s, to: o } = e.selection, l = v.atStart(e.doc).from, a = v.atEnd(e.doc).to;
          if (i || !(s === l && o === a) || !(t.doc.textBetween(0, t.doc.content.size, " ", " ").length === 0))
            return;
          const f = t.tr, d = Xn({
            state: t,
            transaction: f
          }), { commands: h } = new Qn({
            editor: this.editor,
            state: d
          });
          if (h.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
}), _p = de.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new ke({
        key: new Ke("tabindex"),
        props: {
          attributes: this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
class Xe {
  constructor(e, t, r = !1, i = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = e, this.editor = t, this.currentNode = i;
  }
  get name() {
    return this.node.type.name;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var e;
    return (e = this.actualDepth) !== null && e !== void 0 ? e : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(e) {
    let t = this.from, r = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      t = this.from + 1, r = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: t, to: r }, e);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0)
      return null;
    const e = this.resolvedPos.start(this.resolvedPos.depth - 1), t = this.resolvedPos.doc.resolve(e);
    return new Xe(t, this.editor);
  }
  get before() {
    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new Xe(e, this.editor);
  }
  get after() {
    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new Xe(e, this.editor);
  }
  get children() {
    const e = [];
    return this.node.content.forEach((t, r) => {
      const i = t.isBlock && !t.isTextblock, s = this.pos + r + 1, o = this.resolvedPos.doc.resolve(s);
      if (!i && o.depth <= this.depth)
        return;
      const l = new Xe(o, this.editor, i, i ? t : null);
      i && (l.actualDepth = this.depth + 1), e.push(new Xe(o, this.editor, i, i ? t : null));
    }), e;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const e = this.children;
    return e[e.length - 1] || null;
  }
  closest(e, t = {}) {
    let r = null, i = this.parent;
    for (; i && !r; ) {
      if (i.node.type.name === e)
        if (Object.keys(t).length > 0) {
          const s = i.node.attrs, o = Object.keys(t);
          for (let l = 0; l < o.length; l += 1) {
            const a = o[l];
            if (s[a] !== t[a])
              break;
          }
        } else
          r = i;
      i = i.parent;
    }
    return r;
  }
  querySelector(e, t = {}) {
    return this.querySelectorAll(e, t, !0)[0] || null;
  }
  querySelectorAll(e, t = {}, r = !1) {
    let i = [];
    if (!this.children || this.children.length === 0)
      return i;
    const s = Object.keys(t);
    return this.children.forEach((o) => {
      r && i.length > 0 || (o.node.type.name === e && s.every((a) => t[a] === o.node.attrs[a]) && i.push(o), !(r && i.length > 0) && (i = i.concat(o.querySelectorAll(e, t, r))));
    }), i;
  }
  setAttribute(e) {
    const t = this.editor.state.selection;
    this.editor.chain().setTextSelection(this.from).updateAttributes(this.node.type.name, e).setTextSelection(t.from).run();
  }
}
const Hp = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 1px !important;
  height: 1px !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function jp(n, e, t) {
  const r = document.querySelector(`style[data-tiptap-style${t ? `-${t}` : ""}]`);
  if (r !== null)
    return r;
  const i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.setAttribute(`data-tiptap-style${t ? `-${t}` : ""}`, ""), i.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(i), i;
}
class Wp extends rh {
  constructor(e = {}) {
    super(), this.isFocused = !1, this.extensionStorage = {}, this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }));
    }, 0);
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && document && (this.css = jp(Hp, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(e, t = !0) {
    this.setOptions({ editable: e }), t && this.emit("update", { editor: this, transaction: this.state.tr });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.view.state;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   */
  registerPlugin(e, t) {
    const r = Ql(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], i = this.state.reconfigure({ plugins: r });
    this.view.updateState(i);
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKey The plugins name
   */
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const t = typeof e == "string" ? `${e}$` : e.key, r = this.state.reconfigure({
      // @ts-ignore
      plugins: this.state.plugins.filter((i) => !i.key.startsWith(t))
    });
    this.view.updateState(r);
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var e, t;
    const i = [...this.options.enableCoreExtensions ? [
      zp,
      bh.configure({
        blockSeparator: (t = (e = this.options.coreExtensionOptions) === null || e === void 0 ? void 0 : e.clipboardTextSerializer) === null || t === void 0 ? void 0 : t.blockSeparator
      }),
      Lp,
      Fp,
      Vp,
      _p
    ] : [], ...this.options.extensions].filter((s) => ["extension", "node", "mark"].includes(s == null ? void 0 : s.type));
    this.extensionManager = new bt(i, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new Qn({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView() {
    const e = sa(this.options.content, this.schema, this.options.parseOptions), t = na(e, this.options.autofocus);
    this.view = new wd(this.options.element, {
      ...this.options.editorProps,
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: yt.create({
        doc: e,
        selection: t || void 0
      })
    });
    const r = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(r), this.createNodeViews(), this.prependClass();
    const i = this.view.dom;
    i.editor = this;
  }
  /**
   * Creates all node views.
   */
  createNodeViews() {
    this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const t = this.capturedTransaction;
    return this.capturedTransaction = null, t;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((o) => {
        var l;
        return (l = this.capturedTransaction) === null || l === void 0 ? void 0 : l.step(o);
      });
      return;
    }
    const t = this.state.apply(e), r = !this.state.selection.eq(t.selection);
    this.view.updateState(t), this.emit("transaction", {
      editor: this,
      transaction: e
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const i = e.getMeta("focus"), s = e.getMeta("blur");
    i && this.emit("focus", {
      editor: this,
      event: i.event,
      transaction: e
    }), s && this.emit("blur", {
      editor: this,
      event: s.event,
      transaction: e
    }), !(!e.docChanged || e.getMeta("preventUpdate")) && this.emit("update", {
      editor: this,
      transaction: e
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(e) {
    return pp(this.state, e);
  }
  isActive(e, t) {
    const r = typeof e == "string" ? e : null, i = typeof e == "string" ? t : e;
    return mp(this.state, r, i);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return fp(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: t = `

`, textSerializers: r = {} } = e || {};
    return dp(this.state.doc, {
      blockSeparator: t,
      textSerializers: {
        ...ea(this.schema),
        ...r
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return gp(this.state.doc);
  }
  /**
   * Get the number of characters for the current document.
   *
   * @deprecated
   */
  getCharacterCount() {
    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    this.emit("destroy"), this.view && this.view.destroy(), this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var e;
    return !(!((e = this.view) === null || e === void 0) && e.docView);
  }
  $node(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelector(e, t)) || null;
  }
  $nodes(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelectorAll(e, t)) || null;
  }
  $pos(e) {
    const t = this.state.doc.resolve(e);
    return new Xe(t, this);
  }
  get $doc() {
    return this.$pos(0);
  }
}
function Pt(n) {
  return new er({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = O(n.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: s } = e, o = r[r.length - 1], l = r[0];
      if (o) {
        const a = l.search(/\S/), c = t.from + l.indexOf(o), u = c + o.length;
        if (oa(t.from, t.to, e.doc).filter((h) => h.mark.type.excluded.find((m) => m === n.type && m !== h.mark.type)).filter((h) => h.to > c).length)
          return null;
        u < t.to && s.delete(u, t.to), c > t.from && s.delete(t.from + a, c);
        const d = t.from + a + o.length;
        s.addMark(t.from + a, d, n.type.create(i || {})), s.removeStoredMark(n.type);
      }
    }
  });
}
function Jp(n) {
  return new er({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = O(n.getAttributes, void 0, r) || {}, { tr: s } = e, o = t.from;
      let l = t.to;
      const a = n.type.create(i);
      if (r[1]) {
        const c = r[0].lastIndexOf(r[1]);
        let u = o + c;
        u > l ? u = l : l = u + r[1].length;
        const f = r[0][r[0].length - 1];
        s.insertText(f, o + r[0].length - 1), s.replaceWith(u, l, a);
      } else
        r[0] && s.insert(o - 1, n.type.create(i)).delete(s.mapping.map(o), s.mapping.map(l));
      s.scrollIntoView();
    }
  });
}
function oi(n) {
  return new er({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = e.doc.resolve(t.from), s = O(n.getAttributes, void 0, r) || {};
      if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), n.type))
        return null;
      e.tr.delete(t.from, t.to).setBlockType(t.from, t.from, n.type, s);
    }
  });
}
function sn(n) {
  return new er({
    find: n.find,
    handler: ({ state: e, range: t, match: r, chain: i }) => {
      const s = O(n.getAttributes, void 0, r) || {}, o = e.tr.delete(t.from, t.to), a = o.doc.resolve(t.from).blockRange(), c = a && yi(a, n.type, s);
      if (!c)
        return null;
      if (o.wrap(a, c), n.keepMarks && n.editor) {
        const { selection: f, storedMarks: d } = e, { splittableMarks: h } = n.editor.extensionManager, p = d || f.$to.parentOffset && f.$from.marks();
        if (p) {
          const m = p.filter((g) => h.includes(g.type.name));
          o.ensureMarks(m);
        }
      }
      if (n.keepAttributes) {
        const f = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList";
        i().updateAttributes(f, s).run();
      }
      const u = o.doc.resolve(t.from - 1).nodeBefore;
      u && u.type === n.type && qe(o.doc, t.from - 1) && (!n.joinPredicate || n.joinPredicate(r, u)) && o.join(t.from - 1);
    }
  });
}
class Ie {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = O(S(this, "addOptions", {
      name: this.name
    }))), this.storage = O(S(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Ie(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = tr(this.options, e), t.storage = O(S(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new Ie({ ...this.config, ...e });
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = O(S(t, "addOptions", {
      name: t.name
    })), t.storage = O(S(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  static handleExit({ editor: e, mark: t }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const o = i.marks();
      if (!!!o.find((c) => (c == null ? void 0 : c.type.name) === t.name))
        return !1;
      const a = o.find((c) => (c == null ? void 0 : c.type.name) === t.name);
      return a && r.removeStoredMark(a), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
}
class te {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = O(S(this, "addOptions", {
      name: this.name
    }))), this.storage = O(S(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new te(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = tr(this.options, e), t.storage = O(S(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new te({ ...this.config, ...e });
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = O(S(t, "addOptions", {
      name: t.name
    })), t.storage = O(S(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function Rt(n) {
  return new fh({
    find: n.find,
    handler: ({ state: e, range: t, match: r, pasteEvent: i }) => {
      const s = O(n.getAttributes, void 0, r, i);
      if (s === !1 || s === null)
        return null;
      const { tr: o } = e, l = r[r.length - 1], a = r[0];
      let c = t.to;
      if (l) {
        const u = a.search(/\S/), f = t.from + a.indexOf(l), d = f + l.length;
        if (oa(t.from, t.to, e.doc).filter((p) => p.mark.type.excluded.find((g) => g === n.type && g !== p.mark.type)).filter((p) => p.to > f).length)
          return null;
        d < t.to && o.delete(d, t.to), f > t.from && o.delete(t.from + u, f), c = t.from + u + l.length, o.addMark(t.from + u, c, n.type.create(s || {})), o.removeStoredMark(n.type);
      }
    }
  });
}
const qp = /^\s*>\s$/, Kp = te.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [
      { tag: "blockquote" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["blockquote", W(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: n }) => n.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: n }) => n.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: n }) => n.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      sn({
        find: qp,
        type: this.type
      })
    ];
  }
}), Up = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, Gp = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, Yp = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, Xp = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, Qp = Ie.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (n) => n.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight",
        getAttrs: (n) => /^(bold(er)?|[5-9]\d{2,})$/.test(n) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["strong", W(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: n }) => n.setMark(this.name),
      toggleBold: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetBold: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      Pt({
        find: Up,
        type: this.type
      }),
      Pt({
        find: Yp,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Rt({
        find: Gp,
        type: this.type
      }),
      Rt({
        find: Xp,
        type: this.type
      })
    ];
  }
}), Zp = te.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", W(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), no = Ie.create({
  name: "textStyle",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (n) => n.hasAttribute("style") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["span", W(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ state: n, commands: e }) => {
        const t = rr(n, this.type);
        return Object.entries(t).some(([, i]) => !!i) ? !0 : e.unsetMark(this.name);
      }
    };
  }
}), ro = /^\s*([-+*])\s$/, em = te.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["ul", W(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Zp.name, this.editor.getAttributes(no.name)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let n = sn({
      find: ro,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = sn({
      find: ro,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(no.name),
      editor: this.editor
    })), [
      n
    ];
  }
}), tm = /(?:^|\s)(`(?!\s+`)((?:[^`]+))`(?!\s+`))$/, nm = /(?:^|\s)(`(?!\s+`)((?:[^`]+))`(?!\s+`))/g, rm = Ie.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [
      { tag: "code" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["code", W(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setCode: () => ({ commands: n }) => n.setMark(this.name),
      toggleCode: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetCode: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      Pt({
        find: tm,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Rt({
        find: nm,
        type: this.type
      })
    ];
  }
}), im = /^```([a-z]+)?[\s\n]$/, sm = /^~~~([a-z]+)?[\s\n]$/, om = te.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: !0,
  defining: !0,
  addAttributes() {
    return {
      language: {
        default: null,
        parseHTML: (n) => {
          var e;
          const { languageClassPrefix: t } = this.options, s = [...((e = n.firstElementChild) === null || e === void 0 ? void 0 : e.classList) || []].filter((o) => o.startsWith(t)).map((o) => o.replace(t, ""))[0];
          return s || null;
        },
        rendered: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [
      "pre",
      W(this.options.HTMLAttributes, e),
      [
        "code",
        {
          class: n.attrs.language ? this.options.languageClassPrefix + n.attrs.language : null
        },
        0
      ]
    ];
  },
  addCommands() {
    return {
      setCodeBlock: (n) => ({ commands: e }) => e.setNode(this.name, n),
      toggleCodeBlock: (n) => ({ commands: e }) => e.toggleNode(this.name, "paragraph", n)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const { empty: n, $anchor: e } = this.editor.state.selection, t = e.pos === 1;
        return !n || e.parent.type.name !== this.name ? !1 : t || !e.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
      },
      // exit node on triple enter
      Enter: ({ editor: n }) => {
        if (!this.options.exitOnTripleEnter)
          return !1;
        const { state: e } = n, { selection: t } = e, { $from: r, empty: i } = t;
        if (!i || r.parent.type !== this.type)
          return !1;
        const s = r.parentOffset === r.parent.nodeSize - 2, o = r.parent.textContent.endsWith(`

`);
        return !s || !o ? !1 : n.chain().command(({ tr: l }) => (l.delete(r.pos - 2, r.pos), !0)).exitCode().run();
      },
      // exit node on arrow down
      ArrowDown: ({ editor: n }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: e } = n, { selection: t, doc: r } = e, { $from: i, empty: s } = t;
        if (!s || i.parent.type !== this.type || !(i.parentOffset === i.parent.nodeSize - 2))
          return !1;
        const l = i.after();
        return l === void 0 || r.nodeAt(l) ? !1 : n.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      oi({
        find: im,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      }),
      oi({
        find: sm,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      // this plugin creates a code block for pasted content from VS Code
      // we can also detect the copied code language
      new ke({
        key: new Ke("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (n, e) => {
            if (!e.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const t = e.clipboardData.getData("text/plain"), r = e.clipboardData.getData("vscode-editor-data"), i = r ? JSON.parse(r) : void 0, s = i == null ? void 0 : i.mode;
            if (!t || !s)
              return !1;
            const { tr: o } = n.state;
            return n.state.selection.from === n.state.doc.nodeSize - (1 + n.state.selection.$to.depth * 2) ? o.insert(n.state.selection.from - 1, this.type.create({ language: s })) : o.replaceSelectionWith(this.type.create({ language: s })), o.setSelection(T.near(o.doc.resolve(Math.max(0, o.selection.from - 2)))), o.insertText(t.replace(/\r\n?/g, `
`)), o.setMeta("paste", !0), n.dispatch(o), !0;
          }
        }
      })
    ];
  }
}), lm = te.create({
  name: "doc",
  topNode: !0,
  content: "block+"
});
function am(n = {}) {
  return new ke({
    view(e) {
      return new cm(e, n);
    }
  });
}
class cm {
  constructor(e, t) {
    var r;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = t.width) !== null && r !== void 0 ? r : 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((i) => {
      let s = (o) => {
        this[i](o);
      };
      return e.dom.addEventListener(i, s), { name: i, handler: s };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: t }) => this.editorView.dom.removeEventListener(e, t));
  }
  update(e, t) {
    this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), t = !e.parent.inlineContent, r;
    if (t) {
      let l = e.nodeBefore, a = e.nodeAfter;
      if (l || a) {
        let c = this.editorView.nodeDOM(this.cursorPos - (l ? l.nodeSize : 0));
        if (c) {
          let u = c.getBoundingClientRect(), f = l ? u.bottom : u.top;
          l && a && (f = (f + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2), r = { left: u.left, right: u.right, top: f - this.width / 2, bottom: f + this.width / 2 };
        }
      }
    }
    if (!r) {
      let l = this.editorView.coordsAtPos(this.cursorPos);
      r = { left: l.left - this.width / 2, right: l.left + this.width / 2, top: l.top, bottom: l.bottom };
    }
    let i = this.editorView.dom.offsetParent;
    this.element || (this.element = i.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
    let s, o;
    if (!i || i == document.body && getComputedStyle(i).position == "static")
      s = -pageXOffset, o = -pageYOffset;
    else {
      let l = i.getBoundingClientRect();
      s = l.left - i.scrollLeft, o = l.top - i.scrollTop;
    }
    this.element.style.left = r.left - s + "px", this.element.style.top = r.top - o + "px", this.element.style.width = r.right - r.left + "px", this.element.style.height = r.bottom - r.top + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let t = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), r = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), i = r && r.type.spec.disableDropCursor, s = typeof i == "function" ? i(this.editorView, t, e) : i;
    if (t && !s) {
      let o = t.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = il(this.editorView.state.doc, o, this.editorView.dragging.slice);
        l != null && (o = l);
      }
      this.setCursor(o), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    (e.target == this.editorView.dom || !this.editorView.dom.contains(e.relatedTarget)) && this.setCursor(null);
  }
}
const um = de.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      am(this.options)
    ];
  }
});
class L extends v {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    return L.valid(r) ? new L(r) : v.near(r);
  }
  content() {
    return x.empty;
  }
  eq(e) {
    return e instanceof L && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new L(e.resolve(t.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new Pi(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let t = e.parent;
    if (t.isTextblock || !fm(e) || !dm(e))
      return !1;
    let r = t.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let i = t.contentMatchAt(e.index()).defaultType;
    return i && i.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, t, r = !1) {
    e:
      for (; ; ) {
        if (!r && L.valid(e))
          return e;
        let i = e.pos, s = null;
        for (let o = e.depth; ; o--) {
          let l = e.node(o);
          if (t > 0 ? e.indexAfter(o) < l.childCount : e.index(o) > 0) {
            s = l.child(t > 0 ? e.indexAfter(o) : e.index(o) - 1);
            break;
          } else if (o == 0)
            return null;
          i += t;
          let a = e.doc.resolve(i);
          if (L.valid(a))
            return a;
        }
        for (; ; ) {
          let o = t > 0 ? s.firstChild : s.lastChild;
          if (!o) {
            if (s.isAtom && !s.isText && !M.isSelectable(s)) {
              e = e.doc.resolve(i + s.nodeSize * t), r = !1;
              continue e;
            }
            break;
          }
          s = o, i += t;
          let l = e.doc.resolve(i);
          if (L.valid(l))
            return l;
        }
        return null;
      }
  }
}
L.prototype.visible = !1;
L.findFrom = L.findGapCursorFrom;
v.jsonID("gapcursor", L);
class Pi {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new Pi(e.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    return L.valid(t) ? new L(t) : v.near(t);
  }
}
function fm(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.index(e), r = n.node(e);
    if (t == 0) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t - 1); ; i = i.lastChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function dm(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.indexAfter(e), r = n.node(e);
    if (t == r.childCount) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t); ; i = i.firstChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function hm() {
  return new ke({
    props: {
      decorations: ym,
      createSelectionBetween(n, e, t) {
        return e.pos == t.pos && L.valid(t) ? new L(t) : null;
      },
      handleClick: mm,
      handleKeyDown: pm,
      handleDOMEvents: { beforeinput: gm }
    }
  });
}
const pm = Wl({
  ArrowLeft: yn("horiz", -1),
  ArrowRight: yn("horiz", 1),
  ArrowUp: yn("vert", -1),
  ArrowDown: yn("vert", 1)
});
function yn(n, e) {
  const t = n == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, i, s) {
    let o = r.selection, l = e > 0 ? o.$to : o.$from, a = o.empty;
    if (o instanceof T) {
      if (!s.endOfTextblock(t) || l.depth == 0)
        return !1;
      a = !1, l = r.doc.resolve(e > 0 ? l.after() : l.before());
    }
    let c = L.findGapCursorFrom(l, e, a);
    return c ? (i && i(r.tr.setSelection(new L(c))), !0) : !1;
  };
}
function mm(n, e, t) {
  if (!n || !n.editable)
    return !1;
  let r = n.state.doc.resolve(e);
  if (!L.valid(r))
    return !1;
  let i = n.posAtCoords({ left: t.clientX, top: t.clientY });
  return i && i.inside > -1 && M.isSelectable(n.state.doc.nodeAt(i.inside)) ? !1 : (n.dispatch(n.state.tr.setSelection(new L(r))), !0);
}
function gm(n, e) {
  if (e.inputType != "insertCompositionText" || !(n.state.selection instanceof L))
    return !1;
  let { $from: t } = n.state.selection, r = t.parent.contentMatchAt(t.index()).findWrapping(n.state.schema.nodes.text);
  if (!r)
    return !1;
  let i = b.empty;
  for (let o = r.length - 1; o >= 0; o--)
    i = b.from(r[o].createAndFill(null, i));
  let s = n.state.tr.replace(t.pos, t.pos, new x(i, 0, 0));
  return s.setSelection(T.near(s.doc.resolve(t.pos + 1))), n.dispatch(s), !1;
}
function ym(n) {
  if (!(n.selection instanceof L))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", j.create(n.doc, [pe.widget(n.selection.head, e, { key: "gapcursor" })]);
}
const bm = de.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      hm()
    ];
  },
  extendNodeSchema(n) {
    var e;
    const t = {
      name: n.name,
      options: n.options,
      storage: n.storage
    };
    return {
      allowGapCursor: (e = O(S(n, "allowGapCursor", t))) !== null && e !== void 0 ? e : null
    };
  }
}), km = te.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  parseHTML() {
    return [
      { tag: "br" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["br", W(this.options.HTMLAttributes, n)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: n, chain: e, state: t, editor: r }) => n.first([
        () => n.exitCode(),
        () => n.command(() => {
          const { selection: i, storedMarks: s } = t;
          if (i.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: o } = this.options, { splittableMarks: l } = r.extensionManager, a = s || i.$to.parentOffset && i.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: c, dispatch: u }) => {
            if (u && a && o) {
              const f = a.filter((d) => l.includes(d.type.name));
              c.ensureMarks(f);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), xm = te.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((n) => ({
      tag: `h${n}`,
      attrs: { level: n }
    }));
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(n.attrs.level) ? n.attrs.level : this.options.levels[0]}`, W(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.setNode(this.name, n) : !1,
      toggleHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.toggleNode(this.name, "paragraph", n) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((n, e) => ({
      ...n,
      [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((n) => oi({
      find: new RegExp(`^(#{1,${n}})\\s$`),
      type: this.type,
      getAttributes: {
        level: n
      }
    }));
  }
});
var Fn = 200, K = function() {
};
K.prototype.append = function(e) {
  return e.length ? (e = K.from(e), !this.length && e || e.length < Fn && this.leafAppend(e) || this.length < Fn && e.leafPrepend(this) || this.appendInner(e)) : this;
};
K.prototype.prepend = function(e) {
  return e.length ? K.from(e).append(this) : this;
};
K.prototype.appendInner = function(e) {
  return new Sm(this, e);
};
K.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? K.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
K.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
K.prototype.forEach = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length), t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0);
};
K.prototype.map = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(s, o) {
    return i.push(e(s, o));
  }, t, r), i;
};
K.from = function(e) {
  return e instanceof K ? e : e && e.length ? new la(e) : K.empty;
};
var la = /* @__PURE__ */ function(n) {
  function e(r) {
    n.call(this), this.values = r;
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, s) {
    return i == 0 && s == this.length ? this : new e(this.values.slice(i, s));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, s, o, l) {
    for (var a = s; a < o; a++)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, s, o, l) {
    for (var a = s - 1; a >= o; a--)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= Fn)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= Fn)
      return new e(i.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
}(K);
K.empty = new la([]);
var Sm = /* @__PURE__ */ function(n) {
  function e(t, r) {
    n.call(this), this.left = t, this.right = r, this.length = t.length + r.length, this.depth = Math.max(t.depth, r.depth) + 1;
  }
  return n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, s, o) {
    var l = this.left.length;
    if (i < l && this.left.forEachInner(r, i, Math.min(s, l), o) === !1 || s > l && this.right.forEachInner(r, Math.max(i - l, 0), Math.min(this.length, s) - l, o + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, s, o) {
    var l = this.left.length;
    if (i > l && this.right.forEachInvertedInner(r, i - l, Math.max(s, l) - l, o + l) === !1 || s < l && this.left.forEachInvertedInner(r, Math.min(i, l), s, o) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var s = this.left.length;
    return i <= s ? this.left.slice(r, i) : r >= s ? this.right.slice(r - s, i - s) : this.left.slice(r, s).append(this.right.slice(0, i - s));
  }, e.prototype.leafAppend = function(r) {
    var i = this.right.leafAppend(r);
    if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function(r) {
    var i = this.left.leafPrepend(r);
    if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
}(K);
const wm = 500;
class Se {
  constructor(e, t) {
    this.items = e, this.eventCount = t;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, t) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let i, s;
    t && (i = this.remapping(r, this.items.length), s = i.maps.length);
    let o = e.tr, l, a, c = [], u = [];
    return this.items.forEach((f, d) => {
      if (!f.step) {
        i || (i = this.remapping(r, d + 1), s = i.maps.length), s--, u.push(f);
        return;
      }
      if (i) {
        u.push(new Te(f.map));
        let h = f.step.map(i.slice(s)), p;
        h && o.maybeStep(h).doc && (p = o.mapping.maps[o.mapping.maps.length - 1], c.push(new Te(p, void 0, void 0, c.length + u.length))), s--, p && i.appendMap(p, s);
      } else
        o.maybeStep(f.step);
      if (f.selection)
        return l = i ? f.selection.map(i.slice(s)) : f.selection, a = new Se(this.items.slice(0, r).append(u.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: o, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, t, r, i) {
    let s = [], o = this.eventCount, l = this.items, a = !i && l.length ? l.get(l.length - 1) : null;
    for (let u = 0; u < e.steps.length; u++) {
      let f = e.steps[u].invert(e.docs[u]), d = new Te(e.mapping.maps[u], f, t), h;
      (h = a && a.merge(d)) && (d = h, u ? s.pop() : l = l.slice(0, l.length - 1)), s.push(d), t && (o++, t = void 0), i || (a = d);
    }
    let c = o - r.depth;
    return c > Cm && (l = Mm(l, c), o -= c), new Se(l.append(s), o);
  }
  remapping(e, t) {
    let r = new xt();
    return this.items.forEach((i, s) => {
      let o = i.mirrorOffset != null && s - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, o);
    }, e, t), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new Se(this.items.append(e.map((t) => new Te(t))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - t), s = e.mapping, o = e.steps.length, l = this.eventCount;
    this.items.forEach((d) => {
      d.selection && l--;
    }, i);
    let a = t;
    this.items.forEach((d) => {
      let h = s.getMirror(--a);
      if (h == null)
        return;
      o = Math.min(o, h);
      let p = s.maps[h];
      if (d.step) {
        let m = e.steps[h].invert(e.docs[h]), g = d.selection && d.selection.map(s.slice(a + 1, h));
        g && l++, r.push(new Te(p, m, g));
      } else
        r.push(new Te(p));
    }, i);
    let c = [];
    for (let d = t; d < o; d++)
      c.push(new Te(s.maps[d]));
    let u = this.items.slice(0, i).append(c).append(r), f = new Se(u, l);
    return f.emptyItemCount() > wm && (f = f.compress(this.items.length - r.length)), f;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let t = this.remapping(0, e), r = t.maps.length, i = [], s = 0;
    return this.items.forEach((o, l) => {
      if (l >= e)
        i.push(o), o.selection && s++;
      else if (o.step) {
        let a = o.step.map(t.slice(r)), c = a && a.getMap();
        if (r--, c && t.appendMap(c, r), a) {
          let u = o.selection && o.selection.map(t.slice(r));
          u && s++;
          let f = new Te(c.invert(), a, u), d, h = i.length - 1;
          (d = i.length && i[h].merge(f)) ? i[h] = d : i.push(f);
        }
      } else
        o.map && r--;
    }, this.items.length, 0), new Se(K.from(i.reverse()), s);
  }
}
Se.empty = new Se(K.empty, 0);
function Mm(n, e) {
  let t;
  return n.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return t = i, !1;
  }), n.slice(t);
}
class Te {
  constructor(e, t, r, i) {
    this.map = e, this.step = t, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new Te(t.getMap().invert(), t, this.selection);
    }
  }
}
class Le {
  constructor(e, t, r, i, s) {
    this.done = e, this.undone = t, this.prevRanges = r, this.prevTime = i, this.prevComposition = s;
  }
}
const Cm = 20;
function Tm(n, e, t, r) {
  let i = t.getMeta(ot), s;
  if (i)
    return i.historyState;
  t.getMeta(Nm) && (n = new Le(n.done, n.undone, null, 0, -1));
  let o = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return n;
  if (o && o.getMeta(ot))
    return o.getMeta(ot).redo ? new Le(n.done.addTransform(t, void 0, r, Mn(e)), n.undone, io(t.mapping.maps[t.steps.length - 1]), n.prevTime, n.prevComposition) : new Le(n.done, n.undone.addTransform(t, void 0, r, Mn(e)), null, n.prevTime, n.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
    let l = t.getMeta("composition"), a = n.prevTime == 0 || !o && n.prevComposition != l && (n.prevTime < (t.time || 0) - r.newGroupDelay || !Om(t, n.prevRanges)), c = o ? Er(n.prevRanges, t.mapping) : io(t.mapping.maps[t.steps.length - 1]);
    return new Le(n.done.addTransform(t, a ? e.selection.getBookmark() : void 0, r, Mn(e)), Se.empty, c, t.time, l ?? n.prevComposition);
  } else
    return (s = t.getMeta("rebased")) ? new Le(n.done.rebased(t, s), n.undone.rebased(t, s), Er(n.prevRanges, t.mapping), n.prevTime, n.prevComposition) : new Le(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), Er(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
}
function Om(n, e) {
  if (!e)
    return !1;
  if (!n.docChanged)
    return !0;
  let t = !1;
  return n.mapping.maps[0].forEach((r, i) => {
    for (let s = 0; s < e.length; s += 2)
      r <= e[s + 1] && i >= e[s] && (t = !0);
  }), t;
}
function io(n) {
  let e = [];
  return n.forEach((t, r, i, s) => e.push(i, s)), e;
}
function Er(n, e) {
  if (!n)
    return null;
  let t = [];
  for (let r = 0; r < n.length; r += 2) {
    let i = e.map(n[r], 1), s = e.map(n[r + 1], -1);
    i <= s && t.push(i, s);
  }
  return t;
}
function vm(n, e, t) {
  let r = Mn(e), i = ot.get(e).spec.config, s = (t ? n.undone : n.done).popEvent(e, r);
  if (!s)
    return null;
  let o = s.selection.resolve(s.transform.doc), l = (t ? n.done : n.undone).addTransform(s.transform, e.selection.getBookmark(), i, r), a = new Le(t ? l : s.remaining, t ? s.remaining : l, null, 0, -1);
  return s.transform.setSelection(o).setMeta(ot, { redo: t, historyState: a });
}
let Ar = !1, so = null;
function Mn(n) {
  let e = n.plugins;
  if (so != e) {
    Ar = !1, so = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        Ar = !0;
        break;
      }
  }
  return Ar;
}
const ot = new Ke("history"), Nm = new Ke("closeHistory");
function Em(n = {}) {
  return n = {
    depth: n.depth || 100,
    newGroupDelay: n.newGroupDelay || 500
  }, new ke({
    key: ot,
    state: {
      init() {
        return new Le(Se.empty, Se.empty, null, 0, -1);
      },
      apply(e, t, r) {
        return Tm(t, r, e, n);
      }
    },
    config: n,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let r = t.inputType, i = r == "historyUndo" ? ca : r == "historyRedo" ? ua : null;
          return i ? (t.preventDefault(), i(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
function aa(n, e) {
  return (t, r) => {
    let i = ot.getState(t);
    if (!i || (n ? i.undone : i.done).eventCount == 0)
      return !1;
    if (r) {
      let s = vm(i, t, n);
      s && r(e ? s.scrollIntoView() : s);
    }
    return !0;
  };
}
const ca = aa(!1, !0), ua = aa(!0, !0), Am = de.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: n, dispatch: e }) => ca(n, e),
      redo: () => ({ state: n, dispatch: e }) => ua(n, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      Em(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), Im = te.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["hr", W(this.options.HTMLAttributes, n)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: n, state: e }) => {
        const { $to: t } = e.selection, r = n();
        return t.parentOffset === 0 ? r.insertContentAt(Math.max(t.pos - 2, 0), { type: this.name }) : r.insertContent({ type: this.name }), r.command(({ tr: i, dispatch: s }) => {
          var o;
          if (s) {
            const { $to: l } = i.selection, a = l.end();
            if (l.nodeAfter)
              l.nodeAfter.isTextblock ? i.setSelection(T.create(i.doc, l.pos + 1)) : l.nodeAfter.isBlock ? i.setSelection(M.create(i.doc, l.pos)) : i.setSelection(T.create(i.doc, l.pos));
            else {
              const c = (o = l.parent.type.contentMatch.defaultType) === null || o === void 0 ? void 0 : o.create();
              c && (i.insert(a, c), i.setSelection(T.create(i.doc, a + 1)));
            }
            i.scrollIntoView();
          }
          return !0;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      Jp({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), Dm = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, Pm = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, Rm = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, $m = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, Bm = Ie.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (n) => n.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["em", W(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: n }) => n.setMark(this.name),
      toggleItalic: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetItalic: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      Pt({
        find: Dm,
        type: this.type
      }),
      Pt({
        find: Rm,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Rt({
        find: Pm,
        type: this.type
      }),
      Rt({
        find: $m,
        type: this.type
      })
    ];
  }
}), Lm = te.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", W(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), zm = te.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", W(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), oo = Ie.create({
  name: "textStyle",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (n) => n.hasAttribute("style") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["span", W(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ state: n, commands: e }) => {
        const t = rr(n, this.type);
        return Object.entries(t).some(([, i]) => !!i) ? !0 : e.unsetMark(this.name);
      }
    };
  }
}), lo = /^(\d+)\.\s$/, Fm = te.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (n) => n.hasAttribute("start") ? parseInt(n.getAttribute("start") || "", 10) : 1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    const { start: e, ...t } = n;
    return e === 1 ? ["ol", W(this.options.HTMLAttributes, t), 0] : ["ol", W(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(zm.name, this.editor.getAttributes(oo.name)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let n = sn({
      find: lo,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = sn({
      find: lo,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(oo.name) }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
      editor: this.editor
    })), [
      n
    ];
  }
}), Vm = te.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["p", W(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: n }) => n.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), _m = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, Hm = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, jm = Ie.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n) => n.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["s", W(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: n }) => n.setMark(this.name),
      toggleStrike: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetStrike: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      Pt({
        find: _m,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Rt({
        find: Hm,
        type: this.type
      })
    ];
  }
}), Wm = te.create({
  name: "text",
  group: "inline"
}), Jm = de.create({
  name: "starterKit",
  addExtensions() {
    var n, e, t, r, i, s, o, l, a, c, u, f, d, h, p, m, g, y;
    const k = [];
    return this.options.blockquote !== !1 && k.push(Kp.configure((n = this.options) === null || n === void 0 ? void 0 : n.blockquote)), this.options.bold !== !1 && k.push(Qp.configure((e = this.options) === null || e === void 0 ? void 0 : e.bold)), this.options.bulletList !== !1 && k.push(em.configure((t = this.options) === null || t === void 0 ? void 0 : t.bulletList)), this.options.code !== !1 && k.push(rm.configure((r = this.options) === null || r === void 0 ? void 0 : r.code)), this.options.codeBlock !== !1 && k.push(om.configure((i = this.options) === null || i === void 0 ? void 0 : i.codeBlock)), this.options.document !== !1 && k.push(lm.configure((s = this.options) === null || s === void 0 ? void 0 : s.document)), this.options.dropcursor !== !1 && k.push(um.configure((o = this.options) === null || o === void 0 ? void 0 : o.dropcursor)), this.options.gapcursor !== !1 && k.push(bm.configure((l = this.options) === null || l === void 0 ? void 0 : l.gapcursor)), this.options.hardBreak !== !1 && k.push(km.configure((a = this.options) === null || a === void 0 ? void 0 : a.hardBreak)), this.options.heading !== !1 && k.push(xm.configure((c = this.options) === null || c === void 0 ? void 0 : c.heading)), this.options.history !== !1 && k.push(Am.configure((u = this.options) === null || u === void 0 ? void 0 : u.history)), this.options.horizontalRule !== !1 && k.push(Im.configure((f = this.options) === null || f === void 0 ? void 0 : f.horizontalRule)), this.options.italic !== !1 && k.push(Bm.configure((d = this.options) === null || d === void 0 ? void 0 : d.italic)), this.options.listItem !== !1 && k.push(Lm.configure((h = this.options) === null || h === void 0 ? void 0 : h.listItem)), this.options.orderedList !== !1 && k.push(Fm.configure((p = this.options) === null || p === void 0 ? void 0 : p.orderedList)), this.options.paragraph !== !1 && k.push(Vm.configure((m = this.options) === null || m === void 0 ? void 0 : m.paragraph)), this.options.strike !== !1 && k.push(jm.configure((g = this.options) === null || g === void 0 ? void 0 : g.strike)), this.options.text !== !1 && k.push(Wm.configure((y = this.options) === null || y === void 0 ? void 0 : y.text)), k;
  }
});
function qm(n) {
  let e;
  return {
    c() {
      e = R("div"), P(e, "class", "p-2 text-sm flex-grow rounded border overflow-y-scroll outline-none");
    },
    m(t, r) {
      B(t, e, r), n[1](e);
    },
    p: H,
    i: H,
    o: H,
    d(t) {
      t && $(e), n[1](null);
    }
  };
}
function Km(n, e, t) {
  let r, i;
  ci(() => {
    i = new Wp({
      element: r,
      extensions: [Jm],
      content: "<p>Hello World! 🌍️ </p>",
      onTransaction: () => {
        i = i;
      }
    });
  }), yo(() => {
    i && i.destroy();
  });
  function s(o) {
    Ir[o ? "unshift" : "push"](() => {
      r = o, t(0, r);
    });
  }
  return [r, s];
}
class Um extends be {
  constructor(e) {
    super(), ye(this, e, Km, qm, ge, {});
  }
}
function Gm(n) {
  let e, t, r, i, s, o, l, a, c, u;
  return r = new Um({}), l = new Kc({
    props: {
      icon: "iconamoon:send-duotone",
      class: "w-6 h-6"
    }
  }), {
    c() {
      e = R("div"), t = R("div"), ce(r.$$.fragment), i = we(), s = R("div"), o = R("button"), ce(l.$$.fragment), P(o, "class", "w-8 h-8 pl-1 bg-slate-200 rounded"), P(s, "class", "flex flex-col gap-2"), P(t, "class", "h-full flex gap-1"), P(e, "class", "max-h-24 h-full");
    },
    m(f, d) {
      B(f, e, d), z(e, t), re(r, t, null), z(t, i), z(t, s), z(s, o), re(l, o, null), a = !0, c || (u = xa(o, "click", Xm), c = !0);
    },
    p: H,
    i(f) {
      a || (F(r.$$.fragment, f), F(l.$$.fragment, f), a = !0);
    },
    o(f) {
      V(r.$$.fragment, f), V(l.$$.fragment, f), a = !1;
    },
    d(f) {
      f && $(e), ie(r), ie(l), c = !1, u();
    }
  };
}
let Ym = "";
function Xm() {
  console.log(Ym);
}
class Qm extends be {
  constructor(e) {
    super(), ye(this, e, null, Gm, ge, {});
  }
}
const Zm = (n) => ({}), ao = (n) => ({});
function eg(n) {
  let e, t, r, i, s, o;
  const l = (
    /*#slots*/
    n[1].default
  ), a = Ct(
    l,
    n,
    /*$$scope*/
    n[0],
    null
  ), c = (
    /*#slots*/
    n[1]["message-input"]
  ), u = Ct(
    c,
    n,
    /*$$scope*/
    n[0],
    ao
  );
  return {
    c() {
      e = R("div"), t = R("div"), r = R("div"), i = R("div"), a && a.c(), s = we(), u && u.c(), P(i, "class", "flex flex-col gap-4"), P(r, "class", "flex-grow"), P(t, "class", "h-full flex flex-col"), P(e, "class", "flex-grow p-2 overflow-hidden");
    },
    m(f, d) {
      B(f, e, d), z(e, t), z(t, r), z(r, i), a && a.m(i, null), z(t, s), u && u.m(t, null), o = !0;
    },
    p(f, [d]) {
      a && a.p && (!o || d & /*$$scope*/
      1) && Ot(
        a,
        l,
        f,
        /*$$scope*/
        f[0],
        o ? Tt(
          l,
          /*$$scope*/
          f[0],
          d,
          null
        ) : vt(
          /*$$scope*/
          f[0]
        ),
        null
      ), u && u.p && (!o || d & /*$$scope*/
      1) && Ot(
        u,
        c,
        f,
        /*$$scope*/
        f[0],
        o ? Tt(
          c,
          /*$$scope*/
          f[0],
          d,
          Zm
        ) : vt(
          /*$$scope*/
          f[0]
        ),
        ao
      );
    },
    i(f) {
      o || (F(a, f), F(u, f), o = !0);
    },
    o(f) {
      V(a, f), V(u, f), o = !1;
    },
    d(f) {
      f && $(e), a && a.d(f), u && u.d(f);
    }
  };
}
function tg(n, e, t) {
  let { $$slots: r = {}, $$scope: i } = e;
  return n.$$set = (s) => {
    "$$scope" in s && t(0, i = s.$$scope);
  }, [i, r];
}
class ng extends be {
  constructor(e) {
    super(), ye(this, e, tg, eg, ge, {});
  }
}
function rg(n) {
  let e, t;
  return {
    c() {
      e = R("div"), t = R("div"), t.textContent = `${ga.widgetFooter}`, P(t, "class", "text-center"), P(e, "class", "p-1 bg-slate-200 text-xs");
    },
    m(r, i) {
      B(r, e, i), z(e, t);
    },
    p: H,
    i: H,
    o: H,
    d(r) {
      r && $(e);
    }
  };
}
class ig extends be {
  constructor(e) {
    super(), ye(this, e, null, rg, ge, {});
  }
}
function sg(n) {
  let e, t, r;
  return {
    c() {
      e = R("div"), t = R("p"), r = on(
        /*headerText*/
        n[0]
      ), P(t, "class", "text-xl font-black mt-4"), P(e, "class", "p-2 bg-slate-200");
    },
    m(i, s) {
      B(i, e, s), z(e, t), z(t, r);
    },
    p(i, [s]) {
      s & /*headerText*/
      1 && li(
        r,
        /*headerText*/
        i[0]
      );
    },
    i: H,
    o: H,
    d(i) {
      i && $(e);
    }
  };
}
function og(n, e, t) {
  let { headerText: r } = e;
  return n.$$set = (i) => {
    "headerText" in i && t(0, r = i.headerText);
  }, [r];
}
class lg extends be {
  constructor(e) {
    super(), ye(this, e, og, sg, ge, { headerText: 0 });
  }
}
const ag = (n) => ({}), co = (n) => ({}), cg = (n) => ({}), uo = (n) => ({});
function ug(n) {
  let e, t, r, i;
  const s = (
    /*#slots*/
    n[1].avatar
  ), o = Ct(
    s,
    n,
    /*$$scope*/
    n[0],
    uo
  ), l = (
    /*#slots*/
    n[1].body
  ), a = Ct(
    l,
    n,
    /*$$scope*/
    n[0],
    co
  );
  return {
    c() {
      e = R("div"), o && o.c(), t = we(), r = R("div"), a && a.c(), P(r, "class", "flex flex-col gap-2"), P(e, "class", "flex gap-2");
    },
    m(c, u) {
      B(c, e, u), o && o.m(e, null), z(e, t), z(e, r), a && a.m(r, null), i = !0;
    },
    p(c, [u]) {
      o && o.p && (!i || u & /*$$scope*/
      1) && Ot(
        o,
        s,
        c,
        /*$$scope*/
        c[0],
        i ? Tt(
          s,
          /*$$scope*/
          c[0],
          u,
          cg
        ) : vt(
          /*$$scope*/
          c[0]
        ),
        uo
      ), a && a.p && (!i || u & /*$$scope*/
      1) && Ot(
        a,
        l,
        c,
        /*$$scope*/
        c[0],
        i ? Tt(
          l,
          /*$$scope*/
          c[0],
          u,
          ag
        ) : vt(
          /*$$scope*/
          c[0]
        ),
        co
      );
    },
    i(c) {
      i || (F(o, c), F(a, c), i = !0);
    },
    o(c) {
      V(o, c), V(a, c), i = !1;
    },
    d(c) {
      c && $(e), o && o.d(c), a && a.d(c);
    }
  };
}
function fg(n, e, t) {
  let { $$slots: r = {}, $$scope: i } = e;
  return n.$$set = (s) => {
    "$$scope" in s && t(0, i = s.$$scope);
  }, [i, r];
}
class dg extends be {
  constructor(e) {
    super(), ye(this, e, fg, ug, ge, {});
  }
}
function hg(n) {
  let e, t;
  return {
    c() {
      e = R("div"), t = on(
        /*text*/
        n[0]
      ), P(e, "class", "p-2 bg-violet-200 rounded-lg text-sm shadow shadow-violet-300");
    },
    m(r, i) {
      B(r, e, i), z(e, t);
    },
    p(r, [i]) {
      i & /*text*/
      1 && li(
        t,
        /*text*/
        r[0]
      );
    },
    i: H,
    o: H,
    d(r) {
      r && $(e);
    }
  };
}
function pg(n, e, t) {
  let { text: r } = e;
  return n.$$set = (i) => {
    "text" in i && t(0, r = i.text);
  }, [r];
}
class fo extends be {
  constructor(e) {
    super(), ye(this, e, pg, hg, ge, { text: 0 });
  }
}
function mg(n) {
  let e, t, r, i;
  const s = (
    /*#slots*/
    n[1].default
  ), o = Ct(
    s,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = R("div"), t = R("div"), r = R("div"), o && o.c(), P(r, "class", "h-full w-full flex flex-col rounded shadow overflow-hidden"), P(t, "class", "w-screen h-screen sm:w-96 sm:h-[40rem]"), P(e, "class", "fixed sm:bottom-4 sm:right-4");
    },
    m(l, a) {
      B(l, e, a), z(e, t), z(t, r), o && o.m(r, null), i = !0;
    },
    p(l, [a]) {
      o && o.p && (!i || a & /*$$scope*/
      1) && Ot(
        o,
        s,
        l,
        /*$$scope*/
        l[0],
        i ? Tt(
          s,
          /*$$scope*/
          l[0],
          a,
          null
        ) : vt(
          /*$$scope*/
          l[0]
        ),
        null
      );
    },
    i(l) {
      i || (F(o, l), i = !0);
    },
    o(l) {
      V(o, l), i = !1;
    },
    d(l) {
      l && $(e), o && o.d(l);
    }
  };
}
function gg(n, e, t) {
  let { $$slots: r = {}, $$scope: i } = e;
  return n.$$set = (s) => {
    "$$scope" in s && t(0, i = s.$$scope);
  }, [i, r];
}
class yg extends be {
  constructor(e) {
    super(), ye(this, e, gg, mg, ge, {});
  }
}
const bg = 1;
function kg(n) {
  let e, t;
  return {
    c() {
      e = R("img"), P(e, "slot", "avatar"), P(e, "class", "w-8 h-8 rounded-full shadow"), ya(e.src, t = "https://placehold.co/32") || P(e, "src", t), P(e, "alt", "");
    },
    m(r, i) {
      B(r, e, i);
    },
    p: H,
    d(r) {
      r && $(e);
    }
  };
}
function xg(n) {
  let e, t, r, i;
  return e = new fo({
    props: { text: "Lorem ipsum dolor sit amet?" }
  }), r = new fo({
    props: {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In hic odit error excepturi, optio dicta aperiam quasi esse doloribus odio officiis voluptatum neque. Accusamus facere ea quidem tenetur illum expedita."
    }
  }), {
    c() {
      ce(e.$$.fragment), t = we(), ce(r.$$.fragment);
    },
    m(s, o) {
      re(e, s, o), B(s, t, o), re(r, s, o), i = !0;
    },
    p: H,
    i(s) {
      i || (F(e.$$.fragment, s), F(r.$$.fragment, s), i = !0);
    },
    o(s) {
      V(e.$$.fragment, s), V(r.$$.fragment, s), i = !1;
    },
    d(s) {
      s && $(t), ie(e, s), ie(r, s);
    }
  };
}
function Sg(n) {
  let e, t, r, i, s, o, l, a, c, u, f;
  return r = new dg({
    props: {
      $$slots: {
        body: [xg],
        avatar: [kg]
      },
      $$scope: { ctx: n }
    }
  }), o = new or({ props: { text: "Just Browsing" } }), a = new or({ props: { text: "I have few questions" } }), u = new or({
    props: { text: "I'd like to learn about SaaSChat" }
  }), {
    c() {
      e = R("br"), t = we(), ce(r.$$.fragment), i = we(), s = R("div"), ce(o.$$.fragment), l = we(), ce(a.$$.fragment), c = we(), ce(u.$$.fragment), P(s, "class", "flex flex-row-reverse flex-wrap-reverse gap-2");
    },
    m(d, h) {
      B(d, e, h), B(d, t, h), re(r, d, h), B(d, i, h), B(d, s, h), re(o, s, null), z(s, l), re(a, s, null), z(s, c), re(u, s, null), f = !0;
    },
    p(d, h) {
      const p = {};
      h & /*$$scope*/
      2 && (p.$$scope = { dirty: h, ctx: d }), r.$set(p);
    },
    i(d) {
      f || (F(r.$$.fragment, d), F(o.$$.fragment, d), F(a.$$.fragment, d), F(u.$$.fragment, d), f = !0);
    },
    o(d) {
      V(r.$$.fragment, d), V(o.$$.fragment, d), V(a.$$.fragment, d), V(u.$$.fragment, d), f = !1;
    },
    d(d) {
      d && ($(e), $(t), $(i), $(s)), ie(r, d), ie(o), ie(a), ie(u);
    }
  };
}
function wg(n) {
  let e, t;
  return e = new Qm({}), {
    c() {
      ce(e.$$.fragment);
    },
    m(r, i) {
      re(e, r, i), t = !0;
    },
    i(r) {
      t || (F(e.$$.fragment, r), t = !0);
    },
    o(r) {
      V(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ie(e, r);
    }
  };
}
function Mg(n) {
  let e, t;
  return e = new Ba({
    props: {
      $$slots: { default: [wg] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ce(e.$$.fragment);
    },
    m(r, i) {
      re(e, r, i), t = !0;
    },
    p(r, i) {
      const s = {};
      i & /*$$scope*/
      2 && (s.$$scope = { dirty: i, ctx: r }), e.$set(s);
    },
    i(r) {
      t || (F(e.$$.fragment, r), t = !0);
    },
    o(r) {
      V(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ie(e, r);
    }
  };
}
function Cg(n) {
  let e, t, r, i, s, o;
  return e = new lg({
    props: { headerText: (
      /*teamName*/
      n[0]
    ) }
  }), r = new ng({
    props: {
      $$slots: {
        "message-input": [Mg],
        default: [Sg]
      },
      $$scope: { ctx: n }
    }
  }), s = new ig({}), {
    c() {
      ce(e.$$.fragment), t = we(), ce(r.$$.fragment), i = we(), ce(s.$$.fragment);
    },
    m(l, a) {
      re(e, l, a), B(l, t, a), re(r, l, a), B(l, i, a), re(s, l, a), o = !0;
    },
    p(l, a) {
      const c = {};
      a & /*teamName*/
      1 && (c.headerText = /*teamName*/
      l[0]), e.$set(c);
      const u = {};
      a & /*$$scope*/
      2 && (u.$$scope = { dirty: a, ctx: l }), r.$set(u);
    },
    i(l) {
      o || (F(e.$$.fragment, l), F(r.$$.fragment, l), F(s.$$.fragment, l), o = !0);
    },
    o(l) {
      V(e.$$.fragment, l), V(r.$$.fragment, l), V(s.$$.fragment, l), o = !1;
    },
    d(l) {
      l && ($(t), $(i)), ie(e, l), ie(r, l), ie(s, l);
    }
  };
}
function Tg(n) {
  let e, t, r, i, s;
  return i = new yg({
    props: {
      $$slots: { default: [Cg] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      e = R("div"), t = R("div"), t.innerHTML = "", r = we(), ce(i.$$.fragment), P(t, "class", "fixed bottom-4 right-4");
    },
    m(o, l) {
      B(o, e, l), z(e, t), z(e, r), re(i, e, null), s = !0;
    },
    p(o, [l]) {
      const a = {};
      l & /*$$scope, teamName*/
      3 && (a.$$scope = { dirty: l, ctx: o }), i.$set(a);
    },
    i(o) {
      s || (F(i.$$.fragment, o), s = !0);
    },
    o(o) {
      V(i.$$.fragment, o), s = !1;
    },
    d(o) {
      o && $(e), ie(i);
    }
  };
}
function Og(n, e, t) {
  let r = "";
  return ci(async () => {
    const { team: i } = await ma({ api: pa.teams.team(bg) });
    console.log(i), t(0, r = i.name);
  }), [r];
}
class Ig extends be {
  constructor(e) {
    super(), ye(this, e, Og, Tg, ge, {});
  }
}
export {
  Ig as Widget
};
