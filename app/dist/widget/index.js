var P = Object.defineProperty;
var W = (t, e, n) => e in t ? P(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var $ = (t, e, n) => (W(t, typeof e != "symbol" ? e + "" : e, n), n);
function s() {
}
function O(t) {
  return t();
}
function E() {
  return /* @__PURE__ */ Object.create(null);
}
function _(t) {
  t.forEach(O);
}
function j(t) {
  return typeof t == "function";
}
function A(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function L(t) {
  return Object.keys(t).length === 0;
}
function M(t, e, n) {
  t.insertBefore(e, n || null);
}
function N(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function R(t) {
  return document.createElement(t);
}
function U(t) {
  return Array.from(t.childNodes);
}
let y;
function a(t) {
  y = t;
}
const i = [], S = [];
let l = [];
const C = [], V = /* @__PURE__ */ Promise.resolve();
let p = !1;
function q() {
  p || (p = !0, V.then(B));
}
function m(t) {
  l.push(t);
}
const g = /* @__PURE__ */ new Set();
let u = 0;
function B() {
  if (u !== 0)
    return;
  const t = y;
  do {
    try {
      for (; u < i.length; ) {
        const e = i[u];
        u++, a(e), z(e.$$);
      }
    } catch (e) {
      throw i.length = 0, u = 0, e;
    }
    for (a(null), i.length = 0, u = 0; S.length; )
      S.pop()();
    for (let e = 0; e < l.length; e += 1) {
      const n = l[e];
      g.has(n) || (g.add(n), n());
    }
    l.length = 0;
  } while (i.length);
  for (; C.length; )
    C.pop()();
  p = !1, g.clear(), a(t);
}
function z(t) {
  if (t.fragment !== null) {
    t.update(), _(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(m);
  }
}
function D(t) {
  const e = [], n = [];
  l.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), l = e;
}
const F = /* @__PURE__ */ new Set();
function G(t, e) {
  t && t.i && (F.delete(t), t.i(e));
}
function H(t, e, n) {
  const { fragment: r, after_update: f } = t.$$;
  r && r.m(e, n), m(() => {
    const d = t.$$.on_mount.map(O).filter(j);
    t.$$.on_destroy ? t.$$.on_destroy.push(...d) : _(d), t.$$.on_mount = [];
  }), f.forEach(m);
}
function J(t, e) {
  const n = t.$$;
  n.fragment !== null && (D(n.after_update), _(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function K(t, e) {
  t.$$.dirty[0] === -1 && (i.push(t), q(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Q(t, e, n, r, f, d, b = null, I = [-1]) {
  const h = y;
  a(t);
  const o = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: d,
    update: s,
    not_equal: f,
    bound: E(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (h ? h.$$.context : [])),
    // everything else
    callbacks: E(),
    dirty: I,
    skip_bound: !1,
    root: e.target || h.$$.root
  };
  b && b(o.root);
  let x = !1;
  if (o.ctx = n ? n(t, e.props || {}, (c, w, ...k) => {
    const v = k.length ? k[0] : w;
    return o.ctx && f(o.ctx[c], o.ctx[c] = v) && (!o.skip_bound && o.bound[c] && o.bound[c](v), x && K(t, c)), w;
  }) : [], o.update(), x = !0, _(o.before_update), o.fragment = r ? r(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = U(e.target);
      o.fragment && o.fragment.l(c), c.forEach(N);
    } else
      o.fragment && o.fragment.c();
    e.intro && G(t.$$.fragment), H(t, e.target, e.anchor), B();
  }
  a(h);
}
class T {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    J(this, 1), this.$destroy = s;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!j(n))
      return s;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const f = r.indexOf(n);
      f !== -1 && r.splice(f, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !L(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const X = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(X);
function Y(t) {
  let e;
  return {
    c() {
      e = R("h1"), e.textContent = "Svelte Widget Component";
    },
    m(n, r) {
      M(n, e, r);
    },
    p: s,
    i: s,
    o: s,
    d(n) {
      n && N(e);
    }
  };
}
class tt extends T {
  constructor(e) {
    super(), Q(this, e, null, Y, A, {});
  }
}
export {
  tt as Widget
};
