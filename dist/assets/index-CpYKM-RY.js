var am = Object.defineProperty; var lm = (e, t, i) => t in e ? am(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i; var Ve = (e, t, i) => lm(e, typeof t != "symbol" ? t + "" : t, i); function cm(e, t) { for (var i = 0; i < t.length; i++) { const s = t[i]; if (typeof s != "string" && !Array.isArray(s)) { for (const r in s) if (r !== "default" && !(r in e)) { const o = Object.getOwnPropertyDescriptor(s, r); o && Object.defineProperty(e, r, o.get ? o : { enumerable: !0, get: () => s[r] }) } } } return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })) } (function () { const t = document.createElement("link").relList; if (t && t.supports && t.supports("modulepreload")) return; for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r); new MutationObserver(r => { for (const o of r) if (o.type === "childList") for (const a of o.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && s(a) }).observe(document, { childList: !0, subtree: !0 }); function i(r) { const o = {}; return r.integrity && (o.integrity = r.integrity), r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? o.credentials = "include" : r.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o } function s(r) { if (r.ep) return; r.ep = !0; const o = i(r); fetch(r.href, o) } })(); function Is(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e } var bc = { exports: {} }, Rs = {}, wc = { exports: {} }, _ = {};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ji = Symbol.for("react.element"), dm = Symbol.for("react.portal"), um = Symbol.for("react.fragment"), mm = Symbol.for("react.strict_mode"), pm = Symbol.for("react.profiler"), hm = Symbol.for("react.provider"), fm = Symbol.for("react.context"), gm = Symbol.for("react.forward_ref"), xm = Symbol.for("react.suspense"), ym = Symbol.for("react.memo"), vm = Symbol.for("react.lazy"), Ha = Symbol.iterator; function bm(e) { return e === null || typeof e != "object" ? null : (e = Ha && e[Ha] || e["@@iterator"], typeof e == "function" ? e : null) } var jc = { isMounted: function () { return !1 }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, Nc = Object.assign, kc = {}; function kn(e, t, i) { this.props = e, this.context = t, this.refs = kc, this.updater = i || jc } kn.prototype.isReactComponent = {}; kn.prototype.setState = function (e, t) { if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState") }; kn.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate") }; function Sc() { } Sc.prototype = kn.prototype; function Mo(e, t, i) { this.props = e, this.context = t, this.refs = kc, this.updater = i || jc } var Ho = Mo.prototype = new Sc; Ho.constructor = Mo; Nc(Ho, kn.prototype); Ho.isPureReactComponent = !0; var La = Array.isArray, qc = Object.prototype.hasOwnProperty, Lo = { current: null }, Tc = { key: !0, ref: !0, __self: !0, __source: !0 }; function Ec(e, t, i) { var s, r = {}, o = null, a = null; if (t != null) for (s in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (o = "" + t.key), t) qc.call(t, s) && !Tc.hasOwnProperty(s) && (r[s] = t[s]); var l = arguments.length - 2; if (l === 1) r.children = i; else if (1 < l) { for (var c = Array(l), d = 0; d < l; d++)c[d] = arguments[d + 2]; r.children = c } if (e && e.defaultProps) for (s in l = e.defaultProps, l) r[s] === void 0 && (r[s] = l[s]); return { $$typeof: ji, type: e, key: o, ref: a, props: r, _owner: Lo.current } } function wm(e, t) { return { $$typeof: ji, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner } } function Qo(e) { return typeof e == "object" && e !== null && e.$$typeof === ji } function jm(e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function (i) { return t[i] }) } var Qa = /\/+/g; function sr(e, t) { return typeof e == "object" && e !== null && e.key != null ? jm("" + e.key) : t.toString(36) } function Ki(e, t, i, s, r) { var o = typeof e; (o === "undefined" || o === "boolean") && (e = null); var a = !1; if (e === null) a = !0; else switch (o) { case "string": case "number": a = !0; break; case "object": switch (e.$$typeof) { case ji: case dm: a = !0 } }if (a) return a = e, r = r(a), e = s === "" ? "." + sr(a, 0) : s, La(r) ? (i = "", e != null && (i = e.replace(Qa, "$&/") + "/"), Ki(r, t, i, "", function (d) { return d })) : r != null && (Qo(r) && (r = wm(r, i + (!r.key || a && a.key === r.key ? "" : ("" + r.key).replace(Qa, "$&/") + "/") + e)), t.push(r)), 1; if (a = 0, s = s === "" ? "." : s + ":", La(e)) for (var l = 0; l < e.length; l++) { o = e[l]; var c = s + sr(o, l); a += Ki(o, t, i, c, r) } else if (c = bm(e), typeof c == "function") for (e = c.call(e), l = 0; !(o = e.next()).done;)o = o.value, c = s + sr(o, l++), a += Ki(o, t, i, c, r); else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return a } function Ci(e, t, i) { if (e == null) return e; var s = [], r = 0; return Ki(e, s, "", "", function (o) { return t.call(i, o, r++) }), s } function Nm(e) { if (e._status === -1) { var t = e._result; t = t(), t.then(function (i) { (e._status === 0 || e._status === -1) && (e._status = 1, e._result = i) }, function (i) { (e._status === 0 || e._status === -1) && (e._status = 2, e._result = i) }), e._status === -1 && (e._status = 0, e._result = t) } if (e._status === 1) return e._result.default; throw e._result } var fe = { current: null }, Xi = { transition: null }, km = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: Xi, ReactCurrentOwner: Lo }; function Dc() { throw Error("act(...) is not supported in production builds of React.") } _.Children = { map: Ci, forEach: function (e, t, i) { Ci(e, function () { t.apply(this, arguments) }, i) }, count: function (e) { var t = 0; return Ci(e, function () { t++ }), t }, toArray: function (e) { return Ci(e, function (t) { return t }) || [] }, only: function (e) { if (!Qo(e)) throw Error("React.Children.only expected to receive a single React element child."); return e } }; _.Component = kn; _.Fragment = um; _.Profiler = pm; _.PureComponent = Mo; _.StrictMode = mm; _.Suspense = xm; _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = km; _.act = Dc; _.cloneElement = function (e, t, i) { if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var s = Nc({}, e.props), r = e.key, o = e.ref, a = e._owner; if (t != null) { if (t.ref !== void 0 && (o = t.ref, a = Lo.current), t.key !== void 0 && (r = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps; for (c in t) qc.call(t, c) && !Tc.hasOwnProperty(c) && (s[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c]) } var c = arguments.length - 2; if (c === 1) s.children = i; else if (1 < c) { l = Array(c); for (var d = 0; d < c; d++)l[d] = arguments[d + 2]; s.children = l } return { $$typeof: ji, type: e.type, key: r, ref: o, props: s, _owner: a } }; _.createContext = function (e) { return e = { $$typeof: fm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: hm, _context: e }, e.Consumer = e }; _.createElement = Ec; _.createFactory = function (e) { var t = Ec.bind(null, e); return t.type = e, t }; _.createRef = function () { return { current: null } }; _.forwardRef = function (e) { return { $$typeof: gm, render: e } }; _.isValidElement = Qo; _.lazy = function (e) { return { $$typeof: vm, _payload: { _status: -1, _result: e }, _init: Nm } }; _.memo = function (e, t) { return { $$typeof: ym, type: e, compare: t === void 0 ? null : t } }; _.startTransition = function (e) { var t = Xi.transition; Xi.transition = {}; try { e() } finally { Xi.transition = t } }; _.unstable_act = Dc; _.useCallback = function (e, t) { return fe.current.useCallback(e, t) }; _.useContext = function (e) { return fe.current.useContext(e) }; _.useDebugValue = function () { }; _.useDeferredValue = function (e) { return fe.current.useDeferredValue(e) }; _.useEffect = function (e, t) { return fe.current.useEffect(e, t) }; _.useId = function () { return fe.current.useId() }; _.useImperativeHandle = function (e, t, i) { return fe.current.useImperativeHandle(e, t, i) }; _.useInsertionEffect = function (e, t) { return fe.current.useInsertionEffect(e, t) }; _.useLayoutEffect = function (e, t) { return fe.current.useLayoutEffect(e, t) }; _.useMemo = function (e, t) { return fe.current.useMemo(e, t) }; _.useReducer = function (e, t, i) { return fe.current.useReducer(e, t, i) }; _.useRef = function (e) { return fe.current.useRef(e) }; _.useState = function (e) { return fe.current.useState(e) }; _.useSyncExternalStore = function (e, t, i) { return fe.current.useSyncExternalStore(e, t, i) }; _.useTransition = function () { return fe.current.useTransition() }; _.version = "18.3.1"; wc.exports = _; var b = wc.exports; const z = Is(b), Sm = cm({ __proto__: null, default: z }, [b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm = b, Tm = Symbol.for("react.element"), Em = Symbol.for("react.fragment"), Dm = Object.prototype.hasOwnProperty, Cm = qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Am = { key: !0, ref: !0, __self: !0, __source: !0 }; function Cc(e, t, i) { var s, r = {}, o = null, a = null; i !== void 0 && (o = "" + i), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (a = t.ref); for (s in t) Dm.call(t, s) && !Am.hasOwnProperty(s) && (r[s] = t[s]); if (e && e.defaultProps) for (s in t = e.defaultProps, t) r[s] === void 0 && (r[s] = t[s]); return { $$typeof: Tm, type: e, key: o, ref: a, props: r, _owner: Cm.current } } Rs.Fragment = Em; Rs.jsx = Cc; Rs.jsxs = Cc; bc.exports = Rs; var n = bc.exports, Br = {}, Ac = { exports: {} }, qe = {}, Fc = { exports: {} }, _c = {};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function (e) { function t(E, A) { var F = E.length; E.push(A); e: for (; 0 < F;) { var K = F - 1 >>> 1, ie = E[K]; if (0 < r(ie, A)) E[K] = A, E[F] = ie, F = K; else break e } } function i(E) { return E.length === 0 ? null : E[0] } function s(E) { if (E.length === 0) return null; var A = E[0], F = E.pop(); if (F !== A) { E[0] = F; e: for (var K = 0, ie = E.length, Ei = ie >>> 1; K < Ei;) { var Dt = 2 * (K + 1) - 1, ir = E[Dt], Ct = Dt + 1, Di = E[Ct]; if (0 > r(ir, F)) Ct < ie && 0 > r(Di, ir) ? (E[K] = Di, E[Ct] = F, K = Ct) : (E[K] = ir, E[Dt] = F, K = Dt); else if (Ct < ie && 0 > r(Di, F)) E[K] = Di, E[Ct] = F, K = Ct; else break e } } return A } function r(E, A) { var F = E.sortIndex - A.sortIndex; return F !== 0 ? F : E.id - A.id } if (typeof performance == "object" && typeof performance.now == "function") { var o = performance; e.unstable_now = function () { return o.now() } } else { var a = Date, l = a.now(); e.unstable_now = function () { return a.now() - l } } var c = [], d = [], m = 1, h = null, g = 3, x = !1, w = !1, v = !1, S = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, u = typeof setImmediate < "u" ? setImmediate : null; typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling); function p(E) { for (var A = i(d); A !== null;) { if (A.callback === null) s(d); else if (A.startTime <= E) s(d), A.sortIndex = A.expirationTime, t(c, A); else break; A = i(d) } } function y(E) { if (v = !1, p(E), !w) if (i(c) !== null) w = !0, tr(k); else { var A = i(d); A !== null && nr(y, A.startTime - E) } } function k(E, A) { w = !1, v && (v = !1, f(C), C = -1), x = !0; var F = g; try { for (p(A), h = i(c); h !== null && (!(h.expirationTime > A) || E && !ze());) { var K = h.callback; if (typeof K == "function") { h.callback = null, g = h.priorityLevel; var ie = K(h.expirationTime <= A); A = e.unstable_now(), typeof ie == "function" ? h.callback = ie : h === i(c) && s(c), p(A) } else s(c); h = i(c) } if (h !== null) var Ei = !0; else { var Dt = i(d); Dt !== null && nr(y, Dt.startTime - A), Ei = !1 } return Ei } finally { h = null, g = F, x = !1 } } var q = !1, D = null, C = -1, V = 5, P = -1; function ze() { return !(e.unstable_now() - P < V) } function Cn() { if (D !== null) { var E = e.unstable_now(); P = E; var A = !0; try { A = D(!0, E) } finally { A ? An() : (q = !1, D = null) } } else q = !1 } var An; if (typeof u == "function") An = function () { u(Cn) }; else if (typeof MessageChannel < "u") { var Ma = new MessageChannel, om = Ma.port2; Ma.port1.onmessage = Cn, An = function () { om.postMessage(null) } } else An = function () { S(Cn, 0) }; function tr(E) { D = E, q || (q = !0, An()) } function nr(E, A) { C = S(function () { E(e.unstable_now()) }, A) } e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (E) { E.callback = null }, e.unstable_continueExecution = function () { w || x || (w = !0, tr(k)) }, e.unstable_forceFrameRate = function (E) { 0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < E ? Math.floor(1e3 / E) : 5 }, e.unstable_getCurrentPriorityLevel = function () { return g }, e.unstable_getFirstCallbackNode = function () { return i(c) }, e.unstable_next = function (E) { switch (g) { case 1: case 2: case 3: var A = 3; break; default: A = g }var F = g; g = A; try { return E() } finally { g = F } }, e.unstable_pauseExecution = function () { }, e.unstable_requestPaint = function () { }, e.unstable_runWithPriority = function (E, A) { switch (E) { case 1: case 2: case 3: case 4: case 5: break; default: E = 3 }var F = g; g = E; try { return A() } finally { g = F } }, e.unstable_scheduleCallback = function (E, A, F) { var K = e.unstable_now(); switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? K + F : K) : F = K, E) { case 1: var ie = -1; break; case 2: ie = 250; break; case 5: ie = 1073741823; break; case 4: ie = 1e4; break; default: ie = 5e3 }return ie = F + ie, E = { id: m++, callback: A, priorityLevel: E, startTime: F, expirationTime: ie, sortIndex: -1 }, F > K ? (E.sortIndex = F, t(d, E), i(c) === null && E === i(d) && (v ? (f(C), C = -1) : v = !0, nr(y, F - K))) : (E.sortIndex = ie, t(c, E), w || x || (w = !0, tr(k))), E }, e.unstable_shouldYield = ze, e.unstable_wrapCallback = function (E) { var A = g; return function () { var F = g; g = A; try { return E.apply(this, arguments) } finally { g = F } } } })(_c); Fc.exports = _c; var Fm = Fc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m = b, Se = Fm; function N(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++)t += "&args[]=" + encodeURIComponent(arguments[i]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." } var Pc = new Set, ii = {}; function Wt(e, t) { xn(e, t), xn(e + "Capture", t) } function xn(e, t) { for (ii[e] = t, e = 0; e < t.length; e++)Pc.add(t[e]) } var tt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Or = Object.prototype.hasOwnProperty, Pm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ua = {}, Wa = {}; function zm(e) { return Or.call(Wa, e) ? !0 : Or.call(Ua, e) ? !1 : Pm.test(e) ? Wa[e] = !0 : (Ua[e] = !0, !1) } function Im(e, t, i, s) { if (i !== null && i.type === 0) return !1; switch (typeof t) { case "function": case "symbol": return !0; case "boolean": return s ? !1 : i !== null ? !i.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-"); default: return !1 } } function Rm(e, t, i, s) { if (t === null || typeof t > "u" || Im(e, t, i, s)) return !0; if (s) return !1; if (i !== null) switch (i.type) { case 3: return !t; case 4: return t === !1; case 5: return isNaN(t); case 6: return isNaN(t) || 1 > t }return !1 } function ge(e, t, i, s, r, o, a) { this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = r, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = a } var le = {}; "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) { le[e] = new ge(e, 0, !1, e, null, !1, !1) });[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) { var t = e[0]; le[t] = new ge(t, 1, !1, e[1], null, !1, !1) });["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) { le[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1, !1) });["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) { le[e] = new ge(e, 2, !1, e, null, !1, !1) }); "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) { le[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1, !1) });["checked", "multiple", "muted", "selected"].forEach(function (e) { le[e] = new ge(e, 3, !0, e, null, !1, !1) });["capture", "download"].forEach(function (e) { le[e] = new ge(e, 4, !1, e, null, !1, !1) });["cols", "rows", "size", "span"].forEach(function (e) { le[e] = new ge(e, 6, !1, e, null, !1, !1) });["rowSpan", "start"].forEach(function (e) { le[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1, !1) }); var Uo = /[\-:]([a-z])/g; function Wo(e) { return e[1].toUpperCase() } "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) { var t = e.replace(Uo, Wo); le[t] = new ge(t, 1, !1, e, null, !1, !1) }); "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) { var t = e.replace(Uo, Wo); le[t] = new ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1) });["xml:base", "xml:lang", "xml:space"].forEach(function (e) { var t = e.replace(Uo, Wo); le[t] = new ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1) });["tabIndex", "crossOrigin"].forEach(function (e) { le[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1, !1) }); le.xlinkHref = new ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);["src", "href", "action", "formAction"].forEach(function (e) { le[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0, !0) }); function Go(e, t, i, s) { var r = le.hasOwnProperty(t) ? le[t] : null; (r !== null ? r.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Rm(t, i, r, s) && (i = null), s || r === null ? zm(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i)) : r.mustUseProperty ? e[r.propertyName] = i === null ? r.type === 3 ? !1 : "" : i : (t = r.attributeName, s = r.attributeNamespace, i === null ? e.removeAttribute(t) : (r = r.type, i = r === 3 || r === 4 && i === !0 ? "" : "" + i, s ? e.setAttributeNS(s, t, i) : e.setAttribute(t, i)))) } var rt = _m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ai = Symbol.for("react.element"), Kt = Symbol.for("react.portal"), Xt = Symbol.for("react.fragment"), $o = Symbol.for("react.strict_mode"), Mr = Symbol.for("react.profiler"), zc = Symbol.for("react.provider"), Ic = Symbol.for("react.context"), Yo = Symbol.for("react.forward_ref"), Hr = Symbol.for("react.suspense"), Lr = Symbol.for("react.suspense_list"), Vo = Symbol.for("react.memo"), at = Symbol.for("react.lazy"), Rc = Symbol.for("react.offscreen"), Ga = Symbol.iterator; function Fn(e) { return e === null || typeof e != "object" ? null : (e = Ga && e[Ga] || e["@@iterator"], typeof e == "function" ? e : null) } var $ = Object.assign, rr; function Qn(e) {
    if (rr === void 0) try { throw Error() } catch (i) { var t = i.stack.trim().match(/\n( *(at )?)/); rr = t && t[1] || "" } return `
`+ rr + e
} var or = !1; function ar(e, t) {
    if (!e || or) return ""; or = !0; var i = Error.prepareStackTrace; Error.prepareStackTrace = void 0; try { if (t) if (t = function () { throw Error() }, Object.defineProperty(t.prototype, "props", { set: function () { throw Error() } }), typeof Reflect == "object" && Reflect.construct) { try { Reflect.construct(t, []) } catch (d) { var s = d } Reflect.construct(e, [], t) } else { try { t.call() } catch (d) { s = d } e.call(t.prototype) } else { try { throw Error() } catch (d) { s = d } e() } } catch (d) {
        if (d && s && typeof d.stack == "string") {
            for (var r = d.stack.split(`
`), o = s.stack.split(`
`), a = r.length - 1, l = o.length - 1; 1 <= a && 0 <= l && r[a] !== o[l];)l--; for (; 1 <= a && 0 <= l; a--, l--)if (r[a] !== o[l]) {
                if (a !== 1 || l !== 1) do if (a--, l--, 0 > l || r[a] !== o[l]) {
                    var c = `
`+ r[a].replace(" at new ", " at "); return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c
                } while (1 <= a && 0 <= l); break
            }
        }
    } finally { or = !1, Error.prepareStackTrace = i } return (e = e ? e.displayName || e.name : "") ? Qn(e) : ""
} function Bm(e) { switch (e.tag) { case 5: return Qn(e.type); case 16: return Qn("Lazy"); case 13: return Qn("Suspense"); case 19: return Qn("SuspenseList"); case 0: case 2: case 15: return e = ar(e.type, !1), e; case 11: return e = ar(e.type.render, !1), e; case 1: return e = ar(e.type, !0), e; default: return "" } } function Qr(e) { if (e == null) return null; if (typeof e == "function") return e.displayName || e.name || null; if (typeof e == "string") return e; switch (e) { case Xt: return "Fragment"; case Kt: return "Portal"; case Mr: return "Profiler"; case $o: return "StrictMode"; case Hr: return "Suspense"; case Lr: return "SuspenseList" }if (typeof e == "object") switch (e.$$typeof) { case Ic: return (e.displayName || "Context") + ".Consumer"; case zc: return (e._context.displayName || "Context") + ".Provider"; case Yo: var t = e.render; return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e; case Vo: return t = e.displayName || null, t !== null ? t : Qr(e.type) || "Memo"; case at: t = e._payload, e = e._init; try { return Qr(e(t)) } catch { } }return null } function Om(e) { var t = e.type; switch (e.tag) { case 24: return "Cache"; case 9: return (t.displayName || "Context") + ".Consumer"; case 10: return (t._context.displayName || "Context") + ".Provider"; case 18: return "DehydratedFragment"; case 11: return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"); case 7: return "Fragment"; case 5: return t; case 4: return "Portal"; case 3: return "Root"; case 6: return "Text"; case 16: return Qr(t); case 8: return t === $o ? "StrictMode" : "Mode"; case 22: return "Offscreen"; case 12: return "Profiler"; case 21: return "Scope"; case 13: return "Suspense"; case 19: return "SuspenseList"; case 25: return "TracingMarker"; case 1: case 0: case 17: case 2: case 14: case 15: if (typeof t == "function") return t.displayName || t.name || null; if (typeof t == "string") return t }return null } function Nt(e) { switch (typeof e) { case "boolean": case "number": case "string": case "undefined": return e; case "object": return e; default: return "" } } function Bc(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio") } function Mm(e) { var t = Bc(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), s = "" + e[t]; if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") { var r = i.get, o = i.set; return Object.defineProperty(e, t, { configurable: !0, get: function () { return r.call(this) }, set: function (a) { s = "" + a, o.call(this, a) } }), Object.defineProperty(e, t, { enumerable: i.enumerable }), { getValue: function () { return s }, setValue: function (a) { s = "" + a }, stopTracking: function () { e._valueTracker = null, delete e[t] } } } } function Fi(e) { e._valueTracker || (e._valueTracker = Mm(e)) } function Oc(e) { if (!e) return !1; var t = e._valueTracker; if (!t) return !0; var i = t.getValue(), s = ""; return e && (s = Bc(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== i ? (t.setValue(e), !0) : !1 } function us(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null; try { return e.activeElement || e.body } catch { return e.body } } function Ur(e, t) { var i = t.checked; return $({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? e._wrapperState.initialChecked }) } function $a(e, t) { var i = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked; i = Nt(t.value != null ? t.value : i), e._wrapperState = { initialChecked: s, initialValue: i, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null } } function Mc(e, t) { t = t.checked, t != null && Go(e, "checked", t, !1) } function Wr(e, t) { Mc(e, t); var i = Nt(t.value), s = t.type; if (i != null) s === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i); else if (s === "submit" || s === "reset") { e.removeAttribute("value"); return } t.hasOwnProperty("value") ? Gr(e, t.type, i) : t.hasOwnProperty("defaultValue") && Gr(e, t.type, Nt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked) } function Ya(e, t, i) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) { var s = t.type; if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return; t = "" + e._wrapperState.initialValue, i || t === e.value || (e.value = t), e.defaultValue = t } i = e.name, i !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, i !== "" && (e.name = i) } function Gr(e, t, i) { (t !== "number" || us(e.ownerDocument) !== e) && (i == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + i && (e.defaultValue = "" + i)) } var Un = Array.isArray; function cn(e, t, i, s) { if (e = e.options, t) { t = {}; for (var r = 0; r < i.length; r++)t["$" + i[r]] = !0; for (i = 0; i < e.length; i++)r = t.hasOwnProperty("$" + e[i].value), e[i].selected !== r && (e[i].selected = r), r && s && (e[i].defaultSelected = !0) } else { for (i = "" + Nt(i), t = null, r = 0; r < e.length; r++) { if (e[r].value === i) { e[r].selected = !0, s && (e[r].defaultSelected = !0); return } t !== null || e[r].disabled || (t = e[r]) } t !== null && (t.selected = !0) } } function $r(e, t) { if (t.dangerouslySetInnerHTML != null) throw Error(N(91)); return $({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }) } function Va(e, t) { var i = t.value; if (i == null) { if (i = t.children, t = t.defaultValue, i != null) { if (t != null) throw Error(N(92)); if (Un(i)) { if (1 < i.length) throw Error(N(93)); i = i[0] } t = i } t == null && (t = ""), i = t } e._wrapperState = { initialValue: Nt(i) } } function Hc(e, t) { var i = Nt(t.value), s = Nt(t.defaultValue); i != null && (i = "" + i, i !== e.value && (e.value = i), t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)), s != null && (e.defaultValue = "" + s) } function Ka(e) { var t = e.textContent; t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t) } function Lc(e) { switch (e) { case "svg": return "http://www.w3.org/2000/svg"; case "math": return "http://www.w3.org/1998/Math/MathML"; default: return "http://www.w3.org/1999/xhtml" } } function Yr(e, t) { return e == null || e === "http://www.w3.org/1999/xhtml" ? Lc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e } var _i, Qc = function (e) { return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, i, s, r) { MSApp.execUnsafeLocalFunction(function () { return e(t, i, s, r) }) } : e }(function (e, t) { if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t; else { for (_i = _i || document.createElement("div"), _i.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = _i.firstChild; e.firstChild;)e.removeChild(e.firstChild); for (; t.firstChild;)e.appendChild(t.firstChild) } }); function si(e, t) { if (t) { var i = e.firstChild; if (i && i === e.lastChild && i.nodeType === 3) { i.nodeValue = t; return } } e.textContent = t } var $n = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, Hm = ["Webkit", "ms", "Moz", "O"]; Object.keys($n).forEach(function (e) { Hm.forEach(function (t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), $n[t] = $n[e] }) }); function Uc(e, t, i) { return t == null || typeof t == "boolean" || t === "" ? "" : i || typeof t != "number" || t === 0 || $n.hasOwnProperty(e) && $n[e] ? ("" + t).trim() : t + "px" } function Wc(e, t) { e = e.style; for (var i in t) if (t.hasOwnProperty(i)) { var s = i.indexOf("--") === 0, r = Uc(i, t[i], s); i === "float" && (i = "cssFloat"), s ? e.setProperty(i, r) : e[i] = r } } var Lm = $({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }); function Vr(e, t) { if (t) { if (Lm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e)); if (t.dangerouslySetInnerHTML != null) { if (t.children != null) throw Error(N(60)); if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(N(61)) } if (t.style != null && typeof t.style != "object") throw Error(N(62)) } } function Kr(e, t) { if (e.indexOf("-") === -1) return typeof t.is == "string"; switch (e) { case "annotation-xml": case "color-profile": case "font-face": case "font-face-src": case "font-face-uri": case "font-face-format": case "font-face-name": case "missing-glyph": return !1; default: return !0 } } var Xr = null; function Ko(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e } var Jr = null, dn = null, un = null; function Xa(e) { if (e = Si(e)) { if (typeof Jr != "function") throw Error(N(280)); var t = e.stateNode; t && (t = Ls(t), Jr(e.stateNode, e.type, t)) } } function Gc(e) { dn ? un ? un.push(e) : un = [e] : dn = e } function $c() { if (dn) { var e = dn, t = un; if (un = dn = null, Xa(e), t) for (e = 0; e < t.length; e++)Xa(t[e]) } } function Yc(e, t) { return e(t) } function Vc() { } var lr = !1; function Kc(e, t, i) { if (lr) return e(t, i); lr = !0; try { return Yc(e, t, i) } finally { lr = !1, (dn !== null || un !== null) && (Vc(), $c()) } } function ri(e, t) { var i = e.stateNode; if (i === null) return null; var s = Ls(i); if (s === null) return null; i = s[t]; e: switch (t) { case "onClick": case "onClickCapture": case "onDoubleClick": case "onDoubleClickCapture": case "onMouseDown": case "onMouseDownCapture": case "onMouseMove": case "onMouseMoveCapture": case "onMouseUp": case "onMouseUpCapture": case "onMouseEnter": (s = !s.disabled) || (e = e.type, s = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !s; break e; default: e = !1 }if (e) return null; if (i && typeof i != "function") throw Error(N(231, t, typeof i)); return i } var Zr = !1; if (tt) try { var _n = {}; Object.defineProperty(_n, "passive", { get: function () { Zr = !0 } }), window.addEventListener("test", _n, _n), window.removeEventListener("test", _n, _n) } catch { Zr = !1 } function Qm(e, t, i, s, r, o, a, l, c) { var d = Array.prototype.slice.call(arguments, 3); try { t.apply(i, d) } catch (m) { this.onError(m) } } var Yn = !1, ms = null, ps = !1, eo = null, Um = { onError: function (e) { Yn = !0, ms = e } }; function Wm(e, t, i, s, r, o, a, l, c) { Yn = !1, ms = null, Qm.apply(Um, arguments) } function Gm(e, t, i, s, r, o, a, l, c) { if (Wm.apply(this, arguments), Yn) { if (Yn) { var d = ms; Yn = !1, ms = null } else throw Error(N(198)); ps || (ps = !0, eo = d) } } function Gt(e) { var t = e, i = e; if (e.alternate) for (; t.return;)t = t.return; else { e = t; do t = e, t.flags & 4098 && (i = t.return), e = t.return; while (e) } return t.tag === 3 ? i : null } function Xc(e) { if (e.tag === 13) { var t = e.memoizedState; if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated } return null } function Ja(e) { if (Gt(e) !== e) throw Error(N(188)) } function $m(e) { var t = e.alternate; if (!t) { if (t = Gt(e), t === null) throw Error(N(188)); return t !== e ? null : e } for (var i = e, s = t; ;) { var r = i.return; if (r === null) break; var o = r.alternate; if (o === null) { if (s = r.return, s !== null) { i = s; continue } break } if (r.child === o.child) { for (o = r.child; o;) { if (o === i) return Ja(r), e; if (o === s) return Ja(r), t; o = o.sibling } throw Error(N(188)) } if (i.return !== s.return) i = r, s = o; else { for (var a = !1, l = r.child; l;) { if (l === i) { a = !0, i = r, s = o; break } if (l === s) { a = !0, s = r, i = o; break } l = l.sibling } if (!a) { for (l = o.child; l;) { if (l === i) { a = !0, i = o, s = r; break } if (l === s) { a = !0, s = o, i = r; break } l = l.sibling } if (!a) throw Error(N(189)) } } if (i.alternate !== s) throw Error(N(190)) } if (i.tag !== 3) throw Error(N(188)); return i.stateNode.current === i ? e : t } function Jc(e) { return e = $m(e), e !== null ? Zc(e) : null } function Zc(e) { if (e.tag === 5 || e.tag === 6) return e; for (e = e.child; e !== null;) { var t = Zc(e); if (t !== null) return t; e = e.sibling } return null } var ed = Se.unstable_scheduleCallback, Za = Se.unstable_cancelCallback, Ym = Se.unstable_shouldYield, Vm = Se.unstable_requestPaint, X = Se.unstable_now, Km = Se.unstable_getCurrentPriorityLevel, Xo = Se.unstable_ImmediatePriority, td = Se.unstable_UserBlockingPriority, hs = Se.unstable_NormalPriority, Xm = Se.unstable_LowPriority, nd = Se.unstable_IdlePriority, Bs = null, $e = null; function Jm(e) { if ($e && typeof $e.onCommitFiberRoot == "function") try { $e.onCommitFiberRoot(Bs, e, void 0, (e.current.flags & 128) === 128) } catch { } } var He = Math.clz32 ? Math.clz32 : tp, Zm = Math.log, ep = Math.LN2; function tp(e) { return e >>>= 0, e === 0 ? 32 : 31 - (Zm(e) / ep | 0) | 0 } var Pi = 64, zi = 4194304; function Wn(e) { switch (e & -e) { case 1: return 1; case 2: return 2; case 4: return 4; case 8: return 8; case 16: return 16; case 32: return 32; case 64: case 128: case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: return e & 4194240; case 4194304: case 8388608: case 16777216: case 33554432: case 67108864: return e & 130023424; case 134217728: return 134217728; case 268435456: return 268435456; case 536870912: return 536870912; case 1073741824: return 1073741824; default: return e } } function fs(e, t) { var i = e.pendingLanes; if (i === 0) return 0; var s = 0, r = e.suspendedLanes, o = e.pingedLanes, a = i & 268435455; if (a !== 0) { var l = a & ~r; l !== 0 ? s = Wn(l) : (o &= a, o !== 0 && (s = Wn(o))) } else a = i & ~r, a !== 0 ? s = Wn(a) : o !== 0 && (s = Wn(o)); if (s === 0) return 0; if (t !== 0 && t !== s && !(t & r) && (r = s & -s, o = t & -t, r >= o || r === 16 && (o & 4194240) !== 0)) return t; if (s & 4 && (s |= i & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t;)i = 31 - He(t), r = 1 << i, s |= e[i], t &= ~r; return s } function np(e, t) { switch (e) { case 1: case 2: case 4: return t + 250; case 8: case 16: case 32: case 64: case 128: case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: return t + 5e3; case 4194304: case 8388608: case 16777216: case 33554432: case 67108864: return -1; case 134217728: case 268435456: case 536870912: case 1073741824: return -1; default: return -1 } } function ip(e, t) { for (var i = e.suspendedLanes, s = e.pingedLanes, r = e.expirationTimes, o = e.pendingLanes; 0 < o;) { var a = 31 - He(o), l = 1 << a, c = r[a]; c === -1 ? (!(l & i) || l & s) && (r[a] = np(l, t)) : c <= t && (e.expiredLanes |= l), o &= ~l } } function to(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0 } function id() { var e = Pi; return Pi <<= 1, !(Pi & 4194240) && (Pi = 64), e } function cr(e) { for (var t = [], i = 0; 31 > i; i++)t.push(e); return t } function Ni(e, t, i) { e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - He(t), e[t] = i } function sp(e, t) { var i = e.pendingLanes & ~t; e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var s = e.eventTimes; for (e = e.expirationTimes; 0 < i;) { var r = 31 - He(i), o = 1 << r; t[r] = 0, s[r] = -1, e[r] = -1, i &= ~o } } function Jo(e, t) { var i = e.entangledLanes |= t; for (e = e.entanglements; i;) { var s = 31 - He(i), r = 1 << s; r & t | e[s] & t && (e[s] |= t), i &= ~r } } var O = 0; function sd(e) { return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1 } var rd, Zo, od, ad, ld, no = !1, Ii = [], ht = null, ft = null, gt = null, oi = new Map, ai = new Map, ct = [], rp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" "); function el(e, t) { switch (e) { case "focusin": case "focusout": ht = null; break; case "dragenter": case "dragleave": ft = null; break; case "mouseover": case "mouseout": gt = null; break; case "pointerover": case "pointerout": oi.delete(t.pointerId); break; case "gotpointercapture": case "lostpointercapture": ai.delete(t.pointerId) } } function Pn(e, t, i, s, r, o) { return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: i, eventSystemFlags: s, nativeEvent: o, targetContainers: [r] }, t !== null && (t = Si(t), t !== null && Zo(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, r !== null && t.indexOf(r) === -1 && t.push(r), e) } function op(e, t, i, s, r) { switch (t) { case "focusin": return ht = Pn(ht, e, t, i, s, r), !0; case "dragenter": return ft = Pn(ft, e, t, i, s, r), !0; case "mouseover": return gt = Pn(gt, e, t, i, s, r), !0; case "pointerover": var o = r.pointerId; return oi.set(o, Pn(oi.get(o) || null, e, t, i, s, r)), !0; case "gotpointercapture": return o = r.pointerId, ai.set(o, Pn(ai.get(o) || null, e, t, i, s, r)), !0 }return !1 } function cd(e) { var t = Pt(e.target); if (t !== null) { var i = Gt(t); if (i !== null) { if (t = i.tag, t === 13) { if (t = Xc(i), t !== null) { e.blockedOn = t, ld(e.priority, function () { od(i) }); return } } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) { e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null; return } } } e.blockedOn = null } function Ji(e) { if (e.blockedOn !== null) return !1; for (var t = e.targetContainers; 0 < t.length;) { var i = io(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent); if (i === null) { i = e.nativeEvent; var s = new i.constructor(i.type, i); Xr = s, i.target.dispatchEvent(s), Xr = null } else return t = Si(i), t !== null && Zo(t), e.blockedOn = i, !1; t.shift() } return !0 } function tl(e, t, i) { Ji(e) && i.delete(t) } function ap() { no = !1, ht !== null && Ji(ht) && (ht = null), ft !== null && Ji(ft) && (ft = null), gt !== null && Ji(gt) && (gt = null), oi.forEach(tl), ai.forEach(tl) } function zn(e, t) { e.blockedOn === t && (e.blockedOn = null, no || (no = !0, Se.unstable_scheduleCallback(Se.unstable_NormalPriority, ap))) } function li(e) { function t(r) { return zn(r, e) } if (0 < Ii.length) { zn(Ii[0], e); for (var i = 1; i < Ii.length; i++) { var s = Ii[i]; s.blockedOn === e && (s.blockedOn = null) } } for (ht !== null && zn(ht, e), ft !== null && zn(ft, e), gt !== null && zn(gt, e), oi.forEach(t), ai.forEach(t), i = 0; i < ct.length; i++)s = ct[i], s.blockedOn === e && (s.blockedOn = null); for (; 0 < ct.length && (i = ct[0], i.blockedOn === null);)cd(i), i.blockedOn === null && ct.shift() } var mn = rt.ReactCurrentBatchConfig, gs = !0; function lp(e, t, i, s) { var r = O, o = mn.transition; mn.transition = null; try { O = 1, ea(e, t, i, s) } finally { O = r, mn.transition = o } } function cp(e, t, i, s) { var r = O, o = mn.transition; mn.transition = null; try { O = 4, ea(e, t, i, s) } finally { O = r, mn.transition = o } } function ea(e, t, i, s) { if (gs) { var r = io(e, t, i, s); if (r === null) vr(e, t, s, xs, i), el(e, s); else if (op(r, e, t, i, s)) s.stopPropagation(); else if (el(e, s), t & 4 && -1 < rp.indexOf(e)) { for (; r !== null;) { var o = Si(r); if (o !== null && rd(o), o = io(e, t, i, s), o === null && vr(e, t, s, xs, i), o === r) break; r = o } r !== null && s.stopPropagation() } else vr(e, t, s, null, i) } } var xs = null; function io(e, t, i, s) { if (xs = null, e = Ko(s), e = Pt(e), e !== null) if (t = Gt(e), t === null) e = null; else if (i = t.tag, i === 13) { if (e = Xc(t), e !== null) return e; e = null } else if (i === 3) { if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null; e = null } else t !== e && (e = null); return xs = e, null } function dd(e) { switch (e) { case "cancel": case "click": case "close": case "contextmenu": case "copy": case "cut": case "auxclick": case "dblclick": case "dragend": case "dragstart": case "drop": case "focusin": case "focusout": case "input": case "invalid": case "keydown": case "keypress": case "keyup": case "mousedown": case "mouseup": case "paste": case "pause": case "play": case "pointercancel": case "pointerdown": case "pointerup": case "ratechange": case "reset": case "resize": case "seeked": case "submit": case "touchcancel": case "touchend": case "touchstart": case "volumechange": case "change": case "selectionchange": case "textInput": case "compositionstart": case "compositionend": case "compositionupdate": case "beforeblur": case "afterblur": case "beforeinput": case "blur": case "fullscreenchange": case "focus": case "hashchange": case "popstate": case "select": case "selectstart": return 1; case "drag": case "dragenter": case "dragexit": case "dragleave": case "dragover": case "mousemove": case "mouseout": case "mouseover": case "pointermove": case "pointerout": case "pointerover": case "scroll": case "toggle": case "touchmove": case "wheel": case "mouseenter": case "mouseleave": case "pointerenter": case "pointerleave": return 4; case "message": switch (Km()) { case Xo: return 1; case td: return 4; case hs: case Xm: return 16; case nd: return 536870912; default: return 16 }default: return 16 } } var ut = null, ta = null, Zi = null; function ud() { if (Zi) return Zi; var e, t = ta, i = t.length, s, r = "value" in ut ? ut.value : ut.textContent, o = r.length; for (e = 0; e < i && t[e] === r[e]; e++); var a = i - e; for (s = 1; s <= a && t[i - s] === r[o - s]; s++); return Zi = r.slice(e, 1 < s ? 1 - s : void 0) } function es(e) { var t = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0 } function Ri() { return !0 } function nl() { return !1 } function Te(e) { function t(i, s, r, o, a) { this._reactName = i, this._targetInst = r, this.type = s, this.nativeEvent = o, this.target = a, this.currentTarget = null; for (var l in e) e.hasOwnProperty(l) && (i = e[l], this[l] = i ? i(o) : o[l]); return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ri : nl, this.isPropagationStopped = nl, this } return $(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var i = this.nativeEvent; i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = Ri) }, stopPropagation: function () { var i = this.nativeEvent; i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = Ri) }, persist: function () { }, isPersistent: Ri }), t } var Sn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 }, na = Te(Sn), ki = $({}, Sn, { view: 0, detail: 0 }), dp = Te(ki), dr, ur, In, Os = $({}, ki, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ia, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== In && (In && e.type === "mousemove" ? (dr = e.screenX - In.screenX, ur = e.screenY - In.screenY) : ur = dr = 0, In = e), dr) }, movementY: function (e) { return "movementY" in e ? e.movementY : ur } }), il = Te(Os), up = $({}, Os, { dataTransfer: 0 }), mp = Te(up), pp = $({}, ki, { relatedTarget: 0 }), mr = Te(pp), hp = $({}, Sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), fp = Te(hp), gp = $({}, Sn, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData } }), xp = Te(gp), yp = $({}, Sn, { data: 0 }), sl = Te(yp), vp = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, bp = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, wp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }; function jp(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : (e = wp[e]) ? !!t[e] : !1 } function ia() { return jp } var Np = $({}, ki, { key: function (e) { if (e.key) { var t = vp[e.key] || e.key; if (t !== "Unidentified") return t } return e.type === "keypress" ? (e = es(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? bp[e.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ia, charCode: function (e) { return e.type === "keypress" ? es(e) : 0 }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 }, which: function (e) { return e.type === "keypress" ? es(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 } }), kp = Te(Np), Sp = $({}, Os, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), rl = Te(Sp), qp = $({}, ki, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ia }), Tp = Te(qp), Ep = $({}, Sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Dp = Te(Ep), Cp = $({}, Os, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0 }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }), Ap = Te(Cp), Fp = [9, 13, 27, 32], sa = tt && "CompositionEvent" in window, Vn = null; tt && "documentMode" in document && (Vn = document.documentMode); var _p = tt && "TextEvent" in window && !Vn, md = tt && (!sa || Vn && 8 < Vn && 11 >= Vn), ol = " ", al = !1; function pd(e, t) { switch (e) { case "keyup": return Fp.indexOf(t.keyCode) !== -1; case "keydown": return t.keyCode !== 229; case "keypress": case "mousedown": case "focusout": return !0; default: return !1 } } function hd(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null } var Jt = !1; function Pp(e, t) { switch (e) { case "compositionend": return hd(t); case "keypress": return t.which !== 32 ? null : (al = !0, ol); case "textInput": return e = t.data, e === ol && al ? null : e; default: return null } } function zp(e, t) { if (Jt) return e === "compositionend" || !sa && pd(e, t) ? (e = ud(), Zi = ta = ut = null, Jt = !1, e) : null; switch (e) { case "paste": return null; case "keypress": if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) { if (t.char && 1 < t.char.length) return t.char; if (t.which) return String.fromCharCode(t.which) } return null; case "compositionend": return md && t.locale !== "ko" ? null : t.data; default: return null } } var Ip = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 }; function ll(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!Ip[e.type] : t === "textarea" } function fd(e, t, i, s) { Gc(s), t = ys(t, "onChange"), 0 < t.length && (i = new na("onChange", "change", null, i, s), e.push({ event: i, listeners: t })) } var Kn = null, ci = null; function Rp(e) { qd(e, 0) } function Ms(e) { var t = tn(e); if (Oc(t)) return e } function Bp(e, t) { if (e === "change") return t } var gd = !1; if (tt) { var pr; if (tt) { var hr = "oninput" in document; if (!hr) { var cl = document.createElement("div"); cl.setAttribute("oninput", "return;"), hr = typeof cl.oninput == "function" } pr = hr } else pr = !1; gd = pr && (!document.documentMode || 9 < document.documentMode) } function dl() { Kn && (Kn.detachEvent("onpropertychange", xd), ci = Kn = null) } function xd(e) { if (e.propertyName === "value" && Ms(ci)) { var t = []; fd(t, ci, e, Ko(e)), Kc(Rp, t) } } function Op(e, t, i) { e === "focusin" ? (dl(), Kn = t, ci = i, Kn.attachEvent("onpropertychange", xd)) : e === "focusout" && dl() } function Mp(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ms(ci) } function Hp(e, t) { if (e === "click") return Ms(t) } function Lp(e, t) { if (e === "input" || e === "change") return Ms(t) } function Qp(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t } var Qe = typeof Object.is == "function" ? Object.is : Qp; function di(e, t) { if (Qe(e, t)) return !0; if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1; var i = Object.keys(e), s = Object.keys(t); if (i.length !== s.length) return !1; for (s = 0; s < i.length; s++) { var r = i[s]; if (!Or.call(t, r) || !Qe(e[r], t[r])) return !1 } return !0 } function ul(e) { for (; e && e.firstChild;)e = e.firstChild; return e } function ml(e, t) { var i = ul(e); e = 0; for (var s; i;) { if (i.nodeType === 3) { if (s = e + i.textContent.length, e <= t && s >= t) return { node: i, offset: t - e }; e = s } e: { for (; i;) { if (i.nextSibling) { i = i.nextSibling; break e } i = i.parentNode } i = void 0 } i = ul(i) } } function yd(e, t) { return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? yd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1 } function vd() { for (var e = window, t = us(); t instanceof e.HTMLIFrameElement;) { try { var i = typeof t.contentWindow.location.href == "string" } catch { i = !1 } if (i) e = t.contentWindow; else break; t = us(e.document) } return t } function ra(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true") } function Up(e) { var t = vd(), i = e.focusedElem, s = e.selectionRange; if (t !== i && i && i.ownerDocument && yd(i.ownerDocument.documentElement, i)) { if (s !== null && ra(i)) { if (t = s.start, e = s.end, e === void 0 && (e = t), "selectionStart" in i) i.selectionStart = t, i.selectionEnd = Math.min(e, i.value.length); else if (e = (t = i.ownerDocument || document) && t.defaultView || window, e.getSelection) { e = e.getSelection(); var r = i.textContent.length, o = Math.min(s.start, r); s = s.end === void 0 ? o : Math.min(s.end, r), !e.extend && o > s && (r = s, s = o, o = r), r = ml(i, o); var a = ml(i, s); r && a && (e.rangeCount !== 1 || e.anchorNode !== r.node || e.anchorOffset !== r.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(r.node, r.offset), e.removeAllRanges(), o > s ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t))) } } for (t = [], e = i; e = e.parentNode;)e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop }); for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++)e = t[i], e.element.scrollLeft = e.left, e.element.scrollTop = e.top } } var Wp = tt && "documentMode" in document && 11 >= document.documentMode, Zt = null, so = null, Xn = null, ro = !1; function pl(e, t, i) { var s = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument; ro || Zt == null || Zt !== us(s) || (s = Zt, "selectionStart" in s && ra(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), Xn && di(Xn, s) || (Xn = s, s = ys(so, "onSelect"), 0 < s.length && (t = new na("onSelect", "select", null, t, i), e.push({ event: t, listeners: s }), t.target = Zt))) } function Bi(e, t) { var i = {}; return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i } var en = { animationend: Bi("Animation", "AnimationEnd"), animationiteration: Bi("Animation", "AnimationIteration"), animationstart: Bi("Animation", "AnimationStart"), transitionend: Bi("Transition", "TransitionEnd") }, fr = {}, bd = {}; tt && (bd = document.createElement("div").style, "AnimationEvent" in window || (delete en.animationend.animation, delete en.animationiteration.animation, delete en.animationstart.animation), "TransitionEvent" in window || delete en.transitionend.transition); function Hs(e) { if (fr[e]) return fr[e]; if (!en[e]) return e; var t = en[e], i; for (i in t) if (t.hasOwnProperty(i) && i in bd) return fr[e] = t[i]; return e } var wd = Hs("animationend"), jd = Hs("animationiteration"), Nd = Hs("animationstart"), kd = Hs("transitionend"), Sd = new Map, hl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" "); function St(e, t) { Sd.set(e, t), Wt(t, [e]) } for (var gr = 0; gr < hl.length; gr++) { var xr = hl[gr], Gp = xr.toLowerCase(), $p = xr[0].toUpperCase() + xr.slice(1); St(Gp, "on" + $p) } St(wd, "onAnimationEnd"); St(jd, "onAnimationIteration"); St(Nd, "onAnimationStart"); St("dblclick", "onDoubleClick"); St("focusin", "onFocus"); St("focusout", "onBlur"); St(kd, "onTransitionEnd"); xn("onMouseEnter", ["mouseout", "mouseover"]); xn("onMouseLeave", ["mouseout", "mouseover"]); xn("onPointerEnter", ["pointerout", "pointerover"]); xn("onPointerLeave", ["pointerout", "pointerover"]); Wt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")); Wt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")); Wt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]); Wt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")); Wt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")); Wt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")); var Gn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Yp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Gn)); function fl(e, t, i) { var s = e.type || "unknown-event"; e.currentTarget = i, Gm(s, t, void 0, e), e.currentTarget = null } function qd(e, t) { t = (t & 4) !== 0; for (var i = 0; i < e.length; i++) { var s = e[i], r = s.event; s = s.listeners; e: { var o = void 0; if (t) for (var a = s.length - 1; 0 <= a; a--) { var l = s[a], c = l.instance, d = l.currentTarget; if (l = l.listener, c !== o && r.isPropagationStopped()) break e; fl(r, l, d), o = c } else for (a = 0; a < s.length; a++) { if (l = s[a], c = l.instance, d = l.currentTarget, l = l.listener, c !== o && r.isPropagationStopped()) break e; fl(r, l, d), o = c } } } if (ps) throw e = eo, ps = !1, eo = null, e } function H(e, t) { var i = t[uo]; i === void 0 && (i = t[uo] = new Set); var s = e + "__bubble"; i.has(s) || (Td(t, e, 2, !1), i.add(s)) } function yr(e, t, i) { var s = 0; t && (s |= 4), Td(i, e, s, t) } var Oi = "_reactListening" + Math.random().toString(36).slice(2); function ui(e) { if (!e[Oi]) { e[Oi] = !0, Pc.forEach(function (i) { i !== "selectionchange" && (Yp.has(i) || yr(i, !1, e), yr(i, !0, e)) }); var t = e.nodeType === 9 ? e : e.ownerDocument; t === null || t[Oi] || (t[Oi] = !0, yr("selectionchange", !1, t)) } } function Td(e, t, i, s) { switch (dd(t)) { case 1: var r = lp; break; case 4: r = cp; break; default: r = ea }i = r.bind(null, t, i, e), r = void 0, !Zr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (r = !0), s ? r !== void 0 ? e.addEventListener(t, i, { capture: !0, passive: r }) : e.addEventListener(t, i, !0) : r !== void 0 ? e.addEventListener(t, i, { passive: r }) : e.addEventListener(t, i, !1) } function vr(e, t, i, s, r) { var o = s; if (!(t & 1) && !(t & 2) && s !== null) e: for (; ;) { if (s === null) return; var a = s.tag; if (a === 3 || a === 4) { var l = s.stateNode.containerInfo; if (l === r || l.nodeType === 8 && l.parentNode === r) break; if (a === 4) for (a = s.return; a !== null;) { var c = a.tag; if ((c === 3 || c === 4) && (c = a.stateNode.containerInfo, c === r || c.nodeType === 8 && c.parentNode === r)) return; a = a.return } for (; l !== null;) { if (a = Pt(l), a === null) return; if (c = a.tag, c === 5 || c === 6) { s = o = a; continue e } l = l.parentNode } } s = s.return } Kc(function () { var d = o, m = Ko(i), h = []; e: { var g = Sd.get(e); if (g !== void 0) { var x = na, w = e; switch (e) { case "keypress": if (es(i) === 0) break e; case "keydown": case "keyup": x = kp; break; case "focusin": w = "focus", x = mr; break; case "focusout": w = "blur", x = mr; break; case "beforeblur": case "afterblur": x = mr; break; case "click": if (i.button === 2) break e; case "auxclick": case "dblclick": case "mousedown": case "mousemove": case "mouseup": case "mouseout": case "mouseover": case "contextmenu": x = il; break; case "drag": case "dragend": case "dragenter": case "dragexit": case "dragleave": case "dragover": case "dragstart": case "drop": x = mp; break; case "touchcancel": case "touchend": case "touchmove": case "touchstart": x = Tp; break; case wd: case jd: case Nd: x = fp; break; case kd: x = Dp; break; case "scroll": x = dp; break; case "wheel": x = Ap; break; case "copy": case "cut": case "paste": x = xp; break; case "gotpointercapture": case "lostpointercapture": case "pointercancel": case "pointerdown": case "pointermove": case "pointerout": case "pointerover": case "pointerup": x = rl }var v = (t & 4) !== 0, S = !v && e === "scroll", f = v ? g !== null ? g + "Capture" : null : g; v = []; for (var u = d, p; u !== null;) { p = u; var y = p.stateNode; if (p.tag === 5 && y !== null && (p = y, f !== null && (y = ri(u, f), y != null && v.push(mi(u, y, p)))), S) break; u = u.return } 0 < v.length && (g = new x(g, w, null, i, m), h.push({ event: g, listeners: v })) } } if (!(t & 7)) { e: { if (g = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", g && i !== Xr && (w = i.relatedTarget || i.fromElement) && (Pt(w) || w[nt])) break e; if ((x || g) && (g = m.window === m ? m : (g = m.ownerDocument) ? g.defaultView || g.parentWindow : window, x ? (w = i.relatedTarget || i.toElement, x = d, w = w ? Pt(w) : null, w !== null && (S = Gt(w), w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (x = null, w = d), x !== w)) { if (v = il, y = "onMouseLeave", f = "onMouseEnter", u = "mouse", (e === "pointerout" || e === "pointerover") && (v = rl, y = "onPointerLeave", f = "onPointerEnter", u = "pointer"), S = x == null ? g : tn(x), p = w == null ? g : tn(w), g = new v(y, u + "leave", x, i, m), g.target = S, g.relatedTarget = p, y = null, Pt(m) === d && (v = new v(f, u + "enter", w, i, m), v.target = p, v.relatedTarget = S, y = v), S = y, x && w) t: { for (v = x, f = w, u = 0, p = v; p; p = Yt(p))u++; for (p = 0, y = f; y; y = Yt(y))p++; for (; 0 < u - p;)v = Yt(v), u--; for (; 0 < p - u;)f = Yt(f), p--; for (; u--;) { if (v === f || f !== null && v === f.alternate) break t; v = Yt(v), f = Yt(f) } v = null } else v = null; x !== null && gl(h, g, x, v, !1), w !== null && S !== null && gl(h, S, w, v, !0) } } e: { if (g = d ? tn(d) : window, x = g.nodeName && g.nodeName.toLowerCase(), x === "select" || x === "input" && g.type === "file") var k = Bp; else if (ll(g)) if (gd) k = Lp; else { k = Mp; var q = Op } else (x = g.nodeName) && x.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (k = Hp); if (k && (k = k(e, d))) { fd(h, k, i, m); break e } q && q(e, g, d), e === "focusout" && (q = g._wrapperState) && q.controlled && g.type === "number" && Gr(g, "number", g.value) } switch (q = d ? tn(d) : window, e) { case "focusin": (ll(q) || q.contentEditable === "true") && (Zt = q, so = d, Xn = null); break; case "focusout": Xn = so = Zt = null; break; case "mousedown": ro = !0; break; case "contextmenu": case "mouseup": case "dragend": ro = !1, pl(h, i, m); break; case "selectionchange": if (Wp) break; case "keydown": case "keyup": pl(h, i, m) }var D; if (sa) e: { switch (e) { case "compositionstart": var C = "onCompositionStart"; break e; case "compositionend": C = "onCompositionEnd"; break e; case "compositionupdate": C = "onCompositionUpdate"; break e }C = void 0 } else Jt ? pd(e, i) && (C = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (C = "onCompositionStart"); C && (md && i.locale !== "ko" && (Jt || C !== "onCompositionStart" ? C === "onCompositionEnd" && Jt && (D = ud()) : (ut = m, ta = "value" in ut ? ut.value : ut.textContent, Jt = !0)), q = ys(d, C), 0 < q.length && (C = new sl(C, e, null, i, m), h.push({ event: C, listeners: q }), D ? C.data = D : (D = hd(i), D !== null && (C.data = D)))), (D = _p ? Pp(e, i) : zp(e, i)) && (d = ys(d, "onBeforeInput"), 0 < d.length && (m = new sl("onBeforeInput", "beforeinput", null, i, m), h.push({ event: m, listeners: d }), m.data = D)) } qd(h, t) }) } function mi(e, t, i) { return { instance: e, listener: t, currentTarget: i } } function ys(e, t) { for (var i = t + "Capture", s = []; e !== null;) { var r = e, o = r.stateNode; r.tag === 5 && o !== null && (r = o, o = ri(e, i), o != null && s.unshift(mi(e, o, r)), o = ri(e, t), o != null && s.push(mi(e, o, r))), e = e.return } return s } function Yt(e) { if (e === null) return null; do e = e.return; while (e && e.tag !== 5); return e || null } function gl(e, t, i, s, r) { for (var o = t._reactName, a = []; i !== null && i !== s;) { var l = i, c = l.alternate, d = l.stateNode; if (c !== null && c === s) break; l.tag === 5 && d !== null && (l = d, r ? (c = ri(i, o), c != null && a.unshift(mi(i, c, l))) : r || (c = ri(i, o), c != null && a.push(mi(i, c, l)))), i = i.return } a.length !== 0 && e.push({ event: t, listeners: a }) } var Vp = /\r\n?/g, Kp = /\u0000|\uFFFD/g; function xl(e) {
    return (typeof e == "string" ? e : "" + e).replace(Vp, `
`).replace(Kp, "")
} function Mi(e, t, i) { if (t = xl(t), xl(e) !== t && i) throw Error(N(425)) } function vs() { } var oo = null, ao = null; function lo(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null } var co = typeof setTimeout == "function" ? setTimeout : void 0, Xp = typeof clearTimeout == "function" ? clearTimeout : void 0, yl = typeof Promise == "function" ? Promise : void 0, Jp = typeof queueMicrotask == "function" ? queueMicrotask : typeof yl < "u" ? function (e) { return yl.resolve(null).then(e).catch(Zp) } : co; function Zp(e) { setTimeout(function () { throw e }) } function br(e, t) { var i = t, s = 0; do { var r = i.nextSibling; if (e.removeChild(i), r && r.nodeType === 8) if (i = r.data, i === "/$") { if (s === 0) { e.removeChild(r), li(t); return } s-- } else i !== "$" && i !== "$?" && i !== "$!" || s++; i = r } while (i); li(t) } function xt(e) { for (; e != null; e = e.nextSibling) { var t = e.nodeType; if (t === 1 || t === 3) break; if (t === 8) { if (t = e.data, t === "$" || t === "$!" || t === "$?") break; if (t === "/$") return null } } return e } function vl(e) { e = e.previousSibling; for (var t = 0; e;) { if (e.nodeType === 8) { var i = e.data; if (i === "$" || i === "$!" || i === "$?") { if (t === 0) return e; t-- } else i === "/$" && t++ } e = e.previousSibling } return null } var qn = Math.random().toString(36).slice(2), Ge = "__reactFiber$" + qn, pi = "__reactProps$" + qn, nt = "__reactContainer$" + qn, uo = "__reactEvents$" + qn, eh = "__reactListeners$" + qn, th = "__reactHandles$" + qn; function Pt(e) { var t = e[Ge]; if (t) return t; for (var i = e.parentNode; i;) { if (t = i[nt] || i[Ge]) { if (i = t.alternate, t.child !== null || i !== null && i.child !== null) for (e = vl(e); e !== null;) { if (i = e[Ge]) return i; e = vl(e) } return t } e = i, i = e.parentNode } return null } function Si(e) { return e = e[Ge] || e[nt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e } function tn(e) { if (e.tag === 5 || e.tag === 6) return e.stateNode; throw Error(N(33)) } function Ls(e) { return e[pi] || null } var mo = [], nn = -1; function qt(e) { return { current: e } } function L(e) { 0 > nn || (e.current = mo[nn], mo[nn] = null, nn--) } function M(e, t) { nn++, mo[nn] = e.current, e.current = t } var kt = {}, me = qt(kt), ve = qt(!1), Mt = kt; function yn(e, t) { var i = e.type.contextTypes; if (!i) return kt; var s = e.stateNode; if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext; var r = {}, o; for (o in i) r[o] = t[o]; return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = r), r } function be(e) { return e = e.childContextTypes, e != null } function bs() { L(ve), L(me) } function bl(e, t, i) { if (me.current !== kt) throw Error(N(168)); M(me, t), M(ve, i) } function Ed(e, t, i) { var s = e.stateNode; if (t = t.childContextTypes, typeof s.getChildContext != "function") return i; s = s.getChildContext(); for (var r in s) if (!(r in t)) throw Error(N(108, Om(e) || "Unknown", r)); return $({}, i, s) } function ws(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || kt, Mt = me.current, M(me, e), M(ve, ve.current), !0 } function wl(e, t, i) { var s = e.stateNode; if (!s) throw Error(N(169)); i ? (e = Ed(e, t, Mt), s.__reactInternalMemoizedMergedChildContext = e, L(ve), L(me), M(me, e)) : L(ve), M(ve, i) } var Xe = null, Qs = !1, wr = !1; function Dd(e) { Xe === null ? Xe = [e] : Xe.push(e) } function nh(e) { Qs = !0, Dd(e) } function Tt() { if (!wr && Xe !== null) { wr = !0; var e = 0, t = O; try { var i = Xe; for (O = 1; e < i.length; e++) { var s = i[e]; do s = s(!0); while (s !== null) } Xe = null, Qs = !1 } catch (r) { throw Xe !== null && (Xe = Xe.slice(e + 1)), ed(Xo, Tt), r } finally { O = t, wr = !1 } } return null } var sn = [], rn = 0, js = null, Ns = 0, De = [], Ce = 0, Ht = null, Je = 1, Ze = ""; function Ft(e, t) { sn[rn++] = Ns, sn[rn++] = js, js = e, Ns = t } function Cd(e, t, i) { De[Ce++] = Je, De[Ce++] = Ze, De[Ce++] = Ht, Ht = e; var s = Je; e = Ze; var r = 32 - He(s) - 1; s &= ~(1 << r), i += 1; var o = 32 - He(t) + r; if (30 < o) { var a = r - r % 5; o = (s & (1 << a) - 1).toString(32), s >>= a, r -= a, Je = 1 << 32 - He(t) + r | i << r | s, Ze = o + e } else Je = 1 << o | i << r | s, Ze = e } function oa(e) { e.return !== null && (Ft(e, 1), Cd(e, 1, 0)) } function aa(e) { for (; e === js;)js = sn[--rn], sn[rn] = null, Ns = sn[--rn], sn[rn] = null; for (; e === Ht;)Ht = De[--Ce], De[Ce] = null, Ze = De[--Ce], De[Ce] = null, Je = De[--Ce], De[Ce] = null } var ke = null, Ne = null, Q = !1, Oe = null; function Ad(e, t) { var i = Ae(5, null, null, 0); i.elementType = "DELETED", i.stateNode = t, i.return = e, t = e.deletions, t === null ? (e.deletions = [i], e.flags |= 16) : t.push(i) } function jl(e, t) { switch (e.tag) { case 5: var i = e.type; return t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ke = e, Ne = xt(t.firstChild), !0) : !1; case 6: return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ke = e, Ne = null, !0) : !1; case 13: return t = t.nodeType !== 8 ? null : t, t !== null ? (i = Ht !== null ? { id: Je, overflow: Ze } : null, e.memoizedState = { dehydrated: t, treeContext: i, retryLane: 1073741824 }, i = Ae(18, null, null, 0), i.stateNode = t, i.return = e, e.child = i, ke = e, Ne = null, !0) : !1; default: return !1 } } function po(e) { return (e.mode & 1) !== 0 && (e.flags & 128) === 0 } function ho(e) { if (Q) { var t = Ne; if (t) { var i = t; if (!jl(e, t)) { if (po(e)) throw Error(N(418)); t = xt(i.nextSibling); var s = ke; t && jl(e, t) ? Ad(s, i) : (e.flags = e.flags & -4097 | 2, Q = !1, ke = e) } } else { if (po(e)) throw Error(N(418)); e.flags = e.flags & -4097 | 2, Q = !1, ke = e } } } function Nl(e) { for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return; ke = e } function Hi(e) { if (e !== ke) return !1; if (!Q) return Nl(e), Q = !0, !1; var t; if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !lo(e.type, e.memoizedProps)), t && (t = Ne)) { if (po(e)) throw Fd(), Error(N(418)); for (; t;)Ad(e, t), t = xt(t.nextSibling) } if (Nl(e), e.tag === 13) { if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(N(317)); e: { for (e = e.nextSibling, t = 0; e;) { if (e.nodeType === 8) { var i = e.data; if (i === "/$") { if (t === 0) { Ne = xt(e.nextSibling); break e } t-- } else i !== "$" && i !== "$!" && i !== "$?" || t++ } e = e.nextSibling } Ne = null } } else Ne = ke ? xt(e.stateNode.nextSibling) : null; return !0 } function Fd() { for (var e = Ne; e;)e = xt(e.nextSibling) } function vn() { Ne = ke = null, Q = !1 } function la(e) { Oe === null ? Oe = [e] : Oe.push(e) } var ih = rt.ReactCurrentBatchConfig; function Rn(e, t, i) { if (e = i.ref, e !== null && typeof e != "function" && typeof e != "object") { if (i._owner) { if (i = i._owner, i) { if (i.tag !== 1) throw Error(N(309)); var s = i.stateNode } if (!s) throw Error(N(147, e)); var r = s, o = "" + e; return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (a) { var l = r.refs; a === null ? delete l[o] : l[o] = a }, t._stringRef = o, t) } if (typeof e != "string") throw Error(N(284)); if (!i._owner) throw Error(N(290, e)) } return e } function Li(e, t) { throw e = Object.prototype.toString.call(t), Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)) } function kl(e) { var t = e._init; return t(e._payload) } function _d(e) { function t(f, u) { if (e) { var p = f.deletions; p === null ? (f.deletions = [u], f.flags |= 16) : p.push(u) } } function i(f, u) { if (!e) return null; for (; u !== null;)t(f, u), u = u.sibling; return null } function s(f, u) { for (f = new Map; u !== null;)u.key !== null ? f.set(u.key, u) : f.set(u.index, u), u = u.sibling; return f } function r(f, u) { return f = wt(f, u), f.index = 0, f.sibling = null, f } function o(f, u, p) { return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < u ? (f.flags |= 2, u) : p) : (f.flags |= 2, u)) : (f.flags |= 1048576, u) } function a(f) { return e && f.alternate === null && (f.flags |= 2), f } function l(f, u, p, y) { return u === null || u.tag !== 6 ? (u = Er(p, f.mode, y), u.return = f, u) : (u = r(u, p), u.return = f, u) } function c(f, u, p, y) { var k = p.type; return k === Xt ? m(f, u, p.props.children, y, p.key) : u !== null && (u.elementType === k || typeof k == "object" && k !== null && k.$$typeof === at && kl(k) === u.type) ? (y = r(u, p.props), y.ref = Rn(f, u, p), y.return = f, y) : (y = as(p.type, p.key, p.props, null, f.mode, y), y.ref = Rn(f, u, p), y.return = f, y) } function d(f, u, p, y) { return u === null || u.tag !== 4 || u.stateNode.containerInfo !== p.containerInfo || u.stateNode.implementation !== p.implementation ? (u = Dr(p, f.mode, y), u.return = f, u) : (u = r(u, p.children || []), u.return = f, u) } function m(f, u, p, y, k) { return u === null || u.tag !== 7 ? (u = Ot(p, f.mode, y, k), u.return = f, u) : (u = r(u, p), u.return = f, u) } function h(f, u, p) { if (typeof u == "string" && u !== "" || typeof u == "number") return u = Er("" + u, f.mode, p), u.return = f, u; if (typeof u == "object" && u !== null) { switch (u.$$typeof) { case Ai: return p = as(u.type, u.key, u.props, null, f.mode, p), p.ref = Rn(f, null, u), p.return = f, p; case Kt: return u = Dr(u, f.mode, p), u.return = f, u; case at: var y = u._init; return h(f, y(u._payload), p) }if (Un(u) || Fn(u)) return u = Ot(u, f.mode, p, null), u.return = f, u; Li(f, u) } return null } function g(f, u, p, y) { var k = u !== null ? u.key : null; if (typeof p == "string" && p !== "" || typeof p == "number") return k !== null ? null : l(f, u, "" + p, y); if (typeof p == "object" && p !== null) { switch (p.$$typeof) { case Ai: return p.key === k ? c(f, u, p, y) : null; case Kt: return p.key === k ? d(f, u, p, y) : null; case at: return k = p._init, g(f, u, k(p._payload), y) }if (Un(p) || Fn(p)) return k !== null ? null : m(f, u, p, y, null); Li(f, p) } return null } function x(f, u, p, y, k) { if (typeof y == "string" && y !== "" || typeof y == "number") return f = f.get(p) || null, l(u, f, "" + y, k); if (typeof y == "object" && y !== null) { switch (y.$$typeof) { case Ai: return f = f.get(y.key === null ? p : y.key) || null, c(u, f, y, k); case Kt: return f = f.get(y.key === null ? p : y.key) || null, d(u, f, y, k); case at: var q = y._init; return x(f, u, p, q(y._payload), k) }if (Un(y) || Fn(y)) return f = f.get(p) || null, m(u, f, y, k, null); Li(u, y) } return null } function w(f, u, p, y) { for (var k = null, q = null, D = u, C = u = 0, V = null; D !== null && C < p.length; C++) { D.index > C ? (V = D, D = null) : V = D.sibling; var P = g(f, D, p[C], y); if (P === null) { D === null && (D = V); break } e && D && P.alternate === null && t(f, D), u = o(P, u, C), q === null ? k = P : q.sibling = P, q = P, D = V } if (C === p.length) return i(f, D), Q && Ft(f, C), k; if (D === null) { for (; C < p.length; C++)D = h(f, p[C], y), D !== null && (u = o(D, u, C), q === null ? k = D : q.sibling = D, q = D); return Q && Ft(f, C), k } for (D = s(f, D); C < p.length; C++)V = x(D, f, C, p[C], y), V !== null && (e && V.alternate !== null && D.delete(V.key === null ? C : V.key), u = o(V, u, C), q === null ? k = V : q.sibling = V, q = V); return e && D.forEach(function (ze) { return t(f, ze) }), Q && Ft(f, C), k } function v(f, u, p, y) { var k = Fn(p); if (typeof k != "function") throw Error(N(150)); if (p = k.call(p), p == null) throw Error(N(151)); for (var q = k = null, D = u, C = u = 0, V = null, P = p.next(); D !== null && !P.done; C++, P = p.next()) { D.index > C ? (V = D, D = null) : V = D.sibling; var ze = g(f, D, P.value, y); if (ze === null) { D === null && (D = V); break } e && D && ze.alternate === null && t(f, D), u = o(ze, u, C), q === null ? k = ze : q.sibling = ze, q = ze, D = V } if (P.done) return i(f, D), Q && Ft(f, C), k; if (D === null) { for (; !P.done; C++, P = p.next())P = h(f, P.value, y), P !== null && (u = o(P, u, C), q === null ? k = P : q.sibling = P, q = P); return Q && Ft(f, C), k } for (D = s(f, D); !P.done; C++, P = p.next())P = x(D, f, C, P.value, y), P !== null && (e && P.alternate !== null && D.delete(P.key === null ? C : P.key), u = o(P, u, C), q === null ? k = P : q.sibling = P, q = P); return e && D.forEach(function (Cn) { return t(f, Cn) }), Q && Ft(f, C), k } function S(f, u, p, y) { if (typeof p == "object" && p !== null && p.type === Xt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) { switch (p.$$typeof) { case Ai: e: { for (var k = p.key, q = u; q !== null;) { if (q.key === k) { if (k = p.type, k === Xt) { if (q.tag === 7) { i(f, q.sibling), u = r(q, p.props.children), u.return = f, f = u; break e } } else if (q.elementType === k || typeof k == "object" && k !== null && k.$$typeof === at && kl(k) === q.type) { i(f, q.sibling), u = r(q, p.props), u.ref = Rn(f, q, p), u.return = f, f = u; break e } i(f, q); break } else t(f, q); q = q.sibling } p.type === Xt ? (u = Ot(p.props.children, f.mode, y, p.key), u.return = f, f = u) : (y = as(p.type, p.key, p.props, null, f.mode, y), y.ref = Rn(f, u, p), y.return = f, f = y) } return a(f); case Kt: e: { for (q = p.key; u !== null;) { if (u.key === q) if (u.tag === 4 && u.stateNode.containerInfo === p.containerInfo && u.stateNode.implementation === p.implementation) { i(f, u.sibling), u = r(u, p.children || []), u.return = f, f = u; break e } else { i(f, u); break } else t(f, u); u = u.sibling } u = Dr(p, f.mode, y), u.return = f, f = u } return a(f); case at: return q = p._init, S(f, u, q(p._payload), y) }if (Un(p)) return w(f, u, p, y); if (Fn(p)) return v(f, u, p, y); Li(f, p) } return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, u !== null && u.tag === 6 ? (i(f, u.sibling), u = r(u, p), u.return = f, f = u) : (i(f, u), u = Er(p, f.mode, y), u.return = f, f = u), a(f)) : i(f, u) } return S } var bn = _d(!0), Pd = _d(!1), ks = qt(null), Ss = null, on = null, ca = null; function da() { ca = on = Ss = null } function ua(e) { var t = ks.current; L(ks), e._currentValue = t } function fo(e, t, i) { for (; e !== null;) { var s = e.alternate; if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === i) break; e = e.return } } function pn(e, t) { Ss = e, ca = on = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ye = !0), e.firstContext = null) } function _e(e) { var t = e._currentValue; if (ca !== e) if (e = { context: e, memoizedValue: t, next: null }, on === null) { if (Ss === null) throw Error(N(308)); on = e, Ss.dependencies = { lanes: 0, firstContext: e } } else on = on.next = e; return t } var zt = null; function ma(e) { zt === null ? zt = [e] : zt.push(e) } function zd(e, t, i, s) { var r = t.interleaved; return r === null ? (i.next = i, ma(t)) : (i.next = r.next, r.next = i), t.interleaved = i, it(e, s) } function it(e, t) { e.lanes |= t; var i = e.alternate; for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null;)e.childLanes |= t, i = e.alternate, i !== null && (i.childLanes |= t), i = e, e = e.return; return i.tag === 3 ? i.stateNode : null } var lt = !1; function pa(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null } } function Id(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }) } function et(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null } } function yt(e, t, i) { var s = e.updateQueue; if (s === null) return null; if (s = s.shared, R & 2) { var r = s.pending; return r === null ? t.next = t : (t.next = r.next, r.next = t), s.pending = t, it(e, i) } return r = s.interleaved, r === null ? (t.next = t, ma(s)) : (t.next = r.next, r.next = t), s.interleaved = t, it(e, i) } function ts(e, t, i) { if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194240) !== 0)) { var s = t.lanes; s &= e.pendingLanes, i |= s, t.lanes = i, Jo(e, i) } } function Sl(e, t) { var i = e.updateQueue, s = e.alternate; if (s !== null && (s = s.updateQueue, i === s)) { var r = null, o = null; if (i = i.firstBaseUpdate, i !== null) { do { var a = { eventTime: i.eventTime, lane: i.lane, tag: i.tag, payload: i.payload, callback: i.callback, next: null }; o === null ? r = o = a : o = o.next = a, i = i.next } while (i !== null); o === null ? r = o = t : o = o.next = t } else r = o = t; i = { baseState: s.baseState, firstBaseUpdate: r, lastBaseUpdate: o, shared: s.shared, effects: s.effects }, e.updateQueue = i; return } e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = t : e.next = t, i.lastBaseUpdate = t } function qs(e, t, i, s) { var r = e.updateQueue; lt = !1; var o = r.firstBaseUpdate, a = r.lastBaseUpdate, l = r.shared.pending; if (l !== null) { r.shared.pending = null; var c = l, d = c.next; c.next = null, a === null ? o = d : a.next = d, a = c; var m = e.alternate; m !== null && (m = m.updateQueue, l = m.lastBaseUpdate, l !== a && (l === null ? m.firstBaseUpdate = d : l.next = d, m.lastBaseUpdate = c)) } if (o !== null) { var h = r.baseState; a = 0, m = d = c = null, l = o; do { var g = l.lane, x = l.eventTime; if ((s & g) === g) { m !== null && (m = m.next = { eventTime: x, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null }); e: { var w = e, v = l; switch (g = t, x = i, v.tag) { case 1: if (w = v.payload, typeof w == "function") { h = w.call(x, h, g); break e } h = w; break e; case 3: w.flags = w.flags & -65537 | 128; case 0: if (w = v.payload, g = typeof w == "function" ? w.call(x, h, g) : w, g == null) break e; h = $({}, h, g); break e; case 2: lt = !0 } } l.callback !== null && l.lane !== 0 && (e.flags |= 64, g = r.effects, g === null ? r.effects = [l] : g.push(l)) } else x = { eventTime: x, lane: g, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, m === null ? (d = m = x, c = h) : m = m.next = x, a |= g; if (l = l.next, l === null) { if (l = r.shared.pending, l === null) break; g = l, l = g.next, g.next = null, r.lastBaseUpdate = g, r.shared.pending = null } } while (!0); if (m === null && (c = h), r.baseState = c, r.firstBaseUpdate = d, r.lastBaseUpdate = m, t = r.shared.interleaved, t !== null) { r = t; do a |= r.lane, r = r.next; while (r !== t) } else o === null && (r.shared.lanes = 0); Qt |= a, e.lanes = a, e.memoizedState = h } } function ql(e, t, i) { if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) { var s = e[t], r = s.callback; if (r !== null) { if (s.callback = null, s = i, typeof r != "function") throw Error(N(191, r)); r.call(s) } } } var qi = {}, Ye = qt(qi), hi = qt(qi), fi = qt(qi); function It(e) { if (e === qi) throw Error(N(174)); return e } function ha(e, t) { switch (M(fi, t), M(hi, e), M(Ye, qi), e = t.nodeType, e) { case 9: case 11: t = (t = t.documentElement) ? t.namespaceURI : Yr(null, ""); break; default: e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Yr(t, e) }L(Ye), M(Ye, t) } function wn() { L(Ye), L(hi), L(fi) } function Rd(e) { It(fi.current); var t = It(Ye.current), i = Yr(t, e.type); t !== i && (M(hi, e), M(Ye, i)) } function fa(e) { hi.current === e && (L(Ye), L(hi)) } var W = qt(0); function Ts(e) { for (var t = e; t !== null;) { if (t.tag === 13) { var i = t.memoizedState; if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || i.data === "$!")) return t } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) { if (t.flags & 128) return t } else if (t.child !== null) { t.child.return = t, t = t.child; continue } if (t === e) break; for (; t.sibling === null;) { if (t.return === null || t.return === e) return null; t = t.return } t.sibling.return = t.return, t = t.sibling } return null } var jr = []; function ga() { for (var e = 0; e < jr.length; e++)jr[e]._workInProgressVersionPrimary = null; jr.length = 0 } var ns = rt.ReactCurrentDispatcher, Nr = rt.ReactCurrentBatchConfig, Lt = 0, G = null, te = null, se = null, Es = !1, Jn = !1, gi = 0, sh = 0; function ce() { throw Error(N(321)) } function xa(e, t) { if (t === null) return !1; for (var i = 0; i < t.length && i < e.length; i++)if (!Qe(e[i], t[i])) return !1; return !0 } function ya(e, t, i, s, r, o) { if (Lt = o, G = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ns.current = e === null || e.memoizedState === null ? lh : ch, e = i(s, r), Jn) { o = 0; do { if (Jn = !1, gi = 0, 25 <= o) throw Error(N(301)); o += 1, se = te = null, t.updateQueue = null, ns.current = dh, e = i(s, r) } while (Jn) } if (ns.current = Ds, t = te !== null && te.next !== null, Lt = 0, se = te = G = null, Es = !1, t) throw Error(N(300)); return e } function va() { var e = gi !== 0; return gi = 0, e } function We() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return se === null ? G.memoizedState = se = e : se = se.next = e, se } function Pe() { if (te === null) { var e = G.alternate; e = e !== null ? e.memoizedState : null } else e = te.next; var t = se === null ? G.memoizedState : se.next; if (t !== null) se = t, te = e; else { if (e === null) throw Error(N(310)); te = e, e = { memoizedState: te.memoizedState, baseState: te.baseState, baseQueue: te.baseQueue, queue: te.queue, next: null }, se === null ? G.memoizedState = se = e : se = se.next = e } return se } function xi(e, t) { return typeof t == "function" ? t(e) : t } function kr(e) { var t = Pe(), i = t.queue; if (i === null) throw Error(N(311)); i.lastRenderedReducer = e; var s = te, r = s.baseQueue, o = i.pending; if (o !== null) { if (r !== null) { var a = r.next; r.next = o.next, o.next = a } s.baseQueue = r = o, i.pending = null } if (r !== null) { o = r.next, s = s.baseState; var l = a = null, c = null, d = o; do { var m = d.lane; if ((Lt & m) === m) c !== null && (c = c.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), s = d.hasEagerState ? d.eagerState : e(s, d.action); else { var h = { lane: m, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }; c === null ? (l = c = h, a = s) : c = c.next = h, G.lanes |= m, Qt |= m } d = d.next } while (d !== null && d !== o); c === null ? a = s : c.next = l, Qe(s, t.memoizedState) || (ye = !0), t.memoizedState = s, t.baseState = a, t.baseQueue = c, i.lastRenderedState = s } if (e = i.interleaved, e !== null) { r = e; do o = r.lane, G.lanes |= o, Qt |= o, r = r.next; while (r !== e) } else r === null && (i.lanes = 0); return [t.memoizedState, i.dispatch] } function Sr(e) { var t = Pe(), i = t.queue; if (i === null) throw Error(N(311)); i.lastRenderedReducer = e; var s = i.dispatch, r = i.pending, o = t.memoizedState; if (r !== null) { i.pending = null; var a = r = r.next; do o = e(o, a.action), a = a.next; while (a !== r); Qe(o, t.memoizedState) || (ye = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), i.lastRenderedState = o } return [o, s] } function Bd() { } function Od(e, t) { var i = G, s = Pe(), r = t(), o = !Qe(s.memoizedState, r); if (o && (s.memoizedState = r, ye = !0), s = s.queue, ba(Ld.bind(null, i, s, e), [e]), s.getSnapshot !== t || o || se !== null && se.memoizedState.tag & 1) { if (i.flags |= 2048, yi(9, Hd.bind(null, i, s, r, t), void 0, null), re === null) throw Error(N(349)); Lt & 30 || Md(i, t, r) } return r } function Md(e, t, i) { e.flags |= 16384, e = { getSnapshot: t, value: i }, t = G.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, G.updateQueue = t, t.stores = [e]) : (i = t.stores, i === null ? t.stores = [e] : i.push(e)) } function Hd(e, t, i, s) { t.value = i, t.getSnapshot = s, Qd(t) && Ud(e) } function Ld(e, t, i) { return i(function () { Qd(t) && Ud(e) }) } function Qd(e) { var t = e.getSnapshot; e = e.value; try { var i = t(); return !Qe(e, i) } catch { return !0 } } function Ud(e) { var t = it(e, 1); t !== null && Le(t, e, 1, -1) } function Tl(e) { var t = We(); return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: xi, lastRenderedState: e }, t.queue = e, e = e.dispatch = ah.bind(null, G, e), [t.memoizedState, e] } function yi(e, t, i, s) { return e = { tag: e, create: t, destroy: i, deps: s, next: null }, t = G.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, G.updateQueue = t, t.lastEffect = e.next = e) : (i = t.lastEffect, i === null ? t.lastEffect = e.next = e : (s = i.next, i.next = e, e.next = s, t.lastEffect = e)), e } function Wd() { return Pe().memoizedState } function is(e, t, i, s) { var r = We(); G.flags |= e, r.memoizedState = yi(1 | t, i, void 0, s === void 0 ? null : s) } function Us(e, t, i, s) { var r = Pe(); s = s === void 0 ? null : s; var o = void 0; if (te !== null) { var a = te.memoizedState; if (o = a.destroy, s !== null && xa(s, a.deps)) { r.memoizedState = yi(t, i, o, s); return } } G.flags |= e, r.memoizedState = yi(1 | t, i, o, s) } function El(e, t) { return is(8390656, 8, e, t) } function ba(e, t) { return Us(2048, 8, e, t) } function Gd(e, t) { return Us(4, 2, e, t) } function $d(e, t) { return Us(4, 4, e, t) } function Yd(e, t) { if (typeof t == "function") return e = e(), t(e), function () { t(null) }; if (t != null) return e = e(), t.current = e, function () { t.current = null } } function Vd(e, t, i) { return i = i != null ? i.concat([e]) : null, Us(4, 4, Yd.bind(null, t, e), i) } function wa() { } function Kd(e, t) { var i = Pe(); t = t === void 0 ? null : t; var s = i.memoizedState; return s !== null && t !== null && xa(t, s[1]) ? s[0] : (i.memoizedState = [e, t], e) } function Xd(e, t) { var i = Pe(); t = t === void 0 ? null : t; var s = i.memoizedState; return s !== null && t !== null && xa(t, s[1]) ? s[0] : (e = e(), i.memoizedState = [e, t], e) } function Jd(e, t, i) { return Lt & 21 ? (Qe(i, t) || (i = id(), G.lanes |= i, Qt |= i, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ye = !0), e.memoizedState = i) } function rh(e, t) { var i = O; O = i !== 0 && 4 > i ? i : 4, e(!0); var s = Nr.transition; Nr.transition = {}; try { e(!1), t() } finally { O = i, Nr.transition = s } } function Zd() { return Pe().memoizedState } function oh(e, t, i) { var s = bt(e); if (i = { lane: s, action: i, hasEagerState: !1, eagerState: null, next: null }, eu(e)) tu(t, i); else if (i = zd(e, t, i, s), i !== null) { var r = he(); Le(i, e, s, r), nu(i, t, s) } } function ah(e, t, i) { var s = bt(e), r = { lane: s, action: i, hasEagerState: !1, eagerState: null, next: null }; if (eu(e)) tu(t, r); else { var o = e.alternate; if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try { var a = t.lastRenderedState, l = o(a, i); if (r.hasEagerState = !0, r.eagerState = l, Qe(l, a)) { var c = t.interleaved; c === null ? (r.next = r, ma(t)) : (r.next = c.next, c.next = r), t.interleaved = r; return } } catch { } finally { } i = zd(e, t, r, s), i !== null && (r = he(), Le(i, e, s, r), nu(i, t, s)) } } function eu(e) { var t = e.alternate; return e === G || t !== null && t === G } function tu(e, t) { Jn = Es = !0; var i = e.pending; i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t } function nu(e, t, i) { if (i & 4194240) { var s = t.lanes; s &= e.pendingLanes, i |= s, t.lanes = i, Jo(e, i) } } var Ds = { readContext: _e, useCallback: ce, useContext: ce, useEffect: ce, useImperativeHandle: ce, useInsertionEffect: ce, useLayoutEffect: ce, useMemo: ce, useReducer: ce, useRef: ce, useState: ce, useDebugValue: ce, useDeferredValue: ce, useTransition: ce, useMutableSource: ce, useSyncExternalStore: ce, useId: ce, unstable_isNewReconciler: !1 }, lh = { readContext: _e, useCallback: function (e, t) { return We().memoizedState = [e, t === void 0 ? null : t], e }, useContext: _e, useEffect: El, useImperativeHandle: function (e, t, i) { return i = i != null ? i.concat([e]) : null, is(4194308, 4, Yd.bind(null, t, e), i) }, useLayoutEffect: function (e, t) { return is(4194308, 4, e, t) }, useInsertionEffect: function (e, t) { return is(4, 2, e, t) }, useMemo: function (e, t) { var i = We(); return t = t === void 0 ? null : t, e = e(), i.memoizedState = [e, t], e }, useReducer: function (e, t, i) { var s = We(); return t = i !== void 0 ? i(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = oh.bind(null, G, e), [s.memoizedState, e] }, useRef: function (e) { var t = We(); return e = { current: e }, t.memoizedState = e }, useState: Tl, useDebugValue: wa, useDeferredValue: function (e) { return We().memoizedState = e }, useTransition: function () { var e = Tl(!1), t = e[0]; return e = rh.bind(null, e[1]), We().memoizedState = e, [t, e] }, useMutableSource: function () { }, useSyncExternalStore: function (e, t, i) { var s = G, r = We(); if (Q) { if (i === void 0) throw Error(N(407)); i = i() } else { if (i = t(), re === null) throw Error(N(349)); Lt & 30 || Md(s, t, i) } r.memoizedState = i; var o = { value: i, getSnapshot: t }; return r.queue = o, El(Ld.bind(null, s, o, e), [e]), s.flags |= 2048, yi(9, Hd.bind(null, s, o, i, t), void 0, null), i }, useId: function () { var e = We(), t = re.identifierPrefix; if (Q) { var i = Ze, s = Je; i = (s & ~(1 << 32 - He(s) - 1)).toString(32) + i, t = ":" + t + "R" + i, i = gi++, 0 < i && (t += "H" + i.toString(32)), t += ":" } else i = sh++, t = ":" + t + "r" + i.toString(32) + ":"; return e.memoizedState = t }, unstable_isNewReconciler: !1 }, ch = { readContext: _e, useCallback: Kd, useContext: _e, useEffect: ba, useImperativeHandle: Vd, useInsertionEffect: Gd, useLayoutEffect: $d, useMemo: Xd, useReducer: kr, useRef: Wd, useState: function () { return kr(xi) }, useDebugValue: wa, useDeferredValue: function (e) { var t = Pe(); return Jd(t, te.memoizedState, e) }, useTransition: function () { var e = kr(xi)[0], t = Pe().memoizedState; return [e, t] }, useMutableSource: Bd, useSyncExternalStore: Od, useId: Zd, unstable_isNewReconciler: !1 }, dh = { readContext: _e, useCallback: Kd, useContext: _e, useEffect: ba, useImperativeHandle: Vd, useInsertionEffect: Gd, useLayoutEffect: $d, useMemo: Xd, useReducer: Sr, useRef: Wd, useState: function () { return Sr(xi) }, useDebugValue: wa, useDeferredValue: function (e) { var t = Pe(); return te === null ? t.memoizedState = e : Jd(t, te.memoizedState, e) }, useTransition: function () { var e = Sr(xi)[0], t = Pe().memoizedState; return [e, t] }, useMutableSource: Bd, useSyncExternalStore: Od, useId: Zd, unstable_isNewReconciler: !1 }; function Re(e, t) { if (e && e.defaultProps) { t = $({}, t), e = e.defaultProps; for (var i in e) t[i] === void 0 && (t[i] = e[i]); return t } return t } function go(e, t, i, s) { t = e.memoizedState, i = i(s, t), i = i == null ? t : $({}, t, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i) } var Ws = { isMounted: function (e) { return (e = e._reactInternals) ? Gt(e) === e : !1 }, enqueueSetState: function (e, t, i) { e = e._reactInternals; var s = he(), r = bt(e), o = et(s, r); o.payload = t, i != null && (o.callback = i), t = yt(e, o, r), t !== null && (Le(t, e, r, s), ts(t, e, r)) }, enqueueReplaceState: function (e, t, i) { e = e._reactInternals; var s = he(), r = bt(e), o = et(s, r); o.tag = 1, o.payload = t, i != null && (o.callback = i), t = yt(e, o, r), t !== null && (Le(t, e, r, s), ts(t, e, r)) }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var i = he(), s = bt(e), r = et(i, s); r.tag = 2, t != null && (r.callback = t), t = yt(e, r, s), t !== null && (Le(t, e, s, i), ts(t, e, s)) } }; function Dl(e, t, i, s, r, o, a) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, o, a) : t.prototype && t.prototype.isPureReactComponent ? !di(i, s) || !di(r, o) : !0 } function iu(e, t, i) { var s = !1, r = kt, o = t.contextType; return typeof o == "object" && o !== null ? o = _e(o) : (r = be(t) ? Mt : me.current, s = t.contextTypes, o = (s = s != null) ? yn(e, r) : kt), t = new t(i, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ws, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = r, e.__reactInternalMemoizedMaskedChildContext = o), t } function Cl(e, t, i, s) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, s), t.state !== e && Ws.enqueueReplaceState(t, t.state, null) } function xo(e, t, i, s) { var r = e.stateNode; r.props = i, r.state = e.memoizedState, r.refs = {}, pa(e); var o = t.contextType; typeof o == "object" && o !== null ? r.context = _e(o) : (o = be(t) ? Mt : me.current, r.context = yn(e, o)), r.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (go(e, t, o, i), r.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (t = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), t !== r.state && Ws.enqueueReplaceState(r, r.state, null), qs(e, i, r, s), r.state = e.memoizedState), typeof r.componentDidMount == "function" && (e.flags |= 4194308) } function jn(e, t) {
    try { var i = "", s = t; do i += Bm(s), s = s.return; while (s); var r = i } catch (o) {
        r = `
Error generating stack: `+ o.message + `
`+ o.stack
    } return { value: e, source: t, stack: r, digest: null }
} function qr(e, t, i) { return { value: e, source: null, stack: i ?? null, digest: t ?? null } } function yo(e, t) { try { console.error(t.value) } catch (i) { setTimeout(function () { throw i }) } } var uh = typeof WeakMap == "function" ? WeakMap : Map; function su(e, t, i) { i = et(-1, i), i.tag = 3, i.payload = { element: null }; var s = t.value; return i.callback = function () { As || (As = !0, Eo = s), yo(e, t) }, i } function ru(e, t, i) { i = et(-1, i), i.tag = 3; var s = e.type.getDerivedStateFromError; if (typeof s == "function") { var r = t.value; i.payload = function () { return s(r) }, i.callback = function () { yo(e, t) } } var o = e.stateNode; return o !== null && typeof o.componentDidCatch == "function" && (i.callback = function () { yo(e, t), typeof s != "function" && (vt === null ? vt = new Set([this]) : vt.add(this)); var a = t.stack; this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" }) }), i } function Al(e, t, i) { var s = e.pingCache; if (s === null) { s = e.pingCache = new uh; var r = new Set; s.set(t, r) } else r = s.get(t), r === void 0 && (r = new Set, s.set(t, r)); r.has(i) || (r.add(i), e = Sh.bind(null, e, t, i), t.then(e, e)) } function Fl(e) { do { var t; if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e; e = e.return } while (e !== null); return null } function _l(e, t, i, s, r) { return e.mode & 1 ? (e.flags |= 65536, e.lanes = r, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (t = et(-1, 1), t.tag = 2, yt(i, t, 1))), i.lanes |= 1), e) } var mh = rt.ReactCurrentOwner, ye = !1; function pe(e, t, i, s) { t.child = e === null ? Pd(t, null, i, s) : bn(t, e.child, i, s) } function Pl(e, t, i, s, r) { i = i.render; var o = t.ref; return pn(t, r), s = ya(e, t, i, s, o, r), i = va(), e !== null && !ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~r, st(e, t, r)) : (Q && i && oa(t), t.flags |= 1, pe(e, t, s, r), t.child) } function zl(e, t, i, s, r) { if (e === null) { var o = i.type; return typeof o == "function" && !Da(o) && o.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (t.tag = 15, t.type = o, ou(e, t, o, s, r)) : (e = as(i.type, null, s, t, t.mode, r), e.ref = t.ref, e.return = t, t.child = e) } if (o = e.child, !(e.lanes & r)) { var a = o.memoizedProps; if (i = i.compare, i = i !== null ? i : di, i(a, s) && e.ref === t.ref) return st(e, t, r) } return t.flags |= 1, e = wt(o, s), e.ref = t.ref, e.return = t, t.child = e } function ou(e, t, i, s, r) { if (e !== null) { var o = e.memoizedProps; if (di(o, s) && e.ref === t.ref) if (ye = !1, t.pendingProps = s = o, (e.lanes & r) !== 0) e.flags & 131072 && (ye = !0); else return t.lanes = e.lanes, st(e, t, r) } return vo(e, t, i, s, r) } function au(e, t, i) { var s = t.pendingProps, r = s.children, o = e !== null ? e.memoizedState : null; if (s.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, M(ln, je), je |= i; else { if (!(i & 1073741824)) return e = o !== null ? o.baseLanes | i : i, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, M(ln, je), je |= e, null; t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = o !== null ? o.baseLanes : i, M(ln, je), je |= s } else o !== null ? (s = o.baseLanes | i, t.memoizedState = null) : s = i, M(ln, je), je |= s; return pe(e, t, r, i), t.child } function lu(e, t) { var i = t.ref; (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= 512, t.flags |= 2097152) } function vo(e, t, i, s, r) { var o = be(i) ? Mt : me.current; return o = yn(t, o), pn(t, r), i = ya(e, t, i, s, o, r), s = va(), e !== null && !ye ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~r, st(e, t, r)) : (Q && s && oa(t), t.flags |= 1, pe(e, t, i, r), t.child) } function Il(e, t, i, s, r) { if (be(i)) { var o = !0; ws(t) } else o = !1; if (pn(t, r), t.stateNode === null) ss(e, t), iu(t, i, s), xo(t, i, s, r), s = !0; else if (e === null) { var a = t.stateNode, l = t.memoizedProps; a.props = l; var c = a.context, d = i.contextType; typeof d == "object" && d !== null ? d = _e(d) : (d = be(i) ? Mt : me.current, d = yn(t, d)); var m = i.getDerivedStateFromProps, h = typeof m == "function" || typeof a.getSnapshotBeforeUpdate == "function"; h || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== s || c !== d) && Cl(t, a, s, d), lt = !1; var g = t.memoizedState; a.state = g, qs(t, s, a, r), c = t.memoizedState, l !== s || g !== c || ve.current || lt ? (typeof m == "function" && (go(t, i, m, s), c = t.memoizedState), (l = lt || Dl(t, i, l, s, g, c, d)) ? (h || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = c), a.props = s, a.state = c, a.context = d, s = l) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), s = !1) } else { a = t.stateNode, Id(e, t), l = t.memoizedProps, d = t.type === t.elementType ? l : Re(t.type, l), a.props = d, h = t.pendingProps, g = a.context, c = i.contextType, typeof c == "object" && c !== null ? c = _e(c) : (c = be(i) ? Mt : me.current, c = yn(t, c)); var x = i.getDerivedStateFromProps; (m = typeof x == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== h || g !== c) && Cl(t, a, s, c), lt = !1, g = t.memoizedState, a.state = g, qs(t, s, a, r); var w = t.memoizedState; l !== h || g !== w || ve.current || lt ? (typeof x == "function" && (go(t, i, x, s), w = t.memoizedState), (d = lt || Dl(t, i, d, s, g, w, c) || !1) ? (m || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(s, w, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(s, w, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = w), a.props = s, a.state = w, a.context = c, s = d) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), s = !1) } return bo(e, t, i, s, o, r) } function bo(e, t, i, s, r, o) { lu(e, t); var a = (t.flags & 128) !== 0; if (!s && !a) return r && wl(t, i, !1), st(e, t, o); s = t.stateNode, mh.current = t; var l = a && typeof i.getDerivedStateFromError != "function" ? null : s.render(); return t.flags |= 1, e !== null && a ? (t.child = bn(t, e.child, null, o), t.child = bn(t, null, l, o)) : pe(e, t, l, o), t.memoizedState = s.state, r && wl(t, i, !0), t.child } function cu(e) { var t = e.stateNode; t.pendingContext ? bl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && bl(e, t.context, !1), ha(e, t.containerInfo) } function Rl(e, t, i, s, r) { return vn(), la(r), t.flags |= 256, pe(e, t, i, s), t.child } var wo = { dehydrated: null, treeContext: null, retryLane: 0 }; function jo(e) { return { baseLanes: e, cachePool: null, transitions: null } } function du(e, t, i) { var s = t.pendingProps, r = W.current, o = !1, a = (t.flags & 128) !== 0, l; if ((l = a) || (l = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0), l ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (r |= 1), M(W, r & 1), e === null) return ho(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = s.children, e = s.fallback, o ? (s = t.mode, o = t.child, a = { mode: "hidden", children: a }, !(s & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = a) : o = Ys(a, s, 0, null), e = Ot(e, s, i, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = jo(i), t.memoizedState = wo, e) : ja(t, a)); if (r = e.memoizedState, r !== null && (l = r.dehydrated, l !== null)) return ph(e, t, a, s, l, r, i); if (o) { o = s.fallback, a = t.mode, r = e.child, l = r.sibling; var c = { mode: "hidden", children: s.children }; return !(a & 1) && t.child !== r ? (s = t.child, s.childLanes = 0, s.pendingProps = c, t.deletions = null) : (s = wt(r, c), s.subtreeFlags = r.subtreeFlags & 14680064), l !== null ? o = wt(l, o) : (o = Ot(o, a, i, null), o.flags |= 2), o.return = t, s.return = t, s.sibling = o, t.child = s, s = o, o = t.child, a = e.child.memoizedState, a = a === null ? jo(i) : { baseLanes: a.baseLanes | i, cachePool: null, transitions: a.transitions }, o.memoizedState = a, o.childLanes = e.childLanes & ~i, t.memoizedState = wo, s } return o = e.child, e = o.sibling, s = wt(o, { mode: "visible", children: s.children }), !(t.mode & 1) && (s.lanes = i), s.return = t, s.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = s, t.memoizedState = null, s } function ja(e, t) { return t = Ys({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t } function Qi(e, t, i, s) { return s !== null && la(s), bn(t, e.child, null, i), e = ja(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e } function ph(e, t, i, s, r, o, a) { if (i) return t.flags & 256 ? (t.flags &= -257, s = qr(Error(N(422))), Qi(e, t, a, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = s.fallback, r = t.mode, s = Ys({ mode: "visible", children: s.children }, r, 0, null), o = Ot(o, r, a, null), o.flags |= 2, s.return = t, o.return = t, s.sibling = o, t.child = s, t.mode & 1 && bn(t, e.child, null, a), t.child.memoizedState = jo(a), t.memoizedState = wo, o); if (!(t.mode & 1)) return Qi(e, t, a, null); if (r.data === "$!") { if (s = r.nextSibling && r.nextSibling.dataset, s) var l = s.dgst; return s = l, o = Error(N(419)), s = qr(o, s, void 0), Qi(e, t, a, s) } if (l = (a & e.childLanes) !== 0, ye || l) { if (s = re, s !== null) { switch (a & -a) { case 4: r = 2; break; case 16: r = 8; break; case 64: case 128: case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: case 4194304: case 8388608: case 16777216: case 33554432: case 67108864: r = 32; break; case 536870912: r = 268435456; break; default: r = 0 }r = r & (s.suspendedLanes | a) ? 0 : r, r !== 0 && r !== o.retryLane && (o.retryLane = r, it(e, r), Le(s, e, r, -1)) } return Ea(), s = qr(Error(N(421))), Qi(e, t, a, s) } return r.data === "$?" ? (t.flags |= 128, t.child = e.child, t = qh.bind(null, e), r._reactRetry = t, null) : (e = o.treeContext, Ne = xt(r.nextSibling), ke = t, Q = !0, Oe = null, e !== null && (De[Ce++] = Je, De[Ce++] = Ze, De[Ce++] = Ht, Je = e.id, Ze = e.overflow, Ht = t), t = ja(t, s.children), t.flags |= 4096, t) } function Bl(e, t, i) { e.lanes |= t; var s = e.alternate; s !== null && (s.lanes |= t), fo(e.return, t, i) } function Tr(e, t, i, s, r) { var o = e.memoizedState; o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: i, tailMode: r } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = s, o.tail = i, o.tailMode = r) } function uu(e, t, i) { var s = t.pendingProps, r = s.revealOrder, o = s.tail; if (pe(e, t, s.children, i), s = W.current, s & 2) s = s & 1 | 2, t.flags |= 128; else { if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) { if (e.tag === 13) e.memoizedState !== null && Bl(e, i, t); else if (e.tag === 19) Bl(e, i, t); else if (e.child !== null) { e.child.return = e, e = e.child; continue } if (e === t) break e; for (; e.sibling === null;) { if (e.return === null || e.return === t) break e; e = e.return } e.sibling.return = e.return, e = e.sibling } s &= 1 } if (M(W, s), !(t.mode & 1)) t.memoizedState = null; else switch (r) { case "forwards": for (i = t.child, r = null; i !== null;)e = i.alternate, e !== null && Ts(e) === null && (r = i), i = i.sibling; i = r, i === null ? (r = t.child, t.child = null) : (r = i.sibling, i.sibling = null), Tr(t, !1, r, i, o); break; case "backwards": for (i = null, r = t.child, t.child = null; r !== null;) { if (e = r.alternate, e !== null && Ts(e) === null) { t.child = r; break } e = r.sibling, r.sibling = i, i = r, r = e } Tr(t, !0, i, null, o); break; case "together": Tr(t, !1, null, null, void 0); break; default: t.memoizedState = null }return t.child } function ss(e, t) { !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2) } function st(e, t, i) { if (e !== null && (t.dependencies = e.dependencies), Qt |= t.lanes, !(i & t.childLanes)) return null; if (e !== null && t.child !== e.child) throw Error(N(153)); if (t.child !== null) { for (e = t.child, i = wt(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null;)e = e.sibling, i = i.sibling = wt(e, e.pendingProps), i.return = t; i.sibling = null } return t.child } function hh(e, t, i) { switch (t.tag) { case 3: cu(t), vn(); break; case 5: Rd(t); break; case 1: be(t.type) && ws(t); break; case 4: ha(t, t.stateNode.containerInfo); break; case 10: var s = t.type._context, r = t.memoizedProps.value; M(ks, s._currentValue), s._currentValue = r; break; case 13: if (s = t.memoizedState, s !== null) return s.dehydrated !== null ? (M(W, W.current & 1), t.flags |= 128, null) : i & t.child.childLanes ? du(e, t, i) : (M(W, W.current & 1), e = st(e, t, i), e !== null ? e.sibling : null); M(W, W.current & 1); break; case 19: if (s = (i & t.childLanes) !== 0, e.flags & 128) { if (s) return uu(e, t, i); t.flags |= 128 } if (r = t.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), M(W, W.current), s) break; return null; case 22: case 23: return t.lanes = 0, au(e, t, i) }return st(e, t, i) } var mu, No, pu, hu; mu = function (e, t) { for (var i = t.child; i !== null;) { if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode); else if (i.tag !== 4 && i.child !== null) { i.child.return = i, i = i.child; continue } if (i === t) break; for (; i.sibling === null;) { if (i.return === null || i.return === t) return; i = i.return } i.sibling.return = i.return, i = i.sibling } }; No = function () { }; pu = function (e, t, i, s) { var r = e.memoizedProps; if (r !== s) { e = t.stateNode, It(Ye.current); var o = null; switch (i) { case "input": r = Ur(e, r), s = Ur(e, s), o = []; break; case "select": r = $({}, r, { value: void 0 }), s = $({}, s, { value: void 0 }), o = []; break; case "textarea": r = $r(e, r), s = $r(e, s), o = []; break; default: typeof r.onClick != "function" && typeof s.onClick == "function" && (e.onclick = vs) }Vr(i, s); var a; i = null; for (d in r) if (!s.hasOwnProperty(d) && r.hasOwnProperty(d) && r[d] != null) if (d === "style") { var l = r[d]; for (a in l) l.hasOwnProperty(a) && (i || (i = {}), i[a] = "") } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (ii.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null)); for (d in s) { var c = s[d]; if (l = r != null ? r[d] : void 0, s.hasOwnProperty(d) && c !== l && (c != null || l != null)) if (d === "style") if (l) { for (a in l) !l.hasOwnProperty(a) || c && c.hasOwnProperty(a) || (i || (i = {}), i[a] = ""); for (a in c) c.hasOwnProperty(a) && l[a] !== c[a] && (i || (i = {}), i[a] = c[a]) } else i || (o || (o = []), o.push(d, i)), i = c; else d === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, l = l ? l.__html : void 0, c != null && l !== c && (o = o || []).push(d, c)) : d === "children" ? typeof c != "string" && typeof c != "number" || (o = o || []).push(d, "" + c) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (ii.hasOwnProperty(d) ? (c != null && d === "onScroll" && H("scroll", e), o || l === c || (o = [])) : (o = o || []).push(d, c)) } i && (o = o || []).push("style", i); var d = o; (t.updateQueue = d) && (t.flags |= 4) } }; hu = function (e, t, i, s) { i !== s && (t.flags |= 4) }; function Bn(e, t) { if (!Q) switch (e.tailMode) { case "hidden": t = e.tail; for (var i = null; t !== null;)t.alternate !== null && (i = t), t = t.sibling; i === null ? e.tail = null : i.sibling = null; break; case "collapsed": i = e.tail; for (var s = null; i !== null;)i.alternate !== null && (s = i), i = i.sibling; s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null } } function de(e) { var t = e.alternate !== null && e.alternate.child === e.child, i = 0, s = 0; if (t) for (var r = e.child; r !== null;)i |= r.lanes | r.childLanes, s |= r.subtreeFlags & 14680064, s |= r.flags & 14680064, r.return = e, r = r.sibling; else for (r = e.child; r !== null;)i |= r.lanes | r.childLanes, s |= r.subtreeFlags, s |= r.flags, r.return = e, r = r.sibling; return e.subtreeFlags |= s, e.childLanes = i, t } function fh(e, t, i) { var s = t.pendingProps; switch (aa(t), t.tag) { case 2: case 16: case 15: case 0: case 11: case 7: case 8: case 12: case 9: case 14: return de(t), null; case 1: return be(t.type) && bs(), de(t), null; case 3: return s = t.stateNode, wn(), L(ve), L(me), ga(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (Hi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Oe !== null && (Ao(Oe), Oe = null))), No(e, t), de(t), null; case 5: fa(t); var r = It(fi.current); if (i = t.type, e !== null && t.stateNode != null) pu(e, t, i, s, r), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else { if (!s) { if (t.stateNode === null) throw Error(N(166)); return de(t), null } if (e = It(Ye.current), Hi(t)) { s = t.stateNode, i = t.type; var o = t.memoizedProps; switch (s[Ge] = t, s[pi] = o, e = (t.mode & 1) !== 0, i) { case "dialog": H("cancel", s), H("close", s); break; case "iframe": case "object": case "embed": H("load", s); break; case "video": case "audio": for (r = 0; r < Gn.length; r++)H(Gn[r], s); break; case "source": H("error", s); break; case "img": case "image": case "link": H("error", s), H("load", s); break; case "details": H("toggle", s); break; case "input": $a(s, o), H("invalid", s); break; case "select": s._wrapperState = { wasMultiple: !!o.multiple }, H("invalid", s); break; case "textarea": Va(s, o), H("invalid", s) }Vr(i, o), r = null; for (var a in o) if (o.hasOwnProperty(a)) { var l = o[a]; a === "children" ? typeof l == "string" ? s.textContent !== l && (o.suppressHydrationWarning !== !0 && Mi(s.textContent, l, e), r = ["children", l]) : typeof l == "number" && s.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && Mi(s.textContent, l, e), r = ["children", "" + l]) : ii.hasOwnProperty(a) && l != null && a === "onScroll" && H("scroll", s) } switch (i) { case "input": Fi(s), Ya(s, o, !0); break; case "textarea": Fi(s), Ka(s); break; case "select": case "option": break; default: typeof o.onClick == "function" && (s.onclick = vs) }s = r, t.updateQueue = s, s !== null && (t.flags |= 4) } else { a = r.nodeType === 9 ? r : r.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Lc(i)), e === "http://www.w3.org/1999/xhtml" ? i === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = a.createElement(i, { is: s.is }) : (e = a.createElement(i), i === "select" && (a = e, s.multiple ? a.multiple = !0 : s.size && (a.size = s.size))) : e = a.createElementNS(e, i), e[Ge] = t, e[pi] = s, mu(e, t, !1, !1), t.stateNode = e; e: { switch (a = Kr(i, s), i) { case "dialog": H("cancel", e), H("close", e), r = s; break; case "iframe": case "object": case "embed": H("load", e), r = s; break; case "video": case "audio": for (r = 0; r < Gn.length; r++)H(Gn[r], e); r = s; break; case "source": H("error", e), r = s; break; case "img": case "image": case "link": H("error", e), H("load", e), r = s; break; case "details": H("toggle", e), r = s; break; case "input": $a(e, s), r = Ur(e, s), H("invalid", e); break; case "option": r = s; break; case "select": e._wrapperState = { wasMultiple: !!s.multiple }, r = $({}, s, { value: void 0 }), H("invalid", e); break; case "textarea": Va(e, s), r = $r(e, s), H("invalid", e); break; default: r = s }Vr(i, r), l = r; for (o in l) if (l.hasOwnProperty(o)) { var c = l[o]; o === "style" ? Wc(e, c) : o === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Qc(e, c)) : o === "children" ? typeof c == "string" ? (i !== "textarea" || c !== "") && si(e, c) : typeof c == "number" && si(e, "" + c) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (ii.hasOwnProperty(o) ? c != null && o === "onScroll" && H("scroll", e) : c != null && Go(e, o, c, a)) } switch (i) { case "input": Fi(e), Ya(e, s, !1); break; case "textarea": Fi(e), Ka(e); break; case "option": s.value != null && e.setAttribute("value", "" + Nt(s.value)); break; case "select": e.multiple = !!s.multiple, o = s.value, o != null ? cn(e, !!s.multiple, o, !1) : s.defaultValue != null && cn(e, !!s.multiple, s.defaultValue, !0); break; default: typeof r.onClick == "function" && (e.onclick = vs) }switch (i) { case "button": case "input": case "select": case "textarea": s = !!s.autoFocus; break e; case "img": s = !0; break e; default: s = !1 } } s && (t.flags |= 4) } t.ref !== null && (t.flags |= 512, t.flags |= 2097152) } return de(t), null; case 6: if (e && t.stateNode != null) hu(e, t, e.memoizedProps, s); else { if (typeof s != "string" && t.stateNode === null) throw Error(N(166)); if (i = It(fi.current), It(Ye.current), Hi(t)) { if (s = t.stateNode, i = t.memoizedProps, s[Ge] = t, (o = s.nodeValue !== i) && (e = ke, e !== null)) switch (e.tag) { case 3: Mi(s.nodeValue, i, (e.mode & 1) !== 0); break; case 5: e.memoizedProps.suppressHydrationWarning !== !0 && Mi(s.nodeValue, i, (e.mode & 1) !== 0) }o && (t.flags |= 4) } else s = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(s), s[Ge] = t, t.stateNode = s } return de(t), null; case 13: if (L(W), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) { if (Q && Ne !== null && t.mode & 1 && !(t.flags & 128)) Fd(), vn(), t.flags |= 98560, o = !1; else if (o = Hi(t), s !== null && s.dehydrated !== null) { if (e === null) { if (!o) throw Error(N(318)); if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(N(317)); o[Ge] = t } else vn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4; de(t), o = !1 } else Oe !== null && (Ao(Oe), Oe = null), o = !0; if (!o) return t.flags & 65536 ? t : null } return t.flags & 128 ? (t.lanes = i, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, t.mode & 1 && (e === null || W.current & 1 ? ne === 0 && (ne = 3) : Ea())), t.updateQueue !== null && (t.flags |= 4), de(t), null); case 4: return wn(), No(e, t), e === null && ui(t.stateNode.containerInfo), de(t), null; case 10: return ua(t.type._context), de(t), null; case 17: return be(t.type) && bs(), de(t), null; case 19: if (L(W), o = t.memoizedState, o === null) return de(t), null; if (s = (t.flags & 128) !== 0, a = o.rendering, a === null) if (s) Bn(o, !1); else { if (ne !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) { if (a = Ts(e), a !== null) { for (t.flags |= 128, Bn(o, !1), s = a.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = i, i = t.child; i !== null;)o = i, e = s, o.flags &= 14680066, a = o.alternate, a === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = a.childLanes, o.lanes = a.lanes, o.child = a.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = a.memoizedProps, o.memoizedState = a.memoizedState, o.updateQueue = a.updateQueue, o.type = a.type, e = a.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), i = i.sibling; return M(W, W.current & 1 | 2), t.child } e = e.sibling } o.tail !== null && X() > Nn && (t.flags |= 128, s = !0, Bn(o, !1), t.lanes = 4194304) } else { if (!s) if (e = Ts(a), e !== null) { if (t.flags |= 128, s = !0, i = e.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), Bn(o, !0), o.tail === null && o.tailMode === "hidden" && !a.alternate && !Q) return de(t), null } else 2 * X() - o.renderingStartTime > Nn && i !== 1073741824 && (t.flags |= 128, s = !0, Bn(o, !1), t.lanes = 4194304); o.isBackwards ? (a.sibling = t.child, t.child = a) : (i = o.last, i !== null ? i.sibling = a : t.child = a, o.last = a) } return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = X(), t.sibling = null, i = W.current, M(W, s ? i & 1 | 2 : i & 1), t) : (de(t), null); case 22: case 23: return Ta(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && t.mode & 1 ? je & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : de(t), null; case 24: return null; case 25: return null }throw Error(N(156, t.tag)) } function gh(e, t) { switch (aa(t), t.tag) { case 1: return be(t.type) && bs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null; case 3: return wn(), L(ve), L(me), ga(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null; case 5: return fa(t), null; case 13: if (L(W), e = t.memoizedState, e !== null && e.dehydrated !== null) { if (t.alternate === null) throw Error(N(340)); vn() } return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null; case 19: return L(W), null; case 4: return wn(), null; case 10: return ua(t.type._context), null; case 22: case 23: return Ta(), null; case 24: return null; default: return null } } var Ui = !1, ue = !1, xh = typeof WeakSet == "function" ? WeakSet : Set, T = null; function an(e, t) { var i = e.ref; if (i !== null) if (typeof i == "function") try { i(null) } catch (s) { Y(e, t, s) } else i.current = null } function ko(e, t, i) { try { i() } catch (s) { Y(e, t, s) } } var Ol = !1; function yh(e, t) { if (oo = gs, e = vd(), ra(e)) { if ("selectionStart" in e) var i = { start: e.selectionStart, end: e.selectionEnd }; else e: { i = (i = e.ownerDocument) && i.defaultView || window; var s = i.getSelection && i.getSelection(); if (s && s.rangeCount !== 0) { i = s.anchorNode; var r = s.anchorOffset, o = s.focusNode; s = s.focusOffset; try { i.nodeType, o.nodeType } catch { i = null; break e } var a = 0, l = -1, c = -1, d = 0, m = 0, h = e, g = null; t: for (; ;) { for (var x; h !== i || r !== 0 && h.nodeType !== 3 || (l = a + r), h !== o || s !== 0 && h.nodeType !== 3 || (c = a + s), h.nodeType === 3 && (a += h.nodeValue.length), (x = h.firstChild) !== null;)g = h, h = x; for (; ;) { if (h === e) break t; if (g === i && ++d === r && (l = a), g === o && ++m === s && (c = a), (x = h.nextSibling) !== null) break; h = g, g = h.parentNode } h = x } i = l === -1 || c === -1 ? null : { start: l, end: c } } else i = null } i = i || { start: 0, end: 0 } } else i = null; for (ao = { focusedElem: e, selectionRange: i }, gs = !1, T = t; T !== null;)if (t = T, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, T = e; else for (; T !== null;) { t = T; try { var w = t.alternate; if (t.flags & 1024) switch (t.tag) { case 0: case 11: case 15: break; case 1: if (w !== null) { var v = w.memoizedProps, S = w.memoizedState, f = t.stateNode, u = f.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Re(t.type, v), S); f.__reactInternalSnapshotBeforeUpdate = u } break; case 3: var p = t.stateNode.containerInfo; p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement); break; case 5: case 6: case 4: case 17: break; default: throw Error(N(163)) } } catch (y) { Y(t, t.return, y) } if (e = t.sibling, e !== null) { e.return = t.return, T = e; break } T = t.return } return w = Ol, Ol = !1, w } function Zn(e, t, i) { var s = t.updateQueue; if (s = s !== null ? s.lastEffect : null, s !== null) { var r = s = s.next; do { if ((r.tag & e) === e) { var o = r.destroy; r.destroy = void 0, o !== void 0 && ko(t, i, o) } r = r.next } while (r !== s) } } function Gs(e, t) { if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) { var i = t = t.next; do { if ((i.tag & e) === e) { var s = i.create; i.destroy = s() } i = i.next } while (i !== t) } } function So(e) { var t = e.ref; if (t !== null) { var i = e.stateNode; switch (e.tag) { case 5: e = i; break; default: e = i }typeof t == "function" ? t(e) : t.current = e } } function fu(e) { var t = e.alternate; t !== null && (e.alternate = null, fu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ge], delete t[pi], delete t[uo], delete t[eh], delete t[th])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null } function gu(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4 } function Ml(e) { e: for (; ;) { for (; e.sibling === null;) { if (e.return === null || gu(e.return)) return null; e = e.return } for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) { if (e.flags & 2 || e.child === null || e.tag === 4) continue e; e.child.return = e, e = e.child } if (!(e.flags & 2)) return e.stateNode } } function qo(e, t, i) { var s = e.tag; if (s === 5 || s === 6) e = e.stateNode, t ? i.nodeType === 8 ? i.parentNode.insertBefore(e, t) : i.insertBefore(e, t) : (i.nodeType === 8 ? (t = i.parentNode, t.insertBefore(e, i)) : (t = i, t.appendChild(e)), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = vs)); else if (s !== 4 && (e = e.child, e !== null)) for (qo(e, t, i), e = e.sibling; e !== null;)qo(e, t, i), e = e.sibling } function To(e, t, i) { var s = e.tag; if (s === 5 || s === 6) e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e); else if (s !== 4 && (e = e.child, e !== null)) for (To(e, t, i), e = e.sibling; e !== null;)To(e, t, i), e = e.sibling } var oe = null, Be = !1; function ot(e, t, i) { for (i = i.child; i !== null;)xu(e, t, i), i = i.sibling } function xu(e, t, i) { if ($e && typeof $e.onCommitFiberUnmount == "function") try { $e.onCommitFiberUnmount(Bs, i) } catch { } switch (i.tag) { case 5: ue || an(i, t); case 6: var s = oe, r = Be; oe = null, ot(e, t, i), oe = s, Be = r, oe !== null && (Be ? (e = oe, i = i.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i)) : oe.removeChild(i.stateNode)); break; case 18: oe !== null && (Be ? (e = oe, i = i.stateNode, e.nodeType === 8 ? br(e.parentNode, i) : e.nodeType === 1 && br(e, i), li(e)) : br(oe, i.stateNode)); break; case 4: s = oe, r = Be, oe = i.stateNode.containerInfo, Be = !0, ot(e, t, i), oe = s, Be = r; break; case 0: case 11: case 14: case 15: if (!ue && (s = i.updateQueue, s !== null && (s = s.lastEffect, s !== null))) { r = s = s.next; do { var o = r, a = o.destroy; o = o.tag, a !== void 0 && (o & 2 || o & 4) && ko(i, t, a), r = r.next } while (r !== s) } ot(e, t, i); break; case 1: if (!ue && (an(i, t), s = i.stateNode, typeof s.componentWillUnmount == "function")) try { s.props = i.memoizedProps, s.state = i.memoizedState, s.componentWillUnmount() } catch (l) { Y(i, t, l) } ot(e, t, i); break; case 21: ot(e, t, i); break; case 22: i.mode & 1 ? (ue = (s = ue) || i.memoizedState !== null, ot(e, t, i), ue = s) : ot(e, t, i); break; default: ot(e, t, i) } } function Hl(e) { var t = e.updateQueue; if (t !== null) { e.updateQueue = null; var i = e.stateNode; i === null && (i = e.stateNode = new xh), t.forEach(function (s) { var r = Th.bind(null, e, s); i.has(s) || (i.add(s), s.then(r, r)) }) } } function Ie(e, t) { var i = t.deletions; if (i !== null) for (var s = 0; s < i.length; s++) { var r = i[s]; try { var o = e, a = t, l = a; e: for (; l !== null;) { switch (l.tag) { case 5: oe = l.stateNode, Be = !1; break e; case 3: oe = l.stateNode.containerInfo, Be = !0; break e; case 4: oe = l.stateNode.containerInfo, Be = !0; break e }l = l.return } if (oe === null) throw Error(N(160)); xu(o, a, r), oe = null, Be = !1; var c = r.alternate; c !== null && (c.return = null), r.return = null } catch (d) { Y(r, t, d) } } if (t.subtreeFlags & 12854) for (t = t.child; t !== null;)yu(t, e), t = t.sibling } function yu(e, t) { var i = e.alternate, s = e.flags; switch (e.tag) { case 0: case 11: case 14: case 15: if (Ie(t, e), Ue(e), s & 4) { try { Zn(3, e, e.return), Gs(3, e) } catch (v) { Y(e, e.return, v) } try { Zn(5, e, e.return) } catch (v) { Y(e, e.return, v) } } break; case 1: Ie(t, e), Ue(e), s & 512 && i !== null && an(i, i.return); break; case 5: if (Ie(t, e), Ue(e), s & 512 && i !== null && an(i, i.return), e.flags & 32) { var r = e.stateNode; try { si(r, "") } catch (v) { Y(e, e.return, v) } } if (s & 4 && (r = e.stateNode, r != null)) { var o = e.memoizedProps, a = i !== null ? i.memoizedProps : o, l = e.type, c = e.updateQueue; if (e.updateQueue = null, c !== null) try { l === "input" && o.type === "radio" && o.name != null && Mc(r, o), Kr(l, a); var d = Kr(l, o); for (a = 0; a < c.length; a += 2) { var m = c[a], h = c[a + 1]; m === "style" ? Wc(r, h) : m === "dangerouslySetInnerHTML" ? Qc(r, h) : m === "children" ? si(r, h) : Go(r, m, h, d) } switch (l) { case "input": Wr(r, o); break; case "textarea": Hc(r, o); break; case "select": var g = r._wrapperState.wasMultiple; r._wrapperState.wasMultiple = !!o.multiple; var x = o.value; x != null ? cn(r, !!o.multiple, x, !1) : g !== !!o.multiple && (o.defaultValue != null ? cn(r, !!o.multiple, o.defaultValue, !0) : cn(r, !!o.multiple, o.multiple ? [] : "", !1)) }r[pi] = o } catch (v) { Y(e, e.return, v) } } break; case 6: if (Ie(t, e), Ue(e), s & 4) { if (e.stateNode === null) throw Error(N(162)); r = e.stateNode, o = e.memoizedProps; try { r.nodeValue = o } catch (v) { Y(e, e.return, v) } } break; case 3: if (Ie(t, e), Ue(e), s & 4 && i !== null && i.memoizedState.isDehydrated) try { li(t.containerInfo) } catch (v) { Y(e, e.return, v) } break; case 4: Ie(t, e), Ue(e); break; case 13: Ie(t, e), Ue(e), r = e.child, r.flags & 8192 && (o = r.memoizedState !== null, r.stateNode.isHidden = o, !o || r.alternate !== null && r.alternate.memoizedState !== null || (Sa = X())), s & 4 && Hl(e); break; case 22: if (m = i !== null && i.memoizedState !== null, e.mode & 1 ? (ue = (d = ue) || m, Ie(t, e), ue = d) : Ie(t, e), Ue(e), s & 8192) { if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !m && e.mode & 1) for (T = e, m = e.child; m !== null;) { for (h = T = m; T !== null;) { switch (g = T, x = g.child, g.tag) { case 0: case 11: case 14: case 15: Zn(4, g, g.return); break; case 1: an(g, g.return); var w = g.stateNode; if (typeof w.componentWillUnmount == "function") { s = g, i = g.return; try { t = s, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount() } catch (v) { Y(s, i, v) } } break; case 5: an(g, g.return); break; case 22: if (g.memoizedState !== null) { Ql(h); continue } }x !== null ? (x.return = g, T = x) : Ql(h) } m = m.sibling } e: for (m = null, h = e; ;) { if (h.tag === 5) { if (m === null) { m = h; try { r = h.stateNode, d ? (o = r.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = h.stateNode, c = h.memoizedProps.style, a = c != null && c.hasOwnProperty("display") ? c.display : null, l.style.display = Uc("display", a)) } catch (v) { Y(e, e.return, v) } } } else if (h.tag === 6) { if (m === null) try { h.stateNode.nodeValue = d ? "" : h.memoizedProps } catch (v) { Y(e, e.return, v) } } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) { h.child.return = h, h = h.child; continue } if (h === e) break e; for (; h.sibling === null;) { if (h.return === null || h.return === e) break e; m === h && (m = null), h = h.return } m === h && (m = null), h.sibling.return = h.return, h = h.sibling } } break; case 19: Ie(t, e), Ue(e), s & 4 && Hl(e); break; case 21: break; default: Ie(t, e), Ue(e) } } function Ue(e) { var t = e.flags; if (t & 2) { try { e: { for (var i = e.return; i !== null;) { if (gu(i)) { var s = i; break e } i = i.return } throw Error(N(160)) } switch (s.tag) { case 5: var r = s.stateNode; s.flags & 32 && (si(r, ""), s.flags &= -33); var o = Ml(e); To(e, o, r); break; case 3: case 4: var a = s.stateNode.containerInfo, l = Ml(e); qo(e, l, a); break; default: throw Error(N(161)) } } catch (c) { Y(e, e.return, c) } e.flags &= -3 } t & 4096 && (e.flags &= -4097) } function vh(e, t, i) { T = e, vu(e) } function vu(e, t, i) { for (var s = (e.mode & 1) !== 0; T !== null;) { var r = T, o = r.child; if (r.tag === 22 && s) { var a = r.memoizedState !== null || Ui; if (!a) { var l = r.alternate, c = l !== null && l.memoizedState !== null || ue; l = Ui; var d = ue; if (Ui = a, (ue = c) && !d) for (T = r; T !== null;)a = T, c = a.child, a.tag === 22 && a.memoizedState !== null ? Ul(r) : c !== null ? (c.return = a, T = c) : Ul(r); for (; o !== null;)T = o, vu(o), o = o.sibling; T = r, Ui = l, ue = d } Ll(e) } else r.subtreeFlags & 8772 && o !== null ? (o.return = r, T = o) : Ll(e) } } function Ll(e) { for (; T !== null;) { var t = T; if (t.flags & 8772) { var i = t.alternate; try { if (t.flags & 8772) switch (t.tag) { case 0: case 11: case 15: ue || Gs(5, t); break; case 1: var s = t.stateNode; if (t.flags & 4 && !ue) if (i === null) s.componentDidMount(); else { var r = t.elementType === t.type ? i.memoizedProps : Re(t.type, i.memoizedProps); s.componentDidUpdate(r, i.memoizedState, s.__reactInternalSnapshotBeforeUpdate) } var o = t.updateQueue; o !== null && ql(t, o, s); break; case 3: var a = t.updateQueue; if (a !== null) { if (i = null, t.child !== null) switch (t.child.tag) { case 5: i = t.child.stateNode; break; case 1: i = t.child.stateNode }ql(t, a, i) } break; case 5: var l = t.stateNode; if (i === null && t.flags & 4) { i = l; var c = t.memoizedProps; switch (t.type) { case "button": case "input": case "select": case "textarea": c.autoFocus && i.focus(); break; case "img": c.src && (i.src = c.src) } } break; case 6: break; case 4: break; case 12: break; case 13: if (t.memoizedState === null) { var d = t.alternate; if (d !== null) { var m = d.memoizedState; if (m !== null) { var h = m.dehydrated; h !== null && li(h) } } } break; case 19: case 17: case 21: case 22: case 23: case 25: break; default: throw Error(N(163)) }ue || t.flags & 512 && So(t) } catch (g) { Y(t, t.return, g) } } if (t === e) { T = null; break } if (i = t.sibling, i !== null) { i.return = t.return, T = i; break } T = t.return } } function Ql(e) { for (; T !== null;) { var t = T; if (t === e) { T = null; break } var i = t.sibling; if (i !== null) { i.return = t.return, T = i; break } T = t.return } } function Ul(e) { for (; T !== null;) { var t = T; try { switch (t.tag) { case 0: case 11: case 15: var i = t.return; try { Gs(4, t) } catch (c) { Y(t, i, c) } break; case 1: var s = t.stateNode; if (typeof s.componentDidMount == "function") { var r = t.return; try { s.componentDidMount() } catch (c) { Y(t, r, c) } } var o = t.return; try { So(t) } catch (c) { Y(t, o, c) } break; case 5: var a = t.return; try { So(t) } catch (c) { Y(t, a, c) } } } catch (c) { Y(t, t.return, c) } if (t === e) { T = null; break } var l = t.sibling; if (l !== null) { l.return = t.return, T = l; break } T = t.return } } var bh = Math.ceil, Cs = rt.ReactCurrentDispatcher, Na = rt.ReactCurrentOwner, Fe = rt.ReactCurrentBatchConfig, R = 0, re = null, Z = null, ae = 0, je = 0, ln = qt(0), ne = 0, vi = null, Qt = 0, $s = 0, ka = 0, ei = null, xe = null, Sa = 0, Nn = 1 / 0, Ke = null, As = !1, Eo = null, vt = null, Wi = !1, mt = null, Fs = 0, ti = 0, Do = null, rs = -1, os = 0; function he() { return R & 6 ? X() : rs !== -1 ? rs : rs = X() } function bt(e) { return e.mode & 1 ? R & 2 && ae !== 0 ? ae & -ae : ih.transition !== null ? (os === 0 && (os = id()), os) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : dd(e.type)), e) : 1 } function Le(e, t, i, s) { if (50 < ti) throw ti = 0, Do = null, Error(N(185)); Ni(e, i, s), (!(R & 2) || e !== re) && (e === re && (!(R & 2) && ($s |= i), ne === 4 && dt(e, ae)), we(e, s), i === 1 && R === 0 && !(t.mode & 1) && (Nn = X() + 500, Qs && Tt())) } function we(e, t) { var i = e.callbackNode; ip(e, t); var s = fs(e, e === re ? ae : 0); if (s === 0) i !== null && Za(i), e.callbackNode = null, e.callbackPriority = 0; else if (t = s & -s, e.callbackPriority !== t) { if (i != null && Za(i), t === 1) e.tag === 0 ? nh(Wl.bind(null, e)) : Dd(Wl.bind(null, e)), Jp(function () { !(R & 6) && Tt() }), i = null; else { switch (sd(s)) { case 1: i = Xo; break; case 4: i = td; break; case 16: i = hs; break; case 536870912: i = nd; break; default: i = hs }i = Tu(i, bu.bind(null, e)) } e.callbackPriority = t, e.callbackNode = i } } function bu(e, t) { if (rs = -1, os = 0, R & 6) throw Error(N(327)); var i = e.callbackNode; if (hn() && e.callbackNode !== i) return null; var s = fs(e, e === re ? ae : 0); if (s === 0) return null; if (s & 30 || s & e.expiredLanes || t) t = _s(e, s); else { t = s; var r = R; R |= 2; var o = ju(); (re !== e || ae !== t) && (Ke = null, Nn = X() + 500, Bt(e, t)); do try { Nh(); break } catch (l) { wu(e, l) } while (!0); da(), Cs.current = o, R = r, Z !== null ? t = 0 : (re = null, ae = 0, t = ne) } if (t !== 0) { if (t === 2 && (r = to(e), r !== 0 && (s = r, t = Co(e, r))), t === 1) throw i = vi, Bt(e, 0), dt(e, s), we(e, X()), i; if (t === 6) dt(e, s); else { if (r = e.current.alternate, !(s & 30) && !wh(r) && (t = _s(e, s), t === 2 && (o = to(e), o !== 0 && (s = o, t = Co(e, o))), t === 1)) throw i = vi, Bt(e, 0), dt(e, s), we(e, X()), i; switch (e.finishedWork = r, e.finishedLanes = s, t) { case 0: case 1: throw Error(N(345)); case 2: _t(e, xe, Ke); break; case 3: if (dt(e, s), (s & 130023424) === s && (t = Sa + 500 - X(), 10 < t)) { if (fs(e, 0) !== 0) break; if (r = e.suspendedLanes, (r & s) !== s) { he(), e.pingedLanes |= e.suspendedLanes & r; break } e.timeoutHandle = co(_t.bind(null, e, xe, Ke), t); break } _t(e, xe, Ke); break; case 4: if (dt(e, s), (s & 4194240) === s) break; for (t = e.eventTimes, r = -1; 0 < s;) { var a = 31 - He(s); o = 1 << a, a = t[a], a > r && (r = a), s &= ~o } if (s = r, s = X() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * bh(s / 1960)) - s, 10 < s) { e.timeoutHandle = co(_t.bind(null, e, xe, Ke), s); break } _t(e, xe, Ke); break; case 5: _t(e, xe, Ke); break; default: throw Error(N(329)) } } } return we(e, X()), e.callbackNode === i ? bu.bind(null, e) : null } function Co(e, t) { var i = ei; return e.current.memoizedState.isDehydrated && (Bt(e, t).flags |= 256), e = _s(e, t), e !== 2 && (t = xe, xe = i, t !== null && Ao(t)), e } function Ao(e) { xe === null ? xe = e : xe.push.apply(xe, e) } function wh(e) { for (var t = e; ;) { if (t.flags & 16384) { var i = t.updateQueue; if (i !== null && (i = i.stores, i !== null)) for (var s = 0; s < i.length; s++) { var r = i[s], o = r.getSnapshot; r = r.value; try { if (!Qe(o(), r)) return !1 } catch { return !1 } } } if (i = t.child, t.subtreeFlags & 16384 && i !== null) i.return = t, t = i; else { if (t === e) break; for (; t.sibling === null;) { if (t.return === null || t.return === e) return !0; t = t.return } t.sibling.return = t.return, t = t.sibling } } return !0 } function dt(e, t) { for (t &= ~ka, t &= ~$s, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) { var i = 31 - He(t), s = 1 << i; e[i] = -1, t &= ~s } } function Wl(e) { if (R & 6) throw Error(N(327)); hn(); var t = fs(e, 0); if (!(t & 1)) return we(e, X()), null; var i = _s(e, t); if (e.tag !== 0 && i === 2) { var s = to(e); s !== 0 && (t = s, i = Co(e, s)) } if (i === 1) throw i = vi, Bt(e, 0), dt(e, t), we(e, X()), i; if (i === 6) throw Error(N(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, _t(e, xe, Ke), we(e, X()), null } function qa(e, t) { var i = R; R |= 1; try { return e(t) } finally { R = i, R === 0 && (Nn = X() + 500, Qs && Tt()) } } function Ut(e) { mt !== null && mt.tag === 0 && !(R & 6) && hn(); var t = R; R |= 1; var i = Fe.transition, s = O; try { if (Fe.transition = null, O = 1, e) return e() } finally { O = s, Fe.transition = i, R = t, !(R & 6) && Tt() } } function Ta() { je = ln.current, L(ln) } function Bt(e, t) { e.finishedWork = null, e.finishedLanes = 0; var i = e.timeoutHandle; if (i !== -1 && (e.timeoutHandle = -1, Xp(i)), Z !== null) for (i = Z.return; i !== null;) { var s = i; switch (aa(s), s.tag) { case 1: s = s.type.childContextTypes, s != null && bs(); break; case 3: wn(), L(ve), L(me), ga(); break; case 5: fa(s); break; case 4: wn(); break; case 13: L(W); break; case 19: L(W); break; case 10: ua(s.type._context); break; case 22: case 23: Ta() }i = i.return } if (re = e, Z = e = wt(e.current, null), ae = je = t, ne = 0, vi = null, ka = $s = Qt = 0, xe = ei = null, zt !== null) { for (t = 0; t < zt.length; t++)if (i = zt[t], s = i.interleaved, s !== null) { i.interleaved = null; var r = s.next, o = i.pending; if (o !== null) { var a = o.next; o.next = r, s.next = a } i.pending = s } zt = null } return e } function wu(e, t) { do { var i = Z; try { if (da(), ns.current = Ds, Es) { for (var s = G.memoizedState; s !== null;) { var r = s.queue; r !== null && (r.pending = null), s = s.next } Es = !1 } if (Lt = 0, se = te = G = null, Jn = !1, gi = 0, Na.current = null, i === null || i.return === null) { ne = 1, vi = t, Z = null; break } e: { var o = e, a = i.return, l = i, c = t; if (t = ae, l.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") { var d = c, m = l, h = m.tag; if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) { var g = m.alternate; g ? (m.updateQueue = g.updateQueue, m.memoizedState = g.memoizedState, m.lanes = g.lanes) : (m.updateQueue = null, m.memoizedState = null) } var x = Fl(a); if (x !== null) { x.flags &= -257, _l(x, a, l, o, t), x.mode & 1 && Al(o, d, t), t = x, c = d; var w = t.updateQueue; if (w === null) { var v = new Set; v.add(c), t.updateQueue = v } else w.add(c); break e } else { if (!(t & 1)) { Al(o, d, t), Ea(); break e } c = Error(N(426)) } } else if (Q && l.mode & 1) { var S = Fl(a); if (S !== null) { !(S.flags & 65536) && (S.flags |= 256), _l(S, a, l, o, t), la(jn(c, l)); break e } } o = c = jn(c, l), ne !== 4 && (ne = 2), ei === null ? ei = [o] : ei.push(o), o = a; do { switch (o.tag) { case 3: o.flags |= 65536, t &= -t, o.lanes |= t; var f = su(o, c, t); Sl(o, f); break e; case 1: l = c; var u = o.type, p = o.stateNode; if (!(o.flags & 128) && (typeof u.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (vt === null || !vt.has(p)))) { o.flags |= 65536, t &= -t, o.lanes |= t; var y = ru(o, l, t); Sl(o, y); break e } }o = o.return } while (o !== null) } ku(i) } catch (k) { t = k, Z === i && i !== null && (Z = i = i.return); continue } break } while (!0) } function ju() { var e = Cs.current; return Cs.current = Ds, e === null ? Ds : e } function Ea() { (ne === 0 || ne === 3 || ne === 2) && (ne = 4), re === null || !(Qt & 268435455) && !($s & 268435455) || dt(re, ae) } function _s(e, t) { var i = R; R |= 2; var s = ju(); (re !== e || ae !== t) && (Ke = null, Bt(e, t)); do try { jh(); break } catch (r) { wu(e, r) } while (!0); if (da(), R = i, Cs.current = s, Z !== null) throw Error(N(261)); return re = null, ae = 0, ne } function jh() { for (; Z !== null;)Nu(Z) } function Nh() { for (; Z !== null && !Ym();)Nu(Z) } function Nu(e) { var t = qu(e.alternate, e, je); e.memoizedProps = e.pendingProps, t === null ? ku(e) : Z = t, Na.current = null } function ku(e) { var t = e; do { var i = t.alternate; if (e = t.return, t.flags & 32768) { if (i = gh(i, t), i !== null) { i.flags &= 32767, Z = i; return } if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null; else { ne = 6, Z = null; return } } else if (i = fh(i, t, je), i !== null) { Z = i; return } if (t = t.sibling, t !== null) { Z = t; return } Z = t = e } while (t !== null); ne === 0 && (ne = 5) } function _t(e, t, i) { var s = O, r = Fe.transition; try { Fe.transition = null, O = 1, kh(e, t, i, s) } finally { Fe.transition = r, O = s } return null } function kh(e, t, i, s) { do hn(); while (mt !== null); if (R & 6) throw Error(N(327)); i = e.finishedWork; var r = e.finishedLanes; if (i === null) return null; if (e.finishedWork = null, e.finishedLanes = 0, i === e.current) throw Error(N(177)); e.callbackNode = null, e.callbackPriority = 0; var o = i.lanes | i.childLanes; if (sp(e, o), e === re && (Z = re = null, ae = 0), !(i.subtreeFlags & 2064) && !(i.flags & 2064) || Wi || (Wi = !0, Tu(hs, function () { return hn(), null })), o = (i.flags & 15990) !== 0, i.subtreeFlags & 15990 || o) { o = Fe.transition, Fe.transition = null; var a = O; O = 1; var l = R; R |= 4, Na.current = null, yh(e, i), yu(i, e), Up(ao), gs = !!oo, ao = oo = null, e.current = i, vh(i), Vm(), R = l, O = a, Fe.transition = o } else e.current = i; if (Wi && (Wi = !1, mt = e, Fs = r), o = e.pendingLanes, o === 0 && (vt = null), Jm(i.stateNode), we(e, X()), t !== null) for (s = e.onRecoverableError, i = 0; i < t.length; i++)r = t[i], s(r.value, { componentStack: r.stack, digest: r.digest }); if (As) throw As = !1, e = Eo, Eo = null, e; return Fs & 1 && e.tag !== 0 && hn(), o = e.pendingLanes, o & 1 ? e === Do ? ti++ : (ti = 0, Do = e) : ti = 0, Tt(), null } function hn() { if (mt !== null) { var e = sd(Fs), t = Fe.transition, i = O; try { if (Fe.transition = null, O = 16 > e ? 16 : e, mt === null) var s = !1; else { if (e = mt, mt = null, Fs = 0, R & 6) throw Error(N(331)); var r = R; for (R |= 4, T = e.current; T !== null;) { var o = T, a = o.child; if (T.flags & 16) { var l = o.deletions; if (l !== null) { for (var c = 0; c < l.length; c++) { var d = l[c]; for (T = d; T !== null;) { var m = T; switch (m.tag) { case 0: case 11: case 15: Zn(8, m, o) }var h = m.child; if (h !== null) h.return = m, T = h; else for (; T !== null;) { m = T; var g = m.sibling, x = m.return; if (fu(m), m === d) { T = null; break } if (g !== null) { g.return = x, T = g; break } T = x } } } var w = o.alternate; if (w !== null) { var v = w.child; if (v !== null) { w.child = null; do { var S = v.sibling; v.sibling = null, v = S } while (v !== null) } } T = o } } if (o.subtreeFlags & 2064 && a !== null) a.return = o, T = a; else e: for (; T !== null;) { if (o = T, o.flags & 2048) switch (o.tag) { case 0: case 11: case 15: Zn(9, o, o.return) }var f = o.sibling; if (f !== null) { f.return = o.return, T = f; break e } T = o.return } } var u = e.current; for (T = u; T !== null;) { a = T; var p = a.child; if (a.subtreeFlags & 2064 && p !== null) p.return = a, T = p; else e: for (a = u; T !== null;) { if (l = T, l.flags & 2048) try { switch (l.tag) { case 0: case 11: case 15: Gs(9, l) } } catch (k) { Y(l, l.return, k) } if (l === a) { T = null; break e } var y = l.sibling; if (y !== null) { y.return = l.return, T = y; break e } T = l.return } } if (R = r, Tt(), $e && typeof $e.onPostCommitFiberRoot == "function") try { $e.onPostCommitFiberRoot(Bs, e) } catch { } s = !0 } return s } finally { O = i, Fe.transition = t } } return !1 } function Gl(e, t, i) { t = jn(i, t), t = su(e, t, 1), e = yt(e, t, 1), t = he(), e !== null && (Ni(e, 1, t), we(e, t)) } function Y(e, t, i) { if (e.tag === 3) Gl(e, e, i); else for (; t !== null;) { if (t.tag === 3) { Gl(t, e, i); break } else if (t.tag === 1) { var s = t.stateNode; if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (vt === null || !vt.has(s))) { e = jn(i, e), e = ru(t, e, 1), t = yt(t, e, 1), e = he(), t !== null && (Ni(t, 1, e), we(t, e)); break } } t = t.return } } function Sh(e, t, i) { var s = e.pingCache; s !== null && s.delete(t), t = he(), e.pingedLanes |= e.suspendedLanes & i, re === e && (ae & i) === i && (ne === 4 || ne === 3 && (ae & 130023424) === ae && 500 > X() - Sa ? Bt(e, 0) : ka |= i), we(e, t) } function Su(e, t) { t === 0 && (e.mode & 1 ? (t = zi, zi <<= 1, !(zi & 130023424) && (zi = 4194304)) : t = 1); var i = he(); e = it(e, t), e !== null && (Ni(e, t, i), we(e, i)) } function qh(e) { var t = e.memoizedState, i = 0; t !== null && (i = t.retryLane), Su(e, i) } function Th(e, t) { var i = 0; switch (e.tag) { case 13: var s = e.stateNode, r = e.memoizedState; r !== null && (i = r.retryLane); break; case 19: s = e.stateNode; break; default: throw Error(N(314)) }s !== null && s.delete(t), Su(e, i) } var qu; qu = function (e, t, i) { if (e !== null) if (e.memoizedProps !== t.pendingProps || ve.current) ye = !0; else { if (!(e.lanes & i) && !(t.flags & 128)) return ye = !1, hh(e, t, i); ye = !!(e.flags & 131072) } else ye = !1, Q && t.flags & 1048576 && Cd(t, Ns, t.index); switch (t.lanes = 0, t.tag) { case 2: var s = t.type; ss(e, t), e = t.pendingProps; var r = yn(t, me.current); pn(t, i), r = ya(null, t, s, e, r, i); var o = va(); return t.flags |= 1, typeof r == "object" && r !== null && typeof r.render == "function" && r.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, be(s) ? (o = !0, ws(t)) : o = !1, t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, pa(t), r.updater = Ws, t.stateNode = r, r._reactInternals = t, xo(t, s, e, i), t = bo(null, t, s, !0, o, i)) : (t.tag = 0, Q && o && oa(t), pe(null, t, r, i), t = t.child), t; case 16: s = t.elementType; e: { switch (ss(e, t), e = t.pendingProps, r = s._init, s = r(s._payload), t.type = s, r = t.tag = Dh(s), e = Re(s, e), r) { case 0: t = vo(null, t, s, e, i); break e; case 1: t = Il(null, t, s, e, i); break e; case 11: t = Pl(null, t, s, e, i); break e; case 14: t = zl(null, t, s, Re(s.type, e), i); break e }throw Error(N(306, s, "")) } return t; case 0: return s = t.type, r = t.pendingProps, r = t.elementType === s ? r : Re(s, r), vo(e, t, s, r, i); case 1: return s = t.type, r = t.pendingProps, r = t.elementType === s ? r : Re(s, r), Il(e, t, s, r, i); case 3: e: { if (cu(t), e === null) throw Error(N(387)); s = t.pendingProps, o = t.memoizedState, r = o.element, Id(e, t), qs(t, s, null, i); var a = t.memoizedState; if (s = a.element, o.isDehydrated) if (o = { element: s, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) { r = jn(Error(N(423)), t), t = Rl(e, t, s, i, r); break e } else if (s !== r) { r = jn(Error(N(424)), t), t = Rl(e, t, s, i, r); break e } else for (Ne = xt(t.stateNode.containerInfo.firstChild), ke = t, Q = !0, Oe = null, i = Pd(t, null, s, i), t.child = i; i;)i.flags = i.flags & -3 | 4096, i = i.sibling; else { if (vn(), s === r) { t = st(e, t, i); break e } pe(e, t, s, i) } t = t.child } return t; case 5: return Rd(t), e === null && ho(t), s = t.type, r = t.pendingProps, o = e !== null ? e.memoizedProps : null, a = r.children, lo(s, r) ? a = null : o !== null && lo(s, o) && (t.flags |= 32), lu(e, t), pe(e, t, a, i), t.child; case 6: return e === null && ho(t), null; case 13: return du(e, t, i); case 4: return ha(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = bn(t, null, s, i) : pe(e, t, s, i), t.child; case 11: return s = t.type, r = t.pendingProps, r = t.elementType === s ? r : Re(s, r), Pl(e, t, s, r, i); case 7: return pe(e, t, t.pendingProps, i), t.child; case 8: return pe(e, t, t.pendingProps.children, i), t.child; case 12: return pe(e, t, t.pendingProps.children, i), t.child; case 10: e: { if (s = t.type._context, r = t.pendingProps, o = t.memoizedProps, a = r.value, M(ks, s._currentValue), s._currentValue = a, o !== null) if (Qe(o.value, a)) { if (o.children === r.children && !ve.current) { t = st(e, t, i); break e } } else for (o = t.child, o !== null && (o.return = t); o !== null;) { var l = o.dependencies; if (l !== null) { a = o.child; for (var c = l.firstContext; c !== null;) { if (c.context === s) { if (o.tag === 1) { c = et(-1, i & -i), c.tag = 2; var d = o.updateQueue; if (d !== null) { d = d.shared; var m = d.pending; m === null ? c.next = c : (c.next = m.next, m.next = c), d.pending = c } } o.lanes |= i, c = o.alternate, c !== null && (c.lanes |= i), fo(o.return, i, t), l.lanes |= i; break } c = c.next } } else if (o.tag === 10) a = o.type === t.type ? null : o.child; else if (o.tag === 18) { if (a = o.return, a === null) throw Error(N(341)); a.lanes |= i, l = a.alternate, l !== null && (l.lanes |= i), fo(a, i, t), a = o.sibling } else a = o.child; if (a !== null) a.return = o; else for (a = o; a !== null;) { if (a === t) { a = null; break } if (o = a.sibling, o !== null) { o.return = a.return, a = o; break } a = a.return } o = a } pe(e, t, r.children, i), t = t.child } return t; case 9: return r = t.type, s = t.pendingProps.children, pn(t, i), r = _e(r), s = s(r), t.flags |= 1, pe(e, t, s, i), t.child; case 14: return s = t.type, r = Re(s, t.pendingProps), r = Re(s.type, r), zl(e, t, s, r, i); case 15: return ou(e, t, t.type, t.pendingProps, i); case 17: return s = t.type, r = t.pendingProps, r = t.elementType === s ? r : Re(s, r), ss(e, t), t.tag = 1, be(s) ? (e = !0, ws(t)) : e = !1, pn(t, i), iu(t, s, r), xo(t, s, r, i), bo(null, t, s, !0, e, i); case 19: return uu(e, t, i); case 22: return au(e, t, i) }throw Error(N(156, t.tag)) }; function Tu(e, t) { return ed(e, t) } function Eh(e, t, i, s) { this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null } function Ae(e, t, i, s) { return new Eh(e, t, i, s) } function Da(e) { return e = e.prototype, !(!e || !e.isReactComponent) } function Dh(e) { if (typeof e == "function") return Da(e) ? 1 : 0; if (e != null) { if (e = e.$$typeof, e === Yo) return 11; if (e === Vo) return 14 } return 2 } function wt(e, t) { var i = e.alternate; return i === null ? (i = Ae(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 14680064, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, t = e.dependencies, i.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i } function as(e, t, i, s, r, o) { var a = 2; if (s = e, typeof e == "function") Da(e) && (a = 1); else if (typeof e == "string") a = 5; else e: switch (e) { case Xt: return Ot(i.children, r, o, t); case $o: a = 8, r |= 8; break; case Mr: return e = Ae(12, i, t, r | 2), e.elementType = Mr, e.lanes = o, e; case Hr: return e = Ae(13, i, t, r), e.elementType = Hr, e.lanes = o, e; case Lr: return e = Ae(19, i, t, r), e.elementType = Lr, e.lanes = o, e; case Rc: return Ys(i, r, o, t); default: if (typeof e == "object" && e !== null) switch (e.$$typeof) { case zc: a = 10; break e; case Ic: a = 9; break e; case Yo: a = 11; break e; case Vo: a = 14; break e; case at: a = 16, s = null; break e }throw Error(N(130, e == null ? e : typeof e, "")) }return t = Ae(a, i, t, r), t.elementType = e, t.type = s, t.lanes = o, t } function Ot(e, t, i, s) { return e = Ae(7, e, s, t), e.lanes = i, e } function Ys(e, t, i, s) { return e = Ae(22, e, s, t), e.elementType = Rc, e.lanes = i, e.stateNode = { isHidden: !1 }, e } function Er(e, t, i) { return e = Ae(6, e, null, t), e.lanes = i, e } function Dr(e, t, i) { return t = Ae(4, e.children !== null ? e.children : [], e.key, t), t.lanes = i, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t } function Ch(e, t, i, s, r) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = cr(0), this.expirationTimes = cr(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = cr(0), this.identifierPrefix = s, this.onRecoverableError = r, this.mutableSourceEagerHydrationData = null } function Ca(e, t, i, s, r, o, a, l, c) { return e = new Ch(e, t, i, l, c), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ae(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: s, isDehydrated: i, cache: null, transitions: null, pendingSuspenseBoundaries: null }, pa(o), e } function Ah(e, t, i) { var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: Kt, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: i } } function Eu(e) { if (!e) return kt; e = e._reactInternals; e: { if (Gt(e) !== e || e.tag !== 1) throw Error(N(170)); var t = e; do { switch (t.tag) { case 3: t = t.stateNode.context; break e; case 1: if (be(t.type)) { t = t.stateNode.__reactInternalMemoizedMergedChildContext; break e } }t = t.return } while (t !== null); throw Error(N(171)) } if (e.tag === 1) { var i = e.type; if (be(i)) return Ed(e, i, t) } return t } function Du(e, t, i, s, r, o, a, l, c) { return e = Ca(i, s, !0, e, r, o, a, l, c), e.context = Eu(null), i = e.current, s = he(), r = bt(i), o = et(s, r), o.callback = t ?? null, yt(i, o, r), e.current.lanes = r, Ni(e, r, s), we(e, s), e } function Vs(e, t, i, s) { var r = t.current, o = he(), a = bt(r); return i = Eu(i), t.context === null ? t.context = i : t.pendingContext = i, t = et(o, a), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = yt(r, t, a), e !== null && (Le(e, r, a, o), ts(e, r, a)), a } function Ps(e) { if (e = e.current, !e.child) return null; switch (e.child.tag) { case 5: return e.child.stateNode; default: return e.child.stateNode } } function $l(e, t) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) { var i = e.retryLane; e.retryLane = i !== 0 && i < t ? i : t } } function Aa(e, t) { $l(e, t), (e = e.alternate) && $l(e, t) } function Fh() { return null } var Cu = typeof reportError == "function" ? reportError : function (e) { console.error(e) }; function Fa(e) { this._internalRoot = e } Ks.prototype.render = Fa.prototype.render = function (e) { var t = this._internalRoot; if (t === null) throw Error(N(409)); Vs(e, t, null, null) }; Ks.prototype.unmount = Fa.prototype.unmount = function () { var e = this._internalRoot; if (e !== null) { this._internalRoot = null; var t = e.containerInfo; Ut(function () { Vs(null, e, null, null) }), t[nt] = null } }; function Ks(e) { this._internalRoot = e } Ks.prototype.unstable_scheduleHydration = function (e) { if (e) { var t = ad(); e = { blockedOn: null, target: e, priority: t }; for (var i = 0; i < ct.length && t !== 0 && t < ct[i].priority; i++); ct.splice(i, 0, e), i === 0 && cd(e) } }; function _a(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) } function Xs(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")) } function Yl() { } function _h(e, t, i, s, r) { if (r) { if (typeof s == "function") { var o = s; s = function () { var d = Ps(a); o.call(d) } } var a = Du(t, s, e, 0, null, !1, !1, "", Yl); return e._reactRootContainer = a, e[nt] = a.current, ui(e.nodeType === 8 ? e.parentNode : e), Ut(), a } for (; r = e.lastChild;)e.removeChild(r); if (typeof s == "function") { var l = s; s = function () { var d = Ps(c); l.call(d) } } var c = Ca(e, 0, !1, null, null, !1, !1, "", Yl); return e._reactRootContainer = c, e[nt] = c.current, ui(e.nodeType === 8 ? e.parentNode : e), Ut(function () { Vs(t, c, i, s) }), c } function Js(e, t, i, s, r) { var o = i._reactRootContainer; if (o) { var a = o; if (typeof r == "function") { var l = r; r = function () { var c = Ps(a); l.call(c) } } Vs(t, a, e, r) } else a = _h(i, t, e, r, s); return Ps(a) } rd = function (e) { switch (e.tag) { case 3: var t = e.stateNode; if (t.current.memoizedState.isDehydrated) { var i = Wn(t.pendingLanes); i !== 0 && (Jo(t, i | 1), we(t, X()), !(R & 6) && (Nn = X() + 500, Tt())) } break; case 13: Ut(function () { var s = it(e, 1); if (s !== null) { var r = he(); Le(s, e, 1, r) } }), Aa(e, 1) } }; Zo = function (e) { if (e.tag === 13) { var t = it(e, 134217728); if (t !== null) { var i = he(); Le(t, e, 134217728, i) } Aa(e, 134217728) } }; od = function (e) { if (e.tag === 13) { var t = bt(e), i = it(e, t); if (i !== null) { var s = he(); Le(i, e, t, s) } Aa(e, t) } }; ad = function () { return O }; ld = function (e, t) { var i = O; try { return O = e, t() } finally { O = i } }; Jr = function (e, t, i) { switch (t) { case "input": if (Wr(e, i), t = i.name, i.type === "radio" && t != null) { for (i = e; i.parentNode;)i = i.parentNode; for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < i.length; t++) { var s = i[t]; if (s !== e && s.form === e.form) { var r = Ls(s); if (!r) throw Error(N(90)); Oc(s), Wr(s, r) } } } break; case "textarea": Hc(e, i); break; case "select": t = i.value, t != null && cn(e, !!i.multiple, t, !1) } }; Yc = qa; Vc = Ut; var Ph = { usingClientEntryPoint: !1, Events: [Si, tn, Ls, Gc, $c, qa] }, On = { findFiberByHostInstance: Pt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, zh = { bundleType: On.bundleType, version: On.version, rendererPackageName: On.rendererPackageName, rendererConfig: On.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: rt.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return e = Jc(e), e === null ? null : e.stateNode }, findFiberByHostInstance: On.findFiberByHostInstance || Fh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" }; if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") { var Gi = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!Gi.isDisabled && Gi.supportsFiber) try { Bs = Gi.inject(zh), $e = Gi } catch { } } qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ph; qe.createPortal = function (e, t) { var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!_a(t)) throw Error(N(200)); return Ah(e, t, null, i) }; qe.createRoot = function (e, t) { if (!_a(e)) throw Error(N(299)); var i = !1, s = "", r = Cu; return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (r = t.onRecoverableError)), t = Ca(e, 1, !1, null, null, i, !1, s, r), e[nt] = t.current, ui(e.nodeType === 8 ? e.parentNode : e), new Fa(t) }; qe.findDOMNode = function (e) { if (e == null) return null; if (e.nodeType === 1) return e; var t = e._reactInternals; if (t === void 0) throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","), Error(N(268, e))); return e = Jc(t), e = e === null ? null : e.stateNode, e }; qe.flushSync = function (e) { return Ut(e) }; qe.hydrate = function (e, t, i) { if (!Xs(t)) throw Error(N(200)); return Js(null, e, t, !0, i) }; qe.hydrateRoot = function (e, t, i) { if (!_a(e)) throw Error(N(405)); var s = i != null && i.hydratedSources || null, r = !1, o = "", a = Cu; if (i != null && (i.unstable_strictMode === !0 && (r = !0), i.identifierPrefix !== void 0 && (o = i.identifierPrefix), i.onRecoverableError !== void 0 && (a = i.onRecoverableError)), t = Du(t, null, e, 1, i ?? null, r, !1, o, a), e[nt] = t.current, ui(e), s) for (e = 0; e < s.length; e++)i = s[e], r = i._getVersion, r = r(i._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [i, r] : t.mutableSourceEagerHydrationData.push(i, r); return new Ks(t) }; qe.render = function (e, t, i) { if (!Xs(t)) throw Error(N(200)); return Js(null, e, t, !1, i) }; qe.unmountComponentAtNode = function (e) { if (!Xs(e)) throw Error(N(40)); return e._reactRootContainer ? (Ut(function () { Js(null, null, e, !1, function () { e._reactRootContainer = null, e[nt] = null }) }), !0) : !1 }; qe.unstable_batchedUpdates = qa; qe.unstable_renderSubtreeIntoContainer = function (e, t, i, s) { if (!Xs(i)) throw Error(N(200)); if (e == null || e._reactInternals === void 0) throw Error(N(38)); return Js(e, t, i, !1, s) }; qe.version = "18.3.1-next-f1338f8080-20240426"; function Au() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Au) } catch (e) { console.error(e) } } Au(), Ac.exports = qe; var Ih = Ac.exports, Vl = Ih; Br.createRoot = Vl.createRoot, Br.hydrateRoot = Vl.hydrateRoot; var Rh = typeof Element < "u", Bh = typeof Map == "function", Oh = typeof Set == "function", Mh = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView; function ls(e, t) { if (e === t) return !0; if (e && t && typeof e == "object" && typeof t == "object") { if (e.constructor !== t.constructor) return !1; var i, s, r; if (Array.isArray(e)) { if (i = e.length, i != t.length) return !1; for (s = i; s-- !== 0;)if (!ls(e[s], t[s])) return !1; return !0 } var o; if (Bh && e instanceof Map && t instanceof Map) { if (e.size !== t.size) return !1; for (o = e.entries(); !(s = o.next()).done;)if (!t.has(s.value[0])) return !1; for (o = e.entries(); !(s = o.next()).done;)if (!ls(s.value[1], t.get(s.value[0]))) return !1; return !0 } if (Oh && e instanceof Set && t instanceof Set) { if (e.size !== t.size) return !1; for (o = e.entries(); !(s = o.next()).done;)if (!t.has(s.value[0])) return !1; return !0 } if (Mh && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) { if (i = e.length, i != t.length) return !1; for (s = i; s-- !== 0;)if (e[s] !== t[s]) return !1; return !0 } if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags; if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf(); if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString(); if (r = Object.keys(e), i = r.length, i !== Object.keys(t).length) return !1; for (s = i; s-- !== 0;)if (!Object.prototype.hasOwnProperty.call(t, r[s])) return !1; if (Rh && e instanceof Element) return !1; for (s = i; s-- !== 0;)if (!((r[s] === "_owner" || r[s] === "__v" || r[s] === "__o") && e.$$typeof) && !ls(e[r[s]], t[r[s]])) return !1; return !0 } return e !== e && t !== t } var Hh = function (t, i) { try { return ls(t, i) } catch (s) { if ((s.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1; throw s } }; const Lh = Is(Hh); var Qh = function (e, t, i, s, r, o, a, l) { if (!e) { var c; if (t === void 0) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else { var d = [i, s, r, o, a, l], m = 0; c = new Error(t.replace(/%s/g, function () { return d[m++] })), c.name = "Invariant Violation" } throw c.framesToPop = 1, c } }, Uh = Qh; const Kl = Is(Uh); var Wh = function (t, i, s, r) { var o = s ? s.call(r, t, i) : void 0; if (o !== void 0) return !!o; if (t === i) return !0; if (typeof t != "object" || !t || typeof i != "object" || !i) return !1; var a = Object.keys(t), l = Object.keys(i); if (a.length !== l.length) return !1; for (var c = Object.prototype.hasOwnProperty.bind(i), d = 0; d < a.length; d++) { var m = a[d]; if (!c(m)) return !1; var h = t[m], g = i[m]; if (o = s ? s.call(r, h, g, m) : void 0, o === !1 || o === void 0 && h !== g) return !1 } return !0 }; const Gh = Is(Wh); var Fu = (e => (e.BASE = "base", e.BODY = "body", e.HEAD = "head", e.HTML = "html", e.LINK = "link", e.META = "meta", e.NOSCRIPT = "noscript", e.SCRIPT = "script", e.STYLE = "style", e.TITLE = "title", e.FRAGMENT = "Symbol(react.fragment)", e))(Fu || {}), Cr = { link: { rel: ["amphtml", "canonical", "alternate"] }, script: { type: ["application/ld+json"] }, meta: { charset: "", name: ["generator", "robots", "description"], property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"] } }, Xl = Object.values(Fu), Zs = { accesskey: "accessKey", charset: "charSet", class: "className", contenteditable: "contentEditable", contextmenu: "contextMenu", "http-equiv": "httpEquiv", itemprop: "itemProp", tabindex: "tabIndex" }, _u = Object.entries(Zs).reduce((e, [t, i]) => (e[i] = t, e), {}), Me = "data-rh", fn = { DEFAULT_TITLE: "defaultTitle", DEFER: "defer", ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters", ON_CHANGE_CLIENT_STATE: "onChangeClientState", TITLE_TEMPLATE: "titleTemplate", PRIORITIZE_SEO_TAGS: "prioritizeSeoTags" }, gn = (e, t) => { for (let i = e.length - 1; i >= 0; i -= 1) { const s = e[i]; if (Object.prototype.hasOwnProperty.call(s, t)) return s[t] } return null }, $h = e => { let t = gn(e, "title"); const i = gn(e, fn.TITLE_TEMPLATE); if (Array.isArray(t) && (t = t.join("")), i && t) return i.replace(/%s/g, () => t); const s = gn(e, fn.DEFAULT_TITLE); return t || s || void 0 }, Yh = e => gn(e, fn.ON_CHANGE_CLIENT_STATE) || (() => { }), Ar = (e, t) => t.filter(i => typeof i[e] < "u").map(i => i[e]).reduce((i, s) => ({ ...i, ...s }), {}), Vh = (e, t) => t.filter(i => typeof i.base < "u").map(i => i.base).reverse().reduce((i, s) => { if (!i.length) { const r = Object.keys(s); for (let o = 0; o < r.length; o += 1) { const l = r[o].toLowerCase(); if (e.indexOf(l) !== -1 && s[l]) return i.concat(s) } } return i }, []), Kh = e => console && typeof console.warn == "function" && console.warn(e), Mn = (e, t, i) => { const s = {}; return i.filter(r => Array.isArray(r[e]) ? !0 : (typeof r[e] < "u" && Kh(`Helmet: ${e} should be of type "Array". Instead found type "${typeof r[e]}"`), !1)).map(r => r[e]).reverse().reduce((r, o) => { const a = {}; o.filter(c => { let d; const m = Object.keys(c); for (let g = 0; g < m.length; g += 1) { const x = m[g], w = x.toLowerCase(); t.indexOf(w) !== -1 && !(d === "rel" && c[d].toLowerCase() === "canonical") && !(w === "rel" && c[w].toLowerCase() === "stylesheet") && (d = w), t.indexOf(x) !== -1 && (x === "innerHTML" || x === "cssText" || x === "itemprop") && (d = x) } if (!d || !c[d]) return !1; const h = c[d].toLowerCase(); return s[d] || (s[d] = {}), a[d] || (a[d] = {}), s[d][h] ? !1 : (a[d][h] = !0, !0) }).reverse().forEach(c => r.push(c)); const l = Object.keys(a); for (let c = 0; c < l.length; c += 1) { const d = l[c], m = { ...s[d], ...a[d] }; s[d] = m } return r }, []).reverse() }, Xh = (e, t) => { if (Array.isArray(e) && e.length) { for (let i = 0; i < e.length; i += 1)if (e[i][t]) return !0 } return !1 }, Jh = e => ({ baseTag: Vh(["href"], e), bodyAttributes: Ar("bodyAttributes", e), defer: gn(e, fn.DEFER), encode: gn(e, fn.ENCODE_SPECIAL_CHARACTERS), htmlAttributes: Ar("htmlAttributes", e), linkTags: Mn("link", ["rel", "href"], e), metaTags: Mn("meta", ["name", "charset", "http-equiv", "property", "itemprop"], e), noscriptTags: Mn("noscript", ["innerHTML"], e), onChangeClientState: Yh(e), scriptTags: Mn("script", ["src", "innerHTML"], e), styleTags: Mn("style", ["cssText"], e), title: $h(e), titleAttributes: Ar("titleAttributes", e), prioritizeSeoTags: Xh(e, fn.PRIORITIZE_SEO_TAGS) }), Pu = e => Array.isArray(e) ? e.join("") : e, Zh = (e, t) => { const i = Object.keys(e); for (let s = 0; s < i.length; s += 1)if (t[i[s]] && t[i[s]].includes(e[i[s]])) return !0; return !1 }, Fr = (e, t) => Array.isArray(e) ? e.reduce((i, s) => (Zh(s, t) ? i.priority.push(s) : i.default.push(s), i), { priority: [], default: [] }) : { default: e, priority: [] }, Jl = (e, t) => ({ ...e, [t]: void 0 }), ef = ["noscript", "script", "style"], Fo = (e, t = !0) => t === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;"), zu = e => Object.keys(e).reduce((t, i) => { const s = typeof e[i] < "u" ? `${i}="${e[i]}"` : `${i}`; return t ? `${t} ${s}` : s }, ""), tf = (e, t, i, s) => { const r = zu(i), o = Pu(t); return r ? `<${e} ${Me}="true" ${r}>${Fo(o, s)}</${e}>` : `<${e} ${Me}="true">${Fo(o, s)}</${e}>` }, nf = (e, t, i = !0) => t.reduce((s, r) => { const o = r, a = Object.keys(o).filter(d => !(d === "innerHTML" || d === "cssText")).reduce((d, m) => { const h = typeof o[m] > "u" ? m : `${m}="${Fo(o[m], i)}"`; return d ? `${d} ${h}` : h }, ""), l = o.innerHTML || o.cssText || "", c = ef.indexOf(e) === -1; return `${s}<${e} ${Me}="true" ${a}${c ? "/>" : `>${l}</${e}>`}` }, ""), Iu = (e, t = {}) => Object.keys(e).reduce((i, s) => { const r = Zs[s]; return i[r || s] = e[s], i }, t), sf = (e, t, i) => { const s = { key: t, [Me]: !0 }, r = Iu(i, s); return [z.createElement("title", r, t)] }, cs = (e, t) => t.map((i, s) => { const r = { key: s, [Me]: !0 }; return Object.keys(i).forEach(o => { const l = Zs[o] || o; if (l === "innerHTML" || l === "cssText") { const c = i.innerHTML || i.cssText; r.dangerouslySetInnerHTML = { __html: c } } else r[l] = i[o] }), z.createElement(e, r) }), Ee = (e, t, i = !0) => { switch (e) { case "title": return { toComponent: () => sf(e, t.title, t.titleAttributes), toString: () => tf(e, t.title, t.titleAttributes, i) }; case "bodyAttributes": case "htmlAttributes": return { toComponent: () => Iu(t), toString: () => zu(t) }; default: return { toComponent: () => cs(e, t), toString: () => nf(e, t, i) } } }, rf = ({ metaTags: e, linkTags: t, scriptTags: i, encode: s }) => { const r = Fr(e, Cr.meta), o = Fr(t, Cr.link), a = Fr(i, Cr.script); return { priorityMethods: { toComponent: () => [...cs("meta", r.priority), ...cs("link", o.priority), ...cs("script", a.priority)], toString: () => `${Ee("meta", r.priority, s)} ${Ee("link", o.priority, s)} ${Ee("script", a.priority, s)}` }, metaTags: r.default, linkTags: o.default, scriptTags: a.default } }, of = e => { const { baseTag: t, bodyAttributes: i, encode: s = !0, htmlAttributes: r, noscriptTags: o, styleTags: a, title: l = "", titleAttributes: c, prioritizeSeoTags: d } = e; let { linkTags: m, metaTags: h, scriptTags: g } = e, x = { toComponent: () => [], toString: () => "" }; return d && ({ priorityMethods: x, linkTags: m, metaTags: h, scriptTags: g } = rf(e)), { priority: x, base: Ee("base", t, s), bodyAttributes: Ee("bodyAttributes", i, s), htmlAttributes: Ee("htmlAttributes", r, s), link: Ee("link", m, s), meta: Ee("meta", h, s), noscript: Ee("noscript", o, s), script: Ee("script", g, s), style: Ee("style", a, s), title: Ee("title", { title: l, titleAttributes: c }, s) } }, _o = of, $i = [], Pa = !!(typeof window < "u" && window.document && window.document.createElement), Po = class { constructor(e, t) { Ve(this, "instances", []); Ve(this, "canUseDOM", Pa); Ve(this, "context"); Ve(this, "value", { setHelmet: e => { this.context.helmet = e }, helmetInstances: { get: () => this.canUseDOM ? $i : this.instances, add: e => { (this.canUseDOM ? $i : this.instances).push(e) }, remove: e => { const t = (this.canUseDOM ? $i : this.instances).indexOf(e); (this.canUseDOM ? $i : this.instances).splice(t, 1) } } }); this.context = e, this.canUseDOM = t || !1, t || (e.helmet = _o({ baseTag: [], bodyAttributes: {}, htmlAttributes: {}, linkTags: [], metaTags: [], noscriptTags: [], scriptTags: [], styleTags: [], title: "", titleAttributes: {} })) } }, af = parseInt(z.version.split(".")[0], 10), zo = af >= 19, lf = {}, Ru = z.createContext(lf), Rt, Bu = (Rt = class extends b.Component { constructor(i) { super(i); Ve(this, "helmetData"); zo ? this.helmetData = null : this.helmetData = new Po(this.props.context || {}, Rt.canUseDOM) } render() { return zo ? z.createElement(z.Fragment, null, this.props.children) : z.createElement(Ru.Provider, { value: this.helmetData.value }, this.props.children) } }, Ve(Rt, "canUseDOM", Pa), Rt), Vt = (e, t) => { const i = document.head || document.querySelector("head"), s = i.querySelectorAll(`${e}[${Me}]`), r = [].slice.call(s), o = []; let a; return t && t.length && t.forEach(l => { const c = document.createElement(e); for (const d in l) if (Object.prototype.hasOwnProperty.call(l, d)) if (d === "innerHTML") c.innerHTML = l.innerHTML; else if (d === "cssText") { const m = l.cssText; c.appendChild(document.createTextNode(m)) } else { const m = d, h = typeof l[m] > "u" ? "" : l[m]; c.setAttribute(d, h) } c.setAttribute(Me, "true"), r.some((d, m) => (a = m, c.isEqualNode(d))) ? r.splice(a, 1) : o.push(c) }), r.forEach(l => { var c; return (c = l.parentNode) == null ? void 0 : c.removeChild(l) }), o.forEach(l => i.appendChild(l)), { oldTags: r, newTags: o } }, Io = (e, t) => { const i = document.getElementsByTagName(e)[0]; if (!i) return; const s = i.getAttribute(Me), r = s ? s.split(",") : [], o = [...r], a = Object.keys(t); for (const l of a) { const c = t[l] || ""; i.getAttribute(l) !== c && i.setAttribute(l, c), r.indexOf(l) === -1 && r.push(l); const d = o.indexOf(l); d !== -1 && o.splice(d, 1) } for (let l = o.length - 1; l >= 0; l -= 1)i.removeAttribute(o[l]); r.length === o.length ? i.removeAttribute(Me) : i.getAttribute(Me) !== a.join(",") && i.setAttribute(Me, a.join(",")) }, cf = (e, t) => { typeof e < "u" && document.title !== e && (document.title = Pu(e)), Io("title", t) }, Zl = (e, t) => { const { baseTag: i, bodyAttributes: s, htmlAttributes: r, linkTags: o, metaTags: a, noscriptTags: l, onChangeClientState: c, scriptTags: d, styleTags: m, title: h, titleAttributes: g } = e; Io("body", s), Io("html", r), cf(h, g); const x = { baseTag: Vt("base", i), linkTags: Vt("link", o), metaTags: Vt("meta", a), noscriptTags: Vt("noscript", l), scriptTags: Vt("script", d), styleTags: Vt("style", m) }, w = {}, v = {}; Object.keys(x).forEach(S => { const { newTags: f, oldTags: u } = x[S]; f.length && (w[S] = f), u.length && (v[S] = x[S].oldTags) }), t && t(), c(e, w, v) }, Hn = null, df = e => { Hn && cancelAnimationFrame(Hn), e.defer ? Hn = requestAnimationFrame(() => { Zl(e, () => { Hn = null }) }) : (Zl(e), Hn = null) }, uf = df, ec = class extends b.Component { constructor() { super(...arguments); Ve(this, "rendered", !1) } shouldComponentUpdate(t) { return !Gh(t, this.props) } componentDidUpdate() { this.emitChange() } componentWillUnmount() { const { helmetInstances: t } = this.props.context; t.remove(this), this.emitChange() } emitChange() { const { helmetInstances: t, setHelmet: i } = this.props.context; let s = null; const r = Jh(t.get().map(o => { const { context: a, ...l } = o.props; return l })); Bu.canUseDOM ? uf(r) : _o && (s = _o(r)), i(s) } init() { if (this.rendered) return; this.rendered = !0; const { helmetInstances: t } = this.props.context; t.add(this), this.emitChange() } render() { return this.init(), null } }, ds = [], tc = e => { const t = {}; for (const i of Object.keys(e)) t[_u[i] || i] = e[i]; return t }, At = e => { const t = {}; for (const i of Object.keys(e)) { const s = Zs[i]; t[s || i] = e[i] } return t }, nc = (e, t) => { if (!Pa) return; const i = document.getElementsByTagName(e)[0]; if (!i) return; const s = "data-rh-managed", r = i.getAttribute(s), o = r ? r.split(",") : [], a = Object.keys(t); for (const l of o) a.includes(l) || i.removeAttribute(l); for (const l of a) { const c = t[l]; c == null || c === !1 ? i.removeAttribute(l) : c === !0 ? i.setAttribute(l, "") : i.setAttribute(l, String(c)) } a.length > 0 ? i.setAttribute(s, a.join(",")) : i.removeAttribute(s) }, _r = () => { const e = {}, t = {}; for (const i of ds) { const { htmlAttributes: s, bodyAttributes: r } = i.props; s && Object.assign(e, tc(s)), r && Object.assign(t, tc(r)) } nc("html", e), nc("body", t) }, mf = class extends b.Component { componentDidMount() { ds.push(this), _r() } componentDidUpdate() { _r() } componentWillUnmount() { const e = ds.indexOf(this); e !== -1 && ds.splice(e, 1), _r() } resolveTitle() { const { title: e, titleTemplate: t, defaultTitle: i } = this.props; return e && t ? t.replace(/%s/g, () => Array.isArray(e) ? e.join("") : e) : e || i || void 0 } renderTitle() { const e = this.resolveTitle(); if (e === void 0) return null; const t = this.props.titleAttributes || {}; return z.createElement("title", At(t), e) } renderBase() { const { base: e } = this.props; return e ? z.createElement("base", At(e)) : null } renderMeta() { const { meta: e } = this.props; return !e || !Array.isArray(e) ? null : e.map((t, i) => z.createElement("meta", { key: i, ...At(t) })) } renderLink() { const { link: e } = this.props; return !e || !Array.isArray(e) ? null : e.map((t, i) => z.createElement("link", { key: i, ...At(t) })) } renderScript() { const { script: e } = this.props; return !e || !Array.isArray(e) ? null : e.map((t, i) => { const { innerHTML: s, ...r } = t, o = At(r); return s && (o.dangerouslySetInnerHTML = { __html: s }), z.createElement("script", { key: i, ...o }) }) } renderStyle() { const { style: e } = this.props; return !e || !Array.isArray(e) ? null : e.map((t, i) => { const { cssText: s, ...r } = t, o = At(r); return s && (o.dangerouslySetInnerHTML = { __html: s }), z.createElement("style", { key: i, ...o }) }) } renderNoscript() { const { noscript: e } = this.props; return !e || !Array.isArray(e) ? null : e.map((t, i) => { const { innerHTML: s, ...r } = t, o = At(r); return s && (o.dangerouslySetInnerHTML = { __html: s }), z.createElement("noscript", { key: i, ...o }) }) } render() { return z.createElement(z.Fragment, null, this.renderTitle(), this.renderBase(), this.renderMeta(), this.renderLink(), this.renderScript(), this.renderStyle(), this.renderNoscript()) } }, Rr, pf = (Rr = class extends b.Component { shouldComponentUpdate(e) { return !Lh(Jl(this.props, "helmetData"), Jl(e, "helmetData")) } mapNestedChildrenToProps(e, t) { if (!t) return null; switch (e.type) { case "script": case "noscript": return { innerHTML: t }; case "style": return { cssText: t }; default: throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`) } } flattenArrayTypeChildren(e, t, i, s) { return { ...t, [e.type]: [...t[e.type] || [], { ...i, ...this.mapNestedChildrenToProps(e, s) }] } } mapObjectTypeChildren(e, t, i, s) { switch (e.type) { case "title": return { ...t, [e.type]: s, titleAttributes: { ...i } }; case "body": return { ...t, bodyAttributes: { ...i } }; case "html": return { ...t, htmlAttributes: { ...i } }; default: return { ...t, [e.type]: { ...i } } } } mapArrayTypeChildrenToProps(e, t) { let i = { ...t }; return Object.keys(e).forEach(s => { i = { ...i, [s]: e[s] } }), i } warnOnInvalidChildren(e, t) { return Kl(Xl.some(i => e.type === i), typeof e.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : `Only elements types ${Xl.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`), Kl(!t || typeof t == "string" || Array.isArray(t) && !t.some(i => typeof i != "string"), `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`), !0 } mapChildrenToProps(e, t) { let i = {}; return z.Children.forEach(e, s => { if (!s || !s.props) return; const { children: r, ...o } = s.props, a = Object.keys(o).reduce((c, d) => (c[_u[d] || d] = o[d], c), {}); let { type: l } = s; switch (typeof l == "symbol" ? l = l.toString() : this.warnOnInvalidChildren(s, r), l) { case "Symbol(react.fragment)": t = this.mapChildrenToProps(r, t); break; case "link": case "meta": case "noscript": case "script": case "style": i = this.flattenArrayTypeChildren(s, i, a, r); break; default: t = this.mapObjectTypeChildren(s, t, a, r); break } }), this.mapArrayTypeChildrenToProps(i, t) } render() { const { children: e, ...t } = this.props; let i = { ...t }, { helmetData: s } = t; if (e && (i = this.mapChildrenToProps(e, i)), s && !(s instanceof Po)) { const r = s; s = new Po(r.context, !0), delete i.helmetData } return zo ? z.createElement(mf, { ...i }) : s ? z.createElement(ec, { ...i, context: s.value }) : z.createElement(Ru.Consumer, null, r => z.createElement(ec, { ...i, context: r })) } }, Ve(Rr, "defaultProps", { defer: !0, encodeSpecialCharacters: !0, prioritizeSeoTags: !1 }), Rr);/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bi() { return bi = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) { var i = arguments[t]; for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]) } return e }, bi.apply(this, arguments) } var pt; (function (e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE" })(pt || (pt = {})); const ic = "popstate"; function hf(e) { e === void 0 && (e = {}); function t(s, r) { let { pathname: o, search: a, hash: l } = s.location; return Ro("", { pathname: o, search: a, hash: l }, r.state && r.state.usr || null, r.state && r.state.key || "default") } function i(s, r) { return typeof r == "string" ? r : zs(r) } return gf(t, i, null, e) } function ee(e, t) { if (e === !1 || e === null || typeof e > "u") throw new Error(t) } function za(e, t) { if (!e) { typeof console < "u" && console.warn(t); try { throw new Error(t) } catch { } } } function ff() { return Math.random().toString(36).substr(2, 8) } function sc(e, t) { return { usr: e.state, key: e.key, idx: t } } function Ro(e, t, i, s) { return i === void 0 && (i = null), bi({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? Tn(t) : t, { state: i, key: t && t.key || s || ff() }) } function zs(e) { let { pathname: t = "/", search: i = "", hash: s = "" } = e; return i && i !== "?" && (t += i.charAt(0) === "?" ? i : "?" + i), s && s !== "#" && (t += s.charAt(0) === "#" ? s : "#" + s), t } function Tn(e) { let t = {}; if (e) { let i = e.indexOf("#"); i >= 0 && (t.hash = e.substr(i), e = e.substr(0, i)); let s = e.indexOf("?"); s >= 0 && (t.search = e.substr(s), e = e.substr(0, s)), e && (t.pathname = e) } return t } function gf(e, t, i, s) { s === void 0 && (s = {}); let { window: r = document.defaultView, v5Compat: o = !1 } = s, a = r.history, l = pt.Pop, c = null, d = m(); d == null && (d = 0, a.replaceState(bi({}, a.state, { idx: d }), "")); function m() { return (a.state || { idx: null }).idx } function h() { l = pt.Pop; let S = m(), f = S == null ? null : S - d; d = S, c && c({ action: l, location: v.location, delta: f }) } function g(S, f) { l = pt.Push; let u = Ro(v.location, S, f); d = m() + 1; let p = sc(u, d), y = v.createHref(u); try { a.pushState(p, "", y) } catch (k) { if (k instanceof DOMException && k.name === "DataCloneError") throw k; r.location.assign(y) } o && c && c({ action: l, location: v.location, delta: 1 }) } function x(S, f) { l = pt.Replace; let u = Ro(v.location, S, f); d = m(); let p = sc(u, d), y = v.createHref(u); a.replaceState(p, "", y), o && c && c({ action: l, location: v.location, delta: 0 }) } function w(S) { let f = r.location.origin !== "null" ? r.location.origin : r.location.href, u = typeof S == "string" ? S : zs(S); return u = u.replace(/ $/, "%20"), ee(f, "No window.location.(origin|href) available to create URL for href: " + u), new URL(u, f) } let v = { get action() { return l }, get location() { return e(r, a) }, listen(S) { if (c) throw new Error("A history only accepts one active listener"); return r.addEventListener(ic, h), c = S, () => { r.removeEventListener(ic, h), c = null } }, createHref(S) { return t(r, S) }, createURL: w, encodeLocation(S) { let f = w(S); return { pathname: f.pathname, search: f.search, hash: f.hash } }, push: g, replace: x, go(S) { return a.go(S) } }; return v } var rc; (function (e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error" })(rc || (rc = {})); function xf(e, t, i) { return i === void 0 && (i = "/"), yf(e, t, i) } function yf(e, t, i, s) { let r = typeof t == "string" ? Tn(t) : t, o = Ia(r.pathname || "/", i); if (o == null) return null; let a = Ou(e); vf(a); let l = null; for (let c = 0; l == null && c < a.length; ++c) { let d = Af(o); l = Ef(a[c], d) } return l } function Ou(e, t, i, s) { t === void 0 && (t = []), i === void 0 && (i = []), s === void 0 && (s = ""); let r = (o, a, l) => { let c = { relativePath: l === void 0 ? o.path || "" : l, caseSensitive: o.caseSensitive === !0, childrenIndex: a, route: o }; c.relativePath.startsWith("/") && (ee(c.relativePath.startsWith(s), 'Absolute route path "' + c.relativePath + '" nested under path ' + ('"' + s + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), c.relativePath = c.relativePath.slice(s.length)); let d = jt([s, c.relativePath]), m = i.concat(c); o.children && o.children.length > 0 && (ee(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + d + '".')), Ou(o.children, t, m, d)), !(o.path == null && !o.index) && t.push({ path: d, score: qf(d, o.index), routesMeta: m }) }; return e.forEach((o, a) => { var l; if (o.path === "" || !((l = o.path) != null && l.includes("?"))) r(o, a); else for (let c of Mu(o.path)) r(o, a, c) }), t } function Mu(e) { let t = e.split("/"); if (t.length === 0) return []; let [i, ...s] = t, r = i.endsWith("?"), o = i.replace(/\?$/, ""); if (s.length === 0) return r ? [o, ""] : [o]; let a = Mu(s.join("/")), l = []; return l.push(...a.map(c => c === "" ? o : [o, c].join("/"))), r && l.push(...a), l.map(c => e.startsWith("/") && c === "" ? "/" : c) } function vf(e) { e.sort((t, i) => t.score !== i.score ? i.score - t.score : Tf(t.routesMeta.map(s => s.childrenIndex), i.routesMeta.map(s => s.childrenIndex))) } const bf = /^:[\w-]+$/, wf = 3, jf = 2, Nf = 1, kf = 10, Sf = -2, oc = e => e === "*"; function qf(e, t) { let i = e.split("/"), s = i.length; return i.some(oc) && (s += Sf), t && (s += jf), i.filter(r => !oc(r)).reduce((r, o) => r + (bf.test(o) ? wf : o === "" ? Nf : kf), s) } function Tf(e, t) { return e.length === t.length && e.slice(0, -1).every((s, r) => s === t[r]) ? e[e.length - 1] - t[t.length - 1] : 0 } function Ef(e, t, i) { let { routesMeta: s } = e, r = {}, o = "/", a = []; for (let l = 0; l < s.length; ++l) { let c = s[l], d = l === s.length - 1, m = o === "/" ? t : t.slice(o.length) || "/", h = Df({ path: c.relativePath, caseSensitive: c.caseSensitive, end: d }, m), g = c.route; if (!h) return null; Object.assign(r, h.params), a.push({ params: r, pathname: jt([o, h.pathname]), pathnameBase: If(jt([o, h.pathnameBase])), route: g }), h.pathnameBase !== "/" && (o = jt([o, h.pathnameBase])) } return a } function Df(e, t) { typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 }); let [i, s] = Cf(e.path, e.caseSensitive, e.end), r = t.match(i); if (!r) return null; let o = r[0], a = o.replace(/(.)\/+$/, "$1"), l = r.slice(1); return { params: s.reduce((d, m, h) => { let { paramName: g, isOptional: x } = m; if (g === "*") { let v = l[h] || ""; a = o.slice(0, o.length - v.length).replace(/(.)\/+$/, "$1") } const w = l[h]; return x && !w ? d[g] = void 0 : d[g] = (w || "").replace(/%2F/g, "/"), d }, {}), pathname: o, pathnameBase: a, pattern: e } } function Cf(e, t, i) { t === void 0 && (t = !1), i === void 0 && (i = !0), za(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')); let s = [], r = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (a, l, c) => (s.push({ paramName: l, isOptional: c != null }), c ? "/?([^\\/]+)?" : "/([^\\/]+)")); return e.endsWith("*") ? (s.push({ paramName: "*" }), r += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? r += "\\/*$" : e !== "" && e !== "/" && (r += "(?:(?=\\/|$))"), [new RegExp(r, t ? void 0 : "i"), s] } function Af(e) { try { return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/") } catch (t) { return za(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e } } function Ia(e, t) { if (t === "/") return e; if (!e.toLowerCase().startsWith(t.toLowerCase())) return null; let i = t.endsWith("/") ? t.length - 1 : t.length, s = e.charAt(i); return s && s !== "/" ? null : e.slice(i) || "/" } const Ff = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, _f = e => Ff.test(e); function Pf(e, t) { t === void 0 && (t = "/"); let { pathname: i, search: s = "", hash: r = "" } = typeof e == "string" ? Tn(e) : e, o; if (i) if (_f(i)) o = i; else { if (i.includes("//")) { let a = i; i = i.replace(/\/\/+/g, "/"), za(!1, "Pathnames cannot have embedded double slashes - normalizing " + (a + " -> " + i)) } i.startsWith("/") ? o = ac(i.substring(1), "/") : o = ac(i, t) } else o = t; return { pathname: o, search: Rf(s), hash: Bf(r) } } function ac(e, t) { let i = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach(r => { r === ".." ? i.length > 1 && i.pop() : r !== "." && i.push(r) }), i.length > 1 ? i.join("/") : "/" } function Pr(e, t, i, s) { return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(s) + "].  Please separate it out to the ") + ("`to." + i + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.' } function zf(e) { return e.filter((t, i) => i === 0 || t.route.path && t.route.path.length > 0) } function Hu(e, t) { let i = zf(e); return t ? i.map((s, r) => r === i.length - 1 ? s.pathname : s.pathnameBase) : i.map(s => s.pathnameBase) } function Lu(e, t, i, s) { s === void 0 && (s = !1); let r; typeof e == "string" ? r = Tn(e) : (r = bi({}, e), ee(!r.pathname || !r.pathname.includes("?"), Pr("?", "pathname", "search", r)), ee(!r.pathname || !r.pathname.includes("#"), Pr("#", "pathname", "hash", r)), ee(!r.search || !r.search.includes("#"), Pr("#", "search", "hash", r))); let o = e === "" || r.pathname === "", a = o ? "/" : r.pathname, l; if (a == null) l = i; else { let h = t.length - 1; if (!s && a.startsWith("..")) { let g = a.split("/"); for (; g[0] === "..";)g.shift(), h -= 1; r.pathname = g.join("/") } l = h >= 0 ? t[h] : "/" } let c = Pf(r, l), d = a && a !== "/" && a.endsWith("/"), m = (o || a === ".") && i.endsWith("/"); return !c.pathname.endsWith("/") && (d || m) && (c.pathname += "/"), c } const jt = e => e.join("/").replace(/\/\/+/g, "/"), If = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Rf = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Bf = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e; function Of(e) { return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e } const Qu = ["post", "put", "patch", "delete"]; new Set(Qu); const Mf = ["get", ...Qu]; new Set(Mf);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wi() { return wi = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) { var i = arguments[t]; for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]) } return e }, wi.apply(this, arguments) } const Ra = b.createContext(null), Hf = b.createContext(null), $t = b.createContext(null), er = b.createContext(null), Et = b.createContext({ outlet: null, matches: [], isDataRoute: !1 }), Uu = b.createContext(null); function Lf(e, t) { let { relative: i } = t === void 0 ? {} : t; Ti() || ee(!1); let { basename: s, navigator: r } = b.useContext($t), { hash: o, pathname: a, search: l } = Gu(e, { relative: i }), c = a; return s !== "/" && (c = a === "/" ? s : jt([s, a])), r.createHref({ pathname: c, search: l, hash: o }) } function Ti() { return b.useContext(er) != null } function En() { return Ti() || ee(!1), b.useContext(er).location } function Wu(e) { b.useContext($t).static || b.useLayoutEffect(e) } function Qf() { let { isDataRoute: e } = b.useContext(Et); return e ? sg() : Uf() } function Uf() { Ti() || ee(!1); let e = b.useContext(Ra), { basename: t, future: i, navigator: s } = b.useContext($t), { matches: r } = b.useContext(Et), { pathname: o } = En(), a = JSON.stringify(Hu(r, i.v7_relativeSplatPath)), l = b.useRef(!1); return Wu(() => { l.current = !0 }), b.useCallback(function (d, m) { if (m === void 0 && (m = {}), !l.current) return; if (typeof d == "number") { s.go(d); return } let h = Lu(d, JSON.parse(a), o, m.relative === "path"); e == null && t !== "/" && (h.pathname = h.pathname === "/" ? t : jt([t, h.pathname])), (m.replace ? s.replace : s.push)(h, m.state, m) }, [t, s, a, o, e]) } const Wf = b.createContext(null); function Gf(e) { let t = b.useContext(Et).outlet; return t && b.createElement(Wf.Provider, { value: e }, t) } function Gu(e, t) { let { relative: i } = t === void 0 ? {} : t, { future: s } = b.useContext($t), { matches: r } = b.useContext(Et), { pathname: o } = En(), a = JSON.stringify(Hu(r, s.v7_relativeSplatPath)); return b.useMemo(() => Lu(e, JSON.parse(a), o, i === "path"), [e, a, o, i]) } function $f(e, t) { return Yf(e, t) } function Yf(e, t, i, s) { Ti() || ee(!1); let { navigator: r } = b.useContext($t), { matches: o } = b.useContext(Et), a = o[o.length - 1], l = a ? a.params : {}; a && a.pathname; let c = a ? a.pathnameBase : "/"; a && a.route; let d = En(), m; if (t) { var h; let S = typeof t == "string" ? Tn(t) : t; c === "/" || (h = S.pathname) != null && h.startsWith(c) || ee(!1), m = S } else m = d; let g = m.pathname || "/", x = g; if (c !== "/") { let S = c.replace(/^\//, "").split("/"); x = "/" + g.replace(/^\//, "").split("/").slice(S.length).join("/") } let w = xf(e, { pathname: x }), v = Zf(w && w.map(S => Object.assign({}, S, { params: Object.assign({}, l, S.params), pathname: jt([c, r.encodeLocation ? r.encodeLocation(S.pathname).pathname : S.pathname]), pathnameBase: S.pathnameBase === "/" ? c : jt([c, r.encodeLocation ? r.encodeLocation(S.pathnameBase).pathname : S.pathnameBase]) })), o, i, s); return t && v ? b.createElement(er.Provider, { value: { location: wi({ pathname: "/", search: "", hash: "", state: null, key: "default" }, m), navigationType: pt.Pop } }, v) : v } function Vf() { let e = ig(), t = Of(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), i = e instanceof Error ? e.stack : null, r = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" }; return b.createElement(b.Fragment, null, b.createElement("h2", null, "Unexpected Application Error!"), b.createElement("h3", { style: { fontStyle: "italic" } }, t), i ? b.createElement("pre", { style: r }, i) : null, null) } const Kf = b.createElement(Vf, null); class Xf extends b.Component { constructor(t) { super(t), this.state = { location: t.location, revalidation: t.revalidation, error: t.error } } static getDerivedStateFromError(t) { return { error: t } } static getDerivedStateFromProps(t, i) { return i.location !== t.location || i.revalidation !== "idle" && t.revalidation === "idle" ? { error: t.error, location: t.location, revalidation: t.revalidation } : { error: t.error !== void 0 ? t.error : i.error, location: i.location, revalidation: t.revalidation || i.revalidation } } componentDidCatch(t, i) { console.error("React Router caught the following error during render", t, i) } render() { return this.state.error !== void 0 ? b.createElement(Et.Provider, { value: this.props.routeContext }, b.createElement(Uu.Provider, { value: this.state.error, children: this.props.component })) : this.props.children } } function Jf(e) { let { routeContext: t, match: i, children: s } = e, r = b.useContext(Ra); return r && r.static && r.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = i.route.id), b.createElement(Et.Provider, { value: t }, s) } function Zf(e, t, i, s) { var r; if (t === void 0 && (t = []), i === void 0 && (i = null), s === void 0 && (s = null), e == null) { var o; if (!i) return null; if (i.errors) e = i.matches; else if ((o = s) != null && o.v7_partialHydration && t.length === 0 && !i.initialized && i.matches.length > 0) e = i.matches; else return null } let a = e, l = (r = i) == null ? void 0 : r.errors; if (l != null) { let m = a.findIndex(h => h.route.id && (l == null ? void 0 : l[h.route.id]) !== void 0); m >= 0 || ee(!1), a = a.slice(0, Math.min(a.length, m + 1)) } let c = !1, d = -1; if (i && s && s.v7_partialHydration) for (let m = 0; m < a.length; m++) { let h = a[m]; if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (d = m), h.route.id) { let { loaderData: g, errors: x } = i, w = h.route.loader && g[h.route.id] === void 0 && (!x || x[h.route.id] === void 0); if (h.route.lazy || w) { c = !0, d >= 0 ? a = a.slice(0, d + 1) : a = [a[0]]; break } } } return a.reduceRight((m, h, g) => { let x, w = !1, v = null, S = null; i && (x = l && h.route.id ? l[h.route.id] : void 0, v = h.route.errorElement || Kf, c && (d < 0 && g === 0 ? (rg("route-fallback"), w = !0, S = null) : d === g && (w = !0, S = h.route.hydrateFallbackElement || null))); let f = t.concat(a.slice(0, g + 1)), u = () => { let p; return x ? p = v : w ? p = S : h.route.Component ? p = b.createElement(h.route.Component, null) : h.route.element ? p = h.route.element : p = m, b.createElement(Jf, { match: h, routeContext: { outlet: m, matches: f, isDataRoute: i != null }, children: p }) }; return i && (h.route.ErrorBoundary || h.route.errorElement || g === 0) ? b.createElement(Xf, { location: i.location, revalidation: i.revalidation, component: v, error: x, children: u(), routeContext: { outlet: null, matches: f, isDataRoute: !0 } }) : u() }, null) } var $u = function (e) { return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e }($u || {}), Yu = function (e) { return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e }(Yu || {}); function eg(e) { let t = b.useContext(Ra); return t || ee(!1), t } function tg(e) { let t = b.useContext(Hf); return t || ee(!1), t } function ng(e) { let t = b.useContext(Et); return t || ee(!1), t } function Vu(e) { let t = ng(), i = t.matches[t.matches.length - 1]; return i.route.id || ee(!1), i.route.id } function ig() { var e; let t = b.useContext(Uu), i = tg(), s = Vu(); return t !== void 0 ? t : (e = i.errors) == null ? void 0 : e[s] } function sg() { let { router: e } = eg($u.UseNavigateStable), t = Vu(Yu.UseNavigateStable), i = b.useRef(!1); return Wu(() => { i.current = !0 }), b.useCallback(function (r, o) { o === void 0 && (o = {}), i.current && (typeof r == "number" ? e.navigate(r) : e.navigate(r, wi({ fromRouteId: t }, o))) }, [e, t]) } const lc = {}; function rg(e, t, i) { lc[e] || (lc[e] = !0) } function og(e, t) { e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath } function ag(e) { return Gf(e.context) } function B(e) { ee(!1) } function lg(e) { let { basename: t = "/", children: i = null, location: s, navigationType: r = pt.Pop, navigator: o, static: a = !1, future: l } = e; Ti() && ee(!1); let c = t.replace(/^\/*/, "/"), d = b.useMemo(() => ({ basename: c, navigator: o, static: a, future: wi({ v7_relativeSplatPath: !1 }, l) }), [c, l, o, a]); typeof s == "string" && (s = Tn(s)); let { pathname: m = "/", search: h = "", hash: g = "", state: x = null, key: w = "default" } = s, v = b.useMemo(() => { let S = Ia(m, c); return S == null ? null : { location: { pathname: S, search: h, hash: g, state: x, key: w }, navigationType: r } }, [c, m, h, g, x, w, r]); return v == null ? null : b.createElement($t.Provider, { value: d }, b.createElement(er.Provider, { children: i, value: v })) } function cg(e) { let { children: t, location: i } = e; return $f(Bo(t), i) } new Promise(() => { }); function Bo(e, t) { t === void 0 && (t = []); let i = []; return b.Children.forEach(e, (s, r) => { if (!b.isValidElement(s)) return; let o = [...t, r]; if (s.type === b.Fragment) { i.push.apply(i, Bo(s.props.children, o)); return } s.type !== B && ee(!1), !s.props.index || !s.props.children || ee(!1); let a = { id: s.props.id || o.join("-"), caseSensitive: s.props.caseSensitive, element: s.props.element, Component: s.props.Component, index: s.props.index, path: s.props.path, loader: s.props.loader, action: s.props.action, errorElement: s.props.errorElement, ErrorBoundary: s.props.ErrorBoundary, hasErrorBoundary: s.props.ErrorBoundary != null || s.props.errorElement != null, shouldRevalidate: s.props.shouldRevalidate, handle: s.props.handle, lazy: s.props.lazy }; s.props.children && (a.children = Bo(s.props.children, o)), i.push(a) }), i }/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oo() { return Oo = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) { var i = arguments[t]; for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]) } return e }, Oo.apply(this, arguments) } function dg(e, t) { if (e == null) return {}; var i = {}, s = Object.keys(e), r, o; for (o = 0; o < s.length; o++)r = s[o], !(t.indexOf(r) >= 0) && (i[r] = e[r]); return i } function ug(e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) } function mg(e, t) { return e.button === 0 && (!t || t === "_self") && !ug(e) } const pg = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], hg = "6"; try { window.__reactRouterVersion = hg } catch { } const fg = "startTransition", cc = Sm[fg]; function gg(e) { let { basename: t, children: i, future: s, window: r } = e, o = b.useRef(); o.current == null && (o.current = hf({ window: r, v5Compat: !0 })); let a = o.current, [l, c] = b.useState({ action: a.action, location: a.location }), { v7_startTransition: d } = s || {}, m = b.useCallback(h => { d && cc ? cc(() => c(h)) : c(h) }, [c, d]); return b.useLayoutEffect(() => a.listen(m), [a, m]), b.useEffect(() => og(s), [s]), b.createElement(lg, { basename: t, children: i, location: l.location, navigationType: l.action, navigator: a, future: s }) } const xg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", yg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, j = b.forwardRef(function (t, i) { let { onClick: s, relative: r, reloadDocument: o, replace: a, state: l, target: c, to: d, preventScrollReset: m, viewTransition: h } = t, g = dg(t, pg), { basename: x } = b.useContext($t), w, v = !1; if (typeof d == "string" && yg.test(d) && (w = d, xg)) try { let p = new URL(window.location.href), y = d.startsWith("//") ? new URL(p.protocol + d) : new URL(d), k = Ia(y.pathname, x); y.origin === p.origin && k != null ? d = k + y.search + y.hash : v = !0 } catch { } let S = Lf(d, { relative: r }), f = vg(d, { replace: a, state: l, target: c, preventScrollReset: m, relative: r, viewTransition: h }); function u(p) { s && s(p), p.defaultPrevented || f(p) } return b.createElement("a", Oo({}, g, { href: w || S, onClick: v || o ? s : u, ref: i, target: c })) }); var dc; (function (e) { e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState" })(dc || (dc = {})); var uc; (function (e) { e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration" })(uc || (uc = {})); function vg(e, t) { let { target: i, replace: s, state: r, preventScrollReset: o, relative: a, viewTransition: l } = t === void 0 ? {} : t, c = Qf(), d = En(), m = Gu(e, { relative: a }); return b.useCallback(h => { if (mg(h, i)) { h.preventDefault(); let g = s !== void 0 ? s : zs(d) === zs(m); c(e, { replace: g, state: r, preventScrollReset: o, relative: a, viewTransition: l }) } }, [d, c, m, s, r, i, e, o, a, l]) } const bg = () => { const { pathname: e } = En(); return b.useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }) }, [e]), null };/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wg = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), I = (e, t) => { const i = b.forwardRef(({ color: s = "currentColor", size: r = 24, strokeWidth: o = 2, absoluteStrokeWidth: a, className: l = "", children: c, ...d }, m) => b.createElement("svg", { ref: m, ...wg, width: r, height: r, stroke: s, strokeWidth: a ? Number(o) * 24 / Number(r) : o, className: ["lucide", `lucide-${jg(e)}`, l].join(" "), ...d }, [...t.map(([h, g]) => b.createElement(h, g)), ...Array.isArray(c) ? c : [c]])); return i.displayName = `${e}`, i };/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng = I("Activity", [["path", { d: "M22 12h-4l-3 9L9 3l-3 9H2", key: "d5dnw9" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc = I("ArrowLeft", [["path", { d: "m12 19-7-7 7-7", key: "1l729n" }], ["path", { d: "M19 12H5", key: "x3x0zl" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni = I("ArrowRight", [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg = I("Briefcase", [["rect", { width: "20", height: "14", x: "2", y: "7", rx: "2", ry: "2", key: "eto64e" }], ["path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "zwj3tp" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg = I("Building", [["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }], ["path", { d: "M9 22v-4h6v4", key: "r93iot" }], ["path", { d: "M8 6h.01", key: "1dz90k" }], ["path", { d: "M16 6h.01", key: "1x0f13" }], ["path", { d: "M12 6h.01", key: "1vi96p" }], ["path", { d: "M12 10h.01", key: "1nrarc" }], ["path", { d: "M12 14h.01", key: "1etili" }], ["path", { d: "M16 10h.01", key: "1m94wz" }], ["path", { d: "M16 14h.01", key: "1gbofw" }], ["path", { d: "M8 10h.01", key: "19clt8" }], ["path", { d: "M8 14h.01", key: "6423bh" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg = I("Calendar", [["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }], ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }], ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }], ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg = I("CheckCircle", [["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln = I("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg = I("Clock", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg = I("Construction", [["rect", { x: "2", y: "6", width: "20", height: "8", rx: "1", key: "1estib" }], ["path", { d: "M17 14v7", key: "7m2elx" }], ["path", { d: "M7 14v7", key: "1cm7wv" }], ["path", { d: "M17 3v3", key: "1v4jwn" }], ["path", { d: "M7 3v3", key: "7o6guu" }], ["path", { d: "M10 14 2.3 6.3", key: "1023jk" }], ["path", { d: "m14 6 7.7 7.7", key: "1s8pl2" }], ["path", { d: "m8 6 8 8", key: "hl96qh" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg = I("Contact", [["path", { d: "M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2", key: "1mghuy" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["circle", { cx: "12", cy: "10", r: "2", key: "1yojzk" }], ["line", { x1: "8", x2: "8", y1: "2", y2: "4", key: "1ff9gb" }], ["line", { x1: "16", x2: "16", y1: "2", y2: "4", key: "1ufoma" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag = I("Droplet", [["path", { d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z", key: "c7niix" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg = I("Eye", [["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g = I("Hammer", [["path", { d: "m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9", key: "1afvon" }], ["path", { d: "M17.64 15 22 10.64", key: "zsji6s" }], ["path", { d: "m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91", key: "lehyy1" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg = I("Heart", [["path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z", key: "c3ymky" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc = I("Info", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 16v-4", key: "1dtifu" }], ["path", { d: "M12 8h.01", key: "e9boi3" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg = I("Languages", [["path", { d: "m5 8 6 6", key: "1wu5hv" }], ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }], ["path", { d: "M2 5h12", key: "or177f" }], ["path", { d: "M7 2h1", key: "1t2jsx" }], ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }], ["path", { d: "M14 18h6", key: "1m8k6r" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig = I("LayoutGrid", [["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }], ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }], ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }], ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba = I("Mail", [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku = I("MapPin", [["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }], ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg = I("Menu", [["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }], ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }], ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg = I("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og = I("MonitorCheck", [["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }], ["path", { d: "M12 17v4", key: "1riwvh" }], ["path", { d: "M8 21h8", key: "1ev6f3" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu = I("Phone", [["path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z", key: "foiqr5" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg = I("Plus", [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "M12 5v14", key: "s699le" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg = I("Send", [["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }], ["path", { d: "M22 2 11 13", key: "nzbqef" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg = I("ShieldCheck", [["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg = I("ShoppingCart", [["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }], ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }], ["path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12", key: "9zh506" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug = I("Sparkles", [["path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z", key: "17u4zn" }], ["path", { d: "M5 3v4", key: "bklmnn" }], ["path", { d: "M19 17v4", key: "iiml17" }], ["path", { d: "M3 5h4", key: "nem4j1" }], ["path", { d: "M17 19h4", key: "lbex7p" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg = I("Target", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg = I("User", [["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }], ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju = I("Users", [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }], ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }], ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g = I("X", [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg = I("Zap", [["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]]), Zu = b.createContext(), Vg = { EN: { aboutUs: "About us", projects: "Projects", phone: "8885072259", email: "smaarelysium.@gmail.com", services: "Manpower Services", sectors: "Sectors We Serve", contactUs: "Contact Us", bookManpower: "BOOK MANPOWER", supply: "Manpower Supply", recruitment: "Recruitment", staffing: "Contract Staffing", search: "Executive Search", outsourcing: "HR Outsourcing", security: "Security Solutions", building: "Building Contract", railway: "Railway Contract", steel: "Steel Construction", electric: "Electric Mechanic", oilGas: "Oil and Gas", civil: "Civil Construction", facility: "Facility Management", logistics: "Logistics", manufacture: "Manufacture", mep: "Mechanical, Electrical & Plumbing- MEP", heroTitle: "Premier Civil Construction Solutions in the UAE", heroText: "Empowering the building sector with top-tier talent. Whether you need skilled engineers for permanent roles or a reliable workforce for massive temporary projects, we deliver excellence on time and on budget.", bookNow: "Book Now", expertise: "Our Expertise", compStaffing: "Comprehensive Staffing Solutions", supplyInDubai: "Industry-Leading Manpower Supply in Dubai", supplyDesc: "As a prominent staffing partner in the UAE, we specialize in deploying highly skilled, semi-skilled, and unskilled workforce customized to your project parameters. We guarantee quality personnel for optimal productivity across disciplines:", civilSupply: "Civil Manpower Supply", civilSupplyDesc: "Deploying expert construction professionals and robust labor forces to ensure structural integrity, site safety, and timely project completion for all civil engineering endeavors.", mechSupply: "Mechanical Manpower Supply", mechSupplyDesc: "Providing certified mechanical personnel equipped to handle complex industrial installations, routine maintenance, and manufacturing operations with precision.", elecSupply: "Electrical Manpower Supply", elecSupplyDesc: "Supplying qualified electricians and technical specialists to execute safe, efficient, and compliant electrical installations and heavy-duty maintenance across all project scales.", plumbSupply: "Plumbing Manpower Supply", plumbSupplyDesc: "Sourcing experienced and vetted plumbing professionals adept in comprehensive industrial, commercial, and residential piping and fluid systems management.", helperSupply: "Helper Manpower Supply", helperSupplyDesc: "Delivering dependable, physically capable general support staff ready to assist site operations, handle logistics, and streamline your daily site requirements.", cleaningSupply: "Cleaning Manpower Supply", cleaningSupplyDesc: "Deploying dedicated, trained cleaning personnel committed to maintaining pristine, hygienic, and organized environments for commercial and industrial facilities.", seamlessAcq: "Seamless Resource Acquisition", seamlessAcqDesc: "Deploy the perfect talent for your projects instantly. Our streamlined portal ensures you get the exact workforce you need, anywhere across the UAE.", idReq: "Identify Requirements", idReqDesc: "Specify the distinct categories and operational domains required for your immediate project needs.", specVolume: "Specify Volume & Scope", specVolumeDesc: "Define the exact workforce volume, precise trades, and the deployment timeframe tailored to your schedule.", mobilize: "Mobilize Workforce", mobilizeDesc: "Submit your operational request and let our rapid-deployment team align the ideal personnel immediately.", opImpact: "Our Operational Impact", activeDeploy: "Active Deployments", activeDeployDesc: "Currently managing and supporting massive workforces across major critical developments in the UAE.", partnerOrg: "Partner Organizations", partnerOrgDesc: "Trusted by leading enterprises and conglomerates for consistent, compliant, and reliable staffing.", projDelivered: "Projects Delivered", projDeliveredDesc: "A proven track record of successful manpower support and execution across highly diverse industrial sectors.", profDeployed: "Professionals Deployed", profDeployedDesc: "Maintaining a vast, rapidly scalable network of fully vetted, trained, and immediately available talent.", indEmpower: "Industries We Empower", indEmpowerDesc: "For over a decade, our enterprise has been the driving workforce engine behind monumental projects across Dubai, Mumbai, and the wider UAE.", stratPartner: "Strategic Partnership", accelProj: "Accelerate Your Projects Today", accelProjDesc: "Ready to scale your operations with precision talent? Submit your requirements below, and our staffing architects will rapidly design a workforce strategy aligned seamlessly with your enterprise goals.", enterName: "Enter Name", enterEmail: "Enter Email", phoneNum: "Phone Number", comments: "Comments", faqTitle: "FAQ", faqSubtitle: "MOST ASKED QUESTIONS.", commonFaqTitle: "FAQ", commonFaqSubtitle: "MOST ASKED QUESTIONS.", getInTouch: "Get in Touch", requestStaff: "Request Staff", readMore: "Read More", requestQuote: "Request a Quote", quickFollowUp: "Get a quick follow up!", fillForm: "In case you have any queries or want to hire our adept services, fill up this form, and our experts will get back to you!", csInsightTitle: "Contract Staffing Insights", csInsight1Title: "Brief Introduction to Contract Staffing", csInsight1Desc: "Contract Staffing is when businesses hire an agency to provide experts for a specific duration or project for a fixed period. This allows companies to scale their workforce dynamically.", csInsight2Title: "Need of Contract Staffing", csInsight2Desc: "Maintaining flexibility while keeping up with sudden demand spikes is very important. This makes it crucial for dynamic sectors like construction and engineering.", csInsight3Title: "Benefits of getting Contract Staffing", csInsight3Desc: "There are tons of advantages to getting Contract Staffing from us, including massive cost savings, on-site agility, and reduced long-term liability.", csInsight4Title: "How can Contract Staffing work at Your Advantage?", csInsight4Desc: "Staying lean and agile is important for every organization. A responsive workforce allows you to bid on larger contracts without excessive fixed overhead.", msInsightTitle: "Manpower Supply Insights", msInsight1Title: "Brief Introduction to Manpower Supply", msInsight1Desc: "Manpower Supply is when businesses hire an agency to provide for a team of experts for various operational roles, ensuring project continuity.", msInsight2Title: "Need of Manpower Supply", msInsight2Desc: "Maintaining flawless production while keeping up with the schedule is very important. This makes it essential for industrial and construction success.", msInsight3Title: "Benefits of getting Manpower Supply", msInsight3Desc: "There are tons of advantages to getting Manpower Supply from us. Some of these include rapid mobilization, vetted talent, and compliance management.", msInsight4Title: "How can Manpower Supply work at Your Advantage?", msInsight4Desc: "Staying ahead in the competitive race is important for every organization. And having a strong, reliable workforce is the key engine of growth.", faq1Q: "What is manpower supply in Dubai?", faq1A: "Manpower supply in Dubai refers to the process of providing skilled and unskilled labor to companies and organizations in Dubai, UAE.", faq2Q: "What are the benefits of using manpower supply services in Dubai?", faq2A: "Benefits include flexibility in scaling workforce, reduced administrative and HR burdens, access to a wider talent pool, and cost savings on recruitment and visa processing.", faq3Q: "What types of industries in Dubai require manpower supply services?", faq3A: "Various industries such as construction, facility management, logistics, manufacturing, healthcare, hospitality, and IT frequently rely on manpower supply services to meet their operational needs.", bcHeroTitle: "Building Contract Sector", bcHeroText: "Delivering premium, tailored building contract and construction manpower solutions to drive major infrastructural projects across the UAE.", bcChooseTitle: "Professional Building Contractors", bcChooseP1: "Developing the modern skyline of the UAE requires a proactive, highly skilled workforce. We provide the personnel needed to bring your boldest architectural visions to life.", bcChooseP2: "From structural engineers to highly trained heavy machinery operators, our workforce is designed to accelerate timelines and uphold superior construction quality.", bcChooseP3: "With an unwavering focus on safety, structural integrity, and timeline management, our teams ensure your projects exceed regulatory standards.", bcLogoSlogan: "CONSTRUCTION EXPERTS", bcGrid1: "BUILDING", bcGrid2: "FUTURE", bcGrid3: "URBAN", bcGrid4: "LANDSCAPES", bcBtsTitle: "Deploy Your Construction Crew", bcBtsP1: "Whether you need a dedicated site management team or skilled tradesmen for a commercial high-rise, we deploy the exact talent you need.", bcBtsP2: "Every candidate undergoes rigorous safety checks and technical assessments to guarantee seamless project execution on site.", bcDom1Title: "Civil Engineering", bcDom1Desc: "Specialized engineers for foundational planning, structural design, and large-scale project execution.", bcDom2Title: "Site Management", bcDom2Desc: "Experienced site managers and foremen to oversee daily operations and enforce safety protocols.", bcDom3Title: "Heavy Machinery", bcDom3Desc: "Certified crane operators, excavators, and heavy equipment drivers for earthmoving and lifting.", bcDom4Title: "Skilled Trades", bcDom4Desc: "Masons, carpenters, scaffolders, and painters delivering precision finishing details on all structures.", bcBen1Title: "Safety First", bcBen1Desc: "Personnel trained to strict HSE standards to maintain accident-free construction sites.", bcBen2Title: "Rapid Scaling", bcBen2Desc: "Flexible staffing that easily scales during critical construction phases.", bcBen3Title: "Vetted Professionals", bcBen3Desc: "All staff are vetted tradesmen with experience in major Middle East developments.", bcFaqQ1: "What types of building contract manpower do you provide?", bcFaqA1: "We provide a comprehensive building contract team including project managers, quantity surveyors, site engineers, specialized MEP technicians, and skilled construction workers.", bcFaqQ2: "Do you handle recruitment for both residential and commercial buildings?", bcFaqA2: "Yes, our expertise covers residential towers, luxury villas, commercial centers, office complexes, and mixed-use developments across the UAE.", bcFaqQ3: "How do you ensure the quality of provided building contractors?", bcFaqA3: "We conduct rigorous technical assessments, verify UAE project experience, and ensure all contractors are fully compliant with local municipal standards and regulations.", bcFaqQ4: "Can you provide specialized workers for luxury finishes and interior fit-outs?", bcFaqA4: "Yes, we have a dedicated team of craftsmen for high-end finishes, including marble installers, decorative painters, and skilled joinery workers for premium building projects.", bcFaqQ5: "Do you supply manpower for building renovation and maintenance contracts?", bcFaqA5: "Absolutely. We provide dedicated teams for core structure construction, structural renovations, and long-term facility maintenance contracts.", bcFaqQ6: "How do you manage labor compliance and safety on construction sites?", bcFaqA6: "We strictly adhere to UAE federal labor laws and ensure all personnel are trained on OSHAD and Dubai Municipality safety standards to maintain an accident-free environment.", esBenefit1Title: "Unrivaled Access", esBenefit1Desc: "Our network reaches the 'passive' talent pool—high performers who aren't actively looking but are open to the right move.", esBenefit2Title: "Bespoke Search", esBenefit2Desc: "Every search is unique. We tailor our research and outreach to your specific organizational goals and culture.", esBenefit3Title: "Leadership Assessment", esBenefit3Desc: "Beyond skills, we evaluate leadership style and behavioral fit to ensure long-term executive success.", esFaqQ1: "What is executive search?", esFaqA1: "Executive search is a specialized recruitment service used to source candidates for senior-level leadership roles.", esFaqQ2: "How is it different from regular recruitment?", esFaqA2: "It involves a proactive headhunting approach, focusing on passive candidates who may not be actively seeking new roles.", esFaqQ3: "What is your search methodology?", esFaqA3: "Our methodology includes deep industry research, network outreach, and a multi-stage vetting process to ensure cultural and technical fit.", esFaqQ4: "How long does a search take?", esFaqA4: "Executive searches typically take between 6 to 12 weeks, depending on the role complexity and industry niche.", esFaqQ5: "How do you ensure confidentiality?", esFaqA5: "We maintain strict confidentiality throughout the process, ensuring that sensitive information about both the client and the candidate is protected.", esFaqQ6: "What industries do you specialize in?", esFaqA6: "We specialize in Construction, Energy, Technology, and Financial Services across the UAE region.", ccHeroTitle: "Civil Construction Sector", ccHeroText: "Delivering highly skilled and semi-skilled manpower for major infrastructure, commercial, residential, and industrial construction mega-projects across the UAE.", ccChooseTitle: "Expert Manpower for Civil Construction", ccChooseP1: "The UAE's rapidly expanding skyline demands construction teams built on precision, safety, and deep technical expertise. We provide qualified manpower that ensures your projects are delivered on time, within budget, and to the highest standards.", ccChooseP2: "From foundations and structural works to finishing and infrastructure, our workforce supports every stage of development.", ccChooseP3: "We supply certified civil engineers, site supervisors, NEBOSH-certified safety officers, and specialized trade labor perfectly aligned with UAE construction regulations.", ccLogoSlogan: "CONSTRUCTION SECTOR SPECIALISTS", ccGrid1: "BUILDING THE", ccGrid2: "SKYLINE", ccGrid3: "UNMATCHED", ccGrid4: "WORKFORCE EXPERTISE", ccBtsTitle: "Build Your Civil Construction Team", ccBtsP1: "Whether it’s a high-rise building, road project, or industrial facility — we provide skilled manpower ready to deploy.", ccBtsP2: "Our rigorous vetting process guarantees that every mason, carpenter, steel fixer, and site engineer is safety-compliant and trade-tested.", ccDom1Title: "Infrastructure & Earthworks", ccDom1Desc: "Specialized crews for highway construction, bridges, deep utility trenching, foundations, and heavy civil earthmoving.", ccDom2Title: "High-Rise & Commercial", ccDom2Desc: "Experienced concrete workers, formwork carpenters, and steel fixers dedicated to towers, malls, and commercial developments.", ccDom3Title: "Finishing & Fit-Out", ccDom3Desc: "Master painters, tile masons, block workers, and skilled decorators delivering premium interior and exterior finishing works.", ccDom4Title: "Heavy Machinery Operators", ccDom4Desc: "Certified operators for tower cranes, mobile cranes, excavators, bulldozers, and heavy transport vehicles.", ccBen1Title: "Rapid Mobilization", ccBen1Desc: "Swift deployment of manpower to keep your construction timeline on track.", ccBen2Title: "Strict Safety Standards", ccBen2Desc: "Workforce trained in HSE regulations and UAE-specific construction compliance.", ccBen3Title: "Experienced Professionals", ccBen3Desc: "Engineers, supervisors, and skilled labor with proven on-site experience.", ccFaqQ1: "What civil construction roles do you provide manpower for?", ccFaqA1: "We provide specialized workers including site engineers, masons, carpenters, steel fixers, scaffolders, and heavy equipment operators for all types of building and infrastructure projects.", ccFaqQ2: "Can you provide a large number of skilled workers for major construction projects?", ccFaqA2: "Yes, we have a robust database of pre-vetted skilled workers and can mobilize teams ranging from 50 to 500+ workers quickly depending on your project requirements.", ccFaqQ3: "Do your site engineers and supervisors have UAE experience?", ccFaqA3: "Yes, our technical staff and site supervisors have extensive experience with UAE building codes, safety standards, and municipal regulations.", ccFaqQ4: "Are your workers trained for high-rise construction safety?", ccFaqA4: "Absolutely. Safety is our priority. All workers deployed for high-rise construction projects undergo mandatory safety-at-heights training and strictly follow PPE protocols.", ccFaqQ5: "How do you handle worker accommodation and transportation?", ccFaqA5: "We manage all logistics including high-quality accommodation, daily site transportation, and all necessary welfare requirements for our deployed workforce.", ccFaqQ6: "What types of civil projects have you supported in the UAE?", ccFaqA6: "We have provided manpower for a diverse range of projects including residential towers, malls, road infrastructure, and specialized industrial facilities.", csDom4Title: "HSE Officers", csDom4Desc: "Ensuring all site activities comply with strict occupational health and safety regulations.", csBen1Title: "Immediate Availability", csBen1Desc: "Access a ready pool of pre-vetted professionals for urgent project requirements.", csBen2Title: "Administrative Relief", csBen2Desc: "We manage payroll, insurance, and visa processing for all contracted staff.", csBen3Title: "Skill-Specific Match", csBen3Desc: "Precision matching of technical skills to your project's unique operational needs.", csFaqQ1: "What is contract staffing?", csFaqA1: "Contract staffing is the hiring of employees on a short-term basis for specific projects or roles, which provides flexibility to the organization.", csFaqQ2: "What are the benefits for employers?", csFaqA2: "Employers benefit from cost savings on long-term benefits, flexibility in workforce size, and access to specialized skills for specific durations.", csFaqQ3: "How does contract staffing differ from permanent hiring?", csFaqA3: "Contract staffing is time-bound and project-specific, whereas permanent hiring involves long-term employment with the organization.", csFaqQ4: "Can it lead to permanent employment?", csFaqA4: "Yes, many 'temp-to-perm' arrangements allow employers to evaluate a contractor's fit before offering a permanent position.", csFaqQ5: "How are contractors' benefits managed?", csFaqA5: "Benefits for contractors are typically managed by the staffing agency, simplifying the administrative burden for the client organization.", csFaqQ6: "What industries do you use contract staffing?", csFaqA6: "Industries like IT, Construction, Healthcare, and Finance frequently use contract staffing to meet seasonal or project-based demands.", ogFaqQ1: "What types of roles do you staff for in the Oil & Gas sector?", ogFaqA1: "We provide staffing for a wide range of roles including drilling engineers, HSE officers, refinery operators, maintenance technicians, and project managers for both upstream and downstream operations.", ogFaqQ2: "Do you provide manpower for offshore projects?", ogFaqA2: "Yes, we specialize in supplying certified and experienced personnel for offshore drilling platforms, supply vessels, and subsea operations with all necessary safety certifications.", ogFaqQ3: "How do you ensure the safety and compliance of your staff?", ogFaqA3: "Safety is our top priority. All our personnel undergo mandatory safety training, including BOSIET/H2S certifications where required, and we strictly adhere to international and local OSH standards.", ogFaqQ4: "Can you provide specialized technical experts for short-term refinery shutdowns?", ogFaqA4: "Absolutely. We maintain a pool of highly skilled technical experts who can be deployed rapidly for turnarounds, shutdowns, and specialized maintenance projects.", ogFaqQ5: "How do you handle the recruitment of international experts for UAE projects?", ogFaqA5: "We have a global network that allows us to source specialized talent from around the world, managing all visa, mobilization, and compliance requirements for deployment in the UAE.", ogFaqQ6: "What industries do you serve within the Energy sector?", ogFaqA6: "Beyond traditional Oil & Gas, we serve the entire energy value chain including renewable energy, petrochemicals, power generation, and water desalination industries.", bcSEOTitle: "Building Contract Manpower in UAE | Construction Staffing | Smaar Elysium", bcSEODesc: "Smaar Elysium provides highly skilled building contract manpower across UAE, including civil engineers, project managers, and specialized construction staff.", ccSEOTitle: "Civil Construction Manpower Supply in UAE | Site Engineers & Skilled Labour | Smaar Elysium", ccSEODesc: "Smaar Elysium delivers skilled civil construction manpower across UAE including site engineers, masons, steel fixers, formwork carpenters, and heavy machinery operators for infrastructure and building projects.", emSEOTitle: "Electric & Mechanic Contract Manpower UAE | MEP Staffing | Smaar Elysium", emSEODesc: "Providing premier electric and mechanic contract manpower, including MEP engineers, HVAC technicians, and industrial electricians across the UAE.", fmSEOTitle: "Facility Management Manpower UAE | Maintenance Staffing | Smaar Elysium", fmSEODesc: "Professional facility management manpower solutions in UAE. We provide experienced maintenance staff, cleaning crews, and technical facility support.", lgSEOTitle: "Logistics Manpower Supply UAE | Warehouse & Transport Staff | Smaar Elysium", lgSEODesc: "Reliable logistics manpower across UAE. We supply experienced warehouse staff, forklift operators, and transport personnel for efficient supply chain operations.", mnSEOTitle: "Manufacturing Sector Manpower in UAE | Industrial & Production Workers | Smaar Elysium", mnSEODesc: "Smaar Elysium delivers certified manufacturing manpower across UAE including CNC operators, welders, quality inspectors, assembly line workers, and industrial maintenance technicians for factories and production plants.", mpSEOTitle: "MEP Manpower Supply UAE | Mechanical, Electrical & Plumbing | Smaar Elysium", mpSEODesc: "Premier MEP manpower supply in UAE. We provide experienced mechanical, electrical, and plumbing technicians for large-scale infrastructure projects.", ogSEOTitle: "Oil & Gas Manpower Supply UAE | Specialized Energy Staffing | Smaar Elysium", ogSEODesc: "Dedicated oil and gas manpower solutions in UAE. Supplying specialized engineers, technical experts, and safety officers for upstream and downstream operations.", rcSEOTitle: "Railway Contract Manpower UAE | Transit Infrastructure Staffing | Smaar Elysium", rcSEODesc: "Specialized railway contract manpower in UAE. Providing infrastructure engineers, track maintenance staff, and railway technical experts.", scSEOTitle: "Steel Construction Manpower UAE | Structural Steel Staffing | Smaar Elysium", scSEODesc: "Professional steel construction manpower supply in UAE. Providing expert steel erectors, welders, and structural technicians for massive infrastructure projects.", ogHeroTitle: "Oil & Gas Sector", ogHeroText: "Empowering the UAE energy sector with specialized engineering, technical, and operational experts. We provide reliable manpower solutions for upstream, midstream, and downstream operations.", ogChooseTitle: "Professional Oil & Gas Manpower Solutions", ogChooseP1: "The energy sector in the UAE requires a workforce that is not only highly skilled but also deeply familiar with the unique safety and technical demands of oil and gas operations. We provide the specialized talent needed to drive your projects forward.", ogChooseP2: "Our personnel are experienced in the latest technologies and methodologies, ensuring that your upstream, midstream, and downstream operations are conducted with maximum efficiency and safety.", ogChooseP3: "We work closely with major energy firms and contractors across the UAE to deliver comprehensive staffing solutions that meet the most demanding project requirements and timelines.", ogLogoSlogan: "ENERGY SECTOR SPECIALISTS", ogGrid1: "POWERING THE", ogGrid2: "FUTURE", ogGrid3: "UNMATCHED ENERGY", ogGrid4: "EXPERTISE", ogBtsTitle: "Build Your Expert Oil & Gas Team", ogBtsP1: "Whether you need a full crew for an offshore rig, specialized engineers for a refinery, or safety officers for a new pipeline project, we have the talent you need.", ogBtsP2: "Our rigorous vetting process ensures that every professional is deeply committed to HSE zero-harm policies and operational excellence.", ogDom1Title: "Upstream Extraction", ogDom1Desc: "Skilled personnel for exploration and production, including drilling engineers, rig operators, and geoscientists.", ogDom2Title: "Midstream Logistics", ogDom2Desc: "Expertise in storage and transportation with pipeline technicians, terminal operators, and logistics coordinators.", ogDom3Title: "Downstream Refining", ogDom3Desc: "Chemical engineers, process operators, and maintenance technicians specialized in refinery production and petrochemicals.", ogDom4Title: "Shutdowns & Turnarounds", ogDom4Desc: "Rapid mobilization of large, multi-disciplinary workforces for scheduled plant maintenance with minimal downtime.", ogDom5Title: "HSE & Compliance", ogDom5Desc: "Dedicated Safety Officers, QA/QC Inspectors, and Environmental Engineers ensuring operations meet energy sector regulations.", ogDom6Title: "Technical Maintenance", ogDom6Desc: "Certified welders, pipefitters, electricians, and mechanical fitters experienced in maintaining oilfield machinery.", ogBen1Title: "Safety Excellence", ogBen1Desc: "All personnel are fully certified in BOSIET, H2S, and other oilfield-critical safety protocols.", ogBen2Title: "Technical Expertise", ogBen2Desc: "Engineers and technicians with extensive experience in UAE's upstream and downstream operations.", ogBen3Title: "Rapid Mobilization", ogBen3Desc: "Proven ability to hire and mobilize large, multi-disciplinary teams for urgent projects and shutdowns.", rcHeroTitle: "Railway Contract Sector", rcHeroText: "Providing highly specialized railway engineering and infrastructure manpower to support the UAE’s rapidly expanding transit networks.", rcChooseTitle: "Expert Railway Infrastructure Teams", rcChooseP1: "As the UAE continues to connect its cities with world-class rail and metro networks, the demand for specialized rail professionals has never been higher. We provide the expertise needed.", rcChooseP2: "From signaling engineers and track laying specialists to safety officers focused on railway protocols, our personnel are trained for this highly regulated environment.", rcChooseP3: "We partner with global rail contractors to ensure steady, reliable workforce deployment across massive multi-year transit projects.", rcLogoSlogan: "RAILWAY EXPERTS", rcGrid1: "CONNECTING", rcGrid2: "TRANSIT", rcGrid3: "URBAN", rcGrid4: "NETWORKS", rcBtsTitle: "Deploy Your Rail Crew", rcBtsP1: "Deploying a team for railway construction or maintenance requires specific certifications. We handle the vetting of all technical professionals in this space.", rcBtsP2: "Maintain strict operational schedules and ensure complete safety compliance by augmenting your core staff with our contract rail workers.", rcDom1Title: "Track Laying & Maintenance", rcDom1Desc: "Specialized workers for the installation, inspection, and ongoing maintenance of railway tracks.", rcDom2Title: "Signaling & Comms", rcDom2Desc: "Engineers and technicians to install and test complex railway signaling and communication systems.", rcDom3Title: "Civil Rail Infrastructure", rcDom3Desc: "Personnel for constructing platforms, tunnels, bridges, and stations associated with rail networks.", rcDom4Title: "Rolling Stock Techs", rcDom4Desc: "Mechanics and electricians focused on the maintenance and repair of the train carriages and engines.", rcBen1Title: "Rail-Grade Standards", rcBen1Desc: "A workforce fully trained and approved to RTA, Etihad Rail, and international railway standards.", rcBen2Title: "Specialized Skillsets", rcBen2Desc: "Access to signaling, OHE, and track laying technicians with experience in mass transit megaprojects.", rcBen3Title: "Schedule Integrity", rcBen3Desc: "Dedicated teams focused on ensuring railway infrastructure projects stay on track and on time.", scHeroTitle: "Steel Construction Sector", scHeroText: "Deploying elite steel workers, welders, and structural engineers to support the backbone of modern infrastructural development across the UAE.", scChooseTitle: "Master Steel Fabrication & Erection Teams", scChooseP1: "The structural integrity of modern megaprojects starts with steel. Our staffing agency specializes in sourcing and deploying top-tier steel construction professionals.", scChooseP2: "From certified 6G welders mapping out critical joins, to heavy steel erectors balancing beams high above the city, we supply the grit and expertise required.", scChooseP3: "We serve industrial fabrication yards and live commercial construction sites alike, ensuring your most demanding structural needs are met on schedule.", scLogoSlogan: "STEELWORK EXPERTS", scGrid1: "FORGING", scGrid2: "STRUCTURAL", scGrid3: "EXCELLENCE", scGrid4: "NATIONWIDE", scBtsTitle: "Hire Your Steel Crew", scBtsP1: "Don't let a shortage of skilled welders delay your critical path. We provide flexible, certified metalworking teams at a moment's notice.", scBtsP2: "Our rigorous testing procedures ensure that every steelworker we provide holds the necessary safety and operational certifications for UAE sites.", scDom1Title: "Certified Welders", scDom1Desc: "Expert SMAW, TIG, and MIG welders tested for precision and durability on structural steel joints.", scDom2Title: "Steel Erectors", scDom2Desc: "Specialists adept at reading blueprints and safely lifting, positioning, and securing heavy steel frameworks.", scDom3Title: "Fabrication Shop Staff", scDom3Desc: "Fabricators, cutters, and grinders for off-site steel preparation in industrial manufacturing yards.", scDom4Title: "Quality Inspectors", scDom4Desc: "NDT inspectors and QA/QC personnel ensuring all steelwork meets stringent international standards.", scBen1Title: "Certified Master Welders", scBen1Desc: "AWS/ASME certified 6G welders ensuring the highest structural integrity on every steel joint.", scBen2Title: "Rigging Precision", scBen2Desc: "Highly experienced lifting supervisors and riggers adept at handling complex, heavy steel components.", scBen3Title: "Scalable Capacity", scBen3Desc: "A flexible workforce capable of scaling up to support massive fabrication yards and high-rise sites.", emHeroTitle: "Electric & Mechanic Contract Sector", emHeroText: "Supplying world-class electro-mechanical engineers, HVAC technicians, and MEP specialists to power the UAE’s residential, commercial, and industrial ecosystems.", emChooseTitle: "Expert MEP & Electro-Mechanical Teams", emChooseP1: "Behind every modern building and industrial facility lies a complex vascular system of electrical, mechanical, and plumbing networks. We provide the personnel who design, build, and maintain these vital systems.", emChooseP2: "From massive district cooling plants requiring specialized HVAC technicians, to smart building infrastructure requiring low-voltage data cabling experts, our deployable workforce covers the complete MEP spectrum.", emChooseP3: "Our technicians are rigorously tested and certified to ensure they meet the stringent energy, safety, and operational standards of the UAE.", emLogoSlogan: "MEP EXPERTS", emGrid1: "POWERING", emGrid2: "MODERN", emGrid3: "URBAN", emGrid4: "INFRASTRUCTURE", emBtsTitle: "Deploy Your MEP Crew", emBtsP1: "The success of an MEP project relies heavily on the technical proficiency of the boots on the ground. We provide vetted specialists ready for immediate deployment.", emBtsP2: "Avoid project delays caused by a lack of specialized technicians. Our contract staffing model allows you to scale your electrical and mechanical teams perfectly in line with project phases.", emDom1Title: "Industrial Electricians", emDom1Desc: "High and low voltage specialists, control panel technicians, and industrial wiring experts.", emDom2Title: "HVAC Technicians", emDom2Desc: "Experts in the installation, commissioning, and maintenance of massive cooling and ventilation systems.", emDom3Title: "Mechanical Engineers", emDom3Desc: "Engineers specializing in heavy machinery, fluid mechanics, pumps, and industrial piping networks.", emDom4Title: "Plumbing & Fire Fighting", emDom4Desc: "Certified plumbers and technicians specializing in complex water systems, drainage, and crucial fire suppression networks.", emBen1Title: "Regulatory Compliance", emBen1Desc: "Vetted technicians ensuring full compliance with DEWA, ADDC, and other UAEn utility regulations.", emBen2Title: "Broad Technical Reach", emBen2Desc: "Our workforce covers the complete MEP spectrum from basic electrical wiring to complex HVAC systems.", emBen3Title: "Quality & Reliability", emBen3Desc: "Our rigorous vetting ensures you get technicians who minimize rework and optimize system performance.", fmHeroTitle: "Facility Management Sector", fmHeroText: "Delivering premium, tailored facility management manpower solutions to maximize asset lifespan and operational uptime across commercial, residential, and corporate ecosystems in the UAE.", fmChooseTitle: "Professional Facility Management Teams", fmChooseP1: "Maintaining the modern infrastructure of the UAE requires a proactive and highly skilled workforce. We provide the personnel needed to keep your facilities running at peak performance.", fmChooseP2: "From preventative maintenance technicians to hospitality-trained soft services staff, our workforce is designed to enhance the end-user experience and protect your physical assets.", fmChooseP3: "With an unwavering focus on sustainability, hygiene, and continuous uptime, our teams ensure your properties exceed regulatory and occupant expectations.", fmLogoSlogan: "FACILITY MANAGEMENT EXPERTS", fmGrid1: "ELEVATING", fmGrid2: "ASSETS", fmGrid3: "OPTIMIZED", fmGrid4: "PERFORMANCE", fmBtsTitle: "Build Your Facility Management Crew", fmBtsP1: "Whether you need a dedicated hard services engineering team or a discreet soft services crew for a luxury property, we deploy the right talent.", fmBtsP2: "Every candidate undergoes rigorous background checks and customer-service oriented training to guarantee seamless service delivery.", fmDom1Title: "Hard Services (MEP)", fmDom1Desc: "Specialized technicians for predictive and reactive maintenance of electrical, HVAC, and plumbing systems.", fmDom2Title: "Soft Services (Cleaning)", fmDom2Desc: "BICS-trained cleaning crews, housekeepers, and deep-cleaning specialists ensuring immaculate environments.", fmDom3Title: "Security & Safety", fmDom3Desc: "SIRA-certified security guards, CCTV operators, and life-safety personnel protecting your people and property.", fmDom4Title: "Front of House & Admin", fmDom4Desc: "Polished receptionists, concierge staff, and facility coordinators acting as the welcoming face of your organization.", fmBen1Title: "Asset Value Optimization", fmBen1Desc: "Proactive maintenance staff focused on preventative care to increase the lifespan of your facilities.", fmBen2Title: "Hospitality Training", fmBen2Desc: "Soft services staff trained in customer service excellence to enhance occupant experience.", fmBen3Title: "Round-the-Clock Support", fmBen3Desc: "Teams capable of supporting 24/7 facility management operations for continuous uptime.", lgHeroTitle: "Logistics Sector", lgHeroText: "Agile and scalable logistics manpower solutions driving efficiency across transport, warehousing, and global supply chain operations in the UAE.", lgChooseTitle: "Expert Supply Chain Manpower", lgChooseP1: "As the UAE solidifies its position as a global logistics hub, the demand for rapid, accurate, and scalable workforce solutions is higher than ever.", lgChooseP2: "From meticulous inventory clerks and skilled forklift operators to experienced heavy vehicle drivers (License 3, 4, 6, 8), our talent pool keeps goods moving.", lgChooseP3: "We supply highly trained logistics personnel capable of operating 24/7, compliant with internal HSE policies and international trade regulations.", lgLogoSlogan: "LOGISTICS SECTOR SPECIALISTS", lgGrid1: "DRIVING", lgGrid2: "GLOBAL", lgGrid3: "SUPPLY", lgGrid4: "FORWARD", lgBtsTitle: "Build Your Logistics Operations Crew", lgBtsP1: "Whether staffing a 100,000 sq ft distribution center, or assembling a fleet of delivery drivers for last-mile logistics, we possess the scale to support you.", lgBtsP2: "Rigorous testing ensures every team member understands modern WMS (Warehouse Management Systems) and strict cargo handling safety protocols.", lgDom1Title: "Fleet & Transportation", lgDom1Desc: "Specialized operators for heavy duty trucks, light commercial vehicles, and last-mile courier delivery fleets.", lgDom2Title: "Warehouse Operations", lgDom2Desc: "Certified VNA/Forklift operators, order pickers, packers, and cargo loaders for high-volume distribution centers.", lgDom3Title: "Inventory & Planning", lgDom3Desc: "Data-driven inventory clerks, stock controllers, and supply chain analysts to optimize stock flow and minimize shrinkage.", lgDom4Title: "Freight & Customs", lgDom4Desc: "Experienced documentation clerks, freight forwarders, and customs clearance specialists navigating complex international trade requirements.", lgBen1Title: "Operational Flexibility", lgBen1Desc: "Quick mobilization of warehouse labor and delivery drivers to handle seasonal demand peaks.", lgBen2Title: "Efficiency Driven", lgBen2Desc: "Personnel trained on modern WMS systems and warehouse safety protocols to maximize throughput.", lgBen3Title: "Fleet Compliance", lgBen3Desc: "Experienced drivers with valid UAEn licenses ensure goods are transported safely and on schedule.", mnHeroTitle: "Manufacturing Sector", mnHeroText: "Supplying high-performance, skilled manpower for heavy manufacturing, assembly lines, and precision industrial production facilities across the UAE.", mnChooseTitle: "Manufacturing Manpower Solutions", mnChooseP1: "As industrial zones and smart manufacturing hubs expand across the UAE, having a reliable, technically proficient workforce is the key to scalability.", mnChooseP2: "We provide certified CNC operators, industrial electricians, QA/QC inspectors, and seasoned assembly line supervisors to keep your production operating around the clock.", mnChooseP3: "Our personnel are meticulously trained to adhere strictly to modern manufacturing methodologies, lean principles, and uncompromising factory safety standards.", mnLogoSlogan: "MANUFACTURING INDUSTRY EXPERTS", mnGrid1: "ACCELERATING", mnGrid2: "PRODUCTION", mnGrid3: "WITH", mnGrid4: "EXPERT LABOR", mnBtsTitle: "Build Your Manufacturing Team", mnBtsP1: "Whether launching a new production shift or supplementing your core machining team, we provide precisely matched industrial talent.", mnBtsP2: "All recruits undergo strict technical vetting and practical skills assessments to ensure immediate on-site productivity and safety awareness.", mnDom1Title: "Assembly & Production", mnDom1Desc: "High-volume assembly line workers, packaging staff, and production supervisors ensuring output targets are consistently met.", mnDom2Title: "Machining & Fabrication", mnDom2Desc: "Certified CNC programmers, welders (TIG/MIG), metal fabricators, and tool/die makers for precision engineering tasks.", mnDom3Title: "Quality Assurance (QC)", mnDom3Desc: "Detail-oriented inspectors and metrology technicians ensuring zero defects and strict adherence to ISO manufacturing standards.", mnDom4Title: "Industrial Maintenance", mnDom4Desc: "Preventative and reactive maintenance crews, including millwrights and heavy equipment mechanics, maximizing plant uptime.", mnBen1Title: "Industrial Productivity", mnBen1Desc: "Highly efficient operators and technicians focused on meeting production targets with minimal waste.", mnBen2Title: "Quality Discipline", mnBen2Desc: "Rigorous QA/QC inspectors ensuring every product leaving the line meets international quality standards.", mnBen3Title: "Safety Conscious", mnBen3Desc: "A workforce fully trained in factory safety protocols, machine guarding, and occupational health.", mpHeroTitle: "MEP (Mechanical, Electrical & Plumbing) Sector", mpHeroText: "Providing specialized Mechanical, Electrical, and Plumbing manpower for high-stakes installations, maintenance, and commissioning across the UAE.", mpChooseTitle: "Expert MEP Workforce Deployment", mpChooseP1: "The backbone of any modern building is its MEP infrastructure. We provide the certified talent required to install, test, and maintain these complex systems.", mpChooseP2: "From massive district cooling plants and high-voltage power distribution to intricate fire-suppression logic, our personnel bring verifiable technical expertise.", mpChooseP3: "Our workforce is accustomed to coordinating with civil teams on fast-paced, large-scale commercial, residential, and industrial mega-projects.", mpLogoSlogan: "MEP SPECIALISTS", mpGrid1: "ENGINEERING", mpGrid2: "EXCELLENCE", mpGrid3: "CERTIFIED", mpGrid4: "MEP TALENT", mpBtsTitle: "Build Your Technical MEP Team", mpBtsP1: "Whether you need a specialized commissioning crew or hundreds of electricians and pipefitters for an ongoing build, we can supply them.", mpBtsP2: "Every member is trade-tested to comply with DEWA, ADDC, SEWA, and Civil Defense standards, ensuring your installations pass inspection the first time.", mpDom1Title: "Mechanical & HVAC", mpDom1Desc: "Chiller technicians, duct fitters, and mechanical engineers specialized in climate control, ventilation, and district cooling systems.", mpDom2Title: "Electrical Engineering", mpDom2Desc: "Industrial electricians, cable jointers, and panel builders for low current (ELV), low voltage (LV), and high voltage (HV) networks.", mpDom3Title: "Plumbing & Piping", mpDom3Desc: "Certified plumbers and pipefitters executing complex water supply, drainage, and industrial piping networks.", mpDom4Title: "Fire & Life Safety", mpDom4Desc: "Civil Defense-approved specialists for the installation and commissioning of fire alarms, sprinklers, and emergency suppression systems.", mpBen1Title: "Integrated Systems Expertise", mpBen1Desc: "Skilled technicians adept at coordinating complex Mechanical, Electrical, and Plumbing installations on major projects.", mpBen2Title: "Inspection Readiness", mpBen2Desc: "Staff trained to install systems that comply with Civil Defense and regulatory bodies for first-time success.", mpBen3Title: "Rapid Resource Scaling", mpBen3Desc: "The ability to provide fast-track projects with large, technically proficient MEP teams on demand.", recHeroTitle: "Premier Recruitment Solutions in UAE", recHeroText: "Empower your business with elite talent. We deliver strategic recruitment services to help you scale.", recChooseTitle: "Elevate Your Workforce with Precision Hiring", recChooseP1: "Welcome to a new standard of recruitment. At Smaar Elysium, we blend industry expertise with a personalized touch to connect you with professionals who drive real business impact. Our approach is defined by meticulous screening, proactive sourcing, and an unwavering commitment to quality.", recChooseP2: "In today's fast-paced corporate landscape, having the right people is the ultimate competitive advantage.", recChooseP3: "We believe that successful hiring goes beyond matching resumes to job descriptions. It requires a deep understanding of your company culture, strategic objectives, and long-term vision. Our bespoke talent acquisition methods ensure we find candidates who seamlessly integrate with your team.", recChooseP4: "Partner with us to transform your hiring process. From specialized roles to volume recruitment, Smaar Elysium provides the strategic support you need to build a future-ready, high-performing organization.", recLogoSlogan: "Your Trusted work force Partner", recGrid1: "GO BEYOND THE", recGrid2: "ORDINARY", recGrid3: "FIND THE PRECISE", recGrid4: "EXECUTIVES", recBtsTitle: "Build a High-Performing Team Tailored to You", recBtsP1: "Unlocking your company's full potential starts with identifying your exact needs. Our precision-driven recruitment process guarantees alignment between your strategic goals and the top-tier professionals we deliver.", recBtsP2: "Rigorous candidate evaluation is the foundation of our success. We look far beyond the resume, evaluating technical skills, cultural fit, and long-term potential. This comprehensive methodology means you only interview the absolute best.", recBtsP3: "Elevate your business capabilities. Let Smaar Elysium manage the complexities of talent acquisition so that you can focus on what matters most—driving your business forward.", recWhyTitle: "WHY CHOOSE US", recWhyIntro: "Choose us for recruitment that goes beyond the conventional. Experience the difference of personalized talent acquisition, meticulous candidate screening, and recruitment strategies designed exclusively for your success.", recBenefit1Title: "Tailored Talent Acquisition", recBenefit1Desc: "We don't believe in one-size-fits-all. Our approach is custom-fit, ensuring the candidates we bring match not just the job requirements but also your unique organizational culture.", recBenefit2Title: "Thorough Candidate Screening", recBenefit2Desc: "Our commitment to quality extends to our screening process. We delve deep to unearth not only skills but also the intangible qualities that make a candidate the right cultural fit for your team.", recBenefit3Title: "Personalized Recruitment Strategies", recBenefit3Desc: "Recognizing that every client is distinct, we craft recruitment strategies tailored to your specific needs. Whether it's volume hiring or niche roles, we adapt our approach to maximize efficiency.", faqRec1Q: "What makes your talent acquisition unique?", faqRec1A: "Our recruitment approach is characterized by a customized strategy that aligns the right professionals with your specific company goals and culture.", faqRec2Q: "How thorough is your candidate screening?", faqRec2A: "We follow a detailed evaluation process that includes skill assessments, background checks, and in-depth interviews to ensure only qualified candidates progress.", faqRec3Q: "What sets your recruitment strategies apart?", faqRec3A: "Our recruitment methods combine market insights, advanced sourcing techniques, and industry expertise to attract top-tier talent efficiently.", faqRec4Q: "How do you ensure a match between candidates and our requirements?", faqRec4A: "We carefully analyze job aspirations and company culture to identify candidates whose skills, experience, and values align with your needs.", faqRec5Q: "Can you elaborate on the concept of personalized recruitment?", faqRec5A: "Personalized recruitment means tailoring our hiring solutions to fit your business objectives, ensuring a more precise and long-lasting placement.", faqRec6Q: "How do you handle challenges in the recruitment process?", faqRec6A: "We proactively address hiring challenges by maintaining clear communication, leveraging industry networks, and applying strategic problem-solving at every stage.", msHeroTitle: "Manpower Supply Company in UAE", msHeroText: "No. 1 Manpower Supply Company in UAE, offering quality Labour Supply Services on an Hourly Basis across all the emirates. 15 Years of Service.", msBtnBook: "Book Manpower Online", msIntroText: "Our quick-evolving and agile market constantly demands employing more experts to deliver optimal results. We provide comprehensive manpower supply services across multiple domains.", msCat1Title: "Civil Manpower", msCat1Desc: "From laying the foundation to completing the finishing touches, civil manpower ensures that your construction projects are executed flawlessly.", msCat2Title: "Electrical Manpower", msCat2Desc: "No matter what industry or domain you work for, a secure electrical setup is the first layer of protection you can provide. To help you out, Smaar Elysium team provides experienced teams to work for you.", msCat3Title: "Mechanical Manpower", msCat3Desc: "Working on a project with a deadline puts extra pressure on the existing team. Our Mechanical Manpower Supply will get you ready to deliver according to the due dates and achieve all your short term goals.", msCat4Title: "Helper Manpower", msCat4Desc: "You can already understand it from the name, a Helper is someone who assists you in timely finishing the task at hand. Smaar Elysium has a wide network of reliable help, who can work on your terms and requirements.", msRoleCivilEngineer: "Civil Engineer", msRoleCivilEngineerDesc: "Expert engineering for project management and structural integrity.", msRoleCivilSupervisor: "Civil Supervisor", msRoleCivilSupervisorDesc: "On-site management to ensure all civil works meet quality standards.", msRoleCivilForeman: "Civil Foreman", msRoleCivilForemanDesc: "Directing crews for optimal performance in masonry, tiling, and more.", msRoleChargehand: "Chargehand", msRoleChargehandDesc: "Experienced leads to bridge communication between foreman and crew.", msRoleScaffolderNormal: "Scaffolder Normal", msRoleScaffolderNormalDesc: "Safe and efficient assembly of support structures for any construction height.", msRoleCertifiedScaffolder: "Certified Scaffolder", msRoleCertifiedScaffolderDesc: "HSE-compliant scaffolding expertise for high-risk environments.", msRoleSteelFixer: "Steel Fixer", msRoleSteelFixerDesc: "Installing and securing steel bars to reinforce concrete structures.", msRoleShutteringCarpenter: "Shuttering Carpenter", msRoleShutteringCarpenterDesc: "Precise formwork creation for concrete pouring and structural shaping.", msRoleGypsumCarpenter: "Gypsum Carpenter", msRoleGypsumCarpenterDesc: "Specialists in gypsum board installation for walls and ceilings.", msRoleFinishingCarpenter: "Finishing Carpenter", msRoleFinishingCarpenterDesc: "Detailed woodworking for interiors, doors, and expert fittings.", msRoleBlockMason: "Block Mason", msRoleBlockMasonDesc: "Skilled construction of durable block walls and structures.", msRolePlasterMason: "Plaster Mason", msRolePlasterMasonDesc: "Delivering smooth, high-quality plaster finishes for internal and external walls.", msRoleTileMason: "Tile Mason", msRoleTileMasonDesc: "Precision tiling for floors and walls in commercial and residential projects.", msRoleSandBlaster: "Sand Blaster", msRoleSandBlasterDesc: "Professional surface preparation and cleaning for industrial components.", msRoleWallPainter: "Wall Painter", msRoleWallPainterDesc: "Expert application of paints for protective and aesthetic wall finishes.", msRoleSprayPainter: "Spray Painter", msRoleSprayPainterDesc: "High-quality, uniform spray finishes for furniture and industrial parts.", msRoleWoodPolisher: "Wood Polisher", msRoleWoodPolisherDesc: "Enhancing wood surfaces with professional stains and polishes.", msRoleWoodPainter: "Wood Painter", msRoleWoodPainterDesc: "Protective and decorative painting tailored for wooden structures.", msRoleRigger: "Rigger", msRoleRiggerDesc: "Expert handling and securing of heavy loads for safe lifting.", msRoleCivilHelper: "Civil Helper", msRoleCivilHelperDesc: "Dependable general labor to support all construction site operations.", msRoleSafetyOfficer: "Safety Officer", msRoleSafetyOfficerDesc: "Ensuring site compliance with health, safety, and environmental regulations.", msRoleElectricalEngineer: "Electrical Engineer", msRoleElectricalEngineerDesc: "Design and oversight of complex electrical systems and power distribution.", msRoleElectricalSupervisor: "Electrical Supervisor", msRoleElectricalSupervisorDesc: "Monitoring electrical installations to ensure adherence to safety codes.", msRoleElectricalForeman: "Electrical Foreman", msRoleElectricalForemanDesc: "Leading electrical teams for efficient wiring, mounting, and testing.", msRoleElectrician: "Electrician", msRoleElectricianDesc: "Skilled installation and maintenance of electrical circuits and equipment.", msRoleAssistantElectrician: "Assistant Electrician", msRoleAssistantElectricianDesc: "Supporting lead technicians in wiring and system installations.", msRoleInstrumentTechnician: "Instrument Technician", msRoleInstrumentTechnicianDesc: "Calibration and repair of sensitive industrial measuring instruments.", msRoleInstrumentFitter: "Instrument Fitter", msRoleInstrumentFitterDesc: "Precise fitting and piping for control systems and instrumentation.", msRoleLowVoltageTechnician: "Low Voltage Technician", msRoleLowVoltageTechnicianDesc: "Expertise in telecommunications, security systems, and data cabling.", msRoleElectricalHelper: "Electrical Helper", msRoleElectricalHelperDesc: "General assistance for cable pulling and material handling.", msRoleMechanicalEngineer: "Mechanical Engineer", msRoleMechanicalEngineerDesc: "Strategic planning and maintenance for industrial machinery and HVAC.", msRoleMechanicalSupervisor: "Mechanical Supervisor", msRoleMechanicalSupervisorDesc: "Operational oversight for mechanical assembly and fabrication projects.", msRoleMechanicalForeman: "Mechanical Foreman", msRoleMechanicalForemanDesc: "Coordinating technicians for machinery repair and installation.", msRoleMillwrightFitter: "Millwright Fitter", msRoleMillwrightFitterDesc: "Specialists in installing, aligning, and maintaining heavy rotating machinery.", msRolePipeFitter: "Pipe Fitter", msRolePipeFitterDesc: "Installing and maintaining high-pressure piping systems for industrial use.", msRolePipeFabricator: "Pipe Fabricator", msRolePipeFabricatorDesc: "Cutting and welding of pipes according to specific engineering blueprints.", msRoleStructuralFabricator: "Structural Fabricator", msRoleStructuralFabricatorDesc: "Crafting heavy-duty steel components for building frameworks.", msRolePlumber: "Plumber", msRolePlumberDesc: "Expert water supply and drainage system installations.", msRole6GWelder: "6G Welder", msRole6GWelderDesc: "Certified specialized welding for high-pressure pipelines and tanks.", msRoleArcWelder: "Arc Welder", msRoleArcWelderDesc: "Professional welding for structural and general industrial repairs.", msRoleDuctFitter: "Duct Fitter", msRoleDuctFitterDesc: "Installation of ventilation and air conditioning ductwork.", msRoleDuctFabricator: "Duct Fabricator", msRoleDuctFabricatorDesc: "Precision shaping and assembly of HVAC duct systems.", msRoleInsulator: "Insulator", msRoleInsulatorDesc: "Thermal and acoustic insulation for pipes, ducts, and walls.", msRoleMechanicalHelper: "Mechanical Helper", msRoleMechanicalHelperDesc: "General support for mechanical fitting and fabrication teams.", msRoleGeneralHelper: "General Helper", msRoleGeneralHelperDesc: "Versatile labor support for cleaning, moving, and site maintenance.", msRoleLoadingUnloading: "Loading & Unloading Helper", msRoleLoadingUnloadingDesc: "Efficient handling of goods for logistics and warehouse operations.", msRoleWarehouseHelper: "Warehouse Helper", msRoleWarehouseHelperDesc: "Supporting inventory management and order fulfillment tasks.", msRolePackingHelper: "Packing Helper", msRolePackingHelperDesc: "Careful packaging of products for secure transit and delivery.", msRoleKitchenHelper: "Kitchen Helper", msRoleKitchenHelperDesc: "Assisting in food preparation and maintaining kitchen cleanliness.", msRoleCleaningHelper: "Cleaning Helper", msRoleCleaningHelperDesc: "Reliable cleaning services for offices, sites, and commercial facilities.", csHeroTitle: "Contract Staffing Solutions in UAE", csHeroText: "Looking for flexible workforce solutions tailored to your project needs? Smaar Elysium provides top-tier contract staffing for all industries.", csChooseTitle: "Choose the best for you", csChooseP1: "Step into the realm of our tailored contract staffing services, where speed converges with precision for an unparalleled workforce experience. Our core strengths redefine temporary staffing with a focus on agile deployment, meticulous candidate screening, and scalable contract strategies.", csChooseP2: "In the ever-evolving business environment, effective management of your flexible workforce is a key determinant of success.", csChooseP3: "Our contract staffing services excel in delivering customized temporary solutions crafted to suit the unique project requirements of your organization. In this era of swift transformations, accessing skilled contract talent holds greater significance than ever before.", csChooseP4: "Recognizing the pivotal role a qualified flexible workforce plays in fostering business agility, our committed team comprehensively caters to your contract staffing needs. We ensure your company gains access to a diverse pool of talented professionals who are aligned with your project timelines.", csChooseP5: "Allow us to serve as your strategic ally in constructing a proficient and motivated contract team, empowering your business to thrive amidst fierce competition in the market.", csGrid4: "CONTRACTORS", csBtsTitle: "Build Your Flexible Workforce With Our Services", csBtsP1: "Unleash your business potential with short-term, contract-based staffing solutions designed to scale with your project demands. Our contract staffing ensures you have the right talent exactly when you need it.", csBtsP2: "Reduce overhead and minimize payroll complexities. We handle the administrative burden of contract employees so you can focus entirely on project execution and business growth.", csBtsP3: "Experience staffing agility that adapts to market fluctuations. Let us seamlessly integrate contract professionals into your team, ensuring continuous excellence and operational efficiency.", csWhyTitle: "WHY CHOOSE US", csWhyIntro: "Choose us for contract staffing that goes beyond the conventional. Experience the difference of flexible talent acquisition, rapid onboarding, and workforce strategies designed exclusively for your project's success.", csBenefit1Title: "Agile Talent Deployment", csBenefit1Desc: "We don't believe in long delays. Our approach ensures rapid sourcing and onboarding of contract professionals to meet immediate project deadlines.", csBenefit2Title: "Comprehensive Payroll Management", csBenefit2Desc: "Our commitment extends beyond sourcing. We handle all compliance, payroll, and HR administration for contract staff, reducing your operational burden.", csBenefit3Title: "Scalable Staffing Strategies", csBenefit3Desc: "Recognizing that project needs fluctuate, we craft scalable strategies. Whether it's a seasonal spike or a specific project phase, we adapt to maximize efficiency.", csInsightTitle: "Contract Staffing Insights", csInsight1Title: "Brief Introduction to Contract Staffing", csInsight1Desc: "Contract Staffing is when businesses hire an agency to provide experts for a specific duration or project...", csInsight2Title: "Need of Contract Staffing", csInsight2Desc: "Maintaining flexibility while keeping up with sudden demand spikes is very important. This makes.....", csInsight3Title: "Benefits of getting Contract Staffing", csInsight3Desc: "There are tons of advantages to getting Contract Staffing from us, including cost savings and agility.", csInsight4Title: "How can Contract Staffing work at Your Advantage?", csInsight4Desc: "Staying lean and agile is important for every organization. And having a strong temporary workforce...", esHeroTitle: "Executive Search Solutions in UAE", esHeroText: "Looking for visionary leaders to steer your organization? Smaar Elysium provides confidential, high-quality executive search services across all industries in UAE.", esChooseTitle: "Choose the best for you", esChooseP1: "Step into the realm of our tailored executive search services, where precision converges with discretion for an unparalleled leadership acquisition experience. Our core strengths redefine executive recruitment with a focus on confidential talent mapping, rigorous leadership assessments, and personalized C-suite strategies.", esChooseP2: "In today's competitive business landscape, the right leaders are the most critical determinant of your organization's success.", esChooseP3: "Our executive search services excel in delivering customized leadership solutions that address the unique vision and cultural requirements of your organization. In this era of swift business transformations, attracting the right executive talent holds greater significance than ever before.", esChooseP4: "Recognizing the transformative role senior leaders play in driving business growth, our expert consulting team comprehensively supports your executive hiring needs. We ensure your company gains access to a distinguished pool of high-caliber professionals aligned with your strategic goals.", esChooseP5: "Allow us to serve as your trusted partner in building a world-class leadership team, empowering your business to thrive and achieve sustainable excellence.", esGrid4: "LEADERS", esBtsTitle: "Build Your Leadership Team With Our Executive Search", esBtsP1: "Unlocking potential starts with our commitment to understanding your organizational culture and strategic vision. Our tailored executive search process ensures a seamless match between your leadership requirements and the exceptional individuals we identify through our global network.", esBtsP2: "Rigorous leadership assessment is the cornerstone of our approach. We go far beyond credentials, evaluating strategic thinking, cultural alignment, and long-term impact. Our meticulous methodology ensures that only the most qualified leaders make it to your shortlist.", esBtsP3: "Experience executive recruitment services that elevate your leadership team to new heights. Let us navigate the complexities, so you can focus on driving strategic success.", esWhyTitle: "WHY CHOOSE US", esWhyIntro: "Choose us for executive search that goes beyond the conventional. Experience the difference of discreet talent identification, rigorous leadership evaluation, and strategic placement solutions designed exclusively for your organization's success.", esBenefit1Title: "Confidential Talent Mapping", esBenefit1Desc: "We conduct discreet, structured outreach to passive senior candidates, maintaining absolute confidentiality for both your organization and the candidates we engage on your behalf.", esBenefit2Title: "Rigorous Leadership Assessment", esBenefit2Desc: "Our commitment goes beyond sourcing. We evaluate leadership competencies, cultural alignment, and long-term strategic fit using proven frameworks and psychometric tools.", esBenefit3Title: "Bespoke Executive Strategies", esBenefit3Desc: "Every executive search is unique. We craft bespoke search strategies aligned to your industry, organizational culture, and growth vision — ensuring the right leader for the right moment.", esInsightTitle: "Executive Search Insights", esInsight1Title: "Brief Introduction to Executive Search", esInsight1Desc: "Executive Search is a specialized recruitment service focused on identifying and placing senior leaders and C-suite executives for organizations...", esInsight2Title: "The Need for Executive Search", esInsight2Desc: "Finding senior leadership through conventional job boards rarely works. This is why organizations across UAE partner with executive search firms...", esInsight3Title: "Benefits of Executive Search Services", esInsight3Desc: "The advantages of dedicated executive search include access to passive talent, faster placements, higher retention, and a stronger organizational culture.", esInsight4Title: "How Executive Search Works at Your Advantage?", esInsight4Desc: "The competitive edge in business comes from exceptional leadership. A strategic executive search partner ensures your leadership pipeline is always future-ready...", esFaqQ1: "What is executive search?", esFaqA1: "Executive search is a specialized recruitment service used to source candidates for senior-level leadership roles.", esFaqQ2: "How is it different from regular recruitment?", esFaqA2: "It involves a proactive headhunting approach, focusing on passive candidates who may not be actively seeking new roles.", esFaqQ3: "What is your search methodology?", esFaqA3: "Our methodology includes deep industry research, network outreach, and a multi-stage vetting process to ensure cultural and technical fit.", esFaqQ4: "How long does a search take?", esFaqA4: "Executive searches typically take between 6 to 12 weeks, depending on the role complexity and industry niche.", esFaqQ5: "How do you ensure confidentiality?", esFaqA5: "We maintain strict confidentiality throughout the process, ensuring that sensitive information about both the client and the candidate is protected.", esFaqQ6: "What industries do you specialize in?", esFaqA6: "We specialize in Construction, Energy, Technology, and Financial Services across the UAE region.", esIntroTitle: "CHOOSE THE BEST FOR YOU", esIntroText: "Welcome to our Executive Search Services – where exceptional leadership begins. Our consultants are industry specialists who understand what it takes to find and attract the world's best executives.", hrHeroTitle: "HR Outsourcing Solutions in UAE", hrHeroText: "Looking to streamline your HR operations and reduce overhead? Smaar Elysium provides comprehensive HR Outsourcing services that keep your workforce compliant, motivated, and productive across UAE.", hrChooseTitle: "Choose the best for you", hrChooseP1: "Step into the realm of our tailored HR Outsourcing services, where compliance converges with operational excellence for an unparalleled human resources experience. Our core strengths redefine HR management with a focus on payroll accuracy, regulatory compliance, and people-first strategies.", hrChooseP2: "In the ever-evolving UAEn business environment, effective management of your HR function is a critical determinant of organizational success and employee satisfaction.", hrChooseP3: "Our HR Outsourcing services excel in delivering customized solutions crafted to suit the unique regulatory and cultural requirements of your organization. In this era of rapid change, maintaining a compliant and engaged workforce holds greater significance than ever before.", hrChooseP4: "Recognizing the strategic role that structured HR management plays in driving business performance, our expert team comprehensively manages your human resources needs — from day one through to long-term retention.", hrChooseP5: "Allow us to serve as your dedicated HR partner, empowering your business to reduce costs, eliminate compliance risks, and build a thriving workplace culture.", hrGrid4: "HR SYSTEM", hrBtsTitle: "Build Your HR Foundation With Our Outsourcing Services", hrBtsP1: "Unleash organizational efficiency by outsourcing your entire HR function to our specialist team. From payroll processing and leave management to MOHRE compliance and employee relations, we take full ownership of your human resources operations.", hrBtsP2: "Eliminate compliance risks and administrative burden. Our dedicated HR professionals stay current with UAEn labour law amendments ensuring your company is always protected, audit-ready, and aligned with the best industry practices.", hrBtsP3: "Experience HR management that transforms your workforce into a competitive advantage. Let us handle the complexities of people operations, so you can focus entirely on growing your business.", hrWhyTitle: "WHY CHOOSE US", hrWhyIntro: "Choose us for HR Outsourcing that goes beyond administrative processing. Experience the difference of strategic HR partnership, guaranteed compliance, and a people-first approach designed exclusively for your organization's long-term success.", hrBenefit1Title: "End-to-End HR Management", hrBenefit1Desc: "We don't just process payroll — we manage your full HR ecosystem. From onboarding and policy implementation to performance reviews and offboarding, we own every HR touchpoint.", hrBenefit2Title: "UAEn Labour Law Compliance", hrBenefit2Desc: "Our HR specialists continuously monitor Ministry of Labour regulations and UAEn labour law updates. We proactively audit your HR practices and implement corrective measures before issues arise.", hrBenefit3Title: "Scalable HR Solutions", hrBenefit3Desc: "Whether you're a growing startup or an enterprise, our HR Outsourcing services scale with your needs. We adapt our service scope, team size, and technology tools as your workforce evolves.", hrFaqQ1: "What HR functions can I outsource?", hrFaqA1: "You can outsource a wide range of HR functions including payroll processing, benefits administration, compliance management, recruitment, onboarding, and employee relations.", hrFaqQ2: "What are the main benefits of HR outsourcing?", hrFaqA2: "Key benefits include cost reduction, improved compliance with labor laws, access to HR expertise, increased efficiency, and the ability to focus on core business activities.", hrFaqQ3: "How does outsourcing affect employee morale?", hrFaqA3: "When managed effectively, HR outsourcing can improve employee morale by ensuring consistent HR policies, timely payroll, and professional support, allowing internal teams to focus on strategic initiatives.", hrFaqQ4: "Is my data secure with an outsourced HR provider?", hrFaqA4: "Reputable HR outsourcing providers prioritize data security, employing advanced encryption, secure servers, and strict confidentiality agreements to protect your sensitive employee data.", hrFaqQ5: "Can HR outsourcing be customized for my business?", hrFaqA5: "Yes, our HR outsourcing solutions are highly customizable. We work closely with you to understand your specific needs and tailor our services to align with your business objectives and culture.", hrFaqQ6: "How do you ensure compliance with UAE labor laws?", hrFaqA6: "Our team of HR experts stays continuously updated on the latest UAE labor laws and regulations. We proactively implement compliance measures and provide guidance to ensure your business remains fully compliant.", hrIntroTitle: "CHOOSE THE BEST FOR YOU", hrIntroText: "Welcome to our HR Outsourcing Services — where operational efficiency meets workforce excellence. Our HR experts are deeply embedded in UAEn labour regulations and deliver seamless, end-to-end human resources solutions.", hrInsightTitle: "HR Outsourcing Insights", hrInsight1Title: "Brief Introduction to HR Outsourcing", hrInsight1Desc: "HR Outsourcing is when businesses delegate their human resources functions to an external provider, enabling them to focus on core operations...", hrInsight2Title: "The Need for HR Outsourcing", hrInsight2Desc: "Managing HR in-house demands significant time, expertise, and resources. This is why organizations across UAE choose to outsource their HR functions to specialists...", hrInsight3Title: "Benefits of HR Outsourcing", hrInsight3Desc: "The key benefits of HR Outsourcing include reduced operational costs, improved compliance, access to specialist expertise, and a stronger focus on business productivity.", hrInsight4Title: "How HR Outsourcing Drives Business Growth", hrInsight4Desc: "By delegating HR operations to a trusted partner, companies unlock more time for strategic planning, reduce risk, and build a more engaged, productive workforce...", csHeroTitle: "Contract Staffing Solutions in UAE", csHeroText: "Looking for flexible workforce solutions tailored to your project needs? Smaar Elysium provides top-tier contract staffing for all industries.", csChooseTitle: "Choose the best for you", csChooseP1: "Step into the realm of our tailored contract staffing services, where speed converges with precision for an unparalleled workforce experience. Our core strengths redefine temporary staffing with a focus on agile deployment, meticulous candidate screening, and scalable contract strategies.", csChooseP2: "In the ever-evolving business environment, effective management of your flexible workforce is a key determinant of success.", csChooseP3: "Our contract staffing services excel in delivering customized temporary solutions crafted to suit the unique project requirements of your organization. In this era of swift transformations, accessing skilled contract talent holds greater significance than ever before.", csChooseP4: "Recognizing the pivotal role a qualified flexible workforce plays in fostering business agility, our committed team comprehensively caters to your contract staffing needs. We ensure your company gains access to a diverse pool of talented professionals who are aligned with your project timelines.", csChooseP5: "Allow us to serve as your strategic ally in constructing a proficient and motivated contract team, empowering your business to thrive amidst fierce competition in the market.", csLogoSlogan: "Your Trusted work force Partner", csGrid1: "GO BEYOND THE", csGrid2: "ORDINARY", csGrid3: "FIND THE PRECISE", csGrid4: "CONTRACTORS", csBtsTitle: "Build Your Flexible Workforce With Our Services", csBtsP1: "Unleash your business potential with short-term, contract-based staffing solutions designed to scale with your project demands. Our contract staffing ensures you have the right talent exactly when you need it.", csBtsP2: "Reduce overhead and minimize payroll complexities. We handle the administrative burden of contract employees so you can focus entirely on project execution and business growth.", csBtsP3: "Experience staffing agility that adapts to market fluctuations. Let us seamlessly integrate contract professionals into your team, ensuring continuous excellence and operational efficiency.", csWhyTitle: "WHY CHOOSE US", csWhyIntro: "Choose us for contract staffing that goes beyond the conventional. Experience the difference of flexible talent acquisition, rapid onboarding, and workforce strategies designed exclusively for your project's success.", csBenefit1Title: "Agile Talent Deployment", csBenefit1Desc: "We don't believe in long delays. Our approach ensures rapid sourcing and onboarding of contract professionals to meet immediate project deadlines.", csBenefit2Title: "Comprehensive Payroll Management", csBenefit2Desc: "Our commitment extends beyond sourcing. We handle all compliance, payroll, and HR administration for contract staff, reducing your operational burden.", csBenefit3Title: "Scalable Staffing Strategies", csBenefit3Desc: "Recognizing that project needs fluctuate, we craft scalable strategies. Whether it's a seasonal spike or a specific project phase, we adapt to maximize efficiency.", esHeroTitle: "Executive Search Solutions in UAE", esHeroText: "Looking for visionary leaders to steer your organization? Smaar Elysium provides confidential, high-quality executive search services across all industries in UAE.", esChooseTitle: "Choose the best for you", esChooseP1: "Step into the realm of our tailored executive search services, where precision converges with discretion for an unparalleled leadership acquisition experience. Our core strengths redefine executive recruitment with a focus on confidential talent mapping, rigorous leadership assessments, and personalized C-suite strategies.", esChooseP2: "In today's competitive business landscape, the right leaders are the most critical determinant of your organization's success.", esChooseP3: "Our executive search services excel in delivering customized leadership solutions that address the unique vision and cultural requirements of your organization. In this era of swift business transformations, attracting the right executive talent holds greater significance than ever before.", esChooseP4: "Recognizing the transformative role senior leaders play in driving business growth, our expert consulting team comprehensively supports your executive hiring needs. We ensure your company gains access to a distinguished pool of high-caliber professionals aligned with your strategic goals.", esChooseP5: "Allow us to serve as your trusted partner in building a world-class leadership team, empowering your business to thrive and achieve sustainable excellence.", esLogoSlogan: "Your Trusted work force Partner", esGrid1: "GO BEYOND THE", esGrid2: "ORDINARY", esGrid3: "FIND THE PRECISE", esGrid4: "LEADERS", esBtsTitle: "Build Your Leadership Team With Our Executive Search", esBtsP1: "Unlocking potential starts with our commitment to understanding your organizational culture and strategic vision. Our tailored executive search process ensures a seamless match between your leadership requirements and the exceptional individuals we identify through our global network.", esBtsP2: "Rigorous leadership assessment is the cornerstone of our approach. We go far beyond credentials, evaluating strategic thinking, cultural alignment, and long-term impact. Our meticulous methodology ensures that only the most qualified leaders make it to your shortlist.", esBtsP3: "Experience executive recruitment services that elevate your leadership team to new heights. Let us navigate the complexities, so you can focus on driving strategic success.", esWhyTitle: "WHY CHOOSE US", esWhyIntro: "Choose us for executive search that goes beyond the conventional. Experience the difference of discreet talent identification, rigorous leadership evaluation, and strategic placement solutions designed exclusively for your organization's success.", esBenefit1Title: "Confidential Talent Mapping", esBenefit1Desc: "We conduct discreet, structured outreach to passive senior candidates, maintaining absolute confidentiality for both your organization and the candidates we engage on your behalf.", esBenefit2Title: "Rigorous Leadership Assessment", esBenefit2Desc: "Our commitment goes beyond sourcing. We evaluate leadership competencies, cultural alignment, and long-term strategic fit using proven frameworks and psychometric tools.", esBenefit3Title: "Bespoke Executive Strategies", esBenefit3Desc: "Every executive search is unique. We craft bespoke search strategies aligned to your industry, organizational culture, and growth vision — ensuring the right leader for the right moment.", hrHeroTitle: "HR Outsourcing Solutions in UAE", hrHeroText: "Looking to streamline your HR operations and reduce overhead? Smaar Elysium provides comprehensive HR Outsourcing services that keep your workforce compliant, motivated, and productive across UAE.", hrChooseTitle: "Choose the best for you", hrChooseP1: "Step into the realm of our tailored HR Outsourcing services, where compliance converges with operational excellence for an unparalleled human resources experience. Our core strengths redefine HR management with a focus on payroll accuracy, regulatory compliance, and people-first strategies.", hrChooseP2: "In the ever-evolving UAEn business environment, effective management of your HR function is a critical determinant of organizational success and employee satisfaction.", hrChooseP3: "Our HR Outsourcing services excel in delivering customized solutions crafted to suit the unique regulatory and cultural requirements of your organization. In this era of rapid change, maintaining a compliant and engaged workforce holds greater significance than ever before.", hrChooseP4: "Recognizing the strategic role that structured HR management plays in driving business performance, our expert team comprehensively manages your human resources needs — from day one through to long-term retention.", hrChooseP5: "Allow us to serve as your dedicated HR partner, empowering your business to reduce costs, eliminate compliance risks, and build a thriving workplace culture.", hrLogoSlogan: "Your Trusted work force Partner", hrGrid1: "GO BEYOND THE", hrGrid2: "ORDINARY", hrGrid3: "BUILD THE IDEAL", hrGrid4: "HR SYSTEM", hrBtsTitle: "Build Your HR Foundation With Our Outsourcing Services", hrBtsP1: "Unleash organizational efficiency by outsourcing your entire HR function to our specialist team. From payroll processing and leave management to MOHRE compliance and employee relations, we take full ownership of your human resources operations.", hrBtsP2: "Eliminate compliance risks and administrative burden. Our dedicated HR professionals stay current with UAEn labour law amendments ensuring your company is always protected, audit-ready, and aligned with the best industry practices.", hrBtsP3: "Experience HR management that transforms your workforce into a competitive advantage. Let us handle the complexities of people operations, so you can focus entirely on growing your business.", hrWhyTitle: "WHY CHOOSE US", hrWhyIntro: "Choose us for HR Outsourcing that goes beyond administrative processing. Experience the difference of strategic HR partnership, guaranteed compliance, and a people-first approach designed exclusively for your organization's long-term success.", hrBenefit1Title: "End-to-End HR Management", hrBenefit1Desc: "We don't just process payroll — we manage your full HR ecosystem. From onboarding and policy implementation to performance reviews and offboarding, we own every HR touchpoint.", hrBenefit2Title: "UAEn Labour Law Compliance", hrBenefit2Desc: "Our HR specialists continuously monitor Ministry of Labour regulations and UAEn labour law updates. We proactively audit your HR practices and implement corrective measures before issues arise.", hrBenefit3Title: "Scalable HR Solutions", hrBenefit3Desc: "Whether you're a growing startup or an enterprise, our HR Outsourcing services scale with your needs. We adapt our service scope, team size, and technology tools as your workforce evolves.", recHeroTitle: "Recruitment Solutions in UAE", recHeroText: "Looking for exceptional talent to join your permanent team? Smaar Elysium provides comprehensive recruitment services across all industries in UAE.", recChooseTitle: "Choose the best for you", recChooseP1: "Step into the realm of our tailored recruitment services, where speed converges with precision for an unparalleled talent acquisition experience. Our core strengths redefine permanent hiring with a focus on sourcing excellence, rigorous candidate screening, and culture-aligned placement strategies.", recChooseP2: "In today's competitive business environment, having the right talent on your permanent team is a key determinant of long-term success.", recChooseP3: "Our recruitment services excel in delivering customized permanent staffing solutions crafted to suit the unique operational requirements of your organization. In this era of rapid growth, accessing top-tier talent holds greater significance than ever before.", recChooseP4: "Recognizing the pivotal role a high-quality workforce plays in fostering business innovation, our committed team comprehensively caters to your recruitment needs. We ensure your company gains access to a diverse pool of talented professionals who are aligned with your organizational vision.", recLogoSlogan: "Your Trusted work force Partner", recGrid1: "GO BEYOND THE", recGrid2: "ORDINARY", recGrid3: "FIND THE PRECISE", recGrid4: "PROFESSIONALS", recBtsTitle: "Build Your Efficient Team With Our Recruitment Services", recBtsP1: "Unleash your business potential with permanent recruitment solutions designed to scale with your organization. Our recruitment ensures you have the right talent for long-term growth.", recBtsP2: "Reduce time-to-hire and minimize recruitment costs. We handle the entire sourcing and screening process so you can focus entirely on your core business strategies.", recBtsP3: "Experience recruitment excellence that adapts to your culture. Let us seamlessly integrate top-tier professionals into your team, ensuring continuous performance and operational excellence.", recWhyTitle: "WHY CHOOSE US", recWhyIntro: "Choose us for recruitment that goes beyond the conventional. Experience the difference of precision sourcing, rapid screening, and talent strategies designed exclusively for your organization's success.", recBenefit1Title: "Precision Talent Sourcing", recBenefit1Desc: "We don't believe in generic profiles. Our approach ensures we source and present candidates who meet your exact technical and cultural requirements.", recBenefit2Title: "Rigorous Candidate Screening", recBenefit2Desc: "Our commitment extends beyond sourcing. We conduct multi-stage evaluations, including skills assessment and background checks, to ensure quality.", recBenefit3Title: "Scalable Talent Strategies", recBenefit3Desc: "Recognizing that hiring needs fluctuate, we craft scalable recruitment strategies. Whether it's a single critical hire or a volume project, we adapt to maximize efficiency.", faqRec1Q: "What makes your talent acquisition unique?", faqRec1A: "Our recruitment approach is characterized by a customized strategy that aligns the right professionals with your specific company goals and culture.", faqRec2Q: "How thorough is your candidate screening?", faqRec2A: "We follow a detailed evaluation process that includes skill assessments, background checks, and in-depth interviews to ensure only qualified candidates progress.", faqRec3Q: "What sets your recruitment strategies apart?", faq3A: "Our recruitment methods combine market insights, advanced sourcing techniques, and industry expertise to attract top-tier talent efficiently.", faqRec4Q: "How do you ensure a match between candidates and our requirements?", faqRec4A: "We carefully analyze job aspirations and company culture to identify candidates whose skills, experience, and values align with your needs.", faqRec5Q: "Can you elaborate on the concept of personalized recruitment?", faqRec5A: "Personalized recruitment means tailoring our hiring solutions to fit your business objectives, ensuring a more precise and long-lasting placement.", faqRec6Q: "How do you handle challenges in the recruitment process?", faqRec6A: "We proactively address hiring challenges by maintaining clear communication, leveraging industry networks, and applying strategic problem-solving at every stage.", footerDesc: "Providing premium manpower solutions since 2003. We are leaders in recruitment, staffing, and HR outsourcing in the UAE.", sectorsTitle: "Sectors", mepSolutions: "MEP Solutions", dubai: "Dubai", rightsReserved: "All rights reserved.", designedBy: "Designed by The Patterns Company", aboutTitle: "About Us", whoWeAre: "Who We Are", aboutDesc: "Smaar Elysium is a premier manpower supply and staffing agency based in UAE, dedicated to connecting exceptional talent with outstanding organizations across diverse industries throughout the country.", getInTouch: "Get in Touch", ourJourney: "Our Journey", journeyP1: "Smaar Elysium began with a singular vision — to build a world-class manpower supply company that truly understands the dynamic needs of businesses operating across UAE. Over the years, we have grown from a focused staffing consultancy into a comprehensive workforce solutions partner trusted across multiple industries.", journeyP2: "With more than 5 years of combined expertise, our leadership team has navigated diverse market conditions and built a robust talent network that spans skilled professionals, semi-skilled workers, and executive-level leaders. We pride ourselves on blending deep local market knowledge with industry best practices — delivering results that consistently exceed expectations.", journeyP3: "Today, Smaar Elysium stands as one of UAE's most trusted names in manpower supply, contract staffing, HR outsourcing, and executive search — serving clients across construction, facilities management, logistics, security, and more.", yearsExp: "Years of Experience", profPlaced: "Professionals Placed", activeClients: "Active Clients", indServed: "Industries Served", ourMission: "Our Mission", missionDesc: "To be UAE's most reliable and forward-thinking manpower partner — delivering tailored workforce solutions that empower businesses to scale confidently. We are committed to connecting the right people with the right opportunities through rigorous selection, compliance excellence, and a deep understanding of every client's unique operational requirements.", ourVision: "Our Vision", visionDesc: "To emerge as UAE's most trusted end-to-end human capital solutions provider — a name synonymous with quality talent, seamless compliance, and transformative workforce strategies. We aspire to be the partner every ambitious organization turns to when building teams that drive sustainable growth.", whyChooseUs: "Why Choose Us", coreValues: "Our Core Values", valuesSubtitle: "The principles that guide every decision, every placement, and every partnership at Smaar Elysium.", commitment: "Commitment", commitmentDesc: "We are unwaveringly dedicated to delivering results — placing the right talent with precision, speed, and professionalism every single time.", agility: "Agility", agilityDesc: "We respond swiftly to the evolving demands of the market, offering flexible workforce solutions that adapt to your business rhythms.", partnership: "Partnership", partnershipDesc: "We see ourselves as an extension of your team — investing in your success with collaborative, long-term relationships built on shared goals.", transparency: "Transparency", transparencyDesc: "Clear communication, honest assessments, and complete openness in every engagement — building the trust that underpinning great partnerships.", compliance: "Compliance", complianceDesc: "We navigate UAEn labour laws and regulatory frameworks with expertise, ensuring every placement is fully compliant and risk-free for your organization.", peopleFirst: "People First", peopleFirstDesc: "We care genuinely about the candidates we place and the clients we serve — creating positive outcomes for every person and organization we work with.", wwdSubtitle: "Comprehensive Workforce Solutions", wwdDesc: "From blue-collar manpower supply to executive-level recruitment, we offer a full suite of workforce solutions designed for UAEn businesses across all major industries.", manpowerSupply: "Manpower Supply", manpowerSupplyDesc: "Skilled, semi-skilled, and unskilled workforce deployed efficiently to match your operational timelines and site requirements.", recruitmentTalent: "Recruitment & Talent Acquisition", recruitmentTalentDesc: "End-to-end permanent recruitment services powered by an extensive pan-UAE talent network and a rigorous multi-stage selection process.", contractStaffing: "Contract Staffing", contractStaffingDesc: "Flexible short-term and long-term contract staffing solutions that give you skilled professionals without the overhead of permanent hires.", exSearch: "Executive Search", exSearchDesc: "Confidential, high-calibre leadership hiring — identifying and securing top executive talent that drives your organizational vision forward.", hrOut: "HR Outsourcing", hrOutDesc: "End-to-end HR management services including payroll processing, compliance management, and employee lifecycle administration.", secStaffing: "Security Staffing", secStaffingDesc: "SIRA-licensed security personnel deployed for static guard duties, mobile patrols, access control, and event security across UAE.", insightsTitle: "Smaar Elysium Insights", insight1Title: "Understanding the UAEn Workforce Landscape", insight1Desc: "UAE's diversified and rapidly expanding economy creates unique manpower demands across construction, technology, hospitality, and manufacturing — and we are perfectly positioned to meet them all.", insight2Title: "Why Partnering With a Staffing Agency Matters", insight2Desc: "For businesses expanding across UAE, a trusted local staffing partner provides critical advantages: faster hiring cycles, compliance assurance, and access to a pre-vetted talent pool.", insight3Title: "Navigating UAEn Labour Law Compliance", insight3Desc: "UAEn employment regulations are nuanced and constantly evolving. Our compliance experts ensure every hire meets current Ministry of Labour requirements — zero risk, full peace of mind.", insight4Title: "Building High-Performance Teams in UAE", insight4Desc: "A high-performing team is the true engine of business growth. Smaar Elysium's structured recruitment methodology ensures you hire for both skillset and cultural alignment — every time.", ssSEOTitle: "Security Staffing Solutions in UAE | Licensed Security Personnel | Smaar Elysium", ssSEODesc: "Smaar Elysium provides licensed, trained security personnel for businesses across UAE. We deploy static guards, mobile patrol officers, CCTV operators, and event security teams with full compliance.", ssHeroTitle: "Security Staffing Solutions in UAE", ssHeroText: "Looking for professional, licensed security personnel for your business or facility? Smaar Elysium provides trusted, industry-compliant security staffing solutions across UAE.", ssChooseTitle: "CHOOSE THE BEST FOR YOU", ssChooseP1: "Welcome to our Security Staffing Solutions — where safety meets professionalism. Our security experts are fully licensed, extensively trained, and equipped to protect your people, assets, and premises 24/7.", ssCbsP1: "Step into the realm of our tailored security staffing services, where vigilance converges with professionalism for an unparalleled protection experience. Our core strengths redefine security deployment with a focus on meticulous personnel vetting, regulatory compliance, and customized security strategies.", ssCbsP2: "In today's high-stakes business environment, maintaining a safe and secure workplace is a fundamental requirement for operational continuity and stakeholder confidence.", ssCbsP3: "Our security staffing services excel in delivering customized protection solutions suited to the unique risk profile and operational requirements of your organization. In this era of evolving security threats, deploying qualified and licensed security personnel holds greater significance than ever before.", ssCbsP4: "Recognizing the critical role that professional security plays in protecting business assets and ensuring employee safety, our dedicated team comprehensively meets your security workforce needs with speed and precision.", ssCbsP5: "Allow us to serve as your trusted security partner — deploying vetted, licensed, and battle-ready professionals who form a reliable shield around your business operations.", ssLogoSlogan: "Your Trusted work force Partner", ssGrid1: "GO BEYOND THE", ssGrid2: "ORDINARY", ssGrid3: "DEPLOY THE FINEST", ssGrid4: "SECURITY STAFF", ssBtsTitle: "Build Your Security Workforce With Our Expert Solutions", ssBtsP1: "Protect what matters most with our dedicated security staffing service. We source, vet, and deploy SIRA-licensed security officers who are trained to respond effectively to threats, manage access control, and maintain a safe environment for your business operations.", ssBtsP2: "Compliance is at the core of everything we do. Every security professional we field carries valid regulatory certifications and has completed structured training in emergency response, conflict management, and first aid.", ssBtsP3: "Experience security deployment that gives you true peace of mind. Let us handle the complexity of security workforce management so that you can focus entirely on running your business with confidence.", ssWhyTitle: "WHY CHOOSE US", ssWhyIntro: "Choose us for security staffing that goes beyond ordinary guarding. Experience the difference of rigorous personnel vetting, guaranteed licensing compliance, and tailored security deployment strategies designed exclusively for your facility's safety needs.", ssBen1Title: "SIRA-Licensed Personnel", ssBen1Desc: "Every security officer we deploy is fully licensed and compliant with UAEn security regulations. We manage all licensing, renewals, and compliance documentation on your behalf.", ssBen2Title: "Rigorous Background Screening", ssBen2Desc: "Our commitment to safety begins at the screening stage. Every candidate undergoes thorough background checks, criminal verification, reference checks, and behavioral assessments before deployment.", ssBen3Title: "Rapid & Scalable Deployment", ssBen3Desc: "Security needs can arise without warning. We maintain a ready pool of trained security professionals, enabling rapid deployment for emergency coverage, events, and new site setups across UAE.", ssInsightTitle: "Security Solutions Insights", ssInsight1Title: "Brief Introduction to Security Staffing", ssInsight1Desc: "Security Staffing involves deploying licensed, trained professionals to safeguard your premises, people, and assets around the clock...", ssInsight2Title: "The Growing Need for Security Solutions", ssInsight2Desc: "As business environments become more complex, the demand for professional, licensed security personnel has grown significantly across UAE...", ssInsight3Title: "Benefits of Professional Security Staffing", ssInsight3Desc: "Professional security staffing reduces incidents, deters threats, protects assets, and gives management the confidence to operate at full capacity.", ssInsight4Title: "How Security Solutions Work at Your Advantage", ssInsight4Desc: "A robust security presence not only protects your facility but also boosts employee confidence, enhances your brand reputation, and ensures operational continuity...", pjSEOTitle: "Manpower Projects Portfolio | Staffing Case Studies in UAE | Smaar Elysium", pjSEODesc: "Explore Smaar Elysium's successful manpower supply projects across UAE — from construction mega-projects in Dubai to facility management in Bengaluru and manufacturing plant staffing in Pune.", pjHeroTitle: "Manpower Projects", pjHeroText: "Explore our successful manpower supply and staffing deployments across UAE — powering industries with the right workforce at the right time.", pjCard1Title: "Dubai Global Gateway – Construction Manpower", pjCard1Desc: "Supplied 350+ skilled civil workers, masons, electricians, and site supervisors for a landmark commercial high-rise project in Dubai's HITEC City corridor, completed on schedule...", pjCard2Title: "Tech Connect IT Park – Facility & Security Staffing", pjCard2Desc: "Deployed a dedicated team of 120+ facility management staff, housekeeping personnel, and licensed security officers across a 3-building IT campus in Bengaluru's Electronic City...", pjCard3Title: "Pune Industrial Plant – Manufacturing Workforce", pjCard3Desc: "Provided end-to-end contract staffing of 200+ semi-skilled and skilled production workers, quality control technicians, and equipment operators for a major auto-component plant in Pune's MIDC zone...", cuHeroTitle: "Contact Us", cuHeroSubtitle: "We're Here to Help", cuHeroText: "Have a question, a staffing requirement, or need a consultation? Our expert team at Smaar Elysium is ready to assist you with the right workforce solutions.", cuCallNow: "Call Us Now", cuMobile: "Mobile:", cuEmail: "Email:", cuWebsite: "smaarelysium.com", cuAddress: "Dubai", cuBookBtn: "Book Manpower", cuQuoteLabel: "Request a Quote", cuQuoteTitle: "Get a quick follow up!", cuQuoteDesc: "In case you have any queries or want to hire our adept manpower services, fill up this form, and our experts will get back to you!", cuFAQ1Q: "How can I contact Smaar Elysium for manpower services?", cuFAQ1A: "You can reach Smaar Elysium by calling 8885072259, emailing sales@smaarelysium.com, or filling out the contact form on our website. Our team responds promptly to all enquiries.", cuFAQ2Q: "Where is Smaar Elysium located?", cuFAQ2A: "Smaar Elysium is headquartered in Dubai, UAE, and provides manpower supply and staffing services across all major cities and industrial zones throughout the country.", cuFAQ3Q: "How quickly can Smaar Elysium deploy manpower after contact?", cuFAQ3A: "Depending on the role and location, Smaar Elysium can mobilize manpower within 24 to 72 hours for urgent requirements. For large-scale deployments, our team will provide a detailed mobilization timeline upon enquiry.", cuFAQ4Q: "Does Smaar Elysium provide manpower for both small and large projects?", cuFAQ4A: "Yes. We serve businesses of all sizes — from small site contracts requiring a few workers to large-scale industrial projects requiring hundreds of skilled professionals across multiple locations.", bmHeroTitle: "Hire the Best Talent", bmHeroSubtitle: "Streamlined manpower booking for your visionary projects across UAE.", bmStep1: "Trades", bmStep2: "Project", bmStep3: "Contact", bmSelectTrades: "Select Manpower Trades", bmSelectTradesDesc: "Choose the categories and quantities of workers you need.", bmProjectDetails: "Project Details", bmProjectDetailsDesc: "Tell us more about where and when you need the manpower.", bmLocation: "Location in UAE", bmDuration: "Expected Duration", bmDurationSelect: "Select Duration", bmDurationShort: "Short Term (< 1 month)", bmDurationMedium: "Medium Term (1-6 months)", bmDurationLong: "Long Term (> 6 months)", bmDurationOngoing: "Ongoing / Contractual", bmStartDate: "Expected Start Date", bmContactInfo: "Contact Information", bmContactInfoDesc: "How should our experts reach you to confirm the booking?", bmFullName: "Full Name", bmCompanyName: "Company Name", bmWorkEmail: "Work Email", bmPhoneNum: "Phone Number", bmAdditionalReq: "Additional Requirements (Optional)", bmAdditionalReqPlaceholder: "Mention any specific certifications or skills needed...", bmCompleteBtn: "Complete Booking Request", bmOrderSummary: "Order Summary", bmNoTrades: "No trades selected. Start adding personnel to proceed.", bmTotalManpower: "Total Manpower:", bmProposalInfo: "Our team will provide a customized commercial proposal based on your selection.", bmSuccessTitle: "Booking Request Sent!", bmSuccessText: "Thank you for choosing Smaar Elysium. Our experts will review your requirement and get back to you with a tailored quote within 24 hours.", bmSummaryTitle: "Booking Summary", bmSummaryTotalPersonnel: "Total Personnel:", bmSummaryLocation: "Project Location:", bmSummaryStart: "Requested Start:", bmBackHome: "Back to Home", catCivil: "Civil", catMEP: "MEP", catInfra: "Infrastructure", catOthers: "Others", bmTrade_mason: "Mason", bmTrade_carpenter: "Carpenter", bmTrade_steelFixer: "Steel Fixer", bmTrade_painter: "Painter", bmTrade_labor: "Labor", bmTrade_foreman: "Civil Foreman", bmTrade_electrician: "Electrician", bmTrade_plumber: "Plumber", bmTrade_hvac: "HVAC Technician", bmTrade_pipeFitter: "Pipe Fitter", bmTrade_welder: "Welder", bmTrade_ductMan: "Duct Man", bmTrade_heavyDriver: "Heavy Driver", bmTrade_operator: "Operator", bmTrade_rigger: "Rigger", bmTrade_flagman: "Flagman", bmTrade_surveyor: "Surveyor", bmTrade_security: "Security Guard", bmTrade_warehouse: "Warehouse Staff", bmTrade_cleaning: "Cleaning Staff", bmTrade_officeBoy: "Office Boy", homeSEOTitle: "Premier Manpower & Staffing Solutions in UAE | Smaar Elysium", homeSEODesc: "Smaar Elysium is UAE's leading manpower supply and staffing agency based in Dubai. Trusted by 500+ companies for recruitment, contract staffing, and HR outsourcing.", aboutSEOTitle: "About Smaar Elysium | Premier Manpower & Staffing Agency in UAE", aboutSEODesc: "Smaar Elysium is a trusted manpower supply and staffing agency based in UAE with 15+ years of expertise. We connect businesses with skilled professionals.", contactSEOTitle: "Contact Smaar Elysium | Manpower Supply & Staffing Agency in UAE", contactSEODesc: "Contact Smaar Elysium for manpower supply, contract staffing, executive search, HR outsourcing, and security staffing services across UAE.", bookSEOTitle: "Book Manpower Online | Request Skilled Workers in UAE | Smaar Elysium", bookSEODesc: "Book your required manpower online with Smaar Elysium. Select trade categories, specify quantities, and submit your workforce request.", ogBen1Title: "HSE Excellence", ogBen1Desc: "Unwavering commitment to zero-harm policies and international safety standards.", ogBen2Title: "Global Talent Pool", ogBen2Desc: "Access to specialized international experts for complex energy projects.", ogBen3Title: "Rapid Mobilization", ogBen3Desc: "Swift deployment of multi-disciplinary teams for shutdowns and turnarounds.", rcBen1Title: "Rail Specialized", rcBen1Desc: "Personnel with specific certifications and experience in railway infrastructure.", rcBen2Title: "Large Scale Capacity", rcBen2Desc: "Ability to mobilize hundreds of workers for massive transit expansion projects.", rcBen3Title: "Safety Certifications", rcBen3Desc: "Strict adherence to international and local railway safety standards.", rwFaqQ1: "What type of railway manpower do you supply?", rwFaqA1: "We provide track maintenance staff, signaling engineers, rolling stock technicians, and specialized civil engineers for railway infrastructure.", rwFaqQ2: "Do your workers have relevant safety certifications for rail projects?", rwFaqA2: "Yes, all our rail personnel are trained and certified in specific railway safety protocols and hold necessary UAE transit authority permits.", rwFaqQ3: "Can you provide specialized engineers for railway signaling systems?", rwFaqA3: "Absolutely. We supply highly specialized signaling and communications engineers with experience in modern metro and light rail systems.", rwFaqQ4: "Do you handle recruitment for both freight and passenger rail projects?", rwFaqA4: "Yes, our expertise covers both heavy freight rail networks and urban passenger transit systems across the UAE and GCC.", rwFaqQ5: "How quickly can you mobilize a track maintenance crew?", rwFaqA5: "We maintain a ready pool of experienced track workers and can typically mobilize maintenance crews within 7 to 14 days.", rwFaqQ6: "Are your railway technicians experienced with electrification projects?", rwFaqA6: "Yes, we provide OHE (Overhead Equipment) technicians and electrification engineers specialized in railway power systems.", scBen1Title: "Certified Welders", scBen1Desc: "6G and multi-process welders tested for structural integrity and high-pressure joints.", scBen2Title: "Precision Erection", scBen2Desc: "Expert steel erectors capable of handling complex structural frameworks with extreme accuracy.", scBen3Title: "Industrial Scale", scBen3Desc: "Consistent supply of workers for both fabrication yards and live on-site construction.", scFaqQ1: "What types of steel construction workers do you provide?", scFaqA1: "We provide 6G welders, structural steel erectors, metal fabricators, industrial painters, and QA/QC steel inspectors.", scFaqQ2: "Are your welders certified for UAE project standards?", scFaqA2: "Yes, all our welders undergo mandatory trade tests and hold certifications relevant to UAE building codes and industrial standards.", scFaqQ3: "Do you supply manpower for offshore steel structures?", scFaqA3: "Yes, we have experience supplying specialized steel workers for offshore platforms, rigs, and marine infrastructure.", scFaqQ4: "Can you provide a large team for structural steel erection in high-rise buildings?", scFaqA4: "Absolutely. We can mobilize large teams of skilled erectors and riggers specialized in high-rise structural steel assembly.", scFaqQ5: "How do you ensure the quality of welding work on site?", scFaqA5: "We provide highly experienced QA/QC inspectors and NDT technicians to monitor and verify the quality of all welding and structural connections.", scFaqQ6: "What industries do you serve with your steel construction manpower?", scFaqA6: "We serve the commercial building sector, industrial manufacturing, energy infrastructure, and large-scale public transit projects.", emBen1Title: "Multi-Disciplinary Expertise", emBen1Desc: "Personnel skilled in both electrical and mechanical systems for total project coverage.", emBen2Title: "Regulatory Compliance", emBen2Desc: "Workers fully compliant with DEWA, ADDC, and other UAE utility authority standards.", emBen3Title: "Technical Precision", emBen3Desc: "Focus on precision in complex wiring, HVAC installation, and industrial piping.", emFaqQ1: "What electro-mechanical roles do you provide manpower for?", emFaqA1: "We provide industrial electricians, HVAC technicians, mechanical engineers, plumbers, and specialized MEP supervisors.", emFaqQ2: "Are your electricians certified by local utility authorities?", emFaqA2: "Yes, our electricians are trade-tested and hold relevant certifications required by authorities like DEWA and SEWA.", emFaqQ3: "Can you handle MEP staffing for large-scale commercial developments?", emFaqA3: "Yes, we specialize in providing multi-disciplinary MEP teams for malls, hotels, hospitals, and luxury residential projects.", emFaqQ4: "Do you supply technicians for district cooling systems?", emFaqA4: "Absolutely. We have a dedicated pool of HVAC specialists experienced in district cooling plant installation and maintenance.", emFaqQ5: "How do you ensure the safety of electro-mechanical operations?", emFaqA5: "All our personnel are trained in Lock-Out Tag-Out (LOTO) procedures and follow strict occupational health and safety guidelines for electrical and mechanical work.", emFaqQ6: "Do you provide manpower for industrial machinery installation?", emFaqA6: "Yes, we supply mechanical fitters and millwrights specializing in the assembly and installation of complex industrial machinery.", fmBen1Title: "Predictive Maintenance", fmBen1Desc: "Technicians trained to identify and solve issues before they lead to asset downtime.", fmBen2Title: "Hospitality Standards", fmBen2Desc: "Soft services staff trained to meet the highest standards of luxury and corporate hospitality.", fmBen3Title: "Asset Protection", fmBen3Desc: "Focused on extending the lifespan of your physical assets through meticulous care.", fmFaqQ1: "What types of facility management staff do you provide?", fmFaqA1: "We provide both hard services (MEP technicians, HVAC specialist) and soft services (cleaning staff, security guards, concierges, and receptionists).", fmFaqQ2: "Are your cleaning staff trained in specialized hygiene standards?", fmFaqA2: "Yes, our cleaning crews undergo BICS-standard training and are well-versed in modern sanitization and hygiene protocols.", fmFaqQ3: "Do you provide security personnel with SIRA certification?", fmFaqA3: "Absolutely. We partner with licensed security providers to supply SIRA-certified guards and CCTV operators.", fmFaqQ4: "Can you provide 24/7 facility maintenance teams?", fmFaqA4: "Yes, we can organize rotating shifts to provide around-the-clock maintenance and emergency response for your facilities.", fmFaqQ5: "How do you handle soft services for luxury residential buildings?", fmFaqA5: "We provide hospitality-trained front-of-house staff, housekeeping, and concierge personnel specifically selected for premium residential environments.", fmFaqQ6: "Do you offer energy-focused maintenance solutions?", fmFaqA5: "Yes, our technicians are trained to optimize HVAC and electrical systems for better energy efficiency and reduced operational costs.", lgBen1Title: "Scalable Operations", lgBen1Desc: "Instantly scale your warehouse or transport team during peak seasons and promotional events.", lgBen2Title: "Safety Trained", lgBen2Desc: "Personnel trained in precise cargo handling and warehouse safety to reduce breakage.", lgBen3Title: "WMS Expert Labor", lgBen3Desc: "Workers experienced with modern Warehouse Management Systems for high accuracy.", logFaqQ1: "What logistics roles can you provide manpower for?", logFaqA1: "We supply heavy and light vehicle drivers, forklift operators, warehouse pickers/packers, inventory clerks, and customs documentation specialists.", logFaqQ2: "Do your drivers have legitimate UAE licenses for heavy vehicles?", logFaqA2: "Yes, all our drivers are fully licensed (License 3, 4, 6, 8) and have clean driving and safety records in the UAE.", logFaqQ3: "Can you provide a large workforce for seasonal warehouse demand?", logFaqA3: "Yes, we specialize in rapid scaling for e-commerce peaks, festivals, and major logistics events with pre-vetted, ready-to-deploy staff.", logFaqQ4: "Are your warehouse staff experienced with automated sorting systems?", logFaqA4: "Absolutely. We provide personnel familiar with modern automated warehousing, conveyor systems, and RF scanners.", logFaqQ5: "How do you manage the reliability of delivery personnel?", logFaqA5: "We conduct thorough background checks and provide performance monitoring to ensure consistent reliability and high service standards.", logFaqQ6: "Do you provide manpower for temperature-controlled storage facilities?", logFaqA6: "Yes, we have specialized teams experienced in the cold chain logistics required for food and pharmaceutical sectors.", mnBen1Title: "Production Efficiency", mnBen1Desc: "Skilled labor focused on maximizing output while maintaining uncompromising production standards.", mnBen2Title: "Lean Manufacturing", mnBen2Desc: "Personnel familiar with lean principles to reduce waste and optimize factory workflows.", mnBen3Title: "Safety First Culture", mnBen3Desc: "Unwavering commitment to factory safety and machine-handling protocols.", manFaqQ1: "What types of manufacturing roles do you fill?", manFaqA1: "We provide assembly line workers, CNC operators, quality control inspectors, industrial painters, and factory maintenance technicians.", manFaqQ2: "Are your CNC operators experienced with specific machine types?", manFaqA2: "Yes, we source operators skilled in various systems including Fanuc, Siemens, and Heidenhain for both milling and turning operations.", manFaqQ3: "How do you ensure the technical skills of manufacturing labor?", manFaqA3: "All industrial workers undergo practical trade tests and technical interviews to verify their competency before deployment to the factory floor.", manFaqQ4: "Can you provide workers for 24/7 rotating manufacturing shifts?", manFaqA4: "Yes, we handle all shift planning and welfare requirements for round-the-clock manufacturing operations across the UAE.", manFaqQ5: "Do you supply manpower for the food manufacturing sector?", manFaqA5: "Absolutely. We provide workers trained in HACCP and other food safety standards for production lines and packaging facilities.", manFaqQ6: "How do you handle worker safety in heavy industrial environments?", manFaqA6: "Safety is our priority. We provide comprehensive safety induction and ensure all workers follow strict factory PPE and machine-safety protocols.", mpBen1Title: "Technical Precision", mpBen1Desc: "Focus on precision in complex wiring, HVAC installation, and industrial piping.", mpBen2Title: "DEWA/ADDC Compliant", mpBen2Desc: "Personnel fully trained to meet the stringent standards of UAE utility and civil defense authorities.", mpBen3Title: "Fast-Track Mobilization", mpBen3Desc: "Quick deployment of multi-disciplinary MEP teams for critical project phases.", mepFaqQ1: "What specialized MEP roles do you provide?", mepFaqA1: "We provide HVAC engineers, industrial electricians, plumbing technicians, fire defense specialists, and MEP supervisors for large-scale projects.", mepFaqQ2: "Do your MEP technicians have experience with smart building systems?", mepFaqA2: "Yes, we supply ELV technicians and smart systems specialists for modern integrated building management and automation systems.", mepFaqQ3: "Can you provide large teams for electrical wiring in residential towers?", mepFaqA3: "Absolutely. We can mobilize large crews of hundreds of qualified electricians for volume wiring and fixture installations.", mepFaqQ4: "Are your fire-fighting technicians Civil Defense approved?", mepFaqA4: "Yes, we provide personnel experienced in installing and maintaining systems to strict Civil Defense codes and standards.", mepFaqQ5: "How do you manage the coordination between mechanical and electrical teams?", mepFaqA5: "Our experienced MEP supervisors and project coordinators ensure seamless communication and workflow between different technical disciplines on site.", mepFaqQ6: "Do you supply MEP manpower for hospital and healthcare projects?", mepFaqA6: "Yes, we have specialized teams experienced in the high-spec MEP requirements of modern healthcare facilities and research centers." }, AR: { aboutUs: "من نحن", projects: "المشاريع", phone: "٨٨٨٥٠٧٢٢٥٩", email: "smaarelysium.@gmail.com", services: "خدمات القوى العاملة", sectors: "القطاعات التي نخدمها", contactUs: "اتصل بنا", bookManpower: "حجز القوى العاملة", supply: "توريد القوى العاملة", recruitment: "توظيف", staffing: "التوظيف التعاقدي", search: "البحث التنفيذي", outsourcing: "تعهيد الموارد البشرية", security: "الحلول الأمنية", building: "عقد بناء", railway: "عقد السكة الحديد", steel: "إنشاءات الصلب", electric: "الميكانيكا الكهربائية", oilGas: "النفط والغاز", civil: "الإنشاءات المدنية", facility: "إدارة المرافق", logistics: "اللوجستيات", manufacture: "التصنيع", mep: "الميكانيكا والكهرباء والسباكة - MEP", heroTitle: "حلول متميزة للإنشاءات المدنية في الإمارات العربية المتحدة", heroText: "تمكين قطاع البناء بمواهب من الطراز الأول. سواء كنت بحاجة إلى مهندسين مهرة لأدوار دائمة أو قوة عاملة موثوقة لمشاريع مؤقتة ضخمة، فإننا نقدم التميز في الوقت المحدد وفي حدود الميزانية.", bookNow: "احجز الآن", expertise: "خبرتنا", compStaffing: "حلول توظيف شاملة", supplyInDubai: "شركة رائدة في مجال توريد القوى العاملة في دبي", supplyDesc: "كشريك توظيف بارز في الإمارات، نحن متخصصون في نشر القوى العاملة الماهرة وشبه الماهرة وغير الماهرة والمصممة خصيصاً لمعايير مشروعك. نحن نضمن أفراداً ذوي جودة لتحقيق الإنتاجية المثلى عبر التخصصات:", civilSupply: "توريد العمالة المدنية", civilSupplyDesc: "نشر مهنيي البناء الخبراء وقوات العمل القوية لضمان السلامة الهيكلية وسلامة الموقع وإتمام المشروع في الوقت المحدد لجميع مساعي الهندسة المدنية.", mechSupply: "توريد العمالة الميكانيكية", mechSupplyDesc: "توفير أفراد ميكانيكيين معتمدين مجهزين للتعامل مع التركيبات الصناعية المعقدة والصيانة الروتينية وعمليات التصنيع بدقة.", elecSupply: "توريد العمالة الكهربائية", elecSupplyDesc: "توريد كهربائيين مؤهلين ومتخصصين تقنيين لتنفيذ تركيبات كهربائية آمنة وفعالة ومتوافقة وصيانة شاقة عبر جميع أحجام المشاريع.", plumbSupply: "توريد عمالة السباكة", plumbSupplyDesc: "الحصول على مهنيي سباكة ذوي خبرة وفحص دقيق ماهرين في إدارة أنظمة الأنابيب والسوائل الصناعية والتجارية والسكنية الشاملة.", helperSupply: "توريد عمالة عامة (مساعدين)", helperSupplyDesc: "تقديم موظفي دعم عام موثوقين وقادرين جسدياً ومستعدين لمساعدة عمليات الموقع والتعامل مع اللوجستيات وتبسيط متطلبات موقعك اليومية.", cleaningSupply: "توريد عمالة التنظيف", cleaningSupplyDesc: "نشر عمال تنظيف مخصصين ومدربين ملتزمين بالحفاظ على بيئات نقية وصحية ومنظمة للمرافق التجارية والصناعية.", seamlessAcq: "اكتساب موارد سلس", seamlessAcqDesc: "انشر المواهب المثالية لمشاريعك على الفور. تضمن بوابتنا المبسطة حصولك على القوة العاملة الدقيقة التي تحتاجها، في أي مكان في جميع أنحاء الإمارات العربية المتحدة.", idReq: "تحديد المتطلبات", idReqDesc: "حدد الفئات المتميزة والمجالات التشغيلية المطلوبة لاحتياجات مشروعك الفورية.", specVolume: "تحديد الحجم والنطاق", specVolumeDesc: "حدد حجم القوة العاملة بالضبط، والمهن الدقيقة، والإطار الزمني للنشر المصمم لجدولك الزمني.", mobilize: "حشد القوة العاملة", mobilizeDesc: "أرسل طلبك التشغيلي واترك فريق النشر السريع لدينا ينسق بين الأفراد المثاليين على الفور.", opImpact: "تأثيرنا التشغيلي", activeDeploy: "عمليات النشر النشطة", activeDeployDesc: "إدارة ودعم القوى العاملة الضخمة حالياً عبر التطورات الرئيسية الهامة في الإمارات العربية المتحدة.", partnerOrg: "المنظمات الشريكة", partnerOrgDesc: "موثوق به من قبل الشركات والمجموعات الرائدة في التوظيف المتسق والمتوافق والموثوق.", projDelivered: "المشاريع المسلمة", projDeliveredDesc: "سجل حافل من الدعم الناجح للقوى العاملة والتنفيذ عبر قطاعات صناعية متنوعة للغاية.", profDeployed: "المهنيين المنتشرين", profDeployedDesc: "الحفاظ على شبكة واسعة وقابلة للتطوير بسرعة من المواهب المفحوصة بالكامل والمدربة والمتاحة على الفور.", indEmpower: "الصناعات التي نمكنها", indEmpowerDesc: "لأكثر من عقد من الزمان، كانت مؤسستنا هي محرك القوة العاملة وراء مشاريع ضخمة في دبي ومومباي والإمارات العربية المتحدة.", stratPartner: "شراكة استراتيجية", accelProj: "سرع مشاريعك اليوم", accelProjDesc: "هل أنت مستعد لتوسيع نطاق عملياتك بمواهب دقيقة؟ أرسل متطلباتك أدناه، وسيقوم مهندسو التوظيف لدينا بتصميم استراتيجية قوة عاملة تتماشى بسلاسة مع أهداف مؤسستك.", enterName: "أدخل الاسم", enterEmail: "أدخل البريد الإلكتروني", phoneNum: "رقم الهاتف", comments: "تعليقات", faqTitle: "الأسئلة الشائعة", faqSubtitle: "الأسئلة الأكثر شيوعاً.", commonFaqTitle: "الأسئلة الشائعة", commonFaqSubtitle: "الأسئلة الأكثر شيوعًا.", getInTouch: "اتصل بنا", requestStaff: "طلب موظفين", readMore: "اقرأ المزيد", requestQuote: "طلب عرض سعر", quickFollowUp: "احصل على متابعة سريعة!", fillForm: "في حال كان لديك أي استفسارات أو ترغب في استئجار خدماتنا الماهرة، املأ هذا النموذج، وسيعاود خبراؤنا الاتصال بك!", csInsightTitle: "رؤى التوظيف التعاقدي", csInsight1Title: "مقدمة موجزة عن التوظيف التعاقدي", csInsight1Desc: "التوظيف التعاقدي هو عندما تستأجر الشركات وكالة لتوفير خبراء لفترة محددة أو مشروع معين لفترة ثابتة. يتيح ذلك للشركات توسيع نطاق قوتها العاملة ديناميكياً.", csInsight2Title: "الحاجة إلى التوظيف التعاقدي", csInsight2Desc: "الحفاظ على المرونة مع مواكبة الارتفاعات المفاجئة في الطلب أمر مهم للغاية. هذا يجعل التوظيف التعاقدي حيوياً للقطاعات الديناميكية مثل البناء والهندسة.", csInsight3Title: "فوائد الحصول على التوظيف التعاقدي", csInsight3Desc: "هناك الكثير من المزايا للحصول على التوظيف التعاقدي منا، بما في ذلك توفير التكاليف الهائل، والرشاقة في الموقع، وتقليل المسؤوليات طويلة الأجل.", csInsight4Title: "كيف يمكن للتوظيف التعاقدي أن يعمل لصالحك؟", csInsight4Desc: "البقاء رشيقاً ومرناً أمر مهم لكل مؤسسة. القوة العاملة المستجيبة تسمح لك بتقديم عطاءات لمشاريع أكبر دون تكاليف ثابتة مفرطة.", msInsightTitle: "رؤى توريد القوى العاملة", msInsight1Title: "مقدمة موجزة عن توريد القوى العاملة", msInsight1Desc: "توريد القوى العاملة هو عندما تستأجر الشركات وكالة لتوفير فريق من الخبراء لمختلف الأدوار التشغيلية، مما يضمن استمرارية المشروع.", msInsight2Title: "الحاجة إلى توريد القوى العاملة", msInsight2Desc: "الحفاظ على إنتاج لا تشوبه شائبة مع مواكبة الجدول الزمني أمر مهم للغاية. وهذا يجعل توريد القوى العاملة ضرورياً للنجاح الصناعي والإنشائي.", msInsight3Title: "فوائد الحصول على توريد القوى العاملة", msInsight3Desc: "هناك الكثير من المزايا للحصول على توريد القوى العاملة منا. تشمل بعض هذه المزايا الحشد السريع، والمواهب المفحوصة، وإدارة الامتثال.", msInsight4Title: "كيف يمكن لتوريد القوى العاملة أن يعمل لصالحك؟", msInsight4Desc: "البقاء في المقدمة في السباق التنافسي أمر مهم لكل مؤسسة. ووجود قوة عاملة قوية وموثوقة هو المحرك الرئيسي للنمو.", faq1Q: "ما هو توريد القوى العاملة في دبي؟", faq1A: "يشير توريد القوى العاملة في دبي إلى عملية توفير العمالة الماهرة وغير الماهرة للشركات والمؤسسات في دبي، الإمارات العربية المتحدة.", faq2Q: "ما هي فوائد استخدام خدمات توريد القوى العاملة في دبي؟", faq2A: "تشمل الفوائد المرونة في توسيع نطاق القوة العاملة، وتقليل الأعباء الإدارية وأعباء الموارد البشرية، والوصول إلى مجموعة أوسع من المواهب، وتوفير التكاليف المتعلقة بالتوظيف ومعالجة التأشيرات.", faq3Q: "ما هي أنواع الصناعات في دبي التي تتطلب خدمات توريد القوى العاملة؟", faq3A: "تعتمد الصناعات المختلفة مثل البناء وإدارة المرافق والخدمات اللوجستية والتصنيع والرعاية الصحية والضيافة وتكنولوجيا المعلومات بشكل متكرر على خدمات توريد القوى العاملة لتلبية احتياجاتها التشغيلية.", bcHeroTitle: "قطاع عقود البناء", bcHeroText: "تقديم حلول متميزة ومصممة خصيصاً لعقود البناء والقوى العاملة الإنشائية لدفع المشاريع البنية التحتية الكبرى في جميع أنحاء الإمارات العربية المتحدة.", bcChooseTitle: "مقاولو البناء المحترفون", bcChooseP1: "تطوير الأفق الحديث للإمارات يتطلب قوة عاملة استباقية وعالية المهارة. نحن نوفر الأفراد اللازمين لتحويل رؤاك المعمارية الأكثر جرأة إلى واقع.", bcChooseP2: "من المهندسين الإنشائيين إلى مشغلي الآلات الثقيلة المدربين تدريباً عالياً، تم تصميم قوتنا العاملة لتسريع الجداول الزمنية والحفاظ على جودة بناء فائقة.", bcChooseP3: "مع التركيز الراسخ على السلامة والسلامة الهيكلية وإدارة الجدول الزمني، تضمن فرقنا أن مشاريعك تتجاوز المعايير التنظيمية.", bcLogoSlogan: "خبراء البناء", bcGrid1: "بناء", bcGrid2: "المستقبل", bcGrid3: "المناظر", bcGrid4: "الحضرية", bcBtsTitle: "انشر طاقم البناء الخاص بك", bcBtsP1: "سواء كنت بحاجة إلى فريق مخصص لإدارة الموقع أو حرفيين مهرة لمبنى تجاري شاهق، فنحن ننشر المواهب الدقيقة التي تحتاجها.", bcBtsP2: "يخضع كل مرشح لفحوصات سلامة صارمة وتقييمات فنية لضمان تنفيذ المشروع بسلاسة في الموقع.", bcDom1Title: "الهندسة المدنية", bcDom1Desc: "مهندسون متخصصون للتخطيط الأساسي والتصميم الإنشائي وتنفيذ المشاريع واسعة النطاق.", bcDom2Title: "إدارة الموقع", bcDom2Desc: "مديرو مواقع ومراقبون ذوو خبرة للإشراف على العمليات اليومية وفرض بروتوكولات السلامة.", bcDom3Title: "الآلات الثقيلة", bcDom3Desc: "مشغلو رافعات وحفارات وسائقو معدات ثقيلة معتمدون لأعمال الحفر والرفع.", bcDom4Title: "المهن الماهرة", bcDom4Desc: "بناؤون ونجارون وعمال سقالات ورسامون يقدمون تفاصيل تشطيب دقيقة على جميع الهياكل.", bcBen1Title: "السلامة أولاً", bcBen1Desc: "موظفون مدربون وفقاً لمعايير HSE الصارمة للحفاظ على مواقع بناء خالية من الحوادث.", bcBen2Title: "التحجيم السريع", bcBen2Desc: "توظيف مرن يتوسع بسهولة خلال مراحل البناء الحرجة.", bcBen3Title: "حرفيون خبراء", bcBen3Desc: "جميع الموظفين حرفيون مفحوصون ذوو خبرة في التطورات الكبرى في الشرق الأوسط.", scFaqQ1: "ما هي أنواع عمال الإنشاءات الفولاذية التي تقدمونها؟", scFaqA1: "نحن نوفر مجموعة واسعة من الأفراد المهرة بما في ذلك مصنعي الفولاذ الإنشائي، واللحامين المعتمدين، وعمال التركيب، وعمال الرفع، ومهندسي المشاريع المتخصصين في الإنشاءات الفولاذية.", scFaqQ2: "هل اللحامون والمصنعون لديكم معتمدون لمشاريع النفط والغاز المتخصصة؟", scFaqA2: "نعم، يحمل موظفونا الشهادات ذات الصلة مثل AWS/ASME للحام المداري، ولحام 6G، وغيرها من التقنيات المتخصصة المطلوبة لمشاريع النفط والغاز والصناعية عالية المخاطر.", scFaqQ3: "هل توفرون القوى العاملة لمشاريع البنية التحتية واسعة النطاق في الإمارات؟", scFaqA3: "بالتأكيد. لدينا خبرة واسعة في توفير فرق كبيرة للجسور، وناطحات السحاب التجارية، والملاعب، والمستودعات الصناعية في جميع أنحاء الإمارات.", scFaqQ4: "ما مدى سرعة نشر فرق الإنشاءات الفولاذية؟", scFaqA4: "اعتماداً على النطاق والتخصصات المطلوبة، يمكننا حشد الفرق الأساسية في غضون 7-14 يوماً من خلال مجموعتنا الحالية من الأفراد المفحوصين مسبقاً.", scFaqQ5: "ما هي معايير السلامة التي يتبعها عمال الصلب لديكم؟", scFaqA5: "السلامة أمر بالغ الأهمية في الفولاذ الإنشائي. يتم تدريب جميع عمالنا على السلامة على ارتفاعات، والرفع الثقيل، ويلتزمون بدقة ببروتوكولات السلامة الخاصة بهيئة كهرباء ومياه دبي/بلدية دبي وADSSC.", scFaqQ6: "هل يمكنكم توفير خبراء متخصصين في الرفع والتحميل؟", scFaqA6: "نعم، نحن نوفر عمال رفع معتمدين من المستويات 1 و 2 و 3، بالإضافة إلى مشغلي الرافعات ومشرفي الرفع الذين لديهم خبرة في تحديد المواقع المعقدة للفولاذ الإنشائي.", bcFaqQ1: "ما هي أنواع القوى العاملة لعقود البناء التي توفرونها؟", bcFaqA1: "نحن نوفر طاقم عمل شامل لعقود البناء بما في ذلك مديري المشاريع، ومساحي الكميات، ومهندسي المواقع، وفنيي MEP المتخصصين، وعمال البناء المهرة.", bcFaqQ2: "هل تتعاملون مع التوظيف للمباني السكنية والتجارية على حد سواء؟", bcFaqA2: "نعم، تغطي خبرتنا الأبراج السكنية، والفيلات الفاخرة، والمراكز التجارية، والمجمعات المكتبية، والتطورات متعددة الاستخدامات في جميع أنحاء الإمارات.", bcFaqQ3: "كيف تضمنون جودة مقاولي البناء الذين توفرونهم؟", bcFaqA3: "نجري تقييمات فنية صارمة، ونتحقق من خبرة المشاريع في الإمارات، ونتأكد من أن جميع المقاولين ملتزمون تماماً بمعايير ولوائح البلدية المحلية.", bcFaqQ4: "هل يمكنكم توفير عمال متخصصين للتشطيبات الفاخرة والتجهيزات الداخلية؟", bcFaqA4: "نعم، لدينا فريق متخصص من الحرفيين للتشطيبات الراقية، بما في ذلك عمال تركيب الرخام، والرسامين الزخرفيين، وعمال النجارة المهرة لمشاريع البناء المميزة.", bcFaqQ5: "هل توفرون القوى العاملة لعقود تجديد وصيانة المباني؟", bcFaqA5: "بالتأكيد. نحن نوفر فرقاً مخصصة لبناء الهيكل الأساسي، والتجديدات الهيكلية، وعقود صيانة المرافق طويلة الأجل.", bcFaqQ6: "كيف تديرون الامتثال العمالي والسلامة في مواقع البناء؟", bcFaqA6: "نحن نلتزم بدقة بقوانين العمل الفيدرالية في الإمارات ونتأكد من تدريب جميع الأفراد على معايير السلامة الخاصة بـ OSHAD وبلدية دبي للحفاظ على بيئة خالية من الحوادث.", rwFaqQ1: "ما هي أنواع عمال بناء السكك الحديدية الذين توفرونهم؟", rwFaqA1: "نحن نوفر موظفي سكك حديدية متخصصين بما في ذلك عمال مد القضبان، واللحامين المعتمدين للسكك الحديدية، وفنيي OHE، ومهندسي الإشارات والاتصالات، ومشرفي سلامة السكك الحديدية.", rwFaqQ2: "هل لدى عمالكم خبرة في مشاريع المترو وقطار الاتحاد؟", rwFaqA2: "نعم، تضم قوتنا العاملة موظفين عملوا في مشاريع السكك الحديدية الكبرى في الإمارات مثل مترو دبي وقطار الاتحاد، متبعين معايير السكك الحديدية الدولية الصارمة.", rwFaqQ3: "كيف تضمنون السلامة في مواقع بناء السكك الحديدية؟", rwFaqA3: "سلامة السكك الحديدية أمر بالغ الأهمية. يتم تدريب جميع عمالنا على سلامة المسار، والسلامة الكهربائية لـ OHE، ويلتزمون بصرامة ببروتوكولات السلامة الخاصة بهيئة الطرق والمواصلات (RTA) وقطار الاتحاد.", rwFaqQ4: "هل يمكنك توفير متخصصين في OHE (المعدات العلوية)؟", rwFaqA4: "نعم، لدينا فنيو ومهندسو OHE معتمدون متخصصون في أنظمة الكاتيناري العلوية وكهربة السكك الحديدية.", rwFaqQ5: "هل توفرون فنيي إشارات واتصالات للسكك الحديدية؟", rwFaqA5: "بالتأكيد. نحن نوفر فنيي S&T مهرة ذوي خبرة في أنظمة إشارات السكك الحديدية، والألياف البصرية، ومعدات غرف التحكم.", rwFaqQ6: "ما هو وقت التعبئة لفريق مد قضبان السكك الحديدية؟", rwFaqA6: "غالباً ما تتطلب مشاريع السكك الحديدية تعبئة متخصصة. يمكننا عادةً تعبئة فرق مد القضبان الأساسية في غضون 14-21 يوماً.", logFaqQ1: "ما هي أدوار اللوجستيات والمستودعات التي توفرون عمالة لها؟", logFaqA1: "نحن نوفر مجموعة واسعة من موظفي اللوجستيات بما في ذلك مساعدي المستودعات، ومشغلي الرافعات الشوكية، ومراقبي المخزون، وسائقي التوصيل، ومنسقي اللوجستيات.", logFaqQ2: "هل لدى مشغلي الرافعات الشوكية لديكم رخص إماراتية سارية؟", logFaqA2: "نعم، يحمل جميع مشغلي الرافعات الشوكية والمعدات الثقيلة لدينا رخص RTA إماراتية سارية ولديهم خبرة في أنظمة إدارة المستودعات المختلفة.", logFaqQ3: "هل يمكنك توفير عمالة لمراكز اللوجستيات التابعة لطرف ثالث (3PL)؟", logFaqA3: "بالتأكيد. نحن ندعم كبار مزودي 3PL بحلول قوى عاملة قابلة للتطوير لمواسم الذروة والعمليات طويلة الأجل في المناطق الحرة بالإمارات.", logFaqQ4: "هل توفرون عمالة لمرافق التخزين البارد؟", logFaqA4: "نعم، نحن نوفر موظفين مدربين على العمل في البيئات التي يتم التحكم في درجة حرارتها، متبعين بدقة لوائح HACCP وغيرها من لوائح سلامة الأغذية.", logFaqQ5: "ما مدى سرعة توسيع طاقم المستودعات خلال فترات الذروة؟", logFaqA5: "نحن متخصصون في التوسع السريع لذروات التجارة الإلكترونية والتجزئة. يمكننا عادةً نشر موظفي مستودعات إضافيين في غضون 48-72 ساعة.", logFaqQ6: "ما هو تدريب السلامة الذي يتلقاه عمال اللوجستيات لديكم؟", logFaqA6: "يتلقى جميع عمال اللوجستيات لدينا تدريباً على المناولة اليدوية، وسلامة الحرائق، ومناولة المواد الكيميائية (عند الاقتضاء)، والالتزام الصارم ببروتوكولات سلامة المستودعات.", manFaqQ1: "ما هي أدوار التصنيع والمصانع التي توفرون موظفين لها؟", manFaqA1: "نحن نوفر قوى عاملة لمشغلي خطوط الإنتاج، وفنيي الآلات، ومفتشي مراقبة الجودة، ومشرفي المصانع، وعمال خطوط التجميع.", manFaqQ2: "هل يمكنك توفير فنيين متخصصين للتصنيع الدوائي؟", manFaqA2: "نعم، نحن نوفر فنيين مدربين على ممارسات التصنيع الجيدة (GMP) وبروتوكولات الغرف النظيفة المطلوبة لتصنيع الأدوية والأغذية.", manFaqQ3: "هل توفرون عمالة لمصانع التصنيع الصناعية الثقيلة؟", manFaqA3: "بالتأكيد. نحن نوفر عمالاً مهرة لمصانع الصلب، ومصاهر الألمنيوم، وغيرها من المرافق الصناعية الثقيلة في جميع أنحاء الإمارات.", manFaqQ4: "كيف تضمنون جودة موظفي الإنتاج في المصانع؟", manFaqA4: "نحن نجري اختبارات مهنية محددة للمهارات ونتحقق من الخبرة التصنيعية لضمان تلبية جميع الموظفين للمتطلبات الفنية لعمليات الإنتاج الخاصة بك.", manFaqQ5: "هل تدعمون عمليات الورديات على مدار الساعة طوال أيام الأسبوع في المصانع؟", manFaqA5: "نعم، نحن ندير تناوب الورديات ونوفر فرقاً مخصصة لعمليات المصانع على مدار الساعة، مما يضمن مستويات إنتاج ثابتة.", manFaqQ6: "ما هو نهجكم تجاه السلامة الصناعية في التصنيع؟", manFaqA6: "نحن نعطي الأولوية للسلامة الصناعية من خلال ضمان تدريب جميع العمال على حماية الآلات، واستخدام معدات الوقاية الشخصية، واتباع المبادئ التوجيهية الخاصة بـ HSE في مصنعك بدقة.", emFaqQ1: "ما هي الأدوار الكهربائية والميكانيكية التي توفرون عمالة لها؟", emFaqA1: "نحن نوفر قوى عاملة متخصصة لأدوار مثل الكهربائيين الصناعيين، وفنيي التكييف (HVAC)، والميكانيكيين (Fitters)، ومبرمجي PLC، والمهندسين الكهربائيين.", emFaqQ2: "هل يحمل الكهربائيون لديكم شهادات معتمدة في الإمارات؟", emFaqA2: "نعم، الكهربائيون لدينا مدربون ومعتمدون لتلبية معايير هيئة كهرباء ومياه دبي (DEWA)، وشركة أبوظبي للتوزيع (ADDC)، وغيرها من المعايير التنظيمية في الإمارات لضمان تركيبات كهربائية آمنة وممتثلة.", emFaqQ3: "هل يمكنك توفير عمالة لمشاريع MEP الصناعية واسعة النطاق؟", emFaqA3: "بالتأكيد. لدينا خبرة واسعة في توريد فرق كبيرة لمشاريع MEP المعقدة في المصانع الصناعية، ومحطات الطاقة، والأبراج التجارية.", emFaqQ4: "هل توفرون فنيين متخصصين لخطوط الإنتاج المؤتمتة؟", emFaqA4: "نعم، نحن نوفر فنيي أتمتة وميكانيكيين ذوي مهارات عالية وخبرة في صيانة وإصلاح الآلات الصناعية المتطورة.", emFaqQ5: "كيف تضمنون سلامة عمالكم في المجالات الكهربائية والميكانيكية؟", emFaqA5: "السلامة هي أولويتنا القصوى. يخضع جميع موظفينا في هذا القطاع لتدريب صارم على السلامة، بما في ذلك إجراءات LOTO وبروتوكولات الحماية من الوميض القوسي (Arc Flash).", emFaqQ6: "ما هو الوقت المعتاد لتعبئة فريق تركيب ميكانيكي؟", emFaqA6: "اعتماداً على المهارات المحددة المطلوبة، يمكننا عادةً تعبئة فريق أساسي من الميكانيكيين في غضون 10-14 يوماً.", fmFaqQ1: "ما هي أنواع موظفي إدارة المرافق التي تقدمونها؟", fmFaqA1: "نحن نوفر مجموعة كاملة من موظفي إدارة المرافق بما في ذلك فنيي MEP، ومتخصصي HVAC، وموظفي التنظيف والنظافة، وموظفي الاستقبال، وأفراد الأمن.", fmFaqQ2: "هل توفرون موظفين لخدمات إدارة المرافق الصلبة والناعمة على حد سواء؟", fmFaqA2: "نعم، نحن نوفر القوى العاملة لكل من إدارة المرافق الصلبة (الصيانة الفنية، MEP) وإدارة المرافق الناعمة (التنظيف، تنسيق الحدائق، الأمن، وخدمات الكونسيرج).", fmFaqQ3: "هل يمكنكم توفير موظفين مخصصين للمرافق التجارية الكبيرة؟", fmFaqA3: "بالتأكيد. نحن متخصصون في توفير حلول قوى عاملة مخصصة للمراكز التجارية والمستشفيات والمكاتب الشركات والمجمعات السكنية الكبيرة.", fmFaqQ4: "هل موظفو التنظيف والضيافة لديكم مدربون وفقاً لمعايير الإمارات؟", fmFaqA4: "نعم، جميع موظفي الضيافة والتنظيف لدينا مدربون وفقاً لمعايير BICSc ويتبعون بروتوكولات صارمة للنظافة والسلامة مناسبة للبيئات ذات الازدحام الشديد.", fmFaqQ5: "هل توفرون فرق صيانة طارئة لإدارة المرافق؟", fmFaqA5: "يمكننا توفير أطقم صيانة مخصصة مصممة للصيانة التفاعلية على مدار الساعة طوال أيام الأسبوع والاستجابة السريعة لحالات الطوارئ في المرافق.", fmFaqQ6: "كيف تديرون تدريب موظفي إدارة المرافق لديكم؟", fmFaqA6: "لدينا برنامج تدريب داخلي يركز على تطوير المهارات الفنية، والتميز في خدمة العملاء، والالتزام بأحدث لوائح السلامة في الإمارات.", mepFaqQ1: "ما هي مهن MEP المحددة التي توفرون عمالة لها؟", mepFaqA1: "نحن نوفر قوى عاملة متخصصة لجميع مهن MEP بما في ذلك الكهربائيين، والسباكين، وفنيي التكييف (HVAC)، وفنيي الدكت (Duct Fabricators)، ومشرفي MEP.", mepFaqQ2: "هل لدى فنيي التكييف لديكم خبرة في محطات التبريد واسعة النطاق؟", mepFaqA2: "نعم، فنيو التكييف لدينا ذوو خبرة في تركيب وصيانة محطات تبريد المناطق، والمبردات (Chillers)، وأنظمة VRF المتطورة.", mepFaqQ3: "هل يمكنك توفير مهندسي MEP معتمدين لتنسيق المشاريع؟", mepFaqA3: "بالتأكيد. نحن نوفر مهندسي MEP مؤهلين يمكنهم إدارة عمليات الموقع، والتنسيق بين المهن، وضمان الالتزام بالجداول الزمنية للمشاريع.", mepFaqQ4: "هل السباكون لديكم مدربون على قوانين البناء وأنظمة الصرف في الإمارات؟", mepFaqA4: "نعم، جميع موظفي السباكة لدينا على دراية جيدة بقوانين البلديات في الإمارات الخاصة بالصرف الصحي، وإمدادات المياه، وأنظمة مكافحة الحرائق.", mepFaqQ5: "كيف تضمنون الكفاءة الفنية لعمال MEP لديكم؟", mepFaqA5: "نحن نجري تقييمات عملية للمهارات واختبارات مهنية للتحقق من كفاءة كل عامل قبل تعيينه في مشروع.", mepFaqQ6: "ما هي قدرة التعبئة لديكم لمشروع MEP سريع الإنجاز؟", mepFaqA6: "للمشاريع سريعة الإنجاز، يمكننا تعبئة فرق MEP الأساسية في غضون 7-10 أيام لضمان بقاء جدول مشروعك في المسار الصحيح.", secFaqQ1: "ما هي أنواع أفراد الأمن الذين توفرونهم؟", secFaqA1: "نحن نوفر حراس أمن معتمدين من SIRA، ومشغلي CCTV، ومنقذين (Life Guards)، ومشرفي أمن لمختلف القطاعات.", secFaqQ2: "هل حراس الأمن لديكم معتمدون من SIRA و PSCOD؟", secFaqA2: "نعم، جميع أفراد الأمن لدينا مرخصون ومعتمدون بالكامل من قبل مؤسسة تنظيم الصناعة الأمنية (SIRA) في دبي أو قسم المساعدة في أبوظبي (PSCOD)، حسب منطقة العمل.", secFaqQ3: "هل تقدمون خدمات أمنية للمجمعات السكنية؟", secFaqA3: "بالتأكيد. نحن متخصصون في توفير أفراد أمن محترفين ومهذبين للأبراج السكنية، والفيلات، والمراكز المجتمعية.", secFaqQ4: "هل يمكنك توريد أمن للمعارض والفعاليات واسعة النطاق؟", secFaqA4: "نعم، لدينا فريق أمن فعاليات مخصص ومدرب على إدارة الحشود الكبيرة وضمان السلامة في المعارض والفعاليات الكبرى في الإمارات.", secFaqQ5: "كيف تتعاملون مع تدريب وفحص حراس الأمن؟", secFaqA5: "نحن نتبع عملية فحص صارمة تتضمن فحوصات خلفية وتدريباً مستمراً على الإسعافات الأولية، وسلامة الحرائق، والاستجابة للطوارئ.", secFaqQ6: "هل توفرون حارسات أمن لمتطلبات محددة؟", secFaqA6: "نعم، نحن نوفر حارسات أمن مدربات باحتراف للمدارس، وبيئات البيع بالتجزئة، وغيرها من المواقع الحساسة حسب الحاجة.", msFaqQ1: "ما هي القطاعات التي توفرون عمالة لها؟", msFaqA1: "نحن نوفر قوى عاملة لمجموعة متنوعة من القطاعات بما في ذلك البناء المدني، وخدمات MEP، والنفط والغاز، وإدارة المرافق، واللوجستيات، والتصنيع.", msFaqQ2: "كيف تضمنون جودة القوى العاملة التي توفرونها؟", msFaqA2: "يخضع جميع موظفينا لاختبارات فنية صارمة، وفحوصات خلفية، والتحقق من الخبرة في الإمارات قبل النشر.", msFaqQ3: "هل يمكنك توفير عدد كبير من العمال في وقت قصير؟", msFaqA3: "نعم، نحن نحافظ على مجموعة كبيرة من الموظفين الذين تم فحصهم مسبقاً ويمكننا تعبئة فرق بأحجام مختلفة بسرعة بناءً على احتياجات مشروعك.", msFaqQ4: "هل تديرون جميع المتطلبات القانونية والتأشيرات للعمال؟", msFaqA4: "نعم، تتعامل Smaar Elysium مع جميع عمليات التوظيف، والكفالة، ومعالجة التأشيرات، والتأمين الطبي، ومرتبات القوى العاملة الموردة.", msFaqQ5: "ما نوع التدريب على السلامة الذي يتلقاه العمال؟", msFaqA5: "يتلقى كل عامل تدريبًا أساسيًا على الصحة والسلامة والبيئة (HSE) وحصص تعريف بالسلامة خاصة بالقطاع مصممة لأدوارهم وبيئات عملهم المحددة.", msFaqQ6: "كيف تتعاملون مع أداء العمال والإشراف على الموقع؟", msFaqA6: "نحن نوفر مشرفي مواقع ومنسقين مخصصين لمراقبة الأداء، وضمان الالتزام بالسلامة، وإدارة جميع الأمور المتعلقة بالأفراد.", bcSEOTitle: "قوى عاملة لعقود البناء في الإمارات | توظيف البناء | Smaar Elysium", bcSEODesc: "توفر Smaar Elysium قوى عاملة ماهرة للغاية لعقود البناء في جميع أنحاء الإمارات، بما في ذلك المهندسين المدنيين ومديري المشاريع وموظفي البناء المتخصصين.", ccSEOTitle: "توريد قوى عاملة للإنشاءات المدنية في الإمارات | مهندسو مواقع وعمال مهرة | Smaar Elysium", ccSEODesc: "تقدم Smaar Elysium قوى عاملة ماهرة للإنشاءات المدنية في جميع أنحاء الإمارات بما في ذلك مهندسي المواقع والبنائين وعمال تثبيت الفولاذ ونجاري القوالب ومشغلي الآلات الثقيلة لمشاريع البنية التحتية والمباني.", ccFaqQ1: "ما هي أدوار الإنشاءات المدنية التي توفرون لها القوى العاملة؟", ccFaqA1: "نحن نوفر عمالاً متخصصين بما في ذلك مهندسي المواقع، والبنائين، والنجارين، وعمال تثبيت الفولاذ، وعمال السقالات، ومشغلي المعدات الثقيلة لجميع أنواع مشاريع البناء والبنية التحتية.", ccFaqQ2: "هل يمكنكم توفير عدد كبير من العمال المهرة لمشاريع البناء الكبرى؟", ccFaqA2: "نعم، لدينا قاعدة بيانات قوية من العمال المهرة المفحوصين مسبقاً ويمكننا حشد فرق تتراوح من 50 إلى 500+ عامل بسرعة حسب متطلبات مشروعك.", ccFaqQ3: "هل يمتلك مهندسو المواقع والمشرفون لديكم خبرة في الإمارات؟", ccFaqA3: "نعم، يتمتع موظفونا الفنيون ومشرفو المواقع بخبرة واسعة في قوانين البناء ومعايير السلامة ولوائح البلدية في الإمارات.", ccFaqQ4: "هل عمالكم مدربون على سلامة الإنشاءات الشاهقة؟", ccFaqA4: "بالتأكيد. السلامة هي أولويتنا. يخضع جميع العمال المنتشرين في مشاريع البناء الشاهقة لتدريب إلزامي على السلامة على ارتفاعات ويتبعون بدقة بروتوكولات معدات الوقاية الشخصية.", ccFaqQ5: "كيف تتعاملون مع سكن العمال ونقلهم؟", ccFaqA5: "نحن ندير جميع الخدمات اللوجستية بما في ذلك السكن عالي الجودة، والنقل اليومي من وإلى الموقع، وجميع متطلبات الرعاية الضرورية للقوى العاملة المنتشرة لدينا.", ccFaqQ6: "ما هي أنواع المشاريع المدنية التي دعمتموها في الإمارات؟", ccFaqA6: "لقد قدمنا القوى العاملة لمجموعة متنوعة من المشاريع بما في ذلك الأبراج السكنية، والمراكز التجارية، والبنية التحتية للطرق، والمرافق الصناعية المتخصصة.", emSEOTitle: "قوى عاملة لعقود الكهرباء والميكانيكا في الإمارات | توظيف MEP | Smaar Elysium", emSEODesc: "توفير قوى عاملة متميزة لعقود الكهرباء والميكانيكا، بما في ذلك مهندسي MEP وفنيي HVAC والكهربائيين الصناعيين في جميع أنحاء الإمارات.", fmSEOTitle: "قوى عاملة لإدارة المرافق في الإمارات | توظيف فرق الصيانة | Smaar Elysium", fmSEODesc: "حلول احترافية للقوى العاملة في إدارة المرافق في الإمارات. نحن نوفر موظفي صيانة ذوي خبرة وفرق تنظيف ودعم فني للمرافق.", lgSEOTitle: "توريد قوى عاملة للخدمات اللوجستية في الإمارات | موظفو مستودعات ونقل | Smaar Elysium", lgSEODesc: "قوى عاملة لوجستية موثوقة في جميع أنحاء الإمارات. نحن نوفر موظفي مستودعات ذوي خبرة ومشغلي رافعات شوكية وموظفي نقل لعمليات سلسلة التوريد الفعالة.", mnSEOTitle: "قوى عاملة لقطاع التصنيع في الإمارات | عمال صناعيون وإنتاج | Smaar Elysium", mnSEODesc: "توفر Smaar Elysium قوى عاملة معتمدة للتصنيع في جميع أنحاء الإمارات بما في ذلك مشغلي CNC واللحامين ومفتشي الجودة وعمال خطوط التجميع وفنيي الصيانة الصناعية للمصانع ومنشآت الإنتاج.", mpSEOTitle: "توريد قوى عاملة MEP في الإمارات | ميكانيكا وكهرباء وسباكة | Smaar Elysium", mpSEODesc: "توريد قوى عاملة MEP متميزة في الإمارات. نحن نوفر فنيي ميكانيكا وكهرباء وسباكة ذوي خبرة لمشاريع البنية التحتية واسعة النطاق.", ogSEOTitle: "توريد قوى عاملة للنفط والغاز في الإمارات | توظيف طاقة متخصص | Smaar Elysium", ogSEODesc: "حلول مخصصة للقوى العاملة في مجال النفط والغاز في الإمارات. توريد مهندسين متخصصين وخبراء فنيين وضباط سلامة لعمليات المنبع والمصب.", rcSEOTitle: "قوى عاملة لعقود السكك الحديدية في الإمارات | توظيف البنية التحتية للنقل | Smaar Elysium", rcSEODesc: "قوى عاملة متخصصة لعقود السكك الحديدية في الإمارات. توفير مهندسي بنية تحتية وموظفي صيانة المسارات وخبراء فنيين في السكك الحديدية.", scSEOTitle: "قوى عاملة للإنشاءات الفولاذية في الإمارات | توظيف الفولاذ الإنشائي | Smaar Elysium", scSEODesc: "توريد احترافي للقوى العاملة في مجال الإنشاءات الفولاذية في الإمارات. توفير عمال تركيب الفولاذ الخبراء واللحامين والفنيين الإنشائيين لمشاريع البنية التحتية الضخمة.", ccHeroTitle: "قطاع الإنشاءات المدنية", ccHeroText: "توفير قوى عاملة عالية المهارة وشبه ماهرة لمشاريع البنية التحتية الكبرى، والمشاريع التجارية والسكنية والصناعية الضخمة في جميع أنحاء الإمارات العربية المتحدة.", ccChooseTitle: "قوى عاملة خبيرة للإنشاءات المدنية", ccChooseP1: "يتطلب أفق الإمارات المتوسع بسرعة فرق بناء مبنية على الدقة والسلامة والخبرة الفنية العميقة. نحن نوفر قوى عاملة مؤهلة تضمن تسليم مشاريعك في الوقت المحدد وفي حدود الميزانية ووفقاً لأعلى المعايير.", ccChooseP2: "من الأساسات والأعمال الإنشائية إلى التشطيب والبنية التحتية، تدعم قوتنا العاملة كل مرحلة من مراحل التطوير.", ccChooseP3: "نحن نوفر مهندسين مدنيين معتمدين، ومشرفي مواقع، وضباط سلامة معتمدين من NEBOSH، وعمالة مهنية متخصصة تتماشى تماماً مع لوائح البناء في الإمارات.", ccLogoSlogan: "متخصصون في قطاع البناء", ccGrid1: "بناء", ccGrid2: "الأفق", ccGrid3: "خبرة", ccGrid4: "قوى عاملة لا تضاهى", ccBtsTitle: "ابنِ فريق الإنشاءات المدنية الخاص بك", ccBtsP1: "سواء كان مبنى شاهقاً أو مشروع طريق أو مرفقاً صناعياً - نحن نوفر قوى عاملة ماهرة مستعدة للنشر.", ccBtsP2: "تضمن عملية الفحص الصارمة لدينا أن كل بناء ونجار ومثبت حديد ومهندس موقع متوافق مع معايير السلامة ومختبر مهنياً.", ccDom1Title: "البنية التحتية وأعمال الحفر", ccDom1Desc: "أطقم متخصصة لبناء الطرق السريعة والجسور وحفر الخنادق العميقة والأساسات وأعمال الحفر المدنية الثقيلة.", ccDom2Title: "المباني الشاهقة والتجارية", ccDom2Desc: "عمال خرسانة ذوو خبرة ونجارو قوالب ومثبتو حديد مخصصون للأبراج والمولات والتطورات التجارية الكبرى.", ccDom3Title: "التشطيب والتجهيز", ccDom3Desc: "رسامون ماهرون وبناؤون وعمال بلوك وزخرفيون مهرة يقدمون أعمال تشطيب داخلية وخارجية متميزة.", ccDom4Title: "مشغلو الآلات الثقيلة", ccDom4Desc: "مشغلون معتمدون للرافعات البرجية والرافعات المتنقلة والحفارات والجرافات ومركبات النقل الثقيل.", ccBen1Title: "الحشد السريع", ccBen1Desc: "النشر السريع للقوى العاملة للحفاظ على الجدول الزمني لبنائك في المسار الصحيح.", ccBen2Title: "معايير سلامة صارمة", ccBen2Desc: "قوة عاملة مدربة وفقاً للوائح HSE والامتثال للإنشاءات في الإمارات.", ccBen3Title: "مهنيون ذوو خبرة", ccBen3Desc: "مهندسون ومشرفون وعمال مهرة ذوو خبرة مثبتة في الموقع.", ogHeroTitle: "قطاع النفط والغاز", ogHeroText: "تمكين قطاع الطاقة في الإمارات بخبراء هندسيين وفنيين وتشغيليين متخصصين. نحن نقدم حلول قوى عاملة موثوقة لعمليات المنبع والمصب والمنتصف.", ogChooseTitle: "حلول القوى العاملة الاحترافية لقطاع النفط والغاز", ogChooseP1: "يتطلب قطاع الطاقة في الإمارات العربية المتحدة قوة عاملة ليست عالية المهارة فحسب ، بل مطلعة أيضاً بشكل عميق على المتطلبات الأمنية والفنية الفريدة لعمليات النفط والغاز. نحن نوفر المواهب المتخصصة اللازمة لدفع مشاريعك إلى الأمام.", ogChooseP2: "يتمتع أفرادنا بخبرة في أحدث التقنيات والمنهجيات ، مما يضمن إجراء عمليات الخنق والنقل والتوزيع بأقصى قدر من الكفاءة والسلامة.", ogChooseP3: "نحن نعمل وثيقاً مع كبرى شركات الطاقة والمقاولين في جميع أنحاء الإمارات لتقديم حلول توظيف شاملة تلبي أكثر متطلبات المشاريع والجداول الزمنية تطلباً.", ogLogoSlogan: "متخصصون في قطاع الطاقة", ogGrid1: "تمكين", ogGrid2: "المستقبل", ogGrid3: "خبرة طاقة", ogGrid4: "لا تضاهى", ogBtsTitle: "ابنِ فريقك الخبير في النفط والغاز", ogBtsP1: "سواء كنت بحاجة إلى طاقم كامل لمنصة بحرية، أو مهندسين متخصصين لمصفاة، أو ضباط سلامة لمشروع خط أنابيب جديد، فلدينا المواهب التي تحتاجها.", ogBtsP2: "تضمن عملية الفحص الصارمة لدينا أن كل مهني ملتزم بشدة بسياسات HSE الخاصة بالضرر الصفر والتميز التشغيلي.", ogDom1Title: "استخراج المنبع", ogDom1Desc: "موظفون مهرة للاستكشاف والإنتاج، بما في ذلك مهندسو الحفر ومشغلو المنصات وعلماء الجيولوجيا.", ogDom2Title: "لوجستيات المنتصف", ogDom2Desc: "خبرة في التخزين والنقل مع فنيي خطوط الأنابيب ومشغلي المحطات ومنسقي اللوجستيات.", ogDom3Title: "تكرير المصب", ogDom3Desc: "مهندسون كيميائيون ومشغلو عمليات وفنيو صيانة متخصصون في إنتاج المصافي والبتروكيماويات.", ogDom4Title: "الإغلاق والتحول", ogDom4Desc: "حشد سريع لقوى عاملة كبيرة متعددة التخصصات لصيانة المصنع المجدولة مع الحد الأدنى من التوقف.", ogDom5Title: "HSE والامتثال", ogDom5Desc: "ضباط سلامة مخصصون ومفتشو QA/QC ومهندسو بيئة يضمنون تلبية العمليات للوائح قطاع الطاقة.", ogDom6Title: "الصيانة الفنية", ogDom6Desc: "لحامون معتمدون وفنيو أنابيب وكهربائيون وفنيو ميكانيكا ذوو خبرة في صيانة آلات حقول النفط.", ogBen1Title: "التميز في السلامة", ogBen1Desc: "جميع الموظفين معتمدون بالكامل في BOSIET وH2S وغيرها من بروتوكولات السلامة الحرجة في حقول النفط.", ogBen2Title: "خبرة فنية", ogBen2Desc: "مهندسون وفنيون ذوو خبرة واسعة في عمليات الاستخراج والتنقيب والتكرير في الإمارات.", ogBen3Title: "حشد سريع", ogBen3Desc: "القدرة على توظيف وتعبئة فرق كبيرة متعددة التخصصات للمشاريع العاجلة وعمليات الإغلاق.", rcHeroTitle: "قطاع عقود السكك الحديدية", rcHeroText: "توفير قوى عاملة هندسية وبنية تحتية متخصصة للغاية لدعم شبكات النقل المتوسعة في الإمارات العربية المتحدة.", rcChooseTitle: "فرق خبراء البنية التحتية للسكك الحديدية", rcChooseP1: "مع استمرار الإمارات في ربط مدنها بشبكات سكك حديدية ومترو عالمية المستوى، لم يكن الطلب على مهنيي السكك الحديدية المتخصصين أعلى مما هو عليه الآن. نحن نوفر الخبرة اللازمة.", rcChooseP2: "من مهندسي الإشارات ومتخصصي وضع المسارات إلى ضباط السلامة الذين يركزون على بروتوكولات السكك الحديدية، يتم تدريب موظفينا لهذه البيئة المنظمة للغاية.", rcChooseP3: "نحن نشارك مقاولي السكك الحديدية العالميين لضمان نشر قوى عاملة ثابتة وموثوقة عبر مشاريع نقل ضخمة متعددة السنوات.", rcLogoSlogan: "خبراء السكك الحديدية", rcGrid1: "ربط", rcGrid2: "النقل", rcGrid3: "الشبكات", rcGrid4: "الحضرية", rcBtsTitle: "انشر طاقم السكك الحديدية الخاص بك", rcBtsP1: "يتطلب نشر فريق لبناء أو صيانة السكك الحديدية شهادات مخصصة. نحن نتولى فحص جميع المهنيين الفنيين في هذا المجال.", rcBtsP2: "حافظ على جداول تشغيلية صارمة وضمان الامتثال التام للسلامة من خلال زيادة موظفيك الأساسيين مع عمال السكك الحديدية التعاقديين لدينا.", rcDom1Title: "وضع المسارات والصيانة", rcDom1Desc: "عمال متخصصون لتركيب وفحص وصيانة مسارات السكك الحديدية المستمرة.", rcDom2Title: "الإشارات والاتصالات", rcDom2Desc: "مهندسون وفنيون لتركيب واختبار أنظمة إشارات واتصالات السكك الحديدية المعقدة.", rcDom3Title: "البنية التحتية المدنية للسكك الحديدية", rcDom3Desc: "موظفون لبناء الأرصفة والأنفاق والجسور والمحطات المرتبطة بشبكات السكك الحديدية.", rcDom4Title: "فنيو العربات والمحركات", rcDom4Desc: "ميكانيكيون وكهربائيون يركزون على صيانة وإصلاح عربات ومحركات القطارات.", rcBen1Title: "معايير السكك الحديدية", rcBen1Desc: "قوة عاملة مدربة وموافقة بالكامل على معايير هيئة الطرق والمواصلات وقطار الاتحاد والسكك الحديدية الدولية.", rcBen2Title: "مهارات متخصصة", rcBen2Desc: "الوصول إلى فنيي إشارات وOHE ووضع مسارات ذوي خبرة في مشاريع النقل الضخمة.", rcBen3Title: "الالتزام بالجداول الزمنية", rcBen3Desc: "فرق مكرسة لضمان بقاء مشاريع البنية التحتية للسكك الحديدية في المسار الصحيح ووفقاً للجداول الزمنية الصارمة.", scHeroTitle: "قطاع إنشاءات الصلب", scHeroText: "نشر عمال صلح ولحامين ومهندسين إنشائيين متميزين لدعم العمود الفقري للتنمية البنية التحتية الحديثة في جميع أنحاء الإمارات العربية المتحدة.", scChooseTitle: "فرق خبيرة في تصنيع وتركيب الصلب", scChooseP1: "تبدأ السلامة الهيكلية للمشاريع الضخمة الحديثة بالصلب. تتخصص وكالتنا في توفير ونشر مهنيي إنشاءات الصلب من الطراز الأول.", scChooseP2: "من اللحامين المعتمدين 6G الذين يخططون للروابط الحرجة، إلى عمال تركيب الصلب الثقيل الذين يوازنون العوارض عالياً فوق المدينة، نحن نوفر العزيمة والخبرة المطلوبة.", scChooseP3: "نحن نخدم ساحات التصنيع الصناعي ومواقع البناء التجارية الحية على حد سواء، مما يضمن تلبية احتياجاتك الهيكلية الأكثر تطلباً في الموعد المحدد.", scLogoSlogan: "خبراء أعمال الصلب", scGrid1: "صياغة", scGrid2: "التميز", scGrid3: "الهيكلي", scGrid4: "على مستوى الدولة", scBtsTitle: "استأجر طاقم الصلب الخاص بك", scBtsP1: "لا تدع نقص اللحامين المهرة يؤخر مسارك الحرج. نحن نوفر فرق تشغيل المعادن المعتمدة والمرنة في أي وقت.", scBtsP2: "تضمن إجراءات الاختبار الصارمة لدينا أن كل عامل صلب نوظفه يحمل شهادات السلامة والتشغيل اللازمة لمواقع الإمارات العربية المتحدة.", scDom1Title: "لحامون معتمدون", scDom1Desc: "لحامو SMAW و TIG و MIG خبراء مختبرون للدقة والمتانة في الوصلات الإنشائية الفولاذية.", scDom2Title: "عمال تركيب الصلب", scDom2Desc: "متخصصون ماهرون في قراءة المخططات ورفع ووضع وتأمين الهياكل الفولاذية الثقيلة بأمان.", scDom3Title: "موظفو ورش التصنيع", scDom3Desc: "مصنعون وقاطعون ومجلخون لتحضير الصلب خارج الموقع في ساحات التصنيع الصناعية.", scDom4Title: "مفتشو الجودة", scDom4Desc: "مفتشو NDT وموظفو QA/QC يضمنون تلبية جميع أعمال الصلب للمعايير الدولية الصارمة.", scBen1Title: "لحامون معتمدون", scBen1Desc: "لحامون معتمدون 6G وAWS يضمنون أعلى مستويات السلامة الهيكلية في كل وصلة صلب.", scBen2Title: "دقة الرفع", scBen2Desc: "مشرفو رفع وعمال مجهزون (Riggers) ذوو خبرة في التعامل مع مكونات الصلب الثقيلة والمعقدة.", scBen3Title: "قابلية التوسع", scBen3Desc: "قوة عاملة مرنة قادرة على التوسع لدعم ساحات التصنيع الضخمة ومواقع البناء الشاهقة.", emHeroTitle: "قطاع عقود الكهرباء والميكانيكا", emHeroText: "توفير مهندسي ميكانيكا وكهرباء وفنيي HVAC ومتخصصي MEP من الطراز العالمي لتمكين الأنظمة البيئية السكنية والتجارية والصناعية في الإمارات.", emChooseTitle: "فرق MEP والميكانيكا والكهرباء الخبيرة", emChooseP1: "خلف كل مبنى حديث ومرفق صناعي يكمن نظام وعائي معقد من شبكات الكهرباء والميكانيكا والسباكة. نحن نوفر الأفراد الذين يصممون ويبنون ويصينون هذه الأنظمة الحيوية.", emChooseP2: "من محطات تبريد المناطق الضخمة التي تتطلب فنيي HVAC متخصصين، إلى البنية التحتية للمباني الذكية التي تتطلب خبراء كابلات البيانات ذات الجهد المنخفض، تغطي قوتنا العاملة القابلة للنشر طيف MEP الكامل.", emChooseP3: "يتم اختبار فنيينا وفحصهم بدقة لضمان تلبيتهم لمعايير الطاقة والسلامة والتشغيل الصارمة في الإمارات العربية المتحدة.", emLogoSlogan: "خبراء MEP", emGrid1: "تمكين", emGrid2: "البنية", emGrid3: "التحتية", emGrid4: "الحديثة", emBtsTitle: "انشر طاقم MEP الخاص بك", emBtsP1: "يعتمد نجاح مشروع MEP بشكل كبير على الكفاءة الفنية للأفراد في الموقع. نحن نوفر متخصصين مفحوصين ومستعدين للنشر الفوري.", emBtsP2: "تجنب تأخيرات المشاريع الناتجة عن نقص الفنيين المتخصصين. يسمح لك نموذج التوظيف التعاقدي لدينا بتوسيع فرقك الكهربائية والميكانيكية تماماً بما يتماشى مع مراحل المشروع.", emDom1Title: "كهربائيون صناعيون", emDom1Desc: "متخصصون في الجهد العالي والمنخفض، وفنيو لوحات التحكم، وخبراء الأسلاك الصناعية.", emDom2Title: "فنيو HVAC", emDom2Desc: "خبراء في تركيب وتكليف وصيانة أنظمة التبريد والتهوية الضخمة.", emDom3Title: "مهندسون ميكانيكيون", emDom3Desc: "مهندسون متخصصون في الآلات الثقيلة وميكانيكا السوائل والمضخات وشبكات الأنابيب الصناعية.", emDom4Title: "السباكة ومكافحة الحرائق", emDom4Desc: "سباكون وفنيون معتمدون متخصصون في أنظمة المياه المعقدة والصرف وشبكات إخماد الحرائق الحيوية.", fmHeroTitle: "قطاع إدارة المرافق", fmHeroText: "تقديم حلول متميزة ومصممة خصيصاً للقوى العاملة في إدارة المرافق لتحقيق أقصى قدر من عمر الأصول والتشغيل في النظم البيئية التجارية والسكنية والشركات في الإمارات.", fmChooseTitle: "فرق إدارة المرافق المحترفة", fmChooseP1: "تتطلب صيانة البنية التحتية الحديثة للإمارات قوة عاملة استباقية وعالية المهارة. نحن نوفر الأفراد اللازمين للحفاظ على مرافقك تعمل بأقصى أداء.", fmChooseP2: "من فنيي الصيانة الوقائية إلى موظفي الخدمات اللينة المدربين على الضيافة، تم تصميم قوتنا العاملة لتعزيز تجربة المستخدم النهائي وحماية أصولك المادية.", fmChooseP3: "مع التركيز الراسخ على الاستدامة والنظافة والتشغيل المستمر، تضمن فرقنا أن عقاراتك تتجاوز التوقعات التنظيمية والاشغالية.", fmLogoSlogan: "خبراء إدارة المرافق", fmGrid1: "رفع", fmGrid2: "الأصول", fmGrid3: "تحسين", fmGrid4: "الأداء", fmBtsTitle: "انشر طاقم إدارة المرافق الخاص بك", fmBtsP1: "سواء كنت بحاجة إلى فريق هندسي مخصص للخدمات الصلبة أو طاقم خدمات لينة كتوم لعقار فاخر، فنحن ننشر المواهب المناسبة.", fmBtsP2: "يخضع كل مرشح لفحوصات خلفية صارمة وتدريب موجه لخدمة العملاء لضمان تقديم خدمة سلسة.", fmDom1Title: "الخدمات الصلبة (MEP)", fmDom1Desc: "فنيون متخصصون للصيانة التنبؤية والتفاعلية للأنظمة الكهربائية وأنظمة HVAC والسباكة.", fmDom2Title: "الخدمات اللينة (التنظيف)", fmDom2Desc: "أطقم تنظيف مدربة على معايير BICS، ومدبرو منازل، ومتخصصون في التنظيف العميق لضمان بيئات نقية.", fmDom3Title: "الأمن والسلامة", fmDom3Desc: "حراس أمن معتمدون من SIRA، ومشغلو كاميرات المراقبة، وموظفو سلامة الأرواح لحماية أفرادك وممتلكاتك.", fmDom4Title: "الاستقبال والإدارة", fmDom4Desc: "موظفو استقبال وكونسيرج ومنسقو مرافق لبقون يمثلون الوجه المرحب لمؤسستك.", fmBen1Title: "تحسين قيمة الأصول", fmBen1Desc: "موظفو صيانة استباقيون يركزون على الرعاية الوقائية لزيادة عمر مرافقك.", fmBen2Title: "تدريب الضيافة", fmBen2Desc: "موظفو خدمات لينة مدربون على التميز في خدمة العملاء لتعزيز تجربة الشاغلين.", fmBen3Title: "دعم على مدار الساعة", fmBen3Desc: "فرق قادرة على دعم عمليات إدارة المرافق على مدار الساعة طوال أيام الأسبوع لضمان التشغيل المستمر.", lgHeroTitle: "قطاع الخدمات اللوجستية", lgHeroText: "حلول قوى عاملة لوجستية مرنة وقابلة للتطوير لتعزيز الكفاءة عبر عمليات النقل والمستودعات وسلاسل التوريد العالمية في الإمارات.", lgChooseTitle: "قوى عاملة خبيرة في سلسلة التوريد", lgChooseP1: "مع ترسيخ الإمارات لمكانتها كمركز لوجستي عالمي، أصبح الطلب على حلول القوى العاملة السريعة والدقيقة والقابلة للتطوير أعلى من أي وقت مضى.", lgChooseP2: "من كتبة المخازن الدقيقين ومشغلي الرافعات الشوكية المهرة إلى سائقي المركبات الثقيلة ذوي الخبرة (رخصة ٣، ٤، ٦، ٨)، يحافظ مجمع مواهبنا على حركة البضائع.", lgChooseP3: "نحن نوفر موظفين لوجستيين مدربين تدريباً عالياً قادرين على العمل على مدار الساعة طوال أيام الأسبوع، مع الالتزام بسياسات HSE الداخلية ولوائح التجارة الدولية.", lgLogoSlogan: "متخصصون في قطاع اللوجستيات", lgGrid1: "دفع", lgGrid2: "سلسلة التوريد", lgGrid3: "العالمية", lgGrid4: "للأمام", lgBtsTitle: "ابنِ طاقم العمليات اللوجستية الخاص بك", lgBtsP1: "سواء كنت تقوم بتجهيز مركز توزيع بمساحة ١٠٠,٠٠٠ قدم مربع، أو تجميع أسطول من سائقي التوصيل للوجستيات الميل الأخير، فإننا نمتلك القدرة على دعمك.", lgBtsP2: "تضمن الاختبارات الصارمة فهم كل عضو في الفريق لأنظمة إدارة المستودعات الحديثة (WMS) وبروتوكولات سلامة مناولة الشحن الصارمة.", lgDom1Title: "الأسطول والنقل", lgDom1Desc: "مشغلون متخصصون للشاحنات الثقيلة والمركبات التجارية الخفيفة وأساطيل توصيل الطرود للميل الأخير.", lgDom2Title: "عمليات المستودعات", lgDom2Desc: "مشغلو رافعات شوكية/VNA معتمدون، ومنتقو طلبات، ومغلفون، ومحملو شحن لمراكز التوزيع ذات الحجم الكبير.", lgDom3Title: "المخزون والتخطيط", lgDom3Desc: "كتبة مخازن يعتمدون على البيانات، ومراقبو مخزون، ومحللو سلسلة توريد لتحسين تدفق المخزون وتقليل الهدر.", lgDom4Title: "الشحن والجمارك", lgDom4Desc: "كتبة وثائق ذوو خبرة، ووكلاء شحن، ومتخصصون في التخليص الجمركي يتنقلون عبر متطلبات التجارة الدولية المعقدة.", lgBen1Title: "عمليات قابلة للتطوير", lgBen1Desc: "قم بتوسيع فريق المستودعات أو النقل الخاص بك على الفور خلال مواسم الذروة والفعاليات الترويجية.", lgBen2Title: "مدربون على السلامة", lgBen2Desc: "موظفون مدربون على مناولة الشحن الدقيقة وسلامة المستودعات لتقليل الكسر.", lgBen3Title: "عمالة خبيرة في أنظمة WMS", lgBen3Desc: "عمال ذوو خبرة في أنظمة إدارة المستودعات الحديثة (WMS) لتحقيق دقة عالية.", mnHeroTitle: "قطاع التصنيع", mnHeroText: "توفير قوى عاملة ماهرة وعالية الأداء للتصنيع الثقيل، وخطوط التجميع، ومرافق الإنتاج الصناعي الدقيق في الإمارات.", mnChooseTitle: "حلول القوى العاملة للتصنيع", mnChooseP1: "مع توسع المناطق الصناعية ومراكز التصنيع الذكية في الإمارات، أصبح امتلاك قوى عاملة موثوقة وكفؤة فنياً هو مفتاح القابلية للتطوير.", mnChooseP2: "نحن نوفر مشغلي CNC معتمدين، وكهربائيين صناعيين، ومفتشي QA/QC، ومشرفي خطوط تجميع متمرسين للحفاظ على استمرار إنتاجك على مدار الساعة.", mnChooseP3: "يتم تدريب موظفينا بدقة للالتزام الصارم بمنهجيات التصنيع الحديثة، ومبادئ lean، ومعايير سلامة المصانع التي لا تقبل المساومة.", mnLogoSlogan: "خبراء صناعة التصنيع", mnGrid1: "تسريع", mnGrid2: "الإنتاج", mnGrid3: "بواسطة", mnGrid4: "عمالة خبيرة", mnBtsTitle: "ابنِ فريق التصنيع الخاص بك", mnBtsP1: "سواء كنت تطلق وردية إنتاج جديدة أو تدعم فريق الآلات الأساسي لديك، فنحن نوفر مواهب صناعية مطابقة تماماً.", mnBtsP2: "يخضع جميع المجندين لفحص فني صارم وتقييمات للمهارات العملية لضمان الإنتاجية الفورية في الموقع والوعي بالسلامة.", mnDom1Title: "التجميع والإنتاج", mnDom1Desc: "عمال خطوط تجميع ذوو إنتاجية عالية، وموظفو تغليف، ومشرفو إنتاج يضمنون تلبية أهداف الإنتاج باستمرار.", mnDom2Title: "الآلات والتصنيع", mnDom2Desc: "مبرمجو CNC معتمدون، ولحامون (TIG/MIG)، ومصنعو معادن، وصناع أدوات/قوالب لمهام الهندسة الدقيقة.", mnDom3Title: "ضمان الجودة (QC)", mnDom3Desc: "مفتشون مهتمون بالتفاصيل وفنيو قياس يضمنون خلو الإنتاج من العيوب والالتزام الصارم بمعايير تصنيع ISO.", mnDom4Title: "الصيانة الصناعية", mnDom4Desc: "أطقم صيانة وقائية وتفاعلية، بما في ذلك برادو وميكانيكا المعدات الثقيلة، لزيادة وقت تشغيل المصنع.", mnBen1Title: "الإنتاجية الصناعية", mnBen1Desc: "مشغلون وفنيون ذوو كفاءة عالية يركزون على تحقيق أهداف الإنتاج مع الحد الأدنى من الهدر.", mnBen2Title: "الانضباط في الجودة", mnBen2Desc: "مفتشو QA/QC صارمون يضمنون أن كل منتج يخرج من خط الإنتاج يلبي معايير الجودة العالمية.", mnBen3Title: "الوعي بالسلامة", mnBen3Desc: "قوة عاملة مدربة تدريباً كاملاً على بروتوكولات السلامة في المصانع وحماية الآلات.", mpHeroTitle: "قطاع MEP (الميكانيكا والكهرباء والسباكة)", mpHeroText: "توفير قوى عاملة متخصصة في الميكانيكا والكهرباء والسباكة للتركيبات عالية المخاطر والصيانة والتكليف في جميع أنحاء الإمارات العربية المتحدة.", mpChooseTitle: "نشر قوى عاملة خبيرة في MEP", mpChooseP1: "العمود الفقري لأي مبنى حديث هو بنية MEP التحتية الخاصة به. نحن نوفر المواهب المعتمدة المطلوبة لتركيب واختبار وصيانة هذه الأنظمة المعقدة.", mpChooseP2: "من محطات تبريد المناطق الضخمة وتوزيع الطاقة ذات الجهد العالي إلى منطق إخماد الحرائق المعقد، يقدم موظفونا خبرة فنية قابلة للتحقق.", mpChooseP3: "اعتادت قوتنا العاملة على التنسيق مع الفرق المدنية في المشاريع الضخمة التجارية والسكنية والصناعية سريعة الوتيرة وواسعة النطاق.", mpLogoSlogan: "متخصصو MEP", mpGrid1: "التميز", mpGrid2: "الهندسي", mpGrid3: "مواهب", mpGrid4: "MEP معتمدة", mpBtsTitle: "ابنِ فريق MEP الفني الخاص بك", mpBtsP1: "سواء كنت بحاجة إلى طاقم تكليف متخصص أو مئات الكهربائيين وفنيي الأنابيب لمشروع بناء مستمر، يمكننا توفيرهم.", mpBtsP2: "يتم اختبار كل عضو مهنياً للامتثال لمعايير DEWA و ADDC و SEWA والدفاع المدني، مما يضمن اجتياز تركيباتك للفحص من المرة الأولى.", mpDom1Title: "الميكانيكا و HVAC", mpDom1Desc: "فنيو مبردات، وفنيو دكت، ومهندسون ميكانيكيون متخصصون في التحكم في المناخ والتهوية وأنظمة تبريد المناطق.", mpDom2Title: "الهندسة الكهربائية", mpDom2Desc: "كهربائيون صناعيون، ومركبو كابلات، وبناة لوحات لشبكات التيار المنخفض (ELV) والجهد المنخفض (LV) والجهد العالي (HV).", mpDom3Title: "السباكة والأنابيب", mpDom3Desc: "سباكون وفنيو أنابيب معتمدون ينفذون شبكات إمداد المياه المعقدة والصرف وشبكات الأنابيب الصناعية.", mpDom4Title: "الحريق وسلامة الأرواح", mpDom4Desc: "متخصصون معتمدون من الدفاع المدني لتركيب وتكليف أجهزة إنذار الحريق والرشاشات وأنظمة الإخماد في حالات الطوارئ.", mpBen1Title: "تكامل الأنظمة", mpBen1Desc: "فنيون مهرة في تنسيق التركيبات المعقدة للميكانيكا والكهرباء والسباكة في المشاريع الكبرى.", mpBen2Title: "جاهزية الفحص", mpBen2Desc: "موظفون مدربون على تركيب الأنظمة بما يتوافق مع الدفاع المدني والهيئات التنظيمية لضمان النجاح من أول مرة.", mpBen3Title: "التعبئة السريعة", mpBen3Desc: "القدرة على تزويد المشاريع سريعة الوتيرة بفرق MEP كبيرة وذات خبرة فنية عالية.", mpFaqQ1: "ما هي مهن MEP المحددة التي توفرون عمالة لها؟", mpFaqA1: "نحن نوفر قوى عاملة متخصصة لجميع مهن MEP بما في ذلك الكهربائيين، والسباكين، وفنيي التكييف (HVAC)، وفنيي الدكت (Duct Fabricators)، ومشرفي MEP.", mpFaqQ2: "هل لدى فنيي التكييف لديكم خبرة في محطات التبريد واسعة النطاق؟", mpFaqA2: "نعم، فنيونا ذوو خبرة واسعة في العمل في محطات تبريد المناطق، والمبردات الصناعية، وأنظمة HVAC التجارية الكبرى في جميع أنحاء الإمارات.", mpFaqQ3: "كيف تضمنون جودة تركيبات MEP؟", mpFaqA3: "نحن نوظف فقط الفنيين ذوي المهارات المثبتة ونقوم بالفحص المستمر لضمان الالتزام بمواصفات المشروع ومعايير DEWA/ADDC والدفاع المدني.", mpFaqQ4: "هل يمكنك توفير فرق MEP لمشاريع المستشفيات أو المختبرات؟", mpFaqA4: "نعم، نحن نوفر فنيين متخصصين ومدركين للمتطلبات الصارمة لبيئات الرعاية الصحية، بما في ذلك أنظمة الغازات الطبية ومتطلبات التهوية المعينة.", mpFaqQ5: "ما هو الوقت المعتاد لتعبئة فريق MEP كبيير؟", mpFaqA5: "بالنسبة للفرق الكبيرة، يمكننا بدء التعبئة التدريجية في غضون 10-14 يوماً، مع توفر الفرق الأساسية بشكل أسرع اعتماداً على المتطلبات الفنية.", mpFaqQ6: "هل توفرون مشرفين ومهندسين MEP؟", mpFaqA6: "نعم، كادرنا من قوى MEP العاملة يشمل مهندسي MEP ذوي خبرة، ومشرفين، وفورمنية قادرين على قيادة الفرق وضمان تنفيذ المشروع بدقة.", recHeroTitle: "حلول توظيف متميزة في الإمارات", recHeroText: "قم بتمكين عملك بنخبة المواهب. نحن نقدم خدمات توظيف استراتيجية لمساعدتك على التوسع.", recChooseTitle: "ارفع مستوى قوتك العاملة من خلال التوظيف الدقيق", recChooseP1: "مرحباً بكم في معيار جديد للتوظيف. في Smaar Elysium، نمزج بين الخبرة الصناعية واللمسة الشخصية لربطك بالمهنيين الذين يقودون تأثيراً حقيقياً للأعمال. يتم تحديد نهجنا من خلال الفحص الدقيق والمصادر الاستباقية والالتزام الراسخ بالجودة.", recChooseP2: "في المشهد المؤسسي سريع الخطى اليوم، فإن امتلاك الأشخاص المناسبين هو الميزة التنافسية النهائية.", recChooseP3: "نحن نؤمن بأن التوظيف الناجح يتجاوز مطابقة السير الذاتية مع المسميات الوظيفية. يتطلب الأمر فهماً عميقاً لثقافة شركتك وأهدافها الاستراتيجية ورؤيتها طويلة المدى. تضمن أساليبنا المخصصة لاكتساب المواهب العثور على مرشحين يندمجون بسلاسة مع فريقك.", recChooseP4: "شاركنا لتحويل عملية التوظيف الخاصة بك. من الأدوار المتخصصة إلى التوظيف الجماعي، توفر Smaar Elysium الدعم الاستراتيجي الذي تحتاجه لبناء مؤسسة عالية الأداء ومستعدة للمستقبل.", recLogoSlogan: "شريكك الموثوق في القوى العاملة", recGrid1: "تجاوز المعتاد", recGrid2: "وتميز", recGrid3: "ابحث عن القادة", recGrid4: "المناسبين", recBtsTitle: "ابنِ فريقاً عالى الأداء مصمماً خصيصاً لك", recBtsP1: "يبدأ إطلاق العنان لإمكانيات شركتك الكاملة بتحديد احتياجاتك الدقيقة. تضمن عملية التوظيف القائمة على الدقة لدينا التوافق بين أهدافك الاستراتيجية والمهنيين المتميزين الذين نقدمهم.", recBtsP2: "التقييم الصارم للمرشحين هو أساس نجاحنا. نحن ننظر إلى ما هو أبعد من السيرة الذاتية، ونقيم المهارات الفنية، والتوافق الثقافي، والإمكانات طويلة المدى. تعني هذه المنهجية الشاملة أنك تقابل الأفضل فقط.", recBtsP3: "ارفع قدرات عملك. اترك Smaar Elysium تدير تعقيدات اكتساب المواهب حتى تتمكن من التركيز على ما يهم أكثر - دفع عملك إلى الأمام.", recWhyTitle: "لماذا تختارنا", recWhyIntro: "اخترنا لتوظيف يتجاوز التقليدي. جرب الاختلاف في اكتساب المواهب الشخصية، والفحص الدقيق للمرشحين، واستراتيجيات التوظيف المصممة حصرياً لنجاحك.", recBenefit1Title: "اكتساب مواهب مخصص", recBenefit1Desc: "نحن لا نؤمن بحل واحد يناسب الجميع. نهجنا مخصص، مما يضمن أن المرشحين الذين نجلبهم يطابقون ليس فقط متطلبات الوظيفة ولكن أيضاً ثقافتك التنظيمية الفريدة.", recBenefit2Title: "فحص دقيق للمرشحين", recBenefit2Desc: "يمتد التزامنا بالجودة إلى عملية الفحص الخاصة بنا. نحن نتعمق في اكتشاف المهارات فحسب، بل أيضاً الصفات غير الملموسة التي تجعل المرشح مناسباً لثقافة فريقك.", recBenefit3Title: "استراتيجيات توظيف شخصية", recBenefit3Desc: "ندرك أن كل عميل متميز، ولذلك نصيغ استراتيجيات توظيف مصممة خصيصاً لاحتياجاتك الخاصة. سواء كان ذلك توظيفاً جماعياً أو أدواراً متخصصة، فنحن نكيف نهجنا لتحقيق أقصى قدر من الكفاءة.", msHeroTitle: "شركة توريد قوى عاملة في الإمارات", msHeroText: "الشركة الأولى لتوريد القوى العاملة في الإمارات، نقدم خدمات توريد عمالة عالية الجودة على أساس الساعة في جميع الإمارات. ١٥ عاماً من الخدمة.", msBtnBook: "حجز القوى العاملة عبر الإنترنت", msIntroText: "يتطلب سوقنا سريع التطور والرشيق باستمرار توظيف المزيد من الخبراء لتقديم أفضل النتائج. نحن نقدم خدمات توريد قوى عاملة شاملة عبر مجالات متعددة.", msCat1Title: "العمالة المدنية", msCat1Desc: "من وضع الأساس إلى استخراج اللمسات النهائية، تضمن العمالة المدنية تنفيذ مشاريع البناء الخاصة بك بلا عيوب.", msCat2Title: "العمالة الكهربائية", msCat2Desc: "بغض النظر عن الصناعة أو المجال الذي تعمل فيه، فإن الإعداد الكهربائي الآمن هو أول طبقة من الحماية يمكنك توفيرها. لمساعدتك، يوفر فريق Smaar Elysium فرقاً خبيرة للعمل من أجلك.", msCat3Title: "العمالة الميكانيكية", msCat3Desc: "العمل في مشروع بموعد نهائي يضع ضغطاً إضافياً على الفريق الحالي. سيوفر لك توريد العمالة الميكانيكية لدينا الاستعداد للتسليم وفقاً للمواعيد المحددة وتحقيق جميع أهدافك قصيرة المدى.", msCat4Title: "العمالة المساعدة (Helpers)", msCat4Desc: "يمكنك بالفعل فهم ذلك من الاسم، المساعد هو الشخص الذي يساعدك في إنهاء المهمة الحالية في الوقت المناسب. تمتلك Smaar Elysium شبكة واسعة من المساعدين الموثوقين الذين يمكنهم العمل وفقاً لشروطك ومتطلباتك.", msRoleCivilEngineer: "مهندس مدني", msRoleCivilEngineerDesc: "هندسة خبيرة لإدارة المشاريع والسلامة الإنشائية.", msRoleCivilSupervisor: "مشرف مدني", msRoleCivilSupervisorDesc: "إدارة الموقع لضمان مطابقة جميع الأعمال المدنية لمعايير الجودة.", msRoleCivilForeman: "فورمان مدني", msRoleCivilForemanDesc: "توجيه الطواقم لأداء مثالي في أعمال البناء والتبليط وغيرها.", msRoleChargehand: "رئيس مجموعة", msRoleChargehandDesc: "قادة ذوو خبرة لتجسير التواصل بين الفورمان والطاقم.", msRoleScaffolderNormal: "فني سقالات عادي", msRoleScaffolderNormalDesc: "تجميع آمن وفعال لهياكل الدعم لأي ارتفاع إنشائي.", msRoleCertifiedScaffolder: "فني سقالات معتمد", msRoleCertifiedScaffolderDesc: "خبرة في السقالات متوافقة مع معايير الصحة والسلامة للبيئات عالية المخاطر.", msRoleSteelFixer: "حداد مسلح", msRoleSteelFixerDesc: "تركيب وتأمين قضبان الصلب لتعزيز الهياكل الخرسانية.", msRoleShutteringCarpenter: "نجار مسلح", msRoleShutteringCarpenterDesc: "إنشاء قوالب دقيقة لصب الخرسانة وتشكيل الهياكل.", msRoleGypsumCarpenter: "نجار جبس", msRoleGypsumCarpenterDesc: "متخصصون في تركيب ألواح الجبس للجدران والأسقف.", msRoleFinishingCarpenter: "نجار تشطيبات", msRoleFinishingCarpenterDesc: "نجارة تفصيلية للتصاميم الداخلية والأبواب والتركيبات الخبيرة.", msRoleBlockMason: "بناء طابوق", msRoleBlockMasonDesc: "بناء ماهر للجدران والهياكل المتينة باستخدام الطابوق.", msRolePlasterMason: "مبيض محارة", msRolePlasterMasonDesc: "تقديم تشطيبات جص (بلاستر) عالية الجودة للجدران الداخلية والخارجية.", msRoleTileMason: "مبلط", msRoleTileMasonDesc: "تبليط دقيق للارضيات والجدران في المشاريع التجارية والسكنية.", msRoleSandBlaster: "فني صنفرة بالرمل", msRoleSandBlasterDesc: "تجهيز وتنظيف الأسطح الاحترافي للمكونات الصناعية.", msRoleWallPainter: "صباغ جدران", msRoleWallPainterDesc: "تطبيق خبير للدهانات للتشطيبات الجدارية الواقية والجمالية.", msRoleSprayPainter: "صباغ رش", msRoleSprayPainterDesc: "تشطيبات رش موحدة عالية الجودة للأثاث والقطع الصناعية.", msRoleWoodPolisher: "ملمع خشب", msRoleWoodPolisherDesc: "تحسين الأسطح الخشبية باستخدام أصباغ وملمعات احترافية.", msRoleWoodPainter: "صباغ خشب", msRoleWoodPainterDesc: "دهان واقي وديكوري مصمم خصيصاً للهياكل الخشبية.", msRoleRigger: "فني تربيط (رجر)", msRoleRiggerDesc: "مناولة وتأمين الأحمال الثقيلة للرفع الآمن.", msRoleCivilHelper: "مساعد مدني", msRoleCivilHelperDesc: "عمالة عامة موثوقة لدعم جميع عمليات مواقع البناء.", msRoleSafetyOfficer: "مسؤول سلامة", msRoleSafetyOfficerDesc: "ضمان امتثال الموقع للوائح الصحة والسلامة والبيئة.", msRoleElectricalEngineer: "مهندس كهرباء", msRoleElectricalEngineerDesc: "تصميم وإشراف على الأنظمة الكهربائية المعقدة وتوزيع الطاقة.", msRoleElectricalSupervisor: "مشرف كهرباء", msRoleElectricalSupervisorDesc: "مراقبة التركيبات الكهربائية لضمان الالتزام بقواعد السلامة.", msRoleElectricalForeman: "فورمان كهرباء", msRoleElectricalForemanDesc: "قيادة فرق الكهرباء للتمديد والتركيب والاختبار الفعال.", msRoleElectrician: "كهربائي", msRoleElectricianDesc: "تركيب وصيانة ماهرة للدوائر والمعدات الكهربائية.", msRoleAssistantElectrician: "مساعد كهربائي", msRoleAssistantElectricianDesc: "دعم كبار الفنيين في الأسلاك وتركيبات الأنظمة.", msRoleInstrumentTechnician: "فني أجهزة قياس", msRoleInstrumentTechnicianDesc: "معايرة وإصلاح أجهزة القياس الصناعية الحساسة.", msRoleInstrumentFitter: "فني تركيب أجهزة", msRoleInstrumentFitterDesc: "تركيب وتمديدات دقيقة لأنظمة التحكم والأجهزة.", msRoleLowVoltageTechnician: "فني جهد منخفض", msRoleLowVoltageTechnicianDesc: "خبرة في الاتصالات وأنظمة الأمن وتمديد كابلات البيانات.", msRoleElectricalHelper: "مساعد كهربائي", msRoleElectricalHelperDesc: "مساعدة عامة في سحب الكابلات ومناولة المواد.", msRoleMechanicalEngineer: "مهندس ميكانيك", msRoleMechanicalEngineerDesc: "تخطيط استراتيجي وصيانة للآلات الصناعية وأنظمة التكييف (HVAC).", msRoleMechanicalSupervisor: "مشرف ميكانيك", msRoleMechanicalSupervisorDesc: "إشراف تشغيلي لمشاريع التجميع والتركيب الميكانيكية.", msRoleMechanicalForeman: "فورمان ميكانيك", msRoleMechanicalForemanDesc: "تنسيق الفنيين لإصلاح وتركيب الآلات.", msRoleMillwrightFitter: "فني تركيب آلات (ميلت رايت)", msRoleMillwrightFitterDesc: "متخصصون في تركيب ومحاذاة وصيانة الآلات الدوارة الثقيلة.", msRolePipeFitter: "فني تركيب أنابيب", msRolePipeFitterDesc: "تركيب وصيانة أنظمة الأنابيب عالية الضغط للاستخدام الصناعي.", msRolePipeFabricator: "فني تشكيل أنابيب", msRolePipeFabricatorDesc: "قطع ولحام الأنابيب وفقاً للمخططات الهندسية المحددة.", msRoleStructuralFabricator: "فني تشكيل هياكل", msRoleStructuralFabricatorDesc: "صناعة مكونات فولاذية ثقيلة لأطر المباني.", msRolePlumber: "سباك", msRolePlumberDesc: "تركيبات أنظمة إمدادات المياه والصرف الصحي الخبيرة.", msRole6GWelder: "لحام 6G", msRole6GWelderDesc: "لحام متخصص معتمد لأنابيب وخزانات الضغط العالي.", msRoleArcWelder: "لحام قوس كهربائي", msRoleArcWelderDesc: "لحام احترافي للإصلاحات الإنشائية والصناعية العامة.", msRoleDuctFitter: "فني تركيب قنوات تكييف", msRoleDuctFitterDesc: "تركيب قنوات التهوية وتكييف الهواء.", msRoleDuctFabricator: "فني تشكيل قنوات تكييف", msRoleDuctFabricatorDesc: "تشكيل وتجميع دقيق لأنظمة قنوات التكييف (HVAC).", msRoleInsulator: "عامل عزل", msRoleInsulatorDesc: "عزل حراري وصوتي للأنابيب والقنوات والجدران.", msRoleMechanicalHelper: "مساعد ميكانيك", msRoleMechanicalHelperDesc: "دعم عام لفرق التركيب والتشكيل الميكانيكي.", msRoleGeneralHelper: "عامل عام", msRoleGeneralHelperDesc: "دعم عمالي متنوع للتنظيف والنقل وصيانة الموقع.", msRoleLoadingUnloading: "عامل تحميل وتفريغ", msRoleLoadingUnloadingDesc: "مناولة فعالة للبضائع لعمليات اللوجستيات والمستودعات.", msRoleWarehouseHelper: "مساعد مستودع", msRoleWarehouseHelperDesc: "دعم مهام إدارة المخزون وتلبية الطلبات.", msRolePackingHelper: "عامل تغليف", msRolePackingHelperDesc: "تغليف دقيق للمنتجات لضمان النقل والتسليم الآمن.", msRoleKitchenHelper: "مساعد مطبخ", msRoleKitchenHelperDesc: "المساعدة في إعداد الطعام والحفاظ على نظافة المطبخ.", msRoleCleaningHelper: "عامل تنظيف", msRoleCleaningHelperDesc: "خدمات تنظيف موثوقة للمكاتب والمواقع والمرافق التجارية.", csHeroTitle: "حلول التوظيف التعاقدي في الإمارات", csHeroText: "هل تبحث عن حلول قوى عاملة مرنة مصممة خصيصاً لاحتياجات مشروعك؟ توفر Smaar Elysium توظيفاً تعاقدياً من الطراز الأول لجميع الصناعات.", csIntroTitle: "اختر الأفضل لك", csIntroText: "مرحباً بكم في خدمات التوظيف التعاقدي لدينا - حيث تبدأ مرونة عملك. يتألف فريقنا من خبراء صناعيين مطلعين جيداً على تعقيدات حلول القوى العاملة المرنة.", csChooseTitle: "اختر الأفضل لك", csChooseP1: "ادخل إلى عالم خدمات التوظيف التعاقدي المخصصة لدينا، حيث تلتقي السرعة بالدقة لتجربة قوى عاملة لا تضاهى. تعيد نقاط قوتنا الأساسية تعريف التوظيف المؤقت مع التركيز على النشر الرشيق، والفحص الدقيق للمرشحين، واستراتيجيات التعاقد القابلة للتطوير.", csChooseP2: "في بيئة الأعمال المتطورة باستمرار، تعد الإدارة الفعالة لقوتك العاملة المرنة عاملاً رئيسياً محدداً للنجاح.", csChooseP3: "تتفوق خدمات التوظيف التعاقدي لدينا في تقديم حلول مؤقتة مخصصة مصممة لتناسب متطلبات المشروع الفريدة لمؤسستك. في هذا العصر من التحولات السريعة، يحظى الوصول إلى المواهب التعاقدية الماهرة بأهمية أكبر من أي وقت مضى.", csChooseP4: "إدراكاً للدور المحوري الذي تلعبه القوة العاملة المرنة المؤهلة في تعزيز رشاقة الأعمال، يلبي فريقنا الملتزم احتياجات التوظيف التعاقدي الخاصة بك بشكل شامل. نحن نضمن وصول شركتك إلى مجموعة متنوعة من المهنيين الموهوبين الذين يتماشون مع جداولك الزمنية للمشروع.", csChooseP5: "اسمح لنا بالعمل كشريك استراتيجي لك في بناء فريق تعاقدي كفء ومتحمس، مما يمكن عملك من الازدهار وسط المنافسة الشرسة في السوق.", csLogoSlogan: "شريكك الموثوق في القوى العاملة", csGrid1: "تجاوز المعتاد", csGrid2: "وتميز", csGrid3: "ابحث عن القادة", csGrid4: "المناسبين", csBtsTitle: "ابنِ قوتك العاملة المرنة من خلال خدماتنا", csBtsP1: "أطلق العنان لإمكانات عملك من خلال حلول التوظيف قصيرة الأجل والقائمة على العقود المصممة للتوسع مع متطلبات مشروعك. يضمن التوظيف التعاقدي لدينا حصولك على الموهبة المناسبة بالضبط عندما تحتاج إليها.", csBtsP2: "قلل التكاليف العامة وقلل من تعقيدات الرواتب. نحن نتولى العبء الإداري للموظفين المتعاقدين حتى تتمكن من التركيز بالكامل على تنفيذ المشروع ونمو الأعمال.", csBtsP3: "جرب رشاقة التوظيف التي تتكيف مع تقلبات السوق. دعنا ندمج المهنيين المتعاقدين بسلاسة في فريقك، مما يضمن التميز المستمر والكفاءة التشغيلية.", csWhyTitle: "لماذا تختارنا", csWhyIntro: "اخترنا للتوظيف التعاقدي الذي يتجاوز التقليدي. جرب الاختلاف في اكتساب المواهب المرنة، والتوظيف السريع، واستراتيجيات القوى العاملة المصممة حصرياً لنجاح مشروعك.", csBenefit1Title: "النشر الرشيق للمواهب", csBenefit1Desc: "نحن لا نؤمن بالتأخيرات الطويلة. يضمن نهجنا المصادر السريعة والتوظيف السريع للمهنيين المتعاقدين لتلبية المواعيد النهائية الفورية للمشروع.", csBenefit2Title: "إدارة شاملة لكشوف المرتبات", csBenefit2Desc: "يمتد التزامنا إلى ما هو أبعد من المصادر. نحن نتعامل مع جميع إجراءات الامتثال وكشوف المرتبات وإدارة الموارد البشرية للموظفين المتعاقدين، مما يقلل من عبئك التشغيلي.", csBenefit3Title: "استراتيجيات توظيف قابلة للتطوير", csBenefit3Desc: "إدراكاً منا بأن احتياجات المشروع تتقلب، نصيغ استراتيجيات قابلة للتطوير. سواء كان ذلك ارتفاعاً موسمياً أو مرحلة مشروع محددة، فإننا نتكيف لتحقيق أقصى قدر من الكفاءة.", csFaqQ1: "ما هو التوظيف التعاقدي؟", csFaqA1: "التوظيف التعاقدي هو تعيين موظفين على أساس قصير الأجل لمشاريع أو أدوار محددة، مما يوفر المرونة للمؤسسة.", csFaqQ2: "ما هي الفوائد لأصحاب العمل؟", csFaqA2: "يستفيد أصحاب العمل من توفير التكاليف في المزايا طويلة الأجل، والمرونة في حجم القوة العاملة، والوصول إلى مهارات متخصصة لمدد محددة.", csFaqQ3: "كيف يختلف التوظيف التعاقدي عن التعيين الدائم؟", csFaqA3: "التوظيف التعاقدي مرتبط بالزمن ومحدد بالمشروع، في حين يتضمن التعيين الدائم توظيفاً طويل الأمد مع المؤسسة.", csFaqQ4: "هل يمكن أن يؤدي ذلك إلى توظيف دائم؟", csFaqA4: "نعم، تسمح العديد من ترتيبات 'التعاقد للتوظيف' لأصحاب العمل بتقييم مدى ملاءمة المتعاقد قبل تقديم منصب دائم.", csFaqQ5: "كيف يتم إدارة مزايا المتعاقدين؟", csFaqA5: "عادة ما يتم إدارة مزايا المتعاقدين من قبل وكالة التوظيف، مما يبسط العبء الإداري لمؤسسة العميل.", csFaqQ6: "ما هي الصناعات التي تستخدم التوظيف التعاقدي؟", csFaqA6: "تستخدم صناعات مثل تكنولوجيا المعلومات والبناء والرعاية الصحية والتمويل التوظيف التعاقدي بشكل متكرر لتلبية المتطلبات الموسمية أو القائمة على المشاريع.", esHeroTitle: "حلول البحث التنفيذي في الإمارات", esHeroText: "هل تبحث عن قادة ذوي رؤية لتوجيه منظمتك؟ توفر Smaar Elysium خدمات بحث تنفيذي سرية وعالية الجودة عبر جميع الصناعات في الإمارات.", esChooseTitle: "اختر الأفضل لك", esChooseP1: "ادخل إلى عالم خدمات البحث التنفيذي المخصصة لدينا، حيث تلتقي الدقة بالسرية لتجربة اكتساب قيادية لا تضاهى. تعيد نقاط قوتنا الأساسية تعريف التوظيف التنفيذي مع التركيز على رسم خرائط المواهب السرية، وتقييمات القيادة الصارمة، واستراتيجيات C-suite المخصصة.", esChooseP2: "في المشهد التنافسي للأعمال اليوم، يعد القادة المناسبون العامل الأكثر أهمية في نجاح منظمتك.", esChooseP3: "تتفوق خدمات البحث التنفيذي لدينا في تقديم حلول قيادية مخصصة تعالج الرؤية الفريدة والمتطلبات الثقافية لمنظمتك. في هذا العصر من التحولات السريعة في الأعمال، يحظى جذب الموهبة التنفيذية المناسبة بأهمية أكبر من أي وقت مضى.", esChooseP4: "إدراكاً للدور التحويلي الذي يلعبه كبار القادة في دفع نمو الأعمال، يدعم فريقنا الاستشاري الخبير احتياجات التوظيف التنفيذي الخاصة بك بشكل شامل. نحن نضمن وصول شركتك إلى مجموعة متميزة من المهنيين رفيعي المستوى الذين يتماشون مع أهدافك الاستراتيجية.", esChooseP5: "اسمح لنا بالعمل كشريك موثوق لك في بناء فريق قيادي عالمي المستوى، مما يمكن عملك من الازدهار وتحقيق التميز المستدام.", esLogoSlogan: "شريكك الموثوق في القوى العاملة", esGrid1: "تجاوز المعتاد", esGrid2: "وتميز", esGrid3: "ابحث عن القادة", esGrid4: "المناسبين", esBtsTitle: "ابنِ فريقك القيادي من خلال البحث التنفيذي لدينا", esBtsP1: "يبدأ إطلاق العنان للإمكانات بالتزامنا بفهم ثقافتك التنظيمية ورؤيتك الاستراتيجية. تضمن عملية البحث التنفيذي المخصصة لدينا تطابقاً سلساً بين متطلباتك القيادية والأفراد الاستثنائيين الذين نحددهم من خلال شبكتنا العالمية.", esBtsP2: "تقييم القيادة الصارم هو حجر الزاوية في نهجنا. نحن نذهب إلى ما هو أبعد من أوراق الاعتماد، حيث نقيم التفكير الاستراتيجي والتوافق الثقافي والتأثير على المدى الطويل. تضمن منهجيتنا الدقيقة وصول القادة الأكثر تأهيلاً فقط إلى قائمتك المختصرة.", esBtsP3: "جرب خدمات التوظيف التنفيذي التي ترفع فريقك القيادي إلى آفاق جديدة. دعنا نتنقل في التعقيدات، حتى تتمكن من التركيز على دفع النجاح الاستراتيجي.", esWhyTitle: "لماذا تختارنا", esWhyIntro: "اخترنا للبحث التنفيذي الذي يتجاوز التقليدي. جرب الاختلاف في تحديد المواهب السرية، وتقييم القيادة الصارم، وحلول النشر الاستراتيجية المصممة حصرياً لنجاح منظمتك.", esBenefit1Title: "رسم خرائط المواهب السرية", esBenefit1Desc: "نجري تواصلًا سريًا ومنظمًا مع كبار المرشحين السلبيين، مع الحفاظ على السرية التامة لمنظمتك وللمرشحين الذين نشركهم نيابة عنك.", esBenefit2Title: "تقييم قيادي صارم", esBenefit2Desc: "يمتد التزامنا إلى ما هو أبعد من المصادر. نحن نقيم الكفاءات القيادية والتوافق الثقافي والملاءمة الاستراتيجية طويلة المدى باستخدام أطر عمل وأدوات نفسية مثبتة.", esBenefit3Title: "استراتيجيات تنفيذية مخصصة", esBenefit3Desc: "كل بحث تنفيذي هو تجربة فريدة. نصيغ استراتيجيات بحث مخصصة تتماشى مع صناعتك وثقافتك التنظيمية ورؤية نموك - مما يضمن القائد المناسب للحظة المناسبة.", esFaqQ1: "ما هو البحث التنفيذي؟", esFaqA1: "البحث التنفيذي هو خدمة توظيف متخصصة تستخدم لاستقطاب مرشحين لأدوار قيادية رفيعة المستوى.", esFaqQ2: "كيف يختلف عن التوظيف العادي؟", esFaqA2: "يتضمن نهجاً استباقياً للاستقطاب المباشر (Headhunting)، مع التركيز على المرشحين 'السلبيين' الذين قد لا يبحثون بنشاط عن أدوار جديدة.", esFaqQ3: "ما هي منهجية البحث لديكم؟", esFaqA3: "تتضمن منهجيتنا بحثاً عميقاً في الصناعة، والتواصل عبر الشبكات، وعملية تدقيق متعددة المراحل لضمان الملاءمة الثقافية والفنية.", esFaqQ4: "كم من الوقت يستغرق البحث؟", esFaqA4: "عادة ما تستغرق عمليات البحث التنفيذي ما بين 6 إلى 12 أسبوعاً، اعتماداً على تعقيد الدور وتخصص الصناعة.", esFaqQ5: "كيف تضمنون السرية؟", esFaqA5: "نحن نحافظ على سرية تامة طوال العملية، مما يضمن حماية المعلومات الحساسة لكل من العميل والمرشح.", esFaqQ6: "ما هي الصناعات التي تتخصصون فيها؟", esFaqA6: "نحن نتخصص في قطاعات البناء والطاقة والتكنولوجيا والخدمات المالية في جميع أنحاء منطقة الإمارات العربية المتحدة.", esIntroTitle: "اختر الأفضل لك", esIntroText: "مرحباً بكم في خدمات البحث التنفيذي لدينا - حيث تبدأ القيادة الاستثنائية. استشاريونا هم متخصصون في الصناعة يدركون ما يلزم للعثور على أفضل المديرين التنفيذيين في العالم وجذبهم.", hrHeroTitle: "حلول تعهيد الموارد البشرية في الإمارات", hrHeroText: "هل تبحث عن تبسيط عمليات الموارد البشرية وتقليل التكاليف العامة؟ توفر Smaar Elysium خدمات تعهيد موارد بشرية شاملة تحافظ على امتثال قوتك العاملة وتحفيزها وإنتاجيتها في جميع أنحاء الإمارات.", hrChooseTitle: "اختر الأفضل لك", hrChooseP1: "ادخل إلى عالم خدمات تعهيد الموارد البشرية المخصصة لدينا، حيث يلتقي الامتثال بالتميز التشغيلي لتجربة موارد بشرية لا تضاهى. تعيد نقاط قوتنا الأساسية تعريف إدارة الموارد البشرية مع التركيز على دقة الرواتب والامتثال التنظيمي واستراتيجيات 'الإنسان أولاً'.", hrChooseP2: "في بيئة الأعمال المتطورة باستمرار في الإمارات، تعد الإدارة الفعالة لوظيفة الموارد البشرية عاملاً حاسمماً في نجاح المؤسسة ورضا الموظفين.", hrChooseP3: "تتفوق خدمات تعهيد الموارد البشرية لدينا في تقديم حلول مخصصة مصممة لتناسب المتطلبات التنظيمية والثقافية الفريدة لمنظمتك. في هذا العصر من التغيير السريع، يحظى الحفاظ على قوة عاملة ممتثلة ومتفاعلة بأهمية أكبر من أي وقت مضى.", hrChooseP4: "إدراكاً للدور الاستراتيجي الذي تلعبه إدارة الموارد البشرية المنظمة في دفع أداء الأعمال، يدير فريقنا الخبير احتياجات الموارد البشرية الخاصة بك بشكل شامل - من اليوم الأول وحتى الاحتفاظ بالموظفين على المدى الطويل.", hrChooseP5: "اسمح لنا بالعمل كشريك موارد بشرية مخصص لك، مما يمكن عملك من تقليل التكاليف والقضاء على مخاطر الامتثال وبناء ثقافة عمل مزدهرة.", hrLogoSlogan: "شريكك الموثوق في القوى العاملة", hrGrid1: "تجاوز المعتاد", hrGrid2: "وتميز", hrGrid3: "ابحث عن القادة", hrGrid4: "المناسبين", hrBtsTitle: "ابنِ أساس الموارد البشرية الخاص بك من خلال خدمات التعهيد لدينا", hrBtsP1: "أطلق العنان للكفاءة التنظيمية من خلال تعهيد وظيفة الموارد البشرية بالكامل لفريقنا المتخصص. من معالجة الرواتب وإدارة الإجازات إلى الامتثال لوزارة الموارد البشرية والتوطين (MOHRE) وعلاقات الموظفين، نتولى ملكية كاملة لعمليات الموارد البشرية الخاصة بك.", hrBtsP2: "تخلص من مخاطر الامتثال والعبء الإداري. يظل متخصصو الموارد البشرية المخصصون لدينا على دراية بتعديلات قانون العمل الإماراتي لضمان حماية شركتك دائمًا وجاهزيتها للتدقيق وتوافقها مع أفضل الممارسات الصناعية.", hrBtsP3: "جرب إدارة الموارد البشرية التي تحول قوتك العاملة إلى ميزة تنافسية. دعنا نتولى تعقيدات عمليات الأفراد، حتى تتمكن من التركيز تماماً على نمو عملك.", hrWhyTitle: "لماذا تختارنا", hrWhyIntro: "اخترنا لتعهيد الموارد البشرية الذي يتجاوز المعالجة الإدارية. جرب الاختلاف في الشراكة الاستراتيجية للموارد البشرية، والامتثال المضمون، ونهج 'الإنسان أولاً' المصمم حصرياً لنجاح منظمتك على المدى الطويل.", hrBenefit1Title: "إدارة موارد بشرية شاملة", hrBenefit1Desc: "نحن لا نعالج كشوف المرتبات فحسب - نحن ندير نظام الموارد البشرية البيئي بالكامل. من التوظيف وتنفيذ السياسات إلى مراجعات الأداء وإنهاء الخدمة، نتولى كل نقطة اتصال في الموارد البشرية.", hrBenefit2Title: "الامتثال لقانون العمل الإماراتي", hrBenefit2Desc: "يراقب متخصصو الموارد البشرية لدينا باستمرار لوائح وزارة الموارد البشرية والتوطين وتحديثات قانون العمل الإماراتي. نقوم بالتدقيق الاستباقي لممارسات الموارد البشرية الخاصة بك وتنفيذ تدابير تصحيحية قبل ظهور المشاكل.", hrFaqQ1: "ما هي وظائف الموارد البشرية التي يمكنني تعهيدها؟", hrFaqA1: "يمكنك تعهيد مجموعة واسعة من وظائف الموارد البشرية بما في ذلك معالجة الرواتب، وإدارة المزايا، وإدارة الامتثال، والتوظيف، والتوجيه، وعلاقات الموظفين.", hrFaqQ2: "ما هي الفوائد الرئيسية لتعهيد الموارد البشرية؟", hrFaqA2: "تشمل الفوائد الرئيسية خفض التكاليف، وتحسين الامتثال لقوانين العمل، والوصول إلى خبرات الموارد البشرية، وزيادة الكفاءة، والقدرة على التركيز على أنشطة الأعمال الأساسية.", hrFaqQ3: "كيف يؤثر التعهيد على معنويات الموظفين؟", hrFaqA3: "عند إدارته بفعالية، يمكن لتعهيد الموارد البشرية تحسين معنويات الموظفين من خلال ضمان سياسات موارد بشرية متسقة، ورواتب في الوقت المحدد، ودعم مهني، مما يسمح للفرق الداخلية بالتركيز على المبادرات الاستراتيجية.", hrFaqQ4: "هل بياناتي آمنة مع مزود تعهيد موارد بشرية خارجي؟", hrFaqA4: "يعطي مزودو تعهيد الموارد البشرية ذوو السمعة الطيبة الأولوية لأمن البيانات، ويستخدمون تشفيراً متقدماً وخوادم آمنة واتفاقيات سرية صارمة لحماية بيانات موظفيك الحساسة.", hrFaqQ5: "هل يمكن تخصيص تعهيد الموارد البشرية لعملي؟", hrFaqA5: "نعم، حلول تعهيد الموارد البشرية لدينا قابلة للتخصيص للغاية. نحن نعمل معك عن كثب لفهم احتياجاتك المحددة وتخصيص خدماتنا لتتماشى مع أهداف عملك وثقافتك.", hrFaqQ6: "كيف تضمنون الامتثال لقوانين العمل الإماراتية؟", hrFaqA6: "يبقى فريقنا من خبراء الموارد البشرية على اطلاع دائم بأحدث قوانين ولوائح العمل الإماراتية. نحن نطبق تدابير الامتثال بشكل استباقي ونقدم التوجيه لضمان بقاء عملك ممتثلاً تماماً.", hrIntroTitle: "اختر الأفضل لك", hrIntroText: "مرحباً بكم في خدمات تعهيد الموارد البشرية لدينا - حيث تلتقي الكفاءة التشغيلية بتميز القوى العاملة. خبراء الموارد البشرية لدينا متجذرون بعمق في لوائح العمل الإماراتية ويقدمون حلول موارد بشرية سلسة وشاملة.", hrBenefit3Title: "حلول موارد بشرية قابلة للتوسع", hrBenefit3Desc: "سواء كنت شركة ناشئة متنامية أو مؤسسة كبيرة، فإن خدمات تعهيد الموارد البشرية لدينا تتوسع مع احتياجاتك. نكيف نطاق خدماتنا وحجم فريقنا وأدوات التكنولوجيا الخاصة بنا مع تطور قوتك العاملة.", footerDesc: "تقديم حلول متميزة للقوى العاملة منذ عام ٢٠٠٣. نحن رواد في التوظيف والتوظيف التعاقدي وتعهيد الموارد البشرية في الإمارات العربية المتحدة.", sectorsTitle: "القطاعات", mepSolutions: "حلول الميكانيكا والكهرباء والسباكة", dubai: "دبي", rightsReserved: "جميع الحقوق محفوظة.", designedBy: "صمم بواسطة The Patterns Company", aboutTitle: "من نحن", whoWeAre: "من نحن", aboutDesc: "Smaar Elysium هي وكالة رائدة لتوريد القوى العاملة والتوظيف مقرها في الإمارات العربية المتحدة، مكرسة لربط المواهب الاستثنائية مع المؤسسات البارزة عبر الصناعات المتنوعة في جميع أنحاء الدولة.", getInTouch: "اتصل بنا", ourJourney: "رحلتنا", journeyP1: "بدأت Smaar Elysium برؤية فريدة - لبناء شركة لتوريد القوى العاملة ذات مستوى عالمي تفهم حقاً الاحتياجات الديناميكية للشركات العاملة في جميع أنحاء الإمارات العربية المتحدة. على مر السنين، نمونا من استشارات توظيف مركزة إلى شريك حلول قوى عاملة شامل موثوق به عبر صناعات متعددة.", journeyP2: "مع أكثر من ٥ سنوات من الخبرة المشتركة، انتقل فريق القيادة لدينا عبر ظروف السوق المتنوعة وبنى شبكة مواهب قوية تمتد لتشمل المهنيين المهرة والعمال شبه المهرة والقادة على المستوى التنفيذي. نحن نفخر بمزج المعرفة العميقة بالسوق المحلي مع أفضل الممارسات الصناعية - لتقديم نتائج تتجاوز التوقعات باستمرار.", journeyP3: "اليوم، تقف Smaar Elysium كواحدة من أكثر الأسماء ثقة في الإمارات العربية المتحدة في توريد القوى العاملة، والتوظيف التعاقدي، وتعهيد الموارد البشرية، والبحث التنفيذي - لخدمة العملاء في مجالات البناء وإدارة المرافق والخدمات اللوجستية والأمن وغيرها.", yearsExp: "سنوات من الخبرة", profPlaced: "المهنيين الذين تم توظيفهم", activeClients: "العملاء النشطون", indServed: "الصناعات التي نخدمها", ourMission: "مهمتنا", missionDesc: "أن نكون شريك القوى العاملة الأكثر موثوقية وتطلعاً في الإمارات العربية المتحدة - من خلال تقديم حلول قوى عاملة مصممة خصيصاً تمكن الشركات من التوسع بثقة. نحن ملتزمون بربط الأشخاص المناسبين بالفرص المناسبة من خلال الاختيار الصارم والتميز في الامتثال والفهم العميق للمتطلبات التشغيلية الفريدة لكل عميل.", ourVision: "رؤيتنا", visionDesc: "البروز كمزود لحلول رأس المال البشري المتكاملة الأكثر ثقة في الإمارات العربية المتحدة - اسم مرادف للمواهب الجيدة والامتثال السلس واستراتيجيات القوى العاملة التحويلية. نطمح إلى أن نكون الشريك الذي تتوجه إليه كل مؤسسة طموحة عند بناء فرق تقود النمو المستدام.", whyChooseUs: "لماذا تختارنا", coreValues: "قيمنا الأساسية", valuesSubtitle: "المبادئ التي توجه كل قرار وكل عملية توظيف وكل شراكة في Smaar Elysium.", commitment: "الالتزام", commitmentDesc: "نحن مكرسون بلا هوادة لتقديم النتائج - توظيف المواهب المناسبة بدقة وسرعة واحترافية في كل مرة.", agility: "الرشاقة", agilityDesc: "نستجيب بسرعة للمتطلبات المتطورة للسوق، ونقدم حلول قوى عاملة مرنة تتكيف مع إيقاعات عملك.", partnership: "الشراكة", partnershipDesc: "نحن نرى أنفسنا كextension لفريقك - نستثمر في نجاحك من خلال علاقات تعاونية طويلة الأمد مبنية على أهداف مشتركة.", transparency: "الشفافية", transparencyDesc: "التواصل الواضح والتقييمات الصادقة والانفتاح التام في كل مشاركة - بناء الثقة التي تدعم الشراكات العظيمة.", compliance: "الامتثال", complianceDesc: "نتعامل مع قوانين العمل في الإمارات العربية المتحدة والأطر التنظيمية بخبرة، مما يضمن أن كل عملية توظيف متوافقة تماماً وخالية من المخاطر لمؤسستك.", peopleFirst: "الإنسان أولاً", peopleFirstDesc: "نحن نهتم حقاً بالمرشحين الذين نوظفهم والعملاء الذين نخدمهم - مما يخلق نتائج إيجابية لكل شخص ومؤسسة نعمل معها.", wwdSubtitle: "حلول القوى العاملة الشاملة", wwdDesc: "من توريد العمالة اليدوية إلى التوظيف على المستوى التنفيذي، نقدم مجموعة كاملة من حلول القوى العاملة المصممة للشركات الإماراتية عبر جميع الصناعات الرئيسية.", manpowerSupply: "توريد القوى العاملة", manpowerSupplyDesc: "قوة عاملة ماهرة وشبه ماهرة وغير ماهرة يتم نشرها بكفاءة لتتناسب مع الجداول الزمنية التشغيلية ومتطلبات الموقع الخاصة بك.", recruitmentTalent: "التوظيف واكتساب المواهب", recruitmentTalentDesc: "خدمات توظيف دائمة شاملة مدعومة بشبكة مواهب واسعة في جميع أنحاء الإمارات العربية المتحدة وعملية اختيار صارمة متعددة المراحل.", contractStaffing: "التوظيف التعاقدي", contractStaffingDesc: "حلول توظيف تعاقدية مرنة قصيرة وطويلة الأجل تمنحك مهنيين مهرة دون أعباء التوظيف الدائم.", exSearch: "البحث التنفيذي", exSearchDesc: "توظيف قيادي عالي الكفاءة وسري - تحديد وتأمين أفضل المواهب التنفيذية التي تدفع رؤيتك التنظيمية إلى الأمام.", hrOut: "تعهيد الموارد البشرية", hrOutDesc: "خدمات إدارة الموارد البشرية المتكاملة بما في ذلك معالجة الرواتب وإدارة الامتثال وإدارة دورة حياة الموظف.", secStaffing: "توظيف الأمن", secStaffingDesc: "موظفو أمن مرخصون من SIRA يتم نشرهم لواجبات الحراسة الثابتة والدوريات المتنقلة والتحكم في الوصول وأمن الفعاليات في جميع أنحاء الإمارات العربية المتحدة.", insightsTitle: "رؤى Smaar Elysium", insight1Title: "فهم مشهد القوى العاملة في الإمارات العربية المتحدة", insight1Desc: "يخلق الاقتصاد المتنوع والمتوسع بسرعة في الإمارات العربية المتحدة متطلبات فريدة للقوى العاملة عبر قطاعات البناء والتكنولوجيا والضيافة والتصنيع - ونحن في وضع مثالي لتلبيتها جميعاً.", insight2Title: "لماذا تهم الشراكة مع وكالة توظيف", insight2Desc: "بالنسبة للشركات التي تتوسع في جميع أنحاء الإمارات، يوفر شريك التوظيف المحلي الموثوق به مزايا هامة: دورات توظيف أسرع، وضمان الامتثال، والوصول إلى مجموعة مواهب مفحوصة مسبقاً.", insight3Title: "التنقل في الامتثال لقانون العمل الإماراتي", insight3Desc: "لوائح التوظيف في الإمارات العربية المتحدة دقيقة وتتطور باستمرار. يضمن خبراء الامتثال لدينا أن كل موظف يلبي متطلبات وزارة الموارد البشرية والتوطين الحالية - صفر مخاطر، راحة بال تامة.", insight4Title: "بناء فرق عالية الأداء في الإمارات العربية المتحدة", insight4Desc: "الفريق عالي الأداء هو المحرك الحقيقي لنمو الأعمال. تضمن منهجية التوظيف المهيكلة لـ Smaar Elysium توظيفك بناءً على كل من مجموعة المهارات والتوافق الثقافي - في كل مرة.", recHeroTitle: "حلول التوظيف في الإمارات", recHeroText: "هل تبحث عن مواهب استثنائية للانضمام إلى فريقك الدائم؟ توفر Smaar Elysium خدمات توظيف شاملة عبر جميع الصناعات في الإمارات.", recChooseTitle: "اختر الأفضل لك", recChooseP1: "ادخل إلى عالم خدمات التوظيف المخصصة لدينا، حيث تلتقي السرعة بالدقة لتجربة اكتساب مواهب لا تضاهى. تعيد نقاط قوتنا الأساسية تعريف التوظيف الدائم مع التركيز على التميز في المصادر، والفحص الصارم للمرشحين، واستراتيجيات التوظيف المتوافقة مع الثقافة.", recChooseP2: "في بيئة الأعمال التنافسية اليوم، يعد امتلاك المواهب المناسبة في فريقك الدائم عاملاً رئيسياً في النجاح على المدى الطويل.", recChooseP3: "تتفوق خدمات التوظيف لدينا في تقديم حلول توظيف دائمة مخصصة مصممة لتناسب المتطلبات التشغيلية الفريدة لمنظمتك. في هذا العصر من النمو السريع، يحظى الوصول إلى المواهب رفيعة المستوى بأهمية أكبر من أي وقت مضى.", recChooseP4: "إدراكاً للدور المحوري الذي تلعبه القوى العاملة عالية الجودة في تعزيز ابتكار الأعمال، يلبي فريقنا الملتزم احتياجات التوظيف الخاصة بك بشكل شامل. نحن نضمن وصول شركتك إلى مجموعة متنوعة من المهنيين الموهوبين الذين يتماشون مع رؤيتك التنظيمية.", recLogoSlogan: "شريكك الموثوق في القوى العاملة", recGrid1: "تجاوز المعتاد", recGrid2: "وتميز", recGrid3: "ابحث عن", recGrid4: "المهنيين", recBtsTitle: "ابنِ فريقك الكفء من خلال خدمات التوظيف لدينا", recBtsP1: "أطلق العنان لإمكانات عملك من خلال حلول التوظيف الدائمة المصممة للتوسع مع مؤسستك. يضمن التوظيف لدينا حصولك على الموهبة المناسبة للنمو على المدى الطويل.", recBtsP2: "قلل وقت التوظيف وقلل تكاليف التوظيف. نحن نتولى عملية المصادر والفحص بالكامل حتى تتمكن من التركيز بالكامل على استراتيجيات عملك الأساسية.", recBtsP3: "جرب التميز في التوظيف الذي يتكيف مع ثقافتك. دعنا ندمج المهنيين رفيعي المستوى بسلاسة في فريقك، مما يضمن الأداء المستمر والكفاءة التشغيلية.", recWhyTitle: "لماذا تختارنا", recWhyIntro: "اخترنا للتوظيف الذي يتجاوز التقليدي. جرب الاختلاف في المصادر الدقيقة، والفحص السريع، واستراتيجيات المواهب المصممة حصرياً لنجاح منظمتك.", recBenefit1Title: "دقة في استقطاب المواهب", recBenefit1Desc: "نحن لا نؤمن بالملفات الشخصية العامة. يضمن نهجنا أننا نستقطب ونقدم المرشحين الذين يستوفون متطلباتك الفنية والثقافية الدقيقة.", recBenefit2Title: "فحص صارم للمرشحين", recBenefit2Desc: "يمتد التزامنا إلى ما هو أبعد من المصادر. نجري تقييمات متعددة المراحل، بما في ذلك تقييم المهارات وفحوصات الخلفية، لضمان الجودة.", recBenefit3Title: "استراتيجيات مواهب قابلة للتطوير", recBenefit3Desc: "إدراكاً منا بأن احتياجات التوظيف تتقلب، نصيغ استراتيجيات توظيف قابلة للتطوير. سواء كان ذلك توظيفاً واحداً حرجاً أو مشروعاً ضخماً، فإننا نتكيف لتحقيق أقصى قدر من الكفاءة.", faqRec1Q: "ما الذي يجعل اكتساب المواهب لديكم فريداً؟", faqRec1A: "نهجنا في التوظيف يتميز باستراتيجية مخصصة توائم المهنيين المناسبين مع أهداف شركتك وثقافتها المحددة.", faqRec2Q: "ما مدى دقة عملية فحص المرشحين لديكم؟", faqRec2A: "نتبع عملية تقييم مفصلة تتضمن تقييمات المهارات، وفحوصات الخلفية، ومقابلات متعمقة لضمان تقدم المرشحين المؤهلين فقط.", faqRec3Q: "ما الذي يميز استراتيجيات التوظيف لديكم؟", faqRec3A: "تجمع أساليب التوظيف لدينا بين رؤى السوق وتقنيات المصادر المتقدمة وخبرة الصناعة لجذب المواهب رفيعة المستوى بكفاءة.", faqRec4Q: "كيف تضمنون المطابقة بين المرشحين ومتطلباتنا؟", faqRec4A: "نحلل بعناية تطلعات الوظيفة وثقافة الشركة لتحديد المرشحين الذين تتماشى مهاراتهم وخبراتهم وقيمهم مع احتياجاتكم.", faqRec5Q: "هل يمكنك التوسع في مفهوم التوظيف الشخصي؟", faqRec5A: "التوظيف الشخصي يعني تكييف حلول التوظيف لدينا لتناسب أهداف عملك، مما يضمن تعييناً أكثر دقة وطويل الأمد.", faqRec6Q: "كيف تتعاملون مع التحديات في عملية التوظيف؟", faqRec6A: "نتعامل بشكل استباقي مع تحديات التوظيف من خلال الحفاظ على تواصل واضح، والاستفادة من شبكات الصناعة، وتطبيق حل المشكلات الاستراتيجي في كل مرحلة.", ssSEOTitle: "حلول توظيف الأمن في الإمارات | موظفو أمن مرخصون | Smaar Elysium", ssSEODesc: "توفر Smaar Elysium موظفي أمن مرخصين ومدربين للشركات في جميع أنحاء الإمارات. نحن ننشر حراسًا ثابتين، وضباط دوريات متنقلة، ومشغلي كاميرات مراقبة، وفرق أمن الفعاليات مع الامتثال الكامل.", ssHeroTitle: "حلول توظيف الأمن في الإمارات", ssHeroText: "هل تبحث عن موظفي أمن محترفين ومرخصين لعملك أو مرفقك؟ توفر Smaar Elysium حلول توظيف أمني موثوقة ومتوافقة مع الصناعة في جميع أنحاء الإمارات.", ssChooseTitle: "اختر الأفضل لك", ssChooseP1: "مرحبًا بك في حلول توظيف الأمن لدينا - حيث تلتقي السلامة بالاحترافية. خبراء الأمن لدينا مرخصون بالكامل، ومدربون على نطاق واسع، ومجهزون لحماية أفرادك وأصولك ومبانيك على مدار الساعة طوال أيام الأسبوع.", ssCbsP1: "ادخل إلى عالم خدمات توظيف الأمن المصممة خصيصًا لدينا، حيث تلتقي اليقظة مع الاحترافية لتجربة حماية لا مثيل لها. تعيد نقاط قوتنا الأساسية تعريف نشر الأمن مع التركيز على التدقيق الدقيق للأفراد، والامتثال التنظيمي، واستراتيجيات الأمن المخصصة.", ssCbsP2: "في بيئة الأعمال عالية المخاطر اليوم، يعد الحفاظ على مكان عمل آمن ومضمون مطلبًا أساسيًا لاستمرارية العمليات وثقة أصحاب المصلحة.", ssCbsP3: "تتفوق خدمات توظيف الأمن لدينا في تقديم حلول حماية مخصصة تناسب ملف المخاطر الفريد والمتطلبات التشغيلية لمؤسستك. في هذا العصر من التهديدات الأمنية المتطورة، يكتسب نشر موظفي الأمن المؤهلين والمرخصين أهمية أكبر من أي وقت مضى.", ssCbsP4: "إدراكًا للدور الحاسم الذي يلعبه الأمن المهني في حماية أصول الأعمال وضمان سلامة الموظفين، يلبي فريقنا المتفاني احتياجات القوى العاملة الأمنية الخاصة بك بصورة شاملة وبسرعة ودقة.", ssCbsP5: "اسمح لنا بالعمل كشريك أمني موثوق به - ننشر متخصصين مفحوصين ومرخصين ومستعدين للمعركة يشكلون درعًا موثوقًا به حول عمليات عملك.", ssLogoSlogan: "شريكك الموثوق في القوى العاملة", ssGrid1: "تجاوز الـ", ssGrid2: "عادي", ssGrid3: "انشر أفضل", ssGrid4: "طاقم أمني", ssBtsTitle: "بناء قوتك العاملة الأمنية مع حلولنا الخبيرة", ssBtsP1: "احمِ ما يهم أكثر من خلال خدمة توظيف الأمن المخصصة لدينا. نحن نوظف وندقق وننشر ضباط أمن مرخصين من SIRA ومدربين على الاستجابة الفعالة للتهديدات، وإدارة التحكم في الوصول، والحفاظ على بيئة آمنة لعمليات عملك.", ssBtsP2: "الامتثال هو جوهر كل ما نقوم به. كل متخصص أمني ننشره يحمل شهادات تنظيمية صالحة وقد أكمل تدريبًا منظمًا في الاستجابة للطوارئ وإدارة النزاعات والإسعافات الأولية.", ssBtsP3: "جرب نشر الأمن الذي يمنحك راحة بال حقيقية. دعنا نتعامل مع تعقيدات إدارة القوى العاملة الأمنية بحيث يمكنك التركيز تمامًا على إدارة عملك بثقة.", ssWhyTitle: "لماذا تختارنا", ssWhyIntro: "اخترنا لتوظيف الأمن الذي يتجاوز الحراسة العادية. جرب الفرق في التدقيق الصارم للأفراد، والامتثال المضمون للتراخيص، واستراتيجيات نشر الأمن المصممة خصيصًا لاحتياجات سلامة مرفقك.", ssBen1Title: "أفراد مرخصون من SIRA", ssBen1Desc: "كل ضابط أمن ننشره مرخص بالكامل ومتوافق مع اللوائح الأمنية في الإمارات. نحن ندير جميع التراخيص والتجديدات ووثائق الامتثال نيابة عنك.", ssBen2Title: "تدقيق صارم في الخلفية", ssBen2Desc: "يبدأ التزامنا بالسلامة في مرحلة الفحص. يخضع كل مرشح لفحوصات خلفية شاملة، وتحقق جنائي، وفحوصات مرجعية، وتقييمات سلوكية قبل النشر.", ssBen3Title: "نشر سريع وقابل للتطوير", ssBen3Desc: "يمكن أن تنشأ الاحتياجات الأمنية دون سابق إنذار. نحن نحافظ على مجموعة جاهزة من متخصصي الأمن المدربين، مما يتيح النشر السريع للتغطية الطارئة والفعاليات وإعدادات المواقع الجديدة في جميع أنحاء الإمارات.", ssInsightTitle: "رؤى حلول الأمن", ssInsight1Title: "مقدمة موجزة عن توظيف الأمن", ssInsight1Desc: "يتضمن توظيف الأمن نشر مهنيين مرخصين ومدربين لحماية مبانيك وأفرادك وأصولك على مدار الساعة...", ssInsight2Title: "الحاجة المتزايدة للحلول الأمنية", ssInsight2Desc: "مع اصبح بيئات الأعمال أكثر تعقيدًا، نما الطلب على موظفي الأمن المحترفين والمرخصين بشكل كبير في جميع أنحاء الإمارات...", ssInsight3Title: "فوائد توظيف الأمن المهني", ssInsight3Desc: "يقلل التوظيف الأمني المهني من الحوادث، ويردع التهديدات، ويحمي الأصول، ويمنح الإدارة الثقة للعمل بكامل طاقتها.", ssInsight4Title: "كيف تعمل الحلول الأمنية لصالحك", ssInsight4Desc: "إن الوجود الأمني القوي لا يحمي مرفقك فحسب، بل يعزز أيضًا ثقة الموظفين، ويعزز سمعة علامتك التجارية، ويضمن استمرارية العمليات...", ogFaqQ1: "ما هي أنواع الأدوار التي توفرون موظفين لها في قطاع النفط والغاز؟", ogFaqA1: "نحن نوفر موظفين لمجموعة واسعة من الأدوار بما في ذلك مهندسي الحفر، ومسؤولي الصحة والسلامة والبيئة (HSE)، ومشغلي المصافي، وفنيي الصيانة، ومديري المشاريع لعمليات الاستخراج والتصنيع.", ogFaqQ2: "هل توفرون عمالة للمشاريع البحرية؟", ogFaqA2: "نعم، نحن متخصصون في توريد موظفين معتمدين وذوي خبرة لمنصات الحفر البحرية، وسفن الإمداد، والعمليات تحت سطح البحر مع جميع شهادات السلامة اللازمة.", ogFaqQ3: "كيف تضمنون سلامة وامتثال موظفيكم؟", ogFaqA3: "السلامة هي أولويتنا القصوى. يخضع جميع موظفينا لتدريب إلزامي على السلامة، بما في ذلك شهادات BOSIET/H2S عند الاقتضاء، ونحن نلتزم بصرامة بمعايير السلامة والصحة المهنية الدولية والمحلية.", ogFaqQ4: "هل يمكنك توفير خبراء فنيين متخصصين لعمليات إغلاق المصافي قصيرة المدى؟", ogFaqA4: "بالتأكيد. نحن نحتفظ بمجموعة من الخبراء الفنيين ذوي المهارات العالية الذين يمكن نشرهم بسرعة لعمليات التحول، والإغلاق، ومشاريع الصيانة المتخصصة.", ogFaqQ5: "كيف تتعاملون مع توظيف الخبراء الدوليين للمشاريع في الإمارات؟", ogFaqA5: "لدينا شبكة عالمية تتيح لنا استقطاب مواهب متخصصة من جميع أنحاء العالم، مع إدارة جميع متطلبات التأشيرة والتنقل والامتثال للنشر في الإمارات العربية المتحدة.", ogFaqQ6: "ما هي الصناعات التي تخدمونها ضمن قطاع الطاقة؟", ogFaqA6: "بعيداً عن النفط والغاز التقليدي، نحن نخدم سلسلة قيمة الطاقة بأكملها بما في ذلك الطاقة المتجددة، والبتروكيماويات، وتوليد الطاقة، وصناعات تحلية المياه.", ssFaqQ1: "ما الذي يجعل حلول توظيف الأمن لديكم فريدة؟", ssFaqA1: "تتميز حلول توظيف الأمن لدينا بعملية تدقيق صارمة تفحص نزاهة الخلفية، واللياقة البدنية، والكفاءة السلوكية - مما يضمن نشر موظفي الأمن الأكثر موثوقية والمدربين مهنياً فقط.", ssFaqQ2: "ما مدى دقة عملية فحص موظفي الأمن لديكم؟", ssFaqA2: "نجري فحوصات خلفية واسعة النطاق، والتحقق من السجل الجنائي، والتحقق من تاريخ التوظيف، والتقييمات النفسية. يخضع كل مرشح لاختبارات كفاءة خاصة بالأمن قبل تقديمه لمؤسستك.", ssFaqQ3: "ما هي أنواع الأدوار الأمنية التي توفرون موظفين لها؟", ssFaqA3: "نحن نوفر موظفين عبر مجموعة واسعة من الأدوار الأمنية بما في ذلك الحراس الثابتين، وضباط الدوريات المتنقلة، ومشغلي كاميرات المراقبة، وموظفي التحكم في الوصول، وأمن الفعاليات، والمشرفين الأمنيين في جميع الصناعات في الإمارات.", ssFaqQ4: "كيف تضمنون الامتثال للوائح الأمنية الإماراتية؟", ssFaqA4: "يحمل جميع موظفي الأمن لدينا تراخيص سارية كما يقتضي القانون الإماراتي. نحن ندير جميع إجراءات الامتثال التنظيمي وتجديد التراخيص وشهادات التدريب نيابة عنك.", ssFaqQ5: "هل يمكنك توفير موظفي أمن للفعاليات أو المشاريع قصيرة الأجل؟", ssFaqA5: "بالتأكيد. نحن نقدم حلول توظيف أمنية مرنة لكل من الاحتياجات التشغيلية طويلة الأجل والمهام قصيرة الأجل مثل الفعاليات والمعارض ومواقع البناء والزيارات المهمة - مع نشر الموظفين المفحوصين بسرعة عند الحاجة.", ssFaqQ6: "كيف تتعاملون مع تدريب وجاهزية موظفي الأمن؟", ssFaqA6: "يكمل جميع موظفي الأمن لدينا برنامجاً تعريفياً مهيكلاً يغطي بروتوكولات الاستجابة للطوارئ، والحد من تصعيد النزاعات، والإسعافات الأولية، وإحاطات خاصة بالموقع. كما نقدم تدريبات تنشيطية مستمرة للحفاظ على المهارات حادة وحديثة.", pjSEOTitle: "محفظة مشاريع القوى العاملة | دراسات حالة التوظيف في الإمارات | Smaar Elysium", pjSEODesc: "استكشف مشاريع توريد القوى العاملة الناجحة لشركة Smaar Elysium في جميع أنحاء الإمارات - من المشاريع العملاقة للبناء في دبي إلى إدارة المرافق في بنغالور وتوظيف مصانع التصنيع في بونا.", pjHeroTitle: "مشاريع القوى العاملة", pjHeroText: "استكشف عمليات توريد القوى العاملة والتوظيف الناجحة لدينا في جميع أنحاء الإمارات - تمكين الصناعات بالقوى العاملة المناسبة في الوقت المناسب.", pjCard1Title: "بوابة دبي العالمية - القوى العاملة في البناء", pjCard1Desc: "تم توريد أكثر من 350 عامل مدني ماهر وبناء وكهربائي ومشرف موقع لمشروع مبنى تجاري بارز في ممر مدينة دبي للإنترنت، تم إكماله في الموعد المحدد...", pjCard2Title: "تيك كونكت آي تي بارك - توظيف المرافق والأمن", pjCard2Desc: "تم نشر فريق مخصص من أكثر من 120 موظفًا في إدارة المرافق وموظفي التدبير المنزلي وضباط الأمن مرخصين عبر حرم جامعي لتكنولوجيا المعلومات يتكون من 3 مبانٍ في مدينة بنغالور الإلكترونية...", pjCard3Title: "مصنع بونا الصناعي - القوى العاملة في التصنيع", pjCard3Desc: "توفير توظيف تعاقدي شامل لأكثر من 200 عامل إنتاج شبه ماهر وماهر، وفنيي مراقبة الجودة، ومشغلي المعدات لمصنع مكونات سيارات رئيسي في منطقة ميد سي في بونا...", cuHeroTitle: "اتصل بنا", cuHeroSubtitle: "نحن هنا للمساعدة", cuHeroText: "هل لديك سؤال أو متطلبات توظيف أو تحتاج إلى استشارة؟ فريق الخبراء لدينا في Smaar Elysium جاهز لمساعدتك في الحصول على حلول القوى العاملة المناسبة.", cuCallNow: "اتصل بنا الآن", cuMobile: "الجوال:", cuEmail: "البريد الإلكتروني:", cuWebsite: "smaarelysium.com", cuAddress: "دبي", cuBookBtn: "حجز القوى العاملة", cuQuoteLabel: "طلب اقتباس", cuQuoteTitle: "احصل على متابعة سريعة!", cuQuoteDesc: "في حال كان لديك أي استفسارات أو كنت ترغب في استئجار خدمات القوى العاملة البارعة لدينا، املأ هذا النموذج، وسيعود إليك خبراؤنا!", cuFAQ1Q: "كيف يمكنني الاتصال بـ Smaar Elysium لخدمات القوى العاملة؟", cuFAQ1A: "يمكنك الوصول إلى Smaar Elysium عن طريق الاتصال بالرقم ٨٨٨٥٠٧٢٢٥٩، أو إرسال بريد إلكتروني إلى sales@smaarelysium.com، أو ملء نموذج الاتصال على موقعنا. يستجيب فريقنا بسرعة لجميع الاستفسارات.", cuFAQ2Q: "أين تقع Smaar Elysium؟", cuFAQ2A: "يقع المقر الرئيسي لشركة Smaar Elysium في دبي، الإمارات العربية المتحدة، وتوفر خدمات توريد القوى العاملة والتوظيف في جميع المدن الرئيسية والمناطق الصناعية في جميع أنحاء البلاد.", cuFAQ3Q: "ما هي السرعة التي يمكن لشركة Smaar Elysium نشر القوى العاملة بها بعد الاتصال؟", cuFAQ3A: "اعتماداً على الدور والموقع، يمكن لشركة Smaar Elysium حشد القوى العاملة في غضون 24 إلى 72 ساعة للمتطلبات العاجلة. بالنسبة لعمليات النشر واسعة النطاق، سيقدم فريقنا جدولاً زمنياً مفصلاً للحشد عند الاستفسار.", cuFAQ4Q: "هل توفر Smaar Elysium القوى العاملة لكل من المشاريع الصغيرة والكبيرة؟", cuFAQ4A: "نعم. نحن نخدم الشركات بجميع أحجامها - من عقود المواقع الصغيرة التي تتطلب عدداً قليلاً من العمال إلى المشاريع الصناعية واسعة النطاق التي تتطلب مئات المهنيين المهرة في مواقع متعددة.", bmHeroTitle: "توظيف أفضل المواهب", bmHeroSubtitle: "حجز القوى العاملة المبسط لمشاريعك الرؤيوية في جميع أنحاء الإمارات.", bmStep1: "المهن", bmStep2: "المشروع", bmStep3: "الاتصال", bmSelectTrades: "اختيار مهن القوى العاملة", bmSelectTradesDesc: "اختر الفئات والكميات من العمال الذين تحتاجهم.", bmProjectDetails: "تفاصيل المشروع", bmProjectDetailsDesc: "أخبرنا المزيد عن مكان وزمان حاجتك للقوى العاملة.", bmLocation: "الموقع في الإمارات", bmDuration: "المدة المتوقعة", bmDurationSelect: "اختر المدة", bmDurationShort: "قصير الأجل (< شهر واحد)", bmDurationMedium: "متوسط الأجل (1-6 أشهر)", bmDurationLong: "طويل الأجل (> 6 أشهر)", bmDurationOngoing: "مستمر / تعاقدي", bmStartDate: "تاريخ البدء المتوقع", bmContactInfo: "معلومات الاتصال", bmContactInfoDesc: "كيف يجب أن يتواصل خبراؤنا معك لتأكيد الحجز؟", bmFullName: "الاسم الكامل", bmCompanyName: "اسم الشركة", bmWorkEmail: "بريد العمل", bmPhoneNum: "رقم الهاتف", bmAdditionalReq: "متطلبات إضافية (اختياري)", bmAdditionalReqPlaceholder: "اذكر أي شهادات أو مهارات محددة مطلوبة...", bmCompleteBtn: "إكمال طلب الحجز", bmOrderSummary: "ملخص الطلب", bmNoTrades: "لم يتم اختيار مهن. ابدأ بإضافة أفراد للمتابعة.", bmTotalManpower: "إجمالي القوى العاملة:", bmProposalInfo: "سيقدم فريقنا مقترحاً تجارياً مخصصاً بناءً على اختيارك.", bmSuccessTitle: "تم إرسال طلب الحجز!", bmSuccessText: "شكراً لاختيارك Smaar Elysium. سيراجع خبراؤنا متطلباتك وسيعودون إليك باقتباس مخصص في غضون 24 ساعة.", bmSummaryTitle: "ملخص الحجز", bmSummaryTotalPersonnel: "إجمالي الأفراد:", bmSummaryLocation: "موقع المشروع:", bmSummaryStart: "البدء المطلوب:", bmBackHome: "العودة إلى الصفحة الرئيسية", catCivil: "مدني", catMEP: "ميكانيكا وكهرباء وسباكة", catInfra: "بنية تحتية", catOthers: "أخرى", bmTrade_mason: "بناء", bmTrade_carpenter: "نجار", bmTrade_steelFixer: "حداد مسلح", bmTrade_painter: "دهان", bmTrade_labor: "عامل", bmTrade_foreman: "فورمان مدني", bmTrade_electrician: "كهربائي", bmTrade_plumber: "سباك", bmTrade_hvac: "فني تكييف", bmTrade_pipeFitter: "فني تركيب أنابيب", bmTrade_welder: "لحام", bmTrade_ductMan: "فني دكت", bmTrade_heavyDriver: "سائق ثقيل", bmTrade_operator: "مشغل", bmTrade_rigger: "فني ريجر", bmTrade_flagman: "فلاجمان", bmTrade_surveyor: "مساح", bmTrade_security: "حارس أمن", bmTrade_warehouse: "موظفو مستودع", bmTrade_cleaning: "موظفو تنظيف", bmTrade_officeBoy: "ساعي مكتب", homeSEOTitle: "أفضل حلول القوى العاملة والتوظيف في الإمارات | Smaar Elysium", homeSEODesc: "Smaar Elysium هي وكالة توريد القوى العاملة والتوظيف الرائدة في الإمارات ومقرها دبي. موثوقة من قبل أكثر من 500 شركة للتوظيف والتوظيف التعاقدي وتعهيد الموارد البشرية.", aboutSEOTitle: "عن Smaar Elysium | وكالة القوى العاملة والتوظيف الرائدة في الإمارات", aboutSEODesc: "Smaar Elysium هي وكالة توريد قوى عاملة وتوظيف موثوقة مقرها في الإمارات وتتمتع بخبرة تزيد عن 15 عاماً. نحن نربط الشركات بالمهنيين المهرة.", contactSEOTitle: "اتصل بـ Smaar Elysium | وكالة توريد القوى العاملة والتوظيف في الإمارات", contactSEODesc: "اتصل بـ Smaar Elysium للحصول على خدمات توريد القوى العاملة، والتوظيف التعاقدي، والبحث التنفيذي، وتعهيد الموارد البشرية، وتوظيف الأمن في جميع أنحاء الإمارات.", bookSEOTitle: "حجز القوى العاملة عبر الإنترنت | طلب عمال مهرة في الإمارات | Smaar Elysium", bookSEODesc: "احجز القوى العاملة المطلوبة عبر الإنترنت مع Smaar Elysium. اختر فئات المهن، وحدد الكميات، وأرسل طلب القوى العاملة الخاص بك." } }, Kg = ({ children: e }) => { const [t, i] = b.useState("EN"), [s, r] = b.useState(!1), o = () => { r(!0), setTimeout(() => { i(c => c === "EN" ? "AR" : "EN"), r(!1) }, 2e3) }, a = c => { c !== t && (r(!0), setTimeout(() => { i(c), r(!1) }, 2e3)) }, l = Vg[t]; return b.useEffect(() => { document.documentElement.lang = t.toLowerCase() }, [t]), n.jsx(Zu.Provider, { value: { language: t, setLanguage: a, toggleLanguage: o, t: l, isChanging: s }, children: e }) }, U = () => { const e = b.useContext(Zu); if (!e) throw new Error("useLanguage must be used within a LanguageProvider"); return e }, Oa = "/assets/logo-GE4c7ypg.png", Xg = () => {
    const [e, t] = b.useState(!1), [i, s] = b.useState(!1), [r, o] = b.useState(null), [a, l] = b.useState(null), { language: c, setLanguage: d, t: m } = U(), h = En(), g = b.useRef(null), x = b.useRef(null); b.useEffect(() => { const u = () => { s(window.scrollY > 20) }; return window.addEventListener("scroll", u), () => window.removeEventListener("scroll", u) }, []), b.useEffect(() => { t(!1), o(null), l(null) }, [h]), b.useEffect(() => { const u = p => { g.current && !g.current.contains(p.target) && x.current && !x.current.contains(p.target) && l(null) }; return document.addEventListener("mousedown", u), () => document.removeEventListener("mousedown", u) }, []); const w = u => { l(a === u ? null : u) }, v = () => { l(null) }, S = u => { o(r === u ? null : u) }, f = u => { d(u), l(null) }; return n.jsxs(n.Fragment, {
        children: [n.jsx("div", { className: "info-bar", children: n.jsx("div", { className: "container info-bar__inner", children: n.jsxs("div", { className: "info-bar__contact", children: [n.jsxs("nav", { className: "info-bar__links", children: [n.jsx(j, { to: "/about", children: m.aboutUs }), n.jsx(j, { to: "/projects", children: m.projects })] }), n.jsx("div", { className: "info-bar__separator" }), n.jsxs("a", { href: "tel:8885072259", children: [n.jsx(Xu, { size: 14, className: "icon-red" }), " ", m.phone] }), n.jsxs("a", { href: "mailto:smaarelysium.@gmail.com", children: [n.jsx(Ba, { size: 14, className: "icon-red" }), " ", m.email] })] }) }) }), n.jsxs("header", { className: `site-header ${i ? "scrolled" : ""}`, children: [n.jsxs("div", { className: "container site-header__inner", children: [n.jsx(j, { to: "/", className: "site-header__logo", children: n.jsx("img", { src: Oa, alt: "Manpower Logo", className: "header-logo-img" }) }), n.jsx("nav", { className: "main-nav", ref: g, children: n.jsxs("ul", { className: "main-nav__list", children: [n.jsxs("li", { className: `main-nav__item has-dropdown ${a === "services" ? "dropdown-open" : ""}`, children: [n.jsxs("span", { className: "nav-dropdown-trigger", onClick: () => w("services"), children: [m.services, " ", n.jsx(Ln, { size: 14, className: `dropdown-chevron ${a === "services" ? "rotated" : ""}` })] }), n.jsxs("ul", { className: "dropdown", children: [n.jsx("li", { children: n.jsx(j, { to: "/", onClick: v, children: m.supply }) }), n.jsx("li", { children: n.jsx(j, { to: "/recruitment", onClick: v, children: m.recruitment }) }), n.jsx("li", { children: n.jsx(j, { to: "/contract-staffing", onClick: v, children: m.staffing }) }), n.jsx("li", { children: n.jsx(j, { to: "/executive-search", onClick: v, children: m.search }) }), n.jsx("li", { children: n.jsx(j, { to: "/hr-outsourcing", onClick: v, children: m.outsourcing }) }), n.jsx("li", { children: n.jsx(j, { to: "/security-solutions", onClick: v, children: m.security }) })] })] }), n.jsxs("li", { className: `main-nav__item has-dropdown ${a === "sectors" ? "dropdown-open" : ""}`, children: [n.jsxs("span", { className: "nav-dropdown-trigger", onClick: () => w("sectors"), children: [m.sectors, " ", n.jsx(Ln, { size: 14, className: `dropdown-chevron ${a === "sectors" ? "rotated" : ""}` })] }), n.jsxs("ul", { className: "dropdown", children: [n.jsx("li", { children: n.jsx(j, { to: "/building-contract", onClick: v, children: m.building }) }), n.jsx("li", { children: n.jsx(j, { to: "/railway-contract", onClick: v, children: m.railway }) }), n.jsx("li", { children: n.jsx(j, { to: "/steel-construction", onClick: v, children: m.steel }) }), n.jsx("li", { children: n.jsx(j, { to: "/electric-mechanic", onClick: v, children: m.electric }) }), n.jsx("li", { children: n.jsx(j, { to: "/oil-gas", onClick: v, children: m.oilGas }) }), n.jsx("li", { children: n.jsx(j, { to: "/civil-construction", onClick: v, children: m.civil }) }), n.jsx("li", { children: n.jsx(j, { to: "/facility-management", onClick: v, children: m.facility }) }), n.jsx("li", { children: n.jsx(j, { to: "/logistics", onClick: v, children: m.logistics }) }), n.jsx("li", { children: n.jsx(j, { to: "/manufacture", onClick: v, children: m.manufacture }) }), n.jsx("li", { children: n.jsx(j, { to: "/mep", onClick: v, children: m.mep }) })] })] }), n.jsx("li", { className: "main-nav__item", children: n.jsx(j, { to: "/contact", children: m.contactUs }) })] }) }), n.jsxs("div", { className: "site-header__actions", children: [n.jsx("div", { id: "google_translate_element", className: "google-translate-container" }), n.jsxs("div", { className: `lang-dropdown ${a === "language" ? "active" : ""}`, ref: x, children: [n.jsxs("button", { className: "lang-toggle", onClick: () => w("language"), "aria-expanded": a === "language", "aria-label": "Select Language", children: [n.jsx(zg, { size: 18, className: "lang-icon" }), n.jsx("span", { className: "lang-text", children: c }), n.jsx(Ln, { size: 14, className: `dropdown-chevron ${a === "language" ? "rotated" : ""}` })] }), n.jsxs("div", { className: "lang-menu", children: [n.jsx("button", { className: `lang-option ${c === "EN" ? "active" : ""}`, onClick: () => f("EN"), children: "English" }), n.jsx("button", { className: `lang-option ${c === "AR" ? "active" : ""}`, onClick: () => f("AR"), children: "العربية" })] })] }), n.jsx(j, { to: "/book-manpower", className: "nav-bk-btn d-none-mobile", children: m.bookManpower }), n.jsx("button", { className: "hamburger", onClick: () => t(!e), children: e ? n.jsx($g, {}) : n.jsx(Rg, {}) })] })] }), n.jsx("div", { className: `mobile-menu ${e ? "open" : ""}`, children: n.jsx("div", { className: "container", children: n.jsxs("ul", { className: "mobile-menu__list", children: [n.jsxs("li", { className: `mobile-menu__item ${r === "services" ? "active" : ""}`, children: [n.jsxs("div", { className: "mobile-menu__toggle", onClick: () => S("services"), children: [n.jsx("span", { children: m.services }), n.jsx(Ln, { size: 20, className: "toggle-icon" })] }), n.jsxs("ul", { className: "mobile-dropdown", children: [n.jsx("li", { children: n.jsx(j, { to: "/", children: m.supply }) }), n.jsx("li", { children: n.jsx(j, { to: "/recruitment", children: m.recruitment }) }), n.jsx("li", { children: n.jsx(j, { to: "/contract-staffing", children: m.staffing }) }), n.jsx("li", { children: n.jsx(j, { to: "/executive-search", children: m.search }) }), n.jsx("li", { children: n.jsx(j, { to: "/hr-outsourcing", children: m.outsourcing }) }), n.jsx("li", { children: n.jsx(j, { to: "/security-solutions", children: m.security }) })] })] }), n.jsxs("li", { className: `mobile-menu__item ${r === "sectors" ? "active" : ""}`, children: [n.jsxs("div", { className: "mobile-menu__toggle", onClick: () => S("sectors"), children: [n.jsx("span", { children: m.sectors }), n.jsx(Ln, { size: 20, className: "toggle-icon" })] }), n.jsxs("ul", { className: "mobile-dropdown", children: [n.jsx("li", { children: n.jsx(j, { to: "/building-contract", children: m.building }) }), n.jsx("li", { children: n.jsx(j, { to: "/railway-contract", children: m.railway }) }), n.jsx("li", { children: n.jsx(j, { to: "/steel-construction", children: m.steel }) }), n.jsx("li", { children: n.jsx(j, { to: "/electric-mechanic", children: m.electric }) }), n.jsx("li", { children: n.jsx(j, { to: "/oil-gas", children: m.oilGas }) }), n.jsx("li", { children: n.jsx(j, { to: "/civil-construction", children: m.civil }) }), n.jsx("li", { children: n.jsx(j, { to: "/facility-management", children: m.facility }) }), n.jsx("li", { children: n.jsx(j, { to: "/logistics", children: m.logistics }) }), n.jsx("li", { children: n.jsx(j, { to: "/manufacture", children: m.manufacture }) }), n.jsx("li", { children: n.jsx(j, { to: "/mep", children: m.mep }) })] })] }), n.jsx("li", { children: n.jsx(j, { to: "/about", children: m.aboutUs }) }), n.jsx("li", { children: n.jsx(j, { to: "/projects", children: m.projects }) }), n.jsx("li", { children: n.jsx(j, { to: "/contact", children: m.contactUs }) }), n.jsx("li", { children: n.jsx(j, { to: "/book-manpower", className: "nav-bk-btn", style: { display: "inline-flex", width: "100%", justifyContent: "center", marginTop: "20px" }, children: m.bookManpower }) })] }) }) })] }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        .info-bar { background: #ffffff; color: #333; font-size: 0.85rem; padding: 12px 0; border-bottom: 1px solid #f0f0f0; }
        .info-bar__inner { display: flex; justify-content: flex-end; align-items: center; }
        .info-bar__contact { display: flex; align-items: center; gap: 20px; }
        .info-bar__links { display: flex; gap: 15px; margin-right: 20px; }
        .info-bar__links a { font-weight: 500; color: #666; }
        .info-bar__links a:hover { color: var(--color-primary); }
        .info-bar__separator { width: 1px; height: 14px; background: #ddd; margin: 0 5px; }
        .info-bar__contact a { color: #333; display: inline-flex; align-items: center; gap: 6px; font-weight: 600; }
        .icon-red { color: var(--color-primary); }
        
        .site-header { background: #ffffff; position: sticky; top: 0; z-index: 1000; transition: 0.3s; height: 100px; display: flex; align-items: center; border-bottom: 1px solid transparent; }
        .site-header.scrolled { height: 80px; box-shadow: 0 2px 15px rgba(0,0,0,0.08); border-bottom-color: #f0f0f0; }
        .site-header__inner { display: flex; align-items: center; justify-content: space-between; width: 100%; }
        
        .header-logo-img { 
          height: 60px; 
          width: auto; 
          display: block;
          transition: 0.3s;
        }
        .scrolled .header-logo-img { height: 50px; }

        
        .main-nav__list { display: flex; gap: 25px; margin-left: 40px; }
        .main-nav__item { position: relative; }
        .main-nav__item > a, .nav-dropdown-trigger { padding: 10px 0; font-weight: 500; font-size: 18px; color: #000; display: flex; align-items: center; gap: 8px; transition: 0.2s; cursor: pointer; }
        .main-nav__item > a:hover, .nav-dropdown-trigger:hover { color: var(--color-primary); }
        
        .dropdown { position: absolute; top: 100%; left: 0; background: white; min-width: 240px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-top: 3px solid var(--color-primary); opacity: 0; visibility: hidden; transform: translateY(15px); transition: 0.3s; padding: 10px 0; }
        .has-dropdown.dropdown-open .dropdown { opacity: 1; visibility: visible; transform: translateY(0); }
        .dropdown li a { display: block; padding: 12px 25px; font-size: 16px; color: #333; font-weight: 500; transition: 0.3s; }
        .dropdown li a:hover { color: var(--color-primary); background: #fff8f8; padding-left: 30px; }
        .dropdown-chevron { transition: transform 0.3s; }
        .dropdown-chevron.rotated { transform: rotate(180deg); }
        
        .site-header__actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .google-translate-container {
          margin-right: 5px;
        }

        /* Hide the Google Translate attribution/powered by text if desired */
        .goog-logo-link { display: none !important; }
        .goog-te-gadget { color: transparent !important; }
        .goog-te-gadget .goog-te-combo { 
          padding: 8px 12px; 
          border: 1px solid var(--color-primary); 
          border-radius: 50px; 
          font-family: inherit; 
          font-weight: 600; 
          font-size: 14px; 
          color: var(--color-primary);
          background: #ffffff;
          outline: none;
          cursor: pointer;
        }
        .goog-te-gadget .goog-te-combo:hover {
          background: #fff8f5;
        }

        .lang-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          border: 1px solid var(--color-primary);
          padding: 8px 16px;
          border-radius: 50px;
          cursor: pointer;
          font-weight: 700;
          font-size: 14px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: var(--color-primary);
          position: relative;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(254, 118, 34, 0.1);
        }
        
        .lang-toggle:hover {
          background: var(--color-primary);
          color: #fff;
          box-shadow: 0 4px 12px rgba(254, 118, 34, 0.25);
          transform: translateY(-1px);
        }
        
        .lang-toggle:active {
          transform: translateY(0);
        }

        .lang-icon { transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
        .lang-toggle:hover .lang-icon { transform: rotate(180deg); }
        
        .lang-text {
          min-width: 20px;
          text-align: center;
        }

        @media (max-width: 992px) {
          .site-header__actions { gap: 10px; }
          .lang-toggle { padding: 6px 12px; font-size: 13px; }
        }

        /* Language Dropdown Styles */
        .lang-dropdown {
          position: relative;
        }
        
        .lang-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background: #ffffff;
          min-width: 140px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          border: 1px solid #f0f0f0;
          margin-top: 10px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1001;
          padding: 8px;
          overflow: hidden;
        }

        .lang-dropdown.active .lang-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .lang-option {
          display: block;
          width: 100%;
          padding: 10px 16px;
          text-align: left;
          background: none;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          color: #444;
          cursor: pointer;
          transition: 0.2s;
        }

        .lang-option:hover {
          background: #fff8f5;
          color: var(--color-primary);
        }

        .lang-option.active {
          background: var(--color-primary);
          color: #ffffff;
        }

        .lang-dropdown.active .lang-toggle {
          background: var(--color-primary);
          color: #fff;
        }
        
        .lang-dropdown.active .lang-toggle .lang-icon {
          transform: rotate(180deg);
        }

        @media (max-width: 480px) {
          .lang-toggle { padding: 5px 10px; }
          .lang-text { font-size: 12px; }
          .site-header__actions { gap: 8px; }
        }

        .nav-bk-btn { 
          background: #ffffff; color: #000; border: 1px solid var(--color-primary); 
          padding: 10px 25px; border-radius: 100px; font-weight: 700; font-size: 15px;
          transition: 0.3s; text-transform: uppercase; letter-spacing: 1px;
        }
        .nav-bk-btn:hover { background: var(--color-primary); color: #fff; box-shadow: 0 5px 15px rgba(254, 118, 34, 0.3); }
        
        .hamburger { display: none; background: none; border: none; cursor: pointer; color: #000; }
        .mobile-menu { position: fixed; top: 80px; left: 0; right: 0; bottom: 0; background: white; z-index: 999; transform: translateX(100%); transition: 0.4s; padding: 40px 0; overflow-y: auto; }
        .mobile-menu.open { transform: translateX(0); }
        .mobile-menu__list { text-align: left; padding: 0 30px; }
        .mobile-menu__list li { margin-bottom: 20px; border-bottom: 1px solid #f5f5f5; padding-bottom: 15px; }
        .mobile-menu__list a, .mobile-menu__toggle { font-size: 1.3rem; font-weight: 700; color: #000; text-decoration: none; cursor: pointer; }
        
        .mobile-menu__toggle { display: flex; justify-content: space-between; align-items: center; }
        .toggle-icon { transition: 0.3s; color: #666; }
        .mobile-menu__item.active .toggle-icon { transform: rotate(180deg); color: var(--color-primary); }
        .mobile-menu__item.active .mobile-menu__toggle span { color: var(--color-primary); }
        
        .mobile-dropdown { max-height: 0; overflow: hidden; transition: 0.4s ease; background: #fafafa; margin: 10px -30px -15px; border-top: 1px solid #eee; }
        .mobile-menu__item.active .mobile-dropdown { max-height: 500px; padding: 15px 30px; }
        .mobile-dropdown li { border-bottom: none; margin-bottom: 10px; padding-bottom: 0; }
        .mobile-dropdown li:last-child { margin-bottom: 0; }
        .mobile-dropdown a { font-size: 1.1rem; font-weight: 500; color: #444; }
        
        @media (max-width: 1100px) {
          .main-nav__list { gap: 15px; margin-left: 20px; }
          .main-nav__item > a, .nav-dropdown-trigger { font-size: 15px; gap: 4px; }
          .nav-bk-btn { padding: 9px 16px; font-size: 13px; letter-spacing: 0.5px; }
          .header-logo-img { height: 50px; }
          .scrolled .header-logo-img { height: 44px; }
          .info-bar__contact { gap: 12px; }
          .info-bar__contact a { font-size: 0.82rem; }
          .info-bar__links a { font-size: 0.82rem; }
        }
        @media (max-width: 992px) {
          .main-nav, .info-bar { display: none; }
          .hamburger { display: block; margin-left: 20px; }
          .d-none-mobile { display: none; }
          .site-header { height: 80px; }
        }
      `}
        })]
    })
}, Dn = ({ d: e, size: t = 18 }) => n.jsx("svg", { width: t, height: t, viewBox: "0 0 24 24", fill: "currentColor", stroke: "none", children: n.jsx("path", { d: e }) }), Jg = e => n.jsx(Dn, { ...e, d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }), Zg = e => n.jsx(Dn, { ...e, d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }), ex = e => n.jsx(Dn, { ...e, d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" }), tx = e => n.jsx(Dn, { ...e, d: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" }), nx = e => n.jsx(Dn, { ...e, d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }), ix = e => n.jsx(Dn, { ...e, d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.945-.199-2.395.042-3.427.218-.924 1.4-5.932 1.4-5.932s-.358-.714-.358-1.77c0-1.658.962-2.896 2.157-2.896 1.017 0 1.508.763 1.508 1.678 0 1.022-.65 2.551-.986 3.97-.282 1.186.594 2.153 1.765 2.153 2.119 0 3.748-2.235 3.748-5.459 0-2.854-2.05-4.85-4.978-4.85-3.39 0-5.38 2.541-5.38 5.172 0 1.024.394 2.125.887 2.723.097.117.111.22.081.341-.09.37-.291 1.186-.33 1.35-.053.218-.173.264-.398.158-1.487-.692-2.417-2.868-2.417-4.615 0-3.759 2.73-7.213 7.876-7.213 4.135 0 7.348 2.945 7.348 6.883 0 4.108-2.59 7.414-6.183 7.414-1.207 0-2.343-.627-2.731-1.369l-.744 2.828c-.269 1.023-.996 2.306-1.482 3.097a12.012 12.012 0 0 0 3.393.486c6.621 0 11.988-5.366 11.988-11.987C24.005 5.367 18.638 0 12.017 0z" }), sx = () => {
    const { t: e } = U(); return n.jsxs("footer", {
        className: "site-footer", children: [n.jsx("div", { className: "container", children: n.jsxs("div", { className: "footer-grid", children: [n.jsxs("div", { className: "footer-col brand", children: [n.jsx(j, { to: "/", className: "footer-logo-link", children: n.jsx("img", { src: Oa, alt: "Manpower Logo", className: "footer-logo-img" }) }), n.jsx("p", { children: e.footerDesc }), n.jsxs("div", { className: "social-links", children: [n.jsx("a", { href: "https://www.facebook.com/profile.php?id=61583625191720", target: "_blank", rel: "noreferrer", children: n.jsx(Jg, { size: 18 }) }), n.jsx("a", { href: "https://www.instagram.com/smaarelysium/", target: "_blank", rel: "noreferrer", children: n.jsx(Zg, { size: 18 }) }), n.jsx("a", { href: "https://x.com/SmaarElysium", target: "_blank", rel: "noreferrer", children: n.jsx(ex, { size: 18 }) }), n.jsx("a", { href: "https://www.linkedin.com/company/smaar-elysium/?viewAsMember=true", target: "_blank", rel: "noreferrer", children: n.jsx(tx, { size: 18 }) }), n.jsx("a", { href: "https://youtube.com/@smaarelysium?si=FkO5NgN9mSdXo6Cl", target: "_blank", rel: "noreferrer", children: n.jsx(nx, { size: 18 }) }), n.jsx("a", { href: "https://www.pinterest.com/smaarelysium/", target: "_blank", rel: "noreferrer", children: n.jsx(ix, { size: 18 }) })] })] }), n.jsxs("div", { className: "footer-col", children: [n.jsx("h4", { className: "footer-title", children: e.sectorsTitle }), n.jsxs("ul", { className: "footer-links", children: [n.jsx("li", { children: n.jsx(j, { to: "/building-contract", children: e.building }) }), n.jsx("li", { children: n.jsx(j, { to: "/railway-contract", children: e.railway }) }), n.jsx("li", { children: n.jsx(j, { to: "/steel-construction", children: e.steel }) }), n.jsx("li", { children: n.jsx(j, { to: "/electric-mechanic", children: e.electric }) }), n.jsx("li", { children: n.jsx(j, { to: "/oil-gas", children: e.oilGas }) }), n.jsx("li", { children: n.jsx(j, { to: "/civil-construction", children: e.civil }) }), n.jsx("li", { children: n.jsx(j, { to: "/facility-management", children: e.facility }) }), n.jsx("li", { children: n.jsx(j, { to: "/logistics", children: e.logistics }) }), n.jsx("li", { children: n.jsx(j, { to: "/manufacture", children: e.manufacture }) }), n.jsx("li", { children: n.jsx(j, { to: "/mep", children: e.mepSolutions }) })] })] }), n.jsxs("div", { className: "footer-col", children: [n.jsx("h4", { className: "footer-title", children: e.services }), n.jsxs("ul", { className: "footer-links", children: [n.jsx("li", { children: n.jsx(j, { to: "/", children: e.supply }) }), n.jsx("li", { children: n.jsx(j, { to: "/recruitment", children: e.recruitment }) }), n.jsx("li", { children: n.jsx(j, { to: "/contract-staffing", children: e.staffing }) }), n.jsx("li", { children: n.jsx(j, { to: "/executive-search", children: e.search }) }), n.jsx("li", { children: n.jsx(j, { to: "/hr-outsourcing", children: e.outsourcing }) }), n.jsx("li", { children: n.jsx(j, { to: "/security-solutions", children: e.security }) })] })] }), n.jsxs("div", { className: "footer-col", children: [n.jsx("h4", { className: "footer-title", children: e.contactUs }), n.jsxs("ul", { className: "footer-contact", children: [n.jsxs("li", { children: [n.jsx(Ku, { size: 18 }), n.jsx("span", { children: e.dubai })] }), n.jsxs("li", { children: [n.jsx(Xu, { size: 18 }), n.jsx("a", { href: "tel:8885072259", children: e.phone })] }), n.jsxs("li", { children: [n.jsx(Ba, { size: 18 }), n.jsx("a", { href: "mailto:smaarelysium.@gmail.com", children: "smaarelysium.@gmail.com" })] })] })] })] }) }), n.jsx("div", { className: "footer-bottom", children: n.jsxs("div", { className: "footer-bottom-inner", children: [n.jsxs("p", { children: ["© ", new Date().getFullYear(), " Smaar Elysium. ", e.rightsReserved] }), n.jsx("div", { className: "footer-bottom-links", children: n.jsx("a", { href: "https://thepatternscompany.com/", target: "_blank", rel: "noreferrer", children: e.designedBy }) })] }) }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
    .site-footer { background: #fff; color: #000000; padding-top: 80px; border-top: 1px solid #000000; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 40px; margin-bottom: 60px; }
        
        .footer-logo-link { display: block; margin-bottom: 25px; }
        .footer-logo-img {
    height: 70px; width: auto;
    /* filter: brightness(0) invert(1); */
}
        .footer-col.brand p { line-height: 1.8; margin-bottom: 25px; }

        
        .social-links { display: flex; gap: 10px; }
        .social-links a { width: 36px; height: 36px; background: #2a2e34; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; transition: 0.3s; }
        .social-links a:hover { background: var(--color-primary); }
        
        .footer-title { color: #000000; font-size: 1.1rem; margin-bottom: 25px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
        .footer-links li { margin-bottom: 12px; }
        .footer-links a:hover { color: var(--color-primary); padding-left: 5px; }
        
        .footer-contact li { display: flex; gap: 15px; margin-bottom: 20px; line-height: 1.6; }
        .footer-contact i, .footer-contact svg { color: var(--color-primary); flex-shrink: 0; }
        .footer-contact span, .footer-contact a { color: #000000; }
        
        .footer-bottom { background: #fe7623; border-top: 1px solid #2a2e34; font-size: 0.85rem; color: #fff; width: 100%; }
        .footer-bottom-inner { max-width: 1200px; margin: 0 auto; padding: 25px 40px; display: flex; justify-content: space-between; align-items: center; }
        .footer-bottom-links a { margin-left: 20px; color: #fff; }
        .footer-bottom-links a:hover { color: white; }

@media(max-width: 992px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 30px; }
}
@media(max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 30px; }
          .footer-col.brand, .footer-col:last-child { grid-column: 1 / -1; }
          .footer-bottom-inner { flex-direction: column; text-align: center; gap: 10px; padding: 20px; }
          .footer-bottom-links a { margin-left: 0; }
          .footer-logo-img { height: 55px; }
          .site-footer { padding-top: 50px; }
}
`}
        })]
    })
}, rx = () => {
    const { isChanging: e } = U(); return e ? n.jsxs("div", {
        className: "language-transition-overlay", children: [n.jsxs("div", { className: "transition-content", children: [n.jsx("img", { src: Oa, alt: "Logo", className: "transition-logo" }), n.jsx("div", { className: "transition-loader" })] }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
                .language-transition-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #ffffff;
                    z-index: 99999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: fadeIn 0.3s ease-out;
                }

                .transition-content {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 30px;
                }

                .transition-logo {
                    height: 100px;
                    width: auto;
                    animation: logoPulse 1.5s ease-in-out infinite;
                }

                .transition-loader {
                    width: 50px;
                    height: 3px;
                    background: #f0f0f0;
                    position: relative;
                    overflow: hidden;
                    border-radius: 10px;
                }

                .transition-loader::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: var(--color-primary, #FE7622);
                    animation: loaderSlide 2s linear infinite;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes logoPulse {
                    0%, 100% { transform: scale(1); opacity: 0.8; }
                    50% { transform: scale(1.05); opacity: 1; }
                }

                @keyframes loaderSlide {
                    0% { left: -100%; }
                    100% { left: 100%; }
                }
            `}
        })]
    }) : null
}, ox = "918885072259", ax = () => {
    const [e, t] = b.useState(!1); b.useEffect(() => { const s = () => t(window.scrollY > 300); return window.addEventListener("scroll", s), () => window.removeEventListener("scroll", s) }, []); const i = () => window.scrollTo({ top: 0, behavior: "smooth" }); return n.jsxs("div", {
        className: "app-wrapper", children: [n.jsx(rx, {}), n.jsx(Xg, {}), n.jsx("main", { className: "main-content", children: n.jsx(ag, {}) }), n.jsx(sx, {}), n.jsx("a", { href: `https://wa.me/${ox}`, target: "_blank", rel: "noreferrer", className: "float-whatsapp", "aria-label": "Chat on WhatsApp", children: n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", width: "30", height: "30", fill: "white", children: n.jsx("path", { d: "M16 0C7.163 0 0 7.163 0 16c0 2.82.737 5.47 2.027 7.774L0 32l8.437-2.01A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.77-1.853l-.485-.29-5.01 1.194 1.25-4.877-.317-.5A13.26 13.26 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.307-9.907c-.4-.2-2.364-1.167-2.73-1.3-.367-.133-.633-.2-.9.2-.267.4-1.033 1.3-1.267 1.567-.233.267-.467.3-.867.1-.4-.2-1.687-.623-3.213-1.98-1.187-1.057-1.99-2.363-2.223-2.763-.233-.4-.025-.617.175-.817.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.655-.674-.9-.686l-.767-.013a1.474 1.474 0 00-1.067.5c-.367.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.307 6.833 6.04.955.413 1.7.66 2.28.845.958.305 1.83.262 2.52.159.769-.115 2.364-.967 2.697-1.9.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.767-.467z" }) }) }), n.jsx("button", { className: `float-scroll-top ${e ? "visible" : ""}`, onClick: i, "aria-label": "Scroll to top", children: n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "22", height: "22", fill: "none", stroke: "white", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: n.jsx("polyline", { points: "18 15 12 9 6 15" }) }) }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        .app-wrapper { display: flex; flex-direction: column; min-height: 100vh; }
        .main-content { flex: 1; }

        /* WhatsApp Float */
        .float-whatsapp {
            position: fixed;
            bottom: 90px;
            right: 28px;
            width: 58px;
            height: 58px;
            background: #25D366;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 6px 20px rgba(37,211,102,0.45);
            z-index: 9999;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            animation: wa-pulse 2.5s infinite;
        }
        .float-whatsapp:hover {
            transform: scale(1.12);
            box-shadow: 0 10px 30px rgba(37,211,102,0.6);
            animation: none;
        }
        @keyframes wa-pulse {
            0%, 100% { box-shadow: 0 6px 20px rgba(37,211,102,0.45); }
            50% { box-shadow: 0 6px 30px rgba(37,211,102,0.75), 0 0 0 10px rgba(37,211,102,0.1); }
        }

        /* Scroll-to-Top Float */
        .float-scroll-top {
            position: fixed;
            bottom: 28px;
            right: 28px;
            width: 58px;
            height: 58px;
            background: #fe7623;
            border: none;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 6px 20px rgba(254,118,35,0.4);
            z-index: 9999;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.35s ease, transform 0.35s ease, box-shadow 0.3s ease;
            pointer-events: none;
        }
        .float-scroll-top.visible {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }
        .float-scroll-top:hover {
            box-shadow: 0 10px 28px rgba(254,118,35,0.6);
            transform: translateY(-3px);
        }
      `}
        })]
    })
}, J = ({ title: e, description: t, keywords: i, canonical: s, ogImage: r = "https://smaarelysium.com/og-image.jpg", schema: o }) => { const a = e ? `${e} | Smaar Elysium` : "Smaar Elysium – Premier Manpower & Staffing Agency in UAE"; return n.jsxs(pf, { children: [n.jsx("title", { children: a }), n.jsx("meta", { name: "description", content: t }), i && n.jsx("meta", { name: "keywords", content: i }), n.jsx("meta", { name: "robots", content: "index, follow" }), s && n.jsx("link", { rel: "canonical", href: s }), n.jsx("meta", { property: "og:title", content: a }), n.jsx("meta", { property: "og:description", content: t }), n.jsx("meta", { property: "og:type", content: "website" }), n.jsx("meta", { property: "og:image", content: r }), s && n.jsx("meta", { property: "og:url", content: s }), n.jsx("meta", { property: "og:site_name", content: "Smaar Elysium" }), n.jsx("meta", { name: "twitter:card", content: "summary_large_image" }), n.jsx("meta", { name: "twitter:title", content: a }), n.jsx("meta", { name: "twitter:description", content: t }), n.jsx("meta", { name: "twitter:image", content: r }), o && n.jsx("script", { type: "application/ld+json", children: JSON.stringify(o) })] }) }, lx = "/assets/mp-5-BwXe7EWo.jpg", cx = "/assets/mp-6-Dm8mrTUj.jpg", dx = "/assets/mp-7-COVtB6Je.jpg", ux = "/assets/mechanical-DsYurW-D.jfif", mx = "/assets/Facility-BwGpISEX.jfif", px = "/assets/Logistics-LSBv6t2M.jfif", hx = "/assets/homepagehero-D-PEdQZ6.png", fx = "/assets/manpower-supply-hero-BcpR3LgY.png", em = "/assets/recruitment-hero-Dulw0xdw.png", tm = "/assets/contract-staffing-hero-NrxkxxKc.png", nm = "/assets/executive-search-hero-D7H3ubT0.png", gx = "/assets/hr-hero-4Kf6jcnA.png", im = "/assets/security-solutions-hero-ouuJLMII.png", xx = "/assets/herovideo-BkfHnEyr.mp4", yx = "/assets/quote_section_architecture-CR19hJ4n.png", vx = (e, t = 2e3) => { const [i, s] = b.useState(0), r = b.useRef(null), [o, a] = b.useState(!1); return b.useEffect(() => { const l = new IntersectionObserver(([c]) => { if (c.isIntersecting && !o) { let d = null; const m = h => { d || (d = h); const g = Math.min((h - d) / t, 1), x = 1 - Math.pow(1 - g, 4); s(Math.floor(x * e)), g < 1 ? window.requestAnimationFrame(m) : a(!0) }; window.requestAnimationFrame(m) } }, { threshold: .1 }); return r.current && l.observe(r.current), () => l.disconnect() }, [e, t, o]), { count: i, countRef: r } }, Yi = ({ end: e, suffix: t = "", duration: i = 2e3 }) => { const { count: s, countRef: r } = vx(e, i); return n.jsxs("span", { ref: r, className: "journey-num", children: [s, t] }) }, hc = () => {
    const { t: e } = U(), [t, i] = b.useState(0), s = [{ question: e.faq2Q, answer: e.faq2A }, { question: e.faq3Q, answer: e.faq3A }, { question: e.faq1Q, answer: e.faq1A }], r = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: s.map(o => ({ "@type": "Question", name: o.question, acceptedAnswer: { "@type": "Answer", text: o.answer } })) }; return n.jsxs("div", {
        className: "home-page", children: [n.jsx(J, { title: e.homeSEOTitle, description: e.homeSEODesc, keywords: "manpower supply UAE, staffing solutions Dubai, recruitment agency UAE, HR outsourcing Middle East", canonical: "https://www.smaarelysium.com", schema: r }), n.jsx("div", { className: "container hero-wrapper", children: n.jsxs("section", { className: "home-hero video-slide", children: [n.jsxs("div", { className: "hero-video-container active", children: [n.jsx("video", { src: xx, autoPlay: !0, loop: !0, muted: !0, playsInline: !0, className: "hero-video-bg" }), n.jsx("div", { className: "hero-video-overlay" })] }), n.jsxs("div", { className: "home-hero__content", children: [n.jsx("h1", { className: "home-hero__title", children: e.heroTitle }), n.jsx("p", { className: "home-hero__text", children: e.heroText }), n.jsx("div", { className: "home-hero__actions", children: n.jsx(j, { to: "/contact", className: "hero-btn-main", children: e.bookNow }) })] })] }) }), n.jsx("section", { className: "services-section", children: n.jsxs("div", { className: "container", children: [n.jsxs("div", { className: "section-header", children: [n.jsx("span", { className: "section-label", children: e.expertise }), n.jsx("h2", { className: "section-title", children: e.compStaffing })] }), n.jsx("div", { className: "featured-services-grid", children: [{ title: e.supply, img: fx, link: "/" }, { title: e.recruitment, img: em, link: "/recruitment" }, { title: e.staffing, img: tm, link: "/contract-staffing" }, { title: e.search, img: nm, link: "/executive-search" }, { title: e.outsourcing, img: gx, link: "/hr-outsourcing" }, { title: e.security, img: im, link: "/security-solutions" }].map((o, a) => n.jsxs(j, { to: o.link, className: "featured-service-card", children: [n.jsx("img", { src: o.img, alt: o.title, className: "fs-card-bg" }), n.jsx("div", { className: "fs-card-overlay", children: n.jsx("h3", { className: "fs-card-title", children: o.title }) })] }, a)) })] }) }), n.jsx("section", { className: "supply-services-section", children: n.jsxs("div", { className: "container", children: [n.jsxs("div", { className: "section-header", style: { marginBottom: "40px" }, children: [n.jsx("h2", { className: "section-title", children: e.supplyInDubai }), n.jsx("p", { style: { maxWidth: "800px", margin: "0 auto", color: "#555", fontSize: "1.1rem" }, children: e.supplyDesc })] }), n.jsx("div", { className: "supply-grid-container", children: [{ title: e.civilSupply, desc: e.civilSupplyDesc, icon: n.jsx(Dg, { size: 48, strokeWidth: 1.2 }), link: "/services/civil-manpower" }, { title: e.mechSupply, desc: e.mechSupplyDesc, icon: n.jsx(_g, { size: 48, strokeWidth: 1.2 }), link: "/services/mechanical-manpower" }, { title: e.elecSupply, desc: e.elecSupplyDesc, icon: n.jsx(Yg, { size: 48 }), link: "/services/electrical-manpower" }, { title: e.plumbSupply, desc: e.plumbSupplyDesc, icon: n.jsx(Ag, { size: 48, strokeWidth: 1.2 }), link: "/services/plumbing-manpower" }, { title: e.helperSupply, desc: e.helperSupplyDesc, icon: n.jsx(Ju, { size: 48, strokeWidth: 1.2 }), link: "/services/helper-manpower" }, { title: e.cleaningSupply, desc: e.cleaningSupplyDesc, icon: n.jsx(Ug, { size: 48, strokeWidth: 1.2 }), link: "/services/cleaning-manpower" }].map((o, a) => n.jsxs("div", { className: "supply-card", children: [n.jsx("div", { className: "supply-card-icon", children: o.icon }), n.jsx("h3", { className: "supply-card-title", children: o.title }), n.jsx("p", { className: "supply-card-desc", children: o.desc })] }, a)) })] }) }), n.jsx("section", { className: "book-banner-section", children: n.jsx("div", { className: "container", children: n.jsxs("div", { className: "book-banner-inner", children: [n.jsxs("div", { className: "book-banner-header", children: [n.jsx("h2", { children: e.seamlessAcq }), n.jsx("p", { children: e.seamlessAcqDesc })] }), n.jsxs("div", { className: "book-steps-grid", children: [n.jsxs("div", { className: "book-step", children: [n.jsxs("div", { className: "book-step-icon-wrapper", children: [n.jsx("div", { className: "book-step-icon", children: n.jsx(Ig, { strokeWidth: 1.5, size: 32, color: "#FE7622" }) }), n.jsx("span", { className: "book-step-badge", children: "1" })] }), n.jsx("h3", { children: e.idReq }), n.jsx("p", { children: e.idReqDesc })] }), n.jsxs("div", { className: "book-step", children: [n.jsxs("div", { className: "book-step-icon-wrapper", children: [n.jsx("div", { className: "book-step-icon", children: n.jsx(Og, { strokeWidth: 1.5, size: 32, color: "#FE7622" }) }), n.jsx("span", { className: "book-step-badge", children: "2" })] }), n.jsx("h3", { children: e.specVolume }), n.jsx("p", { children: e.specVolumeDesc })] }), n.jsxs("div", { className: "book-step", children: [n.jsxs("div", { className: "book-step-icon-wrapper", children: [n.jsx("div", { className: "book-step-icon", children: n.jsx(Cg, { strokeWidth: 1.5, size: 32, color: "#FE7622" }) }), n.jsx("span", { className: "book-step-badge", children: "3" })] }), n.jsx("h3", { children: e.mobilize }), n.jsx("p", { children: e.mobilizeDesc })] })] }), n.jsx("div", { className: "book-banner-action", children: n.jsx(j, { to: "/contact", className: "book-banner-btn", children: e.bookNow }) })] }) }) }), n.jsx("section", { className: "journey-section", children: n.jsxs("div", { className: "container", children: [n.jsx("div", { className: "section-header", style: { marginBottom: "40px" }, children: n.jsx("h2", { className: "section-title", style: { color: "#666", fontWeight: "500" }, children: e.opImpact }) }), n.jsx("div", { className: "journey-grid-container", children: n.jsxs("div", { className: "journey-grid", children: [n.jsxs("div", { className: "journey-item", children: [n.jsx(Yi, { end: 100, suffix: "+", duration: 2e3 }), n.jsx("h3", { className: "journey-label", children: e.activeDeploy }), n.jsx("p", { className: "journey-desc", children: e.activeDeployDesc })] }), n.jsxs("div", { className: "journey-item", children: [n.jsx(Yi, { end: 100, suffix: "+", duration: 2e3 }), n.jsx("h3", { className: "journey-label", children: e.partnerOrg }), n.jsx("p", { className: "journey-desc", children: e.partnerOrgDesc })] }), n.jsxs("div", { className: "journey-item", children: [n.jsx(Yi, { end: 150, suffix: "+", duration: 2e3 }), n.jsx("h3", { className: "journey-label", children: e.projDelivered }), n.jsx("p", { className: "journey-desc", children: e.projDeliveredDesc })] }), n.jsxs("div", { className: "journey-item", children: [n.jsx(Yi, { end: 999, suffix: "+", duration: 2500 }), n.jsx("h3", { className: "journey-label", children: e.profDeployed }), n.jsx("p", { className: "journey-desc", children: e.profDeployedDesc })] })] }) })] }) }), n.jsx("section", { className: "core-area-section", children: n.jsxs("div", { className: "container", children: [n.jsxs("div", { className: "core-area-header", children: [n.jsx("h2", { className: "core-area-title", children: e.indEmpower }), n.jsx("p", { className: "core-area-desc", children: e.indEmpowerDesc })] }), n.jsxs("div", { className: "core-area-grid", children: [n.jsxs(j, { to: "/oil-gas", className: "core-area-item large", children: [n.jsx("img", { src: lx, alt: e.oilGas, className: "core-area-img" }), n.jsx("div", { className: "core-area-overlay", children: n.jsx("h3", { className: "core-area-item-title", children: e.oilGas }) })] }), n.jsxs(j, { to: "/oil-gas", className: "core-area-item large", children: [n.jsx("img", { src: cx, alt: "Civil Construction", className: "core-area-img" }), n.jsx("div", { className: "core-area-overlay", children: n.jsx("h3", { className: "core-area-item-title", children: e.civil }) })] }), n.jsxs(j, { to: "/oil-gas", className: "core-area-item small", children: [n.jsx("img", { src: px, alt: "Logistics", className: "core-area-img" }), n.jsx("div", { className: "core-area-overlay", children: n.jsx("h3", { className: "core-area-item-title", children: e.logistics }) })] }), n.jsxs(j, { to: "/oil-gas", className: "core-area-item small", children: [n.jsx("img", { src: dx, alt: "Manufacture", className: "core-area-img" }), n.jsx("div", { className: "core-area-overlay", children: n.jsx("h3", { className: "core-area-item-title", children: e.manufacture }) })] }), n.jsxs(j, { to: "/oil-gas", className: "core-area-item small", children: [n.jsx("img", { src: mx, alt: "Facility Management", className: "core-area-img" }), n.jsx("div", { className: "core-area-overlay", children: n.jsx("h3", { className: "core-area-item-title", children: e.facility }) })] }), n.jsxs(j, { to: "/oil-gas", className: "core-area-item small", children: [n.jsx("img", { src: ux, alt: "Mechanical, Electrical & Plumbing - MEP", className: "core-area-img" }), n.jsx("div", { className: "core-area-overlay", children: n.jsx("h3", { className: "core-area-item-title", children: e.mep }) })] })] })] }) }), n.jsx("section", { className: "quote-section", children: n.jsx("div", { className: "container", children: n.jsxs("div", { className: "quote-wrapper", children: [n.jsx("div", { className: "quote-image-side", children: n.jsx("img", { src: yx, alt: "Strategic Partnership Architecture" }) }), n.jsxs("div", { className: "quote-form-side", children: [n.jsx("span", { className: "quote-label", children: e.stratPartner }), n.jsx("h2", { className: "quote-title", children: e.accelProj }), n.jsx("p", { className: "quote-desc", children: e.accelProjDesc }), n.jsxs("form", { className: "quote-form", onSubmit: o => o.preventDefault(), children: [n.jsxs("div", { className: "form-row", children: [n.jsx("input", { type: "text", placeholder: e.enterName, required: !0 }), n.jsx("input", { type: "email", placeholder: e.enterEmail, required: !0 })] }), n.jsx("div", { className: "form-group", children: n.jsx("input", { type: "tel", placeholder: e.phoneNum, required: !0 }) }), n.jsx("div", { className: "form-group", children: n.jsx("textarea", { placeholder: e.comments, rows: "4" }) }), n.jsx("button", { type: "submit", className: "quote-submit-btn", children: e.bookNow })] })] })] }) }) }), n.jsx("section", { className: "faq-section", children: n.jsxs("div", { className: "container", children: [n.jsx("h2", { className: "faq-main-title", children: e.faqTitle }), n.jsx("p", { className: "faq-subtitle", children: e.faqSubtitle }), n.jsx("div", { className: "faq-list", children: s.map((o, a) => n.jsxs("div", { className: `faq-item ${t === a ? "active" : ""}`, children: [n.jsxs("div", { className: "faq-question-btn", onClick: () => i(t === a ? -1 : a), children: [n.jsx("span", { className: "faq-icon", children: t === a ? "−" : "+" }), n.jsx("span", { className: "faq-question-text", children: o.question })] }), n.jsx("div", { className: "faq-answer-container", style: { maxHeight: t === a ? "300px" : "0" }, children: n.jsx("div", { className: "faq-answer-content", children: n.jsx("p", { children: o.answer }) }) })] }, a)) })] }) }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        .hero-wrapper { padding-top: 20px; padding-bottom: 20px; }
        .home-hero { 
            background: var(--color-primary); 
            border-radius: 40px; 
            color: white; 
            padding: 80px 100px; 
            display: flex; 
            align-items: center; 
            justify-content: space-between;
            position: relative;
            overflow: hidden;
            min-height: 500px;
        }
        .home-hero.video-slide { background: var(--color-dark); }
        .hero-video-container {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            z-index: 1;
            opacity: 1;
            visibility: visible;
        }
        .hero-video-bg {
            width: 100%; height: 100%; object-fit: cover;
        }
        .hero-video-overlay {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.4);
        }

        .home-hero__content { flex: 1; z-index: 3; max-width: 600px; position: relative; }
        .home-hero__title { font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1; margin-bottom: 25px; font-weight: 900; color: #fff; }
        .home-hero__text { font-size: 1.1rem; color: #fff; margin-bottom: 40px; max-width: 500px; line-height: 1.6; opacity: 0.95; }
        
        .hero-btn-main { 
            background: #ffffff; color: #000; border: none; 
            padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem;
            display: inline-block; transition: 0.3s; position: relative; z-index: 3;
        }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        
        .home-hero__image { 
            flex: 0.8; display: flex; justify-content: flex-end; align-items: flex-end; 
            position: absolute; right: 40px; bottom: 0; z-index: 2;
            opacity: 0; visibility: hidden; transition: opacity 0.8s ease, visibility 0.8s ease;
        }
        .home-hero__image.active { opacity: 1; visibility: visible; }
        .hero-workers-img { width: 550px; max-width: 100%; height: auto; display: block; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2)); }
        
        .services-section { background: var(--color-white); padding-top: 100px; padding-bottom: 60px; }
        
        .featured-services-grid { 
            display: grid; 
            grid-template-columns: repeat(3, 1fr); 
            gap: 30px; 
            margin-top: 50px; 
        }
        .featured-service-card { 
            position: relative; 
            border-radius: 20px; 
            overflow: hidden; 
            height: 280px; 
            display: block;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: 0.4s;
            cursor: pointer;
            isolation: isolate;
        }
        .featured-service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }
        .fs-card-bg { 
            width: 100%; 
            height: 100%; 
            object-fit: cover; 
            transition: 0.6s transform ease;
            position: absolute;
            inset: 0;
            z-index: -1;
        }
        .featured-service-card:hover .fs-card-bg {
            transform: scale(1.05);
        }
        .fs-card-overlay { 
            position: absolute; 
            bottom: 0; left: 0; right: 0; 
            height: 60%; 
            background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%);
            display: flex; 
            align-items: flex-end; 
            justify-content: center; 
            padding-bottom: 40px;
            pointer-events: none;
        }
        .fs-card-title { 
            color: #ffffff; 
            font-size: 1.8rem; 
            font-weight: 500; 
            font-family: var(--font-body); 
            text-align: center;
        }
        
        /* New Manpower Supply Section */
        .supply-services-section { padding: 80px 0; background: #fff; }
        .supply-grid-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            border: 1px solid #e2e4e8;
            border-radius: 20px;
            overflow: hidden;
            background: #f8f9fa;
        }
        .supply-card {
            background: #f8f9fa;
            padding: 50px 40px;
            text-align: center;
            color: #333;
            transition: 0.4s ease;
            position: relative;
            border-bottom: 1px solid #e2e4e8;
            border-right: 1px solid #e2e4e8;
        }
        .supply-card:nth-child(2n) {
            border-right: none;
        }
        .supply-card:nth-last-child(-n+2) {
            border-bottom: none;
        }
        
        .supply-card:hover {
            background: var(--color-primary);
            color: #fff;
            transform: scale(1.01);
            z-index: 10;
            box-shadow: 0 15px 30px rgba(254, 118, 34, 0.3);
            border-radius: 12px; 
            border-color: transparent;
        }
        .supply-card-icon {
            margin-bottom: 25px;
            color: #444;
            transition: 0.4s;
            display: flex;
            justify-content: center;
        }
        .supply-card:hover .supply-card-icon { color: #fff; }
        .supply-card-title {
            font-size: 1.35rem; font-weight: 500; margin-bottom: 20px; letter-spacing: -0.5px;
            display: flex; align-items: center; justify-content: center;
        }
        .supply-card-desc {
            font-size: 0.95rem; line-height: 1.6; margin-bottom: 30px; opacity: 0.75; min-height: 5rem;
        }
        .supply-card:hover .supply-card-desc { opacity: 0.95; }
        .supply-card-link {
            display: inline-flex; align-items: center; gap: 8px; font-weight: 400; font-size: 0.95rem; transition: 0.3s;
        }
            .supply-card:hover .supply-card-title{
            color:#fff;}
        .supply-card-link:hover { gap: 12px; }
        
        /* Book Manpower Banner Section */
        .book-banner-section {
            padding: 80px 0;
            background: #fff;
        }
        .book-banner-inner {
            background: #232a55;
            border-radius: 30px;
            padding: 80px 40px;
            color: #fff;
            text-align: center;
        }
        .book-banner-header h2 {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 20px;
            line-height: 1.2;
            color: #fff;
        }
        .book-banner-header p {
            font-size: 1.1rem;
            opacity: 0.9;
            margin-bottom: 60px;
            line-height: 1.6;
        }
        
        .book-steps-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            margin-bottom: 60px;
            text-align: left;
        }
        .book-step {
            display: flex;
            flex-direction: column;
        }
        .book-step-icon-wrapper {
            position: relative;
            width: fit-content;
            margin-bottom: 25px;
        }
        .book-step-icon {
            width: 80px;
            height: 80px;
            background: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .book-step-badge {
            position: absolute;
            top: 0;
            right: -5px;
            width: 24px;
            height: 24px;
            background: #FE7622;
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.85rem;
            font-weight: 700;
            border: 2px solid #232a55;
        }
        .book-step h3 {
            font-size: 1.4rem;
            font-weight: 600;
            margin-bottom: 15px;
            color: #fff;
        }
        .book-step p {
            font-size: 0.95rem;
            line-height: 1.6;
            opacity: 0.8;
            color: #fff;
        }
        
        .book-banner-action {
            text-align: center;
        }
        .book-banner-btn {
            background: #fff;
            color: #333;
            padding: 15px 50px;
            border-radius: 100px;
            font-weight: 600;
            font-size: 1.1rem;
            display: inline-block;
            transition: 0.3s;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .book-banner-btn:hover {
            background: var(--color-primary);
            color: #fff;
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
        
        /* The Journey of Smaar Elysium Section */
        .journey-section { padding: 60px 0 80px; background: #fff; }
        .journey-grid-container {
            background: linear-gradient(to right, var(--color-primary), var(--color-primary-dark));
            border-radius: 20px;
            color: white;
            padding: 50px 0;
            box-shadow: 0 15px 35px rgba(254, 118, 34, 0.2);
        }
        .journey-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .journey-item { 
            text-align: center; 
            padding: 0 30px;
            border-right: 1px solid rgba(255,255,255,0.15);
        }
        .journey-item:last-child { border-right: none; }
        .journey-num { 
            display: block; 
            font-size: clamp(2.5rem, 4vw, 3.5rem); 
            font-weight: 500; 
            color: #fff; 
            margin-bottom: 10px; 
            letter-spacing: 1px;
        }
        .journey-label { 
            font-size: 1.3rem; 
            font-weight: 500; 
            margin-bottom: 15px; 
            color: #fff;
        }
        .journey-desc {
            font-size: 0.9rem;
            line-height: 1.5;
            opacity: 0.9;
        }
        
        /* Our Core Area Section */
        .core-area-section { padding: 80px 0; background: #fff; }
        .core-area-header { text-align: center; margin-bottom: 50px; }
        .core-area-title { font-size: 2.8rem; font-weight: 500; color: #555; margin-bottom: 20px; }
        .core-area-desc { font-size: 1.05rem; color: #777; max-width: 800px; margin: 0 auto; line-height: 1.7; }
        
        .core-area-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(2, 280px);
            border-radius: 20px;
            overflow: hidden;
            background: #000; /* For better contrast during loading */
        }
        .core-area-item { position: relative; overflow: hidden; display: block; }
        .core-area-item.large { grid-column: span 2; }
        .core-area-item.small { grid-column: span 1; }
        
        .core-area-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; opacity: 0.85; }
        .core-area-item:hover .core-area-img { transform: scale(1.05); opacity: 1; }
        
        .core-area-overlay {
            position: absolute; inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 100%);
            display: flex; align-items: flex-end; justify-content: center;
            padding-bottom: 30px; pointer-events: none;
        }
        .core-area-item-title { color: #fff; font-size: 1.15rem; font-weight: 600; text-align: center; margin: 0; line-height: 1.4; }
        .large .core-area-item-title { font-size: 1.4rem; }
        
        /* Clients Section */
        .clients-section { padding: 80px 0 100px; background: #fff; text-align: center; }
        .clients-header h2 { font-size: 2.8rem; font-weight: 500; color: #666; margin-bottom: 20px; }
        .trustindex-placeholder { margin-bottom: 80px; font-size: 0.9rem; color: #222; }
        .clients-logos-header h2 { font-size: 2.8rem; font-weight: 500; color: #666; margin-bottom: 40px; }
        
        .marquee-container {
            overflow: hidden;
            position: relative;
            width: 100%;
            padding: 20px 0;
            display: flex;
        }
        
        .marquee-content.left-to-right {
            display: flex;
            white-space: nowrap;
            animation: scroll-left-to-right 25s linear infinite;
            gap: 60px;
        }
        
        .marquee-group {
            display: flex;
            flex-shrink: 0;
            gap: 60px;
            align-items: center;
            justify-content: space-around;
            min-width: 100%;
        }
        
        @keyframes scroll-left-to-right {
            0% { transform: translateX(calc(-100% - 60px)); }
            100% { transform: translateX(0); }
        }
        
        .client-logo-box img { 
            max-width: 180px; 
            max-height: 60px; 
            width: auto;
            object-fit: contain;
            filter: grayscale(100%) opacity(0.8); 
            transition: 0.3s; 
        }
        .client-logo-box:hover img { filter: grayscale(0%) opacity(1); }
        
        /* Request a Quote Section */
        .quote-section { padding: 40px 0 100px; background: #fff; }
        .quote-wrapper {
            display: flex;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(0,0,0,0.1);
            min-height: 600px;
        }
        .quote-image-side {
            flex: 1;
            position: relative;
        }
        .quote-image-side img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            inset: 0;
        }
        .quote-form-side {
            flex: 1;
            background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-primary) 100%);
            padding: 60px 50px;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .quote-label { font-size: 1rem; opacity: 0.9; margin-bottom: 5px; display: block; }
        .quote-title { 
            font-size: 2.8rem; 
            font-weight: 600; 
            margin-bottom: 20px; 
            color: #ffffff;
            transition: all 0.3s ease;
            cursor: pointer;
        }
        .quote-title:hover {
            color: #FE7622;
            text-shadow: 0 0 15px rgba(254, 118, 34, 0.4);
            transform: translateX(10px);
        }
        .quote-desc { font-size: 0.95rem; line-height: 1.6; opacity: 0.9; margin-bottom: 40px; max-width: 90%; }
        
        .quote-form input, .quote-form textarea {
            width: 100%;
            background: transparent;
            border: 1px solid rgba(255,255,255,0.2);
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-size: 0.95rem;
            outline: none;
            transition: all 0.3s ease;
        }
        .quote-form input::placeholder, .quote-form textarea::placeholder { color: rgba(255,255,255,0.5); }
        
        .quote-form input:hover, .quote-form textarea:hover {
            border-color: var(--color-primary);
            box-shadow: 0 0 10px rgba(254, 118, 34, 0.3);
            background: rgba(255,255,255,0.05);
        }
        
        .quote-form input:focus, .quote-form textarea:focus { 
            border-color: var(--color-primary); 
            background: rgba(255,255,255,0.1); 
            box-shadow: 0 0 15px rgba(254, 118, 34, 0.5);
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .form-group { margin-bottom: 20px; }
        .quote-form textarea { resize: none; }
        
        .recaptcha-placeholder { margin-bottom: 30px; }
        .recaptcha-box { 
            background: #fff; border-radius: 4px; padding: 10px 15px; 
            display: inline-flex; align-items: center; gap: 15px;
            color: #333; font-size: 0.9rem; width: 260px; justify-content: space-between;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .recaptcha-box input[type="checkbox"] { width: 24px; height: 24px; cursor: pointer; border: 2px solid #ccc; flex-shrink: 0; }
        .recaptcha-box label { cursor: pointer; flex: 1; margin-top: 2px; }
        .recaptcha-logo { display:flex; flex-direction: column; align-items: center; font-size: 0.5rem; color: #999; }
        
        .quote-submit-btn {
            background: #fff; color: #333; border: none; padding: 15px 40px;
            border-radius: 100px; font-weight: 600; font-size: 1.1rem; cursor: pointer; transition: 0.3s;
        }
        .quote-submit-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
        
        /* FAQ Section */
        .faq-section { padding: 60px 0 100px; background: #fff; }
        .faq-main-title { font-size: 3rem; font-weight: 400; color: #000; margin-bottom: 20px; }
        .faq-subtitle { font-size: 1.1rem; color: #333; margin-bottom: 40px; text-transform: uppercase; }
        
        .faq-list { max-width: 100%; border-top: 1px solid #f1f1f1; }
        .faq-item { border-bottom: 1px solid #f1f1f1; transition: 0.3s; }
        .faq-question-btn { 
            display: flex; 
            align-items: center; 
            width: 100%; 
            padding: 25px 20px; 
            background: none; 
            border: none; 
            cursor: pointer; 
            text-align: left;
            transition: 0.3s;
        }
        .faq-icon {
            font-size: 1.5rem;
            margin-right: 15px;
            color: #888;
            font-weight: 300;
            width: 20px;
            display: inline-block;
        }
        .faq-question-text {
            font-size: 1.45rem;
            color: #777;
            font-weight: 400;
            transition: 0.3s;
        }
        .faq-item.active .faq-icon, .faq-item.active .faq-question-text { color: #FE7622; }
        
        .faq-answer-container {
            overflow: hidden;
            transition: max-height 0.3s ease-in-out;
            background: #fafafa;
        }
        .faq-answer-content { padding: 30px 40px; }
        .faq-answer-content p {
            color: #000; font-size: 0.95rem; line-height: 1.7; margin: 0; font-weight: 400; letter-spacing: 0.2px;
        }
        
        @media (max-width: 1200px) {
            .home-hero { padding: 60px 60px; }
            .hero-workers-img { width: 450px; }
            .featured-services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 992px) {
        .faq-question-text{
        font-size: 0.95rem;
        }
        .faq-question-btn{
        padding:15px 10px;
        }
        .faq-answer-content{
        padding:15px 20px;
        }
          .home-hero { flex-direction: column; text-align: center; padding: 60px 30px 0; min-height: auto; border-radius: 20px; }
          .home-hero__content { max-width: 100%; display: flex; flex-direction: column; align-items: center; margin-bottom: 20px; }
          .home-hero__image { position: relative; justify-content: center; width: 100%; display: flex; right: 0; bottom: 0; }
          .hero-workers-img { width: 100%; max-width: 400px; display: block; margin-bottom: -12%; }
          .featured-services-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .section-title { font-size: 2.2rem; }
          .journey-grid { grid-template-columns: 1fr 1fr; gap: 40px 0; }
          .journey-item:nth-child(even) { border-right: none; }
          .journey-item:nth-child(1), .journey-item:nth-child(2) { padding-bottom: 40px; border-bottom: 1px solid rgba(255,255,255,0.15); }
          .supply-grid-container { border-radius: 15px; }
          .supply-card { padding: 30px 20px; }
          .supply-card-title { font-size: 1.1rem; margin-bottom: 15px; }
          .supply-card-desc { font-size: 0.85rem; margin-bottom: 15px; min-height: auto; }
          .book-steps-grid { grid-template-columns: 1fr; gap: 50px; text-align: center; }
          .book-step { align-items: center; }
          .book-banner-inner { padding: 50px 30px; }
          .book-banner-header h2 { font-size: 2.2rem; }
          .core-area-grid { grid-template-columns: 1fr 1fr; grid-template-rows: repeat(3, 250px); }
          .core-area-item.small { grid-column: span 1; }
          .quote-wrapper { flex-direction: column; }
          .quote-image-side { min-height: 300px; }
          .form-row { grid-template-columns: 1fr; gap: 0; }
        }
        @media (max-width: 600px) {
          .featured-services-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
          .featured-service-card { height: 160px; border-radius: 12px; }
          .fs-card-title { font-size: 1.1rem; }
          .journey-grid { grid-template-columns: 1fr 1fr; gap: 20px 0; }
          .journey-item { padding: 10px 15px !important; border-bottom: none !important; border-right: 1px solid rgba(255,255,255,0.15) !important; }
          .journey-item:nth-child(even) { border-right: none !important; }
          .journey-item:nth-child(1), .journey-item:nth-child(2) { padding-bottom: 25px !important; border-bottom: 1px solid rgba(255,255,255,0.15) !important; }
          .journey-num { font-size: 1.8rem; margin-bottom: 5px; display: block; }
          .journey-label { font-size: 0.95rem; margin-bottom: 8px; }
          .journey-desc { font-size: 0.75rem; }
          .projects-grid { grid-template-columns: 1fr; }
          .core-area-grid { grid-template-columns: 1fr; grid-template-rows: auto; }
          .core-area-item { height: 250px; grid-column: span 1 !important; }
          .quote-form-side { padding: 40px 25px; }
          .quote-title { font-size: 2.2rem; }
          .supply-card { padding: 20px 15px; }
          .supply-card-icon { margin-bottom: 15px; }
          .supply-card-title { font-size: 1rem; margin-bottom: 10px; }
          .supply-card-desc { font-size: 0.8rem; margin-bottom: 0; }
        }
      `}
        })]
    })
}, zr = { catCivil: [{ id: 1, nameKey: "bmTrade_mason", icon: "🧱" }, { id: 2, nameKey: "bmTrade_carpenter", icon: "🪚" }, { id: 3, nameKey: "bmTrade_steelFixer", icon: "🏗️" }, { id: 4, nameKey: "bmTrade_painter", icon: "🎨" }, { id: 5, nameKey: "bmTrade_labor", icon: "👷" }, { id: 6, nameKey: "bmTrade_foreman", icon: "📋" }], catMEP: [{ id: 7, nameKey: "bmTrade_electrician", icon: "⚡" }, { id: 8, nameKey: "bmTrade_plumber", icon: "🔧" }, { id: 9, nameKey: "bmTrade_hvac", icon: "❄️" }, { id: 10, nameKey: "bmTrade_pipeFitter", icon: "🔩" }, { id: 11, nameKey: "bmTrade_welder", icon: "🔥" }, { id: 12, nameKey: "bmTrade_ductMan", icon: "💨" }], catInfra: [{ id: 13, nameKey: "bmTrade_heavyDriver", icon: "🚛" }, { id: 14, nameKey: "bmTrade_operator", icon: "🏗️" }, { id: 15, nameKey: "bmTrade_rigger", icon: "⛓️" }, { id: 16, nameKey: "bmTrade_flagman", icon: "🚩" }, { id: 17, nameKey: "bmTrade_surveyor", icon: "📐" }], catOthers: [{ id: 18, nameKey: "bmTrade_security", icon: "🛡️" }, { id: 19, nameKey: "bmTrade_warehouse", icon: "📦" }, { id: 20, nameKey: "bmTrade_cleaning", icon: "🧹" }, { id: 21, nameKey: "bmTrade_officeBoy", icon: "☕" }] }, bx = () => {
    const { t: e } = U(), [t, i] = b.useState(1), [s, r] = b.useState("catCivil"), [o, a] = b.useState({}), [l, c] = b.useState({ location: "", duration: "", startDate: "", name: "", company: "", email: "", phone: "", message: "" }), [d, m] = b.useState(!1); b.useEffect(() => { window.scrollTo(0, 0) }, [t]); const h = (u, p) => { a(y => { const k = y[u] || 0, q = Math.max(0, k + p); return { ...y, [u]: q } }) }, g = u => { const { name: p, value: y } = u.target; c(k => ({ ...k, [p]: y })) }, x = z.useMemo(() => { const u = Object.values(zr).flat(); return Object.entries(o).filter(([p, y]) => y > 0).map(([p, y]) => { const k = u.find(q => q.id === parseInt(p)); return k ? { ...k, name: e[k.nameKey], qty: y } : { id: parseInt(p), name: "Unknown", qty: y } }) }, [o, e]), w = x.reduce((u, p) => u + (p.qty || 0), 0), v = () => { if (t === 1 && w === 0) { alert("Please select at least one manpower trade to proceed."); return } if (t === 2 && (!l.location || !l.duration || !l.startDate)) { alert("Please fill in all project details (Location, Duration, and Start Date) to proceed."); return } i(u => u + 1) }, S = () => i(u => u - 1), f = async u => { u.preventDefault(); const p = new FormData; p.append("name", l.name), p.append("company", l.company), p.append("email", l.email), p.append("phone", l.phone), p.append("location", l.location), p.append("duration", l.duration), p.append("startDate", l.startDate), p.append("message", l.message), p.append("trades", JSON.stringify(x)); try { const y = await fetch("/book-man-power-form.php", { method: "POST", headers: { "X-Requested-With": "XMLHttpRequest" }, body: p }); if (y.ok) { try { const k = await y.json(); k.debug && console.log("SMTP Success Debug Log:", k.debug) } catch { } console.log("Booking request sent successfully"), m(!0) } else { let k = y.statusText; try { const q = await y.json(); k = q.message || k, q.debug && console.log("SMTP Debug Log:", q.debug) } catch { } alert("There was an error sending your request: " + k), console.error("Submission failed:", k) } } catch (y) { alert("There was an error connecting to the server. Please check your connection."), console.error("Network error:", y) } }; return d ? n.jsxs("div", {
        className: "booking-page", children: [n.jsx("section", { className: "submission-success", children: n.jsx("div", { className: "container", children: n.jsxs("div", { className: "success-card", children: [n.jsx("div", { className: "success-icon", children: n.jsx(Tg, { size: 80, color: "#FE7622" }) }), n.jsx("h2", { children: e.bmSuccessTitle }), n.jsx("p", { children: e.bmSuccessText }), n.jsxs("div", { className: "summary-preview", children: [n.jsx("h3", { children: e.bmSummaryTitle }), n.jsxs("ul", { children: [n.jsxs("li", { children: [n.jsx("strong", { children: e.bmSummaryTotalPersonnel }), " ", w] }), n.jsxs("li", { children: [n.jsx("strong", { children: e.bmSummaryLocation }), " ", l.location] }), n.jsxs("li", { children: [n.jsx("strong", { children: e.bmSummaryStart }), " ", l.startDate] })] })] }), n.jsx(j, { to: "/", className: "btn btn-primary", children: e.bmBackHome })] }) }) }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
                    .submission-success { padding: 100px 0; background: #f8f9fa; min-height: 80vh; display: flex; align-items: center; }
                    .success-card { background: white; padding: 60px; border-radius: 24px; text-align: center; max-width: 600px; margin: 0 auto; box-shadow: 0 20px 50px rgba(0,0,0,0.1); }
                    .success-icon { margin-bottom: 30px; }
                    .success-card h2 { font-size: 2.5rem; margin-bottom: 20px; }
                    .success-card p { font-size: 1.1rem; color: #666; margin-bottom: 40px; }
                    .summary-preview { background: #fff8f4; padding: 25px; border-radius: 12px; margin-bottom: 40px; text-align: left; }
                    .summary-preview h3 { font-size: 1.2rem; margin-bottom: 15px; border-bottom: 1px solid #feeaea; padding-bottom: 10px; }
                    .summary-preview ul li { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 0.95rem; }
                `}
        })]
    }) : n.jsxs("div", {
        className: "booking-page", children: [n.jsx(J, { title: e.bookSEOTitle, description: e.bookSEODesc, keywords: "book manpower UAE, hire workers online UAE, request skilled labour, manpower booking form", canonical: "https://www.smaarelysium.com/book-manpower" }), n.jsx("section", { className: "booking-hero", children: n.jsx("div", { className: "container", children: n.jsxs("div", { className: "hero-content", children: [n.jsx("h1", { className: "hero-title", children: e.bmHeroTitle }), n.jsx("p", { className: "hero-subtitle", children: e.bmHeroSubtitle }), n.jsxs("div", { className: "step-indicator", children: [n.jsxs("div", { className: `step-dot ${t >= 1 ? "active" : ""}`, children: [n.jsx("span", { className: "dot-num", children: "1" }), n.jsx("span", { className: "dot-label", children: e.bmStep1 })] }), n.jsx("div", { className: "step-line" }), n.jsxs("div", { className: `step-dot ${t >= 2 ? "active" : ""}`, children: [n.jsx("span", { className: "dot-num", children: "2" }), n.jsx("span", { className: "dot-label", children: e.bmStep2 })] }), n.jsx("div", { className: "step-line" }), n.jsxs("div", { className: `step-dot ${t >= 3 ? "active" : ""}`, children: [n.jsx("span", { className: "dot-num", children: "3" }), n.jsx("span", { className: "dot-label", children: e.bmStep3 })] })] })] }) }) }), n.jsx("section", { className: "booking-body", children: n.jsx("div", { className: "container", children: n.jsxs("div", { className: "booking-grid", children: [n.jsxs("div", { className: "main-booking-area", children: [t === 1 && n.jsxs("div", { className: "step-content animate-fade-in", children: [n.jsxs("div", { className: "step-header", children: [n.jsx("h2", { children: e.bmSelectTrades }), n.jsx("p", { children: e.bmSelectTradesDesc })] }), n.jsx("div", { className: "category-nav", children: Object.keys(zr).map(u => n.jsx("button", { className: `nav-item ${s === u ? "active" : ""}`, onClick: () => r(u), type: "button", children: e[u] }, u)) }), n.jsx("div", { className: "trades-cards-grid", children: zr[s].map(u => n.jsxs("div", { className: `trade-item-card ${o[u.id] > 0 ? "selected" : ""}`, children: [n.jsx("div", { className: "item-icon", children: u.icon }), n.jsxs("div", { className: "item-info", children: [n.jsx("span", { className: "item-name", children: e[u.nameKey] }), n.jsxs("div", { className: "item-controls", children: [n.jsx("button", { onClick: () => h(u.id, -1), className: "qty-btn", type: "button", children: n.jsx(Bg, { size: 14 }) }), n.jsx("span", { className: "qty-val", children: o[u.id] || 0 }), n.jsx("button", { onClick: () => h(u.id, 1), className: "qty-btn", type: "button", children: n.jsx(Mg, { size: 14 }) })] })] })] }, u.id)) }), n.jsx("div", { className: "step-navigation", children: n.jsxs("button", { onClick: v, className: "nav-btn-next", type: "button", children: [e.nextStep, " ", n.jsx(ni, { size: 18 })] }) })] }), t === 2 && n.jsxs("div", { className: "step-content animate-fade-in", children: [n.jsxs("div", { className: "step-header", children: [n.jsx("h2", { children: e.bmProjectDetails }), n.jsx("p", { children: e.bmProjectDetailsDesc })] }), n.jsx("div", { className: "booking-form-wrap", children: n.jsxs("div", { className: "form-grid", children: [n.jsxs("div", { className: "form-field", children: [n.jsxs("label", { children: [n.jsx(Ku, { size: 16 }), " ", e.bmLocation] }), n.jsx("input", { type: "text", name: "location", placeholder: "e.g. Dubai South, Abu Dhabi", value: l.location, onChange: g, required: !0 })] }), n.jsxs("div", { className: "form-field", children: [n.jsxs("label", { children: [n.jsx(Eg, { size: 16 }), " ", e.bmDuration] }), n.jsxs("select", { name: "duration", value: l.duration, onChange: g, required: !0, children: [n.jsx("option", { value: "", children: e.bmDurationSelect }), n.jsx("option", { value: "Short Term (< 1 month)", children: e.bmDurationShort }), n.jsx("option", { value: "Medium Term (1-6 months)", children: e.bmDurationMedium }), n.jsx("option", { value: "Long Term (> 6 months)", children: e.bmDurationLong }), n.jsx("option", { value: "Ongoing / Contractual", children: e.bmDurationOngoing })] })] }), n.jsxs("div", { className: "form-field full-width", children: [n.jsxs("label", { children: [n.jsx(qg, { size: 16 }), " ", e.bmStartDate] }), n.jsx("input", { type: "date", name: "startDate", value: l.startDate, onChange: g, required: !0 })] })] }) }), n.jsxs("div", { className: "step-navigation", children: [n.jsxs("button", { onClick: S, className: "nav-btn-prev", type: "button", children: [n.jsx(mc, { size: 18 }), " ", e.back] }), n.jsxs("button", { onClick: v, className: "nav-btn-next", type: "button", children: [e.nextStep, " ", n.jsx(ni, { size: 18 })] })] })] }), t === 3 && n.jsxs("div", { className: "step-content animate-fade-in", children: [n.jsxs("div", { className: "step-header", children: [n.jsx("h2", { children: e.bmContactInfo }), n.jsx("p", { children: e.bmContactInfoDesc })] }), n.jsxs("form", { onSubmit: f, className: "booking-form-wrap", children: [n.jsxs("div", { className: "form-grid", children: [n.jsxs("div", { className: "form-field", children: [n.jsxs("label", { children: [n.jsx(Gg, { size: 16 }), " ", e.bmFullName] }), n.jsx("input", { type: "text", name: "name", placeholder: e.enterName, value: l.name, onChange: g, required: !0 })] }), n.jsxs("div", { className: "form-field", children: [n.jsxs("label", { children: [n.jsx(Sg, { size: 16 }), " ", e.bmCompanyName] }), n.jsx("input", { type: "text", name: "company", placeholder: e.enterName, value: l.company, onChange: g, required: !0 })] }), n.jsxs("div", { className: "form-field", children: [n.jsxs("label", { children: [n.jsx(Ba, { size: 16 }), " ", e.bmWorkEmail] }), n.jsx("input", { type: "email", name: "email", placeholder: e.enterEmail, value: l.email, onChange: g, required: !0 })] }), n.jsxs("div", { className: "form-field", children: [n.jsxs("label", { children: [n.jsx(kg, { size: 16 }), " ", e.bmPhoneNum] }), n.jsx("input", { type: "tel", name: "phone", placeholder: "+971 -- --- ----", value: l.phone, onChange: g, required: !0 })] }), n.jsxs("div", { className: "form-field full-width", children: [n.jsx("label", { children: e.bmAdditionalReq }), n.jsx("textarea", { name: "message", rows: "4", placeholder: e.bmAdditionalReqPlaceholder, value: l.message, onChange: g })] })] }), n.jsxs("div", { className: "step-navigation", children: [n.jsxs("button", { onClick: S, className: "nav-btn-prev", type: "button", children: [n.jsx(mc, { size: 18 }), " ", e.back] }), n.jsxs("button", { type: "submit", className: "complete-btn", children: [n.jsx(Hg, { size: 18 }), " ", e.bmCompleteBtn] })] })] })] })] }), n.jsx("aside", { className: "booking-summary-sidebar", children: n.jsxs("div", { className: "summary-glass-card", children: [n.jsxs("div", { className: "summary-title", children: [n.jsx(Qg, { size: 20 }), n.jsx("h3", { children: e.bmOrderSummary })] }), n.jsx("div", { className: "summary-items", children: x.length === 0 ? n.jsxs("div", { className: "empty-state", children: [n.jsx("div", { className: "empty-icon", children: n.jsx(pc, { size: 24 }) }), n.jsx("p", { children: e.bmNoTrades })] }) : n.jsx("div", { className: "selected-items-list", children: x.map(u => n.jsxs("div", { className: "summary-item", children: [n.jsxs("div", { className: "item-main", children: [n.jsx("span", { className: "item-icon-small", children: u.icon }), n.jsx("span", { className: "item-label", children: u.name })] }), n.jsxs("span", { className: "item-qty", children: ["x ", u.qty] })] }, u.id)) }) }), n.jsxs("div", { className: "summary-total", children: [n.jsx("span", { children: e.bmTotalManpower }), n.jsx("span", { className: "total-val", children: w })] }), n.jsx("div", { className: "summary-info-box", children: n.jsxs("p", { children: [n.jsx(pc, { size: 14 }), " ", e.bmProposalInfo] }) })] }) })] }) }) }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
                .booking-page { background: #fdfdfd; padding-bottom: 100px; }
                
                /* Hero Section */
                .booking-hero { background: linear-gradient(135deg, #121212 0%, #333 100%); padding: 80px 0 120px; color: white; border-radius: 0 0 60px 60px; text-align: center; }
                .hero-title { font-size: 3.5rem; font-weight: 800; margin-bottom: 15px; color: #fff; }
                .hero-subtitle { font-size: 1.2rem; opacity: 0.8; max-width: 600px; margin: 0 auto 50px; }
                
                /* Step Indicator */
                .step-indicator { display: flex; align-items: center; justify-content: center; max-width: 500px; margin: 0 auto; }
                .step-dot { display: flex; flex-direction: column; align-items: center; gap: 8px; position: relative; z-index: 2; transition: 0.3s; opacity: 0.4; }
                .step-dot.active { opacity: 1; }
                .dot-num { width: 36px; height: 36px; background: #fff; color: #000; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; border: 3px solid transparent; transition: 0.3s; }
                .step-dot.active .dot-num { background: var(--color-primary); color: #fff; box-shadow: 0 0 20px rgba(254, 118, 34, 0.4); }
                .dot-label { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #fff; }
                .step-line { flex: 1; height: 2px; background: rgba(255,255,255,0.1); margin: 0 -15px 23px; position: relative; z-index: 1; }
                
                /* Body */
                .booking-body { margin-top: -60px; }
                .booking-grid { display: grid; grid-template-columns: 1fr 360px; gap: 40px; }
                
                .main-booking-area { background: white; border-radius: 24px; box-shadow: 0 20px 60px rgba(0,0,0,0.05); padding: 40px; min-height: 500px; }
                .step-header { margin-bottom: 40px; }
                .step-header h2 { font-size: 2rem; margin-bottom: 10px; }
                .step-header p { color: #888; }
                
                /* Category Nav */
                .category-nav { display: flex; gap: 10px; margin-bottom: 30px; border-bottom: 2px solid #f5f5f5; padding-bottom: 5px; overflow-x: auto; }
                .nav-item { padding: 12px 25px; border: none; background: none; font-weight: 700; color: #999; cursor: pointer; border-bottom: 3px solid transparent; transition: 0.3s; white-space: nowrap; }
                .nav-item:hover { color: #666; }
                .nav-item.active { color: var(--color-primary); border-bottom-color: var(--color-primary); }
                
                /* Trades Cards */
                .trades-cards-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
                .trade-item-card { background: #fcfcfc; border: 1px solid #f1f1f1; padding: 25px; border-radius: 16px; display: flex; gap: 20px; align-items: center; transition: 0.3s; }
                .trade-item-card:hover { border-color: #feeaea; background: #fffdfb; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.02); }
                .trade-item-card.selected { border-color: var(--color-primary); background: #fff8f4; }
                .item-icon { font-size: 2.5rem; }
                .item-info { flex: 1; }
                .item-name { display: block; font-weight: 700; margin-bottom: 12px; font-size: 1.1rem; }
                .item-controls { display: flex; align-items: center; background: white; border: 1px solid #eee; border-radius: 8px; width: fit-content; overflow: hidden; }
                .qty-btn { border: none; background: none; padding: 8px 12px; cursor: pointer; color: #555; transition: 0.2s; }
                .qty-btn:hover { background: #f5f5f5; color: var(--color-primary); }
                .qty-val { width: 35px; text-align: center; font-weight: 800; }
                
                /* Form */
                .booking-form-wrap { max-width: 800px; }
                .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; }
                .form-field { display: flex; flex-direction: column; gap: 10px; }
                .form-field.full-width { grid-column: 1 / -1; }
                .form-field label { font-weight: 700; font-size: 0.9rem; display: flex; align-items: center; gap: 8px; color: #555; }
                .form-field input, .form-field select, .form-field textarea { padding: 15px 20px; border: 1px solid #eee; border-radius: 12px; outline: none; transition: 0.3s; font-size: 0.95rem; }
                .form-field input:focus, .form-field select:focus, .form-field textarea:focus { border-color: var(--color-primary); box-shadow: 0 0 15px rgba(254, 118, 34, 0.1); }
                .complete-btn { margin-top: 40px; background: var(--color-primary); color: white; border: none; padding: 18px 40px; border-radius: 100px; font-weight: 700; font-size: 1.1rem; display: flex; align-items: center; gap: 12px; cursor: pointer; transition: 0.3s; }
                .complete-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(254, 118, 34, 0.4); }
                
                /* Navigation */
                .step-navigation { margin-top: 50px; padding-top: 30px; border-top: 1px solid #f5f5f5; display: flex; justify-content: space-between; }
                .nav-btn-prev { background: #f5f6f8; border: none; padding: 12px 30px; border-radius: 10px; font-weight: 700; display: flex; align-items: center; gap: 10px; cursor: pointer; transition: 0.3s; color: #666; }
                .nav-btn-prev:hover { background: #eee; }
                .nav-btn-next { background: #121212; color: white; border: none; padding: 12px 35px; border-radius: 10px; font-weight: 700; display: flex; align-items: center; gap: 10px; cursor: pointer; transition: 0.3s; margin-left: auto; }
                .nav-btn-next:hover { transform: translateX(5px); background: #000; }
                .nav-btn-next.disabled { opacity: 0.2; pointer-events: none; }
                
                /* Sidebar */
                .summary-glass-card { background: white; border-radius: 24px; padding: 30px; box-shadow: 0 20px 60px rgba(0,0,0,0.05); position: sticky; top: 120px; border: 1px solid #f9f9f9; }
                .summary-title { display: flex; align-items: center; gap: 12px; margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px solid #f5f5f5; color: #121212; }
                .summary-title h3 { font-size: 1.25rem; }
                
                .summary-items { min-height: 100px; max-height: 400px; overflow-y: auto; margin-bottom: 25px; }
                .empty-state { text-align: center; color: #bbb; padding: 40px 0; }
                .empty-icon { margin-bottom: 15px; color: #ddd; }
                .empty-state p { font-size: 0.9rem; line-height: 1.5; }
                
                .selected-items-list { display: flex; flex-direction: column; gap: 12px; }
                .summary-item { display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: #fcfcfc; border-radius: 10px; }
                .item-main { display: flex; align-items: center; gap: 10px; }
                .item-icon-small { font-size: 1.2rem; }
                .item-label { font-size: 0.9rem; font-weight: 600; }
                .item-qty { font-weight: 800; color: var(--color-primary); font-size: 0.9rem; }
                
                .summary-total { display: flex; justify-content: space-between; padding: 20px 0; border-top: 2px solid #f8f8f8; font-weight: 800; font-size: 1.1rem; margin-bottom: 20px; }
                .total-val { color: var(--color-primary); font-size: 1.4rem; }
                
                .summary-info-box { background: #fffbf0; border: 1px solid #fff2cc; padding: 15px; border-radius: 12px; display: flex; gap: 10px; font-size: 0.8rem; color: #9a803f; line-height: 1.5; }
                
                .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @media (max-width: 992px) {
                    .booking-grid { grid-template-columns: 1fr; gap: 30px; }
                    .booking-summary-sidebar { order: 1; }
                    .summary-glass-card { position: static; }
                    .hero-title { font-size: 2.8rem; }
                    .hero-subtitle { font-size: 1.1rem; padding: 0 20px; }
                }

                @media (max-width: 768px) {
                    .booking-hero { padding: 60px 0 100px; border-radius: 0 0 40px 40px; }
                    .hero-title { font-size: 2.2rem; }
                    .step-indicator { max-width: 90%; }
                    .dot-label { font-size: 0.7rem; }
                    .step-line { margin: 0 -10px 18px; }
                    .dot-num { width: 30px; height: 30px; font-size: 0.9rem; }
                }

                @media (max-width: 576px) {
                    .main-booking-area { padding: 25px 20px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
                    .step-header h2 { font-size: 1.6rem; }
                    .form-grid { grid-template-columns: 1fr; gap: 15px; }
                    .category-nav { gap: 5px; margin-bottom: 20px; }
                    .nav-item { padding: 10px 15px; font-size: 0.9rem; }
                    .trades-cards-grid { grid-template-columns: 1fr; gap: 12px; }
                    .trade-item-card { padding: 15px; gap: 15px; }
                    .item-icon { font-size: 2rem; }
                    .item-name { font-size: 1rem; margin-bottom: 8px; }
                    .nav-btn-next { width: 100%; justify-content: center; padding: 15px; margin-top: 10px; }
                    .nav-btn-prev { padding: 12px 20px; }
                    .step-navigation { flex-direction: column-reverse; gap: 15px; align-items: stretch; }
                    .summary-glass-card { padding: 20px; }
                    .total-val { font-size: 1.2rem; }
                }
            `}
        })]
    })
}, wx = "/assets/recruitment_hiring-IcL9-kL2.png", jx = "/assets/recruitment_team-C2oRQZ-U.png", Nx = "/assets/uae_insight_intro-CxWJdpMq.png", kx = "/assets/uae_insight_need-DV07SG1z.png", Sx = "/assets/uae_insight_benefits-QIqHi0XU.png", qx = "/assets/uae_insight_advantage-uO0_T-mt.png", Tx = () => {
    const { t: e } = U(), [t, i] = b.useState(0), s = [{ question: e.faqRec1Q, answer: e.faqRec1A }, { question: e.faqRec2Q, answer: e.faqRec2A }, { question: e.faqRec3Q, answer: e.faqRec3A }, { question: e.faqRec4Q, answer: e.faqRec4A }, { question: e.faqRec5Q, answer: e.faqRec5A }, { question: e.faqRec6Q, answer: e.faqRec6A }], r = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: s.map(o => ({ "@type": "Question", name: o.question, acceptedAnswer: { "@type": "Answer", text: o.answer } })) }; return n.jsxs("div", {
        className: "service-page recruitment-page", children: [n.jsx(J, { title: e.recHeroTitle, description: e.recHeroText, keywords: "recruitment agency UAE, recruitment agency Dubai, talent acquisition UAE, permanent staffing Dubai", canonical: "https://smaarelysium.com/recruitment", schema: r }), n.jsx("div", { className: "container hero-wrapper", children: n.jsxs("section", { className: "home-hero", children: [n.jsxs("div", { className: "home-hero__content", children: [n.jsx("h1", { className: "home-hero__title", dangerouslySetInnerHTML: { __html: e.recHeroTitle.replace("Solutions", "<br />Solutions") } }), n.jsx("p", { className: "home-hero__text", children: e.recHeroText }), n.jsx("div", { className: "home-hero__actions", children: n.jsx(j, { to: "/contact", className: "hero-btn-main", children: e.bookNow }) })] }), n.jsx("div", { className: "home-hero__image", children: n.jsx("img", { src: em, alt: "Recruitment Experts", className: "hero-workers-img" }) })] }) }), n.jsx("div", { className: "service-content-section", children: n.jsxs("div", { className: "container", children: [n.jsxs("div", { className: "choose-best-split", children: [n.jsxs("div", { className: "cbs-left", children: [n.jsx("h2", { children: e.recChooseTitle }), n.jsx("p", { children: e.recChooseP1 }), n.jsx("p", { children: e.recChooseP2 }), n.jsx("p", { children: e.recChooseP3 }), n.jsx("p", { children: e.recChooseP4 })] }), n.jsxs("div", { className: "cbs-right", style: { backgroundImage: `url(${wx})`, backgroundSize: "cover", backgroundPosition: "center" }, children: [n.jsxs("div", { className: "cbs-logo", children: [n.jsx("span", { className: "logo-main", children: "Smaar Elysium" }), n.jsx("span", { className: "logo-slogan", style: { display: "block" }, children: e.recLogoSlogan })] }), n.jsx("div", { className: "cbs-overlay" }), n.jsx("div", { className: "cbs-content", children: n.jsxs("div", { className: "cbs-text-block", children: [n.jsx("span", { className: "cbs-go-beyond", children: e.recGrid1 }), n.jsx("span", { className: "cbs-ordinary", children: e.recGrid2 }), n.jsx("span", { className: "cbs-find", children: e.recGrid3 }), n.jsx("span", { className: "cbs-executives", children: e.recGrid4 })] }) }), n.jsxs("div", { className: "cbs-footer", children: [n.jsx("div", { className: "cbs-footer-pill", children: "www.smaarelysium.com" }), n.jsxs("div", { className: "cbs-footer-info", children: [n.jsxs("span", { children: [n.jsx("i", { className: "fa-brands fa-whatsapp" }), " ", e.phone] }), n.jsx("span", { className: "cbs-divider", children: "|" }), n.jsx("span", { children: "sales@smaarelysium.com" })] })] })] })] }), n.jsxs("div", { className: "build-team-split", children: [n.jsxs("div", { className: "bts-left", children: [n.jsx("div", { className: "bts-workers-container", children: n.jsx("img", { src: jx, alt: "Team of Workers", className: "bts-workers-img" }) }), n.jsx("div", { className: "bts-web-pill", children: "www.smaarelysium.com" }), n.jsxs("div", { className: "bts-contact-footer", children: [n.jsxs("div", { className: "bts-contact-item", children: [n.jsx("i", { className: "fa-brands fa-whatsapp" }), " ", e.phone] }), n.jsx("div", { className: "bts-contact-divider", children: "|" }), n.jsx("div", { className: "bts-contact-item", children: "smaarelysium.@gmail.com" })] })] }), n.jsxs("div", { className: "bts-right", children: [n.jsx("h3", { children: e.recBtsTitle }), n.jsx("p", { children: e.recBtsP1 }), n.jsx("p", { children: e.recBtsP2 }), n.jsx("p", { children: e.recBtsP3 })] })] }), n.jsxs("div", { className: "why-choose-us-section", children: [n.jsx("h2", { className: "section-title", children: e.recWhyTitle }), n.jsx("p", { className: "section-intro", children: e.recWhyIntro }), n.jsxs("div", { className: "benefits-grid", children: [n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.recBenefit1Title }), n.jsx("p", { children: e.recBenefit1Desc })] }), n.jsxs("div", { className: "benefit-card bg-gray", children: [n.jsx("h3", { children: e.recBenefit2Title }), n.jsx("p", { children: e.recBenefit2Desc })] }), n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.recBenefit3Title }), n.jsx("p", { children: e.recBenefit3Desc })] })] })] })] }) }), n.jsx("section", { className: "faq-section", children: n.jsxs("div", { className: "container", children: [n.jsx("h2", { className: "faq-main-title", children: e.faqTitle }), n.jsx("p", { className: "faq-subtitle", children: e.faqSubtitle }), n.jsx("div", { className: "faq-list", children: s.map((o, a) => n.jsxs("div", { className: `faq-item ${t === a ? "active" : ""}`, children: [n.jsxs("div", { className: "faq-question-btn", onClick: () => i(t === a ? -1 : a), children: [n.jsx("span", { className: "faq-icon", children: t === a ? "−" : "+" }), n.jsx("span", { className: "faq-question-text", children: o.question })] }), n.jsx("div", { className: "faq-answer-container", style: { maxHeight: t === a ? "300px" : "0" }, children: n.jsx("div", { className: "faq-answer-content", children: n.jsx("p", { children: o.answer }) }) })] }, a)) })] }) }), n.jsxs("div", { className: "insights-section", children: [n.jsx("h2", { className: "insights-title", children: e.msInsightTitle }), n.jsxs("div", { className: "insights-grid", children: [n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: Nx, alt: "Insight 1" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.msInsight1Title }), n.jsx("p", { children: e.msInsight1Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: kx, alt: "Insight 2" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.msInsight2Title }), n.jsx("p", { children: e.msInsight2Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: Sx, alt: "Insight 3" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.msInsight3Title }), n.jsx("p", { children: e.msInsight3Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: qx, alt: "Insight 4" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.msInsight4Title }), n.jsx("p", { children: e.msInsight4Desc })] })] })] })] }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        .home-hero { background: var(--color-primary); border-radius: 40px; color: white; padding: 80px 100px; display: flex; align-items: center; justify-content: space-between; position: relative; overflow: hidden; min-height: 500px; }
        .home-hero__content { flex: 1; z-index: 2; max-width: 600px; }
        .home-hero__title { font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1; margin-bottom: 25px; font-weight: 900; color: #fff; }
        .home-hero__text { font-size: 1.1rem; color: #fff; margin-bottom: 40px; max-width: 500px; line-height: 1.6; opacity: 0.95; }
        .hero-btn-main { background: #ffffff; color: #000; border: none; padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem; display: inline-block; transition: 0.3s; text-decoration: none; }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        .home-hero__image { flex: 0.8; display: flex; justify-content: flex-end; align-items: flex-end; position: absolute; right: 40px; bottom: 0; }
        .hero-workers-img { width: 550px; max-width: 100%; height: auto; display: block; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2)); }
        
        @media (max-width: 1200px) { 
            .home-hero { padding: 60px 60px; } 
            .hero-workers-img { width: 450px; } 
        }
        @media (max-width: 992px) { 
            .home-hero { flex-direction: column; text-align: center; padding: 60px 30px 0; min-height: auto; border-radius: 20px; } 
            .home-hero__content { max-width: 100%; display: flex; flex-direction: column; align-items: center; margin-bottom:  20px; } 
            .home-hero__image { position: relative; width: 100%; display: flex; right: 0; bottom: 0; justify-content: center; left: auto; right: auto; bottom: auto; } 
            .hero-workers-img { width: 100%; max-width: 400px; display: block; margin-bottom: -12%; } 
        }
        @media (max-width: 576px) { 
            .home-hero { padding: 40px 25px 0; border-radius: 20px; } 
            .hero-workers-img { max-width: 100%; } 
        }

        /* Choose Best For You Split Design */
        .choose-best-split {
            display: flex;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 60px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
            background: #fdfdfd;
        }
        .cbs-left {
            flex: 1;
            background: #f4f5f7;
            padding: 50px;
        }
        .cbs-left h2 {
            font-size: 2.2rem;
            margin-bottom: 25px;
            font-weight: 500;
            color: #000;
        }
        .cbs-left p {
            color: #888;
            margin-bottom: 15px;
            font-size: 1.05rem;
            line-height: 1.7;
        }
        .cbs-right {
            flex: 1;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .cbs-logo {
            position: absolute;
            top: 25px;
            left: 25px;
            z-index: 3;
            color: #fff;
        }
        .cbs-logo .logo-main { font-weight: 900; font-size: 1.5rem; letter-spacing: -1px; }
        .cbs-logo .logo-sub { color: #d11a2a; font-weight: 900; font-size: 1.5rem; letter-spacing: -1px; }
        .cbs-logo .logo-slogan { font-size: 0.5rem; font-weight: 800; color: #d11a2a; letter-spacing: 0.5px; }
        .cbs-overlay {
            background: rgba(0,0,0,0.5);
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            z-index: 1;
        }
        .cbs-content {
            position: relative;
            z-index: 2;
            padding: 50px 40px;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        .cbs-text-block {
            text-align: right;
            transform: translateY(20px);
        }
        .cbs-go-beyond { font-size: 2.2rem; font-weight: 600; display: block; color: #fff; letter-spacing: 1px; }
        .cbs-ordinary { font-size: 3rem; font-weight: 900; display: block; margin-top: -10px; color: #fff; letter-spacing: 1px; }
        .cbs-find { font-size: 1.8rem; font-weight: 600; color: #3b82f6; display: block; margin-top: 5px; }
        .cbs-executives { font-size: 3rem; color: #3b82f6; font-weight: 900; display: block; margin-top: -10px; }

        @media (max-width: 768px) {
            .cbs-left { padding: 40px 25px; }
            .cbs-left h2 { font-size: 1.8rem; }
            .cbs-text-block { transform: translateY(0); padding: 20px; text-align: center; }
            .cbs-go-beyond { font-size: 1.5rem; }
            .cbs-ordinary { font-size: 2.22rem; }
            .cbs-find { font-size: 1.25rem; }
            .cbs-executives { font-size: 2.22rem; }
            .cbs-footer-info { font-size: 0.9rem; flex-direction: column; gap: 5px; }
            .cbs-divider { display: none; }
            .bts-right h3 { font-size: 1.8rem; }
        }

        @media (max-width: 480px) {
            .cbs-go-beyond { font-size: 1.25rem; }
            .cbs-ordinary { font-size: 1.8rem; }
            .cbs-find { font-size: 1.1rem; }
            .cbs-executives { font-size: 1.8rem; }
            .cbs-footer-pill { font-size: 0.8rem; letter-spacing: 1px; top: -13px; }
        }

        .cbs-footer {
            position: relative;
            z-index: 2;
            background: #ac1420; /* Darker red */
            color: #fff;
            display: flex;
            justify-content: center;
            padding: 25px;
            align-items: center;
        }
        .cbs-footer-pill {
            background: #fff;
            color: #ac1420;
            padding: 6px 30px;
            border-radius: 20px;
            font-weight: 600;
            position: absolute;
            top: -17px;
            font-size: 1rem;
            letter-spacing: 3px;
        }
        .cbs-footer-info { 
            display: flex; 
            gap: 20px; 
            font-size: 1.1rem; 
            font-weight: 400; 
            margin-top: 10px;
            letter-spacing: 1px;
        }
        .cbs-divider { margin: 0 10px; opacity: 0.5; }

        @media (max-width: 1100px) {
            .choose-best-split { flex-direction: column; }
            .cbs-right { min-height: 400px; }
        }

        .service-page { padding-bottom: 0; }
        
        /* Hero Section (from Home) */
        .hero-wrapper { padding-top: 20px; padding-bottom: 20px; }
        
        
        
        
        
        .hero-btn-main { 
            background: #ffffff; color: #000; border: none; 
            padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem;
            display: inline-block; transition: 0.3s;
        }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        
        
        .hero-workers-img { width: 550px; max-width: 100%; height: auto; display: block; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2)); }

        /* Content Section */
        .service-content-section {
            padding: 80px 0;
            background: #fff;
        }
        .choose-best-split {
            display: flex;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 60px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
            background: #fdfdfd;
        }
        /* Build Your Efficient Team Split - Simplified & Smaller */
        .build-team-split {
            display: flex;
            border-radius: 40px;
            overflow: hidden;
            margin-bottom: 60px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            background: #fff;
            position: relative;
            min-height: 450px; /* Reduced from 650px */
        }
        .bts-left {
            flex: 1;
            background: #f4f5f7;
            background-image: radial-gradient(circle, #ddd 1px, transparent 1px);
            background-size: 20px 20px;
            padding: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .bts-workers-container {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
            z-index: 1;
        }
        .bts-workers-img {
            width: 100%;
            max-width: 450px;
            height: auto;
            display: block;
            filter: drop-shadow(0 15px 25px rgba(0,0,0,0.1));
        }

        .bts-web-pill {
            background: #fff;
            color: #333;
            padding: 6px 20px;
            border-radius: 50px;
            font-weight: 700;
            display: inline-block;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            z-index: 4;
            position: absolute;
            bottom: 60px; /* Adjusted */
            left: 40px;
            letter-spacing: 1px;
            font-size: 0.9rem;
        }

        .bts-contact-footer {
            background: #8b1520;
            color: #fff;
            padding: 15px 40px;
            display: flex;
            gap: 20px;
            font-weight: 600;
            font-size: 1rem;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            z-index: 5;
        }
        .bts-contact-divider { opacity: 0.5; }

        .bts-right {
            flex: 1.2;
            background: #FE7622;
            color: #fff;
            padding: 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            z-index: 2;
        }
        .bts-right h3 {
            font-size: 2.2rem;
            margin-bottom: 20px;
            font-weight: 700;
            line-height: 1.2;
            color: #fff;
        }
        .bts-right p {
            font-size: 1.05rem;
            line-height: 1.6;
            margin-bottom: 15px;
            color: rgba(255,255,255,0.95);
        }

        /* Responsive Design */
        @media (max-width: 992px) {
            .build-team-split { flex-direction: column; border-radius: 25px; min-height: auto; }
            .bts-left { min-height: 350px; padding: 40px; }
            .bts-right { padding: 40px; }
            .bts-right h3 { font-size: 1.8rem; }
            .bts-workers-img { max-width: 380px; }
            .bts-web-pill { left: 50%; transform: translateX(-50%); bottom: 50px; }
            .bts-contact-footer { padding: 12px 20px; justify-content: center; font-size: 0.85rem; }
        }

        @media (max-width: 576px) {
            .bts-right h3 { font-size: 1.6rem; }
            .bts-workers-img { max-width: 280px; }
            .bts-left { min-height: 300px; }
        }
        .why-choose-us-section {
            margin-top: 80px;
            margin-bottom: 80px;
        }
        .why-choose-us-section .section-title {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 25px;
            color: #000;
            text-transform: uppercase;
        }
        .why-choose-us-section .section-intro {
            font-size: 1.1rem;
            color: #333;
            max-width: 100%;
            margin-bottom: 50px;
            line-height: 1.6;
        }
        .benefits-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0;
            border-radius: 0;
            overflow: hidden;
        }
        .benefit-card {
            padding: 60px 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 400px;
            text-align: center;
        }
        .benefit-card h3 {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 25px;
            line-height: 1.2;
        }
        .benefit-card p {
            font-size: 1.05rem;
            line-height: 1.6;
        }
        .benefit-card.bg-red {
            background-color: #FE7622;
            color: #fff;
        }
        .benefit-card.bg-gray {
            background-color: #e0e0e0;
            color: #333;
        }
        
        /* Responsive design for Why Choose Us */
        @media (max-width: 992px) {
            .benefits-grid {
                grid-template-columns: 1fr;
            }
            .benefit-card {
                min-height: auto;
                padding: 50px 30px;
            }
            .why-choose-us-section .section-title {
                font-size: 2.2rem;
            }
        }
        /* FAQ Section styling mirrored from Home.jsx */
        .faq-section { padding: 60px 0 100px; background: #fff; }
        .faq-main-title { font-size: 3rem; font-weight: 400; color: #000; margin-bottom: 20px; text-transform: uppercase; }
        .faq-subtitle { font-size: 1.1rem; color: #333; margin-bottom: 40px; text-transform: uppercase; }
        
        .faq-list { max-width: 100%; border-top: 1px solid #f1f1f1; }
        .faq-item { border-bottom: 1px solid #f1f1f1; transition: 0.3s; }
        .faq-question-btn { 
            display: flex; 
            align-items: center; 
            width: 100%; 
            padding: 25px 20px; 
            background: none; 
            border: none; 
            cursor: pointer; 
            text-align: left;
            transition: 0.3s;
        }
        .faq-icon {
            font-size: 1.5rem;
            margin-right: 15px;
            color: #888;
            font-weight: 300;
            width: 20px;
            display: inline-block;
        }
        .faq-question-text {
            font-size: 1.45rem;
            color: #777;
            font-weight: 400;
            transition: 0.3s;
        }
        .faq-item.active .faq-icon, .faq-item.active .faq-question-text { color: #FE7622; }
        
        .faq-answer-container {
            overflow: hidden;
            transition: max-height 0.3s ease-in-out;
            background: #fafafa;
        }
        .faq-answer-content { padding: 30px 40px; }
        .faq-answer-content p {
            color: #000; font-size: 0.95rem; line-height: 1.7; margin: 0; font-weight: 400; letter-spacing: 0.2px;
        }
        `}
        })]
    })
}, Ex = () => {
    const { t: e } = U(), [t, i] = z.useState(0), s = [{ question: e.msFaqQ1, answer: e.msFaqA1 }, { question: e.msFaqQ2, answer: e.msFaqA2 }, { question: e.msFaqQ3, answer: e.msFaqA3 }, { question: e.msFaqQ4, answer: e.msFaqA4 }, { question: e.msFaqQ5, answer: e.msFaqA5 }, { question: e.msFaqQ6, answer: e.msFaqA6 }], r = [{ title: e.msCat1Title, description: e.msCat1Desc, roles: [e.msRoleCivilEngineer, e.msRoleCivilSupervisor, e.msRoleCivilForeman, e.msRoleChargehand, e.msRoleScaffolderNormal, e.msRoleCertifiedScaffolder, e.msRoleSteelFixer, e.msRoleShutteringCarpenter, e.msRoleGypsumCarpenter, e.msRoleFinishingCarpenter, e.msRoleBlockMason, e.msRolePlasterMason, e.msRoleTileMason, e.msRoleSandBlaster, e.msRoleWallPainter, e.msRoleSprayPainter, e.msRoleWoodPolisher, e.msRoleWoodPainter, e.msRoleRigger, e.msRoleCivilHelper, e.msRoleSafetyOfficer] }, { title: e.msCat2Title, description: e.msCat2Desc, roles: [e.msRoleElectricalEngineer, e.msRoleElectricalSupervisor, e.msRoleElectricalForeman, e.msRoleElectrician, e.msRoleAssistantElectrician, e.msRoleInstrumentTechnician, e.msRoleInstrumentFitter, e.msRoleLowVoltageTechnician, e.msRoleElectricalHelper] }, { title: e.msCat3Title, description: e.msCat3Desc, roles: [e.msRoleMechanicalEngineer, e.msRoleMechanicalSupervisor, e.msRoleMechanicalForeman, e.msRoleMillwrightFitter, e.msRolePipeFitter, e.msRolePipeFabricator, e.msRoleStructuralFabricator, e.msRolePlumber, e.msRole6GWelder, e.msRoleArcWelder, e.msRoleDuctFitter, e.msRoleDuctFabricator, e.msRoleInsulator, e.msRoleMechanicalHelper] }, { title: e.msCat4Title, description: e.msCat4Desc, roles: [e.msRoleGeneralHelper, e.msRoleLoadingUnloading, e.msRoleWarehouseHelper, e.msRolePackingHelper, e.msRoleKitchenHelper, e.msRoleCleaningHelper] }]; return n.jsxs("div", {
        className: "service-page manpower-supply-page", children: [n.jsx(J, { title: e.msHeroTitle, description: e.msHeroText, keywords: "manpower supply UAE, civil manpower Dubai, electrical manpower UAE, mechanical manpower supply, helper manpower UAE", canonical: "https://smaarelysium.com/services/manpower-supply", faqSchema: s.map(o => ({ question: o.question, answer: o.answer })) }), n.jsx("div", { className: "service-hero", children: n.jsx("div", { className: "container", children: n.jsxs("div", { className: "service-hero-content text-center", children: [n.jsx("h1", { style: { margin: "0 auto 20px", textAlign: "center" }, children: e.msHeroTitle }), n.jsx("p", { style: { margin: "0 auto 30px", textAlign: "center" }, children: e.msHeroText }), n.jsx("div", { style: { display: "flex", justifyContent: "center" }, children: n.jsx(j, { to: "/contact", className: "hero-btn-main", children: e.msBtnBook }) })] }) }) }), n.jsx("div", { className: "supply-content-section align-center", children: n.jsxs("div", { className: "container", children: [n.jsx("div", { className: "supply-intro text-center", children: n.jsx("p", { style: { maxWidth: "800px", margin: "0 auto 50px", fontSize: "1.2rem", color: "#555", lineHeight: "1.8" }, children: e.msIntroText }) }), r.map((o, a) => n.jsxs("div", { className: "supply-category-block", children: [n.jsxs("div", { className: "category-header", children: [n.jsx("h2", { children: o.title }), n.jsx("p", { children: o.description })] }), n.jsx("div", { className: "roles-grid", children: o.roles.map((l, c) => n.jsxs("div", { className: "role-card", children: [n.jsx("div", { className: "role-icon-box", children: n.jsx("span", { className: "role-bullet" }) }), n.jsx("span", { className: "role-name", children: l })] }, c)) })] }, a)), n.jsxs("section", { className: "faq-section", style: { margin: "60px 0" }, children: [n.jsx("h2", { className: "faq-main-title", children: e.commonFaqTitle || "FAQ" }), n.jsx("p", { className: "faq-subtitle", children: e.commonFaqSubtitle || "MOST ASKED QUESTIONS." }), n.jsx("div", { className: "faq-list", children: s.map((o, a) => n.jsxs("div", { className: `faq-item ${t === a ? "active" : ""}`, children: [n.jsxs("div", { className: "faq-question-btn", onClick: () => i(t === a ? -1 : a), children: [n.jsx("span", { className: "faq-icon", children: t === a ? "−" : "+" }), n.jsx("span", { className: "faq-question-text", children: o.question })] }), n.jsx("div", { className: "faq-answer-container", style: { maxHeight: t === a ? "300px" : "0" }, children: n.jsx("div", { className: "faq-answer-content", children: n.jsx("p", { children: o.answer }) }) })] }, a)) })] })] }) }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        .manpower-supply-page .service-hero { 
            background: linear-gradient(135deg, #111 0%, #333 100%);
            padding: 100px 0; 
            color: #fff;
        }
        .text-center { text-align: center; }
        .manpower-supply-page .hero-btn-main {
            background: var(--color-primary);
            color: #fff;
            padding: 15px 40px;
            border-radius: 5px;
            font-weight: 700;
            font-size: 1.1rem;
            transition: 0.3s;
            text-transform: uppercase;
        }
        .manpower-supply-page .hero-btn-main:hover {
            background: #fff;
            color: var(--color-primary);
        }

        .supply-content-section {
            padding: 80px 0;
            background: #fdfdfd;
        }
        
        .supply-category-block {
            margin-bottom: 70px;
            background: #fff;
            border: 1px solid #eaeaea;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.03);
            border-left: 5px solid var(--color-primary);
        }
        
        .category-header {
            margin-bottom: 35px;
            border-bottom: 1px solid #f0f0f0;
            padding-bottom: 25px;
        }
        .category-header h2 {
            font-size: 2rem;
            color: #222;
            margin-bottom: 15px;
        }
        .category-header p {
            font-size: 1.05rem;
            color: #666;
            line-height: 1.7;
            max-width: 900px;
        }

        .roles-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
        }

        .role-card {
            display: flex;
            align-items: center;
            background: #f8f9fa;
            padding: 15px 20px;
            border-radius: 6px;
            transition: 0.3s;
            border: 1px solid #f0f0f0;
            cursor: pointer;
        }
        .role-card:hover {
            background: #fff;
            border-color: var(--color-primary);
            box-shadow: 0 4px 15px rgba(209, 26, 42, 0.1);
            transform: translateY(-2px);
        }

        .role-icon-box {
            margin-right: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .role-bullet {
            width: 10px;
            height: 10px;
            background: var(--color-primary);
            border-radius: 50%;
            display: inline-block;
        }

        .role-name {
            font-weight: 600;
            color: #444;
            font-size: 1.05rem;
        }
        .role-card:hover .role-name {
            color: var(--color-primary);
        }

        @media (max-width: 768px) {
            .supply-category-block { padding: 25px; }
            .roles-grid { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); }
            .category-header h2 { font-size: 1.6rem; }
            .manpower-supply-page .service-hero { padding: 60px 0; }
        }
        @media (max-width: 576px) {
            .manpower-supply-page .service-hero { padding: 50px 0; }
            .manpower-supply-page .service-hero h1 { font-size: 1.8rem !important; }
            .manpower-supply-page .service-hero p { font-size: 0.95rem !important; }
            .supply-category-block { padding: 20px; }
            .roles-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
            .category-header h2 { font-size: 1.4rem; }
            .supply-content-section { padding: 50px 0; }
        }
        @media (max-width: 400px) {
            .roles-grid { grid-template-columns: 1fr; }
        }
        `}
        })]
    })
}, Dx = "/assets/contractstaffing_bts-BsqGZes8.jpg", Cx = "/assets/contractstaffing_insight_1-CMy8zS0Y.jpg", Ax = "/assets/contractstaffing_insight_2-B11_gVrO.jpg", Fx = "/assets/contractstaffing_insight_3-7Ib3gFYv.jpg", _x = "/assets/contractstaffing_insight_4-BXOetime.jpg", sm = "/assets/contract_staffing_bts-BtNQAlg3.jpg", Px = () => {
    const { t: e } = U(), [t, i] = b.useState(0), s = [{ question: e.csFaqQ1, answer: e.csFaqA1 }, { question: e.csFaqQ2, answer: e.csFaqA2 }, { question: e.csFaqQ3, answer: e.csFaqA3 }, { question: e.csFaqQ4, answer: e.csFaqA4 }, { question: e.csFaqQ5, answer: e.csFaqA5 }, { question: e.csFaqQ6, answer: e.csFaqA6 }], r = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: s.map(o => ({ "@type": "Question", name: o.question, acceptedAnswer: { "@type": "Answer", text: o.answer } })) }; return n.jsxs("div", {
        className: "service-page recruitment-page", children: [n.jsx(J, { title: e.csHeroTitle, description: e.csHeroText, keywords: "contract staffing UAE, temporary staffing Dubai, flexible workforce UAE, contract employees UAE", canonical: "https://smaarelysium.com/contract-staffing", schema: r }), n.jsx("div", { className: "container hero-wrapper", children: n.jsxs("section", { className: "home-hero", children: [n.jsxs("div", { className: "home-hero__content", children: [n.jsxs("h1", { className: "home-hero__title", children: [e.csHeroTitle.split(" ").slice(0, 2).join(" "), n.jsx("br", {}), e.csHeroTitle.split(" ").slice(2).join(" ")] }), n.jsx("p", { className: "home-hero__text", children: e.csHeroText }), n.jsx("div", { className: "home-hero__actions", children: n.jsx(j, { to: "/contact", className: "hero-btn-main", children: e.commonBookNow || "Book Now" }) })] }), n.jsx("div", { className: "home-hero__image", children: n.jsx("img", { src: tm, alt: "Contract Staffing Team", className: "hero-workers-img" }) })] }) }), n.jsx("div", { className: "container", children: n.jsxs("div", { className: "service-main-content", children: [n.jsxs("div", { className: "service-intro", children: [n.jsx("h2", { children: e.csIntroTitle }), n.jsx("p", { children: e.csIntroText })] }), n.jsxs("div", { className: "choose-best-split", children: [n.jsxs("div", { className: "cbs-left", children: [n.jsx("h2", { children: e.csChooseTitle }), n.jsx("p", { children: e.csChooseP1 }), n.jsx("p", { children: e.csChooseP2 }), n.jsx("p", { children: e.csChooseP3 }), n.jsx("p", { children: e.csChooseP4 }), n.jsx("p", { children: e.csChooseP5 })] }), n.jsxs("div", { className: "cbs-right", style: { backgroundImage: `url(${Dx})`, backgroundSize: "cover", backgroundPosition: "center" }, children: [n.jsxs("div", { className: "cbs-logo", children: [n.jsx("span", { className: "logo-main", children: "Smaar Elysium" }), n.jsx("span", { className: "logo-slogan", style: { display: "block" }, children: e.csLogoSlogan })] }), n.jsx("div", { className: "cbs-overlay" }), n.jsx("div", { className: "cbs-content", children: n.jsxs("div", { className: "cbs-text-block", children: [n.jsx("span", { className: "cbs-go-beyond", children: e.csGrid1 }), n.jsx("span", { className: "cbs-ordinary", children: e.csGrid2 }), n.jsx("span", { className: "cbs-find", children: e.csGrid3 }), n.jsx("span", { className: "cbs-executives", children: e.csGrid4 })] }) }), n.jsxs("div", { className: "cbs-footer", children: [n.jsx("div", { className: "cbs-footer-pill", children: "www.smaarelysium.com" }), n.jsxs("div", { className: "cbs-footer-info", children: [n.jsxs("span", { children: [n.jsx("i", { className: "fa-brands fa-whatsapp" }), " ", e.phone] }), n.jsx("span", { className: "cbs-divider", children: "|" }), n.jsx("span", { children: "sales@smaarelysium.com" })] })] })] })] }), n.jsxs("div", { className: "build-team-split", children: [n.jsxs("div", { className: "bts-left", children: [n.jsx("div", { className: "bts-workers-container", children: n.jsx("img", { src: sm, alt: "Team of Workers", className: "bts-workers-img" }) }), n.jsx("div", { className: "bts-web-pill", children: "www.smaarelysium.com" }), n.jsxs("div", { className: "bts-contact-footer", children: [n.jsxs("div", { className: "bts-contact-item", children: [n.jsx("i", { className: "fa-brands fa-whatsapp" }), " ", e.phone] }), n.jsx("div", { className: "bts-contact-divider", children: "|" }), n.jsx("div", { className: "bts-contact-item", children: "smaarelysium.@gmail.com" })] })] }), n.jsxs("div", { className: "bts-right", children: [n.jsx("h3", { children: e.csBtsTitle }), n.jsx("p", { children: e.csBtsP1 }), n.jsx("p", { children: e.csBtsP2 }), n.jsx("p", { children: e.csBtsP3 })] })] }), n.jsxs("div", { className: "why-choose-us-section", children: [n.jsx("h2", { className: "section-title", children: e.csWhyTitle }), n.jsx("p", { className: "section-intro", children: e.csWhyIntro }), n.jsxs("div", { className: "benefits-grid", children: [n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.csBenefit1Title }), n.jsx("p", { children: e.csBenefit1Desc })] }), n.jsxs("div", { className: "benefit-card bg-gray", children: [n.jsx("h3", { children: e.csBenefit2Title }), n.jsx("p", { children: e.csBenefit2Desc })] }), n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.csBenefit3Title }), n.jsx("p", { children: e.csBenefit3Desc })] })] })] })] }) }), n.jsx("section", { className: "faq-section", children: n.jsxs("div", { className: "container", children: [n.jsx("h2", { className: "faq-main-title", children: e.commonFaqTitle || "FAQ" }), n.jsx("p", { className: "faq-subtitle", children: e.commonFaqSubtitle || "MOST ASKED QUESTIONS." }), n.jsx("div", { className: "faq-list", children: s.map((o, a) => n.jsxs("div", { className: `faq-item ${t === a ? "active" : ""}`, children: [n.jsxs("div", { className: "faq-question-btn", onClick: () => i(t === a ? -1 : a), children: [n.jsx("span", { className: "faq-icon", children: t === a ? "−" : "+" }), n.jsx("span", { className: "faq-question-text", children: o.question })] }), n.jsx("div", { className: "faq-answer-container", style: { maxHeight: t === a ? "300px" : "0" }, children: n.jsx("div", { className: "faq-answer-content", children: n.jsx("p", { children: o.answer }) }) })] }, a)) })] }) }), n.jsxs("div", { className: "insights-section", children: [n.jsx("h2", { className: "insights-title", children: e.csInsightTitle }), n.jsx("div", { className: "insights-grid", children: [1, 2, 3, 4].map(o => n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: o === 1 ? Cx : o === 2 ? Ax : o === 3 ? Fx : _x, alt: `Insight ${o}` }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e[`csInsight${o}Title`] }), n.jsx("p", { children: e[`csInsight${o}Desc`] })] })] }, o)) })] }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        .home-hero { background: var(--color-primary); border-radius: 40px; color: white; padding: 80px 100px; display: flex; align-items: center; justify-content: space-between; position: relative; overflow: hidden; min-height: 500px; }
        .home-hero__content { flex: 1; z-index: 2; max-width: 600px; }
        .home-hero__title { font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1; margin-bottom: 25px; font-weight: 900; color: #fff; }
        .home-hero__text { font-size: 1.1rem; color: #fff; margin-bottom: 40px; max-width: 500px; line-height: 1.6; opacity: 0.95; }
        .hero-btn-main { background: #ffffff; color: #000; border: none; padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem; display: inline-block; transition: 0.3s; text-decoration: none; }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        .home-hero__image { flex: 0.8; display: flex; justify-content: flex-end; align-items: flex-end; position: absolute; right: 40px; bottom: 0; }
        .hero-workers-img { width: 550px; max-width: 100%; height: auto; display: block; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2)); }
        
        @media (max-width: 1200px) { 
            .home-hero { padding: 60px 60px; } 
            .hero-workers-img { width: 450px; } 
        }
        @media (max-width: 992px) { 
            .home-hero { flex-direction: column; text-align: center; padding: 60px 30px 0; min-height: auto; border-radius: 20px; } 
            .home-hero__content { max-width: 100%; display: flex; flex-direction: column; align-items: center; margin-bottom:  20px; } 
            .home-hero__image { position: relative; width: 100%; display: flex; right: 0; bottom: 0; justify-content: center; left: auto; right: auto; bottom: auto; } 
            .hero-workers-img { width: 100%; max-width: 400px; display: block; margin-bottom: -12%; } 
        }
        @media (max-width: 576px) { 
            .home-hero { padding: 40px 25px 0; border-radius: 20px; } 
            .hero-workers-img { max-width: 100%; } 
        }

        /* Choose Best For You Split Design */
        .choose-best-split {
            display: flex;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 60px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
            background: #fdfdfd;
        }
        .cbs-left {
            flex: 1;
            background: #f4f5f7;
            padding: 50px;
        }
        .cbs-left h2 {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 30px;
            color: #333;
        }
        .cbs-left p {
            color: #888;
            margin-bottom: 15px;
            font-size: 1.05rem;
            line-height: 1.7;
        }
        .cbs-right {
            flex: 1;
            background-position: center;
            background-size: cover;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .cbs-logo {
            position: absolute;
            top: 25px;
            left: 25px;
            z-index: 3;
            color: #fff;
        }
        .cbs-logo .logo-main { font-weight: 900; font-size: 1.5rem; letter-spacing: -1px; }
        .cbs-logo .logo-sub { color: #d11a2a; font-weight: 900; font-size: 1.5rem; letter-spacing: -1px; }
        .cbs-logo .logo-slogan { font-size: 0.5rem; font-weight: 800; color: #d11a2a; letter-spacing: 0.5px; }
        .cbs-overlay {
            background: rgba(0,0,0,0.5);
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            z-index: 1;
        }
        .cbs-content {
            position: relative;
            z-index: 2;
            padding: 50px 40px;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        .cbs-text-block {
            text-align: right;
            transform: translateY(20px);
        }
        .cbs-go-beyond { font-size: 2.2rem; font-weight: 600; display: block; color: #fff; letter-spacing: 1px; }
        .cbs-ordinary { font-size: 3rem; font-weight: 900; display: block; margin-top: -10px; color: #fff; letter-spacing: 1px; }
        .cbs-find { font-size: 1.8rem; font-weight: 600; color: #3b82f6; display: block; margin-top: 5px; }
        .cbs-executives { font-size: 3rem; color: #3b82f6; font-weight: 900; display: block; margin-top: -10px; }

        @media (max-width: 768px) {
            .cbs-left { padding: 40px 25px; }
            .cbs-left h2 { font-size: 1.8rem; }
            .cbs-text-block { transform: translateY(0); padding: 20px; text-align: center; }
            .cbs-go-beyond { font-size: 1.5rem; }
            .cbs-ordinary { font-size: 2.2rem; }
            .cbs-find { font-size: 1.2rem; }
            .cbs-executives { font-size: 2.2rem; }
            .cbs-footer-info { font-size: 0.9rem; flex-direction: column; gap: 5px; }
            .cbs-divider { display: none; }
            .bts-right h3 { font-size: 1.8rem; }
        }

        @media (max-width: 480px) {
            .cbs-go-beyond { font-size: 1.2rem; }
            .cbs-ordinary { font-size: 1.7rem; }
            .cbs-find { font-size: 1.1rem; }
            .cbs-executives { font-size: 1.7rem; }
            .cbs-footer-pill { font-size: 0.8rem; letter-spacing: 1px; top: -13px; }
        }

        .cbs-footer {
            position: relative;
            z-index: 2;
            background: #ac1420;
            color: #fff;
            display: flex;
            justify-content: center;
            padding: 25px;
            align-items: center;
        }
        .cbs-footer-pill {
            background: #fff;
            color: #ac1420;
            padding: 6px 30px;
            border-radius: 20px;
            font-weight: 600;
            position: absolute;
            top: -17px;
            font-size: 1rem;
            letter-spacing: 3px;
        }
        .cbs-footer-info { 
            display: flex; 
            gap: 20px; 
            font-size: 1.1rem; 
            font-weight: 400; 
            margin-top: 10px;
            letter-spacing: 1px;
        }
        .cbs-divider { margin: 0 10px; opacity: 0.5; }

        @media (max-width: 1100px) {
            .choose-best-split { flex-direction: column; }
            .cbs-right { min-height: 400px; }
        }

        .service-page { padding-bottom: 0; }

        /* Hero Section (from Home) */
        .hero-wrapper { padding-top: 20px; padding-bottom: 20px; }
        
        
        
        
        
        .hero-btn-main { 
            background: #ffffff; color: #000; border: none; 
            padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem;
            display: inline-block; transition: 0.3s;
        }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        
        

        @media (max-width: 1024px) {
            
            
        }
        @media (max-width: 576px) {
            
            
        }

        .service-main-content { padding: 60px 0; }
        .service-intro { text-align: center; margin-bottom: 50px; }
        .service-intro h2 { font-size: 2.5rem; font-weight: 700; color: #333; }
        
        /* Build Team Split Section */
        .build-team-split {
            display: flex;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 80px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
            background: transparent;
            position: relative;
        }
        
        .bts-left {
            flex: 1;
            background-image: radial-gradient(circle, #ddd 1px, transparent 1px);
            background-size: 20px 20px;
            background-color: #f8f9fa;
            background-size: cover;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end; /* Align image to bottom */
            min-height: 450px; /* Reduced overall height */
            padding: 0;
            overflow: hidden;
        }

        .bts-workers-container {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            position: relative;
            z-index: 2;
            padding-top: 40px; /* Space above image */
            margin-bottom: 40px; /* Space for the footer footer */
        }
        
        .bts-workers-img {
            max-width: 450px; /* Optimal image size */
            height: auto;
            object-fit: contain;
            display: block;
        }

        .bts-web-pill {
            position: absolute;
            bottom: 70px; /* Push above the contact strip */
            left: 50%;
            transform: translateX(-50%);
            background: #fff;
            padding: 10px 30px;
            border-radius: 100px;
            font-weight: 600;
            color: #333;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            z-index: 3;
            font-size: 1.1rem;
        }

        .bts-contact-footer {
            width: 100%;
            background: #87101c; /* Dark red matching the original image */
            color: #fff;
            padding: 15px 30px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 4;
            font-size: 1.1rem;
            font-weight: 500;
        }

        .bts-contact-item {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .bts-contact-divider {
            margin: 0 20px;
            opacity: 0.5;
        }
        
        .bts-right {
            flex: 1;
            background: #e31837; /* The signature red */
            color: #fff;
            padding: 60px 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .bts-right h3 {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 30px;
            line-height: 1.2;
        }

        .bts-right p {
            font-size: 1.05rem;
            line-height: 1.7;
            margin-bottom: 20px;
            opacity: 0.95;
            font-weight: 400;
        }

        .bts-right p:last-child {
            margin-bottom: 0;
        }

        /* Responsive Fixes */
        @media (max-width: 992px) {
            .build-team-split {
                flex-direction: column;
            }
            .bts-right {
                padding: 40px 30px;
            }
            .bts-workers-img { max-width: 380px; }
            .bts-left { min-height: 400px; }
        }

        @media (max-width: 576px) {
            .bts-contact-footer {
                flex-direction: column;
                gap: 10px;
                padding: 15px;
                text-align: center;
            }
            .bts-contact-divider { display: none; }
            .bts-web-pill { bottom: 90px; padding: 8px 20px; font-size: 1rem; }
            .bts-workers-img { max-width: 280px; }
            .bts-left { min-height: 300px; }
        }
        .why-choose-us-section {
            margin-top: 80px;
            margin-bottom: 80px;
        }
        .why-choose-us-section .section-title {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 25px;
            color: #000;
            text-transform: uppercase;
        }
        .why-choose-us-section .section-intro {
            font-size: 1.1rem;
            color: #333;
            max-width: 100%;
            margin-bottom: 50px;
            line-height: 1.6;
        }
        .benefits-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0;
            border-radius: 0;
            overflow: hidden;
        }
        .benefit-card {
            padding: 60px 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 400px;
            text-align: center;
        }
        .benefit-card h3 {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 25px;
            line-height: 1.2;
        }
        .benefit-card p {
            font-size: 1.05rem;
            line-height: 1.6;
        }
        .benefit-card.bg-red {
            background-color: #FE7622;
            color: #fff;
        }
        .benefit-card.bg-gray {
            background-color: #e0e0e0;
            color: #333;
        }
        
        /* Responsive design for Why Choose Us */
        @media (max-width: 992px) {
            .benefits-grid {
                grid-template-columns: 1fr;
            }
            .benefit-card {
                min-height: auto;
                padding: 50px 30px;
            }
            .why-choose-us-section .section-title {
                font-size: 2.2rem;
            }
        }
        
        /* FAQ Section styling mirrored from Home.jsx */
        .faq-section { padding: 60px 0 100px; background: #fff; }
        .faq-main-title { font-size: 3rem; font-weight: 400; color: #000; margin-bottom: 20px; text-transform: uppercase; }
        .faq-subtitle { font-size: 1.1rem; color: #333; margin-bottom: 40px; text-transform: uppercase; }
        
        .faq-list { max-width: 100%; border-top: 1px solid #f1f1f1; }
        .faq-item { border-bottom: 1px solid #f1f1f1; transition: 0.3s; }
        .faq-question-btn { 
            display: flex; 
            align-items: center; 
            width: 100%; 
            padding: 25px 20px; 
            background: none; 
            border: none; 
            cursor: pointer; 
            text-align: left;
            transition: 0.3s;
        }
        .faq-icon {
            font-size: 1.5rem;
            margin-right: 15px;
            color: #888;
            font-weight: 300;
            width: 20px;
            display: inline-block;
        }
        .faq-question-text {
            font-size: 1.45rem;
            color: #777;
            font-weight: 400;
            transition: 0.3s;
        }
        .faq-item.active .faq-icon, .faq-item.active .faq-question-text { color: #FE7622; }
        
        .faq-answer-container {
            overflow: hidden;
            transition: max-height 0.3s ease-in-out;
            background: #fafafa;
        }
        .faq-answer-content { padding: 30px 40px; }
        .faq-answer-content p {
            color: #000; font-size: 0.95rem; line-height: 1.7; margin: 0; font-weight: 400; letter-spacing: 0.2px;
        }
        `}
        })]
    })
}, zx = "/assets/executive_search_bts-OrWMBkPP.jpg", Ix = "/assets/uae_exec_insight_1-YM31u76m.png", Rx = "/assets/uae_exec_insight_2-zl1pPRJp.png", Bx = "/assets/uae_exec_insight_3-BiCS_dgb.png", Ox = "/assets/uae_exec_insight_4-BihmzPdZ.png", Mx = "/assets/executive_search_choose_best-D0wV69C7.png", Hx = () => {
    const { t: e } = U(), [t, i] = b.useState(0), s = [{ question: e.esFaqQ1, answer: e.esFaqA1 }, { question: e.esFaqQ2, answer: e.esFaqA2 }, { question: e.esFaqQ3, answer: e.esFaqA3 }, { question: e.esFaqQ4, answer: e.esFaqA4 }, { question: e.esFaqQ5, answer: e.esFaqA5 }, { question: e.esFaqQ6, answer: e.esFaqA6 }]; return n.jsxs("div", {
        className: "service-page recruitment-page", children: [n.jsx(J, { title: e.esHeroTitle, description: e.esHeroText, keywords: "executive search UAE, C-suite hiring UAE, leadership recruitment, senior management recruitment, headhunting services UAE, director level hiring, Smaar Elysium executive search", canonical: "https://www.smaarelysium.com/executive-search", faqSchema: s.map(r => ({ question: r.question, answer: r.answer })) }), n.jsx("div", { className: "container hero-wrapper", children: n.jsxs("section", { className: "home-hero", children: [n.jsxs("div", { className: "home-hero__content", children: [n.jsxs("h1", { className: "home-hero__title", children: [e.esHeroTitle.split(" ").slice(0, 2).join(" "), n.jsx("br", {}), e.esHeroTitle.split(" ").slice(2).join(" ")] }), n.jsx("p", { className: "home-hero__text", children: e.esHeroText }), n.jsx("div", { className: "home-hero__actions", children: n.jsx(j, { to: "/contact", className: "hero-btn-main", children: e.commonBookNow || "Book Now" }) })] }), n.jsx("div", { className: "home-hero__image", children: n.jsx("img", { src: nm, alt: "Executive Search", className: "hero-workers-img" }) })] }) }), n.jsx("div", { className: "container", children: n.jsxs("div", { className: "service-main-content", children: [n.jsxs("div", { className: "service-intro", children: [n.jsx("h2", { children: e.esIntroTitle }), n.jsx("p", { children: e.esIntroText })] }), n.jsxs("div", { className: "choose-best-split", children: [n.jsxs("div", { className: "cbs-left", children: [n.jsx("h2", { children: e.esChooseTitle }), n.jsx("p", { children: e.esChooseP1 }), n.jsx("p", { children: e.esChooseP2 }), n.jsx("p", { children: e.esChooseP3 }), n.jsx("p", { children: e.esChooseP4 }), n.jsx("p", { children: e.esChooseP5 })] }), n.jsxs("div", { className: "cbs-right", style: { backgroundImage: `url(${Mx})` }, children: [n.jsxs("div", { className: "cbs-logo", children: [n.jsx("span", { className: "logo-main", children: "Smaar Elysium" }), n.jsx("span", { className: "logo-slogan", style: { display: "block" }, children: e.esLogoSlogan })] }), n.jsx("div", { className: "cbs-overlay" }), n.jsx("div", { className: "cbs-content", children: n.jsxs("div", { className: "cbs-text-block", children: [n.jsx("span", { className: "cbs-go-beyond", children: e.esGrid1 }), n.jsx("span", { className: "cbs-ordinary", children: e.esGrid2 }), n.jsx("span", { className: "cbs-find", children: e.esGrid3 }), n.jsx("span", { className: "cbs-executives", children: e.esGrid4 })] }) }), n.jsxs("div", { className: "cbs-footer", children: [n.jsx("div", { className: "cbs-footer-pill", children: "www.smaarelysium.com" }), n.jsxs("div", { className: "cbs-footer-info", children: [n.jsxs("span", { children: [n.jsx("i", { className: "fa-brands fa-whatsapp" }), " ", e.phone] }), n.jsx("span", { className: "cbs-divider", children: "|" }), n.jsx("span", { children: "sales@smaarelysium.com" })] })] })] })] }), n.jsxs("div", { className: "build-team-split", children: [n.jsxs("div", { className: "bts-left", children: [n.jsx("div", { className: "bts-workers-container", children: n.jsx("img", { src: zx, alt: "Executive Team", className: "bts-workers-img" }) }), n.jsx("div", { className: "bts-web-pill", children: "www.smaarelysium.com" }), n.jsxs("div", { className: "bts-contact-footer", children: [n.jsxs("div", { className: "bts-contact-item", children: [n.jsx("i", { className: "fa-brands fa-whatsapp" }), " ", e.phone] }), n.jsx("div", { className: "bts-contact-divider", children: "|" }), n.jsx("div", { className: "bts-contact-item", children: "smaarelysium.@gmail.com" })] })] }), n.jsxs("div", { className: "bts-right", children: [n.jsx("h3", { children: e.esBtsTitle }), n.jsx("p", { children: e.esBtsP1 }), n.jsx("p", { children: e.esBtsP2 }), n.jsx("p", { children: e.esBtsP3 })] })] }), n.jsxs("div", { className: "why-choose-us-section", children: [n.jsx("h2", { className: "section-title", children: e.esWhyTitle }), n.jsx("p", { className: "section-intro", children: e.esWhyIntro }), n.jsxs("div", { className: "benefits-grid", children: [n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.esBenefit1Title }), n.jsx("p", { children: e.esBenefit1Desc })] }), n.jsxs("div", { className: "benefit-card bg-gray", children: [n.jsx("h3", { children: e.esBenefit2Title }), n.jsx("p", { children: e.esBenefit2Desc })] }), n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.esBenefit3Title }), n.jsx("p", { children: e.esBenefit3Desc })] })] })] })] }) }), n.jsx("section", { className: "faq-section", children: n.jsxs("div", { className: "container", children: [n.jsx("h2", { className: "faq-main-title", children: e.commonFaqTitle || "FAQ" }), n.jsx("p", { className: "faq-subtitle", children: e.commonFaqSubtitle || "MOST ASKED QUESTIONS." }), n.jsx("div", { className: "faq-list", children: s.map((r, o) => n.jsxs("div", { className: `faq-item ${t === o ? "active" : ""}`, children: [n.jsxs("div", { className: "faq-question-btn", onClick: () => i(t === o ? -1 : o), children: [n.jsx("span", { className: "faq-icon", children: t === o ? "−" : "+" }), n.jsx("span", { className: "faq-question-text", children: r.question })] }), n.jsx("div", { className: "faq-answer-container", style: { maxHeight: t === o ? "300px" : "0" }, children: n.jsx("div", { className: "faq-answer-content", children: n.jsx("p", { children: r.answer }) }) })] }, o)) })] }) }), n.jsxs("div", { className: "insights-section", children: [n.jsx("h2", { className: "insights-title", children: e.esInsightTitle }), n.jsx("div", { className: "insights-grid", children: [1, 2, 3, 4].map(r => n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: r === 1 ? Ix : r === 2 ? Rx : r === 3 ? Bx : Ox, alt: `Insight ${r}` }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e[`esInsight${r}Title`] }), n.jsx("p", { children: e[`esInsight${r}Desc`] })] })] }, r)) })] }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        .home-hero { background: var(--color-primary); border-radius: 40px; color: white; padding: 80px 100px; display: flex; align-items: center; justify-content: space-between; position: relative; overflow: hidden; min-height: 500px; }
        .home-hero__content { flex: 1; z-index: 2; max-width: 600px; }
        .home-hero__title { font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1; margin-bottom: 25px; font-weight: 900; color: #fff; }
        .home-hero__text { font-size: 1.1rem; color: #fff; margin-bottom: 40px; max-width: 500px; line-height: 1.6; opacity: 0.95; }
        .hero-btn-main { background: #ffffff; color: #000; border: none; padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem; display: inline-block; transition: 0.3s; text-decoration: none; }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        .home-hero__image { flex: 0.8; display: flex; justify-content: flex-end; align-items: flex-end; position: absolute; right: 40px; bottom: 0; }
        .hero-workers-img { width: 550px; max-width: 100%; height: auto; display: block; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2)); }
        
        @media (max-width: 1200px) { 
            .home-hero { padding: 60px 60px; } 
            .hero-workers-img { width: 450px; } 
        }
        @media (max-width: 992px) { 
            .home-hero { flex-direction: column; text-align: center; padding: 60px 30px 0; min-height: auto; border-radius: 20px; } 
            .home-hero__content { max-width: 100%; display: flex; flex-direction: column; align-items: center; margin-bottom:  20px; } 
            .home-hero__image { position: relative; width: 100%; display: flex; right: 0; bottom: 0; justify-content: center; left: auto; right: auto; bottom: auto; } 
            .hero-workers-img { width: 100%; max-width: 400px; display: block; margin-bottom: -12%; } 
        }
        @media (max-width: 576px) { 
            .home-hero { padding: 40px 25px 0; border-radius: 20px; } 
            .hero-workers-img { max-width: 100%; } 
        }

        /* Choose Best For You Split Design */
        .choose-best-split {
            display: flex;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 60px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
            background: #fdfdfd;
        }
        .cbs-left {
            flex: 1;
            background: #f4f5f7;
            padding: 50px;
        }
        .cbs-left h2 {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 30px;
            color: #333;
        }
        .cbs-left p {
            color: #888;
            margin-bottom: 15px;
            font-size: 1.05rem;
            line-height: 1.7;
        }
        .cbs-right {
            background-position: center;
            background-size: cover;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .cbs-logo {
            position: absolute;
            top: 25px;
            left: 25px;
            z-index: 3;
            color: #fff;
        }
        .cbs-logo .logo-main { font-weight: 900; font-size: 1.5rem; letter-spacing: -1px; }
        .cbs-logo .logo-sub { color: #d11a2a; font-weight: 900; font-size: 1.5rem; letter-spacing: -1px; }
        .cbs-logo .logo-slogan { font-size: 0.5rem; font-weight: 800; color: #d11a2a; letter-spacing: 0.5px; }
        .cbs-overlay {
            background: rgba(0,0,0,0.5);
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            z-index: 1;
        }
        .cbs-content {
            position: relative;
            z-index: 2;
            padding: 50px 40px;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        .cbs-text-block {
            text-align: right;
            transform: translateY(20px);
        }
        .cbs-go-beyond { font-size: 2.2rem; font-weight: 600; display: block; color: #fff; letter-spacing: 1px; }
        .cbs-ordinary { font-size: 3rem; font-weight: 900; display: block; margin-top: -10px; color: #fff; letter-spacing: 1px; }
        .cbs-find { font-size: 1.8rem; font-weight: 600; color: #3b82f6; display: block; margin-top: 5px; }
        .cbs-executives { font-size: 3rem; color: #3b82f6; font-weight: 900; display: block; margin-top: -10px; }

        @media (max-width: 768px) {
            .cbs-left { padding: 40px 25px; }
            .cbs-left h2 { font-size: 1.8rem; }
            .cbs-text-block { transform: translateY(0); padding: 20px; text-align: center; }
            .cbs-go-beyond { font-size: 1.5rem; }
            .cbs-ordinary { font-size: 2.2rem; }
            .cbs-find { font-size: 1.2rem; }
            .cbs-executives { font-size: 2.2rem; }
            .cbs-footer-info { font-size: 0.9rem; flex-direction: column; gap: 5px; }
            .cbs-divider { display: none; }
            .bts-right h3 { font-size: 1.8rem; }
        }

        @media (max-width: 480px) {
            .cbs-go-beyond { font-size: 1.2rem; }
            .cbs-ordinary { font-size: 1.7rem; }
            .cbs-find { font-size: 1.1rem; }
            .cbs-executives { font-size: 1.7rem; }
            .cbs-footer-pill { font-size: 0.8rem; letter-spacing: 1px; top: -13px; }
        }

        .cbs-footer {
            position: relative;
            z-index: 2;
            background: #ac1420;
            color: #fff;
            display: flex;
            justify-content: center;
            padding: 25px;
            align-items: center;
        }
        .cbs-footer-pill {
            background: #fff;
            color: #ac1420;
            padding: 6px 30px;
            border-radius: 20px;
            font-weight: 600;
            position: absolute;
            top: -17px;
            font-size: 1rem;
            letter-spacing: 3px;
        }
        .cbs-footer-info { 
            display: flex; 
            gap: 20px; 
            font-size: 1.1rem; 
            font-weight: 400; 
            margin-top: 10px;
            letter-spacing: 1px;
        }
        .cbs-divider { margin: 0 10px; opacity: 0.5; }

        @media (max-width: 1100px) {
            .choose-best-split { flex-direction: column; }
            .cbs-right { min-height: 400px; }
        }

        .service-page { padding-bottom: 0; }

        /* Hero Section (from Home) */
        .hero-wrapper { padding-top: 20px; padding-bottom: 20px; }
        
        
        
        
        
        .hero-btn-main { 
            background: #ffffff; color: #000; border: none; 
            padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem;
            display: inline-block; transition: 0.3s;
        }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        
        

        @media (max-width: 1024px) {
            
            
        }
        @media (max-width: 576px) {
            
            
        }

        .service-main-content { padding: 60px 0; }
        .service-intro { text-align: center; margin-bottom: 50px; }
        .service-intro h2 { font-size: 2.5rem; font-weight: 700; color: #333; }
        
        /* Build Team Split Section */
        .build-team-split {
            display: flex;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 80px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
            background: transparent;
            position: relative;
        }
        
        .bts-left {
            flex: 1;
            background-image: radial-gradient(circle, #ddd 1px, transparent 1px);
            background-size: 20px 20px;
            background-color: #f8f9fa;
            background-size: cover;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            min-height: 450px;
            padding: 0;
            overflow: hidden;
        }

        .bts-workers-container {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            position: relative;
            z-index: 2;
            padding-top: 40px;
            margin-bottom: 40px;
        }
        
        .bts-workers-img {
            max-width: 450px;
            height: auto;
            object-fit: contain;
            display: block;
        }

        .bts-web-pill {
            position: absolute;
            bottom: 70px;
            left: 50%;
            transform: translateX(-50%);
            background: #fff;
            padding: 10px 30px;
            border-radius: 100px;
            font-weight: 600;
            color: #333;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            z-index: 3;
            font-size: 1.1rem;
        }

        .bts-contact-footer {
            width: 100%;
            background: #87101c;
            color: #fff;
            padding: 15px 30px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 4;
            font-size: 1.1rem;
            font-weight: 500;
        }

        .bts-contact-item {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .bts-contact-divider {
            margin: 0 20px;
            opacity: 0.5;
        }
        
        .bts-right {
            flex: 1;
            background: #e31837;
            color: #fff;
            padding: 60px 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .bts-right h3 {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 30px;
            line-height: 1.2;
        }

        .bts-right p {
            font-size: 1.05rem;
            line-height: 1.7;
            margin-bottom: 20px;
            opacity: 0.95;
            font-weight: 400;
        }

        .bts-right p:last-child {
            margin-bottom: 0;
        }

        @media (max-width: 992px) {
            .build-team-split { flex-direction: column; }
            .bts-right { padding: 40px 30px; }
            .bts-workers-img { max-width: 380px; }
            .bts-left { min-height: 400px; }
        }

        @media (max-width: 576px) {
            .bts-contact-footer { flex-direction: column; gap: 10px; padding: 15px; text-align: center; }
            .bts-contact-divider { display: none; }
            .bts-web-pill { bottom: 90px; padding: 8px 20px; font-size: 1rem; }
            .bts-workers-img { max-width: 280px; }
            .bts-left { min-height: 300px; }
        }

        .why-choose-us-section {
            margin-top: 80px;
            margin-bottom: 80px;
        }
        .why-choose-us-section .section-title {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 25px;
            color: #000;
            text-transform: uppercase;
        }
        .why-choose-us-section .section-intro {
            font-size: 1.1rem;
            color: #333;
            max-width: 100%;
            margin-bottom: 50px;
            line-height: 1.6;
        }
        .benefits-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0;
            border-radius: 0;
            overflow: hidden;
        }
        .benefit-card {
            padding: 60px 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 400px;
            text-align: center;
        }
        .benefit-card h3 {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 25px;
            line-height: 1.2;
        }
        .benefit-card p { font-size: 1.05rem; line-height: 1.6; }
        .benefit-card.bg-red { background-color: #FE7622; color: #fff; }
        .benefit-card.bg-gray { background-color: #e0e0e0; color: #333; }
        
        @media (max-width: 992px) {
            .benefits-grid { grid-template-columns: 1fr; }
            .benefit-card { min-height: auto; padding: 50px 30px; }
            .why-choose-us-section .section-title { font-size: 2.2rem; }
        }
        
        /* FAQ Section */
        .faq-section { padding: 60px 0 100px; background: #fff; }
        .faq-main-title { font-size: 3rem; font-weight: 400; color: #000; margin-bottom: 20px; text-transform: uppercase; }
        .faq-subtitle { font-size: 1.1rem; color: #333; margin-bottom: 40px; text-transform: uppercase; }
        .faq-list { max-width: 100%; border-top: 1px solid #f1f1f1; }
        .faq-item { border-bottom: 1px solid #f1f1f1; transition: 0.3s; }
        .faq-question-btn { 
            display: flex; align-items: center; width: 100%; padding: 25px 20px;
            background: none; border: none; cursor: pointer; text-align: left; transition: 0.3s;
        }
        .faq-icon { font-size: 1.5rem; margin-right: 15px; color: #888; font-weight: 300; width: 20px; display: inline-block; }
        .faq-question-text { font-size: 1.45rem; color: #777; font-weight: 400; transition: 0.3s; }
        .faq-item.active .faq-icon, .faq-item.active .faq-question-text { color: #FE7622; }
        .faq-answer-container { overflow: hidden; transition: max-height 0.3s ease-in-out; background: #fafafa; }
        .faq-answer-content { padding: 30px 40px; }
        .faq-answer-content p { color: #000; font-size: 0.95rem; line-height: 1.7; margin: 0; font-weight: 400; letter-spacing: 0.2px; }
        `}
        })]
    })
}, Lx = "/assets/hr-hero1-C1YTW04y.png", rm = "/assets/hr_outsourcing_bts-BQYntwWB.jpg", Qx = "/assets/uae_hr_insight_1-iNR8V08k.png", Ux = "/assets/uae_hr_insight_2-bP2aHqN8.png", Wx = "/assets/uae_hr_insight_3-D6Vheh2F.png", Gx = "/assets/uae_hr_insight_4-DNdOY1yw.png", $x = "/assets/hr_outsourcing_bts-BQYntwWB.jpg", Yx = () => {
    const { t: e } = U(), [t, i] = b.useState(0), s = [{ question: e.hrFaqQ1, answer: e.hrFaqA1 }, { question: e.hrFaqQ2, answer: e.hrFaqA2 }, { question: e.hrFaqQ3, answer: e.hrFaqA3 }, { question: e.hrFaqQ4, answer: e.hrFaqA4 }, { question: e.hrFaqQ5, answer: e.hrFaqA5 }, { question: e.hrFaqQ6, answer: e.hrFaqA6 }]; return n.jsxs("div", {
        className: "service-page recruitment-page", children: [n.jsx(J, { title: e.hrHeroTitle, description: e.hrHeroText, keywords: "HR outsourcing UAE, payroll outsourcing UAE, HR management services, labour law compliance UAE, HR BPO UAE, employee management outsourcing, Smaar Elysium HR", canonical: "https://www.smaarelysium.com/hr-outsourcing", faqSchema: s.map(r => ({ question: r.question, answer: r.answer })) }), n.jsx("div", { className: "container hero-wrapper", children: n.jsxs("section", { className: "home-hero", children: [n.jsxs("div", { className: "home-hero__content", children: [n.jsxs("h1", { className: "home-hero__title", children: [e.hrHeroTitle.split(" ").slice(0, 2).join(" "), n.jsx("br", {}), e.hrHeroTitle.split(" ").slice(2).join(" ")] }), n.jsx("p", { className: "home-hero__text", children: e.hrHeroText }), n.jsx("div", { className: "home-hero__actions", children: n.jsx(j, { to: "/contact", className: "hero-btn-main", children: e.commonBookNow || "Book Now" }) })] }), n.jsx("div", { className: "home-hero__image", children: n.jsx("img", { src: Lx, alt: "HR Outsourcing Team", className: "hero-workers-img" }) })] }) }), n.jsx("div", { className: "container", children: n.jsxs("div", { className: "service-main-content", children: [n.jsxs("div", { className: "service-intro", children: [n.jsx("h2", { children: e.hrIntroTitle }), n.jsx("p", { children: e.hrIntroText })] }), n.jsxs("div", { className: "choose-best-split", children: [n.jsxs("div", { className: "cbs-left", children: [n.jsx("h2", { children: e.hrChooseTitle }), n.jsx("p", { children: e.hrChooseP1 }), n.jsx("p", { children: e.hrChooseP2 }), n.jsx("p", { children: e.hrChooseP3 }), n.jsx("p", { children: e.hrChooseP4 }), n.jsx("p", { children: e.hrChooseP5 })] }), n.jsxs("div", { className: "cbs-right", style: { backgroundImage: `url(${$x})` }, children: [n.jsxs("div", { className: "cbs-logo", children: [n.jsx("span", { className: "logo-main", children: "Smaar Elysium" }), n.jsx("span", { className: "logo-slogan", style: { display: "block" }, children: e.hrLogoSlogan })] }), n.jsx("div", { className: "cbs-overlay" }), n.jsx("div", { className: "cbs-content", children: n.jsxs("div", { className: "cbs-text-block", children: [n.jsx("span", { className: "cbs-go-beyond", children: e.hrGrid1 }), n.jsx("span", { className: "cbs-ordinary", children: e.hrGrid2 }), n.jsx("span", { className: "cbs-find", children: e.hrGrid3 }), n.jsx("span", { className: "cbs-executives", children: e.hrGrid4 })] }) }), n.jsxs("div", { className: "cbs-footer", children: [n.jsx("div", { className: "cbs-footer-pill", children: "www.smaarelysium.com" }), n.jsxs("div", { className: "cbs-footer-info", children: [n.jsxs("span", { children: [n.jsx("i", { className: "fa-brands fa-whatsapp" }), " ", e.phone] }), n.jsx("span", { className: "cbs-divider", children: "|" }), n.jsx("span", { children: "sales@smaarelysium.com" })] })] })] })] }), n.jsxs("div", { className: "build-team-split", children: [n.jsxs("div", { className: "bts-left", children: [n.jsx("div", { className: "bts-workers-container", children: n.jsx("img", { src: rm, alt: "HR Outsourcing Team", className: "bts-workers-img" }) }), n.jsx("div", { className: "bts-web-pill", children: "www.smaarelysium.com" }), n.jsxs("div", { className: "bts-contact-footer", children: [n.jsxs("div", { className: "bts-contact-item", children: [n.jsx("i", { className: "fa-brands fa-whatsapp" }), " ", e.phone] }), n.jsx("div", { className: "bts-contact-divider", children: "|" }), n.jsx("div", { className: "bts-contact-item", children: "smaarelysium.@gmail.com" })] })] }), n.jsxs("div", { className: "bts-right", children: [n.jsx("h3", { children: e.hrBtsTitle }), n.jsx("p", { children: e.hrBtsP1 }), n.jsx("p", { children: e.hrBtsP2 }), n.jsx("p", { children: e.hrBtsP3 })] })] }), n.jsxs("div", { className: "why-choose-us-section", children: [n.jsx("h2", { className: "section-title", children: e.hrWhyTitle }), n.jsx("p", { className: "section-intro", children: e.hrWhyIntro }), n.jsxs("div", { className: "benefits-grid", children: [n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.hrBenefit1Title }), n.jsx("p", { children: e.hrBenefit1Desc })] }), n.jsxs("div", { className: "benefit-card bg-gray", children: [n.jsx("h3", { children: e.hrBenefit2Title }), n.jsx("p", { children: e.hrBenefit2Desc })] }), n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.hrBenefit3Title }), n.jsx("p", { children: e.hrBenefit3Desc })] })] })] })] }) }), n.jsx("section", { className: "faq-section", children: n.jsxs("div", { className: "container", children: [n.jsx("h2", { className: "faq-main-title", children: e.commonFaqTitle || "FAQ" }), n.jsx("p", { className: "faq-subtitle", children: e.commonFaqSubtitle || "MOST ASKED QUESTIONS." }), n.jsx("div", { className: "faq-list", children: s.map((r, o) => n.jsxs("div", { className: `faq-item ${t === o ? "active" : ""}`, children: [n.jsxs("div", { className: "faq-question-btn", onClick: () => i(t === o ? -1 : o), children: [n.jsx("span", { className: "faq-icon", children: t === o ? "−" : "+" }), n.jsx("span", { className: "faq-question-text", children: r.question })] }), n.jsx("div", { className: "faq-answer-container", style: { maxHeight: t === o ? "300px" : "0" }, children: n.jsx("div", { className: "faq-answer-content", children: n.jsx("p", { children: r.answer }) }) })] }, o)) })] }) }), n.jsxs("div", { className: "insights-section", children: [n.jsx("h2", { className: "insights-title", children: e.hrInsightTitle }), n.jsx("div", { className: "insights-grid", children: [1, 2, 3, 4].map(r => n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: r === 1 ? Qx : r === 2 ? Ux : r === 3 ? Wx : Gx, alt: `Insight ${r}` }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e[`hrInsight${r}Title`] }), n.jsx("p", { children: e[`hrInsight${r}Desc`] })] })] }, r)) })] }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        .home-hero { background: var(--color-primary); border-radius: 40px; color: white; padding: 80px 100px; display: flex; align-items: center; justify-content: space-between; position: relative; overflow: hidden; min-height: 500px; }
        .home-hero__content { flex: 1; z-index: 2; max-width: 600px; }
        .home-hero__title { font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1; margin-bottom: 25px; font-weight: 900; color: #fff; }
        .home-hero__text { font-size: 1.1rem; color: #fff; margin-bottom: 40px; max-width: 500px; line-height: 1.6; opacity: 0.95; }
        .hero-btn-main { background: #ffffff; color: #000; border: none; padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem; display: inline-block; transition: 0.3s; text-decoration: none; }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        .home-hero__image { flex: 0.8; display: flex; justify-content: flex-end; align-items: flex-end; position: absolute; right: 40px; bottom: 0; }
        .hero-workers-img { width: 550px; max-width: 100%; height: auto; display: block; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2)); }
        
        @media (max-width: 1200px) { 
            .home-hero { padding: 60px 60px; } 
            .hero-workers-img { width: 450px; } 
        }
        @media (max-width: 992px) { 
            .home-hero { flex-direction: column; text-align: center; padding: 60px 30px 0; min-height: auto; border-radius: 20px; } 
            .home-hero__content { max-width: 100%; display: flex; flex-direction: column; align-items: center; margin-bottom:  20px; } 
            .home-hero__image { position: relative; width: 100%; display: flex; right: 0; bottom: 0; justify-content: center; left: auto; right: auto; bottom: auto; } 
            .hero-workers-img { width: 100%; max-width: 400px; display: block; margin-bottom: -12%; } 
        }
        @media (max-width: 576px) { 
            .home-hero { padding: 40px 25px 0; border-radius: 20px; } 
            .hero-workers-img { max-width: 100%; } 
        }

        /* Choose Best For You Split Design */
        .choose-best-split {
            display: flex;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 60px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
            background: #fdfdfd;
        }
        .cbs-left {
            flex: 1;
            background: #f4f5f7;
            padding: 50px;
        }
        .cbs-left h2 {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 30px;
            color: #333;
        }
        .cbs-left p {
            color: #888;
            margin-bottom: 15px;
            font-size: 1.05rem;
            line-height: 1.7;
        }
        .cbs-right {
            background-position: center;
            background-size: cover;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .cbs-logo {
            position: absolute;
            top: 25px;
            left: 25px;
            z-index: 3;
            color: #fff;
        }
        .cbs-logo .logo-main { font-weight: 900; font-size: 1.5rem; letter-spacing: -1px; }
        .cbs-logo .logo-sub { color: #d11a2a; font-weight: 900; font-size: 1.5rem; letter-spacing: -1px; }
        .cbs-logo .logo-slogan { font-size: 0.5rem; font-weight: 800; color: #d11a2a; letter-spacing: 0.5px; }
        .cbs-overlay {
            background: rgba(0,0,0,0.5);
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            z-index: 1;
        }
        .cbs-content {
            position: relative;
            z-index: 2;
            padding: 50px 40px;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        .cbs-text-block {
            text-align: right;
            transform: translateY(20px);
        }
        .cbs-go-beyond { font-size: 2.2rem; font-weight: 600; display: block; color: #fff; letter-spacing: 1px; }
        .cbs-ordinary { font-size: 3rem; font-weight: 900; display: block; margin-top: -10px; color: #fff; letter-spacing: 1px; }
        .cbs-find { font-size: 1.8rem; font-weight: 600; color: #3b82f6; display: block; margin-top: 5px; }
        .cbs-executives { font-size: 3rem; color: #3b82f6; font-weight: 900; display: block; margin-top: -10px; }

        @media (max-width: 768px) {
            .cbs-left { padding: 40px 25px; }
            .cbs-left h2 { font-size: 1.8rem; }
            .cbs-text-block { transform: translateY(0); padding: 20px; text-align: center; }
            .cbs-go-beyond { font-size: 1.5rem; }
            .cbs-ordinary { font-size: 2.2rem; }
            .cbs-find { font-size: 1.2rem; }
            .cbs-executives { font-size: 2.2rem; }
            .cbs-footer-info { font-size: 0.9rem; flex-direction: column; gap: 5px; }
            .cbs-divider { display: none; }
            .bts-right h3 { font-size: 1.8rem; }
        }

        @media (max-width: 480px) {
            .cbs-go-beyond { font-size: 1.2rem; }
            .cbs-ordinary { font-size: 1.7rem; }
            .cbs-find { font-size: 1.1rem; }
            .cbs-executives { font-size: 1.7rem; }
            .cbs-footer-pill { font-size: 0.8rem; letter-spacing: 1px; top: -13px; }
        }

        .cbs-footer {
            position: relative;
            z-index: 2;
            background: #ac1420;
            color: #fff;
            display: flex;
            justify-content: center;
            padding: 25px;
            align-items: center;
        }
        .cbs-footer-pill {
            background: #fff;
            color: #ac1420;
            padding: 6px 30px;
            border-radius: 20px;
            font-weight: 600;
            position: absolute;
            top: -17px;
            font-size: 1rem;
            letter-spacing: 3px;
        }
        .cbs-footer-info { 
            display: flex; 
            gap: 20px; 
            font-size: 1.1rem; 
            font-weight: 400; 
            margin-top: 10px;
            letter-spacing: 1px;
        }
        .cbs-divider { margin: 0 10px; opacity: 0.5; }

        @media (max-width: 1100px) {
            .choose-best-split { flex-direction: column; }
            .cbs-right { min-height: 400px; }
        }

        .service-page { padding-bottom: 0; }

        /* Hero Section (from Home) */
        .hero-wrapper { padding-top: 20px; padding-bottom: 20px; }
        
        
        
        
        
        .hero-btn-main { 
            background: #ffffff; color: #000; border: none; 
            padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem;
            display: inline-block; transition: 0.3s;
        }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        
        

        @media (max-width: 1024px) {
            
            
        }
        @media (max-width: 576px) {
            
            
        }

        .service-main-content { padding: 60px 0; }
        .service-intro { text-align: center; margin-bottom: 50px; }
        .service-intro h2 { font-size: 2.5rem; font-weight: 700; color: #333; }
        
        /* Build Team Split Section */
        .build-team-split {
            display: flex;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 80px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
            background: transparent;
            position: relative;
        }
        .bts-left {
            flex: 1;
            background-image: radial-gradient(circle, #ddd 1px, transparent 1px);
            background-size: 20px 20px;
            background-color: #f8f9fa;
            background-size: cover;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            min-height: 450px;
            padding: 0;
            overflow: hidden;
        }
        .bts-workers-container {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            position: relative;
            z-index: 2;
            padding-top: 40px;
            margin-bottom: 40px;
        }
        .bts-workers-img { max-width: 450px; height: auto; object-fit: contain; display: block; }
        .bts-web-pill {
            position: absolute;
            bottom: 70px;
            left: 50%;
            transform: translateX(-50%);
            background: #fff;
            padding: 10px 30px;
            border-radius: 100px;
            font-weight: 600;
            color: #333;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            z-index: 3;
            font-size: 1.1rem;
        }
        .bts-contact-footer {
            width: 100%;
            background: #87101c;
            color: #fff;
            padding: 15px 30px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 4;
            font-size: 1.1rem;
            font-weight: 500;
        }
        .bts-contact-item { display: flex; align-items: center; gap: 10px; }
        .bts-contact-divider { margin: 0 20px; opacity: 0.5; }
        .bts-right {
            flex: 1;
            background: #e31837;
            color: #fff;
            padding: 60px 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .bts-right h3 { font-size: 2.2rem; font-weight: 700; margin-bottom: 30px; line-height: 1.2; }
        .bts-right p { font-size: 1.05rem; line-height: 1.7; margin-bottom: 20px; opacity: 0.95; font-weight: 400; }
        .bts-right p:last-child { margin-bottom: 0; }

        @media (max-width: 992px) {
            .build-team-split { flex-direction: column; }
            .bts-right { padding: 40px 30px; }
            .bts-workers-img { max-width: 380px; }
            .bts-left { min-height: 400px; }
        }
        @media (max-width: 576px) {
            .bts-contact-footer { flex-direction: column; gap: 10px; padding: 15px; text-align: center; }
            .bts-contact-divider { display: none; }
            .bts-web-pill { bottom: 90px; padding: 8px 20px; font-size: 1rem; }
            .bts-workers-img { max-width: 280px; }
            .bts-left { min-height: 300px; }
        }

        .why-choose-us-section { margin-top: 80px; margin-bottom: 80px; }
        .why-choose-us-section .section-title {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 25px;
            color: #000;
            text-transform: uppercase;
        }
        .why-choose-us-section .section-intro {
            font-size: 1.1rem;
            color: #333;
            max-width: 100%;
            margin-bottom: 50px;
            line-height: 1.6;
        }
        .benefits-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0;
            overflow: hidden;
        }
        .benefit-card {
            padding: 60px 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 400px;
            text-align: center;
        }
        .benefit-card h3 { font-size: 1.8rem; font-weight: 700; margin-bottom: 25px; line-height: 1.2; }
        .benefit-card p { font-size: 1.05rem; line-height: 1.6; }
        .benefit-card.bg-red { background-color: #FE7622; color: #fff; }
        .benefit-card.bg-gray { background-color: #e0e0e0; color: #333; }
        
        @media (max-width: 992px) {
            .benefits-grid { grid-template-columns: 1fr; }
            .benefit-card { min-height: auto; padding: 50px 30px; }
            .why-choose-us-section .section-title { font-size: 2.2rem; }
        }
        
        /* FAQ Section */
        .faq-section { padding: 60px 0 100px; background: #fff; }
        .faq-main-title { font-size: 3rem; font-weight: 400; color: #000; margin-bottom: 20px; text-transform: uppercase; }
        .faq-subtitle { font-size: 1.1rem; color: #333; margin-bottom: 40px; text-transform: uppercase; }
        .faq-list { max-width: 100%; border-top: 1px solid #f1f1f1; }
        .faq-item { border-bottom: 1px solid #f1f1f1; transition: 0.3s; }
        .faq-question-btn { 
            display: flex; align-items: center; width: 100%; padding: 25px 20px;
            background: none; border: none; cursor: pointer; text-align: left; transition: 0.3s;
        }
        .faq-icon { font-size: 1.5rem; margin-right: 15px; color: #888; font-weight: 300; width: 20px; display: inline-block; }
        .faq-question-text { font-size: 1.45rem; color: #777; font-weight: 400; transition: 0.3s; }
        .faq-item.active .faq-icon, .faq-item.active .faq-question-text { color: #FE7622; }
        .faq-answer-container { overflow: hidden; transition: max-height 0.3s ease-in-out; background: #fafafa; }
        .faq-answer-content { padding: 30px 40px; }
        .faq-answer-content p { color: #000; font-size: 0.95rem; line-height: 1.7; margin: 0; font-weight: 400; letter-spacing: 0.2px; }
        `}
        })]
    })
}, Vx = "/assets/security_insight_intro-MgKq6BML.png", Kx = "/assets/security_insight_need-BjBAiqX4.png", Xx = "/assets/security_insight_benefits-DOaoG5jr.png", Jx = "/assets/security_insight_advantage-DIOiazsd.png", Zx = "/assets/security_choose_best-hHJlqN_P.png", e0 = "/assets/security_bts_left-DRr8hl33.png", t0 = () => {
    const [e, t] = b.useState(0), { t: i } = U(); return i.ssFaqQ1, i.ssFaqA1, i.ssFaqQ2, i.ssFaqA2, i.ssFaqQ3, i.ssFaqA3, i.ssFaqQ4, i.ssFaqA4, i.ssFaqQ5, i.ssFaqA5, i.ssFaqQ6, i.ssFaqA6, n.jsxs("div", {
        className: "service-page recruitment-page", children: [n.jsx(J, { title: i.ssSEOTitle, description: i.ssSEODesc, keywords: "security staffing UAE, licensed security guards UAE, security personnel agency, corporate security solutions UAE, event security UAE, CCTV operators UAE, Smaar Elysium security", canonical: "https://www.smaarelysium.com/security-solutions" }), n.jsx("div", { className: "container hero-wrapper", children: n.jsxs("section", { className: "home-hero", children: [n.jsxs("div", { className: "home-hero__content", children: [n.jsx("h1", { className: "home-hero__title", children: i.ssHeroTitle }), n.jsx("p", { className: "home-hero__text", children: i.ssHeroText }), n.jsx("div", { className: "home-hero__actions", children: n.jsx(j, { to: "/contact", className: "hero-btn-main", children: i.bookNow }) })] }), n.jsx("div", { className: "home-hero__image", children: n.jsx("img", { src: im, alt: "Security Solutions Team", className: "hero-workers-img" }) })] }) }), n.jsx("div", { className: "container", children: n.jsxs("div", { className: "service-main-content", children: [n.jsxs("div", { className: "service-intro", children: [n.jsx("h2", { children: i.ssChooseTitle }), n.jsx("p", { children: i.ssChooseP1 })] }), n.jsxs("div", { className: "choose-best-split", children: [n.jsxs("div", { className: "cbs-left", children: [n.jsx("h2", { children: i.ssChooseTitle }), n.jsx("p", { children: i.ssCbsP1 }), n.jsx("p", { children: i.ssCbsP2 }), n.jsx("p", { children: i.ssCbsP3 }), n.jsx("p", { children: i.ssCbsP4 }), n.jsx("p", { children: i.ssCbsP5 })] }), n.jsxs("div", { className: "cbs-right", style: { backgroundImage: `url(${Zx})` }, children: [n.jsxs("div", { className: "cbs-logo", children: [n.jsx("span", { className: "logo-main", children: "Smaar Elysium" }), n.jsx("span", { className: "logo-slogan", style: { display: "block" }, children: i.ssLogoSlogan })] }), n.jsx("div", { className: "cbs-overlay" }), n.jsx("div", { className: "cbs-content", children: n.jsxs("div", { className: "cbs-text-block", children: [n.jsx("span", { className: "cbs-go-beyond", children: i.ssGrid1 }), n.jsx("span", { className: "cbs-ordinary", children: i.ssGrid2 }), n.jsx("span", { className: "cbs-find", children: i.ssGrid3 }), n.jsx("span", { className: "cbs-executives", children: i.ssGrid4 })] }) }), n.jsxs("div", { className: "cbs-footer", children: [n.jsx("div", { className: "cbs-footer-pill", children: "www.smaarelysium.com" }), n.jsxs("div", { className: "cbs-footer-info", children: [n.jsxs("span", { children: [n.jsx("i", { className: "fa-brands fa-whatsapp" }), " ", i.phone] }), n.jsx("span", { className: "cbs-divider", children: "|" }), n.jsx("span", { children: i.email })] })] })] })] }), n.jsxs("div", { className: "build-team-split", children: [n.jsxs("div", { className: "bts-left", style: { backgroundImage: `url(${e0})`, backgroundSize: "cover", backgroundPosition: "center" }, children: [n.jsx("div", { className: "bts-web-pill", children: "www.smaarelysium.com" }), n.jsxs("div", { className: "bts-contact-footer", children: [n.jsxs("div", { className: "bts-contact-item", children: [n.jsx("i", { className: "fa-brands fa-whatsapp" }), " ", i.phone] }), n.jsx("div", { className: "bts-contact-divider", children: "|" }), n.jsx("div", { className: "bts-contact-item", children: i.email })] })] }), n.jsxs("div", { className: "bts-right", children: [n.jsx("h3", { children: i.ssBtsTitle }), n.jsx("p", { children: i.ssBtsP1 }), n.jsx("p", { children: i.ssBtsP2 }), n.jsx("p", { children: i.ssBtsP3 })] })] }), n.jsxs("div", { className: "why-choose-us-section", children: [n.jsx("h2", { className: "section-title", children: i.whyChooseUs }), n.jsx("p", { className: "section-intro", children: i.ssWhyIntro }), n.jsxs("div", { className: "benefits-grid", children: [n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: i.ssBen1Title }), n.jsx("p", { children: i.ssBen1Desc })] }), n.jsxs("div", { className: "benefit-card bg-gray", children: [n.jsx("h3", { children: i.ssBen2Title }), n.jsx("p", { children: i.ssBen2Desc })] }), n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: i.ssBen3Title }), n.jsx("p", { children: i.ssBen3Desc })] })] })] })] }) }), n.jsxs("div", { className: "insights-section", children: [n.jsx("h2", { className: "insights-title", children: i.ssInsightTitle }), n.jsxs("div", { className: "insights-grid", children: [n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: Vx, alt: "Security Staffing Introduction" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: i.ssInsight1Title }), n.jsx("p", { children: i.ssInsight1Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: Kx, alt: "Security Solutions Need" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: i.ssInsight2Title }), n.jsx("p", { children: i.ssInsight2Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: Xx, alt: "Security Staffing Benefits" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: i.ssInsight3Title }), n.jsx("p", { children: i.ssInsight3Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: Jx, alt: "Security Solutions Advantage" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: i.ssInsight4Title }), n.jsx("p", { children: i.ssInsight4Desc })] })] })] })] }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        .home-hero { background: var(--color-primary); border-radius: 40px; color: white; padding: 80px 100px; display: flex; align-items: center; justify-content: space-between; position: relative; overflow: hidden; min-height: 500px; }
        .home-hero__content { flex: 1; z-index: 2; max-width: 600px; }
        .home-hero__title { font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1; margin-bottom: 25px; font-weight: 900; color: #fff; }
        .home-hero__text { font-size: 1.1rem; color: #fff; margin-bottom: 40px; max-width: 500px; line-height: 1.6; opacity: 0.95; }
        .hero-btn-main { background: #ffffff; color: #000; border: none; padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem; display: inline-block; transition: 0.3s; text-decoration: none; }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        .home-hero__image { flex: 0.8; display: flex; justify-content: flex-end; align-items: flex-end; position: absolute; right: 40px; bottom: 0; }
        .hero-workers-img { width: 550px; max-width: 100%; height: auto; display: block; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2)); }
        
        @media (max-width: 1200px) { 
            .home-hero { padding: 60px 60px; } 
            .hero-workers-img { width: 450px; } 
        }
        @media (max-width: 992px) { 
            .home-hero { flex-direction: column; text-align: center; padding: 60px 30px 0; min-height: auto; border-radius: 20px; } 
            .home-hero__content { max-width: 100%; display: flex; flex-direction: column; align-items: center; margin-bottom:  20px; } 
            .home-hero__image { position: relative; width: 100%; display: flex; right: 0; bottom: 0; justify-content: center; left: auto; right: auto; bottom: auto; } 
            .hero-workers-img { width: 100%; max-width: 400px; display: block; margin-bottom: -12%; } 
        }
        @media (max-width: 576px) { 
            .home-hero { padding: 40px 25px 0; border-radius: 20px; } 
            .hero-workers-img { max-width: 100%; } 
        }

        .choose-best-split {
            display: flex;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 60px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
            background: #fdfdfd;
        }
        .cbs-left { flex: 1; background: #f4f5f7; padding: 50px; }
        .cbs-left h2 { font-size: 2.2rem; font-weight: 700; margin-bottom: 30px; color: #333; }
        .cbs-left p { color: #888; margin-bottom: 15px; font-size: 1.05rem; line-height: 1.7; }
        .cbs-right {
            flex: 1;
            background-size: cover;
            background-position: center top;
            min-height: 500px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .cbs-logo { position: absolute; top: 25px; left: 25px; z-index: 3; color: #fff; }
        .cbs-logo .logo-main { font-weight: 900; font-size: 1.5rem; letter-spacing: -1px; }
        .cbs-logo .logo-sub { color: #d11a2a; font-weight: 900; font-size: 1.5rem; letter-spacing: -1px; }
        .cbs-logo .logo-slogan { font-size: 0.5rem; font-weight: 800; color: #d11a2a; letter-spacing: 0.5px; }
        .cbs-overlay { background: rgba(0,0,0,0.5); position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 1; }
        .cbs-content { position: relative; z-index: 2; padding: 50px 40px; flex: 1; display: flex; align-items: center; justify-content: flex-end; }
        .cbs-text-block { text-align: right; transform: translateY(20px); }
        .cbs-go-beyond { font-size: 2.2rem; font-weight: 600; display: block; color: #fff; letter-spacing: 1px; }
        .cbs-ordinary { font-size: 3rem; font-weight: 900; display: block; margin-top: -10px; color: #fff; letter-spacing: 1px; }
        .cbs-find { font-size: 1.8rem; font-weight: 600; color: #3b82f6; display: block; margin-top: 5px; }
        .cbs-executives { font-size: 3rem; color: #3b82f6; font-weight: 900; display: block; margin-top: -10px; }

        @media (max-width: 768px) {
            .cbs-left { padding: 40px 25px; }
            .cbs-left h2 { font-size: 1.8rem; }
            .cbs-text-block { transform: translateY(0); padding: 20px; text-align: center; }
            .cbs-go-beyond { font-size: 1.5rem; }
            .cbs-ordinary { font-size: 2.2rem; }
            .cbs-find { font-size: 1.2rem; }
            .cbs-executives { font-size: 2.2rem; }
            .cbs-footer-info { font-size: 0.9rem; flex-direction: column; gap: 5px; }
            .cbs-divider { display: none; }
            .bts-right h3 { font-size: 1.8rem; }
        }

        @media (max-width: 480px) {
            .cbs-go-beyond { font-size: 1.2rem; }
            .cbs-ordinary { font-size: 1.7rem; }
            .cbs-find { font-size: 1.1rem; }
            .cbs-executives { font-size: 1.7rem; }
            .cbs-footer-pill { font-size: 0.8rem; letter-spacing: 1px; top: -13px; }
        }
        .cbs-footer { position: relative; z-index: 2; background: #ac1420; color: #fff; display: flex; justify-content: center; padding: 25px; align-items: center; }
        .cbs-footer-pill { background: #fff; color: #ac1420; padding: 6px 30px; border-radius: 20px; font-weight: 600; position: absolute; top: -17px; font-size: 1rem; letter-spacing: 3px; }
        .cbs-footer-info { display: flex; gap: 20px; font-size: 1.1rem; font-weight: 400; margin-top: 10px; letter-spacing: 1px; }
        .cbs-divider { margin: 0 10px; opacity: 0.5; }
        @media (max-width: 1100px) { .choose-best-split { flex-direction: column; } .cbs-right { min-height: 400px; } }

        .service-page { padding-bottom: 0; }
        .hero-wrapper { padding-top: 20px; padding-bottom: 20px; }
        
        
        
        
        .hero-btn-main { background: #ffffff; color: #000; border: none; padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem; display: inline-block; transition: 0.3s; }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        
        
        @media (max-width: 1024px) {   }
        @media (max-width: 576px) {   }

        .service-main-content { padding: 60px 0; }
        .service-intro { text-align: center; margin-bottom: 50px; }
        .service-intro h2 { font-size: 2.5rem; font-weight: 700; color: #333; }

        .build-team-split { display: flex; border-radius: 12px; overflow: hidden; margin-bottom: 80px; box-shadow: 0 5px 20px rgba(0,0,0,0.08); background: transparent; position: relative; }
        .bts-left { flex: 1; background-color: #111; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; min-height: 450px; padding: 0; overflow: hidden; }
        .bts-workers-container { width: 100%; height: 100%; display: flex; align-items: flex-end; justify-content: center; position: relative; z-index: 2; padding-top: 40px; margin-bottom: 40px; }
        .bts-workers-img { max-width: 450px; height: auto; object-fit: contain; display: block; }
        .bts-web-pill { position: absolute; bottom: 70px; left: 50%; transform: translateX(-50%); background: #fff; padding: 10px 30px; border-radius: 100px; font-weight: 600; color: #333; box-shadow: 0 5px 15px rgba(0,0,0,0.1); z-index: 3; font-size: 1.1rem; }
        .bts-contact-footer { width: 100%; background: #87101c; color: #fff; padding: 15px 30px; display: flex; justify-content: flex-start; align-items: center; position: absolute; bottom: 0; left: 0; z-index: 4; font-size: 1.1rem; font-weight: 500; }
        .bts-contact-item { display: flex; align-items: center; gap: 10px; }
        .bts-contact-divider { margin: 0 20px; opacity: 0.5; }
        .bts-right { flex: 1; background: #e31837; color: #fff; padding: 60px 50px; display: flex; flex-direction: column; justify-content: center; }
        .bts-right h3 { font-size: 2.2rem; font-weight: 700; margin-bottom: 30px; line-height: 1.2; }
        .bts-right p { font-size: 1.05rem; line-height: 1.7; margin-bottom: 20px; opacity: 0.95; font-weight: 400; }
        .bts-right p:last-child { margin-bottom: 0; }
        @media (max-width: 992px) { .build-team-split { flex-direction: column; } .bts-right { padding: 40px 30px; } .bts-workers-img { max-width: 380px; } .bts-left { min-height: 400px; } }
        @media (max-width: 576px) { .bts-contact-footer { flex-direction: column; gap: 10px; padding: 15px; text-align: center; } .bts-contact-divider { display: none; } .bts-web-pill { bottom: 90px; padding: 8px 20px; font-size: 1rem; } .bts-workers-img { max-width: 280px; } .bts-left { min-height: 300px; } }

        .why-choose-us-section { margin-top: 80px; margin-bottom: 80px; }
        .why-choose-us-section .section-title { font-size: 3rem; font-weight: 800; margin-bottom: 25px; color: #000; text-transform: uppercase; }
        .why-choose-us-section .section-intro { font-size: 1.1rem; color: #333; max-width: 100%; margin-bottom: 50px; line-height: 1.6; }
        .benefits-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; overflow: hidden; }
        .benefit-card { padding: 60px 40px; display: flex; flex-direction: column; justify-content: center; min-height: 400px; text-align: center; }
        .benefit-card h3 { font-size: 1.8rem; font-weight: 700; margin-bottom: 25px; line-height: 1.2; }
        .benefit-card p { font-size: 1.05rem; line-height: 1.6; }
        .benefit-card.bg-red { background-color: #FE7622; color: #fff; }
        .benefit-card.bg-gray { background-color: #e0e0e0; color: #333; }
        @media (max-width: 992px) { .benefits-grid { grid-template-columns: 1fr; } .benefit-card { min-height: auto; padding: 50px 30px; } .why-choose-us-section .section-title { font-size: 2.2rem; } }

        .faq-section { padding: 60px 0 100px; background: #fff; }
        .faq-main-title { font-size: 3rem; font-weight: 400; color: #000; margin-bottom: 20px; text-transform: uppercase; }
        .faq-subtitle { font-size: 1.1rem; color: #333; margin-bottom: 40px; text-transform: uppercase; }
        .faq-list { max-width: 100%; border-top: 1px solid #f1f1f1; }
        .faq-item { border-bottom: 1px solid #f1f1f1; transition: 0.3s; }
        .faq-question-btn { display: flex; align-items: center; width: 100%; padding: 25px 20px; background: none; border: none; cursor: pointer; text-align: left; transition: 0.3s; }
        .faq-icon { font-size: 1.5rem; margin-right: 15px; color: #888; font-weight: 300; width: 20px; display: inline-block; }
        .faq-question-text { font-size: 1.45rem; color: #777; font-weight: 400; transition: 0.3s; }
        .faq-item.active .faq-icon, .faq-item.active .faq-question-text { color: #FE7622; }
        .faq-answer-container { overflow: hidden; transition: max-height 0.3s ease-in-out; background: #fafafa; }
        .faq-answer-content { padding: 30px 40px; }
        .faq-answer-content p { color: #000; font-size: 0.95rem; line-height: 1.7; margin: 0; font-weight: 400; letter-spacing: 0.2px; }
        `}
        })]
    })
}, n0 = "/assets/contacthero-BB1f5bR_.png", i0 = "/assets/contact_dubai_city-onPP3MWA.png", s0 = "/assets/uae_contact_quote_office--6tWDvpo.png", r0 = () => {
    const { t: e } = U(), [t, i] = b.useState({ name: "", email: "", phone: "", message: "" }); return n.jsxs("div", {
        className: "contact-page", children: [n.jsx(J, { title: e.contactSEOTitle, description: e.contactSEODesc, keywords: "contact Smaar Elysium, manpower agency contact UAE, staffing company Dubai, hire manpower UAE contact, workforce solutions contact, Smaar Elysium phone", canonical: "https://www.smaarelysium.com/contact", faqSchema: [{ question: e.cuFAQ1Q, answer: e.cuFAQ1A }, { question: e.cuFAQ2Q, answer: e.cuFAQ2A }, { question: e.cuFAQ3Q, answer: e.cuFAQ3A }, { question: e.cuFAQ4Q, answer: e.cuFAQ4A }] }), n.jsx("div", { className: "container hero-wrapper", children: n.jsxs("section", { className: "home-hero", children: [n.jsxs("div", { className: "home-hero__content", children: [n.jsx("h1", { className: "home-hero__title", dangerouslySetInnerHTML: { __html: e.cuHeroTitle + "<br />" + e.cuHeroSubtitle } }), n.jsx("p", { className: "home-hero__text", children: e.cuHeroText }), n.jsx("div", { className: "home-hero__actions", children: n.jsx("a", { href: "tel:8885072259", className: "hero-btn-main", children: e.cuCallNow }) })] }), n.jsx("div", { className: "home-hero__image-wrapper", children: n.jsx("img", { src: n0, alt: "Contact Manpower UAE", className: "home-hero__image" }) })] }) }), n.jsx("section", { className: "location-detail-section", children: n.jsx("div", { className: "container", children: n.jsxs("div", { className: "location-split-card", children: [n.jsxs("div", { className: "location-image-side", children: [n.jsx("img", { src: i0, alt: "Dubai UAE Skyline", className: "location-city-img" }), n.jsx("div", { className: "location-country-label", children: e.uae })] }), n.jsxs("div", { className: "location-details-side", children: [n.jsxs("p", { className: "loc-line", children: [e.cuMobile, " ", n.jsx("strong", { children: e.phone })] }), n.jsxs("p", { className: "loc-line", children: [e.cuEmail, " ", n.jsx("strong", { children: "smaarelysium.@gmail.com" })] }), n.jsx("a", { href: "https://" + e.cuWebsite, target: "_blank", rel: "noreferrer", className: "loc-website", children: e.cuWebsite }), n.jsx("p", { className: "loc-address", children: e.cuAddress }), n.jsx("a", { href: "#contact-form", className: "loc-book-btn", onClick: s => { var r; s.preventDefault(), (r = document.getElementById("contact-form")) == null || r.scrollIntoView({ behavior: "smooth" }) }, children: e.cuBookBtn })] })] }) }) }), n.jsx("div", { className: "container map-wrapper", children: n.jsx("div", { className: "fullwidth-map-card", children: n.jsx("iframe", { title: "Dubai UAE Location", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.847844238!2d54.89781604758778!3d25.075707324317073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1710123456789!5m2!1sen!2sae", width: "100%", height: "480", style: { border: 0, display: "block" }, allowFullScreen: "", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) }) }), n.jsx("section", { id: "contact-form", className: "quote-section", children: n.jsx("div", { className: "container", children: n.jsxs("div", { className: "quote-wrapper", children: [n.jsx("div", { className: "quote-image-side", children: n.jsx("img", { src: s0, alt: "Professional Emirati business meeting in Dubai" }) }), n.jsxs("div", { className: "quote-form-side", children: [n.jsx("span", { className: "quote-label", children: e.cuQuoteLabel }), n.jsx("h2", { className: "quote-title", children: e.cuQuoteTitle }), n.jsx("p", { className: "quote-desc", children: e.cuQuoteDesc }), n.jsxs("form", { className: "quote-form", onSubmit: s => s.preventDefault(), children: [n.jsxs("div", { className: "form-row", children: [n.jsx("input", { type: "text", placeholder: e.enterName, required: !0 }), n.jsx("input", { type: "email", placeholder: e.enterEmail, required: !0 })] }), n.jsx("div", { className: "form-group", children: n.jsx("input", { type: "tel", placeholder: e.phoneNum, required: !0 }) }), n.jsx("div", { className: "form-group", children: n.jsx("textarea", { placeholder: e.comments, rows: "4" }) }), n.jsx("button", { type: "submit", className: "quote-submit-btn", children: e.bookNow })] })] })] }) }) }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        /* Hero */
        .hero-wrapper { padding-top: 20px; padding-bottom: 10px; }
        .home-hero { 
            background: var(--color-primary); 
            border-radius: 40px; 
            color: white; 
            padding: 80px 100px; 
            display: flex; 
            align-items: center; 
            justify-content: space-between;
            overflow: hidden;
            min-height: 500px;
        }
        .home-hero__content { flex: 1; z-index: 2; max-width: 600px; }
        .home-hero__title { font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1; margin-bottom: 25px; font-weight: 900; color: #fff; }
        .home-hero__text { font-size: 1.1rem; color: #fff; margin-bottom: 40px; max-width: 500px; line-height: 1.6; opacity: 0.95; }
        .hero-btn-main { background: #fff; color: #000; padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem; display: inline-block; transition: 0.3s; text-decoration: none; }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        .home-hero__image-wrapper { flex: 0 0 auto; }
        .home-hero__image { max-width: 450px; height: auto; display: block; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3)); }
        @media (max-width: 1024px) { .home-hero { flex-direction: column; text-align: center; padding: 60px 30px 0; } .home-hero__image { max-width: 380px; margin-top: 30px; margin-bottom: -15%; } }
        @media (max-width: 576px) { .home-hero { padding: 40px 25px 0; border-radius: 20px; } .home-hero__image { max-width: 100%; margin-bottom: -12%; } }

        /* Full-Width Map */
        .map-wrapper { padding-top: 30px; padding-bottom: 10px; }
        .fullwidth-map-card {
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 6px 30px rgba(0,0,0,0.1);
            line-height: 0;
        }
        .fullwidth-map-card iframe { border-radius: 24px; }
        @media (max-width: 768px) { .fullwidth-map-card iframe { height: 320px; } }

        /* Location Detail Section */
        .location-detail-section { padding: 30px 0 80px; background: #fff; }
        .location-split-card {
            display: flex;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 6px 30px rgba(0,0,0,0.08);
            background: #f5f6f8;
        }
        .location-image-side {
            flex: 0 0 45%;
            position: relative;
            min-height: 320px;
            overflow: hidden;
        }
        .location-city-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .location-country-label {
            position: absolute;
            bottom: 25px;
            left: 30px;
            font-size: 2.5rem;
            font-weight: 900;
            color: #fff;
            text-shadow: 0 2px 10px rgba(0,0,0,0.5);
            letter-spacing: 2px;
        }
        .location-details-side {
            flex: 1;
            padding: 50px 55px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 8px;
        }
        .loc-line { font-size: 1rem; color: #555; margin: 0 0 6px; line-height: 1.5; }
        .loc-line strong { color: #222; }
        .loc-website { display: inline-block; color: #FE7622; font-weight: 700; font-size: 1rem; text-decoration: none; margin: 10px 0 6px; }
        .loc-website:hover { text-decoration: underline; }
        .loc-address { font-size: 0.95rem; color: #777; line-height: 1.7; margin: 0 0 28px; }
        .loc-book-btn {
            display: inline-block;
            background: #1b2a4a;
            color: #fff;
            padding: 14px 36px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 1rem;
            text-decoration: none;
            transition: 0.3s;
            width: fit-content;
        }
        .loc-book-btn:hover { background: #FE7622; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.15); }

        @media (max-width: 900px) {
            .location-split-card { flex-direction: column; }
            .location-image-side { min-height: 250px; flex: none; }
            .location-details-side { padding: 35px 30px; }
        }
        @media (max-width: 576px) {
            .location-details-side { padding: 25px 20px; }
            .location-country-label { font-size: 1.8rem; }
        }

        /* ── Request a Quote Section (Matching Home Page) ── */
        .quote-section { padding: 40px 0 100px; background: #fff; }
        .quote-wrapper {
            display: flex;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(0,0,0,0.1);
            min-height: 600px;
        }
        .quote-image-side {
            flex: 1;
            position: relative;
        }
        .quote-image-side img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            inset: 0;
        }
        .quote-form-side {
            flex: 1;
            background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-primary) 100%);
            padding: 60px 50px;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .quote-label { font-size: 1rem; opacity: 0.9; margin-bottom: 5px; display: block; }
        .quote-title { 
            font-size: 2.8rem; 
            font-weight: 600; 
            margin-bottom: 20px; 
            color: #ffffff;
            transition: all 0.3s ease;
            cursor: pointer;
        }
        .quote-title:hover {
            color: #FE7622;
            text-shadow: 0 0 15px rgba(254, 118, 34, 0.4);
            transform: translateX(10px);
        }
        .quote-desc { font-size: 0.95rem; line-height: 1.6; opacity: 0.9; margin-bottom: 40px; max-width: 90%; }
        
        .quote-form input, .quote-form textarea {
            width: 100%;
            background: transparent;
            border: 1px solid rgba(255,255,255,0.2);
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-size: 0.95rem;
            outline: none;
            transition: all 0.3s ease;
        }
        .quote-form input::placeholder, .quote-form textarea::placeholder { color: rgba(255,255,255,0.5); }
        
        .quote-form input:hover, .quote-form textarea:hover {
            border-color: var(--color-primary);
            box-shadow: 0 0 10px rgba(254, 118, 34, 0.3);
            background: rgba(255,255,255,0.05);
        }
        
        .quote-form input:focus, .quote-form textarea:focus { 
            border-color: var(--color-primary); 
            background: rgba(255,255,255,0.1); 
            box-shadow: 0 0 15px rgba(254, 118, 34, 0.5);
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .form-group { margin-bottom: 20px; }
        .quote-form textarea { resize: none; }
        
        .recaptcha-placeholder { margin-bottom: 30px; }
        .recaptcha-box { 
            background: #fff; border-radius: 4px; padding: 10px 15px; 
            display: inline-flex; align-items: center; gap: 15px;
            color: #333; font-size: 0.9rem; width: 260px; justify-content: space-between;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .recaptcha-box input[type="checkbox"] { width: 24px; height: 24px; cursor: pointer; border: 2px solid #ccc; flex-shrink: 0; }
        .recaptcha-box label { cursor: pointer; flex: 1; margin-top: 2px; }
        .recaptcha-logo { display:flex; flex-direction: column; align-items: center; font-size: 0.5rem; color: #999; }
        
        .quote-submit-btn {
            background: #fff; color: #333; border: none; padding: 15px 40px;
            border-radius: 100px; font-weight: 600; font-size: 1.1rem; cursor: pointer; transition: 0.3s;
        }
        .quote-submit-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }

        @media (max-width: 900px) {
            .quote-wrapper { flex-direction: column; }
            .quote-image-side { min-height: 280px; flex: none; position: static; }
            .quote-image-side img { position: static; }
            .quote-form-side { padding: 40px 30px; }
            .form-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 576px) {
            .quote-form-side { padding: 30px 20px; }
            .quote-title { font-size: 2.2rem; }
        }

      `}
        })]
    })
}, o0 = "/assets/uae_about_insight_1-EmIUmnFe.png", a0 = "/assets/uae_about_insight_2-CjXWPUYz.png", l0 = "/assets/uae_about_insight_3-Cbt9gdEa.png", c0 = "/assets/uae_about_insight_4-CEnAvYbr.png", d0 = "/assets/abouthero-BYw5nXxX.png", u0 = "/assets/about1-c6mokT_I.png", m0 = (e, t = 2e3) => { const [i, s] = b.useState(0), r = b.useRef(null), [o, a] = b.useState(!1); return b.useEffect(() => { const l = new IntersectionObserver(([c]) => { if (c.isIntersecting && !o) { let d = null; const m = h => { d || (d = h); const g = Math.min((h - d) / t, 1), x = 1 - Math.pow(1 - g, 4); s(Math.floor(x * e)), g < 1 ? window.requestAnimationFrame(m) : a(!0) }; window.requestAnimationFrame(m) } }, { threshold: .1 }); return r.current && l.observe(r.current), () => l.disconnect() }, [e, t, o]), { count: i, countRef: r } }, Vi = ({ end: e, suffix: t = "", duration: i = 2e3 }) => { const { count: s, countRef: r } = m0(e, i); return n.jsxs("span", { ref: r, className: "stats-num", children: [s.toLocaleString(), t] }) }, p0 = () => {
    const { t: e } = U(); return n.jsxs("div", {
        className: "about-page", children: [n.jsx(J, { title: e.aboutSEOTitle, description: e.aboutSEODesc, keywords: "about Smaar Elysium, manpower agency UAE, staffing company UAE, workforce solutions UAE, HR consultancy UAE, labour supply company, best manpower agency Dubai", canonical: "https://www.smaarelysium.com/about" }), n.jsx("div", { className: "container hero-wrapper", children: n.jsxs("section", { className: "home-hero", children: [n.jsxs("div", { className: "home-hero__content", children: [n.jsxs("h1", { className: "home-hero__title", children: [e.aboutTitle, n.jsx("br", {}), e.whoWeAre] }), n.jsx("p", { className: "home-hero__text", children: e.aboutDesc }), n.jsx("div", { className: "home-hero__actions", children: n.jsx(j, { to: "/contact", className: "hero-btn-main", children: e.getInTouch }) })] }), n.jsx("div", { className: "home-hero__image-wrapper", children: n.jsx("img", { src: d0, alt: "Smaar Elysium Team UAE", className: "home-hero__image", style: { borderRadius: "24px" } }) })] }) }), n.jsx("section", { className: "journey-page-section", children: n.jsx("div", { className: "container", children: n.jsxs("div", { className: "journey-split-card", children: [n.jsx("div", { className: "journey-image-container", children: n.jsx("img", { src: u0, alt: "Smaar Elysium Journey UAE", className: "journey-full-img" }) }), n.jsxs("div", { className: "journey-text-container", children: [n.jsx("h2", { className: "journey-page-heading", children: e.ourJourney }), n.jsx("p", { className: "journey-page-paragraph", children: e.journeyP1 }), n.jsx("p", { className: "journey-page-paragraph", children: e.journeyP2 }), n.jsx("p", { className: "journey-page-paragraph", children: e.journeyP3 })] })] }) }) }), n.jsx("section", { className: "stats-banner-section", children: n.jsx("div", { className: "container", children: n.jsxs("div", { className: "stats-banner-grid", children: [n.jsxs("div", { className: "stats-banner-item", children: [n.jsx(Vi, { end: 5, suffix: "+" }), n.jsx("span", { className: "stats-label", children: e.yearsExp })] }), n.jsxs("div", { className: "stats-banner-item", children: [n.jsx(Vi, { end: 1e3, suffix: "+" }), n.jsx("span", { className: "stats-label", children: e.profPlaced })] }), n.jsxs("div", { className: "stats-banner-item", children: [n.jsx(Vi, { end: 100, suffix: "+" }), n.jsx("span", { className: "stats-label", children: e.activeClients })] }), n.jsxs("div", { className: "stats-banner-item", children: [n.jsx(Vi, { end: 15, suffix: "+" }), n.jsx("span", { className: "stats-label", children: e.indServed })] })] }) }) }), n.jsx("section", { className: "mv-section", children: n.jsx("div", { className: "container", children: n.jsxs("div", { className: "mv-wrapper", children: [n.jsx("div", { className: "mv-box mv-box-left", style: { backgroundImage: `url(${rm})` }, children: n.jsxs("div", { className: "mv-content", children: [n.jsx("h2", { className: "mv-title", children: e.ourMission }), n.jsx("p", { className: "mv-text", children: e.missionDesc })] }) }), n.jsx("div", { className: "mv-box mv-box-right", style: { backgroundImage: `url(${sm})` }, children: n.jsxs("div", { className: "mv-content", children: [n.jsx("h2", { className: "mv-title", children: e.ourVision }), n.jsx("p", { className: "mv-text", children: e.visionDesc })] }) })] }) }) }), n.jsx("section", { className: "values-section", children: n.jsxs("div", { className: "container", children: [n.jsxs("div", { className: "section-header text-center", children: [n.jsx("span", { className: "section-label", children: e.whyChooseUs }), n.jsx("h2", { className: "section-title", children: e.coreValues }), n.jsx("p", { className: "section-subtitle", children: e.valuesSubtitle })] }), n.jsxs("div", { className: "values-grid", children: [n.jsxs("div", { className: "value-card", children: [n.jsx("div", { className: "value-icon", children: n.jsx(Wg, {}) }), n.jsx("h3", { children: e.commitment }), n.jsx("p", { children: e.commitmentDesc })] }), n.jsxs("div", { className: "value-card", children: [n.jsx("div", { className: "value-icon", children: n.jsx(Ng, {}) }), n.jsx("h3", { children: e.agility }), n.jsx("p", { children: e.agilityDesc })] }), n.jsxs("div", { className: "value-card", children: [n.jsx("div", { className: "value-icon", children: n.jsx(Ju, {}) }), n.jsx("h3", { children: e.partnership }), n.jsx("p", { children: e.partnershipDesc })] }), n.jsxs("div", { className: "value-card", children: [n.jsx("div", { className: "value-icon", children: n.jsx(Fg, {}) }), n.jsx("h3", { children: e.transparency }), n.jsx("p", { children: e.transparencyDesc })] }), n.jsxs("div", { className: "value-card", children: [n.jsx("div", { className: "value-icon", children: n.jsx(Lg, {}) }), n.jsx("h3", { children: e.compliance }), n.jsx("p", { children: e.complianceDesc })] }), n.jsxs("div", { className: "value-card", children: [n.jsx("div", { className: "value-icon", children: n.jsx(Pg, {}) }), n.jsx("h3", { children: e.peopleFirst }), n.jsx("p", { children: e.peopleFirstDesc })] })] })] }) }), n.jsx("section", { className: "what-we-do-section", children: n.jsxs("div", { className: "container", children: [n.jsxs("div", { className: "wwd-header", children: [n.jsx("span", { className: "section-label", children: e.services }), n.jsx("h2", { className: "wwd-title", children: e.wwdSubtitle }), n.jsx("p", { className: "wwd-desc", children: e.wwdDesc })] }), n.jsxs("div", { className: "wwd-grid", children: [n.jsxs("div", { className: "wwd-card", children: [n.jsx("div", { className: "wwd-number", children: "01" }), n.jsx("h3", { children: e.manpowerSupply }), n.jsx("p", { children: e.manpowerSupplyDesc })] }), n.jsxs("div", { className: "wwd-card", children: [n.jsx("div", { className: "wwd-number", children: "02" }), n.jsx("h3", { children: e.recruitmentTalent }), n.jsx("p", { children: e.recruitmentTalentDesc })] }), n.jsxs("div", { className: "wwd-card", children: [n.jsx("div", { className: "wwd-number", children: "03" }), n.jsx("h3", { children: e.contractStaffing }), n.jsx("p", { children: e.contractStaffingDesc })] }), n.jsxs("div", { className: "wwd-card", children: [n.jsx("div", { className: "wwd-number", children: "04" }), n.jsx("h3", { children: e.exSearch }), n.jsx("p", { children: e.exSearchDesc })] }), n.jsxs("div", { className: "wwd-card", children: [n.jsx("div", { className: "wwd-number", children: "05" }), n.jsx("h3", { children: e.hrOut }), n.jsx("p", { children: e.hrOutDesc })] }), n.jsxs("div", { className: "wwd-card", children: [n.jsx("div", { className: "wwd-number", children: "06" }), n.jsx("h3", { children: e.secStaffing }), n.jsx("p", { children: e.secStaffingDesc })] })] })] }) }), n.jsxs("div", { className: "insights-section", children: [n.jsx("h2", { className: "insights-title", children: e.insightsTitle }), n.jsxs("div", { className: "insights-grid", children: [n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: o0, alt: "UAEn Workforce Landscape" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.insight1Title }), n.jsx("p", { children: e.insight1Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: a0, alt: "Why Partner With a Staffing Agency" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.insight2Title }), n.jsx("p", { children: e.insight2Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: l0, alt: "UAEn Labour Law Compliance" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.insight3Title }), n.jsx("p", { children: e.insight3Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: c0, alt: "Building High Performance Teams" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.insight4Title }), n.jsx("p", { children: e.insight4Desc })] })] })] })] }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        /* Hero */
        .hero-wrapper { padding-top: 20px; padding-bottom: 20px; }
        .home-hero { 
            background: var(--color-primary); 
            border-radius: 40px; 
            color: white; 
            padding: 80px 100px; 
            display: flex; 
            align-items: center; 
            justify-content: space-between;
            overflow: hidden;
            min-height: 500px;
        }
        .home-hero__content { flex: 1; z-index: 2; max-width: 600px; }
        .home-hero__title { font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1; margin-bottom: 25px; font-weight: 900; color: #fff; }
        .home-hero__text { font-size: 1.1rem; color: #fff; margin-bottom: 40px; max-width: 500px; line-height: 1.6; opacity: 0.95; }
        .hero-btn-main { background: #fff; color: #000; padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem; display: inline-block; transition: 0.3s; text-decoration: none; }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        .home-hero__image-wrapper { flex: 0 0 auto; }
        .home-hero__image { max-width: 450px; height: auto; display: block; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2)); }
        
        @media (max-width: 1024px) { 
            .home-hero { flex-direction: column; text-align: center; padding: 60px 50px 0; } 
            .home-hero__image { max-width: 350px; margin-top: 40px; margin-bottom: -12%; } 
        }
        @media (max-width: 576px) { 
            .home-hero { padding: 40px 25px 0; border-radius: 20px; } 
            .home-hero__image { max-width: 100%; margin-bottom: -12%; } 
        }

        /* General Shared */
        .section-label { color: #FE7622; font-size: 0.9rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 10px; }
        .section-title { font-size: 2.5rem; font-weight: 800; color: #111; margin-bottom: 20px; line-height: 1.2; }
        .section-subtitle { font-size: 1.1rem; color: #777; max-width: 650px; margin: 0 auto 50px; line-height: 1.6; }
        .text-center { text-align: center; }

        /* ── Our Journey Section ── */
        .journey-page-section { padding: 40px 0 80px; background: #fff; }
        .journey-split-card {
            display: flex;
            border-radius: 24px;
            overflow: hidden;
            background: #f5f5f5;
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        .journey-image-container {
            flex: 0 0 48%;
            position: relative;
            min-height: 420px;
        }
        .journey-full-img {
            width: 100%; height: 100%; object-fit: cover;
            position: absolute; inset: 0; display: block;
        }
        .journey-text-container {
            flex: 1; padding: 70px 60px;
            display: flex; flex-direction: column; justify-content: center;
        }
        .journey-page-heading {
            font-size: 2.4rem; font-weight: 600; color: #111;
            margin-bottom: 25px; letter-spacing: -0.5px;
        }
        .journey-page-paragraph {
            font-size: 1rem; color: #666; line-height: 1.8; margin-bottom: 20px;
        }
        .journey-page-paragraph:last-child { margin-bottom: 0; }

        @media (max-width: 1024px) {
            .journey-split-card { flex-direction: column; }
            .journey-image-container { min-height: 320px; position: static; }
            .journey-full-img { position: static; }
            .journey-text-container { padding: 50px 40px; }
        }
        @media (max-width: 576px) {
            .journey-text-container { padding: 35px 25px; }
            .journey-page-heading { font-size: 1.8rem; }
        }

        /* ── Stats Banner ── */
        .stats-banner-section { padding: 0 0 80px; background: #fff; }
        .stats-banner-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            background: linear-gradient(135deg, #FE7622, #E05200);
            border-radius: 20px;
            overflow: hidden;
        }
        .stats-banner-item {
            text-align: center;
            padding: 50px 30px;
            border-right: 1px solid rgba(255,255,255,0.2);
            display: flex; flex-direction: column; align-items: center; gap: 10px;
        }
        .stats-banner-item:last-child { border-right: none; }
        .stats-num {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 900; color: #fff; display: block;
        }
        .stats-label {
            font-size: 1rem; font-weight: 500; color: rgba(255,255,255,0.9);
        }
        @media (max-width: 900px) {
            .stats-banner-grid { grid-template-columns: repeat(2, 1fr); }
            .stats-banner-item:nth-child(2) { border-right: none; }
            .stats-banner-item { border-bottom: 1px solid rgba(255,255,255,0.2); }
            .stats-banner-item:nth-last-child(-n+2) { border-bottom: none; }
        }
        @media (max-width: 480px) {
            .stats-banner-grid { grid-template-columns: 1fr 1fr; }
            .stats-banner-item { padding: 35px 20px; }
        }

        /* ── Mission & Vision Section ── */
        .mv-section { padding: 0 0 80px; background: #fff; }
        .mv-wrapper { display: flex; border-radius: 24px; overflow: hidden; }
        .mv-box {
            flex: 1; min-height: 460px;
            background-size: cover; background-position: center;
            display: flex; align-items: center; justify-content: center;
            padding: 40px; position: relative;
        }
        .mv-box::before {
            content: ''; position: absolute; inset: 0;
            background: rgba(0,0,0,0.45);
        }
        .mv-content {
            background: #FE7622;
            color: white; padding: 50px 45px;
            width: 100%; max-width: 500px;
            position: relative; z-index: 2;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            border-radius: 4px;
        }
        .mv-title { font-size: 2.2rem; font-weight: 600; margin-bottom: 20px; }
        .mv-text { font-size: 1rem; line-height: 1.8; opacity: 0.97; }

        @media (max-width: 900px) {
            .mv-wrapper { flex-direction: column; }
            .mv-box { min-height: 400px; padding: 30px 20px; }
            .mv-content { padding: 40px 30px; }
            .mv-title { font-size: 1.8rem; }
        }
        @media (max-width: 480px) {
            .mv-box { min-height: 350px; }
            .mv-content { padding: 30px 25px; }
            .mv-title { font-size: 1.6rem; }
        }

        /* ── Core Values ── */
        .values-section { padding: 80px 0 100px; background: #f8f9fa; }
        .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .value-card { background: #fff; padding: 40px 30px; border-radius: 20px; box-shadow: 0 5px 20px rgba(0,0,0,0.04); transition: 0.4s; text-align: center; border-bottom: 4px solid transparent; }
        .value-card:hover { transform: translateY(-10px); box-shadow: 0 15px 40px rgba(0,0,0,0.1); border-color: #FE7622; }
        .value-icon { width: 70px; height: 70px; background: #fff4ee; color: #FE7622; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; transition: 0.4s; }
        .value-card:hover .value-icon { background: #FE7622; color: white; }
        .value-card h3 { font-size: 1.25rem; font-weight: 700; color: #111; margin-bottom: 15px; }
        .value-card p { font-size: 0.95rem; color: #666; line-height: 1.6; }

        @media (max-width: 1024px) { .values-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .values-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; } .value-card { padding: 25px 15px; } .value-icon { width: 50px; height: 50px; } .value-card h3 { font-size: 1.1rem; } }

        /* ── What We Do Section ── */
        .what-we-do-section { padding: 80px 0 100px; background: #fff; }
        .wwd-header { text-align: center; margin-bottom: 60px; }
        .wwd-title { font-size: 2.5rem; font-weight: 700; color: #111; margin-bottom: 16px; }
        .wwd-desc { font-size: 1.05rem; color: #777; max-width: 700px; margin: 0 auto; line-height: 1.7; }
        .wwd-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .wwd-card {
            background: #f8f9fa; padding: 40px 35px; border-radius: 20px;
            border-top: 4px solid transparent; transition: 0.3s;
            box-shadow: 0 4px 15px rgba(0,0,0,0.04);
        }
        .wwd-card:hover { border-color: #FE7622; transform: translateY(-6px); box-shadow: 0 12px 30px rgba(0,0,0,0.08); }
        .wwd-number { font-size: 2.8rem; font-weight: 900; color: #FE7622; opacity: 0.3; margin-bottom: 15px; line-height: 1; }
        .wwd-card h3 { font-size: 1.2rem; font-weight: 700; color: #111; margin-bottom: 12px; }
        .wwd-card p { font-size: 0.95rem; color: #666; line-height: 1.7; }

        @media (max-width: 1024px) { .wwd-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .wwd-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; } .wwd-card { padding: 25px 20px; } .wwd-title { font-size: 1.9rem; } }
        `}
        })]
    })
}, h0 = "/assets/projecthero-C7KMGnvt.png", f0 = "/assets/project_construction-AG4wtKcw.png", g0 = "/assets/project_facility-WPYadPn-.png", x0 = "/assets/project_industrial-Bb5WKDkf.png", y0 = () => {
    const { t: e } = U(); return n.jsxs("div", {
        className: "project-page", children: [n.jsx(J, { title: e.pjSEOTitle, description: e.pjSEODesc, keywords: "manpower projects UAE, staffing case studies UAE, construction workforce projects, facility management staffing projects, manufacturing plant manpower, Smaar Elysium projects", canonical: "https://www.smaarelysium.com/projects" }), n.jsx("div", { className: "container hero-wrapper", children: n.jsxs("section", { className: "home-hero", children: [n.jsxs("div", { className: "home-hero__content", children: [n.jsx("h1", { className: "home-hero__title", children: e.pjHeroTitle }), n.jsx("p", { className: "home-hero__text", children: e.pjHeroText }), n.jsx("div", { className: "home-hero__actions", children: n.jsx(j, { to: "/contact", className: "hero-btn-main", children: e.getInTouch }) })] }), n.jsx("div", { className: "home-hero__image", children: n.jsx("img", { src: h0, alt: "Manpower Projects Team", className: "hero-workers-img", style: { width: "100%", maxWidth: "550px", height: "auto", display: "block", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.2))" } }) })] }) }), n.jsx("section", { className: "featured-projects-section", children: n.jsx("div", { className: "container", children: n.jsxs("div", { className: "custom-projects-grid", children: [n.jsx("div", { className: "custom-project-card", children: n.jsx("div", { className: "custom-project-image", style: { backgroundImage: `url(${f0})` }, children: n.jsxs("div", { className: "custom-project-red-box", children: [n.jsx("h3", { className: "custom-project-title", children: e.pjP1Title }), n.jsx("p", { className: "custom-project-desc", children: e.pjP1Desc }), n.jsxs(j, { to: "/contact", className: "custom-project-link", children: [e.getInTouch, " ", n.jsx(ni, { size: 20, strokeWidth: 2 })] })] }) }) }), n.jsx("div", { className: "custom-project-card", children: n.jsx("div", { className: "custom-project-image", style: { backgroundImage: `url(${g0})` }, children: n.jsxs("div", { className: "custom-project-red-box", children: [n.jsx("h3", { className: "custom-project-title", children: e.pjP2Title }), n.jsx("p", { className: "custom-project-desc", children: e.pjP2Desc }), n.jsxs(j, { to: "/contact", className: "custom-project-link", children: [e.getInTouch, " ", n.jsx(ni, { size: 20, strokeWidth: 2 })] })] }) }) }), n.jsx("div", { className: "custom-project-card", children: n.jsx("div", { className: "custom-project-image", style: { backgroundImage: `url(${x0})` }, children: n.jsxs("div", { className: "custom-project-red-box", children: [n.jsx("h3", { className: "custom-project-title", children: e.pjP3Title }), n.jsx("p", { className: "custom-project-desc", children: e.pjP3Desc }), n.jsxs(j, { to: "/contact", className: "custom-project-link", children: [e.getInTouch, " ", n.jsx(ni, { size: 20, strokeWidth: 2 })] })] }) }) })] }) }) }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        /* Hero Styling */
        .hero-wrapper { padding-top: 20px; padding-bottom: 20px; }
        .home-hero { 
            background: var(--color-primary); 
            border-radius: 40px; 
            color: white; 
            padding: 80px 100px; 
            display: flex; 
            align-items: center; 
            justify-content: space-between;
            position: relative;
            overflow: hidden;
            min-height: 500px;
        }
        .home-hero__content { flex: 1; z-index: 2; max-width: 600px; }
        .home-hero__title { font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1; margin-bottom: 25px; font-weight: 900; color: #fff; }
        .home-hero__text { font-size: 1.1rem; color: #fff; margin-bottom: 40px; max-width: 500px; line-height: 1.6; opacity: 0.95; }
        .hero-btn-main { background: #fff; color: #000; padding: 15px 45px; border-radius: 100px; font-weight: 700; font-size: 1.1rem; display: inline-block; transition: 0.3s; text-decoration: none; }
        .hero-btn-main:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.15); }
        .home-hero__image-wrapper { flex: 0 0 auto; }
        .home-hero__image { max-width: 450px; height: auto; display: block; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2)); }
        
        @media (max-width: 1024px) { 
            .home-hero { flex-direction: column; text-align: center; padding: 60px 50px; } 
            .home-hero__image { max-width: 350px; margin-top: 40px; } 
        }
        @media (max-width: 576px) { 
            .home-hero { padding: 40px 25px; border-radius: 20px; } 
            .home-hero__image { max-width: 100%; } 
        }

        /* Custom Featured Projects */
        .featured-projects-section { padding: 80px 0; background: #fff; }
        .custom-projects-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }
        .custom-project-card {
            background: #f0f0f0;
            border-radius: 20px;
            padding: 15px;
            height: 420px;
        }
        .custom-project-image {
            position: relative;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .custom-project-red-box {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 85%;
            background: #c8102e;
            padding: 30px;
            color: white;
            border-top-right-radius: 0; 
        }
        .custom-project-title {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: #fff;
        }
        .custom-project-desc {
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 25px;
            color: rgba(255, 255, 255, 0.95);
        }
        .custom-project-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #fff;
            text-decoration: none;
            font-weight: 700;
            font-size: 0.95rem;
            transition: gap 0.3s ease;
        }
        .custom-project-link:hover {
            gap: 15px;
        }

        @media (max-width: 1024px) {
            .custom-projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
            .custom-projects-grid { grid-template-columns: 1fr; }
            .custom-project-card { height: 380px; }
            .custom-project-red-box { width: 95%; padding: 25px; }
        }

        /* ── Clients Section (From Home Page) ── */
        .clients-section { padding: 80px 0 100px; background: #fff; text-align: center; }
        .clients-header h2 { font-size: 2.8rem; font-weight: 500; color: #666; margin-bottom: 20px; }
        .clients-logos-header h2 { font-size: 2.8rem; font-weight: 500; color: #666; margin-bottom: 40px; }
        
        .marquee-container {
            overflow: hidden;
            position: relative;
            width: 100%;
            padding: 20px 0;
            display: flex;
        }
        
        .marquee-content.left-to-right {
            display: flex;
            white-space: nowrap;
            animation: scroll-left-to-right 25s linear infinite;
            gap: 60px;
        }
        
        .marquee-group {
            display: flex;
            flex-shrink: 0;
            gap: 60px;
            align-items: center;
            justify-content: space-around;
            min-width: 100%;
        }
        
        @keyframes scroll-left-to-right {
            0% { transform: translateX(calc(-100% - 60px)); }
            100% { transform: translateX(0); }
        }
        
        .client-logo-box img { 
            max-width: 180px; 
            max-height: 60px; 
            object-fit: contain;
            filter: grayscale(100%) opacity(0.6);
            transition: all 0.3s ease;
        }
        .client-logo-box:hover img {
            filter: grayscale(0%) opacity(1);
        }

      `}
        })]
    })
}, v0 = "/assets/OilGasSector-hero-BCxv6n_b.png", b0 = "/assets/oilandgas_bts-DfZB4u77.jpg", w0 = "/assets/oilandgas_insight_1-Lgb04929.jpg", j0 = "/assets/oilandgas_insight_2-BTufjDZ7.jpg", N0 = "/assets/oilandgas_insight_3-BZwqiKLX.jpg", k0 = "/assets/oilandgas_insight_4-BQDgkoZQ.jpg", S0 = () => {
    const { t: e } = U(), [t, i] = z.useState(0), s = [{ question: e.ogFaqQ1, answer: e.ogFaqA1 }, { question: e.ogFaqQ2, answer: e.ogFaqA2 }, { question: e.ogFaqQ3, answer: e.ogFaqA3 }, { question: e.ogFaqQ4, answer: e.ogFaqA4 }, { question: e.ogFaqQ5, answer: e.ogFaqA5 }, { question: e.ogFaqQ6, answer: e.ogFaqA6 }]; return n.jsxs("div", {
        className: "oil-gas-page recruitment-page", children: [n.jsx(J, { title: e.ogSEOTitle, description: e.ogSEODesc, keywords: "oil gas manpower UAE, petroleum sector staffing, drilling engineers UAE, HSE officers oil gas, refinery manpower supply, upstream downstream staffing UAE, Smaar Elysium oil gas", canonical: "https://www.smaarelysium.com/oil-and-gas", faqSchema: s.map(r => ({ question: r.question, answer: r.answer })) }), n.jsx("div", { className: "container hero-wrapper", children: n.jsxs("section", { className: "home-hero", children: [n.jsxs("div", { className: "home-hero__content", children: [n.jsx("h1", { className: "home-hero__title", children: e.ogHeroTitle }), n.jsx("p", { className: "home-hero__text", children: e.ogHeroText }), n.jsx("div", { className: "home-hero__actions", children: n.jsx(j, { to: "/contact", className: "hero-btn-main", children: e.getInTouch }) })] }), n.jsx("div", { className: "home-hero__image", children: n.jsx("img", { src: v0, alt: e.oilGas, className: "hero-workers-img" }) })] }) }), n.jsx("div", { className: "service-content-section", children: n.jsxs("div", { className: "container", children: [n.jsxs("div", { className: "choose-best-split", children: [n.jsxs("div", { className: "cbs-left", children: [n.jsx("h2", { children: e.ogChooseTitle }), n.jsx("p", { children: e.ogChooseP1 }), n.jsx("p", { children: e.ogChooseP2 }), n.jsx("p", { children: e.ogChooseP3 })] }), n.jsxs("div", { className: "cbs-right", style: { backgroundColor: "var(--color-primary)" }, children: [n.jsxs("div", { className: "cbs-logo", children: [n.jsx("span", { className: "logo-main", children: "Smaar Elysium" }), n.jsx("span", { children: "®" }), n.jsx("span", { className: "logo-slogan", children: e.ogLogoSlogan })] }), n.jsx("div", { className: "cbs-content", children: n.jsxs("div", { className: "cbs-text-block", children: [n.jsx("span", { className: "cbs-go-beyond", children: e.ogGrid1 }), n.jsx("span", { className: "cbs-ordinary", children: e.ogGrid2 }), n.jsx("span", { className: "cbs-find", children: e.ogGrid3 }), n.jsx("span", { className: "cbs-executives", children: e.ogGrid4 })] }) })] })] }), n.jsxs("div", { className: "build-team-split", children: [n.jsx("div", { className: "bts-left", children: n.jsx("img", { src: b0, alt: e.oilGas, className: "bts-workers-img" }) }), n.jsxs("div", { className: "bts-right", children: [n.jsx("h3", { children: e.ogBtsTitle }), n.jsx("p", { children: e.ogBtsP1 }), n.jsx("p", { children: e.ogBtsP2 }), n.jsx(j, { to: "/contact", className: "hero-btn-main", style: { background: "#fff", color: "#1f2937" }, children: e.requestStaff })] })] }), n.jsxs("section", { className: "why-choose-us-section", children: [n.jsx("h2", { className: "section-title", children: e.whyChooseUs }), n.jsxs("div", { className: "benefits-grid", children: [n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.ogBen1Title }), n.jsx("p", { children: e.ogBen1Desc })] }), n.jsxs("div", { className: "benefit-card bg-gray", children: [n.jsx("h3", { children: e.ogBen2Title }), n.jsx("p", { children: e.ogBen2Desc })] }), n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.ogBen3Title }), n.jsx("p", { children: e.ogBen3Desc })] })] })] }), n.jsxs("div", { className: "domains-container", children: [n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.ogDom1Title }), n.jsx("p", { children: e.ogDom1Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.ogDom2Title }), n.jsx("p", { children: e.ogDom2Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.ogDom3Title }), n.jsx("p", { children: e.ogDom3Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.ogDom4Title }), n.jsx("p", { children: e.ogDom4Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.ogDom5Title }), n.jsx("p", { children: e.ogDom5Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.ogDom6Title }), n.jsx("p", { children: e.ogDom6Desc })] }) })] }), n.jsx("div", { className: "quote-section", children: n.jsxs("div", { className: "quote-container", children: [n.jsx("div", { className: "quote-label", children: e.requestQuote }), n.jsx("h2", { className: "quote-title", children: e.quickFollowUp }), n.jsx("p", { className: "quote-text", children: e.fillForm }), n.jsx(j, { to: "/contact", className: "quote-btn", children: e.bookNow })] }) }), n.jsxs("section", { className: "faq-section", children: [n.jsx("h2", { className: "faq-main-title", children: e.commonFaqTitle || "FAQ" }), n.jsx("p", { className: "faq-subtitle", children: e.commonFaqSubtitle || "MOST ASKED QUESTIONS." }), n.jsx("div", { className: "faq-list", children: s.map((r, o) => n.jsxs("div", { className: `faq-item ${t === o ? "active" : ""}`, children: [n.jsxs("div", { className: "faq-question-btn", onClick: () => i(t === o ? -1 : o), children: [n.jsx("span", { className: "faq-icon", children: t === o ? "−" : "+" }), n.jsx("span", { className: "faq-question-text", children: r.question })] }), n.jsx("div", { className: "faq-answer-container", children: n.jsx("div", { className: "faq-answer-content", children: n.jsx("p", { children: r.answer }) }) })] }, o)) })] })] }) }), n.jsxs("div", { className: "insights-section", children: [n.jsx("h2", { className: "insights-title", children: e.csInsightTitle }), n.jsxs("div", { className: "insights-grid", children: [n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: w0, alt: "Insight 1" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight1Title }), n.jsx("p", { children: e.csInsight1Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: j0, alt: "Insight 2" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight2Title }), n.jsx("p", { children: e.csInsight2Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: N0, alt: "Insight 3" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight3Title }), n.jsx("p", { children: e.csInsight3Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: k0, alt: "Insight 4" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight4Title }), n.jsx("p", { children: e.csInsight4Desc })] })] })] })] }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        /* Quote Section Styles */
        .quote-section {
          background: linear-gradient(135deg, #001a4d 0%, #003d99 100%);
          border-radius: 24px;
          padding: 50px;
          margin: 80px 0;
          margin-top: 60px;
        }
        .quote-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
        .quote-label {
          position: absolute;
          top: -15px;
          left: 30px;
          background: #001a4d;
          color: #fff;
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .quote-section {
          position: relative;
        }
        .quote-title {
          font-size: clamp(2rem, 5vw, 3rem);
          color: #fff;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
        }
        .quote-text {
          color: #fff;
          font-size: 1.05rem;
          line-height: 1.6;
          margin: 20px 0 30px;
          max-width: 600px;
        }
        .quote-btn {
          display: inline-block;
          background: #fff;
          color: #001a4d;
          padding: 14px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .quote-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        @media (max-width: 768px) {
          .quote-section {
            padding: 40px 25px;
            margin: 60px 0;
          }
          .quote-container {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .quote-label {
            position: static;
            display: inline-block;
            margin-bottom: 20px;
          }
          .quote-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}
        })]
    })
}, q0 = "/assets/civilconstructionsector-hero-GYfw-IHK.png", T0 = "/assets/civilconstruction_bts-DlM8SUNM.jpg", E0 = "/assets/civilconstruction_insight_1-BU2jB_qz.jpg", D0 = "/assets/civilconstruction_insight_2-Ck7NllpW.jpg", C0 = "/assets/civilconstruction_insight_3-BxhkUKc1.jpg", A0 = "/assets/civilconstruction_insight_4-CiRB4NvM.jpg", F0 = () => {
    const { t: e } = U(), [t, i] = z.useState(0), s = [{ question: e.ccFaqQ1, answer: e.ccFaqA1 }, { question: e.ccFaqQ2, answer: e.ccFaqA2 }, { question: e.ccFaqQ3, answer: e.ccFaqA3 }, { question: e.ccFaqQ4, answer: e.ccFaqA4 }, { question: e.ccFaqQ5, answer: e.ccFaqA5 }, { question: e.ccFaqQ6, answer: e.ccFaqA6 }]; return n.jsxs("div", {
        className: "oil-gas-page recruitment-page", children: [n.jsx(J, { title: e.ccSEOTitle, description: e.ccSEODesc, keywords: "civil construction manpower UAE, site engineers UAE, construction workers supply, building contractor manpower, skilled labour construction UAE, structural workers UAE, Smaar Elysium construction", canonical: "https://www.smaarelysium.com/civil-construction", faqSchema: s.map(r => ({ question: r.question, answer: r.answer })) }), n.jsx("div", { className: "container hero-wrapper", children: n.jsxs("section", { className: "home-hero", children: [n.jsxs("div", { className: "home-hero__content", children: [n.jsx("h1", { className: "home-hero__title", children: e.ccHeroTitle }), n.jsx("p", { className: "home-hero__text", children: e.ccHeroText }), n.jsx("div", { className: "home-hero__actions", children: n.jsx(j, { to: "/contact", className: "hero-btn-main", children: e.getInTouch }) })] }), n.jsx("div", { className: "home-hero__image", children: n.jsx("img", { src: q0, alt: "Civil Construction Workers", className: "hero-workers-img" }) })] }) }), n.jsx("div", { className: "service-content-section", children: n.jsxs("div", { className: "container", children: [n.jsxs("div", { className: "choose-best-split", children: [n.jsxs("div", { className: "cbs-left", children: [n.jsx("h2", { children: e.ccChooseTitle }), n.jsx("p", { children: e.ccChooseP1 }), n.jsx("p", { children: e.ccChooseP2 }), n.jsx("p", { children: e.ccChooseP3 })] }), n.jsxs("div", { className: "cbs-right", style: { backgroundColor: "var(--color-primary)" }, children: [n.jsxs("div", { className: "cbs-logo", children: [n.jsx("span", { className: "logo-main", children: "Smaar Elysium" }), n.jsx("span", { children: "®" }), n.jsx("span", { className: "logo-slogan", children: e.ccLogoSlogan })] }), n.jsx("div", { className: "cbs-content", children: n.jsxs("div", { className: "cbs-text-block", children: [n.jsx("span", { className: "cbs-go-beyond", children: e.ccGrid1 }), n.jsx("span", { className: "cbs-ordinary", children: e.ccGrid2 }), n.jsx("span", { className: "cbs-find", children: e.ccGrid3 }), n.jsx("span", { className: "cbs-executives", children: e.ccGrid4 })] }) })] })] }), n.jsxs("div", { className: "build-team-split", children: [n.jsx("div", { className: "bts-left", children: n.jsx("img", { src: T0, alt: "Civil Construction Team", className: "bts-workers-img" }) }), n.jsxs("div", { className: "bts-right", children: [n.jsx("h3", { children: e.ccBtsTitle }), n.jsx("p", { children: e.ccBtsP1 }), n.jsx("p", { children: e.ccBtsP2 }), n.jsx(j, { to: "/contact", className: "hero-btn-main", style: { background: "#fff", color: "#1f2937" }, children: e.requestStaff })] })] }), n.jsxs("div", { className: "domains-container", children: [n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.ccDom1Title }), n.jsx("p", { children: e.ccDom1Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.ccDom2Title }), n.jsx("p", { children: e.ccDom2Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.ccDom3Title }), n.jsx("p", { children: e.ccDom3Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.ccDom4Title }), n.jsx("p", { children: e.ccDom4Desc })] }) })] }), n.jsxs("section", { className: "why-choose-us-section", children: [n.jsx("h2", { className: "section-title", children: e.whyChooseUs }), n.jsxs("div", { className: "benefits-grid", children: [n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.ccBen1Title }), n.jsx("p", { children: e.ccBen1Desc })] }), n.jsxs("div", { className: "benefit-card bg-gray", children: [n.jsx("h3", { children: e.ccBen2Title }), n.jsx("p", { children: e.ccBen2Desc })] }), n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.ccBen3Title }), n.jsx("p", { children: e.ccBen3Desc })] })] })] }), n.jsx("div", { className: "quote-section", children: n.jsxs("div", { className: "quote-container", children: [n.jsx("div", { className: "quote-label", children: e.requestQuote }), n.jsx("h2", { className: "quote-title", children: e.quickFollowUp }), n.jsx("p", { className: "quote-text", children: e.fillForm }), n.jsx(j, { to: "/contact", className: "quote-btn", children: e.bookNow })] }) }), n.jsxs("section", { className: "faq-section", children: [n.jsx("h2", { className: "faq-main-title", children: e.commonFaqTitle || "FAQ" }), n.jsx("p", { className: "faq-subtitle", children: e.commonFaqSubtitle || "MOST ASKED QUESTIONS." }), n.jsx("div", { className: "faq-list", children: s.map((r, o) => n.jsxs("div", { className: `faq-item ${t === o ? "active" : ""}`, children: [n.jsxs("div", { className: "faq-question-btn", onClick: () => i(t === o ? -1 : o), children: [n.jsx("span", { className: "faq-icon", children: t === o ? "−" : "+" }), n.jsx("span", { className: "faq-question-text", children: r.question })] }), n.jsx("div", { className: "faq-answer-container", children: n.jsx("div", { className: "faq-answer-content", children: n.jsx("p", { children: r.answer }) }) })] }, o)) })] })] }) }), n.jsxs("div", { className: "insights-section", children: [n.jsx("h2", { className: "insights-title", children: e.csInsightTitle }), n.jsx("div", { className: "insights-grid", children: [1, 2, 3, 4].map(r => n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: r === 1 ? E0 : r === 2 ? D0 : r === 3 ? C0 : A0, alt: `Insight ${r}` }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e[`csInsight${r}Title`] }), n.jsx("p", { children: e[`csInsight${r}Desc`] })] })] }, r)) })] }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        /* Quote Section Styles */
        .quote-section {
          background: linear-gradient(135deg, #001a4d 0%, #003d99 100%);
          border-radius: 24px;
          padding: 50px;
          margin: 80px 0;
          margin-top: 60px;
          position: relative;
        }
        .quote-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
        .quote-label {
          position: absolute;
          top: -15px;
          left: 30px;
          background: #001a4d;
          color: #fff;
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .quote-title {
          font-size: clamp(2rem, 5vw, 3rem);
          color: #fff;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
        }
        .quote-text {
          color: #fff;
          font-size: 1.05rem;
          line-height: 1.6;
          margin: 20px 0 30px;
          max-width: 600px;
        }
        .quote-btn {
          display: inline-block;
          background: #fff;
          color: #001a4d;
          padding: 14px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .quote-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        @media (max-width: 768px) {
          .quote-section {
            padding: 40px 25px;
            margin: 60px 0;
          }
          .quote-container {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .quote-label {
            position: static;
            display: inline-block;
            margin-bottom: 20px;
          }
          .quote-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}
        })]
    })
}, _0 = "/assets/facilitymanagementsector-s9JIqe-3.png", P0 = "/assets/facilitymanagement_bts-CWpRw6Xz.jpg", z0 = "/assets/facilitymanagement_insight_1-CYMqIIdN.jpg", I0 = "/assets/facilitymanagement_insight_2-DAu1bI_x.jpg", R0 = "/assets/facilitymanagement_insight_3-BPN0WbFT.jpg", B0 = "/assets/facilitymanagement_insight_4-DYBcRHBs.jpg", O0 = () => {
    const { t: e } = U(), [t, i] = z.useState(0), s = [{ question: e.fmFaqQ1, answer: e.fmFaqA1 }, { question: e.fmFaqQ2, answer: e.fmFaqA2 }, { question: e.fmFaqQ3, answer: e.fmFaqA3 }, { question: e.fmFaqQ4, answer: e.fmFaqA4 }, { question: e.fmFaqQ5, answer: e.fmFaqA5 }, { question: e.fmFaqQ6, answer: e.fmFaqA6 }]; return n.jsxs("div", {
        className: "oil-gas-page recruitment-page", children: [n.jsx(J, { title: e.fmSEOTitle, description: e.fmSEODesc, keywords: "facility management manpower UAE, MEP technicians staffing, cleaning staff agency UAE, facility services staff, building maintenance workers UAE, housekeeping staff UAE, Smaar Elysium facility", canonical: "https://www.smaarelysium.com/facility-management", faqSchema: s.map(r => ({ question: r.question, answer: r.answer })) }), n.jsx("div", { className: "container hero-wrapper", children: n.jsxs("section", { className: "home-hero", children: [n.jsxs("div", { className: "home-hero__content", children: [n.jsx("h1", { className: "home-hero__title", children: e.fmHeroTitle }), n.jsx("p", { className: "home-hero__text", children: e.fmHeroText }), n.jsx("div", { className: "home-hero__actions", children: n.jsx(j, { to: "/contact", className: "hero-btn-main", children: e.getInTouch }) })] }), n.jsx("div", { className: "home-hero__image", children: n.jsx("img", { src: _0, alt: "Facility Management Staff", className: "hero-workers-img" }) })] }) }), n.jsx("div", { className: "service-content-section", children: n.jsxs("div", { className: "container", children: [n.jsxs("div", { className: "choose-best-split", children: [n.jsxs("div", { className: "cbs-left", children: [n.jsx("h2", { children: e.fmChooseTitle }), n.jsx("p", { children: e.fmChooseP1 }), n.jsx("p", { children: e.fmChooseP2 }), n.jsx("p", { children: e.fmChooseP3 })] }), n.jsxs("div", { className: "cbs-right", style: { backgroundColor: "var(--color-primary)" }, children: [n.jsxs("div", { className: "cbs-logo", children: [n.jsx("span", { className: "logo-main", children: "Smaar Elysium" }), n.jsx("span", { children: "®" }), n.jsx("span", { className: "logo-slogan", children: e.fmLogoSlogan })] }), n.jsx("div", { className: "cbs-content", children: n.jsxs("div", { className: "cbs-text-block", children: [n.jsx("span", { className: "cbs-go-beyond", children: e.fmGrid1 }), n.jsx("span", { className: "cbs-ordinary", children: e.fmGrid2 }), n.jsx("span", { className: "cbs-find", children: e.fmGrid3 }), n.jsx("span", { className: "cbs-executives", children: e.fmGrid4 })] }) })] })] }), n.jsxs("div", { className: "build-team-split", children: [n.jsx("div", { className: "bts-left", children: n.jsx("img", { src: P0, alt: "Facility Management Team", className: "bts-workers-img" }) }), n.jsxs("div", { className: "bts-right", children: [n.jsx("h3", { children: e.fmBtsTitle }), n.jsx("p", { children: e.fmBtsP1 }), n.jsx("p", { children: e.fmBtsP2 }), n.jsx(j, { to: "/contact", className: "hero-btn-main", style: { background: "#fff", color: "#1f2937" }, children: e.requestStaff })] })] }), n.jsxs("div", { className: "domains-container", children: [n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.fmDom1Title }), n.jsx("p", { children: e.fmDom1Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.fmDom2Title }), n.jsx("p", { children: e.fmDom2Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.fmDom3Title }), n.jsx("p", { children: e.fmDom3Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.fmDom4Title }), n.jsx("p", { children: e.fmDom4Desc })] }) })] }), n.jsxs("section", { className: "why-choose-us-section", children: [n.jsx("h2", { className: "section-title", children: e.whyChooseUs }), n.jsxs("div", { className: "benefits-grid", children: [n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.fmBen1Title }), n.jsx("p", { children: e.fmBen1Desc })] }), n.jsxs("div", { className: "benefit-card bg-gray", children: [n.jsx("h3", { children: e.fmBen2Title }), n.jsx("p", { children: e.fmBen2Desc })] }), n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.fmBen3Title }), n.jsx("p", { children: e.fmBen3Desc })] })] })] }), n.jsx("div", { className: "quote-section", children: n.jsxs("div", { className: "quote-container", children: [n.jsx("div", { className: "quote-label", children: e.requestQuote }), n.jsx("h2", { className: "quote-title", children: e.quickFollowUp }), n.jsx("p", { className: "quote-text", children: e.fillForm }), n.jsx(j, { to: "/contact", className: "quote-btn", children: e.bookNow })] }) }), n.jsxs("section", { className: "faq-section", children: [n.jsx("h2", { className: "faq-main-title", children: e.commonFaqTitle || "FAQ" }), n.jsx("p", { className: "faq-subtitle", children: e.commonFaqSubtitle || "MOST ASKED QUESTIONS." }), n.jsx("div", { className: "faq-list", children: s.map((r, o) => n.jsxs("div", { className: `faq-item ${t === o ? "active" : ""}`, children: [n.jsxs("div", { className: "faq-question-btn", onClick: () => i(t === o ? -1 : o), children: [n.jsx("span", { className: "faq-icon", children: t === o ? "−" : "+" }), n.jsx("span", { className: "faq-question-text", children: r.question })] }), n.jsx("div", { className: "faq-answer-container", children: n.jsx("div", { className: "faq-answer-content", children: n.jsx("p", { children: r.answer }) }) })] }, o)) })] })] }) }), n.jsxs("div", { className: "insights-section", children: [n.jsx("h2", { className: "insights-title", children: "Facility Management Insights" }), n.jsxs("div", { className: "insights-grid", children: [n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: z0, alt: "Insight 1" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight1Title }), n.jsx("p", { children: e.csInsight1Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: I0, alt: "Insight 2" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight2Title }), n.jsx("p", { children: e.csInsight2Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: R0, alt: "Insight 3" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight3Title }), n.jsx("p", { children: e.csInsight3Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: B0, alt: "Insight 4" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight4Title }), n.jsx("p", { children: e.csInsight4Desc })] })] })] })] }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        /* Quote Section Styles */
        .quote-section {
          background: linear-gradient(135deg, #001a4d 0%, #003d99 100%);
          border-radius: 24px;
          padding: 50px;
          margin: 80px 0;
          margin-top: 60px;
          position: relative;
        }
        .quote-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
        .quote-label {
          position: absolute;
          top: -15px;
          left: 30px;
          background: #001a4d;
          color: #fff;
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .quote-title {
          font-size: clamp(2rem, 5vw, 3rem);
          color: #fff;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
        }
        .quote-text {
          color: #fff;
          font-size: 1.05rem;
          line-height: 1.6;
          margin: 20px 0 30px;
          max-width: 600px;
        }
        .quote-btn {
          display: inline-block;
          background: #fff;
          color: #001a4d;
          padding: 14px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .quote-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        @media (max-width: 768px) {
          .quote-section {
            padding: 40px 25px;
            margin: 60px 0;
          }
          .quote-container {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .quote-label {
            position: static;
            display: inline-block;
            margin-bottom: 20px;
          }
          .quote-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}
        })]
    })
}, M0 = "/assets/logistics-hero-DsjfhNsG.png", H0 = "/assets/logistics_bts-4KjSKDqG.jpg", L0 = "/assets/logistics_insight_1-CR1hsCrJ.jpg", Q0 = "/assets/logistics_insight_2-Clj0678V.jpg", U0 = "/assets/logistics_insight_3-DTI-HbD9.jpg", W0 = "/assets/logistics_insight_4-zoketk9v.jpg", G0 = () => {
    const { t: e } = U(), [t, i] = z.useState(0), s = [{ question: e.logFaqQ1, answer: e.logFaqA1 }, { question: e.logFaqQ2, answer: e.logFaqA2 }, { question: e.logFaqQ3, answer: e.logFaqA3 }, { question: e.logFaqQ4, answer: e.logFaqA4 }, { question: e.logFaqQ5, answer: e.logFaqA5 }, { question: e.logFaqQ6, answer: e.logFaqA6 }]; return n.jsxs("div", {
        className: "oil-gas-page recruitment-page", children: [n.jsx(J, { title: e.lgSEOTitle, description: e.lgSEODesc, keywords: "logistics manpower UAE, warehouse staff Dubai, forklift operators staffing, inventory controllers UAE, supply chain workforce Dubai", canonical: "https://www.smaarelysium.com/logistics", faqSchema: s.map(r => ({ question: r.question, answer: r.answer })) }), n.jsx("div", { className: "container hero-wrapper", children: n.jsxs("section", { className: "home-hero", children: [n.jsxs("div", { className: "home-hero__content", children: [n.jsx("h1", { className: "home-hero__title", children: e.lgHeroTitle }), n.jsx("p", { className: "home-hero__text", children: e.lgHeroText }), n.jsx("div", { className: "home-hero__actions", children: n.jsx(j, { to: "/contact", className: "hero-btn-main", children: e.getInTouch }) })] }), n.jsx("div", { className: "home-hero__image", children: n.jsx("img", { src: M0, alt: "Logistics and Supply Chain", className: "hero-workers-img" }) })] }) }), n.jsx("div", { className: "service-content-section", children: n.jsxs("div", { className: "container", children: [n.jsxs("div", { className: "choose-best-split", children: [n.jsxs("div", { className: "cbs-left", children: [n.jsx("h2", { children: e.lgChooseTitle }), n.jsx("p", { children: e.lgChooseP1 }), n.jsx("p", { children: e.lgChooseP2 }), n.jsx("p", { children: e.lgChooseP3 })] }), n.jsxs("div", { className: "cbs-right", style: { backgroundColor: "var(--color-primary)" }, children: [n.jsxs("div", { className: "cbs-logo", children: [n.jsx("span", { className: "logo-main", children: "Smaar Elysium" }), n.jsx("span", { children: "®" }), n.jsx("span", { className: "logo-slogan", children: e.lgLogoSlogan })] }), n.jsx("div", { className: "cbs-content", children: n.jsxs("div", { className: "cbs-text-block", children: [n.jsx("span", { className: "cbs-go-beyond", children: e.lgGrid1 }), n.jsx("span", { className: "cbs-ordinary", children: e.lgGrid2 }), n.jsx("span", { className: "cbs-find", children: e.lgGrid3 }), n.jsx("span", { className: "cbs-executives", children: e.lgGrid4 })] }) })] })] }), n.jsxs("div", { className: "build-team-split", children: [n.jsx("div", { className: "bts-left", children: n.jsx("img", { src: H0, alt: "Logistics Staff", className: "bts-workers-img" }) }), n.jsxs("div", { className: "bts-right", children: [n.jsx("h3", { children: e.lgBtsTitle }), n.jsx("p", { children: e.lgBtsP1 }), n.jsx("p", { children: e.lgBtsP2 }), n.jsx(j, { to: "/contact", className: "hero-btn-main", style: { background: "#fff", color: "#1f2937" }, children: e.requestStaff })] })] }), n.jsxs("div", { className: "domains-container", children: [n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.lgDom1Title }), n.jsx("p", { children: e.lgDom1Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.lgDom2Title }), n.jsx("p", { children: e.lgDom2Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.lgDom3Title }), n.jsx("p", { children: e.lgDom3Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.lgDom4Title }), n.jsx("p", { children: e.lgDom4Desc })] }) })] }), n.jsxs("section", { className: "why-choose-us-section", children: [n.jsx("h2", { className: "section-title", children: e.whyChooseUs }), n.jsxs("div", { className: "benefits-grid", children: [n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.lgBen1Title }), n.jsx("p", { children: e.lgBen1Desc })] }), n.jsxs("div", { className: "benefit-card bg-gray", children: [n.jsx("h3", { children: e.lgBen2Title }), n.jsx("p", { children: e.lgBen2Desc })] }), n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.lgBen3Title }), n.jsx("p", { children: e.lgBen3Desc })] })] })] }), n.jsx("div", { className: "quote-section", children: n.jsxs("div", { className: "quote-container", children: [n.jsx("div", { className: "quote-label", children: e.requestQuote }), n.jsx("h2", { className: "quote-title", children: e.quickFollowUp }), n.jsx("p", { className: "quote-text", children: e.fillForm }), n.jsx(j, { to: "/contact", className: "quote-btn", children: e.bookNow })] }) }), n.jsxs("section", { className: "faq-section", children: [n.jsx("h2", { className: "faq-main-title", children: e.commonFaqTitle || "FAQ" }), n.jsx("p", { className: "faq-subtitle", children: e.commonFaqSubtitle || "MOST ASKED QUESTIONS." }), n.jsx("div", { className: "faq-list", children: s.map((r, o) => n.jsxs("div", { className: `faq-item ${t === o ? "active" : ""}`, children: [n.jsxs("div", { className: "faq-question-btn", onClick: () => i(t === o ? -1 : o), children: [n.jsx("span", { className: "faq-icon", children: t === o ? "−" : "+" }), n.jsx("span", { className: "faq-question-text", children: r.question })] }), n.jsx("div", { className: "faq-answer-container", children: n.jsx("div", { className: "faq-answer-content", children: n.jsx("p", { children: r.answer }) }) })] }, o)) })] })] }) }), n.jsxs("div", { className: "insights-section", children: [n.jsx("h2", { className: "insights-title", children: "Logistics Insights" }), n.jsxs("div", { className: "insights-grid", children: [n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: L0, alt: "Insight 1" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight1Title }), n.jsx("p", { children: e.csInsight1Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: Q0, alt: "Insight 2" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight2Title }), n.jsx("p", { children: e.csInsight2Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: U0, alt: "Insight 3" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight3Title }), n.jsx("p", { children: e.csInsight3Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: W0, alt: "Insight 4" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight4Title }), n.jsx("p", { children: e.csInsight4Desc })] })] })] })] }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        /* Quote Section Styles */
        .quote-section {
          background: linear-gradient(135deg, #001a4d 0%, #003d99 100%);
          border-radius: 24px;
          padding: 50px;
          margin: 80px 0;
          margin-top: 60px;
          position: relative;
        }
        .quote-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
        .quote-label {
          position: absolute;
          top: -15px;
          left: 30px;
          background: #001a4d;
          color: #fff;
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .quote-title {
          font-size: clamp(2rem, 5vw, 3rem);
          color: #fff;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
        }
        .quote-text {
          color: #fff;
          font-size: 1.05rem;
          line-height: 1.6;
          margin: 20px 0 30px;
          max-width: 600px;
        }
        .quote-btn {
          display: inline-block;
          background: #fff;
          color: #001a4d;
          padding: 14px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .quote-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        @media (max-width: 768px) {
          .quote-section {
            padding: 40px 25px;
            margin: 60px 0;
          }
          .quote-container {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .quote-label {
            position: static;
            display: inline-block;
            margin-bottom: 20px;
          }
          .quote-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}
        })]
    })
}, $0 = "/assets/facilitymanagementsector-hero-CBhx-sdx.png", Y0 = "/assets/manufacture_bts-cODOEe0S.jpg", V0 = "/assets/manufacture_insight_1-8lD5TMm4.jpg", K0 = "/assets/manufacture_insight_2-B4Bm5ONk.jpg", X0 = "/assets/manufacture_insight_3-fH_RscJx.jpg", J0 = "/assets/manufacture_insight_4-ear5sqTx.jpg", Z0 = () => {
    const { t: e } = U(), [t, i] = z.useState(0), s = [{ question: e.manFaqQ1, answer: e.manFaqA1 }, { question: e.manFaqQ2, answer: e.manFaqA2 }, { question: e.manFaqQ3, answer: e.manFaqA3 }, { question: e.manFaqQ4, answer: e.manFaqA4 }, { question: e.manFaqQ5, answer: e.manFaqA5 }, { question: e.manFaqQ6, answer: e.manFaqA6 }]; return n.jsxs("div", {
        className: "oil-gas-page recruitment-page", children: [n.jsx(J, { title: e.mnSEOTitle, description: e.mnSEODesc, keywords: "manufacturing manpower UAE, factory workers Dubai, production line staff agency, machine operators UAE, manufacturing staffing solutions Dubai", canonical: "https://www.smaarelysium.com/manufacture", faqSchema: s.map(r => ({ question: r.question, answer: r.answer })) }), n.jsx("div", { className: "container hero-wrapper", children: n.jsxs("section", { className: "home-hero", children: [n.jsxs("div", { className: "home-hero__content", children: [n.jsx("h1", { className: "home-hero__title", children: e.mnHeroTitle }), n.jsx("p", { className: "home-hero__text", children: e.mnHeroText }), n.jsx("div", { className: "home-hero__actions", children: n.jsx(j, { to: "/contact", className: "hero-btn-main", children: e.getInTouch }) })] }), n.jsx("div", { className: "home-hero__image", children: n.jsx("img", { src: $0, alt: "Manufacturing Workers", className: "hero-workers-img" }) })] }) }), n.jsx("div", { className: "service-content-section", children: n.jsxs("div", { className: "container", children: [n.jsxs("div", { className: "choose-best-split", children: [n.jsxs("div", { className: "cbs-left", children: [n.jsx("h2", { children: e.mnChooseTitle }), n.jsx("p", { children: e.mnChooseP1 }), n.jsx("p", { children: e.mnChooseP2 }), n.jsx("p", { children: e.mnChooseP3 })] }), n.jsxs("div", { className: "cbs-right", style: { backgroundColor: "var(--color-primary)" }, children: [n.jsxs("div", { className: "cbs-logo", children: [n.jsx("span", { className: "logo-main", children: "Smaar Elysium" }), n.jsx("span", { children: "®" }), n.jsx("span", { className: "logo-slogan", children: e.mnLogoSlogan })] }), n.jsx("div", { className: "cbs-content", children: n.jsxs("div", { className: "cbs-text-block", children: [n.jsx("span", { className: "cbs-go-beyond", children: e.mnGrid1 }), n.jsx("span", { className: "cbs-ordinary", children: e.mnGrid2 }), n.jsx("span", { className: "cbs-find", children: e.mnGrid3 }), n.jsx("span", { className: "cbs-executives", children: e.mnGrid4 })] }) })] })] }), n.jsxs("div", { className: "build-team-split", children: [n.jsx("div", { className: "bts-left", children: n.jsx("img", { src: Y0, alt: "Manufacturing Team", className: "bts-workers-img" }) }), n.jsxs("div", { className: "bts-right", children: [n.jsx("h3", { children: e.mnBtsTitle }), n.jsx("p", { children: e.mnBtsP1 }), n.jsx("p", { children: e.mnBtsP2 }), n.jsx(j, { to: "/contact", className: "hero-btn-main", style: { background: "#fff", color: "#1f2937" }, children: e.requestStaff })] })] }), n.jsxs("div", { className: "domains-container", children: [n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.mnDom1Title }), n.jsx("p", { children: e.mnDom1Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.mnDom2Title }), n.jsx("p", { children: e.mnDom2Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.mnDom3Title }), n.jsx("p", { children: e.mnDom3Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.mnDom4Title }), n.jsx("p", { children: e.mnDom4Desc })] }) })] }), n.jsxs("section", { className: "why-choose-us-section", children: [n.jsx("h2", { className: "section-title", children: e.whyChooseUs }), n.jsxs("div", { className: "benefits-grid", children: [n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.mnBen1Title }), n.jsx("p", { children: e.mnBen1Desc })] }), n.jsxs("div", { className: "benefit-card bg-gray", children: [n.jsx("h3", { children: e.mnBen2Title }), n.jsx("p", { children: e.mnBen2Desc })] }), n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.mnBen3Title }), n.jsx("p", { children: e.mnBen3Desc })] })] })] }), n.jsx("div", { className: "quote-section", children: n.jsxs("div", { className: "quote-container", children: [n.jsx("div", { className: "quote-label", children: e.requestQuote }), n.jsx("h2", { className: "quote-title", children: e.quickFollowUp }), n.jsx("p", { className: "quote-text", children: e.fillForm }), n.jsx(j, { to: "/contact", className: "quote-btn", children: e.bookNow })] }) }), n.jsxs("section", { className: "faq-section", children: [n.jsx("h2", { className: "faq-main-title", children: e.commonFaqTitle || "FAQ" }), n.jsx("p", { className: "faq-subtitle", children: e.commonFaqSubtitle || "MOST ASKED QUESTIONS." }), n.jsx("div", { className: "faq-list", children: s.map((r, o) => n.jsxs("div", { className: `faq-item ${t === o ? "active" : ""}`, children: [n.jsxs("div", { className: "faq-question-btn", onClick: () => i(t === o ? -1 : o), children: [n.jsx("span", { className: "faq-icon", children: t === o ? "−" : "+" }), n.jsx("span", { className: "faq-question-text", children: r.question })] }), n.jsx("div", { className: "faq-answer-container", children: n.jsx("div", { className: "faq-answer-content", children: n.jsx("p", { children: r.answer }) }) })] }, o)) })] })] }) }), n.jsxs("div", { className: "insights-section", children: [n.jsx("h2", { className: "insights-title", children: "Manufacturing Insights" }), n.jsxs("div", { className: "insights-grid", children: [n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: V0, alt: "Insight 1" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight1Title }), n.jsx("p", { children: e.csInsight1Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: K0, alt: "Insight 2" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight2Title }), n.jsx("p", { children: e.csInsight2Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: X0, alt: "Insight 3" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight3Title }), n.jsx("p", { children: e.csInsight3Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: J0, alt: "Insight 4" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight4Title }), n.jsx("p", { children: e.csInsight4Desc })] })] })] })] }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        /* Quote Section Styles */
        .quote-section {
          background: linear-gradient(135deg, #001a4d 0%, #003d99 100%);
          border-radius: 24px;
          padding: 50px;
          margin: 80px 0;
          margin-top: 60px;
          position: relative;
        }
        .quote-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
        .quote-label {
          position: absolute;
          top: -15px;
          left: 30px;
          background: #001a4d;
          color: #fff;
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .quote-title {
          font-size: clamp(2rem, 5vw, 3rem);
          color: #fff;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
        }
        .quote-text {
          color: #fff;
          font-size: 1.05rem;
          line-height: 1.6;
          margin: 20px 0 30px;
          max-width: 600px;
        }
        .quote-btn {
          display: inline-block;
          background: #fff;
          color: #001a4d;
          padding: 14px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .quote-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        @media (max-width: 768px) {
          .quote-section {
            padding: 40px 25px;
            margin: 60px 0;
          }
          .quote-container {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .quote-label {
            position: static;
            display: inline-block;
            margin-bottom: 20px;
          }
          .quote-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}
        })]
    })
}, ey = "/assets/plumbing-hero-ChKLIFJq.png", ty = "/assets/mep_bts-DAjUdqh5.jpg", ny = "/assets/mep_insight_1-CSQ-DIPI.jpg", iy = "/assets/mep_insight_2-Deh9buFK.jpg", sy = "/assets/mep_insight_3-DNP49qHa.jpg", ry = "/assets/mep_insight_4-DOfcxPN4.jpg", oy = () => {
    const { t: e } = U(), [t, i] = z.useState(0), s = [{ question: e.mepFaqQ1, answer: e.mepFaqA1 }, { question: e.mepFaqQ2, answer: e.mepFaqA2 }, { question: e.mepFaqQ3, answer: e.mepFaqA3 }, { question: e.mepFaqQ4, answer: e.mepFaqA4 }, { question: e.mepFaqQ5, answer: e.mepFaqA5 }, { question: e.mepFaqQ6, answer: e.mepFaqA6 }]; return n.jsxs("div", {
        className: "oil-gas-page recruitment-page", children: [n.jsx(J, { title: e.mpSEOTitle, description: e.mpSEODesc, keywords: "MEP manpower UAE, electrical technicians staffing, plumbing workers Dubai, HVAC specialists UAE, MEP supervisors staffing Dubai", canonical: "https://www.smaarelysium.com/mep", faqSchema: s.map(r => ({ question: r.question, answer: r.answer })) }), n.jsx("div", { className: "container hero-wrapper", children: n.jsxs("section", { className: "home-hero", children: [n.jsxs("div", { className: "home-hero__content", children: [n.jsx("h1", { className: "home-hero__title", children: e.mpHeroTitle }), n.jsx("p", { className: "home-hero__text", children: e.mpHeroText }), n.jsx("div", { className: "home-hero__actions", children: n.jsx(j, { to: "/contact", className: "hero-btn-main", children: e.getInTouch }) })] }), n.jsx("div", { className: "home-hero__image", children: n.jsx("img", { src: ey, alt: "MEP Technicians", className: "hero-workers-img" }) })] }) }), n.jsx("div", { className: "service-content-section", children: n.jsxs("div", { className: "container", children: [n.jsxs("div", { className: "choose-best-split", children: [n.jsxs("div", { className: "cbs-left", children: [n.jsx("h2", { children: e.mpChooseTitle }), n.jsx("p", { children: e.mpChooseP1 }), n.jsx("p", { children: e.mpChooseP2 }), n.jsx("p", { children: e.mpChooseP3 })] }), n.jsxs("div", { className: "cbs-right", style: { backgroundColor: "var(--color-primary)" }, children: [n.jsxs("div", { className: "cbs-logo", children: [n.jsx("span", { className: "logo-main", children: "Smaar Elysium" }), n.jsx("span", { children: "®" }), n.jsx("span", { className: "logo-slogan", children: e.mpLogoSlogan })] }), n.jsx("div", { className: "cbs-content", children: n.jsxs("div", { className: "cbs-text-block", children: [n.jsx("span", { className: "cbs-go-beyond", children: e.mpGrid1 }), n.jsx("span", { className: "cbs-ordinary", children: e.mpGrid2 }), n.jsx("span", { className: "cbs-find", children: e.mpGrid3 }), n.jsx("span", { className: "cbs-executives", children: e.mpGrid4 })] }) })] })] }), n.jsxs("div", { className: "build-team-split", children: [n.jsx("div", { className: "bts-left", children: n.jsx("img", { src: ty, alt: "MEP Team", className: "bts-workers-img" }) }), n.jsxs("div", { className: "bts-right", children: [n.jsx("h3", { children: e.mpBtsTitle }), n.jsx("p", { children: e.mpBtsP1 }), n.jsx("p", { children: e.mpBtsP2 }), n.jsx(j, { to: "/contact", className: "hero-btn-main", style: { background: "#fff", color: "#1f2937" }, children: e.requestStaff })] })] }), n.jsxs("div", { className: "domains-container", children: [n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.mpDom1Title }), n.jsx("p", { children: e.mpDom1Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.mpDom2Title }), n.jsx("p", { children: e.mpDom2Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.mpDom3Title }), n.jsx("p", { children: e.mpDom3Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.mpDom4Title }), n.jsx("p", { children: e.mpDom4Desc })] }) })] }), n.jsxs("section", { className: "why-choose-us-section", children: [n.jsx("h2", { className: "section-title", children: e.whyChooseUs }), n.jsxs("div", { className: "benefits-grid", children: [n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.mpBen1Title }), n.jsx("p", { children: e.mpBen1Desc })] }), n.jsxs("div", { className: "benefit-card bg-gray", children: [n.jsx("h3", { children: e.mpBen2Title }), n.jsx("p", { children: e.mpBen2Desc })] }), n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.mpBen3Title }), n.jsx("p", { children: e.mpBen3Desc })] })] })] }), n.jsxs("section", { className: "faq-section", children: [n.jsx("h2", { className: "faq-main-title", children: e.commonFaqTitle || "FAQ" }), n.jsx("p", { className: "faq-subtitle", children: e.commonFaqSubtitle || "MOST ASKED QUESTIONS." }), n.jsx("div", { className: "faq-list", children: s.map((r, o) => n.jsxs("div", { className: `faq-item ${t === o ? "active" : ""}`, children: [n.jsxs("div", { className: "faq-question-btn", onClick: () => i(t === o ? -1 : o), children: [n.jsx("span", { className: "faq-icon", children: t === o ? "−" : "+" }), n.jsx("span", { className: "faq-question-text", children: r.question })] }), n.jsx("div", { className: "faq-answer-container", children: n.jsx("div", { className: "faq-answer-content", children: n.jsx("p", { children: r.answer }) }) })] }, o)) })] })] }) }), n.jsxs("div", { className: "insights-section", children: [n.jsx("h2", { className: "insights-title", children: "MEP Insights" }), n.jsx("div", { className: "insights-grid", children: [1, 2, 3, 4].map(r => n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: r === 1 ? ny : r === 2 ? iy : r === 3 ? sy : ry, alt: `Insight ${r}` }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e[`csInsight${r}Title`] }), n.jsx("p", { children: e[`csInsight${r}Desc`] })] })] }, r)) })] }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        /* Quote Section Styles */
        .quote-section {
          background: linear-gradient(135deg, #001a4d 0%, #003d99 100%);
          border-radius: 24px;
          padding: 50px;
          margin: 80px 0;
          margin-top: 60px;
          position: relative;
        }
        .quote-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
        .quote-label {
          position: absolute;
          top: -15px;
          left: 30px;
          background: #001a4d;
          color: #fff;
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .quote-title {
          font-size: clamp(2rem, 5vw, 3rem);
          color: #fff;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
        }
        .quote-text {
          color: #fff;
          font-size: 1.05rem;
          line-height: 1.6;
          margin: 20px 0 30px;
          max-width: 600px;
        }
        .quote-btn {
          display: inline-block;
          background: #fff;
          color: #001a4d;
          padding: 14px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .quote-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        @media (max-width: 768px) {
          .quote-section {
            padding: 40px 25px;
            margin: 60px 0;
          }
          .quote-container {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .quote-label {
            position: static;
            display: inline-block;
            margin-bottom: 20px;
          }
          .quote-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}
        })]
    })
}, ay = "/assets/Buildinghero-B70UW5bE.png", fc = "/assets/building_contract_team-DBvhbRUx.png", ly = "/assets/bc_insight_2-LEI_ENpH.png", cy = "/assets/bc_insight_3-D-Wvte4g.png", dy = "/assets/bc_insight_4-CYpT0hFQ.png", uy = () => {
    const { t: e } = U(), [t, i] = z.useState(0), s = [{ question: e.bcFaqQ1, answer: e.bcFaqA1 }, { question: e.bcFaqQ2, answer: e.bcFaqA2 }, { question: e.bcFaqQ3, answer: e.bcFaqA3 }, { question: e.bcFaqQ4, answer: e.bcFaqA4 }, { question: e.bcFaqQ5, answer: e.bcFaqA5 }, { question: e.bcFaqQ6, answer: e.bcFaqA6 }]; return n.jsxs("div", {
        className: "building-contract-page recruitment-page", children: [n.jsx(J, { title: e.bcSEOTitle, description: e.bcSEODesc, keywords: "building contract manpower UAE, construction staffing Dubai, civil engineering workforce, building contractors UAE, construction site workers Dubai", canonical: "https://www.smaarelysium.com/building-contract", faqSchema: s.map(r => ({ question: r.question, answer: r.answer })) }), n.jsx("div", { className: "container hero-wrapper", children: n.jsxs("section", { className: "home-hero", children: [n.jsxs("div", { className: "home-hero__content", children: [n.jsx("h1", { className: "home-hero__title", children: e.bcHeroTitle }), n.jsx("p", { className: "home-hero__text", children: e.bcHeroText }), n.jsx("div", { className: "home-hero__actions", children: n.jsx(j, { to: "/contact", className: "hero-btn-main", children: e.getInTouch }) })] }), n.jsx("div", { className: "home-hero__image", children: n.jsx("img", { src: ay, alt: "Building Contract Hero", className: "hero-workers-img" }) })] }) }), n.jsx("div", { className: "service-content-section", children: n.jsxs("div", { className: "container", children: [n.jsxs("div", { className: "choose-best-split", children: [n.jsxs("div", { className: "cbs-left", children: [n.jsx("h2", { children: e.bcChooseTitle }), n.jsx("p", { children: e.bcChooseP1 }), n.jsx("p", { children: e.bcChooseP2 }), n.jsx("p", { children: e.bcChooseP3 })] }), n.jsxs("div", { className: "cbs-right", style: { backgroundColor: "var(--color-primary)" }, children: [n.jsxs("div", { className: "cbs-logo", children: [n.jsx("span", { className: "logo-main", children: "Smaar Elysium" }), n.jsx("span", { children: "®" }), n.jsx("span", { className: "logo-slogan", children: e.bcLogoSlogan })] }), n.jsx("div", { className: "cbs-content", children: n.jsxs("div", { className: "cbs-text-block", children: [n.jsx("span", { className: "cbs-go-beyond", children: e.bcGrid1 }), n.jsx("span", { className: "cbs-ordinary", children: e.bcGrid2 }), n.jsx("span", { className: "cbs-find", children: e.bcGrid3 }), n.jsx("span", { className: "cbs-executives", children: e.bcGrid4 })] }) })] })] }), n.jsxs("div", { className: "build-team-split", children: [n.jsx("div", { className: "bts-left", children: n.jsx("img", { src: fc, alt: "Building Contract Team", className: "bts-workers-img" }) }), n.jsxs("div", { className: "bts-right", children: [n.jsx("h3", { children: e.bcBtsTitle }), n.jsx("p", { children: e.bcBtsP1 }), n.jsx("p", { children: e.bcBtsP2 }), n.jsx(j, { to: "/contact", className: "hero-btn-main", style: { background: "#fff", color: "#1f2937" }, children: e.requestStaff })] })] }), n.jsxs("div", { className: "domains-container", children: [n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.bcDom1Title }), n.jsx("p", { children: e.bcDom1Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.bcDom2Title }), n.jsx("p", { children: e.bcDom2Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.bcDom3Title }), n.jsx("p", { children: e.bcDom3Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.bcDom4Title }), n.jsx("p", { children: e.bcDom4Desc })] }) })] }), n.jsxs("section", { className: "why-choose-us-section", children: [n.jsx("h2", { className: "section-title", children: e.whyChooseUs }), n.jsxs("div", { className: "benefits-grid", children: [n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.bcBen1Title }), n.jsx("p", { children: e.bcBen1Desc })] }), n.jsxs("div", { className: "benefit-card bg-gray", children: [n.jsx("h3", { children: e.bcBen2Title }), n.jsx("p", { children: e.bcBen2Desc })] }), n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.bcBen3Title }), n.jsx("p", { children: e.bcBen3Desc })] })] })] }), n.jsx("div", { className: "quote-section", children: n.jsxs("div", { className: "quote-container", children: [n.jsx("div", { className: "quote-label", children: e.requestQuote }), n.jsx("h2", { className: "quote-title", children: e.quickFollowUp }), n.jsx("p", { className: "quote-text", children: e.fillForm }), n.jsx(j, { to: "/contact", className: "quote-btn", children: e.bookNow })] }) }), n.jsxs("section", { className: "faq-section", children: [n.jsx("h2", { className: "faq-main-title", children: e.commonFaqTitle || "FAQ" }), n.jsx("p", { className: "faq-subtitle", children: e.commonFaqSubtitle || "MOST ASKED QUESTIONS." }), n.jsx("div", { className: "faq-list", children: s.map((r, o) => n.jsxs("div", { className: `faq-item ${t === o ? "active" : ""}`, children: [n.jsxs("div", { className: "faq-question-btn", onClick: () => i(t === o ? -1 : o), children: [n.jsx("span", { className: "faq-icon", children: t === o ? "−" : "+" }), n.jsx("span", { className: "faq-question-text", children: r.question })] }), n.jsx("div", { className: "faq-answer-container", children: n.jsx("div", { className: "faq-answer-content", children: n.jsx("p", { children: r.answer }) }) })] }, o)) })] })] }) }), n.jsxs("div", { className: "insights-section", children: [n.jsx("h2", { className: "insights-title", children: e.csInsightTitle }), n.jsxs("div", { className: "insights-grid", children: [n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: fc, alt: "Insight 1" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight1Title }), n.jsx("p", { children: e.csInsight1Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: ly, alt: "Insight 2" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight2Title }), n.jsx("p", { children: e.csInsight2Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: cy, alt: "Insight 3" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight3Title }), n.jsx("p", { children: e.csInsight3Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: dy, alt: "Insight 4" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight4Title }), n.jsx("p", { children: e.csInsight4Desc })] })] })] })] }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        /* Quote Section Styles */
        .quote-section {
          background: linear-gradient(135deg, #001a4d 0%, #003d99 100%);
          border-radius: 24px;
          padding: 50px;
          margin: 80px 0;
          margin-top: 60px;
          position: relative;
        }
        .quote-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
        .quote-label {
          position: absolute;
          top: -15px;
          left: 30px;
          background: #001a4d;
          color: #fff;
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .quote-title {
          font-size: clamp(2rem, 5vw, 3rem);
          color: #fff;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
        }
        .quote-text {
          color: #fff;
          font-size: 1.05rem;
          line-height: 1.6;
          margin: 20px 0 30px;
          max-width: 600px;
        }
        .quote-btn {
          display: inline-block;
          background: #fff;
          color: #001a4d;
          padding: 14px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .quote-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        @media (max-width: 768px) {
          .quote-section {
            padding: 40px 25px;
            margin: 60px 0;
          }
          .quote-container {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .quote-label {
            position: static;
            display: inline-block;
            margin-bottom: 20px;
          }
          .quote-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}
        })]
    })
}, my = "/assets/Railwayhero-bO5VqM1_.png", gc = "/assets/railway_contract_team-BuKbph9k.png", py = "/assets/rc_insight_2-Dh63MN_6.png", hy = "/assets/rc_insight_3-CS4RsD5H.png", fy = "/assets/rc_insight_4-CHhIR6jt.png", gy = () => {
    const { t: e } = U(), [t, i] = z.useState(0), s = [{ question: e.rwFaqQ1, answer: e.rwFaqA1 }, { question: e.rwFaqQ2, answer: e.rwFaqA2 }, { question: e.rwFaqQ3, answer: e.rwFaqA3 }, { question: e.rwFaqQ4, answer: e.rwFaqA4 }, { question: e.rwFaqQ5, answer: e.rwFaqA5 }, { question: e.rwFaqQ6, answer: e.rwFaqA6 }]; return n.jsxs("div", {
        className: "railway-contract-page recruitment-page", children: [n.jsx(J, { title: e.rcSEOTitle, description: e.rcSEODesc, keywords: "railway construction manpower UAE, track laying workers Dubai, OHE technicians staffing, signal and telecom railway staff, railway safety supervisors UAE", canonical: "https://www.smaarelysium.com/railway-contract", faqSchema: s.map(r => ({ question: r.question, answer: r.answer })) }), n.jsx("div", { className: "container hero-wrapper", children: n.jsxs("section", { className: "home-hero", children: [n.jsxs("div", { className: "home-hero__content", children: [n.jsx("h1", { className: "home-hero__title", children: e.rcHeroTitle }), n.jsx("p", { className: "home-hero__text", children: e.rcHeroText }), n.jsx("div", { className: "home-hero__actions", children: n.jsx(j, { to: "/contact", className: "hero-btn-main", children: e.getInTouch }) })] }), n.jsx("div", { className: "home-hero__image", children: n.jsx("img", { src: my, alt: "Railway Contract Hero", className: "hero-workers-img" }) })] }) }), n.jsx("div", { className: "service-content-section", children: n.jsxs("div", { className: "container", children: [n.jsxs("div", { className: "choose-best-split", children: [n.jsxs("div", { className: "cbs-left", children: [n.jsx("h2", { children: e.rcChooseTitle }), n.jsx("p", { children: e.rcChooseP1 }), n.jsx("p", { children: e.rcChooseP2 }), n.jsx("p", { children: e.rcChooseP3 })] }), n.jsxs("div", { className: "cbs-right", style: { backgroundColor: "var(--color-primary)" }, children: [n.jsxs("div", { className: "cbs-logo", children: [n.jsx("span", { className: "logo-main", children: "Smaar Elysium" }), n.jsx("span", { children: "®" }), n.jsx("span", { className: "logo-slogan", children: e.rcLogoSlogan })] }), n.jsx("div", { className: "cbs-content", children: n.jsxs("div", { className: "cbs-text-block", children: [n.jsx("span", { className: "cbs-go-beyond", children: e.rcGrid1 }), n.jsx("span", { className: "cbs-ordinary", children: e.rcGrid2 }), n.jsx("span", { className: "cbs-find", children: e.rcGrid3 }), n.jsx("span", { className: "cbs-executives", children: e.rcGrid4 })] }) })] })] }), n.jsxs("div", { className: "build-team-split", children: [n.jsx("div", { className: "bts-left", children: n.jsx("img", { src: gc, alt: "Railway Contract Team", className: "bts-workers-img" }) }), n.jsxs("div", { className: "bts-right", children: [n.jsx("h3", { children: e.rcBtsTitle }), n.jsx("p", { children: e.rcBtsP1 }), n.jsx("p", { children: e.rcBtsP2 }), n.jsx(j, { to: "/contact", className: "hero-btn-main", style: { background: "#fff", color: "#1f2937" }, children: e.requestStaff })] })] }), n.jsxs("div", { className: "domains-container", children: [n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.rcDom1Title }), n.jsx("p", { children: e.rcDom1Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.rcDom2Title }), n.jsx("p", { children: e.rcDom2Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.rcDom3Title }), n.jsx("p", { children: e.rcDom3Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.rcDom4Title }), n.jsx("p", { children: e.rcDom4Desc })] }) })] }), n.jsxs("section", { className: "why-choose-us-section", children: [n.jsx("h2", { className: "section-title", children: e.whyChooseUs }), n.jsxs("div", { className: "benefits-grid", children: [n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.rcBen1Title }), n.jsx("p", { children: e.rcBen1Desc })] }), n.jsxs("div", { className: "benefit-card bg-gray", children: [n.jsx("h3", { children: e.rcBen2Title }), n.jsx("p", { children: e.rcBen2Desc })] }), n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.rcBen3Title }), n.jsx("p", { children: e.rcBen3Desc })] })] })] }), n.jsx("div", { className: "quote-section", children: n.jsxs("div", { className: "quote-container", children: [n.jsx("div", { className: "quote-label", children: e.requestQuote }), n.jsx("h2", { className: "quote-title", children: e.quickFollowUp }), n.jsx("p", { className: "quote-text", children: e.fillForm }), n.jsx(j, { to: "/contact", className: "quote-btn", children: e.bookNow })] }) }), n.jsxs("section", { className: "faq-section", children: [n.jsx("h2", { className: "faq-main-title", children: e.commonFaqTitle || "FAQ" }), n.jsx("p", { className: "faq-subtitle", children: e.commonFaqSubtitle || "MOST ASKED QUESTIONS." }), n.jsx("div", { className: "faq-list", children: s.map((r, o) => n.jsxs("div", { className: `faq-item ${t === o ? "active" : ""}`, children: [n.jsxs("div", { className: "faq-question-btn", onClick: () => i(t === o ? -1 : o), children: [n.jsx("span", { className: "faq-icon", children: t === o ? "−" : "+" }), n.jsx("span", { className: "faq-question-text", children: r.question })] }), n.jsx("div", { className: "faq-answer-container", children: n.jsx("div", { className: "faq-answer-content", children: n.jsx("p", { children: r.answer }) }) })] }, o)) })] })] }) }), n.jsxs("div", { className: "insights-section", children: [n.jsx("h2", { className: "insights-title", children: e.csInsightTitle }), n.jsxs("div", { className: "insights-grid", children: [n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: gc, alt: "Insight 1" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight1Title }), n.jsx("p", { children: e.csInsight1Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: py, alt: "Insight 2" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight2Title }), n.jsx("p", { children: e.csInsight2Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: hy, alt: "Insight 3" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight3Title }), n.jsx("p", { children: e.csInsight3Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: fy, alt: "Insight 4" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight4Title }), n.jsx("p", { children: e.csInsight4Desc })] })] })] })] }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        /* Quote Section Styles */
        .quote-section {
          background: linear-gradient(135deg, #001a4d 0%, #003d99 100%);
          border-radius: 24px;
          padding: 50px;
          margin: 80px 0;
          margin-top: 60px;
          position: relative;
        }
        .quote-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
        .quote-label {
          position: absolute;
          top: -15px;
          left: 30px;
          background: #001a4d;
          color: #fff;
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .quote-title {
          font-size: clamp(2rem, 5vw, 3rem);
          color: #fff;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
        }
        .quote-text {
          color: #fff;
          font-size: 1.05rem;
          line-height: 1.6;
          margin: 20px 0 30px;
          max-width: 600px;
        }
        .quote-btn {
          display: inline-block;
          background: #fff;
          color: #001a4d;
          padding: 14px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .quote-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        @media (max-width: 768px) {
          .quote-section {
            padding: 40px 25px;
            margin: 60px 0;
          }
          .quote-container {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .quote-label {
            position: static;
            display: inline-block;
            margin-bottom: 20px;
          }
          .quote-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}
        })]
    })
}, xc = "/assets/steel_construction_team-D_bATH0h.png", xy = "/assets/sc_insight_2-ByfwsjJa.png", yy = "/assets/sc_insight_3-C7h0exfu.png", vy = "/assets/sc_insight_4-DMDvH92O.png", by = () => {
    const { t: e } = U(), [t, i] = z.useState(0), s = [{ question: e.scFaqQ1, answer: e.scFaqA1 }, { question: e.scFaqQ2, answer: e.scFaqA2 }, { question: e.scFaqQ3, answer: e.scFaqA3 }, { question: e.scFaqQ4, answer: e.scFaqA4 }, { question: e.scFaqQ5, answer: e.scFaqA5 }, { question: e.scFaqQ6, answer: e.scFaqA6 }]; return n.jsxs("div", {
        className: "steel-construction-page recruitment-page", children: [n.jsx(J, { title: e.scSEOTitle, description: e.scSEODesc, keywords: "steel construction manpower UAE, structural steel workers Dubai, welders staffing UAE, steel fabricators agency, metal construction workers Dubai", canonical: "https://www.smaarelysium.com/steel-construction-contract", faqSchema: s.map(r => ({ question: r.question, answer: r.answer })) }), n.jsx("div", { className: "container hero-wrapper", children: n.jsxs("section", { className: "home-hero", children: [n.jsxs("div", { className: "home-hero__content", children: [n.jsx("h1", { className: "home-hero__title", children: e.scHeroTitle }), n.jsx("p", { className: "home-hero__text", children: e.scHeroText }), n.jsx("div", { className: "home-hero__actions", children: n.jsx(j, { to: "/contact", className: "hero-btn-main", children: e.getInTouch }) })] }), n.jsx("div", { className: "home-hero__image", children: n.jsx("img", { src: hx, alt: "Steel Construction Hero", className: "hero-workers-img" }) })] }) }), n.jsx("div", { className: "service-content-section", children: n.jsxs("div", { className: "container", children: [n.jsxs("div", { className: "choose-best-split", children: [n.jsxs("div", { className: "cbs-left", children: [n.jsx("h2", { children: e.scChooseTitle }), n.jsx("p", { children: e.scChooseP1 }), n.jsx("p", { children: e.scChooseP2 }), n.jsx("p", { children: e.scChooseP3 })] }), n.jsxs("div", { className: "cbs-right", style: { backgroundColor: "var(--color-primary)" }, children: [n.jsxs("div", { className: "cbs-logo", children: [n.jsx("span", { className: "logo-main", children: "Smaar Elysium" }), n.jsx("span", { children: "®" }), n.jsx("span", { className: "logo-slogan", children: e.scLogoSlogan })] }), n.jsx("div", { className: "cbs-content", children: n.jsxs("div", { className: "cbs-text-block", children: [n.jsx("span", { className: "cbs-go-beyond", children: e.scGrid1 }), n.jsx("span", { className: "cbs-ordinary", children: e.scGrid2 }), n.jsx("span", { className: "cbs-find", children: e.scGrid3 }), n.jsx("span", { className: "cbs-executives", children: e.scGrid4 })] }) })] })] }), n.jsxs("div", { className: "build-team-split", children: [n.jsx("div", { className: "bts-left", children: n.jsx("img", { src: xc, alt: "Steel Construction Team", className: "bts-workers-img" }) }), n.jsxs("div", { className: "bts-right", children: [n.jsx("h3", { children: e.scBtsTitle }), n.jsx("p", { children: e.scBtsP1 }), n.jsx("p", { children: e.scBtsP2 }), n.jsx(j, { to: "/contact", className: "hero-btn-main", style: { background: "#fff", color: "#1f2937" }, children: e.requestStaff })] })] }), n.jsxs("div", { className: "domains-container", children: [n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.scDom1Title }), n.jsx("p", { children: e.scDom1Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.scDom2Title }), n.jsx("p", { children: e.scDom2Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.scDom3Title }), n.jsx("p", { children: e.scDom3Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.scDom4Title }), n.jsx("p", { children: e.scDom4Desc })] }) })] }), n.jsxs("section", { className: "why-choose-us-section", children: [n.jsx("h2", { className: "section-title", children: e.whyChooseUs }), n.jsxs("div", { className: "benefits-grid", children: [n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.scBen1Title }), n.jsx("p", { children: e.scBen1Desc })] }), n.jsxs("div", { className: "benefit-card bg-gray", children: [n.jsx("h3", { children: e.scBen2Title }), n.jsx("p", { children: e.scBen2Desc })] }), n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.scBen3Title }), n.jsx("p", { children: e.scBen3Desc })] })] })] }), n.jsx("div", { className: "quote-section", children: n.jsxs("div", { className: "quote-container", children: [n.jsx("div", { className: "quote-label", children: e.requestQuote }), n.jsx("h2", { className: "quote-title", children: e.quickFollowUp }), n.jsx("p", { className: "quote-text", children: e.fillForm }), n.jsx(j, { to: "/contact", className: "quote-btn", children: e.bookNow })] }) }), n.jsxs("section", { className: "faq-section", children: [n.jsx("h2", { className: "faq-main-title", children: e.commonFaqTitle || "FAQ" }), n.jsx("p", { className: "faq-subtitle", children: e.commonFaqSubtitle || "MOST ASKED QUESTIONS." }), n.jsx("div", { className: "faq-list", children: s.map((r, o) => n.jsxs("div", { className: `faq-item ${t === o ? "active" : ""}`, children: [n.jsxs("div", { className: "faq-question-btn", onClick: () => i(t === o ? -1 : o), children: [n.jsx("span", { className: "faq-icon", children: t === o ? "−" : "+" }), n.jsx("span", { className: "faq-question-text", children: r.question })] }), n.jsx("div", { className: "faq-answer-container", children: n.jsx("div", { className: "faq-answer-content", children: n.jsx("p", { children: r.answer }) }) })] }, o)) })] })] }) }), n.jsxs("div", { className: "insights-section", children: [n.jsx("h2", { className: "insights-title", children: e.csInsightTitle }), n.jsxs("div", { className: "insights-grid", children: [n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: xc, alt: "Insight 1" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight1Title }), n.jsx("p", { children: e.csInsight1Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: xy, alt: "Insight 2" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight2Title }), n.jsx("p", { children: e.csInsight2Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: yy, alt: "Insight 3" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight3Title }), n.jsx("p", { children: e.csInsight3Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: vy, alt: "Insight 4" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight4Title }), n.jsx("p", { children: e.csInsight4Desc })] })] })] })] }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        /* Quote Section Styles */
        .quote-section {
          background: linear-gradient(135deg, #001a4d 0%, #003d99 100%);
          border-radius: 24px;
          padding: 50px;
          margin: 80px 0;
          margin-top: 60px;
          position: relative;
        }
        .quote-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
        .quote-label {
          position: absolute;
          top: -15px;
          left: 30px;
          background: #001a4d;
          color: #fff;
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .quote-title {
          font-size: clamp(2rem, 5vw, 3rem);
          color: #fff;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
        }
        .quote-text {
          color: #fff;
          font-size: 1.05rem;
          line-height: 1.6;
          margin: 20px 0 30px;
          max-width: 600px;
        }
        .quote-btn {
          display: inline-block;
          background: #fff;
          color: #001a4d;
          padding: 14px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .quote-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        @media (max-width: 768px) {
          .quote-section {
            padding: 40px 25px;
            margin: 60px 0;
          }
          .quote-container {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .quote-label {
            position: static;
            display: inline-block;
            margin-bottom: 20px;
          }
          .quote-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}
        })]
    })
}, wy = "/assets/Electrichero-BIqvap8y.png", yc = "/assets/electric_mechanic_team-Dqu_CBCa.png", jy = "/assets/emc_insight_2-BJw3Yp6r.png", Ny = "/assets/emc_insight_3-uHmqsa0B.png", ky = "/assets/emc_insight_4-D5AmhO1-.png", Sy = () => {
    const { t: e } = U(), [t, i] = z.useState(0), s = [{ question: e.emFaqQ1, answer: e.emFaqA1 }, { question: e.emFaqQ2, answer: e.emFaqA2 }, { question: e.emFaqQ3, answer: e.emFaqA3 }, { question: e.emFaqQ4, answer: e.emFaqA4 }, { question: e.emFaqQ5, answer: e.emFaqA5 }, { question: e.emFaqQ6, answer: e.emFaqA6 }]; return n.jsxs("div", {
        className: "electric-mechanic-page recruitment-page", children: [n.jsx(J, { title: e.emSEOTitle, description: e.emSEODesc, keywords: "electrical mechanical manpower UAE, MEP staffing Dubai, industrial electricians UAE, mechanical fitters staffing, electrical engineering workforce Dubai", canonical: "https://www.smaarelysium.com/electric-mechanic-contract", faqSchema: s.map(r => ({ question: r.question, answer: r.answer })) }), n.jsx("div", { className: "container hero-wrapper", children: n.jsxs("section", { className: "home-hero", children: [n.jsxs("div", { className: "home-hero__content", children: [n.jsx("h1", { className: "home-hero__title", children: e.emHeroTitle }), n.jsx("p", { className: "home-hero__text", children: e.emHeroText }), n.jsx("div", { className: "home-hero__actions", children: n.jsx(j, { to: "/contact", className: "hero-btn-main", children: e.getInTouch }) })] }), n.jsx("div", { className: "home-hero__image", children: n.jsx("img", { src: wy, alt: "Electric Mechanic Hero", className: "hero-workers-img" }) })] }) }), n.jsx("div", { className: "service-content-section", children: n.jsxs("div", { className: "container", children: [n.jsxs("div", { className: "choose-best-split", children: [n.jsxs("div", { className: "cbs-left", children: [n.jsx("h2", { children: e.emChooseTitle }), n.jsx("p", { children: e.emChooseP1 }), n.jsx("p", { children: e.emChooseP2 }), n.jsx("p", { children: e.emChooseP3 })] }), n.jsxs("div", { className: "cbs-right", style: { backgroundColor: "var(--color-primary)" }, children: [n.jsxs("div", { className: "cbs-logo", children: [n.jsx("span", { className: "logo-main", children: "Smaar Elysium" }), n.jsx("span", { children: "®" }), n.jsx("span", { className: "logo-slogan", children: e.emLogoSlogan })] }), n.jsx("div", { className: "cbs-content", children: n.jsxs("div", { className: "cbs-text-block", children: [n.jsx("span", { className: "cbs-go-beyond", children: e.emGrid1 }), n.jsx("span", { className: "cbs-ordinary", children: e.emGrid2 }), n.jsx("span", { className: "cbs-find", children: e.emGrid3 }), n.jsx("span", { className: "cbs-executives", children: e.emGrid4 })] }) })] })] }), n.jsxs("div", { className: "build-team-split", children: [n.jsx("div", { className: "bts-left", children: n.jsx("img", { src: yc, alt: "Electric Mechanic Team", className: "bts-workers-img" }) }), n.jsxs("div", { className: "bts-right", children: [n.jsx("h3", { children: e.emBtsTitle }), n.jsx("p", { children: e.emBtsP1 }), n.jsx("p", { children: e.emBtsP2 }), n.jsx(j, { to: "/contact", className: "hero-btn-main", style: { background: "#fff", color: "#1f2937" }, children: e.requestStaff })] })] }), n.jsxs("div", { className: "domains-container", children: [n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.emDom1Title }), n.jsx("p", { children: e.emDom1Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.emDom2Title }), n.jsx("p", { children: e.emDom2Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.emDom3Title }), n.jsx("p", { children: e.emDom3Desc })] }) }), n.jsx("div", { className: "domain-box", children: n.jsxs("div", { className: "domain-content", children: [n.jsx("h3", { children: e.emDom4Title }), n.jsx("p", { children: e.emDom4Desc })] }) })] }), n.jsxs("section", { className: "why-choose-us-section", children: [n.jsx("h2", { className: "section-title", children: e.whyChooseUs }), n.jsxs("div", { className: "benefits-grid", children: [n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.emBen1Title }), n.jsx("p", { children: e.emBen1Desc })] }), n.jsxs("div", { className: "benefit-card bg-gray", children: [n.jsx("h3", { children: e.emBen2Title }), n.jsx("p", { children: e.emBen2Desc })] }), n.jsxs("div", { className: "benefit-card bg-red", children: [n.jsx("h3", { children: e.emBen3Title }), n.jsx("p", { children: e.emBen3Desc })] })] })] }), n.jsx("div", { className: "quote-section", children: n.jsxs("div", { className: "quote-container", children: [n.jsx("div", { className: "quote-label", children: e.requestQuote }), n.jsx("h2", { className: "quote-title", children: e.quickFollowUp }), n.jsx("p", { className: "quote-text", children: e.fillForm }), n.jsx(j, { to: "/contact", className: "quote-btn", children: e.bookNow })] }) }), n.jsxs("section", { className: "faq-section", children: [n.jsx("h2", { className: "faq-main-title", children: e.commonFaqTitle || "FAQ" }), n.jsx("p", { className: "faq-subtitle", children: e.commonFaqSubtitle || "MOST ASKED QUESTIONS." }), n.jsx("div", { className: "faq-list", children: s.map((r, o) => n.jsxs("div", { className: `faq-item ${t === o ? "active" : ""}`, children: [n.jsxs("div", { className: "faq-question-btn", onClick: () => i(t === o ? -1 : o), children: [n.jsx("span", { className: "faq-icon", children: t === o ? "−" : "+" }), n.jsx("span", { className: "faq-question-text", children: r.question })] }), n.jsx("div", { className: "faq-answer-container", children: n.jsx("div", { className: "faq-answer-content", children: n.jsx("p", { children: r.answer }) }) })] }, o)) })] })] }) }), n.jsxs("div", { className: "insights-section", children: [n.jsx("h2", { className: "insights-title", children: e.csInsightTitle }), n.jsxs("div", { className: "insights-grid", children: [n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: yc, alt: "Insight 1" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight1Title }), n.jsx("p", { children: e.csInsight1Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: jy, alt: "Insight 2" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight2Title }), n.jsx("p", { children: e.csInsight2Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: Ny, alt: "Insight 3" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight3Title }), n.jsx("p", { children: e.csInsight3Desc })] })] }), n.jsxs("div", { className: "insight-card", children: [n.jsx("div", { className: "insight-image-wrap", children: n.jsx("img", { src: ky, alt: "Insight 4" }) }), n.jsxs("div", { className: "insight-content", children: [n.jsx("h3", { children: e.csInsight4Title }), n.jsx("p", { children: e.csInsight4Desc })] })] })] })] }), n.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: `
        /* Quote Section Styles */
        .quote-section {
          background: linear-gradient(135deg, #001a4d 0%, #003d99 100%);
          border-radius: 24px;
          padding: 50px;
          margin: 80px 0;
          margin-top: 60px;
          position: relative;
        }
        .quote-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
        .quote-label {
          position: absolute;
          top: -15px;
          left: 30px;
          background: #001a4d;
          color: #fff;
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .quote-title {
          font-size: clamp(2rem, 5vw, 3rem);
          color: #fff;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
        }
        .quote-text {
          color: #fff;
          font-size: 1.05rem;
          line-height: 1.6;
          margin: 20px 0 30px;
          max-width: 600px;
        }
        .quote-btn {
          display: inline-block;
          background: #fff;
          color: #001a4d;
          padding: 14px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .quote-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        @media (max-width: 768px) {
          .quote-section {
            padding: 40px 25px;
            margin: 60px 0;
          }
          .quote-container {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .quote-label {
            position: static;
            display: inline-block;
            margin-bottom: 20px;
          }
          .quote-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}
        })]
    })
}, Ir = () => n.jsxs("div", { style: { padding: "100px 0", textAlign: "center" }, children: [n.jsx("h1", { children: "Manpower Services" }), n.jsx("p", { children: "Comprehensive staffing solutions for your business." })] }), vc = () => n.jsxs("div", { style: { padding: "100px 0", textAlign: "center" }, children: [n.jsx("h1", { children: "Sectors We Serve" }), n.jsx("p", { children: "Industry-specific expertise across the UAE." })] }); function qy() { return n.jsx(gg, { children: n.jsxs(Kg, { children: [n.jsx(bg, {}), n.jsx(cg, { children: n.jsxs(B, { path: "/", element: n.jsx(ax, {}), children: [n.jsx(B, { index: !0, element: n.jsx(hc, {}) }), n.jsx(B, { path: "services", element: n.jsx(Ir, {}) }), n.jsx(B, { path: "sectors", element: n.jsx(vc, {}) }), n.jsx(B, { path: "clients", element: n.jsx(hc, {}) }), n.jsx(B, { path: "insights", element: n.jsx(Ir, {}) }), n.jsx(B, { path: "book-manpower", element: n.jsx(bx, {}) }), n.jsx(B, { path: "services/manpower-supply", element: n.jsx(Ex, {}) }), n.jsx(B, { path: "services/:id", element: n.jsx(Ir, {}) }), n.jsx(B, { path: "sectors/:id", element: n.jsx(vc, {}) }), n.jsx(B, { path: "/recruitment", element: n.jsx(Tx, {}) }), n.jsx(B, { path: "/contract-staffing", element: n.jsx(Px, {}) }), n.jsx(B, { path: "/executive-search", element: n.jsx(Hx, {}) }), n.jsx(B, { path: "/hr-outsourcing", element: n.jsx(Yx, {}) }), n.jsx(B, { path: "/security-solutions", element: n.jsx(t0, {}) }), n.jsx(B, { path: "/contact", element: n.jsx(r0, {}) }), n.jsx(B, { path: "/about", element: n.jsx(p0, {}) }), n.jsx(B, { path: "/projects", element: n.jsx(y0, {}) }), n.jsx(B, { path: "/oil-gas", element: n.jsx(S0, {}) }), n.jsx(B, { path: "/civil-construction", element: n.jsx(F0, {}) }), n.jsx(B, { path: "/facility-management", element: n.jsx(O0, {}) }), n.jsx(B, { path: "/logistics", element: n.jsx(G0, {}) }), n.jsx(B, { path: "/manufacture", element: n.jsx(Z0, {}) }), n.jsx(B, { path: "/mep", element: n.jsx(oy, {}) }), n.jsx(B, { path: "/building-contract", element: n.jsx(uy, {}) }), n.jsx(B, { path: "/railway-contract", element: n.jsx(gy, {}) }), n.jsx(B, { path: "/steel-construction", element: n.jsx(by, {}) }), n.jsx(B, { path: "/electric-mechanic", element: n.jsx(Sy, {}) })] }) })] }) }) } Br.createRoot(document.getElementById("root")).render(n.jsx(z.StrictMode, { children: n.jsx(Bu, { children: n.jsx(qy, {}) }) }));
