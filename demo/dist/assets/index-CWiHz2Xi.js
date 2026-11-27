var u_=Object.defineProperty;var f_=(s,e,t)=>e in s?u_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var B=(s,e,t)=>f_(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var rf={exports:{}},sa={},sf={exports:{}},Pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function h_(){if(zm)return Pt;zm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function m(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,C={};function y(N,K,Ee){this.props=N,this.context=K,this.refs=C,this.updater=Ee||_}y.prototype.isReactComponent={},y.prototype.setState=function(N,K){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,K,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function S(){}S.prototype=y.prototype;function T(N,K,Ee){this.props=N,this.context=K,this.refs=C,this.updater=Ee||_}var L=T.prototype=new S;L.constructor=T,A(L,y.prototype),L.isPureReactComponent=!0;var P=Array.isArray,z=Object.prototype.hasOwnProperty,D={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function E(N,K,Ee){var Me,ve={},I=null,ce=null;if(K!=null)for(Me in K.ref!==void 0&&(ce=K.ref),K.key!==void 0&&(I=""+K.key),K)z.call(K,Me)&&!O.hasOwnProperty(Me)&&(ve[Me]=K[Me]);var oe=arguments.length-2;if(oe===1)ve.children=Ee;else if(1<oe){for(var Ae=Array(oe),Se=0;Se<oe;Se++)Ae[Se]=arguments[Se+2];ve.children=Ae}if(N&&N.defaultProps)for(Me in oe=N.defaultProps,oe)ve[Me]===void 0&&(ve[Me]=oe[Me]);return{$$typeof:s,type:N,key:I,ref:ce,props:ve,_owner:D.current}}function U(N,K){return{$$typeof:s,type:N.type,key:K,ref:N.ref,props:N.props,_owner:N._owner}}function q(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function H(N){var K={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ee){return K[Ee]})}var F=/\/+/g;function W(N,K){return typeof N=="object"&&N!==null&&N.key!=null?H(""+N.key):K.toString(36)}function ee(N,K,Ee,Me,ve){var I=typeof N;(I==="undefined"||I==="boolean")&&(N=null);var ce=!1;if(N===null)ce=!0;else switch(I){case"string":case"number":ce=!0;break;case"object":switch(N.$$typeof){case s:case e:ce=!0}}if(ce)return ce=N,ve=ve(ce),N=Me===""?"."+W(ce,0):Me,P(ve)?(Ee="",N!=null&&(Ee=N.replace(F,"$&/")+"/"),ee(ve,K,Ee,"",function(Se){return Se})):ve!=null&&(q(ve)&&(ve=U(ve,Ee+(!ve.key||ce&&ce.key===ve.key?"":(""+ve.key).replace(F,"$&/")+"/")+N)),K.push(ve)),1;if(ce=0,Me=Me===""?".":Me+":",P(N))for(var oe=0;oe<N.length;oe++){I=N[oe];var Ae=Me+W(I,oe);ce+=ee(I,K,Ee,Ae,ve)}else if(Ae=m(N),typeof Ae=="function")for(N=Ae.call(N),oe=0;!(I=N.next()).done;)I=I.value,Ae=Me+W(I,oe++),ce+=ee(I,K,Ee,Ae,ve);else if(I==="object")throw K=String(N),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return ce}function j(N,K,Ee){if(N==null)return N;var Me=[],ve=0;return ee(N,Me,"","",function(I){return K.call(Ee,I,ve++)}),Me}function re(N){if(N._status===-1){var K=N._result;K=K(),K.then(function(Ee){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ee)},function(Ee){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ee)}),N._status===-1&&(N._status=0,N._result=K)}if(N._status===1)return N._result.default;throw N._result}var G={current:null},X={transition:null},k={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:X,ReactCurrentOwner:D};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Pt.Children={map:j,forEach:function(N,K,Ee){j(N,function(){K.apply(this,arguments)},Ee)},count:function(N){var K=0;return j(N,function(){K++}),K},toArray:function(N){return j(N,function(K){return K})||[]},only:function(N){if(!q(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Pt.Component=y,Pt.Fragment=t,Pt.Profiler=o,Pt.PureComponent=T,Pt.StrictMode=r,Pt.Suspense=d,Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k,Pt.act=ie,Pt.cloneElement=function(N,K,Ee){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Me=A({},N.props),ve=N.key,I=N.ref,ce=N._owner;if(K!=null){if(K.ref!==void 0&&(I=K.ref,ce=D.current),K.key!==void 0&&(ve=""+K.key),N.type&&N.type.defaultProps)var oe=N.type.defaultProps;for(Ae in K)z.call(K,Ae)&&!O.hasOwnProperty(Ae)&&(Me[Ae]=K[Ae]===void 0&&oe!==void 0?oe[Ae]:K[Ae])}var Ae=arguments.length-2;if(Ae===1)Me.children=Ee;else if(1<Ae){oe=Array(Ae);for(var Se=0;Se<Ae;Se++)oe[Se]=arguments[Se+2];Me.children=oe}return{$$typeof:s,type:N.type,key:ve,ref:I,props:Me,_owner:ce}},Pt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},Pt.createElement=E,Pt.createFactory=function(N){var K=E.bind(null,N);return K.type=N,K},Pt.createRef=function(){return{current:null}},Pt.forwardRef=function(N){return{$$typeof:f,render:N}},Pt.isValidElement=q,Pt.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:re}},Pt.memo=function(N,K){return{$$typeof:h,type:N,compare:K===void 0?null:K}},Pt.startTransition=function(N){var K=X.transition;X.transition={};try{N()}finally{X.transition=K}},Pt.unstable_act=ie,Pt.useCallback=function(N,K){return G.current.useCallback(N,K)},Pt.useContext=function(N){return G.current.useContext(N)},Pt.useDebugValue=function(){},Pt.useDeferredValue=function(N){return G.current.useDeferredValue(N)},Pt.useEffect=function(N,K){return G.current.useEffect(N,K)},Pt.useId=function(){return G.current.useId()},Pt.useImperativeHandle=function(N,K,Ee){return G.current.useImperativeHandle(N,K,Ee)},Pt.useInsertionEffect=function(N,K){return G.current.useInsertionEffect(N,K)},Pt.useLayoutEffect=function(N,K){return G.current.useLayoutEffect(N,K)},Pt.useMemo=function(N,K){return G.current.useMemo(N,K)},Pt.useReducer=function(N,K,Ee){return G.current.useReducer(N,K,Ee)},Pt.useRef=function(N){return G.current.useRef(N)},Pt.useState=function(N){return G.current.useState(N)},Pt.useSyncExternalStore=function(N,K,Ee){return G.current.useSyncExternalStore(N,K,Ee)},Pt.useTransition=function(){return G.current.useTransition()},Pt.version="18.3.1",Pt}var Hm;function Jh(){return Hm||(Hm=1,sf.exports=h_()),sf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm;function d_(){if(Vm)return sa;Vm=1;var s=Jh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,h){var g,x={},m=null,_=null;h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(_=d.ref);for(g in d)r.call(d,g)&&!l.hasOwnProperty(g)&&(x[g]=d[g]);if(f&&f.defaultProps)for(g in d=f.defaultProps,d)x[g]===void 0&&(x[g]=d[g]);return{$$typeof:e,type:f,key:m,ref:_,props:x,_owner:o.current}}return sa.Fragment=t,sa.jsx=c,sa.jsxs=c,sa}var Gm;function p_(){return Gm||(Gm=1,rf.exports=d_()),rf.exports}var be=p_(),ct=Jh(),bl={},of={exports:{}},oi={},af={exports:{}},lf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function m_(){return Wm||(Wm=1,(function(s){function e(X,k){var ie=X.length;X.push(k);e:for(;0<ie;){var N=ie-1>>>1,K=X[N];if(0<o(K,k))X[N]=k,X[ie]=K,ie=N;else break e}}function t(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var k=X[0],ie=X.pop();if(ie!==k){X[0]=ie;e:for(var N=0,K=X.length,Ee=K>>>1;N<Ee;){var Me=2*(N+1)-1,ve=X[Me],I=Me+1,ce=X[I];if(0>o(ve,ie))I<K&&0>o(ce,ve)?(X[N]=ce,X[I]=ie,N=I):(X[N]=ve,X[Me]=ie,N=Me);else if(I<K&&0>o(ce,ie))X[N]=ce,X[I]=ie,N=I;else break e}}return k}function o(X,k){var ie=X.sortIndex-k.sortIndex;return ie!==0?ie:X.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var d=[],h=[],g=1,x=null,m=3,_=!1,A=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(X){for(var k=t(h);k!==null;){if(k.callback===null)r(h);else if(k.startTime<=X)r(h),k.sortIndex=k.expirationTime,e(d,k);else break;k=t(h)}}function P(X){if(C=!1,L(X),!A)if(t(d)!==null)A=!0,re(z);else{var k=t(h);k!==null&&G(P,k.startTime-X)}}function z(X,k){A=!1,C&&(C=!1,S(E),E=-1),_=!0;var ie=m;try{for(L(k),x=t(d);x!==null&&(!(x.expirationTime>k)||X&&!H());){var N=x.callback;if(typeof N=="function"){x.callback=null,m=x.priorityLevel;var K=N(x.expirationTime<=k);k=s.unstable_now(),typeof K=="function"?x.callback=K:x===t(d)&&r(d),L(k)}else r(d);x=t(d)}if(x!==null)var Ee=!0;else{var Me=t(h);Me!==null&&G(P,Me.startTime-k),Ee=!1}return Ee}finally{x=null,m=ie,_=!1}}var D=!1,O=null,E=-1,U=5,q=-1;function H(){return!(s.unstable_now()-q<U)}function F(){if(O!==null){var X=s.unstable_now();q=X;var k=!0;try{k=O(!0,X)}finally{k?W():(D=!1,O=null)}}else D=!1}var W;if(typeof T=="function")W=function(){T(F)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,j=ee.port2;ee.port1.onmessage=F,W=function(){j.postMessage(null)}}else W=function(){y(F,0)};function re(X){O=X,D||(D=!0,W())}function G(X,k){E=y(function(){X(s.unstable_now())},k)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(X){X.callback=null},s.unstable_continueExecution=function(){A||_||(A=!0,re(z))},s.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<X?Math.floor(1e3/X):5},s.unstable_getCurrentPriorityLevel=function(){return m},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(X){switch(m){case 1:case 2:case 3:var k=3;break;default:k=m}var ie=m;m=k;try{return X()}finally{m=ie}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(X,k){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ie=m;m=X;try{return k()}finally{m=ie}},s.unstable_scheduleCallback=function(X,k,ie){var N=s.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?N+ie:N):ie=N,X){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=ie+K,X={id:g++,callback:k,priorityLevel:X,startTime:ie,expirationTime:K,sortIndex:-1},ie>N?(X.sortIndex=ie,e(h,X),t(d)===null&&X===t(h)&&(C?(S(E),E=-1):C=!0,G(P,ie-N))):(X.sortIndex=K,e(d,X),A||_||(A=!0,re(z))),X},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(X){var k=m;return function(){var ie=m;m=k;try{return X.apply(this,arguments)}finally{m=ie}}}})(lf)),lf}var Xm;function g_(){return Xm||(Xm=1,af.exports=m_()),af.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function v_(){if(jm)return oi;jm=1;var s=Jh(),e=g_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function m(n){return d.call(x,n)?!0:d.call(g,n)?!1:h.test(n)?x[n]=!0:(g[n]=!0,!1)}function _(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function A(n,i,a,u){if(i===null||typeof i>"u"||_(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,u,p,v,R){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=v,this.removeEmptyString=R}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function T(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,T);y[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,T);y[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,T);y[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,u){var p=y.hasOwnProperty(i)?y[i]:null;(p!==null?p.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,a,p,u)&&(a=null),u||p===null?m(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(i=p.attributeName,u=p.attributeNamespace,a===null?n.removeAttribute(i):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),D=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),H=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),X=Symbol.iterator;function k(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,N;function K(n){if(N===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var Ee=!1;function Me(n,i){if(!n||Ee)return"";Ee=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(pe){var u=pe}Reflect.construct(n,[],i)}else{try{i.call()}catch(pe){u=pe}n.call(i.prototype)}else{try{throw Error()}catch(pe){u=pe}n()}}catch(pe){if(pe&&u&&typeof pe.stack=="string"){for(var p=pe.stack.split(`
`),v=u.stack.split(`
`),R=p.length-1,V=v.length-1;1<=R&&0<=V&&p[R]!==v[V];)V--;for(;1<=R&&0<=V;R--,V--)if(p[R]!==v[V]){if(R!==1||V!==1)do if(R--,V--,0>V||p[R]!==v[V]){var $=`
`+p[R].replace(" at new "," at ");return n.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",n.displayName)),$}while(1<=R&&0<=V);break}}}finally{Ee=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?K(n):""}function ve(n){switch(n.tag){case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return n=Me(n.type,!1),n;case 11:return n=Me(n.type.render,!1),n;case 1:return n=Me(n.type,!0),n;default:return""}}function I(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case D:return"Portal";case U:return"Profiler";case E:return"StrictMode";case W:return"Suspense";case ee:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case q:return(n._context.displayName||"Context")+".Provider";case F:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case j:return i=n.displayName||null,i!==null?i:I(n.type)||"Memo";case re:i=n._payload,n=n._init;try{return I(n(i))}catch{}}return null}function ce(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return I(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function oe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ae(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Se(n){var i=Ae(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,v=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(R){u=""+R,v.call(this,R)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(R){u=""+R},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function xe(n){n._valueTracker||(n._valueTracker=Se(n))}function Ye(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Ae(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function Ie(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function He(n,i){var a=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function et(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=oe(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ze(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function rt(n,i){Ze(n,i);var a=oe(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?bt(n,i.type,a):i.hasOwnProperty("defaultValue")&&bt(n,i.type,oe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function lt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function bt(n,i,a){(i!=="number"||Ie(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Y=Array.isArray;function At(n,i,a,u){if(n=n.options,i){i={};for(var p=0;p<a.length;p++)i["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=i.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&u&&(n[a].defaultSelected=!0)}else{for(a=""+oe(a),i=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function dt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Tt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Y(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:oe(a)}}function ke(n,i){var a=oe(i.value),u=oe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function kt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function w(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?w(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Q,le=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,p){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,p)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Q=Q||document.createElement("div"),Q.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Q.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function _e(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var de={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},we=["Webkit","ms","Moz","O"];Object.keys(de).forEach(function(n){we.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),de[i]=de[n]})});function ge(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||de.hasOwnProperty(n)&&de[n]?(""+i).trim():i+"px"}function me(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,p=ge(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,p):n[a]=p}}var Ve=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ge(n,i){if(i){if(Ve[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function De(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Le=null;function tt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ut=null,ht=null,J=null;function Ue(n){if(n=Wo(n)){if(typeof ut!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Va(i),ut(n.stateNode,n.type,i))}}function ye(n){ht?J?J.push(n):J=[n]:ht=n}function Xe(){if(ht){var n=ht,i=J;if(J=ht=null,Ue(n),i)for(n=0;n<i.length;n++)Ue(i[n])}}function Fe(n,i){return n(i)}function Te(){}var Je=!1;function gt(n,i,a){if(Je)return n(i,a);Je=!0;try{return Fe(n,i,a)}finally{Je=!1,(ht!==null||J!==null)&&(Te(),Xe())}}function ft(n,i){var a=n.stateNode;if(a===null)return null;var u=Va(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var st=!1;if(f)try{var Ot={};Object.defineProperty(Ot,"passive",{get:function(){st=!0}}),window.addEventListener("test",Ot,Ot),window.removeEventListener("test",Ot,Ot)}catch{st=!1}function Qt(n,i,a,u,p,v,R,V,$){var pe=Array.prototype.slice.call(arguments,3);try{i.apply(a,pe)}catch(Pe){this.onError(Pe)}}var tn=!1,an=null,yt=!1,Kt=null,$n={onError:function(n){tn=!0,an=n}};function ln(n,i,a,u,p,v,R,V,$){tn=!1,an=null,Qt.apply($n,arguments)}function Ki(n,i,a,u,p,v,R,V,$){if(ln.apply(this,arguments),tn){if(tn){var pe=an;tn=!1,an=null}else throw Error(t(198));yt||(yt=!0,Kt=pe)}}function Xn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ci(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function vi(n){if(Xn(n)!==n)throw Error(t(188))}function xi(n){var i=n.alternate;if(!i){if(i=Xn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var p=a.return;if(p===null)break;var v=p.alternate;if(v===null){if(u=p.return,u!==null){a=u;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===a)return vi(p),n;if(v===u)return vi(p),i;v=v.sibling}throw Error(t(188))}if(a.return!==u.return)a=p,u=v;else{for(var R=!1,V=p.child;V;){if(V===a){R=!0,a=p,u=v;break}if(V===u){R=!0,u=p,a=v;break}V=V.sibling}if(!R){for(V=v.child;V;){if(V===a){R=!0,a=v,u=p;break}if(V===u){R=!0,u=v,a=p;break}V=V.sibling}if(!R)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function _i(n){return n=xi(n),n!==null?qi(n):null}function qi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=qi(n);if(i!==null)return i;n=n.sibling}return null}var ar=e.unstable_scheduleCallback,Cn=e.unstable_cancelCallback,jn=e.unstable_shouldYield,Nn=e.unstable_requestPaint,Dt=e.unstable_now,Fn=e.unstable_getCurrentPriorityLevel,Sn=e.unstable_ImmediatePriority,b=e.unstable_UserBlockingPriority,te=e.unstable_NormalPriority,ae=e.unstable_LowPriority,se=e.unstable_IdlePriority,fe=null,Be=null;function ze(n){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(fe,n,void 0,(n.current.flags&128)===128)}catch{}}var Ce=Math.clz32?Math.clz32:_t,qe=Math.log,je=Math.LN2;function _t(n){return n>>>=0,n===0?32:31-(qe(n)/je|0)|0}var vt=64,nt=4194304;function St(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Nt(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,p=n.suspendedLanes,v=n.pingedLanes,R=a&268435455;if(R!==0){var V=R&~p;V!==0?u=St(V):(v&=R,v!==0&&(u=St(v)))}else R=a&~p,R!==0?u=St(R):v!==0&&(u=St(v));if(u===0)return 0;if(i!==0&&i!==u&&(i&p)===0&&(p=u&-u,v=i&-i,p>=v||p===16&&(v&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Ce(i),p=1<<a,u|=n[a],i&=~p;return u}function jt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ut(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var R=31-Ce(v),V=1<<R,$=p[R];$===-1?((V&a)===0||(V&u)!==0)&&(p[R]=jt(V,i)):$<=i&&(n.expiredLanes|=V),v&=~V}}function Jt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function We(){var n=vt;return vt<<=1,(vt&4194240)===0&&(vt=64),n}function fn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Et(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ce(i),n[i]=a}function gn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-Ce(a),v=1<<p;i[p]=0,u[p]=-1,n[p]=-1,a&=~v}}function Rn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Ce(a),p=1<<u;p&i|n[u]&i&&(n[u]|=i),a&=~p}}var Ct=0;function yi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Bt,qt,Kn,zt,ei,Pn=!1,Li=[],Tr=null,br=null,Cr=null,Co=new Map,Ro=new Map,Rr=[],Iv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ad(n,i){switch(n){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":Co.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(i.pointerId)}}function Po(n,i,a,u,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:v,targetContainers:[p]},i!==null&&(i=Wo(i),i!==null&&qt(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function Dv(n,i,a,u,p){switch(i){case"focusin":return Tr=Po(Tr,n,i,a,u,p),!0;case"dragenter":return br=Po(br,n,i,a,u,p),!0;case"mouseover":return Cr=Po(Cr,n,i,a,u,p),!0;case"pointerover":var v=p.pointerId;return Co.set(v,Po(Co.get(v)||null,n,i,a,u,p)),!0;case"gotpointercapture":return v=p.pointerId,Ro.set(v,Po(Ro.get(v)||null,n,i,a,u,p)),!0}return!1}function Ed(n){var i=ns(n.target);if(i!==null){var a=Xn(i);if(a!==null){if(i=a.tag,i===13){if(i=ci(a),i!==null){n.blockedOn=i,ei(n.priority,function(){Kn(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ca(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Pc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Le=u,a.target.dispatchEvent(u),Le=null}else return i=Wo(a),i!==null&&qt(i),n.blockedOn=a,!1;i.shift()}return!0}function wd(n,i,a){Ca(n)&&a.delete(i)}function Uv(){Pn=!1,Tr!==null&&Ca(Tr)&&(Tr=null),br!==null&&Ca(br)&&(br=null),Cr!==null&&Ca(Cr)&&(Cr=null),Co.forEach(wd),Ro.forEach(wd)}function Lo(n,i){n.blockedOn===i&&(n.blockedOn=null,Pn||(Pn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Uv)))}function Io(n){function i(p){return Lo(p,n)}if(0<Li.length){Lo(Li[0],n);for(var a=1;a<Li.length;a++){var u=Li[a];u.blockedOn===n&&(u.blockedOn=null)}}for(Tr!==null&&Lo(Tr,n),br!==null&&Lo(br,n),Cr!==null&&Lo(Cr,n),Co.forEach(i),Ro.forEach(i),a=0;a<Rr.length;a++)u=Rr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Rr.length&&(a=Rr[0],a.blockedOn===null);)Ed(a),a.blockedOn===null&&Rr.shift()}var Ps=P.ReactCurrentBatchConfig,Ra=!0;function Nv(n,i,a,u){var p=Ct,v=Ps.transition;Ps.transition=null;try{Ct=1,Rc(n,i,a,u)}finally{Ct=p,Ps.transition=v}}function Fv(n,i,a,u){var p=Ct,v=Ps.transition;Ps.transition=null;try{Ct=4,Rc(n,i,a,u)}finally{Ct=p,Ps.transition=v}}function Rc(n,i,a,u){if(Ra){var p=Pc(n,i,a,u);if(p===null)Kc(n,i,u,Pa,a),Ad(n,u);else if(Dv(p,n,i,a,u))u.stopPropagation();else if(Ad(n,u),i&4&&-1<Iv.indexOf(n)){for(;p!==null;){var v=Wo(p);if(v!==null&&Bt(v),v=Pc(n,i,a,u),v===null&&Kc(n,i,u,Pa,a),v===p)break;p=v}p!==null&&u.stopPropagation()}else Kc(n,i,u,null,a)}}var Pa=null;function Pc(n,i,a,u){if(Pa=null,n=tt(u),n=ns(n),n!==null)if(i=Xn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ci(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Pa=n,null}function Td(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fn()){case Sn:return 1;case b:return 4;case te:case ae:return 16;case se:return 536870912;default:return 16}default:return 16}}var Pr=null,Lc=null,La=null;function bd(){if(La)return La;var n,i=Lc,a=i.length,u,p="value"in Pr?Pr.value:Pr.textContent,v=p.length;for(n=0;n<a&&i[n]===p[n];n++);var R=a-n;for(u=1;u<=R&&i[a-u]===p[v-u];u++);return La=p.slice(n,1<u?1-u:void 0)}function Ia(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Da(){return!0}function Cd(){return!1}function ui(n){function i(a,u,p,v,R){this._reactName=a,this._targetInst=p,this.type=u,this.nativeEvent=v,this.target=R,this.currentTarget=null;for(var V in n)n.hasOwnProperty(V)&&(a=n[V],this[V]=a?a(v):v[V]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Da:Cd,this.isPropagationStopped=Cd,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),i}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ic=ui(Ls),Do=ie({},Ls,{view:0,detail:0}),kv=ui(Do),Dc,Uc,Uo,Ua=ie({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Uo&&(Uo&&n.type==="mousemove"?(Dc=n.screenX-Uo.screenX,Uc=n.screenY-Uo.screenY):Uc=Dc=0,Uo=n),Dc)},movementY:function(n){return"movementY"in n?n.movementY:Uc}}),Rd=ui(Ua),Ov=ie({},Ua,{dataTransfer:0}),Bv=ui(Ov),zv=ie({},Do,{relatedTarget:0}),Nc=ui(zv),Hv=ie({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Vv=ui(Hv),Gv=ie({},Ls,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Wv=ui(Gv),Xv=ie({},Ls,{data:0}),Pd=ui(Xv),jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=qv[n])?!!i[n]:!1}function Fc(){return Yv}var Qv=ie({},Do,{key:function(n){if(n.key){var i=jv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ia(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Kv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fc,charCode:function(n){return n.type==="keypress"?Ia(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ia(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Jv=ui(Qv),Zv=ie({},Ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ld=ui(Zv),$v=ie({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fc}),ex=ui($v),tx=ie({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),nx=ui(tx),ix=ie({},Ua,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),rx=ui(ix),sx=[9,13,27,32],kc=f&&"CompositionEvent"in window,No=null;f&&"documentMode"in document&&(No=document.documentMode);var ox=f&&"TextEvent"in window&&!No,Id=f&&(!kc||No&&8<No&&11>=No),Dd=" ",Ud=!1;function Nd(n,i){switch(n){case"keyup":return sx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Is=!1;function ax(n,i){switch(n){case"compositionend":return Fd(i);case"keypress":return i.which!==32?null:(Ud=!0,Dd);case"textInput":return n=i.data,n===Dd&&Ud?null:n;default:return null}}function lx(n,i){if(Is)return n==="compositionend"||!kc&&Nd(n,i)?(n=bd(),La=Lc=Pr=null,Is=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Id&&i.locale!=="ko"?null:i.data;default:return null}}var cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!cx[n.type]:i==="textarea"}function Od(n,i,a,u){ye(u),i=Ba(i,"onChange"),0<i.length&&(a=new Ic("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Fo=null,ko=null;function ux(n){np(n,0)}function Na(n){var i=ks(n);if(Ye(i))return n}function fx(n,i){if(n==="change")return i}var Bd=!1;if(f){var Oc;if(f){var Bc="oninput"in document;if(!Bc){var zd=document.createElement("div");zd.setAttribute("oninput","return;"),Bc=typeof zd.oninput=="function"}Oc=Bc}else Oc=!1;Bd=Oc&&(!document.documentMode||9<document.documentMode)}function Hd(){Fo&&(Fo.detachEvent("onpropertychange",Vd),ko=Fo=null)}function Vd(n){if(n.propertyName==="value"&&Na(ko)){var i=[];Od(i,ko,n,tt(n)),gt(ux,i)}}function hx(n,i,a){n==="focusin"?(Hd(),Fo=i,ko=a,Fo.attachEvent("onpropertychange",Vd)):n==="focusout"&&Hd()}function dx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Na(ko)}function px(n,i){if(n==="click")return Na(i)}function mx(n,i){if(n==="input"||n==="change")return Na(i)}function gx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ii=typeof Object.is=="function"?Object.is:gx;function Oo(n,i){if(Ii(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var p=a[u];if(!d.call(i,p)||!Ii(n[p],i[p]))return!1}return!0}function Gd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Wd(n,i){var a=Gd(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gd(a)}}function Xd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Xd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function jd(){for(var n=window,i=Ie();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ie(n.document)}return i}function zc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function vx(n){var i=jd(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Xd(a.ownerDocument.documentElement,a)){if(u!==null&&zc(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,v=Math.min(u.start,p);u=u.end===void 0?v:Math.min(u.end,p),!n.extend&&v>u&&(p=u,u=v,v=p),p=Wd(a,v);var R=Wd(a,u);p&&R&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==R.node||n.focusOffset!==R.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),n.removeAllRanges(),v>u?(n.addRange(i),n.extend(R.node,R.offset)):(i.setEnd(R.node,R.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var xx=f&&"documentMode"in document&&11>=document.documentMode,Ds=null,Hc=null,Bo=null,Vc=!1;function Kd(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vc||Ds==null||Ds!==Ie(u)||(u=Ds,"selectionStart"in u&&zc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Bo&&Oo(Bo,u)||(Bo=u,u=Ba(Hc,"onSelect"),0<u.length&&(i=new Ic("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=Ds)))}function Fa(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Us={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},Gc={},qd={};f&&(qd=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function ka(n){if(Gc[n])return Gc[n];if(!Us[n])return n;var i=Us[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in qd)return Gc[n]=i[a];return n}var Yd=ka("animationend"),Qd=ka("animationiteration"),Jd=ka("animationstart"),Zd=ka("transitionend"),$d=new Map,ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(n,i){$d.set(n,i),l(i,[n])}for(var Wc=0;Wc<ep.length;Wc++){var Xc=ep[Wc],_x=Xc.toLowerCase(),yx=Xc[0].toUpperCase()+Xc.slice(1);Lr(_x,"on"+yx)}Lr(Yd,"onAnimationEnd"),Lr(Qd,"onAnimationIteration"),Lr(Jd,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr(Zd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mx=new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));function tp(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,Ki(u,i,void 0,n),n.currentTarget=null}function np(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],p=u.event;u=u.listeners;e:{var v=void 0;if(i)for(var R=u.length-1;0<=R;R--){var V=u[R],$=V.instance,pe=V.currentTarget;if(V=V.listener,$!==v&&p.isPropagationStopped())break e;tp(p,V,pe),v=$}else for(R=0;R<u.length;R++){if(V=u[R],$=V.instance,pe=V.currentTarget,V=V.listener,$!==v&&p.isPropagationStopped())break e;tp(p,V,pe),v=$}}}if(yt)throw n=Kt,yt=!1,Kt=null,n}function $t(n,i){var a=i[$c];a===void 0&&(a=i[$c]=new Set);var u=n+"__bubble";a.has(u)||(ip(i,n,2,!1),a.add(u))}function jc(n,i,a){var u=0;i&&(u|=4),ip(a,n,u,i)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function Ho(n){if(!n[Oa]){n[Oa]=!0,r.forEach(function(a){a!=="selectionchange"&&(Mx.has(a)||jc(a,!1,n),jc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Oa]||(i[Oa]=!0,jc("selectionchange",!1,i))}}function ip(n,i,a,u){switch(Td(i)){case 1:var p=Nv;break;case 4:p=Fv;break;default:p=Rc}a=p.bind(null,i,a,n),p=void 0,!st||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(i,a,{capture:!0,passive:p}):n.addEventListener(i,a,!0):p!==void 0?n.addEventListener(i,a,{passive:p}):n.addEventListener(i,a,!1)}function Kc(n,i,a,u,p){var v=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var R=u.tag;if(R===3||R===4){var V=u.stateNode.containerInfo;if(V===p||V.nodeType===8&&V.parentNode===p)break;if(R===4)for(R=u.return;R!==null;){var $=R.tag;if(($===3||$===4)&&($=R.stateNode.containerInfo,$===p||$.nodeType===8&&$.parentNode===p))return;R=R.return}for(;V!==null;){if(R=ns(V),R===null)return;if($=R.tag,$===5||$===6){u=v=R;continue e}V=V.parentNode}}u=u.return}gt(function(){var pe=v,Pe=tt(a),Ne=[];e:{var Re=$d.get(n);if(Re!==void 0){var Qe=Ic,it=n;switch(n){case"keypress":if(Ia(a)===0)break e;case"keydown":case"keyup":Qe=Jv;break;case"focusin":it="focus",Qe=Nc;break;case"focusout":it="blur",Qe=Nc;break;case"beforeblur":case"afterblur":Qe=Nc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Qe=Rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Qe=Bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Qe=ex;break;case Yd:case Qd:case Jd:Qe=Vv;break;case Zd:Qe=nx;break;case"scroll":Qe=kv;break;case"wheel":Qe=rx;break;case"copy":case"cut":case"paste":Qe=Wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Qe=Ld}var ot=(i&4)!==0,hn=!ot&&n==="scroll",ue=ot?Re!==null?Re+"Capture":null:Re;ot=[];for(var ne=pe,he;ne!==null;){he=ne;var Oe=he.stateNode;if(he.tag===5&&Oe!==null&&(he=Oe,ue!==null&&(Oe=ft(ne,ue),Oe!=null&&ot.push(Vo(ne,Oe,he)))),hn)break;ne=ne.return}0<ot.length&&(Re=new Qe(Re,it,null,a,Pe),Ne.push({event:Re,listeners:ot}))}}if((i&7)===0){e:{if(Re=n==="mouseover"||n==="pointerover",Qe=n==="mouseout"||n==="pointerout",Re&&a!==Le&&(it=a.relatedTarget||a.fromElement)&&(ns(it)||it[lr]))break e;if((Qe||Re)&&(Re=Pe.window===Pe?Pe:(Re=Pe.ownerDocument)?Re.defaultView||Re.parentWindow:window,Qe?(it=a.relatedTarget||a.toElement,Qe=pe,it=it?ns(it):null,it!==null&&(hn=Xn(it),it!==hn||it.tag!==5&&it.tag!==6)&&(it=null)):(Qe=null,it=pe),Qe!==it)){if(ot=Rd,Oe="onMouseLeave",ue="onMouseEnter",ne="mouse",(n==="pointerout"||n==="pointerover")&&(ot=Ld,Oe="onPointerLeave",ue="onPointerEnter",ne="pointer"),hn=Qe==null?Re:ks(Qe),he=it==null?Re:ks(it),Re=new ot(Oe,ne+"leave",Qe,a,Pe),Re.target=hn,Re.relatedTarget=he,Oe=null,ns(Pe)===pe&&(ot=new ot(ue,ne+"enter",it,a,Pe),ot.target=he,ot.relatedTarget=hn,Oe=ot),hn=Oe,Qe&&it)t:{for(ot=Qe,ue=it,ne=0,he=ot;he;he=Ns(he))ne++;for(he=0,Oe=ue;Oe;Oe=Ns(Oe))he++;for(;0<ne-he;)ot=Ns(ot),ne--;for(;0<he-ne;)ue=Ns(ue),he--;for(;ne--;){if(ot===ue||ue!==null&&ot===ue.alternate)break t;ot=Ns(ot),ue=Ns(ue)}ot=null}else ot=null;Qe!==null&&rp(Ne,Re,Qe,ot,!1),it!==null&&hn!==null&&rp(Ne,hn,it,ot,!0)}}e:{if(Re=pe?ks(pe):window,Qe=Re.nodeName&&Re.nodeName.toLowerCase(),Qe==="select"||Qe==="input"&&Re.type==="file")var at=fx;else if(kd(Re))if(Bd)at=mx;else{at=dx;var pt=hx}else(Qe=Re.nodeName)&&Qe.toLowerCase()==="input"&&(Re.type==="checkbox"||Re.type==="radio")&&(at=px);if(at&&(at=at(n,pe))){Od(Ne,at,a,Pe);break e}pt&&pt(n,Re,pe),n==="focusout"&&(pt=Re._wrapperState)&&pt.controlled&&Re.type==="number"&&bt(Re,"number",Re.value)}switch(pt=pe?ks(pe):window,n){case"focusin":(kd(pt)||pt.contentEditable==="true")&&(Ds=pt,Hc=pe,Bo=null);break;case"focusout":Bo=Hc=Ds=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,Kd(Ne,a,Pe);break;case"selectionchange":if(xx)break;case"keydown":case"keyup":Kd(Ne,a,Pe)}var mt;if(kc)e:{switch(n){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Is?Nd(n,a)&&(Mt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(Id&&a.locale!=="ko"&&(Is||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Is&&(mt=bd()):(Pr=Pe,Lc="value"in Pr?Pr.value:Pr.textContent,Is=!0)),pt=Ba(pe,Mt),0<pt.length&&(Mt=new Pd(Mt,n,null,a,Pe),Ne.push({event:Mt,listeners:pt}),mt?Mt.data=mt:(mt=Fd(a),mt!==null&&(Mt.data=mt)))),(mt=ox?ax(n,a):lx(n,a))&&(pe=Ba(pe,"onBeforeInput"),0<pe.length&&(Pe=new Pd("onBeforeInput","beforeinput",null,a,Pe),Ne.push({event:Pe,listeners:pe}),Pe.data=mt))}np(Ne,i)})}function Vo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ba(n,i){for(var a=i+"Capture",u=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=ft(n,a),v!=null&&u.unshift(Vo(n,v,p)),v=ft(n,i),v!=null&&u.push(Vo(n,v,p))),n=n.return}return u}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function rp(n,i,a,u,p){for(var v=i._reactName,R=[];a!==null&&a!==u;){var V=a,$=V.alternate,pe=V.stateNode;if($!==null&&$===u)break;V.tag===5&&pe!==null&&(V=pe,p?($=ft(a,v),$!=null&&R.unshift(Vo(a,$,V))):p||($=ft(a,v),$!=null&&R.push(Vo(a,$,V)))),a=a.return}R.length!==0&&n.push({event:i,listeners:R})}var Sx=/\r\n?/g,Ax=/\u0000|\uFFFD/g;function sp(n){return(typeof n=="string"?n:""+n).replace(Sx,`
`).replace(Ax,"")}function za(n,i,a){if(i=sp(i),sp(n)!==i&&a)throw Error(t(425))}function Ha(){}var qc=null,Yc=null;function Qc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,Ex=typeof clearTimeout=="function"?clearTimeout:void 0,op=typeof Promise=="function"?Promise:void 0,wx=typeof queueMicrotask=="function"?queueMicrotask:typeof op<"u"?function(n){return op.resolve(null).then(n).catch(Tx)}:Jc;function Tx(n){setTimeout(function(){throw n})}function Zc(n,i){var a=i,u=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(u===0){n.removeChild(p),Io(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=p}while(a);Io(i)}function Ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function ap(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Yi="__reactFiber$"+Fs,Go="__reactProps$"+Fs,lr="__reactContainer$"+Fs,$c="__reactEvents$"+Fs,bx="__reactListeners$"+Fs,Cx="__reactHandles$"+Fs;function ns(n){var i=n[Yi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[lr]||a[Yi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=ap(n);n!==null;){if(a=n[Yi])return a;n=ap(n)}return i}n=a,a=n.parentNode}return null}function Wo(n){return n=n[Yi]||n[lr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ks(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Va(n){return n[Go]||null}var eu=[],Os=-1;function Dr(n){return{current:n}}function en(n){0>Os||(n.current=eu[Os],eu[Os]=null,Os--)}function Zt(n,i){Os++,eu[Os]=n.current,n.current=i}var Ur={},kn=Dr(Ur),ti=Dr(!1),is=Ur;function Bs(n,i){var a=n.type.contextTypes;if(!a)return Ur;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in a)p[v]=i[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=p),p}function ni(n){return n=n.childContextTypes,n!=null}function Ga(){en(ti),en(kn)}function lp(n,i,a){if(kn.current!==Ur)throw Error(t(168));Zt(kn,i),Zt(ti,a)}function cp(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var p in u)if(!(p in i))throw Error(t(108,ce(n)||"Unknown",p));return ie({},a,u)}function Wa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ur,is=kn.current,Zt(kn,n),Zt(ti,ti.current),!0}function up(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=cp(n,i,is),u.__reactInternalMemoizedMergedChildContext=n,en(ti),en(kn),Zt(kn,n)):en(ti),Zt(ti,a)}var cr=null,Xa=!1,tu=!1;function fp(n){cr===null?cr=[n]:cr.push(n)}function Rx(n){Xa=!0,fp(n)}function Nr(){if(!tu&&cr!==null){tu=!0;var n=0,i=Ct;try{var a=cr;for(Ct=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}cr=null,Xa=!1}catch(p){throw cr!==null&&(cr=cr.slice(n+1)),ar(Sn,Nr),p}finally{Ct=i,tu=!1}}return null}var zs=[],Hs=0,ja=null,Ka=0,Mi=[],Si=0,rs=null,ur=1,fr="";function ss(n,i){zs[Hs++]=Ka,zs[Hs++]=ja,ja=n,Ka=i}function hp(n,i,a){Mi[Si++]=ur,Mi[Si++]=fr,Mi[Si++]=rs,rs=n;var u=ur;n=fr;var p=32-Ce(u)-1;u&=~(1<<p),a+=1;var v=32-Ce(i)+p;if(30<v){var R=p-p%5;v=(u&(1<<R)-1).toString(32),u>>=R,p-=R,ur=1<<32-Ce(i)+p|a<<p|u,fr=v+n}else ur=1<<v|a<<p|u,fr=n}function nu(n){n.return!==null&&(ss(n,1),hp(n,1,0))}function iu(n){for(;n===ja;)ja=zs[--Hs],zs[Hs]=null,Ka=zs[--Hs],zs[Hs]=null;for(;n===rs;)rs=Mi[--Si],Mi[Si]=null,fr=Mi[--Si],Mi[Si]=null,ur=Mi[--Si],Mi[Si]=null}var fi=null,hi=null,nn=!1,Di=null;function dp(n,i){var a=Ti(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function pp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,fi=n,hi=Ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,fi=n,hi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=rs!==null?{id:ur,overflow:fr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ti(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,fi=n,hi=null,!0):!1;default:return!1}}function ru(n){return(n.mode&1)!==0&&(n.flags&128)===0}function su(n){if(nn){var i=hi;if(i){var a=i;if(!pp(n,i)){if(ru(n))throw Error(t(418));i=Ir(a.nextSibling);var u=fi;i&&pp(n,i)?dp(u,a):(n.flags=n.flags&-4097|2,nn=!1,fi=n)}}else{if(ru(n))throw Error(t(418));n.flags=n.flags&-4097|2,nn=!1,fi=n}}}function mp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;fi=n}function qa(n){if(n!==fi)return!1;if(!nn)return mp(n),nn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Qc(n.type,n.memoizedProps)),i&&(i=hi)){if(ru(n))throw gp(),Error(t(418));for(;i;)dp(n,i),i=Ir(i.nextSibling)}if(mp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){hi=Ir(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}hi=null}}else hi=fi?Ir(n.stateNode.nextSibling):null;return!0}function gp(){for(var n=hi;n;)n=Ir(n.nextSibling)}function Vs(){hi=fi=null,nn=!1}function ou(n){Di===null?Di=[n]:Di.push(n)}var Px=P.ReactCurrentBatchConfig;function Xo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var p=u,v=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===v?i.ref:(i=function(R){var V=p.refs;R===null?delete V[v]:V[v]=R},i._stringRef=v,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ya(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function vp(n){var i=n._init;return i(n._payload)}function xp(n){function i(ue,ne){if(n){var he=ue.deletions;he===null?(ue.deletions=[ne],ue.flags|=16):he.push(ne)}}function a(ue,ne){if(!n)return null;for(;ne!==null;)i(ue,ne),ne=ne.sibling;return null}function u(ue,ne){for(ue=new Map;ne!==null;)ne.key!==null?ue.set(ne.key,ne):ue.set(ne.index,ne),ne=ne.sibling;return ue}function p(ue,ne){return ue=Gr(ue,ne),ue.index=0,ue.sibling=null,ue}function v(ue,ne,he){return ue.index=he,n?(he=ue.alternate,he!==null?(he=he.index,he<ne?(ue.flags|=2,ne):he):(ue.flags|=2,ne)):(ue.flags|=1048576,ne)}function R(ue){return n&&ue.alternate===null&&(ue.flags|=2),ue}function V(ue,ne,he,Oe){return ne===null||ne.tag!==6?(ne=Ju(he,ue.mode,Oe),ne.return=ue,ne):(ne=p(ne,he),ne.return=ue,ne)}function $(ue,ne,he,Oe){var at=he.type;return at===O?Pe(ue,ne,he.props.children,Oe,he.key):ne!==null&&(ne.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===re&&vp(at)===ne.type)?(Oe=p(ne,he.props),Oe.ref=Xo(ue,ne,he),Oe.return=ue,Oe):(Oe=_l(he.type,he.key,he.props,null,ue.mode,Oe),Oe.ref=Xo(ue,ne,he),Oe.return=ue,Oe)}function pe(ue,ne,he,Oe){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==he.containerInfo||ne.stateNode.implementation!==he.implementation?(ne=Zu(he,ue.mode,Oe),ne.return=ue,ne):(ne=p(ne,he.children||[]),ne.return=ue,ne)}function Pe(ue,ne,he,Oe,at){return ne===null||ne.tag!==7?(ne=ds(he,ue.mode,Oe,at),ne.return=ue,ne):(ne=p(ne,he),ne.return=ue,ne)}function Ne(ue,ne,he){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return ne=Ju(""+ne,ue.mode,he),ne.return=ue,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case z:return he=_l(ne.type,ne.key,ne.props,null,ue.mode,he),he.ref=Xo(ue,null,ne),he.return=ue,he;case D:return ne=Zu(ne,ue.mode,he),ne.return=ue,ne;case re:var Oe=ne._init;return Ne(ue,Oe(ne._payload),he)}if(Y(ne)||k(ne))return ne=ds(ne,ue.mode,he,null),ne.return=ue,ne;Ya(ue,ne)}return null}function Re(ue,ne,he,Oe){var at=ne!==null?ne.key:null;if(typeof he=="string"&&he!==""||typeof he=="number")return at!==null?null:V(ue,ne,""+he,Oe);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case z:return he.key===at?$(ue,ne,he,Oe):null;case D:return he.key===at?pe(ue,ne,he,Oe):null;case re:return at=he._init,Re(ue,ne,at(he._payload),Oe)}if(Y(he)||k(he))return at!==null?null:Pe(ue,ne,he,Oe,null);Ya(ue,he)}return null}function Qe(ue,ne,he,Oe,at){if(typeof Oe=="string"&&Oe!==""||typeof Oe=="number")return ue=ue.get(he)||null,V(ne,ue,""+Oe,at);if(typeof Oe=="object"&&Oe!==null){switch(Oe.$$typeof){case z:return ue=ue.get(Oe.key===null?he:Oe.key)||null,$(ne,ue,Oe,at);case D:return ue=ue.get(Oe.key===null?he:Oe.key)||null,pe(ne,ue,Oe,at);case re:var pt=Oe._init;return Qe(ue,ne,he,pt(Oe._payload),at)}if(Y(Oe)||k(Oe))return ue=ue.get(he)||null,Pe(ne,ue,Oe,at,null);Ya(ne,Oe)}return null}function it(ue,ne,he,Oe){for(var at=null,pt=null,mt=ne,Mt=ne=0,wn=null;mt!==null&&Mt<he.length;Mt++){mt.index>Mt?(wn=mt,mt=null):wn=mt.sibling;var Xt=Re(ue,mt,he[Mt],Oe);if(Xt===null){mt===null&&(mt=wn);break}n&&mt&&Xt.alternate===null&&i(ue,mt),ne=v(Xt,ne,Mt),pt===null?at=Xt:pt.sibling=Xt,pt=Xt,mt=wn}if(Mt===he.length)return a(ue,mt),nn&&ss(ue,Mt),at;if(mt===null){for(;Mt<he.length;Mt++)mt=Ne(ue,he[Mt],Oe),mt!==null&&(ne=v(mt,ne,Mt),pt===null?at=mt:pt.sibling=mt,pt=mt);return nn&&ss(ue,Mt),at}for(mt=u(ue,mt);Mt<he.length;Mt++)wn=Qe(mt,ue,Mt,he[Mt],Oe),wn!==null&&(n&&wn.alternate!==null&&mt.delete(wn.key===null?Mt:wn.key),ne=v(wn,ne,Mt),pt===null?at=wn:pt.sibling=wn,pt=wn);return n&&mt.forEach(function(Wr){return i(ue,Wr)}),nn&&ss(ue,Mt),at}function ot(ue,ne,he,Oe){var at=k(he);if(typeof at!="function")throw Error(t(150));if(he=at.call(he),he==null)throw Error(t(151));for(var pt=at=null,mt=ne,Mt=ne=0,wn=null,Xt=he.next();mt!==null&&!Xt.done;Mt++,Xt=he.next()){mt.index>Mt?(wn=mt,mt=null):wn=mt.sibling;var Wr=Re(ue,mt,Xt.value,Oe);if(Wr===null){mt===null&&(mt=wn);break}n&&mt&&Wr.alternate===null&&i(ue,mt),ne=v(Wr,ne,Mt),pt===null?at=Wr:pt.sibling=Wr,pt=Wr,mt=wn}if(Xt.done)return a(ue,mt),nn&&ss(ue,Mt),at;if(mt===null){for(;!Xt.done;Mt++,Xt=he.next())Xt=Ne(ue,Xt.value,Oe),Xt!==null&&(ne=v(Xt,ne,Mt),pt===null?at=Xt:pt.sibling=Xt,pt=Xt);return nn&&ss(ue,Mt),at}for(mt=u(ue,mt);!Xt.done;Mt++,Xt=he.next())Xt=Qe(mt,ue,Mt,Xt.value,Oe),Xt!==null&&(n&&Xt.alternate!==null&&mt.delete(Xt.key===null?Mt:Xt.key),ne=v(Xt,ne,Mt),pt===null?at=Xt:pt.sibling=Xt,pt=Xt);return n&&mt.forEach(function(c_){return i(ue,c_)}),nn&&ss(ue,Mt),at}function hn(ue,ne,he,Oe){if(typeof he=="object"&&he!==null&&he.type===O&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case z:e:{for(var at=he.key,pt=ne;pt!==null;){if(pt.key===at){if(at=he.type,at===O){if(pt.tag===7){a(ue,pt.sibling),ne=p(pt,he.props.children),ne.return=ue,ue=ne;break e}}else if(pt.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===re&&vp(at)===pt.type){a(ue,pt.sibling),ne=p(pt,he.props),ne.ref=Xo(ue,pt,he),ne.return=ue,ue=ne;break e}a(ue,pt);break}else i(ue,pt);pt=pt.sibling}he.type===O?(ne=ds(he.props.children,ue.mode,Oe,he.key),ne.return=ue,ue=ne):(Oe=_l(he.type,he.key,he.props,null,ue.mode,Oe),Oe.ref=Xo(ue,ne,he),Oe.return=ue,ue=Oe)}return R(ue);case D:e:{for(pt=he.key;ne!==null;){if(ne.key===pt)if(ne.tag===4&&ne.stateNode.containerInfo===he.containerInfo&&ne.stateNode.implementation===he.implementation){a(ue,ne.sibling),ne=p(ne,he.children||[]),ne.return=ue,ue=ne;break e}else{a(ue,ne);break}else i(ue,ne);ne=ne.sibling}ne=Zu(he,ue.mode,Oe),ne.return=ue,ue=ne}return R(ue);case re:return pt=he._init,hn(ue,ne,pt(he._payload),Oe)}if(Y(he))return it(ue,ne,he,Oe);if(k(he))return ot(ue,ne,he,Oe);Ya(ue,he)}return typeof he=="string"&&he!==""||typeof he=="number"?(he=""+he,ne!==null&&ne.tag===6?(a(ue,ne.sibling),ne=p(ne,he),ne.return=ue,ue=ne):(a(ue,ne),ne=Ju(he,ue.mode,Oe),ne.return=ue,ue=ne),R(ue)):a(ue,ne)}return hn}var Gs=xp(!0),_p=xp(!1),Qa=Dr(null),Ja=null,Ws=null,au=null;function lu(){au=Ws=Ja=null}function cu(n){var i=Qa.current;en(Qa),n._currentValue=i}function uu(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Xs(n,i){Ja=n,au=Ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ii=!0),n.firstContext=null)}function Ai(n){var i=n._currentValue;if(au!==n)if(n={context:n,memoizedValue:i,next:null},Ws===null){if(Ja===null)throw Error(t(308));Ws=n,Ja.dependencies={lanes:0,firstContext:n}}else Ws=Ws.next=n;return i}var os=null;function fu(n){os===null?os=[n]:os.push(n)}function yp(n,i,a,u){var p=i.interleaved;return p===null?(a.next=a,fu(i)):(a.next=p.next,p.next=a),i.interleaved=a,hr(n,u)}function hr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Fr=!1;function hu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function dr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function kr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ht&2)!==0){var p=u.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),u.pending=i,hr(n,a)}return p=u.interleaved,p===null?(i.next=i,fu(u)):(i.next=p.next,p.next=i),u.interleaved=i,hr(n,a)}function Za(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Rn(n,a)}}function Sp(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var p=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var R={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?p=v=R:v=v.next=R,a=a.next}while(a!==null);v===null?p=v=i:v=v.next=i}else p=v=i;a={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function $a(n,i,a,u){var p=n.updateQueue;Fr=!1;var v=p.firstBaseUpdate,R=p.lastBaseUpdate,V=p.shared.pending;if(V!==null){p.shared.pending=null;var $=V,pe=$.next;$.next=null,R===null?v=pe:R.next=pe,R=$;var Pe=n.alternate;Pe!==null&&(Pe=Pe.updateQueue,V=Pe.lastBaseUpdate,V!==R&&(V===null?Pe.firstBaseUpdate=pe:V.next=pe,Pe.lastBaseUpdate=$))}if(v!==null){var Ne=p.baseState;R=0,Pe=pe=$=null,V=v;do{var Re=V.lane,Qe=V.eventTime;if((u&Re)===Re){Pe!==null&&(Pe=Pe.next={eventTime:Qe,lane:0,tag:V.tag,payload:V.payload,callback:V.callback,next:null});e:{var it=n,ot=V;switch(Re=i,Qe=a,ot.tag){case 1:if(it=ot.payload,typeof it=="function"){Ne=it.call(Qe,Ne,Re);break e}Ne=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=ot.payload,Re=typeof it=="function"?it.call(Qe,Ne,Re):it,Re==null)break e;Ne=ie({},Ne,Re);break e;case 2:Fr=!0}}V.callback!==null&&V.lane!==0&&(n.flags|=64,Re=p.effects,Re===null?p.effects=[V]:Re.push(V))}else Qe={eventTime:Qe,lane:Re,tag:V.tag,payload:V.payload,callback:V.callback,next:null},Pe===null?(pe=Pe=Qe,$=Ne):Pe=Pe.next=Qe,R|=Re;if(V=V.next,V===null){if(V=p.shared.pending,V===null)break;Re=V,V=Re.next,Re.next=null,p.lastBaseUpdate=Re,p.shared.pending=null}}while(!0);if(Pe===null&&($=Ne),p.baseState=$,p.firstBaseUpdate=pe,p.lastBaseUpdate=Pe,i=p.shared.interleaved,i!==null){p=i;do R|=p.lane,p=p.next;while(p!==i)}else v===null&&(p.shared.lanes=0);cs|=R,n.lanes=R,n.memoizedState=Ne}}function Ap(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],p=u.callback;if(p!==null){if(u.callback=null,u=a,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var jo={},Qi=Dr(jo),Ko=Dr(jo),qo=Dr(jo);function as(n){if(n===jo)throw Error(t(174));return n}function du(n,i){switch(Zt(qo,i),Zt(Ko,n),Zt(Qi,jo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=M(i,n)}en(Qi),Zt(Qi,i)}function js(){en(Qi),en(Ko),en(qo)}function Ep(n){as(qo.current);var i=as(Qi.current),a=M(i,n.type);i!==a&&(Zt(Ko,n),Zt(Qi,a))}function pu(n){Ko.current===n&&(en(Qi),en(Ko))}var rn=Dr(0);function el(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var mu=[];function gu(){for(var n=0;n<mu.length;n++)mu[n]._workInProgressVersionPrimary=null;mu.length=0}var tl=P.ReactCurrentDispatcher,vu=P.ReactCurrentBatchConfig,ls=0,sn=null,vn=null,An=null,nl=!1,Yo=!1,Qo=0,Lx=0;function On(){throw Error(t(321))}function xu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ii(n[a],i[a]))return!1;return!0}function _u(n,i,a,u,p,v){if(ls=v,sn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,tl.current=n===null||n.memoizedState===null?Nx:Fx,n=a(u,p),Yo){v=0;do{if(Yo=!1,Qo=0,25<=v)throw Error(t(301));v+=1,An=vn=null,i.updateQueue=null,tl.current=kx,n=a(u,p)}while(Yo)}if(tl.current=sl,i=vn!==null&&vn.next!==null,ls=0,An=vn=sn=null,nl=!1,i)throw Error(t(300));return n}function yu(){var n=Qo!==0;return Qo=0,n}function Ji(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?sn.memoizedState=An=n:An=An.next=n,An}function Ei(){if(vn===null){var n=sn.alternate;n=n!==null?n.memoizedState:null}else n=vn.next;var i=An===null?sn.memoizedState:An.next;if(i!==null)An=i,vn=n;else{if(n===null)throw Error(t(310));vn=n,n={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},An===null?sn.memoizedState=An=n:An=An.next=n}return An}function Jo(n,i){return typeof i=="function"?i(n):i}function Mu(n){var i=Ei(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=vn,p=u.baseQueue,v=a.pending;if(v!==null){if(p!==null){var R=p.next;p.next=v.next,v.next=R}u.baseQueue=p=v,a.pending=null}if(p!==null){v=p.next,u=u.baseState;var V=R=null,$=null,pe=v;do{var Pe=pe.lane;if((ls&Pe)===Pe)$!==null&&($=$.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),u=pe.hasEagerState?pe.eagerState:n(u,pe.action);else{var Ne={lane:Pe,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};$===null?(V=$=Ne,R=u):$=$.next=Ne,sn.lanes|=Pe,cs|=Pe}pe=pe.next}while(pe!==null&&pe!==v);$===null?R=u:$.next=V,Ii(u,i.memoizedState)||(ii=!0),i.memoizedState=u,i.baseState=R,i.baseQueue=$,a.lastRenderedState=u}if(n=a.interleaved,n!==null){p=n;do v=p.lane,sn.lanes|=v,cs|=v,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Su(n){var i=Ei(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,p=a.pending,v=i.memoizedState;if(p!==null){a.pending=null;var R=p=p.next;do v=n(v,R.action),R=R.next;while(R!==p);Ii(v,i.memoizedState)||(ii=!0),i.memoizedState=v,i.baseQueue===null&&(i.baseState=v),a.lastRenderedState=v}return[v,u]}function wp(){}function Tp(n,i){var a=sn,u=Ei(),p=i(),v=!Ii(u.memoizedState,p);if(v&&(u.memoizedState=p,ii=!0),u=u.queue,Au(Rp.bind(null,a,u,n),[n]),u.getSnapshot!==i||v||An!==null&&An.memoizedState.tag&1){if(a.flags|=2048,Zo(9,Cp.bind(null,a,u,p,i),void 0,null),En===null)throw Error(t(349));(ls&30)!==0||bp(a,i,p)}return p}function bp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=sn.updateQueue,i===null?(i={lastEffect:null,stores:null},sn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Cp(n,i,a,u){i.value=a,i.getSnapshot=u,Pp(i)&&Lp(n)}function Rp(n,i,a){return a(function(){Pp(i)&&Lp(n)})}function Pp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ii(n,a)}catch{return!0}}function Lp(n){var i=hr(n,1);i!==null&&ki(i,n,1,-1)}function Ip(n){var i=Ji();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:n},i.queue=n,n=n.dispatch=Ux.bind(null,sn,n),[i.memoizedState,n]}function Zo(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=sn.updateQueue,i===null?(i={lastEffect:null,stores:null},sn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Dp(){return Ei().memoizedState}function il(n,i,a,u){var p=Ji();sn.flags|=n,p.memoizedState=Zo(1|i,a,void 0,u===void 0?null:u)}function rl(n,i,a,u){var p=Ei();u=u===void 0?null:u;var v=void 0;if(vn!==null){var R=vn.memoizedState;if(v=R.destroy,u!==null&&xu(u,R.deps)){p.memoizedState=Zo(i,a,v,u);return}}sn.flags|=n,p.memoizedState=Zo(1|i,a,v,u)}function Up(n,i){return il(8390656,8,n,i)}function Au(n,i){return rl(2048,8,n,i)}function Np(n,i){return rl(4,2,n,i)}function Fp(n,i){return rl(4,4,n,i)}function kp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Op(n,i,a){return a=a!=null?a.concat([n]):null,rl(4,4,kp.bind(null,i,n),a)}function Eu(){}function Bp(n,i){var a=Ei();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&xu(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function zp(n,i){var a=Ei();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&xu(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Hp(n,i,a){return(ls&21)===0?(n.baseState&&(n.baseState=!1,ii=!0),n.memoizedState=a):(Ii(a,i)||(a=We(),sn.lanes|=a,cs|=a,n.baseState=!0),i)}function Ix(n,i){var a=Ct;Ct=a!==0&&4>a?a:4,n(!0);var u=vu.transition;vu.transition={};try{n(!1),i()}finally{Ct=a,vu.transition=u}}function Vp(){return Ei().memoizedState}function Dx(n,i,a){var u=Hr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Gp(n))Wp(i,a);else if(a=yp(n,i,a,u),a!==null){var p=Yn();ki(a,n,u,p),Xp(a,i,u)}}function Ux(n,i,a){var u=Hr(n),p={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gp(n))Wp(i,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=i.lastRenderedReducer,v!==null))try{var R=i.lastRenderedState,V=v(R,a);if(p.hasEagerState=!0,p.eagerState=V,Ii(V,R)){var $=i.interleaved;$===null?(p.next=p,fu(i)):(p.next=$.next,$.next=p),i.interleaved=p;return}}catch{}finally{}a=yp(n,i,p,u),a!==null&&(p=Yn(),ki(a,n,u,p),Xp(a,i,u))}}function Gp(n){var i=n.alternate;return n===sn||i!==null&&i===sn}function Wp(n,i){Yo=nl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Xp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Rn(n,a)}}var sl={readContext:Ai,useCallback:On,useContext:On,useEffect:On,useImperativeHandle:On,useInsertionEffect:On,useLayoutEffect:On,useMemo:On,useReducer:On,useRef:On,useState:On,useDebugValue:On,useDeferredValue:On,useTransition:On,useMutableSource:On,useSyncExternalStore:On,useId:On,unstable_isNewReconciler:!1},Nx={readContext:Ai,useCallback:function(n,i){return Ji().memoizedState=[n,i===void 0?null:i],n},useContext:Ai,useEffect:Up,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,il(4194308,4,kp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return il(4194308,4,n,i)},useInsertionEffect:function(n,i){return il(4,2,n,i)},useMemo:function(n,i){var a=Ji();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Ji();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Dx.bind(null,sn,n),[u.memoizedState,n]},useRef:function(n){var i=Ji();return n={current:n},i.memoizedState=n},useState:Ip,useDebugValue:Eu,useDeferredValue:function(n){return Ji().memoizedState=n},useTransition:function(){var n=Ip(!1),i=n[0];return n=Ix.bind(null,n[1]),Ji().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=sn,p=Ji();if(nn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),En===null)throw Error(t(349));(ls&30)!==0||bp(u,i,a)}p.memoizedState=a;var v={value:a,getSnapshot:i};return p.queue=v,Up(Rp.bind(null,u,v,n),[n]),u.flags|=2048,Zo(9,Cp.bind(null,u,v,a,i),void 0,null),a},useId:function(){var n=Ji(),i=En.identifierPrefix;if(nn){var a=fr,u=ur;a=(u&~(1<<32-Ce(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Qo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Lx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Fx={readContext:Ai,useCallback:Bp,useContext:Ai,useEffect:Au,useImperativeHandle:Op,useInsertionEffect:Np,useLayoutEffect:Fp,useMemo:zp,useReducer:Mu,useRef:Dp,useState:function(){return Mu(Jo)},useDebugValue:Eu,useDeferredValue:function(n){var i=Ei();return Hp(i,vn.memoizedState,n)},useTransition:function(){var n=Mu(Jo)[0],i=Ei().memoizedState;return[n,i]},useMutableSource:wp,useSyncExternalStore:Tp,useId:Vp,unstable_isNewReconciler:!1},kx={readContext:Ai,useCallback:Bp,useContext:Ai,useEffect:Au,useImperativeHandle:Op,useInsertionEffect:Np,useLayoutEffect:Fp,useMemo:zp,useReducer:Su,useRef:Dp,useState:function(){return Su(Jo)},useDebugValue:Eu,useDeferredValue:function(n){var i=Ei();return vn===null?i.memoizedState=n:Hp(i,vn.memoizedState,n)},useTransition:function(){var n=Su(Jo)[0],i=Ei().memoizedState;return[n,i]},useMutableSource:wp,useSyncExternalStore:Tp,useId:Vp,unstable_isNewReconciler:!1};function Ui(n,i){if(n&&n.defaultProps){i=ie({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function wu(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:ie({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ol={isMounted:function(n){return(n=n._reactInternals)?Xn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Yn(),p=Hr(n),v=dr(u,p);v.payload=i,a!=null&&(v.callback=a),i=kr(n,v,p),i!==null&&(ki(i,n,p,u),Za(i,n,p))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Yn(),p=Hr(n),v=dr(u,p);v.tag=1,v.payload=i,a!=null&&(v.callback=a),i=kr(n,v,p),i!==null&&(ki(i,n,p,u),Za(i,n,p))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Yn(),u=Hr(n),p=dr(a,u);p.tag=2,i!=null&&(p.callback=i),i=kr(n,p,u),i!==null&&(ki(i,n,u,a),Za(i,n,u))}};function jp(n,i,a,u,p,v,R){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,R):i.prototype&&i.prototype.isPureReactComponent?!Oo(a,u)||!Oo(p,v):!0}function Kp(n,i,a){var u=!1,p=Ur,v=i.contextType;return typeof v=="object"&&v!==null?v=Ai(v):(p=ni(i)?is:kn.current,u=i.contextTypes,v=(u=u!=null)?Bs(n,p):Ur),i=new i(a,v),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ol,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),i}function qp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&ol.enqueueReplaceState(i,i.state,null)}function Tu(n,i,a,u){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},hu(n);var v=i.contextType;typeof v=="object"&&v!==null?p.context=Ai(v):(v=ni(i)?is:kn.current,p.context=Bs(n,v)),p.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(wu(n,i,v,a),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&ol.enqueueReplaceState(p,p.state,null),$a(n,a,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Ks(n,i){try{var a="",u=i;do a+=ve(u),u=u.return;while(u);var p=a}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:i,stack:p,digest:null}}function bu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Cu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Ox=typeof WeakMap=="function"?WeakMap:Map;function Yp(n,i,a){a=dr(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){dl||(dl=!0,Gu=u),Cu(n,i)},a}function Qp(n,i,a){a=dr(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=i.value;a.payload=function(){return u(p)},a.callback=function(){Cu(n,i)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){Cu(n,i),typeof u!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var R=i.stack;this.componentDidCatch(i.value,{componentStack:R!==null?R:""})}),a}function Jp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new Ox;var p=new Set;u.set(i,p)}else p=u.get(i),p===void 0&&(p=new Set,u.set(i,p));p.has(a)||(p.add(a),n=Zx.bind(null,n,i,a),i.then(n,n))}function Zp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function $p(n,i,a,u,p){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=dr(-1,1),i.tag=2,kr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Bx=P.ReactCurrentOwner,ii=!1;function qn(n,i,a,u){i.child=n===null?_p(i,null,a,u):Gs(i,n.child,a,u)}function em(n,i,a,u,p){a=a.render;var v=i.ref;return Xs(i,p),u=_u(n,i,a,u,v,p),a=yu(),n!==null&&!ii?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,pr(n,i,p)):(nn&&a&&nu(i),i.flags|=1,qn(n,i,u,p),i.child)}function tm(n,i,a,u,p){if(n===null){var v=a.type;return typeof v=="function"&&!Qu(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=v,nm(n,i,v,u,p)):(n=_l(a.type,null,u,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(v=n.child,(n.lanes&p)===0){var R=v.memoizedProps;if(a=a.compare,a=a!==null?a:Oo,a(R,u)&&n.ref===i.ref)return pr(n,i,p)}return i.flags|=1,n=Gr(v,u),n.ref=i.ref,n.return=i,i.child=n}function nm(n,i,a,u,p){if(n!==null){var v=n.memoizedProps;if(Oo(v,u)&&n.ref===i.ref)if(ii=!1,i.pendingProps=u=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(ii=!0);else return i.lanes=n.lanes,pr(n,i,p)}return Ru(n,i,a,u,p)}function im(n,i,a){var u=i.pendingProps,p=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Zt(Ys,di),di|=a;else{if((a&1073741824)===0)return n=v!==null?v.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Zt(Ys,di),di|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:a,Zt(Ys,di),di|=u}else v!==null?(u=v.baseLanes|a,i.memoizedState=null):u=a,Zt(Ys,di),di|=u;return qn(n,i,p,a),i.child}function rm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Ru(n,i,a,u,p){var v=ni(a)?is:kn.current;return v=Bs(i,v),Xs(i,p),a=_u(n,i,a,u,v,p),u=yu(),n!==null&&!ii?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,pr(n,i,p)):(nn&&u&&nu(i),i.flags|=1,qn(n,i,a,p),i.child)}function sm(n,i,a,u,p){if(ni(a)){var v=!0;Wa(i)}else v=!1;if(Xs(i,p),i.stateNode===null)ll(n,i),Kp(i,a,u),Tu(i,a,u,p),u=!0;else if(n===null){var R=i.stateNode,V=i.memoizedProps;R.props=V;var $=R.context,pe=a.contextType;typeof pe=="object"&&pe!==null?pe=Ai(pe):(pe=ni(a)?is:kn.current,pe=Bs(i,pe));var Pe=a.getDerivedStateFromProps,Ne=typeof Pe=="function"||typeof R.getSnapshotBeforeUpdate=="function";Ne||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(V!==u||$!==pe)&&qp(i,R,u,pe),Fr=!1;var Re=i.memoizedState;R.state=Re,$a(i,u,R,p),$=i.memoizedState,V!==u||Re!==$||ti.current||Fr?(typeof Pe=="function"&&(wu(i,a,Pe,u),$=i.memoizedState),(V=Fr||jp(i,a,V,u,Re,$,pe))?(Ne||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(i.flags|=4194308)):(typeof R.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=$),R.props=u,R.state=$,R.context=pe,u=V):(typeof R.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{R=i.stateNode,Mp(n,i),V=i.memoizedProps,pe=i.type===i.elementType?V:Ui(i.type,V),R.props=pe,Ne=i.pendingProps,Re=R.context,$=a.contextType,typeof $=="object"&&$!==null?$=Ai($):($=ni(a)?is:kn.current,$=Bs(i,$));var Qe=a.getDerivedStateFromProps;(Pe=typeof Qe=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(V!==Ne||Re!==$)&&qp(i,R,u,$),Fr=!1,Re=i.memoizedState,R.state=Re,$a(i,u,R,p);var it=i.memoizedState;V!==Ne||Re!==it||ti.current||Fr?(typeof Qe=="function"&&(wu(i,a,Qe,u),it=i.memoizedState),(pe=Fr||jp(i,a,pe,u,Re,it,$)||!1)?(Pe||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(u,it,$),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(u,it,$)),typeof R.componentDidUpdate=="function"&&(i.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof R.componentDidUpdate!="function"||V===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=it),R.props=u,R.state=it,R.context=$,u=pe):(typeof R.componentDidUpdate!="function"||V===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),u=!1)}return Pu(n,i,a,u,v,p)}function Pu(n,i,a,u,p,v){rm(n,i);var R=(i.flags&128)!==0;if(!u&&!R)return p&&up(i,a,!1),pr(n,i,v);u=i.stateNode,Bx.current=i;var V=R&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&R?(i.child=Gs(i,n.child,null,v),i.child=Gs(i,null,V,v)):qn(n,i,V,v),i.memoizedState=u.state,p&&up(i,a,!0),i.child}function om(n){var i=n.stateNode;i.pendingContext?lp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&lp(n,i.context,!1),du(n,i.containerInfo)}function am(n,i,a,u,p){return Vs(),ou(p),i.flags|=256,qn(n,i,a,u),i.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Iu(n){return{baseLanes:n,cachePool:null,transitions:null}}function lm(n,i,a){var u=i.pendingProps,p=rn.current,v=!1,R=(i.flags&128)!==0,V;if((V=R)||(V=n!==null&&n.memoizedState===null?!1:(p&2)!==0),V?(v=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Zt(rn,p&1),n===null)return su(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(R=u.children,n=u.fallback,v?(u=i.mode,v=i.child,R={mode:"hidden",children:R},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=R):v=yl(R,u,0,null),n=ds(n,u,a,null),v.return=i,n.return=i,v.sibling=n,i.child=v,i.child.memoizedState=Iu(a),i.memoizedState=Lu,n):Du(i,R));if(p=n.memoizedState,p!==null&&(V=p.dehydrated,V!==null))return zx(n,i,R,u,V,p,a);if(v){v=u.fallback,R=i.mode,p=n.child,V=p.sibling;var $={mode:"hidden",children:u.children};return(R&1)===0&&i.child!==p?(u=i.child,u.childLanes=0,u.pendingProps=$,i.deletions=null):(u=Gr(p,$),u.subtreeFlags=p.subtreeFlags&14680064),V!==null?v=Gr(V,v):(v=ds(v,R,a,null),v.flags|=2),v.return=i,u.return=i,u.sibling=v,i.child=u,u=v,v=i.child,R=n.child.memoizedState,R=R===null?Iu(a):{baseLanes:R.baseLanes|a,cachePool:null,transitions:R.transitions},v.memoizedState=R,v.childLanes=n.childLanes&~a,i.memoizedState=Lu,u}return v=n.child,n=v.sibling,u=Gr(v,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Du(n,i){return i=yl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function al(n,i,a,u){return u!==null&&ou(u),Gs(i,n.child,null,a),n=Du(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function zx(n,i,a,u,p,v,R){if(a)return i.flags&256?(i.flags&=-257,u=bu(Error(t(422))),al(n,i,R,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(v=u.fallback,p=i.mode,u=yl({mode:"visible",children:u.children},p,0,null),v=ds(v,p,R,null),v.flags|=2,u.return=i,v.return=i,u.sibling=v,i.child=u,(i.mode&1)!==0&&Gs(i,n.child,null,R),i.child.memoizedState=Iu(R),i.memoizedState=Lu,v);if((i.mode&1)===0)return al(n,i,R,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var V=u.dgst;return u=V,v=Error(t(419)),u=bu(v,u,void 0),al(n,i,R,u)}if(V=(R&n.childLanes)!==0,ii||V){if(u=En,u!==null){switch(R&-R){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|R))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,hr(n,p),ki(u,n,p,-1))}return Yu(),u=bu(Error(t(421))),al(n,i,R,u)}return p.data==="$?"?(i.flags|=128,i.child=n.child,i=$x.bind(null,n),p._reactRetry=i,null):(n=v.treeContext,hi=Ir(p.nextSibling),fi=i,nn=!0,Di=null,n!==null&&(Mi[Si++]=ur,Mi[Si++]=fr,Mi[Si++]=rs,ur=n.id,fr=n.overflow,rs=i),i=Du(i,u.children),i.flags|=4096,i)}function cm(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),uu(n.return,i,a)}function Uu(n,i,a,u,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:p}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=a,v.tailMode=p)}function um(n,i,a){var u=i.pendingProps,p=u.revealOrder,v=u.tail;if(qn(n,i,u.children,a),u=rn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&cm(n,a,i);else if(n.tag===19)cm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Zt(rn,u),(i.mode&1)===0)i.memoizedState=null;else switch(p){case"forwards":for(a=i.child,p=null;a!==null;)n=a.alternate,n!==null&&el(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=i.child,i.child=null):(p=a.sibling,a.sibling=null),Uu(i,!1,p,a,v);break;case"backwards":for(a=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&el(n)===null){i.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}Uu(i,!0,a,null,v);break;case"together":Uu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ll(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function pr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),cs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Gr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Gr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Hx(n,i,a){switch(i.tag){case 3:om(i),Vs();break;case 5:Ep(i);break;case 1:ni(i.type)&&Wa(i);break;case 4:du(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,p=i.memoizedProps.value;Zt(Qa,u._currentValue),u._currentValue=p;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Zt(rn,rn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?lm(n,i,a):(Zt(rn,rn.current&1),n=pr(n,i,a),n!==null?n.sibling:null);Zt(rn,rn.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return um(n,i,a);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Zt(rn,rn.current),u)break;return null;case 22:case 23:return i.lanes=0,im(n,i,a)}return pr(n,i,a)}var fm,Nu,hm,dm;fm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Nu=function(){},hm=function(n,i,a,u){var p=n.memoizedProps;if(p!==u){n=i.stateNode,as(Qi.current);var v=null;switch(a){case"input":p=He(n,p),u=He(n,u),v=[];break;case"select":p=ie({},p,{value:void 0}),u=ie({},u,{value:void 0}),v=[];break;case"textarea":p=dt(n,p),u=dt(n,u),v=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ha)}Ge(a,u);var R;a=null;for(pe in p)if(!u.hasOwnProperty(pe)&&p.hasOwnProperty(pe)&&p[pe]!=null)if(pe==="style"){var V=p[pe];for(R in V)V.hasOwnProperty(R)&&(a||(a={}),a[R]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(o.hasOwnProperty(pe)?v||(v=[]):(v=v||[]).push(pe,null));for(pe in u){var $=u[pe];if(V=p!=null?p[pe]:void 0,u.hasOwnProperty(pe)&&$!==V&&($!=null||V!=null))if(pe==="style")if(V){for(R in V)!V.hasOwnProperty(R)||$&&$.hasOwnProperty(R)||(a||(a={}),a[R]="");for(R in $)$.hasOwnProperty(R)&&V[R]!==$[R]&&(a||(a={}),a[R]=$[R])}else a||(v||(v=[]),v.push(pe,a)),a=$;else pe==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,V=V?V.__html:void 0,$!=null&&V!==$&&(v=v||[]).push(pe,$)):pe==="children"?typeof $!="string"&&typeof $!="number"||(v=v||[]).push(pe,""+$):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(o.hasOwnProperty(pe)?($!=null&&pe==="onScroll"&&$t("scroll",n),v||V===$||(v=[])):(v=v||[]).push(pe,$))}a&&(v=v||[]).push("style",a);var pe=v;(i.updateQueue=pe)&&(i.flags|=4)}},dm=function(n,i,a,u){a!==u&&(i.flags|=4)};function $o(n,i){if(!nn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Bn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Vx(n,i,a){var u=i.pendingProps;switch(iu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bn(i),null;case 1:return ni(i.type)&&Ga(),Bn(i),null;case 3:return u=i.stateNode,js(),en(ti),en(kn),gu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(qa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Di!==null&&(ju(Di),Di=null))),Nu(n,i),Bn(i),null;case 5:pu(i);var p=as(qo.current);if(a=i.type,n!==null&&i.stateNode!=null)hm(n,i,a,u,p),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Bn(i),null}if(n=as(Qi.current),qa(i)){u=i.stateNode,a=i.type;var v=i.memoizedProps;switch(u[Yi]=i,u[Go]=v,n=(i.mode&1)!==0,a){case"dialog":$t("cancel",u),$t("close",u);break;case"iframe":case"object":case"embed":$t("load",u);break;case"video":case"audio":for(p=0;p<zo.length;p++)$t(zo[p],u);break;case"source":$t("error",u);break;case"img":case"image":case"link":$t("error",u),$t("load",u);break;case"details":$t("toggle",u);break;case"input":et(u,v),$t("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},$t("invalid",u);break;case"textarea":Tt(u,v),$t("invalid",u)}Ge(a,v),p=null;for(var R in v)if(v.hasOwnProperty(R)){var V=v[R];R==="children"?typeof V=="string"?u.textContent!==V&&(v.suppressHydrationWarning!==!0&&za(u.textContent,V,n),p=["children",V]):typeof V=="number"&&u.textContent!==""+V&&(v.suppressHydrationWarning!==!0&&za(u.textContent,V,n),p=["children",""+V]):o.hasOwnProperty(R)&&V!=null&&R==="onScroll"&&$t("scroll",u)}switch(a){case"input":xe(u),lt(u,v,!0);break;case"textarea":xe(u),kt(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=Ha)}u=p,i.updateQueue=u,u!==null&&(i.flags|=4)}else{R=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=w(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=R.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=R.createElement(a,{is:u.is}):(n=R.createElement(a),a==="select"&&(R=n,u.multiple?R.multiple=!0:u.size&&(R.size=u.size))):n=R.createElementNS(n,a),n[Yi]=i,n[Go]=u,fm(n,i,!1,!1),i.stateNode=n;e:{switch(R=De(a,u),a){case"dialog":$t("cancel",n),$t("close",n),p=u;break;case"iframe":case"object":case"embed":$t("load",n),p=u;break;case"video":case"audio":for(p=0;p<zo.length;p++)$t(zo[p],n);p=u;break;case"source":$t("error",n),p=u;break;case"img":case"image":case"link":$t("error",n),$t("load",n),p=u;break;case"details":$t("toggle",n),p=u;break;case"input":et(n,u),p=He(n,u),$t("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=ie({},u,{value:void 0}),$t("invalid",n);break;case"textarea":Tt(n,u),p=dt(n,u),$t("invalid",n);break;default:p=u}Ge(a,p),V=p;for(v in V)if(V.hasOwnProperty(v)){var $=V[v];v==="style"?me(n,$):v==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,$!=null&&le(n,$)):v==="children"?typeof $=="string"?(a!=="textarea"||$!=="")&&_e(n,$):typeof $=="number"&&_e(n,""+$):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?$!=null&&v==="onScroll"&&$t("scroll",n):$!=null&&L(n,v,$,R))}switch(a){case"input":xe(n),lt(n,u,!1);break;case"textarea":xe(n),kt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+oe(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?At(n,!!u.multiple,v,!1):u.defaultValue!=null&&At(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Ha)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Bn(i),null;case 6:if(n&&i.stateNode!=null)dm(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=as(qo.current),as(Qi.current),qa(i)){if(u=i.stateNode,a=i.memoizedProps,u[Yi]=i,(v=u.nodeValue!==a)&&(n=fi,n!==null))switch(n.tag){case 3:za(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&za(u.nodeValue,a,(n.mode&1)!==0)}v&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Yi]=i,i.stateNode=u}return Bn(i),null;case 13:if(en(rn),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(nn&&hi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)gp(),Vs(),i.flags|=98560,v=!1;else if(v=qa(i),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=i.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Yi]=i}else Vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Bn(i),v=!1}else Di!==null&&(ju(Di),Di=null),v=!0;if(!v)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(rn.current&1)!==0?xn===0&&(xn=3):Yu())),i.updateQueue!==null&&(i.flags|=4),Bn(i),null);case 4:return js(),Nu(n,i),n===null&&Ho(i.stateNode.containerInfo),Bn(i),null;case 10:return cu(i.type._context),Bn(i),null;case 17:return ni(i.type)&&Ga(),Bn(i),null;case 19:if(en(rn),v=i.memoizedState,v===null)return Bn(i),null;if(u=(i.flags&128)!==0,R=v.rendering,R===null)if(u)$o(v,!1);else{if(xn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(R=el(n),R!==null){for(i.flags|=128,$o(v,!1),u=R.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)v=a,n=u,v.flags&=14680066,R=v.alternate,R===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=R.childLanes,v.lanes=R.lanes,v.child=R.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=R.memoizedProps,v.memoizedState=R.memoizedState,v.updateQueue=R.updateQueue,v.type=R.type,n=R.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Zt(rn,rn.current&1|2),i.child}n=n.sibling}v.tail!==null&&Dt()>Qs&&(i.flags|=128,u=!0,$o(v,!1),i.lanes=4194304)}else{if(!u)if(n=el(R),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),$o(v,!0),v.tail===null&&v.tailMode==="hidden"&&!R.alternate&&!nn)return Bn(i),null}else 2*Dt()-v.renderingStartTime>Qs&&a!==1073741824&&(i.flags|=128,u=!0,$o(v,!1),i.lanes=4194304);v.isBackwards?(R.sibling=i.child,i.child=R):(a=v.last,a!==null?a.sibling=R:i.child=R,v.last=R)}return v.tail!==null?(i=v.tail,v.rendering=i,v.tail=i.sibling,v.renderingStartTime=Dt(),i.sibling=null,a=rn.current,Zt(rn,u?a&1|2:a&1),i):(Bn(i),null);case 22:case 23:return qu(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(di&1073741824)!==0&&(Bn(i),i.subtreeFlags&6&&(i.flags|=8192)):Bn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Gx(n,i){switch(iu(i),i.tag){case 1:return ni(i.type)&&Ga(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return js(),en(ti),en(kn),gu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return pu(i),null;case 13:if(en(rn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Vs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return en(rn),null;case 4:return js(),null;case 10:return cu(i.type._context),null;case 22:case 23:return qu(),null;case 24:return null;default:return null}}var cl=!1,zn=!1,Wx=typeof WeakSet=="function"?WeakSet:Set,$e=null;function qs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){cn(n,i,u)}else a.current=null}function Fu(n,i,a){try{a()}catch(u){cn(n,i,u)}}var pm=!1;function Xx(n,i){if(qc=Ra,n=jd(),zc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var p=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var R=0,V=-1,$=-1,pe=0,Pe=0,Ne=n,Re=null;t:for(;;){for(var Qe;Ne!==a||p!==0&&Ne.nodeType!==3||(V=R+p),Ne!==v||u!==0&&Ne.nodeType!==3||($=R+u),Ne.nodeType===3&&(R+=Ne.nodeValue.length),(Qe=Ne.firstChild)!==null;)Re=Ne,Ne=Qe;for(;;){if(Ne===n)break t;if(Re===a&&++pe===p&&(V=R),Re===v&&++Pe===u&&($=R),(Qe=Ne.nextSibling)!==null)break;Ne=Re,Re=Ne.parentNode}Ne=Qe}a=V===-1||$===-1?null:{start:V,end:$}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yc={focusedElem:n,selectionRange:a},Ra=!1,$e=i;$e!==null;)if(i=$e,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,$e=n;else for(;$e!==null;){i=$e;try{var it=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(it!==null){var ot=it.memoizedProps,hn=it.memoizedState,ue=i.stateNode,ne=ue.getSnapshotBeforeUpdate(i.elementType===i.type?ot:Ui(i.type,ot),hn);ue.__reactInternalSnapshotBeforeUpdate=ne}break;case 3:var he=i.stateNode.containerInfo;he.nodeType===1?he.textContent="":he.nodeType===9&&he.documentElement&&he.removeChild(he.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Oe){cn(i,i.return,Oe)}if(n=i.sibling,n!==null){n.return=i.return,$e=n;break}$e=i.return}return it=pm,pm=!1,it}function ea(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&Fu(i,a,v)}p=p.next}while(p!==u)}}function ul(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function ku(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function mm(n){var i=n.alternate;i!==null&&(n.alternate=null,mm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Yi],delete i[Go],delete i[$c],delete i[bx],delete i[Cx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function gm(n){return n.tag===5||n.tag===3||n.tag===4}function vm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||gm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ou(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ha));else if(u!==4&&(n=n.child,n!==null))for(Ou(n,i,a),n=n.sibling;n!==null;)Ou(n,i,a),n=n.sibling}function Bu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Bu(n,i,a),n=n.sibling;n!==null;)Bu(n,i,a),n=n.sibling}var Ln=null,Ni=!1;function Or(n,i,a){for(a=a.child;a!==null;)xm(n,i,a),a=a.sibling}function xm(n,i,a){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(fe,a)}catch{}switch(a.tag){case 5:zn||qs(a,i);case 6:var u=Ln,p=Ni;Ln=null,Or(n,i,a),Ln=u,Ni=p,Ln!==null&&(Ni?(n=Ln,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ln.removeChild(a.stateNode));break;case 18:Ln!==null&&(Ni?(n=Ln,a=a.stateNode,n.nodeType===8?Zc(n.parentNode,a):n.nodeType===1&&Zc(n,a),Io(n)):Zc(Ln,a.stateNode));break;case 4:u=Ln,p=Ni,Ln=a.stateNode.containerInfo,Ni=!0,Or(n,i,a),Ln=u,Ni=p;break;case 0:case 11:case 14:case 15:if(!zn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var v=p,R=v.destroy;v=v.tag,R!==void 0&&((v&2)!==0||(v&4)!==0)&&Fu(a,i,R),p=p.next}while(p!==u)}Or(n,i,a);break;case 1:if(!zn&&(qs(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(V){cn(a,i,V)}Or(n,i,a);break;case 21:Or(n,i,a);break;case 22:a.mode&1?(zn=(u=zn)||a.memoizedState!==null,Or(n,i,a),zn=u):Or(n,i,a);break;default:Or(n,i,a)}}function _m(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Wx),i.forEach(function(u){var p=e_.bind(null,n,u);a.has(u)||(a.add(u),u.then(p,p))})}}function Fi(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var p=a[u];try{var v=n,R=i,V=R;e:for(;V!==null;){switch(V.tag){case 5:Ln=V.stateNode,Ni=!1;break e;case 3:Ln=V.stateNode.containerInfo,Ni=!0;break e;case 4:Ln=V.stateNode.containerInfo,Ni=!0;break e}V=V.return}if(Ln===null)throw Error(t(160));xm(v,R,p),Ln=null,Ni=!1;var $=p.alternate;$!==null&&($.return=null),p.return=null}catch(pe){cn(p,i,pe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ym(i,n),i=i.sibling}function ym(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Fi(i,n),Zi(n),u&4){try{ea(3,n,n.return),ul(3,n)}catch(ot){cn(n,n.return,ot)}try{ea(5,n,n.return)}catch(ot){cn(n,n.return,ot)}}break;case 1:Fi(i,n),Zi(n),u&512&&a!==null&&qs(a,a.return);break;case 5:if(Fi(i,n),Zi(n),u&512&&a!==null&&qs(a,a.return),n.flags&32){var p=n.stateNode;try{_e(p,"")}catch(ot){cn(n,n.return,ot)}}if(u&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,R=a!==null?a.memoizedProps:v,V=n.type,$=n.updateQueue;if(n.updateQueue=null,$!==null)try{V==="input"&&v.type==="radio"&&v.name!=null&&Ze(p,v),De(V,R);var pe=De(V,v);for(R=0;R<$.length;R+=2){var Pe=$[R],Ne=$[R+1];Pe==="style"?me(p,Ne):Pe==="dangerouslySetInnerHTML"?le(p,Ne):Pe==="children"?_e(p,Ne):L(p,Pe,Ne,pe)}switch(V){case"input":rt(p,v);break;case"textarea":ke(p,v);break;case"select":var Re=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Qe=v.value;Qe!=null?At(p,!!v.multiple,Qe,!1):Re!==!!v.multiple&&(v.defaultValue!=null?At(p,!!v.multiple,v.defaultValue,!0):At(p,!!v.multiple,v.multiple?[]:"",!1))}p[Go]=v}catch(ot){cn(n,n.return,ot)}}break;case 6:if(Fi(i,n),Zi(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(ot){cn(n,n.return,ot)}}break;case 3:if(Fi(i,n),Zi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Io(i.containerInfo)}catch(ot){cn(n,n.return,ot)}break;case 4:Fi(i,n),Zi(n);break;case 13:Fi(i,n),Zi(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(Vu=Dt())),u&4&&_m(n);break;case 22:if(Pe=a!==null&&a.memoizedState!==null,n.mode&1?(zn=(pe=zn)||Pe,Fi(i,n),zn=pe):Fi(i,n),Zi(n),u&8192){if(pe=n.memoizedState!==null,(n.stateNode.isHidden=pe)&&!Pe&&(n.mode&1)!==0)for($e=n,Pe=n.child;Pe!==null;){for(Ne=$e=Pe;$e!==null;){switch(Re=$e,Qe=Re.child,Re.tag){case 0:case 11:case 14:case 15:ea(4,Re,Re.return);break;case 1:qs(Re,Re.return);var it=Re.stateNode;if(typeof it.componentWillUnmount=="function"){u=Re,a=Re.return;try{i=u,it.props=i.memoizedProps,it.state=i.memoizedState,it.componentWillUnmount()}catch(ot){cn(u,a,ot)}}break;case 5:qs(Re,Re.return);break;case 22:if(Re.memoizedState!==null){Am(Ne);continue}}Qe!==null?(Qe.return=Re,$e=Qe):Am(Ne)}Pe=Pe.sibling}e:for(Pe=null,Ne=n;;){if(Ne.tag===5){if(Pe===null){Pe=Ne;try{p=Ne.stateNode,pe?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(V=Ne.stateNode,$=Ne.memoizedProps.style,R=$!=null&&$.hasOwnProperty("display")?$.display:null,V.style.display=ge("display",R))}catch(ot){cn(n,n.return,ot)}}}else if(Ne.tag===6){if(Pe===null)try{Ne.stateNode.nodeValue=pe?"":Ne.memoizedProps}catch(ot){cn(n,n.return,ot)}}else if((Ne.tag!==22&&Ne.tag!==23||Ne.memoizedState===null||Ne===n)&&Ne.child!==null){Ne.child.return=Ne,Ne=Ne.child;continue}if(Ne===n)break e;for(;Ne.sibling===null;){if(Ne.return===null||Ne.return===n)break e;Pe===Ne&&(Pe=null),Ne=Ne.return}Pe===Ne&&(Pe=null),Ne.sibling.return=Ne.return,Ne=Ne.sibling}}break;case 19:Fi(i,n),Zi(n),u&4&&_m(n);break;case 21:break;default:Fi(i,n),Zi(n)}}function Zi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(gm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(_e(p,""),u.flags&=-33);var v=vm(n);Bu(n,v,p);break;case 3:case 4:var R=u.stateNode.containerInfo,V=vm(n);Ou(n,V,R);break;default:throw Error(t(161))}}catch($){cn(n,n.return,$)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function jx(n,i,a){$e=n,Mm(n)}function Mm(n,i,a){for(var u=(n.mode&1)!==0;$e!==null;){var p=$e,v=p.child;if(p.tag===22&&u){var R=p.memoizedState!==null||cl;if(!R){var V=p.alternate,$=V!==null&&V.memoizedState!==null||zn;V=cl;var pe=zn;if(cl=R,(zn=$)&&!pe)for($e=p;$e!==null;)R=$e,$=R.child,R.tag===22&&R.memoizedState!==null?Em(p):$!==null?($.return=R,$e=$):Em(p);for(;v!==null;)$e=v,Mm(v),v=v.sibling;$e=p,cl=V,zn=pe}Sm(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,$e=v):Sm(n)}}function Sm(n){for(;$e!==null;){var i=$e;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:zn||ul(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!zn)if(a===null)u.componentDidMount();else{var p=i.elementType===i.type?a.memoizedProps:Ui(i.type,a.memoizedProps);u.componentDidUpdate(p,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=i.updateQueue;v!==null&&Ap(i,v,u);break;case 3:var R=i.updateQueue;if(R!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ap(i,R,a)}break;case 5:var V=i.stateNode;if(a===null&&i.flags&4){a=V;var $=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":$.autoFocus&&a.focus();break;case"img":$.src&&(a.src=$.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var pe=i.alternate;if(pe!==null){var Pe=pe.memoizedState;if(Pe!==null){var Ne=Pe.dehydrated;Ne!==null&&Io(Ne)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}zn||i.flags&512&&ku(i)}catch(Re){cn(i,i.return,Re)}}if(i===n){$e=null;break}if(a=i.sibling,a!==null){a.return=i.return,$e=a;break}$e=i.return}}function Am(n){for(;$e!==null;){var i=$e;if(i===n){$e=null;break}var a=i.sibling;if(a!==null){a.return=i.return,$e=a;break}$e=i.return}}function Em(n){for(;$e!==null;){var i=$e;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ul(4,i)}catch($){cn(i,a,$)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var p=i.return;try{u.componentDidMount()}catch($){cn(i,p,$)}}var v=i.return;try{ku(i)}catch($){cn(i,v,$)}break;case 5:var R=i.return;try{ku(i)}catch($){cn(i,R,$)}}}catch($){cn(i,i.return,$)}if(i===n){$e=null;break}var V=i.sibling;if(V!==null){V.return=i.return,$e=V;break}$e=i.return}}var Kx=Math.ceil,fl=P.ReactCurrentDispatcher,zu=P.ReactCurrentOwner,wi=P.ReactCurrentBatchConfig,Ht=0,En=null,pn=null,In=0,di=0,Ys=Dr(0),xn=0,ta=null,cs=0,hl=0,Hu=0,na=null,ri=null,Vu=0,Qs=1/0,mr=null,dl=!1,Gu=null,Br=null,pl=!1,zr=null,ml=0,ia=0,Wu=null,gl=-1,vl=0;function Yn(){return(Ht&6)!==0?Dt():gl!==-1?gl:gl=Dt()}function Hr(n){return(n.mode&1)===0?1:(Ht&2)!==0&&In!==0?In&-In:Px.transition!==null?(vl===0&&(vl=We()),vl):(n=Ct,n!==0||(n=window.event,n=n===void 0?16:Td(n.type)),n)}function ki(n,i,a,u){if(50<ia)throw ia=0,Wu=null,Error(t(185));Et(n,a,u),((Ht&2)===0||n!==En)&&(n===En&&((Ht&2)===0&&(hl|=a),xn===4&&Vr(n,In)),si(n,u),a===1&&Ht===0&&(i.mode&1)===0&&(Qs=Dt()+500,Xa&&Nr()))}function si(n,i){var a=n.callbackNode;Ut(n,i);var u=Nt(n,n===En?In:0);if(u===0)a!==null&&Cn(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Cn(a),i===1)n.tag===0?Rx(Tm.bind(null,n)):fp(Tm.bind(null,n)),wx(function(){(Ht&6)===0&&Nr()}),a=null;else{switch(yi(u)){case 1:a=Sn;break;case 4:a=b;break;case 16:a=te;break;case 536870912:a=se;break;default:a=te}a=Um(a,wm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function wm(n,i){if(gl=-1,vl=0,(Ht&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Js()&&n.callbackNode!==a)return null;var u=Nt(n,n===En?In:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=xl(n,u);else{i=u;var p=Ht;Ht|=2;var v=Cm();(En!==n||In!==i)&&(mr=null,Qs=Dt()+500,fs(n,i));do try{Qx();break}catch(V){bm(n,V)}while(!0);lu(),fl.current=v,Ht=p,pn!==null?i=0:(En=null,In=0,i=xn)}if(i!==0){if(i===2&&(p=Jt(n),p!==0&&(u=p,i=Xu(n,p))),i===1)throw a=ta,fs(n,0),Vr(n,u),si(n,Dt()),a;if(i===6)Vr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!qx(p)&&(i=xl(n,u),i===2&&(v=Jt(n),v!==0&&(u=v,i=Xu(n,v))),i===1))throw a=ta,fs(n,0),Vr(n,u),si(n,Dt()),a;switch(n.finishedWork=p,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:hs(n,ri,mr);break;case 3:if(Vr(n,u),(u&130023424)===u&&(i=Vu+500-Dt(),10<i)){if(Nt(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Yn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Jc(hs.bind(null,n,ri,mr),i);break}hs(n,ri,mr);break;case 4:if(Vr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,p=-1;0<u;){var R=31-Ce(u);v=1<<R,R=i[R],R>p&&(p=R),u&=~v}if(u=p,u=Dt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Kx(u/1960))-u,10<u){n.timeoutHandle=Jc(hs.bind(null,n,ri,mr),u);break}hs(n,ri,mr);break;case 5:hs(n,ri,mr);break;default:throw Error(t(329))}}}return si(n,Dt()),n.callbackNode===a?wm.bind(null,n):null}function Xu(n,i){var a=na;return n.current.memoizedState.isDehydrated&&(fs(n,i).flags|=256),n=xl(n,i),n!==2&&(i=ri,ri=a,i!==null&&ju(i)),n}function ju(n){ri===null?ri=n:ri.push.apply(ri,n)}function qx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var p=a[u],v=p.getSnapshot;p=p.value;try{if(!Ii(v(),p))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Vr(n,i){for(i&=~Hu,i&=~hl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ce(i),u=1<<a;n[a]=-1,i&=~u}}function Tm(n){if((Ht&6)!==0)throw Error(t(327));Js();var i=Nt(n,0);if((i&1)===0)return si(n,Dt()),null;var a=xl(n,i);if(n.tag!==0&&a===2){var u=Jt(n);u!==0&&(i=u,a=Xu(n,u))}if(a===1)throw a=ta,fs(n,0),Vr(n,i),si(n,Dt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,hs(n,ri,mr),si(n,Dt()),null}function Ku(n,i){var a=Ht;Ht|=1;try{return n(i)}finally{Ht=a,Ht===0&&(Qs=Dt()+500,Xa&&Nr())}}function us(n){zr!==null&&zr.tag===0&&(Ht&6)===0&&Js();var i=Ht;Ht|=1;var a=wi.transition,u=Ct;try{if(wi.transition=null,Ct=1,n)return n()}finally{Ct=u,wi.transition=a,Ht=i,(Ht&6)===0&&Nr()}}function qu(){di=Ys.current,en(Ys)}function fs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Ex(a)),pn!==null)for(a=pn.return;a!==null;){var u=a;switch(iu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ga();break;case 3:js(),en(ti),en(kn),gu();break;case 5:pu(u);break;case 4:js();break;case 13:en(rn);break;case 19:en(rn);break;case 10:cu(u.type._context);break;case 22:case 23:qu()}a=a.return}if(En=n,pn=n=Gr(n.current,null),In=di=i,xn=0,ta=null,Hu=hl=cs=0,ri=na=null,os!==null){for(i=0;i<os.length;i++)if(a=os[i],u=a.interleaved,u!==null){a.interleaved=null;var p=u.next,v=a.pending;if(v!==null){var R=v.next;v.next=p,u.next=R}a.pending=u}os=null}return n}function bm(n,i){do{var a=pn;try{if(lu(),tl.current=sl,nl){for(var u=sn.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}nl=!1}if(ls=0,An=vn=sn=null,Yo=!1,Qo=0,zu.current=null,a===null||a.return===null){xn=1,ta=i,pn=null;break}e:{var v=n,R=a.return,V=a,$=i;if(i=In,V.flags|=32768,$!==null&&typeof $=="object"&&typeof $.then=="function"){var pe=$,Pe=V,Ne=Pe.tag;if((Pe.mode&1)===0&&(Ne===0||Ne===11||Ne===15)){var Re=Pe.alternate;Re?(Pe.updateQueue=Re.updateQueue,Pe.memoizedState=Re.memoizedState,Pe.lanes=Re.lanes):(Pe.updateQueue=null,Pe.memoizedState=null)}var Qe=Zp(R);if(Qe!==null){Qe.flags&=-257,$p(Qe,R,V,v,i),Qe.mode&1&&Jp(v,pe,i),i=Qe,$=pe;var it=i.updateQueue;if(it===null){var ot=new Set;ot.add($),i.updateQueue=ot}else it.add($);break e}else{if((i&1)===0){Jp(v,pe,i),Yu();break e}$=Error(t(426))}}else if(nn&&V.mode&1){var hn=Zp(R);if(hn!==null){(hn.flags&65536)===0&&(hn.flags|=256),$p(hn,R,V,v,i),ou(Ks($,V));break e}}v=$=Ks($,V),xn!==4&&(xn=2),na===null?na=[v]:na.push(v),v=R;do{switch(v.tag){case 3:v.flags|=65536,i&=-i,v.lanes|=i;var ue=Yp(v,$,i);Sp(v,ue);break e;case 1:V=$;var ne=v.type,he=v.stateNode;if((v.flags&128)===0&&(typeof ne.getDerivedStateFromError=="function"||he!==null&&typeof he.componentDidCatch=="function"&&(Br===null||!Br.has(he)))){v.flags|=65536,i&=-i,v.lanes|=i;var Oe=Qp(v,V,i);Sp(v,Oe);break e}}v=v.return}while(v!==null)}Pm(a)}catch(at){i=at,pn===a&&a!==null&&(pn=a=a.return);continue}break}while(!0)}function Cm(){var n=fl.current;return fl.current=sl,n===null?sl:n}function Yu(){(xn===0||xn===3||xn===2)&&(xn=4),En===null||(cs&268435455)===0&&(hl&268435455)===0||Vr(En,In)}function xl(n,i){var a=Ht;Ht|=2;var u=Cm();(En!==n||In!==i)&&(mr=null,fs(n,i));do try{Yx();break}catch(p){bm(n,p)}while(!0);if(lu(),Ht=a,fl.current=u,pn!==null)throw Error(t(261));return En=null,In=0,xn}function Yx(){for(;pn!==null;)Rm(pn)}function Qx(){for(;pn!==null&&!jn();)Rm(pn)}function Rm(n){var i=Dm(n.alternate,n,di);n.memoizedProps=n.pendingProps,i===null?Pm(n):pn=i,zu.current=null}function Pm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Vx(a,i,di),a!==null){pn=a;return}}else{if(a=Gx(a,i),a!==null){a.flags&=32767,pn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{xn=6,pn=null;return}}if(i=i.sibling,i!==null){pn=i;return}pn=i=n}while(i!==null);xn===0&&(xn=5)}function hs(n,i,a){var u=Ct,p=wi.transition;try{wi.transition=null,Ct=1,Jx(n,i,a,u)}finally{wi.transition=p,Ct=u}return null}function Jx(n,i,a,u){do Js();while(zr!==null);if((Ht&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(gn(n,v),n===En&&(pn=En=null,In=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||pl||(pl=!0,Um(te,function(){return Js(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=wi.transition,wi.transition=null;var R=Ct;Ct=1;var V=Ht;Ht|=4,zu.current=null,Xx(n,a),ym(a,n),vx(Yc),Ra=!!qc,Yc=qc=null,n.current=a,jx(a),Nn(),Ht=V,Ct=R,wi.transition=v}else n.current=a;if(pl&&(pl=!1,zr=n,ml=p),v=n.pendingLanes,v===0&&(Br=null),ze(a.stateNode),si(n,Dt()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)p=i[a],u(p.value,{componentStack:p.stack,digest:p.digest});if(dl)throw dl=!1,n=Gu,Gu=null,n;return(ml&1)!==0&&n.tag!==0&&Js(),v=n.pendingLanes,(v&1)!==0?n===Wu?ia++:(ia=0,Wu=n):ia=0,Nr(),null}function Js(){if(zr!==null){var n=yi(ml),i=wi.transition,a=Ct;try{if(wi.transition=null,Ct=16>n?16:n,zr===null)var u=!1;else{if(n=zr,zr=null,ml=0,(Ht&6)!==0)throw Error(t(331));var p=Ht;for(Ht|=4,$e=n.current;$e!==null;){var v=$e,R=v.child;if(($e.flags&16)!==0){var V=v.deletions;if(V!==null){for(var $=0;$<V.length;$++){var pe=V[$];for($e=pe;$e!==null;){var Pe=$e;switch(Pe.tag){case 0:case 11:case 15:ea(8,Pe,v)}var Ne=Pe.child;if(Ne!==null)Ne.return=Pe,$e=Ne;else for(;$e!==null;){Pe=$e;var Re=Pe.sibling,Qe=Pe.return;if(mm(Pe),Pe===pe){$e=null;break}if(Re!==null){Re.return=Qe,$e=Re;break}$e=Qe}}}var it=v.alternate;if(it!==null){var ot=it.child;if(ot!==null){it.child=null;do{var hn=ot.sibling;ot.sibling=null,ot=hn}while(ot!==null)}}$e=v}}if((v.subtreeFlags&2064)!==0&&R!==null)R.return=v,$e=R;else e:for(;$e!==null;){if(v=$e,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:ea(9,v,v.return)}var ue=v.sibling;if(ue!==null){ue.return=v.return,$e=ue;break e}$e=v.return}}var ne=n.current;for($e=ne;$e!==null;){R=$e;var he=R.child;if((R.subtreeFlags&2064)!==0&&he!==null)he.return=R,$e=he;else e:for(R=ne;$e!==null;){if(V=$e,(V.flags&2048)!==0)try{switch(V.tag){case 0:case 11:case 15:ul(9,V)}}catch(at){cn(V,V.return,at)}if(V===R){$e=null;break e}var Oe=V.sibling;if(Oe!==null){Oe.return=V.return,$e=Oe;break e}$e=V.return}}if(Ht=p,Nr(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(fe,n)}catch{}u=!0}return u}finally{Ct=a,wi.transition=i}}return!1}function Lm(n,i,a){i=Ks(a,i),i=Yp(n,i,1),n=kr(n,i,1),i=Yn(),n!==null&&(Et(n,1,i),si(n,i))}function cn(n,i,a){if(n.tag===3)Lm(n,n,a);else for(;i!==null;){if(i.tag===3){Lm(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Br===null||!Br.has(u))){n=Ks(a,n),n=Qp(i,n,1),i=kr(i,n,1),n=Yn(),i!==null&&(Et(i,1,n),si(i,n));break}}i=i.return}}function Zx(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Yn(),n.pingedLanes|=n.suspendedLanes&a,En===n&&(In&a)===a&&(xn===4||xn===3&&(In&130023424)===In&&500>Dt()-Vu?fs(n,0):Hu|=a),si(n,i)}function Im(n,i){i===0&&((n.mode&1)===0?i=1:(i=nt,nt<<=1,(nt&130023424)===0&&(nt=4194304)));var a=Yn();n=hr(n,i),n!==null&&(Et(n,i,a),si(n,a))}function $x(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Im(n,a)}function e_(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Im(n,a)}var Dm;Dm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ti.current)ii=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ii=!1,Hx(n,i,a);ii=(n.flags&131072)!==0}else ii=!1,nn&&(i.flags&1048576)!==0&&hp(i,Ka,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ll(n,i),n=i.pendingProps;var p=Bs(i,kn.current);Xs(i,a),p=_u(null,i,u,n,p,a);var v=yu();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ni(u)?(v=!0,Wa(i)):v=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,hu(i),p.updater=ol,i.stateNode=p,p._reactInternals=i,Tu(i,u,n,a),i=Pu(null,i,u,!0,v,a)):(i.tag=0,nn&&v&&nu(i),qn(null,i,p,a),i=i.child),i;case 16:u=i.elementType;e:{switch(ll(n,i),n=i.pendingProps,p=u._init,u=p(u._payload),i.type=u,p=i.tag=n_(u),n=Ui(u,n),p){case 0:i=Ru(null,i,u,n,a);break e;case 1:i=sm(null,i,u,n,a);break e;case 11:i=em(null,i,u,n,a);break e;case 14:i=tm(null,i,u,Ui(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ui(u,p),Ru(n,i,u,p,a);case 1:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ui(u,p),sm(n,i,u,p,a);case 3:e:{if(om(i),n===null)throw Error(t(387));u=i.pendingProps,v=i.memoizedState,p=v.element,Mp(n,i),$a(i,u,null,a);var R=i.memoizedState;if(u=R.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},i.updateQueue.baseState=v,i.memoizedState=v,i.flags&256){p=Ks(Error(t(423)),i),i=am(n,i,u,a,p);break e}else if(u!==p){p=Ks(Error(t(424)),i),i=am(n,i,u,a,p);break e}else for(hi=Ir(i.stateNode.containerInfo.firstChild),fi=i,nn=!0,Di=null,a=_p(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Vs(),u===p){i=pr(n,i,a);break e}qn(n,i,u,a)}i=i.child}return i;case 5:return Ep(i),n===null&&su(i),u=i.type,p=i.pendingProps,v=n!==null?n.memoizedProps:null,R=p.children,Qc(u,p)?R=null:v!==null&&Qc(u,v)&&(i.flags|=32),rm(n,i),qn(n,i,R,a),i.child;case 6:return n===null&&su(i),null;case 13:return lm(n,i,a);case 4:return du(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Gs(i,null,u,a):qn(n,i,u,a),i.child;case 11:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ui(u,p),em(n,i,u,p,a);case 7:return qn(n,i,i.pendingProps,a),i.child;case 8:return qn(n,i,i.pendingProps.children,a),i.child;case 12:return qn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,p=i.pendingProps,v=i.memoizedProps,R=p.value,Zt(Qa,u._currentValue),u._currentValue=R,v!==null)if(Ii(v.value,R)){if(v.children===p.children&&!ti.current){i=pr(n,i,a);break e}}else for(v=i.child,v!==null&&(v.return=i);v!==null;){var V=v.dependencies;if(V!==null){R=v.child;for(var $=V.firstContext;$!==null;){if($.context===u){if(v.tag===1){$=dr(-1,a&-a),$.tag=2;var pe=v.updateQueue;if(pe!==null){pe=pe.shared;var Pe=pe.pending;Pe===null?$.next=$:($.next=Pe.next,Pe.next=$),pe.pending=$}}v.lanes|=a,$=v.alternate,$!==null&&($.lanes|=a),uu(v.return,a,i),V.lanes|=a;break}$=$.next}}else if(v.tag===10)R=v.type===i.type?null:v.child;else if(v.tag===18){if(R=v.return,R===null)throw Error(t(341));R.lanes|=a,V=R.alternate,V!==null&&(V.lanes|=a),uu(R,a,i),R=v.sibling}else R=v.child;if(R!==null)R.return=v;else for(R=v;R!==null;){if(R===i){R=null;break}if(v=R.sibling,v!==null){v.return=R.return,R=v;break}R=R.return}v=R}qn(n,i,p.children,a),i=i.child}return i;case 9:return p=i.type,u=i.pendingProps.children,Xs(i,a),p=Ai(p),u=u(p),i.flags|=1,qn(n,i,u,a),i.child;case 14:return u=i.type,p=Ui(u,i.pendingProps),p=Ui(u.type,p),tm(n,i,u,p,a);case 15:return nm(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ui(u,p),ll(n,i),i.tag=1,ni(u)?(n=!0,Wa(i)):n=!1,Xs(i,a),Kp(i,u,p),Tu(i,u,p,a),Pu(null,i,u,!0,n,a);case 19:return um(n,i,a);case 22:return im(n,i,a)}throw Error(t(156,i.tag))};function Um(n,i){return ar(n,i)}function t_(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ti(n,i,a,u){return new t_(n,i,a,u)}function Qu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function n_(n){if(typeof n=="function")return Qu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===F)return 11;if(n===j)return 14}return 2}function Gr(n,i){var a=n.alternate;return a===null?(a=Ti(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function _l(n,i,a,u,p,v){var R=2;if(u=n,typeof n=="function")Qu(n)&&(R=1);else if(typeof n=="string")R=5;else e:switch(n){case O:return ds(a.children,p,v,i);case E:R=8,p|=8;break;case U:return n=Ti(12,a,i,p|2),n.elementType=U,n.lanes=v,n;case W:return n=Ti(13,a,i,p),n.elementType=W,n.lanes=v,n;case ee:return n=Ti(19,a,i,p),n.elementType=ee,n.lanes=v,n;case G:return yl(a,p,v,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case q:R=10;break e;case H:R=9;break e;case F:R=11;break e;case j:R=14;break e;case re:R=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ti(R,a,i,p),i.elementType=n,i.type=u,i.lanes=v,i}function ds(n,i,a,u){return n=Ti(7,n,u,i),n.lanes=a,n}function yl(n,i,a,u){return n=Ti(22,n,u,i),n.elementType=G,n.lanes=a,n.stateNode={isHidden:!1},n}function Ju(n,i,a){return n=Ti(6,n,null,i),n.lanes=a,n}function Zu(n,i,a){return i=Ti(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function i_(n,i,a,u,p){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fn(0),this.expirationTimes=fn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fn(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function $u(n,i,a,u,p,v,R,V,$){return n=new i_(n,i,a,V,$),i===1?(i=1,v===!0&&(i|=8)):i=0,v=Ti(3,null,null,i),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},hu(v),n}function r_(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Nm(n){if(!n)return Ur;n=n._reactInternals;e:{if(Xn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ni(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ni(a))return cp(n,a,i)}return i}function Fm(n,i,a,u,p,v,R,V,$){return n=$u(a,u,!0,n,p,v,R,V,$),n.context=Nm(null),a=n.current,u=Yn(),p=Hr(a),v=dr(u,p),v.callback=i??null,kr(a,v,p),n.current.lanes=p,Et(n,p,u),si(n,u),n}function Ml(n,i,a,u){var p=i.current,v=Yn(),R=Hr(p);return a=Nm(a),i.context===null?i.context=a:i.pendingContext=a,i=dr(v,R),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=kr(p,i,R),n!==null&&(ki(n,p,R,v),Za(n,p,R)),R}function Sl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function km(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function ef(n,i){km(n,i),(n=n.alternate)&&km(n,i)}function s_(){return null}var Om=typeof reportError=="function"?reportError:function(n){console.error(n)};function tf(n){this._internalRoot=n}Al.prototype.render=tf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ml(n,i,null,null)},Al.prototype.unmount=tf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;us(function(){Ml(null,n,null,null)}),i[lr]=null}};function Al(n){this._internalRoot=n}Al.prototype.unstable_scheduleHydration=function(n){if(n){var i=zt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Rr.length&&i!==0&&i<Rr[a].priority;a++);Rr.splice(a,0,n),a===0&&Ed(n)}};function nf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function El(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Bm(){}function o_(n,i,a,u,p){if(p){if(typeof u=="function"){var v=u;u=function(){var pe=Sl(R);v.call(pe)}}var R=Fm(i,u,n,0,null,!1,!1,"",Bm);return n._reactRootContainer=R,n[lr]=R.current,Ho(n.nodeType===8?n.parentNode:n),us(),R}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var V=u;u=function(){var pe=Sl($);V.call(pe)}}var $=$u(n,0,!1,null,null,!1,!1,"",Bm);return n._reactRootContainer=$,n[lr]=$.current,Ho(n.nodeType===8?n.parentNode:n),us(function(){Ml(i,$,a,u)}),$}function wl(n,i,a,u,p){var v=a._reactRootContainer;if(v){var R=v;if(typeof p=="function"){var V=p;p=function(){var $=Sl(R);V.call($)}}Ml(i,R,n,p)}else R=o_(a,i,n,p,u);return Sl(R)}Bt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=St(i.pendingLanes);a!==0&&(Rn(i,a|1),si(i,Dt()),(Ht&6)===0&&(Qs=Dt()+500,Nr()))}break;case 13:us(function(){var u=hr(n,1);if(u!==null){var p=Yn();ki(u,n,1,p)}}),ef(n,1)}},qt=function(n){if(n.tag===13){var i=hr(n,134217728);if(i!==null){var a=Yn();ki(i,n,134217728,a)}ef(n,134217728)}},Kn=function(n){if(n.tag===13){var i=Hr(n),a=hr(n,i);if(a!==null){var u=Yn();ki(a,n,i,u)}ef(n,i)}},zt=function(){return Ct},ei=function(n,i){var a=Ct;try{return Ct=n,i()}finally{Ct=a}},ut=function(n,i,a){switch(i){case"input":if(rt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var p=Va(u);if(!p)throw Error(t(90));Ye(u),rt(u,p)}}}break;case"textarea":ke(n,a);break;case"select":i=a.value,i!=null&&At(n,!!a.multiple,i,!1)}},Fe=Ku,Te=us;var a_={usingClientEntryPoint:!1,Events:[Wo,ks,Va,ye,Xe,Ku]},ra={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},l_={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=_i(n),n===null?null:n.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||s_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{fe=Tl.inject(l_),Be=Tl}catch{}}return oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a_,oi.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nf(i))throw Error(t(200));return r_(n,i,null,a)},oi.createRoot=function(n,i){if(!nf(n))throw Error(t(299));var a=!1,u="",p=Om;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=$u(n,1,!1,null,null,a,!1,u,p),n[lr]=i.current,Ho(n.nodeType===8?n.parentNode:n),new tf(i)},oi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=_i(i),n=n===null?null:n.stateNode,n},oi.flushSync=function(n){return us(n)},oi.hydrate=function(n,i,a){if(!El(i))throw Error(t(200));return wl(null,n,i,!0,a)},oi.hydrateRoot=function(n,i,a){if(!nf(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,p=!1,v="",R=Om;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(R=a.onRecoverableError)),i=Fm(i,null,n,1,a??null,p,!1,v,R),n[lr]=i.current,Ho(n),u)for(n=0;n<u.length;n++)a=u[n],p=a._getVersion,p=p(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,p]:i.mutableSourceEagerHydrationData.push(a,p);return new Al(i)},oi.render=function(n,i,a){if(!El(i))throw Error(t(200));return wl(null,n,i,!1,a)},oi.unmountComponentAtNode=function(n){if(!El(n))throw Error(t(40));return n._reactRootContainer?(us(function(){wl(null,null,n,!1,function(){n._reactRootContainer=null,n[lr]=null})}),!0):!1},oi.unstable_batchedUpdates=Ku,oi.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!El(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return wl(n,i,a,!1,u)},oi.version="18.3.1-next-f1338f8080-20240426",oi}var Km;function x_(){if(Km)return of.exports;Km=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),of.exports=v_(),of.exports}var qm;function __(){if(qm)return bl;qm=1;var s=x_();return bl.createRoot=s.createRoot,bl.hydrateRoot=s.hydrateRoot,bl}var y_=__();const Ym={field:{count:1400,size:1,drift:1},look:{trail:.35,grain:.5,glow:1},form:{circle:0},hands:{reach:1,clap:1},sound:{beat:1,sparks:1,bass:1,quiet:0}};function M_(s,e){let t=s;for(const r of e.split(".")){if(typeof t!="object"||t===null)return;t=t[r]}return typeof t=="number"?t:void 0}function bs(s,e){const t=structuredClone(s);for(const[r,o]of Object.entries(e)){if(!Number.isFinite(o)||M_(s,r)===void 0)continue;const l=r.split("."),c=l.pop();let f=t;for(const d of l)f=f[d];f[c]=o}return t}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zh="184",S_=0,Qm=1,A_=2,nc=1,E_=2,va=3,ts=0,li=1,Gi=2,Sr=0,xo=1,Jm=2,Zm=3,$m=4,w_=5,ys=100,T_=101,b_=102,C_=103,R_=104,P_=200,L_=201,I_=202,D_=203,nh=204,ih=205,U_=206,N_=207,F_=208,k_=209,O_=210,B_=211,z_=212,H_=213,V_=214,rh=0,sh=1,oh=2,yo=3,ah=4,lh=5,ch=6,uh=7,kg=0,G_=1,W_=2,ir=0,Og=1,Bg=2,zg=3,Hg=4,Vg=5,Gg=6,Wg=7,Xg=300,Es=301,Mo=302,cf=303,uf=304,Ac=306,fc=1e3,Mr=1001,fh=1002,_n=1003,X_=1004,Cl=1005,bn=1006,ff=1007,Ss=1008,Ri=1009,jg=1010,Kg=1011,Sa=1012,$h=1013,or=1014,Xi=1015,Er=1016,ed=1017,td=1018,Aa=1020,qg=35902,Yg=35899,Qg=1021,Jg=1022,Pi=1023,wr=1026,As=1027,Zg=1028,nd=1029,ws=1030,id=1031,rd=1033,ic=33776,rc=33777,sc=33778,oc=33779,hh=35840,dh=35841,ph=35842,mh=35843,gh=36196,vh=37492,xh=37496,_h=37488,yh=37489,hc=37490,Mh=37491,Sh=37808,Ah=37809,Eh=37810,wh=37811,Th=37812,bh=37813,Ch=37814,Rh=37815,Ph=37816,Lh=37817,Ih=37818,Dh=37819,Uh=37820,Nh=37821,Fh=36492,kh=36494,Oh=36495,Bh=36283,zh=36284,dc=36285,Hh=36286,j_=3200,e0=0,K_=1,$r="",Ci="srgb",pc="srgb-linear",mc="linear",Yt="srgb",Zs=7680,t0=519,q_=512,Y_=513,Q_=514,sd=515,J_=516,Z_=517,od=518,$_=519,n0=35044,i0=35048,r0="300 es",nr=2e3,gc=2001;function ey(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function vc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ty(){const s=vc("canvas");return s.style.display="block",s}const s0={};function o0(...s){const e="THREE."+s.shift();console.log(e,...s)}function $g(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function xt(...s){s=$g(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Gt(...s){s=$g(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Vh(...s){const e=s.join(" ");e in s0||(s0[e]=!0,xt(...s))}function ny(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const iy={[rh]:sh,[oh]:ch,[ah]:uh,[yo]:lh,[sh]:rh,[ch]:oh,[uh]:ah,[lh]:yo};class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let a0=1234567;const ya=Math.PI/180,Ea=180/Math.PI;function Eo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[t&63|128]+Hn[t>>8&255]+"-"+Hn[t>>16&255]+Hn[t>>24&255]+Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]).toLowerCase()}function Lt(s,e,t){return Math.max(e,Math.min(t,s))}function ad(s,e){return(s%e+e)%e}function ry(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function sy(s,e,t){return s!==e?(t-s)/(e-s):0}function Ma(s,e,t){return(1-t)*s+t*e}function oy(s,e,t,r){return Ma(s,e,1-Math.exp(-t*r))}function ay(s,e=1){return e-Math.abs(ad(s,e*2)-e)}function ly(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function cy(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function uy(s,e){return s+Math.floor(Math.random()*(e-s+1))}function fy(s,e){return s+Math.random()*(e-s)}function hy(s){return s*(.5-Math.random())}function dy(s){s!==void 0&&(a0=s);let e=a0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function py(s){return s*ya}function my(s){return s*Ea}function gy(s){return(s&s-1)===0&&s!==0}function vy(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function xy(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _y(s,e,t,r,o){const l=Math.cos,c=Math.sin,f=l(t/2),d=c(t/2),h=l((e+r)/2),g=c((e+r)/2),x=l((e-r)/2),m=c((e-r)/2),_=l((r-e)/2),A=c((r-e)/2);switch(o){case"XYX":s.set(f*g,d*x,d*m,f*h);break;case"YZY":s.set(d*m,f*g,d*x,f*h);break;case"ZXZ":s.set(d*x,d*m,f*g,f*h);break;case"XZX":s.set(f*g,d*A,d*_,f*h);break;case"YXY":s.set(d*_,f*g,d*A,f*h);break;case"ZYZ":s.set(d*A,d*_,f*g,f*h);break;default:xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function po(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ac={DEG2RAD:ya,RAD2DEG:Ea,generateUUID:Eo,clamp:Lt,euclideanModulo:ad,mapLinear:ry,inverseLerp:sy,lerp:Ma,damp:oy,pingpong:ay,smoothstep:ly,smootherstep:cy,randInt:uy,randFloat:fy,randFloatSpread:hy,seededRandom:dy,degToRad:py,radToDeg:my,isPowerOfTwo:gy,ceilPowerOfTwo:vy,floorPowerOfTwo:xy,setQuaternionFromProperEuler:_y,normalize:Qn,denormalize:po},xd=class xd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Lt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Lt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xd.prototype.isVector2=!0;let It=xd;class rr{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let d=r[o+0],h=r[o+1],g=r[o+2],x=r[o+3],m=l[c+0],_=l[c+1],A=l[c+2],C=l[c+3];if(x!==C||d!==m||h!==_||g!==A){let y=d*m+h*_+g*A+x*C;y<0&&(m=-m,_=-_,A=-A,C=-C,y=-y);let S=1-f;if(y<.9995){const T=Math.acos(y),L=Math.sin(T);S=Math.sin(S*T)/L,f=Math.sin(f*T)/L,d=d*S+m*f,h=h*S+_*f,g=g*S+A*f,x=x*S+C*f}else{d=d*S+m*f,h=h*S+_*f,g=g*S+A*f,x=x*S+C*f;const T=1/Math.sqrt(d*d+h*h+g*g+x*x);d*=T,h*=T,g*=T,x*=T}}e[t]=d,e[t+1]=h,e[t+2]=g,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],d=r[o+1],h=r[o+2],g=r[o+3],x=l[c],m=l[c+1],_=l[c+2],A=l[c+3];return e[t]=f*A+g*x+d*_-h*m,e[t+1]=d*A+g*m+h*x-f*_,e[t+2]=h*A+g*_+f*m-d*x,e[t+3]=g*A-f*x-d*m-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(r/2),g=f(o/2),x=f(l/2),m=d(r/2),_=d(o/2),A=d(l/2);switch(c){case"XYZ":this._x=m*g*x+h*_*A,this._y=h*_*x-m*g*A,this._z=h*g*A+m*_*x,this._w=h*g*x-m*_*A;break;case"YXZ":this._x=m*g*x+h*_*A,this._y=h*_*x-m*g*A,this._z=h*g*A-m*_*x,this._w=h*g*x+m*_*A;break;case"ZXY":this._x=m*g*x-h*_*A,this._y=h*_*x+m*g*A,this._z=h*g*A+m*_*x,this._w=h*g*x-m*_*A;break;case"ZYX":this._x=m*g*x-h*_*A,this._y=h*_*x+m*g*A,this._z=h*g*A-m*_*x,this._w=h*g*x+m*_*A;break;case"YZX":this._x=m*g*x+h*_*A,this._y=h*_*x+m*g*A,this._z=h*g*A-m*_*x,this._w=h*g*x-m*_*A;break;case"XZY":this._x=m*g*x-h*_*A,this._y=h*_*x-m*g*A,this._z=h*g*A+m*_*x,this._w=h*g*x+m*_*A;break;default:xt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],d=t[9],h=t[2],g=t[6],x=t[10],m=r+f+x;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(g-d)*_,this._y=(l-h)*_,this._z=(c-o)*_}else if(r>f&&r>x){const _=2*Math.sqrt(1+r-f-x);this._w=(g-d)/_,this._x=.25*_,this._y=(o+c)/_,this._z=(l+h)/_}else if(f>x){const _=2*Math.sqrt(1+f-r-x);this._w=(l-h)/_,this._x=(o+c)/_,this._y=.25*_,this._z=(d+g)/_}else{const _=2*Math.sqrt(1+x-r-f);this._w=(c-o)/_,this._x=(l+h)/_,this._y=(d+g)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,d=t._y,h=t._z,g=t._w;return this._x=r*g+c*f+o*h-l*d,this._y=o*g+c*d+l*f-r*h,this._z=l*g+c*h+r*d-o*f,this._w=c*g-r*f-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,c=-c,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);d=Math.sin(d*h)/g,t=Math.sin(t*h)/g,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _d=class _d{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(l0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(l0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*o-f*r),g=2*(f*t-l*o),x=2*(l*r-c*t);return this.x=t+d*h+c*x-f*g,this.y=r+d*g+f*h-l*x,this.z=o+d*x+l*g-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Lt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*c-r*d,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return hf.copy(this).projectOnVector(e),this.sub(hf)}reflect(e){return this.sub(hf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Lt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_d.prototype.isVector3=!0;let Z=_d;const hf=new Z,l0=new rr,yd=class yd{constructor(e,t,r,o,l,c,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,h)}set(e,t,r,o,l,c,f,d,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=l,g[5]=d,g[6]=r,g[7]=c,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],d=r[6],h=r[1],g=r[4],x=r[7],m=r[2],_=r[5],A=r[8],C=o[0],y=o[3],S=o[6],T=o[1],L=o[4],P=o[7],z=o[2],D=o[5],O=o[8];return l[0]=c*C+f*T+d*z,l[3]=c*y+f*L+d*D,l[6]=c*S+f*P+d*O,l[1]=h*C+g*T+x*z,l[4]=h*y+g*L+x*D,l[7]=h*S+g*P+x*O,l[2]=m*C+_*T+A*z,l[5]=m*y+_*L+A*D,l[8]=m*S+_*P+A*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8];return t*c*g-t*f*h-r*l*g+r*f*d+o*l*h-o*c*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8],x=g*c-f*h,m=f*d-g*l,_=h*l-c*d,A=t*x+r*m+o*_;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=x*C,e[1]=(o*h-g*r)*C,e[2]=(f*r-o*c)*C,e[3]=m*C,e[4]=(g*t-o*d)*C,e[5]=(o*l-f*t)*C,e[6]=_*C,e[7]=(r*d-h*t)*C,e[8]=(c*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*c+h*f)+c+e,-o*h,o*d,-o*(-h*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(df.makeScale(e,t)),this}rotate(e){return this.premultiply(df.makeRotation(-e)),this}translate(e,t){return this.premultiply(df.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};yd.prototype.isMatrix3=!0;let wt=yd;const df=new wt,c0=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),u0=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yy(){const s={enabled:!0,workingColorSpace:pc,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Yt&&(o.r=Ar(o.r),o.g=Ar(o.g),o.b=Ar(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Yt&&(o.r=_o(o.r),o.g=_o(o.g),o.b=_o(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===$r?mc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Vh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Vh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[pc]:{primaries:e,whitePoint:r,transfer:mc,toXYZ:c0,fromXYZ:u0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ci},outputColorSpaceConfig:{drawingBufferColorSpace:Ci}},[Ci]:{primaries:e,whitePoint:r,transfer:Yt,toXYZ:c0,fromXYZ:u0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ci}}}),s}const Ft=yy();function Ar(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _o(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let $s;class My{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{$s===void 0&&($s=vc("canvas")),$s.width=e.width,$s.height=e.height;const o=$s.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=$s}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Ar(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ar(t[r]/255)*255):t[r]=Ar(t[r]);return{data:t,width:e.width,height:e.height}}else return xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sy=0;class ld{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Eo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(pf(o[c].image)):l.push(pf(o[c]))}else l=pf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function pf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?My.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(xt("Texture: Unable to serialize Texture."),{})}let Ay=0;const mf=new Z;class Wn extends Cs{constructor(e=Wn.DEFAULT_IMAGE,t=Wn.DEFAULT_MAPPING,r=Mr,o=Mr,l=bn,c=Ss,f=Pi,d=Ri,h=Wn.DEFAULT_ANISOTROPY,g=$r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Eo(),this.name="",this.source=new ld(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mf).x}get height(){return this.source.getSize(mf).y}get depth(){return this.source.getSize(mf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){xt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){xt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fc:e.x=e.x-Math.floor(e.x);break;case Mr:e.x=e.x<0?0:1;break;case fh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fc:e.y=e.y-Math.floor(e.y);break;case Mr:e.y=e.y<0?0:1;break;case fh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Xg;Wn.DEFAULT_ANISOTROPY=1;const Md=class Md{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],g=d[4],x=d[8],m=d[1],_=d[5],A=d[9],C=d[2],y=d[6],S=d[10];if(Math.abs(g-m)<.01&&Math.abs(x-C)<.01&&Math.abs(A-y)<.01){if(Math.abs(g+m)<.1&&Math.abs(x+C)<.1&&Math.abs(A+y)<.1&&Math.abs(h+_+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,P=(_+1)/2,z=(S+1)/2,D=(g+m)/4,O=(x+C)/4,E=(A+y)/4;return L>P&&L>z?L<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(L),o=D/r,l=O/r):P>z?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=D/o,l=E/o):z<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(z),r=O/l,o=E/l),this.set(r,o,l,t),this}let T=Math.sqrt((y-A)*(y-A)+(x-C)*(x-C)+(m-g)*(m-g));return Math.abs(T)<.001&&(T=1),this.x=(y-A)/T,this.y=(x-C)/T,this.z=(m-g)/T,this.w=Math.acos((h+_+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this.w=Lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this.w=Lt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Lt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Md.prototype.isVector4=!0;let on=Md;class Ey extends Cs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Wn(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new ld(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sr extends Ey{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class ev extends Wn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=_n,this.minFilter=_n,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wy extends Wn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=_n,this.minFilter=_n,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sc=class Sc{constructor(e,t,r,o,l,c,f,d,h,g,x,m,_,A,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,h,g,x,m,_,A,C,y)}set(e,t,r,o,l,c,f,d,h,g,x,m,_,A,C,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=l,S[5]=c,S[9]=f,S[13]=d,S[2]=h,S[6]=g,S[10]=x,S[14]=m,S[3]=_,S[7]=A,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/eo.setFromMatrixColumn(e,0).length(),l=1/eo.setFromMatrixColumn(e,1).length(),c=1/eo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),g=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const m=c*g,_=c*x,A=f*g,C=f*x;t[0]=d*g,t[4]=-d*x,t[8]=h,t[1]=_+A*h,t[5]=m-C*h,t[9]=-f*d,t[2]=C-m*h,t[6]=A+_*h,t[10]=c*d}else if(e.order==="YXZ"){const m=d*g,_=d*x,A=h*g,C=h*x;t[0]=m+C*f,t[4]=A*f-_,t[8]=c*h,t[1]=c*x,t[5]=c*g,t[9]=-f,t[2]=_*f-A,t[6]=C+m*f,t[10]=c*d}else if(e.order==="ZXY"){const m=d*g,_=d*x,A=h*g,C=h*x;t[0]=m-C*f,t[4]=-c*x,t[8]=A+_*f,t[1]=_+A*f,t[5]=c*g,t[9]=C-m*f,t[2]=-c*h,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const m=c*g,_=c*x,A=f*g,C=f*x;t[0]=d*g,t[4]=A*h-_,t[8]=m*h+C,t[1]=d*x,t[5]=C*h+m,t[9]=_*h-A,t[2]=-h,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const m=c*d,_=c*h,A=f*d,C=f*h;t[0]=d*g,t[4]=C-m*x,t[8]=A*x+_,t[1]=x,t[5]=c*g,t[9]=-f*g,t[2]=-h*g,t[6]=_*x+A,t[10]=m-C*x}else if(e.order==="XZY"){const m=c*d,_=c*h,A=f*d,C=f*h;t[0]=d*g,t[4]=-x,t[8]=h*g,t[1]=m*x+C,t[5]=c*g,t[9]=_*x-A,t[2]=A*x-_,t[6]=f*g,t[10]=C*x+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ty,e,by)}lookAt(e,t,r){const o=this.elements;return pi.subVectors(e,t),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),Xr.crossVectors(r,pi),Xr.lengthSq()===0&&(Math.abs(r.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),Xr.crossVectors(r,pi)),Xr.normalize(),Rl.crossVectors(pi,Xr),o[0]=Xr.x,o[4]=Rl.x,o[8]=pi.x,o[1]=Xr.y,o[5]=Rl.y,o[9]=pi.y,o[2]=Xr.z,o[6]=Rl.z,o[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],d=r[8],h=r[12],g=r[1],x=r[5],m=r[9],_=r[13],A=r[2],C=r[6],y=r[10],S=r[14],T=r[3],L=r[7],P=r[11],z=r[15],D=o[0],O=o[4],E=o[8],U=o[12],q=o[1],H=o[5],F=o[9],W=o[13],ee=o[2],j=o[6],re=o[10],G=o[14],X=o[3],k=o[7],ie=o[11],N=o[15];return l[0]=c*D+f*q+d*ee+h*X,l[4]=c*O+f*H+d*j+h*k,l[8]=c*E+f*F+d*re+h*ie,l[12]=c*U+f*W+d*G+h*N,l[1]=g*D+x*q+m*ee+_*X,l[5]=g*O+x*H+m*j+_*k,l[9]=g*E+x*F+m*re+_*ie,l[13]=g*U+x*W+m*G+_*N,l[2]=A*D+C*q+y*ee+S*X,l[6]=A*O+C*H+y*j+S*k,l[10]=A*E+C*F+y*re+S*ie,l[14]=A*U+C*W+y*G+S*N,l[3]=T*D+L*q+P*ee+z*X,l[7]=T*O+L*H+P*j+z*k,l[11]=T*E+L*F+P*re+z*ie,l[15]=T*U+L*W+P*G+z*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],d=e[9],h=e[13],g=e[2],x=e[6],m=e[10],_=e[14],A=e[3],C=e[7],y=e[11],S=e[15],T=d*_-h*m,L=f*_-h*x,P=f*m-d*x,z=c*_-h*g,D=c*m-d*g,O=c*x-f*g;return t*(C*T-y*L+S*P)-r*(A*T-y*z+S*D)+o*(A*L-C*z+S*O)-l*(A*P-C*D+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8],x=e[9],m=e[10],_=e[11],A=e[12],C=e[13],y=e[14],S=e[15],T=t*f-r*c,L=t*d-o*c,P=t*h-l*c,z=r*d-o*f,D=r*h-l*f,O=o*h-l*d,E=g*C-x*A,U=g*y-m*A,q=g*S-_*A,H=x*y-m*C,F=x*S-_*C,W=m*S-_*y,ee=T*W-L*F+P*H+z*q-D*U+O*E;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/ee;return e[0]=(f*W-d*F+h*H)*j,e[1]=(o*F-r*W-l*H)*j,e[2]=(C*O-y*D+S*z)*j,e[3]=(m*D-x*O-_*z)*j,e[4]=(d*q-c*W-h*U)*j,e[5]=(t*W-o*q+l*U)*j,e[6]=(y*P-A*O-S*L)*j,e[7]=(g*O-m*P+_*L)*j,e[8]=(c*F-f*q+h*E)*j,e[9]=(r*q-t*F-l*E)*j,e[10]=(A*D-C*P+S*T)*j,e[11]=(x*P-g*D-_*T)*j,e[12]=(f*U-c*H-d*E)*j,e[13]=(t*H-r*U+o*E)*j,e[14]=(C*L-A*z-y*T)*j,e[15]=(g*z-x*L+m*T)*j,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,d=e.z,h=l*c,g=l*f;return this.set(h*c+r,h*f-o*d,h*d+o*f,0,h*f+o*d,g*f+r,g*d-o*c,0,h*d-o*f,g*d+o*c,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,h=l+l,g=c+c,x=f+f,m=l*h,_=l*g,A=l*x,C=c*g,y=c*x,S=f*x,T=d*h,L=d*g,P=d*x,z=r.x,D=r.y,O=r.z;return o[0]=(1-(C+S))*z,o[1]=(_+P)*z,o[2]=(A-L)*z,o[3]=0,o[4]=(_-P)*D,o[5]=(1-(m+S))*D,o[6]=(y+T)*D,o[7]=0,o[8]=(A+L)*O,o[9]=(y-T)*O,o[10]=(1-(m+C))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let c=eo.set(o[0],o[1],o[2]).length();const f=eo.set(o[4],o[5],o[6]).length(),d=eo.set(o[8],o[9],o[10]).length();l<0&&(c=-c),Oi.copy(this);const h=1/c,g=1/f,x=1/d;return Oi.elements[0]*=h,Oi.elements[1]*=h,Oi.elements[2]*=h,Oi.elements[4]*=g,Oi.elements[5]*=g,Oi.elements[6]*=g,Oi.elements[8]*=x,Oi.elements[9]*=x,Oi.elements[10]*=x,t.setFromRotationMatrix(Oi),r.x=c,r.y=f,r.z=d,this}makePerspective(e,t,r,o,l,c,f=nr,d=!1){const h=this.elements,g=2*l/(t-e),x=2*l/(r-o),m=(t+e)/(t-e),_=(r+o)/(r-o);let A,C;if(d)A=l/(c-l),C=c*l/(c-l);else if(f===nr)A=-(c+l)/(c-l),C=-2*c*l/(c-l);else if(f===gc)A=-c/(c-l),C=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=x,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=A,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=nr,d=!1){const h=this.elements,g=2/(t-e),x=2/(r-o),m=-(t+e)/(t-e),_=-(r+o)/(r-o);let A,C;if(d)A=1/(c-l),C=c/(c-l);else if(f===nr)A=-2/(c-l),C=-(c+l)/(c-l);else if(f===gc)A=-1/(c-l),C=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=x,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=A,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Sc.prototype.isMatrix4=!0;let un=Sc;const eo=new Z,Oi=new un,Ty=new Z(0,0,0),by=new Z(1,1,1),Xr=new Z,Rl=new Z,pi=new Z,f0=new un,h0=new rr;class Ts{constructor(e=0,t=0,r=0,o=Ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],d=o[1],h=o[5],g=o[9],x=o[2],m=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(Lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,_),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-x,_),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Lt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,_));break;case"XZY":this._z=Math.asin(-Lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,_),this._y=0);break;default:xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return f0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(f0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return h0.setFromEuler(this),this.setFromQuaternion(h0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ts.DEFAULT_ORDER="XYZ";class tv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cy=0;const d0=new Z,to=new rr,gr=new un,Pl=new Z,oa=new Z,Ry=new Z,Py=new rr,p0=new Z(1,0,0),m0=new Z(0,1,0),g0=new Z(0,0,1),v0={type:"added"},Ly={type:"removed"},no={type:"childadded",child:null},gf={type:"childremoved",child:null};class Zn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zn.DEFAULT_UP.clone();const e=new Z,t=new Ts,r=new rr,o=new Z(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new un},normalMatrix:{value:new wt}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=Zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(p0,e)}rotateY(e){return this.rotateOnAxis(m0,e)}rotateZ(e){return this.rotateOnAxis(g0,e)}translateOnAxis(e,t){return d0.copy(e).applyQuaternion(this.quaternion),this.position.add(d0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(p0,e)}translateY(e){return this.translateOnAxis(m0,e)}translateZ(e){return this.translateOnAxis(g0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Pl.copy(e):Pl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(oa,Pl,this.up):gr.lookAt(Pl,oa,this.up),this.quaternion.setFromRotationMatrix(gr),o&&(gr.extractRotation(o.matrixWorld),to.setFromRotationMatrix(gr),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(v0),no.child=e,this.dispatchEvent(no),no.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ly),gf.child=e,this.dispatchEvent(gf),gf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(gr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(v0),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,Ry),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,Py,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,g=d.length;h<g;h++){const x=d[h];l(e.shapes,x)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),g=c(e.images),x=c(e.shapes),m=c(e.skeletons),_=c(e.animations),A=c(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),m.length>0&&(r.skeletons=m),_.length>0&&(r.animations=_),A.length>0&&(r.nodes=A)}return r.object=o,r;function c(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Zn.DEFAULT_UP=new Z(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ji extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iy={type:"move"};class vf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const C of e.hand.values()){const y=t.getJointPose(C,r),S=this._getHandJoint(h,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],m=g.position.distanceTo(x.position),_=.02,A=.005;h.inputState.pinching&&m>_+A?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=_-A&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Iy)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ji;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jr={h:0,s:0,l:0},Ll={h:0,s:0,l:0};function xf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Wt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ft.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Ft.workingColorSpace){if(e=ad(e,1),t=Lt(t,0,1),r=Lt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=xf(c,l,e+1/3),this.g=xf(c,l,e),this.b=xf(c,l,e-1/3)}return Ft.colorSpaceToWorking(this,o),this}setStyle(e,t=Ci){function r(l){l!==void 0&&parseFloat(l)<1&&xt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:xt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);xt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ci){const r=nv[e.toLowerCase()];return r!==void 0?this.setHex(r,t):xt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}copyLinearToSRGB(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ci){return Ft.workingToColorSpace(Vn.copy(this),e),Math.round(Lt(Vn.r*255,0,255))*65536+Math.round(Lt(Vn.g*255,0,255))*256+Math.round(Lt(Vn.b*255,0,255))}getHexString(e=Ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.workingToColorSpace(Vn.copy(this),t);const r=Vn.r,o=Vn.g,l=Vn.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let d,h;const g=(f+c)/2;if(f===c)d=0,h=0;else{const x=c-f;switch(h=g<=.5?x/(c+f):x/(2-c-f),c){case r:d=(o-l)/x+(o<l?6:0);break;case o:d=(l-r)/x+2;break;case l:d=(r-o)/x+4;break}d/=6}return e.h=d,e.s=h,e.l=g,e}getRGB(e,t=Ft.workingColorSpace){return Ft.workingToColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=Ci){Ft.workingToColorSpace(Vn.copy(this),e);const t=Vn.r,r=Vn.g,o=Vn.b;return e!==Ci?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(jr),this.setHSL(jr.h+e,jr.s+t,jr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(jr),e.getHSL(Ll);const r=Ma(jr.h,Ll.h,t),o=Ma(jr.s,Ll.s,t),l=Ma(jr.l,Ll.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new Wt;Wt.NAMES=nv;class Ec extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ts,this.environmentIntensity=1,this.environmentRotation=new Ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bi=new Z,vr=new Z,_f=new Z,xr=new Z,io=new Z,ro=new Z,x0=new Z,yf=new Z,Mf=new Z,Sf=new Z,Af=new on,Ef=new on,wf=new on;class Wi{constructor(e=new Z,t=new Z,r=new Z){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Bi.subVectors(e,t),o.cross(Bi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Bi.subVectors(o,t),vr.subVectors(r,t),_f.subVectors(e,t);const c=Bi.dot(Bi),f=Bi.dot(vr),d=Bi.dot(_f),h=vr.dot(vr),g=vr.dot(_f),x=c*h-f*f;if(x===0)return l.set(0,0,0),null;const m=1/x,_=(h*d-f*g)*m,A=(c*g-f*d)*m;return l.set(1-_-A,A,_)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,xr)===null?!1:xr.x>=0&&xr.y>=0&&xr.x+xr.y<=1}static getInterpolation(e,t,r,o,l,c,f,d){return this.getBarycoord(e,t,r,o,xr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,xr.x),d.addScaledVector(c,xr.y),d.addScaledVector(f,xr.z),d)}static getInterpolatedAttribute(e,t,r,o,l,c){return Af.setScalar(0),Ef.setScalar(0),wf.setScalar(0),Af.fromBufferAttribute(e,t),Ef.fromBufferAttribute(e,r),wf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Af,l.x),c.addScaledVector(Ef,l.y),c.addScaledVector(wf,l.z),c}static isFrontFacing(e,t,r,o){return Bi.subVectors(r,t),vr.subVectors(e,t),Bi.cross(vr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),Bi.cross(vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Wi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;io.subVectors(o,r),ro.subVectors(l,r),yf.subVectors(e,r);const d=io.dot(yf),h=ro.dot(yf);if(d<=0&&h<=0)return t.copy(r);Mf.subVectors(e,o);const g=io.dot(Mf),x=ro.dot(Mf);if(g>=0&&x<=g)return t.copy(o);const m=d*x-g*h;if(m<=0&&d>=0&&g<=0)return c=d/(d-g),t.copy(r).addScaledVector(io,c);Sf.subVectors(e,l);const _=io.dot(Sf),A=ro.dot(Sf);if(A>=0&&_<=A)return t.copy(l);const C=_*h-d*A;if(C<=0&&h>=0&&A<=0)return f=h/(h-A),t.copy(r).addScaledVector(ro,f);const y=g*A-_*x;if(y<=0&&x-g>=0&&_-A>=0)return x0.subVectors(l,o),f=(x-g)/(x-g+(_-A)),t.copy(o).addScaledVector(x0,f);const S=1/(y+C+m);return c=C*S,f=m*S,t.copy(r).addScaledVector(io,c).addScaledVector(ro,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class wa{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,zi):zi.fromBufferAttribute(l,c),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Il.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Il.copy(r.boundingBox)),Il.applyMatrix4(e.matrixWorld),this.union(Il)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),Dl.subVectors(this.max,aa),so.subVectors(e.a,aa),oo.subVectors(e.b,aa),ao.subVectors(e.c,aa),Kr.subVectors(oo,so),qr.subVectors(ao,oo),ps.subVectors(so,ao);let t=[0,-Kr.z,Kr.y,0,-qr.z,qr.y,0,-ps.z,ps.y,Kr.z,0,-Kr.x,qr.z,0,-qr.x,ps.z,0,-ps.x,-Kr.y,Kr.x,0,-qr.y,qr.x,0,-ps.y,ps.x,0];return!Tf(t,so,oo,ao,Dl)||(t=[1,0,0,0,1,0,0,0,1],!Tf(t,so,oo,ao,Dl))?!1:(Ul.crossVectors(Kr,qr),t=[Ul.x,Ul.y,Ul.z],Tf(t,so,oo,ao,Dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _r=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],zi=new Z,Il=new wa,so=new Z,oo=new Z,ao=new Z,Kr=new Z,qr=new Z,ps=new Z,aa=new Z,Dl=new Z,Ul=new Z,ms=new Z;function Tf(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){ms.fromArray(s,l);const f=o.x*Math.abs(ms.x)+o.y*Math.abs(ms.y)+o.z*Math.abs(ms.z),d=e.dot(ms),h=t.dot(ms),g=r.dot(ms);if(Math.max(-Math.max(d,h,g),Math.min(d,h,g))>f)return!1}return!0}const mn=new Z,Nl=new It;let Dy=0;class Vt extends Cs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=n0,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Nl.fromBufferAttribute(this,t),Nl.applyMatrix3(e),this.setXY(t,Nl.x,Nl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=po(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Qn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=po(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=po(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=po(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=po(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),r=Qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),r=Qn(r,this.array),o=Qn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),r=Qn(r,this.array),o=Qn(o,this.array),l=Qn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==n0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class iv extends Vt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class rv extends Vt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Dn extends Vt{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Uy=new wa,la=new Z,bf=new Z;class wo{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Uy.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const t=la.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(la,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(bf)),this.expandByPoint(la.copy(e.center).sub(bf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ny=0;const bi=new un,Cf=new Zn,lo=new Z,mi=new wa,ca=new wa,Tn=new Z;class dn extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ey(e)?rv:iv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new wt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,r){return bi.makeTranslation(e,t,r),this.applyMatrix4(bi),this}scale(e,t,r){return bi.makeScale(e,t,r),this.applyMatrix4(bi),this}lookAt(e){return Cf.lookAt(e),Cf.updateMatrix(),this.applyMatrix4(Cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Dn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];mi.setFromBufferAttribute(l),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];ca.setFromBufferAttribute(f),this.morphTargetsRelative?(Tn.addVectors(mi.min,ca.min),mi.expandByPoint(Tn),Tn.addVectors(mi.max,ca.max),mi.expandByPoint(Tn)):(mi.expandByPoint(ca.min),mi.expandByPoint(ca.max))}mi.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)Tn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Tn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)Tn.fromBufferAttribute(f,h),d&&(lo.fromBufferAttribute(e,h),Tn.add(lo)),o=Math.max(o,r.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let E=0;E<r.count;E++)f[E]=new Z,d[E]=new Z;const h=new Z,g=new Z,x=new Z,m=new It,_=new It,A=new It,C=new Z,y=new Z;function S(E,U,q){h.fromBufferAttribute(r,E),g.fromBufferAttribute(r,U),x.fromBufferAttribute(r,q),m.fromBufferAttribute(l,E),_.fromBufferAttribute(l,U),A.fromBufferAttribute(l,q),g.sub(h),x.sub(h),_.sub(m),A.sub(m);const H=1/(_.x*A.y-A.x*_.y);isFinite(H)&&(C.copy(g).multiplyScalar(A.y).addScaledVector(x,-_.y).multiplyScalar(H),y.copy(x).multiplyScalar(_.x).addScaledVector(g,-A.x).multiplyScalar(H),f[E].add(C),f[U].add(C),f[q].add(C),d[E].add(y),d[U].add(y),d[q].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let E=0,U=T.length;E<U;++E){const q=T[E],H=q.start,F=q.count;for(let W=H,ee=H+F;W<ee;W+=3)S(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const L=new Z,P=new Z,z=new Z,D=new Z;function O(E){z.fromBufferAttribute(o,E),D.copy(z);const U=f[E];L.copy(U),L.sub(z.multiplyScalar(z.dot(U))).normalize(),P.crossVectors(D,U);const H=P.dot(d[E])<0?-1:1;c.setXYZW(E,L.x,L.y,L.z,H)}for(let E=0,U=T.length;E<U;++E){const q=T[E],H=q.start,F=q.count;for(let W=H,ee=H+F;W<ee;W+=3)O(e.getX(W+0)),O(e.getX(W+1)),O(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let m=0,_=r.count;m<_;m++)r.setXYZ(m,0,0,0);const o=new Z,l=new Z,c=new Z,f=new Z,d=new Z,h=new Z,g=new Z,x=new Z;if(e)for(let m=0,_=e.count;m<_;m+=3){const A=e.getX(m+0),C=e.getX(m+1),y=e.getX(m+2);o.fromBufferAttribute(t,A),l.fromBufferAttribute(t,C),c.fromBufferAttribute(t,y),g.subVectors(c,l),x.subVectors(o,l),g.cross(x),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,C),h.fromBufferAttribute(r,y),f.add(g),d.add(g),h.add(g),r.setXYZ(A,f.x,f.y,f.z),r.setXYZ(C,d.x,d.y,d.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,_=t.count;m<_;m+=3)o.fromBufferAttribute(t,m+0),l.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),g.subVectors(c,l),x.subVectors(o,l),g.cross(x),r.setXYZ(m+0,g.x,g.y,g.z),r.setXYZ(m+1,g.x,g.y,g.z),r.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Tn.fromBufferAttribute(e,t),Tn.normalize(),e.setXYZ(t,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(f,d){const h=f.array,g=f.itemSize,x=f.normalized,m=new h.constructor(d.length*g);let _=0,A=0;for(let C=0,y=d.length;C<y;C++){f.isInterleavedBufferAttribute?_=d[C]*f.data.stride+f.offset:_=d[C]*g;for(let S=0;S<g;S++)m[A++]=h[_++]}return new Vt(m,g,x)}if(this.index===null)return xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dn,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let g=0,x=h.length;g<x;g++){const m=h[g],_=e(m,r);d.push(_)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],g=[];for(let x=0,m=h.length;x<m;x++){const _=h[x];g.push(_.toJSON(e.data))}g.length>0&&(o[d]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(t))}const l=e.morphAttributes;for(const h in l){const g=[],x=l[h];for(let m=0,_=x.length;m<_;m++)g.push(x[m].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,g=c.length;h<g;h++){const x=c[h];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Fy=0;class To extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Eo(),this.name="",this.type="Material",this.blending=xo,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){xt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){xt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(r.blending=this.blending),this.side!==ts&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==nh&&(r.blendSrc=this.blendSrc),this.blendDst!==ih&&(r.blendDst=this.blendDst),this.blendEquation!==ys&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==t0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yr=new Z,Rf=new Z,Fl=new Z,Yr=new Z,Pf=new Z,kl=new Z,Lf=new Z;class cd{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yr.copy(this.origin).addScaledVector(this.direction,t),yr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Rf.copy(e).add(t).multiplyScalar(.5),Fl.copy(t).sub(e).normalize(),Yr.copy(this.origin).sub(Rf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Fl),f=Yr.dot(this.direction),d=-Yr.dot(Fl),h=Yr.lengthSq(),g=Math.abs(1-c*c);let x,m,_,A;if(g>0)if(x=c*d-f,m=c*f-d,A=l*g,x>=0)if(m>=-A)if(m<=A){const C=1/g;x*=C,m*=C,_=x*(x+c*m+2*f)+m*(c*x+m+2*d)+h}else m=l,x=Math.max(0,-(c*m+f)),_=-x*x+m*(m+2*d)+h;else m=-l,x=Math.max(0,-(c*m+f)),_=-x*x+m*(m+2*d)+h;else m<=-A?(x=Math.max(0,-(-c*l+f)),m=x>0?-l:Math.min(Math.max(-l,-d),l),_=-x*x+m*(m+2*d)+h):m<=A?(x=0,m=Math.min(Math.max(-l,-d),l),_=m*(m+2*d)+h):(x=Math.max(0,-(c*l+f)),m=x>0?l:Math.min(Math.max(-l,-d),l),_=-x*x+m*(m+2*d)+h);else m=c>0?-l:l,x=Math.max(0,-(c*m+f)),_=-x*x+m*(m+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Rf).addScaledVector(Fl,m),_}intersectSphere(e,t){yr.subVectors(e.center,this.origin);const r=yr.dot(this.direction),o=yr.dot(yr)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,d=r+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,d;const h=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,m=this.origin;return h>=0?(r=(e.min.x-m.x)*h,o=(e.max.x-m.x)*h):(r=(e.max.x-m.x)*h,o=(e.min.x-m.x)*h),g>=0?(l=(e.min.y-m.y)*g,c=(e.max.y-m.y)*g):(l=(e.max.y-m.y)*g,c=(e.min.y-m.y)*g),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),x>=0?(f=(e.min.z-m.z)*x,d=(e.max.z-m.z)*x):(f=(e.max.z-m.z)*x,d=(e.min.z-m.z)*x),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,yr)!==null}intersectTriangle(e,t,r,o,l){Pf.subVectors(t,e),kl.subVectors(r,e),Lf.crossVectors(Pf,kl);let c=this.direction.dot(Lf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Yr.subVectors(this.origin,e);const d=f*this.direction.dot(kl.crossVectors(Yr,kl));if(d<0)return null;const h=f*this.direction.dot(Pf.cross(Yr));if(h<0||d+h>c)return null;const g=-f*Yr.dot(Lf);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sv extends To{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ts,this.combine=kg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _0=new un,gs=new cd,Ol=new wo,y0=new Z,Bl=new Z,zl=new Z,Hl=new Z,If=new Z,Vl=new Z,M0=new Z,Gl=new Z;class Un extends Zn{constructor(e=new dn,t=new sv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Vl.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const g=f[d],x=l[d];g!==0&&(If.fromBufferAttribute(x,e),c?Vl.addScaledVector(If,g):Vl.addScaledVector(If.sub(t),g))}t.add(Vl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ol.copy(r.boundingSphere),Ol.applyMatrix4(l),gs.copy(e.ray).recast(e.near),!(Ol.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Ol,y0)===null||gs.origin.distanceToSquared(y0)>(e.far-e.near)**2))&&(_0.copy(l).invert(),gs.copy(e.ray).applyMatrix4(_0),!(r.boundingBox!==null&&gs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,g=l.attributes.uv1,x=l.attributes.normal,m=l.groups,_=l.drawRange;if(f!==null)if(Array.isArray(c))for(let A=0,C=m.length;A<C;A++){const y=m[A],S=c[y.materialIndex],T=Math.max(y.start,_.start),L=Math.min(f.count,Math.min(y.start+y.count,_.start+_.count));for(let P=T,z=L;P<z;P+=3){const D=f.getX(P),O=f.getX(P+1),E=f.getX(P+2);o=Wl(this,S,e,r,h,g,x,D,O,E),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const A=Math.max(0,_.start),C=Math.min(f.count,_.start+_.count);for(let y=A,S=C;y<S;y+=3){const T=f.getX(y),L=f.getX(y+1),P=f.getX(y+2);o=Wl(this,c,e,r,h,g,x,T,L,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let A=0,C=m.length;A<C;A++){const y=m[A],S=c[y.materialIndex],T=Math.max(y.start,_.start),L=Math.min(d.count,Math.min(y.start+y.count,_.start+_.count));for(let P=T,z=L;P<z;P+=3){const D=P,O=P+1,E=P+2;o=Wl(this,S,e,r,h,g,x,D,O,E),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const A=Math.max(0,_.start),C=Math.min(d.count,_.start+_.count);for(let y=A,S=C;y<S;y+=3){const T=y,L=y+1,P=y+2;o=Wl(this,c,e,r,h,g,x,T,L,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function ky(s,e,t,r,o,l,c,f){let d;if(e.side===li?d=r.intersectTriangle(c,l,o,!0,f):d=r.intersectTriangle(o,l,c,e.side===ts,f),d===null)return null;Gl.copy(f),Gl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Gl);return h<t.near||h>t.far?null:{distance:h,point:Gl.clone(),object:s}}function Wl(s,e,t,r,o,l,c,f,d,h){s.getVertexPosition(f,Bl),s.getVertexPosition(d,zl),s.getVertexPosition(h,Hl);const g=ky(s,e,t,r,Bl,zl,Hl,M0);if(g){const x=new Z;Wi.getBarycoord(M0,Bl,zl,Hl,x),o&&(g.uv=Wi.getInterpolatedAttribute(o,f,d,h,x,new It)),l&&(g.uv1=Wi.getInterpolatedAttribute(l,f,d,h,x,new It)),c&&(g.normal=Wi.getInterpolatedAttribute(c,f,d,h,x,new Z),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const m={a:f,b:d,c:h,normal:new Z,materialIndex:0};Wi.getNormal(Bl,zl,Hl,m.normal),g.face=m,g.barycoord=x}return g}class ov extends Wn{constructor(e=null,t=1,r=1,o,l,c,f,d,h=_n,g=_n,x,m){super(null,c,f,d,h,g,o,l,x,m),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Df=new Z,Oy=new Z,By=new wt;class _s{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Df.subVectors(r,t).cross(Oy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Df),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||By.getNormalMatrix(e),o=this.coplanarPoint(Df).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new wo,zy=new It(.5,.5),Xl=new Z;class av{constructor(e=new _s,t=new _s,r=new _s,o=new _s,l=new _s,c=new _s){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=nr,r=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],d=l[2],h=l[3],g=l[4],x=l[5],m=l[6],_=l[7],A=l[8],C=l[9],y=l[10],S=l[11],T=l[12],L=l[13],P=l[14],z=l[15];if(o[0].setComponents(h-c,_-g,S-A,z-T).normalize(),o[1].setComponents(h+c,_+g,S+A,z+T).normalize(),o[2].setComponents(h+f,_+x,S+C,z+L).normalize(),o[3].setComponents(h-f,_-x,S-C,z-L).normalize(),r)o[4].setComponents(d,m,y,P).normalize(),o[5].setComponents(h-d,_-m,S-y,z-P).normalize();else if(o[4].setComponents(h-d,_-m,S-y,z-P).normalize(),t===nr)o[5].setComponents(h+d,_+m,S+y,z+P).normalize();else if(t===gc)o[5].setComponents(d,m,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);const t=zy.distanceTo(e.center);return vs.radius=.7071067811865476+t,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Xl.x=o.normal.x>0?e.max.x:e.min.x,Xl.y=o.normal.y>0?e.max.y:e.min.y,Xl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Xl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lv extends To{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xc=new Z,_c=new Z,S0=new un,ua=new cd,jl=new wo,Uf=new Z,A0=new Z;class cv extends Zn{constructor(e=new dn,t=new lv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)xc.fromBufferAttribute(t,o-1),_c.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=xc.distanceTo(_c);e.setAttribute("lineDistance",new Dn(r,1))}else xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),jl.copy(r.boundingSphere),jl.applyMatrix4(o),jl.radius+=l,e.ray.intersectsSphere(jl)===!1)return;S0.copy(o).invert(),ua.copy(e.ray).applyMatrix4(S0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,g=r.index,m=r.attributes.position;if(g!==null){const _=Math.max(0,c.start),A=Math.min(g.count,c.start+c.count);for(let C=_,y=A-1;C<y;C+=h){const S=g.getX(C),T=g.getX(C+1),L=Kl(this,e,ua,d,S,T,C);L&&t.push(L)}if(this.isLineLoop){const C=g.getX(A-1),y=g.getX(_),S=Kl(this,e,ua,d,C,y,A-1);S&&t.push(S)}}else{const _=Math.max(0,c.start),A=Math.min(m.count,c.start+c.count);for(let C=_,y=A-1;C<y;C+=h){const S=Kl(this,e,ua,d,C,C+1,C);S&&t.push(S)}if(this.isLineLoop){const C=Kl(this,e,ua,d,A-1,_,A-1);C&&t.push(C)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Kl(s,e,t,r,o,l,c){const f=s.geometry.attributes.position;if(xc.fromBufferAttribute(f,o),_c.fromBufferAttribute(f,l),t.distanceSqToSegment(xc,_c,Uf,A0)>r)return;Uf.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Uf);if(!(h<e.near||h>e.far))return{distance:h,point:A0.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const E0=new Z,w0=new Z;class Hy extends cv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)E0.fromBufferAttribute(t,o),w0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+E0.distanceTo(w0);e.setAttribute("lineDistance",new Dn(r,1))}else xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gh extends To{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const T0=new un,Wh=new cd,ql=new wo,Yl=new Z;class Xh extends Zn{constructor(e=new dn,t=new Gh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ql.copy(r.boundingSphere),ql.applyMatrix4(o),ql.radius+=l,e.ray.intersectsSphere(ql)===!1)return;T0.copy(o).invert(),Wh.copy(e.ray).applyMatrix4(T0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=r.index,x=r.attributes.position;if(h!==null){const m=Math.max(0,c.start),_=Math.min(h.count,c.start+c.count);for(let A=m,C=_;A<C;A++){const y=h.getX(A);Yl.fromBufferAttribute(x,y),b0(Yl,y,d,o,e,t,this)}}else{const m=Math.max(0,c.start),_=Math.min(x.count,c.start+c.count);for(let A=m,C=_;A<C;A++)Yl.fromBufferAttribute(x,A),b0(Yl,A,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function b0(s,e,t,r,o,l,c){const f=Wh.distanceSqToPoint(s);if(f<t){const d=new Z;Wh.closestPointToPoint(s,d),d.applyMatrix4(r);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class uv extends Wn{constructor(e=[],t=Es,r,o,l,c,f,d,h,g){super(e,t,r,o,l,c,f,d,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vy extends Wn{constructor(e,t,r,o,l,c,f,d,h){super(e,t,r,o,l,c,f,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class So extends Wn{constructor(e,t,r=or,o,l,c,f=_n,d=_n,h,g=wr,x=1){if(g!==wr&&g!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:x};super(m,o,l,c,f,d,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ld(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Gy extends So{constructor(e,t=or,r=Es,o,l,c=_n,f=_n,d,h=wr){const g={width:e,height:e,depth:1},x=[g,g,g,g,g,g];super(e,e,t,r,o,l,c,f,d,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class fv extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ta extends dn{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const d=[],h=[],g=[],x=[];let m=0,_=0;A("z","y","x",-1,-1,r,t,e,c,l,0),A("z","y","x",1,-1,r,t,-e,c,l,1),A("x","z","y",1,1,e,r,t,o,c,2),A("x","z","y",1,-1,e,r,-t,o,c,3),A("x","y","z",1,-1,e,t,r,o,l,4),A("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Dn(h,3)),this.setAttribute("normal",new Dn(g,3)),this.setAttribute("uv",new Dn(x,2));function A(C,y,S,T,L,P,z,D,O,E,U){const q=P/O,H=z/E,F=P/2,W=z/2,ee=D/2,j=O+1,re=E+1;let G=0,X=0;const k=new Z;for(let ie=0;ie<re;ie++){const N=ie*H-W;for(let K=0;K<j;K++){const Ee=K*q-F;k[C]=Ee*T,k[y]=N*L,k[S]=ee,h.push(k.x,k.y,k.z),k[C]=0,k[y]=0,k[S]=D>0?1:-1,g.push(k.x,k.y,k.z),x.push(K/O),x.push(1-ie/E),G+=1}}for(let ie=0;ie<E;ie++)for(let N=0;N<O;N++){const K=m+N+j*ie,Ee=m+N+j*(ie+1),Me=m+(N+1)+j*(ie+1),ve=m+(N+1)+j*ie;d.push(K,Ee,ve),d.push(Ee,Me,ve),X+=6}f.addGroup(_,X,U),_+=X,m+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ud extends dn{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],c=[];f(o),h(r),g(),this.setAttribute("position",new Dn(l,3)),this.setAttribute("normal",new Dn(l.slice(),3)),this.setAttribute("uv",new Dn(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(T){const L=new Z,P=new Z,z=new Z;for(let D=0;D<t.length;D+=3)_(t[D+0],L),_(t[D+1],P),_(t[D+2],z),d(L,P,z,T)}function d(T,L,P,z){const D=z+1,O=[];for(let E=0;E<=D;E++){O[E]=[];const U=T.clone().lerp(P,E/D),q=L.clone().lerp(P,E/D),H=D-E;for(let F=0;F<=H;F++)F===0&&E===D?O[E][F]=U:O[E][F]=U.clone().lerp(q,F/H)}for(let E=0;E<D;E++)for(let U=0;U<2*(D-E)-1;U++){const q=Math.floor(U/2);U%2===0?(m(O[E][q+1]),m(O[E+1][q]),m(O[E][q])):(m(O[E][q+1]),m(O[E+1][q+1]),m(O[E+1][q]))}}function h(T){const L=new Z;for(let P=0;P<l.length;P+=3)L.x=l[P+0],L.y=l[P+1],L.z=l[P+2],L.normalize().multiplyScalar(T),l[P+0]=L.x,l[P+1]=L.y,l[P+2]=L.z}function g(){const T=new Z;for(let L=0;L<l.length;L+=3){T.x=l[L+0],T.y=l[L+1],T.z=l[L+2];const P=y(T)/2/Math.PI+.5,z=S(T)/Math.PI+.5;c.push(P,1-z)}A(),x()}function x(){for(let T=0;T<c.length;T+=6){const L=c[T+0],P=c[T+2],z=c[T+4],D=Math.max(L,P,z),O=Math.min(L,P,z);D>.9&&O<.1&&(L<.2&&(c[T+0]+=1),P<.2&&(c[T+2]+=1),z<.2&&(c[T+4]+=1))}}function m(T){l.push(T.x,T.y,T.z)}function _(T,L){const P=T*3;L.x=e[P+0],L.y=e[P+1],L.z=e[P+2]}function A(){const T=new Z,L=new Z,P=new Z,z=new Z,D=new It,O=new It,E=new It;for(let U=0,q=0;U<l.length;U+=9,q+=6){T.set(l[U+0],l[U+1],l[U+2]),L.set(l[U+3],l[U+4],l[U+5]),P.set(l[U+6],l[U+7],l[U+8]),D.set(c[q+0],c[q+1]),O.set(c[q+2],c[q+3]),E.set(c[q+4],c[q+5]),z.copy(T).add(L).add(P).divideScalar(3);const H=y(z);C(D,q+0,T,H),C(O,q+2,L,H),C(E,q+4,P,H)}}function C(T,L,P,z){z<0&&T.x===1&&(c[L]=T.x-1),P.x===0&&P.z===0&&(c[L]=z/2/Math.PI+.5)}function y(T){return Math.atan2(T.z,-T.x)}function S(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ud(e.vertices,e.indices,e.radius,e.detail)}}class Wy{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){xt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,d=l-1,h;for(;f<=d;)if(o=Math.floor(f+(d-f)/2),h=r[o]-c,h<0)f=o+1;else if(h>0)d=o-1;else{d=o;break}if(o=d,r[o]===c)return o/(l-1);const g=r[o],m=r[o+1]-g,_=(c-g)/m;return(o+_)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),d=t||(c.isVector2?new It:new Z);return d.copy(f).sub(c).normalize(),d}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new Z,o=[],l=[],c=[],f=new Z,d=new un;for(let _=0;_<=e;_++){const A=_/e;o[_]=this.getTangentAt(A,new Z)}l[0]=new Z,c[0]=new Z;let h=Number.MAX_VALUE;const g=Math.abs(o[0].x),x=Math.abs(o[0].y),m=Math.abs(o[0].z);g<=h&&(h=g,r.set(1,0,0)),x<=h&&(h=x,r.set(0,1,0)),m<=h&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let _=1;_<=e;_++){if(l[_]=l[_-1].clone(),c[_]=c[_-1].clone(),f.crossVectors(o[_-1],o[_]),f.length()>Number.EPSILON){f.normalize();const A=Math.acos(Lt(o[_-1].dot(o[_]),-1,1));l[_].applyMatrix4(d.makeRotationAxis(f,A))}c[_].crossVectors(o[_],l[_])}if(t===!0){let _=Math.acos(Lt(l[0].dot(l[e]),-1,1));_/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(_=-_);for(let A=1;A<=e;A++)l[A].applyMatrix4(d.makeRotationAxis(o[A],_*A)),c[A].crossVectors(o[A],l[A])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function fd(){let s=0,e=0,t=0,r=0;function o(l,c,f,d){s=l,e=f,t=-3*l+3*c-2*f-d,r=2*l-2*c+f+d}return{initCatmullRom:function(l,c,f,d,h){o(c,f,h*(f-l),h*(d-c))},initNonuniformCatmullRom:function(l,c,f,d,h,g,x){let m=(c-l)/h-(f-l)/(h+g)+(f-c)/g,_=(f-c)/g-(d-c)/(g+x)+(d-f)/x;m*=g,_*=g,o(c,f,m,_)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const C0=new Z,R0=new Z,Nf=new fd,Ff=new fd,kf=new fd;class Xy extends Wy{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new Z){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),d=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:d===0&&f===l-1&&(f=l-2,d=1);let h,g;this.closed||f>0?h=o[(f-1)%l]:(R0.subVectors(o[0],o[1]).add(o[0]),h=R0);const x=o[f%l],m=o[(f+1)%l];if(this.closed||f+2<l?g=o[(f+2)%l]:(C0.subVectors(o[l-1],o[l-2]).add(o[l-1]),g=C0),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let A=Math.pow(h.distanceToSquared(x),_),C=Math.pow(x.distanceToSquared(m),_),y=Math.pow(m.distanceToSquared(g),_);C<1e-4&&(C=1),A<1e-4&&(A=C),y<1e-4&&(y=C),Nf.initNonuniformCatmullRom(h.x,x.x,m.x,g.x,A,C,y),Ff.initNonuniformCatmullRom(h.y,x.y,m.y,g.y,A,C,y),kf.initNonuniformCatmullRom(h.z,x.z,m.z,g.z,A,C,y)}else this.curveType==="catmullrom"&&(Nf.initCatmullRom(h.x,x.x,m.x,g.x,this.tension),Ff.initCatmullRom(h.y,x.y,m.y,g.y,this.tension),kf.initCatmullRom(h.z,x.z,m.z,g.z,this.tension));return r.set(Nf.calc(d),Ff.calc(d),kf.calc(d)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Z().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class hd extends ud{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hd(e.radius,e.detail)}}class wc extends dn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,g=d+1,x=e/f,m=t/d,_=[],A=[],C=[],y=[];for(let S=0;S<g;S++){const T=S*m-c;for(let L=0;L<h;L++){const P=L*x-l;A.push(P,-T,0),C.push(0,0,1),y.push(L/f),y.push(1-S/d)}}for(let S=0;S<d;S++)for(let T=0;T<f;T++){const L=T+h*S,P=T+h*(S+1),z=T+1+h*(S+1),D=T+1+h*S;_.push(L,P,D),_.push(P,z,D)}this.setIndex(_),this.setAttribute("position",new Dn(A,3)),this.setAttribute("normal",new Dn(C,3)),this.setAttribute("uv",new Dn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.width,e.height,e.widthSegments,e.heightSegments)}}class yc extends dn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(c+f,Math.PI);let h=0;const g=[],x=new Z,m=new Z,_=[],A=[],C=[],y=[];for(let S=0;S<=r;S++){const T=[],L=S/r;let P=0;S===0&&c===0?P=.5/t:S===r&&d===Math.PI&&(P=-.5/t);for(let z=0;z<=t;z++){const D=z/t;x.x=-e*Math.cos(o+D*l)*Math.sin(c+L*f),x.y=e*Math.cos(c+L*f),x.z=e*Math.sin(o+D*l)*Math.sin(c+L*f),A.push(x.x,x.y,x.z),m.copy(x).normalize(),C.push(m.x,m.y,m.z),y.push(D+P,1-L),T.push(h++)}g.push(T)}for(let S=0;S<r;S++)for(let T=0;T<t;T++){const L=g[S][T+1],P=g[S][T],z=g[S+1][T],D=g[S+1][T+1];(S!==0||c>0)&&_.push(L,P,D),(S!==r-1||d<Math.PI)&&_.push(P,z,D)}this.setIndex(_),this.setAttribute("position",new Dn(A,3)),this.setAttribute("normal",new Dn(C,3)),this.setAttribute("uv",new Dn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ao(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(P0(o))o.isRenderTargetTexture?(xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(P0(o[0])){const l=[];for(let c=0,f=o.length;c<f;c++)l[c]=o[c].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Jn(s){const e={};for(let t=0;t<s.length;t++){const r=Ao(s[t]);for(const o in r)e[o]=r[o]}return e}function P0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function jy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function hv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ft.workingColorSpace}const Ky={clone:Ao,merge:Jn};var qy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends To{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qy,this.fragmentShader=Yy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ao(e.uniforms),this.uniformsGroups=jy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Qy extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jy extends To{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=j_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zy extends To{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ql=new Z,Jl=new rr,$i=new Z;class dv extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ql,Jl,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,Jl,$i.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ql,Jl,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,Jl,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qr=new Z,L0=new It,I0=new It;class ai extends dv{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,t){return this.getViewBounds(e,L0,I0),t.subVectors(I0,L0)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ya*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;l+=c.offsetX*o/d,t-=c.offsetY*r/h,o*=c.width/d,r*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class dd extends dv{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const co=-90,uo=1;class $y extends Zn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ai(co,uo,e,t);o.layers=this.layers,this.add(o);const l=new ai(co,uo,e,t);l.layers=this.layers,this.add(l);const c=new ai(co,uo,e,t);c.layers=this.layers,this.add(c);const f=new ai(co,uo,e,t);f.layers=this.layers,this.add(f);const d=new ai(co,uo,e,t);d.layers=this.layers,this.add(d);const h=new ai(co,uo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,d]=t;for(const h of t)this.remove(h);if(e===nr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===gc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,h,g]=this.children,x=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(x,m,_),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class eM extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Sd=class Sd{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Sd.prototype.isMatrix2=!0;let D0=Sd;function U0(s,e,t,r){const o=tM(r);switch(t){case Qg:return s*e;case Zg:return s*e/o.components*o.byteLength;case nd:return s*e/o.components*o.byteLength;case ws:return s*e*2/o.components*o.byteLength;case id:return s*e*2/o.components*o.byteLength;case Jg:return s*e*3/o.components*o.byteLength;case Pi:return s*e*4/o.components*o.byteLength;case rd:return s*e*4/o.components*o.byteLength;case ic:case rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case sc:case oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dh:case mh:return Math.max(s,16)*Math.max(e,8)/4;case hh:case ph:return Math.max(s,8)*Math.max(e,8)/2;case gh:case vh:case _h:case yh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xh:case hc:case Mh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case wh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Th:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case bh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Fh:case kh:case Oh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Bh:case zh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case dc:case Hh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tM(s){switch(s){case Ri:case jg:return{byteLength:1,components:1};case Sa:case Kg:case Er:return{byteLength:2,components:1};case ed:case td:return{byteLength:2,components:4};case or:case $h:case Xi:return{byteLength:4,components:1};case qg:case Yg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zh}}));typeof window<"u"&&(window.__THREE__?xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pv(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function nM(s){const e=new WeakMap;function t(f,d){const h=f.array,g=f.usage,x=h.byteLength,m=s.createBuffer();s.bindBuffer(d,m),s.bufferData(d,h,g),f.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?_=s.HALF_FLOAT:_=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,d,h){const g=d.array,x=d.updateRanges;if(s.bindBuffer(h,f),x.length===0)s.bufferSubData(h,0,g);else{x.sort((_,A)=>_.start-A.start);let m=0;for(let _=1;_<x.length;_++){const A=x[m],C=x[_];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++m,x[m]=C)}x.length=m+1;for(let _=0,A=x.length;_<A;_++){const C=x[_];s.bufferSubData(h,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(s.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:l,update:c}}var iM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rM=`#ifdef USE_ALPHAHASH
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
#endif`,sM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cM=`#ifdef USE_AOMAP
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
#endif`,uM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fM=`#ifdef USE_BATCHING
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
#endif`,hM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gM=`#ifdef USE_IRIDESCENCE
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
#endif`,vM=`#ifdef USE_BUMPMAP
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
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,AM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,EM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,TM=`#define PI 3.141592653589793
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
} // validated`,bM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CM=`vec3 transformedNormal = objectNormal;
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
#endif`,RM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DM="gl_FragColor = linearToOutputTexel( gl_FragColor );",UM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NM=`#ifdef USE_ENVMAP
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
#endif`,FM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
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
#endif`,OM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BM=`#ifdef USE_ENVMAP
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
#endif`,zM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WM=`#ifdef USE_GRADIENTMAP
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
}`,XM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jM=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,YM=`#ifdef USE_ENVMAP
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
#endif`,QM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e1=`PhysicalMaterial material;
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
#endif`,t1=`uniform sampler2D dfgLUT;
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
}`,n1=`
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
#endif`,i1=`#if defined( RE_IndirectDiffuse )
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
#endif`,r1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,o1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d1=`#if defined( USE_POINTS_UV )
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
#endif`,p1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_1=`#ifdef USE_MORPHTARGETS
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
#endif`,y1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T1=`#ifdef USE_NORMALMAP
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
#endif`,b1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,L1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V1=`float getShadowMask() {
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
}`,G1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W1=`#ifdef USE_SKINNING
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
#endif`,X1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j1=`#ifdef USE_SKINNING
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
#endif`,q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J1=`#ifdef USE_TRANSMISSION
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
#endif`,Z1=`#ifdef USE_TRANSMISSION
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rS=`uniform sampler2D t2D;
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
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cS=`#include <common>
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
}`,uS=`#if DEPTH_PACKING == 3200
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
}`,fS=`#define DISTANCE
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
}`,hS=`#define DISTANCE
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
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mS=`uniform float scale;
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
}`,gS=`uniform vec3 diffuse;
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
}`,vS=`#include <common>
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
}`,xS=`uniform vec3 diffuse;
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
}`,_S=`#define LAMBERT
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
}`,yS=`#define LAMBERT
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
}`,MS=`#define MATCAP
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
}`,SS=`#define MATCAP
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
}`,AS=`#define NORMAL
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
}`,ES=`#define NORMAL
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
}`,wS=`#define PHONG
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
}`,TS=`#define PHONG
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
}`,bS=`#define STANDARD
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
}`,CS=`#define STANDARD
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
}`,RS=`#define TOON
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
}`,PS=`#define TOON
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
}`,LS=`uniform float size;
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
}`,IS=`uniform vec3 diffuse;
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
}`,DS=`#include <common>
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
}`,US=`uniform vec3 color;
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
}`,NS=`uniform float rotation;
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
}`,FS=`uniform vec3 diffuse;
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
}`,Rt={alphahash_fragment:iM,alphahash_pars_fragment:rM,alphamap_fragment:sM,alphamap_pars_fragment:oM,alphatest_fragment:aM,alphatest_pars_fragment:lM,aomap_fragment:cM,aomap_pars_fragment:uM,batching_pars_vertex:fM,batching_vertex:hM,begin_vertex:dM,beginnormal_vertex:pM,bsdfs:mM,iridescence_fragment:gM,bumpmap_pars_fragment:vM,clipping_planes_fragment:xM,clipping_planes_pars_fragment:_M,clipping_planes_pars_vertex:yM,clipping_planes_vertex:MM,color_fragment:SM,color_pars_fragment:AM,color_pars_vertex:EM,color_vertex:wM,common:TM,cube_uv_reflection_fragment:bM,defaultnormal_vertex:CM,displacementmap_pars_vertex:RM,displacementmap_vertex:PM,emissivemap_fragment:LM,emissivemap_pars_fragment:IM,colorspace_fragment:DM,colorspace_pars_fragment:UM,envmap_fragment:NM,envmap_common_pars_fragment:FM,envmap_pars_fragment:kM,envmap_pars_vertex:OM,envmap_physical_pars_fragment:YM,envmap_vertex:BM,fog_vertex:zM,fog_pars_vertex:HM,fog_fragment:VM,fog_pars_fragment:GM,gradientmap_pars_fragment:WM,lightmap_pars_fragment:XM,lights_lambert_fragment:jM,lights_lambert_pars_fragment:KM,lights_pars_begin:qM,lights_toon_fragment:QM,lights_toon_pars_fragment:JM,lights_phong_fragment:ZM,lights_phong_pars_fragment:$M,lights_physical_fragment:e1,lights_physical_pars_fragment:t1,lights_fragment_begin:n1,lights_fragment_maps:i1,lights_fragment_end:r1,lightprobes_pars_fragment:s1,logdepthbuf_fragment:o1,logdepthbuf_pars_fragment:a1,logdepthbuf_pars_vertex:l1,logdepthbuf_vertex:c1,map_fragment:u1,map_pars_fragment:f1,map_particle_fragment:h1,map_particle_pars_fragment:d1,metalnessmap_fragment:p1,metalnessmap_pars_fragment:m1,morphinstance_vertex:g1,morphcolor_vertex:v1,morphnormal_vertex:x1,morphtarget_pars_vertex:_1,morphtarget_vertex:y1,normal_fragment_begin:M1,normal_fragment_maps:S1,normal_pars_fragment:A1,normal_pars_vertex:E1,normal_vertex:w1,normalmap_pars_fragment:T1,clearcoat_normal_fragment_begin:b1,clearcoat_normal_fragment_maps:C1,clearcoat_pars_fragment:R1,iridescence_pars_fragment:P1,opaque_fragment:L1,packing:I1,premultiplied_alpha_fragment:D1,project_vertex:U1,dithering_fragment:N1,dithering_pars_fragment:F1,roughnessmap_fragment:k1,roughnessmap_pars_fragment:O1,shadowmap_pars_fragment:B1,shadowmap_pars_vertex:z1,shadowmap_vertex:H1,shadowmask_pars_fragment:V1,skinbase_vertex:G1,skinning_pars_vertex:W1,skinning_vertex:X1,skinnormal_vertex:j1,specularmap_fragment:K1,specularmap_pars_fragment:q1,tonemapping_fragment:Y1,tonemapping_pars_fragment:Q1,transmission_fragment:J1,transmission_pars_fragment:Z1,uv_pars_fragment:$1,uv_pars_vertex:eS,uv_vertex:tS,worldpos_vertex:nS,background_vert:iS,background_frag:rS,backgroundCube_vert:sS,backgroundCube_frag:oS,cube_vert:aS,cube_frag:lS,depth_vert:cS,depth_frag:uS,distance_vert:fS,distance_frag:hS,equirect_vert:dS,equirect_frag:pS,linedashed_vert:mS,linedashed_frag:gS,meshbasic_vert:vS,meshbasic_frag:xS,meshlambert_vert:_S,meshlambert_frag:yS,meshmatcap_vert:MS,meshmatcap_frag:SS,meshnormal_vert:AS,meshnormal_frag:ES,meshphong_vert:wS,meshphong_frag:TS,meshphysical_vert:bS,meshphysical_frag:CS,meshtoon_vert:RS,meshtoon_frag:PS,points_vert:LS,points_frag:IS,shadow_vert:DS,shadow_frag:US,sprite_vert:NS,sprite_frag:FS},Ke={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},tr={basic:{uniforms:Jn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:Jn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:Jn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:Jn([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:Jn([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:Jn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:Jn([Ke.points,Ke.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:Jn([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:Jn([Ke.common,Ke.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:Jn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:Jn([Ke.sprite,Ke.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distance:{uniforms:Jn([Ke.common,Ke.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distance_vert,fragmentShader:Rt.distance_frag},shadow:{uniforms:Jn([Ke.lights,Ke.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};tr.physical={uniforms:Jn([tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const Zl={r:0,b:0,g:0},kS=new un,mv=new wt;mv.set(-1,0,0,0,1,0,0,0,1);function OS(s,e,t,r,o,l){const c=new Wt(0);let f=o===!0?0:1,d,h,g=null,x=0,m=null;function _(T){let L=T.isScene===!0?T.background:null;if(L&&L.isTexture){const P=T.backgroundBlurriness>0;L=e.get(L,P)}return L}function A(T){let L=!1;const P=_(T);P===null?y(c,f):P&&P.isColor&&(y(P,1),L=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?t.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(T,L){const P=_(L);P&&(P.isCubeTexture||P.mapping===Ac)?(h===void 0&&(h=new Un(new Ta(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Ao(tr.backgroundCube.uniforms),vertexShader:tr.backgroundCube.vertexShader,fragmentShader:tr.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=P,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kS.makeRotationFromEuler(L.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(mv),h.material.toneMapped=Ft.getTransfer(P.colorSpace)!==Yt,(g!==P||x!==P.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,g=P,x=P.version,m=s.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new Un(new wc(2,2),new gi({name:"BackgroundMaterial",uniforms:Ao(tr.background.uniforms),vertexShader:tr.background.vertexShader,fragmentShader:tr.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.toneMapped=Ft.getTransfer(P.colorSpace)!==Yt,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||x!==P.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,g=P,x=P.version,m=s.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null))}function y(T,L){T.getRGB(Zl,hv(s)),t.buffers.color.setClear(Zl.r,Zl.g,Zl.b,L,l)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(T,L=1){c.set(T),f=L,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(T){f=T,y(c,f)},render:A,addToRenderList:C,dispose:S}}function BS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=m(null);let l=o,c=!1;function f(H,F,W,ee,j){let re=!1;const G=x(H,ee,W,F);l!==G&&(l=G,h(l.object)),re=_(H,ee,W,j),re&&A(H,ee,W,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(re||c)&&(c=!1,P(H,F,W,ee),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function d(){return s.createVertexArray()}function h(H){return s.bindVertexArray(H)}function g(H){return s.deleteVertexArray(H)}function x(H,F,W,ee){const j=ee.wireframe===!0;let re=r[F.id];re===void 0&&(re={},r[F.id]=re);const G=H.isInstancedMesh===!0?H.id:0;let X=re[G];X===void 0&&(X={},re[G]=X);let k=X[W.id];k===void 0&&(k={},X[W.id]=k);let ie=k[j];return ie===void 0&&(ie=m(d()),k[j]=ie),ie}function m(H){const F=[],W=[],ee=[];for(let j=0;j<t;j++)F[j]=0,W[j]=0,ee[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:ee,object:H,attributes:{},index:null}}function _(H,F,W,ee){const j=l.attributes,re=F.attributes;let G=0;const X=W.getAttributes();for(const k in X)if(X[k].location>=0){const N=j[k];let K=re[k];if(K===void 0&&(k==="instanceMatrix"&&H.instanceMatrix&&(K=H.instanceMatrix),k==="instanceColor"&&H.instanceColor&&(K=H.instanceColor)),N===void 0||N.attribute!==K||K&&N.data!==K.data)return!0;G++}return l.attributesNum!==G||l.index!==ee}function A(H,F,W,ee){const j={},re=F.attributes;let G=0;const X=W.getAttributes();for(const k in X)if(X[k].location>=0){let N=re[k];N===void 0&&(k==="instanceMatrix"&&H.instanceMatrix&&(N=H.instanceMatrix),k==="instanceColor"&&H.instanceColor&&(N=H.instanceColor));const K={};K.attribute=N,N&&N.data&&(K.data=N.data),j[k]=K,G++}l.attributes=j,l.attributesNum=G,l.index=ee}function C(){const H=l.newAttributes;for(let F=0,W=H.length;F<W;F++)H[F]=0}function y(H){S(H,0)}function S(H,F){const W=l.newAttributes,ee=l.enabledAttributes,j=l.attributeDivisors;W[H]=1,ee[H]===0&&(s.enableVertexAttribArray(H),ee[H]=1),j[H]!==F&&(s.vertexAttribDivisor(H,F),j[H]=F)}function T(){const H=l.newAttributes,F=l.enabledAttributes;for(let W=0,ee=F.length;W<ee;W++)F[W]!==H[W]&&(s.disableVertexAttribArray(W),F[W]=0)}function L(H,F,W,ee,j,re,G){G===!0?s.vertexAttribIPointer(H,F,W,j,re):s.vertexAttribPointer(H,F,W,ee,j,re)}function P(H,F,W,ee){C();const j=ee.attributes,re=W.getAttributes(),G=F.defaultAttributeValues;for(const X in re){const k=re[X];if(k.location>=0){let ie=j[X];if(ie===void 0&&(X==="instanceMatrix"&&H.instanceMatrix&&(ie=H.instanceMatrix),X==="instanceColor"&&H.instanceColor&&(ie=H.instanceColor)),ie!==void 0){const N=ie.normalized,K=ie.itemSize,Ee=e.get(ie);if(Ee===void 0)continue;const Me=Ee.buffer,ve=Ee.type,I=Ee.bytesPerElement,ce=ve===s.INT||ve===s.UNSIGNED_INT||ie.gpuType===$h;if(ie.isInterleavedBufferAttribute){const oe=ie.data,Ae=oe.stride,Se=ie.offset;if(oe.isInstancedInterleavedBuffer){for(let xe=0;xe<k.locationSize;xe++)S(k.location+xe,oe.meshPerAttribute);H.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let xe=0;xe<k.locationSize;xe++)y(k.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let xe=0;xe<k.locationSize;xe++)L(k.location+xe,K/k.locationSize,ve,N,Ae*I,(Se+K/k.locationSize*xe)*I,ce)}else{if(ie.isInstancedBufferAttribute){for(let oe=0;oe<k.locationSize;oe++)S(k.location+oe,ie.meshPerAttribute);H.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let oe=0;oe<k.locationSize;oe++)y(k.location+oe);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let oe=0;oe<k.locationSize;oe++)L(k.location+oe,K/k.locationSize,ve,N,K*I,K/k.locationSize*oe*I,ce)}}else if(G!==void 0){const N=G[X];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(k.location,N);break;case 3:s.vertexAttrib3fv(k.location,N);break;case 4:s.vertexAttrib4fv(k.location,N);break;default:s.vertexAttrib1fv(k.location,N)}}}}T()}function z(){U();for(const H in r){const F=r[H];for(const W in F){const ee=F[W];for(const j in ee){const re=ee[j];for(const G in re)g(re[G].object),delete re[G];delete ee[j]}}delete r[H]}}function D(H){if(r[H.id]===void 0)return;const F=r[H.id];for(const W in F){const ee=F[W];for(const j in ee){const re=ee[j];for(const G in re)g(re[G].object),delete re[G];delete ee[j]}}delete r[H.id]}function O(H){for(const F in r){const W=r[F];for(const ee in W){const j=W[ee];if(j[H.id]===void 0)continue;const re=j[H.id];for(const G in re)g(re[G].object),delete re[G];delete j[H.id]}}}function E(H){for(const F in r){const W=r[F],ee=H.isInstancedMesh===!0?H.id:0,j=W[ee];if(j!==void 0){for(const re in j){const G=j[re];for(const X in G)g(G[X].object),delete G[X];delete j[re]}delete W[ee],Object.keys(W).length===0&&delete r[F]}}}function U(){q(),c=!0,l!==o&&(l=o,h(l.object))}function q(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:U,resetDefaultState:q,dispose:z,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:y,disableUnusedAttributes:T}}function zS(s,e,t){let r;function o(d){r=d}function l(d,h){s.drawArrays(r,d,h),t.update(h,r,1)}function c(d,h,g){g!==0&&(s.drawArraysInstanced(r,d,h,g),t.update(h,r,g))}function f(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,g);let m=0;for(let _=0;_<g;_++)m+=h[_];t.update(m,r,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function HS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==Pi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const E=O===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Ri&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Xi&&!E)}function d(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=d(h);g!==h&&(xt("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const x=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:T,maxVaryings:L,maxFragmentUniforms:P,maxSamples:z,samples:D}}function VS(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new _s,f=new wt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(x,m){const _=x.length!==0||m||r!==0||o;return o=m,r=x.length,_},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,m){t=g(x,m,0)},this.setState=function(x,m,_){const A=x.clippingPlanes,C=x.clipIntersection,y=x.clipShadows,S=s.get(x);if(!o||A===null||A.length===0||l&&!y)l?g(null):h();else{const T=l?0:r,L=T*4;let P=S.clippingState||null;d.value=P,P=g(A,m,L,_);for(let z=0;z!==L;++z)P[z]=t[z];S.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=T}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,m,_,A){const C=x!==null?x.length:0;let y=null;if(C!==0){if(y=d.value,A!==!0||y===null){const S=_+C*4,T=m.matrixWorldInverse;f.getNormalMatrix(T),(y===null||y.length<S)&&(y=new Float32Array(S));for(let L=0,P=_;L!==C;++L,P+=4)c.copy(x[L]).applyMatrix4(T,f),c.normal.toArray(y,P),y[P+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const es=4,N0=[.125,.215,.35,.446,.526,.582],Ms=20,GS=256,fa=new dd,F0=new Wt;let Of=null,Bf=0,zf=0,Hf=!1;const WS=new Z;class k0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:f=WS}=l;Of=this._renderer.getRenderTarget(),Bf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=B0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Of,Bf,zf),this._renderer.xr.enabled=Hf,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===Mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Of=this._renderer.getRenderTarget(),Bf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Er,format:Pi,colorSpace:pc,depthBuffer:!1},o=O0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=O0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XS(l)),this._blurMaterial=KS(l,e,t),this._ggxMaterial=jS(l,e,t)}return o}_compileMaterial(e){const t=new Un(new dn,e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,r,o,l){const d=new ai(90,1,t,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,m=x.autoClear,_=x.toneMapping;x.getClearColor(F0),x.toneMapping=ir,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Un(new Ta,new sv({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let S=!1;const T=e.background;T?T.isColor&&(y.color.copy(T),e.background=null,S=!0):(y.color.copy(F0),S=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(d.up.set(0,h[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+g[L],l.y,l.z)):P===1?(d.up.set(0,0,h[L]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+g[L],l.z)):(d.up.set(0,h[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+g[L]));const z=this._cubeSize;fo(o,P*z,L>2?z:0,z,z),x.setRenderTarget(o),S&&x.render(C,d),x.render(e,d)}x.toneMapping=_,x.autoClear=m,e.background=T}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Es||e.mapping===Mo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=z0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=B0());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;fo(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,fa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,h=r/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),x=Math.sqrt(h*h-g*g),m=0+h*1.25,_=x*m,{_lodMax:A}=this,C=this._sizeLods[r],y=3*C*(r>A-es?r-A+es:0),S=4*(this._cubeSize-C);d.envMap.value=e.texture,d.roughness.value=_,d.mipInt.value=A-t,fo(l,y,S,3*C,2*C),o.setRenderTarget(l),o.render(f,fa),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=A-r,fo(e,y,S,3*C,2*C),o.setRenderTarget(e),o.render(f,fa)}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Gt("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[o];x.material=h;const m=h.uniforms,_=this._sizeLods[r]-1,A=isFinite(l)?Math.PI/(2*_):2*Math.PI/(2*Ms-1),C=l/A,y=isFinite(l)?1+Math.floor(g*C):Ms;y>Ms&&xt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ms}`);const S=[];let T=0;for(let O=0;O<Ms;++O){const E=O/C,U=Math.exp(-E*E/2);S.push(U),O===0?T+=U:O<y&&(T+=2*U)}for(let O=0;O<S.length;O++)S[O]=S[O]/T;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=S,m.latitudinal.value=c==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:L}=this;m.dTheta.value=A,m.mipInt.value=L-r;const P=this._sizeLods[o],z=3*P*(o>L-es?o-L+es:0),D=4*(this._cubeSize-P);fo(t,z,D,3*P,2*P),d.setRenderTarget(t),d.render(x,fa)}}function XS(s){const e=[],t=[],r=[];let o=s;const l=s-es+1+N0.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);e.push(f);let d=1/f;c>s-es?d=N0[c-s+es-1]:c===0&&(d=0),t.push(d);const h=1/(f-2),g=-h,x=1+h,m=[g,g,x,g,x,x,g,g,x,x,g,x],_=6,A=6,C=3,y=2,S=1,T=new Float32Array(C*A*_),L=new Float32Array(y*A*_),P=new Float32Array(S*A*_);for(let D=0;D<_;D++){const O=D%3*2/3-1,E=D>2?0:-1,U=[O,E,0,O+2/3,E,0,O+2/3,E+1,0,O,E,0,O+2/3,E+1,0,O,E+1,0];T.set(U,C*A*D),L.set(m,y*A*D);const q=[D,D,D,D,D,D];P.set(q,S*A*D)}const z=new dn;z.setAttribute("position",new Vt(T,C)),z.setAttribute("uv",new Vt(L,y)),z.setAttribute("faceIndex",new Vt(P,S)),r.push(new Un(z,null)),o>es&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function O0(s,e,t){const r=new sr(s,e,t);return r.texture.mapping=Ac,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fo(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function jS(s,e,t){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:GS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function KS(s,e,t){const r=new Float32Array(Ms),o=new Z(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function B0(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function z0(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}class gv extends sr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new uv(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ta(5,5,5),l=new gi({name:"CubemapFromEquirect",uniforms:Ao(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:li,blending:Sr});l.uniforms.tEquirect.value=t;const c=new Un(o,l),f=t.minFilter;return t.minFilter===Ss&&(t.minFilter=bn),new $y(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}function qS(s){let e=new WeakMap,t=new WeakMap,r=null;function o(m,_=!1){return m==null?null:_?c(m):l(m)}function l(m){if(m&&m.isTexture){const _=m.mapping;if(_===cf||_===uf)if(e.has(m)){const A=e.get(m).texture;return f(A,m.mapping)}else{const A=m.image;if(A&&A.height>0){const C=new gv(A.height);return C.fromEquirectangularTexture(s,m),e.set(m,C),m.addEventListener("dispose",h),f(C.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const _=m.mapping,A=_===cf||_===uf,C=_===Es||_===Mo;if(A||C){let y=t.get(m);const S=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return r===null&&(r=new k0(s)),y=A?r.fromEquirectangular(m,y):r.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const T=m.image;return A&&T&&T.height>0||C&&T&&d(T)?(r===null&&(r=new k0(s)),y=A?r.fromEquirectangular(m):r.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",g),y.texture):null}}}return m}function f(m,_){return _===cf?m.mapping=Es:_===uf&&(m.mapping=Mo),m}function d(m){let _=0;const A=6;for(let C=0;C<A;C++)m[C]!==void 0&&_++;return _===A}function h(m){const _=m.target;_.removeEventListener("dispose",h);const A=e.get(_);A!==void 0&&(e.delete(_),A.dispose())}function g(m){const _=m.target;_.removeEventListener("dispose",g);const A=t.get(_);A!==void 0&&(t.delete(_),A.dispose())}function x(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:x}}function YS(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Vh("WebGLRenderer: "+r+" extension not supported."),o}}}function QS(s,e,t,r){const o={},l=new WeakMap;function c(x){const m=x.target;m.index!==null&&e.remove(m.index);for(const A in m.attributes)e.remove(m.attributes[A]);m.removeEventListener("dispose",c),delete o[m.id];const _=l.get(m);_&&(e.remove(_),l.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(x,m){return o[m.id]===!0||(m.addEventListener("dispose",c),o[m.id]=!0,t.memory.geometries++),m}function d(x){const m=x.attributes;for(const _ in m)e.update(m[_],s.ARRAY_BUFFER)}function h(x){const m=[],_=x.index,A=x.attributes.position;let C=0;if(A===void 0)return;if(_!==null){const T=_.array;C=_.version;for(let L=0,P=T.length;L<P;L+=3){const z=T[L+0],D=T[L+1],O=T[L+2];m.push(z,D,D,O,O,z)}}else{const T=A.array;C=A.version;for(let L=0,P=T.length/3-1;L<P;L+=3){const z=L+0,D=L+1,O=L+2;m.push(z,D,D,O,O,z)}}const y=new(A.count>=65535?rv:iv)(m,1);y.version=C;const S=l.get(x);S&&e.remove(S),l.set(x,y)}function g(x){const m=l.get(x);if(m){const _=x.index;_!==null&&m.version<_.version&&h(x)}else h(x);return l.get(x)}return{get:f,update:d,getWireframeAttribute:g}}function JS(s,e,t){let r;function o(x){r=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function d(x,m){s.drawElements(r,m,l,x*c),t.update(m,r,1)}function h(x,m,_){_!==0&&(s.drawElementsInstanced(r,m,l,x*c,_),t.update(m,r,_))}function g(x,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,l,x,0,_);let C=0;for(let y=0;y<_;y++)C+=m[y];t.update(C,r,1)}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=g}function ZS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Gt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function $S(s,e,t){const r=new WeakMap,o=new on;function l(c,f,d){const h=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=g!==void 0?g.length:0;let m=r.get(f);if(m===void 0||m.count!==x){let q=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",q)};var _=q;m!==void 0&&m.texture.dispose();const A=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;A===!0&&(P=1),C===!0&&(P=2),y===!0&&(P=3);let z=f.attributes.position.count*P,D=1;z>e.maxTextureSize&&(D=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const O=new Float32Array(z*D*4*x),E=new ev(O,z,D,x);E.type=Xi,E.needsUpdate=!0;const U=P*4;for(let H=0;H<x;H++){const F=S[H],W=T[H],ee=L[H],j=z*D*4*H;for(let re=0;re<F.count;re++){const G=re*U;A===!0&&(o.fromBufferAttribute(F,re),O[j+G+0]=o.x,O[j+G+1]=o.y,O[j+G+2]=o.z,O[j+G+3]=0),C===!0&&(o.fromBufferAttribute(W,re),O[j+G+4]=o.x,O[j+G+5]=o.y,O[j+G+6]=o.z,O[j+G+7]=0),y===!0&&(o.fromBufferAttribute(ee,re),O[j+G+8]=o.x,O[j+G+9]=o.y,O[j+G+10]=o.z,O[j+G+11]=ee.itemSize===4?o.w:1)}}m={count:x,texture:E,size:new It(z,D)},r.set(f,m),f.addEventListener("dispose",q)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let A=0;for(let y=0;y<h.length;y++)A+=h[y];const C=f.morphTargetsRelative?1:1-A;d.getUniforms().setValue(s,"morphTargetBaseInfluence",C),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:l}}function eA(s,e,t,r,o){let l=new WeakMap;function c(h){const g=o.render.frame,x=h.geometry,m=e.get(h,x);if(l.get(m)!==g&&(e.update(m),l.set(m,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==g&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,g))),h.isSkinnedMesh){const _=h.skeleton;l.get(_)!==g&&(_.update(),l.set(_,g))}return m}function f(){l=new WeakMap}function d(h){const g=h.target;g.removeEventListener("dispose",d),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:f}}const tA={[Og]:"LINEAR_TONE_MAPPING",[Bg]:"REINHARD_TONE_MAPPING",[zg]:"CINEON_TONE_MAPPING",[Hg]:"ACES_FILMIC_TONE_MAPPING",[Gg]:"AGX_TONE_MAPPING",[Wg]:"NEUTRAL_TONE_MAPPING",[Vg]:"CUSTOM_TONE_MAPPING"};function nA(s,e,t,r,o){const l=new sr(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new So(e,t):void 0}),c=new sr(e,t,{type:Er,depthBuffer:!1,stencilBuffer:!1}),f=new dn;f.setAttribute("position",new Dn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Dn([0,2,0,0,2,0],2));const d=new Qy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Un(f,d),g=new dd(-1,1,1,-1,0,1);let x=null,m=null,_=!1,A,C=null,y=[],S=!1;this.setSize=function(T,L){l.setSize(T,L),c.setSize(T,L);for(let P=0;P<y.length;P++){const z=y[P];z.setSize&&z.setSize(T,L)}},this.setEffects=function(T){y=T,S=y.length>0&&y[0].isRenderPass===!0;const L=l.width,P=l.height;for(let z=0;z<y.length;z++){const D=y[z];D.setSize&&D.setSize(L,P)}},this.begin=function(T,L){if(_||T.toneMapping===ir&&y.length===0)return!1;if(C=L,L!==null){const P=L.width,z=L.height;(l.width!==P||l.height!==z)&&this.setSize(P,z)}return S===!1&&T.setRenderTarget(l),A=T.toneMapping,T.toneMapping=ir,!0},this.hasRenderPass=function(){return S},this.end=function(T,L){T.toneMapping=A,_=!0;let P=l,z=c;for(let D=0;D<y.length;D++){const O=y[D];if(O.enabled!==!1&&(O.render(T,z,P,L),O.needsSwap!==!1)){const E=P;P=z,z=E}}if(x!==T.outputColorSpace||m!==T.toneMapping){x=T.outputColorSpace,m=T.toneMapping,d.defines={},Ft.getTransfer(x)===Yt&&(d.defines.SRGB_TRANSFER="");const D=tA[m];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=P.texture,T.setRenderTarget(C),T.render(h,g),C=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),f.dispose(),d.dispose()}}const vv=new Wn,jh=new So(1,1),xv=new ev,_v=new wy,yv=new uv,H0=[],V0=[],G0=new Float32Array(16),W0=new Float32Array(9),X0=new Float32Array(4);function bo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=H0[o];if(l===void 0&&(l=new Float32Array(o),H0[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function yn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Mn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function bc(s,e){let t=V0[e];t===void 0&&(t=new Int32Array(e),V0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function iA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function rA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;s.uniform2fv(this.addr,e),Mn(t,e)}}function sA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;s.uniform3fv(this.addr,e),Mn(t,e)}}function oA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;s.uniform4fv(this.addr,e),Mn(t,e)}}function aA(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(yn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mn(t,e)}else{if(yn(t,r))return;X0.set(r),s.uniformMatrix2fv(this.addr,!1,X0),Mn(t,r)}}function lA(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(yn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mn(t,e)}else{if(yn(t,r))return;W0.set(r),s.uniformMatrix3fv(this.addr,!1,W0),Mn(t,r)}}function cA(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(yn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mn(t,e)}else{if(yn(t,r))return;G0.set(r),s.uniformMatrix4fv(this.addr,!1,G0),Mn(t,r)}}function uA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function fA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;s.uniform2iv(this.addr,e),Mn(t,e)}}function hA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;s.uniform3iv(this.addr,e),Mn(t,e)}}function dA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;s.uniform4iv(this.addr,e),Mn(t,e)}}function pA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function mA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;s.uniform2uiv(this.addr,e),Mn(t,e)}}function gA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;s.uniform3uiv(this.addr,e),Mn(t,e)}}function vA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;s.uniform4uiv(this.addr,e),Mn(t,e)}}function xA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(jh.compareFunction=t.isReversedDepthBuffer()?od:sd,l=jh):l=vv,t.setTexture2D(e||l,o)}function _A(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||_v,o)}function yA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||yv,o)}function MA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||xv,o)}function SA(s){switch(s){case 5126:return iA;case 35664:return rA;case 35665:return sA;case 35666:return oA;case 35674:return aA;case 35675:return lA;case 35676:return cA;case 5124:case 35670:return uA;case 35667:case 35671:return fA;case 35668:case 35672:return hA;case 35669:case 35673:return dA;case 5125:return pA;case 36294:return mA;case 36295:return gA;case 36296:return vA;case 35678:case 36198:case 36298:case 36306:case 35682:return xA;case 35679:case 36299:case 36307:return _A;case 35680:case 36300:case 36308:case 36293:return yA;case 36289:case 36303:case 36311:case 36292:return MA}}function AA(s,e){s.uniform1fv(this.addr,e)}function EA(s,e){const t=bo(e,this.size,2);s.uniform2fv(this.addr,t)}function wA(s,e){const t=bo(e,this.size,3);s.uniform3fv(this.addr,t)}function TA(s,e){const t=bo(e,this.size,4);s.uniform4fv(this.addr,t)}function bA(s,e){const t=bo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function CA(s,e){const t=bo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function RA(s,e){const t=bo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function PA(s,e){s.uniform1iv(this.addr,e)}function LA(s,e){s.uniform2iv(this.addr,e)}function IA(s,e){s.uniform3iv(this.addr,e)}function DA(s,e){s.uniform4iv(this.addr,e)}function UA(s,e){s.uniform1uiv(this.addr,e)}function NA(s,e){s.uniform2uiv(this.addr,e)}function FA(s,e){s.uniform3uiv(this.addr,e)}function kA(s,e){s.uniform4uiv(this.addr,e)}function OA(s,e,t){const r=this.cache,o=e.length,l=bc(t,o);yn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=jh:c=vv;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,l[f])}function BA(s,e,t){const r=this.cache,o=e.length,l=bc(t,o);yn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||_v,l[c])}function zA(s,e,t){const r=this.cache,o=e.length,l=bc(t,o);yn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||yv,l[c])}function HA(s,e,t){const r=this.cache,o=e.length,l=bc(t,o);yn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||xv,l[c])}function VA(s){switch(s){case 5126:return AA;case 35664:return EA;case 35665:return wA;case 35666:return TA;case 35674:return bA;case 35675:return CA;case 35676:return RA;case 5124:case 35670:return PA;case 35667:case 35671:return LA;case 35668:case 35672:return IA;case 35669:case 35673:return DA;case 5125:return UA;case 36294:return NA;case 36295:return FA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return OA;case 35679:case 36299:case 36307:return BA;case 35680:case 36300:case 36308:case 36293:return zA;case 36289:case 36303:case 36311:case 36292:return HA}}class GA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=SA(t.type)}}class WA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=VA(t.type)}}class XA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Vf=/(\w+)(\])?(\[|\.)?/g;function j0(s,e){s.seq.push(e),s.map[e.id]=e}function jA(s,e,t){const r=s.name,o=r.length;for(Vf.lastIndex=0;;){const l=Vf.exec(r),c=Vf.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===o){j0(t,h===void 0?new GA(f,s,e):new WA(f,s,e));break}else{let x=t.map[f];x===void 0&&(x=new XA(f),j0(t,x)),t=x}}}class lc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),d=e.getUniformLocation(t,f.name);jA(f,d,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function K0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const KA=37297;let qA=0;function YA(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const q0=new wt;function QA(s){Ft._getMatrix(q0,Ft.workingColorSpace,s);const e=`mat3( ${q0.elements.map(t=>t.toFixed(4))} )`;switch(Ft.getTransfer(s)){case mc:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return xt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Y0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+YA(s.getShaderSource(e),f)}else return l}function JA(s,e){const t=QA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ZA={[Og]:"Linear",[Bg]:"Reinhard",[zg]:"Cineon",[Hg]:"ACESFilmic",[Gg]:"AgX",[Wg]:"Neutral",[Vg]:"Custom"};function $A(s,e){const t=ZA[e];return t===void 0?(xt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $l=new Z;function eE(){Ft.getLuminanceCoefficients($l);const s=$l.x.toFixed(4),e=$l.y.toFixed(4),t=$l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function nE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function iE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function xa(s){return s!==""}function Q0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function J0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(s){return s.replace(rE,oE)}const sE=new Map;function oE(s,e){let t=Rt[e];if(t===void 0){const r=sE.get(e);if(r!==void 0)t=Rt[r],xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Kh(t)}const aE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z0(s){return s.replace(aE,lE)}function lE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function $0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const cE={[nc]:"SHADOWMAP_TYPE_PCF",[va]:"SHADOWMAP_TYPE_VSM"};function uE(s){return cE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fE={[Es]:"ENVMAP_TYPE_CUBE",[Mo]:"ENVMAP_TYPE_CUBE",[Ac]:"ENVMAP_TYPE_CUBE_UV"};function hE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":fE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const dE={[Mo]:"ENVMAP_MODE_REFRACTION"};function pE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":dE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mE={[kg]:"ENVMAP_BLENDING_MULTIPLY",[G_]:"ENVMAP_BLENDING_MIX",[W_]:"ENVMAP_BLENDING_ADD"};function gE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":mE[s.combine]||"ENVMAP_BLENDING_NONE"}function vE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function xE(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=uE(t),h=hE(t),g=pE(t),x=gE(t),m=vE(t),_=tE(t),A=nE(l),C=o.createProgram();let y,S,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(xa).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(xa).join(`
`),S.length>0&&(S+=`
`)):(y=[$0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),S=[$0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+x:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?Rt.tonemapping_pars_fragment:"",t.toneMapping!==ir?$A("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,JA("linearToOutputTexel",t.outputColorSpace),eE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),c=Kh(c),c=Q0(c,t),c=J0(c,t),f=Kh(f),f=Q0(f,t),f=J0(f,t),c=Z0(c),f=Z0(f),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===r0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===r0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=T+y+c,P=T+S+f,z=K0(o,o.VERTEX_SHADER,L),D=K0(o,o.FRAGMENT_SHADER,P);o.attachShader(C,z),o.attachShader(C,D),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function O(H){if(s.debug.checkShaderErrors){const F=o.getProgramInfoLog(C)||"",W=o.getShaderInfoLog(z)||"",ee=o.getShaderInfoLog(D)||"",j=F.trim(),re=W.trim(),G=ee.trim();let X=!0,k=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,z,D);else{const ie=Y0(o,z,"vertex"),N=Y0(o,D,"fragment");Gt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+j+`
`+ie+`
`+N)}else j!==""?xt("WebGLProgram: Program Info Log:",j):(re===""||G==="")&&(k=!1);k&&(H.diagnostics={runnable:X,programLog:j,vertexShader:{log:re,prefix:y},fragmentShader:{log:G,prefix:S}})}o.deleteShader(z),o.deleteShader(D),E=new lc(o,C),U=iE(o,C)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let U;this.getAttributes=function(){return U===void 0&&O(this),U};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=o.getProgramParameter(C,KA)),q},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qA++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=z,this.fragmentShader=D,this}let _E=0;class yE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new ME(e),t.set(e,r)),r}}class ME{constructor(e){this.id=_E++,this.code=e,this.usedTimes=0}}function SE(s){return s===ws||s===hc||s===dc}function AE(s,e,t,r,o,l){const c=new tv,f=new yE,d=new Set,h=[],g=new Map,x=r.logarithmicDepthBuffer;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(E){return d.add(E),E===0?"uv":`uv${E}`}function C(E,U,q,H,F,W){const ee=H.fog,j=F.geometry,re=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,G=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,X=e.get(E.envMap||re,G),k=X&&X.mapping===Ac?X.image.height:null,ie=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&xt("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const N=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,K=N!==void 0?N.length:0;let Ee=0;j.morphAttributes.position!==void 0&&(Ee=1),j.morphAttributes.normal!==void 0&&(Ee=2),j.morphAttributes.color!==void 0&&(Ee=3);let Me,ve,I,ce;if(ie){const gt=tr[ie];Me=gt.vertexShader,ve=gt.fragmentShader}else Me=E.vertexShader,ve=E.fragmentShader,f.update(E),I=f.getVertexShaderID(E),ce=f.getFragmentShaderID(E);const oe=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Se=F.isInstancedMesh===!0,xe=F.isBatchedMesh===!0,Ye=!!E.map,Ie=!!E.matcap,He=!!X,et=!!E.aoMap,Ze=!!E.lightMap,rt=!!E.bumpMap,lt=!!E.normalMap,bt=!!E.displacementMap,Y=!!E.emissiveMap,At=!!E.metalnessMap,dt=!!E.roughnessMap,Tt=E.anisotropy>0,ke=E.clearcoat>0,kt=E.dispersion>0,w=E.iridescence>0,M=E.sheen>0,Q=E.transmission>0,le=Tt&&!!E.anisotropyMap,_e=ke&&!!E.clearcoatMap,de=ke&&!!E.clearcoatNormalMap,we=ke&&!!E.clearcoatRoughnessMap,ge=w&&!!E.iridescenceMap,me=w&&!!E.iridescenceThicknessMap,Ve=M&&!!E.sheenColorMap,Ge=M&&!!E.sheenRoughnessMap,De=!!E.specularMap,Le=!!E.specularColorMap,tt=!!E.specularIntensityMap,ut=Q&&!!E.transmissionMap,ht=Q&&!!E.thicknessMap,J=!!E.gradientMap,Ue=!!E.alphaMap,ye=E.alphaTest>0,Xe=!!E.alphaHash,Fe=!!E.extensions;let Te=ir;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Te=s.toneMapping);const Je={shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:Me,fragmentShader:ve,defines:E.defines,customVertexShaderID:I,customFragmentShaderID:ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:xe,batchingColor:xe&&F._colorsTexture!==null,instancing:Se,instancingColor:Se&&F.instanceColor!==null,instancingMorph:Se&&F.morphTexture!==null,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ft.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Ye,matcap:Ie,envMap:He,envMapMode:He&&X.mapping,envMapCubeUVHeight:k,aoMap:et,lightMap:Ze,bumpMap:rt,normalMap:lt,displacementMap:bt,emissiveMap:Y,normalMapObjectSpace:lt&&E.normalMapType===K_,normalMapTangentSpace:lt&&E.normalMapType===e0,packedNormalMap:lt&&E.normalMapType===e0&&SE(E.normalMap.format),metalnessMap:At,roughnessMap:dt,anisotropy:Tt,anisotropyMap:le,clearcoat:ke,clearcoatMap:_e,clearcoatNormalMap:de,clearcoatRoughnessMap:we,dispersion:kt,iridescence:w,iridescenceMap:ge,iridescenceThicknessMap:me,sheen:M,sheenColorMap:Ve,sheenRoughnessMap:Ge,specularMap:De,specularColorMap:Le,specularIntensityMap:tt,transmission:Q,transmissionMap:ut,thicknessMap:ht,gradientMap:J,opaque:E.transparent===!1&&E.blending===xo&&E.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ye,alphaHash:Xe,combine:E.combine,mapUv:Ye&&A(E.map.channel),aoMapUv:et&&A(E.aoMap.channel),lightMapUv:Ze&&A(E.lightMap.channel),bumpMapUv:rt&&A(E.bumpMap.channel),normalMapUv:lt&&A(E.normalMap.channel),displacementMapUv:bt&&A(E.displacementMap.channel),emissiveMapUv:Y&&A(E.emissiveMap.channel),metalnessMapUv:At&&A(E.metalnessMap.channel),roughnessMapUv:dt&&A(E.roughnessMap.channel),anisotropyMapUv:le&&A(E.anisotropyMap.channel),clearcoatMapUv:_e&&A(E.clearcoatMap.channel),clearcoatNormalMapUv:de&&A(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&A(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&A(E.iridescenceMap.channel),iridescenceThicknessMapUv:me&&A(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&A(E.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&A(E.sheenRoughnessMap.channel),specularMapUv:De&&A(E.specularMap.channel),specularColorMapUv:Le&&A(E.specularColorMap.channel),specularIntensityMapUv:tt&&A(E.specularIntensityMap.channel),transmissionMapUv:ut&&A(E.transmissionMap.channel),thicknessMapUv:ht&&A(E.thicknessMap.channel),alphaMapUv:Ue&&A(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(lt||Tt),vertexNormals:!!j.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(Ye||Ue),fog:!!ee,useFog:E.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||j.attributes.normal===void 0&&lt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ae,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Ee,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:Te,decodeVideoTexture:Ye&&E.map.isVideoTexture===!0&&Ft.getTransfer(E.map.colorSpace)===Yt,decodeVideoTextureEmissive:Y&&E.emissiveMap.isVideoTexture===!0&&Ft.getTransfer(E.emissiveMap.colorSpace)===Yt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Gi,flipSided:E.side===li,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Fe&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&E.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Je.vertexUv1s=d.has(1),Je.vertexUv2s=d.has(2),Je.vertexUv3s=d.has(3),d.clear(),Je}function y(E){const U=[];if(E.shaderID?U.push(E.shaderID):(U.push(E.customVertexShaderID),U.push(E.customFragmentShaderID)),E.defines!==void 0)for(const q in E.defines)U.push(q),U.push(E.defines[q]);return E.isRawShaderMaterial===!1&&(S(U,E),T(U,E),U.push(s.outputColorSpace)),U.push(E.customProgramCacheKey),U.join()}function S(E,U){E.push(U.precision),E.push(U.outputColorSpace),E.push(U.envMapMode),E.push(U.envMapCubeUVHeight),E.push(U.mapUv),E.push(U.alphaMapUv),E.push(U.lightMapUv),E.push(U.aoMapUv),E.push(U.bumpMapUv),E.push(U.normalMapUv),E.push(U.displacementMapUv),E.push(U.emissiveMapUv),E.push(U.metalnessMapUv),E.push(U.roughnessMapUv),E.push(U.anisotropyMapUv),E.push(U.clearcoatMapUv),E.push(U.clearcoatNormalMapUv),E.push(U.clearcoatRoughnessMapUv),E.push(U.iridescenceMapUv),E.push(U.iridescenceThicknessMapUv),E.push(U.sheenColorMapUv),E.push(U.sheenRoughnessMapUv),E.push(U.specularMapUv),E.push(U.specularColorMapUv),E.push(U.specularIntensityMapUv),E.push(U.transmissionMapUv),E.push(U.thicknessMapUv),E.push(U.combine),E.push(U.fogExp2),E.push(U.sizeAttenuation),E.push(U.morphTargetsCount),E.push(U.morphAttributeCount),E.push(U.numDirLights),E.push(U.numPointLights),E.push(U.numSpotLights),E.push(U.numSpotLightMaps),E.push(U.numHemiLights),E.push(U.numRectAreaLights),E.push(U.numDirLightShadows),E.push(U.numPointLightShadows),E.push(U.numSpotLightShadows),E.push(U.numSpotLightShadowsWithMaps),E.push(U.numLightProbes),E.push(U.shadowMapType),E.push(U.toneMapping),E.push(U.numClippingPlanes),E.push(U.numClipIntersection),E.push(U.depthPacking)}function T(E,U){c.disableAll(),U.instancing&&c.enable(0),U.instancingColor&&c.enable(1),U.instancingMorph&&c.enable(2),U.matcap&&c.enable(3),U.envMap&&c.enable(4),U.normalMapObjectSpace&&c.enable(5),U.normalMapTangentSpace&&c.enable(6),U.clearcoat&&c.enable(7),U.iridescence&&c.enable(8),U.alphaTest&&c.enable(9),U.vertexColors&&c.enable(10),U.vertexAlphas&&c.enable(11),U.vertexUv1s&&c.enable(12),U.vertexUv2s&&c.enable(13),U.vertexUv3s&&c.enable(14),U.vertexTangents&&c.enable(15),U.anisotropy&&c.enable(16),U.alphaHash&&c.enable(17),U.batching&&c.enable(18),U.dispersion&&c.enable(19),U.batchingColor&&c.enable(20),U.gradientMap&&c.enable(21),U.packedNormalMap&&c.enable(22),U.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.reversedDepthBuffer&&c.enable(4),U.skinning&&c.enable(5),U.morphTargets&&c.enable(6),U.morphNormals&&c.enable(7),U.morphColors&&c.enable(8),U.premultipliedAlpha&&c.enable(9),U.shadowMapEnabled&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.decodeVideoTextureEmissive&&c.enable(20),U.alphaToCoverage&&c.enable(21),U.numLightProbeGrids>0&&c.enable(22),E.push(c.mask)}function L(E){const U=_[E.type];let q;if(U){const H=tr[U];q=Ky.clone(H.uniforms)}else q=E.uniforms;return q}function P(E,U){let q=g.get(U);return q!==void 0?++q.usedTimes:(q=new xE(s,U,E,o),h.push(q),g.set(U,q)),q}function z(E){if(--E.usedTimes===0){const U=h.indexOf(E);h[U]=h[h.length-1],h.pop(),g.delete(E.cacheKey),E.destroy()}}function D(E){f.remove(E)}function O(){f.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:L,acquireProgram:P,releaseProgram:z,releaseShaderCache:D,programs:h,dispose:O}}function EE(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,d){s.get(c)[f]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function wE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function eg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function tg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(m){let _=0;return m.isInstancedMesh&&(_+=2),m.isSkinnedMesh&&(_+=1),_}function f(m,_,A,C,y,S){let T=s[e];return T===void 0?(T={id:m.id,object:m,geometry:_,material:A,materialVariant:c(m),groupOrder:C,renderOrder:m.renderOrder,z:y,group:S},s[e]=T):(T.id=m.id,T.object=m,T.geometry=_,T.material=A,T.materialVariant=c(m),T.groupOrder=C,T.renderOrder=m.renderOrder,T.z=y,T.group=S),e++,T}function d(m,_,A,C,y,S){const T=f(m,_,A,C,y,S);A.transmission>0?r.push(T):A.transparent===!0?o.push(T):t.push(T)}function h(m,_,A,C,y,S){const T=f(m,_,A,C,y,S);A.transmission>0?r.unshift(T):A.transparent===!0?o.unshift(T):t.unshift(T)}function g(m,_){t.length>1&&t.sort(m||wE),r.length>1&&r.sort(_||eg),o.length>1&&o.sort(_||eg)}function x(){for(let m=e,_=s.length;m<_;m++){const A=s[m];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:h,finish:x,sort:g}}function TE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new tg,s.set(r,[c])):o>=l.length?(c=new tg,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function bE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Wt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":t={color:new Wt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=t,t}}}function CE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let RE=0;function PE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function LE(s){const e=new bE,t=CE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new Z);const o=new Z,l=new un,c=new un;function f(h){let g=0,x=0,m=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let _=0,A=0,C=0,y=0,S=0,T=0,L=0,P=0,z=0,D=0,O=0;h.sort(PE);for(let U=0,q=h.length;U<q;U++){const H=h[U],F=H.color,W=H.intensity,ee=H.distance;let j=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===ws?j=H.shadow.map.texture:j=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=F.r*W,x+=F.g*W,m+=F.b*W;else if(H.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(H.sh.coefficients[re],W);O++}else if(H.isDirectionalLight){const re=e.get(H);if(re.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const G=H.shadow,X=t.get(H);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,r.directionalShadow[_]=X,r.directionalShadowMap[_]=j,r.directionalShadowMatrix[_]=H.shadow.matrix,T++}r.directional[_]=re,_++}else if(H.isSpotLight){const re=e.get(H);re.position.setFromMatrixPosition(H.matrixWorld),re.color.copy(F).multiplyScalar(W),re.distance=ee,re.coneCos=Math.cos(H.angle),re.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),re.decay=H.decay,r.spot[C]=re;const G=H.shadow;if(H.map&&(r.spotLightMap[z]=H.map,z++,G.updateMatrices(H),H.castShadow&&D++),r.spotLightMatrix[C]=G.matrix,H.castShadow){const X=t.get(H);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,r.spotShadow[C]=X,r.spotShadowMap[C]=j,P++}C++}else if(H.isRectAreaLight){const re=e.get(H);re.color.copy(F).multiplyScalar(W),re.halfWidth.set(H.width*.5,0,0),re.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=re,y++}else if(H.isPointLight){const re=e.get(H);if(re.color.copy(H.color).multiplyScalar(H.intensity),re.distance=H.distance,re.decay=H.decay,H.castShadow){const G=H.shadow,X=t.get(H);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,X.shadowCameraNear=G.camera.near,X.shadowCameraFar=G.camera.far,r.pointShadow[A]=X,r.pointShadowMap[A]=j,r.pointShadowMatrix[A]=H.shadow.matrix,L++}r.point[A]=re,A++}else if(H.isHemisphereLight){const re=e.get(H);re.skyColor.copy(H.color).multiplyScalar(W),re.groundColor.copy(H.groundColor).multiplyScalar(W),r.hemi[S]=re,S++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ke.LTC_FLOAT_1,r.rectAreaLTC2=Ke.LTC_FLOAT_2):(r.rectAreaLTC1=Ke.LTC_HALF_1,r.rectAreaLTC2=Ke.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=m;const E=r.hash;(E.directionalLength!==_||E.pointLength!==A||E.spotLength!==C||E.rectAreaLength!==y||E.hemiLength!==S||E.numDirectionalShadows!==T||E.numPointShadows!==L||E.numSpotShadows!==P||E.numSpotMaps!==z||E.numLightProbes!==O)&&(r.directional.length=_,r.spot.length=C,r.rectArea.length=y,r.point.length=A,r.hemi.length=S,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=P+z-D,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=O,E.directionalLength=_,E.pointLength=A,E.spotLength=C,E.rectAreaLength=y,E.hemiLength=S,E.numDirectionalShadows=T,E.numPointShadows=L,E.numSpotShadows=P,E.numSpotMaps=z,E.numLightProbes=O,r.version=RE++)}function d(h,g){let x=0,m=0,_=0,A=0,C=0;const y=g.matrixWorldInverse;for(let S=0,T=h.length;S<T;S++){const L=h[S];if(L.isDirectionalLight){const P=r.directional[x];P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),x++}else if(L.isSpotLight){const P=r.spot[_];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),_++}else if(L.isRectAreaLight){const P=r.rectArea[A];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),c.identity(),l.copy(L.matrixWorld),l.premultiply(y),c.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),A++}else if(L.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),m++}else if(L.isHemisphereLight){const P=r.hemi[C];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(y),C++}}}return{setup:f,setupView:d,state:r}}function ng(s){const e=new LE(s),t=[],r=[],o=[];function l(m){x.camera=m,t.length=0,r.length=0,o.length=0}function c(m){t.push(m)}function f(m){r.push(m)}function d(m){o.push(m)}function h(){e.setup(t)}function g(m){e.setupView(t,m)}const x={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:h,setupLightsView:g,pushLight:c,pushShadow:f,pushLightProbeGrid:d}}function IE(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new ng(s),e.set(o,[f])):l>=c.length?(f=new ng(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const DE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UE=`uniform sampler2D shadow_pass;
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
}`,NE=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],FE=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],ig=new un,ha=new Z,Gf=new Z;function kE(s,e,t){let r=new av;const o=new It,l=new It,c=new on,f=new Jy,d=new Zy,h={},g=t.maxTextureSize,x={[ts]:li,[li]:ts,[Gi]:Gi},m=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:DE,fragmentShader:UE}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const A=new dn;A.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Un(A,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let S=this.type;this.render=function(D,O,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;this.type===E_&&(xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=nc);const U=s.getRenderTarget(),q=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Sr),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=S!==this.type;W&&O.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(j=>j.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,j=D.length;ee<j;ee++){const re=D[ee],G=re.shadow;if(G===void 0){xt("WebGLShadowMap:",re,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const X=G.getFrameExtents();o.multiply(X),l.copy(G.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/X.x),o.x=l.x*X.x,G.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/X.y),o.y=l.y*X.y,G.mapSize.y=l.y));const k=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=k,G.map===null||W===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===va){if(re.isPointLight){xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new sr(o.x,o.y,{format:ws,type:Er,minFilter:bn,magFilter:bn,generateMipmaps:!1}),G.map.texture.name=re.name+".shadowMap",G.map.depthTexture=new So(o.x,o.y,Xi),G.map.depthTexture.name=re.name+".shadowMapDepth",G.map.depthTexture.format=wr,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=_n,G.map.depthTexture.magFilter=_n}else re.isPointLight?(G.map=new gv(o.x),G.map.depthTexture=new Gy(o.x,or)):(G.map=new sr(o.x,o.y),G.map.depthTexture=new So(o.x,o.y,or)),G.map.depthTexture.name=re.name+".shadowMap",G.map.depthTexture.format=wr,this.type===nc?(G.map.depthTexture.compareFunction=k?od:sd,G.map.depthTexture.minFilter=bn,G.map.depthTexture.magFilter=bn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=_n,G.map.depthTexture.magFilter=_n);G.camera.updateProjectionMatrix()}const ie=G.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<ie;N++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,N),s.clear();else{N===0&&(s.setRenderTarget(G.map),s.clear());const K=G.getViewport(N);c.set(l.x*K.x,l.y*K.y,l.x*K.z,l.y*K.w),F.viewport(c)}if(re.isPointLight){const K=G.camera,Ee=G.matrix,Me=re.distance||K.far;Me!==K.far&&(K.far=Me,K.updateProjectionMatrix()),ha.setFromMatrixPosition(re.matrixWorld),K.position.copy(ha),Gf.copy(K.position),Gf.add(NE[N]),K.up.copy(FE[N]),K.lookAt(Gf),K.updateMatrixWorld(),Ee.makeTranslation(-ha.x,-ha.y,-ha.z),ig.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),G._frustum.setFromProjectionMatrix(ig,K.coordinateSystem,K.reversedDepth)}else G.updateMatrices(re);r=G.getFrustum(),P(O,E,G.camera,re,this.type)}G.isPointLightShadow!==!0&&this.type===va&&T(G,E),G.needsUpdate=!1}S=this.type,y.needsUpdate=!1,s.setRenderTarget(U,q,H)};function T(D,O){const E=e.update(C);m.defines.VSM_SAMPLES!==D.blurSamples&&(m.defines.VSM_SAMPLES=D.blurSamples,_.defines.VSM_SAMPLES=D.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new sr(o.x,o.y,{format:ws,type:Er})),m.uniforms.shadow_pass.value=D.map.depthTexture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(O,null,E,m,C,null),_.uniforms.shadow_pass.value=D.mapPass.texture,_.uniforms.resolution.value=D.mapSize,_.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(O,null,E,_,C,null)}function L(D,O,E,U){let q=null;const H=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(H!==void 0)q=H;else if(q=E.isPointLight===!0?d:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const F=q.uuid,W=O.uuid;let ee=h[F];ee===void 0&&(ee={},h[F]=ee);let j=ee[W];j===void 0&&(j=q.clone(),ee[W]=j,O.addEventListener("dispose",z)),q=j}if(q.visible=O.visible,q.wireframe=O.wireframe,U===va?q.side=O.shadowSide!==null?O.shadowSide:O.side:q.side=O.shadowSide!==null?O.shadowSide:x[O.side],q.alphaMap=O.alphaMap,q.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,q.map=O.map,q.clipShadows=O.clipShadows,q.clippingPlanes=O.clippingPlanes,q.clipIntersection=O.clipIntersection,q.displacementMap=O.displacementMap,q.displacementScale=O.displacementScale,q.displacementBias=O.displacementBias,q.wireframeLinewidth=O.wireframeLinewidth,q.linewidth=O.linewidth,E.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const F=s.properties.get(q);F.light=E}return q}function P(D,O,E,U,q){if(D.visible===!1)return;if(D.layers.test(O.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&q===va)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const W=e.update(D),ee=D.material;if(Array.isArray(ee)){const j=W.groups;for(let re=0,G=j.length;re<G;re++){const X=j[re],k=ee[X.materialIndex];if(k&&k.visible){const ie=L(D,k,U,q);D.onBeforeShadow(s,D,O,E,W,ie,X),s.renderBufferDirect(E,null,W,ie,D,X),D.onAfterShadow(s,D,O,E,W,ie,X)}}}else if(ee.visible){const j=L(D,ee,U,q);D.onBeforeShadow(s,D,O,E,W,j,null),s.renderBufferDirect(E,null,W,j,D,null),D.onAfterShadow(s,D,O,E,W,j,null)}}const F=D.children;for(let W=0,ee=F.length;W<ee;W++)P(F[W],O,E,U,q)}function z(D){D.target.removeEventListener("dispose",z);for(const E in h){const U=h[E],q=D.target.uuid;q in U&&(U[q].dispose(),delete U[q])}}}function OE(s,e){function t(){let J=!1;const Ue=new on;let ye=null;const Xe=new on(0,0,0,0);return{setMask:function(Fe){ye!==Fe&&!J&&(s.colorMask(Fe,Fe,Fe,Fe),ye=Fe)},setLocked:function(Fe){J=Fe},setClear:function(Fe,Te,Je,gt,ft){ft===!0&&(Fe*=gt,Te*=gt,Je*=gt),Ue.set(Fe,Te,Je,gt),Xe.equals(Ue)===!1&&(s.clearColor(Fe,Te,Je,gt),Xe.copy(Ue))},reset:function(){J=!1,ye=null,Xe.set(-1,0,0,0)}}}function r(){let J=!1,Ue=!1,ye=null,Xe=null,Fe=null;return{setReversed:function(Te){if(Ue!==Te){const Je=e.get("EXT_clip_control");Te?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Ue=Te;const gt=Fe;Fe=null,this.setClear(gt)}},getReversed:function(){return Ue},setTest:function(Te){Te?oe(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Te){ye!==Te&&!J&&(s.depthMask(Te),ye=Te)},setFunc:function(Te){if(Ue&&(Te=iy[Te]),Xe!==Te){switch(Te){case rh:s.depthFunc(s.NEVER);break;case sh:s.depthFunc(s.ALWAYS);break;case oh:s.depthFunc(s.LESS);break;case yo:s.depthFunc(s.LEQUAL);break;case ah:s.depthFunc(s.EQUAL);break;case lh:s.depthFunc(s.GEQUAL);break;case ch:s.depthFunc(s.GREATER);break;case uh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Xe=Te}},setLocked:function(Te){J=Te},setClear:function(Te){Fe!==Te&&(Fe=Te,Ue&&(Te=1-Te),s.clearDepth(Te))},reset:function(){J=!1,ye=null,Xe=null,Fe=null,Ue=!1}}}function o(){let J=!1,Ue=null,ye=null,Xe=null,Fe=null,Te=null,Je=null,gt=null,ft=null;return{setTest:function(st){J||(st?oe(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(st){Ue!==st&&!J&&(s.stencilMask(st),Ue=st)},setFunc:function(st,Ot,Qt){(ye!==st||Xe!==Ot||Fe!==Qt)&&(s.stencilFunc(st,Ot,Qt),ye=st,Xe=Ot,Fe=Qt)},setOp:function(st,Ot,Qt){(Te!==st||Je!==Ot||gt!==Qt)&&(s.stencilOp(st,Ot,Qt),Te=st,Je=Ot,gt=Qt)},setLocked:function(st){J=st},setClear:function(st){ft!==st&&(s.clearStencil(st),ft=st)},reset:function(){J=!1,Ue=null,ye=null,Xe=null,Fe=null,Te=null,Je=null,gt=null,ft=null}}}const l=new t,c=new r,f=new o,d=new WeakMap,h=new WeakMap;let g={},x={},m={},_=new WeakMap,A=[],C=null,y=!1,S=null,T=null,L=null,P=null,z=null,D=null,O=null,E=new Wt(0,0,0),U=0,q=!1,H=null,F=null,W=null,ee=null,j=null;const re=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,X=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=X>=2);let ie=null,N={};const K=s.getParameter(s.SCISSOR_BOX),Ee=s.getParameter(s.VIEWPORT),Me=new on().fromArray(K),ve=new on().fromArray(Ee);function I(J,Ue,ye,Xe){const Fe=new Uint8Array(4),Te=s.createTexture();s.bindTexture(J,Te),s.texParameteri(J,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(J,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Je=0;Je<ye;Je++)J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?s.texImage3D(Ue,0,s.RGBA,1,1,Xe,0,s.RGBA,s.UNSIGNED_BYTE,Fe):s.texImage2D(Ue+Je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Fe);return Te}const ce={};ce[s.TEXTURE_2D]=I(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=I(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=I(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=I(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),oe(s.DEPTH_TEST),c.setFunc(yo),rt(!1),lt(Qm),oe(s.CULL_FACE),et(Sr);function oe(J){g[J]!==!0&&(s.enable(J),g[J]=!0)}function Ae(J){g[J]!==!1&&(s.disable(J),g[J]=!1)}function Se(J,Ue){return m[J]!==Ue?(s.bindFramebuffer(J,Ue),m[J]=Ue,J===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Ue),J===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Ue),!0):!1}function xe(J,Ue){let ye=A,Xe=!1;if(J){ye=_.get(Ue),ye===void 0&&(ye=[],_.set(Ue,ye));const Fe=J.textures;if(ye.length!==Fe.length||ye[0]!==s.COLOR_ATTACHMENT0){for(let Te=0,Je=Fe.length;Te<Je;Te++)ye[Te]=s.COLOR_ATTACHMENT0+Te;ye.length=Fe.length,Xe=!0}}else ye[0]!==s.BACK&&(ye[0]=s.BACK,Xe=!0);Xe&&s.drawBuffers(ye)}function Ye(J){return C!==J?(s.useProgram(J),C=J,!0):!1}const Ie={[ys]:s.FUNC_ADD,[T_]:s.FUNC_SUBTRACT,[b_]:s.FUNC_REVERSE_SUBTRACT};Ie[C_]=s.MIN,Ie[R_]=s.MAX;const He={[P_]:s.ZERO,[L_]:s.ONE,[I_]:s.SRC_COLOR,[nh]:s.SRC_ALPHA,[O_]:s.SRC_ALPHA_SATURATE,[F_]:s.DST_COLOR,[U_]:s.DST_ALPHA,[D_]:s.ONE_MINUS_SRC_COLOR,[ih]:s.ONE_MINUS_SRC_ALPHA,[k_]:s.ONE_MINUS_DST_COLOR,[N_]:s.ONE_MINUS_DST_ALPHA,[B_]:s.CONSTANT_COLOR,[z_]:s.ONE_MINUS_CONSTANT_COLOR,[H_]:s.CONSTANT_ALPHA,[V_]:s.ONE_MINUS_CONSTANT_ALPHA};function et(J,Ue,ye,Xe,Fe,Te,Je,gt,ft,st){if(J===Sr){y===!0&&(Ae(s.BLEND),y=!1);return}if(y===!1&&(oe(s.BLEND),y=!0),J!==w_){if(J!==S||st!==q){if((T!==ys||z!==ys)&&(s.blendEquation(s.FUNC_ADD),T=ys,z=ys),st)switch(J){case xo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jm:s.blendFunc(s.ONE,s.ONE);break;case Zm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $m:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Gt("WebGLState: Invalid blending: ",J);break}else switch(J){case xo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Zm:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $m:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",J);break}L=null,P=null,D=null,O=null,E.set(0,0,0),U=0,S=J,q=st}return}Fe=Fe||Ue,Te=Te||ye,Je=Je||Xe,(Ue!==T||Fe!==z)&&(s.blendEquationSeparate(Ie[Ue],Ie[Fe]),T=Ue,z=Fe),(ye!==L||Xe!==P||Te!==D||Je!==O)&&(s.blendFuncSeparate(He[ye],He[Xe],He[Te],He[Je]),L=ye,P=Xe,D=Te,O=Je),(gt.equals(E)===!1||ft!==U)&&(s.blendColor(gt.r,gt.g,gt.b,ft),E.copy(gt),U=ft),S=J,q=!1}function Ze(J,Ue){J.side===Gi?Ae(s.CULL_FACE):oe(s.CULL_FACE);let ye=J.side===li;Ue&&(ye=!ye),rt(ye),J.blending===xo&&J.transparent===!1?et(Sr):et(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),c.setFunc(J.depthFunc),c.setTest(J.depthTest),c.setMask(J.depthWrite),l.setMask(J.colorWrite);const Xe=J.stencilWrite;f.setTest(Xe),Xe&&(f.setMask(J.stencilWriteMask),f.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),f.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Y(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function rt(J){H!==J&&(J?s.frontFace(s.CW):s.frontFace(s.CCW),H=J)}function lt(J){J!==S_?(oe(s.CULL_FACE),J!==F&&(J===Qm?s.cullFace(s.BACK):J===A_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),F=J}function bt(J){J!==W&&(G&&s.lineWidth(J),W=J)}function Y(J,Ue,ye){J?(oe(s.POLYGON_OFFSET_FILL),(ee!==Ue||j!==ye)&&(ee=Ue,j=ye,c.getReversed()&&(Ue=-Ue),s.polygonOffset(Ue,ye))):Ae(s.POLYGON_OFFSET_FILL)}function At(J){J?oe(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function dt(J){J===void 0&&(J=s.TEXTURE0+re-1),ie!==J&&(s.activeTexture(J),ie=J)}function Tt(J,Ue,ye){ye===void 0&&(ie===null?ye=s.TEXTURE0+re-1:ye=ie);let Xe=N[ye];Xe===void 0&&(Xe={type:void 0,texture:void 0},N[ye]=Xe),(Xe.type!==J||Xe.texture!==Ue)&&(ie!==ye&&(s.activeTexture(ye),ie=ye),s.bindTexture(J,Ue||ce[J]),Xe.type=J,Xe.texture=Ue)}function ke(){const J=N[ie];J!==void 0&&J.type!==void 0&&(s.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function kt(){try{s.compressedTexImage2D(...arguments)}catch(J){Gt("WebGLState:",J)}}function w(){try{s.compressedTexImage3D(...arguments)}catch(J){Gt("WebGLState:",J)}}function M(){try{s.texSubImage2D(...arguments)}catch(J){Gt("WebGLState:",J)}}function Q(){try{s.texSubImage3D(...arguments)}catch(J){Gt("WebGLState:",J)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(J){Gt("WebGLState:",J)}}function _e(){try{s.compressedTexSubImage3D(...arguments)}catch(J){Gt("WebGLState:",J)}}function de(){try{s.texStorage2D(...arguments)}catch(J){Gt("WebGLState:",J)}}function we(){try{s.texStorage3D(...arguments)}catch(J){Gt("WebGLState:",J)}}function ge(){try{s.texImage2D(...arguments)}catch(J){Gt("WebGLState:",J)}}function me(){try{s.texImage3D(...arguments)}catch(J){Gt("WebGLState:",J)}}function Ve(J){return x[J]!==void 0?x[J]:s.getParameter(J)}function Ge(J,Ue){x[J]!==Ue&&(s.pixelStorei(J,Ue),x[J]=Ue)}function De(J){Me.equals(J)===!1&&(s.scissor(J.x,J.y,J.z,J.w),Me.copy(J))}function Le(J){ve.equals(J)===!1&&(s.viewport(J.x,J.y,J.z,J.w),ve.copy(J))}function tt(J,Ue){let ye=h.get(Ue);ye===void 0&&(ye=new WeakMap,h.set(Ue,ye));let Xe=ye.get(J);Xe===void 0&&(Xe=s.getUniformBlockIndex(Ue,J.name),ye.set(J,Xe))}function ut(J,Ue){const Xe=h.get(Ue).get(J);d.get(Ue)!==Xe&&(s.uniformBlockBinding(Ue,Xe,J.__bindingPointIndex),d.set(Ue,Xe))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},x={},ie=null,N={},m={},_=new WeakMap,A=[],C=null,y=!1,S=null,T=null,L=null,P=null,z=null,D=null,O=null,E=new Wt(0,0,0),U=0,q=!1,H=null,F=null,W=null,ee=null,j=null,Me.set(0,0,s.canvas.width,s.canvas.height),ve.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:oe,disable:Ae,bindFramebuffer:Se,drawBuffers:xe,useProgram:Ye,setBlending:et,setMaterial:Ze,setFlipSided:rt,setCullFace:lt,setLineWidth:bt,setPolygonOffset:Y,setScissorTest:At,activeTexture:dt,bindTexture:Tt,unbindTexture:ke,compressedTexImage2D:kt,compressedTexImage3D:w,texImage2D:ge,texImage3D:me,pixelStorei:Ge,getParameter:Ve,updateUBOMapping:tt,uniformBlockBinding:ut,texStorage2D:de,texStorage3D:we,texSubImage2D:M,texSubImage3D:Q,compressedTexSubImage2D:le,compressedTexSubImage3D:_e,scissor:De,viewport:Le,reset:ht}}function BE(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new It,g=new WeakMap,x=new Set;let m;const _=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(w,M){return A?new OffscreenCanvas(w,M):vc("canvas")}function y(w,M,Q){let le=1;const _e=kt(w);if((_e.width>Q||_e.height>Q)&&(le=Q/Math.max(_e.width,_e.height)),le<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const de=Math.floor(le*_e.width),we=Math.floor(le*_e.height);m===void 0&&(m=C(de,we));const ge=M?C(de,we):m;return ge.width=de,ge.height=we,ge.getContext("2d").drawImage(w,0,0,de,we),xt("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+de+"x"+we+")."),ge}else return"data"in w&&xt("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),w;return w}function S(w){return w.generateMipmaps}function T(w){s.generateMipmap(w)}function L(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(w,M,Q,le,_e,de=!1){if(w!==null){if(s[w]!==void 0)return s[w];xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let we;le&&(we=e.get("EXT_texture_norm16"),we||xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=M;if(M===s.RED&&(Q===s.FLOAT&&(ge=s.R32F),Q===s.HALF_FLOAT&&(ge=s.R16F),Q===s.UNSIGNED_BYTE&&(ge=s.R8),Q===s.UNSIGNED_SHORT&&we&&(ge=we.R16_EXT),Q===s.SHORT&&we&&(ge=we.R16_SNORM_EXT)),M===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ge=s.R8UI),Q===s.UNSIGNED_SHORT&&(ge=s.R16UI),Q===s.UNSIGNED_INT&&(ge=s.R32UI),Q===s.BYTE&&(ge=s.R8I),Q===s.SHORT&&(ge=s.R16I),Q===s.INT&&(ge=s.R32I)),M===s.RG&&(Q===s.FLOAT&&(ge=s.RG32F),Q===s.HALF_FLOAT&&(ge=s.RG16F),Q===s.UNSIGNED_BYTE&&(ge=s.RG8),Q===s.UNSIGNED_SHORT&&we&&(ge=we.RG16_EXT),Q===s.SHORT&&we&&(ge=we.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ge=s.RG8UI),Q===s.UNSIGNED_SHORT&&(ge=s.RG16UI),Q===s.UNSIGNED_INT&&(ge=s.RG32UI),Q===s.BYTE&&(ge=s.RG8I),Q===s.SHORT&&(ge=s.RG16I),Q===s.INT&&(ge=s.RG32I)),M===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ge=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(ge=s.RGB16UI),Q===s.UNSIGNED_INT&&(ge=s.RGB32UI),Q===s.BYTE&&(ge=s.RGB8I),Q===s.SHORT&&(ge=s.RGB16I),Q===s.INT&&(ge=s.RGB32I)),M===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(ge=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(ge=s.RGBA16UI),Q===s.UNSIGNED_INT&&(ge=s.RGBA32UI),Q===s.BYTE&&(ge=s.RGBA8I),Q===s.SHORT&&(ge=s.RGBA16I),Q===s.INT&&(ge=s.RGBA32I)),M===s.RGB&&(Q===s.UNSIGNED_SHORT&&we&&(ge=we.RGB16_EXT),Q===s.SHORT&&we&&(ge=we.RGB16_SNORM_EXT),Q===s.UNSIGNED_INT_5_9_9_9_REV&&(ge=s.RGB9_E5),Q===s.UNSIGNED_INT_10F_11F_11F_REV&&(ge=s.R11F_G11F_B10F)),M===s.RGBA){const me=de?mc:Ft.getTransfer(_e);Q===s.FLOAT&&(ge=s.RGBA32F),Q===s.HALF_FLOAT&&(ge=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(ge=me===Yt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT&&we&&(ge=we.RGBA16_EXT),Q===s.SHORT&&we&&(ge=we.RGBA16_SNORM_EXT),Q===s.UNSIGNED_SHORT_4_4_4_4&&(ge=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(ge=s.RGB5_A1)}return(ge===s.R16F||ge===s.R32F||ge===s.RG16F||ge===s.RG32F||ge===s.RGBA16F||ge===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function z(w,M){let Q;return w?M===null||M===or||M===Aa?Q=s.DEPTH24_STENCIL8:M===Xi?Q=s.DEPTH32F_STENCIL8:M===Sa&&(Q=s.DEPTH24_STENCIL8,xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===or||M===Aa?Q=s.DEPTH_COMPONENT24:M===Xi?Q=s.DEPTH_COMPONENT32F:M===Sa&&(Q=s.DEPTH_COMPONENT16),Q}function D(w,M){return S(w)===!0||w.isFramebufferTexture&&w.minFilter!==_n&&w.minFilter!==bn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function O(w){const M=w.target;M.removeEventListener("dispose",O),U(M),M.isVideoTexture&&g.delete(M),M.isHTMLTexture&&x.delete(M)}function E(w){const M=w.target;M.removeEventListener("dispose",E),H(M)}function U(w){const M=r.get(w);if(M.__webglInit===void 0)return;const Q=w.source,le=_.get(Q);if(le){const _e=le[M.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&q(w),Object.keys(le).length===0&&_.delete(Q)}r.remove(w)}function q(w){const M=r.get(w);s.deleteTexture(M.__webglTexture);const Q=w.source,le=_.get(Q);delete le[M.__cacheKey],c.memory.textures--}function H(w){const M=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(M.__webglFramebuffer[le]))for(let _e=0;_e<M.__webglFramebuffer[le].length;_e++)s.deleteFramebuffer(M.__webglFramebuffer[le][_e]);else s.deleteFramebuffer(M.__webglFramebuffer[le]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[le])}else{if(Array.isArray(M.__webglFramebuffer))for(let le=0;le<M.__webglFramebuffer.length;le++)s.deleteFramebuffer(M.__webglFramebuffer[le]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let le=0;le<M.__webglColorRenderbuffer.length;le++)M.__webglColorRenderbuffer[le]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[le]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Q=w.textures;for(let le=0,_e=Q.length;le<_e;le++){const de=r.get(Q[le]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),c.memory.textures--),r.remove(Q[le])}r.remove(w)}let F=0;function W(){F=0}function ee(){return F}function j(w){F=w}function re(){const w=F;return w>=o.maxTextures&&xt("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+o.maxTextures),F+=1,w}function G(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function X(w,M){const Q=r.get(w);if(w.isVideoTexture&&Tt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&Q.__version!==w.version){const le=w.image;if(le===null)xt("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(Q,w,M);return}}else w.isExternalTexture&&(Q.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+M)}function k(w,M){const Q=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&Q.__version!==w.version){Ae(Q,w,M);return}else w.isExternalTexture&&(Q.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+M)}function ie(w,M){const Q=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&Q.__version!==w.version){Ae(Q,w,M);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+M)}function N(w,M){const Q=r.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&Q.__version!==w.version){Se(Q,w,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+M)}const K={[fc]:s.REPEAT,[Mr]:s.CLAMP_TO_EDGE,[fh]:s.MIRRORED_REPEAT},Ee={[_n]:s.NEAREST,[X_]:s.NEAREST_MIPMAP_NEAREST,[Cl]:s.NEAREST_MIPMAP_LINEAR,[bn]:s.LINEAR,[ff]:s.LINEAR_MIPMAP_NEAREST,[Ss]:s.LINEAR_MIPMAP_LINEAR},Me={[q_]:s.NEVER,[$_]:s.ALWAYS,[Y_]:s.LESS,[sd]:s.LEQUAL,[Q_]:s.EQUAL,[od]:s.GEQUAL,[J_]:s.GREATER,[Z_]:s.NOTEQUAL};function ve(w,M){if(M.type===Xi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===bn||M.magFilter===ff||M.magFilter===Cl||M.magFilter===Ss||M.minFilter===bn||M.minFilter===ff||M.minFilter===Cl||M.minFilter===Ss)&&xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,K[M.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,K[M.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,K[M.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,Ee[M.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,Ee[M.minFilter]),M.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,Me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===_n||M.minFilter!==Cl&&M.minFilter!==Ss||M.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function I(w,M){let Q=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",O));const le=M.source;let _e=_.get(le);_e===void 0&&(_e={},_.set(le,_e));const de=G(M);if(de!==w.__cacheKey){_e[de]===void 0&&(_e[de]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),_e[de].usedTimes++;const we=_e[w.__cacheKey];we!==void 0&&(_e[w.__cacheKey].usedTimes--,we.usedTimes===0&&q(M)),w.__cacheKey=de,w.__webglTexture=_e[de].texture}return Q}function ce(w,M,Q){return Math.floor(Math.floor(w/Q)/M)}function oe(w,M,Q,le){const de=w.updateRanges;if(de.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,Q,le,M.data);else{de.sort((Ge,De)=>Ge.start-De.start);let we=0;for(let Ge=1;Ge<de.length;Ge++){const De=de[we],Le=de[Ge],tt=De.start+De.count,ut=ce(Le.start,M.width,4),ht=ce(De.start,M.width,4);Le.start<=tt+1&&ut===ht&&ce(Le.start+Le.count-1,M.width,4)===ut?De.count=Math.max(De.count,Le.start+Le.count-De.start):(++we,de[we]=Le)}de.length=we+1;const ge=t.getParameter(s.UNPACK_ROW_LENGTH),me=t.getParameter(s.UNPACK_SKIP_PIXELS),Ve=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Ge=0,De=de.length;Ge<De;Ge++){const Le=de[Ge],tt=Math.floor(Le.start/4),ut=Math.ceil(Le.count/4),ht=tt%M.width,J=Math.floor(tt/M.width),Ue=ut,ye=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),t.pixelStorei(s.UNPACK_SKIP_ROWS,J),t.texSubImage2D(s.TEXTURE_2D,0,ht,J,Ue,ye,Q,le,M.data)}w.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ge),t.pixelStorei(s.UNPACK_SKIP_PIXELS,me),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ve)}}function Ae(w,M,Q){let le=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=s.TEXTURE_3D);const _e=I(w,M),de=M.source;t.bindTexture(le,w.__webglTexture,s.TEXTURE0+Q);const we=r.get(de);if(de.version!==we.__version||_e===!0){if(t.activeTexture(s.TEXTURE0+Q),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ye=Ft.getPrimaries(Ft.workingColorSpace),Xe=M.colorSpace===$r?null:Ft.getPrimaries(M.colorSpace),Fe=M.colorSpace===$r||ye===Xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let me=y(M.image,!1,o.maxTextureSize);me=ke(M,me);const Ve=l.convert(M.format,M.colorSpace),Ge=l.convert(M.type);let De=P(M.internalFormat,Ve,Ge,M.normalized,M.colorSpace,M.isVideoTexture);ve(le,M);let Le;const tt=M.mipmaps,ut=M.isVideoTexture!==!0,ht=we.__version===void 0||_e===!0,J=de.dataReady,Ue=D(M,me);if(M.isDepthTexture)De=z(M.format===As,M.type),ht&&(ut?t.texStorage2D(s.TEXTURE_2D,1,De,me.width,me.height):t.texImage2D(s.TEXTURE_2D,0,De,me.width,me.height,0,Ve,Ge,null));else if(M.isDataTexture)if(tt.length>0){ut&&ht&&t.texStorage2D(s.TEXTURE_2D,Ue,De,tt[0].width,tt[0].height);for(let ye=0,Xe=tt.length;ye<Xe;ye++)Le=tt[ye],ut?J&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,Le.width,Le.height,Ve,Ge,Le.data):t.texImage2D(s.TEXTURE_2D,ye,De,Le.width,Le.height,0,Ve,Ge,Le.data);M.generateMipmaps=!1}else ut?(ht&&t.texStorage2D(s.TEXTURE_2D,Ue,De,me.width,me.height),J&&oe(M,me,Ve,Ge)):t.texImage2D(s.TEXTURE_2D,0,De,me.width,me.height,0,Ve,Ge,me.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ut&&ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,De,tt[0].width,tt[0].height,me.depth);for(let ye=0,Xe=tt.length;ye<Xe;ye++)if(Le=tt[ye],M.format!==Pi)if(Ve!==null)if(ut){if(J)if(M.layerUpdates.size>0){const Fe=U0(Le.width,Le.height,M.format,M.type);for(const Te of M.layerUpdates){const Je=Le.data.subarray(Te*Fe/Le.data.BYTES_PER_ELEMENT,(Te+1)*Fe/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,Te,Le.width,Le.height,1,Ve,Je)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,Le.width,Le.height,me.depth,Ve,Le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,De,Le.width,Le.height,me.depth,0,Le.data,0,0);else xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?J&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,Le.width,Le.height,me.depth,Ve,Ge,Le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ye,De,Le.width,Le.height,me.depth,0,Ve,Ge,Le.data)}else{ut&&ht&&t.texStorage2D(s.TEXTURE_2D,Ue,De,tt[0].width,tt[0].height);for(let ye=0,Xe=tt.length;ye<Xe;ye++)Le=tt[ye],M.format!==Pi?Ve!==null?ut?J&&t.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,Le.width,Le.height,Ve,Le.data):t.compressedTexImage2D(s.TEXTURE_2D,ye,De,Le.width,Le.height,0,Le.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?J&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,Le.width,Le.height,Ve,Ge,Le.data):t.texImage2D(s.TEXTURE_2D,ye,De,Le.width,Le.height,0,Ve,Ge,Le.data)}else if(M.isDataArrayTexture)if(ut){if(ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,De,me.width,me.height,me.depth),J)if(M.layerUpdates.size>0){const ye=U0(me.width,me.height,M.format,M.type);for(const Xe of M.layerUpdates){const Fe=me.data.subarray(Xe*ye/me.data.BYTES_PER_ELEMENT,(Xe+1)*ye/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Xe,me.width,me.height,1,Ve,Ge,Fe)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ve,Ge,me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,De,me.width,me.height,me.depth,0,Ve,Ge,me.data);else if(M.isData3DTexture)ut?(ht&&t.texStorage3D(s.TEXTURE_3D,Ue,De,me.width,me.height,me.depth),J&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ve,Ge,me.data)):t.texImage3D(s.TEXTURE_3D,0,De,me.width,me.height,me.depth,0,Ve,Ge,me.data);else if(M.isFramebufferTexture){if(ht)if(ut)t.texStorage2D(s.TEXTURE_2D,Ue,De,me.width,me.height);else{let ye=me.width,Xe=me.height;for(let Fe=0;Fe<Ue;Fe++)t.texImage2D(s.TEXTURE_2D,Fe,De,ye,Xe,0,Ve,Ge,null),ye>>=1,Xe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const ye=s.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),me.parentNode!==ye){ye.appendChild(me),x.add(M),ye.onpaint=gt=>{const ft=gt.changedElements;for(const st of x)ft.includes(st.image)&&(st.needsUpdate=!0)},ye.requestPaint();return}const Xe=0,Fe=s.RGBA,Te=s.RGBA,Je=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Xe,Fe,Te,Je,me),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(tt.length>0){if(ut&&ht){const ye=kt(tt[0]);t.texStorage2D(s.TEXTURE_2D,Ue,De,ye.width,ye.height)}for(let ye=0,Xe=tt.length;ye<Xe;ye++)Le=tt[ye],ut?J&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,Ve,Ge,Le):t.texImage2D(s.TEXTURE_2D,ye,De,Ve,Ge,Le);M.generateMipmaps=!1}else if(ut){if(ht){const ye=kt(me);t.texStorage2D(s.TEXTURE_2D,Ue,De,ye.width,ye.height)}J&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ve,Ge,me)}else t.texImage2D(s.TEXTURE_2D,0,De,Ve,Ge,me);S(M)&&T(le),we.__version=de.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Se(w,M,Q){if(M.image.length!==6)return;const le=I(w,M),_e=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+Q);const de=r.get(_e);if(_e.version!==de.__version||le===!0){t.activeTexture(s.TEXTURE0+Q);const we=Ft.getPrimaries(Ft.workingColorSpace),ge=M.colorSpace===$r?null:Ft.getPrimaries(M.colorSpace),me=M.colorSpace===$r||we===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ve=M.isCompressedTexture||M.image[0].isCompressedTexture,Ge=M.image[0]&&M.image[0].isDataTexture,De=[];for(let Te=0;Te<6;Te++)!Ve&&!Ge?De[Te]=y(M.image[Te],!0,o.maxCubemapSize):De[Te]=Ge?M.image[Te].image:M.image[Te],De[Te]=ke(M,De[Te]);const Le=De[0],tt=l.convert(M.format,M.colorSpace),ut=l.convert(M.type),ht=P(M.internalFormat,tt,ut,M.normalized,M.colorSpace),J=M.isVideoTexture!==!0,Ue=de.__version===void 0||le===!0,ye=_e.dataReady;let Xe=D(M,Le);ve(s.TEXTURE_CUBE_MAP,M);let Fe;if(Ve){J&&Ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Xe,ht,Le.width,Le.height);for(let Te=0;Te<6;Te++){Fe=De[Te].mipmaps;for(let Je=0;Je<Fe.length;Je++){const gt=Fe[Je];M.format!==Pi?tt!==null?J?ye&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je,0,0,gt.width,gt.height,tt,gt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je,ht,gt.width,gt.height,0,gt.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je,0,0,gt.width,gt.height,tt,ut,gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je,ht,gt.width,gt.height,0,tt,ut,gt.data)}}}else{if(Fe=M.mipmaps,J&&Ue){Fe.length>0&&Xe++;const Te=kt(De[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Xe,ht,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(Ge){J?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,De[Te].width,De[Te].height,tt,ut,De[Te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ht,De[Te].width,De[Te].height,0,tt,ut,De[Te].data);for(let Je=0;Je<Fe.length;Je++){const ft=Fe[Je].image[Te].image;J?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je+1,0,0,ft.width,ft.height,tt,ut,ft.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je+1,ht,ft.width,ft.height,0,tt,ut,ft.data)}}else{J?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,tt,ut,De[Te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ht,tt,ut,De[Te]);for(let Je=0;Je<Fe.length;Je++){const gt=Fe[Je];J?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je+1,0,0,tt,ut,gt.image[Te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je+1,ht,tt,ut,gt.image[Te])}}}S(M)&&T(s.TEXTURE_CUBE_MAP),de.__version=_e.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function xe(w,M,Q,le,_e,de){const we=l.convert(Q.format,Q.colorSpace),ge=l.convert(Q.type),me=P(Q.internalFormat,we,ge,Q.normalized,Q.colorSpace),Ve=r.get(M),Ge=r.get(Q);if(Ge.__renderTarget=M,!Ve.__hasExternalTextures){const De=Math.max(1,M.width>>de),Le=Math.max(1,M.height>>de);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,de,me,De,Le,M.depth,0,we,ge,null):t.texImage2D(_e,de,me,De,Le,0,we,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),dt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,_e,Ge.__webglTexture,0,At(M)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,le,_e,Ge.__webglTexture,de),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(w,M,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,w),M.depthBuffer){const le=M.depthTexture,_e=le&&le.isDepthTexture?le.type:null,de=z(M.stencilBuffer,_e),we=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;dt(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At(M),de,M.width,M.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,At(M),de,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,de,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,w)}else{const le=M.textures;for(let _e=0;_e<le.length;_e++){const de=le[_e],we=l.convert(de.format,de.colorSpace),ge=l.convert(de.type),me=P(de.internalFormat,we,ge,de.normalized,de.colorSpace);dt(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At(M),me,M.width,M.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,At(M),me,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,me,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(w,M,Q){const le=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=r.get(M.depthTexture);if(_e.__renderTarget=M,(!_e.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),le){if(_e.__webglInit===void 0&&(_e.__webglInit=!0,M.depthTexture.addEventListener("dispose",O)),_e.__webglTexture===void 0){_e.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),ve(s.TEXTURE_CUBE_MAP,M.depthTexture);const Ve=l.convert(M.depthTexture.format),Ge=l.convert(M.depthTexture.type);let De;M.depthTexture.format===wr?De=s.DEPTH_COMPONENT24:M.depthTexture.format===As&&(De=s.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,De,M.width,M.height,0,Ve,Ge,null)}}else X(M.depthTexture,0);const de=_e.__webglTexture,we=At(M),ge=le?s.TEXTURE_CUBE_MAP_POSITIVE_X+Q:s.TEXTURE_2D,me=M.depthTexture.format===As?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===wr)dt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ge,de,0,we):s.framebufferTexture2D(s.FRAMEBUFFER,me,ge,de,0);else if(M.depthTexture.format===As)dt(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ge,de,0,we):s.framebufferTexture2D(s.FRAMEBUFFER,me,ge,de,0);else throw new Error("Unknown depthTexture format")}function He(w){const M=r.get(w),Q=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const le=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),le){const _e=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,le.removeEventListener("dispose",_e)};le.addEventListener("dispose",_e),M.__depthDisposeCallback=_e}M.__boundDepthTexture=le}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(Q)for(let le=0;le<6;le++)Ie(M.__webglFramebuffer[le],w,le);else{const le=w.texture.mipmaps;le&&le.length>0?Ie(M.__webglFramebuffer[0],w,0):Ie(M.__webglFramebuffer,w,0)}else if(Q){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]===void 0)M.__webglDepthbuffer[le]=s.createRenderbuffer(),Ye(M.__webglDepthbuffer[le],w,!1);else{const _e=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer[le];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,de)}}else{const le=w.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Ye(M.__webglDepthbuffer,w,!1);else{const _e=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,de)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function et(w,M,Q){const le=r.get(w);M!==void 0&&xe(le.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&He(w)}function Ze(w){const M=w.texture,Q=r.get(w),le=r.get(M);w.addEventListener("dispose",E);const _e=w.textures,de=w.isWebGLCubeRenderTarget===!0,we=_e.length>1;if(we||(le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture()),le.__version=M.version,c.memory.textures++),de){Q.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer[ge]=[];for(let me=0;me<M.mipmaps.length;me++)Q.__webglFramebuffer[ge][me]=s.createFramebuffer()}else Q.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ge=0;ge<M.mipmaps.length;ge++)Q.__webglFramebuffer[ge]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(we)for(let ge=0,me=_e.length;ge<me;ge++){const Ve=r.get(_e[ge]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=s.createTexture(),c.memory.textures++)}if(w.samples>0&&dt(w)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ge=0;ge<_e.length;ge++){const me=_e[ge];Q.__webglColorRenderbuffer[ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[ge]);const Ve=l.convert(me.format,me.colorSpace),Ge=l.convert(me.type),De=P(me.internalFormat,Ve,Ge,me.normalized,me.colorSpace,w.isXRRenderTarget===!0),Le=At(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,De,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,Q.__webglColorRenderbuffer[ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),Ye(Q.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){t.bindTexture(s.TEXTURE_CUBE_MAP,le.__webglTexture),ve(s.TEXTURE_CUBE_MAP,M);for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)xe(Q.__webglFramebuffer[ge][me],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,me);else xe(Q.__webglFramebuffer[ge],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);S(M)&&T(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ge=0,me=_e.length;ge<me;ge++){const Ve=_e[ge],Ge=r.get(Ve);let De=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(De=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(De,Ge.__webglTexture),ve(De,Ve),xe(Q.__webglFramebuffer,w,Ve,s.COLOR_ATTACHMENT0+ge,De,0),S(Ve)&&T(De)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ge=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,le.__webglTexture),ve(ge,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)xe(Q.__webglFramebuffer[me],w,M,s.COLOR_ATTACHMENT0,ge,me);else xe(Q.__webglFramebuffer,w,M,s.COLOR_ATTACHMENT0,ge,0);S(M)&&T(ge),t.unbindTexture()}w.depthBuffer&&He(w)}function rt(w){const M=w.textures;for(let Q=0,le=M.length;Q<le;Q++){const _e=M[Q];if(S(_e)){const de=L(w),we=r.get(_e).__webglTexture;t.bindTexture(de,we),T(de),t.unbindTexture()}}}const lt=[],bt=[];function Y(w){if(w.samples>0){if(dt(w)===!1){const M=w.textures,Q=w.width,le=w.height;let _e=s.COLOR_BUFFER_BIT;const de=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=r.get(w),ge=M.length>1;if(ge)for(let Ve=0;Ve<M.length;Ve++)t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const me=w.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ve=0;Ve<M.length;Ve++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),ge){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[Ve]);const Ge=r.get(M[Ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ge,0)}s.blitFramebuffer(0,0,Q,le,0,0,Q,le,_e,s.NEAREST),d===!0&&(lt.length=0,bt.length=0,lt.push(s.COLOR_ATTACHMENT0+Ve),w.depthBuffer&&w.resolveDepthBuffer===!1&&(lt.push(de),bt.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,bt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let Ve=0;Ve<M.length;Ve++){t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.RENDERBUFFER,we.__webglColorRenderbuffer[Ve]);const Ge=r.get(M[Ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ve,s.TEXTURE_2D,Ge,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&d){const M=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function At(w){return Math.min(o.maxSamples,w.samples)}function dt(w){const M=r.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Tt(w){const M=c.render.frame;g.get(w)!==M&&(g.set(w,M),w.update())}function ke(w,M){const Q=w.colorSpace,le=w.format,_e=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||Q!==pc&&Q!==$r&&(Ft.getTransfer(Q)===Yt?(le!==Pi||_e!==Ri)&&xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",Q)),M}function kt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=re,this.resetTextureUnits=W,this.getTextureUnits=ee,this.setTextureUnits=j,this.setTexture2D=X,this.setTexture2DArray=k,this.setTexture3D=ie,this.setTextureCube=N,this.rebindTextures=et,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function zE(s,e){function t(r,o=$r){let l;const c=Ft.getTransfer(o);if(r===Ri)return s.UNSIGNED_BYTE;if(r===ed)return s.UNSIGNED_SHORT_4_4_4_4;if(r===td)return s.UNSIGNED_SHORT_5_5_5_1;if(r===qg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Yg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===jg)return s.BYTE;if(r===Kg)return s.SHORT;if(r===Sa)return s.UNSIGNED_SHORT;if(r===$h)return s.INT;if(r===or)return s.UNSIGNED_INT;if(r===Xi)return s.FLOAT;if(r===Er)return s.HALF_FLOAT;if(r===Qg)return s.ALPHA;if(r===Jg)return s.RGB;if(r===Pi)return s.RGBA;if(r===wr)return s.DEPTH_COMPONENT;if(r===As)return s.DEPTH_STENCIL;if(r===Zg)return s.RED;if(r===nd)return s.RED_INTEGER;if(r===ws)return s.RG;if(r===id)return s.RG_INTEGER;if(r===rd)return s.RGBA_INTEGER;if(r===ic||r===rc||r===sc||r===oc)if(c===Yt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===ic)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===rc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===sc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===oc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===ic)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===rc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===sc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===oc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hh||r===dh||r===ph||r===mh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===hh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===dh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ph)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===mh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gh||r===vh||r===xh||r===_h||r===yh||r===hc||r===Mh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===gh||r===vh)return c===Yt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===xh)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===_h)return l.COMPRESSED_R11_EAC;if(r===yh)return l.COMPRESSED_SIGNED_R11_EAC;if(r===hc)return l.COMPRESSED_RG11_EAC;if(r===Mh)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Sh||r===Ah||r===Eh||r===wh||r===Th||r===bh||r===Ch||r===Rh||r===Ph||r===Lh||r===Ih||r===Dh||r===Uh||r===Nh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Sh)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ah)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Eh)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===wh)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Th)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bh)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ch)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Rh)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ph)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Lh)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ih)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Dh)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Uh)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Nh)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fh||r===kh||r===Oh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Fh)return c===Yt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Oh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Bh||r===zh||r===dc||r===Hh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Bh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===zh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===dc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Hh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Aa?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const HE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VE=`
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

}`;class GE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new fv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new gi({vertexShader:HE,fragmentShader:VE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Un(new wc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WE extends Cs{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",d=1,h=null,g=null,x=null,m=null,_=null,A=null;const C=typeof XRWebGLBinding<"u",y=new GE,S={},T=t.getContextAttributes();let L=null,P=null;const z=[],D=[],O=new It;let E=null;const U=new ai;U.viewport=new on;const q=new ai;q.viewport=new on;const H=[U,q],F=new eM;let W=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let ce=z[I];return ce===void 0&&(ce=new vf,z[I]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(I){let ce=z[I];return ce===void 0&&(ce=new vf,z[I]=ce),ce.getGripSpace()},this.getHand=function(I){let ce=z[I];return ce===void 0&&(ce=new vf,z[I]=ce),ce.getHandSpace()};function j(I){const ce=D.indexOf(I.inputSource);if(ce===-1)return;const oe=z[ce];oe!==void 0&&(oe.update(I.inputSource,I.frame,h||c),oe.dispatchEvent({type:I.type,data:I.inputSource}))}function re(){o.removeEventListener("select",j),o.removeEventListener("selectstart",j),o.removeEventListener("selectend",j),o.removeEventListener("squeeze",j),o.removeEventListener("squeezestart",j),o.removeEventListener("squeezeend",j),o.removeEventListener("end",re),o.removeEventListener("inputsourceschange",G);for(let I=0;I<z.length;I++){const ce=D[I];ce!==null&&(D[I]=null,z[I].disconnect(ce))}W=null,ee=null,y.reset();for(const I in S)delete S[I];e.setRenderTarget(L),_=null,m=null,x=null,o=null,P=null,ve.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){l=I,r.isPresenting===!0&&xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){f=I,r.isPresenting===!0&&xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(I){h=I},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(o,t)),x},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(I){if(o=I,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",j),o.addEventListener("selectstart",j),o.addEventListener("selectend",j),o.addEventListener("squeeze",j),o.addEventListener("squeezestart",j),o.addEventListener("squeezeend",j),o.addEventListener("end",re),o.addEventListener("inputsourceschange",G),T.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Ae=null,Se=null;T.depth&&(Se=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=T.stencil?As:wr,Ae=T.stencil?Aa:or);const xe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:l};x=this.getBinding(),m=x.createProjectionLayer(xe),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),P=new sr(m.textureWidth,m.textureHeight,{format:Pi,type:Ri,depthTexture:new So(m.textureWidth,m.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const oe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:l};_=new XRWebGLLayer(o,t,oe),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),P=new sr(_.framebufferWidth,_.framebufferHeight,{format:Pi,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(f),ve.setContext(o),ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(I){for(let ce=0;ce<I.removed.length;ce++){const oe=I.removed[ce],Ae=D.indexOf(oe);Ae>=0&&(D[Ae]=null,z[Ae].disconnect(oe))}for(let ce=0;ce<I.added.length;ce++){const oe=I.added[ce];let Ae=D.indexOf(oe);if(Ae===-1){for(let xe=0;xe<z.length;xe++)if(xe>=D.length){D.push(oe),Ae=xe;break}else if(D[xe]===null){D[xe]=oe,Ae=xe;break}if(Ae===-1)break}const Se=z[Ae];Se&&Se.connect(oe)}}const X=new Z,k=new Z;function ie(I,ce,oe){X.setFromMatrixPosition(ce.matrixWorld),k.setFromMatrixPosition(oe.matrixWorld);const Ae=X.distanceTo(k),Se=ce.projectionMatrix.elements,xe=oe.projectionMatrix.elements,Ye=Se[14]/(Se[10]-1),Ie=Se[14]/(Se[10]+1),He=(Se[9]+1)/Se[5],et=(Se[9]-1)/Se[5],Ze=(Se[8]-1)/Se[0],rt=(xe[8]+1)/xe[0],lt=Ye*Ze,bt=Ye*rt,Y=Ae/(-Ze+rt),At=Y*-Ze;if(ce.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(At),I.translateZ(Y),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),Se[10]===-1)I.projectionMatrix.copy(ce.projectionMatrix),I.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const dt=Ye+Y,Tt=Ie+Y,ke=lt-At,kt=bt+(Ae-At),w=He*Ie/Tt*dt,M=et*Ie/Tt*dt;I.projectionMatrix.makePerspective(ke,kt,w,M,dt,Tt),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function N(I,ce){ce===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(ce.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(o===null)return;let ce=I.near,oe=I.far;y.texture!==null&&(y.depthNear>0&&(ce=y.depthNear),y.depthFar>0&&(oe=y.depthFar)),F.near=q.near=U.near=ce,F.far=q.far=U.far=oe,(W!==F.near||ee!==F.far)&&(o.updateRenderState({depthNear:F.near,depthFar:F.far}),W=F.near,ee=F.far),F.layers.mask=I.layers.mask|6,U.layers.mask=F.layers.mask&-5,q.layers.mask=F.layers.mask&-3;const Ae=I.parent,Se=F.cameras;N(F,Ae);for(let xe=0;xe<Se.length;xe++)N(Se[xe],Ae);Se.length===2?ie(F,U,q):F.projectionMatrix.copy(U.projectionMatrix),K(I,F,Ae)};function K(I,ce,oe){oe===null?I.matrix.copy(ce.matrixWorld):(I.matrix.copy(oe.matrixWorld),I.matrix.invert(),I.matrix.multiply(ce.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(ce.projectionMatrix),I.projectionMatrixInverse.copy(ce.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Ea*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(m===null&&_===null))return d},this.setFoveation=function(I){d=I,m!==null&&(m.fixedFoveation=I),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=I)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(F)},this.getCameraTexture=function(I){return S[I]};let Ee=null;function Me(I,ce){if(g=ce.getViewerPose(h||c),A=ce,g!==null){const oe=g.views;_!==null&&(e.setRenderTargetFramebuffer(P,_.framebuffer),e.setRenderTarget(P));let Ae=!1;oe.length!==F.cameras.length&&(F.cameras.length=0,Ae=!0);for(let Ie=0;Ie<oe.length;Ie++){const He=oe[Ie];let et=null;if(_!==null)et=_.getViewport(He);else{const rt=x.getViewSubImage(m,He);et=rt.viewport,Ie===0&&(e.setRenderTargetTextures(P,rt.colorTexture,rt.depthStencilTexture),e.setRenderTarget(P))}let Ze=H[Ie];Ze===void 0&&(Ze=new ai,Ze.layers.enable(Ie),Ze.viewport=new on,H[Ie]=Ze),Ze.matrix.fromArray(He.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(He.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(et.x,et.y,et.width,et.height),Ie===0&&(F.matrix.copy(Ze.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ae===!0&&F.cameras.push(Ze)}const Se=o.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){x=r.getBinding();const Ie=x.getDepthInformation(oe[0]);Ie&&Ie.isValid&&Ie.texture&&y.init(Ie,o.renderState)}if(Se&&Se.includes("camera-access")&&C){e.state.unbindTexture(),x=r.getBinding();for(let Ie=0;Ie<oe.length;Ie++){const He=oe[Ie].camera;if(He){let et=S[He];et||(et=new fv,S[He]=et);const Ze=x.getCameraImage(He);et.sourceTexture=Ze}}}}for(let oe=0;oe<z.length;oe++){const Ae=D[oe],Se=z[oe];Ae!==null&&Se!==void 0&&Se.update(Ae,ce,h||c)}Ee&&Ee(I,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),A=null}const ve=new pv;ve.setAnimationLoop(Me),this.setAnimationLoop=function(I){Ee=I},this.dispose=function(){}}}const XE=new un,Mv=new wt;Mv.set(-1,0,0,0,1,0,0,0,1);function jE(s,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,hv(s)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,T,L,P){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),x(y,S)):S.isMeshPhongMaterial?(l(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),m(y,S),S.isMeshPhysicalMaterial&&_(y,S,P)):S.isMeshMatcapMaterial?(l(y,S),A(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),C(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?d(y,S,T,L):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===li&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===li&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const T=e.get(S),L=T.envMap,P=T.envMapRotation;L&&(y.envMap.value=L,y.envMapRotation.value.setFromMatrix4(XE.makeRotationFromEuler(P)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Mv),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function d(y,S,T,L){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*T,y.scale.value=L*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function m(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function _(y,S,T){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===li&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=T.texture,y.transmissionSamplerSize.value.set(T.width,T.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const T=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(T.matrixWorld),y.nearDistance.value=T.shadow.camera.near,y.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function KE(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(T,L){const P=L.program;r.uniformBlockBinding(T,P)}function h(T,L){let P=o[T.id];P===void 0&&(A(T),P=g(T),o[T.id]=P,T.addEventListener("dispose",y));const z=L.program;r.updateUBOMapping(T,z);const D=e.render.frame;l[T.id]!==D&&(m(T),l[T.id]=D)}function g(T){const L=x();T.__bindingPointIndex=L;const P=s.createBuffer(),z=T.__size,D=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,z,D),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,P),P}function x(){for(let T=0;T<f;T++)if(c.indexOf(T)===-1)return c.push(T),T;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(T){const L=o[T.id],P=T.uniforms,z=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let D=0,O=P.length;D<O;D++){const E=Array.isArray(P[D])?P[D]:[P[D]];for(let U=0,q=E.length;U<q;U++){const H=E[U];if(_(H,D,U,z)===!0){const F=H.__offset,W=Array.isArray(H.value)?H.value:[H.value];let ee=0;for(let j=0;j<W.length;j++){const re=W[j],G=C(re);typeof re=="number"||typeof re=="boolean"?(H.__data[0]=re,s.bufferSubData(s.UNIFORM_BUFFER,F+ee,H.__data)):re.isMatrix3?(H.__data[0]=re.elements[0],H.__data[1]=re.elements[1],H.__data[2]=re.elements[2],H.__data[3]=0,H.__data[4]=re.elements[3],H.__data[5]=re.elements[4],H.__data[6]=re.elements[5],H.__data[7]=0,H.__data[8]=re.elements[6],H.__data[9]=re.elements[7],H.__data[10]=re.elements[8],H.__data[11]=0):ArrayBuffer.isView(re)?H.__data.set(new re.constructor(re.buffer,re.byteOffset,H.__data.length)):(re.toArray(H.__data,ee),ee+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(T,L,P,z){const D=T.value,O=L+"_"+P;if(z[O]===void 0)return typeof D=="number"||typeof D=="boolean"?z[O]=D:ArrayBuffer.isView(D)?z[O]=D.slice():z[O]=D.clone(),!0;{const E=z[O];if(typeof D=="number"||typeof D=="boolean"){if(E!==D)return z[O]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(E.equals(D)===!1)return E.copy(D),!0}}return!1}function A(T){const L=T.uniforms;let P=0;const z=16;for(let O=0,E=L.length;O<E;O++){const U=Array.isArray(L[O])?L[O]:[L[O]];for(let q=0,H=U.length;q<H;q++){const F=U[q],W=Array.isArray(F.value)?F.value:[F.value];for(let ee=0,j=W.length;ee<j;ee++){const re=W[ee],G=C(re),X=P%z,k=X%G.boundary,ie=X+k;P+=k,ie!==0&&z-ie<G.storage&&(P+=z-ie),F.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=P,P+=G.storage}}}const D=P%z;return D>0&&(P+=z-D),T.__size=P,T.__cache={},this}function C(T){const L={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(L.boundary=4,L.storage=4):T.isVector2?(L.boundary=8,L.storage=8):T.isVector3||T.isColor?(L.boundary=16,L.storage=12):T.isVector4?(L.boundary=16,L.storage=16):T.isMatrix3?(L.boundary=48,L.storage=48):T.isMatrix4?(L.boundary=64,L.storage=64):T.isTexture?xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(L.boundary=16,L.storage=T.byteLength):xt("WebGLRenderer: Unsupported uniform value type.",T),L}function y(T){const L=T.target;L.removeEventListener("dispose",y);const P=c.indexOf(L.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function S(){for(const T in o)s.deleteBuffer(o[T]);c=[],o={},l={}}return{bind:d,update:h,dispose:S}}const qE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let er=null;function YE(){return er===null&&(er=new ov(qE,16,16,ws,Er),er.name="DFG_LUT",er.minFilter=bn,er.magFilter=bn,er.wrapS=Mr,er.wrapT=Mr,er.generateMipmaps=!1,er.needsUpdate=!0),er}class Sv{constructor(e={}){const{canvas:t=ty(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:m=!1,outputBufferType:_=Ri}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=c;const C=_,y=new Set([rd,id,nd]),S=new Set([Ri,or,Sa,Aa,ed,td]),T=new Uint32Array(4),L=new Int32Array(4),P=new Z;let z=null,D=null;const O=[],E=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let H=!1,F=null;this._outputColorSpace=Ci;let W=0,ee=0,j=null,re=-1,G=null;const X=new on,k=new on;let ie=null;const N=new Wt(0);let K=0,Ee=t.width,Me=t.height,ve=1,I=null,ce=null;const oe=new on(0,0,Ee,Me),Ae=new on(0,0,Ee,Me);let Se=!1;const xe=new av;let Ye=!1,Ie=!1;const He=new un,et=new Z,Ze=new on,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function bt(){return j===null?ve:1}let Y=r;function At(b,te){return t.getContext(b,te)}try{const b={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zh}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",gt,!1),Y===null){const te="webgl2";if(Y=At(te,b),Y===null)throw At(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Gt("WebGLRenderer: "+b.message),b}let dt,Tt,ke,kt,w,M,Q,le,_e,de,we,ge,me,Ve,Ge,De,Le,tt,ut,ht,J,Ue,ye;function Xe(){dt=new YS(Y),dt.init(),J=new zE(Y,dt),Tt=new HS(Y,dt,e,J),ke=new OE(Y,dt),Tt.reversedDepthBuffer&&m&&ke.buffers.depth.setReversed(!0),kt=new ZS(Y),w=new EE,M=new BE(Y,dt,ke,w,Tt,J,kt),Q=new qS(q),le=new nM(Y),Ue=new BS(Y,le),_e=new QS(Y,le,kt,Ue),de=new eA(Y,_e,le,Ue,kt),tt=new $S(Y,Tt,M),Ge=new VS(w),we=new AE(q,Q,dt,Tt,Ue,Ge),ge=new jE(q,w),me=new TE,Ve=new IE(dt),Le=new OS(q,Q,ke,de,A,d),De=new kE(q,de,Tt),ye=new KE(Y,kt,Tt,ke),ut=new zS(Y,dt,kt),ht=new JS(Y,dt,kt),kt.programs=we.programs,q.capabilities=Tt,q.extensions=dt,q.properties=w,q.renderLists=me,q.shadowMap=De,q.state=ke,q.info=kt}Xe(),C!==Ri&&(U=new nA(C,t.width,t.height,o,l));const Fe=new WE(q,Y);this.xr=Fe,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const b=dt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=dt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(b){b!==void 0&&(ve=b,this.setSize(Ee,Me,!1))},this.getSize=function(b){return b.set(Ee,Me)},this.setSize=function(b,te,ae=!0){if(Fe.isPresenting){xt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=b,Me=te,t.width=Math.floor(b*ve),t.height=Math.floor(te*ve),ae===!0&&(t.style.width=b+"px",t.style.height=te+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,b,te)},this.getDrawingBufferSize=function(b){return b.set(Ee*ve,Me*ve).floor()},this.setDrawingBufferSize=function(b,te,ae){Ee=b,Me=te,ve=ae,t.width=Math.floor(b*ae),t.height=Math.floor(te*ae),this.setViewport(0,0,b,te)},this.setEffects=function(b){if(C===Ri){Gt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let te=0;te<b.length;te++)if(b[te].isOutputPass===!0){xt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(X)},this.getViewport=function(b){return b.copy(oe)},this.setViewport=function(b,te,ae,se){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,te,ae,se),ke.viewport(X.copy(oe).multiplyScalar(ve).round())},this.getScissor=function(b){return b.copy(Ae)},this.setScissor=function(b,te,ae,se){b.isVector4?Ae.set(b.x,b.y,b.z,b.w):Ae.set(b,te,ae,se),ke.scissor(k.copy(Ae).multiplyScalar(ve).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(b){ke.setScissorTest(Se=b)},this.setOpaqueSort=function(b){I=b},this.setTransparentSort=function(b){ce=b},this.getClearColor=function(b){return b.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(b=!0,te=!0,ae=!0){let se=0;if(b){let fe=!1;if(j!==null){const Be=j.texture.format;fe=y.has(Be)}if(fe){const Be=j.texture.type,ze=S.has(Be),Ce=Le.getClearColor(),qe=Le.getClearAlpha(),je=Ce.r,_t=Ce.g,vt=Ce.b;ze?(T[0]=je,T[1]=_t,T[2]=vt,T[3]=qe,Y.clearBufferuiv(Y.COLOR,0,T)):(L[0]=je,L[1]=_t,L[2]=vt,L[3]=qe,Y.clearBufferiv(Y.COLOR,0,L))}else se|=Y.COLOR_BUFFER_BIT}te&&(se|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(se|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&Y.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",gt,!1),Le.dispose(),me.dispose(),Ve.dispose(),w.dispose(),Q.dispose(),de.dispose(),Ue.dispose(),ye.dispose(),we.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",yt),Fe.removeEventListener("sessionend",Kt),$n.stop()};function Te(b){b.preventDefault(),o0("WebGLRenderer: Context Lost."),H=!0}function Je(){o0("WebGLRenderer: Context Restored."),H=!1;const b=kt.autoReset,te=De.enabled,ae=De.autoUpdate,se=De.needsUpdate,fe=De.type;Xe(),kt.autoReset=b,De.enabled=te,De.autoUpdate=ae,De.needsUpdate=se,De.type=fe}function gt(b){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ft(b){const te=b.target;te.removeEventListener("dispose",ft),st(te)}function st(b){Ot(b),w.remove(b)}function Ot(b){const te=w.get(b).programs;te!==void 0&&(te.forEach(function(ae){we.releaseProgram(ae)}),b.isShaderMaterial&&we.releaseShaderCache(b))}this.renderBufferDirect=function(b,te,ae,se,fe,Be){te===null&&(te=rt);const ze=fe.isMesh&&fe.matrixWorld.determinant()<0,Ce=Cn(b,te,ae,se,fe);ke.setMaterial(se,ze);let qe=ae.index,je=1;if(se.wireframe===!0){if(qe=_e.getWireframeAttribute(ae),qe===void 0)return;je=2}const _t=ae.drawRange,vt=ae.attributes.position;let nt=_t.start*je,St=(_t.start+_t.count)*je;Be!==null&&(nt=Math.max(nt,Be.start*je),St=Math.min(St,(Be.start+Be.count)*je)),qe!==null?(nt=Math.max(nt,0),St=Math.min(St,qe.count)):vt!=null&&(nt=Math.max(nt,0),St=Math.min(St,vt.count));const Nt=St-nt;if(Nt<0||Nt===1/0)return;Ue.setup(fe,se,Ce,ae,qe);let jt,Ut=ut;if(qe!==null&&(jt=le.get(qe),Ut=ht,Ut.setIndex(jt)),fe.isMesh)se.wireframe===!0?(ke.setLineWidth(se.wireframeLinewidth*bt()),Ut.setMode(Y.LINES)):Ut.setMode(Y.TRIANGLES);else if(fe.isLine){let Jt=se.linewidth;Jt===void 0&&(Jt=1),ke.setLineWidth(Jt*bt()),fe.isLineSegments?Ut.setMode(Y.LINES):fe.isLineLoop?Ut.setMode(Y.LINE_LOOP):Ut.setMode(Y.LINE_STRIP)}else fe.isPoints?Ut.setMode(Y.POINTS):fe.isSprite&&Ut.setMode(Y.TRIANGLES);if(fe.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))Ut.renderMultiDraw(fe._multiDrawStarts,fe._multiDrawCounts,fe._multiDrawCount);else{const Jt=fe._multiDrawStarts,We=fe._multiDrawCounts,fn=fe._multiDrawCount,Et=qe?le.get(qe).bytesPerElement:1,gn=w.get(se).currentProgram.getUniforms();for(let Rn=0;Rn<fn;Rn++)gn.setValue(Y,"_gl_DrawID",Rn),Ut.render(Jt[Rn]/Et,We[Rn])}else if(fe.isInstancedMesh)Ut.renderInstances(nt,Nt,fe.count);else if(ae.isInstancedBufferGeometry){const Jt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,We=Math.min(ae.instanceCount,Jt);Ut.renderInstances(nt,Nt,We)}else Ut.render(nt,Nt)};function Qt(b,te,ae){b.transparent===!0&&b.side===Gi&&b.forceSinglePass===!1?(b.side=li,b.needsUpdate=!0,xi(b,te,ae),b.side=ts,b.needsUpdate=!0,xi(b,te,ae),b.side=Gi):xi(b,te,ae)}this.compile=function(b,te,ae=null){ae===null&&(ae=b),D=Ve.get(ae),D.init(te),E.push(D),ae.traverseVisible(function(fe){fe.isLight&&fe.layers.test(te.layers)&&(D.pushLight(fe),fe.castShadow&&D.pushShadow(fe))}),b!==ae&&b.traverseVisible(function(fe){fe.isLight&&fe.layers.test(te.layers)&&(D.pushLight(fe),fe.castShadow&&D.pushShadow(fe))}),D.setupLights();const se=new Set;return b.traverse(function(fe){if(!(fe.isMesh||fe.isPoints||fe.isLine||fe.isSprite))return;const Be=fe.material;if(Be)if(Array.isArray(Be))for(let ze=0;ze<Be.length;ze++){const Ce=Be[ze];Qt(Ce,ae,fe),se.add(Ce)}else Qt(Be,ae,fe),se.add(Be)}),D=E.pop(),se},this.compileAsync=function(b,te,ae=null){const se=this.compile(b,te,ae);return new Promise(fe=>{function Be(){if(se.forEach(function(ze){w.get(ze).currentProgram.isReady()&&se.delete(ze)}),se.size===0){fe(b);return}setTimeout(Be,10)}dt.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let tn=null;function an(b){tn&&tn(b)}function yt(){$n.stop()}function Kt(){$n.start()}const $n=new pv;$n.setAnimationLoop(an),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(b){tn=b,Fe.setAnimationLoop(b),b===null?$n.stop():$n.start()},Fe.addEventListener("sessionstart",yt),Fe.addEventListener("sessionend",Kt),this.render=function(b,te){if(te!==void 0&&te.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;F!==null&&F.renderStart(b,te);const ae=Fe.enabled===!0&&Fe.isPresenting===!0,se=U!==null&&(j===null||ae)&&U.begin(q,j);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(te),te=Fe.getCamera()),b.isScene===!0&&b.onBeforeRender(q,b,te,j),D=Ve.get(b,E.length),D.init(te),D.state.textureUnits=M.getTextureUnits(),E.push(D),He.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),xe.setFromProjectionMatrix(He,nr,te.reversedDepth),Ie=this.localClippingEnabled,Ye=Ge.init(this.clippingPlanes,Ie),z=me.get(b,O.length),z.init(),O.push(z),Fe.enabled===!0&&Fe.isPresenting===!0){const ze=q.xr.getDepthSensingMesh();ze!==null&&ln(ze,te,-1/0,q.sortObjects)}ln(b,te,0,q.sortObjects),z.finish(),q.sortObjects===!0&&z.sort(I,ce),lt=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,lt&&Le.addToRenderList(z,b),this.info.render.frame++,Ye===!0&&Ge.beginShadows();const fe=D.state.shadowsArray;if(De.render(fe,b,te),Ye===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&U.hasRenderPass())===!1){const ze=z.opaque,Ce=z.transmissive;if(D.setupLights(),te.isArrayCamera){const qe=te.cameras;if(Ce.length>0)for(let je=0,_t=qe.length;je<_t;je++){const vt=qe[je];Xn(ze,Ce,b,vt)}lt&&Le.render(b);for(let je=0,_t=qe.length;je<_t;je++){const vt=qe[je];Ki(z,b,vt,vt.viewport)}}else Ce.length>0&&Xn(ze,Ce,b,te),lt&&Le.render(b),Ki(z,b,te)}j!==null&&ee===0&&(M.updateMultisampleRenderTarget(j),M.updateRenderTargetMipmap(j)),se&&U.end(q),b.isScene===!0&&b.onAfterRender(q,b,te),Ue.resetDefaultState(),re=-1,G=null,E.pop(),E.length>0?(D=E[E.length-1],M.setTextureUnits(D.state.textureUnits),Ye===!0&&Ge.setGlobalState(q.clippingPlanes,D.state.camera)):D=null,O.pop(),O.length>0?z=O[O.length-1]:z=null,F!==null&&F.renderEnd()};function ln(b,te,ae,se){if(b.visible===!1)return;if(b.layers.test(te.layers)){if(b.isGroup)ae=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(te);else if(b.isLightProbeGrid)D.pushLightProbeGrid(b);else if(b.isLight)D.pushLight(b),b.castShadow&&D.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||xe.intersectsSprite(b)){se&&Ze.setFromMatrixPosition(b.matrixWorld).applyMatrix4(He);const ze=de.update(b),Ce=b.material;Ce.visible&&z.push(b,ze,Ce,ae,Ze.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||xe.intersectsObject(b))){const ze=de.update(b),Ce=b.material;if(se&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ze.copy(b.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Ze.copy(ze.boundingSphere.center)),Ze.applyMatrix4(b.matrixWorld).applyMatrix4(He)),Array.isArray(Ce)){const qe=ze.groups;for(let je=0,_t=qe.length;je<_t;je++){const vt=qe[je],nt=Ce[vt.materialIndex];nt&&nt.visible&&z.push(b,ze,nt,ae,Ze.z,vt)}}else Ce.visible&&z.push(b,ze,Ce,ae,Ze.z,null)}}const Be=b.children;for(let ze=0,Ce=Be.length;ze<Ce;ze++)ln(Be[ze],te,ae,se)}function Ki(b,te,ae,se){const{opaque:fe,transmissive:Be,transparent:ze}=b;D.setupLightsView(ae),Ye===!0&&Ge.setGlobalState(q.clippingPlanes,ae),se&&ke.viewport(X.copy(se)),fe.length>0&&ci(fe,te,ae),Be.length>0&&ci(Be,te,ae),ze.length>0&&ci(ze,te,ae),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Xn(b,te,ae,se){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[se.id]===void 0){const nt=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[se.id]=new sr(1,1,{generateMipmaps:!0,type:nt?Er:Ri,minFilter:Ss,samples:Math.max(4,Tt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ft.workingColorSpace})}const Be=D.state.transmissionRenderTarget[se.id],ze=se.viewport||X;Be.setSize(ze.z*q.transmissionResolutionScale,ze.w*q.transmissionResolutionScale);const Ce=q.getRenderTarget(),qe=q.getActiveCubeFace(),je=q.getActiveMipmapLevel();q.setRenderTarget(Be),q.getClearColor(N),K=q.getClearAlpha(),K<1&&q.setClearColor(16777215,.5),q.clear(),lt&&Le.render(ae);const _t=q.toneMapping;q.toneMapping=ir;const vt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),D.setupLightsView(se),Ye===!0&&Ge.setGlobalState(q.clippingPlanes,se),ci(b,ae,se),M.updateMultisampleRenderTarget(Be),M.updateRenderTargetMipmap(Be),dt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let St=0,Nt=te.length;St<Nt;St++){const jt=te[St],{object:Ut,geometry:Jt,material:We,group:fn}=jt;if(We.side===Gi&&Ut.layers.test(se.layers)){const Et=We.side;We.side=li,We.needsUpdate=!0,vi(Ut,ae,se,Jt,We,fn),We.side=Et,We.needsUpdate=!0,nt=!0}}nt===!0&&(M.updateMultisampleRenderTarget(Be),M.updateRenderTargetMipmap(Be))}q.setRenderTarget(Ce,qe,je),q.setClearColor(N,K),vt!==void 0&&(se.viewport=vt),q.toneMapping=_t}function ci(b,te,ae){const se=te.isScene===!0?te.overrideMaterial:null;for(let fe=0,Be=b.length;fe<Be;fe++){const ze=b[fe],{object:Ce,geometry:qe,group:je}=ze;let _t=ze.material;_t.allowOverride===!0&&se!==null&&(_t=se),Ce.layers.test(ae.layers)&&vi(Ce,te,ae,qe,_t,je)}}function vi(b,te,ae,se,fe,Be){b.onBeforeRender(q,te,ae,se,fe,Be),b.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),fe.onBeforeRender(q,te,ae,se,b,Be),fe.transparent===!0&&fe.side===Gi&&fe.forceSinglePass===!1?(fe.side=li,fe.needsUpdate=!0,q.renderBufferDirect(ae,te,se,fe,b,Be),fe.side=ts,fe.needsUpdate=!0,q.renderBufferDirect(ae,te,se,fe,b,Be),fe.side=Gi):q.renderBufferDirect(ae,te,se,fe,b,Be),b.onAfterRender(q,te,ae,se,fe,Be)}function xi(b,te,ae){te.isScene!==!0&&(te=rt);const se=w.get(b),fe=D.state.lights,Be=D.state.shadowsArray,ze=fe.state.version,Ce=we.getParameters(b,fe.state,Be,te,ae,D.state.lightProbeGridArray),qe=we.getProgramCacheKey(Ce);let je=se.programs;se.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?te.environment:null,se.fog=te.fog;const _t=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;se.envMap=Q.get(b.envMap||se.environment,_t),se.envMapRotation=se.environment!==null&&b.envMap===null?te.environmentRotation:b.envMapRotation,je===void 0&&(b.addEventListener("dispose",ft),je=new Map,se.programs=je);let vt=je.get(qe);if(vt!==void 0){if(se.currentProgram===vt&&se.lightsStateVersion===ze)return qi(b,Ce),vt}else Ce.uniforms=we.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,ae,Ce),b.onBeforeCompile(Ce,q),vt=we.acquireProgram(Ce,qe),je.set(qe,vt),se.uniforms=Ce.uniforms;const nt=se.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(nt.clippingPlanes=Ge.uniform),qi(b,Ce),se.needsLights=Nn(b),se.lightsStateVersion=ze,se.needsLights&&(nt.ambientLightColor.value=fe.state.ambient,nt.lightProbe.value=fe.state.probe,nt.directionalLights.value=fe.state.directional,nt.directionalLightShadows.value=fe.state.directionalShadow,nt.spotLights.value=fe.state.spot,nt.spotLightShadows.value=fe.state.spotShadow,nt.rectAreaLights.value=fe.state.rectArea,nt.ltc_1.value=fe.state.rectAreaLTC1,nt.ltc_2.value=fe.state.rectAreaLTC2,nt.pointLights.value=fe.state.point,nt.pointLightShadows.value=fe.state.pointShadow,nt.hemisphereLights.value=fe.state.hemi,nt.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,nt.spotLightMatrix.value=fe.state.spotLightMatrix,nt.spotLightMap.value=fe.state.spotLightMap,nt.pointShadowMatrix.value=fe.state.pointShadowMatrix),se.lightProbeGrid=D.state.lightProbeGridArray.length>0,se.currentProgram=vt,se.uniformsList=null,vt}function _i(b){if(b.uniformsList===null){const te=b.currentProgram.getUniforms();b.uniformsList=lc.seqWithValue(te.seq,b.uniforms)}return b.uniformsList}function qi(b,te){const ae=w.get(b);ae.outputColorSpace=te.outputColorSpace,ae.batching=te.batching,ae.batchingColor=te.batchingColor,ae.instancing=te.instancing,ae.instancingColor=te.instancingColor,ae.instancingMorph=te.instancingMorph,ae.skinning=te.skinning,ae.morphTargets=te.morphTargets,ae.morphNormals=te.morphNormals,ae.morphColors=te.morphColors,ae.morphTargetsCount=te.morphTargetsCount,ae.numClippingPlanes=te.numClippingPlanes,ae.numIntersection=te.numClipIntersection,ae.vertexAlphas=te.vertexAlphas,ae.vertexTangents=te.vertexTangents,ae.toneMapping=te.toneMapping}function ar(b,te){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;P.setFromMatrixPosition(te.matrixWorld);for(let ae=0,se=b.length;ae<se;ae++){const fe=b[ae];if(fe.texture!==null&&fe.boundingBox.containsPoint(P))return fe}return null}function Cn(b,te,ae,se,fe){te.isScene!==!0&&(te=rt),M.resetTextureUnits();const Be=te.fog,ze=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?te.environment:null,Ce=j===null?q.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ft.workingColorSpace,qe=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,je=Q.get(se.envMap||ze,qe),_t=se.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,vt=!!ae.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),nt=!!ae.morphAttributes.position,St=!!ae.morphAttributes.normal,Nt=!!ae.morphAttributes.color;let jt=ir;se.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(jt=q.toneMapping);const Ut=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Jt=Ut!==void 0?Ut.length:0,We=w.get(se),fn=D.state.lights;if(Ye===!0&&(Ie===!0||b!==G)){const zt=b===G&&se.id===re;Ge.setState(se,b,zt)}let Et=!1;se.version===We.__version?(We.needsLights&&We.lightsStateVersion!==fn.state.version||We.outputColorSpace!==Ce||fe.isBatchedMesh&&We.batching===!1||!fe.isBatchedMesh&&We.batching===!0||fe.isBatchedMesh&&We.batchingColor===!0&&fe.colorTexture===null||fe.isBatchedMesh&&We.batchingColor===!1&&fe.colorTexture!==null||fe.isInstancedMesh&&We.instancing===!1||!fe.isInstancedMesh&&We.instancing===!0||fe.isSkinnedMesh&&We.skinning===!1||!fe.isSkinnedMesh&&We.skinning===!0||fe.isInstancedMesh&&We.instancingColor===!0&&fe.instanceColor===null||fe.isInstancedMesh&&We.instancingColor===!1&&fe.instanceColor!==null||fe.isInstancedMesh&&We.instancingMorph===!0&&fe.morphTexture===null||fe.isInstancedMesh&&We.instancingMorph===!1&&fe.morphTexture!==null||We.envMap!==je||se.fog===!0&&We.fog!==Be||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ge.numPlanes||We.numIntersection!==Ge.numIntersection)||We.vertexAlphas!==_t||We.vertexTangents!==vt||We.morphTargets!==nt||We.morphNormals!==St||We.morphColors!==Nt||We.toneMapping!==jt||We.morphTargetsCount!==Jt||!!We.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,We.__version=se.version);let gn=We.currentProgram;Et===!0&&(gn=xi(se,te,fe),F&&se.isNodeMaterial&&F.onUpdateProgram(se,gn,We));let Rn=!1,Ct=!1,yi=!1;const Bt=gn.getUniforms(),qt=We.uniforms;if(ke.useProgram(gn.program)&&(Rn=!0,Ct=!0,yi=!0),se.id!==re&&(re=se.id,Ct=!0),We.needsLights){const zt=ar(D.state.lightProbeGridArray,fe);We.lightProbeGrid!==zt&&(We.lightProbeGrid=zt,Ct=!0)}if(Rn||G!==b){ke.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Bt.setValue(Y,"projectionMatrix",b.projectionMatrix),Bt.setValue(Y,"viewMatrix",b.matrixWorldInverse);const ei=Bt.map.cameraPosition;ei!==void 0&&ei.setValue(Y,et.setFromMatrixPosition(b.matrixWorld)),Tt.logarithmicDepthBuffer&&Bt.setValue(Y,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Bt.setValue(Y,"isOrthographic",b.isOrthographicCamera===!0),G!==b&&(G=b,Ct=!0,yi=!0)}if(We.needsLights&&(fn.state.directionalShadowMap.length>0&&Bt.setValue(Y,"directionalShadowMap",fn.state.directionalShadowMap,M),fn.state.spotShadowMap.length>0&&Bt.setValue(Y,"spotShadowMap",fn.state.spotShadowMap,M),fn.state.pointShadowMap.length>0&&Bt.setValue(Y,"pointShadowMap",fn.state.pointShadowMap,M)),fe.isSkinnedMesh){Bt.setOptional(Y,fe,"bindMatrix"),Bt.setOptional(Y,fe,"bindMatrixInverse");const zt=fe.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Bt.setValue(Y,"boneTexture",zt.boneTexture,M))}fe.isBatchedMesh&&(Bt.setOptional(Y,fe,"batchingTexture"),Bt.setValue(Y,"batchingTexture",fe._matricesTexture,M),Bt.setOptional(Y,fe,"batchingIdTexture"),Bt.setValue(Y,"batchingIdTexture",fe._indirectTexture,M),Bt.setOptional(Y,fe,"batchingColorTexture"),fe._colorsTexture!==null&&Bt.setValue(Y,"batchingColorTexture",fe._colorsTexture,M));const Kn=ae.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&tt.update(fe,ae,gn),(Ct||We.receiveShadow!==fe.receiveShadow)&&(We.receiveShadow=fe.receiveShadow,Bt.setValue(Y,"receiveShadow",fe.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&te.environment!==null&&(qt.envMapIntensity.value=te.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=YE()),Ct){if(Bt.setValue(Y,"toneMappingExposure",q.toneMappingExposure),We.needsLights&&jn(qt,yi),Be&&se.fog===!0&&ge.refreshFogUniforms(qt,Be),ge.refreshMaterialUniforms(qt,se,ve,Me,D.state.transmissionRenderTarget[b.id]),We.needsLights&&We.lightProbeGrid){const zt=We.lightProbeGrid;qt.probesSH.value=zt.texture,qt.probesMin.value.copy(zt.boundingBox.min),qt.probesMax.value.copy(zt.boundingBox.max),qt.probesResolution.value.copy(zt.resolution)}lc.upload(Y,_i(We),qt,M)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(lc.upload(Y,_i(We),qt,M),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Bt.setValue(Y,"center",fe.center),Bt.setValue(Y,"modelViewMatrix",fe.modelViewMatrix),Bt.setValue(Y,"normalMatrix",fe.normalMatrix),Bt.setValue(Y,"modelMatrix",fe.matrixWorld),se.uniformsGroups!==void 0){const zt=se.uniformsGroups;for(let ei=0,Pn=zt.length;ei<Pn;ei++){const Li=zt[ei];ye.update(Li,gn),ye.bind(Li,gn)}}return gn}function jn(b,te){b.ambientLightColor.needsUpdate=te,b.lightProbe.needsUpdate=te,b.directionalLights.needsUpdate=te,b.directionalLightShadows.needsUpdate=te,b.pointLights.needsUpdate=te,b.pointLightShadows.needsUpdate=te,b.spotLights.needsUpdate=te,b.spotLightShadows.needsUpdate=te,b.rectAreaLights.needsUpdate=te,b.hemisphereLights.needsUpdate=te}function Nn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(b,te,ae){const se=w.get(b);se.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),w.get(b.texture).__webglTexture=te,w.get(b.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ae,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,te){const ae=w.get(b);ae.__webglFramebuffer=te,ae.__useDefaultFramebuffer=te===void 0};const Dt=Y.createFramebuffer();this.setRenderTarget=function(b,te=0,ae=0){j=b,W=te,ee=ae;let se=null,fe=!1,Be=!1;if(b){const Ce=w.get(b);if(Ce.__useDefaultFramebuffer!==void 0){ke.bindFramebuffer(Y.FRAMEBUFFER,Ce.__webglFramebuffer),X.copy(b.viewport),k.copy(b.scissor),ie=b.scissorTest,ke.viewport(X),ke.scissor(k),ke.setScissorTest(ie),re=-1;return}else if(Ce.__webglFramebuffer===void 0)M.setupRenderTarget(b);else if(Ce.__hasExternalTextures)M.rebindTextures(b,w.get(b.texture).__webglTexture,w.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const _t=b.depthTexture;if(Ce.__boundDepthTexture!==_t){if(_t!==null&&w.has(_t)&&(b.width!==_t.image.width||b.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(b)}}const qe=b.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Be=!0);const je=w.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(je[te])?se=je[te][ae]:se=je[te],fe=!0):b.samples>0&&M.useMultisampledRTT(b)===!1?se=w.get(b).__webglMultisampledFramebuffer:Array.isArray(je)?se=je[ae]:se=je,X.copy(b.viewport),k.copy(b.scissor),ie=b.scissorTest}else X.copy(oe).multiplyScalar(ve).floor(),k.copy(Ae).multiplyScalar(ve).floor(),ie=Se;if(ae!==0&&(se=Dt),ke.bindFramebuffer(Y.FRAMEBUFFER,se)&&ke.drawBuffers(b,se),ke.viewport(X),ke.scissor(k),ke.setScissorTest(ie),fe){const Ce=w.get(b.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce.__webglTexture,ae)}else if(Be){const Ce=te;for(let qe=0;qe<b.textures.length;qe++){const je=w.get(b.textures[qe]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+qe,je.__webglTexture,ae,Ce)}}else if(b!==null&&ae!==0){const Ce=w.get(b.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ce.__webglTexture,ae)}re=-1},this.readRenderTargetPixels=function(b,te,ae,se,fe,Be,ze,Ce=0){if(!(b&&b.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=w.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ze!==void 0&&(qe=qe[ze]),qe){ke.bindFramebuffer(Y.FRAMEBUFFER,qe);try{const je=b.textures[Ce],_t=je.format,vt=je.type;if(b.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ce),!Tt.textureFormatReadable(_t)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(vt)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=b.width-se&&ae>=0&&ae<=b.height-fe&&Y.readPixels(te,ae,se,fe,J.convert(_t),J.convert(vt),Be)}finally{const je=j!==null?w.get(j).__webglFramebuffer:null;ke.bindFramebuffer(Y.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(b,te,ae,se,fe,Be,ze,Ce=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=w.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ze!==void 0&&(qe=qe[ze]),qe)if(te>=0&&te<=b.width-se&&ae>=0&&ae<=b.height-fe){ke.bindFramebuffer(Y.FRAMEBUFFER,qe);const je=b.textures[Ce],_t=je.format,vt=je.type;if(b.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ce),!Tt.textureFormatReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,nt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Be.byteLength,Y.STREAM_READ),Y.readPixels(te,ae,se,fe,J.convert(_t),J.convert(vt),0);const St=j!==null?w.get(j).__webglFramebuffer:null;ke.bindFramebuffer(Y.FRAMEBUFFER,St);const Nt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await ny(Y,Nt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,nt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Be),Y.deleteBuffer(nt),Y.deleteSync(Nt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,te=null,ae=0){const se=Math.pow(2,-ae),fe=Math.floor(b.image.width*se),Be=Math.floor(b.image.height*se),ze=te!==null?te.x:0,Ce=te!==null?te.y:0;M.setTexture2D(b,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ae,0,0,ze,Ce,fe,Be),ke.unbindTexture()};const Fn=Y.createFramebuffer(),Sn=Y.createFramebuffer();this.copyTextureToTexture=function(b,te,ae=null,se=null,fe=0,Be=0){let ze,Ce,qe,je,_t,vt,nt,St,Nt;const jt=b.isCompressedTexture?b.mipmaps[Be]:b.image;if(ae!==null)ze=ae.max.x-ae.min.x,Ce=ae.max.y-ae.min.y,qe=ae.isBox3?ae.max.z-ae.min.z:1,je=ae.min.x,_t=ae.min.y,vt=ae.isBox3?ae.min.z:0;else{const qt=Math.pow(2,-fe);ze=Math.floor(jt.width*qt),Ce=Math.floor(jt.height*qt),b.isDataArrayTexture?qe=jt.depth:b.isData3DTexture?qe=Math.floor(jt.depth*qt):qe=1,je=0,_t=0,vt=0}se!==null?(nt=se.x,St=se.y,Nt=se.z):(nt=0,St=0,Nt=0);const Ut=J.convert(te.format),Jt=J.convert(te.type);let We;te.isData3DTexture?(M.setTexture3D(te,0),We=Y.TEXTURE_3D):te.isDataArrayTexture||te.isCompressedArrayTexture?(M.setTexture2DArray(te,0),We=Y.TEXTURE_2D_ARRAY):(M.setTexture2D(te,0),We=Y.TEXTURE_2D),ke.activeTexture(Y.TEXTURE0),ke.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,te.flipY),ke.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),ke.pixelStorei(Y.UNPACK_ALIGNMENT,te.unpackAlignment);const fn=ke.getParameter(Y.UNPACK_ROW_LENGTH),Et=ke.getParameter(Y.UNPACK_IMAGE_HEIGHT),gn=ke.getParameter(Y.UNPACK_SKIP_PIXELS),Rn=ke.getParameter(Y.UNPACK_SKIP_ROWS),Ct=ke.getParameter(Y.UNPACK_SKIP_IMAGES);ke.pixelStorei(Y.UNPACK_ROW_LENGTH,jt.width),ke.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,jt.height),ke.pixelStorei(Y.UNPACK_SKIP_PIXELS,je),ke.pixelStorei(Y.UNPACK_SKIP_ROWS,_t),ke.pixelStorei(Y.UNPACK_SKIP_IMAGES,vt);const yi=b.isDataArrayTexture||b.isData3DTexture,Bt=te.isDataArrayTexture||te.isData3DTexture;if(b.isDepthTexture){const qt=w.get(b),Kn=w.get(te),zt=w.get(qt.__renderTarget),ei=w.get(Kn.__renderTarget);ke.bindFramebuffer(Y.READ_FRAMEBUFFER,zt.__webglFramebuffer),ke.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let Pn=0;Pn<qe;Pn++)yi&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,w.get(b).__webglTexture,fe,vt+Pn),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,w.get(te).__webglTexture,Be,Nt+Pn)),Y.blitFramebuffer(je,_t,ze,Ce,nt,St,ze,Ce,Y.DEPTH_BUFFER_BIT,Y.NEAREST);ke.bindFramebuffer(Y.READ_FRAMEBUFFER,null),ke.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(fe!==0||b.isRenderTargetTexture||w.has(b)){const qt=w.get(b),Kn=w.get(te);ke.bindFramebuffer(Y.READ_FRAMEBUFFER,Fn),ke.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Sn);for(let zt=0;zt<qe;zt++)yi?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,qt.__webglTexture,fe,vt+zt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,qt.__webglTexture,fe),Bt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Kn.__webglTexture,Be,Nt+zt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Kn.__webglTexture,Be),fe!==0?Y.blitFramebuffer(je,_t,ze,Ce,nt,St,ze,Ce,Y.COLOR_BUFFER_BIT,Y.NEAREST):Bt?Y.copyTexSubImage3D(We,Be,nt,St,Nt+zt,je,_t,ze,Ce):Y.copyTexSubImage2D(We,Be,nt,St,je,_t,ze,Ce);ke.bindFramebuffer(Y.READ_FRAMEBUFFER,null),ke.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Bt?b.isDataTexture||b.isData3DTexture?Y.texSubImage3D(We,Be,nt,St,Nt,ze,Ce,qe,Ut,Jt,jt.data):te.isCompressedArrayTexture?Y.compressedTexSubImage3D(We,Be,nt,St,Nt,ze,Ce,qe,Ut,jt.data):Y.texSubImage3D(We,Be,nt,St,Nt,ze,Ce,qe,Ut,Jt,jt):b.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Be,nt,St,ze,Ce,Ut,Jt,jt.data):b.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Be,nt,St,jt.width,jt.height,Ut,jt.data):Y.texSubImage2D(Y.TEXTURE_2D,Be,nt,St,ze,Ce,Ut,Jt,jt);ke.pixelStorei(Y.UNPACK_ROW_LENGTH,fn),ke.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Et),ke.pixelStorei(Y.UNPACK_SKIP_PIXELS,gn),ke.pixelStorei(Y.UNPACK_SKIP_ROWS,Rn),ke.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ct),Be===0&&te.generateMipmaps&&Y.generateMipmap(We),ke.unbindTexture()},this.initRenderTarget=function(b){w.get(b).__webglFramebuffer===void 0&&M.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?M.setTextureCube(b,0):b.isData3DTexture?M.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?M.setTexture2DArray(b,0):M.setTexture2D(b,0),ke.unbindTexture()},this.resetState=function(){W=0,ee=0,j=null,ke.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ft._getUnpackColorSpace()}}function da(s,e,t){const r=e/100,o=t/100,l=(1-Math.abs(2*o-1))*r,c=l*(1-Math.abs(s/60%2-1)),f=o-l/2;let d=0,h=0,g=0;s<60?[d,h,g]=[l,c,0]:s<120?[d,h,g]=[c,l,0]:s<180?[d,h,g]=[0,l,c]:s<240?[d,h,g]=[0,c,l]:s<300?[d,h,g]=[c,0,l]:[d,h,g]=[l,0,c];const x=m=>Math.round((m+f)*255).toString(16).padStart(2,"0");return`#${x(d)}${x(h)}${x(g)}`}function Zr(s,e,t){if(t==="grayscale")return["#FFFFFF","#000000","#FFFFFF","#000000"];if(t==="black")return[da(s,e,50),"#FFFFFF",da(s,e*.6,70),da(s,e*.8,35)];const r=da(s,e,50),o=da((s+180)%360,e,50);return[r,o,r,o]}const rg=[1],_a=[0];let Av=0;const QE=new Set;function JE(s,e){for(let t=0;t<e.length;t++){const r=e[t]??1;rg[t]=r,_a[t]=(_a[t]??0)+s*r}for(const t of QE)_a[t]=(_a[t]??0)+s*(rg[t]??1)}function ZE(s){Av=s}function $E(){return _a[Av]??0}const cc=12,Gn=Math.PI*2;function Ev(s,e){if(e<=0)return 0;const t=Math.min(2.2,10/e);return Math.min(e,1+Math.floor(s/t))}const ec=[[[0,"#5ea733"],[.1,"#a9c97a"],[.17,"#efe6c6"],[.26,"#f2b2c5"],[.36,"#df4a67"],[.45,"#b81f3d"],[.53,"#1a0d33"],[.61,"#2e44d8"],[.7,"#5f78f0"],[.79,"#dfe4f4"],[.87,"#eee6c4"],[.94,"#9cc46c"],[1,"#5ea733"]],[[0,"#e0a82e"],[.1,"#f0cd7a"],[.17,"#f6ead0"],[.26,"#f6b49a"],[.36,"#e8573a"],[.45,"#b52a1c"],[.53,"#2a0a0c"],[.61,"#a8401c"],[.7,"#e8823e"],[.79,"#f7dcc4"],[.87,"#f4e8c8"],[.94,"#e9c060"],[1,"#e0a82e"]],[[0,"#1f9a8a"],[.1,"#86d1bf"],[.17,"#eaf2e2"],[.26,"#9fe3e8"],[.36,"#25b5d4"],[.45,"#13708f"],[.53,"#0b1430"],[.61,"#5a35c8"],[.7,"#9a7cf0"],[.79,"#e6e0f6"],[.87,"#e4f2ea"],[.94,"#5cc2a6"],[1,"#1f9a8a"]],[[0,"#2b3f8f"],[.1,"#7d8fd0"],[.17,"#eef0f6"],[.26,"#c9d0ea"],[.36,"#5266b8"],[.45,"#22307a"],[.53,"#070a1c"],[.61,"#26357e"],[.7,"#6a7cc6"],[.79,"#e8ebf5"],[.87,"#f4f3ee"],[.94,"#8a9ad6"],[1,"#2b3f8f"]]],ew=["Inflated","Paper","Line","Print"],tw=`
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
}`,nw=`
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
}`,iw=0,rw=1,sw=2;function Cc(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(m=>m+m).join(""):e,r=(parseInt(t.slice(0,2),16)||0)/255,o=(parseInt(t.slice(2,4),16)||0)/255,l=(parseInt(t.slice(4,6),16)||0)/255,c=Math.max(r,o,l),f=Math.min(r,o,l),d=(c+f)/2;if(c===f)return[0,0,d];const h=c-f,g=d>.5?h/(2-c-f):h/(c+f);let x;return c===r?x=((o-l)/h+(o<l?6:0))*60:c===o?x=((l-r)/h+2)*60:x=((r-o)/h+4)*60,[x,g,d]}function wv(s,e,t){return`hsl(${(s%360+360)%360} ${Math.max(0,Math.min(1,e))*100}% ${t*100}%)`}const sg=Cc(Zr(245,100,"contrast")[0]);function Tv(s){const[e,t]=Cc(s[0]??"#000000");return t===0?{hue:0,sat:0}:{hue:e-sg[0],sat:t/(sg[1]||1)}}function og(s,e){const t=document.createElement("canvas");t.width=512,t.height=1;const r=t.getContext("2d"),o=r.createLinearGradient(0,0,512,0);for(const[c,f]of s){const[d,h,g]=Cc(f);o.addColorStop(c,wv(d+e.hue,h*e.sat,g))}r.fillStyle=o,r.fillRect(0,0,512,1);const l=new Vy(t);return l.wrapS=fc,l.magFilter=bn,l.minFilter=bn,l.generateMipmaps=!1,l}class bv{constructor(){B(this,"textures");B(this,"turnKey","#reference");B(this,"palFrom",0);B(this,"palTo",0);B(this,"palMix",1);B(this,"styleUniform",{value:0});B(this,"turn",{hue:0,sat:1});this.textures=ec.map(e=>og(e,{hue:0,sat:1}))}shared(){return{uPalA:{value:this.textures[0]},uPalB:{value:this.textures[0]},uPalMix:{value:0},uT:{value:0},uOff:{value:0},uWA:{value:0},uWB:{value:0},uWC:{value:0},uDepth:{value:.32},uSpec:{value:.16},uCenter:{value:new Z}}}material(e,t,r={}){return new gi({vertexShader:tw,fragmentShader:nw,side:Gi,uniforms:{...t,uStyle:this.styleUniform,uMode:{value:e},uAng:{value:0},uWS:{value:1},...r}})}update(e,t,r,o,l=0){this.styleUniform.value=Math.max(0,Math.min(ew.length-1,Math.round(l)));const c=e[0]??"";if(c!==this.turnKey){this.turnKey=c;const d=Tv(e);this.turn=d;const h=this.textures;this.textures=ec.map(g=>og(g,d));for(const g of h)g.dispose()}const f=Math.max(0,Math.min(ec.length-1,Math.round(t)));o&&(this.palFrom=this.palTo=f,this.palMix=1),f!==this.palTo&&(this.palFrom=this.palMix<.5?this.palFrom:this.palTo,this.palTo=f,this.palMix=0),this.palMix=Math.min(1,this.palMix+r)}apply(e,t,r){e.uPalA.value=this.textures[this.palFrom],e.uPalB.value=this.textures[this.palTo],e.uPalMix.value=this.palMix,e.uDepth.value=t,e.uSpec.value=r}backdrop(e,t,r,o){const l=this.styleUniform.value;if(l===0){Rv(e,t,r,o);return}const c=Math.max(0,Math.min(1,o));if(e.globalCompositeOperation="source-over",e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,t,r),l===2||c<=0)return;const f=ec[this.palTo],d=f.find(([m])=>m===(l===1?.53:.17))??f[0],[h,g,x]=Cc(d[1]);e.globalAlpha=c,e.fillStyle=wv(h+this.turn.hue,g*this.turn.sat,l===1?x*1.25:x),e.fillRect(0,0,t,r),e.globalAlpha=1}dispose(){for(const e of this.textures)e.dispose();this.textures=[]}}function Cv(s,e,t){const r=e/t,o=30,l=Math.tan(o/2*Math.PI/180),c=r<16/9?2*Math.atan(l*(16/9)/r)*180/Math.PI:o;(s.aspect!==r||s.fov!==c)&&(s.aspect=r,s.fov=c,s.updateProjectionMatrix())}function Rv(s,e,t,r){const o=Math.max(0,Math.min(1,r)),l=c=>{const f=parseInt(c.slice(1),16),d=Math.round((f>>16&255)*o),h=Math.round((f>>8&255)*o),g=Math.round((f&255)*o);return`rgb(${d},${h},${g})`};if(s.globalCompositeOperation="source-over",s.globalAlpha=1,o<=0)s.fillStyle="#000";else{const c=s.createLinearGradient(0,0,0,t);c.addColorStop(0,l("#8e94a2")),c.addColorStop(.2,l("#bfc3d0")),c.addColorStop(.42,l("#dde1ec")),c.addColorStop(.68,l("#d9dde9")),c.addColorStop(1,l("#9ea2af")),s.fillStyle=c}s.fillRect(0,0,e,t)}function pd(s){const e=new Sv({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"});return e.setPixelRatio(1),e.setClearColor(0,0),e}function md(s,e,t,r){s.fillStyle="#000",s.fillRect(0,0,e,t),s.fillStyle="rgba(255,255,255,0.4)",s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.fillText(`${r} NEEDS WEBGL`,e/2,t/2)}class Rs{constructor(e){B(this,"dt",1/60);B(this,"step",0);B(this,"openness");B(this,"aim",{x:0,y:0});B(this,"spread",.4);B(this,"depth",.35);B(this,"turn",0);B(this,"pinch",0);B(this,"fist",0);B(this,"clapped",!1);B(this,"clapStrength",0);B(this,"wasClapping",!1);B(this,"burst",0);B(this,"bump",0);B(this,"bass",0);B(this,"mid",0);B(this,"high",0);B(this,"kick",0);B(this,"snare",0);B(this,"hat",0);B(this,"energy",.5);B(this,"build",0);B(this,"drop",0);B(this,"bright",.5);B(this,"lastClock",null);B(this,"lastFrame",0);this.rest=e,this.openness=e}read(e,t){const r=performance.now(),o=this.lastFrame?Math.min(.1,(r-this.lastFrame)/1e3):1/60;this.lastFrame=r;const l=$E();this.step=this.lastClock===null?0:Math.max(-.2,Math.min(.2,l-this.lastClock)),this.lastClock=l,this.dt=o;const c=[e.left,e.right].filter(Boolean);let f=this.rest;if(c.length){const T=Math.max(...c.map(L=>L.gesture==="fist"?0:L.fingerCount??3));f=Math.max(0,Math.min(1,T/5))}this.openness+=(f-this.openness)*(1-Math.exp(-o*5));let d=0,h=0;c.length&&(d=(c.reduce((T,L)=>T+L.position.x,0)/c.length-.5)*2,h=(.5-c.reduce((T,L)=>T+L.position.y,0)/c.length)*2);const g=1-Math.exp(-o*4);this.aim.x+=(d-this.aim.x)*g,this.aim.y+=(h-this.aim.y)*g,this.spread+=((e.distanceBetweenHands??.4)-this.spread)*g;const x=c.map(T=>T.depth).filter(T=>T!==void 0);this.depth+=((x.length?Math.max(...x):.35)-this.depth)*g;const m=e.twist??(c.length===1?c[0].angle??0:0);this.turn+=(m-this.turn)*g;const _=c.length?Math.max(...c.map(T=>T.pinch??0)):0;this.pinch+=(_-this.pinch)*(1-Math.exp(-o*10));const A=c.length?Math.max(...c.map(T=>T.openness!==void 0?1-T.openness:T.gesture==="fist"?1:0)):0;this.fist+=(Math.min(1,Math.max(0,(A-.35)/.4))-this.fist)*(1-Math.exp(-o*8));const C=!!e.clapping&&!e.synthetic;this.clapped=C&&!this.wasClapping,this.clapStrength=this.clapped?Math.max(.6,e.clapIntensity??1):0,this.wasClapping=C;const y=e.clapping?e.clapIntensity??1:0;this.burst=Math.max(this.burst*Math.exp(-o*2.2),y);const S=(T,L,P,z)=>T+(L-T)*(1-Math.exp(-o*(L>T?P:z)));this.bass=S(this.bass,(t==null?void 0:t.bass)??0,6,1.5),this.mid=S(this.mid,(t==null?void 0:t.mid)??0,4,1),this.high=S(this.high,(t==null?void 0:t.high)??0,8,2.5),this.bump*=Math.exp(-o/.07),t!=null&&t.beat&&(this.bump=Math.max(this.bump,t.beatIntensity||1)),this.kick=(t==null?void 0:t.kick)??0,this.bump=Math.max(this.bump,this.kick*.9),this.snare=(t==null?void 0:t.snare)??0,this.hat=(t==null?void 0:t.hat)??0,this.energy=S(this.energy,t!=null&&t.live?t.energy??.5:.5,1,1),this.build=(t==null?void 0:t.build)??0,this.drop=(t==null?void 0:t.drop)??0,this.bright=S(this.bright,(t==null?void 0:t.bright)??.5,1,1)}}class ow{constructor(e,t){B(this,"canvas");B(this,"ctx");B(this,"cfg",Ym);B(this,"playing",new Rs(.6));B(this,"n",0);B(this,"x",new Float32Array(0));B(this,"y",new Float32Array(0));B(this,"z",new Float32Array(0));B(this,"vx",new Float32Array(0));B(this,"vy",new Float32Array(0));B(this,"light",new Float32Array(0));B(this,"phase",new Float32Array(0));B(this,"time",0);B(this,"events",[]);B(this,"lastKick",0);B(this,"lastSnare",0);B(this,"lastHat",0);B(this,"kicks",0);B(this,"flow",[Math.random()*10,Math.random()*10,Math.random()*10]);B(this,"flowTo",[...this.flow]);B(this,"gather",0);B(this,"breath",0);B(this,"grain",document.createElement("canvas"));B(this,"aspect",16/9);this.canvas=e,this.ctx=t,this.grain.width=this.grain.height=256;const r=this.grain.getContext("2d"),o=r.createImageData(256,256);for(let l=0;l<o.data.length;l+=4){const c=Math.random()<.5?0:255;o.data[l]=o.data[l+1]=o.data[l+2]=c,o.data[l+3]=Math.random()<.35?255:0}r.putImageData(o,0,0)}setParams(e){this.cfg=bs(Ym,e)}resize(e){const t=Math.min(this.n,e),r=o=>{const l=new Float32Array(e);return l.set(o.subarray(0,t)),l};this.x=r(this.x),this.y=r(this.y),this.z=r(this.z),this.vx=r(this.vx),this.vy=r(this.vy),this.light=r(this.light),this.phase=r(this.phase);for(let o=t;o<e;o++)this.x[o]=Math.random()*this.aspect,this.y[o]=Math.random(),this.z[o]=.25+.75*Math.pow(Math.random(),2.2),this.phase[o]=Math.random()*Math.PI*2,this.light[o]=0;this.n=e}angleAt(e,t,r){const[o,l,c]=this.flow;return Math.sin(e*1.3+o+r*.05)*1.7+Math.cos(t*1.7-l+r*.04)*1.5+Math.sin((e+t)*.8+c)*1.2}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;this.aspect=f/d;const h=this.aspect,g=this.playing;g.read(e,r);const x=Math.min(.1,g.dt),m=Math.min(.08,Math.max(0,g.step));this.time+=m;const _=Math.max(50,Math.min(6e3,Math.round(c.field.count)));_!==this.n&&this.resize(_);const A=!!(r!=null&&r.live),C=k=>1-Math.exp(-x*k),y=Math.max(g.kick,g.bump)*c.sound.beat;if(y>.45&&this.lastKick<=.45){this.kicks+=1;const k=Math.random(),ie=(.5+.6*Math.random())*Math.min(1.4,y),N=k<.5?0:k<.82?1:2;this.events.push({kind:N,x:Math.random()*h,y:.1+.8*Math.random(),age:0,strength:ie,angle:Math.random()*Math.PI,reach:.2+.5*Math.random()}),this.kicks%(6+Math.floor(Math.random()*6))===0&&(this.flowTo=this.flowTo.map(K=>K+(Math.random()-.5)*4))}this.lastKick=y;const S=(k,ie)=>{for(let N=0;N<k;N++){const K=Math.floor(Math.random()*this.n);this.light[K]=Math.max(this.light[K],ie)}},T=g.snare*c.sound.sparks;T>.5&&this.lastSnare<=.5&&S(Math.round(this.n*.012),1.1),this.lastSnare=T;const L=g.hat*c.sound.sparks;if(L>.5&&this.lastHat<=.5&&S(Math.round(this.n*.004),.7),this.lastHat=L,Math.random()<x*.35*(A?c.sound.quiet:1)&&this.events.push({kind:0,x:Math.random()*h,y:Math.random(),age:0,strength:.45,angle:0,reach:.4}),g.clapped&&c.hands.clap>0)for(let k=0;k<this.n;k++){this.light[k]=Math.max(this.light[k],1.2*c.hands.clap);const ie=this.x[k]-h/2,N=this.y[k]-.5,K=Math.hypot(ie,N)+.05;this.vx[k]+=ie/K*.25*c.hands.clap,this.vy[k]+=N/K*.25*c.hands.clap}this.breath+=(g.bass*c.sound.bass-this.breath)*C(4);for(let k=0;k<3;k++)this.flow[k]+=(this.flowTo[k]-this.flow[k])*C(.3);const z=!e.synthetic?[e.left,e.right].filter(k=>!!k):[],D=z.length?g.fist:0,O=Math.max(Math.min(1,c.form.circle),D*Math.min(1,c.hands.reach));this.gather+=(O-this.gather)*C(O>this.gather?.9:.6);const E=.018*c.field.drift,U=this.time,q=h/2,H=.5,F=.3,W=U*.04,ee=Math.exp(-x*2.2);for(let k=0;k<this.n;k++){const ie=this.z[k],N=this.angleAt(this.x[k],this.y[k],U);let K=this.x[k]+(Math.cos(N)*E*ie+this.vx[k])*m,Ee=this.y[k]+(Math.sin(N)*E*ie+this.vy[k])*m;K+=(K-q)*this.breath*.004*ie,Ee+=(Ee-H)*this.breath*.004*ie;for(const Me of z){const ve=Me.position.x*h,I=Me.position.y,ce=K-ve,oe=Ee-I,Ae=ce*ce+oe*oe,Se=Math.exp(-Ae/.02)*(1-D)*c.hands.reach;if(Se>.01){const xe=Math.sqrt(Ae)+.01;K+=ce/xe*Se*.006,Ee+=oe/xe*Se*.006,this.light[k]=Math.max(this.light[k],Se*.9)}}if(this.gather>.002){const Me=this.phase[k]+W,ve=F*(.94+.12*(k*.618%1))*(1+.06*this.breath),I=q+Math.cos(Me)*ve,ce=H+Math.sin(Me)*ve,oe=this.gather*this.gather*C(1.6);K+=(I-K)*oe,Ee+=(ce-Ee)*oe}K<-.02?K+=h+.04:K>h+.02&&(K-=h+.04),Ee<-.02?Ee+=1.04:Ee>1.02&&(Ee-=1.04),this.x[k]=K,this.y[k]=Ee,this.vx[k]*=ee,this.vy[k]*=ee,this.light[k]*=Math.exp(-x*(1.6+.8*Math.random()))}for(const k of this.events){k.age+=x;const ie=k.age*.55;for(let N=0;N<this.n;N++){const K=this.x[N]-k.x,Ee=this.y[N]-k.y;let Me=0;if(k.kind===0){const ve=Math.hypot(K,Ee)-ie;Me=Math.exp(-(ve*ve)/.0012)}else if(k.kind===1)k.age<x*1.5&&Math.hypot(K,Ee)<k.reach*.6&&Math.random()<.35&&(Me=.6+Math.random()*.6);else{const ve=Math.cos(k.angle),I=Math.sin(k.angle),ce=K*-I+Ee*ve-(k.age-.6)*.08;Me=Math.exp(-(ce*ce)/25e-5)*(Math.abs(K*ve+Ee*I)<k.age*1.4?1:0)}Me>.02&&(this.light[N]=Math.max(this.light[N],1.6*Me*k.strength*(1-k.age/2.2)))}}this.events=this.events.filter(k=>k.age<2.2),l.globalCompositeOperation="source-over",l.globalAlpha=1-.92*Math.max(0,Math.min(1,c.look.trail)),l.fillStyle="#000",l.fillRect(0,0,f,d),l.globalAlpha=1;const j=8,re=[];for(let k=0;k<j;k++)re.push(new Path2D);const G=Math.max(.6,d/720*1.6*c.field.size),X=.2*c.look.glow;for(let k=0;k<this.n;k++){const ie=this.z[k],N=.6+.4*Math.sin(U*.7+this.phase[k]*5),K=Math.min(1,(X*N+this.light[k])*(.35+.65*ie)+.2*this.gather*ie);if(K<.03)continue;const Ee=Math.min(j-1,Math.floor(K*j)),Me=G*(.5+ie)*(1+.6*Math.min(1,this.light[k]));re[Ee].rect(this.x[k]*d-Me/2,this.y[k]*d-Me/2,Me,Me)}for(let k=0;k<j;k++)l.globalAlpha=(k+.5)/j,l.fillStyle="#fff",l.fill(re[k]);if(c.look.grain>.01){l.globalCompositeOperation="lighter",l.globalAlpha=.05*c.look.grain;const k=Math.floor(Math.random()*256),ie=Math.floor(Math.random()*256),N=l.createPattern(this.grain,"repeat");N&&(l.save(),l.translate(-k,-ie),l.fillStyle=N,l.fillRect(k,ie,f,d),l.restore())}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const ag={line:{count:14,weight:1,wave:1,birth:1,zoom:1,speed:1},hands:{open:1,pull:1,clap:1},sound:{beat:1,bass:1,grow:1}},lg=110,aw=5;function cg(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(r=>r+r).join(""):e;return[parseInt(t.slice(0,2),16)||0,parseInt(t.slice(2,4),16)||0,parseInt(t.slice(4,6),16)||0]}class lw{constructor(e,t){B(this,"canvas");B(this,"ctx");B(this,"cfg",ag);B(this,"playing",new Rs(.5));B(this,"age",0);B(this,"time",0);B(this,"unfold",0);B(this,"breath",0);B(this,"shiver",0);B(this,"pulses",[]);B(this,"lastKick",0);B(this,"hand",{x:.5,y:.5,hold:0});B(this,"idle",0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=bs(ag,e)}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;const h=this.playing;h.read(e,r);const{dt:g}=h,x=Math.max(0,h.step);this.age+=x,this.time+=x*Math.max(0,c.line.speed),this.idle+=g;const m=k=>1-Math.exp(-g*k),_=[e.left,e.right].filter(Boolean),A=_.length>0&&!e.synthetic,C=!!(r!=null&&r.live);let y;A?y=(1-h.fist)*c.hands.open:C?y=(.12+.88*h.energy)*c.sound.grow:y=.35+.3*Math.sin(this.idle*.21),this.unfold+=(Math.min(1,Math.max(0,y))-this.unfold)*m(A?5:.8),this.breath+=(h.bass*c.sound.bass-this.breath)*m(3),h.clapped&&(this.shiver=Math.min(1.4,h.clapStrength*1.3*c.hands.clap)),this.shiver*=Math.exp(-g*2.4);const S=Math.max(h.kick,h.bump)*c.sound.beat;S>.45&&this.lastKick<=.45&&(this.pulses.push({at:0,strength:Math.min(1.2,S)}),this.pulses.length>aw&&this.pulses.shift()),this.lastKick=S;for(const k of this.pulses)k.at+=g*.75;if(this.pulses=this.pulses.filter(k=>k.at<.75),_.length){const k=_.reduce((N,K)=>N+K.position.x,0)/_.length,ie=_.reduce((N,K)=>N+K.position.y,0)/_.length;this.hand.x+=(k-this.hand.x)*m(8),this.hand.y+=(ie-this.hand.y)*m(8)}this.hand.hold+=((A?c.hands.pull:0)-this.hand.hold)*m(4);const T=c.line.birth,L=T<=0?1:Math.min(1,Math.max(0,(this.age-1.6*T)/(5*T))),P=L*L*(3-2*L),z=T<=0?0:Math.max(0,1-this.age/(2.4*T));l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,f,d);const D=Math.max(1,Math.round(c.line.count)),[O,E,U]=cg(t[0]??"#8899ff"),[q,H,F]=cg(t[2]??t[1]??"#ffffff"),W=Math.max(.1,c.line.zoom),ee=d*W,j=d/720*W,re=ee*.74*this.unfold*(1+.12*this.breath),G=c.line.wave,X=this.time;if(l.lineCap="round",l.lineJoin="round",l.globalCompositeOperation="lighter",z>.01){const k=(3+2.5*Math.sin(this.idle*2.2))*j*(1+this.breath);l.globalAlpha=Math.min(1,z*1.4),l.fillStyle="#fff",l.beginPath(),l.arc(f/2,d/2,Math.max(1,k),0,Math.PI*2),l.fill()}if(P>.002){const k=.5-.5*P,ie=.5+.5*P;for(let N=0;N<D;N++){const K=D===1?0:N/(D-1)*2-1,Ee=K*2.6*this.unfold,Me=this.shiver*Math.sin(N*12.9898)*43758.5453,ve=(Me-Math.floor(Me)-.5)*this.shiver*ee*.09;l.beginPath();let I=0,ce=0;for(let He=0;He<=lg;He++){const et=k+(ie-k)*(He/lg),Ze=Math.sin(Math.PI*et);let rt=d/2+K*re*.5;rt+=(Math.sin(et*6.2+X*.55+Ee)*.6+Math.sin(et*13.7-X*.38+Ee*1.7)*.25)*ee*.035*G*Ze*(.35+.65*this.unfold+this.breath*.6),rt+=ve*Ze*Math.sin(et*20+N);for(const bt of this.pulses){const Y=Math.abs(et-.5)-bt.at;rt-=Math.exp(-(Y*Y)/.0016)*bt.strength*ee*.05*(1-bt.at/.75)*(K===0?1:Math.sign(K)*-1)}if(this.hand.hold>.01){const bt=et-this.hand.x,Y=Math.exp(-(bt*bt)/.022)*Math.min(1,this.hand.hold)*.85;rt+=(this.hand.y*d-rt)*Y}const lt=et*f;He===0?l.moveTo(lt,rt):l.quadraticCurveTo(I,ce,(I+lt)/2,(ce+rt)/2),I=lt,ce=rt}l.lineTo(I,ce);const oe=Math.abs(K)*this.unfold,Ae=Math.round(255+(O+(q-O)*(K*.5+.5)-255)*oe),Se=Math.round(255+(E+(H-E)*(K*.5+.5)-255)*oe),xe=Math.round(255+(U+(F-U)*(K*.5+.5)-255)*oe),Ye=1/(1+(D-1)*(1-this.unfold)),Ie=c.line.weight*j*(1+.35*S);l.strokeStyle=`rgb(${Ae},${Se},${xe})`,l.globalAlpha=Math.min(1,.16*Ye*2.2),l.lineWidth=7*Ie,l.stroke(),l.globalAlpha=Math.min(1,.95*Math.max(Ye,.3+.7*this.unfold)),l.lineWidth=1.5*Ie,l.stroke()}}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const ug={colour:{speed:1,offset:0,palette:0,depth:.32},field:{count:3,zoom:1,sway:1,bounce:0,drift:.2,backdrop:1,return:1,glide:0},hands:{wind:1,release:1,follow:1,clap:1},sound:{wind:1,gust:1,mid:1,high:1,stems:0,seeds:0}};function gd(s,e){s.traverse(t=>{if(t instanceof Un||t instanceof Xh||t instanceof cv){t.geometry.dispose();const r=t.material;Array.isArray(r)?r.forEach(o=>o.dispose()):r.dispose()}}),s.clear(),e.dispose(),e.forceContextLoss()}const cw="/assets/dandelion-hJsSsoAd.bin";let pa=null;function uw(){return pa||(pa=fetch(cw).then(s=>{if(!s.ok)throw new Error(`dandelion.bin: ${s.status}`);return s.arrayBuffer()}).then(fw),pa.catch(()=>{pa=null})),pa}function fw(s){const e=new DataView(s);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="DNDL")throw new Error("Not a dandelion file");const r=e.getUint32(4,!0),o=JSON.parse(new TextDecoder().decode(new Uint8Array(s,8,r))),l=8+r,c=(I,ce)=>new Float32Array(s.slice(l+I,l+I+ce*4)),f=(I,ce)=>new Int8Array(s.slice(l+I,l+I+ce)),d=(I,ce)=>new Uint8Array(s.slice(l+I,l+I+ce)),h=(I,ce)=>new Uint32Array(s.slice(l+I,l+I+ce*4)),g=I=>{const ce=o.parts[I],oe=c(ce.pos,ce.count*3),Ae=f(ce.nrm,ce.count*3),Se=new Float32Array(ce.count*3);for(let xe=0;xe<Se.length;xe++)Se[xe]=Ae[xe]/127;return{p:ce,position:oe,normal:Se,index:h(ce.idx,ce.index)}},x=["stem","base","bracts"].map(g);let m=0,_=0;for(const I of x)m+=I.p.count,_+=I.index.length;const A=new Float32Array(m*3),C=new Float32Array(m*3),y=new Float32Array(m),S=new Uint32Array(_);let T=0;{let I=0,ce=0;x.forEach((oe,Ae)=>{A.set(oe.position,I*3),C.set(oe.normal,I*3),y.fill(Ae===0?0:1,I,I+oe.p.count);for(let Se=0;Se<oe.index.length;Se++)S[ce+Se]=oe.index[Se]+I;if(Ae===0)for(let Se=1;Se<oe.position.length;Se+=3)T=Math.min(T,oe.position[Se]);I+=oe.p.count,ce+=oe.index.length})}const L=new dn;L.setAttribute("position",new Vt(A,3)),L.setAttribute("normal",new Vt(C,3)),L.setAttribute("aRigid",new Vt(y,1)),L.setIndex(new Vt(S,1));const P=o.seeds,z=c(P.pivot,P.count*3),D=c(P.axis,P.count*3),O=g("achenes"),E=d(o.parts.achenes.seed,O.p.count),U=new Float32Array(O.p.count),q=new Float32Array(O.p.count*3);for(let I=0;I<O.p.count;I++){const ce=E[I];U[I]=ce,q[I*3]=z[ce*3],q[I*3+1]=z[ce*3+1],q[I*3+2]=z[ce*3+2]}const H=new dn;H.setAttribute("position",new Vt(O.position,3)),H.setAttribute("normal",new Vt(O.normal,3)),H.setAttribute("aSeed",new Vt(U,1)),H.setAttribute("aPivot",new Vt(q,3)),H.setIndex(new Vt(O.index,1));const F=P.segments,W=c(P.a,F*3),ee=c(P.b,F*3),j=d(P.seed,F),re=c(P.ta,F),G=c(P.tb,F),X=new Float32Array(F*4*3),k=new Float32Array(F*4*3),ie=new Float32Array(F*4*3),N=new Float32Array(F*4*2),K=new Float32Array(F*4),Ee=new Float32Array(F*4),Me=new Uint32Array(F*6);for(let I=0;I<F;I++){const ce=j[I];for(let Ae=0;Ae<4;Ae++){const Se=I*4+Ae;X.set(W.subarray(I*3,I*3+3),Se*3),k.set(ee.subarray(I*3,I*3+3),Se*3),ie.set(z.subarray(ce*3,ce*3+3),Se*3);const xe=Ae>>1,Ye=Ae&1?1:-1;N[Se*2]=xe,N[Se*2+1]=Ye,K[Se]=ce,Ee[Se]=xe?G[I]:re[I]}const oe=I*4;Me.set([oe,oe+1,oe+2,oe+2,oe+1,oe+3],I*6)}const ve=new dn;ve.setAttribute("position",new Vt(X,3)),ve.setAttribute("aB",new Vt(k,3)),ve.setAttribute("aPivot",new Vt(ie,3)),ve.setAttribute("aCorner",new Vt(N,2)),ve.setAttribute("aSeed",new Vt(K,1)),ve.setAttribute("aT",new Vt(Ee,1)),ve.setIndex(new Vt(Me,1));for(const I of[L,H,ve])I.boundingSphere=new wo(new Z(0,-5,0),1e4);return{body:L,achenes:H,strokes:ve,seeds:P.count,pivot:z,axis:D,foot:T}}const mo=20,Wf=[1.4,3.2],Xf=[2.6,4.6],ba=`
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
`,hw=`
${ba}
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
}`,fg=`
${ba}
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
}`,dw=`
${ba}
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
}`,pw=`
${ba}
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
}`,mw=`
${ba}
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
}`;function jf(s,e){let t=0,r=1/e;for(;s>0;)t+=s%e*r,s=Math.floor(s/e),r/=e;return t}function Vi(s){const e=Math.sin(s*127.1+311.7)*43758.5453;return e-Math.floor(e)}const Kf=Array.from({length:mo},(s,e)=>({x:e===0?0:jf(e+1,2)*2-1,z:e===0?0:-4.6+jf(e,3)*6,y:e===0?.3:-.4+jf(e,5)*1.9,k:e===0?1:.85+Vi(e)*.3,yaw:Vi(e+40)*Gn,ph:Vi(e+80)*Gn,off:e*.137%1}));class gw{constructor(e,t,r=null){B(this,"canvas");B(this,"ctx");B(this,"cfg",ug);B(this,"surface");B(this,"renderer",null);B(this,"host");B(this,"scene");B(this,"camera");B(this,"group",new ji);B(this,"depth",0);B(this,"scale",1);B(this,"look",null);B(this,"playing",new Rs(.5));B(this,"failed",!1);B(this,"model",null);B(this,"flowers",[]);B(this,"materials",[]);B(this,"started",!1);B(this,"since",0);B(this,"seedTex",null);B(this,"seedData",new Float32Array(0));B(this,"off",new Float32Array(0));B(this,"vel",new Float32Array(0));B(this,"turn",new Float32Array(0));B(this,"hold",new Float32Array(0));B(this,"away",new Uint8Array(0));B(this,"thresh",new Float32Array(0));B(this,"flight",new Float32Array(0));B(this,"dest",new Float32Array(0));B(this,"phase",new Float32Array(0));B(this,"motionTime",0);B(this,"colourTime",0);B(this,"gust",0);B(this,"pace",0);B(this,"levelE",0);B(this,"seedsE",0);B(this,"lastBeat",!1);B(this,"lastClap",!1);B(this,"hop",0);B(this,"dance",0);B(this,"sinceClap",99);B(this,"lastAim",{x:0,y:0});B(this,"swipe",new It);B(this,"present",0);B(this,"strokeWidth",null);B(this,"viewport",null);B(this,"time",null);this.canvas=e,this.ctx=t,this.host=r,this.scene=r?r.scene:new Ec,this.camera=r?r.camera:new ai(30,16/9,.1,200),this.surface=document.createElement("canvas");try{r||(this.renderer=pd(this.surface)),this.look=r?r.look:new bv}catch(o){console.error("Dandelion could not start:",o),this.failed=!0;return}uw().then(o=>{this.look&&this.build(o)}).catch(o=>{console.error("Dandelion model failed to load:",o),this.failed=!0})}setParams(e){this.cfg=bs(ug,e)}isReady(){return this.model!==null||this.failed}build(e){const t=this.look,r=e.seeds,o=r*mo;this.seedData=new Float32Array(r*2*mo*4),this.seedTex=new ov(this.seedData,r*2,mo,Pi,Xi),this.seedTex.magFilter=_n,this.seedTex.minFilter=_n,this.seedTex.needsUpdate=!0,this.off=new Float32Array(o*3),this.vel=new Float32Array(o*3),this.turn=new Float32Array(o*4);for(let g=0;g<o;g++)this.turn[g*4+3]=1;this.hold=new Float32Array(o),this.away=new Uint8Array(o),this.thresh=new Float32Array(o),this.flight=new Float32Array(o),this.dest=new Float32Array(o*3),this.phase=new Float32Array(o);for(let g=0;g<o;g++)this.thresh[g]=.12+Vi(g*3.7+1)*1,this.phase[g]=Vi(g*1.3+7)*Gn;const l={value:new It(1,1)},c={value:0},f={value:e.foot},d={value:this.seedTex},h={value:1.5};this.strokeWidth=h,this.viewport=l,this.time=c;for(let g=0;g<mo;g++){const x=t.shared(),m={uBend:{value:new Z},uWave:{value:new It},uWavePhase:{value:0},uRow:{value:g},uShimmer:{value:0}},_={...x,...m,uViewport:l,uTime:c,uFoot:f,uSeeds:d},A=(S,T,L={})=>{const P=new gi({vertexShader:S,fragmentShader:T,uniforms:{..._,...L},side:Gi});return this.materials.push(P),P},C=new ji;C.add(new Un(e.body,A(hw,fg))),C.add(new Un(e.achenes,A(dw,fg)));const y=A(pw,mw,{uWidth:h});y.transparent=!0,y.depthWrite=!1,C.add(new Un(e.strokes,y));for(const S of C.children)S.frustumCulled=!1;C.visible=!1,this.group.add(C),this.flowers.push({root:C,shared:x,u:m,presence:0,at:new Z,size:1,placed:!1,bend:new It})}this.scene.add(this.group),this.model=e}pickDestination(e,t,r){const o=-4+Math.random()*6,l=(15.5-o)*t;this.dest[e*3]=(Math.random()*2-1)*l*r*.92,this.dest[e*3+1]=.1+(Math.random()*1.75-.85)*l,this.dest[e*3+2]=o}destroy(){var e,t;this.host||(e=this.look)==null||e.dispose(),this.look=null,(t=this.seedTex)==null||t.dispose();for(const r of this.materials)r.dispose();for(const r of this.flowers)r.root.clear();this.scene.remove(this.group),this.renderer&&gd(this.scene,this.renderer),this.renderer=null}render(e,t,r){const{ctx:o,cfg:l}=this,c=this.canvas.width,f=this.canvas.height;if(c===0||f===0)return;const d=this.renderer;if(this.failed||!d||!this.look){md(o,c,f,"DANDELION");return}Rv(o,c,f,l.field.backdrop),this.model&&(Cv(this.camera,c,f),this.camera.position.set(0,.5,15.5/Math.max(.3,l.field.zoom)),this.camera.lookAt(0,.1,0),this.update(e,t,r,c,f),(this.surface.width!==c||this.surface.height!==f)&&d.setSize(c,f,!1),d.render(this.scene,this.camera),o.drawImage(this.surface,0,0,c,f))}update(e,t,r,o,l){const{cfg:c}=this,f=this.look,d=this.model;if(!f||!d||this.failed)return;const h=this.playing;h.read(e,r);const{dt:g}=h,x=Math.max(0,c.field.glide??0),m=M=>x>0?1-Math.exp(-g/(M*x)):1;this.pace+=(Math.max(0,h.step)-this.pace)*m(1.4);const _=x>0?Math.max(this.pace,g*.35):Math.max(0,h.step),A=e.left||e.right?1:0;this.present+=(A-this.present)*(1-Math.exp(-g*3));const C=M=>{const Q=r;if(!Q)return 0;const le=Math.round(M);return le===1?Math.max(Q.bass,Q.lowMid*.6):le===2?Q.mid:le===3?Q.high:Q.overall},y=Math.min(1,C(c.sound.stems??0)*1.4)*c.sound.wind;this.levelE+=(y-this.levelE)*m(.9);const S=x>0?this.levelE:y,T=Math.min(1,C(c.sound.seeds??0)*1.4)*c.sound.wind;this.seedsE+=(T-this.seedsE)*m(.5);const L=x>0?this.seedsE:T;this.motionTime+=_,this.colourTime+=(_*c.colour.speed*(1+h.mid*c.sound.mid*1.2)+g*h.burst*c.hands.clap*.9)/cc;const P=this.motionTime,z=!!(r!=null&&r.beat),D=z&&!this.lastBeat,O=D&&c.sound.gust>0;this.hop=Math.max(this.hop*Math.exp(-g*5),D?(r==null?void 0:r.beatIntensity)||1:0),this.dance+=_,this.lastBeat=z,O&&(this.gust=Math.max(this.gust,((r==null?void 0:r.beatIntensity)||1)*c.sound.gust)),this.gust*=Math.exp(-g*2.5);const E=!!e.clapping&&c.hands.clap>0,U=E&&!this.lastClap;this.lastClap=E,this.sinceClap+=g;const q=Math.min(1,this.sinceClap/4)**3;U&&(this.sinceClap=0);const H=h.aim.x-this.lastAim.x,F=h.aim.y-this.lastAim.y;this.lastAim={x:h.aim.x,y:h.aim.y};const W=A?H/Math.max(g,.001):0,ee=A?F/Math.max(g,.001):0;this.swipe.x+=(W-this.swipe.x)*(1-Math.exp(-g*6)),this.swipe.y+=(ee-this.swipe.y)*(1-Math.exp(-g*6));const j=.5*Math.sin(P*.11)+.25*Math.sin(P*.27+1.3),re=.25+S*1.6+this.gust*1.2,G=new Z(Math.cos(j)*re,.15*Math.sin(P*.19),Math.sin(j)*re*.4);G.x+=ac.clamp(this.swipe.x,-4,4)*1.6*c.hands.wind,G.y+=ac.clamp(this.swipe.y,-4,4)*1*c.hands.wind;const X=A?ac.clamp((h.openness-.6)/.4,-1,1)*c.hands.release:0,k=c.field.drift,ie=Math.min(1,k*2),N=Math.sqrt(Math.min(1,3/Math.max(1,Math.round(c.field.count)))),K=Math.min(.72,N*(k*(.25+L*.45)+X*.3*this.present*ie)),Ee=q*Math.min(1,c.hands.clap)*ie*N,Me=Math.max(.25,c.field.return??1),ve=Math.min(1,K*5),I=A&&h.openness<.15&&c.hands.release>0,ce=!this.started;this.host||f.update(t,c.colour.palette,g,ce);const oe=Math.tan(this.camera.fov/2*Math.PI/180),Ae=o/l,Se=Math.max(0,Math.min(mo,Math.round(c.field.count))),xe=Math.max(1,Se);this.since+=g;const Ye=Ev(this.since,Se),Ie=2.2*Math.pow(xe,-.42)*this.scale;let He=0;for(let M=0;M<xe;M++)He+=Kf[M].x;He/=xe;let et=0;for(let M=0;M<xe;M++)et=Math.max(et,Math.abs(Kf[M].x-He));const Ze=new Z(h.aim.x*5.2,.1+h.aim.y*3,2),rt=1.2*Math.max(.4,1+(h.spread-.4)*1.6),lt=d.seeds,bt=new Z,Y=new rr,At=new rr,dt=new rr,Tt=new Z,ke=new Z(0,1,0),kt=new Z(1,0,0),w=this.seedData;this.flowers.forEach((M,Q)=>{const le=Kf[Q],_e=Q<Ye;if(M.presence+=((_e?1:0)-M.presence)*(1-Math.exp(-g*1.4)),ce&&(M.presence=0),!_e&&M.presence<.004&&(M.presence=0),M.root.visible=M.presence>.002,!M.root.visible){M.placed=!1,this.off.fill(0,Q*lt*3,(Q+1)*lt*3),this.vel.fill(0,Q*lt*3,(Q+1)*lt*3),this.away.fill(0,Q*lt,(Q+1)*lt),this.flight.fill(0,Q*lt,(Q+1)*lt);return}const de=Ie*le.k,we=(xe===1?0:le.z)+this.depth,ge=(15.5-we)*oe*Ae,me=xe===1?0:(le.x-He)/Math.max(.5,et)*ge*(.66+.24*Math.min(1,(xe-1)/12)),Ve=.1-(15.5-we)*oe,Ge=.1+(15.5-we)*oe;let De=xe===1?le.y:le.y*Math.min(1,.5+xe*.1);De=Math.min(De,Ve-d.foot*de-.4,Ge-de*1.5),bt.set(me,De,we),M.placed||(M.at.copy(bt),M.size=de,M.placed=!0),M.at.lerp(bt,1-Math.exp(-g*1.2)),M.size+=(de-M.size)*(1-Math.exp(-g*1.2));const Le=1-Math.pow(1-M.presence,3);M.root.position.set(M.at.x,M.at.y-(1-Le)*-d.foot*M.size*.8,M.at.z),M.root.rotation.y=le.yaw,M.root.scale.setScalar(M.size*(.6+.4*Le));const tt=M.root.scale.x,ut=Math.cos(le.yaw),ht=Math.sin(le.yaw),J=this.dance,Ue=M.at.x*.35,ye=c.field.sway*(.45+S*1),Xe=ye*(.85*Math.sin(Gn*J/5.2-Ue+le.ph*.3)+.15*Math.sin(Gn*J/3.3+le.ph*1.7))+G.x*.22+this.gust*.5,Fe=ye*.3*Math.sin(Gn*J/7.1+le.ph*2.3)+G.z*.22;M.bend.x+=(Xe-M.bend.x)*(1-Math.exp(-g*1.6)),M.bend.y+=(Fe-M.bend.y)*(1-Math.exp(-g*1.6));const Te=M.bend.x,Je=M.bend.y;M.u.uBend.value.set(Te*ut-Je*ht,0,Te*ht+Je*ut);const gt=c.field.sway*(.12+S*.3);M.u.uWave.value.set(gt*ut,gt*ht),M.u.uWavePhase.value=Gn*J/1.6-Ue*2+le.ph;const ft=c.field.bounce*M.size*((.08+S*.22)*Math.sin(Gn*J/1.2-Ue+le.ph)+.3*this.hop*(.6+.4*Vi(Q+7)));M.root.position.y+=ft,M.u.uShimmer.value=(Math.round(c.sound.seeds??0)?L:h.high)*c.sound.high*2;const st=M.root.position.x+Te*tt,Ot=M.root.position.y,Qt=M.root.position.z+Je*tt;for(let an=0;an<lt;an++){const yt=Q*lt+an,Kt=yt*3;U&&Vi(yt*1.37+P*7.3)<Ee?this.hold[yt]=(Xf[0]+Vi(yt+P)*(Xf[1]-Xf[0]))/Me:O&&Vi(yt*.71+P*13.1)<.008*c.sound.gust*k*N&&(this.hold[yt]=(Wf[0]+Vi(yt+P*3.1)*(Wf[1]-Wf[0]))/Me),this.hold[yt]=Math.max(0,this.hold[yt]-g);const $n=.06*ve*Math.sin(P*.37+this.phase[yt]);I&&(this.flight[yt]=0);const ln=!I&&(this.hold[yt]>0||this.flight[yt]>0||K+$n>this.thresh[yt]),Ki=d.pivot[an*3],Xn=d.pivot[an*3+1],ci=d.pivot[an*3+2],vi=d.axis[an*3],xi=d.axis[an*3+1],_i=d.axis[an*3+2],qi=vi*ut+_i*ht,ar=-vi*ht+_i*ut;if(ln&&!this.away[yt]){this.flight[yt]=(6+Math.random()*6)/Me,this.pickDestination(yt,oe,Ae);const ze=.4+(U&&this.hold[yt]>0?3.2*c.hands.clap*q:0);this.vel[Kt]+=qi*ze,this.vel[Kt+1]+=xi*ze+.2,this.vel[Kt+2]+=ar*ze}this.away[yt]=ln?1:0;let Cn=this.off[Kt],jn=this.off[Kt+1],Nn=this.off[Kt+2],Dt=this.vel[Kt],Fn=this.vel[Kt+1],Sn=this.vel[Kt+2];if(_>0||ln){const ze=Math.max(_,0),Ce=st+(Ki*ut+ci*ht)*tt+Cn,qe=Ot+Xn*tt+jn,je=Qt+(-Ki*ht+ci*ut)*tt+Nn,_t=Math.sin(qe*.9+P*.7+this.phase[yt])*.6,vt=Math.sin(Ce*.7-P*.5+this.phase[yt]*.5)*.45,nt=Math.sin(je*.8+Ce*.5+P*.6)*.4;if(ln){this.flight[yt]=Math.max(0,this.flight[yt]-ze);const St=yt*3;let Nt=this.dest[St]-Ce,jt=this.dest[St+1]-qe,Ut=this.dest[St+2]-je;const Jt=Math.hypot(Nt,jt,Ut);Jt<.8&&this.pickDestination(yt,oe,Ae);const We=(1.2+.9*Vi(yt*2.9))*Math.min(1,Jt/2);Nt=Nt/Math.max(Jt,.001)*We,jt=jt/Math.max(Jt,.001)*We,Ut=Ut/Math.max(Jt,.001)*We;let fn=(Nt-Dt)*.7+G.x*.3+_t*.8,Et=(jt-Fn)*.7+G.y*.3+vt*.8+.05,gn=(Ut-Sn)*.7+G.z*.3+nt*.6;if(this.present>.01&&c.hands.follow>0){const Kn=Ze.x-Ce,zt=Ze.y-qe,ei=Ze.z-je,Pn=Math.hypot(Kn,zt,ei)+.001,Li=this.present*c.hands.follow*Math.min(1,Pn/rt-.6);fn+=Kn/Pn*Li*2.2-zt/Pn*this.present*c.hands.follow*1.4,Et+=zt/Pn*Li*2.2+Kn/Pn*this.present*c.hands.follow*1.4,gn+=ei/Pn*Li*1.2}const Rn=(15.5-je)*oe,Ct=Rn*Ae,yi=Math.abs(Ce)-Ct*1.02;yi>0&&(fn-=Math.sign(Ce)*yi*1.5);const Bt=Math.abs(qe-.1)-Rn*1.02;Bt>0&&(Et-=Math.sign(qe-.1)*Bt*1.5),je>6&&(gn-=(je-6)*1.5),je<-8&&(gn+=(-8-je)*1.5),Dt+=fn*ze*1.6,Fn+=Et*ze*1.6,Sn+=gn*ze*1.6;const qt=Math.exp(-ze*.5);Dt*=qt,Fn*=qt,Sn*=qt}else{const St=Math.hypot(Cn,jn,Nn),Nt=Math.min(1.8*Me,St*.9*Me)/Math.max(St,1e-4),jt=-Cn*Nt+_t*Math.min(1,St)*.6,Ut=-jn*Nt+vt*Math.min(1,St)*.6,Jt=-Nn*Nt+nt*Math.min(1,St)*.6,We=1-Math.exp(-ze*2.4);Dt+=(jt-Dt)*We,Fn+=(Ut-Fn)*We,Sn+=(Jt-Sn)*We,St<.004&&Math.hypot(Dt,Fn,Sn)<.02&&(Cn=jn=Nn=Dt=Fn=Sn=0)}Cn+=Dt*ze,jn+=Fn*ze,Nn+=Sn*ze}this.off[Kt]=Cn,this.off[Kt+1]=jn,this.off[Kt+2]=Nn,this.vel[Kt]=Dt,this.vel[Kt+1]=Fn,this.vel[Kt+2]=Sn;const b=Math.hypot(Cn,jn,Nn)/tt,te=Math.min(1,b/.8),ae=this.turn.subarray(yt*4,yt*4+4);if(Y.set(ae[0],ae[1],ae[2],ae[3]),te>.001){Tt.set(vi,xi,_i),dt.setFromUnitVectors(Tt,ke);const ze=P*.6+this.phase[yt];At.setFromAxisAngle(ke,ze),dt.premultiply(At),At.setFromAxisAngle(kt,.3*Math.sin(P*1.3+this.phase[yt]*2)),dt.premultiply(At),At.identity().slerp(dt,te),Y.slerp(At,1-Math.exp(-g*3))}else Y.slerp(At.identity(),1-Math.exp(-g*6));ae[0]=Y.x,ae[1]=Y.y,ae[2]=Y.z,ae[3]=Y.w;const se=(Q*lt*2+an*2)*4,fe=(Cn*ut-Nn*ht)/tt,Be=(Cn*ht+Nn*ut)/tt;w[se]=fe,w[se+1]=jn/tt,w[se+2]=Be,w[se+3]=1-Math.min(1,b/.6),w[se+4]=Y.x,w[se+5]=Y.y,w[se+6]=Y.z,w[se+7]=Y.w}const tn=M.shared;tn.uT.value=this.colourTime,tn.uOff.value=le.off+c.colour.offset,f.apply(tn,c.colour.depth,.16*(1+h.high*c.sound.high*2))}),this.started=!0,this.seedTex.needsUpdate=!0,this.viewport.value.set(o,l),this.time.value=P,this.strokeWidth.value=Math.max(1,l/620)}}const hg={colour:{speed:1,offset:0,palette:0,style:0,depth:.32},swarm:{count:4,zoom:1,height:0,size:1,drift:1,pulse:1,tentacles:1,backdrop:1,arrival:5,water:0,flow:0},hands:{follow:1,spread:1,clap:1},sound:{beat:1,bass:1,mid:1,high:1,flow:1,swell:0,bell:-1,open:0,tentacles:-1}};class vw{constructor(e,t,r=120,o=20){B(this,"mesh");B(this,"curve");B(this,"position");B(this,"normal");B(this,"points",[]);B(this,"tangents",[]);this.anchors=t,this.length=r,this.sides=o,this.curve=new Xy(t,!1,"centripetal");const l=(r+1)*(o+1),c=new dn;this.position=new Vt(new Float32Array(l*3),3),this.normal=new Vt(new Float32Array(l*3),3),this.position.setUsage(i0),this.normal.setUsage(i0);const f=new Float32Array(l*2),d=[];for(let h=0;h<=r;h++)for(let g=0;g<=o;g++){const x=h*(o+1)+g;if(f[x*2]=h/r,f[x*2+1]=g/o,h<r&&g<o){const m=x,_=x+o+1;d.push(m,_,m+1,_,_+1,m+1)}}c.setAttribute("position",this.position),c.setAttribute("normal",this.normal),c.setAttribute("uv",new Vt(f,2)),c.setIndex(d);for(let h=0;h<=r;h++)this.points.push(new Z),this.tangents.push(new Z);this.mesh=new Un(c,e),this.mesh.frustumCulled=!1}update(e,t=1){const{curve:r,points:o,tangents:l,length:c,sides:f}=this;r.updateArcLengths();for(let A=0;A<=c;A++)r.getPointAt(A/c,o[A]);for(let A=0;A<=c;A++){const C=o[Math.max(0,A-1)],y=o[Math.min(c,A+1)];l[A].subVectors(y,C).normalize()}const d=new Z,h=new Z,g=new Z,x=l[0];d.set(0,0,1).addScaledVector(x,-x.z),d.lengthSq()<1e-6&&d.set(1,0,0).addScaledVector(x,-x.x),d.normalize();const m=this.position.array,_=this.normal.array;for(let A=0;A<=c;A++){const C=l[A];d.addScaledVector(C,-d.dot(C)).normalize(),h.crossVectors(C,d);const y=o[A],S=e*(1+(t-1)*(A/c));for(let T=0;T<=f;T++){const L=T/f*Gn;g.copy(d).multiplyScalar(-Math.cos(L)).addScaledVector(h,Math.sin(L));const P=(A*(f+1)+T)*3;m[P]=y.x+g.x*S,m[P+1]=y.y+g.y*S,m[P+2]=y.z+g.z*S,_[P]=g.x,_[P+1]=g.y,_[P+2]=g.z}}this.position.needsUpdate=!0,this.normal.needsUpdate=!0}}const dg=9,tc=8,pg=4,ma=9,mg=[{c:[.2,.9,0],a:[1.6,.5,.8],s:1.25,off:0,ph:0,pulses:6},{c:[-3.9,1.5,-1.2],a:[1.2,.6,.8],s:1,off:.37,ph:2.1,pulses:7},{c:[4.1,.4,-.8],a:[1.1,.7,.6],s:1.05,off:.71,ph:4,pulses:5},{c:[-2,-.9,1.2],a:[1.4,.4,.5],s:.8,off:.18,ph:1,pulses:8},{c:[2.4,2.4,-3],a:[1.3,.5,.8],s:.85,off:.55,ph:3.2,pulses:6},{c:[-5.6,-.4,-2.6],a:[.9,.6,.6],s:.8,off:.86,ph:5,pulses:7},{c:[5.8,2,-4],a:[.8,.5,.6],s:.7,off:.28,ph:.6,pulses:9},{c:[-.6,2.7,-5],a:[1.6,.4,.8],s:.7,off:.63,ph:2.7,pulses:8}],xw=[[],[0],[1,2],[0,1,2],[0,1,2,3],[0,1,2,3,4],[0,1,2,3,4,5],[0,1,2,3,4,5,6],[0,1,2,3,4,5,6,7]],qf=.62,_w=.55;function gg(s,e,t=new Z){return t.set(Math.sin(s)*.86*Math.cos(e),-.86*Math.sin(e)+.04,Math.cos(s)*.86*Math.cos(e))}function yw(s){const e=(s/Gn%1+1)%1;return e<.22?Math.sin(e/.22*(Math.PI/2)):.5+.5*Math.cos((e-.22)/.78*Math.PI)}class Mw{constructor(e,t,r=null){B(this,"canvas");B(this,"ctx");B(this,"cfg",hg);B(this,"host");B(this,"surface");B(this,"renderer",null);B(this,"scene");B(this,"camera");B(this,"look",null);B(this,"group",new ji);B(this,"swarm",[]);B(this,"geometries",[]);B(this,"failed",!1);B(this,"playing",new Rs(.6));B(this,"motionTime",0);B(this,"pace",1);B(this,"handHold",0);B(this,"colourTime",0);B(this,"started",!1);B(this,"since",0);B(this,"current",0);B(this,"carry",0);B(this,"bellE",0);B(this,"tentE",0);B(this,"tentT",0);B(this,"swell",0);B(this,"bassAvg",0);this.canvas=e,this.ctx=t,this.host=r,this.surface=document.createElement("canvas"),this.scene=r?r.scene:new Ec,this.camera=r?r.camera:new ai(30,16/9,.1,100);try{r||(this.renderer=pd(this.surface)),this.look=r?r.look:new bv,this.build(this.look)}catch(o){console.error("Jellyfish could not start:",o),this.failed=!0}}setParams(e){this.cfg=bs(hg,e)}build(e){const t=new yc(1,44,30),r=new yc(1,40,26);this.geometries.push(t,r),this.scene.add(this.group);for(const o of mg){const l=e.shared(),c=e.shared(),f=new ji;this.group.add(f);const d=[],h=[];for(let _=0;_<dg;_++){const A=_/dg*Gn,C=new ji;C.rotation.y=A;const y=new ji;y.rotation.x=qf,C.add(y);const S=new Un(t,e.material(iw,l,{uAng:{value:A}}));S.scale.set(.42,.18,.52),S.position.set(0,_*5%3*.02,.48),y.add(S),f.add(C),d.push(y),h.push(S)}const g=new Un(r,e.material(sw,l));g.scale.set(.44,.26,.44),g.position.y=-.1,f.add(g);const x=[],m=e.material(rw,c,{uWS:{value:.6}});for(let _=0;_<tc+pg;_++){const A=_>=tc,C=A?(_-tc)/pg*Gn+.4:_/tc*Gn+.2,y=A?new Z(Math.sin(C)*.08,-.25,Math.cos(C)*.08):gg(C,qf),S=Array.from({length:ma},()=>new Z),T=new vw(m,S,A?48:64,A?10:6);this.group.add(T.mesh),x.push({tube:T,from:y,links:S,angle:A?null:C,link:A?.2:.42,radius:A?.085:.028,phase:C*1.7+_})}this.swarm.push({spec:o,root:f,tilts:d,lobes:h,cap:g,strands:x,shared:l,strandShared:c,presence:0,beat:o.ph,lift:0,rise:0,pull:new Z,up:new Z(0,1,0),last:null,primed:!1})}}destroy(){var e;this.host||(e=this.look)==null||e.dispose(),this.look=null;for(const t of this.geometries)t.dispose();this.host?(this.scene.remove(this.group),this.group.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose())})):this.renderer&&gd(this.scene,this.renderer),this.renderer=null}render(e,t,r){const{ctx:o,cfg:l}=this,c=this.canvas.width,f=this.canvas.height;if(c===0||f===0)return;const d=this.renderer;if(this.failed||!d||!this.look){md(o,c,f,"JELLYFISH");return}Cv(this.camera,c,f);const h=-l.swarm.height*4.5;this.camera.position.set(0,.5+h,15.5/Math.max(.3,l.swarm.zoom)),this.camera.lookAt(0,.1+h,0),this.update(e,t,r),(this.surface.width!==c||this.surface.height!==f)&&d.setSize(c,f,!1),d.render(this.scene,this.camera),this.look.backdrop(o,c,f,l.swarm.backdrop),o.drawImage(this.surface,0,0,c,f)}update(e,t,r){const{cfg:o}=this,l=this.look;if(!l||this.failed)return;const c=this.playing;c.read(e,r);const{dt:f}=c;this.pace+=(Math.max(0,c.step)-this.pace)*(1-Math.exp(-f*.6));const d=this.pace*.6,h=c.burst*o.hands.clap,g=c.bump*o.sound.beat,x=!e.synthetic&&(e.left||e.right)?1:0;this.handHold+=(x-this.handHold)*(1-Math.exp(-f*3)),this.motionTime+=d,this.colourTime+=(d*o.colour.speed*(1+c.mid*o.sound.mid*1.2)+f*h*.9)/cc;const m=this.motionTime,_=Gn*m/cc,A=Math.max(0,Math.min(8,Math.round(o.swarm.count))),C=!this.started;this.host||l.update(t,o.colour.palette,f,C,o.colour.style),this.since+=f;const y=new Set(xw[A].slice(0,Ev(this.since*.55*(5/Math.max(1,o.swarm.arrival)),A)));C&&(this.started=!0,this.swarm.forEach(I=>{I.presence=0}));const S=r!=null&&r.live?r.bass:0,T=Math.max(0,S-this.bassAvg-.12);this.bassAvg+=(S-this.bassAvg)*(1-Math.exp(-f*.5));const L=Math.min(1,T*2.2)*o.sound.swell,P=Math.max(0,o.sound.open??0);this.swell+=(L-this.swell)*(1-Math.exp(-f*(L>this.swell?P>0?1.1:2.5:.45)));const z=x?Math.max(.3,1+(c.spread-.4)*o.hands.spread*1.6):1,D=z*(1+this.swell*.9),O=new Z(c.aim.x*4.6,c.aim.y*2.1,0).multiplyScalar(o.hands.follow*x),E=(I,ce)=>{const oe=Math.round(I),Ae=r;return oe<0||!Ae?ce:oe===1?Math.max(Ae.bass,Ae.lowMid*.6):oe===2?Ae.mid:oe===3?Ae.high:Ae.overall},U=Math.round(o.sound.bell??-1);this.bellE+=(E(U,c.bass)-this.bellE)*(1-Math.exp(-f*3));const q=U<0?c.bass:this.bellE;this.tentE+=(E(o.sound.tentacles??-1,c.high)-this.tentE)*(1-Math.exp(-f*6));const H=Math.round(o.sound.tentacles??-1)<0?c.high:this.tentE;this.tentT+=f*(.5+.9*H);const F=o.swarm.drift*(1+q*o.sound.bass*.8),ee=!!(r!=null&&r.live)?.35+.65*c.energy+.4*c.mid:.35;this.carry+=(o.sound.flow*ee-this.carry)*(1-Math.exp(-f*.35)),this.current+=d*(.18+.5*this.carry);const j=.16*(1+H*o.sound.high*2.5),re=1+H*o.sound.high*1.5,G=o.swarm.size,X=new Z,k=new Z,ie=new rr,N=new Z(0,1,0),K=new Z,Ee=new Z,Me=new Z,ve=new Z;this.swarm.forEach((I,ce)=>{const oe=y.has(ce)?1:0;I.presence=oe>I.presence?Math.min(oe,I.presence+f/Math.max(1,o.swarm.arrival)):Math.max(oe,I.presence-f/3),I.presence<.004&&oe===0&&(I.presence=0);const Ae=I.presence>.002;I.root.visible=Ae;for(const de of I.strands)de.tube.mesh.visible=Ae;if(!Ae){I.last=null,I.primed=!1;return}const Se=I.spec;I.beat+=d*Gn*(Se.pulses/cc)+f*h*Gn*1.5;const xe=yw(I.beat),Ye=Math.max(0,Math.min(1.3,Math.max(xe,g*.7)+h*.4+(U>=0?this.bellE*.35:0))-this.swell*P*.7),Ie=(I.grip??0)+(c.fist-(I.grip??0))*(1-Math.exp(-f*(7-ce*.7))),He=Math.max(0,(Ie-(I.gripWas??Ie))/Math.max(f,.001));I.gripWas=Ie,I.grip=Ie;const et=this.handHold,Ze=(Ye*(1-et)+Ie*et)*o.swarm.pulse,rt=(Math.min(1.3,xe+g*.15+h*.4+this.swell*.5)*(1-et)+Math.min(1.3,He*.35)*et)*o.swarm.pulse,lt=I.presence*I.presence;I.rise+=(rt*1.5*lt-I.rise*1.2)*f,I.lift+=(I.rise-I.lift*.35)*f*.8,X.set(Se.c[0]*D+Se.a[0]*F*Math.sin(_+Se.ph),Se.c[1]*Math.min(1.4,D)+Se.a[1]*F*Math.sin(2*_+Se.ph*1.7),Se.c[2]+Se.a[2]*F*Math.cos(_+Se.ph*.6));const bt=this.current-ce*.35;X.x+=Math.sin(bt+Se.ph*.5)*.9*this.carry,X.y+=Math.sin(bt*.63+Se.ph)*.3*this.carry,X.z+=Math.cos(bt*.8+Se.ph*1.3)*.5*this.carry;const Y=.8+1.6*(1-ce/mg.length);I.pull.lerp(O,1-Math.exp(-f*Y)),X.add(I.pull),k.set(0,0,0),h>.001&&(K.set(X.x,X.y-.5,0),K.lengthSq()<.01&&K.set(ce%2?1:-1,.4,0),k.copy(K.normalize()).multiplyScalar(h*2.6),X.add(k));{const de=I.presence,we=.15+.85*de*de*de,ge=Se.c[0]*D,me=Se.c[2];X.x=ge+(X.x-ge)*we,X.z=me+(X.z-me)*we}const At=Math.max(0,o.swarm.water??0);if(At>0){k.x+=Se.c[0]*z*this.swell*.9,k.y+=Se.c[1]*(Math.min(1.4,D)-Math.min(1.4,z)),X.sub(k),(!I.sp||!I.sv)&&(I.sp=X.clone(),I.sv=new Z);const de=2.2/(At*At),we=1.9/At;I.sv.x+=((X.x-I.sp.x)*de-I.sv.x*we)*f,I.sv.y+=((X.y-I.sp.y)*de-I.sv.y*we)*f,I.sv.z+=((X.z-I.sp.z)*de-I.sv.z*we)*f,I.sv.y+=(rt*2.4-.7)*f*Math.min(1,At),I.sp.addScaledVector(I.sv,f),X.copy(I.sp).add(k)}if(I.last){K.subVectors(X,I.last).divideScalar(Math.max(f,.001));const de=1/(1+1.5*At),we=new Z(ac.clamp(K.x*.12*de,-.6,.6),1,K.z*.08*de).normalize();I.up.lerp(we,1-Math.exp(-f*1.5)).normalize()}I.last=(I.last??new Z).copy(X),X.addScaledVector(I.up,I.lift-.6);const dt=I.presence,Tt=dt*dt*dt*(dt*(dt*6-15)+10);X.y-=(1-Tt)*7,X.y-=.9;const ke=Se.s*G*(.3+.7*Tt)*(1+q*o.sound.bass*.08+g*.04);{const de=this.camera.position,we=Math.tan(this.camera.fov*Math.PI/360)*Math.max(1,de.z-X.z),me=de.y+we-1.5*ke-.8;X.y>me&&(X.y=me+.8*(1-Math.exp(-(X.y-me)/.8)))}I.root.position.copy(X),ie.setFromUnitVectors(N,I.up),I.root.quaternion.copy(ie),I.root.rotateY(Math.sin(_+Se.ph)*.4*I.presence),I.root.scale.setScalar(ke);const kt=qf+_w*Ze;for(const de of I.tilts)de.rotation.x=kt;for(const de of I.lobes)de.scale.y=.18*(1-.18*Ze);I.cap.scale.set(.44*(1-.2*Ze),.26*(1+.08*Ze),.44*(1-.2*Ze)),I.root.updateMatrix();const w=o.swarm.tentacles,M=Math.max(0,o.swarm.flow??0),Q=I.up.clone().negate();Ee.set(1,0,0).applyQuaternion(I.root.quaternion);for(const de of I.strands){const we=de.links;de.angle!==null&&gg(de.angle,kt,de.from);const ge=we[0].copy(de.from).applyMatrix4(I.root.matrix);if(Me.set(ge.x-I.root.position.x,0,ge.z-I.root.position.z),Me.lengthSq()<1e-6&&Me.set(1,0,0),Me.normalize(),!I.primed)for(let me=1;me<ma;me++)we[me].copy(ge).addScaledVector(Q,de.link*ke*w*me);for(let me=1;me<ma;me++){const Ve=we[me-1],Ge=we[me];if(K.subVectors(Ge,Ve),K.lengthSq()<1e-8&&K.copy(Q),M>0){K.normalize().lerp(Q,.12+.1*Ze).normalize();const De=me/ma,Le=Math.sin(de.phase+this.tentT*2.2-me*.45)*(.06+M*(.1+.16*H))*De;K.addScaledVector(Ee,Le),K.addScaledVector(Me,M*(.06+.22*this.swell*Math.max(.5,P)+.1*H)*De),K.normalize()}else{K.normalize().lerp(Q,.22+.1*Ze).normalize();const De=Math.sin(de.phase+_*3*re-me*.75)*.06*re*(me/ma);K.addScaledVector(Ee,De).normalize()}Ge.copy(Ve).addScaledVector(K,de.link*ke*w)}de.tube.update(de.radius*ke,.25)}I.primed=!0;const le=I.shared;le.uT.value=this.colourTime,le.uOff.value=Se.off+o.colour.offset,le.uWA.value=1,le.uWB.value=.6,le.uWC.value=.8+.4*Math.sin(_+Se.ph);const _e=I.strandShared;_e.uT.value=this.colourTime,_e.uOff.value=Se.off+.15+o.colour.offset,l.apply(le,o.colour.depth,j),l.apply(_e,o.colour.depth,j)}),this.scene.updateMatrixWorld(!0),this.camera.updateMatrixWorld(!0);for(const I of this.swarm)I.root.visible&&(I.cap.getWorldPosition(ve),ve.applyMatrix4(this.camera.matrixWorldInverse),I.shared.uCenter.value.copy(ve))}}const vg={grid:{detail:.5,field:.5,figure:.4,words:1,zoom:1},hands:{light:1,close:1,clap:1},sound:{beat:1,quiet:1}};let qh=null,Pv=0,uc=0;function Sw(){uc++;let s=!1;return()=>{s||(s=!0,uc=Math.max(0,uc-1))}}function Aw(){return uc>0}function Ew(s,e,t){if(s.length<e*t)return;const r=new Uint8Array(e*t);for(let o=0;o<t;o++)for(let l=0;l<e;l++)r[o*e+l]=s[o*e+(e-1-l)];qh={data:r,width:e,height:t},Pv=performance.now()}const ww=4e3;function Tw(){return qh&&performance.now()-Pv<ww?qh:null}function bw(s,e,t){const r=Math.min(s.width-1.001,Math.max(0,e*(s.width-1))),o=Math.min(s.height-1.001,Math.max(0,t*(s.height-1))),l=Math.floor(r),c=Math.floor(o),f=r-l,d=o-c,h=c*s.width+l,g=s.data[h],x=s.data[h+1],m=s.data[h+s.width],_=s.data[h+s.width+1];return(g+(x-g)*f+(m-g)*d+(g-x-m+_)*f*d)/255}const ga=8;function xg(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(r=>r+r).join(""):e;return[parseInt(t.slice(0,2),16)||0,parseInt(t.slice(2,4),16)||0,parseInt(t.slice(4,6),16)||0]}class Cw{constructor(e,t){B(this,"canvas");B(this,"ctx");B(this,"cfg",vg);B(this,"playing",new Rs(.6));B(this,"lit",new Float32Array(0));B(this,"columns",0);B(this,"rows",0);B(this,"time",0);B(this,"real",0);B(this,"closed",0);B(this,"focus",{x:.89,y:.5});B(this,"rings",[]);B(this,"lastKick",0);B(this,"breath",0);B(this,"release",null);B(this,"glow",document.createElement("canvas"));B(this,"glowKey","");this.canvas=e,this.ctx=t}setParams(e){this.cfg=bs(vg,e)}destroy(){var e;(e=this.release)==null||e.call(this),this.release=null}tint(e){if(e===this.glowKey)return;this.glowKey=e;const[t,r,o]=xg(e);this.glow.width=this.glow.height=96;const l=this.glow.getContext("2d");l.clearRect(0,0,96,96);const c=l.createRadialGradient(48,48,0,48,48,48),f=d=>Math.round(d+(255-d)*.6);c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(.1,`rgba(${f(t)},${f(r)},${f(o)},0.9)`),c.addColorStop(.35,`rgba(${t},${r},${o},0.25)`),c.addColorStop(1,`rgba(${t},${r},${o},0)`),l.fillStyle=c,l.fillRect(0,0,96,96)}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;const h=f/d,g=this.playing;g.read(e,r);const{dt:x}=g,m=Math.min(.08,Math.max(0,g.step));this.time+=m,this.real+=x;const _=xe=>1-Math.exp(-x*xe);this.tint(t[0]??"#8fb4ff"),c.grid.figure>.01&&!this.release&&(this.release=Sw()),c.grid.figure<=.01&&this.release&&(this.release(),this.release=null);const A=Math.round(Math.max(8,Math.min(150,(22+34*Math.max(0,Math.min(1,c.grid.detail)))/Math.max(.2,c.grid.zoom)))),C=Math.round(A*h);(A!==this.rows||C!==this.columns)&&(this.rows=A,this.columns=C,this.lit=new Float32Array(A*C));const y=1/A,S=[e.left,e.right].filter(Boolean),T=S.length>0&&!e.synthetic;let L=S.map(xe=>{const Ye=xe.openness??(xe.gesture==="fist"?0:1),Ie=xe.depth??.35;return{x:xe.position.x*h,y:xe.position.y,reach:(.04+.19*Ye*Ye)*c.hands.light*(.8+.6*Ie),power:.85+.5*Ie}});if(L.length&&!T&&(L=[{x:L.reduce((xe,Ye)=>xe+Ye.x,0)/L.length,y:L.reduce((xe,Ye)=>xe+Ye.y,0)/L.length,reach:.13*c.hands.light,power:.7}]),L.length){const xe=L.reduce((Ie,He)=>Ie+He.x,0)/L.length,Ye=L.reduce((Ie,He)=>Ie+He.y,0)/L.length;this.focus.x+=(xe-this.focus.x)*_(6),this.focus.y+=(Ye-this.focus.y)*_(6)}else this.focus.x+=(h/2-this.focus.x)*_(.8),this.focus.y+=(.5-this.focus.y)*_(.8);const P=!!(r!=null&&r.live);let z=0;T?z=g.fist*c.hands.close:P&&(z=Math.max(0,Math.min(.8,(.3-g.energy)*3.2))*c.sound.quiet),this.closed+=(Math.min(1,z)-this.closed)*_(z>this.closed?1.7:2.6),g.clapped&&c.hands.clap>0&&(this.rings.push({x:this.focus.x,y:this.focus.y,at:0,strength:g.clapStrength*c.hands.clap}),this.closed*=.25);const D=(xe,Ye,Ie)=>{const He=Math.max(0,Math.min(1,(Ie-xe)/(Ye-xe)));return He*He*(3-2*He)},O=D(.04,.62,this.closed),E=D(.55,1,this.closed),U=Math.max(g.kick,g.bump)*c.sound.beat;U>.45&&this.lastKick<=.45&&(this.rings.push({x:this.focus.x,y:this.focus.y,at:0,strength:.16+.14*Math.min(1,U)}),this.rings.length>6&&this.rings.shift()),this.lastKick=U;for(const xe of this.rings)xe.at+=x;this.rings=this.rings.filter(xe=>xe.at<2.6),this.breath+=(g.bass-this.breath)*_(3);const q=this.release?Tw():null,H=c.grid.figure,F=c.grid.field,W=this.time,ee=this.lit,j=_(16),re=_(2.4),G=L[0],X=L[1];let k=0,ie=0,N=0;G&&X&&(k=X.x-G.x,ie=X.y-G.y,N=k*k+ie*ie);for(let xe=0;xe<A;xe++){const Ye=(xe+.5)*y;for(let Ie=0;Ie<C;Ie++){const He=(Ie+.5)*y;let et=F*(.16+.07*Math.sin(He*2.1+Ye*1.3-W*.5)+.04*Math.sin(He*.9-Ye*2.7+W*.31));q&&H>.01&&(et+=bw(q,He/h,Ye)*.34*H);for(const rt of L){const lt=He-rt.x,bt=Ye-rt.y;et+=rt.power*Math.exp(-(lt*lt+bt*bt)/(rt.reach*rt.reach))}if(N>1e-5){const rt=Math.max(0,Math.min(1,((He-G.x)*k+(Ye-G.y)*ie)/N)),lt=Math.hypot(He-(G.x+k*rt),Ye-(G.y+ie*rt));et+=.55*Math.exp(-(lt*lt)/(y*y*.5))}for(const rt of this.rings){const lt=Math.hypot(He-rt.x,Ye-rt.y)-rt.at*.85;lt>-.09&&lt<.09&&(et+=rt.strength*Math.exp(-(lt*lt)/.0011)*(1-rt.at/2.6))}const Ze=xe*C+Ie;ee[Ze]+=(et-ee[Ze])*(et>ee[Ze]?j:re)}}l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,f,d);const K=[];for(let xe=0;xe<ga;xe++)K.push(new Path2D);const Ee=y*d,Me=1+.18*this.breath,ve=this.focus.x,I=this.focus.y;for(let xe=0;xe<A;xe++){if(O>.97&&xe%3!==0)continue;const Ye=(xe+.5)*y,Ie=(I+(Ye-I)*(1-O))*d;for(let He=0;He<C;He++){const et=ee[xe*C+He];if(et<.03)continue;const Ze=(He+.5)*y,rt=(ve+(Ze-ve)*(1-E))*d,lt=Math.min(ga-1,Math.floor(Math.min(.999,et)*ga)),bt=Ee*Math.min(.5,.07+.4*Math.min(1,et))*Me*(1-.45*O),Y=K[lt];Y.moveTo(rt+bt,Ie),Y.arc(rt,Ie,bt,0,Math.PI*2)}}const[ce,oe,Ae]=xg(t[0]??"#8fb4ff"),Se=1-.82*O;for(let xe=0;xe<ga;xe++){const Ye=xe/(ga-1),Ie=(He,et)=>{const Ze=et+(255-et)*Math.min(1,.35+Math.max(0,Ye*1.6-.6));return Math.round(He+(Ze-He)*Math.min(1,Ye*1.4))};l.fillStyle=`rgb(${Ie(150,ce)},${Ie(156,oe)},${Ie(170,Ae)})`,l.globalAlpha=Math.min(1,(.3+.7*Ye)*Se),l.fill(K[xe])}if(E>.02){const xe=Ee*(2.4+5*E)*(1+.25*this.breath);l.globalCompositeOperation="lighter",l.globalAlpha=Math.min(1,E*1.2),l.drawImage(this.glow,ve*d-xe,I*d-xe,xe*2,xe*2),l.globalCompositeOperation="source-over"}if(c.grid.words>.01){const xe=d/720,Ye=Math.max(9,Math.round(11*xe));l.font=`500 ${Ye}px ui-monospace, SFMono-Regular, Menlo, monospace`,l.textBaseline="alphabetic",l.textAlign="left";let Ie;this.closed>.9?Ie="standby":this.closed>.25?Ie="closing":T?Ie=L.length>1?"two hands":"one hand":Ie=P?"listening":"waiting";const He=rt=>Math.round(rt+(255-rt)*.7);l.fillStyle=`rgb(${He(ce)},${He(oe)},${He(Ae)})`,l.globalAlpha=.6*c.grid.words;const et=20*xe,Ze=d-20*xe;if(l.fillText(Ie,et,Ze),Math.floor(this.real*1.6)%2===0){const rt=l.measureText(Ie).width;l.fillRect(et+rt+5*xe,Ze-Ye*.82,Ye*.55,Ye)}}l.globalAlpha=1}}const _g={shape:{size:1,morph:.12,lobes:1,detail:4,style:2,steady:0},motion:{spin:1,flow:1,dust:.5,points:1400,glide:0},hands:{shape:1,follow:.25,clap:1},sound:{bass:1,beat:1,spin:1,drop:1,squash:0}};class Rw{constructor(e,t){B(this,"canvas");B(this,"ctx");B(this,"cfg",_g);B(this,"playing",new Rs(.6));B(this,"surface",document.createElement("canvas"));B(this,"scene",new Ec);B(this,"camera",new ai(50,16/9,.1,100));B(this,"renderer");B(this,"group",new ji);B(this,"corners",new Float32Array(0));B(this,"edges",new Uint32Array(0));B(this,"shaped",new Float32Array(0));B(this,"points",null);B(this,"lines",null);B(this,"builtDetail",-1);B(this,"wire");B(this,"dots");B(this,"dust");B(this,"time",0);B(this,"flow",0);B(this,"spin",0);B(this,"pull",0);B(this,"swell",0);B(this,"pulse",0);B(this,"burst",0);B(this,"lastDrop",0);B(this,"dent",0);B(this,"dentDir",new Z(1,0,0));B(this,"dentAim",new Z(1,0,0));B(this,"dentTo",0);B(this,"pace",0);B(this,"turn",0);B(this,"lastSquash",0);B(this,"at",new It);this.canvas=e,this.ctx=t,this.renderer=new Sv({canvas:this.surface,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(1),this.renderer.setClearColor(0,1),this.camera.position.set(0,0,7.5),this.camera.lookAt(0,0,0),this.scene.add(this.group),this.wire=new lv({color:6737151,transparent:!0,opacity:.85}),this.dots=new Gh({color:6737151,size:.09,transparent:!0,opacity:1,depthWrite:!1});const r=6e3,o=new Float32Array(r*3);for(let c=0;c<r;c++){const f=4+Math.random()*14,d=Math.random()*Math.PI*2,h=Math.random()*2-1,g=Math.sqrt(1-h*h);o.set([f*g*Math.cos(d),f*h,-Math.abs(f*g*Math.sin(d))-3],c*3)}const l=new dn;l.setAttribute("position",new Vt(o,3)),this.dust=new Xh(l,new Gh({color:16777215,size:.03,transparent:!0,opacity:.5,depthWrite:!1})),this.scene.add(this.dust)}setParams(e){this.cfg=bs(_g,e)}build(e){this.points&&(this.group.remove(this.points,this.lines),this.points.geometry.dispose(),this.lines.geometry.dispose());const t=new hd(1,e),r=t.attributes.position.array,o=new Map,l=[],c=[];for(let m=0;m<r.length;m+=3){const _=`${r[m].toFixed(4)},${r[m+1].toFixed(4)},${r[m+2].toFixed(4)}`;let A=o.get(_);A===void 0&&(A=l.length/3,o.set(_,A),l.push(r[m],r[m+1],r[m+2])),c.push(A)}const f=new Set,d=[],h=l.length/3;for(let m=0;m<c.length;m+=3)for(const[_,A]of[[c[m],c[m+1]],[c[m+1],c[m+2]],[c[m+2],c[m]]]){const C=_<A?_*h+A:A*h+_;f.has(C)||(f.add(C),d.push(_,A))}t.dispose(),this.corners=Float32Array.from(l),this.shaped=new Float32Array(l.length),this.edges=Uint32Array.from(d);const g=new dn;g.setAttribute("position",new Vt(this.shaped,3));const x=new dn;x.setAttribute("position",new Vt(new Float32Array(d.length*2*3),3)),this.points=new Xh(g,this.dots),this.lines=new Hy(x,this.wire),this.points.frustumCulled=!1,this.lines.frustumCulled=!1,this.group.add(this.lines,this.points),this.builtDetail=e}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;const h=this.playing;h.read(e,r);const{dt:g}=h,x=Me=>1-Math.exp(-g*Me),m=Math.max(0,c.motion.glide),_=Math.max(0,h.step);this.pace+=(_-this.pace)*(m>0?x(.7/m):1);const A=this.pace;this.time+=A;const C=Math.max(2,Math.min(6,Math.round(c.shape.detail)));C!==this.builtDetail&&this.build(C);const y=[e.left,e.right],S=!e.synthetic&&y.some(Boolean),T=S?Math.max(h.fist,h.pinch):0;this.pull+=(T*c.hands.shape-this.pull)*x(4),this.swell+=(h.bass*c.sound.bass-this.swell)*x(m>0?1.2/m:5);const L=Math.max(h.kick,h.bump)*c.sound.beat;this.pulse=Math.max(this.pulse*Math.exp(-g*6),Math.min(1,L)),h.clapped&&c.hands.clap>0&&(this.burst=Math.max(this.burst,h.clapStrength*c.hands.clap)),h.drop>.5&&this.lastDrop<=.5&&(this.burst=Math.max(this.burst,.9*c.sound.drop));const P=Math.max(h.kick,h.bump);c.sound.squash>0&&P>.45&&this.lastSquash<=.45&&(this.dentTo=Math.max(this.dentTo,Math.min(1,P)*c.sound.squash),this.dentAim.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize()),this.lastSquash=P,this.dent+=(this.dentTo-this.dent)*(m>0?x(9/m):1),this.dentTo*=Math.exp(-g*2.6),m>0?this.dentDir.lerp(this.dentAim,x(6/m)).normalize():this.dentDir.copy(this.dentAim),this.lastDrop=h.drop,this.burst*=Math.exp(-g*2.2);const z=c.shape.morph+.35*this.swell+.5*this.pull+.25*h.build;this.flow+=A*.35*c.motion.flow*(1+this.swell);const D=1.1*Math.max(.3,c.shape.lobes),O=this.flow,E=this.corners,U=this.shaped;let q=0;for(let Me=0;Me<E.length;Me+=3){const ve=E[Me],I=E[Me+1],ce=E[Me+2],oe=Math.sin(ve*D*1.7+O)*.5+Math.sin(I*D*2.1-O*.8+1.3)*.35+Math.sin((ve+ce)*D*1.4+O*1.3+2.1)*.3+Math.sin((I-ce)*D*2.6-O*.6)*.15*(.5+this.pull),Ae=Math.max(0,ve*this.dentDir.x+I*this.dentDir.y+ce*this.dentDir.z),Se=1+oe*z+this.pulse*.08*(.6+.4*Math.sin(I*3+O))+this.burst*.6*(.7+.3*oe)-this.dent*.35*Ae*Ae;U[Me]=ve*Se,U[Me+1]=I*Se,U[Me+2]=ce*Se,q+=Math.max(0,Se)}if(c.shape.steady>0){const Me=q/Math.max(1,E.length/3),ve=1+(1/Math.max(.3,Me)-1)*Math.min(1,c.shape.steady);for(let I=0;I<U.length;I++)U[I]*=ve}this.points.geometry.attributes.position.needsUpdate=!0;const H=Math.max(0,Math.min(2,c.shape.style)),F=.5*Math.min(1,H/2),W=this.lines.geometry.attributes.position,ee=W.array,j=this.edges;for(let Me=0,ve=0;Me<j.length;Me+=2){const I=j[Me]*3,ce=j[Me+1]*3,oe=U[I],Ae=U[I+1],Se=U[I+2],xe=U[ce],Ye=U[ce+1],Ie=U[ce+2];ee[ve++]=oe,ee[ve++]=Ae,ee[ve++]=Se,ee[ve++]=oe+(xe-oe)*F,ee[ve++]=Ae+(Ye-Ae)*F,ee[ve++]=Se+(Ie-Se)*F,ee[ve++]=xe,ee[ve++]=Ye,ee[ve++]=Ie,ee[ve++]=xe+(oe-xe)*F,ee[ve++]=Ye+(Ae-Ye)*F,ee[ve++]=Ie+(Se-Ie)*F}W.needsUpdate=!0,this.lines.visible=F>.004;const re=.8*h.mid+.6*h.energy;this.turn+=(re-this.turn)*(m>0?x(.8/m):1),this.spin+=A*.35*c.motion.spin*(1+c.sound.spin*this.turn),this.group.rotation.set(.35+Math.sin(this.time*.13)*.25,this.spin,Math.sin(this.time*.09)*.2);const G=S?c.hands.follow:c.hands.follow*.3;this.at.x+=(h.aim.x*2.2*G-this.at.x)*x(2),this.at.y+=(h.aim.y*1.3*G-this.at.y)*x(2),this.group.position.set(this.at.x,this.at.y,0),this.group.scale.setScalar(1.6*Math.max(.2,c.shape.size)*(1+.05*this.pulse));const X=Math.min(1,H/2),k=new Wt(t[0]??"#66ccff"),ie=new Wt(t[1]??t[0]??"#3300ff"),N=k.clone().lerp(new Wt(1,1,1),.25+.4*this.pulse);this.wire.color.copy(N),this.dots.color.copy(N.clone().lerp(ie,.3)),this.dots.size=(.08+.05*this.pulse)*(1-.35*X),this.dots.opacity=1,this.wire.opacity=.55+.4*Math.min(1,this.swell+this.pulse);const K=this.dust.material;K.opacity=Math.max(0,Math.min(1,c.motion.dust));const Ee=Math.max(0,Math.min(6e3,Math.round(c.motion.points)));this.dust.geometry.setDrawRange(0,Ee),this.dust.visible=c.motion.dust>.01&&Ee>0,this.dust.rotation.y=-this.time*.03,(this.surface.width!==f||this.surface.height!==d)&&this.renderer.setSize(f,d,!1),this.camera.aspect=f/d,this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera),l.globalCompositeOperation="source-over",l.globalAlpha=1,l.drawImage(this.surface,0,0,f,d)}destroy(){gd(this.scene,this.renderer)}}const yg={look:{flow:1,zoom:1,detail:1,veins:1,grain:.5},hands:{follow:1,clap:1},sound:{beat:1,bass:1}},Pw=`
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,Lw=`
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
}`;class Iw{constructor(e,t,r){B(this,"canvas");B(this,"ctx");B(this,"cfg",yg);B(this,"surface",document.createElement("canvas"));B(this,"renderer",null);B(this,"failed",!1);B(this,"scene",new Ec);B(this,"camera",new dd(-1,1,1,-1,0,2));B(this,"material");B(this,"geometry");B(this,"playing",new Rs(.6));B(this,"time",0);B(this,"kick",0);B(this,"breath",0);B(this,"hand",new Z);B(this,"drops",Array.from({length:8},()=>new on(0,0,-99,0)));B(this,"nextDrop",0);B(this,"lastDrop",-99);B(this,"lastBurst",0);B(this,"style");this.style=r,this.canvas=e,this.ctx=t,this.geometry=new dn,this.geometry.setAttribute("position",new Vt(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),this.material=new gi({vertexShader:Pw,fragmentShader:Lw,depthTest:!1,depthWrite:!1,uniforms:{uRes:{value:new It(1,1)},uTime:{value:0},uReal:{value:0},uStyle:{value:0},uFlow:{value:1},uDetail:{value:1},uVeins:{value:1},uGrain:{value:.5},uBass:{value:0},uKick:{value:0},uBurst:{value:0},uTurn:{value:0},uZoom:{value:1},uHand:{value:new Z},uDrops:{value:Array.from({length:8},()=>new on(0,0,-99,0))}}});const o=new Un(this.geometry,this.material);o.frustumCulled=!1,this.scene.add(o);try{this.renderer=pd(this.surface)}catch(l){console.error("Macro could not start:",l),this.failed=!0}}setParams(e){this.cfg=bs(yg,e)}destroy(){var e,t;this.geometry.dispose(),this.material.dispose(),(e=this.renderer)==null||e.dispose(),(t=this.renderer)==null||t.forceContextLoss(),this.renderer=null}render(e,t,r){const o=this.canvas.width,l=this.canvas.height;if(o===0||l===0)return;const c=this.renderer;if(this.failed||!c){md(this.ctx,o,l,"MACRO");return}const{cfg:f}=this,d=this.playing;d.read(e,r);const{dt:h}=d;this.time+=Math.max(0,d.step)*3,this.kick=Math.max(this.kick*Math.exp(-h*5),d.bump*f.sound.beat),this.breath+=(d.bass*f.sound.bass-this.breath)*(1-Math.exp(-h*3));const g=e.left||e.right?1:0,x=1-Math.exp(-h*3);if(this.hand.x+=((d.aim.x+1)/2-this.hand.x)*x,this.hand.y+=((d.aim.y+1)/2-this.hand.y)*x,this.hand.z+=(g*f.hands.follow-this.hand.z)*x,this.style===4){const _=this.time*f.look.flow,A=o/l,C=(L,P,z)=>{this.drops[this.nextDrop].set(L,P,_,z),this.nextDrop=(this.nextDrop+1)%this.drops.length,this.lastDrop=_},y=()=>[(Math.random()-.5)*A*.8,(Math.random()-.5)*.8],S=()=>[(this.hand.x-.5)*A/f.look.zoom,(this.hand.y-.5)/f.look.zoom],T=d.burst*f.hands.clap;if(T>.6&&this.lastBurst<=.6){const[L,P]=g?S():y();C(L,P,2.2)}else if(d.bump>.5&&_-this.lastDrop>.6){const[L,P]=g?S():y();C(L,P,.8+d.bump*.6)}else if(_-this.lastDrop>2.6){const[L,P]=y();C(L,P,.7)}this.lastBurst=T}const m=this.material.uniforms;m.uRes.value.set(o,l),m.uTime.value=this.time,m.uReal.value=performance.now()/1e3%1e3,m.uStyle.value=this.style,m.uFlow.value=f.look.flow,m.uDetail.value=f.look.detail,m.uVeins.value=f.look.veins,m.uGrain.value=f.look.grain,m.uZoom.value=f.look.zoom,m.uBass.value=this.breath,m.uKick.value=this.kick,m.uBurst.value=d.burst*f.hands.clap,m.uTurn.value=Tv(t).hue*Math.PI/180,m.uHand.value.copy(this.hand),m.uDrops.value.forEach((_,A)=>_.copy(this.drops[A])),(this.surface.width!==o||this.surface.height!==l)&&c.setSize(o,l,!1),c.render(this.scene,this.camera),this.ctx.globalCompositeOperation="source-over",this.ctx.globalAlpha=1,this.ctx.drawImage(this.surface,0,0,o,l)}}const Dw=1.4,Uw=14,Nw=1.2,Mg=(s,e)=>1/(1+1/(2*Math.PI*s)/e);class ho{constructor(e=Dw,t=Uw){B(this,"value",null);B(this,"speed",0);this.minCutoff=e,this.beta=t}next(e,t){if(this.value===null||t<=0)return this.value=e,this.speed=0,e;const r=(e-this.value)/t;this.speed+=(r-this.speed)*Mg(Nw,t);const o=this.minCutoff+this.beta*Math.abs(this.speed);return this.value+=(e-this.value)*Mg(o,t),this.value}reset(){this.value=null,this.speed=0}}class Fw{constructor(e=5){B(this,"recent",[]);B(this,"held",null);this.size=e}next(e){this.recent.push(e),this.recent.length>this.size&&this.recent.shift();const t=new Map;let r=e,o=0;for(const l of this.recent){const c=(t.get(l)??0)+1;t.set(l,c),(c>o||c===o&&l===this.held)&&(r=l,o=c)}return this.held=r,r}reset(){this.recent=[],this.held=null}}const Sg=[{tip:8,pip:6},{tip:12,pip:10},{tip:16,pip:14},{tip:20,pip:18}];function kw(s,e){if(!s||s.length<21)return null;const t=(x,m)=>Math.hypot((x.x-m.x)*e,x.y-m.y,(x.z-m.z)*e),r=(x,m)=>Math.hypot((x.x-m.x)*e,x.y-m.y),o=s[0],l=s[9],c=r(o,l);if(c<1e-4)return null;let f=0,d=0;for(const x of Sg){const m=t(s[x.tip],o),_=t(s[x.pip],o);m>_*1.12&&f++,d+=Math.min(1,Math.max(0,(m/c-1.05)/.85))}const h=s[17];return t(s[4],h)>t(s[3],h)*1.12&&f++,{fingers:f,pinchGap:t(s[4],s[8])/c,openness:d/Sg.length,size:c,angle:Math.atan2((l.x-o.x)*e,o.y-l.y)}}const Ag=.32,Yf=.5,Ow=180,Eg=30,wg=.08,Bw=.32,zw=.115,Tg=.16,Hw=1.3,Vw=.2,Gw=.28,Ww=.7,Xw=200,jw=.3,Kw=450,qw=140;class bg{constructor(){B(this,"points",Array.from({length:21},()=>({x:new ho,y:new ho,z:new ho(1,6)})));B(this,"size",new ho(1,4));B(this,"angle",new ho(1.2,3));B(this,"open",new ho(2,6));B(this,"fingers",new Fw(5));B(this,"pinched",!1);B(this,"gesture","none");B(this,"gestureSince",0);B(this,"lastAngle",0);B(this,"lastAt",0);B(this,"hand",null);B(this,"seenAt",0)}read(e,t,r){const o=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const l=e.map((C,y)=>({x:this.points[y].x.next(C.x,o),y:this.points[y].y.next(C.y,o),z:this.points[y].z.next(C.z,o)})),c=kw(e,r);if(!c)return this.hand;const f=this.fingers.next(c.fingers);this.pinched=c.pinchGap<(this.pinched?Yf:Ag);const d=Math.max(0,f-1),h=this.pinched?"pinch":c.openness>.62?"open":c.openness<.28?"fist":d>=3?"open":d<=0?"fist":"none";h!==this.gesture&&(this.gesture=h,this.gestureSince=t);let g=c.angle;for(;g-this.lastAngle>Math.PI;)g-=2*Math.PI;for(;g-this.lastAngle<-Math.PI;)g+=2*Math.PI;this.lastAngle=this.angle.next(g,o);const x=Math.atan2(Math.sin(this.lastAngle),Math.cos(this.lastAngle)),m=this.size.next(c.size,o),_=this.points[9],A=Math.hypot(_.x.speed,_.y.speed);return this.seenAt=t,this.hand={position:{x:l[9].x,y:l[9].y},gesture:h,pinchDistance:this.pinched?c.pinchGap*c.size:void 0,velocity:Math.min(3,A*2),holdDuration:(t-this.gestureSince)/1e3,fingerCount:f,landmarks:l,pinch:Math.min(1,Math.max(0,(Yf+.25-c.pinchGap)/(Yf+.25-Ag*.6))),openness:Math.min(1,Math.max(0,this.open.next(c.openness,o))),depth:Math.min(1,Math.max(0,(m-wg)/(Bw-wg))),angle:x},this.hand}forget(){for(const e of this.points)e.x.reset(),e.y.reset(),e.z.reset();this.size.reset(),this.angle.reset(),this.open.reset(),this.fingers.reset(),this.pinched=!1,this.gesture="none",this.lastAt=0,this.lastAngle=0,this.hand=null}}class Yw{constructor(){B(this,"kept",{left:new bg,right:new bg});B(this,"trail",[]);B(this,"lastAt",0);B(this,"clapAt",-1e9);B(this,"clapStrength",0);B(this,"gap",1);B(this,"gapAt",-1e9);B(this,"closing",0);B(this,"counted",!1);B(this,"held",!1)}next(e,t,r){const o={};(e.landmarks??[]).forEach((h,g)=>{var A,C,y,S;if(!h||h.length<21)return;const x=h.map(T=>({x:1-T.x,y:T.y,z:T.z}));let _=((S=(y=(C=(A=e.handedness)==null?void 0:A[g])==null?void 0:C[0])==null?void 0:y.categoryName)==null?void 0:S.toLowerCase())==="left"?"right":"left";if(o[_]){const T=o[_],L=x[9].x<T[9].x;o.left=L?x:T,o.right=L?T:x;return}o[_]=x});const c={left:null,right:null};for(const h of["left","right"]){const g=this.kept[h];o[h]?(c[h]=g.read(o[h],t,r),c[h]&&this.trail.push({...c[h].position,hand:h})):g.hand&&t-g.seenAt<=Ow?c[h]=g.hand:g.hand&&g.forget()}this.trail.length>Eg&&(this.trail=this.trail.slice(-Eg)),c.gestureTrail=[...this.trail];const f=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const d=h=>{this.counted||t-this.clapAt<Kw||(this.counted=!0,this.clapAt=t,this.clapStrength=Math.min(1,Math.max(.7,h)))};if(c.left&&c.right){const h=c.right.position.x-c.left.position.x,g=c.right.position.y-c.left.position.y;c.distanceBetweenHands=Math.hypot(h,g),c.twist=Math.atan2(g,h*r)}if(o.left&&o.right){const h=o.left[9],g=o.right[9],x=Math.hypot(g.x-h.x,g.y-h.y),m=(t-this.gapAt)/1e3,_=m>0&&m<.15?(this.gap-x)/m:0;this.closing=Math.max(_,this.closing*Math.exp(-f*12)),this.gap=x,this.gapAt=t,x>jw&&(this.counted=!1),x<Vw&&this.closing>Hw&&d(this.closing/2.2),this.held=x<(this.held?Tg:zw),this.held&&(d(.7+this.closing/3),c.clapping=!0,c.clapIntensity=Math.max(.6,1-x/Tg))}else t-this.gapAt<Xw&&this.gap<Gw&&this.closing>Ww&&d(.75+this.closing/3),this.closing*=Math.exp(-f*6),this.held=!1,t-this.gapAt>1200&&(this.counted=!1);return t-this.clapAt<=qw&&(c.clapping=!0,c.clapIntensity=Math.max(c.clapIntensity??0,this.clapStrength)),c}}const Qw=25e3,Jw=5e3,Zw=2e4,$w=6e4,Cg=640,eT="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",Rg="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14";function tT({videoElement:s,onHandData:e}){const t=ct.useRef(new Yw);return ct.useEffect(()=>{let r=!0,o=0,l=-1,c=null,f=null,d=0,h=0;const g=()=>s.videoWidth&&s.videoHeight?s.videoWidth/s.videoHeight:16/9,x=(y,S)=>{r&&e(t.current.next(y,S,g()))},m=async()=>{if(!(!r||f))try{const y=await import(Rg),S=await y.FilesetResolver.forVisionTasks(`${Rg}/wasm`),T=await y.HandLandmarker.createFromOptions(S,{baseOptions:{modelAssetPath:eT,delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5});if(!r){T.close();return}f=T,console.log("✋ Hand tracking is running on the page.");const L=()=>{if(!(!r||!f)&&(o=requestAnimationFrame(L),s.currentTime!==l)){l=s.currentTime;try{const P=performance.now();x(f.detectForVideo(s,P),P)}catch(P){console.error("Hand detection error:",P)}}};L()}catch(y){console.error("Hand tracking could not start:",y)}},_=y=>{c&&(console.warn(`Hand tracking is moving to the page: ${y}`),window.clearTimeout(d),cancelAnimationFrame(o),c.terminate(),c=null,m())},A=()=>{if(typeof Worker>"u"||typeof createImageBitmap!="function"||typeof OffscreenCanvas>"u"){m();return}try{c=new Worker("/hand-worker.js")}catch{m();return}let y=!1,S=!1,T=!1,L=!1,P=!1,z=!1;d=window.setTimeout(()=>{y||_("it took too long to start")},Qw);const D=()=>{if(!r||!c)return;if(o=requestAnimationFrame(D),S){performance.now()-h>(P?$w:T?Jw:Zw)&&_("the worker stopped answering");return}if(s.currentTime===l||s.readyState<2)return;l=s.currentTime,S=!0,h=performance.now();const O=h,E=Math.min(Cg,s.videoWidth||Cg);createImageBitmap(s,{resizeWidth:E,resizeHeight:Math.max(1,Math.round(E/g())),resizeQuality:"low"}).then(U=>{if(!c){U.close();return}const q=Aw();q&&!z&&(P=!0),c.postMessage({type:"frame",bitmap:U,time:O,mask:q},[U])}).catch(()=>{S=!1})};c.onmessage=O=>{const E=O.data;E.type==="ready"?(y=!0,window.clearTimeout(d),console.log("✋ Hand tracking is running in a worker."),D()):E.type==="hands"?(S=!1,T=!0,E.mask&&(z=!0,P=!1,Ew(E.mask.data,E.mask.width,E.mask.height)),x({landmarks:E.landmarks,handedness:E.handedness},E.time)):E.type==="note"?(z=!0,P=!1,console.warn(E.reason)):E.type==="failed"?_(E.reason):E.type==="error"&&(S=!1,L||(L=!0,console.warn("Hand tracking worker:",E.reason)),T||_(E.reason))},c.onerror=O=>_(O.message||"the worker failed"),c.postMessage({type:"init"})},C=()=>{r&&(s.readyState>=2?A():window.setTimeout(C,100))};return C(),()=>{r=!1,window.clearTimeout(d),cancelAnimationFrame(o),c==null||c.terminate(),c=null;try{f==null||f.close()}catch(y){console.warn("Error closing hand landmarker:",y)}f=null}},[s,e]),null}const nT=40;class Qf{constructor(e,t){B(this,"history",[]);B(this,"last",0);B(this,"pulse",0);B(this,"threshold",0);B(this,"recent",[]);B(this,"peak",0);B(this,"flux",0);this.refractory=e,this.decay=t}measure(e,t,r,o){for(this.recent.push({at:r,rise:e,heard:t});this.recent.length&&r-this.recent[0].at>nT;)this.recent.shift();let l=0,c=0;for(const m of this.recent)l+=m.rise,c+=m.heard;this.history.push(l),this.history.length>90&&this.history.shift();const f=this.history.length;let d=0;for(const m of this.history)d+=m;d/=f;let h=0;for(const m of this.history)h+=(m-d)**2;const g=Math.sqrt(h/f);return this.threshold=d+g*1.9*(1.5-o),this.flux=l,this.peak=Math.max(l,this.peak*.9985),f>=20&&l>this.threshold&&l>this.peak*.5&&c>1.2*(1.3-o*.8)&&r-this.last>this.refractory?l/Math.max(1e-9,this.threshold):0}commit(e,t,r){e&&(this.last=t);const o=this.peak>0?Math.min(1,this.flux/this.peak):0;this.pulse=Math.max(this.pulse*Math.exp(-r/this.decay),e?Math.max(.4,o):0)}}function iT(s,e,t,r){const o=s.map(c=>c.hits.measure(c.flux,c.audible,e,r)),l=Math.max(...o);s.forEach((c,f)=>c.hits.commit(o[f]>0&&o[f]>=l*.7,e,t))}class Pg{constructor(e){B(this,"ceiling",-100);B(this,"floor",0);B(this,"seen",!1);this.minSpan=e}place(e,t){this.seen||(this.seen=!0,this.ceiling=e,this.floor=e);const r=l=>1-Math.exp(-t/l);this.ceiling+=(e-this.ceiling)*r(e>this.ceiling?.5:60),this.floor+=(e-this.floor)*r(e<this.floor?2:60);const o=Math.min(this.floor,this.ceiling-this.minSpan);return Math.min(1,Math.max(0,(e-o)/(this.ceiling-o)))}}function rT(){return{overall:new Pg(14),bass:new Pg(14),overallSlow:0,bassMid:0,highFast:0,highSlow:0,out:0,onsets:[],energy:0,build:0,drop:0,bright:.5,heard:0}}const Lg=-75,sT=2.5;function oT(s,e,t,r){const o=C=>1-Math.exp(-r/C),l=C=>Math.pow(10,C/10),c=C=>C>1e-10?10*Math.log10(C):-100;if(s.overallSlow+=(l(e.overall)-s.overallSlow)*o(2),s.bassMid+=(l(e.bass)-s.bassMid)*o(.5),s.highFast+=(e.high-s.highFast)*o(1),s.drop*=Math.exp(-r/1.2),s.heard+=r,s.heard<sT){s.highSlow=s.highFast,s.energy=.5;return}s.highSlow+=(e.high-s.highSlow)*o(8);const f=c(s.overallSlow)>Lg;s.energy=f?s.overall.place(c(s.overallSlow),r):0;const d=s.bass.place(c(s.bassMid),r),h=s.bass.ceiling>Lg;for(e.onset&&s.onsets.push(t);s.onsets.length&&t-s.onsets[0]>2e3;)s.onsets.shift();let g=!1;h&&d<.4?s.out=Math.min(30,s.out+r):d>.65&&(s.out>=2&&(s.drop=Math.max(s.drop,Math.min(1,.55+s.out/14)),g=!0),s.out=0);const x=Math.min(1,Math.max(0,(s.highFast-s.highSlow)/18)),m=Math.min(1,Math.max(0,(s.onsets.length/2-3)/5)),_=Math.min(1,s.out/6),A=f&&s.out>0?_*_*(3-2*_)*Math.max(.1,x,m):0;if(s.build+=(A-s.build)*o(g||A<s.build?.25:.7),e.centroid>0){const C=Math.min(1,Math.max(0,Math.log2(e.centroid/300)/Math.log2(16.666666666666668)));s.bright+=(C-s.bright)*o(1.5)}}const Lv={bass:[20,160],lowMid:[160,800],mid:[800,4e3],high:[4e3,12e3]},aT=Object.keys(Lv),lT=.002,cT=.04,uT=.25,fT=.0016,hT=6,dT=90,pT=170,mT=1.9;function gT(){const s=()=>({floor:255,ceiling:0});return{envelopes:{bass:s(),lowMid:s(),mid:s(),high:s()},overall:s(),previous:null,flux:[],lastBeat:0,onset:0,rise:0,punch:0,lastNow:0,kick:new Qf(170,.16),snare:new Qf(170,.13),hat:new Qf(70,.06),sections:rT()}}const go=new Float32Array(256);for(let s=0;s<256;s++)go[s]=Math.pow(10,(s/255*70-100)/20)*1e3;const Jf={kick:[30,150],snare:[1500,5e3],hat:[6e3,12e3]};function Ig(s,e){s.floor+=(e-s.floor)*(e>s.floor?lT:cT),s.ceiling+=(e-s.ceiling)*(e>s.ceiling?uT:fT);const t=s.ceiling-s.floor;return t<hT?Math.min(1,e/190):Math.min(1,Math.max(0,(e-s.floor)/t))}function Zf(s,e,t){const r=Math.max(0,Math.min(s.length-1,e)),o=Math.max(r+1,Math.min(s.length,t));let l=0;for(let c=r;c<o;c++)l+=s[c];return l/(o-r)}function Dg(s,e,t){const r=Math.max(1,Math.min(s.length-1,e)),o=Math.max(r+1,Math.min(s.length,t));let l=0;for(let c=r;c<o;c++)l+=(go[s[c]]/1e3)**2;return l>0?Math.max(-100,10*Math.log10(l)):-100}function vT(s,e){const t=-100+10*Math.log10(Math.max(1,e))+5;return Math.min(1,Math.max(0,(s-t)/(-32-t)))}function xT(s,e,t,r,o){const l=e/2/s.length,c=G=>Math.round(G/l),f={};for(const G of aT){const[X,k]=Lv[G];f[G]=Ig(t.envelopes[G],Zf(s,c(X),c(k)))}const d=Ig(t.overall,Zf(s,c(20),c(12e3))),h=c(1e4),g=new Float32Array(h);for(let G=0;G<h&&G<s.length;G++)g[G]=s[G];let x=0,m=0;if(t.previous){for(let G=0;G<g.length;G++){const X=t.previous[G]??0,k=g[G]-X;k>0&&(x+=k,m+=go[g[G]]-go[X])}x/=g.length}t.punch=m;const _=t.lastNow?Math.min(.1,Math.max(.001,(o-t.lastNow)/1e3)):1/60;t.lastNow=o;const A=G=>{var Me;const X=t.previous;if(!X)return{flux:0,audible:0};const k=Math.max(1,c(G[0])),ie=Math.min(s.length,Math.max(k+1,c(G[1])));let N=0,K=0,Ee=0;for(let ve=k;ve<ie;ve++){const I=ve<X.length?X[ve]:((Me=t.above)==null?void 0:Me[ve-X.length])??s[ve];N+=go[s[ve]],K+=go[I],s[ve]>I&&(Ee+=s[ve]-I)}return{flux:Math.max(0,N-K),audible:Ee/(ie-k)}},C=A(Jf.kick);iT([{hits:t.kick,...C},{hits:t.snare,...A(Jf.snare)},{hits:t.hat,...A(Jf.hat)}],o,_,r),t.rise=x+C.audible*.5,t.previous=g,t.above=s.slice(h),t.flux.push(x),t.flux.length>dT&&t.flux.shift();const y=t.flux.reduce((G,X)=>G+X,0)/Math.max(1,t.flux.length);let S=0;for(const G of t.flux)S+=(G-y)**2;const T=Math.sqrt(S/Math.max(1,t.flux.length)),L=mT*(1.5-r*1),P=y+T*L,D=t.flux.length>=20&&x>P&&x>.35*(1.3-r*.8)&&o-t.lastBeat>pT;D&&(t.lastBeat=o);const O=P>0?Math.min(1,(x-P)/(P+.6)):0;t.onset=Math.max(t.onset*.9,D?Math.max(.35,O):0);let E=0,U=0;const q=Math.min(s.length,c(1e4));for(let G=Math.max(1,c(100));G<q;G++){const X=(s[G]/255)**2;E+=X,U+=X*G*l}const H=Dg(s,c(20),c(12e3));oT(t.sections,{overall:H,bass:Dg(s,c(30),c(160)),high:Zf(s,c(2e3),c(12e3)),centroid:E>.05?U/E:0,onset:D},o,_);const F=.6+r*1.2,W=1.5-r,ee=1,j=G=>ee*Math.min(1,F*Math.pow(Math.max(0,G),W)),re=D&&ee>.15;return{bass:j(f.bass),lowMid:j(f.lowMid),mid:j(f.mid),high:j(f.high),overall:j(d),beat:re,beatIntensity:re?ee*Math.min(1,Math.max(.3,O)):0,onset:ee*t.onset,kick:ee*t.kick.pulse,snare:ee*t.snare.pulse,hat:ee*t.hat.pulse,energy:ee*t.sections.energy,build:ee*t.sections.build,drop:ee*t.sections.drop,bright:t.sections.bright,input:vT(H,c(12e3)-Math.max(1,c(20)))}}const Ug=[.35,.45,.8,1.15,1.5,1.9],_T=3.6,yT=2.2,MT=6;function ST(){return{rate:1,clap:0}}function Ng(s){if(!s)return null;if(s.gesture==="fist")return Ug[0];const e=s.fingerCount;return e===void 0?null:Ug[Math.min(5,Math.max(1,Math.round(e)))]}function AT(s,e,t){const r=[Ng(s.left),Ng(s.right)].filter(c=>c!==null),o=r.length?Math.max(...r):1,l=Math.min(1,t*MT);return e.rate+=(o-e.rate)*l,s.clapping&&(e.clap=Math.max(e.clap,_T*Math.max(.5,s.clapIntensity??1))),e.clap=Math.max(0,e.clap-e.clap*yT*t),e.rate+e.clap}const ET={dust:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD51PXOBSjr0HNJjGAe3fFLz6k0ABBC5oOeMd/SnJI8Uquhw6nIIHepLhmaczSGMmUlzsAUDJ5GAAB9BxQBCFLNgcn0JpXRo5HRl2spIIPr6U9HRmxMZCoBxtI4Pbr2zTFXcRghB79KAG9PQ0oBHp1q8NKuJYY2t40lLMIx5UisXY5IGM5zx6enqKpvDJESHUjkjn260ANwcjPNA78+3FTW8E15PFbwohkY7F5CjJ9SSB+Zpz27szhSSsYwWA3KOmSWHGMnr9KAKw454IoweO1TpHE85WSb7OhxhiDJ/KkGwQjYru7A71KjC88YP/6qAIe2MClx0/nQFJIwcH0qxFbsy8XEKsWKMjPg9Mk+gHbr1oArqrM3AJPp3o6dyeeMd6nuRAZWe0ikS3Zj5fmuGfbnjJAAzjGeKW2vpbJJfs7mKWRShkRypCEYZfTB/pQBE0JWBZGaP5icKHG4Y9R1H41GQc5qZI5ViM4wE+7nI6kenWolxvAfJXPJA5x7UAA+g4o6c+npQeuRwPSkPH0oAMdADS854GKAADgjNHfpzQAAZ9qleFoZADtlAw3ynIwff+fvTXEZdRDubcBkY6N3A9fr+lOliVJGCiQLtBG8YOPWgBAyl2ZBs3NgKGzgfXv6VJdSRzzblt1hwoV9vQuOpAHAz6DimR4UkjJKNkleeP8A9eKsyvc3TRPLO+1VKRCQ5CruJ2gemSeMY5NAFdRvRuQ4QZAPUjPTHaljiacOqJGhRPM5IGQBzyfbPHftVu7jjikkUyW0xIAZ4sBVZiGO0DrjkcYHaokljjidkuTG8ZATEfMgOQfm7AADg/3jQBGbiJrMxGHMgIw6thcDPVQPmPPUn2pYI1nMnzKuzlsybPMGQNqjHJ6fgPap/swvFLIJC5H7hMfewwyOB1wSeoHv2oSOCRHhd5pCIN6Mq7yrLywI4wvXJ5wBnmgCo8SuFaNCiMTt3MDkEnHPr26YpPIkZgY4nG47ce//AOsU5gyXH79RKOVGG4OOOo9KbKrrMwm3iUcENx9KALHk74muDAkcZGxP3hAVxjPbk98f7Qq3GqarFbNd38MIt3jtgkrBSIfmO5cDBC4IOSTll684rXKxxW3lx28mHYMHkGOQMEKAT33Dqeg6VGUkaAs0yKYMbY3b5iDk5A/DJ+ooAnu4IgLiW0tpprXztsVw+chQDgEDjJBBOemMetQ2yxpFcLM0UTjAXzAxP3sEAAEAjrk44XA64qXSjch5Ra3kkMkimIxRhmaVWUhgAODxxg+tVZ4ZkYGY/M43AcHIPOeKAI2RScBwz/dxtI4+pphAB+U575qa2tXuZCqsi7VLEuwUYHYZIyfQDk9qaLeQAkjAAJ+bj9KAI+n9fejtSnk9OKQ4yORQAdunFAB7d6AcDjk0gJzigC1aCNXzJ5uwfe8r7y+/4fhU6LetCvkIj8sq+WA0hBByMdSuAe3HXrVa1nEEgYDD54bdgY7gjuD/AI1Zhv57aWaeCeS0W43xOts+zMbdUAz9zsRnpxQBSjZc5cE8fKQcYPY9OlaFrbG9mULtjVEYmQgkcZOeOQM8fjVaAbZgdp5PHl/NxjkDr29f6VO93LbPLb2pRU8w7QrCRgNpTAfHIwT04PWgBLm4+1xrNHCsflxBZv3jEyncdrHPGcFRxx8ueuaryxr521HUoFUZXOCcc9ff/wCtSJ5gUFBhc8Z+nX3+vamlCjI2QG+8Ce9AGxaWLXq3FqLuGHT7Y+ZJcmMgHoM4xvb5sYUdNxIAyaqSR2n9qrh5IbZuN08ZztI+9hPUY4GevXFQzh1u95TyJIgjDyyflGB8wJ5yTzn1NQt5pbO4s33gc5xk9/rQBOWQWySxNFvMxBUrukwACD0xjt9c1LcTs7JM4LyAbjJPhtx75z75IBz160TXc9zdx3UCi3kEYA8g7dowRxjpkZJ7/wAqrPNG/lrKnllIyCV5LtnqRnqen60AXZmsonYWlzK8JUshmXYd+fQMduVHXnk/iJLSSFNRjFvbbvNHlATShF8zGMiQgAAEq2Tg8cnmqDKt6ryqY4fKjUEEnMpzjI/r2qawlFtcwyxyzR3EbM4WFFbDAfKeTznkH+R6UAMjMlnKkkUhiuIf3u5X2OrZwMe4POBz1PSomlmEZiY+WDl+mS5Iwfm68jt0/Gnxh3uC6RIQrKxiY5D85xj09cfpTjJbvI8kYaCUu7/uhmMA9lU8jALdSe34gEDtuMmyMQgAEqrHGfoTnrUt5cxyTTC3eWSGVg5e4VTKTjnLD3J4+melRTSDA2xxgqqgFM4yBySDySfyznHGKhJCr1U7uc9x7UAIoyc/pRge2e9Jk55FL14z+dACfzNKPXNJnPTHHalCg9KAJUQtEwEeSo3FsgcD69f50szrO4CL5cYHCs5IXjnGfU5NTJNMYhaPJGsKHzFJJZVYjrgcEngHg9hwBUcsclodskUkc4AJWRdpAIBUgEccc59CMUANjaWONipG1uPXP4fjSpGJJGdX2x4yzycBSR0yM55/P2oCgQq0kJAbIDg43D+XBoJSMowLgEZBZeF5wSB0PegC4mnXlxpUl0kMv2eH95gAkAEAFvYcDk/QZ5xPbrpsHkJdEG5S4CujZMTRkcMGUg5HpnBH0qvYyxs6xPOsCIwYSPllVxwGIwSVHPAB7dadIJXa9EdwJosn5xtQOM5DYPb5eg5HHSgCoiC4fdLcqmCAwx8x9cdifrjNWJbJoIfOWzL20jZSVuSO2zIIBOSAR60p3XFtGk6pFDZgpgKeS2TyRyST/KoI7N7mNVg3SyRgsyohIRBjLH8T29KAH8OWiwSsS467VHXIOB2J6mh2mFnFBJNHKvVVDqwGecZ7H8eM0bY4p3aAh0cmMRSn94wI6kDpnPH+TVx7WK3uj9rdA6fLKsbDcjAbcKRkY6HJ64zQBDC8MmntHPHIZFAEUSIPmHzEncTlcZBwAc98Dmktra3SOCU30kbuctsjJKBWOCDnk8Dp6+1RzQm3jhjnlLFC2USUHyx347Z4PuAafZ7Yg264MZQgyQKv31HTvycnoOR1oAikij+zPcQoETIUgzAsWJJGB1xgYPoRyeQKdbRr5aCS7Ft5owAE3Dbzgn3JwPUYz6VA6rM4itkZtzEqAMn8vp25/rVq9aO30+G2WFA7gStui/eLkcAueSCMMAvy8jqc0AUmhmFuZRGxjVtjSgEruxkLnpnAJx3oS4ltxIkMp2yDa2B94fjQsjuDGrEKPmCkk5P4d6iJyxxhec4Ax+lACvHJFI0ciMjqcMGBBH4GkPA/xFS3Mv2i5kmLSMzncTI+9j9T3+tREc5xmgBOD649qU9e3PtQODx0oB4x1oAUEDGCQw65rTOs319FbWl5cNPDA2YEZc+Vk8hB2B9BxkD0FUYPKCSSSru+UqiZI+Yg/NkenX3pkZZJMgHeDgEckfSgCfc22S0Uq8KOXyuCeOM7sAkY7d/SrUeowxZQ2kE3zBkzn5T1AOfvAc/XPJOBVJpprto42b5YsiNGY7UGSxAz0BJJ+pqSGWORpBNIIozG2FEe8E4yqgZ4yQMntz16UARiKJk8zJBOMgdu2fzpgVlQuGHC464PPBA55q5Pd2zQLGIIi7BWd44yhU5OVAzjGMcjFMsZIPP8uZvLilGwuzkBcnqcA5GPXNACg+XZzROuDKq7Qr53HOd3vgdqVn+1yQrDOsQigyDIQnzKCSM9ySDjPPIFQ3EkayMloZfJ4P73aWyPQgevpipg89u6Tl/JuLYLIvzBSBxtI5znJHA5HWgBLLyZGDSxGRi43EOFY5I4GQfz5xnpVkNJZaki3FvFGFhLRiaJeUdSVYgj5zhgQSO49BVaO4uI4iihPMkIm8xQvmA4PRuuMdsjnHFVDIzhlBABIJGc89M5/E/nQBJclZZDIpGHbO3GNv8AjU0V5iVibaLe8ZiPyDHPGQOinGOR9etVwU2hW3K4Jy2Tz6DH+etSXF7NdGFLiUyLEpVM8BQSTwB7nOKAJPtL7AscxjDuPMLNwSDkZA6gdfzqOZnmcqH3BARgLtAAxnA/Cp7W9ksYw/ls3ng7g+CsiZHB7/eXtjpTLW7+z3AuEhhkEYOYpVypzkfjjIP4DrQBFDOIoZISiZYgrJt+ZcZGM+hzyPYdKieQSMWZVyRggDGD9KXz5MDcQwDb8MBjPHNM3fKAFAxnkdTQAhwPyo6HB/8ArUuffrTSfY+9ACjk9eaAB/jSZ4wO1A44zQBMs5WIRqEXnO8L82CMYz6e1Ai3TJGrxyF8AYYgAnjk8VDyMkfnT0fYwbCsc9CuR/8AXoAHXYzLkFgcEg5B+hFW7OzYxPeNbm4ggZfMXcVXnJwW7ZCN3z6A1UjZY2+aJX9mJ/pQZHEZjDHyyQxXPBI6E/r+dAASX7Dk5wBUsE6QxSAR5kZSqtxgAgg8EHsfb1ot7trWdJY44m2c7ZYw6k46lTkH+VNjnZbSW32RMkrK25kBZSucYbqM5OR0PGegoAC6tlY4gWfbjqWB9ue9W47r7DefarWSUyCMoTKoDISCreobjI6dD681TklDj5YUjzj7ue3fr1PrTQfnyVDH0YZoAkad5JIUlLOkfAC4zt9AcH8KdcRES72DRrIokjyAMp0HTHp1xyaYsMvkmaMZRANzL/Bk4APoTimxzNDHLGgTbKAGygJwCDwSMjkdRzjjpQA1mJzuO7vzVhLhrSeQ25IDxtEfMUEgMu1uD06nnqPrUKShIpkMUTmVQoZs5j5ByvPU4xzngn60u6N3VpC5yuDjGSccf0oATKlQNxOOx4/KnPIWt4kMUS7QRvC/M3J6nv1x+FNKYVW3KQewPI+o7UzLcZzgfpQA5ypJ2g4z3PNNHUUdR2xSZ56UAKP1ozj6CkHH8VL0P+FACE8gdqcB+lFFACN1x6DNIDkiiigBSAMflSNkAc9RzRRQAZJY+1OxzRRQAnv74oxljmiigBPQetKflAx2oooAB1/HFL0GfSiigBO+PYUYyM9zRRQAgGTjtQTx9aKKAFxjOO3NLjJC9jRRQB//2Q==",line:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5UooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA0/7CbGTqOmD/t5FA0PIz/aWmD/ALeP/rVuD7Rv+V7vn00KKl/0pG4Oof8Agkj/AMa7fYx7fl/mYc77/wBfcYY0MYz/AGnpn/f/AP8ArUf2IoGTqumf9/j/APE1vYvByv8Aah/7gkf+NA+2A5/4m4Ptosf+NHsY9v6+8Od9/wCvuMBtGjX/AJi2mn6SN/8AE0g0eMnH9rab+Lv/APE10Bmux1l1UD1OjR/41A106sTJfXMZ/wCmmkR/40nSj2/r7wU3/X/DGONFBPy6lpp/7bY/mKQ6FOThLnT3Ptdxj+ZFab3lsTzqlgx7ibSwP5KaMxTcCTw3MPdHhz+i0vZwf/D/APDj5pGb/wAI3qpXdHZtMP8Apiyyf+gk1VuNMvrQZuLO5hH/AE0iZf5itxdNWYnbolrN6GyvwT+ALN/KnYNimCPEmm49PnX/ANkpOiv6/wCGQ1UZzFFdKdQEuANbtLj/AGb+y5/Pa386Q2yzH/jy0O594LvymP4Fh/Ko9jfZ/wBfK4+fujm6K6U6Cj/MdD1RBjrBOso/9B/rUZ8PQkf8emvx/WxDD89wo+rzD2iOeoroE8MqzY8vW/8AwXf4vUp8N2sIzN9vTjP74wQf+hSUvq8+we0ic1RXV2ugWMnMcBn9cTvNj/v1Hj/x6rcVjZwEotvaI/8Ad8tC35O0jf8AjlWsLJ9ROqjjIoZZ32RRvIx7KCT+lXl0DUiNz2rQL63DLEP/AB8iuwmMkMQEjTJH2D70T/x5oV/8dqnHc20bZWa1jbsY5oUb/wAhxu3/AI9Wn1aK+Jk+1b2RXVYx1Fuf+40tI0cLf8s7XPvrSn+tIUI6kj/uCJSs0agBpIhn+9oiCtP66E/11GmOMf8ALO0P01hf8aDGhPFrGf8Ad1lP8aa09tHkNcWI/wB/SQP6U37VZY4utDY+j2Dr/Jan3f6sGv8AVyZYJgBss7vnp5Wrof0wak8u9iPEHieP1MVz5n8lFVSlrMOF8NSfR5oz+pFImnxMcppdrJjva6mufwySafp/X3IPX+vxJpr+eD5ZNT12Adxd2ocfq39KhF6kx/5COjT+1zYbD+YT+tWEhuYBlYPE1so7xSeao/ILUL3+Tsn1dhj+G/04N+Z+Y0m31/r72gX9f1YaLOOd/wDkG6Rc5/59b3yz+Rf+lPSzltCSlj4gsh628nmKPyA/nTQtvPyT4cuB9ZID/wCyinRWMTMGh02NT62urIP5kmhLqv6+5fqO/f8Ar8Qe/O0rLrE/+7f6eH/X5qaXtJutx4clyP4oJYj/AOOqK0Y4r+NcI2vxj0F/G4/pStJdLhpJ9RB9ZZbYfqTV8re/6/5k3Rm/Z9OIyYtCBHdLucfpmpY0s2IEKae56bY57p//AEEVeS8dmwt5OGPZdQh3H8Io2NSssqj/AEh7gL2E8s5B/wC+3iH6U1BdLfcJyfX8yt/Z8EYDS2cCY/ia1lx+c8qip7W36vbIn1gjQfrFG2P++6khgWMebFEEHeRIwP8Ax4L/AO1Ka00dw4AMc7DvxK36CY/qK0UUtSbtjmKTEo7LO4/hZhK35Eyn/wAdFPkWaNNrpOkf911dVH4O8S/+O1HL9pdSHgvGUccwTsPyeRF/8dqr9n2PuFsy/wC7a2iH9Sxobt0BCF4o/uPaRsOpW4s4z+aq5/Wnf2gRnOpZOP8AoMMB/wCOoBUm+627Y01EDsENtj9BUcg1FRgxa6B7WsUn8qnXz+4ehX3ycELMT/s65HSqLtjlU1LP+xrMZP8AKsQa9IOthpjfW0T+gpP7aQ/e0rTW/wC2RH8mFc3to9/y/wAjXkf9f8OdCItQ+9s8SkY6perJ/IU2Sa/Rfnl8SIO3m2gkH6kVz/8AalmxzJotl/wB5V/9nNSx6tYpjbZ3kP8A1wvSv81NV7aPf8/8hcj7f195oyX6H/Xajbbv7t3pSj9QCaj/ANGl/h8O3A+ssB/9lFIniCEYxqWvRezSrMPyOKBqtvLnfqaPn/n50yNv1GTRzRfX+vmws1/X+SJY7FM5t9NCsP4rLVEP6HJq2n9oIu0N4oQegUTr/MVQ86wkHM2gufR7eePP/fIFOiTTVbcf7FU/7FzcrVJpbP8AH/JCfmWiJ3b99JdHHGLjREY/ieactkrEEwROPX+xnH8qhNxYxAkXWnj2F3dH+S1HJqWmcF57dxjoi3Mn/ociinePVr72Kz/pF/7CoG77CoHqdJCgfi8gFLFbwGTCCDf/ANM47ZSPwjWVqyf7d02AfubXefa2hj/Vg5/Wo5/Fk7rsit0C/wDTWR5P/Hchf/HaXtaa6j5JM6bc0aiOWaRR2Ekzrn6Kzx/+gGmhDCPMWNolP8aRlAf+BARD/wAfNcdJ4g1N12rdNAv923URD/x0CqEkjysXkdnY9SxyamWLj0Q1RfVnbS3tmriR57ZWz95pot35qsrf+PVWm1m0kIV7+B177pLuT9MqP0rkKKzeKl2KVFHTm/0lSdsmnnPf+z2b/wBCemm903kLcaYc/wB7TiP5ZrmqKj277L8f8yvZrudKZbGXkP4fb2aGeP8AkKWO2tCflstHc+sWotGf/H2rmaKPb91/X4h7PzCiiisDQKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k=",dandelion:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5UooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK3PD+iQ3Ucmo6gV/s+2I8yIXCxTTA5/1e4EHBxn696AMOirF8kEd3KlusqxKxCiRgzfiQBVegAorWg8K63Pbx3K6ZdLBKcJK8ZVG+hPGORW9F8I/FVxbRTW8FjOX5eOO+hJhXGQ0h3YUHnGT2NFxXOLoq5qmj3+i3klnqNrLbTxnDI49geD0IwQcj1qnQMKKKKACiiigAooooAKKKKACup8P/DTxN4jaQWuntCsSB3e5zGAD04IzzkY45re+Efga41mSbxNJZR3enaTMgkjkCsjuVJAZTwwwOnckds19BeGLS/1K0uhZpe/2jc7jclyIwBtAB6fKQpXhffB7DCrOS0giZSsfM158KvElrLcxRRWl3JbY82O3uUZ15x90kN146c9s1gTbLO0ksrqwRLsOR5h3LJGQeQRnHf0zwK+vNXt9ItNRsLaxtnOptGILtPL8yaeMfMRvPB+Y5OeOAM9q4L9obwK2peErbxvHZwxz27CCaSElQ9vu2xsVxjdlhk5yM45AyLi5rSRMZpnzfWto9/BaWl+tzYW92kkIjHmZDISwIKsOhGD9e9ZNaMiW0egQOkjNdTXMgkTsqKqbfxJd/wAhWiLZUuzm6m5z8559ea6/wP4TupjY648cUqG7EVrasqyNduOqhDxjOMk8Vy+rak+r6hLeyRRxvLtysYwuQoGfxxn8a+gdH0ux03RvDg1O0kZbK1Se0aJQrFpBne/o2WA59B15q4Q5jOpPlR1Vist5ZPb6hp3mXdwfnsmufONvtIDAEDG0jAGOgz0rF8QS2VlBLo0enrZafEIT5in94ThtwCgAsCOvXOOvau00XSIIo5LGOH7TJI3zNGcyKGwCQ3HTitTWPhudKaXUhc3NwxQ77aOP5gcDlXzz0I5/vHvWzoxSscqqu9zz6z8L+EJtNh07xBDHPaXELSNd3Eg861Qg4ZGXIO1iAwzjpgV86eLfDcvhfW57B2MsIYtBNxiaPJw3BI+o7HIr3SHwzquoeKYtGupj/Z0pLPbFBELfk5AJ4J78cHivPfi74Q1LQrDRr/ULhJ/N822RlcFdqHcNuOxD5PoeKynC2qR0U562bPM6KKKzNwooooAKcn3voCf0ptOTr+B/lQA2iiigD6k/ZH8SadH4Y17RbiRRd290l8iO2N6MoQ4H1UA/71ey3WpWcN5bwgRfbDJiRYyrMkeTtJUYOOlfn7Z3tzp9wtxaTyQTJ9142KsPxFelab8VvEkPhaa91K9lubgSLYWVyzDzVUgNLyfvYXYMnnLirhyp3OerTb1R9O+Nb++ntvO0v7Gb1TiPKHlMkH5gCV5479TxXK/ErxLaeHfhFrmlX887y3FqLRI5lOwzNtwsYx0ABPtgd64rQv2h/DsgM2owXdjKkeFCL5m7A6AdAxPfjr1ryn4qfE26+Imrho42ttKtmb7LbtjdzgF3I6scD1x0HvtUcHHQypU582pw5q3Lqc02lW2mMF8m3nlnQ990ixhvw/dr+tU6K5jtFFfYnwmhg8QfDrw7qYii1ApGLKWBFDG3ZGKjcSfkGAp5B7ECvjqvS/gr8Ybn4Y6nNbXSyTaHqBAu44uJYyOkkZ9R3HccelVGVjOpDmR9E32vx+HNVe2khuJ7mRsxInDhVBZmKdh7DluTntWl46+IjWvhjw/PCZFkvL1YJwXC7RsLYb3PUdvlP0PlGv8Axm8Halq1xf2V5dQXc9mkC6hPb+ar45Kyx4yO+GUZyQc4zXJf8JqfH3hTxhBrU0ZNlFaahE1pb+W0uyfy2J564nHP44rV1DCNFnt1rcWuvXcVxpl5FLFNGSsyrkyru2kqeuQQQMHH6V5D+0zqUdtPofhmOQM9jE9xKCPmBkxj8wCfxFYulfG1PC0QXQtKkMvkKvm3s28LJnczBVAGCcDHTGTjJrzvxL4m1XxfrM+sa1dm6vZ8b5CoUYAwAAOAABiida8bDp0HGV2ZdFFFYHUFFFFABTk6/gf5U2nJ1/A/yoAbRRRQAtb/AItY2RsNCBwum24Eo4/18nzyZ9wSE/7ZimeCNPh1DxLZi6ANpblry5BGQYYVMjg/UIR+NZV/ezajfXF7cNumuJGlkb1ZiSf1NPoTuyvRRRSKCiiigAooooAK7H4X5uda1HSQAf7U0i+tQD3cQNIn/j8SVx1dL8Nr9dM8f+HbqQgRJqMAlz/zzZwrf+Ok0Ajmz1pKva3pr6PrN/psn37O4kt2+qMV/pVGgAooooAKKKKAClU7TnrSUUAFFSogYcL+Zp3k9fk6e9AG/wCHv9A8KeI9TyytKkGmRH3lfzG/8cgYf8Crma2JdUlTw7FpGxBbm6N2SCdzMUCDPsADj/eNZwiyMhBz/tUCRBRUh2j+Hp70fJ6D86BkdFSfJ6D86T5f7uPxoAZRUnyeg/M1PYWTajeQ2kIQPK20M7EKvqTx0A5oAqU+GV4ZUljba6EMp9COa1TpukA4/ttD7i1k5p8OiWN4xistVimuNrMkTQum/AJIDHIBwDjNAGr8XIEi+JGvyR/curk3q4/uzKJR+j1x9bfibV5Ndvob65SMS/ZLeAlMjcsUSxqx9yqDPvWTtX0H5mgCKinkqD9z9aTcn9w/nQA2inbk/uH86Nyf3D+dADaKduT+4fzo3J/cP50AWbQfLmrL/wCrJoooArzjcsanpsJ/Sg/eNFFAEVwMMfoK9l8MwWTeGbCeTTrGWRYIwGkhDH7o5+tFFVEC4k0MsrRfYLFVH92ADNeFkAs/+9RRTe6A6LR7iay0nWYIJCkc8XlyDAO5eD/Sqmg/utbsdo/hJ/NDRRWlVasiJrXUdnZ6p4ZeDTrRf9HjaVSGYTtn7zgnk/TAqnZTi58avMIood8kh2RLtUfI3QUUVnLYuPwXMS6H7qBu+wClu7yW6S3WTbiCIRJtUD5QSecdTz1ooqQKzdR9BWjLpsMUulqC5F3EjyZPQl2Xj8BRRSA3/wDhD9PLY8257fxL6Z9Ky9I0K2v9ZkspXmEab8FSAflIx296KKAJNe8P2mmWCTwtMXLIPnYEcg+3tWVpNql5eRwyFgrE5K9eFJ/pRRQB/9k=",jellyfish:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5VooHegVSV7AJRRS9qSQCUUtJSAKKKKAJrVd0orR1VNsS1SsBmYVpayuIM+9erQj+4Zzzfvow6KKK8o6AooooAKKKKACiiigAooooAcoycUKOaVeGFPC4kxXVShdL1JbIiMGnAZBpZV2vUkUe4N/u04UvfaE5aXIdvy5ptWfL/wBH3VWrOvDlsOLuFFFFYFF7Sl3XCj1rT11Ntsn51T0GLzLpa0/ESfuF9hXsUV+5sc0n75zFJTgODTa8lq1jpCilNJUgFFFFABRRRQAUoFJVi0hMsqjHHU1pSg5yshN2VyNlwM1Pt/fIfUA0NETBnHbNTCMmOB/Yj8jXoxhZv5GLloR3cW1lP4VNZRbvxU1Yv4MKpx3z+YqfTYM7fxFbKHv3IcvdsU0gzZsfrWUeDXTxW+bSQY6E1zUq7WIrmxsPdTLpPVjKUUYpUGTXBGDbSNrnQeFod0+7HQVoa9Futj7U3wpBhWbH8NaGrw7rSQ46CvYhpGxyy+K5wgX5WNMUZNWTHiFj61FAm5jXBOn70UdCloyNhzQUYAEggHpnvX0V+zV4e8EWGman4t8Wram7hnEdmL2EvHFGBzKq4IYluM842+9eq+IvGHhnUVjtL2/srizvA3lpd2ebaVBweWXA6jsKungalWTsvwfr+RnOuoI+HqK7P4ueHtF8N+Nrq18PXEcumyxx3ESo5YQ71yY8nk7TkDPOMZ5rjK4pRcW0zZO6ugoooqRigZNbGmQiOAzEct0rKiQtnH0roJovJgSIdgB/jXpYKFlzMwqy6FXyP3JGP4TVmO1zp8Jx0JqyttuUDHtV21gEmmqMcoxBr0VBGDkUtTt8W0L/AEBqXTIeE4/iP8qu6lbl9NUgdMGnabCNqEDv/Sjl1FfQrW8X7qZfc1yV8mydh713UUODN9a4zVUxdsP9quXEq8TSk9Slt6U+3Tc4qbycY+hqeygyQfaueNPVGzlodd4bt9lqTjqKsavHixmPtU+kReXaKPUCk1gf6BJ71u5a2MThZodtvnHbNXPBmgP4j1y00xCR9okwzDqqAFmP/fKmn38Oy0bj+ECtX4f6y3hHXLHWxbi4FsxLwscCRCpVlz2yGPNKMVzpspv3XY9i8aaxbW39leEvDqwpp8ltDBcSKuSSQD5a+mMYOOSWIrsvEngG5n06ySS1aI2cYEYxyM43bvcnHHbGK5n4UfELTNd8VXV3p/g5Xlt0DefdXIdoNzhR5eEwD94kkZwvHer15+17p9prAs7vwlcNabEcNHdK0gYjPIIA6Ed69zEYz2CprCw0ju21dt6f8A44UnO/tHr+hxPxl+HUqeAbHW7a0IfSiYrhgvPls3G76Ej8q+f6+kvH37U2l+J/CPiHw/beF7i2bUoDbwzPOpxkjczgDqMcAZ5r5uPWvmcwqOpWc5Kze530I8sbCUUVLbxGaVUHc1yRi5OyNm7GlpFkZpoQR1bcfoK2LmLfN06VPpFoIkkmxwq7F+tSiHhnNe1TSirHHJ3dyVIMSMmPeprKPb9qh9DuFTBQ0sUg6OAfzqRYvK1DHaSPFdLZkKYPNsCuO1QaZGRGn4f4Vp2qZgwagtYdgI/uuw/Ws3LUZH5OJJR681xGtw7bxuP4q9BZP3hPqK43xLBtugcdWFZVdUXDRlF7f5Dx2NT6bDkJx1q08P7ljjoMVPpsHEf+8BWb3LudPbJsgUe1V9UXfbbfUirqjCge1QXSb9o7c1nfULHMaxCREEx94gU5bcxWgAHJAH5mtDV4d0iLjpVk2e8QRquSWHHritaVnNLuKWiPY/2afDaaR4C8TeJb1VU325LfdxlIo3yR9Xcj/gNfNAikvtUMknJ2B29uB/iK9/0LxjNpnw5OlpIATI+nWcQ5yfLaNnx/vPM5+i149p9gJZNRmjXjcYk/BWP9Fr0fq/LUvLrLT0Sv/kZKrdO3Y4+7Uq6g/wB0N+fP9agrQ1mMR6lcIPuxt5Y/Dj+lUMcV8/io/vZWO2DvFABWzodmWYykZxwPrWZDEXcADNdtotgIUjBH3RuP1rbDUrO7Iqz0sW/J8mCOBeo5P1qK8KwW5Ge1XQmWLGsHxDdeXGwzyeAK73ZK5zLV2NjSz52nW7dSvymtC6jw8Eo7HBrN8N/NYlD1U/8A1q3Hj3xAenNHNsFtRtuMKR70yJMNL/11P8hUsQxxSRD55v8Af/8AZRWcpajSArz+Fcv4pt/3kbY/irrCKxfEcG+FG9Gpc19BpGXLFizJ9TVvS4Plh92H6A0+eDNivHerdhFs8gegY/p/9eokykaGKay5xT6MVzyZaM67h8y5TitTS4ozqULy/wCrhSSZ/okbN/SqzJmYH0FbOkaSdQ07WJB98Wy20P8A10mkVP0XcaqnU5Zxl2CUbpo5yyjaG6s5ZM7rexku29mZXk/9mWrnhHT1FlA8g48q6u3z6IqD+h/Op54FurfxHqEIzBFAlvEfZ5UjT/xxDVv7LJZ+FLy9T5Ut9HCMfUz3ZXH5Ka64Yhq3l/wP8jJwPIdSUyXEznqzEn61UERLhfata5hxEC3Vjk1BbwbmeTH0/D/69cbjdm17FnRLDzrlTjjP8q7WCEJGeOtZXh+z8tC5HQYFbmMDFdMNFYylqyFxtQ1xevTB7pu6wjP1PauzuW2xMfQVwWtsVVVP35WMjfTtTqy5YNipq8jsvDow06DoGNby/dooqnsLqIB81Ni/1s3+8P8A0EUUViykSGqGsIGtefWiikMrlQbFc+tWoVAeLH9xv6UUUS2AsGkoorNlDf4jXVaQTb+DNUuI+JFjnlB/2lEYU/huJ+tFFYSNEZMKCLwJeqnAm1C3Vx6hACo/N2qz4jAh+Gg2DHni0V/cK7EfqxoorSHQlnlV8o3KOwFLaxKVUY4O3/GiitkSdbaxrHCoUY71LRRWqMyrqH/Hs3vxXA66xbU5geiYUD0GKKKit8JdL4j/2Q==",standby:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5voFH4UAdKAFHb/PpQO3+fSkA6cf54pQOn+fSgAHb/PpSUoHTj/PFGKADmj/P86Me1BH+cfWgAOef8+tKe/Xv/WjHXj1/r7UpB549e319qYAc89e/9aDnnr/nNBHXj17fX2oI5PH6fX2oAOc96Bnjr/nFGOen6f8A1qAPb9Pp7UAA7de39KBnjr2/pQB049O309qAOnHp2+ntQADPHXt/Sk5wP8+lAHTj07fT2oxx0/zx7UAJQc0dv/rUEcHikAmPagD/ADijv0/SgD2/SgAA6cfp9PalA6cfp9PakA6cfp9PalA6cfp9PagAA6cfp9PagD2/T/61AHTj9Pp7UY9v0/8ArUAGPb9P/rUuODx+n19qTHt+n/1qcF4PH6fX2oAXZ149e319v8/yeYW+b5Dxn+E/7X+z7fp+UsVsZA2EPQn7h9H/ANn2/wA9t+38M3c4mCWc29FkOPs7k8LOScCHt5Z9MY7YOzSMLgc48DDd8h4z/Cf9r/Z9v89mMhBPy/p9faus1bwlfaeZPPsZoyC4ANtIucNMD1hHTyz+XbB285c2rRuwMZBBP8BHc/7A/wA/oShbUCpt56fp/wDWoA56fp9PalK89P0/+tSAcjj9Pp7VAAB04/T6e3+f5gHTj07fT2/z/NAOnH6fT2/z/MA6cfp9Pb/P80AY4HH6fT2/z/NAOnH6fT2oA6cfp9PagD2/T6e1ABj2/T/61GODx+n/ANajHHT9P/rUEcHj9P8A61ACd+lAHtRRigAHbj/PFA7cf54oH+f0oHb/AD6UAGPb/PFAo/z/ACooAXHt/n8qeB7fp9fao6eP8/rTA2dNtklaQNFnCOeE9EkP/PM+n6duo9t0Hwzb3OlvI1jH/qpufsiZPGoD/n0/2R+Q9Ao8PsHCFztUkqw5UHgrJ7f5/l7d4d1C3h0qcDYQsM6sqIhwdmpYz+79/wAvbgbNXjoIu+MvCtokV2oshjfMdy2qgjDXp6i09h37DsAw8L1u2CX02IlUBjwIwvc/9M1/l/8AW9s8fazCy3hjSDd5kwQPGuSDJegnHl57+vp+HiGssjXspQLtLNjAGOp9FFCVo6gY7Lg9P0/+tTMe36fT2pzYz0/z+VMrEYAdOP0+ntQB04/T6e1A7f59KB2/z6UgAduP0+ntQPp+n/1qB2/z6UgoAXHtSH6UUUAFFFFAAO3+fSgdv8+lA/z+lAPT/PpQAen+fSij/P8AKgUAFOHf/PrTacD7/wCefegC3FLt3YI6MP0f3966e1157e3nQTOu4SDKPjOVuRz83P3/AMj+fIh8BufXv/ve/wDn+dr7SQr4fs3G7/rp/te/6/ntCVhHU6zrzXElwDMZW3yYZ3DDl5z13f7X+e/K3Uu+Rvm7nv7n3p1xcl2fL9S38Xu/+17/AOe9WR9zE7u57/X3onK4EZPNMFOJ9/1/+vSZrEYD/P6UDt/n0oB6f59KAen+fSgBB2/z6UUDt/n0ooAKKM0fjQAZ560A9Of1oz7/AK//AF6Aff8AX/69AAD05/zxSg9Of1+nvQD05/X6e9APTn9fp70AID7/AK/T3oz7/r/9elz7/r9PekB9/wBf/r0AGff9f/r0uevP6/8A16M+/wCv/wBejPv+v196AHbuDz69/r7/AOf5vMhw3zev8X+97+/+e8e7rz+v196cW68+vf6+/wDn+bAe8hO75yev8X+9/te/+e8bNyef1+vvQz9efXv9ff8Az/NC2e/6/wD16AEz7/r/APXoz7/r/wDXoz7/AK//AF6M+/6//XpAAPTn9fp70A9Of1+nvQD05/X6e9APTn9fp70AID05/wA8e9GfegHpz+v096M0AH40fjRn3ozQAZ5/+vQO3NFLyMdeaAEB6c/5496UHpz/AJ496B2/z6UDt/n0oAQHpz+v096M+9Hp/n0ozQAZ96M+/wCtGaKAFJ68/r9fegnrz+v196D3/wA+tB7/AOfWgAJ68/r9fegnrz+v/wBekPfn/PNGaADPvRnpzRmigAB/z+VGff8AzxR6f59KM/5/KgAz/n8qM+9HpSZoAXNGaSigCxFd3EMflxzuiZztB4zTrm+ur1YVuZ3lEQKoGP3QW3H9STRRTuwK4HT/AD6UAdP8+lFFIAA6f59KO1FFABijFFFAB6/59aCOv+fWiigAI/z+dIe9FFABjmlFFFACDt/n0oA/z+VFFAB6f59KKKKAEo9aKKAP/9k=",sphere:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5VGM89KXI7KKTFB9cCgBcjBHqKVOTg9PpTcH0oAzQAvGMevpSYqSGB7idIIEaWSQhUVRyzHsBV5dFuNzCbCbfvLkcfU9B+tAGaAPrV620ieZfMlkgtVxlTcNt389AOv49PerccMUGRBLChA+aQjcV/Pp/nimyf2a0KAyXk8rsS7thVcjAHYt3P59KAKj6XIjFfPgYjsrEn8sZpn2FySMjP+4/+Fafnx2n7oWVrIG+XfJmVYjnjknGfXjHtUVvq90s5O+SHystiF/LAI9h74oAgXR2A/fXdpBnp5rkE+2AD+Z496gudOurXiWJsDoyncv5jirL30V0S00sqSE/fKq4P1H9ant55InSJXjPmYVD5WM/THBHt/KgDGIweDmj610N/bW5kJeOyKkAh4ZGKkY9edreobvVH7BZXAeOC5kjnUHbFKnDHjjdxjv1FAGaCCOQTRgnk8d6GRo2KOCrDggjkH0pMkjGTQAZ+XHvQQRQKd1XB6L+tACfKRknBx0ApKDjJx0o7UAGKCO+MA0dqOp7/hQAp9cmko5z61d0+0EjLNKv7sHAGM7yOTj6D+lAD4EFpbGVyVeQbQR1VSOce5HH0Jq5eSboII55F8sA/wCh7yuxuCWyeASCM9zjnAxVaS4VrsMOSgJA6iJRzj3Y9z6mq0qyziLHzO25yc9OeSTQAt1b3OFYKWhzhNg+Ue3HepZAbeOOOIFrg7gcc+X9Pf37VNp0zabIWifDSxsmcAlgQR8oI4/3uvpSTas01tEk0UTxAsu1RsI6HqOT175oApJE8DAtMIT6A5b8h/WrxmtJbV5Hhy8jLG0xO3B5PKjscD34qr5cMvMMRf8A2Q+GH4HOfwq1ZQWr2+JmuY4pXIG0KxaRV+UDJHcgE9gfwoAqeVhiPs8Sgcl2Ylceuc1Zt9QFok3kwwNHt2MWXO8njj04zg9aYiSXKiNAs0A6ImQU9xnv/Oi906e1iijfYPMzJ95RkHgcZ46Hj3oADKI4RJHGuF6OpKkoT0Iz2PUe9S2lzY3EwW8jlijCnMsZDFFIx0OM9emarWkTo3lyxsYnBDbSDtz3FJeWk2nj7PMjJI3zNkcEfw49eDn8RQBbns2uEPmukjxjalwh+VgOgfuD6E/4VlSIY2KMpVh1Bq5biURpcrI0LINu4dXXtgd/T06Voyi01q2WRoPs1yqlfMTpIw6Ar0GcgZXAHXHJoAwQpOepA7ijooIJz9KQjbx3/lTiSec9u/egBFIDc8ikH545xRyp5pUGc+v0zQAnX04oyc8fpRQQR7EcUAFdBJdotpJC0cKOIYo42EeAVCgsDjkZLckde9YAHQZOTwRWrdbmvEhTq8W3HfJHH/stAEYt0jt2eaFrdZDtDg5UgcnaD17d6kuBFDBAsEiFihyki7dp3E854J5Bx0GaYt04tQpcyW9q21Ub5lJbngH1IJ+lQrJDcQvvBRw28kfMOeDx19O9AEYSZLqOWUMRvHz9c8+tNdcQOv8Ackxn6g/4U6OG4jObdjIDxmIkn8utaRmihNyJY45mY79y4VgRzhSOOhOTg+3rQBnx2oiUS3DtHFnKgD5nPsO31q22pGeGNikaeW52yBQXUYGM+o4qpMftb+Yky7+AEYbSPoen65pqRSCF4jGfM3qQpHPQ9qAHXcU32ry2YvuYeWScgg9CPzp4uWl8yGNyRnMakZHAxjHTkD9KmhkSLyVdVkZ1KbcnarYIByO/3en45qpEI5ZUWOGXzCQAEfv+IoAdAYZSXltxhepjOCx7DHTmtG5XEEE8Nx51wwZJoXXAVgeOOQx246dMd6ivfs0JEdtNgsu5mZeA38WCPcEZ9KjtbKW7glhh8uU53qEYdgSTj6CgCKGZZrg+fGynGJGXgBe+Qf6Yqa4/0KQi3cNHBJuiYjG4dCSOxPGR26VXluwALd1Mka8Fm4bP19PQGrUMDXV20FurT/aFA8lfvklcjA7nOOlAFbUoV3+fGSY2OPocZGfwqlkjofyrYt7V9qJIjPBKpjduBjHIbk9Rn+lZt3bPa3Mts7IXhcxnYdykg4OCOtAEIx3NKMn1oBxkEUgI6EUAKOOGFIDgH3pTwSOvbmkGc8daAJrWL7RdQwryzuqj3ya051cX5uyFUKQEDOowc49ewH8qxs+vWtrWPKvoLS7gJjLxYlDYAMoJ3EHtnAOD70AV5LOSKWWyBRggZTtkU5YHOevtge1Q2tpN5yqI2O/5MDng8VJOHS5dihEkTbiCPvJnP6fy+lQw2/8ApjqANsWWyegA6E/pQBMLeSyZvNV4nj4duQQf7oPr7/WnS6lLcyw3NwEl+URHK9FUYAyP9nAqO4uWeNXgd1VDtbBIyf7x9z/SltZHuElVxGyqN5LoOMe45yRmgCP7PE8rx4aIqTuOdyr/AFH61bgeRIpba2ZJkZOd3JbBzwDyB16VBd3EM3l/umiQqD+7bIJHBJz1PHr3plrAJbmPyHVyzAbD8pPr14/WgCRIkkTywslvMHBVSCck8fXrj1qa9t3spJI7dklkkGZJImDhQedox9eT+H1mWa60X7RYxMSZEaKWT7y4HO1SeOqjJHXtx1os8c8cJ8khiSmYzggjkcdO/tQBB5ZlhVF+Zkcrj2P/AOo/nU9tMkDNEhD/AC5Zuu7HOB7cVZgnASWCO4jmLociYcnHOAew47EZqrGsUUsbTQyQjcMsvzKR36/40ARl5BN5BAmwxUBx/I9auXEsFmInt4i02wBmdshCOoGMdsdexp89obMK6PHLPIgwqnlMZU5B7/L/AJ5qgiPIrwsH8zO8AjnPf9OfwoAutJI8Zs92ImkWfYowMZwOB7EmqF8xa8uGJ+9IzH8TVxMSXSshyPKeL8lKj/2WqNyP9Il65Dnj8aAIjwcgYFGQOn40EHJzx3o6cg0AAxnnkUoO00AgYP50lAByO+K1NPuI2spreXiIMCc9lOASPcHafz9ay81NZ3ktjL5kRGSCpDDIZSMEH2IoAtXE01temJlWXbt+XqD8o6H0Pt61oX2noNPhntvMjW5VRKZ12hWX+AN6Y2ntn8qJ3fWbPzIJ382BAME4O0fwsR1x2b069KoG5MMlwhXcqMA6P0ZR8pz+Q9xQA23szG43yRvG3yv5X7zj8PTrQ6bZwtuyskbcL0ZsdSQe59s1FPbhCJrZmaLG4f3lHv8A41M5nnuZF+WQbz/rBnGenPWgBjWkr5tkRi6yfKDwSrDrz06frSSypaRNbQMru3Ekw7/7K+3v3+laf9owfZTa2qsuIzHNJnf5vO4YVvurxjAPOAT1xWYVik6LE30Yxn9ePyoAFnkiuY5Y2YbwrYXuehH5g1YkmWKO4tXSKSRSC7gbWGDgqCPrzSywxW1qC3nRTAlTuTIjU8jnPXr24+vRsNobm7VY5ov3qc7iVVflwSSRgAEZz7UAVoET7QjRPltw/duME+3oasyxvocskUmRcjIMYP3Pr2zUZmWxYw22fP8AuvOQQR7KO316/SoZZ2WaVTtkTe3yN25PT0oAtanfNdTtPPDA7s7A7Ywg7HgLgDrUlldR2zpIfMDFWKxtiRVG084P6Cie2Qo8owXEuUt2+82V6+44Huc9KqQKdzz3BJJRiFPV+MflQBoWFvbz2zu0iQ/OuwgMrEZyxxyMAKCeRWXezRTXdw8O/wAppGaPcMNgnjOOM4q1du1taiI7RJKMuR2H90emMAfXPpWbnFABjnmg8nilzjnHWjOBgdPpQAgz2JyeMUdvejJBznmkoAUe/SlHPBPHWkzjoaCc0AWLC+uNPuY7i3Yh0YMARkEg9x3rfe3tdUk8+BIIkuOAd6psJz8jZ4GD06ZAH0HMjk5qS3nmtZN8bFTjBHZh6Ed6AL6QR2khgaVmkz90/uyjdM5PX8OtT6nFLb7PtNo9rJKgOI1IVBjrg92GDnPQ+9PgMOtlYnKx3ORje3BH16jHrz7jjNNNneusyxRSXESMZF8o5Ma9CQVyAOnPTigDPsw1vcJLGVmQH5lU/MR34PNEtu2nzsjDdLnCLjt2bHv2qWSV7dA0c32kjqzgEIfoe/v0q1e6tcSW8ImOXUbZZF+WRieRuPcY4x7GgCnZEwuyyzsvmfKUQ5Oc8Z7DnHr9KsXd9mxt0a1hjyGH7sbXYbjyx7nPHTsaghXzQZA0Lxr1DRqrE+g9T+NTXctxcpFNDGsTbcOka7dnJ7nkA/XrmgBlrbJePGpMkRLDbJIMKOehb098cUyeB7aSTYizSEkl1wwX6D+p/wDr0wIkMZlnmLO+VUJ8xx3OTx7d+9WrAGY/NEsMKLu85+Sg+p7fT8KAGXkbRuPMjZ3cbghBJJboT36AfWrNnC028XId7p0Ox+f3SrgszHHICg4Hb14xUlybqa6nu5b2V4iSXud7EyDoAM8rkDoefbtWbc6pIyvFbloomG18Mdzj0J9PbpQBXvbgXEzOowmcKO4UdBUJ6kDp9aMAg4x0zQu4HIH6UAJyT7mlHGc9P50ZxzzmkzQAA4OaVxtYgdqKKAAgYJ6YxSdqKKAHDBU57U0c/lRRQA7c0MgaNmVlIIYHBB9a39MuJdSS4muHbzYvnDqcEk9c9vyHNFFAFZr+e31RI9yzJvUYmUPwccc9vark0aTWjXaxxxNPlmSONdoOc8Ag4oooAx57qbe6B9qxkqoUAAc1ZmvrprqC1knklhVUjCSHcArYJ4PuSaKKAJtSEdrqP2dIIiASocjkAHHbj9K2dZ0u20bRrK5hVppbiLz3aY7vm3ED04AHH1NFFAHKXN7cXTBZJWKZBCDhQfYDjvVZuWNFFADto37e1DDaOPU0UUAIvLgdM+lIfvUUUAf/2Q=="},Hi=[{id:"w3",name:"Dust",tall:!1},{id:"t3",name:"Sphere",tall:!0},{id:"w2",name:"Line",tall:!1},{id:"w1",name:"Crowd",tall:!1},{id:"w5",name:"Bloom",tall:!1},{id:"t2",name:"Machine",tall:!0},{id:"t1",name:"Standby",tall:!0}],vo=s=>String(s).padStart(2,"0"),$f=s=>`${vo(Math.floor(s/60))}:${vo(Math.floor(s%60))}`;function wT(){const[s,e]=ct.useState(0),[t,r]=ct.useState(0),[o,l]=ct.useState(!1),[c,f]=ct.useState({at:0,of:20}),[d,h]=ct.useState({w:window.innerWidth,h:window.innerHeight}),g=ct.useRef([]),x=ct.useRef({pos:0,vel:0,target:0,dragging:!1,lastX:0,lastT:0,raf:0,downX:0,downOn:-1,from:0});ct.useEffect(()=>{const F=()=>h({w:window.innerWidth,h:window.innerHeight});return window.addEventListener("resize",F),()=>window.removeEventListener("resize",F)},[]);const m=ct.useCallback(()=>{const F=x.current;cancelAnimationFrame(F.raf);let W=performance.now();const ee=j=>{const re=Math.min(.05,(j-W)/1e3);W=j,F.dragging||(F.vel+=((F.target-F.pos)*90-F.vel*19)*re,F.pos+=F.vel*re),e(F.pos),F.dragging||Math.abs(F.target-F.pos)>8e-4||Math.abs(F.vel)>.002?F.raf=requestAnimationFrame(ee):(F.pos=F.target,e(F.pos))};F.raf=requestAnimationFrame(ee)},[]),_=ct.useCallback(F=>{const W=x.current;W.target=Math.max(0,Math.min(Hi.length-1,Math.round(F))),m()},[m]);ct.useEffect(()=>{var W;const F=Math.round(s);if(F!==t){r(F);try{(W=navigator.vibrate)==null||W.call(navigator,8)}catch{}}},[s,t]),ct.useEffect(()=>{g.current.forEach((F,W)=>{F&&(W===t?(F.muted=o,F.play().catch(()=>{F.muted=!0,l(!0),F.play().catch(()=>{})})):(F.pause(),F.muted=!0))})},[t,o]),ct.useEffect(()=>{const F=W=>{if(W.key==="ArrowRight"&&_(x.current.target+1),W.key==="ArrowLeft"&&_(x.current.target-1),W.key===" "){const ee=g.current[t];ee&&(W.preventDefault(),ee.paused?ee.play():ee.pause())}};return window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)},[_,t]);const A=ct.useRef({locked:!1,quietAt:0,sum:0,stepAt:0}),C=F=>{const W=A.current,ee=performance.now(),j=Math.abs(F.deltaX)>Math.abs(F.deltaY)?F.deltaX:F.deltaY;if(W.locked)if(ee-W.quietAt>160&&ee-W.stepAt>420)W.locked=!1;else{W.quietAt=ee;return}ee-W.quietAt>160&&(W.sum=0),W.quietAt=ee,W.sum+=j,!(Math.abs(W.sum)<18)&&(_(x.current.target+Math.sign(W.sum)),W.sum=0,W.locked=!0,W.stepAt=ee)},y=Math.min(d.w*(d.w<720?.56:.29),460),S=F=>{var ee;const W=x.current;W.dragging=!0,W.lastX=F.clientX,W.lastT=performance.now(),W.vel=0,W.from=Math.round(W.pos),W.downX=F.clientX,W.downOn=Number(((ee=F.target.closest("[data-i]"))==null?void 0:ee.getAttribute("data-i"))??-1),F.currentTarget.setPointerCapture(F.pointerId),m()},T=F=>{const W=x.current;if(!W.dragging)return;const ee=performance.now(),j=(F.clientX-W.lastX)/y,re=W.pos-W.from,G=Math.abs(re)<.6?1:.6;W.pos=Math.max(-.4,Math.min(Hi.length-.6,W.pos-j*G)),W.vel=-j/Math.max(.008,(ee-W.lastT)/1e3),W.lastX=F.clientX,W.lastT=ee},L=F=>{const W=x.current;if(W.dragging){if(W.dragging=!1,Math.abs(F.clientX-W.downX)<6&&W.downOn>=0)W.target=W.downOn;else{const ee=W.pos-W.from+W.vel*.12,j=Math.abs(ee)>.12?Math.sign(ee):0;W.target=Math.max(0,Math.min(Hi.length-1,W.from+j))}m()}},P=ct.useRef(null),z=F=>{var ee;const W=(ee=P.current)==null?void 0:ee.getBoundingClientRect();W&&_((F.clientX-W.left)/W.width*(Hi.length-1))},D=d.w<720,O=Math.min(d.w*(D?.86:.48),760),E=O*9/16,U=Math.min(d.h*(D?.5:.56),D?460:520),q=U*9/16,H=Hi[t];return be.jsxs("div",{className:"gal",onWheel:C,children:[be.jsxs("p",{className:"gal-sub",children:["NISCHE AT KULTUR BUNKER — STUTTGART, NOV 2026 — ",Hi.length," TAKES"]}),be.jsx("div",{className:"gal-stage",onPointerDown:S,onPointerMove:T,onPointerUp:L,onPointerCancel:L,children:Hi.map((F,W)=>{const ee=W-s,j=Math.min(1,Math.abs(ee)),re=F.tall?q:O,G=F.tall?U:E,X=1-.42*j,k=(W%2?.16:.07)*d.h*j,ie=ee*y;return be.jsxs("div",{className:`gal-card ${W===t?"on":""}`,style:{width:re,height:G,transform:`translate(-50%, -50%) translate(${ie}px, ${k-(1-j)*14}px) scale(${X})`,zIndex:100-Math.round(Math.abs(ee)*10),opacity:Math.max(0,1-.5*j-.25*Math.max(0,Math.abs(ee)-1))},"data-i":W,role:"group","aria-label":`${vo(W+1)} ${F.name}`,children:[be.jsx("video",{ref:N=>{g.current[W]=N},src:`/media/${F.id}.mp4`,poster:`/media/${F.id}.jpg`,loop:!0,playsInline:!0,preload:Math.abs(ee)<1.5?"auto":"metadata",disablePictureInPicture:!0,disableRemotePlayback:!0,muted:!0,onTimeUpdate:N=>{W===t&&f({at:N.currentTarget.currentTime,of:N.currentTarget.duration||20})}}),W===t&&be.jsxs("span",{className:"gal-hud",children:[be.jsxs("span",{className:"lime",children:["▶ ",F.name.toUpperCase()]}),be.jsxs("span",{children:[$f(c.at)," / ",$f(c.of)]})]})]},F.id)})}),be.jsxs("div",{className:"gal-ruler-wrap",children:[be.jsx("div",{className:"gal-names",children:Hi.map((F,W)=>be.jsxs("button",{type:"button",className:W===t?"on":"",onClick:()=>_(W),children:[vo(W+1),be.jsxs("span",{className:"nm",children:[" ",F.name.toUpperCase()]})]},F.id))}),be.jsx("div",{className:"gal-ruler",ref:P,onPointerDown:F=>{F.currentTarget.setPointerCapture(F.pointerId),z(F)},onPointerMove:F=>{F.buttons&&z(F)},children:be.jsx("span",{className:"gal-mark",style:{left:`${Math.max(0,Math.min(Hi.length-1,s))/(Hi.length-1)*100}%`}})})]}),be.jsxs("div",{className:"gal-foot",children:[be.jsxs("span",{children:[H.tall?"9:16":"16:9"," · ",$f(c.of)," · ",vo(t+1)," / ",vo(Hi.length)]}),be.jsxs("span",{className:"gal-btns",children:[be.jsx("button",{type:"button",onClick:()=>l(F=>!F),"aria-label":o?"Sound on":"Sound off",children:o?"♪ OFF":"♪ ON"}),be.jsx("button",{type:"button",onClick:()=>_(x.current.target-1),"aria-label":"Previous",children:"←"}),be.jsx("button",{type:"button",onClick:()=>_(x.current.target+1),"aria-label":"Next",children:"→"})]})]})]})}function TT({page:s,onClose:e,onGo:t}){return be.jsx("div",{className:`page ${s==="performances"?"wide":""}`,onClick:e,children:be.jsxs("article",{onClick:r=>r.stopPropagation(),children:[be.jsxs("nav",{className:"tabs",children:[["about","instrument","performances"].map(r=>be.jsx("button",{className:r===s?"on":"",onClick:()=>t(r),children:r},r)),be.jsxs("button",{className:"close",onClick:e,"aria-label":"close",children:[be.jsx("span",{className:"cl",children:"close "}),"×"]})]}),s==="about"&&be.jsxs("section",{children:[be.jsx("h2",{children:"The machine reads, the hand leads."}),be.jsxs("p",{children:[be.jsx("b",{children:"<N4TH>"})," is the visual instrument of Nathalia Cury, a Brazilian art director based in Stuttgart for six years. With a background in typography, editorial design and brand identity, she brings a designer's eye to the club."]}),be.jsx("p",{children:"She built <N4TH> together with AI, using it as a design partner from the first sketches in Figma Make to hand tracking with MediaPipe and real-time graphics in Three.js. The result is a tool that sits between graphic design, code and performance."}),be.jsx("p",{children:"On stage, a camera reads her hands and the music reads the room. Every gesture becomes a move in the visuals: a fist gathers, an open palm releases, a clap breaks everything open. She moves between 2D and 3D worlds, turns colour palettes live, or lets the system run on its own and evolve with the night."}),be.jsx("h3",{children:"Contact"}),be.jsxs("p",{children:[be.jsx("a",{href:"mailto:cury.nathalia@gmail.com",children:"cury.nathalia@gmail.com"}),be.jsx("br",{}),be.jsx("a",{href:"https://instagram.com/nathcury",target:"_blank",rel:"noreferrer",children:"@nathcury"})]})]}),s==="instrument"&&be.jsxs("section",{children:[be.jsx("h2",{children:"Built with AI, played by hand."}),be.jsx("p",{children:"The tool runs in a browser. It listens to the music — its kicks, its builds, its silences — and it watches the hands. Every visual answers both: the sound gives the pulse, the hand gives the decision."}),be.jsxs("ul",{children:[be.jsxs("li",{children:[be.jsx("b",{children:"one finger"})," slow · ",be.jsx("b",{children:"five"})," fast"]}),be.jsxs("li",{children:[be.jsx("b",{children:"a fist"})," gathers · ",be.jsx("b",{children:"an open palm"})," releases"]}),be.jsxs("li",{children:[be.jsx("b",{children:"a clap"})," breaks everything open"]}),be.jsx("li",{children:"the music: pulse, kicks, build-ups, the drop"})]}),be.jsx("p",{children:"Every part of it — the visuals, the way they listen, the way they read a gesture — was written in conversation with AI. The machine can play on its own, so the performance stays with the question: who leads and who follows?"}),be.jsxs("figure",{children:[be.jsx("img",{src:"/media/instrument.jpg",alt:"The instrument: the visuals of the set, layers, effects, the sound and the hands"}),be.jsx("figcaption",{children:"The instrument as it is played: the set of visuals, the layers, the effects, what it hears."})]}),be.jsxs("figure",{children:[be.jsx("img",{src:"/media/library.jpg",alt:"The library of visuals, and the set chosen from it"}),be.jsx("figcaption",{children:"The library: every visual of the instrument, and below, the set chosen for the night."})]})]}),s==="performances"&&be.jsx(wT,{})]})})}const xs=[{id:"dust",name:"Dust",note:"a fist gathers it into a circle"},{id:"sphere",name:"Planet",note:"a fist pulls it out of shape"},{id:"line",name:"Line",note:"an open hand unfolds it"},{id:"jellyfish",name:"Jelly",note:"a fist closes the bells"},{id:"dandelion",name:"Dandelion",note:"the hand moves the wind"},{id:"standby",name:"Standby",note:"a fist closes the picture to a point"}],vd={dust:{colors:Zr(0,0,"grayscale"),params:{"look.glow":2.2,"field.size":1.3,"field.drift":1.8,"look.trail":.55,"sound.beat":.12,"sound.sparks":.5,"sound.bass":.4}},line:{colors:Zr(0,0,"grayscale"),params:{"line.zoom":.9,"line.weight":1.4,"line.wave":2.65,"line.speed":.65,"line.birth":.6,"hands.open":1,"hands.pull":1,"hands.clap":1,"sound.beat":.7,"sound.bass":2,"sound.grow":.75}},dandelion:{colors:Zr(200,60,"black"),params:{"sound.gust":0,"sound.wind":1.4,"field.return":7.5,"field.glide":1.2,"field.sway":1.9,"field.bounce":0,"field.drift":.44,"field.backdrop":0,"colour.speed":2.5,"colour.offset":0,"colour.palette":0,"colour.depth":.32}},jellyfish:{colors:Zr(245,100,"contrast"),params:{"swarm.backdrop":0,"swarm.height":.3,"swarm.arrival":11,"colour.palette":3,"sound.flow":2.4,"swarm.drift":1.9,"swarm.pulse":1.25,"swarm.water":1.2,"swarm.flow":1.2,"sound.open":1,"sound.swell":1.2,"sound.beat":.35}},standby:{colors:Zr(0,0,"grayscale"),params:{"sound.quiet":.4,"grid.words":0}},sphere:{colors:Zr(0,0,"grayscale"),params:{"shape.style":2,"shape.size":1.2,"shape.morph":.32,"shape.lobes":1.05,"shape.detail":2,"motion.spin":.4,"motion.flow":1,"motion.dust":1,"motion.points":3600,"sound.beat":0,"sound.drop":0,"sound.bass":.3,"sound.squash":1,"sound.spin":1.4,"shape.steady":1,"motion.glide":2}}},bT={dandelion:"hue-rotate(2.59rad) saturate(0.95) contrast(1.28)",line:"sepia(1) saturate(4) hue-rotate(188deg) brightness(1.15)"},CT=Zr(110,70,"contrast"),Yh={dust:{path:"field.count",min:200,max:5e3,start:.8},line:{path:"line.count",min:1,max:40,start:11/39},dandelion:{path:"field.count",min:1,max:12,start:.2},jellyfish:{path:"swarm.count",min:1,max:8,start:.43},standby:{path:"grid.detail",min:.2,max:1,start:1},sphere:{path:"shape.detail",min:2,max:6,start:0}},Fg=s=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`,Jr=[{name:"Johan Nex · Machine",src:"/tracks/m4n4th.mp3",seconds:362},{name:"Johan Nex · Human",src:"/tracks/human-3.mp3",seconds:247}];class RT{constructor(e,t){B(this,"parts");this.canvas=e,this.ctx=t;const r=()=>{const f=document.createElement("canvas");return f.width=e.width,f.height=e.height,f},o=r(),l=r(),c=new Iw(o,o.getContext("2d"),0);c.setParams({"look.flow":2.65,"look.zoom":2.85,"look.detail":2,"look.veins":1.35,"look.grain":.3}),this.parts=[{r:c,c:o,filter:"hue-rotate(-0.2rad) contrast(1.3)",alpha:.45,blend:"source-over",colors:CT},{r:new Mw(l,l.getContext("2d")),c:l,filter:"saturate(1.88) contrast(1.3)",alpha:.94,blend:"screen",colors:vd.jellyfish.colors}]}setParams(e){var t,r;(r=(t=this.parts[1].r).setParams)==null||r.call(t,e)}render(e,t,r){const{canvas:o,ctx:l}=this;l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,o.width,o.height);for(const c of this.parts)(c.c.width!==o.width||c.c.height!==o.height)&&(c.c.width=o.width,c.c.height=o.height),c.r.render(e,c.colors,r),l.globalAlpha=c.alpha,c.blend==="screen"?(l.filter=`${c.filter} invert(1)`,l.globalCompositeOperation="multiply",l.drawImage(c.c,0,0),l.globalCompositeOperation="lighter"):l.globalCompositeOperation=c.blend,l.filter=c.filter,l.drawImage(c.c,0,0);l.filter="none",l.globalAlpha=1,l.globalCompositeOperation="source-over"}destroy(){var e,t;for(const r of this.parts)(t=(e=r.r).destroy)==null||t.call(e)}}function PT(s,e,t){return s==="dust"?new ow(e,t):s==="line"?new lw(e,t):s==="jellyfish"?new RT(e,t):s==="standby"?new Cw(e,t):s==="sphere"?new Rw(e,t):new gw(e,t)}const Qh={dandelion:{path:"field.glide",start:1.2},jellyfish:{path:"swarm.water",start:1.2},sphere:{path:"motion.glide",start:2}},Mc={dandelion:[{path:"sound.stems",label:"Stems",start:1},{path:"sound.seeds",label:"Seeds",start:3}],jellyfish:[{path:"sound.bell",label:"Bells",start:1},{path:"sound.tentacles",label:"Tentacles",start:3}]},LT=["all","low","mid","high"],IT=()=>Object.fromEntries(Object.values(Mc).flat().map(s=>[s.path,s.start])),eh=(s,e,t,r)=>{const o=Yh[s],l=o.min+e*(o.max-o.min),c=Qh[s],f=Object.fromEntries((Mc[s]??[]).map(d=>[d.path,(r==null?void 0:r[d.path])??d.start]));return{...vd[s].params,...f,...c&&t!==void 0?{[c.path]:t}:{},[o.path]:o.max>2?Math.round(l):l}};function DT(s){var r,o,l;const e=document.querySelector(s);if(!e||s===".stage")return{top:"42%",left:"50%",transform:"translate(-50%, -50%)"};const t=e.getBoundingClientRect();if(window.innerWidth<=720&&(s===".track"||s===".cards")){const c=(r=document.querySelector(".desk"))==null?void 0:r.getBoundingClientRect(),f=e.getBoundingClientRect();if(c)return{top:c.top-16,left:Math.min(window.innerWidth-150,Math.max(150,f.left+f.width/2)),transform:"translate(-50%, -100%)"}}if(s===".fx"&&window.innerWidth<=720){const c=(o=document.querySelector(".fx.open"))==null?void 0:o.getBoundingClientRect();if(c)return{top:c.top-16,left:window.innerWidth/2,transform:"translate(-50%, -100%)"};const f=(l=document.querySelector(".fxbtn"))==null?void 0:l.getBoundingClientRect();if(f)return{top:f.top-16,left:Math.min(window.innerWidth-150,Math.max(150,f.left+f.width/2)),transform:"translate(-50%, -100%)"}}return s===".fx"?{top:t.top+t.height/2,left:t.left-14,transform:"translate(-100%, -50%)"}:{top:t.top-16,left:t.left+t.width/2,transform:"translate(-50%, -100%)"}}const UT=Math.max(1,Math.min(5,Number(new URLSearchParams(location.search).get("guide"))||2)),NT={left:null,right:null},FT={dust:.35,sphere:0,line:.8,jellyfish:0,dandelion:.35,standby:.8},kT=["5 fingers","2 fingers","fist","pinch","clap"],OT={bass:0,lowMid:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0,onset:0};function BT(s,e,t){return{position:{x:s,y:e},gesture:t>.5?"fist":"open",openness:1-t,fingerCount:t>.5?0:3,velocity:0}}const th=[{key:"play",at:".track",text:"Play a track — the visual moves with the music."},{key:"hand",at:".stage",text:"Raise your hand to the camera — or move the mouse."},{key:"fist",at:".stage",text:"Close your hand (or hold the mouse button) — then open it."},{key:"clap",at:".stage",text:"Clap (or click quickly)."},{key:"fx",at:".fx",text:"Shape it: trail, colour, amount."},{key:"switch",at:".cards",text:"Try another visual."}];function zT(){const s=ct.useRef(null),[e,t]=ct.useState("dust"),[r,o]=ct.useState(!0),[l,c]=ct.useState(0),[f,d]=ct.useState(Jr[0].seconds/xs.length),h=w=>{t(w),c(M=>M+1)};ct.useEffect(()=>{if(!r)return;const w=window.setInterval(()=>{t(M=>xs[(xs.findIndex(Q=>Q.id===M)+1)%xs.length].id)},f*1e3);return()=>window.clearInterval(w)},[r,l,f]);const g=ct.useRef(e);g.current=e;const[x,m]=ct.useState(0),[_,A]=ct.useState(0),[C,y]=ct.useState(()=>Object.fromEntries(xs.map(w=>[w.id,Yh[w.id].start]))),[S,T]=ct.useState(!1);ct.useEffect(()=>{m(0),A(0),y(w=>({...w,[e]:Yh[e].start}))},[e]);const[L,P]=ct.useState(()=>Object.fromEntries(Object.entries(Qh).map(([w,M])=>[w,M.start]))),[z,D]=ct.useState(IT),O=ct.useRef({trail:x,hue:_,amounts:C,glides:L,bands:z});O.current={trail:x,hue:_,amounts:C,glides:L,bands:z};const[E,U]=ct.useState(null),[q,H]=ct.useState("off"),F=ct.useRef(NT),W=ct.useRef(null);W.current=E;const ee=ct.useRef({x:.5,y:.5,on:!1,down:0,closed:0,clapAt:0,moved:0}),j=ct.useCallback(async()=>{H("asking");try{const w=await navigator.mediaDevices.getUserMedia({video:{width:640,height:360,facingMode:"user"}}),M=document.createElement("video");M.muted=!0,M.playsInline=!0,M.srcObject=w,await M.play(),U(M),H("on")}catch{H("refused")}},[]);ct.useEffect(()=>{j()},[j]);const re=ct.useRef(null),[G,X]=ct.useState(null),[k,ie]=ct.useState(0),[N,K]=ct.useState(Jr[0].seconds),Ee=w=>{K(w),w>0&&d(w/xs.length)},Me=ct.useRef(0),ve=ct.useRef("");Me.current=k;const I=ct.useRef(null),ce=ct.useCallback(w=>{var Q;let M=re.current;if(!M){M=new Audio,M.crossOrigin="anonymous",M.loop=!0,M.addEventListener("timeupdate",()=>ie(M.currentTime)),M.addEventListener("loadedmetadata",()=>{Ee(M.duration||0),Math.abs(M.currentTime-Me.current)>1&&(M.currentTime=Me.current)}),re.current=M;const le=new AudioContext,_e=le.createMediaElementSource(M),de=le.createAnalyser();de.fftSize=2048,de.smoothingTimeConstant=.55,_e.connect(de),de.connect(le.destination),I.current={ctx:le,analyser:de,data:new Uint8Array(de.frequencyBinCount),state:gT()}}if((Q=I.current)==null||Q.ctx.resume(),G===w){M.pause(),X(null);return}if(ve.current!==Jr[w].src){ve.current&&(Me.current=0,ie(0)),Ee(Jr[w].seconds),ve.current=Jr[w].src,M.src=Jr[w].src,M.currentTime=Me.current;const le=M;fetch(Jr[w].src).then(_e=>_e.blob()).then(_e=>{const de=le.currentTime,we=!le.paused;le.src=URL.createObjectURL(_e),le.currentTime=de,we&&le.play().catch(()=>{})}).catch(()=>{})}M.play().catch(()=>{}),X(w)},[G]),[oe,Ae]=ct.useState(new Set),[Se,xe]=ct.useState(()=>{try{return!localStorage.getItem("n4th-guide-seen")}catch{return!0}}),Ye=w=>{xe(w);try{localStorage.setItem("n4th-guide-seen","1")}catch{}},Ie=ct.useCallback(w=>Ae(M=>M.has(w)?M:new Set(M).add(w)),[]);ct.useEffect(()=>{G!==null&&Ie("play")},[G,Ie]);const He=th.find(w=>!oe.has(w.key));ct.useEffect(()=>{if(!He)try{localStorage.setItem("n4th-guide-seen","1")}catch{}},[He]),ct.useEffect(()=>{const w=s.current,M=w.getContext("2d"),Q=document.createElement("canvas"),le=Q.getContext("2d");let _e=null,de=null;const we=3;let ge=performance.now(),me=0;const Ve=ST();let Ge=0,De="",Le=.3,tt=-1,ut=0,ht=-1e9,J=0,Ue=0,ye=450;const Xe=new Uint8Array(300),Fe=(ft,st,Ot)=>{(ft.width!==st||ft.height!==Ot)&&(ft.width=st,ft.height=Ot)},Te=()=>{const ft=Math.min(window.devicePixelRatio||1,1920/Math.max(1,window.innerWidth)),st=Math.round(window.innerWidth*ft),Ot=Math.round(window.innerHeight*ft);Fe(w,st,Ot),Fe(Q,st,Ot),_e&&Fe(_e.work,st,Ot),de&&Fe(de.work,st,Ot)},Je=ft=>{const st=document.createElement("canvas");st.width=w.width,st.height=w.height;const Ot=PT(ft,st,st.getContext("2d"));return{v:ft,r:Ot,amount:-1,work:st,alpha:0,circle:-1,go:-1}},gt=ft=>{var ci,vi,xi,_i,qi,ar,Cn,jn,Nn,Dt,Fn,Sn;me=requestAnimationFrame(gt);const st=Math.min(.1,(ft-ge)/1e3);ge=ft,Te();const Ot=g.current;_e?_e.v!==Ot&&((vi=de==null?void 0:(ci=de.r).destroy)==null||vi.call(ci),de=_e,_e=Je(Ot)):(_e=Je(Ot),_e.alpha=1),_e.alpha=Math.min(1,_e.alpha+st/we),de&&(de.alpha=Math.max(0,de.alpha-st/we),de.alpha<=0&&((_i=(xi=de.r).destroy)==null||_i.call(xi),de=null));for(const b of[_e,de])b&&W.current&&b.video!==W.current&&((ar=(qi=b.r).setVideoElement)==null||ar.call(qi,W.current),b.video=W.current);const Qt=ee.current;Qt.closed+=((Qt.down&&ft-Qt.down>220?1:0)-Qt.closed)*Math.min(1,st*10);let tn=F.current;!tn.left&&!tn.right&&Qt.on&&ft-Qt.moved<4e3&&(tn={left:BT(Qt.x,Qt.y,Qt.closed),right:null,clapping:ft-Qt.clapAt<120,clapIntensity:1});let an=OT;const yt=I.current;if(yt&&re.current&&!re.current.paused){yt.analyser.getByteFrequencyData(yt.data);let b=0;for(let ae=1;ae<300;ae++){const se=yt.data[ae]-(Xe[ae]??0);se>0&&(b+=se),Xe[ae]=yt.data[ae]}ye+=(b-ye)*(1-Math.exp(-st*.25));let te=0;for(let ae=1;ae<=6;ae++)te+=yt.data[ae];te/=6,tt<0&&(tt=te),te-tt>40&&te-ut>12&&ft-ht>1e3&&(ht=ft,J=Math.min(1,.7+(te-tt-40)/30)),tt+=(te-tt)*(1-Math.exp(-st*.6)),ut=te,an={...xT(yt.data,yt.ctx.sampleRate,yt.state,.8,Date.now()),live:!0}}const Kt=new Set;for(const b of[tn.left,tn.right])b&&(b.gesture==="fist"?Kt.add("fist"):b.gesture==="pinch"?Kt.add("pinch"):b.fingerCount===2?Kt.add("2 fingers"):((b.fingerCount??0)>=5||(b.openness??0)>.85)&&Kt.add("5 fingers"));tn.clapping&&(Ge=ft),ft-Ge<500&&Kt.add("clap");const $n=[...Kt].sort().join("|");$n!==De&&(De=$n,At(Kt)),JE(st,[AT(tn,Ve,st)]),ZE(0);const ln=O.current;le.globalCompositeOperation="source-over",le.globalAlpha=1,le.fillStyle="#000",le.fillRect(0,0,Q.width,Q.height);for(const b of[de,_e]){if(!b)continue;const te=ln.amounts[b.v],ae=ln.glides[b.v],se=te+(ae??0)*10+(Mc[b.v]??[]).reduce((Ce,qe,je)=>Ce+(ln.bands[qe.path]??0)*100*(je+1),0);if(b.v==="dust"){const Ce=an.live?Math.max(0,Math.min(1,(ye-520)/260)):0;Le+=((1-Ce*.6)*.3-Le)*(1-Math.exp(-st*.3)),(Math.abs(Le-b.circle)>.01||Math.abs(Ce-b.go)>.04||Math.abs(se-b.amount)>.001)&&((jn=(Cn=b.r).setParams)==null||jn.call(Cn,{...eh(b.v,te,ae,ln.bands),"form.circle":Le,"sound.quiet":1.6*(1-Ce)+.4,"sound.beat":.12+.8*Ce,"sound.sparks":.5+1.3*Ce,"sound.bass":.4+.8*Ce,"field.drift":1.8+.8*Ce}),b.amount=se,b.circle=Le,b.go=Ce)}else if(b.v==="sphere"){const Ce=(ft-ht)/1e3,qe=Ce<.25?1:Math.exp(-(Ce-.25)*1.1);Ue+=(qe-Ue)*(1-Math.exp(-st*(qe>Ue?10:3)));const je=an.live?Math.max(0,Math.min(1,(ye-520)/260)):0,_t=.32+.22*je,vt=_t+(.85-_t)*Ue;(Math.abs(vt-b.circle)>.003||Math.abs(je-b.go)>.008||Math.abs(se-b.amount)>.001)&&((Dt=(Nn=b.r).setParams)==null||Dt.call(Nn,{...eh(b.v,te,ae,ln.bands),"shape.morph":vt,"motion.flow":1+1.6*je,"motion.spin":.4+.5*je}),b.amount=se,b.circle=vt,b.go=je)}else Math.abs(se-b.amount)>.001&&((Sn=(Fn=b.r).setParams)==null||Sn.call(Fn,eh(b.v,te,ae,ln.bands)),b.amount=se);const fe=ft-ht<140&&!tn.clapping?{...tn,clapping:!0,clapIntensity:J*FT[b.v]}:tn;b.r.render(fe,vd[b.v].colors,an);const Be=b.alpha*b.alpha*(3-2*b.alpha),ze=ln.hue?b.v==="dust"||b.v==="standby"?`sepia(1) saturate(5) hue-rotate(${ln.hue-40}deg)`:`hue-rotate(${ln.hue}deg)`:"";le.filter=[bT[b.v],ze].filter(Boolean).join(" ")||"none",le.globalAlpha=Be,le.globalCompositeOperation="lighter",le.drawImage(b.work,0,0)}le.filter="none",le.globalCompositeOperation="source-over",le.globalAlpha=1,M.globalCompositeOperation="source-over";const Ki=ln.trail*ln.trail*1.5,Xn=Ki<.005?0:Math.exp(-st*Math.LN2/Ki);M.globalAlpha=1-Xn,M.fillStyle="#000",M.fillRect(0,0,w.width,w.height),M.globalAlpha=1,M.globalCompositeOperation=Xn>0?"lighten":"source-over",M.drawImage(Q,0,0),M.globalCompositeOperation="source-over"};return me=requestAnimationFrame(gt),()=>{var ft,st,Ot,Qt;cancelAnimationFrame(me),(st=_e==null?void 0:(ft=_e.r).destroy)==null||st.call(ft),(Qt=de==null?void 0:(Ot=de.r).destroy)==null||Qt.call(Ot)}},[]);const et=w=>{const M=ee.current;M.x=w.clientX/window.innerWidth,M.y=w.clientY/window.innerHeight,M.on=!0,M.moved=performance.now(),q!=="on"&&Ie("hand")},Ze=w=>{et(w),ee.current.down=performance.now()},rt=()=>{const w=ee.current,M=performance.now()-w.down;w.down&&M<220&&(w.clapAt=performance.now(),Ie("clap")),w.down&&M>400&&Ie("fist"),w.down=0},[lt,bt]=ct.useState(!1),[Y,At]=ct.useState(new Set),dt=ct.useCallback(w=>{var M,Q;F.current=w,bt(!!(w.left||w.right)),(w.left||w.right)&&Ie("hand"),(((M=w.left)==null?void 0:M.gesture)==="fist"||((Q=w.right)==null?void 0:Q.gesture)==="fist")&&Ie("fist"),w.clapping&&Ie("clap")},[Ie]),[Tt,ke]=ct.useState(()=>{const w=location.pathname.replace(/^\/+|\/+$/g,"");return["about","instrument","performances"].includes(w)?w:null});ct.useEffect(()=>{Tt==="performances"&&re.current&&!re.current.paused&&(re.current.pause(),X(null))},[Tt]);const kt=w=>{ke(w);try{history.replaceState(null,"","/"+(w??""))}catch{}};return be.jsxs(be.Fragment,{children:[be.jsx("canvas",{ref:s,className:"stage",onPointerMove:et,onPointerDown:Ze,onPointerUp:rt,onPointerLeave:()=>{ee.current.on=!1,ee.current.down=0}}),E&&be.jsx(tT,{videoElement:E,onHandData:dt}),be.jsxs("header",{className:"top",children:[be.jsx("div",{className:"brand",children:"<N4TH>"}),be.jsx("nav",{children:["about","instrument","performances"].map(w=>be.jsx("button",{onClick:()=>kt(w),children:w},w))})]}),Se&&He&&!Tt&&!(S&&window.innerWidth<=720)&&be.jsxs("div",{className:`guide g${UT}`,style:DT(He.at),"data-at":He.at,children:[be.jsxs("span",{className:"count",children:[th.indexOf(He)+1,"/",th.length]}),be.jsx("span",{children:He.text}),He.key==="hand"&&q!=="on"&&be.jsx("button",{className:"cam",onClick:j,disabled:q==="asking",children:q==="refused"?"camera not allowed — the mouse plays":q==="asking"?"…":"allow camera"}),be.jsx("button",{className:"x",onClick:()=>Ye(!1),title:"Hide the guide",children:"×"})]}),be.jsxs("aside",{className:`fx ${S?"open":""}`,onPointerDown:()=>Ie("fx"),children:[be.jsx("div",{className:"fxt",children:"EFFECTS"}),be.jsxs("label",{children:["Trail",be.jsx("input",{type:"range",min:0,max:1,step:.01,value:x,onChange:w=>m(+w.target.value)})]}),be.jsxs("label",{children:["Colour",be.jsx("input",{type:"range",min:0,max:360,step:1,value:_,onChange:w=>A(+w.target.value)})]}),be.jsxs("label",{children:["Amount",be.jsx("input",{type:"range",min:0,max:1,step:.01,value:C[e],onChange:w=>y(M=>({...M,[e]:+w.target.value}))})]}),(Mc[e]??[]).map(w=>be.jsxs("div",{className:"bands",role:"group","aria-label":`${w.label} move with`,children:[be.jsx("span",{children:w.label}),LT.map((M,Q)=>be.jsx("button",{type:"button",className:(z[w.path]??w.start)===Q?"on":"",onClick:()=>D(le=>({...le,[w.path]:Q})),children:M},M))]},w.path)),Qh[e]&&be.jsxs("label",{children:["Glide · ",(L[e]??0).toFixed(2),be.jsx("input",{type:"range",min:0,max:3,step:.05,value:L[e]??0,onChange:w=>P(M=>({...M,[e]:+w.target.value}))})]})]}),be.jsxs("footer",{className:"desk",children:[be.jsx("div",{className:"cards",children:xs.map((w,M)=>be.jsxs("button",{className:`card ${e===w.id?"on":""}`,onClick:()=>{h(w.id),w.id!=="dust"&&Ie("switch")},title:w.note,children:[be.jsx("img",{src:ET[w.id],alt:""}),be.jsx("span",{className:"num",children:M+1}),be.jsx("span",{className:"name",children:w.name})]},w.id))}),be.jsx("div",{className:"sep"}),be.jsxs("div",{className:"tracks",children:[Jr.map((w,M)=>be.jsxs("button",{className:`track ${G===M?"on":""}`,onClick:()=>ce(M),children:[be.jsx("span",{children:G===M?"❚❚":"▶"})," ",w.name]},w.src)),be.jsxs("div",{className:"timeline",children:[be.jsx("input",{type:"range",min:0,max:Math.max(1,N),step:.1,value:k,onChange:w=>{const M=re.current,Q=+w.target.value;ie(Q),M&&(M.currentTime=Q)}}),be.jsxs("span",{children:[Fg(k)," / ",Fg(N)]})]})]}),be.jsx("div",{className:"sep"}),be.jsx("button",{className:`autobtn ${r?"on":""}`,onClick:()=>o(w=>!w),title:"Auto: the track shared among the visuals, one after the other",children:"auto"}),be.jsx("button",{className:`fxbtn ${S?"on":""}`,onClick:()=>{T(w=>!w),Ie("fx")},children:"FX"}),be.jsx("button",{className:`camera ${q==="on"?"on":""}`,onClick:q==="on"?void 0:j,title:"Play with your hand through the camera",children:q==="on"?be.jsxs(be.Fragment,{children:[be.jsx("span",{className:`dot ${lt?"seen":""}`,children:"●"})," hand"]}):q==="refused"?"mouse":"camera"}),be.jsx("div",{className:"words",children:kT.map(w=>be.jsx("span",{className:Y.has(w)?"lit":"",children:w},w))})]}),Tt&&be.jsx(TT,{page:Tt,onClose:()=>kt(null),onGo:kt})]})}y_.createRoot(document.getElementById("root")).render(be.jsx(ct.StrictMode,{children:be.jsx(zT,{})}));
