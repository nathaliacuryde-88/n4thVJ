var l_=Object.defineProperty;var c_=(s,e,t)=>e in s?l_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var B=(s,e,t)=>c_(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var tf={exports:{}},sa={},nf={exports:{}},Dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function u_(){if(Om)return Dt;Om=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function m(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function y(N,j,Ee){this.props=N,this.context=j,this.refs=T,this.updater=Ee||_}y.prototype.isReactComponent={},y.prototype.setState=function(N,j){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,j,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function M(){}M.prototype=y.prototype;function w(N,j,Ee){this.props=N,this.context=j,this.refs=T,this.updater=Ee||_}var P=w.prototype=new M;P.constructor=w,S(P,y.prototype),P.isPureReactComponent=!0;var R=Array.isArray,z=Object.prototype.hasOwnProperty,I={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function E(N,j,Ee){var Se,de={},K=null,ce=null;if(j!=null)for(Se in j.ref!==void 0&&(ce=j.ref),j.key!==void 0&&(K=""+j.key),j)z.call(j,Se)&&!O.hasOwnProperty(Se)&&(de[Se]=j[Se]);var oe=arguments.length-2;if(oe===1)de.children=Ee;else if(1<oe){for(var Ae=Array(oe),be=0;be<oe;be++)Ae[be]=arguments[be+2];de.children=Ae}if(N&&N.defaultProps)for(Se in oe=N.defaultProps,oe)de[Se]===void 0&&(de[Se]=oe[Se]);return{$$typeof:s,type:N,key:K,ref:ce,props:de,_owner:I.current}}function U(N,j){return{$$typeof:s,type:N.type,key:j,ref:N.ref,props:N.props,_owner:N._owner}}function q(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function H(N){var j={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ee){return j[Ee]})}var D=/\/+/g;function W(N,j){return typeof N=="object"&&N!==null&&N.key!=null?H(""+N.key):j.toString(36)}function $(N,j,Ee,Se,de){var K=typeof N;(K==="undefined"||K==="boolean")&&(N=null);var ce=!1;if(N===null)ce=!0;else switch(K){case"string":case"number":ce=!0;break;case"object":switch(N.$$typeof){case s:case e:ce=!0}}if(ce)return ce=N,de=de(ce),N=Se===""?"."+W(ce,0):Se,R(de)?(Ee="",N!=null&&(Ee=N.replace(D,"$&/")+"/"),$(de,j,Ee,"",function(be){return be})):de!=null&&(q(de)&&(de=U(de,Ee+(!de.key||ce&&ce.key===de.key?"":(""+de.key).replace(D,"$&/")+"/")+N)),j.push(de)),1;if(ce=0,Se=Se===""?".":Se+":",R(N))for(var oe=0;oe<N.length;oe++){K=N[oe];var Ae=Se+W(K,oe);ce+=$(K,j,Ee,Ae,de)}else if(Ae=m(N),typeof Ae=="function")for(N=Ae.call(N),oe=0;!(K=N.next()).done;)K=K.value,Ae=Se+W(K,oe++),ce+=$(K,j,Ee,Ae,de);else if(K==="object")throw j=String(N),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return ce}function G(N,j,Ee){if(N==null)return N;var Se=[],de=0;return $(N,Se,"","",function(K){return j.call(Ee,K,de++)}),Se}function ie(N){if(N._status===-1){var j=N._result;j=j(),j.then(function(Ee){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ee)},function(Ee){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ee)}),N._status===-1&&(N._status=0,N._result=j)}if(N._status===1)return N._result.default;throw N._result}var X={current:null},F={transition:null},k={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:F,ReactCurrentOwner:I};function te(){throw Error("act(...) is not supported in production builds of React.")}return Dt.Children={map:G,forEach:function(N,j,Ee){G(N,function(){j.apply(this,arguments)},Ee)},count:function(N){var j=0;return G(N,function(){j++}),j},toArray:function(N){return G(N,function(j){return j})||[]},only:function(N){if(!q(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Dt.Component=y,Dt.Fragment=t,Dt.Profiler=o,Dt.PureComponent=w,Dt.StrictMode=r,Dt.Suspense=d,Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k,Dt.act=te,Dt.cloneElement=function(N,j,Ee){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Se=S({},N.props),de=N.key,K=N.ref,ce=N._owner;if(j!=null){if(j.ref!==void 0&&(K=j.ref,ce=I.current),j.key!==void 0&&(de=""+j.key),N.type&&N.type.defaultProps)var oe=N.type.defaultProps;for(Ae in j)z.call(j,Ae)&&!O.hasOwnProperty(Ae)&&(Se[Ae]=j[Ae]===void 0&&oe!==void 0?oe[Ae]:j[Ae])}var Ae=arguments.length-2;if(Ae===1)Se.children=Ee;else if(1<Ae){oe=Array(Ae);for(var be=0;be<Ae;be++)oe[be]=arguments[be+2];Se.children=oe}return{$$typeof:s,type:N.type,key:de,ref:K,props:Se,_owner:ce}},Dt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},Dt.createElement=E,Dt.createFactory=function(N){var j=E.bind(null,N);return j.type=N,j},Dt.createRef=function(){return{current:null}},Dt.forwardRef=function(N){return{$$typeof:f,render:N}},Dt.isValidElement=q,Dt.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:ie}},Dt.memo=function(N,j){return{$$typeof:h,type:N,compare:j===void 0?null:j}},Dt.startTransition=function(N){var j=F.transition;F.transition={};try{N()}finally{F.transition=j}},Dt.unstable_act=te,Dt.useCallback=function(N,j){return X.current.useCallback(N,j)},Dt.useContext=function(N){return X.current.useContext(N)},Dt.useDebugValue=function(){},Dt.useDeferredValue=function(N){return X.current.useDeferredValue(N)},Dt.useEffect=function(N,j){return X.current.useEffect(N,j)},Dt.useId=function(){return X.current.useId()},Dt.useImperativeHandle=function(N,j,Ee){return X.current.useImperativeHandle(N,j,Ee)},Dt.useInsertionEffect=function(N,j){return X.current.useInsertionEffect(N,j)},Dt.useLayoutEffect=function(N,j){return X.current.useLayoutEffect(N,j)},Dt.useMemo=function(N,j){return X.current.useMemo(N,j)},Dt.useReducer=function(N,j,Ee){return X.current.useReducer(N,j,Ee)},Dt.useRef=function(N){return X.current.useRef(N)},Dt.useState=function(N){return X.current.useState(N)},Dt.useSyncExternalStore=function(N,j,Ee){return X.current.useSyncExternalStore(N,j,Ee)},Dt.useTransition=function(){return X.current.useTransition()},Dt.version="18.3.1",Dt}var Bm;function Yh(){return Bm||(Bm=1,nf.exports=u_()),nf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function f_(){if(zm)return sa;zm=1;var s=Yh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,h){var g,x={},m=null,_=null;h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(_=d.ref);for(g in d)r.call(d,g)&&!l.hasOwnProperty(g)&&(x[g]=d[g]);if(f&&f.defaultProps)for(g in d=f.defaultProps,d)x[g]===void 0&&(x[g]=d[g]);return{$$typeof:e,type:f,key:m,ref:_,props:x,_owner:o.current}}return sa.Fragment=t,sa.jsx=c,sa.jsxs=c,sa}var Hm;function h_(){return Hm||(Hm=1,tf.exports=f_()),tf.exports}var Re=h_(),pt=Yh(),Tl={},rf={exports:{}},oi={},sf={exports:{}},of={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function d_(){return Vm||(Vm=1,(function(s){function e(F,k){var te=F.length;F.push(k);e:for(;0<te;){var N=te-1>>>1,j=F[N];if(0<o(j,k))F[N]=k,F[te]=j,te=N;else break e}}function t(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var k=F[0],te=F.pop();if(te!==k){F[0]=te;e:for(var N=0,j=F.length,Ee=j>>>1;N<Ee;){var Se=2*(N+1)-1,de=F[Se],K=Se+1,ce=F[K];if(0>o(de,te))K<j&&0>o(ce,de)?(F[N]=ce,F[K]=te,N=K):(F[N]=de,F[Se]=te,N=Se);else if(K<j&&0>o(ce,te))F[N]=ce,F[K]=te,N=K;else break e}}return k}function o(F,k){var te=F.sortIndex-k.sortIndex;return te!==0?te:F.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var d=[],h=[],g=1,x=null,m=3,_=!1,S=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(F){for(var k=t(h);k!==null;){if(k.callback===null)r(h);else if(k.startTime<=F)r(h),k.sortIndex=k.expirationTime,e(d,k);else break;k=t(h)}}function R(F){if(T=!1,P(F),!S)if(t(d)!==null)S=!0,ie(z);else{var k=t(h);k!==null&&X(R,k.startTime-F)}}function z(F,k){S=!1,T&&(T=!1,M(E),E=-1),_=!0;var te=m;try{for(P(k),x=t(d);x!==null&&(!(x.expirationTime>k)||F&&!H());){var N=x.callback;if(typeof N=="function"){x.callback=null,m=x.priorityLevel;var j=N(x.expirationTime<=k);k=s.unstable_now(),typeof j=="function"?x.callback=j:x===t(d)&&r(d),P(k)}else r(d);x=t(d)}if(x!==null)var Ee=!0;else{var Se=t(h);Se!==null&&X(R,Se.startTime-k),Ee=!1}return Ee}finally{x=null,m=te,_=!1}}var I=!1,O=null,E=-1,U=5,q=-1;function H(){return!(s.unstable_now()-q<U)}function D(){if(O!==null){var F=s.unstable_now();q=F;var k=!0;try{k=O(!0,F)}finally{k?W():(I=!1,O=null)}}else I=!1}var W;if(typeof w=="function")W=function(){w(D)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,G=$.port2;$.port1.onmessage=D,W=function(){G.postMessage(null)}}else W=function(){y(D,0)};function ie(F){O=F,I||(I=!0,W())}function X(F,k){E=y(function(){F(s.unstable_now())},k)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_continueExecution=function(){S||_||(S=!0,ie(z))},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return m},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(F){switch(m){case 1:case 2:case 3:var k=3;break;default:k=m}var te=m;m=k;try{return F()}finally{m=te}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(F,k){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var te=m;m=F;try{return k()}finally{m=te}},s.unstable_scheduleCallback=function(F,k,te){var N=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?N+te:N):te=N,F){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=te+j,F={id:g++,callback:k,priorityLevel:F,startTime:te,expirationTime:j,sortIndex:-1},te>N?(F.sortIndex=te,e(h,F),t(d)===null&&F===t(h)&&(T?(M(E),E=-1):T=!0,X(R,te-N))):(F.sortIndex=j,e(d,F),S||_||(S=!0,ie(z))),F},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(F){var k=m;return function(){var te=m;m=k;try{return F.apply(this,arguments)}finally{m=te}}}})(of)),of}var Gm;function p_(){return Gm||(Gm=1,sf.exports=d_()),sf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function m_(){if(Wm)return oi;Wm=1;var s=Yh(),e=p_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function m(n){return d.call(x,n)?!0:d.call(g,n)?!1:h.test(n)?x[n]=!0:(g[n]=!0,!1)}function _(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function S(n,i,a,u){if(i===null||typeof i>"u"||_(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,a,u,p,v,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=v,this.removeEmptyString=b}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function w(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(M,w);y[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(M,w);y[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(M,w);y[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,u){var p=y.hasOwnProperty(i)?y[i]:null;(p!==null?p.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(S(i,a,p,u)&&(a=null),u||p===null?m(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(i=p.attributeName,u=p.attributeNamespace,a===null?n.removeAttribute(i):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),H=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),F=Symbol.iterator;function k(n){return n===null||typeof n!="object"?null:(n=F&&n[F]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,N;function j(n){if(N===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var Ee=!1;function Se(n,i){if(!n||Ee)return"";Ee=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(me){var u=me}Reflect.construct(n,[],i)}else{try{i.call()}catch(me){u=me}n.call(i.prototype)}else{try{throw Error()}catch(me){u=me}n()}}catch(me){if(me&&u&&typeof me.stack=="string"){for(var p=me.stack.split(`
`),v=u.stack.split(`
`),b=p.length-1,V=v.length-1;1<=b&&0<=V&&p[b]!==v[V];)V--;for(;1<=b&&0<=V;b--,V--)if(p[b]!==v[V]){if(b!==1||V!==1)do if(b--,V--,0>V||p[b]!==v[V]){var Z=`
`+p[b].replace(" at new "," at ");return n.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",n.displayName)),Z}while(1<=b&&0<=V);break}}}finally{Ee=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?j(n):""}function de(n){switch(n.tag){case 5:return j(n.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return n=Se(n.type,!1),n;case 11:return n=Se(n.type.render,!1),n;case 1:return n=Se(n.type,!0),n;default:return""}}function K(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case I:return"Portal";case U:return"Profiler";case E:return"StrictMode";case W:return"Suspense";case $:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case q:return(n._context.displayName||"Context")+".Provider";case D:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case G:return i=n.displayName||null,i!==null?i:K(n.type)||"Memo";case ie:i=n._payload,n=n._init;try{return K(n(i))}catch{}}return null}function ce(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return K(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function oe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ae(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function be(n){var i=Ae(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,v=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(b){u=""+b,v.call(this,b)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(b){u=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ve(n){n._valueTracker||(n._valueTracker=be(n))}function Ye(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Ae(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function Oe(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Je(n,i){var a=i.checked;return te({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Qe(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=oe(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function st(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function Ze(n,i){st(n,i);var a=oe(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?St(n,i.type,a):i.hasOwnProperty("defaultValue")&&St(n,i.type,oe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function dt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function St(n,i,a){(i!=="number"||Oe(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Q=Array.isArray;function ft(n,i,a,u){if(n=n.options,i){i={};for(var p=0;p<a.length;p++)i["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=i.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&u&&(n[a].defaultSelected=!0)}else{for(a=""+oe(a),i=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function pe(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ce(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Q(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:oe(a)}}function le(n,i){var a=oe(i.value),u=oe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function nt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function L(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function A(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?L(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var se,ye=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,p){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,p)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(se=se||document.createElement("div"),se.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=se.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Te(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ne={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},He=["Webkit","ms","Moz","O"];Object.keys(Ne).forEach(function(n){He.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ne[i]=Ne[n]})});function ge(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ne.hasOwnProperty(n)&&Ne[n]?(""+i).trim():i+"px"}function Me(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,p=ge(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,p):n[a]=p}}var Ve=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ge(n,i){if(i){if(Ve[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ie(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Le=null;function ht(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var gt=null,Et=null,Y=null;function ke(n){if(n=Wo(n)){if(typeof gt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ha(i),gt(n.stateNode,n.type,i))}}function _e(n){Et?Y?Y.push(n):Y=[n]:Et=n}function Xe(){if(Et){var n=Et,i=Y;if(Y=Et=null,ke(n),i)for(n=0;n<i.length;n++)ke(i[n])}}function we(n,i){return n(i)}function xe(){}var We=!1;function ct(n,i,a){if(We)return n(i,a);We=!0;try{return we(n,i,a)}finally{We=!1,(Et!==null||Y!==null)&&(xe(),Xe())}}function Lt(n,i){var a=n.stateNode;if(a===null)return null;var u=Ha(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ct=!1;if(f)try{var Ft={};Object.defineProperty(Ft,"passive",{get:function(){Ct=!0}}),window.addEventListener("test",Ft,Ft),window.removeEventListener("test",Ft,Ft)}catch{Ct=!1}function yt(n,i,a,u,p,v,b,V,Z){var me=Array.prototype.slice.call(arguments,3);try{i.apply(a,me)}catch(De){this.onError(De)}}var Yt=!1,jn=null,Kn=!1,vi=null,$n={onError:function(n){Yt=!0,jn=n}};function Ci(n,i,a,u,p,v,b,V,Z){Yt=!1,jn=null,yt.apply($n,arguments)}function Ri(n,i,a,u,p,v,b,V,Z){if(Ci.apply(this,arguments),Yt){if(Yt){var me=jn;Yt=!1,jn=null}else throw Error(t(198));Kn||(Kn=!0,vi=me)}}function Fn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ei(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ki(n){if(Fn(n)!==n)throw Error(t(188))}function Pi(n){var i=n.alternate;if(!i){if(i=Fn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var p=a.return;if(p===null)break;var v=p.alternate;if(v===null){if(u=p.return,u!==null){a=u;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===a)return Ki(p),n;if(v===u)return Ki(p),i;v=v.sibling}throw Error(t(188))}if(a.return!==u.return)a=p,u=v;else{for(var b=!1,V=p.child;V;){if(V===a){b=!0,a=p,u=v;break}if(V===u){b=!0,u=p,a=v;break}V=V.sibling}if(!b){for(V=v.child;V;){if(V===a){b=!0,a=v,u=p;break}if(V===u){b=!0,u=v,a=p;break}V=V.sibling}if(!b)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function yn(n){return n=Pi(n),n!==null?bn(n):null}function bn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=bn(n);if(i!==null)return i;n=n.sibling}return null}var Cn=e.unstable_scheduleCallback,Rn=e.unstable_cancelCallback,kn=e.unstable_shouldYield,ot=e.unstable_requestPaint,wt=e.unstable_now,dn=e.unstable_getCurrentPriorityLevel,pn=e.unstable_ImmediatePriority,C=e.unstable_UserBlockingPriority,ee=e.unstable_NormalPriority,he=e.unstable_LowPriority,re=e.unstable_IdlePriority,ae=null,Fe=null;function je(n){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(ae,n,void 0,(n.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:mt,it=Math.log,at=Math.LN2;function mt(n){return n>>>=0,n===0?32:31-(it(n)/at|0)|0}var vt=64,et=4194304;function Rt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ot(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,p=n.suspendedLanes,v=n.pingedLanes,b=a&268435455;if(b!==0){var V=b&~p;V!==0?u=Rt(V):(v&=b,v!==0&&(u=Rt(v)))}else b=a&~p,b!==0?u=Rt(b):v!==0&&(u=Rt(v));if(u===0)return 0;if(i!==0&&i!==u&&(i&p)===0&&(p=u&-u,v=i&-i,p>=v||p===16&&(v&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Be(i),p=1<<a,u|=n[a],i&=~p;return u}function jt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var b=31-Be(v),V=1<<b,Z=p[b];Z===-1?((V&a)===0||(V&u)!==0)&&(p[b]=jt(V,i)):Z<=i&&(n.expiredLanes|=V),v&=~V}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ke(){var n=vt;return vt<<=1,(vt&4194240)===0&&(vt=64),n}function un(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Pt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Be(i),n[i]=a}function Pn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-Be(a),v=1<<p;i[p]=0,u[p]=-1,n[p]=-1,a&=~v}}function Ln(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Be(a),p=1<<u;p&i|n[u]&i&&(n[u]|=i),a&=~p}}var bt=0;function ci(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Bt,Qt,Mn,Ht,Li,qi=!1,ts=[],wr=null,Tr=null,br=null,Co=new Map,Ro=new Map,Cr=[],Pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Md(n,i){switch(n){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Co.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(i.pointerId)}}function Po(n,i,a,u,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:v,targetContainers:[p]},i!==null&&(i=Wo(i),i!==null&&Qt(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function Lv(n,i,a,u,p){switch(i){case"focusin":return wr=Po(wr,n,i,a,u,p),!0;case"dragenter":return Tr=Po(Tr,n,i,a,u,p),!0;case"mouseover":return br=Po(br,n,i,a,u,p),!0;case"pointerover":var v=p.pointerId;return Co.set(v,Po(Co.get(v)||null,n,i,a,u,p)),!0;case"gotpointercapture":return v=p.pointerId,Ro.set(v,Po(Ro.get(v)||null,n,i,a,u,p)),!0}return!1}function Sd(n){var i=ns(n.target);if(i!==null){var a=Fn(i);if(a!==null){if(i=a.tag,i===13){if(i=ei(a),i!==null){n.blockedOn=i,Li(n.priority,function(){Mn(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ba(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Cc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Le=u,a.target.dispatchEvent(u),Le=null}else return i=Wo(a),i!==null&&Qt(i),n.blockedOn=a,!1;i.shift()}return!0}function Ad(n,i,a){ba(n)&&a.delete(i)}function Iv(){qi=!1,wr!==null&&ba(wr)&&(wr=null),Tr!==null&&ba(Tr)&&(Tr=null),br!==null&&ba(br)&&(br=null),Co.forEach(Ad),Ro.forEach(Ad)}function Lo(n,i){n.blockedOn===i&&(n.blockedOn=null,qi||(qi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Iv)))}function Io(n){function i(p){return Lo(p,n)}if(0<ts.length){Lo(ts[0],n);for(var a=1;a<ts.length;a++){var u=ts[a];u.blockedOn===n&&(u.blockedOn=null)}}for(wr!==null&&Lo(wr,n),Tr!==null&&Lo(Tr,n),br!==null&&Lo(br,n),Co.forEach(i),Ro.forEach(i),a=0;a<Cr.length;a++)u=Cr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Cr.length&&(a=Cr[0],a.blockedOn===null);)Sd(a),a.blockedOn===null&&Cr.shift()}var Ps=R.ReactCurrentBatchConfig,Ca=!0;function Dv(n,i,a,u){var p=bt,v=Ps.transition;Ps.transition=null;try{bt=1,bc(n,i,a,u)}finally{bt=p,Ps.transition=v}}function Uv(n,i,a,u){var p=bt,v=Ps.transition;Ps.transition=null;try{bt=4,bc(n,i,a,u)}finally{bt=p,Ps.transition=v}}function bc(n,i,a,u){if(Ca){var p=Cc(n,i,a,u);if(p===null)Xc(n,i,u,Ra,a),Md(n,u);else if(Lv(p,n,i,a,u))u.stopPropagation();else if(Md(n,u),i&4&&-1<Pv.indexOf(n)){for(;p!==null;){var v=Wo(p);if(v!==null&&Bt(v),v=Cc(n,i,a,u),v===null&&Xc(n,i,u,Ra,a),v===p)break;p=v}p!==null&&u.stopPropagation()}else Xc(n,i,u,null,a)}}var Ra=null;function Cc(n,i,a,u){if(Ra=null,n=ht(u),n=ns(n),n!==null)if(i=Fn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ei(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ra=n,null}function Ed(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dn()){case pn:return 1;case C:return 4;case ee:case he:return 16;case re:return 536870912;default:return 16}default:return 16}}var Rr=null,Rc=null,Pa=null;function wd(){if(Pa)return Pa;var n,i=Rc,a=i.length,u,p="value"in Rr?Rr.value:Rr.textContent,v=p.length;for(n=0;n<a&&i[n]===p[n];n++);var b=a-n;for(u=1;u<=b&&i[a-u]===p[v-u];u++);return Pa=p.slice(n,1<u?1-u:void 0)}function La(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ia(){return!0}function Td(){return!1}function ui(n){function i(a,u,p,v,b){this._reactName=a,this._targetInst=p,this.type=u,this.nativeEvent=v,this.target=b,this.currentTarget=null;for(var V in n)n.hasOwnProperty(V)&&(a=n[V],this[V]=a?a(v):v[V]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ia:Td,this.isPropagationStopped=Td,this}return te(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),i}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pc=ui(Ls),Do=te({},Ls,{view:0,detail:0}),Nv=ui(Do),Lc,Ic,Uo,Da=te({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Uo&&(Uo&&n.type==="mousemove"?(Lc=n.screenX-Uo.screenX,Ic=n.screenY-Uo.screenY):Ic=Lc=0,Uo=n),Lc)},movementY:function(n){return"movementY"in n?n.movementY:Ic}}),bd=ui(Da),Fv=te({},Da,{dataTransfer:0}),kv=ui(Fv),Ov=te({},Do,{relatedTarget:0}),Dc=ui(Ov),Bv=te({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),zv=ui(Bv),Hv=te({},Ls,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Vv=ui(Hv),Gv=te({},Ls,{data:0}),Cd=ui(Gv),Wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=jv[n])?!!i[n]:!1}function Uc(){return Kv}var qv=te({},Do,{key:function(n){if(n.key){var i=Wv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=La(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Xv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(n){return n.type==="keypress"?La(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?La(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Yv=ui(qv),Qv=te({},Da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rd=ui(Qv),Jv=te({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),Zv=ui(Jv),$v=te({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),ex=ui($v),tx=te({},Da,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),nx=ui(tx),ix=[9,13,27,32],Nc=f&&"CompositionEvent"in window,No=null;f&&"documentMode"in document&&(No=document.documentMode);var rx=f&&"TextEvent"in window&&!No,Pd=f&&(!Nc||No&&8<No&&11>=No),Ld=" ",Id=!1;function Dd(n,i){switch(n){case"keyup":return ix.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ud(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Is=!1;function sx(n,i){switch(n){case"compositionend":return Ud(i);case"keypress":return i.which!==32?null:(Id=!0,Ld);case"textInput":return n=i.data,n===Ld&&Id?null:n;default:return null}}function ox(n,i){if(Is)return n==="compositionend"||!Nc&&Dd(n,i)?(n=wd(),Pa=Rc=Rr=null,Is=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Pd&&i.locale!=="ko"?null:i.data;default:return null}}var ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!ax[n.type]:i==="textarea"}function Fd(n,i,a,u){_e(u),i=Oa(i,"onChange"),0<i.length&&(a=new Pc("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Fo=null,ko=null;function lx(n){ep(n,0)}function Ua(n){var i=ks(n);if(Ye(i))return n}function cx(n,i){if(n==="change")return i}var kd=!1;if(f){var Fc;if(f){var kc="oninput"in document;if(!kc){var Od=document.createElement("div");Od.setAttribute("oninput","return;"),kc=typeof Od.oninput=="function"}Fc=kc}else Fc=!1;kd=Fc&&(!document.documentMode||9<document.documentMode)}function Bd(){Fo&&(Fo.detachEvent("onpropertychange",zd),ko=Fo=null)}function zd(n){if(n.propertyName==="value"&&Ua(ko)){var i=[];Fd(i,ko,n,ht(n)),ct(lx,i)}}function ux(n,i,a){n==="focusin"?(Bd(),Fo=i,ko=a,Fo.attachEvent("onpropertychange",zd)):n==="focusout"&&Bd()}function fx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ua(ko)}function hx(n,i){if(n==="click")return Ua(i)}function dx(n,i){if(n==="input"||n==="change")return Ua(i)}function px(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ii=typeof Object.is=="function"?Object.is:px;function Oo(n,i){if(Ii(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var p=a[u];if(!d.call(i,p)||!Ii(n[p],i[p]))return!1}return!0}function Hd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Vd(n,i){var a=Hd(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Hd(a)}}function Gd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Gd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Wd(){for(var n=window,i=Oe();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Oe(n.document)}return i}function Oc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function mx(n){var i=Wd(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Gd(a.ownerDocument.documentElement,a)){if(u!==null&&Oc(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,v=Math.min(u.start,p);u=u.end===void 0?v:Math.min(u.end,p),!n.extend&&v>u&&(p=u,u=v,v=p),p=Vd(a,v);var b=Vd(a,u);p&&b&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),n.removeAllRanges(),v>u?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var gx=f&&"documentMode"in document&&11>=document.documentMode,Ds=null,Bc=null,Bo=null,zc=!1;function Xd(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;zc||Ds==null||Ds!==Oe(u)||(u=Ds,"selectionStart"in u&&Oc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Bo&&Oo(Bo,u)||(Bo=u,u=Oa(Bc,"onSelect"),0<u.length&&(i=new Pc("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=Ds)))}function Na(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Us={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},Hc={},jd={};f&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Fa(n){if(Hc[n])return Hc[n];if(!Us[n])return n;var i=Us[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in jd)return Hc[n]=i[a];return n}var Kd=Fa("animationend"),qd=Fa("animationiteration"),Yd=Fa("animationstart"),Qd=Fa("transitionend"),Jd=new Map,Zd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(n,i){Jd.set(n,i),l(i,[n])}for(var Vc=0;Vc<Zd.length;Vc++){var Gc=Zd[Vc],vx=Gc.toLowerCase(),xx=Gc[0].toUpperCase()+Gc.slice(1);Pr(vx,"on"+xx)}Pr(Kd,"onAnimationEnd"),Pr(qd,"onAnimationIteration"),Pr(Yd,"onAnimationStart"),Pr("dblclick","onDoubleClick"),Pr("focusin","onFocus"),Pr("focusout","onBlur"),Pr(Qd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_x=new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));function $d(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,Ri(u,i,void 0,n),n.currentTarget=null}function ep(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],p=u.event;u=u.listeners;e:{var v=void 0;if(i)for(var b=u.length-1;0<=b;b--){var V=u[b],Z=V.instance,me=V.currentTarget;if(V=V.listener,Z!==v&&p.isPropagationStopped())break e;$d(p,V,me),v=Z}else for(b=0;b<u.length;b++){if(V=u[b],Z=V.instance,me=V.currentTarget,V=V.listener,Z!==v&&p.isPropagationStopped())break e;$d(p,V,me),v=Z}}}if(Kn)throw n=vi,Kn=!1,vi=null,n}function Zt(n,i){var a=i[Jc];a===void 0&&(a=i[Jc]=new Set);var u=n+"__bubble";a.has(u)||(tp(i,n,2,!1),a.add(u))}function Wc(n,i,a){var u=0;i&&(u|=4),tp(a,n,u,i)}var ka="_reactListening"+Math.random().toString(36).slice(2);function Ho(n){if(!n[ka]){n[ka]=!0,r.forEach(function(a){a!=="selectionchange"&&(_x.has(a)||Wc(a,!1,n),Wc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ka]||(i[ka]=!0,Wc("selectionchange",!1,i))}}function tp(n,i,a,u){switch(Ed(i)){case 1:var p=Dv;break;case 4:p=Uv;break;default:p=bc}a=p.bind(null,i,a,n),p=void 0,!Ct||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(i,a,{capture:!0,passive:p}):n.addEventListener(i,a,!0):p!==void 0?n.addEventListener(i,a,{passive:p}):n.addEventListener(i,a,!1)}function Xc(n,i,a,u,p){var v=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var b=u.tag;if(b===3||b===4){var V=u.stateNode.containerInfo;if(V===p||V.nodeType===8&&V.parentNode===p)break;if(b===4)for(b=u.return;b!==null;){var Z=b.tag;if((Z===3||Z===4)&&(Z=b.stateNode.containerInfo,Z===p||Z.nodeType===8&&Z.parentNode===p))return;b=b.return}for(;V!==null;){if(b=ns(V),b===null)return;if(Z=b.tag,Z===5||Z===6){u=v=b;continue e}V=V.parentNode}}u=u.return}ct(function(){var me=v,De=ht(a),Ue=[];e:{var Pe=Jd.get(n);if(Pe!==void 0){var $e=Pc,rt=n;switch(n){case"keypress":if(La(a)===0)break e;case"keydown":case"keyup":$e=Yv;break;case"focusin":rt="focus",$e=Dc;break;case"focusout":rt="blur",$e=Dc;break;case"beforeblur":case"afterblur":$e=Dc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$e=bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$e=kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$e=Zv;break;case Kd:case qd:case Yd:$e=zv;break;case Qd:$e=ex;break;case"scroll":$e=Nv;break;case"wheel":$e=nx;break;case"copy":case"cut":case"paste":$e=Vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$e=Rd}var lt=(i&4)!==0,ln=!lt&&n==="scroll",ue=lt?Pe!==null?Pe+"Capture":null:Pe;lt=[];for(var ne=me,fe;ne!==null;){fe=ne;var ze=fe.stateNode;if(fe.tag===5&&ze!==null&&(fe=ze,ue!==null&&(ze=Lt(ne,ue),ze!=null&&lt.push(Vo(ne,ze,fe)))),ln)break;ne=ne.return}0<lt.length&&(Pe=new $e(Pe,rt,null,a,De),Ue.push({event:Pe,listeners:lt}))}}if((i&7)===0){e:{if(Pe=n==="mouseover"||n==="pointerover",$e=n==="mouseout"||n==="pointerout",Pe&&a!==Le&&(rt=a.relatedTarget||a.fromElement)&&(ns(rt)||rt[ar]))break e;if(($e||Pe)&&(Pe=De.window===De?De:(Pe=De.ownerDocument)?Pe.defaultView||Pe.parentWindow:window,$e?(rt=a.relatedTarget||a.toElement,$e=me,rt=rt?ns(rt):null,rt!==null&&(ln=Fn(rt),rt!==ln||rt.tag!==5&&rt.tag!==6)&&(rt=null)):($e=null,rt=me),$e!==rt)){if(lt=bd,ze="onMouseLeave",ue="onMouseEnter",ne="mouse",(n==="pointerout"||n==="pointerover")&&(lt=Rd,ze="onPointerLeave",ue="onPointerEnter",ne="pointer"),ln=$e==null?Pe:ks($e),fe=rt==null?Pe:ks(rt),Pe=new lt(ze,ne+"leave",$e,a,De),Pe.target=ln,Pe.relatedTarget=fe,ze=null,ns(De)===me&&(lt=new lt(ue,ne+"enter",rt,a,De),lt.target=fe,lt.relatedTarget=ln,ze=lt),ln=ze,$e&&rt)t:{for(lt=$e,ue=rt,ne=0,fe=lt;fe;fe=Ns(fe))ne++;for(fe=0,ze=ue;ze;ze=Ns(ze))fe++;for(;0<ne-fe;)lt=Ns(lt),ne--;for(;0<fe-ne;)ue=Ns(ue),fe--;for(;ne--;){if(lt===ue||ue!==null&&lt===ue.alternate)break t;lt=Ns(lt),ue=Ns(ue)}lt=null}else lt=null;$e!==null&&np(Ue,Pe,$e,lt,!1),rt!==null&&ln!==null&&np(Ue,ln,rt,lt,!0)}}e:{if(Pe=me?ks(me):window,$e=Pe.nodeName&&Pe.nodeName.toLowerCase(),$e==="select"||$e==="input"&&Pe.type==="file")var ut=cx;else if(Nd(Pe))if(kd)ut=dx;else{ut=fx;var xt=ux}else($e=Pe.nodeName)&&$e.toLowerCase()==="input"&&(Pe.type==="checkbox"||Pe.type==="radio")&&(ut=hx);if(ut&&(ut=ut(n,me))){Fd(Ue,ut,a,De);break e}xt&&xt(n,Pe,me),n==="focusout"&&(xt=Pe._wrapperState)&&xt.controlled&&Pe.type==="number"&&St(Pe,"number",Pe.value)}switch(xt=me?ks(me):window,n){case"focusin":(Nd(xt)||xt.contentEditable==="true")&&(Ds=xt,Bc=me,Bo=null);break;case"focusout":Bo=Bc=Ds=null;break;case"mousedown":zc=!0;break;case"contextmenu":case"mouseup":case"dragend":zc=!1,Xd(Ue,a,De);break;case"selectionchange":if(gx)break;case"keydown":case"keyup":Xd(Ue,a,De)}var _t;if(Nc)e:{switch(n){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else Is?Dd(n,a)&&(At="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(At="onCompositionStart");At&&(Pd&&a.locale!=="ko"&&(Is||At!=="onCompositionStart"?At==="onCompositionEnd"&&Is&&(_t=wd()):(Rr=De,Rc="value"in Rr?Rr.value:Rr.textContent,Is=!0)),xt=Oa(me,At),0<xt.length&&(At=new Cd(At,n,null,a,De),Ue.push({event:At,listeners:xt}),_t?At.data=_t:(_t=Ud(a),_t!==null&&(At.data=_t)))),(_t=rx?sx(n,a):ox(n,a))&&(me=Oa(me,"onBeforeInput"),0<me.length&&(De=new Cd("onBeforeInput","beforeinput",null,a,De),Ue.push({event:De,listeners:me}),De.data=_t))}ep(Ue,i)})}function Vo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Oa(n,i){for(var a=i+"Capture",u=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=Lt(n,a),v!=null&&u.unshift(Vo(n,v,p)),v=Lt(n,i),v!=null&&u.push(Vo(n,v,p))),n=n.return}return u}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function np(n,i,a,u,p){for(var v=i._reactName,b=[];a!==null&&a!==u;){var V=a,Z=V.alternate,me=V.stateNode;if(Z!==null&&Z===u)break;V.tag===5&&me!==null&&(V=me,p?(Z=Lt(a,v),Z!=null&&b.unshift(Vo(a,Z,V))):p||(Z=Lt(a,v),Z!=null&&b.push(Vo(a,Z,V)))),a=a.return}b.length!==0&&n.push({event:i,listeners:b})}var yx=/\r\n?/g,Mx=/\u0000|\uFFFD/g;function ip(n){return(typeof n=="string"?n:""+n).replace(yx,`
`).replace(Mx,"")}function Ba(n,i,a){if(i=ip(i),ip(n)!==i&&a)throw Error(t(425))}function za(){}var jc=null,Kc=null;function qc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Yc=typeof setTimeout=="function"?setTimeout:void 0,Sx=typeof clearTimeout=="function"?clearTimeout:void 0,rp=typeof Promise=="function"?Promise:void 0,Ax=typeof queueMicrotask=="function"?queueMicrotask:typeof rp<"u"?function(n){return rp.resolve(null).then(n).catch(Ex)}:Yc;function Ex(n){setTimeout(function(){throw n})}function Qc(n,i){var a=i,u=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(u===0){n.removeChild(p),Io(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=p}while(a);Io(i)}function Lr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function sp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Yi="__reactFiber$"+Fs,Go="__reactProps$"+Fs,ar="__reactContainer$"+Fs,Jc="__reactEvents$"+Fs,wx="__reactListeners$"+Fs,Tx="__reactHandles$"+Fs;function ns(n){var i=n[Yi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[ar]||a[Yi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=sp(n);n!==null;){if(a=n[Yi])return a;n=sp(n)}return i}n=a,a=n.parentNode}return null}function Wo(n){return n=n[Yi]||n[ar],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ks(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ha(n){return n[Go]||null}var Zc=[],Os=-1;function Ir(n){return{current:n}}function $t(n){0>Os||(n.current=Zc[Os],Zc[Os]=null,Os--)}function Jt(n,i){Os++,Zc[Os]=n.current,n.current=i}var Dr={},On=Ir(Dr),ti=Ir(!1),is=Dr;function Bs(n,i){var a=n.type.contextTypes;if(!a)return Dr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in a)p[v]=i[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=p),p}function ni(n){return n=n.childContextTypes,n!=null}function Va(){$t(ti),$t(On)}function op(n,i,a){if(On.current!==Dr)throw Error(t(168));Jt(On,i),Jt(ti,a)}function ap(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var p in u)if(!(p in i))throw Error(t(108,ce(n)||"Unknown",p));return te({},a,u)}function Ga(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Dr,is=On.current,Jt(On,n),Jt(ti,ti.current),!0}function lp(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=ap(n,i,is),u.__reactInternalMemoizedMergedChildContext=n,$t(ti),$t(On),Jt(On,n)):$t(ti),Jt(ti,a)}var lr=null,Wa=!1,$c=!1;function cp(n){lr===null?lr=[n]:lr.push(n)}function bx(n){Wa=!0,cp(n)}function Ur(){if(!$c&&lr!==null){$c=!0;var n=0,i=bt;try{var a=lr;for(bt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}lr=null,Wa=!1}catch(p){throw lr!==null&&(lr=lr.slice(n+1)),Cn(pn,Ur),p}finally{bt=i,$c=!1}}return null}var zs=[],Hs=0,Xa=null,ja=0,xi=[],_i=0,rs=null,cr=1,ur="";function ss(n,i){zs[Hs++]=ja,zs[Hs++]=Xa,Xa=n,ja=i}function up(n,i,a){xi[_i++]=cr,xi[_i++]=ur,xi[_i++]=rs,rs=n;var u=cr;n=ur;var p=32-Be(u)-1;u&=~(1<<p),a+=1;var v=32-Be(i)+p;if(30<v){var b=p-p%5;v=(u&(1<<b)-1).toString(32),u>>=b,p-=b,cr=1<<32-Be(i)+p|a<<p|u,ur=v+n}else cr=1<<v|a<<p|u,ur=n}function eu(n){n.return!==null&&(ss(n,1),up(n,1,0))}function tu(n){for(;n===Xa;)Xa=zs[--Hs],zs[Hs]=null,ja=zs[--Hs],zs[Hs]=null;for(;n===rs;)rs=xi[--_i],xi[_i]=null,ur=xi[--_i],xi[_i]=null,cr=xi[--_i],xi[_i]=null}var fi=null,hi=null,tn=!1,Di=null;function fp(n,i){var a=Ai(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function hp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,fi=n,hi=Lr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,fi=n,hi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=rs!==null?{id:cr,overflow:ur}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ai(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,fi=n,hi=null,!0):!1;default:return!1}}function nu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function iu(n){if(tn){var i=hi;if(i){var a=i;if(!hp(n,i)){if(nu(n))throw Error(t(418));i=Lr(a.nextSibling);var u=fi;i&&hp(n,i)?fp(u,a):(n.flags=n.flags&-4097|2,tn=!1,fi=n)}}else{if(nu(n))throw Error(t(418));n.flags=n.flags&-4097|2,tn=!1,fi=n}}}function dp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;fi=n}function Ka(n){if(n!==fi)return!1;if(!tn)return dp(n),tn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!qc(n.type,n.memoizedProps)),i&&(i=hi)){if(nu(n))throw pp(),Error(t(418));for(;i;)fp(n,i),i=Lr(i.nextSibling)}if(dp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){hi=Lr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}hi=null}}else hi=fi?Lr(n.stateNode.nextSibling):null;return!0}function pp(){for(var n=hi;n;)n=Lr(n.nextSibling)}function Vs(){hi=fi=null,tn=!1}function ru(n){Di===null?Di=[n]:Di.push(n)}var Cx=R.ReactCurrentBatchConfig;function Xo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var p=u,v=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===v?i.ref:(i=function(b){var V=p.refs;b===null?delete V[v]:V[v]=b},i._stringRef=v,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function qa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function mp(n){var i=n._init;return i(n._payload)}function gp(n){function i(ue,ne){if(n){var fe=ue.deletions;fe===null?(ue.deletions=[ne],ue.flags|=16):fe.push(ne)}}function a(ue,ne){if(!n)return null;for(;ne!==null;)i(ue,ne),ne=ne.sibling;return null}function u(ue,ne){for(ue=new Map;ne!==null;)ne.key!==null?ue.set(ne.key,ne):ue.set(ne.index,ne),ne=ne.sibling;return ue}function p(ue,ne){return ue=Vr(ue,ne),ue.index=0,ue.sibling=null,ue}function v(ue,ne,fe){return ue.index=fe,n?(fe=ue.alternate,fe!==null?(fe=fe.index,fe<ne?(ue.flags|=2,ne):fe):(ue.flags|=2,ne)):(ue.flags|=1048576,ne)}function b(ue){return n&&ue.alternate===null&&(ue.flags|=2),ue}function V(ue,ne,fe,ze){return ne===null||ne.tag!==6?(ne=Yu(fe,ue.mode,ze),ne.return=ue,ne):(ne=p(ne,fe),ne.return=ue,ne)}function Z(ue,ne,fe,ze){var ut=fe.type;return ut===O?De(ue,ne,fe.props.children,ze,fe.key):ne!==null&&(ne.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===ie&&mp(ut)===ne.type)?(ze=p(ne,fe.props),ze.ref=Xo(ue,ne,fe),ze.return=ue,ze):(ze=xl(fe.type,fe.key,fe.props,null,ue.mode,ze),ze.ref=Xo(ue,ne,fe),ze.return=ue,ze)}function me(ue,ne,fe,ze){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==fe.containerInfo||ne.stateNode.implementation!==fe.implementation?(ne=Qu(fe,ue.mode,ze),ne.return=ue,ne):(ne=p(ne,fe.children||[]),ne.return=ue,ne)}function De(ue,ne,fe,ze,ut){return ne===null||ne.tag!==7?(ne=ds(fe,ue.mode,ze,ut),ne.return=ue,ne):(ne=p(ne,fe),ne.return=ue,ne)}function Ue(ue,ne,fe){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return ne=Yu(""+ne,ue.mode,fe),ne.return=ue,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case z:return fe=xl(ne.type,ne.key,ne.props,null,ue.mode,fe),fe.ref=Xo(ue,null,ne),fe.return=ue,fe;case I:return ne=Qu(ne,ue.mode,fe),ne.return=ue,ne;case ie:var ze=ne._init;return Ue(ue,ze(ne._payload),fe)}if(Q(ne)||k(ne))return ne=ds(ne,ue.mode,fe,null),ne.return=ue,ne;qa(ue,ne)}return null}function Pe(ue,ne,fe,ze){var ut=ne!==null?ne.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return ut!==null?null:V(ue,ne,""+fe,ze);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case z:return fe.key===ut?Z(ue,ne,fe,ze):null;case I:return fe.key===ut?me(ue,ne,fe,ze):null;case ie:return ut=fe._init,Pe(ue,ne,ut(fe._payload),ze)}if(Q(fe)||k(fe))return ut!==null?null:De(ue,ne,fe,ze,null);qa(ue,fe)}return null}function $e(ue,ne,fe,ze,ut){if(typeof ze=="string"&&ze!==""||typeof ze=="number")return ue=ue.get(fe)||null,V(ne,ue,""+ze,ut);if(typeof ze=="object"&&ze!==null){switch(ze.$$typeof){case z:return ue=ue.get(ze.key===null?fe:ze.key)||null,Z(ne,ue,ze,ut);case I:return ue=ue.get(ze.key===null?fe:ze.key)||null,me(ne,ue,ze,ut);case ie:var xt=ze._init;return $e(ue,ne,fe,xt(ze._payload),ut)}if(Q(ze)||k(ze))return ue=ue.get(fe)||null,De(ne,ue,ze,ut,null);qa(ne,ze)}return null}function rt(ue,ne,fe,ze){for(var ut=null,xt=null,_t=ne,At=ne=0,En=null;_t!==null&&At<fe.length;At++){_t.index>At?(En=_t,_t=null):En=_t.sibling;var Kt=Pe(ue,_t,fe[At],ze);if(Kt===null){_t===null&&(_t=En);break}n&&_t&&Kt.alternate===null&&i(ue,_t),ne=v(Kt,ne,At),xt===null?ut=Kt:xt.sibling=Kt,xt=Kt,_t=En}if(At===fe.length)return a(ue,_t),tn&&ss(ue,At),ut;if(_t===null){for(;At<fe.length;At++)_t=Ue(ue,fe[At],ze),_t!==null&&(ne=v(_t,ne,At),xt===null?ut=_t:xt.sibling=_t,xt=_t);return tn&&ss(ue,At),ut}for(_t=u(ue,_t);At<fe.length;At++)En=$e(_t,ue,At,fe[At],ze),En!==null&&(n&&En.alternate!==null&&_t.delete(En.key===null?At:En.key),ne=v(En,ne,At),xt===null?ut=En:xt.sibling=En,xt=En);return n&&_t.forEach(function(Gr){return i(ue,Gr)}),tn&&ss(ue,At),ut}function lt(ue,ne,fe,ze){var ut=k(fe);if(typeof ut!="function")throw Error(t(150));if(fe=ut.call(fe),fe==null)throw Error(t(151));for(var xt=ut=null,_t=ne,At=ne=0,En=null,Kt=fe.next();_t!==null&&!Kt.done;At++,Kt=fe.next()){_t.index>At?(En=_t,_t=null):En=_t.sibling;var Gr=Pe(ue,_t,Kt.value,ze);if(Gr===null){_t===null&&(_t=En);break}n&&_t&&Gr.alternate===null&&i(ue,_t),ne=v(Gr,ne,At),xt===null?ut=Gr:xt.sibling=Gr,xt=Gr,_t=En}if(Kt.done)return a(ue,_t),tn&&ss(ue,At),ut;if(_t===null){for(;!Kt.done;At++,Kt=fe.next())Kt=Ue(ue,Kt.value,ze),Kt!==null&&(ne=v(Kt,ne,At),xt===null?ut=Kt:xt.sibling=Kt,xt=Kt);return tn&&ss(ue,At),ut}for(_t=u(ue,_t);!Kt.done;At++,Kt=fe.next())Kt=$e(_t,ue,At,Kt.value,ze),Kt!==null&&(n&&Kt.alternate!==null&&_t.delete(Kt.key===null?At:Kt.key),ne=v(Kt,ne,At),xt===null?ut=Kt:xt.sibling=Kt,xt=Kt);return n&&_t.forEach(function(a_){return i(ue,a_)}),tn&&ss(ue,At),ut}function ln(ue,ne,fe,ze){if(typeof fe=="object"&&fe!==null&&fe.type===O&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case z:e:{for(var ut=fe.key,xt=ne;xt!==null;){if(xt.key===ut){if(ut=fe.type,ut===O){if(xt.tag===7){a(ue,xt.sibling),ne=p(xt,fe.props.children),ne.return=ue,ue=ne;break e}}else if(xt.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===ie&&mp(ut)===xt.type){a(ue,xt.sibling),ne=p(xt,fe.props),ne.ref=Xo(ue,xt,fe),ne.return=ue,ue=ne;break e}a(ue,xt);break}else i(ue,xt);xt=xt.sibling}fe.type===O?(ne=ds(fe.props.children,ue.mode,ze,fe.key),ne.return=ue,ue=ne):(ze=xl(fe.type,fe.key,fe.props,null,ue.mode,ze),ze.ref=Xo(ue,ne,fe),ze.return=ue,ue=ze)}return b(ue);case I:e:{for(xt=fe.key;ne!==null;){if(ne.key===xt)if(ne.tag===4&&ne.stateNode.containerInfo===fe.containerInfo&&ne.stateNode.implementation===fe.implementation){a(ue,ne.sibling),ne=p(ne,fe.children||[]),ne.return=ue,ue=ne;break e}else{a(ue,ne);break}else i(ue,ne);ne=ne.sibling}ne=Qu(fe,ue.mode,ze),ne.return=ue,ue=ne}return b(ue);case ie:return xt=fe._init,ln(ue,ne,xt(fe._payload),ze)}if(Q(fe))return rt(ue,ne,fe,ze);if(k(fe))return lt(ue,ne,fe,ze);qa(ue,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,ne!==null&&ne.tag===6?(a(ue,ne.sibling),ne=p(ne,fe),ne.return=ue,ue=ne):(a(ue,ne),ne=Yu(fe,ue.mode,ze),ne.return=ue,ue=ne),b(ue)):a(ue,ne)}return ln}var Gs=gp(!0),vp=gp(!1),Ya=Ir(null),Qa=null,Ws=null,su=null;function ou(){su=Ws=Qa=null}function au(n){var i=Ya.current;$t(Ya),n._currentValue=i}function lu(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Xs(n,i){Qa=n,su=Ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ii=!0),n.firstContext=null)}function yi(n){var i=n._currentValue;if(su!==n)if(n={context:n,memoizedValue:i,next:null},Ws===null){if(Qa===null)throw Error(t(308));Ws=n,Qa.dependencies={lanes:0,firstContext:n}}else Ws=Ws.next=n;return i}var os=null;function cu(n){os===null?os=[n]:os.push(n)}function xp(n,i,a,u){var p=i.interleaved;return p===null?(a.next=a,cu(i)):(a.next=p.next,p.next=a),i.interleaved=a,fr(n,u)}function fr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Nr=!1;function uu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _p(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function hr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Fr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Vt&2)!==0){var p=u.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),u.pending=i,fr(n,a)}return p=u.interleaved,p===null?(i.next=i,cu(u)):(i.next=p.next,p.next=i),u.interleaved=i,fr(n,a)}function Ja(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Ln(n,a)}}function yp(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var p=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?p=v=b:v=v.next=b,a=a.next}while(a!==null);v===null?p=v=i:v=v.next=i}else p=v=i;a={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Za(n,i,a,u){var p=n.updateQueue;Nr=!1;var v=p.firstBaseUpdate,b=p.lastBaseUpdate,V=p.shared.pending;if(V!==null){p.shared.pending=null;var Z=V,me=Z.next;Z.next=null,b===null?v=me:b.next=me,b=Z;var De=n.alternate;De!==null&&(De=De.updateQueue,V=De.lastBaseUpdate,V!==b&&(V===null?De.firstBaseUpdate=me:V.next=me,De.lastBaseUpdate=Z))}if(v!==null){var Ue=p.baseState;b=0,De=me=Z=null,V=v;do{var Pe=V.lane,$e=V.eventTime;if((u&Pe)===Pe){De!==null&&(De=De.next={eventTime:$e,lane:0,tag:V.tag,payload:V.payload,callback:V.callback,next:null});e:{var rt=n,lt=V;switch(Pe=i,$e=a,lt.tag){case 1:if(rt=lt.payload,typeof rt=="function"){Ue=rt.call($e,Ue,Pe);break e}Ue=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=lt.payload,Pe=typeof rt=="function"?rt.call($e,Ue,Pe):rt,Pe==null)break e;Ue=te({},Ue,Pe);break e;case 2:Nr=!0}}V.callback!==null&&V.lane!==0&&(n.flags|=64,Pe=p.effects,Pe===null?p.effects=[V]:Pe.push(V))}else $e={eventTime:$e,lane:Pe,tag:V.tag,payload:V.payload,callback:V.callback,next:null},De===null?(me=De=$e,Z=Ue):De=De.next=$e,b|=Pe;if(V=V.next,V===null){if(V=p.shared.pending,V===null)break;Pe=V,V=Pe.next,Pe.next=null,p.lastBaseUpdate=Pe,p.shared.pending=null}}while(!0);if(De===null&&(Z=Ue),p.baseState=Z,p.firstBaseUpdate=me,p.lastBaseUpdate=De,i=p.shared.interleaved,i!==null){p=i;do b|=p.lane,p=p.next;while(p!==i)}else v===null&&(p.shared.lanes=0);cs|=b,n.lanes=b,n.memoizedState=Ue}}function Mp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],p=u.callback;if(p!==null){if(u.callback=null,u=a,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var jo={},Qi=Ir(jo),Ko=Ir(jo),qo=Ir(jo);function as(n){if(n===jo)throw Error(t(174));return n}function fu(n,i){switch(Jt(qo,i),Jt(Ko,n),Jt(Qi,jo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:A(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=A(i,n)}$t(Qi),Jt(Qi,i)}function js(){$t(Qi),$t(Ko),$t(qo)}function Sp(n){as(qo.current);var i=as(Qi.current),a=A(i,n.type);i!==a&&(Jt(Ko,n),Jt(Qi,a))}function hu(n){Ko.current===n&&($t(Qi),$t(Ko))}var nn=Ir(0);function $a(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var du=[];function pu(){for(var n=0;n<du.length;n++)du[n]._workInProgressVersionPrimary=null;du.length=0}var el=R.ReactCurrentDispatcher,mu=R.ReactCurrentBatchConfig,ls=0,rn=null,mn=null,Sn=null,tl=!1,Yo=!1,Qo=0,Rx=0;function Bn(){throw Error(t(321))}function gu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ii(n[a],i[a]))return!1;return!0}function vu(n,i,a,u,p,v){if(ls=v,rn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,el.current=n===null||n.memoizedState===null?Dx:Ux,n=a(u,p),Yo){v=0;do{if(Yo=!1,Qo=0,25<=v)throw Error(t(301));v+=1,Sn=mn=null,i.updateQueue=null,el.current=Nx,n=a(u,p)}while(Yo)}if(el.current=rl,i=mn!==null&&mn.next!==null,ls=0,Sn=mn=rn=null,tl=!1,i)throw Error(t(300));return n}function xu(){var n=Qo!==0;return Qo=0,n}function Ji(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?rn.memoizedState=Sn=n:Sn=Sn.next=n,Sn}function Mi(){if(mn===null){var n=rn.alternate;n=n!==null?n.memoizedState:null}else n=mn.next;var i=Sn===null?rn.memoizedState:Sn.next;if(i!==null)Sn=i,mn=n;else{if(n===null)throw Error(t(310));mn=n,n={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},Sn===null?rn.memoizedState=Sn=n:Sn=Sn.next=n}return Sn}function Jo(n,i){return typeof i=="function"?i(n):i}function _u(n){var i=Mi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=mn,p=u.baseQueue,v=a.pending;if(v!==null){if(p!==null){var b=p.next;p.next=v.next,v.next=b}u.baseQueue=p=v,a.pending=null}if(p!==null){v=p.next,u=u.baseState;var V=b=null,Z=null,me=v;do{var De=me.lane;if((ls&De)===De)Z!==null&&(Z=Z.next={lane:0,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null}),u=me.hasEagerState?me.eagerState:n(u,me.action);else{var Ue={lane:De,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null};Z===null?(V=Z=Ue,b=u):Z=Z.next=Ue,rn.lanes|=De,cs|=De}me=me.next}while(me!==null&&me!==v);Z===null?b=u:Z.next=V,Ii(u,i.memoizedState)||(ii=!0),i.memoizedState=u,i.baseState=b,i.baseQueue=Z,a.lastRenderedState=u}if(n=a.interleaved,n!==null){p=n;do v=p.lane,rn.lanes|=v,cs|=v,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function yu(n){var i=Mi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,p=a.pending,v=i.memoizedState;if(p!==null){a.pending=null;var b=p=p.next;do v=n(v,b.action),b=b.next;while(b!==p);Ii(v,i.memoizedState)||(ii=!0),i.memoizedState=v,i.baseQueue===null&&(i.baseState=v),a.lastRenderedState=v}return[v,u]}function Ap(){}function Ep(n,i){var a=rn,u=Mi(),p=i(),v=!Ii(u.memoizedState,p);if(v&&(u.memoizedState=p,ii=!0),u=u.queue,Mu(bp.bind(null,a,u,n),[n]),u.getSnapshot!==i||v||Sn!==null&&Sn.memoizedState.tag&1){if(a.flags|=2048,Zo(9,Tp.bind(null,a,u,p,i),void 0,null),An===null)throw Error(t(349));(ls&30)!==0||wp(a,i,p)}return p}function wp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=rn.updateQueue,i===null?(i={lastEffect:null,stores:null},rn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Tp(n,i,a,u){i.value=a,i.getSnapshot=u,Cp(i)&&Rp(n)}function bp(n,i,a){return a(function(){Cp(i)&&Rp(n)})}function Cp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ii(n,a)}catch{return!0}}function Rp(n){var i=fr(n,1);i!==null&&ki(i,n,1,-1)}function Pp(n){var i=Ji();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:n},i.queue=n,n=n.dispatch=Ix.bind(null,rn,n),[i.memoizedState,n]}function Zo(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=rn.updateQueue,i===null?(i={lastEffect:null,stores:null},rn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Lp(){return Mi().memoizedState}function nl(n,i,a,u){var p=Ji();rn.flags|=n,p.memoizedState=Zo(1|i,a,void 0,u===void 0?null:u)}function il(n,i,a,u){var p=Mi();u=u===void 0?null:u;var v=void 0;if(mn!==null){var b=mn.memoizedState;if(v=b.destroy,u!==null&&gu(u,b.deps)){p.memoizedState=Zo(i,a,v,u);return}}rn.flags|=n,p.memoizedState=Zo(1|i,a,v,u)}function Ip(n,i){return nl(8390656,8,n,i)}function Mu(n,i){return il(2048,8,n,i)}function Dp(n,i){return il(4,2,n,i)}function Up(n,i){return il(4,4,n,i)}function Np(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Fp(n,i,a){return a=a!=null?a.concat([n]):null,il(4,4,Np.bind(null,i,n),a)}function Su(){}function kp(n,i){var a=Mi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&gu(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Op(n,i){var a=Mi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&gu(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Bp(n,i,a){return(ls&21)===0?(n.baseState&&(n.baseState=!1,ii=!0),n.memoizedState=a):(Ii(a,i)||(a=Ke(),rn.lanes|=a,cs|=a,n.baseState=!0),i)}function Px(n,i){var a=bt;bt=a!==0&&4>a?a:4,n(!0);var u=mu.transition;mu.transition={};try{n(!1),i()}finally{bt=a,mu.transition=u}}function zp(){return Mi().memoizedState}function Lx(n,i,a){var u=zr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Hp(n))Vp(i,a);else if(a=xp(n,i,a,u),a!==null){var p=Yn();ki(a,n,u,p),Gp(a,i,u)}}function Ix(n,i,a){var u=zr(n),p={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hp(n))Vp(i,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=i.lastRenderedReducer,v!==null))try{var b=i.lastRenderedState,V=v(b,a);if(p.hasEagerState=!0,p.eagerState=V,Ii(V,b)){var Z=i.interleaved;Z===null?(p.next=p,cu(i)):(p.next=Z.next,Z.next=p),i.interleaved=p;return}}catch{}finally{}a=xp(n,i,p,u),a!==null&&(p=Yn(),ki(a,n,u,p),Gp(a,i,u))}}function Hp(n){var i=n.alternate;return n===rn||i!==null&&i===rn}function Vp(n,i){Yo=tl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Gp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Ln(n,a)}}var rl={readContext:yi,useCallback:Bn,useContext:Bn,useEffect:Bn,useImperativeHandle:Bn,useInsertionEffect:Bn,useLayoutEffect:Bn,useMemo:Bn,useReducer:Bn,useRef:Bn,useState:Bn,useDebugValue:Bn,useDeferredValue:Bn,useTransition:Bn,useMutableSource:Bn,useSyncExternalStore:Bn,useId:Bn,unstable_isNewReconciler:!1},Dx={readContext:yi,useCallback:function(n,i){return Ji().memoizedState=[n,i===void 0?null:i],n},useContext:yi,useEffect:Ip,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,nl(4194308,4,Np.bind(null,i,n),a)},useLayoutEffect:function(n,i){return nl(4194308,4,n,i)},useInsertionEffect:function(n,i){return nl(4,2,n,i)},useMemo:function(n,i){var a=Ji();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Ji();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Lx.bind(null,rn,n),[u.memoizedState,n]},useRef:function(n){var i=Ji();return n={current:n},i.memoizedState=n},useState:Pp,useDebugValue:Su,useDeferredValue:function(n){return Ji().memoizedState=n},useTransition:function(){var n=Pp(!1),i=n[0];return n=Px.bind(null,n[1]),Ji().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=rn,p=Ji();if(tn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),An===null)throw Error(t(349));(ls&30)!==0||wp(u,i,a)}p.memoizedState=a;var v={value:a,getSnapshot:i};return p.queue=v,Ip(bp.bind(null,u,v,n),[n]),u.flags|=2048,Zo(9,Tp.bind(null,u,v,a,i),void 0,null),a},useId:function(){var n=Ji(),i=An.identifierPrefix;if(tn){var a=ur,u=cr;a=(u&~(1<<32-Be(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Qo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Rx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Ux={readContext:yi,useCallback:kp,useContext:yi,useEffect:Mu,useImperativeHandle:Fp,useInsertionEffect:Dp,useLayoutEffect:Up,useMemo:Op,useReducer:_u,useRef:Lp,useState:function(){return _u(Jo)},useDebugValue:Su,useDeferredValue:function(n){var i=Mi();return Bp(i,mn.memoizedState,n)},useTransition:function(){var n=_u(Jo)[0],i=Mi().memoizedState;return[n,i]},useMutableSource:Ap,useSyncExternalStore:Ep,useId:zp,unstable_isNewReconciler:!1},Nx={readContext:yi,useCallback:kp,useContext:yi,useEffect:Mu,useImperativeHandle:Fp,useInsertionEffect:Dp,useLayoutEffect:Up,useMemo:Op,useReducer:yu,useRef:Lp,useState:function(){return yu(Jo)},useDebugValue:Su,useDeferredValue:function(n){var i=Mi();return mn===null?i.memoizedState=n:Bp(i,mn.memoizedState,n)},useTransition:function(){var n=yu(Jo)[0],i=Mi().memoizedState;return[n,i]},useMutableSource:Ap,useSyncExternalStore:Ep,useId:zp,unstable_isNewReconciler:!1};function Ui(n,i){if(n&&n.defaultProps){i=te({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Au(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:te({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var sl={isMounted:function(n){return(n=n._reactInternals)?Fn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Yn(),p=zr(n),v=hr(u,p);v.payload=i,a!=null&&(v.callback=a),i=Fr(n,v,p),i!==null&&(ki(i,n,p,u),Ja(i,n,p))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Yn(),p=zr(n),v=hr(u,p);v.tag=1,v.payload=i,a!=null&&(v.callback=a),i=Fr(n,v,p),i!==null&&(ki(i,n,p,u),Ja(i,n,p))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Yn(),u=zr(n),p=hr(a,u);p.tag=2,i!=null&&(p.callback=i),i=Fr(n,p,u),i!==null&&(ki(i,n,u,a),Ja(i,n,u))}};function Wp(n,i,a,u,p,v,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,b):i.prototype&&i.prototype.isPureReactComponent?!Oo(a,u)||!Oo(p,v):!0}function Xp(n,i,a){var u=!1,p=Dr,v=i.contextType;return typeof v=="object"&&v!==null?v=yi(v):(p=ni(i)?is:On.current,u=i.contextTypes,v=(u=u!=null)?Bs(n,p):Dr),i=new i(a,v),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=sl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),i}function jp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&sl.enqueueReplaceState(i,i.state,null)}function Eu(n,i,a,u){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},uu(n);var v=i.contextType;typeof v=="object"&&v!==null?p.context=yi(v):(v=ni(i)?is:On.current,p.context=Bs(n,v)),p.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(Au(n,i,v,a),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&sl.enqueueReplaceState(p,p.state,null),Za(n,a,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Ks(n,i){try{var a="",u=i;do a+=de(u),u=u.return;while(u);var p=a}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:i,stack:p,digest:null}}function wu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Tu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Fx=typeof WeakMap=="function"?WeakMap:Map;function Kp(n,i,a){a=hr(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){hl||(hl=!0,Hu=u),Tu(n,i)},a}function qp(n,i,a){a=hr(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=i.value;a.payload=function(){return u(p)},a.callback=function(){Tu(n,i)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){Tu(n,i),typeof u!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function Yp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new Fx;var p=new Set;u.set(i,p)}else p=u.get(i),p===void 0&&(p=new Set,u.set(i,p));p.has(a)||(p.add(a),n=Qx.bind(null,n,i,a),i.then(n,n))}function Qp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Jp(n,i,a,u,p){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=hr(-1,1),i.tag=2,Fr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var kx=R.ReactCurrentOwner,ii=!1;function qn(n,i,a,u){i.child=n===null?vp(i,null,a,u):Gs(i,n.child,a,u)}function Zp(n,i,a,u,p){a=a.render;var v=i.ref;return Xs(i,p),u=vu(n,i,a,u,v,p),a=xu(),n!==null&&!ii?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,dr(n,i,p)):(tn&&a&&eu(i),i.flags|=1,qn(n,i,u,p),i.child)}function $p(n,i,a,u,p){if(n===null){var v=a.type;return typeof v=="function"&&!qu(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=v,em(n,i,v,u,p)):(n=xl(a.type,null,u,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(v=n.child,(n.lanes&p)===0){var b=v.memoizedProps;if(a=a.compare,a=a!==null?a:Oo,a(b,u)&&n.ref===i.ref)return dr(n,i,p)}return i.flags|=1,n=Vr(v,u),n.ref=i.ref,n.return=i,i.child=n}function em(n,i,a,u,p){if(n!==null){var v=n.memoizedProps;if(Oo(v,u)&&n.ref===i.ref)if(ii=!1,i.pendingProps=u=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(ii=!0);else return i.lanes=n.lanes,dr(n,i,p)}return bu(n,i,a,u,p)}function tm(n,i,a){var u=i.pendingProps,p=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Jt(Ys,di),di|=a;else{if((a&1073741824)===0)return n=v!==null?v.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Jt(Ys,di),di|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:a,Jt(Ys,di),di|=u}else v!==null?(u=v.baseLanes|a,i.memoizedState=null):u=a,Jt(Ys,di),di|=u;return qn(n,i,p,a),i.child}function nm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function bu(n,i,a,u,p){var v=ni(a)?is:On.current;return v=Bs(i,v),Xs(i,p),a=vu(n,i,a,u,v,p),u=xu(),n!==null&&!ii?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,dr(n,i,p)):(tn&&u&&eu(i),i.flags|=1,qn(n,i,a,p),i.child)}function im(n,i,a,u,p){if(ni(a)){var v=!0;Ga(i)}else v=!1;if(Xs(i,p),i.stateNode===null)al(n,i),Xp(i,a,u),Eu(i,a,u,p),u=!0;else if(n===null){var b=i.stateNode,V=i.memoizedProps;b.props=V;var Z=b.context,me=a.contextType;typeof me=="object"&&me!==null?me=yi(me):(me=ni(a)?is:On.current,me=Bs(i,me));var De=a.getDerivedStateFromProps,Ue=typeof De=="function"||typeof b.getSnapshotBeforeUpdate=="function";Ue||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(V!==u||Z!==me)&&jp(i,b,u,me),Nr=!1;var Pe=i.memoizedState;b.state=Pe,Za(i,u,b,p),Z=i.memoizedState,V!==u||Pe!==Z||ti.current||Nr?(typeof De=="function"&&(Au(i,a,De,u),Z=i.memoizedState),(V=Nr||Wp(i,a,V,u,Pe,Z,me))?(Ue||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=Z),b.props=u,b.state=Z,b.context=me,u=V):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{b=i.stateNode,_p(n,i),V=i.memoizedProps,me=i.type===i.elementType?V:Ui(i.type,V),b.props=me,Ue=i.pendingProps,Pe=b.context,Z=a.contextType,typeof Z=="object"&&Z!==null?Z=yi(Z):(Z=ni(a)?is:On.current,Z=Bs(i,Z));var $e=a.getDerivedStateFromProps;(De=typeof $e=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(V!==Ue||Pe!==Z)&&jp(i,b,u,Z),Nr=!1,Pe=i.memoizedState,b.state=Pe,Za(i,u,b,p);var rt=i.memoizedState;V!==Ue||Pe!==rt||ti.current||Nr?(typeof $e=="function"&&(Au(i,a,$e,u),rt=i.memoizedState),(me=Nr||Wp(i,a,me,u,Pe,rt,Z)||!1)?(De||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(u,rt,Z),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(u,rt,Z)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||V===n.memoizedProps&&Pe===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&Pe===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=rt),b.props=u,b.state=rt,b.context=Z,u=me):(typeof b.componentDidUpdate!="function"||V===n.memoizedProps&&Pe===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&Pe===n.memoizedState||(i.flags|=1024),u=!1)}return Cu(n,i,a,u,v,p)}function Cu(n,i,a,u,p,v){nm(n,i);var b=(i.flags&128)!==0;if(!u&&!b)return p&&lp(i,a,!1),dr(n,i,v);u=i.stateNode,kx.current=i;var V=b&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&b?(i.child=Gs(i,n.child,null,v),i.child=Gs(i,null,V,v)):qn(n,i,V,v),i.memoizedState=u.state,p&&lp(i,a,!0),i.child}function rm(n){var i=n.stateNode;i.pendingContext?op(n,i.pendingContext,i.pendingContext!==i.context):i.context&&op(n,i.context,!1),fu(n,i.containerInfo)}function sm(n,i,a,u,p){return Vs(),ru(p),i.flags|=256,qn(n,i,a,u),i.child}var Ru={dehydrated:null,treeContext:null,retryLane:0};function Pu(n){return{baseLanes:n,cachePool:null,transitions:null}}function om(n,i,a){var u=i.pendingProps,p=nn.current,v=!1,b=(i.flags&128)!==0,V;if((V=b)||(V=n!==null&&n.memoizedState===null?!1:(p&2)!==0),V?(v=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Jt(nn,p&1),n===null)return iu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=u.children,n=u.fallback,v?(u=i.mode,v=i.child,b={mode:"hidden",children:b},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=b):v=_l(b,u,0,null),n=ds(n,u,a,null),v.return=i,n.return=i,v.sibling=n,i.child=v,i.child.memoizedState=Pu(a),i.memoizedState=Ru,n):Lu(i,b));if(p=n.memoizedState,p!==null&&(V=p.dehydrated,V!==null))return Ox(n,i,b,u,V,p,a);if(v){v=u.fallback,b=i.mode,p=n.child,V=p.sibling;var Z={mode:"hidden",children:u.children};return(b&1)===0&&i.child!==p?(u=i.child,u.childLanes=0,u.pendingProps=Z,i.deletions=null):(u=Vr(p,Z),u.subtreeFlags=p.subtreeFlags&14680064),V!==null?v=Vr(V,v):(v=ds(v,b,a,null),v.flags|=2),v.return=i,u.return=i,u.sibling=v,i.child=u,u=v,v=i.child,b=n.child.memoizedState,b=b===null?Pu(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},v.memoizedState=b,v.childLanes=n.childLanes&~a,i.memoizedState=Ru,u}return v=n.child,n=v.sibling,u=Vr(v,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Lu(n,i){return i=_l({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ol(n,i,a,u){return u!==null&&ru(u),Gs(i,n.child,null,a),n=Lu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Ox(n,i,a,u,p,v,b){if(a)return i.flags&256?(i.flags&=-257,u=wu(Error(t(422))),ol(n,i,b,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(v=u.fallback,p=i.mode,u=_l({mode:"visible",children:u.children},p,0,null),v=ds(v,p,b,null),v.flags|=2,u.return=i,v.return=i,u.sibling=v,i.child=u,(i.mode&1)!==0&&Gs(i,n.child,null,b),i.child.memoizedState=Pu(b),i.memoizedState=Ru,v);if((i.mode&1)===0)return ol(n,i,b,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var V=u.dgst;return u=V,v=Error(t(419)),u=wu(v,u,void 0),ol(n,i,b,u)}if(V=(b&n.childLanes)!==0,ii||V){if(u=An,u!==null){switch(b&-b){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|b))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,fr(n,p),ki(u,n,p,-1))}return Ku(),u=wu(Error(t(421))),ol(n,i,b,u)}return p.data==="$?"?(i.flags|=128,i.child=n.child,i=Jx.bind(null,n),p._reactRetry=i,null):(n=v.treeContext,hi=Lr(p.nextSibling),fi=i,tn=!0,Di=null,n!==null&&(xi[_i++]=cr,xi[_i++]=ur,xi[_i++]=rs,cr=n.id,ur=n.overflow,rs=i),i=Lu(i,u.children),i.flags|=4096,i)}function am(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),lu(n.return,i,a)}function Iu(n,i,a,u,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:p}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=a,v.tailMode=p)}function lm(n,i,a){var u=i.pendingProps,p=u.revealOrder,v=u.tail;if(qn(n,i,u.children,a),u=nn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&am(n,a,i);else if(n.tag===19)am(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Jt(nn,u),(i.mode&1)===0)i.memoizedState=null;else switch(p){case"forwards":for(a=i.child,p=null;a!==null;)n=a.alternate,n!==null&&$a(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=i.child,i.child=null):(p=a.sibling,a.sibling=null),Iu(i,!1,p,a,v);break;case"backwards":for(a=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&$a(n)===null){i.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}Iu(i,!0,a,null,v);break;case"together":Iu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function al(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function dr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),cs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Vr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Vr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Bx(n,i,a){switch(i.tag){case 3:rm(i),Vs();break;case 5:Sp(i);break;case 1:ni(i.type)&&Ga(i);break;case 4:fu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,p=i.memoizedProps.value;Jt(Ya,u._currentValue),u._currentValue=p;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Jt(nn,nn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?om(n,i,a):(Jt(nn,nn.current&1),n=dr(n,i,a),n!==null?n.sibling:null);Jt(nn,nn.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return lm(n,i,a);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Jt(nn,nn.current),u)break;return null;case 22:case 23:return i.lanes=0,tm(n,i,a)}return dr(n,i,a)}var cm,Du,um,fm;cm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Du=function(){},um=function(n,i,a,u){var p=n.memoizedProps;if(p!==u){n=i.stateNode,as(Qi.current);var v=null;switch(a){case"input":p=Je(n,p),u=Je(n,u),v=[];break;case"select":p=te({},p,{value:void 0}),u=te({},u,{value:void 0}),v=[];break;case"textarea":p=pe(n,p),u=pe(n,u),v=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=za)}Ge(a,u);var b;a=null;for(me in p)if(!u.hasOwnProperty(me)&&p.hasOwnProperty(me)&&p[me]!=null)if(me==="style"){var V=p[me];for(b in V)V.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else me!=="dangerouslySetInnerHTML"&&me!=="children"&&me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&me!=="autoFocus"&&(o.hasOwnProperty(me)?v||(v=[]):(v=v||[]).push(me,null));for(me in u){var Z=u[me];if(V=p!=null?p[me]:void 0,u.hasOwnProperty(me)&&Z!==V&&(Z!=null||V!=null))if(me==="style")if(V){for(b in V)!V.hasOwnProperty(b)||Z&&Z.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in Z)Z.hasOwnProperty(b)&&V[b]!==Z[b]&&(a||(a={}),a[b]=Z[b])}else a||(v||(v=[]),v.push(me,a)),a=Z;else me==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,V=V?V.__html:void 0,Z!=null&&V!==Z&&(v=v||[]).push(me,Z)):me==="children"?typeof Z!="string"&&typeof Z!="number"||(v=v||[]).push(me,""+Z):me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&(o.hasOwnProperty(me)?(Z!=null&&me==="onScroll"&&Zt("scroll",n),v||V===Z||(v=[])):(v=v||[]).push(me,Z))}a&&(v=v||[]).push("style",a);var me=v;(i.updateQueue=me)&&(i.flags|=4)}},fm=function(n,i,a,u){a!==u&&(i.flags|=4)};function $o(n,i){if(!tn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function zn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function zx(n,i,a){var u=i.pendingProps;switch(tu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zn(i),null;case 1:return ni(i.type)&&Va(),zn(i),null;case 3:return u=i.stateNode,js(),$t(ti),$t(On),pu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ka(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Di!==null&&(Wu(Di),Di=null))),Du(n,i),zn(i),null;case 5:hu(i);var p=as(qo.current);if(a=i.type,n!==null&&i.stateNode!=null)um(n,i,a,u,p),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return zn(i),null}if(n=as(Qi.current),Ka(i)){u=i.stateNode,a=i.type;var v=i.memoizedProps;switch(u[Yi]=i,u[Go]=v,n=(i.mode&1)!==0,a){case"dialog":Zt("cancel",u),Zt("close",u);break;case"iframe":case"object":case"embed":Zt("load",u);break;case"video":case"audio":for(p=0;p<zo.length;p++)Zt(zo[p],u);break;case"source":Zt("error",u);break;case"img":case"image":case"link":Zt("error",u),Zt("load",u);break;case"details":Zt("toggle",u);break;case"input":Qe(u,v),Zt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},Zt("invalid",u);break;case"textarea":Ce(u,v),Zt("invalid",u)}Ge(a,v),p=null;for(var b in v)if(v.hasOwnProperty(b)){var V=v[b];b==="children"?typeof V=="string"?u.textContent!==V&&(v.suppressHydrationWarning!==!0&&Ba(u.textContent,V,n),p=["children",V]):typeof V=="number"&&u.textContent!==""+V&&(v.suppressHydrationWarning!==!0&&Ba(u.textContent,V,n),p=["children",""+V]):o.hasOwnProperty(b)&&V!=null&&b==="onScroll"&&Zt("scroll",u)}switch(a){case"input":ve(u),dt(u,v,!0);break;case"textarea":ve(u),nt(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=za)}u=p,i.updateQueue=u,u!==null&&(i.flags|=4)}else{b=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=L(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=b.createElement(a,{is:u.is}):(n=b.createElement(a),a==="select"&&(b=n,u.multiple?b.multiple=!0:u.size&&(b.size=u.size))):n=b.createElementNS(n,a),n[Yi]=i,n[Go]=u,cm(n,i,!1,!1),i.stateNode=n;e:{switch(b=Ie(a,u),a){case"dialog":Zt("cancel",n),Zt("close",n),p=u;break;case"iframe":case"object":case"embed":Zt("load",n),p=u;break;case"video":case"audio":for(p=0;p<zo.length;p++)Zt(zo[p],n);p=u;break;case"source":Zt("error",n),p=u;break;case"img":case"image":case"link":Zt("error",n),Zt("load",n),p=u;break;case"details":Zt("toggle",n),p=u;break;case"input":Qe(n,u),p=Je(n,u),Zt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=te({},u,{value:void 0}),Zt("invalid",n);break;case"textarea":Ce(n,u),p=pe(n,u),Zt("invalid",n);break;default:p=u}Ge(a,p),V=p;for(v in V)if(V.hasOwnProperty(v)){var Z=V[v];v==="style"?Me(n,Z):v==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,Z!=null&&ye(n,Z)):v==="children"?typeof Z=="string"?(a!=="textarea"||Z!=="")&&Te(n,Z):typeof Z=="number"&&Te(n,""+Z):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?Z!=null&&v==="onScroll"&&Zt("scroll",n):Z!=null&&P(n,v,Z,b))}switch(a){case"input":ve(n),dt(n,u,!1);break;case"textarea":ve(n),nt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+oe(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?ft(n,!!u.multiple,v,!1):u.defaultValue!=null&&ft(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=za)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return zn(i),null;case 6:if(n&&i.stateNode!=null)fm(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=as(qo.current),as(Qi.current),Ka(i)){if(u=i.stateNode,a=i.memoizedProps,u[Yi]=i,(v=u.nodeValue!==a)&&(n=fi,n!==null))switch(n.tag){case 3:Ba(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ba(u.nodeValue,a,(n.mode&1)!==0)}v&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Yi]=i,i.stateNode=u}return zn(i),null;case 13:if($t(nn),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(tn&&hi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)pp(),Vs(),i.flags|=98560,v=!1;else if(v=Ka(i),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=i.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Yi]=i}else Vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;zn(i),v=!1}else Di!==null&&(Wu(Di),Di=null),v=!0;if(!v)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(nn.current&1)!==0?gn===0&&(gn=3):Ku())),i.updateQueue!==null&&(i.flags|=4),zn(i),null);case 4:return js(),Du(n,i),n===null&&Ho(i.stateNode.containerInfo),zn(i),null;case 10:return au(i.type._context),zn(i),null;case 17:return ni(i.type)&&Va(),zn(i),null;case 19:if($t(nn),v=i.memoizedState,v===null)return zn(i),null;if(u=(i.flags&128)!==0,b=v.rendering,b===null)if(u)$o(v,!1);else{if(gn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=$a(n),b!==null){for(i.flags|=128,$o(v,!1),u=b.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)v=a,n=u,v.flags&=14680066,b=v.alternate,b===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=b.childLanes,v.lanes=b.lanes,v.child=b.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=b.memoizedProps,v.memoizedState=b.memoizedState,v.updateQueue=b.updateQueue,v.type=b.type,n=b.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Jt(nn,nn.current&1|2),i.child}n=n.sibling}v.tail!==null&&wt()>Qs&&(i.flags|=128,u=!0,$o(v,!1),i.lanes=4194304)}else{if(!u)if(n=$a(b),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),$o(v,!0),v.tail===null&&v.tailMode==="hidden"&&!b.alternate&&!tn)return zn(i),null}else 2*wt()-v.renderingStartTime>Qs&&a!==1073741824&&(i.flags|=128,u=!0,$o(v,!1),i.lanes=4194304);v.isBackwards?(b.sibling=i.child,i.child=b):(a=v.last,a!==null?a.sibling=b:i.child=b,v.last=b)}return v.tail!==null?(i=v.tail,v.rendering=i,v.tail=i.sibling,v.renderingStartTime=wt(),i.sibling=null,a=nn.current,Jt(nn,u?a&1|2:a&1),i):(zn(i),null);case 22:case 23:return ju(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(di&1073741824)!==0&&(zn(i),i.subtreeFlags&6&&(i.flags|=8192)):zn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Hx(n,i){switch(tu(i),i.tag){case 1:return ni(i.type)&&Va(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return js(),$t(ti),$t(On),pu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return hu(i),null;case 13:if($t(nn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Vs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return $t(nn),null;case 4:return js(),null;case 10:return au(i.type._context),null;case 22:case 23:return ju(),null;case 24:return null;default:return null}}var ll=!1,Hn=!1,Vx=typeof WeakSet=="function"?WeakSet:Set,tt=null;function qs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){on(n,i,u)}else a.current=null}function Uu(n,i,a){try{a()}catch(u){on(n,i,u)}}var hm=!1;function Gx(n,i){if(jc=Ca,n=Wd(),Oc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var p=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var b=0,V=-1,Z=-1,me=0,De=0,Ue=n,Pe=null;t:for(;;){for(var $e;Ue!==a||p!==0&&Ue.nodeType!==3||(V=b+p),Ue!==v||u!==0&&Ue.nodeType!==3||(Z=b+u),Ue.nodeType===3&&(b+=Ue.nodeValue.length),($e=Ue.firstChild)!==null;)Pe=Ue,Ue=$e;for(;;){if(Ue===n)break t;if(Pe===a&&++me===p&&(V=b),Pe===v&&++De===u&&(Z=b),($e=Ue.nextSibling)!==null)break;Ue=Pe,Pe=Ue.parentNode}Ue=$e}a=V===-1||Z===-1?null:{start:V,end:Z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kc={focusedElem:n,selectionRange:a},Ca=!1,tt=i;tt!==null;)if(i=tt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,tt=n;else for(;tt!==null;){i=tt;try{var rt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(rt!==null){var lt=rt.memoizedProps,ln=rt.memoizedState,ue=i.stateNode,ne=ue.getSnapshotBeforeUpdate(i.elementType===i.type?lt:Ui(i.type,lt),ln);ue.__reactInternalSnapshotBeforeUpdate=ne}break;case 3:var fe=i.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ze){on(i,i.return,ze)}if(n=i.sibling,n!==null){n.return=i.return,tt=n;break}tt=i.return}return rt=hm,hm=!1,rt}function ea(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&Uu(i,a,v)}p=p.next}while(p!==u)}}function cl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Nu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function dm(n){var i=n.alternate;i!==null&&(n.alternate=null,dm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Yi],delete i[Go],delete i[Jc],delete i[wx],delete i[Tx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function pm(n){return n.tag===5||n.tag===3||n.tag===4}function mm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||pm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=za));else if(u!==4&&(n=n.child,n!==null))for(Fu(n,i,a),n=n.sibling;n!==null;)Fu(n,i,a),n=n.sibling}function ku(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(ku(n,i,a),n=n.sibling;n!==null;)ku(n,i,a),n=n.sibling}var In=null,Ni=!1;function kr(n,i,a){for(a=a.child;a!==null;)gm(n,i,a),a=a.sibling}function gm(n,i,a){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 5:Hn||qs(a,i);case 6:var u=In,p=Ni;In=null,kr(n,i,a),In=u,Ni=p,In!==null&&(Ni?(n=In,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):In.removeChild(a.stateNode));break;case 18:In!==null&&(Ni?(n=In,a=a.stateNode,n.nodeType===8?Qc(n.parentNode,a):n.nodeType===1&&Qc(n,a),Io(n)):Qc(In,a.stateNode));break;case 4:u=In,p=Ni,In=a.stateNode.containerInfo,Ni=!0,kr(n,i,a),In=u,Ni=p;break;case 0:case 11:case 14:case 15:if(!Hn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var v=p,b=v.destroy;v=v.tag,b!==void 0&&((v&2)!==0||(v&4)!==0)&&Uu(a,i,b),p=p.next}while(p!==u)}kr(n,i,a);break;case 1:if(!Hn&&(qs(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(V){on(a,i,V)}kr(n,i,a);break;case 21:kr(n,i,a);break;case 22:a.mode&1?(Hn=(u=Hn)||a.memoizedState!==null,kr(n,i,a),Hn=u):kr(n,i,a);break;default:kr(n,i,a)}}function vm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Vx),i.forEach(function(u){var p=Zx.bind(null,n,u);a.has(u)||(a.add(u),u.then(p,p))})}}function Fi(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var p=a[u];try{var v=n,b=i,V=b;e:for(;V!==null;){switch(V.tag){case 5:In=V.stateNode,Ni=!1;break e;case 3:In=V.stateNode.containerInfo,Ni=!0;break e;case 4:In=V.stateNode.containerInfo,Ni=!0;break e}V=V.return}if(In===null)throw Error(t(160));gm(v,b,p),In=null,Ni=!1;var Z=p.alternate;Z!==null&&(Z.return=null),p.return=null}catch(me){on(p,i,me)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)xm(i,n),i=i.sibling}function xm(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Fi(i,n),Zi(n),u&4){try{ea(3,n,n.return),cl(3,n)}catch(lt){on(n,n.return,lt)}try{ea(5,n,n.return)}catch(lt){on(n,n.return,lt)}}break;case 1:Fi(i,n),Zi(n),u&512&&a!==null&&qs(a,a.return);break;case 5:if(Fi(i,n),Zi(n),u&512&&a!==null&&qs(a,a.return),n.flags&32){var p=n.stateNode;try{Te(p,"")}catch(lt){on(n,n.return,lt)}}if(u&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,b=a!==null?a.memoizedProps:v,V=n.type,Z=n.updateQueue;if(n.updateQueue=null,Z!==null)try{V==="input"&&v.type==="radio"&&v.name!=null&&st(p,v),Ie(V,b);var me=Ie(V,v);for(b=0;b<Z.length;b+=2){var De=Z[b],Ue=Z[b+1];De==="style"?Me(p,Ue):De==="dangerouslySetInnerHTML"?ye(p,Ue):De==="children"?Te(p,Ue):P(p,De,Ue,me)}switch(V){case"input":Ze(p,v);break;case"textarea":le(p,v);break;case"select":var Pe=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var $e=v.value;$e!=null?ft(p,!!v.multiple,$e,!1):Pe!==!!v.multiple&&(v.defaultValue!=null?ft(p,!!v.multiple,v.defaultValue,!0):ft(p,!!v.multiple,v.multiple?[]:"",!1))}p[Go]=v}catch(lt){on(n,n.return,lt)}}break;case 6:if(Fi(i,n),Zi(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(lt){on(n,n.return,lt)}}break;case 3:if(Fi(i,n),Zi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Io(i.containerInfo)}catch(lt){on(n,n.return,lt)}break;case 4:Fi(i,n),Zi(n);break;case 13:Fi(i,n),Zi(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(zu=wt())),u&4&&vm(n);break;case 22:if(De=a!==null&&a.memoizedState!==null,n.mode&1?(Hn=(me=Hn)||De,Fi(i,n),Hn=me):Fi(i,n),Zi(n),u&8192){if(me=n.memoizedState!==null,(n.stateNode.isHidden=me)&&!De&&(n.mode&1)!==0)for(tt=n,De=n.child;De!==null;){for(Ue=tt=De;tt!==null;){switch(Pe=tt,$e=Pe.child,Pe.tag){case 0:case 11:case 14:case 15:ea(4,Pe,Pe.return);break;case 1:qs(Pe,Pe.return);var rt=Pe.stateNode;if(typeof rt.componentWillUnmount=="function"){u=Pe,a=Pe.return;try{i=u,rt.props=i.memoizedProps,rt.state=i.memoizedState,rt.componentWillUnmount()}catch(lt){on(u,a,lt)}}break;case 5:qs(Pe,Pe.return);break;case 22:if(Pe.memoizedState!==null){Mm(Ue);continue}}$e!==null?($e.return=Pe,tt=$e):Mm(Ue)}De=De.sibling}e:for(De=null,Ue=n;;){if(Ue.tag===5){if(De===null){De=Ue;try{p=Ue.stateNode,me?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(V=Ue.stateNode,Z=Ue.memoizedProps.style,b=Z!=null&&Z.hasOwnProperty("display")?Z.display:null,V.style.display=ge("display",b))}catch(lt){on(n,n.return,lt)}}}else if(Ue.tag===6){if(De===null)try{Ue.stateNode.nodeValue=me?"":Ue.memoizedProps}catch(lt){on(n,n.return,lt)}}else if((Ue.tag!==22&&Ue.tag!==23||Ue.memoizedState===null||Ue===n)&&Ue.child!==null){Ue.child.return=Ue,Ue=Ue.child;continue}if(Ue===n)break e;for(;Ue.sibling===null;){if(Ue.return===null||Ue.return===n)break e;De===Ue&&(De=null),Ue=Ue.return}De===Ue&&(De=null),Ue.sibling.return=Ue.return,Ue=Ue.sibling}}break;case 19:Fi(i,n),Zi(n),u&4&&vm(n);break;case 21:break;default:Fi(i,n),Zi(n)}}function Zi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(pm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(Te(p,""),u.flags&=-33);var v=mm(n);ku(n,v,p);break;case 3:case 4:var b=u.stateNode.containerInfo,V=mm(n);Fu(n,V,b);break;default:throw Error(t(161))}}catch(Z){on(n,n.return,Z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Wx(n,i,a){tt=n,_m(n)}function _m(n,i,a){for(var u=(n.mode&1)!==0;tt!==null;){var p=tt,v=p.child;if(p.tag===22&&u){var b=p.memoizedState!==null||ll;if(!b){var V=p.alternate,Z=V!==null&&V.memoizedState!==null||Hn;V=ll;var me=Hn;if(ll=b,(Hn=Z)&&!me)for(tt=p;tt!==null;)b=tt,Z=b.child,b.tag===22&&b.memoizedState!==null?Sm(p):Z!==null?(Z.return=b,tt=Z):Sm(p);for(;v!==null;)tt=v,_m(v),v=v.sibling;tt=p,ll=V,Hn=me}ym(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,tt=v):ym(n)}}function ym(n){for(;tt!==null;){var i=tt;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Hn||cl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Hn)if(a===null)u.componentDidMount();else{var p=i.elementType===i.type?a.memoizedProps:Ui(i.type,a.memoizedProps);u.componentDidUpdate(p,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=i.updateQueue;v!==null&&Mp(i,v,u);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Mp(i,b,a)}break;case 5:var V=i.stateNode;if(a===null&&i.flags&4){a=V;var Z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Z.autoFocus&&a.focus();break;case"img":Z.src&&(a.src=Z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var me=i.alternate;if(me!==null){var De=me.memoizedState;if(De!==null){var Ue=De.dehydrated;Ue!==null&&Io(Ue)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Hn||i.flags&512&&Nu(i)}catch(Pe){on(i,i.return,Pe)}}if(i===n){tt=null;break}if(a=i.sibling,a!==null){a.return=i.return,tt=a;break}tt=i.return}}function Mm(n){for(;tt!==null;){var i=tt;if(i===n){tt=null;break}var a=i.sibling;if(a!==null){a.return=i.return,tt=a;break}tt=i.return}}function Sm(n){for(;tt!==null;){var i=tt;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{cl(4,i)}catch(Z){on(i,a,Z)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var p=i.return;try{u.componentDidMount()}catch(Z){on(i,p,Z)}}var v=i.return;try{Nu(i)}catch(Z){on(i,v,Z)}break;case 5:var b=i.return;try{Nu(i)}catch(Z){on(i,b,Z)}}}catch(Z){on(i,i.return,Z)}if(i===n){tt=null;break}var V=i.sibling;if(V!==null){V.return=i.return,tt=V;break}tt=i.return}}var Xx=Math.ceil,ul=R.ReactCurrentDispatcher,Ou=R.ReactCurrentOwner,Si=R.ReactCurrentBatchConfig,Vt=0,An=null,fn=null,Dn=0,di=0,Ys=Ir(0),gn=0,ta=null,cs=0,fl=0,Bu=0,na=null,ri=null,zu=0,Qs=1/0,pr=null,hl=!1,Hu=null,Or=null,dl=!1,Br=null,pl=0,ia=0,Vu=null,ml=-1,gl=0;function Yn(){return(Vt&6)!==0?wt():ml!==-1?ml:ml=wt()}function zr(n){return(n.mode&1)===0?1:(Vt&2)!==0&&Dn!==0?Dn&-Dn:Cx.transition!==null?(gl===0&&(gl=Ke()),gl):(n=bt,n!==0||(n=window.event,n=n===void 0?16:Ed(n.type)),n)}function ki(n,i,a,u){if(50<ia)throw ia=0,Vu=null,Error(t(185));Pt(n,a,u),((Vt&2)===0||n!==An)&&(n===An&&((Vt&2)===0&&(fl|=a),gn===4&&Hr(n,Dn)),si(n,u),a===1&&Vt===0&&(i.mode&1)===0&&(Qs=wt()+500,Wa&&Ur()))}function si(n,i){var a=n.callbackNode;zt(n,i);var u=Ot(n,n===An?Dn:0);if(u===0)a!==null&&Rn(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Rn(a),i===1)n.tag===0?bx(Em.bind(null,n)):cp(Em.bind(null,n)),Ax(function(){(Vt&6)===0&&Ur()}),a=null;else{switch(ci(u)){case 1:a=pn;break;case 4:a=C;break;case 16:a=ee;break;case 536870912:a=re;break;default:a=ee}a=Im(a,Am.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Am(n,i){if(ml=-1,gl=0,(Vt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Js()&&n.callbackNode!==a)return null;var u=Ot(n,n===An?Dn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=vl(n,u);else{i=u;var p=Vt;Vt|=2;var v=Tm();(An!==n||Dn!==i)&&(pr=null,Qs=wt()+500,fs(n,i));do try{qx();break}catch(V){wm(n,V)}while(!0);ou(),ul.current=v,Vt=p,fn!==null?i=0:(An=null,Dn=0,i=gn)}if(i!==0){if(i===2&&(p=en(n),p!==0&&(u=p,i=Gu(n,p))),i===1)throw a=ta,fs(n,0),Hr(n,u),si(n,wt()),a;if(i===6)Hr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!jx(p)&&(i=vl(n,u),i===2&&(v=en(n),v!==0&&(u=v,i=Gu(n,v))),i===1))throw a=ta,fs(n,0),Hr(n,u),si(n,wt()),a;switch(n.finishedWork=p,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:hs(n,ri,pr);break;case 3:if(Hr(n,u),(u&130023424)===u&&(i=zu+500-wt(),10<i)){if(Ot(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Yn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Yc(hs.bind(null,n,ri,pr),i);break}hs(n,ri,pr);break;case 4:if(Hr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,p=-1;0<u;){var b=31-Be(u);v=1<<b,b=i[b],b>p&&(p=b),u&=~v}if(u=p,u=wt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Xx(u/1960))-u,10<u){n.timeoutHandle=Yc(hs.bind(null,n,ri,pr),u);break}hs(n,ri,pr);break;case 5:hs(n,ri,pr);break;default:throw Error(t(329))}}}return si(n,wt()),n.callbackNode===a?Am.bind(null,n):null}function Gu(n,i){var a=na;return n.current.memoizedState.isDehydrated&&(fs(n,i).flags|=256),n=vl(n,i),n!==2&&(i=ri,ri=a,i!==null&&Wu(i)),n}function Wu(n){ri===null?ri=n:ri.push.apply(ri,n)}function jx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var p=a[u],v=p.getSnapshot;p=p.value;try{if(!Ii(v(),p))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Hr(n,i){for(i&=~Bu,i&=~fl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Be(i),u=1<<a;n[a]=-1,i&=~u}}function Em(n){if((Vt&6)!==0)throw Error(t(327));Js();var i=Ot(n,0);if((i&1)===0)return si(n,wt()),null;var a=vl(n,i);if(n.tag!==0&&a===2){var u=en(n);u!==0&&(i=u,a=Gu(n,u))}if(a===1)throw a=ta,fs(n,0),Hr(n,i),si(n,wt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,hs(n,ri,pr),si(n,wt()),null}function Xu(n,i){var a=Vt;Vt|=1;try{return n(i)}finally{Vt=a,Vt===0&&(Qs=wt()+500,Wa&&Ur())}}function us(n){Br!==null&&Br.tag===0&&(Vt&6)===0&&Js();var i=Vt;Vt|=1;var a=Si.transition,u=bt;try{if(Si.transition=null,bt=1,n)return n()}finally{bt=u,Si.transition=a,Vt=i,(Vt&6)===0&&Ur()}}function ju(){di=Ys.current,$t(Ys)}function fs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Sx(a)),fn!==null)for(a=fn.return;a!==null;){var u=a;switch(tu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Va();break;case 3:js(),$t(ti),$t(On),pu();break;case 5:hu(u);break;case 4:js();break;case 13:$t(nn);break;case 19:$t(nn);break;case 10:au(u.type._context);break;case 22:case 23:ju()}a=a.return}if(An=n,fn=n=Vr(n.current,null),Dn=di=i,gn=0,ta=null,Bu=fl=cs=0,ri=na=null,os!==null){for(i=0;i<os.length;i++)if(a=os[i],u=a.interleaved,u!==null){a.interleaved=null;var p=u.next,v=a.pending;if(v!==null){var b=v.next;v.next=p,u.next=b}a.pending=u}os=null}return n}function wm(n,i){do{var a=fn;try{if(ou(),el.current=rl,tl){for(var u=rn.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}tl=!1}if(ls=0,Sn=mn=rn=null,Yo=!1,Qo=0,Ou.current=null,a===null||a.return===null){gn=1,ta=i,fn=null;break}e:{var v=n,b=a.return,V=a,Z=i;if(i=Dn,V.flags|=32768,Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var me=Z,De=V,Ue=De.tag;if((De.mode&1)===0&&(Ue===0||Ue===11||Ue===15)){var Pe=De.alternate;Pe?(De.updateQueue=Pe.updateQueue,De.memoizedState=Pe.memoizedState,De.lanes=Pe.lanes):(De.updateQueue=null,De.memoizedState=null)}var $e=Qp(b);if($e!==null){$e.flags&=-257,Jp($e,b,V,v,i),$e.mode&1&&Yp(v,me,i),i=$e,Z=me;var rt=i.updateQueue;if(rt===null){var lt=new Set;lt.add(Z),i.updateQueue=lt}else rt.add(Z);break e}else{if((i&1)===0){Yp(v,me,i),Ku();break e}Z=Error(t(426))}}else if(tn&&V.mode&1){var ln=Qp(b);if(ln!==null){(ln.flags&65536)===0&&(ln.flags|=256),Jp(ln,b,V,v,i),ru(Ks(Z,V));break e}}v=Z=Ks(Z,V),gn!==4&&(gn=2),na===null?na=[v]:na.push(v),v=b;do{switch(v.tag){case 3:v.flags|=65536,i&=-i,v.lanes|=i;var ue=Kp(v,Z,i);yp(v,ue);break e;case 1:V=Z;var ne=v.type,fe=v.stateNode;if((v.flags&128)===0&&(typeof ne.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(Or===null||!Or.has(fe)))){v.flags|=65536,i&=-i,v.lanes|=i;var ze=qp(v,V,i);yp(v,ze);break e}}v=v.return}while(v!==null)}Cm(a)}catch(ut){i=ut,fn===a&&a!==null&&(fn=a=a.return);continue}break}while(!0)}function Tm(){var n=ul.current;return ul.current=rl,n===null?rl:n}function Ku(){(gn===0||gn===3||gn===2)&&(gn=4),An===null||(cs&268435455)===0&&(fl&268435455)===0||Hr(An,Dn)}function vl(n,i){var a=Vt;Vt|=2;var u=Tm();(An!==n||Dn!==i)&&(pr=null,fs(n,i));do try{Kx();break}catch(p){wm(n,p)}while(!0);if(ou(),Vt=a,ul.current=u,fn!==null)throw Error(t(261));return An=null,Dn=0,gn}function Kx(){for(;fn!==null;)bm(fn)}function qx(){for(;fn!==null&&!kn();)bm(fn)}function bm(n){var i=Lm(n.alternate,n,di);n.memoizedProps=n.pendingProps,i===null?Cm(n):fn=i,Ou.current=null}function Cm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=zx(a,i,di),a!==null){fn=a;return}}else{if(a=Hx(a,i),a!==null){a.flags&=32767,fn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gn=6,fn=null;return}}if(i=i.sibling,i!==null){fn=i;return}fn=i=n}while(i!==null);gn===0&&(gn=5)}function hs(n,i,a){var u=bt,p=Si.transition;try{Si.transition=null,bt=1,Yx(n,i,a,u)}finally{Si.transition=p,bt=u}return null}function Yx(n,i,a,u){do Js();while(Br!==null);if((Vt&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(Pn(n,v),n===An&&(fn=An=null,Dn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||dl||(dl=!0,Im(ee,function(){return Js(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=Si.transition,Si.transition=null;var b=bt;bt=1;var V=Vt;Vt|=4,Ou.current=null,Gx(n,a),xm(a,n),mx(Kc),Ca=!!jc,Kc=jc=null,n.current=a,Wx(a),ot(),Vt=V,bt=b,Si.transition=v}else n.current=a;if(dl&&(dl=!1,Br=n,pl=p),v=n.pendingLanes,v===0&&(Or=null),je(a.stateNode),si(n,wt()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)p=i[a],u(p.value,{componentStack:p.stack,digest:p.digest});if(hl)throw hl=!1,n=Hu,Hu=null,n;return(pl&1)!==0&&n.tag!==0&&Js(),v=n.pendingLanes,(v&1)!==0?n===Vu?ia++:(ia=0,Vu=n):ia=0,Ur(),null}function Js(){if(Br!==null){var n=ci(pl),i=Si.transition,a=bt;try{if(Si.transition=null,bt=16>n?16:n,Br===null)var u=!1;else{if(n=Br,Br=null,pl=0,(Vt&6)!==0)throw Error(t(331));var p=Vt;for(Vt|=4,tt=n.current;tt!==null;){var v=tt,b=v.child;if((tt.flags&16)!==0){var V=v.deletions;if(V!==null){for(var Z=0;Z<V.length;Z++){var me=V[Z];for(tt=me;tt!==null;){var De=tt;switch(De.tag){case 0:case 11:case 15:ea(8,De,v)}var Ue=De.child;if(Ue!==null)Ue.return=De,tt=Ue;else for(;tt!==null;){De=tt;var Pe=De.sibling,$e=De.return;if(dm(De),De===me){tt=null;break}if(Pe!==null){Pe.return=$e,tt=Pe;break}tt=$e}}}var rt=v.alternate;if(rt!==null){var lt=rt.child;if(lt!==null){rt.child=null;do{var ln=lt.sibling;lt.sibling=null,lt=ln}while(lt!==null)}}tt=v}}if((v.subtreeFlags&2064)!==0&&b!==null)b.return=v,tt=b;else e:for(;tt!==null;){if(v=tt,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:ea(9,v,v.return)}var ue=v.sibling;if(ue!==null){ue.return=v.return,tt=ue;break e}tt=v.return}}var ne=n.current;for(tt=ne;tt!==null;){b=tt;var fe=b.child;if((b.subtreeFlags&2064)!==0&&fe!==null)fe.return=b,tt=fe;else e:for(b=ne;tt!==null;){if(V=tt,(V.flags&2048)!==0)try{switch(V.tag){case 0:case 11:case 15:cl(9,V)}}catch(ut){on(V,V.return,ut)}if(V===b){tt=null;break e}var ze=V.sibling;if(ze!==null){ze.return=V.return,tt=ze;break e}tt=V.return}}if(Vt=p,Ur(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(ae,n)}catch{}u=!0}return u}finally{bt=a,Si.transition=i}}return!1}function Rm(n,i,a){i=Ks(a,i),i=Kp(n,i,1),n=Fr(n,i,1),i=Yn(),n!==null&&(Pt(n,1,i),si(n,i))}function on(n,i,a){if(n.tag===3)Rm(n,n,a);else for(;i!==null;){if(i.tag===3){Rm(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Or===null||!Or.has(u))){n=Ks(a,n),n=qp(i,n,1),i=Fr(i,n,1),n=Yn(),i!==null&&(Pt(i,1,n),si(i,n));break}}i=i.return}}function Qx(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Yn(),n.pingedLanes|=n.suspendedLanes&a,An===n&&(Dn&a)===a&&(gn===4||gn===3&&(Dn&130023424)===Dn&&500>wt()-zu?fs(n,0):Bu|=a),si(n,i)}function Pm(n,i){i===0&&((n.mode&1)===0?i=1:(i=et,et<<=1,(et&130023424)===0&&(et=4194304)));var a=Yn();n=fr(n,i),n!==null&&(Pt(n,i,a),si(n,a))}function Jx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Pm(n,a)}function Zx(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Pm(n,a)}var Lm;Lm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ti.current)ii=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ii=!1,Bx(n,i,a);ii=(n.flags&131072)!==0}else ii=!1,tn&&(i.flags&1048576)!==0&&up(i,ja,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;al(n,i),n=i.pendingProps;var p=Bs(i,On.current);Xs(i,a),p=vu(null,i,u,n,p,a);var v=xu();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ni(u)?(v=!0,Ga(i)):v=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,uu(i),p.updater=sl,i.stateNode=p,p._reactInternals=i,Eu(i,u,n,a),i=Cu(null,i,u,!0,v,a)):(i.tag=0,tn&&v&&eu(i),qn(null,i,p,a),i=i.child),i;case 16:u=i.elementType;e:{switch(al(n,i),n=i.pendingProps,p=u._init,u=p(u._payload),i.type=u,p=i.tag=e_(u),n=Ui(u,n),p){case 0:i=bu(null,i,u,n,a);break e;case 1:i=im(null,i,u,n,a);break e;case 11:i=Zp(null,i,u,n,a);break e;case 14:i=$p(null,i,u,Ui(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ui(u,p),bu(n,i,u,p,a);case 1:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ui(u,p),im(n,i,u,p,a);case 3:e:{if(rm(i),n===null)throw Error(t(387));u=i.pendingProps,v=i.memoizedState,p=v.element,_p(n,i),Za(i,u,null,a);var b=i.memoizedState;if(u=b.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=v,i.memoizedState=v,i.flags&256){p=Ks(Error(t(423)),i),i=sm(n,i,u,a,p);break e}else if(u!==p){p=Ks(Error(t(424)),i),i=sm(n,i,u,a,p);break e}else for(hi=Lr(i.stateNode.containerInfo.firstChild),fi=i,tn=!0,Di=null,a=vp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Vs(),u===p){i=dr(n,i,a);break e}qn(n,i,u,a)}i=i.child}return i;case 5:return Sp(i),n===null&&iu(i),u=i.type,p=i.pendingProps,v=n!==null?n.memoizedProps:null,b=p.children,qc(u,p)?b=null:v!==null&&qc(u,v)&&(i.flags|=32),nm(n,i),qn(n,i,b,a),i.child;case 6:return n===null&&iu(i),null;case 13:return om(n,i,a);case 4:return fu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Gs(i,null,u,a):qn(n,i,u,a),i.child;case 11:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ui(u,p),Zp(n,i,u,p,a);case 7:return qn(n,i,i.pendingProps,a),i.child;case 8:return qn(n,i,i.pendingProps.children,a),i.child;case 12:return qn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,p=i.pendingProps,v=i.memoizedProps,b=p.value,Jt(Ya,u._currentValue),u._currentValue=b,v!==null)if(Ii(v.value,b)){if(v.children===p.children&&!ti.current){i=dr(n,i,a);break e}}else for(v=i.child,v!==null&&(v.return=i);v!==null;){var V=v.dependencies;if(V!==null){b=v.child;for(var Z=V.firstContext;Z!==null;){if(Z.context===u){if(v.tag===1){Z=hr(-1,a&-a),Z.tag=2;var me=v.updateQueue;if(me!==null){me=me.shared;var De=me.pending;De===null?Z.next=Z:(Z.next=De.next,De.next=Z),me.pending=Z}}v.lanes|=a,Z=v.alternate,Z!==null&&(Z.lanes|=a),lu(v.return,a,i),V.lanes|=a;break}Z=Z.next}}else if(v.tag===10)b=v.type===i.type?null:v.child;else if(v.tag===18){if(b=v.return,b===null)throw Error(t(341));b.lanes|=a,V=b.alternate,V!==null&&(V.lanes|=a),lu(b,a,i),b=v.sibling}else b=v.child;if(b!==null)b.return=v;else for(b=v;b!==null;){if(b===i){b=null;break}if(v=b.sibling,v!==null){v.return=b.return,b=v;break}b=b.return}v=b}qn(n,i,p.children,a),i=i.child}return i;case 9:return p=i.type,u=i.pendingProps.children,Xs(i,a),p=yi(p),u=u(p),i.flags|=1,qn(n,i,u,a),i.child;case 14:return u=i.type,p=Ui(u,i.pendingProps),p=Ui(u.type,p),$p(n,i,u,p,a);case 15:return em(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ui(u,p),al(n,i),i.tag=1,ni(u)?(n=!0,Ga(i)):n=!1,Xs(i,a),Xp(i,u,p),Eu(i,u,p,a),Cu(null,i,u,!0,n,a);case 19:return lm(n,i,a);case 22:return tm(n,i,a)}throw Error(t(156,i.tag))};function Im(n,i){return Cn(n,i)}function $x(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(n,i,a,u){return new $x(n,i,a,u)}function qu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function e_(n){if(typeof n=="function")return qu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===D)return 11;if(n===G)return 14}return 2}function Vr(n,i){var a=n.alternate;return a===null?(a=Ai(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function xl(n,i,a,u,p,v){var b=2;if(u=n,typeof n=="function")qu(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case O:return ds(a.children,p,v,i);case E:b=8,p|=8;break;case U:return n=Ai(12,a,i,p|2),n.elementType=U,n.lanes=v,n;case W:return n=Ai(13,a,i,p),n.elementType=W,n.lanes=v,n;case $:return n=Ai(19,a,i,p),n.elementType=$,n.lanes=v,n;case X:return _l(a,p,v,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case q:b=10;break e;case H:b=9;break e;case D:b=11;break e;case G:b=14;break e;case ie:b=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ai(b,a,i,p),i.elementType=n,i.type=u,i.lanes=v,i}function ds(n,i,a,u){return n=Ai(7,n,u,i),n.lanes=a,n}function _l(n,i,a,u){return n=Ai(22,n,u,i),n.elementType=X,n.lanes=a,n.stateNode={isHidden:!1},n}function Yu(n,i,a){return n=Ai(6,n,null,i),n.lanes=a,n}function Qu(n,i,a){return i=Ai(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function t_(n,i,a,u,p){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=un(0),this.expirationTimes=un(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=un(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Ju(n,i,a,u,p,v,b,V,Z){return n=new t_(n,i,a,V,Z),i===1?(i=1,v===!0&&(i|=8)):i=0,v=Ai(3,null,null,i),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},uu(v),n}function n_(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Dm(n){if(!n)return Dr;n=n._reactInternals;e:{if(Fn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ni(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ni(a))return ap(n,a,i)}return i}function Um(n,i,a,u,p,v,b,V,Z){return n=Ju(a,u,!0,n,p,v,b,V,Z),n.context=Dm(null),a=n.current,u=Yn(),p=zr(a),v=hr(u,p),v.callback=i??null,Fr(a,v,p),n.current.lanes=p,Pt(n,p,u),si(n,u),n}function yl(n,i,a,u){var p=i.current,v=Yn(),b=zr(p);return a=Dm(a),i.context===null?i.context=a:i.pendingContext=a,i=hr(v,b),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Fr(p,i,b),n!==null&&(ki(n,p,b,v),Ja(n,p,b)),b}function Ml(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Nm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Zu(n,i){Nm(n,i),(n=n.alternate)&&Nm(n,i)}function i_(){return null}var Fm=typeof reportError=="function"?reportError:function(n){console.error(n)};function $u(n){this._internalRoot=n}Sl.prototype.render=$u.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));yl(n,i,null,null)},Sl.prototype.unmount=$u.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;us(function(){yl(null,n,null,null)}),i[ar]=null}};function Sl(n){this._internalRoot=n}Sl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ht();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Cr.length&&i!==0&&i<Cr[a].priority;a++);Cr.splice(a,0,n),a===0&&Sd(n)}};function ef(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function km(){}function r_(n,i,a,u,p){if(p){if(typeof u=="function"){var v=u;u=function(){var me=Ml(b);v.call(me)}}var b=Um(i,u,n,0,null,!1,!1,"",km);return n._reactRootContainer=b,n[ar]=b.current,Ho(n.nodeType===8?n.parentNode:n),us(),b}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var V=u;u=function(){var me=Ml(Z);V.call(me)}}var Z=Ju(n,0,!1,null,null,!1,!1,"",km);return n._reactRootContainer=Z,n[ar]=Z.current,Ho(n.nodeType===8?n.parentNode:n),us(function(){yl(i,Z,a,u)}),Z}function El(n,i,a,u,p){var v=a._reactRootContainer;if(v){var b=v;if(typeof p=="function"){var V=p;p=function(){var Z=Ml(b);V.call(Z)}}yl(i,b,n,p)}else b=r_(a,i,n,p,u);return Ml(b)}Bt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Rt(i.pendingLanes);a!==0&&(Ln(i,a|1),si(i,wt()),(Vt&6)===0&&(Qs=wt()+500,Ur()))}break;case 13:us(function(){var u=fr(n,1);if(u!==null){var p=Yn();ki(u,n,1,p)}}),Zu(n,1)}},Qt=function(n){if(n.tag===13){var i=fr(n,134217728);if(i!==null){var a=Yn();ki(i,n,134217728,a)}Zu(n,134217728)}},Mn=function(n){if(n.tag===13){var i=zr(n),a=fr(n,i);if(a!==null){var u=Yn();ki(a,n,i,u)}Zu(n,i)}},Ht=function(){return bt},Li=function(n,i){var a=bt;try{return bt=n,i()}finally{bt=a}},gt=function(n,i,a){switch(i){case"input":if(Ze(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var p=Ha(u);if(!p)throw Error(t(90));Ye(u),Ze(u,p)}}}break;case"textarea":le(n,a);break;case"select":i=a.value,i!=null&&ft(n,!!a.multiple,i,!1)}},we=Xu,xe=us;var s_={usingClientEntryPoint:!1,Events:[Wo,ks,Ha,_e,Xe,Xu]},ra={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},o_={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=yn(n),n===null?null:n.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||i_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{ae=wl.inject(o_),Fe=wl}catch{}}return oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s_,oi.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ef(i))throw Error(t(200));return n_(n,i,null,a)},oi.createRoot=function(n,i){if(!ef(n))throw Error(t(299));var a=!1,u="",p=Fm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=Ju(n,1,!1,null,null,a,!1,u,p),n[ar]=i.current,Ho(n.nodeType===8?n.parentNode:n),new $u(i)},oi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=yn(i),n=n===null?null:n.stateNode,n},oi.flushSync=function(n){return us(n)},oi.hydrate=function(n,i,a){if(!Al(i))throw Error(t(200));return El(null,n,i,!0,a)},oi.hydrateRoot=function(n,i,a){if(!ef(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,p=!1,v="",b=Fm;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=Um(i,null,n,1,a??null,p,!1,v,b),n[ar]=i.current,Ho(n),u)for(n=0;n<u.length;n++)a=u[n],p=a._getVersion,p=p(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,p]:i.mutableSourceEagerHydrationData.push(a,p);return new Sl(i)},oi.render=function(n,i,a){if(!Al(i))throw Error(t(200));return El(null,n,i,!1,a)},oi.unmountComponentAtNode=function(n){if(!Al(n))throw Error(t(40));return n._reactRootContainer?(us(function(){El(null,null,n,!1,function(){n._reactRootContainer=null,n[ar]=null})}),!0):!1},oi.unstable_batchedUpdates=Xu,oi.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Al(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return El(n,i,a,!1,u)},oi.version="18.3.1-next-f1338f8080-20240426",oi}var Xm;function g_(){if(Xm)return rf.exports;Xm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),rf.exports=m_(),rf.exports}var jm;function v_(){if(jm)return Tl;jm=1;var s=g_();return Tl.createRoot=s.createRoot,Tl.hydrateRoot=s.hydrateRoot,Tl}var x_=v_();const Km={field:{count:1400,size:1,drift:1},look:{trail:.35,grain:.5,glow:1},form:{circle:0},hands:{reach:1,clap:1},sound:{beat:1,sparks:1,bass:1,quiet:0}};function __(s,e){let t=s;for(const r of e.split(".")){if(typeof t!="object"||t===null)return;t=t[r]}return typeof t=="number"?t:void 0}function bs(s,e){const t=structuredClone(s);for(const[r,o]of Object.entries(e)){if(!Number.isFinite(o)||__(s,r)===void 0)continue;const l=r.split("."),c=l.pop();let f=t;for(const d of l)f=f[d];f[c]=o}return t}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qh="184",y_=0,qm=1,M_=2,nc=1,S_=2,ga=3,es=0,li=1,Gi=2,Mr=0,xo=1,Ym=2,Qm=3,Jm=4,A_=5,ys=100,E_=101,w_=102,T_=103,b_=104,C_=200,R_=201,P_=202,L_=203,th=204,nh=205,I_=206,D_=207,U_=208,N_=209,F_=210,k_=211,O_=212,B_=213,z_=214,ih=0,rh=1,sh=2,yo=3,oh=4,ah=5,lh=6,ch=7,Ng=0,H_=1,V_=2,ir=0,Fg=1,kg=2,Og=3,Bg=4,zg=5,Hg=6,Vg=7,Gg=300,Es=301,Mo=302,af=303,lf=304,Mc=306,uc=1e3,yr=1001,uh=1002,vn=1003,G_=1004,bl=1005,Tn=1006,cf=1007,Ss=1008,Ti=1009,Wg=1010,Xg=1011,Ma=1012,Jh=1013,or=1014,Xi=1015,Ar=1016,Zh=1017,$h=1018,Sa=1020,jg=35902,Kg=35899,qg=1021,Yg=1022,bi=1023,Er=1026,As=1027,Qg=1028,ed=1029,ws=1030,td=1031,nd=1033,ic=33776,rc=33777,sc=33778,oc=33779,fh=35840,hh=35841,dh=35842,ph=35843,mh=36196,gh=37492,vh=37496,xh=37488,_h=37489,fc=37490,yh=37491,Mh=37808,Sh=37809,Ah=37810,Eh=37811,wh=37812,Th=37813,bh=37814,Ch=37815,Rh=37816,Ph=37817,Lh=37818,Ih=37819,Dh=37820,Uh=37821,Nh=36492,Fh=36494,kh=36495,Oh=36283,Bh=36284,hc=36285,zh=36286,W_=3200,Zm=0,X_=1,Zr="",wi="srgb",dc="srgb-linear",pc="linear",qt="srgb",Zs=7680,$m=519,j_=512,K_=513,q_=514,id=515,Y_=516,Q_=517,rd=518,J_=519,e0=35044,t0=35048,n0="300 es",nr=2e3,mc=2001;function Z_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function gc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $_(){const s=gc("canvas");return s.style.display="block",s}const i0={};function r0(...s){const e="THREE."+s.shift();console.log(e,...s)}function Jg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Mt(...s){s=Jg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Wt(...s){s=Jg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Hh(...s){const e=s.join(" ");e in i0||(i0[e]=!0,Mt(...s))}function ey(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const ty={[ih]:rh,[sh]:lh,[oh]:ch,[yo]:ah,[rh]:ih,[lh]:sh,[ch]:oh,[ah]:yo};class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let s0=1234567;const _a=Math.PI/180,Aa=180/Math.PI;function Eo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Vn[s&255]+Vn[s>>8&255]+Vn[s>>16&255]+Vn[s>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[t&63|128]+Vn[t>>8&255]+"-"+Vn[t>>16&255]+Vn[t>>24&255]+Vn[r&255]+Vn[r>>8&255]+Vn[r>>16&255]+Vn[r>>24&255]).toLowerCase()}function Ut(s,e,t){return Math.max(e,Math.min(t,s))}function sd(s,e){return(s%e+e)%e}function ny(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function iy(s,e,t){return s!==e?(t-s)/(e-s):0}function ya(s,e,t){return(1-t)*s+t*e}function ry(s,e,t,r){return ya(s,e,1-Math.exp(-t*r))}function sy(s,e=1){return e-Math.abs(sd(s,e*2)-e)}function oy(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ay(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ly(s,e){return s+Math.floor(Math.random()*(e-s+1))}function cy(s,e){return s+Math.random()*(e-s)}function uy(s){return s*(.5-Math.random())}function fy(s){s!==void 0&&(s0=s);let e=s0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hy(s){return s*_a}function dy(s){return s*Aa}function py(s){return(s&s-1)===0&&s!==0}function my(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function gy(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function vy(s,e,t,r,o){const l=Math.cos,c=Math.sin,f=l(t/2),d=c(t/2),h=l((e+r)/2),g=c((e+r)/2),x=l((e-r)/2),m=c((e-r)/2),_=l((r-e)/2),S=c((r-e)/2);switch(o){case"XYX":s.set(f*g,d*x,d*m,f*h);break;case"YZY":s.set(d*m,f*g,d*x,f*h);break;case"ZXZ":s.set(d*x,d*m,f*g,f*h);break;case"XZX":s.set(f*g,d*S,d*_,f*h);break;case"YXY":s.set(d*_,f*g,d*S,f*h);break;case"ZYZ":s.set(d*S,d*_,f*g,f*h);break;default:Mt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function po(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const uf={DEG2RAD:_a,RAD2DEG:Aa,generateUUID:Eo,clamp:Ut,euclideanModulo:sd,mapLinear:ny,inverseLerp:iy,lerp:ya,damp:ry,pingpong:sy,smoothstep:oy,smootherstep:ay,randInt:ly,randFloat:cy,randFloatSpread:uy,seededRandom:fy,degToRad:hy,radToDeg:dy,isPowerOfTwo:py,ceilPowerOfTwo:my,floorPowerOfTwo:gy,setQuaternionFromProperEuler:vy,normalize:Qn,denormalize:po},gd=class gd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ut(this.x,e.x,t.x),this.y=Ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ut(this.x,e,t),this.y=Ut(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ut(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ut(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gd.prototype.isVector2=!0;let Nt=gd;class rr{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let d=r[o+0],h=r[o+1],g=r[o+2],x=r[o+3],m=l[c+0],_=l[c+1],S=l[c+2],T=l[c+3];if(x!==T||d!==m||h!==_||g!==S){let y=d*m+h*_+g*S+x*T;y<0&&(m=-m,_=-_,S=-S,T=-T,y=-y);let M=1-f;if(y<.9995){const w=Math.acos(y),P=Math.sin(w);M=Math.sin(M*w)/P,f=Math.sin(f*w)/P,d=d*M+m*f,h=h*M+_*f,g=g*M+S*f,x=x*M+T*f}else{d=d*M+m*f,h=h*M+_*f,g=g*M+S*f,x=x*M+T*f;const w=1/Math.sqrt(d*d+h*h+g*g+x*x);d*=w,h*=w,g*=w,x*=w}}e[t]=d,e[t+1]=h,e[t+2]=g,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],d=r[o+1],h=r[o+2],g=r[o+3],x=l[c],m=l[c+1],_=l[c+2],S=l[c+3];return e[t]=f*S+g*x+d*_-h*m,e[t+1]=d*S+g*m+h*x-f*_,e[t+2]=h*S+g*_+f*m-d*x,e[t+3]=g*S-f*x-d*m-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(r/2),g=f(o/2),x=f(l/2),m=d(r/2),_=d(o/2),S=d(l/2);switch(c){case"XYZ":this._x=m*g*x+h*_*S,this._y=h*_*x-m*g*S,this._z=h*g*S+m*_*x,this._w=h*g*x-m*_*S;break;case"YXZ":this._x=m*g*x+h*_*S,this._y=h*_*x-m*g*S,this._z=h*g*S-m*_*x,this._w=h*g*x+m*_*S;break;case"ZXY":this._x=m*g*x-h*_*S,this._y=h*_*x+m*g*S,this._z=h*g*S+m*_*x,this._w=h*g*x-m*_*S;break;case"ZYX":this._x=m*g*x-h*_*S,this._y=h*_*x+m*g*S,this._z=h*g*S-m*_*x,this._w=h*g*x+m*_*S;break;case"YZX":this._x=m*g*x+h*_*S,this._y=h*_*x+m*g*S,this._z=h*g*S-m*_*x,this._w=h*g*x-m*_*S;break;case"XZY":this._x=m*g*x-h*_*S,this._y=h*_*x-m*g*S,this._z=h*g*S+m*_*x,this._w=h*g*x+m*_*S;break;default:Mt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],d=t[9],h=t[2],g=t[6],x=t[10],m=r+f+x;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(g-d)*_,this._y=(l-h)*_,this._z=(c-o)*_}else if(r>f&&r>x){const _=2*Math.sqrt(1+r-f-x);this._w=(g-d)/_,this._x=.25*_,this._y=(o+c)/_,this._z=(l+h)/_}else if(f>x){const _=2*Math.sqrt(1+f-r-x);this._w=(l-h)/_,this._x=(o+c)/_,this._y=.25*_,this._z=(d+g)/_}else{const _=2*Math.sqrt(1+x-r-f);this._w=(c-o)/_,this._x=(l+h)/_,this._y=(d+g)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,d=t._y,h=t._z,g=t._w;return this._x=r*g+c*f+o*h-l*d,this._y=o*g+c*d+l*f-r*h,this._z=l*g+c*h+r*d-o*f,this._w=c*g-r*f-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,c=-c,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);d=Math.sin(d*h)/g,t=Math.sin(t*h)/g,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vd=class vd{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(o0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(o0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*o-f*r),g=2*(f*t-l*o),x=2*(l*r-c*t);return this.x=t+d*h+c*x-f*g,this.y=r+d*g+f*h-l*x,this.z=o+d*x+l*g-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ut(this.x,e.x,t.x),this.y=Ut(this.y,e.y,t.y),this.z=Ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ut(this.x,e,t),this.y=Ut(this.y,e,t),this.z=Ut(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ut(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*c-r*d,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ff.copy(this).projectOnVector(e),this.sub(ff)}reflect(e){return this.sub(ff.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ut(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vd.prototype.isVector3=!0;let J=vd;const ff=new J,o0=new rr,xd=class xd{constructor(e,t,r,o,l,c,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,h)}set(e,t,r,o,l,c,f,d,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=l,g[5]=d,g[6]=r,g[7]=c,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],d=r[6],h=r[1],g=r[4],x=r[7],m=r[2],_=r[5],S=r[8],T=o[0],y=o[3],M=o[6],w=o[1],P=o[4],R=o[7],z=o[2],I=o[5],O=o[8];return l[0]=c*T+f*w+d*z,l[3]=c*y+f*P+d*I,l[6]=c*M+f*R+d*O,l[1]=h*T+g*w+x*z,l[4]=h*y+g*P+x*I,l[7]=h*M+g*R+x*O,l[2]=m*T+_*w+S*z,l[5]=m*y+_*P+S*I,l[8]=m*M+_*R+S*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8];return t*c*g-t*f*h-r*l*g+r*f*d+o*l*h-o*c*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8],x=g*c-f*h,m=f*d-g*l,_=h*l-c*d,S=t*x+r*m+o*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=x*T,e[1]=(o*h-g*r)*T,e[2]=(f*r-o*c)*T,e[3]=m*T,e[4]=(g*t-o*d)*T,e[5]=(o*l-f*t)*T,e[6]=_*T,e[7]=(r*d-h*t)*T,e[8]=(c*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*c+h*f)+c+e,-o*h,o*d,-o*(-h*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(hf.makeScale(e,t)),this}rotate(e){return this.premultiply(hf.makeRotation(-e)),this}translate(e,t){return this.premultiply(hf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xd.prototype.isMatrix3=!0;let Tt=xd;const hf=new Tt,a0=new Tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),l0=new Tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xy(){const s={enabled:!0,workingColorSpace:dc,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===qt&&(o.r=Sr(o.r),o.g=Sr(o.g),o.b=Sr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===qt&&(o.r=_o(o.r),o.g=_o(o.g),o.b=_o(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Zr?pc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Hh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Hh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[dc]:{primaries:e,whitePoint:r,transfer:pc,toXYZ:a0,fromXYZ:l0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wi},outputColorSpaceConfig:{drawingBufferColorSpace:wi}},[wi]:{primaries:e,whitePoint:r,transfer:qt,toXYZ:a0,fromXYZ:l0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wi}}}),s}const kt=xy();function Sr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _o(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let $s;class _y{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{$s===void 0&&($s=gc("canvas")),$s.width=e.width,$s.height=e.height;const o=$s.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=$s}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Sr(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Sr(t[r]/255)*255):t[r]=Sr(t[r]);return{data:t,width:e.width,height:e.height}}else return Mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yy=0;class od{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=Eo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(df(o[c].image)):l.push(df(o[c]))}else l=df(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function df(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_y.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Mt("Texture: Unable to serialize Texture."),{})}let My=0;const pf=new J;class Xn extends Cs{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,r=yr,o=yr,l=Tn,c=Ss,f=bi,d=Ti,h=Xn.DEFAULT_ANISOTROPY,g=Zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Eo(),this.name="",this.source=new od(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pf).x}get height(){return this.source.getSize(pf).y}get depth(){return this.source.getSize(pf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){Mt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Mt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uc:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uc:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Gg;Xn.DEFAULT_ANISOTROPY=1;const _d=class _d{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],g=d[4],x=d[8],m=d[1],_=d[5],S=d[9],T=d[2],y=d[6],M=d[10];if(Math.abs(g-m)<.01&&Math.abs(x-T)<.01&&Math.abs(S-y)<.01){if(Math.abs(g+m)<.1&&Math.abs(x+T)<.1&&Math.abs(S+y)<.1&&Math.abs(h+_+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,R=(_+1)/2,z=(M+1)/2,I=(g+m)/4,O=(x+T)/4,E=(S+y)/4;return P>R&&P>z?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=I/r,l=O/r):R>z?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=I/o,l=E/o):z<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(z),r=O/l,o=E/l),this.set(r,o,l,t),this}let w=Math.sqrt((y-S)*(y-S)+(x-T)*(x-T)+(m-g)*(m-g));return Math.abs(w)<.001&&(w=1),this.x=(y-S)/w,this.y=(x-T)/w,this.z=(m-g)/w,this.w=Math.acos((h+_+M-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ut(this.x,e.x,t.x),this.y=Ut(this.y,e.y,t.y),this.z=Ut(this.z,e.z,t.z),this.w=Ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ut(this.x,e,t),this.y=Ut(this.y,e,t),this.z=Ut(this.z,e,t),this.w=Ut(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ut(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_d.prototype.isVector4=!0;let sn=_d;class Sy extends Cs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Xn(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new od(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sr extends Sy{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Zg extends Xn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=vn,this.minFilter=vn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ay extends Xn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=vn,this.minFilter=vn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yc=class yc{constructor(e,t,r,o,l,c,f,d,h,g,x,m,_,S,T,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,h,g,x,m,_,S,T,y)}set(e,t,r,o,l,c,f,d,h,g,x,m,_,S,T,y){const M=this.elements;return M[0]=e,M[4]=t,M[8]=r,M[12]=o,M[1]=l,M[5]=c,M[9]=f,M[13]=d,M[2]=h,M[6]=g,M[10]=x,M[14]=m,M[3]=_,M[7]=S,M[11]=T,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/eo.setFromMatrixColumn(e,0).length(),l=1/eo.setFromMatrixColumn(e,1).length(),c=1/eo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),g=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const m=c*g,_=c*x,S=f*g,T=f*x;t[0]=d*g,t[4]=-d*x,t[8]=h,t[1]=_+S*h,t[5]=m-T*h,t[9]=-f*d,t[2]=T-m*h,t[6]=S+_*h,t[10]=c*d}else if(e.order==="YXZ"){const m=d*g,_=d*x,S=h*g,T=h*x;t[0]=m+T*f,t[4]=S*f-_,t[8]=c*h,t[1]=c*x,t[5]=c*g,t[9]=-f,t[2]=_*f-S,t[6]=T+m*f,t[10]=c*d}else if(e.order==="ZXY"){const m=d*g,_=d*x,S=h*g,T=h*x;t[0]=m-T*f,t[4]=-c*x,t[8]=S+_*f,t[1]=_+S*f,t[5]=c*g,t[9]=T-m*f,t[2]=-c*h,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const m=c*g,_=c*x,S=f*g,T=f*x;t[0]=d*g,t[4]=S*h-_,t[8]=m*h+T,t[1]=d*x,t[5]=T*h+m,t[9]=_*h-S,t[2]=-h,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const m=c*d,_=c*h,S=f*d,T=f*h;t[0]=d*g,t[4]=T-m*x,t[8]=S*x+_,t[1]=x,t[5]=c*g,t[9]=-f*g,t[2]=-h*g,t[6]=_*x+S,t[10]=m-T*x}else if(e.order==="XZY"){const m=c*d,_=c*h,S=f*d,T=f*h;t[0]=d*g,t[4]=-x,t[8]=h*g,t[1]=m*x+T,t[5]=c*g,t[9]=_*x-S,t[2]=S*x-_,t[6]=f*g,t[10]=T*x+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ey,e,wy)}lookAt(e,t,r){const o=this.elements;return pi.subVectors(e,t),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),Wr.crossVectors(r,pi),Wr.lengthSq()===0&&(Math.abs(r.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),Wr.crossVectors(r,pi)),Wr.normalize(),Cl.crossVectors(pi,Wr),o[0]=Wr.x,o[4]=Cl.x,o[8]=pi.x,o[1]=Wr.y,o[5]=Cl.y,o[9]=pi.y,o[2]=Wr.z,o[6]=Cl.z,o[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],d=r[8],h=r[12],g=r[1],x=r[5],m=r[9],_=r[13],S=r[2],T=r[6],y=r[10],M=r[14],w=r[3],P=r[7],R=r[11],z=r[15],I=o[0],O=o[4],E=o[8],U=o[12],q=o[1],H=o[5],D=o[9],W=o[13],$=o[2],G=o[6],ie=o[10],X=o[14],F=o[3],k=o[7],te=o[11],N=o[15];return l[0]=c*I+f*q+d*$+h*F,l[4]=c*O+f*H+d*G+h*k,l[8]=c*E+f*D+d*ie+h*te,l[12]=c*U+f*W+d*X+h*N,l[1]=g*I+x*q+m*$+_*F,l[5]=g*O+x*H+m*G+_*k,l[9]=g*E+x*D+m*ie+_*te,l[13]=g*U+x*W+m*X+_*N,l[2]=S*I+T*q+y*$+M*F,l[6]=S*O+T*H+y*G+M*k,l[10]=S*E+T*D+y*ie+M*te,l[14]=S*U+T*W+y*X+M*N,l[3]=w*I+P*q+R*$+z*F,l[7]=w*O+P*H+R*G+z*k,l[11]=w*E+P*D+R*ie+z*te,l[15]=w*U+P*W+R*X+z*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],d=e[9],h=e[13],g=e[2],x=e[6],m=e[10],_=e[14],S=e[3],T=e[7],y=e[11],M=e[15],w=d*_-h*m,P=f*_-h*x,R=f*m-d*x,z=c*_-h*g,I=c*m-d*g,O=c*x-f*g;return t*(T*w-y*P+M*R)-r*(S*w-y*z+M*I)+o*(S*P-T*z+M*O)-l*(S*R-T*I+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8],x=e[9],m=e[10],_=e[11],S=e[12],T=e[13],y=e[14],M=e[15],w=t*f-r*c,P=t*d-o*c,R=t*h-l*c,z=r*d-o*f,I=r*h-l*f,O=o*h-l*d,E=g*T-x*S,U=g*y-m*S,q=g*M-_*S,H=x*y-m*T,D=x*M-_*T,W=m*M-_*y,$=w*W-P*D+R*H+z*q-I*U+O*E;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/$;return e[0]=(f*W-d*D+h*H)*G,e[1]=(o*D-r*W-l*H)*G,e[2]=(T*O-y*I+M*z)*G,e[3]=(m*I-x*O-_*z)*G,e[4]=(d*q-c*W-h*U)*G,e[5]=(t*W-o*q+l*U)*G,e[6]=(y*R-S*O-M*P)*G,e[7]=(g*O-m*R+_*P)*G,e[8]=(c*D-f*q+h*E)*G,e[9]=(r*q-t*D-l*E)*G,e[10]=(S*I-T*R+M*w)*G,e[11]=(x*R-g*I-_*w)*G,e[12]=(f*U-c*H-d*E)*G,e[13]=(t*H-r*U+o*E)*G,e[14]=(T*P-S*z-y*w)*G,e[15]=(g*z-x*P+m*w)*G,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,d=e.z,h=l*c,g=l*f;return this.set(h*c+r,h*f-o*d,h*d+o*f,0,h*f+o*d,g*f+r,g*d-o*c,0,h*d-o*f,g*d+o*c,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,h=l+l,g=c+c,x=f+f,m=l*h,_=l*g,S=l*x,T=c*g,y=c*x,M=f*x,w=d*h,P=d*g,R=d*x,z=r.x,I=r.y,O=r.z;return o[0]=(1-(T+M))*z,o[1]=(_+R)*z,o[2]=(S-P)*z,o[3]=0,o[4]=(_-R)*I,o[5]=(1-(m+M))*I,o[6]=(y+w)*I,o[7]=0,o[8]=(S+P)*O,o[9]=(y-w)*O,o[10]=(1-(m+T))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let c=eo.set(o[0],o[1],o[2]).length();const f=eo.set(o[4],o[5],o[6]).length(),d=eo.set(o[8],o[9],o[10]).length();l<0&&(c=-c),Oi.copy(this);const h=1/c,g=1/f,x=1/d;return Oi.elements[0]*=h,Oi.elements[1]*=h,Oi.elements[2]*=h,Oi.elements[4]*=g,Oi.elements[5]*=g,Oi.elements[6]*=g,Oi.elements[8]*=x,Oi.elements[9]*=x,Oi.elements[10]*=x,t.setFromRotationMatrix(Oi),r.x=c,r.y=f,r.z=d,this}makePerspective(e,t,r,o,l,c,f=nr,d=!1){const h=this.elements,g=2*l/(t-e),x=2*l/(r-o),m=(t+e)/(t-e),_=(r+o)/(r-o);let S,T;if(d)S=l/(c-l),T=c*l/(c-l);else if(f===nr)S=-(c+l)/(c-l),T=-2*c*l/(c-l);else if(f===mc)S=-c/(c-l),T=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=x,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=nr,d=!1){const h=this.elements,g=2/(t-e),x=2/(r-o),m=-(t+e)/(t-e),_=-(r+o)/(r-o);let S,T;if(d)S=1/(c-l),T=c/(c-l);else if(f===nr)S=-2/(c-l),T=-(c+l)/(c-l);else if(f===mc)S=-1/(c-l),T=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=x,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};yc.prototype.isMatrix4=!0;let an=yc;const eo=new J,Oi=new an,Ey=new J(0,0,0),wy=new J(1,1,1),Wr=new J,Cl=new J,pi=new J,c0=new an,u0=new rr;class Ts{constructor(e=0,t=0,r=0,o=Ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],d=o[1],h=o[5],g=o[9],x=o[2],m=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(Ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,_),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-x,_),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Ut(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,_));break;case"XZY":this._z=Math.asin(-Ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,_),this._y=0);break;default:Mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return c0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(c0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return u0.setFromEuler(this),this.setFromQuaternion(u0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ts.DEFAULT_ORDER="XYZ";class $g{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ty=0;const f0=new J,to=new rr,mr=new an,Rl=new J,oa=new J,by=new J,Cy=new rr,h0=new J(1,0,0),d0=new J(0,1,0),p0=new J(0,0,1),m0={type:"added"},Ry={type:"removed"},no={type:"childadded",child:null},mf={type:"childremoved",child:null};class Zn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=Eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zn.DEFAULT_UP.clone();const e=new J,t=new Ts,r=new rr,o=new J(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new an},normalMatrix:{value:new Tt}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $g,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(h0,e)}rotateY(e){return this.rotateOnAxis(d0,e)}rotateZ(e){return this.rotateOnAxis(p0,e)}translateOnAxis(e,t){return f0.copy(e).applyQuaternion(this.quaternion),this.position.add(f0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(h0,e)}translateY(e){return this.translateOnAxis(d0,e)}translateZ(e){return this.translateOnAxis(p0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Rl.copy(e):Rl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(oa,Rl,this.up):mr.lookAt(Rl,oa,this.up),this.quaternion.setFromRotationMatrix(mr),o&&(mr.extractRotation(o.matrixWorld),to.setFromRotationMatrix(mr),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(m0),no.child=e,this.dispatchEvent(no),no.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ry),mf.child=e,this.dispatchEvent(mf),mf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(m0),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,by),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,Cy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,g=d.length;h<g;h++){const x=d[h];l(e.shapes,x)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),g=c(e.images),x=c(e.shapes),m=c(e.skeletons),_=c(e.animations),S=c(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),m.length>0&&(r.skeletons=m),_.length>0&&(r.animations=_),S.length>0&&(r.nodes=S)}return r.object=o,r;function c(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Zn.DEFAULT_UP=new J(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ji extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Py={type:"move"};class gf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,r),M=this._getHandJoint(h,T);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const g=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],m=g.position.distanceTo(x.position),_=.02,S=.005;h.inputState.pinching&&m>_+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=_-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Py)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ji;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xr={h:0,s:0,l:0},Pl={h:0,s:0,l:0};function vf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Xt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=kt.workingColorSpace){return this.r=e,this.g=t,this.b=r,kt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=kt.workingColorSpace){if(e=sd(e,1),t=Ut(t,0,1),r=Ut(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=vf(c,l,e+1/3),this.g=vf(c,l,e),this.b=vf(c,l,e-1/3)}return kt.colorSpaceToWorking(this,o),this}setStyle(e,t=wi){function r(l){l!==void 0&&parseFloat(l)<1&&Mt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:Mt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);Mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wi){const r=ev[e.toLowerCase()];return r!==void 0?this.setHex(r,t):Mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wi){return kt.workingToColorSpace(Gn.copy(this),e),Math.round(Ut(Gn.r*255,0,255))*65536+Math.round(Ut(Gn.g*255,0,255))*256+Math.round(Ut(Gn.b*255,0,255))}getHexString(e=wi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.workingToColorSpace(Gn.copy(this),t);const r=Gn.r,o=Gn.g,l=Gn.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let d,h;const g=(f+c)/2;if(f===c)d=0,h=0;else{const x=c-f;switch(h=g<=.5?x/(c+f):x/(2-c-f),c){case r:d=(o-l)/x+(o<l?6:0);break;case o:d=(l-r)/x+2;break;case l:d=(r-o)/x+4;break}d/=6}return e.h=d,e.s=h,e.l=g,e}getRGB(e,t=kt.workingColorSpace){return kt.workingToColorSpace(Gn.copy(this),t),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=wi){kt.workingToColorSpace(Gn.copy(this),e);const t=Gn.r,r=Gn.g,o=Gn.b;return e!==wi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Xr),this.setHSL(Xr.h+e,Xr.s+t,Xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Xr),e.getHSL(Pl);const r=ya(Xr.h,Pl.h,t),o=ya(Xr.s,Pl.s,t),l=ya(Xr.l,Pl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Xt;Xt.NAMES=ev;class Sc extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ts,this.environmentIntensity=1,this.environmentRotation=new Ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bi=new J,gr=new J,xf=new J,vr=new J,io=new J,ro=new J,g0=new J,_f=new J,yf=new J,Mf=new J,Sf=new sn,Af=new sn,Ef=new sn;class Wi{constructor(e=new J,t=new J,r=new J){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Bi.subVectors(e,t),o.cross(Bi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Bi.subVectors(o,t),gr.subVectors(r,t),xf.subVectors(e,t);const c=Bi.dot(Bi),f=Bi.dot(gr),d=Bi.dot(xf),h=gr.dot(gr),g=gr.dot(xf),x=c*h-f*f;if(x===0)return l.set(0,0,0),null;const m=1/x,_=(h*d-f*g)*m,S=(c*g-f*d)*m;return l.set(1-_-S,S,_)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,vr)===null?!1:vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getInterpolation(e,t,r,o,l,c,f,d){return this.getBarycoord(e,t,r,o,vr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,vr.x),d.addScaledVector(c,vr.y),d.addScaledVector(f,vr.z),d)}static getInterpolatedAttribute(e,t,r,o,l,c){return Sf.setScalar(0),Af.setScalar(0),Ef.setScalar(0),Sf.fromBufferAttribute(e,t),Af.fromBufferAttribute(e,r),Ef.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Sf,l.x),c.addScaledVector(Af,l.y),c.addScaledVector(Ef,l.z),c}static isFrontFacing(e,t,r,o){return Bi.subVectors(r,t),gr.subVectors(e,t),Bi.cross(gr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),Bi.cross(gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Wi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;io.subVectors(o,r),ro.subVectors(l,r),_f.subVectors(e,r);const d=io.dot(_f),h=ro.dot(_f);if(d<=0&&h<=0)return t.copy(r);yf.subVectors(e,o);const g=io.dot(yf),x=ro.dot(yf);if(g>=0&&x<=g)return t.copy(o);const m=d*x-g*h;if(m<=0&&d>=0&&g<=0)return c=d/(d-g),t.copy(r).addScaledVector(io,c);Mf.subVectors(e,l);const _=io.dot(Mf),S=ro.dot(Mf);if(S>=0&&_<=S)return t.copy(l);const T=_*h-d*S;if(T<=0&&h>=0&&S<=0)return f=h/(h-S),t.copy(r).addScaledVector(ro,f);const y=g*S-_*x;if(y<=0&&x-g>=0&&_-S>=0)return g0.subVectors(l,o),f=(x-g)/(x-g+(_-S)),t.copy(o).addScaledVector(g0,f);const M=1/(y+T+m);return c=T*M,f=m*M,t.copy(r).addScaledVector(io,c).addScaledVector(ro,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ea{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,zi):zi.fromBufferAttribute(l,c),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ll.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ll.copy(r.boundingBox)),Ll.applyMatrix4(e.matrixWorld),this.union(Ll)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),Il.subVectors(this.max,aa),so.subVectors(e.a,aa),oo.subVectors(e.b,aa),ao.subVectors(e.c,aa),jr.subVectors(oo,so),Kr.subVectors(ao,oo),ps.subVectors(so,ao);let t=[0,-jr.z,jr.y,0,-Kr.z,Kr.y,0,-ps.z,ps.y,jr.z,0,-jr.x,Kr.z,0,-Kr.x,ps.z,0,-ps.x,-jr.y,jr.x,0,-Kr.y,Kr.x,0,-ps.y,ps.x,0];return!wf(t,so,oo,ao,Il)||(t=[1,0,0,0,1,0,0,0,1],!wf(t,so,oo,ao,Il))?!1:(Dl.crossVectors(jr,Kr),t=[Dl.x,Dl.y,Dl.z],wf(t,so,oo,ao,Il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xr=[new J,new J,new J,new J,new J,new J,new J,new J],zi=new J,Ll=new Ea,so=new J,oo=new J,ao=new J,jr=new J,Kr=new J,ps=new J,aa=new J,Il=new J,Dl=new J,ms=new J;function wf(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){ms.fromArray(s,l);const f=o.x*Math.abs(ms.x)+o.y*Math.abs(ms.y)+o.z*Math.abs(ms.z),d=e.dot(ms),h=t.dot(ms),g=r.dot(ms);if(Math.max(-Math.max(d,h,g),Math.min(d,h,g))>f)return!1}return!0}const hn=new J,Ul=new Nt;let Ly=0;class Gt extends Cs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ly++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=e0,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ul.fromBufferAttribute(this,t),Ul.applyMatrix3(e),this.setXY(t,Ul.x,Ul.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=po(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Qn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=po(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=po(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=po(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=po(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),r=Qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),r=Qn(r,this.array),o=Qn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),r=Qn(r,this.array),o=Qn(o,this.array),l=Qn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==e0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class tv extends Gt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class nv extends Gt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Un extends Gt{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Iy=new Ea,la=new J,Tf=new J;class wo{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Iy.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const t=la.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(la,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(Tf)),this.expandByPoint(la.copy(e.center).sub(Tf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Dy=0;const Ei=new an,bf=new Zn,lo=new J,mi=new Ea,ca=new Ea,wn=new J;class cn extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z_(e)?nv:tv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Tt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,r){return Ei.makeTranslation(e,t,r),this.applyMatrix4(Ei),this}scale(e,t,r){return Ei.makeScale(e,t,r),this.applyMatrix4(Ei),this}lookAt(e){return bf.lookAt(e),bf.updateMatrix(),this.applyMatrix4(bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Un(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&Mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];mi.setFromBufferAttribute(l),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];ca.setFromBufferAttribute(f),this.morphTargetsRelative?(wn.addVectors(mi.min,ca.min),mi.expandByPoint(wn),wn.addVectors(mi.max,ca.max),mi.expandByPoint(wn)):(mi.expandByPoint(ca.min),mi.expandByPoint(ca.max))}mi.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)wn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(wn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)wn.fromBufferAttribute(f,h),d&&(lo.fromBufferAttribute(e,h),wn.add(lo)),o=Math.max(o,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let E=0;E<r.count;E++)f[E]=new J,d[E]=new J;const h=new J,g=new J,x=new J,m=new Nt,_=new Nt,S=new Nt,T=new J,y=new J;function M(E,U,q){h.fromBufferAttribute(r,E),g.fromBufferAttribute(r,U),x.fromBufferAttribute(r,q),m.fromBufferAttribute(l,E),_.fromBufferAttribute(l,U),S.fromBufferAttribute(l,q),g.sub(h),x.sub(h),_.sub(m),S.sub(m);const H=1/(_.x*S.y-S.x*_.y);isFinite(H)&&(T.copy(g).multiplyScalar(S.y).addScaledVector(x,-_.y).multiplyScalar(H),y.copy(x).multiplyScalar(_.x).addScaledVector(g,-S.x).multiplyScalar(H),f[E].add(T),f[U].add(T),f[q].add(T),d[E].add(y),d[U].add(y),d[q].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let E=0,U=w.length;E<U;++E){const q=w[E],H=q.start,D=q.count;for(let W=H,$=H+D;W<$;W+=3)M(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const P=new J,R=new J,z=new J,I=new J;function O(E){z.fromBufferAttribute(o,E),I.copy(z);const U=f[E];P.copy(U),P.sub(z.multiplyScalar(z.dot(U))).normalize(),R.crossVectors(I,U);const H=R.dot(d[E])<0?-1:1;c.setXYZW(E,P.x,P.y,P.z,H)}for(let E=0,U=w.length;E<U;++E){const q=w[E],H=q.start,D=q.count;for(let W=H,$=H+D;W<$;W+=3)O(e.getX(W+0)),O(e.getX(W+1)),O(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let m=0,_=r.count;m<_;m++)r.setXYZ(m,0,0,0);const o=new J,l=new J,c=new J,f=new J,d=new J,h=new J,g=new J,x=new J;if(e)for(let m=0,_=e.count;m<_;m+=3){const S=e.getX(m+0),T=e.getX(m+1),y=e.getX(m+2);o.fromBufferAttribute(t,S),l.fromBufferAttribute(t,T),c.fromBufferAttribute(t,y),g.subVectors(c,l),x.subVectors(o,l),g.cross(x),f.fromBufferAttribute(r,S),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,y),f.add(g),d.add(g),h.add(g),r.setXYZ(S,f.x,f.y,f.z),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,_=t.count;m<_;m+=3)o.fromBufferAttribute(t,m+0),l.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),g.subVectors(c,l),x.subVectors(o,l),g.cross(x),r.setXYZ(m+0,g.x,g.y,g.z),r.setXYZ(m+1,g.x,g.y,g.z),r.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)wn.fromBufferAttribute(e,t),wn.normalize(),e.setXYZ(t,wn.x,wn.y,wn.z)}toNonIndexed(){function e(f,d){const h=f.array,g=f.itemSize,x=f.normalized,m=new h.constructor(d.length*g);let _=0,S=0;for(let T=0,y=d.length;T<y;T++){f.isInterleavedBufferAttribute?_=d[T]*f.data.stride+f.offset:_=d[T]*g;for(let M=0;M<g;M++)m[S++]=h[_++]}return new Gt(m,g,x)}if(this.index===null)return Mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let g=0,x=h.length;g<x;g++){const m=h[g],_=e(m,r);d.push(_)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],g=[];for(let x=0,m=h.length;x<m;x++){const _=h[x];g.push(_.toJSON(e.data))}g.length>0&&(o[d]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(t))}const l=e.morphAttributes;for(const h in l){const g=[],x=l[h];for(let m=0,_=x.length;m<_;m++)g.push(x[m].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,g=c.length;h<g;h++){const x=c[h];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Uy=0;class To extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Eo(),this.name="",this.type="Material",this.blending=xo,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=nh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$m,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){Mt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Mt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(r.blending=this.blending),this.side!==es&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==th&&(r.blendSrc=this.blendSrc),this.blendDst!==nh&&(r.blendDst=this.blendDst),this.blendEquation!==ys&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$m&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _r=new J,Cf=new J,Nl=new J,qr=new J,Rf=new J,Fl=new J,Pf=new J;class ad{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_r)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_r.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_r.copy(this.origin).addScaledVector(this.direction,t),_r.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Cf.copy(e).add(t).multiplyScalar(.5),Nl.copy(t).sub(e).normalize(),qr.copy(this.origin).sub(Cf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Nl),f=qr.dot(this.direction),d=-qr.dot(Nl),h=qr.lengthSq(),g=Math.abs(1-c*c);let x,m,_,S;if(g>0)if(x=c*d-f,m=c*f-d,S=l*g,x>=0)if(m>=-S)if(m<=S){const T=1/g;x*=T,m*=T,_=x*(x+c*m+2*f)+m*(c*x+m+2*d)+h}else m=l,x=Math.max(0,-(c*m+f)),_=-x*x+m*(m+2*d)+h;else m=-l,x=Math.max(0,-(c*m+f)),_=-x*x+m*(m+2*d)+h;else m<=-S?(x=Math.max(0,-(-c*l+f)),m=x>0?-l:Math.min(Math.max(-l,-d),l),_=-x*x+m*(m+2*d)+h):m<=S?(x=0,m=Math.min(Math.max(-l,-d),l),_=m*(m+2*d)+h):(x=Math.max(0,-(c*l+f)),m=x>0?l:Math.min(Math.max(-l,-d),l),_=-x*x+m*(m+2*d)+h);else m=c>0?-l:l,x=Math.max(0,-(c*m+f)),_=-x*x+m*(m+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Cf).addScaledVector(Nl,m),_}intersectSphere(e,t){_r.subVectors(e.center,this.origin);const r=_r.dot(this.direction),o=_r.dot(_r)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,d=r+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,d;const h=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,m=this.origin;return h>=0?(r=(e.min.x-m.x)*h,o=(e.max.x-m.x)*h):(r=(e.max.x-m.x)*h,o=(e.min.x-m.x)*h),g>=0?(l=(e.min.y-m.y)*g,c=(e.max.y-m.y)*g):(l=(e.max.y-m.y)*g,c=(e.min.y-m.y)*g),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),x>=0?(f=(e.min.z-m.z)*x,d=(e.max.z-m.z)*x):(f=(e.max.z-m.z)*x,d=(e.min.z-m.z)*x),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,_r)!==null}intersectTriangle(e,t,r,o,l){Rf.subVectors(t,e),Fl.subVectors(r,e),Pf.crossVectors(Rf,Fl);let c=this.direction.dot(Pf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;qr.subVectors(this.origin,e);const d=f*this.direction.dot(Fl.crossVectors(qr,Fl));if(d<0)return null;const h=f*this.direction.dot(Rf.cross(qr));if(h<0||d+h>c)return null;const g=-f*qr.dot(Pf);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class iv extends To{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ts,this.combine=Ng,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const v0=new an,gs=new ad,kl=new wo,x0=new J,Ol=new J,Bl=new J,zl=new J,Lf=new J,Hl=new J,_0=new J,Vl=new J;class Nn extends Zn{constructor(e=new cn,t=new iv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Hl.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const g=f[d],x=l[d];g!==0&&(Lf.fromBufferAttribute(x,e),c?Hl.addScaledVector(Lf,g):Hl.addScaledVector(Lf.sub(t),g))}t.add(Hl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),kl.copy(r.boundingSphere),kl.applyMatrix4(l),gs.copy(e.ray).recast(e.near),!(kl.containsPoint(gs.origin)===!1&&(gs.intersectSphere(kl,x0)===null||gs.origin.distanceToSquared(x0)>(e.far-e.near)**2))&&(v0.copy(l).invert(),gs.copy(e.ray).applyMatrix4(v0),!(r.boundingBox!==null&&gs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,g=l.attributes.uv1,x=l.attributes.normal,m=l.groups,_=l.drawRange;if(f!==null)if(Array.isArray(c))for(let S=0,T=m.length;S<T;S++){const y=m[S],M=c[y.materialIndex],w=Math.max(y.start,_.start),P=Math.min(f.count,Math.min(y.start+y.count,_.start+_.count));for(let R=w,z=P;R<z;R+=3){const I=f.getX(R),O=f.getX(R+1),E=f.getX(R+2);o=Gl(this,M,e,r,h,g,x,I,O,E),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const S=Math.max(0,_.start),T=Math.min(f.count,_.start+_.count);for(let y=S,M=T;y<M;y+=3){const w=f.getX(y),P=f.getX(y+1),R=f.getX(y+2);o=Gl(this,c,e,r,h,g,x,w,P,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let S=0,T=m.length;S<T;S++){const y=m[S],M=c[y.materialIndex],w=Math.max(y.start,_.start),P=Math.min(d.count,Math.min(y.start+y.count,_.start+_.count));for(let R=w,z=P;R<z;R+=3){const I=R,O=R+1,E=R+2;o=Gl(this,M,e,r,h,g,x,I,O,E),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const S=Math.max(0,_.start),T=Math.min(d.count,_.start+_.count);for(let y=S,M=T;y<M;y+=3){const w=y,P=y+1,R=y+2;o=Gl(this,c,e,r,h,g,x,w,P,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function Ny(s,e,t,r,o,l,c,f){let d;if(e.side===li?d=r.intersectTriangle(c,l,o,!0,f):d=r.intersectTriangle(o,l,c,e.side===es,f),d===null)return null;Vl.copy(f),Vl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Vl);return h<t.near||h>t.far?null:{distance:h,point:Vl.clone(),object:s}}function Gl(s,e,t,r,o,l,c,f,d,h){s.getVertexPosition(f,Ol),s.getVertexPosition(d,Bl),s.getVertexPosition(h,zl);const g=Ny(s,e,t,r,Ol,Bl,zl,_0);if(g){const x=new J;Wi.getBarycoord(_0,Ol,Bl,zl,x),o&&(g.uv=Wi.getInterpolatedAttribute(o,f,d,h,x,new Nt)),l&&(g.uv1=Wi.getInterpolatedAttribute(l,f,d,h,x,new Nt)),c&&(g.normal=Wi.getInterpolatedAttribute(c,f,d,h,x,new J),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const m={a:f,b:d,c:h,normal:new J,materialIndex:0};Wi.getNormal(Ol,Bl,zl,m.normal),g.face=m,g.barycoord=x}return g}class rv extends Xn{constructor(e=null,t=1,r=1,o,l,c,f,d,h=vn,g=vn,x,m){super(null,c,f,d,h,g,o,l,x,m),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const If=new J,Fy=new J,ky=new Tt;class _s{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=If.subVectors(r,t).cross(Fy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(If),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||ky.getNormalMatrix(e),o=this.coplanarPoint(If).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new wo,Oy=new Nt(.5,.5),Wl=new J;class sv{constructor(e=new _s,t=new _s,r=new _s,o=new _s,l=new _s,c=new _s){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=nr,r=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],d=l[2],h=l[3],g=l[4],x=l[5],m=l[6],_=l[7],S=l[8],T=l[9],y=l[10],M=l[11],w=l[12],P=l[13],R=l[14],z=l[15];if(o[0].setComponents(h-c,_-g,M-S,z-w).normalize(),o[1].setComponents(h+c,_+g,M+S,z+w).normalize(),o[2].setComponents(h+f,_+x,M+T,z+P).normalize(),o[3].setComponents(h-f,_-x,M-T,z-P).normalize(),r)o[4].setComponents(d,m,y,R).normalize(),o[5].setComponents(h-d,_-m,M-y,z-R).normalize();else if(o[4].setComponents(h-d,_-m,M-y,z-R).normalize(),t===nr)o[5].setComponents(h+d,_+m,M+y,z+R).normalize();else if(t===mc)o[5].setComponents(d,m,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);const t=Oy.distanceTo(e.center);return vs.radius=.7071067811865476+t,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Wl.x=o.normal.x>0?e.max.x:e.min.x,Wl.y=o.normal.y>0?e.max.y:e.min.y,Wl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Wl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ov extends To{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vc=new J,xc=new J,y0=new an,ua=new ad,Xl=new wo,Df=new J,M0=new J;class av extends Zn{constructor(e=new cn,t=new ov){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)vc.fromBufferAttribute(t,o-1),xc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=vc.distanceTo(xc);e.setAttribute("lineDistance",new Un(r,1))}else Mt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Xl.copy(r.boundingSphere),Xl.applyMatrix4(o),Xl.radius+=l,e.ray.intersectsSphere(Xl)===!1)return;y0.copy(o).invert(),ua.copy(e.ray).applyMatrix4(y0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,g=r.index,m=r.attributes.position;if(g!==null){const _=Math.max(0,c.start),S=Math.min(g.count,c.start+c.count);for(let T=_,y=S-1;T<y;T+=h){const M=g.getX(T),w=g.getX(T+1),P=jl(this,e,ua,d,M,w,T);P&&t.push(P)}if(this.isLineLoop){const T=g.getX(S-1),y=g.getX(_),M=jl(this,e,ua,d,T,y,S-1);M&&t.push(M)}}else{const _=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let T=_,y=S-1;T<y;T+=h){const M=jl(this,e,ua,d,T,T+1,T);M&&t.push(M)}if(this.isLineLoop){const T=jl(this,e,ua,d,S-1,_,S-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function jl(s,e,t,r,o,l,c){const f=s.geometry.attributes.position;if(vc.fromBufferAttribute(f,o),xc.fromBufferAttribute(f,l),t.distanceSqToSegment(vc,xc,Df,M0)>r)return;Df.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Df);if(!(h<e.near||h>e.far))return{distance:h,point:M0.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const S0=new J,A0=new J;class By extends av{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)S0.fromBufferAttribute(t,o),A0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+S0.distanceTo(A0);e.setAttribute("lineDistance",new Un(r,1))}else Mt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vh extends To{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const E0=new an,Gh=new ad,Kl=new wo,ql=new J;class Wh extends Zn{constructor(e=new cn,t=new Vh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Kl.copy(r.boundingSphere),Kl.applyMatrix4(o),Kl.radius+=l,e.ray.intersectsSphere(Kl)===!1)return;E0.copy(o).invert(),Gh.copy(e.ray).applyMatrix4(E0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=r.index,x=r.attributes.position;if(h!==null){const m=Math.max(0,c.start),_=Math.min(h.count,c.start+c.count);for(let S=m,T=_;S<T;S++){const y=h.getX(S);ql.fromBufferAttribute(x,y),w0(ql,y,d,o,e,t,this)}}else{const m=Math.max(0,c.start),_=Math.min(x.count,c.start+c.count);for(let S=m,T=_;S<T;S++)ql.fromBufferAttribute(x,S),w0(ql,S,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function w0(s,e,t,r,o,l,c){const f=Gh.distanceSqToPoint(s);if(f<t){const d=new J;Gh.closestPointToPoint(s,d),d.applyMatrix4(r);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class lv extends Xn{constructor(e=[],t=Es,r,o,l,c,f,d,h,g){super(e,t,r,o,l,c,f,d,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zy extends Xn{constructor(e,t,r,o,l,c,f,d,h){super(e,t,r,o,l,c,f,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class So extends Xn{constructor(e,t,r=or,o,l,c,f=vn,d=vn,h,g=Er,x=1){if(g!==Er&&g!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:x};super(m,o,l,c,f,d,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new od(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Hy extends So{constructor(e,t=or,r=Es,o,l,c=vn,f=vn,d,h=Er){const g={width:e,height:e,depth:1},x=[g,g,g,g,g,g];super(e,e,t,r,o,l,c,f,d,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class cv extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wa extends cn{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const d=[],h=[],g=[],x=[];let m=0,_=0;S("z","y","x",-1,-1,r,t,e,c,l,0),S("z","y","x",1,-1,r,t,-e,c,l,1),S("x","z","y",1,1,e,r,t,o,c,2),S("x","z","y",1,-1,e,r,-t,o,c,3),S("x","y","z",1,-1,e,t,r,o,l,4),S("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Un(h,3)),this.setAttribute("normal",new Un(g,3)),this.setAttribute("uv",new Un(x,2));function S(T,y,M,w,P,R,z,I,O,E,U){const q=R/O,H=z/E,D=R/2,W=z/2,$=I/2,G=O+1,ie=E+1;let X=0,F=0;const k=new J;for(let te=0;te<ie;te++){const N=te*H-W;for(let j=0;j<G;j++){const Ee=j*q-D;k[T]=Ee*w,k[y]=N*P,k[M]=$,h.push(k.x,k.y,k.z),k[T]=0,k[y]=0,k[M]=I>0?1:-1,g.push(k.x,k.y,k.z),x.push(j/O),x.push(1-te/E),X+=1}}for(let te=0;te<E;te++)for(let N=0;N<O;N++){const j=m+N+G*te,Ee=m+N+G*(te+1),Se=m+(N+1)+G*(te+1),de=m+(N+1)+G*te;d.push(j,Ee,de),d.push(Ee,Se,de),F+=6}f.addGroup(_,F,U),_+=F,m+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ld extends cn{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],c=[];f(o),h(r),g(),this.setAttribute("position",new Un(l,3)),this.setAttribute("normal",new Un(l.slice(),3)),this.setAttribute("uv",new Un(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(w){const P=new J,R=new J,z=new J;for(let I=0;I<t.length;I+=3)_(t[I+0],P),_(t[I+1],R),_(t[I+2],z),d(P,R,z,w)}function d(w,P,R,z){const I=z+1,O=[];for(let E=0;E<=I;E++){O[E]=[];const U=w.clone().lerp(R,E/I),q=P.clone().lerp(R,E/I),H=I-E;for(let D=0;D<=H;D++)D===0&&E===I?O[E][D]=U:O[E][D]=U.clone().lerp(q,D/H)}for(let E=0;E<I;E++)for(let U=0;U<2*(I-E)-1;U++){const q=Math.floor(U/2);U%2===0?(m(O[E][q+1]),m(O[E+1][q]),m(O[E][q])):(m(O[E][q+1]),m(O[E+1][q+1]),m(O[E+1][q]))}}function h(w){const P=new J;for(let R=0;R<l.length;R+=3)P.x=l[R+0],P.y=l[R+1],P.z=l[R+2],P.normalize().multiplyScalar(w),l[R+0]=P.x,l[R+1]=P.y,l[R+2]=P.z}function g(){const w=new J;for(let P=0;P<l.length;P+=3){w.x=l[P+0],w.y=l[P+1],w.z=l[P+2];const R=y(w)/2/Math.PI+.5,z=M(w)/Math.PI+.5;c.push(R,1-z)}S(),x()}function x(){for(let w=0;w<c.length;w+=6){const P=c[w+0],R=c[w+2],z=c[w+4],I=Math.max(P,R,z),O=Math.min(P,R,z);I>.9&&O<.1&&(P<.2&&(c[w+0]+=1),R<.2&&(c[w+2]+=1),z<.2&&(c[w+4]+=1))}}function m(w){l.push(w.x,w.y,w.z)}function _(w,P){const R=w*3;P.x=e[R+0],P.y=e[R+1],P.z=e[R+2]}function S(){const w=new J,P=new J,R=new J,z=new J,I=new Nt,O=new Nt,E=new Nt;for(let U=0,q=0;U<l.length;U+=9,q+=6){w.set(l[U+0],l[U+1],l[U+2]),P.set(l[U+3],l[U+4],l[U+5]),R.set(l[U+6],l[U+7],l[U+8]),I.set(c[q+0],c[q+1]),O.set(c[q+2],c[q+3]),E.set(c[q+4],c[q+5]),z.copy(w).add(P).add(R).divideScalar(3);const H=y(z);T(I,q+0,w,H),T(O,q+2,P,H),T(E,q+4,R,H)}}function T(w,P,R,z){z<0&&w.x===1&&(c[P]=w.x-1),R.x===0&&R.z===0&&(c[P]=z/2/Math.PI+.5)}function y(w){return Math.atan2(w.z,-w.x)}function M(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ld(e.vertices,e.indices,e.radius,e.detail)}}class Vy{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Mt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,d=l-1,h;for(;f<=d;)if(o=Math.floor(f+(d-f)/2),h=r[o]-c,h<0)f=o+1;else if(h>0)d=o-1;else{d=o;break}if(o=d,r[o]===c)return o/(l-1);const g=r[o],m=r[o+1]-g,_=(c-g)/m;return(o+_)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),d=t||(c.isVector2?new Nt:new J);return d.copy(f).sub(c).normalize(),d}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new J,o=[],l=[],c=[],f=new J,d=new an;for(let _=0;_<=e;_++){const S=_/e;o[_]=this.getTangentAt(S,new J)}l[0]=new J,c[0]=new J;let h=Number.MAX_VALUE;const g=Math.abs(o[0].x),x=Math.abs(o[0].y),m=Math.abs(o[0].z);g<=h&&(h=g,r.set(1,0,0)),x<=h&&(h=x,r.set(0,1,0)),m<=h&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let _=1;_<=e;_++){if(l[_]=l[_-1].clone(),c[_]=c[_-1].clone(),f.crossVectors(o[_-1],o[_]),f.length()>Number.EPSILON){f.normalize();const S=Math.acos(Ut(o[_-1].dot(o[_]),-1,1));l[_].applyMatrix4(d.makeRotationAxis(f,S))}c[_].crossVectors(o[_],l[_])}if(t===!0){let _=Math.acos(Ut(l[0].dot(l[e]),-1,1));_/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(_=-_);for(let S=1;S<=e;S++)l[S].applyMatrix4(d.makeRotationAxis(o[S],_*S)),c[S].crossVectors(o[S],l[S])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function cd(){let s=0,e=0,t=0,r=0;function o(l,c,f,d){s=l,e=f,t=-3*l+3*c-2*f-d,r=2*l-2*c+f+d}return{initCatmullRom:function(l,c,f,d,h){o(c,f,h*(f-l),h*(d-c))},initNonuniformCatmullRom:function(l,c,f,d,h,g,x){let m=(c-l)/h-(f-l)/(h+g)+(f-c)/g,_=(f-c)/g-(d-c)/(g+x)+(d-f)/x;m*=g,_*=g,o(c,f,m,_)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const T0=new J,b0=new J,Uf=new cd,Nf=new cd,Ff=new cd;class Gy extends Vy{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new J){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),d=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:d===0&&f===l-1&&(f=l-2,d=1);let h,g;this.closed||f>0?h=o[(f-1)%l]:(b0.subVectors(o[0],o[1]).add(o[0]),h=b0);const x=o[f%l],m=o[(f+1)%l];if(this.closed||f+2<l?g=o[(f+2)%l]:(T0.subVectors(o[l-1],o[l-2]).add(o[l-1]),g=T0),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let S=Math.pow(h.distanceToSquared(x),_),T=Math.pow(x.distanceToSquared(m),_),y=Math.pow(m.distanceToSquared(g),_);T<1e-4&&(T=1),S<1e-4&&(S=T),y<1e-4&&(y=T),Uf.initNonuniformCatmullRom(h.x,x.x,m.x,g.x,S,T,y),Nf.initNonuniformCatmullRom(h.y,x.y,m.y,g.y,S,T,y),Ff.initNonuniformCatmullRom(h.z,x.z,m.z,g.z,S,T,y)}else this.curveType==="catmullrom"&&(Uf.initCatmullRom(h.x,x.x,m.x,g.x,this.tension),Nf.initCatmullRom(h.y,x.y,m.y,g.y,this.tension),Ff.initCatmullRom(h.z,x.z,m.z,g.z,this.tension));return r.set(Uf.calc(d),Nf.calc(d),Ff.calc(d)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new J().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class ud extends ld{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ud(e.radius,e.detail)}}class Ac extends cn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,g=d+1,x=e/f,m=t/d,_=[],S=[],T=[],y=[];for(let M=0;M<g;M++){const w=M*m-c;for(let P=0;P<h;P++){const R=P*x-l;S.push(R,-w,0),T.push(0,0,1),y.push(P/f),y.push(1-M/d)}}for(let M=0;M<d;M++)for(let w=0;w<f;w++){const P=w+h*M,R=w+h*(M+1),z=w+1+h*(M+1),I=w+1+h*M;_.push(P,R,I),_.push(R,z,I)}this.setIndex(_),this.setAttribute("position",new Un(S,3)),this.setAttribute("normal",new Un(T,3)),this.setAttribute("uv",new Un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.width,e.height,e.widthSegments,e.heightSegments)}}class _c extends cn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(c+f,Math.PI);let h=0;const g=[],x=new J,m=new J,_=[],S=[],T=[],y=[];for(let M=0;M<=r;M++){const w=[],P=M/r;let R=0;M===0&&c===0?R=.5/t:M===r&&d===Math.PI&&(R=-.5/t);for(let z=0;z<=t;z++){const I=z/t;x.x=-e*Math.cos(o+I*l)*Math.sin(c+P*f),x.y=e*Math.cos(c+P*f),x.z=e*Math.sin(o+I*l)*Math.sin(c+P*f),S.push(x.x,x.y,x.z),m.copy(x).normalize(),T.push(m.x,m.y,m.z),y.push(I+R,1-P),w.push(h++)}g.push(w)}for(let M=0;M<r;M++)for(let w=0;w<t;w++){const P=g[M][w+1],R=g[M][w],z=g[M+1][w],I=g[M+1][w+1];(M!==0||c>0)&&_.push(P,R,I),(M!==r-1||d<Math.PI)&&_.push(R,z,I)}this.setIndex(_),this.setAttribute("position",new Un(S,3)),this.setAttribute("normal",new Un(T,3)),this.setAttribute("uv",new Un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ao(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(C0(o))o.isRenderTargetTexture?(Mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(C0(o[0])){const l=[];for(let c=0,f=o.length;c<f;c++)l[c]=o[c].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Jn(s){const e={};for(let t=0;t<s.length;t++){const r=Ao(s[t]);for(const o in r)e[o]=r[o]}return e}function C0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Wy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function uv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:kt.workingColorSpace}const Xy={clone:Ao,merge:Jn};var jy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ky=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends To{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jy,this.fragmentShader=Ky,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ao(e.uniforms),this.uniformsGroups=Wy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class qy extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yy extends To{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=W_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qy extends To{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yl=new J,Ql=new rr,$i=new J;class fv extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yl,Ql,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yl,Ql,$i.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Yl,Ql,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yl,Ql,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yr=new J,R0=new Nt,P0=new Nt;class ai extends fv{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Aa*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z),Yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z)}getViewSize(e,t){return this.getViewBounds(e,R0,P0),t.subVectors(P0,R0)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_a*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;l+=c.offsetX*o/d,t-=c.offsetY*r/h,o*=c.width/d,r*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class fd extends fv{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const co=-90,uo=1;class Jy extends Zn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ai(co,uo,e,t);o.layers=this.layers,this.add(o);const l=new ai(co,uo,e,t);l.layers=this.layers,this.add(l);const c=new ai(co,uo,e,t);c.layers=this.layers,this.add(c);const f=new ai(co,uo,e,t);f.layers=this.layers,this.add(f);const d=new ai(co,uo,e,t);d.layers=this.layers,this.add(d);const h=new ai(co,uo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,d]=t;for(const h of t)this.remove(h);if(e===nr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===mc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,h,g]=this.children,x=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(x,m,_),e.xr.enabled=S,r.texture.needsPMREMUpdate=!0}}class Zy extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const yd=class yd{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};yd.prototype.isMatrix2=!0;let L0=yd;function I0(s,e,t,r){const o=$y(r);switch(t){case qg:return s*e;case Qg:return s*e/o.components*o.byteLength;case ed:return s*e/o.components*o.byteLength;case ws:return s*e*2/o.components*o.byteLength;case td:return s*e*2/o.components*o.byteLength;case Yg:return s*e*3/o.components*o.byteLength;case bi:return s*e*4/o.components*o.byteLength;case nd:return s*e*4/o.components*o.byteLength;case ic:case rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case sc:case oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hh:case ph:return Math.max(s,16)*Math.max(e,8)/4;case fh:case dh:return Math.max(s,8)*Math.max(e,8)/2;case mh:case gh:case xh:case _h:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vh:case fc:case yh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case wh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Th:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case bh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Nh:case Fh:case kh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Oh:case Bh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case hc:case zh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $y(s){switch(s){case Ti:case Wg:return{byteLength:1,components:1};case Ma:case Xg:case Ar:return{byteLength:2,components:1};case Zh:case $h:return{byteLength:2,components:4};case or:case Jh:case Xi:return{byteLength:4,components:1};case jg:case Kg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qh}}));typeof window<"u"&&(window.__THREE__?Mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hv(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function eM(s){const e=new WeakMap;function t(f,d){const h=f.array,g=f.usage,x=h.byteLength,m=s.createBuffer();s.bindBuffer(d,m),s.bufferData(d,h,g),f.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?_=s.HALF_FLOAT:_=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,d,h){const g=d.array,x=d.updateRanges;if(s.bindBuffer(h,f),x.length===0)s.bufferSubData(h,0,g);else{x.sort((_,S)=>_.start-S.start);let m=0;for(let _=1;_<x.length;_++){const S=x[m],T=x[_];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++m,x[m]=T)}x.length=m+1;for(let _=0,S=x.length;_<S;_++){const T=x[_];s.bufferSubData(h,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(s.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:l,update:c}}var tM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nM=`#ifdef USE_ALPHAHASH
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
#endif`,iM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aM=`#ifdef USE_AOMAP
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
#endif`,lM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cM=`#ifdef USE_BATCHING
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
#endif`,uM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pM=`#ifdef USE_IRIDESCENCE
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
#endif`,mM=`#ifdef USE_BUMPMAP
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
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,MM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,SM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,AM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,EM=`#define PI 3.141592653589793
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
} // validated`,wM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TM=`vec3 transformedNormal = objectNormal;
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
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LM="gl_FragColor = linearToOutputTexel( gl_FragColor );",IM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DM=`#ifdef USE_ENVMAP
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
#endif`,UM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
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
#endif`,FM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
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
#endif`,OM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VM=`#ifdef USE_GRADIENTMAP
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
}`,GM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XM=`varying vec3 vViewPosition;
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
#include <lightprobes_pars_fragment>`,KM=`#ifdef USE_ENVMAP
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
#endif`,qM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZM=`PhysicalMaterial material;
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
#endif`,$M=`uniform sampler2D dfgLUT;
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
}`,e1=`
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
#endif`,t1=`#if defined( RE_IndirectDiffuse )
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
#endif`,n1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,r1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f1=`#if defined( USE_POINTS_UV )
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
#endif`,h1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v1=`#ifdef USE_MORPHTARGETS
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
#endif`,x1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,y1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E1=`#ifdef USE_NORMALMAP
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
#endif`,w1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,z1=`float getShadowMask() {
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
}`,H1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V1=`#ifdef USE_SKINNING
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
#endif`,G1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W1=`#ifdef USE_SKINNING
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
#endif`,X1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y1=`#ifdef USE_TRANSMISSION
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
#endif`,Q1=`#ifdef USE_TRANSMISSION
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nS=`uniform sampler2D t2D;
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
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`#include <common>
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
}`,lS=`#if DEPTH_PACKING == 3200
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
}`,cS=`#define DISTANCE
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
}`,uS=`#define DISTANCE
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
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`uniform float scale;
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
}`,pS=`uniform vec3 diffuse;
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
}`,mS=`#include <common>
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
}`,gS=`uniform vec3 diffuse;
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
}`,vS=`#define LAMBERT
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
}`,xS=`#define LAMBERT
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
}`,_S=`#define MATCAP
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
}`,yS=`#define MATCAP
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
}`,MS=`#define NORMAL
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
}`,SS=`#define NORMAL
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
}`,AS=`#define PHONG
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
}`,ES=`#define PHONG
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
}`,wS=`#define STANDARD
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
}`,TS=`#define STANDARD
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
}`,bS=`#define TOON
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
}`,CS=`#define TOON
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
}`,RS=`uniform float size;
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
}`,PS=`uniform vec3 diffuse;
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
}`,LS=`#include <common>
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
}`,IS=`uniform vec3 color;
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
}`,DS=`uniform float rotation;
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
}`,US=`uniform vec3 diffuse;
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
}`,It={alphahash_fragment:tM,alphahash_pars_fragment:nM,alphamap_fragment:iM,alphamap_pars_fragment:rM,alphatest_fragment:sM,alphatest_pars_fragment:oM,aomap_fragment:aM,aomap_pars_fragment:lM,batching_pars_vertex:cM,batching_vertex:uM,begin_vertex:fM,beginnormal_vertex:hM,bsdfs:dM,iridescence_fragment:pM,bumpmap_pars_fragment:mM,clipping_planes_fragment:gM,clipping_planes_pars_fragment:vM,clipping_planes_pars_vertex:xM,clipping_planes_vertex:_M,color_fragment:yM,color_pars_fragment:MM,color_pars_vertex:SM,color_vertex:AM,common:EM,cube_uv_reflection_fragment:wM,defaultnormal_vertex:TM,displacementmap_pars_vertex:bM,displacementmap_vertex:CM,emissivemap_fragment:RM,emissivemap_pars_fragment:PM,colorspace_fragment:LM,colorspace_pars_fragment:IM,envmap_fragment:DM,envmap_common_pars_fragment:UM,envmap_pars_fragment:NM,envmap_pars_vertex:FM,envmap_physical_pars_fragment:KM,envmap_vertex:kM,fog_vertex:OM,fog_pars_vertex:BM,fog_fragment:zM,fog_pars_fragment:HM,gradientmap_pars_fragment:VM,lightmap_pars_fragment:GM,lights_lambert_fragment:WM,lights_lambert_pars_fragment:XM,lights_pars_begin:jM,lights_toon_fragment:qM,lights_toon_pars_fragment:YM,lights_phong_fragment:QM,lights_phong_pars_fragment:JM,lights_physical_fragment:ZM,lights_physical_pars_fragment:$M,lights_fragment_begin:e1,lights_fragment_maps:t1,lights_fragment_end:n1,lightprobes_pars_fragment:i1,logdepthbuf_fragment:r1,logdepthbuf_pars_fragment:s1,logdepthbuf_pars_vertex:o1,logdepthbuf_vertex:a1,map_fragment:l1,map_pars_fragment:c1,map_particle_fragment:u1,map_particle_pars_fragment:f1,metalnessmap_fragment:h1,metalnessmap_pars_fragment:d1,morphinstance_vertex:p1,morphcolor_vertex:m1,morphnormal_vertex:g1,morphtarget_pars_vertex:v1,morphtarget_vertex:x1,normal_fragment_begin:_1,normal_fragment_maps:y1,normal_pars_fragment:M1,normal_pars_vertex:S1,normal_vertex:A1,normalmap_pars_fragment:E1,clearcoat_normal_fragment_begin:w1,clearcoat_normal_fragment_maps:T1,clearcoat_pars_fragment:b1,iridescence_pars_fragment:C1,opaque_fragment:R1,packing:P1,premultiplied_alpha_fragment:L1,project_vertex:I1,dithering_fragment:D1,dithering_pars_fragment:U1,roughnessmap_fragment:N1,roughnessmap_pars_fragment:F1,shadowmap_pars_fragment:k1,shadowmap_pars_vertex:O1,shadowmap_vertex:B1,shadowmask_pars_fragment:z1,skinbase_vertex:H1,skinning_pars_vertex:V1,skinning_vertex:G1,skinnormal_vertex:W1,specularmap_fragment:X1,specularmap_pars_fragment:j1,tonemapping_fragment:K1,tonemapping_pars_fragment:q1,transmission_fragment:Y1,transmission_pars_fragment:Q1,uv_pars_fragment:J1,uv_pars_vertex:Z1,uv_vertex:$1,worldpos_vertex:eS,background_vert:tS,background_frag:nS,backgroundCube_vert:iS,backgroundCube_frag:rS,cube_vert:sS,cube_frag:oS,depth_vert:aS,depth_frag:lS,distance_vert:cS,distance_frag:uS,equirect_vert:fS,equirect_frag:hS,linedashed_vert:dS,linedashed_frag:pS,meshbasic_vert:mS,meshbasic_frag:gS,meshlambert_vert:vS,meshlambert_frag:xS,meshmatcap_vert:_S,meshmatcap_frag:yS,meshnormal_vert:MS,meshnormal_frag:SS,meshphong_vert:AS,meshphong_frag:ES,meshphysical_vert:wS,meshphysical_frag:TS,meshtoon_vert:bS,meshtoon_frag:CS,points_vert:RS,points_frag:PS,shadow_vert:LS,shadow_frag:IS,sprite_vert:DS,sprite_frag:US},qe={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},envMapRotation:{value:new Tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},tr={basic:{uniforms:Jn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:Jn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:Jn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:Jn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:Jn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Xt(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:Jn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:Jn([qe.points,qe.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:Jn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:Jn([qe.common,qe.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:Jn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:Jn([qe.sprite,qe.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distance:{uniforms:Jn([qe.common,qe.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distance_vert,fragmentShader:It.distance_frag},shadow:{uniforms:Jn([qe.lights,qe.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};tr.physical={uniforms:Jn([tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const Jl={r:0,b:0,g:0},NS=new an,dv=new Tt;dv.set(-1,0,0,0,1,0,0,0,1);function FS(s,e,t,r,o,l){const c=new Xt(0);let f=o===!0?0:1,d,h,g=null,x=0,m=null;function _(w){let P=w.isScene===!0?w.background:null;if(P&&P.isTexture){const R=w.backgroundBlurriness>0;P=e.get(P,R)}return P}function S(w){let P=!1;const R=_(w);R===null?y(c,f):R&&R.isColor&&(y(R,1),P=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?t.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function T(w,P){const R=_(P);R&&(R.isCubeTexture||R.mapping===Mc)?(h===void 0&&(h=new Nn(new wa(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Ao(tr.backgroundCube.uniforms),vertexShader:tr.backgroundCube.vertexShader,fragmentShader:tr.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(NS.makeRotationFromEuler(P.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(dv),h.material.toneMapped=kt.getTransfer(R.colorSpace)!==qt,(g!==R||x!==R.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,g=R,x=R.version,m=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new Nn(new Ac(2,2),new gi({name:"BackgroundMaterial",uniforms:Ao(tr.background.uniforms),vertexShader:tr.background.vertexShader,fragmentShader:tr.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.toneMapped=kt.getTransfer(R.colorSpace)!==qt,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||x!==R.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,g=R,x=R.version,m=s.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null))}function y(w,P){w.getRGB(Jl,uv(s)),t.buffers.color.setClear(Jl.r,Jl.g,Jl.b,P,l)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(w,P=1){c.set(w),f=P,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(w){f=w,y(c,f)},render:S,addToRenderList:T,dispose:M}}function kS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=m(null);let l=o,c=!1;function f(H,D,W,$,G){let ie=!1;const X=x(H,$,W,D);l!==X&&(l=X,h(l.object)),ie=_(H,$,W,G),ie&&S(H,$,W,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(ie||c)&&(c=!1,R(H,D,W,$),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function d(){return s.createVertexArray()}function h(H){return s.bindVertexArray(H)}function g(H){return s.deleteVertexArray(H)}function x(H,D,W,$){const G=$.wireframe===!0;let ie=r[D.id];ie===void 0&&(ie={},r[D.id]=ie);const X=H.isInstancedMesh===!0?H.id:0;let F=ie[X];F===void 0&&(F={},ie[X]=F);let k=F[W.id];k===void 0&&(k={},F[W.id]=k);let te=k[G];return te===void 0&&(te=m(d()),k[G]=te),te}function m(H){const D=[],W=[],$=[];for(let G=0;G<t;G++)D[G]=0,W[G]=0,$[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:$,object:H,attributes:{},index:null}}function _(H,D,W,$){const G=l.attributes,ie=D.attributes;let X=0;const F=W.getAttributes();for(const k in F)if(F[k].location>=0){const N=G[k];let j=ie[k];if(j===void 0&&(k==="instanceMatrix"&&H.instanceMatrix&&(j=H.instanceMatrix),k==="instanceColor"&&H.instanceColor&&(j=H.instanceColor)),N===void 0||N.attribute!==j||j&&N.data!==j.data)return!0;X++}return l.attributesNum!==X||l.index!==$}function S(H,D,W,$){const G={},ie=D.attributes;let X=0;const F=W.getAttributes();for(const k in F)if(F[k].location>=0){let N=ie[k];N===void 0&&(k==="instanceMatrix"&&H.instanceMatrix&&(N=H.instanceMatrix),k==="instanceColor"&&H.instanceColor&&(N=H.instanceColor));const j={};j.attribute=N,N&&N.data&&(j.data=N.data),G[k]=j,X++}l.attributes=G,l.attributesNum=X,l.index=$}function T(){const H=l.newAttributes;for(let D=0,W=H.length;D<W;D++)H[D]=0}function y(H){M(H,0)}function M(H,D){const W=l.newAttributes,$=l.enabledAttributes,G=l.attributeDivisors;W[H]=1,$[H]===0&&(s.enableVertexAttribArray(H),$[H]=1),G[H]!==D&&(s.vertexAttribDivisor(H,D),G[H]=D)}function w(){const H=l.newAttributes,D=l.enabledAttributes;for(let W=0,$=D.length;W<$;W++)D[W]!==H[W]&&(s.disableVertexAttribArray(W),D[W]=0)}function P(H,D,W,$,G,ie,X){X===!0?s.vertexAttribIPointer(H,D,W,G,ie):s.vertexAttribPointer(H,D,W,$,G,ie)}function R(H,D,W,$){T();const G=$.attributes,ie=W.getAttributes(),X=D.defaultAttributeValues;for(const F in ie){const k=ie[F];if(k.location>=0){let te=G[F];if(te===void 0&&(F==="instanceMatrix"&&H.instanceMatrix&&(te=H.instanceMatrix),F==="instanceColor"&&H.instanceColor&&(te=H.instanceColor)),te!==void 0){const N=te.normalized,j=te.itemSize,Ee=e.get(te);if(Ee===void 0)continue;const Se=Ee.buffer,de=Ee.type,K=Ee.bytesPerElement,ce=de===s.INT||de===s.UNSIGNED_INT||te.gpuType===Jh;if(te.isInterleavedBufferAttribute){const oe=te.data,Ae=oe.stride,be=te.offset;if(oe.isInstancedInterleavedBuffer){for(let ve=0;ve<k.locationSize;ve++)M(k.location+ve,oe.meshPerAttribute);H.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ve=0;ve<k.locationSize;ve++)y(k.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let ve=0;ve<k.locationSize;ve++)P(k.location+ve,j/k.locationSize,de,N,Ae*K,(be+j/k.locationSize*ve)*K,ce)}else{if(te.isInstancedBufferAttribute){for(let oe=0;oe<k.locationSize;oe++)M(k.location+oe,te.meshPerAttribute);H.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let oe=0;oe<k.locationSize;oe++)y(k.location+oe);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let oe=0;oe<k.locationSize;oe++)P(k.location+oe,j/k.locationSize,de,N,j*K,j/k.locationSize*oe*K,ce)}}else if(X!==void 0){const N=X[F];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(k.location,N);break;case 3:s.vertexAttrib3fv(k.location,N);break;case 4:s.vertexAttrib4fv(k.location,N);break;default:s.vertexAttrib1fv(k.location,N)}}}}w()}function z(){U();for(const H in r){const D=r[H];for(const W in D){const $=D[W];for(const G in $){const ie=$[G];for(const X in ie)g(ie[X].object),delete ie[X];delete $[G]}}delete r[H]}}function I(H){if(r[H.id]===void 0)return;const D=r[H.id];for(const W in D){const $=D[W];for(const G in $){const ie=$[G];for(const X in ie)g(ie[X].object),delete ie[X];delete $[G]}}delete r[H.id]}function O(H){for(const D in r){const W=r[D];for(const $ in W){const G=W[$];if(G[H.id]===void 0)continue;const ie=G[H.id];for(const X in ie)g(ie[X].object),delete ie[X];delete G[H.id]}}}function E(H){for(const D in r){const W=r[D],$=H.isInstancedMesh===!0?H.id:0,G=W[$];if(G!==void 0){for(const ie in G){const X=G[ie];for(const F in X)g(X[F].object),delete X[F];delete G[ie]}delete W[$],Object.keys(W).length===0&&delete r[D]}}}function U(){q(),c=!0,l!==o&&(l=o,h(l.object))}function q(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:U,resetDefaultState:q,dispose:z,releaseStatesOfGeometry:I,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:y,disableUnusedAttributes:w}}function OS(s,e,t){let r;function o(d){r=d}function l(d,h){s.drawArrays(r,d,h),t.update(h,r,1)}function c(d,h,g){g!==0&&(s.drawArraysInstanced(r,d,h,g),t.update(h,r,g))}function f(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,g);let m=0;for(let _=0;_<g;_++)m+=h[_];t.update(m,r,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function BS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==bi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const E=O===Ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Ti&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Xi&&!E)}function d(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=d(h);g!==h&&(Mt("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const x=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&Mt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:w,maxVaryings:P,maxFragmentUniforms:R,maxSamples:z,samples:I}}function zS(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new _s,f=new Tt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(x,m){const _=x.length!==0||m||r!==0||o;return o=m,r=x.length,_},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,m){t=g(x,m,0)},this.setState=function(x,m,_){const S=x.clippingPlanes,T=x.clipIntersection,y=x.clipShadows,M=s.get(x);if(!o||S===null||S.length===0||l&&!y)l?g(null):h();else{const w=l?0:r,P=w*4;let R=M.clippingState||null;d.value=R,R=g(S,m,P,_);for(let z=0;z!==P;++z)R[z]=t[z];M.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,m,_,S){const T=x!==null?x.length:0;let y=null;if(T!==0){if(y=d.value,S!==!0||y===null){const M=_+T*4,w=m.matrixWorldInverse;f.getNormalMatrix(w),(y===null||y.length<M)&&(y=new Float32Array(M));for(let P=0,R=_;P!==T;++P,R+=4)c.copy(x[P]).applyMatrix4(w,f),c.normal.toArray(y,R),y[R+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}const $r=4,D0=[.125,.215,.35,.446,.526,.582],Ms=20,HS=256,fa=new fd,U0=new Xt;let kf=null,Of=0,Bf=0,zf=!1;const VS=new J;class N0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:f=VS}=l;kf=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),Bf=this._renderer.getActiveMipmapLevel(),zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=O0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=k0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kf,Of,Bf),this._renderer.xr.enabled=zf,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===Mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kf=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),Bf=this._renderer.getActiveMipmapLevel(),zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Ar,format:bi,colorSpace:dc,depthBuffer:!1},o=F0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=F0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=GS(l)),this._blurMaterial=XS(l,e,t),this._ggxMaterial=WS(l,e,t)}return o}_compileMaterial(e){const t=new Nn(new cn,e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,r,o,l){const d=new ai(90,1,t,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,m=x.autoClear,_=x.toneMapping;x.getClearColor(U0),x.toneMapping=ir,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nn(new wa,new iv({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let M=!1;const w=e.background;w?w.isColor&&(y.color.copy(w),e.background=null,M=!0):(y.color.copy(U0),M=!0);for(let P=0;P<6;P++){const R=P%3;R===0?(d.up.set(0,h[P],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+g[P],l.y,l.z)):R===1?(d.up.set(0,0,h[P]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+g[P],l.z)):(d.up.set(0,h[P],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+g[P]));const z=this._cubeSize;fo(o,R*z,P>2?z:0,z,z),x.setRenderTarget(o),M&&x.render(T,d),x.render(e,d)}x.toneMapping=_,x.autoClear=m,e.background=w}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Es||e.mapping===Mo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=O0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=k0());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;fo(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,fa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,h=r/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),x=Math.sqrt(h*h-g*g),m=0+h*1.25,_=x*m,{_lodMax:S}=this,T=this._sizeLods[r],y=3*T*(r>S-$r?r-S+$r:0),M=4*(this._cubeSize-T);d.envMap.value=e.texture,d.roughness.value=_,d.mipInt.value=S-t,fo(l,y,M,3*T,2*T),o.setRenderTarget(l),o.render(f,fa),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=S-r,fo(e,y,M,3*T,2*T),o.setRenderTarget(e),o.render(f,fa)}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Wt("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[o];x.material=h;const m=h.uniforms,_=this._sizeLods[r]-1,S=isFinite(l)?Math.PI/(2*_):2*Math.PI/(2*Ms-1),T=l/S,y=isFinite(l)?1+Math.floor(g*T):Ms;y>Ms&&Mt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ms}`);const M=[];let w=0;for(let O=0;O<Ms;++O){const E=O/T,U=Math.exp(-E*E/2);M.push(U),O===0?w+=U:O<y&&(w+=2*U)}for(let O=0;O<M.length;O++)M[O]=M[O]/w;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=M,m.latitudinal.value=c==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:P}=this;m.dTheta.value=S,m.mipInt.value=P-r;const R=this._sizeLods[o],z=3*R*(o>P-$r?o-P+$r:0),I=4*(this._cubeSize-R);fo(t,z,I,3*R,2*R),d.setRenderTarget(t),d.render(x,fa)}}function GS(s){const e=[],t=[],r=[];let o=s;const l=s-$r+1+D0.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);e.push(f);let d=1/f;c>s-$r?d=D0[c-s+$r-1]:c===0&&(d=0),t.push(d);const h=1/(f-2),g=-h,x=1+h,m=[g,g,x,g,x,x,g,g,x,x,g,x],_=6,S=6,T=3,y=2,M=1,w=new Float32Array(T*S*_),P=new Float32Array(y*S*_),R=new Float32Array(M*S*_);for(let I=0;I<_;I++){const O=I%3*2/3-1,E=I>2?0:-1,U=[O,E,0,O+2/3,E,0,O+2/3,E+1,0,O,E,0,O+2/3,E+1,0,O,E+1,0];w.set(U,T*S*I),P.set(m,y*S*I);const q=[I,I,I,I,I,I];R.set(q,M*S*I)}const z=new cn;z.setAttribute("position",new Gt(w,T)),z.setAttribute("uv",new Gt(P,y)),z.setAttribute("faceIndex",new Gt(R,M)),r.push(new Nn(z,null)),o>$r&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function F0(s,e,t){const r=new sr(s,e,t);return r.texture.mapping=Mc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fo(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function WS(s,e,t){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function XS(s,e,t){const r=new Float32Array(Ms),o=new J(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function k0(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function O0(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Ec(){return`

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
	`}class pv extends sr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new lv(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new wa(5,5,5),l=new gi({name:"CubemapFromEquirect",uniforms:Ao(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:li,blending:Mr});l.uniforms.tEquirect.value=t;const c=new Nn(o,l),f=t.minFilter;return t.minFilter===Ss&&(t.minFilter=Tn),new Jy(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}function jS(s){let e=new WeakMap,t=new WeakMap,r=null;function o(m,_=!1){return m==null?null:_?c(m):l(m)}function l(m){if(m&&m.isTexture){const _=m.mapping;if(_===af||_===lf)if(e.has(m)){const S=e.get(m).texture;return f(S,m.mapping)}else{const S=m.image;if(S&&S.height>0){const T=new pv(S.height);return T.fromEquirectangularTexture(s,m),e.set(m,T),m.addEventListener("dispose",h),f(T.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const _=m.mapping,S=_===af||_===lf,T=_===Es||_===Mo;if(S||T){let y=t.get(m);const M=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==M)return r===null&&(r=new N0(s)),y=S?r.fromEquirectangular(m,y):r.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const w=m.image;return S&&w&&w.height>0||T&&w&&d(w)?(r===null&&(r=new N0(s)),y=S?r.fromEquirectangular(m):r.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",g),y.texture):null}}}return m}function f(m,_){return _===af?m.mapping=Es:_===lf&&(m.mapping=Mo),m}function d(m){let _=0;const S=6;for(let T=0;T<S;T++)m[T]!==void 0&&_++;return _===S}function h(m){const _=m.target;_.removeEventListener("dispose",h);const S=e.get(_);S!==void 0&&(e.delete(_),S.dispose())}function g(m){const _=m.target;_.removeEventListener("dispose",g);const S=t.get(_);S!==void 0&&(t.delete(_),S.dispose())}function x(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:x}}function KS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Hh("WebGLRenderer: "+r+" extension not supported."),o}}}function qS(s,e,t,r){const o={},l=new WeakMap;function c(x){const m=x.target;m.index!==null&&e.remove(m.index);for(const S in m.attributes)e.remove(m.attributes[S]);m.removeEventListener("dispose",c),delete o[m.id];const _=l.get(m);_&&(e.remove(_),l.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(x,m){return o[m.id]===!0||(m.addEventListener("dispose",c),o[m.id]=!0,t.memory.geometries++),m}function d(x){const m=x.attributes;for(const _ in m)e.update(m[_],s.ARRAY_BUFFER)}function h(x){const m=[],_=x.index,S=x.attributes.position;let T=0;if(S===void 0)return;if(_!==null){const w=_.array;T=_.version;for(let P=0,R=w.length;P<R;P+=3){const z=w[P+0],I=w[P+1],O=w[P+2];m.push(z,I,I,O,O,z)}}else{const w=S.array;T=S.version;for(let P=0,R=w.length/3-1;P<R;P+=3){const z=P+0,I=P+1,O=P+2;m.push(z,I,I,O,O,z)}}const y=new(S.count>=65535?nv:tv)(m,1);y.version=T;const M=l.get(x);M&&e.remove(M),l.set(x,y)}function g(x){const m=l.get(x);if(m){const _=x.index;_!==null&&m.version<_.version&&h(x)}else h(x);return l.get(x)}return{get:f,update:d,getWireframeAttribute:g}}function YS(s,e,t){let r;function o(x){r=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function d(x,m){s.drawElements(r,m,l,x*c),t.update(m,r,1)}function h(x,m,_){_!==0&&(s.drawElementsInstanced(r,m,l,x*c,_),t.update(m,r,_))}function g(x,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,l,x,0,_);let T=0;for(let y=0;y<_;y++)T+=m[y];t.update(T,r,1)}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=g}function QS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Wt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function JS(s,e,t){const r=new WeakMap,o=new sn;function l(c,f,d){const h=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=g!==void 0?g.length:0;let m=r.get(f);if(m===void 0||m.count!==x){let q=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",q)};var _=q;m!==void 0&&m.texture.dispose();const S=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let R=0;S===!0&&(R=1),T===!0&&(R=2),y===!0&&(R=3);let z=f.attributes.position.count*R,I=1;z>e.maxTextureSize&&(I=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const O=new Float32Array(z*I*4*x),E=new Zg(O,z,I,x);E.type=Xi,E.needsUpdate=!0;const U=R*4;for(let H=0;H<x;H++){const D=M[H],W=w[H],$=P[H],G=z*I*4*H;for(let ie=0;ie<D.count;ie++){const X=ie*U;S===!0&&(o.fromBufferAttribute(D,ie),O[G+X+0]=o.x,O[G+X+1]=o.y,O[G+X+2]=o.z,O[G+X+3]=0),T===!0&&(o.fromBufferAttribute(W,ie),O[G+X+4]=o.x,O[G+X+5]=o.y,O[G+X+6]=o.z,O[G+X+7]=0),y===!0&&(o.fromBufferAttribute($,ie),O[G+X+8]=o.x,O[G+X+9]=o.y,O[G+X+10]=o.z,O[G+X+11]=$.itemSize===4?o.w:1)}}m={count:x,texture:E,size:new Nt(z,I)},r.set(f,m),f.addEventListener("dispose",q)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let S=0;for(let y=0;y<h.length;y++)S+=h[y];const T=f.morphTargetsRelative?1:1-S;d.getUniforms().setValue(s,"morphTargetBaseInfluence",T),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:l}}function ZS(s,e,t,r,o){let l=new WeakMap;function c(h){const g=o.render.frame,x=h.geometry,m=e.get(h,x);if(l.get(m)!==g&&(e.update(m),l.set(m,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==g&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,g))),h.isSkinnedMesh){const _=h.skeleton;l.get(_)!==g&&(_.update(),l.set(_,g))}return m}function f(){l=new WeakMap}function d(h){const g=h.target;g.removeEventListener("dispose",d),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:f}}const $S={[Fg]:"LINEAR_TONE_MAPPING",[kg]:"REINHARD_TONE_MAPPING",[Og]:"CINEON_TONE_MAPPING",[Bg]:"ACES_FILMIC_TONE_MAPPING",[Hg]:"AGX_TONE_MAPPING",[Vg]:"NEUTRAL_TONE_MAPPING",[zg]:"CUSTOM_TONE_MAPPING"};function eA(s,e,t,r,o){const l=new sr(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new So(e,t):void 0}),c=new sr(e,t,{type:Ar,depthBuffer:!1,stencilBuffer:!1}),f=new cn;f.setAttribute("position",new Un([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Un([0,2,0,0,2,0],2));const d=new qy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Nn(f,d),g=new fd(-1,1,1,-1,0,1);let x=null,m=null,_=!1,S,T=null,y=[],M=!1;this.setSize=function(w,P){l.setSize(w,P),c.setSize(w,P);for(let R=0;R<y.length;R++){const z=y[R];z.setSize&&z.setSize(w,P)}},this.setEffects=function(w){y=w,M=y.length>0&&y[0].isRenderPass===!0;const P=l.width,R=l.height;for(let z=0;z<y.length;z++){const I=y[z];I.setSize&&I.setSize(P,R)}},this.begin=function(w,P){if(_||w.toneMapping===ir&&y.length===0)return!1;if(T=P,P!==null){const R=P.width,z=P.height;(l.width!==R||l.height!==z)&&this.setSize(R,z)}return M===!1&&w.setRenderTarget(l),S=w.toneMapping,w.toneMapping=ir,!0},this.hasRenderPass=function(){return M},this.end=function(w,P){w.toneMapping=S,_=!0;let R=l,z=c;for(let I=0;I<y.length;I++){const O=y[I];if(O.enabled!==!1&&(O.render(w,z,R,P),O.needsSwap!==!1)){const E=R;R=z,z=E}}if(x!==w.outputColorSpace||m!==w.toneMapping){x=w.outputColorSpace,m=w.toneMapping,d.defines={},kt.getTransfer(x)===qt&&(d.defines.SRGB_TRANSFER="");const I=$S[m];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=R.texture,w.setRenderTarget(T),w.render(h,g),T=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),f.dispose(),d.dispose()}}const mv=new Xn,Xh=new So(1,1),gv=new Zg,vv=new Ay,xv=new lv,B0=[],z0=[],H0=new Float32Array(16),V0=new Float32Array(9),G0=new Float32Array(4);function bo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=B0[o];if(l===void 0&&(l=new Float32Array(o),B0[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function xn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function _n(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function wc(s,e){let t=z0[e];t===void 0&&(t=new Int32Array(e),z0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function tA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function nA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2fv(this.addr,e),_n(t,e)}}function iA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;s.uniform3fv(this.addr,e),_n(t,e)}}function rA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4fv(this.addr,e),_n(t,e)}}function sA(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,r))return;G0.set(r),s.uniformMatrix2fv(this.addr,!1,G0),_n(t,r)}}function oA(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,r))return;V0.set(r),s.uniformMatrix3fv(this.addr,!1,V0),_n(t,r)}}function aA(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(xn(t,r))return;H0.set(r),s.uniformMatrix4fv(this.addr,!1,H0),_n(t,r)}}function lA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function cA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2iv(this.addr,e),_n(t,e)}}function uA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3iv(this.addr,e),_n(t,e)}}function fA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4iv(this.addr,e),_n(t,e)}}function hA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function dA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2uiv(this.addr,e),_n(t,e)}}function pA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3uiv(this.addr,e),_n(t,e)}}function mA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4uiv(this.addr,e),_n(t,e)}}function gA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Xh.compareFunction=t.isReversedDepthBuffer()?rd:id,l=Xh):l=mv,t.setTexture2D(e||l,o)}function vA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||vv,o)}function xA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||xv,o)}function _A(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||gv,o)}function yA(s){switch(s){case 5126:return tA;case 35664:return nA;case 35665:return iA;case 35666:return rA;case 35674:return sA;case 35675:return oA;case 35676:return aA;case 5124:case 35670:return lA;case 35667:case 35671:return cA;case 35668:case 35672:return uA;case 35669:case 35673:return fA;case 5125:return hA;case 36294:return dA;case 36295:return pA;case 36296:return mA;case 35678:case 36198:case 36298:case 36306:case 35682:return gA;case 35679:case 36299:case 36307:return vA;case 35680:case 36300:case 36308:case 36293:return xA;case 36289:case 36303:case 36311:case 36292:return _A}}function MA(s,e){s.uniform1fv(this.addr,e)}function SA(s,e){const t=bo(e,this.size,2);s.uniform2fv(this.addr,t)}function AA(s,e){const t=bo(e,this.size,3);s.uniform3fv(this.addr,t)}function EA(s,e){const t=bo(e,this.size,4);s.uniform4fv(this.addr,t)}function wA(s,e){const t=bo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function TA(s,e){const t=bo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function bA(s,e){const t=bo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function CA(s,e){s.uniform1iv(this.addr,e)}function RA(s,e){s.uniform2iv(this.addr,e)}function PA(s,e){s.uniform3iv(this.addr,e)}function LA(s,e){s.uniform4iv(this.addr,e)}function IA(s,e){s.uniform1uiv(this.addr,e)}function DA(s,e){s.uniform2uiv(this.addr,e)}function UA(s,e){s.uniform3uiv(this.addr,e)}function NA(s,e){s.uniform4uiv(this.addr,e)}function FA(s,e,t){const r=this.cache,o=e.length,l=wc(t,o);xn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=Xh:c=mv;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,l[f])}function kA(s,e,t){const r=this.cache,o=e.length,l=wc(t,o);xn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||vv,l[c])}function OA(s,e,t){const r=this.cache,o=e.length,l=wc(t,o);xn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||xv,l[c])}function BA(s,e,t){const r=this.cache,o=e.length,l=wc(t,o);xn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||gv,l[c])}function zA(s){switch(s){case 5126:return MA;case 35664:return SA;case 35665:return AA;case 35666:return EA;case 35674:return wA;case 35675:return TA;case 35676:return bA;case 5124:case 35670:return CA;case 35667:case 35671:return RA;case 35668:case 35672:return PA;case 35669:case 35673:return LA;case 5125:return IA;case 36294:return DA;case 36295:return UA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return FA;case 35679:case 36299:case 36307:return kA;case 35680:case 36300:case 36308:case 36293:return OA;case 36289:case 36303:case 36311:case 36292:return BA}}class HA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=yA(t.type)}}class VA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zA(t.type)}}class GA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Hf=/(\w+)(\])?(\[|\.)?/g;function W0(s,e){s.seq.push(e),s.map[e.id]=e}function WA(s,e,t){const r=s.name,o=r.length;for(Hf.lastIndex=0;;){const l=Hf.exec(r),c=Hf.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===o){W0(t,h===void 0?new HA(f,s,e):new VA(f,s,e));break}else{let x=t.map[f];x===void 0&&(x=new GA(f),W0(t,x)),t=x}}}class ac{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),d=e.getUniformLocation(t,f.name);WA(f,d,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function X0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const XA=37297;let jA=0;function KA(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const j0=new Tt;function qA(s){kt._getMatrix(j0,kt.workingColorSpace,s);const e=`mat3( ${j0.elements.map(t=>t.toFixed(4))} )`;switch(kt.getTransfer(s)){case pc:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return Mt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function K0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+KA(s.getShaderSource(e),f)}else return l}function YA(s,e){const t=qA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const QA={[Fg]:"Linear",[kg]:"Reinhard",[Og]:"Cineon",[Bg]:"ACESFilmic",[Hg]:"AgX",[Vg]:"Neutral",[zg]:"Custom"};function JA(s,e){const t=QA[e];return t===void 0?(Mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zl=new J;function ZA(){kt.getLuminanceCoefficients(Zl);const s=Zl.x.toFixed(4),e=Zl.y.toFixed(4),t=Zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $A(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(va).join(`
`)}function eE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function tE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function va(s){return s!==""}function q0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Y0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nE=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(s){return s.replace(nE,rE)}const iE=new Map;function rE(s,e){let t=It[e];if(t===void 0){const r=iE.get(e);if(r!==void 0)t=It[r],Mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return jh(t)}const sE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Q0(s){return s.replace(sE,oE)}function oE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function J0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const aE={[nc]:"SHADOWMAP_TYPE_PCF",[ga]:"SHADOWMAP_TYPE_VSM"};function lE(s){return aE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cE={[Es]:"ENVMAP_TYPE_CUBE",[Mo]:"ENVMAP_TYPE_CUBE",[Mc]:"ENVMAP_TYPE_CUBE_UV"};function uE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":cE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const fE={[Mo]:"ENVMAP_MODE_REFRACTION"};function hE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":fE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dE={[Ng]:"ENVMAP_BLENDING_MULTIPLY",[H_]:"ENVMAP_BLENDING_MIX",[V_]:"ENVMAP_BLENDING_ADD"};function pE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":dE[s.combine]||"ENVMAP_BLENDING_NONE"}function mE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function gE(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=lE(t),h=uE(t),g=hE(t),x=pE(t),m=mE(t),_=$A(t),S=eE(l),T=o.createProgram();let y,M,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(va).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(va).join(`
`),M.length>0&&(M+=`
`)):(y=[J0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(va).join(`
`),M=[J0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+x:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?It.tonemapping_pars_fragment:"",t.toneMapping!==ir?JA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,YA("linearToOutputTexel",t.outputColorSpace),ZA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(va).join(`
`)),c=jh(c),c=q0(c,t),c=Y0(c,t),f=jh(f),f=q0(f,t),f=Y0(f,t),c=Q0(c),f=Q0(f),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",t.glslVersion===n0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===n0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const P=w+y+c,R=w+M+f,z=X0(o,o.VERTEX_SHADER,P),I=X0(o,o.FRAGMENT_SHADER,R);o.attachShader(T,z),o.attachShader(T,I),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function O(H){if(s.debug.checkShaderErrors){const D=o.getProgramInfoLog(T)||"",W=o.getShaderInfoLog(z)||"",$=o.getShaderInfoLog(I)||"",G=D.trim(),ie=W.trim(),X=$.trim();let F=!0,k=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,z,I);else{const te=K0(o,z,"vertex"),N=K0(o,I,"fragment");Wt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+G+`
`+te+`
`+N)}else G!==""?Mt("WebGLProgram: Program Info Log:",G):(ie===""||X==="")&&(k=!1);k&&(H.diagnostics={runnable:F,programLog:G,vertexShader:{log:ie,prefix:y},fragmentShader:{log:X,prefix:M}})}o.deleteShader(z),o.deleteShader(I),E=new ac(o,T),U=tE(o,T)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let U;this.getAttributes=function(){return U===void 0&&O(this),U};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=o.getProgramParameter(T,XA)),q},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jA++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=I,this}let vE=0;class xE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new _E(e),t.set(e,r)),r}}class _E{constructor(e){this.id=vE++,this.code=e,this.usedTimes=0}}function yE(s){return s===ws||s===fc||s===hc}function ME(s,e,t,r,o,l){const c=new $g,f=new xE,d=new Set,h=[],g=new Map,x=r.logarithmicDepthBuffer;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return d.add(E),E===0?"uv":`uv${E}`}function T(E,U,q,H,D,W){const $=H.fog,G=D.geometry,ie=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,X=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,F=e.get(E.envMap||ie,X),k=F&&F.mapping===Mc?F.image.height:null,te=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&Mt("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const N=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,j=N!==void 0?N.length:0;let Ee=0;G.morphAttributes.position!==void 0&&(Ee=1),G.morphAttributes.normal!==void 0&&(Ee=2),G.morphAttributes.color!==void 0&&(Ee=3);let Se,de,K,ce;if(te){const ct=tr[te];Se=ct.vertexShader,de=ct.fragmentShader}else Se=E.vertexShader,de=E.fragmentShader,f.update(E),K=f.getVertexShaderID(E),ce=f.getFragmentShaderID(E);const oe=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),be=D.isInstancedMesh===!0,ve=D.isBatchedMesh===!0,Ye=!!E.map,Oe=!!E.matcap,Je=!!F,Qe=!!E.aoMap,st=!!E.lightMap,Ze=!!E.bumpMap,dt=!!E.normalMap,St=!!E.displacementMap,Q=!!E.emissiveMap,ft=!!E.metalnessMap,pe=!!E.roughnessMap,Ce=E.anisotropy>0,le=E.clearcoat>0,nt=E.dispersion>0,L=E.iridescence>0,A=E.sheen>0,se=E.transmission>0,ye=Ce&&!!E.anisotropyMap,Te=le&&!!E.clearcoatMap,Ne=le&&!!E.clearcoatNormalMap,He=le&&!!E.clearcoatRoughnessMap,ge=L&&!!E.iridescenceMap,Me=L&&!!E.iridescenceThicknessMap,Ve=A&&!!E.sheenColorMap,Ge=A&&!!E.sheenRoughnessMap,Ie=!!E.specularMap,Le=!!E.specularColorMap,ht=!!E.specularIntensityMap,gt=se&&!!E.transmissionMap,Et=se&&!!E.thicknessMap,Y=!!E.gradientMap,ke=!!E.alphaMap,_e=E.alphaTest>0,Xe=!!E.alphaHash,we=!!E.extensions;let xe=ir;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(xe=s.toneMapping);const We={shaderID:te,shaderType:E.type,shaderName:E.name,vertexShader:Se,fragmentShader:de,defines:E.defines,customVertexShaderID:K,customFragmentShaderID:ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:ve,batchingColor:ve&&D._colorsTexture!==null,instancing:be,instancingColor:be&&D.instanceColor!==null,instancingMorph:be&&D.morphTexture!==null,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:kt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Ye,matcap:Oe,envMap:Je,envMapMode:Je&&F.mapping,envMapCubeUVHeight:k,aoMap:Qe,lightMap:st,bumpMap:Ze,normalMap:dt,displacementMap:St,emissiveMap:Q,normalMapObjectSpace:dt&&E.normalMapType===X_,normalMapTangentSpace:dt&&E.normalMapType===Zm,packedNormalMap:dt&&E.normalMapType===Zm&&yE(E.normalMap.format),metalnessMap:ft,roughnessMap:pe,anisotropy:Ce,anisotropyMap:ye,clearcoat:le,clearcoatMap:Te,clearcoatNormalMap:Ne,clearcoatRoughnessMap:He,dispersion:nt,iridescence:L,iridescenceMap:ge,iridescenceThicknessMap:Me,sheen:A,sheenColorMap:Ve,sheenRoughnessMap:Ge,specularMap:Ie,specularColorMap:Le,specularIntensityMap:ht,transmission:se,transmissionMap:gt,thicknessMap:Et,gradientMap:Y,opaque:E.transparent===!1&&E.blending===xo&&E.alphaToCoverage===!1,alphaMap:ke,alphaTest:_e,alphaHash:Xe,combine:E.combine,mapUv:Ye&&S(E.map.channel),aoMapUv:Qe&&S(E.aoMap.channel),lightMapUv:st&&S(E.lightMap.channel),bumpMapUv:Ze&&S(E.bumpMap.channel),normalMapUv:dt&&S(E.normalMap.channel),displacementMapUv:St&&S(E.displacementMap.channel),emissiveMapUv:Q&&S(E.emissiveMap.channel),metalnessMapUv:ft&&S(E.metalnessMap.channel),roughnessMapUv:pe&&S(E.roughnessMap.channel),anisotropyMapUv:ye&&S(E.anisotropyMap.channel),clearcoatMapUv:Te&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&S(E.sheenRoughnessMap.channel),specularMapUv:Ie&&S(E.specularMap.channel),specularColorMapUv:Le&&S(E.specularColorMap.channel),specularIntensityMapUv:ht&&S(E.specularIntensityMap.channel),transmissionMapUv:gt&&S(E.transmissionMap.channel),thicknessMapUv:Et&&S(E.thicknessMap.channel),alphaMapUv:ke&&S(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(dt||Ce),vertexNormals:!!G.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!G.attributes.uv&&(Ye||ke),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||G.attributes.normal===void 0&&dt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ae,skinning:D.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Ee,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:xe,decodeVideoTexture:Ye&&E.map.isVideoTexture===!0&&kt.getTransfer(E.map.colorSpace)===qt,decodeVideoTextureEmissive:Q&&E.emissiveMap.isVideoTexture===!0&&kt.getTransfer(E.emissiveMap.colorSpace)===qt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Gi,flipSided:E.side===li,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:we&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&E.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return We.vertexUv1s=d.has(1),We.vertexUv2s=d.has(2),We.vertexUv3s=d.has(3),d.clear(),We}function y(E){const U=[];if(E.shaderID?U.push(E.shaderID):(U.push(E.customVertexShaderID),U.push(E.customFragmentShaderID)),E.defines!==void 0)for(const q in E.defines)U.push(q),U.push(E.defines[q]);return E.isRawShaderMaterial===!1&&(M(U,E),w(U,E),U.push(s.outputColorSpace)),U.push(E.customProgramCacheKey),U.join()}function M(E,U){E.push(U.precision),E.push(U.outputColorSpace),E.push(U.envMapMode),E.push(U.envMapCubeUVHeight),E.push(U.mapUv),E.push(U.alphaMapUv),E.push(U.lightMapUv),E.push(U.aoMapUv),E.push(U.bumpMapUv),E.push(U.normalMapUv),E.push(U.displacementMapUv),E.push(U.emissiveMapUv),E.push(U.metalnessMapUv),E.push(U.roughnessMapUv),E.push(U.anisotropyMapUv),E.push(U.clearcoatMapUv),E.push(U.clearcoatNormalMapUv),E.push(U.clearcoatRoughnessMapUv),E.push(U.iridescenceMapUv),E.push(U.iridescenceThicknessMapUv),E.push(U.sheenColorMapUv),E.push(U.sheenRoughnessMapUv),E.push(U.specularMapUv),E.push(U.specularColorMapUv),E.push(U.specularIntensityMapUv),E.push(U.transmissionMapUv),E.push(U.thicknessMapUv),E.push(U.combine),E.push(U.fogExp2),E.push(U.sizeAttenuation),E.push(U.morphTargetsCount),E.push(U.morphAttributeCount),E.push(U.numDirLights),E.push(U.numPointLights),E.push(U.numSpotLights),E.push(U.numSpotLightMaps),E.push(U.numHemiLights),E.push(U.numRectAreaLights),E.push(U.numDirLightShadows),E.push(U.numPointLightShadows),E.push(U.numSpotLightShadows),E.push(U.numSpotLightShadowsWithMaps),E.push(U.numLightProbes),E.push(U.shadowMapType),E.push(U.toneMapping),E.push(U.numClippingPlanes),E.push(U.numClipIntersection),E.push(U.depthPacking)}function w(E,U){c.disableAll(),U.instancing&&c.enable(0),U.instancingColor&&c.enable(1),U.instancingMorph&&c.enable(2),U.matcap&&c.enable(3),U.envMap&&c.enable(4),U.normalMapObjectSpace&&c.enable(5),U.normalMapTangentSpace&&c.enable(6),U.clearcoat&&c.enable(7),U.iridescence&&c.enable(8),U.alphaTest&&c.enable(9),U.vertexColors&&c.enable(10),U.vertexAlphas&&c.enable(11),U.vertexUv1s&&c.enable(12),U.vertexUv2s&&c.enable(13),U.vertexUv3s&&c.enable(14),U.vertexTangents&&c.enable(15),U.anisotropy&&c.enable(16),U.alphaHash&&c.enable(17),U.batching&&c.enable(18),U.dispersion&&c.enable(19),U.batchingColor&&c.enable(20),U.gradientMap&&c.enable(21),U.packedNormalMap&&c.enable(22),U.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.reversedDepthBuffer&&c.enable(4),U.skinning&&c.enable(5),U.morphTargets&&c.enable(6),U.morphNormals&&c.enable(7),U.morphColors&&c.enable(8),U.premultipliedAlpha&&c.enable(9),U.shadowMapEnabled&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.decodeVideoTextureEmissive&&c.enable(20),U.alphaToCoverage&&c.enable(21),U.numLightProbeGrids>0&&c.enable(22),E.push(c.mask)}function P(E){const U=_[E.type];let q;if(U){const H=tr[U];q=Xy.clone(H.uniforms)}else q=E.uniforms;return q}function R(E,U){let q=g.get(U);return q!==void 0?++q.usedTimes:(q=new gE(s,U,E,o),h.push(q),g.set(U,q)),q}function z(E){if(--E.usedTimes===0){const U=h.indexOf(E);h[U]=h[h.length-1],h.pop(),g.delete(E.cacheKey),E.destroy()}}function I(E){f.remove(E)}function O(){f.dispose()}return{getParameters:T,getProgramCacheKey:y,getUniforms:P,acquireProgram:R,releaseProgram:z,releaseShaderCache:I,programs:h,dispose:O}}function SE(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,d){s.get(c)[f]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function AE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Z0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(m){let _=0;return m.isInstancedMesh&&(_+=2),m.isSkinnedMesh&&(_+=1),_}function f(m,_,S,T,y,M){let w=s[e];return w===void 0?(w={id:m.id,object:m,geometry:_,material:S,materialVariant:c(m),groupOrder:T,renderOrder:m.renderOrder,z:y,group:M},s[e]=w):(w.id=m.id,w.object=m,w.geometry=_,w.material=S,w.materialVariant=c(m),w.groupOrder=T,w.renderOrder=m.renderOrder,w.z=y,w.group=M),e++,w}function d(m,_,S,T,y,M){const w=f(m,_,S,T,y,M);S.transmission>0?r.push(w):S.transparent===!0?o.push(w):t.push(w)}function h(m,_,S,T,y,M){const w=f(m,_,S,T,y,M);S.transmission>0?r.unshift(w):S.transparent===!0?o.unshift(w):t.unshift(w)}function g(m,_){t.length>1&&t.sort(m||AE),r.length>1&&r.sort(_||Z0),o.length>1&&o.sort(_||Z0)}function x(){for(let m=e,_=s.length;m<_;m++){const S=s[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:h,finish:x,sort:g}}function EE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new $0,s.set(r,[c])):o>=l.length?(c=new $0,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function wE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new Xt};break;case"SpotLight":t={position:new J,direction:new J,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":t={color:new Xt,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=t,t}}}function TE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let bE=0;function CE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function RE(s){const e=new wE,t=TE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new J);const o=new J,l=new an,c=new an;function f(h){let g=0,x=0,m=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let _=0,S=0,T=0,y=0,M=0,w=0,P=0,R=0,z=0,I=0,O=0;h.sort(CE);for(let U=0,q=h.length;U<q;U++){const H=h[U],D=H.color,W=H.intensity,$=H.distance;let G=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===ws?G=H.shadow.map.texture:G=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=D.r*W,x+=D.g*W,m+=D.b*W;else if(H.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(H.sh.coefficients[ie],W);O++}else if(H.isDirectionalLight){const ie=e.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const X=H.shadow,F=t.get(H);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,r.directionalShadow[_]=F,r.directionalShadowMap[_]=G,r.directionalShadowMatrix[_]=H.shadow.matrix,w++}r.directional[_]=ie,_++}else if(H.isSpotLight){const ie=e.get(H);ie.position.setFromMatrixPosition(H.matrixWorld),ie.color.copy(D).multiplyScalar(W),ie.distance=$,ie.coneCos=Math.cos(H.angle),ie.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ie.decay=H.decay,r.spot[T]=ie;const X=H.shadow;if(H.map&&(r.spotLightMap[z]=H.map,z++,X.updateMatrices(H),H.castShadow&&I++),r.spotLightMatrix[T]=X.matrix,H.castShadow){const F=t.get(H);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,r.spotShadow[T]=F,r.spotShadowMap[T]=G,R++}T++}else if(H.isRectAreaLight){const ie=e.get(H);ie.color.copy(D).multiplyScalar(W),ie.halfWidth.set(H.width*.5,0,0),ie.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=ie,y++}else if(H.isPointLight){const ie=e.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity),ie.distance=H.distance,ie.decay=H.decay,H.castShadow){const X=H.shadow,F=t.get(H);F.shadowIntensity=X.intensity,F.shadowBias=X.bias,F.shadowNormalBias=X.normalBias,F.shadowRadius=X.radius,F.shadowMapSize=X.mapSize,F.shadowCameraNear=X.camera.near,F.shadowCameraFar=X.camera.far,r.pointShadow[S]=F,r.pointShadowMap[S]=G,r.pointShadowMatrix[S]=H.shadow.matrix,P++}r.point[S]=ie,S++}else if(H.isHemisphereLight){const ie=e.get(H);ie.skyColor.copy(H.color).multiplyScalar(W),ie.groundColor.copy(H.groundColor).multiplyScalar(W),r.hemi[M]=ie,M++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=qe.LTC_FLOAT_1,r.rectAreaLTC2=qe.LTC_FLOAT_2):(r.rectAreaLTC1=qe.LTC_HALF_1,r.rectAreaLTC2=qe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=m;const E=r.hash;(E.directionalLength!==_||E.pointLength!==S||E.spotLength!==T||E.rectAreaLength!==y||E.hemiLength!==M||E.numDirectionalShadows!==w||E.numPointShadows!==P||E.numSpotShadows!==R||E.numSpotMaps!==z||E.numLightProbes!==O)&&(r.directional.length=_,r.spot.length=T,r.rectArea.length=y,r.point.length=S,r.hemi.length=M,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+z-I,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=O,E.directionalLength=_,E.pointLength=S,E.spotLength=T,E.rectAreaLength=y,E.hemiLength=M,E.numDirectionalShadows=w,E.numPointShadows=P,E.numSpotShadows=R,E.numSpotMaps=z,E.numLightProbes=O,r.version=bE++)}function d(h,g){let x=0,m=0,_=0,S=0,T=0;const y=g.matrixWorldInverse;for(let M=0,w=h.length;M<w;M++){const P=h[M];if(P.isDirectionalLight){const R=r.directional[x];R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),x++}else if(P.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),_++}else if(P.isRectAreaLight){const R=r.rectArea[S];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),c.identity(),l.copy(P.matrixWorld),l.premultiply(y),c.extractRotation(l),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),S++}else if(P.isPointLight){const R=r.point[m];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),m++}else if(P.isHemisphereLight){const R=r.hemi[T];R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:f,setupView:d,state:r}}function eg(s){const e=new RE(s),t=[],r=[],o=[];function l(m){x.camera=m,t.length=0,r.length=0,o.length=0}function c(m){t.push(m)}function f(m){r.push(m)}function d(m){o.push(m)}function h(){e.setup(t)}function g(m){e.setupView(t,m)}const x={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:h,setupLightsView:g,pushLight:c,pushShadow:f,pushLightProbeGrid:d}}function PE(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new eg(s),e.set(o,[f])):l>=c.length?(f=new eg(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const LE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IE=`uniform sampler2D shadow_pass;
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
}`,DE=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],UE=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],tg=new an,ha=new J,Vf=new J;function NE(s,e,t){let r=new sv;const o=new Nt,l=new Nt,c=new sn,f=new Yy,d=new Qy,h={},g=t.maxTextureSize,x={[es]:li,[li]:es,[Gi]:Gi},m=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:LE,fragmentShader:IE}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const S=new cn;S.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Nn(S,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let M=this.type;this.render=function(I,O,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===S_&&(Mt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=nc);const U=s.getRenderTarget(),q=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Mr),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const W=M!==this.type;W&&O.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(G=>G.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,G=I.length;$<G;$++){const ie=I[$],X=ie.shadow;if(X===void 0){Mt("WebGLShadowMap:",ie,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const F=X.getFrameExtents();o.multiply(F),l.copy(X.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/F.x),o.x=l.x*F.x,X.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/F.y),o.y=l.y*F.y,X.mapSize.y=l.y));const k=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=k,X.map===null||W===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ga){if(ie.isPointLight){Mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new sr(o.x,o.y,{format:ws,type:Ar,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),X.map.texture.name=ie.name+".shadowMap",X.map.depthTexture=new So(o.x,o.y,Xi),X.map.depthTexture.name=ie.name+".shadowMapDepth",X.map.depthTexture.format=Er,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=vn,X.map.depthTexture.magFilter=vn}else ie.isPointLight?(X.map=new pv(o.x),X.map.depthTexture=new Hy(o.x,or)):(X.map=new sr(o.x,o.y),X.map.depthTexture=new So(o.x,o.y,or)),X.map.depthTexture.name=ie.name+".shadowMap",X.map.depthTexture.format=Er,this.type===nc?(X.map.depthTexture.compareFunction=k?rd:id,X.map.depthTexture.minFilter=Tn,X.map.depthTexture.magFilter=Tn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=vn,X.map.depthTexture.magFilter=vn);X.camera.updateProjectionMatrix()}const te=X.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<te;N++){if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,N),s.clear();else{N===0&&(s.setRenderTarget(X.map),s.clear());const j=X.getViewport(N);c.set(l.x*j.x,l.y*j.y,l.x*j.z,l.y*j.w),D.viewport(c)}if(ie.isPointLight){const j=X.camera,Ee=X.matrix,Se=ie.distance||j.far;Se!==j.far&&(j.far=Se,j.updateProjectionMatrix()),ha.setFromMatrixPosition(ie.matrixWorld),j.position.copy(ha),Vf.copy(j.position),Vf.add(DE[N]),j.up.copy(UE[N]),j.lookAt(Vf),j.updateMatrixWorld(),Ee.makeTranslation(-ha.x,-ha.y,-ha.z),tg.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),X._frustum.setFromProjectionMatrix(tg,j.coordinateSystem,j.reversedDepth)}else X.updateMatrices(ie);r=X.getFrustum(),R(O,E,X.camera,ie,this.type)}X.isPointLightShadow!==!0&&this.type===ga&&w(X,E),X.needsUpdate=!1}M=this.type,y.needsUpdate=!1,s.setRenderTarget(U,q,H)};function w(I,O){const E=e.update(T);m.defines.VSM_SAMPLES!==I.blurSamples&&(m.defines.VSM_SAMPLES=I.blurSamples,_.defines.VSM_SAMPLES=I.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new sr(o.x,o.y,{format:ws,type:Ar})),m.uniforms.shadow_pass.value=I.map.depthTexture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(O,null,E,m,T,null),_.uniforms.shadow_pass.value=I.mapPass.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(O,null,E,_,T,null)}function P(I,O,E,U){let q=null;const H=E.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)q=H;else if(q=E.isPointLight===!0?d:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const D=q.uuid,W=O.uuid;let $=h[D];$===void 0&&($={},h[D]=$);let G=$[W];G===void 0&&(G=q.clone(),$[W]=G,O.addEventListener("dispose",z)),q=G}if(q.visible=O.visible,q.wireframe=O.wireframe,U===ga?q.side=O.shadowSide!==null?O.shadowSide:O.side:q.side=O.shadowSide!==null?O.shadowSide:x[O.side],q.alphaMap=O.alphaMap,q.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,q.map=O.map,q.clipShadows=O.clipShadows,q.clippingPlanes=O.clippingPlanes,q.clipIntersection=O.clipIntersection,q.displacementMap=O.displacementMap,q.displacementScale=O.displacementScale,q.displacementBias=O.displacementBias,q.wireframeLinewidth=O.wireframeLinewidth,q.linewidth=O.linewidth,E.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const D=s.properties.get(q);D.light=E}return q}function R(I,O,E,U,q){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&q===ga)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,I.matrixWorld);const W=e.update(I),$=I.material;if(Array.isArray($)){const G=W.groups;for(let ie=0,X=G.length;ie<X;ie++){const F=G[ie],k=$[F.materialIndex];if(k&&k.visible){const te=P(I,k,U,q);I.onBeforeShadow(s,I,O,E,W,te,F),s.renderBufferDirect(E,null,W,te,I,F),I.onAfterShadow(s,I,O,E,W,te,F)}}}else if($.visible){const G=P(I,$,U,q);I.onBeforeShadow(s,I,O,E,W,G,null),s.renderBufferDirect(E,null,W,G,I,null),I.onAfterShadow(s,I,O,E,W,G,null)}}const D=I.children;for(let W=0,$=D.length;W<$;W++)R(D[W],O,E,U,q)}function z(I){I.target.removeEventListener("dispose",z);for(const E in h){const U=h[E],q=I.target.uuid;q in U&&(U[q].dispose(),delete U[q])}}}function FE(s,e){function t(){let Y=!1;const ke=new sn;let _e=null;const Xe=new sn(0,0,0,0);return{setMask:function(we){_e!==we&&!Y&&(s.colorMask(we,we,we,we),_e=we)},setLocked:function(we){Y=we},setClear:function(we,xe,We,ct,Lt){Lt===!0&&(we*=ct,xe*=ct,We*=ct),ke.set(we,xe,We,ct),Xe.equals(ke)===!1&&(s.clearColor(we,xe,We,ct),Xe.copy(ke))},reset:function(){Y=!1,_e=null,Xe.set(-1,0,0,0)}}}function r(){let Y=!1,ke=!1,_e=null,Xe=null,we=null;return{setReversed:function(xe){if(ke!==xe){const We=e.get("EXT_clip_control");xe?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),ke=xe;const ct=we;we=null,this.setClear(ct)}},getReversed:function(){return ke},setTest:function(xe){xe?oe(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(xe){_e!==xe&&!Y&&(s.depthMask(xe),_e=xe)},setFunc:function(xe){if(ke&&(xe=ty[xe]),Xe!==xe){switch(xe){case ih:s.depthFunc(s.NEVER);break;case rh:s.depthFunc(s.ALWAYS);break;case sh:s.depthFunc(s.LESS);break;case yo:s.depthFunc(s.LEQUAL);break;case oh:s.depthFunc(s.EQUAL);break;case ah:s.depthFunc(s.GEQUAL);break;case lh:s.depthFunc(s.GREATER);break;case ch:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Xe=xe}},setLocked:function(xe){Y=xe},setClear:function(xe){we!==xe&&(we=xe,ke&&(xe=1-xe),s.clearDepth(xe))},reset:function(){Y=!1,_e=null,Xe=null,we=null,ke=!1}}}function o(){let Y=!1,ke=null,_e=null,Xe=null,we=null,xe=null,We=null,ct=null,Lt=null;return{setTest:function(Ct){Y||(Ct?oe(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(Ct){ke!==Ct&&!Y&&(s.stencilMask(Ct),ke=Ct)},setFunc:function(Ct,Ft,yt){(_e!==Ct||Xe!==Ft||we!==yt)&&(s.stencilFunc(Ct,Ft,yt),_e=Ct,Xe=Ft,we=yt)},setOp:function(Ct,Ft,yt){(xe!==Ct||We!==Ft||ct!==yt)&&(s.stencilOp(Ct,Ft,yt),xe=Ct,We=Ft,ct=yt)},setLocked:function(Ct){Y=Ct},setClear:function(Ct){Lt!==Ct&&(s.clearStencil(Ct),Lt=Ct)},reset:function(){Y=!1,ke=null,_e=null,Xe=null,we=null,xe=null,We=null,ct=null,Lt=null}}}const l=new t,c=new r,f=new o,d=new WeakMap,h=new WeakMap;let g={},x={},m={},_=new WeakMap,S=[],T=null,y=!1,M=null,w=null,P=null,R=null,z=null,I=null,O=null,E=new Xt(0,0,0),U=0,q=!1,H=null,D=null,W=null,$=null,G=null;const ie=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,F=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=F>=1):k.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=F>=2);let te=null,N={};const j=s.getParameter(s.SCISSOR_BOX),Ee=s.getParameter(s.VIEWPORT),Se=new sn().fromArray(j),de=new sn().fromArray(Ee);function K(Y,ke,_e,Xe){const we=new Uint8Array(4),xe=s.createTexture();s.bindTexture(Y,xe),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<_e;We++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(ke,0,s.RGBA,1,1,Xe,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(ke+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return xe}const ce={};ce[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),oe(s.DEPTH_TEST),c.setFunc(yo),Ze(!1),dt(qm),oe(s.CULL_FACE),Qe(Mr);function oe(Y){g[Y]!==!0&&(s.enable(Y),g[Y]=!0)}function Ae(Y){g[Y]!==!1&&(s.disable(Y),g[Y]=!1)}function be(Y,ke){return m[Y]!==ke?(s.bindFramebuffer(Y,ke),m[Y]=ke,Y===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ke),Y===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ke),!0):!1}function ve(Y,ke){let _e=S,Xe=!1;if(Y){_e=_.get(ke),_e===void 0&&(_e=[],_.set(ke,_e));const we=Y.textures;if(_e.length!==we.length||_e[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,We=we.length;xe<We;xe++)_e[xe]=s.COLOR_ATTACHMENT0+xe;_e.length=we.length,Xe=!0}}else _e[0]!==s.BACK&&(_e[0]=s.BACK,Xe=!0);Xe&&s.drawBuffers(_e)}function Ye(Y){return T!==Y?(s.useProgram(Y),T=Y,!0):!1}const Oe={[ys]:s.FUNC_ADD,[E_]:s.FUNC_SUBTRACT,[w_]:s.FUNC_REVERSE_SUBTRACT};Oe[T_]=s.MIN,Oe[b_]=s.MAX;const Je={[C_]:s.ZERO,[R_]:s.ONE,[P_]:s.SRC_COLOR,[th]:s.SRC_ALPHA,[F_]:s.SRC_ALPHA_SATURATE,[U_]:s.DST_COLOR,[I_]:s.DST_ALPHA,[L_]:s.ONE_MINUS_SRC_COLOR,[nh]:s.ONE_MINUS_SRC_ALPHA,[N_]:s.ONE_MINUS_DST_COLOR,[D_]:s.ONE_MINUS_DST_ALPHA,[k_]:s.CONSTANT_COLOR,[O_]:s.ONE_MINUS_CONSTANT_COLOR,[B_]:s.CONSTANT_ALPHA,[z_]:s.ONE_MINUS_CONSTANT_ALPHA};function Qe(Y,ke,_e,Xe,we,xe,We,ct,Lt,Ct){if(Y===Mr){y===!0&&(Ae(s.BLEND),y=!1);return}if(y===!1&&(oe(s.BLEND),y=!0),Y!==A_){if(Y!==M||Ct!==q){if((w!==ys||z!==ys)&&(s.blendEquation(s.FUNC_ADD),w=ys,z=ys),Ct)switch(Y){case xo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ym:s.blendFunc(s.ONE,s.ONE);break;case Qm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Wt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case xo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ym:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Qm:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jm:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",Y);break}P=null,R=null,I=null,O=null,E.set(0,0,0),U=0,M=Y,q=Ct}return}we=we||ke,xe=xe||_e,We=We||Xe,(ke!==w||we!==z)&&(s.blendEquationSeparate(Oe[ke],Oe[we]),w=ke,z=we),(_e!==P||Xe!==R||xe!==I||We!==O)&&(s.blendFuncSeparate(Je[_e],Je[Xe],Je[xe],Je[We]),P=_e,R=Xe,I=xe,O=We),(ct.equals(E)===!1||Lt!==U)&&(s.blendColor(ct.r,ct.g,ct.b,Lt),E.copy(ct),U=Lt),M=Y,q=!1}function st(Y,ke){Y.side===Gi?Ae(s.CULL_FACE):oe(s.CULL_FACE);let _e=Y.side===li;ke&&(_e=!_e),Ze(_e),Y.blending===xo&&Y.transparent===!1?Qe(Mr):Qe(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const Xe=Y.stencilWrite;f.setTest(Xe),Xe&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Q(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(Y){H!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),H=Y)}function dt(Y){Y!==y_?(oe(s.CULL_FACE),Y!==D&&(Y===qm?s.cullFace(s.BACK):Y===M_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),D=Y}function St(Y){Y!==W&&(X&&s.lineWidth(Y),W=Y)}function Q(Y,ke,_e){Y?(oe(s.POLYGON_OFFSET_FILL),($!==ke||G!==_e)&&($=ke,G=_e,c.getReversed()&&(ke=-ke),s.polygonOffset(ke,_e))):Ae(s.POLYGON_OFFSET_FILL)}function ft(Y){Y?oe(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function pe(Y){Y===void 0&&(Y=s.TEXTURE0+ie-1),te!==Y&&(s.activeTexture(Y),te=Y)}function Ce(Y,ke,_e){_e===void 0&&(te===null?_e=s.TEXTURE0+ie-1:_e=te);let Xe=N[_e];Xe===void 0&&(Xe={type:void 0,texture:void 0},N[_e]=Xe),(Xe.type!==Y||Xe.texture!==ke)&&(te!==_e&&(s.activeTexture(_e),te=_e),s.bindTexture(Y,ke||ce[Y]),Xe.type=Y,Xe.texture=ke)}function le(){const Y=N[te];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function nt(){try{s.compressedTexImage2D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function A(){try{s.texSubImage2D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function se(){try{s.texSubImage3D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function ye(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function Te(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function Ne(){try{s.texStorage2D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function He(){try{s.texStorage3D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function ge(){try{s.texImage2D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function Me(){try{s.texImage3D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function Ve(Y){return x[Y]!==void 0?x[Y]:s.getParameter(Y)}function Ge(Y,ke){x[Y]!==ke&&(s.pixelStorei(Y,ke),x[Y]=ke)}function Ie(Y){Se.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),Se.copy(Y))}function Le(Y){de.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),de.copy(Y))}function ht(Y,ke){let _e=h.get(ke);_e===void 0&&(_e=new WeakMap,h.set(ke,_e));let Xe=_e.get(Y);Xe===void 0&&(Xe=s.getUniformBlockIndex(ke,Y.name),_e.set(Y,Xe))}function gt(Y,ke){const Xe=h.get(ke).get(Y);d.get(ke)!==Xe&&(s.uniformBlockBinding(ke,Xe,Y.__bindingPointIndex),d.set(ke,Xe))}function Et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},x={},te=null,N={},m={},_=new WeakMap,S=[],T=null,y=!1,M=null,w=null,P=null,R=null,z=null,I=null,O=null,E=new Xt(0,0,0),U=0,q=!1,H=null,D=null,W=null,$=null,G=null,Se.set(0,0,s.canvas.width,s.canvas.height),de.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:oe,disable:Ae,bindFramebuffer:be,drawBuffers:ve,useProgram:Ye,setBlending:Qe,setMaterial:st,setFlipSided:Ze,setCullFace:dt,setLineWidth:St,setPolygonOffset:Q,setScissorTest:ft,activeTexture:pe,bindTexture:Ce,unbindTexture:le,compressedTexImage2D:nt,compressedTexImage3D:L,texImage2D:ge,texImage3D:Me,pixelStorei:Ge,getParameter:Ve,updateUBOMapping:ht,uniformBlockBinding:gt,texStorage2D:Ne,texStorage3D:He,texSubImage2D:A,texSubImage3D:se,compressedTexSubImage2D:ye,compressedTexSubImage3D:Te,scissor:Ie,viewport:Le,reset:Et}}function kE(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Nt,g=new WeakMap,x=new Set;let m;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,A){return S?new OffscreenCanvas(L,A):gc("canvas")}function y(L,A,se){let ye=1;const Te=nt(L);if((Te.width>se||Te.height>se)&&(ye=se/Math.max(Te.width,Te.height)),ye<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ne=Math.floor(ye*Te.width),He=Math.floor(ye*Te.height);m===void 0&&(m=T(Ne,He));const ge=A?T(Ne,He):m;return ge.width=Ne,ge.height=He,ge.getContext("2d").drawImage(L,0,0,Ne,He),Mt("WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+Ne+"x"+He+")."),ge}else return"data"in L&&Mt("WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),L;return L}function M(L){return L.generateMipmaps}function w(L){s.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(L,A,se,ye,Te,Ne=!1){if(L!==null){if(s[L]!==void 0)return s[L];Mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let He;ye&&(He=e.get("EXT_texture_norm16"),He||Mt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=A;if(A===s.RED&&(se===s.FLOAT&&(ge=s.R32F),se===s.HALF_FLOAT&&(ge=s.R16F),se===s.UNSIGNED_BYTE&&(ge=s.R8),se===s.UNSIGNED_SHORT&&He&&(ge=He.R16_EXT),se===s.SHORT&&He&&(ge=He.R16_SNORM_EXT)),A===s.RED_INTEGER&&(se===s.UNSIGNED_BYTE&&(ge=s.R8UI),se===s.UNSIGNED_SHORT&&(ge=s.R16UI),se===s.UNSIGNED_INT&&(ge=s.R32UI),se===s.BYTE&&(ge=s.R8I),se===s.SHORT&&(ge=s.R16I),se===s.INT&&(ge=s.R32I)),A===s.RG&&(se===s.FLOAT&&(ge=s.RG32F),se===s.HALF_FLOAT&&(ge=s.RG16F),se===s.UNSIGNED_BYTE&&(ge=s.RG8),se===s.UNSIGNED_SHORT&&He&&(ge=He.RG16_EXT),se===s.SHORT&&He&&(ge=He.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(se===s.UNSIGNED_BYTE&&(ge=s.RG8UI),se===s.UNSIGNED_SHORT&&(ge=s.RG16UI),se===s.UNSIGNED_INT&&(ge=s.RG32UI),se===s.BYTE&&(ge=s.RG8I),se===s.SHORT&&(ge=s.RG16I),se===s.INT&&(ge=s.RG32I)),A===s.RGB_INTEGER&&(se===s.UNSIGNED_BYTE&&(ge=s.RGB8UI),se===s.UNSIGNED_SHORT&&(ge=s.RGB16UI),se===s.UNSIGNED_INT&&(ge=s.RGB32UI),se===s.BYTE&&(ge=s.RGB8I),se===s.SHORT&&(ge=s.RGB16I),se===s.INT&&(ge=s.RGB32I)),A===s.RGBA_INTEGER&&(se===s.UNSIGNED_BYTE&&(ge=s.RGBA8UI),se===s.UNSIGNED_SHORT&&(ge=s.RGBA16UI),se===s.UNSIGNED_INT&&(ge=s.RGBA32UI),se===s.BYTE&&(ge=s.RGBA8I),se===s.SHORT&&(ge=s.RGBA16I),se===s.INT&&(ge=s.RGBA32I)),A===s.RGB&&(se===s.UNSIGNED_SHORT&&He&&(ge=He.RGB16_EXT),se===s.SHORT&&He&&(ge=He.RGB16_SNORM_EXT),se===s.UNSIGNED_INT_5_9_9_9_REV&&(ge=s.RGB9_E5),se===s.UNSIGNED_INT_10F_11F_11F_REV&&(ge=s.R11F_G11F_B10F)),A===s.RGBA){const Me=Ne?pc:kt.getTransfer(Te);se===s.FLOAT&&(ge=s.RGBA32F),se===s.HALF_FLOAT&&(ge=s.RGBA16F),se===s.UNSIGNED_BYTE&&(ge=Me===qt?s.SRGB8_ALPHA8:s.RGBA8),se===s.UNSIGNED_SHORT&&He&&(ge=He.RGBA16_EXT),se===s.SHORT&&He&&(ge=He.RGBA16_SNORM_EXT),se===s.UNSIGNED_SHORT_4_4_4_4&&(ge=s.RGBA4),se===s.UNSIGNED_SHORT_5_5_5_1&&(ge=s.RGB5_A1)}return(ge===s.R16F||ge===s.R32F||ge===s.RG16F||ge===s.RG32F||ge===s.RGBA16F||ge===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function z(L,A){let se;return L?A===null||A===or||A===Sa?se=s.DEPTH24_STENCIL8:A===Xi?se=s.DEPTH32F_STENCIL8:A===Ma&&(se=s.DEPTH24_STENCIL8,Mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===or||A===Sa?se=s.DEPTH_COMPONENT24:A===Xi?se=s.DEPTH_COMPONENT32F:A===Ma&&(se=s.DEPTH_COMPONENT16),se}function I(L,A){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==vn&&L.minFilter!==Tn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function O(L){const A=L.target;A.removeEventListener("dispose",O),U(A),A.isVideoTexture&&g.delete(A),A.isHTMLTexture&&x.delete(A)}function E(L){const A=L.target;A.removeEventListener("dispose",E),H(A)}function U(L){const A=r.get(L);if(A.__webglInit===void 0)return;const se=L.source,ye=_.get(se);if(ye){const Te=ye[A.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&q(L),Object.keys(ye).length===0&&_.delete(se)}r.remove(L)}function q(L){const A=r.get(L);s.deleteTexture(A.__webglTexture);const se=L.source,ye=_.get(se);delete ye[A.__cacheKey],c.memory.textures--}function H(L){const A=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(A.__webglFramebuffer[ye]))for(let Te=0;Te<A.__webglFramebuffer[ye].length;Te++)s.deleteFramebuffer(A.__webglFramebuffer[ye][Te]);else s.deleteFramebuffer(A.__webglFramebuffer[ye]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ye])}else{if(Array.isArray(A.__webglFramebuffer))for(let ye=0;ye<A.__webglFramebuffer.length;ye++)s.deleteFramebuffer(A.__webglFramebuffer[ye]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ye=0;ye<A.__webglColorRenderbuffer.length;ye++)A.__webglColorRenderbuffer[ye]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ye]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const se=L.textures;for(let ye=0,Te=se.length;ye<Te;ye++){const Ne=r.get(se[ye]);Ne.__webglTexture&&(s.deleteTexture(Ne.__webglTexture),c.memory.textures--),r.remove(se[ye])}r.remove(L)}let D=0;function W(){D=0}function $(){return D}function G(L){D=L}function ie(){const L=D;return L>=o.maxTextures&&Mt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),D+=1,L}function X(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function F(L,A){const se=r.get(L);if(L.isVideoTexture&&Ce(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&se.__version!==L.version){const ye=L.image;if(ye===null)Mt("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)Mt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(se,L,A);return}}else L.isExternalTexture&&(se.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,se.__webglTexture,s.TEXTURE0+A)}function k(L,A){const se=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&se.__version!==L.version){Ae(se,L,A);return}else L.isExternalTexture&&(se.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,se.__webglTexture,s.TEXTURE0+A)}function te(L,A){const se=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&se.__version!==L.version){Ae(se,L,A);return}t.bindTexture(s.TEXTURE_3D,se.__webglTexture,s.TEXTURE0+A)}function N(L,A){const se=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&se.__version!==L.version){be(se,L,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture,s.TEXTURE0+A)}const j={[uc]:s.REPEAT,[yr]:s.CLAMP_TO_EDGE,[uh]:s.MIRRORED_REPEAT},Ee={[vn]:s.NEAREST,[G_]:s.NEAREST_MIPMAP_NEAREST,[bl]:s.NEAREST_MIPMAP_LINEAR,[Tn]:s.LINEAR,[cf]:s.LINEAR_MIPMAP_NEAREST,[Ss]:s.LINEAR_MIPMAP_LINEAR},Se={[j_]:s.NEVER,[J_]:s.ALWAYS,[K_]:s.LESS,[id]:s.LEQUAL,[q_]:s.EQUAL,[rd]:s.GEQUAL,[Y_]:s.GREATER,[Q_]:s.NOTEQUAL};function de(L,A){if(A.type===Xi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Tn||A.magFilter===cf||A.magFilter===bl||A.magFilter===Ss||A.minFilter===Tn||A.minFilter===cf||A.minFilter===bl||A.minFilter===Ss)&&Mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,j[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,j[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,j[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Ee[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Ee[A.minFilter]),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Se[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===vn||A.minFilter!==bl&&A.minFilter!==Ss||A.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function K(L,A){let se=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",O));const ye=A.source;let Te=_.get(ye);Te===void 0&&(Te={},_.set(ye,Te));const Ne=X(A);if(Ne!==L.__cacheKey){Te[Ne]===void 0&&(Te[Ne]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,se=!0),Te[Ne].usedTimes++;const He=Te[L.__cacheKey];He!==void 0&&(Te[L.__cacheKey].usedTimes--,He.usedTimes===0&&q(A)),L.__cacheKey=Ne,L.__webglTexture=Te[Ne].texture}return se}function ce(L,A,se){return Math.floor(Math.floor(L/se)/A)}function oe(L,A,se,ye){const Ne=L.updateRanges;if(Ne.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,se,ye,A.data);else{Ne.sort((Ge,Ie)=>Ge.start-Ie.start);let He=0;for(let Ge=1;Ge<Ne.length;Ge++){const Ie=Ne[He],Le=Ne[Ge],ht=Ie.start+Ie.count,gt=ce(Le.start,A.width,4),Et=ce(Ie.start,A.width,4);Le.start<=ht+1&&gt===Et&&ce(Le.start+Le.count-1,A.width,4)===gt?Ie.count=Math.max(Ie.count,Le.start+Le.count-Ie.start):(++He,Ne[He]=Le)}Ne.length=He+1;const ge=t.getParameter(s.UNPACK_ROW_LENGTH),Me=t.getParameter(s.UNPACK_SKIP_PIXELS),Ve=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let Ge=0,Ie=Ne.length;Ge<Ie;Ge++){const Le=Ne[Ge],ht=Math.floor(Le.start/4),gt=Math.ceil(Le.count/4),Et=ht%A.width,Y=Math.floor(ht/A.width),ke=gt,_e=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Et),t.pixelStorei(s.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(s.TEXTURE_2D,0,Et,Y,ke,_e,se,ye,A.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ge),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ve)}}function Ae(L,A,se){let ye=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ye=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ye=s.TEXTURE_3D);const Te=K(L,A),Ne=A.source;t.bindTexture(ye,L.__webglTexture,s.TEXTURE0+se);const He=r.get(Ne);if(Ne.version!==He.__version||Te===!0){if(t.activeTexture(s.TEXTURE0+se),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const _e=kt.getPrimaries(kt.workingColorSpace),Xe=A.colorSpace===Zr?null:kt.getPrimaries(A.colorSpace),we=A.colorSpace===Zr||_e===Xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let Me=y(A.image,!1,o.maxTextureSize);Me=le(A,Me);const Ve=l.convert(A.format,A.colorSpace),Ge=l.convert(A.type);let Ie=R(A.internalFormat,Ve,Ge,A.normalized,A.colorSpace,A.isVideoTexture);de(ye,A);let Le;const ht=A.mipmaps,gt=A.isVideoTexture!==!0,Et=He.__version===void 0||Te===!0,Y=Ne.dataReady,ke=I(A,Me);if(A.isDepthTexture)Ie=z(A.format===As,A.type),Et&&(gt?t.texStorage2D(s.TEXTURE_2D,1,Ie,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,Ie,Me.width,Me.height,0,Ve,Ge,null));else if(A.isDataTexture)if(ht.length>0){gt&&Et&&t.texStorage2D(s.TEXTURE_2D,ke,Ie,ht[0].width,ht[0].height);for(let _e=0,Xe=ht.length;_e<Xe;_e++)Le=ht[_e],gt?Y&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Le.width,Le.height,Ve,Ge,Le.data):t.texImage2D(s.TEXTURE_2D,_e,Ie,Le.width,Le.height,0,Ve,Ge,Le.data);A.generateMipmaps=!1}else gt?(Et&&t.texStorage2D(s.TEXTURE_2D,ke,Ie,Me.width,Me.height),Y&&oe(A,Me,Ve,Ge)):t.texImage2D(s.TEXTURE_2D,0,Ie,Me.width,Me.height,0,Ve,Ge,Me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){gt&&Et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ke,Ie,ht[0].width,ht[0].height,Me.depth);for(let _e=0,Xe=ht.length;_e<Xe;_e++)if(Le=ht[_e],A.format!==bi)if(Ve!==null)if(gt){if(Y)if(A.layerUpdates.size>0){const we=I0(Le.width,Le.height,A.format,A.type);for(const xe of A.layerUpdates){const We=Le.data.subarray(xe*we/Le.data.BYTES_PER_ELEMENT,(xe+1)*we/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,xe,Le.width,Le.height,1,Ve,We)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Le.width,Le.height,Me.depth,Ve,Le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,Ie,Le.width,Le.height,Me.depth,0,Le.data,0,0);else Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?Y&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Le.width,Le.height,Me.depth,Ve,Ge,Le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,_e,Ie,Le.width,Le.height,Me.depth,0,Ve,Ge,Le.data)}else{gt&&Et&&t.texStorage2D(s.TEXTURE_2D,ke,Ie,ht[0].width,ht[0].height);for(let _e=0,Xe=ht.length;_e<Xe;_e++)Le=ht[_e],A.format!==bi?Ve!==null?gt?Y&&t.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,Le.width,Le.height,Ve,Le.data):t.compressedTexImage2D(s.TEXTURE_2D,_e,Ie,Le.width,Le.height,0,Le.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?Y&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Le.width,Le.height,Ve,Ge,Le.data):t.texImage2D(s.TEXTURE_2D,_e,Ie,Le.width,Le.height,0,Ve,Ge,Le.data)}else if(A.isDataArrayTexture)if(gt){if(Et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ke,Ie,Me.width,Me.height,Me.depth),Y)if(A.layerUpdates.size>0){const _e=I0(Me.width,Me.height,A.format,A.type);for(const Xe of A.layerUpdates){const we=Me.data.subarray(Xe*_e/Me.data.BYTES_PER_ELEMENT,(Xe+1)*_e/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Xe,Me.width,Me.height,1,Ve,Ge,we)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ve,Ge,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,Me.width,Me.height,Me.depth,0,Ve,Ge,Me.data);else if(A.isData3DTexture)gt?(Et&&t.texStorage3D(s.TEXTURE_3D,ke,Ie,Me.width,Me.height,Me.depth),Y&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ve,Ge,Me.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,Me.width,Me.height,Me.depth,0,Ve,Ge,Me.data);else if(A.isFramebufferTexture){if(Et)if(gt)t.texStorage2D(s.TEXTURE_2D,ke,Ie,Me.width,Me.height);else{let _e=Me.width,Xe=Me.height;for(let we=0;we<ke;we++)t.texImage2D(s.TEXTURE_2D,we,Ie,_e,Xe,0,Ve,Ge,null),_e>>=1,Xe>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){const _e=s.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),Me.parentNode!==_e){_e.appendChild(Me),x.add(A),_e.onpaint=ct=>{const Lt=ct.changedElements;for(const Ct of x)Lt.includes(Ct.image)&&(Ct.needsUpdate=!0)},_e.requestPaint();return}const Xe=0,we=s.RGBA,xe=s.RGBA,We=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Xe,we,xe,We,Me),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ht.length>0){if(gt&&Et){const _e=nt(ht[0]);t.texStorage2D(s.TEXTURE_2D,ke,Ie,_e.width,_e.height)}for(let _e=0,Xe=ht.length;_e<Xe;_e++)Le=ht[_e],gt?Y&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Ve,Ge,Le):t.texImage2D(s.TEXTURE_2D,_e,Ie,Ve,Ge,Le);A.generateMipmaps=!1}else if(gt){if(Et){const _e=nt(Me);t.texStorage2D(s.TEXTURE_2D,ke,Ie,_e.width,_e.height)}Y&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ve,Ge,Me)}else t.texImage2D(s.TEXTURE_2D,0,Ie,Ve,Ge,Me);M(A)&&w(ye),He.__version=Ne.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function be(L,A,se){if(A.image.length!==6)return;const ye=K(L,A),Te=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+se);const Ne=r.get(Te);if(Te.version!==Ne.__version||ye===!0){t.activeTexture(s.TEXTURE0+se);const He=kt.getPrimaries(kt.workingColorSpace),ge=A.colorSpace===Zr?null:kt.getPrimaries(A.colorSpace),Me=A.colorSpace===Zr||He===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ve=A.isCompressedTexture||A.image[0].isCompressedTexture,Ge=A.image[0]&&A.image[0].isDataTexture,Ie=[];for(let xe=0;xe<6;xe++)!Ve&&!Ge?Ie[xe]=y(A.image[xe],!0,o.maxCubemapSize):Ie[xe]=Ge?A.image[xe].image:A.image[xe],Ie[xe]=le(A,Ie[xe]);const Le=Ie[0],ht=l.convert(A.format,A.colorSpace),gt=l.convert(A.type),Et=R(A.internalFormat,ht,gt,A.normalized,A.colorSpace),Y=A.isVideoTexture!==!0,ke=Ne.__version===void 0||ye===!0,_e=Te.dataReady;let Xe=I(A,Le);de(s.TEXTURE_CUBE_MAP,A);let we;if(Ve){Y&&ke&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Xe,Et,Le.width,Le.height);for(let xe=0;xe<6;xe++){we=Ie[xe].mipmaps;for(let We=0;We<we.length;We++){const ct=we[We];A.format!==bi?ht!==null?Y?_e&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We,0,0,ct.width,ct.height,ht,ct.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We,Et,ct.width,ct.height,0,ct.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We,0,0,ct.width,ct.height,ht,gt,ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We,Et,ct.width,ct.height,0,ht,gt,ct.data)}}}else{if(we=A.mipmaps,Y&&ke){we.length>0&&Xe++;const xe=nt(Ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Xe,Et,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ge){Y?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ie[xe].width,Ie[xe].height,ht,gt,Ie[xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Et,Ie[xe].width,Ie[xe].height,0,ht,gt,Ie[xe].data);for(let We=0;We<we.length;We++){const Lt=we[We].image[xe].image;Y?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We+1,0,0,Lt.width,Lt.height,ht,gt,Lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We+1,Et,Lt.width,Lt.height,0,ht,gt,Lt.data)}}else{Y?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ht,gt,Ie[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Et,ht,gt,Ie[xe]);for(let We=0;We<we.length;We++){const ct=we[We];Y?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We+1,0,0,ht,gt,ct.image[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We+1,Et,ht,gt,ct.image[xe])}}}M(A)&&w(s.TEXTURE_CUBE_MAP),Ne.__version=Te.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ve(L,A,se,ye,Te,Ne){const He=l.convert(se.format,se.colorSpace),ge=l.convert(se.type),Me=R(se.internalFormat,He,ge,se.normalized,se.colorSpace),Ve=r.get(A),Ge=r.get(se);if(Ge.__renderTarget=A,!Ve.__hasExternalTextures){const Ie=Math.max(1,A.width>>Ne),Le=Math.max(1,A.height>>Ne);Te===s.TEXTURE_3D||Te===s.TEXTURE_2D_ARRAY?t.texImage3D(Te,Ne,Me,Ie,Le,A.depth,0,He,ge,null):t.texImage2D(Te,Ne,Me,Ie,Le,0,He,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),pe(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,Te,Ge.__webglTexture,0,ft(A)):(Te===s.TEXTURE_2D||Te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ye,Te,Ge.__webglTexture,Ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(L,A,se){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer){const ye=A.depthTexture,Te=ye&&ye.isDepthTexture?ye.type:null,Ne=z(A.stencilBuffer,Te),He=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;pe(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(A),Ne,A.width,A.height):se?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(A),Ne,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,He,s.RENDERBUFFER,L)}else{const ye=A.textures;for(let Te=0;Te<ye.length;Te++){const Ne=ye[Te],He=l.convert(Ne.format,Ne.colorSpace),ge=l.convert(Ne.type),Me=R(Ne.internalFormat,He,ge,Ne.normalized,Ne.colorSpace);pe(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(A),Me,A.width,A.height):se?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(A),Me,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Me,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Oe(L,A,se){const ye=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Te=r.get(A.depthTexture);if(Te.__renderTarget=A,(!Te.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ye){if(Te.__webglInit===void 0&&(Te.__webglInit=!0,A.depthTexture.addEventListener("dispose",O)),Te.__webglTexture===void 0){Te.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Te.__webglTexture),de(s.TEXTURE_CUBE_MAP,A.depthTexture);const Ve=l.convert(A.depthTexture.format),Ge=l.convert(A.depthTexture.type);let Ie;A.depthTexture.format===Er?Ie=s.DEPTH_COMPONENT24:A.depthTexture.format===As&&(Ie=s.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ie,A.width,A.height,0,Ve,Ge,null)}}else F(A.depthTexture,0);const Ne=Te.__webglTexture,He=ft(A),ge=ye?s.TEXTURE_CUBE_MAP_POSITIVE_X+se:s.TEXTURE_2D,Me=A.depthTexture.format===As?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===Er)pe(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,ge,Ne,0,He):s.framebufferTexture2D(s.FRAMEBUFFER,Me,ge,Ne,0);else if(A.depthTexture.format===As)pe(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,ge,Ne,0,He):s.framebufferTexture2D(s.FRAMEBUFFER,Me,ge,Ne,0);else throw new Error("Unknown depthTexture format")}function Je(L){const A=r.get(L),se=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const ye=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ye){const Te=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ye.removeEventListener("dispose",Te)};ye.addEventListener("dispose",Te),A.__depthDisposeCallback=Te}A.__boundDepthTexture=ye}if(L.depthTexture&&!A.__autoAllocateDepthBuffer)if(se)for(let ye=0;ye<6;ye++)Oe(A.__webglFramebuffer[ye],L,ye);else{const ye=L.texture.mipmaps;ye&&ye.length>0?Oe(A.__webglFramebuffer[0],L,0):Oe(A.__webglFramebuffer,L,0)}else if(se){A.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ye]),A.__webglDepthbuffer[ye]===void 0)A.__webglDepthbuffer[ye]=s.createRenderbuffer(),Ye(A.__webglDepthbuffer[ye],L,!1);else{const Te=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=A.__webglDepthbuffer[ye];s.bindRenderbuffer(s.RENDERBUFFER,Ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,Ne)}}else{const ye=L.texture.mipmaps;if(ye&&ye.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Ye(A.__webglDepthbuffer,L,!1);else{const Te=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,Ne)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(L,A,se){const ye=r.get(L);A!==void 0&&ve(ye.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),se!==void 0&&Je(L)}function st(L){const A=L.texture,se=r.get(L),ye=r.get(A);L.addEventListener("dispose",E);const Te=L.textures,Ne=L.isWebGLCubeRenderTarget===!0,He=Te.length>1;if(He||(ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture()),ye.__version=A.version,c.memory.textures++),Ne){se.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(A.mipmaps&&A.mipmaps.length>0){se.__webglFramebuffer[ge]=[];for(let Me=0;Me<A.mipmaps.length;Me++)se.__webglFramebuffer[ge][Me]=s.createFramebuffer()}else se.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){se.__webglFramebuffer=[];for(let ge=0;ge<A.mipmaps.length;ge++)se.__webglFramebuffer[ge]=s.createFramebuffer()}else se.__webglFramebuffer=s.createFramebuffer();if(He)for(let ge=0,Me=Te.length;ge<Me;ge++){const Ve=r.get(Te[ge]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=s.createTexture(),c.memory.textures++)}if(L.samples>0&&pe(L)===!1){se.__webglMultisampledFramebuffer=s.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let ge=0;ge<Te.length;ge++){const Me=Te[ge];se.__webglColorRenderbuffer[ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,se.__webglColorRenderbuffer[ge]);const Ve=l.convert(Me.format,Me.colorSpace),Ge=l.convert(Me.type),Ie=R(Me.internalFormat,Ve,Ge,Me.normalized,Me.colorSpace,L.isXRRenderTarget===!0),Le=ft(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,Ie,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,se.__webglColorRenderbuffer[ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(se.__webglDepthRenderbuffer=s.createRenderbuffer(),Ye(se.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ne){t.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),de(s.TEXTURE_CUBE_MAP,A);for(let ge=0;ge<6;ge++)if(A.mipmaps&&A.mipmaps.length>0)for(let Me=0;Me<A.mipmaps.length;Me++)ve(se.__webglFramebuffer[ge][Me],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Me);else ve(se.__webglFramebuffer[ge],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);M(A)&&w(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let ge=0,Me=Te.length;ge<Me;ge++){const Ve=Te[ge],Ge=r.get(Ve);let Ie=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ie=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Ge.__webglTexture),de(Ie,Ve),ve(se.__webglFramebuffer,L,Ve,s.COLOR_ATTACHMENT0+ge,Ie,0),M(Ve)&&w(Ie)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ge=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,ye.__webglTexture),de(ge,A),A.mipmaps&&A.mipmaps.length>0)for(let Me=0;Me<A.mipmaps.length;Me++)ve(se.__webglFramebuffer[Me],L,A,s.COLOR_ATTACHMENT0,ge,Me);else ve(se.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,ge,0);M(A)&&w(ge),t.unbindTexture()}L.depthBuffer&&Je(L)}function Ze(L){const A=L.textures;for(let se=0,ye=A.length;se<ye;se++){const Te=A[se];if(M(Te)){const Ne=P(L),He=r.get(Te).__webglTexture;t.bindTexture(Ne,He),w(Ne),t.unbindTexture()}}}const dt=[],St=[];function Q(L){if(L.samples>0){if(pe(L)===!1){const A=L.textures,se=L.width,ye=L.height;let Te=s.COLOR_BUFFER_BIT;const Ne=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=r.get(L),ge=A.length>1;if(ge)for(let Ve=0;Ve<A.length;Ve++)t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);const Me=L.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ve=0;Ve<A.length;Ve++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Te|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Te|=s.STENCIL_BUFFER_BIT)),ge){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ve]);const Ge=r.get(A[Ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ge,0)}s.blitFramebuffer(0,0,se,ye,0,0,se,ye,Te,s.NEAREST),d===!0&&(dt.length=0,St.length=0,dt.push(s.COLOR_ATTACHMENT0+Ve),L.depthBuffer&&L.resolveDepthBuffer===!1&&(dt.push(Ne),St.push(Ne),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,St)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let Ve=0;Ve<A.length;Ve++){t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.RENDERBUFFER,He.__webglColorRenderbuffer[Ve]);const Ge=r.get(A[Ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.TEXTURE_2D,Ge,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const A=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function ft(L){return Math.min(o.maxSamples,L.samples)}function pe(L){const A=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ce(L){const A=c.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function le(L,A){const se=L.colorSpace,ye=L.format,Te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||se!==dc&&se!==Zr&&(kt.getTransfer(se)===qt?(ye!==bi||Te!==Ti)&&Mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",se)),A}function nt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=ie,this.resetTextureUnits=W,this.getTextureUnits=$,this.setTextureUnits=G,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=te,this.setTextureCube=N,this.rebindTextures=Qe,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function OE(s,e){function t(r,o=Zr){let l;const c=kt.getTransfer(o);if(r===Ti)return s.UNSIGNED_BYTE;if(r===Zh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===$h)return s.UNSIGNED_SHORT_5_5_5_1;if(r===jg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Kg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Wg)return s.BYTE;if(r===Xg)return s.SHORT;if(r===Ma)return s.UNSIGNED_SHORT;if(r===Jh)return s.INT;if(r===or)return s.UNSIGNED_INT;if(r===Xi)return s.FLOAT;if(r===Ar)return s.HALF_FLOAT;if(r===qg)return s.ALPHA;if(r===Yg)return s.RGB;if(r===bi)return s.RGBA;if(r===Er)return s.DEPTH_COMPONENT;if(r===As)return s.DEPTH_STENCIL;if(r===Qg)return s.RED;if(r===ed)return s.RED_INTEGER;if(r===ws)return s.RG;if(r===td)return s.RG_INTEGER;if(r===nd)return s.RGBA_INTEGER;if(r===ic||r===rc||r===sc||r===oc)if(c===qt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===ic)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===rc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===sc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===oc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===ic)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===rc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===sc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===oc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fh||r===hh||r===dh||r===ph)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===fh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ph)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mh||r===gh||r===vh||r===xh||r===_h||r===fc||r===yh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===mh||r===gh)return c===qt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===vh)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===xh)return l.COMPRESSED_R11_EAC;if(r===_h)return l.COMPRESSED_SIGNED_R11_EAC;if(r===fc)return l.COMPRESSED_RG11_EAC;if(r===yh)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Mh||r===Sh||r===Ah||r===Eh||r===wh||r===Th||r===bh||r===Ch||r===Rh||r===Ph||r===Lh||r===Ih||r===Dh||r===Uh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Mh)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sh)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ah)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Eh)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wh)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Th)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bh)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ch)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rh)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ph)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lh)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ih)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dh)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Uh)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nh||r===Fh||r===kh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Nh)return c===qt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Fh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Oh||r===Bh||r===hc||r===zh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Oh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Bh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===hc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Sa?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const BE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zE=`
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

}`;class HE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new cv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new gi({vertexShader:BE,fragmentShader:zE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nn(new Ac(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VE extends Cs{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",d=1,h=null,g=null,x=null,m=null,_=null,S=null;const T=typeof XRWebGLBinding<"u",y=new HE,M={},w=t.getContextAttributes();let P=null,R=null;const z=[],I=[],O=new Nt;let E=null;const U=new ai;U.viewport=new sn;const q=new ai;q.viewport=new sn;const H=[U,q],D=new Zy;let W=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=z[K];return ce===void 0&&(ce=new gf,z[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=z[K];return ce===void 0&&(ce=new gf,z[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=z[K];return ce===void 0&&(ce=new gf,z[K]=ce),ce.getHandSpace()};function G(K){const ce=I.indexOf(K.inputSource);if(ce===-1)return;const oe=z[ce];oe!==void 0&&(oe.update(K.inputSource,K.frame,h||c),oe.dispatchEvent({type:K.type,data:K.inputSource}))}function ie(){o.removeEventListener("select",G),o.removeEventListener("selectstart",G),o.removeEventListener("selectend",G),o.removeEventListener("squeeze",G),o.removeEventListener("squeezestart",G),o.removeEventListener("squeezeend",G),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",X);for(let K=0;K<z.length;K++){const ce=I[K];ce!==null&&(I[K]=null,z[K].disconnect(ce))}W=null,$=null,y.reset();for(const K in M)delete M[K];e.setRenderTarget(P),_=null,m=null,x=null,o=null,R=null,de.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,r.isPresenting===!0&&Mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,r.isPresenting===!0&&Mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return x===null&&T&&(x=new XRWebGLBinding(o,t)),x},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(K){if(o=K,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",G),o.addEventListener("selectstart",G),o.addEventListener("selectend",G),o.addEventListener("squeeze",G),o.addEventListener("squeezestart",G),o.addEventListener("squeezeend",G),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",X),w.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(O),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Ae=null,be=null;w.depth&&(be=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=w.stencil?As:Er,Ae=w.stencil?Sa:or);const ve={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:l};x=this.getBinding(),m=x.createProjectionLayer(ve),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),R=new sr(m.textureWidth,m.textureHeight,{format:bi,type:Ti,depthTexture:new So(m.textureWidth,m.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const oe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:l};_=new XRWebGLLayer(o,t,oe),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),R=new sr(_.framebufferWidth,_.framebufferHeight,{format:bi,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(f),de.setContext(o),de.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(K){for(let ce=0;ce<K.removed.length;ce++){const oe=K.removed[ce],Ae=I.indexOf(oe);Ae>=0&&(I[Ae]=null,z[Ae].disconnect(oe))}for(let ce=0;ce<K.added.length;ce++){const oe=K.added[ce];let Ae=I.indexOf(oe);if(Ae===-1){for(let ve=0;ve<z.length;ve++)if(ve>=I.length){I.push(oe),Ae=ve;break}else if(I[ve]===null){I[ve]=oe,Ae=ve;break}if(Ae===-1)break}const be=z[Ae];be&&be.connect(oe)}}const F=new J,k=new J;function te(K,ce,oe){F.setFromMatrixPosition(ce.matrixWorld),k.setFromMatrixPosition(oe.matrixWorld);const Ae=F.distanceTo(k),be=ce.projectionMatrix.elements,ve=oe.projectionMatrix.elements,Ye=be[14]/(be[10]-1),Oe=be[14]/(be[10]+1),Je=(be[9]+1)/be[5],Qe=(be[9]-1)/be[5],st=(be[8]-1)/be[0],Ze=(ve[8]+1)/ve[0],dt=Ye*st,St=Ye*Ze,Q=Ae/(-st+Ze),ft=Q*-st;if(ce.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ft),K.translateZ(Q),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),be[10]===-1)K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const pe=Ye+Q,Ce=Oe+Q,le=dt-ft,nt=St+(Ae-ft),L=Je*Oe/Ce*pe,A=Qe*Oe/Ce*pe;K.projectionMatrix.makePerspective(le,nt,L,A,pe,Ce),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function N(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(o===null)return;let ce=K.near,oe=K.far;y.texture!==null&&(y.depthNear>0&&(ce=y.depthNear),y.depthFar>0&&(oe=y.depthFar)),D.near=q.near=U.near=ce,D.far=q.far=U.far=oe,(W!==D.near||$!==D.far)&&(o.updateRenderState({depthNear:D.near,depthFar:D.far}),W=D.near,$=D.far),D.layers.mask=K.layers.mask|6,U.layers.mask=D.layers.mask&-5,q.layers.mask=D.layers.mask&-3;const Ae=K.parent,be=D.cameras;N(D,Ae);for(let ve=0;ve<be.length;ve++)N(be[ve],Ae);be.length===2?te(D,U,q):D.projectionMatrix.copy(U.projectionMatrix),j(K,D,Ae)};function j(K,ce,oe){oe===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(oe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Aa*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(m===null&&_===null))return d},this.setFoveation=function(K){d=K,m!==null&&(m.fixedFoveation=K),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(D)},this.getCameraTexture=function(K){return M[K]};let Ee=null;function Se(K,ce){if(g=ce.getViewerPose(h||c),S=ce,g!==null){const oe=g.views;_!==null&&(e.setRenderTargetFramebuffer(R,_.framebuffer),e.setRenderTarget(R));let Ae=!1;oe.length!==D.cameras.length&&(D.cameras.length=0,Ae=!0);for(let Oe=0;Oe<oe.length;Oe++){const Je=oe[Oe];let Qe=null;if(_!==null)Qe=_.getViewport(Je);else{const Ze=x.getViewSubImage(m,Je);Qe=Ze.viewport,Oe===0&&(e.setRenderTargetTextures(R,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(R))}let st=H[Oe];st===void 0&&(st=new ai,st.layers.enable(Oe),st.viewport=new sn,H[Oe]=st),st.matrix.fromArray(Je.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Je.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Oe===0&&(D.matrix.copy(st.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ae===!0&&D.cameras.push(st)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){x=r.getBinding();const Oe=x.getDepthInformation(oe[0]);Oe&&Oe.isValid&&Oe.texture&&y.init(Oe,o.renderState)}if(be&&be.includes("camera-access")&&T){e.state.unbindTexture(),x=r.getBinding();for(let Oe=0;Oe<oe.length;Oe++){const Je=oe[Oe].camera;if(Je){let Qe=M[Je];Qe||(Qe=new cv,M[Je]=Qe);const st=x.getCameraImage(Je);Qe.sourceTexture=st}}}}for(let oe=0;oe<z.length;oe++){const Ae=I[oe],be=z[oe];Ae!==null&&be!==void 0&&be.update(Ae,ce,h||c)}Ee&&Ee(K,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),S=null}const de=new hv;de.setAnimationLoop(Se),this.setAnimationLoop=function(K){Ee=K},this.dispose=function(){}}}const GE=new an,_v=new Tt;_v.set(-1,0,0,0,1,0,0,0,1);function WE(s,e){function t(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function r(y,M){M.color.getRGB(y.fogColor.value,uv(s)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function o(y,M,w,P,R){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?l(y,M):M.isMeshLambertMaterial?(l(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(l(y,M),x(y,M)):M.isMeshPhongMaterial?(l(y,M),g(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(l(y,M),m(y,M),M.isMeshPhysicalMaterial&&_(y,M,R)):M.isMeshMatcapMaterial?(l(y,M),S(y,M)):M.isMeshDepthMaterial?l(y,M):M.isMeshDistanceMaterial?(l(y,M),T(y,M)):M.isMeshNormalMaterial?l(y,M):M.isLineBasicMaterial?(c(y,M),M.isLineDashedMaterial&&f(y,M)):M.isPointsMaterial?d(y,M,w,P):M.isSpriteMaterial?h(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function l(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,t(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,t(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===li&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,t(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===li&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,t(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,t(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,t(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const w=e.get(M),P=w.envMap,R=w.envMapRotation;P&&(y.envMap.value=P,y.envMapRotation.value.setFromMatrix4(GE.makeRotationFromEuler(R)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(_v),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,t(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,t(M.aoMap,y.aoMapTransform))}function c(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,t(M.map,y.mapTransform))}function f(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function d(y,M,w,P){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*w,y.scale.value=P*.5,M.map&&(y.map.value=M.map,t(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function h(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,t(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function g(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function x(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function m(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,t(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,t(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function _(y,M,w){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,t(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,t(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,t(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,t(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,t(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===li&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,t(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,t(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,t(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,t(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,t(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,t(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,t(M.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,M){M.matcap&&(y.matcap.value=M.matcap)}function T(y,M){const w=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function XE(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(w,P){const R=P.program;r.uniformBlockBinding(w,R)}function h(w,P){let R=o[w.id];R===void 0&&(S(w),R=g(w),o[w.id]=R,w.addEventListener("dispose",y));const z=P.program;r.updateUBOMapping(w,z);const I=e.render.frame;l[w.id]!==I&&(m(w),l[w.id]=I)}function g(w){const P=x();w.__bindingPointIndex=P;const R=s.createBuffer(),z=w.__size,I=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,z,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,R),R}function x(){for(let w=0;w<f;w++)if(c.indexOf(w)===-1)return c.push(w),w;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(w){const P=o[w.id],R=w.uniforms,z=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let I=0,O=R.length;I<O;I++){const E=Array.isArray(R[I])?R[I]:[R[I]];for(let U=0,q=E.length;U<q;U++){const H=E[U];if(_(H,I,U,z)===!0){const D=H.__offset,W=Array.isArray(H.value)?H.value:[H.value];let $=0;for(let G=0;G<W.length;G++){const ie=W[G],X=T(ie);typeof ie=="number"||typeof ie=="boolean"?(H.__data[0]=ie,s.bufferSubData(s.UNIFORM_BUFFER,D+$,H.__data)):ie.isMatrix3?(H.__data[0]=ie.elements[0],H.__data[1]=ie.elements[1],H.__data[2]=ie.elements[2],H.__data[3]=0,H.__data[4]=ie.elements[3],H.__data[5]=ie.elements[4],H.__data[6]=ie.elements[5],H.__data[7]=0,H.__data[8]=ie.elements[6],H.__data[9]=ie.elements[7],H.__data[10]=ie.elements[8],H.__data[11]=0):ArrayBuffer.isView(ie)?H.__data.set(new ie.constructor(ie.buffer,ie.byteOffset,H.__data.length)):(ie.toArray(H.__data,$),$+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(w,P,R,z){const I=w.value,O=P+"_"+R;if(z[O]===void 0)return typeof I=="number"||typeof I=="boolean"?z[O]=I:ArrayBuffer.isView(I)?z[O]=I.slice():z[O]=I.clone(),!0;{const E=z[O];if(typeof I=="number"||typeof I=="boolean"){if(E!==I)return z[O]=I,!0}else{if(ArrayBuffer.isView(I))return!0;if(E.equals(I)===!1)return E.copy(I),!0}}return!1}function S(w){const P=w.uniforms;let R=0;const z=16;for(let O=0,E=P.length;O<E;O++){const U=Array.isArray(P[O])?P[O]:[P[O]];for(let q=0,H=U.length;q<H;q++){const D=U[q],W=Array.isArray(D.value)?D.value:[D.value];for(let $=0,G=W.length;$<G;$++){const ie=W[$],X=T(ie),F=R%z,k=F%X.boundary,te=F+k;R+=k,te!==0&&z-te<X.storage&&(R+=z-te),D.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=R,R+=X.storage}}}const I=R%z;return I>0&&(R+=z-I),w.__size=R,w.__cache={},this}function T(w){const P={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(P.boundary=4,P.storage=4):w.isVector2?(P.boundary=8,P.storage=8):w.isVector3||w.isColor?(P.boundary=16,P.storage=12):w.isVector4?(P.boundary=16,P.storage=16):w.isMatrix3?(P.boundary=48,P.storage=48):w.isMatrix4?(P.boundary=64,P.storage=64):w.isTexture?Mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(P.boundary=16,P.storage=w.byteLength):Mt("WebGLRenderer: Unsupported uniform value type.",w),P}function y(w){const P=w.target;P.removeEventListener("dispose",y);const R=c.indexOf(P.__bindingPointIndex);c.splice(R,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function M(){for(const w in o)s.deleteBuffer(o[w]);c=[],o={},l={}}return{bind:d,update:h,dispose:M}}const jE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let er=null;function KE(){return er===null&&(er=new rv(jE,16,16,ws,Ar),er.name="DFG_LUT",er.minFilter=Tn,er.magFilter=Tn,er.wrapS=yr,er.wrapT=yr,er.generateMipmaps=!1,er.needsUpdate=!0),er}class yv{constructor(e={}){const{canvas:t=$_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:m=!1,outputBufferType:_=Ti}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const T=_,y=new Set([nd,td,ed]),M=new Set([Ti,or,Ma,Sa,Zh,$h]),w=new Uint32Array(4),P=new Int32Array(4),R=new J;let z=null,I=null;const O=[],E=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let H=!1,D=null;this._outputColorSpace=wi;let W=0,$=0,G=null,ie=-1,X=null;const F=new sn,k=new sn;let te=null;const N=new Xt(0);let j=0,Ee=t.width,Se=t.height,de=1,K=null,ce=null;const oe=new sn(0,0,Ee,Se),Ae=new sn(0,0,Ee,Se);let be=!1;const ve=new sv;let Ye=!1,Oe=!1;const Je=new an,Qe=new J,st=new sn,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function St(){return G===null?de:1}let Q=r;function ft(C,ee){return t.getContext(C,ee)}try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qh}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",ct,!1),Q===null){const ee="webgl2";if(Q=ft(ee,C),Q===null)throw ft(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Wt("WebGLRenderer: "+C.message),C}let pe,Ce,le,nt,L,A,se,ye,Te,Ne,He,ge,Me,Ve,Ge,Ie,Le,ht,gt,Et,Y,ke,_e;function Xe(){pe=new KS(Q),pe.init(),Y=new OE(Q,pe),Ce=new BS(Q,pe,e,Y),le=new FE(Q,pe),Ce.reversedDepthBuffer&&m&&le.buffers.depth.setReversed(!0),nt=new QS(Q),L=new SE,A=new kE(Q,pe,le,L,Ce,Y,nt),se=new jS(q),ye=new eM(Q),ke=new kS(Q,ye),Te=new qS(Q,ye,nt,ke),Ne=new ZS(Q,Te,ye,ke,nt),ht=new JS(Q,Ce,A),Ge=new zS(L),He=new ME(q,se,pe,Ce,ke,Ge),ge=new WE(q,L),Me=new EE,Ve=new PE(pe),Le=new FS(q,se,le,Ne,S,d),Ie=new NE(q,Ne,Ce),_e=new XE(Q,nt,Ce,le),gt=new OS(Q,pe,nt),Et=new YS(Q,pe,nt),nt.programs=He.programs,q.capabilities=Ce,q.extensions=pe,q.properties=L,q.renderLists=Me,q.shadowMap=Ie,q.state=le,q.info=nt}Xe(),T!==Ti&&(U=new eA(T,t.width,t.height,o,l));const we=new VE(q,Q);this.xr=we,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const C=pe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=pe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(C){C!==void 0&&(de=C,this.setSize(Ee,Se,!1))},this.getSize=function(C){return C.set(Ee,Se)},this.setSize=function(C,ee,he=!0){if(we.isPresenting){Mt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=C,Se=ee,t.width=Math.floor(C*de),t.height=Math.floor(ee*de),he===!0&&(t.style.width=C+"px",t.style.height=ee+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,C,ee)},this.getDrawingBufferSize=function(C){return C.set(Ee*de,Se*de).floor()},this.setDrawingBufferSize=function(C,ee,he){Ee=C,Se=ee,de=he,t.width=Math.floor(C*he),t.height=Math.floor(ee*he),this.setViewport(0,0,C,ee)},this.setEffects=function(C){if(T===Ti){Wt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let ee=0;ee<C.length;ee++)if(C[ee].isOutputPass===!0){Mt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(oe)},this.setViewport=function(C,ee,he,re){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,ee,he,re),le.viewport(F.copy(oe).multiplyScalar(de).round())},this.getScissor=function(C){return C.copy(Ae)},this.setScissor=function(C,ee,he,re){C.isVector4?Ae.set(C.x,C.y,C.z,C.w):Ae.set(C,ee,he,re),le.scissor(k.copy(Ae).multiplyScalar(de).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(C){le.setScissorTest(be=C)},this.setOpaqueSort=function(C){K=C},this.setTransparentSort=function(C){ce=C},this.getClearColor=function(C){return C.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(C=!0,ee=!0,he=!0){let re=0;if(C){let ae=!1;if(G!==null){const Fe=G.texture.format;ae=y.has(Fe)}if(ae){const Fe=G.texture.type,je=M.has(Fe),Be=Le.getClearColor(),it=Le.getClearAlpha(),at=Be.r,mt=Be.g,vt=Be.b;je?(w[0]=at,w[1]=mt,w[2]=vt,w[3]=it,Q.clearBufferuiv(Q.COLOR,0,w)):(P[0]=at,P[1]=mt,P[2]=vt,P[3]=it,Q.clearBufferiv(Q.COLOR,0,P))}else re|=Q.COLOR_BUFFER_BIT}ee&&(re|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(re|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&Q.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),D=C},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ct,!1),Le.dispose(),Me.dispose(),Ve.dispose(),L.dispose(),se.dispose(),Ne.dispose(),ke.dispose(),_e.dispose(),He.dispose(),we.dispose(),we.removeEventListener("sessionstart",Kn),we.removeEventListener("sessionend",vi),$n.stop()};function xe(C){C.preventDefault(),r0("WebGLRenderer: Context Lost."),H=!0}function We(){r0("WebGLRenderer: Context Restored."),H=!1;const C=nt.autoReset,ee=Ie.enabled,he=Ie.autoUpdate,re=Ie.needsUpdate,ae=Ie.type;Xe(),nt.autoReset=C,Ie.enabled=ee,Ie.autoUpdate=he,Ie.needsUpdate=re,Ie.type=ae}function ct(C){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Lt(C){const ee=C.target;ee.removeEventListener("dispose",Lt),Ct(ee)}function Ct(C){Ft(C),L.remove(C)}function Ft(C){const ee=L.get(C).programs;ee!==void 0&&(ee.forEach(function(he){He.releaseProgram(he)}),C.isShaderMaterial&&He.releaseShaderCache(C))}this.renderBufferDirect=function(C,ee,he,re,ae,Fe){ee===null&&(ee=Ze);const je=ae.isMesh&&ae.matrixWorld.determinant()<0,Be=Rn(C,ee,he,re,ae);le.setMaterial(re,je);let it=he.index,at=1;if(re.wireframe===!0){if(it=Te.getWireframeAttribute(he),it===void 0)return;at=2}const mt=he.drawRange,vt=he.attributes.position;let et=mt.start*at,Rt=(mt.start+mt.count)*at;Fe!==null&&(et=Math.max(et,Fe.start*at),Rt=Math.min(Rt,(Fe.start+Fe.count)*at)),it!==null?(et=Math.max(et,0),Rt=Math.min(Rt,it.count)):vt!=null&&(et=Math.max(et,0),Rt=Math.min(Rt,vt.count));const Ot=Rt-et;if(Ot<0||Ot===1/0)return;ke.setup(ae,re,Be,he,it);let jt,zt=gt;if(it!==null&&(jt=ye.get(it),zt=Et,zt.setIndex(jt)),ae.isMesh)re.wireframe===!0?(le.setLineWidth(re.wireframeLinewidth*St()),zt.setMode(Q.LINES)):zt.setMode(Q.TRIANGLES);else if(ae.isLine){let en=re.linewidth;en===void 0&&(en=1),le.setLineWidth(en*St()),ae.isLineSegments?zt.setMode(Q.LINES):ae.isLineLoop?zt.setMode(Q.LINE_LOOP):zt.setMode(Q.LINE_STRIP)}else ae.isPoints?zt.setMode(Q.POINTS):ae.isSprite&&zt.setMode(Q.TRIANGLES);if(ae.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))zt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const en=ae._multiDrawStarts,Ke=ae._multiDrawCounts,un=ae._multiDrawCount,Pt=it?ye.get(it).bytesPerElement:1,Pn=L.get(re).currentProgram.getUniforms();for(let Ln=0;Ln<un;Ln++)Pn.setValue(Q,"_gl_DrawID",Ln),zt.render(en[Ln]/Pt,Ke[Ln])}else if(ae.isInstancedMesh)zt.renderInstances(et,Ot,ae.count);else if(he.isInstancedBufferGeometry){const en=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Ke=Math.min(he.instanceCount,en);zt.renderInstances(et,Ot,Ke)}else zt.render(et,Ot)};function yt(C,ee,he){C.transparent===!0&&C.side===Gi&&C.forceSinglePass===!1?(C.side=li,C.needsUpdate=!0,Pi(C,ee,he),C.side=es,C.needsUpdate=!0,Pi(C,ee,he),C.side=Gi):Pi(C,ee,he)}this.compile=function(C,ee,he=null){he===null&&(he=C),I=Ve.get(he),I.init(ee),E.push(I),he.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ee.layers)&&(I.pushLight(ae),ae.castShadow&&I.pushShadow(ae))}),C!==he&&C.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ee.layers)&&(I.pushLight(ae),ae.castShadow&&I.pushShadow(ae))}),I.setupLights();const re=new Set;return C.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Fe=ae.material;if(Fe)if(Array.isArray(Fe))for(let je=0;je<Fe.length;je++){const Be=Fe[je];yt(Be,he,ae),re.add(Be)}else yt(Fe,he,ae),re.add(Fe)}),I=E.pop(),re},this.compileAsync=function(C,ee,he=null){const re=this.compile(C,ee,he);return new Promise(ae=>{function Fe(){if(re.forEach(function(je){L.get(je).currentProgram.isReady()&&re.delete(je)}),re.size===0){ae(C);return}setTimeout(Fe,10)}pe.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Yt=null;function jn(C){Yt&&Yt(C)}function Kn(){$n.stop()}function vi(){$n.start()}const $n=new hv;$n.setAnimationLoop(jn),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(C){Yt=C,we.setAnimationLoop(C),C===null?$n.stop():$n.start()},we.addEventListener("sessionstart",Kn),we.addEventListener("sessionend",vi),this.render=function(C,ee){if(ee!==void 0&&ee.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;D!==null&&D.renderStart(C,ee);const he=we.enabled===!0&&we.isPresenting===!0,re=U!==null&&(G===null||he)&&U.begin(q,G);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(ee),ee=we.getCamera()),C.isScene===!0&&C.onBeforeRender(q,C,ee,G),I=Ve.get(C,E.length),I.init(ee),I.state.textureUnits=A.getTextureUnits(),E.push(I),Je.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),ve.setFromProjectionMatrix(Je,nr,ee.reversedDepth),Oe=this.localClippingEnabled,Ye=Ge.init(this.clippingPlanes,Oe),z=Me.get(C,O.length),z.init(),O.push(z),we.enabled===!0&&we.isPresenting===!0){const je=q.xr.getDepthSensingMesh();je!==null&&Ci(je,ee,-1/0,q.sortObjects)}Ci(C,ee,0,q.sortObjects),z.finish(),q.sortObjects===!0&&z.sort(K,ce),dt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,dt&&Le.addToRenderList(z,C),this.info.render.frame++,Ye===!0&&Ge.beginShadows();const ae=I.state.shadowsArray;if(Ie.render(ae,C,ee),Ye===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&U.hasRenderPass())===!1){const je=z.opaque,Be=z.transmissive;if(I.setupLights(),ee.isArrayCamera){const it=ee.cameras;if(Be.length>0)for(let at=0,mt=it.length;at<mt;at++){const vt=it[at];Fn(je,Be,C,vt)}dt&&Le.render(C);for(let at=0,mt=it.length;at<mt;at++){const vt=it[at];Ri(z,C,vt,vt.viewport)}}else Be.length>0&&Fn(je,Be,C,ee),dt&&Le.render(C),Ri(z,C,ee)}G!==null&&$===0&&(A.updateMultisampleRenderTarget(G),A.updateRenderTargetMipmap(G)),re&&U.end(q),C.isScene===!0&&C.onAfterRender(q,C,ee),ke.resetDefaultState(),ie=-1,X=null,E.pop(),E.length>0?(I=E[E.length-1],A.setTextureUnits(I.state.textureUnits),Ye===!0&&Ge.setGlobalState(q.clippingPlanes,I.state.camera)):I=null,O.pop(),O.length>0?z=O[O.length-1]:z=null,D!==null&&D.renderEnd()};function Ci(C,ee,he,re){if(C.visible===!1)return;if(C.layers.test(ee.layers)){if(C.isGroup)he=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(ee);else if(C.isLightProbeGrid)I.pushLightProbeGrid(C);else if(C.isLight)I.pushLight(C),C.castShadow&&I.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ve.intersectsSprite(C)){re&&st.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Je);const je=Ne.update(C),Be=C.material;Be.visible&&z.push(C,je,Be,he,st.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ve.intersectsObject(C))){const je=Ne.update(C),Be=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),st.copy(C.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),st.copy(je.boundingSphere.center)),st.applyMatrix4(C.matrixWorld).applyMatrix4(Je)),Array.isArray(Be)){const it=je.groups;for(let at=0,mt=it.length;at<mt;at++){const vt=it[at],et=Be[vt.materialIndex];et&&et.visible&&z.push(C,je,et,he,st.z,vt)}}else Be.visible&&z.push(C,je,Be,he,st.z,null)}}const Fe=C.children;for(let je=0,Be=Fe.length;je<Be;je++)Ci(Fe[je],ee,he,re)}function Ri(C,ee,he,re){const{opaque:ae,transmissive:Fe,transparent:je}=C;I.setupLightsView(he),Ye===!0&&Ge.setGlobalState(q.clippingPlanes,he),re&&le.viewport(F.copy(re)),ae.length>0&&ei(ae,ee,he),Fe.length>0&&ei(Fe,ee,he),je.length>0&&ei(je,ee,he),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Fn(C,ee,he,re){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[re.id]===void 0){const et=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[re.id]=new sr(1,1,{generateMipmaps:!0,type:et?Ar:Ti,minFilter:Ss,samples:Math.max(4,Ce.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace})}const Fe=I.state.transmissionRenderTarget[re.id],je=re.viewport||F;Fe.setSize(je.z*q.transmissionResolutionScale,je.w*q.transmissionResolutionScale);const Be=q.getRenderTarget(),it=q.getActiveCubeFace(),at=q.getActiveMipmapLevel();q.setRenderTarget(Fe),q.getClearColor(N),j=q.getClearAlpha(),j<1&&q.setClearColor(16777215,.5),q.clear(),dt&&Le.render(he);const mt=q.toneMapping;q.toneMapping=ir;const vt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),I.setupLightsView(re),Ye===!0&&Ge.setGlobalState(q.clippingPlanes,re),ei(C,he,re),A.updateMultisampleRenderTarget(Fe),A.updateRenderTargetMipmap(Fe),pe.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Rt=0,Ot=ee.length;Rt<Ot;Rt++){const jt=ee[Rt],{object:zt,geometry:en,material:Ke,group:un}=jt;if(Ke.side===Gi&&zt.layers.test(re.layers)){const Pt=Ke.side;Ke.side=li,Ke.needsUpdate=!0,Ki(zt,he,re,en,Ke,un),Ke.side=Pt,Ke.needsUpdate=!0,et=!0}}et===!0&&(A.updateMultisampleRenderTarget(Fe),A.updateRenderTargetMipmap(Fe))}q.setRenderTarget(Be,it,at),q.setClearColor(N,j),vt!==void 0&&(re.viewport=vt),q.toneMapping=mt}function ei(C,ee,he){const re=ee.isScene===!0?ee.overrideMaterial:null;for(let ae=0,Fe=C.length;ae<Fe;ae++){const je=C[ae],{object:Be,geometry:it,group:at}=je;let mt=je.material;mt.allowOverride===!0&&re!==null&&(mt=re),Be.layers.test(he.layers)&&Ki(Be,ee,he,it,mt,at)}}function Ki(C,ee,he,re,ae,Fe){C.onBeforeRender(q,ee,he,re,ae,Fe),C.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ae.onBeforeRender(q,ee,he,re,C,Fe),ae.transparent===!0&&ae.side===Gi&&ae.forceSinglePass===!1?(ae.side=li,ae.needsUpdate=!0,q.renderBufferDirect(he,ee,re,ae,C,Fe),ae.side=es,ae.needsUpdate=!0,q.renderBufferDirect(he,ee,re,ae,C,Fe),ae.side=Gi):q.renderBufferDirect(he,ee,re,ae,C,Fe),C.onAfterRender(q,ee,he,re,ae,Fe)}function Pi(C,ee,he){ee.isScene!==!0&&(ee=Ze);const re=L.get(C),ae=I.state.lights,Fe=I.state.shadowsArray,je=ae.state.version,Be=He.getParameters(C,ae.state,Fe,ee,he,I.state.lightProbeGridArray),it=He.getProgramCacheKey(Be);let at=re.programs;re.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?ee.environment:null,re.fog=ee.fog;const mt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;re.envMap=se.get(C.envMap||re.environment,mt),re.envMapRotation=re.environment!==null&&C.envMap===null?ee.environmentRotation:C.envMapRotation,at===void 0&&(C.addEventListener("dispose",Lt),at=new Map,re.programs=at);let vt=at.get(it);if(vt!==void 0){if(re.currentProgram===vt&&re.lightsStateVersion===je)return bn(C,Be),vt}else Be.uniforms=He.getUniforms(C),D!==null&&C.isNodeMaterial&&D.build(C,he,Be),C.onBeforeCompile(Be,q),vt=He.acquireProgram(Be,it),at.set(it,vt),re.uniforms=Be.uniforms;const et=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=Ge.uniform),bn(C,Be),re.needsLights=ot(C),re.lightsStateVersion=je,re.needsLights&&(et.ambientLightColor.value=ae.state.ambient,et.lightProbe.value=ae.state.probe,et.directionalLights.value=ae.state.directional,et.directionalLightShadows.value=ae.state.directionalShadow,et.spotLights.value=ae.state.spot,et.spotLightShadows.value=ae.state.spotShadow,et.rectAreaLights.value=ae.state.rectArea,et.ltc_1.value=ae.state.rectAreaLTC1,et.ltc_2.value=ae.state.rectAreaLTC2,et.pointLights.value=ae.state.point,et.pointLightShadows.value=ae.state.pointShadow,et.hemisphereLights.value=ae.state.hemi,et.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,et.spotLightMatrix.value=ae.state.spotLightMatrix,et.spotLightMap.value=ae.state.spotLightMap,et.pointShadowMatrix.value=ae.state.pointShadowMatrix),re.lightProbeGrid=I.state.lightProbeGridArray.length>0,re.currentProgram=vt,re.uniformsList=null,vt}function yn(C){if(C.uniformsList===null){const ee=C.currentProgram.getUniforms();C.uniformsList=ac.seqWithValue(ee.seq,C.uniforms)}return C.uniformsList}function bn(C,ee){const he=L.get(C);he.outputColorSpace=ee.outputColorSpace,he.batching=ee.batching,he.batchingColor=ee.batchingColor,he.instancing=ee.instancing,he.instancingColor=ee.instancingColor,he.instancingMorph=ee.instancingMorph,he.skinning=ee.skinning,he.morphTargets=ee.morphTargets,he.morphNormals=ee.morphNormals,he.morphColors=ee.morphColors,he.morphTargetsCount=ee.morphTargetsCount,he.numClippingPlanes=ee.numClippingPlanes,he.numIntersection=ee.numClipIntersection,he.vertexAlphas=ee.vertexAlphas,he.vertexTangents=ee.vertexTangents,he.toneMapping=ee.toneMapping}function Cn(C,ee){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;R.setFromMatrixPosition(ee.matrixWorld);for(let he=0,re=C.length;he<re;he++){const ae=C[he];if(ae.texture!==null&&ae.boundingBox.containsPoint(R))return ae}return null}function Rn(C,ee,he,re,ae){ee.isScene!==!0&&(ee=Ze),A.resetTextureUnits();const Fe=ee.fog,je=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?ee.environment:null,Be=G===null?q.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:kt.workingColorSpace,it=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,at=se.get(re.envMap||je,it),mt=re.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,vt=!!he.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),et=!!he.morphAttributes.position,Rt=!!he.morphAttributes.normal,Ot=!!he.morphAttributes.color;let jt=ir;re.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(jt=q.toneMapping);const zt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,en=zt!==void 0?zt.length:0,Ke=L.get(re),un=I.state.lights;if(Ye===!0&&(Oe===!0||C!==X)){const Ht=C===X&&re.id===ie;Ge.setState(re,C,Ht)}let Pt=!1;re.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==un.state.version||Ke.outputColorSpace!==Be||ae.isBatchedMesh&&Ke.batching===!1||!ae.isBatchedMesh&&Ke.batching===!0||ae.isBatchedMesh&&Ke.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&Ke.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&Ke.instancing===!1||!ae.isInstancedMesh&&Ke.instancing===!0||ae.isSkinnedMesh&&Ke.skinning===!1||!ae.isSkinnedMesh&&Ke.skinning===!0||ae.isInstancedMesh&&Ke.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ke.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Ke.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Ke.instancingMorph===!1&&ae.morphTexture!==null||Ke.envMap!==at||re.fog===!0&&Ke.fog!==Fe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ge.numPlanes||Ke.numIntersection!==Ge.numIntersection)||Ke.vertexAlphas!==mt||Ke.vertexTangents!==vt||Ke.morphTargets!==et||Ke.morphNormals!==Rt||Ke.morphColors!==Ot||Ke.toneMapping!==jt||Ke.morphTargetsCount!==en||!!Ke.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Pt=!0):(Pt=!0,Ke.__version=re.version);let Pn=Ke.currentProgram;Pt===!0&&(Pn=Pi(re,ee,ae),D&&re.isNodeMaterial&&D.onUpdateProgram(re,Pn,Ke));let Ln=!1,bt=!1,ci=!1;const Bt=Pn.getUniforms(),Qt=Ke.uniforms;if(le.useProgram(Pn.program)&&(Ln=!0,bt=!0,ci=!0),re.id!==ie&&(ie=re.id,bt=!0),Ke.needsLights){const Ht=Cn(I.state.lightProbeGridArray,ae);Ke.lightProbeGrid!==Ht&&(Ke.lightProbeGrid=Ht,bt=!0)}if(Ln||X!==C){le.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Bt.setValue(Q,"projectionMatrix",C.projectionMatrix),Bt.setValue(Q,"viewMatrix",C.matrixWorldInverse);const Li=Bt.map.cameraPosition;Li!==void 0&&Li.setValue(Q,Qe.setFromMatrixPosition(C.matrixWorld)),Ce.logarithmicDepthBuffer&&Bt.setValue(Q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Bt.setValue(Q,"isOrthographic",C.isOrthographicCamera===!0),X!==C&&(X=C,bt=!0,ci=!0)}if(Ke.needsLights&&(un.state.directionalShadowMap.length>0&&Bt.setValue(Q,"directionalShadowMap",un.state.directionalShadowMap,A),un.state.spotShadowMap.length>0&&Bt.setValue(Q,"spotShadowMap",un.state.spotShadowMap,A),un.state.pointShadowMap.length>0&&Bt.setValue(Q,"pointShadowMap",un.state.pointShadowMap,A)),ae.isSkinnedMesh){Bt.setOptional(Q,ae,"bindMatrix"),Bt.setOptional(Q,ae,"bindMatrixInverse");const Ht=ae.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Bt.setValue(Q,"boneTexture",Ht.boneTexture,A))}ae.isBatchedMesh&&(Bt.setOptional(Q,ae,"batchingTexture"),Bt.setValue(Q,"batchingTexture",ae._matricesTexture,A),Bt.setOptional(Q,ae,"batchingIdTexture"),Bt.setValue(Q,"batchingIdTexture",ae._indirectTexture,A),Bt.setOptional(Q,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Bt.setValue(Q,"batchingColorTexture",ae._colorsTexture,A));const Mn=he.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&ht.update(ae,he,Pn),(bt||Ke.receiveShadow!==ae.receiveShadow)&&(Ke.receiveShadow=ae.receiveShadow,Bt.setValue(Q,"receiveShadow",ae.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&ee.environment!==null&&(Qt.envMapIntensity.value=ee.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=KE()),bt){if(Bt.setValue(Q,"toneMappingExposure",q.toneMappingExposure),Ke.needsLights&&kn(Qt,ci),Fe&&re.fog===!0&&ge.refreshFogUniforms(Qt,Fe),ge.refreshMaterialUniforms(Qt,re,de,Se,I.state.transmissionRenderTarget[C.id]),Ke.needsLights&&Ke.lightProbeGrid){const Ht=Ke.lightProbeGrid;Qt.probesSH.value=Ht.texture,Qt.probesMin.value.copy(Ht.boundingBox.min),Qt.probesMax.value.copy(Ht.boundingBox.max),Qt.probesResolution.value.copy(Ht.resolution)}ac.upload(Q,yn(Ke),Qt,A)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(ac.upload(Q,yn(Ke),Qt,A),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Bt.setValue(Q,"center",ae.center),Bt.setValue(Q,"modelViewMatrix",ae.modelViewMatrix),Bt.setValue(Q,"normalMatrix",ae.normalMatrix),Bt.setValue(Q,"modelMatrix",ae.matrixWorld),re.uniformsGroups!==void 0){const Ht=re.uniformsGroups;for(let Li=0,qi=Ht.length;Li<qi;Li++){const ts=Ht[Li];_e.update(ts,Pn),_e.bind(ts,Pn)}}return Pn}function kn(C,ee){C.ambientLightColor.needsUpdate=ee,C.lightProbe.needsUpdate=ee,C.directionalLights.needsUpdate=ee,C.directionalLightShadows.needsUpdate=ee,C.pointLights.needsUpdate=ee,C.pointLightShadows.needsUpdate=ee,C.spotLights.needsUpdate=ee,C.spotLightShadows.needsUpdate=ee,C.rectAreaLights.needsUpdate=ee,C.hemisphereLights.needsUpdate=ee}function ot(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,ee,he){const re=L.get(C);re.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),L.get(C.texture).__webglTexture=ee,L.get(C.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:he,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,ee){const he=L.get(C);he.__webglFramebuffer=ee,he.__useDefaultFramebuffer=ee===void 0};const wt=Q.createFramebuffer();this.setRenderTarget=function(C,ee=0,he=0){G=C,W=ee,$=he;let re=null,ae=!1,Fe=!1;if(C){const Be=L.get(C);if(Be.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(Q.FRAMEBUFFER,Be.__webglFramebuffer),F.copy(C.viewport),k.copy(C.scissor),te=C.scissorTest,le.viewport(F),le.scissor(k),le.setScissorTest(te),ie=-1;return}else if(Be.__webglFramebuffer===void 0)A.setupRenderTarget(C);else if(Be.__hasExternalTextures)A.rebindTextures(C,L.get(C.texture).__webglTexture,L.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const mt=C.depthTexture;if(Be.__boundDepthTexture!==mt){if(mt!==null&&L.has(mt)&&(C.width!==mt.image.width||C.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(C)}}const it=C.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Fe=!0);const at=L.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(at[ee])?re=at[ee][he]:re=at[ee],ae=!0):C.samples>0&&A.useMultisampledRTT(C)===!1?re=L.get(C).__webglMultisampledFramebuffer:Array.isArray(at)?re=at[he]:re=at,F.copy(C.viewport),k.copy(C.scissor),te=C.scissorTest}else F.copy(oe).multiplyScalar(de).floor(),k.copy(Ae).multiplyScalar(de).floor(),te=be;if(he!==0&&(re=wt),le.bindFramebuffer(Q.FRAMEBUFFER,re)&&le.drawBuffers(C,re),le.viewport(F),le.scissor(k),le.setScissorTest(te),ae){const Be=L.get(C.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Be.__webglTexture,he)}else if(Fe){const Be=ee;for(let it=0;it<C.textures.length;it++){const at=L.get(C.textures[it]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+it,at.__webglTexture,he,Be)}}else if(C!==null&&he!==0){const Be=L.get(C.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Be.__webglTexture,he)}ie=-1},this.readRenderTargetPixels=function(C,ee,he,re,ae,Fe,je,Be=0){if(!(C&&C.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=L.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&je!==void 0&&(it=it[je]),it){le.bindFramebuffer(Q.FRAMEBUFFER,it);try{const at=C.textures[Be],mt=at.format,vt=at.type;if(C.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Be),!Ce.textureFormatReadable(mt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(vt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=C.width-re&&he>=0&&he<=C.height-ae&&Q.readPixels(ee,he,re,ae,Y.convert(mt),Y.convert(vt),Fe)}finally{const at=G!==null?L.get(G).__webglFramebuffer:null;le.bindFramebuffer(Q.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(C,ee,he,re,ae,Fe,je,Be=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let it=L.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&je!==void 0&&(it=it[je]),it)if(ee>=0&&ee<=C.width-re&&he>=0&&he<=C.height-ae){le.bindFramebuffer(Q.FRAMEBUFFER,it);const at=C.textures[Be],mt=at.format,vt=at.type;if(C.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Be),!Ce.textureFormatReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,et),Q.bufferData(Q.PIXEL_PACK_BUFFER,Fe.byteLength,Q.STREAM_READ),Q.readPixels(ee,he,re,ae,Y.convert(mt),Y.convert(vt),0);const Rt=G!==null?L.get(G).__webglFramebuffer:null;le.bindFramebuffer(Q.FRAMEBUFFER,Rt);const Ot=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await ey(Q,Ot,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,et),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Fe),Q.deleteBuffer(et),Q.deleteSync(Ot),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,ee=null,he=0){const re=Math.pow(2,-he),ae=Math.floor(C.image.width*re),Fe=Math.floor(C.image.height*re),je=ee!==null?ee.x:0,Be=ee!==null?ee.y:0;A.setTexture2D(C,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,he,0,0,je,Be,ae,Fe),le.unbindTexture()};const dn=Q.createFramebuffer(),pn=Q.createFramebuffer();this.copyTextureToTexture=function(C,ee,he=null,re=null,ae=0,Fe=0){let je,Be,it,at,mt,vt,et,Rt,Ot;const jt=C.isCompressedTexture?C.mipmaps[Fe]:C.image;if(he!==null)je=he.max.x-he.min.x,Be=he.max.y-he.min.y,it=he.isBox3?he.max.z-he.min.z:1,at=he.min.x,mt=he.min.y,vt=he.isBox3?he.min.z:0;else{const Qt=Math.pow(2,-ae);je=Math.floor(jt.width*Qt),Be=Math.floor(jt.height*Qt),C.isDataArrayTexture?it=jt.depth:C.isData3DTexture?it=Math.floor(jt.depth*Qt):it=1,at=0,mt=0,vt=0}re!==null?(et=re.x,Rt=re.y,Ot=re.z):(et=0,Rt=0,Ot=0);const zt=Y.convert(ee.format),en=Y.convert(ee.type);let Ke;ee.isData3DTexture?(A.setTexture3D(ee,0),Ke=Q.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(A.setTexture2DArray(ee,0),Ke=Q.TEXTURE_2D_ARRAY):(A.setTexture2D(ee,0),Ke=Q.TEXTURE_2D),le.activeTexture(Q.TEXTURE0),le.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,ee.flipY),le.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),le.pixelStorei(Q.UNPACK_ALIGNMENT,ee.unpackAlignment);const un=le.getParameter(Q.UNPACK_ROW_LENGTH),Pt=le.getParameter(Q.UNPACK_IMAGE_HEIGHT),Pn=le.getParameter(Q.UNPACK_SKIP_PIXELS),Ln=le.getParameter(Q.UNPACK_SKIP_ROWS),bt=le.getParameter(Q.UNPACK_SKIP_IMAGES);le.pixelStorei(Q.UNPACK_ROW_LENGTH,jt.width),le.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,jt.height),le.pixelStorei(Q.UNPACK_SKIP_PIXELS,at),le.pixelStorei(Q.UNPACK_SKIP_ROWS,mt),le.pixelStorei(Q.UNPACK_SKIP_IMAGES,vt);const ci=C.isDataArrayTexture||C.isData3DTexture,Bt=ee.isDataArrayTexture||ee.isData3DTexture;if(C.isDepthTexture){const Qt=L.get(C),Mn=L.get(ee),Ht=L.get(Qt.__renderTarget),Li=L.get(Mn.__renderTarget);le.bindFramebuffer(Q.READ_FRAMEBUFFER,Ht.__webglFramebuffer),le.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let qi=0;qi<it;qi++)ci&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,L.get(C).__webglTexture,ae,vt+qi),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,L.get(ee).__webglTexture,Fe,Ot+qi)),Q.blitFramebuffer(at,mt,je,Be,et,Rt,je,Be,Q.DEPTH_BUFFER_BIT,Q.NEAREST);le.bindFramebuffer(Q.READ_FRAMEBUFFER,null),le.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(ae!==0||C.isRenderTargetTexture||L.has(C)){const Qt=L.get(C),Mn=L.get(ee);le.bindFramebuffer(Q.READ_FRAMEBUFFER,dn),le.bindFramebuffer(Q.DRAW_FRAMEBUFFER,pn);for(let Ht=0;Ht<it;Ht++)ci?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Qt.__webglTexture,ae,vt+Ht):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Qt.__webglTexture,ae),Bt?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Mn.__webglTexture,Fe,Ot+Ht):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Mn.__webglTexture,Fe),ae!==0?Q.blitFramebuffer(at,mt,je,Be,et,Rt,je,Be,Q.COLOR_BUFFER_BIT,Q.NEAREST):Bt?Q.copyTexSubImage3D(Ke,Fe,et,Rt,Ot+Ht,at,mt,je,Be):Q.copyTexSubImage2D(Ke,Fe,et,Rt,at,mt,je,Be);le.bindFramebuffer(Q.READ_FRAMEBUFFER,null),le.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else Bt?C.isDataTexture||C.isData3DTexture?Q.texSubImage3D(Ke,Fe,et,Rt,Ot,je,Be,it,zt,en,jt.data):ee.isCompressedArrayTexture?Q.compressedTexSubImage3D(Ke,Fe,et,Rt,Ot,je,Be,it,zt,jt.data):Q.texSubImage3D(Ke,Fe,et,Rt,Ot,je,Be,it,zt,en,jt):C.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Fe,et,Rt,je,Be,zt,en,jt.data):C.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Fe,et,Rt,jt.width,jt.height,zt,jt.data):Q.texSubImage2D(Q.TEXTURE_2D,Fe,et,Rt,je,Be,zt,en,jt);le.pixelStorei(Q.UNPACK_ROW_LENGTH,un),le.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Pt),le.pixelStorei(Q.UNPACK_SKIP_PIXELS,Pn),le.pixelStorei(Q.UNPACK_SKIP_ROWS,Ln),le.pixelStorei(Q.UNPACK_SKIP_IMAGES,bt),Fe===0&&ee.generateMipmaps&&Q.generateMipmap(Ke),le.unbindTexture()},this.initRenderTarget=function(C){L.get(C).__webglFramebuffer===void 0&&A.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),le.unbindTexture()},this.resetState=function(){W=0,$=0,G=null,le.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(e),t.unpackColorSpace=kt._getUnpackColorSpace()}}function da(s,e,t){const r=e/100,o=t/100,l=(1-Math.abs(2*o-1))*r,c=l*(1-Math.abs(s/60%2-1)),f=o-l/2;let d=0,h=0,g=0;s<60?[d,h,g]=[l,c,0]:s<120?[d,h,g]=[c,l,0]:s<180?[d,h,g]=[0,l,c]:s<240?[d,h,g]=[0,c,l]:s<300?[d,h,g]=[c,0,l]:[d,h,g]=[l,0,c];const x=m=>Math.round((m+f)*255).toString(16).padStart(2,"0");return`#${x(d)}${x(h)}${x(g)}`}function Jr(s,e,t){if(t==="grayscale")return["#FFFFFF","#000000","#FFFFFF","#000000"];if(t==="black")return[da(s,e,50),"#FFFFFF",da(s,e*.6,70),da(s,e*.8,35)];const r=da(s,e,50),o=da((s+180)%360,e,50);return[r,o,r,o]}const ng=[1],xa=[0];let Mv=0;const qE=new Set;function YE(s,e){for(let t=0;t<e.length;t++){const r=e[t]??1;ng[t]=r,xa[t]=(xa[t]??0)+s*r}for(const t of qE)xa[t]=(xa[t]??0)+s*(ng[t]??1)}function QE(s){Mv=s}function JE(){return xa[Mv]??0}const lc=12,Wn=Math.PI*2;function Sv(s,e){if(e<=0)return 0;const t=Math.min(2.2,10/e);return Math.min(e,1+Math.floor(s/t))}const $l=[[[0,"#5ea733"],[.1,"#a9c97a"],[.17,"#efe6c6"],[.26,"#f2b2c5"],[.36,"#df4a67"],[.45,"#b81f3d"],[.53,"#1a0d33"],[.61,"#2e44d8"],[.7,"#5f78f0"],[.79,"#dfe4f4"],[.87,"#eee6c4"],[.94,"#9cc46c"],[1,"#5ea733"]],[[0,"#e0a82e"],[.1,"#f0cd7a"],[.17,"#f6ead0"],[.26,"#f6b49a"],[.36,"#e8573a"],[.45,"#b52a1c"],[.53,"#2a0a0c"],[.61,"#a8401c"],[.7,"#e8823e"],[.79,"#f7dcc4"],[.87,"#f4e8c8"],[.94,"#e9c060"],[1,"#e0a82e"]],[[0,"#1f9a8a"],[.1,"#86d1bf"],[.17,"#eaf2e2"],[.26,"#9fe3e8"],[.36,"#25b5d4"],[.45,"#13708f"],[.53,"#0b1430"],[.61,"#5a35c8"],[.7,"#9a7cf0"],[.79,"#e6e0f6"],[.87,"#e4f2ea"],[.94,"#5cc2a6"],[1,"#1f9a8a"]],[[0,"#2b3f8f"],[.1,"#7d8fd0"],[.17,"#eef0f6"],[.26,"#c9d0ea"],[.36,"#5266b8"],[.45,"#22307a"],[.53,"#070a1c"],[.61,"#26357e"],[.7,"#6a7cc6"],[.79,"#e8ebf5"],[.87,"#f4f3ee"],[.94,"#8a9ad6"],[1,"#2b3f8f"]]],ZE=["Inflated","Paper","Line","Print"],$E=`
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
}`,ew=`
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
}`,tw=0,nw=1,iw=2;function Tc(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(m=>m+m).join(""):e,r=(parseInt(t.slice(0,2),16)||0)/255,o=(parseInt(t.slice(2,4),16)||0)/255,l=(parseInt(t.slice(4,6),16)||0)/255,c=Math.max(r,o,l),f=Math.min(r,o,l),d=(c+f)/2;if(c===f)return[0,0,d];const h=c-f,g=d>.5?h/(2-c-f):h/(c+f);let x;return c===r?x=((o-l)/h+(o<l?6:0))*60:c===o?x=((l-r)/h+2)*60:x=((r-o)/h+4)*60,[x,g,d]}function Av(s,e,t){return`hsl(${(s%360+360)%360} ${Math.max(0,Math.min(1,e))*100}% ${t*100}%)`}const ig=Tc(Jr(245,100,"contrast")[0]);function Ev(s){const[e,t]=Tc(s[0]??"#000000");return t===0?{hue:0,sat:0}:{hue:e-ig[0],sat:t/(ig[1]||1)}}function rg(s,e){const t=document.createElement("canvas");t.width=512,t.height=1;const r=t.getContext("2d"),o=r.createLinearGradient(0,0,512,0);for(const[c,f]of s){const[d,h,g]=Tc(f);o.addColorStop(c,Av(d+e.hue,h*e.sat,g))}r.fillStyle=o,r.fillRect(0,0,512,1);const l=new zy(t);return l.wrapS=uc,l.magFilter=Tn,l.minFilter=Tn,l.generateMipmaps=!1,l}class wv{constructor(){B(this,"textures");B(this,"turnKey","#reference");B(this,"palFrom",0);B(this,"palTo",0);B(this,"palMix",1);B(this,"styleUniform",{value:0});B(this,"turn",{hue:0,sat:1});this.textures=$l.map(e=>rg(e,{hue:0,sat:1}))}shared(){return{uPalA:{value:this.textures[0]},uPalB:{value:this.textures[0]},uPalMix:{value:0},uT:{value:0},uOff:{value:0},uWA:{value:0},uWB:{value:0},uWC:{value:0},uDepth:{value:.32},uSpec:{value:.16},uCenter:{value:new J}}}material(e,t,r={}){return new gi({vertexShader:$E,fragmentShader:ew,side:Gi,uniforms:{...t,uStyle:this.styleUniform,uMode:{value:e},uAng:{value:0},uWS:{value:1},...r}})}update(e,t,r,o,l=0){this.styleUniform.value=Math.max(0,Math.min(ZE.length-1,Math.round(l)));const c=e[0]??"";if(c!==this.turnKey){this.turnKey=c;const d=Ev(e);this.turn=d;const h=this.textures;this.textures=$l.map(g=>rg(g,d));for(const g of h)g.dispose()}const f=Math.max(0,Math.min($l.length-1,Math.round(t)));o&&(this.palFrom=this.palTo=f,this.palMix=1),f!==this.palTo&&(this.palFrom=this.palMix<.5?this.palFrom:this.palTo,this.palTo=f,this.palMix=0),this.palMix=Math.min(1,this.palMix+r)}apply(e,t,r){e.uPalA.value=this.textures[this.palFrom],e.uPalB.value=this.textures[this.palTo],e.uPalMix.value=this.palMix,e.uDepth.value=t,e.uSpec.value=r}backdrop(e,t,r,o){const l=this.styleUniform.value;if(l===0){bv(e,t,r,o);return}const c=Math.max(0,Math.min(1,o));if(e.globalCompositeOperation="source-over",e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,t,r),l===2||c<=0)return;const f=$l[this.palTo],d=f.find(([m])=>m===(l===1?.53:.17))??f[0],[h,g,x]=Tc(d[1]);e.globalAlpha=c,e.fillStyle=Av(h+this.turn.hue,g*this.turn.sat,l===1?x*1.25:x),e.fillRect(0,0,t,r),e.globalAlpha=1}dispose(){for(const e of this.textures)e.dispose();this.textures=[]}}function Tv(s,e,t){const r=e/t,o=30,l=Math.tan(o/2*Math.PI/180),c=r<16/9?2*Math.atan(l*(16/9)/r)*180/Math.PI:o;(s.aspect!==r||s.fov!==c)&&(s.aspect=r,s.fov=c,s.updateProjectionMatrix())}function bv(s,e,t,r){const o=Math.max(0,Math.min(1,r)),l=c=>{const f=parseInt(c.slice(1),16),d=Math.round((f>>16&255)*o),h=Math.round((f>>8&255)*o),g=Math.round((f&255)*o);return`rgb(${d},${h},${g})`};if(s.globalCompositeOperation="source-over",s.globalAlpha=1,o<=0)s.fillStyle="#000";else{const c=s.createLinearGradient(0,0,0,t);c.addColorStop(0,l("#8e94a2")),c.addColorStop(.2,l("#bfc3d0")),c.addColorStop(.42,l("#dde1ec")),c.addColorStop(.68,l("#d9dde9")),c.addColorStop(1,l("#9ea2af")),s.fillStyle=c}s.fillRect(0,0,e,t)}function hd(s){const e=new yv({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"});return e.setPixelRatio(1),e.setClearColor(0,0),e}function dd(s,e,t,r){s.fillStyle="#000",s.fillRect(0,0,e,t),s.fillStyle="rgba(255,255,255,0.4)",s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.fillText(`${r} NEEDS WEBGL`,e/2,t/2)}class Rs{constructor(e){B(this,"dt",1/60);B(this,"step",0);B(this,"openness");B(this,"aim",{x:0,y:0});B(this,"spread",.4);B(this,"depth",.35);B(this,"turn",0);B(this,"pinch",0);B(this,"fist",0);B(this,"clapped",!1);B(this,"clapStrength",0);B(this,"wasClapping",!1);B(this,"burst",0);B(this,"bump",0);B(this,"bass",0);B(this,"mid",0);B(this,"high",0);B(this,"kick",0);B(this,"snare",0);B(this,"hat",0);B(this,"energy",.5);B(this,"build",0);B(this,"drop",0);B(this,"bright",.5);B(this,"lastClock",null);B(this,"lastFrame",0);this.rest=e,this.openness=e}read(e,t){const r=performance.now(),o=this.lastFrame?Math.min(.1,(r-this.lastFrame)/1e3):1/60;this.lastFrame=r;const l=JE();this.step=this.lastClock===null?0:Math.max(-.2,Math.min(.2,l-this.lastClock)),this.lastClock=l,this.dt=o;const c=[e.left,e.right].filter(Boolean);let f=this.rest;if(c.length){const w=Math.max(...c.map(P=>P.gesture==="fist"?0:P.fingerCount??3));f=Math.max(0,Math.min(1,w/5))}this.openness+=(f-this.openness)*(1-Math.exp(-o*5));let d=0,h=0;c.length&&(d=(c.reduce((w,P)=>w+P.position.x,0)/c.length-.5)*2,h=(.5-c.reduce((w,P)=>w+P.position.y,0)/c.length)*2);const g=1-Math.exp(-o*4);this.aim.x+=(d-this.aim.x)*g,this.aim.y+=(h-this.aim.y)*g,this.spread+=((e.distanceBetweenHands??.4)-this.spread)*g;const x=c.map(w=>w.depth).filter(w=>w!==void 0);this.depth+=((x.length?Math.max(...x):.35)-this.depth)*g;const m=e.twist??(c.length===1?c[0].angle??0:0);this.turn+=(m-this.turn)*g;const _=c.length?Math.max(...c.map(w=>w.pinch??0)):0;this.pinch+=(_-this.pinch)*(1-Math.exp(-o*10));const S=c.length?Math.max(...c.map(w=>w.openness!==void 0?1-w.openness:w.gesture==="fist"?1:0)):0;this.fist+=(Math.min(1,Math.max(0,(S-.35)/.4))-this.fist)*(1-Math.exp(-o*8));const T=!!e.clapping&&!e.synthetic;this.clapped=T&&!this.wasClapping,this.clapStrength=this.clapped?Math.max(.6,e.clapIntensity??1):0,this.wasClapping=T;const y=e.clapping?e.clapIntensity??1:0;this.burst=Math.max(this.burst*Math.exp(-o*2.2),y);const M=(w,P,R,z)=>w+(P-w)*(1-Math.exp(-o*(P>w?R:z)));this.bass=M(this.bass,(t==null?void 0:t.bass)??0,6,1.5),this.mid=M(this.mid,(t==null?void 0:t.mid)??0,4,1),this.high=M(this.high,(t==null?void 0:t.high)??0,8,2.5),this.bump*=Math.exp(-o/.07),t!=null&&t.beat&&(this.bump=Math.max(this.bump,t.beatIntensity||1)),this.kick=(t==null?void 0:t.kick)??0,this.bump=Math.max(this.bump,this.kick*.9),this.snare=(t==null?void 0:t.snare)??0,this.hat=(t==null?void 0:t.hat)??0,this.energy=M(this.energy,t!=null&&t.live?t.energy??.5:.5,1,1),this.build=(t==null?void 0:t.build)??0,this.drop=(t==null?void 0:t.drop)??0,this.bright=M(this.bright,(t==null?void 0:t.bright)??.5,1,1)}}class rw{constructor(e,t){B(this,"canvas");B(this,"ctx");B(this,"cfg",Km);B(this,"playing",new Rs(.6));B(this,"n",0);B(this,"x",new Float32Array(0));B(this,"y",new Float32Array(0));B(this,"z",new Float32Array(0));B(this,"vx",new Float32Array(0));B(this,"vy",new Float32Array(0));B(this,"light",new Float32Array(0));B(this,"phase",new Float32Array(0));B(this,"time",0);B(this,"events",[]);B(this,"lastKick",0);B(this,"lastSnare",0);B(this,"lastHat",0);B(this,"kicks",0);B(this,"flow",[Math.random()*10,Math.random()*10,Math.random()*10]);B(this,"flowTo",[...this.flow]);B(this,"gather",0);B(this,"breath",0);B(this,"grain",document.createElement("canvas"));B(this,"aspect",16/9);this.canvas=e,this.ctx=t,this.grain.width=this.grain.height=256;const r=this.grain.getContext("2d"),o=r.createImageData(256,256);for(let l=0;l<o.data.length;l+=4){const c=Math.random()<.5?0:255;o.data[l]=o.data[l+1]=o.data[l+2]=c,o.data[l+3]=Math.random()<.35?255:0}r.putImageData(o,0,0)}setParams(e){this.cfg=bs(Km,e)}resize(e){const t=Math.min(this.n,e),r=o=>{const l=new Float32Array(e);return l.set(o.subarray(0,t)),l};this.x=r(this.x),this.y=r(this.y),this.z=r(this.z),this.vx=r(this.vx),this.vy=r(this.vy),this.light=r(this.light),this.phase=r(this.phase);for(let o=t;o<e;o++)this.x[o]=Math.random()*this.aspect,this.y[o]=Math.random(),this.z[o]=.25+.75*Math.pow(Math.random(),2.2),this.phase[o]=Math.random()*Math.PI*2,this.light[o]=0;this.n=e}angleAt(e,t,r){const[o,l,c]=this.flow;return Math.sin(e*1.3+o+r*.05)*1.7+Math.cos(t*1.7-l+r*.04)*1.5+Math.sin((e+t)*.8+c)*1.2}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;this.aspect=f/d;const h=this.aspect,g=this.playing;g.read(e,r);const x=Math.min(.1,g.dt),m=Math.min(.08,Math.max(0,g.step));this.time+=m;const _=Math.max(50,Math.min(6e3,Math.round(c.field.count)));_!==this.n&&this.resize(_);const S=!!(r!=null&&r.live),T=k=>1-Math.exp(-x*k),y=Math.max(g.kick,g.bump)*c.sound.beat;if(y>.45&&this.lastKick<=.45){this.kicks+=1;const k=Math.random(),te=(.5+.6*Math.random())*Math.min(1.4,y),N=k<.5?0:k<.82?1:2;this.events.push({kind:N,x:Math.random()*h,y:.1+.8*Math.random(),age:0,strength:te,angle:Math.random()*Math.PI,reach:.2+.5*Math.random()}),this.kicks%(6+Math.floor(Math.random()*6))===0&&(this.flowTo=this.flowTo.map(j=>j+(Math.random()-.5)*4))}this.lastKick=y;const M=(k,te)=>{for(let N=0;N<k;N++){const j=Math.floor(Math.random()*this.n);this.light[j]=Math.max(this.light[j],te)}},w=g.snare*c.sound.sparks;w>.5&&this.lastSnare<=.5&&M(Math.round(this.n*.012),1.1),this.lastSnare=w;const P=g.hat*c.sound.sparks;if(P>.5&&this.lastHat<=.5&&M(Math.round(this.n*.004),.7),this.lastHat=P,Math.random()<x*.35*(S?c.sound.quiet:1)&&this.events.push({kind:0,x:Math.random()*h,y:Math.random(),age:0,strength:.45,angle:0,reach:.4}),g.clapped&&c.hands.clap>0)for(let k=0;k<this.n;k++){this.light[k]=Math.max(this.light[k],1.2*c.hands.clap);const te=this.x[k]-h/2,N=this.y[k]-.5,j=Math.hypot(te,N)+.05;this.vx[k]+=te/j*.25*c.hands.clap,this.vy[k]+=N/j*.25*c.hands.clap}this.breath+=(g.bass*c.sound.bass-this.breath)*T(4);for(let k=0;k<3;k++)this.flow[k]+=(this.flowTo[k]-this.flow[k])*T(.3);const z=!e.synthetic?[e.left,e.right].filter(k=>!!k):[],I=z.length?g.fist:0,O=Math.max(Math.min(1,c.form.circle),I*Math.min(1,c.hands.reach));this.gather+=(O-this.gather)*T(O>this.gather?.9:.6);const E=.018*c.field.drift,U=this.time,q=h/2,H=.5,D=.3,W=U*.04,$=Math.exp(-x*2.2);for(let k=0;k<this.n;k++){const te=this.z[k],N=this.angleAt(this.x[k],this.y[k],U);let j=this.x[k]+(Math.cos(N)*E*te+this.vx[k])*m,Ee=this.y[k]+(Math.sin(N)*E*te+this.vy[k])*m;j+=(j-q)*this.breath*.004*te,Ee+=(Ee-H)*this.breath*.004*te;for(const Se of z){const de=Se.position.x*h,K=Se.position.y,ce=j-de,oe=Ee-K,Ae=ce*ce+oe*oe,be=Math.exp(-Ae/.02)*(1-I)*c.hands.reach;if(be>.01){const ve=Math.sqrt(Ae)+.01;j+=ce/ve*be*.006,Ee+=oe/ve*be*.006,this.light[k]=Math.max(this.light[k],be*.9)}}if(this.gather>.002){const Se=this.phase[k]+W,de=D*(.94+.12*(k*.618%1))*(1+.06*this.breath),K=q+Math.cos(Se)*de,ce=H+Math.sin(Se)*de,oe=this.gather*this.gather*T(1.6);j+=(K-j)*oe,Ee+=(ce-Ee)*oe}j<-.02?j+=h+.04:j>h+.02&&(j-=h+.04),Ee<-.02?Ee+=1.04:Ee>1.02&&(Ee-=1.04),this.x[k]=j,this.y[k]=Ee,this.vx[k]*=$,this.vy[k]*=$,this.light[k]*=Math.exp(-x*(1.6+.8*Math.random()))}for(const k of this.events){k.age+=x;const te=k.age*.55;for(let N=0;N<this.n;N++){const j=this.x[N]-k.x,Ee=this.y[N]-k.y;let Se=0;if(k.kind===0){const de=Math.hypot(j,Ee)-te;Se=Math.exp(-(de*de)/.0012)}else if(k.kind===1)k.age<x*1.5&&Math.hypot(j,Ee)<k.reach*.6&&Math.random()<.35&&(Se=.6+Math.random()*.6);else{const de=Math.cos(k.angle),K=Math.sin(k.angle),ce=j*-K+Ee*de-(k.age-.6)*.08;Se=Math.exp(-(ce*ce)/25e-5)*(Math.abs(j*de+Ee*K)<k.age*1.4?1:0)}Se>.02&&(this.light[N]=Math.max(this.light[N],1.6*Se*k.strength*(1-k.age/2.2)))}}this.events=this.events.filter(k=>k.age<2.2),l.globalCompositeOperation="source-over",l.globalAlpha=1-.92*Math.max(0,Math.min(1,c.look.trail)),l.fillStyle="#000",l.fillRect(0,0,f,d),l.globalAlpha=1;const G=8,ie=[];for(let k=0;k<G;k++)ie.push(new Path2D);const X=Math.max(.6,d/720*1.6*c.field.size),F=.2*c.look.glow;for(let k=0;k<this.n;k++){const te=this.z[k],N=.6+.4*Math.sin(U*.7+this.phase[k]*5),j=Math.min(1,(F*N+this.light[k])*(.35+.65*te)+.2*this.gather*te);if(j<.03)continue;const Ee=Math.min(G-1,Math.floor(j*G)),Se=X*(.5+te)*(1+.6*Math.min(1,this.light[k]));ie[Ee].rect(this.x[k]*d-Se/2,this.y[k]*d-Se/2,Se,Se)}for(let k=0;k<G;k++)l.globalAlpha=(k+.5)/G,l.fillStyle="#fff",l.fill(ie[k]);if(c.look.grain>.01){l.globalCompositeOperation="lighter",l.globalAlpha=.05*c.look.grain;const k=Math.floor(Math.random()*256),te=Math.floor(Math.random()*256),N=l.createPattern(this.grain,"repeat");N&&(l.save(),l.translate(-k,-te),l.fillStyle=N,l.fillRect(k,te,f,d),l.restore())}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const sg={line:{count:14,weight:1,wave:1,birth:1,zoom:1,speed:1},hands:{open:1,pull:1,clap:1},sound:{beat:1,bass:1,grow:1}},og=110,sw=5;function ag(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(r=>r+r).join(""):e;return[parseInt(t.slice(0,2),16)||0,parseInt(t.slice(2,4),16)||0,parseInt(t.slice(4,6),16)||0]}class ow{constructor(e,t){B(this,"canvas");B(this,"ctx");B(this,"cfg",sg);B(this,"playing",new Rs(.5));B(this,"age",0);B(this,"time",0);B(this,"unfold",0);B(this,"breath",0);B(this,"shiver",0);B(this,"pulses",[]);B(this,"lastKick",0);B(this,"hand",{x:.5,y:.5,hold:0});B(this,"idle",0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=bs(sg,e)}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;const h=this.playing;h.read(e,r);const{dt:g}=h,x=Math.max(0,h.step);this.age+=x,this.time+=x*Math.max(0,c.line.speed),this.idle+=g;const m=k=>1-Math.exp(-g*k),_=[e.left,e.right].filter(Boolean),S=_.length>0&&!e.synthetic,T=!!(r!=null&&r.live);let y;S?y=(1-h.fist)*c.hands.open:T?y=(.12+.88*h.energy)*c.sound.grow:y=.35+.3*Math.sin(this.idle*.21),this.unfold+=(Math.min(1,Math.max(0,y))-this.unfold)*m(S?5:.8),this.breath+=(h.bass*c.sound.bass-this.breath)*m(3),h.clapped&&(this.shiver=Math.min(1.4,h.clapStrength*1.3*c.hands.clap)),this.shiver*=Math.exp(-g*2.4);const M=Math.max(h.kick,h.bump)*c.sound.beat;M>.45&&this.lastKick<=.45&&(this.pulses.push({at:0,strength:Math.min(1.2,M)}),this.pulses.length>sw&&this.pulses.shift()),this.lastKick=M;for(const k of this.pulses)k.at+=g*.75;if(this.pulses=this.pulses.filter(k=>k.at<.75),_.length){const k=_.reduce((N,j)=>N+j.position.x,0)/_.length,te=_.reduce((N,j)=>N+j.position.y,0)/_.length;this.hand.x+=(k-this.hand.x)*m(8),this.hand.y+=(te-this.hand.y)*m(8)}this.hand.hold+=((S?c.hands.pull:0)-this.hand.hold)*m(4);const w=c.line.birth,P=w<=0?1:Math.min(1,Math.max(0,(this.age-1.6*w)/(5*w))),R=P*P*(3-2*P),z=w<=0?0:Math.max(0,1-this.age/(2.4*w));l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,f,d);const I=Math.max(1,Math.round(c.line.count)),[O,E,U]=ag(t[0]??"#8899ff"),[q,H,D]=ag(t[2]??t[1]??"#ffffff"),W=Math.max(.1,c.line.zoom),$=d*W,G=d/720*W,ie=$*.74*this.unfold*(1+.12*this.breath),X=c.line.wave,F=this.time;if(l.lineCap="round",l.lineJoin="round",l.globalCompositeOperation="lighter",z>.01){const k=(3+2.5*Math.sin(this.idle*2.2))*G*(1+this.breath);l.globalAlpha=Math.min(1,z*1.4),l.fillStyle="#fff",l.beginPath(),l.arc(f/2,d/2,Math.max(1,k),0,Math.PI*2),l.fill()}if(R>.002){const k=.5-.5*R,te=.5+.5*R;for(let N=0;N<I;N++){const j=I===1?0:N/(I-1)*2-1,Ee=j*2.6*this.unfold,Se=this.shiver*Math.sin(N*12.9898)*43758.5453,de=(Se-Math.floor(Se)-.5)*this.shiver*$*.09;l.beginPath();let K=0,ce=0;for(let Je=0;Je<=og;Je++){const Qe=k+(te-k)*(Je/og),st=Math.sin(Math.PI*Qe);let Ze=d/2+j*ie*.5;Ze+=(Math.sin(Qe*6.2+F*.55+Ee)*.6+Math.sin(Qe*13.7-F*.38+Ee*1.7)*.25)*$*.035*X*st*(.35+.65*this.unfold+this.breath*.6),Ze+=de*st*Math.sin(Qe*20+N);for(const St of this.pulses){const Q=Math.abs(Qe-.5)-St.at;Ze-=Math.exp(-(Q*Q)/.0016)*St.strength*$*.05*(1-St.at/.75)*(j===0?1:Math.sign(j)*-1)}if(this.hand.hold>.01){const St=Qe-this.hand.x,Q=Math.exp(-(St*St)/.022)*Math.min(1,this.hand.hold)*.85;Ze+=(this.hand.y*d-Ze)*Q}const dt=Qe*f;Je===0?l.moveTo(dt,Ze):l.quadraticCurveTo(K,ce,(K+dt)/2,(ce+Ze)/2),K=dt,ce=Ze}l.lineTo(K,ce);const oe=Math.abs(j)*this.unfold,Ae=Math.round(255+(O+(q-O)*(j*.5+.5)-255)*oe),be=Math.round(255+(E+(H-E)*(j*.5+.5)-255)*oe),ve=Math.round(255+(U+(D-U)*(j*.5+.5)-255)*oe),Ye=1/(1+(I-1)*(1-this.unfold)),Oe=c.line.weight*G*(1+.35*M);l.strokeStyle=`rgb(${Ae},${be},${ve})`,l.globalAlpha=Math.min(1,.16*Ye*2.2),l.lineWidth=7*Oe,l.stroke(),l.globalAlpha=Math.min(1,.95*Math.max(Ye,.3+.7*this.unfold)),l.lineWidth=1.5*Oe,l.stroke()}}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const lg={colour:{speed:1,offset:0,palette:0,depth:.32},field:{count:3,zoom:1,sway:1,bounce:0,drift:.2,backdrop:1,return:1,glide:0},hands:{wind:1,release:1,follow:1,clap:1},sound:{wind:1,gust:1,mid:1,high:1}};function pd(s,e){s.traverse(t=>{if(t instanceof Nn||t instanceof Wh||t instanceof av){t.geometry.dispose();const r=t.material;Array.isArray(r)?r.forEach(o=>o.dispose()):r.dispose()}}),s.clear(),e.dispose(),e.forceContextLoss()}const aw="/assets/dandelion-hJsSsoAd.bin";let pa=null;function lw(){return pa||(pa=fetch(aw).then(s=>{if(!s.ok)throw new Error(`dandelion.bin: ${s.status}`);return s.arrayBuffer()}).then(cw),pa.catch(()=>{pa=null})),pa}function cw(s){const e=new DataView(s);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="DNDL")throw new Error("Not a dandelion file");const r=e.getUint32(4,!0),o=JSON.parse(new TextDecoder().decode(new Uint8Array(s,8,r))),l=8+r,c=(K,ce)=>new Float32Array(s.slice(l+K,l+K+ce*4)),f=(K,ce)=>new Int8Array(s.slice(l+K,l+K+ce)),d=(K,ce)=>new Uint8Array(s.slice(l+K,l+K+ce)),h=(K,ce)=>new Uint32Array(s.slice(l+K,l+K+ce*4)),g=K=>{const ce=o.parts[K],oe=c(ce.pos,ce.count*3),Ae=f(ce.nrm,ce.count*3),be=new Float32Array(ce.count*3);for(let ve=0;ve<be.length;ve++)be[ve]=Ae[ve]/127;return{p:ce,position:oe,normal:be,index:h(ce.idx,ce.index)}},x=["stem","base","bracts"].map(g);let m=0,_=0;for(const K of x)m+=K.p.count,_+=K.index.length;const S=new Float32Array(m*3),T=new Float32Array(m*3),y=new Float32Array(m),M=new Uint32Array(_);let w=0;{let K=0,ce=0;x.forEach((oe,Ae)=>{S.set(oe.position,K*3),T.set(oe.normal,K*3),y.fill(Ae===0?0:1,K,K+oe.p.count);for(let be=0;be<oe.index.length;be++)M[ce+be]=oe.index[be]+K;if(Ae===0)for(let be=1;be<oe.position.length;be+=3)w=Math.min(w,oe.position[be]);K+=oe.p.count,ce+=oe.index.length})}const P=new cn;P.setAttribute("position",new Gt(S,3)),P.setAttribute("normal",new Gt(T,3)),P.setAttribute("aRigid",new Gt(y,1)),P.setIndex(new Gt(M,1));const R=o.seeds,z=c(R.pivot,R.count*3),I=c(R.axis,R.count*3),O=g("achenes"),E=d(o.parts.achenes.seed,O.p.count),U=new Float32Array(O.p.count),q=new Float32Array(O.p.count*3);for(let K=0;K<O.p.count;K++){const ce=E[K];U[K]=ce,q[K*3]=z[ce*3],q[K*3+1]=z[ce*3+1],q[K*3+2]=z[ce*3+2]}const H=new cn;H.setAttribute("position",new Gt(O.position,3)),H.setAttribute("normal",new Gt(O.normal,3)),H.setAttribute("aSeed",new Gt(U,1)),H.setAttribute("aPivot",new Gt(q,3)),H.setIndex(new Gt(O.index,1));const D=R.segments,W=c(R.a,D*3),$=c(R.b,D*3),G=d(R.seed,D),ie=c(R.ta,D),X=c(R.tb,D),F=new Float32Array(D*4*3),k=new Float32Array(D*4*3),te=new Float32Array(D*4*3),N=new Float32Array(D*4*2),j=new Float32Array(D*4),Ee=new Float32Array(D*4),Se=new Uint32Array(D*6);for(let K=0;K<D;K++){const ce=G[K];for(let Ae=0;Ae<4;Ae++){const be=K*4+Ae;F.set(W.subarray(K*3,K*3+3),be*3),k.set($.subarray(K*3,K*3+3),be*3),te.set(z.subarray(ce*3,ce*3+3),be*3);const ve=Ae>>1,Ye=Ae&1?1:-1;N[be*2]=ve,N[be*2+1]=Ye,j[be]=ce,Ee[be]=ve?X[K]:ie[K]}const oe=K*4;Se.set([oe,oe+1,oe+2,oe+2,oe+1,oe+3],K*6)}const de=new cn;de.setAttribute("position",new Gt(F,3)),de.setAttribute("aB",new Gt(k,3)),de.setAttribute("aPivot",new Gt(te,3)),de.setAttribute("aCorner",new Gt(N,2)),de.setAttribute("aSeed",new Gt(j,1)),de.setAttribute("aT",new Gt(Ee,1)),de.setIndex(new Gt(Se,1));for(const K of[P,H,de])K.boundingSphere=new wo(new J(0,-5,0),1e4);return{body:P,achenes:H,strokes:de,seeds:R.count,pivot:z,axis:I,foot:w}}const mo=20,Gf=[1.4,3.2],Wf=[2.6,4.6],Ta=`
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
`,uw=`
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
}`,cg=`
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
}`,fw=`
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
}`,hw=`
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
}`,dw=`
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
}`;function Xf(s,e){let t=0,r=1/e;for(;s>0;)t+=s%e*r,s=Math.floor(s/e),r/=e;return t}function Vi(s){const e=Math.sin(s*127.1+311.7)*43758.5453;return e-Math.floor(e)}const jf=Array.from({length:mo},(s,e)=>({x:e===0?0:Xf(e+1,2)*2-1,z:e===0?0:-4.6+Xf(e,3)*6,y:e===0?.3:-.4+Xf(e,5)*1.9,k:e===0?1:.85+Vi(e)*.3,yaw:Vi(e+40)*Wn,ph:Vi(e+80)*Wn,off:e*.137%1}));class pw{constructor(e,t,r=null){B(this,"canvas");B(this,"ctx");B(this,"cfg",lg);B(this,"surface");B(this,"renderer",null);B(this,"host");B(this,"scene");B(this,"camera");B(this,"group",new ji);B(this,"depth",0);B(this,"scale",1);B(this,"look",null);B(this,"playing",new Rs(.5));B(this,"failed",!1);B(this,"model",null);B(this,"flowers",[]);B(this,"materials",[]);B(this,"started",!1);B(this,"since",0);B(this,"seedTex",null);B(this,"seedData",new Float32Array(0));B(this,"off",new Float32Array(0));B(this,"vel",new Float32Array(0));B(this,"turn",new Float32Array(0));B(this,"hold",new Float32Array(0));B(this,"away",new Uint8Array(0));B(this,"thresh",new Float32Array(0));B(this,"flight",new Float32Array(0));B(this,"dest",new Float32Array(0));B(this,"phase",new Float32Array(0));B(this,"motionTime",0);B(this,"colourTime",0);B(this,"gust",0);B(this,"pace",0);B(this,"levelE",0);B(this,"lastBeat",!1);B(this,"lastClap",!1);B(this,"hop",0);B(this,"dance",0);B(this,"sinceClap",99);B(this,"lastAim",{x:0,y:0});B(this,"swipe",new Nt);B(this,"present",0);B(this,"strokeWidth",null);B(this,"viewport",null);B(this,"time",null);this.canvas=e,this.ctx=t,this.host=r,this.scene=r?r.scene:new Sc,this.camera=r?r.camera:new ai(30,16/9,.1,200),this.surface=document.createElement("canvas");try{r||(this.renderer=hd(this.surface)),this.look=r?r.look:new wv}catch(o){console.error("Dandelion could not start:",o),this.failed=!0;return}lw().then(o=>{this.look&&this.build(o)}).catch(o=>{console.error("Dandelion model failed to load:",o),this.failed=!0})}setParams(e){this.cfg=bs(lg,e)}isReady(){return this.model!==null||this.failed}build(e){const t=this.look,r=e.seeds,o=r*mo;this.seedData=new Float32Array(r*2*mo*4),this.seedTex=new rv(this.seedData,r*2,mo,bi,Xi),this.seedTex.magFilter=vn,this.seedTex.minFilter=vn,this.seedTex.needsUpdate=!0,this.off=new Float32Array(o*3),this.vel=new Float32Array(o*3),this.turn=new Float32Array(o*4);for(let g=0;g<o;g++)this.turn[g*4+3]=1;this.hold=new Float32Array(o),this.away=new Uint8Array(o),this.thresh=new Float32Array(o),this.flight=new Float32Array(o),this.dest=new Float32Array(o*3),this.phase=new Float32Array(o);for(let g=0;g<o;g++)this.thresh[g]=.12+Vi(g*3.7+1)*1,this.phase[g]=Vi(g*1.3+7)*Wn;const l={value:new Nt(1,1)},c={value:0},f={value:e.foot},d={value:this.seedTex},h={value:1.5};this.strokeWidth=h,this.viewport=l,this.time=c;for(let g=0;g<mo;g++){const x=t.shared(),m={uBend:{value:new J},uWave:{value:new Nt},uWavePhase:{value:0},uRow:{value:g},uShimmer:{value:0}},_={...x,...m,uViewport:l,uTime:c,uFoot:f,uSeeds:d},S=(M,w,P={})=>{const R=new gi({vertexShader:M,fragmentShader:w,uniforms:{..._,...P},side:Gi});return this.materials.push(R),R},T=new ji;T.add(new Nn(e.body,S(uw,cg))),T.add(new Nn(e.achenes,S(fw,cg)));const y=S(hw,dw,{uWidth:h});y.transparent=!0,y.depthWrite=!1,T.add(new Nn(e.strokes,y));for(const M of T.children)M.frustumCulled=!1;T.visible=!1,this.group.add(T),this.flowers.push({root:T,shared:x,u:m,presence:0,at:new J,size:1,placed:!1,bend:new Nt})}this.scene.add(this.group),this.model=e}pickDestination(e,t,r){const o=-4+Math.random()*6,l=(15.5-o)*t;this.dest[e*3]=(Math.random()*2-1)*l*r*.92,this.dest[e*3+1]=.1+(Math.random()*1.75-.85)*l,this.dest[e*3+2]=o}destroy(){var e,t;this.host||(e=this.look)==null||e.dispose(),this.look=null,(t=this.seedTex)==null||t.dispose();for(const r of this.materials)r.dispose();for(const r of this.flowers)r.root.clear();this.scene.remove(this.group),this.renderer&&pd(this.scene,this.renderer),this.renderer=null}render(e,t,r){const{ctx:o,cfg:l}=this,c=this.canvas.width,f=this.canvas.height;if(c===0||f===0)return;const d=this.renderer;if(this.failed||!d||!this.look){dd(o,c,f,"DANDELION");return}bv(o,c,f,l.field.backdrop),this.model&&(Tv(this.camera,c,f),this.camera.position.set(0,.5,15.5/Math.max(.3,l.field.zoom)),this.camera.lookAt(0,.1,0),this.update(e,t,r,c,f),(this.surface.width!==c||this.surface.height!==f)&&d.setSize(c,f,!1),d.render(this.scene,this.camera),o.drawImage(this.surface,0,0,c,f))}update(e,t,r,o,l){const{cfg:c}=this,f=this.look,d=this.model;if(!f||!d||this.failed)return;const h=this.playing;h.read(e,r);const{dt:g}=h,x=Math.max(0,c.field.glide??0),m=le=>x>0?1-Math.exp(-g/(le*x)):1;this.pace+=(Math.max(0,h.step)-this.pace)*m(1.4);const _=x>0?Math.max(this.pace,g*.35):Math.max(0,h.step),S=e.left||e.right?1:0;this.present+=(S-this.present)*(1-Math.exp(-g*3));const T=Math.min(1,((r==null?void 0:r.overall)??0)*1.4)*c.sound.wind;this.levelE+=(T-this.levelE)*m(.9);const y=x>0?this.levelE:T;this.motionTime+=_,this.colourTime+=(_*c.colour.speed*(1+h.mid*c.sound.mid*1.2)+g*h.burst*c.hands.clap*.9)/lc;const M=this.motionTime,w=!!(r!=null&&r.beat),P=w&&!this.lastBeat,R=P&&c.sound.gust>0;this.hop=Math.max(this.hop*Math.exp(-g*5),P?(r==null?void 0:r.beatIntensity)||1:0),this.dance+=_,this.lastBeat=w,R&&(this.gust=Math.max(this.gust,((r==null?void 0:r.beatIntensity)||1)*c.sound.gust)),this.gust*=Math.exp(-g*2.5);const z=!!e.clapping&&c.hands.clap>0,I=z&&!this.lastClap;this.lastClap=z,this.sinceClap+=g;const O=Math.min(1,this.sinceClap/4)**3;I&&(this.sinceClap=0);const E=h.aim.x-this.lastAim.x,U=h.aim.y-this.lastAim.y;this.lastAim={x:h.aim.x,y:h.aim.y};const q=S?E/Math.max(g,.001):0,H=S?U/Math.max(g,.001):0;this.swipe.x+=(q-this.swipe.x)*(1-Math.exp(-g*6)),this.swipe.y+=(H-this.swipe.y)*(1-Math.exp(-g*6));const D=.5*Math.sin(M*.11)+.25*Math.sin(M*.27+1.3),W=.25+y*1.6+this.gust*1.2,$=new J(Math.cos(D)*W,.15*Math.sin(M*.19),Math.sin(D)*W*.4);$.x+=uf.clamp(this.swipe.x,-4,4)*1.6*c.hands.wind,$.y+=uf.clamp(this.swipe.y,-4,4)*1*c.hands.wind;const G=S?uf.clamp((h.openness-.6)/.4,-1,1)*c.hands.release:0,ie=c.field.drift,X=Math.min(1,ie*2),F=Math.sqrt(Math.min(1,3/Math.max(1,Math.round(c.field.count)))),k=Math.min(.72,F*(ie*(.25+y*.45)+G*.3*this.present*X)),te=O*Math.min(1,c.hands.clap)*X*F,N=Math.max(.25,c.field.return??1),j=Math.min(1,k*5),Ee=S&&h.openness<.15&&c.hands.release>0,Se=!this.started;this.host||f.update(t,c.colour.palette,g,Se);const de=Math.tan(this.camera.fov/2*Math.PI/180),K=o/l,ce=Math.max(0,Math.min(mo,Math.round(c.field.count))),oe=Math.max(1,ce);this.since+=g;const Ae=Sv(this.since,ce),be=2.2*Math.pow(oe,-.42)*this.scale;let ve=0;for(let le=0;le<oe;le++)ve+=jf[le].x;ve/=oe;let Ye=0;for(let le=0;le<oe;le++)Ye=Math.max(Ye,Math.abs(jf[le].x-ve));const Oe=new J(h.aim.x*5.2,.1+h.aim.y*3,2),Je=1.2*Math.max(.4,1+(h.spread-.4)*1.6),Qe=d.seeds,st=new J,Ze=new rr,dt=new rr,St=new rr,Q=new J,ft=new J(0,1,0),pe=new J(1,0,0),Ce=this.seedData;this.flowers.forEach((le,nt)=>{const L=jf[nt],A=nt<Ae;if(le.presence+=((A?1:0)-le.presence)*(1-Math.exp(-g*1.4)),Se&&(le.presence=0),!A&&le.presence<.004&&(le.presence=0),le.root.visible=le.presence>.002,!le.root.visible){le.placed=!1,this.off.fill(0,nt*Qe*3,(nt+1)*Qe*3),this.vel.fill(0,nt*Qe*3,(nt+1)*Qe*3),this.away.fill(0,nt*Qe,(nt+1)*Qe),this.flight.fill(0,nt*Qe,(nt+1)*Qe);return}const se=be*L.k,ye=(oe===1?0:L.z)+this.depth,Te=(15.5-ye)*de*K,Ne=oe===1?0:(L.x-ve)/Math.max(.5,Ye)*Te*(.66+.24*Math.min(1,(oe-1)/12)),He=.1-(15.5-ye)*de,ge=.1+(15.5-ye)*de;let Me=oe===1?L.y:L.y*Math.min(1,.5+oe*.1);Me=Math.min(Me,He-d.foot*se-.4,ge-se*1.5),st.set(Ne,Me,ye),le.placed||(le.at.copy(st),le.size=se,le.placed=!0),le.at.lerp(st,1-Math.exp(-g*1.2)),le.size+=(se-le.size)*(1-Math.exp(-g*1.2));const Ve=1-Math.pow(1-le.presence,3);le.root.position.set(le.at.x,le.at.y-(1-Ve)*-d.foot*le.size*.8,le.at.z),le.root.rotation.y=L.yaw,le.root.scale.setScalar(le.size*(.6+.4*Ve));const Ge=le.root.scale.x,Ie=Math.cos(L.yaw),Le=Math.sin(L.yaw),ht=this.dance,gt=le.at.x*.35,Et=c.field.sway*(.45+y*1),Y=Et*(.85*Math.sin(Wn*ht/5.2-gt+L.ph*.3)+.15*Math.sin(Wn*ht/3.3+L.ph*1.7))+$.x*.22+this.gust*.5,ke=Et*.3*Math.sin(Wn*ht/7.1+L.ph*2.3)+$.z*.22;le.bend.x+=(Y-le.bend.x)*(1-Math.exp(-g*1.6)),le.bend.y+=(ke-le.bend.y)*(1-Math.exp(-g*1.6));const _e=le.bend.x,Xe=le.bend.y;le.u.uBend.value.set(_e*Ie-Xe*Le,0,_e*Le+Xe*Ie);const we=c.field.sway*(.12+y*.3);le.u.uWave.value.set(we*Ie,we*Le),le.u.uWavePhase.value=Wn*ht/1.6-gt*2+L.ph;const xe=c.field.bounce*le.size*((.08+y*.22)*Math.sin(Wn*ht/1.2-gt+L.ph)+.3*this.hop*(.6+.4*Vi(nt+7)));le.root.position.y+=xe,le.u.uShimmer.value=h.high*c.sound.high*2;const We=le.root.position.x+_e*Ge,ct=le.root.position.y,Lt=le.root.position.z+Xe*Ge;for(let Ft=0;Ft<Qe;Ft++){const yt=nt*Qe+Ft,Yt=yt*3;I&&Vi(yt*1.37+M*7.3)<te?this.hold[yt]=(Wf[0]+Vi(yt+M)*(Wf[1]-Wf[0]))/N:R&&Vi(yt*.71+M*13.1)<.008*c.sound.gust*ie*F&&(this.hold[yt]=(Gf[0]+Vi(yt+M*3.1)*(Gf[1]-Gf[0]))/N),this.hold[yt]=Math.max(0,this.hold[yt]-g);const jn=.06*j*Math.sin(M*.37+this.phase[yt]);Ee&&(this.flight[yt]=0);const Kn=!Ee&&(this.hold[yt]>0||this.flight[yt]>0||k+jn>this.thresh[yt]),vi=d.pivot[Ft*3],$n=d.pivot[Ft*3+1],Ci=d.pivot[Ft*3+2],Ri=d.axis[Ft*3],Fn=d.axis[Ft*3+1],ei=d.axis[Ft*3+2],Ki=Ri*Ie+ei*Le,Pi=-Ri*Le+ei*Ie;if(Kn&&!this.away[yt]){this.flight[yt]=(6+Math.random()*6)/N,this.pickDestination(yt,de,K);const re=.4+(I&&this.hold[yt]>0?3.2*c.hands.clap*O:0);this.vel[Yt]+=Ki*re,this.vel[Yt+1]+=Fn*re+.2,this.vel[Yt+2]+=Pi*re}this.away[yt]=Kn?1:0;let yn=this.off[Yt],bn=this.off[Yt+1],Cn=this.off[Yt+2],Rn=this.vel[Yt],kn=this.vel[Yt+1],ot=this.vel[Yt+2];if(_>0||Kn){const re=Math.max(_,0),ae=We+(vi*Ie+Ci*Le)*Ge+yn,Fe=ct+$n*Ge+bn,je=Lt+(-vi*Le+Ci*Ie)*Ge+Cn,Be=Math.sin(Fe*.9+M*.7+this.phase[yt])*.6,it=Math.sin(ae*.7-M*.5+this.phase[yt]*.5)*.45,at=Math.sin(je*.8+ae*.5+M*.6)*.4;if(Kn){this.flight[yt]=Math.max(0,this.flight[yt]-re);const mt=yt*3;let vt=this.dest[mt]-ae,et=this.dest[mt+1]-Fe,Rt=this.dest[mt+2]-je;const Ot=Math.hypot(vt,et,Rt);Ot<.8&&this.pickDestination(yt,de,K);const jt=(1.2+.9*Vi(yt*2.9))*Math.min(1,Ot/2);vt=vt/Math.max(Ot,.001)*jt,et=et/Math.max(Ot,.001)*jt,Rt=Rt/Math.max(Ot,.001)*jt;let zt=(vt-Rn)*.7+$.x*.3+Be*.8,en=(et-kn)*.7+$.y*.3+it*.8+.05,Ke=(Rt-ot)*.7+$.z*.3+at*.6;if(this.present>.01&&c.hands.follow>0){const ci=Oe.x-ae,Bt=Oe.y-Fe,Qt=Oe.z-je,Mn=Math.hypot(ci,Bt,Qt)+.001,Ht=this.present*c.hands.follow*Math.min(1,Mn/Je-.6);zt+=ci/Mn*Ht*2.2-Bt/Mn*this.present*c.hands.follow*1.4,en+=Bt/Mn*Ht*2.2+ci/Mn*this.present*c.hands.follow*1.4,Ke+=Qt/Mn*Ht*1.2}const un=(15.5-je)*de,Pt=un*K,Pn=Math.abs(ae)-Pt*1.02;Pn>0&&(zt-=Math.sign(ae)*Pn*1.5);const Ln=Math.abs(Fe-.1)-un*1.02;Ln>0&&(en-=Math.sign(Fe-.1)*Ln*1.5),je>6&&(Ke-=(je-6)*1.5),je<-8&&(Ke+=(-8-je)*1.5),Rn+=zt*re*1.6,kn+=en*re*1.6,ot+=Ke*re*1.6;const bt=Math.exp(-re*.5);Rn*=bt,kn*=bt,ot*=bt}else{const mt=Math.hypot(yn,bn,Cn),vt=Math.min(1.8*N,mt*.9*N)/Math.max(mt,1e-4),et=-yn*vt+Be*Math.min(1,mt)*.6,Rt=-bn*vt+it*Math.min(1,mt)*.6,Ot=-Cn*vt+at*Math.min(1,mt)*.6,jt=1-Math.exp(-re*2.4);Rn+=(et-Rn)*jt,kn+=(Rt-kn)*jt,ot+=(Ot-ot)*jt,mt<.004&&Math.hypot(Rn,kn,ot)<.02&&(yn=bn=Cn=Rn=kn=ot=0)}yn+=Rn*re,bn+=kn*re,Cn+=ot*re}this.off[Yt]=yn,this.off[Yt+1]=bn,this.off[Yt+2]=Cn,this.vel[Yt]=Rn,this.vel[Yt+1]=kn,this.vel[Yt+2]=ot;const wt=Math.hypot(yn,bn,Cn)/Ge,dn=Math.min(1,wt/.8),pn=this.turn.subarray(yt*4,yt*4+4);if(Ze.set(pn[0],pn[1],pn[2],pn[3]),dn>.001){Q.set(Ri,Fn,ei),St.setFromUnitVectors(Q,ft);const re=M*.6+this.phase[yt];dt.setFromAxisAngle(ft,re),St.premultiply(dt),dt.setFromAxisAngle(pe,.3*Math.sin(M*1.3+this.phase[yt]*2)),St.premultiply(dt),dt.identity().slerp(St,dn),Ze.slerp(dt,1-Math.exp(-g*3))}else Ze.slerp(dt.identity(),1-Math.exp(-g*6));pn[0]=Ze.x,pn[1]=Ze.y,pn[2]=Ze.z,pn[3]=Ze.w;const C=(nt*Qe*2+Ft*2)*4,ee=(yn*Ie-Cn*Le)/Ge,he=(yn*Le+Cn*Ie)/Ge;Ce[C]=ee,Ce[C+1]=bn/Ge,Ce[C+2]=he,Ce[C+3]=1-Math.min(1,wt/.6),Ce[C+4]=Ze.x,Ce[C+5]=Ze.y,Ce[C+6]=Ze.z,Ce[C+7]=Ze.w}const Ct=le.shared;Ct.uT.value=this.colourTime,Ct.uOff.value=L.off+c.colour.offset,f.apply(Ct,c.colour.depth,.16*(1+h.high*c.sound.high*2))}),this.started=!0,this.seedTex.needsUpdate=!0,this.viewport.value.set(o,l),this.time.value=M,this.strokeWidth.value=Math.max(1,l/620)}}const ug={colour:{speed:1,offset:0,palette:0,style:0,depth:.32},swarm:{count:4,zoom:1,height:0,size:1,drift:1,pulse:1,tentacles:1,backdrop:1,arrival:5},hands:{follow:1,spread:1,clap:1},sound:{beat:1,bass:1,mid:1,high:1,flow:1,swell:0}};class mw{constructor(e,t,r=120,o=20){B(this,"mesh");B(this,"curve");B(this,"position");B(this,"normal");B(this,"points",[]);B(this,"tangents",[]);this.anchors=t,this.length=r,this.sides=o,this.curve=new Gy(t,!1,"centripetal");const l=(r+1)*(o+1),c=new cn;this.position=new Gt(new Float32Array(l*3),3),this.normal=new Gt(new Float32Array(l*3),3),this.position.setUsage(t0),this.normal.setUsage(t0);const f=new Float32Array(l*2),d=[];for(let h=0;h<=r;h++)for(let g=0;g<=o;g++){const x=h*(o+1)+g;if(f[x*2]=h/r,f[x*2+1]=g/o,h<r&&g<o){const m=x,_=x+o+1;d.push(m,_,m+1,_,_+1,m+1)}}c.setAttribute("position",this.position),c.setAttribute("normal",this.normal),c.setAttribute("uv",new Gt(f,2)),c.setIndex(d);for(let h=0;h<=r;h++)this.points.push(new J),this.tangents.push(new J);this.mesh=new Nn(c,e),this.mesh.frustumCulled=!1}update(e,t=1){const{curve:r,points:o,tangents:l,length:c,sides:f}=this;r.updateArcLengths();for(let S=0;S<=c;S++)r.getPointAt(S/c,o[S]);for(let S=0;S<=c;S++){const T=o[Math.max(0,S-1)],y=o[Math.min(c,S+1)];l[S].subVectors(y,T).normalize()}const d=new J,h=new J,g=new J,x=l[0];d.set(0,0,1).addScaledVector(x,-x.z),d.lengthSq()<1e-6&&d.set(1,0,0).addScaledVector(x,-x.x),d.normalize();const m=this.position.array,_=this.normal.array;for(let S=0;S<=c;S++){const T=l[S];d.addScaledVector(T,-d.dot(T)).normalize(),h.crossVectors(T,d);const y=o[S],M=e*(1+(t-1)*(S/c));for(let w=0;w<=f;w++){const P=w/f*Wn;g.copy(d).multiplyScalar(-Math.cos(P)).addScaledVector(h,Math.sin(P));const R=(S*(f+1)+w)*3;m[R]=y.x+g.x*M,m[R+1]=y.y+g.y*M,m[R+2]=y.z+g.z*M,_[R]=g.x,_[R+1]=g.y,_[R+2]=g.z}}this.position.needsUpdate=!0,this.normal.needsUpdate=!0}}const fg=9,ec=8,hg=4,tc=9,dg=[{c:[.2,.9,0],a:[1.6,.5,.8],s:1.25,off:0,ph:0,pulses:6},{c:[-3.9,1.5,-1.2],a:[1.2,.6,.8],s:1,off:.37,ph:2.1,pulses:7},{c:[4.1,.4,-.8],a:[1.1,.7,.6],s:1.05,off:.71,ph:4,pulses:5},{c:[-2,-.9,1.2],a:[1.4,.4,.5],s:.8,off:.18,ph:1,pulses:8},{c:[2.4,2.4,-3],a:[1.3,.5,.8],s:.85,off:.55,ph:3.2,pulses:6},{c:[-5.6,-.4,-2.6],a:[.9,.6,.6],s:.8,off:.86,ph:5,pulses:7},{c:[5.8,2,-4],a:[.8,.5,.6],s:.7,off:.28,ph:.6,pulses:9},{c:[-.6,2.7,-5],a:[1.6,.4,.8],s:.7,off:.63,ph:2.7,pulses:8}],gw=[[],[0],[1,2],[0,1,2],[0,1,2,3],[0,1,2,3,4],[0,1,2,3,4,5],[0,1,2,3,4,5,6],[0,1,2,3,4,5,6,7]],Kf=.62,vw=.55;function pg(s,e,t=new J){return t.set(Math.sin(s)*.86*Math.cos(e),-.86*Math.sin(e)+.04,Math.cos(s)*.86*Math.cos(e))}function xw(s){const e=(s/Wn%1+1)%1;return e<.22?Math.sin(e/.22*(Math.PI/2)):.5+.5*Math.cos((e-.22)/.78*Math.PI)}class _w{constructor(e,t,r=null){B(this,"canvas");B(this,"ctx");B(this,"cfg",ug);B(this,"host");B(this,"surface");B(this,"renderer",null);B(this,"scene");B(this,"camera");B(this,"look",null);B(this,"group",new ji);B(this,"swarm",[]);B(this,"geometries",[]);B(this,"failed",!1);B(this,"playing",new Rs(.6));B(this,"motionTime",0);B(this,"pace",1);B(this,"handHold",0);B(this,"colourTime",0);B(this,"started",!1);B(this,"since",0);B(this,"current",0);B(this,"carry",0);B(this,"swell",0);B(this,"bassAvg",0);this.canvas=e,this.ctx=t,this.host=r,this.surface=document.createElement("canvas"),this.scene=r?r.scene:new Sc,this.camera=r?r.camera:new ai(30,16/9,.1,100);try{r||(this.renderer=hd(this.surface)),this.look=r?r.look:new wv,this.build(this.look)}catch(o){console.error("Jellyfish could not start:",o),this.failed=!0}}setParams(e){this.cfg=bs(ug,e)}build(e){const t=new _c(1,44,30),r=new _c(1,40,26);this.geometries.push(t,r),this.scene.add(this.group);for(const o of dg){const l=e.shared(),c=e.shared(),f=new ji;this.group.add(f);const d=[],h=[];for(let _=0;_<fg;_++){const S=_/fg*Wn,T=new ji;T.rotation.y=S;const y=new ji;y.rotation.x=Kf,T.add(y);const M=new Nn(t,e.material(tw,l,{uAng:{value:S}}));M.scale.set(.42,.18,.52),M.position.set(0,_*5%3*.02,.48),y.add(M),f.add(T),d.push(y),h.push(M)}const g=new Nn(r,e.material(iw,l));g.scale.set(.44,.26,.44),g.position.y=-.1,f.add(g);const x=[],m=e.material(nw,c,{uWS:{value:.6}});for(let _=0;_<ec+hg;_++){const S=_>=ec,T=S?(_-ec)/hg*Wn+.4:_/ec*Wn+.2,y=S?new J(Math.sin(T)*.08,-.25,Math.cos(T)*.08):pg(T,Kf),M=Array.from({length:tc},()=>new J),w=new mw(m,M,S?48:64,S?10:6);this.group.add(w.mesh),x.push({tube:w,from:y,links:M,angle:S?null:T,link:S?.2:.42,radius:S?.085:.028,phase:T*1.7+_})}this.swarm.push({spec:o,root:f,tilts:d,lobes:h,cap:g,strands:x,shared:l,strandShared:c,presence:0,beat:o.ph,lift:0,rise:0,pull:new J,up:new J(0,1,0),last:null,primed:!1})}}destroy(){var e;this.host||(e=this.look)==null||e.dispose(),this.look=null;for(const t of this.geometries)t.dispose();this.host?(this.scene.remove(this.group),this.group.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose())})):this.renderer&&pd(this.scene,this.renderer),this.renderer=null}render(e,t,r){const{ctx:o,cfg:l}=this,c=this.canvas.width,f=this.canvas.height;if(c===0||f===0)return;const d=this.renderer;if(this.failed||!d||!this.look){dd(o,c,f,"JELLYFISH");return}Tv(this.camera,c,f);const h=-l.swarm.height*4.5;this.camera.position.set(0,.5+h,15.5/Math.max(.3,l.swarm.zoom)),this.camera.lookAt(0,.1+h,0),this.update(e,t,r),(this.surface.width!==c||this.surface.height!==f)&&d.setSize(c,f,!1),d.render(this.scene,this.camera),this.look.backdrop(o,c,f,l.swarm.backdrop),o.drawImage(this.surface,0,0,c,f)}update(e,t,r){const{cfg:o}=this,l=this.look;if(!l||this.failed)return;const c=this.playing;c.read(e,r);const{dt:f}=c;this.pace+=(Math.max(0,c.step)-this.pace)*(1-Math.exp(-f*.6));const d=this.pace*.6,h=c.burst*o.hands.clap,g=c.bump*o.sound.beat,x=!e.synthetic&&(e.left||e.right)?1:0;this.handHold+=(x-this.handHold)*(1-Math.exp(-f*3)),this.motionTime+=d,this.colourTime+=(d*o.colour.speed*(1+c.mid*o.sound.mid*1.2)+f*h*.9)/lc;const m=this.motionTime,_=Wn*m/lc,S=Math.max(0,Math.min(8,Math.round(o.swarm.count))),T=!this.started;this.host||l.update(t,o.colour.palette,f,T,o.colour.style),this.since+=f;const y=new Set(gw[S].slice(0,Sv(this.since*.55*(5/Math.max(1,o.swarm.arrival)),S)));T&&(this.started=!0,this.swarm.forEach(F=>{F.presence=0}));const M=r!=null&&r.live?r.bass:0,w=Math.max(0,M-this.bassAvg-.12);this.bassAvg+=(M-this.bassAvg)*(1-Math.exp(-f*.5));const P=Math.min(1,w*2.2)*o.sound.swell;this.swell+=(P-this.swell)*(1-Math.exp(-f*(P>this.swell?2.5:.45)));const R=(x?Math.max(.3,1+(c.spread-.4)*o.hands.spread*1.6):1)*(1+this.swell*.9),z=new J(c.aim.x*4.6,c.aim.y*2.1,0).multiplyScalar(o.hands.follow*x),I=o.swarm.drift*(1+c.bass*o.sound.bass*.8),E=!!(r!=null&&r.live)?.35+.65*c.energy+.4*c.mid:.35;this.carry+=(o.sound.flow*E-this.carry)*(1-Math.exp(-f*.35)),this.current+=d*(.18+.5*this.carry);const U=.16*(1+c.high*o.sound.high*2.5),q=1+c.high*o.sound.high*1.5,H=o.swarm.size,D=new J,W=new rr,$=new J(0,1,0),G=new J,ie=new J,X=new J;this.swarm.forEach((F,k)=>{const te=y.has(k)?1:0;F.presence=te>F.presence?Math.min(te,F.presence+f/Math.max(1,o.swarm.arrival)):Math.max(te,F.presence-f/3),F.presence<.004&&te===0&&(F.presence=0);const N=F.presence>.002;F.root.visible=N;for(const ft of F.strands)ft.tube.mesh.visible=N;if(!N){F.last=null,F.primed=!1;return}const j=F.spec;F.beat+=d*Wn*(j.pulses/lc)+f*h*Wn*1.5;const Ee=xw(F.beat),Se=Math.min(1.3,Math.max(Ee,g*.7)+h*.4),de=(F.grip??0)+(c.fist-(F.grip??0))*(1-Math.exp(-f*(7-k*.7))),K=Math.max(0,(de-(F.gripWas??de))/Math.max(f,.001));F.gripWas=de,F.grip=de;const ce=this.handHold,oe=(Se*(1-ce)+de*ce)*o.swarm.pulse,Ae=(Math.min(1.3,Ee+g*.15+h*.4+this.swell*.5)*(1-ce)+Math.min(1.3,K*.35)*ce)*o.swarm.pulse,be=F.presence*F.presence;F.rise+=(Ae*1.5*be-F.rise*1.2)*f,F.lift+=(F.rise-F.lift*.35)*f*.8,D.set(j.c[0]*R+j.a[0]*I*Math.sin(_+j.ph),j.c[1]*Math.min(1.4,R)+j.a[1]*I*Math.sin(2*_+j.ph*1.7),j.c[2]+j.a[2]*I*Math.cos(_+j.ph*.6));const ve=this.current-k*.35;D.x+=Math.sin(ve+j.ph*.5)*.9*this.carry,D.y+=Math.sin(ve*.63+j.ph)*.3*this.carry,D.z+=Math.cos(ve*.8+j.ph*1.3)*.5*this.carry;const Ye=.8+1.6*(1-k/dg.length);F.pull.lerp(z,1-Math.exp(-f*Ye)),D.add(F.pull),h>.001&&(G.set(D.x,D.y-.5,0),G.lengthSq()<.01&&G.set(k%2?1:-1,.4,0),D.addScaledVector(G.normalize(),h*2.6));{const ft=F.presence,pe=.15+.85*ft*ft*ft,Ce=j.c[0]*R,le=j.c[2];D.x=Ce+(D.x-Ce)*pe,D.z=le+(D.z-le)*pe}if(F.last){G.subVectors(D,F.last).divideScalar(Math.max(f,.001));const ft=new J(G.x*.12,1,G.z*.08).normalize();F.up.lerp(ft,1-Math.exp(-f*1.5)).normalize()}F.last=(F.last??new J).copy(D),D.addScaledVector(F.up,F.lift-.6);const Oe=F.presence,Je=Oe*Oe*Oe*(Oe*(Oe*6-15)+10);D.y-=(1-Je)*7,D.y-=.9;const Qe=j.s*H*(.3+.7*Je)*(1+c.bass*o.sound.bass*.08+g*.04);{const ft=this.camera.position,pe=Math.tan(this.camera.fov*Math.PI/360)*Math.max(1,ft.z-D.z),le=ft.y+pe-1.5*Qe-.8;D.y>le&&(D.y=le+.8*(1-Math.exp(-(D.y-le)/.8)))}F.root.position.copy(D),W.setFromUnitVectors($,F.up),F.root.quaternion.copy(W),F.root.rotateY(Math.sin(_+j.ph)*.4*F.presence),F.root.scale.setScalar(Qe);const st=Kf+vw*oe;for(const ft of F.tilts)ft.rotation.x=st;for(const ft of F.lobes)ft.scale.y=.18*(1-.18*oe);F.cap.scale.set(.44*(1-.2*oe),.26*(1+.08*oe),.44*(1-.2*oe)),F.root.updateMatrix();const Ze=o.swarm.tentacles,dt=F.up.clone().negate();ie.set(1,0,0).applyQuaternion(F.root.quaternion);for(const ft of F.strands){const pe=ft.links;ft.angle!==null&&pg(ft.angle,st,ft.from);const Ce=pe[0].copy(ft.from).applyMatrix4(F.root.matrix);if(!F.primed)for(let le=1;le<tc;le++)pe[le].copy(Ce).addScaledVector(dt,ft.link*Qe*Ze*le);for(let le=1;le<tc;le++){const nt=pe[le-1],L=pe[le];G.subVectors(L,nt),G.lengthSq()<1e-8&&G.copy(dt),G.normalize().lerp(dt,.22+.1*oe).normalize();const A=Math.sin(ft.phase+_*3*q-le*.75)*.06*q*(le/tc);G.addScaledVector(ie,A).normalize(),L.copy(nt).addScaledVector(G,ft.link*Qe*Ze)}ft.tube.update(ft.radius*Qe,.25)}F.primed=!0;const St=F.shared;St.uT.value=this.colourTime,St.uOff.value=j.off+o.colour.offset,St.uWA.value=1,St.uWB.value=.6,St.uWC.value=.8+.4*Math.sin(_+j.ph);const Q=F.strandShared;Q.uT.value=this.colourTime,Q.uOff.value=j.off+.15+o.colour.offset,l.apply(St,o.colour.depth,U),l.apply(Q,o.colour.depth,U)}),this.scene.updateMatrixWorld(!0),this.camera.updateMatrixWorld(!0);for(const F of this.swarm)F.root.visible&&(F.cap.getWorldPosition(X),X.applyMatrix4(this.camera.matrixWorldInverse),F.shared.uCenter.value.copy(X))}}const mg={grid:{detail:.5,field:.5,figure:.4,words:1,zoom:1},hands:{light:1,close:1,clap:1},sound:{beat:1,quiet:1}};let Kh=null,Cv=0,cc=0;function yw(){cc++;let s=!1;return()=>{s||(s=!0,cc=Math.max(0,cc-1))}}function Mw(){return cc>0}function Sw(s,e,t){if(s.length<e*t)return;const r=new Uint8Array(e*t);for(let o=0;o<t;o++)for(let l=0;l<e;l++)r[o*e+l]=s[o*e+(e-1-l)];Kh={data:r,width:e,height:t},Cv=performance.now()}const Aw=4e3;function Ew(){return Kh&&performance.now()-Cv<Aw?Kh:null}function ww(s,e,t){const r=Math.min(s.width-1.001,Math.max(0,e*(s.width-1))),o=Math.min(s.height-1.001,Math.max(0,t*(s.height-1))),l=Math.floor(r),c=Math.floor(o),f=r-l,d=o-c,h=c*s.width+l,g=s.data[h],x=s.data[h+1],m=s.data[h+s.width],_=s.data[h+s.width+1];return(g+(x-g)*f+(m-g)*d+(g-x-m+_)*f*d)/255}const ma=8;function gg(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(r=>r+r).join(""):e;return[parseInt(t.slice(0,2),16)||0,parseInt(t.slice(2,4),16)||0,parseInt(t.slice(4,6),16)||0]}class Tw{constructor(e,t){B(this,"canvas");B(this,"ctx");B(this,"cfg",mg);B(this,"playing",new Rs(.6));B(this,"lit",new Float32Array(0));B(this,"columns",0);B(this,"rows",0);B(this,"time",0);B(this,"real",0);B(this,"closed",0);B(this,"focus",{x:.89,y:.5});B(this,"rings",[]);B(this,"lastKick",0);B(this,"breath",0);B(this,"release",null);B(this,"glow",document.createElement("canvas"));B(this,"glowKey","");this.canvas=e,this.ctx=t}setParams(e){this.cfg=bs(mg,e)}destroy(){var e;(e=this.release)==null||e.call(this),this.release=null}tint(e){if(e===this.glowKey)return;this.glowKey=e;const[t,r,o]=gg(e);this.glow.width=this.glow.height=96;const l=this.glow.getContext("2d");l.clearRect(0,0,96,96);const c=l.createRadialGradient(48,48,0,48,48,48),f=d=>Math.round(d+(255-d)*.6);c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(.1,`rgba(${f(t)},${f(r)},${f(o)},0.9)`),c.addColorStop(.35,`rgba(${t},${r},${o},0.25)`),c.addColorStop(1,`rgba(${t},${r},${o},0)`),l.fillStyle=c,l.fillRect(0,0,96,96)}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;const h=f/d,g=this.playing;g.read(e,r);const{dt:x}=g,m=Math.min(.08,Math.max(0,g.step));this.time+=m,this.real+=x;const _=ve=>1-Math.exp(-x*ve);this.tint(t[0]??"#8fb4ff"),c.grid.figure>.01&&!this.release&&(this.release=yw()),c.grid.figure<=.01&&this.release&&(this.release(),this.release=null);const S=Math.round(Math.max(8,Math.min(150,(22+34*Math.max(0,Math.min(1,c.grid.detail)))/Math.max(.2,c.grid.zoom)))),T=Math.round(S*h);(S!==this.rows||T!==this.columns)&&(this.rows=S,this.columns=T,this.lit=new Float32Array(S*T));const y=1/S,M=[e.left,e.right].filter(Boolean),w=M.length>0&&!e.synthetic;let P=M.map(ve=>{const Ye=ve.openness??(ve.gesture==="fist"?0:1),Oe=ve.depth??.35;return{x:ve.position.x*h,y:ve.position.y,reach:(.04+.19*Ye*Ye)*c.hands.light*(.8+.6*Oe),power:.85+.5*Oe}});if(P.length&&!w&&(P=[{x:P.reduce((ve,Ye)=>ve+Ye.x,0)/P.length,y:P.reduce((ve,Ye)=>ve+Ye.y,0)/P.length,reach:.13*c.hands.light,power:.7}]),P.length){const ve=P.reduce((Oe,Je)=>Oe+Je.x,0)/P.length,Ye=P.reduce((Oe,Je)=>Oe+Je.y,0)/P.length;this.focus.x+=(ve-this.focus.x)*_(6),this.focus.y+=(Ye-this.focus.y)*_(6)}else this.focus.x+=(h/2-this.focus.x)*_(.8),this.focus.y+=(.5-this.focus.y)*_(.8);const R=!!(r!=null&&r.live);let z=0;w?z=g.fist*c.hands.close:R&&(z=Math.max(0,Math.min(.8,(.3-g.energy)*3.2))*c.sound.quiet),this.closed+=(Math.min(1,z)-this.closed)*_(z>this.closed?1.7:2.6),g.clapped&&c.hands.clap>0&&(this.rings.push({x:this.focus.x,y:this.focus.y,at:0,strength:g.clapStrength*c.hands.clap}),this.closed*=.25);const I=(ve,Ye,Oe)=>{const Je=Math.max(0,Math.min(1,(Oe-ve)/(Ye-ve)));return Je*Je*(3-2*Je)},O=I(.04,.62,this.closed),E=I(.55,1,this.closed),U=Math.max(g.kick,g.bump)*c.sound.beat;U>.45&&this.lastKick<=.45&&(this.rings.push({x:this.focus.x,y:this.focus.y,at:0,strength:.16+.14*Math.min(1,U)}),this.rings.length>6&&this.rings.shift()),this.lastKick=U;for(const ve of this.rings)ve.at+=x;this.rings=this.rings.filter(ve=>ve.at<2.6),this.breath+=(g.bass-this.breath)*_(3);const q=this.release?Ew():null,H=c.grid.figure,D=c.grid.field,W=this.time,$=this.lit,G=_(16),ie=_(2.4),X=P[0],F=P[1];let k=0,te=0,N=0;X&&F&&(k=F.x-X.x,te=F.y-X.y,N=k*k+te*te);for(let ve=0;ve<S;ve++){const Ye=(ve+.5)*y;for(let Oe=0;Oe<T;Oe++){const Je=(Oe+.5)*y;let Qe=D*(.16+.07*Math.sin(Je*2.1+Ye*1.3-W*.5)+.04*Math.sin(Je*.9-Ye*2.7+W*.31));q&&H>.01&&(Qe+=ww(q,Je/h,Ye)*.34*H);for(const Ze of P){const dt=Je-Ze.x,St=Ye-Ze.y;Qe+=Ze.power*Math.exp(-(dt*dt+St*St)/(Ze.reach*Ze.reach))}if(N>1e-5){const Ze=Math.max(0,Math.min(1,((Je-X.x)*k+(Ye-X.y)*te)/N)),dt=Math.hypot(Je-(X.x+k*Ze),Ye-(X.y+te*Ze));Qe+=.55*Math.exp(-(dt*dt)/(y*y*.5))}for(const Ze of this.rings){const dt=Math.hypot(Je-Ze.x,Ye-Ze.y)-Ze.at*.85;dt>-.09&&dt<.09&&(Qe+=Ze.strength*Math.exp(-(dt*dt)/.0011)*(1-Ze.at/2.6))}const st=ve*T+Oe;$[st]+=(Qe-$[st])*(Qe>$[st]?G:ie)}}l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,f,d);const j=[];for(let ve=0;ve<ma;ve++)j.push(new Path2D);const Ee=y*d,Se=1+.18*this.breath,de=this.focus.x,K=this.focus.y;for(let ve=0;ve<S;ve++){if(O>.97&&ve%3!==0)continue;const Ye=(ve+.5)*y,Oe=(K+(Ye-K)*(1-O))*d;for(let Je=0;Je<T;Je++){const Qe=$[ve*T+Je];if(Qe<.03)continue;const st=(Je+.5)*y,Ze=(de+(st-de)*(1-E))*d,dt=Math.min(ma-1,Math.floor(Math.min(.999,Qe)*ma)),St=Ee*Math.min(.5,.07+.4*Math.min(1,Qe))*Se*(1-.45*O),Q=j[dt];Q.moveTo(Ze+St,Oe),Q.arc(Ze,Oe,St,0,Math.PI*2)}}const[ce,oe,Ae]=gg(t[0]??"#8fb4ff"),be=1-.82*O;for(let ve=0;ve<ma;ve++){const Ye=ve/(ma-1),Oe=(Je,Qe)=>{const st=Qe+(255-Qe)*Math.min(1,.35+Math.max(0,Ye*1.6-.6));return Math.round(Je+(st-Je)*Math.min(1,Ye*1.4))};l.fillStyle=`rgb(${Oe(150,ce)},${Oe(156,oe)},${Oe(170,Ae)})`,l.globalAlpha=Math.min(1,(.3+.7*Ye)*be),l.fill(j[ve])}if(E>.02){const ve=Ee*(2.4+5*E)*(1+.25*this.breath);l.globalCompositeOperation="lighter",l.globalAlpha=Math.min(1,E*1.2),l.drawImage(this.glow,de*d-ve,K*d-ve,ve*2,ve*2),l.globalCompositeOperation="source-over"}if(c.grid.words>.01){const ve=d/720,Ye=Math.max(9,Math.round(11*ve));l.font=`500 ${Ye}px ui-monospace, SFMono-Regular, Menlo, monospace`,l.textBaseline="alphabetic",l.textAlign="left";let Oe;this.closed>.9?Oe="standby":this.closed>.25?Oe="closing":w?Oe=P.length>1?"two hands":"one hand":Oe=R?"listening":"waiting";const Je=Ze=>Math.round(Ze+(255-Ze)*.7);l.fillStyle=`rgb(${Je(ce)},${Je(oe)},${Je(Ae)})`,l.globalAlpha=.6*c.grid.words;const Qe=20*ve,st=d-20*ve;if(l.fillText(Oe,Qe,st),Math.floor(this.real*1.6)%2===0){const Ze=l.measureText(Oe).width;l.fillRect(Qe+Ze+5*ve,st-Ye*.82,Ye*.55,Ye)}}l.globalAlpha=1}}const vg={shape:{size:1,morph:.12,lobes:1,detail:4,style:2,steady:0},motion:{spin:1,flow:1,dust:.5,points:1400,glide:0},hands:{shape:1,follow:.25,clap:1},sound:{bass:1,beat:1,spin:1,drop:1,squash:0}};class bw{constructor(e,t){B(this,"canvas");B(this,"ctx");B(this,"cfg",vg);B(this,"playing",new Rs(.6));B(this,"surface",document.createElement("canvas"));B(this,"scene",new Sc);B(this,"camera",new ai(50,16/9,.1,100));B(this,"renderer");B(this,"group",new ji);B(this,"corners",new Float32Array(0));B(this,"edges",new Uint32Array(0));B(this,"shaped",new Float32Array(0));B(this,"points",null);B(this,"lines",null);B(this,"builtDetail",-1);B(this,"wire");B(this,"dots");B(this,"dust");B(this,"time",0);B(this,"flow",0);B(this,"spin",0);B(this,"pull",0);B(this,"swell",0);B(this,"pulse",0);B(this,"burst",0);B(this,"lastDrop",0);B(this,"dent",0);B(this,"dentDir",new J(1,0,0));B(this,"dentAim",new J(1,0,0));B(this,"dentTo",0);B(this,"pace",0);B(this,"turn",0);B(this,"lastSquash",0);B(this,"at",new Nt);this.canvas=e,this.ctx=t,this.renderer=new yv({canvas:this.surface,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(1),this.renderer.setClearColor(0,1),this.camera.position.set(0,0,7.5),this.camera.lookAt(0,0,0),this.scene.add(this.group),this.wire=new ov({color:6737151,transparent:!0,opacity:.85}),this.dots=new Vh({color:6737151,size:.09,transparent:!0,opacity:1,depthWrite:!1});const r=6e3,o=new Float32Array(r*3);for(let c=0;c<r;c++){const f=4+Math.random()*14,d=Math.random()*Math.PI*2,h=Math.random()*2-1,g=Math.sqrt(1-h*h);o.set([f*g*Math.cos(d),f*h,-Math.abs(f*g*Math.sin(d))-3],c*3)}const l=new cn;l.setAttribute("position",new Gt(o,3)),this.dust=new Wh(l,new Vh({color:16777215,size:.03,transparent:!0,opacity:.5,depthWrite:!1})),this.scene.add(this.dust)}setParams(e){this.cfg=bs(vg,e)}build(e){this.points&&(this.group.remove(this.points,this.lines),this.points.geometry.dispose(),this.lines.geometry.dispose());const t=new ud(1,e),r=t.attributes.position.array,o=new Map,l=[],c=[];for(let m=0;m<r.length;m+=3){const _=`${r[m].toFixed(4)},${r[m+1].toFixed(4)},${r[m+2].toFixed(4)}`;let S=o.get(_);S===void 0&&(S=l.length/3,o.set(_,S),l.push(r[m],r[m+1],r[m+2])),c.push(S)}const f=new Set,d=[],h=l.length/3;for(let m=0;m<c.length;m+=3)for(const[_,S]of[[c[m],c[m+1]],[c[m+1],c[m+2]],[c[m+2],c[m]]]){const T=_<S?_*h+S:S*h+_;f.has(T)||(f.add(T),d.push(_,S))}t.dispose(),this.corners=Float32Array.from(l),this.shaped=new Float32Array(l.length),this.edges=Uint32Array.from(d);const g=new cn;g.setAttribute("position",new Gt(this.shaped,3));const x=new cn;x.setAttribute("position",new Gt(new Float32Array(d.length*2*3),3)),this.points=new Wh(g,this.dots),this.lines=new By(x,this.wire),this.points.frustumCulled=!1,this.lines.frustumCulled=!1,this.group.add(this.lines,this.points),this.builtDetail=e}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;const h=this.playing;h.read(e,r);const{dt:g}=h,x=Se=>1-Math.exp(-g*Se),m=Math.max(0,c.motion.glide),_=Math.max(0,h.step);this.pace+=(_-this.pace)*(m>0?x(.7/m):1);const S=this.pace;this.time+=S;const T=Math.max(2,Math.min(6,Math.round(c.shape.detail)));T!==this.builtDetail&&this.build(T);const y=[e.left,e.right],M=!e.synthetic&&y.some(Boolean),w=M?Math.max(h.fist,h.pinch):0;this.pull+=(w*c.hands.shape-this.pull)*x(4),this.swell+=(h.bass*c.sound.bass-this.swell)*x(m>0?1.2/m:5);const P=Math.max(h.kick,h.bump)*c.sound.beat;this.pulse=Math.max(this.pulse*Math.exp(-g*6),Math.min(1,P)),h.clapped&&c.hands.clap>0&&(this.burst=Math.max(this.burst,h.clapStrength*c.hands.clap)),h.drop>.5&&this.lastDrop<=.5&&(this.burst=Math.max(this.burst,.9*c.sound.drop));const R=Math.max(h.kick,h.bump);c.sound.squash>0&&R>.45&&this.lastSquash<=.45&&(this.dentTo=Math.max(this.dentTo,Math.min(1,R)*c.sound.squash),this.dentAim.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize()),this.lastSquash=R,this.dent+=(this.dentTo-this.dent)*(m>0?x(9/m):1),this.dentTo*=Math.exp(-g*2.6),m>0?this.dentDir.lerp(this.dentAim,x(6/m)).normalize():this.dentDir.copy(this.dentAim),this.lastDrop=h.drop,this.burst*=Math.exp(-g*2.2);const z=c.shape.morph+.35*this.swell+.5*this.pull+.25*h.build;this.flow+=S*.35*c.motion.flow*(1+this.swell);const I=1.1*Math.max(.3,c.shape.lobes),O=this.flow,E=this.corners,U=this.shaped;let q=0;for(let Se=0;Se<E.length;Se+=3){const de=E[Se],K=E[Se+1],ce=E[Se+2],oe=Math.sin(de*I*1.7+O)*.5+Math.sin(K*I*2.1-O*.8+1.3)*.35+Math.sin((de+ce)*I*1.4+O*1.3+2.1)*.3+Math.sin((K-ce)*I*2.6-O*.6)*.15*(.5+this.pull),Ae=Math.max(0,de*this.dentDir.x+K*this.dentDir.y+ce*this.dentDir.z),be=1+oe*z+this.pulse*.08*(.6+.4*Math.sin(K*3+O))+this.burst*.6*(.7+.3*oe)-this.dent*.35*Ae*Ae;U[Se]=de*be,U[Se+1]=K*be,U[Se+2]=ce*be,q+=Math.max(0,be)}if(c.shape.steady>0){const Se=q/Math.max(1,E.length/3),de=1+(1/Math.max(.3,Se)-1)*Math.min(1,c.shape.steady);for(let K=0;K<U.length;K++)U[K]*=de}this.points.geometry.attributes.position.needsUpdate=!0;const H=Math.max(0,Math.min(2,c.shape.style)),D=.5*Math.min(1,H/2),W=this.lines.geometry.attributes.position,$=W.array,G=this.edges;for(let Se=0,de=0;Se<G.length;Se+=2){const K=G[Se]*3,ce=G[Se+1]*3,oe=U[K],Ae=U[K+1],be=U[K+2],ve=U[ce],Ye=U[ce+1],Oe=U[ce+2];$[de++]=oe,$[de++]=Ae,$[de++]=be,$[de++]=oe+(ve-oe)*D,$[de++]=Ae+(Ye-Ae)*D,$[de++]=be+(Oe-be)*D,$[de++]=ve,$[de++]=Ye,$[de++]=Oe,$[de++]=ve+(oe-ve)*D,$[de++]=Ye+(Ae-Ye)*D,$[de++]=Oe+(be-Oe)*D}W.needsUpdate=!0,this.lines.visible=D>.004;const ie=.8*h.mid+.6*h.energy;this.turn+=(ie-this.turn)*(m>0?x(.8/m):1),this.spin+=S*.35*c.motion.spin*(1+c.sound.spin*this.turn),this.group.rotation.set(.35+Math.sin(this.time*.13)*.25,this.spin,Math.sin(this.time*.09)*.2);const X=M?c.hands.follow:c.hands.follow*.3;this.at.x+=(h.aim.x*2.2*X-this.at.x)*x(2),this.at.y+=(h.aim.y*1.3*X-this.at.y)*x(2),this.group.position.set(this.at.x,this.at.y,0),this.group.scale.setScalar(1.6*Math.max(.2,c.shape.size)*(1+.05*this.pulse));const F=Math.min(1,H/2),k=new Xt(t[0]??"#66ccff"),te=new Xt(t[1]??t[0]??"#3300ff"),N=k.clone().lerp(new Xt(1,1,1),.25+.4*this.pulse);this.wire.color.copy(N),this.dots.color.copy(N.clone().lerp(te,.3)),this.dots.size=(.08+.05*this.pulse)*(1-.35*F),this.dots.opacity=1,this.wire.opacity=.55+.4*Math.min(1,this.swell+this.pulse);const j=this.dust.material;j.opacity=Math.max(0,Math.min(1,c.motion.dust));const Ee=Math.max(0,Math.min(6e3,Math.round(c.motion.points)));this.dust.geometry.setDrawRange(0,Ee),this.dust.visible=c.motion.dust>.01&&Ee>0,this.dust.rotation.y=-this.time*.03,(this.surface.width!==f||this.surface.height!==d)&&this.renderer.setSize(f,d,!1),this.camera.aspect=f/d,this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera),l.globalCompositeOperation="source-over",l.globalAlpha=1,l.drawImage(this.surface,0,0,f,d)}destroy(){pd(this.scene,this.renderer)}}const xg={look:{flow:1,zoom:1,detail:1,veins:1,grain:.5},hands:{follow:1,clap:1},sound:{beat:1,bass:1}},Cw=`
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,Rw=`
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
}`;class Pw{constructor(e,t,r){B(this,"canvas");B(this,"ctx");B(this,"cfg",xg);B(this,"surface",document.createElement("canvas"));B(this,"renderer",null);B(this,"failed",!1);B(this,"scene",new Sc);B(this,"camera",new fd(-1,1,1,-1,0,2));B(this,"material");B(this,"geometry");B(this,"playing",new Rs(.6));B(this,"time",0);B(this,"kick",0);B(this,"breath",0);B(this,"hand",new J);B(this,"drops",Array.from({length:8},()=>new sn(0,0,-99,0)));B(this,"nextDrop",0);B(this,"lastDrop",-99);B(this,"lastBurst",0);B(this,"style");this.style=r,this.canvas=e,this.ctx=t,this.geometry=new cn,this.geometry.setAttribute("position",new Gt(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),this.material=new gi({vertexShader:Cw,fragmentShader:Rw,depthTest:!1,depthWrite:!1,uniforms:{uRes:{value:new Nt(1,1)},uTime:{value:0},uReal:{value:0},uStyle:{value:0},uFlow:{value:1},uDetail:{value:1},uVeins:{value:1},uGrain:{value:.5},uBass:{value:0},uKick:{value:0},uBurst:{value:0},uTurn:{value:0},uZoom:{value:1},uHand:{value:new J},uDrops:{value:Array.from({length:8},()=>new sn(0,0,-99,0))}}});const o=new Nn(this.geometry,this.material);o.frustumCulled=!1,this.scene.add(o);try{this.renderer=hd(this.surface)}catch(l){console.error("Macro could not start:",l),this.failed=!0}}setParams(e){this.cfg=bs(xg,e)}destroy(){var e,t;this.geometry.dispose(),this.material.dispose(),(e=this.renderer)==null||e.dispose(),(t=this.renderer)==null||t.forceContextLoss(),this.renderer=null}render(e,t,r){const o=this.canvas.width,l=this.canvas.height;if(o===0||l===0)return;const c=this.renderer;if(this.failed||!c){dd(this.ctx,o,l,"MACRO");return}const{cfg:f}=this,d=this.playing;d.read(e,r);const{dt:h}=d;this.time+=Math.max(0,d.step)*3,this.kick=Math.max(this.kick*Math.exp(-h*5),d.bump*f.sound.beat),this.breath+=(d.bass*f.sound.bass-this.breath)*(1-Math.exp(-h*3));const g=e.left||e.right?1:0,x=1-Math.exp(-h*3);if(this.hand.x+=((d.aim.x+1)/2-this.hand.x)*x,this.hand.y+=((d.aim.y+1)/2-this.hand.y)*x,this.hand.z+=(g*f.hands.follow-this.hand.z)*x,this.style===4){const _=this.time*f.look.flow,S=o/l,T=(P,R,z)=>{this.drops[this.nextDrop].set(P,R,_,z),this.nextDrop=(this.nextDrop+1)%this.drops.length,this.lastDrop=_},y=()=>[(Math.random()-.5)*S*.8,(Math.random()-.5)*.8],M=()=>[(this.hand.x-.5)*S/f.look.zoom,(this.hand.y-.5)/f.look.zoom],w=d.burst*f.hands.clap;if(w>.6&&this.lastBurst<=.6){const[P,R]=g?M():y();T(P,R,2.2)}else if(d.bump>.5&&_-this.lastDrop>.6){const[P,R]=g?M():y();T(P,R,.8+d.bump*.6)}else if(_-this.lastDrop>2.6){const[P,R]=y();T(P,R,.7)}this.lastBurst=w}const m=this.material.uniforms;m.uRes.value.set(o,l),m.uTime.value=this.time,m.uReal.value=performance.now()/1e3%1e3,m.uStyle.value=this.style,m.uFlow.value=f.look.flow,m.uDetail.value=f.look.detail,m.uVeins.value=f.look.veins,m.uGrain.value=f.look.grain,m.uZoom.value=f.look.zoom,m.uBass.value=this.breath,m.uKick.value=this.kick,m.uBurst.value=d.burst*f.hands.clap,m.uTurn.value=Ev(t).hue*Math.PI/180,m.uHand.value.copy(this.hand),m.uDrops.value.forEach((_,S)=>_.copy(this.drops[S])),(this.surface.width!==o||this.surface.height!==l)&&c.setSize(o,l,!1),c.render(this.scene,this.camera),this.ctx.globalCompositeOperation="source-over",this.ctx.globalAlpha=1,this.ctx.drawImage(this.surface,0,0,o,l)}}const Lw=1.4,Iw=14,Dw=1.2,_g=(s,e)=>1/(1+1/(2*Math.PI*s)/e);class ho{constructor(e=Lw,t=Iw){B(this,"value",null);B(this,"speed",0);this.minCutoff=e,this.beta=t}next(e,t){if(this.value===null||t<=0)return this.value=e,this.speed=0,e;const r=(e-this.value)/t;this.speed+=(r-this.speed)*_g(Dw,t);const o=this.minCutoff+this.beta*Math.abs(this.speed);return this.value+=(e-this.value)*_g(o,t),this.value}reset(){this.value=null,this.speed=0}}class Uw{constructor(e=5){B(this,"recent",[]);B(this,"held",null);this.size=e}next(e){this.recent.push(e),this.recent.length>this.size&&this.recent.shift();const t=new Map;let r=e,o=0;for(const l of this.recent){const c=(t.get(l)??0)+1;t.set(l,c),(c>o||c===o&&l===this.held)&&(r=l,o=c)}return this.held=r,r}reset(){this.recent=[],this.held=null}}const yg=[{tip:8,pip:6},{tip:12,pip:10},{tip:16,pip:14},{tip:20,pip:18}];function Nw(s,e){if(!s||s.length<21)return null;const t=(x,m)=>Math.hypot((x.x-m.x)*e,x.y-m.y,(x.z-m.z)*e),r=(x,m)=>Math.hypot((x.x-m.x)*e,x.y-m.y),o=s[0],l=s[9],c=r(o,l);if(c<1e-4)return null;let f=0,d=0;for(const x of yg){const m=t(s[x.tip],o),_=t(s[x.pip],o);m>_*1.12&&f++,d+=Math.min(1,Math.max(0,(m/c-1.05)/.85))}const h=s[17];return t(s[4],h)>t(s[3],h)*1.12&&f++,{fingers:f,pinchGap:t(s[4],s[8])/c,openness:d/yg.length,size:c,angle:Math.atan2((l.x-o.x)*e,o.y-l.y)}}const Mg=.32,qf=.5,Fw=180,Sg=30,Ag=.08,kw=.32,Ow=.115,Eg=.16,Bw=1.3,zw=.2,Hw=.28,Vw=.7,Gw=200,Ww=.3,Xw=450,jw=140;class wg{constructor(){B(this,"points",Array.from({length:21},()=>({x:new ho,y:new ho,z:new ho(1,6)})));B(this,"size",new ho(1,4));B(this,"angle",new ho(1.2,3));B(this,"open",new ho(2,6));B(this,"fingers",new Uw(5));B(this,"pinched",!1);B(this,"gesture","none");B(this,"gestureSince",0);B(this,"lastAngle",0);B(this,"lastAt",0);B(this,"hand",null);B(this,"seenAt",0)}read(e,t,r){const o=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const l=e.map((T,y)=>({x:this.points[y].x.next(T.x,o),y:this.points[y].y.next(T.y,o),z:this.points[y].z.next(T.z,o)})),c=Nw(e,r);if(!c)return this.hand;const f=this.fingers.next(c.fingers);this.pinched=c.pinchGap<(this.pinched?qf:Mg);const d=Math.max(0,f-1),h=this.pinched?"pinch":c.openness>.62?"open":c.openness<.28?"fist":d>=3?"open":d<=0?"fist":"none";h!==this.gesture&&(this.gesture=h,this.gestureSince=t);let g=c.angle;for(;g-this.lastAngle>Math.PI;)g-=2*Math.PI;for(;g-this.lastAngle<-Math.PI;)g+=2*Math.PI;this.lastAngle=this.angle.next(g,o);const x=Math.atan2(Math.sin(this.lastAngle),Math.cos(this.lastAngle)),m=this.size.next(c.size,o),_=this.points[9],S=Math.hypot(_.x.speed,_.y.speed);return this.seenAt=t,this.hand={position:{x:l[9].x,y:l[9].y},gesture:h,pinchDistance:this.pinched?c.pinchGap*c.size:void 0,velocity:Math.min(3,S*2),holdDuration:(t-this.gestureSince)/1e3,fingerCount:f,landmarks:l,pinch:Math.min(1,Math.max(0,(qf+.25-c.pinchGap)/(qf+.25-Mg*.6))),openness:Math.min(1,Math.max(0,this.open.next(c.openness,o))),depth:Math.min(1,Math.max(0,(m-Ag)/(kw-Ag))),angle:x},this.hand}forget(){for(const e of this.points)e.x.reset(),e.y.reset(),e.z.reset();this.size.reset(),this.angle.reset(),this.open.reset(),this.fingers.reset(),this.pinched=!1,this.gesture="none",this.lastAt=0,this.lastAngle=0,this.hand=null}}class Kw{constructor(){B(this,"kept",{left:new wg,right:new wg});B(this,"trail",[]);B(this,"lastAt",0);B(this,"clapAt",-1e9);B(this,"clapStrength",0);B(this,"gap",1);B(this,"gapAt",-1e9);B(this,"closing",0);B(this,"counted",!1);B(this,"held",!1)}next(e,t,r){const o={};(e.landmarks??[]).forEach((h,g)=>{var S,T,y,M;if(!h||h.length<21)return;const x=h.map(w=>({x:1-w.x,y:w.y,z:w.z}));let _=((M=(y=(T=(S=e.handedness)==null?void 0:S[g])==null?void 0:T[0])==null?void 0:y.categoryName)==null?void 0:M.toLowerCase())==="left"?"right":"left";if(o[_]){const w=o[_],P=x[9].x<w[9].x;o.left=P?x:w,o.right=P?w:x;return}o[_]=x});const c={left:null,right:null};for(const h of["left","right"]){const g=this.kept[h];o[h]?(c[h]=g.read(o[h],t,r),c[h]&&this.trail.push({...c[h].position,hand:h})):g.hand&&t-g.seenAt<=Fw?c[h]=g.hand:g.hand&&g.forget()}this.trail.length>Sg&&(this.trail=this.trail.slice(-Sg)),c.gestureTrail=[...this.trail];const f=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const d=h=>{this.counted||t-this.clapAt<Xw||(this.counted=!0,this.clapAt=t,this.clapStrength=Math.min(1,Math.max(.7,h)))};if(c.left&&c.right){const h=c.right.position.x-c.left.position.x,g=c.right.position.y-c.left.position.y;c.distanceBetweenHands=Math.hypot(h,g),c.twist=Math.atan2(g,h*r)}if(o.left&&o.right){const h=o.left[9],g=o.right[9],x=Math.hypot(g.x-h.x,g.y-h.y),m=(t-this.gapAt)/1e3,_=m>0&&m<.15?(this.gap-x)/m:0;this.closing=Math.max(_,this.closing*Math.exp(-f*12)),this.gap=x,this.gapAt=t,x>Ww&&(this.counted=!1),x<zw&&this.closing>Bw&&d(this.closing/2.2),this.held=x<(this.held?Eg:Ow),this.held&&(d(.7+this.closing/3),c.clapping=!0,c.clapIntensity=Math.max(.6,1-x/Eg))}else t-this.gapAt<Gw&&this.gap<Hw&&this.closing>Vw&&d(.75+this.closing/3),this.closing*=Math.exp(-f*6),this.held=!1,t-this.gapAt>1200&&(this.counted=!1);return t-this.clapAt<=jw&&(c.clapping=!0,c.clapIntensity=Math.max(c.clapIntensity??0,this.clapStrength)),c}}const qw=25e3,Yw=5e3,Qw=2e4,Jw=6e4,Tg=640,Zw="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",bg="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14";function $w({videoElement:s,onHandData:e}){const t=pt.useRef(new Kw);return pt.useEffect(()=>{let r=!0,o=0,l=-1,c=null,f=null,d=0,h=0;const g=()=>s.videoWidth&&s.videoHeight?s.videoWidth/s.videoHeight:16/9,x=(y,M)=>{r&&e(t.current.next(y,M,g()))},m=async()=>{if(!(!r||f))try{const y=await import(bg),M=await y.FilesetResolver.forVisionTasks(`${bg}/wasm`),w=await y.HandLandmarker.createFromOptions(M,{baseOptions:{modelAssetPath:Zw,delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5});if(!r){w.close();return}f=w,console.log("✋ Hand tracking is running on the page.");const P=()=>{if(!(!r||!f)&&(o=requestAnimationFrame(P),s.currentTime!==l)){l=s.currentTime;try{const R=performance.now();x(f.detectForVideo(s,R),R)}catch(R){console.error("Hand detection error:",R)}}};P()}catch(y){console.error("Hand tracking could not start:",y)}},_=y=>{c&&(console.warn(`Hand tracking is moving to the page: ${y}`),window.clearTimeout(d),cancelAnimationFrame(o),c.terminate(),c=null,m())},S=()=>{if(typeof Worker>"u"||typeof createImageBitmap!="function"||typeof OffscreenCanvas>"u"){m();return}try{c=new Worker("/hand-worker.js")}catch{m();return}let y=!1,M=!1,w=!1,P=!1,R=!1,z=!1;d=window.setTimeout(()=>{y||_("it took too long to start")},qw);const I=()=>{if(!r||!c)return;if(o=requestAnimationFrame(I),M){performance.now()-h>(R?Jw:w?Yw:Qw)&&_("the worker stopped answering");return}if(s.currentTime===l||s.readyState<2)return;l=s.currentTime,M=!0,h=performance.now();const O=h,E=Math.min(Tg,s.videoWidth||Tg);createImageBitmap(s,{resizeWidth:E,resizeHeight:Math.max(1,Math.round(E/g())),resizeQuality:"low"}).then(U=>{if(!c){U.close();return}const q=Mw();q&&!z&&(R=!0),c.postMessage({type:"frame",bitmap:U,time:O,mask:q},[U])}).catch(()=>{M=!1})};c.onmessage=O=>{const E=O.data;E.type==="ready"?(y=!0,window.clearTimeout(d),console.log("✋ Hand tracking is running in a worker."),I()):E.type==="hands"?(M=!1,w=!0,E.mask&&(z=!0,R=!1,Sw(E.mask.data,E.mask.width,E.mask.height)),x({landmarks:E.landmarks,handedness:E.handedness},E.time)):E.type==="note"?(z=!0,R=!1,console.warn(E.reason)):E.type==="failed"?_(E.reason):E.type==="error"&&(M=!1,P||(P=!0,console.warn("Hand tracking worker:",E.reason)),w||_(E.reason))},c.onerror=O=>_(O.message||"the worker failed"),c.postMessage({type:"init"})},T=()=>{r&&(s.readyState>=2?S():window.setTimeout(T,100))};return T(),()=>{r=!1,window.clearTimeout(d),cancelAnimationFrame(o),c==null||c.terminate(),c=null;try{f==null||f.close()}catch(y){console.warn("Error closing hand landmarker:",y)}f=null}},[s,e]),null}const eT=40;class Yf{constructor(e,t){B(this,"history",[]);B(this,"last",0);B(this,"pulse",0);B(this,"threshold",0);B(this,"recent",[]);B(this,"peak",0);B(this,"flux",0);this.refractory=e,this.decay=t}measure(e,t,r,o){for(this.recent.push({at:r,rise:e,heard:t});this.recent.length&&r-this.recent[0].at>eT;)this.recent.shift();let l=0,c=0;for(const m of this.recent)l+=m.rise,c+=m.heard;this.history.push(l),this.history.length>90&&this.history.shift();const f=this.history.length;let d=0;for(const m of this.history)d+=m;d/=f;let h=0;for(const m of this.history)h+=(m-d)**2;const g=Math.sqrt(h/f);return this.threshold=d+g*1.9*(1.5-o),this.flux=l,this.peak=Math.max(l,this.peak*.9985),f>=20&&l>this.threshold&&l>this.peak*.5&&c>1.2*(1.3-o*.8)&&r-this.last>this.refractory?l/Math.max(1e-9,this.threshold):0}commit(e,t,r){e&&(this.last=t);const o=this.peak>0?Math.min(1,this.flux/this.peak):0;this.pulse=Math.max(this.pulse*Math.exp(-r/this.decay),e?Math.max(.4,o):0)}}function tT(s,e,t,r){const o=s.map(c=>c.hits.measure(c.flux,c.audible,e,r)),l=Math.max(...o);s.forEach((c,f)=>c.hits.commit(o[f]>0&&o[f]>=l*.7,e,t))}class Cg{constructor(e){B(this,"ceiling",-100);B(this,"floor",0);B(this,"seen",!1);this.minSpan=e}place(e,t){this.seen||(this.seen=!0,this.ceiling=e,this.floor=e);const r=l=>1-Math.exp(-t/l);this.ceiling+=(e-this.ceiling)*r(e>this.ceiling?.5:60),this.floor+=(e-this.floor)*r(e<this.floor?2:60);const o=Math.min(this.floor,this.ceiling-this.minSpan);return Math.min(1,Math.max(0,(e-o)/(this.ceiling-o)))}}function nT(){return{overall:new Cg(14),bass:new Cg(14),overallSlow:0,bassMid:0,highFast:0,highSlow:0,out:0,onsets:[],energy:0,build:0,drop:0,bright:.5,heard:0}}const Rg=-75,iT=2.5;function rT(s,e,t,r){const o=T=>1-Math.exp(-r/T),l=T=>Math.pow(10,T/10),c=T=>T>1e-10?10*Math.log10(T):-100;if(s.overallSlow+=(l(e.overall)-s.overallSlow)*o(2),s.bassMid+=(l(e.bass)-s.bassMid)*o(.5),s.highFast+=(e.high-s.highFast)*o(1),s.drop*=Math.exp(-r/1.2),s.heard+=r,s.heard<iT){s.highSlow=s.highFast,s.energy=.5;return}s.highSlow+=(e.high-s.highSlow)*o(8);const f=c(s.overallSlow)>Rg;s.energy=f?s.overall.place(c(s.overallSlow),r):0;const d=s.bass.place(c(s.bassMid),r),h=s.bass.ceiling>Rg;for(e.onset&&s.onsets.push(t);s.onsets.length&&t-s.onsets[0]>2e3;)s.onsets.shift();let g=!1;h&&d<.4?s.out=Math.min(30,s.out+r):d>.65&&(s.out>=2&&(s.drop=Math.max(s.drop,Math.min(1,.55+s.out/14)),g=!0),s.out=0);const x=Math.min(1,Math.max(0,(s.highFast-s.highSlow)/18)),m=Math.min(1,Math.max(0,(s.onsets.length/2-3)/5)),_=Math.min(1,s.out/6),S=f&&s.out>0?_*_*(3-2*_)*Math.max(.1,x,m):0;if(s.build+=(S-s.build)*o(g||S<s.build?.25:.7),e.centroid>0){const T=Math.min(1,Math.max(0,Math.log2(e.centroid/300)/Math.log2(16.666666666666668)));s.bright+=(T-s.bright)*o(1.5)}}const Rv={bass:[20,160],lowMid:[160,800],mid:[800,4e3],high:[4e3,12e3]},sT=Object.keys(Rv),oT=.002,aT=.04,lT=.25,cT=.0016,uT=6,fT=90,hT=170,dT=1.9;function pT(){const s=()=>({floor:255,ceiling:0});return{envelopes:{bass:s(),lowMid:s(),mid:s(),high:s()},overall:s(),previous:null,flux:[],lastBeat:0,onset:0,rise:0,punch:0,lastNow:0,kick:new Yf(170,.16),snare:new Yf(170,.13),hat:new Yf(70,.06),sections:nT()}}const go=new Float32Array(256);for(let s=0;s<256;s++)go[s]=Math.pow(10,(s/255*70-100)/20)*1e3;const Qf={kick:[30,150],snare:[1500,5e3],hat:[6e3,12e3]};function Pg(s,e){s.floor+=(e-s.floor)*(e>s.floor?oT:aT),s.ceiling+=(e-s.ceiling)*(e>s.ceiling?lT:cT);const t=s.ceiling-s.floor;return t<uT?Math.min(1,e/190):Math.min(1,Math.max(0,(e-s.floor)/t))}function Jf(s,e,t){const r=Math.max(0,Math.min(s.length-1,e)),o=Math.max(r+1,Math.min(s.length,t));let l=0;for(let c=r;c<o;c++)l+=s[c];return l/(o-r)}function Lg(s,e,t){const r=Math.max(1,Math.min(s.length-1,e)),o=Math.max(r+1,Math.min(s.length,t));let l=0;for(let c=r;c<o;c++)l+=(go[s[c]]/1e3)**2;return l>0?Math.max(-100,10*Math.log10(l)):-100}function mT(s,e){const t=-100+10*Math.log10(Math.max(1,e))+5;return Math.min(1,Math.max(0,(s-t)/(-32-t)))}function gT(s,e,t,r,o){const l=e/2/s.length,c=X=>Math.round(X/l),f={};for(const X of sT){const[F,k]=Rv[X];f[X]=Pg(t.envelopes[X],Jf(s,c(F),c(k)))}const d=Pg(t.overall,Jf(s,c(20),c(12e3))),h=c(1e4),g=new Float32Array(h);for(let X=0;X<h&&X<s.length;X++)g[X]=s[X];let x=0,m=0;if(t.previous){for(let X=0;X<g.length;X++){const F=t.previous[X]??0,k=g[X]-F;k>0&&(x+=k,m+=go[g[X]]-go[F])}x/=g.length}t.punch=m;const _=t.lastNow?Math.min(.1,Math.max(.001,(o-t.lastNow)/1e3)):1/60;t.lastNow=o;const S=X=>{var Se;const F=t.previous;if(!F)return{flux:0,audible:0};const k=Math.max(1,c(X[0])),te=Math.min(s.length,Math.max(k+1,c(X[1])));let N=0,j=0,Ee=0;for(let de=k;de<te;de++){const K=de<F.length?F[de]:((Se=t.above)==null?void 0:Se[de-F.length])??s[de];N+=go[s[de]],j+=go[K],s[de]>K&&(Ee+=s[de]-K)}return{flux:Math.max(0,N-j),audible:Ee/(te-k)}},T=S(Qf.kick);tT([{hits:t.kick,...T},{hits:t.snare,...S(Qf.snare)},{hits:t.hat,...S(Qf.hat)}],o,_,r),t.rise=x+T.audible*.5,t.previous=g,t.above=s.slice(h),t.flux.push(x),t.flux.length>fT&&t.flux.shift();const y=t.flux.reduce((X,F)=>X+F,0)/Math.max(1,t.flux.length);let M=0;for(const X of t.flux)M+=(X-y)**2;const w=Math.sqrt(M/Math.max(1,t.flux.length)),P=dT*(1.5-r*1),R=y+w*P,I=t.flux.length>=20&&x>R&&x>.35*(1.3-r*.8)&&o-t.lastBeat>hT;I&&(t.lastBeat=o);const O=R>0?Math.min(1,(x-R)/(R+.6)):0;t.onset=Math.max(t.onset*.9,I?Math.max(.35,O):0);let E=0,U=0;const q=Math.min(s.length,c(1e4));for(let X=Math.max(1,c(100));X<q;X++){const F=(s[X]/255)**2;E+=F,U+=F*X*l}const H=Lg(s,c(20),c(12e3));rT(t.sections,{overall:H,bass:Lg(s,c(30),c(160)),high:Jf(s,c(2e3),c(12e3)),centroid:E>.05?U/E:0,onset:I},o,_);const D=.6+r*1.2,W=1.5-r,$=1,G=X=>$*Math.min(1,D*Math.pow(Math.max(0,X),W)),ie=I&&$>.15;return{bass:G(f.bass),lowMid:G(f.lowMid),mid:G(f.mid),high:G(f.high),overall:G(d),beat:ie,beatIntensity:ie?$*Math.min(1,Math.max(.3,O)):0,onset:$*t.onset,kick:$*t.kick.pulse,snare:$*t.snare.pulse,hat:$*t.hat.pulse,energy:$*t.sections.energy,build:$*t.sections.build,drop:$*t.sections.drop,bright:t.sections.bright,input:mT(H,c(12e3)-Math.max(1,c(20)))}}const Ig=[.35,.45,.8,1.15,1.5,1.9],vT=3.6,xT=2.2,_T=6;function yT(){return{rate:1,clap:0}}function Dg(s){if(!s)return null;if(s.gesture==="fist")return Ig[0];const e=s.fingerCount;return e===void 0?null:Ig[Math.min(5,Math.max(1,Math.round(e)))]}function MT(s,e,t){const r=[Dg(s.left),Dg(s.right)].filter(c=>c!==null),o=r.length?Math.max(...r):1,l=Math.min(1,t*_T);return e.rate+=(o-e.rate)*l,s.clapping&&(e.clap=Math.max(e.clap,vT*Math.max(.5,s.clapIntensity??1))),e.clap=Math.max(0,e.clap-e.clap*xT*t),e.rate+e.clap}const ST={dust:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD51PXOBSjr0HNJjGAe3fFLz6k0ABBC5oOeMd/SnJI8Uquhw6nIIHepLhmaczSGMmUlzsAUDJ5GAAB9BxQBCFLNgcn0JpXRo5HRl2spIIPr6U9HRmxMZCoBxtI4Pbr2zTFXcRghB79KAG9PQ0oBHp1q8NKuJYY2t40lLMIx5UisXY5IGM5zx6enqKpvDJESHUjkjn260ANwcjPNA78+3FTW8E15PFbwohkY7F5CjJ9SSB+Zpz27szhSSsYwWA3KOmSWHGMnr9KAKw454IoweO1TpHE85WSb7OhxhiDJ/KkGwQjYru7A71KjC88YP/6qAIe2MClx0/nQFJIwcH0qxFbsy8XEKsWKMjPg9Mk+gHbr1oArqrM3AJPp3o6dyeeMd6nuRAZWe0ikS3Zj5fmuGfbnjJAAzjGeKW2vpbJJfs7mKWRShkRypCEYZfTB/pQBE0JWBZGaP5icKHG4Y9R1H41GQc5qZI5ViM4wE+7nI6kenWolxvAfJXPJA5x7UAA+g4o6c+npQeuRwPSkPH0oAMdADS854GKAADgjNHfpzQAAZ9qleFoZADtlAw3ynIwff+fvTXEZdRDubcBkY6N3A9fr+lOliVJGCiQLtBG8YOPWgBAyl2ZBs3NgKGzgfXv6VJdSRzzblt1hwoV9vQuOpAHAz6DimR4UkjJKNkleeP8A9eKsyvc3TRPLO+1VKRCQ5CruJ2gemSeMY5NAFdRvRuQ4QZAPUjPTHaljiacOqJGhRPM5IGQBzyfbPHftVu7jjikkUyW0xIAZ4sBVZiGO0DrjkcYHaokljjidkuTG8ZATEfMgOQfm7AADg/3jQBGbiJrMxGHMgIw6thcDPVQPmPPUn2pYI1nMnzKuzlsybPMGQNqjHJ6fgPap/swvFLIJC5H7hMfewwyOB1wSeoHv2oSOCRHhd5pCIN6Mq7yrLywI4wvXJ5wBnmgCo8SuFaNCiMTt3MDkEnHPr26YpPIkZgY4nG47ce//AOsU5gyXH79RKOVGG4OOOo9KbKrrMwm3iUcENx9KALHk74muDAkcZGxP3hAVxjPbk98f7Qq3GqarFbNd38MIt3jtgkrBSIfmO5cDBC4IOSTll684rXKxxW3lx28mHYMHkGOQMEKAT33Dqeg6VGUkaAs0yKYMbY3b5iDk5A/DJ+ooAnu4IgLiW0tpprXztsVw+chQDgEDjJBBOemMetQ2yxpFcLM0UTjAXzAxP3sEAAEAjrk44XA64qXSjch5Ra3kkMkimIxRhmaVWUhgAODxxg+tVZ4ZkYGY/M43AcHIPOeKAI2RScBwz/dxtI4+pphAB+U575qa2tXuZCqsi7VLEuwUYHYZIyfQDk9qaLeQAkjAAJ+bj9KAI+n9fejtSnk9OKQ4yORQAdunFAB7d6AcDjk0gJzigC1aCNXzJ5uwfe8r7y+/4fhU6LetCvkIj8sq+WA0hBByMdSuAe3HXrVa1nEEgYDD54bdgY7gjuD/AI1Zhv57aWaeCeS0W43xOts+zMbdUAz9zsRnpxQBSjZc5cE8fKQcYPY9OlaFrbG9mULtjVEYmQgkcZOeOQM8fjVaAbZgdp5PHl/NxjkDr29f6VO93LbPLb2pRU8w7QrCRgNpTAfHIwT04PWgBLm4+1xrNHCsflxBZv3jEyncdrHPGcFRxx8ueuaryxr521HUoFUZXOCcc9ff/wCtSJ5gUFBhc8Z+nX3+vamlCjI2QG+8Ce9AGxaWLXq3FqLuGHT7Y+ZJcmMgHoM4xvb5sYUdNxIAyaqSR2n9qrh5IbZuN08ZztI+9hPUY4GevXFQzh1u95TyJIgjDyyflGB8wJ5yTzn1NQt5pbO4s33gc5xk9/rQBOWQWySxNFvMxBUrukwACD0xjt9c1LcTs7JM4LyAbjJPhtx75z75IBz160TXc9zdx3UCi3kEYA8g7dowRxjpkZJ7/wAqrPNG/lrKnllIyCV5LtnqRnqen60AXZmsonYWlzK8JUshmXYd+fQMduVHXnk/iJLSSFNRjFvbbvNHlATShF8zGMiQgAAEq2Tg8cnmqDKt6ryqY4fKjUEEnMpzjI/r2qawlFtcwyxyzR3EbM4WFFbDAfKeTznkH+R6UAMjMlnKkkUhiuIf3u5X2OrZwMe4POBz1PSomlmEZiY+WDl+mS5Iwfm68jt0/Gnxh3uC6RIQrKxiY5D85xj09cfpTjJbvI8kYaCUu7/uhmMA9lU8jALdSe34gEDtuMmyMQgAEqrHGfoTnrUt5cxyTTC3eWSGVg5e4VTKTjnLD3J4+melRTSDA2xxgqqgFM4yBySDySfyznHGKhJCr1U7uc9x7UAIoyc/pRge2e9Jk55FL14z+dACfzNKPXNJnPTHHalCg9KAJUQtEwEeSo3FsgcD69f50szrO4CL5cYHCs5IXjnGfU5NTJNMYhaPJGsKHzFJJZVYjrgcEngHg9hwBUcsclodskUkc4AJWRdpAIBUgEccc59CMUANjaWONipG1uPXP4fjSpGJJGdX2x4yzycBSR0yM55/P2oCgQq0kJAbIDg43D+XBoJSMowLgEZBZeF5wSB0PegC4mnXlxpUl0kMv2eH95gAkAEAFvYcDk/QZ5xPbrpsHkJdEG5S4CujZMTRkcMGUg5HpnBH0qvYyxs6xPOsCIwYSPllVxwGIwSVHPAB7dadIJXa9EdwJosn5xtQOM5DYPb5eg5HHSgCoiC4fdLcqmCAwx8x9cdifrjNWJbJoIfOWzL20jZSVuSO2zIIBOSAR60p3XFtGk6pFDZgpgKeS2TyRyST/KoI7N7mNVg3SyRgsyohIRBjLH8T29KAH8OWiwSsS467VHXIOB2J6mh2mFnFBJNHKvVVDqwGecZ7H8eM0bY4p3aAh0cmMRSn94wI6kDpnPH+TVx7WK3uj9rdA6fLKsbDcjAbcKRkY6HJ64zQBDC8MmntHPHIZFAEUSIPmHzEncTlcZBwAc98Dmktra3SOCU30kbuctsjJKBWOCDnk8Dp6+1RzQm3jhjnlLFC2USUHyx347Z4PuAafZ7Yg264MZQgyQKv31HTvycnoOR1oAikij+zPcQoETIUgzAsWJJGB1xgYPoRyeQKdbRr5aCS7Ft5owAE3Dbzgn3JwPUYz6VA6rM4itkZtzEqAMn8vp25/rVq9aO30+G2WFA7gStui/eLkcAueSCMMAvy8jqc0AUmhmFuZRGxjVtjSgEruxkLnpnAJx3oS4ltxIkMp2yDa2B94fjQsjuDGrEKPmCkk5P4d6iJyxxhec4Ax+lACvHJFI0ciMjqcMGBBH4GkPA/xFS3Mv2i5kmLSMzncTI+9j9T3+tREc5xmgBOD649qU9e3PtQODx0oB4x1oAUEDGCQw65rTOs319FbWl5cNPDA2YEZc+Vk8hB2B9BxkD0FUYPKCSSSru+UqiZI+Yg/NkenX3pkZZJMgHeDgEckfSgCfc22S0Uq8KOXyuCeOM7sAkY7d/SrUeowxZQ2kE3zBkzn5T1AOfvAc/XPJOBVJpprto42b5YsiNGY7UGSxAz0BJJ+pqSGWORpBNIIozG2FEe8E4yqgZ4yQMntz16UARiKJk8zJBOMgdu2fzpgVlQuGHC464PPBA55q5Pd2zQLGIIi7BWd44yhU5OVAzjGMcjFMsZIPP8uZvLilGwuzkBcnqcA5GPXNACg+XZzROuDKq7Qr53HOd3vgdqVn+1yQrDOsQigyDIQnzKCSM9ySDjPPIFQ3EkayMloZfJ4P73aWyPQgevpipg89u6Tl/JuLYLIvzBSBxtI5znJHA5HWgBLLyZGDSxGRi43EOFY5I4GQfz5xnpVkNJZaki3FvFGFhLRiaJeUdSVYgj5zhgQSO49BVaO4uI4iihPMkIm8xQvmA4PRuuMdsjnHFVDIzhlBABIJGc89M5/E/nQBJclZZDIpGHbO3GNv8AjU0V5iVibaLe8ZiPyDHPGQOinGOR9etVwU2hW3K4Jy2Tz6DH+etSXF7NdGFLiUyLEpVM8BQSTwB7nOKAJPtL7AscxjDuPMLNwSDkZA6gdfzqOZnmcqH3BARgLtAAxnA/Cp7W9ksYw/ls3ng7g+CsiZHB7/eXtjpTLW7+z3AuEhhkEYOYpVypzkfjjIP4DrQBFDOIoZISiZYgrJt+ZcZGM+hzyPYdKieQSMWZVyRggDGD9KXz5MDcQwDb8MBjPHNM3fKAFAxnkdTQAhwPyo6HB/8ArUuffrTSfY+9ACjk9eaAB/jSZ4wO1A44zQBMs5WIRqEXnO8L82CMYz6e1Ai3TJGrxyF8AYYgAnjk8VDyMkfnT0fYwbCsc9CuR/8AXoAHXYzLkFgcEg5B+hFW7OzYxPeNbm4ggZfMXcVXnJwW7ZCN3z6A1UjZY2+aJX9mJ/pQZHEZjDHyyQxXPBI6E/r+dAASX7Dk5wBUsE6QxSAR5kZSqtxgAgg8EHsfb1ot7trWdJY44m2c7ZYw6k46lTkH+VNjnZbSW32RMkrK25kBZSucYbqM5OR0PGegoAC6tlY4gWfbjqWB9ue9W47r7DefarWSUyCMoTKoDISCreobjI6dD681TklDj5YUjzj7ue3fr1PrTQfnyVDH0YZoAkad5JIUlLOkfAC4zt9AcH8KdcRES72DRrIokjyAMp0HTHp1xyaYsMvkmaMZRANzL/Bk4APoTimxzNDHLGgTbKAGygJwCDwSMjkdRzjjpQA1mJzuO7vzVhLhrSeQ25IDxtEfMUEgMu1uD06nnqPrUKShIpkMUTmVQoZs5j5ByvPU4xzngn60u6N3VpC5yuDjGSccf0oATKlQNxOOx4/KnPIWt4kMUS7QRvC/M3J6nv1x+FNKYVW3KQewPI+o7UzLcZzgfpQA5ypJ2g4z3PNNHUUdR2xSZ56UAKP1ozj6CkHH8VL0P+FACE8gdqcB+lFFACN1x6DNIDkiiigBSAMflSNkAc9RzRRQAZJY+1OxzRRQAnv74oxljmiigBPQetKflAx2oooAB1/HFL0GfSiigBO+PYUYyM9zRRQAgGTjtQTx9aKKAFxjOO3NLjJC9jRRQB//2Q==",line:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5UooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA0/7CbGTqOmD/t5FA0PIz/aWmD/ALeP/rVuD7Rv+V7vn00KKl/0pG4Oof8Agkj/AMa7fYx7fl/mYc77/wBfcYY0MYz/AGnpn/f/AP8ArUf2IoGTqumf9/j/APE1vYvByv8Aah/7gkf+NA+2A5/4m4Ptosf+NHsY9v6+8Od9/wCvuMBtGjX/AJi2mn6SN/8AE0g0eMnH9rab+Lv/APE10Bmux1l1UD1OjR/41A106sTJfXMZ/wCmmkR/40nSj2/r7wU3/X/DGONFBPy6lpp/7bY/mKQ6FOThLnT3Ptdxj+ZFab3lsTzqlgx7ibSwP5KaMxTcCTw3MPdHhz+i0vZwf/D/APDj5pGb/wAI3qpXdHZtMP8Apiyyf+gk1VuNMvrQZuLO5hH/AE0iZf5itxdNWYnbolrN6GyvwT+ALN/KnYNimCPEmm49PnX/ANkpOiv6/wCGQ1UZzFFdKdQEuANbtLj/AGb+y5/Pa386Q2yzH/jy0O594LvymP4Fh/Ko9jfZ/wBfK4+fujm6K6U6Cj/MdD1RBjrBOso/9B/rUZ8PQkf8emvx/WxDD89wo+rzD2iOeoroE8MqzY8vW/8AwXf4vUp8N2sIzN9vTjP74wQf+hSUvq8+we0ic1RXV2ugWMnMcBn9cTvNj/v1Hj/x6rcVjZwEotvaI/8Ad8tC35O0jf8AjlWsLJ9ROqjjIoZZ32RRvIx7KCT+lXl0DUiNz2rQL63DLEP/AB8iuwmMkMQEjTJH2D70T/x5oV/8dqnHc20bZWa1jbsY5oUb/wAhxu3/AI9Wn1aK+Jk+1b2RXVYx1Fuf+40tI0cLf8s7XPvrSn+tIUI6kj/uCJSs0agBpIhn+9oiCtP66E/11GmOMf8ALO0P01hf8aDGhPFrGf8Ad1lP8aa09tHkNcWI/wB/SQP6U37VZY4utDY+j2Dr/Jan3f6sGv8AVyZYJgBss7vnp5Wrof0wak8u9iPEHieP1MVz5n8lFVSlrMOF8NSfR5oz+pFImnxMcppdrJjva6mufwySafp/X3IPX+vxJpr+eD5ZNT12Adxd2ocfq39KhF6kx/5COjT+1zYbD+YT+tWEhuYBlYPE1so7xSeao/ILUL3+Tsn1dhj+G/04N+Z+Y0m31/r72gX9f1YaLOOd/wDkG6Rc5/59b3yz+Rf+lPSzltCSlj4gsh628nmKPyA/nTQtvPyT4cuB9ZID/wCyinRWMTMGh02NT62urIP5kmhLqv6+5fqO/f8Ar8Qe/O0rLrE/+7f6eH/X5qaXtJutx4clyP4oJYj/AOOqK0Y4r+NcI2vxj0F/G4/pStJdLhpJ9RB9ZZbYfqTV8re/6/5k3Rm/Z9OIyYtCBHdLucfpmpY0s2IEKae56bY57p//AEEVeS8dmwt5OGPZdQh3H8Io2NSssqj/AEh7gL2E8s5B/wC+3iH6U1BdLfcJyfX8yt/Z8EYDS2cCY/ia1lx+c8qip7W36vbIn1gjQfrFG2P++6khgWMebFEEHeRIwP8Ax4L/AO1Ka00dw4AMc7DvxK36CY/qK0UUtSbtjmKTEo7LO4/hZhK35Eyn/wAdFPkWaNNrpOkf911dVH4O8S/+O1HL9pdSHgvGUccwTsPyeRF/8dqr9n2PuFsy/wC7a2iH9Sxobt0BCF4o/uPaRsOpW4s4z+aq5/Wnf2gRnOpZOP8AoMMB/wCOoBUm+627Y01EDsENtj9BUcg1FRgxa6B7WsUn8qnXz+4ehX3ycELMT/s65HSqLtjlU1LP+xrMZP8AKsQa9IOthpjfW0T+gpP7aQ/e0rTW/wC2RH8mFc3to9/y/wAjXkf9f8OdCItQ+9s8SkY6perJ/IU2Sa/Rfnl8SIO3m2gkH6kVz/8AalmxzJotl/wB5V/9nNSx6tYpjbZ3kP8A1wvSv81NV7aPf8/8hcj7f195oyX6H/Xajbbv7t3pSj9QCaj/ANGl/h8O3A+ssB/9lFIniCEYxqWvRezSrMPyOKBqtvLnfqaPn/n50yNv1GTRzRfX+vmws1/X+SJY7FM5t9NCsP4rLVEP6HJq2n9oIu0N4oQegUTr/MVQ86wkHM2gufR7eePP/fIFOiTTVbcf7FU/7FzcrVJpbP8AH/JCfmWiJ3b99JdHHGLjREY/ieactkrEEwROPX+xnH8qhNxYxAkXWnj2F3dH+S1HJqWmcF57dxjoi3Mn/ociinePVr72Kz/pF/7CoG77CoHqdJCgfi8gFLFbwGTCCDf/ANM47ZSPwjWVqyf7d02AfubXefa2hj/Vg5/Wo5/Fk7rsit0C/wDTWR5P/Hchf/HaXtaa6j5JM6bc0aiOWaRR2Ekzrn6Kzx/+gGmhDCPMWNolP8aRlAf+BARD/wAfNcdJ4g1N12rdNAv923URD/x0CqEkjysXkdnY9SxyamWLj0Q1RfVnbS3tmriR57ZWz95pot35qsrf+PVWm1m0kIV7+B177pLuT9MqP0rkKKzeKl2KVFHTm/0lSdsmnnPf+z2b/wBCemm903kLcaYc/wB7TiP5ZrmqKj277L8f8yvZrudKZbGXkP4fb2aGeP8AkKWO2tCflstHc+sWotGf/H2rmaKPb91/X4h7PzCiiisDQKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k=",dandelion:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5UooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK3PD+iQ3Ucmo6gV/s+2I8yIXCxTTA5/1e4EHBxn696AMOirF8kEd3KlusqxKxCiRgzfiQBVegAorWg8K63Pbx3K6ZdLBKcJK8ZVG+hPGORW9F8I/FVxbRTW8FjOX5eOO+hJhXGQ0h3YUHnGT2NFxXOLoq5qmj3+i3klnqNrLbTxnDI49geD0IwQcj1qnQMKKKKACiiigAooooAKKKKACup8P/DTxN4jaQWuntCsSB3e5zGAD04IzzkY45re+Efga41mSbxNJZR3enaTMgkjkCsjuVJAZTwwwOnckds19BeGLS/1K0uhZpe/2jc7jclyIwBtAB6fKQpXhffB7DCrOS0giZSsfM158KvElrLcxRRWl3JbY82O3uUZ15x90kN146c9s1gTbLO0ksrqwRLsOR5h3LJGQeQRnHf0zwK+vNXt9ItNRsLaxtnOptGILtPL8yaeMfMRvPB+Y5OeOAM9q4L9obwK2peErbxvHZwxz27CCaSElQ9vu2xsVxjdlhk5yM45AyLi5rSRMZpnzfWto9/BaWl+tzYW92kkIjHmZDISwIKsOhGD9e9ZNaMiW0egQOkjNdTXMgkTsqKqbfxJd/wAhWiLZUuzm6m5z8559ea6/wP4TupjY648cUqG7EVrasqyNduOqhDxjOMk8Vy+rak+r6hLeyRRxvLtysYwuQoGfxxn8a+gdH0ux03RvDg1O0kZbK1Se0aJQrFpBne/o2WA59B15q4Q5jOpPlR1Vist5ZPb6hp3mXdwfnsmufONvtIDAEDG0jAGOgz0rF8QS2VlBLo0enrZafEIT5in94ThtwCgAsCOvXOOvau00XSIIo5LGOH7TJI3zNGcyKGwCQ3HTitTWPhudKaXUhc3NwxQ77aOP5gcDlXzz0I5/vHvWzoxSscqqu9zz6z8L+EJtNh07xBDHPaXELSNd3Eg861Qg4ZGXIO1iAwzjpgV86eLfDcvhfW57B2MsIYtBNxiaPJw3BI+o7HIr3SHwzquoeKYtGupj/Z0pLPbFBELfk5AJ4J78cHivPfi74Q1LQrDRr/ULhJ/N822RlcFdqHcNuOxD5PoeKynC2qR0U562bPM6KKKzNwooooAKcn3voCf0ptOTr+B/lQA2iiigD6k/ZH8SadH4Y17RbiRRd290l8iO2N6MoQ4H1UA/71ey3WpWcN5bwgRfbDJiRYyrMkeTtJUYOOlfn7Z3tzp9wtxaTyQTJ9142KsPxFelab8VvEkPhaa91K9lubgSLYWVyzDzVUgNLyfvYXYMnnLirhyp3OerTb1R9O+Nb++ntvO0v7Gb1TiPKHlMkH5gCV5479TxXK/ErxLaeHfhFrmlX887y3FqLRI5lOwzNtwsYx0ABPtgd64rQv2h/DsgM2owXdjKkeFCL5m7A6AdAxPfjr1ryn4qfE26+Imrho42ttKtmb7LbtjdzgF3I6scD1x0HvtUcHHQypU582pw5q3Lqc02lW2mMF8m3nlnQ990ixhvw/dr+tU6K5jtFFfYnwmhg8QfDrw7qYii1ApGLKWBFDG3ZGKjcSfkGAp5B7ECvjqvS/gr8Ybn4Y6nNbXSyTaHqBAu44uJYyOkkZ9R3HccelVGVjOpDmR9E32vx+HNVe2khuJ7mRsxInDhVBZmKdh7DluTntWl46+IjWvhjw/PCZFkvL1YJwXC7RsLYb3PUdvlP0PlGv8Axm8Halq1xf2V5dQXc9mkC6hPb+ar45Kyx4yO+GUZyQc4zXJf8JqfH3hTxhBrU0ZNlFaahE1pb+W0uyfy2J564nHP44rV1DCNFnt1rcWuvXcVxpl5FLFNGSsyrkyru2kqeuQQQMHH6V5D+0zqUdtPofhmOQM9jE9xKCPmBkxj8wCfxFYulfG1PC0QXQtKkMvkKvm3s28LJnczBVAGCcDHTGTjJrzvxL4m1XxfrM+sa1dm6vZ8b5CoUYAwAAOAABiida8bDp0HGV2ZdFFFYHUFFFFABTk6/gf5U2nJ1/A/yoAbRRRQAtb/AItY2RsNCBwum24Eo4/18nzyZ9wSE/7ZimeCNPh1DxLZi6ANpblry5BGQYYVMjg/UIR+NZV/ezajfXF7cNumuJGlkb1ZiSf1NPoTuyvRRRSKCiiigAooooAK7H4X5uda1HSQAf7U0i+tQD3cQNIn/j8SVx1dL8Nr9dM8f+HbqQgRJqMAlz/zzZwrf+Ok0Ajmz1pKva3pr6PrN/psn37O4kt2+qMV/pVGgAooooAKKKKAClU7TnrSUUAFFSogYcL+Zp3k9fk6e9AG/wCHv9A8KeI9TyytKkGmRH3lfzG/8cgYf8Crma2JdUlTw7FpGxBbm6N2SCdzMUCDPsADj/eNZwiyMhBz/tUCRBRUh2j+Hp70fJ6D86BkdFSfJ6D86T5f7uPxoAZRUnyeg/M1PYWTajeQ2kIQPK20M7EKvqTx0A5oAqU+GV4ZUljba6EMp9COa1TpukA4/ttD7i1k5p8OiWN4xistVimuNrMkTQum/AJIDHIBwDjNAGr8XIEi+JGvyR/curk3q4/uzKJR+j1x9bfibV5Ndvob65SMS/ZLeAlMjcsUSxqx9yqDPvWTtX0H5mgCKinkqD9z9aTcn9w/nQA2inbk/uH86Nyf3D+dADaKduT+4fzo3J/cP50AWbQfLmrL/wCrJoooArzjcsanpsJ/Sg/eNFFAEVwMMfoK9l8MwWTeGbCeTTrGWRYIwGkhDH7o5+tFFVEC4k0MsrRfYLFVH92ADNeFkAs/+9RRTe6A6LR7iay0nWYIJCkc8XlyDAO5eD/Sqmg/utbsdo/hJ/NDRRWlVasiJrXUdnZ6p4ZeDTrRf9HjaVSGYTtn7zgnk/TAqnZTi58avMIood8kh2RLtUfI3QUUVnLYuPwXMS6H7qBu+wClu7yW6S3WTbiCIRJtUD5QSecdTz1ooqQKzdR9BWjLpsMUulqC5F3EjyZPQl2Xj8BRRSA3/wDhD9PLY8257fxL6Z9Ky9I0K2v9ZkspXmEab8FSAflIx296KKAJNe8P2mmWCTwtMXLIPnYEcg+3tWVpNql5eRwyFgrE5K9eFJ/pRRQB/9k=",jellyfish:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5VooHegVSV7AJRRS9qSQCUUtJSAKKKKAJrVd0orR1VNsS1SsBmYVpayuIM+9erQj+4Zzzfvow6KKK8o6AooooAKKKKACiiigAooooAcoycUKOaVeGFPC4kxXVShdL1JbIiMGnAZBpZV2vUkUe4N/u04UvfaE5aXIdvy5ptWfL/wBH3VWrOvDlsOLuFFFFYFF7Sl3XCj1rT11Ntsn51T0GLzLpa0/ESfuF9hXsUV+5sc0n75zFJTgODTa8lq1jpCilNJUgFFFFABRRRQAUoFJVi0hMsqjHHU1pSg5yshN2VyNlwM1Pt/fIfUA0NETBnHbNTCMmOB/Yj8jXoxhZv5GLloR3cW1lP4VNZRbvxU1Yv4MKpx3z+YqfTYM7fxFbKHv3IcvdsU0gzZsfrWUeDXTxW+bSQY6E1zUq7WIrmxsPdTLpPVjKUUYpUGTXBGDbSNrnQeFod0+7HQVoa9Futj7U3wpBhWbH8NaGrw7rSQ46CvYhpGxyy+K5wgX5WNMUZNWTHiFj61FAm5jXBOn70UdCloyNhzQUYAEggHpnvX0V+zV4e8EWGman4t8Wram7hnEdmL2EvHFGBzKq4IYluM842+9eq+IvGHhnUVjtL2/srizvA3lpd2ebaVBweWXA6jsKungalWTsvwfr+RnOuoI+HqK7P4ueHtF8N+Nrq18PXEcumyxx3ESo5YQ71yY8nk7TkDPOMZ5rjK4pRcW0zZO6ugoooqRigZNbGmQiOAzEct0rKiQtnH0roJovJgSIdgB/jXpYKFlzMwqy6FXyP3JGP4TVmO1zp8Jx0JqyttuUDHtV21gEmmqMcoxBr0VBGDkUtTt8W0L/AEBqXTIeE4/iP8qu6lbl9NUgdMGnabCNqEDv/Sjl1FfQrW8X7qZfc1yV8mydh713UUODN9a4zVUxdsP9quXEq8TSk9Slt6U+3Tc4qbycY+hqeygyQfaueNPVGzlodd4bt9lqTjqKsavHixmPtU+kReXaKPUCk1gf6BJ71u5a2MThZodtvnHbNXPBmgP4j1y00xCR9okwzDqqAFmP/fKmn38Oy0bj+ECtX4f6y3hHXLHWxbi4FsxLwscCRCpVlz2yGPNKMVzpspv3XY9i8aaxbW39leEvDqwpp8ltDBcSKuSSQD5a+mMYOOSWIrsvEngG5n06ySS1aI2cYEYxyM43bvcnHHbGK5n4UfELTNd8VXV3p/g5Xlt0DefdXIdoNzhR5eEwD94kkZwvHer15+17p9prAs7vwlcNabEcNHdK0gYjPIIA6Ed69zEYz2CprCw0ju21dt6f8A44UnO/tHr+hxPxl+HUqeAbHW7a0IfSiYrhgvPls3G76Ej8q+f6+kvH37U2l+J/CPiHw/beF7i2bUoDbwzPOpxkjczgDqMcAZ5r5uPWvmcwqOpWc5Kze530I8sbCUUVLbxGaVUHc1yRi5OyNm7GlpFkZpoQR1bcfoK2LmLfN06VPpFoIkkmxwq7F+tSiHhnNe1TSirHHJ3dyVIMSMmPeprKPb9qh9DuFTBQ0sUg6OAfzqRYvK1DHaSPFdLZkKYPNsCuO1QaZGRGn4f4Vp2qZgwagtYdgI/uuw/Ws3LUZH5OJJR681xGtw7bxuP4q9BZP3hPqK43xLBtugcdWFZVdUXDRlF7f5Dx2NT6bDkJx1q08P7ljjoMVPpsHEf+8BWb3LudPbJsgUe1V9UXfbbfUirqjCge1QXSb9o7c1nfULHMaxCREEx94gU5bcxWgAHJAH5mtDV4d0iLjpVk2e8QRquSWHHritaVnNLuKWiPY/2afDaaR4C8TeJb1VU325LfdxlIo3yR9Xcj/gNfNAikvtUMknJ2B29uB/iK9/0LxjNpnw5OlpIATI+nWcQ5yfLaNnx/vPM5+i149p9gJZNRmjXjcYk/BWP9Fr0fq/LUvLrLT0Sv/kZKrdO3Y4+7Uq6g/wB0N+fP9agrQ1mMR6lcIPuxt5Y/Dj+lUMcV8/io/vZWO2DvFABWzodmWYykZxwPrWZDEXcADNdtotgIUjBH3RuP1rbDUrO7Iqz0sW/J8mCOBeo5P1qK8KwW5Ge1XQmWLGsHxDdeXGwzyeAK73ZK5zLV2NjSz52nW7dSvymtC6jw8Eo7HBrN8N/NYlD1U/8A1q3Hj3xAenNHNsFtRtuMKR70yJMNL/11P8hUsQxxSRD55v8Af/8AZRWcpajSArz+Fcv4pt/3kbY/irrCKxfEcG+FG9Gpc19BpGXLFizJ9TVvS4Plh92H6A0+eDNivHerdhFs8gegY/p/9eokykaGKay5xT6MVzyZaM67h8y5TitTS4ozqULy/wCrhSSZ/okbN/SqzJmYH0FbOkaSdQ07WJB98Wy20P8A10mkVP0XcaqnU5Zxl2CUbpo5yyjaG6s5ZM7rexku29mZXk/9mWrnhHT1FlA8g48q6u3z6IqD+h/Op54FurfxHqEIzBFAlvEfZ5UjT/xxDVv7LJZ+FLy9T5Ut9HCMfUz3ZXH5Ka64Yhq3l/wP8jJwPIdSUyXEznqzEn61UERLhfata5hxEC3Vjk1BbwbmeTH0/D/69cbjdm17FnRLDzrlTjjP8q7WCEJGeOtZXh+z8tC5HQYFbmMDFdMNFYylqyFxtQ1xevTB7pu6wjP1PauzuW2xMfQVwWtsVVVP35WMjfTtTqy5YNipq8jsvDow06DoGNby/dooqnsLqIB81Ni/1s3+8P8A0EUUViykSGqGsIGtefWiikMrlQbFc+tWoVAeLH9xv6UUUS2AsGkoorNlDf4jXVaQTb+DNUuI+JFjnlB/2lEYU/huJ+tFFYSNEZMKCLwJeqnAm1C3Vx6hACo/N2qz4jAh+Gg2DHni0V/cK7EfqxoorSHQlnlV8o3KOwFLaxKVUY4O3/GiitkSdbaxrHCoUY71LRRWqMyrqH/Hs3vxXA66xbU5geiYUD0GKKKit8JdL4j/2Q==",standby:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5voFH4UAdKAFHb/PpQO3+fSkA6cf54pQOn+fSgAHb/PpSUoHTj/PFGKADmj/P86Me1BH+cfWgAOef8+tKe/Xv/WjHXj1/r7UpB549e319qYAc89e/9aDnnr/nNBHXj17fX2oI5PH6fX2oAOc96Bnjr/nFGOen6f8A1qAPb9Pp7UAA7de39KBnjr2/pQB049O309qAOnHp2+ntQADPHXt/Sk5wP8+lAHTj07fT2oxx0/zx7UAJQc0dv/rUEcHikAmPagD/ADijv0/SgD2/SgAA6cfp9PalA6cfp9PakA6cfp9PalA6cfp9PagAA6cfp9PagD2/T/61AHTj9Pp7UY9v0/8ArUAGPb9P/rUuODx+n19qTHt+n/1qcF4PH6fX2oAXZ149e319v8/yeYW+b5Dxn+E/7X+z7fp+UsVsZA2EPQn7h9H/ANn2/wA9t+38M3c4mCWc29FkOPs7k8LOScCHt5Z9MY7YOzSMLgc48DDd8h4z/Cf9r/Z9v89mMhBPy/p9faus1bwlfaeZPPsZoyC4ANtIucNMD1hHTyz+XbB285c2rRuwMZBBP8BHc/7A/wA/oShbUCpt56fp/wDWoA56fp9PalK89P0/+tSAcjj9Pp7VAAB04/T6e3+f5gHTj07fT2/z/NAOnH6fT2/z/MA6cfp9Pb/P80AY4HH6fT2/z/NAOnH6fT2oA6cfp9PagD2/T6e1ABj2/T/61GODx+n/ANajHHT9P/rUEcHj9P8A61ACd+lAHtRRigAHbj/PFA7cf54oH+f0oHb/AD6UAGPb/PFAo/z/ACooAXHt/n8qeB7fp9fao6eP8/rTA2dNtklaQNFnCOeE9EkP/PM+n6duo9t0Hwzb3OlvI1jH/qpufsiZPGoD/n0/2R+Q9Ao8PsHCFztUkqw5UHgrJ7f5/l7d4d1C3h0qcDYQsM6sqIhwdmpYz+79/wAvbgbNXjoIu+MvCtokV2oshjfMdy2qgjDXp6i09h37DsAw8L1u2CX02IlUBjwIwvc/9M1/l/8AW9s8fazCy3hjSDd5kwQPGuSDJegnHl57+vp+HiGssjXspQLtLNjAGOp9FFCVo6gY7Lg9P0/+tTMe36fT2pzYz0/z+VMrEYAdOP0+ntQB04/T6e1A7f59KB2/z6UgAduP0+ntQPp+n/1qB2/z6UgoAXHtSH6UUUAFFFFAAO3+fSgdv8+lA/z+lAPT/PpQAen+fSij/P8AKgUAFOHf/PrTacD7/wCefegC3FLt3YI6MP0f3966e1157e3nQTOu4SDKPjOVuRz83P3/AMj+fIh8BufXv/ve/wDn+dr7SQr4fs3G7/rp/te/6/ntCVhHU6zrzXElwDMZW3yYZ3DDl5z13f7X+e/K3Uu+Rvm7nv7n3p1xcl2fL9S38Xu/+17/AOe9WR9zE7u57/X3onK4EZPNMFOJ9/1/+vSZrEYD/P6UDt/n0oB6f59KAen+fSgBB2/z6UUDt/n0ooAKKM0fjQAZ560A9Of1oz7/AK//AF6Aff8AX/69AAD05/zxSg9Of1+nvQD05/X6e9APTn9fp70AID7/AK/T3oz7/r/9elz7/r9PekB9/wBf/r0AGff9f/r0uevP6/8A16M+/wCv/wBejPv+v196AHbuDz69/r7/AOf5vMhw3zev8X+97+/+e8e7rz+v196cW68+vf6+/wDn+bAe8hO75yev8X+9/te/+e8bNyef1+vvQz9efXv9ff8Az/NC2e/6/wD16AEz7/r/APXoz7/r/wDXoz7/AK//AF6M+/6//XpAAPTn9fp70A9Of1+nvQD05/X6e9APTn9fp70AID05/wA8e9GfegHpz+v096M0AH40fjRn3ozQAZ5/+vQO3NFLyMdeaAEB6c/5496UHpz/AJ496B2/z6UDt/n0oAQHpz+v096M+9Hp/n0ozQAZ96M+/wCtGaKAFJ68/r9fegnrz+v196D3/wA+tB7/AOfWgAJ68/r9fegnrz+v/wBekPfn/PNGaADPvRnpzRmigAB/z+VGff8AzxR6f59KM/5/KgAz/n8qM+9HpSZoAXNGaSigCxFd3EMflxzuiZztB4zTrm+ur1YVuZ3lEQKoGP3QW3H9STRRTuwK4HT/AD6UAdP8+lFFIAA6f59KO1FFABijFFFAB6/59aCOv+fWiigAI/z+dIe9FFABjmlFFFACDt/n0oA/z+VFFAB6f59KKKKAEo9aKKAP/9k=",sphere:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5VGM89KXI7KKTFB9cCgBcjBHqKVOTg9PpTcH0oAzQAvGMevpSYqSGB7idIIEaWSQhUVRyzHsBV5dFuNzCbCbfvLkcfU9B+tAGaAPrV620ieZfMlkgtVxlTcNt389AOv49PerccMUGRBLChA+aQjcV/Pp/nimyf2a0KAyXk8rsS7thVcjAHYt3P59KAKj6XIjFfPgYjsrEn8sZpn2FySMjP+4/+Fafnx2n7oWVrIG+XfJmVYjnjknGfXjHtUVvq90s5O+SHystiF/LAI9h74oAgXR2A/fXdpBnp5rkE+2AD+Z496gudOurXiWJsDoyncv5jirL30V0S00sqSE/fKq4P1H9ant55InSJXjPmYVD5WM/THBHt/KgDGIweDmj610N/bW5kJeOyKkAh4ZGKkY9edreobvVH7BZXAeOC5kjnUHbFKnDHjjdxjv1FAGaCCOQTRgnk8d6GRo2KOCrDggjkH0pMkjGTQAZ+XHvQQRQKd1XB6L+tACfKRknBx0ApKDjJx0o7UAGKCO+MA0dqOp7/hQAp9cmko5z61d0+0EjLNKv7sHAGM7yOTj6D+lAD4EFpbGVyVeQbQR1VSOce5HH0Jq5eSboII55F8sA/wCh7yuxuCWyeASCM9zjnAxVaS4VrsMOSgJA6iJRzj3Y9z6mq0qyziLHzO25yc9OeSTQAt1b3OFYKWhzhNg+Ue3HepZAbeOOOIFrg7gcc+X9Pf37VNp0zabIWifDSxsmcAlgQR8oI4/3uvpSTas01tEk0UTxAsu1RsI6HqOT175oApJE8DAtMIT6A5b8h/WrxmtJbV5Hhy8jLG0xO3B5PKjscD34qr5cMvMMRf8A2Q+GH4HOfwq1ZQWr2+JmuY4pXIG0KxaRV+UDJHcgE9gfwoAqeVhiPs8Sgcl2Ylceuc1Zt9QFok3kwwNHt2MWXO8njj04zg9aYiSXKiNAs0A6ImQU9xnv/Oi906e1iijfYPMzJ95RkHgcZ46Hj3oADKI4RJHGuF6OpKkoT0Iz2PUe9S2lzY3EwW8jlijCnMsZDFFIx0OM9emarWkTo3lyxsYnBDbSDtz3FJeWk2nj7PMjJI3zNkcEfw49eDn8RQBbns2uEPmukjxjalwh+VgOgfuD6E/4VlSIY2KMpVh1Bq5biURpcrI0LINu4dXXtgd/T06Voyi01q2WRoPs1yqlfMTpIw6Ar0GcgZXAHXHJoAwQpOepA7ijooIJz9KQjbx3/lTiSec9u/egBFIDc8ikH545xRyp5pUGc+v0zQAnX04oyc8fpRQQR7EcUAFdBJdotpJC0cKOIYo42EeAVCgsDjkZLckde9YAHQZOTwRWrdbmvEhTq8W3HfJHH/stAEYt0jt2eaFrdZDtDg5UgcnaD17d6kuBFDBAsEiFihyki7dp3E854J5Bx0GaYt04tQpcyW9q21Ub5lJbngH1IJ+lQrJDcQvvBRw28kfMOeDx19O9AEYSZLqOWUMRvHz9c8+tNdcQOv8Ackxn6g/4U6OG4jObdjIDxmIkn8utaRmihNyJY45mY79y4VgRzhSOOhOTg+3rQBnx2oiUS3DtHFnKgD5nPsO31q22pGeGNikaeW52yBQXUYGM+o4qpMftb+Yky7+AEYbSPoen65pqRSCF4jGfM3qQpHPQ9qAHXcU32ry2YvuYeWScgg9CPzp4uWl8yGNyRnMakZHAxjHTkD9KmhkSLyVdVkZ1KbcnarYIByO/3en45qpEI5ZUWOGXzCQAEfv+IoAdAYZSXltxhepjOCx7DHTmtG5XEEE8Nx51wwZJoXXAVgeOOQx246dMd6ivfs0JEdtNgsu5mZeA38WCPcEZ9KjtbKW7glhh8uU53qEYdgSTj6CgCKGZZrg+fGynGJGXgBe+Qf6Yqa4/0KQi3cNHBJuiYjG4dCSOxPGR26VXluwALd1Mka8Fm4bP19PQGrUMDXV20FurT/aFA8lfvklcjA7nOOlAFbUoV3+fGSY2OPocZGfwqlkjofyrYt7V9qJIjPBKpjduBjHIbk9Rn+lZt3bPa3Mts7IXhcxnYdykg4OCOtAEIx3NKMn1oBxkEUgI6EUAKOOGFIDgH3pTwSOvbmkGc8daAJrWL7RdQwryzuqj3ya051cX5uyFUKQEDOowc49ewH8qxs+vWtrWPKvoLS7gJjLxYlDYAMoJ3EHtnAOD70AV5LOSKWWyBRggZTtkU5YHOevtge1Q2tpN5yqI2O/5MDng8VJOHS5dihEkTbiCPvJnP6fy+lQw2/8ApjqANsWWyegA6E/pQBMLeSyZvNV4nj4duQQf7oPr7/WnS6lLcyw3NwEl+URHK9FUYAyP9nAqO4uWeNXgd1VDtbBIyf7x9z/SltZHuElVxGyqN5LoOMe45yRmgCP7PE8rx4aIqTuOdyr/AFH61bgeRIpba2ZJkZOd3JbBzwDyB16VBd3EM3l/umiQqD+7bIJHBJz1PHr3plrAJbmPyHVyzAbD8pPr14/WgCRIkkTywslvMHBVSCck8fXrj1qa9t3spJI7dklkkGZJImDhQedox9eT+H1mWa60X7RYxMSZEaKWT7y4HO1SeOqjJHXtx1os8c8cJ8khiSmYzggjkcdO/tQBB5ZlhVF+Zkcrj2P/AOo/nU9tMkDNEhD/AC5Zuu7HOB7cVZgnASWCO4jmLociYcnHOAew47EZqrGsUUsbTQyQjcMsvzKR36/40ARl5BN5BAmwxUBx/I9auXEsFmInt4i02wBmdshCOoGMdsdexp89obMK6PHLPIgwqnlMZU5B7/L/AJ5qgiPIrwsH8zO8AjnPf9OfwoAutJI8Zs92ImkWfYowMZwOB7EmqF8xa8uGJ+9IzH8TVxMSXSshyPKeL8lKj/2WqNyP9Il65Dnj8aAIjwcgYFGQOn40EHJzx3o6cg0AAxnnkUoO00AgYP50lAByO+K1NPuI2spreXiIMCc9lOASPcHafz9ay81NZ3ktjL5kRGSCpDDIZSMEH2IoAtXE01temJlWXbt+XqD8o6H0Pt61oX2noNPhntvMjW5VRKZ12hWX+AN6Y2ntn8qJ3fWbPzIJ382BAME4O0fwsR1x2b069KoG5MMlwhXcqMA6P0ZR8pz+Q9xQA23szG43yRvG3yv5X7zj8PTrQ6bZwtuyskbcL0ZsdSQe59s1FPbhCJrZmaLG4f3lHv8A41M5nnuZF+WQbz/rBnGenPWgBjWkr5tkRi6yfKDwSrDrz06frSSypaRNbQMru3Ekw7/7K+3v3+laf9owfZTa2qsuIzHNJnf5vO4YVvurxjAPOAT1xWYVik6LE30Yxn9ePyoAFnkiuY5Y2YbwrYXuehH5g1YkmWKO4tXSKSRSC7gbWGDgqCPrzSywxW1qC3nRTAlTuTIjU8jnPXr24+vRsNobm7VY5ov3qc7iVVflwSSRgAEZz7UAVoET7QjRPltw/duME+3oasyxvocskUmRcjIMYP3Pr2zUZmWxYw22fP8AuvOQQR7KO316/SoZZ2WaVTtkTe3yN25PT0oAtanfNdTtPPDA7s7A7Ywg7HgLgDrUlldR2zpIfMDFWKxtiRVG084P6Cie2Qo8owXEuUt2+82V6+44Huc9KqQKdzz3BJJRiFPV+MflQBoWFvbz2zu0iQ/OuwgMrEZyxxyMAKCeRWXezRTXdw8O/wAppGaPcMNgnjOOM4q1du1taiI7RJKMuR2H90emMAfXPpWbnFABjnmg8nilzjnHWjOBgdPpQAgz2JyeMUdvejJBznmkoAUe/SlHPBPHWkzjoaCc0AWLC+uNPuY7i3Yh0YMARkEg9x3rfe3tdUk8+BIIkuOAd6psJz8jZ4GD06ZAH0HMjk5qS3nmtZN8bFTjBHZh6Ed6AL6QR2khgaVmkz90/uyjdM5PX8OtT6nFLb7PtNo9rJKgOI1IVBjrg92GDnPQ+9PgMOtlYnKx3ORje3BH16jHrz7jjNNNneusyxRSXESMZF8o5Ma9CQVyAOnPTigDPsw1vcJLGVmQH5lU/MR34PNEtu2nzsjDdLnCLjt2bHv2qWSV7dA0c32kjqzgEIfoe/v0q1e6tcSW8ImOXUbZZF+WRieRuPcY4x7GgCnZEwuyyzsvmfKUQ5Oc8Z7DnHr9KsXd9mxt0a1hjyGH7sbXYbjyx7nPHTsaghXzQZA0Lxr1DRqrE+g9T+NTXctxcpFNDGsTbcOka7dnJ7nkA/XrmgBlrbJePGpMkRLDbJIMKOehb098cUyeB7aSTYizSEkl1wwX6D+p/wDr0wIkMZlnmLO+VUJ8xx3OTx7d+9WrAGY/NEsMKLu85+Sg+p7fT8KAGXkbRuPMjZ3cbghBJJboT36AfWrNnC028XId7p0Ox+f3SrgszHHICg4Hb14xUlybqa6nu5b2V4iSXud7EyDoAM8rkDoefbtWbc6pIyvFbloomG18Mdzj0J9PbpQBXvbgXEzOowmcKO4UdBUJ6kDp9aMAg4x0zQu4HIH6UAJyT7mlHGc9P50ZxzzmkzQAA4OaVxtYgdqKKAAgYJ6YxSdqKKAHDBU57U0c/lRRQA7c0MgaNmVlIIYHBB9a39MuJdSS4muHbzYvnDqcEk9c9vyHNFFAFZr+e31RI9yzJvUYmUPwccc9vark0aTWjXaxxxNPlmSONdoOc8Ag4oooAx57qbe6B9qxkqoUAAc1ZmvrprqC1knklhVUjCSHcArYJ4PuSaKKAJtSEdrqP2dIIiASocjkAHHbj9K2dZ0u20bRrK5hVppbiLz3aY7vm3ED04AHH1NFFAHKXN7cXTBZJWKZBCDhQfYDjvVZuWNFFADto37e1DDaOPU0UUAIvLgdM+lIfvUUUAf/2Q=="},Hi=[{id:"w3",name:"Dust",tall:!1},{id:"t3",name:"Sphere",tall:!0},{id:"w2",name:"Line",tall:!1},{id:"w1",name:"Crowd",tall:!1},{id:"w5",name:"Bloom",tall:!1},{id:"t2",name:"Machine",tall:!0},{id:"t1",name:"Standby",tall:!0}],vo=s=>String(s).padStart(2,"0"),Zf=s=>`${vo(Math.floor(s/60))}:${vo(Math.floor(s%60))}`;function AT(){const[s,e]=pt.useState(0),[t,r]=pt.useState(0),[o,l]=pt.useState(!1),[c,f]=pt.useState({at:0,of:20}),[d,h]=pt.useState({w:window.innerWidth,h:window.innerHeight}),g=pt.useRef([]),x=pt.useRef({pos:0,vel:0,target:0,dragging:!1,lastX:0,lastT:0,raf:0,downX:0,downOn:-1,from:0});pt.useEffect(()=>{const D=()=>h({w:window.innerWidth,h:window.innerHeight});return window.addEventListener("resize",D),()=>window.removeEventListener("resize",D)},[]);const m=pt.useCallback(()=>{const D=x.current;cancelAnimationFrame(D.raf);let W=performance.now();const $=G=>{const ie=Math.min(.05,(G-W)/1e3);W=G,D.dragging||(D.vel+=((D.target-D.pos)*90-D.vel*19)*ie,D.pos+=D.vel*ie),e(D.pos),D.dragging||Math.abs(D.target-D.pos)>8e-4||Math.abs(D.vel)>.002?D.raf=requestAnimationFrame($):(D.pos=D.target,e(D.pos))};D.raf=requestAnimationFrame($)},[]),_=pt.useCallback(D=>{const W=x.current;W.target=Math.max(0,Math.min(Hi.length-1,Math.round(D))),m()},[m]);pt.useEffect(()=>{var W;const D=Math.round(s);if(D!==t){r(D);try{(W=navigator.vibrate)==null||W.call(navigator,8)}catch{}}},[s,t]),pt.useEffect(()=>{g.current.forEach((D,W)=>{D&&(W===t?(D.muted=o,D.play().catch(()=>{D.muted=!0,l(!0),D.play().catch(()=>{})})):(D.pause(),D.muted=!0))})},[t,o]),pt.useEffect(()=>{const D=W=>{if(W.key==="ArrowRight"&&_(x.current.target+1),W.key==="ArrowLeft"&&_(x.current.target-1),W.key===" "){const $=g.current[t];$&&(W.preventDefault(),$.paused?$.play():$.pause())}};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[_,t]);const S=pt.useRef({locked:!1,quietAt:0,sum:0,stepAt:0}),T=D=>{const W=S.current,$=performance.now(),G=Math.abs(D.deltaX)>Math.abs(D.deltaY)?D.deltaX:D.deltaY;if(W.locked)if($-W.quietAt>160&&$-W.stepAt>420)W.locked=!1;else{W.quietAt=$;return}$-W.quietAt>160&&(W.sum=0),W.quietAt=$,W.sum+=G,!(Math.abs(W.sum)<18)&&(_(x.current.target+Math.sign(W.sum)),W.sum=0,W.locked=!0,W.stepAt=$)},y=Math.min(d.w*(d.w<720?.56:.29),460),M=D=>{var $;const W=x.current;W.dragging=!0,W.lastX=D.clientX,W.lastT=performance.now(),W.vel=0,W.from=Math.round(W.pos),W.downX=D.clientX,W.downOn=Number((($=D.target.closest("[data-i]"))==null?void 0:$.getAttribute("data-i"))??-1),D.currentTarget.setPointerCapture(D.pointerId),m()},w=D=>{const W=x.current;if(!W.dragging)return;const $=performance.now(),G=(D.clientX-W.lastX)/y,ie=W.pos-W.from,X=Math.abs(ie)<.6?1:.6;W.pos=Math.max(-.4,Math.min(Hi.length-.6,W.pos-G*X)),W.vel=-G/Math.max(.008,($-W.lastT)/1e3),W.lastX=D.clientX,W.lastT=$},P=D=>{const W=x.current;if(W.dragging){if(W.dragging=!1,Math.abs(D.clientX-W.downX)<6&&W.downOn>=0)W.target=W.downOn;else{const $=W.pos-W.from+W.vel*.12,G=Math.abs($)>.12?Math.sign($):0;W.target=Math.max(0,Math.min(Hi.length-1,W.from+G))}m()}},R=pt.useRef(null),z=D=>{var $;const W=($=R.current)==null?void 0:$.getBoundingClientRect();W&&_((D.clientX-W.left)/W.width*(Hi.length-1))},I=d.w<720,O=Math.min(d.w*(I?.86:.48),760),E=O*9/16,U=Math.min(d.h*(I?.5:.56),I?460:520),q=U*9/16,H=Hi[t];return Re.jsxs("div",{className:"gal",onWheel:T,children:[Re.jsxs("p",{className:"gal-sub",children:["NISCHE AT KULTUR BUNKER — STUTTGART, NOV 2026 — ",Hi.length," TAKES"]}),Re.jsx("div",{className:"gal-stage",onPointerDown:M,onPointerMove:w,onPointerUp:P,onPointerCancel:P,children:Hi.map((D,W)=>{const $=W-s,G=Math.min(1,Math.abs($)),ie=D.tall?q:O,X=D.tall?U:E,F=1-.42*G,k=(W%2?.16:.07)*d.h*G,te=$*y;return Re.jsxs("div",{className:`gal-card ${W===t?"on":""}`,style:{width:ie,height:X,transform:`translate(-50%, -50%) translate(${te}px, ${k-(1-G)*14}px) scale(${F})`,zIndex:100-Math.round(Math.abs($)*10),opacity:Math.max(0,1-.5*G-.25*Math.max(0,Math.abs($)-1))},"data-i":W,role:"group","aria-label":`${vo(W+1)} ${D.name}`,children:[Re.jsx("video",{ref:N=>{g.current[W]=N},src:`/media/${D.id}.mp4`,poster:`/media/${D.id}.jpg`,loop:!0,playsInline:!0,preload:Math.abs($)<1.5?"auto":"metadata",disablePictureInPicture:!0,disableRemotePlayback:!0,muted:!0,onTimeUpdate:N=>{W===t&&f({at:N.currentTarget.currentTime,of:N.currentTarget.duration||20})}}),W===t&&Re.jsxs("span",{className:"gal-hud",children:[Re.jsxs("span",{className:"lime",children:["▶ ",D.name.toUpperCase()]}),Re.jsxs("span",{children:[Zf(c.at)," / ",Zf(c.of)]})]})]},D.id)})}),Re.jsxs("div",{className:"gal-ruler-wrap",children:[Re.jsx("div",{className:"gal-names",children:Hi.map((D,W)=>Re.jsxs("button",{type:"button",className:W===t?"on":"",onClick:()=>_(W),children:[vo(W+1),Re.jsxs("span",{className:"nm",children:[" ",D.name.toUpperCase()]})]},D.id))}),Re.jsx("div",{className:"gal-ruler",ref:R,onPointerDown:D=>{D.currentTarget.setPointerCapture(D.pointerId),z(D)},onPointerMove:D=>{D.buttons&&z(D)},children:Re.jsx("span",{className:"gal-mark",style:{left:`${Math.max(0,Math.min(Hi.length-1,s))/(Hi.length-1)*100}%`}})})]}),Re.jsxs("div",{className:"gal-foot",children:[Re.jsxs("span",{children:[H.tall?"9:16":"16:9"," · ",Zf(c.of)," · ",vo(t+1)," / ",vo(Hi.length)]}),Re.jsxs("span",{className:"gal-btns",children:[Re.jsx("button",{type:"button",onClick:()=>l(D=>!D),"aria-label":o?"Sound on":"Sound off",children:o?"♪ OFF":"♪ ON"}),Re.jsx("button",{type:"button",onClick:()=>_(x.current.target-1),"aria-label":"Previous",children:"←"}),Re.jsx("button",{type:"button",onClick:()=>_(x.current.target+1),"aria-label":"Next",children:"→"})]})]})]})}function ET({page:s,onClose:e,onGo:t}){return Re.jsx("div",{className:`page ${s==="performances"?"wide":""}`,onClick:e,children:Re.jsxs("article",{onClick:r=>r.stopPropagation(),children:[Re.jsxs("nav",{className:"tabs",children:[["about","instrument","performances"].map(r=>Re.jsx("button",{className:r===s?"on":"",onClick:()=>t(r),children:r},r)),Re.jsxs("button",{className:"close",onClick:e,"aria-label":"close",children:[Re.jsx("span",{className:"cl",children:"close "}),"×"]})]}),s==="about"&&Re.jsxs("section",{children:[Re.jsx("h2",{children:"The machine reads, the hand leads."}),Re.jsxs("p",{children:[Re.jsx("b",{children:"<N4TH>"})," is the visual instrument of Nathalia Cury, a Brazilian art director based in Stuttgart for six years. With a background in typography, editorial design and brand identity, she brings a designer's eye to the club."]}),Re.jsx("p",{children:"She built <N4TH> together with AI, using it as a design partner from the first sketches in Figma Make to hand tracking with MediaPipe and real-time graphics in Three.js. The result is a tool that sits between graphic design, code and performance."}),Re.jsx("p",{children:"On stage, a camera reads her hands and the music reads the room. Every gesture becomes a move in the visuals: a fist gathers, an open palm releases, a clap breaks everything open. She moves between 2D and 3D worlds, turns colour palettes live, or lets the system run on its own and evolve with the night."}),Re.jsx("h3",{children:"Contact"}),Re.jsxs("p",{children:[Re.jsx("a",{href:"mailto:cury.nathalia@gmail.com",children:"cury.nathalia@gmail.com"}),Re.jsx("br",{}),Re.jsx("a",{href:"https://instagram.com/nathcury",target:"_blank",rel:"noreferrer",children:"@nathcury"})]})]}),s==="instrument"&&Re.jsxs("section",{children:[Re.jsx("h2",{children:"Built with AI, played by hand."}),Re.jsx("p",{children:"The tool runs in a browser. It listens to the music — its kicks, its builds, its silences — and it watches the hands. Every visual answers both: the sound gives the pulse, the hand gives the decision."}),Re.jsxs("ul",{children:[Re.jsxs("li",{children:[Re.jsx("b",{children:"one finger"})," slow · ",Re.jsx("b",{children:"five"})," fast"]}),Re.jsxs("li",{children:[Re.jsx("b",{children:"a fist"})," gathers · ",Re.jsx("b",{children:"an open palm"})," releases"]}),Re.jsxs("li",{children:[Re.jsx("b",{children:"a clap"})," breaks everything open"]}),Re.jsx("li",{children:"the music: pulse, kicks, build-ups, the drop"})]}),Re.jsx("p",{children:"Every part of it — the visuals, the way they listen, the way they read a gesture — was written in conversation with AI. The machine can play on its own, so the performance stays with the question: who leads and who follows?"}),Re.jsxs("figure",{children:[Re.jsx("img",{src:"/media/instrument.jpg",alt:"The instrument: the visuals of the set, layers, effects, the sound and the hands"}),Re.jsx("figcaption",{children:"The instrument as it is played: the set of visuals, the layers, the effects, what it hears."})]}),Re.jsxs("figure",{children:[Re.jsx("img",{src:"/media/library.jpg",alt:"The library of visuals, and the set chosen from it"}),Re.jsx("figcaption",{children:"The library: every visual of the instrument, and below, the set chosen for the night."})]})]}),s==="performances"&&Re.jsx(AT,{})]})})}const xs=[{id:"dust",name:"Dust",note:"a fist gathers it into a circle"},{id:"sphere",name:"Planet",note:"a fist pulls it out of shape"},{id:"line",name:"Line",note:"an open hand unfolds it"},{id:"jellyfish",name:"Jelly",note:"a fist closes the bells"},{id:"dandelion",name:"Dandelion",note:"the hand moves the wind"},{id:"standby",name:"Standby",note:"a fist closes the picture to a point"}],md={dust:{colors:Jr(0,0,"grayscale"),params:{"look.glow":2.2,"field.size":1.3,"field.drift":1.8,"look.trail":.55,"sound.beat":.12,"sound.sparks":.5,"sound.bass":.4}},line:{colors:Jr(0,0,"grayscale"),params:{"line.zoom":.9,"line.weight":1.4,"line.wave":2.65,"line.speed":.65,"line.birth":.6,"hands.open":1,"hands.pull":1,"hands.clap":1,"sound.beat":.7,"sound.bass":2,"sound.grow":.75}},dandelion:{colors:Jr(200,60,"black"),params:{"sound.gust":0,"sound.wind":1.4,"field.return":7.5,"field.glide":1.5,"field.sway":1.9,"field.bounce":0,"field.drift":.44,"field.backdrop":0,"colour.speed":2.5,"colour.offset":0,"colour.palette":0,"colour.depth":.32}},jellyfish:{colors:Jr(245,100,"contrast"),params:{"swarm.backdrop":0,"swarm.height":.3,"swarm.arrival":11,"colour.palette":3,"sound.flow":1.7,"swarm.drift":1.3,"sound.swell":1.2,"sound.beat":.6}},standby:{colors:Jr(0,0,"grayscale"),params:{"sound.quiet":.4,"grid.words":0}},sphere:{colors:Jr(0,0,"grayscale"),params:{"shape.style":2,"shape.size":1.2,"shape.morph":.32,"shape.lobes":1.05,"shape.detail":2,"motion.spin":.4,"motion.flow":1,"motion.dust":1,"motion.points":3600,"sound.beat":0,"sound.drop":0,"sound.bass":.3,"sound.squash":1,"sound.spin":1.4,"shape.steady":1,"motion.glide":2}}},wT={dandelion:"hue-rotate(2.59rad) saturate(0.95) contrast(1.28)",line:"sepia(1) saturate(4) hue-rotate(188deg) brightness(1.15)"},TT=Jr(110,70,"contrast"),qh={dust:{path:"field.count",min:200,max:5e3,start:.8},line:{path:"line.count",min:1,max:40,start:11/39},dandelion:{path:"field.count",min:1,max:12,start:.2},jellyfish:{path:"swarm.count",min:1,max:8,start:.43},standby:{path:"grid.detail",min:.2,max:1,start:1},sphere:{path:"shape.detail",min:2,max:6,start:0}},Ug=s=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`,Qr=[{name:"Johan Nex · Machine",src:"/tracks/m4n4th.mp3",seconds:362},{name:"Johan Nex · Human",src:"/tracks/human-3.mp3",seconds:247}];class bT{constructor(e,t){B(this,"parts");this.canvas=e,this.ctx=t;const r=()=>{const f=document.createElement("canvas");return f.width=e.width,f.height=e.height,f},o=r(),l=r(),c=new Pw(o,o.getContext("2d"),0);c.setParams({"look.flow":2.65,"look.zoom":2.85,"look.detail":2,"look.veins":1.35,"look.grain":.3}),this.parts=[{r:c,c:o,filter:"hue-rotate(-0.2rad) contrast(1.3)",alpha:.45,blend:"source-over",colors:TT},{r:new _w(l,l.getContext("2d")),c:l,filter:"saturate(1.88) contrast(1.3)",alpha:.94,blend:"screen",colors:md.jellyfish.colors}]}setParams(e){var t,r;(r=(t=this.parts[1].r).setParams)==null||r.call(t,e)}render(e,t,r){const{canvas:o,ctx:l}=this;l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,o.width,o.height);for(const c of this.parts)(c.c.width!==o.width||c.c.height!==o.height)&&(c.c.width=o.width,c.c.height=o.height),c.r.render(e,c.colors,r),l.globalAlpha=c.alpha,c.blend==="screen"?(l.filter=`${c.filter} invert(1)`,l.globalCompositeOperation="multiply",l.drawImage(c.c,0,0),l.globalCompositeOperation="lighter"):l.globalCompositeOperation=c.blend,l.filter=c.filter,l.drawImage(c.c,0,0);l.filter="none",l.globalAlpha=1,l.globalCompositeOperation="source-over"}destroy(){var e,t;for(const r of this.parts)(t=(e=r.r).destroy)==null||t.call(e)}}function CT(s,e,t){return s==="dust"?new rw(e,t):s==="line"?new ow(e,t):s==="jellyfish"?new bT(e,t):s==="standby"?new Tw(e,t):s==="sphere"?new bw(e,t):new pw(e,t)}const $f=(s,e)=>{const t=qh[s],r=t.min+e*(t.max-t.min);return{...md[s].params,[t.path]:t.max>2?Math.round(r):r}};function RT(s){var r,o,l;const e=document.querySelector(s);if(!e||s===".stage")return{top:"42%",left:"50%",transform:"translate(-50%, -50%)"};const t=e.getBoundingClientRect();if(window.innerWidth<=720&&(s===".track"||s===".cards")){const c=(r=document.querySelector(".desk"))==null?void 0:r.getBoundingClientRect(),f=e.getBoundingClientRect();if(c)return{top:c.top-16,left:Math.min(window.innerWidth-150,Math.max(150,f.left+f.width/2)),transform:"translate(-50%, -100%)"}}if(s===".fx"&&window.innerWidth<=720){const c=(o=document.querySelector(".fx.open"))==null?void 0:o.getBoundingClientRect();if(c)return{top:c.top-16,left:window.innerWidth/2,transform:"translate(-50%, -100%)"};const f=(l=document.querySelector(".fxbtn"))==null?void 0:l.getBoundingClientRect();if(f)return{top:f.top-16,left:Math.min(window.innerWidth-150,Math.max(150,f.left+f.width/2)),transform:"translate(-50%, -100%)"}}return s===".fx"?{top:t.top+t.height/2,left:t.left-14,transform:"translate(-100%, -50%)"}:{top:t.top-16,left:t.left+t.width/2,transform:"translate(-50%, -100%)"}}const PT=Math.max(1,Math.min(5,Number(new URLSearchParams(location.search).get("guide"))||2)),LT={left:null,right:null},IT={dust:.35,sphere:0,line:.8,jellyfish:.7,dandelion:.35,standby:.8},DT=["5 fingers","2 fingers","fist","pinch","clap"],UT={bass:0,lowMid:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0,onset:0};function NT(s,e,t){return{position:{x:s,y:e},gesture:t>.5?"fist":"open",openness:1-t,fingerCount:t>.5?0:3,velocity:0}}const eh=[{key:"play",at:".track",text:"Play a track — the visual moves with the music."},{key:"hand",at:".stage",text:"Raise your hand to the camera — or move the mouse."},{key:"fist",at:".stage",text:"Close your hand (or hold the mouse button) — then open it."},{key:"clap",at:".stage",text:"Clap (or click quickly)."},{key:"fx",at:".fx",text:"Shape it: trail, colour, amount."},{key:"switch",at:".cards",text:"Try another visual."}];function FT(){const s=pt.useRef(null),[e,t]=pt.useState("dust"),[r,o]=pt.useState(!0),[l,c]=pt.useState(0),[f,d]=pt.useState(Qr[0].seconds/xs.length),h=pe=>{t(pe),c(Ce=>Ce+1)};pt.useEffect(()=>{if(!r)return;const pe=window.setInterval(()=>{t(Ce=>xs[(xs.findIndex(le=>le.id===Ce)+1)%xs.length].id)},f*1e3);return()=>window.clearInterval(pe)},[r,l,f]);const g=pt.useRef(e);g.current=e;const[x,m]=pt.useState(0),[_,S]=pt.useState(0),[T,y]=pt.useState(()=>Object.fromEntries(xs.map(pe=>[pe.id,qh[pe.id].start]))),[M,w]=pt.useState(!1);pt.useEffect(()=>{m(0),S(0),y(pe=>({...pe,[e]:qh[e].start}))},[e]);const P=pt.useRef({trail:x,hue:_,amounts:T});P.current={trail:x,hue:_,amounts:T};const[R,z]=pt.useState(null),[I,O]=pt.useState("off"),E=pt.useRef(LT),U=pt.useRef(null);U.current=R;const q=pt.useRef({x:.5,y:.5,on:!1,down:0,closed:0,clapAt:0,moved:0}),H=pt.useCallback(async()=>{O("asking");try{const pe=await navigator.mediaDevices.getUserMedia({video:{width:640,height:360,facingMode:"user"}}),Ce=document.createElement("video");Ce.muted=!0,Ce.playsInline=!0,Ce.srcObject=pe,await Ce.play(),z(Ce),O("on")}catch{O("refused")}},[]);pt.useEffect(()=>{H()},[H]);const D=pt.useRef(null),[W,$]=pt.useState(null),[G,ie]=pt.useState(0),[X,F]=pt.useState(Qr[0].seconds),k=pe=>{F(pe),pe>0&&d(pe/xs.length)},te=pt.useRef(0),N=pt.useRef("");te.current=G;const j=pt.useRef(null),Ee=pt.useCallback(pe=>{var le;let Ce=D.current;if(!Ce){Ce=new Audio,Ce.crossOrigin="anonymous",Ce.loop=!0,Ce.addEventListener("timeupdate",()=>ie(Ce.currentTime)),Ce.addEventListener("loadedmetadata",()=>{k(Ce.duration||0),Math.abs(Ce.currentTime-te.current)>1&&(Ce.currentTime=te.current)}),D.current=Ce;const nt=new AudioContext,L=nt.createMediaElementSource(Ce),A=nt.createAnalyser();A.fftSize=2048,A.smoothingTimeConstant=.55,L.connect(A),A.connect(nt.destination),j.current={ctx:nt,analyser:A,data:new Uint8Array(A.frequencyBinCount),state:pT()}}if((le=j.current)==null||le.ctx.resume(),W===pe){Ce.pause(),$(null);return}if(N.current!==Qr[pe].src){N.current&&(te.current=0,ie(0)),k(Qr[pe].seconds),N.current=Qr[pe].src,Ce.src=Qr[pe].src,Ce.currentTime=te.current;const nt=Ce;fetch(Qr[pe].src).then(L=>L.blob()).then(L=>{const A=nt.currentTime,se=!nt.paused;nt.src=URL.createObjectURL(L),nt.currentTime=A,se&&nt.play().catch(()=>{})}).catch(()=>{})}Ce.play().catch(()=>{}),$(pe)},[W]),[Se,de]=pt.useState(new Set),[K,ce]=pt.useState(()=>{try{return!localStorage.getItem("n4th-guide-seen")}catch{return!0}}),oe=pe=>{ce(pe);try{localStorage.setItem("n4th-guide-seen","1")}catch{}},Ae=pt.useCallback(pe=>de(Ce=>Ce.has(pe)?Ce:new Set(Ce).add(pe)),[]);pt.useEffect(()=>{W!==null&&Ae("play")},[W,Ae]);const be=eh.find(pe=>!Se.has(pe.key));pt.useEffect(()=>{if(!be)try{localStorage.setItem("n4th-guide-seen","1")}catch{}},[be]),pt.useEffect(()=>{const pe=s.current,Ce=pe.getContext("2d"),le=document.createElement("canvas"),nt=le.getContext("2d");let L=null,A=null;const se=3;let ye=performance.now(),Te=0;const Ne=yT();let He=0,ge="",Me=.3,Ve=-1,Ge=0,Ie=-1e9,Le=0,ht=0,gt=450;const Et=new Uint8Array(300),Y=(we,xe,We)=>{(we.width!==xe||we.height!==We)&&(we.width=xe,we.height=We)},ke=()=>{const we=Math.min(window.devicePixelRatio||1,1920/Math.max(1,window.innerWidth)),xe=Math.round(window.innerWidth*we),We=Math.round(window.innerHeight*we);Y(pe,xe,We),Y(le,xe,We),L&&Y(L.work,xe,We),A&&Y(A.work,xe,We)},_e=we=>{const xe=document.createElement("canvas");xe.width=pe.width,xe.height=pe.height;const We=CT(we,xe,xe.getContext("2d"));return{v:we,r:We,amount:-1,work:xe,alpha:0,circle:-1,go:-1}},Xe=we=>{var $n,Ci,Ri,Fn,ei,Ki,Pi,yn,bn,Cn,Rn,kn;Te=requestAnimationFrame(Xe);const xe=Math.min(.1,(we-ye)/1e3);ye=we,ke();const We=g.current;L?L.v!==We&&((Ci=A==null?void 0:($n=A.r).destroy)==null||Ci.call($n),A=L,L=_e(We)):(L=_e(We),L.alpha=1),L.alpha=Math.min(1,L.alpha+xe/se),A&&(A.alpha=Math.max(0,A.alpha-xe/se),A.alpha<=0&&((Fn=(Ri=A.r).destroy)==null||Fn.call(Ri),A=null));for(const ot of[L,A])ot&&U.current&&ot.video!==U.current&&((Ki=(ei=ot.r).setVideoElement)==null||Ki.call(ei,U.current),ot.video=U.current);const ct=q.current;ct.closed+=((ct.down&&we-ct.down>220?1:0)-ct.closed)*Math.min(1,xe*10);let Lt=E.current;!Lt.left&&!Lt.right&&ct.on&&we-ct.moved<4e3&&(Lt={left:NT(ct.x,ct.y,ct.closed),right:null,clapping:we-ct.clapAt<120,clapIntensity:1});let Ct=UT;const Ft=j.current;if(Ft&&D.current&&!D.current.paused){Ft.analyser.getByteFrequencyData(Ft.data);let ot=0;for(let dn=1;dn<300;dn++){const pn=Ft.data[dn]-(Et[dn]??0);pn>0&&(ot+=pn),Et[dn]=Ft.data[dn]}gt+=(ot-gt)*(1-Math.exp(-xe*.25));let wt=0;for(let dn=1;dn<=6;dn++)wt+=Ft.data[dn];wt/=6,Ve<0&&(Ve=wt),wt-Ve>40&&wt-Ge>12&&we-Ie>1e3&&(Ie=we,Le=Math.min(1,.7+(wt-Ve-40)/30)),Ve+=(wt-Ve)*(1-Math.exp(-xe*.6)),Ge=wt,Ct={...gT(Ft.data,Ft.ctx.sampleRate,Ft.state,.8,Date.now()),live:!0}}const yt=new Set;for(const ot of[Lt.left,Lt.right])ot&&(ot.gesture==="fist"?yt.add("fist"):ot.gesture==="pinch"?yt.add("pinch"):ot.fingerCount===2?yt.add("2 fingers"):((ot.fingerCount??0)>=5||(ot.openness??0)>.85)&&yt.add("5 fingers"));Lt.clapping&&(He=we),we-He<500&&yt.add("clap");const Yt=[...yt].sort().join("|");Yt!==ge&&(ge=Yt,Ze(yt)),YE(xe,[MT(Lt,Ne,xe)]),QE(0);const jn=P.current;nt.globalCompositeOperation="source-over",nt.globalAlpha=1,nt.fillStyle="#000",nt.fillRect(0,0,le.width,le.height);for(const ot of[A,L]){if(!ot)continue;const wt=jn.amounts[ot.v];if(ot.v==="dust"){const ee=Ct.live?Math.max(0,Math.min(1,(gt-520)/260)):0;Me+=((1-ee*.6)*.3-Me)*(1-Math.exp(-xe*.3)),(Math.abs(Me-ot.circle)>.01||Math.abs(ee-ot.go)>.04||Math.abs(wt-ot.amount)>.001)&&((yn=(Pi=ot.r).setParams)==null||yn.call(Pi,{...$f(ot.v,wt),"form.circle":Me,"sound.quiet":1.6*(1-ee)+.4,"sound.beat":.12+.8*ee,"sound.sparks":.5+1.3*ee,"sound.bass":.4+.8*ee,"field.drift":1.8+.8*ee}),ot.amount=wt,ot.circle=Me,ot.go=ee)}else if(ot.v==="sphere"){const ee=(we-Ie)/1e3,he=ee<.25?1:Math.exp(-(ee-.25)*1.1);ht+=(he-ht)*(1-Math.exp(-xe*(he>ht?10:3)));const re=Ct.live?Math.max(0,Math.min(1,(gt-520)/260)):0,ae=.32+.22*re,Fe=ae+(.85-ae)*ht;(Math.abs(Fe-ot.circle)>.003||Math.abs(re-ot.go)>.008||Math.abs(wt-ot.amount)>.001)&&((Cn=(bn=ot.r).setParams)==null||Cn.call(bn,{...$f(ot.v,wt),"shape.morph":Fe,"motion.flow":1+1.6*re,"motion.spin":.4+.5*re}),ot.amount=wt,ot.circle=Fe,ot.go=re)}else Math.abs(wt-ot.amount)>.001&&((kn=(Rn=ot.r).setParams)==null||kn.call(Rn,$f(ot.v,wt)),ot.amount=wt);const dn=we-Ie<140&&!Lt.clapping?{...Lt,clapping:!0,clapIntensity:Le*IT[ot.v]}:Lt;ot.r.render(dn,md[ot.v].colors,Ct);const pn=ot.alpha*ot.alpha*(3-2*ot.alpha),C=jn.hue?ot.v==="dust"||ot.v==="standby"?`sepia(1) saturate(5) hue-rotate(${jn.hue-40}deg)`:`hue-rotate(${jn.hue}deg)`:"";nt.filter=[wT[ot.v],C].filter(Boolean).join(" ")||"none",nt.globalAlpha=pn,nt.globalCompositeOperation="lighter",nt.drawImage(ot.work,0,0)}nt.filter="none",nt.globalCompositeOperation="source-over",nt.globalAlpha=1,Ce.globalCompositeOperation="source-over";const Kn=jn.trail*jn.trail*1.5,vi=Kn<.005?0:Math.exp(-xe*Math.LN2/Kn);Ce.globalAlpha=1-vi,Ce.fillStyle="#000",Ce.fillRect(0,0,pe.width,pe.height),Ce.globalAlpha=1,Ce.globalCompositeOperation=vi>0?"lighten":"source-over",Ce.drawImage(le,0,0),Ce.globalCompositeOperation="source-over"};return Te=requestAnimationFrame(Xe),()=>{var we,xe,We,ct;cancelAnimationFrame(Te),(xe=L==null?void 0:(we=L.r).destroy)==null||xe.call(we),(ct=A==null?void 0:(We=A.r).destroy)==null||ct.call(We)}},[]);const ve=pe=>{const Ce=q.current;Ce.x=pe.clientX/window.innerWidth,Ce.y=pe.clientY/window.innerHeight,Ce.on=!0,Ce.moved=performance.now(),I!=="on"&&Ae("hand")},Ye=pe=>{ve(pe),q.current.down=performance.now()},Oe=()=>{const pe=q.current,Ce=performance.now()-pe.down;pe.down&&Ce<220&&(pe.clapAt=performance.now(),Ae("clap")),pe.down&&Ce>400&&Ae("fist"),pe.down=0},[Je,Qe]=pt.useState(!1),[st,Ze]=pt.useState(new Set),dt=pt.useCallback(pe=>{var Ce,le;E.current=pe,Qe(!!(pe.left||pe.right)),(pe.left||pe.right)&&Ae("hand"),(((Ce=pe.left)==null?void 0:Ce.gesture)==="fist"||((le=pe.right)==null?void 0:le.gesture)==="fist")&&Ae("fist"),pe.clapping&&Ae("clap")},[Ae]),[St,Q]=pt.useState(()=>{const pe=location.pathname.replace(/^\/+|\/+$/g,"");return["about","instrument","performances"].includes(pe)?pe:null});pt.useEffect(()=>{St==="performances"&&D.current&&!D.current.paused&&(D.current.pause(),$(null))},[St]);const ft=pe=>{Q(pe);try{history.replaceState(null,"","/"+(pe??""))}catch{}};return Re.jsxs(Re.Fragment,{children:[Re.jsx("canvas",{ref:s,className:"stage",onPointerMove:ve,onPointerDown:Ye,onPointerUp:Oe,onPointerLeave:()=>{q.current.on=!1,q.current.down=0}}),R&&Re.jsx($w,{videoElement:R,onHandData:dt}),Re.jsxs("header",{className:"top",children:[Re.jsx("div",{className:"brand",children:"<N4TH>"}),Re.jsx("nav",{children:["about","instrument","performances"].map(pe=>Re.jsx("button",{onClick:()=>ft(pe),children:pe},pe))})]}),K&&be&&!St&&!(M&&window.innerWidth<=720)&&Re.jsxs("div",{className:`guide g${PT}`,style:RT(be.at),"data-at":be.at,children:[Re.jsxs("span",{className:"count",children:[eh.indexOf(be)+1,"/",eh.length]}),Re.jsx("span",{children:be.text}),be.key==="hand"&&I!=="on"&&Re.jsx("button",{className:"cam",onClick:H,disabled:I==="asking",children:I==="refused"?"camera not allowed — the mouse plays":I==="asking"?"…":"allow camera"}),Re.jsx("button",{className:"x",onClick:()=>oe(!1),title:"Hide the guide",children:"×"})]}),Re.jsxs("aside",{className:`fx ${M?"open":""}`,onPointerDown:()=>Ae("fx"),children:[Re.jsx("div",{className:"fxt",children:"EFFECTS"}),Re.jsxs("label",{children:["Trail",Re.jsx("input",{type:"range",min:0,max:1,step:.01,value:x,onChange:pe=>m(+pe.target.value)})]}),Re.jsxs("label",{children:["Colour",Re.jsx("input",{type:"range",min:0,max:360,step:1,value:_,onChange:pe=>S(+pe.target.value)})]}),Re.jsxs("label",{children:["Amount",Re.jsx("input",{type:"range",min:0,max:1,step:.01,value:T[e],onChange:pe=>y(Ce=>({...Ce,[e]:+pe.target.value}))})]})]}),Re.jsxs("footer",{className:"desk",children:[Re.jsx("div",{className:"cards",children:xs.map((pe,Ce)=>Re.jsxs("button",{className:`card ${e===pe.id?"on":""}`,onClick:()=>{h(pe.id),pe.id!=="dust"&&Ae("switch")},title:pe.note,children:[Re.jsx("img",{src:ST[pe.id],alt:""}),Re.jsx("span",{className:"num",children:Ce+1}),Re.jsx("span",{className:"name",children:pe.name})]},pe.id))}),Re.jsx("div",{className:"sep"}),Re.jsxs("div",{className:"tracks",children:[Qr.map((pe,Ce)=>Re.jsxs("button",{className:`track ${W===Ce?"on":""}`,onClick:()=>Ee(Ce),children:[Re.jsx("span",{children:W===Ce?"❚❚":"▶"})," ",pe.name]},pe.src)),Re.jsxs("div",{className:"timeline",children:[Re.jsx("input",{type:"range",min:0,max:Math.max(1,X),step:.1,value:G,onChange:pe=>{const Ce=D.current,le=+pe.target.value;ie(le),Ce&&(Ce.currentTime=le)}}),Re.jsxs("span",{children:[Ug(G)," / ",Ug(X)]})]})]}),Re.jsx("div",{className:"sep"}),Re.jsx("button",{className:`autobtn ${r?"on":""}`,onClick:()=>o(pe=>!pe),title:"Auto: the track shared among the visuals, one after the other",children:"auto"}),Re.jsx("button",{className:`fxbtn ${M?"on":""}`,onClick:()=>{w(pe=>!pe),Ae("fx")},children:"FX"}),Re.jsx("button",{className:`camera ${I==="on"?"on":""}`,onClick:I==="on"?void 0:H,title:"Play with your hand through the camera",children:I==="on"?Re.jsxs(Re.Fragment,{children:[Re.jsx("span",{className:`dot ${Je?"seen":""}`,children:"●"})," hand"]}):I==="refused"?"mouse":"camera"}),Re.jsx("div",{className:"words",children:DT.map(pe=>Re.jsx("span",{className:st.has(pe)?"lit":"",children:pe},pe))})]}),St&&Re.jsx(ET,{page:St,onClose:()=>ft(null),onGo:ft})]})}x_.createRoot(document.getElementById("root")).render(Re.jsx(pt.StrictMode,{children:Re.jsx(FT,{})}));
