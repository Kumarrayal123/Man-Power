var Ku=Object.defineProperty;var Xu=(e,t,i)=>t in e?Ku(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var Qe=(e,t,i)=>Xu(e,typeof t!="symbol"?t+"":t,i);function Zu(e,t){for(var i=0;i<t.length;i++){const r=t[i];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const o=Object.getOwnPropertyDescriptor(r,s);o&&Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();function qr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lc={exports:{}},Ar={},cc={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yi=Symbol.for("react.element"),Ju=Symbol.for("react.portal"),ep=Symbol.for("react.fragment"),tp=Symbol.for("react.strict_mode"),np=Symbol.for("react.profiler"),ip=Symbol.for("react.provider"),rp=Symbol.for("react.context"),sp=Symbol.for("react.forward_ref"),op=Symbol.for("react.suspense"),ap=Symbol.for("react.memo"),lp=Symbol.for("react.lazy"),Oa=Symbol.iterator;function cp(e){return e===null||typeof e!="object"?null:(e=Oa&&e[Oa]||e["@@iterator"],typeof e=="function"?e:null)}var dc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uc=Object.assign,pc={};function kn(e,t,i){this.props=e,this.context=t,this.refs=pc,this.updater=i||dc}kn.prototype.isReactComponent={};kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mc(){}mc.prototype=kn.prototype;function Mo(e,t,i){this.props=e,this.context=t,this.refs=pc,this.updater=i||dc}var Ro=Mo.prototype=new mc;Ro.constructor=Mo;uc(Ro,kn.prototype);Ro.isPureReactComponent=!0;var Ma=Array.isArray,hc=Object.prototype.hasOwnProperty,Lo={current:null},fc={key:!0,ref:!0,__self:!0,__source:!0};function gc(e,t,i){var r,s={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)hc.call(t,r)&&!fc.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(l===1)s.children=i;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];s.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:yi,type:e,key:o,ref:a,props:s,_owner:Lo.current}}function dp(e,t){return{$$typeof:yi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Uo(e){return typeof e=="object"&&e!==null&&e.$$typeof===yi}function up(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return t[i]})}var Ra=/\/+/g;function Jr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?up(""+e.key):t.toString(36)}function $i(e,t,i,r,s){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case yi:case Ju:a=!0}}if(a)return a=e,s=s(a),e=r===""?"."+Jr(a,0):r,Ma(s)?(i="",e!=null&&(i=e.replace(Ra,"$&/")+"/"),$i(s,t,i,"",function(d){return d})):s!=null&&(Uo(s)&&(s=dp(s,i+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(Ra,"$&/")+"/")+e)),t.push(s)),1;if(a=0,r=r===""?".":r+":",Ma(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+Jr(o,l);a+=$i(o,t,i,c,s)}else if(c=cp(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+Jr(o,l++),a+=$i(o,t,i,c,s);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ei(e,t,i){if(e==null)return e;var r=[],s=0;return $i(e,r,"","",function(o){return t.call(i,o,s++)}),r}function pp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Yi={transition:null},mp={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Yi,ReactCurrentOwner:Lo};function xc(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:Ei,forEach:function(e,t,i){Ei(e,function(){t.apply(this,arguments)},i)},count:function(e){var t=0;return Ei(e,function(){t++}),t},toArray:function(e){return Ei(e,function(t){return t})||[]},only:function(e){if(!Uo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=kn;I.Fragment=ep;I.Profiler=np;I.PureComponent=Mo;I.StrictMode=tp;I.Suspense=op;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mp;I.act=xc;I.cloneElement=function(e,t,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=uc({},e.props),s=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Lo.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)hc.call(t,c)&&!fc.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=i;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:yi,type:e.type,key:s,ref:o,props:r,_owner:a}};I.createContext=function(e){return e={$$typeof:rp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ip,_context:e},e.Consumer=e};I.createElement=gc;I.createFactory=function(e){var t=gc.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:sp,render:e}};I.isValidElement=Uo;I.lazy=function(e){return{$$typeof:lp,_payload:{_status:-1,_result:e},_init:pp}};I.memo=function(e,t){return{$$typeof:ap,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Yi.transition;Yi.transition={};try{e()}finally{Yi.transition=t}};I.unstable_act=xc;I.useCallback=function(e,t){return he.current.useCallback(e,t)};I.useContext=function(e){return he.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return he.current.useDeferredValue(e)};I.useEffect=function(e,t){return he.current.useEffect(e,t)};I.useId=function(){return he.current.useId()};I.useImperativeHandle=function(e,t,i){return he.current.useImperativeHandle(e,t,i)};I.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return he.current.useMemo(e,t)};I.useReducer=function(e,t,i){return he.current.useReducer(e,t,i)};I.useRef=function(e){return he.current.useRef(e)};I.useState=function(e){return he.current.useState(e)};I.useSyncExternalStore=function(e,t,i){return he.current.useSyncExternalStore(e,t,i)};I.useTransition=function(){return he.current.useTransition()};I.version="18.3.1";cc.exports=I;var b=cc.exports;const W=qr(b),hp=Zu({__proto__:null,default:W},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp=b,gp=Symbol.for("react.element"),xp=Symbol.for("react.fragment"),yp=Object.prototype.hasOwnProperty,vp=fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wp={key:!0,ref:!0,__self:!0,__source:!0};function yc(e,t,i){var r,s={},o=null,a=null;i!==void 0&&(o=""+i),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)yp.call(t,r)&&!wp.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:gp,type:e,key:o,ref:a,props:s,_owner:vp.current}}Ar.Fragment=xp;Ar.jsx=yc;Ar.jsxs=yc;lc.exports=Ar;var n=lc.exports,Ps={},vc={exports:{}},Se={},wc={exports:{}},bc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,q){var A=_.length;_.push(q);e:for(;0<A;){var G=A-1>>>1,te=_[G];if(0<s(te,q))_[G]=q,_[A]=te,A=G;else break e}}function i(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var q=_[0],A=_.pop();if(A!==q){_[0]=A;e:for(var G=0,te=_.length,Ni=te>>>1;G<Ni;){var zt=2*(G+1)-1,Zr=_[zt],Ct=zt+1,Si=_[Ct];if(0>s(Zr,A))Ct<te&&0>s(Si,Zr)?(_[G]=Si,_[Ct]=A,G=Ct):(_[G]=Zr,_[zt]=A,G=zt);else if(Ct<te&&0>s(Si,A))_[G]=Si,_[Ct]=A,G=Ct;else break e}}return q}function s(_,q){var A=_.sortIndex-q.sortIndex;return A!==0?A:_.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],d=[],m=1,p=null,g=3,x=!1,y=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(_){for(var q=i(d);q!==null;){if(q.callback===null)r(d);else if(q.startTime<=_)r(d),q.sortIndex=q.expirationTime,t(c,q);else break;q=i(d)}}function v(_){if(w=!1,f(_),!y)if(i(c)!==null)y=!0,Kr(S);else{var q=i(d);q!==null&&Xr(v,q.startTime-_)}}function S(_,q){y=!1,w&&(w=!1,h(T),T=-1),x=!0;var A=g;try{for(f(q),p=i(c);p!==null&&(!(p.expirationTime>q)||_&&!Pe());){var G=p.callback;if(typeof G=="function"){p.callback=null,g=p.priorityLevel;var te=G(p.expirationTime<=q);q=e.unstable_now(),typeof te=="function"?p.callback=te:p===i(c)&&r(c),f(q)}else r(c);p=i(c)}if(p!==null)var Ni=!0;else{var zt=i(d);zt!==null&&Xr(v,zt.startTime-q),Ni=!1}return Ni}finally{p=null,g=A,x=!1}}var z=!1,C=null,T=-1,Q=5,P=-1;function Pe(){return!(e.unstable_now()-P<Q)}function zn(){if(C!==null){var _=e.unstable_now();P=_;var q=!0;try{q=C(!0,_)}finally{q?Cn():(z=!1,C=null)}}else z=!1}var Cn;if(typeof u=="function")Cn=function(){u(zn)};else if(typeof MessageChannel<"u"){var Pa=new MessageChannel,Gu=Pa.port2;Pa.port1.onmessage=zn,Cn=function(){Gu.postMessage(null)}}else Cn=function(){N(zn,0)};function Kr(_){C=_,z||(z=!0,Cn())}function Xr(_,q){T=N(function(){_(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,Kr(S))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return i(c)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var A=g;g=q;try{return _()}finally{g=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,q){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var A=g;g=_;try{return q()}finally{g=A}},e.unstable_scheduleCallback=function(_,q,A){var G=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?G+A:G):A=G,_){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=A+te,_={id:m++,callback:q,priorityLevel:_,startTime:A,expirationTime:te,sortIndex:-1},A>G?(_.sortIndex=A,t(d,_),i(c)===null&&_===i(d)&&(w?(h(T),T=-1):w=!0,Xr(v,A-G))):(_.sortIndex=te,t(c,_),y||x||(y=!0,Kr(S))),_},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(_){var q=g;return function(){var A=g;g=q;try{return _.apply(this,arguments)}finally{g=A}}}})(bc);wc.exports=bc;var bp=wc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp=b,Ne=bp;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jc=new Set,Jn={};function Bt(e,t){gn(e,t),gn(e+"Capture",t)}function gn(e,t){for(Jn[e]=t,e=0;e<t.length;e++)jc.add(t[e])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Os=Object.prototype.hasOwnProperty,kp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,La={},Ua={};function Np(e){return Os.call(Ua,e)?!0:Os.call(La,e)?!1:kp.test(e)?Ua[e]=!0:(La[e]=!0,!1)}function Sp(e,t,i,r){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ep(e,t,i,r){if(t===null||typeof t>"u"||Sp(e,t,i,r))return!0;if(r)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,i,r,s,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ho=/[\-:]([a-z])/g;function Fo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ho,Fo);oe[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ho,Fo);oe[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ho,Fo);oe[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Do(e,t,i,r){var s=oe.hasOwnProperty(t)?oe[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ep(t,i,s,r)&&(i=null),r||s===null?Np(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):s.mustUseProperty?e[s.propertyName]=i===null?s.type===3?!1:"":i:(t=s.attributeName,r=s.attributeNamespace,i===null?e.removeAttribute(t):(s=s.type,i=s===3||s===4&&i===!0?"":""+i,r?e.setAttributeNS(r,t,i):e.setAttribute(t,i))))}var rt=jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_i=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),Kt=Symbol.for("react.fragment"),Wo=Symbol.for("react.strict_mode"),Ms=Symbol.for("react.profiler"),kc=Symbol.for("react.provider"),Nc=Symbol.for("react.context"),Bo=Symbol.for("react.forward_ref"),Rs=Symbol.for("react.suspense"),Ls=Symbol.for("react.suspense_list"),$o=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),Sc=Symbol.for("react.offscreen"),Ha=Symbol.iterator;function Tn(e){return e===null||typeof e!="object"?null:(e=Ha&&e[Ha]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,es;function Hn(e){if(es===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);es=t&&t[1]||""}return`
`+es+e}var ts=!1;function ns(e,t){if(!e||ts)return"";ts=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),o=r.stack.split(`
`),a=s.length-1,l=o.length-1;1<=a&&0<=l&&s[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(s[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||s[a]!==o[l]){var c=`
`+s[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{ts=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?Hn(e):""}function _p(e){switch(e.tag){case 5:return Hn(e.type);case 16:return Hn("Lazy");case 13:return Hn("Suspense");case 19:return Hn("SuspenseList");case 0:case 2:case 15:return e=ns(e.type,!1),e;case 11:return e=ns(e.type.render,!1),e;case 1:return e=ns(e.type,!0),e;default:return""}}function Us(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kt:return"Fragment";case Gt:return"Portal";case Ms:return"Profiler";case Wo:return"StrictMode";case Rs:return"Suspense";case Ls:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nc:return(e.displayName||"Context")+".Consumer";case kc:return(e._context.displayName||"Context")+".Provider";case Bo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $o:return t=e.displayName||null,t!==null?t:Us(e.type)||"Memo";case ot:t=e._payload,e=e._init;try{return Us(e(t))}catch{}}return null}function zp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Us(t);case 8:return t===Wo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ec(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cp(e){var t=Ec(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,o=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zi(e){e._valueTracker||(e._valueTracker=Cp(e))}function _c(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),r="";return e&&(r=Ec(e)?e.checked?"true":"false":e.value),e=r,e!==i?(t.setValue(e),!0):!1}function or(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hs(e,t){var i=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Fa(e,t){var i=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;i=jt(t.value!=null?t.value:i),e._wrapperState={initialChecked:r,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zc(e,t){t=t.checked,t!=null&&Do(e,"checked",t,!1)}function Fs(e,t){zc(e,t);var i=jt(t.value),r=t.type;if(i!=null)r==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ds(e,t.type,i):t.hasOwnProperty("defaultValue")&&Ds(e,t.type,jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Da(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Ds(e,t,i){(t!=="number"||or(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Fn=Array.isArray;function ln(e,t,i,r){if(e=e.options,t){t={};for(var s=0;s<i.length;s++)t["$"+i[s]]=!0;for(i=0;i<e.length;i++)s=t.hasOwnProperty("$"+e[i].value),e[i].selected!==s&&(e[i].selected=s),s&&r&&(e[i].defaultSelected=!0)}else{for(i=""+jt(i),t=null,s=0;s<e.length;s++){if(e[s].value===i){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Ws(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wa(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(j(92));if(Fn(i)){if(1<i.length)throw Error(j(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:jt(i)}}function Cc(e,t){var i=jt(t.value),r=jt(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),r!=null&&(e.defaultValue=""+r)}function Ba(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Tc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Tc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ci,qc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,i,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ci=Ci||document.createElement("div"),Ci.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ci.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ei(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tp=["Webkit","ms","Moz","O"];Object.keys(Bn).forEach(function(e){Tp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bn[t]=Bn[e]})});function Ac(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||Bn.hasOwnProperty(e)&&Bn[e]?(""+t).trim():t+"px"}function Ic(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var r=i.indexOf("--")===0,s=Ac(i,t[i],r);i==="float"&&(i="cssFloat"),r?e.setProperty(i,s):e[i]=s}}var qp=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $s(e,t){if(t){if(qp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Ys(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vs=null;function Yo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qs=null,cn=null,dn=null;function $a(e){if(e=bi(e)){if(typeof Qs!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Rr(t),Qs(e.stateNode,e.type,t))}}function Pc(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Oc(){if(cn){var e=cn,t=dn;if(dn=cn=null,$a(e),t)for(e=0;e<t.length;e++)$a(t[e])}}function Mc(e,t){return e(t)}function Rc(){}var is=!1;function Lc(e,t,i){if(is)return e(t,i);is=!0;try{return Mc(e,t,i)}finally{is=!1,(cn!==null||dn!==null)&&(Rc(),Oc())}}function ti(e,t){var i=e.stateNode;if(i===null)return null;var r=Rr(i);if(r===null)return null;i=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(j(231,t,typeof i));return i}var Gs=!1;if(et)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){Gs=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{Gs=!1}function Ap(e,t,i,r,s,o,a,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(i,d)}catch(m){this.onError(m)}}var $n=!1,ar=null,lr=!1,Ks=null,Ip={onError:function(e){$n=!0,ar=e}};function Pp(e,t,i,r,s,o,a,l,c){$n=!1,ar=null,Ap.apply(Ip,arguments)}function Op(e,t,i,r,s,o,a,l,c){if(Pp.apply(this,arguments),$n){if($n){var d=ar;$n=!1,ar=null}else throw Error(j(198));lr||(lr=!0,Ks=d)}}function $t(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function Uc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ya(e){if($t(e)!==e)throw Error(j(188))}function Mp(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error(j(188));return t!==e?null:e}for(var i=e,r=t;;){var s=i.return;if(s===null)break;var o=s.alternate;if(o===null){if(r=s.return,r!==null){i=r;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===i)return Ya(s),e;if(o===r)return Ya(s),t;o=o.sibling}throw Error(j(188))}if(i.return!==r.return)i=s,r=o;else{for(var a=!1,l=s.child;l;){if(l===i){a=!0,i=s,r=o;break}if(l===r){a=!0,r=s,i=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===i){a=!0,i=o,r=s;break}if(l===r){a=!0,r=o,i=s;break}l=l.sibling}if(!a)throw Error(j(189))}}if(i.alternate!==r)throw Error(j(190))}if(i.tag!==3)throw Error(j(188));return i.stateNode.current===i?e:t}function Hc(e){return e=Mp(e),e!==null?Fc(e):null}function Fc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fc(e);if(t!==null)return t;e=e.sibling}return null}var Dc=Ne.unstable_scheduleCallback,Va=Ne.unstable_cancelCallback,Rp=Ne.unstable_shouldYield,Lp=Ne.unstable_requestPaint,K=Ne.unstable_now,Up=Ne.unstable_getCurrentPriorityLevel,Vo=Ne.unstable_ImmediatePriority,Wc=Ne.unstable_UserBlockingPriority,cr=Ne.unstable_NormalPriority,Hp=Ne.unstable_LowPriority,Bc=Ne.unstable_IdlePriority,Ir=null,Ye=null;function Fp(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Ir,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:Bp,Dp=Math.log,Wp=Math.LN2;function Bp(e){return e>>>=0,e===0?32:31-(Dp(e)/Wp|0)|0}var Ti=64,qi=4194304;function Dn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function dr(e,t){var i=e.pendingLanes;if(i===0)return 0;var r=0,s=e.suspendedLanes,o=e.pingedLanes,a=i&268435455;if(a!==0){var l=a&~s;l!==0?r=Dn(l):(o&=a,o!==0&&(r=Dn(o)))}else a=i&~s,a!==0?r=Dn(a):o!==0&&(r=Dn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if(r&4&&(r|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)i=31-He(t),s=1<<i,r|=e[i],t&=~s;return r}function $p(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yp(e,t){for(var i=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-He(o),l=1<<a,c=s[a];c===-1?(!(l&i)||l&r)&&(s[a]=$p(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Xs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $c(){var e=Ti;return Ti<<=1,!(Ti&4194240)&&(Ti=64),e}function rs(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function vi(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-He(t),e[t]=i}function Vp(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<i;){var s=31-He(i),o=1<<s;t[s]=0,r[s]=-1,e[s]=-1,i&=~o}}function Qo(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var r=31-He(i),s=1<<r;s&t|e[r]&t&&(e[r]|=t),i&=~s}}var M=0;function Yc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vc,Go,Qc,Gc,Kc,Zs=!1,Ai=[],mt=null,ht=null,ft=null,ni=new Map,ii=new Map,lt=[],Qp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qa(e,t){switch(e){case"focusin":case"focusout":mt=null;break;case"dragenter":case"dragleave":ht=null;break;case"mouseover":case"mouseout":ft=null;break;case"pointerover":case"pointerout":ni.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ii.delete(t.pointerId)}}function An(e,t,i,r,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:i,eventSystemFlags:r,nativeEvent:o,targetContainers:[s]},t!==null&&(t=bi(t),t!==null&&Go(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Gp(e,t,i,r,s){switch(t){case"focusin":return mt=An(mt,e,t,i,r,s),!0;case"dragenter":return ht=An(ht,e,t,i,r,s),!0;case"mouseover":return ft=An(ft,e,t,i,r,s),!0;case"pointerover":var o=s.pointerId;return ni.set(o,An(ni.get(o)||null,e,t,i,r,s)),!0;case"gotpointercapture":return o=s.pointerId,ii.set(o,An(ii.get(o)||null,e,t,i,r,s)),!0}return!1}function Xc(e){var t=It(e.target);if(t!==null){var i=$t(t);if(i!==null){if(t=i.tag,t===13){if(t=Uc(i),t!==null){e.blockedOn=t,Kc(e.priority,function(){Qc(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Js(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var r=new i.constructor(i.type,i);Vs=r,i.target.dispatchEvent(r),Vs=null}else return t=bi(i),t!==null&&Go(t),e.blockedOn=i,!1;t.shift()}return!0}function Ga(e,t,i){Vi(e)&&i.delete(t)}function Kp(){Zs=!1,mt!==null&&Vi(mt)&&(mt=null),ht!==null&&Vi(ht)&&(ht=null),ft!==null&&Vi(ft)&&(ft=null),ni.forEach(Ga),ii.forEach(Ga)}function In(e,t){e.blockedOn===t&&(e.blockedOn=null,Zs||(Zs=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Kp)))}function ri(e){function t(s){return In(s,e)}if(0<Ai.length){In(Ai[0],e);for(var i=1;i<Ai.length;i++){var r=Ai[i];r.blockedOn===e&&(r.blockedOn=null)}}for(mt!==null&&In(mt,e),ht!==null&&In(ht,e),ft!==null&&In(ft,e),ni.forEach(t),ii.forEach(t),i=0;i<lt.length;i++)r=lt[i],r.blockedOn===e&&(r.blockedOn=null);for(;0<lt.length&&(i=lt[0],i.blockedOn===null);)Xc(i),i.blockedOn===null&&lt.shift()}var un=rt.ReactCurrentBatchConfig,ur=!0;function Xp(e,t,i,r){var s=M,o=un.transition;un.transition=null;try{M=1,Ko(e,t,i,r)}finally{M=s,un.transition=o}}function Zp(e,t,i,r){var s=M,o=un.transition;un.transition=null;try{M=4,Ko(e,t,i,r)}finally{M=s,un.transition=o}}function Ko(e,t,i,r){if(ur){var s=Js(e,t,i,r);if(s===null)hs(e,t,r,pr,i),Qa(e,r);else if(Gp(s,e,t,i,r))r.stopPropagation();else if(Qa(e,r),t&4&&-1<Qp.indexOf(e)){for(;s!==null;){var o=bi(s);if(o!==null&&Vc(o),o=Js(e,t,i,r),o===null&&hs(e,t,r,pr,i),o===s)break;s=o}s!==null&&r.stopPropagation()}else hs(e,t,r,null,i)}}var pr=null;function Js(e,t,i,r){if(pr=null,e=Yo(r),e=It(e),e!==null)if(t=$t(e),t===null)e=null;else if(i=t.tag,i===13){if(e=Uc(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pr=e,null}function Zc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Up()){case Vo:return 1;case Wc:return 4;case cr:case Hp:return 16;case Bc:return 536870912;default:return 16}default:return 16}}var dt=null,Xo=null,Qi=null;function Jc(){if(Qi)return Qi;var e,t=Xo,i=t.length,r,s="value"in dt?dt.value:dt.textContent,o=s.length;for(e=0;e<i&&t[e]===s[e];e++);var a=i-e;for(r=1;r<=a&&t[i-r]===s[o-r];r++);return Qi=s.slice(e,1<r?1-r:void 0)}function Gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ii(){return!0}function Ka(){return!1}function Ee(e){function t(i,r,s,o,a){this._reactName=i,this._targetInst=s,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(i=e[l],this[l]=i?i(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ii:Ka,this.isPropagationStopped=Ka,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Ii)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Ii)},persist:function(){},isPersistent:Ii}),t}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=Ee(Nn),wi=Y({},Nn,{view:0,detail:0}),Jp=Ee(wi),ss,os,Pn,Pr=Y({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(ss=e.screenX-Pn.screenX,os=e.screenY-Pn.screenY):os=ss=0,Pn=e),ss)},movementY:function(e){return"movementY"in e?e.movementY:os}}),Xa=Ee(Pr),em=Y({},Pr,{dataTransfer:0}),tm=Ee(em),nm=Y({},wi,{relatedTarget:0}),as=Ee(nm),im=Y({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),rm=Ee(im),sm=Y({},Nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),om=Ee(sm),am=Y({},Nn,{data:0}),Za=Ee(am),lm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function um(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dm[e])?!!t[e]:!1}function Jo(){return um}var pm=Y({},wi,{key:function(e){if(e.key){var t=lm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jo,charCode:function(e){return e.type==="keypress"?Gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mm=Ee(pm),hm=Y({},Pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ja=Ee(hm),fm=Y({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jo}),gm=Ee(fm),xm=Y({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ym=Ee(xm),vm=Y({},Pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wm=Ee(vm),bm=[9,13,27,32],ea=et&&"CompositionEvent"in window,Yn=null;et&&"documentMode"in document&&(Yn=document.documentMode);var jm=et&&"TextEvent"in window&&!Yn,ed=et&&(!ea||Yn&&8<Yn&&11>=Yn),el=" ",tl=!1;function td(e,t){switch(e){case"keyup":return bm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function km(e,t){switch(e){case"compositionend":return nd(t);case"keypress":return t.which!==32?null:(tl=!0,el);case"textInput":return e=t.data,e===el&&tl?null:e;default:return null}}function Nm(e,t){if(Xt)return e==="compositionend"||!ea&&td(e,t)?(e=Jc(),Qi=Xo=dt=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ed&&t.locale!=="ko"?null:t.data;default:return null}}var Sm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sm[e.type]:t==="textarea"}function id(e,t,i,r){Pc(r),t=mr(t,"onChange"),0<t.length&&(i=new Zo("onChange","change",null,i,r),e.push({event:i,listeners:t}))}var Vn=null,si=null;function Em(e){hd(e,0)}function Or(e){var t=en(e);if(_c(t))return e}function _m(e,t){if(e==="change")return t}var rd=!1;if(et){var ls;if(et){var cs="oninput"in document;if(!cs){var il=document.createElement("div");il.setAttribute("oninput","return;"),cs=typeof il.oninput=="function"}ls=cs}else ls=!1;rd=ls&&(!document.documentMode||9<document.documentMode)}function rl(){Vn&&(Vn.detachEvent("onpropertychange",sd),si=Vn=null)}function sd(e){if(e.propertyName==="value"&&Or(si)){var t=[];id(t,si,e,Yo(e)),Lc(Em,t)}}function zm(e,t,i){e==="focusin"?(rl(),Vn=t,si=i,Vn.attachEvent("onpropertychange",sd)):e==="focusout"&&rl()}function Cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Or(si)}function Tm(e,t){if(e==="click")return Or(t)}function qm(e,t){if(e==="input"||e==="change")return Or(t)}function Am(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Am;function oi(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),r=Object.keys(t);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var s=i[r];if(!Os.call(t,s)||!De(e[s],t[s]))return!1}return!0}function sl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ol(e,t){var i=sl(e);e=0;for(var r;i;){if(i.nodeType===3){if(r=e+i.textContent.length,e<=t&&r>=t)return{node:i,offset:t-e};e=r}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=sl(i)}}function od(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?od(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ad(){for(var e=window,t=or();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=or(e.document)}return t}function ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Im(e){var t=ad(),i=e.focusedElem,r=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&od(i.ownerDocument.documentElement,i)){if(r!==null&&ta(i)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=i.textContent.length,o=Math.min(r.start,s);r=r.end===void 0?o:Math.min(r.end,s),!e.extend&&o>r&&(s=r,r=o,o=s),s=ol(i,o);var a=ol(i,r);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pm=et&&"documentMode"in document&&11>=document.documentMode,Zt=null,eo=null,Qn=null,to=!1;function al(e,t,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;to||Zt==null||Zt!==or(r)||(r=Zt,"selectionStart"in r&&ta(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qn&&oi(Qn,r)||(Qn=r,r=mr(eo,"onSelect"),0<r.length&&(t=new Zo("onSelect","select",null,t,i),e.push({event:t,listeners:r}),t.target=Zt)))}function Pi(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Jt={animationend:Pi("Animation","AnimationEnd"),animationiteration:Pi("Animation","AnimationIteration"),animationstart:Pi("Animation","AnimationStart"),transitionend:Pi("Transition","TransitionEnd")},ds={},ld={};et&&(ld=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function Mr(e){if(ds[e])return ds[e];if(!Jt[e])return e;var t=Jt[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in ld)return ds[e]=t[i];return e}var cd=Mr("animationend"),dd=Mr("animationiteration"),ud=Mr("animationstart"),pd=Mr("transitionend"),md=new Map,ll="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nt(e,t){md.set(e,t),Bt(t,[e])}for(var us=0;us<ll.length;us++){var ps=ll[us],Om=ps.toLowerCase(),Mm=ps[0].toUpperCase()+ps.slice(1);Nt(Om,"on"+Mm)}Nt(cd,"onAnimationEnd");Nt(dd,"onAnimationIteration");Nt(ud,"onAnimationStart");Nt("dblclick","onDoubleClick");Nt("focusin","onFocus");Nt("focusout","onBlur");Nt(pd,"onTransitionEnd");gn("onMouseEnter",["mouseout","mouseover"]);gn("onMouseLeave",["mouseout","mouseover"]);gn("onPointerEnter",["pointerout","pointerover"]);gn("onPointerLeave",["pointerout","pointerover"]);Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wn));function cl(e,t,i){var r=e.type||"unknown-event";e.currentTarget=i,Op(r,t,void 0,e),e.currentTarget=null}function hd(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var r=e[i],s=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==o&&s.isPropagationStopped())break e;cl(s,l,d),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,d=l.currentTarget,l=l.listener,c!==o&&s.isPropagationStopped())break e;cl(s,l,d),o=c}}}if(lr)throw e=Ks,lr=!1,Ks=null,e}function U(e,t){var i=t[oo];i===void 0&&(i=t[oo]=new Set);var r=e+"__bubble";i.has(r)||(fd(t,e,2,!1),i.add(r))}function ms(e,t,i){var r=0;t&&(r|=4),fd(i,e,r,t)}var Oi="_reactListening"+Math.random().toString(36).slice(2);function ai(e){if(!e[Oi]){e[Oi]=!0,jc.forEach(function(i){i!=="selectionchange"&&(Rm.has(i)||ms(i,!1,e),ms(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Oi]||(t[Oi]=!0,ms("selectionchange",!1,t))}}function fd(e,t,i,r){switch(Zc(t)){case 1:var s=Xp;break;case 4:s=Zp;break;default:s=Ko}i=s.bind(null,t,i,e),s=void 0,!Gs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,i,{capture:!0,passive:s}):e.addEventListener(t,i,!0):s!==void 0?e.addEventListener(t,i,{passive:s}):e.addEventListener(t,i,!1)}function hs(e,t,i,r,s){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;a=a.return}for(;l!==null;){if(a=It(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Lc(function(){var d=o,m=Yo(i),p=[];e:{var g=md.get(e);if(g!==void 0){var x=Zo,y=e;switch(e){case"keypress":if(Gi(i)===0)break e;case"keydown":case"keyup":x=mm;break;case"focusin":y="focus",x=as;break;case"focusout":y="blur",x=as;break;case"beforeblur":case"afterblur":x=as;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Xa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=tm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=gm;break;case cd:case dd:case ud:x=rm;break;case pd:x=ym;break;case"scroll":x=Jp;break;case"wheel":x=wm;break;case"copy":case"cut":case"paste":x=om;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ja}var w=(t&4)!==0,N=!w&&e==="scroll",h=w?g!==null?g+"Capture":null:g;w=[];for(var u=d,f;u!==null;){f=u;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,h!==null&&(v=ti(u,h),v!=null&&w.push(li(u,v,f)))),N)break;u=u.return}0<w.length&&(g=new x(g,y,null,i,m),p.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&i!==Vs&&(y=i.relatedTarget||i.fromElement)&&(It(y)||y[tt]))break e;if((x||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,x?(y=i.relatedTarget||i.toElement,x=d,y=y?It(y):null,y!==null&&(N=$t(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=d),x!==y)){if(w=Xa,v="onMouseLeave",h="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ja,v="onPointerLeave",h="onPointerEnter",u="pointer"),N=x==null?g:en(x),f=y==null?g:en(y),g=new w(v,u+"leave",x,i,m),g.target=N,g.relatedTarget=f,v=null,It(m)===d&&(w=new w(h,u+"enter",y,i,m),w.target=f,w.relatedTarget=N,v=w),N=v,x&&y)t:{for(w=x,h=y,u=0,f=w;f;f=Vt(f))u++;for(f=0,v=h;v;v=Vt(v))f++;for(;0<u-f;)w=Vt(w),u--;for(;0<f-u;)h=Vt(h),f--;for(;u--;){if(w===h||h!==null&&w===h.alternate)break t;w=Vt(w),h=Vt(h)}w=null}else w=null;x!==null&&dl(p,g,x,w,!1),y!==null&&N!==null&&dl(p,N,y,w,!0)}}e:{if(g=d?en(d):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var S=_m;else if(nl(g))if(rd)S=qm;else{S=Cm;var z=zm}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Tm);if(S&&(S=S(e,d))){id(p,S,i,m);break e}z&&z(e,g,d),e==="focusout"&&(z=g._wrapperState)&&z.controlled&&g.type==="number"&&Ds(g,"number",g.value)}switch(z=d?en(d):window,e){case"focusin":(nl(z)||z.contentEditable==="true")&&(Zt=z,eo=d,Qn=null);break;case"focusout":Qn=eo=Zt=null;break;case"mousedown":to=!0;break;case"contextmenu":case"mouseup":case"dragend":to=!1,al(p,i,m);break;case"selectionchange":if(Pm)break;case"keydown":case"keyup":al(p,i,m)}var C;if(ea)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Xt?td(e,i)&&(T="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(T="onCompositionStart");T&&(ed&&i.locale!=="ko"&&(Xt||T!=="onCompositionStart"?T==="onCompositionEnd"&&Xt&&(C=Jc()):(dt=m,Xo="value"in dt?dt.value:dt.textContent,Xt=!0)),z=mr(d,T),0<z.length&&(T=new Za(T,e,null,i,m),p.push({event:T,listeners:z}),C?T.data=C:(C=nd(i),C!==null&&(T.data=C)))),(C=jm?km(e,i):Nm(e,i))&&(d=mr(d,"onBeforeInput"),0<d.length&&(m=new Za("onBeforeInput","beforeinput",null,i,m),p.push({event:m,listeners:d}),m.data=C))}hd(p,t)})}function li(e,t,i){return{instance:e,listener:t,currentTarget:i}}function mr(e,t){for(var i=t+"Capture",r=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=ti(e,i),o!=null&&r.unshift(li(e,o,s)),o=ti(e,t),o!=null&&r.push(li(e,o,s))),e=e.return}return r}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function dl(e,t,i,r,s){for(var o=t._reactName,a=[];i!==null&&i!==r;){var l=i,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,s?(c=ti(i,o),c!=null&&a.unshift(li(i,c,l))):s||(c=ti(i,o),c!=null&&a.push(li(i,c,l)))),i=i.return}a.length!==0&&e.push({event:t,listeners:a})}var Lm=/\r\n?/g,Um=/\u0000|\uFFFD/g;function ul(e){return(typeof e=="string"?e:""+e).replace(Lm,`
`).replace(Um,"")}function Mi(e,t,i){if(t=ul(t),ul(e)!==t&&i)throw Error(j(425))}function hr(){}var no=null,io=null;function ro(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var so=typeof setTimeout=="function"?setTimeout:void 0,Hm=typeof clearTimeout=="function"?clearTimeout:void 0,pl=typeof Promise=="function"?Promise:void 0,Fm=typeof queueMicrotask=="function"?queueMicrotask:typeof pl<"u"?function(e){return pl.resolve(null).then(e).catch(Dm)}:so;function Dm(e){setTimeout(function(){throw e})}function fs(e,t){var i=t,r=0;do{var s=i.nextSibling;if(e.removeChild(i),s&&s.nodeType===8)if(i=s.data,i==="/$"){if(r===0){e.removeChild(s),ri(t);return}r--}else i!=="$"&&i!=="$?"&&i!=="$!"||r++;i=s}while(i);ri(t)}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ml(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var Sn=Math.random().toString(36).slice(2),$e="__reactFiber$"+Sn,ci="__reactProps$"+Sn,tt="__reactContainer$"+Sn,oo="__reactEvents$"+Sn,Wm="__reactListeners$"+Sn,Bm="__reactHandles$"+Sn;function It(e){var t=e[$e];if(t)return t;for(var i=e.parentNode;i;){if(t=i[tt]||i[$e]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=ml(e);e!==null;){if(i=e[$e])return i;e=ml(e)}return t}e=i,i=e.parentNode}return null}function bi(e){return e=e[$e]||e[tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Rr(e){return e[ci]||null}var ao=[],tn=-1;function St(e){return{current:e}}function F(e){0>tn||(e.current=ao[tn],ao[tn]=null,tn--)}function L(e,t){tn++,ao[tn]=e.current,e.current=t}var kt={},ue=St(kt),ye=St(!1),Ut=kt;function xn(e,t){var i=e.type.contextTypes;if(!i)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in i)s[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ve(e){return e=e.childContextTypes,e!=null}function fr(){F(ye),F(ue)}function hl(e,t,i){if(ue.current!==kt)throw Error(j(168));L(ue,t),L(ye,i)}function gd(e,t,i){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return i;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(j(108,zp(e)||"Unknown",s));return Y({},i,r)}function gr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Ut=ue.current,L(ue,e),L(ye,ye.current),!0}function fl(e,t,i){var r=e.stateNode;if(!r)throw Error(j(169));i?(e=gd(e,t,Ut),r.__reactInternalMemoizedMergedChildContext=e,F(ye),F(ue),L(ue,e)):F(ye),L(ye,i)}var Ke=null,Lr=!1,gs=!1;function xd(e){Ke===null?Ke=[e]:Ke.push(e)}function $m(e){Lr=!0,xd(e)}function Et(){if(!gs&&Ke!==null){gs=!0;var e=0,t=M;try{var i=Ke;for(M=1;e<i.length;e++){var r=i[e];do r=r(!0);while(r!==null)}Ke=null,Lr=!1}catch(s){throw Ke!==null&&(Ke=Ke.slice(e+1)),Dc(Vo,Et),s}finally{M=t,gs=!1}}return null}var nn=[],rn=0,xr=null,yr=0,ze=[],Ce=0,Ht=null,Xe=1,Ze="";function qt(e,t){nn[rn++]=yr,nn[rn++]=xr,xr=e,yr=t}function yd(e,t,i){ze[Ce++]=Xe,ze[Ce++]=Ze,ze[Ce++]=Ht,Ht=e;var r=Xe;e=Ze;var s=32-He(r)-1;r&=~(1<<s),i+=1;var o=32-He(t)+s;if(30<o){var a=s-s%5;o=(r&(1<<a)-1).toString(32),r>>=a,s-=a,Xe=1<<32-He(t)+s|i<<s|r,Ze=o+e}else Xe=1<<o|i<<s|r,Ze=e}function na(e){e.return!==null&&(qt(e,1),yd(e,1,0))}function ia(e){for(;e===xr;)xr=nn[--rn],nn[rn]=null,yr=nn[--rn],nn[rn]=null;for(;e===Ht;)Ht=ze[--Ce],ze[Ce]=null,Ze=ze[--Ce],ze[Ce]=null,Xe=ze[--Ce],ze[Ce]=null}var ke=null,je=null,D=!1,Le=null;function vd(e,t){var i=Te(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function gl(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,je=gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=Ht!==null?{id:Xe,overflow:Ze}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=Te(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,ke=e,je=null,!0):!1;default:return!1}}function lo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function co(e){if(D){var t=je;if(t){var i=t;if(!gl(e,t)){if(lo(e))throw Error(j(418));t=gt(i.nextSibling);var r=ke;t&&gl(e,t)?vd(r,i):(e.flags=e.flags&-4097|2,D=!1,ke=e)}}else{if(lo(e))throw Error(j(418));e.flags=e.flags&-4097|2,D=!1,ke=e}}}function xl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Ri(e){if(e!==ke)return!1;if(!D)return xl(e),D=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ro(e.type,e.memoizedProps)),t&&(t=je)){if(lo(e))throw wd(),Error(j(418));for(;t;)vd(e,t),t=gt(t.nextSibling)}if(xl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){je=gt(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}je=null}}else je=ke?gt(e.stateNode.nextSibling):null;return!0}function wd(){for(var e=je;e;)e=gt(e.nextSibling)}function yn(){je=ke=null,D=!1}function ra(e){Le===null?Le=[e]:Le.push(e)}var Ym=rt.ReactCurrentBatchConfig;function On(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(j(309));var r=i.stateNode}if(!r)throw Error(j(147,e));var s=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=s.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!i._owner)throw Error(j(290,e))}return e}function Li(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yl(e){var t=e._init;return t(e._payload)}function bd(e){function t(h,u){if(e){var f=h.deletions;f===null?(h.deletions=[u],h.flags|=16):f.push(u)}}function i(h,u){if(!e)return null;for(;u!==null;)t(h,u),u=u.sibling;return null}function r(h,u){for(h=new Map;u!==null;)u.key!==null?h.set(u.key,u):h.set(u.index,u),u=u.sibling;return h}function s(h,u){return h=wt(h,u),h.index=0,h.sibling=null,h}function o(h,u,f){return h.index=f,e?(f=h.alternate,f!==null?(f=f.index,f<u?(h.flags|=2,u):f):(h.flags|=2,u)):(h.flags|=1048576,u)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,u,f,v){return u===null||u.tag!==6?(u=ks(f,h.mode,v),u.return=h,u):(u=s(u,f),u.return=h,u)}function c(h,u,f,v){var S=f.type;return S===Kt?m(h,u,f.props.children,v,f.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ot&&yl(S)===u.type)?(v=s(u,f.props),v.ref=On(h,u,f),v.return=h,v):(v=nr(f.type,f.key,f.props,null,h.mode,v),v.ref=On(h,u,f),v.return=h,v)}function d(h,u,f,v){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Ns(f,h.mode,v),u.return=h,u):(u=s(u,f.children||[]),u.return=h,u)}function m(h,u,f,v,S){return u===null||u.tag!==7?(u=Lt(f,h.mode,v,S),u.return=h,u):(u=s(u,f),u.return=h,u)}function p(h,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ks(""+u,h.mode,f),u.return=h,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case _i:return f=nr(u.type,u.key,u.props,null,h.mode,f),f.ref=On(h,null,u),f.return=h,f;case Gt:return u=Ns(u,h.mode,f),u.return=h,u;case ot:var v=u._init;return p(h,v(u._payload),f)}if(Fn(u)||Tn(u))return u=Lt(u,h.mode,f,null),u.return=h,u;Li(h,u)}return null}function g(h,u,f,v){var S=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:l(h,u,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case _i:return f.key===S?c(h,u,f,v):null;case Gt:return f.key===S?d(h,u,f,v):null;case ot:return S=f._init,g(h,u,S(f._payload),v)}if(Fn(f)||Tn(f))return S!==null?null:m(h,u,f,v,null);Li(h,f)}return null}function x(h,u,f,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(f)||null,l(u,h,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _i:return h=h.get(v.key===null?f:v.key)||null,c(u,h,v,S);case Gt:return h=h.get(v.key===null?f:v.key)||null,d(u,h,v,S);case ot:var z=v._init;return x(h,u,f,z(v._payload),S)}if(Fn(v)||Tn(v))return h=h.get(f)||null,m(u,h,v,S,null);Li(u,v)}return null}function y(h,u,f,v){for(var S=null,z=null,C=u,T=u=0,Q=null;C!==null&&T<f.length;T++){C.index>T?(Q=C,C=null):Q=C.sibling;var P=g(h,C,f[T],v);if(P===null){C===null&&(C=Q);break}e&&C&&P.alternate===null&&t(h,C),u=o(P,u,T),z===null?S=P:z.sibling=P,z=P,C=Q}if(T===f.length)return i(h,C),D&&qt(h,T),S;if(C===null){for(;T<f.length;T++)C=p(h,f[T],v),C!==null&&(u=o(C,u,T),z===null?S=C:z.sibling=C,z=C);return D&&qt(h,T),S}for(C=r(h,C);T<f.length;T++)Q=x(C,h,T,f[T],v),Q!==null&&(e&&Q.alternate!==null&&C.delete(Q.key===null?T:Q.key),u=o(Q,u,T),z===null?S=Q:z.sibling=Q,z=Q);return e&&C.forEach(function(Pe){return t(h,Pe)}),D&&qt(h,T),S}function w(h,u,f,v){var S=Tn(f);if(typeof S!="function")throw Error(j(150));if(f=S.call(f),f==null)throw Error(j(151));for(var z=S=null,C=u,T=u=0,Q=null,P=f.next();C!==null&&!P.done;T++,P=f.next()){C.index>T?(Q=C,C=null):Q=C.sibling;var Pe=g(h,C,P.value,v);if(Pe===null){C===null&&(C=Q);break}e&&C&&Pe.alternate===null&&t(h,C),u=o(Pe,u,T),z===null?S=Pe:z.sibling=Pe,z=Pe,C=Q}if(P.done)return i(h,C),D&&qt(h,T),S;if(C===null){for(;!P.done;T++,P=f.next())P=p(h,P.value,v),P!==null&&(u=o(P,u,T),z===null?S=P:z.sibling=P,z=P);return D&&qt(h,T),S}for(C=r(h,C);!P.done;T++,P=f.next())P=x(C,h,T,P.value,v),P!==null&&(e&&P.alternate!==null&&C.delete(P.key===null?T:P.key),u=o(P,u,T),z===null?S=P:z.sibling=P,z=P);return e&&C.forEach(function(zn){return t(h,zn)}),D&&qt(h,T),S}function N(h,u,f,v){if(typeof f=="object"&&f!==null&&f.type===Kt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case _i:e:{for(var S=f.key,z=u;z!==null;){if(z.key===S){if(S=f.type,S===Kt){if(z.tag===7){i(h,z.sibling),u=s(z,f.props.children),u.return=h,h=u;break e}}else if(z.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ot&&yl(S)===z.type){i(h,z.sibling),u=s(z,f.props),u.ref=On(h,z,f),u.return=h,h=u;break e}i(h,z);break}else t(h,z);z=z.sibling}f.type===Kt?(u=Lt(f.props.children,h.mode,v,f.key),u.return=h,h=u):(v=nr(f.type,f.key,f.props,null,h.mode,v),v.ref=On(h,u,f),v.return=h,h=v)}return a(h);case Gt:e:{for(z=f.key;u!==null;){if(u.key===z)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){i(h,u.sibling),u=s(u,f.children||[]),u.return=h,h=u;break e}else{i(h,u);break}else t(h,u);u=u.sibling}u=Ns(f,h.mode,v),u.return=h,h=u}return a(h);case ot:return z=f._init,N(h,u,z(f._payload),v)}if(Fn(f))return y(h,u,f,v);if(Tn(f))return w(h,u,f,v);Li(h,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(i(h,u.sibling),u=s(u,f),u.return=h,h=u):(i(h,u),u=ks(f,h.mode,v),u.return=h,h=u),a(h)):i(h,u)}return N}var vn=bd(!0),jd=bd(!1),vr=St(null),wr=null,sn=null,sa=null;function oa(){sa=sn=wr=null}function aa(e){var t=vr.current;F(vr),e._currentValue=t}function uo(e,t,i){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===i)break;e=e.return}}function pn(e,t){wr=e,sa=sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(sa!==e)if(e={context:e,memoizedValue:t,next:null},sn===null){if(wr===null)throw Error(j(308));sn=e,wr.dependencies={lanes:0,firstContext:e}}else sn=sn.next=e;return t}var Pt=null;function la(e){Pt===null?Pt=[e]:Pt.push(e)}function kd(e,t,i,r){var s=t.interleaved;return s===null?(i.next=i,la(t)):(i.next=s.next,s.next=i),t.interleaved=i,nt(e,r)}function nt(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var at=!1;function ca(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xt(e,t,i){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,nt(e,i)}return s=r.interleaved,s===null?(t.next=t,la(r)):(t.next=s.next,s.next=t),r.interleaved=t,nt(e,i)}function Ki(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,i|=r,t.lanes=i,Qo(e,i)}}function vl(e,t){var i=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var s=null,o=null;if(i=i.firstBaseUpdate,i!==null){do{var a={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};o===null?s=o=a:o=o.next=a,i=i.next}while(i!==null);o===null?s=o=t:o=o.next=t}else s=o=t;i={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function br(e,t,i,r){var s=e.updateQueue;at=!1;var o=s.firstBaseUpdate,a=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,d=c.next;c.next=null,a===null?o=d:a.next=d,a=c;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=d:l.next=d,m.lastBaseUpdate=c))}if(o!==null){var p=s.baseState;a=0,m=d=c=null,l=o;do{var g=l.lane,x=l.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(g=t,x=i,w.tag){case 1:if(y=w.payload,typeof y=="function"){p=y.call(x,p,g);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(x,p,g):y,g==null)break e;p=Y({},p,g);break e;case 2:at=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else x={eventTime:x,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(d=m=x,c=p):m=m.next=x,a|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(m===null&&(c=p),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=m,t=s.shared.interleaved,t!==null){s=t;do a|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);Dt|=a,e.lanes=a,e.memoizedState=p}}function wl(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=i,typeof s!="function")throw Error(j(191,s));s.call(r)}}}var ji={},Ve=St(ji),di=St(ji),ui=St(ji);function Ot(e){if(e===ji)throw Error(j(174));return e}function da(e,t){switch(L(ui,t),L(di,e),L(Ve,ji),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bs(t,e)}F(Ve),L(Ve,t)}function wn(){F(Ve),F(di),F(ui)}function Sd(e){Ot(ui.current);var t=Ot(Ve.current),i=Bs(t,e.type);t!==i&&(L(di,e),L(Ve,i))}function ua(e){di.current===e&&(F(Ve),F(di))}var B=St(0);function jr(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xs=[];function pa(){for(var e=0;e<xs.length;e++)xs[e]._workInProgressVersionPrimary=null;xs.length=0}var Xi=rt.ReactCurrentDispatcher,ys=rt.ReactCurrentBatchConfig,Ft=0,$=null,J=null,ne=null,kr=!1,Gn=!1,pi=0,Vm=0;function le(){throw Error(j(321))}function ma(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!De(e[i],t[i]))return!1;return!0}function ha(e,t,i,r,s,o){if(Ft=o,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xi.current=e===null||e.memoizedState===null?Xm:Zm,e=i(r,s),Gn){o=0;do{if(Gn=!1,pi=0,25<=o)throw Error(j(301));o+=1,ne=J=null,t.updateQueue=null,Xi.current=Jm,e=i(r,s)}while(Gn)}if(Xi.current=Nr,t=J!==null&&J.next!==null,Ft=0,ne=J=$=null,kr=!1,t)throw Error(j(300));return e}function fa(){var e=pi!==0;return pi=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?$.memoizedState=ne=e:ne=ne.next=e,ne}function Ie(){if(J===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ne===null?$.memoizedState:ne.next;if(t!==null)ne=t,J=e;else{if(e===null)throw Error(j(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ne===null?$.memoizedState=ne=e:ne=ne.next=e}return ne}function mi(e,t){return typeof t=="function"?t(e):t}function vs(e){var t=Ie(),i=t.queue;if(i===null)throw Error(j(311));i.lastRenderedReducer=e;var r=J,s=r.baseQueue,o=i.pending;if(o!==null){if(s!==null){var a=s.next;s.next=o.next,o.next=a}r.baseQueue=s=o,i.pending=null}if(s!==null){o=s.next,r=r.baseState;var l=a=null,c=null,d=o;do{var m=d.lane;if((Ft&m)===m)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var p={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,$.lanes|=m,Dt|=m}d=d.next}while(d!==null&&d!==o);c===null?a=r:c.next=l,De(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,i.lastRenderedState=r}if(e=i.interleaved,e!==null){s=e;do o=s.lane,$.lanes|=o,Dt|=o,s=s.next;while(s!==e)}else s===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function ws(e){var t=Ie(),i=t.queue;if(i===null)throw Error(j(311));i.lastRenderedReducer=e;var r=i.dispatch,s=i.pending,o=t.memoizedState;if(s!==null){i.pending=null;var a=s=s.next;do o=e(o,a.action),a=a.next;while(a!==s);De(o,t.memoizedState)||(xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),i.lastRenderedState=o}return[o,r]}function Ed(){}function _d(e,t){var i=$,r=Ie(),s=t(),o=!De(r.memoizedState,s);if(o&&(r.memoizedState=s,xe=!0),r=r.queue,ga(Td.bind(null,i,r,e),[e]),r.getSnapshot!==t||o||ne!==null&&ne.memoizedState.tag&1){if(i.flags|=2048,hi(9,Cd.bind(null,i,r,s,t),void 0,null),ie===null)throw Error(j(349));Ft&30||zd(i,t,s)}return s}function zd(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function Cd(e,t,i,r){t.value=i,t.getSnapshot=r,qd(t)&&Ad(e)}function Td(e,t,i){return i(function(){qd(t)&&Ad(e)})}function qd(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!De(e,i)}catch{return!0}}function Ad(e){var t=nt(e,1);t!==null&&Fe(t,e,1,-1)}function bl(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:e},t.queue=e,e=e.dispatch=Km.bind(null,$,e),[t.memoizedState,e]}function hi(e,t,i,r){return e={tag:e,create:t,destroy:i,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(r=i.next,i.next=e,e.next=r,t.lastEffect=e)),e}function Id(){return Ie().memoizedState}function Zi(e,t,i,r){var s=Be();$.flags|=e,s.memoizedState=hi(1|t,i,void 0,r===void 0?null:r)}function Ur(e,t,i,r){var s=Ie();r=r===void 0?null:r;var o=void 0;if(J!==null){var a=J.memoizedState;if(o=a.destroy,r!==null&&ma(r,a.deps)){s.memoizedState=hi(t,i,o,r);return}}$.flags|=e,s.memoizedState=hi(1|t,i,o,r)}function jl(e,t){return Zi(8390656,8,e,t)}function ga(e,t){return Ur(2048,8,e,t)}function Pd(e,t){return Ur(4,2,e,t)}function Od(e,t){return Ur(4,4,e,t)}function Md(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rd(e,t,i){return i=i!=null?i.concat([e]):null,Ur(4,4,Md.bind(null,t,e),i)}function xa(){}function Ld(e,t){var i=Ie();t=t===void 0?null:t;var r=i.memoizedState;return r!==null&&t!==null&&ma(t,r[1])?r[0]:(i.memoizedState=[e,t],e)}function Ud(e,t){var i=Ie();t=t===void 0?null:t;var r=i.memoizedState;return r!==null&&t!==null&&ma(t,r[1])?r[0]:(e=e(),i.memoizedState=[e,t],e)}function Hd(e,t,i){return Ft&21?(De(i,t)||(i=$c(),$.lanes|=i,Dt|=i,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=i)}function Qm(e,t){var i=M;M=i!==0&&4>i?i:4,e(!0);var r=ys.transition;ys.transition={};try{e(!1),t()}finally{M=i,ys.transition=r}}function Fd(){return Ie().memoizedState}function Gm(e,t,i){var r=vt(e);if(i={lane:r,action:i,hasEagerState:!1,eagerState:null,next:null},Dd(e))Wd(t,i);else if(i=kd(e,t,i,r),i!==null){var s=me();Fe(i,e,r,s),Bd(i,t,r)}}function Km(e,t,i){var r=vt(e),s={lane:r,action:i,hasEagerState:!1,eagerState:null,next:null};if(Dd(e))Wd(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,i);if(s.hasEagerState=!0,s.eagerState=l,De(l,a)){var c=t.interleaved;c===null?(s.next=s,la(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}i=kd(e,t,s,r),i!==null&&(s=me(),Fe(i,e,r,s),Bd(i,t,r))}}function Dd(e){var t=e.alternate;return e===$||t!==null&&t===$}function Wd(e,t){Gn=kr=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Bd(e,t,i){if(i&4194240){var r=t.lanes;r&=e.pendingLanes,i|=r,t.lanes=i,Qo(e,i)}}var Nr={readContext:Ae,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},Xm={readContext:Ae,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:jl,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,Zi(4194308,4,Md.bind(null,t,e),i)},useLayoutEffect:function(e,t){return Zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zi(4,2,e,t)},useMemo:function(e,t){var i=Be();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var r=Be();return t=i!==void 0?i(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Gm.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:bl,useDebugValue:xa,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=bl(!1),t=e[0];return e=Qm.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var r=$,s=Be();if(D){if(i===void 0)throw Error(j(407));i=i()}else{if(i=t(),ie===null)throw Error(j(349));Ft&30||zd(r,t,i)}s.memoizedState=i;var o={value:i,getSnapshot:t};return s.queue=o,jl(Td.bind(null,r,o,e),[e]),r.flags|=2048,hi(9,Cd.bind(null,r,o,i,t),void 0,null),i},useId:function(){var e=Be(),t=ie.identifierPrefix;if(D){var i=Ze,r=Xe;i=(r&~(1<<32-He(r)-1)).toString(32)+i,t=":"+t+"R"+i,i=pi++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=Vm++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zm={readContext:Ae,useCallback:Ld,useContext:Ae,useEffect:ga,useImperativeHandle:Rd,useInsertionEffect:Pd,useLayoutEffect:Od,useMemo:Ud,useReducer:vs,useRef:Id,useState:function(){return vs(mi)},useDebugValue:xa,useDeferredValue:function(e){var t=Ie();return Hd(t,J.memoizedState,e)},useTransition:function(){var e=vs(mi)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Ed,useSyncExternalStore:_d,useId:Fd,unstable_isNewReconciler:!1},Jm={readContext:Ae,useCallback:Ld,useContext:Ae,useEffect:ga,useImperativeHandle:Rd,useInsertionEffect:Pd,useLayoutEffect:Od,useMemo:Ud,useReducer:ws,useRef:Id,useState:function(){return ws(mi)},useDebugValue:xa,useDeferredValue:function(e){var t=Ie();return J===null?t.memoizedState=e:Hd(t,J.memoizedState,e)},useTransition:function(){var e=ws(mi)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Ed,useSyncExternalStore:_d,useId:Fd,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function po(e,t,i,r){t=e.memoizedState,i=i(r,t),i=i==null?t:Y({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Hr={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var r=me(),s=vt(e),o=Je(r,s);o.payload=t,i!=null&&(o.callback=i),t=xt(e,o,s),t!==null&&(Fe(t,e,s,r),Ki(t,e,s))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var r=me(),s=vt(e),o=Je(r,s);o.tag=1,o.payload=t,i!=null&&(o.callback=i),t=xt(e,o,s),t!==null&&(Fe(t,e,s,r),Ki(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=me(),r=vt(e),s=Je(i,r);s.tag=2,t!=null&&(s.callback=t),t=xt(e,s,r),t!==null&&(Fe(t,e,r,i),Ki(t,e,r))}};function kl(e,t,i,r,s,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!oi(i,r)||!oi(s,o):!0}function $d(e,t,i){var r=!1,s=kt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ae(o):(s=ve(t)?Ut:ue.current,r=t.contextTypes,o=(r=r!=null)?xn(e,s):kt),t=new t(i,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hr,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function Nl(e,t,i,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,r),t.state!==e&&Hr.enqueueReplaceState(t,t.state,null)}function mo(e,t,i,r){var s=e.stateNode;s.props=i,s.state=e.memoizedState,s.refs={},ca(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=Ae(o):(o=ve(t)?Ut:ue.current,s.context=xn(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(po(e,t,o,i),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Hr.enqueueReplaceState(s,s.state,null),br(e,i,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function bn(e,t){try{var i="",r=t;do i+=_p(r),r=r.return;while(r);var s=i}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function bs(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function ho(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var eh=typeof WeakMap=="function"?WeakMap:Map;function Yd(e,t,i){i=Je(-1,i),i.tag=3,i.payload={element:null};var r=t.value;return i.callback=function(){Er||(Er=!0,No=r),ho(e,t)},i}function Vd(e,t,i){i=Je(-1,i),i.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;i.payload=function(){return r(s)},i.callback=function(){ho(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(i.callback=function(){ho(e,t),typeof r!="function"&&(yt===null?yt=new Set([this]):yt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),i}function Sl(e,t,i){var r=e.pingCache;if(r===null){r=e.pingCache=new eh;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(i)||(s.add(i),e=hh.bind(null,e,t,i),t.then(e,e))}function El(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _l(e,t,i,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=Je(-1,1),t.tag=2,xt(i,t,1))),i.lanes|=1),e)}var th=rt.ReactCurrentOwner,xe=!1;function pe(e,t,i,r){t.child=e===null?jd(t,null,i,r):vn(t,e.child,i,r)}function zl(e,t,i,r,s){i=i.render;var o=t.ref;return pn(t,s),r=ha(e,t,i,r,o,s),i=fa(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,it(e,t,s)):(D&&i&&na(t),t.flags|=1,pe(e,t,r,s),t.child)}function Cl(e,t,i,r,s){if(e===null){var o=i.type;return typeof o=="function"&&!Sa(o)&&o.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=o,Qd(e,t,o,r,s)):(e=nr(i.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&s)){var a=o.memoizedProps;if(i=i.compare,i=i!==null?i:oi,i(a,r)&&e.ref===t.ref)return it(e,t,s)}return t.flags|=1,e=wt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Qd(e,t,i,r,s){if(e!==null){var o=e.memoizedProps;if(oi(o,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=o,(e.lanes&s)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,it(e,t,s)}return fo(e,t,i,r,s)}function Gd(e,t,i){var r=t.pendingProps,s=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(an,be),be|=i;else{if(!(i&1073741824))return e=o!==null?o.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,L(an,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:i,L(an,be),be|=r}else o!==null?(r=o.baseLanes|i,t.memoizedState=null):r=i,L(an,be),be|=r;return pe(e,t,s,i),t.child}function Kd(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function fo(e,t,i,r,s){var o=ve(i)?Ut:ue.current;return o=xn(t,o),pn(t,s),i=ha(e,t,i,r,o,s),r=fa(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,it(e,t,s)):(D&&r&&na(t),t.flags|=1,pe(e,t,i,s),t.child)}function Tl(e,t,i,r,s){if(ve(i)){var o=!0;gr(t)}else o=!1;if(pn(t,s),t.stateNode===null)Ji(e,t),$d(t,i,r),mo(t,i,r,s),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,d=i.contextType;typeof d=="object"&&d!==null?d=Ae(d):(d=ve(i)?Ut:ue.current,d=xn(t,d));var m=i.getDerivedStateFromProps,p=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==d)&&Nl(t,a,r,d),at=!1;var g=t.memoizedState;a.state=g,br(t,r,a,s),c=t.memoizedState,l!==r||g!==c||ye.current||at?(typeof m=="function"&&(po(t,i,m,r),c=t.memoizedState),(l=at||kl(t,i,l,r,g,c,d))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Nd(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Me(t.type,l),a.props=d,p=t.pendingProps,g=a.context,c=i.contextType,typeof c=="object"&&c!==null?c=Ae(c):(c=ve(i)?Ut:ue.current,c=xn(t,c));var x=i.getDerivedStateFromProps;(m=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||g!==c)&&Nl(t,a,r,c),at=!1,g=t.memoizedState,a.state=g,br(t,r,a,s);var y=t.memoizedState;l!==p||g!==y||ye.current||at?(typeof x=="function"&&(po(t,i,x,r),y=t.memoizedState),(d=at||kl(t,i,d,r,g,y,c)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=c,r=d):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return go(e,t,i,r,o,s)}function go(e,t,i,r,s,o){Kd(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return s&&fl(t,i,!1),it(e,t,o);r=t.stateNode,th.current=t;var l=a&&typeof i.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=vn(t,e.child,null,o),t.child=vn(t,null,l,o)):pe(e,t,l,o),t.memoizedState=r.state,s&&fl(t,i,!0),t.child}function Xd(e){var t=e.stateNode;t.pendingContext?hl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hl(e,t.context,!1),da(e,t.containerInfo)}function ql(e,t,i,r,s){return yn(),ra(s),t.flags|=256,pe(e,t,i,r),t.child}var xo={dehydrated:null,treeContext:null,retryLane:0};function yo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zd(e,t,i){var r=t.pendingProps,s=B.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),L(B,s&1),e===null)return co(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Wr(a,r,0,null),e=Lt(e,r,i,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=yo(i),t.memoizedState=xo,e):ya(t,a));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return nh(e,t,a,r,l,s,i);if(o){o=r.fallback,a=t.mode,s=e.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=wt(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?o=wt(l,o):(o=Lt(o,a,i,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?yo(i):{baseLanes:a.baseLanes|i,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~i,t.memoizedState=xo,r}return o=e.child,e=o.sibling,r=wt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=i),r.return=t,r.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=r,t.memoizedState=null,r}function ya(e,t){return t=Wr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ui(e,t,i,r){return r!==null&&ra(r),vn(t,e.child,null,i),e=ya(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nh(e,t,i,r,s,o,a){if(i)return t.flags&256?(t.flags&=-257,r=bs(Error(j(422))),Ui(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,s=t.mode,r=Wr({mode:"visible",children:r.children},s,0,null),o=Lt(o,s,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&vn(t,e.child,null,a),t.child.memoizedState=yo(a),t.memoizedState=xo,o);if(!(t.mode&1))return Ui(e,t,a,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(j(419)),r=bs(o,r,void 0),Ui(e,t,a,r)}if(l=(a&e.childLanes)!==0,xe||l){if(r=ie,r!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|a)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,nt(e,s),Fe(r,e,s,-1))}return Na(),r=bs(Error(j(421))),Ui(e,t,a,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=fh.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,je=gt(s.nextSibling),ke=t,D=!0,Le=null,e!==null&&(ze[Ce++]=Xe,ze[Ce++]=Ze,ze[Ce++]=Ht,Xe=e.id,Ze=e.overflow,Ht=t),t=ya(t,r.children),t.flags|=4096,t)}function Al(e,t,i){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),uo(e.return,t,i)}function js(e,t,i,r,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=i,o.tailMode=s)}function Jd(e,t,i){var r=t.pendingProps,s=r.revealOrder,o=r.tail;if(pe(e,t,r.children,i),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Al(e,i,t);else if(e.tag===19)Al(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(L(B,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(i=t.child,s=null;i!==null;)e=i.alternate,e!==null&&jr(e)===null&&(s=i),i=i.sibling;i=s,i===null?(s=t.child,t.child=null):(s=i.sibling,i.sibling=null),js(t,!1,s,i,o);break;case"backwards":for(i=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&jr(e)===null){t.child=s;break}e=s.sibling,s.sibling=i,i=s,s=e}js(t,!0,i,null,o);break;case"together":js(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ji(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function it(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Dt|=t.lanes,!(i&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,i=wt(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=wt(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function ih(e,t,i){switch(t.tag){case 3:Xd(t),yn();break;case 5:Sd(t);break;case 1:ve(t.type)&&gr(t);break;case 4:da(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;L(vr,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(L(B,B.current&1),t.flags|=128,null):i&t.child.childLanes?Zd(e,t,i):(L(B,B.current&1),e=it(e,t,i),e!==null?e.sibling:null);L(B,B.current&1);break;case 19:if(r=(i&t.childLanes)!==0,e.flags&128){if(r)return Jd(e,t,i);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),L(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,Gd(e,t,i)}return it(e,t,i)}var eu,vo,tu,nu;eu=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};vo=function(){};tu=function(e,t,i,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,Ot(Ve.current);var o=null;switch(i){case"input":s=Hs(e,s),r=Hs(e,r),o=[];break;case"select":s=Y({},s,{value:void 0}),r=Y({},r,{value:void 0}),o=[];break;case"textarea":s=Ws(e,s),r=Ws(e,r),o=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hr)}$s(i,r);var a;i=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(a in l)l.hasOwnProperty(a)&&(i||(i={}),i[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Jn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var c=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(i||(i={}),i[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(i||(i={}),i[a]=c[a])}else i||(o||(o=[]),o.push(d,i)),i=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Jn.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&U("scroll",e),o||l===c||(o=[])):(o=o||[]).push(d,c))}i&&(o=o||[]).push("style",i);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};nu=function(e,t,i,r){i!==r&&(t.flags|=4)};function Mn(e,t){if(!D)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,r=0;if(t)for(var s=e.child;s!==null;)i|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)i|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=i,t}function rh(e,t,i){var r=t.pendingProps;switch(ia(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return ve(t.type)&&fr(),ce(t),null;case 3:return r=t.stateNode,wn(),F(ye),F(ue),pa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ri(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(_o(Le),Le=null))),vo(e,t),ce(t),null;case 5:ua(t);var s=Ot(ui.current);if(i=t.type,e!==null&&t.stateNode!=null)tu(e,t,i,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return ce(t),null}if(e=Ot(Ve.current),Ri(t)){r=t.stateNode,i=t.type;var o=t.memoizedProps;switch(r[$e]=t,r[ci]=o,e=(t.mode&1)!==0,i){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(s=0;s<Wn.length;s++)U(Wn[s],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Fa(r,o),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},U("invalid",r);break;case"textarea":Wa(r,o),U("invalid",r)}$s(i,o),s=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Mi(r.textContent,l,e),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Mi(r.textContent,l,e),s=["children",""+l]):Jn.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&U("scroll",r)}switch(i){case"input":zi(r),Da(r,o,!0);break;case"textarea":zi(r),Ba(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=hr)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Tc(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(i,{is:r.is}):(e=a.createElement(i),i==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,i),e[$e]=t,e[ci]=r,eu(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ys(i,r),i){case"dialog":U("cancel",e),U("close",e),s=r;break;case"iframe":case"object":case"embed":U("load",e),s=r;break;case"video":case"audio":for(s=0;s<Wn.length;s++)U(Wn[s],e);s=r;break;case"source":U("error",e),s=r;break;case"img":case"image":case"link":U("error",e),U("load",e),s=r;break;case"details":U("toggle",e),s=r;break;case"input":Fa(e,r),s=Hs(e,r),U("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=Y({},r,{value:void 0}),U("invalid",e);break;case"textarea":Wa(e,r),s=Ws(e,r),U("invalid",e);break;default:s=r}$s(i,s),l=s;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Ic(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&qc(e,c)):o==="children"?typeof c=="string"?(i!=="textarea"||c!=="")&&ei(e,c):typeof c=="number"&&ei(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Jn.hasOwnProperty(o)?c!=null&&o==="onScroll"&&U("scroll",e):c!=null&&Do(e,o,c,a))}switch(i){case"input":zi(e),Da(e,r,!1);break;case"textarea":zi(e),Ba(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=hr)}switch(i){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)nu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(i=Ot(ui.current),Ot(Ve.current),Ri(t)){if(r=t.stateNode,i=t.memoizedProps,r[$e]=t,(o=r.nodeValue!==i)&&(e=ke,e!==null))switch(e.tag){case 3:Mi(r.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mi(r.nodeValue,i,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(i.nodeType===9?i:i.ownerDocument).createTextNode(r),r[$e]=t,t.stateNode=r}return ce(t),null;case 13:if(F(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&je!==null&&t.mode&1&&!(t.flags&128))wd(),yn(),t.flags|=98560,o=!1;else if(o=Ri(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[$e]=t}else yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else Le!==null&&(_o(Le),Le=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=i,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?ee===0&&(ee=3):Na())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return wn(),vo(e,t),e===null&&ai(t.stateNode.containerInfo),ce(t),null;case 10:return aa(t.type._context),ce(t),null;case 17:return ve(t.type)&&fr(),ce(t),null;case 19:if(F(B),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Mn(o,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=jr(e),a!==null){for(t.flags|=128,Mn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=i,i=t.child;i!==null;)o=i,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return L(B,B.current&1|2),t.child}e=e.sibling}o.tail!==null&&K()>jn&&(t.flags|=128,r=!0,Mn(o,!1),t.lanes=4194304)}else{if(!r)if(e=jr(a),e!==null){if(t.flags|=128,r=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),Mn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!D)return ce(t),null}else 2*K()-o.renderingStartTime>jn&&i!==1073741824&&(t.flags|=128,r=!0,Mn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(i=o.last,i!==null?i.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=K(),t.sibling=null,i=B.current,L(B,r?i&1|2:i&1),t):(ce(t),null);case 22:case 23:return ka(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function sh(e,t){switch(ia(t),t.tag){case 1:return ve(t.type)&&fr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wn(),F(ye),F(ue),pa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ua(t),null;case 13:if(F(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(B),null;case 4:return wn(),null;case 10:return aa(t.type._context),null;case 22:case 23:return ka(),null;case 24:return null;default:return null}}var Hi=!1,de=!1,oh=typeof WeakSet=="function"?WeakSet:Set,E=null;function on(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(r){V(e,t,r)}else i.current=null}function wo(e,t,i){try{i()}catch(r){V(e,t,r)}}var Il=!1;function ah(e,t){if(no=ur,e=ad(),ta(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var r=i.getSelection&&i.getSelection();if(r&&r.rangeCount!==0){i=r.anchorNode;var s=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{i.nodeType,o.nodeType}catch{i=null;break e}var a=0,l=-1,c=-1,d=0,m=0,p=e,g=null;t:for(;;){for(var x;p!==i||s!==0&&p.nodeType!==3||(l=a+s),p!==o||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(x=p.firstChild)!==null;)g=p,p=x;for(;;){if(p===e)break t;if(g===i&&++d===s&&(l=a),g===o&&++m===r&&(c=a),(x=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=x}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(io={focusedElem:e,selectionRange:i},ur=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,N=y.memoizedState,h=t.stateNode,u=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:Me(t.type,w),N);h.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(v){V(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return y=Il,Il=!1,y}function Kn(e,t,i){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&wo(t,i,o)}s=s.next}while(s!==r)}}function Fr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var r=i.create;i.destroy=r()}i=i.next}while(i!==t)}}function bo(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function iu(e){var t=e.alternate;t!==null&&(e.alternate=null,iu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$e],delete t[ci],delete t[oo],delete t[Wm],delete t[Bm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ru(e){return e.tag===5||e.tag===3||e.tag===4}function Pl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ru(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jo(e,t,i){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=hr));else if(r!==4&&(e=e.child,e!==null))for(jo(e,t,i),e=e.sibling;e!==null;)jo(e,t,i),e=e.sibling}function ko(e,t,i){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ko(e,t,i),e=e.sibling;e!==null;)ko(e,t,i),e=e.sibling}var re=null,Re=!1;function st(e,t,i){for(i=i.child;i!==null;)su(e,t,i),i=i.sibling}function su(e,t,i){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Ir,i)}catch{}switch(i.tag){case 5:de||on(i,t);case 6:var r=re,s=Re;re=null,st(e,t,i),re=r,Re=s,re!==null&&(Re?(e=re,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):re.removeChild(i.stateNode));break;case 18:re!==null&&(Re?(e=re,i=i.stateNode,e.nodeType===8?fs(e.parentNode,i):e.nodeType===1&&fs(e,i),ri(e)):fs(re,i.stateNode));break;case 4:r=re,s=Re,re=i.stateNode.containerInfo,Re=!0,st(e,t,i),re=r,Re=s;break;case 0:case 11:case 14:case 15:if(!de&&(r=i.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var o=s,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&wo(i,t,a),s=s.next}while(s!==r)}st(e,t,i);break;case 1:if(!de&&(on(i,t),r=i.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=i.memoizedProps,r.state=i.memoizedState,r.componentWillUnmount()}catch(l){V(i,t,l)}st(e,t,i);break;case 21:st(e,t,i);break;case 22:i.mode&1?(de=(r=de)||i.memoizedState!==null,st(e,t,i),de=r):st(e,t,i);break;default:st(e,t,i)}}function Ol(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new oh),t.forEach(function(r){var s=gh.bind(null,e,r);i.has(r)||(i.add(r),r.then(s,s))})}}function Oe(e,t){var i=t.deletions;if(i!==null)for(var r=0;r<i.length;r++){var s=i[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:re=l.stateNode,Re=!1;break e;case 3:re=l.stateNode.containerInfo,Re=!0;break e;case 4:re=l.stateNode.containerInfo,Re=!0;break e}l=l.return}if(re===null)throw Error(j(160));su(o,a,s),re=null,Re=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){V(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ou(t,e),t=t.sibling}function ou(e,t){var i=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),We(e),r&4){try{Kn(3,e,e.return),Fr(3,e)}catch(w){V(e,e.return,w)}try{Kn(5,e,e.return)}catch(w){V(e,e.return,w)}}break;case 1:Oe(t,e),We(e),r&512&&i!==null&&on(i,i.return);break;case 5:if(Oe(t,e),We(e),r&512&&i!==null&&on(i,i.return),e.flags&32){var s=e.stateNode;try{ei(s,"")}catch(w){V(e,e.return,w)}}if(r&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,a=i!==null?i.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&zc(s,o),Ys(l,a);var d=Ys(l,o);for(a=0;a<c.length;a+=2){var m=c[a],p=c[a+1];m==="style"?Ic(s,p):m==="dangerouslySetInnerHTML"?qc(s,p):m==="children"?ei(s,p):Do(s,m,p,d)}switch(l){case"input":Fs(s,o);break;case"textarea":Cc(s,o);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?ln(s,!!o.multiple,x,!1):g!==!!o.multiple&&(o.defaultValue!=null?ln(s,!!o.multiple,o.defaultValue,!0):ln(s,!!o.multiple,o.multiple?[]:"",!1))}s[ci]=o}catch(w){V(e,e.return,w)}}break;case 6:if(Oe(t,e),We(e),r&4){if(e.stateNode===null)throw Error(j(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(w){V(e,e.return,w)}}break;case 3:if(Oe(t,e),We(e),r&4&&i!==null&&i.memoizedState.isDehydrated)try{ri(t.containerInfo)}catch(w){V(e,e.return,w)}break;case 4:Oe(t,e),We(e);break;case 13:Oe(t,e),We(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(ba=K())),r&4&&Ol(e);break;case 22:if(m=i!==null&&i.memoizedState!==null,e.mode&1?(de=(d=de)||m,Oe(t,e),de=d):Oe(t,e),We(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(E=e,m=e.child;m!==null;){for(p=E=m;E!==null;){switch(g=E,x=g.child,g.tag){case 0:case 11:case 14:case 15:Kn(4,g,g.return);break;case 1:on(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,i=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){V(r,i,w)}}break;case 5:on(g,g.return);break;case 22:if(g.memoizedState!==null){Rl(p);continue}}x!==null?(x.return=g,E=x):Rl(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{s=p.stateNode,d?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Ac("display",a))}catch(w){V(e,e.return,w)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(w){V(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Oe(t,e),We(e),r&4&&Ol(e);break;case 21:break;default:Oe(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(ru(i)){var r=i;break e}i=i.return}throw Error(j(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ei(s,""),r.flags&=-33);var o=Pl(e);ko(e,o,s);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Pl(e);jo(e,l,a);break;default:throw Error(j(161))}}catch(c){V(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lh(e,t,i){E=e,au(e)}function au(e,t,i){for(var r=(e.mode&1)!==0;E!==null;){var s=E,o=s.child;if(s.tag===22&&r){var a=s.memoizedState!==null||Hi;if(!a){var l=s.alternate,c=l!==null&&l.memoizedState!==null||de;l=Hi;var d=de;if(Hi=a,(de=c)&&!d)for(E=s;E!==null;)a=E,c=a.child,a.tag===22&&a.memoizedState!==null?Ll(s):c!==null?(c.return=a,E=c):Ll(s);for(;o!==null;)E=o,au(o),o=o.sibling;E=s,Hi=l,de=d}Ml(e)}else s.subtreeFlags&8772&&o!==null?(o.return=s,E=o):Ml(e)}}function Ml(e){for(;E!==null;){var t=E;if(t.flags&8772){var i=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Fr(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(i===null)r.componentDidMount();else{var s=t.elementType===t.type?i.memoizedProps:Me(t.type,i.memoizedProps);r.componentDidUpdate(s,i.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&wl(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}wl(t,a,i)}break;case 5:var l=t.stateNode;if(i===null&&t.flags&4){i=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&i.focus();break;case"img":c.src&&(i.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&ri(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}de||t.flags&512&&bo(t)}catch(g){V(t,t.return,g)}}if(t===e){E=null;break}if(i=t.sibling,i!==null){i.return=t.return,E=i;break}E=t.return}}function Rl(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var i=t.sibling;if(i!==null){i.return=t.return,E=i;break}E=t.return}}function Ll(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{Fr(4,t)}catch(c){V(t,i,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(c){V(t,s,c)}}var o=t.return;try{bo(t)}catch(c){V(t,o,c)}break;case 5:var a=t.return;try{bo(t)}catch(c){V(t,a,c)}}}catch(c){V(t,t.return,c)}if(t===e){E=null;break}var l=t.sibling;if(l!==null){l.return=t.return,E=l;break}E=t.return}}var ch=Math.ceil,Sr=rt.ReactCurrentDispatcher,va=rt.ReactCurrentOwner,qe=rt.ReactCurrentBatchConfig,O=0,ie=null,X=null,se=0,be=0,an=St(0),ee=0,fi=null,Dt=0,Dr=0,wa=0,Xn=null,ge=null,ba=0,jn=1/0,Ge=null,Er=!1,No=null,yt=null,Fi=!1,ut=null,_r=0,Zn=0,So=null,er=-1,tr=0;function me(){return O&6?K():er!==-1?er:er=K()}function vt(e){return e.mode&1?O&2&&se!==0?se&-se:Ym.transition!==null?(tr===0&&(tr=$c()),tr):(e=M,e!==0||(e=window.event,e=e===void 0?16:Zc(e.type)),e):1}function Fe(e,t,i,r){if(50<Zn)throw Zn=0,So=null,Error(j(185));vi(e,i,r),(!(O&2)||e!==ie)&&(e===ie&&(!(O&2)&&(Dr|=i),ee===4&&ct(e,se)),we(e,r),i===1&&O===0&&!(t.mode&1)&&(jn=K()+500,Lr&&Et()))}function we(e,t){var i=e.callbackNode;Yp(e,t);var r=dr(e,e===ie?se:0);if(r===0)i!==null&&Va(i),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(i!=null&&Va(i),t===1)e.tag===0?$m(Ul.bind(null,e)):xd(Ul.bind(null,e)),Fm(function(){!(O&6)&&Et()}),i=null;else{switch(Yc(r)){case 1:i=Vo;break;case 4:i=Wc;break;case 16:i=cr;break;case 536870912:i=Bc;break;default:i=cr}i=fu(i,lu.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function lu(e,t){if(er=-1,tr=0,O&6)throw Error(j(327));var i=e.callbackNode;if(mn()&&e.callbackNode!==i)return null;var r=dr(e,e===ie?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=zr(e,r);else{t=r;var s=O;O|=2;var o=du();(ie!==e||se!==t)&&(Ge=null,jn=K()+500,Rt(e,t));do try{ph();break}catch(l){cu(e,l)}while(!0);oa(),Sr.current=o,O=s,X!==null?t=0:(ie=null,se=0,t=ee)}if(t!==0){if(t===2&&(s=Xs(e),s!==0&&(r=s,t=Eo(e,s))),t===1)throw i=fi,Rt(e,0),ct(e,r),we(e,K()),i;if(t===6)ct(e,r);else{if(s=e.current.alternate,!(r&30)&&!dh(s)&&(t=zr(e,r),t===2&&(o=Xs(e),o!==0&&(r=o,t=Eo(e,o))),t===1))throw i=fi,Rt(e,0),ct(e,r),we(e,K()),i;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:At(e,ge,Ge);break;case 3:if(ct(e,r),(r&130023424)===r&&(t=ba+500-K(),10<t)){if(dr(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=so(At.bind(null,e,ge,Ge),t);break}At(e,ge,Ge);break;case 4:if(ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var a=31-He(r);o=1<<a,a=t[a],a>s&&(s=a),r&=~o}if(r=s,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ch(r/1960))-r,10<r){e.timeoutHandle=so(At.bind(null,e,ge,Ge),r);break}At(e,ge,Ge);break;case 5:At(e,ge,Ge);break;default:throw Error(j(329))}}}return we(e,K()),e.callbackNode===i?lu.bind(null,e):null}function Eo(e,t){var i=Xn;return e.current.memoizedState.isDehydrated&&(Rt(e,t).flags|=256),e=zr(e,t),e!==2&&(t=ge,ge=i,t!==null&&_o(t)),e}function _o(e){ge===null?ge=e:ge.push.apply(ge,e)}function dh(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var r=0;r<i.length;r++){var s=i[r],o=s.getSnapshot;s=s.value;try{if(!De(o(),s))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ct(e,t){for(t&=~wa,t&=~Dr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-He(t),r=1<<i;e[i]=-1,t&=~r}}function Ul(e){if(O&6)throw Error(j(327));mn();var t=dr(e,0);if(!(t&1))return we(e,K()),null;var i=zr(e,t);if(e.tag!==0&&i===2){var r=Xs(e);r!==0&&(t=r,i=Eo(e,r))}if(i===1)throw i=fi,Rt(e,0),ct(e,t),we(e,K()),i;if(i===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,At(e,ge,Ge),we(e,K()),null}function ja(e,t){var i=O;O|=1;try{return e(t)}finally{O=i,O===0&&(jn=K()+500,Lr&&Et())}}function Wt(e){ut!==null&&ut.tag===0&&!(O&6)&&mn();var t=O;O|=1;var i=qe.transition,r=M;try{if(qe.transition=null,M=1,e)return e()}finally{M=r,qe.transition=i,O=t,!(O&6)&&Et()}}function ka(){be=an.current,F(an)}function Rt(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Hm(i)),X!==null)for(i=X.return;i!==null;){var r=i;switch(ia(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fr();break;case 3:wn(),F(ye),F(ue),pa();break;case 5:ua(r);break;case 4:wn();break;case 13:F(B);break;case 19:F(B);break;case 10:aa(r.type._context);break;case 22:case 23:ka()}i=i.return}if(ie=e,X=e=wt(e.current,null),se=be=t,ee=0,fi=null,wa=Dr=Dt=0,ge=Xn=null,Pt!==null){for(t=0;t<Pt.length;t++)if(i=Pt[t],r=i.interleaved,r!==null){i.interleaved=null;var s=r.next,o=i.pending;if(o!==null){var a=o.next;o.next=s,r.next=a}i.pending=r}Pt=null}return e}function cu(e,t){do{var i=X;try{if(oa(),Xi.current=Nr,kr){for(var r=$.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}kr=!1}if(Ft=0,ne=J=$=null,Gn=!1,pi=0,va.current=null,i===null||i.return===null){ee=1,fi=t,X=null;break}e:{var o=e,a=i.return,l=i,c=t;if(t=se,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,m=l,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=El(a);if(x!==null){x.flags&=-257,_l(x,a,l,o,t),x.mode&1&&Sl(o,d,t),t=x,c=d;var y=t.updateQueue;if(y===null){var w=new Set;w.add(c),t.updateQueue=w}else y.add(c);break e}else{if(!(t&1)){Sl(o,d,t),Na();break e}c=Error(j(426))}}else if(D&&l.mode&1){var N=El(a);if(N!==null){!(N.flags&65536)&&(N.flags|=256),_l(N,a,l,o,t),ra(bn(c,l));break e}}o=c=bn(c,l),ee!==4&&(ee=2),Xn===null?Xn=[o]:Xn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Yd(o,c,t);vl(o,h);break e;case 1:l=c;var u=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(yt===null||!yt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Vd(o,l,t);vl(o,v);break e}}o=o.return}while(o!==null)}pu(i)}catch(S){t=S,X===i&&i!==null&&(X=i=i.return);continue}break}while(!0)}function du(){var e=Sr.current;return Sr.current=Nr,e===null?Nr:e}function Na(){(ee===0||ee===3||ee===2)&&(ee=4),ie===null||!(Dt&268435455)&&!(Dr&268435455)||ct(ie,se)}function zr(e,t){var i=O;O|=2;var r=du();(ie!==e||se!==t)&&(Ge=null,Rt(e,t));do try{uh();break}catch(s){cu(e,s)}while(!0);if(oa(),O=i,Sr.current=r,X!==null)throw Error(j(261));return ie=null,se=0,ee}function uh(){for(;X!==null;)uu(X)}function ph(){for(;X!==null&&!Rp();)uu(X)}function uu(e){var t=hu(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?pu(e):X=t,va.current=null}function pu(e){var t=e;do{var i=t.alternate;if(e=t.return,t.flags&32768){if(i=sh(i,t),i!==null){i.flags&=32767,X=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,X=null;return}}else if(i=rh(i,t,be),i!==null){X=i;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);ee===0&&(ee=5)}function At(e,t,i){var r=M,s=qe.transition;try{qe.transition=null,M=1,mh(e,t,i,r)}finally{qe.transition=s,M=r}return null}function mh(e,t,i,r){do mn();while(ut!==null);if(O&6)throw Error(j(327));i=e.finishedWork;var s=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=i.lanes|i.childLanes;if(Vp(e,o),e===ie&&(X=ie=null,se=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||Fi||(Fi=!0,fu(cr,function(){return mn(),null})),o=(i.flags&15990)!==0,i.subtreeFlags&15990||o){o=qe.transition,qe.transition=null;var a=M;M=1;var l=O;O|=4,va.current=null,ah(e,i),ou(i,e),Im(io),ur=!!no,io=no=null,e.current=i,lh(i),Lp(),O=l,M=a,qe.transition=o}else e.current=i;if(Fi&&(Fi=!1,ut=e,_r=s),o=e.pendingLanes,o===0&&(yt=null),Fp(i.stateNode),we(e,K()),t!==null)for(r=e.onRecoverableError,i=0;i<t.length;i++)s=t[i],r(s.value,{componentStack:s.stack,digest:s.digest});if(Er)throw Er=!1,e=No,No=null,e;return _r&1&&e.tag!==0&&mn(),o=e.pendingLanes,o&1?e===So?Zn++:(Zn=0,So=e):Zn=0,Et(),null}function mn(){if(ut!==null){var e=Yc(_r),t=qe.transition,i=M;try{if(qe.transition=null,M=16>e?16:e,ut===null)var r=!1;else{if(e=ut,ut=null,_r=0,O&6)throw Error(j(331));var s=O;for(O|=4,E=e.current;E!==null;){var o=E,a=o.child;if(E.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(E=d;E!==null;){var m=E;switch(m.tag){case 0:case 11:case 15:Kn(8,m,o)}var p=m.child;if(p!==null)p.return=m,E=p;else for(;E!==null;){m=E;var g=m.sibling,x=m.return;if(iu(m),m===d){E=null;break}if(g!==null){g.return=x,E=g;break}E=x}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}E=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,E=a;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Kn(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,E=h;break e}E=o.return}}var u=e.current;for(E=u;E!==null;){a=E;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,E=f;else e:for(a=u;E!==null;){if(l=E,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Fr(9,l)}}catch(S){V(l,l.return,S)}if(l===a){E=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,E=v;break e}E=l.return}}if(O=s,Et(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Ir,e)}catch{}r=!0}return r}finally{M=i,qe.transition=t}}return!1}function Hl(e,t,i){t=bn(i,t),t=Yd(e,t,1),e=xt(e,t,1),t=me(),e!==null&&(vi(e,1,t),we(e,t))}function V(e,t,i){if(e.tag===3)Hl(e,e,i);else for(;t!==null;){if(t.tag===3){Hl(t,e,i);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yt===null||!yt.has(r))){e=bn(i,e),e=Vd(t,e,1),t=xt(t,e,1),e=me(),t!==null&&(vi(t,1,e),we(t,e));break}}t=t.return}}function hh(e,t,i){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&i,ie===e&&(se&i)===i&&(ee===4||ee===3&&(se&130023424)===se&&500>K()-ba?Rt(e,0):wa|=i),we(e,t)}function mu(e,t){t===0&&(e.mode&1?(t=qi,qi<<=1,!(qi&130023424)&&(qi=4194304)):t=1);var i=me();e=nt(e,t),e!==null&&(vi(e,t,i),we(e,i))}function fh(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),mu(e,i)}function gh(e,t){var i=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(i=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),mu(e,i)}var hu;hu=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)xe=!0;else{if(!(e.lanes&i)&&!(t.flags&128))return xe=!1,ih(e,t,i);xe=!!(e.flags&131072)}else xe=!1,D&&t.flags&1048576&&yd(t,yr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ji(e,t),e=t.pendingProps;var s=xn(t,ue.current);pn(t,i),s=ha(null,t,r,e,s,i);var o=fa();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(o=!0,gr(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ca(t),s.updater=Hr,t.stateNode=s,s._reactInternals=t,mo(t,r,e,i),t=go(null,t,r,!0,o,i)):(t.tag=0,D&&o&&na(t),pe(null,t,s,i),t=t.child),t;case 16:r=t.elementType;e:{switch(Ji(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=yh(r),e=Me(r,e),s){case 0:t=fo(null,t,r,e,i);break e;case 1:t=Tl(null,t,r,e,i);break e;case 11:t=zl(null,t,r,e,i);break e;case 14:t=Cl(null,t,r,Me(r.type,e),i);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Me(r,s),fo(e,t,r,s,i);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Me(r,s),Tl(e,t,r,s,i);case 3:e:{if(Xd(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,s=o.element,Nd(e,t),br(t,r,null,i);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=bn(Error(j(423)),t),t=ql(e,t,r,i,s);break e}else if(r!==s){s=bn(Error(j(424)),t),t=ql(e,t,r,i,s);break e}else for(je=gt(t.stateNode.containerInfo.firstChild),ke=t,D=!0,Le=null,i=jd(t,null,r,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(yn(),r===s){t=it(e,t,i);break e}pe(e,t,r,i)}t=t.child}return t;case 5:return Sd(t),e===null&&co(t),r=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,a=s.children,ro(r,s)?a=null:o!==null&&ro(r,o)&&(t.flags|=32),Kd(e,t),pe(e,t,a,i),t.child;case 6:return e===null&&co(t),null;case 13:return Zd(e,t,i);case 4:return da(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vn(t,null,r,i):pe(e,t,r,i),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Me(r,s),zl(e,t,r,s,i);case 7:return pe(e,t,t.pendingProps,i),t.child;case 8:return pe(e,t,t.pendingProps.children,i),t.child;case 12:return pe(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,o=t.memoizedProps,a=s.value,L(vr,r._currentValue),r._currentValue=a,o!==null)if(De(o.value,a)){if(o.children===s.children&&!ye.current){t=it(e,t,i);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Je(-1,i&-i),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?c.next=c:(c.next=m.next,m.next=c),d.pending=c}}o.lanes|=i,c=o.alternate,c!==null&&(c.lanes|=i),uo(o.return,i,t),l.lanes|=i;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(j(341));a.lanes|=i,l=a.alternate,l!==null&&(l.lanes|=i),uo(a,i,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}pe(e,t,s.children,i),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,pn(t,i),s=Ae(s),r=r(s),t.flags|=1,pe(e,t,r,i),t.child;case 14:return r=t.type,s=Me(r,t.pendingProps),s=Me(r.type,s),Cl(e,t,r,s,i);case 15:return Qd(e,t,t.type,t.pendingProps,i);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Me(r,s),Ji(e,t),t.tag=1,ve(r)?(e=!0,gr(t)):e=!1,pn(t,i),$d(t,r,s),mo(t,r,s,i),go(null,t,r,!0,e,i);case 19:return Jd(e,t,i);case 22:return Gd(e,t,i)}throw Error(j(156,t.tag))};function fu(e,t){return Dc(e,t)}function xh(e,t,i,r){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,i,r){return new xh(e,t,i,r)}function Sa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yh(e){if(typeof e=="function")return Sa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bo)return 11;if(e===$o)return 14}return 2}function wt(e,t){var i=e.alternate;return i===null?(i=Te(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function nr(e,t,i,r,s,o){var a=2;if(r=e,typeof e=="function")Sa(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Kt:return Lt(i.children,s,o,t);case Wo:a=8,s|=8;break;case Ms:return e=Te(12,i,t,s|2),e.elementType=Ms,e.lanes=o,e;case Rs:return e=Te(13,i,t,s),e.elementType=Rs,e.lanes=o,e;case Ls:return e=Te(19,i,t,s),e.elementType=Ls,e.lanes=o,e;case Sc:return Wr(i,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kc:a=10;break e;case Nc:a=9;break e;case Bo:a=11;break e;case $o:a=14;break e;case ot:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Te(a,i,t,s),t.elementType=e,t.type=r,t.lanes=o,t}function Lt(e,t,i,r){return e=Te(7,e,r,t),e.lanes=i,e}function Wr(e,t,i,r){return e=Te(22,e,r,t),e.elementType=Sc,e.lanes=i,e.stateNode={isHidden:!1},e}function ks(e,t,i){return e=Te(6,e,null,t),e.lanes=i,e}function Ns(e,t,i){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vh(e,t,i,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rs(0),this.expirationTimes=rs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rs(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ea(e,t,i,r,s,o,a,l,c){return e=new vh(e,t,i,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Te(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},ca(o),e}function wh(e,t,i){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:i}}function gu(e){if(!e)return kt;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var i=e.type;if(ve(i))return gd(e,i,t)}return t}function xu(e,t,i,r,s,o,a,l,c){return e=Ea(i,r,!0,e,s,o,a,l,c),e.context=gu(null),i=e.current,r=me(),s=vt(i),o=Je(r,s),o.callback=t??null,xt(i,o,s),e.current.lanes=s,vi(e,s,r),we(e,r),e}function Br(e,t,i,r){var s=t.current,o=me(),a=vt(s);return i=gu(i),t.context===null?t.context=i:t.pendingContext=i,t=Je(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xt(s,t,a),e!==null&&(Fe(e,s,a,o),Ki(e,s,a)),a}function Cr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function _a(e,t){Fl(e,t),(e=e.alternate)&&Fl(e,t)}function bh(){return null}var yu=typeof reportError=="function"?reportError:function(e){console.error(e)};function za(e){this._internalRoot=e}$r.prototype.render=za.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Br(e,t,null,null)};$r.prototype.unmount=za.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){Br(null,e,null,null)}),t[tt]=null}};function $r(e){this._internalRoot=e}$r.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gc();e={blockedOn:null,target:e,priority:t};for(var i=0;i<lt.length&&t!==0&&t<lt[i].priority;i++);lt.splice(i,0,e),i===0&&Xc(e)}};function Ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dl(){}function jh(e,t,i,r,s){if(s){if(typeof r=="function"){var o=r;r=function(){var d=Cr(a);o.call(d)}}var a=xu(t,r,e,0,null,!1,!1,"",Dl);return e._reactRootContainer=a,e[tt]=a.current,ai(e.nodeType===8?e.parentNode:e),Wt(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=Cr(c);l.call(d)}}var c=Ea(e,0,!1,null,null,!1,!1,"",Dl);return e._reactRootContainer=c,e[tt]=c.current,ai(e.nodeType===8?e.parentNode:e),Wt(function(){Br(t,c,i,r)}),c}function Vr(e,t,i,r,s){var o=i._reactRootContainer;if(o){var a=o;if(typeof s=="function"){var l=s;s=function(){var c=Cr(a);l.call(c)}}Br(t,a,e,s)}else a=jh(i,t,e,s,r);return Cr(a)}Vc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=Dn(t.pendingLanes);i!==0&&(Qo(t,i|1),we(t,K()),!(O&6)&&(jn=K()+500,Et()))}break;case 13:Wt(function(){var r=nt(e,1);if(r!==null){var s=me();Fe(r,e,1,s)}}),_a(e,1)}};Go=function(e){if(e.tag===13){var t=nt(e,134217728);if(t!==null){var i=me();Fe(t,e,134217728,i)}_a(e,134217728)}};Qc=function(e){if(e.tag===13){var t=vt(e),i=nt(e,t);if(i!==null){var r=me();Fe(i,e,t,r)}_a(e,t)}};Gc=function(){return M};Kc=function(e,t){var i=M;try{return M=e,t()}finally{M=i}};Qs=function(e,t,i){switch(t){case"input":if(Fs(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var r=i[t];if(r!==e&&r.form===e.form){var s=Rr(r);if(!s)throw Error(j(90));_c(r),Fs(r,s)}}}break;case"textarea":Cc(e,i);break;case"select":t=i.value,t!=null&&ln(e,!!i.multiple,t,!1)}};Mc=ja;Rc=Wt;var kh={usingClientEntryPoint:!1,Events:[bi,en,Rr,Pc,Oc,ja]},Rn={findFiberByHostInstance:It,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nh={bundleType:Rn.bundleType,version:Rn.version,rendererPackageName:Rn.rendererPackageName,rendererConfig:Rn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hc(e),e===null?null:e.stateNode},findFiberByHostInstance:Rn.findFiberByHostInstance||bh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Di=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Di.isDisabled&&Di.supportsFiber)try{Ir=Di.inject(Nh),Ye=Di}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kh;Se.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ca(t))throw Error(j(200));return wh(e,t,null,i)};Se.createRoot=function(e,t){if(!Ca(e))throw Error(j(299));var i=!1,r="",s=yu;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Ea(e,1,!1,null,null,i,!1,r,s),e[tt]=t.current,ai(e.nodeType===8?e.parentNode:e),new za(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Hc(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Wt(e)};Se.hydrate=function(e,t,i){if(!Yr(t))throw Error(j(200));return Vr(null,e,t,!0,i)};Se.hydrateRoot=function(e,t,i){if(!Ca(e))throw Error(j(405));var r=i!=null&&i.hydratedSources||null,s=!1,o="",a=yu;if(i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onRecoverableError!==void 0&&(a=i.onRecoverableError)),t=xu(t,null,e,1,i??null,s,!1,o,a),e[tt]=t.current,ai(e),r)for(e=0;e<r.length;e++)i=r[e],s=i._getVersion,s=s(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,s]:t.mutableSourceEagerHydrationData.push(i,s);return new $r(t)};Se.render=function(e,t,i){if(!Yr(t))throw Error(j(200));return Vr(null,e,t,!1,i)};Se.unmountComponentAtNode=function(e){if(!Yr(e))throw Error(j(40));return e._reactRootContainer?(Wt(function(){Vr(null,null,e,!1,function(){e._reactRootContainer=null,e[tt]=null})}),!0):!1};Se.unstable_batchedUpdates=ja;Se.unstable_renderSubtreeIntoContainer=function(e,t,i,r){if(!Yr(i))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Vr(e,t,i,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function vu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vu)}catch(e){console.error(e)}}vu(),vc.exports=Se;var Sh=vc.exports,Wl=Sh;Ps.createRoot=Wl.createRoot,Ps.hydrateRoot=Wl.hydrateRoot;var Eh=typeof Element<"u",_h=typeof Map=="function",zh=typeof Set=="function",Ch=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ir(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var i,r,s;if(Array.isArray(e)){if(i=e.length,i!=t.length)return!1;for(r=i;r--!==0;)if(!ir(e[r],t[r]))return!1;return!0}var o;if(_h&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;for(o=e.entries();!(r=o.next()).done;)if(!ir(r.value[1],t.get(r.value[0])))return!1;return!0}if(zh&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(Ch&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(i=e.length,i!=t.length)return!1;for(r=i;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(s=Object.keys(e),i=s.length,i!==Object.keys(t).length)return!1;for(r=i;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[r]))return!1;if(Eh&&e instanceof Element)return!1;for(r=i;r--!==0;)if(!((s[r]==="_owner"||s[r]==="__v"||s[r]==="__o")&&e.$$typeof)&&!ir(e[s[r]],t[s[r]]))return!1;return!0}return e!==e&&t!==t}var Th=function(t,i){try{return ir(t,i)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const qh=qr(Th);var Ah=function(e,t,i,r,s,o,a,l){if(!e){var c;if(t===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[i,r,s,o,a,l],m=0;c=new Error(t.replace(/%s/g,function(){return d[m++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},Ih=Ah;const Bl=qr(Ih);var Ph=function(t,i,r,s){var o=r?r.call(s,t,i):void 0;if(o!==void 0)return!!o;if(t===i)return!0;if(typeof t!="object"||!t||typeof i!="object"||!i)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(i),d=0;d<a.length;d++){var m=a[d];if(!c(m))return!1;var p=t[m],g=i[m];if(o=r?r.call(s,p,g,m):void 0,o===!1||o===void 0&&p!==g)return!1}return!0};const Oh=qr(Ph);var wu=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(wu||{}),Ss={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},$l=Object.values(wu),Qr={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},bu=Object.entries(Qr).reduce((e,[t,i])=>(e[i]=t,e),{}),Ue="data-rh",hn={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},fn=(e,t)=>{for(let i=e.length-1;i>=0;i-=1){const r=e[i];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},Mh=e=>{let t=fn(e,"title");const i=fn(e,hn.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),i&&t)return i.replace(/%s/g,()=>t);const r=fn(e,hn.DEFAULT_TITLE);return t||r||void 0},Rh=e=>fn(e,hn.ON_CHANGE_CLIENT_STATE)||(()=>{}),Es=(e,t)=>t.filter(i=>typeof i[e]<"u").map(i=>i[e]).reduce((i,r)=>({...i,...r}),{}),Lh=(e,t)=>t.filter(i=>typeof i.base<"u").map(i=>i.base).reverse().reduce((i,r)=>{if(!i.length){const s=Object.keys(r);for(let o=0;o<s.length;o+=1){const l=s[o].toLowerCase();if(e.indexOf(l)!==-1&&r[l])return i.concat(r)}}return i},[]),Uh=e=>console&&typeof console.warn=="function"&&console.warn(e),Ln=(e,t,i)=>{const r={};return i.filter(s=>Array.isArray(s[e])?!0:(typeof s[e]<"u"&&Uh(`Helmet: ${e} should be of type "Array". Instead found type "${typeof s[e]}"`),!1)).map(s=>s[e]).reverse().reduce((s,o)=>{const a={};o.filter(c=>{let d;const m=Object.keys(c);for(let g=0;g<m.length;g+=1){const x=m[g],y=x.toLowerCase();t.indexOf(y)!==-1&&!(d==="rel"&&c[d].toLowerCase()==="canonical")&&!(y==="rel"&&c[y].toLowerCase()==="stylesheet")&&(d=y),t.indexOf(x)!==-1&&(x==="innerHTML"||x==="cssText"||x==="itemprop")&&(d=x)}if(!d||!c[d])return!1;const p=c[d].toLowerCase();return r[d]||(r[d]={}),a[d]||(a[d]={}),r[d][p]?!1:(a[d][p]=!0,!0)}).reverse().forEach(c=>s.push(c));const l=Object.keys(a);for(let c=0;c<l.length;c+=1){const d=l[c],m={...r[d],...a[d]};r[d]=m}return s},[]).reverse()},Hh=(e,t)=>{if(Array.isArray(e)&&e.length){for(let i=0;i<e.length;i+=1)if(e[i][t])return!0}return!1},Fh=e=>({baseTag:Lh(["href"],e),bodyAttributes:Es("bodyAttributes",e),defer:fn(e,hn.DEFER),encode:fn(e,hn.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Es("htmlAttributes",e),linkTags:Ln("link",["rel","href"],e),metaTags:Ln("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:Ln("noscript",["innerHTML"],e),onChangeClientState:Rh(e),scriptTags:Ln("script",["src","innerHTML"],e),styleTags:Ln("style",["cssText"],e),title:Mh(e),titleAttributes:Es("titleAttributes",e),prioritizeSeoTags:Hh(e,hn.PRIORITIZE_SEO_TAGS)}),ju=e=>Array.isArray(e)?e.join(""):e,Dh=(e,t)=>{const i=Object.keys(e);for(let r=0;r<i.length;r+=1)if(t[i[r]]&&t[i[r]].includes(e[i[r]]))return!0;return!1},_s=(e,t)=>Array.isArray(e)?e.reduce((i,r)=>(Dh(r,t)?i.priority.push(r):i.default.push(r),i),{priority:[],default:[]}):{default:e,priority:[]},Yl=(e,t)=>({...e,[t]:void 0}),Wh=["noscript","script","style"],zo=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),ku=e=>Object.keys(e).reduce((t,i)=>{const r=typeof e[i]<"u"?`${i}="${e[i]}"`:`${i}`;return t?`${t} ${r}`:r},""),Bh=(e,t,i,r)=>{const s=ku(i),o=ju(t);return s?`<${e} ${Ue}="true" ${s}>${zo(o,r)}</${e}>`:`<${e} ${Ue}="true">${zo(o,r)}</${e}>`},$h=(e,t,i=!0)=>t.reduce((r,s)=>{const o=s,a=Object.keys(o).filter(d=>!(d==="innerHTML"||d==="cssText")).reduce((d,m)=>{const p=typeof o[m]>"u"?m:`${m}="${zo(o[m],i)}"`;return d?`${d} ${p}`:p},""),l=o.innerHTML||o.cssText||"",c=Wh.indexOf(e)===-1;return`${r}<${e} ${Ue}="true" ${a}${c?"/>":`>${l}</${e}>`}`},""),Nu=(e,t={})=>Object.keys(e).reduce((i,r)=>{const s=Qr[r];return i[s||r]=e[r],i},t),Yh=(e,t,i)=>{const r={key:t,[Ue]:!0},s=Nu(i,r);return[W.createElement("title",s,t)]},rr=(e,t)=>t.map((i,r)=>{const s={key:r,[Ue]:!0};return Object.keys(i).forEach(o=>{const l=Qr[o]||o;if(l==="innerHTML"||l==="cssText"){const c=i.innerHTML||i.cssText;s.dangerouslySetInnerHTML={__html:c}}else s[l]=i[o]}),W.createElement(e,s)}),_e=(e,t,i=!0)=>{switch(e){case"title":return{toComponent:()=>Yh(e,t.title,t.titleAttributes),toString:()=>Bh(e,t.title,t.titleAttributes,i)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Nu(t),toString:()=>ku(t)};default:return{toComponent:()=>rr(e,t),toString:()=>$h(e,t,i)}}},Vh=({metaTags:e,linkTags:t,scriptTags:i,encode:r})=>{const s=_s(e,Ss.meta),o=_s(t,Ss.link),a=_s(i,Ss.script);return{priorityMethods:{toComponent:()=>[...rr("meta",s.priority),...rr("link",o.priority),...rr("script",a.priority)],toString:()=>`${_e("meta",s.priority,r)} ${_e("link",o.priority,r)} ${_e("script",a.priority,r)}`},metaTags:s.default,linkTags:o.default,scriptTags:a.default}},Qh=e=>{const{baseTag:t,bodyAttributes:i,encode:r=!0,htmlAttributes:s,noscriptTags:o,styleTags:a,title:l="",titleAttributes:c,prioritizeSeoTags:d}=e;let{linkTags:m,metaTags:p,scriptTags:g}=e,x={toComponent:()=>[],toString:()=>""};return d&&({priorityMethods:x,linkTags:m,metaTags:p,scriptTags:g}=Vh(e)),{priority:x,base:_e("base",t,r),bodyAttributes:_e("bodyAttributes",i,r),htmlAttributes:_e("htmlAttributes",s,r),link:_e("link",m,r),meta:_e("meta",p,r),noscript:_e("noscript",o,r),script:_e("script",g,r),style:_e("style",a,r),title:_e("title",{title:l,titleAttributes:c},r)}},Co=Qh,Wi=[],Ta=!!(typeof window<"u"&&window.document&&window.document.createElement),To=class{constructor(e,t){Qe(this,"instances",[]);Qe(this,"canUseDOM",Ta);Qe(this,"context");Qe(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?Wi:this.instances,add:e=>{(this.canUseDOM?Wi:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?Wi:this.instances).indexOf(e);(this.canUseDOM?Wi:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Co({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Gh=parseInt(W.version.split(".")[0],10),qo=Gh>=19,Kh={},Su=W.createContext(Kh),Mt,Eu=(Mt=class extends b.Component{constructor(i){super(i);Qe(this,"helmetData");qo?this.helmetData=null:this.helmetData=new To(this.props.context||{},Mt.canUseDOM)}render(){return qo?W.createElement(W.Fragment,null,this.props.children):W.createElement(Su.Provider,{value:this.helmetData.value},this.props.children)}},Qe(Mt,"canUseDOM",Ta),Mt),Qt=(e,t)=>{const i=document.head||document.querySelector("head"),r=i.querySelectorAll(`${e}[${Ue}]`),s=[].slice.call(r),o=[];let a;return t&&t.length&&t.forEach(l=>{const c=document.createElement(e);for(const d in l)if(Object.prototype.hasOwnProperty.call(l,d))if(d==="innerHTML")c.innerHTML=l.innerHTML;else if(d==="cssText"){const m=l.cssText;c.appendChild(document.createTextNode(m))}else{const m=d,p=typeof l[m]>"u"?"":l[m];c.setAttribute(d,p)}c.setAttribute(Ue,"true"),s.some((d,m)=>(a=m,c.isEqualNode(d)))?s.splice(a,1):o.push(c)}),s.forEach(l=>{var c;return(c=l.parentNode)==null?void 0:c.removeChild(l)}),o.forEach(l=>i.appendChild(l)),{oldTags:s,newTags:o}},Ao=(e,t)=>{const i=document.getElementsByTagName(e)[0];if(!i)return;const r=i.getAttribute(Ue),s=r?r.split(","):[],o=[...s],a=Object.keys(t);for(const l of a){const c=t[l]||"";i.getAttribute(l)!==c&&i.setAttribute(l,c),s.indexOf(l)===-1&&s.push(l);const d=o.indexOf(l);d!==-1&&o.splice(d,1)}for(let l=o.length-1;l>=0;l-=1)i.removeAttribute(o[l]);s.length===o.length?i.removeAttribute(Ue):i.getAttribute(Ue)!==a.join(",")&&i.setAttribute(Ue,a.join(","))},Xh=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=ju(e)),Ao("title",t)},Vl=(e,t)=>{const{baseTag:i,bodyAttributes:r,htmlAttributes:s,linkTags:o,metaTags:a,noscriptTags:l,onChangeClientState:c,scriptTags:d,styleTags:m,title:p,titleAttributes:g}=e;Ao("body",r),Ao("html",s),Xh(p,g);const x={baseTag:Qt("base",i),linkTags:Qt("link",o),metaTags:Qt("meta",a),noscriptTags:Qt("noscript",l),scriptTags:Qt("script",d),styleTags:Qt("style",m)},y={},w={};Object.keys(x).forEach(N=>{const{newTags:h,oldTags:u}=x[N];h.length&&(y[N]=h),u.length&&(w[N]=x[N].oldTags)}),t&&t(),c(e,y,w)},Un=null,Zh=e=>{Un&&cancelAnimationFrame(Un),e.defer?Un=requestAnimationFrame(()=>{Vl(e,()=>{Un=null})}):(Vl(e),Un=null)},Jh=Zh,Ql=class extends b.Component{constructor(){super(...arguments);Qe(this,"rendered",!1)}shouldComponentUpdate(t){return!Oh(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:i}=this.props.context;let r=null;const s=Fh(t.get().map(o=>{const{context:a,...l}=o.props;return l}));Eu.canUseDOM?Jh(s):Co&&(r=Co(s)),i(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},sr=[],Gl=e=>{const t={};for(const i of Object.keys(e))t[bu[i]||i]=e[i];return t},Tt=e=>{const t={};for(const i of Object.keys(e)){const r=Qr[i];t[r||i]=e[i]}return t},Kl=(e,t)=>{if(!Ta)return;const i=document.getElementsByTagName(e)[0];if(!i)return;const r="data-rh-managed",s=i.getAttribute(r),o=s?s.split(","):[],a=Object.keys(t);for(const l of o)a.includes(l)||i.removeAttribute(l);for(const l of a){const c=t[l];c==null||c===!1?i.removeAttribute(l):c===!0?i.setAttribute(l,""):i.setAttribute(l,String(c))}a.length>0?i.setAttribute(r,a.join(",")):i.removeAttribute(r)},zs=()=>{const e={},t={};for(const i of sr){const{htmlAttributes:r,bodyAttributes:s}=i.props;r&&Object.assign(e,Gl(r)),s&&Object.assign(t,Gl(s))}Kl("html",e),Kl("body",t)},ef=class extends b.Component{componentDidMount(){sr.push(this),zs()}componentDidUpdate(){zs()}componentWillUnmount(){const e=sr.indexOf(this);e!==-1&&sr.splice(e,1),zs()}resolveTitle(){const{title:e,titleTemplate:t,defaultTitle:i}=this.props;return e&&t?t.replace(/%s/g,()=>Array.isArray(e)?e.join(""):e):e||i||void 0}renderTitle(){const e=this.resolveTitle();if(e===void 0)return null;const t=this.props.titleAttributes||{};return W.createElement("title",Tt(t),e)}renderBase(){const{base:e}=this.props;return e?W.createElement("base",Tt(e)):null}renderMeta(){const{meta:e}=this.props;return!e||!Array.isArray(e)?null:e.map((t,i)=>W.createElement("meta",{key:i,...Tt(t)}))}renderLink(){const{link:e}=this.props;return!e||!Array.isArray(e)?null:e.map((t,i)=>W.createElement("link",{key:i,...Tt(t)}))}renderScript(){const{script:e}=this.props;return!e||!Array.isArray(e)?null:e.map((t,i)=>{const{innerHTML:r,...s}=t,o=Tt(s);return r&&(o.dangerouslySetInnerHTML={__html:r}),W.createElement("script",{key:i,...o})})}renderStyle(){const{style:e}=this.props;return!e||!Array.isArray(e)?null:e.map((t,i)=>{const{cssText:r,...s}=t,o=Tt(s);return r&&(o.dangerouslySetInnerHTML={__html:r}),W.createElement("style",{key:i,...o})})}renderNoscript(){const{noscript:e}=this.props;return!e||!Array.isArray(e)?null:e.map((t,i)=>{const{innerHTML:r,...s}=t,o=Tt(s);return r&&(o.dangerouslySetInnerHTML={__html:r}),W.createElement("noscript",{key:i,...o})})}render(){return W.createElement(W.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},Is,tf=(Is=class extends b.Component{shouldComponentUpdate(e){return!qh(Yl(this.props,"helmetData"),Yl(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,i,r){return{...t,[e.type]:[...t[e.type]||[],{...i,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,i,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...i}};case"body":return{...t,bodyAttributes:{...i}};case"html":return{...t,htmlAttributes:{...i}};default:return{...t,[e.type]:{...i}}}}mapArrayTypeChildrenToProps(e,t){let i={...t};return Object.keys(e).forEach(r=>{i={...i,[r]:e[r]}}),i}warnOnInvalidChildren(e,t){return Bl($l.some(i=>e.type===i),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${$l.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),Bl(!t||typeof t=="string"||Array.isArray(t)&&!t.some(i=>typeof i!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let i={};return W.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:s,...o}=r.props,a=Object.keys(o).reduce((c,d)=>(c[bu[d]||d]=o[d],c),{});let{type:l}=r;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(r,s),l){case"Symbol(react.fragment)":t=this.mapChildrenToProps(s,t);break;case"link":case"meta":case"noscript":case"script":case"style":i=this.flattenArrayTypeChildren(r,i,a,s);break;default:t=this.mapObjectTypeChildren(r,t,a,s);break}}),this.mapArrayTypeChildrenToProps(i,t)}render(){const{children:e,...t}=this.props;let i={...t},{helmetData:r}=t;if(e&&(i=this.mapChildrenToProps(e,i)),r&&!(r instanceof To)){const s=r;r=new To(s.context,!0),delete i.helmetData}return qo?W.createElement(ef,{...i}):r?W.createElement(Ql,{...i,context:r.value}):W.createElement(Su.Consumer,null,s=>W.createElement(Ql,{...i,context:s}))}},Qe(Is,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Is);/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gi(){return gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},gi.apply(this,arguments)}var pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(pt||(pt={}));const Xl="popstate";function nf(e){e===void 0&&(e={});function t(r,s){let{pathname:o,search:a,hash:l}=r.location;return Io("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function i(r,s){return typeof s=="string"?s:Tr(s)}return sf(t,i,null,e)}function Z(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function qa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function rf(){return Math.random().toString(36).substr(2,8)}function Zl(e,t){return{usr:e.state,key:e.key,idx:t}}function Io(e,t,i,r){return i===void 0&&(i=null),gi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?En(t):t,{state:i,key:t&&t.key||r||rf()})}function Tr(e){let{pathname:t="/",search:i="",hash:r=""}=e;return i&&i!=="?"&&(t+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function En(e){let t={};if(e){let i=e.indexOf("#");i>=0&&(t.hash=e.substr(i),e=e.substr(0,i));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function sf(e,t,i,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:o=!1}=r,a=s.history,l=pt.Pop,c=null,d=m();d==null&&(d=0,a.replaceState(gi({},a.state,{idx:d}),""));function m(){return(a.state||{idx:null}).idx}function p(){l=pt.Pop;let N=m(),h=N==null?null:N-d;d=N,c&&c({action:l,location:w.location,delta:h})}function g(N,h){l=pt.Push;let u=Io(w.location,N,h);d=m()+1;let f=Zl(u,d),v=w.createHref(u);try{a.pushState(f,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;s.location.assign(v)}o&&c&&c({action:l,location:w.location,delta:1})}function x(N,h){l=pt.Replace;let u=Io(w.location,N,h);d=m();let f=Zl(u,d),v=w.createHref(u);a.replaceState(f,"",v),o&&c&&c({action:l,location:w.location,delta:0})}function y(N){let h=s.location.origin!=="null"?s.location.origin:s.location.href,u=typeof N=="string"?N:Tr(N);return u=u.replace(/ $/,"%20"),Z(h,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,h)}let w={get action(){return l},get location(){return e(s,a)},listen(N){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Xl,p),c=N,()=>{s.removeEventListener(Xl,p),c=null}},createHref(N){return t(s,N)},createURL:y,encodeLocation(N){let h=y(N);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:x,go(N){return a.go(N)}};return w}var Jl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Jl||(Jl={}));function of(e,t,i){return i===void 0&&(i="/"),af(e,t,i)}function af(e,t,i,r){let s=typeof t=="string"?En(t):t,o=Aa(s.pathname||"/",i);if(o==null)return null;let a=_u(e);lf(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let d=wf(o);l=xf(a[c],d)}return l}function _u(e,t,i,r){t===void 0&&(t=[]),i===void 0&&(i=[]),r===void 0&&(r="");let s=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(Z(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=bt([r,c.relativePath]),m=i.concat(c);o.children&&o.children.length>0&&(Z(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),_u(o.children,t,m,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:ff(d,o.index),routesMeta:m})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))s(o,a);else for(let c of zu(o.path))s(o,a,c)}),t}function zu(e){let t=e.split("/");if(t.length===0)return[];let[i,...r]=t,s=i.endsWith("?"),o=i.replace(/\?$/,"");if(r.length===0)return s?[o,""]:[o];let a=zu(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),s&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function lf(e){e.sort((t,i)=>t.score!==i.score?i.score-t.score:gf(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}const cf=/^:[\w-]+$/,df=3,uf=2,pf=1,mf=10,hf=-2,ec=e=>e==="*";function ff(e,t){let i=e.split("/"),r=i.length;return i.some(ec)&&(r+=hf),t&&(r+=uf),i.filter(s=>!ec(s)).reduce((s,o)=>s+(cf.test(o)?df:o===""?pf:mf),r)}function gf(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function xf(e,t,i){let{routesMeta:r}=e,s={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],d=l===r.length-1,m=o==="/"?t:t.slice(o.length)||"/",p=yf({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},m),g=c.route;if(!p)return null;Object.assign(s,p.params),a.push({params:s,pathname:bt([o,p.pathname]),pathnameBase:Sf(bt([o,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(o=bt([o,p.pathnameBase]))}return a}function yf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,r]=vf(e.path,e.caseSensitive,e.end),s=t.match(i);if(!s)return null;let o=s[0],a=o.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((d,m,p)=>{let{paramName:g,isOptional:x}=m;if(g==="*"){let w=l[p]||"";a=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=l[p];return x&&!y?d[g]=void 0:d[g]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:a,pattern:e}}function vf(e,t,i){t===void 0&&(t=!1),i===void 0&&(i=!0),qa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function wf(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return qa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Aa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=e.charAt(i);return r&&r!=="/"?null:e.slice(i)||"/"}const bf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jf=e=>bf.test(e);function kf(e,t){t===void 0&&(t="/");let{pathname:i,search:r="",hash:s=""}=typeof e=="string"?En(e):e,o;if(i)if(jf(i))o=i;else{if(i.includes("//")){let a=i;i=i.replace(/\/\/+/g,"/"),qa(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+i))}i.startsWith("/")?o=tc(i.substring(1),"/"):o=tc(i,t)}else o=t;return{pathname:o,search:Ef(r),hash:_f(s)}}function tc(e,t){let i=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?i.length>1&&i.pop():s!=="."&&i.push(s)}),i.length>1?i.join("/"):"/"}function Cs(e,t,i,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Nf(e){return e.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Cu(e,t){let i=Nf(e);return t?i.map((r,s)=>s===i.length-1?r.pathname:r.pathnameBase):i.map(r=>r.pathnameBase)}function Tu(e,t,i,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=En(e):(s=gi({},e),Z(!s.pathname||!s.pathname.includes("?"),Cs("?","pathname","search",s)),Z(!s.pathname||!s.pathname.includes("#"),Cs("#","pathname","hash",s)),Z(!s.search||!s.search.includes("#"),Cs("#","search","hash",s)));let o=e===""||s.pathname==="",a=o?"/":s.pathname,l;if(a==null)l=i;else{let p=t.length-1;if(!r&&a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),p-=1;s.pathname=g.join("/")}l=p>=0?t[p]:"/"}let c=kf(s,l),d=a&&a!=="/"&&a.endsWith("/"),m=(o||a===".")&&i.endsWith("/");return!c.pathname.endsWith("/")&&(d||m)&&(c.pathname+="/"),c}const bt=e=>e.join("/").replace(/\/\/+/g,"/"),Sf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ef=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_f=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function zf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const qu=["post","put","patch","delete"];new Set(qu);const Cf=["get",...qu];new Set(Cf);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xi(){return xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},xi.apply(this,arguments)}const Ia=b.createContext(null),Tf=b.createContext(null),Yt=b.createContext(null),Gr=b.createContext(null),_t=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Au=b.createContext(null);function qf(e,t){let{relative:i}=t===void 0?{}:t;ki()||Z(!1);let{basename:r,navigator:s}=b.useContext(Yt),{hash:o,pathname:a,search:l}=Pu(e,{relative:i}),c=a;return r!=="/"&&(c=a==="/"?r:bt([r,a])),s.createHref({pathname:c,search:l,hash:o})}function ki(){return b.useContext(Gr)!=null}function _n(){return ki()||Z(!1),b.useContext(Gr).location}function Iu(e){b.useContext(Yt).static||b.useLayoutEffect(e)}function Af(){let{isDataRoute:e}=b.useContext(_t);return e?Vf():If()}function If(){ki()||Z(!1);let e=b.useContext(Ia),{basename:t,future:i,navigator:r}=b.useContext(Yt),{matches:s}=b.useContext(_t),{pathname:o}=_n(),a=JSON.stringify(Cu(s,i.v7_relativeSplatPath)),l=b.useRef(!1);return Iu(()=>{l.current=!0}),b.useCallback(function(d,m){if(m===void 0&&(m={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let p=Tu(d,JSON.parse(a),o,m.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:bt([t,p.pathname])),(m.replace?r.replace:r.push)(p,m.state,m)},[t,r,a,o,e])}const Pf=b.createContext(null);function Of(e){let t=b.useContext(_t).outlet;return t&&b.createElement(Pf.Provider,{value:e},t)}function Pu(e,t){let{relative:i}=t===void 0?{}:t,{future:r}=b.useContext(Yt),{matches:s}=b.useContext(_t),{pathname:o}=_n(),a=JSON.stringify(Cu(s,r.v7_relativeSplatPath));return b.useMemo(()=>Tu(e,JSON.parse(a),o,i==="path"),[e,a,o,i])}function Mf(e,t){return Rf(e,t)}function Rf(e,t,i,r){ki()||Z(!1);let{navigator:s}=b.useContext(Yt),{matches:o}=b.useContext(_t),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let d=_n(),m;if(t){var p;let N=typeof t=="string"?En(t):t;c==="/"||(p=N.pathname)!=null&&p.startsWith(c)||Z(!1),m=N}else m=d;let g=m.pathname||"/",x=g;if(c!=="/"){let N=c.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(N.length).join("/")}let y=of(e,{pathname:x}),w=Df(y&&y.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:bt([c,s.encodeLocation?s.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?c:bt([c,s.encodeLocation?s.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),o,i,r);return t&&w?b.createElement(Gr.Provider,{value:{location:xi({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:pt.Pop}},w):w}function Lf(){let e=Yf(),t=zf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),i?b.createElement("pre",{style:s},i):null,null)}const Uf=b.createElement(Lf,null);class Hf extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,i){return i.location!==t.location||i.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:i.error,location:i.location,revalidation:t.revalidation||i.revalidation}}componentDidCatch(t,i){console.error("React Router caught the following error during render",t,i)}render(){return this.state.error!==void 0?b.createElement(_t.Provider,{value:this.props.routeContext},b.createElement(Au.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ff(e){let{routeContext:t,match:i,children:r}=e,s=b.useContext(Ia);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),b.createElement(_t.Provider,{value:t},r)}function Df(e,t,i,r){var s;if(t===void 0&&(t=[]),i===void 0&&(i=null),r===void 0&&(r=null),e==null){var o;if(!i)return null;if(i.errors)e=i.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let a=e,l=(s=i)==null?void 0:s.errors;if(l!=null){let m=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);m>=0||Z(!1),a=a.slice(0,Math.min(a.length,m+1))}let c=!1,d=-1;if(i&&r&&r.v7_partialHydration)for(let m=0;m<a.length;m++){let p=a[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=m),p.route.id){let{loaderData:g,errors:x}=i,y=p.route.loader&&g[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||y){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((m,p,g)=>{let x,y=!1,w=null,N=null;i&&(x=l&&p.route.id?l[p.route.id]:void 0,w=p.route.errorElement||Uf,c&&(d<0&&g===0?(Qf("route-fallback"),y=!0,N=null):d===g&&(y=!0,N=p.route.hydrateFallbackElement||null)));let h=t.concat(a.slice(0,g+1)),u=()=>{let f;return x?f=w:y?f=N:p.route.Component?f=b.createElement(p.route.Component,null):p.route.element?f=p.route.element:f=m,b.createElement(Ff,{match:p,routeContext:{outlet:m,matches:h,isDataRoute:i!=null},children:f})};return i&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?b.createElement(Hf,{location:i.location,revalidation:i.revalidation,component:w,error:x,children:u(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):u()},null)}var Ou=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ou||{}),Mu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Mu||{});function Wf(e){let t=b.useContext(Ia);return t||Z(!1),t}function Bf(e){let t=b.useContext(Tf);return t||Z(!1),t}function $f(e){let t=b.useContext(_t);return t||Z(!1),t}function Ru(e){let t=$f(),i=t.matches[t.matches.length-1];return i.route.id||Z(!1),i.route.id}function Yf(){var e;let t=b.useContext(Au),i=Bf(),r=Ru();return t!==void 0?t:(e=i.errors)==null?void 0:e[r]}function Vf(){let{router:e}=Wf(Ou.UseNavigateStable),t=Ru(Mu.UseNavigateStable),i=b.useRef(!1);return Iu(()=>{i.current=!0}),b.useCallback(function(s,o){o===void 0&&(o={}),i.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,xi({fromRouteId:t},o)))},[e,t])}const nc={};function Qf(e,t,i){nc[e]||(nc[e]=!0)}function Gf(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Kf(e){return Of(e.context)}function H(e){Z(!1)}function Xf(e){let{basename:t="/",children:i=null,location:r,navigationType:s=pt.Pop,navigator:o,static:a=!1,future:l}=e;ki()&&Z(!1);let c=t.replace(/^\/*/,"/"),d=b.useMemo(()=>({basename:c,navigator:o,static:a,future:xi({v7_relativeSplatPath:!1},l)}),[c,l,o,a]);typeof r=="string"&&(r=En(r));let{pathname:m="/",search:p="",hash:g="",state:x=null,key:y="default"}=r,w=b.useMemo(()=>{let N=Aa(m,c);return N==null?null:{location:{pathname:N,search:p,hash:g,state:x,key:y},navigationType:s}},[c,m,p,g,x,y,s]);return w==null?null:b.createElement(Yt.Provider,{value:d},b.createElement(Gr.Provider,{children:i,value:w}))}function Zf(e){let{children:t,location:i}=e;return Mf(Po(t),i)}new Promise(()=>{});function Po(e,t){t===void 0&&(t=[]);let i=[];return b.Children.forEach(e,(r,s)=>{if(!b.isValidElement(r))return;let o=[...t,s];if(r.type===b.Fragment){i.push.apply(i,Po(r.props.children,o));return}r.type!==H&&Z(!1),!r.props.index||!r.props.children||Z(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Po(r.props.children,o)),i.push(a)}),i}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oo(){return Oo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},Oo.apply(this,arguments)}function Jf(e,t){if(e==null)return{};var i={},r=Object.keys(e),s,o;for(o=0;o<r.length;o++)s=r[o],!(t.indexOf(s)>=0)&&(i[s]=e[s]);return i}function eg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function tg(e,t){return e.button===0&&(!t||t==="_self")&&!eg(e)}const ng=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ig="6";try{window.__reactRouterVersion=ig}catch{}const rg="startTransition",ic=hp[rg];function sg(e){let{basename:t,children:i,future:r,window:s}=e,o=b.useRef();o.current==null&&(o.current=nf({window:s,v5Compat:!0}));let a=o.current,[l,c]=b.useState({action:a.action,location:a.location}),{v7_startTransition:d}=r||{},m=b.useCallback(p=>{d&&ic?ic(()=>c(p)):c(p)},[c,d]);return b.useLayoutEffect(()=>a.listen(m),[a,m]),b.useEffect(()=>Gf(r),[r]),b.createElement(Xf,{basename:t,children:i,location:l.location,navigationType:l.action,navigator:a,future:r})}const og=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ag=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,k=b.forwardRef(function(t,i){let{onClick:r,relative:s,reloadDocument:o,replace:a,state:l,target:c,to:d,preventScrollReset:m,viewTransition:p}=t,g=Jf(t,ng),{basename:x}=b.useContext(Yt),y,w=!1;if(typeof d=="string"&&ag.test(d)&&(y=d,og))try{let f=new URL(window.location.href),v=d.startsWith("//")?new URL(f.protocol+d):new URL(d),S=Aa(v.pathname,x);v.origin===f.origin&&S!=null?d=S+v.search+v.hash:w=!0}catch{}let N=qf(d,{relative:s}),h=lg(d,{replace:a,state:l,target:c,preventScrollReset:m,relative:s,viewTransition:p});function u(f){r&&r(f),f.defaultPrevented||h(f)}return b.createElement("a",Oo({},g,{href:y||N,onClick:w||o?r:u,ref:i,target:c}))});var rc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(rc||(rc={}));var sc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(sc||(sc={}));function lg(e,t){let{target:i,replace:r,state:s,preventScrollReset:o,relative:a,viewTransition:l}=t===void 0?{}:t,c=Af(),d=_n(),m=Pu(e,{relative:a});return b.useCallback(p=>{if(tg(p,i)){p.preventDefault();let g=r!==void 0?r:Tr(d)===Tr(m);c(e,{replace:g,state:s,preventScrollReset:o,relative:a,viewTransition:l})}},[d,c,m,r,s,i,e,o,a,l])}const cg=()=>{const{pathname:e}=_n();return b.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[e]),null};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),R=(e,t)=>{const i=b.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:l="",children:c,...d},m)=>b.createElement("svg",{ref:m,...dg,width:s,height:s,stroke:r,strokeWidth:a?Number(o)*24/Number(s):o,className:["lucide",`lucide-${ug(e)}`,l].join(" "),...d},[...t.map(([p,g])=>b.createElement(p,g)),...Array.isArray(c)?c:[c]]));return i.displayName=`${e}`,i};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=R("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=R("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=R("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=R("Construction",[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=R("Contact",[["path",{d:"M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2",key:"1mghuy"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["circle",{cx:"12",cy:"10",r:"2",key:"1yojzk"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=R("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=R("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=R("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=R("Hammer",[["path",{d:"m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",key:"1afvon"}],["path",{d:"M17.64 15 22 10.64",key:"zsji6s"}],["path",{d:"m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",key:"lehyy1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=R("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=R("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=R("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=R("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=R("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=R("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=R("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=R("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=R("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=R("MonitorCheck",[["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=R("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=R("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=R("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=R("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=R("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=R("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=R("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=R("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=R("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),Fu="/assets/logo-Ddn73lNT.png",Og=()=>{const[e,t]=b.useState(!1),[i,r]=b.useState(!1),[s,o]=b.useState(null),[a,l]=b.useState(null),c=_n(),d=b.useRef(null);b.useEffect(()=>{const x=()=>{r(window.scrollY>20)};return window.addEventListener("scroll",x),()=>window.removeEventListener("scroll",x)},[]),b.useEffect(()=>{t(!1),o(null),l(null)},[c]),b.useEffect(()=>{const x=y=>{d.current&&!d.current.contains(y.target)&&l(null)};return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[]);const m=x=>{l(a===x?null:x)},p=()=>{l(null)},g=x=>{o(s===x?null:x)};return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"info-bar",children:n.jsx("div",{className:"container info-bar__inner",children:n.jsxs("div",{className:"info-bar__contact",children:[n.jsxs("nav",{className:"info-bar__links",children:[n.jsx(k,{to:"/about",children:"About us"}),n.jsx(k,{to:"/projects",children:"Projects"})]}),n.jsx("div",{className:"info-bar__separator"}),n.jsxs("a",{href:"tel:8885072259",children:[n.jsx(Uu,{size:14,className:"icon-red"})," 8885072259"]}),n.jsxs("a",{href:"mailto:info@smaarelysium.com",children:[n.jsx(Lu,{size:14,className:"icon-red"})," info@smaarelysium.com"]})]})})}),n.jsxs("header",{className:`site-header ${i?"scrolled":""}`,children:[n.jsxs("div",{className:"container site-header__inner",children:[n.jsx(k,{to:"/",className:"site-header__logo",children:n.jsx("img",{src:Fu,alt:"Manpower Logo",className:"header-logo-img"})}),n.jsx("nav",{className:"main-nav",ref:d,children:n.jsxs("ul",{className:"main-nav__list",children:[n.jsxs("li",{className:`main-nav__item has-dropdown ${a==="services"?"dropdown-open":""}`,children:[n.jsxs("span",{className:"nav-dropdown-trigger",onClick:()=>m("services"),children:["Manpower Services ",n.jsx(Bi,{size:14,className:`dropdown-chevron ${a==="services"?"rotated":""}`})]}),n.jsxs("ul",{className:"dropdown",children:[n.jsx("li",{children:n.jsx(k,{to:"/",onClick:p,children:"Manpower Supply"})}),n.jsx("li",{children:n.jsx(k,{to:"/recruitment",onClick:p,children:"Recruitment"})}),n.jsx("li",{children:n.jsx(k,{to:"/contract-staffing",onClick:p,children:"Contract Staffing"})}),n.jsx("li",{children:n.jsx(k,{to:"/executive-search",onClick:p,children:"Executive Search"})}),n.jsx("li",{children:n.jsx(k,{to:"/hr-outsourcing",onClick:p,children:"HR Outsourcing"})}),n.jsx("li",{children:n.jsx(k,{to:"/security-solutions",onClick:p,children:"Security Solutions"})})]})]}),n.jsxs("li",{className:`main-nav__item has-dropdown ${a==="sectors"?"dropdown-open":""}`,children:[n.jsxs("span",{className:"nav-dropdown-trigger",onClick:()=>m("sectors"),children:["Sectors We Serve ",n.jsx(Bi,{size:14,className:`dropdown-chevron ${a==="sectors"?"rotated":""}`})]}),n.jsxs("ul",{className:"dropdown",children:[n.jsx("li",{children:n.jsx(k,{to:"/oil-gas",onClick:p,children:"Oil and Gas"})}),n.jsx("li",{children:n.jsx(k,{to:"/civil-construction",onClick:p,children:"Civil Construction"})}),n.jsx("li",{children:n.jsx(k,{to:"/facility-management",onClick:p,children:"Facility Management"})}),n.jsx("li",{children:n.jsx(k,{to:"/logistics",onClick:p,children:"Logistics"})}),n.jsx("li",{children:n.jsx(k,{to:"/manufacture",onClick:p,children:"Manufacture"})}),n.jsx("li",{children:n.jsx(k,{to:"/mep",onClick:p,children:"Mechanical, Electrical & Plumbing- MEP"})})]})]}),n.jsx("li",{className:"main-nav__item",children:n.jsx(k,{to:"/contact",children:"Contact Us"})})]})}),n.jsxs("div",{className:"site-header__actions",children:[n.jsx(k,{to:"/contact",className:"nav-bk-btn d-none-mobile",children:"BOOK MANPOWER"}),n.jsx("button",{className:"hamburger",onClick:()=>t(!e),children:e?n.jsx(Ig,{}):n.jsx(Sg,{})})]})]}),n.jsx("div",{className:`mobile-menu ${e?"open":""}`,children:n.jsx("div",{className:"container",children:n.jsxs("ul",{className:"mobile-menu__list",children:[n.jsxs("li",{className:`mobile-menu__item ${s==="services"?"active":""}`,children:[n.jsxs("div",{className:"mobile-menu__toggle",onClick:()=>g("services"),children:[n.jsx("span",{children:"Manpower Services"}),n.jsx(Bi,{size:20,className:"toggle-icon"})]}),n.jsxs("ul",{className:"mobile-dropdown",children:[n.jsx("li",{children:n.jsx(k,{to:"/",children:"Manpower Supply"})}),n.jsx("li",{children:n.jsx(k,{to:"/recruitment",children:"Recruitment"})}),n.jsx("li",{children:n.jsx(k,{to:"/contract-staffing",children:"Contract Staffing"})}),n.jsx("li",{children:n.jsx(k,{to:"/executive-search",children:"Executive Search"})}),n.jsx("li",{children:n.jsx(k,{to:"/hr-outsourcing",children:"HR Outsourcing"})}),n.jsx("li",{children:n.jsx(k,{to:"/security-solutions",children:"Security Solutions"})})]})]}),n.jsxs("li",{className:`mobile-menu__item ${s==="sectors"?"active":""}`,children:[n.jsxs("div",{className:"mobile-menu__toggle",onClick:()=>g("sectors"),children:[n.jsx("span",{children:"Sectors We Serve"}),n.jsx(Bi,{size:20,className:"toggle-icon"})]}),n.jsxs("ul",{className:"mobile-dropdown",children:[n.jsx("li",{children:n.jsx(k,{to:"/oil-gas",children:"Oil and Gas"})}),n.jsx("li",{children:n.jsx(k,{to:"/civil-construction",children:"Civil Construction"})}),n.jsx("li",{children:n.jsx(k,{to:"/facility-management",children:"Facility Management"})}),n.jsx("li",{children:n.jsx(k,{to:"/logistics",children:"Logistics"})}),n.jsx("li",{children:n.jsx(k,{to:"/manufacture",children:"Manufacture"})}),n.jsx("li",{children:n.jsx(k,{to:"/mep",children:"Mechanical, Electrical & Plumbing- MEP"})})]})]}),n.jsx("li",{children:n.jsx(k,{to:"/about",children:"About Us"})}),n.jsx("li",{children:n.jsx(k,{to:"/projects",children:"Projects"})}),n.jsx("li",{children:n.jsx(k,{to:"/contact",children:"Contact Us"})}),n.jsx("li",{children:n.jsx(k,{to:"/book-manpower",className:"nav-bk-btn",style:{display:"inline-flex",width:"100%",justifyContent:"center",marginTop:"20px"},children:"BOOK MANPOWER"})})]})})})]}),n.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})},Mg=()=>n.jsxs("footer",{className:"site-footer",children:[n.jsx("div",{className:"container",children:n.jsxs("div",{className:"footer-grid",children:[n.jsxs("div",{className:"footer-col brand",children:[n.jsx(k,{to:"/",className:"footer-logo-link",children:n.jsx("img",{src:Fu,alt:"Manpower Logo",className:"footer-logo-img"})}),n.jsx("p",{children:"Providing premium manpower solutions since 2003. We are leaders in recruitment, staffing, and HR outsourcing in the UAE."}),n.jsxs("div",{className:"social-links",children:[n.jsx("a",{href:"#",children:n.jsx(xg,{size:18})}),n.jsx("a",{href:"#",children:n.jsx(bg,{size:18})}),n.jsx("a",{href:"#",children:n.jsx(kg,{size:18})}),n.jsx("a",{href:"#",children:n.jsx(Pg,{size:18})})]})]}),n.jsxs("div",{className:"footer-col",children:[n.jsx("h4",{className:"footer-title",children:"Our Services"}),n.jsxs("ul",{className:"footer-links",children:[n.jsx("li",{children:n.jsx(k,{to:"/",children:"Manpower Supply"})}),n.jsx("li",{children:n.jsx(k,{to:"/recruitment",children:"Recruitment"})}),n.jsx("li",{children:n.jsx(k,{to:"/contract-staffing",children:"Contract Staffing"})}),n.jsx("li",{children:n.jsx(k,{to:"/executive-search",children:"Executive Search"})}),n.jsx("li",{children:n.jsx(k,{to:"/hr-outsourcing",children:"HR Outsourcing"})}),n.jsx("li",{children:n.jsx(k,{to:"/security-solutions",children:"Security Solutions"})})]})]}),n.jsxs("div",{className:"footer-col",children:[n.jsx("h4",{className:"footer-title",children:"Sectors"}),n.jsxs("ul",{className:"footer-links",children:[n.jsx("li",{children:n.jsx(k,{to:"/oil-gas",children:"Oil & Gas"})}),n.jsx("li",{children:n.jsx(k,{to:"/civil-construction",children:"Civil Construction"})}),n.jsx("li",{children:n.jsx(k,{to:"/facility-management",children:"Facility Management"})}),n.jsx("li",{children:n.jsx(k,{to:"/logistics",children:"Logistics"})}),n.jsx("li",{children:n.jsx(k,{to:"/manufacture",children:"Manufacture"})}),n.jsx("li",{children:n.jsx(k,{to:"/mep",children:"MEP Solutions"})})]})]}),n.jsxs("div",{className:"footer-col",children:[n.jsx("h4",{className:"footer-title",children:"Contact Us"}),n.jsxs("ul",{className:"footer-contact",children:[n.jsxs("li",{children:[n.jsx(Ng,{size:18}),n.jsx("span",{children:"Dubai"})]}),n.jsxs("li",{children:[n.jsx(Uu,{size:18}),n.jsx("a",{href:"tel:8885072259",children:"8885072259"})]}),n.jsxs("li",{children:[n.jsx(Lu,{size:18}),n.jsx("a",{href:"mailto:info@smaarelysium.com",children:"info@smaarelysium.com"})]})]})]})]})}),n.jsx("div",{className:"footer-bottom",children:n.jsxs("div",{className:"footer-bottom-inner",children:[n.jsxs("p",{children:["© ",new Date().getFullYear()," Smaar Elysium. All rights reserved."]}),n.jsx("div",{className:"footer-bottom-links",children:n.jsx("a",{href:"https://thepatternscompany.com/",target:"_blank",rel:"noreferrer",children:"Designed by The Patterns Company"})})]})}),n.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .site-footer { background: #1a1d21; color: #adb5bd; padding-top: 80px; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 40px; margin-bottom: 60px; }
        
        .footer-logo-link { display: block; margin-bottom: 25px; }
        .footer-logo-img { height: 70px; width: auto; filter: brightness(0) invert(1); }
        .footer-col.brand p { line-height: 1.8; margin-bottom: 25px; }

        
        .social-links { display: flex; gap: 10px; }
        .social-links a { width: 36px; height: 36px; background: #2a2e34; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; transition: 0.3s; }
        .social-links a:hover { background: var(--color-primary); }
        
        .footer-title { color: white; font-size: 1.1rem; margin-bottom: 25px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
        .footer-links li { margin-bottom: 12px; }
        .footer-links a:hover { color: var(--color-primary); padding-left: 5px; }
        
        .footer-contact li { display: flex; gap: 15px; margin-bottom: 20px; line-height: 1.6; }
        .footer-contact i, .footer-contact svg { color: var(--color-primary); flex-shrink: 0; }
        .footer-contact span, .footer-contact a { color: #adb5bd; }
        
        .footer-bottom { background: #fe7623; border-top: 1px solid #2a2e34; font-size: 0.85rem; color: #fff; width: 100%; }
        .footer-bottom-inner { max-width: 1200px; margin: 0 auto; padding: 25px 40px; display: flex; justify-content: space-between; align-items: center; }
        .footer-bottom-links a { margin-left: 20px; }
        .footer-bottom-links a:hover { color: white; }
        
        @media (max-width: 992px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 30px; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; gap: 30px; }
          .footer-bottom-inner { flex-direction: column; text-align: center; gap: 10px; padding: 20px; }
          .footer-bottom-links a { margin-left: 0; }
          .footer-logo-img { height: 55px; }
          .site-footer { padding-top: 50px; }
        }
      `}})]}),Rg="918885072259",Lg=()=>{const[e,t]=b.useState(!1);b.useEffect(()=>{const r=()=>t(window.scrollY>300);return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const i=()=>window.scrollTo({top:0,behavior:"smooth"});return n.jsxs("div",{className:"app-wrapper",children:[n.jsx(Og,{}),n.jsx("main",{className:"main-content",children:n.jsx(Kf,{})}),n.jsx(Mg,{}),n.jsx("a",{href:`https://wa.me/${Rg}`,target:"_blank",rel:"noreferrer",className:"float-whatsapp","aria-label":"Chat on WhatsApp",children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"30",height:"30",fill:"white",children:n.jsx("path",{d:"M16 0C7.163 0 0 7.163 0 16c0 2.82.737 5.47 2.027 7.774L0 32l8.437-2.01A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.77-1.853l-.485-.29-5.01 1.194 1.25-4.877-.317-.5A13.26 13.26 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.307-9.907c-.4-.2-2.364-1.167-2.73-1.3-.367-.133-.633-.2-.9.2-.267.4-1.033 1.3-1.267 1.567-.233.267-.467.3-.867.1-.4-.2-1.687-.623-3.213-1.98-1.187-1.057-1.99-2.363-2.223-2.763-.233-.4-.025-.617.175-.817.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.655-.674-.9-.686l-.767-.013a1.474 1.474 0 00-1.067.5c-.367.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.307 6.833 6.04.955.413 1.7.66 2.28.845.958.305 1.83.262 2.52.159.769-.115 2.364-.967 2.697-1.9.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.767-.467z"})})}),n.jsx("button",{className:`float-scroll-top ${e?"visible":""}`,onClick:i,"aria-label":"Scroll to top",children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"22",height:"22",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("polyline",{points:"18 15 12 9 6 15"})})}),n.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
            width: 50px;
            height: 50px;
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
      `}})]})},ae=({title:e,description:t,keywords:i,canonical:r,ogImage:s="https://smaarelysium.com/og-image.jpg",schema:o})=>{const a=e?`${e} | Smaar Elysium`:"Smaar Elysium – Premier Manpower & Staffing Agency in UAE";return n.jsxs(tf,{children:[n.jsx("title",{children:a}),n.jsx("meta",{name:"description",content:t}),i&&n.jsx("meta",{name:"keywords",content:i}),n.jsx("meta",{name:"robots",content:"index, follow"}),r&&n.jsx("link",{rel:"canonical",href:r}),n.jsx("meta",{property:"og:title",content:a}),n.jsx("meta",{property:"og:description",content:t}),n.jsx("meta",{property:"og:type",content:"website"}),n.jsx("meta",{property:"og:image",content:s}),r&&n.jsx("meta",{property:"og:url",content:r}),n.jsx("meta",{property:"og:site_name",content:"Smaar Elysium"}),n.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),n.jsx("meta",{name:"twitter:title",content:a}),n.jsx("meta",{name:"twitter:description",content:t}),n.jsx("meta",{name:"twitter:image",content:s}),o&&n.jsx("script",{type:"application/ld+json",children:JSON.stringify(o)})]})},Ug="/assets/mp-5-BwXe7EWo.jpg",Hg="/assets/mp-6-Dm8mrTUj.jpg",Fg="/assets/mp-7-COVtB6Je.jpg",Dg="/assets/manpower-supply-hero-BcpR3LgY.png",Du="/assets/recruitment-hero-Dulw0xdw.png",Wu="/assets/contract-staffing-hero-NrxkxxKc.png",Bu="/assets/executive-search-hero-D7H3ubT0.png",$u="/assets/hr-hero-4Kf6jcnA.png",Yu="/assets/security-solutions-hero-ouuJLMII.png",Wg="/assets/herovideo-BkfHnEyr.mp4",Bg="/assets/quote_section_architecture-CR19hJ4n.png",oc=()=>{const[e,t]=b.useState(0),i=[{question:"What is manpower supply in Dubai?",answer:"Manpower supply in Dubai refers to the process of providing skilled and unskilled labor to companies and organizations in Dubai, UAE. This is done by manpower supply companies by first finding the right candidate and then employ them under their visa sponsorship. After adequate training these workers are supplied on temporary basis to the client companies."},{question:"What are the benefits of using manpower supply services in Dubai?",answer:"Benefits include flexibility in scaling workforce, reduced administrative and HR burdens, access to a wider talent pool, and cost savings on recruitment and visa processing."},{question:"What types of industries in Dubai require manpower supply services?",answer:"Various industries such as construction, facility management, logistics, manufacturing, healthcare, hospitality, and IT frequently rely on manpower supply services to meet their operational needs."}],r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:i.map(s=>({"@type":"Question",name:s.question,acceptedAnswer:{"@type":"Answer",text:s.answer}}))};return n.jsxs("div",{className:"home-page",children:[n.jsx(ae,{title:"Premier Manpower & Staffing Solutions in UAE",description:"Smaar Elysium is UAE's leading manpower supply and staffing agency based in Dubai. Trusted by 500+ companies for recruitment, contract staffing, and HR outsourcing since 2003.",keywords:"manpower supply UAE, staffing agency Dubai, recruitment agency UAE, manpower company Dubai",canonical:"https://smaarelysium.com/",schema:r}),n.jsx("div",{className:"container hero-wrapper",children:n.jsxs("section",{className:"home-hero video-slide",children:[n.jsxs("div",{className:"hero-video-container active",children:[n.jsx("video",{src:Wg,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"hero-video-bg"}),n.jsx("div",{className:"hero-video-overlay"})]}),n.jsxs("div",{className:"home-hero__content",children:[n.jsxs("h1",{className:"home-hero__title",children:["Premier Civil Construction",n.jsx("br",{}),"Staffing Solutions in UAE"]}),n.jsx("p",{className:"home-hero__text",children:"Empowering the building sector with top-tier talent. Whether you need skilled engineers for permanent roles or a reliable workforce for massive temporary projects, we deliver excellence on time and on budget."}),n.jsx("div",{className:"home-hero__actions",children:n.jsx(k,{to:"/contact",className:"hero-btn-main",children:"Book Now"})})]})]})}),n.jsx("section",{className:"services-section",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("span",{className:"section-label",children:"Our Expertise"}),n.jsx("h2",{className:"section-title",children:"Comprehensive Staffing Solutions"})]}),n.jsx("div",{className:"featured-services-grid",children:[{title:"Manpower Supply",img:Dg,link:"/"},{title:"Recruitment",img:Du,link:"/recruitment"},{title:"Contract Staffing",img:Wu,link:"/contract-staffing"},{title:"Executive Search",img:Bu,link:"/executive-search"},{title:"HR Outsourcing",img:$u,link:"/hr-outsourcing"},{title:"Security Solutions",img:Yu,link:"/security-solutions"}].map((s,o)=>n.jsxs(k,{to:s.link,className:"featured-service-card",children:[n.jsx("img",{src:s.img,alt:s.title,className:"fs-card-bg"}),n.jsx("div",{className:"fs-card-overlay",children:n.jsx("h3",{className:"fs-card-title",children:s.title})})]},o))})]})}),n.jsx("section",{className:"supply-services-section",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header",style:{marginBottom:"40px"},children:[n.jsx("h2",{className:"section-title",children:"Industry-Leading Manpower Supply in Dubai"}),n.jsx("p",{style:{maxWidth:"800px",margin:"0 auto",color:"#555",fontSize:"1.1rem"},children:"As a prominent staffing partner in the UAE, we specialize in deploying highly skilled, semi-skilled, and unskilled workforce customized to your project parameters. We guarantee quality personnel for optimal productivity across disciplines:"})]}),n.jsx("div",{className:"supply-grid-container",children:[{title:"Civil Manpower Supply",desc:"Deploying expert construction professionals and robust labor forces to ensure structural integrity, site safety, and timely project completion for all civil engineering endeavors.",icon:n.jsx(mg,{size:48,strokeWidth:1.2}),link:"/services/civil-manpower"},{title:"Mechanical Manpower Supply",desc:"Providing certified mechanical personnel equipped to handle complex industrial installations, routine maintenance, and manufacturing operations with precision.",icon:n.jsx(yg,{size:48,strokeWidth:1.2}),link:"/services/mechanical-manpower"},{title:"Electrical Manpower Supply",desc:"Supplying qualified electricians and technical specialists to execute safe, efficient, and compliant electrical installations and heavy-duty maintenance across all project scales.",icon:n.jsx($g,{size:48}),link:"/services/electrical-manpower"},{title:"Plumbing Manpower Supply",desc:"Sourcing experienced and vetted plumbing professionals adept in comprehensive industrial, commercial, and residential piping and fluid systems management.",icon:n.jsx(fg,{size:48,strokeWidth:1.2}),link:"/services/plumbing-manpower"},{title:"Helper Manpower Supply",desc:"Delivering dependable, physically capable general support staff ready to assist site operations, handle logistics, and streamline your daily site requirements.",icon:n.jsx(Hu,{size:48,strokeWidth:1.2}),link:"/services/helper-manpower"},{title:"Cleaning Manpower Supply",desc:"Deploying dedicated, trained cleaning personnel committed to maintaining pristine, hygienic, and organized environments for commercial and industrial facilities.",icon:n.jsx(qg,{size:48,strokeWidth:1.2}),link:"/services/cleaning-manpower"}].map((s,o)=>n.jsxs("div",{className:"supply-card",children:[n.jsx("div",{className:"supply-card-icon",children:s.icon}),n.jsx("h3",{className:"supply-card-title",children:s.title}),n.jsx("p",{className:"supply-card-desc",children:s.desc})]},o))})]})}),n.jsx("section",{className:"book-banner-section",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"book-banner-inner",children:[n.jsxs("div",{className:"book-banner-header",children:[n.jsxs("h2",{children:["Seamless Resource",n.jsx("br",{}),"Acquisition"]}),n.jsxs("p",{children:["Deploy the perfect talent for your projects instantly. Our streamlined portal ensures you",n.jsx("br",{}),"get the exact workforce you need, anywhere across the UAE."]})]}),n.jsxs("div",{className:"book-steps-grid",children:[n.jsxs("div",{className:"book-step",children:[n.jsxs("div",{className:"book-step-icon-wrapper",children:[n.jsx("div",{className:"book-step-icon",children:n.jsx(jg,{strokeWidth:1.5,size:32,color:"#FE7622"})}),n.jsx("span",{className:"book-step-badge",children:"1"})]}),n.jsx("h3",{children:"Identify Requirements"}),n.jsx("p",{children:"Specify the distinct categories and operational domains required for your immediate project needs."})]}),n.jsxs("div",{className:"book-step",children:[n.jsxs("div",{className:"book-step-icon-wrapper",children:[n.jsx("div",{className:"book-step-icon",children:n.jsx(_g,{strokeWidth:1.5,size:32,color:"#FE7622"})}),n.jsx("span",{className:"book-step-badge",children:"2"})]}),n.jsx("h3",{children:"Specify Volume & Scope"}),n.jsx("p",{children:"Define the exact workforce volume, precise trades, and the deployment timeframe tailored to your schedule."})]}),n.jsxs("div",{className:"book-step",children:[n.jsxs("div",{className:"book-step-icon-wrapper",children:[n.jsx("div",{className:"book-step-icon",children:n.jsx(hg,{strokeWidth:1.5,size:32,color:"#FE7622"})}),n.jsx("span",{className:"book-step-badge",children:"3"})]}),n.jsx("h3",{children:"Mobilize Workforce"}),n.jsx("p",{children:"Submit your operational request and let our rapid-deployment team align the ideal personnel immediately."})]})]}),n.jsx("div",{className:"book-banner-action",children:n.jsx(k,{to:"/contact",className:"book-banner-btn",children:"Book Now"})})]})})}),n.jsx("section",{className:"journey-section",children:n.jsxs("div",{className:"container",children:[n.jsx("div",{className:"section-header",style:{marginBottom:"40px"},children:n.jsx("h2",{className:"section-title",style:{color:"#666",fontWeight:"500"},children:"Our Operational Impact"})}),n.jsx("div",{className:"journey-grid-container",children:n.jsxs("div",{className:"journey-grid",children:[n.jsxs("div",{className:"journey-item",children:[n.jsx("span",{className:"journey-num",children:"250+"}),n.jsx("h3",{className:"journey-label",children:"Active Deployments"}),n.jsx("p",{className:"journey-desc",children:"Currently managing and supporting massive workforces across major critical developments in the UAE."})]}),n.jsxs("div",{className:"journey-item",children:[n.jsx("span",{className:"journey-num",children:"550+"}),n.jsx("h3",{className:"journey-label",children:"Partner Organizations"}),n.jsx("p",{className:"journey-desc",children:"Trusted by leading enterprises and conglomerates for consistent, compliant, and reliable staffing."})]}),n.jsxs("div",{className:"journey-item",children:[n.jsx("span",{className:"journey-num",children:"1000+"}),n.jsx("h3",{className:"journey-label",children:"Projects Delivered"}),n.jsx("p",{className:"journey-desc",children:"A proven track record of successful manpower support and execution across highly diverse industrial sectors."})]}),n.jsxs("div",{className:"journey-item",children:[n.jsx("span",{className:"journey-num",children:"10000+"}),n.jsx("h3",{className:"journey-label",children:"Professionals Deployed"}),n.jsx("p",{className:"journey-desc",children:"Maintaining a vast, rapidly scalable network of fully vetted, trained, and immediately available talent."})]})]})})]})}),n.jsx("section",{className:"core-area-section",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"core-area-header",children:[n.jsx("h2",{className:"core-area-title",children:"Industries We Empower"}),n.jsxs("p",{className:"core-area-desc",children:["For over a decade, our enterprise has been the driving workforce engine behind monumental",n.jsx("br",{}),"projects across Dubai, Mumbai, and the wider UAE. We provide hyper-specialized personnel",n.jsx("br",{}),"solutions exclusively tailored to the rigorous demands of these pivotal sectors:"]})]}),n.jsxs("div",{className:"core-area-grid",children:[n.jsxs(k,{to:"/oil-gas",className:"core-area-item large",children:[n.jsx("img",{src:Ug,alt:"Oil & Gas",className:"core-area-img"}),n.jsx("div",{className:"core-area-overlay",children:n.jsx("h3",{className:"core-area-item-title",children:"Oil & Gas"})})]}),n.jsxs(k,{to:"/oil-gas",className:"core-area-item large",children:[n.jsx("img",{src:Hg,alt:"Civil Construction",className:"core-area-img"}),n.jsx("div",{className:"core-area-overlay",children:n.jsx("h3",{className:"core-area-item-title",children:"Civil Construction"})})]}),n.jsxs(k,{to:"/oil-gas",className:"core-area-item small",children:[n.jsx("img",{src:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",alt:"Logistics",className:"core-area-img"}),n.jsx("div",{className:"core-area-overlay",children:n.jsx("h3",{className:"core-area-item-title",children:"Logistics"})})]}),n.jsxs(k,{to:"/oil-gas",className:"core-area-item small",children:[n.jsx("img",{src:Fg,alt:"Manufacture",className:"core-area-img"}),n.jsx("div",{className:"core-area-overlay",children:n.jsx("h3",{className:"core-area-item-title",children:"Manufacture"})})]}),n.jsxs(k,{to:"/oil-gas",className:"core-area-item small",children:[n.jsx("img",{src:"https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800",alt:"Facility Management",className:"core-area-img"}),n.jsx("div",{className:"core-area-overlay",children:n.jsx("h3",{className:"core-area-item-title",children:"Facility Management"})})]}),n.jsxs(k,{to:"/oil-gas",className:"core-area-item small",children:[n.jsx("img",{src:"https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800",alt:"Mechanical, Electrical & Plumbing - MEP",className:"core-area-img"}),n.jsx("div",{className:"core-area-overlay",children:n.jsxs("h3",{className:"core-area-item-title",children:["Mechanical, Electrical & Plumbing -",n.jsx("br",{}),"MEP"]})})]})]})]})}),n.jsx("section",{className:"quote-section",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"quote-wrapper",children:[n.jsx("div",{className:"quote-image-side",children:n.jsx("img",{src:Bg,alt:"Strategic Partnership Architecture"})}),n.jsxs("div",{className:"quote-form-side",children:[n.jsx("span",{className:"quote-label",children:"Strategic Partnership"}),n.jsx("h2",{className:"quote-title",children:"Accelerate Your Projects Today"}),n.jsx("p",{className:"quote-desc",children:"Ready to scale your operations with precision talent? Submit your requirements below, and our staffing architects will rapidly design a workforce strategy aligned seamlessly with your enterprise goals."}),n.jsxs("form",{className:"quote-form",onSubmit:s=>s.preventDefault(),children:[n.jsxs("div",{className:"form-row",children:[n.jsx("input",{type:"text",placeholder:"Enter Name",required:!0}),n.jsx("input",{type:"email",placeholder:"Enter Email",required:!0})]}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"tel",placeholder:"Phone Number",required:!0})}),n.jsx("div",{className:"form-group",children:n.jsx("textarea",{placeholder:"Comments",rows:"4"})}),n.jsx("div",{className:"recaptcha-placeholder",children:n.jsxs("div",{className:"recaptcha-box",children:[n.jsx("input",{type:"checkbox",id:"robot"}),n.jsx("label",{htmlFor:"robot",children:"I'm not a robot"}),n.jsx("div",{className:"recaptcha-logo",children:n.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/a/ad/RecaptchaLogo.svg",alt:"reCAPTCHA",width:"30"})})]})}),n.jsx("button",{type:"submit",className:"quote-submit-btn",children:"Book Now"})]})]})]})})}),n.jsx("section",{className:"faq-section",children:n.jsxs("div",{className:"container",children:[n.jsx("h2",{className:"faq-main-title",children:"FAQ"}),n.jsx("p",{className:"faq-subtitle",children:"MOST ASKED QUESTIONS."}),n.jsx("div",{className:"faq-list",children:i.map((s,o)=>n.jsxs("div",{className:`faq-item ${e===o?"active":""}`,children:[n.jsxs("div",{className:"faq-question-btn",onClick:()=>t(e===o?-1:o),children:[n.jsx("span",{className:"faq-icon",children:e===o?"−":"+"}),n.jsx("span",{className:"faq-question-text",children:s.question})]}),n.jsx("div",{className:"faq-answer-container",style:{maxHeight:e===o?"300px":"0"},children:n.jsx("div",{className:"faq-answer-content",children:n.jsx("p",{children:s.answer})})})]},o))})]})}),n.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        .quote-title { font-size: 2.8rem; font-weight: 600; margin-bottom: 20px; }
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
            transition: 0.3s;
        }
        .quote-form input::placeholder, .quote-form textarea::placeholder { color: rgba(255,255,255,0.5); }
        .quote-form input:focus, .quote-form textarea:focus { border-color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.05); }
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
          .home-hero { flex-direction: column; text-align: center; padding: 60px 30px 0; min-height: auto; border-radius: 20px; }
          .home-hero__content { max-width: 100%; display: flex; flex-direction: column; align-items: center; margin-bottom: 20px; }
          .home-hero__image { position: relative; justify-content: center; width: 100%; display: flex; right: 0; bottom: 0; }
          .hero-workers-img { width: 100%; max-width: 400px; display: block; margin-bottom: -12%; }
          .featured-services-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .section-title { font-size: 2.2rem; }
          .journey-grid { grid-template-columns: 1fr 1fr; gap: 40px 0; }
          .journey-item:nth-child(2) { border-right: none; }
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
          .journey-grid { grid-template-columns: 1fr; }
          .journey-item { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.15); padding: 30px !important; }
          .journey-item:last-child { border-bottom: none; }
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
      `}})]})},$g=({size:e=24})=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),qs={Civil:[{id:1,name:"Mason"},{id:2,name:"Carpenter"},{id:3,name:"Steel Fixer"},{id:4,name:"Painter"},{id:5,name:"Labor"},{id:6,name:"Civil Foreman"}],MEP:[{id:7,name:"Electrician"},{id:8,name:"Plumber"},{id:9,name:"HVAC Technician"},{id:10,name:"Pipe Fitter"},{id:11,name:"Welder"},{id:12,name:"Duct Man"}],Infrastructure:[{id:13,name:"Heavy Driver"},{id:14,name:"Operator"},{id:15,name:"Rigger"},{id:16,name:"Flagman"},{id:17,name:"Surveyor"}],Others:[{id:18,name:"Security Guard"},{id:19,name:"Warehouse Staff"},{id:20,name:"Cleaning Staff"},{id:21,name:"Office Boy"}]},Yg=()=>{const[e,t]=b.useState("Civil"),[i,r]=b.useState({}),s=(l,c)=>{r(d=>{const m=d[l]||0,p=Math.max(0,m+c);return{...d,[l]:p}})},o=Object.entries(i).filter(([l,c])=>c>0).map(([l,c])=>({...Object.values(qs).flat().find(m=>m.id===parseInt(l)),qty:c})),a=o.reduce((l,c)=>l+c.qty,0);return n.jsxs("div",{className:"booking-page",children:[n.jsx(ae,{title:"Book Manpower Online | Request Skilled Workers in UAE | Smaar Elysium",description:"Book your required manpower online with Smaar Elysium. Select trade categories, specify quantities, and submit your workforce request. We supply civil workers, MEP technicians, drivers, security guards, and more across UAE.",keywords:"book manpower UAE, hire workers online UAE, request skilled labour, manpower booking form, civil workers booking, MEP technicians UAE, Smaar Elysium book",canonical:"https://www.smaarelysium.com/book-manpower"}),n.jsx("section",{className:"page-hero",children:n.jsxs("div",{className:"container",children:[n.jsx("h1",{className:"page-hero__title",children:"Book Manpower"}),n.jsx("p",{children:"Select your required trades and quantity for your project."})]})}),n.jsx("section",{className:"booking-main",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"booking-layout",children:[n.jsxs("div",{className:"trades-selection",children:[n.jsx("div",{className:"category-tabs",children:Object.keys(qs).map(l=>n.jsx("button",{className:`cat-tab ${e===l?"active":""}`,onClick:()=>t(l),children:l},l))}),n.jsx("div",{className:"trades-grid",children:qs[e].map(l=>n.jsxs("div",{className:"trade-card",children:[n.jsx("span",{className:"trade-name",children:l.name}),n.jsxs("div",{className:"trade-controls",children:[n.jsx("button",{onClick:()=>s(l.id,-1),className:"control-btn",children:n.jsx(Eg,{size:14})}),n.jsx("span",{className:"qty-display",children:i[l.id]||0}),n.jsx("button",{onClick:()=>s(l.id,1),className:"control-btn",children:n.jsx(zg,{size:14})})]})]},l.id))})]}),n.jsxs("aside",{className:"booking-sidebar",children:[n.jsxs("div",{className:"summary-card",children:[n.jsxs("div",{className:"summary-header",children:[n.jsx(Tg,{size:20}),n.jsx("h3",{children:"Your Selection"})]}),n.jsx("div",{className:"summary-list",children:o.length===0?n.jsxs("div",{className:"empty-summary",children:[n.jsx(wg,{size:32}),n.jsx("p",{children:"No trades selected yet. Use the grid to add personnel."})]}):n.jsx("ul",{children:o.map(l=>n.jsxs("li",{children:[n.jsx("span",{children:l.name}),n.jsx("strong",{children:l.qty})]},l.id))})}),n.jsxs("div",{className:"summary-footer",children:[n.jsxs("div",{className:"total-row",children:[n.jsx("span",{children:"Total Personnel:"}),n.jsx("strong",{children:a})]}),n.jsx("button",{className:`btn btn-primary book-btn ${a===0?"disabled":""}`,disabled:a===0,onClick:()=>alert("Booking request sent successfully!"),children:"Complete Booking Request"})]})]}),n.jsxs("div",{className:"help-box",children:[n.jsx(Vg,{size:18}),n.jsxs("p",{children:["Need specialized manpower not listed? ",n.jsx(k,{to:"/contact",children:"Contact us"})," directly."]})]})]})]})})}),n.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .booking-page .page-hero { background: var(--color-primary); padding: 70px 0; color: white; text-align: center; }
        .booking-page .page-hero__title { font-size: 2.5rem; margin-bottom: 15px; color: white; }
        .booking-page .page-hero p { opacity: 0.8; font-size: 1.1rem; }
        
        .booking-main { padding: 80px 0; background: var(--color-light-bg); min-height: 600px; }
        .booking-layout { display: grid; grid-template-columns: 1fr 340px; gap: 40px; }
        
        .category-tabs { display: flex; gap: 10px; border-bottom: 2px solid var(--color-border); margin-bottom: 40px; overflow-x: auto; padding-bottom: 5px; }
        .cat-tab { 
          padding: 12px 30px; background: none; border: none; font-weight: 700; font-size: 0.9rem; 
          color: var(--color-mid); cursor: pointer; border-bottom: 3px solid transparent; 
          transition: 0.3s; white-space: nowrap;
        }
        .cat-tab:hover { color: var(--color-primary); }
        .cat-tab.active { color: var(--color-primary); border-bottom-color: var(--color-primary); }
        
        .trades-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 15px; }
        .trade-card { 
          background: white; padding: 20px; border-radius: 10px; display: flex; justify-content: space-between; 
          align-items: center; box-shadow: var(--shadow-card); transition: 0.3s;
        }
        .trade-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-hover); }
        .trade-name { font-weight: 600; font-size: 0.95rem; }
        
        .trade-controls { display: flex; align-items: center; background: #f8f9fa; border-radius: 6px; border: 1px solid #eee; overflow: hidden; }
        .control-btn { width: 32px; height: 32px; border: none; background: none; color: var(--color-dark); cursor: pointer; transition: 0.2s; display: flex; align-items: center; justify-content: center; }
        .control-btn:hover { background: #eee; color: var(--color-primary); }
        .qty-display { width: 30px; text-align: center; font-weight: 700; font-size: 0.9rem; }
        
        .summary-card { background: white; padding: 30px; border-radius: 15px; box-shadow: var(--shadow-hover); position: sticky; top: 100px; }
        .summary-header { display: flex; align-items: center; gap: 12px; margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0; }
        .summary-header h3 { font-size: 1.25rem; }
        
        .summary-list { min-height: 200px; max-height: 350px; overflow-y: auto; margin-bottom: 25px; }
        .summary-list ul li { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed #eee; font-size: 0.9rem; }
        .empty-summary { text-align: center; color: #bbb; padding-top: 40px; }
        .empty-summary p { font-size: 0.85rem; margin-top: 15px; }
        
        .total-row { display: flex; justify-content: space-between; padding: 20px 0; border-top: 2px solid #f0f0f0; margin-bottom: 20px; font-weight: 800; font-size: 1.1rem; }
        .total-row strong { color: var(--color-primary); }
        .book-btn { width: 100%; border-radius: 8px; }
        .book-btn.disabled { opacity: 0.5; pointer-events: none; background: #ccc; border-color: #ccc; }
        
        .help-box { margin-top: 20px; background: #fff8f8; padding: 15px; border-radius: 10px; border: 1px solid #feeaea; display: flex; gap: 10px; font-size: 0.85rem; color: #888; }
        .help-box a { color: var(--color-primary); font-weight: 700; text-decoration: underline; }
        
        @media (max-width: 992px) {
          .booking-layout { grid-template-columns: 1fr; }
          .summary-card { position: static; }
        }
        @media (max-width: 576px) {
          .booking-page .page-hero { padding: 50px 0; }
          .booking-page .page-hero__title { font-size: 1.8rem; }
          .booking-page .page-hero p { font-size: 0.95rem; }
          .category-tabs { gap: 6px; }
          .cat-tab { padding: 10px 18px; font-size: 0.82rem; }
          .trades-grid { grid-template-columns: 1fr; }
          .summary-card { padding: 20px; }
        }
      `}})]})},Vg=e=>n.jsxs("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),n.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),Qg="/assets/recruitment_hiring-IcL9-kL2.png",Gg="/assets/recruitment_team-C2oRQZ-U.png",Kg="/assets/insight_intro-CUxskfNR.png",Xg="/assets/insight_need-DZtzlm_Y.png",Zg="/assets/insight_benefits-Dk0TpN4h.png",Jg="/assets/insight_advantage-BPpT1tAl.png",ex=()=>{const[e,t]=b.useState(0),i=[{question:"1. What makes your talent acquisition unique?",answer:"Our hiring approach is distinguished by a customized strategy that aligns the right professionals with your company’s specific goals and culture."},{question:"2. How thorough is your candidate screening process?",answer:"We follow a detailed evaluation process that includes skill assessments, background checks, and in-depth interviews to ensure only qualified candidates move forward."},{question:"3. What sets apart your recruitment strategies?",answer:"Our recruitment methods combine market insights, advanced sourcing techniques, and industry expertise to attract top-tier talent efficiently."},{question:"4. How do you ensure a match between candidates and our requirements?",answer:"We carefully analyze your job expectations and company culture to identify candidates whose skills, experience, and values align with your needs."},{question:"5. Can you elaborate on the concept of personalized recruitment?",answer:"Personalized recruitment means adapting our hiring solutions to suit your business objectives, ensuring a more accurate and long-term placement."},{question:"6. How do you handle the challenges in the recruitment process?",answer:"We proactively address recruitment challenges by maintaining clear communication, leveraging industry networks, and applying strategic problem-solving at every stage."}],r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:i.map(s=>({"@type":"Question",name:s.question,acceptedAnswer:{"@type":"Answer",text:s.answer}}))};return n.jsxs("div",{className:"service-page recruitment-page",children:[n.jsx(ae,{title:"Premier Recruitment Solutions in UAE – Smaar Elysium",description:"Smaar Elysium offers expert recruitment services in UAE. From permanent hiring to volume recruitment, we connect the right talent to your business. Call +91-8885072259.",keywords:"recruitment agency UAE, recruitment agency Dubai, talent acquisition UAE, permanent staffing Dubai",canonical:"https://smaarelysium.com/recruitment",schema:r}),n.jsx("div",{className:"container hero-wrapper",children:n.jsxs("section",{className:"home-hero",children:[n.jsxs("div",{className:"home-hero__content",children:[n.jsxs("h1",{className:"home-hero__title",children:["Premier Recruitment",n.jsx("br",{}),"Solutions in UAE"]}),n.jsx("p",{className:"home-hero__text",children:"Empower your business with elite talent. We deliver strategic recruitment services to help you scale."}),n.jsx("div",{className:"home-hero__actions",children:n.jsx(k,{to:"/contact",className:"hero-btn-main",children:"Book Now"})})]}),n.jsx("div",{className:"home-hero__image",children:n.jsx("img",{src:Du,alt:"Recruitment Experts",className:"hero-workers-img"})})]})}),n.jsx("div",{className:"service-content-section",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"choose-best-split",children:[n.jsxs("div",{className:"cbs-left",children:[n.jsx("h2",{children:"Elevate Your Workforce with Precision Hiring"}),n.jsx("p",{children:"Welcome to a new standard of recruitment. At Smaar Elysium, we blend industry expertise with a personalized touch to connect you with professionals who drive real business impact. Our approach is defined by meticulous screening, proactive sourcing, and an unwavering commitment to quality."}),n.jsx("p",{children:"In today's fast-paced corporate landscape, having the right people is the ultimate competitive advantage."}),n.jsx("p",{children:"We believe that successful hiring goes beyond matching resumes to job descriptions. It requires a deep understanding of your company culture, strategic objectives, and long-term vision. Our bespoke talent acquisition methods ensure we find candidates who seamlessly integrate with your team."}),n.jsx("p",{children:"Partner with us to transform your hiring process. From specialized roles to volume recruitment, Smaar Elysium provides the strategic support you need to build a future-ready, high-performing organization."})]}),n.jsxs("div",{className:"cbs-right",style:{backgroundImage:`url(${Qg})`,backgroundSize:"cover",backgroundPosition:"center"},children:[n.jsxs("div",{className:"cbs-logo",children:[n.jsx("span",{className:"logo-main",children:"Smaar Elysium"}),n.jsx("span",{className:"logo-slogan",style:{display:"block"},children:"Your Trusted work force Partner"})]}),n.jsx("div",{className:"cbs-overlay"}),n.jsx("div",{className:"cbs-content",children:n.jsxs("div",{className:"cbs-text-block",children:[n.jsx("span",{className:"cbs-go-beyond",children:"GO BEYOND THE"}),n.jsx("span",{className:"cbs-ordinary",children:"ORDINARY"}),n.jsx("span",{className:"cbs-find",children:"FIND THE PRECISE"}),n.jsx("span",{className:"cbs-executives",children:"EXECUTIVES"})]})}),n.jsxs("div",{className:"cbs-footer",children:[n.jsx("div",{className:"cbs-footer-pill",children:"www.smaarelysium.com"}),n.jsxs("div",{className:"cbs-footer-info",children:[n.jsxs("span",{children:[n.jsx("i",{className:"fa-brands fa-whatsapp"})," 8885072259"]}),n.jsx("span",{className:"cbs-divider",children:"|"}),n.jsx("span",{children:"sales@smaarelysium.com"})]})]})]})]}),n.jsxs("div",{className:"build-team-split",children:[n.jsxs("div",{className:"bts-left",children:[n.jsx("div",{className:"bts-workers-container",children:n.jsx("img",{src:Gg,alt:"Team of Workers",className:"bts-workers-img"})}),n.jsx("div",{className:"bts-web-pill",children:"www.smaarelysium.com"}),n.jsxs("div",{className:"bts-contact-footer",children:[n.jsxs("div",{className:"bts-contact-item",children:[n.jsx("i",{className:"fa-brands fa-whatsapp"})," 8885072259"]}),n.jsx("div",{className:"bts-contact-divider",children:"|"}),n.jsx("div",{className:"bts-contact-item",children:"info@smaarelysium.com"})]})]}),n.jsxs("div",{className:"bts-right",children:[n.jsx("h3",{children:"Build a High-Performing Team Tailored to You"}),n.jsx("p",{children:"Unlocking your company's full potential starts with identifying your exact needs. Our precision-driven recruitment process guarantees alignment between your strategic goals and the top-tier professionals we deliver."}),n.jsx("p",{children:"Rigorous candidate evaluation is the foundation of our success. We look far beyond the resume, evaluating technical skills, cultural fit, and long-term potential. This comprehensive methodology means you only interview the absolute best."}),n.jsx("p",{children:"Elevate your business capabilities. Let Smaar Elysium manage the complexities of talent acquisition so that you can focus on what matters most—driving your business forward."})]})]}),n.jsxs("div",{className:"why-choose-us-section",children:[n.jsx("h2",{className:"section-title",children:"WHY CHOOSE US"}),n.jsx("p",{className:"section-intro",children:"Choose us for recruitment that goes beyond the conventional. Experience the difference of personalized talent acquisition, meticulous candidate screening, and recruitment strategies designed exclusively for your success."}),n.jsxs("div",{className:"benefits-grid",children:[n.jsxs("div",{className:"benefit-card bg-red",children:[n.jsx("h3",{children:"Tailored Talent Acquisition"}),n.jsx("p",{children:"We don't believe in one-size-fits-all. Our approach is custom-fit, ensuring the candidates we bring match not just the job requirements but also your unique organizational culture."})]}),n.jsxs("div",{className:"benefit-card bg-gray",children:[n.jsx("h3",{children:"Thorough Candidate Screening"}),n.jsx("p",{children:"Our commitment to quality extends to our screening process. We delve deep to unearth not only skills but also the intangible qualities that make a candidate the right cultural fit for your team."})]}),n.jsxs("div",{className:"benefit-card bg-red",children:[n.jsx("h3",{children:"Personalized Recruitment Strategies"}),n.jsx("p",{children:"Recognizing that every client is distinct, we craft recruitment strategies tailored to your specific needs. Whether it's volume hiring or niche roles, we adapt our approach to maximize efficiency."})]})]})]})]})}),n.jsx("section",{className:"faq-section",children:n.jsxs("div",{className:"container",children:[n.jsx("h2",{className:"faq-main-title",children:"FAQ"}),n.jsx("p",{className:"faq-subtitle",children:"MOST ASKED QUESTIONS."}),n.jsx("div",{className:"faq-list",children:i.map((s,o)=>n.jsxs("div",{className:`faq-item ${e===o?"active":""}`,children:[n.jsxs("div",{className:"faq-question-btn",onClick:()=>t(e===o?-1:o),children:[n.jsx("span",{className:"faq-icon",children:e===o?"−":"+"}),n.jsx("span",{className:"faq-question-text",children:s.question})]}),n.jsx("div",{className:"faq-answer-container",style:{maxHeight:e===o?"300px":"0"},children:n.jsx("div",{className:"faq-answer-content",children:n.jsx("p",{children:s.answer})})})]},o))})]})}),n.jsxs("div",{className:"insights-section",children:[n.jsx("h2",{className:"insights-title",children:"Manpower Supply Insights"}),n.jsxs("div",{className:"insights-grid",children:[n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:Kg,alt:"Insight 1"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Brief Introduction to Manpower Supply"}),n.jsx("p",{children:"Manpower Supply is when businesses hire an agency to provide for a team of experts for..."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:Xg,alt:"Insight 2"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Need of Manpower Supply"}),n.jsx("p",{children:"Maintaining flawless production while keeping up with the schedule is very important. This makes....."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:Zg,alt:"Insight 3"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Benefits of getting Manpower Supply"}),n.jsx("p",{children:"There are tons of advantages to getting Manpower Supply from us. Some of these include:"})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:Jg,alt:"Insight 4"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"How can Manpower Supply work at Your Advantage?"}),n.jsx("p",{children:"Staying ahead in the competitive race is important for every organization. And having a strong……"})]})]})]})]}),n.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        /* Manpower Supply Insights Styling */
        .insights-section {
            margin-top: 60px;
            margin-bottom: 100px;
        }
        .insights-title {
            text-align: center;
            font-size: 2.5rem;
            color: #555;
            margin-bottom: 60px;
            font-weight: 500;
        }
        .insights-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 25px;
        }
        .insight-card {
            background: #f8f9fa;
            border-radius: 25px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            display: flex;
            flex-direction: column;
        }
        .insight-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        .insight-image-wrap {
            height: 250px;
            background: #8e2de2; /* fallback purple from image */
            background: linear-gradient(135deg, #8e2de2, #4a00e0);
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .insight-image-wrap img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        .insight-card:hover .insight-image-wrap img {
            transform: scale(1.1);
        }
        .insight-content {
            padding: 30px 25px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        .insight-content h3 {
            font-size: 1.3rem;
            color: #333;
            margin-bottom: 20px;
            line-height: 1.4;
            font-weight: 600;
            min-height: 3.5rem;
        }
        .insight-content p {
            color: #777;
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 25px;
            flex-grow: 1;
        }
        .insight-btn {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            color: #555;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            background: #fff;
        }
        .insight-btn:hover {
            border-color: #FE7622;
            color: #FE7622;
            background: #fdf2f3;
        }

        /* Responsive */
        @media (max-width: 1200px) {
            .insights-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
            .insights-grid { grid-template-columns: 1fr; }
            .insights-title { font-size: 2rem; }
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
        `}})]})},tx=()=>{const e=[{title:"Civil Manpower",description:"From laying the foundation to completing the finishing touches, civil manpower ensures that your construction projects are executed flawlessly.",roles:["Civil Engineer","Civil Supervisor","Civil Foreman","Chargehand","Scaffolder Normal","Certified Scaffolder","Steel Fixer","Shuttering Carpenter","Gypsum Carpenter","Finishing Carpenter","Block Mason","Plaster Mason","Tile Mason","Sand Blaster","Wall Painter","Spray Painter","Wood Polisher","Wood Painter","Rigger","Civil Helper","Safety Officer"]},{title:"Electrical Manpower",description:"No matter what industry or domain you work for, a secure electrical setup is the first layer of protection you can provide. To help you out, Smaar Elysium team provides experienced teams to work for you.",roles:["Electrical Engineer","Electrical Supervisor","Electrical Foreman","Electrical Chargehand","Industrial Electrician","Normal Electrician","Electrical Helper"]},{title:"Mechanical Manpower",description:"Working on a project with a deadline puts extra pressure on the existing team. Our Mechanical Manpower Supply will get you ready to deliver according to the due dates and achieve all your short term goals.",roles:["Pipe Fabricator","Steel Fabricator","Aluminum Fabricator","Aluminum Fitter","3G Welder","6G Welder","MIG Welder","ARC Welder","TIG Welder","Insulator","Pipe Fitter"]},{title:"Helper Manpower",description:"You can already understand it from the name, a Helper is someone who assists you in timely finishing the task at hand. Smaar Elysium has a wide network of reliable help, who can work on your terms and requirements.",roles:["Mechanical Helper","Civil Helper","Electrical Helper","General Helper","Cleaner"]}];return n.jsxs("div",{className:"service-page manpower-supply-page",children:[n.jsx(ae,{title:"Manpower Supply Services in UAE – Civil, Electrical & Mechanical",description:"Smaar Elysium is a top manpower supply company in UAE providing civil, electrical, mechanical, and helper manpower for construction and industrial projects. 15+ years of expertise.",keywords:"manpower supply UAE, civil manpower Dubai, electrical manpower UAE, mechanical manpower supply, helper manpower UAE",canonical:"https://smaarelysium.com/services/manpower-supply"}),n.jsx("div",{className:"service-hero",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"service-hero-content text-center",children:[n.jsx("h1",{style:{margin:"0 auto 20px",textAlign:"center"},children:"Manpower Supply Company in UAE"}),n.jsx("p",{style:{margin:"0 auto 30px",textAlign:"center"},children:"No. 1 Manpower Supply Company in UAE, offering quality Labour Supply Services on an Hourly Basis across all the emirates. 15 Years of Service."}),n.jsx("div",{style:{display:"flex",justifyContent:"center"},children:n.jsx(k,{to:"/book-manpower",className:"hero-btn-main",children:"Book Manpower Online"})})]})})}),n.jsx("div",{className:"supply-content-section align-center",children:n.jsxs("div",{className:"container",children:[n.jsx("div",{className:"supply-intro text-center",children:n.jsx("p",{style:{maxWidth:"800px",margin:"0 auto 50px",fontSize:"1.2rem",color:"#555",lineHeight:"1.8"},children:"Our quick-evolving and agile market constantly demands employing more experts to deliver optimal results. We provide comprehensive manpower supply services across multiple domains."})}),e.map((t,i)=>n.jsxs("div",{className:"supply-category-block",children:[n.jsxs("div",{className:"category-header",children:[n.jsx("h2",{children:t.title}),n.jsx("p",{children:t.description})]}),n.jsx("div",{className:"roles-grid",children:t.roles.map((r,s)=>n.jsxs("div",{className:"role-card",children:[n.jsx("div",{className:"role-icon-box",children:n.jsx("span",{className:"role-bullet"})}),n.jsx("span",{className:"role-name",children:r})]},s))})]},i))]})}),n.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})},nx="/assets/contractstaffing_bts-BsqGZes8.jpg",ix="/assets/contractstaffing_insight_1-CMy8zS0Y.jpg",rx="/assets/contractstaffing_insight_2-B11_gVrO.jpg",sx="/assets/contractstaffing_insight_3-7Ib3gFYv.jpg",ox="/assets/contractstaffing_insight_4-BXOetime.jpg",Vu="/assets/contract_staffing_bts-BtNQAlg3.jpg",ax=()=>{const[e,t]=b.useState(0),i=[{question:"1. What makes your contract staffing unique?",answer:"Our approach is distinguished by a customized strategy that quickly aligns flexible professionals with your company’s immediate goals and culture."},{question:"2. How thorough is your temporary candidate screening process?",answer:"We follow a detailed evaluation process that includes skill assessments, background checks, and in-depth interviews to ensure only qualified temporary candidates move forward."},{question:"3. What sets apart your flexible workforce strategies?",answer:"Our contract staffing methods combine market insights, rapid sourcing techniques, and industry expertise to deploy top-tier talent efficiently."},{question:"4. How do you ensure a match for short-term projects?",answer:"We carefully analyze your project expectations and company culture to identify contractors whose skills and flexibility align with your immediate needs."},{question:"5. Can you elaborate on the concept of scalable staffing?",answer:"Scalable staffing means adapting our temporary hiring solutions to suit your fluctuating business objectives, ensuring cost-effective and timely placements."},{question:"6. How do you handle administrative challenges in contract staffing?",answer:"We proactively manage payroll, compliance, and HR challenges by maintaining clear communication and applying strategic problem-solving throughout the contract duration."}],r={"@context":"https://schema.org","@type":"FAQPage",mainEntity:i.map(s=>({"@type":"Question",name:s.question,acceptedAnswer:{"@type":"Answer",text:s.answer}}))};return n.jsxs("div",{className:"service-page recruitment-page",children:[n.jsx(ae,{title:"Contract Staffing Solutions in UAE – Smaar Elysium",description:"Smaar Elysium provides flexible contract staffing solutions across UAE. Scale your workforce quickly with skilled and verified contract professionals. Contact us today.",keywords:"contract staffing UAE, temporary staffing Dubai, flexible workforce UAE, contract employees UAE",canonical:"https://smaarelysium.com/contract-staffing",schema:r}),n.jsx("div",{className:"container hero-wrapper",children:n.jsxs("section",{className:"home-hero",children:[n.jsxs("div",{className:"home-hero__content",children:[n.jsxs("h1",{className:"home-hero__title",children:["Contract Staffing",n.jsx("br",{}),"Solutions in UAE"]}),n.jsx("p",{className:"home-hero__text",children:"Looking for flexible workforce solutions tailored to your project needs? Smaar Elysium provides top-tier contract staffing for all industries."}),n.jsx("div",{className:"home-hero__actions",children:n.jsx(k,{to:"/contact",className:"hero-btn-main",children:"Book Now"})})]}),n.jsx("div",{className:"home-hero__image",children:n.jsx("img",{src:Wu,alt:"Contract Staffing Team",className:"hero-workers-img"})})]})}),n.jsx("div",{className:"container",children:n.jsxs("div",{className:"service-main-content",children:[n.jsxs("div",{className:"service-intro",children:[n.jsx("h2",{children:"CHOOSE THE BEST FOR YOU"}),n.jsx("p",{children:"Welcome to our Contract Staffing Services – where your business agility starts. Our team comprises industry experts who are well-versed with the intricacies of flexible workforce solutions."})]}),n.jsxs("div",{className:"choose-best-split",children:[n.jsxs("div",{className:"cbs-left",children:[n.jsx("h2",{children:"Choose the best for you"}),n.jsx("p",{children:"Step into the realm of our tailored contract staffing services, where speed converges with precision for an unparalleled workforce experience. Our core strengths redefine temporary staffing with a focus on agile deployment, meticulous candidate screening, and scalable contract strategies."}),n.jsx("p",{children:"In the ever-evolving business environment, effective management of your flexible workforce is a key determinant of success."}),n.jsx("p",{children:"Our contract staffing services excel in delivering customized temporary solutions crafted to suit the unique project requirements of your organization. In this era of swift transformations, accessing skilled contract talent holds greater significance than ever before."}),n.jsx("p",{children:"Recognizing the pivotal role a qualified flexible workforce plays in fostering business agility, our committed team comprehensively caters to your contract staffing needs. We ensure your company gains access to a diverse pool of talented professionals who are aligned with your project timelines."}),n.jsx("p",{children:"Allow us to serve as your strategic ally in constructing a proficient and motivated contract team, empowering your business to thrive amidst fierce competition in the market."})]}),n.jsxs("div",{className:"cbs-right",style:{backgroundImage:`url(${nx})`,backgroundSize:"cover",backgroundPosition:"center"},children:[n.jsxs("div",{className:"cbs-logo",children:[n.jsx("span",{className:"logo-main",children:"Smaar Elysium"}),n.jsx("span",{className:"logo-slogan",style:{display:"block"},children:"Your Trusted work force Partner"})]}),n.jsx("div",{className:"cbs-overlay"}),n.jsx("div",{className:"cbs-content",children:n.jsxs("div",{className:"cbs-text-block",children:[n.jsx("span",{className:"cbs-go-beyond",children:"GO BEYOND THE"}),n.jsx("span",{className:"cbs-ordinary",children:"ORDINARY"}),n.jsx("span",{className:"cbs-find",children:"FIND THE PRECISE"}),n.jsx("span",{className:"cbs-executives",children:"CONTRACTORS"})]})}),n.jsxs("div",{className:"cbs-footer",children:[n.jsx("div",{className:"cbs-footer-pill",children:"www.smaarelysium.com"}),n.jsxs("div",{className:"cbs-footer-info",children:[n.jsxs("span",{children:[n.jsx("i",{className:"fa-brands fa-whatsapp"})," 8885072259"]}),n.jsx("span",{className:"cbs-divider",children:"|"}),n.jsx("span",{children:"sales@smaarelysium.com"})]})]})]})]}),n.jsxs("div",{className:"build-team-split",children:[n.jsxs("div",{className:"bts-left",children:[n.jsx("div",{className:"bts-workers-container",children:n.jsx("img",{src:Vu,alt:"Team of Workers",className:"bts-workers-img"})}),n.jsx("div",{className:"bts-web-pill",children:"www.smaarelysium.com"}),n.jsxs("div",{className:"bts-contact-footer",children:[n.jsxs("div",{className:"bts-contact-item",children:[n.jsx("i",{className:"fa-brands fa-whatsapp"})," 8885072259"]}),n.jsx("div",{className:"bts-contact-divider",children:"|"}),n.jsx("div",{className:"bts-contact-item",children:"info@smaarelysium.com"})]})]}),n.jsxs("div",{className:"bts-right",children:[n.jsx("h3",{children:"Build Your Flexible Workforce With Our Services"}),n.jsx("p",{children:"Unleash your business potential with short-term, contract-based staffing solutions designed to scale with your project demands. Our contract staffing ensures you have the right talent exactly when you need it."}),n.jsx("p",{children:"Reduce overhead and minimize payroll complexities. We handle the administrative burden of contract employees so you can focus entirely on project execution and business growth."}),n.jsx("p",{children:"Experience staffing agility that adapts to market fluctuations. Let us seamlessly integrate contract professionals into your team, ensuring continuous excellence and operational efficiency."})]})]}),n.jsxs("div",{className:"why-choose-us-section",children:[n.jsx("h2",{className:"section-title",children:"WHY CHOOSE US"}),n.jsx("p",{className:"section-intro",children:"Choose us for contract staffing that goes beyond the conventional. Experience the difference of flexible talent acquisition, rapid onboarding, and workforce strategies designed exclusively for your project's success."}),n.jsxs("div",{className:"benefits-grid",children:[n.jsxs("div",{className:"benefit-card bg-red",children:[n.jsx("h3",{children:"Agile Talent Deployment"}),n.jsx("p",{children:"We don't believe in long delays. Our approach ensures rapid sourcing and onboarding of contract professionals to meet immediate project deadlines."})]}),n.jsxs("div",{className:"benefit-card bg-gray",children:[n.jsx("h3",{children:"Comprehensive Payroll Management"}),n.jsx("p",{children:"Our commitment extends beyond sourcing. We handle all compliance, payroll, and HR administration for contract staff, reducing your operational burden."})]}),n.jsxs("div",{className:"benefit-card bg-red",children:[n.jsx("h3",{children:"Scalable Staffing Strategies"}),n.jsx("p",{children:"Recognizing that project needs fluctuate, we craft scalable strategies. Whether it's a seasonal spike or a specific project phase, we adapt to maximize efficiency."})]})]})]})]})}),n.jsx("section",{className:"faq-section",children:n.jsxs("div",{className:"container",children:[n.jsx("h2",{className:"faq-main-title",children:"FAQ"}),n.jsx("p",{className:"faq-subtitle",children:"MOST ASKED QUESTIONS."}),n.jsx("div",{className:"faq-list",children:i.map((s,o)=>n.jsxs("div",{className:`faq-item ${e===o?"active":""}`,children:[n.jsxs("div",{className:"faq-question-btn",onClick:()=>t(e===o?-1:o),children:[n.jsx("span",{className:"faq-icon",children:e===o?"−":"+"}),n.jsx("span",{className:"faq-question-text",children:s.question})]}),n.jsx("div",{className:"faq-answer-container",style:{maxHeight:e===o?"300px":"0"},children:n.jsx("div",{className:"faq-answer-content",children:n.jsx("p",{children:s.answer})})})]},o))})]})}),n.jsxs("div",{className:"insights-section",children:[n.jsx("h2",{className:"insights-title",children:"Contract Staffing Insights"}),n.jsxs("div",{className:"insights-grid",children:[n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:ix,alt:"Insight 1"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Brief Introduction to Contract Staffing"}),n.jsx("p",{children:"Contract Staffing is when businesses hire an agency to provide experts for a specific duration or project..."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:rx,alt:"Insight 2"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Need of Contract Staffing"}),n.jsx("p",{children:"Maintaining flexibility while keeping up with sudden demand spikes is very important. This makes....."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:sx,alt:"Insight 3"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Benefits of getting Contract Staffing"}),n.jsx("p",{children:"There are tons of advantages to getting Contract Staffing from us, including cost savings and agility."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:ox,alt:"Insight 4"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"How can Contract Staffing work at Your Advantage?"}),n.jsx("p",{children:"Staying lean and agile is important for every organization. And having a strong temporary workforce..."})]})]})]})]}),n.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        
        /* Manpower Supply Insights Styling */
        .insights-section {
            margin-top: 60px;
            margin-bottom: 100px;
        }
        .insights-title {
            text-align: center;
            font-size: 2.5rem;
            color: #555;
            margin-bottom: 60px;
            font-weight: 500;
        }
        .insights-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 25px;
        }
        .insight-card {
            background: #f8f9fa;
            border-radius: 25px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            display: flex;
            flex-direction: column;
        }
        .insight-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        .insight-image-wrap {
            height: 250px;
            background: #8e2de2; /* fallback purple from image */
            background: linear-gradient(135deg, #8e2de2, #4a00e0);
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .insight-image-wrap img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        .insight-card:hover .insight-image-wrap img {
            transform: scale(1.1);
        }
        .insight-content {
            padding: 30px 25px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        .insight-content h3 {
            font-size: 1.3rem;
            color: #333;
            margin-bottom: 20px;
            line-height: 1.4;
            font-weight: 600;
            min-height: 3.5rem;
        }
        .insight-content p {
            color: #777;
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 25px;
            flex-grow: 1;
        }
        .insight-btn {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            color: #555;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            background: #fff;
        }
        .insight-btn:hover {
            border-color: #FE7622;
            color: #FE7622;
            background: #fdf2f3;
        }

        /* Responsive */
        @media (max-width: 1200px) {
            .insights-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
            .insights-grid { grid-template-columns: 1fr; }
            .insights-title { font-size: 2rem; }
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
        `}})]})},lx="/assets/executive_search_bts-OrWMBkPP.jpg",cx="/assets/exec_insight_intro-x_CRoJ23.png",dx="/assets/exec_insight_need-CCzf2BRN.png",ux="/assets/exec_insight_benefits-DE5iaT2I.png",px="/assets/exec_insight_advantage-yo5GTKxu.png",mx="/assets/executive_search_choose_best-D0wV69C7.png",hx=()=>{const[e,t]=b.useState(0),i=[{question:"1. What makes your executive search process unique?",answer:"Our executive search process is distinguished by deep industry intelligence, confidential outreach, and a network of senior-level professionals, ensuring we identify and place leadership talent that drives long-term organizational success."},{question:"2. How do you identify senior-level candidates?",answer:"We leverage an extensive proprietary network, market mapping techniques, and direct headhunting to identify passive senior candidates who are not actively job searching but are the ideal fit for your leadership role."},{question:"3. What industries do you specialize in for executive placement?",answer:"Our executive search practice spans a wide range of sectors including construction, engineering, finance, technology, healthcare, hospitality, and retail — providing cross-industry expertise for C-suite and director-level placements."},{question:"4. How do you ensure confidentiality during the search?",answer:"We conduct all executive searches with the highest level of discretion. Our structured NDAs, private outreach protocols, and vetted communication procedures protect both the client and the candidate throughout every stage."},{question:"5. What is the typical timeline for an executive placement?",answer:"Depending on the seniority and specificity of the role, executive searches typically conclude within 6 to 12 weeks. We provide regular progress updates and interim shortlists so you're always in control."},{question:"6. How do you evaluate leadership potential in candidates?",answer:"We go beyond credentials — using competency-based interviews, psychometric assessments, 360-degree feedback, and leadership profiling to present candidates with the vision, values, and drive to lead your organization forward."}];return n.jsxs("div",{className:"service-page recruitment-page",children:[n.jsx(ae,{title:"Executive Search Services in UAE | C-Suite & Leadership Hiring | Smaar Elysium",description:"Smaar Elysium provides confidential executive search services across UAE. We identify and place senior leaders, directors, and C-suite executives for organizations in all major sectors.",keywords:"executive search UAE, C-suite hiring UAE, leadership recruitment, senior management recruitment, headhunting services UAE, director level hiring, Smaar Elysium executive search",canonical:"https://www.smaarelysium.com/executive-search",faqSchema:[{question:"What makes your executive search process unique?",answer:"Our executive search process is distinguished by deep industry intelligence, confidential outreach, and a network of senior-level professionals, ensuring we identify and place leadership talent that drives long-term organizational success."},{question:"How do you identify senior-level candidates?",answer:"We leverage an extensive proprietary network, market mapping techniques, and direct headhunting to identify passive senior candidates who are not actively job searching but are the ideal fit for your leadership role."},{question:"What industries do you specialize in for executive placement?",answer:"Our executive search practice spans construction, engineering, finance, technology, healthcare, hospitality, and retail — providing cross-industry expertise for C-suite and director-level placements."},{question:"How do you ensure confidentiality during the executive search?",answer:"We conduct all executive searches with the highest level of discretion. Our structured NDAs, private outreach protocols, and vetted communication procedures protect both the client and the candidate throughout every stage."},{question:"What is the typical timeline for an executive placement?",answer:"Depending on the seniority and specificity of the role, executive searches typically conclude within 6 to 12 weeks. We provide regular progress updates and interim shortlists so you are always in control."}]}),n.jsx("div",{className:"container hero-wrapper",children:n.jsxs("section",{className:"home-hero",children:[n.jsxs("div",{className:"home-hero__content",children:[n.jsxs("h1",{className:"home-hero__title",children:["Executive Search",n.jsx("br",{}),"Solutions in UAE"]}),n.jsx("p",{className:"home-hero__text",children:"Looking for visionary leaders to steer your organization? Smaar Elysium provides confidential, high-quality executive search services across all industries in UAE."}),n.jsx("div",{className:"home-hero__actions",children:n.jsx(k,{to:"/contact",className:"hero-btn-main",children:"Book Now"})})]}),n.jsx("div",{className:"home-hero__image",children:n.jsx("img",{src:Bu,alt:"Executive Search",className:"hero-workers-img"})})]})}),n.jsx("div",{className:"container",children:n.jsxs("div",{className:"service-main-content",children:[n.jsxs("div",{className:"service-intro",children:[n.jsx("h2",{children:"CHOOSE THE BEST FOR YOU"}),n.jsx("p",{children:"Welcome to our Executive Search Services – where exceptional leadership begins. Our consultants are industry specialists who understand what it takes to find and attract the world's best executives."})]}),n.jsxs("div",{className:"choose-best-split",children:[n.jsxs("div",{className:"cbs-left",children:[n.jsx("h2",{children:"Choose the best for you"}),n.jsx("p",{children:"Step into the realm of our tailored executive search services, where precision converges with discretion for an unparalleled leadership acquisition experience. Our core strengths redefine executive recruitment with a focus on confidential talent mapping, rigorous leadership assessments, and personalized C-suite strategies."}),n.jsx("p",{children:"In today's competitive business landscape, the right leaders are the most critical determinant of your organization's success."}),n.jsx("p",{children:"Our executive search services excel in delivering customized leadership solutions that address the unique vision and cultural requirements of your organization. In this era of swift business transformations, attracting the right executive talent holds greater significance than ever before."}),n.jsx("p",{children:"Recognizing the transformative role senior leaders play in driving business growth, our expert consulting team comprehensively supports your executive hiring needs. We ensure your company gains access to a distinguished pool of high-caliber professionals aligned with your strategic goals."}),n.jsx("p",{children:"Allow us to serve as your trusted partner in building a world-class leadership team, empowering your business to thrive and achieve sustainable excellence."})]}),n.jsxs("div",{className:"cbs-right",style:{backgroundImage:`url(${mx})`},children:[n.jsxs("div",{className:"cbs-logo",children:[n.jsx("span",{className:"logo-main",children:"Smaar Elysium"}),n.jsx("span",{className:"logo-slogan",style:{display:"block"},children:"Your Trusted work force Partner"})]}),n.jsx("div",{className:"cbs-overlay"}),n.jsx("div",{className:"cbs-content",children:n.jsxs("div",{className:"cbs-text-block",children:[n.jsx("span",{className:"cbs-go-beyond",children:"GO BEYOND THE"}),n.jsx("span",{className:"cbs-ordinary",children:"ORDINARY"}),n.jsx("span",{className:"cbs-find",children:"FIND THE PRECISE"}),n.jsx("span",{className:"cbs-executives",children:"LEADERS"})]})}),n.jsxs("div",{className:"cbs-footer",children:[n.jsx("div",{className:"cbs-footer-pill",children:"www.smaarelysium.com"}),n.jsxs("div",{className:"cbs-footer-info",children:[n.jsxs("span",{children:[n.jsx("i",{className:"fa-brands fa-whatsapp"})," 8885072259"]}),n.jsx("span",{className:"cbs-divider",children:"|"}),n.jsx("span",{children:"sales@smaarelysium.com"})]})]})]})]}),n.jsxs("div",{className:"build-team-split",children:[n.jsxs("div",{className:"bts-left",children:[n.jsx("div",{className:"bts-workers-container",children:n.jsx("img",{src:lx,alt:"Executive Team",className:"bts-workers-img"})}),n.jsx("div",{className:"bts-web-pill",children:"www.smaarelysium.com"}),n.jsxs("div",{className:"bts-contact-footer",children:[n.jsxs("div",{className:"bts-contact-item",children:[n.jsx("i",{className:"fa-brands fa-whatsapp"})," 8885072259"]}),n.jsx("div",{className:"bts-contact-divider",children:"|"}),n.jsx("div",{className:"bts-contact-item",children:"info@smaarelysium.com"})]})]}),n.jsxs("div",{className:"bts-right",children:[n.jsx("h3",{children:"Build Your Leadership Team With Our Executive Search"}),n.jsx("p",{children:"Unlocking potential starts with our commitment to understanding your organizational culture and strategic vision. Our tailored executive search process ensures a seamless match between your leadership requirements and the exceptional individuals we identify through our global network."}),n.jsx("p",{children:"Rigorous leadership assessment is the cornerstone of our approach. We go far beyond credentials, evaluating strategic thinking, cultural alignment, and long-term impact. Our meticulous methodology ensures that only the most qualified leaders make it to your shortlist."}),n.jsx("p",{children:"Experience executive recruitment services that elevate your leadership team to new heights. Let us navigate the complexities, so you can focus on driving strategic success."})]})]}),n.jsxs("div",{className:"why-choose-us-section",children:[n.jsx("h2",{className:"section-title",children:"WHY CHOOSE US"}),n.jsx("p",{className:"section-intro",children:"Choose us for executive search that goes beyond the conventional. Experience the difference of discreet talent identification, rigorous leadership evaluation, and strategic placement solutions designed exclusively for your organization's success."}),n.jsxs("div",{className:"benefits-grid",children:[n.jsxs("div",{className:"benefit-card bg-red",children:[n.jsx("h3",{children:"Confidential Talent Mapping"}),n.jsx("p",{children:"We conduct discreet, structured outreach to passive senior candidates, maintaining absolute confidentiality for both your organization and the candidates we engage on your behalf."})]}),n.jsxs("div",{className:"benefit-card bg-gray",children:[n.jsx("h3",{children:"Rigorous Leadership Assessment"}),n.jsx("p",{children:"Our commitment goes beyond sourcing. We evaluate leadership competencies, cultural alignment, and long-term strategic fit using proven frameworks and psychometric tools."})]}),n.jsxs("div",{className:"benefit-card bg-red",children:[n.jsx("h3",{children:"Bespoke Executive Strategies"}),n.jsx("p",{children:"Every executive search is unique. We craft bespoke search strategies aligned to your industry, organizational culture, and growth vision — ensuring the right leader for the right moment."})]})]})]})]})}),n.jsx("section",{className:"faq-section",children:n.jsxs("div",{className:"container",children:[n.jsx("h2",{className:"faq-main-title",children:"FAQ"}),n.jsx("p",{className:"faq-subtitle",children:"MOST ASKED QUESTIONS."}),n.jsx("div",{className:"faq-list",children:i.map((r,s)=>n.jsxs("div",{className:`faq-item ${e===s?"active":""}`,children:[n.jsxs("div",{className:"faq-question-btn",onClick:()=>t(e===s?-1:s),children:[n.jsx("span",{className:"faq-icon",children:e===s?"−":"+"}),n.jsx("span",{className:"faq-question-text",children:r.question})]}),n.jsx("div",{className:"faq-answer-container",style:{maxHeight:e===s?"300px":"0"},children:n.jsx("div",{className:"faq-answer-content",children:n.jsx("p",{children:r.answer})})})]},s))})]})}),n.jsxs("div",{className:"insights-section",children:[n.jsx("h2",{className:"insights-title",children:"Executive Search Insights"}),n.jsxs("div",{className:"insights-grid",children:[n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:cx,alt:"Insight 1"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Brief Introduction to Executive Search"}),n.jsx("p",{children:"Executive Search is a specialized recruitment service focused on identifying and placing senior leaders and C-suite executives for organizations..."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:dx,alt:"Insight 2"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"The Need for Executive Search"}),n.jsx("p",{children:"Finding senior leadership through conventional job boards rarely works. This is why organizations across UAE partner with executive search firms..."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:ux,alt:"Insight 3"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Benefits of Executive Search Services"}),n.jsx("p",{children:"The advantages of dedicated executive search include access to passive talent, faster placements, higher retention, and a stronger organizational culture."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:px,alt:"Insight 4"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"How Executive Search Works at Your Advantage?"}),n.jsx("p",{children:"The competitive edge in business comes from exceptional leadership. A strategic executive search partner ensures your leadership pipeline is always future-ready..."})]})]})]})]}),n.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        
        /* Insights Section */
        .insights-section { margin-top: 60px; margin-bottom: 100px; }
        .insights-title { text-align: center; font-size: 2.5rem; color: #555; margin-bottom: 60px; font-weight: 500; }
        .insights-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 25px; }
        .insight-card {
            background: #f8f9fa;
            border-radius: 25px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            display: flex;
            flex-direction: column;
        }
        .insight-card:hover { transform: translateY(-10px); box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
        .insight-image-wrap {
            height: 250px;
            background: linear-gradient(135deg, #8e2de2, #4a00e0);
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .insight-image-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .insight-card:hover .insight-image-wrap img { transform: scale(1.1); }
        .insight-content { padding: 30px 25px; flex-grow: 1; display: flex; flex-direction: column; }
        .insight-content h3 { font-size: 1.3rem; color: #333; margin-bottom: 20px; line-height: 1.4; font-weight: 600; min-height: 3.5rem; }
        .insight-content p { color: #777; font-size: 0.95rem; line-height: 1.6; margin-bottom: 25px; flex-grow: 1; }
        .insight-btn {
            display: flex; align-items: center; justify-content: space-between;
            padding: 12px 20px; border: 1px solid #ddd; border-radius: 8px;
            color: #555; text-decoration: none; font-weight: 500; transition: all 0.3s ease; background: #fff;
        }
        .insight-btn:hover { border-color: #FE7622; color: #FE7622; background: #fdf2f3; }

        @media (max-width: 1200px) { .insights-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .insights-grid { grid-template-columns: 1fr; } .insights-title { font-size: 2rem; } }
        
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
        `}})]})},Qu="/assets/hr_outsourcing_bts-BQYntwWB.jpg",fx="/assets/hr_insight_intro-D2nuwdfW.png",gx="/assets/insight_need-DZtzlm_Y.png",xx="/assets/insight_benefits-Dk0TpN4h.png",yx="/assets/insight_advantage-BPpT1tAl.png",vx="/assets/hr_outsourcing_bts-BQYntwWB.jpg",wx=()=>{const[e,t]=b.useState(0),i=[{question:"1. What makes your HR Outsourcing service unique?",answer:"Our HR Outsourcing service stands out through a fully integrated approach that takes ownership of your entire HR function — from payroll processing and compliance to employee relations and performance management — so your internal team can focus on strategic priorities."},{question:"2. Which HR functions can you manage on our behalf?",answer:"We can manage a comprehensive range of HR functions including payroll, leave and attendance tracking, employee onboarding and offboarding, benefits administration, labor law compliance, HR policy development, and performance review systems."},{question:"3. How do you ensure compliance with UAEn labour laws?",answer:"Our HR specialists stay continuously updated with UAEn labour law amendments, Ministry of Labour regulations, and statutory notifications. We proactively audit your HR practices and implement corrective measures to ensure full legal compliance at all times."},{question:"4. Can we outsource only specific HR functions?",answer:"Absolutely. We offer flexible HR Outsourcing models — from full HR function management to selective outsourcing of specific areas such as payroll, recruitment, or compliance. You choose the scope that best suits your needs and budget."},{question:"5. How do you handle confidentiality of employee data?",answer:"We operate with rigorous data protection protocols aligned with international standards. All employee information is stored securely, access is strictly controlled, and our agreements include comprehensive confidentiality and data privacy clauses."},{question:"6. What is the transition process when we start using your HR Outsourcing services?",answer:"Our dedicated onboarding team conducts a thorough initial audit of your current HR processes, identifies gaps, and designs a tailored transition roadmap. We ensure a seamless handover with minimal disruption to your workforce and operations."}];return n.jsxs("div",{className:"service-page recruitment-page",children:[n.jsx(ae,{title:"HR Outsourcing Services in UAE | Payroll & Compliance Management | Smaar Elysium",description:"Smaar Elysium offers comprehensive HR Outsourcing services in UAE including payroll processing, labour law compliance, employee lifecycle management, and HR policy development.",keywords:"HR outsourcing UAE, payroll outsourcing UAE, HR management services, labour law compliance UAE, HR BPO UAE, employee management outsourcing, Smaar Elysium HR",canonical:"https://www.smaarelysium.com/hr-outsourcing",faqSchema:[{question:"What makes your HR Outsourcing service unique?",answer:"Our HR Outsourcing service stands out through a fully integrated approach that takes ownership of your entire HR function — from payroll processing and compliance to employee relations and performance management — so your internal team can focus on strategic priorities."},{question:"Which HR functions can you manage on our behalf?",answer:"We can manage payroll, leave and attendance tracking, employee onboarding and offboarding, benefits administration, labor law compliance, HR policy development, and performance review systems."},{question:"How do you ensure compliance with UAEn labour laws?",answer:"Our HR specialists stay continuously updated with UAEn labour law amendments, Ministry of Labour regulations, and statutory notifications. We proactively audit your HR practices and implement corrective measures to ensure full legal compliance at all times."},{question:"Can we outsource only specific HR functions?",answer:"Absolutely. We offer flexible HR Outsourcing models — from full HR function management to selective outsourcing of specific areas such as payroll, recruitment, or compliance. You choose the scope that best suits your needs and budget."},{question:"How do you handle confidentiality of employee data?",answer:"We operate with rigorous data protection protocols aligned with international standards. All employee information is stored securely, access is strictly controlled, and our agreements include comprehensive confidentiality and data privacy clauses."}]}),n.jsx("div",{className:"container hero-wrapper",children:n.jsxs("section",{className:"home-hero",children:[n.jsxs("div",{className:"home-hero__content",children:[n.jsxs("h1",{className:"home-hero__title",children:["HR Outsourcing",n.jsx("br",{}),"Solutions in UAE"]}),n.jsx("p",{className:"home-hero__text",children:"Looking to streamline your HR operations and reduce overhead? Smaar Elysium provides comprehensive HR Outsourcing services that keep your workforce compliant, motivated, and productive across UAE."}),n.jsx("div",{className:"home-hero__actions",children:n.jsx(k,{to:"/contact",className:"hero-btn-main",children:"Book Now"})})]}),n.jsx("div",{className:"home-hero__image",children:n.jsx("img",{src:$u,alt:"HR Outsourcing Team",className:"hero-workers-img"})})]})}),n.jsx("div",{className:"container",children:n.jsxs("div",{className:"service-main-content",children:[n.jsxs("div",{className:"service-intro",children:[n.jsx("h2",{children:"CHOOSE THE BEST FOR YOU"}),n.jsx("p",{children:"Welcome to our HR Outsourcing Services — where operational efficiency meets workforce excellence. Our HR experts are deeply embedded in UAEn labour regulations and deliver seamless, end-to-end human resources solutions."})]}),n.jsxs("div",{className:"choose-best-split",children:[n.jsxs("div",{className:"cbs-left",children:[n.jsx("h2",{children:"Choose the best for you"}),n.jsx("p",{children:"Step into the realm of our tailored HR Outsourcing services, where compliance converges with operational excellence for an unparalleled human resources experience. Our core strengths redefine HR management with a focus on payroll accuracy, regulatory compliance, and people-first strategies."}),n.jsx("p",{children:"In the ever-evolving UAEn business environment, effective management of your HR function is a critical determinant of organizational success and employee satisfaction."}),n.jsx("p",{children:"Our HR Outsourcing services excel in delivering customized solutions crafted to suit the unique regulatory and cultural requirements of your organization. In this era of rapid change, maintaining a compliant and engaged workforce holds greater significance than ever before."}),n.jsx("p",{children:"Recognizing the strategic role that structured HR management plays in driving business performance, our expert team comprehensively manages your human resources needs — from day one through to long-term retention."}),n.jsx("p",{children:"Allow us to serve as your dedicated HR partner, empowering your business to reduce costs, eliminate compliance risks, and build a thriving workplace culture."})]}),n.jsxs("div",{className:"cbs-right",style:{backgroundImage:`url(${vx})`},children:[n.jsxs("div",{className:"cbs-logo",children:[n.jsx("span",{className:"logo-main",children:"Smaar Elysium"}),n.jsx("span",{className:"logo-slogan",style:{display:"block"},children:"Your Trusted work force Partner"})]}),n.jsx("div",{className:"cbs-overlay"}),n.jsx("div",{className:"cbs-content",children:n.jsxs("div",{className:"cbs-text-block",children:[n.jsx("span",{className:"cbs-go-beyond",children:"GO BEYOND THE"}),n.jsx("span",{className:"cbs-ordinary",children:"ORDINARY"}),n.jsx("span",{className:"cbs-find",children:"BUILD THE IDEAL"}),n.jsx("span",{className:"cbs-executives",children:"HR SYSTEM"})]})}),n.jsxs("div",{className:"cbs-footer",children:[n.jsx("div",{className:"cbs-footer-pill",children:"www.smaarelysium.com"}),n.jsxs("div",{className:"cbs-footer-info",children:[n.jsxs("span",{children:[n.jsx("i",{className:"fa-brands fa-whatsapp"})," 8885072259"]}),n.jsx("span",{className:"cbs-divider",children:"|"}),n.jsx("span",{children:"sales@smaarelysium.com"})]})]})]})]}),n.jsxs("div",{className:"build-team-split",children:[n.jsxs("div",{className:"bts-left",children:[n.jsx("div",{className:"bts-workers-container",children:n.jsx("img",{src:Qu,alt:"HR Outsourcing Team",className:"bts-workers-img"})}),n.jsx("div",{className:"bts-web-pill",children:"www.smaarelysium.com"}),n.jsxs("div",{className:"bts-contact-footer",children:[n.jsxs("div",{className:"bts-contact-item",children:[n.jsx("i",{className:"fa-brands fa-whatsapp"})," 8885072259"]}),n.jsx("div",{className:"bts-contact-divider",children:"|"}),n.jsx("div",{className:"bts-contact-item",children:"info@smaarelysium.com"})]})]}),n.jsxs("div",{className:"bts-right",children:[n.jsx("h3",{children:"Build Your HR Foundation With Our Outsourcing Services"}),n.jsx("p",{children:"Unleash organizational efficiency by outsourcing your entire HR function to our specialist team. From payroll processing and leave management to MOHRE compliance and employee relations, we take full ownership of your human resources operations."}),n.jsx("p",{children:"Eliminate compliance risks and administrative burden. Our dedicated HR professionals stay current with UAEn labour law amendments ensuring your company is always protected, audit-ready, and aligned with the best industry practices."}),n.jsx("p",{children:"Experience HR management that transforms your workforce into a competitive advantage. Let us handle the complexities of people operations, so you can focus entirely on growing your business."})]})]}),n.jsxs("div",{className:"why-choose-us-section",children:[n.jsx("h2",{className:"section-title",children:"WHY CHOOSE US"}),n.jsx("p",{className:"section-intro",children:"Choose us for HR Outsourcing that goes beyond administrative processing. Experience the difference of strategic HR partnership, guaranteed compliance, and a people-first approach designed exclusively for your organization's long-term success."}),n.jsxs("div",{className:"benefits-grid",children:[n.jsxs("div",{className:"benefit-card bg-red",children:[n.jsx("h3",{children:"End-to-End HR Management"}),n.jsx("p",{children:"We don't just process payroll — we manage your full HR ecosystem. From onboarding and policy implementation to performance reviews and offboarding, we own every HR touchpoint."})]}),n.jsxs("div",{className:"benefit-card bg-gray",children:[n.jsx("h3",{children:"UAEn Labour Law Compliance"}),n.jsx("p",{children:"Our HR specialists continuously monitor Ministry of Labour regulations and UAEn labour law updates. We proactively audit your HR practices and implement corrective measures before issues arise."})]}),n.jsxs("div",{className:"benefit-card bg-red",children:[n.jsx("h3",{children:"Scalable HR Solutions"}),n.jsx("p",{children:"Whether you're a growing startup or an enterprise, our HR Outsourcing services scale with your needs. We adapt our service scope, team size, and technology tools as your workforce evolves."})]})]})]})]})}),n.jsx("section",{className:"faq-section",children:n.jsxs("div",{className:"container",children:[n.jsx("h2",{className:"faq-main-title",children:"FAQ"}),n.jsx("p",{className:"faq-subtitle",children:"MOST ASKED QUESTIONS."}),n.jsx("div",{className:"faq-list",children:i.map((r,s)=>n.jsxs("div",{className:`faq-item ${e===s?"active":""}`,children:[n.jsxs("div",{className:"faq-question-btn",onClick:()=>t(e===s?-1:s),children:[n.jsx("span",{className:"faq-icon",children:e===s?"−":"+"}),n.jsx("span",{className:"faq-question-text",children:r.question})]}),n.jsx("div",{className:"faq-answer-container",style:{maxHeight:e===s?"300px":"0"},children:n.jsx("div",{className:"faq-answer-content",children:n.jsx("p",{children:r.answer})})})]},s))})]})}),n.jsxs("div",{className:"insights-section",children:[n.jsx("h2",{className:"insights-title",children:"HR Outsourcing Insights"}),n.jsxs("div",{className:"insights-grid",children:[n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:fx,alt:"Insight 1"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Brief Introduction to HR Outsourcing"}),n.jsx("p",{children:"HR Outsourcing is when businesses delegate their human resources functions to an external provider, enabling them to focus on core operations..."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:gx,alt:"Insight 2"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"The Need for HR Outsourcing"}),n.jsx("p",{children:"Managing HR in-house demands significant time, expertise, and resources. This is why organizations across UAE choose to outsource their HR functions to specialists..."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:xx,alt:"Insight 3"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Benefits of HR Outsourcing"}),n.jsx("p",{children:"The key benefits of HR Outsourcing include reduced operational costs, improved compliance, access to specialist expertise, and a stronger focus on business productivity."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:yx,alt:"Insight 4"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"How HR Outsourcing Drives Business Growth"}),n.jsx("p",{children:"By delegating HR operations to a trusted partner, companies unlock more time for strategic planning, reduce risk, and build a more engaged, productive workforce..."})]})]})]})]}),n.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        
        /* Insights Section */
        .insights-section { margin-top: 60px; margin-bottom: 100px; }
        .insights-title { text-align: center; font-size: 2.5rem; color: #555; margin-bottom: 60px; font-weight: 500; }
        .insights-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 25px; }
        .insight-card {
            background: #f8f9fa;
            border-radius: 25px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            display: flex;
            flex-direction: column;
        }
        .insight-card:hover { transform: translateY(-10px); box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
        .insight-image-wrap {
            height: 250px;
            background: linear-gradient(135deg, #8e2de2, #4a00e0);
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .insight-image-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .insight-card:hover .insight-image-wrap img { transform: scale(1.1); }
        .insight-content { padding: 30px 25px; flex-grow: 1; display: flex; flex-direction: column; }
        .insight-content h3 { font-size: 1.3rem; color: #333; margin-bottom: 20px; line-height: 1.4; font-weight: 600; min-height: 3.5rem; }
        .insight-content p { color: #777; font-size: 0.95rem; line-height: 1.6; margin-bottom: 25px; flex-grow: 1; }
        .insight-btn {
            display: flex; align-items: center; justify-content: space-between;
            padding: 12px 20px; border: 1px solid #ddd; border-radius: 8px;
            color: #555; text-decoration: none; font-weight: 500; transition: all 0.3s ease; background: #fff;
        }
        .insight-btn:hover { border-color: #FE7622; color: #FE7622; background: #fdf2f3; }

        @media (max-width: 1200px) { .insights-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .insights-grid { grid-template-columns: 1fr; } .insights-title { font-size: 2rem; } }
        
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
        `}})]})},bx="/assets/security_insight_intro-MgKq6BML.png",jx="/assets/security_insight_need-BjBAiqX4.png",kx="/assets/security_insight_benefits-DOaoG5jr.png",Nx="/assets/security_insight_advantage-DIOiazsd.png",Sx="/assets/security_choose_best-hHJlqN_P.png",Ex="/assets/security_bts_left-DRr8hl33.png",_x=()=>{const[e,t]=b.useState(0),i=[{question:"1. What makes your security staffing solutions unique?",answer:"Our security staffing solutions stand out through a rigorous vetting process that filters for background integrity, physical fitness, and behavioral competency — ensuring we deploy only the most reliable and professionally trained security personnel."},{question:"2. How thorough is your security personnel screening process?",answer:"We conduct extensive background checks, criminal record verification, employment history validation, and psychometric assessments. Each candidate undergoes security-specific competency testing before being presented to your organization."},{question:"3. What types of security roles do you staff for?",answer:"We provide staffing across a wide spectrum of security roles including static guards, mobile patrol officers, CCTV operators, access control personnel, event security, and senior security supervisors across all industries in UAE."},{question:"4. How do you ensure compliance with UAEn security regulations?",answer:"All our security personnel hold valid licenses as required by UAEn law. We manage all regulatory compliance, licensing renewals, and training certifications on your behalf."},{question:"5. Can you provide security staff for short-term events or projects?",answer:"Absolutely. We offer flexible security staffing solutions for both long-term operational needs and short-term assignments such as events, exhibitions, construction sites, and VIP visits — deploying vetted personnel rapidly when needed."},{question:"6. How do you handle training and readiness of security staff?",answer:"All our security personnel complete a structured induction program covering emergency response protocols, conflict de-escalation, first aid, and site-specific briefings. We also provide ongoing refresher training to keep skills sharp and current."}];return n.jsxs("div",{className:"service-page recruitment-page",children:[n.jsx(ae,{title:"Security Staffing Solutions in UAE | Licensed Security Personnel | Smaar Elysium",description:"Smaar Elysium provides licensed, trained security personnel for businesses across UAE. We deploy static guards, mobile patrol officers, CCTV operators, and event security teams with full compliance.",keywords:"security staffing UAE, licensed security guards UAE, security personnel agency, corporate security solutions UAE, event security UAE, CCTV operators UAE, Smaar Elysium security",canonical:"https://www.smaarelysium.com/security-solutions",faqSchema:[{question:"What makes your security staffing solutions unique?",answer:"Our security staffing solutions stand out through a rigorous vetting process that filters for background integrity, physical fitness, and behavioral competency — ensuring we deploy only the most reliable and professionally trained security personnel."},{question:"How thorough is your security personnel screening process?",answer:"We conduct extensive background checks, criminal record verification, employment history validation, and psychometric assessments. Each candidate undergoes security-specific competency testing before being presented to your organization."},{question:"What types of security roles do you staff for?",answer:"We provide staffing across static guards, mobile patrol officers, CCTV operators, access control personnel, event security, and senior security supervisors across all industries in UAE."},{question:"How do you ensure compliance with UAEn security regulations?",answer:"All our security personnel hold valid licenses as required by UAEn law. We manage all regulatory compliance, licensing renewals, and training certifications on your behalf."},{question:"Can you provide security staff for short-term events or projects?",answer:"Absolutely. We offer flexible security staffing solutions for both long-term operational needs and short-term assignments such as events, exhibitions, construction sites, and VIP visits — deploying vetted personnel rapidly when needed."}]}),n.jsx("div",{className:"container hero-wrapper",children:n.jsxs("section",{className:"home-hero",children:[n.jsxs("div",{className:"home-hero__content",children:[n.jsxs("h1",{className:"home-hero__title",children:["Security Staffing",n.jsx("br",{}),"Solutions in UAE"]}),n.jsx("p",{className:"home-hero__text",children:"Looking for professional, licensed security personnel for your business or facility? Smaar Elysium provides trusted, industry-compliant security staffing solutions across UAE."}),n.jsx("div",{className:"home-hero__actions",children:n.jsx(k,{to:"/contact",className:"hero-btn-main",children:"Book Now"})})]}),n.jsx("div",{className:"home-hero__image",children:n.jsx("img",{src:Yu,alt:"Security Solutions Team",className:"hero-workers-img"})})]})}),n.jsx("div",{className:"container",children:n.jsxs("div",{className:"service-main-content",children:[n.jsxs("div",{className:"service-intro",children:[n.jsx("h2",{children:"CHOOSE THE BEST FOR YOU"}),n.jsx("p",{children:"Welcome to our Security Staffing Solutions — where safety meets professionalism. Our security experts are fully licensed, extensively trained, and equipped to protect your people, assets, and premises 24/7."})]}),n.jsxs("div",{className:"choose-best-split",children:[n.jsxs("div",{className:"cbs-left",children:[n.jsx("h2",{children:"Choose the best for you"}),n.jsx("p",{children:"Step into the realm of our tailored security staffing services, where vigilance converges with professionalism for an unparalleled protection experience. Our core strengths redefine security deployment with a focus on meticulous personnel vetting, regulatory compliance, and customized security strategies."}),n.jsx("p",{children:"In today's high-stakes business environment, maintaining a safe and secure workplace is a fundamental requirement for operational continuity and stakeholder confidence."}),n.jsx("p",{children:"Our security staffing services excel in delivering customized protection solutions suited to the unique risk profile and operational requirements of your organization. In this era of evolving security threats, deploying qualified and licensed security personnel holds greater significance than ever before."}),n.jsx("p",{children:"Recognizing the critical role that professional security plays in protecting business assets and ensuring employee safety, our dedicated team comprehensively meets your security workforce needs with speed and precision."}),n.jsx("p",{children:"Allow us to serve as your trusted security partner — deploying vetted, licensed, and battle-ready professionals who form a reliable shield around your business operations."})]}),n.jsxs("div",{className:"cbs-right",style:{backgroundImage:`url(${Sx})`},children:[n.jsxs("div",{className:"cbs-logo",children:[n.jsx("span",{className:"logo-main",children:"Smaar Elysium"}),n.jsx("span",{className:"logo-slogan",style:{display:"block"},children:"Your Trusted work force Partner"})]}),n.jsx("div",{className:"cbs-overlay"}),n.jsx("div",{className:"cbs-content",children:n.jsxs("div",{className:"cbs-text-block",children:[n.jsx("span",{className:"cbs-go-beyond",children:"GO BEYOND THE"}),n.jsx("span",{className:"cbs-ordinary",children:"ORDINARY"}),n.jsx("span",{className:"cbs-find",children:"DEPLOY THE FINEST"}),n.jsx("span",{className:"cbs-executives",children:"SECURITY STAFF"})]})}),n.jsxs("div",{className:"cbs-footer",children:[n.jsx("div",{className:"cbs-footer-pill",children:"www.smaarelysium.com"}),n.jsxs("div",{className:"cbs-footer-info",children:[n.jsxs("span",{children:[n.jsx("i",{className:"fa-brands fa-whatsapp"})," 8885072259"]}),n.jsx("span",{className:"cbs-divider",children:"|"}),n.jsx("span",{children:"sales@smaarelysium.com"})]})]})]})]}),n.jsxs("div",{className:"build-team-split",children:[n.jsxs("div",{className:"bts-left",style:{backgroundImage:`url(${Ex})`,backgroundSize:"cover",backgroundPosition:"center"},children:[n.jsx("div",{className:"bts-web-pill",children:"www.smaarelysium.com"}),n.jsxs("div",{className:"bts-contact-footer",children:[n.jsxs("div",{className:"bts-contact-item",children:[n.jsx("i",{className:"fa-brands fa-whatsapp"})," 8885072259"]}),n.jsx("div",{className:"bts-contact-divider",children:"|"}),n.jsx("div",{className:"bts-contact-item",children:"info@smaarelysium.com"})]})]}),n.jsxs("div",{className:"bts-right",children:[n.jsx("h3",{children:"Build Your Security Workforce With Our Expert Solutions"}),n.jsx("p",{children:"Protect what matters most with our dedicated security staffing service. We source, vet, and deploy SIRA-licensed security officers who are trained to respond effectively to threats, manage access control, and maintain a safe environment for your business operations."}),n.jsx("p",{children:"Compliance is at the core of everything we do. Every security professional we field carries valid regulatory certifications and has completed structured training in emergency response, conflict management, and first aid."}),n.jsx("p",{children:"Experience security deployment that gives you true peace of mind. Let us handle the complexity of security workforce management so that you can focus entirely on running your business with confidence."})]})]}),n.jsxs("div",{className:"why-choose-us-section",children:[n.jsx("h2",{className:"section-title",children:"WHY CHOOSE US"}),n.jsx("p",{className:"section-intro",children:"Choose us for security staffing that goes beyond ordinary guarding. Experience the difference of rigorous personnel vetting, guaranteed licensing compliance, and tailored security deployment strategies designed exclusively for your facility's safety needs."}),n.jsxs("div",{className:"benefits-grid",children:[n.jsxs("div",{className:"benefit-card bg-red",children:[n.jsx("h3",{children:"SIRA-Licensed Personnel"}),n.jsx("p",{children:"Every security officer we deploy is fully licensed and compliant with UAEn security regulations. We manage all licensing, renewals, and compliance documentation on your behalf."})]}),n.jsxs("div",{className:"benefit-card bg-gray",children:[n.jsx("h3",{children:"Rigorous Background Screening"}),n.jsx("p",{children:"Our commitment to safety begins at the screening stage. Every candidate undergoes thorough background checks, criminal verification, reference checks, and behavioral assessments before deployment."})]}),n.jsxs("div",{className:"benefit-card bg-red",children:[n.jsx("h3",{children:"Rapid & Scalable Deployment"}),n.jsx("p",{children:"Security needs can arise without warning. We maintain a ready pool of trained security professionals, enabling rapid deployment for emergency coverage, events, and new site setups across UAE."})]})]})]})]})}),n.jsx("section",{className:"faq-section",children:n.jsxs("div",{className:"container",children:[n.jsx("h2",{className:"faq-main-title",children:"FAQ"}),n.jsx("p",{className:"faq-subtitle",children:"MOST ASKED QUESTIONS."}),n.jsx("div",{className:"faq-list",children:i.map((r,s)=>n.jsxs("div",{className:`faq-item ${e===s?"active":""}`,children:[n.jsxs("div",{className:"faq-question-btn",onClick:()=>t(e===s?-1:s),children:[n.jsx("span",{className:"faq-icon",children:e===s?"−":"+"}),n.jsx("span",{className:"faq-question-text",children:r.question})]}),n.jsx("div",{className:"faq-answer-container",style:{maxHeight:e===s?"300px":"0"},children:n.jsx("div",{className:"faq-answer-content",children:n.jsx("p",{children:r.answer})})})]},s))})]})}),n.jsxs("div",{className:"insights-section",children:[n.jsx("h2",{className:"insights-title",children:"Security Solutions Insights"}),n.jsxs("div",{className:"insights-grid",children:[n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:bx,alt:"Security Staffing Introduction"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Brief Introduction to Security Staffing"}),n.jsx("p",{children:"Security Staffing involves deploying licensed, trained professionals to safeguard your premises, people, and assets around the clock..."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:jx,alt:"Security Solutions Need"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"The Growing Need for Security Solutions"}),n.jsx("p",{children:"As business environments become more complex, the demand for professional, licensed security personnel has grown significantly across UAE..."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:kx,alt:"Security Staffing Benefits"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Benefits of Professional Security Staffing"}),n.jsx("p",{children:"Professional security staffing reduces incidents, deters threats, protects assets, and gives management the confidence to operate at full capacity."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:Nx,alt:"Security Solutions Advantage"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"How Security Solutions Work at Your Advantage"}),n.jsx("p",{children:"A robust security presence not only protects your facility but also boosts employee confidence, enhances your brand reputation, and ensures operational continuity..."})]})]})]})]}),n.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

        .insights-section { margin-top: 60px; margin-bottom: 100px; }
        .insights-title { text-align: center; font-size: 2.5rem; color: #555; margin-bottom: 60px; font-weight: 500; }
        .insights-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 25px; }
        .insight-card { background: #f8f9fa; border-radius: 25px; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.05); display: flex; flex-direction: column; }
        .insight-card:hover { transform: translateY(-10px); box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
        .insight-image-wrap { height: 250px; background: linear-gradient(135deg, #8e2de2, #4a00e0); overflow: hidden; display: flex; align-items: center; justify-content: center; }
        .insight-image-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .insight-card:hover .insight-image-wrap img { transform: scale(1.1); }
        .insight-content { padding: 30px 25px; flex-grow: 1; display: flex; flex-direction: column; }
        .insight-content h3 { font-size: 1.3rem; color: #333; margin-bottom: 20px; line-height: 1.4; font-weight: 600; min-height: 3.5rem; }
        .insight-content p { color: #777; font-size: 0.95rem; line-height: 1.6; margin-bottom: 25px; flex-grow: 1; }
        .insight-btn { display: flex; align-items: center; justify-content: space-between; padding: 12px 20px; border: 1px solid #ddd; border-radius: 8px; color: #555; text-decoration: none; font-weight: 500; transition: all 0.3s ease; background: #fff; }
        .insight-btn:hover { border-color: #FE7622; color: #FE7622; background: #fdf2f3; }
        @media (max-width: 1200px) { .insights-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .insights-grid { grid-template-columns: 1fr; } .insights-title { font-size: 2rem; } }

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
        `}})]})},zx="/assets/contacthero-BB1f5bR_.png",Cx="/assets/contact_dubai_city-onPP3MWA.png",Tx="/assets/contact_quote_office-e0WEmMGm.png",qx=()=>{const[e,t]=b.useState({name:"",email:"",phone:"",message:""});return n.jsxs("div",{className:"contact-page",children:[n.jsx(ae,{title:"Contact Smaar Elysium | Manpower Supply & Staffing Agency in UAE",description:"Contact Smaar Elysium for manpower supply, contract staffing, executive search, HR outsourcing, and security staffing services across UAE. Reach us at 8885072259 or sales@smaarelysium.com.",keywords:"contact Smaar Elysium, manpower agency contact UAE, staffing company Dubai, hire manpower UAE contact, workforce solutions contact, Smaar Elysium phone",canonical:"https://www.smaarelysium.com/contact",faqSchema:[{question:"How can I contact Smaar Elysium for manpower services?",answer:"You can reach Smaar Elysium by calling 8885072259, emailing sales@smaarelysium.com, or filling out the contact form on our website. Our team responds promptly to all enquiries."},{question:"Where is Smaar Elysium located?",answer:"Smaar Elysium is headquartered in Dubai, UAE, and provides manpower supply and staffing services across all major cities and industrial zones throughout the country."},{question:"How quickly can Smaar Elysium deploy manpower after contact?",answer:"Depending on the role and location, Smaar Elysium can mobilize manpower within 24 to 72 hours for urgent requirements. For large-scale deployments, our team will provide a detailed mobilization timeline upon enquiry."},{question:"Does Smaar Elysium provide manpower for both small and large projects?",answer:"Yes. We serve businesses of all sizes — from small site contracts requiring a few workers to large-scale industrial projects requiring hundreds of skilled professionals across multiple locations."}]}),n.jsx("div",{className:"container hero-wrapper",children:n.jsxs("section",{className:"home-hero",children:[n.jsxs("div",{className:"home-hero__content",children:[n.jsxs("h1",{className:"home-hero__title",children:["Contact Us",n.jsx("br",{}),"We're Here to Help"]}),n.jsx("p",{className:"home-hero__text",children:"Have a question, a staffing requirement, or need a consultation? Our expert team at Smaar Elysium is ready to assist you with the right workforce solutions."}),n.jsx("div",{className:"home-hero__actions",children:n.jsx("a",{href:"tel:8885072259",className:"hero-btn-main",children:"Call Us Now"})})]}),n.jsx("div",{className:"home-hero__image-wrapper",children:n.jsx("img",{src:zx,alt:"Contact Manpower UAE",className:"home-hero__image"})})]})}),n.jsx("section",{className:"location-detail-section",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"location-split-card",children:[n.jsxs("div",{className:"location-image-side",children:[n.jsx("img",{src:Cx,alt:"Dubai UAE Skyline",className:"location-city-img"}),n.jsx("div",{className:"location-country-label",children:"UAE"})]}),n.jsxs("div",{className:"location-details-side",children:[n.jsxs("p",{className:"loc-line",children:["Mobile: ",n.jsx("strong",{children:"8885072259"})]}),n.jsxs("p",{className:"loc-line",children:["Email: ",n.jsx("strong",{children:"info@smaarelysium.com"})]}),n.jsx("a",{href:"https://smaarelysium.com",target:"_blank",rel:"noreferrer",className:"loc-website",children:"smaarelysium.com"}),n.jsx("p",{className:"loc-address",children:"Dubai"}),n.jsx("a",{href:"#contact-form",className:"loc-book-btn",onClick:i=>{var r;i.preventDefault(),(r=document.getElementById("contact-form"))==null||r.scrollIntoView({behavior:"smooth"})},children:"Book Manpower"})]})]})})}),n.jsx("div",{className:"container map-wrapper",children:n.jsx("div",{className:"fullwidth-map-card",children:n.jsx("iframe",{title:"Dubai UAE Location",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.847844238!2d54.89781604758778!3d25.075707324317073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1710123456789!5m2!1sen!2sae",width:"100%",height:"480",style:{border:0,display:"block"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})}),n.jsx("section",{id:"contact-form",className:"quote-section",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"quote-wrapper",children:[n.jsx("div",{className:"quote-image-side",children:n.jsx("img",{src:Tx,alt:"Smaar Elysium Office Meeting"})}),n.jsxs("div",{className:"quote-form-side",children:[n.jsx("span",{className:"quote-label",children:"Request a Quote"}),n.jsx("h2",{className:"quote-title",children:"Get a quick follow up!"}),n.jsx("p",{className:"quote-desc",children:"In case you have any queries or want to hire our adept manpower services, fill up this form, and our experts will get back to you!"}),n.jsxs("form",{className:"quote-form",onSubmit:i=>i.preventDefault(),children:[n.jsxs("div",{className:"form-row",children:[n.jsx("input",{type:"text",placeholder:"Enter Name",required:!0}),n.jsx("input",{type:"email",placeholder:"Enter Email",required:!0})]}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"tel",placeholder:"Phone Number",required:!0})}),n.jsx("div",{className:"form-group",children:n.jsx("textarea",{placeholder:"Comments",rows:"4"})}),n.jsx("div",{className:"recaptcha-placeholder",children:n.jsxs("div",{className:"recaptcha-box",children:[n.jsx("input",{type:"checkbox",id:"robot"}),n.jsx("label",{htmlFor:"robot",children:"I'm not a robot"}),n.jsx("div",{className:"recaptcha-logo",children:n.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/a/ad/RecaptchaLogo.svg",alt:"reCAPTCHA",width:"30"})})]})}),n.jsx("button",{type:"submit",className:"quote-submit-btn",children:"Book Now"})]})]})]})})}),n.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        @media (max-width: 1024px) { .home-hero { flex-direction: column; text-align: center; padding: 60px 50px; } .home-hero__image { max-width: 300px; margin-top: 30px; } }
        @media (max-width: 576px) { .home-hero { padding: 40px 25px; border-radius: 20px; } .home-hero__image { max-width: 220px; } }

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
            background: linear-gradient(135deg, #1d152a 0%, #b11d2b 100%);
            padding: 60px 50px;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .quote-label { font-size: 1rem; opacity: 0.9; margin-bottom: 5px; display: block; }
        .quote-title { font-size: 2.8rem; font-weight: 600; margin-bottom: 20px; }
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
            transition: 0.3s;
        }
        .quote-form input::placeholder, .quote-form textarea::placeholder { color: rgba(255,255,255,0.5); }
        .quote-form input:focus, .quote-form textarea:focus { border-color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.05); }
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

      `}})]})},Ax="/assets/aboutus_insight_1-CUdd66lD.jpg",Ix="/assets/aboutus_insight_2-CBjzhpaM.jpg",Px="/assets/aboutus_insight_3-bz-csmtI.jpg",Ox="/assets/aboutus_insight_4-CXHT8G0_.jpg",Mx="/assets/abouthero-BYw5nXxX.png",Rx="/assets/about1-c6mokT_I.png",Lx=()=>n.jsxs("div",{className:"about-page",children:[n.jsx(ae,{title:"About Smaar Elysium | Premier Manpower & Staffing Agency in UAE",description:"Smaar Elysium is a trusted manpower supply and staffing agency based in UAE with 15+ years of expertise. We connect businesses with skilled professionals across construction, logistics, security, oil & gas, and more.",keywords:"about Smaar Elysium, manpower agency UAE, staffing company UAE, workforce solutions UAE, HR consultancy UAE, labour supply company, best manpower agency Dubai",canonical:"https://www.smaarelysium.com/about"}),n.jsx("div",{className:"container hero-wrapper",children:n.jsxs("section",{className:"home-hero",children:[n.jsxs("div",{className:"home-hero__content",children:[n.jsxs("h1",{className:"home-hero__title",children:["About Us",n.jsx("br",{}),"Who We Are"]}),n.jsx("p",{className:"home-hero__text",children:"Smaar Elysium is a premier manpower supply and staffing agency based in UAE, dedicated to connecting exceptional talent with outstanding organizations across diverse industries throughout the country."}),n.jsx("div",{className:"home-hero__actions",children:n.jsx(k,{to:"/contact",className:"hero-btn-main",children:"Get in Touch"})})]}),n.jsx("div",{className:"home-hero__image-wrapper",children:n.jsx("img",{src:Mx,alt:"Smaar Elysium Team UAE",className:"home-hero__image",style:{borderRadius:"24px"}})})]})}),n.jsx("section",{className:"journey-page-section",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"journey-split-card",children:[n.jsx("div",{className:"journey-image-container",children:n.jsx("img",{src:Rx,alt:"Smaar Elysium Journey UAE",className:"journey-full-img"})}),n.jsxs("div",{className:"journey-text-container",children:[n.jsx("h2",{className:"journey-page-heading",children:"Our Journey"}),n.jsx("p",{className:"journey-page-paragraph",children:"Smaar Elysium began with a singular vision — to build a world-class manpower supply company that truly understands the dynamic needs of businesses operating across UAE. Over the years, we have grown from a focused staffing consultancy into a comprehensive workforce solutions partner trusted across multiple industries."}),n.jsx("p",{className:"journey-page-paragraph",children:"With more than 15 years of combined expertise, our leadership team has navigated diverse market conditions and built a robust talent network that spans skilled professionals, semi-skilled workers, and executive-level leaders. We pride ourselves on blending deep local market knowledge with industry best practices — delivering staffing outcomes that move businesses forward."}),n.jsx("p",{className:"journey-page-paragraph",children:"Today, Smaar Elysium stands as one of UAE's most trusted names in manpower supply, contract staffing, HR outsourcing, and executive search — serving clients across construction, facilities management, logistics, security, and more."})]})]})})}),n.jsx("section",{className:"stats-banner-section",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"stats-banner-grid",children:[n.jsxs("div",{className:"stats-banner-item",children:[n.jsx("span",{className:"stats-num",children:"15+"}),n.jsx("span",{className:"stats-label",children:"Years of Experience"})]}),n.jsxs("div",{className:"stats-banner-item",children:[n.jsx("span",{className:"stats-num",children:"5,000+"}),n.jsx("span",{className:"stats-label",children:"Professionals Placed"})]}),n.jsxs("div",{className:"stats-banner-item",children:[n.jsx("span",{className:"stats-num",children:"200+"}),n.jsx("span",{className:"stats-label",children:"Active Clients"})]}),n.jsxs("div",{className:"stats-banner-item",children:[n.jsx("span",{className:"stats-num",children:"10+"}),n.jsx("span",{className:"stats-label",children:"Industries Served"})]})]})})}),n.jsx("section",{className:"mv-section",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"mv-wrapper",children:[n.jsx("div",{className:"mv-box mv-box-left",style:{backgroundImage:`url(${Qu})`},children:n.jsxs("div",{className:"mv-content",children:[n.jsx("h2",{className:"mv-title",children:"Our Mission"}),n.jsx("p",{className:"mv-text",children:"To be UAE's most reliable and forward-thinking manpower partner — delivering tailored workforce solutions that empower businesses to scale confidently. We are committed to connecting the right people with the right opportunities through rigorous selection, compliance excellence, and a deep understanding of every client's unique operational requirements."})]})}),n.jsx("div",{className:"mv-box mv-box-right",style:{backgroundImage:`url(${Vu})`},children:n.jsxs("div",{className:"mv-content",children:[n.jsx("h2",{className:"mv-title",children:"Our Vision"}),n.jsx("p",{className:"mv-text",children:"To emerge as UAE's most trusted end-to-end human capital solutions provider — a name synonymous with quality talent, seamless compliance, and transformative workforce strategies. We aspire to be the partner every ambitious organization turns to when building teams that drive sustainable growth."})]})})]})})}),n.jsx("section",{className:"values-section",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"section-header text-center",children:[n.jsx("span",{className:"section-label",children:"Why Choose Us"}),n.jsx("h2",{className:"section-title",children:"Our Core Values"}),n.jsx("p",{className:"section-subtitle",children:"The principles that guide every decision, every placement, and every partnership at Smaar Elysium."})]}),n.jsxs("div",{className:"values-grid",children:[n.jsxs("div",{className:"value-card",children:[n.jsx("div",{className:"value-icon",children:n.jsx(Ag,{})}),n.jsx("h3",{children:"Commitment"}),n.jsx("p",{children:"We are unwaveringly dedicated to delivering results — placing the right talent with precision, speed, and professionalism every single time."})]}),n.jsxs("div",{className:"value-card",children:[n.jsx("div",{className:"value-icon",children:n.jsx(pg,{})}),n.jsx("h3",{children:"Agility"}),n.jsx("p",{children:"We respond swiftly to the evolving demands of the market, offering flexible workforce solutions that adapt to your business rhythms."})]}),n.jsxs("div",{className:"value-card",children:[n.jsx("div",{className:"value-icon",children:n.jsx(Hu,{})}),n.jsx("h3",{children:"Partnership"}),n.jsx("p",{children:"We see ourselves as an extension of your team — investing in your success with collaborative, long-term relationships built on shared goals."})]}),n.jsxs("div",{className:"value-card",children:[n.jsx("div",{className:"value-icon",children:n.jsx(gg,{})}),n.jsx("h3",{children:"Transparency"}),n.jsx("p",{children:"Clear communication, honest assessments, and complete openness in every engagement — building the trust that underpins great partnerships."})]}),n.jsxs("div",{className:"value-card",children:[n.jsx("div",{className:"value-icon",children:n.jsx(Cg,{})}),n.jsx("h3",{children:"Compliance"}),n.jsx("p",{children:"We navigate UAEn labour laws and regulatory frameworks with expertise, ensuring every placement is fully compliant and risk-free for your organization."})]}),n.jsxs("div",{className:"value-card",children:[n.jsx("div",{className:"value-icon",children:n.jsx(vg,{})}),n.jsx("h3",{children:"People First"}),n.jsx("p",{children:"We care genuinely about the candidates we place and the clients we serve — creating positive outcomes for every person and organization we work with."})]})]})]})}),n.jsx("section",{className:"what-we-do-section",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"wwd-header",children:[n.jsx("span",{className:"section-label",children:"Our Services"}),n.jsx("h2",{className:"wwd-title",children:"Comprehensive Workforce Solutions"}),n.jsx("p",{className:"wwd-desc",children:"From blue-collar manpower supply to executive-level recruitment, we offer a full suite of workforce solutions designed for UAEn businesses across all major industries."})]}),n.jsxs("div",{className:"wwd-grid",children:[n.jsxs("div",{className:"wwd-card",children:[n.jsx("div",{className:"wwd-number",children:"01"}),n.jsx("h3",{children:"Manpower Supply"}),n.jsx("p",{children:"Skilled, semi-skilled, and unskilled workforce deployed efficiently to match your operational timelines and site requirements."})]}),n.jsxs("div",{className:"wwd-card",children:[n.jsx("div",{className:"wwd-number",children:"02"}),n.jsx("h3",{children:"Recruitment & Talent Acquisition"}),n.jsx("p",{children:"End-to-end permanent recruitment services powered by an extensive pan-UAE talent network and a rigorous multi-stage selection process."})]}),n.jsxs("div",{className:"wwd-card",children:[n.jsx("div",{className:"wwd-number",children:"03"}),n.jsx("h3",{children:"Contract Staffing"}),n.jsx("p",{children:"Flexible short-term and long-term contract staffing solutions that give you skilled professionals without the overhead of permanent hires."})]}),n.jsxs("div",{className:"wwd-card",children:[n.jsx("div",{className:"wwd-number",children:"04"}),n.jsx("h3",{children:"Executive Search"}),n.jsx("p",{children:"Confidential, high-calibre leadership hiring — identifying and securing top executive talent that drives your organizational vision forward."})]}),n.jsxs("div",{className:"wwd-card",children:[n.jsx("div",{className:"wwd-number",children:"05"}),n.jsx("h3",{children:"HR Outsourcing"}),n.jsx("p",{children:"End-to-end HR management services including payroll processing, compliance management, and employee lifecycle administration."})]}),n.jsxs("div",{className:"wwd-card",children:[n.jsx("div",{className:"wwd-number",children:"06"}),n.jsx("h3",{children:"Security Staffing"}),n.jsx("p",{children:"SIRA-licensed security personnel deployed for static guard duties, mobile patrols, access control, and event security across UAE."})]})]})]})}),n.jsxs("div",{className:"insights-section",children:[n.jsx("h2",{className:"insights-title",children:"Smaar Elysium Insights"}),n.jsxs("div",{className:"insights-grid",children:[n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:Ax,alt:"UAEn Workforce Landscape"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Understanding the UAEn Workforce Landscape"}),n.jsx("p",{children:"UAE's diversified and rapidly expanding economy creates unique manpower demands across construction, technology, hospitality, and manufacturing — and we are perfectly positioned to meet them all."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:Ix,alt:"Why Partner With a Staffing Agency"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Why Partnering With a Staffing Agency Matters"}),n.jsx("p",{children:"For businesses expanding across UAE, a trusted local staffing partner provides critical advantages: faster hiring cycles, compliance assurance, and access to a pre-vetted talent pool."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:Px,alt:"UAEn Labour Law Compliance"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Navigating UAEn Labour Law Compliance"}),n.jsx("p",{children:"UAEn employment regulations are nuanced and constantly evolving. Our compliance experts ensure every hire meets current Ministry of Labour requirements — zero risk, full peace of mind."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:Ox,alt:"Building High Performance Teams"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Building High-Performance Teams in UAE"}),n.jsx("p",{children:"A high-performing team is the true engine of business growth. Smaar Elysium's structured recruitment methodology ensures you hire for both skillset and cultural alignment — every time."})]})]})]})]}),n.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        
        @media (max-width: 1024px) { .home-hero { flex-direction: column; text-align: center; padding: 60px 50px; } .home-hero__image { max-width: 350px; margin-top: 40px; } }
        @media (max-width: 576px) { .home-hero { padding: 40px 25px; border-radius: 20px; } .home-hero__image { max-width: 100%; } }

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
        @media (max-width: 600px) { .values-grid { grid-template-columns: 1fr; } .value-card { padding: 30px 25px; } }

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
        @media (max-width: 600px) { .wwd-grid { grid-template-columns: 1fr; } .wwd-title { font-size: 1.9rem; } }

        /* ── Insights Section  ── */
        .insights-section { margin-top: 0; margin-bottom: 100px; padding: 0 5%; }
        .insights-title { text-align: center; font-size: 2.5rem; color: #555; margin-bottom: 60px; font-weight: 500; }
        .insights-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 25px; }
        .insight-card { background: #f8f9fa; border-radius: 25px; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.05); display: flex; flex-direction: column; }
        .insight-card:hover { transform: translateY(-10px); box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
        .insight-image-wrap { height: 220px; overflow: hidden; display: flex; align-items: center; justify-content: center; }
        .insight-image-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .insight-card:hover .insight-image-wrap img { transform: scale(1.08); }
        .insight-content { padding: 28px 24px; flex-grow: 1; display: flex; flex-direction: column; }
        .insight-content h3 { font-size: 1.15rem; color: #222; margin-bottom: 14px; line-height: 1.4; font-weight: 600; }
        .insight-content p { color: #777; font-size: 0.92rem; line-height: 1.6; flex-grow: 1; }

        @media (max-width: 1200px) { .insights-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .insights-grid { grid-template-columns: 1fr; } .insights-title { font-size: 2rem; } }
        @media (max-width: 480px) { .insights-section { padding: 0 4%; } .insights-title { font-size: 1.7rem; margin-bottom: 35px; } }
        `}})]}),Ux="/assets/projecthero-C7KMGnvt.png",Hx="/assets/project_construction-AG4wtKcw.png",Fx="/assets/project_facility-WPYadPn-.png",Dx="/assets/project_industrial-Bb5WKDkf.png",Wx=()=>n.jsxs("div",{className:"project-page",children:[n.jsx(ae,{title:"Manpower Projects Portfolio | Staffing Case Studies in UAE | Smaar Elysium",description:"Explore Smaar Elysium's successful manpower supply projects across UAE — from construction mega-projects in Dubai to facility management in Bengaluru and manufacturing plant staffing in Pune.",keywords:"manpower projects UAE, staffing case studies UAE, construction workforce projects, facility management staffing projects, manufacturing plant manpower, Smaar Elysium projects",canonical:"https://www.smaarelysium.com/projects"}),n.jsx("div",{className:"container hero-wrapper",children:n.jsxs("section",{className:"home-hero",children:[n.jsxs("div",{className:"home-hero__content",children:[n.jsxs("h1",{className:"home-hero__title",children:["Manpower",n.jsx("br",{}),"Projects"]}),n.jsx("p",{className:"home-hero__text",children:"Explore our successful manpower supply and staffing deployments across UAE — powering industries with the right workforce at the right time."}),n.jsx("div",{className:"home-hero__actions",children:n.jsx(k,{to:"/contact",className:"hero-btn-main",children:"Get in Touch"})})]}),n.jsx("div",{className:"home-hero__image",children:n.jsx("img",{src:Ux,alt:"Manpower Projects Team",className:"hero-workers-img",style:{width:"100%",maxWidth:"550px",height:"auto",display:"block",filter:"drop-shadow(0 20px 40px rgba(0,0,0,0.2))"}})})]})}),n.jsx("section",{className:"featured-projects-section",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"custom-projects-grid",children:[n.jsx("div",{className:"custom-project-card",children:n.jsx("div",{className:"custom-project-image",style:{backgroundImage:`url(${Hx})`},children:n.jsxs("div",{className:"custom-project-red-box",children:[n.jsx("h3",{className:"custom-project-title",children:"Dubai Global Gateway – Construction Manpower"}),n.jsx("p",{className:"custom-project-desc",children:"Supplied 350+ skilled civil workers, masons, electricians, and site supervisors for a landmark commercial high-rise project in Dubai's HITEC City corridor, completed on schedule..."}),n.jsxs(k,{to:"/contact",className:"custom-project-link",children:["Get in Touch ",n.jsx(Ts,{size:20,strokeWidth:2})]})]})})}),n.jsx("div",{className:"custom-project-card",children:n.jsx("div",{className:"custom-project-image",style:{backgroundImage:`url(${Fx})`},children:n.jsxs("div",{className:"custom-project-red-box",children:[n.jsx("h3",{className:"custom-project-title",children:"Tech Connect IT Park – Facility & Security Staffing"}),n.jsx("p",{className:"custom-project-desc",children:"Deployed a dedicated team of 120+ facility management staff, housekeeping personnel, and licensed security officers across a 3-building IT campus in Bengaluru's Electronic City..."}),n.jsxs(k,{to:"/contact",className:"custom-project-link",children:["Get in Touch ",n.jsx(Ts,{size:20,strokeWidth:2})]})]})})}),n.jsx("div",{className:"custom-project-card",children:n.jsx("div",{className:"custom-project-image",style:{backgroundImage:`url(${Dx})`},children:n.jsxs("div",{className:"custom-project-red-box",children:[n.jsx("h3",{className:"custom-project-title",children:"Pune Industrial Plant – Manufacturing Workforce"}),n.jsx("p",{className:"custom-project-desc",children:"Provided end-to-end contract staffing of 200+ semi-skilled and skilled production workers, quality control technicians, and equipment operators for a major auto-component plant in Pune's MIDC zone..."}),n.jsxs(k,{to:"/contact",className:"custom-project-link",children:["Get in Touch ",n.jsx(Ts,{size:20,strokeWidth:2})]})]})})})]})})}),n.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}})]}),Bx="/assets/OilGasSector-hero-BCxv6n_b.png",$x="/assets/oilandgas_bts-DfZB4u77.jpg",Yx="/assets/oilandgas_insight_1-Lgb04929.jpg",Vx="/assets/oilandgas_insight_2-BTufjDZ7.jpg",Qx="/assets/oilandgas_insight_3-BZwqiKLX.jpg",Gx="/assets/oilandgas_insight_4-BQDgkoZQ.jpg",Kx=()=>n.jsxs("div",{className:"oil-gas-page",children:[n.jsx(ae,{title:"Oil & Gas Sector Manpower Supply in UAE | Technical & Engineering Staff | Smaar Elysium",description:"Smaar Elysium supplies certified Oil & Gas sector professionals across UAE — drilling engineers, rig operators, HSE officers, pipeline technicians, and refinery specialists for upstream, midstream, and downstream operations.",keywords:"oil gas manpower UAE, petroleum sector staffing, drilling engineers UAE, HSE officers oil gas, refinery manpower supply, upstream downstream staffing UAE, Smaar Elysium oil gas",canonical:"https://www.smaarelysium.com/oil-and-gas"}),n.jsx("div",{className:"container hero-wrapper",children:n.jsxs("section",{className:"home-hero",children:[n.jsxs("div",{className:"home-hero__content",children:[n.jsxs("h1",{className:"home-hero__title",children:["Oil & Gas",n.jsx("br",{}),"Sector"]}),n.jsx("p",{className:"home-hero__text",children:"Empowering the UAE energy sector with specialized engineering, technical, and operational experts. We provide reliable manpower solutions for upstream, midstream, and downstream operations."}),n.jsx("div",{className:"home-hero__actions",children:n.jsx(k,{to:"/contact",className:"hero-btn-main",children:"Get in Touch"})})]}),n.jsx("div",{className:"home-hero__image",children:n.jsx("img",{src:Bx,alt:"Oil & Gas Workers",className:"hero-workers-img"})})]})}),n.jsx("div",{className:"service-content-section",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"build-team-split",children:[n.jsx("div",{className:"bts-left",children:n.jsx("img",{src:$x,alt:"Oil & Gas Technical Staff",className:"bts-workers-img"})}),n.jsxs("div",{className:"bts-right",children:[n.jsx("h3",{children:"Build Your Expert Oil & Gas Team"}),n.jsx("p",{children:"Whether you need a full crew for an offshore rig, specialized engineers for a refinery, or safety officers for a new pipeline project, we have the talent you need."}),n.jsx("p",{children:"Our rigorous vetting process ensures that every professional we provide is not only highly skilled but also deeply committed to HSE (Health, Safety, and Environment) zero-harm policies and operational excellence."}),n.jsx(k,{to:"/contact",className:"hero-btn-main",style:{background:"#fff",color:"#1f2937"},children:"Request Staff"})]})]}),n.jsxs("div",{className:"domains-container",children:[n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Upstream Extraction"}),n.jsx("p",{children:"Skilled personnel for exploration and production, including drilling engineers, rig operators, geoscientists, and offshore survival-certified crews."})]})}),n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Midstream Logistics"}),n.jsx("p",{children:"Expertise in storage and transportation with pipeline technicians, terminal operators, and logistics coordinators ensuring seamless energy distribution."})]})}),n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Downstream Refining"}),n.jsx("p",{children:"We provide chemical engineers, process operators, and maintenance technicians specialized in refinery production, petrochemicals, and facility turnarounds."})]})}),n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Shutdowns & Turnarounds"}),n.jsx("p",{children:"Rapid mobilization of large, multi-disciplinary workforces for scheduled plant maintenance, ensuring minimal downtime and strict operational safety."})]})}),n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"HSE & Compliance"}),n.jsx("p",{children:"Dedicated Safety Officers, QA/QC Inspectors, and Environmental Engineers ensuring your operations meet all local and international energy sector regulations."})]})}),n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Technical Maintenance"}),n.jsx("p",{children:"Supplying certified welders, pipefitters, electricians, and mechanical fitters experienced in maintaining complex oilfield and plant machinery."})]})})]}),n.jsx("div",{className:"quote-section",children:n.jsxs("div",{className:"quote-container",children:[n.jsx("div",{className:"quote-label",children:"Request a Quote"}),n.jsx("h2",{className:"quote-title",children:"Get a quick follow up!"}),n.jsx("p",{className:"quote-text",children:"In case you have any queries or want to hire our adept services, fill up this form, and our experts will get back to you!"}),n.jsx(k,{to:"/contact",className:"quote-btn",children:"Book Now"})]})}),n.jsxs("div",{className:"insights-section",children:[n.jsx("h2",{className:"insights-title",children:"Contract Staffing Insights"}),n.jsxs("div",{className:"insights-grid",children:[n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:Yx,alt:"Insight 1"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Brief Introduction to Contract Staffing"}),n.jsx("p",{children:"Contract Staffing is when businesses hire an agency to provide experts for a specific duration or project..."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:Vx,alt:"Insight 2"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Need of Contract Staffing"}),n.jsx("p",{children:"Maintaining flexibility while keeping up with sudden demand spikes is very important. This makes....."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:Qx,alt:"Insight 3"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Benefits of getting Contract Staffing"}),n.jsx("p",{children:"There are tons of advantages to getting Contract Staffing from us, including cost savings and agility."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:Gx,alt:"Insight 4"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"How can Contract Staffing work at Your Advantage?"}),n.jsx("p",{children:"Staying lean and agile is important for every organization. And having a strong temporary workforce..."})]})]})]})]})]})}),n.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

        .insights-section {
          margin-top: 60px;
          margin-bottom: 100px;
          padding: 0 5%;
        }
        .insights-title {
          text-align: center;
          font-size: 2.5rem;
          color: #555;
          margin-bottom: 60px;
          font-weight: 500;
        }
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }
        .insight-card {
          background: #f8f9fa;
          border-radius: 25px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
        }
        .insight-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        .insight-image-wrap {
          height: 250px;
          background: #fa3e52;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .insight-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .insight-card:hover .insight-image-wrap img {
          transform: scale(1.1);
        }
        .insight-content {
          padding: 30px 25px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .insight-content h3 {
          font-size: 1.3rem;
          color: #333;
          margin-bottom: 20px;
          line-height: 1.4;
          font-weight: 600;
          min-height: 3.5rem;
        }
        .insight-content p {
          color: #777;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 25px;
          flex-grow: 1;
        }
        .insight-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          color: #555;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          background: #fff;
        }
        .insight-btn:hover {
          border-color: #FE7622;
          color: #FE7622;
          background: #fdf2f3;
        }
        @media (max-width: 1200px) {
          .insights-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .insights-grid { grid-template-columns: 1fr; }
          .insights-title { font-size: 2rem; }
        }
      `}})]}),Xx="/assets/civilconstructionsector-hero-GYfw-IHK.png",Zx="/assets/civilconstruction_bts-DlM8SUNM.jpg",Jx="/assets/civilconstruction_insight_1-BU2jB_qz.jpg",e0="/assets/civilconstruction_insight_2-Ck7NllpW.jpg",t0="/assets/civilconstruction_insight_3-BxhkUKc1.jpg",n0="/assets/civilconstruction_insight_4-CiRB4NvM.jpg",i0=()=>n.jsxs("div",{className:"oil-gas-page",children:[n.jsx(ae,{title:"Civil Construction Manpower Supply in UAE | Site Engineers & Skilled Labour | Smaar Elysium",description:"Smaar Elysium delivers skilled civil construction manpower across UAE including site engineers, masons, steel fixers, formwork carpenters, and heavy machinery operators for infrastructure and building projects.",keywords:"civil construction manpower UAE, site engineers UAE, construction workers supply, building contractor manpower, skilled labour construction UAE, structural workers UAE, Smaar Elysium construction",canonical:"https://www.smaarelysium.com/civil-construction"}),n.jsx("div",{className:"container hero-wrapper",children:n.jsxs("section",{className:"home-hero",children:[n.jsxs("div",{className:"home-hero__content",children:[n.jsxs("h1",{className:"home-hero__title",children:["Civil Construction",n.jsx("br",{}),"Sector"]}),n.jsx("p",{className:"home-hero__text",children:"Delivering highly skilled and semi-skilled manpower for major infrastructure, commercial, residential, and industrial construction mega-projects across the UAE."}),n.jsx("div",{className:"home-hero__actions",children:n.jsx(k,{to:"/contact",className:"hero-btn-main",children:"Get in Touch"})})]}),n.jsx("div",{className:"home-hero__image",children:n.jsx("img",{src:Xx,alt:"Civil Construction Workers",className:"hero-workers-img"})})]})}),n.jsx("div",{className:"service-content-section",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"choose-best-split",children:[n.jsxs("div",{className:"cbs-left",children:[n.jsx("h2",{children:"Expert Manpower for Civil Construction"}),n.jsx("p",{children:"The UAE's rapidly expanding skyline demands construction teams built on precision, safety, and deep technical expertise. We provide qualified manpower that ensures your projects are delivered on time, within budget, and to the highest standards."}),n.jsx("p",{children:"From foundations and structural works to finishing and infrastructure, our workforce supports every stage of development."}),n.jsx("p",{children:"We supply certified civil engineers, site supervisors, NEBOSH-certified safety officers, and specialized trade labor perfectly aligned with UAE construction regulations and climatic conditions."})]}),n.jsxs("div",{className:"cbs-right",children:[n.jsxs("div",{className:"cbs-logo",children:[n.jsx("span",{className:"logo-main",children:"Smaar Elysium"}),n.jsx("span",{children:"®"}),n.jsx("span",{className:"logo-slogan",children:"CONSTRUCTION SECTOR SPECIALISTS"})]}),n.jsxs("div",{className:"cbs-text-block",children:[n.jsx("span",{className:"cbs-go-beyond",children:"BUILDING THE"}),n.jsx("span",{className:"cbs-ordinary",children:"SKYLINE"}),n.jsx("span",{className:"cbs-find",children:"UNMATCHED"}),n.jsx("span",{className:"cbs-executives",children:"WORKFORCE EXPERTISE"})]})]})]}),n.jsxs("div",{className:"build-team-split",children:[n.jsx("div",{className:"bts-left",children:n.jsx("img",{src:Zx,alt:"Civil Construction Team",className:"bts-workers-img"})}),n.jsxs("div",{className:"bts-right",children:[n.jsx("h3",{children:"Build Your Civil Construction Team"}),n.jsx("p",{children:"Whether it’s a high-rise building, road project, or industrial facility — we provide skilled manpower ready to deploy."}),n.jsx("p",{children:"Our rigorous vetting process guarantees that every mason, carpenter, steel fixer, and site engineer is safety-compliant, trade-tested, and experienced in heavy civil works."}),n.jsx(k,{to:"/contact",className:"hero-btn-main",style:{background:"#fff",color:"#1f2937"},children:"Request Staff"})]})]}),n.jsxs("div",{className:"domains-container",children:[n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Infrastructure & Earthworks"}),n.jsx("p",{children:"Specialized crews for highway construction, bridges, deep utility trenching, foundations, and heavy civil earthmoving operations."})]})}),n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"High-Rise & Commercial"}),n.jsx("p",{children:"Experienced concrete workers, formwork carpenters, and steel fixers dedicated to towers, malls, and large commercial developments."})]})}),n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Finishing & Fit-Out"}),n.jsx("p",{children:"Master painters, tile masons, block workers, and skilled decorators delivering premium interior and exterior finishing works."})]})}),n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Heavy Machinery Operators"}),n.jsx("p",{children:"Third-party certified operators for tower cranes, mobile cranes, excavators, bulldozers, and heavy transport vehicles."})]})})]}),n.jsxs("section",{className:"why-choose-us-section",children:[n.jsx("h2",{className:"section-title",children:"Why Choose Us"}),n.jsxs("div",{className:"benefits-grid",children:[n.jsxs("div",{className:"benefit-card bg-red",children:[n.jsx("h3",{children:"Rapid Mobilization"}),n.jsx("p",{children:"Fast deployment of manpower to keep your construction timeline on track."})]}),n.jsxs("div",{className:"benefit-card bg-gray",children:[n.jsx("h3",{children:"Strict Safety Standards"}),n.jsx("p",{children:"Workforce trained under UAE HSE and construction compliance regulations."})]}),n.jsxs("div",{className:"benefit-card bg-red",children:[n.jsx("h3",{children:"Experienced Professionals"}),n.jsx("p",{children:"Engineers, supervisors, and skilled labor with proven on-site experience."})]})]})]}),n.jsx("div",{className:"quote-section",children:n.jsxs("div",{className:"quote-container",children:[n.jsx("div",{className:"quote-label",children:"Request a Quote"}),n.jsx("h2",{className:"quote-title",children:"Get a quick follow up!"}),n.jsx("p",{className:"quote-text",children:"In case you have any queries or want to hire our adept services, fill up this form, and our experts will get back to you!"}),n.jsx(k,{to:"/contact",className:"quote-btn",children:"Book Now"})]})}),n.jsxs("div",{className:"insights-section",children:[n.jsx("h2",{className:"insights-title",children:"Contract Staffing Insights"}),n.jsxs("div",{className:"insights-grid",children:[n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:Jx,alt:"Insight 1"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Brief Introduction to Contract Staffing"}),n.jsx("p",{children:"Contract Staffing is when businesses hire an agency to provide experts for a specific duration or project..."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:e0,alt:"Insight 2"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Need of Contract Staffing"}),n.jsx("p",{children:"Maintaining flexibility while keeping up with sudden demand spikes is very important. This makes....."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:t0,alt:"Insight 3"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Benefits of getting Contract Staffing"}),n.jsx("p",{children:"There are tons of advantages to getting Contract Staffing from us, including cost savings and agility."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:n0,alt:"Insight 4"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"How can Contract Staffing work at Your Advantage?"}),n.jsx("p",{children:"Staying lean and agile is important for every organization. And having a strong temporary workforce..."})]})]})]})]})]})}),n.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .insights-section {
          margin-top: 60px;
          margin-bottom: 100px;
          padding: 0 5%;
        }
        .insights-title {
          text-align: center;
          font-size: 2.5rem;
          color: #555;
          margin-bottom: 60px;
          font-weight: 500;
        }
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }
        .insight-card {
          background: #f8f9fa;
          border-radius: 25px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
        }
        .insight-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        .insight-image-wrap {
          height: 250px;
          background: #fa3e52;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .insight-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .insight-card:hover .insight-image-wrap img {
          transform: scale(1.1);
        }
        .insight-content {
          padding: 30px 25px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .insight-content h3 {
          font-size: 1.3rem;
          color: #333;
          margin-bottom: 20px;
          line-height: 1.4;
          font-weight: 600;
          min-height: 3.5rem;
        }
        .insight-content p {
          color: #777;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 25px;
          flex-grow: 1;
        }
        .insight-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          color: #555;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          background: #fff;
        }
        .insight-btn:hover {
          border-color: #FE7622;
          color: #FE7622;
          background: #fdf2f3;
        }
        
        /* Request a Quote Section */
        .quote-section {
          margin: 60px 0;
        }
        .quote-container {
          background: linear-gradient(135deg, #001a4d 0%, #003d99 100%);
          border-radius: 15px;
          padding: 50px 40px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          margin: 0 5%;
          color: white;
        }
        .quote-label {
          position: absolute;
          top: -15px;
          left: 30px;
          background: #001a4d;
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .quote-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 600;
          margin-bottom: 20px;
          line-height: 1.3;
        }
        .quote-text {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          line-height: 1.6;
          margin-bottom: 0;
          flex: 1;
        }
        .quote-btn {
          background: white;
          color: #001a4d;
          padding: 14px 40px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          display: inline-block;
          white-space: nowrap;
          transition: all 0.3s ease;
          border: 2px solid white;
        }
        .quote-btn:hover {
          background: #FE7622;
          color: white;
          border-color: #FE7622;
        }
        
        @media (max-width: 1200px) {
          .insights-grid { grid-template-columns: repeat(2, 1fr); }
          .quote-container {
            padding: 40px 30px;
            gap: 30px;
          }
        }
        @media (max-width: 768px) {
          .insights-grid { grid-template-columns: 1fr; }
          .insights-title { font-size: 2rem; }
          .quote-container {
            flex-direction: column;
            text-align: center;
            padding: 35px 20px;
            gap: 20px;
          }
          .quote-title {
            margin-top: 20px;
            margin-bottom: 15px;
          }
          .quote-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}})]}),r0="/assets/facilitymanagementsector-s9JIqe-3.png",s0="/assets/facilitymanagement_bts-CWpRw6Xz.jpg",o0="/assets/facilitymanagement_insight_1-CYMqIIdN.jpg",a0="/assets/facilitymanagement_insight_2-DAu1bI_x.jpg",l0="/assets/facilitymanagement_insight_3-BPN0WbFT.jpg",c0="/assets/facilitymanagement_insight_4-DYBcRHBs.jpg",d0=()=>n.jsxs("div",{className:"oil-gas-page",children:[n.jsx(ae,{title:"Facility Management Manpower in UAE | Hard & Soft Services Staffing | Smaar Elysium",description:"Smaar Elysium provides comprehensive facility management manpower across UAE including MEP technicians, cleaning crews, security personnel, and front-of-house staff for commercial and residential properties.",keywords:"facility management manpower UAE, MEP technicians staffing, cleaning staff agency UAE, facility services staff, building maintenance workers UAE, housekeeping staff UAE, Smaar Elysium facility",canonical:"https://www.smaarelysium.com/facility-management"}),n.jsx("div",{className:"container hero-wrapper",children:n.jsxs("section",{className:"home-hero",children:[n.jsxs("div",{className:"home-hero__content",children:[n.jsxs("h1",{className:"home-hero__title",children:["Facility Management",n.jsx("br",{}),"Sector"]}),n.jsx("p",{className:"home-hero__text",children:"Delivering premium, tailored facility management manpower solutions to maximize asset lifespan and operational uptime across commercial, residential, and corporate ecosystems in the UAE."}),n.jsx("div",{className:"home-hero__actions",children:n.jsx(k,{to:"/contact",className:"hero-btn-main",children:"Get in Touch"})})]}),n.jsx("div",{className:"home-hero__image",children:n.jsx("img",{src:r0,alt:"Facility Management Staff",className:"hero-workers-img"})})]})}),n.jsx("div",{className:"service-content-section",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"choose-best-split",children:[n.jsxs("div",{className:"cbs-left",children:[n.jsx("h2",{children:"Professional Facility Management Teams"}),n.jsx("p",{children:"Maintaining the modern infrastructure of the UAE requires a proactive and highly skilled workforce. We provide the personnel needed to keep your facilities running at peak performance."}),n.jsx("p",{children:"From preventative maintenance technicians to hospitality-trained soft services staff, our workforce is designed to enhance the end-user experience and protect your physical assets."}),n.jsx("p",{children:"With an unwavering focus on sustainability, hygiene, and continuous uptime, our teams ensure your properties exceed regulatory and occupant expectations."})]}),n.jsxs("div",{className:"cbs-right",children:[n.jsxs("div",{className:"cbs-logo",children:[n.jsx("span",{className:"logo-main",children:"Smaar Elysium"}),n.jsx("span",{children:"®"}),n.jsx("span",{className:"logo-slogan",children:"FACILITY MANAGEMENT EXPERTS"})]}),n.jsxs("div",{className:"cbs-text-block",children:[n.jsx("span",{className:"cbs-go-beyond",children:"ELEVATING"}),n.jsx("span",{className:"cbs-ordinary",children:"ASSETS"}),n.jsx("span",{className:"cbs-find",children:"OPTIMIZED"}),n.jsx("span",{className:"cbs-executives",children:"PERFORMANCE"})]})]})]}),n.jsxs("div",{className:"build-team-split",children:[n.jsx("div",{className:"bts-left",children:n.jsx("img",{src:s0,alt:"Facility Management Team",className:"bts-workers-img"})}),n.jsxs("div",{className:"bts-right",children:[n.jsx("h3",{children:"Build Your Facility Management Crew"}),n.jsx("p",{children:"Whether you need a dedicated hard services engineering team or a discreet soft services crew for a luxury property, we deploy the right talent."}),n.jsx("p",{children:"Every candidate undergoes rigorous background checks and customer-service oriented training to guarantee seamless service delivery."}),n.jsx(k,{to:"/contact",className:"hero-btn-main",style:{background:"#fff",color:"#1f2937"},children:"Request Staff"})]})]}),n.jsxs("div",{className:"domains-container",children:[n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Hard Services (MEP)"}),n.jsx("p",{children:"Specialized technicians for predictive and reactive maintenance of electrical, HVAC, and plumbing systems."})]})}),n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Soft Services (Cleaning)"}),n.jsx("p",{children:"BICS-trained cleaning crews, housekeepers, and deep-cleaning specialists ensuring immaculate environments."})]})}),n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Security & Safety"}),n.jsx("p",{children:"SIRA-certified security guards, CCTV operators, and life-safety personnel protecting your people and property."})]})}),n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Front of House & Admin"}),n.jsx("p",{children:"Polished receptionists, concierge staff, and facility coordinators acting as the welcoming face of your organization."})]})})]}),n.jsxs("section",{className:"why-choose-us-section",children:[n.jsx("h2",{className:"section-title",children:"Why Choose Us"}),n.jsxs("div",{className:"benefits-grid",children:[n.jsxs("div",{className:"benefit-card bg-red",children:[n.jsx("h3",{children:"Consistent Quality"}),n.jsx("p",{children:"Personnel trained to deliver dependable facility management services around the clock."})]}),n.jsxs("div",{className:"benefit-card bg-gray",children:[n.jsx("h3",{children:"Cost-Effective Teams"}),n.jsx("p",{children:"Flexible staffing solutions that align with your budget and project scale."})]}),n.jsxs("div",{className:"benefit-card bg-red",children:[n.jsx("h3",{children:"Regulatory Compliance"}),n.jsx("p",{children:"All staff are certified to meet UAE facility management standards and safety regulations."})]})]})]}),n.jsx("div",{className:"quote-section",children:n.jsxs("div",{className:"quote-container",children:[n.jsx("div",{className:"quote-label",children:"Request a Quote"}),n.jsx("h2",{className:"quote-title",children:"Get a quick follow up!"}),n.jsx("p",{className:"quote-text",children:"In case you have any queries or want to hire our adept services, fill up this form, and our experts will get back to you!"}),n.jsx(k,{to:"/contact",className:"quote-btn",children:"Book Now"})]})}),n.jsxs("div",{className:"insights-section",children:[n.jsx("h2",{className:"insights-title",children:"Contract Staffing Insights"}),n.jsxs("div",{className:"insights-grid",children:[n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:o0,alt:"Insight 1"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Brief Introduction to Contract Staffing"}),n.jsx("p",{children:"Contract Staffing is when businesses hire an agency to provide experts for a specific duration or project..."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:a0,alt:"Insight 2"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Need of Contract Staffing"}),n.jsx("p",{children:"Maintaining flexibility while keeping up with sudden demand spikes is very important. This makes....."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:l0,alt:"Insight 3"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Benefits of getting Contract Staffing"}),n.jsx("p",{children:"There are tons of advantages to getting Contract Staffing from us, including cost savings and agility."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:c0,alt:"Insight 4"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"How can Contract Staffing work at Your Advantage?"}),n.jsx("p",{children:"Staying lean and agile is important for every organization. And having a strong temporary workforce..."})]})]})]})]})]})}),n.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .insights-section {
          margin-top: 60px;
          margin-bottom: 100px;
          padding: 0 5%;
        }
        .insights-title {
          text-align: center;
          font-size: 2.5rem;
          color: #555;
          margin-bottom: 60px;
          font-weight: 500;
        }
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }
        .insight-card {
          background: #f8f9fa;
          border-radius: 25px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
        }
        .insight-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        .insight-image-wrap {
          height: 250px;
          background: #fa3e52;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .insight-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .insight-card:hover .insight-image-wrap img {
          transform: scale(1.1);
        }
        .insight-content {
          padding: 30px 25px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .insight-content h3 {
          font-size: 1.3rem;
          color: #333;
          margin-bottom: 20px;
          line-height: 1.4;
          font-weight: 600;
          min-height: 3.5rem;
        }
        .insight-content p {
          color: #777;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 25px;
          flex-grow: 1;
        }
        .insight-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          color: #555;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          background: #fff;
        }
        .insight-btn:hover {
          border-color: #FE7622;
          color: #FE7622;
          background: #fdf2f3;
        }
        
        /* Request a Quote Section */
        .quote-section {
          margin: 60px 0;
        }
        .quote-container {
          background: linear-gradient(135deg, #001a4d 0%, #003d99 100%);
          border-radius: 15px;
          padding: 50px 40px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          margin: 0 5%;
          color: white;
        }
        .quote-label {
          position: absolute;
          top: -15px;
          left: 30px;
          background: #001a4d;
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .quote-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 600;
          margin-bottom: 20px;
          line-height: 1.3;
        }
        .quote-text {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          line-height: 1.6;
          margin-bottom: 0;
          flex: 1;
        }
        .quote-btn {
          background: white;
          color: #001a4d;
          padding: 14px 40px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          display: inline-block;
          white-space: nowrap;
          transition: all 0.3s ease;
          border: 2px solid white;
        }
        .quote-btn:hover {
          background: #FE7622;
          color: white;
          border-color: #FE7622;
        }
        
        @media (max-width: 1200px) {
          .insights-grid { grid-template-columns: repeat(2, 1fr); }
          .quote-container {
            padding: 40px 30px;
            gap: 30px;
          }
        }
        @media (max-width: 768px) {
          .insights-grid { grid-template-columns: 1fr; }
          .insights-title { font-size: 2rem; }
          .quote-container {
            flex-direction: column;
            text-align: center;
            padding: 35px 20px;
            gap: 20px;
          }
          .quote-title {
            margin-top: 20px;
            margin-bottom: 15px;
          }
          .quote-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}})]}),u0="/assets/logistics-hero-DsjfhNsG.png",p0="/assets/logistics_bts-4KjSKDqG.jpg",m0="/assets/logistics_insight_1-CR1hsCrJ.jpg",h0="/assets/logistics_insight_2-Clj0678V.jpg",f0="/assets/logistics_insight_3-DTI-HbD9.jpg",g0="/assets/logistics_insight_4-zoketk9v.jpg",x0=()=>n.jsxs("div",{className:"oil-gas-page",children:[n.jsx(ae,{title:"Logistics & Supply Chain Manpower in UAE | Warehouse & Transport Staffing | Smaar Elysium",description:"Smaar Elysium supplies skilled logistics professionals across UAE including forklift operators, warehouse staff, heavy vehicle drivers, freight forwarders, and inventory clerks for distribution and supply chain operations.",keywords:"logistics manpower UAE, warehouse staffing UAE, supply chain workforce, forklift operators UAE, heavy vehicle drivers UAE, freight forwarding staff, Smaar Elysium logistics",canonical:"https://www.smaarelysium.com/logistics"}),n.jsx("div",{className:"container hero-wrapper",children:n.jsxs("section",{className:"home-hero",children:[n.jsxs("div",{className:"home-hero__content",children:[n.jsxs("h1",{className:"home-hero__title",children:["Logistics",n.jsx("br",{}),"Sector"]}),n.jsx("p",{className:"home-hero__text",children:"Agile and scalable logistics manpower solutions driving efficiency across transport, warehousing, and global supply chain operations in the UAE."}),n.jsx("div",{className:"home-hero__actions",children:n.jsx(k,{to:"/contact",className:"hero-btn-main",children:"Get in Touch"})})]}),n.jsx("div",{className:"home-hero__image",children:n.jsx("img",{src:u0,alt:"Logistics and Supply Chain",className:"hero-workers-img"})})]})}),n.jsx("div",{className:"service-content-section",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"choose-best-split",children:[n.jsxs("div",{className:"cbs-left",children:[n.jsx("h2",{children:"Expert Supply Chain Manpower"}),n.jsx("p",{children:"As the UAE solidifies its position as a global logistics hub, the demand for rapid, accurate, and scalable workforce solutions is higher than ever."}),n.jsx("p",{children:"From meticulous inventory clerks and skilled forklift operators to experienced heavy vehicle drivers (License 3, 4, 6, 8), our talent pool keeps goods moving."}),n.jsx("p",{children:"We supply highly trained logistics personnel capable of operating 24/7, compliant with internal HSE policies and international trade regulations."})]}),n.jsxs("div",{className:"cbs-right",children:[n.jsxs("div",{className:"cbs-logo",children:[n.jsx("span",{className:"logo-main",children:"Smaar Elysium"}),n.jsx("span",{children:"®"}),n.jsx("span",{className:"logo-slogan",children:"LOGISTICS SECTOR SPECIALISTS"})]}),n.jsxs("div",{className:"cbs-text-block",children:[n.jsx("span",{className:"cbs-go-beyond",children:"DRIVING"}),n.jsx("span",{className:"cbs-ordinary",children:"GLOBAL"}),n.jsx("span",{className:"cbs-find",children:"SUPPLY"}),n.jsx("span",{className:"cbs-executives",children:"FORWARD"})]})]})]}),n.jsxs("div",{className:"build-team-split",children:[n.jsx("div",{className:"bts-left",children:n.jsx("img",{src:p0,alt:"Logistics Staff",className:"bts-workers-img"})}),n.jsxs("div",{className:"bts-right",children:[n.jsx("h3",{children:"Build Your Logistics Operations Crew"}),n.jsx("p",{children:"Whether staffing a 100,000 sq ft distribution center, or assembling a fleet of delivery drivers for last-mile logistics, we possess the scale to support you."}),n.jsx("p",{children:"Rigorous testing ensures every team member understands modern WMS (Warehouse Management Systems) and strict cargo handling safety protocols."}),n.jsx(k,{to:"/contact",className:"hero-btn-main",style:{background:"#fff",color:"#1f2937"},children:"Request Staff"})]})]}),n.jsxs("div",{className:"domains-container",children:[n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Fleet & Transportation"}),n.jsx("p",{children:"Specialized operators for heavy duty trucks, light commercial vehicles, and last-mile courier delivery fleets."})]})}),n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Warehouse Operations"}),n.jsx("p",{children:"Certified VNA/Forklift operators, order pickers, packers, and cargo loaders for high-volume distribution centers."})]})}),n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Inventory & Planning"}),n.jsx("p",{children:"Data-driven inventory clerks, stock controllers, and supply chain analysts to optimize stock flow and minimize shrinkage."})]})}),n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Freight & Customs"}),n.jsx("p",{children:"Experienced documentation clerks, freight forwarders, and customs clearance specialists navigating complex international trade requirements."})]})})]}),n.jsxs("section",{className:"why-choose-us-section",children:[n.jsx("h2",{className:"section-title",children:"Why Choose Us"}),n.jsxs("div",{className:"benefits-grid",children:[n.jsxs("div",{className:"benefit-card bg-red",children:[n.jsx("h3",{children:"Fast Mobilization"}),n.jsx("p",{children:"Quick deployment of logistics teams to keep your operations moving."})]}),n.jsxs("div",{className:"benefit-card bg-gray",children:[n.jsx("h3",{children:"Regulated Training"}),n.jsx("p",{children:"Staff trained in transport safety, handling, and UAE procedures."})]}),n.jsxs("div",{className:"benefit-card bg-red",children:[n.jsx("h3",{children:"Scalable Solutions"}),n.jsx("p",{children:"Workforce expandable based on your supply chain demands."})]})]})]}),n.jsx("div",{className:"quote-section",children:n.jsxs("div",{className:"quote-container",children:[n.jsx("div",{className:"quote-label",children:"Request a Quote"}),n.jsx("h2",{className:"quote-title",children:"Get a quick follow up!"}),n.jsx("p",{className:"quote-text",children:"In case you have any queries or want to hire our adept services, fill up this form, and our experts will get back to you!"}),n.jsx(k,{to:"/contact",className:"quote-btn",children:"Book Now"})]})}),n.jsxs("div",{className:"insights-section",children:[n.jsx("h2",{className:"insights-title",children:"Contract Staffing Insights"}),n.jsxs("div",{className:"insights-grid",children:[n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:m0,alt:"Insight 1"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Brief Introduction to Contract Staffing"}),n.jsx("p",{children:"Contract Staffing is when businesses hire an agency to provide experts for a specific duration or project..."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:h0,alt:"Insight 2"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Need of Contract Staffing"}),n.jsx("p",{children:"Maintaining flexibility while keeping up with sudden demand spikes is very important. This makes....."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:f0,alt:"Insight 3"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Benefits of getting Contract Staffing"}),n.jsx("p",{children:"There are tons of advantages to getting Contract Staffing from us, including cost savings and agility."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:g0,alt:"Insight 4"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"How can Contract Staffing work at Your Advantage?"}),n.jsx("p",{children:"Staying lean and agile is important for every organization. And having a strong temporary workforce..."})]})]})]})]})]})}),n.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .insights-section {
          margin-top: 60px;
          margin-bottom: 100px;
          padding: 0 5%;
        }
        .insights-title {
          text-align: center;
          font-size: 2.5rem;
          color: #555;
          margin-bottom: 60px;
          font-weight: 500;
        }
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }
        .insight-card {
          background: #f8f9fa;
          border-radius: 25px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
        }
        .insight-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        .insight-image-wrap {
          height: 250px;
          background: #fa3e52;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .insight-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .insight-card:hover .insight-image-wrap img {
          transform: scale(1.1);
        }
        .insight-content {
          padding: 30px 25px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .insight-content h3 {
          font-size: 1.3rem;
          color: #333;
          margin-bottom: 20px;
          line-height: 1.4;
          font-weight: 600;
          min-height: 3.5rem;
        }
        .insight-content p {
          color: #777;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 25px;
          flex-grow: 1;
        }
        .insight-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          color: #555;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          background: #fff;
        }
        .insight-btn:hover {
          border-color: #FE7622;
          color: #FE7622;
          background: #fdf2f3;
        }
        
        /* Request a Quote Section */
        .quote-section {
          margin: 60px 0;
        }
        .quote-container {
          background: linear-gradient(135deg, #001a4d 0%, #003d99 100%);
          border-radius: 15px;
          padding: 50px 40px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          margin: 0 5%;
          color: white;
        }
        .quote-label {
          position: absolute;
          top: -15px;
          left: 30px;
          background: #001a4d;
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .quote-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 600;
          margin-bottom: 20px;
          line-height: 1.3;
        }
        .quote-text {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          line-height: 1.6;
          margin-bottom: 0;
          flex: 1;
        }
        .quote-btn {
          background: white;
          color: #001a4d;
          padding: 14px 40px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          display: inline-block;
          white-space: nowrap;
          transition: all 0.3s ease;
          border: 2px solid white;
        }
        .quote-btn:hover {
          background: #FE7622;
          color: white;
          border-color: #FE7622;
        }
        
        @media (max-width: 1200px) {
          .insights-grid { grid-template-columns: repeat(2, 1fr); }
          .quote-container {
            padding: 40px 30px;
            gap: 30px;
          }
        }
        @media (max-width: 768px) {
          .insights-grid { grid-template-columns: 1fr; }
          .insights-title { font-size: 2rem; }
          .quote-container {
            flex-direction: column;
            text-align: center;
            padding: 35px 20px;
            gap: 20px;
          }
          .quote-title {
            margin-top: 20px;
            margin-bottom: 15px;
          }
          .quote-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}})]}),y0="/assets/facilitymanagementsector-hero-CBhx-sdx.png",v0="/assets/manufacture_bts-cODOEe0S.jpg",w0="/assets/manufacture_insight_1-8lD5TMm4.jpg",b0="/assets/manufacture_insight_2-B4Bm5ONk.jpg",j0="/assets/manufacture_insight_3-fH_RscJx.jpg",k0="/assets/manufacture_insight_4-ear5sqTx.jpg",N0=()=>n.jsxs("div",{className:"oil-gas-page",children:[n.jsx(ae,{title:"Manufacturing Sector Manpower in UAE | Industrial & Production Workers | Smaar Elysium",description:"Smaar Elysium delivers certified manufacturing manpower across UAE including CNC operators, welders, quality inspectors, assembly line workers, and industrial maintenance technicians for factories and production plants.",keywords:"manufacturing manpower UAE, industrial workers supply, CNC operators UAE, welders staffing UAE, production workers agency, quality control technicians, Smaar Elysium manufacturing",canonical:"https://www.smaarelysium.com/manufacturing"}),n.jsx("div",{className:"container hero-wrapper",children:n.jsxs("section",{className:"home-hero",children:[n.jsxs("div",{className:"home-hero__content",children:[n.jsxs("h1",{className:"home-hero__title",children:["Manufacturing",n.jsx("br",{}),"Sector"]}),n.jsx("p",{className:"home-hero__text",children:"Supplying high-performance, skilled manpower for heavy manufacturing, assembly lines, and precision industrial production facilities across the UAE."}),n.jsx("div",{className:"home-hero__actions",children:n.jsx(k,{to:"/contact",className:"hero-btn-main",children:"Get in Touch"})})]}),n.jsx("div",{className:"home-hero__image",children:n.jsx("img",{src:y0,alt:"Manufacturing Workers",className:"hero-workers-img"})})]})}),n.jsx("div",{className:"service-content-section",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"choose-best-split",children:[n.jsxs("div",{className:"cbs-left",children:[n.jsx("h2",{children:"Manufacturing Manpower Solutions"}),n.jsx("p",{children:"As industrial zones and smart manufacturing hubs expand across the UAE, having a reliable, technically proficient workforce is the key to scalability."}),n.jsx("p",{children:"We provide certified CNC operators, industrial electricians, QA/QC inspectors, and seasoned assembly line supervisors to keep your production operating around the clock."}),n.jsx("p",{children:"Our personnel are meticulously trained to adhere strictly to modern manufacturing methodologies, lean principles, and uncompromising factory safety standards."})]}),n.jsxs("div",{className:"cbs-right",children:[n.jsxs("div",{className:"cbs-logo",children:[n.jsx("span",{className:"logo-main",children:"Smaar Elysium"}),n.jsx("span",{children:"®"}),n.jsx("span",{className:"logo-slogan",children:"MANUFACTURING INDUSTRY EXPERTS"})]}),n.jsxs("div",{className:"cbs-text-block",children:[n.jsx("span",{className:"cbs-go-beyond",children:"ACCELERATING"}),n.jsx("span",{className:"cbs-ordinary",children:"PRODUCTION"}),n.jsx("span",{className:"cbs-find",children:"WITH"}),n.jsx("span",{className:"cbs-executives",children:"EXPERT LABOR"})]})]})]}),n.jsxs("div",{className:"build-team-split",children:[n.jsx("div",{className:"bts-left",children:n.jsx("img",{src:v0,alt:"Manufacturing Team",className:"bts-workers-img"})}),n.jsxs("div",{className:"bts-right",children:[n.jsx("h3",{children:"Build Your Manufacturing Team"}),n.jsx("p",{children:"Whether launching a new production shift or supplementing your core machining team, we provide precisely matched industrial talent."}),n.jsx("p",{children:"All recruits undergo strict technical vetting and practical skills assessments to ensure immediate on-site productivity and safety awareness."}),n.jsx(k,{to:"/contact",className:"hero-btn-main",style:{background:"#fff",color:"#1f2937"},children:"Request Staff"})]})]}),n.jsxs("div",{className:"domains-container",children:[n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Assembly & Production"}),n.jsx("p",{children:"High-volume assembly line workers, packaging staff, and production supervisors ensuring output targets are consistently met."})]})}),n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Machining & Fabrication"}),n.jsx("p",{children:"Certified CNC programmers, welders (TIG/MIG), metal fabricators, and tool/die makers for precision engineering tasks."})]})}),n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Quality Assurance (QC)"}),n.jsx("p",{children:"Detail-oriented inspectors and metrology technicians ensuring zero defects and strict adherence to ISO manufacturing standards."})]})}),n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Industrial Maintenance"}),n.jsx("p",{children:"Preventative and reactive maintenance crews, including millwrights and heavy equipment mechanics, maximizing plant uptime."})]})})]}),n.jsxs("section",{className:"why-choose-us-section",children:[n.jsx("h2",{className:"section-title",children:"Why Choose Us"}),n.jsxs("div",{className:"benefits-grid",children:[n.jsxs("div",{className:"benefit-card bg-red",children:[n.jsx("h3",{children:"Industry Experience"}),n.jsx("p",{children:"Teams familiar with manufacturing processes and equipment."})]}),n.jsxs("div",{className:"benefit-card bg-gray",children:[n.jsx("h3",{children:"Safety First"}),n.jsx("p",{children:"Workforce trained on factory safety protocols and PPE use."})]}),n.jsxs("div",{className:"benefit-card bg-red",children:[n.jsx("h3",{children:"Flexible Staffing"}),n.jsx("p",{children:"Scale up or down according to production demands."})]})]})]}),n.jsx("div",{className:"quote-section",children:n.jsxs("div",{className:"quote-container",children:[n.jsx("div",{className:"quote-label",children:"Request a Quote"}),n.jsx("h2",{className:"quote-title",children:"Get a quick follow up!"}),n.jsx("p",{className:"quote-text",children:"In case you have any queries or want to hire our adept services, fill up this form, and our experts will get back to you!"}),n.jsx(k,{to:"/contact",className:"quote-btn",children:"Book Now"})]})}),n.jsxs("div",{className:"insights-section",children:[n.jsx("h2",{className:"insights-title",children:"Contract Staffing Insights"}),n.jsxs("div",{className:"insights-grid",children:[n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:w0,alt:"Insight 1"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Brief Introduction to Contract Staffing"}),n.jsx("p",{children:"Contract Staffing is when businesses hire an agency to provide experts for a specific duration or project..."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:b0,alt:"Insight 2"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Need of Contract Staffing"}),n.jsx("p",{children:"Maintaining flexibility while keeping up with sudden demand spikes is very important. This makes....."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:j0,alt:"Insight 3"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Benefits of getting Contract Staffing"}),n.jsx("p",{children:"There are tons of advantages to getting Contract Staffing from us, including cost savings and agility."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:k0,alt:"Insight 4"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"How can Contract Staffing work at Your Advantage?"}),n.jsx("p",{children:" Staying lean and agile is important for every organization. And having a strong temporary workforce..."})]})]})]})]})]})}),n.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .insights-section {
          margin-top: 60px;
          margin-bottom: 100px;
          padding: 0 5%;
        }
        .insights-title {
          text-align: center;
          font-size: 2.5rem;
          color: #555;
          margin-bottom: 60px;
          font-weight: 500;
        }
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }
        .insight-card {
          background: #f8f9fa;
          border-radius: 25px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
        }
        .insight-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        .insight-image-wrap {
          height: 250px;
          background: #fa3e52;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .insight-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .insight-card:hover .insight-image-wrap img {
          transform: scale(1.1);
        }
        .insight-content {
          padding: 30px 25px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .insight-content h3 {
          font-size: 1.3rem;
          color: #333;
          margin-bottom: 20px;
          line-height: 1.4;
          font-weight: 600;
          min-height: 3.5rem;
        }
        .insight-content p {
          color: #777;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 25px;
          flex-grow: 1;
        }
        .insight-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          color: #555;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          background: #fff;
        }
        .insight-btn:hover {
          border-color: #FE7622;
          color: #FE7622;
          background: #fdf2f3;
        }

        /* Request a Quote Section */
        .quote-section {
          margin: 60px 0;
        }
        .quote-container {
          background: linear-gradient(135deg, #001a4d 0%, #003d99 100%);
          border-radius: 15px;
          padding: 50px 40px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          margin: 0 5%;
          color: white;
        }
        .quote-label {
          position: absolute;
          top: -15px;
          left: 30px;
          background: #001a4d;
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .quote-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 600;
          margin-bottom: 20px;
          line-height: 1.3;
        }
        .quote-text {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          line-height: 1.6;
          margin-bottom: 0;
          flex: 1;
        }
        .quote-btn {
          background: white;
          color: #001a4d;
          padding: 14px 40px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          display: inline-block;
          white-space: nowrap;
          transition: all 0.3s ease;
          border: 2px solid white;
        }
        .quote-btn:hover {
          background: #FE7622;
          color: white;
          border-color: #FE7622;
        }

        @media (max-width: 1200px) {
          .insights-grid { grid-template-columns: repeat(2, 1fr); }
          .quote-container {
            padding: 40px 30px;
            gap: 30px;
          }
        }
        @media (max-width: 768px) {
          .insights-grid { grid-template-columns: 1fr; }
          .insights-title { font-size: 2rem; }
          .quote-container {
            flex-direction: column;
            text-align: center;
            padding: 35px 20px;
            gap: 20px;
          }
          .quote-title {
            margin-top: 20px;
            margin-bottom: 15px;
          }
          .quote-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}})]}),S0="/assets/plumbing-hero-ChKLIFJq.png",E0="/assets/mep_bts-DAjUdqh5.jpg",_0="/assets/mep_insight_1-CSQ-DIPI.jpg",z0="/assets/mep_insight_2-Deh9buFK.jpg",C0="/assets/mep_insight_3-DNP49qHa.jpg",T0="/assets/mep_insight_4-DOfcxPN4.jpg",q0=()=>n.jsxs("div",{className:"oil-gas-page",children:[n.jsx(ae,{title:"MEP Manpower Supply in UAE | Mechanical Electrical Plumbing Technicians | Smaar Elysium",description:"Smaar Elysium provides certified MEP technicians across UAE — HVAC engineers, industrial electricians, plumbers, pipefitters, and fire & life safety specialists for installation, commissioning, and maintenance projects.",keywords:"MEP manpower UAE, HVAC technicians UAE, electricians staffing UAE, plumbers supply UAE, mechanical engineers UAE, fire safety technicians, MEP workers agency, Smaar Elysium MEP",canonical:"https://www.smaarelysium.com/mep"}),n.jsx("div",{className:"container hero-wrapper",children:n.jsxs("section",{className:"home-hero",children:[n.jsxs("div",{className:"home-hero__content",children:[n.jsxs("h1",{className:"home-hero__title",children:["MEP (Mechanical, Electrical & Plumbing)",n.jsx("br",{}),"Sector"]}),n.jsx("p",{className:"home-hero__text",children:"Providing specialized Mechanical, Electrical, and Plumbing manpower for high-stakes installations, maintenance, and commissioning across the UAE."}),n.jsx("div",{className:"home-hero__actions",children:n.jsx(k,{to:"/contact",className:"hero-btn-main",children:"Get in Touch"})})]}),n.jsx("div",{className:"home-hero__image",children:n.jsx("img",{src:S0,alt:"MEP Technicians",className:"hero-workers-img"})})]})}),n.jsx("div",{className:"service-content-section",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"choose-best-split",children:[n.jsxs("div",{className:"cbs-left",children:[n.jsx("h2",{children:"Expert MEP Workforce Deployment"}),n.jsx("p",{children:"The backbone of any modern building is its MEP infrastructure. We provide the certified talent required to install, test, and maintain these complex systems."}),n.jsx("p",{children:"From massive district cooling plants and high-voltage power distribution to intricate fire-suppression logic, our personnel bring verifiable technical expertise."}),n.jsx("p",{children:"Our workforce is accustomed to coordinating with civil teams on fast-paced, large-scale commercial, residential, and industrial mega-projects."})]}),n.jsxs("div",{className:"cbs-right",children:[n.jsxs("div",{className:"cbs-logo",children:[n.jsx("span",{className:"logo-main",children:"Smaar Elysium"}),n.jsx("span",{children:"®"}),n.jsx("span",{className:"logo-slogan",children:"MEP SPECIALISTS"})]}),n.jsxs("div",{className:"cbs-text-block",children:[n.jsx("span",{className:"cbs-go-beyond",children:"ENGINEERING"}),n.jsx("span",{className:"cbs-ordinary",children:"EXCELLENCE"}),n.jsx("span",{className:"cbs-find",children:"CERTIFIED"}),n.jsx("span",{className:"cbs-executives",children:"MEP TALENT"})]})]})]}),n.jsxs("div",{className:"build-team-split",children:[n.jsx("div",{className:"bts-left",children:n.jsx("img",{src:E0,alt:"MEP Team",className:"bts-workers-img"})}),n.jsxs("div",{className:"bts-right",children:[n.jsx("h3",{children:"Build Your Technical MEP Team"}),n.jsx("p",{children:"Whether you need a specialized commissioning crew or hundreds of electricians and pipefitters for an ongoing build, we can supply them."}),n.jsx("p",{children:"Every member is trade-tested to comply with DEWA, ADDC, SEWA, and Civil Defense standards, ensuring your installations pass inspection the first time."}),n.jsx(k,{to:"/contact",className:"hero-btn-main",style:{background:"#fff",color:"#1f2937"},children:"Request Staff"})]})]}),n.jsxs("div",{className:"domains-container",children:[n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Mechanical & HVAC"}),n.jsx("p",{children:"Chiller technicians, duct fitters, and mechanical engineers specialized in climate control, ventilation, and district cooling systems."})]})}),n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Electrical Engineering"}),n.jsx("p",{children:"Industrial electricians, cable jointers, and panel builders for low current (ELV), low voltage (LV), and high voltage (HV) networks."})]})}),n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Plumbing & Piping"}),n.jsx("p",{children:"Certified plumbers and pipefitters executing complex water supply, drainage, and industrial piping networks."})]})}),n.jsx("div",{className:"domain-box",children:n.jsxs("div",{className:"domain-content",children:[n.jsx("h3",{children:"Fire & Life Safety"}),n.jsx("p",{children:"Civil Defense-approved specialists for the installation and commissioning of fire alarms, sprinklers, and emergency suppression systems."})]})})]}),n.jsxs("section",{className:"why-choose-us-section",children:[n.jsx("h2",{className:"section-title",children:"Why Choose Us"}),n.jsxs("div",{className:"benefits-grid",children:[n.jsxs("div",{className:"benefit-card bg-red",children:[n.jsx("h3",{children:"Technical Expertise"}),n.jsx("p",{children:"Workforce with hands-on experience in MEP installations and maintenance."})]}),n.jsxs("div",{className:"benefit-card bg-gray",children:[n.jsx("h3",{children:"Safety Compliance"}),n.jsx("p",{children:"All staff trained in UAE MEP safety and best practices."})]}),n.jsxs("div",{className:"benefit-card bg-red",children:[n.jsx("h3",{children:"Project Flexibility"}),n.jsx("p",{children:"Teams can be scaled from small contracts to large complex projects."})]})]})]}),n.jsx("div",{className:"quote-section",children:n.jsxs("div",{className:"quote-container",children:[n.jsx("div",{className:"quote-label",children:"Request a Quote"}),n.jsx("h2",{className:"quote-title",children:"Get a quick follow up!"}),n.jsx("p",{className:"quote-text",children:"In case you have any queries or want to hire our adept services, fill up this form, and our experts will get back to you!"}),n.jsx(k,{to:"/contact",className:"quote-btn",children:"Book Now"})]})}),n.jsxs("div",{className:"insights-section",children:[n.jsx("h2",{className:"insights-title",children:"Contract Staffing Insights"}),n.jsxs("div",{className:"insights-grid",children:[n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:_0,alt:"Insight 1"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Brief Introduction to Contract Staffing"}),n.jsx("p",{children:"Contract Staffing is when businesses hire an agency to provide experts for a specific duration or project..."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:z0,alt:"Insight 2"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Need of Contract Staffing"}),n.jsx("p",{children:"Maintaining flexibility while keeping up with sudden demand spikes is very important. This makes....."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:C0,alt:"Insight 3"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"Benefits of getting Contract Staffing"}),n.jsx("p",{children:"There are tons of advantages to getting Contract Staffing from us, including cost savings and agility."})]})]}),n.jsxs("div",{className:"insight-card",children:[n.jsx("div",{className:"insight-image-wrap",children:n.jsx("img",{src:T0,alt:"Insight 4"})}),n.jsxs("div",{className:"insight-content",children:[n.jsx("h3",{children:"How can Contract Staffing work at Your Advantage?"}),n.jsx("p",{children:"Staying lean and agile is important for every organization. And having a strong temporary workforce..."})]})]})]})]})]})}),n.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .insights-section {
          margin-top: 60px;
          margin-bottom: 100px;
          padding: 0 5%;
        }
        .insights-title {
          text-align: center;
          font-size: 2.5rem;
          color: #555;
          margin-bottom: 60px;
          font-weight: 500;
        }
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }
        .insight-card {
          background: #f8f9fa;
          border-radius: 25px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
        }
        .insight-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        .insight-image-wrap {
          height: 250px;
          background: #fa3e52;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .insight-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .insight-card:hover .insight-image-wrap img {
          transform: scale(1.1);
        }
        .insight-content {
          padding: 30px 25px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .insight-content h3 {
          font-size: 1.3rem;
          color: #333;
          margin-bottom: 20px;
          line-height: 1.4;
          font-weight: 600;
          min-height: 3.5rem;
        }
        .insight-content p {
          color: #777;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 25px;
          flex-grow: 1;
        }
        .insight-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          color: #555;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          background: #fff;
        }
        .insight-btn:hover {
          border-color: #FE7622;
          color: #FE7622;
          background: #fdf2f3;
        }
        
        /* Request a Quote Section */
        .quote-section {
          margin: 60px 0;
        }
        .quote-container {
          background: linear-gradient(135deg, #001a4d 0%, #003d99 100%);
          border-radius: 15px;
          padding: 50px 40px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          margin: 0 5%;
          color: white;
        }
        .quote-label {
          position: absolute;
          top: -15px;
          left: 30px;
          background: #001a4d;
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .quote-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 600;
          margin-bottom: 20px;
          line-height: 1.3;
        }
        .quote-text {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          line-height: 1.6;
          margin-bottom: 0;
          flex: 1;
        }
        .quote-btn {
          background: white;
          color: #001a4d;
          padding: 14px 40px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          display: inline-block;
          white-space: nowrap;
          transition: all 0.3s ease;
          border: 2px solid white;
        }
        .quote-btn:hover {
          background: #FE7622;
          color: white;
          border-color: #FE7622;
        }
        
        @media (max-width: 1200px) {
          .insights-grid { grid-template-columns: repeat(2, 1fr); }
          .quote-container {
            padding: 40px 30px;
            gap: 30px;
          }
        }
        @media (max-width: 768px) {
          .insights-grid { grid-template-columns: 1fr; }
          .insights-title { font-size: 2rem; }
          .quote-container {
            flex-direction: column;
            text-align: center;
            padding: 35px 20px;
            gap: 20px;
          }
          .quote-title {
            margin-top: 20px;
            margin-bottom: 15px;
          }
          .quote-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}})]}),As=()=>n.jsxs("div",{style:{padding:"100px 0",textAlign:"center"},children:[n.jsx("h1",{children:"Manpower Services"}),n.jsx("p",{children:"Comprehensive staffing solutions for your business."})]}),ac=()=>n.jsxs("div",{style:{padding:"100px 0",textAlign:"center"},children:[n.jsx("h1",{children:"Sectors We Serve"}),n.jsx("p",{children:"Industry-specific expertise across the UAE."})]});function A0(){return n.jsxs(sg,{children:[n.jsx(cg,{}),n.jsx(Zf,{children:n.jsxs(H,{path:"/",element:n.jsx(Lg,{}),children:[n.jsx(H,{index:!0,element:n.jsx(oc,{})}),n.jsx(H,{path:"services",element:n.jsx(As,{})}),n.jsx(H,{path:"sectors",element:n.jsx(ac,{})}),n.jsx(H,{path:"clients",element:n.jsx(oc,{})}),n.jsx(H,{path:"insights",element:n.jsx(As,{})}),n.jsx(H,{path:"book-manpower",element:n.jsx(Yg,{})}),n.jsx(H,{path:"services/manpower-supply",element:n.jsx(tx,{})}),n.jsx(H,{path:"services/:id",element:n.jsx(As,{})}),n.jsx(H,{path:"sectors/:id",element:n.jsx(ac,{})}),n.jsx(H,{path:"/recruitment",element:n.jsx(ex,{})}),n.jsx(H,{path:"/contract-staffing",element:n.jsx(ax,{})}),n.jsx(H,{path:"/executive-search",element:n.jsx(hx,{})}),n.jsx(H,{path:"/hr-outsourcing",element:n.jsx(wx,{})}),n.jsx(H,{path:"/security-solutions",element:n.jsx(_x,{})}),n.jsx(H,{path:"/contact",element:n.jsx(qx,{})}),n.jsx(H,{path:"/about",element:n.jsx(Lx,{})}),n.jsx(H,{path:"/projects",element:n.jsx(Wx,{})}),n.jsx(H,{path:"/oil-gas",element:n.jsx(Kx,{})}),n.jsx(H,{path:"/civil-construction",element:n.jsx(i0,{})}),n.jsx(H,{path:"/facility-management",element:n.jsx(d0,{})}),n.jsx(H,{path:"/logistics",element:n.jsx(x0,{})}),n.jsx(H,{path:"/manufacture",element:n.jsx(N0,{})}),n.jsx(H,{path:"/mep",element:n.jsx(q0,{})})]})})]})}Ps.createRoot(document.getElementById("root")).render(n.jsx(W.StrictMode,{children:n.jsx(Eu,{children:n.jsx(A0,{})})}));
