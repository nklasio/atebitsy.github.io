!function(e) {
  var t = {};
  function n(r) {
      if (t[r])
          return t[r].exports;
      var o = t[r] = {
          i: r,
          l: !1,
          exports: {}
      };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }
  n.m = e, n.c = t, n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: r
      })
  }, n.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }), Object.defineProperty(e, "__esModule", {
          value: !0
      })
  }, n.t = function(e, t) {
      if (1 & t && (e = n(e)), 8 & t)
          return e;
      if (4 & t && "object" == typeof e && e && e.__esModule)
          return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
          enumerable: !0,
          value: e
      }), 2 & t && "string" != typeof e)
          for (var o in e)
              n.d(r, o, function(t) {
                  return e[t]
              }.bind(null, o));
      return r
  }, n.n = function(e) {
      var t = e && e.__esModule ? function() {
          return e.default
      } : function() {
          return e
      };
      return n.d(t, "a", t), t
  }, n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 9)
}([function(e, t, n) {
  "use strict";
  n.r(t), n.d(t, "render", (function() {
      return M
  })), n.d(t, "hydrate", (function() {
      return R
  })), n.d(t, "createElement", (function() {
      return g
  })), n.d(t, "h", (function() {
      return g
  })), n.d(t, "Fragment", (function() {
      return y
  })), n.d(t, "createRef", (function() {
      return v
  })), n.d(t, "isValidElement", (function() {
      return o
  })), n.d(t, "Component", (function() {
      return _
  })), n.d(t, "cloneElement", (function() {
      return q
  })), n.d(t, "createContext", (function() {
      return U
  })), n.d(t, "toChildArray", (function() {
      return T
  })), n.d(t, "__u", (function() {
      return N
  })), n.d(t, "options", (function() {
      return r
  }));
  var r,
      o,
      i,
      s,
      a,
      l,
      c,
      u = {},
      d = [],
      p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function h(e, t) {
      for (var n in t)
          e[n] = t[n];
      return e
  }
  function f(e) {
      var t = e.parentNode;
      t && t.removeChild(e)
  }
  function g(e, t, n) {
      var r,
          o,
          i,
          s = arguments,
          a = {};
      for (i in t)
          "key" == i ? r = t[i] : "ref" == i ? o = t[i] : a[i] = t[i];
      if (arguments.length > 3)
          for (n = [n], i = 3; i < arguments.length; i++)
              n.push(s[i]);
      if (null != n && (a.children = n), "function" == typeof e && null != e.defaultProps)
          for (i in e.defaultProps)
              void 0 === a[i] && (a[i] = e.defaultProps[i]);
      return m(e, a, r, o, null)
  }
  function m(e, t, n, o, i) {
      var s = {
          type: e,
          props: t,
          key: n,
          ref: o,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          constructor: void 0,
          __v: i
      };
      return null == i && (s.__v = s), null != r.vnode && r.vnode(s), s
  }
  function v() {
      return {
          current: null
      }
  }
  function y(e) {
      return e.children
  }
  function _(e, t) {
      this.props = e, this.context = t
  }
  function b(e, t) {
      if (null == t)
          return e.__ ? b(e.__, e.__.__k.indexOf(e) + 1) : null;
      for (var n; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e)
              return n.__e;
      return "function" == typeof e.type ? b(e) : null
  }
  function w(e) {
      var t,
          n;
      if (null != (e = e.__) && null != e.__c) {
          for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
              if (null != (n = e.__k[t]) && null != n.__e) {
                  e.__e = e.__c.base = n.__e;
                  break
              }
          return w(e)
      }
  }
  function E(e) {
      (!e.__d && (e.__d = !0) && i.push(e) && !C.__r++ || a !== r.debounceRendering) && ((a = r.debounceRendering) || s)(C)
  }
  function C() {
      for (var e; C.__r = i.length;)
          e = i.sort((function(e, t) {
              return e.__v.__b - t.__v.__b
          })), i = [], e.some((function(e) {
              var t,
                  n,
                  r,
                  o,
                  i,
                  s,
                  a;
              e.__d && (s = (i = (t = e).__v).__e, (a = t.__P) && (n = [], (r = h({}, i)).__v = r, o = $(a, i, r, t.__n, void 0 !== a.ownerSVGElement, null, n, null == s ? b(i) : s), P(n, i), o != s && w(i)))
          }))
  }
  function x(e, t, n, r, o, i, s, a, l, c) {
      var p,
          h,
          g,
          v,
          _,
          w,
          E,
          C = r && r.__k || d,
          x = C.length;
      for (l == u && (l = null != s ? s[0] : x ? b(r, 0) : null), n.__k = [], p = 0; p < t.length; p++)
          if (null != (v = n.__k[p] = null == (v = t[p]) || "boolean" == typeof v ? null : "string" == typeof v || "number" == typeof v ? m(null, v, null, null, v) : Array.isArray(v) ? m(y, {
              children: v
          }, null, null, null) : null != v.__e || null != v.__c ? m(v.type, v.props, v.key, null, v.__v) : v)) {
              if (v.__ = n, v.__b = n.__b + 1, null === (g = C[p]) || g && v.key == g.key && v.type === g.type)
                  C[p] = void 0;
              else
                  for (h = 0; h < x; h++) {
                      if ((g = C[h]) && v.key == g.key && v.type === g.type) {
                          C[h] = void 0;
                          break
                      }
                      g = null
                  }
              _ = $(e, v, g = g || u, o, i, s, a, l, c), (h = v.ref) && g.ref != h && (E || (E = []), g.ref && E.push(g.ref, null, v), E.push(h, v.__c || _, v)), null != _ ? (null == w && (w = _), l = A(e, v, g, C, s, _, l), c || "option" != n.type ? "function" == typeof n.type && (n.__d = l) : e.value = "") : l && g.__e == l && l.parentNode != e && (l = b(g))
          }
      if (n.__e = w, null != s && "function" != typeof n.type)
          for (p = s.length; p--;)
              null != s[p] && f(s[p]);
      for (p = x; p--;)
          null != C[p] && N(C[p], C[p]);
      if (E)
          for (p = 0; p < E.length; p++)
              L(E[p], E[++p], E[++p])
  }
  function T(e, t) {
      return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) {
          T(e, t)
      })) : t.push(e)), t
  }
  function A(e, t, n, r, o, i, s) {
      var a,
          l,
          c;
      if (void 0 !== t.__d)
          a = t.__d, t.__d = void 0;
      else if (o == n || i != s || null == i.parentNode)
          e:
          if (null == s || s.parentNode !== e)
              e.appendChild(i), a = null;
          else {
              for (l = s, c = 0; (l = l.nextSibling) && c < r.length; c += 2)
                  if (l == i)
                      break e;
              e.insertBefore(i, s), a = s
          }
      return void 0 !== a ? a : i.nextSibling
  }
  function S(e, t, n) {
      "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || p.test(t) ? n : n + "px"
  }
  function O(e, t, n, r, o) {
      var i,
          s;
      if (o && "className" == t && (t = "class"), "style" === t)
          if ("string" == typeof n)
              e.style = n;
          else {
              if ("string" == typeof r && (e.style = r = ""), r)
                  for (t in r)
                      n && t in n || S(e.style, t, "");
              if (n)
                  for (t in n)
                      r && n[t] === r[t] || S(e.style, t, n[t])
          }
      else
          "o" === t[0] && "n" === t[1] ? (i = t !== (t = t.replace(/Capture$/, "")), (s = t.toLowerCase()) in e && (t = s), t = t.slice(2), e.l || (e.l = {}), e.l[t] = n, n ? r || e.addEventListener(t, k, i) : e.removeEventListener(t, k, i)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && "download" !== t && "href" !== t && !o && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, n))
  }
  function k(e) {
      this.l[e.type](r.event ? r.event(e) : e)
  }
  function D(e, t, n) {
      var r,
          o;
      for (r = 0; r < e.__k.length; r++)
          (o = e.__k[r]) && (o.__ = e, o.__e && ("function" == typeof o.type && o.__k.length > 1 && D(o, t, n), t = A(n, o, o, e.__k, null, o.__e, t), "function" == typeof e.type && (e.__d = t)))
  }
  function $(e, t, n, o, i, s, a, l, c) {
      var u,
          d,
          p,
          f,
          g,
          m,
          v,
          b,
          w,
          E,
          C,
          T = t.type;
      if (void 0 !== t.constructor)
          return null;
      (u = r.__b) && u(t);
      try {
          e:
          if ("function" == typeof T) {
              if (b = t.props, w = (u = T.contextType) && o[u.__c], E = u ? w ? w.props.value : u.__ : o, n.__c ? v = (d = t.__c = n.__c).__ = d.__E : ("prototype" in T && T.prototype.render ? t.__c = d = new T(b, E) : (t.__c = d = new _(b, E), d.constructor = T, d.render = I), w && w.sub(d), d.props = b, d.state || (d.state = {}), d.context = E, d.__n = o, p = d.__d = !0, d.__h = []), null == d.__s && (d.__s = d.state), null != T.getDerivedStateFromProps && (d.__s == d.state && (d.__s = h({}, d.__s)), h(d.__s, T.getDerivedStateFromProps(b, d.__s))), f = d.props, g = d.state, p)
                  null == T.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);
              else {
                  if (null == T.getDerivedStateFromProps && b !== f && null != d.componentWillReceiveProps && d.componentWillReceiveProps(b, E), !d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(b, d.__s, E) || t.__v === n.__v) {
                      d.props = b, d.state = d.__s, t.__v !== n.__v && (d.__d = !1), d.__v = t, t.__e = n.__e, t.__k = n.__k, d.__h.length && a.push(d), D(t, l, e);
                      break e
                  }
                  null != d.componentWillUpdate && d.componentWillUpdate(b, d.__s, E), null != d.componentDidUpdate && d.__h.push((function() {
                      d.componentDidUpdate(f, g, m)
                  }))
              }
              d.context = E, d.props = b, d.state = d.__s, (u = r.__r) && u(t), d.__d = !1, d.__v = t, d.__P = e, u = d.render(d.props, d.state, d.context), d.state = d.__s, null != d.getChildContext && (o = h(h({}, o), d.getChildContext())), p || null == d.getSnapshotBeforeUpdate || (m = d.getSnapshotBeforeUpdate(f, g)), C = null != u && u.type == y && null == u.key ? u.props.children : u, x(e, Array.isArray(C) ? C : [C], t, n, o, i, s, a, l, c), d.base = t.__e, d.__h.length && a.push(d), v && (d.__E = d.__ = null), d.__e = !1
          } else
              null == s && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = j(n.__e, t, n, o, i, s, a, c);
          (u = r.diffed) && u(t)
      } catch (e) {
          t.__v = null, r.__e(e, t, n)
      }
      return t.__e
  }
  function P(e, t) {
      r.__c && r.__c(t, e), e.some((function(t) {
          try {
              e = t.__h, t.__h = [], e.some((function(e) {
                  e.call(t)
              }))
          } catch (e) {
              r.__e(e, t.__v)
          }
      }))
  }
  function j(e, t, n, r, o, i, s, a) {
      var l,
          c,
          p,
          h,
          f,
          g = n.props,
          m = t.props;
      if (o = "svg" === t.type || o, null != i)
          for (l = 0; l < i.length; l++)
              if (null != (c = i[l]) && ((null === t.type ? 3 === c.nodeType : c.localName === t.type) || e == c)) {
                  e = c, i[l] = null;
                  break
              }
      if (null == e) {
          if (null === t.type)
              return document.createTextNode(m);
          e = o ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, m.is && {
              is: m.is
          }), i = null, a = !1
      }
      if (null === t.type)
          g !== m && e.data !== m && (e.data = m);
      else {
          if (null != i && (i = d.slice.call(e.childNodes)), p = (g = n.props || u).dangerouslySetInnerHTML, h = m.dangerouslySetInnerHTML, !a) {
              if (null != i)
                  for (g = {}, f = 0; f < e.attributes.length; f++)
                      g[e.attributes[f].name] = e.attributes[f].value;
              (h || p) && (h && p && h.__html == p.__html || (e.innerHTML = h && h.__html || ""))
          }
          (function(e, t, n, r, o) {
              var i;
              for (i in n)
                  "children" === i || "key" === i || i in t || O(e, i, null, n[i], r);
              for (i in t)
                  o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || O(e, i, t[i], n[i], r)
          })(e, m, g, o, a), h ? t.__k = [] : (l = t.props.children, x(e, Array.isArray(l) ? l : [l], t, n, r, "foreignObject" !== t.type && o, i, s, u, a)), a || ("value" in m && void 0 !== (l = m.value) && l !== e.value && O(e, "value", l, g.value, !1), "checked" in m && void 0 !== (l = m.checked) && l !== e.checked && O(e, "checked", l, g.checked, !1))
      }
      return e
  }
  function L(e, t, n) {
      try {
          "function" == typeof e ? e(t) : e.current = t
      } catch (e) {
          r.__e(e, n)
      }
  }
  function N(e, t, n) {
      var o,
          i,
          s;
      if (r.unmount && r.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || L(o, null, t)), n || "function" == typeof e.type || (n = null != (i = e.__e)), e.__e = e.__d = void 0, null != (o = e.__c)) {
          if (o.componentWillUnmount)
              try {
                  o.componentWillUnmount()
              } catch (e) {
                  r.__e(e, t)
              }
          o.base = o.__P = null
      }
      if (o = e.__k)
          for (s = 0; s < o.length; s++)
              o[s] && N(o[s], t, n);
      null != i && f(i)
  }
  function I(e, t, n) {
      return this.constructor(e, n)
  }
  function M(e, t, n) {
      var o,
          i,
          s;
      r.__ && r.__(e, t), i = (o = n === l) ? null : n && n.__k || t.__k, e = g(y, null, [e]), s = [], $(t, (o ? t : n || t).__k = e, i || u, u, void 0 !== t.ownerSVGElement, n && !o ? [n] : i ? null : t.childNodes.length ? d.slice.call(t.childNodes) : null, s, n || u, o), P(s, e)
  }
  function R(e, t) {
      M(e, t, l)
  }
  function q(e, t, n) {
      var r,
          o,
          i,
          s = arguments,
          a = h({}, e.props);
      for (i in t)
          "key" == i ? r = t[i] : "ref" == i ? o = t[i] : a[i] = t[i];
      if (arguments.length > 3)
          for (n = [n], i = 3; i < arguments.length; i++)
              n.push(s[i]);
      return null != n && (a.children = n), m(e.type, a, r || e.key, o || e.ref, null)
  }
  function U(e, t) {
      var n = {
          __c: t = "__cC" + c++,
          __: e,
          Consumer: function(e, t) {
              return e.children(t)
          },
          Provider: function(e, n, r) {
              return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function() {
                  return r
              }, this.shouldComponentUpdate = function(e) {
                  this.props.value !== e.value && n.some(E)
              }, this.sub = function(e) {
                  n.push(e);
                  var t = e.componentWillUnmount;
                  e.componentWillUnmount = function() {
                      n.splice(n.indexOf(e), 1), t && t.call(e)
                  }
              }), e.children
          }
      };
      return n.Provider.__ = n.Consumer.contextType = n
  }
  r = {
      __e: function(e, t) {
          for (var n, r; t = t.__;)
              if ((n = t.__c) && !n.__)
                  try {
                      if (n.constructor && null != n.constructor.getDerivedStateFromError && (r = !0, n.setState(n.constructor.getDerivedStateFromError(e))), null != n.componentDidCatch && (r = !0, n.componentDidCatch(e)), r)
                          return E(n.__E = n)
                  } catch (t) {
                      e = t
                  }
          throw e
      }
  }, o = function(e) {
      return null != e && void 0 === e.constructor
  }, _.prototype.setState = function(e, t) {
      var n;
      n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof e && (e = e(h({}, n), this.props)), e && h(n, e), null != e && this.__v && (t && this.__h.push(t), E(this))
  }, _.prototype.forceUpdate = function(e) {
      this.__v && (this.__e = !0, e && this.__h.push(e), E(this))
  }, _.prototype.render = y, i = [], s = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, C.__r = 0, l = u, c = 0
}, function(e, t) {
  e.exports = jQuery
}, function(e, t, n) {
  /*!
* Bootstrap util.js v4.5.2 (https://getbootstrap.com/)
* Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
  e.exports = function(e) {
      "use strict";
      function t(t) {
          var r = this,
              o = !1;
          return e(this).one(n.TRANSITION_END, (function() {
              o = !0
          })), setTimeout((function() {
              o || n.triggerTransitionEnd(r)
          }), t), this
      }
      e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
      var n = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function(e) {
              do {
                  e += ~~(1e6 * Math.random())
              } while (document.getElementById(e));
              return e
          },
          getSelectorFromElement: function(e) {
              var t = e.getAttribute("data-target");
              if (!t || "#" === t) {
                  var n = e.getAttribute("href");
                  t = n && "#" !== n ? n.trim() : ""
              }
              try {
                  return document.querySelector(t) ? t : null
              } catch (e) {
                  return null
              }
          },
          getTransitionDurationFromElement: function(t) {
              if (!t)
                  return 0;
              var n = e(t).css("transition-duration"),
                  r = e(t).css("transition-delay"),
                  o = parseFloat(n),
                  i = parseFloat(r);
              return o || i ? (n = n.split(",")[0], r = r.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(r))) : 0
          },
          reflow: function(e) {
              return e.offsetHeight
          },
          triggerTransitionEnd: function(t) {
              e(t).trigger("transitionend")
          },
          supportsTransitionEnd: function() {
              return Boolean("transitionend")
          },
          isElement: function(e) {
              return (e[0] || e).nodeType
          },
          typeCheckConfig: function(e, t, r) {
              for (var o in r)
                  if (Object.prototype.hasOwnProperty.call(r, o)) {
                      var i = r[o],
                          s = t[o],
                          a = s && n.isElement(s) ? "element" : null == (l = s) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                      if (!new RegExp(i).test(a))
                          throw new Error(e.toUpperCase() + ': Option "' + o + '" provided type "' + a + '" but expected type "' + i + '".')
                  }
              var l
          },
          findShadowRoot: function(e) {
              if (!document.documentElement.attachShadow)
                  return null;
              if ("function" == typeof e.getRootNode) {
                  var t = e.getRootNode();
                  return t instanceof ShadowRoot ? t : null
              }
              return e instanceof ShadowRoot ? e : e.parentNode ? n.findShadowRoot(e.parentNode) : null
          },
          jQueryDetection: function() {
              if (void 0 === e)
                  throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
              var t = e.fn.jquery.split(" ")[0].split(".");
              if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4)
                  throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
          }
      };
      return n.jQueryDetection(), e.fn.emulateTransitionEnd = t, e.event.special[n.TRANSITION_END] = {
          bindType: "transitionend",
          delegateType: "transitionend",
          handle: function(t) {
              if (e(t.target).is(this))
                  return t.handleObj.handler.apply(this, arguments)
          }
      }, n
  }(n(1))
}, function(e, t, n) {
  "use strict";
  var r,
      o = this && this.__extends || (r = function(e, t) {
          return (r = Object.setPrototypeOf || {
              __proto__: []
          } instanceof Array && function(e, t) {
              e.__proto__ = t
          } || function(e, t) {
              for (var n in t)
                  t.hasOwnProperty(n) && (e[n] = t[n])
          })(e, t)
      }, function(e, t) {
          function n() {
              this.constructor = e
          }
          r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      });
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  var i = n(0),
      s = function(e) {
          function t() {
              return null !== e && e.apply(this, arguments) || this
          }
          return o(t, e), t.show = function(e) {
              this.hide(!0);
              var t = document.createElement("div");
              document.body.appendChild(t), i.render(e, t), document.documentElement.classList.add("has-dialog")
          }, t.hide = function(e) {
              var n = t.currentDialog;
              if (null !== n) {
                  t.currentDialog = t.incomingDialog, t.incomingDialog = null;
                  var r = function() {
                      (null == n ? void 0 : n.parentNode).remove(), document.documentElement.classList.remove("has-dialog")
                  };
                  e ? (n.classList.add("hide"), setTimeout(r, 500)) : r()
              }
          }, t.prototype.render = function() {
              return i.h("div", {
                  ref: function(e) {
                      null === t.currentDialog ? t.currentDialog = e : t.incomingDialog = e
                  }
              }, i.h("div", {
                  id: this.props.id,
                  class: "modal show",
                  role: "dialog",
                  style: "display: block;"
              }, i.h("div", {
                  class: "modal-dialog"
              }, i.h("div", {
                  class: "modal-content"
              }, !0 === this.props.closeButton && i.h("button", {
                  type: "button",
                  class: "close",
                  onClick: function() {
                      return t.hide(!0)
                  }
              }, i.h("span", {
                  class: "sr-only"
              }, "Close")), this.props.children))), i.h("div", {
                  class: "modal-backdrop show"
              }))
          }, t.currentDialog = null, t.incomingDialog = null, t
      }(i.Component);
  t.default = s
}, function(e, t) {
  var n = document.documentElement.classList;
  /iPhone|iPad|iPod/.test(navigator.platform) ? n.add("os-ios") : /^Mac/.test(navigator.platform) && n.add("os-macos"), /Zebra/.test(navigator.userAgent) ? n.add("app-zebra") : /Cydia/.test(navigator.userAgent) && n.add("app-cydia"), "devicePixelRatio" in window && devicePixelRatio >= 2 && (n.add("has-subpixel"), devicePixelRatio >= 3 && n.add("has-subpixel-3x"))
}, function(e, t, n) {
  "use strict";
  n.r(t), function(e) {
      /**!
* @fileOverview Kickass library to create and place poppers near their reference elements.
* @version 1.16.1
* @license
* Copyright (c) 2016 Federico Zivolo and contributors
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
      var n = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
          r = function() {
              for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                  if (n && navigator.userAgent.indexOf(e[t]) >= 0)
                      return 1;
              return 0
          }();
      var o = n && window.Promise ? function(e) {
          var t = !1;
          return function() {
              t || (t = !0, window.Promise.resolve().then((function() {
                  t = !1, e()
              })))
          }
      } : function(e) {
          var t = !1;
          return function() {
              t || (t = !0, setTimeout((function() {
                  t = !1, e()
              }), r))
          }
      };
      function i(e) {
          return e && "[object Function]" === {}.toString.call(e)
      }
      function s(e, t) {
          if (1 !== e.nodeType)
              return [];
          var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
          return t ? n[t] : n
      }
      function a(e) {
          return "HTML" === e.nodeName ? e : e.parentNode || e.host
      }
      function l(e) {
          if (!e)
              return document.body;
          switch (e.nodeName) {
          case "HTML":
          case "BODY":
              return e.ownerDocument.body;
          case "#document":
              return e.body
          }
          var t = s(e),
              n = t.overflow,
              r = t.overflowX,
              o = t.overflowY;
          return /(auto|scroll|overlay)/.test(n + o + r) ? e : l(a(e))
      }
      function c(e) {
          return e && e.referenceNode ? e.referenceNode : e
      }
      var u = n && !(!window.MSInputMethodContext || !document.documentMode),
          d = n && /MSIE 10/.test(navigator.userAgent);
      function p(e) {
          return 11 === e ? u : 10 === e ? d : u || d
      }
      function h(e) {
          if (!e)
              return document.documentElement;
          for (var t = p(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;)
              n = (e = e.nextElementSibling).offsetParent;
          var r = n && n.nodeName;
          return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? h(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
      }
      function f(e) {
          return null !== e.parentNode ? f(e.parentNode) : e
      }
      function g(e, t) {
          if (!(e && e.nodeType && t && t.nodeType))
              return document.documentElement;
          var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
              r = n ? e : t,
              o = n ? t : e,
              i = document.createRange();
          i.setStart(r, 0), i.setEnd(o, 0);
          var s,
              a,
              l = i.commonAncestorContainer;
          if (e !== l && t !== l || r.contains(o))
              return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && h(s.firstElementChild) !== s ? h(l) : l;
          var c = f(e);
          return c.host ? g(c.host, t) : g(e, f(t).host)
      }
      function m(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
              n = "top" === t ? "scrollTop" : "scrollLeft",
              r = e.nodeName;
          if ("BODY" === r || "HTML" === r) {
              var o = e.ownerDocument.documentElement,
                  i = e.ownerDocument.scrollingElement || o;
              return i[n]
          }
          return e[n]
      }
      function v(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = m(t, "top"),
              o = m(t, "left"),
              i = n ? -1 : 1;
          return e.top += r * i, e.bottom += r * i, e.left += o * i, e.right += o * i, e
      }
      function y(e, t) {
          var n = "x" === t ? "Left" : "Top",
              r = "Left" === n ? "Right" : "Bottom";
          return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + r + "Width"])
      }
      function _(e, t, n, r) {
          return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], p(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
      }
      function b(e) {
          var t = e.body,
              n = e.documentElement,
              r = p(10) && getComputedStyle(n);
          return {
              height: _("Height", t, n, r),
              width: _("Width", t, n, r)
          }
      }
      var w = function(e, t) {
              if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function")
          },
          E = function() {
              function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                  }
              }
              return function(t, n, r) {
                  return n && e(t.prototype, n), r && e(t, r), t
              }
          }(),
          C = function(e, t, n) {
              return t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = n, e
          },
          x = Object.assign || function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          };
      function T(e) {
          return x({}, e, {
              right: e.left + e.width,
              bottom: e.top + e.height
          })
      }
      function A(e) {
          var t = {};
          try {
              if (p(10)) {
                  t = e.getBoundingClientRect();
                  var n = m(e, "top"),
                      r = m(e, "left");
                  t.top += n, t.left += r, t.bottom += n, t.right += r
              } else
                  t = e.getBoundingClientRect()
          } catch (e) {}
          var o = {
                  left: t.left,
                  top: t.top,
                  width: t.right - t.left,
                  height: t.bottom - t.top
              },
              i = "HTML" === e.nodeName ? b(e.ownerDocument) : {},
              a = i.width || e.clientWidth || o.width,
              l = i.height || e.clientHeight || o.height,
              c = e.offsetWidth - a,
              u = e.offsetHeight - l;
          if (c || u) {
              var d = s(e);
              c -= y(d, "x"), u -= y(d, "y"), o.width -= c, o.height -= u
          }
          return T(o)
      }
      function S(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = p(10),
              o = "HTML" === t.nodeName,
              i = A(e),
              a = A(t),
              c = l(e),
              u = s(t),
              d = parseFloat(u.borderTopWidth),
              h = parseFloat(u.borderLeftWidth);
          n && o && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
          var f = T({
              top: i.top - a.top - d,
              left: i.left - a.left - h,
              width: i.width,
              height: i.height
          });
          if (f.marginTop = 0, f.marginLeft = 0, !r && o) {
              var g = parseFloat(u.marginTop),
                  m = parseFloat(u.marginLeft);
              f.top -= d - g, f.bottom -= d - g, f.left -= h - m, f.right -= h - m, f.marginTop = g, f.marginLeft = m
          }
          return (r && !n ? t.contains(c) : t === c && "BODY" !== c.nodeName) && (f = v(f, t)), f
      }
      function O(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = e.ownerDocument.documentElement,
              r = S(e, n),
              o = Math.max(n.clientWidth, window.innerWidth || 0),
              i = Math.max(n.clientHeight, window.innerHeight || 0),
              s = t ? 0 : m(n),
              a = t ? 0 : m(n, "left"),
              l = {
                  top: s - r.top + r.marginTop,
                  left: a - r.left + r.marginLeft,
                  width: o,
                  height: i
              };
          return T(l)
      }
      function k(e) {
          var t = e.nodeName;
          if ("BODY" === t || "HTML" === t)
              return !1;
          if ("fixed" === s(e, "position"))
              return !0;
          var n = a(e);
          return !!n && k(n)
      }
      function D(e) {
          if (!e || !e.parentElement || p())
              return document.documentElement;
          for (var t = e.parentElement; t && "none" === s(t, "transform");)
              t = t.parentElement;
          return t || document.documentElement
      }
      function $(e, t, n, r) {
          var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              i = {
                  top: 0,
                  left: 0
              },
              s = o ? D(e) : g(e, c(t));
          if ("viewport" === r)
              i = O(s, o);
          else {
              var u = void 0;
              "scrollParent" === r ? "BODY" === (u = l(a(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === r ? e.ownerDocument.documentElement : r;
              var d = S(u, s, o);
              if ("HTML" !== u.nodeName || k(s))
                  i = d;
              else {
                  var p = b(e.ownerDocument),
                      h = p.height,
                      f = p.width;
                  i.top += d.top - d.marginTop, i.bottom = h + d.top, i.left += d.left - d.marginLeft, i.right = f + d.left
              }
          }
          var m = "number" == typeof (n = n || 0);
          return i.left += m ? n : n.left || 0, i.top += m ? n : n.top || 0, i.right -= m ? n : n.right || 0, i.bottom -= m ? n : n.bottom || 0, i
      }
      function P(e) {
          return e.width * e.height
      }
      function j(e, t, n, r, o) {
          var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (-1 === e.indexOf("auto"))
              return e;
          var s = $(n, r, i, o),
              a = {
                  top: {
                      width: s.width,
                      height: t.top - s.top
                  },
                  right: {
                      width: s.right - t.right,
                      height: s.height
                  },
                  bottom: {
                      width: s.width,
                      height: s.bottom - t.bottom
                  },
                  left: {
                      width: t.left - s.left,
                      height: s.height
                  }
              },
              l = Object.keys(a).map((function(e) {
                  return x({
                      key: e
                  }, a[e], {
                      area: P(a[e])
                  })
              })).sort((function(e, t) {
                  return t.area - e.area
              })),
              c = l.filter((function(e) {
                  var t = e.width,
                      r = e.height;
                  return t >= n.clientWidth && r >= n.clientHeight
              })),
              u = c.length > 0 ? c[0].key : l[0].key,
              d = e.split("-")[1];
          return u + (d ? "-" + d : "")
      }
      function L(e, t, n) {
          var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              o = r ? D(t) : g(t, c(n));
          return S(n, o, r)
      }
      function N(e) {
          var t = e.ownerDocument.defaultView.getComputedStyle(e),
              n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
              r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
          return {
              width: e.offsetWidth + r,
              height: e.offsetHeight + n
          }
      }
      function I(e) {
          var t = {
              left: "right",
              right: "left",
              bottom: "top",
              top: "bottom"
          };
          return e.replace(/left|right|bottom|top/g, (function(e) {
              return t[e]
          }))
      }
      function M(e, t, n) {
          n = n.split("-")[0];
          var r = N(e),
              o = {
                  width: r.width,
                  height: r.height
              },
              i = -1 !== ["right", "left"].indexOf(n),
              s = i ? "top" : "left",
              a = i ? "left" : "top",
              l = i ? "height" : "width",
              c = i ? "width" : "height";
          return o[s] = t[s] + t[l] / 2 - r[l] / 2, o[a] = n === a ? t[a] - r[c] : t[I(a)], o
      }
      function R(e, t) {
          return Array.prototype.find ? e.find(t) : e.filter(t)[0]
      }
      function q(e, t, n) {
          return (void 0 === n ? e : e.slice(0, function(e, t, n) {
              if (Array.prototype.findIndex)
                  return e.findIndex((function(e) {
                      return e[t] === n
                  }));
              var r = R(e, (function(e) {
                  return e[t] === n
              }));
              return e.indexOf(r)
          }(e, "name", n))).forEach((function(e) {
              e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
              var n = e.function || e.fn;
              e.enabled && i(n) && (t.offsets.popper = T(t.offsets.popper), t.offsets.reference = T(t.offsets.reference), t = n(t, e))
          })), t
      }
      function U() {
          if (!this.state.isDestroyed) {
              var e = {
                  instance: this,
                  styles: {},
                  arrowStyles: {},
                  attributes: {},
                  flipped: !1,
                  offsets: {}
              };
              e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = j(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = M(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = q(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
          }
      }
      function F(e, t) {
          return e.some((function(e) {
              var n = e.name;
              return e.enabled && n === t
          }))
      }
      function H(e) {
          for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
              var o = t[r],
                  i = o ? "" + o + n : e;
              if (void 0 !== document.body.style[i])
                  return i
          }
          return null
      }
      function z() {
          return this.state.isDestroyed = !0, F(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[H("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
      }
      function B(e) {
          var t = e.ownerDocument;
          return t ? t.defaultView : window
      }
      function W(e, t, n, r) {
          n.updateBound = r, B(e).addEventListener("resize", n.updateBound, {
              passive: !0
          });
          var o = l(e);
          return function e(t, n, r, o) {
              var i = "BODY" === t.nodeName,
                  s = i ? t.ownerDocument.defaultView : t;
              s.addEventListener(n, r, {
                  passive: !0
              }), i || e(l(s.parentNode), n, r, o), o.push(s)
          }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
      }
      function G() {
          this.state.eventsEnabled || (this.state = W(this.reference, this.options, this.state, this.scheduleUpdate))
      }
      function Y() {
          var e,
              t;
          this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, B(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function(e) {
              e.removeEventListener("scroll", t.updateBound)
          })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
      }
      function K(e) {
          return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
      }
      function V(e, t) {
          Object.keys(t).forEach((function(n) {
              var r = "";
              -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && K(t[n]) && (r = "px"), e.style[n] = t[n] + r
          }))
      }
      var Q = n && /Firefox/i.test(navigator.userAgent);
      function Z(e, t, n) {
          var r = R(e, (function(e) {
                  return e.name === t
              })),
              o = !!r && e.some((function(e) {
                  return e.name === n && e.enabled && e.order < r.order
              }));
          if (!o) {
              var i = "`" + t + "`",
                  s = "`" + n + "`";
              console.warn(s + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")
          }
          return o
      }
      var X = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
          J = X.slice(3);
      function ee(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = J.indexOf(e),
              r = J.slice(n + 1).concat(J.slice(0, n));
          return t ? r.reverse() : r
      }
      var te = "flip",
          ne = "clockwise",
          re = "counterclockwise";
      function oe(e, t, n, r) {
          var o = [0, 0],
              i = -1 !== ["right", "left"].indexOf(r),
              s = e.split(/(\+|\-)/).map((function(e) {
                  return e.trim()
              })),
              a = s.indexOf(R(s, (function(e) {
                  return -1 !== e.search(/,|\s/)
              })));
          s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
          var l = /\s*,\s*|\s+/,
              c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
          return (c = c.map((function(e, r) {
              var o = (1 === r ? !i : i) ? "height" : "width",
                  s = !1;
              return e.reduce((function(e, t) {
                  return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
              }), []).map((function(e) {
                  return function(e, t, n, r) {
                      var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                          i = +o[1],
                          s = o[2];
                      if (!i)
                          return e;
                      if (0 === s.indexOf("%")) {
                          var a = void 0;
                          switch (s) {
                          case "%p":
                              a = n;
                              break;
                          case "%":
                          case "%r":
                          default:
                              a = r
                          }
                          return T(a)[t] / 100 * i
                      }
                      if ("vh" === s || "vw" === s) {
                          return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i
                      }
                      return i
                  }(e, o, t, n)
              }))
          }))).forEach((function(e, t) {
              e.forEach((function(n, r) {
                  K(n) && (o[t] += n * ("-" === e[r - 1] ? -1 : 1))
              }))
          })), o
      }
      var ie = {
              placement: "bottom",
              positionFixed: !1,
              eventsEnabled: !0,
              removeOnDestroy: !1,
              onCreate: function() {},
              onUpdate: function() {},
              modifiers: {
                  shift: {
                      order: 100,
                      enabled: !0,
                      fn: function(e) {
                          var t = e.placement,
                              n = t.split("-")[0],
                              r = t.split("-")[1];
                          if (r) {
                              var o = e.offsets,
                                  i = o.reference,
                                  s = o.popper,
                                  a = -1 !== ["bottom", "top"].indexOf(n),
                                  l = a ? "left" : "top",
                                  c = a ? "width" : "height",
                                  u = {
                                      start: C({}, l, i[l]),
                                      end: C({}, l, i[l] + i[c] - s[c])
                                  };
                              e.offsets.popper = x({}, s, u[r])
                          }
                          return e
                      }
                  },
                  offset: {
                      order: 200,
                      enabled: !0,
                      fn: function(e, t) {
                          var n = t.offset,
                              r = e.placement,
                              o = e.offsets,
                              i = o.popper,
                              s = o.reference,
                              a = r.split("-")[0],
                              l = void 0;
                          return l = K(+n) ? [+n, 0] : oe(n, i, s, a), "left" === a ? (i.top += l[0], i.left -= l[1]) : "right" === a ? (i.top += l[0], i.left += l[1]) : "top" === a ? (i.left += l[0], i.top -= l[1]) : "bottom" === a && (i.left += l[0], i.top += l[1]), e.popper = i, e
                      },
                      offset: 0
                  },
                  preventOverflow: {
                      order: 300,
                      enabled: !0,
                      fn: function(e, t) {
                          var n = t.boundariesElement || h(e.instance.popper);
                          e.instance.reference === n && (n = h(n));
                          var r = H("transform"),
                              o = e.instance.popper.style,
                              i = o.top,
                              s = o.left,
                              a = o[r];
                          o.top = "", o.left = "", o[r] = "";
                          var l = $(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                          o.top = i, o.left = s, o[r] = a, t.boundaries = l;
                          var c = t.priority,
                              u = e.offsets.popper,
                              d = {
                                  primary: function(e) {
                                      var n = u[e];
                                      return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), C({}, e, n)
                                  },
                                  secondary: function(e) {
                                      var n = "right" === e ? "left" : "top",
                                          r = u[n];
                                      return u[e] > l[e] && !t.escapeWithReference && (r = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), C({}, n, r)
                                  }
                              };
                          return c.forEach((function(e) {
                              var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                              u = x({}, u, d[t](e))
                          })), e.offsets.popper = u, e
                      },
                      priority: ["left", "right", "top", "bottom"],
                      padding: 5,
                      boundariesElement: "scrollParent"
                  },
                  keepTogether: {
                      order: 400,
                      enabled: !0,
                      fn: function(e) {
                          var t = e.offsets,
                              n = t.popper,
                              r = t.reference,
                              o = e.placement.split("-")[0],
                              i = Math.floor,
                              s = -1 !== ["top", "bottom"].indexOf(o),
                              a = s ? "right" : "bottom",
                              l = s ? "left" : "top",
                              c = s ? "width" : "height";
                          return n[a] < i(r[l]) && (e.offsets.popper[l] = i(r[l]) - n[c]), n[l] > i(r[a]) && (e.offsets.popper[l] = i(r[a])), e
                      }
                  },
                  arrow: {
                      order: 500,
                      enabled: !0,
                      fn: function(e, t) {
                          var n;
                          if (!Z(e.instance.modifiers, "arrow", "keepTogether"))
                              return e;
                          var r = t.element;
                          if ("string" == typeof r) {
                              if (!(r = e.instance.popper.querySelector(r)))
                                  return e
                          } else if (!e.instance.popper.contains(r))
                              return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                          var o = e.placement.split("-")[0],
                              i = e.offsets,
                              a = i.popper,
                              l = i.reference,
                              c = -1 !== ["left", "right"].indexOf(o),
                              u = c ? "height" : "width",
                              d = c ? "Top" : "Left",
                              p = d.toLowerCase(),
                              h = c ? "left" : "top",
                              f = c ? "bottom" : "right",
                              g = N(r)[u];
                          l[f] - g < a[p] && (e.offsets.popper[p] -= a[p] - (l[f] - g)), l[p] + g > a[f] && (e.offsets.popper[p] += l[p] + g - a[f]), e.offsets.popper = T(e.offsets.popper);
                          var m = l[p] + l[u] / 2 - g / 2,
                              v = s(e.instance.popper),
                              y = parseFloat(v["margin" + d]),
                              _ = parseFloat(v["border" + d + "Width"]),
                              b = m - e.offsets.popper[p] - y - _;
                          return b = Math.max(Math.min(a[u] - g, b), 0), e.arrowElement = r, e.offsets.arrow = (C(n = {}, p, Math.round(b)), C(n, h, ""), n), e
                      },
                      element: "[x-arrow]"
                  },
                  flip: {
                      order: 600,
                      enabled: !0,
                      fn: function(e, t) {
                          if (F(e.instance.modifiers, "inner"))
                              return e;
                          if (e.flipped && e.placement === e.originalPlacement)
                              return e;
                          var n = $(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                              r = e.placement.split("-")[0],
                              o = I(r),
                              i = e.placement.split("-")[1] || "",
                              s = [];
                          switch (t.behavior) {
                          case te:
                              s = [r, o];
                              break;
                          case ne:
                              s = ee(r);
                              break;
                          case re:
                              s = ee(r, !0);
                              break;
                          default:
                              s = t.behavior
                          }
                          return s.forEach((function(a, l) {
                              if (r !== a || s.length === l + 1)
                                  return e;
                              r = e.placement.split("-")[0], o = I(r);
                              var c = e.offsets.popper,
                                  u = e.offsets.reference,
                                  d = Math.floor,
                                  p = "left" === r && d(c.right) > d(u.left) || "right" === r && d(c.left) < d(u.right) || "top" === r && d(c.bottom) > d(u.top) || "bottom" === r && d(c.top) < d(u.bottom),
                                  h = d(c.left) < d(n.left),
                                  f = d(c.right) > d(n.right),
                                  g = d(c.top) < d(n.top),
                                  m = d(c.bottom) > d(n.bottom),
                                  v = "left" === r && h || "right" === r && f || "top" === r && g || "bottom" === r && m,
                                  y = -1 !== ["top", "bottom"].indexOf(r),
                                  _ = !!t.flipVariations && (y && "start" === i && h || y && "end" === i && f || !y && "start" === i && g || !y && "end" === i && m),
                                  b = !!t.flipVariationsByContent && (y && "start" === i && f || y && "end" === i && h || !y && "start" === i && m || !y && "end" === i && g),
                                  w = _ || b;
                              (p || v || w) && (e.flipped = !0, (p || v) && (r = s[l + 1]), w && (i = function(e) {
                                  return "end" === e ? "start" : "start" === e ? "end" : e
                              }(i)), e.placement = r + (i ? "-" + i : ""), e.offsets.popper = x({}, e.offsets.popper, M(e.instance.popper, e.offsets.reference, e.placement)), e = q(e.instance.modifiers, e, "flip"))
                          })), e
                      },
                      behavior: "flip",
                      padding: 5,
                      boundariesElement: "viewport",
                      flipVariations: !1,
                      flipVariationsByContent: !1
                  },
                  inner: {
                      order: 700,
                      enabled: !1,
                      fn: function(e) {
                          var t = e.placement,
                              n = t.split("-")[0],
                              r = e.offsets,
                              o = r.popper,
                              i = r.reference,
                              s = -1 !== ["left", "right"].indexOf(n),
                              a = -1 === ["top", "left"].indexOf(n);
                          return o[s ? "left" : "top"] = i[n] - (a ? o[s ? "width" : "height"] : 0), e.placement = I(t), e.offsets.popper = T(o), e
                      }
                  },
                  hide: {
                      order: 800,
                      enabled: !0,
                      fn: function(e) {
                          if (!Z(e.instance.modifiers, "hide", "preventOverflow"))
                              return e;
                          var t = e.offsets.reference,
                              n = R(e.instance.modifiers, (function(e) {
                                  return "preventOverflow" === e.name
                              })).boundaries;
                          if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                              if (!0 === e.hide)
                                  return e;
                              e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                          } else {
                              if (!1 === e.hide)
                                  return e;
                              e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                          }
                          return e
                      }
                  },
                  computeStyle: {
                      order: 850,
                      enabled: !0,
                      fn: function(e, t) {
                          var n = t.x,
                              r = t.y,
                              o = e.offsets.popper,
                              i = R(e.instance.modifiers, (function(e) {
                                  return "applyStyle" === e.name
                              })).gpuAcceleration;
                          void 0 !== i && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                          var s = void 0 !== i ? i : t.gpuAcceleration,
                              a = h(e.instance.popper),
                              l = A(a),
                              c = {
                                  position: o.position
                              },
                              u = function(e, t) {
                                  var n = e.offsets,
                                      r = n.popper,
                                      o = n.reference,
                                      i = Math.round,
                                      s = Math.floor,
                                      a = function(e) {
                                          return e
                                      },
                                      l = i(o.width),
                                      c = i(r.width),
                                      u = -1 !== ["left", "right"].indexOf(e.placement),
                                      d = -1 !== e.placement.indexOf("-"),
                                      p = t ? u || d || l % 2 == c % 2 ? i : s : a,
                                      h = t ? i : a;
                                  return {
                                      left: p(l % 2 == 1 && c % 2 == 1 && !d && t ? r.left - 1 : r.left),
                                      top: h(r.top),
                                      bottom: h(r.bottom),
                                      right: p(r.right)
                                  }
                              }(e, window.devicePixelRatio < 2 || !Q),
                              d = "bottom" === n ? "top" : "bottom",
                              p = "right" === r ? "left" : "right",
                              f = H("transform"),
                              g = void 0,
                              m = void 0;
                          if (m = "bottom" === d ? "HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom : u.top, g = "right" === p ? "HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right : u.left, s && f)
                              c[f] = "translate3d(" + g + "px, " + m + "px, 0)", c[d] = 0, c[p] = 0, c.willChange = "transform";
                          else {
                              var v = "bottom" === d ? -1 : 1,
                                  y = "right" === p ? -1 : 1;
                              c[d] = m * v, c[p] = g * y, c.willChange = d + ", " + p
                          }
                          var _ = {
                              "x-placement": e.placement
                          };
                          return e.attributes = x({}, _, e.attributes), e.styles = x({}, c, e.styles), e.arrowStyles = x({}, e.offsets.arrow, e.arrowStyles), e
                      },
                      gpuAcceleration: !0,
                      x: "bottom",
                      y: "right"
                  },
                  applyStyle: {
                      order: 900,
                      enabled: !0,
                      fn: function(e) {
                          var t,
                              n;
                          return V(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function(e) {
                              !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                          })), e.arrowElement && Object.keys(e.arrowStyles).length && V(e.arrowElement, e.arrowStyles), e
                      },
                      onLoad: function(e, t, n, r, o) {
                          var i = L(o, t, e, n.positionFixed),
                              s = j(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                          return t.setAttribute("x-placement", s), V(t, {
                              position: n.positionFixed ? "fixed" : "absolute"
                          }), n
                      },
                      gpuAcceleration: void 0
                  }
              }
          },
          se = function() {
              function e(t, n) {
                  var r = this,
                      s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                  w(this, e), this.scheduleUpdate = function() {
                      return requestAnimationFrame(r.update)
                  }, this.update = o(this.update.bind(this)), this.options = x({}, e.Defaults, s), this.state = {
                      isDestroyed: !1,
                      isCreated: !1,
                      scrollParents: []
                  }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(x({}, e.Defaults.modifiers, s.modifiers)).forEach((function(t) {
                      r.options.modifiers[t] = x({}, e.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {})
                  })), this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
                      return x({
                          name: e
                      }, r.options.modifiers[e])
                  })).sort((function(e, t) {
                      return e.order - t.order
                  })), this.modifiers.forEach((function(e) {
                      e.enabled && i(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
                  })), this.update();
                  var a = this.options.eventsEnabled;
                  a && this.enableEventListeners(), this.state.eventsEnabled = a
              }
              return E(e, [{
                  key: "update",
                  value: function() {
                      return U.call(this)
                  }
              }, {
                  key: "destroy",
                  value: function() {
                      return z.call(this)
                  }
              }, {
                  key: "enableEventListeners",
                  value: function() {
                      return G.call(this)
                  }
              }, {
                  key: "disableEventListeners",
                  value: function() {
                      return Y.call(this)
                  }
              }]), e
          }();
      se.Utils = ("undefined" != typeof window ? window : e).PopperUtils, se.placements = X, se.Defaults = ie, t.default = se
  }.call(this, n(15))
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  var r = n(0),
      o = n(25);
  t.default = function(e) {
      var t,
          n = e.baseClass || "icon",
          i = e.src || "/img/icons.svg";
      return "atebitsy-flame-head" === e.name && (t = r.h("linearGradient", {
          id: "atebitsy-flame-gradient",
          x1: "50%",
          y1: "0%",
          x2: "50%",
          y2: "100%"
      }, r.h("stop", {
          "stop-color": "#ff9500",
          offset: "0%"
      }), r.h("stop", {
          "stop-color": "#ff5e3a",
          offset: "100%"
      }))), r.h("svg", {
          class: o.default(n, "icon-" + e.name, e.rightSpace ? "icon-spaced" : null)
      }, r.h("defs", null, t), r.h("use", {
          xlinkHref: i + "#" + e.name
      }))
  }
}, , , function(e, t, n) {
  "use strict";
  /*!
* Atebitsy
*
* @copyright HASHBANG Productions
*/
  Object.defineProperty(t, "__esModule", {
      value: !0
  }), n(10);
  var r = n(0),
      o = n(3),
      i = n(20),
      s = n(24),
      a = n(26),
      l = n(27);
  window.console && console.log && console.log("%c​%cAtebitsy", "font-size: large; background: url(http://www.atebitsy.com/img/favicon.png) 0 0/1.1em 1.1em no-repeat; padding-left: 1.2em;", "font-weight: bold; font-size: large;"), $((function() {
      $(".navbar #login a").click((function(e) {
          e.preventDefault(), o.default.show(r.h(s.default, null))
      }));
      var e = document.documentElement.dataset.page;
      if ("cydia-login-return" === e) {
          var t = $("chr-cydia-redirect-info").attr("data-redirect-url");
          void 0 !== t && setTimeout((function() {
              location.href = t, setTimeout((function() {
                  location.replace(location.href.replace(/\/launch-cydia.*$/i, ""))
              }), 1e4)
          }), 1)
      }
      if ("buy" === e) {
          var c = $("#open-button[data-opens-cydia]");
          c.length && c.click((function(e) {
              e.preventDefault(), o.default.show(r.h(i.default, {
                  itemID: c.attr("data-item-id"),
                  itemName: c.attr("data-item-name"),
                  packageID: c.attr("data-package-id"),
                  purchaseID: c.attr("data-purchase-id"),
                  supportEmail: c.attr("data-support-email")
              }))
          }));
          var u = $("chr-prerequisite");
          if (0 !== u.length) {
              var d = matchMedia("(min-width: 576px)").matches,
                  p = $(d ? "#buy-sidebar-stuff" : "#buy-header-product-box"),
                  h = u.attr("data-share-text"),
                  f = u.attr("data-share-url"),
                  g = $("<div/>").appendTo(p);
              r.render(r.h(l.default, {
                  title: h,
                  url: f,
                  condensed: !d
              }), g[0])
          }
      }
      if ("checkout" === e) {
          var m = $("chr-prerequisite");
          0 !== m.length && $("#promo-code-button").click((function(e) {
              e.preventDefault();
              var t = m.attr("data-id"),
                  n = m.attr("data-name");
              o.default.show(r.h(a.default, {
                  itemID: t,
                  itemName: n
              }))
          }));
          var v = $("#country"),
              y = $("#zipcode-container").hide(),
              _ = $("#zipcode");
          v.change((function(e) {
              var t = "US" === e.target.value;
              t ? y.show() : y.hide(), _.attr("required", t)
          })), v.change(), Promise.resolve().then((function() {
              return n(28)
          })).then((function() {
              v.select2({
                  placeholder: "Country",
                  theme: "bootstrap4",
                  templateResult: function(e) {
                      var t = $('<span class="country-flag" role="presentation" aria-hidden="true" />').text($(e.element).attr("data-emoji"));
                      return $("<span/>").text(e.text).prepend(t)
                  }
              })
          }))
      }
      "account" === e && ($("#js-account-edit-button, #js-account-cancel-button").click((function(e) {
          e.preventDefault(), $("#js-account-form").toggleClass("js-account-view-mode").toggleClass("js-account-edit-mode")
      })), $(".js-btn-destructive").click((function(e) {
          var t = $(e.target);
          t.hasClass("btn-danger") || (e.preventDefault(), t.removeClass("btn-light").addClass("btn-danger").text("Confirm"))
      })))
  }))
}, function(e, t, n) {
  n(11), n(12), n(18), n(4)
}, function(e, t) {
  void 0 !== window.applicationCache && applicationCache.addEventListener("updateready", (function() {
      applicationCache.status === applicationCache.UPDATEREADY && (applicationCache.swapCache(), location.reload())
  }))
}, function(e, t, n) {
  var r = this && this.__awaiter || function(e, t, n, r) {
          return new (n || (n = Promise))((function(o, i) {
              function s(e) {
                  try {
                      l(r.next(e))
                  } catch (e) {
                      i(e)
                  }
              }
              function a(e) {
                  try {
                      l(r.throw(e))
                  } catch (e) {
                      i(e)
                  }
              }
              function l(e) {
                  var t;
                  e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                      e(t)
                  }))).then(s, a)
              }
              l((r = r.apply(e, t || [])).next())
          }))
      },
      o = this && this.__generator || function(e, t) {
          var n,
              r,
              o,
              i,
              s = {
                  label: 0,
                  sent: function() {
                      if (1 & o[0])
                          throw o[1];
                      return o[1]
                  },
                  trys: [],
                  ops: []
              };
          return i = {
              next: a(0),
              throw: a(1),
              return: a(2)
          }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
              return this
          }), i;
          function a(i) {
              return function(a) {
                  return function(i) {
                      if (n)
                          throw new TypeError("Generator is already executing.");
                      for (; s;)
                          try {
                              if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
                                  return o;
                              switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                              case 0:
                              case 1:
                                  o = i;
                                  break;
                              case 4:
                                  return s.label++, {
                                      value: i[1],
                                      done: !1
                                  };
                              case 5:
                                  s.label++, r = i[1], i = [0];
                                  continue;
                              case 7:
                                  i = s.ops.pop(), s.trys.pop();
                                  continue;
                              default:
                                  if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                      s = 0;
                                      continue
                                  }
                                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                      s.label = i[1];
                                      break
                                  }
                                  if (6 === i[0] && s.label < o[1]) {
                                      s.label = o[1], o = i;
                                      break
                                  }
                                  if (o && s.label < o[2]) {
                                      s.label = o[2], s.ops.push(i);
                                      break
                                  }
                                  o[2] && s.ops.pop(), s.trys.pop();
                                  continue
                              }
                              i = t.call(e, s)
                          } catch (e) {
                              i = [6, e], r = 0
                          } finally {
                              n = o = 0
                          }
                      if (5 & i[0])
                          throw i[1];
                      return {
                          value: i[0] ? i[1] : void 0,
                          done: !0
                      }
                  }([i, a])
              }
          }
      },
      i = this;
  n(2), n(13), n(14), n(16), $((function() {
      return r(i, void 0, void 0, (function() {
          var e;
          return o(this, (function(t) {
              switch (t.label) {
              case 0:
                  return (e = $("[data-toggle=tooltip]")).length > 0 ? [4, Promise.resolve().then((function() {
                      return n(17)
                  }))] : [3, 2];
              case 1:
                  t.sent(), e.tooltip(), t.label = 2;
              case 2:
                  return [2]
              }
          }))
      }))
  }))
}, function(e, t, n) {
  /*!
* Bootstrap alert.js v4.5.2 (https://getbootstrap.com/)
* Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
  e.exports = function(e, t) {
      "use strict";
      function n(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }
      e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
      var r = "alert",
          o = e.fn[r],
          i = function() {
              function r(e) {
                  this._element = e
              }
              var o,
                  i,
                  s,
                  a = r.prototype;
              return a.close = function(e) {
                  var t = this._element;
                  e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
              }, a.dispose = function() {
                  e.removeData(this._element, "bs.alert"), this._element = null
              }, a._getRootElement = function(n) {
                  var r = t.getSelectorFromElement(n),
                      o = !1;
                  return r && (o = document.querySelector(r)), o || (o = e(n).closest(".alert")[0]), o
              }, a._triggerCloseEvent = function(t) {
                  var n = e.Event("close.bs.alert");
                  return e(t).trigger(n), n
              }, a._removeElement = function(n) {
                  var r = this;
                  if (e(n).removeClass("show"), e(n).hasClass("fade")) {
                      var o = t.getTransitionDurationFromElement(n);
                      e(n).one(t.TRANSITION_END, (function(e) {
                          return r._destroyElement(n, e)
                      })).emulateTransitionEnd(o)
                  } else
                      this._destroyElement(n)
              }, a._destroyElement = function(t) {
                  e(t).detach().trigger("closed.bs.alert").remove()
              }, r._jQueryInterface = function(t) {
                  return this.each((function() {
                      var n = e(this),
                          o = n.data("bs.alert");
                      o || (o = new r(this), n.data("bs.alert", o)), "close" === t && o[t](this)
                  }))
              }, r._handleDismiss = function(e) {
                  return function(t) {
                      t && t.preventDefault(), e.close(this)
                  }
              }, o = r, s = [{
                  key: "VERSION",
                  get: function() {
                      return "4.5.2"
                  }
              }], (i = null) && n(o.prototype, i), s && n(o, s), r
          }();
      return e(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', i._handleDismiss(new i)), e.fn[r] = i._jQueryInterface, e.fn[r].Constructor = i, e.fn[r].noConflict = function() {
          return e.fn[r] = o, i._jQueryInterface
      }, i
  }(n(1), n(2))
}, function(e, t, n) {
  /*!
* Bootstrap dropdown.js v4.5.2 (https://getbootstrap.com/)
* Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
  e.exports = function(e, t, n) {
      "use strict";
      function r() {
          return (r = Object.assign || function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }).apply(this, arguments)
      }
      function o(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }
      e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
      var i = "dropdown",
          s = "bs.dropdown",
          a = "." + s,
          l = e.fn[i],
          c = new RegExp("38|40|27"),
          u = {
              offset: 0,
              flip: !0,
              boundary: "scrollParent",
              reference: "toggle",
              display: "dynamic",
              popperConfig: null
          },
          d = {
              offset: "(number|string|function)",
              flip: "boolean",
              boundary: "(string|element)",
              reference: "(string|element)",
              display: "string",
              popperConfig: "(null|object)"
          },
          p = function() {
              function l(e, t) {
                  this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
              }
              var p,
                  h,
                  f,
                  g = l.prototype;
              return g.toggle = function() {
                  if (!this._element.disabled && !e(this._element).hasClass("disabled")) {
                      var t = e(this._menu).hasClass("show");
                      l._clearMenus(), t || this.show(!0)
                  }
              }, g.show = function(r) {
                  if (void 0 === r && (r = !1), !(this._element.disabled || e(this._element).hasClass("disabled") || e(this._menu).hasClass("show"))) {
                      var o = {
                              relatedTarget: this._element
                          },
                          i = e.Event("show.bs.dropdown", o),
                          s = l._getParentFromElement(this._element);
                      if (e(s).trigger(i), !i.isDefaultPrevented()) {
                          if (!this._inNavbar && r) {
                              if (void 0 === t)
                                  throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                              var a = this._element;
                              "parent" === this._config.reference ? a = s : n.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(s).addClass("position-static"), this._popper = new t(a, this._menu, this._getPopperConfig())
                          }
                          "ontouchstart" in document.documentElement && 0 === e(s).closest(".navbar-nav").length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass("show"), e(s).toggleClass("show").trigger(e.Event("shown.bs.dropdown", o))
                      }
                  }
              }, g.hide = function() {
                  if (!this._element.disabled && !e(this._element).hasClass("disabled") && e(this._menu).hasClass("show")) {
                      var t = {
                              relatedTarget: this._element
                          },
                          n = e.Event("hide.bs.dropdown", t),
                          r = l._getParentFromElement(this._element);
                      e(r).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), e(this._menu).toggleClass("show"), e(r).toggleClass("show").trigger(e.Event("hidden.bs.dropdown", t)))
                  }
              }, g.dispose = function() {
                  e.removeData(this._element, s), e(this._element).off(a), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
              }, g.update = function() {
                  this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
              }, g._addEventListeners = function() {
                  var t = this;
                  e(this._element).on("click.bs.dropdown", (function(e) {
                      e.preventDefault(), e.stopPropagation(), t.toggle()
                  }))
              }, g._getConfig = function(t) {
                  return t = r({}, this.constructor.Default, e(this._element).data(), t), n.typeCheckConfig(i, t, this.constructor.DefaultType), t
              }, g._getMenuElement = function() {
                  if (!this._menu) {
                      var e = l._getParentFromElement(this._element);
                      e && (this._menu = e.querySelector(".dropdown-menu"))
                  }
                  return this._menu
              }, g._getPlacement = function() {
                  var t = e(this._element.parentNode),
                      n = "bottom-start";
                  return t.hasClass("dropup") ? n = e(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : t.hasClass("dropright") ? n = "right-start" : t.hasClass("dropleft") ? n = "left-start" : e(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"), n
              }, g._detectNavbar = function() {
                  return e(this._element).closest(".navbar").length > 0
              }, g._getOffset = function() {
                  var e = this,
                      t = {};
                  return "function" == typeof this._config.offset ? t.fn = function(t) {
                      return t.offsets = r({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                  } : t.offset = this._config.offset, t
              }, g._getPopperConfig = function() {
                  var e = {
                      placement: this._getPlacement(),
                      modifiers: {
                          offset: this._getOffset(),
                          flip: {
                              enabled: this._config.flip
                          },
                          preventOverflow: {
                              boundariesElement: this._config.boundary
                          }
                      }
                  };
                  return "static" === this._config.display && (e.modifiers.applyStyle = {
                      enabled: !1
                  }), r({}, e, this._config.popperConfig)
              }, l._jQueryInterface = function(t) {
                  return this.each((function() {
                      var n = e(this).data(s);
                      if (n || (n = new l(this, "object" == typeof t ? t : null), e(this).data(s, n)), "string" == typeof t) {
                          if (void 0 === n[t])
                              throw new TypeError('No method named "' + t + '"');
                          n[t]()
                      }
                  }))
              }, l._clearMenus = function(t) {
                  if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                      for (var n = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), r = 0, o = n.length; r < o; r++) {
                          var i = l._getParentFromElement(n[r]),
                              a = e(n[r]).data(s),
                              c = {
                                  relatedTarget: n[r]
                              };
                          if (t && "click" === t.type && (c.clickEvent = t), a) {
                              var u = a._menu;
                              if (e(i).hasClass("show") && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(i, t.target))) {
                                  var d = e.Event("hide.bs.dropdown", c);
                                  e(i).trigger(d), d.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), n[r].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), e(u).removeClass("show"), e(i).removeClass("show").trigger(e.Event("hidden.bs.dropdown", c)))
                              }
                          }
                      }
              }, l._getParentFromElement = function(e) {
                  var t,
                      r = n.getSelectorFromElement(e);
                  return r && (t = document.querySelector(r)), t || e.parentNode
              }, l._dataApiKeydownHandler = function(t) {
                  if (!(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(".dropdown-menu").length) : !c.test(t.which)) && !this.disabled && !e(this).hasClass("disabled")) {
                      var n = l._getParentFromElement(this),
                          r = e(n).hasClass("show");
                      if (r || 27 !== t.which) {
                          if (t.preventDefault(), t.stopPropagation(), !r || r && (27 === t.which || 32 === t.which))
                              return 27 === t.which && e(n.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void e(this).trigger("click");
                          var o = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t) {
                              return e(t).is(":visible")
                          }));
                          if (0 !== o.length) {
                              var i = o.indexOf(t.target);
                              38 === t.which && i > 0 && i--, 40 === t.which && i < o.length - 1 && i++, i < 0 && (i = 0), o[i].focus()
                          }
                      }
                  }
              }, p = l, f = [{
                  key: "VERSION",
                  get: function() {
                      return "4.5.2"
                  }
              }, {
                  key: "Default",
                  get: function() {
                      return u
                  }
              }, {
                  key: "DefaultType",
                  get: function() {
                      return d
                  }
              }], (h = null) && o(p.prototype, h), f && o(p, f), l
          }();
      return e(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', p._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", p._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", p._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', (function(t) {
          t.preventDefault(), t.stopPropagation(), p._jQueryInterface.call(e(this), "toggle")
      })).on("click.bs.dropdown.data-api", ".dropdown form", (function(e) {
          e.stopPropagation()
      })), e.fn[i] = p._jQueryInterface, e.fn[i].Constructor = p, e.fn[i].noConflict = function() {
          return e.fn[i] = l, p._jQueryInterface
      }, p
  }(n(1), n(5), n(2))
}, function(e, t) {
  var n;
  n = function() {
      return this
  }();
  try {
      n = n || new Function("return this")()
  } catch (e) {
      "object" == typeof window && (n = window)
  }
  e.exports = n
}, function(e, t, n) {
  /*!
* Bootstrap collapse.js v4.5.2 (https://getbootstrap.com/)
* Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
  e.exports = function(e, t) {
      "use strict";
      function n() {
          return (n = Object.assign || function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }).apply(this, arguments)
      }
      function r(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }
      e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
      var o = "collapse",
          i = "bs.collapse",
          s = e.fn[o],
          a = {
              toggle: !0,
              parent: ""
          },
          l = {
              toggle: "boolean",
              parent: "(string|element)"
          },
          c = function() {
              function s(e, n) {
                  this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                  for (var r = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), o = 0, i = r.length; o < i; o++) {
                      var s = r[o],
                          a = t.getSelectorFromElement(s),
                          l = [].slice.call(document.querySelectorAll(a)).filter((function(t) {
                              return t === e
                          }));
                      null !== a && l.length > 0 && (this._selector = a, this._triggerArray.push(s))
                  }
                  this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
              }
              var c,
                  u,
                  d,
                  p = s.prototype;
              return p.toggle = function() {
                  e(this._element).hasClass("show") ? this.hide() : this.show()
              }, p.show = function() {
                  var n,
                      r,
                      o = this;
                  if (!(this._isTransitioning || e(this._element).hasClass("show") || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(e) {
                      return "string" == typeof o._config.parent ? e.getAttribute("data-parent") === o._config.parent : e.classList.contains("collapse")
                  }))).length && (n = null), n && (r = e(n).not(this._selector).data(i)) && r._isTransitioning))) {
                      var a = e.Event("show.bs.collapse");
                      if (e(this._element).trigger(a), !a.isDefaultPrevented()) {
                          n && (s._jQueryInterface.call(e(n).not(this._selector), "hide"), r || e(n).data(i, null));
                          var l = this._getDimension();
                          e(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[l] = 0, this._triggerArray.length && e(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
                          var c = "scroll" + (l[0].toUpperCase() + l.slice(1)),
                              u = t.getTransitionDurationFromElement(this._element);
                          e(this._element).one(t.TRANSITION_END, (function() {
                              e(o._element).removeClass("collapsing").addClass("collapse show"), o._element.style[l] = "", o.setTransitioning(!1), e(o._element).trigger("shown.bs.collapse")
                          })).emulateTransitionEnd(u), this._element.style[l] = this._element[c] + "px"
                      }
                  }
              }, p.hide = function() {
                  var n = this;
                  if (!this._isTransitioning && e(this._element).hasClass("show")) {
                      var r = e.Event("hide.bs.collapse");
                      if (e(this._element).trigger(r), !r.isDefaultPrevented()) {
                          var o = this._getDimension();
                          this._element.style[o] = this._element.getBoundingClientRect()[o] + "px", t.reflow(this._element), e(this._element).addClass("collapsing").removeClass("collapse show");
                          var i = this._triggerArray.length;
                          if (i > 0)
                              for (var s = 0; s < i; s++) {
                                  var a = this._triggerArray[s],
                                      l = t.getSelectorFromElement(a);
                                  null !== l && (e([].slice.call(document.querySelectorAll(l))).hasClass("show") || e(a).addClass("collapsed").attr("aria-expanded", !1))
                              }
                          this.setTransitioning(!0), this._element.style[o] = "";
                          var c = t.getTransitionDurationFromElement(this._element);
                          e(this._element).one(t.TRANSITION_END, (function() {
                              n.setTransitioning(!1), e(n._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                          })).emulateTransitionEnd(c)
                      }
                  }
              }, p.setTransitioning = function(e) {
                  this._isTransitioning = e
              }, p.dispose = function() {
                  e.removeData(this._element, i), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
              }, p._getConfig = function(e) {
                  return (e = n({}, a, e)).toggle = Boolean(e.toggle), t.typeCheckConfig(o, e, l), e
              }, p._getDimension = function() {
                  return e(this._element).hasClass("width") ? "width" : "height"
              }, p._getParent = function() {
                  var n,
                      r = this;
                  t.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                  var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                      i = [].slice.call(n.querySelectorAll(o));
                  return e(i).each((function(e, t) {
                      r._addAriaAndCollapsedClass(s._getTargetFromElement(t), [t])
                  })), n
              }, p._addAriaAndCollapsedClass = function(t, n) {
                  var r = e(t).hasClass("show");
                  n.length && e(n).toggleClass("collapsed", !r).attr("aria-expanded", r)
              }, s._getTargetFromElement = function(e) {
                  var n = t.getSelectorFromElement(e);
                  return n ? document.querySelector(n) : null
              }, s._jQueryInterface = function(t) {
                  return this.each((function() {
                      var r = e(this),
                          o = r.data(i),
                          l = n({}, a, r.data(), "object" == typeof t && t ? t : {});
                      if (!o && l.toggle && "string" == typeof t && /show|hide/.test(t) && (l.toggle = !1), o || (o = new s(this, l), r.data(i, o)), "string" == typeof t) {
                          if (void 0 === o[t])
                              throw new TypeError('No method named "' + t + '"');
                          o[t]()
                      }
                  }))
              }, c = s, d = [{
                  key: "VERSION",
                  get: function() {
                      return "4.5.2"
                  }
              }, {
                  key: "Default",
                  get: function() {
                      return a
                  }
              }], (u = null) && r(c.prototype, u), d && r(c, d), s
          }();
      return e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(n) {
          "A" === n.currentTarget.tagName && n.preventDefault();
          var r = e(this),
              o = t.getSelectorFromElement(this),
              s = [].slice.call(document.querySelectorAll(o));
          e(s).each((function() {
              var t = e(this),
                  n = t.data(i) ? "toggle" : r.data();
              c._jQueryInterface.call(t, n)
          }))
      })), e.fn[o] = c._jQueryInterface, e.fn[o].Constructor = c, e.fn[o].noConflict = function() {
          return e.fn[o] = s, c._jQueryInterface
      }, c
  }(n(1), n(2))
}, function(e, t, n) {
  /*!
* Bootstrap tooltip.js v4.5.2 (https://getbootstrap.com/)
* Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
  e.exports = function(e, t, n) {
      "use strict";
      e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
      var r = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
          o = {
              "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
              a: ["target", "href", "title", "rel"],
              area: [],
              b: [],
              br: [],
              col: [],
              code: [],
              div: [],
              em: [],
              hr: [],
              h1: [],
              h2: [],
              h3: [],
              h4: [],
              h5: [],
              h6: [],
              i: [],
              img: ["src", "srcset", "alt", "title", "width", "height"],
              li: [],
              ol: [],
              p: [],
              pre: [],
              s: [],
              small: [],
              span: [],
              sub: [],
              sup: [],
              strong: [],
              u: [],
              ul: []
          },
          i = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
          s = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
      function a(e, t, n) {
          if (0 === e.length)
              return e;
          if (n && "function" == typeof n)
              return n(e);
          for (var o = (new window.DOMParser).parseFromString(e, "text/html"), a = Object.keys(t), l = [].slice.call(o.body.querySelectorAll("*")), c = function(e, n) {
                  var o = l[e],
                      c = o.nodeName.toLowerCase();
                  if (-1 === a.indexOf(o.nodeName.toLowerCase()))
                      return o.parentNode.removeChild(o), "continue";
                  var u = [].slice.call(o.attributes),
                      d = [].concat(t["*"] || [], t[c] || []);
                  u.forEach((function(e) {
                      (function(e, t) {
                          var n = e.nodeName.toLowerCase();
                          if (-1 !== t.indexOf(n))
                              return -1 === r.indexOf(n) || Boolean(e.nodeValue.match(i) || e.nodeValue.match(s));
                          for (var o = t.filter((function(e) {
                                  return e instanceof RegExp
                              })), a = 0, l = o.length; a < l; a++)
                              if (n.match(o[a]))
                                  return !0;
                          return !1
                      })(e, d) || o.removeAttribute(e.nodeName)
                  }))
              }, u = 0, d = l.length; u < d; u++)
              c(u);
          return o.body.innerHTML
      }
      function l() {
          return (l = Object.assign || function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
          }).apply(this, arguments)
      }
      function c(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
      }
      var u = "tooltip",
          d = ".bs.tooltip",
          p = e.fn[u],
          h = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
          f = ["sanitize", "whiteList", "sanitizeFn"],
          g = {
              animation: "boolean",
              template: "string",
              title: "(string|element|function)",
              trigger: "string",
              delay: "(number|object)",
              html: "boolean",
              selector: "(string|boolean)",
              placement: "(string|function)",
              offset: "(number|string|function)",
              container: "(string|element|boolean)",
              fallbackPlacement: "(string|array)",
              boundary: "(string|element)",
              sanitize: "boolean",
              sanitizeFn: "(null|function)",
              whiteList: "object",
              popperConfig: "(null|object)"
          },
          m = {
              AUTO: "auto",
              TOP: "top",
              RIGHT: "right",
              BOTTOM: "bottom",
              LEFT: "left"
          },
          v = {
              animation: !0,
              template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
              trigger: "hover focus",
              title: "",
              delay: 0,
              html: !1,
              selector: !1,
              placement: "top",
              offset: 0,
              container: !1,
              fallbackPlacement: "flip",
              boundary: "scrollParent",
              sanitize: !0,
              sanitizeFn: null,
              whiteList: o,
              popperConfig: null
          },
          y = {
              HIDE: "hide" + d,
              HIDDEN: "hidden" + d,
              SHOW: "show" + d,
              SHOWN: "shown" + d,
              INSERTED: "inserted" + d,
              CLICK: "click" + d,
              FOCUSIN: "focusin" + d,
              FOCUSOUT: "focusout" + d,
              MOUSEENTER: "mouseenter" + d,
              MOUSELEAVE: "mouseleave" + d
          },
          _ = function() {
              function r(e, n) {
                  if (void 0 === t)
                      throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                  this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(n), this.tip = null, this._setListeners()
              }
              var o,
                  i,
                  s,
                  p = r.prototype;
              return p.enable = function() {
                  this._isEnabled = !0
              }, p.disable = function() {
                  this._isEnabled = !1
              }, p.toggleEnabled = function() {
                  this._isEnabled = !this._isEnabled
              }, p.toggle = function(t) {
                  if (this._isEnabled)
                      if (t) {
                          var n = this.constructor.DATA_KEY,
                              r = e(t.currentTarget).data(n);
                          r || (r = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, r)), r._activeTrigger.click = !r._activeTrigger.click, r._isWithActiveTrigger() ? r._enter(null, r) : r._leave(null, r)
                      } else {
                          if (e(this.getTipElement()).hasClass("show"))
                              return void this._leave(null, this);
                          this._enter(null, this)
                      }
              }, p.dispose = function() {
                  clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
              }, p.show = function() {
                  var r = this;
                  if ("none" === e(this.element).css("display"))
                      throw new Error("Please use show on visible elements");
                  var o = e.Event(this.constructor.Event.SHOW);
                  if (this.isWithContent() && this._isEnabled) {
                      e(this.element).trigger(o);
                      var i = n.findShadowRoot(this.element),
                          s = e.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element);
                      if (o.isDefaultPrevented() || !s)
                          return;
                      var a = this.getTipElement(),
                          l = n.getUID(this.constructor.NAME);
                      a.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && e(a).addClass("fade");
                      var c = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                          u = this._getAttachment(c);
                      this.addAttachmentClass(u);
                      var d = this._getContainer();
                      e(a).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(a).appendTo(d), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new t(this.element, a, this._getPopperConfig(u)), e(a).addClass("show"), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                      var p = function() {
                          r.config.animation && r._fixTransition();
                          var t = r._hoverState;
                          r._hoverState = null, e(r.element).trigger(r.constructor.Event.SHOWN), "out" === t && r._leave(null, r)
                      };
                      if (e(this.tip).hasClass("fade")) {
                          var h = n.getTransitionDurationFromElement(this.tip);
                          e(this.tip).one(n.TRANSITION_END, p).emulateTransitionEnd(h)
                      } else
                          p()
                  }
              }, p.hide = function(t) {
                  var r = this,
                      o = this.getTipElement(),
                      i = e.Event(this.constructor.Event.HIDE),
                      s = function() {
                          "show" !== r._hoverState && o.parentNode && o.parentNode.removeChild(o), r._cleanTipClass(), r.element.removeAttribute("aria-describedby"), e(r.element).trigger(r.constructor.Event.HIDDEN), null !== r._popper && r._popper.destroy(), t && t()
                      };
                  if (e(this.element).trigger(i), !i.isDefaultPrevented()) {
                      if (e(o).removeClass("show"), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, e(this.tip).hasClass("fade")) {
                          var a = n.getTransitionDurationFromElement(o);
                          e(o).one(n.TRANSITION_END, s).emulateTransitionEnd(a)
                      } else
                          s();
                      this._hoverState = ""
                  }
              }, p.update = function() {
                  null !== this._popper && this._popper.scheduleUpdate()
              }, p.isWithContent = function() {
                  return Boolean(this.getTitle())
              }, p.addAttachmentClass = function(t) {
                  e(this.getTipElement()).addClass("bs-tooltip-" + t)
              }, p.getTipElement = function() {
                  return this.tip = this.tip || e(this.config.template)[0], this.tip
              }, p.setContent = function() {
                  var t = this.getTipElement();
                  this.setElementContent(e(t.querySelectorAll(".tooltip-inner")), this.getTitle()), e(t).removeClass("fade show")
              }, p.setElementContent = function(t, n) {
                  "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = a(n, this.config.whiteList, this.config.sanitizeFn)), t.html(n)) : t.text(n) : this.config.html ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text())
              }, p.getTitle = function() {
                  var e = this.element.getAttribute("data-original-title");
                  return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
              }, p._getPopperConfig = function(e) {
                  var t = this;
                  return l({}, {
                      placement: e,
                      modifiers: {
                          offset: this._getOffset(),
                          flip: {
                              behavior: this.config.fallbackPlacement
                          },
                          arrow: {
                              element: ".arrow"
                          },
                          preventOverflow: {
                              boundariesElement: this.config.boundary
                          }
                      },
                      onCreate: function(e) {
                          e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                      },
                      onUpdate: function(e) {
                          return t._handlePopperPlacementChange(e)
                      }
                  }, this.config.popperConfig)
              }, p._getOffset = function() {
                  var e = this,
                      t = {};
                  return "function" == typeof this.config.offset ? t.fn = function(t) {
                      return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                  } : t.offset = this.config.offset, t
              }, p._getContainer = function() {
                  return !1 === this.config.container ? document.body : n.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container)
              }, p._getAttachment = function(e) {
                  return m[e.toUpperCase()]
              }, p._setListeners = function() {
                  var t = this;
                  this.config.trigger.split(" ").forEach((function(n) {
                      if ("click" === n)
                          e(t.element).on(t.constructor.Event.CLICK, t.config.selector, (function(e) {
                              return t.toggle(e)
                          }));
                      else if ("manual" !== n) {
                          var r = "hover" === n ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                              o = "hover" === n ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                          e(t.element).on(r, t.config.selector, (function(e) {
                              return t._enter(e)
                          })).on(o, t.config.selector, (function(e) {
                              return t._leave(e)
                          }))
                      }
                  })), this._hideModalHandler = function() {
                      t.element && t.hide()
                  }, e(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l({}, this.config, {
                      trigger: "manual",
                      selector: ""
                  }) : this._fixTitle()
              }, p._fixTitle = function() {
                  var e = typeof this.element.getAttribute("data-original-title");
                  (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
              }, p._enter = function(t, n) {
                  var r = this.constructor.DATA_KEY;
                  (n = n || e(t.currentTarget).data(r)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(r, n)), t && (n._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e(n.getTipElement()).hasClass("show") || "show" === n._hoverState ? n._hoverState = "show" : (clearTimeout(n._timeout), n._hoverState = "show", n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function() {
                      "show" === n._hoverState && n.show()
                  }), n.config.delay.show) : n.show())
              }, p._leave = function(t, n) {
                  var r = this.constructor.DATA_KEY;
                  (n = n || e(t.currentTarget).data(r)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(r, n)), t && (n._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function() {
                      "out" === n._hoverState && n.hide()
                  }), n.config.delay.hide) : n.hide())
              }, p._isWithActiveTrigger = function() {
                  for (var e in this._activeTrigger)
                      if (this._activeTrigger[e])
                          return !0;
                  return !1
              }, p._getConfig = function(t) {
                  var r = e(this.element).data();
                  return Object.keys(r).forEach((function(e) {
                      -1 !== f.indexOf(e) && delete r[e]
                  })), "number" == typeof (t = l({}, this.constructor.Default, r, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                      show: t.delay,
                      hide: t.delay
                  }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), n.typeCheckConfig(u, t, this.constructor.DefaultType), t.sanitize && (t.template = a(t.template, t.whiteList, t.sanitizeFn)), t
              }, p._getDelegateConfig = function() {
                  var e = {};
                  if (this.config)
                      for (var t in this.config)
                          this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                  return e
              }, p._cleanTipClass = function() {
                  var t = e(this.getTipElement()),
                      n = t.attr("class").match(h);
                  null !== n && n.length && t.removeClass(n.join(""))
              }, p._handlePopperPlacementChange = function(e) {
                  this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
              }, p._fixTransition = function() {
                  var t = this.getTipElement(),
                      n = this.config.animation;
                  null === t.getAttribute("x-placement") && (e(t).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
              }, r._jQueryInterface = function(t) {
                  return this.each((function() {
                      var n = e(this).data("bs.tooltip"),
                          o = "object" == typeof t && t;
                      if ((n || !/dispose|hide/.test(t)) && (n || (n = new r(this, o), e(this).data("bs.tooltip", n)), "string" == typeof t)) {
                          if (void 0 === n[t])
                              throw new TypeError('No method named "' + t + '"');
                          n[t]()
                      }
                  }))
              }, o = r, s = [{
                  key: "VERSION",
                  get: function() {
                      return "4.5.2"
                  }
              }, {
                  key: "Default",
                  get: function() {
                      return v
                  }
              }, {
                  key: "NAME",
                  get: function() {
                      return u
                  }
              }, {
                  key: "DATA_KEY",
                  get: function() {
                      return "bs.tooltip"
                  }
              }, {
                  key: "Event",
                  get: function() {
                      return y
                  }
              }, {
                  key: "EVENT_KEY",
                  get: function() {
                      return d
                  }
              }, {
                  key: "DefaultType",
                  get: function() {
                      return g
                  }
              }], (i = null) && c(o.prototype, i), s && c(o, s), r
          }();
      return e.fn[u] = _._jQueryInterface, e.fn[u].Constructor = _, e.fn[u].noConflict = function() {
          return e.fn[u] = p, _._jQueryInterface
      }, _
  }(n(1), n(5), n(2))
}, function(e, t, n) {
  /Cydia\//.test(navigator.userAgent) && (n(19), $((function() {
      return window.FastClick.attach(document.body)
  })))
}, function(e, t) {
  /**
* @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
*
* @codingstandard ftlabs-jsv2
* @copyright The Financial Times Limited [All Rights Reserved]
* @license MIT License (see LICENSE.txt)
*/
  !function(e, t) {
      function n(e, t) {
          function r(e, t) {
              return function() {
                  return e.apply(t, arguments)
              }
          }
          if (t = t || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.lastTouchIdentifier = this.touchStartY = this.touchStartX = 0, this.touchBoundary = t.touchBoundary || 10, this.layer = e, this.tapDelay = t.tapDelay || 200, this.tapTimeout = t.tapTimeout || 700, !n.notNeeded(e)) {
              for (var o = "onMouse onClick onTouchStart onTouchMove onTouchEnd onTouchCancel".split(" "), s = 0, a = o.length; s < a; s++)
                  this[o[s]] = r(this[o[s]], this);
              if (i && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, r) {
                  var o = Node.prototype.removeEventListener;
                  "click" === t ? o.call(e, t, n.hijacked || n, r) : o.call(e, t, n, r)
              }, e.addEventListener = function(t, n, r) {
                  var o = Node.prototype.addEventListener;
                  "click" === t ? o.call(e, t, n.hijacked || (n.hijacked = function(e) {
                      e.propagationStopped || n(e)
                  }), r) : o.call(e, t, n, r)
              }), "function" == typeof e.onclick) {
                  var l = e.onclick;
                  e.addEventListener("click", (function(e) {
                      l(e)
                  }), !1), e.onclick = null
              }
          }
      }
      var r = navigator.userAgent,
          o = 0 <= r.indexOf("Windows Phone"),
          i = 0 < r.indexOf("Android") && !o,
          s = /iP(ad|hone|od)/.test(r) && !o,
          a = s && /OS 4_\d(_\d)?/.test(r),
          l = s && /OS [6-7]_\d/.test(r),
          c = 0 < r.indexOf("BB10");
      n.prototype.needsClick = function(e) {
          switch (e.nodeName.toLowerCase()) {
          case "button":
          case "select":
          case "textarea":
              if (e.disabled)
                  return !0;
              break;
          case "input":
              if (s && "file" === e.type || e.disabled)
                  return !0;
              break;
          case "label":
          case "iframe":
          case "video":
              return !0
          }
          return /\bneedsclick\b/.test(e.className)
      }, n.prototype.needsFocus = function(e) {
          switch (e.nodeName.toLowerCase()) {
          case "textarea":
              return !0;
          case "select":
              return !i;
          case "input":
              switch (e.type) {
              case "button":
              case "checkbox":
              case "file":
              case "image":
              case "radio":
              case "submit":
                  return !1
              }
              return !e.disabled && !e.readOnly;
          default:
              return /\bneedsfocus\b/.test(e.className)
          }
      }, n.prototype.sendClick = function(n, r) {
          t.activeElement && t.activeElement !== n && t.activeElement.blur();
          var o = r.changedTouches[0],
              i = t.createEvent("MouseEvents");
          i.initMouseEvent(this.determineEventType(n), !0, !0, e, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, n.dispatchEvent(i)
      }, n.prototype.determineEventType = function(e) {
          return i && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
      }, n.prototype.focus = function(e) {
          if (s && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type && "email" !== e.type) {
              var t = e.value.length;
              e.setSelectionRange(t, t)
          } else
              e.focus()
      }, n.prototype.updateScrollParent = function(e) {
          var t = e.fastClickScrollParent;
          if (!t || !t.contains(e)) {
              var n = e;
              do {
                  if (n.scrollHeight > n.offsetHeight) {
                      t = n, e.fastClickScrollParent = n;
                      break
                  }
                  n = n.parentElement
              } while (n)
          }
          t && (t.fastClickLastScrollTop = t.scrollTop)
      }, n.prototype.getTargetElementFromEventTarget = function(e) {
          return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
      }, n.prototype.onTouchStart = function(t) {
          if (1 < t.targetTouches.length)
              return !0;
          var n = this.getTargetElementFromEventTarget(t.target),
              r = t.targetTouches[0];
          if (s) {
              var o = e.getSelection();
              if (o.rangeCount && !o.isCollapsed)
                  return !0;
              if (!a) {
                  if (r.identifier && r.identifier === this.lastTouchIdentifier)
                      return t.preventDefault(), !1;
                  this.lastTouchIdentifier = r.identifier, this.updateScrollParent(n)
              }
          }
          return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = n, this.touchStartX = r.pageX, this.touchStartY = r.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
      }, n.prototype.touchHasMoved = function(e) {
          e = e.changedTouches[0];
          var t = this.touchBoundary;
          return Math.abs(e.pageX - this.touchStartX) > t || Math.abs(e.pageY - this.touchStartY) > t
      }, n.prototype.onTouchMove = function(e) {
          return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0)
      }, n.prototype.findControl = function(e) {
          return void 0 !== e.control ? e.control : e.htmlFor ? t.getElementById(e.htmlFor) : e.querySelector("button,input:not([type=hidden]),keygen,meter,output,progress,select,textarea")
      }, n.prototype.onTouchEnd = function(n) {
          var r = this.targetElement;
          if (!this.trackingClick)
              return !0;
          if (n.timeStamp - this.lastClickTime < this.tapDelay)
              return this.cancelNextClick = !0;
          if (n.timeStamp - this.trackingClickStart > this.tapTimeout)
              return !0;
          this.cancelNextClick = !1, this.lastClickTime = n.timeStamp;
          var o = this.trackingClickStart;
          if (this.trackingClick = !1, this.trackingClickStart = 0, l) {
              var c = n.changedTouches[0];
              (r = t.elementFromPoint(c.pageX - e.pageXOffset, c.pageY - e.pageYOffset) || r).fastClickScrollParent = this.targetElement.fastClickScrollParent
          }
          if ("label" === (c = r.tagName.toLowerCase())) {
              if (o = this.findControl(r)) {
                  if (this.focus(r), i)
                      return !1;
                  r = o
              }
          } else if (this.needsFocus(r))
              return 100 < n.timeStamp - o || s && e.top !== e && "input" === c ? (this.targetElement = null, !1) : (this.focus(r), this.sendClick(r, n), s && "select" === c || (this.targetElement = null, n.preventDefault()), !1);
          return !(!s || a || !(o = r.fastClickScrollParent) || o.fastClickLastScrollTop === o.scrollTop) || (this.needsClick(r) || (n.preventDefault(), this.sendClick(r, n)), !1)
      }, n.prototype.onTouchCancel = function() {
          this.trackingClick = !1, this.targetElement = null
      }, n.prototype.onMouse = function(e) {
          return !(this.targetElement && !e.forwardedTouchEvent && e.cancelable) || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1))
      }, n.prototype.onClick = function(e) {
          return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail || ((e = this.onMouse(e)) || (this.targetElement = null), e)
      }, n.prototype.destroy = function() {
          var e = this.layer;
          i && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
      }, n.notNeeded = function(n) {
          var r,
              o;
          if (void 0 === e.ontouchstart)
              return !0;
          if (o = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
              if (!i)
                  return !0;
              if ((r = t.querySelector("meta[name=viewport]")) && (-1 !== r.content.indexOf("user-scalable=no") || 31 < o && t.documentElement.scrollWidth <= e.outerWidth))
                  return !0
          }
          return !!(c && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), 10 <= r[1] && 3 <= r[2] && (r = t.querySelector("meta[name=viewport]")) && (-1 !== r.content.indexOf("user-scalable=no") || t.documentElement.scrollWidth <= e.outerWidth)) || "none" === n.style.msTouchAction || "manipulation" === n.style.touchAction || 27 <= +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] && (r = t.querySelector("meta[name=viewport]")) && (-1 !== r.content.indexOf("user-scalable=no") || t.documentElement.scrollWidth <= e.outerWidth)) || ("none" === n.style.touchAction || "manipulation" === n.style.touchAction)
      }, n.attach = function(e, t) {
          return new n(e, t)
      }, e.FastClick = n
  }(window, document)
}, function(e, t, n) {
  "use strict";
  var r,
      o = this && this.__extends || (r = function(e, t) {
          return (r = Object.setPrototypeOf || {
              __proto__: []
          } instanceof Array && function(e, t) {
              e.__proto__ = t
          } || function(e, t) {
              for (var n in t)
                  t.hasOwnProperty(n) && (e[n] = t[n])
          })(e, t)
      }, function(e, t) {
          function n() {
              this.constructor = e
          }
          r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      });
  Object.defineProperty(t, "__esModule", {
      value: !0
  }), t.BuyOpenInAppApp = void 0;
  var i,
      s = n(0),
      a = n(3),
      l = n(21);
  !function(e) {
      e.Cydia = "cydia", e.Sileo = "sileo", e.Zebra = "zebra", e.Installer = "installer"
  }(i = t.BuyOpenInAppApp || (t.BuyOpenInAppApp = {}));
  var c = function(e) {
      function t() {
          return null !== e && e.apply(this, arguments) || this
      }
      return o(t, e), t.prototype.openIn = function(e) {
          var t = null;
          switch (e) {
          case i.Cydia:
              t = "/buy/" + this.props.itemID + "/launch-cydia";
              break;
          case i.Sileo:
              t = "sileo://package/" + this.props.packageID;
              break;
          case i.Zebra:
              t = "zbra://packages/" + this.props.packageID + "?source=https://www.atebitsy.com/";
              break;
          case i.Installer:
              t = "installer://show/" + l.stringify({
                  shared: "Installer",
                  name: this.props.itemName,
                  bundleid: this.props.packageID,
                  repo: "www.atebitsy.com"
              })
          }
          location.href = t, a.default.hide(!0)
      }, t.prototype.render = function() {
          var e = this,
              t = [{
                  id: i.Cydia,
                  name: "Cydia",
                  icon: "cydia"
              }, {
                  id: i.Sileo,
                  name: "Sileo",
                  icon: "sileo"
              }, {
                  id: i.Zebra,
                  name: "Zebra",
                  icon: "zebra"
              }];
          return s.h(a.default, {
              id: "buy-open-in-app-dialog"
          }, s.h("div", {
              class: "modal-body"
          }, s.h("h2", {
              class: "text-center"
          }, "Open In…"), s.h("div", {
              class: "d-flex flex-row flex-wrap justify-content-between mb-1"
          }, t.map((function(t) {
              return s.h("div", {
                  class: "product-item"
              }, s.h("button", {
                  class: "btn btn-link text-body",
                  onClick: function() {
                      return e.openIn(t.id)
                  }
              }, s.h("img", {
                  class: "product-icon",
                  alt: "",
                  src: "/img/" + t.icon + ".png",
                  srcset: "/img/" + t.icon + ".png 1x, /img/" + t.icon + "@2x.png 2x, /img/" + t.icon + "@3x.png 3x"
              }), s.h("span", {
                  class: "product-name"
              }, t.name)))
          }))), s.h("div", {
              class: "text-left"
          }, s.h("p", null, "If you haven’t installed a jailbreak on your iOS device, you can visit", " ", s.h("a", {
              href: "https://canijailbreak.com/",
              target: "_blank",
              rel: "noopener noreferrer"
          }, "canijailbreak.com"), " ", "for instructions on jailbreaking."))), s.h("div", {
              class: "modal-buttons"
          }, s.h("button", {
              class: "btn btn-primary",
              onClick: function() {
                  return a.default.hide(!0)
              }
          }, "Cancel")))
      }, t
  }(s.Component);
  t.default = c
}, function(e, t, n) {
  "use strict";
  t.decode = t.parse = n(22), t.encode = t.stringify = n(23)
}, function(e, t, n) {
  "use strict";
  function r(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
  }
  e.exports = function(e, t, n, i) {
      t = t || "&", n = n || "=";
      var s = {};
      if ("string" != typeof e || 0 === e.length)
          return s;
      var a = /\+/g;
      e = e.split(t);
      var l = 1e3;
      i && "number" == typeof i.maxKeys && (l = i.maxKeys);
      var c = e.length;
      l > 0 && c > l && (c = l);
      for (var u = 0; u < c; ++u) {
          var d,
              p,
              h,
              f,
              g = e[u].replace(a, "%20"),
              m = g.indexOf(n);
          m >= 0 ? (d = g.substr(0, m), p = g.substr(m + 1)) : (d = g, p = ""), h = decodeURIComponent(d), f = decodeURIComponent(p), r(s, h) ? o(s[h]) ? s[h].push(f) : s[h] = [s[h], f] : s[h] = f
      }
      return s
  };
  var o = Array.isArray || function(e) {
      return "[object Array]" === Object.prototype.toString.call(e)
  }
}, function(e, t, n) {
  "use strict";
  var r = function(e) {
      switch (typeof e) {
      case "string":
          return e;
      case "boolean":
          return e ? "true" : "false";
      case "number":
          return isFinite(e) ? e : "";
      default:
          return ""
      }
  };
  e.exports = function(e, t, n, a) {
      return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? i(s(e), (function(s) {
          var a = encodeURIComponent(r(s)) + n;
          return o(e[s]) ? i(e[s], (function(e) {
              return a + encodeURIComponent(r(e))
          })).join(t) : a + encodeURIComponent(r(e[s]))
      })).join(t) : a ? encodeURIComponent(r(a)) + n + encodeURIComponent(r(e)) : ""
  };
  var o = Array.isArray || function(e) {
      return "[object Array]" === Object.prototype.toString.call(e)
  };
  function i(e, t) {
      if (e.map)
          return e.map(t);
      for (var n = [], r = 0; r < e.length; r++)
          n.push(t(e[r], r));
      return n
  }
  var s = Object.keys || function(e) {
      var t = [];
      for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
      return t
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  var r = n(0),
      o = n(3),
      i = n(6);
  t.default = function() {
      var e = location.href.substring(location.protocol.length + location.hostname.length + (location.port.length > 0 ? location.port.length + 1 : 0) + 2);
      return r.h(o.default, {
          id: "login-dialog"
      }, r.h("div", {
          class: "modal-body text-center p-lg-5"
      }, r.h("h2", null, "Log In"), r.h("p", {
          class: "mb-3"
      }, "Access your account to make purchases and download products you’ve already bought."), r.h("form", {
          action: "/auth/login",
          method: "post"
      }, r.h("input", {
          type: "hidden",
          name: "returnto",
          value: e
      }), r.h("button", {
          id: "login-button",
          class: "btn btn-primary",
          type: "submit"
      }, r.h(i.default, {
          name: "google-g-color"
      }), "Sign in with Google")), r.h("p", {
          class: "small text-muted mb-0"
      }, "Your Google account acts as your “password” to log into Atebitsy.", r.h("br", null), "Atebitsy Pay uses PayPal for purchases.")), r.h("div", {
          class: "modal-buttons"
      }, r.h("button", {
          class: "btn btn-primary",
          onClick: function() {
              return o.default.hide(!0)
          }
      }, "Cancel")))
  }
}, function(e, t, n) {
  "use strict";
  function r(e) {
      var t,
          n,
          o = "";
      if ("string" == typeof e || "number" == typeof e)
          o += e;
      else if ("object" == typeof e)
          if (Array.isArray(e))
              for (t = 0; t < e.length; t++)
                  e[t] && (n = r(e[t])) && (o && (o += " "), o += n);
          else
              for (t in e)
                  e[t] && (o && (o += " "), o += t);
      return o
  }
  n.r(t), t.default = function() {
      for (var e, t, n = 0, o = ""; n < arguments.length;)
          (e = arguments[n++]) && (t = r(e)) && (o && (o += " "), o += t);
      return o
  }
}, function(e, t, n) {
  "use strict";
  var r,
      o = this && this.__extends || (r = function(e, t) {
          return (r = Object.setPrototypeOf || {
              __proto__: []
          } instanceof Array && function(e, t) {
              e.__proto__ = t
          } || function(e, t) {
              for (var n in t)
                  t.hasOwnProperty(n) && (e[n] = t[n])
          })(e, t)
      }, function(e, t) {
          function n() {
              this.constructor = e
          }
          r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      });
  Object.defineProperty(t, "__esModule", {
      value: !0
  }), t.BuyPromoRedeemDialogType = void 0;
  var i = n(0),
      s = n(3);
  !function(e) {
      e.IncompatibleOS = "incompatible-os", e.CantCheck = "cant-check"
  }(t.BuyPromoRedeemDialogType || (t.BuyPromoRedeemDialogType = {}));
  var a = function(e) {
      function t() {
          return null !== e && e.apply(this, arguments) || this
      }
      return o(t, e), t.prototype.go = function() {
          var e = this,
              t = {
                  item: this.props.itemID,
                  code: this.state.code
              };
          this.setState({
              loading: !0
          });
          var n = new XMLHttpRequest;
          n.addEventListener("load", (function() {
              var t;
              switch (n.status) {
              case 200:
                  var r = JSON.parse(n.responseText);
                  return void (location.href = r.url);
              case 404:
                  t = "This code is not valid. Check that you entered it correctly and try again.";
                  break;
              case 409:
                  t = "This code has already been used.";
                  break;
              case 410:
                  t = "This code has expired.";
                  break;
              default:
                  t = "A server error occurred. Please try again later."
              }
              e.setState({
                  loading: !1,
                  error: t
              })
          })), n.addEventListener("error", (function() {
              e.setState({
                  loading: !1,
                  error: "A server error occurred. Please try again later."
              })
          })), n.open("POST", "/transaction/coupon/start"), n.setRequestHeader("Content-Type", "application/json"), n.send(JSON.stringify(t))
      }, t.prototype.render = function(e) {
          var t = this,
              n = null;
          return void 0 !== this.state.error && (n = i.h("p", {
              class: "text-danger"
          }, this.state.error)), i.h(s.default, {
              id: "buy-promo-redeem-dialog"
          }, i.h("div", {
              class: "modal-body"
          }, i.h("div", {
              class: "text-center"
          }, i.h("h2", null, "Enter your promo code for ", e.itemName), n, i.h("p", null, i.h("input", {
              class: "form-control form-control-lg",
              value: this.state.code,
              required: !0,
              autofocus: !0,
              autocomplete: "off",
              autocorrect: "off",
              disabled: this.state.loading,
              onChange: function(e) {
                  return t.setState({
                      code: e.target.value
                  })
              }
          })))), i.h("div", {
              class: "modal-buttons"
          }, i.h("button", {
              class: "btn btn-secondary",
              onClick: function() {
                  return s.default.hide(!0)
              },
              disabled: this.state.loading
          }, "Cancel"), i.h("button", {
              class: "btn btn-primary",
              onClick: function(e) {
                  e.preventDefault(), t.go()
              },
              disabled: this.state.loading
          }, "Redeem")))
      }, t
  }(i.Component);
  t.default = a
}, function(e, t, n) {
  "use strict";
  var r = this && this.__awaiter || function(e, t, n, r) {
          return new (n || (n = Promise))((function(o, i) {
              function s(e) {
                  try {
                      l(r.next(e))
                  } catch (e) {
                      i(e)
                  }
              }
              function a(e) {
                  try {
                      l(r.throw(e))
                  } catch (e) {
                      i(e)
                  }
              }
              function l(e) {
                  var t;
                  e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                      e(t)
                  }))).then(s, a)
              }
              l((r = r.apply(e, t || [])).next())
          }))
      },
      o = this && this.__generator || function(e, t) {
          var n,
              r,
              o,
              i,
              s = {
                  label: 0,
                  sent: function() {
                      if (1 & o[0])
                          throw o[1];
                      return o[1]
                  },
                  trys: [],
                  ops: []
              };
          return i = {
              next: a(0),
              throw: a(1),
              return: a(2)
          }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
              return this
          }), i;
          function a(i) {
              return function(a) {
                  return function(i) {
                      if (n)
                          throw new TypeError("Generator is already executing.");
                      for (; s;)
                          try {
                              if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
                                  return o;
                              switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                              case 0:
                              case 1:
                                  o = i;
                                  break;
                              case 4:
                                  return s.label++, {
                                      value: i[1],
                                      done: !1
                                  };
                              case 5:
                                  s.label++, r = i[1], i = [0];
                                  continue;
                              case 7:
                                  i = s.ops.pop(), s.trys.pop();
                                  continue;
                              default:
                                  if (!(o = s.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                      s = 0;
                                      continue
                                  }
                                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                      s.label = i[1];
                                      break
                                  }
                                  if (6 === i[0] && s.label < o[1]) {
                                      s.label = o[1], o = i;
                                      break
                                  }
                                  if (o && s.label < o[2]) {
                                      s.label = o[2], s.ops.push(i);
                                      break
                                  }
                                  o[2] && s.ops.pop(), s.trys.pop();
                                  continue
                              }
                              i = t.call(e, s)
                          } catch (e) {
                              i = [6, e], r = 0
                          } finally {
                              n = o = 0
                          }
                      if (5 & i[0])
                          throw i[1];
                      return {
                          value: i[0] ? i[1] : void 0,
                          done: !0
                      }
                  }([i, a])
              }
          }
      };
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  var i = n(0),
      s = n(6);
  t.default = function(e) {
      var t = this;
      return void 0 === navigator.share ? i.h("span", null) : i.h("button", {
          id: "buy-share-link",
          class: "btn btn-link small",
          title: "Share",
          onClick: function(n) {
              return r(t, void 0, void 0, (function() {
                  return o(this, (function(t) {
                      switch (t.label) {
                      case 0:
                          n.preventDefault(), t.label = 1;
                      case 1:
                          return t.trys.push([1, 3, , 4]), [4, navigator.share({
                              text: e.title,
                              url: e.url
                          })];
                      case 2:
                          return t.sent(), [3, 4];
                      case 3:
                          return t.sent(), [3, 4];
                      case 4:
                          return [2]
                      }
                  }))
              }))
          }
      }, i.h(s.default, {
          name: "share",
          rightSpace: !0
      }), e.condensed ? "" : "Share")
  }
}, function(e, t, n) {
  var r,
      o,
      i;
  o = [n(1)], void 0 === (i = "function" == typeof (r = function(e) {
      var t = function() {
              if (e && e.fn && e.fn.select2 && e.fn.select2.amd)
                  var t = e.fn.select2.amd;
              return function() {
                  /**
* @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
* Released under MIT license, http://github.com/requirejs/almond/LICENSE
*/
                  var e,
                      n,
                      r;
                  t && t.requirejs || (t ? n = t : t = {}, function(t) {
                      var o,
                          i,
                          s,
                          a,
                          l = {},
                          c = {},
                          u = {},
                          d = {},
                          p = Object.prototype.hasOwnProperty,
                          h = [].slice,
                          f = /\.js$/;
                      function g(e, t) {
                          return p.call(e, t)
                      }
                      function m(e, t) {
                          var n,
                              r,
                              o,
                              i,
                              s,
                              a,
                              l,
                              c,
                              d,
                              p,
                              h,
                              g = t && t.split("/"),
                              m = u.map,
                              v = m && m["*"] || {};
                          if (e) {
                              for (s = (e = e.split("/")).length - 1, u.nodeIdCompat && f.test(e[s]) && (e[s] = e[s].replace(f, "")), "." === e[0].charAt(0) && g && (e = g.slice(0, g.length - 1).concat(e)), d = 0; d < e.length; d++)
                                  if ("." === (h = e[d]))
                                      e.splice(d, 1), d -= 1;
                                  else if (".." === h) {
                                      if (0 === d || 1 === d && ".." === e[2] || ".." === e[d - 1])
                                          continue;
                                      d > 0 && (e.splice(d - 1, 2), d -= 2)
                                  }
                              e = e.join("/")
                          }
                          if ((g || v) && m) {
                              for (d = (n = e.split("/")).length; d > 0; d -= 1) {
                                  if (r = n.slice(0, d).join("/"), g)
                                      for (p = g.length; p > 0; p -= 1)
                                          if ((o = m[g.slice(0, p).join("/")]) && (o = o[r])) {
                                              i = o, a = d;
                                              break
                                          }
                                  if (i)
                                      break;
                                  !l && v && v[r] && (l = v[r], c = d)
                              }
                              !i && l && (i = l, a = c), i && (n.splice(0, a, i), e = n.join("/"))
                          }
                          return e
                      }
                      function v(e, t) {
                          return function() {
                              var n = h.call(arguments, 0);
                              return "string" != typeof n[0] && 1 === n.length && n.push(null), i.apply(void 0, n.concat([e, t]))
                          }
                      }
                      function y(e) {
                          return function(t) {
                              l[e] = t
                          }
                      }
                      function _(e) {
                          if (g(c, e)) {
                              var t = c[e];
                              delete c[e], d[e] = !0, o.apply(void 0, t)
                          }
                          if (!g(l, e) && !g(d, e))
                              throw new Error("No " + e);
                          return l[e]
                      }
                      function b(e) {
                          var t,
                              n = e ? e.indexOf("!") : -1;
                          return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
                      }
                      function w(e) {
                          return e ? b(e) : []
                      }
                      function E(e) {
                          return function() {
                              return u && u.config && u.config[e] || {}
                          }
                      }
                      s = function(e, t) {
                          var n,
                              r,
                              o = b(e),
                              i = o[0],
                              s = t[1];
                          return e = o[1], i && (n = _(i = m(i, s))), i ? e = n && n.normalize ? n.normalize(e, (r = s, function(e) {
                              return m(e, r)
                          })) : m(e, s) : (i = (o = b(e = m(e, s)))[0], e = o[1], i && (n = _(i))), {
                              f: i ? i + "!" + e : e,
                              n: e,
                              pr: i,
                              p: n
                          }
                      }, a = {
                          require: function(e) {
                              return v(e)
                          },
                          exports: function(e) {
                              var t = l[e];
                              return void 0 !== t ? t : l[e] = {}
                          },
                          module: function(e) {
                              return {
                                  id: e,
                                  uri: "",
                                  exports: l[e],
                                  config: E(e)
                              }
                          }
                      }, o = function(e, t, n, r) {
                          var o,
                              i,
                              u,
                              p,
                              h,
                              f,
                              m,
                              b = [],
                              E = typeof n;
                          if (f = w(r = r || e), "undefined" === E || "function" === E) {
                              for (t = !t.length && n.length ? ["require", "exports", "module"] : t, h = 0; h < t.length; h += 1)
                                  if ("require" === (i = (p = s(t[h], f)).f))
                                      b[h] = a.require(e);
                                  else if ("exports" === i)
                                      b[h] = a.exports(e), m = !0;
                                  else if ("module" === i)
                                      o = b[h] = a.module(e);
                                  else if (g(l, i) || g(c, i) || g(d, i))
                                      b[h] = _(i);
                                  else {
                                      if (!p.p)
                                          throw new Error(e + " missing " + i);
                                      p.p.load(p.n, v(r, !0), y(i), {}), b[h] = l[i]
                                  }
                              u = n ? n.apply(l[e], b) : void 0, e && (o && void 0 !== o.exports && o.exports !== l[e] ? l[e] = o.exports : void 0 === u && m || (l[e] = u))
                          } else
                              e && (l[e] = n)
                      }, e = n = i = function(e, t, n, r, l) {
                          if ("string" == typeof e)
                              return a[e] ? a[e](t) : _(s(e, w(t)).f);
                          if (!e.splice) {
                              if ((u = e).deps && i(u.deps, u.callback), !t)
                                  return;
                              t.splice ? (e = t, t = n, n = null) : e = void 0
                          }
                          return t = t || function() {}, "function" == typeof n && (n = r, r = l), r ? o(void 0, e, t, n) : setTimeout((function() {
                              o(void 0, e, t, n)
                          }), 4), i
                      }, i.config = function(e) {
                          return i(e)
                      }, e._defined = l, (r = function(e, t, n) {
                          if ("string" != typeof e)
                              throw new Error("See almond README: incorrect module build, no module name");
                          t.splice || (n = t, t = []), g(l, e) || g(c, e) || (c[e] = [e, t, n])
                      }).amd = {
                          jQuery: !0
                      }
                  }(), t.requirejs = e, t.require = n, t.define = r)
              }(), t.define("almond", (function() {})), t.define("jquery", [], (function() {
                  var t = e || $;
                  return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
              })), t.define("select2/utils", ["jquery"], (function(e) {
                  var t = {};
                  function n(e) {
                      var t = e.prototype,
                          n = [];
                      for (var r in t)
                          "function" == typeof t[r] && "constructor" !== r && n.push(r);
                      return n
                  }
                  t.Extend = function(e, t) {
                      var n = {}.hasOwnProperty;
                      function r() {
                          this.constructor = e
                      }
                      for (var o in t)
                          n.call(t, o) && (e[o] = t[o]);
                      return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
                  }, t.Decorate = function(e, t) {
                      var r = n(t),
                          o = n(e);
                      function i() {
                          var n = Array.prototype.unshift,
                              r = t.prototype.constructor.length,
                              o = e.prototype.constructor;
                          r > 0 && (n.call(arguments, e.prototype.constructor), o = t.prototype.constructor), o.apply(this, arguments)
                      }
                      t.displayName = e.displayName, i.prototype = new function() {
                          this.constructor = i
                      };
                      for (var s = 0; s < o.length; s++) {
                          var a = o[s];
                          i.prototype[a] = e.prototype[a]
                      }
                      for (var l = function(e) {
                              var n = function() {};
                              e in i.prototype && (n = i.prototype[e]);
                              var r = t.prototype[e];
                              return function() {
                                  var e = Array.prototype.unshift;
                                  return e.call(arguments, n), r.apply(this, arguments)
                              }
                          }, c = 0; c < r.length; c++) {
                          var u = r[c];
                          i.prototype[u] = l(u)
                      }
                      return i
                  };
                  var r = function() {
                      this.listeners = {}
                  };
                  r.prototype.on = function(e, t) {
                      this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                  }, r.prototype.trigger = function(e) {
                      var t = Array.prototype.slice,
                          n = t.call(arguments, 1);
                      this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), n[0]._type = e, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                  }, r.prototype.invoke = function(e, t) {
                      for (var n = 0, r = e.length; n < r; n++)
                          e[n].apply(this, t)
                  }, t.Observable = r, t.generateChars = function(e) {
                      for (var t = "", n = 0; n < e; n++)
                          t += Math.floor(36 * Math.random()).toString(36);
                      return t
                  }, t.bind = function(e, t) {
                      return function() {
                          e.apply(t, arguments)
                      }
                  }, t._convertData = function(e) {
                      for (var t in e) {
                          var n = t.split("-"),
                              r = e;
                          if (1 !== n.length) {
                              for (var o = 0; o < n.length; o++) {
                                  var i = n[o];
                                  (i = i.substring(0, 1).toLowerCase() + i.substring(1)) in r || (r[i] = {}), o == n.length - 1 && (r[i] = e[t]), r = r[i]
                              }
                              delete e[t]
                          }
                      }
                      return e
                  }, t.hasScroll = function(t, n) {
                      var r = e(n),
                          o = n.style.overflowX,
                          i = n.style.overflowY;
                      return (o !== i || "hidden" !== i && "visible" !== i) && ("scroll" === o || "scroll" === i || r.innerHeight() < n.scrollHeight || r.innerWidth() < n.scrollWidth)
                  }, t.escapeMarkup = function(e) {
                      var t = {
                          "\\": "&#92;",
                          "&": "&amp;",
                          "<": "&lt;",
                          ">": "&gt;",
                          '"': "&quot;",
                          "'": "&#39;",
                          "/": "&#47;"
                      };
                      return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, (function(e) {
                          return t[e]
                      }))
                  }, t.appendMany = function(t, n) {
                      if ("1.7" === e.fn.jquery.substr(0, 3)) {
                          var r = e();
                          e.map(n, (function(e) {
                              r = r.add(e)
                          })), n = r
                      }
                      t.append(n)
                  }, t.__cache = {};
                  var o = 0;
                  return t.GetUniqueElementId = function(e) {
                      var t = e.getAttribute("data-select2-id");
                      return null == t && (e.id ? (t = e.id, e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++o), t = o.toString())), t
                  }, t.StoreData = function(e, n, r) {
                      var o = t.GetUniqueElementId(e);
                      t.__cache[o] || (t.__cache[o] = {}), t.__cache[o][n] = r
                  }, t.GetData = function(n, r) {
                      var o = t.GetUniqueElementId(n);
                      return r ? t.__cache[o] && null != t.__cache[o][r] ? t.__cache[o][r] : e(n).data(r) : t.__cache[o]
                  }, t.RemoveData = function(e) {
                      var n = t.GetUniqueElementId(e);
                      null != t.__cache[n] && delete t.__cache[n], e.removeAttribute("data-select2-id")
                  }, t
              })), t.define("select2/results", ["jquery", "./utils"], (function(e, t) {
                  function n(e, t, r) {
                      this.$element = e, this.data = r, this.options = t, n.__super__.constructor.call(this)
                  }
                  return t.Extend(n, t.Observable), n.prototype.render = function() {
                      var t = e('<ul class="select2-results__options" role="listbox"></ul>');
                      return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t
                  }, n.prototype.clear = function() {
                      this.$results.empty()
                  }, n.prototype.displayMessage = function(t) {
                      var n = this.options.get("escapeMarkup");
                      this.clear(), this.hideLoading();
                      var r = e('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
                          o = this.options.get("translations").get(t.message);
                      r.append(n(o(t.args))), r[0].className += " select2-results__message", this.$results.append(r)
                  }, n.prototype.hideMessages = function() {
                      this.$results.find(".select2-results__message").remove()
                  }, n.prototype.append = function(e) {
                      this.hideLoading();
                      var t = [];
                      if (null != e.results && 0 !== e.results.length) {
                          e.results = this.sort(e.results);
                          for (var n = 0; n < e.results.length; n++) {
                              var r = e.results[n],
                                  o = this.option(r);
                              t.push(o)
                          }
                          this.$results.append(t)
                      } else
                          0 === this.$results.children().length && this.trigger("results:message", {
                              message: "noResults"
                          })
                  }, n.prototype.position = function(e, t) {
                      t.find(".select2-results").append(e)
                  }, n.prototype.sort = function(e) {
                      return this.options.get("sorter")(e)
                  }, n.prototype.highlightFirstItem = function() {
                      var e = this.$results.find(".select2-results__option[aria-selected]"),
                          t = e.filter("[aria-selected=true]");
                      t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
                  }, n.prototype.setClasses = function() {
                      var n = this;
                      this.data.current((function(r) {
                          var o = e.map(r, (function(e) {
                              return e.id.toString()
                          }));
                          n.$results.find(".select2-results__option[aria-selected]").each((function() {
                              var n = e(this),
                                  r = t.GetData(this, "data"),
                                  i = "" + r.id;
                              null != r.element && r.element.selected || null == r.element && e.inArray(i, o) > -1 ? n.attr("aria-selected", "true") : n.attr("aria-selected", "false")
                          }))
                      }))
                  }, n.prototype.showLoading = function(e) {
                      this.hideLoading();
                      var t = {
                              disabled: !0,
                              loading: !0,
                              text: this.options.get("translations").get("searching")(e)
                          },
                          n = this.option(t);
                      n.className += " loading-results", this.$results.prepend(n)
                  }, n.prototype.hideLoading = function() {
                      this.$results.find(".loading-results").remove()
                  }, n.prototype.option = function(n) {
                      var r = document.createElement("li");
                      r.className = "select2-results__option";
                      var o = {
                              role: "option",
                              "aria-selected": "false"
                          },
                          i = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
                      for (var s in (null != n.element && i.call(n.element, ":disabled") || null == n.element && n.disabled) && (delete o["aria-selected"], o["aria-disabled"] = "true"), null == n.id && delete o["aria-selected"], null != n._resultId && (r.id = n._resultId), n.title && (r.title = n.title), n.children && (o.role = "group", o["aria-label"] = n.text, delete o["aria-selected"]), o) {
                          var a = o[s];
                          r.setAttribute(s, a)
                      }
                      if (n.children) {
                          var l = e(r),
                              c = document.createElement("strong");
                          c.className = "select2-results__group", e(c), this.template(n, c);
                          for (var u = [], d = 0; d < n.children.length; d++) {
                              var p = n.children[d],
                                  h = this.option(p);
                              u.push(h)
                          }
                          var f = e("<ul></ul>", {
                              class: "select2-results__options select2-results__options--nested"
                          });
                          f.append(u), l.append(c), l.append(f)
                      } else
                          this.template(n, r);
                      return t.StoreData(r, "data", n), r
                  }, n.prototype.bind = function(n, r) {
                      var o = this,
                          i = n.id + "-results";
                      this.$results.attr("id", i), n.on("results:all", (function(e) {
                          o.clear(), o.append(e.data), n.isOpen() && (o.setClasses(), o.highlightFirstItem())
                      })), n.on("results:append", (function(e) {
                          o.append(e.data), n.isOpen() && o.setClasses()
                      })), n.on("query", (function(e) {
                          o.hideMessages(), o.showLoading(e)
                      })), n.on("select", (function() {
                          n.isOpen() && (o.setClasses(), o.options.get("scrollAfterSelect") && o.highlightFirstItem())
                      })), n.on("unselect", (function() {
                          n.isOpen() && (o.setClasses(), o.options.get("scrollAfterSelect") && o.highlightFirstItem())
                      })), n.on("open", (function() {
                          o.$results.attr("aria-expanded", "true"), o.$results.attr("aria-hidden", "false"), o.setClasses(), o.ensureHighlightVisible()
                      })), n.on("close", (function() {
                          o.$results.attr("aria-expanded", "false"), o.$results.attr("aria-hidden", "true"), o.$results.removeAttr("aria-activedescendant")
                      })), n.on("results:toggle", (function() {
                          var e = o.getHighlightedResults();
                          0 !== e.length && e.trigger("mouseup")
                      })), n.on("results:select", (function() {
                          var e = o.getHighlightedResults();
                          if (0 !== e.length) {
                              var n = t.GetData(e[0], "data");
                              "true" == e.attr("aria-selected") ? o.trigger("close", {}) : o.trigger("select", {
                                  data: n
                              })
                          }
                      })), n.on("results:previous", (function() {
                          var e = o.getHighlightedResults(),
                              t = o.$results.find("[aria-selected]"),
                              n = t.index(e);
                          if (!(n <= 0)) {
                              var r = n - 1;
                              0 === e.length && (r = 0);
                              var i = t.eq(r);
                              i.trigger("mouseenter");
                              var s = o.$results.offset().top,
                                  a = i.offset().top,
                                  l = o.$results.scrollTop() + (a - s);
                              0 === r ? o.$results.scrollTop(0) : a - s < 0 && o.$results.scrollTop(l)
                          }
                      })), n.on("results:next", (function() {
                          var e = o.getHighlightedResults(),
                              t = o.$results.find("[aria-selected]"),
                              n = t.index(e) + 1;
                          if (!(n >= t.length)) {
                              var r = t.eq(n);
                              r.trigger("mouseenter");
                              var i = o.$results.offset().top + o.$results.outerHeight(!1),
                                  s = r.offset().top + r.outerHeight(!1),
                                  a = o.$results.scrollTop() + s - i;
                              0 === n ? o.$results.scrollTop(0) : s > i && o.$results.scrollTop(a)
                          }
                      })), n.on("results:focus", (function(e) {
                          e.element.addClass("select2-results__option--highlighted")
                      })), n.on("results:message", (function(e) {
                          o.displayMessage(e)
                      })), e.fn.mousewheel && this.$results.on("mousewheel", (function(e) {
                          var t = o.$results.scrollTop(),
                              n = o.$results.get(0).scrollHeight - t + e.deltaY,
                              r = e.deltaY > 0 && t - e.deltaY <= 0,
                              i = e.deltaY < 0 && n <= o.$results.height();
                          r ? (o.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : i && (o.$results.scrollTop(o.$results.get(0).scrollHeight - o.$results.height()), e.preventDefault(), e.stopPropagation())
                      })), this.$results.on("mouseup", ".select2-results__option[aria-selected]", (function(n) {
                          var r = e(this),
                              i = t.GetData(this, "data");
                          "true" !== r.attr("aria-selected") ? o.trigger("select", {
                              originalEvent: n,
                              data: i
                          }) : o.options.get("multiple") ? o.trigger("unselect", {
                              originalEvent: n,
                              data: i
                          }) : o.trigger("close", {})
                      })), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", (function(n) {
                          var r = t.GetData(this, "data");
                          o.getHighlightedResults().removeClass("select2-results__option--highlighted"), o.trigger("results:focus", {
                              data: r,
                              element: e(this)
                          })
                      }))
                  }, n.prototype.getHighlightedResults = function() {
                      return this.$results.find(".select2-results__option--highlighted")
                  }, n.prototype.destroy = function() {
                      this.$results.remove()
                  }, n.prototype.ensureHighlightVisible = function() {
                      var e = this.getHighlightedResults();
                      if (0 !== e.length) {
                          var t = this.$results.find("[aria-selected]").index(e),
                              n = this.$results.offset().top,
                              r = e.offset().top,
                              o = this.$results.scrollTop() + (r - n),
                              i = r - n;
                          o -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (i > this.$results.outerHeight() || i < 0) && this.$results.scrollTop(o)
                      }
                  }, n.prototype.template = function(t, n) {
                      var r = this.options.get("templateResult"),
                          o = this.options.get("escapeMarkup"),
                          i = r(t, n);
                      null == i ? n.style.display = "none" : "string" == typeof i ? n.innerHTML = o(i) : e(n).append(i)
                  }, n
              })), t.define("select2/keys", [], (function() {
                  return {
                      BACKSPACE: 8,
                      TAB: 9,
                      ENTER: 13,
                      SHIFT: 16,
                      CTRL: 17,
                      ALT: 18,
                      ESC: 27,
                      SPACE: 32,
                      PAGE_UP: 33,
                      PAGE_DOWN: 34,
                      END: 35,
                      HOME: 36,
                      LEFT: 37,
                      UP: 38,
                      RIGHT: 39,
                      DOWN: 40,
                      DELETE: 46
                  }
              })), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], (function(e, t, n) {
                  function r(e, t) {
                      this.$element = e, this.options = t, r.__super__.constructor.call(this)
                  }
                  return t.Extend(r, t.Observable), r.prototype.render = function() {
                      var n = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                      return this._tabindex = 0, null != t.GetData(this.$element[0], "old-tabindex") ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), n.attr("title", this.$element.attr("title")), n.attr("tabindex", this._tabindex), n.attr("aria-disabled", "false"), this.$selection = n, n
                  }, r.prototype.bind = function(e, t) {
                      var r = this,
                          o = e.id + "-results";
                      this.container = e, this.$selection.on("focus", (function(e) {
                          r.trigger("focus", e)
                      })), this.$selection.on("blur", (function(e) {
                          r._handleBlur(e)
                      })), this.$selection.on("keydown", (function(e) {
                          r.trigger("keypress", e), e.which === n.SPACE && e.preventDefault()
                      })), e.on("results:focus", (function(e) {
                          r.$selection.attr("aria-activedescendant", e.data._resultId)
                      })), e.on("selection:update", (function(e) {
                          r.update(e.data)
                      })), e.on("open", (function() {
                          r.$selection.attr("aria-expanded", "true"), r.$selection.attr("aria-owns", o), r._attachCloseHandler(e)
                      })), e.on("close", (function() {
                          r.$selection.attr("aria-expanded", "false"), r.$selection.removeAttr("aria-activedescendant"), r.$selection.removeAttr("aria-owns"), r.$selection.trigger("focus"), r._detachCloseHandler(e)
                      })), e.on("enable", (function() {
                          r.$selection.attr("tabindex", r._tabindex), r.$selection.attr("aria-disabled", "false")
                      })), e.on("disable", (function() {
                          r.$selection.attr("tabindex", "-1"), r.$selection.attr("aria-disabled", "true")
                      }))
                  }, r.prototype._handleBlur = function(t) {
                      var n = this;
                      window.setTimeout((function() {
                          document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
                      }), 1)
                  }, r.prototype._attachCloseHandler = function(n) {
                      e(document.body).on("mousedown.select2." + n.id, (function(n) {
                          var r = e(n.target).closest(".select2");
                          e(".select2.select2-container--open").each((function() {
                              this != r[0] && t.GetData(this, "element").select2("close")
                          }))
                      }))
                  }, r.prototype._detachCloseHandler = function(t) {
                      e(document.body).off("mousedown.select2." + t.id)
                  }, r.prototype.position = function(e, t) {
                      t.find(".selection").append(e)
                  }, r.prototype.destroy = function() {
                      this._detachCloseHandler(this.container)
                  }, r.prototype.update = function(e) {
                      throw new Error("The `update` method must be defined in child classes.")
                  }, r.prototype.isEnabled = function() {
                      return !this.isDisabled()
                  }, r.prototype.isDisabled = function() {
                      return this.options.get("disabled")
                  }, r
              })), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], (function(e, t, n, r) {
                  function o() {
                      o.__super__.constructor.apply(this, arguments)
                  }
                  return n.Extend(o, t), o.prototype.render = function() {
                      var e = o.__super__.render.call(this);
                      return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
                  }, o.prototype.bind = function(e, t) {
                      var n = this;
                      o.__super__.bind.apply(this, arguments);
                      var r = e.id + "-container";
                      this.$selection.find(".select2-selection__rendered").attr("id", r).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", r), this.$selection.on("mousedown", (function(e) {
                          1 === e.which && n.trigger("toggle", {
                              originalEvent: e
                          })
                      })), this.$selection.on("focus", (function(e) {})), this.$selection.on("blur", (function(e) {})), e.on("focus", (function(t) {
                          e.isOpen() || n.$selection.trigger("focus")
                      }))
                  }, o.prototype.clear = function() {
                      var e = this.$selection.find(".select2-selection__rendered");
                      e.empty(), e.removeAttr("title")
                  }, o.prototype.display = function(e, t) {
                      var n = this.options.get("templateSelection");
                      return this.options.get("escapeMarkup")(n(e, t))
                  }, o.prototype.selectionContainer = function() {
                      return e("<span></span>")
                  }, o.prototype.update = function(e) {
                      if (0 !== e.length) {
                          var t = e[0],
                              n = this.$selection.find(".select2-selection__rendered"),
                              r = this.display(t, n);
                          n.empty().append(r);
                          var o = t.title || t.text;
                          o ? n.attr("title", o) : n.removeAttr("title")
                      } else
                          this.clear()
                  }, o
              })), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], (function(e, t, n) {
                  function r(e, t) {
                      r.__super__.constructor.apply(this, arguments)
                  }
                  return n.Extend(r, t), r.prototype.render = function() {
                      var e = r.__super__.render.call(this);
                      return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
                  }, r.prototype.bind = function(t, o) {
                      var i = this;
                      r.__super__.bind.apply(this, arguments), this.$selection.on("click", (function(e) {
                          i.trigger("toggle", {
                              originalEvent: e
                          })
                      })), this.$selection.on("click", ".select2-selection__choice__remove", (function(t) {
                          if (!i.isDisabled()) {
                              var r = e(this).parent(),
                                  o = n.GetData(r[0], "data");
                              i.trigger("unselect", {
                                  originalEvent: t,
                                  data: o
                              })
                          }
                      }))
                  }, r.prototype.clear = function() {
                      var e = this.$selection.find(".select2-selection__rendered");
                      e.empty(), e.removeAttr("title")
                  }, r.prototype.display = function(e, t) {
                      var n = this.options.get("templateSelection");
                      return this.options.get("escapeMarkup")(n(e, t))
                  }, r.prototype.selectionContainer = function() {
                      return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                  }, r.prototype.update = function(e) {
                      if (this.clear(), 0 !== e.length) {
                          for (var t = [], r = 0; r < e.length; r++) {
                              var o = e[r],
                                  i = this.selectionContainer(),
                                  s = this.display(o, i);
                              i.append(s);
                              var a = o.title || o.text;
                              a && i.attr("title", a), n.StoreData(i[0], "data", o), t.push(i)
                          }
                          var l = this.$selection.find(".select2-selection__rendered");
                          n.appendMany(l, t)
                      }
                  }, r
              })), t.define("select2/selection/placeholder", ["../utils"], (function(e) {
                  function t(e, t, n) {
                      this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
                  }
                  return t.prototype.normalizePlaceholder = function(e, t) {
                      return "string" == typeof t && (t = {
                          id: "",
                          text: t
                      }), t
                  }, t.prototype.createPlaceholder = function(e, t) {
                      var n = this.selectionContainer();
                      return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
                  }, t.prototype.update = function(e, t) {
                      var n = 1 == t.length && t[0].id != this.placeholder.id;
                      if (t.length > 1 || n)
                          return e.call(this, t);
                      this.clear();
                      var r = this.createPlaceholder(this.placeholder);
                      this.$selection.find(".select2-selection__rendered").append(r)
                  }, t
              })), t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], (function(e, t, n) {
                  function r() {}
                  return r.prototype.bind = function(e, t, n) {
                      var r = this;
                      e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", (function(e) {
                          r._handleClear(e)
                      })), t.on("keypress", (function(e) {
                          r._handleKeyboardClear(e, t)
                      }))
                  }, r.prototype._handleClear = function(e, t) {
                      if (!this.isDisabled()) {
                          var r = this.$selection.find(".select2-selection__clear");
                          if (0 !== r.length) {
                              t.stopPropagation();
                              var o = n.GetData(r[0], "data"),
                                  i = this.$element.val();
                              this.$element.val(this.placeholder.id);
                              var s = {
                                  data: o
                              };
                              if (this.trigger("clear", s), s.prevented)
                                  this.$element.val(i);
                              else {
                                  for (var a = 0; a < o.length; a++)
                                      if (s = {
                                          data: o[a]
                                      }, this.trigger("unselect", s), s.prevented)
                                          return void this.$element.val(i);
                                  this.$element.trigger("input").trigger("change"), this.trigger("toggle", {})
                              }
                          }
                      }
                  }, r.prototype._handleKeyboardClear = function(e, n, r) {
                      r.isOpen() || n.which != t.DELETE && n.which != t.BACKSPACE || this._handleClear(n)
                  }, r.prototype.update = function(t, r) {
                      if (t.call(this, r), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === r.length)) {
                          var o = this.options.get("translations").get("removeAllItems"),
                              i = e('<span class="select2-selection__clear" title="' + o() + '">&times;</span>');
                          n.StoreData(i[0], "data", r), this.$selection.find(".select2-selection__rendered").prepend(i)
                      }
                  }, r
              })), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], (function(e, t, n) {
                  function r(e, t, n) {
                      e.call(this, t, n)
                  }
                  return r.prototype.render = function(t) {
                      var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');
                      this.$searchContainer = n, this.$search = n.find("input");
                      var r = t.call(this);
                      return this._transferTabIndex(), r
                  }, r.prototype.bind = function(e, r, o) {
                      var i = this,
                          s = r.id + "-results";
                      e.call(this, r, o), r.on("open", (function() {
                          i.$search.attr("aria-controls", s), i.$search.trigger("focus")
                      })), r.on("close", (function() {
                          i.$search.val(""), i.$search.removeAttr("aria-controls"), i.$search.removeAttr("aria-activedescendant"), i.$search.trigger("focus")
                      })), r.on("enable", (function() {
                          i.$search.prop("disabled", !1), i._transferTabIndex()
                      })), r.on("disable", (function() {
                          i.$search.prop("disabled", !0)
                      })), r.on("focus", (function(e) {
                          i.$search.trigger("focus")
                      })), r.on("results:focus", (function(e) {
                          e.data._resultId ? i.$search.attr("aria-activedescendant", e.data._resultId) : i.$search.removeAttr("aria-activedescendant")
                      })), this.$selection.on("focusin", ".select2-search--inline", (function(e) {
                          i.trigger("focus", e)
                      })), this.$selection.on("focusout", ".select2-search--inline", (function(e) {
                          i._handleBlur(e)
                      })), this.$selection.on("keydown", ".select2-search--inline", (function(e) {
                          if (e.stopPropagation(), i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented(), e.which === n.BACKSPACE && "" === i.$search.val()) {
                              var r = i.$searchContainer.prev(".select2-selection__choice");
                              if (r.length > 0) {
                                  var o = t.GetData(r[0], "data");
                                  i.searchRemoveChoice(o), e.preventDefault()
                              }
                          }
                      })), this.$selection.on("click", ".select2-search--inline", (function(e) {
                          i.$search.val() && e.stopPropagation()
                      }));
                      var a = document.documentMode,
                          l = a && a <= 11;
                      this.$selection.on("input.searchcheck", ".select2-search--inline", (function(e) {
                          l ? i.$selection.off("input.search input.searchcheck") : i.$selection.off("keyup.search")
                      })), this.$selection.on("keyup.search input.search", ".select2-search--inline", (function(e) {
                          if (l && "input" === e.type)
                              i.$selection.off("input.search input.searchcheck");
                          else {
                              var t = e.which;
                              t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && i.handleSearch(e)
                          }
                      }))
                  }, r.prototype._transferTabIndex = function(e) {
                      this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                  }, r.prototype.createPlaceholder = function(e, t) {
                      this.$search.attr("placeholder", t.text)
                  }, r.prototype.update = function(e, t) {
                      var n = this.$search[0] == document.activeElement;
                      this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.trigger("focus")
                  }, r.prototype.handleSearch = function() {
                      if (this.resizeSearch(), !this._keyUpPrevented) {
                          var e = this.$search.val();
                          this.trigger("query", {
                              term: e
                          })
                      }
                      this._keyUpPrevented = !1
                  }, r.prototype.searchRemoveChoice = function(e, t) {
                      this.trigger("unselect", {
                          data: t
                      }), this.$search.val(t.text), this.handleSearch()
                  }, r.prototype.resizeSearch = function() {
                      this.$search.css("width", "25px");
                      var e = "";
                      e = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").width() : .75 * (this.$search.val().length + 1) + "em", this.$search.css("width", e)
                  }, r
              })), t.define("select2/selection/eventRelay", ["jquery"], (function(e) {
                  function t() {}
                  return t.prototype.bind = function(t, n, r) {
                      var o = this,
                          i = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                          s = ["opening", "closing", "selecting", "unselecting", "clearing"];
                      t.call(this, n, r), n.on("*", (function(t, n) {
                          if (-1 !== e.inArray(t, i)) {
                              n = n || {};
                              var r = e.Event("select2:" + t, {
                                  params: n
                              });
                              o.$element.trigger(r), -1 !== e.inArray(t, s) && (n.prevented = r.isDefaultPrevented())
                          }
                      }))
                  }, t
              })), t.define("select2/translation", ["jquery", "require"], (function(e, t) {
                  function n(e) {
                      this.dict = e || {}
                  }
                  return n.prototype.all = function() {
                      return this.dict
                  }, n.prototype.get = function(e) {
                      return this.dict[e]
                  }, n.prototype.extend = function(t) {
                      this.dict = e.extend({}, t.all(), this.dict)
                  }, n._cache = {}, n.loadPath = function(e) {
                      if (!(e in n._cache)) {
                          var r = t(e);
                          n._cache[e] = r
                      }
                      return new n(n._cache[e])
                  }, n
              })), t.define("select2/diacritics", [], (function() {
                  return {
                      "Ⓐ": "A",
                      "Ａ": "A",
                      "À": "A",
                      "Á": "A",
                      "Â": "A",
                      "Ầ": "A",
                      "Ấ": "A",
                      "Ẫ": "A",
                      "Ẩ": "A",
                      "Ã": "A",
                      "Ā": "A",
                      "Ă": "A",
                      "Ằ": "A",
                      "Ắ": "A",
                      "Ẵ": "A",
                      "Ẳ": "A",
                      "Ȧ": "A",
                      "Ǡ": "A",
                      "Ä": "A",
                      "Ǟ": "A",
                      "Ả": "A",
                      "Å": "A",
                      "Ǻ": "A",
                      "Ǎ": "A",
                      "Ȁ": "A",
                      "Ȃ": "A",
                      "Ạ": "A",
                      "Ậ": "A",
                      "Ặ": "A",
                      "Ḁ": "A",
                      "Ą": "A",
                      "Ⱥ": "A",
                      "Ɐ": "A",
                      "Ꜳ": "AA",
                      "Æ": "AE",
                      "Ǽ": "AE",
                      "Ǣ": "AE",
                      "Ꜵ": "AO",
                      "Ꜷ": "AU",
                      "Ꜹ": "AV",
                      "Ꜻ": "AV",
                      "Ꜽ": "AY",
                      "Ⓑ": "B",
                      "Ｂ": "B",
                      "Ḃ": "B",
                      "Ḅ": "B",
                      "Ḇ": "B",
                      "Ƀ": "B",
                      "Ƃ": "B",
                      "Ɓ": "B",
                      "Ⓒ": "C",
                      "Ｃ": "C",
                      "Ć": "C",
                      "Ĉ": "C",
                      "Ċ": "C",
                      "Č": "C",
                      "Ç": "C",
                      "Ḉ": "C",
                      "Ƈ": "C",
                      "Ȼ": "C",
                      "Ꜿ": "C",
                      "Ⓓ": "D",
                      "Ｄ": "D",
                      "Ḋ": "D",
                      "Ď": "D",
                      "Ḍ": "D",
                      "Ḑ": "D",
                      "Ḓ": "D",
                      "Ḏ": "D",
                      "Đ": "D",
                      "Ƌ": "D",
                      "Ɗ": "D",
                      "Ɖ": "D",
                      "Ꝺ": "D",
                      "Ǳ": "DZ",
                      "Ǆ": "DZ",
                      "ǲ": "Dz",
                      "ǅ": "Dz",
                      "Ⓔ": "E",
                      "Ｅ": "E",
                      "È": "E",
                      "É": "E",
                      "Ê": "E",
                      "Ề": "E",
                      "Ế": "E",
                      "Ễ": "E",
                      "Ể": "E",
                      "Ẽ": "E",
                      "Ē": "E",
                      "Ḕ": "E",
                      "Ḗ": "E",
                      "Ĕ": "E",
                      "Ė": "E",
                      "Ë": "E",
                      "Ẻ": "E",
                      "Ě": "E",
                      "Ȅ": "E",
                      "Ȇ": "E",
                      "Ẹ": "E",
                      "Ệ": "E",
                      "Ȩ": "E",
                      "Ḝ": "E",
                      "Ę": "E",
                      "Ḙ": "E",
                      "Ḛ": "E",
                      "Ɛ": "E",
                      "Ǝ": "E",
                      "Ⓕ": "F",
                      "Ｆ": "F",
                      "Ḟ": "F",
                      "Ƒ": "F",
                      "Ꝼ": "F",
                      "Ⓖ": "G",
                      "Ｇ": "G",
                      "Ǵ": "G",
                      "Ĝ": "G",
                      "Ḡ": "G",
                      "Ğ": "G",
                      "Ġ": "G",
                      "Ǧ": "G",
                      "Ģ": "G",
                      "Ǥ": "G",
                      "Ɠ": "G",
                      "Ꞡ": "G",
                      "Ᵹ": "G",
                      "Ꝿ": "G",
                      "Ⓗ": "H",
                      "Ｈ": "H",
                      "Ĥ": "H",
                      "Ḣ": "H",
                      "Ḧ": "H",
                      "Ȟ": "H",
                      "Ḥ": "H",
                      "Ḩ": "H",
                      "Ḫ": "H",
                      "Ħ": "H",
                      "Ⱨ": "H",
                      "Ⱶ": "H",
                      "Ɥ": "H",
                      "Ⓘ": "I",
                      "Ｉ": "I",
                      "Ì": "I",
                      "Í": "I",
                      "Î": "I",
                      "Ĩ": "I",
                      "Ī": "I",
                      "Ĭ": "I",
                      "İ": "I",
                      "Ï": "I",
                      "Ḯ": "I",
                      "Ỉ": "I",
                      "Ǐ": "I",
                      "Ȉ": "I",
                      "Ȋ": "I",
                      "Ị": "I",
                      "Į": "I",
                      "Ḭ": "I",
                      "Ɨ": "I",
                      "Ⓙ": "J",
                      "Ｊ": "J",
                      "Ĵ": "J",
                      "Ɉ": "J",
                      "Ⓚ": "K",
                      "Ｋ": "K",
                      "Ḱ": "K",
                      "Ǩ": "K",
                      "Ḳ": "K",
                      "Ķ": "K",
                      "Ḵ": "K",
                      "Ƙ": "K",
                      "Ⱪ": "K",
                      "Ꝁ": "K",
                      "Ꝃ": "K",
                      "Ꝅ": "K",
                      "Ꞣ": "K",
                      "Ⓛ": "L",
                      "Ｌ": "L",
                      "Ŀ": "L",
                      "Ĺ": "L",
                      "Ľ": "L",
                      "Ḷ": "L",
                      "Ḹ": "L",
                      "Ļ": "L",
                      "Ḽ": "L",
                      "Ḻ": "L",
                      "Ł": "L",
                      "Ƚ": "L",
                      "Ɫ": "L",
                      "Ⱡ": "L",
                      "Ꝉ": "L",
                      "Ꝇ": "L",
                      "Ꞁ": "L",
                      "Ǉ": "LJ",
                      "ǈ": "Lj",
                      "Ⓜ": "M",
                      "Ｍ": "M",
                      "Ḿ": "M",
                      "Ṁ": "M",
                      "Ṃ": "M",
                      "Ɱ": "M",
                      "Ɯ": "M",
                      "Ⓝ": "N",
                      "Ｎ": "N",
                      "Ǹ": "N",
                      "Ń": "N",
                      "Ñ": "N",
                      "Ṅ": "N",
                      "Ň": "N",
                      "Ṇ": "N",
                      "Ņ": "N",
                      "Ṋ": "N",
                      "Ṉ": "N",
                      "Ƞ": "N",
                      "Ɲ": "N",
                      "Ꞑ": "N",
                      "Ꞥ": "N",
                      "Ǌ": "NJ",
                      "ǋ": "Nj",
                      "Ⓞ": "O",
                      "Ｏ": "O",
                      "Ò": "O",
                      "Ó": "O",
                      "Ô": "O",
                      "Ồ": "O",
                      "Ố": "O",
                      "Ỗ": "O",
                      "Ổ": "O",
                      "Õ": "O",
                      "Ṍ": "O",
                      "Ȭ": "O",
                      "Ṏ": "O",
                      "Ō": "O",
                      "Ṑ": "O",
                      "Ṓ": "O",
                      "Ŏ": "O",
                      "Ȯ": "O",
                      "Ȱ": "O",
                      "Ö": "O",
                      "Ȫ": "O",
                      "Ỏ": "O",
                      "Ő": "O",
                      "Ǒ": "O",
                      "Ȍ": "O",
                      "Ȏ": "O",
                      "Ơ": "O",
                      "Ờ": "O",
                      "Ớ": "O",
                      "Ỡ": "O",
                      "Ở": "O",
                      "Ợ": "O",
                      "Ọ": "O",
                      "Ộ": "O",
                      "Ǫ": "O",
                      "Ǭ": "O",
                      "Ø": "O",
                      "Ǿ": "O",
                      "Ɔ": "O",
                      "Ɵ": "O",
                      "Ꝋ": "O",
                      "Ꝍ": "O",
                      "Œ": "OE",
                      "Ƣ": "OI",
                      "Ꝏ": "OO",
                      "Ȣ": "OU",
                      "Ⓟ": "P",
                      "Ｐ": "P",
                      "Ṕ": "P",
                      "Ṗ": "P",
                      "Ƥ": "P",
                      "Ᵽ": "P",
                      "Ꝑ": "P",
                      "Ꝓ": "P",
                      "Ꝕ": "P",
                      "Ⓠ": "Q",
                      "Ｑ": "Q",
                      "Ꝗ": "Q",
                      "Ꝙ": "Q",
                      "Ɋ": "Q",
                      "Ⓡ": "R",
                      "Ｒ": "R",
                      "Ŕ": "R",
                      "Ṙ": "R",
                      "Ř": "R",
                      "Ȑ": "R",
                      "Ȓ": "R",
                      "Ṛ": "R",
                      "Ṝ": "R",
                      "Ŗ": "R",
                      "Ṟ": "R",
                      "Ɍ": "R",
                      "Ɽ": "R",
                      "Ꝛ": "R",
                      "Ꞧ": "R",
                      "Ꞃ": "R",
                      "Ⓢ": "S",
                      "Ｓ": "S",
                      "ẞ": "S",
                      "Ś": "S",
                      "Ṥ": "S",
                      "Ŝ": "S",
                      "Ṡ": "S",
                      "Š": "S",
                      "Ṧ": "S",
                      "Ṣ": "S",
                      "Ṩ": "S",
                      "Ș": "S",
                      "Ş": "S",
                      "Ȿ": "S",
                      "Ꞩ": "S",
                      "Ꞅ": "S",
                      "Ⓣ": "T",
                      "Ｔ": "T",
                      "Ṫ": "T",
                      "Ť": "T",
                      "Ṭ": "T",
                      "Ț": "T",
                      "Ţ": "T",
                      "Ṱ": "T",
                      "Ṯ": "T",
                      "Ŧ": "T",
                      "Ƭ": "T",
                      "Ʈ": "T",
                      "Ⱦ": "T",
                      "Ꞇ": "T",
                      "Ꜩ": "TZ",
                      "Ⓤ": "U",
                      "Ｕ": "U",
                      "Ù": "U",
                      "Ú": "U",
                      "Û": "U",
                      "Ũ": "U",
                      "Ṹ": "U",
                      "Ū": "U",
                      "Ṻ": "U",
                      "Ŭ": "U",
                      "Ü": "U",
                      "Ǜ": "U",
                      "Ǘ": "U",
                      "Ǖ": "U",
                      "Ǚ": "U",
                      "Ủ": "U",
                      "Ů": "U",
                      "Ű": "U",
                      "Ǔ": "U",
                      "Ȕ": "U",
                      "Ȗ": "U",
                      "Ư": "U",
                      "Ừ": "U",
                      "Ứ": "U",
                      "Ữ": "U",
                      "Ử": "U",
                      "Ự": "U",
                      "Ụ": "U",
                      "Ṳ": "U",
                      "Ų": "U",
                      "Ṷ": "U",
                      "Ṵ": "U",
                      "Ʉ": "U",
                      "Ⓥ": "V",
                      "Ｖ": "V",
                      "Ṽ": "V",
                      "Ṿ": "V",
                      "Ʋ": "V",
                      "Ꝟ": "V",
                      "Ʌ": "V",
                      "Ꝡ": "VY",
                      "Ⓦ": "W",
                      "Ｗ": "W",
                      "Ẁ": "W",
                      "Ẃ": "W",
                      "Ŵ": "W",
                      "Ẇ": "W",
                      "Ẅ": "W",
                      "Ẉ": "W",
                      "Ⱳ": "W",
                      "Ⓧ": "X",
                      "Ｘ": "X",
                      "Ẋ": "X",
                      "Ẍ": "X",
                      "Ⓨ": "Y",
                      "Ｙ": "Y",
                      "Ỳ": "Y",
                      "Ý": "Y",
                      "Ŷ": "Y",
                      "Ỹ": "Y",
                      "Ȳ": "Y",
                      "Ẏ": "Y",
                      "Ÿ": "Y",
                      "Ỷ": "Y",
                      "Ỵ": "Y",
                      "Ƴ": "Y",
                      "Ɏ": "Y",
                      "Ỿ": "Y",
                      "Ⓩ": "Z",
                      "Ｚ": "Z",
                      "Ź": "Z",
                      "Ẑ": "Z",
                      "Ż": "Z",
                      "Ž": "Z",
                      "Ẓ": "Z",
                      "Ẕ": "Z",
                      "Ƶ": "Z",
                      "Ȥ": "Z",
                      "Ɀ": "Z",
                      "Ⱬ": "Z",
                      "Ꝣ": "Z",
                      "ⓐ": "a",
                      "ａ": "a",
                      "ẚ": "a",
                      "à": "a",
                      "á": "a",
                      "â": "a",
                      "ầ": "a",
                      "ấ": "a",
                      "ẫ": "a",
                      "ẩ": "a",
                      "ã": "a",
                      "ā": "a",
                      "ă": "a",
                      "ằ": "a",
                      "ắ": "a",
                      "ẵ": "a",
                      "ẳ": "a",
                      "ȧ": "a",
                      "ǡ": "a",
                      "ä": "a",
                      "ǟ": "a",
                      "ả": "a",
                      "å": "a",
                      "ǻ": "a",
                      "ǎ": "a",
                      "ȁ": "a",
                      "ȃ": "a",
                      "ạ": "a",
                      "ậ": "a",
                      "ặ": "a",
                      "ḁ": "a",
                      "ą": "a",
                      "ⱥ": "a",
                      "ɐ": "a",
                      "ꜳ": "aa",
                      "æ": "ae",
                      "ǽ": "ae",
                      "ǣ": "ae",
                      "ꜵ": "ao",
                      "ꜷ": "au",
                      "ꜹ": "av",
                      "ꜻ": "av",
                      "ꜽ": "ay",
                      "ⓑ": "b",
                      "ｂ": "b",
                      "ḃ": "b",
                      "ḅ": "b",
                      "ḇ": "b",
                      "ƀ": "b",
                      "ƃ": "b",
                      "ɓ": "b",
                      "ⓒ": "c",
                      "ｃ": "c",
                      "ć": "c",
                      "ĉ": "c",
                      "ċ": "c",
                      "č": "c",
                      "ç": "c",
                      "ḉ": "c",
                      "ƈ": "c",
                      "ȼ": "c",
                      "ꜿ": "c",
                      "ↄ": "c",
                      "ⓓ": "d",
                      "ｄ": "d",
                      "ḋ": "d",
                      "ď": "d",
                      "ḍ": "d",
                      "ḑ": "d",
                      "ḓ": "d",
                      "ḏ": "d",
                      "đ": "d",
                      "ƌ": "d",
                      "ɖ": "d",
                      "ɗ": "d",
                      "ꝺ": "d",
                      "ǳ": "dz",
                      "ǆ": "dz",
                      "ⓔ": "e",
                      "ｅ": "e",
                      "è": "e",
                      "é": "e",
                      "ê": "e",
                      "ề": "e",
                      "ế": "e",
                      "ễ": "e",
                      "ể": "e",
                      "ẽ": "e",
                      "ē": "e",
                      "ḕ": "e",
                      "ḗ": "e",
                      "ĕ": "e",
                      "ė": "e",
                      "ë": "e",
                      "ẻ": "e",
                      "ě": "e",
                      "ȅ": "e",
                      "ȇ": "e",
                      "ẹ": "e",
                      "ệ": "e",
                      "ȩ": "e",
                      "ḝ": "e",
                      "ę": "e",
                      "ḙ": "e",
                      "ḛ": "e",
                      "ɇ": "e",
                      "ɛ": "e",
                      "ǝ": "e",
                      "ⓕ": "f",
                      "ｆ": "f",
                      "ḟ": "f",
                      "ƒ": "f",
                      "ꝼ": "f",
                      "ⓖ": "g",
                      "ｇ": "g",
                      "ǵ": "g",
                      "ĝ": "g",
                      "ḡ": "g",
                      "ğ": "g",
                      "ġ": "g",
                      "ǧ": "g",
                      "ģ": "g",
                      "ǥ": "g",
                      "ɠ": "g",
                      "ꞡ": "g",
                      "ᵹ": "g",
                      "ꝿ": "g",
                      "ⓗ": "h",
                      "ｈ": "h",
                      "ĥ": "h",
                      "ḣ": "h",
                      "ḧ": "h",
                      "ȟ": "h",
                      "ḥ": "h",
                      "ḩ": "h",
                      "ḫ": "h",
                      "ẖ": "h",
                      "ħ": "h",
                      "ⱨ": "h",
                      "ⱶ": "h",
                      "ɥ": "h",
                      "ƕ": "hv",
                      "ⓘ": "i",
                      "ｉ": "i",
                      "ì": "i",
                      "í": "i",
                      "î": "i",
                      "ĩ": "i",
                      "ī": "i",
                      "ĭ": "i",
                      "ï": "i",
                      "ḯ": "i",
                      "ỉ": "i",
                      "ǐ": "i",
                      "ȉ": "i",
                      "ȋ": "i",
                      "ị": "i",
                      "į": "i",
                      "ḭ": "i",
                      "ɨ": "i",
                      "ı": "i",
                      "ⓙ": "j",
                      "ｊ": "j",
                      "ĵ": "j",
                      "ǰ": "j",
                      "ɉ": "j",
                      "ⓚ": "k",
                      "ｋ": "k",
                      "ḱ": "k",
                      "ǩ": "k",
                      "ḳ": "k",
                      "ķ": "k",
                      "ḵ": "k",
                      "ƙ": "k",
                      "ⱪ": "k",
                      "ꝁ": "k",
                      "ꝃ": "k",
                      "ꝅ": "k",
                      "ꞣ": "k",
                      "ⓛ": "l",
                      "ｌ": "l",
                      "ŀ": "l",
                      "ĺ": "l",
                      "ľ": "l",
                      "ḷ": "l",
                      "ḹ": "l",
                      "ļ": "l",
                      "ḽ": "l",
                      "ḻ": "l",
                      "ſ": "l",
                      "ł": "l",
                      "ƚ": "l",
                      "ɫ": "l",
                      "ⱡ": "l",
                      "ꝉ": "l",
                      "ꞁ": "l",
                      "ꝇ": "l",
                      "ǉ": "lj",
                      "ⓜ": "m",
                      "ｍ": "m",
                      "ḿ": "m",
                      "ṁ": "m",
                      "ṃ": "m",
                      "ɱ": "m",
                      "ɯ": "m",
                      "ⓝ": "n",
                      "ｎ": "n",
                      "ǹ": "n",
                      "ń": "n",
                      "ñ": "n",
                      "ṅ": "n",
                      "ň": "n",
                      "ṇ": "n",
                      "ņ": "n",
                      "ṋ": "n",
                      "ṉ": "n",
                      "ƞ": "n",
                      "ɲ": "n",
                      "ŉ": "n",
                      "ꞑ": "n",
                      "ꞥ": "n",
                      "ǌ": "nj",
                      "ⓞ": "o",
                      "ｏ": "o",
                      "ò": "o",
                      "ó": "o",
                      "ô": "o",
                      "ồ": "o",
                      "ố": "o",
                      "ỗ": "o",
                      "ổ": "o",
                      "õ": "o",
                      "ṍ": "o",
                      "ȭ": "o",
                      "ṏ": "o",
                      "ō": "o",
                      "ṑ": "o",
                      "ṓ": "o",
                      "ŏ": "o",
                      "ȯ": "o",
                      "ȱ": "o",
                      "ö": "o",
                      "ȫ": "o",
                      "ỏ": "o",
                      "ő": "o",
                      "ǒ": "o",
                      "ȍ": "o",
                      "ȏ": "o",
                      "ơ": "o",
                      "ờ": "o",
                      "ớ": "o",
                      "ỡ": "o",
                      "ở": "o",
                      "ợ": "o",
                      "ọ": "o",
                      "ộ": "o",
                      "ǫ": "o",
                      "ǭ": "o",
                      "ø": "o",
                      "ǿ": "o",
                      "ɔ": "o",
                      "ꝋ": "o",
                      "ꝍ": "o",
                      "ɵ": "o",
                      "œ": "oe",
                      "ƣ": "oi",
                      "ȣ": "ou",
                      "ꝏ": "oo",
                      "ⓟ": "p",
                      "ｐ": "p",
                      "ṕ": "p",
                      "ṗ": "p",
                      "ƥ": "p",
                      "ᵽ": "p",
                      "ꝑ": "p",
                      "ꝓ": "p",
                      "ꝕ": "p",
                      "ⓠ": "q",
                      "ｑ": "q",
                      "ɋ": "q",
                      "ꝗ": "q",
                      "ꝙ": "q",
                      "ⓡ": "r",
                      "ｒ": "r",
                      "ŕ": "r",
                      "ṙ": "r",
                      "ř": "r",
                      "ȑ": "r",
                      "ȓ": "r",
                      "ṛ": "r",
                      "ṝ": "r",
                      "ŗ": "r",
                      "ṟ": "r",
                      "ɍ": "r",
                      "ɽ": "r",
                      "ꝛ": "r",
                      "ꞧ": "r",
                      "ꞃ": "r",
                      "ⓢ": "s",
                      "ｓ": "s",
                      "ß": "s",
                      "ś": "s",
                      "ṥ": "s",
                      "ŝ": "s",
                      "ṡ": "s",
                      "š": "s",
                      "ṧ": "s",
                      "ṣ": "s",
                      "ṩ": "s",
                      "ș": "s",
                      "ş": "s",
                      "ȿ": "s",
                      "ꞩ": "s",
                      "ꞅ": "s",
                      "ẛ": "s",
                      "ⓣ": "t",
                      "ｔ": "t",
                      "ṫ": "t",
                      "ẗ": "t",
                      "ť": "t",
                      "ṭ": "t",
                      "ț": "t",
                      "ţ": "t",
                      "ṱ": "t",
                      "ṯ": "t",
                      "ŧ": "t",
                      "ƭ": "t",
                      "ʈ": "t",
                      "ⱦ": "t",
                      "ꞇ": "t",
                      "ꜩ": "tz",
                      "ⓤ": "u",
                      "ｕ": "u",
                      "ù": "u",
                      "ú": "u",
                      "û": "u",
                      "ũ": "u",
                      "ṹ": "u",
                      "ū": "u",
                      "ṻ": "u",
                      "ŭ": "u",
                      "ü": "u",
                      "ǜ": "u",
                      "ǘ": "u",
                      "ǖ": "u",
                      "ǚ": "u",
                      "ủ": "u",
                      "ů": "u",
                      "ű": "u",
                      "ǔ": "u",
                      "ȕ": "u",
                      "ȗ": "u",
                      "ư": "u",
                      "ừ": "u",
                      "ứ": "u",
                      "ữ": "u",
                      "ử": "u",
                      "ự": "u",
                      "ụ": "u",
                      "ṳ": "u",
                      "ų": "u",
                      "ṷ": "u",
                      "ṵ": "u",
                      "ʉ": "u",
                      "ⓥ": "v",
                      "ｖ": "v",
                      "ṽ": "v",
                      "ṿ": "v",
                      "ʋ": "v",
                      "ꝟ": "v",
                      "ʌ": "v",
                      "ꝡ": "vy",
                      "ⓦ": "w",
                      "ｗ": "w",
                      "ẁ": "w",
                      "ẃ": "w",
                      "ŵ": "w",
                      "ẇ": "w",
                      "ẅ": "w",
                      "ẘ": "w",
                      "ẉ": "w",
                      "ⱳ": "w",
                      "ⓧ": "x",
                      "ｘ": "x",
                      "ẋ": "x",
                      "ẍ": "x",
                      "ⓨ": "y",
                      "ｙ": "y",
                      "ỳ": "y",
                      "ý": "y",
                      "ŷ": "y",
                      "ỹ": "y",
                      "ȳ": "y",
                      "ẏ": "y",
                      "ÿ": "y",
                      "ỷ": "y",
                      "ẙ": "y",
                      "ỵ": "y",
                      "ƴ": "y",
                      "ɏ": "y",
                      "ỿ": "y",
                      "ⓩ": "z",
                      "ｚ": "z",
                      "ź": "z",
                      "ẑ": "z",
                      "ż": "z",
                      "ž": "z",
                      "ẓ": "z",
                      "ẕ": "z",
                      "ƶ": "z",
                      "ȥ": "z",
                      "ɀ": "z",
                      "ⱬ": "z",
                      "ꝣ": "z",
                      "Ά": "Α",
                      "Έ": "Ε",
                      "Ή": "Η",
                      "Ί": "Ι",
                      "Ϊ": "Ι",
                      "Ό": "Ο",
                      "Ύ": "Υ",
                      "Ϋ": "Υ",
                      "Ώ": "Ω",
                      "ά": "α",
                      "έ": "ε",
                      "ή": "η",
                      "ί": "ι",
                      "ϊ": "ι",
                      "ΐ": "ι",
                      "ό": "ο",
                      "ύ": "υ",
                      "ϋ": "υ",
                      "ΰ": "υ",
                      "ώ": "ω",
                      "ς": "σ",
                      "’": "'"
                  }
              })), t.define("select2/data/base", ["../utils"], (function(e) {
                  function t(e, n) {
                      t.__super__.constructor.call(this)
                  }
                  return e.Extend(t, e.Observable), t.prototype.current = function(e) {
                      throw new Error("The `current` method must be defined in child classes.")
                  }, t.prototype.query = function(e, t) {
                      throw new Error("The `query` method must be defined in child classes.")
                  }, t.prototype.bind = function(e, t) {}, t.prototype.destroy = function() {}, t.prototype.generateResultId = function(t, n) {
                      var r = t.id + "-result-";
                      return r += e.generateChars(4), null != n.id ? r += "-" + n.id.toString() : r += "-" + e.generateChars(4), r
                  }, t
              })), t.define("select2/data/select", ["./base", "../utils", "jquery"], (function(e, t, n) {
                  function r(e, t) {
                      this.$element = e, this.options = t, r.__super__.constructor.call(this)
                  }
                  return t.Extend(r, e), r.prototype.current = function(e) {
                      var t = [],
                          r = this;
                      this.$element.find(":selected").each((function() {
                          var e = n(this),
                              o = r.item(e);
                          t.push(o)
                      })), e(t)
                  }, r.prototype.select = function(e) {
                      var t = this;
                      if (e.selected = !0, n(e.element).is("option"))
                          return e.element.selected = !0, void this.$element.trigger("input").trigger("change");
                      if (this.$element.prop("multiple"))
                          this.current((function(r) {
                              var o = [];
                              (e = [e]).push.apply(e, r);
                              for (var i = 0; i < e.length; i++) {
                                  var s = e[i].id;
                                  -1 === n.inArray(s, o) && o.push(s)
                              }
                              t.$element.val(o), t.$element.trigger("input").trigger("change")
                          }));
                      else {
                          var r = e.id;
                          this.$element.val(r), this.$element.trigger("input").trigger("change")
                      }
                  }, r.prototype.unselect = function(e) {
                      var t = this;
                      if (this.$element.prop("multiple")) {
                          if (e.selected = !1, n(e.element).is("option"))
                              return e.element.selected = !1, void this.$element.trigger("input").trigger("change");
                          this.current((function(r) {
                              for (var o = [], i = 0; i < r.length; i++) {
                                  var s = r[i].id;
                                  s !== e.id && -1 === n.inArray(s, o) && o.push(s)
                              }
                              t.$element.val(o), t.$element.trigger("input").trigger("change")
                          }))
                      }
                  }, r.prototype.bind = function(e, t) {
                      var n = this;
                      this.container = e, e.on("select", (function(e) {
                          n.select(e.data)
                      })), e.on("unselect", (function(e) {
                          n.unselect(e.data)
                      }))
                  }, r.prototype.destroy = function() {
                      this.$element.find("*").each((function() {
                          t.RemoveData(this)
                      }))
                  }, r.prototype.query = function(e, t) {
                      var r = [],
                          o = this;
                      this.$element.children().each((function() {
                          var t = n(this);
                          if (t.is("option") || t.is("optgroup")) {
                              var i = o.item(t),
                                  s = o.matches(e, i);
                              null !== s && r.push(s)
                          }
                      })), t({
                          results: r
                      })
                  }, r.prototype.addOptions = function(e) {
                      t.appendMany(this.$element, e)
                  }, r.prototype.option = function(e) {
                      var r;
                      e.children ? (r = document.createElement("optgroup")).label = e.text : void 0 !== (r = document.createElement("option")).textContent ? r.textContent = e.text : r.innerText = e.text, void 0 !== e.id && (r.value = e.id), e.disabled && (r.disabled = !0), e.selected && (r.selected = !0), e.title && (r.title = e.title);
                      var o = n(r),
                          i = this._normalizeItem(e);
                      return i.element = r, t.StoreData(r, "data", i), o
                  }, r.prototype.item = function(e) {
                      var r = {};
                      if (null != (r = t.GetData(e[0], "data")))
                          return r;
                      if (e.is("option"))
                          r = {
                              id: e.val(),
                              text: e.text(),
                              disabled: e.prop("disabled"),
                              selected: e.prop("selected"),
                              title: e.prop("title")
                          };
                      else if (e.is("optgroup")) {
                          r = {
                              text: e.prop("label"),
                              children: [],
                              title: e.prop("title")
                          };
                          for (var o = e.children("option"), i = [], s = 0; s < o.length; s++) {
                              var a = n(o[s]),
                                  l = this.item(a);
                              i.push(l)
                          }
                          r.children = i
                      }
                      return (r = this._normalizeItem(r)).element = e[0], t.StoreData(e[0], "data", r), r
                  }, r.prototype._normalizeItem = function(e) {
                      return e !== Object(e) && (e = {
                          id: e,
                          text: e
                      }), null != (e = n.extend({}, {
                          text: ""
                      }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend({}, {
                          selected: !1,
                          disabled: !1
                      }, e)
                  }, r.prototype.matches = function(e, t) {
                      return this.options.get("matcher")(e, t)
                  }, r
              })), t.define("select2/data/array", ["./select", "../utils", "jquery"], (function(e, t, n) {
                  function r(e, t) {
                      this._dataToConvert = t.get("data") || [], r.__super__.constructor.call(this, e, t)
                  }
                  return t.Extend(r, e), r.prototype.bind = function(e, t) {
                      r.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert))
                  }, r.prototype.select = function(e) {
                      var t = this.$element.find("option").filter((function(t, n) {
                          return n.value == e.id.toString()
                      }));
                      0 === t.length && (t = this.option(e), this.addOptions(t)), r.__super__.select.call(this, e)
                  }, r.prototype.convertToOptions = function(e) {
                      var r = this,
                          o = this.$element.find("option"),
                          i = o.map((function() {
                              return r.item(n(this)).id
                          })).get(),
                          s = [];
                      function a(e) {
                          return function() {
                              return n(this).val() == e.id
                          }
                      }
                      for (var l = 0; l < e.length; l++) {
                          var c = this._normalizeItem(e[l]);
                          if (n.inArray(c.id, i) >= 0) {
                              var u = o.filter(a(c)),
                                  d = this.item(u),
                                  p = n.extend(!0, {}, c, d),
                                  h = this.option(p);
                              u.replaceWith(h)
                          } else {
                              var f = this.option(c);
                              if (c.children) {
                                  var g = this.convertToOptions(c.children);
                                  t.appendMany(f, g)
                              }
                              s.push(f)
                          }
                      }
                      return s
                  }, r
              })), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], (function(e, t, n) {
                  function r(e, t) {
                      this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), r.__super__.constructor.call(this, e, t)
                  }
                  return t.Extend(r, e), r.prototype._applyDefaults = function(e) {
                      var t = {
                          data: function(e) {
                              return n.extend({}, e, {
                                  q: e.term
                              })
                          },
                          transport: function(e, t, r) {
                              var o = n.ajax(e);
                              return o.then(t), o.fail(r), o
                          }
                      };
                      return n.extend({}, t, e, !0)
                  }, r.prototype.processResults = function(e) {
                      return e
                  }, r.prototype.query = function(e, t) {
                      var r = this;
                      null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                      var o = n.extend({
                          type: "GET"
                      }, this.ajaxOptions);
                      function i() {
                          var i = o.transport(o, (function(o) {
                              var i = r.processResults(o, e);
                              r.options.get("debug") && window.console && console.error && (i && i.results && n.isArray(i.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(i)
                          }), (function() {
                              (!("status" in i) || 0 !== i.status && "0" !== i.status) && r.trigger("results:message", {
                                  message: "errorLoading"
                              })
                          }));
                          r._request = i
                      }
                      "function" == typeof o.url && (o.url = o.url.call(this.$element, e)), "function" == typeof o.data && (o.data = o.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
                  }, r
              })), t.define("select2/data/tags", ["jquery"], (function(e) {
                  function t(t, n, r) {
                      var o = r.get("tags"),
                          i = r.get("createTag");
                      void 0 !== i && (this.createTag = i);
                      var s = r.get("insertTag");
                      if (void 0 !== s && (this.insertTag = s), t.call(this, n, r), e.isArray(o))
                          for (var a = 0; a < o.length; a++) {
                              var l = o[a],
                                  c = this._normalizeItem(l),
                                  u = this.option(c);
                              this.$element.append(u)
                          }
                  }
                  return t.prototype.query = function(e, t, n) {
                      var r = this;
                      this._removeOldTags(), null != t.term && null == t.page ? e.call(this, t, (function e(o, i) {
                          for (var s = o.results, a = 0; a < s.length; a++) {
                              var l = s[a],
                                  c = null != l.children && !e({
                                      results: l.children
                                  }, !0);
                              if ((l.text || "").toUpperCase() === (t.term || "").toUpperCase() || c)
                                  return !i && (o.data = s, void n(o))
                          }
                          if (i)
                              return !0;
                          var u = r.createTag(t);
                          if (null != u) {
                              var d = r.option(u);
                              d.attr("data-select2-tag", !0), r.addOptions([d]), r.insertTag(s, u)
                          }
                          o.results = s, n(o)
                      })) : e.call(this, t, n)
                  }, t.prototype.createTag = function(t, n) {
                      var r = e.trim(n.term);
                      return "" === r ? null : {
                          id: r,
                          text: r
                      }
                  }, t.prototype.insertTag = function(e, t, n) {
                      t.unshift(n)
                  }, t.prototype._removeOldTags = function(t) {
                      this.$element.find("option[data-select2-tag]").each((function() {
                          this.selected || e(this).remove()
                      }))
                  }, t
              })), t.define("select2/data/tokenizer", ["jquery"], (function(e) {
                  function t(e, t, n) {
                      var r = n.get("tokenizer");
                      void 0 !== r && (this.tokenizer = r), e.call(this, t, n)
                  }
                  return t.prototype.bind = function(e, t, n) {
                      e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
                  }, t.prototype.query = function(t, n, r) {
                      var o = this;
                      n.term = n.term || "";
                      var i = this.tokenizer(n, this.options, (function(t) {
                          var n = o._normalizeItem(t);
                          if (!o.$element.find("option").filter((function() {
                              return e(this).val() === n.id
                          })).length) {
                              var r = o.option(n);
                              r.attr("data-select2-tag", !0), o._removeOldTags(), o.addOptions([r])
                          }
                          !function(e) {
                              o.trigger("select", {
                                  data: e
                              })
                          }(n)
                      }));
                      i.term !== n.term && (this.$search.length && (this.$search.val(i.term), this.$search.trigger("focus")), n.term = i.term), t.call(this, n, r)
                  }, t.prototype.tokenizer = function(t, n, r, o) {
                      for (var i = r.get("tokenSeparators") || [], s = n.term, a = 0, l = this.createTag || function(e) {
                              return {
                                  id: e.term,
                                  text: e.term
                              }
                          }; a < s.length;) {
                          var c = s[a];
                          if (-1 !== e.inArray(c, i)) {
                              var u = s.substr(0, a),
                                  d = l(e.extend({}, n, {
                                      term: u
                                  }));
                              null != d ? (o(d), s = s.substr(a + 1) || "", a = 0) : a++
                          } else
                              a++
                      }
                      return {
                          term: s
                      }
                  }, t
              })), t.define("select2/data/minimumInputLength", [], (function() {
                  function e(e, t, n) {
                      this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
                  }
                  return e.prototype.query = function(e, t, n) {
                      t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
                          message: "inputTooShort",
                          args: {
                              minimum: this.minimumInputLength,
                              input: t.term,
                              params: t
                          }
                      }) : e.call(this, t, n)
                  }, e
              })), t.define("select2/data/maximumInputLength", [], (function() {
                  function e(e, t, n) {
                      this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
                  }
                  return e.prototype.query = function(e, t, n) {
                      t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
                          message: "inputTooLong",
                          args: {
                              maximum: this.maximumInputLength,
                              input: t.term,
                              params: t
                          }
                      }) : e.call(this, t, n)
                  }, e
              })), t.define("select2/data/maximumSelectionLength", [], (function() {
                  function e(e, t, n) {
                      this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
                  }
                  return e.prototype.bind = function(e, t, n) {
                      var r = this;
                      e.call(this, t, n), t.on("select", (function() {
                          r._checkIfMaximumSelected()
                      }))
                  }, e.prototype.query = function(e, t, n) {
                      var r = this;
                      this._checkIfMaximumSelected((function() {
                          e.call(r, t, n)
                      }))
                  }, e.prototype._checkIfMaximumSelected = function(e, t) {
                      var n = this;
                      this.current((function(e) {
                          var r = null != e ? e.length : 0;
                          n.maximumSelectionLength > 0 && r >= n.maximumSelectionLength ? n.trigger("results:message", {
                              message: "maximumSelected",
                              args: {
                                  maximum: n.maximumSelectionLength
                              }
                          }) : t && t()
                      }))
                  }, e
              })), t.define("select2/dropdown", ["jquery", "./utils"], (function(e, t) {
                  function n(e, t) {
                      this.$element = e, this.options = t, n.__super__.constructor.call(this)
                  }
                  return t.Extend(n, t.Observable), n.prototype.render = function() {
                      var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                      return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t
                  }, n.prototype.bind = function() {}, n.prototype.position = function(e, t) {}, n.prototype.destroy = function() {
                      this.$dropdown.remove()
                  }, n
              })), t.define("select2/dropdown/search", ["jquery", "../utils"], (function(e, t) {
                  function n() {}
                  return n.prototype.render = function(t) {
                      var n = t.call(this),
                          r = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
                      return this.$searchContainer = r, this.$search = r.find("input"), n.prepend(r), n
                  }, n.prototype.bind = function(t, n, r) {
                      var o = this,
                          i = n.id + "-results";
                      t.call(this, n, r), this.$search.on("keydown", (function(e) {
                          o.trigger("keypress", e), o._keyUpPrevented = e.isDefaultPrevented()
                      })), this.$search.on("input", (function(t) {
                          e(this).off("keyup")
                      })), this.$search.on("keyup input", (function(e) {
                          o.handleSearch(e)
                      })), n.on("open", (function() {
                          o.$search.attr("tabindex", 0), o.$search.attr("aria-controls", i), o.$search.trigger("focus"), window.setTimeout((function() {
                              o.$search.trigger("focus")
                          }), 0)
                      })), n.on("close", (function() {
                          o.$search.attr("tabindex", -1), o.$search.removeAttr("aria-controls"), o.$search.removeAttr("aria-activedescendant"), o.$search.val(""), o.$search.trigger("blur")
                      })), n.on("focus", (function() {
                          n.isOpen() || o.$search.trigger("focus")
                      })), n.on("results:all", (function(e) {
                          null != e.query.term && "" !== e.query.term || (o.showSearch(e) ? o.$searchContainer.removeClass("select2-search--hide") : o.$searchContainer.addClass("select2-search--hide"))
                      })), n.on("results:focus", (function(e) {
                          e.data._resultId ? o.$search.attr("aria-activedescendant", e.data._resultId) : o.$search.removeAttr("aria-activedescendant")
                      }))
                  }, n.prototype.handleSearch = function(e) {
                      if (!this._keyUpPrevented) {
                          var t = this.$search.val();
                          this.trigger("query", {
                              term: t
                          })
                      }
                      this._keyUpPrevented = !1
                  }, n.prototype.showSearch = function(e, t) {
                      return !0
                  }, n
              })), t.define("select2/dropdown/hidePlaceholder", [], (function() {
                  function e(e, t, n, r) {
                      this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, r)
                  }
                  return e.prototype.append = function(e, t) {
                      t.results = this.removePlaceholder(t.results), e.call(this, t)
                  }, e.prototype.normalizePlaceholder = function(e, t) {
                      return "string" == typeof t && (t = {
                          id: "",
                          text: t
                      }), t
                  }, e.prototype.removePlaceholder = function(e, t) {
                      for (var n = t.slice(0), r = t.length - 1; r >= 0; r--) {
                          var o = t[r];
                          this.placeholder.id === o.id && n.splice(r, 1)
                      }
                      return n
                  }, e
              })), t.define("select2/dropdown/infiniteScroll", ["jquery"], (function(e) {
                  function t(e, t, n, r) {
                      this.lastParams = {}, e.call(this, t, n, r), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                  }
                  return t.prototype.append = function(e, t) {
                      this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded())
                  }, t.prototype.bind = function(e, t, n) {
                      var r = this;
                      e.call(this, t, n), t.on("query", (function(e) {
                          r.lastParams = e, r.loading = !0
                      })), t.on("query:append", (function(e) {
                          r.lastParams = e, r.loading = !0
                      })), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this))
                  }, t.prototype.loadMoreIfNeeded = function() {
                      var t = e.contains(document.documentElement, this.$loadingMore[0]);
                      !this.loading && t && this.$results.offset().top + this.$results.outerHeight(!1) + 50 >= this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) && this.loadMore()
                  }, t.prototype.loadMore = function() {
                      this.loading = !0;
                      var t = e.extend({}, {
                          page: 1
                      }, this.lastParams);
                      t.page++, this.trigger("query:append", t)
                  }, t.prototype.showLoadingMore = function(e, t) {
                      return t.pagination && t.pagination.more
                  }, t.prototype.createLoadingMore = function() {
                      var t = e('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
                          n = this.options.get("translations").get("loadingMore");
                      return t.html(n(this.lastParams)), t
                  }, t
              })), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], (function(e, t) {
                  function n(t, n, r) {
                      this.$dropdownParent = e(r.get("dropdownParent") || document.body), t.call(this, n, r)
                  }
                  return n.prototype.bind = function(e, t, n) {
                      var r = this;
                      e.call(this, t, n), t.on("open", (function() {
                          r._showDropdown(), r._attachPositioningHandler(t), r._bindContainerResultHandlers(t)
                      })), t.on("close", (function() {
                          r._hideDropdown(), r._detachPositioningHandler(t)
                      })), this.$dropdownContainer.on("mousedown", (function(e) {
                          e.stopPropagation()
                      }))
                  }, n.prototype.destroy = function(e) {
                      e.call(this), this.$dropdownContainer.remove()
                  }, n.prototype.position = function(e, t, n) {
                      t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                          position: "absolute",
                          top: -999999
                      }), this.$container = n
                  }, n.prototype.render = function(t) {
                      var n = e("<span></span>"),
                          r = t.call(this);
                      return n.append(r), this.$dropdownContainer = n, n
                  }, n.prototype._hideDropdown = function(e) {
                      this.$dropdownContainer.detach()
                  }, n.prototype._bindContainerResultHandlers = function(e, t) {
                      if (!this._containerResultsHandlersBound) {
                          var n = this;
                          t.on("results:all", (function() {
                              n._positionDropdown(), n._resizeDropdown()
                          })), t.on("results:append", (function() {
                              n._positionDropdown(), n._resizeDropdown()
                          })), t.on("results:message", (function() {
                              n._positionDropdown(), n._resizeDropdown()
                          })), t.on("select", (function() {
                              n._positionDropdown(), n._resizeDropdown()
                          })), t.on("unselect", (function() {
                              n._positionDropdown(), n._resizeDropdown()
                          })), this._containerResultsHandlersBound = !0
                      }
                  }, n.prototype._attachPositioningHandler = function(n, r) {
                      var o = this,
                          i = "scroll.select2." + r.id,
                          s = "resize.select2." + r.id,
                          a = "orientationchange.select2." + r.id,
                          l = this.$container.parents().filter(t.hasScroll);
                      l.each((function() {
                          t.StoreData(this, "select2-scroll-position", {
                              x: e(this).scrollLeft(),
                              y: e(this).scrollTop()
                          })
                      })), l.on(i, (function(n) {
                          var r = t.GetData(this, "select2-scroll-position");
                          e(this).scrollTop(r.y)
                      })), e(window).on(i + " " + s + " " + a, (function(e) {
                          o._positionDropdown(), o._resizeDropdown()
                      }))
                  }, n.prototype._detachPositioningHandler = function(n, r) {
                      var o = "scroll.select2." + r.id,
                          i = "resize.select2." + r.id,
                          s = "orientationchange.select2." + r.id;
                      this.$container.parents().filter(t.hasScroll).off(o), e(window).off(o + " " + i + " " + s)
                  }, n.prototype._positionDropdown = function() {
                      var t = e(window),
                          n = this.$dropdown.hasClass("select2-dropdown--above"),
                          r = this.$dropdown.hasClass("select2-dropdown--below"),
                          o = null,
                          i = this.$container.offset();
                      i.bottom = i.top + this.$container.outerHeight(!1);
                      var s = {
                          height: this.$container.outerHeight(!1)
                      };
                      s.top = i.top, s.bottom = i.top + s.height;
                      var a = this.$dropdown.outerHeight(!1),
                          l = t.scrollTop(),
                          c = t.scrollTop() + t.height(),
                          u = l < i.top - a,
                          d = c > i.bottom + a,
                          p = {
                              left: i.left,
                              top: s.bottom
                          },
                          h = this.$dropdownParent;
                      "static" === h.css("position") && (h = h.offsetParent());
                      var f = {
                          top: 0,
                          left: 0
                      };
                      (e.contains(document.body, h[0]) || h[0].isConnected) && (f = h.offset()), p.top -= f.top, p.left -= f.left, n || r || (o = "below"), d || !u || n ? !u && d && n && (o = "below") : o = "above", ("above" == o || n && "below" !== o) && (p.top = s.top - f.top - a), null != o && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + o), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + o)), this.$dropdownContainer.css(p)
                  }, n.prototype._resizeDropdown = function() {
                      var e = {
                          width: this.$container.outerWidth(!1) + "px"
                      };
                      this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
                  }, n.prototype._showDropdown = function(e) {
                      this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                  }, n
              })), t.define("select2/dropdown/minimumResultsForSearch", [], (function() {
                  function e(e, t, n, r) {
                      this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, r)
                  }
                  return e.prototype.showSearch = function(e, t) {
                      return !(function e(t) {
                              for (var n = 0, r = 0; r < t.length; r++) {
                                  var o = t[r];
                                  o.children ? n += e(o.children) : n++
                              }
                              return n
                          }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t)
                  }, e
              })), t.define("select2/dropdown/selectOnClose", ["../utils"], (function(e) {
                  function t() {}
                  return t.prototype.bind = function(e, t, n) {
                      var r = this;
                      e.call(this, t, n), t.on("close", (function(e) {
                          r._handleSelectOnClose(e)
                      }))
                  }, t.prototype._handleSelectOnClose = function(t, n) {
                      if (n && null != n.originalSelect2Event) {
                          var r = n.originalSelect2Event;
                          if ("select" === r._type || "unselect" === r._type)
                              return
                      }
                      var o = this.getHighlightedResults();
                      if (!(o.length < 1)) {
                          var i = e.GetData(o[0], "data");
                          null != i.element && i.element.selected || null == i.element && i.selected || this.trigger("select", {
                              data: i
                          })
                      }
                  }, t
              })), t.define("select2/dropdown/closeOnSelect", [], (function() {
                  function e() {}
                  return e.prototype.bind = function(e, t, n) {
                      var r = this;
                      e.call(this, t, n), t.on("select", (function(e) {
                          r._selectTriggered(e)
                      })), t.on("unselect", (function(e) {
                          r._selectTriggered(e)
                      }))
                  }, e.prototype._selectTriggered = function(e, t) {
                      var n = t.originalEvent;
                      n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
                          originalEvent: n,
                          originalSelect2Event: t
                      })
                  }, e
              })), t.define("select2/i18n/en", [], (function() {
                  return {
                      errorLoading: function() {
                          return "The results could not be loaded."
                      },
                      inputTooLong: function(e) {
                          var t = e.input.length - e.maximum,
                              n = "Please delete " + t + " character";
                          return 1 != t && (n += "s"), n
                      },
                      inputTooShort: function(e) {
                          return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                      },
                      loadingMore: function() {
                          return "Loading more results…"
                      },
                      maximumSelected: function(e) {
                          var t = "You can only select " + e.maximum + " item";
                          return 1 != e.maximum && (t += "s"), t
                      },
                      noResults: function() {
                          return "No results found"
                      },
                      searching: function() {
                          return "Searching…"
                      },
                      removeAllItems: function() {
                          return "Remove all items"
                      }
                  }
              })), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], (function(e, t, n, r, o, i, s, a, l, c, u, d, p, h, f, g, m, v, y, _, b, w, E, C, x, T, A, S, O) {
                  function k() {
                      this.reset()
                  }
                  return k.prototype.apply = function(u) {
                      if (null == (u = e.extend(!0, {}, this.defaults, u)).dataAdapter) {
                          if (null != u.ajax ? u.dataAdapter = f : null != u.data ? u.dataAdapter = h : u.dataAdapter = p, u.minimumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, v)), u.maximumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, y)), u.maximumSelectionLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, _)), u.tags && (u.dataAdapter = c.Decorate(u.dataAdapter, g)), null == u.tokenSeparators && null == u.tokenizer || (u.dataAdapter = c.Decorate(u.dataAdapter, m)), null != u.query) {
                              var d = t(u.amdBase + "compat/query");
                              u.dataAdapter = c.Decorate(u.dataAdapter, d)
                          }
                          if (null != u.initSelection) {
                              var O = t(u.amdBase + "compat/initSelection");
                              u.dataAdapter = c.Decorate(u.dataAdapter, O)
                          }
                      }
                      if (null == u.resultsAdapter && (u.resultsAdapter = n, null != u.ajax && (u.resultsAdapter = c.Decorate(u.resultsAdapter, C)), null != u.placeholder && (u.resultsAdapter = c.Decorate(u.resultsAdapter, E)), u.selectOnClose && (u.resultsAdapter = c.Decorate(u.resultsAdapter, A))), null == u.dropdownAdapter) {
                          if (u.multiple)
                              u.dropdownAdapter = b;
                          else {
                              var k = c.Decorate(b, w);
                              u.dropdownAdapter = k
                          }
                          if (0 !== u.minimumResultsForSearch && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, T)), u.closeOnSelect && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, S)), null != u.dropdownCssClass || null != u.dropdownCss || null != u.adaptDropdownCssClass) {
                              var D = t(u.amdBase + "compat/dropdownCss");
                              u.dropdownAdapter = c.Decorate(u.dropdownAdapter, D)
                          }
                          u.dropdownAdapter = c.Decorate(u.dropdownAdapter, x)
                      }
                      if (null == u.selectionAdapter) {
                          if (u.multiple ? u.selectionAdapter = o : u.selectionAdapter = r, null != u.placeholder && (u.selectionAdapter = c.Decorate(u.selectionAdapter, i)), u.allowClear && (u.selectionAdapter = c.Decorate(u.selectionAdapter, s)), u.multiple && (u.selectionAdapter = c.Decorate(u.selectionAdapter, a)), null != u.containerCssClass || null != u.containerCss || null != u.adaptContainerCssClass) {
                              var $ = t(u.amdBase + "compat/containerCss");
                              u.selectionAdapter = c.Decorate(u.selectionAdapter, $)
                          }
                          u.selectionAdapter = c.Decorate(u.selectionAdapter, l)
                      }
                      u.language = this._resolveLanguage(u.language), u.language.push("en");
                      for (var P = [], j = 0; j < u.language.length; j++) {
                          var L = u.language[j];
                          -1 === P.indexOf(L) && P.push(L)
                      }
                      return u.language = P, u.translations = this._processTranslations(u.language, u.debug), u
                  }, k.prototype.reset = function() {
                      function t(e) {
                          return e.replace(/[^\u0000-\u007E]/g, (function(e) {
                              return d[e] || e
                          }))
                      }
                      this.defaults = {
                          amdBase: "./",
                          amdLanguageBase: "./i18n/",
                          closeOnSelect: !0,
                          debug: !1,
                          dropdownAutoWidth: !1,
                          escapeMarkup: c.escapeMarkup,
                          language: {},
                          matcher: function n(r, o) {
                              if ("" === e.trim(r.term))
                                  return o;
                              if (o.children && o.children.length > 0) {
                                  for (var i = e.extend(!0, {}, o), s = o.children.length - 1; s >= 0; s--)
                                      null == n(r, o.children[s]) && i.children.splice(s, 1);
                                  return i.children.length > 0 ? i : n(r, i)
                              }
                              var a = t(o.text).toUpperCase(),
                                  l = t(r.term).toUpperCase();
                              return a.indexOf(l) > -1 ? o : null
                          },
                          minimumInputLength: 0,
                          maximumInputLength: 0,
                          maximumSelectionLength: 0,
                          minimumResultsForSearch: 0,
                          selectOnClose: !1,
                          scrollAfterSelect: !1,
                          sorter: function(e) {
                              return e
                          },
                          templateResult: function(e) {
                              return e.text
                          },
                          templateSelection: function(e) {
                              return e.text
                          },
                          theme: "default",
                          width: "resolve"
                      }
                  }, k.prototype.applyFromElement = function(e, t) {
                      var n = e.language,
                          r = this.defaults.language,
                          o = t.prop("lang"),
                          i = t.closest("[lang]").prop("lang"),
                          s = Array.prototype.concat.call(this._resolveLanguage(o), this._resolveLanguage(n), this._resolveLanguage(r), this._resolveLanguage(i));
                      return e.language = s, e
                  }, k.prototype._resolveLanguage = function(t) {
                      if (!t)
                          return [];
                      if (e.isEmptyObject(t))
                          return [];
                      if (e.isPlainObject(t))
                          return [t];
                      var n;
                      n = e.isArray(t) ? t : [t];
                      for (var r = [], o = 0; o < n.length; o++)
                          if (r.push(n[o]), "string" == typeof n[o] && n[o].indexOf("-") > 0) {
                              var i = n[o].split("-")[0];
                              r.push(i)
                          }
                      return r
                  }, k.prototype._processTranslations = function(t, n) {
                      for (var r = new u, o = 0; o < t.length; o++) {
                          var i = new u,
                              s = t[o];
                          if ("string" == typeof s)
                              try {
                                  i = u.loadPath(s)
                              } catch (e) {
                                  try {
                                      s = this.defaults.amdLanguageBase + s, i = u.loadPath(s)
                                  } catch (e) {
                                      n && window.console && console.warn && console.warn('Select2: The language file for "' + s + '" could not be automatically loaded. A fallback will be used instead.')
                                  }
                              }
                          else
                              i = e.isPlainObject(s) ? new u(s) : s;
                          r.extend(i)
                      }
                      return r
                  }, k.prototype.set = function(t, n) {
                      var r = {};
                      r[e.camelCase(t)] = n;
                      var o = c._convertData(r);
                      e.extend(!0, this.defaults, o)
                  }, new k
              })), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], (function(e, t, n, r) {
                  function o(t, o) {
                      if (this.options = t, null != o && this.fromElement(o), null != o && (this.options = n.applyFromElement(this.options, o)), this.options = n.apply(this.options), o && o.is("input")) {
                          var i = e(this.get("amdBase") + "compat/inputData");
                          this.options.dataAdapter = r.Decorate(this.options.dataAdapter, i)
                      }
                  }
                  return o.prototype.fromElement = function(e) {
                      var n = ["select2"];
                      null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), r.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), r.StoreData(e[0], "data", r.GetData(e[0], "select2Tags")), r.StoreData(e[0], "tags", !0)), r.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", r.GetData(e[0], "ajaxUrl")), r.StoreData(e[0], "ajax-Url", r.GetData(e[0], "ajaxUrl")));
                      var o = {};
                      function i(e, t) {
                          return t.toUpperCase()
                      }
                      for (var s = 0; s < e[0].attributes.length; s++) {
                          var a = e[0].attributes[s].name;
                          if ("data-" == a.substr(0, "data-".length)) {
                              var l = a.substring("data-".length),
                                  c = r.GetData(e[0], l);
                              o[l.replace(/-([a-z])/g, i)] = c
                          }
                      }
                      t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset && (o = t.extend(!0, {}, e[0].dataset, o));
                      var u = t.extend(!0, {}, r.GetData(e[0]), o);
                      for (var d in u = r._convertData(u))
                          t.inArray(d, n) > -1 || (t.isPlainObject(this.options[d]) ? t.extend(this.options[d], u[d]) : this.options[d] = u[d]);
                      return this
                  }, o.prototype.get = function(e) {
                      return this.options[e]
                  }, o.prototype.set = function(e, t) {
                      this.options[e] = t
                  }, o
              })), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], (function(e, t, n, r) {
                  var o = function(e, r) {
                      null != n.GetData(e[0], "select2") && n.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), r = r || {}, this.options = new t(r, e), o.__super__.constructor.call(this);
                      var i = e.attr("tabindex") || 0;
                      n.StoreData(e[0], "old-tabindex", i), e.attr("tabindex", "-1");
                      var s = this.options.get("dataAdapter");
                      this.dataAdapter = new s(e, this.options);
                      var a = this.render();
                      this._placeContainer(a);
                      var l = this.options.get("selectionAdapter");
                      this.selection = new l(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, a);
                      var c = this.options.get("dropdownAdapter");
                      this.dropdown = new c(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, a);
                      var u = this.options.get("resultsAdapter");
                      this.results = new u(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                      var d = this;
                      this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current((function(e) {
                          d.trigger("selection:update", {
                              data: e
                          })
                      })), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), n.StoreData(e[0], "select2", this), e.data("select2", this)
                  };
                  return n.Extend(o, n.Observable), o.prototype._generateId = function(e) {
                      return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
                  }, o.prototype._placeContainer = function(e) {
                      e.insertAfter(this.$element);
                      var t = this._resolveWidth(this.$element, this.options.get("width"));
                      null != t && e.css("width", t)
                  }, o.prototype._resolveWidth = function(e, t) {
                      var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                      if ("resolve" == t) {
                          var r = this._resolveWidth(e, "style");
                          return null != r ? r : this._resolveWidth(e, "element")
                      }
                      if ("element" == t) {
                          var o = e.outerWidth(!1);
                          return o <= 0 ? "auto" : o + "px"
                      }
                      if ("style" == t) {
                          var i = e.attr("style");
                          if ("string" != typeof i)
                              return null;
                          for (var s = i.split(";"), a = 0, l = s.length; a < l; a += 1) {
                              var c = s[a].replace(/\s/g, "").match(n);
                              if (null !== c && c.length >= 1)
                                  return c[1]
                          }
                          return null
                      }
                      return "computedstyle" == t ? window.getComputedStyle(e[0]).width : t
                  }, o.prototype._bindAdapters = function() {
                      this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                  }, o.prototype._registerDomEvents = function() {
                      var e = this;
                      this.$element.on("change.select2", (function() {
                          e.dataAdapter.current((function(t) {
                              e.trigger("selection:update", {
                                  data: t
                              })
                          }))
                      })), this.$element.on("focus.select2", (function(t) {
                          e.trigger("focus", t)
                      })), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                      var t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                      null != t ? (this._observer = new t((function(t) {
                          e._syncA(), e._syncS(null, t)
                      })), this._observer.observe(this.$element[0], {
                          attributes: !0,
                          childList: !0,
                          subtree: !1
                      })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1))
                  }, o.prototype._registerDataEvents = function() {
                      var e = this;
                      this.dataAdapter.on("*", (function(t, n) {
                          e.trigger(t, n)
                      }))
                  }, o.prototype._registerSelectionEvents = function() {
                      var t = this,
                          n = ["toggle", "focus"];
                      this.selection.on("toggle", (function() {
                          t.toggleDropdown()
                      })), this.selection.on("focus", (function(e) {
                          t.focus(e)
                      })), this.selection.on("*", (function(r, o) {
                          -1 === e.inArray(r, n) && t.trigger(r, o)
                      }))
                  }, o.prototype._registerDropdownEvents = function() {
                      var e = this;
                      this.dropdown.on("*", (function(t, n) {
                          e.trigger(t, n)
                      }))
                  }, o.prototype._registerResultsEvents = function() {
                      var e = this;
                      this.results.on("*", (function(t, n) {
                          e.trigger(t, n)
                      }))
                  }, o.prototype._registerEvents = function() {
                      var e = this;
                      this.on("open", (function() {
                          e.$container.addClass("select2-container--open")
                      })), this.on("close", (function() {
                          e.$container.removeClass("select2-container--open")
                      })), this.on("enable", (function() {
                          e.$container.removeClass("select2-container--disabled")
                      })), this.on("disable", (function() {
                          e.$container.addClass("select2-container--disabled")
                      })), this.on("blur", (function() {
                          e.$container.removeClass("select2-container--focus")
                      })), this.on("query", (function(t) {
                          e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, (function(n) {
                              e.trigger("results:all", {
                                  data: n,
                                  query: t
                              })
                          }))
                      })), this.on("query:append", (function(t) {
                          this.dataAdapter.query(t, (function(n) {
                              e.trigger("results:append", {
                                  data: n,
                                  query: t
                              })
                          }))
                      })), this.on("keypress", (function(t) {
                          var n = t.which;
                          e.isOpen() ? n === r.ESC || n === r.TAB || n === r.UP && t.altKey ? (e.close(t), t.preventDefault()) : n === r.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : n === r.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : n === r.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : n === r.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (n === r.ENTER || n === r.SPACE || n === r.DOWN && t.altKey) && (e.open(), t.preventDefault())
                      }))
                  }, o.prototype._syncAttributes = function() {
                      this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                  }, o.prototype._isChangeMutation = function(t, n) {
                      var r = !1,
                          o = this;
                      if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) {
                          if (n)
                              if (n.addedNodes && n.addedNodes.length > 0)
                                  for (var i = 0; i < n.addedNodes.length; i++)
                                      n.addedNodes[i].selected && (r = !0);
                              else
                                  n.removedNodes && n.removedNodes.length > 0 ? r = !0 : e.isArray(n) && e.each(n, (function(e, t) {
                                      if (o._isChangeMutation(e, t))
                                          return r = !0, !1
                                  }));
                          else
                              r = !0;
                          return r
                      }
                  }, o.prototype._syncSubtree = function(e, t) {
                      var n = this._isChangeMutation(e, t),
                          r = this;
                      n && this.dataAdapter.current((function(e) {
                          r.trigger("selection:update", {
                              data: e
                          })
                      }))
                  }, o.prototype.trigger = function(e, t) {
                      var n = o.__super__.trigger,
                          r = {
                              open: "opening",
                              close: "closing",
                              select: "selecting",
                              unselect: "unselecting",
                              clear: "clearing"
                          };
                      if (void 0 === t && (t = {}), e in r) {
                          var i = r[e],
                              s = {
                                  prevented: !1,
                                  name: e,
                                  args: t
                              };
                          if (n.call(this, i, s), s.prevented)
                              return void (t.prevented = !0)
                      }
                      n.call(this, e, t)
                  }, o.prototype.toggleDropdown = function() {
                      this.isDisabled() || (this.isOpen() ? this.close() : this.open())
                  }, o.prototype.open = function() {
                      this.isOpen() || this.isDisabled() || this.trigger("query", {})
                  }, o.prototype.close = function(e) {
                      this.isOpen() && this.trigger("close", {
                          originalEvent: e
                      })
                  }, o.prototype.isEnabled = function() {
                      return !this.isDisabled()
                  }, o.prototype.isDisabled = function() {
                      return this.options.get("disabled")
                  }, o.prototype.isOpen = function() {
                      return this.$container.hasClass("select2-container--open")
                  }, o.prototype.hasFocus = function() {
                      return this.$container.hasClass("select2-container--focus")
                  }, o.prototype.focus = function(e) {
                      this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                  }, o.prototype.enable = function(e) {
                      this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
                      var t = !e[0];
                      this.$element.prop("disabled", t)
                  }, o.prototype.data = function() {
                      this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                      var e = [];
                      return this.dataAdapter.current((function(t) {
                          e = t
                      })), e
                  }, o.prototype.val = function(t) {
                      if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length)
                          return this.$element.val();
                      var n = t[0];
                      e.isArray(n) && (n = e.map(n, (function(e) {
                          return e.toString()
                      }))), this.$element.val(n).trigger("input").trigger("change")
                  }, o.prototype.destroy = function() {
                      this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), n.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                  }, o.prototype.render = function() {
                      var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                      return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), n.StoreData(t[0], "element", this.$element), t
                  }, o
              })), t.define("jquery-mousewheel", ["jquery"], (function(e) {
                  return e
              })), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], (function(e, t, n, r, o) {
                  if (null == e.fn.select2) {
                      var i = ["open", "close", "destroy"];
                      e.fn.select2 = function(t) {
                          if ("object" == typeof (t = t || {}))
                              return this.each((function() {
                                  var r = e.extend(!0, {}, t);
                                  new n(e(this), r)
                              })), this;
                          if ("string" == typeof t) {
                              var r,
                                  s = Array.prototype.slice.call(arguments, 1);
                              return this.each((function() {
                                  var e = o.GetData(this, "select2");
                                  null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), r = e[t].apply(e, s)
                              })), e.inArray(t, i) > -1 ? this : r
                          }
                          throw new Error("Invalid arguments for Select2: " + t)
                      }
                  }
                  return null == e.fn.select2.defaults && (e.fn.select2.defaults = r), n
              })), {
                  define: t.define,
                  require: t.require
              }
          }(),
          n = t.require("jquery.select2");
      return e.fn.select2.amd = t, n
  }) ? r.apply(t, o) : r) || (e.exports = i)
}]);

