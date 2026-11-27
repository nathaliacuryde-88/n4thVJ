var c_=Object.defineProperty;var u_=(s,e,t)=>e in s?c_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var V=(s,e,t)=>u_(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var nf={exports:{}},sa={},rf={exports:{}},It={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function f_(){if(Bm)return It;Bm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function m(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function y(D,q,Se){this.props=D,this.context=q,this.refs=T,this.updater=Se||_}y.prototype.isReactComponent={},y.prototype.setState=function(D,q){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,q,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function M(){}M.prototype=y.prototype;function w(D,q,Se){this.props=D,this.context=q,this.refs=T,this.updater=Se||_}var R=w.prototype=new M;R.constructor=w,S(R,y.prototype),R.isPureReactComponent=!0;var P=Array.isArray,H=Object.prototype.hasOwnProperty,I={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function E(D,q,Se){var ge,me={},j=null,ce=null;if(q!=null)for(ge in q.ref!==void 0&&(ce=q.ref),q.key!==void 0&&(j=""+q.key),q)H.call(q,ge)&&!F.hasOwnProperty(ge)&&(me[ge]=q[ge]);var le=arguments.length-2;if(le===1)me.children=Se;else if(1<le){for(var Ee=Array(le),we=0;we<le;we++)Ee[we]=arguments[we+2];me.children=Ee}if(D&&D.defaultProps)for(ge in le=D.defaultProps,le)me[ge]===void 0&&(me[ge]=le[ge]);return{$$typeof:s,type:D,key:j,ref:ce,props:me,_owner:I.current}}function U(D,q){return{$$typeof:s,type:D.type,key:q,ref:D.ref,props:D.props,_owner:D._owner}}function Y(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function G(D){var q={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Se){return q[Se]})}var N=/\/+/g;function k(D,q){return typeof D=="object"&&D!==null&&D.key!=null?G(""+D.key):q.toString(36)}function Q(D,q,Se,ge,me){var j=typeof D;(j==="undefined"||j==="boolean")&&(D=null);var ce=!1;if(D===null)ce=!0;else switch(j){case"string":case"number":ce=!0;break;case"object":switch(D.$$typeof){case s:case e:ce=!0}}if(ce)return ce=D,me=me(ce),D=ge===""?"."+k(ce,0):ge,P(me)?(Se="",D!=null&&(Se=D.replace(N,"$&/")+"/"),Q(me,q,Se,"",function(we){return we})):me!=null&&(Y(me)&&(me=U(me,Se+(!me.key||ce&&ce.key===me.key?"":(""+me.key).replace(N,"$&/")+"/")+D)),q.push(me)),1;if(ce=0,ge=ge===""?".":ge+":",P(D))for(var le=0;le<D.length;le++){j=D[le];var Ee=ge+k(j,le);ce+=Q(j,q,Se,Ee,me)}else if(Ee=m(D),typeof Ee=="function")for(D=Ee.call(D),le=0;!(j=D.next()).done;)j=j.value,Ee=ge+k(j,le++),ce+=Q(j,q,Se,Ee,me);else if(j==="object")throw q=String(D),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return ce}function K(D,q,Se){if(D==null)return D;var ge=[],me=0;return Q(D,ge,"","",function(j){return q.call(Se,j,me++)}),ge}function se(D){if(D._status===-1){var q=D._result;q=q(),q.then(function(Se){(D._status===0||D._status===-1)&&(D._status=1,D._result=Se)},function(Se){(D._status===0||D._status===-1)&&(D._status=2,D._result=Se)}),D._status===-1&&(D._status=0,D._result=q)}if(D._status===1)return D._result.default;throw D._result}var W={current:null},Z={transition:null},O={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:Z,ReactCurrentOwner:I};function B(){throw Error("act(...) is not supported in production builds of React.")}return It.Children={map:K,forEach:function(D,q,Se){K(D,function(){q.apply(this,arguments)},Se)},count:function(D){var q=0;return K(D,function(){q++}),q},toArray:function(D){return K(D,function(q){return q})||[]},only:function(D){if(!Y(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},It.Component=y,It.Fragment=t,It.Profiler=o,It.PureComponent=w,It.StrictMode=r,It.Suspense=d,It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,It.act=B,It.cloneElement=function(D,q,Se){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var ge=S({},D.props),me=D.key,j=D.ref,ce=D._owner;if(q!=null){if(q.ref!==void 0&&(j=q.ref,ce=I.current),q.key!==void 0&&(me=""+q.key),D.type&&D.type.defaultProps)var le=D.type.defaultProps;for(Ee in q)H.call(q,Ee)&&!F.hasOwnProperty(Ee)&&(ge[Ee]=q[Ee]===void 0&&le!==void 0?le[Ee]:q[Ee])}var Ee=arguments.length-2;if(Ee===1)ge.children=Se;else if(1<Ee){le=Array(Ee);for(var we=0;we<Ee;we++)le[we]=arguments[we+2];ge.children=le}return{$$typeof:s,type:D.type,key:me,ref:j,props:ge,_owner:ce}},It.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},It.createElement=E,It.createFactory=function(D){var q=E.bind(null,D);return q.type=D,q},It.createRef=function(){return{current:null}},It.forwardRef=function(D){return{$$typeof:f,render:D}},It.isValidElement=Y,It.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:se}},It.memo=function(D,q){return{$$typeof:h,type:D,compare:q===void 0?null:q}},It.startTransition=function(D){var q=Z.transition;Z.transition={};try{D()}finally{Z.transition=q}},It.unstable_act=B,It.useCallback=function(D,q){return W.current.useCallback(D,q)},It.useContext=function(D){return W.current.useContext(D)},It.useDebugValue=function(){},It.useDeferredValue=function(D){return W.current.useDeferredValue(D)},It.useEffect=function(D,q){return W.current.useEffect(D,q)},It.useId=function(){return W.current.useId()},It.useImperativeHandle=function(D,q,Se){return W.current.useImperativeHandle(D,q,Se)},It.useInsertionEffect=function(D,q){return W.current.useInsertionEffect(D,q)},It.useLayoutEffect=function(D,q){return W.current.useLayoutEffect(D,q)},It.useMemo=function(D,q){return W.current.useMemo(D,q)},It.useReducer=function(D,q,Se){return W.current.useReducer(D,q,Se)},It.useRef=function(D){return W.current.useRef(D)},It.useState=function(D){return W.current.useState(D)},It.useSyncExternalStore=function(D,q,Se){return W.current.useSyncExternalStore(D,q,Se)},It.useTransition=function(){return W.current.useTransition()},It.version="18.3.1",It}var zm;function Qh(){return zm||(zm=1,rf.exports=f_()),rf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function h_(){if(Hm)return sa;Hm=1;var s=Qh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,h){var g,x={},m=null,_=null;h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(_=d.ref);for(g in d)r.call(d,g)&&!l.hasOwnProperty(g)&&(x[g]=d[g]);if(f&&f.defaultProps)for(g in d=f.defaultProps,d)x[g]===void 0&&(x[g]=d[g]);return{$$typeof:e,type:f,key:m,ref:_,props:x,_owner:o.current}}return sa.Fragment=t,sa.jsx=c,sa.jsxs=c,sa}var Vm;function d_(){return Vm||(Vm=1,nf.exports=h_()),nf.exports}var be=d_(),ut=Qh(),Tl={},sf={exports:{}},ai={},of={exports:{}},af={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function p_(){return Gm||(Gm=1,(function(s){function e(Z,O){var B=Z.length;Z.push(O);e:for(;0<B;){var D=B-1>>>1,q=Z[D];if(0<o(q,O))Z[D]=O,Z[B]=q,B=D;else break e}}function t(Z){return Z.length===0?null:Z[0]}function r(Z){if(Z.length===0)return null;var O=Z[0],B=Z.pop();if(B!==O){Z[0]=B;e:for(var D=0,q=Z.length,Se=q>>>1;D<Se;){var ge=2*(D+1)-1,me=Z[ge],j=ge+1,ce=Z[j];if(0>o(me,B))j<q&&0>o(ce,me)?(Z[D]=ce,Z[j]=B,D=j):(Z[D]=me,Z[ge]=B,D=ge);else if(j<q&&0>o(ce,B))Z[D]=ce,Z[j]=B,D=j;else break e}}return O}function o(Z,O){var B=Z.sortIndex-O.sortIndex;return B!==0?B:Z.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var d=[],h=[],g=1,x=null,m=3,_=!1,S=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(Z){for(var O=t(h);O!==null;){if(O.callback===null)r(h);else if(O.startTime<=Z)r(h),O.sortIndex=O.expirationTime,e(d,O);else break;O=t(h)}}function P(Z){if(T=!1,R(Z),!S)if(t(d)!==null)S=!0,se(H);else{var O=t(h);O!==null&&W(P,O.startTime-Z)}}function H(Z,O){S=!1,T&&(T=!1,M(E),E=-1),_=!0;var B=m;try{for(R(O),x=t(d);x!==null&&(!(x.expirationTime>O)||Z&&!G());){var D=x.callback;if(typeof D=="function"){x.callback=null,m=x.priorityLevel;var q=D(x.expirationTime<=O);O=s.unstable_now(),typeof q=="function"?x.callback=q:x===t(d)&&r(d),R(O)}else r(d);x=t(d)}if(x!==null)var Se=!0;else{var ge=t(h);ge!==null&&W(P,ge.startTime-O),Se=!1}return Se}finally{x=null,m=B,_=!1}}var I=!1,F=null,E=-1,U=5,Y=-1;function G(){return!(s.unstable_now()-Y<U)}function N(){if(F!==null){var Z=s.unstable_now();Y=Z;var O=!0;try{O=F(!0,Z)}finally{O?k():(I=!1,F=null)}}else I=!1}var k;if(typeof w=="function")k=function(){w(N)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,K=Q.port2;Q.port1.onmessage=N,k=function(){K.postMessage(null)}}else k=function(){y(N,0)};function se(Z){F=Z,I||(I=!0,k())}function W(Z,O){E=y(function(){Z(s.unstable_now())},O)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Z){Z.callback=null},s.unstable_continueExecution=function(){S||_||(S=!0,se(H))},s.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<Z?Math.floor(1e3/Z):5},s.unstable_getCurrentPriorityLevel=function(){return m},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(Z){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var B=m;m=O;try{return Z()}finally{m=B}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Z,O){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var B=m;m=Z;try{return O()}finally{m=B}},s.unstable_scheduleCallback=function(Z,O,B){var D=s.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?D+B:D):B=D,Z){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=B+q,Z={id:g++,callback:O,priorityLevel:Z,startTime:B,expirationTime:q,sortIndex:-1},B>D?(Z.sortIndex=B,e(h,Z),t(d)===null&&Z===t(h)&&(T?(M(E),E=-1):T=!0,W(P,B-D))):(Z.sortIndex=q,e(d,Z),S||_||(S=!0,se(H))),Z},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(Z){var O=m;return function(){var B=m;m=O;try{return Z.apply(this,arguments)}finally{m=B}}}})(af)),af}var Wm;function m_(){return Wm||(Wm=1,of.exports=p_()),of.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function g_(){if(Xm)return ai;Xm=1;var s=Qh(),e=m_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function m(n){return d.call(x,n)?!0:d.call(g,n)?!1:h.test(n)?x[n]=!0:(g[n]=!0,!1)}function _(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function S(n,i,a,u){if(i===null||typeof i>"u"||_(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,a,u,p,v,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=v,this.removeEmptyString=b}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function w(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(M,w);y[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(M,w);y[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(M,w);y[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function R(n,i,a,u){var p=y.hasOwnProperty(i)?y[i]:null;(p!==null?p.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(S(i,a,p,u)&&(a=null),u||p===null?m(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(i=p.attributeName,u=p.attributeNamespace,a===null?n.removeAttribute(i):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),I=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),G=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),Z=Symbol.iterator;function O(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var B=Object.assign,D;function q(n){if(D===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+n}var Se=!1;function ge(n,i){if(!n||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(pe){var u=pe}Reflect.construct(n,[],i)}else{try{i.call()}catch(pe){u=pe}n.call(i.prototype)}else{try{throw Error()}catch(pe){u=pe}n()}}catch(pe){if(pe&&u&&typeof pe.stack=="string"){for(var p=pe.stack.split(`
`),v=u.stack.split(`
`),b=p.length-1,X=v.length-1;1<=b&&0<=X&&p[b]!==v[X];)X--;for(;1<=b&&0<=X;b--,X--)if(p[b]!==v[X]){if(b!==1||X!==1)do if(b--,X--,0>X||p[b]!==v[X]){var te=`
`+p[b].replace(" at new "," at ");return n.displayName&&te.includes("<anonymous>")&&(te=te.replace("<anonymous>",n.displayName)),te}while(1<=b&&0<=X);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function me(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=ge(n.type,!1),n;case 11:return n=ge(n.type.render,!1),n;case 1:return n=ge(n.type,!0),n;default:return""}}function j(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case I:return"Portal";case U:return"Profiler";case E:return"StrictMode";case k:return"Suspense";case Q:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case Y:return(n._context.displayName||"Context")+".Provider";case N:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case K:return i=n.displayName||null,i!==null?i:j(n.type)||"Memo";case se:i=n._payload,n=n._init;try{return j(n(i))}catch{}}return null}function ce(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return j(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ee(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function we(n){var i=Ee(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,v=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(b){u=""+b,v.call(this,b)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(b){u=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ve(n){n._valueTracker||(n._valueTracker=we(n))}function Ge(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Ee(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function He(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ze(n,i){var a=i.checked;return B({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Qe(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=le(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function nt(n,i){i=i.checked,i!=null&&R(n,"checked",i,!1)}function Je(n,i){nt(n,i);var a=le(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Rt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Rt(n,i.type,le(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function lt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Rt(n,i,a){(i!=="number"||He(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ee=Array.isArray;function Lt(n,i,a,u){if(n=n.options,i){i={};for(var p=0;p<a.length;p++)i["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=i.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&u&&(n[a].defaultSelected=!0)}else{for(a=""+le(a),i=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function vt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return B({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function At(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(ee(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:le(a)}}function z(n,i){var a=le(i.value),u=le(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function Me(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function L(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function A(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?L(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ne,he=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,p){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,p)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ne=ne||document.createElement("div"),ne.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ne.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ae(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var De={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(De).forEach(function(n){Be.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),De[i]=De[n]})});function xe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||De.hasOwnProperty(n)&&De[n]?(""+i).trim():i+"px"}function ye(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,p=xe(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,p):n[a]=p}}var We=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ve(n,i){if(i){if(We[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ce(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pe=null;function ct(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var pt=null,Mt=null,J=null;function Fe(n){if(n=Wo(n)){if(typeof pt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ha(i),pt(n.stateNode,n.type,i))}}function _e(n){Mt?J?J.push(n):J=[n]:Mt=n}function Ke(){if(Mt){var n=Mt,i=J;if(J=Mt=null,Fe(n),i)for(n=0;n<i.length;n++)Fe(i[n])}}function ke(n,i){return n(i)}function Te(){}var Oe=!1;function je(n,i,a){if(Oe)return n(i,a);Oe=!0;try{return ke(n,i,a)}finally{Oe=!1,(Mt!==null||J!==null)&&(Te(),Ke())}}function Et(n,i){var a=n.stateNode;if(a===null)return null;var u=Ha(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var _t=!1;if(f)try{var Nt={};Object.defineProperty(Nt,"passive",{get:function(){_t=!0}}),window.addEventListener("test",Nt,Nt),window.removeEventListener("test",Nt,Nt)}catch{_t=!1}function yt(n,i,a,u,p,v,b,X,te){var pe=Array.prototype.slice.call(arguments,3);try{i.apply(a,pe)}catch(Ie){this.onError(Ie)}}var Ft=!1,Fn=null,qn=!1,Tn=null,ei={onError:function(n){Ft=!0,Fn=n}};function Ci(n,i,a,u,p,v,b,X,te){Ft=!1,Fn=null,yt.apply(ei,arguments)}function Ri(n,i,a,u,p,v,b,X,te){if(Ci.apply(this,arguments),Ft){if(Ft){var pe=Fn;Ft=!1,Fn=null}else throw Error(t(198));qn||(qn=!0,Tn=pe)}}function kn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ti(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ji(n){if(kn(n)!==n)throw Error(t(188))}function Pi(n){var i=n.alternate;if(!i){if(i=kn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var p=a.return;if(p===null)break;var v=p.alternate;if(v===null){if(u=p.return,u!==null){a=u;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===a)return ji(p),n;if(v===u)return ji(p),i;v=v.sibling}throw Error(t(188))}if(a.return!==u.return)a=p,u=v;else{for(var b=!1,X=p.child;X;){if(X===a){b=!0,a=p,u=v;break}if(X===u){b=!0,u=p,a=v;break}X=X.sibling}if(!b){for(X=v.child;X;){if(X===a){b=!0,a=v,u=p;break}if(X===u){b=!0,u=v,a=p;break}X=X.sibling}if(!b)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function _n(n){return n=Pi(n),n!==null?bn(n):null}function bn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=bn(n);if(i!==null)return i;n=n.sibling}return null}var Cn=e.unstable_scheduleCallback,Rn=e.unstable_cancelCallback,On=e.unstable_shouldYield,Bn=e.unstable_requestPaint,qt=e.unstable_now,ft=e.unstable_getCurrentPriorityLevel,Qt=e.unstable_ImmediatePriority,C=e.unstable_UserBlockingPriority,ie=e.unstable_NormalPriority,de=e.unstable_LowPriority,oe=e.unstable_IdlePriority,ae=null,Le=null;function Xe(n){if(Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(ae,n,void 0,(n.current.flags&128)===128)}catch{}}var Ne=Math.clz32?Math.clz32:ht,et=Math.log,it=Math.LN2;function ht(n){return n>>>=0,n===0?32:31-(et(n)/it|0)|0}var dt=64,tt=4194304;function bt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ot(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,p=n.suspendedLanes,v=n.pingedLanes,b=a&268435455;if(b!==0){var X=b&~p;X!==0?u=bt(X):(v&=b,v!==0&&(u=bt(v)))}else b=a&~p,b!==0?u=bt(b):v!==0&&(u=bt(v));if(u===0)return 0;if(i!==0&&i!==u&&(i&p)===0&&(p=u&-u,v=i&-i,p>=v||p===16&&(v&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Ne(i),p=1<<a,u|=n[a],i&=~p;return u}function Kt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var b=31-Ne(v),X=1<<b,te=p[b];te===-1?((X&a)===0||(X&u)!==0)&&(p[b]=Kt(X,i)):te<=i&&(n.expiredLanes|=X),v&=~X}}function tn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function qe(){var n=dt;return dt<<=1,(dt&4194240)===0&&(dt=64),n}function fn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Ct(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ne(i),n[i]=a}function Pn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-Ne(a),v=1<<p;i[p]=0,u[p]=-1,n[p]=-1,a&=~v}}function Ln(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Ne(a),p=1<<u;p&i|n[u]&i&&(n[u]|=i),a&=~p}}var Tt=0;function ui(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Bt,Jt,yn,Ht,Li,qi=!1,ts=[],wr=null,Tr=null,br=null,Co=new Map,Ro=new Map,Cr=[],Lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sd(n,i){switch(n){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Co.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(i.pointerId)}}function Po(n,i,a,u,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:v,targetContainers:[p]},i!==null&&(i=Wo(i),i!==null&&Jt(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function Iv(n,i,a,u,p){switch(i){case"focusin":return wr=Po(wr,n,i,a,u,p),!0;case"dragenter":return Tr=Po(Tr,n,i,a,u,p),!0;case"mouseover":return br=Po(br,n,i,a,u,p),!0;case"pointerover":var v=p.pointerId;return Co.set(v,Po(Co.get(v)||null,n,i,a,u,p)),!0;case"gotpointercapture":return v=p.pointerId,Ro.set(v,Po(Ro.get(v)||null,n,i,a,u,p)),!0}return!1}function Ad(n){var i=ns(n.target);if(i!==null){var a=kn(i);if(a!==null){if(i=a.tag,i===13){if(i=ti(a),i!==null){n.blockedOn=i,Li(n.priority,function(){yn(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ba(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Rc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Pe=u,a.target.dispatchEvent(u),Pe=null}else return i=Wo(a),i!==null&&Jt(i),n.blockedOn=a,!1;i.shift()}return!0}function Ed(n,i,a){ba(n)&&a.delete(i)}function Dv(){qi=!1,wr!==null&&ba(wr)&&(wr=null),Tr!==null&&ba(Tr)&&(Tr=null),br!==null&&ba(br)&&(br=null),Co.forEach(Ed),Ro.forEach(Ed)}function Lo(n,i){n.blockedOn===i&&(n.blockedOn=null,qi||(qi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Dv)))}function Io(n){function i(p){return Lo(p,n)}if(0<ts.length){Lo(ts[0],n);for(var a=1;a<ts.length;a++){var u=ts[a];u.blockedOn===n&&(u.blockedOn=null)}}for(wr!==null&&Lo(wr,n),Tr!==null&&Lo(Tr,n),br!==null&&Lo(br,n),Co.forEach(i),Ro.forEach(i),a=0;a<Cr.length;a++)u=Cr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Cr.length&&(a=Cr[0],a.blockedOn===null);)Ad(a),a.blockedOn===null&&Cr.shift()}var Ps=P.ReactCurrentBatchConfig,Ca=!0;function Uv(n,i,a,u){var p=Tt,v=Ps.transition;Ps.transition=null;try{Tt=1,Cc(n,i,a,u)}finally{Tt=p,Ps.transition=v}}function Nv(n,i,a,u){var p=Tt,v=Ps.transition;Ps.transition=null;try{Tt=4,Cc(n,i,a,u)}finally{Tt=p,Ps.transition=v}}function Cc(n,i,a,u){if(Ca){var p=Rc(n,i,a,u);if(p===null)Kc(n,i,u,Ra,a),Sd(n,u);else if(Iv(p,n,i,a,u))u.stopPropagation();else if(Sd(n,u),i&4&&-1<Lv.indexOf(n)){for(;p!==null;){var v=Wo(p);if(v!==null&&Bt(v),v=Rc(n,i,a,u),v===null&&Kc(n,i,u,Ra,a),v===p)break;p=v}p!==null&&u.stopPropagation()}else Kc(n,i,u,null,a)}}var Ra=null;function Rc(n,i,a,u){if(Ra=null,n=ct(u),n=ns(n),n!==null)if(i=kn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ti(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ra=n,null}function wd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ft()){case Qt:return 1;case C:return 4;case ie:case de:return 16;case oe:return 536870912;default:return 16}default:return 16}}var Rr=null,Pc=null,Pa=null;function Td(){if(Pa)return Pa;var n,i=Pc,a=i.length,u,p="value"in Rr?Rr.value:Rr.textContent,v=p.length;for(n=0;n<a&&i[n]===p[n];n++);var b=a-n;for(u=1;u<=b&&i[a-u]===p[v-u];u++);return Pa=p.slice(n,1<u?1-u:void 0)}function La(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ia(){return!0}function bd(){return!1}function fi(n){function i(a,u,p,v,b){this._reactName=a,this._targetInst=p,this.type=u,this.nativeEvent=v,this.target=b,this.currentTarget=null;for(var X in n)n.hasOwnProperty(X)&&(a=n[X],this[X]=a?a(v):v[X]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ia:bd,this.isPropagationStopped=bd,this}return B(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),i}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lc=fi(Ls),Do=B({},Ls,{view:0,detail:0}),Fv=fi(Do),Ic,Dc,Uo,Da=B({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Uo&&(Uo&&n.type==="mousemove"?(Ic=n.screenX-Uo.screenX,Dc=n.screenY-Uo.screenY):Dc=Ic=0,Uo=n),Ic)},movementY:function(n){return"movementY"in n?n.movementY:Dc}}),Cd=fi(Da),kv=B({},Da,{dataTransfer:0}),Ov=fi(kv),Bv=B({},Do,{relatedTarget:0}),Uc=fi(Bv),zv=B({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Hv=fi(zv),Vv=B({},Ls,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Gv=fi(Vv),Wv=B({},Ls,{data:0}),Rd=fi(Wv),Xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=jv[n])?!!i[n]:!1}function Nc(){return qv}var Yv=B({},Do,{key:function(n){if(n.key){var i=Xv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=La(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Kv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nc,charCode:function(n){return n.type==="keypress"?La(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?La(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Qv=fi(Yv),Jv=B({},Da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pd=fi(Jv),Zv=B({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nc}),$v=fi(Zv),ex=B({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),tx=fi(ex),nx=B({},Da,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ix=fi(nx),rx=[9,13,27,32],Fc=f&&"CompositionEvent"in window,No=null;f&&"documentMode"in document&&(No=document.documentMode);var sx=f&&"TextEvent"in window&&!No,Ld=f&&(!Fc||No&&8<No&&11>=No),Id=" ",Dd=!1;function Ud(n,i){switch(n){case"keyup":return rx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Is=!1;function ox(n,i){switch(n){case"compositionend":return Nd(i);case"keypress":return i.which!==32?null:(Dd=!0,Id);case"textInput":return n=i.data,n===Id&&Dd?null:n;default:return null}}function ax(n,i){if(Is)return n==="compositionend"||!Fc&&Ud(n,i)?(n=Td(),Pa=Pc=Rr=null,Is=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ld&&i.locale!=="ko"?null:i.data;default:return null}}var lx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!lx[n.type]:i==="textarea"}function kd(n,i,a,u){_e(u),i=Oa(i,"onChange"),0<i.length&&(a=new Lc("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Fo=null,ko=null;function cx(n){tp(n,0)}function Ua(n){var i=ks(n);if(Ge(i))return n}function ux(n,i){if(n==="change")return i}var Od=!1;if(f){var kc;if(f){var Oc="oninput"in document;if(!Oc){var Bd=document.createElement("div");Bd.setAttribute("oninput","return;"),Oc=typeof Bd.oninput=="function"}kc=Oc}else kc=!1;Od=kc&&(!document.documentMode||9<document.documentMode)}function zd(){Fo&&(Fo.detachEvent("onpropertychange",Hd),ko=Fo=null)}function Hd(n){if(n.propertyName==="value"&&Ua(ko)){var i=[];kd(i,ko,n,ct(n)),je(cx,i)}}function fx(n,i,a){n==="focusin"?(zd(),Fo=i,ko=a,Fo.attachEvent("onpropertychange",Hd)):n==="focusout"&&zd()}function hx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ua(ko)}function dx(n,i){if(n==="click")return Ua(i)}function px(n,i){if(n==="input"||n==="change")return Ua(i)}function mx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ii=typeof Object.is=="function"?Object.is:mx;function Oo(n,i){if(Ii(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var p=a[u];if(!d.call(i,p)||!Ii(n[p],i[p]))return!1}return!0}function Vd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Gd(n,i){var a=Vd(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Vd(a)}}function Wd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Wd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Xd(){for(var n=window,i=He();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=He(n.document)}return i}function Bc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function gx(n){var i=Xd(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Wd(a.ownerDocument.documentElement,a)){if(u!==null&&Bc(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,v=Math.min(u.start,p);u=u.end===void 0?v:Math.min(u.end,p),!n.extend&&v>u&&(p=u,u=v,v=p),p=Gd(a,v);var b=Gd(a,u);p&&b&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),n.removeAllRanges(),v>u?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var vx=f&&"documentMode"in document&&11>=document.documentMode,Ds=null,zc=null,Bo=null,Hc=!1;function Kd(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hc||Ds==null||Ds!==He(u)||(u=Ds,"selectionStart"in u&&Bc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Bo&&Oo(Bo,u)||(Bo=u,u=Oa(zc,"onSelect"),0<u.length&&(i=new Lc("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=Ds)))}function Na(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Us={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},Vc={},jd={};f&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Fa(n){if(Vc[n])return Vc[n];if(!Us[n])return n;var i=Us[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in jd)return Vc[n]=i[a];return n}var qd=Fa("animationend"),Yd=Fa("animationiteration"),Qd=Fa("animationstart"),Jd=Fa("transitionend"),Zd=new Map,$d="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(n,i){Zd.set(n,i),l(i,[n])}for(var Gc=0;Gc<$d.length;Gc++){var Wc=$d[Gc],xx=Wc.toLowerCase(),_x=Wc[0].toUpperCase()+Wc.slice(1);Pr(xx,"on"+_x)}Pr(qd,"onAnimationEnd"),Pr(Yd,"onAnimationIteration"),Pr(Qd,"onAnimationStart"),Pr("dblclick","onDoubleClick"),Pr("focusin","onFocus"),Pr("focusout","onBlur"),Pr(Jd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yx=new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));function ep(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,Ri(u,i,void 0,n),n.currentTarget=null}function tp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],p=u.event;u=u.listeners;e:{var v=void 0;if(i)for(var b=u.length-1;0<=b;b--){var X=u[b],te=X.instance,pe=X.currentTarget;if(X=X.listener,te!==v&&p.isPropagationStopped())break e;ep(p,X,pe),v=te}else for(b=0;b<u.length;b++){if(X=u[b],te=X.instance,pe=X.currentTarget,X=X.listener,te!==v&&p.isPropagationStopped())break e;ep(p,X,pe),v=te}}}if(qn)throw n=Tn,qn=!1,Tn=null,n}function $t(n,i){var a=i[Zc];a===void 0&&(a=i[Zc]=new Set);var u=n+"__bubble";a.has(u)||(np(i,n,2,!1),a.add(u))}function Xc(n,i,a){var u=0;i&&(u|=4),np(a,n,u,i)}var ka="_reactListening"+Math.random().toString(36).slice(2);function Ho(n){if(!n[ka]){n[ka]=!0,r.forEach(function(a){a!=="selectionchange"&&(yx.has(a)||Xc(a,!1,n),Xc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ka]||(i[ka]=!0,Xc("selectionchange",!1,i))}}function np(n,i,a,u){switch(wd(i)){case 1:var p=Uv;break;case 4:p=Nv;break;default:p=Cc}a=p.bind(null,i,a,n),p=void 0,!_t||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(i,a,{capture:!0,passive:p}):n.addEventListener(i,a,!0):p!==void 0?n.addEventListener(i,a,{passive:p}):n.addEventListener(i,a,!1)}function Kc(n,i,a,u,p){var v=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var X=u.stateNode.containerInfo;if(X===p||X.nodeType===8&&X.parentNode===p)break;if(b===4)for(b=u.return;b!==null;){var te=b.tag;if((te===3||te===4)&&(te=b.stateNode.containerInfo,te===p||te.nodeType===8&&te.parentNode===p))return;b=b.return}for(;X!==null;){if(b=ns(X),b===null)return;if(te=b.tag,te===5||te===6){u=v=b;continue e}X=X.parentNode}}u=u.return}je(function(){var pe=v,Ie=ct(a),Ue=[];e:{var Re=Zd.get(n);if(Re!==void 0){var $e=Lc,st=n;switch(n){case"keypress":if(La(a)===0)break e;case"keydown":case"keyup":$e=Qv;break;case"focusin":st="focus",$e=Uc;break;case"focusout":st="blur",$e=Uc;break;case"beforeblur":case"afterblur":$e=Uc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$e=Cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$e=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$e=$v;break;case qd:case Yd:case Qd:$e=Hv;break;case Jd:$e=tx;break;case"scroll":$e=Fv;break;case"wheel":$e=ix;break;case"copy":case"cut":case"paste":$e=Gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$e=Pd}var ot=(i&4)!==0,cn=!ot&&n==="scroll",ue=ot?Re!==null?Re+"Capture":null:Re;ot=[];for(var re=pe,fe;re!==null;){fe=re;var ze=fe.stateNode;if(fe.tag===5&&ze!==null&&(fe=ze,ue!==null&&(ze=Et(re,ue),ze!=null&&ot.push(Vo(re,ze,fe)))),cn)break;re=re.return}0<ot.length&&(Re=new $e(Re,st,null,a,Ie),Ue.push({event:Re,listeners:ot}))}}if((i&7)===0){e:{if(Re=n==="mouseover"||n==="pointerover",$e=n==="mouseout"||n==="pointerout",Re&&a!==Pe&&(st=a.relatedTarget||a.fromElement)&&(ns(st)||st[ar]))break e;if(($e||Re)&&(Re=Ie.window===Ie?Ie:(Re=Ie.ownerDocument)?Re.defaultView||Re.parentWindow:window,$e?(st=a.relatedTarget||a.toElement,$e=pe,st=st?ns(st):null,st!==null&&(cn=kn(st),st!==cn||st.tag!==5&&st.tag!==6)&&(st=null)):($e=null,st=pe),$e!==st)){if(ot=Cd,ze="onMouseLeave",ue="onMouseEnter",re="mouse",(n==="pointerout"||n==="pointerover")&&(ot=Pd,ze="onPointerLeave",ue="onPointerEnter",re="pointer"),cn=$e==null?Re:ks($e),fe=st==null?Re:ks(st),Re=new ot(ze,re+"leave",$e,a,Ie),Re.target=cn,Re.relatedTarget=fe,ze=null,ns(Ie)===pe&&(ot=new ot(ue,re+"enter",st,a,Ie),ot.target=fe,ot.relatedTarget=cn,ze=ot),cn=ze,$e&&st)t:{for(ot=$e,ue=st,re=0,fe=ot;fe;fe=Ns(fe))re++;for(fe=0,ze=ue;ze;ze=Ns(ze))fe++;for(;0<re-fe;)ot=Ns(ot),re--;for(;0<fe-re;)ue=Ns(ue),fe--;for(;re--;){if(ot===ue||ue!==null&&ot===ue.alternate)break t;ot=Ns(ot),ue=Ns(ue)}ot=null}else ot=null;$e!==null&&ip(Ue,Re,$e,ot,!1),st!==null&&cn!==null&&ip(Ue,cn,st,ot,!0)}}e:{if(Re=pe?ks(pe):window,$e=Re.nodeName&&Re.nodeName.toLowerCase(),$e==="select"||$e==="input"&&Re.type==="file")var at=ux;else if(Fd(Re))if(Od)at=px;else{at=hx;var mt=fx}else($e=Re.nodeName)&&$e.toLowerCase()==="input"&&(Re.type==="checkbox"||Re.type==="radio")&&(at=dx);if(at&&(at=at(n,pe))){kd(Ue,at,a,Ie);break e}mt&&mt(n,Re,pe),n==="focusout"&&(mt=Re._wrapperState)&&mt.controlled&&Re.type==="number"&&Rt(Re,"number",Re.value)}switch(mt=pe?ks(pe):window,n){case"focusin":(Fd(mt)||mt.contentEditable==="true")&&(Ds=mt,zc=pe,Bo=null);break;case"focusout":Bo=zc=Ds=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,Kd(Ue,a,Ie);break;case"selectionchange":if(vx)break;case"keydown":case"keyup":Kd(Ue,a,Ie)}var gt;if(Fc)e:{switch(n){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Is?Ud(n,a)&&(St="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(Ld&&a.locale!=="ko"&&(Is||St!=="onCompositionStart"?St==="onCompositionEnd"&&Is&&(gt=Td()):(Rr=Ie,Pc="value"in Rr?Rr.value:Rr.textContent,Is=!0)),mt=Oa(pe,St),0<mt.length&&(St=new Rd(St,n,null,a,Ie),Ue.push({event:St,listeners:mt}),gt?St.data=gt:(gt=Nd(a),gt!==null&&(St.data=gt)))),(gt=sx?ox(n,a):ax(n,a))&&(pe=Oa(pe,"onBeforeInput"),0<pe.length&&(Ie=new Rd("onBeforeInput","beforeinput",null,a,Ie),Ue.push({event:Ie,listeners:pe}),Ie.data=gt))}tp(Ue,i)})}function Vo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Oa(n,i){for(var a=i+"Capture",u=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=Et(n,a),v!=null&&u.unshift(Vo(n,v,p)),v=Et(n,i),v!=null&&u.push(Vo(n,v,p))),n=n.return}return u}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ip(n,i,a,u,p){for(var v=i._reactName,b=[];a!==null&&a!==u;){var X=a,te=X.alternate,pe=X.stateNode;if(te!==null&&te===u)break;X.tag===5&&pe!==null&&(X=pe,p?(te=Et(a,v),te!=null&&b.unshift(Vo(a,te,X))):p||(te=Et(a,v),te!=null&&b.push(Vo(a,te,X)))),a=a.return}b.length!==0&&n.push({event:i,listeners:b})}var Mx=/\r\n?/g,Sx=/\u0000|\uFFFD/g;function rp(n){return(typeof n=="string"?n:""+n).replace(Mx,`
`).replace(Sx,"")}function Ba(n,i,a){if(i=rp(i),rp(n)!==i&&a)throw Error(t(425))}function za(){}var jc=null,qc=null;function Yc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Qc=typeof setTimeout=="function"?setTimeout:void 0,Ax=typeof clearTimeout=="function"?clearTimeout:void 0,sp=typeof Promise=="function"?Promise:void 0,Ex=typeof queueMicrotask=="function"?queueMicrotask:typeof sp<"u"?function(n){return sp.resolve(null).then(n).catch(wx)}:Qc;function wx(n){setTimeout(function(){throw n})}function Jc(n,i){var a=i,u=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(u===0){n.removeChild(p),Io(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=p}while(a);Io(i)}function Lr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function op(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Yi="__reactFiber$"+Fs,Go="__reactProps$"+Fs,ar="__reactContainer$"+Fs,Zc="__reactEvents$"+Fs,Tx="__reactListeners$"+Fs,bx="__reactHandles$"+Fs;function ns(n){var i=n[Yi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[ar]||a[Yi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=op(n);n!==null;){if(a=n[Yi])return a;n=op(n)}return i}n=a,a=n.parentNode}return null}function Wo(n){return n=n[Yi]||n[ar],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ks(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ha(n){return n[Go]||null}var $c=[],Os=-1;function Ir(n){return{current:n}}function en(n){0>Os||(n.current=$c[Os],$c[Os]=null,Os--)}function Zt(n,i){Os++,$c[Os]=n.current,n.current=i}var Dr={},zn=Ir(Dr),ni=Ir(!1),is=Dr;function Bs(n,i){var a=n.type.contextTypes;if(!a)return Dr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in a)p[v]=i[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=p),p}function ii(n){return n=n.childContextTypes,n!=null}function Va(){en(ni),en(zn)}function ap(n,i,a){if(zn.current!==Dr)throw Error(t(168));Zt(zn,i),Zt(ni,a)}function lp(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var p in u)if(!(p in i))throw Error(t(108,ce(n)||"Unknown",p));return B({},a,u)}function Ga(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Dr,is=zn.current,Zt(zn,n),Zt(ni,ni.current),!0}function cp(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=lp(n,i,is),u.__reactInternalMemoizedMergedChildContext=n,en(ni),en(zn),Zt(zn,n)):en(ni),Zt(ni,a)}var lr=null,Wa=!1,eu=!1;function up(n){lr===null?lr=[n]:lr.push(n)}function Cx(n){Wa=!0,up(n)}function Ur(){if(!eu&&lr!==null){eu=!0;var n=0,i=Tt;try{var a=lr;for(Tt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}lr=null,Wa=!1}catch(p){throw lr!==null&&(lr=lr.slice(n+1)),Cn(Qt,Ur),p}finally{Tt=i,eu=!1}}return null}var zs=[],Hs=0,Xa=null,Ka=0,xi=[],_i=0,rs=null,cr=1,ur="";function ss(n,i){zs[Hs++]=Ka,zs[Hs++]=Xa,Xa=n,Ka=i}function fp(n,i,a){xi[_i++]=cr,xi[_i++]=ur,xi[_i++]=rs,rs=n;var u=cr;n=ur;var p=32-Ne(u)-1;u&=~(1<<p),a+=1;var v=32-Ne(i)+p;if(30<v){var b=p-p%5;v=(u&(1<<b)-1).toString(32),u>>=b,p-=b,cr=1<<32-Ne(i)+p|a<<p|u,ur=v+n}else cr=1<<v|a<<p|u,ur=n}function tu(n){n.return!==null&&(ss(n,1),fp(n,1,0))}function nu(n){for(;n===Xa;)Xa=zs[--Hs],zs[Hs]=null,Ka=zs[--Hs],zs[Hs]=null;for(;n===rs;)rs=xi[--_i],xi[_i]=null,ur=xi[--_i],xi[_i]=null,cr=xi[--_i],xi[_i]=null}var hi=null,di=null,nn=!1,Di=null;function hp(n,i){var a=Ai(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function dp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,hi=n,di=Lr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,hi=n,di=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=rs!==null?{id:cr,overflow:ur}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ai(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,hi=n,di=null,!0):!1;default:return!1}}function iu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ru(n){if(nn){var i=di;if(i){var a=i;if(!dp(n,i)){if(iu(n))throw Error(t(418));i=Lr(a.nextSibling);var u=hi;i&&dp(n,i)?hp(u,a):(n.flags=n.flags&-4097|2,nn=!1,hi=n)}}else{if(iu(n))throw Error(t(418));n.flags=n.flags&-4097|2,nn=!1,hi=n}}}function pp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;hi=n}function ja(n){if(n!==hi)return!1;if(!nn)return pp(n),nn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Yc(n.type,n.memoizedProps)),i&&(i=di)){if(iu(n))throw mp(),Error(t(418));for(;i;)hp(n,i),i=Lr(i.nextSibling)}if(pp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){di=Lr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}di=null}}else di=hi?Lr(n.stateNode.nextSibling):null;return!0}function mp(){for(var n=di;n;)n=Lr(n.nextSibling)}function Vs(){di=hi=null,nn=!1}function su(n){Di===null?Di=[n]:Di.push(n)}var Rx=P.ReactCurrentBatchConfig;function Xo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var p=u,v=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===v?i.ref:(i=function(b){var X=p.refs;b===null?delete X[v]:X[v]=b},i._stringRef=v,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function qa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function gp(n){var i=n._init;return i(n._payload)}function vp(n){function i(ue,re){if(n){var fe=ue.deletions;fe===null?(ue.deletions=[re],ue.flags|=16):fe.push(re)}}function a(ue,re){if(!n)return null;for(;re!==null;)i(ue,re),re=re.sibling;return null}function u(ue,re){for(ue=new Map;re!==null;)re.key!==null?ue.set(re.key,re):ue.set(re.index,re),re=re.sibling;return ue}function p(ue,re){return ue=Vr(ue,re),ue.index=0,ue.sibling=null,ue}function v(ue,re,fe){return ue.index=fe,n?(fe=ue.alternate,fe!==null?(fe=fe.index,fe<re?(ue.flags|=2,re):fe):(ue.flags|=2,re)):(ue.flags|=1048576,re)}function b(ue){return n&&ue.alternate===null&&(ue.flags|=2),ue}function X(ue,re,fe,ze){return re===null||re.tag!==6?(re=Qu(fe,ue.mode,ze),re.return=ue,re):(re=p(re,fe),re.return=ue,re)}function te(ue,re,fe,ze){var at=fe.type;return at===F?Ie(ue,re,fe.props.children,ze,fe.key):re!==null&&(re.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===se&&gp(at)===re.type)?(ze=p(re,fe.props),ze.ref=Xo(ue,re,fe),ze.return=ue,ze):(ze=xl(fe.type,fe.key,fe.props,null,ue.mode,ze),ze.ref=Xo(ue,re,fe),ze.return=ue,ze)}function pe(ue,re,fe,ze){return re===null||re.tag!==4||re.stateNode.containerInfo!==fe.containerInfo||re.stateNode.implementation!==fe.implementation?(re=Ju(fe,ue.mode,ze),re.return=ue,re):(re=p(re,fe.children||[]),re.return=ue,re)}function Ie(ue,re,fe,ze,at){return re===null||re.tag!==7?(re=ds(fe,ue.mode,ze,at),re.return=ue,re):(re=p(re,fe),re.return=ue,re)}function Ue(ue,re,fe){if(typeof re=="string"&&re!==""||typeof re=="number")return re=Qu(""+re,ue.mode,fe),re.return=ue,re;if(typeof re=="object"&&re!==null){switch(re.$$typeof){case H:return fe=xl(re.type,re.key,re.props,null,ue.mode,fe),fe.ref=Xo(ue,null,re),fe.return=ue,fe;case I:return re=Ju(re,ue.mode,fe),re.return=ue,re;case se:var ze=re._init;return Ue(ue,ze(re._payload),fe)}if(ee(re)||O(re))return re=ds(re,ue.mode,fe,null),re.return=ue,re;qa(ue,re)}return null}function Re(ue,re,fe,ze){var at=re!==null?re.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return at!==null?null:X(ue,re,""+fe,ze);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case H:return fe.key===at?te(ue,re,fe,ze):null;case I:return fe.key===at?pe(ue,re,fe,ze):null;case se:return at=fe._init,Re(ue,re,at(fe._payload),ze)}if(ee(fe)||O(fe))return at!==null?null:Ie(ue,re,fe,ze,null);qa(ue,fe)}return null}function $e(ue,re,fe,ze,at){if(typeof ze=="string"&&ze!==""||typeof ze=="number")return ue=ue.get(fe)||null,X(re,ue,""+ze,at);if(typeof ze=="object"&&ze!==null){switch(ze.$$typeof){case H:return ue=ue.get(ze.key===null?fe:ze.key)||null,te(re,ue,ze,at);case I:return ue=ue.get(ze.key===null?fe:ze.key)||null,pe(re,ue,ze,at);case se:var mt=ze._init;return $e(ue,re,fe,mt(ze._payload),at)}if(ee(ze)||O(ze))return ue=ue.get(fe)||null,Ie(re,ue,ze,at,null);qa(re,ze)}return null}function st(ue,re,fe,ze){for(var at=null,mt=null,gt=re,St=re=0,An=null;gt!==null&&St<fe.length;St++){gt.index>St?(An=gt,gt=null):An=gt.sibling;var jt=Re(ue,gt,fe[St],ze);if(jt===null){gt===null&&(gt=An);break}n&&gt&&jt.alternate===null&&i(ue,gt),re=v(jt,re,St),mt===null?at=jt:mt.sibling=jt,mt=jt,gt=An}if(St===fe.length)return a(ue,gt),nn&&ss(ue,St),at;if(gt===null){for(;St<fe.length;St++)gt=Ue(ue,fe[St],ze),gt!==null&&(re=v(gt,re,St),mt===null?at=gt:mt.sibling=gt,mt=gt);return nn&&ss(ue,St),at}for(gt=u(ue,gt);St<fe.length;St++)An=$e(gt,ue,St,fe[St],ze),An!==null&&(n&&An.alternate!==null&&gt.delete(An.key===null?St:An.key),re=v(An,re,St),mt===null?at=An:mt.sibling=An,mt=An);return n&&gt.forEach(function(Gr){return i(ue,Gr)}),nn&&ss(ue,St),at}function ot(ue,re,fe,ze){var at=O(fe);if(typeof at!="function")throw Error(t(150));if(fe=at.call(fe),fe==null)throw Error(t(151));for(var mt=at=null,gt=re,St=re=0,An=null,jt=fe.next();gt!==null&&!jt.done;St++,jt=fe.next()){gt.index>St?(An=gt,gt=null):An=gt.sibling;var Gr=Re(ue,gt,jt.value,ze);if(Gr===null){gt===null&&(gt=An);break}n&&gt&&Gr.alternate===null&&i(ue,gt),re=v(Gr,re,St),mt===null?at=Gr:mt.sibling=Gr,mt=Gr,gt=An}if(jt.done)return a(ue,gt),nn&&ss(ue,St),at;if(gt===null){for(;!jt.done;St++,jt=fe.next())jt=Ue(ue,jt.value,ze),jt!==null&&(re=v(jt,re,St),mt===null?at=jt:mt.sibling=jt,mt=jt);return nn&&ss(ue,St),at}for(gt=u(ue,gt);!jt.done;St++,jt=fe.next())jt=$e(gt,ue,St,jt.value,ze),jt!==null&&(n&&jt.alternate!==null&&gt.delete(jt.key===null?St:jt.key),re=v(jt,re,St),mt===null?at=jt:mt.sibling=jt,mt=jt);return n&&gt.forEach(function(l_){return i(ue,l_)}),nn&&ss(ue,St),at}function cn(ue,re,fe,ze){if(typeof fe=="object"&&fe!==null&&fe.type===F&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case H:e:{for(var at=fe.key,mt=re;mt!==null;){if(mt.key===at){if(at=fe.type,at===F){if(mt.tag===7){a(ue,mt.sibling),re=p(mt,fe.props.children),re.return=ue,ue=re;break e}}else if(mt.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===se&&gp(at)===mt.type){a(ue,mt.sibling),re=p(mt,fe.props),re.ref=Xo(ue,mt,fe),re.return=ue,ue=re;break e}a(ue,mt);break}else i(ue,mt);mt=mt.sibling}fe.type===F?(re=ds(fe.props.children,ue.mode,ze,fe.key),re.return=ue,ue=re):(ze=xl(fe.type,fe.key,fe.props,null,ue.mode,ze),ze.ref=Xo(ue,re,fe),ze.return=ue,ue=ze)}return b(ue);case I:e:{for(mt=fe.key;re!==null;){if(re.key===mt)if(re.tag===4&&re.stateNode.containerInfo===fe.containerInfo&&re.stateNode.implementation===fe.implementation){a(ue,re.sibling),re=p(re,fe.children||[]),re.return=ue,ue=re;break e}else{a(ue,re);break}else i(ue,re);re=re.sibling}re=Ju(fe,ue.mode,ze),re.return=ue,ue=re}return b(ue);case se:return mt=fe._init,cn(ue,re,mt(fe._payload),ze)}if(ee(fe))return st(ue,re,fe,ze);if(O(fe))return ot(ue,re,fe,ze);qa(ue,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,re!==null&&re.tag===6?(a(ue,re.sibling),re=p(re,fe),re.return=ue,ue=re):(a(ue,re),re=Qu(fe,ue.mode,ze),re.return=ue,ue=re),b(ue)):a(ue,re)}return cn}var Gs=vp(!0),xp=vp(!1),Ya=Ir(null),Qa=null,Ws=null,ou=null;function au(){ou=Ws=Qa=null}function lu(n){var i=Ya.current;en(Ya),n._currentValue=i}function cu(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Xs(n,i){Qa=n,ou=Ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ri=!0),n.firstContext=null)}function yi(n){var i=n._currentValue;if(ou!==n)if(n={context:n,memoizedValue:i,next:null},Ws===null){if(Qa===null)throw Error(t(308));Ws=n,Qa.dependencies={lanes:0,firstContext:n}}else Ws=Ws.next=n;return i}var os=null;function uu(n){os===null?os=[n]:os.push(n)}function _p(n,i,a,u){var p=i.interleaved;return p===null?(a.next=a,uu(i)):(a.next=p.next,p.next=a),i.interleaved=a,fr(n,u)}function fr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Nr=!1;function fu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function hr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Fr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Vt&2)!==0){var p=u.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),u.pending=i,fr(n,a)}return p=u.interleaved,p===null?(i.next=i,uu(u)):(i.next=p.next,p.next=i),u.interleaved=i,fr(n,a)}function Ja(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Ln(n,a)}}function Mp(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var p=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?p=v=b:v=v.next=b,a=a.next}while(a!==null);v===null?p=v=i:v=v.next=i}else p=v=i;a={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Za(n,i,a,u){var p=n.updateQueue;Nr=!1;var v=p.firstBaseUpdate,b=p.lastBaseUpdate,X=p.shared.pending;if(X!==null){p.shared.pending=null;var te=X,pe=te.next;te.next=null,b===null?v=pe:b.next=pe,b=te;var Ie=n.alternate;Ie!==null&&(Ie=Ie.updateQueue,X=Ie.lastBaseUpdate,X!==b&&(X===null?Ie.firstBaseUpdate=pe:X.next=pe,Ie.lastBaseUpdate=te))}if(v!==null){var Ue=p.baseState;b=0,Ie=pe=te=null,X=v;do{var Re=X.lane,$e=X.eventTime;if((u&Re)===Re){Ie!==null&&(Ie=Ie.next={eventTime:$e,lane:0,tag:X.tag,payload:X.payload,callback:X.callback,next:null});e:{var st=n,ot=X;switch(Re=i,$e=a,ot.tag){case 1:if(st=ot.payload,typeof st=="function"){Ue=st.call($e,Ue,Re);break e}Ue=st;break e;case 3:st.flags=st.flags&-65537|128;case 0:if(st=ot.payload,Re=typeof st=="function"?st.call($e,Ue,Re):st,Re==null)break e;Ue=B({},Ue,Re);break e;case 2:Nr=!0}}X.callback!==null&&X.lane!==0&&(n.flags|=64,Re=p.effects,Re===null?p.effects=[X]:Re.push(X))}else $e={eventTime:$e,lane:Re,tag:X.tag,payload:X.payload,callback:X.callback,next:null},Ie===null?(pe=Ie=$e,te=Ue):Ie=Ie.next=$e,b|=Re;if(X=X.next,X===null){if(X=p.shared.pending,X===null)break;Re=X,X=Re.next,Re.next=null,p.lastBaseUpdate=Re,p.shared.pending=null}}while(!0);if(Ie===null&&(te=Ue),p.baseState=te,p.firstBaseUpdate=pe,p.lastBaseUpdate=Ie,i=p.shared.interleaved,i!==null){p=i;do b|=p.lane,p=p.next;while(p!==i)}else v===null&&(p.shared.lanes=0);cs|=b,n.lanes=b,n.memoizedState=Ue}}function Sp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],p=u.callback;if(p!==null){if(u.callback=null,u=a,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var Ko={},Qi=Ir(Ko),jo=Ir(Ko),qo=Ir(Ko);function as(n){if(n===Ko)throw Error(t(174));return n}function hu(n,i){switch(Zt(qo,i),Zt(jo,n),Zt(Qi,Ko),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:A(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=A(i,n)}en(Qi),Zt(Qi,i)}function Ks(){en(Qi),en(jo),en(qo)}function Ap(n){as(qo.current);var i=as(Qi.current),a=A(i,n.type);i!==a&&(Zt(jo,n),Zt(Qi,a))}function du(n){jo.current===n&&(en(Qi),en(jo))}var rn=Ir(0);function $a(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var pu=[];function mu(){for(var n=0;n<pu.length;n++)pu[n]._workInProgressVersionPrimary=null;pu.length=0}var el=P.ReactCurrentDispatcher,gu=P.ReactCurrentBatchConfig,ls=0,sn=null,pn=null,Mn=null,tl=!1,Yo=!1,Qo=0,Px=0;function Hn(){throw Error(t(321))}function vu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ii(n[a],i[a]))return!1;return!0}function xu(n,i,a,u,p,v){if(ls=v,sn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,el.current=n===null||n.memoizedState===null?Ux:Nx,n=a(u,p),Yo){v=0;do{if(Yo=!1,Qo=0,25<=v)throw Error(t(301));v+=1,Mn=pn=null,i.updateQueue=null,el.current=Fx,n=a(u,p)}while(Yo)}if(el.current=rl,i=pn!==null&&pn.next!==null,ls=0,Mn=pn=sn=null,tl=!1,i)throw Error(t(300));return n}function _u(){var n=Qo!==0;return Qo=0,n}function Ji(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?sn.memoizedState=Mn=n:Mn=Mn.next=n,Mn}function Mi(){if(pn===null){var n=sn.alternate;n=n!==null?n.memoizedState:null}else n=pn.next;var i=Mn===null?sn.memoizedState:Mn.next;if(i!==null)Mn=i,pn=n;else{if(n===null)throw Error(t(310));pn=n,n={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},Mn===null?sn.memoizedState=Mn=n:Mn=Mn.next=n}return Mn}function Jo(n,i){return typeof i=="function"?i(n):i}function yu(n){var i=Mi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=pn,p=u.baseQueue,v=a.pending;if(v!==null){if(p!==null){var b=p.next;p.next=v.next,v.next=b}u.baseQueue=p=v,a.pending=null}if(p!==null){v=p.next,u=u.baseState;var X=b=null,te=null,pe=v;do{var Ie=pe.lane;if((ls&Ie)===Ie)te!==null&&(te=te.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),u=pe.hasEagerState?pe.eagerState:n(u,pe.action);else{var Ue={lane:Ie,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};te===null?(X=te=Ue,b=u):te=te.next=Ue,sn.lanes|=Ie,cs|=Ie}pe=pe.next}while(pe!==null&&pe!==v);te===null?b=u:te.next=X,Ii(u,i.memoizedState)||(ri=!0),i.memoizedState=u,i.baseState=b,i.baseQueue=te,a.lastRenderedState=u}if(n=a.interleaved,n!==null){p=n;do v=p.lane,sn.lanes|=v,cs|=v,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Mu(n){var i=Mi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,p=a.pending,v=i.memoizedState;if(p!==null){a.pending=null;var b=p=p.next;do v=n(v,b.action),b=b.next;while(b!==p);Ii(v,i.memoizedState)||(ri=!0),i.memoizedState=v,i.baseQueue===null&&(i.baseState=v),a.lastRenderedState=v}return[v,u]}function Ep(){}function wp(n,i){var a=sn,u=Mi(),p=i(),v=!Ii(u.memoizedState,p);if(v&&(u.memoizedState=p,ri=!0),u=u.queue,Su(Cp.bind(null,a,u,n),[n]),u.getSnapshot!==i||v||Mn!==null&&Mn.memoizedState.tag&1){if(a.flags|=2048,Zo(9,bp.bind(null,a,u,p,i),void 0,null),Sn===null)throw Error(t(349));(ls&30)!==0||Tp(a,i,p)}return p}function Tp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=sn.updateQueue,i===null?(i={lastEffect:null,stores:null},sn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function bp(n,i,a,u){i.value=a,i.getSnapshot=u,Rp(i)&&Pp(n)}function Cp(n,i,a){return a(function(){Rp(i)&&Pp(n)})}function Rp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ii(n,a)}catch{return!0}}function Pp(n){var i=fr(n,1);i!==null&&ki(i,n,1,-1)}function Lp(n){var i=Ji();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:n},i.queue=n,n=n.dispatch=Dx.bind(null,sn,n),[i.memoizedState,n]}function Zo(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=sn.updateQueue,i===null?(i={lastEffect:null,stores:null},sn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Ip(){return Mi().memoizedState}function nl(n,i,a,u){var p=Ji();sn.flags|=n,p.memoizedState=Zo(1|i,a,void 0,u===void 0?null:u)}function il(n,i,a,u){var p=Mi();u=u===void 0?null:u;var v=void 0;if(pn!==null){var b=pn.memoizedState;if(v=b.destroy,u!==null&&vu(u,b.deps)){p.memoizedState=Zo(i,a,v,u);return}}sn.flags|=n,p.memoizedState=Zo(1|i,a,v,u)}function Dp(n,i){return nl(8390656,8,n,i)}function Su(n,i){return il(2048,8,n,i)}function Up(n,i){return il(4,2,n,i)}function Np(n,i){return il(4,4,n,i)}function Fp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function kp(n,i,a){return a=a!=null?a.concat([n]):null,il(4,4,Fp.bind(null,i,n),a)}function Au(){}function Op(n,i){var a=Mi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&vu(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Bp(n,i){var a=Mi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&vu(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function zp(n,i,a){return(ls&21)===0?(n.baseState&&(n.baseState=!1,ri=!0),n.memoizedState=a):(Ii(a,i)||(a=qe(),sn.lanes|=a,cs|=a,n.baseState=!0),i)}function Lx(n,i){var a=Tt;Tt=a!==0&&4>a?a:4,n(!0);var u=gu.transition;gu.transition={};try{n(!1),i()}finally{Tt=a,gu.transition=u}}function Hp(){return Mi().memoizedState}function Ix(n,i,a){var u=zr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Vp(n))Gp(i,a);else if(a=_p(n,i,a,u),a!==null){var p=Qn();ki(a,n,u,p),Wp(a,i,u)}}function Dx(n,i,a){var u=zr(n),p={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vp(n))Gp(i,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=i.lastRenderedReducer,v!==null))try{var b=i.lastRenderedState,X=v(b,a);if(p.hasEagerState=!0,p.eagerState=X,Ii(X,b)){var te=i.interleaved;te===null?(p.next=p,uu(i)):(p.next=te.next,te.next=p),i.interleaved=p;return}}catch{}finally{}a=_p(n,i,p,u),a!==null&&(p=Qn(),ki(a,n,u,p),Wp(a,i,u))}}function Vp(n){var i=n.alternate;return n===sn||i!==null&&i===sn}function Gp(n,i){Yo=tl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Wp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Ln(n,a)}}var rl={readContext:yi,useCallback:Hn,useContext:Hn,useEffect:Hn,useImperativeHandle:Hn,useInsertionEffect:Hn,useLayoutEffect:Hn,useMemo:Hn,useReducer:Hn,useRef:Hn,useState:Hn,useDebugValue:Hn,useDeferredValue:Hn,useTransition:Hn,useMutableSource:Hn,useSyncExternalStore:Hn,useId:Hn,unstable_isNewReconciler:!1},Ux={readContext:yi,useCallback:function(n,i){return Ji().memoizedState=[n,i===void 0?null:i],n},useContext:yi,useEffect:Dp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,nl(4194308,4,Fp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return nl(4194308,4,n,i)},useInsertionEffect:function(n,i){return nl(4,2,n,i)},useMemo:function(n,i){var a=Ji();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Ji();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Ix.bind(null,sn,n),[u.memoizedState,n]},useRef:function(n){var i=Ji();return n={current:n},i.memoizedState=n},useState:Lp,useDebugValue:Au,useDeferredValue:function(n){return Ji().memoizedState=n},useTransition:function(){var n=Lp(!1),i=n[0];return n=Lx.bind(null,n[1]),Ji().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=sn,p=Ji();if(nn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Sn===null)throw Error(t(349));(ls&30)!==0||Tp(u,i,a)}p.memoizedState=a;var v={value:a,getSnapshot:i};return p.queue=v,Dp(Cp.bind(null,u,v,n),[n]),u.flags|=2048,Zo(9,bp.bind(null,u,v,a,i),void 0,null),a},useId:function(){var n=Ji(),i=Sn.identifierPrefix;if(nn){var a=ur,u=cr;a=(u&~(1<<32-Ne(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Qo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Px++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Nx={readContext:yi,useCallback:Op,useContext:yi,useEffect:Su,useImperativeHandle:kp,useInsertionEffect:Up,useLayoutEffect:Np,useMemo:Bp,useReducer:yu,useRef:Ip,useState:function(){return yu(Jo)},useDebugValue:Au,useDeferredValue:function(n){var i=Mi();return zp(i,pn.memoizedState,n)},useTransition:function(){var n=yu(Jo)[0],i=Mi().memoizedState;return[n,i]},useMutableSource:Ep,useSyncExternalStore:wp,useId:Hp,unstable_isNewReconciler:!1},Fx={readContext:yi,useCallback:Op,useContext:yi,useEffect:Su,useImperativeHandle:kp,useInsertionEffect:Up,useLayoutEffect:Np,useMemo:Bp,useReducer:Mu,useRef:Ip,useState:function(){return Mu(Jo)},useDebugValue:Au,useDeferredValue:function(n){var i=Mi();return pn===null?i.memoizedState=n:zp(i,pn.memoizedState,n)},useTransition:function(){var n=Mu(Jo)[0],i=Mi().memoizedState;return[n,i]},useMutableSource:Ep,useSyncExternalStore:wp,useId:Hp,unstable_isNewReconciler:!1};function Ui(n,i){if(n&&n.defaultProps){i=B({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Eu(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:B({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var sl={isMounted:function(n){return(n=n._reactInternals)?kn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Qn(),p=zr(n),v=hr(u,p);v.payload=i,a!=null&&(v.callback=a),i=Fr(n,v,p),i!==null&&(ki(i,n,p,u),Ja(i,n,p))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Qn(),p=zr(n),v=hr(u,p);v.tag=1,v.payload=i,a!=null&&(v.callback=a),i=Fr(n,v,p),i!==null&&(ki(i,n,p,u),Ja(i,n,p))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Qn(),u=zr(n),p=hr(a,u);p.tag=2,i!=null&&(p.callback=i),i=Fr(n,p,u),i!==null&&(ki(i,n,u,a),Ja(i,n,u))}};function Xp(n,i,a,u,p,v,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,b):i.prototype&&i.prototype.isPureReactComponent?!Oo(a,u)||!Oo(p,v):!0}function Kp(n,i,a){var u=!1,p=Dr,v=i.contextType;return typeof v=="object"&&v!==null?v=yi(v):(p=ii(i)?is:zn.current,u=i.contextTypes,v=(u=u!=null)?Bs(n,p):Dr),i=new i(a,v),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=sl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),i}function jp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&sl.enqueueReplaceState(i,i.state,null)}function wu(n,i,a,u){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},fu(n);var v=i.contextType;typeof v=="object"&&v!==null?p.context=yi(v):(v=ii(i)?is:zn.current,p.context=Bs(n,v)),p.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(Eu(n,i,v,a),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&sl.enqueueReplaceState(p,p.state,null),Za(n,a,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function js(n,i){try{var a="",u=i;do a+=me(u),u=u.return;while(u);var p=a}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:i,stack:p,digest:null}}function Tu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function bu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var kx=typeof WeakMap=="function"?WeakMap:Map;function qp(n,i,a){a=hr(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){hl||(hl=!0,Vu=u),bu(n,i)},a}function Yp(n,i,a){a=hr(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=i.value;a.payload=function(){return u(p)},a.callback=function(){bu(n,i)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){bu(n,i),typeof u!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function Qp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new kx;var p=new Set;u.set(i,p)}else p=u.get(i),p===void 0&&(p=new Set,u.set(i,p));p.has(a)||(p.add(a),n=Jx.bind(null,n,i,a),i.then(n,n))}function Jp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Zp(n,i,a,u,p){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=hr(-1,1),i.tag=2,Fr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Ox=P.ReactCurrentOwner,ri=!1;function Yn(n,i,a,u){i.child=n===null?xp(i,null,a,u):Gs(i,n.child,a,u)}function $p(n,i,a,u,p){a=a.render;var v=i.ref;return Xs(i,p),u=xu(n,i,a,u,v,p),a=_u(),n!==null&&!ri?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,dr(n,i,p)):(nn&&a&&tu(i),i.flags|=1,Yn(n,i,u,p),i.child)}function em(n,i,a,u,p){if(n===null){var v=a.type;return typeof v=="function"&&!Yu(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=v,tm(n,i,v,u,p)):(n=xl(a.type,null,u,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(v=n.child,(n.lanes&p)===0){var b=v.memoizedProps;if(a=a.compare,a=a!==null?a:Oo,a(b,u)&&n.ref===i.ref)return dr(n,i,p)}return i.flags|=1,n=Vr(v,u),n.ref=i.ref,n.return=i,i.child=n}function tm(n,i,a,u,p){if(n!==null){var v=n.memoizedProps;if(Oo(v,u)&&n.ref===i.ref)if(ri=!1,i.pendingProps=u=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(ri=!0);else return i.lanes=n.lanes,dr(n,i,p)}return Cu(n,i,a,u,p)}function nm(n,i,a){var u=i.pendingProps,p=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Zt(Ys,pi),pi|=a;else{if((a&1073741824)===0)return n=v!==null?v.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Zt(Ys,pi),pi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:a,Zt(Ys,pi),pi|=u}else v!==null?(u=v.baseLanes|a,i.memoizedState=null):u=a,Zt(Ys,pi),pi|=u;return Yn(n,i,p,a),i.child}function im(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Cu(n,i,a,u,p){var v=ii(a)?is:zn.current;return v=Bs(i,v),Xs(i,p),a=xu(n,i,a,u,v,p),u=_u(),n!==null&&!ri?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,dr(n,i,p)):(nn&&u&&tu(i),i.flags|=1,Yn(n,i,a,p),i.child)}function rm(n,i,a,u,p){if(ii(a)){var v=!0;Ga(i)}else v=!1;if(Xs(i,p),i.stateNode===null)al(n,i),Kp(i,a,u),wu(i,a,u,p),u=!0;else if(n===null){var b=i.stateNode,X=i.memoizedProps;b.props=X;var te=b.context,pe=a.contextType;typeof pe=="object"&&pe!==null?pe=yi(pe):(pe=ii(a)?is:zn.current,pe=Bs(i,pe));var Ie=a.getDerivedStateFromProps,Ue=typeof Ie=="function"||typeof b.getSnapshotBeforeUpdate=="function";Ue||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(X!==u||te!==pe)&&jp(i,b,u,pe),Nr=!1;var Re=i.memoizedState;b.state=Re,Za(i,u,b,p),te=i.memoizedState,X!==u||Re!==te||ni.current||Nr?(typeof Ie=="function"&&(Eu(i,a,Ie,u),te=i.memoizedState),(X=Nr||Xp(i,a,X,u,Re,te,pe))?(Ue||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=te),b.props=u,b.state=te,b.context=pe,u=X):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{b=i.stateNode,yp(n,i),X=i.memoizedProps,pe=i.type===i.elementType?X:Ui(i.type,X),b.props=pe,Ue=i.pendingProps,Re=b.context,te=a.contextType,typeof te=="object"&&te!==null?te=yi(te):(te=ii(a)?is:zn.current,te=Bs(i,te));var $e=a.getDerivedStateFromProps;(Ie=typeof $e=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(X!==Ue||Re!==te)&&jp(i,b,u,te),Nr=!1,Re=i.memoizedState,b.state=Re,Za(i,u,b,p);var st=i.memoizedState;X!==Ue||Re!==st||ni.current||Nr?(typeof $e=="function"&&(Eu(i,a,$e,u),st=i.memoizedState),(pe=Nr||Xp(i,a,pe,u,Re,st,te)||!1)?(Ie||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(u,st,te),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(u,st,te)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||X===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||X===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=st),b.props=u,b.state=st,b.context=te,u=pe):(typeof b.componentDidUpdate!="function"||X===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||X===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),u=!1)}return Ru(n,i,a,u,v,p)}function Ru(n,i,a,u,p,v){im(n,i);var b=(i.flags&128)!==0;if(!u&&!b)return p&&cp(i,a,!1),dr(n,i,v);u=i.stateNode,Ox.current=i;var X=b&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&b?(i.child=Gs(i,n.child,null,v),i.child=Gs(i,null,X,v)):Yn(n,i,X,v),i.memoizedState=u.state,p&&cp(i,a,!0),i.child}function sm(n){var i=n.stateNode;i.pendingContext?ap(n,i.pendingContext,i.pendingContext!==i.context):i.context&&ap(n,i.context,!1),hu(n,i.containerInfo)}function om(n,i,a,u,p){return Vs(),su(p),i.flags|=256,Yn(n,i,a,u),i.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Lu(n){return{baseLanes:n,cachePool:null,transitions:null}}function am(n,i,a){var u=i.pendingProps,p=rn.current,v=!1,b=(i.flags&128)!==0,X;if((X=b)||(X=n!==null&&n.memoizedState===null?!1:(p&2)!==0),X?(v=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Zt(rn,p&1),n===null)return ru(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=u.children,n=u.fallback,v?(u=i.mode,v=i.child,b={mode:"hidden",children:b},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=b):v=_l(b,u,0,null),n=ds(n,u,a,null),v.return=i,n.return=i,v.sibling=n,i.child=v,i.child.memoizedState=Lu(a),i.memoizedState=Pu,n):Iu(i,b));if(p=n.memoizedState,p!==null&&(X=p.dehydrated,X!==null))return Bx(n,i,b,u,X,p,a);if(v){v=u.fallback,b=i.mode,p=n.child,X=p.sibling;var te={mode:"hidden",children:u.children};return(b&1)===0&&i.child!==p?(u=i.child,u.childLanes=0,u.pendingProps=te,i.deletions=null):(u=Vr(p,te),u.subtreeFlags=p.subtreeFlags&14680064),X!==null?v=Vr(X,v):(v=ds(v,b,a,null),v.flags|=2),v.return=i,u.return=i,u.sibling=v,i.child=u,u=v,v=i.child,b=n.child.memoizedState,b=b===null?Lu(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},v.memoizedState=b,v.childLanes=n.childLanes&~a,i.memoizedState=Pu,u}return v=n.child,n=v.sibling,u=Vr(v,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Iu(n,i){return i=_l({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ol(n,i,a,u){return u!==null&&su(u),Gs(i,n.child,null,a),n=Iu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Bx(n,i,a,u,p,v,b){if(a)return i.flags&256?(i.flags&=-257,u=Tu(Error(t(422))),ol(n,i,b,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(v=u.fallback,p=i.mode,u=_l({mode:"visible",children:u.children},p,0,null),v=ds(v,p,b,null),v.flags|=2,u.return=i,v.return=i,u.sibling=v,i.child=u,(i.mode&1)!==0&&Gs(i,n.child,null,b),i.child.memoizedState=Lu(b),i.memoizedState=Pu,v);if((i.mode&1)===0)return ol(n,i,b,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var X=u.dgst;return u=X,v=Error(t(419)),u=Tu(v,u,void 0),ol(n,i,b,u)}if(X=(b&n.childLanes)!==0,ri||X){if(u=Sn,u!==null){switch(b&-b){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|b))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,fr(n,p),ki(u,n,p,-1))}return qu(),u=Tu(Error(t(421))),ol(n,i,b,u)}return p.data==="$?"?(i.flags|=128,i.child=n.child,i=Zx.bind(null,n),p._reactRetry=i,null):(n=v.treeContext,di=Lr(p.nextSibling),hi=i,nn=!0,Di=null,n!==null&&(xi[_i++]=cr,xi[_i++]=ur,xi[_i++]=rs,cr=n.id,ur=n.overflow,rs=i),i=Iu(i,u.children),i.flags|=4096,i)}function lm(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),cu(n.return,i,a)}function Du(n,i,a,u,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:p}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=a,v.tailMode=p)}function cm(n,i,a){var u=i.pendingProps,p=u.revealOrder,v=u.tail;if(Yn(n,i,u.children,a),u=rn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&lm(n,a,i);else if(n.tag===19)lm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Zt(rn,u),(i.mode&1)===0)i.memoizedState=null;else switch(p){case"forwards":for(a=i.child,p=null;a!==null;)n=a.alternate,n!==null&&$a(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=i.child,i.child=null):(p=a.sibling,a.sibling=null),Du(i,!1,p,a,v);break;case"backwards":for(a=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&$a(n)===null){i.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}Du(i,!0,a,null,v);break;case"together":Du(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function al(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function dr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),cs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Vr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Vr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function zx(n,i,a){switch(i.tag){case 3:sm(i),Vs();break;case 5:Ap(i);break;case 1:ii(i.type)&&Ga(i);break;case 4:hu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,p=i.memoizedProps.value;Zt(Ya,u._currentValue),u._currentValue=p;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Zt(rn,rn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?am(n,i,a):(Zt(rn,rn.current&1),n=dr(n,i,a),n!==null?n.sibling:null);Zt(rn,rn.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return cm(n,i,a);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Zt(rn,rn.current),u)break;return null;case 22:case 23:return i.lanes=0,nm(n,i,a)}return dr(n,i,a)}var um,Uu,fm,hm;um=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Uu=function(){},fm=function(n,i,a,u){var p=n.memoizedProps;if(p!==u){n=i.stateNode,as(Qi.current);var v=null;switch(a){case"input":p=Ze(n,p),u=Ze(n,u),v=[];break;case"select":p=B({},p,{value:void 0}),u=B({},u,{value:void 0}),v=[];break;case"textarea":p=vt(n,p),u=vt(n,u),v=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=za)}Ve(a,u);var b;a=null;for(pe in p)if(!u.hasOwnProperty(pe)&&p.hasOwnProperty(pe)&&p[pe]!=null)if(pe==="style"){var X=p[pe];for(b in X)X.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(o.hasOwnProperty(pe)?v||(v=[]):(v=v||[]).push(pe,null));for(pe in u){var te=u[pe];if(X=p!=null?p[pe]:void 0,u.hasOwnProperty(pe)&&te!==X&&(te!=null||X!=null))if(pe==="style")if(X){for(b in X)!X.hasOwnProperty(b)||te&&te.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in te)te.hasOwnProperty(b)&&X[b]!==te[b]&&(a||(a={}),a[b]=te[b])}else a||(v||(v=[]),v.push(pe,a)),a=te;else pe==="dangerouslySetInnerHTML"?(te=te?te.__html:void 0,X=X?X.__html:void 0,te!=null&&X!==te&&(v=v||[]).push(pe,te)):pe==="children"?typeof te!="string"&&typeof te!="number"||(v=v||[]).push(pe,""+te):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(o.hasOwnProperty(pe)?(te!=null&&pe==="onScroll"&&$t("scroll",n),v||X===te||(v=[])):(v=v||[]).push(pe,te))}a&&(v=v||[]).push("style",a);var pe=v;(i.updateQueue=pe)&&(i.flags|=4)}},hm=function(n,i,a,u){a!==u&&(i.flags|=4)};function $o(n,i){if(!nn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Vn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Hx(n,i,a){var u=i.pendingProps;switch(nu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vn(i),null;case 1:return ii(i.type)&&Va(),Vn(i),null;case 3:return u=i.stateNode,Ks(),en(ni),en(zn),mu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(ja(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Di!==null&&(Xu(Di),Di=null))),Uu(n,i),Vn(i),null;case 5:du(i);var p=as(qo.current);if(a=i.type,n!==null&&i.stateNode!=null)fm(n,i,a,u,p),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Vn(i),null}if(n=as(Qi.current),ja(i)){u=i.stateNode,a=i.type;var v=i.memoizedProps;switch(u[Yi]=i,u[Go]=v,n=(i.mode&1)!==0,a){case"dialog":$t("cancel",u),$t("close",u);break;case"iframe":case"object":case"embed":$t("load",u);break;case"video":case"audio":for(p=0;p<zo.length;p++)$t(zo[p],u);break;case"source":$t("error",u);break;case"img":case"image":case"link":$t("error",u),$t("load",u);break;case"details":$t("toggle",u);break;case"input":Qe(u,v),$t("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},$t("invalid",u);break;case"textarea":At(u,v),$t("invalid",u)}Ve(a,v),p=null;for(var b in v)if(v.hasOwnProperty(b)){var X=v[b];b==="children"?typeof X=="string"?u.textContent!==X&&(v.suppressHydrationWarning!==!0&&Ba(u.textContent,X,n),p=["children",X]):typeof X=="number"&&u.textContent!==""+X&&(v.suppressHydrationWarning!==!0&&Ba(u.textContent,X,n),p=["children",""+X]):o.hasOwnProperty(b)&&X!=null&&b==="onScroll"&&$t("scroll",u)}switch(a){case"input":ve(u),lt(u,v,!0);break;case"textarea":ve(u),Me(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=za)}u=p,i.updateQueue=u,u!==null&&(i.flags|=4)}else{b=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=L(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=b.createElement(a,{is:u.is}):(n=b.createElement(a),a==="select"&&(b=n,u.multiple?b.multiple=!0:u.size&&(b.size=u.size))):n=b.createElementNS(n,a),n[Yi]=i,n[Go]=u,um(n,i,!1,!1),i.stateNode=n;e:{switch(b=Ce(a,u),a){case"dialog":$t("cancel",n),$t("close",n),p=u;break;case"iframe":case"object":case"embed":$t("load",n),p=u;break;case"video":case"audio":for(p=0;p<zo.length;p++)$t(zo[p],n);p=u;break;case"source":$t("error",n),p=u;break;case"img":case"image":case"link":$t("error",n),$t("load",n),p=u;break;case"details":$t("toggle",n),p=u;break;case"input":Qe(n,u),p=Ze(n,u),$t("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=B({},u,{value:void 0}),$t("invalid",n);break;case"textarea":At(n,u),p=vt(n,u),$t("invalid",n);break;default:p=u}Ve(a,p),X=p;for(v in X)if(X.hasOwnProperty(v)){var te=X[v];v==="style"?ye(n,te):v==="dangerouslySetInnerHTML"?(te=te?te.__html:void 0,te!=null&&he(n,te)):v==="children"?typeof te=="string"?(a!=="textarea"||te!=="")&&Ae(n,te):typeof te=="number"&&Ae(n,""+te):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?te!=null&&v==="onScroll"&&$t("scroll",n):te!=null&&R(n,v,te,b))}switch(a){case"input":ve(n),lt(n,u,!1);break;case"textarea":ve(n),Me(n);break;case"option":u.value!=null&&n.setAttribute("value",""+le(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?Lt(n,!!u.multiple,v,!1):u.defaultValue!=null&&Lt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=za)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Vn(i),null;case 6:if(n&&i.stateNode!=null)hm(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=as(qo.current),as(Qi.current),ja(i)){if(u=i.stateNode,a=i.memoizedProps,u[Yi]=i,(v=u.nodeValue!==a)&&(n=hi,n!==null))switch(n.tag){case 3:Ba(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ba(u.nodeValue,a,(n.mode&1)!==0)}v&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Yi]=i,i.stateNode=u}return Vn(i),null;case 13:if(en(rn),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(nn&&di!==null&&(i.mode&1)!==0&&(i.flags&128)===0)mp(),Vs(),i.flags|=98560,v=!1;else if(v=ja(i),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=i.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Yi]=i}else Vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Vn(i),v=!1}else Di!==null&&(Xu(Di),Di=null),v=!0;if(!v)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(rn.current&1)!==0?mn===0&&(mn=3):qu())),i.updateQueue!==null&&(i.flags|=4),Vn(i),null);case 4:return Ks(),Uu(n,i),n===null&&Ho(i.stateNode.containerInfo),Vn(i),null;case 10:return lu(i.type._context),Vn(i),null;case 17:return ii(i.type)&&Va(),Vn(i),null;case 19:if(en(rn),v=i.memoizedState,v===null)return Vn(i),null;if(u=(i.flags&128)!==0,b=v.rendering,b===null)if(u)$o(v,!1);else{if(mn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=$a(n),b!==null){for(i.flags|=128,$o(v,!1),u=b.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)v=a,n=u,v.flags&=14680066,b=v.alternate,b===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=b.childLanes,v.lanes=b.lanes,v.child=b.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=b.memoizedProps,v.memoizedState=b.memoizedState,v.updateQueue=b.updateQueue,v.type=b.type,n=b.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Zt(rn,rn.current&1|2),i.child}n=n.sibling}v.tail!==null&&qt()>Qs&&(i.flags|=128,u=!0,$o(v,!1),i.lanes=4194304)}else{if(!u)if(n=$a(b),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),$o(v,!0),v.tail===null&&v.tailMode==="hidden"&&!b.alternate&&!nn)return Vn(i),null}else 2*qt()-v.renderingStartTime>Qs&&a!==1073741824&&(i.flags|=128,u=!0,$o(v,!1),i.lanes=4194304);v.isBackwards?(b.sibling=i.child,i.child=b):(a=v.last,a!==null?a.sibling=b:i.child=b,v.last=b)}return v.tail!==null?(i=v.tail,v.rendering=i,v.tail=i.sibling,v.renderingStartTime=qt(),i.sibling=null,a=rn.current,Zt(rn,u?a&1|2:a&1),i):(Vn(i),null);case 22:case 23:return ju(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(pi&1073741824)!==0&&(Vn(i),i.subtreeFlags&6&&(i.flags|=8192)):Vn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Vx(n,i){switch(nu(i),i.tag){case 1:return ii(i.type)&&Va(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ks(),en(ni),en(zn),mu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return du(i),null;case 13:if(en(rn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Vs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return en(rn),null;case 4:return Ks(),null;case 10:return lu(i.type._context),null;case 22:case 23:return ju(),null;case 24:return null;default:return null}}var ll=!1,Gn=!1,Gx=typeof WeakSet=="function"?WeakSet:Set,rt=null;function qs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){an(n,i,u)}else a.current=null}function Nu(n,i,a){try{a()}catch(u){an(n,i,u)}}var dm=!1;function Wx(n,i){if(jc=Ca,n=Xd(),Bc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var p=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var b=0,X=-1,te=-1,pe=0,Ie=0,Ue=n,Re=null;t:for(;;){for(var $e;Ue!==a||p!==0&&Ue.nodeType!==3||(X=b+p),Ue!==v||u!==0&&Ue.nodeType!==3||(te=b+u),Ue.nodeType===3&&(b+=Ue.nodeValue.length),($e=Ue.firstChild)!==null;)Re=Ue,Ue=$e;for(;;){if(Ue===n)break t;if(Re===a&&++pe===p&&(X=b),Re===v&&++Ie===u&&(te=b),($e=Ue.nextSibling)!==null)break;Ue=Re,Re=Ue.parentNode}Ue=$e}a=X===-1||te===-1?null:{start:X,end:te}}else a=null}a=a||{start:0,end:0}}else a=null;for(qc={focusedElem:n,selectionRange:a},Ca=!1,rt=i;rt!==null;)if(i=rt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,rt=n;else for(;rt!==null;){i=rt;try{var st=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(st!==null){var ot=st.memoizedProps,cn=st.memoizedState,ue=i.stateNode,re=ue.getSnapshotBeforeUpdate(i.elementType===i.type?ot:Ui(i.type,ot),cn);ue.__reactInternalSnapshotBeforeUpdate=re}break;case 3:var fe=i.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ze){an(i,i.return,ze)}if(n=i.sibling,n!==null){n.return=i.return,rt=n;break}rt=i.return}return st=dm,dm=!1,st}function ea(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&Nu(i,a,v)}p=p.next}while(p!==u)}}function cl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Fu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function pm(n){var i=n.alternate;i!==null&&(n.alternate=null,pm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Yi],delete i[Go],delete i[Zc],delete i[Tx],delete i[bx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function mm(n){return n.tag===5||n.tag===3||n.tag===4}function gm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||mm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ku(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=za));else if(u!==4&&(n=n.child,n!==null))for(ku(n,i,a),n=n.sibling;n!==null;)ku(n,i,a),n=n.sibling}function Ou(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Ou(n,i,a),n=n.sibling;n!==null;)Ou(n,i,a),n=n.sibling}var In=null,Ni=!1;function kr(n,i,a){for(a=a.child;a!==null;)vm(n,i,a),a=a.sibling}function vm(n,i,a){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 5:Gn||qs(a,i);case 6:var u=In,p=Ni;In=null,kr(n,i,a),In=u,Ni=p,In!==null&&(Ni?(n=In,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):In.removeChild(a.stateNode));break;case 18:In!==null&&(Ni?(n=In,a=a.stateNode,n.nodeType===8?Jc(n.parentNode,a):n.nodeType===1&&Jc(n,a),Io(n)):Jc(In,a.stateNode));break;case 4:u=In,p=Ni,In=a.stateNode.containerInfo,Ni=!0,kr(n,i,a),In=u,Ni=p;break;case 0:case 11:case 14:case 15:if(!Gn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var v=p,b=v.destroy;v=v.tag,b!==void 0&&((v&2)!==0||(v&4)!==0)&&Nu(a,i,b),p=p.next}while(p!==u)}kr(n,i,a);break;case 1:if(!Gn&&(qs(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(X){an(a,i,X)}kr(n,i,a);break;case 21:kr(n,i,a);break;case 22:a.mode&1?(Gn=(u=Gn)||a.memoizedState!==null,kr(n,i,a),Gn=u):kr(n,i,a);break;default:kr(n,i,a)}}function xm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Gx),i.forEach(function(u){var p=$x.bind(null,n,u);a.has(u)||(a.add(u),u.then(p,p))})}}function Fi(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var p=a[u];try{var v=n,b=i,X=b;e:for(;X!==null;){switch(X.tag){case 5:In=X.stateNode,Ni=!1;break e;case 3:In=X.stateNode.containerInfo,Ni=!0;break e;case 4:In=X.stateNode.containerInfo,Ni=!0;break e}X=X.return}if(In===null)throw Error(t(160));vm(v,b,p),In=null,Ni=!1;var te=p.alternate;te!==null&&(te.return=null),p.return=null}catch(pe){an(p,i,pe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)_m(i,n),i=i.sibling}function _m(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Fi(i,n),Zi(n),u&4){try{ea(3,n,n.return),cl(3,n)}catch(ot){an(n,n.return,ot)}try{ea(5,n,n.return)}catch(ot){an(n,n.return,ot)}}break;case 1:Fi(i,n),Zi(n),u&512&&a!==null&&qs(a,a.return);break;case 5:if(Fi(i,n),Zi(n),u&512&&a!==null&&qs(a,a.return),n.flags&32){var p=n.stateNode;try{Ae(p,"")}catch(ot){an(n,n.return,ot)}}if(u&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,b=a!==null?a.memoizedProps:v,X=n.type,te=n.updateQueue;if(n.updateQueue=null,te!==null)try{X==="input"&&v.type==="radio"&&v.name!=null&&nt(p,v),Ce(X,b);var pe=Ce(X,v);for(b=0;b<te.length;b+=2){var Ie=te[b],Ue=te[b+1];Ie==="style"?ye(p,Ue):Ie==="dangerouslySetInnerHTML"?he(p,Ue):Ie==="children"?Ae(p,Ue):R(p,Ie,Ue,pe)}switch(X){case"input":Je(p,v);break;case"textarea":z(p,v);break;case"select":var Re=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var $e=v.value;$e!=null?Lt(p,!!v.multiple,$e,!1):Re!==!!v.multiple&&(v.defaultValue!=null?Lt(p,!!v.multiple,v.defaultValue,!0):Lt(p,!!v.multiple,v.multiple?[]:"",!1))}p[Go]=v}catch(ot){an(n,n.return,ot)}}break;case 6:if(Fi(i,n),Zi(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(ot){an(n,n.return,ot)}}break;case 3:if(Fi(i,n),Zi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Io(i.containerInfo)}catch(ot){an(n,n.return,ot)}break;case 4:Fi(i,n),Zi(n);break;case 13:Fi(i,n),Zi(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(Hu=qt())),u&4&&xm(n);break;case 22:if(Ie=a!==null&&a.memoizedState!==null,n.mode&1?(Gn=(pe=Gn)||Ie,Fi(i,n),Gn=pe):Fi(i,n),Zi(n),u&8192){if(pe=n.memoizedState!==null,(n.stateNode.isHidden=pe)&&!Ie&&(n.mode&1)!==0)for(rt=n,Ie=n.child;Ie!==null;){for(Ue=rt=Ie;rt!==null;){switch(Re=rt,$e=Re.child,Re.tag){case 0:case 11:case 14:case 15:ea(4,Re,Re.return);break;case 1:qs(Re,Re.return);var st=Re.stateNode;if(typeof st.componentWillUnmount=="function"){u=Re,a=Re.return;try{i=u,st.props=i.memoizedProps,st.state=i.memoizedState,st.componentWillUnmount()}catch(ot){an(u,a,ot)}}break;case 5:qs(Re,Re.return);break;case 22:if(Re.memoizedState!==null){Sm(Ue);continue}}$e!==null?($e.return=Re,rt=$e):Sm(Ue)}Ie=Ie.sibling}e:for(Ie=null,Ue=n;;){if(Ue.tag===5){if(Ie===null){Ie=Ue;try{p=Ue.stateNode,pe?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(X=Ue.stateNode,te=Ue.memoizedProps.style,b=te!=null&&te.hasOwnProperty("display")?te.display:null,X.style.display=xe("display",b))}catch(ot){an(n,n.return,ot)}}}else if(Ue.tag===6){if(Ie===null)try{Ue.stateNode.nodeValue=pe?"":Ue.memoizedProps}catch(ot){an(n,n.return,ot)}}else if((Ue.tag!==22&&Ue.tag!==23||Ue.memoizedState===null||Ue===n)&&Ue.child!==null){Ue.child.return=Ue,Ue=Ue.child;continue}if(Ue===n)break e;for(;Ue.sibling===null;){if(Ue.return===null||Ue.return===n)break e;Ie===Ue&&(Ie=null),Ue=Ue.return}Ie===Ue&&(Ie=null),Ue.sibling.return=Ue.return,Ue=Ue.sibling}}break;case 19:Fi(i,n),Zi(n),u&4&&xm(n);break;case 21:break;default:Fi(i,n),Zi(n)}}function Zi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(mm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(Ae(p,""),u.flags&=-33);var v=gm(n);Ou(n,v,p);break;case 3:case 4:var b=u.stateNode.containerInfo,X=gm(n);ku(n,X,b);break;default:throw Error(t(161))}}catch(te){an(n,n.return,te)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Xx(n,i,a){rt=n,ym(n)}function ym(n,i,a){for(var u=(n.mode&1)!==0;rt!==null;){var p=rt,v=p.child;if(p.tag===22&&u){var b=p.memoizedState!==null||ll;if(!b){var X=p.alternate,te=X!==null&&X.memoizedState!==null||Gn;X=ll;var pe=Gn;if(ll=b,(Gn=te)&&!pe)for(rt=p;rt!==null;)b=rt,te=b.child,b.tag===22&&b.memoizedState!==null?Am(p):te!==null?(te.return=b,rt=te):Am(p);for(;v!==null;)rt=v,ym(v),v=v.sibling;rt=p,ll=X,Gn=pe}Mm(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,rt=v):Mm(n)}}function Mm(n){for(;rt!==null;){var i=rt;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Gn||cl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Gn)if(a===null)u.componentDidMount();else{var p=i.elementType===i.type?a.memoizedProps:Ui(i.type,a.memoizedProps);u.componentDidUpdate(p,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=i.updateQueue;v!==null&&Sp(i,v,u);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Sp(i,b,a)}break;case 5:var X=i.stateNode;if(a===null&&i.flags&4){a=X;var te=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":te.autoFocus&&a.focus();break;case"img":te.src&&(a.src=te.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var pe=i.alternate;if(pe!==null){var Ie=pe.memoizedState;if(Ie!==null){var Ue=Ie.dehydrated;Ue!==null&&Io(Ue)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Gn||i.flags&512&&Fu(i)}catch(Re){an(i,i.return,Re)}}if(i===n){rt=null;break}if(a=i.sibling,a!==null){a.return=i.return,rt=a;break}rt=i.return}}function Sm(n){for(;rt!==null;){var i=rt;if(i===n){rt=null;break}var a=i.sibling;if(a!==null){a.return=i.return,rt=a;break}rt=i.return}}function Am(n){for(;rt!==null;){var i=rt;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{cl(4,i)}catch(te){an(i,a,te)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var p=i.return;try{u.componentDidMount()}catch(te){an(i,p,te)}}var v=i.return;try{Fu(i)}catch(te){an(i,v,te)}break;case 5:var b=i.return;try{Fu(i)}catch(te){an(i,b,te)}}}catch(te){an(i,i.return,te)}if(i===n){rt=null;break}var X=i.sibling;if(X!==null){X.return=i.return,rt=X;break}rt=i.return}}var Kx=Math.ceil,ul=P.ReactCurrentDispatcher,Bu=P.ReactCurrentOwner,Si=P.ReactCurrentBatchConfig,Vt=0,Sn=null,hn=null,Dn=0,pi=0,Ys=Ir(0),mn=0,ta=null,cs=0,fl=0,zu=0,na=null,si=null,Hu=0,Qs=1/0,pr=null,hl=!1,Vu=null,Or=null,dl=!1,Br=null,pl=0,ia=0,Gu=null,ml=-1,gl=0;function Qn(){return(Vt&6)!==0?qt():ml!==-1?ml:ml=qt()}function zr(n){return(n.mode&1)===0?1:(Vt&2)!==0&&Dn!==0?Dn&-Dn:Rx.transition!==null?(gl===0&&(gl=qe()),gl):(n=Tt,n!==0||(n=window.event,n=n===void 0?16:wd(n.type)),n)}function ki(n,i,a,u){if(50<ia)throw ia=0,Gu=null,Error(t(185));Ct(n,a,u),((Vt&2)===0||n!==Sn)&&(n===Sn&&((Vt&2)===0&&(fl|=a),mn===4&&Hr(n,Dn)),oi(n,u),a===1&&Vt===0&&(i.mode&1)===0&&(Qs=qt()+500,Wa&&Ur()))}function oi(n,i){var a=n.callbackNode;zt(n,i);var u=Ot(n,n===Sn?Dn:0);if(u===0)a!==null&&Rn(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Rn(a),i===1)n.tag===0?Cx(wm.bind(null,n)):up(wm.bind(null,n)),Ex(function(){(Vt&6)===0&&Ur()}),a=null;else{switch(ui(u)){case 1:a=Qt;break;case 4:a=C;break;case 16:a=ie;break;case 536870912:a=oe;break;default:a=ie}a=Dm(a,Em.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Em(n,i){if(ml=-1,gl=0,(Vt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Js()&&n.callbackNode!==a)return null;var u=Ot(n,n===Sn?Dn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=vl(n,u);else{i=u;var p=Vt;Vt|=2;var v=bm();(Sn!==n||Dn!==i)&&(pr=null,Qs=qt()+500,fs(n,i));do try{Yx();break}catch(X){Tm(n,X)}while(!0);au(),ul.current=v,Vt=p,hn!==null?i=0:(Sn=null,Dn=0,i=mn)}if(i!==0){if(i===2&&(p=tn(n),p!==0&&(u=p,i=Wu(n,p))),i===1)throw a=ta,fs(n,0),Hr(n,u),oi(n,qt()),a;if(i===6)Hr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!jx(p)&&(i=vl(n,u),i===2&&(v=tn(n),v!==0&&(u=v,i=Wu(n,v))),i===1))throw a=ta,fs(n,0),Hr(n,u),oi(n,qt()),a;switch(n.finishedWork=p,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:hs(n,si,pr);break;case 3:if(Hr(n,u),(u&130023424)===u&&(i=Hu+500-qt(),10<i)){if(Ot(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Qn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Qc(hs.bind(null,n,si,pr),i);break}hs(n,si,pr);break;case 4:if(Hr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,p=-1;0<u;){var b=31-Ne(u);v=1<<b,b=i[b],b>p&&(p=b),u&=~v}if(u=p,u=qt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Kx(u/1960))-u,10<u){n.timeoutHandle=Qc(hs.bind(null,n,si,pr),u);break}hs(n,si,pr);break;case 5:hs(n,si,pr);break;default:throw Error(t(329))}}}return oi(n,qt()),n.callbackNode===a?Em.bind(null,n):null}function Wu(n,i){var a=na;return n.current.memoizedState.isDehydrated&&(fs(n,i).flags|=256),n=vl(n,i),n!==2&&(i=si,si=a,i!==null&&Xu(i)),n}function Xu(n){si===null?si=n:si.push.apply(si,n)}function jx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var p=a[u],v=p.getSnapshot;p=p.value;try{if(!Ii(v(),p))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Hr(n,i){for(i&=~zu,i&=~fl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ne(i),u=1<<a;n[a]=-1,i&=~u}}function wm(n){if((Vt&6)!==0)throw Error(t(327));Js();var i=Ot(n,0);if((i&1)===0)return oi(n,qt()),null;var a=vl(n,i);if(n.tag!==0&&a===2){var u=tn(n);u!==0&&(i=u,a=Wu(n,u))}if(a===1)throw a=ta,fs(n,0),Hr(n,i),oi(n,qt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,hs(n,si,pr),oi(n,qt()),null}function Ku(n,i){var a=Vt;Vt|=1;try{return n(i)}finally{Vt=a,Vt===0&&(Qs=qt()+500,Wa&&Ur())}}function us(n){Br!==null&&Br.tag===0&&(Vt&6)===0&&Js();var i=Vt;Vt|=1;var a=Si.transition,u=Tt;try{if(Si.transition=null,Tt=1,n)return n()}finally{Tt=u,Si.transition=a,Vt=i,(Vt&6)===0&&Ur()}}function ju(){pi=Ys.current,en(Ys)}function fs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Ax(a)),hn!==null)for(a=hn.return;a!==null;){var u=a;switch(nu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Va();break;case 3:Ks(),en(ni),en(zn),mu();break;case 5:du(u);break;case 4:Ks();break;case 13:en(rn);break;case 19:en(rn);break;case 10:lu(u.type._context);break;case 22:case 23:ju()}a=a.return}if(Sn=n,hn=n=Vr(n.current,null),Dn=pi=i,mn=0,ta=null,zu=fl=cs=0,si=na=null,os!==null){for(i=0;i<os.length;i++)if(a=os[i],u=a.interleaved,u!==null){a.interleaved=null;var p=u.next,v=a.pending;if(v!==null){var b=v.next;v.next=p,u.next=b}a.pending=u}os=null}return n}function Tm(n,i){do{var a=hn;try{if(au(),el.current=rl,tl){for(var u=sn.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}tl=!1}if(ls=0,Mn=pn=sn=null,Yo=!1,Qo=0,Bu.current=null,a===null||a.return===null){mn=1,ta=i,hn=null;break}e:{var v=n,b=a.return,X=a,te=i;if(i=Dn,X.flags|=32768,te!==null&&typeof te=="object"&&typeof te.then=="function"){var pe=te,Ie=X,Ue=Ie.tag;if((Ie.mode&1)===0&&(Ue===0||Ue===11||Ue===15)){var Re=Ie.alternate;Re?(Ie.updateQueue=Re.updateQueue,Ie.memoizedState=Re.memoizedState,Ie.lanes=Re.lanes):(Ie.updateQueue=null,Ie.memoizedState=null)}var $e=Jp(b);if($e!==null){$e.flags&=-257,Zp($e,b,X,v,i),$e.mode&1&&Qp(v,pe,i),i=$e,te=pe;var st=i.updateQueue;if(st===null){var ot=new Set;ot.add(te),i.updateQueue=ot}else st.add(te);break e}else{if((i&1)===0){Qp(v,pe,i),qu();break e}te=Error(t(426))}}else if(nn&&X.mode&1){var cn=Jp(b);if(cn!==null){(cn.flags&65536)===0&&(cn.flags|=256),Zp(cn,b,X,v,i),su(js(te,X));break e}}v=te=js(te,X),mn!==4&&(mn=2),na===null?na=[v]:na.push(v),v=b;do{switch(v.tag){case 3:v.flags|=65536,i&=-i,v.lanes|=i;var ue=qp(v,te,i);Mp(v,ue);break e;case 1:X=te;var re=v.type,fe=v.stateNode;if((v.flags&128)===0&&(typeof re.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(Or===null||!Or.has(fe)))){v.flags|=65536,i&=-i,v.lanes|=i;var ze=Yp(v,X,i);Mp(v,ze);break e}}v=v.return}while(v!==null)}Rm(a)}catch(at){i=at,hn===a&&a!==null&&(hn=a=a.return);continue}break}while(!0)}function bm(){var n=ul.current;return ul.current=rl,n===null?rl:n}function qu(){(mn===0||mn===3||mn===2)&&(mn=4),Sn===null||(cs&268435455)===0&&(fl&268435455)===0||Hr(Sn,Dn)}function vl(n,i){var a=Vt;Vt|=2;var u=bm();(Sn!==n||Dn!==i)&&(pr=null,fs(n,i));do try{qx();break}catch(p){Tm(n,p)}while(!0);if(au(),Vt=a,ul.current=u,hn!==null)throw Error(t(261));return Sn=null,Dn=0,mn}function qx(){for(;hn!==null;)Cm(hn)}function Yx(){for(;hn!==null&&!On();)Cm(hn)}function Cm(n){var i=Im(n.alternate,n,pi);n.memoizedProps=n.pendingProps,i===null?Rm(n):hn=i,Bu.current=null}function Rm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Hx(a,i,pi),a!==null){hn=a;return}}else{if(a=Vx(a,i),a!==null){a.flags&=32767,hn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mn=6,hn=null;return}}if(i=i.sibling,i!==null){hn=i;return}hn=i=n}while(i!==null);mn===0&&(mn=5)}function hs(n,i,a){var u=Tt,p=Si.transition;try{Si.transition=null,Tt=1,Qx(n,i,a,u)}finally{Si.transition=p,Tt=u}return null}function Qx(n,i,a,u){do Js();while(Br!==null);if((Vt&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(Pn(n,v),n===Sn&&(hn=Sn=null,Dn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||dl||(dl=!0,Dm(ie,function(){return Js(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=Si.transition,Si.transition=null;var b=Tt;Tt=1;var X=Vt;Vt|=4,Bu.current=null,Wx(n,a),_m(a,n),gx(qc),Ca=!!jc,qc=jc=null,n.current=a,Xx(a),Bn(),Vt=X,Tt=b,Si.transition=v}else n.current=a;if(dl&&(dl=!1,Br=n,pl=p),v=n.pendingLanes,v===0&&(Or=null),Xe(a.stateNode),oi(n,qt()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)p=i[a],u(p.value,{componentStack:p.stack,digest:p.digest});if(hl)throw hl=!1,n=Vu,Vu=null,n;return(pl&1)!==0&&n.tag!==0&&Js(),v=n.pendingLanes,(v&1)!==0?n===Gu?ia++:(ia=0,Gu=n):ia=0,Ur(),null}function Js(){if(Br!==null){var n=ui(pl),i=Si.transition,a=Tt;try{if(Si.transition=null,Tt=16>n?16:n,Br===null)var u=!1;else{if(n=Br,Br=null,pl=0,(Vt&6)!==0)throw Error(t(331));var p=Vt;for(Vt|=4,rt=n.current;rt!==null;){var v=rt,b=v.child;if((rt.flags&16)!==0){var X=v.deletions;if(X!==null){for(var te=0;te<X.length;te++){var pe=X[te];for(rt=pe;rt!==null;){var Ie=rt;switch(Ie.tag){case 0:case 11:case 15:ea(8,Ie,v)}var Ue=Ie.child;if(Ue!==null)Ue.return=Ie,rt=Ue;else for(;rt!==null;){Ie=rt;var Re=Ie.sibling,$e=Ie.return;if(pm(Ie),Ie===pe){rt=null;break}if(Re!==null){Re.return=$e,rt=Re;break}rt=$e}}}var st=v.alternate;if(st!==null){var ot=st.child;if(ot!==null){st.child=null;do{var cn=ot.sibling;ot.sibling=null,ot=cn}while(ot!==null)}}rt=v}}if((v.subtreeFlags&2064)!==0&&b!==null)b.return=v,rt=b;else e:for(;rt!==null;){if(v=rt,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:ea(9,v,v.return)}var ue=v.sibling;if(ue!==null){ue.return=v.return,rt=ue;break e}rt=v.return}}var re=n.current;for(rt=re;rt!==null;){b=rt;var fe=b.child;if((b.subtreeFlags&2064)!==0&&fe!==null)fe.return=b,rt=fe;else e:for(b=re;rt!==null;){if(X=rt,(X.flags&2048)!==0)try{switch(X.tag){case 0:case 11:case 15:cl(9,X)}}catch(at){an(X,X.return,at)}if(X===b){rt=null;break e}var ze=X.sibling;if(ze!==null){ze.return=X.return,rt=ze;break e}rt=X.return}}if(Vt=p,Ur(),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(ae,n)}catch{}u=!0}return u}finally{Tt=a,Si.transition=i}}return!1}function Pm(n,i,a){i=js(a,i),i=qp(n,i,1),n=Fr(n,i,1),i=Qn(),n!==null&&(Ct(n,1,i),oi(n,i))}function an(n,i,a){if(n.tag===3)Pm(n,n,a);else for(;i!==null;){if(i.tag===3){Pm(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Or===null||!Or.has(u))){n=js(a,n),n=Yp(i,n,1),i=Fr(i,n,1),n=Qn(),i!==null&&(Ct(i,1,n),oi(i,n));break}}i=i.return}}function Jx(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Qn(),n.pingedLanes|=n.suspendedLanes&a,Sn===n&&(Dn&a)===a&&(mn===4||mn===3&&(Dn&130023424)===Dn&&500>qt()-Hu?fs(n,0):zu|=a),oi(n,i)}function Lm(n,i){i===0&&((n.mode&1)===0?i=1:(i=tt,tt<<=1,(tt&130023424)===0&&(tt=4194304)));var a=Qn();n=fr(n,i),n!==null&&(Ct(n,i,a),oi(n,a))}function Zx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Lm(n,a)}function $x(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Lm(n,a)}var Im;Im=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ni.current)ri=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ri=!1,zx(n,i,a);ri=(n.flags&131072)!==0}else ri=!1,nn&&(i.flags&1048576)!==0&&fp(i,Ka,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;al(n,i),n=i.pendingProps;var p=Bs(i,zn.current);Xs(i,a),p=xu(null,i,u,n,p,a);var v=_u();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ii(u)?(v=!0,Ga(i)):v=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,fu(i),p.updater=sl,i.stateNode=p,p._reactInternals=i,wu(i,u,n,a),i=Ru(null,i,u,!0,v,a)):(i.tag=0,nn&&v&&tu(i),Yn(null,i,p,a),i=i.child),i;case 16:u=i.elementType;e:{switch(al(n,i),n=i.pendingProps,p=u._init,u=p(u._payload),i.type=u,p=i.tag=t_(u),n=Ui(u,n),p){case 0:i=Cu(null,i,u,n,a);break e;case 1:i=rm(null,i,u,n,a);break e;case 11:i=$p(null,i,u,n,a);break e;case 14:i=em(null,i,u,Ui(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ui(u,p),Cu(n,i,u,p,a);case 1:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ui(u,p),rm(n,i,u,p,a);case 3:e:{if(sm(i),n===null)throw Error(t(387));u=i.pendingProps,v=i.memoizedState,p=v.element,yp(n,i),Za(i,u,null,a);var b=i.memoizedState;if(u=b.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=v,i.memoizedState=v,i.flags&256){p=js(Error(t(423)),i),i=om(n,i,u,a,p);break e}else if(u!==p){p=js(Error(t(424)),i),i=om(n,i,u,a,p);break e}else for(di=Lr(i.stateNode.containerInfo.firstChild),hi=i,nn=!0,Di=null,a=xp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Vs(),u===p){i=dr(n,i,a);break e}Yn(n,i,u,a)}i=i.child}return i;case 5:return Ap(i),n===null&&ru(i),u=i.type,p=i.pendingProps,v=n!==null?n.memoizedProps:null,b=p.children,Yc(u,p)?b=null:v!==null&&Yc(u,v)&&(i.flags|=32),im(n,i),Yn(n,i,b,a),i.child;case 6:return n===null&&ru(i),null;case 13:return am(n,i,a);case 4:return hu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Gs(i,null,u,a):Yn(n,i,u,a),i.child;case 11:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ui(u,p),$p(n,i,u,p,a);case 7:return Yn(n,i,i.pendingProps,a),i.child;case 8:return Yn(n,i,i.pendingProps.children,a),i.child;case 12:return Yn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,p=i.pendingProps,v=i.memoizedProps,b=p.value,Zt(Ya,u._currentValue),u._currentValue=b,v!==null)if(Ii(v.value,b)){if(v.children===p.children&&!ni.current){i=dr(n,i,a);break e}}else for(v=i.child,v!==null&&(v.return=i);v!==null;){var X=v.dependencies;if(X!==null){b=v.child;for(var te=X.firstContext;te!==null;){if(te.context===u){if(v.tag===1){te=hr(-1,a&-a),te.tag=2;var pe=v.updateQueue;if(pe!==null){pe=pe.shared;var Ie=pe.pending;Ie===null?te.next=te:(te.next=Ie.next,Ie.next=te),pe.pending=te}}v.lanes|=a,te=v.alternate,te!==null&&(te.lanes|=a),cu(v.return,a,i),X.lanes|=a;break}te=te.next}}else if(v.tag===10)b=v.type===i.type?null:v.child;else if(v.tag===18){if(b=v.return,b===null)throw Error(t(341));b.lanes|=a,X=b.alternate,X!==null&&(X.lanes|=a),cu(b,a,i),b=v.sibling}else b=v.child;if(b!==null)b.return=v;else for(b=v;b!==null;){if(b===i){b=null;break}if(v=b.sibling,v!==null){v.return=b.return,b=v;break}b=b.return}v=b}Yn(n,i,p.children,a),i=i.child}return i;case 9:return p=i.type,u=i.pendingProps.children,Xs(i,a),p=yi(p),u=u(p),i.flags|=1,Yn(n,i,u,a),i.child;case 14:return u=i.type,p=Ui(u,i.pendingProps),p=Ui(u.type,p),em(n,i,u,p,a);case 15:return tm(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ui(u,p),al(n,i),i.tag=1,ii(u)?(n=!0,Ga(i)):n=!1,Xs(i,a),Kp(i,u,p),wu(i,u,p,a),Ru(null,i,u,!0,n,a);case 19:return cm(n,i,a);case 22:return nm(n,i,a)}throw Error(t(156,i.tag))};function Dm(n,i){return Cn(n,i)}function e_(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(n,i,a,u){return new e_(n,i,a,u)}function Yu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function t_(n){if(typeof n=="function")return Yu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===N)return 11;if(n===K)return 14}return 2}function Vr(n,i){var a=n.alternate;return a===null?(a=Ai(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function xl(n,i,a,u,p,v){var b=2;if(u=n,typeof n=="function")Yu(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case F:return ds(a.children,p,v,i);case E:b=8,p|=8;break;case U:return n=Ai(12,a,i,p|2),n.elementType=U,n.lanes=v,n;case k:return n=Ai(13,a,i,p),n.elementType=k,n.lanes=v,n;case Q:return n=Ai(19,a,i,p),n.elementType=Q,n.lanes=v,n;case W:return _l(a,p,v,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Y:b=10;break e;case G:b=9;break e;case N:b=11;break e;case K:b=14;break e;case se:b=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ai(b,a,i,p),i.elementType=n,i.type=u,i.lanes=v,i}function ds(n,i,a,u){return n=Ai(7,n,u,i),n.lanes=a,n}function _l(n,i,a,u){return n=Ai(22,n,u,i),n.elementType=W,n.lanes=a,n.stateNode={isHidden:!1},n}function Qu(n,i,a){return n=Ai(6,n,null,i),n.lanes=a,n}function Ju(n,i,a){return i=Ai(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function n_(n,i,a,u,p){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fn(0),this.expirationTimes=fn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fn(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Zu(n,i,a,u,p,v,b,X,te){return n=new n_(n,i,a,X,te),i===1?(i=1,v===!0&&(i|=8)):i=0,v=Ai(3,null,null,i),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},fu(v),n}function i_(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Um(n){if(!n)return Dr;n=n._reactInternals;e:{if(kn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ii(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ii(a))return lp(n,a,i)}return i}function Nm(n,i,a,u,p,v,b,X,te){return n=Zu(a,u,!0,n,p,v,b,X,te),n.context=Um(null),a=n.current,u=Qn(),p=zr(a),v=hr(u,p),v.callback=i??null,Fr(a,v,p),n.current.lanes=p,Ct(n,p,u),oi(n,u),n}function yl(n,i,a,u){var p=i.current,v=Qn(),b=zr(p);return a=Um(a),i.context===null?i.context=a:i.pendingContext=a,i=hr(v,b),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Fr(p,i,b),n!==null&&(ki(n,p,b,v),Ja(n,p,b)),b}function Ml(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Fm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function $u(n,i){Fm(n,i),(n=n.alternate)&&Fm(n,i)}function r_(){return null}var km=typeof reportError=="function"?reportError:function(n){console.error(n)};function ef(n){this._internalRoot=n}Sl.prototype.render=ef.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));yl(n,i,null,null)},Sl.prototype.unmount=ef.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;us(function(){yl(null,n,null,null)}),i[ar]=null}};function Sl(n){this._internalRoot=n}Sl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ht();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Cr.length&&i!==0&&i<Cr[a].priority;a++);Cr.splice(a,0,n),a===0&&Ad(n)}};function tf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Om(){}function s_(n,i,a,u,p){if(p){if(typeof u=="function"){var v=u;u=function(){var pe=Ml(b);v.call(pe)}}var b=Nm(i,u,n,0,null,!1,!1,"",Om);return n._reactRootContainer=b,n[ar]=b.current,Ho(n.nodeType===8?n.parentNode:n),us(),b}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var X=u;u=function(){var pe=Ml(te);X.call(pe)}}var te=Zu(n,0,!1,null,null,!1,!1,"",Om);return n._reactRootContainer=te,n[ar]=te.current,Ho(n.nodeType===8?n.parentNode:n),us(function(){yl(i,te,a,u)}),te}function El(n,i,a,u,p){var v=a._reactRootContainer;if(v){var b=v;if(typeof p=="function"){var X=p;p=function(){var te=Ml(b);X.call(te)}}yl(i,b,n,p)}else b=s_(a,i,n,p,u);return Ml(b)}Bt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=bt(i.pendingLanes);a!==0&&(Ln(i,a|1),oi(i,qt()),(Vt&6)===0&&(Qs=qt()+500,Ur()))}break;case 13:us(function(){var u=fr(n,1);if(u!==null){var p=Qn();ki(u,n,1,p)}}),$u(n,1)}},Jt=function(n){if(n.tag===13){var i=fr(n,134217728);if(i!==null){var a=Qn();ki(i,n,134217728,a)}$u(n,134217728)}},yn=function(n){if(n.tag===13){var i=zr(n),a=fr(n,i);if(a!==null){var u=Qn();ki(a,n,i,u)}$u(n,i)}},Ht=function(){return Tt},Li=function(n,i){var a=Tt;try{return Tt=n,i()}finally{Tt=a}},pt=function(n,i,a){switch(i){case"input":if(Je(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var p=Ha(u);if(!p)throw Error(t(90));Ge(u),Je(u,p)}}}break;case"textarea":z(n,a);break;case"select":i=a.value,i!=null&&Lt(n,!!a.multiple,i,!1)}},ke=Ku,Te=us;var o_={usingClientEntryPoint:!1,Events:[Wo,ks,Ha,_e,Ke,Ku]},ra={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},a_={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=_n(n),n===null?null:n.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||r_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{ae=wl.inject(a_),Le=wl}catch{}}return ai.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o_,ai.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tf(i))throw Error(t(200));return i_(n,i,null,a)},ai.createRoot=function(n,i){if(!tf(n))throw Error(t(299));var a=!1,u="",p=km;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=Zu(n,1,!1,null,null,a,!1,u,p),n[ar]=i.current,Ho(n.nodeType===8?n.parentNode:n),new ef(i)},ai.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=_n(i),n=n===null?null:n.stateNode,n},ai.flushSync=function(n){return us(n)},ai.hydrate=function(n,i,a){if(!Al(i))throw Error(t(200));return El(null,n,i,!0,a)},ai.hydrateRoot=function(n,i,a){if(!tf(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,p=!1,v="",b=km;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=Nm(i,null,n,1,a??null,p,!1,v,b),n[ar]=i.current,Ho(n),u)for(n=0;n<u.length;n++)a=u[n],p=a._getVersion,p=p(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,p]:i.mutableSourceEagerHydrationData.push(a,p);return new Sl(i)},ai.render=function(n,i,a){if(!Al(i))throw Error(t(200));return El(null,n,i,!1,a)},ai.unmountComponentAtNode=function(n){if(!Al(n))throw Error(t(40));return n._reactRootContainer?(us(function(){El(null,null,n,!1,function(){n._reactRootContainer=null,n[ar]=null})}),!0):!1},ai.unstable_batchedUpdates=Ku,ai.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Al(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return El(n,i,a,!1,u)},ai.version="18.3.1-next-f1338f8080-20240426",ai}var Km;function v_(){if(Km)return sf.exports;Km=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),sf.exports=g_(),sf.exports}var jm;function x_(){if(jm)return Tl;jm=1;var s=v_();return Tl.createRoot=s.createRoot,Tl.hydrateRoot=s.hydrateRoot,Tl}var __=x_();const qm={field:{count:1400,size:1,drift:1},look:{trail:.35,grain:.5,glow:1},form:{circle:0},hands:{reach:1,clap:1},sound:{beat:1,sparks:1,bass:1,quiet:0}};function y_(s,e){let t=s;for(const r of e.split(".")){if(typeof t!="object"||t===null)return;t=t[r]}return typeof t=="number"?t:void 0}function bs(s,e){const t=structuredClone(s);for(const[r,o]of Object.entries(e)){if(!Number.isFinite(o)||y_(s,r)===void 0)continue;const l=r.split("."),c=l.pop();let f=t;for(const d of l)f=f[d];f[c]=o}return t}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jh="184",M_=0,Ym=1,S_=2,nc=1,A_=2,ga=3,es=0,ci=1,Gi=2,Mr=0,xo=1,Qm=2,Jm=3,Zm=4,E_=5,ys=100,w_=101,T_=102,b_=103,C_=104,R_=200,P_=201,L_=202,I_=203,th=204,nh=205,D_=206,U_=207,N_=208,F_=209,k_=210,O_=211,B_=212,z_=213,H_=214,ih=0,rh=1,sh=2,yo=3,oh=4,ah=5,lh=6,ch=7,Fg=0,V_=1,G_=2,ir=0,kg=1,Og=2,Bg=3,zg=4,Hg=5,Vg=6,Gg=7,Wg=300,Es=301,Mo=302,lf=303,cf=304,Sc=306,fc=1e3,yr=1001,uh=1002,gn=1003,W_=1004,bl=1005,wn=1006,uf=1007,Ss=1008,Ti=1009,Xg=1010,Kg=1011,Ma=1012,Zh=1013,or=1014,Xi=1015,Ar=1016,$h=1017,ed=1018,Sa=1020,jg=35902,qg=35899,Yg=1021,Qg=1022,bi=1023,Er=1026,As=1027,Jg=1028,td=1029,ws=1030,nd=1031,id=1033,ic=33776,rc=33777,sc=33778,oc=33779,fh=35840,hh=35841,dh=35842,ph=35843,mh=36196,gh=37492,vh=37496,xh=37488,_h=37489,hc=37490,yh=37491,Mh=37808,Sh=37809,Ah=37810,Eh=37811,wh=37812,Th=37813,bh=37814,Ch=37815,Rh=37816,Ph=37817,Lh=37818,Ih=37819,Dh=37820,Uh=37821,Nh=36492,Fh=36494,kh=36495,Oh=36283,Bh=36284,dc=36285,zh=36286,X_=3200,$m=0,K_=1,Zr="",wi="srgb",pc="srgb-linear",mc="linear",Yt="srgb",Zs=7680,e0=519,j_=512,q_=513,Y_=514,rd=515,Q_=516,J_=517,sd=518,Z_=519,t0=35044,n0=35048,i0="300 es",nr=2e3,gc=2001;function $_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function vc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ey(){const s=vc("canvas");return s.style.display="block",s}const r0={};function s0(...s){const e="THREE."+s.shift();console.log(e,...s)}function Zg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function xt(...s){s=Zg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Wt(...s){s=Zg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Hh(...s){const e=s.join(" ");e in r0||(r0[e]=!0,xt(...s))}function ty(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const ny={[ih]:rh,[sh]:lh,[oh]:ch,[yo]:ah,[rh]:ih,[lh]:sh,[ch]:oh,[ah]:yo};class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let o0=1234567;const _a=Math.PI/180,Aa=180/Math.PI;function Eo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Wn[s&255]+Wn[s>>8&255]+Wn[s>>16&255]+Wn[s>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[t&63|128]+Wn[t>>8&255]+"-"+Wn[t>>16&255]+Wn[t>>24&255]+Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]).toLowerCase()}function Dt(s,e,t){return Math.max(e,Math.min(t,s))}function od(s,e){return(s%e+e)%e}function iy(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function ry(s,e,t){return s!==e?(t-s)/(e-s):0}function ya(s,e,t){return(1-t)*s+t*e}function sy(s,e,t,r){return ya(s,e,1-Math.exp(-t*r))}function oy(s,e=1){return e-Math.abs(od(s,e*2)-e)}function ay(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ly(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function cy(s,e){return s+Math.floor(Math.random()*(e-s+1))}function uy(s,e){return s+Math.random()*(e-s)}function fy(s){return s*(.5-Math.random())}function hy(s){s!==void 0&&(o0=s);let e=o0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dy(s){return s*_a}function py(s){return s*Aa}function my(s){return(s&s-1)===0&&s!==0}function gy(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vy(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function xy(s,e,t,r,o){const l=Math.cos,c=Math.sin,f=l(t/2),d=c(t/2),h=l((e+r)/2),g=c((e+r)/2),x=l((e-r)/2),m=c((e-r)/2),_=l((r-e)/2),S=c((r-e)/2);switch(o){case"XYX":s.set(f*g,d*x,d*m,f*h);break;case"YZY":s.set(d*m,f*g,d*x,f*h);break;case"ZXZ":s.set(d*x,d*m,f*g,f*h);break;case"XZX":s.set(f*g,d*S,d*_,f*h);break;case"YXY":s.set(d*_,f*g,d*S,f*h);break;case"ZYZ":s.set(d*S,d*_,f*g,f*h);break;default:xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function po(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Jn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ac={DEG2RAD:_a,RAD2DEG:Aa,generateUUID:Eo,clamp:Dt,euclideanModulo:od,mapLinear:iy,inverseLerp:ry,lerp:ya,damp:sy,pingpong:oy,smoothstep:ay,smootherstep:ly,randInt:cy,randFloat:uy,randFloatSpread:fy,seededRandom:hy,degToRad:dy,radToDeg:py,isPowerOfTwo:my,ceilPowerOfTwo:gy,floorPowerOfTwo:vy,setQuaternionFromProperEuler:xy,normalize:Jn,denormalize:po},vd=class vd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vd.prototype.isVector2=!0;let Ut=vd;class rr{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let d=r[o+0],h=r[o+1],g=r[o+2],x=r[o+3],m=l[c+0],_=l[c+1],S=l[c+2],T=l[c+3];if(x!==T||d!==m||h!==_||g!==S){let y=d*m+h*_+g*S+x*T;y<0&&(m=-m,_=-_,S=-S,T=-T,y=-y);let M=1-f;if(y<.9995){const w=Math.acos(y),R=Math.sin(w);M=Math.sin(M*w)/R,f=Math.sin(f*w)/R,d=d*M+m*f,h=h*M+_*f,g=g*M+S*f,x=x*M+T*f}else{d=d*M+m*f,h=h*M+_*f,g=g*M+S*f,x=x*M+T*f;const w=1/Math.sqrt(d*d+h*h+g*g+x*x);d*=w,h*=w,g*=w,x*=w}}e[t]=d,e[t+1]=h,e[t+2]=g,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],d=r[o+1],h=r[o+2],g=r[o+3],x=l[c],m=l[c+1],_=l[c+2],S=l[c+3];return e[t]=f*S+g*x+d*_-h*m,e[t+1]=d*S+g*m+h*x-f*_,e[t+2]=h*S+g*_+f*m-d*x,e[t+3]=g*S-f*x-d*m-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(r/2),g=f(o/2),x=f(l/2),m=d(r/2),_=d(o/2),S=d(l/2);switch(c){case"XYZ":this._x=m*g*x+h*_*S,this._y=h*_*x-m*g*S,this._z=h*g*S+m*_*x,this._w=h*g*x-m*_*S;break;case"YXZ":this._x=m*g*x+h*_*S,this._y=h*_*x-m*g*S,this._z=h*g*S-m*_*x,this._w=h*g*x+m*_*S;break;case"ZXY":this._x=m*g*x-h*_*S,this._y=h*_*x+m*g*S,this._z=h*g*S+m*_*x,this._w=h*g*x-m*_*S;break;case"ZYX":this._x=m*g*x-h*_*S,this._y=h*_*x+m*g*S,this._z=h*g*S-m*_*x,this._w=h*g*x+m*_*S;break;case"YZX":this._x=m*g*x+h*_*S,this._y=h*_*x+m*g*S,this._z=h*g*S-m*_*x,this._w=h*g*x-m*_*S;break;case"XZY":this._x=m*g*x-h*_*S,this._y=h*_*x-m*g*S,this._z=h*g*S+m*_*x,this._w=h*g*x+m*_*S;break;default:xt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],d=t[9],h=t[2],g=t[6],x=t[10],m=r+f+x;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(g-d)*_,this._y=(l-h)*_,this._z=(c-o)*_}else if(r>f&&r>x){const _=2*Math.sqrt(1+r-f-x);this._w=(g-d)/_,this._x=.25*_,this._y=(o+c)/_,this._z=(l+h)/_}else if(f>x){const _=2*Math.sqrt(1+f-r-x);this._w=(l-h)/_,this._x=(o+c)/_,this._y=.25*_,this._z=(d+g)/_}else{const _=2*Math.sqrt(1+x-r-f);this._w=(c-o)/_,this._x=(l+h)/_,this._y=(d+g)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,d=t._y,h=t._z,g=t._w;return this._x=r*g+c*f+o*h-l*d,this._y=o*g+c*d+l*f-r*h,this._z=l*g+c*h+r*d-o*f,this._w=c*g-r*f-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,c=-c,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);d=Math.sin(d*h)/g,t=Math.sin(t*h)/g,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xd=class xd{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(a0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(a0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*o-f*r),g=2*(f*t-l*o),x=2*(l*r-c*t);return this.x=t+d*h+c*x-f*g,this.y=r+d*g+f*h-l*x,this.z=o+d*x+l*g-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*c-r*d,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ff.copy(this).projectOnVector(e),this.sub(ff)}reflect(e){return this.sub(ff.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xd.prototype.isVector3=!0;let $=xd;const ff=new $,a0=new rr,_d=class _d{constructor(e,t,r,o,l,c,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,h)}set(e,t,r,o,l,c,f,d,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=l,g[5]=d,g[6]=r,g[7]=c,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],d=r[6],h=r[1],g=r[4],x=r[7],m=r[2],_=r[5],S=r[8],T=o[0],y=o[3],M=o[6],w=o[1],R=o[4],P=o[7],H=o[2],I=o[5],F=o[8];return l[0]=c*T+f*w+d*H,l[3]=c*y+f*R+d*I,l[6]=c*M+f*P+d*F,l[1]=h*T+g*w+x*H,l[4]=h*y+g*R+x*I,l[7]=h*M+g*P+x*F,l[2]=m*T+_*w+S*H,l[5]=m*y+_*R+S*I,l[8]=m*M+_*P+S*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8];return t*c*g-t*f*h-r*l*g+r*f*d+o*l*h-o*c*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8],x=g*c-f*h,m=f*d-g*l,_=h*l-c*d,S=t*x+r*m+o*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=x*T,e[1]=(o*h-g*r)*T,e[2]=(f*r-o*c)*T,e[3]=m*T,e[4]=(g*t-o*d)*T,e[5]=(o*l-f*t)*T,e[6]=_*T,e[7]=(r*d-h*t)*T,e[8]=(c*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*c+h*f)+c+e,-o*h,o*d,-o*(-h*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(hf.makeScale(e,t)),this}rotate(e){return this.premultiply(hf.makeRotation(-e)),this}translate(e,t){return this.premultiply(hf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_d.prototype.isMatrix3=!0;let wt=_d;const hf=new wt,l0=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),c0=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _y(){const s={enabled:!0,workingColorSpace:pc,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Yt&&(o.r=Sr(o.r),o.g=Sr(o.g),o.b=Sr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Yt&&(o.r=_o(o.r),o.g=_o(o.g),o.b=_o(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Zr?mc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Hh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Hh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[pc]:{primaries:e,whitePoint:r,transfer:mc,toXYZ:l0,fromXYZ:c0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wi},outputColorSpaceConfig:{drawingBufferColorSpace:wi}},[wi]:{primaries:e,whitePoint:r,transfer:Yt,toXYZ:l0,fromXYZ:c0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wi}}}),s}const kt=_y();function Sr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _o(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let $s;class yy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{$s===void 0&&($s=vc("canvas")),$s.width=e.width,$s.height=e.height;const o=$s.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=$s}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Sr(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Sr(t[r]/255)*255):t[r]=Sr(t[r]);return{data:t,width:e.width,height:e.height}}else return xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let My=0;class ad{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Eo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(df(o[c].image)):l.push(df(o[c]))}else l=df(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function df(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?yy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(xt("Texture: Unable to serialize Texture."),{})}let Sy=0;const pf=new $;class jn extends Cs{constructor(e=jn.DEFAULT_IMAGE,t=jn.DEFAULT_MAPPING,r=yr,o=yr,l=wn,c=Ss,f=bi,d=Ti,h=jn.DEFAULT_ANISOTROPY,g=Zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Eo(),this.name="",this.source=new ad(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pf).x}get height(){return this.source.getSize(pf).y}get depth(){return this.source.getSize(pf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){xt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){xt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fc:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fc:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=Wg;jn.DEFAULT_ANISOTROPY=1;const yd=class yd{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],g=d[4],x=d[8],m=d[1],_=d[5],S=d[9],T=d[2],y=d[6],M=d[10];if(Math.abs(g-m)<.01&&Math.abs(x-T)<.01&&Math.abs(S-y)<.01){if(Math.abs(g+m)<.1&&Math.abs(x+T)<.1&&Math.abs(S+y)<.1&&Math.abs(h+_+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(h+1)/2,P=(_+1)/2,H=(M+1)/2,I=(g+m)/4,F=(x+T)/4,E=(S+y)/4;return R>P&&R>H?R<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(R),o=I/r,l=F/r):P>H?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=I/o,l=E/o):H<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(H),r=F/l,o=E/l),this.set(r,o,l,t),this}let w=Math.sqrt((y-S)*(y-S)+(x-T)*(x-T)+(m-g)*(m-g));return Math.abs(w)<.001&&(w=1),this.x=(y-S)/w,this.y=(x-T)/w,this.z=(m-g)/w,this.w=Math.acos((h+_+M-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this.w=Dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this.w=Dt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yd.prototype.isVector4=!0;let on=yd;class Ay extends Cs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new jn(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new ad(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sr extends Ay{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class $g extends jn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=gn,this.minFilter=gn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ey extends jn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=gn,this.minFilter=gn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mc=class Mc{constructor(e,t,r,o,l,c,f,d,h,g,x,m,_,S,T,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,h,g,x,m,_,S,T,y)}set(e,t,r,o,l,c,f,d,h,g,x,m,_,S,T,y){const M=this.elements;return M[0]=e,M[4]=t,M[8]=r,M[12]=o,M[1]=l,M[5]=c,M[9]=f,M[13]=d,M[2]=h,M[6]=g,M[10]=x,M[14]=m,M[3]=_,M[7]=S,M[11]=T,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/eo.setFromMatrixColumn(e,0).length(),l=1/eo.setFromMatrixColumn(e,1).length(),c=1/eo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),g=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const m=c*g,_=c*x,S=f*g,T=f*x;t[0]=d*g,t[4]=-d*x,t[8]=h,t[1]=_+S*h,t[5]=m-T*h,t[9]=-f*d,t[2]=T-m*h,t[6]=S+_*h,t[10]=c*d}else if(e.order==="YXZ"){const m=d*g,_=d*x,S=h*g,T=h*x;t[0]=m+T*f,t[4]=S*f-_,t[8]=c*h,t[1]=c*x,t[5]=c*g,t[9]=-f,t[2]=_*f-S,t[6]=T+m*f,t[10]=c*d}else if(e.order==="ZXY"){const m=d*g,_=d*x,S=h*g,T=h*x;t[0]=m-T*f,t[4]=-c*x,t[8]=S+_*f,t[1]=_+S*f,t[5]=c*g,t[9]=T-m*f,t[2]=-c*h,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const m=c*g,_=c*x,S=f*g,T=f*x;t[0]=d*g,t[4]=S*h-_,t[8]=m*h+T,t[1]=d*x,t[5]=T*h+m,t[9]=_*h-S,t[2]=-h,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const m=c*d,_=c*h,S=f*d,T=f*h;t[0]=d*g,t[4]=T-m*x,t[8]=S*x+_,t[1]=x,t[5]=c*g,t[9]=-f*g,t[2]=-h*g,t[6]=_*x+S,t[10]=m-T*x}else if(e.order==="XZY"){const m=c*d,_=c*h,S=f*d,T=f*h;t[0]=d*g,t[4]=-x,t[8]=h*g,t[1]=m*x+T,t[5]=c*g,t[9]=_*x-S,t[2]=S*x-_,t[6]=f*g,t[10]=T*x+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wy,e,Ty)}lookAt(e,t,r){const o=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Wr.crossVectors(r,mi),Wr.lengthSq()===0&&(Math.abs(r.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Wr.crossVectors(r,mi)),Wr.normalize(),Cl.crossVectors(mi,Wr),o[0]=Wr.x,o[4]=Cl.x,o[8]=mi.x,o[1]=Wr.y,o[5]=Cl.y,o[9]=mi.y,o[2]=Wr.z,o[6]=Cl.z,o[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],d=r[8],h=r[12],g=r[1],x=r[5],m=r[9],_=r[13],S=r[2],T=r[6],y=r[10],M=r[14],w=r[3],R=r[7],P=r[11],H=r[15],I=o[0],F=o[4],E=o[8],U=o[12],Y=o[1],G=o[5],N=o[9],k=o[13],Q=o[2],K=o[6],se=o[10],W=o[14],Z=o[3],O=o[7],B=o[11],D=o[15];return l[0]=c*I+f*Y+d*Q+h*Z,l[4]=c*F+f*G+d*K+h*O,l[8]=c*E+f*N+d*se+h*B,l[12]=c*U+f*k+d*W+h*D,l[1]=g*I+x*Y+m*Q+_*Z,l[5]=g*F+x*G+m*K+_*O,l[9]=g*E+x*N+m*se+_*B,l[13]=g*U+x*k+m*W+_*D,l[2]=S*I+T*Y+y*Q+M*Z,l[6]=S*F+T*G+y*K+M*O,l[10]=S*E+T*N+y*se+M*B,l[14]=S*U+T*k+y*W+M*D,l[3]=w*I+R*Y+P*Q+H*Z,l[7]=w*F+R*G+P*K+H*O,l[11]=w*E+R*N+P*se+H*B,l[15]=w*U+R*k+P*W+H*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],d=e[9],h=e[13],g=e[2],x=e[6],m=e[10],_=e[14],S=e[3],T=e[7],y=e[11],M=e[15],w=d*_-h*m,R=f*_-h*x,P=f*m-d*x,H=c*_-h*g,I=c*m-d*g,F=c*x-f*g;return t*(T*w-y*R+M*P)-r*(S*w-y*H+M*I)+o*(S*R-T*H+M*F)-l*(S*P-T*I+y*F)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8],x=e[9],m=e[10],_=e[11],S=e[12],T=e[13],y=e[14],M=e[15],w=t*f-r*c,R=t*d-o*c,P=t*h-l*c,H=r*d-o*f,I=r*h-l*f,F=o*h-l*d,E=g*T-x*S,U=g*y-m*S,Y=g*M-_*S,G=x*y-m*T,N=x*M-_*T,k=m*M-_*y,Q=w*k-R*N+P*G+H*Y-I*U+F*E;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/Q;return e[0]=(f*k-d*N+h*G)*K,e[1]=(o*N-r*k-l*G)*K,e[2]=(T*F-y*I+M*H)*K,e[3]=(m*I-x*F-_*H)*K,e[4]=(d*Y-c*k-h*U)*K,e[5]=(t*k-o*Y+l*U)*K,e[6]=(y*P-S*F-M*R)*K,e[7]=(g*F-m*P+_*R)*K,e[8]=(c*N-f*Y+h*E)*K,e[9]=(r*Y-t*N-l*E)*K,e[10]=(S*I-T*P+M*w)*K,e[11]=(x*P-g*I-_*w)*K,e[12]=(f*U-c*G-d*E)*K,e[13]=(t*G-r*U+o*E)*K,e[14]=(T*R-S*H-y*w)*K,e[15]=(g*H-x*R+m*w)*K,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,d=e.z,h=l*c,g=l*f;return this.set(h*c+r,h*f-o*d,h*d+o*f,0,h*f+o*d,g*f+r,g*d-o*c,0,h*d-o*f,g*d+o*c,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,h=l+l,g=c+c,x=f+f,m=l*h,_=l*g,S=l*x,T=c*g,y=c*x,M=f*x,w=d*h,R=d*g,P=d*x,H=r.x,I=r.y,F=r.z;return o[0]=(1-(T+M))*H,o[1]=(_+P)*H,o[2]=(S-R)*H,o[3]=0,o[4]=(_-P)*I,o[5]=(1-(m+M))*I,o[6]=(y+w)*I,o[7]=0,o[8]=(S+R)*F,o[9]=(y-w)*F,o[10]=(1-(m+T))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let c=eo.set(o[0],o[1],o[2]).length();const f=eo.set(o[4],o[5],o[6]).length(),d=eo.set(o[8],o[9],o[10]).length();l<0&&(c=-c),Oi.copy(this);const h=1/c,g=1/f,x=1/d;return Oi.elements[0]*=h,Oi.elements[1]*=h,Oi.elements[2]*=h,Oi.elements[4]*=g,Oi.elements[5]*=g,Oi.elements[6]*=g,Oi.elements[8]*=x,Oi.elements[9]*=x,Oi.elements[10]*=x,t.setFromRotationMatrix(Oi),r.x=c,r.y=f,r.z=d,this}makePerspective(e,t,r,o,l,c,f=nr,d=!1){const h=this.elements,g=2*l/(t-e),x=2*l/(r-o),m=(t+e)/(t-e),_=(r+o)/(r-o);let S,T;if(d)S=l/(c-l),T=c*l/(c-l);else if(f===nr)S=-(c+l)/(c-l),T=-2*c*l/(c-l);else if(f===gc)S=-c/(c-l),T=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=x,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=nr,d=!1){const h=this.elements,g=2/(t-e),x=2/(r-o),m=-(t+e)/(t-e),_=-(r+o)/(r-o);let S,T;if(d)S=1/(c-l),T=c/(c-l);else if(f===nr)S=-2/(c-l),T=-(c+l)/(c-l);else if(f===gc)S=-1/(c-l),T=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=x,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Mc.prototype.isMatrix4=!0;let ln=Mc;const eo=new $,Oi=new ln,wy=new $(0,0,0),Ty=new $(1,1,1),Wr=new $,Cl=new $,mi=new $,u0=new ln,f0=new rr;class Ts{constructor(e=0,t=0,r=0,o=Ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],d=o[1],h=o[5],g=o[9],x=o[2],m=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,_),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-x,_),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Dt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,_));break;case"XZY":this._z=Math.asin(-Dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,_),this._y=0);break;default:xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return u0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(u0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return f0.setFromEuler(this),this.setFromQuaternion(f0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ts.DEFAULT_ORDER="XYZ";class ev{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let by=0;const h0=new $,to=new rr,mr=new ln,Rl=new $,oa=new $,Cy=new $,Ry=new rr,d0=new $(1,0,0),p0=new $(0,1,0),m0=new $(0,0,1),g0={type:"added"},Py={type:"removed"},no={type:"childadded",child:null},mf={type:"childremoved",child:null};class $n extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=Eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new $,t=new Ts,r=new rr,o=new $(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ln},normalMatrix:{value:new wt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ev,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(d0,e)}rotateY(e){return this.rotateOnAxis(p0,e)}rotateZ(e){return this.rotateOnAxis(m0,e)}translateOnAxis(e,t){return h0.copy(e).applyQuaternion(this.quaternion),this.position.add(h0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(d0,e)}translateY(e){return this.translateOnAxis(p0,e)}translateZ(e){return this.translateOnAxis(m0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Rl.copy(e):Rl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(oa,Rl,this.up):mr.lookAt(Rl,oa,this.up),this.quaternion.setFromRotationMatrix(mr),o&&(mr.extractRotation(o.matrixWorld),to.setFromRotationMatrix(mr),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(g0),no.child=e,this.dispatchEvent(no),no.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Py),mf.child=e,this.dispatchEvent(mf),mf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(g0),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,Cy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,Ry,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,g=d.length;h<g;h++){const x=d[h];l(e.shapes,x)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),g=c(e.images),x=c(e.shapes),m=c(e.skeletons),_=c(e.animations),S=c(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),m.length>0&&(r.skeletons=m),_.length>0&&(r.animations=_),S.length>0&&(r.nodes=S)}return r.object=o,r;function c(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}$n.DEFAULT_UP=new $(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ki extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ly={type:"move"};class gf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,r),M=this._getHandJoint(h,T);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const g=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],m=g.position.distanceTo(x.position),_=.02,S=.005;h.inputState.pinching&&m>_+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=_-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Ly)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ki;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xr={h:0,s:0,l:0},Pl={h:0,s:0,l:0};function vf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Xt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=kt.workingColorSpace){return this.r=e,this.g=t,this.b=r,kt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=kt.workingColorSpace){if(e=od(e,1),t=Dt(t,0,1),r=Dt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=vf(c,l,e+1/3),this.g=vf(c,l,e),this.b=vf(c,l,e-1/3)}return kt.colorSpaceToWorking(this,o),this}setStyle(e,t=wi){function r(l){l!==void 0&&parseFloat(l)<1&&xt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:xt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);xt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wi){const r=tv[e.toLowerCase()];return r!==void 0?this.setHex(r,t):xt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wi){return kt.workingToColorSpace(Xn.copy(this),e),Math.round(Dt(Xn.r*255,0,255))*65536+Math.round(Dt(Xn.g*255,0,255))*256+Math.round(Dt(Xn.b*255,0,255))}getHexString(e=wi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.workingToColorSpace(Xn.copy(this),t);const r=Xn.r,o=Xn.g,l=Xn.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let d,h;const g=(f+c)/2;if(f===c)d=0,h=0;else{const x=c-f;switch(h=g<=.5?x/(c+f):x/(2-c-f),c){case r:d=(o-l)/x+(o<l?6:0);break;case o:d=(l-r)/x+2;break;case l:d=(r-o)/x+4;break}d/=6}return e.h=d,e.s=h,e.l=g,e}getRGB(e,t=kt.workingColorSpace){return kt.workingToColorSpace(Xn.copy(this),t),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=wi){kt.workingToColorSpace(Xn.copy(this),e);const t=Xn.r,r=Xn.g,o=Xn.b;return e!==wi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Xr),this.setHSL(Xr.h+e,Xr.s+t,Xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Xr),e.getHSL(Pl);const r=ya(Xr.h,Pl.h,t),o=ya(Xr.s,Pl.s,t),l=ya(Xr.l,Pl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new Xt;Xt.NAMES=tv;class Ac extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ts,this.environmentIntensity=1,this.environmentRotation=new Ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bi=new $,gr=new $,xf=new $,vr=new $,io=new $,ro=new $,v0=new $,_f=new $,yf=new $,Mf=new $,Sf=new on,Af=new on,Ef=new on;class Wi{constructor(e=new $,t=new $,r=new $){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Bi.subVectors(e,t),o.cross(Bi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Bi.subVectors(o,t),gr.subVectors(r,t),xf.subVectors(e,t);const c=Bi.dot(Bi),f=Bi.dot(gr),d=Bi.dot(xf),h=gr.dot(gr),g=gr.dot(xf),x=c*h-f*f;if(x===0)return l.set(0,0,0),null;const m=1/x,_=(h*d-f*g)*m,S=(c*g-f*d)*m;return l.set(1-_-S,S,_)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,vr)===null?!1:vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getInterpolation(e,t,r,o,l,c,f,d){return this.getBarycoord(e,t,r,o,vr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,vr.x),d.addScaledVector(c,vr.y),d.addScaledVector(f,vr.z),d)}static getInterpolatedAttribute(e,t,r,o,l,c){return Sf.setScalar(0),Af.setScalar(0),Ef.setScalar(0),Sf.fromBufferAttribute(e,t),Af.fromBufferAttribute(e,r),Ef.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Sf,l.x),c.addScaledVector(Af,l.y),c.addScaledVector(Ef,l.z),c}static isFrontFacing(e,t,r,o){return Bi.subVectors(r,t),gr.subVectors(e,t),Bi.cross(gr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),Bi.cross(gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Wi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;io.subVectors(o,r),ro.subVectors(l,r),_f.subVectors(e,r);const d=io.dot(_f),h=ro.dot(_f);if(d<=0&&h<=0)return t.copy(r);yf.subVectors(e,o);const g=io.dot(yf),x=ro.dot(yf);if(g>=0&&x<=g)return t.copy(o);const m=d*x-g*h;if(m<=0&&d>=0&&g<=0)return c=d/(d-g),t.copy(r).addScaledVector(io,c);Mf.subVectors(e,l);const _=io.dot(Mf),S=ro.dot(Mf);if(S>=0&&_<=S)return t.copy(l);const T=_*h-d*S;if(T<=0&&h>=0&&S<=0)return f=h/(h-S),t.copy(r).addScaledVector(ro,f);const y=g*S-_*x;if(y<=0&&x-g>=0&&_-S>=0)return v0.subVectors(l,o),f=(x-g)/(x-g+(_-S)),t.copy(o).addScaledVector(v0,f);const M=1/(y+T+m);return c=T*M,f=m*M,t.copy(r).addScaledVector(io,c).addScaledVector(ro,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ea{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,zi):zi.fromBufferAttribute(l,c),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ll.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ll.copy(r.boundingBox)),Ll.applyMatrix4(e.matrixWorld),this.union(Ll)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),Il.subVectors(this.max,aa),so.subVectors(e.a,aa),oo.subVectors(e.b,aa),ao.subVectors(e.c,aa),Kr.subVectors(oo,so),jr.subVectors(ao,oo),ps.subVectors(so,ao);let t=[0,-Kr.z,Kr.y,0,-jr.z,jr.y,0,-ps.z,ps.y,Kr.z,0,-Kr.x,jr.z,0,-jr.x,ps.z,0,-ps.x,-Kr.y,Kr.x,0,-jr.y,jr.x,0,-ps.y,ps.x,0];return!wf(t,so,oo,ao,Il)||(t=[1,0,0,0,1,0,0,0,1],!wf(t,so,oo,ao,Il))?!1:(Dl.crossVectors(Kr,jr),t=[Dl.x,Dl.y,Dl.z],wf(t,so,oo,ao,Il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xr=[new $,new $,new $,new $,new $,new $,new $,new $],zi=new $,Ll=new Ea,so=new $,oo=new $,ao=new $,Kr=new $,jr=new $,ps=new $,aa=new $,Il=new $,Dl=new $,ms=new $;function wf(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){ms.fromArray(s,l);const f=o.x*Math.abs(ms.x)+o.y*Math.abs(ms.y)+o.z*Math.abs(ms.z),d=e.dot(ms),h=t.dot(ms),g=r.dot(ms);if(Math.max(-Math.max(d,h,g),Math.min(d,h,g))>f)return!1}return!0}const dn=new $,Ul=new Ut;let Iy=0;class Gt extends Cs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Iy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=t0,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ul.fromBufferAttribute(this,t),Ul.applyMatrix3(e),this.setXY(t,Ul.x,Ul.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=po(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Jn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=po(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=po(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=po(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=po(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),r=Jn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),r=Jn(r,this.array),o=Jn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),r=Jn(r,this.array),o=Jn(o,this.array),l=Jn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==t0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class nv extends Gt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class iv extends Gt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Un extends Gt{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Dy=new Ea,la=new $,Tf=new $;class wo{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Dy.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const t=la.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(la,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(Tf)),this.expandByPoint(la.copy(e.center).sub(Tf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Uy=0;const Ei=new ln,bf=new $n,lo=new $,gi=new Ea,ca=new Ea,En=new $;class un extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($_(e)?iv:nv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new wt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,r){return Ei.makeTranslation(e,t,r),this.applyMatrix4(Ei),this}scale(e,t,r){return Ei.makeScale(e,t,r),this.applyMatrix4(Ei),this}lookAt(e){return bf.lookAt(e),bf.updateMatrix(),this.applyMatrix4(bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Un(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];gi.setFromBufferAttribute(l),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];ca.setFromBufferAttribute(f),this.morphTargetsRelative?(En.addVectors(gi.min,ca.min),gi.expandByPoint(En),En.addVectors(gi.max,ca.max),gi.expandByPoint(En)):(gi.expandByPoint(ca.min),gi.expandByPoint(ca.max))}gi.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)En.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(En));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)En.fromBufferAttribute(f,h),d&&(lo.fromBufferAttribute(e,h),En.add(lo)),o=Math.max(o,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let E=0;E<r.count;E++)f[E]=new $,d[E]=new $;const h=new $,g=new $,x=new $,m=new Ut,_=new Ut,S=new Ut,T=new $,y=new $;function M(E,U,Y){h.fromBufferAttribute(r,E),g.fromBufferAttribute(r,U),x.fromBufferAttribute(r,Y),m.fromBufferAttribute(l,E),_.fromBufferAttribute(l,U),S.fromBufferAttribute(l,Y),g.sub(h),x.sub(h),_.sub(m),S.sub(m);const G=1/(_.x*S.y-S.x*_.y);isFinite(G)&&(T.copy(g).multiplyScalar(S.y).addScaledVector(x,-_.y).multiplyScalar(G),y.copy(x).multiplyScalar(_.x).addScaledVector(g,-S.x).multiplyScalar(G),f[E].add(T),f[U].add(T),f[Y].add(T),d[E].add(y),d[U].add(y),d[Y].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let E=0,U=w.length;E<U;++E){const Y=w[E],G=Y.start,N=Y.count;for(let k=G,Q=G+N;k<Q;k+=3)M(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const R=new $,P=new $,H=new $,I=new $;function F(E){H.fromBufferAttribute(o,E),I.copy(H);const U=f[E];R.copy(U),R.sub(H.multiplyScalar(H.dot(U))).normalize(),P.crossVectors(I,U);const G=P.dot(d[E])<0?-1:1;c.setXYZW(E,R.x,R.y,R.z,G)}for(let E=0,U=w.length;E<U;++E){const Y=w[E],G=Y.start,N=Y.count;for(let k=G,Q=G+N;k<Q;k+=3)F(e.getX(k+0)),F(e.getX(k+1)),F(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let m=0,_=r.count;m<_;m++)r.setXYZ(m,0,0,0);const o=new $,l=new $,c=new $,f=new $,d=new $,h=new $,g=new $,x=new $;if(e)for(let m=0,_=e.count;m<_;m+=3){const S=e.getX(m+0),T=e.getX(m+1),y=e.getX(m+2);o.fromBufferAttribute(t,S),l.fromBufferAttribute(t,T),c.fromBufferAttribute(t,y),g.subVectors(c,l),x.subVectors(o,l),g.cross(x),f.fromBufferAttribute(r,S),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,y),f.add(g),d.add(g),h.add(g),r.setXYZ(S,f.x,f.y,f.z),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,_=t.count;m<_;m+=3)o.fromBufferAttribute(t,m+0),l.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),g.subVectors(c,l),x.subVectors(o,l),g.cross(x),r.setXYZ(m+0,g.x,g.y,g.z),r.setXYZ(m+1,g.x,g.y,g.z),r.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(f,d){const h=f.array,g=f.itemSize,x=f.normalized,m=new h.constructor(d.length*g);let _=0,S=0;for(let T=0,y=d.length;T<y;T++){f.isInterleavedBufferAttribute?_=d[T]*f.data.stride+f.offset:_=d[T]*g;for(let M=0;M<g;M++)m[S++]=h[_++]}return new Gt(m,g,x)}if(this.index===null)return xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let g=0,x=h.length;g<x;g++){const m=h[g],_=e(m,r);d.push(_)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],g=[];for(let x=0,m=h.length;x<m;x++){const _=h[x];g.push(_.toJSON(e.data))}g.length>0&&(o[d]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(t))}const l=e.morphAttributes;for(const h in l){const g=[],x=l[h];for(let m=0,_=x.length;m<_;m++)g.push(x[m].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,g=c.length;h<g;h++){const x=c[h];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Ny=0;class To extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Eo(),this.name="",this.type="Material",this.blending=xo,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=nh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){xt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){xt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(r.blending=this.blending),this.side!==es&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==th&&(r.blendSrc=this.blendSrc),this.blendDst!==nh&&(r.blendDst=this.blendDst),this.blendEquation!==ys&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==e0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _r=new $,Cf=new $,Nl=new $,qr=new $,Rf=new $,Fl=new $,Pf=new $;class ld{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_r)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_r.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_r.copy(this.origin).addScaledVector(this.direction,t),_r.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Cf.copy(e).add(t).multiplyScalar(.5),Nl.copy(t).sub(e).normalize(),qr.copy(this.origin).sub(Cf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Nl),f=qr.dot(this.direction),d=-qr.dot(Nl),h=qr.lengthSq(),g=Math.abs(1-c*c);let x,m,_,S;if(g>0)if(x=c*d-f,m=c*f-d,S=l*g,x>=0)if(m>=-S)if(m<=S){const T=1/g;x*=T,m*=T,_=x*(x+c*m+2*f)+m*(c*x+m+2*d)+h}else m=l,x=Math.max(0,-(c*m+f)),_=-x*x+m*(m+2*d)+h;else m=-l,x=Math.max(0,-(c*m+f)),_=-x*x+m*(m+2*d)+h;else m<=-S?(x=Math.max(0,-(-c*l+f)),m=x>0?-l:Math.min(Math.max(-l,-d),l),_=-x*x+m*(m+2*d)+h):m<=S?(x=0,m=Math.min(Math.max(-l,-d),l),_=m*(m+2*d)+h):(x=Math.max(0,-(c*l+f)),m=x>0?l:Math.min(Math.max(-l,-d),l),_=-x*x+m*(m+2*d)+h);else m=c>0?-l:l,x=Math.max(0,-(c*m+f)),_=-x*x+m*(m+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Cf).addScaledVector(Nl,m),_}intersectSphere(e,t){_r.subVectors(e.center,this.origin);const r=_r.dot(this.direction),o=_r.dot(_r)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,d=r+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,d;const h=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,m=this.origin;return h>=0?(r=(e.min.x-m.x)*h,o=(e.max.x-m.x)*h):(r=(e.max.x-m.x)*h,o=(e.min.x-m.x)*h),g>=0?(l=(e.min.y-m.y)*g,c=(e.max.y-m.y)*g):(l=(e.max.y-m.y)*g,c=(e.min.y-m.y)*g),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),x>=0?(f=(e.min.z-m.z)*x,d=(e.max.z-m.z)*x):(f=(e.max.z-m.z)*x,d=(e.min.z-m.z)*x),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,_r)!==null}intersectTriangle(e,t,r,o,l){Rf.subVectors(t,e),Fl.subVectors(r,e),Pf.crossVectors(Rf,Fl);let c=this.direction.dot(Pf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;qr.subVectors(this.origin,e);const d=f*this.direction.dot(Fl.crossVectors(qr,Fl));if(d<0)return null;const h=f*this.direction.dot(Rf.cross(qr));if(h<0||d+h>c)return null;const g=-f*qr.dot(Pf);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rv extends To{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ts,this.combine=Fg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const x0=new ln,gs=new ld,kl=new wo,_0=new $,Ol=new $,Bl=new $,zl=new $,Lf=new $,Hl=new $,y0=new $,Vl=new $;class Nn extends $n{constructor(e=new un,t=new rv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Hl.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const g=f[d],x=l[d];g!==0&&(Lf.fromBufferAttribute(x,e),c?Hl.addScaledVector(Lf,g):Hl.addScaledVector(Lf.sub(t),g))}t.add(Hl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),kl.copy(r.boundingSphere),kl.applyMatrix4(l),gs.copy(e.ray).recast(e.near),!(kl.containsPoint(gs.origin)===!1&&(gs.intersectSphere(kl,_0)===null||gs.origin.distanceToSquared(_0)>(e.far-e.near)**2))&&(x0.copy(l).invert(),gs.copy(e.ray).applyMatrix4(x0),!(r.boundingBox!==null&&gs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,g=l.attributes.uv1,x=l.attributes.normal,m=l.groups,_=l.drawRange;if(f!==null)if(Array.isArray(c))for(let S=0,T=m.length;S<T;S++){const y=m[S],M=c[y.materialIndex],w=Math.max(y.start,_.start),R=Math.min(f.count,Math.min(y.start+y.count,_.start+_.count));for(let P=w,H=R;P<H;P+=3){const I=f.getX(P),F=f.getX(P+1),E=f.getX(P+2);o=Gl(this,M,e,r,h,g,x,I,F,E),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const S=Math.max(0,_.start),T=Math.min(f.count,_.start+_.count);for(let y=S,M=T;y<M;y+=3){const w=f.getX(y),R=f.getX(y+1),P=f.getX(y+2);o=Gl(this,c,e,r,h,g,x,w,R,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let S=0,T=m.length;S<T;S++){const y=m[S],M=c[y.materialIndex],w=Math.max(y.start,_.start),R=Math.min(d.count,Math.min(y.start+y.count,_.start+_.count));for(let P=w,H=R;P<H;P+=3){const I=P,F=P+1,E=P+2;o=Gl(this,M,e,r,h,g,x,I,F,E),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const S=Math.max(0,_.start),T=Math.min(d.count,_.start+_.count);for(let y=S,M=T;y<M;y+=3){const w=y,R=y+1,P=y+2;o=Gl(this,c,e,r,h,g,x,w,R,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function Fy(s,e,t,r,o,l,c,f){let d;if(e.side===ci?d=r.intersectTriangle(c,l,o,!0,f):d=r.intersectTriangle(o,l,c,e.side===es,f),d===null)return null;Vl.copy(f),Vl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Vl);return h<t.near||h>t.far?null:{distance:h,point:Vl.clone(),object:s}}function Gl(s,e,t,r,o,l,c,f,d,h){s.getVertexPosition(f,Ol),s.getVertexPosition(d,Bl),s.getVertexPosition(h,zl);const g=Fy(s,e,t,r,Ol,Bl,zl,y0);if(g){const x=new $;Wi.getBarycoord(y0,Ol,Bl,zl,x),o&&(g.uv=Wi.getInterpolatedAttribute(o,f,d,h,x,new Ut)),l&&(g.uv1=Wi.getInterpolatedAttribute(l,f,d,h,x,new Ut)),c&&(g.normal=Wi.getInterpolatedAttribute(c,f,d,h,x,new $),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const m={a:f,b:d,c:h,normal:new $,materialIndex:0};Wi.getNormal(Ol,Bl,zl,m.normal),g.face=m,g.barycoord=x}return g}class sv extends jn{constructor(e=null,t=1,r=1,o,l,c,f,d,h=gn,g=gn,x,m){super(null,c,f,d,h,g,o,l,x,m),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const If=new $,ky=new $,Oy=new wt;class _s{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=If.subVectors(r,t).cross(ky.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(If),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Oy.getNormalMatrix(e),o=this.coplanarPoint(If).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new wo,By=new Ut(.5,.5),Wl=new $;class ov{constructor(e=new _s,t=new _s,r=new _s,o=new _s,l=new _s,c=new _s){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=nr,r=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],d=l[2],h=l[3],g=l[4],x=l[5],m=l[6],_=l[7],S=l[8],T=l[9],y=l[10],M=l[11],w=l[12],R=l[13],P=l[14],H=l[15];if(o[0].setComponents(h-c,_-g,M-S,H-w).normalize(),o[1].setComponents(h+c,_+g,M+S,H+w).normalize(),o[2].setComponents(h+f,_+x,M+T,H+R).normalize(),o[3].setComponents(h-f,_-x,M-T,H-R).normalize(),r)o[4].setComponents(d,m,y,P).normalize(),o[5].setComponents(h-d,_-m,M-y,H-P).normalize();else if(o[4].setComponents(h-d,_-m,M-y,H-P).normalize(),t===nr)o[5].setComponents(h+d,_+m,M+y,H+P).normalize();else if(t===gc)o[5].setComponents(d,m,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);const t=By.distanceTo(e.center);return vs.radius=.7071067811865476+t,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Wl.x=o.normal.x>0?e.max.x:e.min.x,Wl.y=o.normal.y>0?e.max.y:e.min.y,Wl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Wl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class av extends To{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xc=new $,_c=new $,M0=new ln,ua=new ld,Xl=new wo,Df=new $,S0=new $;class lv extends $n{constructor(e=new un,t=new av){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)xc.fromBufferAttribute(t,o-1),_c.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=xc.distanceTo(_c);e.setAttribute("lineDistance",new Un(r,1))}else xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Xl.copy(r.boundingSphere),Xl.applyMatrix4(o),Xl.radius+=l,e.ray.intersectsSphere(Xl)===!1)return;M0.copy(o).invert(),ua.copy(e.ray).applyMatrix4(M0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,g=r.index,m=r.attributes.position;if(g!==null){const _=Math.max(0,c.start),S=Math.min(g.count,c.start+c.count);for(let T=_,y=S-1;T<y;T+=h){const M=g.getX(T),w=g.getX(T+1),R=Kl(this,e,ua,d,M,w,T);R&&t.push(R)}if(this.isLineLoop){const T=g.getX(S-1),y=g.getX(_),M=Kl(this,e,ua,d,T,y,S-1);M&&t.push(M)}}else{const _=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let T=_,y=S-1;T<y;T+=h){const M=Kl(this,e,ua,d,T,T+1,T);M&&t.push(M)}if(this.isLineLoop){const T=Kl(this,e,ua,d,S-1,_,S-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Kl(s,e,t,r,o,l,c){const f=s.geometry.attributes.position;if(xc.fromBufferAttribute(f,o),_c.fromBufferAttribute(f,l),t.distanceSqToSegment(xc,_c,Df,S0)>r)return;Df.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Df);if(!(h<e.near||h>e.far))return{distance:h,point:S0.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const A0=new $,E0=new $;class zy extends lv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)A0.fromBufferAttribute(t,o),E0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+A0.distanceTo(E0);e.setAttribute("lineDistance",new Un(r,1))}else xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vh extends To{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const w0=new ln,Gh=new ld,jl=new wo,ql=new $;class Wh extends $n{constructor(e=new un,t=new Vh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),jl.copy(r.boundingSphere),jl.applyMatrix4(o),jl.radius+=l,e.ray.intersectsSphere(jl)===!1)return;w0.copy(o).invert(),Gh.copy(e.ray).applyMatrix4(w0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=r.index,x=r.attributes.position;if(h!==null){const m=Math.max(0,c.start),_=Math.min(h.count,c.start+c.count);for(let S=m,T=_;S<T;S++){const y=h.getX(S);ql.fromBufferAttribute(x,y),T0(ql,y,d,o,e,t,this)}}else{const m=Math.max(0,c.start),_=Math.min(x.count,c.start+c.count);for(let S=m,T=_;S<T;S++)ql.fromBufferAttribute(x,S),T0(ql,S,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function T0(s,e,t,r,o,l,c){const f=Gh.distanceSqToPoint(s);if(f<t){const d=new $;Gh.closestPointToPoint(s,d),d.applyMatrix4(r);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class cv extends jn{constructor(e=[],t=Es,r,o,l,c,f,d,h,g){super(e,t,r,o,l,c,f,d,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hy extends jn{constructor(e,t,r,o,l,c,f,d,h){super(e,t,r,o,l,c,f,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class So extends jn{constructor(e,t,r=or,o,l,c,f=gn,d=gn,h,g=Er,x=1){if(g!==Er&&g!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:x};super(m,o,l,c,f,d,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ad(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Vy extends So{constructor(e,t=or,r=Es,o,l,c=gn,f=gn,d,h=Er){const g={width:e,height:e,depth:1},x=[g,g,g,g,g,g];super(e,e,t,r,o,l,c,f,d,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class uv extends jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wa extends un{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const d=[],h=[],g=[],x=[];let m=0,_=0;S("z","y","x",-1,-1,r,t,e,c,l,0),S("z","y","x",1,-1,r,t,-e,c,l,1),S("x","z","y",1,1,e,r,t,o,c,2),S("x","z","y",1,-1,e,r,-t,o,c,3),S("x","y","z",1,-1,e,t,r,o,l,4),S("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Un(h,3)),this.setAttribute("normal",new Un(g,3)),this.setAttribute("uv",new Un(x,2));function S(T,y,M,w,R,P,H,I,F,E,U){const Y=P/F,G=H/E,N=P/2,k=H/2,Q=I/2,K=F+1,se=E+1;let W=0,Z=0;const O=new $;for(let B=0;B<se;B++){const D=B*G-k;for(let q=0;q<K;q++){const Se=q*Y-N;O[T]=Se*w,O[y]=D*R,O[M]=Q,h.push(O.x,O.y,O.z),O[T]=0,O[y]=0,O[M]=I>0?1:-1,g.push(O.x,O.y,O.z),x.push(q/F),x.push(1-B/E),W+=1}}for(let B=0;B<E;B++)for(let D=0;D<F;D++){const q=m+D+K*B,Se=m+D+K*(B+1),ge=m+(D+1)+K*(B+1),me=m+(D+1)+K*B;d.push(q,Se,me),d.push(Se,ge,me),Z+=6}f.addGroup(_,Z,U),_+=Z,m+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class cd extends un{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],c=[];f(o),h(r),g(),this.setAttribute("position",new Un(l,3)),this.setAttribute("normal",new Un(l.slice(),3)),this.setAttribute("uv",new Un(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(w){const R=new $,P=new $,H=new $;for(let I=0;I<t.length;I+=3)_(t[I+0],R),_(t[I+1],P),_(t[I+2],H),d(R,P,H,w)}function d(w,R,P,H){const I=H+1,F=[];for(let E=0;E<=I;E++){F[E]=[];const U=w.clone().lerp(P,E/I),Y=R.clone().lerp(P,E/I),G=I-E;for(let N=0;N<=G;N++)N===0&&E===I?F[E][N]=U:F[E][N]=U.clone().lerp(Y,N/G)}for(let E=0;E<I;E++)for(let U=0;U<2*(I-E)-1;U++){const Y=Math.floor(U/2);U%2===0?(m(F[E][Y+1]),m(F[E+1][Y]),m(F[E][Y])):(m(F[E][Y+1]),m(F[E+1][Y+1]),m(F[E+1][Y]))}}function h(w){const R=new $;for(let P=0;P<l.length;P+=3)R.x=l[P+0],R.y=l[P+1],R.z=l[P+2],R.normalize().multiplyScalar(w),l[P+0]=R.x,l[P+1]=R.y,l[P+2]=R.z}function g(){const w=new $;for(let R=0;R<l.length;R+=3){w.x=l[R+0],w.y=l[R+1],w.z=l[R+2];const P=y(w)/2/Math.PI+.5,H=M(w)/Math.PI+.5;c.push(P,1-H)}S(),x()}function x(){for(let w=0;w<c.length;w+=6){const R=c[w+0],P=c[w+2],H=c[w+4],I=Math.max(R,P,H),F=Math.min(R,P,H);I>.9&&F<.1&&(R<.2&&(c[w+0]+=1),P<.2&&(c[w+2]+=1),H<.2&&(c[w+4]+=1))}}function m(w){l.push(w.x,w.y,w.z)}function _(w,R){const P=w*3;R.x=e[P+0],R.y=e[P+1],R.z=e[P+2]}function S(){const w=new $,R=new $,P=new $,H=new $,I=new Ut,F=new Ut,E=new Ut;for(let U=0,Y=0;U<l.length;U+=9,Y+=6){w.set(l[U+0],l[U+1],l[U+2]),R.set(l[U+3],l[U+4],l[U+5]),P.set(l[U+6],l[U+7],l[U+8]),I.set(c[Y+0],c[Y+1]),F.set(c[Y+2],c[Y+3]),E.set(c[Y+4],c[Y+5]),H.copy(w).add(R).add(P).divideScalar(3);const G=y(H);T(I,Y+0,w,G),T(F,Y+2,R,G),T(E,Y+4,P,G)}}function T(w,R,P,H){H<0&&w.x===1&&(c[R]=w.x-1),P.x===0&&P.z===0&&(c[R]=H/2/Math.PI+.5)}function y(w){return Math.atan2(w.z,-w.x)}function M(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cd(e.vertices,e.indices,e.radius,e.detail)}}class Gy{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){xt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,d=l-1,h;for(;f<=d;)if(o=Math.floor(f+(d-f)/2),h=r[o]-c,h<0)f=o+1;else if(h>0)d=o-1;else{d=o;break}if(o=d,r[o]===c)return o/(l-1);const g=r[o],m=r[o+1]-g,_=(c-g)/m;return(o+_)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),d=t||(c.isVector2?new Ut:new $);return d.copy(f).sub(c).normalize(),d}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new $,o=[],l=[],c=[],f=new $,d=new ln;for(let _=0;_<=e;_++){const S=_/e;o[_]=this.getTangentAt(S,new $)}l[0]=new $,c[0]=new $;let h=Number.MAX_VALUE;const g=Math.abs(o[0].x),x=Math.abs(o[0].y),m=Math.abs(o[0].z);g<=h&&(h=g,r.set(1,0,0)),x<=h&&(h=x,r.set(0,1,0)),m<=h&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let _=1;_<=e;_++){if(l[_]=l[_-1].clone(),c[_]=c[_-1].clone(),f.crossVectors(o[_-1],o[_]),f.length()>Number.EPSILON){f.normalize();const S=Math.acos(Dt(o[_-1].dot(o[_]),-1,1));l[_].applyMatrix4(d.makeRotationAxis(f,S))}c[_].crossVectors(o[_],l[_])}if(t===!0){let _=Math.acos(Dt(l[0].dot(l[e]),-1,1));_/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(_=-_);for(let S=1;S<=e;S++)l[S].applyMatrix4(d.makeRotationAxis(o[S],_*S)),c[S].crossVectors(o[S],l[S])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function ud(){let s=0,e=0,t=0,r=0;function o(l,c,f,d){s=l,e=f,t=-3*l+3*c-2*f-d,r=2*l-2*c+f+d}return{initCatmullRom:function(l,c,f,d,h){o(c,f,h*(f-l),h*(d-c))},initNonuniformCatmullRom:function(l,c,f,d,h,g,x){let m=(c-l)/h-(f-l)/(h+g)+(f-c)/g,_=(f-c)/g-(d-c)/(g+x)+(d-f)/x;m*=g,_*=g,o(c,f,m,_)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const b0=new $,C0=new $,Uf=new ud,Nf=new ud,Ff=new ud;class Wy extends Gy{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new $){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),d=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:d===0&&f===l-1&&(f=l-2,d=1);let h,g;this.closed||f>0?h=o[(f-1)%l]:(C0.subVectors(o[0],o[1]).add(o[0]),h=C0);const x=o[f%l],m=o[(f+1)%l];if(this.closed||f+2<l?g=o[(f+2)%l]:(b0.subVectors(o[l-1],o[l-2]).add(o[l-1]),g=b0),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let S=Math.pow(h.distanceToSquared(x),_),T=Math.pow(x.distanceToSquared(m),_),y=Math.pow(m.distanceToSquared(g),_);T<1e-4&&(T=1),S<1e-4&&(S=T),y<1e-4&&(y=T),Uf.initNonuniformCatmullRom(h.x,x.x,m.x,g.x,S,T,y),Nf.initNonuniformCatmullRom(h.y,x.y,m.y,g.y,S,T,y),Ff.initNonuniformCatmullRom(h.z,x.z,m.z,g.z,S,T,y)}else this.curveType==="catmullrom"&&(Uf.initCatmullRom(h.x,x.x,m.x,g.x,this.tension),Nf.initCatmullRom(h.y,x.y,m.y,g.y,this.tension),Ff.initCatmullRom(h.z,x.z,m.z,g.z,this.tension));return r.set(Uf.calc(d),Nf.calc(d),Ff.calc(d)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new $().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class fd extends cd{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fd(e.radius,e.detail)}}class Ec extends un{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,g=d+1,x=e/f,m=t/d,_=[],S=[],T=[],y=[];for(let M=0;M<g;M++){const w=M*m-c;for(let R=0;R<h;R++){const P=R*x-l;S.push(P,-w,0),T.push(0,0,1),y.push(R/f),y.push(1-M/d)}}for(let M=0;M<d;M++)for(let w=0;w<f;w++){const R=w+h*M,P=w+h*(M+1),H=w+1+h*(M+1),I=w+1+h*M;_.push(R,P,I),_.push(P,H,I)}this.setIndex(_),this.setAttribute("position",new Un(S,3)),this.setAttribute("normal",new Un(T,3)),this.setAttribute("uv",new Un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.width,e.height,e.widthSegments,e.heightSegments)}}class yc extends un{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(c+f,Math.PI);let h=0;const g=[],x=new $,m=new $,_=[],S=[],T=[],y=[];for(let M=0;M<=r;M++){const w=[],R=M/r;let P=0;M===0&&c===0?P=.5/t:M===r&&d===Math.PI&&(P=-.5/t);for(let H=0;H<=t;H++){const I=H/t;x.x=-e*Math.cos(o+I*l)*Math.sin(c+R*f),x.y=e*Math.cos(c+R*f),x.z=e*Math.sin(o+I*l)*Math.sin(c+R*f),S.push(x.x,x.y,x.z),m.copy(x).normalize(),T.push(m.x,m.y,m.z),y.push(I+P,1-R),w.push(h++)}g.push(w)}for(let M=0;M<r;M++)for(let w=0;w<t;w++){const R=g[M][w+1],P=g[M][w],H=g[M+1][w],I=g[M+1][w+1];(M!==0||c>0)&&_.push(R,P,I),(M!==r-1||d<Math.PI)&&_.push(P,H,I)}this.setIndex(_),this.setAttribute("position",new Un(S,3)),this.setAttribute("normal",new Un(T,3)),this.setAttribute("uv",new Un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ao(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(R0(o))o.isRenderTargetTexture?(xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(R0(o[0])){const l=[];for(let c=0,f=o.length;c<f;c++)l[c]=o[c].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Zn(s){const e={};for(let t=0;t<s.length;t++){const r=Ao(s[t]);for(const o in r)e[o]=r[o]}return e}function R0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Xy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function fv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:kt.workingColorSpace}const Ky={clone:Ao,merge:Zn};var jy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends To{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jy,this.fragmentShader=qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ao(e.uniforms),this.uniformsGroups=Xy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Yy extends vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qy extends To{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=X_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jy extends To{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yl=new $,Ql=new rr,$i=new $;class hv extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yl,Ql,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yl,Ql,$i.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Yl,Ql,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yl,Ql,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yr=new $,P0=new Ut,L0=new Ut;class li extends hv{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Aa*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z),Yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z)}getViewSize(e,t){return this.getViewBounds(e,P0,L0),t.subVectors(L0,P0)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_a*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;l+=c.offsetX*o/d,t-=c.offsetY*r/h,o*=c.width/d,r*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class hd extends hv{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const co=-90,uo=1;class Zy extends $n{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new li(co,uo,e,t);o.layers=this.layers,this.add(o);const l=new li(co,uo,e,t);l.layers=this.layers,this.add(l);const c=new li(co,uo,e,t);c.layers=this.layers,this.add(c);const f=new li(co,uo,e,t);f.layers=this.layers,this.add(f);const d=new li(co,uo,e,t);d.layers=this.layers,this.add(d);const h=new li(co,uo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,d]=t;for(const h of t)this.remove(h);if(e===nr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===gc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,h,g]=this.children,x=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(x,m,_),e.xr.enabled=S,r.texture.needsPMREMUpdate=!0}}class $y extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Md=class Md{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Md.prototype.isMatrix2=!0;let I0=Md;function D0(s,e,t,r){const o=eM(r);switch(t){case Yg:return s*e;case Jg:return s*e/o.components*o.byteLength;case td:return s*e/o.components*o.byteLength;case ws:return s*e*2/o.components*o.byteLength;case nd:return s*e*2/o.components*o.byteLength;case Qg:return s*e*3/o.components*o.byteLength;case bi:return s*e*4/o.components*o.byteLength;case id:return s*e*4/o.components*o.byteLength;case ic:case rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case sc:case oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hh:case ph:return Math.max(s,16)*Math.max(e,8)/4;case fh:case dh:return Math.max(s,8)*Math.max(e,8)/2;case mh:case gh:case xh:case _h:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vh:case hc:case yh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case wh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Th:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case bh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Nh:case Fh:case kh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Oh:case Bh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case dc:case zh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function eM(s){switch(s){case Ti:case Xg:return{byteLength:1,components:1};case Ma:case Kg:case Ar:return{byteLength:2,components:1};case $h:case ed:return{byteLength:2,components:4};case or:case Zh:case Xi:return{byteLength:4,components:1};case jg:case qg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jh}}));typeof window<"u"&&(window.__THREE__?xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dv(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function tM(s){const e=new WeakMap;function t(f,d){const h=f.array,g=f.usage,x=h.byteLength,m=s.createBuffer();s.bindBuffer(d,m),s.bufferData(d,h,g),f.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?_=s.HALF_FLOAT:_=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,d,h){const g=d.array,x=d.updateRanges;if(s.bindBuffer(h,f),x.length===0)s.bufferSubData(h,0,g);else{x.sort((_,S)=>_.start-S.start);let m=0;for(let _=1;_<x.length;_++){const S=x[m],T=x[_];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++m,x[m]=T)}x.length=m+1;for(let _=0,S=x.length;_<S;_++){const T=x[_];s.bufferSubData(h,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(s.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:l,update:c}}var nM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,SM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,AM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,EM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,wM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,TM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,CM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IM="gl_FragColor = linearToOutputTexel( gl_FragColor );",DM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,FM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,WM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,qM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,YM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$M=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,e1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,t1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,n1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,i1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,s1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,h1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,M1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,S1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,w1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,T1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,I1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,H1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,V1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,W1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,K1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,J1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_S=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ES=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,US=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pt={alphahash_fragment:nM,alphahash_pars_fragment:iM,alphamap_fragment:rM,alphamap_pars_fragment:sM,alphatest_fragment:oM,alphatest_pars_fragment:aM,aomap_fragment:lM,aomap_pars_fragment:cM,batching_pars_vertex:uM,batching_vertex:fM,begin_vertex:hM,beginnormal_vertex:dM,bsdfs:pM,iridescence_fragment:mM,bumpmap_pars_fragment:gM,clipping_planes_fragment:vM,clipping_planes_pars_fragment:xM,clipping_planes_pars_vertex:_M,clipping_planes_vertex:yM,color_fragment:MM,color_pars_fragment:SM,color_pars_vertex:AM,color_vertex:EM,common:wM,cube_uv_reflection_fragment:TM,defaultnormal_vertex:bM,displacementmap_pars_vertex:CM,displacementmap_vertex:RM,emissivemap_fragment:PM,emissivemap_pars_fragment:LM,colorspace_fragment:IM,colorspace_pars_fragment:DM,envmap_fragment:UM,envmap_common_pars_fragment:NM,envmap_pars_fragment:FM,envmap_pars_vertex:kM,envmap_physical_pars_fragment:qM,envmap_vertex:OM,fog_vertex:BM,fog_pars_vertex:zM,fog_fragment:HM,fog_pars_fragment:VM,gradientmap_pars_fragment:GM,lightmap_pars_fragment:WM,lights_lambert_fragment:XM,lights_lambert_pars_fragment:KM,lights_pars_begin:jM,lights_toon_fragment:YM,lights_toon_pars_fragment:QM,lights_phong_fragment:JM,lights_phong_pars_fragment:ZM,lights_physical_fragment:$M,lights_physical_pars_fragment:e1,lights_fragment_begin:t1,lights_fragment_maps:n1,lights_fragment_end:i1,lightprobes_pars_fragment:r1,logdepthbuf_fragment:s1,logdepthbuf_pars_fragment:o1,logdepthbuf_pars_vertex:a1,logdepthbuf_vertex:l1,map_fragment:c1,map_pars_fragment:u1,map_particle_fragment:f1,map_particle_pars_fragment:h1,metalnessmap_fragment:d1,metalnessmap_pars_fragment:p1,morphinstance_vertex:m1,morphcolor_vertex:g1,morphnormal_vertex:v1,morphtarget_pars_vertex:x1,morphtarget_vertex:_1,normal_fragment_begin:y1,normal_fragment_maps:M1,normal_pars_fragment:S1,normal_pars_vertex:A1,normal_vertex:E1,normalmap_pars_fragment:w1,clearcoat_normal_fragment_begin:T1,clearcoat_normal_fragment_maps:b1,clearcoat_pars_fragment:C1,iridescence_pars_fragment:R1,opaque_fragment:P1,packing:L1,premultiplied_alpha_fragment:I1,project_vertex:D1,dithering_fragment:U1,dithering_pars_fragment:N1,roughnessmap_fragment:F1,roughnessmap_pars_fragment:k1,shadowmap_pars_fragment:O1,shadowmap_pars_vertex:B1,shadowmap_vertex:z1,shadowmask_pars_fragment:H1,skinbase_vertex:V1,skinning_pars_vertex:G1,skinning_vertex:W1,skinnormal_vertex:X1,specularmap_fragment:K1,specularmap_pars_fragment:j1,tonemapping_fragment:q1,tonemapping_pars_fragment:Y1,transmission_fragment:Q1,transmission_pars_fragment:J1,uv_pars_fragment:Z1,uv_pars_vertex:$1,uv_vertex:eS,worldpos_vertex:tS,background_vert:nS,background_frag:iS,backgroundCube_vert:rS,backgroundCube_frag:sS,cube_vert:oS,cube_frag:aS,depth_vert:lS,depth_frag:cS,distance_vert:uS,distance_frag:fS,equirect_vert:hS,equirect_frag:dS,linedashed_vert:pS,linedashed_frag:mS,meshbasic_vert:gS,meshbasic_frag:vS,meshlambert_vert:xS,meshlambert_frag:_S,meshmatcap_vert:yS,meshmatcap_frag:MS,meshnormal_vert:SS,meshnormal_frag:AS,meshphong_vert:ES,meshphong_frag:wS,meshphysical_vert:TS,meshphysical_frag:bS,meshtoon_vert:CS,meshtoon_frag:RS,points_vert:PS,points_frag:LS,shadow_vert:IS,shadow_frag:DS,sprite_vert:US,sprite_frag:NS},Ye={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},tr={basic:{uniforms:Zn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Zn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Zn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Zn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Zn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Zn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Zn([Ye.points,Ye.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Zn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Zn([Ye.common,Ye.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Zn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Zn([Ye.sprite,Ye.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distance:{uniforms:Zn([Ye.common,Ye.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distance_vert,fragmentShader:Pt.distance_frag},shadow:{uniforms:Zn([Ye.lights,Ye.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};tr.physical={uniforms:Zn([tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const Jl={r:0,b:0,g:0},FS=new ln,pv=new wt;pv.set(-1,0,0,0,1,0,0,0,1);function kS(s,e,t,r,o,l){const c=new Xt(0);let f=o===!0?0:1,d,h,g=null,x=0,m=null;function _(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){const P=w.backgroundBlurriness>0;R=e.get(R,P)}return R}function S(w){let R=!1;const P=_(w);P===null?y(c,f):P&&P.isColor&&(y(P,1),R=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?t.buffers.color.setClear(0,0,0,1,l):H==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function T(w,R){const P=_(R);P&&(P.isCubeTexture||P.mapping===Sc)?(h===void 0&&(h=new Nn(new wa(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Ao(tr.backgroundCube.uniforms),vertexShader:tr.backgroundCube.vertexShader,fragmentShader:tr.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(H,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=P,h.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(FS.makeRotationFromEuler(R.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(pv),h.material.toneMapped=kt.getTransfer(P.colorSpace)!==Yt,(g!==P||x!==P.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,g=P,x=P.version,m=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new Nn(new Ec(2,2),new vi({name:"BackgroundMaterial",uniforms:Ao(tr.background.uniforms),vertexShader:tr.background.vertexShader,fragmentShader:tr.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,d.material.toneMapped=kt.getTransfer(P.colorSpace)!==Yt,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||x!==P.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,g=P,x=P.version,m=s.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null))}function y(w,R){w.getRGB(Jl,fv(s)),t.buffers.color.setClear(Jl.r,Jl.g,Jl.b,R,l)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(w,R=1){c.set(w),f=R,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(w){f=w,y(c,f)},render:S,addToRenderList:T,dispose:M}}function OS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=m(null);let l=o,c=!1;function f(G,N,k,Q,K){let se=!1;const W=x(G,Q,k,N);l!==W&&(l=W,h(l.object)),se=_(G,Q,k,K),se&&S(G,Q,k,K),K!==null&&e.update(K,s.ELEMENT_ARRAY_BUFFER),(se||c)&&(c=!1,P(G,N,k,Q),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function d(){return s.createVertexArray()}function h(G){return s.bindVertexArray(G)}function g(G){return s.deleteVertexArray(G)}function x(G,N,k,Q){const K=Q.wireframe===!0;let se=r[N.id];se===void 0&&(se={},r[N.id]=se);const W=G.isInstancedMesh===!0?G.id:0;let Z=se[W];Z===void 0&&(Z={},se[W]=Z);let O=Z[k.id];O===void 0&&(O={},Z[k.id]=O);let B=O[K];return B===void 0&&(B=m(d()),O[K]=B),B}function m(G){const N=[],k=[],Q=[];for(let K=0;K<t;K++)N[K]=0,k[K]=0,Q[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:Q,object:G,attributes:{},index:null}}function _(G,N,k,Q){const K=l.attributes,se=N.attributes;let W=0;const Z=k.getAttributes();for(const O in Z)if(Z[O].location>=0){const D=K[O];let q=se[O];if(q===void 0&&(O==="instanceMatrix"&&G.instanceMatrix&&(q=G.instanceMatrix),O==="instanceColor"&&G.instanceColor&&(q=G.instanceColor)),D===void 0||D.attribute!==q||q&&D.data!==q.data)return!0;W++}return l.attributesNum!==W||l.index!==Q}function S(G,N,k,Q){const K={},se=N.attributes;let W=0;const Z=k.getAttributes();for(const O in Z)if(Z[O].location>=0){let D=se[O];D===void 0&&(O==="instanceMatrix"&&G.instanceMatrix&&(D=G.instanceMatrix),O==="instanceColor"&&G.instanceColor&&(D=G.instanceColor));const q={};q.attribute=D,D&&D.data&&(q.data=D.data),K[O]=q,W++}l.attributes=K,l.attributesNum=W,l.index=Q}function T(){const G=l.newAttributes;for(let N=0,k=G.length;N<k;N++)G[N]=0}function y(G){M(G,0)}function M(G,N){const k=l.newAttributes,Q=l.enabledAttributes,K=l.attributeDivisors;k[G]=1,Q[G]===0&&(s.enableVertexAttribArray(G),Q[G]=1),K[G]!==N&&(s.vertexAttribDivisor(G,N),K[G]=N)}function w(){const G=l.newAttributes,N=l.enabledAttributes;for(let k=0,Q=N.length;k<Q;k++)N[k]!==G[k]&&(s.disableVertexAttribArray(k),N[k]=0)}function R(G,N,k,Q,K,se,W){W===!0?s.vertexAttribIPointer(G,N,k,K,se):s.vertexAttribPointer(G,N,k,Q,K,se)}function P(G,N,k,Q){T();const K=Q.attributes,se=k.getAttributes(),W=N.defaultAttributeValues;for(const Z in se){const O=se[Z];if(O.location>=0){let B=K[Z];if(B===void 0&&(Z==="instanceMatrix"&&G.instanceMatrix&&(B=G.instanceMatrix),Z==="instanceColor"&&G.instanceColor&&(B=G.instanceColor)),B!==void 0){const D=B.normalized,q=B.itemSize,Se=e.get(B);if(Se===void 0)continue;const ge=Se.buffer,me=Se.type,j=Se.bytesPerElement,ce=me===s.INT||me===s.UNSIGNED_INT||B.gpuType===Zh;if(B.isInterleavedBufferAttribute){const le=B.data,Ee=le.stride,we=B.offset;if(le.isInstancedInterleavedBuffer){for(let ve=0;ve<O.locationSize;ve++)M(O.location+ve,le.meshPerAttribute);G.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ve=0;ve<O.locationSize;ve++)y(O.location+ve);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let ve=0;ve<O.locationSize;ve++)R(O.location+ve,q/O.locationSize,me,D,Ee*j,(we+q/O.locationSize*ve)*j,ce)}else{if(B.isInstancedBufferAttribute){for(let le=0;le<O.locationSize;le++)M(O.location+le,B.meshPerAttribute);G.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let le=0;le<O.locationSize;le++)y(O.location+le);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let le=0;le<O.locationSize;le++)R(O.location+le,q/O.locationSize,me,D,q*j,q/O.locationSize*le*j,ce)}}else if(W!==void 0){const D=W[Z];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(O.location,D);break;case 3:s.vertexAttrib3fv(O.location,D);break;case 4:s.vertexAttrib4fv(O.location,D);break;default:s.vertexAttrib1fv(O.location,D)}}}}w()}function H(){U();for(const G in r){const N=r[G];for(const k in N){const Q=N[k];for(const K in Q){const se=Q[K];for(const W in se)g(se[W].object),delete se[W];delete Q[K]}}delete r[G]}}function I(G){if(r[G.id]===void 0)return;const N=r[G.id];for(const k in N){const Q=N[k];for(const K in Q){const se=Q[K];for(const W in se)g(se[W].object),delete se[W];delete Q[K]}}delete r[G.id]}function F(G){for(const N in r){const k=r[N];for(const Q in k){const K=k[Q];if(K[G.id]===void 0)continue;const se=K[G.id];for(const W in se)g(se[W].object),delete se[W];delete K[G.id]}}}function E(G){for(const N in r){const k=r[N],Q=G.isInstancedMesh===!0?G.id:0,K=k[Q];if(K!==void 0){for(const se in K){const W=K[se];for(const Z in W)g(W[Z].object),delete W[Z];delete K[se]}delete k[Q],Object.keys(k).length===0&&delete r[N]}}}function U(){Y(),c=!0,l!==o&&(l=o,h(l.object))}function Y(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:U,resetDefaultState:Y,dispose:H,releaseStatesOfGeometry:I,releaseStatesOfObject:E,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:y,disableUnusedAttributes:w}}function BS(s,e,t){let r;function o(d){r=d}function l(d,h){s.drawArrays(r,d,h),t.update(h,r,1)}function c(d,h,g){g!==0&&(s.drawArraysInstanced(r,d,h,g),t.update(h,r,g))}function f(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,g);let m=0;for(let _=0;_<g;_++)m+=h[_];t.update(m,r,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function zS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==bi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const E=F===Ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ti&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Xi&&!E)}function d(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=d(h);g!==h&&(xt("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const x=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:P,maxSamples:H,samples:I}}function HS(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new _s,f=new wt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(x,m){const _=x.length!==0||m||r!==0||o;return o=m,r=x.length,_},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,m){t=g(x,m,0)},this.setState=function(x,m,_){const S=x.clippingPlanes,T=x.clipIntersection,y=x.clipShadows,M=s.get(x);if(!o||S===null||S.length===0||l&&!y)l?g(null):h();else{const w=l?0:r,R=w*4;let P=M.clippingState||null;d.value=P,P=g(S,m,R,_);for(let H=0;H!==R;++H)P[H]=t[H];M.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,m,_,S){const T=x!==null?x.length:0;let y=null;if(T!==0){if(y=d.value,S!==!0||y===null){const M=_+T*4,w=m.matrixWorldInverse;f.getNormalMatrix(w),(y===null||y.length<M)&&(y=new Float32Array(M));for(let R=0,P=_;R!==T;++R,P+=4)c.copy(x[R]).applyMatrix4(w,f),c.normal.toArray(y,P),y[P+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}const $r=4,U0=[.125,.215,.35,.446,.526,.582],Ms=20,VS=256,fa=new hd,N0=new Xt;let kf=null,Of=0,Bf=0,zf=!1;const GS=new $;class F0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:f=GS}=l;kf=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),Bf=this._renderer.getActiveMipmapLevel(),zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kf,Of,Bf),this._renderer.xr.enabled=zf,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===Mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kf=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),Bf=this._renderer.getActiveMipmapLevel(),zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Ar,format:bi,colorSpace:pc,depthBuffer:!1},o=k0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=k0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=WS(l)),this._blurMaterial=KS(l,e,t),this._ggxMaterial=XS(l,e,t)}return o}_compileMaterial(e){const t=new Nn(new un,e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,r,o,l){const d=new li(90,1,t,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,m=x.autoClear,_=x.toneMapping;x.getClearColor(N0),x.toneMapping=ir,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nn(new wa,new rv({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let M=!1;const w=e.background;w?w.isColor&&(y.color.copy(w),e.background=null,M=!0):(y.color.copy(N0),M=!0);for(let R=0;R<6;R++){const P=R%3;P===0?(d.up.set(0,h[R],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+g[R],l.y,l.z)):P===1?(d.up.set(0,0,h[R]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+g[R],l.z)):(d.up.set(0,h[R],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+g[R]));const H=this._cubeSize;fo(o,P*H,R>2?H:0,H,H),x.setRenderTarget(o),M&&x.render(T,d),x.render(e,d)}x.toneMapping=_,x.autoClear=m,e.background=w}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Es||e.mapping===Mo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=B0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O0());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;fo(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,fa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,h=r/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),x=Math.sqrt(h*h-g*g),m=0+h*1.25,_=x*m,{_lodMax:S}=this,T=this._sizeLods[r],y=3*T*(r>S-$r?r-S+$r:0),M=4*(this._cubeSize-T);d.envMap.value=e.texture,d.roughness.value=_,d.mipInt.value=S-t,fo(l,y,M,3*T,2*T),o.setRenderTarget(l),o.render(f,fa),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=S-r,fo(e,y,M,3*T,2*T),o.setRenderTarget(e),o.render(f,fa)}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Wt("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[o];x.material=h;const m=h.uniforms,_=this._sizeLods[r]-1,S=isFinite(l)?Math.PI/(2*_):2*Math.PI/(2*Ms-1),T=l/S,y=isFinite(l)?1+Math.floor(g*T):Ms;y>Ms&&xt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ms}`);const M=[];let w=0;for(let F=0;F<Ms;++F){const E=F/T,U=Math.exp(-E*E/2);M.push(U),F===0?w+=U:F<y&&(w+=2*U)}for(let F=0;F<M.length;F++)M[F]=M[F]/w;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=M,m.latitudinal.value=c==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:R}=this;m.dTheta.value=S,m.mipInt.value=R-r;const P=this._sizeLods[o],H=3*P*(o>R-$r?o-R+$r:0),I=4*(this._cubeSize-P);fo(t,H,I,3*P,2*P),d.setRenderTarget(t),d.render(x,fa)}}function WS(s){const e=[],t=[],r=[];let o=s;const l=s-$r+1+U0.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);e.push(f);let d=1/f;c>s-$r?d=U0[c-s+$r-1]:c===0&&(d=0),t.push(d);const h=1/(f-2),g=-h,x=1+h,m=[g,g,x,g,x,x,g,g,x,x,g,x],_=6,S=6,T=3,y=2,M=1,w=new Float32Array(T*S*_),R=new Float32Array(y*S*_),P=new Float32Array(M*S*_);for(let I=0;I<_;I++){const F=I%3*2/3-1,E=I>2?0:-1,U=[F,E,0,F+2/3,E,0,F+2/3,E+1,0,F,E,0,F+2/3,E+1,0,F,E+1,0];w.set(U,T*S*I),R.set(m,y*S*I);const Y=[I,I,I,I,I,I];P.set(Y,M*S*I)}const H=new un;H.setAttribute("position",new Gt(w,T)),H.setAttribute("uv",new Gt(R,y)),H.setAttribute("faceIndex",new Gt(P,M)),r.push(new Nn(H,null)),o>$r&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function k0(s,e,t){const r=new sr(s,e,t);return r.texture.mapping=Sc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fo(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function XS(s,e,t){return new vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:VS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function KS(s,e,t){const r=new Float32Array(Ms),o=new $(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function O0(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function B0(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class mv extends sr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new cv(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new wa(5,5,5),l=new vi({name:"CubemapFromEquirect",uniforms:Ao(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ci,blending:Mr});l.uniforms.tEquirect.value=t;const c=new Nn(o,l),f=t.minFilter;return t.minFilter===Ss&&(t.minFilter=wn),new Zy(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}function jS(s){let e=new WeakMap,t=new WeakMap,r=null;function o(m,_=!1){return m==null?null:_?c(m):l(m)}function l(m){if(m&&m.isTexture){const _=m.mapping;if(_===lf||_===cf)if(e.has(m)){const S=e.get(m).texture;return f(S,m.mapping)}else{const S=m.image;if(S&&S.height>0){const T=new mv(S.height);return T.fromEquirectangularTexture(s,m),e.set(m,T),m.addEventListener("dispose",h),f(T.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const _=m.mapping,S=_===lf||_===cf,T=_===Es||_===Mo;if(S||T){let y=t.get(m);const M=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==M)return r===null&&(r=new F0(s)),y=S?r.fromEquirectangular(m,y):r.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const w=m.image;return S&&w&&w.height>0||T&&w&&d(w)?(r===null&&(r=new F0(s)),y=S?r.fromEquirectangular(m):r.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",g),y.texture):null}}}return m}function f(m,_){return _===lf?m.mapping=Es:_===cf&&(m.mapping=Mo),m}function d(m){let _=0;const S=6;for(let T=0;T<S;T++)m[T]!==void 0&&_++;return _===S}function h(m){const _=m.target;_.removeEventListener("dispose",h);const S=e.get(_);S!==void 0&&(e.delete(_),S.dispose())}function g(m){const _=m.target;_.removeEventListener("dispose",g);const S=t.get(_);S!==void 0&&(t.delete(_),S.dispose())}function x(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:x}}function qS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Hh("WebGLRenderer: "+r+" extension not supported."),o}}}function YS(s,e,t,r){const o={},l=new WeakMap;function c(x){const m=x.target;m.index!==null&&e.remove(m.index);for(const S in m.attributes)e.remove(m.attributes[S]);m.removeEventListener("dispose",c),delete o[m.id];const _=l.get(m);_&&(e.remove(_),l.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(x,m){return o[m.id]===!0||(m.addEventListener("dispose",c),o[m.id]=!0,t.memory.geometries++),m}function d(x){const m=x.attributes;for(const _ in m)e.update(m[_],s.ARRAY_BUFFER)}function h(x){const m=[],_=x.index,S=x.attributes.position;let T=0;if(S===void 0)return;if(_!==null){const w=_.array;T=_.version;for(let R=0,P=w.length;R<P;R+=3){const H=w[R+0],I=w[R+1],F=w[R+2];m.push(H,I,I,F,F,H)}}else{const w=S.array;T=S.version;for(let R=0,P=w.length/3-1;R<P;R+=3){const H=R+0,I=R+1,F=R+2;m.push(H,I,I,F,F,H)}}const y=new(S.count>=65535?iv:nv)(m,1);y.version=T;const M=l.get(x);M&&e.remove(M),l.set(x,y)}function g(x){const m=l.get(x);if(m){const _=x.index;_!==null&&m.version<_.version&&h(x)}else h(x);return l.get(x)}return{get:f,update:d,getWireframeAttribute:g}}function QS(s,e,t){let r;function o(x){r=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function d(x,m){s.drawElements(r,m,l,x*c),t.update(m,r,1)}function h(x,m,_){_!==0&&(s.drawElementsInstanced(r,m,l,x*c,_),t.update(m,r,_))}function g(x,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,l,x,0,_);let T=0;for(let y=0;y<_;y++)T+=m[y];t.update(T,r,1)}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=g}function JS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Wt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function ZS(s,e,t){const r=new WeakMap,o=new on;function l(c,f,d){const h=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=g!==void 0?g.length:0;let m=r.get(f);if(m===void 0||m.count!==x){let Y=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",Y)};var _=Y;m!==void 0&&m.texture.dispose();const S=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let P=0;S===!0&&(P=1),T===!0&&(P=2),y===!0&&(P=3);let H=f.attributes.position.count*P,I=1;H>e.maxTextureSize&&(I=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const F=new Float32Array(H*I*4*x),E=new $g(F,H,I,x);E.type=Xi,E.needsUpdate=!0;const U=P*4;for(let G=0;G<x;G++){const N=M[G],k=w[G],Q=R[G],K=H*I*4*G;for(let se=0;se<N.count;se++){const W=se*U;S===!0&&(o.fromBufferAttribute(N,se),F[K+W+0]=o.x,F[K+W+1]=o.y,F[K+W+2]=o.z,F[K+W+3]=0),T===!0&&(o.fromBufferAttribute(k,se),F[K+W+4]=o.x,F[K+W+5]=o.y,F[K+W+6]=o.z,F[K+W+7]=0),y===!0&&(o.fromBufferAttribute(Q,se),F[K+W+8]=o.x,F[K+W+9]=o.y,F[K+W+10]=o.z,F[K+W+11]=Q.itemSize===4?o.w:1)}}m={count:x,texture:E,size:new Ut(H,I)},r.set(f,m),f.addEventListener("dispose",Y)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let S=0;for(let y=0;y<h.length;y++)S+=h[y];const T=f.morphTargetsRelative?1:1-S;d.getUniforms().setValue(s,"morphTargetBaseInfluence",T),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:l}}function $S(s,e,t,r,o){let l=new WeakMap;function c(h){const g=o.render.frame,x=h.geometry,m=e.get(h,x);if(l.get(m)!==g&&(e.update(m),l.set(m,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==g&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,g))),h.isSkinnedMesh){const _=h.skeleton;l.get(_)!==g&&(_.update(),l.set(_,g))}return m}function f(){l=new WeakMap}function d(h){const g=h.target;g.removeEventListener("dispose",d),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:f}}const eA={[kg]:"LINEAR_TONE_MAPPING",[Og]:"REINHARD_TONE_MAPPING",[Bg]:"CINEON_TONE_MAPPING",[zg]:"ACES_FILMIC_TONE_MAPPING",[Vg]:"AGX_TONE_MAPPING",[Gg]:"NEUTRAL_TONE_MAPPING",[Hg]:"CUSTOM_TONE_MAPPING"};function tA(s,e,t,r,o){const l=new sr(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new So(e,t):void 0}),c=new sr(e,t,{type:Ar,depthBuffer:!1,stencilBuffer:!1}),f=new un;f.setAttribute("position",new Un([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Un([0,2,0,0,2,0],2));const d=new Yy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Nn(f,d),g=new hd(-1,1,1,-1,0,1);let x=null,m=null,_=!1,S,T=null,y=[],M=!1;this.setSize=function(w,R){l.setSize(w,R),c.setSize(w,R);for(let P=0;P<y.length;P++){const H=y[P];H.setSize&&H.setSize(w,R)}},this.setEffects=function(w){y=w,M=y.length>0&&y[0].isRenderPass===!0;const R=l.width,P=l.height;for(let H=0;H<y.length;H++){const I=y[H];I.setSize&&I.setSize(R,P)}},this.begin=function(w,R){if(_||w.toneMapping===ir&&y.length===0)return!1;if(T=R,R!==null){const P=R.width,H=R.height;(l.width!==P||l.height!==H)&&this.setSize(P,H)}return M===!1&&w.setRenderTarget(l),S=w.toneMapping,w.toneMapping=ir,!0},this.hasRenderPass=function(){return M},this.end=function(w,R){w.toneMapping=S,_=!0;let P=l,H=c;for(let I=0;I<y.length;I++){const F=y[I];if(F.enabled!==!1&&(F.render(w,H,P,R),F.needsSwap!==!1)){const E=P;P=H,H=E}}if(x!==w.outputColorSpace||m!==w.toneMapping){x=w.outputColorSpace,m=w.toneMapping,d.defines={},kt.getTransfer(x)===Yt&&(d.defines.SRGB_TRANSFER="");const I=eA[m];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=P.texture,w.setRenderTarget(T),w.render(h,g),T=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),f.dispose(),d.dispose()}}const gv=new jn,Xh=new So(1,1),vv=new $g,xv=new Ey,_v=new cv,z0=[],H0=[],V0=new Float32Array(16),G0=new Float32Array(9),W0=new Float32Array(4);function bo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=z0[o];if(l===void 0&&(l=new Float32Array(o),z0[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function vn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function xn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Tc(s,e){let t=H0[e];t===void 0&&(t=new Int32Array(e),H0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function nA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function iA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2fv(this.addr,e),xn(t,e)}}function rA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;s.uniform3fv(this.addr,e),xn(t,e)}}function sA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4fv(this.addr,e),xn(t,e)}}function oA(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,r))return;W0.set(r),s.uniformMatrix2fv(this.addr,!1,W0),xn(t,r)}}function aA(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,r))return;G0.set(r),s.uniformMatrix3fv(this.addr,!1,G0),xn(t,r)}}function lA(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,r))return;V0.set(r),s.uniformMatrix4fv(this.addr,!1,V0),xn(t,r)}}function cA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function uA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2iv(this.addr,e),xn(t,e)}}function fA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3iv(this.addr,e),xn(t,e)}}function hA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4iv(this.addr,e),xn(t,e)}}function dA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function pA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2uiv(this.addr,e),xn(t,e)}}function mA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3uiv(this.addr,e),xn(t,e)}}function gA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4uiv(this.addr,e),xn(t,e)}}function vA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Xh.compareFunction=t.isReversedDepthBuffer()?sd:rd,l=Xh):l=gv,t.setTexture2D(e||l,o)}function xA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||xv,o)}function _A(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||_v,o)}function yA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||vv,o)}function MA(s){switch(s){case 5126:return nA;case 35664:return iA;case 35665:return rA;case 35666:return sA;case 35674:return oA;case 35675:return aA;case 35676:return lA;case 5124:case 35670:return cA;case 35667:case 35671:return uA;case 35668:case 35672:return fA;case 35669:case 35673:return hA;case 5125:return dA;case 36294:return pA;case 36295:return mA;case 36296:return gA;case 35678:case 36198:case 36298:case 36306:case 35682:return vA;case 35679:case 36299:case 36307:return xA;case 35680:case 36300:case 36308:case 36293:return _A;case 36289:case 36303:case 36311:case 36292:return yA}}function SA(s,e){s.uniform1fv(this.addr,e)}function AA(s,e){const t=bo(e,this.size,2);s.uniform2fv(this.addr,t)}function EA(s,e){const t=bo(e,this.size,3);s.uniform3fv(this.addr,t)}function wA(s,e){const t=bo(e,this.size,4);s.uniform4fv(this.addr,t)}function TA(s,e){const t=bo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function bA(s,e){const t=bo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function CA(s,e){const t=bo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function RA(s,e){s.uniform1iv(this.addr,e)}function PA(s,e){s.uniform2iv(this.addr,e)}function LA(s,e){s.uniform3iv(this.addr,e)}function IA(s,e){s.uniform4iv(this.addr,e)}function DA(s,e){s.uniform1uiv(this.addr,e)}function UA(s,e){s.uniform2uiv(this.addr,e)}function NA(s,e){s.uniform3uiv(this.addr,e)}function FA(s,e){s.uniform4uiv(this.addr,e)}function kA(s,e,t){const r=this.cache,o=e.length,l=Tc(t,o);vn(r,l)||(s.uniform1iv(this.addr,l),xn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=Xh:c=gv;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,l[f])}function OA(s,e,t){const r=this.cache,o=e.length,l=Tc(t,o);vn(r,l)||(s.uniform1iv(this.addr,l),xn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||xv,l[c])}function BA(s,e,t){const r=this.cache,o=e.length,l=Tc(t,o);vn(r,l)||(s.uniform1iv(this.addr,l),xn(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||_v,l[c])}function zA(s,e,t){const r=this.cache,o=e.length,l=Tc(t,o);vn(r,l)||(s.uniform1iv(this.addr,l),xn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||vv,l[c])}function HA(s){switch(s){case 5126:return SA;case 35664:return AA;case 35665:return EA;case 35666:return wA;case 35674:return TA;case 35675:return bA;case 35676:return CA;case 5124:case 35670:return RA;case 35667:case 35671:return PA;case 35668:case 35672:return LA;case 35669:case 35673:return IA;case 5125:return DA;case 36294:return UA;case 36295:return NA;case 36296:return FA;case 35678:case 36198:case 36298:case 36306:case 35682:return kA;case 35679:case 36299:case 36307:return OA;case 35680:case 36300:case 36308:case 36293:return BA;case 36289:case 36303:case 36311:case 36292:return zA}}class VA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=MA(t.type)}}class GA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HA(t.type)}}class WA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Hf=/(\w+)(\])?(\[|\.)?/g;function X0(s,e){s.seq.push(e),s.map[e.id]=e}function XA(s,e,t){const r=s.name,o=r.length;for(Hf.lastIndex=0;;){const l=Hf.exec(r),c=Hf.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===o){X0(t,h===void 0?new VA(f,s,e):new GA(f,s,e));break}else{let x=t.map[f];x===void 0&&(x=new WA(f),X0(t,x)),t=x}}}class lc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),d=e.getUniformLocation(t,f.name);XA(f,d,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function K0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const KA=37297;let jA=0;function qA(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const j0=new wt;function YA(s){kt._getMatrix(j0,kt.workingColorSpace,s);const e=`mat3( ${j0.elements.map(t=>t.toFixed(4))} )`;switch(kt.getTransfer(s)){case mc:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return xt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function q0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+qA(s.getShaderSource(e),f)}else return l}function QA(s,e){const t=YA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const JA={[kg]:"Linear",[Og]:"Reinhard",[Bg]:"Cineon",[zg]:"ACESFilmic",[Vg]:"AgX",[Gg]:"Neutral",[Hg]:"Custom"};function ZA(s,e){const t=JA[e];return t===void 0?(xt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zl=new $;function $A(){kt.getLuminanceCoefficients(Zl);const s=Zl.x.toFixed(4),e=Zl.y.toFixed(4),t=Zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(va).join(`
`)}function tE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function nE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function va(s){return s!==""}function Y0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Q0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(s){return s.replace(iE,sE)}const rE=new Map;function sE(s,e){let t=Pt[e];if(t===void 0){const r=rE.get(e);if(r!==void 0)t=Pt[r],xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Kh(t)}const oE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function J0(s){return s.replace(oE,aE)}function aE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Z0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const lE={[nc]:"SHADOWMAP_TYPE_PCF",[ga]:"SHADOWMAP_TYPE_VSM"};function cE(s){return lE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uE={[Es]:"ENVMAP_TYPE_CUBE",[Mo]:"ENVMAP_TYPE_CUBE",[Sc]:"ENVMAP_TYPE_CUBE_UV"};function fE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":uE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const hE={[Mo]:"ENVMAP_MODE_REFRACTION"};function dE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":hE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pE={[Fg]:"ENVMAP_BLENDING_MULTIPLY",[V_]:"ENVMAP_BLENDING_MIX",[G_]:"ENVMAP_BLENDING_ADD"};function mE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":pE[s.combine]||"ENVMAP_BLENDING_NONE"}function gE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function vE(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=cE(t),h=fE(t),g=dE(t),x=mE(t),m=gE(t),_=eE(t),S=tE(l),T=o.createProgram();let y,M,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(va).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(va).join(`
`),M.length>0&&(M+=`
`)):(y=[Z0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(va).join(`
`),M=[Z0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+x:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?Pt.tonemapping_pars_fragment:"",t.toneMapping!==ir?ZA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,QA("linearToOutputTexel",t.outputColorSpace),$A(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(va).join(`
`)),c=Kh(c),c=Y0(c,t),c=Q0(c,t),f=Kh(f),f=Y0(f,t),f=Q0(f,t),c=J0(c),f=J0(f),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",t.glslVersion===i0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===i0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const R=w+y+c,P=w+M+f,H=K0(o,o.VERTEX_SHADER,R),I=K0(o,o.FRAGMENT_SHADER,P);o.attachShader(T,H),o.attachShader(T,I),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function F(G){if(s.debug.checkShaderErrors){const N=o.getProgramInfoLog(T)||"",k=o.getShaderInfoLog(H)||"",Q=o.getShaderInfoLog(I)||"",K=N.trim(),se=k.trim(),W=Q.trim();let Z=!0,O=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,H,I);else{const B=q0(o,H,"vertex"),D=q0(o,I,"fragment");Wt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+K+`
`+B+`
`+D)}else K!==""?xt("WebGLProgram: Program Info Log:",K):(se===""||W==="")&&(O=!1);O&&(G.diagnostics={runnable:Z,programLog:K,vertexShader:{log:se,prefix:y},fragmentShader:{log:W,prefix:M}})}o.deleteShader(H),o.deleteShader(I),E=new lc(o,T),U=nE(o,T)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=o.getProgramParameter(T,KA)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jA++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=H,this.fragmentShader=I,this}let xE=0;class _E{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new yE(e),t.set(e,r)),r}}class yE{constructor(e){this.id=xE++,this.code=e,this.usedTimes=0}}function ME(s){return s===ws||s===hc||s===dc}function SE(s,e,t,r,o,l){const c=new ev,f=new _E,d=new Set,h=[],g=new Map,x=r.logarithmicDepthBuffer;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return d.add(E),E===0?"uv":`uv${E}`}function T(E,U,Y,G,N,k){const Q=G.fog,K=N.geometry,se=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,W=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,Z=e.get(E.envMap||se,W),O=Z&&Z.mapping===Sc?Z.image.height:null,B=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&xt("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const D=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,q=D!==void 0?D.length:0;let Se=0;K.morphAttributes.position!==void 0&&(Se=1),K.morphAttributes.normal!==void 0&&(Se=2),K.morphAttributes.color!==void 0&&(Se=3);let ge,me,j,ce;if(B){const je=tr[B];ge=je.vertexShader,me=je.fragmentShader}else ge=E.vertexShader,me=E.fragmentShader,f.update(E),j=f.getVertexShaderID(E),ce=f.getFragmentShaderID(E);const le=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),we=N.isInstancedMesh===!0,ve=N.isBatchedMesh===!0,Ge=!!E.map,He=!!E.matcap,Ze=!!Z,Qe=!!E.aoMap,nt=!!E.lightMap,Je=!!E.bumpMap,lt=!!E.normalMap,Rt=!!E.displacementMap,ee=!!E.emissiveMap,Lt=!!E.metalnessMap,vt=!!E.roughnessMap,At=E.anisotropy>0,z=E.clearcoat>0,Me=E.dispersion>0,L=E.iridescence>0,A=E.sheen>0,ne=E.transmission>0,he=At&&!!E.anisotropyMap,Ae=z&&!!E.clearcoatMap,De=z&&!!E.clearcoatNormalMap,Be=z&&!!E.clearcoatRoughnessMap,xe=L&&!!E.iridescenceMap,ye=L&&!!E.iridescenceThicknessMap,We=A&&!!E.sheenColorMap,Ve=A&&!!E.sheenRoughnessMap,Ce=!!E.specularMap,Pe=!!E.specularColorMap,ct=!!E.specularIntensityMap,pt=ne&&!!E.transmissionMap,Mt=ne&&!!E.thicknessMap,J=!!E.gradientMap,Fe=!!E.alphaMap,_e=E.alphaTest>0,Ke=!!E.alphaHash,ke=!!E.extensions;let Te=ir;E.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Te=s.toneMapping);const Oe={shaderID:B,shaderType:E.type,shaderName:E.name,vertexShader:ge,fragmentShader:me,defines:E.defines,customVertexShaderID:j,customFragmentShaderID:ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:ve,batchingColor:ve&&N._colorsTexture!==null,instancing:we,instancingColor:we&&N.instanceColor!==null,instancingMorph:we&&N.morphTexture!==null,outputColorSpace:le===null?s.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:kt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Ge,matcap:He,envMap:Ze,envMapMode:Ze&&Z.mapping,envMapCubeUVHeight:O,aoMap:Qe,lightMap:nt,bumpMap:Je,normalMap:lt,displacementMap:Rt,emissiveMap:ee,normalMapObjectSpace:lt&&E.normalMapType===K_,normalMapTangentSpace:lt&&E.normalMapType===$m,packedNormalMap:lt&&E.normalMapType===$m&&ME(E.normalMap.format),metalnessMap:Lt,roughnessMap:vt,anisotropy:At,anisotropyMap:he,clearcoat:z,clearcoatMap:Ae,clearcoatNormalMap:De,clearcoatRoughnessMap:Be,dispersion:Me,iridescence:L,iridescenceMap:xe,iridescenceThicknessMap:ye,sheen:A,sheenColorMap:We,sheenRoughnessMap:Ve,specularMap:Ce,specularColorMap:Pe,specularIntensityMap:ct,transmission:ne,transmissionMap:pt,thicknessMap:Mt,gradientMap:J,opaque:E.transparent===!1&&E.blending===xo&&E.alphaToCoverage===!1,alphaMap:Fe,alphaTest:_e,alphaHash:Ke,combine:E.combine,mapUv:Ge&&S(E.map.channel),aoMapUv:Qe&&S(E.aoMap.channel),lightMapUv:nt&&S(E.lightMap.channel),bumpMapUv:Je&&S(E.bumpMap.channel),normalMapUv:lt&&S(E.normalMap.channel),displacementMapUv:Rt&&S(E.displacementMap.channel),emissiveMapUv:ee&&S(E.emissiveMap.channel),metalnessMapUv:Lt&&S(E.metalnessMap.channel),roughnessMapUv:vt&&S(E.roughnessMap.channel),anisotropyMapUv:he&&S(E.anisotropyMap.channel),clearcoatMapUv:Ae&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:De&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:We&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&S(E.sheenRoughnessMap.channel),specularMapUv:Ce&&S(E.specularMap.channel),specularColorMapUv:Pe&&S(E.specularColorMap.channel),specularIntensityMapUv:ct&&S(E.specularIntensityMap.channel),transmissionMapUv:pt&&S(E.transmissionMap.channel),thicknessMapUv:Mt&&S(E.thicknessMap.channel),alphaMapUv:Fe&&S(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(lt||At),vertexNormals:!!K.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!K.attributes.uv&&(Ge||Fe),fog:!!Q,useFog:E.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||K.attributes.normal===void 0&&lt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ee,skinning:N.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:Se,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:Te,decodeVideoTexture:Ge&&E.map.isVideoTexture===!0&&kt.getTransfer(E.map.colorSpace)===Yt,decodeVideoTextureEmissive:ee&&E.emissiveMap.isVideoTexture===!0&&kt.getTransfer(E.emissiveMap.colorSpace)===Yt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Gi,flipSided:E.side===ci,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ke&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&E.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Oe.vertexUv1s=d.has(1),Oe.vertexUv2s=d.has(2),Oe.vertexUv3s=d.has(3),d.clear(),Oe}function y(E){const U=[];if(E.shaderID?U.push(E.shaderID):(U.push(E.customVertexShaderID),U.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Y in E.defines)U.push(Y),U.push(E.defines[Y]);return E.isRawShaderMaterial===!1&&(M(U,E),w(U,E),U.push(s.outputColorSpace)),U.push(E.customProgramCacheKey),U.join()}function M(E,U){E.push(U.precision),E.push(U.outputColorSpace),E.push(U.envMapMode),E.push(U.envMapCubeUVHeight),E.push(U.mapUv),E.push(U.alphaMapUv),E.push(U.lightMapUv),E.push(U.aoMapUv),E.push(U.bumpMapUv),E.push(U.normalMapUv),E.push(U.displacementMapUv),E.push(U.emissiveMapUv),E.push(U.metalnessMapUv),E.push(U.roughnessMapUv),E.push(U.anisotropyMapUv),E.push(U.clearcoatMapUv),E.push(U.clearcoatNormalMapUv),E.push(U.clearcoatRoughnessMapUv),E.push(U.iridescenceMapUv),E.push(U.iridescenceThicknessMapUv),E.push(U.sheenColorMapUv),E.push(U.sheenRoughnessMapUv),E.push(U.specularMapUv),E.push(U.specularColorMapUv),E.push(U.specularIntensityMapUv),E.push(U.transmissionMapUv),E.push(U.thicknessMapUv),E.push(U.combine),E.push(U.fogExp2),E.push(U.sizeAttenuation),E.push(U.morphTargetsCount),E.push(U.morphAttributeCount),E.push(U.numDirLights),E.push(U.numPointLights),E.push(U.numSpotLights),E.push(U.numSpotLightMaps),E.push(U.numHemiLights),E.push(U.numRectAreaLights),E.push(U.numDirLightShadows),E.push(U.numPointLightShadows),E.push(U.numSpotLightShadows),E.push(U.numSpotLightShadowsWithMaps),E.push(U.numLightProbes),E.push(U.shadowMapType),E.push(U.toneMapping),E.push(U.numClippingPlanes),E.push(U.numClipIntersection),E.push(U.depthPacking)}function w(E,U){c.disableAll(),U.instancing&&c.enable(0),U.instancingColor&&c.enable(1),U.instancingMorph&&c.enable(2),U.matcap&&c.enable(3),U.envMap&&c.enable(4),U.normalMapObjectSpace&&c.enable(5),U.normalMapTangentSpace&&c.enable(6),U.clearcoat&&c.enable(7),U.iridescence&&c.enable(8),U.alphaTest&&c.enable(9),U.vertexColors&&c.enable(10),U.vertexAlphas&&c.enable(11),U.vertexUv1s&&c.enable(12),U.vertexUv2s&&c.enable(13),U.vertexUv3s&&c.enable(14),U.vertexTangents&&c.enable(15),U.anisotropy&&c.enable(16),U.alphaHash&&c.enable(17),U.batching&&c.enable(18),U.dispersion&&c.enable(19),U.batchingColor&&c.enable(20),U.gradientMap&&c.enable(21),U.packedNormalMap&&c.enable(22),U.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.reversedDepthBuffer&&c.enable(4),U.skinning&&c.enable(5),U.morphTargets&&c.enable(6),U.morphNormals&&c.enable(7),U.morphColors&&c.enable(8),U.premultipliedAlpha&&c.enable(9),U.shadowMapEnabled&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.decodeVideoTextureEmissive&&c.enable(20),U.alphaToCoverage&&c.enable(21),U.numLightProbeGrids>0&&c.enable(22),E.push(c.mask)}function R(E){const U=_[E.type];let Y;if(U){const G=tr[U];Y=Ky.clone(G.uniforms)}else Y=E.uniforms;return Y}function P(E,U){let Y=g.get(U);return Y!==void 0?++Y.usedTimes:(Y=new vE(s,U,E,o),h.push(Y),g.set(U,Y)),Y}function H(E){if(--E.usedTimes===0){const U=h.indexOf(E);h[U]=h[h.length-1],h.pop(),g.delete(E.cacheKey),E.destroy()}}function I(E){f.remove(E)}function F(){f.dispose()}return{getParameters:T,getProgramCacheKey:y,getUniforms:R,acquireProgram:P,releaseProgram:H,releaseShaderCache:I,programs:h,dispose:F}}function AE(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,d){s.get(c)[f]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function EE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function $0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function eg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(m){let _=0;return m.isInstancedMesh&&(_+=2),m.isSkinnedMesh&&(_+=1),_}function f(m,_,S,T,y,M){let w=s[e];return w===void 0?(w={id:m.id,object:m,geometry:_,material:S,materialVariant:c(m),groupOrder:T,renderOrder:m.renderOrder,z:y,group:M},s[e]=w):(w.id=m.id,w.object=m,w.geometry=_,w.material=S,w.materialVariant=c(m),w.groupOrder=T,w.renderOrder=m.renderOrder,w.z=y,w.group=M),e++,w}function d(m,_,S,T,y,M){const w=f(m,_,S,T,y,M);S.transmission>0?r.push(w):S.transparent===!0?o.push(w):t.push(w)}function h(m,_,S,T,y,M){const w=f(m,_,S,T,y,M);S.transmission>0?r.unshift(w):S.transparent===!0?o.unshift(w):t.unshift(w)}function g(m,_){t.length>1&&t.sort(m||EE),r.length>1&&r.sort(_||$0),o.length>1&&o.sort(_||$0)}function x(){for(let m=e,_=s.length;m<_;m++){const S=s[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:h,finish:x,sort:g}}function wE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new eg,s.set(r,[c])):o>=l.length?(c=new eg,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function TE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new Xt};break;case"SpotLight":t={position:new $,direction:new $,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":t={color:new Xt,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=t,t}}}function bE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let CE=0;function RE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function PE(s){const e=new TE,t=bE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new $);const o=new $,l=new ln,c=new ln;function f(h){let g=0,x=0,m=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let _=0,S=0,T=0,y=0,M=0,w=0,R=0,P=0,H=0,I=0,F=0;h.sort(RE);for(let U=0,Y=h.length;U<Y;U++){const G=h[U],N=G.color,k=G.intensity,Q=G.distance;let K=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===ws?K=G.shadow.map.texture:K=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=N.r*k,x+=N.g*k,m+=N.b*k;else if(G.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(G.sh.coefficients[se],k);F++}else if(G.isDirectionalLight){const se=e.get(G);if(se.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const W=G.shadow,Z=t.get(G);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,r.directionalShadow[_]=Z,r.directionalShadowMap[_]=K,r.directionalShadowMatrix[_]=G.shadow.matrix,w++}r.directional[_]=se,_++}else if(G.isSpotLight){const se=e.get(G);se.position.setFromMatrixPosition(G.matrixWorld),se.color.copy(N).multiplyScalar(k),se.distance=Q,se.coneCos=Math.cos(G.angle),se.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),se.decay=G.decay,r.spot[T]=se;const W=G.shadow;if(G.map&&(r.spotLightMap[H]=G.map,H++,W.updateMatrices(G),G.castShadow&&I++),r.spotLightMatrix[T]=W.matrix,G.castShadow){const Z=t.get(G);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,r.spotShadow[T]=Z,r.spotShadowMap[T]=K,P++}T++}else if(G.isRectAreaLight){const se=e.get(G);se.color.copy(N).multiplyScalar(k),se.halfWidth.set(G.width*.5,0,0),se.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=se,y++}else if(G.isPointLight){const se=e.get(G);if(se.color.copy(G.color).multiplyScalar(G.intensity),se.distance=G.distance,se.decay=G.decay,G.castShadow){const W=G.shadow,Z=t.get(G);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,Z.shadowCameraNear=W.camera.near,Z.shadowCameraFar=W.camera.far,r.pointShadow[S]=Z,r.pointShadowMap[S]=K,r.pointShadowMatrix[S]=G.shadow.matrix,R++}r.point[S]=se,S++}else if(G.isHemisphereLight){const se=e.get(G);se.skyColor.copy(G.color).multiplyScalar(k),se.groundColor.copy(G.groundColor).multiplyScalar(k),r.hemi[M]=se,M++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ye.LTC_FLOAT_1,r.rectAreaLTC2=Ye.LTC_FLOAT_2):(r.rectAreaLTC1=Ye.LTC_HALF_1,r.rectAreaLTC2=Ye.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=m;const E=r.hash;(E.directionalLength!==_||E.pointLength!==S||E.spotLength!==T||E.rectAreaLength!==y||E.hemiLength!==M||E.numDirectionalShadows!==w||E.numPointShadows!==R||E.numSpotShadows!==P||E.numSpotMaps!==H||E.numLightProbes!==F)&&(r.directional.length=_,r.spot.length=T,r.rectArea.length=y,r.point.length=S,r.hemi.length=M,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=P+H-I,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=F,E.directionalLength=_,E.pointLength=S,E.spotLength=T,E.rectAreaLength=y,E.hemiLength=M,E.numDirectionalShadows=w,E.numPointShadows=R,E.numSpotShadows=P,E.numSpotMaps=H,E.numLightProbes=F,r.version=CE++)}function d(h,g){let x=0,m=0,_=0,S=0,T=0;const y=g.matrixWorldInverse;for(let M=0,w=h.length;M<w;M++){const R=h[M];if(R.isDirectionalLight){const P=r.directional[x];P.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),x++}else if(R.isSpotLight){const P=r.spot[_];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),_++}else if(R.isRectAreaLight){const P=r.rectArea[S];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),c.identity(),l.copy(R.matrixWorld),l.premultiply(y),c.extractRotation(l),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),S++}else if(R.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),m++}else if(R.isHemisphereLight){const P=r.hemi[T];P.direction.setFromMatrixPosition(R.matrixWorld),P.direction.transformDirection(y),T++}}}return{setup:f,setupView:d,state:r}}function tg(s){const e=new PE(s),t=[],r=[],o=[];function l(m){x.camera=m,t.length=0,r.length=0,o.length=0}function c(m){t.push(m)}function f(m){r.push(m)}function d(m){o.push(m)}function h(){e.setup(t)}function g(m){e.setupView(t,m)}const x={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:h,setupLightsView:g,pushLight:c,pushShadow:f,pushLightProbeGrid:d}}function LE(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new tg(s),e.set(o,[f])):l>=c.length?(f=new tg(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const IE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,UE=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],NE=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],ng=new ln,ha=new $,Vf=new $;function FE(s,e,t){let r=new ov;const o=new Ut,l=new Ut,c=new on,f=new Qy,d=new Jy,h={},g=t.maxTextureSize,x={[es]:ci,[ci]:es,[Gi]:Gi},m=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:IE,fragmentShader:DE}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const S=new un;S.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Nn(S,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let M=this.type;this.render=function(I,F,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===A_&&(xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=nc);const U=s.getRenderTarget(),Y=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Mr),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const k=M!==this.type;k&&F.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(K=>K.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,K=I.length;Q<K;Q++){const se=I[Q],W=se.shadow;if(W===void 0){xt("WebGLShadowMap:",se,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const Z=W.getFrameExtents();o.multiply(Z),l.copy(W.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/Z.x),o.x=l.x*Z.x,W.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/Z.y),o.y=l.y*Z.y,W.mapSize.y=l.y));const O=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=O,W.map===null||k===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ga){if(se.isPointLight){xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new sr(o.x,o.y,{format:ws,type:Ar,minFilter:wn,magFilter:wn,generateMipmaps:!1}),W.map.texture.name=se.name+".shadowMap",W.map.depthTexture=new So(o.x,o.y,Xi),W.map.depthTexture.name=se.name+".shadowMapDepth",W.map.depthTexture.format=Er,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=gn,W.map.depthTexture.magFilter=gn}else se.isPointLight?(W.map=new mv(o.x),W.map.depthTexture=new Vy(o.x,or)):(W.map=new sr(o.x,o.y),W.map.depthTexture=new So(o.x,o.y,or)),W.map.depthTexture.name=se.name+".shadowMap",W.map.depthTexture.format=Er,this.type===nc?(W.map.depthTexture.compareFunction=O?sd:rd,W.map.depthTexture.minFilter=wn,W.map.depthTexture.magFilter=wn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=gn,W.map.depthTexture.magFilter=gn);W.camera.updateProjectionMatrix()}const B=W.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<B;D++){if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,D),s.clear();else{D===0&&(s.setRenderTarget(W.map),s.clear());const q=W.getViewport(D);c.set(l.x*q.x,l.y*q.y,l.x*q.z,l.y*q.w),N.viewport(c)}if(se.isPointLight){const q=W.camera,Se=W.matrix,ge=se.distance||q.far;ge!==q.far&&(q.far=ge,q.updateProjectionMatrix()),ha.setFromMatrixPosition(se.matrixWorld),q.position.copy(ha),Vf.copy(q.position),Vf.add(UE[D]),q.up.copy(NE[D]),q.lookAt(Vf),q.updateMatrixWorld(),Se.makeTranslation(-ha.x,-ha.y,-ha.z),ng.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),W._frustum.setFromProjectionMatrix(ng,q.coordinateSystem,q.reversedDepth)}else W.updateMatrices(se);r=W.getFrustum(),P(F,E,W.camera,se,this.type)}W.isPointLightShadow!==!0&&this.type===ga&&w(W,E),W.needsUpdate=!1}M=this.type,y.needsUpdate=!1,s.setRenderTarget(U,Y,G)};function w(I,F){const E=e.update(T);m.defines.VSM_SAMPLES!==I.blurSamples&&(m.defines.VSM_SAMPLES=I.blurSamples,_.defines.VSM_SAMPLES=I.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new sr(o.x,o.y,{format:ws,type:Ar})),m.uniforms.shadow_pass.value=I.map.depthTexture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(F,null,E,m,T,null),_.uniforms.shadow_pass.value=I.mapPass.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(F,null,E,_,T,null)}function R(I,F,E,U){let Y=null;const G=E.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)Y=G;else if(Y=E.isPointLight===!0?d:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const N=Y.uuid,k=F.uuid;let Q=h[N];Q===void 0&&(Q={},h[N]=Q);let K=Q[k];K===void 0&&(K=Y.clone(),Q[k]=K,F.addEventListener("dispose",H)),Y=K}if(Y.visible=F.visible,Y.wireframe=F.wireframe,U===ga?Y.side=F.shadowSide!==null?F.shadowSide:F.side:Y.side=F.shadowSide!==null?F.shadowSide:x[F.side],Y.alphaMap=F.alphaMap,Y.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,Y.map=F.map,Y.clipShadows=F.clipShadows,Y.clippingPlanes=F.clippingPlanes,Y.clipIntersection=F.clipIntersection,Y.displacementMap=F.displacementMap,Y.displacementScale=F.displacementScale,Y.displacementBias=F.displacementBias,Y.wireframeLinewidth=F.wireframeLinewidth,Y.linewidth=F.linewidth,E.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const N=s.properties.get(Y);N.light=E}return Y}function P(I,F,E,U,Y){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&Y===ga)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,I.matrixWorld);const k=e.update(I),Q=I.material;if(Array.isArray(Q)){const K=k.groups;for(let se=0,W=K.length;se<W;se++){const Z=K[se],O=Q[Z.materialIndex];if(O&&O.visible){const B=R(I,O,U,Y);I.onBeforeShadow(s,I,F,E,k,B,Z),s.renderBufferDirect(E,null,k,B,I,Z),I.onAfterShadow(s,I,F,E,k,B,Z)}}}else if(Q.visible){const K=R(I,Q,U,Y);I.onBeforeShadow(s,I,F,E,k,K,null),s.renderBufferDirect(E,null,k,K,I,null),I.onAfterShadow(s,I,F,E,k,K,null)}}const N=I.children;for(let k=0,Q=N.length;k<Q;k++)P(N[k],F,E,U,Y)}function H(I){I.target.removeEventListener("dispose",H);for(const E in h){const U=h[E],Y=I.target.uuid;Y in U&&(U[Y].dispose(),delete U[Y])}}}function kE(s,e){function t(){let J=!1;const Fe=new on;let _e=null;const Ke=new on(0,0,0,0);return{setMask:function(ke){_e!==ke&&!J&&(s.colorMask(ke,ke,ke,ke),_e=ke)},setLocked:function(ke){J=ke},setClear:function(ke,Te,Oe,je,Et){Et===!0&&(ke*=je,Te*=je,Oe*=je),Fe.set(ke,Te,Oe,je),Ke.equals(Fe)===!1&&(s.clearColor(ke,Te,Oe,je),Ke.copy(Fe))},reset:function(){J=!1,_e=null,Ke.set(-1,0,0,0)}}}function r(){let J=!1,Fe=!1,_e=null,Ke=null,ke=null;return{setReversed:function(Te){if(Fe!==Te){const Oe=e.get("EXT_clip_control");Te?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),Fe=Te;const je=ke;ke=null,this.setClear(je)}},getReversed:function(){return Fe},setTest:function(Te){Te?le(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(Te){_e!==Te&&!J&&(s.depthMask(Te),_e=Te)},setFunc:function(Te){if(Fe&&(Te=ny[Te]),Ke!==Te){switch(Te){case ih:s.depthFunc(s.NEVER);break;case rh:s.depthFunc(s.ALWAYS);break;case sh:s.depthFunc(s.LESS);break;case yo:s.depthFunc(s.LEQUAL);break;case oh:s.depthFunc(s.EQUAL);break;case ah:s.depthFunc(s.GEQUAL);break;case lh:s.depthFunc(s.GREATER);break;case ch:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ke=Te}},setLocked:function(Te){J=Te},setClear:function(Te){ke!==Te&&(ke=Te,Fe&&(Te=1-Te),s.clearDepth(Te))},reset:function(){J=!1,_e=null,Ke=null,ke=null,Fe=!1}}}function o(){let J=!1,Fe=null,_e=null,Ke=null,ke=null,Te=null,Oe=null,je=null,Et=null;return{setTest:function(_t){J||(_t?le(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(_t){Fe!==_t&&!J&&(s.stencilMask(_t),Fe=_t)},setFunc:function(_t,Nt,yt){(_e!==_t||Ke!==Nt||ke!==yt)&&(s.stencilFunc(_t,Nt,yt),_e=_t,Ke=Nt,ke=yt)},setOp:function(_t,Nt,yt){(Te!==_t||Oe!==Nt||je!==yt)&&(s.stencilOp(_t,Nt,yt),Te=_t,Oe=Nt,je=yt)},setLocked:function(_t){J=_t},setClear:function(_t){Et!==_t&&(s.clearStencil(_t),Et=_t)},reset:function(){J=!1,Fe=null,_e=null,Ke=null,ke=null,Te=null,Oe=null,je=null,Et=null}}}const l=new t,c=new r,f=new o,d=new WeakMap,h=new WeakMap;let g={},x={},m={},_=new WeakMap,S=[],T=null,y=!1,M=null,w=null,R=null,P=null,H=null,I=null,F=null,E=new Xt(0,0,0),U=0,Y=!1,G=null,N=null,k=null,Q=null,K=null;const se=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(O)[1]),W=Z>=1):O.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),W=Z>=2);let B=null,D={};const q=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),ge=new on().fromArray(q),me=new on().fromArray(Se);function j(J,Fe,_e,Ke){const ke=new Uint8Array(4),Te=s.createTexture();s.bindTexture(J,Te),s.texParameteri(J,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(J,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Oe=0;Oe<_e;Oe++)J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?s.texImage3D(Fe,0,s.RGBA,1,1,Ke,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(Fe+Oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return Te}const ce={};ce[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),le(s.DEPTH_TEST),c.setFunc(yo),Je(!1),lt(Ym),le(s.CULL_FACE),Qe(Mr);function le(J){g[J]!==!0&&(s.enable(J),g[J]=!0)}function Ee(J){g[J]!==!1&&(s.disable(J),g[J]=!1)}function we(J,Fe){return m[J]!==Fe?(s.bindFramebuffer(J,Fe),m[J]=Fe,J===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Fe),J===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Fe),!0):!1}function ve(J,Fe){let _e=S,Ke=!1;if(J){_e=_.get(Fe),_e===void 0&&(_e=[],_.set(Fe,_e));const ke=J.textures;if(_e.length!==ke.length||_e[0]!==s.COLOR_ATTACHMENT0){for(let Te=0,Oe=ke.length;Te<Oe;Te++)_e[Te]=s.COLOR_ATTACHMENT0+Te;_e.length=ke.length,Ke=!0}}else _e[0]!==s.BACK&&(_e[0]=s.BACK,Ke=!0);Ke&&s.drawBuffers(_e)}function Ge(J){return T!==J?(s.useProgram(J),T=J,!0):!1}const He={[ys]:s.FUNC_ADD,[w_]:s.FUNC_SUBTRACT,[T_]:s.FUNC_REVERSE_SUBTRACT};He[b_]=s.MIN,He[C_]=s.MAX;const Ze={[R_]:s.ZERO,[P_]:s.ONE,[L_]:s.SRC_COLOR,[th]:s.SRC_ALPHA,[k_]:s.SRC_ALPHA_SATURATE,[N_]:s.DST_COLOR,[D_]:s.DST_ALPHA,[I_]:s.ONE_MINUS_SRC_COLOR,[nh]:s.ONE_MINUS_SRC_ALPHA,[F_]:s.ONE_MINUS_DST_COLOR,[U_]:s.ONE_MINUS_DST_ALPHA,[O_]:s.CONSTANT_COLOR,[B_]:s.ONE_MINUS_CONSTANT_COLOR,[z_]:s.CONSTANT_ALPHA,[H_]:s.ONE_MINUS_CONSTANT_ALPHA};function Qe(J,Fe,_e,Ke,ke,Te,Oe,je,Et,_t){if(J===Mr){y===!0&&(Ee(s.BLEND),y=!1);return}if(y===!1&&(le(s.BLEND),y=!0),J!==E_){if(J!==M||_t!==Y){if((w!==ys||H!==ys)&&(s.blendEquation(s.FUNC_ADD),w=ys,H=ys),_t)switch(J){case xo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qm:s.blendFunc(s.ONE,s.ONE);break;case Jm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Wt("WebGLState: Invalid blending: ",J);break}else switch(J){case xo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Jm:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zm:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",J);break}R=null,P=null,I=null,F=null,E.set(0,0,0),U=0,M=J,Y=_t}return}ke=ke||Fe,Te=Te||_e,Oe=Oe||Ke,(Fe!==w||ke!==H)&&(s.blendEquationSeparate(He[Fe],He[ke]),w=Fe,H=ke),(_e!==R||Ke!==P||Te!==I||Oe!==F)&&(s.blendFuncSeparate(Ze[_e],Ze[Ke],Ze[Te],Ze[Oe]),R=_e,P=Ke,I=Te,F=Oe),(je.equals(E)===!1||Et!==U)&&(s.blendColor(je.r,je.g,je.b,Et),E.copy(je),U=Et),M=J,Y=!1}function nt(J,Fe){J.side===Gi?Ee(s.CULL_FACE):le(s.CULL_FACE);let _e=J.side===ci;Fe&&(_e=!_e),Je(_e),J.blending===xo&&J.transparent===!1?Qe(Mr):Qe(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),c.setFunc(J.depthFunc),c.setTest(J.depthTest),c.setMask(J.depthWrite),l.setMask(J.colorWrite);const Ke=J.stencilWrite;f.setTest(Ke),Ke&&(f.setMask(J.stencilWriteMask),f.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),f.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),ee(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?le(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function Je(J){G!==J&&(J?s.frontFace(s.CW):s.frontFace(s.CCW),G=J)}function lt(J){J!==M_?(le(s.CULL_FACE),J!==N&&(J===Ym?s.cullFace(s.BACK):J===S_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),N=J}function Rt(J){J!==k&&(W&&s.lineWidth(J),k=J)}function ee(J,Fe,_e){J?(le(s.POLYGON_OFFSET_FILL),(Q!==Fe||K!==_e)&&(Q=Fe,K=_e,c.getReversed()&&(Fe=-Fe),s.polygonOffset(Fe,_e))):Ee(s.POLYGON_OFFSET_FILL)}function Lt(J){J?le(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function vt(J){J===void 0&&(J=s.TEXTURE0+se-1),B!==J&&(s.activeTexture(J),B=J)}function At(J,Fe,_e){_e===void 0&&(B===null?_e=s.TEXTURE0+se-1:_e=B);let Ke=D[_e];Ke===void 0&&(Ke={type:void 0,texture:void 0},D[_e]=Ke),(Ke.type!==J||Ke.texture!==Fe)&&(B!==_e&&(s.activeTexture(_e),B=_e),s.bindTexture(J,Fe||ce[J]),Ke.type=J,Ke.texture=Fe)}function z(){const J=D[B];J!==void 0&&J.type!==void 0&&(s.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function Me(){try{s.compressedTexImage2D(...arguments)}catch(J){Wt("WebGLState:",J)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(J){Wt("WebGLState:",J)}}function A(){try{s.texSubImage2D(...arguments)}catch(J){Wt("WebGLState:",J)}}function ne(){try{s.texSubImage3D(...arguments)}catch(J){Wt("WebGLState:",J)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(J){Wt("WebGLState:",J)}}function Ae(){try{s.compressedTexSubImage3D(...arguments)}catch(J){Wt("WebGLState:",J)}}function De(){try{s.texStorage2D(...arguments)}catch(J){Wt("WebGLState:",J)}}function Be(){try{s.texStorage3D(...arguments)}catch(J){Wt("WebGLState:",J)}}function xe(){try{s.texImage2D(...arguments)}catch(J){Wt("WebGLState:",J)}}function ye(){try{s.texImage3D(...arguments)}catch(J){Wt("WebGLState:",J)}}function We(J){return x[J]!==void 0?x[J]:s.getParameter(J)}function Ve(J,Fe){x[J]!==Fe&&(s.pixelStorei(J,Fe),x[J]=Fe)}function Ce(J){ge.equals(J)===!1&&(s.scissor(J.x,J.y,J.z,J.w),ge.copy(J))}function Pe(J){me.equals(J)===!1&&(s.viewport(J.x,J.y,J.z,J.w),me.copy(J))}function ct(J,Fe){let _e=h.get(Fe);_e===void 0&&(_e=new WeakMap,h.set(Fe,_e));let Ke=_e.get(J);Ke===void 0&&(Ke=s.getUniformBlockIndex(Fe,J.name),_e.set(J,Ke))}function pt(J,Fe){const Ke=h.get(Fe).get(J);d.get(Fe)!==Ke&&(s.uniformBlockBinding(Fe,Ke,J.__bindingPointIndex),d.set(Fe,Ke))}function Mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},x={},B=null,D={},m={},_=new WeakMap,S=[],T=null,y=!1,M=null,w=null,R=null,P=null,H=null,I=null,F=null,E=new Xt(0,0,0),U=0,Y=!1,G=null,N=null,k=null,Q=null,K=null,ge.set(0,0,s.canvas.width,s.canvas.height),me.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:le,disable:Ee,bindFramebuffer:we,drawBuffers:ve,useProgram:Ge,setBlending:Qe,setMaterial:nt,setFlipSided:Je,setCullFace:lt,setLineWidth:Rt,setPolygonOffset:ee,setScissorTest:Lt,activeTexture:vt,bindTexture:At,unbindTexture:z,compressedTexImage2D:Me,compressedTexImage3D:L,texImage2D:xe,texImage3D:ye,pixelStorei:Ve,getParameter:We,updateUBOMapping:ct,uniformBlockBinding:pt,texStorage2D:De,texStorage3D:Be,texSubImage2D:A,texSubImage3D:ne,compressedTexSubImage2D:he,compressedTexSubImage3D:Ae,scissor:Ce,viewport:Pe,reset:Mt}}function OE(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ut,g=new WeakMap,x=new Set;let m;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,A){return S?new OffscreenCanvas(L,A):vc("canvas")}function y(L,A,ne){let he=1;const Ae=Me(L);if((Ae.width>ne||Ae.height>ne)&&(he=ne/Math.max(Ae.width,Ae.height)),he<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const De=Math.floor(he*Ae.width),Be=Math.floor(he*Ae.height);m===void 0&&(m=T(De,Be));const xe=A?T(De,Be):m;return xe.width=De,xe.height=Be,xe.getContext("2d").drawImage(L,0,0,De,Be),xt("WebGLRenderer: Texture has been resized from ("+Ae.width+"x"+Ae.height+") to ("+De+"x"+Be+")."),xe}else return"data"in L&&xt("WebGLRenderer: Image in DataTexture is too big ("+Ae.width+"x"+Ae.height+")."),L;return L}function M(L){return L.generateMipmaps}function w(L){s.generateMipmap(L)}function R(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(L,A,ne,he,Ae,De=!1){if(L!==null){if(s[L]!==void 0)return s[L];xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Be;he&&(Be=e.get("EXT_texture_norm16"),Be||xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=A;if(A===s.RED&&(ne===s.FLOAT&&(xe=s.R32F),ne===s.HALF_FLOAT&&(xe=s.R16F),ne===s.UNSIGNED_BYTE&&(xe=s.R8),ne===s.UNSIGNED_SHORT&&Be&&(xe=Be.R16_EXT),ne===s.SHORT&&Be&&(xe=Be.R16_SNORM_EXT)),A===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(xe=s.R8UI),ne===s.UNSIGNED_SHORT&&(xe=s.R16UI),ne===s.UNSIGNED_INT&&(xe=s.R32UI),ne===s.BYTE&&(xe=s.R8I),ne===s.SHORT&&(xe=s.R16I),ne===s.INT&&(xe=s.R32I)),A===s.RG&&(ne===s.FLOAT&&(xe=s.RG32F),ne===s.HALF_FLOAT&&(xe=s.RG16F),ne===s.UNSIGNED_BYTE&&(xe=s.RG8),ne===s.UNSIGNED_SHORT&&Be&&(xe=Be.RG16_EXT),ne===s.SHORT&&Be&&(xe=Be.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(xe=s.RG8UI),ne===s.UNSIGNED_SHORT&&(xe=s.RG16UI),ne===s.UNSIGNED_INT&&(xe=s.RG32UI),ne===s.BYTE&&(xe=s.RG8I),ne===s.SHORT&&(xe=s.RG16I),ne===s.INT&&(xe=s.RG32I)),A===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(xe=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(xe=s.RGB16UI),ne===s.UNSIGNED_INT&&(xe=s.RGB32UI),ne===s.BYTE&&(xe=s.RGB8I),ne===s.SHORT&&(xe=s.RGB16I),ne===s.INT&&(xe=s.RGB32I)),A===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(xe=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(xe=s.RGBA16UI),ne===s.UNSIGNED_INT&&(xe=s.RGBA32UI),ne===s.BYTE&&(xe=s.RGBA8I),ne===s.SHORT&&(xe=s.RGBA16I),ne===s.INT&&(xe=s.RGBA32I)),A===s.RGB&&(ne===s.UNSIGNED_SHORT&&Be&&(xe=Be.RGB16_EXT),ne===s.SHORT&&Be&&(xe=Be.RGB16_SNORM_EXT),ne===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),ne===s.UNSIGNED_INT_10F_11F_11F_REV&&(xe=s.R11F_G11F_B10F)),A===s.RGBA){const ye=De?mc:kt.getTransfer(Ae);ne===s.FLOAT&&(xe=s.RGBA32F),ne===s.HALF_FLOAT&&(xe=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(xe=ye===Yt?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT&&Be&&(xe=Be.RGBA16_EXT),ne===s.SHORT&&Be&&(xe=Be.RGBA16_SNORM_EXT),ne===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function H(L,A){let ne;return L?A===null||A===or||A===Sa?ne=s.DEPTH24_STENCIL8:A===Xi?ne=s.DEPTH32F_STENCIL8:A===Ma&&(ne=s.DEPTH24_STENCIL8,xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===or||A===Sa?ne=s.DEPTH_COMPONENT24:A===Xi?ne=s.DEPTH_COMPONENT32F:A===Ma&&(ne=s.DEPTH_COMPONENT16),ne}function I(L,A){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==gn&&L.minFilter!==wn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function F(L){const A=L.target;A.removeEventListener("dispose",F),U(A),A.isVideoTexture&&g.delete(A),A.isHTMLTexture&&x.delete(A)}function E(L){const A=L.target;A.removeEventListener("dispose",E),G(A)}function U(L){const A=r.get(L);if(A.__webglInit===void 0)return;const ne=L.source,he=_.get(ne);if(he){const Ae=he[A.__cacheKey];Ae.usedTimes--,Ae.usedTimes===0&&Y(L),Object.keys(he).length===0&&_.delete(ne)}r.remove(L)}function Y(L){const A=r.get(L);s.deleteTexture(A.__webglTexture);const ne=L.source,he=_.get(ne);delete he[A.__cacheKey],c.memory.textures--}function G(L){const A=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(A.__webglFramebuffer[he]))for(let Ae=0;Ae<A.__webglFramebuffer[he].length;Ae++)s.deleteFramebuffer(A.__webglFramebuffer[he][Ae]);else s.deleteFramebuffer(A.__webglFramebuffer[he]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[he])}else{if(Array.isArray(A.__webglFramebuffer))for(let he=0;he<A.__webglFramebuffer.length;he++)s.deleteFramebuffer(A.__webglFramebuffer[he]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let he=0;he<A.__webglColorRenderbuffer.length;he++)A.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[he]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ne=L.textures;for(let he=0,Ae=ne.length;he<Ae;he++){const De=r.get(ne[he]);De.__webglTexture&&(s.deleteTexture(De.__webglTexture),c.memory.textures--),r.remove(ne[he])}r.remove(L)}let N=0;function k(){N=0}function Q(){return N}function K(L){N=L}function se(){const L=N;return L>=o.maxTextures&&xt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),N+=1,L}function W(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function Z(L,A){const ne=r.get(L);if(L.isVideoTexture&&At(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&ne.__version!==L.version){const he=L.image;if(he===null)xt("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(ne,L,A);return}}else L.isExternalTexture&&(ne.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+A)}function O(L,A){const ne=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ne.__version!==L.version){Ee(ne,L,A);return}else L.isExternalTexture&&(ne.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+A)}function B(L,A){const ne=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ne.__version!==L.version){Ee(ne,L,A);return}t.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+A)}function D(L,A){const ne=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&ne.__version!==L.version){we(ne,L,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+A)}const q={[fc]:s.REPEAT,[yr]:s.CLAMP_TO_EDGE,[uh]:s.MIRRORED_REPEAT},Se={[gn]:s.NEAREST,[W_]:s.NEAREST_MIPMAP_NEAREST,[bl]:s.NEAREST_MIPMAP_LINEAR,[wn]:s.LINEAR,[uf]:s.LINEAR_MIPMAP_NEAREST,[Ss]:s.LINEAR_MIPMAP_LINEAR},ge={[j_]:s.NEVER,[Z_]:s.ALWAYS,[q_]:s.LESS,[rd]:s.LEQUAL,[Y_]:s.EQUAL,[sd]:s.GEQUAL,[Q_]:s.GREATER,[J_]:s.NOTEQUAL};function me(L,A){if(A.type===Xi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===wn||A.magFilter===uf||A.magFilter===bl||A.magFilter===Ss||A.minFilter===wn||A.minFilter===uf||A.minFilter===bl||A.minFilter===Ss)&&xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,q[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,q[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,q[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Se[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Se[A.minFilter]),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,ge[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===gn||A.minFilter!==bl&&A.minFilter!==Ss||A.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function j(L,A){let ne=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",F));const he=A.source;let Ae=_.get(he);Ae===void 0&&(Ae={},_.set(he,Ae));const De=W(A);if(De!==L.__cacheKey){Ae[De]===void 0&&(Ae[De]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ne=!0),Ae[De].usedTimes++;const Be=Ae[L.__cacheKey];Be!==void 0&&(Ae[L.__cacheKey].usedTimes--,Be.usedTimes===0&&Y(A)),L.__cacheKey=De,L.__webglTexture=Ae[De].texture}return ne}function ce(L,A,ne){return Math.floor(Math.floor(L/ne)/A)}function le(L,A,ne,he){const De=L.updateRanges;if(De.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,ne,he,A.data);else{De.sort((Ve,Ce)=>Ve.start-Ce.start);let Be=0;for(let Ve=1;Ve<De.length;Ve++){const Ce=De[Be],Pe=De[Ve],ct=Ce.start+Ce.count,pt=ce(Pe.start,A.width,4),Mt=ce(Ce.start,A.width,4);Pe.start<=ct+1&&pt===Mt&&ce(Pe.start+Pe.count-1,A.width,4)===pt?Ce.count=Math.max(Ce.count,Pe.start+Pe.count-Ce.start):(++Be,De[Be]=Pe)}De.length=Be+1;const xe=t.getParameter(s.UNPACK_ROW_LENGTH),ye=t.getParameter(s.UNPACK_SKIP_PIXELS),We=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let Ve=0,Ce=De.length;Ve<Ce;Ve++){const Pe=De[Ve],ct=Math.floor(Pe.start/4),pt=Math.ceil(Pe.count/4),Mt=ct%A.width,J=Math.floor(ct/A.width),Fe=pt,_e=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Mt),t.pixelStorei(s.UNPACK_SKIP_ROWS,J),t.texSubImage2D(s.TEXTURE_2D,0,Mt,J,Fe,_e,ne,he,A.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,xe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(s.UNPACK_SKIP_ROWS,We)}}function Ee(L,A,ne){let he=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(he=s.TEXTURE_3D);const Ae=j(L,A),De=A.source;t.bindTexture(he,L.__webglTexture,s.TEXTURE0+ne);const Be=r.get(De);if(De.version!==Be.__version||Ae===!0){if(t.activeTexture(s.TEXTURE0+ne),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const _e=kt.getPrimaries(kt.workingColorSpace),Ke=A.colorSpace===Zr?null:kt.getPrimaries(A.colorSpace),ke=A.colorSpace===Zr||_e===Ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let ye=y(A.image,!1,o.maxTextureSize);ye=z(A,ye);const We=l.convert(A.format,A.colorSpace),Ve=l.convert(A.type);let Ce=P(A.internalFormat,We,Ve,A.normalized,A.colorSpace,A.isVideoTexture);me(he,A);let Pe;const ct=A.mipmaps,pt=A.isVideoTexture!==!0,Mt=Be.__version===void 0||Ae===!0,J=De.dataReady,Fe=I(A,ye);if(A.isDepthTexture)Ce=H(A.format===As,A.type),Mt&&(pt?t.texStorage2D(s.TEXTURE_2D,1,Ce,ye.width,ye.height):t.texImage2D(s.TEXTURE_2D,0,Ce,ye.width,ye.height,0,We,Ve,null));else if(A.isDataTexture)if(ct.length>0){pt&&Mt&&t.texStorage2D(s.TEXTURE_2D,Fe,Ce,ct[0].width,ct[0].height);for(let _e=0,Ke=ct.length;_e<Ke;_e++)Pe=ct[_e],pt?J&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,We,Ve,Pe.data):t.texImage2D(s.TEXTURE_2D,_e,Ce,Pe.width,Pe.height,0,We,Ve,Pe.data);A.generateMipmaps=!1}else pt?(Mt&&t.texStorage2D(s.TEXTURE_2D,Fe,Ce,ye.width,ye.height),J&&le(A,ye,We,Ve)):t.texImage2D(s.TEXTURE_2D,0,Ce,ye.width,ye.height,0,We,Ve,ye.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){pt&&Mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Ce,ct[0].width,ct[0].height,ye.depth);for(let _e=0,Ke=ct.length;_e<Ke;_e++)if(Pe=ct[_e],A.format!==bi)if(We!==null)if(pt){if(J)if(A.layerUpdates.size>0){const ke=D0(Pe.width,Pe.height,A.format,A.type);for(const Te of A.layerUpdates){const Oe=Pe.data.subarray(Te*ke/Pe.data.BYTES_PER_ELEMENT,(Te+1)*ke/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,Te,Pe.width,Pe.height,1,We,Oe)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,ye.depth,We,Pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,Ce,Pe.width,Pe.height,ye.depth,0,Pe.data,0,0);else xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?J&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,ye.depth,We,Ve,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,_e,Ce,Pe.width,Pe.height,ye.depth,0,We,Ve,Pe.data)}else{pt&&Mt&&t.texStorage2D(s.TEXTURE_2D,Fe,Ce,ct[0].width,ct[0].height);for(let _e=0,Ke=ct.length;_e<Ke;_e++)Pe=ct[_e],A.format!==bi?We!==null?pt?J&&t.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,We,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,_e,Ce,Pe.width,Pe.height,0,Pe.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?J&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,We,Ve,Pe.data):t.texImage2D(s.TEXTURE_2D,_e,Ce,Pe.width,Pe.height,0,We,Ve,Pe.data)}else if(A.isDataArrayTexture)if(pt){if(Mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Ce,ye.width,ye.height,ye.depth),J)if(A.layerUpdates.size>0){const _e=D0(ye.width,ye.height,A.format,A.type);for(const Ke of A.layerUpdates){const ke=ye.data.subarray(Ke*_e/ye.data.BYTES_PER_ELEMENT,(Ke+1)*_e/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ke,ye.width,ye.height,1,We,Ve,ke)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,We,Ve,ye.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,ye.width,ye.height,ye.depth,0,We,Ve,ye.data);else if(A.isData3DTexture)pt?(Mt&&t.texStorage3D(s.TEXTURE_3D,Fe,Ce,ye.width,ye.height,ye.depth),J&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,We,Ve,ye.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,ye.width,ye.height,ye.depth,0,We,Ve,ye.data);else if(A.isFramebufferTexture){if(Mt)if(pt)t.texStorage2D(s.TEXTURE_2D,Fe,Ce,ye.width,ye.height);else{let _e=ye.width,Ke=ye.height;for(let ke=0;ke<Fe;ke++)t.texImage2D(s.TEXTURE_2D,ke,Ce,_e,Ke,0,We,Ve,null),_e>>=1,Ke>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){const _e=s.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),ye.parentNode!==_e){_e.appendChild(ye),x.add(A),_e.onpaint=je=>{const Et=je.changedElements;for(const _t of x)Et.includes(_t.image)&&(_t.needsUpdate=!0)},_e.requestPaint();return}const Ke=0,ke=s.RGBA,Te=s.RGBA,Oe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Ke,ke,Te,Oe,ye),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ct.length>0){if(pt&&Mt){const _e=Me(ct[0]);t.texStorage2D(s.TEXTURE_2D,Fe,Ce,_e.width,_e.height)}for(let _e=0,Ke=ct.length;_e<Ke;_e++)Pe=ct[_e],pt?J&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,We,Ve,Pe):t.texImage2D(s.TEXTURE_2D,_e,Ce,We,Ve,Pe);A.generateMipmaps=!1}else if(pt){if(Mt){const _e=Me(ye);t.texStorage2D(s.TEXTURE_2D,Fe,Ce,_e.width,_e.height)}J&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,We,Ve,ye)}else t.texImage2D(s.TEXTURE_2D,0,Ce,We,Ve,ye);M(A)&&w(he),Be.__version=De.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function we(L,A,ne){if(A.image.length!==6)return;const he=j(L,A),Ae=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+ne);const De=r.get(Ae);if(Ae.version!==De.__version||he===!0){t.activeTexture(s.TEXTURE0+ne);const Be=kt.getPrimaries(kt.workingColorSpace),xe=A.colorSpace===Zr?null:kt.getPrimaries(A.colorSpace),ye=A.colorSpace===Zr||Be===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const We=A.isCompressedTexture||A.image[0].isCompressedTexture,Ve=A.image[0]&&A.image[0].isDataTexture,Ce=[];for(let Te=0;Te<6;Te++)!We&&!Ve?Ce[Te]=y(A.image[Te],!0,o.maxCubemapSize):Ce[Te]=Ve?A.image[Te].image:A.image[Te],Ce[Te]=z(A,Ce[Te]);const Pe=Ce[0],ct=l.convert(A.format,A.colorSpace),pt=l.convert(A.type),Mt=P(A.internalFormat,ct,pt,A.normalized,A.colorSpace),J=A.isVideoTexture!==!0,Fe=De.__version===void 0||he===!0,_e=Ae.dataReady;let Ke=I(A,Pe);me(s.TEXTURE_CUBE_MAP,A);let ke;if(We){J&&Fe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ke,Mt,Pe.width,Pe.height);for(let Te=0;Te<6;Te++){ke=Ce[Te].mipmaps;for(let Oe=0;Oe<ke.length;Oe++){const je=ke[Oe];A.format!==bi?ct!==null?J?_e&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Oe,0,0,je.width,je.height,ct,je.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Oe,Mt,je.width,je.height,0,je.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Oe,0,0,je.width,je.height,ct,pt,je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Oe,Mt,je.width,je.height,0,ct,pt,je.data)}}}else{if(ke=A.mipmaps,J&&Fe){ke.length>0&&Ke++;const Te=Me(Ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ke,Mt,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(Ve){J?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Ce[Te].width,Ce[Te].height,ct,pt,Ce[Te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Mt,Ce[Te].width,Ce[Te].height,0,ct,pt,Ce[Te].data);for(let Oe=0;Oe<ke.length;Oe++){const Et=ke[Oe].image[Te].image;J?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Oe+1,0,0,Et.width,Et.height,ct,pt,Et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Oe+1,Mt,Et.width,Et.height,0,ct,pt,Et.data)}}else{J?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ct,pt,Ce[Te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Mt,ct,pt,Ce[Te]);for(let Oe=0;Oe<ke.length;Oe++){const je=ke[Oe];J?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Oe+1,0,0,ct,pt,je.image[Te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Oe+1,Mt,ct,pt,je.image[Te])}}}M(A)&&w(s.TEXTURE_CUBE_MAP),De.__version=Ae.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ve(L,A,ne,he,Ae,De){const Be=l.convert(ne.format,ne.colorSpace),xe=l.convert(ne.type),ye=P(ne.internalFormat,Be,xe,ne.normalized,ne.colorSpace),We=r.get(A),Ve=r.get(ne);if(Ve.__renderTarget=A,!We.__hasExternalTextures){const Ce=Math.max(1,A.width>>De),Pe=Math.max(1,A.height>>De);Ae===s.TEXTURE_3D||Ae===s.TEXTURE_2D_ARRAY?t.texImage3D(Ae,De,ye,Ce,Pe,A.depth,0,Be,xe,null):t.texImage2D(Ae,De,ye,Ce,Pe,0,Be,xe,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),vt(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,Ae,Ve.__webglTexture,0,Lt(A)):(Ae===s.TEXTURE_2D||Ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,Ae,Ve.__webglTexture,De),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(L,A,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer){const he=A.depthTexture,Ae=he&&he.isDepthTexture?he.type:null,De=H(A.stencilBuffer,Ae),Be=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;vt(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt(A),De,A.width,A.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt(A),De,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,De,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Be,s.RENDERBUFFER,L)}else{const he=A.textures;for(let Ae=0;Ae<he.length;Ae++){const De=he[Ae],Be=l.convert(De.format,De.colorSpace),xe=l.convert(De.type),ye=P(De.internalFormat,Be,xe,De.normalized,De.colorSpace);vt(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt(A),ye,A.width,A.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt(A),ye,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ye,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function He(L,A,ne){const he=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ae=r.get(A.depthTexture);if(Ae.__renderTarget=A,(!Ae.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),he){if(Ae.__webglInit===void 0&&(Ae.__webglInit=!0,A.depthTexture.addEventListener("dispose",F)),Ae.__webglTexture===void 0){Ae.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Ae.__webglTexture),me(s.TEXTURE_CUBE_MAP,A.depthTexture);const We=l.convert(A.depthTexture.format),Ve=l.convert(A.depthTexture.type);let Ce;A.depthTexture.format===Er?Ce=s.DEPTH_COMPONENT24:A.depthTexture.format===As&&(Ce=s.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ce,A.width,A.height,0,We,Ve,null)}}else Z(A.depthTexture,0);const De=Ae.__webglTexture,Be=Lt(A),xe=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+ne:s.TEXTURE_2D,ye=A.depthTexture.format===As?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===Er)vt(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,xe,De,0,Be):s.framebufferTexture2D(s.FRAMEBUFFER,ye,xe,De,0);else if(A.depthTexture.format===As)vt(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,xe,De,0,Be):s.framebufferTexture2D(s.FRAMEBUFFER,ye,xe,De,0);else throw new Error("Unknown depthTexture format")}function Ze(L){const A=r.get(L),ne=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const he=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),he){const Ae=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,he.removeEventListener("dispose",Ae)};he.addEventListener("dispose",Ae),A.__depthDisposeCallback=Ae}A.__boundDepthTexture=he}if(L.depthTexture&&!A.__autoAllocateDepthBuffer)if(ne)for(let he=0;he<6;he++)He(A.__webglFramebuffer[he],L,he);else{const he=L.texture.mipmaps;he&&he.length>0?He(A.__webglFramebuffer[0],L,0):He(A.__webglFramebuffer,L,0)}else if(ne){A.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[he]),A.__webglDepthbuffer[he]===void 0)A.__webglDepthbuffer[he]=s.createRenderbuffer(),Ge(A.__webglDepthbuffer[he],L,!1);else{const Ae=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=A.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,De),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,De)}}else{const he=L.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Ge(A.__webglDepthbuffer,L,!1);else{const Ae=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,De),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,De)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(L,A,ne){const he=r.get(L);A!==void 0&&ve(he.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&Ze(L)}function nt(L){const A=L.texture,ne=r.get(L),he=r.get(A);L.addEventListener("dispose",E);const Ae=L.textures,De=L.isWebGLCubeRenderTarget===!0,Be=Ae.length>1;if(Be||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=A.version,c.memory.textures++),De){ne.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer[xe]=[];for(let ye=0;ye<A.mipmaps.length;ye++)ne.__webglFramebuffer[xe][ye]=s.createFramebuffer()}else ne.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer=[];for(let xe=0;xe<A.mipmaps.length;xe++)ne.__webglFramebuffer[xe]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(Be)for(let xe=0,ye=Ae.length;xe<ye;xe++){const We=r.get(Ae[xe]);We.__webglTexture===void 0&&(We.__webglTexture=s.createTexture(),c.memory.textures++)}if(L.samples>0&&vt(L)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let xe=0;xe<Ae.length;xe++){const ye=Ae[xe];ne.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[xe]);const We=l.convert(ye.format,ye.colorSpace),Ve=l.convert(ye.type),Ce=P(ye.internalFormat,We,Ve,ye.normalized,ye.colorSpace,L.isXRRenderTarget===!0),Pe=Lt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,Ce,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,ne.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),Ge(ne.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(De){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),me(s.TEXTURE_CUBE_MAP,A);for(let xe=0;xe<6;xe++)if(A.mipmaps&&A.mipmaps.length>0)for(let ye=0;ye<A.mipmaps.length;ye++)ve(ne.__webglFramebuffer[xe][ye],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ye);else ve(ne.__webglFramebuffer[xe],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);M(A)&&w(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let xe=0,ye=Ae.length;xe<ye;xe++){const We=Ae[xe],Ve=r.get(We);let Ce=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,Ve.__webglTexture),me(Ce,We),ve(ne.__webglFramebuffer,L,We,s.COLOR_ATTACHMENT0+xe,Ce,0),M(We)&&w(Ce)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(xe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,he.__webglTexture),me(xe,A),A.mipmaps&&A.mipmaps.length>0)for(let ye=0;ye<A.mipmaps.length;ye++)ve(ne.__webglFramebuffer[ye],L,A,s.COLOR_ATTACHMENT0,xe,ye);else ve(ne.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,xe,0);M(A)&&w(xe),t.unbindTexture()}L.depthBuffer&&Ze(L)}function Je(L){const A=L.textures;for(let ne=0,he=A.length;ne<he;ne++){const Ae=A[ne];if(M(Ae)){const De=R(L),Be=r.get(Ae).__webglTexture;t.bindTexture(De,Be),w(De),t.unbindTexture()}}}const lt=[],Rt=[];function ee(L){if(L.samples>0){if(vt(L)===!1){const A=L.textures,ne=L.width,he=L.height;let Ae=s.COLOR_BUFFER_BIT;const De=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Be=r.get(L),xe=A.length>1;if(xe)for(let We=0;We<A.length;We++)t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const ye=L.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let We=0;We<A.length;We++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Ae|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Ae|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Be.__webglColorRenderbuffer[We]);const Ve=r.get(A[We]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ve,0)}s.blitFramebuffer(0,0,ne,he,0,0,ne,he,Ae,s.NEAREST),d===!0&&(lt.length=0,Rt.length=0,lt.push(s.COLOR_ATTACHMENT0+We),L.depthBuffer&&L.resolveDepthBuffer===!1&&(lt.push(De),Rt.push(De),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Rt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let We=0;We<A.length;We++){t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,Be.__webglColorRenderbuffer[We]);const Ve=r.get(A[We]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,Ve,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const A=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Lt(L){return Math.min(o.maxSamples,L.samples)}function vt(L){const A=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function At(L){const A=c.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function z(L,A){const ne=L.colorSpace,he=L.format,Ae=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ne!==pc&&ne!==Zr&&(kt.getTransfer(ne)===Yt?(he!==bi||Ae!==Ti)&&xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",ne)),A}function Me(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=se,this.resetTextureUnits=k,this.getTextureUnits=Q,this.setTextureUnits=K,this.setTexture2D=Z,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=D,this.rebindTextures=Qe,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function BE(s,e){function t(r,o=Zr){let l;const c=kt.getTransfer(o);if(r===Ti)return s.UNSIGNED_BYTE;if(r===$h)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ed)return s.UNSIGNED_SHORT_5_5_5_1;if(r===jg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===qg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Xg)return s.BYTE;if(r===Kg)return s.SHORT;if(r===Ma)return s.UNSIGNED_SHORT;if(r===Zh)return s.INT;if(r===or)return s.UNSIGNED_INT;if(r===Xi)return s.FLOAT;if(r===Ar)return s.HALF_FLOAT;if(r===Yg)return s.ALPHA;if(r===Qg)return s.RGB;if(r===bi)return s.RGBA;if(r===Er)return s.DEPTH_COMPONENT;if(r===As)return s.DEPTH_STENCIL;if(r===Jg)return s.RED;if(r===td)return s.RED_INTEGER;if(r===ws)return s.RG;if(r===nd)return s.RG_INTEGER;if(r===id)return s.RGBA_INTEGER;if(r===ic||r===rc||r===sc||r===oc)if(c===Yt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===ic)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===rc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===sc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===oc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===ic)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===rc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===sc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===oc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fh||r===hh||r===dh||r===ph)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===fh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ph)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mh||r===gh||r===vh||r===xh||r===_h||r===hc||r===yh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===mh||r===gh)return c===Yt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===vh)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===xh)return l.COMPRESSED_R11_EAC;if(r===_h)return l.COMPRESSED_SIGNED_R11_EAC;if(r===hc)return l.COMPRESSED_RG11_EAC;if(r===yh)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Mh||r===Sh||r===Ah||r===Eh||r===wh||r===Th||r===bh||r===Ch||r===Rh||r===Ph||r===Lh||r===Ih||r===Dh||r===Uh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Mh)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sh)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ah)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Eh)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wh)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Th)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bh)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ch)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rh)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ph)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lh)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ih)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dh)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Uh)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nh||r===Fh||r===kh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Nh)return c===Yt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Fh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Oh||r===Bh||r===dc||r===zh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Oh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Bh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===dc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Sa?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const zE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new uv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new vi({vertexShader:zE,fragmentShader:HE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nn(new Ec(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GE extends Cs{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",d=1,h=null,g=null,x=null,m=null,_=null,S=null;const T=typeof XRWebGLBinding<"u",y=new VE,M={},w=t.getContextAttributes();let R=null,P=null;const H=[],I=[],F=new Ut;let E=null;const U=new li;U.viewport=new on;const Y=new li;Y.viewport=new on;const G=[U,Y],N=new $y;let k=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ce=H[j];return ce===void 0&&(ce=new gf,H[j]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(j){let ce=H[j];return ce===void 0&&(ce=new gf,H[j]=ce),ce.getGripSpace()},this.getHand=function(j){let ce=H[j];return ce===void 0&&(ce=new gf,H[j]=ce),ce.getHandSpace()};function K(j){const ce=I.indexOf(j.inputSource);if(ce===-1)return;const le=H[ce];le!==void 0&&(le.update(j.inputSource,j.frame,h||c),le.dispatchEvent({type:j.type,data:j.inputSource}))}function se(){o.removeEventListener("select",K),o.removeEventListener("selectstart",K),o.removeEventListener("selectend",K),o.removeEventListener("squeeze",K),o.removeEventListener("squeezestart",K),o.removeEventListener("squeezeend",K),o.removeEventListener("end",se),o.removeEventListener("inputsourceschange",W);for(let j=0;j<H.length;j++){const ce=I[j];ce!==null&&(I[j]=null,H[j].disconnect(ce))}k=null,Q=null,y.reset();for(const j in M)delete M[j];e.setRenderTarget(R),_=null,m=null,x=null,o=null,P=null,me.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){l=j,r.isPresenting===!0&&xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){f=j,r.isPresenting===!0&&xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(j){h=j},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return x===null&&T&&(x=new XRWebGLBinding(o,t)),x},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(j){if(o=j,o!==null){if(R=e.getRenderTarget(),o.addEventListener("select",K),o.addEventListener("selectstart",K),o.addEventListener("selectend",K),o.addEventListener("squeeze",K),o.addEventListener("squeezestart",K),o.addEventListener("squeezeend",K),o.addEventListener("end",se),o.addEventListener("inputsourceschange",W),w.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Ee=null,we=null;w.depth&&(we=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=w.stencil?As:Er,Ee=w.stencil?Sa:or);const ve={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:l};x=this.getBinding(),m=x.createProjectionLayer(ve),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),P=new sr(m.textureWidth,m.textureHeight,{format:bi,type:Ti,depthTexture:new So(m.textureWidth,m.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const le={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:l};_=new XRWebGLLayer(o,t,le),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),P=new sr(_.framebufferWidth,_.framebufferHeight,{format:bi,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(f),me.setContext(o),me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(j){for(let ce=0;ce<j.removed.length;ce++){const le=j.removed[ce],Ee=I.indexOf(le);Ee>=0&&(I[Ee]=null,H[Ee].disconnect(le))}for(let ce=0;ce<j.added.length;ce++){const le=j.added[ce];let Ee=I.indexOf(le);if(Ee===-1){for(let ve=0;ve<H.length;ve++)if(ve>=I.length){I.push(le),Ee=ve;break}else if(I[ve]===null){I[ve]=le,Ee=ve;break}if(Ee===-1)break}const we=H[Ee];we&&we.connect(le)}}const Z=new $,O=new $;function B(j,ce,le){Z.setFromMatrixPosition(ce.matrixWorld),O.setFromMatrixPosition(le.matrixWorld);const Ee=Z.distanceTo(O),we=ce.projectionMatrix.elements,ve=le.projectionMatrix.elements,Ge=we[14]/(we[10]-1),He=we[14]/(we[10]+1),Ze=(we[9]+1)/we[5],Qe=(we[9]-1)/we[5],nt=(we[8]-1)/we[0],Je=(ve[8]+1)/ve[0],lt=Ge*nt,Rt=Ge*Je,ee=Ee/(-nt+Je),Lt=ee*-nt;if(ce.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Lt),j.translateZ(ee),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),we[10]===-1)j.projectionMatrix.copy(ce.projectionMatrix),j.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const vt=Ge+ee,At=He+ee,z=lt-Lt,Me=Rt+(Ee-Lt),L=Ze*He/At*vt,A=Qe*He/At*vt;j.projectionMatrix.makePerspective(z,Me,L,A,vt,At),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function D(j,ce){ce===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ce.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(o===null)return;let ce=j.near,le=j.far;y.texture!==null&&(y.depthNear>0&&(ce=y.depthNear),y.depthFar>0&&(le=y.depthFar)),N.near=Y.near=U.near=ce,N.far=Y.far=U.far=le,(k!==N.near||Q!==N.far)&&(o.updateRenderState({depthNear:N.near,depthFar:N.far}),k=N.near,Q=N.far),N.layers.mask=j.layers.mask|6,U.layers.mask=N.layers.mask&-5,Y.layers.mask=N.layers.mask&-3;const Ee=j.parent,we=N.cameras;D(N,Ee);for(let ve=0;ve<we.length;ve++)D(we[ve],Ee);we.length===2?B(N,U,Y):N.projectionMatrix.copy(U.projectionMatrix),q(j,N,Ee)};function q(j,ce,le){le===null?j.matrix.copy(ce.matrixWorld):(j.matrix.copy(le.matrixWorld),j.matrix.invert(),j.matrix.multiply(ce.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ce.projectionMatrix),j.projectionMatrixInverse.copy(ce.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Aa*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(m===null&&_===null))return d},this.setFoveation=function(j){d=j,m!==null&&(m.fixedFoveation=j),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(N)},this.getCameraTexture=function(j){return M[j]};let Se=null;function ge(j,ce){if(g=ce.getViewerPose(h||c),S=ce,g!==null){const le=g.views;_!==null&&(e.setRenderTargetFramebuffer(P,_.framebuffer),e.setRenderTarget(P));let Ee=!1;le.length!==N.cameras.length&&(N.cameras.length=0,Ee=!0);for(let He=0;He<le.length;He++){const Ze=le[He];let Qe=null;if(_!==null)Qe=_.getViewport(Ze);else{const Je=x.getViewSubImage(m,Ze);Qe=Je.viewport,He===0&&(e.setRenderTargetTextures(P,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(P))}let nt=G[He];nt===void 0&&(nt=new li,nt.layers.enable(He),nt.viewport=new on,G[He]=nt),nt.matrix.fromArray(Ze.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Ze.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),He===0&&(N.matrix.copy(nt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ee===!0&&N.cameras.push(nt)}const we=o.enabledFeatures;if(we&&we.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){x=r.getBinding();const He=x.getDepthInformation(le[0]);He&&He.isValid&&He.texture&&y.init(He,o.renderState)}if(we&&we.includes("camera-access")&&T){e.state.unbindTexture(),x=r.getBinding();for(let He=0;He<le.length;He++){const Ze=le[He].camera;if(Ze){let Qe=M[Ze];Qe||(Qe=new uv,M[Ze]=Qe);const nt=x.getCameraImage(Ze);Qe.sourceTexture=nt}}}}for(let le=0;le<H.length;le++){const Ee=I[le],we=H[le];Ee!==null&&we!==void 0&&we.update(Ee,ce,h||c)}Se&&Se(j,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),S=null}const me=new dv;me.setAnimationLoop(ge),this.setAnimationLoop=function(j){Se=j},this.dispose=function(){}}}const WE=new ln,yv=new wt;yv.set(-1,0,0,0,1,0,0,0,1);function XE(s,e){function t(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function r(y,M){M.color.getRGB(y.fogColor.value,fv(s)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function o(y,M,w,R,P){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?l(y,M):M.isMeshLambertMaterial?(l(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(l(y,M),x(y,M)):M.isMeshPhongMaterial?(l(y,M),g(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(l(y,M),m(y,M),M.isMeshPhysicalMaterial&&_(y,M,P)):M.isMeshMatcapMaterial?(l(y,M),S(y,M)):M.isMeshDepthMaterial?l(y,M):M.isMeshDistanceMaterial?(l(y,M),T(y,M)):M.isMeshNormalMaterial?l(y,M):M.isLineBasicMaterial?(c(y,M),M.isLineDashedMaterial&&f(y,M)):M.isPointsMaterial?d(y,M,w,R):M.isSpriteMaterial?h(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function l(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,t(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,t(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===ci&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,t(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===ci&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,t(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,t(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,t(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const w=e.get(M),R=w.envMap,P=w.envMapRotation;R&&(y.envMap.value=R,y.envMapRotation.value.setFromMatrix4(WE.makeRotationFromEuler(P)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(yv),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,t(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,t(M.aoMap,y.aoMapTransform))}function c(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,t(M.map,y.mapTransform))}function f(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function d(y,M,w,R){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*w,y.scale.value=R*.5,M.map&&(y.map.value=M.map,t(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function h(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,t(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function g(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function x(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function m(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,t(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,t(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function _(y,M,w){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,t(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,t(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,t(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,t(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,t(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===ci&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,t(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,t(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,t(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,t(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,t(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,t(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,t(M.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,M){M.matcap&&(y.matcap.value=M.matcap)}function T(y,M){const w=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function KE(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(w,R){const P=R.program;r.uniformBlockBinding(w,P)}function h(w,R){let P=o[w.id];P===void 0&&(S(w),P=g(w),o[w.id]=P,w.addEventListener("dispose",y));const H=R.program;r.updateUBOMapping(w,H);const I=e.render.frame;l[w.id]!==I&&(m(w),l[w.id]=I)}function g(w){const R=x();w.__bindingPointIndex=R;const P=s.createBuffer(),H=w.__size,I=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,H,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,P),P}function x(){for(let w=0;w<f;w++)if(c.indexOf(w)===-1)return c.push(w),w;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(w){const R=o[w.id],P=w.uniforms,H=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let I=0,F=P.length;I<F;I++){const E=Array.isArray(P[I])?P[I]:[P[I]];for(let U=0,Y=E.length;U<Y;U++){const G=E[U];if(_(G,I,U,H)===!0){const N=G.__offset,k=Array.isArray(G.value)?G.value:[G.value];let Q=0;for(let K=0;K<k.length;K++){const se=k[K],W=T(se);typeof se=="number"||typeof se=="boolean"?(G.__data[0]=se,s.bufferSubData(s.UNIFORM_BUFFER,N+Q,G.__data)):se.isMatrix3?(G.__data[0]=se.elements[0],G.__data[1]=se.elements[1],G.__data[2]=se.elements[2],G.__data[3]=0,G.__data[4]=se.elements[3],G.__data[5]=se.elements[4],G.__data[6]=se.elements[5],G.__data[7]=0,G.__data[8]=se.elements[6],G.__data[9]=se.elements[7],G.__data[10]=se.elements[8],G.__data[11]=0):ArrayBuffer.isView(se)?G.__data.set(new se.constructor(se.buffer,se.byteOffset,G.__data.length)):(se.toArray(G.__data,Q),Q+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(w,R,P,H){const I=w.value,F=R+"_"+P;if(H[F]===void 0)return typeof I=="number"||typeof I=="boolean"?H[F]=I:ArrayBuffer.isView(I)?H[F]=I.slice():H[F]=I.clone(),!0;{const E=H[F];if(typeof I=="number"||typeof I=="boolean"){if(E!==I)return H[F]=I,!0}else{if(ArrayBuffer.isView(I))return!0;if(E.equals(I)===!1)return E.copy(I),!0}}return!1}function S(w){const R=w.uniforms;let P=0;const H=16;for(let F=0,E=R.length;F<E;F++){const U=Array.isArray(R[F])?R[F]:[R[F]];for(let Y=0,G=U.length;Y<G;Y++){const N=U[Y],k=Array.isArray(N.value)?N.value:[N.value];for(let Q=0,K=k.length;Q<K;Q++){const se=k[Q],W=T(se),Z=P%H,O=Z%W.boundary,B=Z+O;P+=O,B!==0&&H-B<W.storage&&(P+=H-B),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=P,P+=W.storage}}}const I=P%H;return I>0&&(P+=H-I),w.__size=P,w.__cache={},this}function T(w){const R={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(R.boundary=4,R.storage=4):w.isVector2?(R.boundary=8,R.storage=8):w.isVector3||w.isColor?(R.boundary=16,R.storage=12):w.isVector4?(R.boundary=16,R.storage=16):w.isMatrix3?(R.boundary=48,R.storage=48):w.isMatrix4?(R.boundary=64,R.storage=64):w.isTexture?xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(R.boundary=16,R.storage=w.byteLength):xt("WebGLRenderer: Unsupported uniform value type.",w),R}function y(w){const R=w.target;R.removeEventListener("dispose",y);const P=c.indexOf(R.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(o[R.id]),delete o[R.id],delete l[R.id]}function M(){for(const w in o)s.deleteBuffer(o[w]);c=[],o={},l={}}return{bind:d,update:h,dispose:M}}const jE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let er=null;function qE(){return er===null&&(er=new sv(jE,16,16,ws,Ar),er.name="DFG_LUT",er.minFilter=wn,er.magFilter=wn,er.wrapS=yr,er.wrapT=yr,er.generateMipmaps=!1,er.needsUpdate=!0),er}class Mv{constructor(e={}){const{canvas:t=ey(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:m=!1,outputBufferType:_=Ti}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const T=_,y=new Set([id,nd,td]),M=new Set([Ti,or,Ma,Sa,$h,ed]),w=new Uint32Array(4),R=new Int32Array(4),P=new $;let H=null,I=null;const F=[],E=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let G=!1,N=null;this._outputColorSpace=wi;let k=0,Q=0,K=null,se=-1,W=null;const Z=new on,O=new on;let B=null;const D=new Xt(0);let q=0,Se=t.width,ge=t.height,me=1,j=null,ce=null;const le=new on(0,0,Se,ge),Ee=new on(0,0,Se,ge);let we=!1;const ve=new ov;let Ge=!1,He=!1;const Ze=new ln,Qe=new $,nt=new on,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Rt(){return K===null?me:1}let ee=r;function Lt(C,ie){return t.getContext(C,ie)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jh}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",je,!1),ee===null){const ie="webgl2";if(ee=Lt(ie,C),ee===null)throw Lt(ie)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Wt("WebGLRenderer: "+C.message),C}let vt,At,z,Me,L,A,ne,he,Ae,De,Be,xe,ye,We,Ve,Ce,Pe,ct,pt,Mt,J,Fe,_e;function Ke(){vt=new qS(ee),vt.init(),J=new BE(ee,vt),At=new zS(ee,vt,e,J),z=new kE(ee,vt),At.reversedDepthBuffer&&m&&z.buffers.depth.setReversed(!0),Me=new JS(ee),L=new AE,A=new OE(ee,vt,z,L,At,J,Me),ne=new jS(Y),he=new tM(ee),Fe=new OS(ee,he),Ae=new YS(ee,he,Me,Fe),De=new $S(ee,Ae,he,Fe,Me),ct=new ZS(ee,At,A),Ve=new HS(L),Be=new SE(Y,ne,vt,At,Fe,Ve),xe=new XE(Y,L),ye=new wE,We=new LE(vt),Pe=new kS(Y,ne,z,De,S,d),Ce=new FE(Y,De,At),_e=new KE(ee,Me,At,z),pt=new BS(ee,vt,Me),Mt=new QS(ee,vt,Me),Me.programs=Be.programs,Y.capabilities=At,Y.extensions=vt,Y.properties=L,Y.renderLists=ye,Y.shadowMap=Ce,Y.state=z,Y.info=Me}Ke(),T!==Ti&&(U=new tA(T,t.width,t.height,o,l));const ke=new GE(Y,ee);this.xr=ke,this.getContext=function(){return ee},this.getContextAttributes=function(){return ee.getContextAttributes()},this.forceContextLoss=function(){const C=vt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=vt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(C){C!==void 0&&(me=C,this.setSize(Se,ge,!1))},this.getSize=function(C){return C.set(Se,ge)},this.setSize=function(C,ie,de=!0){if(ke.isPresenting){xt("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=C,ge=ie,t.width=Math.floor(C*me),t.height=Math.floor(ie*me),de===!0&&(t.style.width=C+"px",t.style.height=ie+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,C,ie)},this.getDrawingBufferSize=function(C){return C.set(Se*me,ge*me).floor()},this.setDrawingBufferSize=function(C,ie,de){Se=C,ge=ie,me=de,t.width=Math.floor(C*de),t.height=Math.floor(ie*de),this.setViewport(0,0,C,ie)},this.setEffects=function(C){if(T===Ti){Wt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let ie=0;ie<C.length;ie++)if(C[ie].isOutputPass===!0){xt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Z)},this.getViewport=function(C){return C.copy(le)},this.setViewport=function(C,ie,de,oe){C.isVector4?le.set(C.x,C.y,C.z,C.w):le.set(C,ie,de,oe),z.viewport(Z.copy(le).multiplyScalar(me).round())},this.getScissor=function(C){return C.copy(Ee)},this.setScissor=function(C,ie,de,oe){C.isVector4?Ee.set(C.x,C.y,C.z,C.w):Ee.set(C,ie,de,oe),z.scissor(O.copy(Ee).multiplyScalar(me).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(C){z.setScissorTest(we=C)},this.setOpaqueSort=function(C){j=C},this.setTransparentSort=function(C){ce=C},this.getClearColor=function(C){return C.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(C=!0,ie=!0,de=!0){let oe=0;if(C){let ae=!1;if(K!==null){const Le=K.texture.format;ae=y.has(Le)}if(ae){const Le=K.texture.type,Xe=M.has(Le),Ne=Pe.getClearColor(),et=Pe.getClearAlpha(),it=Ne.r,ht=Ne.g,dt=Ne.b;Xe?(w[0]=it,w[1]=ht,w[2]=dt,w[3]=et,ee.clearBufferuiv(ee.COLOR,0,w)):(R[0]=it,R[1]=ht,R[2]=dt,R[3]=et,ee.clearBufferiv(ee.COLOR,0,R))}else oe|=ee.COLOR_BUFFER_BIT}ie&&(oe|=ee.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(oe|=ee.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&ee.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),N=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",je,!1),Pe.dispose(),ye.dispose(),We.dispose(),L.dispose(),ne.dispose(),De.dispose(),Fe.dispose(),_e.dispose(),Be.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",qn),ke.removeEventListener("sessionend",Tn),ei.stop()};function Te(C){C.preventDefault(),s0("WebGLRenderer: Context Lost."),G=!0}function Oe(){s0("WebGLRenderer: Context Restored."),G=!1;const C=Me.autoReset,ie=Ce.enabled,de=Ce.autoUpdate,oe=Ce.needsUpdate,ae=Ce.type;Ke(),Me.autoReset=C,Ce.enabled=ie,Ce.autoUpdate=de,Ce.needsUpdate=oe,Ce.type=ae}function je(C){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Et(C){const ie=C.target;ie.removeEventListener("dispose",Et),_t(ie)}function _t(C){Nt(C),L.remove(C)}function Nt(C){const ie=L.get(C).programs;ie!==void 0&&(ie.forEach(function(de){Be.releaseProgram(de)}),C.isShaderMaterial&&Be.releaseShaderCache(C))}this.renderBufferDirect=function(C,ie,de,oe,ae,Le){ie===null&&(ie=Je);const Xe=ae.isMesh&&ae.matrixWorld.determinant()<0,Ne=Rn(C,ie,de,oe,ae);z.setMaterial(oe,Xe);let et=de.index,it=1;if(oe.wireframe===!0){if(et=Ae.getWireframeAttribute(de),et===void 0)return;it=2}const ht=de.drawRange,dt=de.attributes.position;let tt=ht.start*it,bt=(ht.start+ht.count)*it;Le!==null&&(tt=Math.max(tt,Le.start*it),bt=Math.min(bt,(Le.start+Le.count)*it)),et!==null?(tt=Math.max(tt,0),bt=Math.min(bt,et.count)):dt!=null&&(tt=Math.max(tt,0),bt=Math.min(bt,dt.count));const Ot=bt-tt;if(Ot<0||Ot===1/0)return;Fe.setup(ae,oe,Ne,de,et);let Kt,zt=pt;if(et!==null&&(Kt=he.get(et),zt=Mt,zt.setIndex(Kt)),ae.isMesh)oe.wireframe===!0?(z.setLineWidth(oe.wireframeLinewidth*Rt()),zt.setMode(ee.LINES)):zt.setMode(ee.TRIANGLES);else if(ae.isLine){let tn=oe.linewidth;tn===void 0&&(tn=1),z.setLineWidth(tn*Rt()),ae.isLineSegments?zt.setMode(ee.LINES):ae.isLineLoop?zt.setMode(ee.LINE_LOOP):zt.setMode(ee.LINE_STRIP)}else ae.isPoints?zt.setMode(ee.POINTS):ae.isSprite&&zt.setMode(ee.TRIANGLES);if(ae.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))zt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const tn=ae._multiDrawStarts,qe=ae._multiDrawCounts,fn=ae._multiDrawCount,Ct=et?he.get(et).bytesPerElement:1,Pn=L.get(oe).currentProgram.getUniforms();for(let Ln=0;Ln<fn;Ln++)Pn.setValue(ee,"_gl_DrawID",Ln),zt.render(tn[Ln]/Ct,qe[Ln])}else if(ae.isInstancedMesh)zt.renderInstances(tt,Ot,ae.count);else if(de.isInstancedBufferGeometry){const tn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,qe=Math.min(de.instanceCount,tn);zt.renderInstances(tt,Ot,qe)}else zt.render(tt,Ot)};function yt(C,ie,de){C.transparent===!0&&C.side===Gi&&C.forceSinglePass===!1?(C.side=ci,C.needsUpdate=!0,Pi(C,ie,de),C.side=es,C.needsUpdate=!0,Pi(C,ie,de),C.side=Gi):Pi(C,ie,de)}this.compile=function(C,ie,de=null){de===null&&(de=C),I=We.get(de),I.init(ie),E.push(I),de.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ie.layers)&&(I.pushLight(ae),ae.castShadow&&I.pushShadow(ae))}),C!==de&&C.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ie.layers)&&(I.pushLight(ae),ae.castShadow&&I.pushShadow(ae))}),I.setupLights();const oe=new Set;return C.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Le=ae.material;if(Le)if(Array.isArray(Le))for(let Xe=0;Xe<Le.length;Xe++){const Ne=Le[Xe];yt(Ne,de,ae),oe.add(Ne)}else yt(Le,de,ae),oe.add(Le)}),I=E.pop(),oe},this.compileAsync=function(C,ie,de=null){const oe=this.compile(C,ie,de);return new Promise(ae=>{function Le(){if(oe.forEach(function(Xe){L.get(Xe).currentProgram.isReady()&&oe.delete(Xe)}),oe.size===0){ae(C);return}setTimeout(Le,10)}vt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Ft=null;function Fn(C){Ft&&Ft(C)}function qn(){ei.stop()}function Tn(){ei.start()}const ei=new dv;ei.setAnimationLoop(Fn),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(C){Ft=C,ke.setAnimationLoop(C),C===null?ei.stop():ei.start()},ke.addEventListener("sessionstart",qn),ke.addEventListener("sessionend",Tn),this.render=function(C,ie){if(ie!==void 0&&ie.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;N!==null&&N.renderStart(C,ie);const de=ke.enabled===!0&&ke.isPresenting===!0,oe=U!==null&&(K===null||de)&&U.begin(Y,K);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(ie),ie=ke.getCamera()),C.isScene===!0&&C.onBeforeRender(Y,C,ie,K),I=We.get(C,E.length),I.init(ie),I.state.textureUnits=A.getTextureUnits(),E.push(I),Ze.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),ve.setFromProjectionMatrix(Ze,nr,ie.reversedDepth),He=this.localClippingEnabled,Ge=Ve.init(this.clippingPlanes,He),H=ye.get(C,F.length),H.init(),F.push(H),ke.enabled===!0&&ke.isPresenting===!0){const Xe=Y.xr.getDepthSensingMesh();Xe!==null&&Ci(Xe,ie,-1/0,Y.sortObjects)}Ci(C,ie,0,Y.sortObjects),H.finish(),Y.sortObjects===!0&&H.sort(j,ce),lt=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,lt&&Pe.addToRenderList(H,C),this.info.render.frame++,Ge===!0&&Ve.beginShadows();const ae=I.state.shadowsArray;if(Ce.render(ae,C,ie),Ge===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&U.hasRenderPass())===!1){const Xe=H.opaque,Ne=H.transmissive;if(I.setupLights(),ie.isArrayCamera){const et=ie.cameras;if(Ne.length>0)for(let it=0,ht=et.length;it<ht;it++){const dt=et[it];kn(Xe,Ne,C,dt)}lt&&Pe.render(C);for(let it=0,ht=et.length;it<ht;it++){const dt=et[it];Ri(H,C,dt,dt.viewport)}}else Ne.length>0&&kn(Xe,Ne,C,ie),lt&&Pe.render(C),Ri(H,C,ie)}K!==null&&Q===0&&(A.updateMultisampleRenderTarget(K),A.updateRenderTargetMipmap(K)),oe&&U.end(Y),C.isScene===!0&&C.onAfterRender(Y,C,ie),Fe.resetDefaultState(),se=-1,W=null,E.pop(),E.length>0?(I=E[E.length-1],A.setTextureUnits(I.state.textureUnits),Ge===!0&&Ve.setGlobalState(Y.clippingPlanes,I.state.camera)):I=null,F.pop(),F.length>0?H=F[F.length-1]:H=null,N!==null&&N.renderEnd()};function Ci(C,ie,de,oe){if(C.visible===!1)return;if(C.layers.test(ie.layers)){if(C.isGroup)de=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(ie);else if(C.isLightProbeGrid)I.pushLightProbeGrid(C);else if(C.isLight)I.pushLight(C),C.castShadow&&I.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ve.intersectsSprite(C)){oe&&nt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ze);const Xe=De.update(C),Ne=C.material;Ne.visible&&H.push(C,Xe,Ne,de,nt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ve.intersectsObject(C))){const Xe=De.update(C),Ne=C.material;if(oe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),nt.copy(C.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),nt.copy(Xe.boundingSphere.center)),nt.applyMatrix4(C.matrixWorld).applyMatrix4(Ze)),Array.isArray(Ne)){const et=Xe.groups;for(let it=0,ht=et.length;it<ht;it++){const dt=et[it],tt=Ne[dt.materialIndex];tt&&tt.visible&&H.push(C,Xe,tt,de,nt.z,dt)}}else Ne.visible&&H.push(C,Xe,Ne,de,nt.z,null)}}const Le=C.children;for(let Xe=0,Ne=Le.length;Xe<Ne;Xe++)Ci(Le[Xe],ie,de,oe)}function Ri(C,ie,de,oe){const{opaque:ae,transmissive:Le,transparent:Xe}=C;I.setupLightsView(de),Ge===!0&&Ve.setGlobalState(Y.clippingPlanes,de),oe&&z.viewport(Z.copy(oe)),ae.length>0&&ti(ae,ie,de),Le.length>0&&ti(Le,ie,de),Xe.length>0&&ti(Xe,ie,de),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function kn(C,ie,de,oe){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[oe.id]===void 0){const tt=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[oe.id]=new sr(1,1,{generateMipmaps:!0,type:tt?Ar:Ti,minFilter:Ss,samples:Math.max(4,At.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace})}const Le=I.state.transmissionRenderTarget[oe.id],Xe=oe.viewport||Z;Le.setSize(Xe.z*Y.transmissionResolutionScale,Xe.w*Y.transmissionResolutionScale);const Ne=Y.getRenderTarget(),et=Y.getActiveCubeFace(),it=Y.getActiveMipmapLevel();Y.setRenderTarget(Le),Y.getClearColor(D),q=Y.getClearAlpha(),q<1&&Y.setClearColor(16777215,.5),Y.clear(),lt&&Pe.render(de);const ht=Y.toneMapping;Y.toneMapping=ir;const dt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),I.setupLightsView(oe),Ge===!0&&Ve.setGlobalState(Y.clippingPlanes,oe),ti(C,de,oe),A.updateMultisampleRenderTarget(Le),A.updateRenderTargetMipmap(Le),vt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let bt=0,Ot=ie.length;bt<Ot;bt++){const Kt=ie[bt],{object:zt,geometry:tn,material:qe,group:fn}=Kt;if(qe.side===Gi&&zt.layers.test(oe.layers)){const Ct=qe.side;qe.side=ci,qe.needsUpdate=!0,ji(zt,de,oe,tn,qe,fn),qe.side=Ct,qe.needsUpdate=!0,tt=!0}}tt===!0&&(A.updateMultisampleRenderTarget(Le),A.updateRenderTargetMipmap(Le))}Y.setRenderTarget(Ne,et,it),Y.setClearColor(D,q),dt!==void 0&&(oe.viewport=dt),Y.toneMapping=ht}function ti(C,ie,de){const oe=ie.isScene===!0?ie.overrideMaterial:null;for(let ae=0,Le=C.length;ae<Le;ae++){const Xe=C[ae],{object:Ne,geometry:et,group:it}=Xe;let ht=Xe.material;ht.allowOverride===!0&&oe!==null&&(ht=oe),Ne.layers.test(de.layers)&&ji(Ne,ie,de,et,ht,it)}}function ji(C,ie,de,oe,ae,Le){C.onBeforeRender(Y,ie,de,oe,ae,Le),C.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ae.onBeforeRender(Y,ie,de,oe,C,Le),ae.transparent===!0&&ae.side===Gi&&ae.forceSinglePass===!1?(ae.side=ci,ae.needsUpdate=!0,Y.renderBufferDirect(de,ie,oe,ae,C,Le),ae.side=es,ae.needsUpdate=!0,Y.renderBufferDirect(de,ie,oe,ae,C,Le),ae.side=Gi):Y.renderBufferDirect(de,ie,oe,ae,C,Le),C.onAfterRender(Y,ie,de,oe,ae,Le)}function Pi(C,ie,de){ie.isScene!==!0&&(ie=Je);const oe=L.get(C),ae=I.state.lights,Le=I.state.shadowsArray,Xe=ae.state.version,Ne=Be.getParameters(C,ae.state,Le,ie,de,I.state.lightProbeGridArray),et=Be.getProgramCacheKey(Ne);let it=oe.programs;oe.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?ie.environment:null,oe.fog=ie.fog;const ht=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;oe.envMap=ne.get(C.envMap||oe.environment,ht),oe.envMapRotation=oe.environment!==null&&C.envMap===null?ie.environmentRotation:C.envMapRotation,it===void 0&&(C.addEventListener("dispose",Et),it=new Map,oe.programs=it);let dt=it.get(et);if(dt!==void 0){if(oe.currentProgram===dt&&oe.lightsStateVersion===Xe)return bn(C,Ne),dt}else Ne.uniforms=Be.getUniforms(C),N!==null&&C.isNodeMaterial&&N.build(C,de,Ne),C.onBeforeCompile(Ne,Y),dt=Be.acquireProgram(Ne,et),it.set(et,dt),oe.uniforms=Ne.uniforms;const tt=oe.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(tt.clippingPlanes=Ve.uniform),bn(C,Ne),oe.needsLights=Bn(C),oe.lightsStateVersion=Xe,oe.needsLights&&(tt.ambientLightColor.value=ae.state.ambient,tt.lightProbe.value=ae.state.probe,tt.directionalLights.value=ae.state.directional,tt.directionalLightShadows.value=ae.state.directionalShadow,tt.spotLights.value=ae.state.spot,tt.spotLightShadows.value=ae.state.spotShadow,tt.rectAreaLights.value=ae.state.rectArea,tt.ltc_1.value=ae.state.rectAreaLTC1,tt.ltc_2.value=ae.state.rectAreaLTC2,tt.pointLights.value=ae.state.point,tt.pointLightShadows.value=ae.state.pointShadow,tt.hemisphereLights.value=ae.state.hemi,tt.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,tt.spotLightMatrix.value=ae.state.spotLightMatrix,tt.spotLightMap.value=ae.state.spotLightMap,tt.pointShadowMatrix.value=ae.state.pointShadowMatrix),oe.lightProbeGrid=I.state.lightProbeGridArray.length>0,oe.currentProgram=dt,oe.uniformsList=null,dt}function _n(C){if(C.uniformsList===null){const ie=C.currentProgram.getUniforms();C.uniformsList=lc.seqWithValue(ie.seq,C.uniforms)}return C.uniformsList}function bn(C,ie){const de=L.get(C);de.outputColorSpace=ie.outputColorSpace,de.batching=ie.batching,de.batchingColor=ie.batchingColor,de.instancing=ie.instancing,de.instancingColor=ie.instancingColor,de.instancingMorph=ie.instancingMorph,de.skinning=ie.skinning,de.morphTargets=ie.morphTargets,de.morphNormals=ie.morphNormals,de.morphColors=ie.morphColors,de.morphTargetsCount=ie.morphTargetsCount,de.numClippingPlanes=ie.numClippingPlanes,de.numIntersection=ie.numClipIntersection,de.vertexAlphas=ie.vertexAlphas,de.vertexTangents=ie.vertexTangents,de.toneMapping=ie.toneMapping}function Cn(C,ie){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;P.setFromMatrixPosition(ie.matrixWorld);for(let de=0,oe=C.length;de<oe;de++){const ae=C[de];if(ae.texture!==null&&ae.boundingBox.containsPoint(P))return ae}return null}function Rn(C,ie,de,oe,ae){ie.isScene!==!0&&(ie=Je),A.resetTextureUnits();const Le=ie.fog,Xe=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?ie.environment:null,Ne=K===null?Y.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:kt.workingColorSpace,et=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,it=ne.get(oe.envMap||Xe,et),ht=oe.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,dt=!!de.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),tt=!!de.morphAttributes.position,bt=!!de.morphAttributes.normal,Ot=!!de.morphAttributes.color;let Kt=ir;oe.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Kt=Y.toneMapping);const zt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,tn=zt!==void 0?zt.length:0,qe=L.get(oe),fn=I.state.lights;if(Ge===!0&&(He===!0||C!==W)){const Ht=C===W&&oe.id===se;Ve.setState(oe,C,Ht)}let Ct=!1;oe.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==fn.state.version||qe.outputColorSpace!==Ne||ae.isBatchedMesh&&qe.batching===!1||!ae.isBatchedMesh&&qe.batching===!0||ae.isBatchedMesh&&qe.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&qe.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&qe.instancing===!1||!ae.isInstancedMesh&&qe.instancing===!0||ae.isSkinnedMesh&&qe.skinning===!1||!ae.isSkinnedMesh&&qe.skinning===!0||ae.isInstancedMesh&&qe.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&qe.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&qe.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&qe.instancingMorph===!1&&ae.morphTexture!==null||qe.envMap!==it||oe.fog===!0&&qe.fog!==Le||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ve.numPlanes||qe.numIntersection!==Ve.numIntersection)||qe.vertexAlphas!==ht||qe.vertexTangents!==dt||qe.morphTargets!==tt||qe.morphNormals!==bt||qe.morphColors!==Ot||qe.toneMapping!==Kt||qe.morphTargetsCount!==tn||!!qe.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Ct=!0):(Ct=!0,qe.__version=oe.version);let Pn=qe.currentProgram;Ct===!0&&(Pn=Pi(oe,ie,ae),N&&oe.isNodeMaterial&&N.onUpdateProgram(oe,Pn,qe));let Ln=!1,Tt=!1,ui=!1;const Bt=Pn.getUniforms(),Jt=qe.uniforms;if(z.useProgram(Pn.program)&&(Ln=!0,Tt=!0,ui=!0),oe.id!==se&&(se=oe.id,Tt=!0),qe.needsLights){const Ht=Cn(I.state.lightProbeGridArray,ae);qe.lightProbeGrid!==Ht&&(qe.lightProbeGrid=Ht,Tt=!0)}if(Ln||W!==C){z.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Bt.setValue(ee,"projectionMatrix",C.projectionMatrix),Bt.setValue(ee,"viewMatrix",C.matrixWorldInverse);const Li=Bt.map.cameraPosition;Li!==void 0&&Li.setValue(ee,Qe.setFromMatrixPosition(C.matrixWorld)),At.logarithmicDepthBuffer&&Bt.setValue(ee,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Bt.setValue(ee,"isOrthographic",C.isOrthographicCamera===!0),W!==C&&(W=C,Tt=!0,ui=!0)}if(qe.needsLights&&(fn.state.directionalShadowMap.length>0&&Bt.setValue(ee,"directionalShadowMap",fn.state.directionalShadowMap,A),fn.state.spotShadowMap.length>0&&Bt.setValue(ee,"spotShadowMap",fn.state.spotShadowMap,A),fn.state.pointShadowMap.length>0&&Bt.setValue(ee,"pointShadowMap",fn.state.pointShadowMap,A)),ae.isSkinnedMesh){Bt.setOptional(ee,ae,"bindMatrix"),Bt.setOptional(ee,ae,"bindMatrixInverse");const Ht=ae.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Bt.setValue(ee,"boneTexture",Ht.boneTexture,A))}ae.isBatchedMesh&&(Bt.setOptional(ee,ae,"batchingTexture"),Bt.setValue(ee,"batchingTexture",ae._matricesTexture,A),Bt.setOptional(ee,ae,"batchingIdTexture"),Bt.setValue(ee,"batchingIdTexture",ae._indirectTexture,A),Bt.setOptional(ee,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Bt.setValue(ee,"batchingColorTexture",ae._colorsTexture,A));const yn=de.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&ct.update(ae,de,Pn),(Tt||qe.receiveShadow!==ae.receiveShadow)&&(qe.receiveShadow=ae.receiveShadow,Bt.setValue(ee,"receiveShadow",ae.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&ie.environment!==null&&(Jt.envMapIntensity.value=ie.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=qE()),Tt){if(Bt.setValue(ee,"toneMappingExposure",Y.toneMappingExposure),qe.needsLights&&On(Jt,ui),Le&&oe.fog===!0&&xe.refreshFogUniforms(Jt,Le),xe.refreshMaterialUniforms(Jt,oe,me,ge,I.state.transmissionRenderTarget[C.id]),qe.needsLights&&qe.lightProbeGrid){const Ht=qe.lightProbeGrid;Jt.probesSH.value=Ht.texture,Jt.probesMin.value.copy(Ht.boundingBox.min),Jt.probesMax.value.copy(Ht.boundingBox.max),Jt.probesResolution.value.copy(Ht.resolution)}lc.upload(ee,_n(qe),Jt,A)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(lc.upload(ee,_n(qe),Jt,A),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Bt.setValue(ee,"center",ae.center),Bt.setValue(ee,"modelViewMatrix",ae.modelViewMatrix),Bt.setValue(ee,"normalMatrix",ae.normalMatrix),Bt.setValue(ee,"modelMatrix",ae.matrixWorld),oe.uniformsGroups!==void 0){const Ht=oe.uniformsGroups;for(let Li=0,qi=Ht.length;Li<qi;Li++){const ts=Ht[Li];_e.update(ts,Pn),_e.bind(ts,Pn)}}return Pn}function On(C,ie){C.ambientLightColor.needsUpdate=ie,C.lightProbe.needsUpdate=ie,C.directionalLights.needsUpdate=ie,C.directionalLightShadows.needsUpdate=ie,C.pointLights.needsUpdate=ie,C.pointLightShadows.needsUpdate=ie,C.spotLights.needsUpdate=ie,C.spotLightShadows.needsUpdate=ie,C.rectAreaLights.needsUpdate=ie,C.hemisphereLights.needsUpdate=ie}function Bn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(C,ie,de){const oe=L.get(C);oe.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),L.get(C.texture).__webglTexture=ie,L.get(C.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:de,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,ie){const de=L.get(C);de.__webglFramebuffer=ie,de.__useDefaultFramebuffer=ie===void 0};const qt=ee.createFramebuffer();this.setRenderTarget=function(C,ie=0,de=0){K=C,k=ie,Q=de;let oe=null,ae=!1,Le=!1;if(C){const Ne=L.get(C);if(Ne.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(ee.FRAMEBUFFER,Ne.__webglFramebuffer),Z.copy(C.viewport),O.copy(C.scissor),B=C.scissorTest,z.viewport(Z),z.scissor(O),z.setScissorTest(B),se=-1;return}else if(Ne.__webglFramebuffer===void 0)A.setupRenderTarget(C);else if(Ne.__hasExternalTextures)A.rebindTextures(C,L.get(C.texture).__webglTexture,L.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ht=C.depthTexture;if(Ne.__boundDepthTexture!==ht){if(ht!==null&&L.has(ht)&&(C.width!==ht.image.width||C.height!==ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(C)}}const et=C.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Le=!0);const it=L.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(it[ie])?oe=it[ie][de]:oe=it[ie],ae=!0):C.samples>0&&A.useMultisampledRTT(C)===!1?oe=L.get(C).__webglMultisampledFramebuffer:Array.isArray(it)?oe=it[de]:oe=it,Z.copy(C.viewport),O.copy(C.scissor),B=C.scissorTest}else Z.copy(le).multiplyScalar(me).floor(),O.copy(Ee).multiplyScalar(me).floor(),B=we;if(de!==0&&(oe=qt),z.bindFramebuffer(ee.FRAMEBUFFER,oe)&&z.drawBuffers(C,oe),z.viewport(Z),z.scissor(O),z.setScissorTest(B),ae){const Ne=L.get(C.texture);ee.framebufferTexture2D(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne.__webglTexture,de)}else if(Le){const Ne=ie;for(let et=0;et<C.textures.length;et++){const it=L.get(C.textures[et]);ee.framebufferTextureLayer(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0+et,it.__webglTexture,de,Ne)}}else if(C!==null&&de!==0){const Ne=L.get(C.texture);ee.framebufferTexture2D(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_2D,Ne.__webglTexture,de)}se=-1},this.readRenderTargetPixels=function(C,ie,de,oe,ae,Le,Xe,Ne=0){if(!(C&&C.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=L.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xe!==void 0&&(et=et[Xe]),et){z.bindFramebuffer(ee.FRAMEBUFFER,et);try{const it=C.textures[Ne],ht=it.format,dt=it.type;if(C.textures.length>1&&ee.readBuffer(ee.COLOR_ATTACHMENT0+Ne),!At.textureFormatReadable(ht)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(dt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie>=0&&ie<=C.width-oe&&de>=0&&de<=C.height-ae&&ee.readPixels(ie,de,oe,ae,J.convert(ht),J.convert(dt),Le)}finally{const it=K!==null?L.get(K).__webglFramebuffer:null;z.bindFramebuffer(ee.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(C,ie,de,oe,ae,Le,Xe,Ne=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let et=L.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xe!==void 0&&(et=et[Xe]),et)if(ie>=0&&ie<=C.width-oe&&de>=0&&de<=C.height-ae){z.bindFramebuffer(ee.FRAMEBUFFER,et);const it=C.textures[Ne],ht=it.format,dt=it.type;if(C.textures.length>1&&ee.readBuffer(ee.COLOR_ATTACHMENT0+Ne),!At.textureFormatReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=ee.createBuffer();ee.bindBuffer(ee.PIXEL_PACK_BUFFER,tt),ee.bufferData(ee.PIXEL_PACK_BUFFER,Le.byteLength,ee.STREAM_READ),ee.readPixels(ie,de,oe,ae,J.convert(ht),J.convert(dt),0);const bt=K!==null?L.get(K).__webglFramebuffer:null;z.bindFramebuffer(ee.FRAMEBUFFER,bt);const Ot=ee.fenceSync(ee.SYNC_GPU_COMMANDS_COMPLETE,0);return ee.flush(),await ty(ee,Ot,4),ee.bindBuffer(ee.PIXEL_PACK_BUFFER,tt),ee.getBufferSubData(ee.PIXEL_PACK_BUFFER,0,Le),ee.deleteBuffer(tt),ee.deleteSync(Ot),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,ie=null,de=0){const oe=Math.pow(2,-de),ae=Math.floor(C.image.width*oe),Le=Math.floor(C.image.height*oe),Xe=ie!==null?ie.x:0,Ne=ie!==null?ie.y:0;A.setTexture2D(C,0),ee.copyTexSubImage2D(ee.TEXTURE_2D,de,0,0,Xe,Ne,ae,Le),z.unbindTexture()};const ft=ee.createFramebuffer(),Qt=ee.createFramebuffer();this.copyTextureToTexture=function(C,ie,de=null,oe=null,ae=0,Le=0){let Xe,Ne,et,it,ht,dt,tt,bt,Ot;const Kt=C.isCompressedTexture?C.mipmaps[Le]:C.image;if(de!==null)Xe=de.max.x-de.min.x,Ne=de.max.y-de.min.y,et=de.isBox3?de.max.z-de.min.z:1,it=de.min.x,ht=de.min.y,dt=de.isBox3?de.min.z:0;else{const Jt=Math.pow(2,-ae);Xe=Math.floor(Kt.width*Jt),Ne=Math.floor(Kt.height*Jt),C.isDataArrayTexture?et=Kt.depth:C.isData3DTexture?et=Math.floor(Kt.depth*Jt):et=1,it=0,ht=0,dt=0}oe!==null?(tt=oe.x,bt=oe.y,Ot=oe.z):(tt=0,bt=0,Ot=0);const zt=J.convert(ie.format),tn=J.convert(ie.type);let qe;ie.isData3DTexture?(A.setTexture3D(ie,0),qe=ee.TEXTURE_3D):ie.isDataArrayTexture||ie.isCompressedArrayTexture?(A.setTexture2DArray(ie,0),qe=ee.TEXTURE_2D_ARRAY):(A.setTexture2D(ie,0),qe=ee.TEXTURE_2D),z.activeTexture(ee.TEXTURE0),z.pixelStorei(ee.UNPACK_FLIP_Y_WEBGL,ie.flipY),z.pixelStorei(ee.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),z.pixelStorei(ee.UNPACK_ALIGNMENT,ie.unpackAlignment);const fn=z.getParameter(ee.UNPACK_ROW_LENGTH),Ct=z.getParameter(ee.UNPACK_IMAGE_HEIGHT),Pn=z.getParameter(ee.UNPACK_SKIP_PIXELS),Ln=z.getParameter(ee.UNPACK_SKIP_ROWS),Tt=z.getParameter(ee.UNPACK_SKIP_IMAGES);z.pixelStorei(ee.UNPACK_ROW_LENGTH,Kt.width),z.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,Kt.height),z.pixelStorei(ee.UNPACK_SKIP_PIXELS,it),z.pixelStorei(ee.UNPACK_SKIP_ROWS,ht),z.pixelStorei(ee.UNPACK_SKIP_IMAGES,dt);const ui=C.isDataArrayTexture||C.isData3DTexture,Bt=ie.isDataArrayTexture||ie.isData3DTexture;if(C.isDepthTexture){const Jt=L.get(C),yn=L.get(ie),Ht=L.get(Jt.__renderTarget),Li=L.get(yn.__renderTarget);z.bindFramebuffer(ee.READ_FRAMEBUFFER,Ht.__webglFramebuffer),z.bindFramebuffer(ee.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let qi=0;qi<et;qi++)ui&&(ee.framebufferTextureLayer(ee.READ_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,L.get(C).__webglTexture,ae,dt+qi),ee.framebufferTextureLayer(ee.DRAW_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,L.get(ie).__webglTexture,Le,Ot+qi)),ee.blitFramebuffer(it,ht,Xe,Ne,tt,bt,Xe,Ne,ee.DEPTH_BUFFER_BIT,ee.NEAREST);z.bindFramebuffer(ee.READ_FRAMEBUFFER,null),z.bindFramebuffer(ee.DRAW_FRAMEBUFFER,null)}else if(ae!==0||C.isRenderTargetTexture||L.has(C)){const Jt=L.get(C),yn=L.get(ie);z.bindFramebuffer(ee.READ_FRAMEBUFFER,ft),z.bindFramebuffer(ee.DRAW_FRAMEBUFFER,Qt);for(let Ht=0;Ht<et;Ht++)ui?ee.framebufferTextureLayer(ee.READ_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,Jt.__webglTexture,ae,dt+Ht):ee.framebufferTexture2D(ee.READ_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_2D,Jt.__webglTexture,ae),Bt?ee.framebufferTextureLayer(ee.DRAW_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,yn.__webglTexture,Le,Ot+Ht):ee.framebufferTexture2D(ee.DRAW_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_2D,yn.__webglTexture,Le),ae!==0?ee.blitFramebuffer(it,ht,Xe,Ne,tt,bt,Xe,Ne,ee.COLOR_BUFFER_BIT,ee.NEAREST):Bt?ee.copyTexSubImage3D(qe,Le,tt,bt,Ot+Ht,it,ht,Xe,Ne):ee.copyTexSubImage2D(qe,Le,tt,bt,it,ht,Xe,Ne);z.bindFramebuffer(ee.READ_FRAMEBUFFER,null),z.bindFramebuffer(ee.DRAW_FRAMEBUFFER,null)}else Bt?C.isDataTexture||C.isData3DTexture?ee.texSubImage3D(qe,Le,tt,bt,Ot,Xe,Ne,et,zt,tn,Kt.data):ie.isCompressedArrayTexture?ee.compressedTexSubImage3D(qe,Le,tt,bt,Ot,Xe,Ne,et,zt,Kt.data):ee.texSubImage3D(qe,Le,tt,bt,Ot,Xe,Ne,et,zt,tn,Kt):C.isDataTexture?ee.texSubImage2D(ee.TEXTURE_2D,Le,tt,bt,Xe,Ne,zt,tn,Kt.data):C.isCompressedTexture?ee.compressedTexSubImage2D(ee.TEXTURE_2D,Le,tt,bt,Kt.width,Kt.height,zt,Kt.data):ee.texSubImage2D(ee.TEXTURE_2D,Le,tt,bt,Xe,Ne,zt,tn,Kt);z.pixelStorei(ee.UNPACK_ROW_LENGTH,fn),z.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,Ct),z.pixelStorei(ee.UNPACK_SKIP_PIXELS,Pn),z.pixelStorei(ee.UNPACK_SKIP_ROWS,Ln),z.pixelStorei(ee.UNPACK_SKIP_IMAGES,Tt),Le===0&&ie.generateMipmaps&&ee.generateMipmap(qe),z.unbindTexture()},this.initRenderTarget=function(C){L.get(C).__webglFramebuffer===void 0&&A.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),z.unbindTexture()},this.resetState=function(){k=0,Q=0,K=null,z.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(e),t.unpackColorSpace=kt._getUnpackColorSpace()}}function da(s,e,t){const r=e/100,o=t/100,l=(1-Math.abs(2*o-1))*r,c=l*(1-Math.abs(s/60%2-1)),f=o-l/2;let d=0,h=0,g=0;s<60?[d,h,g]=[l,c,0]:s<120?[d,h,g]=[c,l,0]:s<180?[d,h,g]=[0,l,c]:s<240?[d,h,g]=[0,c,l]:s<300?[d,h,g]=[c,0,l]:[d,h,g]=[l,0,c];const x=m=>Math.round((m+f)*255).toString(16).padStart(2,"0");return`#${x(d)}${x(h)}${x(g)}`}function Jr(s,e,t){if(t==="grayscale")return["#FFFFFF","#000000","#FFFFFF","#000000"];if(t==="black")return[da(s,e,50),"#FFFFFF",da(s,e*.6,70),da(s,e*.8,35)];const r=da(s,e,50),o=da((s+180)%360,e,50);return[r,o,r,o]}const ig=[1],xa=[0];let Sv=0;const YE=new Set;function QE(s,e){for(let t=0;t<e.length;t++){const r=e[t]??1;ig[t]=r,xa[t]=(xa[t]??0)+s*r}for(const t of YE)xa[t]=(xa[t]??0)+s*(ig[t]??1)}function JE(s){Sv=s}function ZE(){return xa[Sv]??0}const cc=12,Kn=Math.PI*2;function Av(s,e){if(e<=0)return 0;const t=Math.min(2.2,10/e);return Math.min(e,1+Math.floor(s/t))}const $l=[[[0,"#5ea733"],[.1,"#a9c97a"],[.17,"#efe6c6"],[.26,"#f2b2c5"],[.36,"#df4a67"],[.45,"#b81f3d"],[.53,"#1a0d33"],[.61,"#2e44d8"],[.7,"#5f78f0"],[.79,"#dfe4f4"],[.87,"#eee6c4"],[.94,"#9cc46c"],[1,"#5ea733"]],[[0,"#e0a82e"],[.1,"#f0cd7a"],[.17,"#f6ead0"],[.26,"#f6b49a"],[.36,"#e8573a"],[.45,"#b52a1c"],[.53,"#2a0a0c"],[.61,"#a8401c"],[.7,"#e8823e"],[.79,"#f7dcc4"],[.87,"#f4e8c8"],[.94,"#e9c060"],[1,"#e0a82e"]],[[0,"#1f9a8a"],[.1,"#86d1bf"],[.17,"#eaf2e2"],[.26,"#9fe3e8"],[.36,"#25b5d4"],[.45,"#13708f"],[.53,"#0b1430"],[.61,"#5a35c8"],[.7,"#9a7cf0"],[.79,"#e6e0f6"],[.87,"#e4f2ea"],[.94,"#5cc2a6"],[1,"#1f9a8a"]],[[0,"#2b3f8f"],[.1,"#7d8fd0"],[.17,"#eef0f6"],[.26,"#c9d0ea"],[.36,"#5266b8"],[.45,"#22307a"],[.53,"#070a1c"],[.61,"#26357e"],[.7,"#6a7cc6"],[.79,"#e8ebf5"],[.87,"#f4f3ee"],[.94,"#8a9ad6"],[1,"#2b3f8f"]]],$E=["Inflated","Paper","Line","Print"],ew=`
varying vec3 vN;
varying vec3 vPos;
varying vec3 vW;
varying vec2 vUv;
varying float vRad;
void main() {
  vUv = uv;
  vRad = position.z * 0.5 + 0.5;
  vW = (modelMatrix * vec4(position, 1.0)).xyz;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vPos = mv.xyz;
  vN = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * mv;
}`,tw=`
precision highp float;
varying vec3 vN;
varying vec3 vPos;
varying vec3 vW;
varying vec2 vUv;
varying float vRad;
uniform sampler2D uPalA;
uniform sampler2D uPalB;
uniform float uPalMix;
uniform int uMode;            // 0 lobe (petal, wing), 1 tube (stem), 2 core (body, stamens)
uniform int uStyle;           // 0 inflated, 1 paper, 2 line, 3 print
uniform float uT, uOff, uAng, uWA, uWB, uWC, uWS, uDepth, uSpec;
uniform vec3 uCenter;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

vec3 palette(float c) {
  vec2 at = vec2(fract(c), 0.5);
  return mix(texture2D(uPalA, at).rgb, texture2D(uPalB, at).rgb, uPalMix);
}

void main() {
  vec3 N = normalize(vN);
  if (!gl_FrontFacing) N = -N;
  vec3 V = normalize(-vPos);
  vec3 L = normalize(vec3(0.3, 0.35, 0.9));
  float wrap = clamp(dot(N, L) * 0.5 + 0.5, 0.0, 1.0);
  float rim = 1.0 - clamp(dot(N, V), 0.0, 1.0);

  float c = uOff + uT;
  float ao = 1.0;
  if (uMode == 0) {
    ao = smoothstep(0.15, 1.2, length(vPos - uCenter));
    c += uWA * 0.5 * (1.0 + cos(uAng)) * 0.55   // sweeps round the fan of lobes
       + uWB * vW.y * 0.22                       // horizontal bands
       + uWC * vRad * 0.45;                      // rings out along each lobe
  } else if (uMode == 1) {
    c += vUv.x * 0.85 * uWS;                     // bands flowing along the tube
  } else {
    c += 0.42;
  }

  // The pattern alone, before any shading is added to it.
  float flat_ = c;
  // Shading travels forward through the palette: lit surfaces sit on the
  // lighter stops, shadowed ones slide on into the deeper ones.
  c += uDepth * (1.0 - wrap) + 0.12 * smoothstep(0.55, 1.0, rim) + 0.18 * (1.0 - ao);

  vec3 col;
  if (uStyle == 1) {
    // ── Paper ──────────────────────────────────────────────────────────
    // Cut paper: the palette taken a stop at a time, so colour sits in flat
    // shapes with hard edges; one step of shadow instead of a gradient; and
    // a dark line where the surface turns away, as an outline.
    float b = c * 12.0;
    float w = fwidth(b) * 1.2;
    float stop = (floor(b) + smoothstep(1.0 - w, 1.0, fract(b)) + 0.45) / 12.0;
    col = palette(stop);
    float lw = fwidth(wrap) * 1.5;
    col *= mix(0.78, 1.0, smoothstep(0.42 - lw, 0.42 + lw, wrap));
    col = mix(col, palette(0.53) * 0.6, smoothstep(0.8, 0.86, rim));
  } else if (uStyle == 2) {
    // ── Line ───────────────────────────────────────────────────────────
    // A drawing in light on black: fine lines running out along every
    // petal and round every stem, and the outline of each form. The surface
    // between the lines is black, and solid, so what is behind stays hidden.
    float along = uMode == 0 ? vRad * 10.0 - uT * 3.0 : (uMode == 1 ? vUv.x * 46.0 - uT * 3.0 : vUv.y * 7.0);
    float w = fwidth(along) * 1.3;
    float line = 1.0 - smoothstep(0.07, 0.07 + w, abs(fract(along) - 0.5));
    float edge = smoothstep(0.6, 0.78, rim);
    float ink = clamp(max(line * (0.35 + 0.65 * wrap), edge), 0.0, 1.0);
    // Lifted towards pastel, so the palette's navy still shows as a line.
    col = (1.0 - (1.0 - palette(flat_ + 0.1)) * 0.6) * ink * mix(0.6, 1.0, ao);
  } else if (uStyle == 3) {
    // ── Print ──────────────────────────────────────────────────────────
    // Two inks and a dot screen, as a risograph lays it down: flat colour
    // for the form, and its shadow as dots of the palette's dark, larger
    // where the shadow is deeper.
    float b = flat_ * 12.0;
    col = palette((floor(b) + 0.45) / 12.0);
    vec2 g = mat2(0.866, -0.5, 0.5, 0.866) * gl_FragCoord.xy / 6.5;
    float d = length(fract(g) - 0.5);
    float tone = clamp(1.05 - wrap * 1.25 + 0.55 * (1.0 - ao) + 0.5 * smoothstep(0.6, 1.0, rim), 0.0, 1.0);
    float r = 0.7 * sqrt(tone);
    col = mix(col, palette(0.53) * 0.9, (1.0 - smoothstep(r - 0.07, r + 0.07, d)) * step(0.02, tone));
  } else {
    col = palette(c);
    col *= 0.82 + 0.28 * wrap;
    col *= mix(0.55, 1.0, ao);
    col += vec3(1.0) * pow(max(dot(reflect(-L, N), V), 0.0), 16.0) * uSpec * ao;
    col = mix(col, col * col * 0.6, smoothstep(0.85, 1.0, rim) * 0.6);
    col += (hash(gl_FragCoord.xy) - 0.5) / 255.0 * 2.0;
  }
  gl_FragColor = vec4(max(col, 0.0), 1.0);
}`,nw=0,iw=1,rw=2;function bc(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(m=>m+m).join(""):e,r=(parseInt(t.slice(0,2),16)||0)/255,o=(parseInt(t.slice(2,4),16)||0)/255,l=(parseInt(t.slice(4,6),16)||0)/255,c=Math.max(r,o,l),f=Math.min(r,o,l),d=(c+f)/2;if(c===f)return[0,0,d];const h=c-f,g=d>.5?h/(2-c-f):h/(c+f);let x;return c===r?x=((o-l)/h+(o<l?6:0))*60:c===o?x=((l-r)/h+2)*60:x=((r-o)/h+4)*60,[x,g,d]}function Ev(s,e,t){return`hsl(${(s%360+360)%360} ${Math.max(0,Math.min(1,e))*100}% ${t*100}%)`}const rg=bc(Jr(245,100,"contrast")[0]);function wv(s){const[e,t]=bc(s[0]??"#000000");return t===0?{hue:0,sat:0}:{hue:e-rg[0],sat:t/(rg[1]||1)}}function sg(s,e){const t=document.createElement("canvas");t.width=512,t.height=1;const r=t.getContext("2d"),o=r.createLinearGradient(0,0,512,0);for(const[c,f]of s){const[d,h,g]=bc(f);o.addColorStop(c,Ev(d+e.hue,h*e.sat,g))}r.fillStyle=o,r.fillRect(0,0,512,1);const l=new Hy(t);return l.wrapS=fc,l.magFilter=wn,l.minFilter=wn,l.generateMipmaps=!1,l}class Tv{constructor(){V(this,"textures");V(this,"turnKey","#reference");V(this,"palFrom",0);V(this,"palTo",0);V(this,"palMix",1);V(this,"styleUniform",{value:0});V(this,"turn",{hue:0,sat:1});this.textures=$l.map(e=>sg(e,{hue:0,sat:1}))}shared(){return{uPalA:{value:this.textures[0]},uPalB:{value:this.textures[0]},uPalMix:{value:0},uT:{value:0},uOff:{value:0},uWA:{value:0},uWB:{value:0},uWC:{value:0},uDepth:{value:.32},uSpec:{value:.16},uCenter:{value:new $}}}material(e,t,r={}){return new vi({vertexShader:ew,fragmentShader:tw,side:Gi,uniforms:{...t,uStyle:this.styleUniform,uMode:{value:e},uAng:{value:0},uWS:{value:1},...r}})}update(e,t,r,o,l=0){this.styleUniform.value=Math.max(0,Math.min($E.length-1,Math.round(l)));const c=e[0]??"";if(c!==this.turnKey){this.turnKey=c;const d=wv(e);this.turn=d;const h=this.textures;this.textures=$l.map(g=>sg(g,d));for(const g of h)g.dispose()}const f=Math.max(0,Math.min($l.length-1,Math.round(t)));o&&(this.palFrom=this.palTo=f,this.palMix=1),f!==this.palTo&&(this.palFrom=this.palMix<.5?this.palFrom:this.palTo,this.palTo=f,this.palMix=0),this.palMix=Math.min(1,this.palMix+r)}apply(e,t,r){e.uPalA.value=this.textures[this.palFrom],e.uPalB.value=this.textures[this.palTo],e.uPalMix.value=this.palMix,e.uDepth.value=t,e.uSpec.value=r}backdrop(e,t,r,o){const l=this.styleUniform.value;if(l===0){Cv(e,t,r,o);return}const c=Math.max(0,Math.min(1,o));if(e.globalCompositeOperation="source-over",e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,t,r),l===2||c<=0)return;const f=$l[this.palTo],d=f.find(([m])=>m===(l===1?.53:.17))??f[0],[h,g,x]=bc(d[1]);e.globalAlpha=c,e.fillStyle=Ev(h+this.turn.hue,g*this.turn.sat,l===1?x*1.25:x),e.fillRect(0,0,t,r),e.globalAlpha=1}dispose(){for(const e of this.textures)e.dispose();this.textures=[]}}function bv(s,e,t){const r=e/t,o=30,l=Math.tan(o/2*Math.PI/180),c=r<16/9?2*Math.atan(l*(16/9)/r)*180/Math.PI:o;(s.aspect!==r||s.fov!==c)&&(s.aspect=r,s.fov=c,s.updateProjectionMatrix())}function Cv(s,e,t,r){const o=Math.max(0,Math.min(1,r)),l=c=>{const f=parseInt(c.slice(1),16),d=Math.round((f>>16&255)*o),h=Math.round((f>>8&255)*o),g=Math.round((f&255)*o);return`rgb(${d},${h},${g})`};if(s.globalCompositeOperation="source-over",s.globalAlpha=1,o<=0)s.fillStyle="#000";else{const c=s.createLinearGradient(0,0,0,t);c.addColorStop(0,l("#8e94a2")),c.addColorStop(.2,l("#bfc3d0")),c.addColorStop(.42,l("#dde1ec")),c.addColorStop(.68,l("#d9dde9")),c.addColorStop(1,l("#9ea2af")),s.fillStyle=c}s.fillRect(0,0,e,t)}function dd(s){const e=new Mv({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"});return e.setPixelRatio(1),e.setClearColor(0,0),e}function pd(s,e,t,r){s.fillStyle="#000",s.fillRect(0,0,e,t),s.fillStyle="rgba(255,255,255,0.4)",s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.fillText(`${r} NEEDS WEBGL`,e/2,t/2)}class Rs{constructor(e){V(this,"dt",1/60);V(this,"step",0);V(this,"openness");V(this,"aim",{x:0,y:0});V(this,"spread",.4);V(this,"depth",.35);V(this,"turn",0);V(this,"pinch",0);V(this,"fist",0);V(this,"clapped",!1);V(this,"clapStrength",0);V(this,"wasClapping",!1);V(this,"burst",0);V(this,"bump",0);V(this,"bass",0);V(this,"mid",0);V(this,"high",0);V(this,"kick",0);V(this,"snare",0);V(this,"hat",0);V(this,"energy",.5);V(this,"build",0);V(this,"drop",0);V(this,"bright",.5);V(this,"lastClock",null);V(this,"lastFrame",0);this.rest=e,this.openness=e}read(e,t){const r=performance.now(),o=this.lastFrame?Math.min(.1,(r-this.lastFrame)/1e3):1/60;this.lastFrame=r;const l=ZE();this.step=this.lastClock===null?0:Math.max(-.2,Math.min(.2,l-this.lastClock)),this.lastClock=l,this.dt=o;const c=[e.left,e.right].filter(Boolean);let f=this.rest;if(c.length){const w=Math.max(...c.map(R=>R.gesture==="fist"?0:R.fingerCount??3));f=Math.max(0,Math.min(1,w/5))}this.openness+=(f-this.openness)*(1-Math.exp(-o*5));let d=0,h=0;c.length&&(d=(c.reduce((w,R)=>w+R.position.x,0)/c.length-.5)*2,h=(.5-c.reduce((w,R)=>w+R.position.y,0)/c.length)*2);const g=1-Math.exp(-o*4);this.aim.x+=(d-this.aim.x)*g,this.aim.y+=(h-this.aim.y)*g,this.spread+=((e.distanceBetweenHands??.4)-this.spread)*g;const x=c.map(w=>w.depth).filter(w=>w!==void 0);this.depth+=((x.length?Math.max(...x):.35)-this.depth)*g;const m=e.twist??(c.length===1?c[0].angle??0:0);this.turn+=(m-this.turn)*g;const _=c.length?Math.max(...c.map(w=>w.pinch??0)):0;this.pinch+=(_-this.pinch)*(1-Math.exp(-o*10));const S=c.length?Math.max(...c.map(w=>w.openness!==void 0?1-w.openness:w.gesture==="fist"?1:0)):0;this.fist+=(Math.min(1,Math.max(0,(S-.35)/.4))-this.fist)*(1-Math.exp(-o*8));const T=!!e.clapping&&!e.synthetic;this.clapped=T&&!this.wasClapping,this.clapStrength=this.clapped?Math.max(.6,e.clapIntensity??1):0,this.wasClapping=T;const y=e.clapping?e.clapIntensity??1:0;this.burst=Math.max(this.burst*Math.exp(-o*2.2),y);const M=(w,R,P,H)=>w+(R-w)*(1-Math.exp(-o*(R>w?P:H)));this.bass=M(this.bass,(t==null?void 0:t.bass)??0,6,1.5),this.mid=M(this.mid,(t==null?void 0:t.mid)??0,4,1),this.high=M(this.high,(t==null?void 0:t.high)??0,8,2.5),this.bump*=Math.exp(-o/.07),t!=null&&t.beat&&(this.bump=Math.max(this.bump,t.beatIntensity||1)),this.kick=(t==null?void 0:t.kick)??0,this.bump=Math.max(this.bump,this.kick*.9),this.snare=(t==null?void 0:t.snare)??0,this.hat=(t==null?void 0:t.hat)??0,this.energy=M(this.energy,t!=null&&t.live?t.energy??.5:.5,1,1),this.build=(t==null?void 0:t.build)??0,this.drop=(t==null?void 0:t.drop)??0,this.bright=M(this.bright,(t==null?void 0:t.bright)??.5,1,1)}}class sw{constructor(e,t){V(this,"canvas");V(this,"ctx");V(this,"cfg",qm);V(this,"playing",new Rs(.6));V(this,"n",0);V(this,"x",new Float32Array(0));V(this,"y",new Float32Array(0));V(this,"z",new Float32Array(0));V(this,"vx",new Float32Array(0));V(this,"vy",new Float32Array(0));V(this,"light",new Float32Array(0));V(this,"phase",new Float32Array(0));V(this,"time",0);V(this,"events",[]);V(this,"lastKick",0);V(this,"lastSnare",0);V(this,"lastHat",0);V(this,"kicks",0);V(this,"flow",[Math.random()*10,Math.random()*10,Math.random()*10]);V(this,"flowTo",[...this.flow]);V(this,"gather",0);V(this,"breath",0);V(this,"grain",document.createElement("canvas"));V(this,"aspect",16/9);this.canvas=e,this.ctx=t,this.grain.width=this.grain.height=256;const r=this.grain.getContext("2d"),o=r.createImageData(256,256);for(let l=0;l<o.data.length;l+=4){const c=Math.random()<.5?0:255;o.data[l]=o.data[l+1]=o.data[l+2]=c,o.data[l+3]=Math.random()<.35?255:0}r.putImageData(o,0,0)}setParams(e){this.cfg=bs(qm,e)}resize(e){const t=Math.min(this.n,e),r=o=>{const l=new Float32Array(e);return l.set(o.subarray(0,t)),l};this.x=r(this.x),this.y=r(this.y),this.z=r(this.z),this.vx=r(this.vx),this.vy=r(this.vy),this.light=r(this.light),this.phase=r(this.phase);for(let o=t;o<e;o++)this.x[o]=Math.random()*this.aspect,this.y[o]=Math.random(),this.z[o]=.25+.75*Math.pow(Math.random(),2.2),this.phase[o]=Math.random()*Math.PI*2,this.light[o]=0;this.n=e}angleAt(e,t,r){const[o,l,c]=this.flow;return Math.sin(e*1.3+o+r*.05)*1.7+Math.cos(t*1.7-l+r*.04)*1.5+Math.sin((e+t)*.8+c)*1.2}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;this.aspect=f/d;const h=this.aspect,g=this.playing;g.read(e,r);const x=Math.min(.1,g.dt),m=Math.min(.08,Math.max(0,g.step));this.time+=m;const _=Math.max(50,Math.min(6e3,Math.round(c.field.count)));_!==this.n&&this.resize(_);const S=!!(r!=null&&r.live),T=O=>1-Math.exp(-x*O),y=Math.max(g.kick,g.bump)*c.sound.beat;if(y>.45&&this.lastKick<=.45){this.kicks+=1;const O=Math.random(),B=(.5+.6*Math.random())*Math.min(1.4,y),D=O<.5?0:O<.82?1:2;this.events.push({kind:D,x:Math.random()*h,y:.1+.8*Math.random(),age:0,strength:B,angle:Math.random()*Math.PI,reach:.2+.5*Math.random()}),this.kicks%(6+Math.floor(Math.random()*6))===0&&(this.flowTo=this.flowTo.map(q=>q+(Math.random()-.5)*4))}this.lastKick=y;const M=(O,B)=>{for(let D=0;D<O;D++){const q=Math.floor(Math.random()*this.n);this.light[q]=Math.max(this.light[q],B)}},w=g.snare*c.sound.sparks;w>.5&&this.lastSnare<=.5&&M(Math.round(this.n*.012),1.1),this.lastSnare=w;const R=g.hat*c.sound.sparks;if(R>.5&&this.lastHat<=.5&&M(Math.round(this.n*.004),.7),this.lastHat=R,Math.random()<x*.35*(S?c.sound.quiet:1)&&this.events.push({kind:0,x:Math.random()*h,y:Math.random(),age:0,strength:.45,angle:0,reach:.4}),g.clapped&&c.hands.clap>0)for(let O=0;O<this.n;O++){this.light[O]=Math.max(this.light[O],1.2*c.hands.clap);const B=this.x[O]-h/2,D=this.y[O]-.5,q=Math.hypot(B,D)+.05;this.vx[O]+=B/q*.25*c.hands.clap,this.vy[O]+=D/q*.25*c.hands.clap}this.breath+=(g.bass*c.sound.bass-this.breath)*T(4);for(let O=0;O<3;O++)this.flow[O]+=(this.flowTo[O]-this.flow[O])*T(.3);const H=!e.synthetic?[e.left,e.right].filter(O=>!!O):[],I=H.length?g.fist:0,F=Math.max(Math.min(1,c.form.circle),I*Math.min(1,c.hands.reach));this.gather+=(F-this.gather)*T(F>this.gather?.9:.6);const E=.018*c.field.drift,U=this.time,Y=h/2,G=.5,N=.3,k=U*.04,Q=Math.exp(-x*2.2);for(let O=0;O<this.n;O++){const B=this.z[O],D=this.angleAt(this.x[O],this.y[O],U);let q=this.x[O]+(Math.cos(D)*E*B+this.vx[O])*m,Se=this.y[O]+(Math.sin(D)*E*B+this.vy[O])*m;q+=(q-Y)*this.breath*.004*B,Se+=(Se-G)*this.breath*.004*B;for(const ge of H){const me=ge.position.x*h,j=ge.position.y,ce=q-me,le=Se-j,Ee=ce*ce+le*le,we=Math.exp(-Ee/.02)*(1-I)*c.hands.reach;if(we>.01){const ve=Math.sqrt(Ee)+.01;q+=ce/ve*we*.006,Se+=le/ve*we*.006,this.light[O]=Math.max(this.light[O],we*.9)}}if(this.gather>.002){const ge=this.phase[O]+k,me=N*(.94+.12*(O*.618%1))*(1+.06*this.breath),j=Y+Math.cos(ge)*me,ce=G+Math.sin(ge)*me,le=this.gather*this.gather*T(1.6);q+=(j-q)*le,Se+=(ce-Se)*le}q<-.02?q+=h+.04:q>h+.02&&(q-=h+.04),Se<-.02?Se+=1.04:Se>1.02&&(Se-=1.04),this.x[O]=q,this.y[O]=Se,this.vx[O]*=Q,this.vy[O]*=Q,this.light[O]*=Math.exp(-x*(1.6+.8*Math.random()))}for(const O of this.events){O.age+=x;const B=O.age*.55;for(let D=0;D<this.n;D++){const q=this.x[D]-O.x,Se=this.y[D]-O.y;let ge=0;if(O.kind===0){const me=Math.hypot(q,Se)-B;ge=Math.exp(-(me*me)/.0012)}else if(O.kind===1)O.age<x*1.5&&Math.hypot(q,Se)<O.reach*.6&&Math.random()<.35&&(ge=.6+Math.random()*.6);else{const me=Math.cos(O.angle),j=Math.sin(O.angle),ce=q*-j+Se*me-(O.age-.6)*.08;ge=Math.exp(-(ce*ce)/25e-5)*(Math.abs(q*me+Se*j)<O.age*1.4?1:0)}ge>.02&&(this.light[D]=Math.max(this.light[D],1.6*ge*O.strength*(1-O.age/2.2)))}}this.events=this.events.filter(O=>O.age<2.2),l.globalCompositeOperation="source-over",l.globalAlpha=1-.92*Math.max(0,Math.min(1,c.look.trail)),l.fillStyle="#000",l.fillRect(0,0,f,d),l.globalAlpha=1;const K=8,se=[];for(let O=0;O<K;O++)se.push(new Path2D);const W=Math.max(.6,d/720*1.6*c.field.size),Z=.2*c.look.glow;for(let O=0;O<this.n;O++){const B=this.z[O],D=.6+.4*Math.sin(U*.7+this.phase[O]*5),q=Math.min(1,(Z*D+this.light[O])*(.35+.65*B)+.2*this.gather*B);if(q<.03)continue;const Se=Math.min(K-1,Math.floor(q*K)),ge=W*(.5+B)*(1+.6*Math.min(1,this.light[O]));se[Se].rect(this.x[O]*d-ge/2,this.y[O]*d-ge/2,ge,ge)}for(let O=0;O<K;O++)l.globalAlpha=(O+.5)/K,l.fillStyle="#fff",l.fill(se[O]);if(c.look.grain>.01){l.globalCompositeOperation="lighter",l.globalAlpha=.05*c.look.grain;const O=Math.floor(Math.random()*256),B=Math.floor(Math.random()*256),D=l.createPattern(this.grain,"repeat");D&&(l.save(),l.translate(-O,-B),l.fillStyle=D,l.fillRect(O,B,f,d),l.restore())}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const og={line:{count:14,weight:1,wave:1,birth:1,zoom:1,speed:1},hands:{open:1,pull:1,clap:1},sound:{beat:1,bass:1,grow:1}},ag=110,ow=5;function lg(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(r=>r+r).join(""):e;return[parseInt(t.slice(0,2),16)||0,parseInt(t.slice(2,4),16)||0,parseInt(t.slice(4,6),16)||0]}class aw{constructor(e,t){V(this,"canvas");V(this,"ctx");V(this,"cfg",og);V(this,"playing",new Rs(.5));V(this,"age",0);V(this,"time",0);V(this,"unfold",0);V(this,"breath",0);V(this,"shiver",0);V(this,"pulses",[]);V(this,"lastKick",0);V(this,"hand",{x:.5,y:.5,hold:0});V(this,"idle",0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=bs(og,e)}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;const h=this.playing;h.read(e,r);const{dt:g}=h,x=Math.max(0,h.step);this.age+=x,this.time+=x*Math.max(0,c.line.speed),this.idle+=g;const m=O=>1-Math.exp(-g*O),_=[e.left,e.right].filter(Boolean),S=_.length>0&&!e.synthetic,T=!!(r!=null&&r.live);let y;S?y=(1-h.fist)*c.hands.open:T?y=(.12+.88*h.energy)*c.sound.grow:y=.35+.3*Math.sin(this.idle*.21),this.unfold+=(Math.min(1,Math.max(0,y))-this.unfold)*m(S?5:.8),this.breath+=(h.bass*c.sound.bass-this.breath)*m(3),h.clapped&&(this.shiver=Math.min(1.4,h.clapStrength*1.3*c.hands.clap)),this.shiver*=Math.exp(-g*2.4);const M=Math.max(h.kick,h.bump)*c.sound.beat;M>.45&&this.lastKick<=.45&&(this.pulses.push({at:0,strength:Math.min(1.2,M)}),this.pulses.length>ow&&this.pulses.shift()),this.lastKick=M;for(const O of this.pulses)O.at+=g*.75;if(this.pulses=this.pulses.filter(O=>O.at<.75),_.length){const O=_.reduce((D,q)=>D+q.position.x,0)/_.length,B=_.reduce((D,q)=>D+q.position.y,0)/_.length;this.hand.x+=(O-this.hand.x)*m(8),this.hand.y+=(B-this.hand.y)*m(8)}this.hand.hold+=((S?c.hands.pull:0)-this.hand.hold)*m(4);const w=c.line.birth,R=w<=0?1:Math.min(1,Math.max(0,(this.age-1.6*w)/(5*w))),P=R*R*(3-2*R),H=w<=0?0:Math.max(0,1-this.age/(2.4*w));l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,f,d);const I=Math.max(1,Math.round(c.line.count)),[F,E,U]=lg(t[0]??"#8899ff"),[Y,G,N]=lg(t[2]??t[1]??"#ffffff"),k=Math.max(.1,c.line.zoom),Q=d*k,K=d/720*k,se=Q*.74*this.unfold*(1+.12*this.breath),W=c.line.wave,Z=this.time;if(l.lineCap="round",l.lineJoin="round",l.globalCompositeOperation="lighter",H>.01){const O=(3+2.5*Math.sin(this.idle*2.2))*K*(1+this.breath);l.globalAlpha=Math.min(1,H*1.4),l.fillStyle="#fff",l.beginPath(),l.arc(f/2,d/2,Math.max(1,O),0,Math.PI*2),l.fill()}if(P>.002){const O=.5-.5*P,B=.5+.5*P;for(let D=0;D<I;D++){const q=I===1?0:D/(I-1)*2-1,Se=q*2.6*this.unfold,ge=this.shiver*Math.sin(D*12.9898)*43758.5453,me=(ge-Math.floor(ge)-.5)*this.shiver*Q*.09;l.beginPath();let j=0,ce=0;for(let Ze=0;Ze<=ag;Ze++){const Qe=O+(B-O)*(Ze/ag),nt=Math.sin(Math.PI*Qe);let Je=d/2+q*se*.5;Je+=(Math.sin(Qe*6.2+Z*.55+Se)*.6+Math.sin(Qe*13.7-Z*.38+Se*1.7)*.25)*Q*.035*W*nt*(.35+.65*this.unfold+this.breath*.6),Je+=me*nt*Math.sin(Qe*20+D);for(const Rt of this.pulses){const ee=Math.abs(Qe-.5)-Rt.at;Je-=Math.exp(-(ee*ee)/.0016)*Rt.strength*Q*.05*(1-Rt.at/.75)*(q===0?1:Math.sign(q)*-1)}if(this.hand.hold>.01){const Rt=Qe-this.hand.x,ee=Math.exp(-(Rt*Rt)/.022)*Math.min(1,this.hand.hold)*.85;Je+=(this.hand.y*d-Je)*ee}const lt=Qe*f;Ze===0?l.moveTo(lt,Je):l.quadraticCurveTo(j,ce,(j+lt)/2,(ce+Je)/2),j=lt,ce=Je}l.lineTo(j,ce);const le=Math.abs(q)*this.unfold,Ee=Math.round(255+(F+(Y-F)*(q*.5+.5)-255)*le),we=Math.round(255+(E+(G-E)*(q*.5+.5)-255)*le),ve=Math.round(255+(U+(N-U)*(q*.5+.5)-255)*le),Ge=1/(1+(I-1)*(1-this.unfold)),He=c.line.weight*K*(1+.35*M);l.strokeStyle=`rgb(${Ee},${we},${ve})`,l.globalAlpha=Math.min(1,.16*Ge*2.2),l.lineWidth=7*He,l.stroke(),l.globalAlpha=Math.min(1,.95*Math.max(Ge,.3+.7*this.unfold)),l.lineWidth=1.5*He,l.stroke()}}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const cg={colour:{speed:1,offset:0,palette:0,depth:.32},field:{count:3,zoom:1,sway:1,bounce:0,drift:.2,backdrop:1,return:1,glide:0},hands:{wind:1,release:1,follow:1,clap:1},sound:{wind:1,gust:1,mid:1,high:1}};function md(s,e){s.traverse(t=>{if(t instanceof Nn||t instanceof Wh||t instanceof lv){t.geometry.dispose();const r=t.material;Array.isArray(r)?r.forEach(o=>o.dispose()):r.dispose()}}),s.clear(),e.dispose(),e.forceContextLoss()}const lw="/assets/dandelion-hJsSsoAd.bin";let pa=null;function cw(){return pa||(pa=fetch(lw).then(s=>{if(!s.ok)throw new Error(`dandelion.bin: ${s.status}`);return s.arrayBuffer()}).then(uw),pa.catch(()=>{pa=null})),pa}function uw(s){const e=new DataView(s);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="DNDL")throw new Error("Not a dandelion file");const r=e.getUint32(4,!0),o=JSON.parse(new TextDecoder().decode(new Uint8Array(s,8,r))),l=8+r,c=(j,ce)=>new Float32Array(s.slice(l+j,l+j+ce*4)),f=(j,ce)=>new Int8Array(s.slice(l+j,l+j+ce)),d=(j,ce)=>new Uint8Array(s.slice(l+j,l+j+ce)),h=(j,ce)=>new Uint32Array(s.slice(l+j,l+j+ce*4)),g=j=>{const ce=o.parts[j],le=c(ce.pos,ce.count*3),Ee=f(ce.nrm,ce.count*3),we=new Float32Array(ce.count*3);for(let ve=0;ve<we.length;ve++)we[ve]=Ee[ve]/127;return{p:ce,position:le,normal:we,index:h(ce.idx,ce.index)}},x=["stem","base","bracts"].map(g);let m=0,_=0;for(const j of x)m+=j.p.count,_+=j.index.length;const S=new Float32Array(m*3),T=new Float32Array(m*3),y=new Float32Array(m),M=new Uint32Array(_);let w=0;{let j=0,ce=0;x.forEach((le,Ee)=>{S.set(le.position,j*3),T.set(le.normal,j*3),y.fill(Ee===0?0:1,j,j+le.p.count);for(let we=0;we<le.index.length;we++)M[ce+we]=le.index[we]+j;if(Ee===0)for(let we=1;we<le.position.length;we+=3)w=Math.min(w,le.position[we]);j+=le.p.count,ce+=le.index.length})}const R=new un;R.setAttribute("position",new Gt(S,3)),R.setAttribute("normal",new Gt(T,3)),R.setAttribute("aRigid",new Gt(y,1)),R.setIndex(new Gt(M,1));const P=o.seeds,H=c(P.pivot,P.count*3),I=c(P.axis,P.count*3),F=g("achenes"),E=d(o.parts.achenes.seed,F.p.count),U=new Float32Array(F.p.count),Y=new Float32Array(F.p.count*3);for(let j=0;j<F.p.count;j++){const ce=E[j];U[j]=ce,Y[j*3]=H[ce*3],Y[j*3+1]=H[ce*3+1],Y[j*3+2]=H[ce*3+2]}const G=new un;G.setAttribute("position",new Gt(F.position,3)),G.setAttribute("normal",new Gt(F.normal,3)),G.setAttribute("aSeed",new Gt(U,1)),G.setAttribute("aPivot",new Gt(Y,3)),G.setIndex(new Gt(F.index,1));const N=P.segments,k=c(P.a,N*3),Q=c(P.b,N*3),K=d(P.seed,N),se=c(P.ta,N),W=c(P.tb,N),Z=new Float32Array(N*4*3),O=new Float32Array(N*4*3),B=new Float32Array(N*4*3),D=new Float32Array(N*4*2),q=new Float32Array(N*4),Se=new Float32Array(N*4),ge=new Uint32Array(N*6);for(let j=0;j<N;j++){const ce=K[j];for(let Ee=0;Ee<4;Ee++){const we=j*4+Ee;Z.set(k.subarray(j*3,j*3+3),we*3),O.set(Q.subarray(j*3,j*3+3),we*3),B.set(H.subarray(ce*3,ce*3+3),we*3);const ve=Ee>>1,Ge=Ee&1?1:-1;D[we*2]=ve,D[we*2+1]=Ge,q[we]=ce,Se[we]=ve?W[j]:se[j]}const le=j*4;ge.set([le,le+1,le+2,le+2,le+1,le+3],j*6)}const me=new un;me.setAttribute("position",new Gt(Z,3)),me.setAttribute("aB",new Gt(O,3)),me.setAttribute("aPivot",new Gt(B,3)),me.setAttribute("aCorner",new Gt(D,2)),me.setAttribute("aSeed",new Gt(q,1)),me.setAttribute("aT",new Gt(Se,1)),me.setIndex(new Gt(ge,1));for(const j of[R,G,me])j.boundingSphere=new wo(new $(0,-5,0),1e4);return{body:R,achenes:G,strokes:me,seeds:P.count,pivot:H,axis:I,foot:w}}const mo=20,Gf=[1.4,3.2],Wf=[2.6,4.6],Ta=`
uniform sampler2D uPalA;
uniform sampler2D uPalB;
uniform float uPalMix;
uniform float uT, uOff, uDepth, uSpec, uShimmer, uTime;
uniform vec2 uViewport;
uniform vec3 uBend;
uniform vec2 uWave;
uniform float uWavePhase;
uniform float uFoot, uRow;
uniform sampler2D uSeeds;

vec3 palette(float c) {
  vec2 at = vec2(fract(c), 0.5);
  return mix(texture(uPalA, at).rgb, texture(uPalB, at).rgb, uPalMix);
}

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}

/*
 * The paper: a soft, blotchy wash a few strokes wide that nudges the colour
 * along the palette, as watercolour pools, and a fine grain over it. Both sit
 * still on the screen, so things move under the paper rather than with it.
 */
float wash(vec2 fc) {
  vec2 p = fc / (uViewport.y * 0.035);
  return vnoise(p) * 0.6 + vnoise(p * 2.7 + 13.1) * 0.4 - 0.5;
}
vec3 grain(vec3 col, vec2 fc) {
  return col + (hash(fc) - 0.5) * 0.07;
}

vec3 qrot(vec4 q, vec3 v) { return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v); }

/*
 * The stem bends like a rod held at its foot — none there, all of it at the
 * head — and a wave runs up it on top, like a whip, so it dances rather than
 * only leaning. All in the model's units, along h: 0 at the foot, 1 at the head.
 */
const float WAVE_K = 4.5;
vec3 stemDisp(float h) {
  return vec3(uBend.x, 0.0, uBend.z) * h * h
    + vec3(uWave.x, 0.0, uWave.y) * h * sin(WAVE_K * h - uWavePhase);
}
vec3 bendStem(vec3 p) {
  float h = clamp((p.y - uFoot) / -uFoot, 0.0, 1.0);
  return p + stemDisp(h);
}
/* The head rides the top of the stem, tipped to the stem's slope there. */
mat3 headTilt() {
  vec2 slope = 2.0 * uBend.xz
    + uWave * (sin(WAVE_K - uWavePhase) + WAVE_K * cos(WAVE_K - uWavePhase));
  vec3 up = normalize(vec3(slope.x / -uFoot, 1.0, slope.y / -uFoot));
  vec3 ax = vec3(up.z, 0.0, -up.x);
  float s = length(ax);
  if (s < 1e-5) return mat3(1.0);
  ax /= s;
  float c = up.y;
  float t = 1.0 - c;
  return mat3(
    t * ax.x * ax.x + c,        t * ax.x * ax.y + s * ax.z, t * ax.x * ax.z - s * ax.y,
    t * ax.x * ax.y - s * ax.z, t * ax.y * ax.y + c,        t * ax.y * ax.z + s * ax.x,
    t * ax.x * ax.z + s * ax.y, t * ax.y * ax.z - s * ax.x, t * ax.z * ax.z + c);
}
vec3 bendHead(vec3 p) { return headTilt() * p + stemDisp(1.0); }

/*
 * A seed: turned about where it joins the head, carried off by its flight,
 * and — as far as it is still at home — riding the head as the stem sways.
 * The flight is a texture of two texels a seed: offset and how much it is
 * still attached, then its turn as a quaternion.
 */
vec4 seedOffset;
vec4 seedTurn;
void readSeed(float seed) {
  seedOffset = texelFetch(uSeeds, ivec2(int(seed) * 2, int(uRow)), 0);
  seedTurn = texelFetch(uSeeds, ivec2(int(seed) * 2 + 1, int(uRow)), 0);
}
vec3 seedPoint(vec3 p, vec3 pivot) {
  vec3 q = pivot + qrot(seedTurn, p - pivot) + seedOffset.xyz;
  return mix(q, bendHead(q), seedOffset.w);
}
`,fw=`
${Ta}
attribute float aRigid;
varying vec3 vN;
varying vec3 vPos;
varying float vTone;
varying float vLift;
void main() {
  vec3 p;
  vec3 n = normal;
  if (aRigid > 0.5) {
    p = bendHead(position);
    n = headTilt() * normal;
  } else {
    p = bendStem(position);
  }
  // Where on the palette each part sits: the stem runs on down from the
  // bottom of the head's gradient, the base and bracts just under it.
  float along = clamp((position.y - uFoot) / -uFoot, 0.0, 1.0);
  vTone = aRigid > 0.5 ? 0.02 : 0.03 - (1.0 - along) * 0.2;
  vLift = 0.0;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vPos = mv.xyz;
  vN = normalize(normalMatrix * n);
  gl_Position = projectionMatrix * mv;
}`,ug=`
${Ta}
varying vec3 vN;
varying vec3 vPos;
varying float vTone;
varying float vLift;
void main() {
  vec3 N = normalize(vN);
  if (!gl_FrontFacing) N = -N;
  vec3 V = normalize(-vPos);
  vec3 L = normalize(vec3(0.3, 0.45, 0.85));
  float wrap = clamp(dot(N, L) * 0.5 + 0.5, 0.0, 1.0);
  float rim = 1.0 - clamp(dot(N, V), 0.0, 1.0);
  float c = uOff + uT + vTone;
  // Shade by moving on through the palette rather than darkening, but only a
  // little: flat colour with soft turns, a painting rather than a balloon.
  c += uDepth * 0.7 * (1.0 - wrap) + 0.08 * smoothstep(0.6, 1.0, rim);
  c += wash(gl_FragCoord.xy) * 0.12;
  vec3 col = palette(c);
  col *= 0.88 + 0.16 * wrap;
  col = 1.0 - (1.0 - col) * (1.0 - vLift);
  col += pow(max(dot(reflect(-L, N), V), 0.0), 12.0) * uSpec * 0.6;
  gl_FragColor = vec4(grain(col, gl_FragCoord.xy), 1.0);
}`,hw=`
${Ta}
attribute float aSeed;
attribute vec3 aPivot;
varying vec3 vN;
varying vec3 vPos;
varying float vTone;
varying float vLift;
void main() {
  readSeed(aSeed);
  vec3 p = seedPoint(position, aPivot);
  vec3 n = qrot(seedTurn, normal);
  if (seedOffset.w > 0.5) n = headTilt() * n;
  // Lifted to the hairs' pastel, so a flying seed reads as fluff with a
  // seed, not a seed with some fluff.
  vTone = 0.1;
  vLift = 0.45;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vPos = mv.xyz;
  vN = normalize(normalMatrix * n);
  gl_Position = projectionMatrix * mv;
}`,dw=`
${Ta}
attribute vec3 aB;
attribute vec3 aPivot;
attribute vec2 aCorner;
attribute float aSeed;
attribute float aT;
uniform float uWidth;
varying float vT;
varying float vSide;
varying vec2 vHome;
varying float vFree;
void main() {
  readSeed(aSeed);
  vec4 ca = projectionMatrix * modelViewMatrix * vec4(seedPoint(position, aPivot), 1.0);
  vec4 cb = projectionMatrix * modelViewMatrix * vec4(seedPoint(aB, aPivot), 1.0);
  vec2 half_ = uViewport * 0.5;
  vec2 sa = ca.xy / ca.w * half_;
  vec2 sb = cb.xy / cb.w * half_;
  vec2 d = sb - sa;
  float len = length(d);
  d = len > 1e-4 ? d / len : vec2(1.0, 0.0);
  vec2 across = vec2(-d.y, d.x);
  vec4 c = aCorner.x > 0.5 ? cb : ca;
  // Beaks a touch heavier; hairs taper to their tips.
  float w = uWidth * (aT < 0.0 ? 1.25 : mix(1.0, 0.5, aT));
  // Half a pixel past each end, so the joins between segments close.
  vec2 push = across * aCorner.y * w * 0.5 + d * (aCorner.x > 0.5 ? 0.5 : -0.5);
  c.xy += push / half_ * c.w;
  gl_Position = c;
  vT = aT;
  vSide = aCorner.y;
  // Where on the head it lives, so a seed keeps its colour as it flies.
  vHome = position.xy;
  vFree = 1.0 - seedOffset.w;
}`,pw=`
${Ta}
varying float vT;
varying float vSide;
varying vec2 vHome;
varying float vFree;
void main() {
  float t = max(vT, 0.0);
  // Bands across the head, as on the flowers, with a little more along each
  // hair: one gradient over the whole ball rather than confetti.
  float c = uOff + uT + 0.25 + vHome.y * 0.2 + vHome.x * 0.06 + vT * 0.1;
  c += wash(gl_FragCoord.xy) * 0.16;
  vec3 col = palette(c);
  // Paler toward the tips, the way light catches fluff.
  // Lifted toward pastel, the dark stops most, so a head reads as fluff
  // even while the palette passes through its navy.
  col = 1.0 - (1.0 - col) * (0.8 - 0.3 * t);
  // The hats: a glint running out along the hairs.
  float glint = pow(0.5 + 0.5 * sin(t * 9.0 - uTime * 7.0 + vHome.x * 20.0 + vHome.y * 13.0), 6.0);
  col += glint * uShimmer * 0.35 * t;
  float edge = 1.0 - smoothstep(0.35, 1.0, abs(vSide));
  float alpha = edge * mix(0.95, 0.5, t);
  gl_FragColor = vec4(grain(col, gl_FragCoord.xy), alpha);
}`;function Xf(s,e){let t=0,r=1/e;for(;s>0;)t+=s%e*r,s=Math.floor(s/e),r/=e;return t}function Vi(s){const e=Math.sin(s*127.1+311.7)*43758.5453;return e-Math.floor(e)}const Kf=Array.from({length:mo},(s,e)=>({x:e===0?0:Xf(e+1,2)*2-1,z:e===0?0:-4.6+Xf(e,3)*6,y:e===0?.3:-.4+Xf(e,5)*1.9,k:e===0?1:.85+Vi(e)*.3,yaw:Vi(e+40)*Kn,ph:Vi(e+80)*Kn,off:e*.137%1}));class mw{constructor(e,t,r=null){V(this,"canvas");V(this,"ctx");V(this,"cfg",cg);V(this,"surface");V(this,"renderer",null);V(this,"host");V(this,"scene");V(this,"camera");V(this,"group",new Ki);V(this,"depth",0);V(this,"scale",1);V(this,"look",null);V(this,"playing",new Rs(.5));V(this,"failed",!1);V(this,"model",null);V(this,"flowers",[]);V(this,"materials",[]);V(this,"started",!1);V(this,"since",0);V(this,"seedTex",null);V(this,"seedData",new Float32Array(0));V(this,"off",new Float32Array(0));V(this,"vel",new Float32Array(0));V(this,"turn",new Float32Array(0));V(this,"hold",new Float32Array(0));V(this,"away",new Uint8Array(0));V(this,"thresh",new Float32Array(0));V(this,"flight",new Float32Array(0));V(this,"dest",new Float32Array(0));V(this,"phase",new Float32Array(0));V(this,"motionTime",0);V(this,"colourTime",0);V(this,"gust",0);V(this,"pace",0);V(this,"levelE",0);V(this,"lastBeat",!1);V(this,"lastClap",!1);V(this,"hop",0);V(this,"dance",0);V(this,"sinceClap",99);V(this,"lastAim",{x:0,y:0});V(this,"swipe",new Ut);V(this,"present",0);V(this,"strokeWidth",null);V(this,"viewport",null);V(this,"time",null);this.canvas=e,this.ctx=t,this.host=r,this.scene=r?r.scene:new Ac,this.camera=r?r.camera:new li(30,16/9,.1,200),this.surface=document.createElement("canvas");try{r||(this.renderer=dd(this.surface)),this.look=r?r.look:new Tv}catch(o){console.error("Dandelion could not start:",o),this.failed=!0;return}cw().then(o=>{this.look&&this.build(o)}).catch(o=>{console.error("Dandelion model failed to load:",o),this.failed=!0})}setParams(e){this.cfg=bs(cg,e)}isReady(){return this.model!==null||this.failed}build(e){const t=this.look,r=e.seeds,o=r*mo;this.seedData=new Float32Array(r*2*mo*4),this.seedTex=new sv(this.seedData,r*2,mo,bi,Xi),this.seedTex.magFilter=gn,this.seedTex.minFilter=gn,this.seedTex.needsUpdate=!0,this.off=new Float32Array(o*3),this.vel=new Float32Array(o*3),this.turn=new Float32Array(o*4);for(let g=0;g<o;g++)this.turn[g*4+3]=1;this.hold=new Float32Array(o),this.away=new Uint8Array(o),this.thresh=new Float32Array(o),this.flight=new Float32Array(o),this.dest=new Float32Array(o*3),this.phase=new Float32Array(o);for(let g=0;g<o;g++)this.thresh[g]=.12+Vi(g*3.7+1)*1,this.phase[g]=Vi(g*1.3+7)*Kn;const l={value:new Ut(1,1)},c={value:0},f={value:e.foot},d={value:this.seedTex},h={value:1.5};this.strokeWidth=h,this.viewport=l,this.time=c;for(let g=0;g<mo;g++){const x=t.shared(),m={uBend:{value:new $},uWave:{value:new Ut},uWavePhase:{value:0},uRow:{value:g},uShimmer:{value:0}},_={...x,...m,uViewport:l,uTime:c,uFoot:f,uSeeds:d},S=(M,w,R={})=>{const P=new vi({vertexShader:M,fragmentShader:w,uniforms:{..._,...R},side:Gi});return this.materials.push(P),P},T=new Ki;T.add(new Nn(e.body,S(fw,ug))),T.add(new Nn(e.achenes,S(hw,ug)));const y=S(dw,pw,{uWidth:h});y.transparent=!0,y.depthWrite=!1,T.add(new Nn(e.strokes,y));for(const M of T.children)M.frustumCulled=!1;T.visible=!1,this.group.add(T),this.flowers.push({root:T,shared:x,u:m,presence:0,at:new $,size:1,placed:!1,bend:new Ut})}this.scene.add(this.group),this.model=e}pickDestination(e,t,r){const o=-4+Math.random()*6,l=(15.5-o)*t;this.dest[e*3]=(Math.random()*2-1)*l*r*.92,this.dest[e*3+1]=.1+(Math.random()*1.75-.85)*l,this.dest[e*3+2]=o}destroy(){var e,t;this.host||(e=this.look)==null||e.dispose(),this.look=null,(t=this.seedTex)==null||t.dispose();for(const r of this.materials)r.dispose();for(const r of this.flowers)r.root.clear();this.scene.remove(this.group),this.renderer&&md(this.scene,this.renderer),this.renderer=null}render(e,t,r){const{ctx:o,cfg:l}=this,c=this.canvas.width,f=this.canvas.height;if(c===0||f===0)return;const d=this.renderer;if(this.failed||!d||!this.look){pd(o,c,f,"DANDELION");return}Cv(o,c,f,l.field.backdrop),this.model&&(bv(this.camera,c,f),this.camera.position.set(0,.5,15.5/Math.max(.3,l.field.zoom)),this.camera.lookAt(0,.1,0),this.update(e,t,r,c,f),(this.surface.width!==c||this.surface.height!==f)&&d.setSize(c,f,!1),d.render(this.scene,this.camera),o.drawImage(this.surface,0,0,c,f))}update(e,t,r,o,l){const{cfg:c}=this,f=this.look,d=this.model;if(!f||!d||this.failed)return;const h=this.playing;h.read(e,r);const{dt:g}=h,x=Math.max(0,c.field.glide??0),m=z=>x>0?1-Math.exp(-g/(z*x)):1;this.pace+=(Math.max(0,h.step)-this.pace)*m(1.4);const _=x>0?Math.max(this.pace,g*.35):Math.max(0,h.step),S=e.left||e.right?1:0;this.present+=(S-this.present)*(1-Math.exp(-g*3));const T=Math.min(1,((r==null?void 0:r.overall)??0)*1.4)*c.sound.wind;this.levelE+=(T-this.levelE)*m(.9);const y=x>0?this.levelE:T;this.motionTime+=_,this.colourTime+=(_*c.colour.speed*(1+h.mid*c.sound.mid*1.2)+g*h.burst*c.hands.clap*.9)/cc;const M=this.motionTime,w=!!(r!=null&&r.beat),R=w&&!this.lastBeat,P=R&&c.sound.gust>0;this.hop=Math.max(this.hop*Math.exp(-g*5),R?(r==null?void 0:r.beatIntensity)||1:0),this.dance+=_,this.lastBeat=w,P&&(this.gust=Math.max(this.gust,((r==null?void 0:r.beatIntensity)||1)*c.sound.gust)),this.gust*=Math.exp(-g*2.5);const H=!!e.clapping&&c.hands.clap>0,I=H&&!this.lastClap;this.lastClap=H,this.sinceClap+=g;const F=Math.min(1,this.sinceClap/4)**3;I&&(this.sinceClap=0);const E=h.aim.x-this.lastAim.x,U=h.aim.y-this.lastAim.y;this.lastAim={x:h.aim.x,y:h.aim.y};const Y=S?E/Math.max(g,.001):0,G=S?U/Math.max(g,.001):0;this.swipe.x+=(Y-this.swipe.x)*(1-Math.exp(-g*6)),this.swipe.y+=(G-this.swipe.y)*(1-Math.exp(-g*6));const N=.5*Math.sin(M*.11)+.25*Math.sin(M*.27+1.3),k=.25+y*1.6+this.gust*1.2,Q=new $(Math.cos(N)*k,.15*Math.sin(M*.19),Math.sin(N)*k*.4);Q.x+=ac.clamp(this.swipe.x,-4,4)*1.6*c.hands.wind,Q.y+=ac.clamp(this.swipe.y,-4,4)*1*c.hands.wind;const K=S?ac.clamp((h.openness-.6)/.4,-1,1)*c.hands.release:0,se=c.field.drift,W=Math.min(1,se*2),Z=Math.sqrt(Math.min(1,3/Math.max(1,Math.round(c.field.count)))),O=Math.min(.72,Z*(se*(.25+y*.45)+K*.3*this.present*W)),B=F*Math.min(1,c.hands.clap)*W*Z,D=Math.max(.25,c.field.return??1),q=Math.min(1,O*5),Se=S&&h.openness<.15&&c.hands.release>0,ge=!this.started;this.host||f.update(t,c.colour.palette,g,ge);const me=Math.tan(this.camera.fov/2*Math.PI/180),j=o/l,ce=Math.max(0,Math.min(mo,Math.round(c.field.count))),le=Math.max(1,ce);this.since+=g;const Ee=Av(this.since,ce),we=2.2*Math.pow(le,-.42)*this.scale;let ve=0;for(let z=0;z<le;z++)ve+=Kf[z].x;ve/=le;let Ge=0;for(let z=0;z<le;z++)Ge=Math.max(Ge,Math.abs(Kf[z].x-ve));const He=new $(h.aim.x*5.2,.1+h.aim.y*3,2),Ze=1.2*Math.max(.4,1+(h.spread-.4)*1.6),Qe=d.seeds,nt=new $,Je=new rr,lt=new rr,Rt=new rr,ee=new $,Lt=new $(0,1,0),vt=new $(1,0,0),At=this.seedData;this.flowers.forEach((z,Me)=>{const L=Kf[Me],A=Me<Ee;if(z.presence+=((A?1:0)-z.presence)*(1-Math.exp(-g*1.4)),ge&&(z.presence=0),!A&&z.presence<.004&&(z.presence=0),z.root.visible=z.presence>.002,!z.root.visible){z.placed=!1,this.off.fill(0,Me*Qe*3,(Me+1)*Qe*3),this.vel.fill(0,Me*Qe*3,(Me+1)*Qe*3),this.away.fill(0,Me*Qe,(Me+1)*Qe),this.flight.fill(0,Me*Qe,(Me+1)*Qe);return}const ne=we*L.k,he=(le===1?0:L.z)+this.depth,Ae=(15.5-he)*me*j,De=le===1?0:(L.x-ve)/Math.max(.5,Ge)*Ae*(.66+.24*Math.min(1,(le-1)/12)),Be=.1-(15.5-he)*me,xe=.1+(15.5-he)*me;let ye=le===1?L.y:L.y*Math.min(1,.5+le*.1);ye=Math.min(ye,Be-d.foot*ne-.4,xe-ne*1.5),nt.set(De,ye,he),z.placed||(z.at.copy(nt),z.size=ne,z.placed=!0),z.at.lerp(nt,1-Math.exp(-g*1.2)),z.size+=(ne-z.size)*(1-Math.exp(-g*1.2));const We=1-Math.pow(1-z.presence,3);z.root.position.set(z.at.x,z.at.y-(1-We)*-d.foot*z.size*.8,z.at.z),z.root.rotation.y=L.yaw,z.root.scale.setScalar(z.size*(.6+.4*We));const Ve=z.root.scale.x,Ce=Math.cos(L.yaw),Pe=Math.sin(L.yaw),ct=this.dance,pt=z.at.x*.35,Mt=c.field.sway*(.45+y*1),J=Mt*(.85*Math.sin(Kn*ct/5.2-pt+L.ph*.3)+.15*Math.sin(Kn*ct/3.3+L.ph*1.7))+Q.x*.22+this.gust*.5,Fe=Mt*.3*Math.sin(Kn*ct/7.1+L.ph*2.3)+Q.z*.22;z.bend.x+=(J-z.bend.x)*(1-Math.exp(-g*1.6)),z.bend.y+=(Fe-z.bend.y)*(1-Math.exp(-g*1.6));const _e=z.bend.x,Ke=z.bend.y;z.u.uBend.value.set(_e*Ce-Ke*Pe,0,_e*Pe+Ke*Ce);const ke=c.field.sway*(.12+y*.3);z.u.uWave.value.set(ke*Ce,ke*Pe),z.u.uWavePhase.value=Kn*ct/1.6-pt*2+L.ph;const Te=c.field.bounce*z.size*((.08+y*.22)*Math.sin(Kn*ct/1.2-pt+L.ph)+.3*this.hop*(.6+.4*Vi(Me+7)));z.root.position.y+=Te,z.u.uShimmer.value=h.high*c.sound.high*2;const Oe=z.root.position.x+_e*Ve,je=z.root.position.y,Et=z.root.position.z+Ke*Ve;for(let Nt=0;Nt<Qe;Nt++){const yt=Me*Qe+Nt,Ft=yt*3;I&&Vi(yt*1.37+M*7.3)<B?this.hold[yt]=(Wf[0]+Vi(yt+M)*(Wf[1]-Wf[0]))/D:P&&Vi(yt*.71+M*13.1)<.008*c.sound.gust*se*Z&&(this.hold[yt]=(Gf[0]+Vi(yt+M*3.1)*(Gf[1]-Gf[0]))/D),this.hold[yt]=Math.max(0,this.hold[yt]-g);const Fn=.06*q*Math.sin(M*.37+this.phase[yt]);Se&&(this.flight[yt]=0);const qn=!Se&&(this.hold[yt]>0||this.flight[yt]>0||O+Fn>this.thresh[yt]),Tn=d.pivot[Nt*3],ei=d.pivot[Nt*3+1],Ci=d.pivot[Nt*3+2],Ri=d.axis[Nt*3],kn=d.axis[Nt*3+1],ti=d.axis[Nt*3+2],ji=Ri*Ce+ti*Pe,Pi=-Ri*Pe+ti*Ce;if(qn&&!this.away[yt]){this.flight[yt]=(6+Math.random()*6)/D,this.pickDestination(yt,me,j);const oe=.4+(I&&this.hold[yt]>0?3.2*c.hands.clap*F:0);this.vel[Ft]+=ji*oe,this.vel[Ft+1]+=kn*oe+.2,this.vel[Ft+2]+=Pi*oe}this.away[yt]=qn?1:0;let _n=this.off[Ft],bn=this.off[Ft+1],Cn=this.off[Ft+2],Rn=this.vel[Ft],On=this.vel[Ft+1],Bn=this.vel[Ft+2];if(_>0||qn){const oe=Math.max(_,0),ae=Oe+(Tn*Ce+Ci*Pe)*Ve+_n,Le=je+ei*Ve+bn,Xe=Et+(-Tn*Pe+Ci*Ce)*Ve+Cn,Ne=Math.sin(Le*.9+M*.7+this.phase[yt])*.6,et=Math.sin(ae*.7-M*.5+this.phase[yt]*.5)*.45,it=Math.sin(Xe*.8+ae*.5+M*.6)*.4;if(qn){this.flight[yt]=Math.max(0,this.flight[yt]-oe);const ht=yt*3;let dt=this.dest[ht]-ae,tt=this.dest[ht+1]-Le,bt=this.dest[ht+2]-Xe;const Ot=Math.hypot(dt,tt,bt);Ot<.8&&this.pickDestination(yt,me,j);const Kt=(1.2+.9*Vi(yt*2.9))*Math.min(1,Ot/2);dt=dt/Math.max(Ot,.001)*Kt,tt=tt/Math.max(Ot,.001)*Kt,bt=bt/Math.max(Ot,.001)*Kt;let zt=(dt-Rn)*.7+Q.x*.3+Ne*.8,tn=(tt-On)*.7+Q.y*.3+et*.8+.05,qe=(bt-Bn)*.7+Q.z*.3+it*.6;if(this.present>.01&&c.hands.follow>0){const ui=He.x-ae,Bt=He.y-Le,Jt=He.z-Xe,yn=Math.hypot(ui,Bt,Jt)+.001,Ht=this.present*c.hands.follow*Math.min(1,yn/Ze-.6);zt+=ui/yn*Ht*2.2-Bt/yn*this.present*c.hands.follow*1.4,tn+=Bt/yn*Ht*2.2+ui/yn*this.present*c.hands.follow*1.4,qe+=Jt/yn*Ht*1.2}const fn=(15.5-Xe)*me,Ct=fn*j,Pn=Math.abs(ae)-Ct*1.02;Pn>0&&(zt-=Math.sign(ae)*Pn*1.5);const Ln=Math.abs(Le-.1)-fn*1.02;Ln>0&&(tn-=Math.sign(Le-.1)*Ln*1.5),Xe>6&&(qe-=(Xe-6)*1.5),Xe<-8&&(qe+=(-8-Xe)*1.5),Rn+=zt*oe*1.6,On+=tn*oe*1.6,Bn+=qe*oe*1.6;const Tt=Math.exp(-oe*.5);Rn*=Tt,On*=Tt,Bn*=Tt}else{const ht=Math.hypot(_n,bn,Cn),dt=Math.min(1.8*D,ht*.9*D)/Math.max(ht,1e-4),tt=-_n*dt+Ne*Math.min(1,ht)*.6,bt=-bn*dt+et*Math.min(1,ht)*.6,Ot=-Cn*dt+it*Math.min(1,ht)*.6,Kt=1-Math.exp(-oe*2.4);Rn+=(tt-Rn)*Kt,On+=(bt-On)*Kt,Bn+=(Ot-Bn)*Kt,ht<.004&&Math.hypot(Rn,On,Bn)<.02&&(_n=bn=Cn=Rn=On=Bn=0)}_n+=Rn*oe,bn+=On*oe,Cn+=Bn*oe}this.off[Ft]=_n,this.off[Ft+1]=bn,this.off[Ft+2]=Cn,this.vel[Ft]=Rn,this.vel[Ft+1]=On,this.vel[Ft+2]=Bn;const qt=Math.hypot(_n,bn,Cn)/Ve,ft=Math.min(1,qt/.8),Qt=this.turn.subarray(yt*4,yt*4+4);if(Je.set(Qt[0],Qt[1],Qt[2],Qt[3]),ft>.001){ee.set(Ri,kn,ti),Rt.setFromUnitVectors(ee,Lt);const oe=M*.6+this.phase[yt];lt.setFromAxisAngle(Lt,oe),Rt.premultiply(lt),lt.setFromAxisAngle(vt,.3*Math.sin(M*1.3+this.phase[yt]*2)),Rt.premultiply(lt),lt.identity().slerp(Rt,ft),Je.slerp(lt,1-Math.exp(-g*3))}else Je.slerp(lt.identity(),1-Math.exp(-g*6));Qt[0]=Je.x,Qt[1]=Je.y,Qt[2]=Je.z,Qt[3]=Je.w;const C=(Me*Qe*2+Nt*2)*4,ie=(_n*Ce-Cn*Pe)/Ve,de=(_n*Pe+Cn*Ce)/Ve;At[C]=ie,At[C+1]=bn/Ve,At[C+2]=de,At[C+3]=1-Math.min(1,qt/.6),At[C+4]=Je.x,At[C+5]=Je.y,At[C+6]=Je.z,At[C+7]=Je.w}const _t=z.shared;_t.uT.value=this.colourTime,_t.uOff.value=L.off+c.colour.offset,f.apply(_t,c.colour.depth,.16*(1+h.high*c.sound.high*2))}),this.started=!0,this.seedTex.needsUpdate=!0,this.viewport.value.set(o,l),this.time.value=M,this.strokeWidth.value=Math.max(1,l/620)}}const fg={colour:{speed:1,offset:0,palette:0,style:0,depth:.32},swarm:{count:4,zoom:1,height:0,size:1,drift:1,pulse:1,tentacles:1,backdrop:1,arrival:5,water:0},hands:{follow:1,spread:1,clap:1},sound:{beat:1,bass:1,mid:1,high:1,flow:1,swell:0}};class gw{constructor(e,t,r=120,o=20){V(this,"mesh");V(this,"curve");V(this,"position");V(this,"normal");V(this,"points",[]);V(this,"tangents",[]);this.anchors=t,this.length=r,this.sides=o,this.curve=new Wy(t,!1,"centripetal");const l=(r+1)*(o+1),c=new un;this.position=new Gt(new Float32Array(l*3),3),this.normal=new Gt(new Float32Array(l*3),3),this.position.setUsage(n0),this.normal.setUsage(n0);const f=new Float32Array(l*2),d=[];for(let h=0;h<=r;h++)for(let g=0;g<=o;g++){const x=h*(o+1)+g;if(f[x*2]=h/r,f[x*2+1]=g/o,h<r&&g<o){const m=x,_=x+o+1;d.push(m,_,m+1,_,_+1,m+1)}}c.setAttribute("position",this.position),c.setAttribute("normal",this.normal),c.setAttribute("uv",new Gt(f,2)),c.setIndex(d);for(let h=0;h<=r;h++)this.points.push(new $),this.tangents.push(new $);this.mesh=new Nn(c,e),this.mesh.frustumCulled=!1}update(e,t=1){const{curve:r,points:o,tangents:l,length:c,sides:f}=this;r.updateArcLengths();for(let S=0;S<=c;S++)r.getPointAt(S/c,o[S]);for(let S=0;S<=c;S++){const T=o[Math.max(0,S-1)],y=o[Math.min(c,S+1)];l[S].subVectors(y,T).normalize()}const d=new $,h=new $,g=new $,x=l[0];d.set(0,0,1).addScaledVector(x,-x.z),d.lengthSq()<1e-6&&d.set(1,0,0).addScaledVector(x,-x.x),d.normalize();const m=this.position.array,_=this.normal.array;for(let S=0;S<=c;S++){const T=l[S];d.addScaledVector(T,-d.dot(T)).normalize(),h.crossVectors(T,d);const y=o[S],M=e*(1+(t-1)*(S/c));for(let w=0;w<=f;w++){const R=w/f*Kn;g.copy(d).multiplyScalar(-Math.cos(R)).addScaledVector(h,Math.sin(R));const P=(S*(f+1)+w)*3;m[P]=y.x+g.x*M,m[P+1]=y.y+g.y*M,m[P+2]=y.z+g.z*M,_[P]=g.x,_[P+1]=g.y,_[P+2]=g.z}}this.position.needsUpdate=!0,this.normal.needsUpdate=!0}}const hg=9,ec=8,dg=4,tc=9,pg=[{c:[.2,.9,0],a:[1.6,.5,.8],s:1.25,off:0,ph:0,pulses:6},{c:[-3.9,1.5,-1.2],a:[1.2,.6,.8],s:1,off:.37,ph:2.1,pulses:7},{c:[4.1,.4,-.8],a:[1.1,.7,.6],s:1.05,off:.71,ph:4,pulses:5},{c:[-2,-.9,1.2],a:[1.4,.4,.5],s:.8,off:.18,ph:1,pulses:8},{c:[2.4,2.4,-3],a:[1.3,.5,.8],s:.85,off:.55,ph:3.2,pulses:6},{c:[-5.6,-.4,-2.6],a:[.9,.6,.6],s:.8,off:.86,ph:5,pulses:7},{c:[5.8,2,-4],a:[.8,.5,.6],s:.7,off:.28,ph:.6,pulses:9},{c:[-.6,2.7,-5],a:[1.6,.4,.8],s:.7,off:.63,ph:2.7,pulses:8}],vw=[[],[0],[1,2],[0,1,2],[0,1,2,3],[0,1,2,3,4],[0,1,2,3,4,5],[0,1,2,3,4,5,6],[0,1,2,3,4,5,6,7]],jf=.62,xw=.55;function mg(s,e,t=new $){return t.set(Math.sin(s)*.86*Math.cos(e),-.86*Math.sin(e)+.04,Math.cos(s)*.86*Math.cos(e))}function _w(s){const e=(s/Kn%1+1)%1;return e<.22?Math.sin(e/.22*(Math.PI/2)):.5+.5*Math.cos((e-.22)/.78*Math.PI)}class yw{constructor(e,t,r=null){V(this,"canvas");V(this,"ctx");V(this,"cfg",fg);V(this,"host");V(this,"surface");V(this,"renderer",null);V(this,"scene");V(this,"camera");V(this,"look",null);V(this,"group",new Ki);V(this,"swarm",[]);V(this,"geometries",[]);V(this,"failed",!1);V(this,"playing",new Rs(.6));V(this,"motionTime",0);V(this,"pace",1);V(this,"handHold",0);V(this,"colourTime",0);V(this,"started",!1);V(this,"since",0);V(this,"current",0);V(this,"carry",0);V(this,"swell",0);V(this,"bassAvg",0);this.canvas=e,this.ctx=t,this.host=r,this.surface=document.createElement("canvas"),this.scene=r?r.scene:new Ac,this.camera=r?r.camera:new li(30,16/9,.1,100);try{r||(this.renderer=dd(this.surface)),this.look=r?r.look:new Tv,this.build(this.look)}catch(o){console.error("Jellyfish could not start:",o),this.failed=!0}}setParams(e){this.cfg=bs(fg,e)}build(e){const t=new yc(1,44,30),r=new yc(1,40,26);this.geometries.push(t,r),this.scene.add(this.group);for(const o of pg){const l=e.shared(),c=e.shared(),f=new Ki;this.group.add(f);const d=[],h=[];for(let _=0;_<hg;_++){const S=_/hg*Kn,T=new Ki;T.rotation.y=S;const y=new Ki;y.rotation.x=jf,T.add(y);const M=new Nn(t,e.material(nw,l,{uAng:{value:S}}));M.scale.set(.42,.18,.52),M.position.set(0,_*5%3*.02,.48),y.add(M),f.add(T),d.push(y),h.push(M)}const g=new Nn(r,e.material(rw,l));g.scale.set(.44,.26,.44),g.position.y=-.1,f.add(g);const x=[],m=e.material(iw,c,{uWS:{value:.6}});for(let _=0;_<ec+dg;_++){const S=_>=ec,T=S?(_-ec)/dg*Kn+.4:_/ec*Kn+.2,y=S?new $(Math.sin(T)*.08,-.25,Math.cos(T)*.08):mg(T,jf),M=Array.from({length:tc},()=>new $),w=new gw(m,M,S?48:64,S?10:6);this.group.add(w.mesh),x.push({tube:w,from:y,links:M,angle:S?null:T,link:S?.2:.42,radius:S?.085:.028,phase:T*1.7+_})}this.swarm.push({spec:o,root:f,tilts:d,lobes:h,cap:g,strands:x,shared:l,strandShared:c,presence:0,beat:o.ph,lift:0,rise:0,pull:new $,up:new $(0,1,0),last:null,primed:!1})}}destroy(){var e;this.host||(e=this.look)==null||e.dispose(),this.look=null;for(const t of this.geometries)t.dispose();this.host?(this.scene.remove(this.group),this.group.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose())})):this.renderer&&md(this.scene,this.renderer),this.renderer=null}render(e,t,r){const{ctx:o,cfg:l}=this,c=this.canvas.width,f=this.canvas.height;if(c===0||f===0)return;const d=this.renderer;if(this.failed||!d||!this.look){pd(o,c,f,"JELLYFISH");return}bv(this.camera,c,f);const h=-l.swarm.height*4.5;this.camera.position.set(0,.5+h,15.5/Math.max(.3,l.swarm.zoom)),this.camera.lookAt(0,.1+h,0),this.update(e,t,r),(this.surface.width!==c||this.surface.height!==f)&&d.setSize(c,f,!1),d.render(this.scene,this.camera),this.look.backdrop(o,c,f,l.swarm.backdrop),o.drawImage(this.surface,0,0,c,f)}update(e,t,r){const{cfg:o}=this,l=this.look;if(!l||this.failed)return;const c=this.playing;c.read(e,r);const{dt:f}=c;this.pace+=(Math.max(0,c.step)-this.pace)*(1-Math.exp(-f*.6));const d=this.pace*.6,h=c.burst*o.hands.clap,g=c.bump*o.sound.beat,x=!e.synthetic&&(e.left||e.right)?1:0;this.handHold+=(x-this.handHold)*(1-Math.exp(-f*3)),this.motionTime+=d,this.colourTime+=(d*o.colour.speed*(1+c.mid*o.sound.mid*1.2)+f*h*.9)/cc;const m=this.motionTime,_=Kn*m/cc,S=Math.max(0,Math.min(8,Math.round(o.swarm.count))),T=!this.started;this.host||l.update(t,o.colour.palette,f,T,o.colour.style),this.since+=f;const y=new Set(vw[S].slice(0,Av(this.since*.55*(5/Math.max(1,o.swarm.arrival)),S)));T&&(this.started=!0,this.swarm.forEach(B=>{B.presence=0}));const M=r!=null&&r.live?r.bass:0,w=Math.max(0,M-this.bassAvg-.12);this.bassAvg+=(M-this.bassAvg)*(1-Math.exp(-f*.5));const R=Math.min(1,w*2.2)*o.sound.swell;this.swell+=(R-this.swell)*(1-Math.exp(-f*(R>this.swell?2.5:.45)));const P=x?Math.max(.3,1+(c.spread-.4)*o.hands.spread*1.6):1,H=P*(1+this.swell*.9),I=new $(c.aim.x*4.6,c.aim.y*2.1,0).multiplyScalar(o.hands.follow*x),F=o.swarm.drift*(1+c.bass*o.sound.bass*.8),U=!!(r!=null&&r.live)?.35+.65*c.energy+.4*c.mid:.35;this.carry+=(o.sound.flow*U-this.carry)*(1-Math.exp(-f*.35)),this.current+=d*(.18+.5*this.carry);const Y=.16*(1+c.high*o.sound.high*2.5),G=1+c.high*o.sound.high*1.5,N=o.swarm.size,k=new $,Q=new $,K=new rr,se=new $(0,1,0),W=new $,Z=new $,O=new $;this.swarm.forEach((B,D)=>{const q=y.has(D)?1:0;B.presence=q>B.presence?Math.min(q,B.presence+f/Math.max(1,o.swarm.arrival)):Math.max(q,B.presence-f/3),B.presence<.004&&q===0&&(B.presence=0);const Se=B.presence>.002;B.root.visible=Se;for(const z of B.strands)z.tube.mesh.visible=Se;if(!Se){B.last=null,B.primed=!1;return}const ge=B.spec;B.beat+=d*Kn*(ge.pulses/cc)+f*h*Kn*1.5;const me=_w(B.beat),j=Math.min(1.3,Math.max(me,g*.7)+h*.4),ce=(B.grip??0)+(c.fist-(B.grip??0))*(1-Math.exp(-f*(7-D*.7))),le=Math.max(0,(ce-(B.gripWas??ce))/Math.max(f,.001));B.gripWas=ce,B.grip=ce;const Ee=this.handHold,we=(j*(1-Ee)+ce*Ee)*o.swarm.pulse,ve=(Math.min(1.3,me+g*.15+h*.4+this.swell*.5)*(1-Ee)+Math.min(1.3,le*.35)*Ee)*o.swarm.pulse,Ge=B.presence*B.presence;B.rise+=(ve*1.5*Ge-B.rise*1.2)*f,B.lift+=(B.rise-B.lift*.35)*f*.8,k.set(ge.c[0]*H+ge.a[0]*F*Math.sin(_+ge.ph),ge.c[1]*Math.min(1.4,H)+ge.a[1]*F*Math.sin(2*_+ge.ph*1.7),ge.c[2]+ge.a[2]*F*Math.cos(_+ge.ph*.6));const He=this.current-D*.35;k.x+=Math.sin(He+ge.ph*.5)*.9*this.carry,k.y+=Math.sin(He*.63+ge.ph)*.3*this.carry,k.z+=Math.cos(He*.8+ge.ph*1.3)*.5*this.carry;const Ze=.8+1.6*(1-D/pg.length);B.pull.lerp(I,1-Math.exp(-f*Ze)),k.add(B.pull),Q.set(0,0,0),h>.001&&(W.set(k.x,k.y-.5,0),W.lengthSq()<.01&&W.set(D%2?1:-1,.4,0),Q.copy(W.normalize()).multiplyScalar(h*2.6),k.add(Q));{const z=B.presence,Me=.15+.85*z*z*z,L=ge.c[0]*H,A=ge.c[2];k.x=L+(k.x-L)*Me,k.z=A+(k.z-A)*Me}const Qe=Math.max(0,o.swarm.water??0);if(Qe>0){Q.x+=ge.c[0]*P*this.swell*.9,Q.y+=ge.c[1]*(Math.min(1.4,H)-Math.min(1.4,P)),k.sub(Q),(!B.sp||!B.sv)&&(B.sp=k.clone(),B.sv=new $);const z=2.2/(Qe*Qe),Me=1.9/Qe;B.sv.x+=((k.x-B.sp.x)*z-B.sv.x*Me)*f,B.sv.y+=((k.y-B.sp.y)*z-B.sv.y*Me)*f,B.sv.z+=((k.z-B.sp.z)*z-B.sv.z*Me)*f,B.sv.y+=(ve*2.4-.7)*f*Math.min(1,Qe),B.sp.addScaledVector(B.sv,f),k.copy(B.sp).add(Q)}if(B.last){W.subVectors(k,B.last).divideScalar(Math.max(f,.001));const z=1/(1+1.5*Qe),Me=new $(ac.clamp(W.x*.12*z,-.6,.6),1,W.z*.08*z).normalize();B.up.lerp(Me,1-Math.exp(-f*1.5)).normalize()}B.last=(B.last??new $).copy(k),k.addScaledVector(B.up,B.lift-.6);const nt=B.presence,Je=nt*nt*nt*(nt*(nt*6-15)+10);k.y-=(1-Je)*7,k.y-=.9;const lt=ge.s*N*(.3+.7*Je)*(1+c.bass*o.sound.bass*.08+g*.04);{const z=this.camera.position,Me=Math.tan(this.camera.fov*Math.PI/360)*Math.max(1,z.z-k.z),A=z.y+Me-1.5*lt-.8;k.y>A&&(k.y=A+.8*(1-Math.exp(-(k.y-A)/.8)))}B.root.position.copy(k),K.setFromUnitVectors(se,B.up),B.root.quaternion.copy(K),B.root.rotateY(Math.sin(_+ge.ph)*.4*B.presence),B.root.scale.setScalar(lt);const Rt=jf+xw*we;for(const z of B.tilts)z.rotation.x=Rt;for(const z of B.lobes)z.scale.y=.18*(1-.18*we);B.cap.scale.set(.44*(1-.2*we),.26*(1+.08*we),.44*(1-.2*we)),B.root.updateMatrix();const ee=o.swarm.tentacles,Lt=B.up.clone().negate();Z.set(1,0,0).applyQuaternion(B.root.quaternion);for(const z of B.strands){const Me=z.links;z.angle!==null&&mg(z.angle,Rt,z.from);const L=Me[0].copy(z.from).applyMatrix4(B.root.matrix);if(!B.primed)for(let A=1;A<tc;A++)Me[A].copy(L).addScaledVector(Lt,z.link*lt*ee*A);for(let A=1;A<tc;A++){const ne=Me[A-1],he=Me[A];W.subVectors(he,ne),W.lengthSq()<1e-8&&W.copy(Lt),W.normalize().lerp(Lt,.22+.1*we).normalize();const Ae=Math.sin(z.phase+_*3*G-A*.75)*.06*G*(A/tc);W.addScaledVector(Z,Ae).normalize(),he.copy(ne).addScaledVector(W,z.link*lt*ee)}z.tube.update(z.radius*lt,.25)}B.primed=!0;const vt=B.shared;vt.uT.value=this.colourTime,vt.uOff.value=ge.off+o.colour.offset,vt.uWA.value=1,vt.uWB.value=.6,vt.uWC.value=.8+.4*Math.sin(_+ge.ph);const At=B.strandShared;At.uT.value=this.colourTime,At.uOff.value=ge.off+.15+o.colour.offset,l.apply(vt,o.colour.depth,Y),l.apply(At,o.colour.depth,Y)}),this.scene.updateMatrixWorld(!0),this.camera.updateMatrixWorld(!0);for(const B of this.swarm)B.root.visible&&(B.cap.getWorldPosition(O),O.applyMatrix4(this.camera.matrixWorldInverse),B.shared.uCenter.value.copy(O))}}const gg={grid:{detail:.5,field:.5,figure:.4,words:1,zoom:1},hands:{light:1,close:1,clap:1},sound:{beat:1,quiet:1}};let jh=null,Rv=0,uc=0;function Mw(){uc++;let s=!1;return()=>{s||(s=!0,uc=Math.max(0,uc-1))}}function Sw(){return uc>0}function Aw(s,e,t){if(s.length<e*t)return;const r=new Uint8Array(e*t);for(let o=0;o<t;o++)for(let l=0;l<e;l++)r[o*e+l]=s[o*e+(e-1-l)];jh={data:r,width:e,height:t},Rv=performance.now()}const Ew=4e3;function ww(){return jh&&performance.now()-Rv<Ew?jh:null}function Tw(s,e,t){const r=Math.min(s.width-1.001,Math.max(0,e*(s.width-1))),o=Math.min(s.height-1.001,Math.max(0,t*(s.height-1))),l=Math.floor(r),c=Math.floor(o),f=r-l,d=o-c,h=c*s.width+l,g=s.data[h],x=s.data[h+1],m=s.data[h+s.width],_=s.data[h+s.width+1];return(g+(x-g)*f+(m-g)*d+(g-x-m+_)*f*d)/255}const ma=8;function vg(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(r=>r+r).join(""):e;return[parseInt(t.slice(0,2),16)||0,parseInt(t.slice(2,4),16)||0,parseInt(t.slice(4,6),16)||0]}class bw{constructor(e,t){V(this,"canvas");V(this,"ctx");V(this,"cfg",gg);V(this,"playing",new Rs(.6));V(this,"lit",new Float32Array(0));V(this,"columns",0);V(this,"rows",0);V(this,"time",0);V(this,"real",0);V(this,"closed",0);V(this,"focus",{x:.89,y:.5});V(this,"rings",[]);V(this,"lastKick",0);V(this,"breath",0);V(this,"release",null);V(this,"glow",document.createElement("canvas"));V(this,"glowKey","");this.canvas=e,this.ctx=t}setParams(e){this.cfg=bs(gg,e)}destroy(){var e;(e=this.release)==null||e.call(this),this.release=null}tint(e){if(e===this.glowKey)return;this.glowKey=e;const[t,r,o]=vg(e);this.glow.width=this.glow.height=96;const l=this.glow.getContext("2d");l.clearRect(0,0,96,96);const c=l.createRadialGradient(48,48,0,48,48,48),f=d=>Math.round(d+(255-d)*.6);c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(.1,`rgba(${f(t)},${f(r)},${f(o)},0.9)`),c.addColorStop(.35,`rgba(${t},${r},${o},0.25)`),c.addColorStop(1,`rgba(${t},${r},${o},0)`),l.fillStyle=c,l.fillRect(0,0,96,96)}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;const h=f/d,g=this.playing;g.read(e,r);const{dt:x}=g,m=Math.min(.08,Math.max(0,g.step));this.time+=m,this.real+=x;const _=ve=>1-Math.exp(-x*ve);this.tint(t[0]??"#8fb4ff"),c.grid.figure>.01&&!this.release&&(this.release=Mw()),c.grid.figure<=.01&&this.release&&(this.release(),this.release=null);const S=Math.round(Math.max(8,Math.min(150,(22+34*Math.max(0,Math.min(1,c.grid.detail)))/Math.max(.2,c.grid.zoom)))),T=Math.round(S*h);(S!==this.rows||T!==this.columns)&&(this.rows=S,this.columns=T,this.lit=new Float32Array(S*T));const y=1/S,M=[e.left,e.right].filter(Boolean),w=M.length>0&&!e.synthetic;let R=M.map(ve=>{const Ge=ve.openness??(ve.gesture==="fist"?0:1),He=ve.depth??.35;return{x:ve.position.x*h,y:ve.position.y,reach:(.04+.19*Ge*Ge)*c.hands.light*(.8+.6*He),power:.85+.5*He}});if(R.length&&!w&&(R=[{x:R.reduce((ve,Ge)=>ve+Ge.x,0)/R.length,y:R.reduce((ve,Ge)=>ve+Ge.y,0)/R.length,reach:.13*c.hands.light,power:.7}]),R.length){const ve=R.reduce((He,Ze)=>He+Ze.x,0)/R.length,Ge=R.reduce((He,Ze)=>He+Ze.y,0)/R.length;this.focus.x+=(ve-this.focus.x)*_(6),this.focus.y+=(Ge-this.focus.y)*_(6)}else this.focus.x+=(h/2-this.focus.x)*_(.8),this.focus.y+=(.5-this.focus.y)*_(.8);const P=!!(r!=null&&r.live);let H=0;w?H=g.fist*c.hands.close:P&&(H=Math.max(0,Math.min(.8,(.3-g.energy)*3.2))*c.sound.quiet),this.closed+=(Math.min(1,H)-this.closed)*_(H>this.closed?1.7:2.6),g.clapped&&c.hands.clap>0&&(this.rings.push({x:this.focus.x,y:this.focus.y,at:0,strength:g.clapStrength*c.hands.clap}),this.closed*=.25);const I=(ve,Ge,He)=>{const Ze=Math.max(0,Math.min(1,(He-ve)/(Ge-ve)));return Ze*Ze*(3-2*Ze)},F=I(.04,.62,this.closed),E=I(.55,1,this.closed),U=Math.max(g.kick,g.bump)*c.sound.beat;U>.45&&this.lastKick<=.45&&(this.rings.push({x:this.focus.x,y:this.focus.y,at:0,strength:.16+.14*Math.min(1,U)}),this.rings.length>6&&this.rings.shift()),this.lastKick=U;for(const ve of this.rings)ve.at+=x;this.rings=this.rings.filter(ve=>ve.at<2.6),this.breath+=(g.bass-this.breath)*_(3);const Y=this.release?ww():null,G=c.grid.figure,N=c.grid.field,k=this.time,Q=this.lit,K=_(16),se=_(2.4),W=R[0],Z=R[1];let O=0,B=0,D=0;W&&Z&&(O=Z.x-W.x,B=Z.y-W.y,D=O*O+B*B);for(let ve=0;ve<S;ve++){const Ge=(ve+.5)*y;for(let He=0;He<T;He++){const Ze=(He+.5)*y;let Qe=N*(.16+.07*Math.sin(Ze*2.1+Ge*1.3-k*.5)+.04*Math.sin(Ze*.9-Ge*2.7+k*.31));Y&&G>.01&&(Qe+=Tw(Y,Ze/h,Ge)*.34*G);for(const Je of R){const lt=Ze-Je.x,Rt=Ge-Je.y;Qe+=Je.power*Math.exp(-(lt*lt+Rt*Rt)/(Je.reach*Je.reach))}if(D>1e-5){const Je=Math.max(0,Math.min(1,((Ze-W.x)*O+(Ge-W.y)*B)/D)),lt=Math.hypot(Ze-(W.x+O*Je),Ge-(W.y+B*Je));Qe+=.55*Math.exp(-(lt*lt)/(y*y*.5))}for(const Je of this.rings){const lt=Math.hypot(Ze-Je.x,Ge-Je.y)-Je.at*.85;lt>-.09&&lt<.09&&(Qe+=Je.strength*Math.exp(-(lt*lt)/.0011)*(1-Je.at/2.6))}const nt=ve*T+He;Q[nt]+=(Qe-Q[nt])*(Qe>Q[nt]?K:se)}}l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,f,d);const q=[];for(let ve=0;ve<ma;ve++)q.push(new Path2D);const Se=y*d,ge=1+.18*this.breath,me=this.focus.x,j=this.focus.y;for(let ve=0;ve<S;ve++){if(F>.97&&ve%3!==0)continue;const Ge=(ve+.5)*y,He=(j+(Ge-j)*(1-F))*d;for(let Ze=0;Ze<T;Ze++){const Qe=Q[ve*T+Ze];if(Qe<.03)continue;const nt=(Ze+.5)*y,Je=(me+(nt-me)*(1-E))*d,lt=Math.min(ma-1,Math.floor(Math.min(.999,Qe)*ma)),Rt=Se*Math.min(.5,.07+.4*Math.min(1,Qe))*ge*(1-.45*F),ee=q[lt];ee.moveTo(Je+Rt,He),ee.arc(Je,He,Rt,0,Math.PI*2)}}const[ce,le,Ee]=vg(t[0]??"#8fb4ff"),we=1-.82*F;for(let ve=0;ve<ma;ve++){const Ge=ve/(ma-1),He=(Ze,Qe)=>{const nt=Qe+(255-Qe)*Math.min(1,.35+Math.max(0,Ge*1.6-.6));return Math.round(Ze+(nt-Ze)*Math.min(1,Ge*1.4))};l.fillStyle=`rgb(${He(150,ce)},${He(156,le)},${He(170,Ee)})`,l.globalAlpha=Math.min(1,(.3+.7*Ge)*we),l.fill(q[ve])}if(E>.02){const ve=Se*(2.4+5*E)*(1+.25*this.breath);l.globalCompositeOperation="lighter",l.globalAlpha=Math.min(1,E*1.2),l.drawImage(this.glow,me*d-ve,j*d-ve,ve*2,ve*2),l.globalCompositeOperation="source-over"}if(c.grid.words>.01){const ve=d/720,Ge=Math.max(9,Math.round(11*ve));l.font=`500 ${Ge}px ui-monospace, SFMono-Regular, Menlo, monospace`,l.textBaseline="alphabetic",l.textAlign="left";let He;this.closed>.9?He="standby":this.closed>.25?He="closing":w?He=R.length>1?"two hands":"one hand":He=P?"listening":"waiting";const Ze=Je=>Math.round(Je+(255-Je)*.7);l.fillStyle=`rgb(${Ze(ce)},${Ze(le)},${Ze(Ee)})`,l.globalAlpha=.6*c.grid.words;const Qe=20*ve,nt=d-20*ve;if(l.fillText(He,Qe,nt),Math.floor(this.real*1.6)%2===0){const Je=l.measureText(He).width;l.fillRect(Qe+Je+5*ve,nt-Ge*.82,Ge*.55,Ge)}}l.globalAlpha=1}}const xg={shape:{size:1,morph:.12,lobes:1,detail:4,style:2,steady:0},motion:{spin:1,flow:1,dust:.5,points:1400,glide:0},hands:{shape:1,follow:.25,clap:1},sound:{bass:1,beat:1,spin:1,drop:1,squash:0}};class Cw{constructor(e,t){V(this,"canvas");V(this,"ctx");V(this,"cfg",xg);V(this,"playing",new Rs(.6));V(this,"surface",document.createElement("canvas"));V(this,"scene",new Ac);V(this,"camera",new li(50,16/9,.1,100));V(this,"renderer");V(this,"group",new Ki);V(this,"corners",new Float32Array(0));V(this,"edges",new Uint32Array(0));V(this,"shaped",new Float32Array(0));V(this,"points",null);V(this,"lines",null);V(this,"builtDetail",-1);V(this,"wire");V(this,"dots");V(this,"dust");V(this,"time",0);V(this,"flow",0);V(this,"spin",0);V(this,"pull",0);V(this,"swell",0);V(this,"pulse",0);V(this,"burst",0);V(this,"lastDrop",0);V(this,"dent",0);V(this,"dentDir",new $(1,0,0));V(this,"dentAim",new $(1,0,0));V(this,"dentTo",0);V(this,"pace",0);V(this,"turn",0);V(this,"lastSquash",0);V(this,"at",new Ut);this.canvas=e,this.ctx=t,this.renderer=new Mv({canvas:this.surface,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(1),this.renderer.setClearColor(0,1),this.camera.position.set(0,0,7.5),this.camera.lookAt(0,0,0),this.scene.add(this.group),this.wire=new av({color:6737151,transparent:!0,opacity:.85}),this.dots=new Vh({color:6737151,size:.09,transparent:!0,opacity:1,depthWrite:!1});const r=6e3,o=new Float32Array(r*3);for(let c=0;c<r;c++){const f=4+Math.random()*14,d=Math.random()*Math.PI*2,h=Math.random()*2-1,g=Math.sqrt(1-h*h);o.set([f*g*Math.cos(d),f*h,-Math.abs(f*g*Math.sin(d))-3],c*3)}const l=new un;l.setAttribute("position",new Gt(o,3)),this.dust=new Wh(l,new Vh({color:16777215,size:.03,transparent:!0,opacity:.5,depthWrite:!1})),this.scene.add(this.dust)}setParams(e){this.cfg=bs(xg,e)}build(e){this.points&&(this.group.remove(this.points,this.lines),this.points.geometry.dispose(),this.lines.geometry.dispose());const t=new fd(1,e),r=t.attributes.position.array,o=new Map,l=[],c=[];for(let m=0;m<r.length;m+=3){const _=`${r[m].toFixed(4)},${r[m+1].toFixed(4)},${r[m+2].toFixed(4)}`;let S=o.get(_);S===void 0&&(S=l.length/3,o.set(_,S),l.push(r[m],r[m+1],r[m+2])),c.push(S)}const f=new Set,d=[],h=l.length/3;for(let m=0;m<c.length;m+=3)for(const[_,S]of[[c[m],c[m+1]],[c[m+1],c[m+2]],[c[m+2],c[m]]]){const T=_<S?_*h+S:S*h+_;f.has(T)||(f.add(T),d.push(_,S))}t.dispose(),this.corners=Float32Array.from(l),this.shaped=new Float32Array(l.length),this.edges=Uint32Array.from(d);const g=new un;g.setAttribute("position",new Gt(this.shaped,3));const x=new un;x.setAttribute("position",new Gt(new Float32Array(d.length*2*3),3)),this.points=new Wh(g,this.dots),this.lines=new zy(x,this.wire),this.points.frustumCulled=!1,this.lines.frustumCulled=!1,this.group.add(this.lines,this.points),this.builtDetail=e}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;const h=this.playing;h.read(e,r);const{dt:g}=h,x=ge=>1-Math.exp(-g*ge),m=Math.max(0,c.motion.glide),_=Math.max(0,h.step);this.pace+=(_-this.pace)*(m>0?x(.7/m):1);const S=this.pace;this.time+=S;const T=Math.max(2,Math.min(6,Math.round(c.shape.detail)));T!==this.builtDetail&&this.build(T);const y=[e.left,e.right],M=!e.synthetic&&y.some(Boolean),w=M?Math.max(h.fist,h.pinch):0;this.pull+=(w*c.hands.shape-this.pull)*x(4),this.swell+=(h.bass*c.sound.bass-this.swell)*x(m>0?1.2/m:5);const R=Math.max(h.kick,h.bump)*c.sound.beat;this.pulse=Math.max(this.pulse*Math.exp(-g*6),Math.min(1,R)),h.clapped&&c.hands.clap>0&&(this.burst=Math.max(this.burst,h.clapStrength*c.hands.clap)),h.drop>.5&&this.lastDrop<=.5&&(this.burst=Math.max(this.burst,.9*c.sound.drop));const P=Math.max(h.kick,h.bump);c.sound.squash>0&&P>.45&&this.lastSquash<=.45&&(this.dentTo=Math.max(this.dentTo,Math.min(1,P)*c.sound.squash),this.dentAim.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize()),this.lastSquash=P,this.dent+=(this.dentTo-this.dent)*(m>0?x(9/m):1),this.dentTo*=Math.exp(-g*2.6),m>0?this.dentDir.lerp(this.dentAim,x(6/m)).normalize():this.dentDir.copy(this.dentAim),this.lastDrop=h.drop,this.burst*=Math.exp(-g*2.2);const H=c.shape.morph+.35*this.swell+.5*this.pull+.25*h.build;this.flow+=S*.35*c.motion.flow*(1+this.swell);const I=1.1*Math.max(.3,c.shape.lobes),F=this.flow,E=this.corners,U=this.shaped;let Y=0;for(let ge=0;ge<E.length;ge+=3){const me=E[ge],j=E[ge+1],ce=E[ge+2],le=Math.sin(me*I*1.7+F)*.5+Math.sin(j*I*2.1-F*.8+1.3)*.35+Math.sin((me+ce)*I*1.4+F*1.3+2.1)*.3+Math.sin((j-ce)*I*2.6-F*.6)*.15*(.5+this.pull),Ee=Math.max(0,me*this.dentDir.x+j*this.dentDir.y+ce*this.dentDir.z),we=1+le*H+this.pulse*.08*(.6+.4*Math.sin(j*3+F))+this.burst*.6*(.7+.3*le)-this.dent*.35*Ee*Ee;U[ge]=me*we,U[ge+1]=j*we,U[ge+2]=ce*we,Y+=Math.max(0,we)}if(c.shape.steady>0){const ge=Y/Math.max(1,E.length/3),me=1+(1/Math.max(.3,ge)-1)*Math.min(1,c.shape.steady);for(let j=0;j<U.length;j++)U[j]*=me}this.points.geometry.attributes.position.needsUpdate=!0;const G=Math.max(0,Math.min(2,c.shape.style)),N=.5*Math.min(1,G/2),k=this.lines.geometry.attributes.position,Q=k.array,K=this.edges;for(let ge=0,me=0;ge<K.length;ge+=2){const j=K[ge]*3,ce=K[ge+1]*3,le=U[j],Ee=U[j+1],we=U[j+2],ve=U[ce],Ge=U[ce+1],He=U[ce+2];Q[me++]=le,Q[me++]=Ee,Q[me++]=we,Q[me++]=le+(ve-le)*N,Q[me++]=Ee+(Ge-Ee)*N,Q[me++]=we+(He-we)*N,Q[me++]=ve,Q[me++]=Ge,Q[me++]=He,Q[me++]=ve+(le-ve)*N,Q[me++]=Ge+(Ee-Ge)*N,Q[me++]=He+(we-He)*N}k.needsUpdate=!0,this.lines.visible=N>.004;const se=.8*h.mid+.6*h.energy;this.turn+=(se-this.turn)*(m>0?x(.8/m):1),this.spin+=S*.35*c.motion.spin*(1+c.sound.spin*this.turn),this.group.rotation.set(.35+Math.sin(this.time*.13)*.25,this.spin,Math.sin(this.time*.09)*.2);const W=M?c.hands.follow:c.hands.follow*.3;this.at.x+=(h.aim.x*2.2*W-this.at.x)*x(2),this.at.y+=(h.aim.y*1.3*W-this.at.y)*x(2),this.group.position.set(this.at.x,this.at.y,0),this.group.scale.setScalar(1.6*Math.max(.2,c.shape.size)*(1+.05*this.pulse));const Z=Math.min(1,G/2),O=new Xt(t[0]??"#66ccff"),B=new Xt(t[1]??t[0]??"#3300ff"),D=O.clone().lerp(new Xt(1,1,1),.25+.4*this.pulse);this.wire.color.copy(D),this.dots.color.copy(D.clone().lerp(B,.3)),this.dots.size=(.08+.05*this.pulse)*(1-.35*Z),this.dots.opacity=1,this.wire.opacity=.55+.4*Math.min(1,this.swell+this.pulse);const q=this.dust.material;q.opacity=Math.max(0,Math.min(1,c.motion.dust));const Se=Math.max(0,Math.min(6e3,Math.round(c.motion.points)));this.dust.geometry.setDrawRange(0,Se),this.dust.visible=c.motion.dust>.01&&Se>0,this.dust.rotation.y=-this.time*.03,(this.surface.width!==f||this.surface.height!==d)&&this.renderer.setSize(f,d,!1),this.camera.aspect=f/d,this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera),l.globalCompositeOperation="source-over",l.globalAlpha=1,l.drawImage(this.surface,0,0,f,d)}destroy(){md(this.scene,this.renderer)}}const _g={look:{flow:1,zoom:1,detail:1,veins:1,grain:.5},hands:{follow:1,clap:1},sound:{beat:1,bass:1}},Rw=`
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,Pw=`
precision highp float;
varying vec2 vUv;
uniform vec2 uRes;
uniform float uTime, uReal, uStyle, uFlow, uDetail, uVeins, uGrain, uBass, uKick, uBurst, uTurn, uZoom;
uniform vec3 uHand;
uniform vec4 uDrops[8];       // ripples: x, y, when, how hard

float hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float s = 0.0, a = 0.5;
  mat2 r = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 5; i++) { s += a * noise(p); p = r * p * 2.02 + 3.1; a *= 0.5; }
  return s;
}
/* Domain warping: noise fed through itself — the liquid in everything. */
vec2 warp(vec2 p, float t) {
  vec2 q = vec2(fbm(p + vec2(0.0, t * 0.11)), fbm(p + vec2(5.2, 1.3) - t * 0.09));
  vec2 r = vec2(fbm(p + 3.0 * q + vec2(1.7, 9.2) + t * 0.05), fbm(p + 3.0 * q + vec2(8.3, 2.8) - t * 0.04));
  return r;
}
vec3 hueTurn(vec3 c, float a) {
  const vec3 k = vec3(0.57735);
  return c * cos(a) + cross(k, c) * sin(a) + k * dot(k, c) * (1.0 - cos(a));
}
vec3 spectrum(float x) {
  return clamp(abs(fract(x + vec3(0.0, 0.33, 0.67)) * 6.0 - 3.0) - 1.0, 0.0, 1.0);
}

// ── INK WING ────────────────────────────────────────────────────────────────
/* A wing of ink spreading on wet paper: an orange rim, a black band bleeding
   inward with feathered edges, a peach and cyan heart, an eye near its root,
   fine dark veins. It breathes and the ink keeps travelling. */
vec3 inkWing(vec2 p, float t) {
  vec3 paper = vec3(0.87, 0.86, 0.84);
  vec3 haze = vec3(0.58, 0.64, 0.92);
  vec2 root = vec2(-0.05, -0.62) + uHand.z * (uHand.xy - vec2(0.5)) * vec2(0.3, 0.2);
  vec2 d = p - root;
  float ang = atan(d.y, d.x);
  float r = length(d);
  vec2 w = warp(p * 1.2, t);
  // The wing: one big lobe, its edge wandering slowly.
  float reach = (1.05 + 0.14 * sin(ang * 2.0 + t * 0.07) + 0.3 * (w.x - 0.5)) * (1.0 + uBass * 0.08 + uKick * 0.04);
  float lobe = smoothstep(0.1, 1.2, ang) * smoothstep(2.9, 1.9, ang);
  reach *= mix(0.3, 1.0, lobe);
  float inside = reach - r;
  vec3 col = mix(paper, haze, smoothstep(0.45, 0.0, abs(inside)) * 0.6);
  float s = clamp(inside / reach, 0.0, 1.0);              // 0 at the rim, 1 at the root
  // Ink travels outward in hairs: streaks along the radius.
  float hairs = fbm(vec2(ang * 26.0, r * 3.0 - t * 0.05) + w * 2.0);
  float feather = (hairs - 0.5) * 0.16 * uDetail + (w.y - 0.5) * 0.22;
  vec3 orange = vec3(0.98, 0.38, 0.12);
  vec3 peach = vec3(1.0, 0.64, 0.58);
  vec3 cyan = vec3(0.42, 0.82, 0.88);
  vec3 ink = vec3(0.025, 0.02, 0.03);
  vec3 heart = mix(peach, cyan, smoothstep(0.3, 0.8, w.x + (s - 0.65) * 0.9));
  heart = mix(heart, vec3(0.95, 0.85, 0.82), smoothstep(0.75, 0.95, w.y) * 0.5);
  vec3 c = mix(orange, heart, smoothstep(0.36, 0.58, s + feather));
  float band = smoothstep(0.1, 0.28, s + feather) * (1.0 - smoothstep(0.36, 0.6, s + feather * 1.5));
  c = mix(c, ink, band * 0.97);
  // The eye near the root, soft as if photographed: navy, a blue iris with a
  // rainbow sheen at its edge, black, a cyan halo.
  vec2 eyeC = root + vec2(0.05, 0.32);
  float e = length((p - eyeC) * vec2(1.0, 1.3)) + (w.x - 0.5) * 0.04;
  float er = 0.11 * (1.0 + uKick * 0.15);
  c = mix(c, vec3(0.55, 0.86, 0.92), smoothstep(er * 2.1, er * 1.3, e) * 0.8);
  c = mix(c, ink, smoothstep(er * 1.35, er * 1.05, e));
  vec3 iris = mix(vec3(0.2, 0.42, 0.85), vec3(0.03, 0.06, 0.22), smoothstep(er * 0.95, er * 0.25, e));
  c = mix(c, iris, smoothstep(er * 1.02, er * 0.85, e));
  c += spectrum(e * 9.0 + w.y) * 0.18 * smoothstep(0.03, 0.0, abs(e - er * 0.98));
  // Fine veins, faint, curving with the flow.
  float va = ang * 7.0 + (w.y - 0.5) * 1.2 + r * 0.6;
  float vein = 1.0 - smoothstep(0.0, 0.02, abs(fract(va) - 0.5));
  c = mix(c, vec3(0.15, 0.07, 0.06), vein * 0.35 * uVeins * smoothstep(0.15, 0.5, r) * (1.0 - band));
  // Volume: the paper and the pigment lie in soft folds.
  float h = fbm(p * 2.5 + w * 1.5);
  float shade = 0.92 + 0.16 * (h - 0.5) * 2.0;
  c *= shade;
  // A wet edge catching the light, and the colour bleeding just past it.
  c = mix(c, vec3(1.0, 0.75, 0.5), smoothstep(0.03, 0.0, abs(s - 0.005)) * 0.4);
  col = mix(col, c, smoothstep(-0.03, 0.02, inside));
  return col;
}

// ── PETALS ──────────────────────────────────────────────────────────────────
/* Petals out of focus, so close they are mostly colour: layer over layer,
   the near ones blurred wide, pink to peach to cream, freckled orange. */
vec3 petals(vec2 p, float t) {
  vec2 w = warp(p * 0.7, t * 0.6);
  vec3 col = mix(vec3(0.08, 0.42, 0.52), vec3(0.93, 0.42, 0.6), smoothstep(0.25, 0.75, w.x));
  col = mix(col, vec3(0.03, 0.09, 0.12), smoothstep(0.6, 0.9, w.y) * 0.7);
  for (int i = 0; i < 5; i++) {
    float fi = float(i);
    float depth = fi / 4.0;                       // 0 far, 1 nearest and softest
    // Drifting through the frame, each at its own pace, and swaying as they go;
    // the kick lifts them a little and the bass breathes them wider.
    vec2 c = vec2(sin(t * 0.11 * (1.0 + fi * 0.3) + fi * 2.1) * 0.62, cos(t * 0.09 * (1.0 + fi * 0.2) + fi * 1.3) * 0.38);
    c.y += uKick * 0.05 * (0.5 + depth);
    float a = fi * 1.25 + 0.4 + t * 0.05 + sin(t * 0.45 + fi * 1.7) * 0.22 + (w.x - 0.5) * 0.5;
    vec2 q = mat2(cos(a), -sin(a), sin(a), cos(a)) * (p - c);
    float len = 0.6 + 0.25 * hash(vec2(fi, 3.0));
    float along = q.y / len;                     // -1 base, 1 tip
    float halfw = 0.42 * (0.5 + 0.5 * hash(vec2(fi, 9.0))) * sqrt(max(0.0, 1.0 - along * along)) * (0.45 + 0.55 * (along * 0.5 + 0.5));
    // The edges flutter, as thin petals do in moving air.
    halfw *= 1.0 + (fbm(q * 2.0 + fi + vec2(t * 0.12, -t * 0.08)) - 0.5) * 0.45 + uBass * 0.08;
    float sd = abs(q.x) - halfw;
    float soft = mix(0.015, 0.2, depth * depth) * (1.0 + uBass * 0.4);
    float m = smoothstep(soft, -soft, sd) * smoothstep(1.05, 0.85, abs(along)) * smoothstep(0.0, 0.03, halfw) * mix(0.75, 0.92, depth);
    float t01 = clamp(along * 0.5 + 0.5, 0.0, 1.0);
    vec3 tip = mix(vec3(0.98, 0.52, 0.62), vec3(1.0, 0.6, 0.32), hash(vec2(fi, 7.0)));
    vec3 pc = mix(vec3(1.0, 0.95, 0.9), tip, smoothstep(0.15, 0.95, t01 + (w.y - 0.5) * 0.3));
    // Light through the petal: brighter at its middle, faint lines along it.
    pc *= 0.9 + 0.12 * (1.0 - abs(q.x) / max(halfw, 0.01));
    // Freckles toward the base: round, scattered, soft with depth.
    vec2 cell = floor(q * 28.0);
    vec2 loc = fract(q * 28.0) - 0.5 - (vec2(hash(cell), hash(cell + 3.1)) - 0.5) * 0.5;
    float dot1 = smoothstep(0.24 + depth * 0.2, 0.08, length(loc)) * step(0.8, hash(cell + fi));
    float fr = dot1 * smoothstep(0.75, 0.1, t01) * (1.0 - depth * 0.8);
    pc = mix(pc, vec3(0.8, 0.32, 0.12), fr * 0.8 * uDetail);
    col = mix(col, pc, m);
  }
  return col;
}

// ── FILAMENTS ───────────────────────────────────────────────────────────────
/* Thousands of fine filaments fanning into a narrow dark slit, cream to
   orange to navy, a void behind — like the gills of a mushroom seen close. */
vec3 filaments(vec2 p, float t) {
  vec2 c = vec2(0.25, -0.22) + uHand.z * (uHand.xy - vec2(0.5)) * 0.2;
  vec2 d = p - c;
  vec2 w = warp(p * 1.0, t * 0.6);
  float r = length(d);
  // The lines curl as they leave the slit, and drift with a slow flow.
  float ang = atan(d.y, d.x) + 0.35 * r + (w.x - 0.5) * 0.18;
  float n = 300.0 * (0.5 + uDetail * 0.5);
  float fine = 0.5 + 0.5 * sin(ang * n);
  float coarse = 0.5 + 0.5 * sin(ang * n * 0.13 + w.y * 4.0);
  float lines = mix(fine, coarse, 0.35);
  vec3 cream = vec3(0.96, 0.93, 0.88);
  vec3 orange = vec3(0.96, 0.56, 0.3);
  vec3 lilac = vec3(0.82, 0.8, 0.92);
  vec3 navy = vec3(0.03, 0.05, 0.12);
  float k = smoothstep(-0.6, 0.9, -p.y * 0.9 + p.x * 0.2 + (w.x - 0.5) * 0.6);
  vec3 col = mix(cream, orange, k);
  col = mix(col, lilac, smoothstep(0.55, 0.85, w.y) * 0.45);
  // The void: dark, sweeping round behind the slit to the right.
  float voidField = (d.x - 0.04) - 0.5 * d.y * d.y + (w.y - 0.5) * 0.12;
  float dark = smoothstep(-0.02, 0.08, voidField) * smoothstep(0.9, 0.0, d.y + 0.2 - d.x * 0.3);
  col = mix(col, navy, dark);
  // On the dark side the filaments glow orange near the slit and fade.
  vec3 glowC = mix(vec3(1.0, 0.62, 0.3), navy, smoothstep(0.05, 0.6, r));
  col = mix(col, glowC, dark * smoothstep(0.65, 0.0, r) * 0.85);
  float contrast = mix(0.18, 0.45, dark);
  col *= 1.0 - contrast * 0.5 + contrast * lines * smoothstep(0.015, 0.15, r);
  // A blue line along the edge of the void.
  col = mix(col, vec3(0.25, 0.4, 0.75), smoothstep(0.02, 0.0, abs(voidField - 0.03)) * 0.35 * (1.0 - smoothstep(0.0, 0.9, r)));
  // The slit, opening on the bass.
  float slit = length(d * vec2(3.2, 0.95)) - 0.04 * (1.0 + uBass * 0.8 + uKick * 0.5);
  col = mix(col, vec3(0.3, 0.12, 0.04), smoothstep(0.012, -0.012, slit));
  col = mix(col, vec3(1.0, 0.78, 0.5), smoothstep(0.015, 0.0, abs(slit)) * 0.55);
  return col;
}

// ── PRISM ───────────────────────────────────────────────────────────────────
/* Grey: dark petals and leaves against pale light, soft with depth, and a
   prism's rainbow sliding across them. */
vec3 prism(vec2 p, float t) {
  vec2 w = warp(p * 0.9, t * 0.5);
  vec3 col = vec3(0.84, 0.83, 0.82) - (fbm(p * 1.3 + w) - 0.5) * 0.18;
  // Leaves far behind, out of focus.
  float far = smoothstep(0.5, 0.66, fbm(p * 1.1 + vec2(t * 0.01, 0.0) + w * 0.7));
  col = mix(col, vec3(0.45), far * 0.6);
  // The near petals: dark, rounded, their edges soft but clear.
  float near = fbm(p * 0.8 + w * 1.1 - vec2(0.0, t * 0.012));
  float m = smoothstep(0.49, 0.545, near);
  vec3 dark = vec3(0.07) + (fbm(p * 4.0 + w) - 0.5) * 0.06;
  // Their surface: a sheen along the curve of each petal.
  float sheen = smoothstep(0.55, 0.75, near) * (0.5 + 0.5 * sin(near * 40.0 + w.x * 3.0));
  dark += vec3(0.18) * sheen * 0.5;
  col = mix(col, dark, m);
  // The prism: a soft band of spectrum sliding over, brightest on the petals.
  float x = (p.x * 0.7 + p.y * 0.6) - t * 0.035 - uKick * 0.04;
  float band = exp(-pow((fract(x * 0.45) - 0.5) * 5.0, 2.0)) * (0.55 + uBass * 0.4 + uBurst * 0.7);
  vec3 rainbow = spectrum(x * 2.5 + near * 1.5);
  col += rainbow * band * (0.22 + m * (0.5 + sheen * 0.5));
  return col;
}

// ── RINGS ───────────────────────────────────────────────────────────────────
/* Real ripples on still water, seen from above: drops fall (on the kick, on
   a clap, under the hand, now and then on their own) and rings of waves run
   out from each, fading as they spread. The surface has height: the sky
   reflects in it, a light glints off the crests, and the stones on the
   bottom swim through it. */
float dropHeight(vec2 p, float t) {
  float h = 0.0;
  for (int i = 0; i < 8; i++) {
    vec4 d = uDrops[i];
    float age = t - d.z;
    if (d.w <= 0.0 || age < 0.0 || age > 9.0) continue;
    float r = length(p - d.xy);
    float front = age * 0.32;
    float x = r - front;
    // A train of waves behind the front, wider and lower as it travels.
    float width = 0.08 + age * 0.05;
    float env = exp(-x * x / (width * width)) * step(-width * 3.0, x) ;
    env += exp(-pow((x + width * 1.5) / (width * 1.6), 2.0)) * 0.6;
    h += sin(x * 150.0 / (1.0 + age * 0.3)) * env * d.w / (1.0 + age * 1.4 + r * 2.0);
  }
  return h;
}
float waterHeight(vec2 p, float t) {
  // The still surface is never quite still: a faint breath of wind.
  float wind = (fbm(p * 3.0 + vec2(t * 0.05, t * 0.03)) - 0.5) * 0.006;
  wind += sin(p.x * 40.0 + p.y * 25.0 + t * 1.3 + fbm(p * 4.0) * 6.0) * 0.0004 * uDetail;
  return dropHeight(p, t) * 0.018 * (1.0 + uBass * 0.5) + wind;
}
vec3 rings(vec2 p, float t) {
  float e = 0.0025;
  float h0 = waterHeight(p, t);
  float hx = waterHeight(p + vec2(e, 0.0), t) - h0;
  float hy = waterHeight(p + vec2(0.0, e), t) - h0;
  vec3 n = normalize(vec3(-hx / e, -hy / e, 1.0));
  // The bottom: pale stones and sand, seen through the water and bent by it.
  vec2 under = p + n.xy * 0.08;
  float stones = fbm(under * 3.0);
  vec3 bottom = mix(vec3(0.1, 0.14, 0.13), vec3(0.34, 0.34, 0.28), smoothstep(0.35, 0.75, stones));
  // Light gathering on the bottom where the surface curves like a lens.
  float lens = clamp(-(hx + hy) / e * 0.6, -1.0, 1.0);
  bottom *= 1.0 + lens * 0.5;
  vec3 tint = vec3(0.1, 0.3, 0.32);
  vec3 seen = mix(bottom, tint, 0.65);
  // The sky in the surface: pale where a slope faces the light, deep where it turns away.
  vec3 L = normalize(vec3(-0.45, 0.6, 0.65));
  float facing = dot(n.xy, L.xy) * 6.0;
  vec3 sky = mix(vec3(0.05, 0.13, 0.16), vec3(0.78, 0.86, 0.88), smoothstep(-0.6, 0.9, facing + 0.15));
  float fresnel = 0.25 + 0.6 * pow(1.0 - n.z, 0.6);
  vec3 col = mix(seen, sky, fresnel);
  // Glints off the crests.
  vec3 R = reflect(-L, n);
  float spec = pow(max(R.z, 0.0), 220.0);
  col += vec3(1.0, 0.96, 0.88) * spec * (1.4 + uKick);
  return col;
}

// ── WATER ───────────────────────────────────────────────────────────────────
/* Light reflected on moving water: a bright band broken by ripples into
   cells and wobbling ribbons, dark lines running through it, the water
   between grey-green, a dark shore above. */
vec3 water(vec2 p, float t) {
  // The water from above: small waves crossing, moving at the clock's pace.
  vec2 q = p * vec2(1.0, 1.25);
  float wave = fbm(q * 3.0 + vec2(t * 0.15, t * 0.08))
             + 0.6 * fbm(q * 6.0 - vec2(t * 0.11, -t * 0.17))
             + 0.25 * sin(q.x * 9.0 + q.y * 4.0 - t * 0.9);
  // A lit wall or sky reflected as bands; the waves bend them into wobbling
  // ribbons that break into blobs and rings.
  float fine = fbm(q * 11.0 + vec2(-t * 0.3, t * 0.2));
  float bend = (wave - 0.9) * (0.2 + uBass * 0.08) + (fine - 0.5) * 0.05;
  float stripes = sin((p.y + bend) * 62.0 + (p.x + bend * 0.5) * 8.0);
  // Where the light falls: a wide diagonal, the rest grey water, a dark
  // bank across the top corner.
  float diag = p.y - p.x * 0.45 + (wave - 0.9) * 0.15;
  float lightZone = smoothstep(0.32, 0.12, diag) * smoothstep(-0.75, -0.45, diag);
  float bank = smoothstep(0.18, 0.34, diag);
  vec3 waterC = vec3(0.4, 0.41, 0.38) + (wave - 0.9) * 0.12 + stripes * 0.02;
  vec3 col = mix(waterC, vec3(0.13, 0.1, 0.06) + (wave - 0.9) * 0.08, bank);
  // The ribbons: a bright rim, a deeper red inside, a dark hole where a crest
  // turns away.
  float rib = smoothstep(0.35, 0.6, stripes);
  float core = smoothstep(0.8, 0.95, stripes);
  vec3 bright = vec3(1.0, 0.26, 0.1) * (1.0 + uKick * 0.2);
  vec3 deep = vec3(0.6, 0.08, 0.05);
  vec3 lit = mix(bright, deep, core * 0.75);
  col = mix(col, lit, rib * lightZone * (0.92 + uBurst * 0.08));
  // Fainter ribbons trailing out of the light.
  col = mix(col, bright * 0.75, rib * smoothstep(0.55, 0.25, abs(diag + 0.1)) * (1.0 - lightZone) * 0.35);
  // Glints of warm light in the dark water by the bank.
  col += vec3(0.9, 0.72, 0.3) * smoothstep(0.9, 0.98, stripes) * bank * smoothstep(1.1, 1.3, wave) * 0.6;
  return col;
}

void main() {
  vec2 p = (vUv - 0.5) * vec2(uRes.x / uRes.y, 1.0) / uZoom;
  float t = uTime * uFlow;
  vec3 col;
  if (uStyle < 0.5) col = inkWing(p, t);
  else if (uStyle < 1.5) col = petals(p, t);
  else if (uStyle < 2.5) col = filaments(p, t);
  else if (uStyle < 3.5) col = prism(p, t);
  else if (uStyle < 4.5) col = rings(p, t);
  else col = water(p, t);
  col = hueTurn(col, uTurn);
  // Film: a soft vignette and a fine moving grain.
  float v = smoothstep(1.3, 0.35, length((vUv - 0.5) * vec2(uRes.x / uRes.y, 1.0)));
  col *= mix(0.8, 1.0, v);
  col += (hash(gl_FragCoord.xy + floor(uReal * 24.0) * 7.0) - 0.5) * 0.05 * uGrain;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;class Lw{constructor(e,t,r){V(this,"canvas");V(this,"ctx");V(this,"cfg",_g);V(this,"surface",document.createElement("canvas"));V(this,"renderer",null);V(this,"failed",!1);V(this,"scene",new Ac);V(this,"camera",new hd(-1,1,1,-1,0,2));V(this,"material");V(this,"geometry");V(this,"playing",new Rs(.6));V(this,"time",0);V(this,"kick",0);V(this,"breath",0);V(this,"hand",new $);V(this,"drops",Array.from({length:8},()=>new on(0,0,-99,0)));V(this,"nextDrop",0);V(this,"lastDrop",-99);V(this,"lastBurst",0);V(this,"style");this.style=r,this.canvas=e,this.ctx=t,this.geometry=new un,this.geometry.setAttribute("position",new Gt(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),this.material=new vi({vertexShader:Rw,fragmentShader:Pw,depthTest:!1,depthWrite:!1,uniforms:{uRes:{value:new Ut(1,1)},uTime:{value:0},uReal:{value:0},uStyle:{value:0},uFlow:{value:1},uDetail:{value:1},uVeins:{value:1},uGrain:{value:.5},uBass:{value:0},uKick:{value:0},uBurst:{value:0},uTurn:{value:0},uZoom:{value:1},uHand:{value:new $},uDrops:{value:Array.from({length:8},()=>new on(0,0,-99,0))}}});const o=new Nn(this.geometry,this.material);o.frustumCulled=!1,this.scene.add(o);try{this.renderer=dd(this.surface)}catch(l){console.error("Macro could not start:",l),this.failed=!0}}setParams(e){this.cfg=bs(_g,e)}destroy(){var e,t;this.geometry.dispose(),this.material.dispose(),(e=this.renderer)==null||e.dispose(),(t=this.renderer)==null||t.forceContextLoss(),this.renderer=null}render(e,t,r){const o=this.canvas.width,l=this.canvas.height;if(o===0||l===0)return;const c=this.renderer;if(this.failed||!c){pd(this.ctx,o,l,"MACRO");return}const{cfg:f}=this,d=this.playing;d.read(e,r);const{dt:h}=d;this.time+=Math.max(0,d.step)*3,this.kick=Math.max(this.kick*Math.exp(-h*5),d.bump*f.sound.beat),this.breath+=(d.bass*f.sound.bass-this.breath)*(1-Math.exp(-h*3));const g=e.left||e.right?1:0,x=1-Math.exp(-h*3);if(this.hand.x+=((d.aim.x+1)/2-this.hand.x)*x,this.hand.y+=((d.aim.y+1)/2-this.hand.y)*x,this.hand.z+=(g*f.hands.follow-this.hand.z)*x,this.style===4){const _=this.time*f.look.flow,S=o/l,T=(R,P,H)=>{this.drops[this.nextDrop].set(R,P,_,H),this.nextDrop=(this.nextDrop+1)%this.drops.length,this.lastDrop=_},y=()=>[(Math.random()-.5)*S*.8,(Math.random()-.5)*.8],M=()=>[(this.hand.x-.5)*S/f.look.zoom,(this.hand.y-.5)/f.look.zoom],w=d.burst*f.hands.clap;if(w>.6&&this.lastBurst<=.6){const[R,P]=g?M():y();T(R,P,2.2)}else if(d.bump>.5&&_-this.lastDrop>.6){const[R,P]=g?M():y();T(R,P,.8+d.bump*.6)}else if(_-this.lastDrop>2.6){const[R,P]=y();T(R,P,.7)}this.lastBurst=w}const m=this.material.uniforms;m.uRes.value.set(o,l),m.uTime.value=this.time,m.uReal.value=performance.now()/1e3%1e3,m.uStyle.value=this.style,m.uFlow.value=f.look.flow,m.uDetail.value=f.look.detail,m.uVeins.value=f.look.veins,m.uGrain.value=f.look.grain,m.uZoom.value=f.look.zoom,m.uBass.value=this.breath,m.uKick.value=this.kick,m.uBurst.value=d.burst*f.hands.clap,m.uTurn.value=wv(t).hue*Math.PI/180,m.uHand.value.copy(this.hand),m.uDrops.value.forEach((_,S)=>_.copy(this.drops[S])),(this.surface.width!==o||this.surface.height!==l)&&c.setSize(o,l,!1),c.render(this.scene,this.camera),this.ctx.globalCompositeOperation="source-over",this.ctx.globalAlpha=1,this.ctx.drawImage(this.surface,0,0,o,l)}}const Iw=1.4,Dw=14,Uw=1.2,yg=(s,e)=>1/(1+1/(2*Math.PI*s)/e);class ho{constructor(e=Iw,t=Dw){V(this,"value",null);V(this,"speed",0);this.minCutoff=e,this.beta=t}next(e,t){if(this.value===null||t<=0)return this.value=e,this.speed=0,e;const r=(e-this.value)/t;this.speed+=(r-this.speed)*yg(Uw,t);const o=this.minCutoff+this.beta*Math.abs(this.speed);return this.value+=(e-this.value)*yg(o,t),this.value}reset(){this.value=null,this.speed=0}}class Nw{constructor(e=5){V(this,"recent",[]);V(this,"held",null);this.size=e}next(e){this.recent.push(e),this.recent.length>this.size&&this.recent.shift();const t=new Map;let r=e,o=0;for(const l of this.recent){const c=(t.get(l)??0)+1;t.set(l,c),(c>o||c===o&&l===this.held)&&(r=l,o=c)}return this.held=r,r}reset(){this.recent=[],this.held=null}}const Mg=[{tip:8,pip:6},{tip:12,pip:10},{tip:16,pip:14},{tip:20,pip:18}];function Fw(s,e){if(!s||s.length<21)return null;const t=(x,m)=>Math.hypot((x.x-m.x)*e,x.y-m.y,(x.z-m.z)*e),r=(x,m)=>Math.hypot((x.x-m.x)*e,x.y-m.y),o=s[0],l=s[9],c=r(o,l);if(c<1e-4)return null;let f=0,d=0;for(const x of Mg){const m=t(s[x.tip],o),_=t(s[x.pip],o);m>_*1.12&&f++,d+=Math.min(1,Math.max(0,(m/c-1.05)/.85))}const h=s[17];return t(s[4],h)>t(s[3],h)*1.12&&f++,{fingers:f,pinchGap:t(s[4],s[8])/c,openness:d/Mg.length,size:c,angle:Math.atan2((l.x-o.x)*e,o.y-l.y)}}const Sg=.32,qf=.5,kw=180,Ag=30,Eg=.08,Ow=.32,Bw=.115,wg=.16,zw=1.3,Hw=.2,Vw=.28,Gw=.7,Ww=200,Xw=.3,Kw=450,jw=140;class Tg{constructor(){V(this,"points",Array.from({length:21},()=>({x:new ho,y:new ho,z:new ho(1,6)})));V(this,"size",new ho(1,4));V(this,"angle",new ho(1.2,3));V(this,"open",new ho(2,6));V(this,"fingers",new Nw(5));V(this,"pinched",!1);V(this,"gesture","none");V(this,"gestureSince",0);V(this,"lastAngle",0);V(this,"lastAt",0);V(this,"hand",null);V(this,"seenAt",0)}read(e,t,r){const o=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const l=e.map((T,y)=>({x:this.points[y].x.next(T.x,o),y:this.points[y].y.next(T.y,o),z:this.points[y].z.next(T.z,o)})),c=Fw(e,r);if(!c)return this.hand;const f=this.fingers.next(c.fingers);this.pinched=c.pinchGap<(this.pinched?qf:Sg);const d=Math.max(0,f-1),h=this.pinched?"pinch":c.openness>.62?"open":c.openness<.28?"fist":d>=3?"open":d<=0?"fist":"none";h!==this.gesture&&(this.gesture=h,this.gestureSince=t);let g=c.angle;for(;g-this.lastAngle>Math.PI;)g-=2*Math.PI;for(;g-this.lastAngle<-Math.PI;)g+=2*Math.PI;this.lastAngle=this.angle.next(g,o);const x=Math.atan2(Math.sin(this.lastAngle),Math.cos(this.lastAngle)),m=this.size.next(c.size,o),_=this.points[9],S=Math.hypot(_.x.speed,_.y.speed);return this.seenAt=t,this.hand={position:{x:l[9].x,y:l[9].y},gesture:h,pinchDistance:this.pinched?c.pinchGap*c.size:void 0,velocity:Math.min(3,S*2),holdDuration:(t-this.gestureSince)/1e3,fingerCount:f,landmarks:l,pinch:Math.min(1,Math.max(0,(qf+.25-c.pinchGap)/(qf+.25-Sg*.6))),openness:Math.min(1,Math.max(0,this.open.next(c.openness,o))),depth:Math.min(1,Math.max(0,(m-Eg)/(Ow-Eg))),angle:x},this.hand}forget(){for(const e of this.points)e.x.reset(),e.y.reset(),e.z.reset();this.size.reset(),this.angle.reset(),this.open.reset(),this.fingers.reset(),this.pinched=!1,this.gesture="none",this.lastAt=0,this.lastAngle=0,this.hand=null}}class qw{constructor(){V(this,"kept",{left:new Tg,right:new Tg});V(this,"trail",[]);V(this,"lastAt",0);V(this,"clapAt",-1e9);V(this,"clapStrength",0);V(this,"gap",1);V(this,"gapAt",-1e9);V(this,"closing",0);V(this,"counted",!1);V(this,"held",!1)}next(e,t,r){const o={};(e.landmarks??[]).forEach((h,g)=>{var S,T,y,M;if(!h||h.length<21)return;const x=h.map(w=>({x:1-w.x,y:w.y,z:w.z}));let _=((M=(y=(T=(S=e.handedness)==null?void 0:S[g])==null?void 0:T[0])==null?void 0:y.categoryName)==null?void 0:M.toLowerCase())==="left"?"right":"left";if(o[_]){const w=o[_],R=x[9].x<w[9].x;o.left=R?x:w,o.right=R?w:x;return}o[_]=x});const c={left:null,right:null};for(const h of["left","right"]){const g=this.kept[h];o[h]?(c[h]=g.read(o[h],t,r),c[h]&&this.trail.push({...c[h].position,hand:h})):g.hand&&t-g.seenAt<=kw?c[h]=g.hand:g.hand&&g.forget()}this.trail.length>Ag&&(this.trail=this.trail.slice(-Ag)),c.gestureTrail=[...this.trail];const f=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const d=h=>{this.counted||t-this.clapAt<Kw||(this.counted=!0,this.clapAt=t,this.clapStrength=Math.min(1,Math.max(.7,h)))};if(c.left&&c.right){const h=c.right.position.x-c.left.position.x,g=c.right.position.y-c.left.position.y;c.distanceBetweenHands=Math.hypot(h,g),c.twist=Math.atan2(g,h*r)}if(o.left&&o.right){const h=o.left[9],g=o.right[9],x=Math.hypot(g.x-h.x,g.y-h.y),m=(t-this.gapAt)/1e3,_=m>0&&m<.15?(this.gap-x)/m:0;this.closing=Math.max(_,this.closing*Math.exp(-f*12)),this.gap=x,this.gapAt=t,x>Xw&&(this.counted=!1),x<Hw&&this.closing>zw&&d(this.closing/2.2),this.held=x<(this.held?wg:Bw),this.held&&(d(.7+this.closing/3),c.clapping=!0,c.clapIntensity=Math.max(.6,1-x/wg))}else t-this.gapAt<Ww&&this.gap<Vw&&this.closing>Gw&&d(.75+this.closing/3),this.closing*=Math.exp(-f*6),this.held=!1,t-this.gapAt>1200&&(this.counted=!1);return t-this.clapAt<=jw&&(c.clapping=!0,c.clapIntensity=Math.max(c.clapIntensity??0,this.clapStrength)),c}}const Yw=25e3,Qw=5e3,Jw=2e4,Zw=6e4,bg=640,$w="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",Cg="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14";function eT({videoElement:s,onHandData:e}){const t=ut.useRef(new qw);return ut.useEffect(()=>{let r=!0,o=0,l=-1,c=null,f=null,d=0,h=0;const g=()=>s.videoWidth&&s.videoHeight?s.videoWidth/s.videoHeight:16/9,x=(y,M)=>{r&&e(t.current.next(y,M,g()))},m=async()=>{if(!(!r||f))try{const y=await import(Cg),M=await y.FilesetResolver.forVisionTasks(`${Cg}/wasm`),w=await y.HandLandmarker.createFromOptions(M,{baseOptions:{modelAssetPath:$w,delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5});if(!r){w.close();return}f=w,console.log("✋ Hand tracking is running on the page.");const R=()=>{if(!(!r||!f)&&(o=requestAnimationFrame(R),s.currentTime!==l)){l=s.currentTime;try{const P=performance.now();x(f.detectForVideo(s,P),P)}catch(P){console.error("Hand detection error:",P)}}};R()}catch(y){console.error("Hand tracking could not start:",y)}},_=y=>{c&&(console.warn(`Hand tracking is moving to the page: ${y}`),window.clearTimeout(d),cancelAnimationFrame(o),c.terminate(),c=null,m())},S=()=>{if(typeof Worker>"u"||typeof createImageBitmap!="function"||typeof OffscreenCanvas>"u"){m();return}try{c=new Worker("/hand-worker.js")}catch{m();return}let y=!1,M=!1,w=!1,R=!1,P=!1,H=!1;d=window.setTimeout(()=>{y||_("it took too long to start")},Yw);const I=()=>{if(!r||!c)return;if(o=requestAnimationFrame(I),M){performance.now()-h>(P?Zw:w?Qw:Jw)&&_("the worker stopped answering");return}if(s.currentTime===l||s.readyState<2)return;l=s.currentTime,M=!0,h=performance.now();const F=h,E=Math.min(bg,s.videoWidth||bg);createImageBitmap(s,{resizeWidth:E,resizeHeight:Math.max(1,Math.round(E/g())),resizeQuality:"low"}).then(U=>{if(!c){U.close();return}const Y=Sw();Y&&!H&&(P=!0),c.postMessage({type:"frame",bitmap:U,time:F,mask:Y},[U])}).catch(()=>{M=!1})};c.onmessage=F=>{const E=F.data;E.type==="ready"?(y=!0,window.clearTimeout(d),console.log("✋ Hand tracking is running in a worker."),I()):E.type==="hands"?(M=!1,w=!0,E.mask&&(H=!0,P=!1,Aw(E.mask.data,E.mask.width,E.mask.height)),x({landmarks:E.landmarks,handedness:E.handedness},E.time)):E.type==="note"?(H=!0,P=!1,console.warn(E.reason)):E.type==="failed"?_(E.reason):E.type==="error"&&(M=!1,R||(R=!0,console.warn("Hand tracking worker:",E.reason)),w||_(E.reason))},c.onerror=F=>_(F.message||"the worker failed"),c.postMessage({type:"init"})},T=()=>{r&&(s.readyState>=2?S():window.setTimeout(T,100))};return T(),()=>{r=!1,window.clearTimeout(d),cancelAnimationFrame(o),c==null||c.terminate(),c=null;try{f==null||f.close()}catch(y){console.warn("Error closing hand landmarker:",y)}f=null}},[s,e]),null}const tT=40;class Yf{constructor(e,t){V(this,"history",[]);V(this,"last",0);V(this,"pulse",0);V(this,"threshold",0);V(this,"recent",[]);V(this,"peak",0);V(this,"flux",0);this.refractory=e,this.decay=t}measure(e,t,r,o){for(this.recent.push({at:r,rise:e,heard:t});this.recent.length&&r-this.recent[0].at>tT;)this.recent.shift();let l=0,c=0;for(const m of this.recent)l+=m.rise,c+=m.heard;this.history.push(l),this.history.length>90&&this.history.shift();const f=this.history.length;let d=0;for(const m of this.history)d+=m;d/=f;let h=0;for(const m of this.history)h+=(m-d)**2;const g=Math.sqrt(h/f);return this.threshold=d+g*1.9*(1.5-o),this.flux=l,this.peak=Math.max(l,this.peak*.9985),f>=20&&l>this.threshold&&l>this.peak*.5&&c>1.2*(1.3-o*.8)&&r-this.last>this.refractory?l/Math.max(1e-9,this.threshold):0}commit(e,t,r){e&&(this.last=t);const o=this.peak>0?Math.min(1,this.flux/this.peak):0;this.pulse=Math.max(this.pulse*Math.exp(-r/this.decay),e?Math.max(.4,o):0)}}function nT(s,e,t,r){const o=s.map(c=>c.hits.measure(c.flux,c.audible,e,r)),l=Math.max(...o);s.forEach((c,f)=>c.hits.commit(o[f]>0&&o[f]>=l*.7,e,t))}class Rg{constructor(e){V(this,"ceiling",-100);V(this,"floor",0);V(this,"seen",!1);this.minSpan=e}place(e,t){this.seen||(this.seen=!0,this.ceiling=e,this.floor=e);const r=l=>1-Math.exp(-t/l);this.ceiling+=(e-this.ceiling)*r(e>this.ceiling?.5:60),this.floor+=(e-this.floor)*r(e<this.floor?2:60);const o=Math.min(this.floor,this.ceiling-this.minSpan);return Math.min(1,Math.max(0,(e-o)/(this.ceiling-o)))}}function iT(){return{overall:new Rg(14),bass:new Rg(14),overallSlow:0,bassMid:0,highFast:0,highSlow:0,out:0,onsets:[],energy:0,build:0,drop:0,bright:.5,heard:0}}const Pg=-75,rT=2.5;function sT(s,e,t,r){const o=T=>1-Math.exp(-r/T),l=T=>Math.pow(10,T/10),c=T=>T>1e-10?10*Math.log10(T):-100;if(s.overallSlow+=(l(e.overall)-s.overallSlow)*o(2),s.bassMid+=(l(e.bass)-s.bassMid)*o(.5),s.highFast+=(e.high-s.highFast)*o(1),s.drop*=Math.exp(-r/1.2),s.heard+=r,s.heard<rT){s.highSlow=s.highFast,s.energy=.5;return}s.highSlow+=(e.high-s.highSlow)*o(8);const f=c(s.overallSlow)>Pg;s.energy=f?s.overall.place(c(s.overallSlow),r):0;const d=s.bass.place(c(s.bassMid),r),h=s.bass.ceiling>Pg;for(e.onset&&s.onsets.push(t);s.onsets.length&&t-s.onsets[0]>2e3;)s.onsets.shift();let g=!1;h&&d<.4?s.out=Math.min(30,s.out+r):d>.65&&(s.out>=2&&(s.drop=Math.max(s.drop,Math.min(1,.55+s.out/14)),g=!0),s.out=0);const x=Math.min(1,Math.max(0,(s.highFast-s.highSlow)/18)),m=Math.min(1,Math.max(0,(s.onsets.length/2-3)/5)),_=Math.min(1,s.out/6),S=f&&s.out>0?_*_*(3-2*_)*Math.max(.1,x,m):0;if(s.build+=(S-s.build)*o(g||S<s.build?.25:.7),e.centroid>0){const T=Math.min(1,Math.max(0,Math.log2(e.centroid/300)/Math.log2(16.666666666666668)));s.bright+=(T-s.bright)*o(1.5)}}const Pv={bass:[20,160],lowMid:[160,800],mid:[800,4e3],high:[4e3,12e3]},oT=Object.keys(Pv),aT=.002,lT=.04,cT=.25,uT=.0016,fT=6,hT=90,dT=170,pT=1.9;function mT(){const s=()=>({floor:255,ceiling:0});return{envelopes:{bass:s(),lowMid:s(),mid:s(),high:s()},overall:s(),previous:null,flux:[],lastBeat:0,onset:0,rise:0,punch:0,lastNow:0,kick:new Yf(170,.16),snare:new Yf(170,.13),hat:new Yf(70,.06),sections:iT()}}const go=new Float32Array(256);for(let s=0;s<256;s++)go[s]=Math.pow(10,(s/255*70-100)/20)*1e3;const Qf={kick:[30,150],snare:[1500,5e3],hat:[6e3,12e3]};function Lg(s,e){s.floor+=(e-s.floor)*(e>s.floor?aT:lT),s.ceiling+=(e-s.ceiling)*(e>s.ceiling?cT:uT);const t=s.ceiling-s.floor;return t<fT?Math.min(1,e/190):Math.min(1,Math.max(0,(e-s.floor)/t))}function Jf(s,e,t){const r=Math.max(0,Math.min(s.length-1,e)),o=Math.max(r+1,Math.min(s.length,t));let l=0;for(let c=r;c<o;c++)l+=s[c];return l/(o-r)}function Ig(s,e,t){const r=Math.max(1,Math.min(s.length-1,e)),o=Math.max(r+1,Math.min(s.length,t));let l=0;for(let c=r;c<o;c++)l+=(go[s[c]]/1e3)**2;return l>0?Math.max(-100,10*Math.log10(l)):-100}function gT(s,e){const t=-100+10*Math.log10(Math.max(1,e))+5;return Math.min(1,Math.max(0,(s-t)/(-32-t)))}function vT(s,e,t,r,o){const l=e/2/s.length,c=W=>Math.round(W/l),f={};for(const W of oT){const[Z,O]=Pv[W];f[W]=Lg(t.envelopes[W],Jf(s,c(Z),c(O)))}const d=Lg(t.overall,Jf(s,c(20),c(12e3))),h=c(1e4),g=new Float32Array(h);for(let W=0;W<h&&W<s.length;W++)g[W]=s[W];let x=0,m=0;if(t.previous){for(let W=0;W<g.length;W++){const Z=t.previous[W]??0,O=g[W]-Z;O>0&&(x+=O,m+=go[g[W]]-go[Z])}x/=g.length}t.punch=m;const _=t.lastNow?Math.min(.1,Math.max(.001,(o-t.lastNow)/1e3)):1/60;t.lastNow=o;const S=W=>{var ge;const Z=t.previous;if(!Z)return{flux:0,audible:0};const O=Math.max(1,c(W[0])),B=Math.min(s.length,Math.max(O+1,c(W[1])));let D=0,q=0,Se=0;for(let me=O;me<B;me++){const j=me<Z.length?Z[me]:((ge=t.above)==null?void 0:ge[me-Z.length])??s[me];D+=go[s[me]],q+=go[j],s[me]>j&&(Se+=s[me]-j)}return{flux:Math.max(0,D-q),audible:Se/(B-O)}},T=S(Qf.kick);nT([{hits:t.kick,...T},{hits:t.snare,...S(Qf.snare)},{hits:t.hat,...S(Qf.hat)}],o,_,r),t.rise=x+T.audible*.5,t.previous=g,t.above=s.slice(h),t.flux.push(x),t.flux.length>hT&&t.flux.shift();const y=t.flux.reduce((W,Z)=>W+Z,0)/Math.max(1,t.flux.length);let M=0;for(const W of t.flux)M+=(W-y)**2;const w=Math.sqrt(M/Math.max(1,t.flux.length)),R=pT*(1.5-r*1),P=y+w*R,I=t.flux.length>=20&&x>P&&x>.35*(1.3-r*.8)&&o-t.lastBeat>dT;I&&(t.lastBeat=o);const F=P>0?Math.min(1,(x-P)/(P+.6)):0;t.onset=Math.max(t.onset*.9,I?Math.max(.35,F):0);let E=0,U=0;const Y=Math.min(s.length,c(1e4));for(let W=Math.max(1,c(100));W<Y;W++){const Z=(s[W]/255)**2;E+=Z,U+=Z*W*l}const G=Ig(s,c(20),c(12e3));sT(t.sections,{overall:G,bass:Ig(s,c(30),c(160)),high:Jf(s,c(2e3),c(12e3)),centroid:E>.05?U/E:0,onset:I},o,_);const N=.6+r*1.2,k=1.5-r,Q=1,K=W=>Q*Math.min(1,N*Math.pow(Math.max(0,W),k)),se=I&&Q>.15;return{bass:K(f.bass),lowMid:K(f.lowMid),mid:K(f.mid),high:K(f.high),overall:K(d),beat:se,beatIntensity:se?Q*Math.min(1,Math.max(.3,F)):0,onset:Q*t.onset,kick:Q*t.kick.pulse,snare:Q*t.snare.pulse,hat:Q*t.hat.pulse,energy:Q*t.sections.energy,build:Q*t.sections.build,drop:Q*t.sections.drop,bright:t.sections.bright,input:gT(G,c(12e3)-Math.max(1,c(20)))}}const Dg=[.35,.45,.8,1.15,1.5,1.9],xT=3.6,_T=2.2,yT=6;function MT(){return{rate:1,clap:0}}function Ug(s){if(!s)return null;if(s.gesture==="fist")return Dg[0];const e=s.fingerCount;return e===void 0?null:Dg[Math.min(5,Math.max(1,Math.round(e)))]}function ST(s,e,t){const r=[Ug(s.left),Ug(s.right)].filter(c=>c!==null),o=r.length?Math.max(...r):1,l=Math.min(1,t*yT);return e.rate+=(o-e.rate)*l,s.clapping&&(e.clap=Math.max(e.clap,xT*Math.max(.5,s.clapIntensity??1))),e.clap=Math.max(0,e.clap-e.clap*_T*t),e.rate+e.clap}const AT={dust:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD51PXOBSjr0HNJjGAe3fFLz6k0ABBC5oOeMd/SnJI8Uquhw6nIIHepLhmaczSGMmUlzsAUDJ5GAAB9BxQBCFLNgcn0JpXRo5HRl2spIIPr6U9HRmxMZCoBxtI4Pbr2zTFXcRghB79KAG9PQ0oBHp1q8NKuJYY2t40lLMIx5UisXY5IGM5zx6enqKpvDJESHUjkjn260ANwcjPNA78+3FTW8E15PFbwohkY7F5CjJ9SSB+Zpz27szhSSsYwWA3KOmSWHGMnr9KAKw454IoweO1TpHE85WSb7OhxhiDJ/KkGwQjYru7A71KjC88YP/6qAIe2MClx0/nQFJIwcH0qxFbsy8XEKsWKMjPg9Mk+gHbr1oArqrM3AJPp3o6dyeeMd6nuRAZWe0ikS3Zj5fmuGfbnjJAAzjGeKW2vpbJJfs7mKWRShkRypCEYZfTB/pQBE0JWBZGaP5icKHG4Y9R1H41GQc5qZI5ViM4wE+7nI6kenWolxvAfJXPJA5x7UAA+g4o6c+npQeuRwPSkPH0oAMdADS854GKAADgjNHfpzQAAZ9qleFoZADtlAw3ynIwff+fvTXEZdRDubcBkY6N3A9fr+lOliVJGCiQLtBG8YOPWgBAyl2ZBs3NgKGzgfXv6VJdSRzzblt1hwoV9vQuOpAHAz6DimR4UkjJKNkleeP8A9eKsyvc3TRPLO+1VKRCQ5CruJ2gemSeMY5NAFdRvRuQ4QZAPUjPTHaljiacOqJGhRPM5IGQBzyfbPHftVu7jjikkUyW0xIAZ4sBVZiGO0DrjkcYHaokljjidkuTG8ZATEfMgOQfm7AADg/3jQBGbiJrMxGHMgIw6thcDPVQPmPPUn2pYI1nMnzKuzlsybPMGQNqjHJ6fgPap/swvFLIJC5H7hMfewwyOB1wSeoHv2oSOCRHhd5pCIN6Mq7yrLywI4wvXJ5wBnmgCo8SuFaNCiMTt3MDkEnHPr26YpPIkZgY4nG47ce//AOsU5gyXH79RKOVGG4OOOo9KbKrrMwm3iUcENx9KALHk74muDAkcZGxP3hAVxjPbk98f7Qq3GqarFbNd38MIt3jtgkrBSIfmO5cDBC4IOSTll684rXKxxW3lx28mHYMHkGOQMEKAT33Dqeg6VGUkaAs0yKYMbY3b5iDk5A/DJ+ooAnu4IgLiW0tpprXztsVw+chQDgEDjJBBOemMetQ2yxpFcLM0UTjAXzAxP3sEAAEAjrk44XA64qXSjch5Ra3kkMkimIxRhmaVWUhgAODxxg+tVZ4ZkYGY/M43AcHIPOeKAI2RScBwz/dxtI4+pphAB+U575qa2tXuZCqsi7VLEuwUYHYZIyfQDk9qaLeQAkjAAJ+bj9KAI+n9fejtSnk9OKQ4yORQAdunFAB7d6AcDjk0gJzigC1aCNXzJ5uwfe8r7y+/4fhU6LetCvkIj8sq+WA0hBByMdSuAe3HXrVa1nEEgYDD54bdgY7gjuD/AI1Zhv57aWaeCeS0W43xOts+zMbdUAz9zsRnpxQBSjZc5cE8fKQcYPY9OlaFrbG9mULtjVEYmQgkcZOeOQM8fjVaAbZgdp5PHl/NxjkDr29f6VO93LbPLb2pRU8w7QrCRgNpTAfHIwT04PWgBLm4+1xrNHCsflxBZv3jEyncdrHPGcFRxx8ueuaryxr521HUoFUZXOCcc9ff/wCtSJ5gUFBhc8Z+nX3+vamlCjI2QG+8Ce9AGxaWLXq3FqLuGHT7Y+ZJcmMgHoM4xvb5sYUdNxIAyaqSR2n9qrh5IbZuN08ZztI+9hPUY4GevXFQzh1u95TyJIgjDyyflGB8wJ5yTzn1NQt5pbO4s33gc5xk9/rQBOWQWySxNFvMxBUrukwACD0xjt9c1LcTs7JM4LyAbjJPhtx75z75IBz160TXc9zdx3UCi3kEYA8g7dowRxjpkZJ7/wAqrPNG/lrKnllIyCV5LtnqRnqen60AXZmsonYWlzK8JUshmXYd+fQMduVHXnk/iJLSSFNRjFvbbvNHlATShF8zGMiQgAAEq2Tg8cnmqDKt6ryqY4fKjUEEnMpzjI/r2qawlFtcwyxyzR3EbM4WFFbDAfKeTznkH+R6UAMjMlnKkkUhiuIf3u5X2OrZwMe4POBz1PSomlmEZiY+WDl+mS5Iwfm68jt0/Gnxh3uC6RIQrKxiY5D85xj09cfpTjJbvI8kYaCUu7/uhmMA9lU8jALdSe34gEDtuMmyMQgAEqrHGfoTnrUt5cxyTTC3eWSGVg5e4VTKTjnLD3J4+melRTSDA2xxgqqgFM4yBySDySfyznHGKhJCr1U7uc9x7UAIoyc/pRge2e9Jk55FL14z+dACfzNKPXNJnPTHHalCg9KAJUQtEwEeSo3FsgcD69f50szrO4CL5cYHCs5IXjnGfU5NTJNMYhaPJGsKHzFJJZVYjrgcEngHg9hwBUcsclodskUkc4AJWRdpAIBUgEccc59CMUANjaWONipG1uPXP4fjSpGJJGdX2x4yzycBSR0yM55/P2oCgQq0kJAbIDg43D+XBoJSMowLgEZBZeF5wSB0PegC4mnXlxpUl0kMv2eH95gAkAEAFvYcDk/QZ5xPbrpsHkJdEG5S4CujZMTRkcMGUg5HpnBH0qvYyxs6xPOsCIwYSPllVxwGIwSVHPAB7dadIJXa9EdwJosn5xtQOM5DYPb5eg5HHSgCoiC4fdLcqmCAwx8x9cdifrjNWJbJoIfOWzL20jZSVuSO2zIIBOSAR60p3XFtGk6pFDZgpgKeS2TyRyST/KoI7N7mNVg3SyRgsyohIRBjLH8T29KAH8OWiwSsS467VHXIOB2J6mh2mFnFBJNHKvVVDqwGecZ7H8eM0bY4p3aAh0cmMRSn94wI6kDpnPH+TVx7WK3uj9rdA6fLKsbDcjAbcKRkY6HJ64zQBDC8MmntHPHIZFAEUSIPmHzEncTlcZBwAc98Dmktra3SOCU30kbuctsjJKBWOCDnk8Dp6+1RzQm3jhjnlLFC2USUHyx347Z4PuAafZ7Yg264MZQgyQKv31HTvycnoOR1oAikij+zPcQoETIUgzAsWJJGB1xgYPoRyeQKdbRr5aCS7Ft5owAE3Dbzgn3JwPUYz6VA6rM4itkZtzEqAMn8vp25/rVq9aO30+G2WFA7gStui/eLkcAueSCMMAvy8jqc0AUmhmFuZRGxjVtjSgEruxkLnpnAJx3oS4ltxIkMp2yDa2B94fjQsjuDGrEKPmCkk5P4d6iJyxxhec4Ax+lACvHJFI0ciMjqcMGBBH4GkPA/xFS3Mv2i5kmLSMzncTI+9j9T3+tREc5xmgBOD649qU9e3PtQODx0oB4x1oAUEDGCQw65rTOs319FbWl5cNPDA2YEZc+Vk8hB2B9BxkD0FUYPKCSSSru+UqiZI+Yg/NkenX3pkZZJMgHeDgEckfSgCfc22S0Uq8KOXyuCeOM7sAkY7d/SrUeowxZQ2kE3zBkzn5T1AOfvAc/XPJOBVJpprto42b5YsiNGY7UGSxAz0BJJ+pqSGWORpBNIIozG2FEe8E4yqgZ4yQMntz16UARiKJk8zJBOMgdu2fzpgVlQuGHC464PPBA55q5Pd2zQLGIIi7BWd44yhU5OVAzjGMcjFMsZIPP8uZvLilGwuzkBcnqcA5GPXNACg+XZzROuDKq7Qr53HOd3vgdqVn+1yQrDOsQigyDIQnzKCSM9ySDjPPIFQ3EkayMloZfJ4P73aWyPQgevpipg89u6Tl/JuLYLIvzBSBxtI5znJHA5HWgBLLyZGDSxGRi43EOFY5I4GQfz5xnpVkNJZaki3FvFGFhLRiaJeUdSVYgj5zhgQSO49BVaO4uI4iihPMkIm8xQvmA4PRuuMdsjnHFVDIzhlBABIJGc89M5/E/nQBJclZZDIpGHbO3GNv8AjU0V5iVibaLe8ZiPyDHPGQOinGOR9etVwU2hW3K4Jy2Tz6DH+etSXF7NdGFLiUyLEpVM8BQSTwB7nOKAJPtL7AscxjDuPMLNwSDkZA6gdfzqOZnmcqH3BARgLtAAxnA/Cp7W9ksYw/ls3ng7g+CsiZHB7/eXtjpTLW7+z3AuEhhkEYOYpVypzkfjjIP4DrQBFDOIoZISiZYgrJt+ZcZGM+hzyPYdKieQSMWZVyRggDGD9KXz5MDcQwDb8MBjPHNM3fKAFAxnkdTQAhwPyo6HB/8ArUuffrTSfY+9ACjk9eaAB/jSZ4wO1A44zQBMs5WIRqEXnO8L82CMYz6e1Ai3TJGrxyF8AYYgAnjk8VDyMkfnT0fYwbCsc9CuR/8AXoAHXYzLkFgcEg5B+hFW7OzYxPeNbm4ggZfMXcVXnJwW7ZCN3z6A1UjZY2+aJX9mJ/pQZHEZjDHyyQxXPBI6E/r+dAASX7Dk5wBUsE6QxSAR5kZSqtxgAgg8EHsfb1ot7trWdJY44m2c7ZYw6k46lTkH+VNjnZbSW32RMkrK25kBZSucYbqM5OR0PGegoAC6tlY4gWfbjqWB9ue9W47r7DefarWSUyCMoTKoDISCreobjI6dD681TklDj5YUjzj7ue3fr1PrTQfnyVDH0YZoAkad5JIUlLOkfAC4zt9AcH8KdcRES72DRrIokjyAMp0HTHp1xyaYsMvkmaMZRANzL/Bk4APoTimxzNDHLGgTbKAGygJwCDwSMjkdRzjjpQA1mJzuO7vzVhLhrSeQ25IDxtEfMUEgMu1uD06nnqPrUKShIpkMUTmVQoZs5j5ByvPU4xzngn60u6N3VpC5yuDjGSccf0oATKlQNxOOx4/KnPIWt4kMUS7QRvC/M3J6nv1x+FNKYVW3KQewPI+o7UzLcZzgfpQA5ypJ2g4z3PNNHUUdR2xSZ56UAKP1ozj6CkHH8VL0P+FACE8gdqcB+lFFACN1x6DNIDkiiigBSAMflSNkAc9RzRRQAZJY+1OxzRRQAnv74oxljmiigBPQetKflAx2oooAB1/HFL0GfSiigBO+PYUYyM9zRRQAgGTjtQTx9aKKAFxjOO3NLjJC9jRRQB//2Q==",line:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5UooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA0/7CbGTqOmD/t5FA0PIz/aWmD/ALeP/rVuD7Rv+V7vn00KKl/0pG4Oof8Agkj/AMa7fYx7fl/mYc77/wBfcYY0MYz/AGnpn/f/AP8ArUf2IoGTqumf9/j/APE1vYvByv8Aah/7gkf+NA+2A5/4m4Ptosf+NHsY9v6+8Od9/wCvuMBtGjX/AJi2mn6SN/8AE0g0eMnH9rab+Lv/APE10Bmux1l1UD1OjR/41A106sTJfXMZ/wCmmkR/40nSj2/r7wU3/X/DGONFBPy6lpp/7bY/mKQ6FOThLnT3Ptdxj+ZFab3lsTzqlgx7ibSwP5KaMxTcCTw3MPdHhz+i0vZwf/D/APDj5pGb/wAI3qpXdHZtMP8Apiyyf+gk1VuNMvrQZuLO5hH/AE0iZf5itxdNWYnbolrN6GyvwT+ALN/KnYNimCPEmm49PnX/ANkpOiv6/wCGQ1UZzFFdKdQEuANbtLj/AGb+y5/Pa386Q2yzH/jy0O594LvymP4Fh/Ko9jfZ/wBfK4+fujm6K6U6Cj/MdD1RBjrBOso/9B/rUZ8PQkf8emvx/WxDD89wo+rzD2iOeoroE8MqzY8vW/8AwXf4vUp8N2sIzN9vTjP74wQf+hSUvq8+we0ic1RXV2ugWMnMcBn9cTvNj/v1Hj/x6rcVjZwEotvaI/8Ad8tC35O0jf8AjlWsLJ9ROqjjIoZZ32RRvIx7KCT+lXl0DUiNz2rQL63DLEP/AB8iuwmMkMQEjTJH2D70T/x5oV/8dqnHc20bZWa1jbsY5oUb/wAhxu3/AI9Wn1aK+Jk+1b2RXVYx1Fuf+40tI0cLf8s7XPvrSn+tIUI6kj/uCJSs0agBpIhn+9oiCtP66E/11GmOMf8ALO0P01hf8aDGhPFrGf8Ad1lP8aa09tHkNcWI/wB/SQP6U37VZY4utDY+j2Dr/Jan3f6sGv8AVyZYJgBss7vnp5Wrof0wak8u9iPEHieP1MVz5n8lFVSlrMOF8NSfR5oz+pFImnxMcppdrJjva6mufwySafp/X3IPX+vxJpr+eD5ZNT12Adxd2ocfq39KhF6kx/5COjT+1zYbD+YT+tWEhuYBlYPE1so7xSeao/ILUL3+Tsn1dhj+G/04N+Z+Y0m31/r72gX9f1YaLOOd/wDkG6Rc5/59b3yz+Rf+lPSzltCSlj4gsh628nmKPyA/nTQtvPyT4cuB9ZID/wCyinRWMTMGh02NT62urIP5kmhLqv6+5fqO/f8Ar8Qe/O0rLrE/+7f6eH/X5qaXtJutx4clyP4oJYj/AOOqK0Y4r+NcI2vxj0F/G4/pStJdLhpJ9RB9ZZbYfqTV8re/6/5k3Rm/Z9OIyYtCBHdLucfpmpY0s2IEKae56bY57p//AEEVeS8dmwt5OGPZdQh3H8Io2NSssqj/AEh7gL2E8s5B/wC+3iH6U1BdLfcJyfX8yt/Z8EYDS2cCY/ia1lx+c8qip7W36vbIn1gjQfrFG2P++6khgWMebFEEHeRIwP8Ax4L/AO1Ka00dw4AMc7DvxK36CY/qK0UUtSbtjmKTEo7LO4/hZhK35Eyn/wAdFPkWaNNrpOkf911dVH4O8S/+O1HL9pdSHgvGUccwTsPyeRF/8dqr9n2PuFsy/wC7a2iH9Sxobt0BCF4o/uPaRsOpW4s4z+aq5/Wnf2gRnOpZOP8AoMMB/wCOoBUm+627Y01EDsENtj9BUcg1FRgxa6B7WsUn8qnXz+4ehX3ycELMT/s65HSqLtjlU1LP+xrMZP8AKsQa9IOthpjfW0T+gpP7aQ/e0rTW/wC2RH8mFc3to9/y/wAjXkf9f8OdCItQ+9s8SkY6perJ/IU2Sa/Rfnl8SIO3m2gkH6kVz/8AalmxzJotl/wB5V/9nNSx6tYpjbZ3kP8A1wvSv81NV7aPf8/8hcj7f195oyX6H/Xajbbv7t3pSj9QCaj/ANGl/h8O3A+ssB/9lFIniCEYxqWvRezSrMPyOKBqtvLnfqaPn/n50yNv1GTRzRfX+vmws1/X+SJY7FM5t9NCsP4rLVEP6HJq2n9oIu0N4oQegUTr/MVQ86wkHM2gufR7eePP/fIFOiTTVbcf7FU/7FzcrVJpbP8AH/JCfmWiJ3b99JdHHGLjREY/ieactkrEEwROPX+xnH8qhNxYxAkXWnj2F3dH+S1HJqWmcF57dxjoi3Mn/ociinePVr72Kz/pF/7CoG77CoHqdJCgfi8gFLFbwGTCCDf/ANM47ZSPwjWVqyf7d02AfubXefa2hj/Vg5/Wo5/Fk7rsit0C/wDTWR5P/Hchf/HaXtaa6j5JM6bc0aiOWaRR2Ekzrn6Kzx/+gGmhDCPMWNolP8aRlAf+BARD/wAfNcdJ4g1N12rdNAv923URD/x0CqEkjysXkdnY9SxyamWLj0Q1RfVnbS3tmriR57ZWz95pot35qsrf+PVWm1m0kIV7+B177pLuT9MqP0rkKKzeKl2KVFHTm/0lSdsmnnPf+z2b/wBCemm903kLcaYc/wB7TiP5ZrmqKj277L8f8yvZrudKZbGXkP4fb2aGeP8AkKWO2tCflstHc+sWotGf/H2rmaKPb91/X4h7PzCiiisDQKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k=",dandelion:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5UooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK3PD+iQ3Ucmo6gV/s+2I8yIXCxTTA5/1e4EHBxn696AMOirF8kEd3KlusqxKxCiRgzfiQBVegAorWg8K63Pbx3K6ZdLBKcJK8ZVG+hPGORW9F8I/FVxbRTW8FjOX5eOO+hJhXGQ0h3YUHnGT2NFxXOLoq5qmj3+i3klnqNrLbTxnDI49geD0IwQcj1qnQMKKKKACiiigAooooAKKKKACup8P/DTxN4jaQWuntCsSB3e5zGAD04IzzkY45re+Efga41mSbxNJZR3enaTMgkjkCsjuVJAZTwwwOnckds19BeGLS/1K0uhZpe/2jc7jclyIwBtAB6fKQpXhffB7DCrOS0giZSsfM158KvElrLcxRRWl3JbY82O3uUZ15x90kN146c9s1gTbLO0ksrqwRLsOR5h3LJGQeQRnHf0zwK+vNXt9ItNRsLaxtnOptGILtPL8yaeMfMRvPB+Y5OeOAM9q4L9obwK2peErbxvHZwxz27CCaSElQ9vu2xsVxjdlhk5yM45AyLi5rSRMZpnzfWto9/BaWl+tzYW92kkIjHmZDISwIKsOhGD9e9ZNaMiW0egQOkjNdTXMgkTsqKqbfxJd/wAhWiLZUuzm6m5z8559ea6/wP4TupjY648cUqG7EVrasqyNduOqhDxjOMk8Vy+rak+r6hLeyRRxvLtysYwuQoGfxxn8a+gdH0ux03RvDg1O0kZbK1Se0aJQrFpBne/o2WA59B15q4Q5jOpPlR1Vist5ZPb6hp3mXdwfnsmufONvtIDAEDG0jAGOgz0rF8QS2VlBLo0enrZafEIT5in94ThtwCgAsCOvXOOvau00XSIIo5LGOH7TJI3zNGcyKGwCQ3HTitTWPhudKaXUhc3NwxQ77aOP5gcDlXzz0I5/vHvWzoxSscqqu9zz6z8L+EJtNh07xBDHPaXELSNd3Eg861Qg4ZGXIO1iAwzjpgV86eLfDcvhfW57B2MsIYtBNxiaPJw3BI+o7HIr3SHwzquoeKYtGupj/Z0pLPbFBELfk5AJ4J78cHivPfi74Q1LQrDRr/ULhJ/N822RlcFdqHcNuOxD5PoeKynC2qR0U562bPM6KKKzNwooooAKcn3voCf0ptOTr+B/lQA2iiigD6k/ZH8SadH4Y17RbiRRd290l8iO2N6MoQ4H1UA/71ey3WpWcN5bwgRfbDJiRYyrMkeTtJUYOOlfn7Z3tzp9wtxaTyQTJ9142KsPxFelab8VvEkPhaa91K9lubgSLYWVyzDzVUgNLyfvYXYMnnLirhyp3OerTb1R9O+Nb++ntvO0v7Gb1TiPKHlMkH5gCV5479TxXK/ErxLaeHfhFrmlX887y3FqLRI5lOwzNtwsYx0ABPtgd64rQv2h/DsgM2owXdjKkeFCL5m7A6AdAxPfjr1ryn4qfE26+Imrho42ttKtmb7LbtjdzgF3I6scD1x0HvtUcHHQypU582pw5q3Lqc02lW2mMF8m3nlnQ990ixhvw/dr+tU6K5jtFFfYnwmhg8QfDrw7qYii1ApGLKWBFDG3ZGKjcSfkGAp5B7ECvjqvS/gr8Ybn4Y6nNbXSyTaHqBAu44uJYyOkkZ9R3HccelVGVjOpDmR9E32vx+HNVe2khuJ7mRsxInDhVBZmKdh7DluTntWl46+IjWvhjw/PCZFkvL1YJwXC7RsLYb3PUdvlP0PlGv8Axm8Halq1xf2V5dQXc9mkC6hPb+ar45Kyx4yO+GUZyQc4zXJf8JqfH3hTxhBrU0ZNlFaahE1pb+W0uyfy2J564nHP44rV1DCNFnt1rcWuvXcVxpl5FLFNGSsyrkyru2kqeuQQQMHH6V5D+0zqUdtPofhmOQM9jE9xKCPmBkxj8wCfxFYulfG1PC0QXQtKkMvkKvm3s28LJnczBVAGCcDHTGTjJrzvxL4m1XxfrM+sa1dm6vZ8b5CoUYAwAAOAABiida8bDp0HGV2ZdFFFYHUFFFFABTk6/gf5U2nJ1/A/yoAbRRRQAtb/AItY2RsNCBwum24Eo4/18nzyZ9wSE/7ZimeCNPh1DxLZi6ANpblry5BGQYYVMjg/UIR+NZV/ezajfXF7cNumuJGlkb1ZiSf1NPoTuyvRRRSKCiiigAooooAK7H4X5uda1HSQAf7U0i+tQD3cQNIn/j8SVx1dL8Nr9dM8f+HbqQgRJqMAlz/zzZwrf+Ok0Ajmz1pKva3pr6PrN/psn37O4kt2+qMV/pVGgAooooAKKKKAClU7TnrSUUAFFSogYcL+Zp3k9fk6e9AG/wCHv9A8KeI9TyytKkGmRH3lfzG/8cgYf8Crma2JdUlTw7FpGxBbm6N2SCdzMUCDPsADj/eNZwiyMhBz/tUCRBRUh2j+Hp70fJ6D86BkdFSfJ6D86T5f7uPxoAZRUnyeg/M1PYWTajeQ2kIQPK20M7EKvqTx0A5oAqU+GV4ZUljba6EMp9COa1TpukA4/ttD7i1k5p8OiWN4xistVimuNrMkTQum/AJIDHIBwDjNAGr8XIEi+JGvyR/curk3q4/uzKJR+j1x9bfibV5Ndvob65SMS/ZLeAlMjcsUSxqx9yqDPvWTtX0H5mgCKinkqD9z9aTcn9w/nQA2inbk/uH86Nyf3D+dADaKduT+4fzo3J/cP50AWbQfLmrL/wCrJoooArzjcsanpsJ/Sg/eNFFAEVwMMfoK9l8MwWTeGbCeTTrGWRYIwGkhDH7o5+tFFVEC4k0MsrRfYLFVH92ADNeFkAs/+9RRTe6A6LR7iay0nWYIJCkc8XlyDAO5eD/Sqmg/utbsdo/hJ/NDRRWlVasiJrXUdnZ6p4ZeDTrRf9HjaVSGYTtn7zgnk/TAqnZTi58avMIood8kh2RLtUfI3QUUVnLYuPwXMS6H7qBu+wClu7yW6S3WTbiCIRJtUD5QSecdTz1ooqQKzdR9BWjLpsMUulqC5F3EjyZPQl2Xj8BRRSA3/wDhD9PLY8257fxL6Z9Ky9I0K2v9ZkspXmEab8FSAflIx296KKAJNe8P2mmWCTwtMXLIPnYEcg+3tWVpNql5eRwyFgrE5K9eFJ/pRRQB/9k=",jellyfish:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5VooHegVSV7AJRRS9qSQCUUtJSAKKKKAJrVd0orR1VNsS1SsBmYVpayuIM+9erQj+4Zzzfvow6KKK8o6AooooAKKKKACiiigAooooAcoycUKOaVeGFPC4kxXVShdL1JbIiMGnAZBpZV2vUkUe4N/u04UvfaE5aXIdvy5ptWfL/wBH3VWrOvDlsOLuFFFFYFF7Sl3XCj1rT11Ntsn51T0GLzLpa0/ESfuF9hXsUV+5sc0n75zFJTgODTa8lq1jpCilNJUgFFFFABRRRQAUoFJVi0hMsqjHHU1pSg5yshN2VyNlwM1Pt/fIfUA0NETBnHbNTCMmOB/Yj8jXoxhZv5GLloR3cW1lP4VNZRbvxU1Yv4MKpx3z+YqfTYM7fxFbKHv3IcvdsU0gzZsfrWUeDXTxW+bSQY6E1zUq7WIrmxsPdTLpPVjKUUYpUGTXBGDbSNrnQeFod0+7HQVoa9Futj7U3wpBhWbH8NaGrw7rSQ46CvYhpGxyy+K5wgX5WNMUZNWTHiFj61FAm5jXBOn70UdCloyNhzQUYAEggHpnvX0V+zV4e8EWGman4t8Wram7hnEdmL2EvHFGBzKq4IYluM842+9eq+IvGHhnUVjtL2/srizvA3lpd2ebaVBweWXA6jsKungalWTsvwfr+RnOuoI+HqK7P4ueHtF8N+Nrq18PXEcumyxx3ESo5YQ71yY8nk7TkDPOMZ5rjK4pRcW0zZO6ugoooqRigZNbGmQiOAzEct0rKiQtnH0roJovJgSIdgB/jXpYKFlzMwqy6FXyP3JGP4TVmO1zp8Jx0JqyttuUDHtV21gEmmqMcoxBr0VBGDkUtTt8W0L/AEBqXTIeE4/iP8qu6lbl9NUgdMGnabCNqEDv/Sjl1FfQrW8X7qZfc1yV8mydh713UUODN9a4zVUxdsP9quXEq8TSk9Slt6U+3Tc4qbycY+hqeygyQfaueNPVGzlodd4bt9lqTjqKsavHixmPtU+kReXaKPUCk1gf6BJ71u5a2MThZodtvnHbNXPBmgP4j1y00xCR9okwzDqqAFmP/fKmn38Oy0bj+ECtX4f6y3hHXLHWxbi4FsxLwscCRCpVlz2yGPNKMVzpspv3XY9i8aaxbW39leEvDqwpp8ltDBcSKuSSQD5a+mMYOOSWIrsvEngG5n06ySS1aI2cYEYxyM43bvcnHHbGK5n4UfELTNd8VXV3p/g5Xlt0DefdXIdoNzhR5eEwD94kkZwvHer15+17p9prAs7vwlcNabEcNHdK0gYjPIIA6Ed69zEYz2CprCw0ju21dt6f8A44UnO/tHr+hxPxl+HUqeAbHW7a0IfSiYrhgvPls3G76Ej8q+f6+kvH37U2l+J/CPiHw/beF7i2bUoDbwzPOpxkjczgDqMcAZ5r5uPWvmcwqOpWc5Kze530I8sbCUUVLbxGaVUHc1yRi5OyNm7GlpFkZpoQR1bcfoK2LmLfN06VPpFoIkkmxwq7F+tSiHhnNe1TSirHHJ3dyVIMSMmPeprKPb9qh9DuFTBQ0sUg6OAfzqRYvK1DHaSPFdLZkKYPNsCuO1QaZGRGn4f4Vp2qZgwagtYdgI/uuw/Ws3LUZH5OJJR681xGtw7bxuP4q9BZP3hPqK43xLBtugcdWFZVdUXDRlF7f5Dx2NT6bDkJx1q08P7ljjoMVPpsHEf+8BWb3LudPbJsgUe1V9UXfbbfUirqjCge1QXSb9o7c1nfULHMaxCREEx94gU5bcxWgAHJAH5mtDV4d0iLjpVk2e8QRquSWHHritaVnNLuKWiPY/2afDaaR4C8TeJb1VU325LfdxlIo3yR9Xcj/gNfNAikvtUMknJ2B29uB/iK9/0LxjNpnw5OlpIATI+nWcQ5yfLaNnx/vPM5+i149p9gJZNRmjXjcYk/BWP9Fr0fq/LUvLrLT0Sv/kZKrdO3Y4+7Uq6g/wB0N+fP9agrQ1mMR6lcIPuxt5Y/Dj+lUMcV8/io/vZWO2DvFABWzodmWYykZxwPrWZDEXcADNdtotgIUjBH3RuP1rbDUrO7Iqz0sW/J8mCOBeo5P1qK8KwW5Ge1XQmWLGsHxDdeXGwzyeAK73ZK5zLV2NjSz52nW7dSvymtC6jw8Eo7HBrN8N/NYlD1U/8A1q3Hj3xAenNHNsFtRtuMKR70yJMNL/11P8hUsQxxSRD55v8Af/8AZRWcpajSArz+Fcv4pt/3kbY/irrCKxfEcG+FG9Gpc19BpGXLFizJ9TVvS4Plh92H6A0+eDNivHerdhFs8gegY/p/9eokykaGKay5xT6MVzyZaM67h8y5TitTS4ozqULy/wCrhSSZ/okbN/SqzJmYH0FbOkaSdQ07WJB98Wy20P8A10mkVP0XcaqnU5Zxl2CUbpo5yyjaG6s5ZM7rexku29mZXk/9mWrnhHT1FlA8g48q6u3z6IqD+h/Op54FurfxHqEIzBFAlvEfZ5UjT/xxDVv7LJZ+FLy9T5Ut9HCMfUz3ZXH5Ka64Yhq3l/wP8jJwPIdSUyXEznqzEn61UERLhfata5hxEC3Vjk1BbwbmeTH0/D/69cbjdm17FnRLDzrlTjjP8q7WCEJGeOtZXh+z8tC5HQYFbmMDFdMNFYylqyFxtQ1xevTB7pu6wjP1PauzuW2xMfQVwWtsVVVP35WMjfTtTqy5YNipq8jsvDow06DoGNby/dooqnsLqIB81Ni/1s3+8P8A0EUUViykSGqGsIGtefWiikMrlQbFc+tWoVAeLH9xv6UUUS2AsGkoorNlDf4jXVaQTb+DNUuI+JFjnlB/2lEYU/huJ+tFFYSNEZMKCLwJeqnAm1C3Vx6hACo/N2qz4jAh+Gg2DHni0V/cK7EfqxoorSHQlnlV8o3KOwFLaxKVUY4O3/GiitkSdbaxrHCoUY71LRRWqMyrqH/Hs3vxXA66xbU5geiYUD0GKKKit8JdL4j/2Q==",standby:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5voFH4UAdKAFHb/PpQO3+fSkA6cf54pQOn+fSgAHb/PpSUoHTj/PFGKADmj/P86Me1BH+cfWgAOef8+tKe/Xv/WjHXj1/r7UpB549e319qYAc89e/9aDnnr/nNBHXj17fX2oI5PH6fX2oAOc96Bnjr/nFGOen6f8A1qAPb9Pp7UAA7de39KBnjr2/pQB049O309qAOnHp2+ntQADPHXt/Sk5wP8+lAHTj07fT2oxx0/zx7UAJQc0dv/rUEcHikAmPagD/ADijv0/SgD2/SgAA6cfp9PalA6cfp9PakA6cfp9PalA6cfp9PagAA6cfp9PagD2/T/61AHTj9Pp7UY9v0/8ArUAGPb9P/rUuODx+n19qTHt+n/1qcF4PH6fX2oAXZ149e319v8/yeYW+b5Dxn+E/7X+z7fp+UsVsZA2EPQn7h9H/ANn2/wA9t+38M3c4mCWc29FkOPs7k8LOScCHt5Z9MY7YOzSMLgc48DDd8h4z/Cf9r/Z9v89mMhBPy/p9faus1bwlfaeZPPsZoyC4ANtIucNMD1hHTyz+XbB285c2rRuwMZBBP8BHc/7A/wA/oShbUCpt56fp/wDWoA56fp9PalK89P0/+tSAcjj9Pp7VAAB04/T6e3+f5gHTj07fT2/z/NAOnH6fT2/z/MA6cfp9Pb/P80AY4HH6fT2/z/NAOnH6fT2oA6cfp9PagD2/T6e1ABj2/T/61GODx+n/ANajHHT9P/rUEcHj9P8A61ACd+lAHtRRigAHbj/PFA7cf54oH+f0oHb/AD6UAGPb/PFAo/z/ACooAXHt/n8qeB7fp9fao6eP8/rTA2dNtklaQNFnCOeE9EkP/PM+n6duo9t0Hwzb3OlvI1jH/qpufsiZPGoD/n0/2R+Q9Ao8PsHCFztUkqw5UHgrJ7f5/l7d4d1C3h0qcDYQsM6sqIhwdmpYz+79/wAvbgbNXjoIu+MvCtokV2oshjfMdy2qgjDXp6i09h37DsAw8L1u2CX02IlUBjwIwvc/9M1/l/8AW9s8fazCy3hjSDd5kwQPGuSDJegnHl57+vp+HiGssjXspQLtLNjAGOp9FFCVo6gY7Lg9P0/+tTMe36fT2pzYz0/z+VMrEYAdOP0+ntQB04/T6e1A7f59KB2/z6UgAduP0+ntQPp+n/1qB2/z6UgoAXHtSH6UUUAFFFFAAO3+fSgdv8+lA/z+lAPT/PpQAen+fSij/P8AKgUAFOHf/PrTacD7/wCefegC3FLt3YI6MP0f3966e1157e3nQTOu4SDKPjOVuRz83P3/AMj+fIh8BufXv/ve/wDn+dr7SQr4fs3G7/rp/te/6/ntCVhHU6zrzXElwDMZW3yYZ3DDl5z13f7X+e/K3Uu+Rvm7nv7n3p1xcl2fL9S38Xu/+17/AOe9WR9zE7u57/X3onK4EZPNMFOJ9/1/+vSZrEYD/P6UDt/n0oB6f59KAen+fSgBB2/z6UUDt/n0ooAKKM0fjQAZ560A9Of1oz7/AK//AF6Aff8AX/69AAD05/zxSg9Of1+nvQD05/X6e9APTn9fp70AID7/AK/T3oz7/r/9elz7/r9PekB9/wBf/r0AGff9f/r0uevP6/8A16M+/wCv/wBejPv+v196AHbuDz69/r7/AOf5vMhw3zev8X+97+/+e8e7rz+v196cW68+vf6+/wDn+bAe8hO75yev8X+9/te/+e8bNyef1+vvQz9efXv9ff8Az/NC2e/6/wD16AEz7/r/APXoz7/r/wDXoz7/AK//AF6M+/6//XpAAPTn9fp70A9Of1+nvQD05/X6e9APTn9fp70AID05/wA8e9GfegHpz+v096M0AH40fjRn3ozQAZ5/+vQO3NFLyMdeaAEB6c/5496UHpz/AJ496B2/z6UDt/n0oAQHpz+v096M+9Hp/n0ozQAZ96M+/wCtGaKAFJ68/r9fegnrz+v196D3/wA+tB7/AOfWgAJ68/r9fegnrz+v/wBekPfn/PNGaADPvRnpzRmigAB/z+VGff8AzxR6f59KM/5/KgAz/n8qM+9HpSZoAXNGaSigCxFd3EMflxzuiZztB4zTrm+ur1YVuZ3lEQKoGP3QW3H9STRRTuwK4HT/AD6UAdP8+lFFIAA6f59KO1FFABijFFFAB6/59aCOv+fWiigAI/z+dIe9FFABjmlFFFACDt/n0oA/z+VFFAB6f59KKKKAEo9aKKAP/9k=",sphere:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5VGM89KXI7KKTFB9cCgBcjBHqKVOTg9PpTcH0oAzQAvGMevpSYqSGB7idIIEaWSQhUVRyzHsBV5dFuNzCbCbfvLkcfU9B+tAGaAPrV620ieZfMlkgtVxlTcNt389AOv49PerccMUGRBLChA+aQjcV/Pp/nimyf2a0KAyXk8rsS7thVcjAHYt3P59KAKj6XIjFfPgYjsrEn8sZpn2FySMjP+4/+Fafnx2n7oWVrIG+XfJmVYjnjknGfXjHtUVvq90s5O+SHystiF/LAI9h74oAgXR2A/fXdpBnp5rkE+2AD+Z496gudOurXiWJsDoyncv5jirL30V0S00sqSE/fKq4P1H9ant55InSJXjPmYVD5WM/THBHt/KgDGIweDmj610N/bW5kJeOyKkAh4ZGKkY9edreobvVH7BZXAeOC5kjnUHbFKnDHjjdxjv1FAGaCCOQTRgnk8d6GRo2KOCrDggjkH0pMkjGTQAZ+XHvQQRQKd1XB6L+tACfKRknBx0ApKDjJx0o7UAGKCO+MA0dqOp7/hQAp9cmko5z61d0+0EjLNKv7sHAGM7yOTj6D+lAD4EFpbGVyVeQbQR1VSOce5HH0Jq5eSboII55F8sA/wCh7yuxuCWyeASCM9zjnAxVaS4VrsMOSgJA6iJRzj3Y9z6mq0qyziLHzO25yc9OeSTQAt1b3OFYKWhzhNg+Ue3HepZAbeOOOIFrg7gcc+X9Pf37VNp0zabIWifDSxsmcAlgQR8oI4/3uvpSTas01tEk0UTxAsu1RsI6HqOT175oApJE8DAtMIT6A5b8h/WrxmtJbV5Hhy8jLG0xO3B5PKjscD34qr5cMvMMRf8A2Q+GH4HOfwq1ZQWr2+JmuY4pXIG0KxaRV+UDJHcgE9gfwoAqeVhiPs8Sgcl2Ylceuc1Zt9QFok3kwwNHt2MWXO8njj04zg9aYiSXKiNAs0A6ImQU9xnv/Oi906e1iijfYPMzJ95RkHgcZ46Hj3oADKI4RJHGuF6OpKkoT0Iz2PUe9S2lzY3EwW8jlijCnMsZDFFIx0OM9emarWkTo3lyxsYnBDbSDtz3FJeWk2nj7PMjJI3zNkcEfw49eDn8RQBbns2uEPmukjxjalwh+VgOgfuD6E/4VlSIY2KMpVh1Bq5biURpcrI0LINu4dXXtgd/T06Voyi01q2WRoPs1yqlfMTpIw6Ar0GcgZXAHXHJoAwQpOepA7ijooIJz9KQjbx3/lTiSec9u/egBFIDc8ikH545xRyp5pUGc+v0zQAnX04oyc8fpRQQR7EcUAFdBJdotpJC0cKOIYo42EeAVCgsDjkZLckde9YAHQZOTwRWrdbmvEhTq8W3HfJHH/stAEYt0jt2eaFrdZDtDg5UgcnaD17d6kuBFDBAsEiFihyki7dp3E854J5Bx0GaYt04tQpcyW9q21Ub5lJbngH1IJ+lQrJDcQvvBRw28kfMOeDx19O9AEYSZLqOWUMRvHz9c8+tNdcQOv8Ackxn6g/4U6OG4jObdjIDxmIkn8utaRmihNyJY45mY79y4VgRzhSOOhOTg+3rQBnx2oiUS3DtHFnKgD5nPsO31q22pGeGNikaeW52yBQXUYGM+o4qpMftb+Yky7+AEYbSPoen65pqRSCF4jGfM3qQpHPQ9qAHXcU32ry2YvuYeWScgg9CPzp4uWl8yGNyRnMakZHAxjHTkD9KmhkSLyVdVkZ1KbcnarYIByO/3en45qpEI5ZUWOGXzCQAEfv+IoAdAYZSXltxhepjOCx7DHTmtG5XEEE8Nx51wwZJoXXAVgeOOQx246dMd6ivfs0JEdtNgsu5mZeA38WCPcEZ9KjtbKW7glhh8uU53qEYdgSTj6CgCKGZZrg+fGynGJGXgBe+Qf6Yqa4/0KQi3cNHBJuiYjG4dCSOxPGR26VXluwALd1Mka8Fm4bP19PQGrUMDXV20FurT/aFA8lfvklcjA7nOOlAFbUoV3+fGSY2OPocZGfwqlkjofyrYt7V9qJIjPBKpjduBjHIbk9Rn+lZt3bPa3Mts7IXhcxnYdykg4OCOtAEIx3NKMn1oBxkEUgI6EUAKOOGFIDgH3pTwSOvbmkGc8daAJrWL7RdQwryzuqj3ya051cX5uyFUKQEDOowc49ewH8qxs+vWtrWPKvoLS7gJjLxYlDYAMoJ3EHtnAOD70AV5LOSKWWyBRggZTtkU5YHOevtge1Q2tpN5yqI2O/5MDng8VJOHS5dihEkTbiCPvJnP6fy+lQw2/8ApjqANsWWyegA6E/pQBMLeSyZvNV4nj4duQQf7oPr7/WnS6lLcyw3NwEl+URHK9FUYAyP9nAqO4uWeNXgd1VDtbBIyf7x9z/SltZHuElVxGyqN5LoOMe45yRmgCP7PE8rx4aIqTuOdyr/AFH61bgeRIpba2ZJkZOd3JbBzwDyB16VBd3EM3l/umiQqD+7bIJHBJz1PHr3plrAJbmPyHVyzAbD8pPr14/WgCRIkkTywslvMHBVSCck8fXrj1qa9t3spJI7dklkkGZJImDhQedox9eT+H1mWa60X7RYxMSZEaKWT7y4HO1SeOqjJHXtx1os8c8cJ8khiSmYzggjkcdO/tQBB5ZlhVF+Zkcrj2P/AOo/nU9tMkDNEhD/AC5Zuu7HOB7cVZgnASWCO4jmLociYcnHOAew47EZqrGsUUsbTQyQjcMsvzKR36/40ARl5BN5BAmwxUBx/I9auXEsFmInt4i02wBmdshCOoGMdsdexp89obMK6PHLPIgwqnlMZU5B7/L/AJ5qgiPIrwsH8zO8AjnPf9OfwoAutJI8Zs92ImkWfYowMZwOB7EmqF8xa8uGJ+9IzH8TVxMSXSshyPKeL8lKj/2WqNyP9Il65Dnj8aAIjwcgYFGQOn40EHJzx3o6cg0AAxnnkUoO00AgYP50lAByO+K1NPuI2spreXiIMCc9lOASPcHafz9ay81NZ3ktjL5kRGSCpDDIZSMEH2IoAtXE01temJlWXbt+XqD8o6H0Pt61oX2noNPhntvMjW5VRKZ12hWX+AN6Y2ntn8qJ3fWbPzIJ382BAME4O0fwsR1x2b069KoG5MMlwhXcqMA6P0ZR8pz+Q9xQA23szG43yRvG3yv5X7zj8PTrQ6bZwtuyskbcL0ZsdSQe59s1FPbhCJrZmaLG4f3lHv8A41M5nnuZF+WQbz/rBnGenPWgBjWkr5tkRi6yfKDwSrDrz06frSSypaRNbQMru3Ekw7/7K+3v3+laf9owfZTa2qsuIzHNJnf5vO4YVvurxjAPOAT1xWYVik6LE30Yxn9ePyoAFnkiuY5Y2YbwrYXuehH5g1YkmWKO4tXSKSRSC7gbWGDgqCPrzSywxW1qC3nRTAlTuTIjU8jnPXr24+vRsNobm7VY5ov3qc7iVVflwSSRgAEZz7UAVoET7QjRPltw/duME+3oasyxvocskUmRcjIMYP3Pr2zUZmWxYw22fP8AuvOQQR7KO316/SoZZ2WaVTtkTe3yN25PT0oAtanfNdTtPPDA7s7A7Ywg7HgLgDrUlldR2zpIfMDFWKxtiRVG084P6Cie2Qo8owXEuUt2+82V6+44Huc9KqQKdzz3BJJRiFPV+MflQBoWFvbz2zu0iQ/OuwgMrEZyxxyMAKCeRWXezRTXdw8O/wAppGaPcMNgnjOOM4q1du1taiI7RJKMuR2H90emMAfXPpWbnFABjnmg8nilzjnHWjOBgdPpQAgz2JyeMUdvejJBznmkoAUe/SlHPBPHWkzjoaCc0AWLC+uNPuY7i3Yh0YMARkEg9x3rfe3tdUk8+BIIkuOAd6psJz8jZ4GD06ZAH0HMjk5qS3nmtZN8bFTjBHZh6Ed6AL6QR2khgaVmkz90/uyjdM5PX8OtT6nFLb7PtNo9rJKgOI1IVBjrg92GDnPQ+9PgMOtlYnKx3ORje3BH16jHrz7jjNNNneusyxRSXESMZF8o5Ma9CQVyAOnPTigDPsw1vcJLGVmQH5lU/MR34PNEtu2nzsjDdLnCLjt2bHv2qWSV7dA0c32kjqzgEIfoe/v0q1e6tcSW8ImOXUbZZF+WRieRuPcY4x7GgCnZEwuyyzsvmfKUQ5Oc8Z7DnHr9KsXd9mxt0a1hjyGH7sbXYbjyx7nPHTsaghXzQZA0Lxr1DRqrE+g9T+NTXctxcpFNDGsTbcOka7dnJ7nkA/XrmgBlrbJePGpMkRLDbJIMKOehb098cUyeB7aSTYizSEkl1wwX6D+p/wDr0wIkMZlnmLO+VUJ8xx3OTx7d+9WrAGY/NEsMKLu85+Sg+p7fT8KAGXkbRuPMjZ3cbghBJJboT36AfWrNnC028XId7p0Ox+f3SrgszHHICg4Hb14xUlybqa6nu5b2V4iSXud7EyDoAM8rkDoefbtWbc6pIyvFbloomG18Mdzj0J9PbpQBXvbgXEzOowmcKO4UdBUJ6kDp9aMAg4x0zQu4HIH6UAJyT7mlHGc9P50ZxzzmkzQAA4OaVxtYgdqKKAAgYJ6YxSdqKKAHDBU57U0c/lRRQA7c0MgaNmVlIIYHBB9a39MuJdSS4muHbzYvnDqcEk9c9vyHNFFAFZr+e31RI9yzJvUYmUPwccc9vark0aTWjXaxxxNPlmSONdoOc8Ag4oooAx57qbe6B9qxkqoUAAc1ZmvrprqC1knklhVUjCSHcArYJ4PuSaKKAJtSEdrqP2dIIiASocjkAHHbj9K2dZ0u20bRrK5hVppbiLz3aY7vm3ED04AHH1NFFAHKXN7cXTBZJWKZBCDhQfYDjvVZuWNFFADto37e1DDaOPU0UUAIvLgdM+lIfvUUUAf/2Q=="},Hi=[{id:"w3",name:"Dust",tall:!1},{id:"t3",name:"Sphere",tall:!0},{id:"w2",name:"Line",tall:!1},{id:"w1",name:"Crowd",tall:!1},{id:"w5",name:"Bloom",tall:!1},{id:"t2",name:"Machine",tall:!0},{id:"t1",name:"Standby",tall:!0}],vo=s=>String(s).padStart(2,"0"),Zf=s=>`${vo(Math.floor(s/60))}:${vo(Math.floor(s%60))}`;function ET(){const[s,e]=ut.useState(0),[t,r]=ut.useState(0),[o,l]=ut.useState(!1),[c,f]=ut.useState({at:0,of:20}),[d,h]=ut.useState({w:window.innerWidth,h:window.innerHeight}),g=ut.useRef([]),x=ut.useRef({pos:0,vel:0,target:0,dragging:!1,lastX:0,lastT:0,raf:0,downX:0,downOn:-1,from:0});ut.useEffect(()=>{const N=()=>h({w:window.innerWidth,h:window.innerHeight});return window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[]);const m=ut.useCallback(()=>{const N=x.current;cancelAnimationFrame(N.raf);let k=performance.now();const Q=K=>{const se=Math.min(.05,(K-k)/1e3);k=K,N.dragging||(N.vel+=((N.target-N.pos)*90-N.vel*19)*se,N.pos+=N.vel*se),e(N.pos),N.dragging||Math.abs(N.target-N.pos)>8e-4||Math.abs(N.vel)>.002?N.raf=requestAnimationFrame(Q):(N.pos=N.target,e(N.pos))};N.raf=requestAnimationFrame(Q)},[]),_=ut.useCallback(N=>{const k=x.current;k.target=Math.max(0,Math.min(Hi.length-1,Math.round(N))),m()},[m]);ut.useEffect(()=>{var k;const N=Math.round(s);if(N!==t){r(N);try{(k=navigator.vibrate)==null||k.call(navigator,8)}catch{}}},[s,t]),ut.useEffect(()=>{g.current.forEach((N,k)=>{N&&(k===t?(N.muted=o,N.play().catch(()=>{N.muted=!0,l(!0),N.play().catch(()=>{})})):(N.pause(),N.muted=!0))})},[t,o]),ut.useEffect(()=>{const N=k=>{if(k.key==="ArrowRight"&&_(x.current.target+1),k.key==="ArrowLeft"&&_(x.current.target-1),k.key===" "){const Q=g.current[t];Q&&(k.preventDefault(),Q.paused?Q.play():Q.pause())}};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[_,t]);const S=ut.useRef({locked:!1,quietAt:0,sum:0,stepAt:0}),T=N=>{const k=S.current,Q=performance.now(),K=Math.abs(N.deltaX)>Math.abs(N.deltaY)?N.deltaX:N.deltaY;if(k.locked)if(Q-k.quietAt>160&&Q-k.stepAt>420)k.locked=!1;else{k.quietAt=Q;return}Q-k.quietAt>160&&(k.sum=0),k.quietAt=Q,k.sum+=K,!(Math.abs(k.sum)<18)&&(_(x.current.target+Math.sign(k.sum)),k.sum=0,k.locked=!0,k.stepAt=Q)},y=Math.min(d.w*(d.w<720?.56:.29),460),M=N=>{var Q;const k=x.current;k.dragging=!0,k.lastX=N.clientX,k.lastT=performance.now(),k.vel=0,k.from=Math.round(k.pos),k.downX=N.clientX,k.downOn=Number(((Q=N.target.closest("[data-i]"))==null?void 0:Q.getAttribute("data-i"))??-1),N.currentTarget.setPointerCapture(N.pointerId),m()},w=N=>{const k=x.current;if(!k.dragging)return;const Q=performance.now(),K=(N.clientX-k.lastX)/y,se=k.pos-k.from,W=Math.abs(se)<.6?1:.6;k.pos=Math.max(-.4,Math.min(Hi.length-.6,k.pos-K*W)),k.vel=-K/Math.max(.008,(Q-k.lastT)/1e3),k.lastX=N.clientX,k.lastT=Q},R=N=>{const k=x.current;if(k.dragging){if(k.dragging=!1,Math.abs(N.clientX-k.downX)<6&&k.downOn>=0)k.target=k.downOn;else{const Q=k.pos-k.from+k.vel*.12,K=Math.abs(Q)>.12?Math.sign(Q):0;k.target=Math.max(0,Math.min(Hi.length-1,k.from+K))}m()}},P=ut.useRef(null),H=N=>{var Q;const k=(Q=P.current)==null?void 0:Q.getBoundingClientRect();k&&_((N.clientX-k.left)/k.width*(Hi.length-1))},I=d.w<720,F=Math.min(d.w*(I?.86:.48),760),E=F*9/16,U=Math.min(d.h*(I?.5:.56),I?460:520),Y=U*9/16,G=Hi[t];return be.jsxs("div",{className:"gal",onWheel:T,children:[be.jsxs("p",{className:"gal-sub",children:["NISCHE AT KULTUR BUNKER — STUTTGART, NOV 2026 — ",Hi.length," TAKES"]}),be.jsx("div",{className:"gal-stage",onPointerDown:M,onPointerMove:w,onPointerUp:R,onPointerCancel:R,children:Hi.map((N,k)=>{const Q=k-s,K=Math.min(1,Math.abs(Q)),se=N.tall?Y:F,W=N.tall?U:E,Z=1-.42*K,O=(k%2?.16:.07)*d.h*K,B=Q*y;return be.jsxs("div",{className:`gal-card ${k===t?"on":""}`,style:{width:se,height:W,transform:`translate(-50%, -50%) translate(${B}px, ${O-(1-K)*14}px) scale(${Z})`,zIndex:100-Math.round(Math.abs(Q)*10),opacity:Math.max(0,1-.5*K-.25*Math.max(0,Math.abs(Q)-1))},"data-i":k,role:"group","aria-label":`${vo(k+1)} ${N.name}`,children:[be.jsx("video",{ref:D=>{g.current[k]=D},src:`/media/${N.id}.mp4`,poster:`/media/${N.id}.jpg`,loop:!0,playsInline:!0,preload:Math.abs(Q)<1.5?"auto":"metadata",disablePictureInPicture:!0,disableRemotePlayback:!0,muted:!0,onTimeUpdate:D=>{k===t&&f({at:D.currentTarget.currentTime,of:D.currentTarget.duration||20})}}),k===t&&be.jsxs("span",{className:"gal-hud",children:[be.jsxs("span",{className:"lime",children:["▶ ",N.name.toUpperCase()]}),be.jsxs("span",{children:[Zf(c.at)," / ",Zf(c.of)]})]})]},N.id)})}),be.jsxs("div",{className:"gal-ruler-wrap",children:[be.jsx("div",{className:"gal-names",children:Hi.map((N,k)=>be.jsxs("button",{type:"button",className:k===t?"on":"",onClick:()=>_(k),children:[vo(k+1),be.jsxs("span",{className:"nm",children:[" ",N.name.toUpperCase()]})]},N.id))}),be.jsx("div",{className:"gal-ruler",ref:P,onPointerDown:N=>{N.currentTarget.setPointerCapture(N.pointerId),H(N)},onPointerMove:N=>{N.buttons&&H(N)},children:be.jsx("span",{className:"gal-mark",style:{left:`${Math.max(0,Math.min(Hi.length-1,s))/(Hi.length-1)*100}%`}})})]}),be.jsxs("div",{className:"gal-foot",children:[be.jsxs("span",{children:[G.tall?"9:16":"16:9"," · ",Zf(c.of)," · ",vo(t+1)," / ",vo(Hi.length)]}),be.jsxs("span",{className:"gal-btns",children:[be.jsx("button",{type:"button",onClick:()=>l(N=>!N),"aria-label":o?"Sound on":"Sound off",children:o?"♪ OFF":"♪ ON"}),be.jsx("button",{type:"button",onClick:()=>_(x.current.target-1),"aria-label":"Previous",children:"←"}),be.jsx("button",{type:"button",onClick:()=>_(x.current.target+1),"aria-label":"Next",children:"→"})]})]})]})}function wT({page:s,onClose:e,onGo:t}){return be.jsx("div",{className:`page ${s==="performances"?"wide":""}`,onClick:e,children:be.jsxs("article",{onClick:r=>r.stopPropagation(),children:[be.jsxs("nav",{className:"tabs",children:[["about","instrument","performances"].map(r=>be.jsx("button",{className:r===s?"on":"",onClick:()=>t(r),children:r},r)),be.jsxs("button",{className:"close",onClick:e,"aria-label":"close",children:[be.jsx("span",{className:"cl",children:"close "}),"×"]})]}),s==="about"&&be.jsxs("section",{children:[be.jsx("h2",{children:"The machine reads, the hand leads."}),be.jsxs("p",{children:[be.jsx("b",{children:"<N4TH>"})," is the visual instrument of Nathalia Cury, a Brazilian art director based in Stuttgart for six years. With a background in typography, editorial design and brand identity, she brings a designer's eye to the club."]}),be.jsx("p",{children:"She built <N4TH> together with AI, using it as a design partner from the first sketches in Figma Make to hand tracking with MediaPipe and real-time graphics in Three.js. The result is a tool that sits between graphic design, code and performance."}),be.jsx("p",{children:"On stage, a camera reads her hands and the music reads the room. Every gesture becomes a move in the visuals: a fist gathers, an open palm releases, a clap breaks everything open. She moves between 2D and 3D worlds, turns colour palettes live, or lets the system run on its own and evolve with the night."}),be.jsx("h3",{children:"Contact"}),be.jsxs("p",{children:[be.jsx("a",{href:"mailto:cury.nathalia@gmail.com",children:"cury.nathalia@gmail.com"}),be.jsx("br",{}),be.jsx("a",{href:"https://instagram.com/nathcury",target:"_blank",rel:"noreferrer",children:"@nathcury"})]})]}),s==="instrument"&&be.jsxs("section",{children:[be.jsx("h2",{children:"Built with AI, played by hand."}),be.jsx("p",{children:"The tool runs in a browser. It listens to the music — its kicks, its builds, its silences — and it watches the hands. Every visual answers both: the sound gives the pulse, the hand gives the decision."}),be.jsxs("ul",{children:[be.jsxs("li",{children:[be.jsx("b",{children:"one finger"})," slow · ",be.jsx("b",{children:"five"})," fast"]}),be.jsxs("li",{children:[be.jsx("b",{children:"a fist"})," gathers · ",be.jsx("b",{children:"an open palm"})," releases"]}),be.jsxs("li",{children:[be.jsx("b",{children:"a clap"})," breaks everything open"]}),be.jsx("li",{children:"the music: pulse, kicks, build-ups, the drop"})]}),be.jsx("p",{children:"Every part of it — the visuals, the way they listen, the way they read a gesture — was written in conversation with AI. The machine can play on its own, so the performance stays with the question: who leads and who follows?"}),be.jsxs("figure",{children:[be.jsx("img",{src:"/media/instrument.jpg",alt:"The instrument: the visuals of the set, layers, effects, the sound and the hands"}),be.jsx("figcaption",{children:"The instrument as it is played: the set of visuals, the layers, the effects, what it hears."})]}),be.jsxs("figure",{children:[be.jsx("img",{src:"/media/library.jpg",alt:"The library of visuals, and the set chosen from it"}),be.jsx("figcaption",{children:"The library: every visual of the instrument, and below, the set chosen for the night."})]})]}),s==="performances"&&be.jsx(ET,{})]})})}const xs=[{id:"dust",name:"Dust",note:"a fist gathers it into a circle"},{id:"sphere",name:"Planet",note:"a fist pulls it out of shape"},{id:"line",name:"Line",note:"an open hand unfolds it"},{id:"jellyfish",name:"Jelly",note:"a fist closes the bells"},{id:"dandelion",name:"Dandelion",note:"the hand moves the wind"},{id:"standby",name:"Standby",note:"a fist closes the picture to a point"}],gd={dust:{colors:Jr(0,0,"grayscale"),params:{"look.glow":2.2,"field.size":1.3,"field.drift":1.8,"look.trail":.55,"sound.beat":.12,"sound.sparks":.5,"sound.bass":.4}},line:{colors:Jr(0,0,"grayscale"),params:{"line.zoom":.9,"line.weight":1.4,"line.wave":2.65,"line.speed":.65,"line.birth":.6,"hands.open":1,"hands.pull":1,"hands.clap":1,"sound.beat":.7,"sound.bass":2,"sound.grow":.75}},dandelion:{colors:Jr(200,60,"black"),params:{"sound.gust":0,"sound.wind":1.4,"field.return":7.5,"field.glide":1.2,"field.sway":1.9,"field.bounce":0,"field.drift":.44,"field.backdrop":0,"colour.speed":2.5,"colour.offset":0,"colour.palette":0,"colour.depth":.32}},jellyfish:{colors:Jr(245,100,"contrast"),params:{"swarm.backdrop":0,"swarm.height":.3,"swarm.arrival":11,"colour.palette":3,"sound.flow":2.4,"swarm.drift":1.9,"swarm.pulse":1.25,"swarm.water":1.2,"sound.swell":1.2,"sound.beat":.6}},standby:{colors:Jr(0,0,"grayscale"),params:{"sound.quiet":.4,"grid.words":0}},sphere:{colors:Jr(0,0,"grayscale"),params:{"shape.style":2,"shape.size":1.2,"shape.morph":.32,"shape.lobes":1.05,"shape.detail":2,"motion.spin":.4,"motion.flow":1,"motion.dust":1,"motion.points":3600,"sound.beat":0,"sound.drop":0,"sound.bass":.3,"sound.squash":1,"sound.spin":1.4,"shape.steady":1,"motion.glide":2}}},TT={dandelion:"hue-rotate(2.59rad) saturate(0.95) contrast(1.28)",line:"sepia(1) saturate(4) hue-rotate(188deg) brightness(1.15)"},bT=Jr(110,70,"contrast"),qh={dust:{path:"field.count",min:200,max:5e3,start:.8},line:{path:"line.count",min:1,max:40,start:11/39},dandelion:{path:"field.count",min:1,max:12,start:.2},jellyfish:{path:"swarm.count",min:1,max:8,start:.43},standby:{path:"grid.detail",min:.2,max:1,start:1},sphere:{path:"shape.detail",min:2,max:6,start:0}},Ng=s=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`,Qr=[{name:"Johan Nex · Machine",src:"/tracks/m4n4th.mp3",seconds:362},{name:"Johan Nex · Human",src:"/tracks/human-3.mp3",seconds:247}];class CT{constructor(e,t){V(this,"parts");this.canvas=e,this.ctx=t;const r=()=>{const f=document.createElement("canvas");return f.width=e.width,f.height=e.height,f},o=r(),l=r(),c=new Lw(o,o.getContext("2d"),0);c.setParams({"look.flow":2.65,"look.zoom":2.85,"look.detail":2,"look.veins":1.35,"look.grain":.3}),this.parts=[{r:c,c:o,filter:"hue-rotate(-0.2rad) contrast(1.3)",alpha:.45,blend:"source-over",colors:bT},{r:new yw(l,l.getContext("2d")),c:l,filter:"saturate(1.88) contrast(1.3)",alpha:.94,blend:"screen",colors:gd.jellyfish.colors}]}setParams(e){var t,r;(r=(t=this.parts[1].r).setParams)==null||r.call(t,e)}render(e,t,r){const{canvas:o,ctx:l}=this;l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,o.width,o.height);for(const c of this.parts)(c.c.width!==o.width||c.c.height!==o.height)&&(c.c.width=o.width,c.c.height=o.height),c.r.render(e,c.colors,r),l.globalAlpha=c.alpha,c.blend==="screen"?(l.filter=`${c.filter} invert(1)`,l.globalCompositeOperation="multiply",l.drawImage(c.c,0,0),l.globalCompositeOperation="lighter"):l.globalCompositeOperation=c.blend,l.filter=c.filter,l.drawImage(c.c,0,0);l.filter="none",l.globalAlpha=1,l.globalCompositeOperation="source-over"}destroy(){var e,t;for(const r of this.parts)(t=(e=r.r).destroy)==null||t.call(e)}}function RT(s,e,t){return s==="dust"?new sw(e,t):s==="line"?new aw(e,t):s==="jellyfish"?new CT(e,t):s==="standby"?new bw(e,t):s==="sphere"?new Cw(e,t):new mw(e,t)}const Yh={dandelion:{path:"field.glide",start:1.2},jellyfish:{path:"swarm.water",start:1.2},sphere:{path:"motion.glide",start:2}},$f=(s,e,t)=>{const r=qh[s],o=r.min+e*(r.max-r.min),l=Yh[s];return{...gd[s].params,...l&&t!==void 0?{[l.path]:t}:{},[r.path]:r.max>2?Math.round(o):o}};function PT(s){var r,o,l;const e=document.querySelector(s);if(!e||s===".stage")return{top:"42%",left:"50%",transform:"translate(-50%, -50%)"};const t=e.getBoundingClientRect();if(window.innerWidth<=720&&(s===".track"||s===".cards")){const c=(r=document.querySelector(".desk"))==null?void 0:r.getBoundingClientRect(),f=e.getBoundingClientRect();if(c)return{top:c.top-16,left:Math.min(window.innerWidth-150,Math.max(150,f.left+f.width/2)),transform:"translate(-50%, -100%)"}}if(s===".fx"&&window.innerWidth<=720){const c=(o=document.querySelector(".fx.open"))==null?void 0:o.getBoundingClientRect();if(c)return{top:c.top-16,left:window.innerWidth/2,transform:"translate(-50%, -100%)"};const f=(l=document.querySelector(".fxbtn"))==null?void 0:l.getBoundingClientRect();if(f)return{top:f.top-16,left:Math.min(window.innerWidth-150,Math.max(150,f.left+f.width/2)),transform:"translate(-50%, -100%)"}}return s===".fx"?{top:t.top+t.height/2,left:t.left-14,transform:"translate(-100%, -50%)"}:{top:t.top-16,left:t.left+t.width/2,transform:"translate(-50%, -100%)"}}const LT=Math.max(1,Math.min(5,Number(new URLSearchParams(location.search).get("guide"))||2)),IT={left:null,right:null},DT={dust:.35,sphere:0,line:.8,jellyfish:.7,dandelion:.35,standby:.8},UT=["5 fingers","2 fingers","fist","pinch","clap"],NT={bass:0,lowMid:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0,onset:0};function FT(s,e,t){return{position:{x:s,y:e},gesture:t>.5?"fist":"open",openness:1-t,fingerCount:t>.5?0:3,velocity:0}}const eh=[{key:"play",at:".track",text:"Play a track — the visual moves with the music."},{key:"hand",at:".stage",text:"Raise your hand to the camera — or move the mouse."},{key:"fist",at:".stage",text:"Close your hand (or hold the mouse button) — then open it."},{key:"clap",at:".stage",text:"Clap (or click quickly)."},{key:"fx",at:".fx",text:"Shape it: trail, colour, amount."},{key:"switch",at:".cards",text:"Try another visual."}];function kT(){const s=ut.useRef(null),[e,t]=ut.useState("dust"),[r,o]=ut.useState(!0),[l,c]=ut.useState(0),[f,d]=ut.useState(Qr[0].seconds/xs.length),h=z=>{t(z),c(Me=>Me+1)};ut.useEffect(()=>{if(!r)return;const z=window.setInterval(()=>{t(Me=>xs[(xs.findIndex(L=>L.id===Me)+1)%xs.length].id)},f*1e3);return()=>window.clearInterval(z)},[r,l,f]);const g=ut.useRef(e);g.current=e;const[x,m]=ut.useState(0),[_,S]=ut.useState(0),[T,y]=ut.useState(()=>Object.fromEntries(xs.map(z=>[z.id,qh[z.id].start]))),[M,w]=ut.useState(!1);ut.useEffect(()=>{m(0),S(0),y(z=>({...z,[e]:qh[e].start}))},[e]);const[R,P]=ut.useState(()=>Object.fromEntries(Object.entries(Yh).map(([z,Me])=>[z,Me.start]))),H=ut.useRef({trail:x,hue:_,amounts:T,glides:R});H.current={trail:x,hue:_,amounts:T,glides:R};const[I,F]=ut.useState(null),[E,U]=ut.useState("off"),Y=ut.useRef(IT),G=ut.useRef(null);G.current=I;const N=ut.useRef({x:.5,y:.5,on:!1,down:0,closed:0,clapAt:0,moved:0}),k=ut.useCallback(async()=>{U("asking");try{const z=await navigator.mediaDevices.getUserMedia({video:{width:640,height:360,facingMode:"user"}}),Me=document.createElement("video");Me.muted=!0,Me.playsInline=!0,Me.srcObject=z,await Me.play(),F(Me),U("on")}catch{U("refused")}},[]);ut.useEffect(()=>{k()},[k]);const Q=ut.useRef(null),[K,se]=ut.useState(null),[W,Z]=ut.useState(0),[O,B]=ut.useState(Qr[0].seconds),D=z=>{B(z),z>0&&d(z/xs.length)},q=ut.useRef(0),Se=ut.useRef("");q.current=W;const ge=ut.useRef(null),me=ut.useCallback(z=>{var L;let Me=Q.current;if(!Me){Me=new Audio,Me.crossOrigin="anonymous",Me.loop=!0,Me.addEventListener("timeupdate",()=>Z(Me.currentTime)),Me.addEventListener("loadedmetadata",()=>{D(Me.duration||0),Math.abs(Me.currentTime-q.current)>1&&(Me.currentTime=q.current)}),Q.current=Me;const A=new AudioContext,ne=A.createMediaElementSource(Me),he=A.createAnalyser();he.fftSize=2048,he.smoothingTimeConstant=.55,ne.connect(he),he.connect(A.destination),ge.current={ctx:A,analyser:he,data:new Uint8Array(he.frequencyBinCount),state:mT()}}if((L=ge.current)==null||L.ctx.resume(),K===z){Me.pause(),se(null);return}if(Se.current!==Qr[z].src){Se.current&&(q.current=0,Z(0)),D(Qr[z].seconds),Se.current=Qr[z].src,Me.src=Qr[z].src,Me.currentTime=q.current;const A=Me;fetch(Qr[z].src).then(ne=>ne.blob()).then(ne=>{const he=A.currentTime,Ae=!A.paused;A.src=URL.createObjectURL(ne),A.currentTime=he,Ae&&A.play().catch(()=>{})}).catch(()=>{})}Me.play().catch(()=>{}),se(z)},[K]),[j,ce]=ut.useState(new Set),[le,Ee]=ut.useState(()=>{try{return!localStorage.getItem("n4th-guide-seen")}catch{return!0}}),we=z=>{Ee(z);try{localStorage.setItem("n4th-guide-seen","1")}catch{}},ve=ut.useCallback(z=>ce(Me=>Me.has(z)?Me:new Set(Me).add(z)),[]);ut.useEffect(()=>{K!==null&&ve("play")},[K,ve]);const Ge=eh.find(z=>!j.has(z.key));ut.useEffect(()=>{if(!Ge)try{localStorage.setItem("n4th-guide-seen","1")}catch{}},[Ge]),ut.useEffect(()=>{const z=s.current,Me=z.getContext("2d"),L=document.createElement("canvas"),A=L.getContext("2d");let ne=null,he=null;const Ae=3;let De=performance.now(),Be=0;const xe=MT();let ye=0,We="",Ve=.3,Ce=-1,Pe=0,ct=-1e9,pt=0,Mt=0,J=450;const Fe=new Uint8Array(300),_e=(Oe,je,Et)=>{(Oe.width!==je||Oe.height!==Et)&&(Oe.width=je,Oe.height=Et)},Ke=()=>{const Oe=Math.min(window.devicePixelRatio||1,1920/Math.max(1,window.innerWidth)),je=Math.round(window.innerWidth*Oe),Et=Math.round(window.innerHeight*Oe);_e(z,je,Et),_e(L,je,Et),ne&&_e(ne.work,je,Et),he&&_e(he.work,je,Et)},ke=Oe=>{const je=document.createElement("canvas");je.width=z.width,je.height=z.height;const Et=RT(Oe,je,je.getContext("2d"));return{v:Oe,r:Et,amount:-1,work:je,alpha:0,circle:-1,go:-1}},Te=Oe=>{var Ri,kn,ti,ji,Pi,_n,bn,Cn,Rn,On,Bn,qt;Be=requestAnimationFrame(Te);const je=Math.min(.1,(Oe-De)/1e3);De=Oe,Ke();const Et=g.current;ne?ne.v!==Et&&((kn=he==null?void 0:(Ri=he.r).destroy)==null||kn.call(Ri),he=ne,ne=ke(Et)):(ne=ke(Et),ne.alpha=1),ne.alpha=Math.min(1,ne.alpha+je/Ae),he&&(he.alpha=Math.max(0,he.alpha-je/Ae),he.alpha<=0&&((ji=(ti=he.r).destroy)==null||ji.call(ti),he=null));for(const ft of[ne,he])ft&&G.current&&ft.video!==G.current&&((_n=(Pi=ft.r).setVideoElement)==null||_n.call(Pi,G.current),ft.video=G.current);const _t=N.current;_t.closed+=((_t.down&&Oe-_t.down>220?1:0)-_t.closed)*Math.min(1,je*10);let Nt=Y.current;!Nt.left&&!Nt.right&&_t.on&&Oe-_t.moved<4e3&&(Nt={left:FT(_t.x,_t.y,_t.closed),right:null,clapping:Oe-_t.clapAt<120,clapIntensity:1});let yt=NT;const Ft=ge.current;if(Ft&&Q.current&&!Q.current.paused){Ft.analyser.getByteFrequencyData(Ft.data);let ft=0;for(let C=1;C<300;C++){const ie=Ft.data[C]-(Fe[C]??0);ie>0&&(ft+=ie),Fe[C]=Ft.data[C]}J+=(ft-J)*(1-Math.exp(-je*.25));let Qt=0;for(let C=1;C<=6;C++)Qt+=Ft.data[C];Qt/=6,Ce<0&&(Ce=Qt),Qt-Ce>40&&Qt-Pe>12&&Oe-ct>1e3&&(ct=Oe,pt=Math.min(1,.7+(Qt-Ce-40)/30)),Ce+=(Qt-Ce)*(1-Math.exp(-je*.6)),Pe=Qt,yt={...vT(Ft.data,Ft.ctx.sampleRate,Ft.state,.8,Date.now()),live:!0}}const Fn=new Set;for(const ft of[Nt.left,Nt.right])ft&&(ft.gesture==="fist"?Fn.add("fist"):ft.gesture==="pinch"?Fn.add("pinch"):ft.fingerCount===2?Fn.add("2 fingers"):((ft.fingerCount??0)>=5||(ft.openness??0)>.85)&&Fn.add("5 fingers"));Nt.clapping&&(ye=Oe),Oe-ye<500&&Fn.add("clap");const qn=[...Fn].sort().join("|");qn!==We&&(We=qn,Rt(Fn)),QE(je,[ST(Nt,xe,je)]),JE(0);const Tn=H.current;A.globalCompositeOperation="source-over",A.globalAlpha=1,A.fillStyle="#000",A.fillRect(0,0,L.width,L.height);for(const ft of[he,ne]){if(!ft)continue;const Qt=Tn.amounts[ft.v],C=Tn.glides[ft.v],ie=Qt+(C??0)*10;if(ft.v==="dust"){const Le=yt.live?Math.max(0,Math.min(1,(J-520)/260)):0;Ve+=((1-Le*.6)*.3-Ve)*(1-Math.exp(-je*.3)),(Math.abs(Ve-ft.circle)>.01||Math.abs(Le-ft.go)>.04||Math.abs(ie-ft.amount)>.001)&&((Cn=(bn=ft.r).setParams)==null||Cn.call(bn,{...$f(ft.v,Qt,C),"form.circle":Ve,"sound.quiet":1.6*(1-Le)+.4,"sound.beat":.12+.8*Le,"sound.sparks":.5+1.3*Le,"sound.bass":.4+.8*Le,"field.drift":1.8+.8*Le}),ft.amount=ie,ft.circle=Ve,ft.go=Le)}else if(ft.v==="sphere"){const Le=(Oe-ct)/1e3,Xe=Le<.25?1:Math.exp(-(Le-.25)*1.1);Mt+=(Xe-Mt)*(1-Math.exp(-je*(Xe>Mt?10:3)));const Ne=yt.live?Math.max(0,Math.min(1,(J-520)/260)):0,et=.32+.22*Ne,it=et+(.85-et)*Mt;(Math.abs(it-ft.circle)>.003||Math.abs(Ne-ft.go)>.008||Math.abs(ie-ft.amount)>.001)&&((On=(Rn=ft.r).setParams)==null||On.call(Rn,{...$f(ft.v,Qt,C),"shape.morph":it,"motion.flow":1+1.6*Ne,"motion.spin":.4+.5*Ne}),ft.amount=ie,ft.circle=it,ft.go=Ne)}else Math.abs(ie-ft.amount)>.001&&((qt=(Bn=ft.r).setParams)==null||qt.call(Bn,$f(ft.v,Qt,C)),ft.amount=ie);const de=Oe-ct<140&&!Nt.clapping?{...Nt,clapping:!0,clapIntensity:pt*DT[ft.v]}:Nt;ft.r.render(de,gd[ft.v].colors,yt);const oe=ft.alpha*ft.alpha*(3-2*ft.alpha),ae=Tn.hue?ft.v==="dust"||ft.v==="standby"?`sepia(1) saturate(5) hue-rotate(${Tn.hue-40}deg)`:`hue-rotate(${Tn.hue}deg)`:"";A.filter=[TT[ft.v],ae].filter(Boolean).join(" ")||"none",A.globalAlpha=oe,A.globalCompositeOperation="lighter",A.drawImage(ft.work,0,0)}A.filter="none",A.globalCompositeOperation="source-over",A.globalAlpha=1,Me.globalCompositeOperation="source-over";const ei=Tn.trail*Tn.trail*1.5,Ci=ei<.005?0:Math.exp(-je*Math.LN2/ei);Me.globalAlpha=1-Ci,Me.fillStyle="#000",Me.fillRect(0,0,z.width,z.height),Me.globalAlpha=1,Me.globalCompositeOperation=Ci>0?"lighten":"source-over",Me.drawImage(L,0,0),Me.globalCompositeOperation="source-over"};return Be=requestAnimationFrame(Te),()=>{var Oe,je,Et,_t;cancelAnimationFrame(Be),(je=ne==null?void 0:(Oe=ne.r).destroy)==null||je.call(Oe),(_t=he==null?void 0:(Et=he.r).destroy)==null||_t.call(Et)}},[]);const He=z=>{const Me=N.current;Me.x=z.clientX/window.innerWidth,Me.y=z.clientY/window.innerHeight,Me.on=!0,Me.moved=performance.now(),E!=="on"&&ve("hand")},Ze=z=>{He(z),N.current.down=performance.now()},Qe=()=>{const z=N.current,Me=performance.now()-z.down;z.down&&Me<220&&(z.clapAt=performance.now(),ve("clap")),z.down&&Me>400&&ve("fist"),z.down=0},[nt,Je]=ut.useState(!1),[lt,Rt]=ut.useState(new Set),ee=ut.useCallback(z=>{var Me,L;Y.current=z,Je(!!(z.left||z.right)),(z.left||z.right)&&ve("hand"),(((Me=z.left)==null?void 0:Me.gesture)==="fist"||((L=z.right)==null?void 0:L.gesture)==="fist")&&ve("fist"),z.clapping&&ve("clap")},[ve]),[Lt,vt]=ut.useState(()=>{const z=location.pathname.replace(/^\/+|\/+$/g,"");return["about","instrument","performances"].includes(z)?z:null});ut.useEffect(()=>{Lt==="performances"&&Q.current&&!Q.current.paused&&(Q.current.pause(),se(null))},[Lt]);const At=z=>{vt(z);try{history.replaceState(null,"","/"+(z??""))}catch{}};return be.jsxs(be.Fragment,{children:[be.jsx("canvas",{ref:s,className:"stage",onPointerMove:He,onPointerDown:Ze,onPointerUp:Qe,onPointerLeave:()=>{N.current.on=!1,N.current.down=0}}),I&&be.jsx(eT,{videoElement:I,onHandData:ee}),be.jsxs("header",{className:"top",children:[be.jsx("div",{className:"brand",children:"<N4TH>"}),be.jsx("nav",{children:["about","instrument","performances"].map(z=>be.jsx("button",{onClick:()=>At(z),children:z},z))})]}),le&&Ge&&!Lt&&!(M&&window.innerWidth<=720)&&be.jsxs("div",{className:`guide g${LT}`,style:PT(Ge.at),"data-at":Ge.at,children:[be.jsxs("span",{className:"count",children:[eh.indexOf(Ge)+1,"/",eh.length]}),be.jsx("span",{children:Ge.text}),Ge.key==="hand"&&E!=="on"&&be.jsx("button",{className:"cam",onClick:k,disabled:E==="asking",children:E==="refused"?"camera not allowed — the mouse plays":E==="asking"?"…":"allow camera"}),be.jsx("button",{className:"x",onClick:()=>we(!1),title:"Hide the guide",children:"×"})]}),be.jsxs("aside",{className:`fx ${M?"open":""}`,onPointerDown:()=>ve("fx"),children:[be.jsx("div",{className:"fxt",children:"EFFECTS"}),be.jsxs("label",{children:["Trail",be.jsx("input",{type:"range",min:0,max:1,step:.01,value:x,onChange:z=>m(+z.target.value)})]}),be.jsxs("label",{children:["Colour",be.jsx("input",{type:"range",min:0,max:360,step:1,value:_,onChange:z=>S(+z.target.value)})]}),be.jsxs("label",{children:["Amount",be.jsx("input",{type:"range",min:0,max:1,step:.01,value:T[e],onChange:z=>y(Me=>({...Me,[e]:+z.target.value}))})]}),Yh[e]&&be.jsxs("label",{children:["Glide · ",(R[e]??0).toFixed(2),be.jsx("input",{type:"range",min:0,max:3,step:.05,value:R[e]??0,onChange:z=>P(Me=>({...Me,[e]:+z.target.value}))})]})]}),be.jsxs("footer",{className:"desk",children:[be.jsx("div",{className:"cards",children:xs.map((z,Me)=>be.jsxs("button",{className:`card ${e===z.id?"on":""}`,onClick:()=>{h(z.id),z.id!=="dust"&&ve("switch")},title:z.note,children:[be.jsx("img",{src:AT[z.id],alt:""}),be.jsx("span",{className:"num",children:Me+1}),be.jsx("span",{className:"name",children:z.name})]},z.id))}),be.jsx("div",{className:"sep"}),be.jsxs("div",{className:"tracks",children:[Qr.map((z,Me)=>be.jsxs("button",{className:`track ${K===Me?"on":""}`,onClick:()=>me(Me),children:[be.jsx("span",{children:K===Me?"❚❚":"▶"})," ",z.name]},z.src)),be.jsxs("div",{className:"timeline",children:[be.jsx("input",{type:"range",min:0,max:Math.max(1,O),step:.1,value:W,onChange:z=>{const Me=Q.current,L=+z.target.value;Z(L),Me&&(Me.currentTime=L)}}),be.jsxs("span",{children:[Ng(W)," / ",Ng(O)]})]})]}),be.jsx("div",{className:"sep"}),be.jsx("button",{className:`autobtn ${r?"on":""}`,onClick:()=>o(z=>!z),title:"Auto: the track shared among the visuals, one after the other",children:"auto"}),be.jsx("button",{className:`fxbtn ${M?"on":""}`,onClick:()=>{w(z=>!z),ve("fx")},children:"FX"}),be.jsx("button",{className:`camera ${E==="on"?"on":""}`,onClick:E==="on"?void 0:k,title:"Play with your hand through the camera",children:E==="on"?be.jsxs(be.Fragment,{children:[be.jsx("span",{className:`dot ${nt?"seen":""}`,children:"●"})," hand"]}):E==="refused"?"mouse":"camera"}),be.jsx("div",{className:"words",children:UT.map(z=>be.jsx("span",{className:lt.has(z)?"lit":"",children:z},z))})]}),Lt&&be.jsx(wT,{page:Lt,onClose:()=>At(null),onGo:At})]})}__.createRoot(document.getElementById("root")).render(be.jsx(ut.StrictMode,{children:be.jsx(kT,{})}));
