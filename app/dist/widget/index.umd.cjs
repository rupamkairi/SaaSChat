(function (i, r) {
	typeof exports == 'object' && typeof module < 'u'
		? r(exports)
		: typeof define == 'function' && define.amd
		? define(['exports'], r)
		: ((i = typeof globalThis < 'u' ? globalThis : i || self), r((i.Widget = {})));
})(this, function (i) {
	'use strict';
	var Z = Object.defineProperty;
	var tt = (i, r, u) =>
		r in i ? Z(i, r, { enumerable: !0, configurable: !0, writable: !0, value: u }) : (i[r] = u);
	var x = (i, r, u) => (tt(i, typeof r != 'symbol' ? r + '' : r, u), u);
	function r() {}
	function u(t) {
		return t();
	}
	function w() {
		return Object.create(null);
	}
	function _(t) {
		t.forEach(u);
	}
	function k(t) {
		return typeof t == 'function';
	}
	function T(t, e) {
		return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function';
	}
	function B(t) {
		return Object.keys(t).length === 0;
	}
	function I(t, e, n) {
		t.insertBefore(e, n || null);
	}
	function v(t) {
		t.parentNode && t.parentNode.removeChild(t);
	}
	function M(t) {
		return document.createElement(t);
	}
	function A(t) {
		return Array.from(t.childNodes);
	}
	let $;
	function h(t) {
		$ = t;
	}
	const l = [],
		E = [];
	let d = [];
	const S = [],
		L = Promise.resolve();
	let m = !1;
	function R() {
		m || ((m = !0), L.then(j));
	}
	function y(t) {
		d.push(t);
	}
	const b = new Set();
	let a = 0;
	function j() {
		if (a !== 0) return;
		const t = $;
		do {
			try {
				for (; a < l.length; ) {
					const e = l[a];
					a++, h(e), U(e.$$);
				}
			} catch (e) {
				throw ((l.length = 0), (a = 0), e);
			}
			for (h(null), l.length = 0, a = 0; E.length; ) E.pop()();
			for (let e = 0; e < d.length; e += 1) {
				const n = d[e];
				b.has(n) || (b.add(n), n());
			}
			d.length = 0;
		} while (l.length);
		for (; S.length; ) S.pop()();
		(m = !1), b.clear(), h(t);
	}
	function U(t) {
		if (t.fragment !== null) {
			t.update(), _(t.before_update);
			const e = t.dirty;
			(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(y);
		}
	}
	function V(t) {
		const e = [],
			n = [];
		d.forEach((o) => (t.indexOf(o) === -1 ? e.push(o) : n.push(o))), n.forEach((o) => o()), (d = e);
	}
	const q = new Set();
	function z(t, e) {
		t && t.i && (q.delete(t), t.i(e));
	}
	function D(t, e, n) {
		const { fragment: o, after_update: s } = t.$$;
		o && o.m(e, n),
			y(() => {
				const g = t.$$.on_mount.map(u).filter(k);
				t.$$.on_destroy ? t.$$.on_destroy.push(...g) : _(g), (t.$$.on_mount = []);
			}),
			s.forEach(y);
	}
	function F(t, e) {
		const n = t.$$;
		n.fragment !== null &&
			(V(n.after_update),
			_(n.on_destroy),
			n.fragment && n.fragment.d(e),
			(n.on_destroy = n.fragment = null),
			(n.ctx = []));
	}
	function G(t, e) {
		t.$$.dirty[0] === -1 && (l.push(t), R(), t.$$.dirty.fill(0)),
			(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
	}
	function H(t, e, n, o, s, g, O = null, Y = [-1]) {
		const p = $;
		h(t);
		const f = (t.$$ = {
			fragment: null,
			ctx: [],
			props: g,
			update: r,
			not_equal: s,
			bound: w(),
			on_mount: [],
			on_destroy: [],
			on_disconnect: [],
			before_update: [],
			after_update: [],
			context: new Map(e.context || (p ? p.$$.context : [])),
			callbacks: w(),
			dirty: Y,
			skip_bound: !1,
			root: e.target || p.$$.root
		});
		O && O(f.root);
		let C = !1;
		if (
			((f.ctx = n
				? n(t, e.props || {}, (c, N, ...W) => {
						const P = W.length ? W[0] : N;
						return (
							f.ctx &&
								s(f.ctx[c], (f.ctx[c] = P)) &&
								(!f.skip_bound && f.bound[c] && f.bound[c](P), C && G(t, c)),
							N
						);
				  })
				: []),
			f.update(),
			(C = !0),
			_(f.before_update),
			(f.fragment = o ? o(f.ctx) : !1),
			e.target)
		) {
			if (e.hydrate) {
				const c = A(e.target);
				f.fragment && f.fragment.l(c), c.forEach(v);
			} else f.fragment && f.fragment.c();
			e.intro && z(t.$$.fragment), D(t, e.target, e.anchor), j();
		}
		h(p);
	}
	class J {
		constructor() {
			x(this, '$$');
			x(this, '$$set');
		}
		$destroy() {
			F(this, 1), (this.$destroy = r);
		}
		$on(e, n) {
			if (!k(n)) return r;
			const o = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
			return (
				o.push(n),
				() => {
					const s = o.indexOf(n);
					s !== -1 && o.splice(s, 1);
				}
			);
		}
		$set(e) {
			this.$$set && !B(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
		}
	}
	const K = '4';
	typeof window < 'u' && (window.__svelte || (window.__svelte = { v: new Set() })).v.add(K);
	function Q(t) {
		let e;
		return {
			c() {
				(e = M('h1')), (e.textContent = 'Svelte Widget Component');
			},
			m(n, o) {
				I(n, e, o);
			},
			p: r,
			i: r,
			o: r,
			d(n) {
				n && v(e);
			}
		};
	}
	class X extends J {
		constructor(e) {
			super(), H(this, e, null, Q, T, {});
		}
	}
	(i.Widget = X), Object.defineProperty(i, Symbol.toStringTag, { value: 'Module' });
});
